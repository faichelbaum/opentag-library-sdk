//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("nextag.thankyoupagesurvey.Tag", {
    config: {
      /*DATA*/
	id: 35185,
	name: "Thankyou Page Survey",
	async: true,
	description: "The tag to display the NexTag survey on the thanyou page. Any popup dimension can be set to a blank string to take the default value.",
	html: "<link rel=\"stylesheet\" href=\"https://merchants.nextag.com/serv/main/buyer/dhtmlpopup/dhtmlwindow.css\" type=\"text/css\" />\n</script>\n",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/NexTag.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: true,
	parameters: [
	{
		id: 34327,
		name: "Nextag Seller ID",
		description: "",
		token: "nextag_seller_id",
		uv: ""
	},
	{
		id: 34329,
		name: "Nextag Popup Left",
		description: "Default: Horizontally Centred",
		token: "pop_left",
		uv: ""
	},
	{
		id: 34330,
		name: "Nextag Popup Top",
		description: "Default: Vertically Centred",
		token: "popup_top",
		uv: ""
	},
	{
		id: 34332,
		name: "Nextag Popup Width",
		description: "Default: 345px",
		token: "popup_width",
		uv: ""
	},
	{
		id: 34333,
		name: "Nextag Popup Height",
		description: "Default: 205px",
		token: "popup_height",
		uv: ""
	},
	{
		id: 34334,
		name: "Nextag Popup Resize",
		description: "Default: 0",
		token: "popup_resize",
		uv: ""
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/


    (function () {

      window.seller_id = this.getValueForToken("nextag_seller_id");

      if ("" + this.getValueForToken("pop_left") + "" !== "") {
        window.popup_left = Number("" + this.getValueForToken("pop_left") + "");
      }

      if ("" + this.getValueForToken("popup_top") + "" !== "") {
        window.popup_top = Number("" + this.getValueForToken("popup_top") + "");
      }

      if ("" + this.getValueForToken("popup_width") + "" !== "") {
        window.popup_width = Number("" + this.getValueForToken("popup_width") + "");
      }

      if ("" + this.getValueForToken("popup_height") + "" !== "") {
        window.popup_height = Number("" + this.getValueForToken("popup_height") + "");
      }

      if ("" + this.getValueForToken("popup_resize") + "" !== "") {
        window.popup_resize = Number("" + this.getValueForToken("popup_resize") + "");
      }


    } ());

    document.write('<'+ 'script type="text/javascript" src="https://merchants.nextag.com/seller/review/popup_include.js"><\/script>'); 

    // <script  src="https://merchants.nextag.com/seller/review/popup_include.js">

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