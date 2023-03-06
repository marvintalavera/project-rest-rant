const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
      <main style={{ backgroundColor: 'white'}}>
        <h1 style={{ marginTop:'2rem', marginBottom: '2rem', fontSize: '35px'}}>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry we can't find this page.</p>
        <div>
          <img src="/images/error.jpg" alt="error page" />
        </div>
      </main>
      </Def>
    )
  }
  

module.exports = error404