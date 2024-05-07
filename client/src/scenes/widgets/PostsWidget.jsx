import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import PostWidget from "./PostWidget";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const PostsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  const getPosts = async () => {
    const response = await fetch(`http://localhost:3001/posts`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },

      });
    const data = await response.json();
    console.log(data);
    dispatch(setPosts({ posts: data }));
  };

  const getUserPosts = async () => {
    const response = await fetch(
      `http://localhost:3001/posts/${userId}/posts`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {Array.isArray(posts) && posts.map(
        ({
          _id,
          userId,
          firstName,
          lastName,
          // description,
          body,
          description,
          // location,
          // picturePath,
          userPicturePath,
          // likes,
          // comments,
          userName
        }) => (
          <PostWidget
            key={_id}
            postId={_id}
            postUserId={userId}
            // name={`${firstName} ${lastName}`}
            name={userName ? userName : `${firstName} ${lastName}`}
            description={body ? body : description}
            // location={location}
            // picturePath={picturePath}
            userPicturePath={userPicturePath ? userPicturePath : null}
            // likes={likes}
            // comments={comments}
          />
        )
      )}
    </>
  );
};

export default PostsWidget;
