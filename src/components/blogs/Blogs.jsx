import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmarks, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(req => req.json())
        .then(data => setBlogs(data));
    },[])
    return (
        <div className="md:w-2/3">
            <h1>Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id} handleMarkAsRead={handleMarkAsRead} handleBookmarks={handleBookmarks} blog={blog}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes={
    handleBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blogs;