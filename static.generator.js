'use strict'

const _self = this;

const config = require('./static.config');
const fs = require('fs');

if (config.scripts || config.stylesheets) {
  _self.nuxtConfig = require('./nuxt.config');
}

if (config.dependencies || config.devDepencies) {
 //_self.npm = require('npm');
}


const pageTemplate = page => {
    return `<template>
<h1>${page}</h1>
</template>
                
<script>
export default {
          
}
</script>
                
<style>
</style>
`;
}

config.pages.forEach(element => {
  fs.writeFileSync('./pages/'+element+'.vue',
    pageTemplate(element));
});

if (_self.nuxtConfig) {
    if (_self.nuxtConfig.head && _self.nuxtConfig.head.script) {
        config.scripts.forEach(script => {
            if (_self.nuxtConfig.head.script)
            _self.nuxtConfig.head.script.push({
                src: script
            });
        });
    } else {
        _self.nuxtConfig.head.script = [];
        config.scripts.forEach(script => {
            _self.nuxtConfig.head.script.push({
                src: script
            });
        });
    }
    if (_self.nuxtConfig.head && _self.nuxtConfig.head.link) {
        config.stylesheets.forEach(stylesheet => {
            _self.nuxtConfig.head.link.push({
                href: stylesheet,
                rel: 'stylesheet'
            });
        });
    } else {
        _self.nuxtConfig.head.link = [];
        config.stylesheets.forEach(stylesheet => {
            _self.nuxtConfig.head.link.push({
                href: stylesheet,
                rel: 'stylesheet'
            });
        });
    }
    fs.writeFileSync('./nuxt.config.js',
    `module.exports = ${JSON.stringify(_self.nuxtConfig)}`);
}
