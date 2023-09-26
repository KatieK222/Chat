export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: './dist'
        },
        notify: false,
        port: 4000,
        open: true,
        directory: true,
        tunnel: true,
})
}