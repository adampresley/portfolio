controllers.ContactController = {
	index: function(request) {
		services.Util.render("contact", {});
	}
};

controllers.ProjectController = {
	index: function(request) {
		services.Util.render("projects", {});
	}
};
