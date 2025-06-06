module.exports = {
  title: 'My Docusaurus Site',
  tagline: 'A website built with Docusaurus',
  url: 'https://yourusername.github.io', // Your website URL
  baseUrl: '/my-docusaurus-site/', // Base URL for your project
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'yourusername', // Your GitHub org/user name
  projectName: 'my-docusaurus-site', // Your repo name
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/yourusername/my-docusaurus-site/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/yourusername/my-docusaurus-site/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'My Docusaurus Site',
      items: [
        {to: '/docs/intro', label: 'Docs', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/yourusername/my-docusaurus-site',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Intro',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/yourusername/my-docusaurus-site',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Your Name. Built with Docusaurus.`,
    },
  },
};