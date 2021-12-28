import { SiteConfig } from './types'

const config: SiteConfig = {
  // Website configuration
  website: {
    title: "Harold Hill: A Peoples' History", // Homepage title
    titleShort: 'Advanced Blog', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation
    name: "Harold Hill: A Peoples' History", // Website name used for homescreen (PWA) and SEO
    description: 'Something here', // Website description used for RSS feeds/meta description tag
    language: 'en-gb', // Sets the global HTML lang attribute
    logoUrl: '/logos/logo-1024.png', // Logo used for SEO
    url: 'https://haroldhill.org', // Domain of your website without the pathPrefix
    rss: '/rss.xml', // Path to the RSS file
    rssTitle: "Harold Hill: A Peoples' History RSS Feed", // Title of the RSS feed
    copyright: '©Copyright 2022', // Copyright string for the footer of the website and RSS feed.
    themeColor: '#D83850', // Used for setting manifest and progress theme colors.
    backgroundColor: '#F7F7F7' // Used for setting manifest background color.
  },

  // User configuration
  user: undefined,

  // Organization information used for SEO
  organization: undefined,

  // Gatsby Configuration
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.

  contentDir: undefined, // Directory for MDX posts
  assetDir: undefined, // Asset directory

  embeddedImageWidth: 768, // MDX embedded image width. Used by gatsby-plugin-image for optimization
  embeddedVideoWidth: 920, // MDX embedded video width in pixels

  iconPath: undefined, // Icon used for manifest icon creation.
  iconList: [], // Icons used for the web manifest. Can be used to override iconPath for a more pixel perfect control.
  iconCachePaths: undefined, // Glob pattern path for the icons to be cached by the gatsby-plugin-offline

  basePath: undefined // Base path for mounting pages. Allows for multiple themes to be used in a single website.
}

export default config
