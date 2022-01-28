import React from "react";
import { Grid, styled, Typography } from "@mui/material";

const HeaderWrapper = styled(Grid)`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoText = styled(Typography)`
  color: #4a4a4a;
  font-weight: 200;
`;
type Props = {
  label: string;
};

export const Header: React.FC<Props> = ({ label }) => {
  return (
    <HeaderWrapper xs={12}>
      <LogoText variant="h3"> {`<memoli />`}</LogoText>
    </HeaderWrapper>
  );
};
