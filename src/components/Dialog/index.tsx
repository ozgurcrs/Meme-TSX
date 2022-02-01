import React, { useEffect, useContext } from 'react';
import {
  styled,
  Dialog,
  DialogActions,
  DialogContent,
  Box,
} from '@mui/material';
import { CustomButton } from '../Button';
import { TextInput } from '../TextField';
import { useForm } from 'react-hook-form';
import { memeStoreContext } from '../../context';
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
  setShowDialog: Function;
  setShowPopup: Function;
};

export const CustomDialog: React.FC<Props> = ({
  showDialog,
  handleClose,
  selectedMeme,
  setShowDialog,
  setShowPopup,
}) => {
  const { register, handleSubmit, reset } = useForm();
  const { saveMeme }: any = useContext(memeStoreContext);
  useEffect(() => {
    reset();
  }, [reset, showDialog]);

  const handleSave = async (data) => {
    const payload = {
      ...data,
      id: selectedMeme.id,
    };
    await saveMeme(payload);
    setShowPopup(true);
    setShowDialog(false);
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
          {[...Array(selectedMeme.box_count)].map((x, i) => (
            <TextInput
              key={i}
              label={`Text-${i + 1}`}
              index={i}
              register={register}
            />
          ))}
        </ContentBox>
      </ContentWrapper>

      <DialogActions>
        <CustomButton
          label="Save Meme"
          onClick={handleSubmit(handleSave)}
        ></CustomButton>
      </DialogActions>
    </Dialog>
  );
};
