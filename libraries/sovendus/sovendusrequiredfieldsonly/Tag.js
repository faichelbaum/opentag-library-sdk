//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("sovendus.sovendusrequiredfieldsonly.Tag", {
    config: {
      /*DATA*/
	id: 30658,
	name: "Sovendus [Required Fields Only]",
	async: true,
	description: "<div id=\"gutscheinconnection-container\"></div> should first be placed on the confirmation page, and positioned (using css) exactly where you'd like the banner to appear, before activating this tag (this version of the script is leaving out all optional parameters for faster implementation)",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/sovendus-logo.jpg",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 29668,
		name: "Sovendus Shop ID",
		description: "The Shop ID you have received from Sovendus - e.g. 2",
		token: "shop_id",
		uv: ""
	},
	{
		id: 29669,
		name: "Sovendus Banner ID",
		description: "If multiple banners - choose active banner here (e.g. 1) - usually no need to change this.",
		token: "banner_id",
		uv: ""
	},
	{
		id: 29670,
		name: "Sovendus Order ID",
		description: "Unique identifier of orders for accounting - e.g. 124578",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 29671,
		name: "Sovendus Order Value",
		description: "Order value -  use dot (.) as decimal separator & supply two decimal places e.g. 123.43",
		token: "order_value",
		uv: "universal_variable.transaction.total"
	},
	{
		id: 29672,
		name: "Sovendus Order Currency",
		description: "Order Currency - e.g. GBP",
		token: "order_currency",
		uv: "universal_variable.transaction.currency"
	},
	{
		id: 29673,
		name: "Sovendus Used Coupon Code",
		description: "The coupon code just encashed to track the success rate - e.g. ABC123",
		token: "coupon_code",
		uv: "universal_variable.transaction.voucher"
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/


(function()
{
  var waitForSovendusDiv = function()
  {
    if (document.getElementById('gutscheinconnection-container'))
    {
     var sovendusNewDate = new Date();
     var sovendusTimestamp = sovendusNewDate.getTime();

     var getCookie = function (c_name)
     {
       var i,x,y,ARRcookies=document.cookie.split(";");
       for (i=0;i<ARRcookies.length;i++)
       {
         x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
         y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
         x=x.replace(/^\s+|\s+$/g,"");
         if (x==c_name)
         {
           return unescape(y);
         }
       }
     };

     var sovendusSessionId = getCookie("__utma");

     window._gconData = window._gconData || [];

     _gconData.length = 0;

     _gconData.push(['_shopId', '' + this.getValueForToken("shop_id") + '']);
     _gconData.push(['_bannerId', '' + this.getValueForToken("banner_id") + '']);
     _gconData.push(['_sessionId', sovendusSessionId]);
     _gconData.push(['_timestamp', sovendusTimestamp]);
     _gconData.push(['_orderId', '' + this.getValueForToken("order_id") + '']);
     _gconData.push(['_orderValue', '' + this.getValueForToken("order_value") + '']);
     _gconData.push(['_orderCurrency', '' + this.getValueForToken("order_currency") + '']);
     _gconData.push(['_usedCouponCode', '' + this.getValueForToken("coupon_code") + '']);
     _gconData.push(['_htmlElementId', 'gutscheinconnection-container']);

     var sovendusScript = document.createElement('script')
     document.body.appendChild(sovendusScript);
     sovendusScript.type = "text/javascript";
     sovendusScript.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + "api.gutscheinconnection.de/js/client.js" ;
     sovendusScript.async = "true";
   }
   else
   {
     setTimeout(waitForSovendusDiv, 200);
   }
 };

 waitForSovendusDiv();

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