import warblerLogo from './images/warbler-logo.png';
import microblogLogo from './images/microblog-logo.png';
import joblyLogo from './images/jobly-logo.png';

const projectData = [
  {
    title: "Microblog",
    description: "A minimal blogging site where users can create blog posts, leave comments on posts, and upvote/downvote posts",
    stack: ["PostgreSQL", "Express", "React", "Node.js"],
    tools: ["Redux", "Immer"],
    imageUrl: microblogLogo,
    githubLink: 'https://github.com/mxjung/microblog-frontend',
    websiteLink: 'https://microblog-react.netlify.app/'
  },
  {
    title: "Jobly",
    description: "Site where users can create an account and apply for jobs using a searchbar",
    stack: ["PostgreSQL", "Express", "React", "Node.js"],
    tools: ["axios", "JSON Web Token", "Bcrypt", "Jest"],
    imageUrl: joblyLogo,
    githubLink: 'https://github.com/mxjung/react-jobly',
    websiteLink: 'https://jobly-react.netlify.app/'
  },
  {
    title: "Warbler",
    description: "Twitter emulater using Flask backend, Jinja templates, and bcrypt authentication",
    stack: ["PostgreSQL", "Flask"],
    tools: ["Jinja", "Bcrypt", "SQLAlchemy"],
    imageUrl: warblerLogo,
    githubLink: 'https://github.com/mxjung/warbler',
    websiteLink: 'https://warbler-mg.herokuapp.com/'
  }
]

export default projectData;