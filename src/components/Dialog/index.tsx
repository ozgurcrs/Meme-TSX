import React from "react";

import {
  styled,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Box,
} from "@mui/material";
import { CustomButton } from "../Button";

const ContentWrapper = styled(DialogContent)`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContentBox = styled(Box)`
  width: 100%;
  height: auto;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  & img {
    width: 100%;
  }

  & input {
    width: 220px;
  }

  & > div {
    margin: 10px;
  }
`;

type Props = {
  showDialog: boolean;
  handleClose: () => void;
  selectedMeme: any;
  textField: any;
  setText: any;
  onClick: () => void;
};

export const CustomDialog: React.FC<Props> = ({
  showDialog,
  handleClose,
  selectedMeme,
  onClick,
  textField,
  setText,
}) => {
  const handleChange = (e: any, index: any) => {
    const value = [...textField];
    value[index]["text"] = e.target.value;
    setText(value);
  };

  const handleSave = () => {
    const value = [...textField];
    const text0 = value[0]["text"];
    const text1 = value[1]["text"];

    const url = `https://api.imgflip.com/caption_image?template_id=${selectedMeme.id}&username=ozgurcrs&password=ozgur123&text0=${text0}&text1=${text1}`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        selectedMeme.url = result.data.url;
      });
  };

  return (
    <Dialog
      open={showDialog}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <ContentWrapper>
        <ContentBox>
          <img src={selectedMeme.url} alt="meme" loading="lazy" />
        </ContentBox>
        <ContentBox>
          {textField.map((item: any, index: any) => (
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              onChange={(e) => handleChange(e, index)}
            />
          ))}
        </ContentBox>
      </ContentWrapper>
      <DialogActions>
        <CustomButton
          label="Save Meme"
          onClick={() => handleSave()}
        ></CustomButton>
      </DialogActions>
    </Dialog>
  );
};
