import banner from 'vite-plugin-banner'

export default {
    build: {
        lib: {
            entry: 'src/main.js',
            name: 'stats',
            fileName: format => `stats.js`,
            formats: ['iife'],
        },
        minify: false,
    },
    plugins: [banner('\nimport _picture from "./assets/cover.png"\nimport _icon from "./assets/icon.png"\n')]
};
