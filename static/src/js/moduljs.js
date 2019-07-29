// moduljs
// TODO: ambil & pakai template untuk widget ini
odoo.define('moduljs.moduljs', function (require) {
    'use-strict';

    // ----------------------------------------
    // SUKSES: modul terdefinisi
    console.log("Halo dari moduljs!");
    // ----------------------------------------

    // MODEL: bagian ini sementara belum pakai, masih pakai data dummy
    //        nanti ditambahkan
    // {...}
    // VIEW part: Odoo javascript MVC
    var core = require('web.core');
    // CONTROLLER: extended Widget untuk website sale
    var sAnimations = require('website.content.snippets.animation');

    var qweb = core.qweb;
    // =>
    sAnimations.registry.moduljsButton = sAnimations.Class.extend({
        selector: '.moduljs_base_widget .btn',
        // template: '<button class="btn">Klik aku, bang</button>',

        // -----------------------------------------------------------
        // template: 'moduljs.button_klik_bang',
        // Ada error di sini ketika di appendTo() kalau pakai nilai template kayak di atas.
        // Error: QWeb2: Template 'moduljs.button_klik_bang' not found
        // -----------------------------------------------------------

        // ----------------------------------------------------------------------
        // ini untuk ambil depensi template kalau mau append widget lain dari sini:
        // xmlDependencies: ['/moduljs/static/src/xml/moduljs.moduljs.xml'],
        // ----------------------------------------------------------------------

        read_events: {
            // SUKSES: untuk menarget root DOM-nya, gak perlu cantumkan selektornya,
            //         langsung tentukan nama eventnya aja
            'click': 'onClickButtonBang',
        },
        start: function () {
            // objek widget button
            // console.log(this);
            
            // ----------------------------------------
            // SUKSES: widget start
            console.log("Widget moduljsButton start!");
            // ----------------------------------------

            // -------------------------------------------------------------------------------
            // this.$el.text("");
            // SUKSES: template moduljs.button_klik_bang dari moduljs.button_klik_bang.xml
            //         berhasil di append ke DOM berclass .moduljs_base_widget
            // $(qweb.render('moduljs.button_klik_bang'))
            //     .appendTo('.moduljs_base_widget');
            
            // NOTE: - cara ini sebaiknya untuk append widget secara dinamis berdasarkan event user
            //       - cocok buat menampilkan modal box nego misalnya: user klik tombol, modal muncul
            //         misal: var newWidget = new NewWidget();
            //                newWidget.appendTo('.target .class');
            //       - sudah ada cara bawaan pakai properti selector,
            //         tapi cari tau dulu caranya
            // -------------------------------------------------------------------------------
        },
        onClickButtonBang: function () {
            // console.log
            window.alert("Makasih kliknya, bang!");
        },
    });

    // Append widget dari sini: <<<
    // GAGAL: "module could not be started"
    // var buttonKlikBang = new moduljsButton(this);
    // var $target = $('.moduljs_base_widget');
    // buttonKlikBang.appendTo($target);

    // tes widget
    // if ($('.moduljs_base_widget .btn').length) {
    //     console.log("template \"moduljs.button_klik_bang\" berhasil di-appendTo()");
    // } else {
    //     console.log("Template belum nempel!");
    // }

    // console.log(sAnimations.registry);
    // console.log(sAnimations.Class);

    // Definisi modul selesai
});
