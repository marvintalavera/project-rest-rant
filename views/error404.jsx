const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry we can't find this page.</p>
        <div>
          <img src="/images/cow.jpg" alt="cow licking" />
          <div>
          Photo by <a href="https://unsplash.com/@ainarscekuls?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ainārs Cekuls</a> on <a href="https://unsplash.com/photos/h-XRaPA0b9o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </div>
      </main>
      </Def>
    )
  }
  

module.exports = error404