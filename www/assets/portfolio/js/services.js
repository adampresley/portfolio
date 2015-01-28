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
	},

	setMenuItemAsCurrent: function(menuItem) {
		var menuItems = document.getElementsByClassName("menuItem");

		for (var index = 0; index < menuItems.length; index++) {
			document.getElementById(menuItems[index].id).classList.remove("pure-menu-selected");
		}

		document.getElementById(menuItem + "Menu").classList.add("pure-menu-selected");
	},

	setPageTitle: function(title) {
		document.getElementById("pageTitle").innerHTML = title;
	}
};

