/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/promise-function-async */
import { Paper, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

interface ForumCardProps {
  threadId: number;
  username: string;
  threadAge: string;
  threadTitle: string;
  threadQuestion: string;
  category: string;
}

const ForumCard: React.FC<ForumCardProps> = ({
  threadId,
  username,
  threadAge,
  threadTitle,
  threadQuestion,
  category
}) => {
  const router = useRouter();
  const handleClick = (id: number) => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push(`/forum/details/${id}`);
  };

  return (
    <>
      <Paper
        key={threadId}
        sx={{
          cursor: 'pointer',
          marginBottom: 2,
          width: '100%',
          minHeight: '206px',
          padding: 2.5
        }}
        onClick={() => {
          handleClick(threadId);
        }}
      >
        <Typography>{username}</Typography>
        <Typography>{threadAge}</Typography>
        <Typography>{threadTitle}</Typography>
        <Typography>{threadQuestion}</Typography>
        <Typography>Category {category}</Typography>
      </Paper>
    </>
  );
};

export default ForumCard;
