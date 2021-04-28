import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Header, MenuBar, PictureGrid } from './components/index';

export default function Index() {
  return (
    <Container>
      <Box my={4}>
        <Header title="Cafe Masliah" />
        <MenuBar />
        <PictureGrid />
      </Box>
    </Container>
  );
}
