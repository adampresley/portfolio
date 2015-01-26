services.Util = {
	render: function(template, data, callback) {
		services.Util.renderTo("content", template, data, callback);
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

