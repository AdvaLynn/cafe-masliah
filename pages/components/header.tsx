import React from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';

type Props = {
  title: string
}

const Header: React.FunctionComponent<Props> = ({ title }) =>
(
  <div>
    <CssBaseline />
    <Paper elevation={0}>
      <Box pt={2} pr={1} pb={1} pl={2}>
        <Typography align='center' variant='h3'>
          {title}
        </Typography>
      </Box>
    </Paper>
    <Divider />
  </div>
)

export default Header;