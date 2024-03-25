export interface PostComment {
  comment: Text;
  threadId: number;
  userId: number;
}
export interface GetAllCommentbyThreadId {
  threadId: number;
}
export interface EditComment {
  commentId: number;
  comment: Text;
}
export interface DeleteComment {
  commentId: number;
}
