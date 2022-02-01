import { useState } from 'react';
const base_url = 'https://api.imgflip.com';

type MemesType = {
  box_count: number;
  height: number;
  id: string;
  name: string;
  url: string;
  width: number;
};

type Payload = {
  id: string | undefined;
  text0: string;
  text1: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;
};

export const useMemeStore = () => {
  const [memes, setMemes] = useState<MemesType[]>([]);
  const [editedMeme, setEditedMeme] = useState([]);

  const getMeme = async () => {
    await fetch(base_url + '/get_memes')
      .then((response) => response.json())
      .then((result) => {
        setMemes(result.data.memes);
      });
  };

  const saveMeme = async (payload) => {
    const values: Array<Payload> = Object.values(payload);

    const params: any = {
      template_id: payload.id,
      username: 'ozgurcrs',
      password: 'ozgur123',
      'boxes[0][text]': values[0],
      'boxes[1][text]': values[1],
      'boxes[2][text]': values[2],
      'boxes[3][text]': values[3],
      'boxes[4][text]': values[4],
      'boxes[5][text]': values[5],
    };
    await fetch(`https://api.imgflip.com/caption_image`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(params),
    })
      .then((response) => response.json())
      .then((result) => {
        setEditedMeme(result.data.url);
      });
  };

  return {
    getMeme,
    saveMeme,
    memes,
    editedMeme,
  };
};
