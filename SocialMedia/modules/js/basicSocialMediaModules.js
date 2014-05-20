/*----------------------------------------------------------------------------------------------------------------------------------------------
*	Name    : loginAccountAuth
*	Author  : Kony Inc.
*	Purpose : Login with social network [Facebook, Google and Twitter], 
------------------------------------------------------------------------------------------------------------------------------------------------*/
var fbAcessToken="";
var btnId;

function loginAccountAuth(eventObj)
{
	btnId=eventObj.id;
	var deviceInfo = kony.os.deviceInfo().name; // get Device name
	if(eventObj.id == "btnFacebook")
	{	
		//check if client id and secret are configured
		if(chkIfPropertiesConfigured("FB")){
			var fbURL="https://www.facebook.com/dialog/oauth?response_type=code&client_id="+FBConfig.clientID+"&redirect_uri="+FBConfig.redirectURL+"&state="+FBConfig.state+"&scope="+FBConfig.scope;	
			frmProfileBrowser.brwsrId.requestURLConfig ={ "URL":fbURL,"requestMethod": constants.BROWSER_REQUEST_METHOD_GET};
	   		frmProfileBrowser.brwsrId.handleRequest = handleFBLogin;
		
		}else{
			alert("Please configure your client id and secret in the configProperties.js module!!!");	
			return false;
		
		}
		 
		
	}
	
	else if(eventObj.id == "btnGoogle")
	{	
		if(chkIfPropertiesConfigured("Google")){
			var googleURL = "https://accounts.google.com/o/oauth2/auth?response_type=code&approval_prompt=force&client_id="+GoogleConfig.clientID+"&redirect_uri="+GoogleConfig.redirectURL+"&scope="+GoogleConfig.scope+"&state="+GoogleConfig.state;	    	
			frmProfileBrowser.brwsrId.requestURLConfig ={ "URL": googleURL,"requestMethod": constants.BROWSER_REQUEST_METHOD_GET };	
			frmProfileBrowser.brwsrId.handleRequest = handleGoogleLogin; 
		}else{
			alert("Please configure your client id and secret in the configProperties.js module!!!");	
			return false;
		}   
	}
	
	else if(eventObj.id == "btnLinkedIn")
	{	
	
		if(chkIfPropertiesConfigured("LinkedIn")){
			var linkurl = "https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id="+LinkedInConfig.clientID+"&scope="+LinkedInConfig.scope+"&state="+LinkedInConfig.state+"&redirect_uri="+LinkedInConfig.redirectURL;	    	
			frmProfileBrowser.brwsrId.requestURLConfig = {"URL": linkurl,"requestMethod": constants.BROWSER_REQUEST_METHOD_GET};	
			frmProfileBrowser.brwsrId.handleRequest = handleLinkedinLogin; 	    
		}else{
			alert("Please configure your client id and secret in the configProperties.js module!!!");	
			return false;
		
		}
		
	}
	
	frmProfileBrowser.show();		    
}


/*----------------------------------------------------------------------------------------------------------------------------------------------
*	Name    : handleLinkedinLogin
*	Author  : Kony Inc.
*	Purpose : In this function we handle browser oauth2 redirect request and call linkedin api to exchange code for access token
------------------------------------------------------------------------------------------------------------------------------------------------*/
function handleLinkedinLogin(browserWidget,params){

		if(  params ["originalURL"].search("accounts.google.com")==-1 && params ["queryParams"]!=undefined)
  		{	
  			
        var linkedinaccessurl = "https://www.linkedin.com/uas/oauth2/accessToken";
        var inputParamTable={};
        var headers ={};
  		headers["Content-Type"] = "application/x-www-form-urlencoded";
	   	inputParamTable["httpheaders"]=headers;
	   	inputParamTable["client_id"]=LinkedInConfig.clientID;
	   	inputParamTable["client_secret"]=LinkedInConfig.clientSecret;
	   	inputParamTable["redirect_uri"]=LinkedInConfig.redirectURL;
	   	inputParamTable["grant_type"]="authorization_code";
	   	inputParamTable["code"]=params ["queryParams"] ["code"];
	   	inputParamTable["channel"]="rc";
	   	var connHandle = kony.net.invokeServiceAsync(linkedinaccessurl,inputParamTable,callbackfunctionLinkedIn);                                                           
  		}else return false;
}

/*----------------------------------------------------------------------------------------------------------------------------------------------
*	Name    : handleFBLogin
*	Author  : Kony Inc.
*	Purpose : In this function we handle browser oauth2 redirect request and call FB api to exchange code for access token
------------------------------------------------------------------------------------------------------------------------------------------------*/

