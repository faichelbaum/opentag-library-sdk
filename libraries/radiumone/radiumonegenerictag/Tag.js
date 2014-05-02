//:include tagsdk-current.js
var tagVersion = "";
var classPath = "radiumone.radiumonegenerictag" + "." + tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "RadiumOne - Generic tag",
		async: true,
		description: "RadiumOne is changing the face of online advertising through a unique combination of programmatic buying, proprietary data, patent-pending intelligence algorithms, and multi-channel capabilities.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/radiumone.png",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		parameters: [

		]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
			var img = new Image();
			img.src = "http://rs.gwallet.com/r1/pixel/x" + this.valueForToken("id") +
				"r" + Math.round(Math.random() * 10000000);
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