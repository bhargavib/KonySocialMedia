//Form JS File
function frmLoginOptions_btnGoogle_onClick_seq0(eventobject) {
    loginAccountAuth.call(this, eventobject);
};

function frmLoginOptions_btnFacebook_onClick_seq0(eventobject) {
    loginAccountAuth.call(this, eventobject);
};

function frmLoginOptions_btnLinkedIn_onClick_seq0(eventobject) {
    loginAccountAuth.call(this, eventobject);
};

function addWidgetsfrmLoginOptions() {
    var lblInfo = new kony.ui.Label({
        "id": "lblInfo",
        "isVisible": true,
        "text": "Login to the app using your google, facebook or Twitter credentials",
        "skin": "sknLblKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnGoogle = new kony.ui.Button({
        "id": "btnGoogle",
        "isVisible": true,
        "text": null,
        "skin": "sknBtnBgImgGoogle",
        "focusSkin": "sknBtnFocusGoogle",
        "onClick": frmLoginOptions_btnGoogle_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 5, 0, 2],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 24
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var btnFacebook = new kony.ui.Button({
        "id": "btnFacebook",
        "isVisible": true,
        "text": null,
        "skin": "sknBtnBgImgFB",
        "focusSkin": "sknBtnFocusFB",
        "onClick": frmLoginOptions_btnFacebook_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 5, 0, 2],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 24
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var btnLinkedIn = new kony.ui.Button({
        "id": "btnLinkedIn",
        "isVisible": true,
        "text": null,
        "skin": "sknBtnImgLinkedIn",
        "focusSkin": "sknBtnFocusLinkedIn",
        "onClick": frmLoginOptions_btnLinkedIn_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 5, 0, 2],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 24
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var vbxLoginOptions = new kony.ui.Box({
        "id": "vbxLoginOptions",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [6, 2, 6, 2],
        "padding": [1, 1, 1, 1],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxLoginOptions.add(
    btnGoogle, btnFacebook, btnLinkedIn);
    var hbxLoginOptions = new kony.ui.Box({
        "id": "hbxLoginOptions",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 26,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 10, 1, 1],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxLoginOptions.add(
    vbxLoginOptions);
    frmLoginOptions.add(
    lblInfo, hbxLoginOptions);
};

function frmLoginOptionsGlobals() {
    var MenuId = [];
    frmLoginOptions = new kony.ui.Form2({
        "id": "frmLoginOptions",
        "title": "Login",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "sknFrmKonyThemeNormal",
        "addWidgets": addWidgetsfrmLoginOptions
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
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
            "renderTitleText": false
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