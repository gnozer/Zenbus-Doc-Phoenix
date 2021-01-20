module.exports = {
  title: 'Zenbus Doc',
  description: 'Documentation en ligne de Zenbus',
  locales: {
    '/': {
      lang: 'fr-FR',
      title: 'Zenbus Doc',
      description: 'Documentation en ligne de Zenbus',
    },
    '/en/': {
      lang: 'en-EN',
      title: 'Zenbus Doc',
      description: 'Zenbus online documentation',
    },
  },
  plugins: {
    '@vuepress/plugin-medium-zoom': {
           selector: 'img.zoomable'
       },
    },
  themeConfig: {
	 logo: '/logo_doc_notitle.png',
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'Français',
        selectText: 'Langues',
        sidebar: {
//          '/ZenbusCollect/ZenbusBox/': [
//            {
//              title: 'ZenbusCollect:ZenbusBox',
//              collapsable: false,
//              children: ['recommandations', 'installation'],
//            },
//          ],
//          '/ZenbusCollect/ZenbusDriver/': [
//            {
//              title: 'ZenbusCollect:ZenbusDriver',
//              collapsable: false,
//              children: ['recommandations', 'installation', 'configuration', 'auto', 'manuel', 'avance-retard', 'comptage'],
//            },
//          ],
//          '/ZenbusCollect/ZenbusConnect/': [
//            {
//              title: 'ZenbusCollect:ZenbusConnect',
//              collapsable: false,
//              children: ['recommandations', 'installation', 'configuration', 'auto', 'manuel', 'avance-retard', 'comptage'],
//            },
//          ],
			 '/ZenbusCollect/': [
				  './',
				  {
					  title: 'Zenbus Driver',
					  collapsable: true,
					  children: ['./ZenbusDriver/', './ZenbusDriver/recommandations', './ZenbusDriver/installation', './ZenbusDriver/configuration', './ZenbusDriver/auto', './ZenbusDriver/manuel', './ZenbusDriver/avance-retard', './ZenbusDriver/comptage'],
				  },
				  {
					  title: 'Zenbus Box',
					  collapsable: true,
					  children: ['./ZenbusBox/', './ZenbusBox/recommandations', './ZenbusBox/installation'],
				  },
				  {
					  title: 'Zenbus Connect',
					  collapsable: true,
					  children: ['./ZenbusConnect/', './ZenbusConnect/ubi-transport', './ZenbusConnect/lumiplan', './ZenbusConnect/ventrata'],
				  },
			 ],
          '/ZenbusLive/': [
            {
              title: 'Zenbus Voyageurs',
              collapsable: true,
              children: ['./Voyageurs/', './Voyageurs/application', './Voyageurs/web-iframe', './Voyageurs/biv'],
            },
            {
              title: 'Zenbus Operations',
              collapsable: true,
              children: ['./Operations/', './Operations/supervision', './Operations/fleet-manager', './Operations/driver-assistance'],
            },
          ],
          '/ZenbusAnalytics/': [
            {
              title: 'ZenbusAnalytics',
              collapsable: false,
              children: ['food', 'hobbies'],
            },
          ],
          '/ZenbusAPI/': [
            {
              title: 'ZenbusAPI',
              collapsable: false,
              children: ['open-static', 'open-dyn', 'tiers'],
            },
          ],
          '/': [''], // fallback
        },
        nav: [
          {text: '', link: '/'}, 
          {
				 text: 'ZenbusCollect', 
				 ariaLabel: 'Menu ZenbusCollect',
				 items: [
					 {text: "ZenbusDriver", link: '/ZenbusCollect/ZenbusDriver/'},
					 {text: "ZenbusBox", link: '/ZenbusCollect/ZenbusBox/'},
					 {text: "ZenbusConnect", link: '/ZenbusCollect/ZenbusConnect/'}
				 ]
			 },
          {
				 text: 'ZenbusLive', 
				 ariaLabel: 'Menu ZenbusLive',
				 items: [
					 {text: "Voyageurs", link: '/ZenbusLive/Voyageurs/'},
					 {text: "Opérations", link: '/ZenbusLive/Operations/'}
				 ]
			 },
          {
				 text: 'ZenbusAnalytics', 
				 ariaLabel: 'Menu ZenbusAnalytics',
				 items: [
					 {text: "Voyageurs", link: '/ZenbusAnalytics/Voyageurs/'},
					 {text: "Opérations", link: '/ZenbusAnalytics/Operations/'}
				 ]
			 },
          {text: 'ZenbusAPI', link: '/ZenbusAPI/'},
          {text: 'Zenbus.fr', link: 'https://zenbus.fr'},
        ],
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        sidebar: {
          '/en/ZenbusCollect/': [
            {
              title: 'ZenbusCollect',
              collapsable: false,
              children: ['food', 'hobbies'],
            },
          ],
          '/en/ZenbusLive/': [
            {
              title: 'ZenbusLive',
              collapsable: false,
              children: ['food', 'hobbies'],
            },
          ],
          '/en/ZenbusAnalytics/': [
            {
              title: 'ZenbusAnalytics',
              collapsable: false,
              children: ['food', 'hobbies'],
            },
          ],
          '/en/ZenbusAPI/': [
            {
              title: 'ZenbusAPI',
              collapsable: false,
              children: ['food', 'hobbies'],
            },
          ],
          '/': [''], // fallback
        },
        nav: [
          {text: 'ZenbusCollect', link: '/en/ZenbusCollect/'},
          {text: 'ZenbusLive', link: '/en/ZenbusLive/'},
          {text: 'ZenbusAnalytics', link: '/en/ZenbusAnalytics/'},
          {text: 'ZenbusAPI', link: '/en/ZenbusAPI/'},
          {text: 'Zenbus.fr', link: 'https://zenbus.fr'},
        ],
      },
    },
  },
};
