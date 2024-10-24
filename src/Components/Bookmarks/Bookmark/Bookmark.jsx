import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    
    const {title} = bookmark;

    return (
        <div className="p-4 my-4 bg-white rounded-lg"> {title} </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
}

export default Bookmark;