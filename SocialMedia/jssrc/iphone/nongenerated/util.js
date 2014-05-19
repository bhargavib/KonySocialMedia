/*

*	Name    : launchParams
*	Author  : Kony Inc.
*	Purpose : Returns the frmMain if launched from third party app.
			  Returns frmIntro if launched normally from device.
			  Sets the label text accordingly and displays the parameters if launched from third party app.
--*/
function launchParams(params) {
    //The line below displays how an application is launched: Normal, Push, URL	
    if (params.launchmode == 1) {
        labelText = "You have launched this native app from the device.";
        segData = null;
        return frmHome;
    } else if (params.launchmode == 3) {
        labelText = "You have launched this kony native app from a third party app.";
        //Displays the launchparams. The Launchparams table is a table with key value pairs specific to the applications needs;
        if (params.launchparams != null) {
            segData = [];
            //alert("data is :"+JSON.stringify(params));
            for (k in params.launchparams) {
                var v = params.launchparams[kony.decrement(k)];
                var ProfileDataStr = decodeURIComponent(params.launchparams["access"]);
            }
            ProfileDataStr = ProfileDataStr.replace(/\+/g, " ");
            ProfileDataStr = ProfileDataStr.replace(",}", "}");
            var ProfileData = JSON.parse(ProfileDataStr);
            if ('name' in ProfileData) {
                segData.push({
                    "lblKey": "Name",
                    "lblValue": ProfileData["name"]
                });
                //frmLoginSuccess.lblUsername.text = "Welcome "+	ProfileData["name"];
                frmShowOptions.lblUsername.text = "Welcome " + ProfileData["name"];
            }
            if ('screen_name' in ProfileData) {
                segData.push({
                    "lblKey": "Screen_name",
                    "lblValue": ProfileData["screen_name"]
                });
                frmLoginSuccess.lblUsername.text = "Welcome " + ProfileData["screen_name"];
            }
            if ('email' in ProfileData) segData.push({
                "lblKey": "Email",
                "lblValue": ProfileData["email"]
            });
            if ('gender' in ProfileData) segData.push({
                "lblKey": "Gender",
                "lblValue": ProfileData["gender"]
            });
            if ('birthday' in ProfileData) segData.push({
                "lblKey": "Birthdate",
                "lblValue": ProfileData["birthday"]
            });
            if ('family_name' in ProfileData) segData.push({
                "lblKey": "family_name",
                "lblValue": ProfileData["family_name"]
            });
            if ('given_name' in ProfileData) segData.push({
                "lblKey": "given_name",
                "lblValue": ProfileData["given_name"]
            });
            if ('verified_email' in ProfileData) segData.push({
                "lblKey": "verified_email",
                "lblValue": ProfileData["verified_email"]
            });
            //if('id' in ProfileData) segData.push({"lblKey" : "id","lblValue":ProfileData["id"]});
            if ('link' in ProfileData) {
                frmLoginSuccess.hbxLinkLbl.setVisibility(true);
                frmLoginSuccess.lblLinkText.text = "Click below link to see more info:";
                frmLoginSuccess.linkProfile.text = ProfileData["link"];
            } else frmLoginSuccess.hbxLinkLbl.setVisibility(false);
            if ('username' in ProfileData) segData.push({
                "lblKey": "Username",
                "lblValue": ProfileData["username"]
            });
            if ('picture' in ProfileData) frmShowOptions.profileImg.src = ProfileData["picture"];
            else frmShowOptions.profileImg.src = "http://graph.facebook.com/" + ProfileData["username"] + "/picture";
            if ('hometown' in ProfileData) segData.push({
                "lblKey": "Hometown",
                "lblValue": ProfileData["hometown"]["name"]
            });
            //alert(ProfileData["work"][0]["location"]["name"]);
            if (ProfileData["work"][0]["location"]["name"] != null) segData.push({
                "lblKey": "Location",
                "lblValue": ProfileData["work"][0]["location"]["name"]
            });
            if ('bio' in ProfileData) segData.push({
                "lblKey": "Bio.",
                "lblValue": ProfileData["bio"]
            });
            if ('work' in ProfileData) segData.push({
                "lblKey": "Work",
                "lblValue": ProfileData["work"][0]["employer"]["name"]
            });
            if ('description' in ProfileData) segData.push({
                "lblKey": "Bio.",
                "lblValue": ProfileData["description"]
            });
            if ('url' in ProfileData) {
                frmLoginSuccess.hbxLinkLbl.setVisibility(true);
                frmLoginSuccess.lblLinkText.text = "My Website";
                frmLoginSuccess.linkProfile.text = ProfileData["url"];
            }
            if ('profile_image_url' in ProfileData) frmShowOptions.profileImg.src = ProfileData["profile_image_url"];
        } else {
            kony.print("*************** launchparams is nil");
        }
        return frmShowOptions;
    }
    return frmHome;
}

