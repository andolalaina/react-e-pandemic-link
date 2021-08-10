import React from 'react';
import Post from './components/Post';
import Comment from './components/Comment';
import Header from './components/Header';

import { AppBar, Button, createStyles, makeStyles, Paper, Theme, Toolbar, Typography, Tabs, Tab, Grid } from '@material-ui/core';
import { AccountCircle, Menu } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => createStyles({
}));

export default function App() {
  const classes = useStyles();
  return (
    <div>
      <Header/>
      <Post></Post>
      <Post>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
      </Post>
    </div>
  );
}
