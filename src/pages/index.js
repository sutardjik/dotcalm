import * as React from "react"
import icon from "../img/icon.svg"
import Gallery from "./components/Gallery";
import "../style.css"

const IndexPage = () => {
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
        <h1>.calm</h1>
        <h2>
          the left + right brain organized chaos<br />of&nbsp;
          <a href="https://sutardjik.github.io/" target="_self" style={{ color: 'var(--text) !important' }}
            >&#x6b;&#x61;&#x72;&#x65;&#x6e;
            &#x73;&#x75;&#x74;&#x61;&#x72;&#x64;&#x6a;&#x69;</a>
        </h2>
        <br />
        <h3 style={{ marginBottom: '30px' }}>gallery</h3>
        <div className="img-display" style={{ marginBottom: '70px' }}>
          <Gallery/>
        </div>
      </div>
    </div>
  </main>
  )
}

export default IndexPage

export const Head = () => <title>.calm</title>
