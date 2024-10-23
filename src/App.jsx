import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([])

  const handleBookmarks = (blog) => {
    setBookmarks([...bookmarks,blog])
  }
  
  return (
    <section className='font container w-11/12 mx-auto'>
      <Header></Header>
      <div className="md:flex">
        <Blogs handleBookmarks={handleBookmarks} ></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </section>
  )
}

export default App
