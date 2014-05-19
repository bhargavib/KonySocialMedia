//Form JS File
function frmProfileBrowser_brwsrId_onSuccess_seq0(eventobject) {
    onSuccessResponse.call(this, eventobject);
};

function frmProfileBrowser_brwsrId_onFailure_seq0(eventobject) {
    onFailureResponse.call(this, eventobject);
};

function addWidgetsfrmProfileBrowser() {
    var brwsrId = new kony.ui.Browser({
        "id": "brwsrId",
        "text": "Browser",
        "isVisible": true,
        "detectTelNumber": true,
        "onSuccess": frmProfileBrowser_brwsrId_onSuccess_seq0,
        "onFailure": frmProfileBrowser_brwsrId_onFailure_seq0,
        "screenLevelWidget": true,
        "enableZoom": false
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 68
    }, {});
    frmProfileBrowser.add(
    brwsrId);
};

function frmProfileBrowserGlobals() {
    var MenuId = [];
    frmProfileBrowser = new kony.ui.Form2({
        "id": "frmProfileBrowser",
        "title": "Login",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "sknFrmKonyThemeNormal",
        "addWidgets": addWidgetsfrmProfileBrowser
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp",
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};