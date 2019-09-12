import React from 'react'
import './Project.sass'
import { Props } from '../../sections/portfolio/Portfolio'

const Project = (props: Props) => {
    return (
        <div className='project'>
            <a href={props.link}><img src={props.image} alt={props.name} /></a>
        </div>
    )
}

export default Project