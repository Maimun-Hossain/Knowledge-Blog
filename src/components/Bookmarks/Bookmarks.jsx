import PropTypes from 'prop-types';
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 rounded-lg mt-6">
            <div className='bg-purple-200 m-4 p-4 border-2 border-purple-500 rounded-lg'>
                <h3 className='text-3xl text-purple-700 text-center'>Reading Time: {readingTime}</h3>
            </div>
            <div className='bg-slate-400 rounded-xl p-5'>
            <h2 className="text-3xl text-center">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;