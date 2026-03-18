import mongoose from "mongoose";

const resultSchema = new mongoose.Schema(
  {
    rollNo: {
      type:     String,
      required: true,
    },

    course: {
      type:     String,
      required: true,
    },

    examType: {
      type:     String,
      required: true,
    },

    classId: {
      type:     String,
      required: true,
    },

    examId: {
      type:    String,
      default: "",
    },

    scriptKey: {
      type:    String,
      default: "",
    },

    // ── OCR transparency fields ──────────────────────────────────────────────
    extractedText: {
      type:    String,
      default: "",        // full OCR text across all pages (shown to student)
    },

    ocrPages: {
      type:    Array,
      default: [],        // per-page breakdown [{ page, text }]
    },

    ocrStatus: {
      type:    String,
      default: "pending", // pending | done | failed
    },

    ocrError: {
      type:    String,
      default: "",
    },

    ocrDoneAt: {
      type:    Date,
      default: null,
    },
    // ────────────────────────────────────────────────────────────────────────

    createdAt: {
      type:    Date,
      default: Date.now,
    },

    updatedAt: {
      type:    Date,
      default: Date.now,
    },
  },
  {
    collection: "result", // ✅ new separate collection
  }
);

export default mongoose.model("Result", resultSchema);
