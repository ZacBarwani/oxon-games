const sveltePreprocess = require('svelte-preprocess');

module.exports = {
    preprocess: sveltePreprocess({
        defaults: {
            markup: "html",
            script: "javascript",
            style: "scss"
        },
        scss:{
            prependData: `@use "src/styles/globalvars" as *;`
        }
    }),
    hmrOptions: {
        
    }
}