import './App.css';
import Blogs from './components/blogs/Blogs';
import Navbar from './components/navbar/Navbar';
import { useState } from 'react';

function App() {
  const [bookmarked, setBookmarked] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmark = blog => {
    setBookmarked([...bookmarked, blog]);
  };

  const handleMarkAsRead = (time, id) => {
    setReadingTime(readingTime + time);
    handleRemoveFromBookmark(id);
  };

  const handleRemoveFromBookmark = id => {
    const remainingBookMark = bookmarked.filter(mark => mark.id !== id);
    setBookmarked(remainingBookMark);
  };

  return (
    <>
      <Navbar />

      <div className="main-container flex m-10">
        <div className="left-container w-[70%] text-center">
          <Blogs
            handleBookmark={handleBookmark}
            handleMarkAsRead={handleMarkAsRead}
          />
        </div>

        <div className="right-container w-[30%] text-center">
          <h2> Reading time: {readingTime}</h2>
          <h2>Bookmarked count: {bookmarked.length}</h2>

          {bookmarked.map(marked => (
            <p
              className="bg-purple-600 m-2 p-2 text-white shadow-lg rounded-xl"
              key={marked.id}
            >
              {marked.title}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
