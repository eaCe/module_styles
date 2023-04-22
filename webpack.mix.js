const mix = require('laravel-mix');

mix.webpackConfig({
    optimization: {
        providedExports: false,
        sideEffects: false,
        usedExports: false
    }
});

mix.js('./resources/js/module-styles.js', 'assets');
mix.js('./resources/js/module-styles-settings.js', 'assets');

mix.disableNotifications();
mix.sourceMaps(false, 'source-map');
