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
    image: '../assets/projects/happy_paws.jpg',
    name: 'Yuppie Puppies',
    desc: 'Branding page and blog for a pet adoption service.',
    link: '',
    git: '',
    designBy: 'ThemesPlace',
    tech: ['Wordpress'],
    complete: false,
    id: 2
}, {
    image: '../assets/projects/qertsa.jpg',
    name: 'Qertsa',
    desc: 'A native Android chat app for sharing messages, photos, and videos.  ',
    link: '',
    git: '',
    designBy: 'Ogwebsolutions',
    tech: ['Flutter', 'Firebase'],
    complete: false,
    id: 3
}, {
    image: '../assets/projects/eren.jpg',
    name: 'Eren',
    desc: 'A fullstack furniture store built with React, GraphQL, and Next.js.',
    link: '',
    git: '',
    designBy: 'Erendesigner',
    tech: ['React', 'NextJS', 'GraphQL', 'Moltin'],
    complete: false,
    id: 4
}]