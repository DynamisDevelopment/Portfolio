import React from 'react'
import './Portfolio.sass'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import Project from '../../components/Project/Project'

export interface Props {
    image: string,
    name: string
    desc: string,
    link: string,
    id: number
}
const projects: Props[] = [{
    image: '../assets/projects/project1.jpg',
    name: '',
    desc: '',
    link: '',
    id: 1
}, {
    image: '../assets/projects/project1.jpg',
    name: '',
    desc: '',
    link: '',
    id: 2
}, {
    image: '../assets/projects/project1.jpg',
    name: '',
    desc: '',
    link: '',
    id: 3
}, {
    image: '../assets/projects/project1.jpg',
    name: '',
    desc: '',
    link: '',
    id: 4
}, {
    image: '../assets/projects/project1.jpg',
    name: '',
    desc: '',
    link: '',
    id: 5
}, {
    image: '../assets/projects/project1.jpg',
    name: '',
    desc: '',
    link: '',
    id: 6
},]


const Portfolio = () => {
    return (
        <div className='center'>
            <SectionTitle title={'Portfolio'} subtitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
            <div className="responsive-grid">
                {projects.map((project, index) => <Project image={project.image} name={project.name} desc={project.desc} link={project.link} id={project.id} key={index} />)}
            </div>
        </div>
    )
}

export default Portfolio