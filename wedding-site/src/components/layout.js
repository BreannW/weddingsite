import "normalize.css"
import "@fontsource/noto-sans/400.css";
import "@fontsource/noto-serif-display/400.css"; 

import * as React from "react"
import { base } from "./base.module.css"
import  NavBar  from "./navbar.js"

// import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={base}>

      <title>{pageTitle}</title>
      <NavBar></NavBar>
      <main className={base}>
        {children}
      </main>
    </div>
  )
}

export default Layout
