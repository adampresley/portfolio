(function() {
	"use strict";

	controllers.ProjectController = {
		index: function(request) {
			services.Util.render("projects");
		}
	};
}());