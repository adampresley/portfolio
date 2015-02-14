(function() {
	"use strict";

	controllers.ContactController = {
		index: function(request) {
			services.Util.render("contact");
		}
	};
}());
