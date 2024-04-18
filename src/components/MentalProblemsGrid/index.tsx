// import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { MentalProblemsCard as ImageCard } from "@/components";
import { imagesData } from "../utils/ImagesData";
import style from "./MentalProblemsGrid.module.scss";

const MentalProblemsGrid = () => {
  const gridColumnWidth = 100 / 12;
  const gridRowHeight = 100 / 8;
  return (
    <Box className={style.container}>
      <Box className={style.Eating} sx={{ margin: "auto" }}>
        <ImageCard
          maxWidth={`${gridColumnWidth * 3}vw`}
          maxHeight={`${gridRowHeight * 2}vh`}
          src={imagesData[3].src}
          title={imagesData[3].title}
          id={imagesData[3].id}
        />{" "}
      </Box>
      <Box className={style.Anxiety} sx={{ margin: "auto" }}>
        <ImageCard
          maxWidth='338px'
          maxHeight='579px'
          id={imagesData[0].id}
          src={imagesData[0].src}
          title={imagesData[0].title}
        />
      </Box>
      <Box className={style.mentalproblem}>
        {/* <ImageCard maxWidth='464px' maxHeight='258px' src={imagesData[4].src} title={imagesData[4].title} /> */}
        <Box>
          <Box
            style={{
              width: `514px`,
              height: `409px`,
              margin: `auto`,
              backgroundImage: `url(${imagesData[7].src.src})`,
              backgroundSize: "fit",
            }}
          >
            <Typography variant='h4' sx={{ color: "#FFFFFF", fontWeight: 700, paddingBottom: "28px" }}>
              {imagesData[7].title}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={style.ptsd} sx={{ margin: "auto" }}>
        <ImageCard
          maxWidth='464px'
          maxHeight='258px'
          id={imagesData[1].id}
          src={imagesData[1].src}
          title={imagesData[1].title}
        />
      </Box>
      <Box className={style.Bipolar} sx={{ margin: "auto" }}>
        <ImageCard
          maxWidth='388px'
          maxHeight='258px'
          id={imagesData[2].id}
          src={imagesData[2].src}
          title={imagesData[2].title}
        />
      </Box>
      <Box className={style.Schizo} sx={{ margin: "auto" }}>
        <ImageCard
          maxWidth='338px'
          maxHeight='409px'
          id={imagesData[4].id}
          src={imagesData[4].src}
          title={imagesData[4].title}
        />
      </Box>
      <Box className={style.Depression} sx={{ margin: "auto" }}>
        <ImageCard
          maxWidth='334px'
          maxHeight='258px'
          id={imagesData[5].id}
          src={imagesData[5].src}
          title={imagesData[5].title}
        />
      </Box>
      <Box className={style.ocd} sx={{ margin: "auto" }}>
        <ImageCard
          maxWidth='518px'
          maxHeight='258px'
          id={imagesData[6].id}
          src={imagesData[6].src}
          title={imagesData[6].title}
        />
      </Box>
    </Box>
  );
};

export default MentalProblemsGrid;
