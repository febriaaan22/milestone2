import { Box, Paper, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

import { InfoCard, BreadCrumbs } from "@/components";
import { InfoCardProps } from "../InfoCard";

interface ArticleProps extends InfoCardProps {
  title: string;
  article: string;
  whatAreTitle: string;
  whatAre: string;
  strategiesTitle: string;
  strategies: string;
  howQuestion: string;
  howAnswer: string;
  whatQuestion: string;
  whatAnswer: string;
  whenQuestion: string;
  whenAnswer: string;
  imageUrl: StaticImageData;
  imageAlt: string;
}

const MentalProblemsArticle: React.FC<ArticleProps> = ({
  title,
  article,
  whatAreTitle,
  whatAre,
  strategiesTitle,
  strategies,
  howQuestion,
  howAnswer,
  whatQuestion,
  whatAnswer,
  whenQuestion,
  whenAnswer,
  imageUrl,
  imageAlt,
  siteName,
  siteUrl,
}) => {
  const flex = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <Box sx={{ paddingTop: "221px", width: "100%", maxWidth: "1222px", marginX: "auto" }}>
        <Box sx={{ marginBottom: 10 }}>
          <BreadCrumbs />
          <Typography sx={{ marginBottom: 2 }}>A COMPREHENSIVE GUIDE</Typography>
          <Typography variant='h2' sx={{ marginBottom: 4 }}>
            {title}
          </Typography>
          <Typography>{article}</Typography>
        </Box>
        <Box sx={{ flex, gap: "50px", marginBottom: 10 }}>
          <Image src={imageUrl} alt={imageAlt} width={450} height={450} objectFit='cover' />

          <Box sx={{ padding: "95.5px 0px 95.5px 25px" }}>
            <Typography variant='h3' sx={{ marginBottom: 4 }}>
              {whatAreTitle}
            </Typography>
            <Typography>{whatAre}</Typography>
          </Box>
        </Box>
        <Box sx={{ flex, gap: "50px" }}>
          <Box sx={{ maxWidth: "692px" }}>
            <Typography variant='h3' sx={{ marginBottom: 4 }}>
              {strategiesTitle}
            </Typography>
            <Typography sx={{ marginBottom: 6.5 }}>{strategies}</Typography>

            <Paper sx={{ padding: 3, marginBottom: 4, maxWidth: 692 }}>
              {
                <>
                  <Typography variant='h6' sx={{ marginBottom: 2 }}>
                    {howQuestion}
                  </Typography>
                  <Typography>{howAnswer}</Typography>
                </>
              }
            </Paper>
            <Paper sx={{ padding: 3, marginBottom: 4, maxWidth: 692 }}>
              {
                <>
                  <Typography variant='h6' sx={{ marginBottom: 2, fontWeight: 500 }}>
                    {whatQuestion}
                  </Typography>
                  <Typography>{whatAnswer}</Typography>
                </>
              }
            </Paper>
            <Paper sx={{ padding: 3, marginBottom: 4, maxWidth: 692 }}>
              {
                <>
                  <Typography variant='h6' sx={{ marginBottom: 2 }}>
                    {whenQuestion}
                  </Typography>
                  <Typography>{whenAnswer}</Typography>
                </>
              }
            </Paper>
          </Box>
          <Box>
            <Box sx={{ marginBottom: 6.5 }}>
              <Image src={imageUrl} alt={imageAlt} width={450} height={450} objectFit='cover' />
            </Box>
            <InfoCard siteUrl={siteUrl} siteName={siteName} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MentalProblemsArticle;
