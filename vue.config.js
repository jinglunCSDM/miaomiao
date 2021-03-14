module.exports = {
    devServer: {
        proxy: {
            '/ajax': {
                target: 'https://m.maoyan.com',
                ws: true,
                changeOrigin: true
            },
            '/dianying': {
                target: 'https://m.maoyan.com',
                ws: true,
                changeOrigin: true
            }
        }
    }
}