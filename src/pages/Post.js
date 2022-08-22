import { Outlet } from "react-router-dom";

function Post() {
  return (
    <>
      <p>Post 頁面</p>
      <Outlet />
    </>
  );
}

export default Post;
