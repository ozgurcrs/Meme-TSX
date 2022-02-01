import React, { FC } from 'react';
import { Grid, styled } from '@mui/material';
import { CustomButton } from '../Button';
import AirlineSeatLegroomReducedIcon from '@mui/icons-material/AirlineSeatLegroomReduced';

const CardsWrapper = styled(Grid)`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled(Grid)`
  height: 400px;
  border: 1px solid #eee;
  border-radius: 10px;
  box-shadow: 0 1px 2px #eee;
  box-sizing: border-box;
  margin: 10px;
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  flex-direction: column;
  animation: slowlymove 3s linear infinite;

  @keyframes slowlymove {
    0% {
      transform: rotate(0deg);
    }

    33% {
      transform: rotate(1deg);
    }

    66% {
      transform: rotate(-1deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  & img {
    width: 100%;
    height: 360px;
    object-fit: cover;
  }
`;

type Props = {
  createMeme: (id: any) => void;
  label: string;
  data: object[];
};

export const Cards: FC<Props> = ({ createMeme, label, data }) => {
  return (
    <CardsWrapper xs={12} container>
      {data.map((item: any, index) => (
        <Card item={true} key={index} xs={8} sm={2}>
          <img src={item.url} alt="testini" loading="lazy" />
          <CustomButton
            icon={<AirlineSeatLegroomReducedIcon />}
            onClick={() => createMeme(item.id)}
            label={label}
          />
        </Card>
      ))}
    </CardsWrapper>
  );
};
