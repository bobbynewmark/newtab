var { modelFor } = require("sdk/model/core");
var { viewFor } = require("sdk/view/core");
var utils = require('sdk/window/utils');
var tabs = require("sdk/tabs");
var tab_utils = require("sdk/tabs/utils");
var self = require("sdk/self");

function clearAddressBarIfMyTab(tab) {
    if (tab.url === self.data.url("myindex.html")) {
        var active = utils.getMostRecentBrowserWindow();
        active.document.getElementById("urlbar").value = "";
    }
}

function processTab(tab, eventType, clearonly) {
    console.log(eventType, tab.url, clearonly);
    if (!clearonly) {
        if (tab.url === 'about:newtab' || tab.url === 'about:blank') {
            tab.attach({
                contentScriptFile: [self.data.url("jquery-2.1.1.min.js"), self.data.url("my-script.js")]
            });
            tab.url = self.data.url("myindex.html");
        }
    }
    clearAddressBarIfMyTab(tab);
}


//redirect on new tab 
//tabs.on('open', function(tab) { processTab(tab, "open") });
tabs.on('ready', function(tab) { processTab(tab, "ready") });
tabs.on('activate', function(tab) { processTab(tab, "activate", true) });

//catch the already open tabs
for(var i=0,tab;tab=tabs[i++];) {
    processTab(tab, "catchall");
}