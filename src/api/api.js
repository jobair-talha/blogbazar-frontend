import axios from "axios";

const allBlogs = async () => {
  const res = await axios.get(`${process.env.REACT_APP_PROXY}/api/v1/blogs`);
  const data = res.data.blogs;
  return data;
};
export default allBlogs;
