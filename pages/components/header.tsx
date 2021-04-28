import React from "react";
import { Box, CssBaseline, Divider, Paper, Typography } from "@material-ui/core";

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