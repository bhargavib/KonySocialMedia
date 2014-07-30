// configure your client id and secret here

FBConfig =
	{ 
          "clientID" : "<Enter Client ID>", // Client ID obtained from FB app console
          "clientSecret" : "<Enter Client Secret>", // client secret obataiend from FB appconsole
          "state" : "abcd", // any unique identifier for your application (optional but recommended)
          "scope" :"public_profile,email,user_friends,publish_actions", //this is scope
          "redirectURL" :"http://localhost:8080/" // redirect url setup in FB app console
	}
	
GoogleConfig =
	{ 
         "clientID" : "<Enter Client ID>",// Client ID obtained from Google app console
          "clientSecret" : "<Enter Client Secret>", // client secret obataiend from Google appconsole
          "state" : "abcd", // any unique identifier for your application (optional but recommended)
          "scope" :"profile email", // this is default scope
          "redirectURL" :"http://localhost:8080" // redirect url setup in google app console
	}
	
LinkedInConfig =
	{ 
         "clientID" : "<Enter Client ID>",// Client ID obtained from Google app console
          "clientSecret" : "<Enter Client Secret>", // client secret obataiend from Google appconsole
          "state" : "abcd",// any unique identifier for your application (optional but recommended)
          "scope" :"r_basicprofile", // this is default scope
          "redirectURL" :"http://localhost:8080/" // redirect url setup in google app console
    }
    
