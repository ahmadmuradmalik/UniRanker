import './styles/App.css';
import './styles/components.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Comment from './Comment.js';

function App() {

  const [newComment, setNewComment] = useState("")
  const [comments, setComments] = useState([])

  const [key1, setKey] = useState(0)

  const makeANewComment = () => {
    const new_comments_array = comments
    new_comments_array.push(newComment)
    setComments(new_comments_array)
    setNewComment("")
    setKey(key1 + 1)
    console.log(comments)
  }

  const changeNewCommentValue = (comment_value) => {
    /* Q2: How do we update newComment? Set it equal to comment_value. */
    /* YOUR CODE HERE */
    setNewComment(comment_value)


  }
  return (
    <div className="App">

      <h3 className="app_topHeader">This is my Social Media Post</h3>
      <h4 className="app_author">Ddoski_123</h4>

      <img className="app_image" src="assets/oskiBeach.jpeg"/>

      <div className="app_commentsHeader">Comments:</div>

      {comments ? comments.map((comment) => {
        console.log('should return?')
        return <Comment text={comment} key={comment} key1={comment} />;

      }) : ''}

      <input className="app_input"
      onChange={(e) => {changeNewCommentValue(e.target.value)}}value={newComment} placeholder="Write a Comment Here!" />

      <div style={{"clear":"both"}}></div>
      <button className="app_topButton"
      onClick={() => {makeANewComment()}}>Add Comment!</button>
      {/* Q1: What function should go in here? Call it with ZERO parameters. */}

      <div style={{"clear":"both"}}></div>

      <Link to="/profile/1">
      <button className="app_bottomButton">
      Go To My Profile
      </button>
    </Link>

    </div>
  );
}

export default App;
