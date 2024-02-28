import React from "react";
import style from "../../_styles/icon-button.module.css";

interface IconButtonProps {
  onClick: () => void;
  icon: string;
}

const IconButton: React.FC<IconButtonProps> = ({ onClick, icon }) => {
  return (
    <button className={style.btn} onClick={onClick}>
      {icon}
    </button>
  );
};

export default IconButton;
