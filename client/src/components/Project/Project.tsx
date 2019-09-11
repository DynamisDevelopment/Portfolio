import React from 'react'
import './Project.sass'
import { Props } from '../../sections/portfolio/Portfolio'

const Project = (props: Props) => {
    return (
        <div className='project'>
            <img src={props.image} alt={props.name} />
        </div>
    )
}

export default Project