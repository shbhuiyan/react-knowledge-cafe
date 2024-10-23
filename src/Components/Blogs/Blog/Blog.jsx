import PropTypes, { func } from "prop-types";
import { BsBookmarkStar } from "react-icons/bs";


const Blog = ({blog, handleBookmarks}) => {
    const {cover, title, author_img, author, posted_date, reading_time, hashtags} = blog;

    return (
        <div className="space-y-6 mb-14 shadow-md p-4 rounded-lg border">
            <img className="w-full rounded-lg" src={cover} alt={`cover pic is ${title}`} />
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <img className="w-14" src={author_img} alt={`this pic is ${author}`} />
                    <span>
                        <h3 className="font-bold text-2xl">{author}</h3>
                        <p className="text-gray-500 font-semibold">{posted_date}</p>
                    </span>
                </div>
                <div className="flex items-center gap-2 text-xl ">
                    <p className="text-gray-500 font-semibold">{reading_time} min read</p>
                    <button onClick={()=>handleBookmarks(blog)} ><BsBookmarkStar /></button>
                </div>
            </div>
            <h1 className="text-4xl font-bold"> {title} </h1>
            <div>
                {
                    hashtags.map((hash , i)=><span className="text-gray-500 font-semibold mr-4" key={i}>{hash}</span>)
                }
            </div>
            <button className="underline font-semibold" >Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: func.isRequired
}
export default Blog;