import React from 'react'
import './Skills.sass'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import Skill, { Props } from '../../components/Skill/Skill'

const skills: Props[] = [{
    icon: '../assets/icons/development.svg',
    title: 'Web Design',
    text: 'I work with the best designers to create efficient and engaging web experiences with the focus on user and business needs.'
}, {
    icon: '../assets/icons/development.svg',
    title: 'Web Development',
    text: 'Quick, clean, and maintanable solutions using the latest technology and best practices.'
}, {
    icon: '../assets/icons/development.svg',
    title: 'Mobile Development',
    text: 'I use Flutter and React Native to create dynamic and scalable apps for both IOS and Android.'
}, {
    icon: '../assets/icons/development.svg',
    title: 'Testing and Maintenance',
    text: 'Looking for long-term partnerships to continuously update and improve your site.'
}]

const Skills = () => {
    return (
        <div className='bg center'>
            <SectionTitle title={'Services'} subtitle={'These are just a few things that I can provide, but I\'m always open to anything interesting.'} />
            <div className="skills">{skills.map((skill, index) => <Skill icon={skill.icon} title={skill.title} text={skill.text} key={index} />)}</div>
        </div>
    )
}

export default Skills