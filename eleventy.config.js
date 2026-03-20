import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

export default function(eleventyConfig) {
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      logotype: {
        text: 'User Centred Design Ai prompts and scripts'
      },
    },
    footer: {
      copyright: {
        text: ' '
      },
      contentLicence: {
        text: ' '
      },
    },
    stylesheets: ['/assets/styles.css']
  })

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    pathPrefix: "/ai-ucd-prompts-and-scripts/",
    dir: {
      // The folder where all your content will live:
      input: 'docs',
    }
  }
};