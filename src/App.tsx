import React, { useEffect, useState } from 'react';
import Post from './components/Post';
import Comment from './components/Comment';
import Header from './components/Header';
import Search from './components/Search'
import SearchResult from './components/SearchResult';

import { AppBar, Button, createStyles, makeStyles, Paper, Theme, Toolbar, Typography, Tabs, Tab, Grid } from '@material-ui/core';
import { AccountCircle, Menu } from '@material-ui/icons';

import UserInterface from './interfaces/UserInterface'
import db from './database/db.json'

const useStyles = makeStyles((theme: Theme) => createStyles({
}));

const posts = db.posts;
const users = db.users;
const comments = db.comments;

export default function App() {
  const classes = useStyles();
  let [randomUser, updateUser] = useState({
    gender: "string",
        name: {
          title: "string",
          first: "string",
          last: "string"
        },
        badges : [],
        location: {
          street: "string",
          city: "string",
          state: "string",
          postcode: "string",
          coordinates: {
            latitude: "string",
            longitude: "string"
          },
          timezone: {
            offset: "string",
            description: "string"
          }
        },
        email: "string",
        login: {
          uuid: "string",
          username: "string",
          password: "string",
          salt: "string",
          md5: "string",
          sha1: "string",
          sha256: "string"
        },
        dob: {
          date: "string",
          age: "string",
        },
        registered: {
          date: "string",
          age: "string",
        },
        phone: "string",
        cell: "string",
        id: {
          name: "string",
          value: "string"
        },
        picture: {
          large: "string",
          medium: "string",
          thumbnail: "string"
        },
        nat: "string"
  })

  useEffect(() => {
    fetch("https://randomuser.me/api/")
    .then((response) => response.json()
      .then((result) => {
        updateUser(result.results[0]);
      })
    .catch(error => console.log(error))
    )
  }, [])

  return (
    <div>
      <Header/>
      <Post owner={randomUser} title="hamburger" views="100k" likes="54" description="blablabla" paragraphes={["x", "y", "z"]}>
        <Comment owner={randomUser} commentText="blablabla norma" likes={5}/>
      </Post>
      <SearchResult owner={randomUser} title="Comment faire des hamburgers" views="10k" likes="54" description="Régalez vos enfants avec cette recette."></SearchResult>
    </div>
  );
}
