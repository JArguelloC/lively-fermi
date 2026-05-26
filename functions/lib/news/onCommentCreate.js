"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onCommentCreate = void 0;
const functions = require("firebase-functions");
exports.onCommentCreate = functions.firestore
    .document("news/{newsId}/comments/{commentId}")
    .onCreate(async (snap, context) => {
    // TODO: Implement comment creation logic
    return null;
});
//# sourceMappingURL=onCommentCreate.js.map