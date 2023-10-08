import * as React from "react"
import "../style.css"

const NotFoundPage = () => {
  return (
    <main>
      <div className="content">
        <div className="content-container">
          <h1>oops! it seems you’ve taken a wrong turn.</h1>
          <br/>
          <h2>the page you’re looking for has wandered off somewhere.</h2>
          <h2>thanks for stopping by, and happy browsing!</h2>
          <br/>
          <br/>
          <br/>
        </div>
      </div>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>lost in cyberspace</title>
