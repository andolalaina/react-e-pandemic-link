import React from 'react';
import Post from './components/Post'
import Comment from './components/Comment'

export default function ButtonAppBar() {

  return (
    <div>
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
