//@ts-nocheck
sap.ui.define([
  "br/com/idxtec/ui5Template/controller/BaseController",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator",
  "sap/m/MessageBox",
  "sap/ui/model/json/JSONModel"
], function (BaseController,
  Filter,
  FilterOperator,
  MessageBox,
  JSONModel) {
  "use strict";

  return BaseController.extend("br.com.idxtec.ui5Template.controller.App", {
    onInit: function () {
      this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
      this.getView().setBusyIndicatorDelay(0);

      let oJSONModel = new JSONModel();
      //let oJSONModel = new JSONModel(this.getData());
      this.getView().setModel(oJSONModel, "model");

      this.getRouter()
      .getRoute("appHome")
      .attachMatched(this._routerMatch, this);
    },

    _routerMatch: function() {
      this.getData();
    },

    getData: async function() { 
      let oJSONModel = this.getModel("model");
      oJSONModel.loadData("/siagro/portal/rest/api/LoteArmazenagem/GetLoteArmazenagemTreeTable/00000001/2020", null, false);

    },

    getDataMock: function () {
      return {
        "catalog": {
          "clothing": {
            "categories": [
              {"name": "Women", "categories": [
                {"name":"Clothing", "categories": [
                  {"name": "Dresses", "categories": [
                    {"name": "Casual Red Dress", "amount": 16.99, "currency": "EUR", "size": "S"},
                    {"name": "Short Black Dress", "amount": 47.99, "currency": "EUR", "size": "M"},
                    {"name": "Long Blue Dinner Dress", "amount": 103.99, "currency": "USD", "size": "L"}
                  ]},
                  {"name": "Tops", "categories": [
                    {"name": "Printed Shirt", "amount": 24.99, "currency": "USD", "size": "M"},
                    {"name": "Tank Top", "amount": 14.99, "currency": "USD", "size": "S"}
                  ]},
                  {"name": "Pants", "categories": [
                    {"name": "Red Pant", "amount": 32.99, "currency": "USD", "size": "M"},
                    {"name": "Skinny Jeans", "amount": 44.99, "currency": "USD", "size": "S"},
                    {"name": "Black Jeans", "amount": 99.99, "currency": "USD", "size": "XS"},
                    {"name": "Relaxed Fit Jeans", "amount": 56.99, "currency": "USD", "size": "L"}
                  ]},
                  {"name": "Skirts", "categories": [
                    {"name": "Striped Skirt", "amount": 24.99, "currency": "USD", "size": "M"},
                    {"name": "Black Skirt", "amount": 44.99, "currency": "USD", "size": "S"}
                  ]}
                ]},
                {"name":"Jewelry", "categories": [
                    {"name": "Necklace", "amount": 16.99, "currency": "USD"},
                    {"name": "Bracelet", "amount": 47.99, "currency": "USD"},
                    {"name": "Gold Ring", "amount": 399.99, "currency": "USD"}
                  ]},
                {"name":"Handbags", "categories": [
                  {"name": "Little Black Bag", "amount": 16.99, "currency": "USD", "size": "S"},
                  {"name": "Grey Shopper", "amount": 47.99, "currency": "USD", "size": "M"}
                ]},
                {"name":"Shoes", "categories": [
                  {"name": "Pumps", "amount": 89.99, "currency": "USD"},
                  {"name": "Sport Shoes", "amount": 47.99, "currency": "USD"},
                  {"name": "Boots", "amount": 103.99, "currency": "USD"}
                ]}
              ]},
              {"name": "Men", "categories": [
                {"name":"Clothing", "categories": [
                  {"name": "Shirts", "categories": [
                    {"name": "Black T-shirt", "amount": 9.99, "currency": "USD", "size": "XL"},
                    {"name": "Polo T-shirt", "amount": 47.99, "currency": "USD", "size": "M"},
                    {"name": "White Shirt", "amount": 103.99, "currency": "USD", "size": "L"}
                  ]},
                  {"name": "Pants", "categories": [
                    {"name": "Blue Jeans", "amount": 78.99, "currency": "USD", "size": "M"},
                    {"name": "Stretch Pant", "amount": 54.99, "currency": "USD", "size": "S"}
                  ]},
                  {"name": "Shorts", "categories": [
                    {"name": "Trouser Short", "amount": 62.99, "currency": "USD", "size": "M"},
                    {"name": "Slim Short", "amount": 44.99, "currency": "USD", "size": "S"}
                  ]}
                ]},
                {"name":"Accessories", "categories": [
                  {"name": "Tie", "amount": 36.99, "currency": "USD"},
                  {"name": "Wallet", "amount": 47.99, "currency": "USD"},
                  {"name": "Sunglasses", "amount": 199.99, "currency": "USD"}
                ]},
                {"name":"Shoes", "categories": [
                  {"name": "Fashion Sneaker", "amount": 89.99, "currency": "USD"},
                  {"name": "Sport Shoe", "amount": 47.99, "currency": "USD"},
                  {"name": "Boots", "amount": 103.99, "currency": "USD"}
                ]}
              ]},
                {"name": "Girls", "categories": [
                  {"name":"Clothing", "categories": [
                    {"name": "Shirts", "categories": [
                      {"name": "Red T-shirt", "amount": 16.99, "currency": "USD", "size": "S"},
                      {"name": "Tunic Top", "amount": 47.99, "currency": "USD", "size": "M"},
                      {"name": "Fuzzy Sweater", "amount": 103.99, "currency": "USD", "size": "L"}
                    ]},
                    {"name": "Pants", "categories": [
                      {"name": "Blue Jeans", "amount": 24.99, "currency": "USD", "size": "M"},
                      {"name": "Red Pant", "amount": 54.99, "currency": "USD", "size": "S"}
                    ]},
                    {"name": "Shorts", "categories": [
                      {"name": "Jeans Short", "amount": 32.99, "currency": "USD", "size": "M"},
                      {"name": "Sport Short", "amount": 14.99, "currency": "USD", "size": "S"}
                    ]}
                  ]},
                  {"name":"Accessories", "categories": [
                    {"name": "Necklace", "amount": 26.99, "currency": "USD"},
                    {"name": "Gloves", "amount": 7.99, "currency": "USD"},
                    {"name": "Beanie", "amount": 12.99, "currency": "USD"}
                  ]},
                  {"name":"Shoes", "categories": [
                    {"name": "Sport Shoes", "amount": 39.99, "currency": "USD"},
                    {"name": "Boots", "amount": 87.99, "currency": "USD"},
                    {"name": "Sandals", "amount": 63.99, "currency": "USD"}
                  ]}
                ]},
                  {"name": "Boys", "categories": [
                    {"name": "Clothing", "categories": [
                      {"name": "Shirts", "categories": [
                        {"name": "Black T-shirt with Print", "amount": 16.99, "currency": "USD", "size": "S"},
                        {"name": "Blue Shirt", "amount": 47.99, "currency": "USD", "size": "M"},
                        {"name": "Yellow Sweater", "amount": 63.99, "currency": "USD", "size": "L"}
                      ]},
                      {"name": "Pants", "categories": [
                        {"name": "Blue Jeans", "amount": 44.99, "currency": "USD", "size": "M"},
                        {"name": "Brown Pant", "amount": 89.99, "currency": "USD", "size": "S"}
                      ]},
                      {"name": "Shorts", "categories": [
                        {"name": "Sport Short", "amount": 32.99, "currency": "USD", "size": "M"},
                        {"name": "Jeans Short", "amount": 99.99, "currency": "USD", "size": "XS"},
                        {"name": "Black Short", "amount": 56.99, "currency": "USD", "size": "L"}
                      ]}
                    ]},
                    {"name":"Accessories", "categories": [
                      {"name": "Sunglasses", "amount": 36.99, "currency": "USD"},
                      {"name": "Beanie", "amount": 17.99, "currency": "USD"},
                      {"name": "Scarf", "amount": 15.99, "currency": "USD"}
                    ]},
                    {"name":"Shoes", "categories": [
                      {"name": "Sneaker", "amount": 89.99, "currency": "USD"},
                      {"name": "Sport Shoe", "amount": 47.99, "currency": "USD"},
                      {"name": "Boots", "amount": 103.99, "currency": "USD"}
                    ]}
                  ]}
              ]}

          },
        "sizes": [
          {"key": "XS", "value": "Extra Small"},
          {"key": "S", "value": "Small"},
          {"key": "M", "value": "Medium"},
          {"key": "L", "value": "Large"}
        ]
        };

    },


    onSearch: function (oEvent) {
      let sQuery = oEvent.getParameter("query");
      let oFilterLastName = new Filter("LastName", FilterOperator.Contains, sQuery);
      let oFilterFirstName = new Filter("FirstName", FilterOperator.Contains, sQuery);
      let oFilter = new Filter({
        filters: [
          oFilterLastName,
          oFilterFirstName
        ],
        and: false
      });

      this.byId("table").getBinding("rows").filter(oFilter);
    },

    onAdd: function () {
      this.navTo("Add");
    },

    onEdit: function () {
      let oTable = this.byId("table");
      let oContext = oTable.getContextByIndex(oTable.getSelectedIndex());

      if (oContext) {
        let sId = oContext.getProperty("UserName");
        this.navTo("Edit", {
          id: sId
        });
      }
    },

    onRefresh: function () {
      if (!this.getModel().hasPendingChanges()) {
        this.getModel().refresh();
        this.byId("table").clearSelection();
      }
    },

    onDelete: async function () {
      let oTable = this.byId("table");
      let oContext = oTable.getContextByIndex(oTable.getSelectedIndex());

      if (oContext) {
        try {
          if (await this._msgConfirmDelete() == MessageBox.Action.OK) {
            this.getView().setBusy(true);
            await oContext.delete("$auto");
            oTable.clearSelection();
          }
        } catch (oError) {
          MessageBox.error(oError.toString());
        } finally {
          this.getView().setBusy(false);
        }
      }
    },

    _msgConfirmDelete: function () {
      return new Promise(resolve => {
        MessageBox.confirm(this.getBundle().getText("AppController.ConfirmDelete"), {
          onClose: sAction => {
            resolve(sAction);
          }
        });
      });
    }

  });

});
