(function() {

	window.router = Grapnel.listen({
		"contact": controllers.ContactController.index,
		"projects": controllers.ProjectController.index
	});

	if (window.location.hash === "") {
		window.router.navigate("contact");
	}
}());
