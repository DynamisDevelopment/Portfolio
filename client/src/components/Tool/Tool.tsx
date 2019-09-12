import React from 'react'
import './Tool.sass'
import { Props } from '../../sections/tools/Tools'

const Tool = ({ image, name }: Props) => {
    return (
        <div className='tool'>
            <img src={image} alt={name} />
            <h2>{name}</h2>
        </div>
    )
}

export default Tool