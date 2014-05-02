//:include tagsdk-current.js
var tagVersion = "";
var classPath = "lengow.conversiontrackingconfirmationpage" + "." + tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Conversion Tracking - Confirmation Page",
		async: true,
		description: "If you place this tag on the return page once the payment has been confirmed (order \nconfirmation page), you ensure that you’ll only find confirmed sales that have been validated by a \nbank or other payment method (i.e.: PayPal,…) in your Statistics board.\nIf you are using both tags (Payment Method Page & Confirmation Page), you need to visit this page https://solution.lengow.com/compte/tracking/\nto enable confirmation of orders by checking the box.\nDo not activate this box if you are only using the Payment Method Page tag.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/lengow_logo.jpg",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Lengow Customer ID",
			description: "[mandatory] Your Lengow customer ID (integer value)",
			token: "lengow_customer_id",
			uv: ""
		}, {
			name: "Lengow Group ID",
			description: "[mandatory] Your Lengow Group ID (integer value)",
			token: "lengow_group_id",
			uv: ""
		}, {
			name: "Lengow Order Value",
			description: "[mandatory] the order amount (float value e.g.1254.54)",
			token: "lengow_order_value",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Lengow Order ID",
			description: "Conversion Tag - Lead Order ID must be identical with Conversion Tag - Lead Validation Order ID",
			token: "lengow_order_id",
			uv: "universal_variable.transaction.order_id"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
    var lengowTrackPixel = new Image();
    lengowTrackPixel.src =
    "https://tracking.lengow.com/leadValidation.php?idClient=" +
    this.valueForToken("lengow_customer_id") + "&idGroup=" +
    this.valueForToken("lengow_group_id") + "&price=" +
    this.valueForToken("lengow_order_value") +"&idCommande=" +
    this.valueForToken("lengow_order_id");
    lengowTrackPixel.alt = "";
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