function Article({ title, date, preview, minutes }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date ? date : "January 1, 1970"}
        {" - "}
        {minutes < 30
          ? "☕️".repeat(Math.ceil(minutes / 5))
          : "🍱".repeat(Math.ceil(minutes / 10))}{" "}
        {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
