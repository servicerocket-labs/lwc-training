# Lightning Web Component Training
## Get Started

### Requirements
1. Install [yarn](https://classic.yarnpkg.com/en/docs/install/).
1. Install [Visual Studio Code](https://code.visualstudio.com/download) (VSC).
1. Install [Salesforce Extension Pack](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode) for VSC.

### Setting Up Salesforce Developer Account
1. Create a Salesforce developer account [here](https://developer.salesforce.com/signup).
1. Set up your Salesforce developer domain in **Setup > My Domain** define and deploy a Salesforce domain.

### Setting Up Local Environment
1. Run this command to install all the required dependencies.
	```bash
	$ yarn install
	```
1. Run this command to install the local development tools.
	```bash
	$ yarn sfdx:dev:setup
	```
1. Setup your Salesforce credential (using browser or `SFDX Auth Url`).
	- Using browser:
		1. Run this command and login to your organization from the browser.
			```bash
			$ yarn sfdx:login:web
			```
	- Using `SFDX Auth Url`:
		1. Setup your credentials on your local (one time only)
			1. Run this command and login to your organization from the browser.
				```bash
				$ yarn sfdx:login:web
				```
			1. Run this command and you will see your logged in Salesforce Organization details including your `SFDX Auth Url`. You need to copy the value of `SFDX Auth Url` from the output. e.g: `force://<clientId>::<AccessToken>@<instanceUrl>`
				```bash
				$ yarn sfdx:dev:org
				```
			1. Paste the value in a new file named `.sfdxCredential` and save at the root of this project.
			1. Logout from the Salesforce Organization (because it was logged in using browser).
		1. Login using this command.
			```bash
			$ yarn sfdx:login
			```

### Start LWC local development
1. Run this command to start LWC local development.
	```bash
	$ yarn sfdx:dev:lwc
	```

## Available Commands
1. `sfdx:browser` 		: Open the Salesforce org on your default browser.
1. `sfdx:dev:lwc`			: Start LWC local development at http://localhost:3333.
1. `sfdx:dev:org`			: Show the details of the current logged in Salesforce Organization.
1. `sfdx:dev:setup`		: Install the local development tools plugins in `SFDX`.
1. `sfdx:deploy`  		: Deploy changes to Salesforce Organization.
1. `sfdx:login`   		: Login to Salesforce Organization using `SFDX Auth Url`.
1. `sfdx:login:list`	: Show all the current logged in account.
1. `sfdx:login:web` 	: Login to Salesforce Organization using web browser.
1. `sfdx:logout`  		: Logout from Salesforce Organization.