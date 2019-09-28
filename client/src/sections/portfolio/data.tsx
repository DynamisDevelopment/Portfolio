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
    desc: 'Blog and portfolio site for an architecture company, built with Gatsby and Contentful.',
    link: 'https://bauwerk.netlify.com/',
    git: 'https://github.com/DynamisDevelopment/Bauwerk',
    designBy: 'itimasthemes',
    tech: ['React', 'Gatsby', 'Contentful'],
    complete: true,
    id: 1
}, {
    image: '../assets/projects/tajam.jpg',
    name: 'Tajam',
    desc: 'Branding site for a small development agency. Built with Pug and Sass',
    link: '',
    git: '',
    designBy: 'Aji Darmawan',
    tech: ['Pug', 'Sass', 'Materialize'],
    complete: true,
    id: 2
}, {
    image: '../assets/projects/eren.jpg',
    name: 'Eren',
    desc: 'A fullstack furniture store built with React, GraphQL, and Next.js.',
    link: '',
    git: '',
    designBy: 'Erendesigner',
    tech: ['React', 'NextJS', 'GraphQL', 'Moltin'],
    complete: false,
    id: 3
}, {
    image: '../assets/projects/lexica.jpg',
    name: 'Lexica',
    desc: 'A fullstack site and mobile app for learning languages with real content. Built with React, Prisma/GraphQL, and Flutter',
    link: '',
    git: '',
    designBy: 'Myself',
    tech: ['React', 'GraphQL', 'CloudML', 'Flutter'],
    complete: false,
    id: 4
}]