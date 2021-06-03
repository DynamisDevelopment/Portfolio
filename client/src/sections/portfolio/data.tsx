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

export const frontend: Props[] = [
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
  {
    image: "../assets/projects/gridwise.jpg",
    name: "Gridwise Plugin",
    desc:
      "Blog and portfolio site for a German architectural and interior design company.",
    link: "https://bauwerk.netlify.com/",
    git: "https://github.com/DynamisDevelopment/Bauwerk",
    tech: ["VanillaJS", "Tailwind CSS"],
    complete: true,
    id: 1
  },

]


export const backend: Props[] = [
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


export const defi: Props[] = [
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
