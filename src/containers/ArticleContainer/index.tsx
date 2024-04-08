"use client";

import { Box, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { articlesData } from "@/components/utils/ArticlesData";
import { imagesData } from "@/components/utils/ImagesData";
import { MentalProblemsArticle } from "@/components";
import noImage from "../../../public/no-image-icon-23483.png";

const ArticleContainer = () => {
  const params = useParams<{ id: string }>();

  const articleId = typeof params.id === "string" ? parseInt(params.id) : undefined;
  const article = articlesData.find((article) => article.id === articleId);
  const imageData = imagesData.find((image) => image.title === article?.title);

  return (
    <>
      {article ? (
        <MentalProblemsArticle
          title={article.title}
          article={article.article}
          whatAreTitle={article.whatAreTitle}
          whatAre={article.whatAre}
          strategiesTitle={article.strategiesTitle}
          strategies={article.strategies}
          howQuestion={article.howQuestion}
          howAnswer={article.howAnswer}
          whatQuestion={article.whatQuestion}
          whatAnswer={article.whatAnswer}
          whenQuestion={article.whenQuestion}
          whenAnswer={article.whenAnswer}
          imageUrl={imageData?.src ?? noImage}
          imageAlt={imageData?.title ?? "No image description"}
          siteName='Your Site Name'
          siteUrl='Your Site URL'
        />
      ) : (
        <Box
          sx={{ minHeight: "100dvh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <Typography variant='h3' sx={{ textAlign: "center" }}>
            Article not found!
          </Typography>
        </Box>
      )}
    </>
  );
};

export default ArticleContainer;
