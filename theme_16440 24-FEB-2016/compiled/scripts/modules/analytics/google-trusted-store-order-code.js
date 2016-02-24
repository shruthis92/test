define(["jquery","underscore","vendor/moment.min","hyprlive","modules/api"],function(e,t,r,n,i){function o(r){var n=e.extend(!0,f,{EstimatedShipmentDate:d().toISOString(),DestinationAddress:{PostalOrZipCode:r}});return s(n).then(function(e){var r=t.findWhere(e.rates,{carrierId:"fedex"});if(!r)throw new Error("No Fedex carrier found in rate request response.");try{return t.findWhere(r.shippingRates,{code:"fedex_FEDEX_GROUND"}).daysInTransit}catch(n){throw new Error("No Fedex shipping rates found.")}})}function s(e){return i.request("POST",{url:"/api/commerce/catalog/storefront/shipping/request-rates",iframeTransportUrl:"https://"+document.location.host+"/receiver?receiverVersion=2"},e)}function a(){var e=m()?19:20;return r().hour(0).utc().hour(e).minute(30)}function d(){var e=r().utc();return e.isAfter(a())&&e.add("days",1),c(e.add("minutes",5))}function u(e,t){for(e.local();!t(e);)e.add("days",1);return e}function c(e){return u(e,function(e){var r=e.day();return 6!==r&&0!==r&&-1===t.indexOf(p,e.format(g))})}function m(){return r().zone()!==r().month(0).zone()}r().utc().hours()<19||19==r().utc().hours()&&r().minutes()<=30?e("#gts-o-est-ship-date").text(r().zone("-06:00").format("YYYY-MM-DD")):e("#gts-o-est-ship-date").text(r().zone("-06:00").add(1,"days").format("YYYY-MM-DD"));var p=n.getThemeSetting("noShipDates").split(","),g=(n.getThemeSetting("noFedexDeliverDates").split(","),"YYYY-MM-DD"),f={ISOCurrencyCode:"USD",CarrierIds:["fedex"],ShippingServiceTypes:["fedex_FEDEX_GROUND"],EstimatedShipmentDate:"<<TO BE REPLACED>>",OriginAddress:{Address1:n.getThemeSetting("shippingEstimatorOriginAddress1"),CityOrTown:n.getThemeSetting("shippingEstimatorOriginCity"),StateOrProvince:n.getThemeSetting("shippingEstimatorOriginState"),PostalOrZipCode:n.getThemeSetting("shippingEstimatorOriginZip"),CountryCode:n.getThemeSetting("shippingEstimatorOriginCountryCode")},DestinationAddress:{PostalOrZipCode:"<<TO BE REPLACED >>",CountryCode:"US"},IsDestinationAddressCommercial:!1,Items:[{ShipsByItself:!0,UnitMeasurements:{Weight:{Unit:"lbs",Value:10}},Quantity:1}]};e(document).ready(function(){var t=require.mozuData("order");t&&o(t.fulfillmentInfo.fulfillmentContact.address.postalOrZipCode.substring(0,5)).then(function(t){e("#gts-o-est-delivery-date").text(r().zone("-06:00").add(t,"days").format("YYYY-MM-DD")),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://www.googlecommerce.com/trustedstores/api/js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()}).catch(function(e){var t="Unable to get days in transit due to error: "+e&&e.message||e;console.warn?console.warn(t):console.log(t)})})});