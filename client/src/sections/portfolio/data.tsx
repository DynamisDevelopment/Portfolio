export interface Props {
    image: string,
    name: string
    desc: string,
    link: string,
    git: string,
    complete: boolean,
    id: number
}
export const projects: Props[] = [{
    image: '../assets/projects/bauwerk.jpg',
    name: 'Bauwerk',
    desc: 'Blog and portfolio site for an architecture company, built with Gatsby and Contentful.',
    link: 'https://bauwerk.netlify.com/',
    git: 'https://github.com/DynamisDevelopment/Bauwerk',
    complete: true,
    id: 1
}, {
    image: '../assets/projects/tajam.jpg',
    name: 'Tajam',
    desc: 'Branding site for a small development agency',
    link: '',
    git: '',
    complete: true,
    id: 2
}, {
    image: '../assets/projects/lexica.jpg',
    name: 'Lexica',
    desc: 'A fullstack site and mobile app for learning languages with real content.',
    link: '',
    git: '',
    complete: false,
    id: 2
}]