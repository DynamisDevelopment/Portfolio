import React, { useState } from 'react'

export interface Props {
  image: string
  name: string
  desc: string
  link?: string
  git?: string
  designBy?: string
  tech: string[]
  complete: boolean
  id: number
}

const createLink = (name, link?) =>
  `<a href="https://gig.kover.ai/${
    link ? link : name.toLowerCase()
  }" target="_${name}" class="grid-links-link">${name.replace('_', ' ')}</a>`

export const frontend: Props[] = [
  {
    image: '../assets/projects/fury.jpg',
    name: 'Fury Vs Wilder III NFT Ticketing',
    desc: 'An EthereumMax exclusive NFT ticketing system for the fight Between Tyson Fury and Deontay Wilder. Anyone holding more than 1 Billion EMAX can sign up through Metamask, Coinbase, or Wallet Connect to get exclusive access.',
    link: 'https://events.ethereummax.org/',
    tech: ['Next JS', 'Chakra UI', 'TailwindCSS', 'Web3'],
    complete: true,
    id: 5,
  },
  {
    image: '../assets/projects/kover.jpg',
    name: 'Kover AI',
    desc: `I worked as the lead frontend dev at kover for over a year, creating all the pages, dashboards, and a few side projects for them and their partners.`,
    link: 'https://vibrant-bose-db8524.netlify.app/',
    tech: ['React', 'Chakra UI', 'Sass'],
    complete: true,
    id: 1,
  },
  {
    image: '../assets/projects/memoir.jpg',
    name: 'Memoir',
    desc: "A full-stack social application where families can ask the're grandparents questions and talk about their video responses.",
    link: 'https://memoir-dev.onrender.com/',
    tech: ['BlitzJS', 'NextJS', 'Prisma', 'PostgreSQL', 'AWS S3'],
    complete: true,
    id: 2,
  },
  {
    image: '../assets/projects/mintdrop.jpg',
    name: 'Mintdrop',
    desc: "A publishing platform for creators to mint NFT's and host airdrops for their supporters.",
    tech: ['Solidity', 'Polygon', 'The Graph', 'Node', 'MongoDB'],
    complete: true,
    id: 3,
  },

  {
    image: '../assets/projects/bauwerk.jpg',
    name: 'Bauwerk',
    desc: 'A statically generated Blog and portfolio site for a German architectural and interior design company.',
    link: 'https://bauwerk.netlify.com/',
    git: 'https://github.com/DynamisDevelopment/Bauwerk',
    designBy: 'itimasthemes',
    tech: ['React', 'Gatsby', 'Contentful'],
    complete: true,
    id: 4,
  },
  {
    image: '../assets/projects/dropInBlog.png',
    name: 'DropInBlog Gatsby Starter and Source Plugin',
    desc: 'A remarkably clean a easy to use starter harnessing the power of the DropInBlog CMS. The custom source plugin give the user a cleaner method to utilize their data than the standard REST API would have allowed.',
    link: 'https://dropinblog-gatsby-starter.netlify.com/',
    git: 'https://github.com/DropInBlog/gatsby-starter-dropinblog',
    designBy: 'Myself',
    tech: ['React', 'Gatsby', 'DropInBlog', 'Chakra Ui'],
    complete: true,
    id: 5,
  },
]

export const defi: Props[] = [
  {
    image: '../assets/projects/marketplace.jpg',
    name: 'EMAX NFT Marketplace',
    desc: 'A full-stack, multi-blockchain Opensea competitor based on the EMAX token ecosystem.',
    link: 'https://www.nftmax.io/',
    tech: ['Solidity', 'NextJS', 'The Graph', 'Node', 'MongoDB'],
    complete: true,
    id: 1,
  },

  {
    image: '../assets/projects/axos.jpg',
    name: 'EMAX NFT Marketplace',
    desc: 'Blog and portfolio site for a German architectural and interior design company.',
    // link: 'https://bauwerk.netlify.com/',
    tech: ['Solidity', 'Polygon', 'The Graph', 'Node', 'MongoDB'],
    complete: false,
    id: 3,
  },
  // {
  //   image: '../assets/projects/dao.jpg',
  //   name: 'EMAX DAO',
  //   desc: 'Blog and portfolio site for a German architectural and interior design company.',
  //   // link: 'https://bauwerk.netlify.com/',
  //   tech: ['React', 'Tailwind CSS', 'Solidity', 'The Graph'],
  //   complete: false,
  //   id: 2,
  // },
]
