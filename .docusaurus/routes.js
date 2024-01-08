import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '83e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '8b0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '06e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '28c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'ef7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '0fc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'eb1'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '2b3'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'd11'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'da4'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '37b'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '8d9'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '543'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '2d4'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '14a'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '5c3'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'b1a'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'df7'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '9e7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '40d'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'fc9'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '145'),
            routes: [
              {
                path: '/docs/Blockchain-Component/Deployment',
                component: ComponentCreator('/docs/Blockchain-Component/Deployment', '529'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Blockchain-Component/Test Files',
                component: ComponentCreator('/docs/Blockchain-Component/Test Files', '655'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Blockchain-Component/WrappedERC20',
                component: ComponentCreator('/docs/Blockchain-Component/WrappedERC20', '4ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Changelog and updates',
                component: ComponentCreator('/docs/Changelog and updates', '296'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FAQs',
                component: ComponentCreator('/docs/FAQs', '580'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Getting Started',
                component: ComponentCreator('/docs/Getting Started', '116'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Project Overview',
                component: ComponentCreator('/docs/Project Overview', 'aea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Single-page',
                component: ComponentCreator('/docs/Single-page', 'e55'),
                exact: true
              },
              {
                path: '/docs/Technical Architecture',
                component: ComponentCreator('/docs/Technical Architecture', 'c1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '349'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
