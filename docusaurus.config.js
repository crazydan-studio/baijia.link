module.exports = {
  title: '百家',
  tagline: '辩则明，不辩则昏',
  url: 'https://baijia.link',
  baseUrl: '/',
  favicon: 'img/logo.jpg',
  organizationName: 'crazydan-studio',
  projectName: 'baijia.link',
  themeConfig: {
    navbar: {
      title: '百家',
      logo: {
        alt: '百家',
        src: 'img/logo.jpg',
      },
      items: [
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://crazydan.org/" target="_blank">Crazydan Studio</a>.`,
    },
  },
  plugins: [
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
