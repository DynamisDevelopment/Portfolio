import React from 'react'
import './Tools.sass'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import Tool from '../../components/Tool/Tool'

export interface Props {
  image: string
  name: string
}

const FE: Props[] = [
  {
    image: '../assets/icons/react-logo.svg',
    name: 'React',
  },
  {
    image: '../assets/icons/gatsby-logo.svg',
    name: 'Gatsby',
  },
  {
    image: '../assets/icons/vue-logo.svg',
    name: 'Vue',
  },
  {
    image: '../assets/icons/electron.png',
    name: 'Electron',
  },
  {
    image: '../assets/icons/threejs-logo.svg',
    name: 'Three JS',
  },
  {
    image: '../assets/icons/typescript-logo.svg',
    name: 'Typescript',
  },
]

const BE: Props[] = [
  {
    image: '../assets/icons/node-logo.svg',
    name: 'Node JS',
  },
  {
    image: '../assets/icons/mongo-logo.svg',
    name: 'MongoDB',
  },
  {
    image: '../assets/icons/graphql-logo.svg',
    name: 'GraphQL',
  },
  {
    image: '../assets/icons/postgres-logo.svg',
    name: 'Postgres',
  },
  {
    image: '../assets/icons/kubernetes-logo.svg',
    name: 'Kubernetes',
  },
  {
    image: '../assets/icons/circleci-logo.png',
    name: 'Circle CI',
  },
]

const Crypto: Props[] = [
  {
    image: '../assets/icons/solidity-logo.svg',
    name: 'Solidity',
  },
  {
    image: '../assets/icons/binance-logo.svg',
    name: 'Binance',
  },
  {
    image: '../assets/icons/uniswap-logo.svg',
    name: 'Uniswap',
  },
  {
    image: '../assets/icons/moralis-logo.svg',
    name: 'Moralis',
  },
  {
    image: '../assets/icons/chainlink-logo.svg',
    name: 'Chainlink',
  },
  {
    image: '../assets/icons/polygon-logo.svg',
    name: 'Polygon',
  },
]

const Tools = () => {
  return (
    <section className="bg center">
      <SectionTitle
        title={'Tech'}
        subtitle={
          "I can figure out pretty much anything, but these are what I'm the most confident with."
        }
      />
      <div className="three-item-grid">
        <div className="tools pentagon">
          {FE.map((tool, index) => (
            <Tool image={tool.image} name={tool.name} key={index} />
          ))}
        </div>
        <div className="tools pentagon">
          {BE.map((tool, index) => (
            <Tool image={tool.image} name={tool.name} key={index} />
          ))}
        </div>
        <div className="tools pentagon">
          {Crypto.map((tool, index) => (
            <Tool image={tool.image} name={tool.name} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tools
