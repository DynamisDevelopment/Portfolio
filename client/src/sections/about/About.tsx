import React from 'react'
import './About.sass'
import SectionTitle from '../../components/sectionTitle/SectionTitle'

const About = () => {
    return (
        <div>
            <SectionTitle title={'About'} subtitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
            <div className="about">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat at sed incidunt repudiandae necessitatibus unde iure officiis porro voluptatum, eius nobis rem tenetur corporis quasi autem iusto eos veniam delectus, asperiores ut. <br /> <br />Esse dolore, soluta, voluptas eos fugit reprehenderit, similique alias molestias quaerat distinctio ad. Quae esse ex debitis asperiores?</div>
        </div>
    )
}

export default About