module.exports = {
  title: '百家辩',
  tagline: '辩则明，不辩则昏',
  url: 'https://baijia.link',
  baseUrl: '/',
  favicon: 'img/logo.jpg',
  organizationName: 'crazydan-studio',
  projectName: 'baijia.link',
  themeConfig: {
    navbar: {
      title: '百家辩',
      logo: {
        alt: '百家辩',
        src: 'img/logo.jpg',
      },
      items: [
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://crazydan.org/">crazydan.org</a>.<br>Built with <a href="https://v2.docusaurus.io/">Docusaurus 2</a>.`,
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
