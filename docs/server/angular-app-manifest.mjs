
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/PortfolioMohammed',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/PortfolioMohammed"
  },
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/PortfolioMohammed/about"
  },
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/PortfolioMohammed/skills"
  },
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/PortfolioMohammed/experience"
  },
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/PortfolioMohammed/projects"
  },
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/PortfolioMohammed/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/C:/Program Files/Git/PortfolioMohammed",
    "route": "/C:/Program Files/Git/PortfolioMohammed/**"
  }
],
  assets: {
    'index.csr.html': {size: 14440, hash: 'f8ef0a58c9d602ebc260c4ef8d8bbf0c4441b04ecf0e5ff669423d08b6a0bcc8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8014, hash: '92e230fdd1640f567c4c06b8a24218e0836a439cb54b380e096c9841c61409f7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 24132, hash: '357c0403207de8722ab582eddd513fa1009fa86407bcd2b4f060a21a33168793', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 24132, hash: '357c0403207de8722ab582eddd513fa1009fa86407bcd2b4f060a21a33168793', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 24132, hash: '357c0403207de8722ab582eddd513fa1009fa86407bcd2b4f060a21a33168793', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 24132, hash: '357c0403207de8722ab582eddd513fa1009fa86407bcd2b4f060a21a33168793', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 24132, hash: '357c0403207de8722ab582eddd513fa1009fa86407bcd2b4f060a21a33168793', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 24132, hash: '357c0403207de8722ab582eddd513fa1009fa86407bcd2b4f060a21a33168793', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
