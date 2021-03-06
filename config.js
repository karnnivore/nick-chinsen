module.exports = {
  pathPrefix: '',
  siteUrl: 'https://nickchinsen.com',
  siteTitle: 'Nick Chinsen',
  siteDescription: 'Life of a software developer',
  author: 'Nick Chinsen',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT,
  pages: {
    home: '/',
    blog: 'blog',
    contact: 'contact',
    resume: 'resume',
    tag: 'tags',
    portfolio: 'portfolio',
  },
  social: {
    github: 'https://github.com/karnnivore',
    facebook: 'https://www.facebook.com/chinsen.nick/',
    instagram: 'https://www.instagram.com/karnnivore/',
    linkedin: 'https://www.linkedin.com/in/nick-chinsen/',
    rss: '/rss.xml',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/d9ae9b91-d0af-4155-988c-a4d1bc6a0945',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || 'UA-175451885-1',
  tags: {
    javascript: {
      name: 'javascript',
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    nodejs: {
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    rxjs: {
      name: 'RxJS',
      description: 'RxJS is a library for reactive programming using Observables, for asynchronous operations.',
      color: '#eb428e',
    },
    typescript: {
      name: 'typescript',
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    reactjs: {
      name: 'reactjs',
      description: 'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    gatsby: {
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    html: {
      name: 'HTML',
      description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    css: {
      name: 'css',
      description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    python: {
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },
    fullstack: {
      name: 'fullstack',
      description: 'Full stack development involves creating both the front and back of an application and integrating them fluidly',
      color: '#dd3431',
    },
    school: {
      name: 'school',
      description: 'School projects that were completed',
      color: '#f9c646'
    },
    capstone: {
      name: 'capstone',
      description: 'Final year capstone project',
      color: '#f9c646'
    },
    work: {
      name: 'work',
      description: 'Work projects that I have completed',
      color: '#dd3431'
    }
  },
};
