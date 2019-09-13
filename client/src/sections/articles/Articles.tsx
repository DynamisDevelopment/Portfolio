import React from 'react'
import './Articles.sass'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import Article from '../../components/Article/Article'

export interface Props {
    thumb: string,
    title: string,
    desc: string,
    link: string
}

const articles: Props[] = [{
    thumb: '../assets/articles/example.png',
    title: 'Mutations and Subscriptions in GraphQL',
    desc: 'Learn how to set up an advanced GraphQL APIs with Mutations and Subscriptions using the graphql-yoga Node.js library.',
    link: 'https://alligator.io/graphql/mutations-subscriptions/'
}, {
    thumb: '../assets/articles/example.png',
    title: 'Mutations and Subscriptions in GraphQL',
    desc: 'Learn how to set up an advanced GraphQL APIs with Mutations and Subscriptions using the graphql-yoga Node.js library.',
    link: 'https://alligator.io/graphql/mutations-subscriptions/'
}, {
    thumb: '../assets/articles/example.png',
    title: 'Mutations and Subscriptions in GraphQL',
    desc: 'Learn how to set up an advanced GraphQL APIs with Mutations and Subscriptions using the graphql-yoga Node.js library.',
    link: 'https://alligator.io/graphql/mutations-subscriptions/'
}, {
    thumb: '../assets/articles/example.png',
    title: 'Mutations and Subscriptions in GraphQL',
    desc: 'Learn how to set up an advanced GraphQL APIs with Mutations and Subscriptions using the graphql-yoga Node.js library.',
    link: 'https://alligator.io/graphql/mutations-subscriptions/'
}, {
    thumb: '../assets/articles/example.png',
    title: 'Mutations and Subscriptions in GraphQL',
    desc: 'Learn how to set up an advanced GraphQL APIs with Mutations and Subscriptions using the graphql-yoga Node.js library.',
    link: 'https://alligator.io/graphql/mutations-subscriptions/'
}, {
    thumb: '../assets/articles/example.png',
    title: 'Mutations and Subscriptions in GraphQL',
    desc: 'Learn how to set up an advanced GraphQL APIs with Mutations and Subscriptions using the graphql-yoga Node.js library.',
    link: 'https://alligator.io/graphql/mutations-subscriptions/'
}, {
    thumb: '../assets/articles/example.png',
    title: 'Mutations and Subscriptions in GraphQL',
    desc: 'Learn how to set up an advanced GraphQL APIs with Mutations and Subscriptions using the graphql-yoga Node.js library.',
    link: 'https://alligator.io/graphql/mutations-subscriptions/'
}, {
    thumb: '../assets/articles/example.png',
    title: 'Mutations and Subscriptions in GraphQL',
    desc: 'Learn how to set up an advanced GraphQL APIs with Mutations and Subscriptions using the graphql-yoga Node.js library.',
    link: 'https://alligator.io/graphql/mutations-subscriptions/'
},]

const Articles = () => {
    return (
        <div className='bg center'>
            <SectionTitle title={"Articles"} subtitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
            <div className="responsive-grid">{articles.map((article, index) => <Article thumb={article.thumb} title={article.title} desc={article.desc} link={article.link} key={index} />)}</div>
        </div>
    )
}

export default Articles