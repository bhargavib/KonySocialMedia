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
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
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
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 24
    }, {});
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
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 24
    }, {});
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
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 24
    }, {});
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
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "titleBarSkin": "sknTitleKonyTheme",
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