# QR-Tally
The readme was made with consideration that you have no coding experience and just want to host/run this code. 

QR-Tally is a web application that allows users to track how many QR codes they have scanned. It's built with Node.js and Express on the backend, and uses a Google Spreadsheet API to store user data. And was hosted for free on heroku under the Career day. 

This was made under a week to be a simple, and free solution for a career fair. It was used to track how many students visit each stand and we'd be able to award them with giftcards.

We used Bulk generated QR codes, which would look like https.[Host-service/DNS].com/?[GUIDs as Stand ID], and 
https://qr-tally-ad0cc0247ef7.herokuapp.com/?bc763c89-a96c-4feb-962e-9dc48978454f

Some of the logic behind the statistics of the event was offloaded to the spreadsheet. look: 
https://docs.google.com/spreadsheets/d/1JrGFQ8bbXbCeUrXV0UUVOrRnZnUoyc7jdeOrmxwjh0A/edit?pli=1#gid=689622168

Sheet1 is where the Google API points to, GUIDs was used to generate the stand ID value and to confirm if the Stand value in Sheet1 is valid. Stats ranks each student and company
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need to have Node.js and npm installed on your machine. You can download them [here](https://nodejs.org/en/download/).

You will need your prefered IDE, VS code, Sublime text. Just something to intract with the code. You could also drop this and just use CMD(command prompt/ledetekst)

You will need a Heroku account with Heroku CLI Downloaded, if you plan to deploy and host your server from there. (https://www.heroku.com/)

You will need your own service account key from google cloud. 

You need to change spreadsheetId in api.js line 29 to point to your own spreadsheet. (remember to add the service account email as an editor into your spreadsheet)

To edit code you need to open it using your IDE, and change it.
To change the Service account key you just need to past the new one into the old's directory and delete the old. 

### Creating Service account key (https://console.cloud.google.com/)
You will need your own Google Service Account key file, then replace it with service-account-key.json.

here are the steps to create a new project in Google Cloud and generate a service account key:

Go to the Google Cloud Console.

In the top bar, click on the dropdown next to "Google Cloud Platform" and click on "New Project".

Enter a project name, and optionally, edit the project ID and location. Then click "Create".

Once the project is created, select it from the dropdown in the top bar.

In the left sidebar, go to "IAM & Admin" > "Service Accounts".

Click on "Create Service Account".

Enter a name and description for the service account, then click "Create".

On the "Service account permissions" page, add any necessary roles to the service account. For example, if you're using Google Sheets API, you might add the "Editor" role. Then click "Continue".

On the "Grant users access to this service account" page, you can optionally add users who can manage the service account. Then click "Done".

You'll be redirected to the service accounts page. Find the service account you just created, and in the "Actions" column, click on the three dots and select "Manage keys".

Click on "Add Key" and select "JSON".

The JSON key file will be automatically downloaded. This is your service account key. Store it securely and do not share it publicly.

Remember to enable the necessary APIs (like Google Sheets API) for your project in the "APIs & Services" > "Library" section of the Google Cloud Console.


### Installation for localhost (require Git)

1. Clone the repo

git clone https://github.com/Drillbeary/QR-Tally.git

2. Install dependencies
npm install

3. Start the server in http://localhost:3000
npm start

Then, open your web browser and navigate to http://localhost:3000 to start using the application.


### Hosting on Heroku (require Heroku CLI)
To host your app on Heroku, follow these steps:

1. Install the Heroku CLI on your machine. You can download it from [here](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).

2. Open your terminal and log in to your Heroku account using the command:
heroku login

3. Navigate to your project directory using the command: (to where you've downloaded the repository)
cd /path/to/your/project

4. Initialize a Git repository in your project directory if it's not already a Git repository. You can do this using the commands:

git init 
git add . 
git commit -m "Initial commit"


5. Create a new Heroku app using the command:
heroku create


6. Push your code to the Heroku remote using the command:
git push heroku main


