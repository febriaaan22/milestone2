export interface PostThreads{
    threadTitle: string;
    category: string;
    user_id: number;
    threadDesc: Text;
}
export interface EditThreads{
    threadId: number;
    threadTitle: string;
    category: string;
    threadDesc: Text;
}
export interface DeleteThreads{
    threadId: number;
}
export interface GetAllThreadsbyCategory{
    category: string;
}