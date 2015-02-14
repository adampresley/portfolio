(function() {
	"use strict";

	controllers.SkillsController = {
		index: function(request) {
			services.Util.render("skills");
		}
	};
}());