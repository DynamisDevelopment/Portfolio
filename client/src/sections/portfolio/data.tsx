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
},
// {
//     image: '../assets/projects/happy_paws.jpg',
//     name: 'Happy Paws',
//     desc: 'Branding page and blog for a pet store and adoption service.',
//     link: '',
//     git: 'https://github.com/DynamisDevelopment/Happy-Paws.git',
//     designBy: 'ThemesPlace',
//     tech: ['Gatsby', 'React', 'Wordpress', 'WooCommerce'],
//     complete: false,
//     id: 2
// }, {
// image: '../assets/projects/qertsa.jpg',
// name: 'Qertsa',
// desc: 'A native Android chat app for sharing messages, photos, and videos.  ',
// link: '',
// git: '',
// designBy: 'Ogwebsolutions',
// tech: ['Flutter', 'Firebase'],
// complete: false,
// id: 3
//}, 
{
    image: '../assets/projects/itmemaths.jpg',
    name: 'ItMeMaths',
    desc: 'A math education site for discussion and resources.',
    link: 'https://itmemaths.netlify.com/',
    git: 'https://github.com/DynamisDevelopment/ItMeMaths',
    designBy: 'Myself',
    tech: ['React', 'Gatsby', 'Firebase', 'GraphQL', 'GraphCMS'],
    complete: false,
    id: 2
}]