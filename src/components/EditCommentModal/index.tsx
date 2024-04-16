import React, { useState } from "react";
import { Typography, TextField, Button, Modal, Card } from "@mui/material";
import { Comment } from "../CommentCard/type";
import styles from "./EditCommentModal.module.scss";

interface EditCommentModalProps {
  comment: Comment;
  open: boolean;
  onClose: () => void;
  onSave: (commentId: number, title: string, question: string) => void;
}

const EditCommentModal: React.FC<EditCommentModalProps> = ({
  comment,
  open,
  onClose,
  onSave,
}) => {
  const [title, setTitle] = useState(comment.thread.threadTitle);
  const [question, setQuestion] = useState(comment.commentPost);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  };

  const handleSave = () => {
    onSave(comment.commentId, title, question);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Card className={styles.modal}>
        <Typography className={styles.modalTitle} variant="h6" component="h2">
          Edit Comment
        </Typography>
        <TextField
          fullWidth
          label="Title"
          variant="outlined"
          value={title}
          onChange={handleTitleChange}
          className={styles.modalField}
        />
        <TextField
          fullWidth
          label="Question"
          variant="outlined"
          multiline
          rows={4}
          value={question}
          onChange={handleQuestionChange}
          className={styles.modalField}
        />
        <Button
          variant="contained"
          onClick={handleSave}
          className={styles.modalButton}
        >
          Save
        </Button>
      </Card>
    </Modal>
  );
};

export default EditCommentModal;
