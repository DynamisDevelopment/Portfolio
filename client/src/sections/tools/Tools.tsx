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
    image: '../assets/icons/flutter-logo.svg',
    name: 'Flutter'
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
},
{
    image: '../assets/icons/firebase-logo.svg',
    name: 'Firebase'
}, {
    image: '../assets/icons/prisma-logo.svg',
    name: 'Prisma'
},
{
    image: '../assets/icons/kubernetes-logo.svg',
    name: 'Kubernetes'
}
]

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