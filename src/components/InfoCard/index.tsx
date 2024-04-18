import { Button, Paper, Typography } from "@mui/material";
import Link from "next/link";

export interface InfoCardProps {
  siteUrl: string;
  siteName: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ siteUrl, siteName }) => {
  return (
    <Paper sx={{ padding: "24px", borderRadius: "8px", maxWidth: "480px" }}>
      <Typography sx={{ paddingBottom: "16px" }}>Looking for another info?</Typography>
      <Typography sx={{ paddingBottom: "10px", color: "rgba(0, 0, 0, 0.54)" }}>Visit {siteName}</Typography>
      <Link href={siteUrl} passHref>
        <Button variant='contained'>Go To Site</Button>
      </Link>
    </Paper>
  );
};

export default InfoCard;
