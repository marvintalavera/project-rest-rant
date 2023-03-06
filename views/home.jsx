const React = require('react')
const Def = require('./default')

function home () {
  return (
    <Def>
      <main style={{ backgroundColor: 'white'}}>
        <h1 style={{ marginTop:'2rem', marginBottom: '2rem', fontSize: '30px'}}>HOME</h1>
        <div>
          <img src="/images/rant.jpg" alt="restaurant rating" />
        </div>
        <a href="/places">
          <button className="btn-primary" style={{ marginTop: '2rem'}}>Places To Rant About</button>
        </a>
      </main>
    </Def>
    )
}

module.exports = home
