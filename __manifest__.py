# -*- coding: utf-8 -*-
{
    'name': "moduljs",

    'summary': """
        Short (1 phrase/line) summary of the module's purpose, used as
        subtitle on modules listing or apps.openerp.com""",

    'description': """
        Long description of module's purpose
    """,

    'author': "Andika",
    'category': 'Uncategorized',
    'version': '0.1',

    'depends': [
        'base',
        'web',
        'website',
    ],
    'data': [
        # 'security/ir.model.access.csv',
        'views/views.xml',
        'views/templates.xml',
        'views/website_moduljs.xml',
        # 'static/src/xml/moduljs.button_klik_bang.xml',
    ],
    'qweb': [
        'static/src/xml/moduljs.moduljs.xml',
    ],
    'demo': [
        'demo/demo.xml',
    ],
    'test': [
        'static/test/demo.js',
    ],
}