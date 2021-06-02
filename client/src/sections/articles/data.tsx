export interface Props {
    thumb: string,
    title: string,
    desc: string,
    quote?: string,
    link: string
}

export const articles: Props[] = [
    {
        thumb: '../assets/articles/chakra-ui.jpg',
        title: 'Exploring the Chakra UI React Component Library',
        desc: 'Learn the basics of creating modular, responsive, and accessible components for React using Chakra UI.',
        quote: "\"I just read this amazing introduction to Chakra UI by Joshua Hall. I can't find you on twitter but I'll like to say \"Thank you\" for this 💖 . Check it out: 👇🏼\" - Segun Adebayo (Chakra Lead Dev)",
        link: 'https://alligator.io/react/chakra-ui/'
    }, {
        thumb: '../assets/articles/tina-cms.jpg',
        title: 'Exploring TinaCMS with Gatsby',
        desc: 'Improve your writing experience by adding TinaCMS, an in-browser GUI that gives you real-time editing capabilities, to your Gatsby website.',
        quote: "\"Great write-up! We're testing Tina Teams (editing for non-tech folks) internally right now.\" - TinaCMS",
        link: 'https://alligator.io/gatsbyjs/exploring-tina-cms/'
    }, {
        thumb: '../assets/articles/binary-heaps.jpg',
        title: 'Binary Heaps and Priority Queues via JavaScript',
        desc: 'Learn how to create one of the most common data structures for managing intelligent queues: binary heaps. We\ll use JavaScript to go over the concepts.',
        quote: "Most read article with over 340K views! 🚀",
        link: 'https://www.digitalocean.com/community/tutorials/js-binary-heaps'
    }, {
        thumb: '../assets/articles/intro-to-graphs.jpg',
        title: 'Intro to Graphs',
        desc: 'Get a birds-eye-view of the most common and useful data structures out there, graphs.',
        link: 'https://developer.school/intro-to-graphs/'
    }, {
        thumb: '../assets/articles/docker-compose.jpg',
        title: 'Working with Multiple Containers Using Docker Compose',
        desc: 'Learn the basics of creating multi-container Docker services with Docker Compose.',
        link: 'https://alligator.io/workflow/multiple-containers-docker-compose/'
    }, {
        thumb: '../assets/articles/advanced-spring-min.jpg',
        title: 'Creating Complex Animations in React Using react-spring',
        desc: 'Here\'s a tutorial where I use react-spring and the help of the useSprings, useTrail and useChain hooks to create complex animations in React.',
        link: 'https://alligator.io/react/advanced-react-spring/'
    }, {
        thumb: '../assets/articles/prisma.jpg',
        title: 'Setting Up Prisma with Heroku and a Postgres Database',
        desc: 'Learn how to create a GraphQL API using Prisma connected to a Postgres database hosted on Heroku.',
        link: 'https://alligator.io/graphql/setting-up-prisma/'
    }, {
        thumb: '../assets/articles/schemas-min.jpg',
        title: 'Schemas and Resolvers in GraphQL',
        desc: 'Learn how to set up a basic GraphQL API with schemas and resolvers using graphql-yoga and nodemon.',
        link: 'https://alligator.io/graphql/schemas-resolvers-graphql/'
    }, {
        thumb: '../assets/articles/mongoose-min.jpg',
        title: 'CRUD Operations with Mongoose and MongoDB Atlas',
        desc: 'Learn How to Setup a Basic REST Api with Mongoose and the MongoDB Atlas Database.',
        link: 'https://alligator.io/nodejs/crud-operations-mongoose-mongodb-atlas/'
    }, {
        thumb: '../assets/articles/socketio-min.jpg',
        title: 'Introduction to Socket.IO: Building a Simple Chat App',
        desc: 'In this post you\'ll learn the fundamentals of the Socket.IO realtime Node.js application framework by building a chat web app.',
        link: 'https://alligator.io/nodejs/intro-to-socketio/'
    }, {
        thumb: '../assets/articles/docker-intro.jpg',
        title: 'Introduction to Docker: Getting Started',
        desc: 'Get familiar with the world of Docker, what it is, and why you should learn it.',
        link: 'https://alligator.io/workflow/intro-to-docker/'
    }, {
        thumb: '../assets/articles/particles-min.jpg',
        title: 'Create Awesome Background Effects with Particles.js',
        desc: 'Here\'s how to create stunning, interactive, and customizable particles effects using Particles.js, an incredibly easy to master library.',
        link: 'https://alligator.io/js/background-effects-particlesjs/'
    },]