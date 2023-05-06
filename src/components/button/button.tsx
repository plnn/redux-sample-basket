import React from "react";
import "./button.scss";

interface IButtonProps {
  text: string;
  onClick: (a: any) => void;
  type?: "outlined" | "disabled" | "default";
}

const Button: React.FC<IButtonProps> = (props) => {
  const { onClick, text, type = "default" } = props;
  return (
    <button className={`btn btn__${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
