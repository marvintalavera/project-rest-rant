const React = require("react");
const Def = require("../default");

function index(data, index) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className="col-sm-6" key={index}>
        <h3>
          <a href={`/places/${place.id}`}>{place.name}</a>
        </h3>
        <p className="text-center">Category: {place.cuisines}</p>
        <div style={{ width: 'auto', height: 'auto', margin: '1rem' }}>
        <img src={place.pic} alt={place.name}/>
        </div>
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    );
  });
  return (
    <Def>
      <main style={{ backgroundColor: 'white'}}>
        <h1 style={{ marginTop:'2rem', marginBottom: '2rem', fontSize: '35px'}}>Places to Rant About</h1>
        <div className="row">{placesFormatted}</div>
        <div>
          <a href="/">
            <button className="btn btn-primary">HOME</button>
          </a>
        </div>
      </main>
    </Def>
  );
}
module.exports = index;