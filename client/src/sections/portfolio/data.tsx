export interface Props {
    image: string,
    name: string
    desc: string,
    link?: string,
    git?: string,
    designBy: string,
    tech: string[],
    complete: boolean,
    id: number
}
export const projects: Props[] = [{
    image: '../assets/projects/bauwerk.jpg',
    name: 'Bauwerk',
    desc: 'Blog and portfolio site for a German architectural and interior design company.',
    link: 'https://bauwerk.netlify.com/',
    git: 'https://github.com/DynamisDevelopment/Bauwerk',
    designBy: 'itimasthemes',
    tech: ['React', 'Gatsby', 'Contentful'],
    complete: true,
    id: 1
},
// {
//     image: '../assets/projects/itmemaths.jpg',
//     name: 'ItMeMaths',
//     desc: 'Blog for publishing open source math lessons and resources.',
//     link: 'https://itmemaths-learn.netlify.com',
//     git: 'https://github.com/DynamisDevelopment/ItMeMaths',
//     designBy: 'Myself',
//     tech: ['React', 'Gatsby', 'GraphCMS'],
//     complete: true,
//     id: 2
// }, 
{
    image: '../assets/projects/reactatscale.jpg',
    name: 'React At Scale',
    desc: 'The client had a old, out-dated, site built with Jekyll which he wanted remade with something more performant. I completely remade the site, while closely replicating the original design, with TailwindCSS and Chakra UI.',
    link: 'https://react-at-scale.netlify.com/',
    git: 'https://github.com/DynamisDevelopment/reactAtScale',
    designBy: 'Peter Kellner',
    tech: ['React', 'Gatsby', 'Markdown', 'TinaCMS'],
    complete: true,
    id: 3
}, {
    image: '../assets/projects/habitica-social.jpg',
    name: 'Habitica Social',
    desc: 'My attempt at a social media-like site based off of Habitica, with people being able to connect their account and find like minded people with similar goals for self improvement.',
    git: 'https://github.com/DynamisDevelopment/habitica_social',
    designBy: 'Myself',
    tech: ['Flutter', 'Dart', 'Flutter-View', 'Firebase'],
    complete: false,
    id: 4
}]