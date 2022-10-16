//~~tv:20010.20140827
//~~tc: Tealium Custom Container

/*
  Tealium Custom Container Notes:
  - Add sending code between "Start Tag Sending Code" and "End Tag Sending Code".
  - Add JavaScript tag library code between "Start Tag Library Code" and "End Tag Library Code".
  - Add JavaScript code only, do not add HTML code in this file.
  - Remove any <script> and </script> tags from the code you place in this file.

  Loading external JavaScript files (Loader):
  - If you need to load an additional external JavaScript file, un-comment the singe-line JavaScript comments ("//") within the following Loader sections near the bottom of this file:
      - "Start Loader Function Call"
      - "End Loader Function Call"
      - "Start Loader Callback Function"
      - "End Loader Callback Function"
  - After un-commenting, insert the path to the external JavaScript file you want to load.
  - Finally, within the Loader callback function, insert the JavaScript code that should run after the external JavaScript file has loaded.
*/

/* Start Tag Library Code */
var createCookie = function(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = "; expires="+date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name+"="+value+expires+"; domain=.schweizer-illustrierte.ch; path=/";
};

var readCookie = function(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length,c.length);
        }
    }
    return null;
};

var getMediapulseRandomID = function() {
	var cs_fpid = readCookie("cs_fpid");
	if (!cs_fpid) {
		cs_fpid = [+new Date(), Math.floor(Math.random() * 99999999 + 1000000)].join('_');
		createCookie("cs_fpid", cs_fpid, 365);
	}
	return cs_fpid;
};
	
var getMediapulseData = function(c2, mp_brand, ns_site, mp_v) {
	var result = {
		c1: "2",
		c2: c2,
		mp_brand: mp_brand,
		ns_site: ns_site,
		mp_v: mp_v,
		cs_fpid: getMediapulseRandomID(),
		mp_login: "3"
	};
	var mp_fpid = readCookie("mp_fpid");
	if (mp_fpid) {
		result["mp_fpid"] = mp_fpid;
		result["mp_login"] = "1";
	}
	return result;
};

/* End Tag Library Code */

//tealium universal tag - utag.sender.custom_container ut4.0.202203160854, Copyright 2022 Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    var u = {};
    utag.o[loader].sender[id] = u;

    // Start Tealium loader 4.32
    // Please do not modify
    if (utag === undefined) { utag = {}; } if (utag.ut === undefined) { utag.ut = {}; } if (utag.ut.loader === undefined) { u.loader = function (o) { var a, b, c, l; a = document; if (o.type === "iframe") { b = a.createElement("iframe"); b.setAttribute("height", "1"); b.setAttribute("width", "1"); b.setAttribute("style", "display:none"); b.setAttribute("src", o.src); } else if (o.type === "img") { utag.DB("Attach img: " + o.src); b = new Image(); b.src = o.src; return; } else { b = a.createElement("script"); b.language = "javascript"; b.type = "text/javascript"; b.async = 1; b.charset = "utf-8"; b.src = o.src; } if (o.id) { b.id = o.id; } if (typeof o.cb === "function") { if (b.addEventListener) { b.addEventListener("load", function () { o.cb(); }, false); } else { b.onreadystatechange = function () { if (this.readyState === "complete" || this.readyState === "loaded") { this.onreadystatechange = null; o.cb(); } }; } } l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to " + l + ": " + o.src); if (l === "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b); } } }; } else { u.loader = utag.ut.loader; }
    // End Tealium loader

    u.ev = {'view' : 1};

    u.initialized = false;

      u.map={"_sm_14_1":"c2","_sm_14_2":"mp_brand","_sm_14_3":"ns_site","_sm_14_4":"mp_v"};
  u.extend=[function(a,b){
try{b['_sm_14_1']="28229342";}catch(e){utag.DB(e);}
try{b['_sm_14_2']="Schweizer Illustrierte";}catch(e){utag.DB(e);}
try{b['_sm_14_3']="schweizer-illustrierte.ch";}catch(e){utag.DB(e);}
try{b['_sm_14_4']="*null";}catch(e){utag.DB(e);}
}];


    u.send = function(a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        //##UTENABLEDEBUG##utag.DB("send:##UTID##");

        var c, d, e, f, i;

        u.data = {
          /* Initialize default tag parameter values here */
          /* Examples: */
          /* "account_id" : "1234567" */
          "base_url" : "https://sb.scorecardresearch.com/beacon.js"
          /* A value mapped to "account_id" or "base_url" in TiQ will replace these default values. */
        };


        /* Start Tag-Scoped Extensions Code */
        /* Please Do Not Edit This Section */
        for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};
        /* End Tag-Scoped Extensions Code */


        /* Start Mapping Code */
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              u.data[e[f]] = b[d];
            }
          }
        }
        /* End Mapping Code */


        /* Start Tag Sending Code */

        var c2 = u.data.c2;
        var mp_brand = u.data.mp_brand;
        var ns_site = u.data.ns_site;
        var mp_v = u.data.mp_v;
        
        u.data.base_url = "https://sb.scorecardresearch.com/cs/" + u.data.c2 + "/beacon.js";
        window._comscore = window._comscore || []; window._comscore.push(getMediapulseData(c2, mp_brand, ns_site, mp_v));

        /* End Tag Sending Code */


        /* Start Loader Callback Function */
        /* Un-comment the single-line JavaScript comments ("//") to use this Loader callback function. */

        u.loader_cb = function () {
          if (!u.initialized) {    
        	u.initialized = true;
          } else {
        	(window.COMSCORE && window.COMSCORE.beacon(getMediapulseData(c2, mp_brand, ns_site, mp_v)));
          }
        };	

        /* End Loader Callback Function */


        /* Start Loader Function Call */
        /* Un-comment the single-line JavaScript comments ("//") to use Loader. */

          if (!u.initialized) {
            //u.loader({"type" : "iframe", "src" : u.data.base_url + c.join(u.data.qsp_delim), "cb" : u.loader_cb, "loc" : "body", "id" : 'utag_14' });
            u.loader({"type" : "script", "src" : u.data.base_url, "cb" : u.loader_cb, "loc" : "script", "id" : 'utag_14' });
          } else {
            u.loader_cb();
          }	

          //u.loader({"type" : "img", "src" : u.data.base_url + c.join(u.data.qsp_delim) });

        /* End Loader Function Call */


        //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  })("14", "rasch.schweizer-illustrierte.ch");
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag

