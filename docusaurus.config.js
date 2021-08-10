module.exports = {
  title: 'Acoustic',
  tagline: 'Docs',
  url: 'https://docs.acoustic.to',
  baseUrl: '/',
  favicon: 'img/favicon.webp',
  organizationName: 'Acoustic',
  projectName: 'Acoustic-documentation',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    hideableSidebar: true,
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'acoustic-logo',
        src: 'img/Acousticlight.webp',
      },
      items: [{to: 'blog', label: 'Blog', position: 'left'}],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Stay In The Loop ',
          items: [
            {
              label: 'Discord',
              to: 'https://acoustic.to/support',
            },
            {
              label: 'Twitter',
              to: 'https://twitter.com/acousticlybot',
            },
          ],
        },
        {
          title: 'Find us online',
          items: [
            {
              label: 'Top.gg',
              to: 'https://acoustic.to/vote',
            },
            {
              label: 'YouTube',
              to: 'https://acoustic.to/youtube',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Status 🔴',
              to: 'https://stats.uptimerobot.com/ZXE1WIMp92',
            },
            {
              label: 'Privacy Policy',
              to: '/privacy',
            },
            {
              label: 'Terms Of Service',
              to: '/terms',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Acoustic`,
    },
    gtag: {
      trackingID: 'G-C078WP7TYT',
    },
  },
  plugins: [
    [
      '@docusaurus/preset-classic',
      {
        sidebarCollapsible: true,

        path: 'docs',
        /**
         * Base url to edit your site.
         * Docusaurus will compute the final editUrl with "editUrl + relativeDocPath"
         */
        editUrl: 'https://github.com/acousticly/docs/edit/master/docs/',
        /**
         * For advanced cases, compute the edit url for each Markdown file yourself.
         */
        editUrl: function ({
          locale,
          version,
          versionDocsDirPath,
          docPath,
          permalink,
        }) {
          return `https://github.com/acousticly/docs/edit/master/docs/${docPath}`;
        },
        routeBasePath: 'docs',
        include: ['**/*.md', '**/*.mdx'], // Extensions to include.
        sidebarPath: 'sidebars.js',
        sidebarItemsGenerator: async function ({
          defaultSidebarItemsGenerator, // useful to re-use/enhance default sidebar generation logic from Docusaurus
          numberPrefixParser, // numberPrefixParser configured for this plugin
          item, // the sidebar item with type "autogenerated"
          version, // the current version
          docs, // all the docs of that version (unfiltered)
        }) {
          // Use the provided data to generate a custom sidebar slice
          return [
            {type: 'doc', id: 'landing'},
            {
              type: 'category',
              label: 'Introduction',
              items: [
                {type: 'doc', id: 'landing'},
                {type: 'doc', id: 'features'},
              ],
            },
            {
              type: 'category',
              label: 'Getting Started',
              items: [
                {type: 'doc', id: 'adding_acoustic'},
                {type: 'doc', id: 'play_song'},
              ],
            },
            {
              type: 'category',
              label: 'Basic Stuff',
              items: [
                {type: 'doc', id: 'faq'},
                {type: 'doc', id: 'commands'},
                {type: 'doc', id: 'playlists'},
              ],
            },
            {
              type: 'category',
              label: 'Economy',
              items: [
                {type: 'doc', id: 'starting_economy'},
                {type: 'doc', id: 'getting_money'},
                {type: 'doc', id: 'profile_info'},
                {type: 'doc', id: 'bases'},
              ],
            },
          ];
        },

        numberPrefixParser: function (filename) {
          // Implement your own logic to extract a potential number prefix
          const numberPrefix = findNumberPrefix(filename);
          // Prefix found: return it with the cleaned filename
          if (numberPrefix) {
            return {
              numberPrefix,
              filename: filename.replace(prefix, ''),
            };
          }
          return {numberPrefix: undefined, filename};
        },

        docLayoutComponent: '@theme/DocPage',
        docItemComponent: '@theme/DocItem',

        showLastUpdateAuthor: true,

        showLastUpdateTime: true,
      },
    ],
    require.resolve('docusaurus-lunr-search'),
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          blogTitle: 'Acoustic\'s blog',
          blogDescription: 'The ramblings of the Developers @ Acoustic',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Acoustic, Inc`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          customCss: require.resolve('./src/css/normalize.min.css'),
        },
        sitemap: {
          changefreq: 'monthly',
          priority: 0.6,
        },
      },
    ],
  ],
};
