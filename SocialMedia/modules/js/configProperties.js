// configure your client id and secret here

FBConfig =
	{ 
          "clientID" : "777403935632811", // Client ID obtained from FB app console
          "clientSecret" : "144a4b23c2181acabf81293bf7f37162", // client secret obataiend from FB appconsole
          "state" : "abcd", // any unique identifier for your application (optional but recommended)
          "scope" :"public_profile,email,user_friends", //this is default scope
          "redirectURL" :"http://localhost:8080/" // redirect url setup in FB app console
	}
	
GoogleConfig =
	{ 
         "clientID" : "916193204515.apps.googleusercontent.com",// Client ID obtained from Google app console
          "clientSecret" : "wPaJyozPigSfKEO1SHL5DDP_", // client secret obataiend from Google appconsole
          "state" : "abcd", // any unique identifier for your application (optional but recommended)
          "scope" :"profile email", // this is default scope
          "redirectURL" :"http://localhost:8080" // redirect url setup in google app console
	}
	
LinkedInConfig =
	{ 
         "clientID" : "77m9gsdht9h8ud",// Client ID obtained from Google app console
          "clientSecret" : "aMVjxBqL9TYWaFkm", // client secret obataiend from Google appconsole
          "state" : "abcd",// any unique identifier for your application (optional but recommended)
          "scope" :"r_basicprofile", // this is default scope
          "redirectURL" :"http://localhost:8080/" // redirect url setup in google app console
    }
    
