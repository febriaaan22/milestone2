'use client';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import ForumCard from '@/components/ForumCard';
import { timeAgo } from '@/components/utils/timeAgo';
import ThreadFilterDropdown from '@/components/ThreadFilterDropdown';

interface ThreadProps {
  id: number;
  username: string;
  age: string;
  title: string;
  question: string;
  category_id: string;
  created: Date;
}

const ThreadsContainer: React.FC = () => {
  const [threads, setThreads] = useState<ThreadProps[]>([]);
  const [sortedThreads, setSortedThreads] = useState<ThreadProps[]>([]);
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('api/getAllThreads');
        const responseData = response.data.data.data;
        console.log('response ', responseData);
        const formattedData: ThreadProps[] = responseData.map(
          (thread: any) => ({
            id: thread.thread_id,
            username: thread.username,
            age: timeAgo(String(thread.thread_date)),
            created: new Date(String(thread.thread_date)),
            title: thread.thread_title,
            question: thread.thread_desc,
            category_id: thread.category_id
          })
        );
        setThreads(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData();
  }, []);

  //   sort old - new
  useEffect(() => {
    const sorted = [...threads];
    if (sortBy === 'newest') {
      sorted.sort((a, b) => b.created.getTime() - a.created.getTime());
    } else if (sortBy === 'oldest') {
      sorted.sort((a, b) => a.created.getTime() - b.created.getTime());
    }
    setSortedThreads(sorted);
  }, [sortBy, threads]);

  const handleSortChange = (value: string) => {
    setSortBy(value);
  };

  return (
    <Box
      sx={{
        width: '100%',
        paddingTop: '148px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Box sx={{ maxWidth: '904px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 2.5
          }}
        >
          <Box>
            <Typography variant='h1'>All Questions</Typography>
            <Typography variant='h6'>Category : </Typography>
          </Box>
          <ThreadFilterDropdown onChange={handleSortChange} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {sortedThreads.map((thread) => (
            <ForumCard
              key={thread.id}
              threadId={thread.id}
              username={thread.username}
              threadAge={thread.age}
              threadTitle={thread.title}
              threadQuestion={thread.question}
              category={thread.category_id}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ThreadsContainer;
