// ___________________ import statement

const Post = ({ title, body, comments, id }) => {
  console.log(id)
  return <div style={{ textAlign: 'left', marginBottom: '12px'}}>
    <h3>
      {title}
    </h3>
    <p>{body}</p>
    <Comments _________ _________ />
  </div>
}

export default Post;
