# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request

class Moduljs(http.Controller):
    @http.route('/moduljs', auth='public', website=True)
    def index(self, **kw):
        return request.render('moduljs.moduljs', {})
