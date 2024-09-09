import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import ArrowRight from "@mui/icons-material/ArrowRight";
import Img1 from "../../assets/hero.svg";
import Img2 from "../../assets/MI.svg";
import Img3 from "../../assets/MSI.svg";

export default function HeroCarousel() {
  const images = [Img1, Img2, Img3];
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [direction, setDirection] = React.useState("next");

  const handlePrev = () => {
    setDirection("prev");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection("next");
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: {
          xs: "10vh",
          sm: "20vh",
          md: "50vh",
        },
        margin: "0 auto",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(0,0,0,0.1)",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={images[currentIndex]}
        alt="Hero"
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          padding:"15px 0",
          margin: "0 auto",
          objectPosition: "center",
          transition: "transform 0.5s ease-in-out",
          transform: direction === "next" ? "reveret" : "revert-layer",
        }}
      />

      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: 20,
          transform: "translateY(-50%)",
          backgroundImage: "linear-gradient(45deg, white, #ccc)",
          color: "black",
          borderRadius: "100%",
          "&:hover": {
            color: "white",
            backgroundImage: "linear-gradient(90deg, red, blue)",
          },
        }}
      >
        <ArrowLeft />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: 20,
          transform: "translateY(-50%)",
          backgroundImage: "linear-gradient(45deg, white, #ccc)",
          color: "black",
          borderRadius: "100%",
          "&:hover": {
            color: "white",
            backgroundImage: "linear-gradient(90deg, red, blue)",
          },
        }}
      >
        <ArrowRight />
      </IconButton>
    </Box>
  );
}
