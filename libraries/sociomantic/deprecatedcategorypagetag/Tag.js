//:include tagsdk-current.js
var tagVersion = "";
var classPath = "sociomantic.deprecatedcategorypagetag" + "." + tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "{DEPRECATED} Category Page Tag",
		async: true,
		description: "Information about what category page the user was interested in",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/sociomantic.jpg",
		locationDetail: "",
		isPrivate: false,
		url: "eu-sonar.sociomantic.com/js/2010-07-01/adpan/${TOKEN}",
		usesDocWrite: false,
		parameters: [{
			name: "Advertiser Id",
			description: "Your Sociomantic customer ID. Please only use the token that has been created and sent to you.",
			token: "TOKEN",
			uv: ""
		}, {
			name: "Category",
			description: "Category name for the page the user was interested in",
			token: "CATEGORY",
			uv: "universal_variable.page.category"
		}, {
			name: "Subcategory",
			description: "Subategory name for the page the user was interested in",
			token: "SUBCATEGORY",
			uv: "universal_variable.page.subcategory"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		window.product = {
			category: ['' + this.valueForToken("CATEGORY"),
        '' + this.valueForToken("SUBCATEGORY")]
		};
		window.product = product;
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});