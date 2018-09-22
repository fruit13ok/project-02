# Project 2: foodie
##### by Alan Duncan, Francisco Sandoval, Wai Ka Wong Situ, and Yi Liu
## foodie is ...

## Technologies Used
- __Django__: Core framework for Python.
- __PostgreSQL__: Our database in development and production.
- __Data Models__: 
- __Data Validation__: Validate incoming data before entering it into the database.
- __Error Handling__: Validate form data, handle incorrect inputs, and provide user feedback on the client side.
- __Views__: Use partials to follow DRY development in our views.
- __Home Page__: Homepage that explains our app's value proposition and guides the user.
- __About Page__: About page that includes photos and brief bios of our team members
- __User Experience__: Ensure a pleasing and logical user experience. Use a framework like Bootstrap to enhance and ease our CSS styling.
- __Responsive Design__: Make sure our app looks great on a phone or tablet.
- __Heroku__: Deploy our app to Heroku. Ensure no app secrets are exposed. Do not commit secret keys to GitHub!

- __User Login__: Use Django user authentication and authorization.
- __AJAX__: Use AJAX to communicate with the server without reloading the page when appropriate.
- __External APIs__: Third-party APIs: [Zomato link](https://developers.zomato.com/documentation#/), [Yelp link](https://www.yelp.com/developers/documentation/v3/business_search).
- __JavaScript & jQuery__: Add dynamic client-side behavior with event-driven functionality.
- __User-Friendly URLs__:.


## Sprint 1:
- project planning approval
- user authentication
- openstreetmap/leaflet api
- zomato api

## Sprint 2:
- base (header and footage), landing page, user profile, results (map and restaurant list), and about templates
- create models
- set up database
- CRUD users, reviews

## Sprint 3:
- jQuery animations
- Bootstrap, Fontawesome
- customize icons/pins on map
- selected restaurant modal

## Sprint 4:
- add restaurant rating
- add price range indicator for restaurants
- add distance radius
- style website

## Sprint 5:
- create About page and readme
- finalize app name
- add loading/splash page
- deploy to heroku


## Our progress:
### 9-17-2018
- Came up with app idea
- Set up git repo
- Created models, views, and urls

### 9-18-2018
- Seeded database with cuisine types and IDs from Zomato API
- Created About page
- Added user authentication
- Created base and index templates

### 9-19-2018
- Added map from leaflet
- Fixed registration form and began updating profile form
- Converted styling to Sass
- Added dropdown profile info box
- Research food / restaurant related api
- Create Trollo
- Create sprint
- create wireframe
- Create user story

### 9-18-2018
- Create github repo
- Create ERD
- Check in with teacher got aprovel
- create database and seed

### 9-19-2018
- User Profile figured out
- Map on results page up and running
- Home page template finished
- Database connects user and empty userprofile

### 9-20-2018
- Check box for prefrences https://stackoverflow.com/questions/1760421/how-can-i-render-a-manytomanyfield-as-checkboxes
- User Reviews
- Sent an array of prefrence id's to app.js

### 9-21-2018
- Getting User Reviews on everyone's projects was difficult but we had to drop our databases and start over for it to work.
- In order to get some changes we learned that we have to clear our cache.
- Most of our features are done, but we had to form a clear plan for our remaining time.

### 9-22-2018
- Saved restaurants on user profiles
- Review button for those restaurants
- Html Scroll bar for displayed restaurants on generator page
- User does not need to update profile at all in order to find and save restaurant

## Challenges/Successes

### Challenges
- Getting prefrences on Userprofile to show up as check boxes
- Sending Json from back end to front end
- User reviews to show up on userprofile
- Trouble shooting and debugging

### Successes
- Getting database set up quickly
- Finally setting up the checkbox field for userprofile's prefrences https://stackoverflow.com/questions/1760421/how-can-i-render-a-manytomanyfield-as-checkboxes
- Being able to intentionally break our code to find errors and fix them
