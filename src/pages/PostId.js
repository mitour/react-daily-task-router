import { useParams } from "react-router-dom";

function PostId() {
  const { postId } = useParams();
  return (
    <>
      <p>Post ID: {postId}</p>
    </>
  );
}

export default PostId;
