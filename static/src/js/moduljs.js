// moduljs
odoo.define('moduljs.moduljs', function (require) {
    'use-strict';
    console.log("Halo dari moduljs!");

    var sAnimations = require('website.content.snippets.animation');

    sAnimations.registry.moduljsButton = sAnimations.Class.extend({});
});
