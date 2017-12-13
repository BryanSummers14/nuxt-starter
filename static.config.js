const config = {
    pages: [
        "home",
        "about",
        "contact",
        "portfolio"
    ],
    components: [
        "navdrawer",
        "toolbar"
    ],
    scripts: [
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js'
    ],
    stylesheets: [
        'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css',
        'https://fonts.googleapis.com/icon?family=Material+Icons'
    ],
    dependencies: [
        'vuetify'
    ],
    devDependencies: [
        'semver'
    ]
}

module.exports = config;