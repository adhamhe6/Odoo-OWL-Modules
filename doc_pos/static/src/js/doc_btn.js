odoo.define("doc_pos.DocButton", function(require){
"use strict";

    const PosComponent = require("point_of_sale.PosComponent");
    const ProductScreen = require("point_of_sale.ProductScreen");
    const Registries = require("point_of_sale.Registries");
    const { useListener } = require("@web/core/utils/hooks");

    class DocButton extends PosComponent {
        // Add event listener
        setup(){
            super.setup();
            useListener("click", this.doctor_button_click);
        }
        async doctor_button_click(){
            var multi_lang = await this.rpc({
                route:"/pos/rpc/example",
                params:{},
            })
            var multi_lang_list = [];

            multi_lang.forEach(function(value){
                   multi_lang_list.push({"id": value.id,
                   "label":value.name,
                   "item": value});
            });
            console.log(multi_lang_list);

            var {confirmed, payload: selectedOption} = await this.showPopup("SelectionPopup", {
                title: "Active Languages!",
                list: multi_lang_list
            })
            console.log(confirmed, selectedOption);
            console.log("Doctor Button has been clicked...");
        }
    }

    DocButton.template = "DocButton";
    ProductScreen.addControlButton({
        component: DocButton,
        position: ["before", "OrderlineCustomerNoteButton"],
    });

    Registries.Component.add(DocButton);

    return DocButton;

});