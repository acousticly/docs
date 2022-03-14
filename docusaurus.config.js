const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Acoustic',
  tagline: 'Acoustic is the fastest, most feature rich bot ever.',
  url: 'https://docs.acoustic.to',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/meta.webp',
  organizationName: 'Acoustic',
  projectName: 'docs',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/acousticly/docs/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          path: 'docs',
          editUrl: 'https://github.com/acousticly/docs/edit/master/docs/',
          routeBasePath: '/',
          include: ['**/**/*.mdx'],
          sidebarPath: 'sidebars.js',
          docLayoutComponent: '@theme/DocPage',
          docItemComponent: '@theme/DocItem',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          blogTitle: "Acoustic's Blog",
          blogDescription: 'The ramblings of the Developers @ Acoustic',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Acoustic`,
          },
          showReadingTime: true,
          editUrl: 'https://github.com/acousticly/docs/',
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.6,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
      },
    ],
    require.resolve('docusaurus-lunr-search'),
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Docs',
        logo: {
          alt: 'acoustic-logo',
          src: 'img/meta.webp',
        },
        items: [{to: 'blog', label: 'Blog', position: 'left'}],
      },
      footer: {
        style: 'light',
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
                to: 'https://acoustic.to/twitter',
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
                label: 'Status',
                to: 'https://status.acoustic.to',
              },
              {
                label: 'Privacy Policy',
                to: 'https://acoustic.to/privacy',
              },
              {
                label: 'Terms Of Service',
                to: 'https://acoustic.to/terms',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Acoustic`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
      },
    }),
};

module.exports = config;
