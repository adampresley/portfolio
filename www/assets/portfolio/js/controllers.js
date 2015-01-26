/**
 * Controller for the index page
 */
controllers.IndexController = {
	index: function(request) {
		var self = this;

		services.Util.render("home", {});
	}
};
