// const BlogList = (props) => {
//   const blogs = props.data;
//   const str = props.title;
const BlogList = ({ data, title }) => {
  //console.log(props, blogs);
  return (
    <div className="bloglist">
      <h2>{title}</h2>

      {data.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>weitten by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
