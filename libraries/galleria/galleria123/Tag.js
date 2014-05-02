//:include tagsdk-current.js
var tagVersion = "";
var classPath = "galleria.galleria123" + "." + tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "galleria 1.2.3",
		async: true,
		description: "Galleria is a JavaScript image gallery framework built on top of the jQuery library. The aim is to simplify the process of creating professional image galleries for the web and mobile devices.",
		html: "",
		imageUrl: "http://dummyimage.com/100x100/000/fff.png&text=galleria",
		locationDetail: "",
		isPrivate: false,
		url: "cdnjs.cloudflare.com/ajax/libs/galleria/1.2.3/galleria.min.js",
		usesDocWrite: false,
		parameters: [

		]
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