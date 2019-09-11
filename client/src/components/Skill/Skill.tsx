import React from 'react'
import './Skill.sass'

export interface Props {
    icon: string
    title: string
    text: string
}

const Skill = (props: Props) => {
    return (
        <div className='skill'>
            <div className="icon-bg"><img src={props.icon} alt="Skill Icon" className="icon" /></div>
            <h1>{props.title}</h1>
            <div className="shortLine"></div>
            <div className="text">{props.text}</div>
        </div>
    )
}

export default Skill