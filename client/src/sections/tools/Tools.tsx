import React from 'react'
import './Tools.sass'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import Tool from '../../components/Tool/Tool'

export interface Props {
    image: string,
    name: string
}


const FE: Props[] = [
    {
        image: '../assets/icons/react-logo.svg',
        name: 'React'
    }, {
        image: '../assets/icons/gatsby-logo.svg',
        name: 'Gatsby'
    }, {
        image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png',
        name: 'Vue'
    }, {
        image: '../assets/icons/electron.png',
        name: 'Electron'
    }, {
        image: '../assets/icons/threejs-logo.svg',
        name: 'Three JS'
    }, {
        image: '../assets/icons/typescript-logo.svg',
        name: 'Typescript'
    },
]

const BE: Props[] = [
    {
        image: '../assets/icons/node-logo.svg',
        name: 'Node JS'
    }, {
        image: '../assets/icons/mongo-logo.svg',
        name: 'MongoDB'
    }, {
        image: '../assets/icons/graphql-logo.svg',
        name: 'GraphQL'
    }, {
        image: '../assets/icons/docker-logo.svg',
        name: 'Docker'
    }, {
        image: '../assets/icons/kubernetes-logo.svg',
        name: 'Kubernetes'
    }, {
        image: '../assets/icons/circleci-logo.png',
        name: 'Circle CI'
    }
]

const Crypto: Props[] = [
    {
        image: 'https://avatars.githubusercontent.com/u/6250754',
        name: 'Solidity'
    }, {
        image: '../assets/icons/binance-logo.svg',
        name: 'Binance'
    }, {
        image: '../assets/icons/uniswap-logo.svg',
        name: 'Uniswap'
    }, {
        image: '../assets/icons/cardano-logo.svg',
        name: 'Cardano'
    }, {
        image: '../assets/icons/chainlink-logo.svg',
        name: 'Chainlink'
    }, {
        image: '../assets/icons/polkadot-logo.svg',
        name: 'Polkadot'
    }
]


const Tools = () => {
    return (
        <section className='bg center'>
            <SectionTitle title={'Tech'} subtitle={'I can figure out pretty much anything, but these are what I\'m the most confident with.'} />
            <div className="three-item-grid">
                <div className="tools pentagon">{FE.map((tool, index) => <Tool image={tool.image} name={tool.name} key={index} />)}</div>
                <div className="tools pentagon">{BE.map((tool, index) => <Tool image={tool.image} name={tool.name} key={index} />)}</div>
                <div className="tools pentagon">{Crypto.map((tool, index) => <Tool image={tool.image} name={tool.name} key={index} />)}</div>
            </div>

        </section>
    )
}

export default Tools