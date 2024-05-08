
import { useState, useEffect } from 'react';
import Post from './Post';

const AppWithPosts = () => {
  const [timer, setTimer] = useState(0);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleAddPost = () => {
    if (title && body) {
      const newPost = {
        id: Date.now(),
        title,
        body,
        verifyPost: false,
        color: generateRandomColor()
      };
      setPosts([...posts, newPost]);
      setTitle('');
      setBody('');
    }
  };

  const generateRandomColor = () => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  };

  return (
    <div>
      <h1>Timer: {timer}</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={handleAddPost}>Add Post</button>
      <div>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default AppWithPosts;
