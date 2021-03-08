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
                  buildHookId: '604613b5707d1cc128a3dbaa',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-fxv2qhh2',
                  apiId: 'f50fffbd-9810-4197-8e46-53025973acab'
                },
                {
                  buildHookId: '604613b56b86ed7dd70bcf03',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-6p61jubc',
                  apiId: 'd47c6bf8-cbd0-4a82-96c5-0f1c14bb00ac'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jakeadamsiii/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-6p61jubc.netlify.app', category: 'apps'}
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
