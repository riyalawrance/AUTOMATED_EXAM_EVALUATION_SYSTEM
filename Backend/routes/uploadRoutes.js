import express from "express";
import multer from "multer";
import Exam from "../models/Exam.js";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const router = express.Router();

/* =========================
   S3 CLIENT
========================= */
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

/* =========================
   MULTER
========================= */
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 25 * 1024 * 1024, // 25 MB per file
  },
});

/* =========================
   HELPERS
========================= */
const getFolderName = (fieldname) => {
  switch (fieldname) {
    case "question_paper":
      return "question-paper";
    case "marking_scheme":
      return "marking-scheme";
    case "answer_scripts":
      return "answer-scripts";
    case "reference_texts":
      return "reference-text";
    default:
      return "others";
  }
};

/* =========================
   UPLOAD EVALUATION MATERIALS
   FINAL ENDPOINT:
   /api/upload/evaluation-materials
========================= */
router.post("/evaluation-materials", upload.any(), async (req, res) => {
  try {
    const { course, classId, examType, examId } = req.body;

    if (!course || !classId || !examType || !examId) {
      return res.status(400).json({
        error: "course, classId, examType and examId are required.",
      });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        error: "No files uploaded.",
      });
    }

    const uploadedFiles = [];

    for (const file of req.files) {
      const folder = getFolderName(file.fieldname);
      const key = `${course}/${classId}/${examType}/${folder}/${file.originalname}`;

      await s3.send(
        new PutObjectCommand({
          Bucket: process.env.S3_BUCKET,
          Key: key,
          Body: file.buffer,
          ContentType: file.mimetype,
        })
      );

      uploadedFiles.push({
        fieldname: file.fieldname,
        originalname: file.originalname,
        key,
      });
    }

    const updatedExam = await Exam.findByIdAndUpdate(
      examId,
      { status: "Active" },
      { new: true }
    );

    if (!updatedExam) {
      return res.status(404).json({
        error: "Files uploaded, but exam not found to update status.",
        uploadedFiles,
      });
    }

    return res.status(200).json({
      message: "Files uploaded successfully ✅",
      uploadedFiles,
      exam: updatedExam,
    });
  } catch (err) {
    console.error("Upload error:", err.stack || err);

    return res.status(500).json({
      error: err.message || "Upload failed ❌",
    });
  }
});

export default router;
