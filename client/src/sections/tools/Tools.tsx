import React from 'react'
import './Tools.sass'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import Tool from '../../components/Tool/Tool'

export interface Props {
    image: string,
    name: string
}

const tools: Props[] = [{
    image: '../assets/icons/react-logo.svg',
    name: 'React'
}, {
    image: '../assets/icons/react-logo.svg',
    name: 'React'
}, {
    image: '../assets/icons/react-logo.svg',
    name: 'React'
}, {
    image: '../assets/icons/react-logo.svg',
    name: 'React'
}, {
    image: '../assets/icons/react-logo.svg',
    name: 'React'
}, {
    image: '../assets/icons/react-logo.svg',
    name: 'React'
},]

const Tools = () => {
    return (
        <div className='bg'>
            <SectionTitle title={'Tech'} subtitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
            <div className="tools">{tools.map((tool, index) => <Tool image={tool.image} name={tool.name} key={index} />)}</div>
        </div>
    )
}

export default Tools