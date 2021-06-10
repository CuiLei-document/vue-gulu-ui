module.exports = {
    base:'vue-gulu2-ui',
    title: '咕噜UI',
    description: '一个很好用的UI框架',
    themeConfig: {
        nav: [
            {text: '百度', link: 'https://baidu.com'},
        ],
        sidebar: [
            {
                title: '入门',
                children: ['/install/', '/get-started/',

                ]
            },
            {
                title: '组件',
                children: ['/components/button']
            }
        ]
    }
}