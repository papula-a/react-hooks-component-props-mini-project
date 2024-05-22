import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post, idx) => (
        <Article
          key={idx}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      ))}
    </main>
  );
}

export default ArticleList;
