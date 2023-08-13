import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import select1 from "../../assets/how_to_book/select_1.png";
import select2 from "../../assets/how_to_book/select_2.png";
import select3 from "../../assets/how_to_book/select_3.png";
import select4 from "../../assets/how_to_book/select_4.png";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  howToBookHeadingStyle,
  timelineConnectorStyles,
  timelineContentStyle,
  timelineIcon,
  timelinePara,
  timelineTitle,
} from "./style";
import { Icon } from "@mui/material";

export default function HowToBook() {
  return (
    <Box>
      <Typography sx={howToBookHeadingStyle}>
        How <span>MarathiSarvaPooja</span> Works
      </Typography>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <Icon sx={timelineIcon}>
                <img src={select1} alt="select-puja-kalash" />
              </Icon>
            </TimelineDot>
            <TimelineConnector sx={timelineConnectorStyles} />
          </TimelineSeparator>
          <TimelineContent sx={timelineContentStyle}>
            <Typography variant="h6" component="span" sx={timelineTitle}>
              Select Puja
            </Typography>
            <Typography sx={timelinePara}>
              Pick a puja according to your preference
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={timelineConnectorStyles} />
            <TimelineDot color="primary">
              <Icon sx={timelineIcon}>
                <img src={select2} alt="whatsapp Icon" />
              </Icon>
            </TimelineDot>
            <TimelineConnector sx={timelineConnectorStyles} />
          </TimelineSeparator>
          <TimelineContent sx={timelineContentStyle}>
            <Typography sx={timelineTitle} variant="h6" component="span">
              Talk on WhatsApp
            </Typography>
            <Typography sx={timelinePara}>
              Talk to us on whatsapp for further details
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={timelineConnectorStyles} />
            <TimelineDot color="success">
              <Icon sx={timelineIcon}>
                <img src={select3} alt="Confirmation Icon" />
              </Icon>
            </TimelineDot>
            <TimelineConnector
              sx={{ ...timelineConnectorStyles, bgcolor: "secondary.main" }}
            />
          </TimelineSeparator>
          <TimelineContent sx={timelineContentStyle}>
            <Typography variant="h6" component="span" sx={timelineTitle}>
              Receive your Confirmation
            </Typography>
            <Typography sx={timelinePara}>
              Get your confirmation for booking
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector
              sx={{ ...timelineConnectorStyles, bgcolor: "secondary.main" }}
            />
            <TimelineDot color="secondary">
              <Icon sx={timelineIcon}>
                <img src={select4} alt="bell icon" />
              </Icon>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={timelineContentStyle}>
            <Typography variant="h6" component="span" sx={timelineTitle}>
              Receive Regular Updates
            </Typography>
            <Typography sx={timelinePara}>
              Receive all the information via email, SMS, and WhatsApp.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}
