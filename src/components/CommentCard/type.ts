export interface Comment {
  commentId: number;
  commentPost: string;
  threadsId: number;
  userId: number;
  commentDate: string;
  createdAt: string;
  updatedAt: string;
  thread: {
    threadTitle: string;
  };
  user: {
    userName: string;
  };
}
