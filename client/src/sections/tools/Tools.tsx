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
    image: '../assets/icons/gatsby-logo.svg',
    name: 'Gatsby'
}, {
    image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png',
    name: 'Vue'
}, {
    image: '../assets/icons/mongo-logo.svg',
    name: 'MongoDB'
}, {
    image: '../assets/icons/graphql-logo.svg',
    name: 'GraphQL'
}, {
    image: '../assets/icons/electron.png',
    name: 'Electron'
}, {
    image: '../assets/icons/docker-logo.svg',
    name: 'Docker'
}, {
    image: 'https://avatars.githubusercontent.com/u/6250754',
    name: 'Solidity'
}, {
    image: '../assets/icons/kubernetes-logo.svg',
    name: 'Kubernetes'
}]

const rowOne = tools.slice(0, 7)
const rowTwo = tools.slice(7, 14)

const Tools = () => {
    return (
        <div className='bg'>
            <SectionTitle title={'Tech'} subtitle={'I can figure out pretty much anything, but these are what I\'m the most confident with.'} />
            <div className="tools">{rowOne.map((tool, index) => <Tool image={tool.image} name={tool.name} key={index} />)}</div>
            <div className="toolsTwo">{rowTwo.map((tool, index) => <Tool image={tool.image} name={tool.name} key={index} />)}</div>
        </div>
    )
}

export default Tools