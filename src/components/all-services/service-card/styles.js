export const serviceCardStyles = (src) => ({
  boxSizing: "border-box",
  width: "300px",
  height: "300px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  border: "1px solid white",
  boxShadow: "12px 17px 51px rgba(0, 0, 0, 0.22)",
  backdropFilter: "blur(6px)",
  borderRadius: "17px",
  textAlign: "center",
  cursor: "pointer",
  transition: "all 0.5s",
  userSelect: "none",
  fontWeight: "bolder",
  color: "white",
  fontSize: "1.25rem",
  border: "1px solid black",
  transform: "scale(0.95)",
  transition: "transform 0.5s",

  "&:hover, &:focus, &:active": {
    transform: "scale(1.02) rotateZ(1.7deg)",
  },

  "& .img": {
    objectFit: "cover",
    width: "100%",
    height: "70%",
    borderRadius: "17px 17px 0 0",
    background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${src})
      center/cover no-repeat`,
  },

  "& .text": {
    backgroundColor: "white",
    width: "100%",
    borderRadius: "0 0 17px 17px",
    padding: "0 1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "30%",
    zIndex: "100",

    "& h3": {
      color: "var(--primary-color)",
    },
  },

  "@media (min-width: 700px)": {
    width: "380px",
    height: "380px",
  },
});
