const React = require("react");
const Def = require("../default");
function show(data) {
  let comments = (
    <h6 className="inactive" style={{ marginTop: '.5rem', fontSize: '12px'}}>
      No comments yet
    </h6>
  )
  let rating = (
    <h6 className="inactive" style={{ marginTop: '.5rem', fontSize: '12px'}}>
      No ratings yet
    </h6>
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
      <h3 style={{ fontSize: '20px'}}>
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
      <main style={{ backgroundColor: 'white'}}>        
        <div style={{ margin: 'auto'}}>
          <div>
            <h1 style={{ marginTop:'2rem', marginBottom: '2rem', fontSize: '35px'}}>{data.place.name}</h1>
            <div style={{ width: 'auto', height: 'auto', margin: '1rem' }}>
            <img src={data.place.pic} alt={data.place.name}/>
            </div>
            <h3 style={{ marginTop: '1rem'}}>{data.place.showEstablished()}</h3>
            <h6 style={{ marginBottom: '2rem', marginRight: '1rem' }}>Category: {data.place.cuisines}</h6>
            <h5 style={{ marginBottom: '.1rem'}}>Rating:</h5>
            {rating}
          </div>
          <div>
            <div style={{ marginTop: '3rem' }}>
            <form method="POST" action={`/places/${data.place._id}/comment`} className="comment-form">
            <legend className='comment-legend'><h5 style={{ marginBottom: '.2rem' }}>Add A Comment</h5></legend>
            <div className="comment-auth" style={{ width: '15rem', marginBottom: '1rem', marginLeft: 'auto', marginRight: 'auto'}}>
            <h6 style={{ color: 'gray', fontSize: '12px' }}>Your Name:</h6>
            <label htmlFor="Author"></label>
            <input type="text" name="author"/>
            </div>
            <div className="comment-content">
            <label htmlFor="content"></label>
            <textarea name="content" rows="6" style={{ width: '15rem' }}></textarea>
            </div>
            <div className="comment-stars">
            <label htmlFor="stars" style={{ marginRight: '.5rem' }}>Rating:</label>
            <input type="number" name="stars" step="0.5" min="0.5" max="5" defaultValue="0.5" />
            </div>
            <div className="comment-rant">
            <label htmlFor="rant" style={{ marginRight: '.5rem' }}>Unsatisfied?</label>
            <input type="checkbox" name="rant" value="rant" />
            </div>
            <div className="comment-submit">
            <button type="submit" style={{ marginBottom: '2rem'}}>Submit</button>
            </div>
            </form>
            </div>
            </div>
            <h5 style={{ marginBottom: '1rem', marginTop: '2rem', fontSize: '24px' }}>Comments:</h5>
            <h3 style={{ fontSize: '20px'}}>
            {comments}
            </h3>
            <div style={{ marginTop: '2rem'}}>
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