//Form JS File
function frmShowOptions_frmShowOptions_onDeviceBack_seq1() {
    appLogOut.call(this);
};

function act0_frmShowOptions_frmShowOptions_onDeviceBack_seq0(response) {
    if (response == true) {
        frmShowOptions_frmShowOptions_onDeviceBack_seq1()
    } else {}
};

function frmShowOptions_frmShowOptions_onDeviceBack_seq0(eventobject, neworientation) {
    var alert_seq0_act0 = kony.ui.Alert({
        "message": "Are you sure you want to Logout?",
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Logout",
        "yesLabel": "Yes",
        "noLabel": "Cancel",
        "alertIcon": "",
        "alertHandler": act0_frmShowOptions_frmShowOptions_onDeviceBack_seq0
    }, {});
};

function frmShowOptions_segOptions_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    if (frmShowOptions.segOptions.selectedIndex[1] == 0) {
        frmLoginSuccess.show();
    } else {
        if (frmShowOptions.segOptions.selectedIndex[1] == 1) {
            kony.application.openURL("http://developer.kony.com/ks");
        } else {
            if (frmShowOptions.segOptions.selectedIndex[1] == 2) {
                kony.application.openMediaURL("http://www.youtube.com/watch?v=f4qBN5LnWD8");
            }
        }
    }
};

function addWidgetsfrmShowOptions() {
    var profileImg = new kony.ui.Image2({
        "id": "profileImg",
        "isVisible": true,
        "src": "profile.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": 75,
        "referenceHeight": 75,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 21
    }, {});
    var lblWelcome = new kony.ui.Label({
        "id": "lblWelcome",
        "isVisible": true,
        "text": "Welcome",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 33
    }, {});
    var lblUsername = new kony.ui.Label({
        "id": "lblUsername",
        "isVisible": true,
        "text": "Welcome kony@kony.com",
        "skin": "sknlblNormalSmall"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {});
    var lblHeadLine = new kony.ui.Label({
        "id": "lblHeadLine",
        "isVisible": true,
        "text": "Lead at abc.com",
        "skin": "sknlblNormalSmall"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 27
    }, {});
    var vbox68508015747048 = new kony.ui.Box({
        "id": "vbox68508015747048",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 79,
        "margin": [5, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox68508015747048.add(
    lblWelcome, lblUsername, lblHeadLine);
    var hbox1039945496158556 = new kony.ui.Box({
        "id": "hbox1039945496158556",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 17,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [3, 2, 2, 2],
        "padding": [0, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1039945496158556.add(
    profileImg, vbox68508015747048);
    var line1367605764109156 = new kony.ui.Line({
        "id": "line1367605764109156",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var segOptionsbox = new kony.ui.Box({
        "id": "segOptionsbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
    }, {});
    var segOptions = new kony.ui.SegmentedUI2({
        "id": "segOptions",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblOption": "lblOption"
        },
        "data": [{
            "lblOption": "View My Profile"
        }, {
            "lblOption": "Download KitchenSink App"
        }],
        "rowTemplate": segOptionsbox,
        "widgetSkin": "sknSegTransparent",
        "rowSkin": "sknSegTransparent",
        "rowFocusSkin": "sknSegKonyThemeRowFocus",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": frmShowOptions_segOptions_onRowClick_seq0,
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
        "containerWeight": 45
    }, {});
    var lblOption = new kony.ui.Label({
        "id": "lblOption",
        "isVisible": true,
        "skin": "sknLblKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [5, 2, 5, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 15
    }, {});
    segOptionsbox.add(
    lblOption);
    frmShowOptions.add(
    hbox1039945496158556, line1367605764109156, segOptions);
};

function frmShowOptionsGlobals() {
    var MenuId = [];
    frmShowOptions = new kony.ui.Form2({
        "id": "frmShowOptions",
        "title": "Kony Social Media",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "sknFrmKonyThemeNormal",
        "addWidgets": addWidgetsfrmShowOptions
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
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
        "onDeviceBack": frmShowOptions_frmShowOptions_onDeviceBack_seq0,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};