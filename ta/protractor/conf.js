exports.config = {
	seleniumAddress : 'http://localhost:4444/wd/hub',

	suites : {
		local_smoke: [
			'suites/smoke/local_*.js'
		]
	},

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