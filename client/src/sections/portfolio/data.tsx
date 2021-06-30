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

const createLink = (name, link?) => `<a href="https://gig.kover.ai/${link ? link : name.toLowerCase()}" target="_${name}" class="grid-links-link">${name.replace("_", " ")}</a>`

export const frontend: Props[] = [
  {
    image: "../assets/projects/kover.jpg",
    name: "Kover AI",
    desc:
      `I worked as the lead frontend dev at kover for over a year, creating all the pages, dashboards, and a few side projects. 
      <div class="grid-links">
        ${createLink("Wonolo")}
        ${createLink("Driver")}
        ${createLink("Jobble")}
        ${createLink("Affiliate")}
        ${createLink("Survey", "wonolo_survey")}
        ${createLink("Hyrecar")}
        ${createLink("DoordashDiaries")}
        ${createLink("SaferideAmerica")}
        ${createLink("CitizenShipper")}
      </div>`,
    link: "https://gig.kover.ai/",
    tech: ["React", "Chakra UI", "Sass"],
    complete: true,
    id: 1
   
  },
  {
    image: "../assets/projects/gridwise.jpg",
    name: "Gridwise Plugin",
    desc:
      "With Kovers' partnership with Gridwise I created the popup plugin module that helps integrate users between their services.",
    link: "https://gridwise.io/protection",
    tech: ["VanillaJS", "Tailwind CSS"],
    complete: true,
    id: 2
  },
  // {
  //   image: "../assets/projects/kover-v4.jpg",
  //   name: "Kover AI V4",
  //   desc:
  //     "Before changing directions to a B2B2C structure I built a full redesign of the sight, which was sadly never implemented 🤷‍♂. Nevertheless, I'm proud of it.",
  //   link: "https://bauwerk.netlify.com/",
  //   tech: ["React", "Chakra UI", "Sass"],
  //   complete: true,
  //   id: 3
  // },
  {
    image: "../assets/projects/bauwerk.jpg",
    name: "Bauwerk",
    desc:
      "A statically generated Blog and portfolio site for a German architectural and interior design company.",
    link: "https://bauwerk.netlify.com/",
    git: "https://github.com/DynamisDevelopment/Bauwerk",
    designBy: "itimasthemes",
    tech: ["React", "Gatsby", "Contentful"],
    complete: true,
    id: 4
  }, {
    image: "../assets/projects/dropInBlog.png",
    name: "DropInBlog Gatsby Starter and Source Plugin",
    desc:
      "A remarkably clean a easy to use starter harnessing the power of the DropInBlog CMS. The custom source plugin give the user a cleaner method to utilize their data than the standard REST API would have allowed.",
    link: "https://dropinblog-gatsby-starter.netlify.com/",
    git: "https://github.com/DropInBlog/gatsby-starter-dropinblog",
    designBy: "Myself",
    tech: ["React", "Gatsby", "DropInBlog", "Chakra Ui"],
    complete: true,
    id: 5
  },
]


export const backend: Props[] = [
  {
    image: "../assets/projects/molla.jpg",
    name: "Molla",
    desc:
      "Blog and portfolio site for a German architectural and interior design company.",
    link: "https://bauwerk.netlify.com/",
    git: "https://github.com/DynamisDevelopment/Bauwerk",
    designBy: "itimasthemes",
    tech: ["React", "Gatsby", "Contentful"],
    complete: true,
    id: 1
  },
  {
    image: "../assets/projects/tinker.jpg",
    name: "Tinker",
    desc:
      "A remarkably clean a easy to use starter harnessing the power of the DropInBlog CMS. The custom source plugin give the user a cleaner method to utilize their data than the standard REST API would have allowed.",
    link: "https://dropinblog-gatsby-starter.netlify.com/",
    git: "https://github.com/DropInBlog/gatsby-starter-dropinblog",
    designBy: "Myself",
    tech: ["React", "Gatsby", "DropInBlog", "Chakra Ui"],
    complete: true,
    id: 2
  },
]


export const defi: Props[] = [
  {
    image: "../assets/projects/molla.jpg",
    name: "Molla",
    desc:
      "Blog and portfolio site for a German architectural and interior design company.",
    link: "https://bauwerk.netlify.com/",
    git: "https://github.com/DynamisDevelopment/Bauwerk",
    designBy: "itimasthemes",
    tech: ["React", "Gatsby", "Contentful"],
    complete: true,
    id: 1
  },
  {
    image: "../assets/projects/tinker.jpg",
    name: "Tinker",
    desc:
      "A remarkably clean a easy to use starter harnessing the power of the DropInBlog CMS. The custom source plugin give the user a cleaner method to utilize their data than the standard REST API would have allowed.",
    link: "https://dropinblog-gatsby-starter.netlify.com/",
    git: "https://github.com/DropInBlog/gatsby-starter-dropinblog",
    designBy: "Myself",
    tech: ["React", "Gatsby", "DropInBlog", "Chakra Ui"],
    complete: true,
    id: 2
  },
  {
    image: "../assets/projects/bauwerk.jpg",
    name: "Bauwerk",
    desc:
      "Blog and portfolio site for a German architectural and interior design company.",
    link: "https://bauwerk.netlify.com/",
    git: "https://github.com/DynamisDevelopment/Bauwerk",
    designBy: "itimasthemes",
    tech: ["React", "Gatsby", "Contentful"],
    complete: true,
    id: 1
  },
  {
    image: "../assets/projects/dropInBlog.png",
    name: "DropInBlog Gatsby Starter and Source Plugin",
    desc:
      "A remarkably clean a easy to use starter harnessing the power of the DropInBlog CMS. The custom source plugin give the user a cleaner method to utilize their data than the standard REST API would have allowed.",
    link: "https://dropinblog-gatsby-starter.netlify.com/",
    git: "https://github.com/DropInBlog/gatsby-starter-dropinblog",
    designBy: "Myself",
    tech: ["React", "Gatsby", "DropInBlog", "Chakra Ui"],
    complete: true,
    id: 2
  },
]
