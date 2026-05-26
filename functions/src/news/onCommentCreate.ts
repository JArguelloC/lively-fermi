import * as functions from "firebase-functions";

export const onCommentCreate = functions.firestore
  .document("news/{newsId}/comments/{commentId}")
  .onCreate(async (snap: any, context: any) => {
    // TODO: Implement comment creation logic
    return null;
  });
