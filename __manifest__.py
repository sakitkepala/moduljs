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
        # view untuk backend, berupa record di tabel ir.ui.view
        'views/views.xml',
        'views/templates.xml',
        'views/website_moduljs.xml',
    ],
    'qweb': [ # untuk template widget di frontend atau di web client
        'static/src/xml/moduljs.moduljs.xml',
    ],
    'demo': [
        'demo/demo.xml',
    ],
    'test': [
        'static/test/demo.js',
    ],
}