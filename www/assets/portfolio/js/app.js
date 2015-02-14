(function() {

	window.router = Grapnel.listen({
		"contact": controllers.ContactController.index,
		"projects": controllers.ProjectController.index,
		"skills": controllers.SkillsController.index
	});

	window.router.bind("navigate", function(e) {
		window.scrollTo(0, 0);
	});

	if (window.location.hash === "") {
		window.router.navigate("contact");
	}
}());
