import * as React from "react"
import icon from "../img/icon.svg"
import "../style.css"

const NotFoundPage = () => {
  return (
    <main>
      <div className="content">
        <div className="content-container">
        <img
          src={icon} data-src={icon}
          width="100"
          height="100"
          loading="lazy" alt=""
        />
          <h1>oops!</h1>
          <h2>it seems you’ve taken a wrong turn.<br/>the page you’re looking for has wandered off somewhere.</h2>
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
