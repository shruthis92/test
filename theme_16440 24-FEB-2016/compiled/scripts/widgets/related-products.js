define(["modules/jquery-mozu","underscore","modules/api","modules/backbone-mozu","modules/models-product"],function(e,t,r,o,a){var u=function(e,o,a){var u=t.map(o,function(e){return"ProductCode eq "+e}).join(" or "),n="";return n=r.get("search",{filter:u,pageSize:a})},n=require.mozuData("pagecontext");e(document).ready(function(){var r=[];switch(n.pageType){case"product":r.push(require.mozuData("product"));break;case"cart":var i=require.mozuData("cart").items;e.each(i,function(e,t){r.push(t.product)})}e("[data-mz-upsells]").each(function(i,c){c=e(c);for(var s=c.data("mz-upsells"),l=s.attributeId||"tenant~product-crosssell",d="widgets/product-upsells/product-upsells-list",p=(s.title,s.count||5),m=[],h=e(this),v=o.MozuView.extend({templateName:d,render:function(){o.MozuView.prototype.render.apply(this,arguments),e(".mz-product-carousel__list").owlCarousel({items:5,navigation:!0,navigationText:!1,theme:"mz-product-carousel-widget",lazyLoad:!0}).noFlickerFadeIn()}}),f=function(e){return!!e},g=0;g<r.length;g++){var z=r[g];if(z&&z.properties)for(var w=0;w<z.properties.length;w++)if(z.properties[w].attributeFQN==l){var b=t.pluck(z.properties[w].values,"value");m=m.concat(e.grep(b||[],f))}}return m&&m.length?(h.closest(".mz-product-carousel").show(),u(n.pageType,m,p).then(function(e){var t=new a.ProductCollection(e.data),r=new v({model:t,el:c});r.render()}),void 0):(n.isEditMode&&c.html("<b>On a live Product page, related products will render here.</b>"),void 0)})})});