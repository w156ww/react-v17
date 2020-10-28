module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },
    extends: ["alloy", "alloy/react"],
    rules: {
        "no-debugger": 1,
        "no-console": 0,
        "no-unused-vars": 1,
        "react/prop-types": 0,
        "no-invalid-this": 0,
        "react/sort-comp": 1,
        "no-param-reassign": 0,
        "no-implicit-coercion": 1,
        "react/jsx-no-script-url": 1,
        "no-unused-expressions": 1,
    },
    settings: {
        "import/ignore": ["node_modules", "dist", "assets", "webpack.config.js"],
    },
};
