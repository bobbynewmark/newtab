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

function noopTab(tab, eventType, clearonly) {
    console.log("noop", eventType, tab.url, clearonly);
}

function attachScripts(tab) {
if (tab.url === 'about:newtab' || tab.url === 'about:blank') {
   tab.attach({
                contentScriptFile: [self.data.url("jquery-2.1.1.min.js"), self.data.url("my-script.js")]
            });

}
}

function processTab(tab, eventType, clearonly) {
    console.log(eventType, tab.url, clearonly);
    attachScripts(tab);
    if (!clearonly) {
        if (tab.url === 'about:newtab' || tab.url === 'about:blank') {
         
            tab.url = self.data.url("myindex.html");
        }
    }
    clearAddressBarIfMyTab(tab);
}


//redirect on new tab 
tabs.on('open', function(tab) { 
	var lowLevelTab = viewFor(tab);
	var browser = tab_utils.getBrowserForTab(lowLevelTab);
	if (browser.contentDocument.readyState === "complete") {
		processTab(tab, "open")
	}

 });
tabs.on('ready', function(tab) { processTab(tab, "ready") });
tabs.on('pageshow', function(tab) { noopTab(tab, "pageshow") });
tabs.on('activate', function(tab) { processTab(tab, "activate", true) });



//catch the already open tabs
/*for(var i=0,tab;tab=tabs[i++];) {
    processTab(tab, "catchall");
}*/