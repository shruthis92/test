define(["modules/jquery-mozu"],function(e){e(document).ready(function(){e('[data-mz-role="contact-form"]').each(function(){var a=e(this);a.on("submit",function(n){n.preventDefault();var o=a.prop("action");o+=-1!==o.indexOf("?")?"&":"?",e.getJSON(o+a.serialize()+"&callback=?").then(function(e){"OK"===e?a.html("<h3>Thank you! You should receive a confirmation shortly.</h3"):a.append('<span class="mz-validationmessage">Sorry, an error occurred. Please make sure all fields are filled out!</span>')})})})})});