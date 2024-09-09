import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import ArrowRight from "@mui/icons-material/ArrowRight";
import Img1 from "../../assets/hero.svg";
import Img2 from "../../assets/MI.svg";


export default function Main({props}) {
    const Img3 = "https://plus.unsplash.com/premium_photo-1724668132059-480d6a34bbf4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const images = [props.img, Img1, props.img,Img1];
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
            md: "30vh",
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
