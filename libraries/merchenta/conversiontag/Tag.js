//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("merchenta.conversiontag.Tag", {
    config: {
      /*DATA*/
	id: 203,
	name: "Conversion Tag",
	async: true,
	description: "Place this tag on the order confirmation page following a successful purchase.",
	html: "<div id=\"mc_data\" style=\"display:none;\">\n  <div class=\"mc_event\">PURCHASE</div>\n  <div class=\"mc_retailer\">${Merchenta_Id}</div>\n  <div class=\"mc_order_ref\">${order_id}</div>\n  <div class=\"mc_ordervalue\">${order_total}</div>\n</div>\n",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Merchenta.jpg",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 20300,
		name: "Merchenta Retailer Code",
		description: "Your Merchenta account ID",
		token: "Merchenta_Id",
		uv: ""
	},
	{
		id: 20301,
		name: "Merchant's Order Reference",
		description: "A unique id for the order",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 20302,
		name: "Total Order Value",
		description: "The total cost of the order - may be left blank if is the same price as SKUs",
		token: "order_total",
		uv: "universal_variable.transaction.total"
	},
	{
		id: 20303,
		name: "Product SKUs",
		description: "The SKUs/IDs of the products being purchased",
		token: "product_ids",
		uv: "universal_variable.transaction.line_items[#].product.sku_code"
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

(function () {
  var i, ii, d, p = document.getElementById("mc_data");
  for (i = 0, ii = this.getValueForToken("product_ids").length; i < ii; i ++) {
    d = document.createElement("div");
    d.className="mc_sku";
    d.innerHTML=this.getValueForToken("product_ids")[i];
    p.appendChild(d);
  }
})();


var mc_api_url = "api.merchenta.com/merchenta/t";
(function() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  var secure = (window.parent.document.location.protocol=="https:");
  if (secure) {
    script.src = "https://api.merchenta.com/track/t.js";
  } else {
    script.src = "http://cdn.merchenta.com/track/t.js";
  }
  document.getElementsByTagName('head')[0].appendChild(script);
})();


      /*~SCRIPT*/
    },
    pre: function () {
      /*PRE*/
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});