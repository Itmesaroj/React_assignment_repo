// Post.js
import  { useState, useCallback, memo } from 'react';

const Post = ({ post }) => {
  console.log("Post rendered");
  const [verifyPost, setVerifyPost] = useState(post.verifyPost);

  const toggleVerifyPost = useCallback(() => {
    setVerifyPost(prevVerifyPost => !prevVerifyPost);
  }, []);

  const postStyle = {
    backgroundColor: post.color,
    padding: '10px',
    margin: '10px 0',
  };

  return (
    <div style={postStyle}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={toggleVerifyPost}>{verifyPost ? 'Verified' : 'Verify'}</button>
    </div>
  );
};

export default memo(Post);
