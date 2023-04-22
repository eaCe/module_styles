<?php

$addon = rex_addon::get('module_styles');

if (rex::isBackend() && rex::getUser() && rex_url::currentBackendPage() === 'index.php?page=content/edit' && $addon->getConfig('module_stylesheet')) {
    rex_view::setJsProperty('moduleStylesheet', $addon->getConfig('module_stylesheet'));
    rex_view::addJsFile($addon->getAssetsUrl('module-styles.js'));
}

if (rex::isBackend() && rex::getUser() && rex_url::currentBackendPage() === 'index.php?page=module_styles/settings' && $addon->getConfig('module_stylesheet')) {
    rex_view::setJsProperty('moduleStylesheet', $addon->getConfig('module_stylesheet'));
    rex_view::addJsFile($addon->getAssetsUrl('module-styles-settings.js'));
}

