import { useState } from "react"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"
import Blogs from "./components/blogs/Blogs"

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  }
  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time)
    // remove the read blog form bookmarks
    // console.log("remove bookmark", id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks)
  }

  return (
    <>
      <Header></Header>
      <main className="md:flex max-w-7xl mx-auto">
      <Blogs handleMarkAsRead={handleMarkAsRead} handleBookmarks={handleBookmarks}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </>
  )
}

export default App
