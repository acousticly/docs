// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  sidebars: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        {
          type: 'doc',
          id: 'Introduction/landing',
        },
        {
          type: 'doc',
          id: 'Introduction/features',
        },
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        {
          type: 'doc',
          id: 'Getting Started/adding_acoustic',
        },
        {
          type: 'doc',
          id: 'Getting Started/play_song',
        },
        {
          type: 'doc',
          id: 'Getting Started/commands',
        },
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [
        {
          type: 'doc',
          id: 'Advanced/faq',
        },
        {
          type: 'doc',
          id: 'Advanced/playlists',
        },
        {
          type: 'doc',
          id: 'Advanced/favorites',
        },
      ],
    },
    {
      type: 'category',
      label: 'Economy',
      items: [
        {
          type: 'doc',
          id: 'Economy/starting_economy',
        },
        {
          type: 'doc',
          id: 'Economy/getting_money',
        },
        {
          type: 'doc',
          id: 'Economy/profile_info',
        },
        {
          type: 'doc',
          id: 'Economy/bases',
        },
      ],
    },
  ],
};
