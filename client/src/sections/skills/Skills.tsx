import React from 'react'
import './Skills.sass'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import Skill, { Props } from '../../components/Skill/Skill'

const skills: Props[] = [
  {
    icon: '../assets/icons/frontend.svg',
    title: 'Front End & Mobile',
    text: 'Quick, clean, and maintanable solutions using the latest best practices to minimize bloat and keep things DRY.',
  },
  {
    icon: '../assets/icons/backend.svg',
    title: 'Back End & DevOps',
    text: 'Whether it be routing, architecture, or database management I can work with large teams to figure out almost anything.',
  },
  {
    icon: '../assets/icons/blockchain.svg',
    title: 'Blockchain & Defi',
    text: 'With a wide understanding of of crypto from the innerworkings to Dapp development.',
  },
  {
    icon: '../assets/icons/testing.svg',
    title: 'Test Driven Development',
    text: 'Using a TDD approach and best practices I can write clean, maintainable, code from start to finish.',
  },
]

const Skills = () => {
  return (
    <div className="bg center" id="Services">
      <SectionTitle
        title={'Services'}
        subtitle={
          "These are just a few things that I can provide, but I'm always open to anything interesting."
        }
      />
      <div className="skills">
        {skills.map((skill, index) => (
          <Skill
            icon={skill.icon}
            title={skill.title}
            text={skill.text}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Skills
