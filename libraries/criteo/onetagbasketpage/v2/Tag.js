//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("criteo.onetagbasketpage.v2.Tag", {
	config: {
		/*DATA*/
		name: "OneTag - Basket Page",
		async: true,
		description: "The basket tag has to be integrated on the basket or checkout page.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "static.criteo.net/js/ld/ld.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Criteo Partner ID",
			description: "The ID assigned to you by Criteo",
			token: "partner_id",
			uv: ""
		}, {
			name: "Customer ID",
			description: "This MUST NOT include any personally-identifiable information. Send \"\" if there is no anonymous ID.",
			token: "customer_id",
			uv: "universal_variable.user.user_id"
		}, {
			name: "Site Type",
			description: "\"m\" for mobile or \"t\" for tablet or \"d\" for  desktop",
			token: "site_type",
			uv: ""
		}, {
			name: "Product ID List",
			description: "List of product IDs for all products in the user's basket.",
			token: "product_ids",
			uv: "universal_variable.basket.line_items[#].product.id"
		}, {
			name: "Product Price List",
			description: "Prices for each product currently in the basket.",
			token: "product_prices",
			uv: "universal_variable.basket.line_items[#].product.unit_sale_price"
		}, {
			name: "Product Quantity List",
			description: "Quantities for each item currently in the basket",
			token: "product_quantities",
			uv: "universal_variable.basket.line_items[#].quantity"
		}, {
			name: "Hashed E-mail",
			description: "Pass hashed e-mail to this parameter for X-Device",
			token: "hashed_email",
			uv: ""
		},
          {
			name: "E-mail",
			description: "Pass plain text e-mail to this parameter for X-Device. Criteo will hash it.",
			token: "email",
			uv: "universal_variable.user.email"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		var products = [];

		for (var i = 0; i < this.valueForToken("product_ids").length; i++) {
			products.push({
				id: this.valueForToken("product_ids")[i],
				price: this.valueForToken("product_prices")[i],
				quantity: this.valueForToken("product_quantities")[i]
			});
		}

		var user_id = "" + this.valueForToken("customer_id");
		//Remove email if present.
		if (user_id.indexOf("@") > -1) {
			user_id = "";
		}
        
        if (this.valueForToken("email")!='') {
            var passedemail = {event: "setEmail", email: [this.valueForToken("email")]};
        } else {
            var passedemail = {event: "setHashedEmail", email: [this.valueForToken("hashed_email")]};
        }

		window.criteo_q = window.criteo_q || [];
		window.criteo_q.push({
			event: "setAccount",
			account: this.valueForToken("partner_id")
		}, {
			event: "setCustomerId",
			id: user_id
		}, {
			event: "setSiteType",
			type: "" + this.valueForToken("site_type")
		}, {
			event: "viewBasket",
			product: products
		}, passedemail);
		/*~POST*/
	}
});
