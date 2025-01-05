# -*- coding: utf-8 -*-
{
    'name': "Doc POS Module",
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

    ],
    'demo': [

    ],
    'assets': {
        'point_of_sale.assets': [
            "doc_pos/static/src/js/doc_btn.js",
            "doc_pos/static/src/xml/doc_btn.xml",
            "doc_pos/static/src/js/clearall_button.js",
            "doc_pos/static/src/xml/clearall_button.xml"
        ]
    },
    'application': True
}
