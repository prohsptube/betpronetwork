import { defineType, defineField } from 'sanity'

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Cricket', value: 'cricket' },
          { title: 'Football', value: 'football' },
          { title: 'Casino', value: 'casino' },
          { title: 'Betting Tips', value: 'betting-tips' },
          { title: 'News', value: 'news' },
          { title: 'Guide', value: 'guide' },
        ],
      },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'BetPro Team',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings (Pakistan Optimized)',
      type: 'object',
      description: 'Comprehensive SEO fields for Pakistan market & international reach',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        // Basic SEO
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description: 'SEO title (55-60 characters recommended)',
          validation: (Rule) => Rule.max(60).warning('Keep under 60 characters for best results'),
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          description: 'SEO description (150-160 characters recommended)',
          validation: (Rule) => Rule.max(160).warning('Keep under 160 characters for best results'),
        },
        {
          name: 'focusKeyword',
          title: 'Focus Keyword',
          type: 'string',
          description: 'Primary keyword for this post (e.g., "cricket betting Pakistan")',
        },
        {
          name: 'keywords',
          title: 'Additional Keywords',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Related keywords and phrases',
        },
        {
          name: 'canonicalUrl',
          title: 'Canonical URL',
          type: 'url',
          description: 'Canonical URL (leave empty to use default)',
        },

        // Pakistan-Specific SEO
        {
          name: 'pakistanSeo',
          title: 'Pakistan Market SEO',
          type: 'object',
          description: 'Optimize for Pakistan audience',
          options: {
            collapsible: true,
            collapsed: true,
          },
          fields: [
            {
              name: 'urduTitle',
              title: 'Urdu Title (اردو عنوان)',
              type: 'string',
              description: 'Title in Urdu for better local reach',
            },
            {
              name: 'urduDescription',
              title: 'Urdu Description (اردو تفصیل)',
              type: 'text',
              rows: 2,
              description: 'Description in Urdu',
            },
            {
              name: 'targetRegions',
              title: 'Target Pakistan Regions',
              type: 'array',
              of: [{ type: 'string' }],
              options: {
                list: [
                  { title: 'Karachi', value: 'karachi' },
                  { title: 'Lahore', value: 'lahore' },
                  { title: 'Islamabad', value: 'islamabad' },
                  { title: 'Rawalpindi', value: 'rawalpindi' },
                  { title: 'Faisalabad', value: 'faisalabad' },
                  { title: 'Multan', value: 'multan' },
                  { title: 'Peshawar', value: 'peshawar' },
                  { title: 'Quetta', value: 'quetta' },
                  { title: 'All Pakistan', value: 'all-pakistan' },
                ],
              },
            },
            {
              name: 'pakistanKeywords',
              title: 'Pakistan-Specific Keywords',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'Keywords targeting Pakistani audience (e.g., "PSL betting", "Pakistan cricket")',
            },
          ],
        },

        // Open Graph (Social Media)
        {
          name: 'openGraph',
          title: 'Open Graph (Facebook/WhatsApp)',
          type: 'object',
          description: 'How this appears when shared on Facebook & WhatsApp',
          options: {
            collapsible: true,
            collapsed: true,
          },
          fields: [
            {
              name: 'ogTitle',
              title: 'OG Title',
              type: 'string',
              description: 'Leave empty to use Meta Title',
            },
            {
              name: 'ogDescription',
              title: 'OG Description',
              type: 'text',
              rows: 2,
              description: 'Leave empty to use Meta Description',
            },
            {
              name: 'ogImage',
              title: 'OG Image',
              type: 'image',
              description: 'Image for social sharing (1200x630px recommended)',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'ogType',
              title: 'OG Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Article', value: 'article' },
                  { title: 'Website', value: 'website' },
                ],
              },
              initialValue: 'article',
            },
          ],
        },

        // Twitter Card
        {
          name: 'twitterCard',
          title: 'Twitter Card',
          type: 'object',
          description: 'How this appears on Twitter/X',
          options: {
            collapsible: true,
            collapsed: true,
          },
          fields: [
            {
              name: 'twitterTitle',
              title: 'Twitter Title',
              type: 'string',
              description: 'Leave empty to use Meta Title',
            },
            {
              name: 'twitterDescription',
              title: 'Twitter Description',
              type: 'text',
              rows: 2,
              description: 'Leave empty to use Meta Description',
            },
            {
              name: 'twitterImage',
              title: 'Twitter Image',
              type: 'image',
              description: 'Image for Twitter (1200x600px recommended)',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'twitterCardType',
              title: 'Card Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Summary Card', value: 'summary' },
                  { title: 'Summary with Large Image', value: 'summary_large_image' },
                ],
              },
              initialValue: 'summary_large_image',
            },
          ],
        },

        // Structured Data
        {
          name: 'structuredData',
          title: 'Structured Data (Schema.org)',
          type: 'object',
          description: 'Help search engines understand your content',
          options: {
            collapsible: true,
            collapsed: true,
          },
          fields: [
            {
              name: 'articleType',
              title: 'Article Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Article', value: 'Article' },
                  { title: 'News Article', value: 'NewsArticle' },
                  { title: 'Blog Posting', value: 'BlogPosting' },
                ],
              },
              initialValue: 'Article',
            },
            {
              name: 'enableFAQ',
              title: 'Enable FAQ Schema',
              type: 'boolean',
              description: 'Add FAQ rich snippets for Google',
              initialValue: false,
            },
            {
              name: 'faqItems',
              title: 'FAQ Items',
              type: 'array',
              hidden: ({ parent }) => !parent?.enableFAQ,
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'question',
                      title: 'Question',
                      type: 'string',
                    },
                    {
                      name: 'answer',
                      title: 'Answer',
                      type: 'text',
                      rows: 3,
                    },
                  ],
                  preview: {
                    select: {
                      title: 'question',
                      subtitle: 'answer',
                    },
                  },
                },
              ],
            },
          ],
        },

        // Advanced SEO
        {
          name: 'advanced',
          title: 'Advanced SEO',
          type: 'object',
          description: 'Advanced options for expert users',
          options: {
            collapsible: true,
            collapsed: true,
          },
          fields: [
            {
              name: 'noIndex',
              title: 'No Index',
              type: 'boolean',
              description: 'Prevent search engines from indexing this page',
              initialValue: false,
            },
            {
              name: 'noFollow',
              title: 'No Follow',
              type: 'boolean',
              description: 'Tell search engines not to follow links on this page',
              initialValue: false,
            },
            {
              name: 'customMetaTags',
              title: 'Custom Meta Tags',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'name',
                      title: 'Meta Name/Property',
                      type: 'string',
                    },
                    {
                      name: 'content',
                      title: 'Content',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'coverImage',
    },
  },
})

export const schemaTypes = [blogPost]
