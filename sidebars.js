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
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  tutorialSidebar: [
    {
      type: 'doc',
      label: 'Protocol',
      id: 'id-polkadot-protocol',
    },
    {
      type: 'category',
      label: 'Host',
      collapsed: false,
      link: {type:'doc', id:'part-polkadot-host'},
      items: [
        {
          type: 'doc',
          label: '1. Overview',
          id: 'chap-overview',
        },
        {
          type: 'doc',
          label: '2. States and Transitions',
          id: 'chap-state',
        },
        {
          type: 'doc',
          label: '3. Synchronization',
          id: 'chap-sync',
        },
        {
          type: 'doc',
          label: '4. Networking',
          id: 'chap-networking',
        },
        {
          type: 'doc',
          label: '5. Block Production',
          id: 'sect-block-production',
        },
        {
          type: 'doc',
          label: '6. Finality',
          id: 'sect-finality',
        },
        {
          type: 'doc',
          label: '7. Light Clients',
          id: 'sect-lightclient',
        },
        {
          type: 'doc',
          label: '8. Availability & Validity',
          id: 'chapter-anv',
        },
      ]
    },
    {
      type: 'category',
      label: 'Runtime',
      collapsed: false,
      link: {type:'doc', id:'part-polkadot-runtime'},
      items: [
        {
          type: 'doc',
          label: '9. Extrinsics',
          id: 'id-extrinsics',
        },
        {
          type: 'doc',
          label: '10. Weights',
          id: 'id-weights',
        },
        {
          type: 'doc',
          label: '11. Consensus',
          id: 'id-consensus',
        },
        {
          type: 'doc',
          label: '12. Metadata',
          id: 'sect-metadata',
        },
      ]
    },
    {
      type: 'category',
      label: 'Implementation Guide',
      collapsed: false,
      link: {type:'doc', id:'Implementation Guide/index'},
      items: [
        {
          type: 'doc',
          label: 'FAQ',
          id: 'Implementation Guide/faq',
        },
      ],
    },
    {
      type: 'doc',
      label: 'Appendix A: Cryptography & Encoding',
      id: 'id-cryptography-encoding',
    },
    {
      type: 'doc',
      label: 'Appendix B: Host API',
      id: 'chap-host-api',
    },
    {
      type: 'doc',
      label: 'Appendix C: Runtime API',
      id: 'chap-runtime-api',
    },
    {
      type: 'doc',
      label: 'Glossary',
      id: 'id-glossary',
    }
  ],
};

module.exports = sidebars;
