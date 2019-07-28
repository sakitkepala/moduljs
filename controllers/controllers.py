# -*- coding: utf-8 -*-
from odoo import http

# class Moduljs(http.Controller):
#     @http.route('/moduljs/moduljs/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/moduljs/moduljs/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('moduljs.listing', {
#             'root': '/moduljs/moduljs',
#             'objects': http.request.env['moduljs.moduljs'].search([]),
#         })

#     @http.route('/moduljs/moduljs/objects/<model("moduljs.moduljs"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('moduljs.object', {
#             'object': obj
#         })