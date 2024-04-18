"use client";

import React, { useState, useEffect } from "react";
import { CommentCard } from "@/components";
import { Box, Card, Skeleton } from "@mui/material";
import { Comment } from "@/components/CommentCard/type";
import styles from "./CommentCardContainer.module.scss";

const CommentsContainer: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      const dummyComments: Comment[] = [
        {
          commentId: 1,
          commentPost: "Ini adalah komentar pertama.",
          threadsId: 5,
          userId: 2,
          commentDate: "2024-03-28T10:42:08.000Z",
          createdAt: "2024-03-28T10:42:07.862Z",
          updatedAt: "2024-03-28T15:06:54.132Z",
          thread: {
            threadTitle: "testThread",
          },
          user: {
            userName: "userTest1",
          },
        },
        {
          commentId: 2,
          commentPost: "Komentar kedua dengan insight yang berbeda.",
          threadsId: 5,
          userId: 3,
          commentDate: "2024-03-29T11:00:00.000Z",
          createdAt: "2024-03-29T11:00:00.000Z",
          updatedAt: "2024-03-29T11:30:00.000Z",
          thread: {
            threadTitle: "testThread",
          },
          user: {
            userName: "userTest2",
          },
        },
        {
          commentId: 3,
          commentPost: "Komentar ketiga menambahkan perspektif baru.",
          threadsId: 5,
          userId: 4,
          commentDate: "2024-03-30T09:42:08.000Z",
          createdAt: "2024-03-30T09:42:07.862Z",
          updatedAt: "2024-03-30T10:06:54.132Z",
          thread: {
            threadTitle: "testThread",
          },
          user: {
            userName: "userTest3",
          },
        },
      ];
      setComments(dummyComments);
      setLoading(false);
    }, 2000);
  }, []);

  // Function to render Skeleton placeholders
  const renderSkeletons = () => {
    return Array.from(new Array(3)).map((_, index) => (
      <Card variant='outlined' className={styles.card} key={index}>
        <Box className={styles.container}>
          <Box className={styles.topItems}>
            <Skeleton variant='text' width='40%' height={20} className={styles.userName} />
            <Skeleton variant='text' width='60%' />
          </Box>
          <Skeleton variant='rectangular' height={60} />
        </Box>
      </Card>
    ));
  };

  return (
    <Box>
      {loading
        ? renderSkeletons()
        : comments.map((comment) => <CommentCard key={comment.commentId} comment={comment} />)}
    </Box>
  );
};

export default CommentsContainer;
