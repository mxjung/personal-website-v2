import warblerLogo from './images/warbler-logo.png';

const projectData = [
  {
    title: "Microblog",
    description: "A blogging site made with React + Redux",
    frameworks: ["React", "Express", "PostgreSQL"],
    tools: ["Redux"],
    imageUrl: warblerLogo,
    githubLink: 'https://github.com/mxjung/react-redux-microblog',
    websiteLink: ''
  },
  {
    title: "Jobly",
    description: "React frontend Application built on top of Express backend server",
    frameworks: ["React", "Express", "PostgreSQL"],
    tools: ["axios", "JSON Web Token", "Jest"],
    imageUrl: warblerLogo,
    githubLink: 'https://github.com/mxjung/react-jobly',
    websiteLink: ''
  },
  {
    title: "Messagely",
    description: "Using Postgres and Express to build message API",
    frameworks: ["Express", "PostgreSQL"],
    tools: ["JSON Web Token", "Bcrypt"],
    imageUrl: warblerLogo,
    githubLink: 'https://github.com/mxjung/express-messagely',
    websiteLink: ''
  },
  {
    title: "Warbler",
    description: "Twitter emulater using Flask backend, Jinja templates, and bcrypt authentication",
    frameworks: ["Flask", "PostgreSQL"],
    tools: ["Jinja", "Bcrypt", "SQLAlchemy"],
    imageUrl: warblerLogo,
    githubLink: 'https://github.com/mxjung/warbler',
    websiteLink: ''
  }
]

export default projectData;