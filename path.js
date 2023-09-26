import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());


const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        fonts: `${buildFolder}/fonts/`,
        images: `${buildFolder}/img/`,
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html:`${buildFolder}/`, 
        files:`${buildFolder}/files/`,
    },
    src: {
        fonts: `${srcFolder}/files/fonts/*.*`,
        images: `${srcFolder}/files/images/*.{png, jpg, jpeg, gif, webp}`,
        js: `${srcFolder}/**/script.js`,
        css: `${srcFolder}/**/Chat.css`,
        html:`${srcFolder}/*.html`,
        files:`${srcFolder}/files/**/*.*`,
    },
    watch: {
        images: `${srcFolder}/img/**/*.{png, jpg, jpeg, gif, webp, svg}`,
        js: `${srcFolder}/**/*.js`,
        css: `${srcFolder}/**/*.css`,
        html:`${srcFolder}/**/*.html`,
        files:`${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}