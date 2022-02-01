import { FC, useState, useContext, useEffect } from 'react';
import { Grid } from '@mui/material';
import { memeStoreContext } from '../../context';
import { Header } from '../../components/Header';
import { Cards } from '../../components/Cards';
import { CustomDialog } from '../../components/Dialog';
import { Popup } from '../../components/Popup';

export const Meme: FC = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [selectedMeme, setSelectedMeme] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const { getMeme, memes, editedMeme }: any = useContext(memeStoreContext);

  useEffect(() => {
    getMeme();
  }, []);

  const createMeme = (id: number) => {
    const findMeme = memes.find((item: any) => item.id === id);
    setSelectedMeme(findMeme);
    setShowDialog(true);
  };

  const handleClose = () => {
    setShowDialog(false);
  };
  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const downloadMeme = () => {
    // downloadMeme
  };

  return (
    <Grid container spacing={2}>
      <Header label={`<memeli />`} />
      <Cards createMeme={createMeme} data={memes} label="Create Meme" />
      <CustomDialog
        showDialog={showDialog}
        handleClose={handleClose}
        selectedMeme={selectedMeme}
        setShowDialog={setShowDialog}
        setShowPopup={setShowPopup}
      />
      <Popup
        showPopup={showPopup}
        image={editedMeme}
        handlePopupClose={handlePopupClose}
        downloadMeme={downloadMeme}
      />
    </Grid>
  );
};
