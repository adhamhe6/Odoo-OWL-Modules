/** @odoo-module */

import Registries from "point_of_sale.Registries"
import ProductScreen from "point_of_sale.ProductScreen"
const { onWillStart } = owl

const ProductScreenInherit = (product_screen) => class extends product_screen {
    setup(){
        super.setup()
        console.log("Product Screen Inherited")
        console.log("POS DB", this.env.pos.db)
        console.log("POS Services", this.env.services)
        this.favorite_products = []

        onWillStart(async ()=>{
            this.favorite_products = await this.env.pos.favorite_products
        })
    }

    get favoriteProducts(){
        let products = this.env.pos.db.product_by_id;
        console.log("Products", products)
        let favorites = []
        this.favorite_products.forEach(p => favorites.push(products[p]))
        return favorites
    }
}

Registries.Component.extend(ProductScreen, ProductScreenInherit)