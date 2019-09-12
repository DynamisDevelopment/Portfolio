import React from 'react'
import './Article.sass'
import { Props } from '../../sections/articles/Articles'

const Article = (props: Props) => {
    return (
        <div className='post'>
            <a href={props.link}><img src={props.thumb} alt={`${props.title} thumbnail`} /></a>
            <h2 className='title'>{props.title}</h2>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

export default Article