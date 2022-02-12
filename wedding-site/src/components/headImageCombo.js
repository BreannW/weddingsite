import * as React from "react"
import {
  headerImage,
  date,
  headerImageContainer,
  dateLocalContainer,
  locale
} from "./homepage.module.css"
import { StaticImage } from "gatsby-plugin-image"

const HeadImageCombo = () => {
  return (
    <div className={headerImageContainer}>
      <StaticImage
        className={headerImage}
        src="...\images\grandcanyon.jpeg"
        alt="breann and steve"
        height="500px"
      />
      <div className={dateLocalContainer}>
        <div className={date}>6.17.23</div>
        <div className={locale}>St Pauls, Wellesley | Wayside Inn, Sudbury</div>
      </div>
    </div>
  )
}

export default HeadImageCombo