function networkCall(requestUrl, method, headers, postdata) {
    kony.print("\n:--entered to util function---->");
    var request = new kony.net.HttpRequest(); // Only supported in Native. Not supported on Mobile web, SPA, Windows.
    var response = [];
    request.timeout = 5000;
    request.open(method, requestUrl, false); //Available on all platforms except BlackBerry 10,Windows Platforms and SPA.	
    request.onReadyStateChange = function() {
        kony.print("\n--------in ready state------------>");
        kony.print("statusText = " + this.statusText + " Number  " + this.status);
        if (this.statusText == "server error") {
            var basicProperties = {
                message: "Unable to reach Host.",
                alertType: constants.ALERT_TYPE_ERROR,
                alertHandler: function() {}
            };
            kony.ui.Alert(basicProperties, {});
        }
        if (this.readyState == constants.HTTP_READY_STATE_DONE) {
            //kony.print("\n-----response---->"+JSON.stringify(request));
            kony.print("Status = " + this.statusText + " Number  " + this.status);
            kony.print("\n:--RESPONSE HEADERS-->" + JSON.stringify(request.getAllResponseHeaders()));
            response = this.response;
            kony.print("1\n:--JS Received response--> " + JSON.stringify(response));
        }
    };
    if (headers != null) {
        for (var key in headers)
        request.setRequestHeader(key, headers[key]);
    }
    //alert("headers:"+JSON.stringify(headers));
    if (method == "POST") {
        var postbody = new kony.net.FormData();
        var jsonObj = eval('(' + postdata + ')');
        for (var key in jsonObj) {
            postbody.append(key, jsonObj[key]);
        }
        kony.print("postdata::" + JSON.stringify(postbody));
        request.send(postbody);
    } else request.send(); //Available on all platforms except BlackBerry 10, Windows Platform and SPA.
    //	alert(JSON.stringify(response));
    return response;
}

function chkIfPropertiesConfigured(clientName) {
    if (clientName == "FB") {
        if (FBConfig.clientID != "" && FBConfig.clientID != undefined && FBConfig.clientID != null && FBConfig.clientID.search("<") == -1 && FBConfig.clientSecret != null && FBConfig.clientSecret != undefined && FBConfig.clientSecret != "" && FBConfig.clientSecret.search("<") == -1) return true;
        else return false;
    } else if (clientName == "Google") {
        if (GoogleConfig.clientID != "" && GoogleConfig.clientID != undefined && GoogleConfig.clientID != null && GoogleConfig.clientID.search("<") == -1 && GoogleConfig.clientSecret != "" && GoogleConfig.clientSecret != undefined && GoogleConfig.clientSecret != null && GoogleConfig.clientSecret.search("<") == -1) return true;
        else return false;
    } else {
        if (LinkedInConfig.clientID != "" && LinkedInConfig.clientID != undefined && LinkedInConfig.clientID != null && LinkedInConfig.clientID.search("<") == -1 && LinkedInConfig.clientSecret != "" && LinkedInConfig.clientSecret != undefined && LinkedInConfig.clientSecret != null && LinkedInConfig.clientSecret.search("<") == -1) return true;
        else return false;
    }
}