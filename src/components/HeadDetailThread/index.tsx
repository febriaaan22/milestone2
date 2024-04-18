import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import styles from "./HeadDetailThread.module.scss";
import { CustomBreadcrumbs } from "@/components";
import { ThreadData } from "./type";

interface HeadDetailThreadProps {
  threadData: ThreadData;
}

const HeadDetailThread: React.FC<HeadDetailThreadProps> = ({ threadData }) => {
  const { threadTitle, userName, threadDate, threadDesc, categoryName } = threadData;

  // Helper function to format the date
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <Box className={styles.container}>
      <CustomBreadcrumbs />
      <Typography className={styles.titleThread} variant='h5' component='h1'>
        {threadTitle}
      </Typography>
      <Box className={styles.subSection}>
        <Box className={styles.leftSection}>
          <Typography className={styles.userName} variant='body1'>
            {userName}
          </Typography>
          <Typography className={styles.postTime} variant='body1'>
            {formatDate(threadDate)}
          </Typography>
        </Box>
        <Box className={styles.rightSection}>
          <Typography className={styles.category} variant='body1'>
            Category
          </Typography>
          <Typography className={styles.categoryData} variant='body1'>
            {categoryName}
          </Typography>
        </Box>
      </Box>

      <Divider />
      <Typography className={styles.questionData} variant='body1' component='h2'>
        {threadDesc}
      </Typography>
      <Typography className={styles.answer} variant='body1'>
        Answers
      </Typography>
      {/* Other components such as CommentCard can be added here */}
    </Box>
  );
};

export default HeadDetailThread;
