export const serviceCardStyles = (src) => ({
  boxSizing: "border-box",
  width: "190px",
  height: "254px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  border: "1px solid white",
  boxShadow: "12px 17px 51px rgba(0, 0, 0, 0.22)",
  backdropFilter: "blur(6px)",
  borderRadius: "17px",
  textAlign: "center",
  cursor: "pointer",
  transition: "all 0.5s",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  userSelect: "none",
  fontWeight: "bolder",
  color: "white",
  fontSize: "1.25rem",
  textShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
  background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${src})
      center/cover no-repeat`,

  "&:hover, &:focus": {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${src})
      center/cover no-repeat`,
    border: "1px solid black",
    transform: "scale(1.05)",
  },

  "&:active": {
    transform: "scale(0.95) rotateZ(1.7deg)",
  },

  "& p": {
    opacity: "0",
    transition: "opacity 0.5s",
  },

  "&:hover p, &:focus p": {
    opacity: "1",
  },
});
