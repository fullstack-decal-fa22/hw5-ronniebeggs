import React from 'react';
import Post from "./Post";
import NewPost from "./NewPost";

const Feed = () => {
  // Un-comment the lines below to complete your solution
  // ====================

  // const [_________, _________] = useState();

  // const getPostsData = () => {
  //   axios
  //     .get(_________) //THIS IS YOUR URL OF YOUR API
  //     .then(__________) //PROMISE API, THAT MEANS WHEN YOU GET THE DATA WHAT DO I DO WITH IT
  //     .catch(__________);  //ERROR CATCHING IN CASE WE RECIEVE AN ERROR
  // };

  // useEffect(() => {
  //   _________();
  // }, [])

  // ====================

  return (
    <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
      {
        data && data.map(d =>
          <Post title={d.title} body={d.body} comments={d.comments} id={d.id} key={d.id} />
        )
      }

      <NewPost __________ />
    </div>
  )

}


export default Feed;
