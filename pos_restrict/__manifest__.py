# -*- coding: utf-8 -*-
{
    'name': "POS Restriction",
    'sequence': '-1',
    'summary': """
        Custom POS Module
    """,
    'description': """
        Add a custom features to POS module to meet specific needs
    """,
    'author': "Adham",
    'website': "https://www.adham.com",
    'category': 'Uncategorized',
    'version': '0.1',
    'depends': ['point_of_sale'],
    'data': [
        'views/views.xml',
    ],
    'demo': [

    ],
    'assets': {
        'point_of_sale.assets': [
            "pos_restrict/static/src/js/sample_button.js",
            "pos_restrict/static/src/xml/sample_button.xml",
        ]
    },
    'application': True
}
