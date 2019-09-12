import React from 'react'
import './About.sass'
import SectionTitle from '../../components/sectionTitle/SectionTitle'

const About = () => {
    return (
        <div>
            <div className="about">
                <SectionTitle title={'About'} subtitle={''} />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat at sed incidunt repudiandae necessitatibus unde iure officiis porro voluptatum, eius nobis rem tenetur corporis quasi autem iusto eos veniam delectus, asperiores ut. <br /> <br />Esse dolore, soluta, voluptas eos fugit reprehenderit, similique alias molestias quaerat distinctio ad. Quae esse ex debitis asperiores?</p>
            </div>
        </div>
    )
}

export default About