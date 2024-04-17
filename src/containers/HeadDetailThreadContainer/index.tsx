"use client";

import React, { useState, useEffect } from "react";
import { Box, Skeleton } from "@mui/material";
import styles from "./HeadDetailThreadContainer.module.scss";
import { HeadDetailThread } from "@/components";
import { ThreadData } from "@/components/HeadDetailThread/type";

const ThreadContainer: React.FC = () => {
  const [threadData, setThreadData] = useState<ThreadData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchThreadData = async () => {
      setIsLoading(true);
      try {
        // Simulated API call with setTimeout
        setTimeout(() => {
          const dummyData: ThreadData = {
            threadId: 1,
            threadTitle: "Stress Berat",
            categoryId: 2,
            userId: 5,
            threadDate: new Date().toISOString(),
            threadDesc: "Bagaimana cara untuk meredakan stress?",
            userName: "Rizal",
            categoryName: "Anxiety Disorder",
          };
          setThreadData(dummyData);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Failed to fetch thread data:", error);
        setIsLoading(false);
      }
    };

    void fetchThreadData();
  }, []);

  if (isLoading) {
    return (
      <Box className={styles.container}>
        <Skeleton variant='rectangular' width='40%' height={20} />
        <Skeleton variant='text' className={styles.titleThread} />
        <Box className={styles.subSection}>
          <Box className={styles.leftSection}>
            <Skeleton variant='text' width='30%' />
            <Skeleton variant='text' width='30%' />
          </Box>
          <Box className={styles.rightSection}>
            <Skeleton variant='text' width='30%' />
            <Skeleton variant='text' width='30%' />
          </Box>
        </Box>
        <Skeleton variant='rectangular' width='100%' height={1} />
        <Skeleton variant='text' className={styles.questionData} />
        <Skeleton variant='text' className={styles.answer} />
      </Box>
    );
  }

  if (!threadData) {
    return <div>Thread not found.</div>;
  }

  return <HeadDetailThread threadData={threadData} />;
};

export default ThreadContainer;
