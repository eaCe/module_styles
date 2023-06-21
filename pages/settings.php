<?php

$addon = rex_addon::get('module_styles');

$form = rex_config_form::factory('module_styles');
$field = $form->addTextAreaField('module_stylesheet', null, ['class' => 'form-control', 'placeholder' => '/css/styles.css']);
$field->setLabel('Stylesheet URL');
$field->setNotice($addon->i18n('multiline'));

$fragment = new rex_fragment();
$fragment->setVar('class', 'edit module-styles-settings', false);
$fragment->setVar('title', $addon->i18n('settings'), false);
$fragment->setVar('body', $form->get(), false);
echo $fragment->parse('core/page/section.php');

$url = null;
// check if url is absolute
if (filter_var($addon->getConfig('module_stylesheet'), FILTER_VALIDATE_URL) !== false) {
    $url = $addon->getConfig('module_stylesheet');
} else if ($addon->getConfig('module_stylesheet')) {
    $url = rex_url::frontendController(['module_styles' => $addon->getConfig('module_stylesheet')]);
}
