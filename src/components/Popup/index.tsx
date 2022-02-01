import React from 'react';
import { Dialog, DialogActions, DialogContent, styled } from '@mui/material';
import { CustomButton } from '../Button';

const ImageContent = styled(DialogContent)`
  & img  {
    width: 100%;
    object-fit: cover;
  }
`;

type Props = {
  showPopup: boolean;
  handlePopupClose: () => void;
  downloadMeme: Function;
  image: string;
};

export const Popup: React.FC<Props> = ({
  showPopup,
  handlePopupClose,
  downloadMeme,
  image,
}) => {
  return (
    <Dialog
      open={showPopup}
      onClose={handlePopupClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <ImageContent>
        <img src={image} alt="meme" loading="lazy" />
      </ImageContent>

      <DialogActions>
        <CustomButton
          label="Download Meme"
          onClick={() => downloadMeme}
        ></CustomButton>
      </DialogActions>
    </Dialog>
  );
};
