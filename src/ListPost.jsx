import Post from './Post';
const ListPost = ({ searchResults }) => {
  const results = searchResults.map((post) => {
    <Post
      key={post.id}
      post={post}
    />;
  });
  const content = results.length ? (
    results
  ) : (
    <article>
      <p>Not matching Posts</p>
    </article>
  );
  return <main>{content}</main>;
};

export default ListPost;
