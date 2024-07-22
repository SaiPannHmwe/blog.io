import PostItem from "../components/PostItem.jsx";
import fakePosts from "../utils/fakePost.js";

function HomePage() {
  return (
    <div>
      {fakePosts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default HomePage;
