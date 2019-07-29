// moduljs
// TODO: ambil & pakai template untuk widget ini
odoo.define('moduljs.moduljs', function (require) {
    'use-strict';

    // ----------------------------------------
    // SUKSES: modul terdefinisi
    console.log("Halo dari moduljs!");
    // ----------------------------------------

    var core = require('web.core');

    var qweb = core.qweb;
    var sAnimations = require('website.content.snippets.animation');

    sAnimations.registry.moduljsButton = sAnimations.Class.extend({
        selector: '.moduljs_base_widget',
        // template: '<button class="btn">Klik aku, bang</button>',

        // -----------------------------------------------------------
        // template: 'moduljs.button_klik_bang',
        // Ada error di sini ketika di appendTo() kalau pakai nilai template kayak di atas.
        // Error: QWeb2: Template 'moduljs.button_klik_bang' not found
        // -----------------------------------------------------------

        // ----------------------------------------------------------------------
        // ini untuk ambil depensi template kalau mau append widget lain dari sini:
        xmlDependencies: ['/moduljs/static/src/xml/moduljs.button_klik_bang.xml'],
        // ----------------------------------------------------------------------

        events: {
            'click .moduljs_base_widget .btn': '_onClickButtonBang',
        },
        start: function () {
            // ----------------------------------------
            // SUKSES: widget start
            console.log("Widget moduljsButton start!");
            // ----------------------------------------

            // -------------------------------------------------------------------------------
            this.$el.text("");
            // SUKSES: template moduljs.button_klik_bang dari moduljs.button_klik_bang.xml
            //         berhasil di append ke DOM berclass .moduljs_base_widget
            $(qweb.render('moduljs.button_klik_bang'))
                .appendTo('.moduljs_base_widget');

            if ($('.moduljs_base_widget .btn').length) {
                console.log("template \"moduljs.button_klik_bang\" berhasil di-appendTo()");
            }
            // NOTE: - cara ini sebaiknya untuk append widget secara dinamis berdasarkan event user
            //       - cocoknya untuk menampilkan modal box nego misalnya: user klik tombol, modal muncul
            //       - sudah ada cara bawaan pakai properti selector,
            //         tapi cari tau dulu caranya
            // -------------------------------------------------------------------------------
        },
        _onClickButtonBang: function () {
            console.log("Makasih kliknya, bang!");
        },
    });
});
