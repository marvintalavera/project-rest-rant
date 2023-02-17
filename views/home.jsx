const React = require('react')
const Def = require('./default')

function home () {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img src="/images/bird.jpg" alt="bird chilling" />
          <div>
          Photo by <a href="https://unsplash.com/@brewbottle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Bob Brewer</a> on <a href="https://unsplash.com/photos/HsXPfq5lKHc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
</main>

        </Def>
    )
}

module.exports = home
