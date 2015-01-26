/**
 * Helper for formatting a date
 */
Handlebars.registerHelper("formatDate", function(date) {
	return services.Util.formatDate(date);
});

/**
 * Helper for formatting a decimal string as money
 */
Handlebars.registerHelper("formatMoney", function(value) {
	return "$" + value;
});

