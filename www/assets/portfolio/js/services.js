services.Util = {
	render: function(template, data, callback) {
		services.Util.renderTo("content", template, data, callback);
	},

	renderTo: function(el, template, data, callback) {
		$.get("/assets/portfolio/templates/" + template + ".hbs", function(response) {
			var compiledTemplate = Handlebars.compile(response);
			document.getElementById(el).innerHTML = compiledTemplate(data);

			if (callback !== undefined) {
				callback();
			}
		});
	}
};

