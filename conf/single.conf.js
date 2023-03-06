
LT_USERNAME = process.env.LT_USERNAME || "<your username>";
LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "<your accessKey>";

exports.capabilities = {
	"browserName": "Chrome",
  'version': 'latest',
	"LT:Options": {
		"username": LT_USERNAME,
		"accessKey": LT_ACCESS_KEY,
		"visual": true,
		"platformName": "Windows 10",
		"build": "User journey woocommerce",
		"project": "Automate user journey",
		"name": "Garaulion",
		"tags": ["test", "garaulion"],
		"w3c": true,
		"plugin": "node_js-mocha"
	},
  'visual': false,  // To take step by step screenshot
  'network':false,  // To capture network Logs
  'console':false, // To capture console logs.
  'tunnel': false // If you want to run the localhost than change
};