export interface Props {
    image: string,
    name: string
    desc: string,
    link: string,
    git: string,
    designBy: string,
    tech: string[],
    complete: boolean,
    id: number
}
export const projects: Props[] = [{
    image: '../assets/projects/bauwerk.jpg',
    name: 'Bauwerk',
    desc: 'Blog and portfolio site for an architectural design company.',
    link: 'https://bauwerk.netlify.com/',
    git: 'https://github.com/DynamisDevelopment/Bauwerk',
    designBy: 'itimasthemes',
    tech: ['React', 'Gatsby', 'Contentful'],
    complete: true,
    id: 1
}, {
    image: '../assets/projects/itmemaths.jpg',
    name: 'ItMeMaths',
    desc: 'Blog and portfolio site for an architectural design company.',
    link: 'itmemaths-learn.netlify.com',
    git: 'https://github.com/DynamisDevelopment/ItMeMaths',
    designBy: 'Myself',
    tech: ['React', 'Gatsby', 'GraphCMS'],
    complete: true,
    id: 2
}, {
    image: '../assets/projects/itmemaths.jpg',
    name: 'ReactAtScale',
    desc: 'Blog and portfolio site for an architectural design company.',
    link: 'react-at-scale.netlify.com',
    git: 'https://github.com/DynamisDevelopment/ItMeMaths',
    designBy: 'Myself',
    tech: ['React', 'Gatsby', 'Markdown', 'TinaCMS'],
    complete: true,
    id: 3
}]