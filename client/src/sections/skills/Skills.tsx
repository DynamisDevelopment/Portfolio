import React from 'react'
import './Skills.sass'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import Skill, { Props } from '../../components/Skill/Skill'

const skills: Props[] = [{
    icon: '../assets/icons/development.svg',
    title: 'Web Design',
    text: 'We design efficient and engaging web experiences with the focus on user and business needs.'
}, {
    icon: '../assets/icons/development.svg',
    title: 'Web Development',
    text: 'Quick, clean, and maintanable solutions using the latest technology.'
}, {
    icon: '../assets/icons/development.svg',
    title: 'Mobile Development',
    text: 'We design efficient and engaging web experiences with the focus on user and business needs.'
}, {
    icon: '../assets/icons/development.svg',
    title: 'Testing and Maintenance',
    text: 'Quick, clean, and maintanable solutions using the latest technology.'
}]

const Skills = () => {
    return (
        <div className='bg center'>
            <SectionTitle title={'Services'} subtitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
            <div className="skills">{skills.map((skill, index) => <Skill icon={skill.icon} title={skill.title} text={skill.text} key={index} />)}</div>
        </div>
    )
}

export default Skills