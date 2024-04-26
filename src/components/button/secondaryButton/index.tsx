import React from "react";
import Button from "@mui/material/Button";
import styles from "./SecondaryButton.module.scss";

interface SecondaryButtonProps {
	text: string;
	onClick?: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
	text,
	onClick,
	...props
}) => {
	return (
		<Button
			className={styles.secondary}
			variant="outlined"
			onClick={onClick}
			{...props}
		>
			{text}
		</Button>
	);
};

export default SecondaryButton;