function handleFBLogin(browserWidget,params)
{
	
		if( params ["originalURL"].search("accounts.google.com")==-1 && params["queryParams"]["code"]!=undefined)
  		{	
  			fbURLAccessTokenURL = "https://graph.facebook.com/oauth/access_token?client_id="+FBConfig.clientID+"&redirect_uri="+FBConfig.redirectURL+"&client_secret="+FBConfig.clientSecret+"&code="+params["queryParams"]["code"];
			  	var response = networkCall(fbURLAccessTokenURL, "GET",null,null);
			  	kony.print("\n\n\n---fbURLAccessTokenResponse-->"+JSON.stringify(response));
			  	if(response!= null)
			  	{
				  	var response1 = _parseQuerystring("" + response);
				  	kony.print(":--JS Received Data response1-->" + JSON.stringify(response1));
				  	fbAcessToken = response1["access_token"];
				  	getProfileData(response1);
					return true;
				}
  		}
   		else return false;
}


/*----------------------------------------------------------------------------------------------------------------------------------------------
*	Name    : handleGoogleLogin
*	Author  : Kony Inc.
*	Purpose : In this function we handle browser oauth2 redirect request and call Google api to exchange code for access token
------------------------------------------------------------------------------------------------------------------------------------------------*/
function handleGoogleLogin(browserWidget,params)
{
	inputParamTable={};
	
	    if( params ["originalURL"].search("accounts.google.com")== -1 && params["queryParams"]!= undefined){
	   kony.print("\n---code---->"+JSON.stringify(params));
	    inputParamTable["code"]=params["queryParams"]["code"];
    try{
 		 kony.timer.schedule("timerid", executeTimerGoogle, 1, false);
  		}
 	 catch(err){
   		 kony.print("Timer already exists!!");
	  	}
	  }
  		else return false;
}



function executeTimerGoogle()
{
kony.print("\n\n:--in execute timer google\n");
var googleURLAccessTokenURL = "https://accounts.google.com/o/oauth2/token";
  var headers ={};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  headers["Host"] = "accounts.google.com";
 
  var myhttpheaders={authkey:"myauthkey", authtoken:"myauthtoken"};
inputParamTable["httpheaders"]=headers;
inputParamTable["client_id"]=GoogleConfig.clientID;
inputParamTable["client_secret"]=GoogleConfig.clientSecret;
inputParamTable["redirect_uri"]=GoogleConfig.redirectURL;
inputParamTable["grant_type"]="authorization_code";
inputParamTable["channel"]="rc";
var connHandle = kony.net.invokeServiceAsync(googleURLAccessTokenURL,inputParamTable,callbackfunction);
  kony.print("\n\n:--url is-->\n"+JSON.stringify(inputParamTable));
//  return true;
}


	
function callbackfunction(status, resulttable)
{
	var segdata =[];
	if(status==400)
	{
		if(resulttable["access_token"]!= null && resulttable["access_token"]!= undefined)
		{
			var access_token = resulttable["access_token"];
			
			var googleURL= "https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token="+access_token ;
			var response = networkCall(googleURL, "GET", null, null);
			showAppData(response);
		}
	}
}

function callbackfunctionLinkedIn(status, resulttable)
{
	if(status==400)
	{
		if(resulttable["access_token"]!= null && resulttable["access_token"]!= undefined)
		{
			var headers ={};
  			headers["x-li-format"] = "json";
			var access_token = resulttable["access_token"];
			var linkedInUrl= "https://api.linkedin.com/v1/people/~:(id,first-name,last-name,headline,picture-url,public-profile-url)?oauth2_access_token="+access_token ;
			var response = networkCall(linkedInUrl, "GET", headers, null);
			showAppData(response);
		}
	}
}

