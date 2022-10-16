//~~tv:6037.20210518
//~~tc: Update format of event specific value parameters
//~~tc: Update check for initializing pixels

//ESLint configurations
/*global utag fbq*/
/*eslint no-unused-vars: ["error",{"varsIgnorePattern": "^c$"}]*/

// Facebook Pixel initialization code for Tealium
(function(f) {
  if (f.fbq) return;
  var n = f.fbq = function() {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = !0;
  n.version = "2.0";
  n.queue = [];
  n.agent = "tmtealium";
})(window);

//tealium universal tag - utag.sender.template ut4.0.202111221635, Copyright 2021 Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    var u = {"id" : id}, md5;
    utag.o[loader].sender[id] = u;
    utag.globals = utag.globals || {};

    /* eslint-disable */
    // Please do not modify
    if (utag.ut === undefined) { utag.ut = {}; }
    // Start Tealium loader 4.41
    /* utag.js version 4.26 or above is required to avoid errors with this loader function */
    var match = /ut\d\.(\d*)\..*/.exec(utag.cfg.v);
    if (utag.ut.loader === undefined || !match || parseInt(match[1]) < 41) { u.loader = function(o, a, b, c, l, m) { utag.DB(o); a = document; if (o.type == "iframe") { m = a.getElementById(o.id); if (m && m.tagName == "IFRAME") { b = m; } else { b = a.createElement("iframe"); } o.attrs = o.attrs || {}; utag.ut.merge(o.attrs, { "height": "1", "width": "1", "style": "display:none" }, 0); } else if (o.type == "img") { utag.DB("Attach img: " + o.src); b = new Image(); } else { b = a.createElement("script"); b.language = "javascript"; b.type = "text/javascript"; b.async = 1; b.charset = "utf-8"; } if (o.id) { b.id = o.id; } for (l in utag.loader.GV(o.attrs)) { b.setAttribute(l, o.attrs[l]); } b.setAttribute("src", o.src); if (typeof o.cb == "function") { if (b.addEventListener) { b.addEventListener("load", function() { o.cb(); }, false); } else { b.onreadystatechange = function() { if (this.readyState == "complete" || this.readyState == "loaded") { this.onreadystatechange = null; o.cb(); } }; } } if (o.type != "img" && !m) { l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to " + l + ": " + o.src); if (l == "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b); } } } }; } else { u.loader = utag.ut.loader; }
    // End Tealium loader
    // Start Tealium typeOf 4.35
    if (utag.ut.typeOf === undefined) { u.typeOf = function(e) {return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};} else { u.typeOf = utag.ut.typeOf; }
    // End Tealium typeOf

    // Start Tealium MD5
    if (utag.ut.md5 === undefined) {
      /*
        CryptoJS v4.0.0
        https://github.com/brix/crypto-js
        Copyright (c) 2009-2013 Jeff Mott.
        Copyright (c) 2013-2016 Evan Vosberg.
        https://github.com/brix/crypto-js/blob/master/LICENSE
      */
      md5=function(t,n){var r;if("undefined"!=typeof window&&window.crypto&&(r=window.crypto),!r&&"undefined"!=typeof window&&window.msCrypto&&(r=window.msCrypto),!r&&"undefined"!=typeof global&&global.crypto&&(r=global.crypto),!r&&"function"==typeof require)try{r=require("crypto")}catch(t){}var e=function(){if(r){if("function"==typeof r.getRandomValues)
      try{return r.getRandomValues(new Uint32Array(1))[0]}catch(t){}if("function"==typeof r.randomBytes)try{return r.randomBytes(4).readInt32LE()}catch(t){}}throw new Error("Native crypto module could not be used to get secure random number.")},i=Object.create||function(){function t(){}return function(n){var r;return t.prototype=n,r=new t,t.prototype=null,r}}(),o={},s=o.lib={},a=s.Base={extend:function(t){
      var n=i(this);return t&&n.mixIn(t),n.hasOwnProperty("init")&&this.init!==n.init||(n.init=function(){n.$super.init.apply(this,arguments)}),n.init.prototype=n,n.$super=this,n},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var n in t)t.hasOwnProperty(n)&&(this[n]=t[n]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){
      return this.init.prototype.extend(this)}},c=s.WordArray=a.extend({init:function(t,n){t=this.words=t||[],this.sigBytes=null!=n?n:4*t.length},toString:function(t){return(t||f).stringify(this)},concat:function(t){var n=this.words,r=t.words,e=this.sigBytes,i=t.sigBytes;if(this.clamp(),e%4)for(var o=0;o<i;o++){var s=r[o>>>2]>>>24-o%4*8&255;n[e+o>>>2]|=s<<24-(e+o)%4*8}else for(o=0;o<i;o+=4)n[e+o>>>2]=r[o>>>2];
      return this.sigBytes+=i,this},clamp:function(){var n=this.words,r=this.sigBytes;n[r>>>2]&=4294967295<<32-r%4*8,n.length=t.ceil(r/4)},clone:function(){var t=a.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var n=[],r=0;r<t;r+=4)n.push(e());return new c.init(n,t)}}),u=o.enc={},f=u.Hex={stringify:function(t){for(var n=t.words,r=t.sigBytes,e=[],i=0;i<r;i++){
      var o=n[i>>>2]>>>24-i%4*8&255;e.push((o>>>4).toString(16)),e.push((15&o).toString(16))}return e.join("")},parse:function(t){for(var n=t.length,r=[],e=0;e<n;e+=2)r[e>>>3]|=parseInt(t.substr(e,2),16)<<24-e%8*4;return new c.init(r,n/2)}},h=u.Latin1={stringify:function(t){for(var n=t.words,r=t.sigBytes,e=[],i=0;i<r;i++){var o=n[i>>>2]>>>24-i%4*8&255;e.push(String.fromCharCode(o))}
      return e.join("")},parse:function(t){for(var n=t.length,r=[],e=0;e<n;e++)r[e>>>2]|=(255&t.charCodeAt(e))<<24-e%4*8;return new c.init(r,n)}},d=u.Utf8={stringify:function(t){try{return decodeURIComponent(escape(h.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return h.parse(unescape(encodeURIComponent(t)))}},l=s.BufferedBlockAlgorithm=a.extend({reset:function(){
      this._data=new c.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=d.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(n){var r,e=this._data,i=e.words,o=e.sigBytes,s=this.blockSize,a=o/(4*s),u=(a=n?t.ceil(a):t.max((0|a)-this._minBufferSize,0))*s,f=t.min(4*u,o);if(u){for(var h=0;h<u;h+=s)this._doProcessBlock(i,h);r=i.splice(0,u),e.sigBytes-=f}
      return new c.init(r,f)},clone:function(){var t=a.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),p=(s.Hasher=l.extend({cfg:a.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){
      return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(n,r){return new t.init(r).finalize(n)}},_createHmacHelper:function(t){return function(n,r){return new p.HMAC.init(t,r).finalize(n)}}}),o.algo={});return o}(Math);

      (function(t){var n=md5,r=n.lib,e=r.WordArray,i=r.Hasher,o=n.algo,s=[];!function(){for(var n=0;n<64;n++)s[n]=4294967296*t.abs(t.sin(n+1))|0}();var a=o.MD5=i.extend({_doReset:function(){this._hash=new e.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,n){for(var r=0;r<16;r++){var e=n+r,i=t[e];t[e]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8)}
      var o=this._hash.words,a=t[n+0],d=t[n+1],l=t[n+2],p=t[n+3],y=t[n+4],g=t[n+5],w=t[n+6],v=t[n+7],_=t[n+8],m=t[n+9],B=t[n+10],x=t[n+11],b=t[n+12],S=t[n+13],H=t[n+14],z=t[n+15],C=o[0],M=o[1],A=o[2],D=o[3];C=c(C,M,A,D,a,7,s[0]),D=c(D,C,M,A,d,12,s[1]),A=c(A,D,C,M,l,17,s[2]),M=c(M,A,D,C,p,22,s[3]),C=c(C,M,A,D,y,7,s[4]),D=c(D,C,M,A,g,12,s[5]),A=c(A,D,C,M,w,17,s[6]),
      M=c(M,A,D,C,v,22,s[7]),C=c(C,M,A,D,_,7,s[8]),D=c(D,C,M,A,m,12,s[9]),A=c(A,D,C,M,B,17,s[10]),M=c(M,A,D,C,x,22,s[11]),C=c(C,M,A,D,b,7,s[12]),D=c(D,C,M,A,S,12,s[13]),A=c(A,D,C,M,H,17,s[14]),C=u(C,M=c(M,A,D,C,z,22,s[15]),A,D,d,5,s[16]),D=u(D,C,M,A,w,9,s[17]),A=u(A,D,C,M,x,14,s[18]),M=u(M,A,D,C,a,20,s[19]),C=u(C,M,A,D,g,5,s[20]),D=u(D,C,M,A,B,9,s[21]),
      A=u(A,D,C,M,z,14,s[22]),M=u(M,A,D,C,y,20,s[23]),C=u(C,M,A,D,m,5,s[24]),D=u(D,C,M,A,H,9,s[25]),A=u(A,D,C,M,p,14,s[26]),M=u(M,A,D,C,_,20,s[27]),C=u(C,M,A,D,S,5,s[28]),D=u(D,C,M,A,l,9,s[29]),A=u(A,D,C,M,v,14,s[30]),C=f(C,M=u(M,A,D,C,b,20,s[31]),A,D,g,4,s[32]),D=f(D,C,M,A,_,11,s[33]),A=f(A,D,C,M,x,16,s[34]),M=f(M,A,D,C,H,23,s[35]),C=f(C,M,A,D,d,4,s[36]),
      D=f(D,C,M,A,y,11,s[37]),A=f(A,D,C,M,v,16,s[38]),M=f(M,A,D,C,B,23,s[39]),C=f(C,M,A,D,S,4,s[40]),D=f(D,C,M,A,a,11,s[41]),A=f(A,D,C,M,p,16,s[42]),M=f(M,A,D,C,w,23,s[43]),C=f(C,M,A,D,m,4,s[44]),D=f(D,C,M,A,b,11,s[45]),A=f(A,D,C,M,z,16,s[46]),C=h(C,M=f(M,A,D,C,l,23,s[47]),A,D,a,6,s[48]),D=h(D,C,M,A,v,10,s[49]),A=h(A,D,C,M,H,15,s[50]),M=h(M,A,D,C,g,21,s[51]),
      C=h(C,M,A,D,b,6,s[52]),D=h(D,C,M,A,p,10,s[53]),A=h(A,D,C,M,B,15,s[54]),M=h(M,A,D,C,d,21,s[55]),C=h(C,M,A,D,_,6,s[56]),D=h(D,C,M,A,z,10,s[57]),A=h(A,D,C,M,w,15,s[58]),M=h(M,A,D,C,S,21,s[59]),C=h(C,M,A,D,y,6,s[60]),D=h(D,C,M,A,x,10,s[61]),A=h(A,D,C,M,l,15,s[62]),M=h(M,A,D,C,m,21,s[63]),o[0]=o[0]+C|0,o[1]=o[1]+M|0,o[2]=o[2]+A|0,o[3]=o[3]+D|0},_doFinalize:function(){
      var n=this._data,r=n.words,e=8*this._nDataBytes,i=8*n.sigBytes;r[i>>>5]|=128<<24-i%32;var o=t.floor(e/4294967296),s=e;r[15+(i+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),r[14+(i+64>>>9<<4)]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),n.sigBytes=4*(r.length+1),this._process();for(var a=this._hash,c=a.words,u=0;u<4;u++){var f=c[u];c[u]=16711935&(f<<8|f>>>24)|4278255360&(f<<24|f>>>8)}return a},
      clone:function(){var t=i.clone.call(this);return t._hash=this._hash.clone(),t}});function c(t,n,r,e,i,o,s){var a=t+(n&r|~n&e)+i+s;return(a<<o|a>>>32-o)+n}function u(t,n,r,e,i,o,s){var a=t+(n&e|r&~e)+i+s;return(a<<o|a>>>32-o)+n}function f(t,n,r,e,i,o,s){var a=t+(n^r^e)+i+s;return(a<<o|a>>>32-o)+n}function h(t,n,r,e,i,o,s){var a=t+(r^(n|~e))+i+s;return(a<<o|a>>>32-o)+n}n.MD5=i._createHelper(a),n.HmacMD5=i._createHmacHelper(a)}(Math));
    } else  {
      md5 = utag.ut.md5;
    }
    // End Tealium MD5
    /* eslint-enable */

    u.ev = {"view" : 1, "link" : 1};
    u.scriptrequested = false;
    u.pixels_initialized = {};

    u.clearEmptyKeys = function (object) {
      for (var key in object) {
        if (object[key] === "" || object[key] === undefined || object[key] === null || (utag.ut.typeOf(object[key]) === "array" && object[key].length === 0)) {
          delete object[key];
        }
      }
      return object;
    };

    // returns an MD5 hash of the input parameters (tealium_timestamp_epoch, tealium_random, and the name of the Facebook tracking event); should return a string of the MD5 digest
    u.generateEventID = function (event, data, lookup_id) {
      // if the version of utag.js is too old to provide the parameters referenced, then random numbers are generated in their place
      var hash_input = (data["tealium_timestamp_epoch"] || (function(){var d = new Date();return Math.floor(d.getTime()/1000);})()) + "-" + lookup_id + "-" + event + "-" + id,
        event_id = md5.MD5(hash_input).toString();
      return event_id;
    };

    u.isEmptyObject = function(object) {
      if (typeof Object.keys === "function") {
        if (Object.keys(object).length === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        var key;
        for (key in object) {
          if (object.hasOwnProperty(key)) {
            return false;
          }
        }
        return true;
      }
    };

    // creates an object of mapping overrides for a specific event
    u.map_func = function (arr, obj, item) {
      var i = arr.shift();
      obj[i] = obj[i] || {};
      if (arr.length > 0) {
        u.map_func(arr,obj[i], item);
      } else {
        obj[i] = item;
      }
    };

    u.processAMData = function (data) {
      var processed_data = {}, key;
      for (key in data) {
        if (data.hasOwnProperty(key)) {
          // Only lowercase value if the item being matched is recognized
          if (key === "ph" || key === "ge" || key === "db" || key === "zp") {
            key = key.replace(/\s/g, "").toLowerCase();
          }
          if (key === "ph") {
            // Phone number, remove any non numeric characters
            data[key] = data[key].replace(/[^\d]/g, "");
          } else if (key === "ge") {
            if (data[key] !== "m" && data[key] !== "f") {
              utag.DB(u.id + ": Advanced Matching property 'ge' in wrong format. Removed from init call");
              continue;
            }
          } else if (key === "db") {
            if (data[key].length !== 8) {
              utag.DB( u.id + ": Advanced Matching property 'db' is not the correct length. Removed from init call");
              continue;
            }
          } else if (key === "zp") {
            data[key] = data[key].replace(/[^\d]/g, "");
            if (data[key].length > 5) {
              utag.DB(u.id + ": Advanced Matching property 'zp' is too long. Removed from init call");
              continue;
            }
          }
        }
        processed_data[key] = data[key];
      }
      return u.clearEmptyKeys(processed_data);
    };

      u.map={};
  u.extend=[];


    u.send = function (a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        utag.DB("send:13");
        utag.DB(b);

        var c, d, e, f, h, i, j, k, l, key, pixel_list, event,
          base_tracking_type = "track",
          event_data = {},
          event_id = "",
          event_name = "",
          event_tracking_type = "",
          fb_param = "",
          has_purchase = false,
          lookup_id = "",
          tracking_queue = [],
          standard_events_lookup = {
            "AddPaymentInfo" : {"fb_params" : ["content_category", "content_ids", "contents", "currency", "value"]},
            "AddToCart" : {"fb_params" : ["content_ids", "content_name", "content_type", "contents", "currency", "value"]},
            "AddToWishlist" : {"fb_params" : ["content_name", "content_category", "content_ids", "contents", "currency", "value"]},
            "CompleteRegistration" : {"fb_params" : ["content_name", "currency", "status", "value"]},
            "Contact" : {"fb_params" : []},
            "CustomizeProduct" : {"fb_params" : []},
            "Donate" : {"fb_params" : []},
            "FindLocation" : {"fb_params" : []},
            "InitiateCheckout" : {"fb_params" : ["content_category", "content_ids", "contents", "currency", "num_items", "value"]},
            "Lead" : {"fb_params" : ["content_category", "content_name", "currency", "value"]},
            "PageView" : {"fb_params" : []},
            "Purchase" : {"fb_params" : ["content_ids", "content_name", "content_type", "contents", "currency", "num_items", "value"], "req_params" : ["currency", "value"]},
            "Schedule" : {"fb_params" : []},
            "Search" : {"fb_params" : ["content_category", "content_ids", "contents", "currency", "search_string", "value"]},
            "StartTrial" : {"fb_params" : ["currency", "predicted_ltv", "value"]},
            "SubmitApplication" : {"fb_params" : []},
            "Subscribe" : {"fb_params" : ["currency", "predicted_ltv", "value"]},
            "ViewContent" : {"fb_params" : ["content_ids", "content_name", "content_type", "contents", "currency", "value"]}
          },
          standard_params_lookup = {
            "content_category" : function () {
              return u.data.content_category || u.data.product_category;
            },
            "content_name" : function () {
              return u.data.content_name || u.data.product_name;
            },
            "content_ids" : function () {
              return u.data.content_ids || u.data.product_id;
            },
            "content_type" : function () {
              return u.data.content_type;
            },
            "contents" : function () {
              return u.data.contents;
            },
            "currency" : function () {
              return u.data.currency || u.data.order_currency;
            },
            "num_items" : function () {
              var i, num;
              // first defer to direct mappings to the `num_items` destination
              if (typeof u.data.num_items !== "undefined" && u.data.num_items !== "") {
                num = u.data.num_items;
              } else {
                // otherwise, if auto calculate is enabled, determine the number of items
                if (u.data.calc_items === true || u.data.calc_items === "true") {
                  num = 0;
                  for (i = 0; i < u.data.product_quantity.length; i++) {
                    num += parseInt(u.data.product_quantity[i]);
                  }
                }
              }
              // cast num to the correct data type, if populated
              if (typeof num !== "undefined" && num !== "") {
                num = parseInt(num);
              }
              return num;
            },
            "predicted_ltv" : function () {
              return u.data.predicted_ltv;
            },
            "search_string" : function () {
              return u.data.search_string;
            },
            "status" : function () {
              return u.data.status;
            },
            "value" : function (event) {
              var val = "";
              // first defer to direct mappings to the `value` destination
              if (typeof u.data.value !== "undefined" && u.data.value !== "") {
                val = u.data.value;
              } else {
                // otherwise, use E-Commerce extension fallbacks, depending on the event
                if ((event === "AddToCart" || event === "ViewContent") && u.data.product_unit_price.length > 0) {
                  val = u.data.product_unit_price[0];
                } else if (event === "Purchase") {
                  val = u.data.order_subtotal;
                }
              }
              // cast val to the correct data type, if populated
              if (typeof val !== "undefined" && val !== "") {
                val = parseFloat(val);
              }
              return val;
            }
          };

          u.processing_options = function () {
            var key, ldu_option;
            for( key in u.data.lmt_data.ldu_types){
              if (u.data.lmt_data.ldu_types[key] === "true" || u.data.lmt_data.ldu_types[key] === true){
                ldu_option = key;
              }
            }

            if (u.data.lmt_data.use_ldu === "true" || u.data.lmt_data.use_ldu === true) {

              switch (ldu_option){
                case "california":
                  u.data.lmt_data.country = 1;
                  u.data.lmt_data.state = 1000;
                break;
                case "geolocate":
                  u.data.lmt_data.country = 0;
                  u.data.lmt_data.state = 0;
                break;
                default:
                break;
                }

                fbq("dataProcessingOptions", u.data.lmt_data.prcs_optns, u.data.lmt_data.country, u.data.lmt_data.state);

              } else if (u.data.lmt_data.use_ldu === "false" || u.data.lmt_data.use_ldu === false){

                fbq("dataProcessingOptions", []);
              }
          }

        u.data = {
          "base_url" : "https://connect.facebook.net/en_US/fbevents.js",
          // tag settings from Tealium iQ
          "advanced_matching" : "true",
          "generate_event_id" : "false",
          "pixel_id" : "3145877808770757",
          // additional tag settings, configurable via mappings
          "autoConfig" : true,
          "auto_page_view" : true,
          "calc_items" : true,
          "consent" : "",
          "disablePushState" : false,
          "track_single" : true,
          "lmt_data" : {
            "prcs_optns" : ["LDU"],
            "country" : 0,
            "state" : 0
          },
          // E-Commerce variables
          "order_id" : "",
          "order_subtotal" : "",
          "order_currency" : "",
          "product_id" : [],
          "product_name" : [],
          "product_category" : [],
          "product_unit_price" : [],
          "product_quantity" : [],
          // FB standard parameters
          "content_category" : "",
          "content_ids" : "",
          "content_name" : "",
          "content_type" : "", // following values are permitted by FB: product, product_group, destination, flight, hotel, vehicle, home_listing
          "contents" : null,
          "currency" : "",
          "num_items" : "",
          "predicted_ltv" : "",
          "search_string" : "",
          "status" : "",
          "value" : "",
          // FB Movie parameters
          "movieref" : "",
          // standard FB parameters for real estate, destination, flight, hotel, automotive
          "availability" : "",
          "body_style" : "",
          "checkin_date" : "",
          "checkout_date" : "",
          "city" : "",
          "country" : "",
          "departing_arrival_date" : "",
          "departing_departure_date" : "",
          "destination_airport" : "",
          "destination_ids" : "",
          "drivetrain" : "",
          "exterior_color" : "",
          "fuel_type" : "",
          "hotel_score" : "",
          "lease_end_date" : "",
          "lease_start_date" : "",
          "listing_type" : "",
          "make" : "",
          "model" : "",
          "neighborhood" : "",
          "num_adults" : "",
          "num_children" : "",
          "num_infants" : "",
          "origin_airport" : "",
          "postal_code" : "",
          "preferred_baths_range" : "",
          "preferred_beds_range" : "",
          "preferred_num_stops" : "",
          "preferred_price_range" : "",
          "price" : "",
          "property_type" : "",
          "region" : "",
          "returning_arrival_date" : "",
          "returning_departure_date" : "",
          "state_of_vehicle" : "",
          "transmission" : "",
          "travel_class" : "",
          "travel_end" : "",
          "travel_start" : "",
          "user_score" : "",
          "year" : "",
          // internal mapping objects
          "am" : {},
          "custom" : {},
          "event_queue" : []
        };

        // Start tag-scoped extensions
        
        utag.DB("send:13:EXTENSIONS");
        utag.DB(b);
        // End tag-scoped extensions

        // Start Mapping
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              if (u.data.hasOwnProperty(e[f]) || e[f].indexOf(".") > -1) {
                u.map_func(e[f].split("."), u.data, b[d]);
              } else {
                u.data.custom[e[f]] = b[d];
              }
            }
          } else {
            h = d.split(":");
            // handles mappings from the event mapping toolbox tab
            if (h.length === 2 && b[h[0]] === h[1]) {
              if (u.map[d]) {
                u.data.event_queue = u.data.event_queue.concat(u.map[d].split(","));
              }
            // handles mappings from the content_type and cookie consent mapping toolbox tabs
            } else if (h.length === 3 && b[h[0]] === h[1]) {
              if (u.map[d]) {
                u.data[h[2]] = u.map[d];
              }
            }
          }
        }
        utag.DB("send:13:MAPPINGS");
        utag.DB(u.data);
        // End Mapping

        // Report required config is missing, and stop tag from firing.
        if (!u.data.pixel_id) {
          utag.DB(u.id + ": Tag not fired: Required attribute 'pixel_id' not populated.");
          return;
        }

        if (u.data.consent === "grant" || u.data.consent === "revoke") {
          fbq("consent", u.data.consent);
        }

        // controls the disablePushStateFlag; if true, then the fbevents.js file will allow multiple PageView events to fire on the same page: for SPAs and AJAX sites
        if (u.data.disablePushState === "true" || u.data.disablePushState === true) {
          fbq.disablePushState = true;
        }

        if (u.data.generate_event_id === "true" || u.data.generate_event_id === true) {
          // lookup_id is used to build the eventId as well as identify the lookup in the utag.globals object; Tealium Collect can pick up the eventId from there and pass it to UDH
          lookup_id = b.tealium_random;
          if (typeof lookup_id !== "undefined") {
            utag.globals[lookup_id] = window.utag.globals[lookup_id] || {};
          } else {
            lookup_id = Math.random().toFixed(16).substring(2);
            utag.DB("send:13: The tealium_random variable was not defined. Any Facebook event IDs generated will not be collected by Tealium Collect. Please ensure you are using the latest version of utag.js to generate a tealium_random value.");
          }
        }

        if (u.data.track_single === true || u.data.track_single === "true") {
          base_tracking_type += "Single";
        }

        // Pull E-Commerce extension values
        // Mappings override E-Commerce extension values
        u.data.order_currency = u.data.order_currency || b._ccurrency || "";
        u.data.order_id = u.data.order_id || b._corder || "";
        u.data.order_subtotal = u.data.order_subtotal || b._csubtotal || "";
        if (u.data.product_category.length === 0 && b._ccat !== undefined) { u.data.product_category = b._ccat.slice(0); }
        if (u.data.product_id.length === 0 && b._cprod !== undefined) { u.data.product_id = b._cprod.slice(0); }
        if (u.data.product_name.length === 0 && b._cprodname !== undefined) { u.data.product_name = b._cprodname.slice(0); }
        if (u.data.product_quantity.length === 0 && b._cquan !== undefined) { u.data.product_quantity = b._cquan.slice(0); }
        if (u.data.product_unit_price.length === 0 && b._cprice !== undefined) { u.data.product_unit_price = b._cprice.slice(0); }

        // automatically queue PageView tracking for each Tealium view event
        if (a === "view" && (u.data.auto_page_view === true || u.data.auto_page_view === "true")) {
          u.data.event_queue.push("PageView");
        }

        // automatic Purchase tracking: if a Purchase event has not been queued and there's an order ID present, queue it
        for (i = 0; i < u.data.event_queue.length; i++) {
          if (u.data.event_queue[i] === "Purchase") {
              has_purchase = true;
          }
        }
        if (u.data.order_id && !has_purchase) {
          u.data.event_queue.push("Purchase");
        }

        // loop through the event_queue, build up the appropriate event data collection for each event, and push the collection into tracking_queue
        for (i = 0; i < u.data.event_queue.length; i++) {
          event_name = u.data.event_queue[i].replace(/ /g, '_');
          event_tracking_type = base_tracking_type;
          event_data = {};

          // generate event ID for each event
          if (u.data.generate_event_id === "true" || u.data.generate_event_id === true) {
            if (b.tealium_random) {
              event_id = u.generateEventID(event_name, b, lookup_id);
              if (window.utag.globals[b.tealium_random]) {
                //Legacy and single source implementation of event id
                window.utag.globals[b.tealium_random]["fb_event_id_" + event_name] = event_id;
                //Multi-source implementation of event id, generates one globals item per tag
                window.utag.globals[b.tealium_random]["fb_event_id_" + event_name + "_" + id] = event_id;
              }
            } else {
              utag.DB("send:13: Event ID Generation is enabled, but the tealium_random value was not found in the data layer. No event ID was generated for " + event_name);
            }

            window.utag.globals[lookup_id]["fb_event_id_" + event_name] = event_id;
          }

          // determine if standard or custom event
          if (typeof standard_events_lookup[event_name] === "undefined") {
            event_tracking_type += "Custom";
          } else {
            // add the standard FB parameters for the event; each parameter is populated by a function with the same name
            for (j = 0; j < standard_events_lookup[event_name].fb_params.length; j++) {
              fb_param = standard_events_lookup[event_name].fb_params[j];
              event_data[fb_param] = standard_params_lookup[fb_param](event_name);
            }
          }

          // add in custom mappings
          for (key in u.data.custom) {
            if (u.data.custom.hasOwnProperty(key)) {
              event_data[key] = u.data.custom[key];
            }
          }

          // add event-specific mappings to event_data, overriding existing mappings, if present
          if (typeof u.data[event_name] === "object") {
            for (key in u.data[event_name]) {
              if (u.data[event_name].hasOwnProperty(key)) {
                if (key === "value" && utag.ut.typeOf(u.data[event_name][key]) === "array" && u.data[event_name][key].length > 0) {
                  event_data[key] = parseFloat(u.data[event_name][key][0]);
                } else {
                  event_data[key] = u.data[event_name][key];
                }
              }
            }
          }

          // verify that required parameters are populated
          if (event_name === "Purchase") {
            for (key in standard_events_lookup[event_name].req_params) {
              if (standard_events_lookup[event_name].req_params.hasOwnProperty(key)) {
                if (!event_data[standard_events_lookup[event_name].req_params[key]]) {
                  utag.DB("send:13:"+ event_name + " tracking: The required parameter '" + standard_events_lookup[event_name].req_params[key] + "' is empty. ");
                  continue;
                }
              }
            }
          }

          tracking_queue.push(u.clearEmptyKeys({"event_tracking_type" : event_tracking_type, "event_name" : event_name, "event_data" : event_data, "event_id" : event_id}));
        }

        // turns a comma-separated string of IDs into an array; the template will loop through the queued tracking events for each ID
        pixel_list = u.data.pixel_id.split(/\s*,\s*/);
        for (k = 0; k < pixel_list.length; k++) {
          // setting autoConfig to false if explicitly disabled
          if (u.data.autoConfig === "false" || u.data.autoConfig === false) {
            fbq("set", "autoConfig", false, pixel_list[k]);
          }
          // init call handling; if advanced matching is turned on, then an init call is needed for every view event. otherwise an init call is only needed once per page view
          if (a === "view") {
            // check if pixel has been initialized yet
            if (!u.pixels_initialized[pixel_list[k]]) {
              //Limited data use options
              u.processing_options();

              if (u.data.advanced_matching === "true" || u.data.advanced_matching === true) {
                u.data.am = u.processAMData(u.data.am);
                if (u.isEmptyObject(u.data.am)) {
                  utag.DB("Advanced Matching is enabled, but no Advanced Matching data was mapped.");
                }
                fbq("init", pixel_list[k], u.data.am);
              } else {
                fbq("init", pixel_list[k]);
              }
              u.pixels_initialized[pixel_list[k]] = true;
            } else if (u.data.advanced_matching === "true" || u.data.advanced_matching === true) {
              fbq("init", pixel_list[k], u.processAMData(u.data.am));
            }
          }

          // if trackSingle is enabled, then the queue of event tracking is trigged for each pixel ID
          if (u.data.track_single === true || u.data.track_single === "true") {
            for (l = 0; l < tracking_queue.length; l++) {
              if (tracking_queue[l].event_id) {
                fbq(tracking_queue[l].event_tracking_type, pixel_list[k], tracking_queue[l].event_name, u.clearEmptyKeys(tracking_queue[l].event_data), {eventID : tracking_queue[l].event_id});
              } else {
                fbq(tracking_queue[l].event_tracking_type, pixel_list[k], tracking_queue[l].event_name, u.clearEmptyKeys(tracking_queue[l].event_data));
              }
            }
          }
        }

        // if trackSingle is not enabled, then event tracking is triggered only once for each queued event, regardless of the number of pixel IDs
        if (u.data.track_single !== true && u.data.track_single !== "true") {
          for (l = 0; l < tracking_queue.length; l++) {
            if (tracking_queue[l].event_id) {
              fbq(tracking_queue[l].event_tracking_type, tracking_queue[l].event_name, u.clearEmptyKeys(tracking_queue[l].event_data), {eventID : tracking_queue[l].event_id});
            } else {
              fbq(tracking_queue[l].event_tracking_type, tracking_queue[l].event_name, u.clearEmptyKeys(tracking_queue[l].event_data));
            }
          }
        }

        if (!u.scriptrequested) {
          u.scriptrequested = true;
          u.loader({
            "type" : "script",
            "src" : u.data.base_url,
            "cb" : null,
            "loc" : "script",
            "id" : "utag_13",
            "attrs" : {}
          });
        }

        utag.DB("send:13:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  }("13", "rasch.schweizer-illustrierte.ch"));
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag
