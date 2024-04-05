import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Comment } from "./type";
import styles from "./CommentCard.module.scss";
import { useUserContext } from "@/contexts/UserContext";

interface CommentCardProps {
  comment: Comment;
}

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  const { user } = useUserContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  console.log("User ID:", user?.id);
  console.log("User Role:", user?.role);

  const isMenuVisible =
    user &&
    (user.role === "admin" ||
      ((user.role === "user" || user.role === "counselor") &&
        user.id === comment.userId));

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleEdit = () => {
    // Handle edit logic
    handleMenuClose();
  };

  const handleDelete = () => {
    // Handle delete logic
    handleMenuClose();
  };

  return (
    <Card sx={{ mb: 4 }} variant="outlined">
      <Box className={styles.container}>
        <Box className={styles.topItems}>
          <Box className={styles.topGroups}>
            <Typography className={styles.userName} variant="body1">
              {comment.user.userName}
            </Typography>
            {isMenuVisible && (
              <IconButton onClick={handleMenuOpen} size="small">
                <MoreVertIcon />
              </IconButton>
            )}
          </Box>
          <Typography variant="body1">
            {formatDate(comment.commentDate)}
          </Typography>
        </Box>
        <Typography variant="body1">{comment.commentPost}</Typography>
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {user?.role === "user" ||
          (user?.role === "counselor" && (
            <MenuItem onClick={handleEdit}>Edit</MenuItem>
          ))}
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </Card>
  );
};

export default CommentCard;
