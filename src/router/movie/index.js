export default {
    path: '/movie',
    component: () =>
        import ('@/views/Movie'),
    children: [{
            path: 'newplaying',
            component: () =>
                import ('@/components/NewPlaying')
        },
        {
            path: 'search',
            component: () =>
                import ('@/components/Search')
        },
        {
            path: 'comingsoon',
            component: () =>
                import ('@/components/Comingsoon')
        },
        {
            path: 'city',
            component: () =>
                import ('@/components/City')
        },
        {
            path: 'detail/1/:movieId',
            components: {
                default: () =>
                    import ('@/components/NewPlaying'),
                detail: () =>
                    import ('@/views/Movie/detail')
            },
            props: {
                detail: true
            }
        },
        {
            path: 'detail/2/:movieId',
            components: {
                default: () =>
                    import ('@/components/Comingsoon'),
                detail: () =>
                    import ('@/views/Movie/detail')
            },
            props: {
                detail: true
            }
        },
        {
            path: '/movie',
            redirect: '/movie/newplaying'
        }
    ]
}