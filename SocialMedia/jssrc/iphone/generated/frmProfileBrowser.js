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
        "onSuccess": frmProfileBrowser_brwsrId_onSuccess_seq0,
        "onFailure": frmProfileBrowser_brwsrId_onFailure_seq0,
        "screenLevelWidget": true,
        "enableZoom": false,
        "detectTelNumber": true
    }, {
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
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
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "bounces": true,
        "configureExtendTop": false,
        "configureExtendBottom": false,
        "configureStatusBarStyle": false,
        "titleBar": true,
        "titleBarSkin": "sknTitleKonyTheme",
        "titleBarConfig": {
            "renderTitleText": true
        },
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "deprecated": {
            "titleBarBackGroundImage": "blue_pixel.png"
        }
    });
};