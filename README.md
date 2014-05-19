SocialMedia
===========
This Application showcases implementation of Oauth2 for Google, Faceboobk and Linkedin for Kony Mobile applications.

To run this app

1. Download the project
2. Import the project to Kony Studio
3. Go to modules and open configProperties.js
4. Configure your client secret and client id that you got after registering for google or facebobok or linkedIn 
5. Build and run the app for iphoen or android from Kony Studio


configPropeties.js:

// configure your client id and secret here

FBConfig = { "clientID" : "<your client id>", // Client ID obtained from FB app console
              "clientSecret" : "<your client secret>>", // client secret obataiend from FB appconsole
              "state" : "abcd", // any unique identifier
              "scope" :"public_profile,email,user_friends", //this is default scope
              "redirectURL" :"http://localhost:8080/" // redirect url setup in FB app console
	}
	
GoogleConfig = { "clientID" : "<your client id>",// Client ID obtained from Google app console
              "clientSecret" : "<your client secret>>", // client secret obataiend from Google appconsole
              "state" : "abcd", // any unique identifier
              "scope" :"profile email", // this is default scope
              "redirectURL" :"http://localhost:8080" // redirect url setup in google app console
	}
	
LinkedInConfig  = { "clientID" : "<your client id>",// Client ID obtained from Google app console
              "clientSecret" : "<your client secret>>", // client secret obataiend from Google appconsole
              "state" : "abcd",// any unique identifier
              "scope" :"r_basicprofile", // this is default scope
              "redirectURL" :"http://localhost:8080/" // redirect url setup in google app console
  }


Supported Platforms:

1. iPhone Native
2. Android Native
