<?php

$addon = rex_addon::get('module_styles');
$styles = explode("\r\n", $addon->getConfig('module_stylesheet'));

if (rex::isBackend() && rex::getUser() && rex_url::currentBackendPage() === 'index.php?page=content/edit' && $addon->getConfig('module_stylesheet')) {
    rex_view::setJsProperty('moduleStylesheet', $styles);
    rex_view::addJsFile($addon->getAssetsUrl('module-styles.js'));
}

if (rex::isBackend() && rex::getUser() && rex_url::currentBackendPage() === 'index.php?page=module_styles/settings' && $addon->getConfig('module_stylesheet')) {
    rex_view::setJsProperty('moduleStylesheet', $styles);
    rex_view::addJsFile($addon->getAssetsUrl('module-styles-settings.js'));
}

