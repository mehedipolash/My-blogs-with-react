import React, { useEffect, useState } from 'react';
import Blog from '../blog/Blog';

const Blogs = ({ handleBookmark, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl">Total: {blogs.length}</h1>

      <div className="all-blogs grid grid-cols-2">
        {blogs.map(blog => (
          <Blog
            key={blog.id}
            blog={blog}
            handleBookmark={handleBookmark}
            handleMarkAsRead={handleMarkAsRead}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
