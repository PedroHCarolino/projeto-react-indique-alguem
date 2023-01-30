import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import img from "../../img/foto2.jpeg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Perfil() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      <Grid
          item
          xs={12}
          sm={6}
          lg={4}
          xl={3}
        />
      </Grid>
    </Box>
  );
}
