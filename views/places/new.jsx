const React = require("react");
const Def = require("../default");
function new_Form() {
  return (
    <Def>
      <main style={{ backgroundColor: 'white'}}>
        <h1 style={{ marginTop:'2rem', marginBottom: '2rem', fontSize: '35px'}}>Add a New Place</h1>
        <form method="POST" action="/places">
          <div className="form-group">
            <label htmlFor="name">Place Name</label>
            <input className="form-control" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="pic">Place Picture</label>
            <input className="form-control" id="pic" name="pic" />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input className="form-control" id="city" name="city" />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input className="form-control" id="state" name="state" />
          </div>
          <div className="form-group">
            <label htmlFor="cuisines">Cuisines</label>
            <input
              className="form-control"
              id="cuisines"
              name="cuisines"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="founded">Founded Year</label>
            <input
              className="form-control"
              id="founded"
              name="founded"
              defaultValue={new Date().getFullYear()}
            />
          </div>
          <input className="btn btn-primary" type="submit" defaultValue="Add Place" />
        </form>
      </main>
    </Def>
  );
}
module.exports = new_Form;