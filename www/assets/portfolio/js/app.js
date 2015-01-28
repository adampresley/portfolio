(function() {

	window.router = Grapnel.listen({
		"contact": controllers.ContactController.index
	});

	if (window.location.hash === "") {
		window.router.navigate("contact");
	}
}());
