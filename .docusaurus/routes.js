import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/resolv-doc/__docusaurus/debug',
    component: ComponentCreator('/resolv-doc/__docusaurus/debug', 'fe0'),
    exact: true
  },
  {
    path: '/resolv-doc/__docusaurus/debug/config',
    component: ComponentCreator('/resolv-doc/__docusaurus/debug/config', '0b1'),
    exact: true
  },
  {
    path: '/resolv-doc/__docusaurus/debug/content',
    component: ComponentCreator('/resolv-doc/__docusaurus/debug/content', '1ab'),
    exact: true
  },
  {
    path: '/resolv-doc/__docusaurus/debug/globalData',
    component: ComponentCreator('/resolv-doc/__docusaurus/debug/globalData', '94f'),
    exact: true
  },
  {
    path: '/resolv-doc/__docusaurus/debug/metadata',
    component: ComponentCreator('/resolv-doc/__docusaurus/debug/metadata', '380'),
    exact: true
  },
  {
    path: '/resolv-doc/__docusaurus/debug/registry',
    component: ComponentCreator('/resolv-doc/__docusaurus/debug/registry', 'c1b'),
    exact: true
  },
  {
    path: '/resolv-doc/__docusaurus/debug/routes',
    component: ComponentCreator('/resolv-doc/__docusaurus/debug/routes', '032'),
    exact: true
  },
  {
    path: '/resolv-doc/blog',
    component: ComponentCreator('/resolv-doc/blog', '5ee'),
    exact: true
  },
  {
    path: '/resolv-doc/blog/archive',
    component: ComponentCreator('/resolv-doc/blog/archive', '77f'),
    exact: true
  },
  {
    path: '/resolv-doc/blog/first-blog-post',
    component: ComponentCreator('/resolv-doc/blog/first-blog-post', '79f'),
    exact: true
  },
  {
    path: '/resolv-doc/blog/long-blog-post',
    component: ComponentCreator('/resolv-doc/blog/long-blog-post', '42e'),
    exact: true
  },
  {
    path: '/resolv-doc/blog/mdx-blog-post',
    component: ComponentCreator('/resolv-doc/blog/mdx-blog-post', '691'),
    exact: true
  },
  {
    path: '/resolv-doc/blog/tags',
    component: ComponentCreator('/resolv-doc/blog/tags', '6e9'),
    exact: true
  },
  {
    path: '/resolv-doc/blog/tags/docusaurus',
    component: ComponentCreator('/resolv-doc/blog/tags/docusaurus', '588'),
    exact: true
  },
  {
    path: '/resolv-doc/blog/tags/facebook',
    component: ComponentCreator('/resolv-doc/blog/tags/facebook', 'c2f'),
    exact: true
  },
  {
    path: '/resolv-doc/blog/tags/hello',
    component: ComponentCreator('/resolv-doc/blog/tags/hello', '60d'),
    exact: true
  },
  {
    path: '/resolv-doc/blog/tags/hola',
    component: ComponentCreator('/resolv-doc/blog/tags/hola', '185'),
    exact: true
  },
  {
    path: '/resolv-doc/blog/welcome',
    component: ComponentCreator('/resolv-doc/blog/welcome', '96e'),
    exact: true
  },
  {
    path: '/resolv-doc/markdown-page',
    component: ComponentCreator('/resolv-doc/markdown-page', '1e1'),
    exact: true
  },
  {
    path: '/resolv-doc/docs',
    component: ComponentCreator('/resolv-doc/docs', '2e9'),
    routes: [
      {
        path: '/resolv-doc/docs',
        component: ComponentCreator('/resolv-doc/docs', '934'),
        routes: [
          {
            path: '/resolv-doc/docs',
            component: ComponentCreator('/resolv-doc/docs', '458'),
            routes: [
              {
                path: '/resolv-doc/docs/Blockchain-Component/Deployment',
                component: ComponentCreator('/resolv-doc/docs/Blockchain-Component/Deployment', 'fdf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/resolv-doc/docs/Blockchain-Component/Test Files',
                component: ComponentCreator('/resolv-doc/docs/Blockchain-Component/Test Files', '75c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/resolv-doc/docs/Blockchain-Component/WrappedERC20',
                component: ComponentCreator('/resolv-doc/docs/Blockchain-Component/WrappedERC20', 'ac3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/resolv-doc/docs/Changelog and updates',
                component: ComponentCreator('/resolv-doc/docs/Changelog and updates', '953'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/resolv-doc/docs/FAQs',
                component: ComponentCreator('/resolv-doc/docs/FAQs', 'f69'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/resolv-doc/docs/Getting Started',
                component: ComponentCreator('/resolv-doc/docs/Getting Started', '4d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/resolv-doc/docs/Project Overview',
                component: ComponentCreator('/resolv-doc/docs/Project Overview', 'c2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/resolv-doc/docs/Single-page',
                component: ComponentCreator('/resolv-doc/docs/Single-page', '690'),
                exact: true
              },
              {
                path: '/resolv-doc/docs/Technical Architecture',
                component: ComponentCreator('/resolv-doc/docs/Technical Architecture', 'e1e'),
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
    path: '/resolv-doc/',
    component: ComponentCreator('/resolv-doc/', 'dbe'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
