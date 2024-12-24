
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/PorteFolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/PorteFolio"
  },
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/PorteFolio/about"
  },
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/PorteFolio/skills"
  },
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/PorteFolio/experience"
  },
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/PorteFolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/PorteFolio/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/C:/Program Files/Git/PorteFolio",
    "route": "/C:/Program Files/Git/PorteFolio/**"
  }
],
  assets: {
    'index.csr.html': {size: 14431, hash: 'd387cbf144d3e8789714091c338a282e25e5d56f25aee2da98df9199c57c1de3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8005, hash: '432fb18ac753bb4c0e2c2527d677eabf6d3f0d2f0172ce0b1791def4bd6228cf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 25360, hash: '7bc94f2a368406b825576966e89b3016d51d8605641d3640711e560c082b14d3', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 25360, hash: '7bc94f2a368406b825576966e89b3016d51d8605641d3640711e560c082b14d3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 25360, hash: '7bc94f2a368406b825576966e89b3016d51d8605641d3640711e560c082b14d3', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 25360, hash: '7bc94f2a368406b825576966e89b3016d51d8605641d3640711e560c082b14d3', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 25360, hash: '7bc94f2a368406b825576966e89b3016d51d8605641d3640711e560c082b14d3', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 25360, hash: '7bc94f2a368406b825576966e89b3016d51d8605641d3640711e560c082b14d3', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
