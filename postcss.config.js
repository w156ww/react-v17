const postcssPresetEnv = require('postcss-preset-env');


module.exports = {
    plugins: [
        postcssPresetEnv({
            browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4']
        })
    ]
}