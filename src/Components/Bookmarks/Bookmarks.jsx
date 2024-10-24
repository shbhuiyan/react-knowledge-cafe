import PropTypes from "prop-types";
import Bookmark from "./Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {

  return (
    <section className="w-1/3 ml-4 space-y-6">
      <h3 className="text-center font-semibold text-2xl p-4 border-2 bg-slate-200 border-purple-500 rounded-lg text-blue-500">
        Total Reading Time : min
      </h3>

      <div className="text-center font-semibold text-2xl p-4 border-2 bg-slate-200 rounded-lg">
        <h3>Bookmarked Blogs : {bookmarks.length} </h3>
          {
            bookmarks.map((bookmark , i)=> <Bookmark key={i} bookmark={bookmark}></Bookmark>)
          }
      </div>
    </section>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};

export default Bookmarks;
