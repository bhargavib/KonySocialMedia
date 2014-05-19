//Form JS File
function frmLoginSuccess_frmLoginSuccess_preshow_seq0(eventobject, neworientation) {
    frmLoginSuccessPreShow.call(this);
};

function frmLoginSuccess_linkProfile_onClick_seq0(eventobject) {
    var URL = frmLoginSuccess.linkProfile.text;
    kony.application.openURL(URL);
};

function addWidgetsfrmLoginSuccess() {
    var segFBProfileDatabox = new kony.ui.Box({
        "id": "segFBProfileDatabox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 10
    }, {});
    var segFBProfileData = new kony.ui.SegmentedUI2({
        "id": "segFBProfileData",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblKey": "lblKey",
            "lblValue": "lblValue",
            "hbxInfo": "hbxInfo"
        },
        "rowTemplate": segFBProfileDatabox,
        "widgetSkin": "sknSegTransparent",
        "rowSkin": "sknSegTransparent",
        "rowFocusSkin": "sknSegTransparent",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "c0c0c032",
        "showScrollbars": true,
        "groupCells": false,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "viewConfig": {
            "coverflowConfig": {
                "projectionAngle": 60,
                "isCircular": true
            }
        }
    }, {
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 10
    }, {
        "indicator": constants.SEGUI_NONE,
        "enableDictionary": false,
        "showProgressIndicator": true,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE
    });
    var lblKey = new kony.ui.Label({
        "id": "lblKey",
        "isVisible": true,
        "skin": "sknLblFontBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 33
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblValue = new kony.ui.Label({
        "id": "lblValue",
        "isVisible": true,
        "skin": "sknLblBlue"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 67
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbxInfo = new kony.ui.Box({
        "id": "hbxInfo",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 61,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [3, 3, 3, 3],
        "vExpand": false,
        "marginInPixel": true,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxInfo.add(
    lblKey, lblValue);
    segFBProfileDatabox.add(
    hbxInfo);
    var lblLinkText = new kony.ui.Label({
        "id": "lblLinkText",
        "isVisible": true,
        "text": "Click below for more info & to Logged Out :",
        "skin": "sknLblKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 57
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var linkProfile = new kony.ui.Link({
        "id": "linkProfile",
        "isVisible": true,
        "text": "Link",
        "skin": "sknLnkKonyThemeNormal",
        "onClick": frmLoginSuccess_linkProfile_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 0, 2, 5],
        "padding": [1, 0, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 39
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var vbox1039945496158562 = new kony.ui.Box({
        "id": "vbox1039945496158562",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1039945496158562.add(
    lblLinkText, linkProfile);
    var hbxLinkLbl = new kony.ui.Box({
        "id": "hbxLinkLbl",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxLinkLbl.add(
    vbox1039945496158562);
    frmLoginSuccess.add(
    segFBProfileData, hbxLinkLbl);
};

function frmLoginSuccessGlobals() {
    var MenuId = [];
    frmLoginSuccess = new kony.ui.Form2({
        "id": "frmLoginSuccess",
        "title": "Kony Social Media",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "sknFrmKonyThemeNormal",
        "preShow": frmLoginSuccess_frmLoginSuccess_preshow_seq0,
        "addWidgets": addWidgetsfrmLoginSuccess
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
            "renderTitleText": true,
            "titleBarRightSideView": "button",
            "titleBarLeftSideView": "button",
            "imageRightSideView": "logout_normal.png",
            "imageLeftSideView": "back_ico.png",
            "closureRightSideView": appLogOut
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