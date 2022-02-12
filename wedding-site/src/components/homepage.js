import * as React from "react"
import "normalize.css"
import "@fontsource/noto-sans/400.css";
import "@fontsource/noto-serif-display/400.css"; 
import { base } from "./base.module.css"
import  NavBar  from "./navbar.js"
import HeadImageCombo from "./headImageCombo.js"

// import { StaticImage } from "gatsby-plugin-image"

const Homepage = ({ pageTitle, children }) => {
  return (
    <div className={base}>
      <title>{pageTitle}</title>
      <NavBar isHomepage="true"></NavBar>
      <HeadImageCombo></HeadImageCombo>

      <main>
        <h1> About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan sapien vel ex tincidunt placerat. Morbi nisi justo, feugiat a iaculis nec, dignissim vitae urna. Sed tempus vitae velit et sagittis. Curabitur bibendum et tortor et convallis. Mauris in pulvinar augue. Donec nunc ligula, ullamcorper ac libero vitae, finibus rutrum sem. Morbi interdum, lacus eget sollicitudin viverra, sapien leo posuere lacus, sed aliquet augue tellus at metus. Nam vel elit tortor. Etiam ante elit, ornare sed tincidunt in, aliquet a lorem. Nam semper vitae enim at venenatis. Sed in quam in urna finibus aliquam. Sed arcu ante, lobortis sed consectetur vel, maximus id felis. Aenean odio nulla, dictum vel cursus eu, pellentesque eu dolor. Sed eu scelerisque est, at aliquam tortor. Aliquam in semper sapien, vel commodo sem. Phasellus id sapien ornare, convallis diam sit amet, tincidunt ex.</p>
      </main>

    </div>
  )
}

export default Homepage
