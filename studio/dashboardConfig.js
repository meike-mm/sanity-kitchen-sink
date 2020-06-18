export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eeb7799fab490b8ea3399dc',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-fai1w4gi',
                  apiId: 'a6b6855f-c30c-4ce0-a2cf-4f69805a9535'
                },
                {
                  buildHookId: '5eeb779aa9c61b0ec9096d81',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-xy7c74xu',
                  apiId: '12fba069-0834-4f0a-b368-5abcbba9c9f5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/meike-mm/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-xy7c74xu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
