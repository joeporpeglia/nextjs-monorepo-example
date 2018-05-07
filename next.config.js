module.exports = {
    webpack(config) {
        config.module.rules.forEach(rule => {
            if (rule.user && rule.use.loader === 'babel-loader') {
                delete rule.include;
                delete rule.exclude;
            }
        });
        return config;
    }
}
