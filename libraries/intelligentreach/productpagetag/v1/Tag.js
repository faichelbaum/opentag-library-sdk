//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("intelligentreach.productpagetag.v1.Tag", {
	config: {
		/*DATA*/
		name: "Product Page Tag",
		async: true,
		description: "This tag should be applied to product pages only",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "www.ist-track.com/ContainerItemJavaScript.ashx?id=${id}",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "Intelligent Reach ID",
			description: "",
			token: "id",
			uv: ""
		}, {
			name: "Product ID",
			description: "",
			token: "product_id",
			uv: "universal_variable.product.id"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		window.istCompanyId = "" + this.valueForToken("id");
		window.istItem = "" + this.valueForToken("product_id");
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});