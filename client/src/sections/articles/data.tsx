import React from 'react'

export interface Props {
    thumb: string,
    title: string,
    desc: string,
    link: string
}

export const articles: Props[] = [{
    thumb: '../assets/articles/mutations.jpg',
    title: 'Mutations and Subscriptions in GraphQL',
    desc: 'Learn how to set up an advanced GraphQL APIs with Mutations and Subscriptions using the graphql-yoga Node.js library.',
    link: 'https://alligator.io/graphql/mutations-subscriptions/'
}, {
    thumb: '../assets/articles/tailwind.jpg',
    title: 'Introduction to Tailwind CSS',
    desc: 'Explore Tailwind CSS, a popular utility-based CSS library that\'s easy to learn, customizable and responsive.',
    link: 'https://alligator.io/css/tailwind-css/'
}, {
    thumb: '../assets/articles/react-spring.jpg',
    title: 'Intro to Animations in React Using React Spring',
    desc: 'Learn how to create dynamic physics-based animations in your React apps using the react-spring spring-physics animation library.',
    link: 'https://alligator.io/react/intro-to-react-spring/'
}, {
    thumb: '../assets/articles/electron-part1.jpg',
    title: 'Intro to Electron.js - Part 1: Setup',
    desc: 'Get started using Electron.js to create your own native desktop applications.',
    link: 'https://alligator.io/electron/intro-to-electron-setup/'
}, {
    thumb: '../assets/articles/electron-part2.jpg',
    title: 'Intro to Electron.js - Part 2: Todo App',
    desc: 'In this post we\'ll be creating a basic todo list app desktop app for Windows, Mac or Linux using Electron.js.',
    link: 'https://alligator.io/electron/intro-to-electron-todo-app/'
}, {
    thumb: '../assets/articles/advanced-spring.jpg',
    title: 'Creating Complex Animations in React Using react-spring',
    desc: 'Here\'s a tutorial where I use react-spring and the help of the useSprings, useTrail and useChain hooks to create complex animations in React.',
    link: 'https://alligator.io/react/advanced-react-spring/'
}, {
    thumb: '../assets/articles/flutter-layout.jpg',
    title: 'Creating a Basic Layout in Flutter',
    desc: 'In this post we\'ll briefly look at how to create a basic Flutter app layout in Dart. A great post if you\'re just getting started with Flutter.',
    link: 'https://alligator.io/flutter/basic-layout/'
}, {
    thumb: '../assets/articles/schemas.jpg',
    title: 'Schemas and Resolvers in GraphQL',
    desc: 'Learn how to set up a basic GraphQL API with schemas and resolvers using graphql-yoga and nodemon.',
    link: 'https://alligator.io/graphql/schemas-resolvers-graphql/'
}, {
    thumb: '../assets/articles/mongoose.jpg',
    title: 'CRUD Operations with Mongoose and MongoDB Atlas',
    desc: 'Learn How to Setup a Basic REST Api with Mongoose and the MongoDB Atlas Database.',
    link: 'https://alligator.io/nodejs/crud-operations-mongoose-mongodb-atlas/'
},]