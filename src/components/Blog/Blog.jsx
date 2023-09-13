import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleBookmarks, handleMarkAsRead}) => {
    const {id, title, cover, reading_times, author_img, author, posted_date, hashtags} = blog
    return (
        <div className='mb-8'>
            <img className='w-full mb-8 rounded-xl' src={cover} alt={`cover picture of ${title}`} />
            <div className='flex justify-between mb-4 items-center'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                        <span className='mr-2'>{reading_times} min read</span>
                        <button onClick={()=>handleBookmarks(blog)} className='text-gray-400'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl mb-4'>{title}</h2>
            {
                hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a> </span>)
            }
            <div>
            <button onClick={()=>handleMarkAsRead(id, reading_times)} className='text-purple-700 underline font-bold'>Mark As Read</button>
            </div>
        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;