import "./custom-button.css";

const CustomButton = ({ text, isContained = true }) => {
  return (
    <>
      {isContained ? (
        <button className="contained">
          <span>{text}</span>
        </button>
      ) : (
        <button className="outlined">
          <span>{text}</span>
        </button>
      )}
    </>
  );
};

export default CustomButton;
