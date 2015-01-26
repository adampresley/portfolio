(function() {

	window.router = Grapnel.listen({
		"home": controllers.IndexController.index
	});

}());
