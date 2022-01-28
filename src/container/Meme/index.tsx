import React, { FC, useState, useContext } from "react";
import { Grid } from "@mui/material";
import { memeStoreContext } from "../../context";
import { Header } from "../../components/Header";
import { Cards } from "../../components/Cards";
import { CustomDialog } from "../../components/Dialog";

export const Meme: FC = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [selectedMeme, setSelectedMeme] = useState([]);
  const [textField, setTextField] = useState<any>([
    {
      text: "",
    },
  ]);
  const { data }: any = useContext(memeStoreContext);

  const createMeme = (id: any) => {
    const findMeme = data.find((item: any) => item.id === id);
    setSelectedMeme(findMeme);
    setShowDialog(true);

    for (let i = 0; i < findMeme.box_count; i++) {
      setTextField([...textField, { id: i + 1, text: "" }]);
    }
  };
  const saveMeme = () => {
    setShowDialog(false);
  };

  const handleClose = () => {
    setShowDialog(false);
  };

  return (
    <Grid container spacing={2}>
      <Header label={`<memeli />`} />
      <Cards createMeme={createMeme} data={data} label="Create Meme" />
      <CustomDialog
        showDialog={showDialog}
        handleClose={handleClose}
        selectedMeme={selectedMeme}
        textField={textField}
        setText={setTextField}
        onClick={() => saveMeme()}
      />
    </Grid>
  );
};
