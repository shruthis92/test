define(["modules/jquery-mozu","modules/api","underscore"],function(e,t,n){var o=function(t,n){return e.each(t,function(e,t){var o="(\\[\\[(?:\\s+)?"+e.toLowerCase()+"(?:\\s+)?\\]\\])",a=new RegExp(o,"gi");n=n.replace(a,t)}),n.replace(/(\[\[[\s\S]+?\]\])/gi,"")};e(document).ready(function(){e("[data-mz-packages-list-widget]").each(function(){var a=e("#mz-packages-list-template").html(),c=e(this);t.get("categories",{filter:"content.name cont Packages"}).then(function(t){window.cats=t,console.log(window.cats);var r=n.map(t,function(e){return e.prop("isDisplayed")?{name:e.prop("content").name,description:e.prop("content").description,images:e.prop("content").categoryImages,catID:e.prop("categoryId"),img:"/resources/images/lps/packages/thumb-"+e.prop("categoryId")+".jpg",url:"/c/"+e.prop("categoryId")}:void 0});e.each(r,function(e,t){c.append(o(t,a))})})})})});