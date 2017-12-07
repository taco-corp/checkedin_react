# CheckedIn_React
Final Project for UNC Coding School

## Team Members:
* **Jon Riddick** - GitHub: [Jon Riddick](https://github.com/jonriddick)
* **Zeynep Dayar** - GitHub: [Zeynep Dayar](https://github.com/zdayar)
* **Kristin Glaze** - GitHub: [Kristin Glaze](https://github.com/kiglaze)
* **Steve Murphy** - GitHub: [Steve Murphy](https://github.com/stevemurphy256)

## Project Description

CheckedIn_React is a full-stack MERN app developed to assist event Organizers and Hosts with the task of networking with their event Attendees. The app uses the Passport Linkedin OAuth 2.0 library to retrieve user profile information for both the Host as well as the Attendees and populate a Mongo Database. Once the event is complete the Host can easily retrieve the Linkedin contact information for any or all of their Attendees and connect with them on Linkedin.

## Getting Started on your local machine

- Clone this repo to your computer.
- Make sure you have Mongo Database running before attempting to start the app.
- Navigate to the project folder and run `yarn install`.
- Change directory into the `client` folder and run `yarn install` again.
- Change back into the project folder and run `yarn start`.
- The app should open in the browser.
- You can open your browser and navigate to localhost:3000, alternatively.
- You will need to obtain the following credentials: `LINKEDIN_CLIENT_ID` and `LINKEDIN_CLIENT_SECRET` from https://developer.linkedin.com/#



## Technologies used
- MongoDB
- Express
- ReactJS
- Node
- Axios
- Mongoose
- Express Session

## Demo Screenshots
Start here: Login Page
![Event Host Login](client/public/assets/img/login.png)
Clicking on the login button creates a local account and contacts linkedin.

--------------------------------------------------------------------

Linkedin Page
![Linkedin Login](client/public/assets/img/linkedin.png)
Enter LinkedIn credentials.

--------------------------------------------------------------------

Linkedin Permissions Page
![Linkedin Permissions](client/public/assets/img/permissions.png)
Authorize LinkedIn permissions.

--------------------------------------------------------------------

Once the host is logged in they go to the Home page:
![User Home](client/public/assets/img/home.png)
The Host can view all the events they have hosted or attended as well as any Attendee they have saved from a previous event. To create a new event click on the `Create New Event` button.

--------------------------------------------------------------------

The Event Page:
![Event](client/public/assets/img/event.png)
Clicking on the `CheckIn with LinkedIn` button adds them to your event. Clicking on the `Visit on LinkedIn` button takes you to their Linkedin page so they can be added to your network.

--------------------------------------------------------------------

## MongoDB and mongoose
The app uses 2 schemas, Event and User. 

The Event collection is populated with the input form on the Create Event page and includes an array to save attendees from hosted events.

The User collection is populated with profile information retrieved from the Linkedin server using the `Passport Linkedin OAuth2.0 library.




## WEBSITE LINK

http://www.checkedinapp.herokuapp.com



## Special Thanks!
Team Taco Corp would like to thank our instructor, Andre Asselin
and our TA's Kevin Collins and Joseph Depompeis for their invaluablble help. Especially Kevin who never complained once about a late night hangout!