function getProfileData(response)
{
	fbAcessToken=response["access_token"];
	var fBdataURL = "https://graph.facebook.com/me?access_token="+fbAcessToken;
	var response2 = networkCall(fBdataURL, "GET",null,null);
	if(response2 != null)
	{
		frmShowOptions.profileImg.src = "http://graph.facebook.com/"+response2["id"]+"/picture"
		showAppData(response2);
	}
}
function showAppData(response)
{
	//error_loading.png
	
	segData = [];
	
	if(response["name"]!=null && response["name"]!=undefined)
	{
		segData.push({"lblKey" : "Name","lblValue":response["name"]});
		frmShowOptions.lblUsername.text = response["name"];
	}else if((response["firstName"]!=null && response["firstName"]!=undefined )&& (response["lastName"]!=null && response["lastName"]!=undefined ))
	{
		segData.push({"lblKey" : "Name","lblValue":response["firstName"]+" "+response["lastName"]});
		frmShowOptions.lblUsername.text= "Name: "+	response["firstName"]+" "+response["lastName"];
	}
	if('email' in response) segData.push({"lblKey" : "Email","lblValue":response["email"]});
	if('gender' in response) segData.push({"lblKey" : "Gender","lblValue":response["gender"]});
	
	if('family_name' in response) segData.push({"lblKey" : "family_name","lblValue":response["family_name"]}); 
	if('given_name' in response) segData.push({"lblKey" : "given_name","lblValue":response["given_name"]});
	if('headline' in response){
		frmShowOptions.lblHeadLine.text = response["headline"];
		segData.push({"lblKey" : "HeadLine","lblValue":response["headline"]});
	}else frmShowOptions.lblHeadLine.text = "";
	 
	if('link' in response)
	{ 
		frmLoginSuccess.hbxLinkLbl.setVisibility(true);
		frmLoginSuccess.lblLinkText.text = "Click below link to see more info:";
		frmLoginSuccess.linkProfile.text = response["link"];
	}else if('publicProfileUrl' in response){
		frmLoginSuccess.hbxLinkLbl.setVisibility(true);
		frmLoginSuccess.lblLinkText.text = "Click below link to see more info:";
		frmLoginSuccess.linkProfile.text = response["publicProfileUrl"];	
	}else frmLoginSuccess.hbxLinkLbl.setVisibility(false);
	
	if('picture' in response)frmShowOptions.profileImg.src = response["picture"];
	else if('pictureUrl' in response) frmShowOptions.profileImg.src = response["pictureUrl"];
	else frmShowOptions.profileImg.src ="error_loading.png" ;			
	frmLoginSuccess.segFBProfileData.setData(segData);
	frmShowOptions.show();
	kony.application.dismissLoadingScreen();
}

/*----------------------------------------------------------------------------------------------------------------------------------------------
*	Name    : onSuccessResponse
*	Author  : Kony Inc.
*	Purpose : onSuccessResponse function will trigger after getting successful response in browser widget . 
------------------------------------------------------------------------------------------------------------------------------------------------*/	
function onSuccessResponse(browser)
{
	//alert("on success");
	kony.application.dismissLoadingScreen();
}

/*----------------------------------------------------------------------------------------------------------------------------------------------
*	Name    : onFailureResponse
*	Author  : Kony Inc.
*	Purpose : onFailureResponse function will trigger after getting failure response in browser widget. 
------------------------------------------------------------------------------------------------------------------------------------------------*/
function onFailureResponse(browser)
{
	//alert("on failure");
	frmProfileBrowser.brwsrId.htmlString = "<html> <body> </br> Unable to reach host/Service Unavailable . Please check network connectivity. </br> </body> </html>"
		kony.application.dismissLoadingScreen();
}

// Setting user public information of social network that we get after login to respective account.
function frmLoginSuccessPreShow()
{		
	frmLoginSuccess.segFBProfileData.setData(segData);// segData array object is defined in launchParams() function.
}

var _parseQuerystring = function(queryString) {
  	var params = {}, queries, temp, i, l;
  	queries = queryString.split("&");
  	for (i = 0, l = queries.length; i < l; i++) {
    	temp = queries[i].split('=');
    	params[temp[0]] = temp[1];
  	}
  	return params;
};


function appLogOut()
{
	switch(btnId)
	{
		case "btnFacebook":fbLogout();break;
		case "btnGoogle":googleLogout();break;
		case "btnLinkedIn":frmLoginOptions.show();
	}
	frmProfileBrowser.show();
}

function fbLogout()
{
	
	fbLogoutUrl="https://www.facebook.com/logout.php?next=http://localhost:8080/&access_token="+fbAcessToken;
	
	frmProfileBrowser.brwsrId.requestURLConfig ={ "URL":fbLogoutUrl,"requestMethod": constants.BROWSER_REQUEST_METHOD_GET};
	frmProfileBrowser.brwsrId.handleRequest=handleLogout;
}


function googleLogout()
{
	gLogOutUrl="https://www.google.com/accounts/Logout";
	frmProfileBrowser.brwsrId.requestURLConfig ={ "URL":gLogOutUrl,"requestMethod": constants.BROWSER_REQUEST_METHOD_POST};
	frmProfileBrowser.brwsrId.handleRequest=handleLogout;
}

function handleLogout(browserWidget,params){
		fbAcessToken="";
		frmLoginOptions.show();	
}