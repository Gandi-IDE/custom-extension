import banner from 'vite-plugin-banner'

export default {
    build: {
        lib: {
            entry: 'src/main.js',
            name: 'stats',
            fileName: format => `stats.js`,
            formats: ['esm'],
        },
        minify: false,
    },
    server:{
        port: '8000',
        open: './dist/stats.js'
    },
    plugins: [banner('\nimport _picture from "./assets/cover.png"\nimport _icon from "./assets/icon.png"\n')]
};
