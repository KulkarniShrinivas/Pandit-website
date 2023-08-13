import { Box } from "@mui/material";
import "./styles.js";
import { serviceCardStyles } from "./styles.js";

const ServiceCard = ({ text, src }) => {
  return (
    <Box sx={serviceCardStyles(src)}>
      <p>{text}</p>
    </Box>
  );
};

export default ServiceCard;
