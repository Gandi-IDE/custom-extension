import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        port: 8000,
        cors: '*',
    },
    build: {
        lib: {
            entry: 'src/main.js',
            fileName: format => `tilemap.${format}.js`,
            formats: ['iife','esm'],
            name: 'tilemap',
        },
        minify: false,
        rollupOptions: {
            globals: {
                Scratch: 'Scratch',
            },
            external: ['Scratch'],
        },
    },
});