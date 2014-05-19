//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "SocialMedia",
    appName: "SocialMedia",
    appVersion: "1.0.10",
    platformVersion: null,
    serverIp: "10.10.4.106",
    serverPort: "8080",
    secureServerPort: null,
    isDebug: true,
    middlewareContext: "SocialMedia",
    url: "https://konysb2.konycloud.com/SocialMedia/MWServlet",
    secureurl: "https://konysb2.konycloud.com/SocialMedia/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeloginSuccessHdr();
    frmLoginOptionsGlobals();
    frmLoginSuccessGlobals();
    frmProfileBrowserGlobals();
    frmShowOptionsGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: true
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmLoginOptions.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("KonyTheme", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;