//:include tagsdk-current.js
var tagVersion = "";
var classPath = "flixmedia.checkoutendpagewithextraeanparameter" + "." + tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Checkout End Page with extra EAN parameter",
		async: true,
		description: "This version also sends through the EAN or UPC of the product that is being checked out. Use this version only if the EAN product value is available.",
		html: "<!--@SRC@--><script type=\"text/javascript\" src=\"//media.flixcar.com/delivery/static/js/sio_ty.js\"></script>\n<script type=\"text/javascript\"> \n(function ()\n{\n    var products = [];\n     \n    for (var i=0; i< ${skus}.length; i++)\n    {\n        products.push({\n           \"mpn\" : ${skus}[i]+\"\",\n           \"price\" : ${prices}[i],\n           \"quantity\" : ${quants}[i],\n           \"ean\" : ${eans}[i]+\"\"\n        });\n    }\n  \n    FLIXSio.sioTy({\n       \"distributor_id\" : \"\",\n       \"language\" : \"\",\n       \"event\" : \"end\",\n       \"basket_id\" : \"${id}\",\n       \"basket\" : products \n    }); \n})();\n</script>",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Array of Product SKU codes",
			description: "Array of Product SKU codes",
			token: "skus",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		}, {
			name: "Array of Product EAN values",
			description: "Use a JS expression to generate an array of equal length to the other arrays used",
			token: "eans",
			uv: ""
		}, {
			name: "Array of Product Unit Sale Prices",
			description: "Array of Product Unit Sale Prices",
			token: "prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "Array of Product Quantities",
			description: "Array of Product Quantities",
			token: "quants",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Unique Checkout ID",
			description: "The value should match that of the Checkout Start page tag Unique Checkout ID parameter",
			token: "id",
			uv: ""
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
		/*~POST*/
	}
});