
import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { Header } from './components/index';

export default function Index() {
  return (
    <Container>
      <Box my={4}>
        <Header title="Masliah Inc" />
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
      </Box>
    </Container>
  );
}
