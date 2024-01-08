/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'Project Overview', // single document
    'Technical Architecture', // single document
    {
      type: 'category',
      label: 'Blockchain-Component',
      items: [
        'Blockchain-Component/WrappedERC20', // assuming the path is like this
        'Blockchain-Component/Deployment',
        'Blockchain-Component/Test Files'
      ],
    },
    'Getting Started', // single document
    'FAQs', // single document
    'Changelog and updates', // single document
  ],
};

export default sidebars;
