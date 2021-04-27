import React from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';

const Menu = ({ }) => (
  <React.Fragment>
    <CssBaseline />
    <Paper elevation={0}>
      <Box pt={2} pr={1} pb={1} pl={2}>
        <Typography align='center' variant='h3'>
        </Typography>
      </Box>
    </Paper>
    <Divider />
  </React.Fragment>
);

export default Menu;