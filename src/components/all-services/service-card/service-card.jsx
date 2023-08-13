import { Box } from "@mui/material";
import "./styles.js";
import Tilt from "react-parallax-tilt";
import { serviceCardStyles } from "./styles.js";

const ServiceCard = ({ text, src, handleClick }) => {
  return (
    <Tilt>
      <Box onClick={handleClick} sx={serviceCardStyles(src)}>
        <p>{text}</p>
      </Box>
    </Tilt>
  );
};

export default ServiceCard;
