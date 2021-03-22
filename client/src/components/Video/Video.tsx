import React from "react"
import "./Video.sass"
import { Props } from "../../sections/about/data"

const Video = (props: Props) => {
  return (
    <div className="video">
      <a href={props.link} target="_blanck" rel="noopener">
        <iframe src={props.link} width="100%" height="100%" title={props.title}></iframe>
      </a>
      <p className="desc">{props.desc}</p>
    </div>
  )
}

export default Video
