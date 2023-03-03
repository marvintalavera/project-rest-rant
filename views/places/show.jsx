const React = require("react");
const Def = require("../default");
function show(data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive"></h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += '⭐️'
    }
    rating = (
      <h3>
        {stars} stars
      </h3>
    )  
  }
  if (data.place.comments.length) {
    comments = data.place.comments.map((c, index) => {
      return (
        <div className="border" key={index}>
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😊'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
          <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
            <input type="submit" className="btn btn-danger" value="Delete Comment" />
          </form>
      </div>
    )
  })
}
  return (
    <Def>
      <main>        
        <div className="row">
          <div className="col-sm-6">
            <h1>{data.place.name}</h1>
            <img src={data.place.pic} alt={data.place.name} />
            <h3>
              Located in {data.place.city}, {data.place.state}{" "}
              {data.place.cuisines}
            </h3>
          </div>
          <div className="col-sm-6">
            <h2>Rating</h2>
            {rating}
            <h2>Description</h2>
            <h3>{data.place.showEstablished()}</h3>
            <h4>Serving {data.place.cuisines}</h4>
            <form method="POST" action={`/places/${data.place._id}/comment`} className="comment-form">
            <legend className='comment-legend'><h4>Add A Comment</h4></legend>
            <div className="comment-auth">
            <label htmlFor="Author">Author:</label>
            <input type="text" name="author"/>
            </div>
            <div className="comment-stars">
            <label htmlFor="stars">Rating:</label>
            <input type="number" name="stars" step="0.5" min="0.5" max="5" defaultValue="0.5" />
            </div>
            <div className="comment-rant">
            <label htmlFor="rant">Rant:</label>
            <input type="checkbox" name="rant" value="rant" />
            </div>
            <div className="comment-content">
            <label htmlFor="content">Content</label>
            <textarea name="content" rows="5"></textarea>
            </div>
            <div className="comment-submit">
            <button type="submit">Comment</button>
            </div>
            </form>
            {comments}
            <a href={`/places/${data.place._id}/edit`} className="btn btn-warning">
              Edit
            </a>
            <form method="POST" action={`/places/${data.place._id}?_method=DELETE`}>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
          </div>
        </div>
      </main>
    </Def>
  );
}
module.exports = show;