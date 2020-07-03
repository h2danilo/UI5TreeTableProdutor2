//@ts-nocheck
sap.ui.define(
  function () {
    "use strict";

    return {
      formataStatus: function (sOperacao) { 
        let obj = {
          1: "ENTRADA",
          2: "SAÍDA",
          default: "",
        };

        return (obj[sOperacao] || obj["default"]);
      },

      colorStatus: function (sOperacaoV) {
        let obj = {
          2: "2" /* vermelho */,
          1: "8" /* verde  */,
          default: "9" /* amarelo */,
        };

        return (obj[sOperacaoV] || obj["default"]);
      },

      formataStatusDoc: function (sStatus) {
        let obj = {
          0: "NAO CRIADO",
          1: "NAO ENVIADO",
          2: "AGUARDANDO SIGNATARIOS",
          3: "ASSINATURAS",
          4: "FINALIZADO",
          5: "ARQUIVADO",
          6: "CANCELADO",
          default: "NAO CRIADO",
        };

        return (obj[sStatus] || obj["default"]);
      },

      colorStatusDoc: function (sStateValue) {
        let obj = {
          0: "9",
          1: "7" /* azul */,
          2: "4" /* rosa */,
          3: "2" /* vermelho */,
          4: "8" /* verde  */,
          5: "1" /* amarelo */,
          6: "3",
          default: "9",
        };

        return obj[sStateValue] || obj["default"];
      },

      formataPreco: function (sPreco, sProduto) {
        if (!sPreco) {
          return "";
        }

        let oNumberFormat = NumberFormat.getFloatInstance(
          {
            decimals: 2,
            decimalSeparator: ",",
            groupingEnabled: true,
            groupingSeparator: ".",
          },
          sap.ui.getCore().getConfiguration().getLocale()
        );

        let iPreco = parseFloat(sPreco.replace(".", "").replace(",", "."));
        let s = sProduto.trim();
        let oPreco = {
          "00000003": iPreco * 1000,
          "000003": iPreco * 1000,
          default: iPreco * 60,
        };

        return oNumberFormat.format(oPreco[s] || oPreco["default"]);
      },

      formataQuantidade: function (sQuantidade, sProduto) {
        if (!sQuantidade) {
          return "";
        }

        let oNumberFormat = NumberFormat.getFloatInstance(
          {
            decimals: 0,
            groupingEnabled: true,
          },
          sap.ui.getCore().getConfiguration().getLocale()
        );

        let iQuantidade = parseInt(
          sQuantidade.replace(".", "").replace(".", "").replace(",", ".")
        );
        let s = sProduto.trim();
        let oQuantidade = {
          "00000003": iQuantidade / 1000,
          "000003": iQuantidade / 1000,
          default: iQuantidade / 60,
        };

        return oNumberFormat.format(oQuantidade[s] || oQuantidade["default"]);
      },

      formataUnidadeMedida: function (sProduto) {
        if (!sProduto) {
          return "";
        }

        let s = sProduto.trim();

        let oUnidade = {
          "00000003": "TON",
          "000003": "TON",
          default: "SACOS",
        };

        return oUnidade[s] || oUnidade["default"];
      },
    };
  },
  /* bExport= */ true
);
