# -*- coding: utf-8 -*-
{
    'name' : 'OWL Point',
    'version' : '1.0',
    'summary': 'OWL Point of sale',
    'sequence': -1,
    'description': """OWL Point of sale""",
    'category': 'OWL',
    'depends' : ['base', 'web', 'point_of_sale'],
    'data': [
    ],
    'demo': [
    ],
    'installable': True,
    'application': True,
    'assets': {
        'point_of_sale.assets': [
            'owl/static/src/pos/**/*.js',
            'owl/static/src/pos/**/*.xml',
            'owl/static/src/pos/**/*.scss',
        ]
    },
}