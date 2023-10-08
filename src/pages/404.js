import * as React from "react"
import { Link } from "gatsby"
import "../style.css"

const NotFoundPage = () => {
  return (
    <main>
      <div className="content">
        <div className="content-container">
          <h1>oops! it seems you’ve taken a wrong turn.</h1>
          <br/>
          <h2>the page you’re looking for has wandered off somewhere,<br/>but don’t worry, you’re not lost.</h2>
          <h2>let’s get you back on track:<br/>return to the <Link to="/">homepage</Link> and navigate from there.</h2>
          <br/>
          <h2>thanks for stopping by, and happy browsing!</h2>
        </div>
      </div>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>lost in cyberspace</title>
