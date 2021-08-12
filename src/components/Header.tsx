import React from 'react';

import { AppBar, Button, createStyles, makeStyles, Paper, Theme, Toolbar, Typography, Tabs, Tab, Grid, Container } from '@material-ui/core';
import { AccountCircle, Menu } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => createStyles({
  btnActive: {
    color: "red"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <header>
      <AppBar position="static">
        <Toolbar className="toolBar">
          <Typography variant="h6" className={classes.title}>
            E-pandemic-link
          </Typography>
          <Button variant="contained" color="secondary" startIcon={<AccountCircle/>}>Se connecter</Button>
        </Toolbar>
      </AppBar>
    </header>
  );
}
