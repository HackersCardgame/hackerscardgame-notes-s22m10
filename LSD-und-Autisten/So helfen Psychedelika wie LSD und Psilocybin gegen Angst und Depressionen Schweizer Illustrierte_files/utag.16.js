//~~tv:2063.20210608
//~~tc: Fixed spelling error

var uetq = uetq || [];

//tealium universal tag - utag.sender.2063 ut4.0.202208090753, Copyright 2022 Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    var u = {"id" : id};
    utag.o[loader].sender[id] = u;
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

    u.ev = {"view" : 1, "link" : 1};
    u.initialized = false;
    u.scriptrequested = false;
    u.queue = [];

    u.map_func = function (arr, obj, item) {
      var i = arr.shift();
      obj[i] = obj[i] || {};
      if (arr.length > 0) {
        u.map_func(arr,obj[i], item);
      } else {
        obj[i] = item;
      }
    };

    u.clearEmptyKeys = function (object) {
      for (var key in object) {
        if (object[key] === "" || object[key] === undefined) {
          delete object[key];
        }
      }
      return object;
    };

    u.items = function (eventData) {
      var i, config, items = [];
      if(eventData && u.typeOf(eventData.product_id) === "array" && eventData.product_id.length > 0){
        for(i = 0; i < eventData.product_id.length; i++){
          config = {};
          if(eventData.product_brand){config.brand = eventData.product_brand[i];} else {config.brand = u.data.product_brand[i];}
          if(eventData.product_category){config.category = eventData.product_category[i];} else {config.category = u.data.product_category[i];}
          if(eventData.product_creative_name){config.creative_name = eventData.product_creative_name[i];} else {config.creative_name = u.data.product_creative_name[i];}
          if(eventData.product_creative_slot){config.creative_slot = eventData.product_creative_slot[i];} else {config.creative_slot = u.data.product_creative_slot[i];}
          if(eventData.product_id){config.id = eventData.product_id[i];} else {config.id = u.data.product_id[i];}
          if(eventData.product_location_id){config.location_id = eventData.product_location_id[i];} else {config.location_id = u.data.product_location_id[i];}
          if(eventData.product_name){config.name = eventData.product_name[i];} else {config.name = u.data.product_name[i];}
          if(eventData.product_unit_price){config.price = eventData.product_unit_price[i];} else {config.price = u.data.product_unit_price[i];}
          if(eventData.product_quantity){config.quantity = eventData.product_quantity[i];} else {config.quantity = u.data.product_quantity[i];}
          items.push(config);
        }
      } else if(eventData && u.data.product_id.length > 0){
        for(i = 0; i < u.data.product_id.length; i++){
          config = {};
          if(eventData.product_brand){config.brand = eventData.product_brand[i];} else {config.brand = u.data.product_brand[i];}
          if(eventData.product_category){config.category = eventData.product_category[i];} else {config.category = u.data.product_category[i];}
          if(eventData.product_creative_name){config.creative_name = eventData.product_creative_name[i];} else {config.creative_name = u.data.product_creative_name[i];}
          if(eventData.product_creative_slot){config.creative_slot = eventData.product_creative_slot[i];} else {config.creative_slot = u.data.product_creative_slot[i];}
          if(eventData.product_id){config.id = eventData.product_id[i];} else {config.id = u.data.product_id[i];}
          if(eventData.product_location_id){config.location_id = eventData.product_location_id[i];} else {config.location_id = u.data.product_location_id[i];}
          if(eventData.product_name){config.name = eventData.product_name[i];} else {config.name = u.data.product_name[i];}
          if(eventData.product_unit_price){config.price = eventData.product_unit_price[i];} else {config.price = u.data.product_unit_price[i];}
          if(eventData.product_quantity){config.quantity = eventData.product_quantity[i];} else {config.quantity = u.data.product_quantity[i];}
          items.push(config);
        }
      } else if (u.data.product_id.length > 0){
        for(i = 0; i < u.data.product_id.length; i++){
          config = {};
          if(u.data.product_brand){config.brand = u.data.product_brand[i];}
          if(u.data.product_category){config.category = u.data.product_category[i];}
          if(u.data.product_creative_name){config.creative_name = u.data.product_creative_name[i];}
          if(u.data.product_creative_slot){config.creative_slot = u.data.product_creative_slot[i];}
          if(u.data.product_id){config.id = u.data.product_id[i];}
          if(u.data.product_location_id){config.location_id = u.data.product_location_id[i];}
          if(u.data.product_name){config.name = u.data.product_name[i];}
          if(u.data.product_unit_price){config.price = u.data.product_unit_price[i];}
          if(u.data.product_quantity){config.quantity = u.data.product_quantity[i];}
          items.push(config);
        }
      }
      return items;
    };

    u.promotions = function (eventData) {
      var i, config,  items = [];
      if(eventData && u.typeOf(eventData.promotion_id) === "array" && eventData.promotion_id.length > 0){
        for(i = 0; i < eventData.promotion_id.length; i++){
          config = {};
          if(eventData.promotion_creative_name){config.creative_name = eventData.promotion_creative_name[i];} else {config.creative_name = u.data.promotion_creative_name[i];}
          if(eventData.promotion_creative_slot){config.creative_slot = eventData.promotion_creative_slot[i];} else {config.creative_slot = u.data.promotion_creative_slot[i];}
          if(eventData.promotion_id){config.id = eventData.promotion_id[i];} else {config.id = u.data.promotion_id[i];}
          if(eventData.promotion_name){config.name = eventData.promotion_name[i];} else {config.name = u.data.promotion_name[i];}
          items.push(config);
        }
      } else if(eventData && u.data.promotion_id.length > 0){
        for(i = 0; i < u.data.promotion_id.length; i++){
          config = {};
          if(eventData.promotion_creative_name){config.creative_name = eventData.promotion_creative_name[i];} else {config.creative_name = u.data.promotion_creative_name[i];}
          if(eventData.promotion_creative_slot){config.creative_slot = eventData.promotion_creative_slot[i];} else {config.creative_slot = u.data.promotion_creative_slot[i];}
          if(eventData.promotion_id){config.id = eventData.promotion_id[i];} else {config.id = u.data.promotion_id[i];}
          if(eventData.promotion_name){config.name = eventData.promotion_name[i];} else {config.name = u.data.promotion_name[i];}
          items.push(config);
        }
      } else if(u.data.promotion_id.length > 0){
        for(i = 0; i < u.data.promotion_id.length; i++){
          config = {};
          if(u.data.promotion_creative_name){config.creative_name = u.data.promotion_creative_name[i];}
          if(u.data.promotion_creative_slot){config.creative_slot = u.data.purchaseId[i];}
          if(u.data.promotion_id){config.id = u.data.promotion_id[i];}
          if(u.data.promotion_name){config.name = u.data.promotion_name[i];}
          items.push(config);
        }
      }
      return items;
    };

    u.event_map = {
      "add_payment_info": [ ],
      "add_to_cart": [{ "name":"event_value" }, { "name":"currency" }, { "name":"items" } ],
      "add_to_wishlist": [{ "name":"event_value" }, { "name":"currency" }, { "name":"items" } ],
      "begin_checkout": [{ "name":"event_value" }, { "name":"currency" }, { "name":"items" }, { "name":"coupon" } ],
      "checkout_progress": [{ "name":"event_value" }, { "name":"currency" }, { "name":"items" }, { "name":"coupon" }, { "name":"checkout_step" }, { "name":"checkout_option" } ],
      "exception": [{ "name":"description" }, { "name":"fatal" } ],
      "generate_lead": [{ "name":"event_value" }, { "name":"currency" }, { "name":"transaction_id" } ],
      "login": [{ "name":"method" } ],
      "page_view": [ ],
      "purchase": [{ "name":"transaction_id" }, { "name":"event_value" }, { "name":"currency" }, { "name":"tax" }, { "name":"shipping" }, { "name":"items" }, { "name":"coupon" }, { "name":"revenue_value" } ],
      "refund": [{ "name":"transaction_id" }, { "name":"event_value" }, { "name":"currency" }, { "name":"tax" }, { "name":"shipping" }, { "name":"items" } ],
      "remove_from_cart": [{ "name":"event_value" }, { "name":"currency" }, { "name":"items" } ],
      "screen_view": [{ "name":"screen_name" } ],
      "search": [{ "name":"search_term" } ],
      "select_content": [{ "name":"items" }, { "name":"promotion" }, { "name":"content_type" }, { "name":"content_id" } ],
      "set_checkout_option": [{ "name":"checkout_step" }, { "name":"checkout_option" } ],
      "share": [{ "name":"method" }, { "name":"content_type" }, { "name":"content_id" } ],
      "sign_up": [{ "name":"method" } ],
      "timing_complete": [{ "name":"name" }, { "name":"event_value" } ],
      "view_item": [{ "name":"items" } ],
      "view_item_list": [{ "name":"items" } ],
      "view_promotion": [{ "name":"promotions" } ],
      "view_search_results": [{ "name":"search_term" } ],
      "retail": [{ "name":"event_action" }, { "name":"ecomm_prodid" }, { "name":"ecomm_pagetype" }, { "name":"ecomm_totalvalue" }, { "name":"ecomm_category" } ],
      "travel": [{ "name":"event_action" }, { "name":"travel_destid" }, { "name":"travel_originid" }, { "name":"travel_pagetype" }, { "name":"travel_startdate" }, { "name":"travel_enddate" }, { "name":"travel_totalvalue" } ],
      "hotel": [{ "name":"event_action" }, { "name":"currency" }, { "name":"hct_base_price" }, { "name":"hct_total_price" }, { "name":"hct_checkin_date" }, { "name":"hct_checkout_date" }, { "name":"hct_length_of_stay" }, { "name":"hct_partner_hotel_id" }, { "name":"hct_booking_xref" }, { "name":"hct_pagetype" } ]
    };

    u.std_params = {
      "event_value" : function(_event) {
        if (u.data[_event] && u.data[_event].event_value){
          return u.data[_event].event_value;
        } else if (u.data.event_value){
          return u.data.event_value;
        } else if (u.data[_event] && u.data[_event].order_subtotal){
          return u.data[_event].order_subtotal;
        } else {
          return u.data.order_subtotal;
        }
      },
      "event_action" : function(_event) {
        if (u.data[_event] && u.data[_event].event_action){
          return u.data[_event].event_action;
        } else {
          return u.data.event_action;
        }
      },
      "event_label" : function(_event) {
        if (u.data[_event] && u.data[_event].event_label){
          return u.data[_event].event_label;
        } else {
          return u.data.event_label;
        }
      },
      "event_category" : function(_event) {
        if (u.data[_event] && u.data[_event].event_category){
          return u.data[_event].event_category;
        } else {
          return u.data.event_category;
        }
      },
      "currency" : function(_event) {
        if (u.data[_event] && u.data[_event].order_currency){
          return u.data[_event].order_currency;
        } else {
          return u.data.order_currency;
        }
      },
      "items" : function (_event) {
        return u.items(u.data[_event]);
      },
      "coupon" : function(_event) {
        if (u.data[_event] && u.data[_event].order_coupon_code){
          return u.data[_event].order_coupon_code;
        } else {
          return u.data.order_coupon_code;
        }
      },
      "checkout_step" : function(_event) {
        if (u.data[_event] && u.data[_event].checkout_step){
          return u.data[_event].checkout_step;
        } else {
          return u.data.checkout_step;
        }
      },
      "checkout_option" : function(_event) {
        if (u.data[_event] && u.data[_event].checkout_option){
          return u.data[_event].checkout_option;
        } else {
          return u.data.checkout_option;
        }
      },
      "description" : function(_event) {
        if (u.data[_event] && u.data[_event].description){
          return u.data[_event].description;
        } else {
          return u.data.description;
        }
      },
      "fatal" : function(_event) {
        if (u.data[_event] && u.data[_event].fatal){
          return u.data[_event].fatal;
        } else {
          return u.data.fatal;
        }
      },
      "tax" : function(_event) {
        if (u.data[_event] && u.data[_event].order_tax){
          return u.data[_event].order_tax;
        } else {
          return u.data.order_tax;
        }
      },
      "shipping" : function(_event) {
        if (u.data[_event] && u.data[_event].order_shipping){
          return u.data[_event].order_shipping;
        } else {
          return u.data.order_shipping;
        }
      },
      "transaction_id" : function(_event) {
        if (u.data[_event] && u.data[_event].order_id){
          return u.data[_event].order_id;
        } else {
          return u.data.order_id;
        }
      },
      "revenue_value" : function(_event) {
        if (u.data[_event] && u.data[_event].revenue_value){
          return u.data[_event].revenue_value;
        }
      },
      "method" : function(_event) {
        if (u.data[_event] && u.data[_event].method){
          return u.data[_event].method;
        } else {
          return u.data.method;
        }
      },
      "screen_name" : function(_event) {
        if (u.data[_event] && u.data[_event].screen_name){
          return u.data[_event].screen_name;
        } else {
          return u.data.screen_name;
        }
      },
      "search_term" : function(_event) {
        if (u.data[_event] && u.data[_event].search_term){
          return u.data[_event].search_term;
        } else {
          return u.data.search_term;
        }
      },
      "promotions" : function(_event) {
        return u.promotions(u.data[_event]);
      },
      "content_type" : function(_event) {
        if (u.data[_event] && u.data[_event].content_type){
          return u.data[_event].content_type;
        } else {
          return u.data.content_type;
        }
      },
      "content_id" : function(_event) {
        if (u.data[_event] && u.data[_event].content_id){
          return u.data[_event].content_id;
        } else {
          return u.data.content_id;
        }
      },
      "name" : function(_event) {
        if (u.data[_event] && u.data[_event].name){
          return u.data[_event].name;
        } else {
          return u.data.name;
        }
      },
      "ecomm_prodid" : function(_event) {
        if (u.data[_event] && u.data[_event].ecomm_prodid){
          return u.data[_event].ecomm_prodid;
        } else {
          return u.data.ecomm_prodid;
        }
      },
      "ecomm_pagetype" : function(_event) {
        if (u.data[_event] && u.data[_event].ecomm_pagetype){
          return u.data[_event].ecomm_pagetype;
        } else {
          return u.data.ecomm_pagetype;
        }
      },
      "ecomm_totalvalue" : function(_event) {
        if (u.data[_event] && u.data[_event].ecomm_totalvalue){
          return u.data[_event].ecomm_totalvalue;
        } else {
          return u.data.ecomm_totalvalue;
        }
      },
      "ecomm_category" : function(_event) {
        if (u.data[_event] && u.data[_event].ecomm_category){
          return u.data[_event].ecomm_category;
        } else {
          return u.data.ecomm_category;
        }
      },
      "travel_destid" : function(_event) {
        if (u.data[_event] && u.data[_event].travel_destid){
          return u.data[_event].travel_destid;
        } else {
          return u.data.travel_destid;
        }
      },
      "travel_originid" : function(_event) {
        if (u.data[_event] && u.data[_event].travel_originid){
          return u.data[_event].travel_originid;
        } else {
          return u.data.travel_originid;
        }
      },
      "travel_pagetype" : function(_event) {
        if (u.data[_event] && u.data[_event].travel_pagetype){
          return u.data[_event].travel_pagetype;
        } else {
          return u.data.travel_pagetype;
        }
      },
      "travel_startdate" : function(_event) {
        if (u.data[_event] && u.data[_event].travel_startdate){
          return u.data[_event].travel_startdate;
        } else {
          return u.data.travel_startdate;
        }
      },
      "travel_enddate" : function(_event) {
        if (u.data[_event] && u.data[_event].travel_enddate){
          return u.data[_event].travel_enddate;
        } else {
          return u.data.travel_enddate;
        }
      },
      "travel_totalvalue" : function(_event) {
        if (u.data[_event] && u.data[_event].travel_totalvalue){
          return u.data[_event].travel_totalvalue;
        } else {
          return u.data.travel_totalvalue;
        }
      },
      "hct_base_price" : function(_event) {
        if (u.data[_event] && u.data[_event].hct_base_price){
          return u.data[_event].hct_base_price;
        } else if (u.data.hct_base_price){
          return u.data.hct_base_price;
        } else if (u.data[_event] && u.data[_event].hct_bpr){
          return u.data[_event].hct_bpr;
        } else {
          return u.data.hct_bpr;
        }
      },
      "hct_total_price" : function(_event) {
        if (u.data[_event] && u.data[_event].hct_total_price){
          return u.data[_event].hct_total_price;
        } else if (u.data.hct_total_price){
          return u.data.hct_total_price;
        } else if (u.data[_event] && u.data[_event].hct_tpr){
          return u.data[_event].hct_tpr;
        } else{
          return u.data.hct_tpr;
        }
      },
      "hct_checkin_date" : function(_event) {
        if (u.data[_event] && u.data[_event].hct_checkin_date){
          return u.data[_event].hct_checkin_date;
        } else if (u.data.hct_checkin_date){
          return u.data.hct_checkin_date;
        } else if (u.data[_event] && u.data[_event].hct_cid){
          return u.data[_event].hct_cid;
        } else{
          return u.data.hct_cid;
        }
      },
      "hct_checkout_date" : function(_event) {
        if (u.data[_event] && u.data[_event].hct_checkout_date){
          return u.data[_event].hct_checkout_date;
        } else if (u.data.hct_checkout_date){
          return u.data.hct_checkout_date;
        } else if (u.data[_event] && u.data[_event].hct_cod){
          return u.data[_event].hct_cod;
        } else {
          return u.data.hct_cod;
        }
      },
      "hct_length_of_stay" : function(_event) {
        if (u.data[_event] && u.data[_event].hct_length_of_stay){
          return u.data[_event].hct_length_of_stay;
        } else if (u.data.hct_length_of_stay){
          return u.data.hct_length_of_stay;
        } else if (u.data[_event] && u.data[_event].hct_los){
          return u.data[_event].hct_los;
        } else {
          return u.data.hct_los;
        }
      },
      "hct_partner_hotel_id" : function(_event) {
        if (u.data[_event] && u.data[_event].hct_partner_hotel_id){
          return u.data[_event].hct_partner_hotel_id;
        } else if (u.data.hct_partner_hotel_id){
          return u.data.hct_partner_hotel_id;
        } else if (u.data[_event] && u.data[_event].hct_pid){
          return u.data[_event].hct_pid;
        } else {
          return u.data.hct_pid;
        }
      },
      "hct_booking_xref" : function(_event) {
        if (u.data[_event] && u.data[_event].hct_booking_xref){
          return u.data[_event].hct_booking_xref;
        } else if (u.data.hct_booking_xref){
          return u.data.hct_booking_xref;
        } else if (u.data[_event] && u.data[_event].hct_bid){
          return u.data[_event].hct_bid;
        } else {
          return u.data.hct_bid;
        }
      },
      "hct_pagetype" : function(_event) {
        if (u.data[_event] && u.data[_event].hct_pagetype){
          return u.data[_event].hct_pagetype;
        } else {
          return u.data.hct_pagetype;
        }
      }
    };

      u.map={"piano_product_type:subscription":"checkout_complete","piano_product_type:registration":"checkout_complete","piano_product_type":"checkout_complete.event_category","_sm_16_2":"event_action","piano_conversion_value":"checkout_complete.revenue_value"};
  u.extend=[function(a,b){
try{b['_sm_16_2']="purchase";}catch(e){utag.DB(e);}
}];


    // Start Loader Callback
    u.loader_cb = function (a, b, c) {
      utag.DB("send:16:CALLBACK");

      if (!u.initialized) {
        var o = {ti: u.data.tagid};
        o.q = uetq;
        uetq = new UET(o);
        uetq.push("pageLoad");
      }

      u.initialized = true;
      var i, j, event_param, _event;

      for (i = 0; i < u.data.event.length; i++) {
        _event = u.data.event[i];
        u.data.eventData[_event] = u.data.eventData[_event] || {};

        if (u.event_map[_event]) {
          for (j = 0; j < u.event_map[_event].length; j++) {
            event_param = u.event_map[_event][j];
            u.data.eventData[_event][event_param.name] = u.std_params[event_param.name](_event);
            if (u.data.eventData[_event][event_param.name] === undefined && event_param.required) {
              utag.DB(u.id + ": Event: " + _event + ": Required attribute not populated");
            }
          }
        }

        var data = {}, keyname, event_action;
        var customEventData = {};
        for(keyname in u.data.custom){
          customEventData[keyname] = u.data.custom[keyname];
        }
        if (u.data[_event] && u.data[_event].custom){
          for(keyname in u.data[_event].custom){
            customEventData[keyname] = u.data[_event].custom[keyname];
          }
        }

        switch (_event) {
        case "add_payment_info" :
        case "page_view" :
          window.uetq.push ("event", _event, u.data[_event]);
          break;
        case "add_to_cart" :
        case "remove_from_cart" :
        case "add_to_wishlist" :
        case "begin_checkout" :
        case "checkout_progress" :
          data = {
            event_value: u.data.eventData[_event].event_value,
            currency: u.data.eventData[_event].currency,
            items: u.data.eventData[_event].items
          };
          if (_event === "begin_checkout" || _event === "checkout_progress") {
            data.coupon = u.data.eventData[_event].coupon;
          }
          if (_event === "checkout_progress") {
            data.checkout_step = u.data.eventData[_event].checkout_step;
            data.checkout_option = u.data.eventData[_event].checkout_option;
          }
          for(keyname in customEventData){
            data[keyname] = customEventData[keyname];
          }
          u.clearEmptyKeys(data);
          window.uetq.push ("event", _event, data);
          break;
        case "exception" :
          data = {
            description: u.data.eventData[_event].description,
            fatal: u.data.eventData[_event].fatal
          };
          for(keyname in customEventData){
            data[keyname] = customEventData[keyname];
          }
          u.clearEmptyKeys(data);
          window.uetq.push ("event", _event, data);
          break;
        case "generate_lead" :
        case "purchase" :
        case "refund" :
          data = {
            event_value: u.data.eventData[_event].event_value,
            currency: u.data.eventData[_event].currency,
            transaction_id: u.data.eventData[_event].transaction_id
          };
          if (_event === "purchase") {
            data.coupon = u.data.eventData[_event].coupon;
            data.revenue_value = u.data.eventData[_event].revenue_value;
          }
          if (_event === "purchase" || _event === "refund") {
            data.tax = u.data.eventData[_event].tax;
            data.shipping = u.data.eventData[_event].shipping;
            data.items = u.data.eventData[_event].items;
          }
          for(keyname in customEventData){
            data[keyname] = customEventData[keyname];
          }
          u.clearEmptyKeys(data);
          window.uetq.push ("event", _event, data);
          break;
        case "login" :
        case "sign_up" :
        case "share" :
          data = {
            method: u.data.eventData[_event].method
          };
          if (_event === "share") {
            data.content_type = u.data.eventData[_event].content_type;
            data.content_id = u.data.eventData[_event].content_id;
          }
          for(keyname in customEventData){
            data[keyname] = customEventData[keyname];
          }
          u.clearEmptyKeys(data);
          window.uetq.push ("event", _event, data);
          break;
        case "select_content" :
          data = {
            items: u.data.eventData[_event].items,
            promotions: u.data.eventData[_event].promotions,
            content_type: u.data.eventData[_event].content_type,
            content_id: u.data.eventData[_event].content_id
          };
          for(keyname in customEventData){
            data[keyname] = customEventData[keyname];
          }
          u.clearEmptyKeys(data);
          window.uetq.push ("event", _event, data);
          break;
        case "set_checkout_option" :
          data = {
            checkout_step: u.data.eventData[_event].checkout_step,
            checkout_option: u.data.eventData[_event].checkout_option
          };
          for(keyname in customEventData){
            data[keyname] = customEventData[keyname];
          }
          u.clearEmptyKeys(data);
          window.uetq.push ("event", _event, data);
          break;
        case "screen_view" :
          data = {
            screen_name: u.data.eventData[_event].screen_name
          };
          for(keyname in customEventData){
            data[keyname] = customEventData[keyname];
          }
          u.clearEmptyKeys(data);
          window.uetq.push ("event", _event, data);
          break;
        case "search" :
        case "view_search_results" :
          data = {
            search_term: u.data.eventData[_event].search_term
          };
          for(keyname in customEventData){
            data[keyname] = customEventData[keyname];
          }
          u.clearEmptyKeys(data);
          window.uetq.push ("event", _event, data);
          break;
        case "view_item" :
        case "view_item_list" :
          data = {
            items: u.data.eventData[_event].items
          };
          for(keyname in customEventData){
            data[keyname] = customEventData[keyname];
          }
          u.clearEmptyKeys(data);
          window.uetq.push ("event", _event, data);
          break;
        case "timing_complete" :
          data = {
            name: u.data.eventData[_event].name,
            event_value: u.data.eventData[_event].event_value
          };
          for(keyname in customEventData){
            data[keyname] = customEventData[keyname];
          }
          u.clearEmptyKeys(data);
          window.uetq.push ("event", _event, data);
          break;
        case "view_promotion" :
          data = {
            promotions: u.data.eventData[_event].promotions
          };
          for(keyname in customEventData){
            data[keyname] = customEventData[keyname];
          }
          u.clearEmptyKeys(data);
          window.uetq.push ("event", _event, data);
          break;
        case "retail" :
          data = {
            ecomm_pagetype: u.data.eventData[_event].ecomm_pagetype,
            ecomm_prodid: u.data.eventData[_event].ecomm_prodid,
            ecomm_totalvalue: u.data.eventData[_event].ecomm_totalvalue,
            ecomm_category: u.data.eventData[_event].ecomm_category
          };
          for(keyname in customEventData){
            data[keyname] = customEventData[keyname];
          }
          u.clearEmptyKeys(data);
          event_action = u.data.eventData[_event].event_action || "";
          window.uetq.push("event", event_action, data);
          break;
        case "travel" :
          data = {
            travel_destid: u.data.eventData[_event].travel_destid,
            travel_originid: u.data.eventData[_event].travel_originid,
            travel_pagetype: u.data.eventData[_event].travel_pagetype,
            travel_startdate: u.data.eventData[_event].travel_startdate,
            travel_endadate: u.data.eventData[_event].travel_endadate,
            travel_totalvalue: u.data.eventData[_event].travel_totalvalue
          };
          for(keyname in customEventData){
            data[keyname] = customEventData[keyname];
          }
          u.clearEmptyKeys(data);
          event_action = u.data.eventData[_event].event_action || "";
          window.uetq.push("event", event_action, data);
          break;
        case "hotel" :
          data = {
            hct_base_price: u.data.eventData[_event].hct_base_price,
            hct_total_price: u.data.eventData[_event].hct_total_price,
            currency: u.data.eventData[_event].currency,
            hct_checkin_date: u.data.eventData[_event].hct_checkin_date,
            hct_checkout_date: u.data.eventData[_event].hct_checkout_date,
            hct_length_of_stay: u.data.eventData[_event].hct_length_of_stay,
            hct_partner_hotel_id: u.data.eventData[_event].hct_partner_hotel_id,
            hct_pagetype: u.data.eventData[_event].hct_pagetype
          };
          for(keyname in customEventData){
            data[keyname] = customEventData[keyname];
          }
          u.clearEmptyKeys(data);
          event_action = u.data.eventData[_event].event_action || "";
          window.uetq.push("event", event_action, data);
          break;
        default :
          data = {};
          for(keyname in u.data[_event]){
            if(keyname !== "event_action" || keyname !== "custom")
            data[keyname] = u.data[_event][keyname];
          }
          if(data.event_category === undefined){data.event_category = u.data.event_category || "";}
          if(data.event_label === undefined){data.event_label = u.data.event_label || "";}
          if(data.event_value === undefined){data.event_value = u.data.event_value || "";}

          for(keyname in customEventData){
            data[keyname] = customEventData[keyname];
          }
          u.clearEmptyKeys(data);
          event_action = u.data.eventData[_event].event_action || u.data.event_action || "";
          window.uetq.push ("event", event_action , data);
          break;
        }
      }



      utag.DB("send:16:CALLBACK:COMPLETE");
    };
    // End Loader Callback

    u.callBack = function () {
      var data = {};
      while (data = u.queue.shift()) {
        u.data = data.data;
        u.loader_cb(data.a, data.b, data.c);
      }
    };

    u.send = function (a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        utag.DB("send:16");
        utag.DB(b);

        var c, d, e, f, h;

        u.data = {
          "qsp_delim" : "&",
          "kvp_delim" : "=",
          "base_url" : "//bat.bing.com/bat.js",
          "tagid" : "148008852",
          // E-Commerce Vars
          "product_id" : [],
          "product_name" : [],
          "product_brand" : [],
          "product_category" : [],
          "product_quantity" : [],
          "product_unit_price" : [],
          "product_creative_slot" : [],
          "product_creative_name" : [],
          "product_location_id" : [],
          "promotion_creative_name" : [],
          "promotion_creative_slot" : [],
          "promotion_id" : [],
          "promotion_name" : [],
          "event" : [],
          "eventData" : {},
          "custom" : {}
        };

        // Start tag-scoped extensions
        for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};
        utag.DB("send:16:EXTENSIONS");
        utag.DB(b);
        // End tag-scoped extensions

        c = [];

        // Start Mapping
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              u.map_func(e[f].split("."), u.data, b[d]);
            }
          } else {
            h = d.split(":");
            if (h.length === 2 && b[h[0]] === h[1]) {
              if (u.map[d]) {
                u.data.event = u.data.event.concat(u.map[d].split(","));
              }
            }
          }
        }
        utag.DB("send:16:MAPPINGS");
        utag.DB(u.data);
        // End Mapping

        // Pull E-Commerce extension values
        // Mappings override E-Commerce extension values
        u.data.order_id = u.data.order_id || b._corder || "";
        u.data.order_subtotal = u.data.order_subtotal || b._csubtotal || "";
        u.data.order_shipping = u.data.order_shipping || b._cship || "";
        u.data.order_tax = u.data.order_tax || b._ctax || "";
        u.data.order_currency = u.data.order_currency || b._ccurrency || "";
        u.data.order_coupon_code = u.data.order_coupon_code || b._cpromo || "";
        if (u.data.product_id.length === 0 && b._cprod !== undefined) { u.data.product_id = b._cprod.slice(0); }
        if (u.data.product_name.length === 0 && b._cprodname !== undefined) { u.data.product_name = b._cprodname.slice(0); }
        if (u.data.product_brand.length === 0 && b._cbrand !== undefined) { u.data.product_brand = b._cbrand.slice(0); }
        if (u.data.product_category.length === 0 && b._ccat !== undefined) { u.data.product_category = b._ccat.slice(0); }
        if (u.data.product_quantity.length === 0 && b._cquan !== undefined) { u.data.product_quantity = b._cquan.slice(0); }
        if (u.data.product_unit_price.length === 0 && b._cprice !== undefined) { u.data.product_unit_price = b._cprice.slice(0); }
        if (u.data.event.length === 0 && b._cevent !== undefined) { u.data.event = (u.typeOf(b._cevent) === "array") ? b._cevent.slice(0) : [b._cevent] ; }

        // Report required config is missing, and stop tag from firing.
        if (!u.data.tagid) {
          utag.DB(u.id + ": Tag not fired: Required attribute not populated");
          return;
        }

        if (u.initialized) {
          u.loader_cb(a, b, c);
        } else {
          // While waiting for the external library to load, queue up all of the events with their corresponding data objects.
          u.queue.push({"data" : u.data, "a" : a, "b" : b, "c" : c});
          if (!u.scriptrequested) {
            u.scriptrequested = true;
            u.loader({
              "type" : "script",
              "src" : u.data.base_url,
              "cb" : u.callBack,
              "loc" : "script",
              "id" : "utag_16",
              "attrs" : {}
            });
          }
        }

        utag.DB("send:16:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  }("16", "rasch.schweizer-illustrierte.ch"));
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag
