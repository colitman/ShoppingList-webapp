exports.config = {
	seleniumAddress : 'http://localhost:4444/wd/hub',

	suites : [
		smoke: [
			'spec.js'
		]
	],

	capabilities: {
		'browserName': 'chrome'
	},

	baseUrl: 'http://localhost:8080',

	onPrepare: function() {
		browser.ignoreSynchronization = true;
	},

	jasmineNodeOpts: {
		showColors: true
	}
};