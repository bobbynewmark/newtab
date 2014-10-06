var { modelFor } = require("sdk/model/core");
var { viewFor } = require("sdk/view/core");

var tabs = require("sdk/tabs");
var tab_utils = require("sdk/tabs/utils");
var self = require("sdk/self");


var i = 0;

//tried open, ready, activate
tabs.on('open', function(tab) {
    console.log('open', tab.url);
    if (tab.url === 'about:newtab') {
        tab.attach({
            contentScriptFile: [self.data.url("jquery-2.1.1.min.js"), self.data.url("my-script.js")]
        });
        tab.url = self.data.url("myindex.html");
    }
});

tabs.on('ready', function(tab) {
    console.log('ready',tab.url);
    if (tab.url === 'about:newtab') {
        tab.attach({
            contentScriptFile: [self.data.url("jquery-2.1.1.min.js"), self.data.url("my-script.js")]
        });
        tab.url = self.data.url("myindex.html");
    }
});

for(var i=0,tab;tab=tabs[i++];) {
    if (tab.url === 'about:newtab') {
        tab.attach({
            contentScriptFile: [self.data.url("jquery-2.1.1.min.js"), self.data.url("my-script.js")]
        });
    }
}