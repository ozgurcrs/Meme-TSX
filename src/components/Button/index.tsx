import React, { FC } from "react";
import { CreateButton, CreateMeme } from "./style.js";

type Props = {
  label?: string;
  onClick: () => void;
  icon?: any;
};

export const CustomButton: FC<Props> = ({ label, onClick, icon }) => {
  return (
    <CreateButton>
      <CreateMeme startIcon={icon} onClick={onClick} size="large">
        {label}
      </CreateMeme>
    </CreateButton>
  );
};
