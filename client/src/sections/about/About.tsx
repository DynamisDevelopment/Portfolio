import React from "react"

// * Components
import SectionTitle from "../../components/sectionTitle/SectionTitle"
import Slider from "react-slick"

// * Styles
import "./About.sass"

const About = () => {
  return (
    <div id="About">
      <div className="about">
        <SectionTitle title={"About"} subtitle={""} />
        <p>
          I'm also in the process of building my own agency and YouTube channel,
          Dynamis Development, to start having more oportunities to work with
          other great developers and designers on more interesting projects
          while helping other build their skills.
        </p>
        <a href="https://www.youtube.com/channel/UC-9kS4cbkpJ91kga-eB-MOA">
          <button className="btn">Dynamis Development</button>
        </a>
      </div>
    </div>
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
    <div id="About">
      <div className="reviews">
        <SectionTitle title={"Reviews"} subtitle={""} />
        <Slider {...settings} className="slider">
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
          <div>
            <p>
              "Joshua did a great job, well above expectations. As I'd not used
              Gatsby much, it was not clear to me what was really needed and
              Joshua went above and beyond to complete the job and do what was
              necessary, even though I did not completely spec."
            </p>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export { About, Reviews }
