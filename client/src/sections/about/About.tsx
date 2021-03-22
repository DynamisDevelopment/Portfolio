import React, {useState } from "react"

// * Components
import SectionTitle from "../../components/sectionTitle/SectionTitle"
import Slider from "react-slick"
import { videos } from "./data"
import Video from "../../components/Video/Video"
import { useTrail, animated, config } from 'react-spring'
import { Waypoint } from 'react-waypoint'

// * Styles
import "./About.sass"

const About = () => {
  const [show, toggle] = useState(false)
  const reveal = useTrail(videos.length, {
    to: { opacity: show ? 1 : 0 },
    config: config.slow
  })

  return (
    <section id="About">
      <div className="about">
        <SectionTitle title={"About"} subtitle={""} />
        <p>
          I'm also in the process of building my own agency and YouTube channel,
          Dynamis Development, to start having more oportunities to work with
          other great developers and designers on more interesting projects
          while helping other build their skills.
        </p>
        <div className="responsive-grid">
          {reveal.map((animation, i) => (
            <animated.div style={animation} key={i}>
              <Waypoint
                onEnter={() => {
                  if (!show) toggle(true)
                }}
                bottomOffset="30%"
              />
              <Video
                title={videos[i].title}
                desc={videos[i].desc}
                link={videos[i].link}
              />
            </animated.div>
          ))}
        </div>
        <a
          href="https://www.youtube.com/channel/UC-9kS4cbkpJ91kga-eB-MOA"
          target="_blanck"
        >
          <button className="btn">Dynamis Development</button>
        </a>
      </div>
    </section>
  )
}

const Reviews = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <section id="About">
      <div className="reviews">
        <SectionTitle title={"Reviews"} subtitle={""} />
        <Slider {...settings} className="slider">
        <div>
          <p>
            "Josh is a talented, internally motivated frontend engineer who exemplifies strong technical thinking and goal oriented execution. It's been really great working with him. Strongly recommended for anyone who's looking for top notch work and a friendly colleague." - Zack Peng (CEO of Kover.ai)
          </p>
        </div>
          <div>
            <p>
              "What a breeze it has been to have been able to work with Joshua!
              Great work quality, always, and I really couldn't be happier! I
              highly recommend!" - Sebastian Noel (Founder of Alligator.io 🐊)
            </p>
          </div>
          <div>
            <p>
              "Joshua was flexible, took initiative, and was technically
              capable. Unfortunately I had to end our engagement early for lack
              of budget." - Christopher Haueter (CEO of Reason-0)
            </p>
          </div>
          <div>
            <p>
              "Joshua was a pleasure to work with. He dedicated himself fully to each project I sent him & delivered quality results on time, every time. Would definitely recommend Joshua for any task you've got... he has a wide range of skills and would be an asset to any company." - Laura and Jesse (Founders of DropInBlog)
            </p>
          </div>
          <div>
            <p>
              "Joshua did a great job, well above expectations. As I'd not used
              Gatsby much, it was not clear to me what was really needed and
              Joshua went above and beyond to complete the job and do what was
              necessary, even though I did not completely spec."
            </p>
          </div>
          <div>
            <p>
              "Josh was just perfect to work with. I'm so glad I went with his
              suggestion to use Gatsby over Wordpress Like I originally
              intended. Will definitely like to work with him again in the
              future."
            </p>
          </div>
          <div>
            <p>
              "I would most definitely recommend this freelancer to a friend! He
              was great."
            </p>
          </div>
          
        </Slider>
      </div>
    </section>
  )
}


// ""
export { About, Reviews }
