odoo.define("doc_pos.ClearAllButton", function(require){
"use strict";

    const PosComponent = require("point_of_sale.PosComponent");
    const ProductScreen = require("point_of_sale.ProductScreen");
    const Registries = require("point_of_sale.Registries");
    const { useListener } = require("@web/core/utils/hooks");
    const core  = require("web.core");
    var _t = core._t;

    class ClearAllButton extends PosComponent {
        setup(){
            super.setup();
            useListener("click", this.clear_all_lines);
        }

        async clear_all_lines(){
            var { confirmed } = await this.showPopup("ConfirmPopup",{
                title: _t("ClearAll Popup"),
                body: _t("Are you sure want to clear all orders?"),
                confirmText: _t("Yes"),
                cancelText: _t("No")
            });
            if (confirmed){
                var current_order = this.env.pos.get_order();
                current_order.orderlines.filter(line=> line.get_product()).forEach(single_line=> current_order.remove_orderline(single_line));
            }
            console.log("clear_all_lines method called........");
        }

    }

    ClearAllButton.template = "ClearAllButton";
    ProductScreen.addControlButton({
        component: ClearAllButton,
        position: ["after", "OrderlineCustomerNoteButton"],
    });

    Registries.Component.add(ClearAllButton);

    return ClearAllButton;

});