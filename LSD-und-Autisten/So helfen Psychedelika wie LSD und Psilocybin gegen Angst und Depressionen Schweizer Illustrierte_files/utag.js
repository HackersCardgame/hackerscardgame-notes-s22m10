//tealium universal tag - utag.loader ut4.46.202210140945, Copyright 2022 Tealium.com Inc. All Rights Reserved. 

var utag_condload=false;window.__tealium_twc_switch=false;try{ try{
//window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
//window.utag_cfg_ovrd.noview = false;

//init dataLayer if not correctly initialized (as we don't have GTM installed)
if (!Array.isArray(window.dataLayer)) {
  window.dataLayer = [];
}
} catch(e){ console.log(e) } }catch(e){console.log(e);}

if (typeof utag == "undefined" && !utag_condload) {
  var utag = {
    id:"rasch.schweizer-illustrierte.ch",
    o:{},
    sender: {},
    send: {},
    rpt: {
      ts: {
        a: new Date()
      }
    },
    dbi: [],
    db_log : [],
    loader: {
      q: [],
      lc: 0,
      f: {},
      p: 0,
      ol: 0,
      wq: [],
      lq: [],
      bq: {},
      bk: {},
      rf: 0,
      ri: 0,
      rp: 0,
      rq: [],
      ready_q : [], 
      sendq :{"pending":0},
      run_ready_q : function(){
        for(var i=0;i<utag.loader.ready_q.length;i++){
          utag.DB("READY_Q:"+i);
          try{utag.loader.ready_q[i]()}catch(e){utag.DB(e)};
        }
      },
      lh: function(a, b, c) {
        a = "" + location.hostname;
        b = a.split(".");
        c = (/\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\.|\...\.jp$/.test(a)) ? 3 : 2;
        return b.splice(b.length - c, c).join(".");
      },
      WQ: function(a, b, c, d, g) {
        utag.DB('WQ:' + utag.loader.wq.length);
        try {
          // this picks up a utag_data items added after utag.js was loaded
          // Gotcha: Data layer set after utag.js will not overwrite something already set via an extension.  Only "new" values are copied from utag_data
          // for case where utag_data is set after utag.js is loaded
          if(utag.udoname && utag.udoname.indexOf(".")<0){
            utag.ut.merge(utag.data,window[utag.udoname],0);
          }

          // TBD: utag.handler.RE('view',utag.data,"bwq");
          // process load rules again if this flag is set
          if(utag.cfg.load_rules_at_wait){
            utag.handler.LR(utag.data);
          }
        } catch (e) {utag.DB(e)};
	
	d=0;
        g=[]; 
        for (a = 0; a < utag.loader.wq.length; a++) {
          b = utag.loader.wq[a];
	  b.load = utag.loader.cfg[b.id].load;
          if (b.load == 4){
            //LOAD the bundled tag set to wait here
            this.f[b.id]=0;
            utag.loader.LOAD(b.id)
          }else if (b.load > 0) {
            g.push(b);
            //utag.loader.AS(b); // moved: defer loading until flags cleared
	    d++;
          }else{
            // clear flag for those set to wait that were not actually loaded
            this.f[b.id]=1;
          }
        }
        for (a = 0; a < g.length; a++) {
          utag.loader.AS(g[a]);
        }

	if(d==0){
	  utag.loader.END();
	}
      },
      AS: function(a, b, c, d) {
        utag.send[a.id] = a;
        if (typeof a.src == 'undefined') {
          a.src = utag.cfg.path + ((typeof a.name != 'undefined') ? a.name : 'ut' + 'ag.' + a.id + '.js')
        }
        a.src += (a.src.indexOf('?') > 0 ? '&' : '?') + 'utv=' + (a.v?utag.cfg.template+a.v:utag.cfg.v);
        utag.rpt['l_' + a.id] = a.src;
        b = document;
        this.f[a.id]=0;
        if (a.load == 2) {
          utag.DB("Attach sync: "+a.src);
          a.uid=a.id;
          b.write('<script id="utag_' + a.id + '" src="' + a.src + '"></scr' + 'ipt>')
          if(typeof a.cb!='undefined')a.cb();
        } else if(a.load==1 || a.load==3) {
          if (b.createElement) {
            c = 'utag_rasch.schweizer-illustrierte.ch_'+a.id;
            if (!b.getElementById(c)) {
	      d = {
	        src:a.src,
		id:c,
                uid:a.id,
		loc:a.loc
              }
              if(a.load == 3){d.type="iframe"};
	      if(typeof a.cb!='undefined')d.cb=a.cb;
              utag.ut.loader(d);
            }
          }
        }
      },
      GV: function(a, b, c) {
        b = {};
        for (c in a) {
          if (a.hasOwnProperty(c) && typeof a[c] != "function") b[c] = a[c];
        }
        return b
      },
      OU: function(tid, tcat, a, b, c, d, f, g) {
        g = {};
        utag.loader.RDcp(g);
        try {
          if (typeof g['cp.OPTOUTMULTI'] != 'undefined') {
            c = utag.loader.cfg;
            a = utag.ut.decode(g['cp.OPTOUTMULTI']).split('|');
            for (d = 0; d < a.length; d++) {
              b = a[d].split(':');
              if (b[1] * 1 !== 0) {
                if (b[0].indexOf('c') == 0) {
                  for (f in utag.loader.GV(c)) {
                    if (c[f].tcat == b[0].substring(1)) c[f].load = 0;
                    // if we know the tid but don't know the category and this is a category opt out...
                    if (c[f].tid == tid && c[f].tcat == b[0].substring(1)) return true; 
                  }
                  if (tcat == b[0].substring(1)) return true;
                } else if (b[0] * 1 == 0) {
                  utag.cfg.nocookie = true
                } else {
                  for (f in utag.loader.GV(c)) {
                    if (c[f].tid == b[0]) c[f].load = 0
                  }
                  if (tid == b[0]) return true;
                }
              }
            }
          }
        } catch (e) {utag.DB(e)}
        return false;
      },
      RDdom: function(o){
        var d = document || {}, l = location || {};
        o["dom.referrer"] = d.referrer;
        o["dom.title"] = "" + d.title;
        o["dom.domain"] = "" + l.hostname;
        o["dom.query_string"] = ("" + l.search).substring(1);
        o["dom.hash"] = ("" + l.hash).substring(1);
        o["dom.url"] = "" + d.URL;
        o["dom.pathname"] = "" + l.pathname;
        o["dom.viewport_height"] = window.innerHeight || (d.documentElement?d.documentElement.clientHeight:960);
        o["dom.viewport_width"] = window.innerWidth || (d.documentElement?d.documentElement.clientWidth:960);
      },
      RDcp: function(o, b, c, d){
        b = utag.loader.RC();
        for (d in b) {
          if (d.match(/utag_(.*)/)) {
            for (c in utag.loader.GV(b[d])) {
              o["cp.utag_" + RegExp.$1 + "_" + c] = b[d][c];
            }
          }
        }
        for (c in utag.loader.GV((utag.cl && !utag.cl['_all_']) ? utag.cl : b)) {
          if (c.indexOf("utag_") < 0 && typeof b[c] != "undefined") o["cp." + c] = b[c];
        }
      },
      RDqp: function(o, a, b, c){
        a = location.search + (location.hash+'').replace("#","&");
        if(utag.cfg.lowerqp){a=a.toLowerCase()};
        if (a.length > 1) {
          b = a.substring(1).split('&');
          for (a = 0; a < b.length; a++) {
            c = b[a].split("=");
            if(c.length>1){
              o["qp." + c[0]] = utag.ut.decode(c[1])
            }
          }
        }
      },
      RDmeta: function(o, a, b, h){
        a = document.getElementsByTagName("meta");
        for (b = 0; b < a.length; b++) {
          try{
            h = a[b].name || a[b].getAttribute("property") || ""; 
          }catch(e){h="";utag.DB(e)};
          if (utag.cfg.lowermeta){h=h.toLowerCase()};
          if (h != ""){o["meta." + h] = a[b].content}
        }
      },
      RDva: function(o){
        // Read visitor attributes in local storage
        var readAttr = function(o, l ){
          var a = "", b;
          a = localStorage.getItem(l);
          if(!a || a=="{}")return;
          b = utag.ut.flatten({va : JSON.parse(a)});
          utag.ut.merge(o,b,1);
        }
        try{
          readAttr(o, "tealium_va" );
          readAttr(o, "tealium_va_" + o["ut.account"] + "_" + o["ut.profile"] );
        }catch(e){ utag.DB(e) }
      },
      RDut: function(o, a){
        // Add built-in data types to the data layer for use in mappings, extensions and RDva function.
        var t = {};
        var d = new Date();
        var m = ( utag.ut.typeOf(d.toISOString) == "function" );
        o["ut.domain"] = utag.cfg.domain;
        o["ut.version"] = utag.cfg.v;
        // i.e. "view" or "link"
        t["tealium_event"] = o["ut.event"] = a || "view";
        t["tealium_visitor_id"] = o["ut.visitor_id"]=o["cp.utag_main_v_id"];
        t["tealium_session_id"] = o["ut.session_id"]=o["cp.utag_main_ses_id"];
        t["tealium_session_number"] = o["cp.utag_main__sn"];
        t["tealium_session_event_number"] = o["cp.utag_main__se"];
        try{
          t["tealium_datasource"] = utag.cfg.datasource;
          t["tealium_account"] = o["ut.account"] = utag.cfg.utid.split("/")[0];
          t["tealium_profile"] = o["ut.profile"] = utag.cfg.utid.split("/")[1];
          t["tealium_environment"] = o["ut.env"] = utag.cfg.path.split("/")[6];
        }catch(e){ utag.DB(e) }

        t["tealium_random"] = Math.random().toFixed(16).substring(2);
        t["tealium_library_name"] = "ut"+"ag.js";
        t["tealium_library_version"] = ( utag.cfg.template + "0" ).substring(2);
        t["tealium_timestamp_epoch"] = Math.floor( d.getTime() / 1000 );
        t["tealium_timestamp_utc"] = ( m ? d.toISOString() : "");
        // Adjust date to local time
        d.setHours( d.getHours() - ( d.getTimezoneOffset() / 60 ) );
        t["tealium_timestamp_local"] = ( m ? d.toISOString().replace( "Z","" ) : "" );

        // Any existing data elements with "tealium_" will not be overwritten
        utag.ut.merge( o, t, 0 );
      },
      RDses: function( o, a, c ) {
        a = (new Date()).getTime();
        c = ( a + parseInt( utag.cfg.session_timeout ) ) + "";

        // cp.utag_main_ses_id will not be in the data layer when it has expired or this is first page view of all time
	if ( !o["cp.utag_main_ses_id"] ) {
          o["cp.utag_main_ses_id"] = a + "";
          o["cp.utag_main__ss"] = "1";
          o["cp.utag_main__se"] = "1";
          o["cp.utag_main__sn"] = ( 1 + parseInt( o["cp.utag_main__sn"] || 0 ) ) + "";
        } else {
          o["cp.utag_main__ss"] = "0";
          o["cp.utag_main__se"] = ( 1 + parseInt( o["cp.utag_main__se"] || 0 ) ) + "";
        }

        o["cp.utag_main__pn"] = o["cp.utag_main__pn"] || "1";
        o["cp.utag_main__st"] = c;

        utag.loader.SC( "utag_main", { "_sn": ( o["cp.utag_main__sn"] || 1 ), "_se": o["cp.utag_main__se"], "_ss": o["cp.utag_main__ss"], "_st": c, "ses_id": ( o["cp.utag_main_ses_id"] || a ) + ";exp-session", "_pn": o["cp.utag_main__pn"] + ";exp-session" } );
      },
      RDpv: function( o ) {
        if ( typeof utag.pagevars == "function" ) {
          utag.DB("Read page variables");
          utag.pagevars(o);
        }
      },
      RD: function( o, a ) {
        utag.DB("utag.loader.RD");
        utag.DB(o);

        utag.loader.RDcp(o);

        if ( !utag.loader.rd_flag ) {
          utag.loader.rd_flag = 1;
          o["cp.utag_main_v_id"] = o["cp.utag_main_v_id"] || utag.ut.vi((new Date()).getTime());
          o["cp.utag_main__pn"] = ( 1 + parseInt( o["cp.utag_main__pn"] || 0 ) ) + "";
          // the _st value is not-yet-set for first page view so we'll need wait to write in _pn value (which is exp-session)
          // The SC function expires (removes) cookie values that expired with the session
          utag.loader.SC( "utag_main", { "v_id": o["cp.utag_main_v_id"] } );
          utag.loader.RDses(o);
        }

        // first utag.track call for noview should not clear session start (_ss) value
        if(a && !utag.cfg.noview)utag.loader.RDses(o);
        utag.loader.RDqp(o);
        utag.loader.RDmeta(o);
        utag.loader.RDdom(o);
        utag.loader.RDut(o, a || "view");
        utag.loader.RDpv(o);
        utag.loader.RDva(o);
      },
      RC: function(a, x, b, c, d, e, f, g, h, i, j, k, l, m, n, o, v, ck, cv, r, s, t) {
        o = {};
        b = ("" + document.cookie != "") ? (document.cookie).split("; ") : [];
        r = /^(.*?)=(.*)$/;
        s = /^(.*);exp-(.*)$/;
        t = (new Date()).getTime();
        for (c = 0; c < b.length; c++) {
          if (b[c].match(r)) {
            ck = RegExp.$1;
            cv = RegExp.$2;
          }
          e = utag.ut.decode(cv);
          if (typeof ck!="undefined"){
            if (ck.indexOf("ulog") == 0 || ck.indexOf("utag_") == 0) {
              e = cv.split("$");
              g = [];
              j = {};
              for (f = 0; f < e.length; f++) {
                try{
                  g = e[f].split(":");
                  if (g.length > 2) {
                    g[1] = g.slice(1).join(":");
                  }
                  v = "";
                  if (("" + g[1]).indexOf("~") == 0) {
                    h = g[1].substring(1).split("|");
                    for (i = 0; i < h.length; i++) h[i] = utag.ut.decode(h[i]);
                    v = h
                  } else v = utag.ut.decode(g[1]);
                  j[g[0]] = v;
                }catch(er){utag.DB(er)};
              }
              o[ck] = {};
              for (f in utag.loader.GV(j)) {
                if (j[f] instanceof Array) {
                  n = [];
                  for (m = 0; m < j[f].length; m++) {
                    if (j[f][m].match(s)){
                      k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                      if (k > t) n[m] = (x == 0) ? j[f][m] : RegExp.$1;
                    }
                  }
                  j[f] = n.join("|");
                } else {
                  j[f] = "" + j[f];
                  if (j[f].match(s)) {
                    k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                    j[f] = (k < t) ? null : (x == 0 ? j[f] : RegExp.$1);
                  }
                }
                if (j[f]) o[ck][f] = j[f];
              }
            } else if (utag.cl[ck] || utag.cl['_all_']) {
              o[ck] = e
            }
          }
        }
        return (a) ? (o[a] ? o[a] : {}) : o;
      },
      SC: function(a, b, c, d, e, f, g, h, i, j, k, x, v) {
        if (!a) return 0;
        if (a=="utag_main" && utag.cfg.nocookie) return 0;
        v = "";
        var date = new Date();
        var exp = new Date();
        exp.setTime(date.getTime()+(365*24*60*60*1000));
        x = exp.toGMTString();
        if (c && c == "da") {
          x = "Thu, 31 Dec 2009 00:00:00 GMT";
        } else if (a.indexOf("utag_") != 0 && a.indexOf("ulog") != 0) {
          if (typeof b != "object") {
            v = b
          }
        } else {
          d = utag.loader.RC(a, 0);
          for (e in utag.loader.GV(b)) {
            f = "" + b[e];
            if (f.match(/^(.*);exp-(\d+)(\w)$/)) {
              g = date.getTime() + parseInt(RegExp.$2) * ((RegExp.$3 == "h") ? 3600000 : 86400000);
              if (RegExp.$3 == "u") g = parseInt(RegExp.$2);
              f = RegExp.$1 + ";exp-" + g;
            }
            if (c == "i") {
              if (d[e] == null) d[e] = f;
            } else if (c == "d") delete d[e];
            else if (c == "a") d[e] = (d[e] != null) ? (f - 0) + (d[e] - 0) : f;
            else if (c == "ap" || c == "au") {
              if (d[e] == null) d[e] = f;
              else {
                if (d[e].indexOf("|") > 0) {
                  d[e] = d[e].split("|")
                }
                g = (d[e] instanceof Array) ? d[e] : [d[e]];
                g.push(f);
                if (c == "au") {
                  h = {};
                  k = {};
                  for (i = 0; i < g.length; i++) {
                    if (g[i].match(/^(.*);exp-(.*)$/)) {
                      j = RegExp.$1;
                    }
                    if (typeof k[j] == "undefined") {
                      k[j] = 1;
                      h[g[i]] = 1;
                    }
                  }
                  g = [];
                  for (i in utag.loader.GV(h)) {
                    g.push(i);
                  }
                }
                d[e] = g
              }
            } else d[e] = f;
          }
          h = new Array();
          for (g in utag.loader.GV(d)) {
            if (d[g] instanceof Array) {
              for (c = 0; c < d[g].length; c++) {
                d[g][c] = encodeURIComponent(d[g][c])
              }
              h.push(g + ":~" + d[g].join("|"))
            } else h.push((g + ":").replace(/[\,\$\;\?]/g,"") + encodeURIComponent(d[g]))
          }
          if (h.length == 0) {
            h.push("");
            x = ""
          }
          v = (h.join("$"));
        }
        document.cookie = a + "=" + v + ";path=/;domain=" + utag.cfg.domain + ";expires=" + x;
        return 1
      },
      LOAD: function(a, b, c, d) {
        //utag.DB('utag.loader.LOAD:' + a);
        if(!utag.loader.cfg){
           return
        }
	if(this.ol==0){
          if(utag.loader.cfg[a].block && utag.loader.cfg[a].cbf){
            this.f[a] = 1;
	    delete utag.loader.bq[a];
          }
	  for(b in utag.loader.GV(utag.loader.bq)){
            if(utag.loader.cfg[a].load==4 && utag.loader.cfg[a].wait==0){
              utag.loader.bk[a]=1;
              utag.DB("blocked: "+ a);
            }
	    utag.DB("blocking: " + b);
	    return;
	  }
	  utag.loader.INIT();
	  return;
	}
        utag.DB('utag.loader.LOAD:' + a);

        if (this.f[a] == 0) {
          this.f[a] = 1;
      	
	  if(utag.cfg.noview!=true){
	    if(utag.loader.cfg[a].send){
              utag.DB("SENDING: "+a);
              try{
                if (utag.loader.sendq.pending > 0 && utag.loader.sendq[a]) {
                  utag.DB("utag.loader.LOAD:sendq: "+a);
                  while( d = utag.loader.sendq[a].shift() ) {
                    utag.DB(d);
                    utag.sender[a].send(d.event, utag.handler.C(d.data));
                    utag.loader.sendq.pending--;
                  }
                } else {
                  utag.sender[a].send('view',utag.handler.C(utag.data));
                }
		utag.rpt['s_' + a] = 0;
	      } catch (e) {
                utag.DB(e);
	        utag.rpt['s_' + a] = 1;
	      }
	    }
	  }
	  if(utag.loader.rf==0)return;
          for (b in utag.loader.GV(this.f)) {
            if (this.f[b] == 0 || this.f[b] == 2) return
          }
	  utag.loader.END();
        }
      },
      EV: function(a, b, c, d) {
        if (b == "ready") {
          if(!utag.data){
            try {
              utag.cl = {'_all_': 1};
              utag.loader.initdata();    
              utag.loader.RD(utag.data);
            }catch(e){ utag.DB(e) };
          }
          if ( (document.attachEvent || utag.cfg.dom_complete) ? document.readyState === "complete" : document.readyState !== "loading" ) setTimeout(c, 1);
          else {
            utag.loader.ready_q.push(c);
            var RH;

            if(utag.loader.ready_q.length<=1){
              if (document.addEventListener) {
                RH = function() {
                  document.removeEventListener("DOMContentLoaded", RH, false);
                  utag.loader.run_ready_q()
                };
                if(!utag.cfg.dom_complete)document.addEventListener("DOMContentLoaded", RH, false);
                window.addEventListener("load", utag.loader.run_ready_q, false);
              } else if (document.attachEvent) {
                RH = function() {
                  if (document.readyState === "complete") {
                    document.detachEvent("onreadystatechange", RH);
                    utag.loader.run_ready_q()
                  }
                };
                document.attachEvent("onreadystatechange", RH);
                window.attachEvent("onload", utag.loader.run_ready_q);
              }
            }
          }
        } else {
          if (a.addEventListener) {
            a.addEventListener(b, c, false)
          } else if (a.attachEvent) {
            a.attachEvent(((d == 1) ? "" : "on") + b, c)
          }
        }
      },
      END: function(b, c, d, e, v, w){
        if(this.ended){return};
        this.ended=1;
	utag.DB("loader.END");
        b = utag.data;
        // add the default values for future utag.link/view calls
	if(utag.handler.base && utag.handler.base!='*'){
          e = utag.handler.base.split(",");
          for (d = 0; d < e.length; d++) {
            if (typeof b[e[d]] != "undefined") utag.handler.df[e[d]] = b[e[d]]
          }
        }else if (utag.handler.base=='*'){
           utag.ut.merge(utag.handler.df,b,1);
        }

        utag.rpt['r_0']="t";
	for(var r in utag.loader.GV(utag.cond)){
          utag.rpt['r_'+r]=(utag.cond[r])?"t":"f";
        }

        utag.rpt.ts['s'] = new Date();
	

        v = utag.cfg.path;
        // both .tiqcdn.com and .tiqcdn.cn supported
        w = v.indexOf(".tiqcdn.");
        if(w>0 && b["cp.utag_main__ss"]==1 && !utag.cfg.no_session_count)utag.ut.loader({src:v.substring(0,v.indexOf("/ut"+"ag/")+6)+"tiqapp/ut"+"ag.v.js?a="+utag.cfg.utid+(utag.cfg.nocookie?"&nocookie=1":"&cb="+(new Date).getTime()),id:"tiqapp"})
        
        if(utag.cfg.noview!=true)utag.handler.RE('view',b,"end");
	utag.handler.INIT();
      }
    },
    DB: function(a, b) {
      // return right away if we've already checked the cookie
      if(utag.cfg.utagdb===false){
        return;
      }else if(typeof utag.cfg.utagdb=="undefined"){
        b = document.cookie+'';
        utag.cfg.utagdb=((b.indexOf('utagdb=true') >= 0)?true:false);
      }
      if(utag.cfg.utagdb===true){
        var t;
        if(utag.ut.typeOf(a) == "object"){
          t=utag.handler.C(a)
        }else{
          t=a
        }
        utag.db_log.push(t);
        try{if(!utag.cfg.noconsole)console.log(t)}catch(e){}
      }
    },
    RP: function(a, b, c) {
      if (typeof a != 'undefined' && typeof a.src != 'undefined' && a.src != '') {
        b = [];
        for (c in utag.loader.GV(a)) {
          if (c != 'src') b.push(c + '=' + escape(a[c]))
        }
        this.dbi.push((new Image()).src = a.src + '?utv=' + utag.cfg.v + '&utid=' + utag.cfg.utid + '&' + (b.join('&')))
      }
    },
    view: function(a,c,d) {
      return this.track({event:'view', data:a || {}, cfg:{cb:c,uids:d}})
    },
    link: function(a,c,d) {
      return this.track({event:'link', data:a || {}, cfg:{cb:c,uids:d}})
    },
    track: function(a,b,c,d,e) {
      a = a || {};
      if (typeof a == "string") {
        a = { event: a, data: b || {}, cfg:{cb:c,uids:d} } 
      }

      // track called directly also supports a 3rd option where first param (a) is data layer and second param (b) is cb function
      for(e in utag.loader.GV(utag.o)){
        utag.o[e].handler.trigger(a.event || "view", a.data || a, a.cfg || {cb:b,uids:c})
      }
      a.cfg = a.cfg || {cb:b};
      if(typeof a.cfg.cb == "function")a.cfg.cb();

      return true
    },
    handler: {
      base: "",
      df: {},
      o: {},
      send: {},
      iflag: 0,
      INIT: function(a, b, c) {
        utag.DB('utag.handler.INIT');
        if(utag.initcatch){
          utag.initcatch=0;
          return
        }
        this.iflag = 1;
        a = utag.loader.q.length;
        if (a > 0) {
          utag.DB("Loader queue");
          for (b = 0; b < a; b++) {
            c = utag.loader.q[b];
            utag.handler.trigger(c.a, c.b, c.c)
          }
        }
        //##UTABSOLUTELAST##
      },
      test: function() {
        return 1
      },
      // reset and run load rules
      LR: function(b){
        utag.DB("Load Rules");
        for(var d in utag.loader.GV(utag.cond)){
          utag.cond[d]=false;
        }
        utag.DB(b);
        utag.loader.loadrules(b);
        utag.DB(utag.cond);
        utag.loader.initcfg();
        // use the OPTOUTMULTI cookie value to override load rules
        utag.loader.OU();
	for(var r in utag.loader.GV(utag.cond)){
          utag.rpt['r_'+r]=(utag.cond[r])?"t":"f";
        }
      },
      // The third param "c" is a string that defines the location i.e. "blr" == before load rules
      RE:function(a,b,c,d,e,f,g){
        if(c!="alr" && !this.cfg_extend){
          return 0; 
        }
        utag.DB("RE: "+c);
        if(c=="alr")utag.DB("All Tags EXTENSIONS");
        utag.DB(b);
        if(typeof this.extend != "undefined"){
          g=0;
          for (d = 0; d < this.extend.length; d++) {
            try {
              /* Extension Attributes */
              e=0;
              if(typeof this.cfg_extend!="undefined"){
                f=this.cfg_extend[d];
                if(typeof f.count == "undefined")f.count=0;
                if(f[a]==0 || (f.once==1 && f.count>0) || f[c]==0){
                  e=1
                }else{
                  if(f[c]==1){g=1};
                  f.count++
                }
              }
              if(e!=1){
                this.extend[d](a, b);
                utag.rpt['ex_' + d] = 0
              }
            } catch (er) {
              utag.DB(er);
              utag.rpt['ex_' + d] = 1;
	      utag.ut.error({e:er.message,s:utag.cfg.path+'utag.js',l:d,t:'ge'});
            }
          }
          utag.DB(b);
          return g;
        }
      },
      trigger: function(a, b, c, d, e, f) {
        utag.DB('trigger:'+a+(c && c.uids?":"+c.uids.join(","):""));
        b = b || {};
        utag.DB(b);

        if (!this.iflag) {
          utag.DB("trigger:called before tags loaded");
          for (d in utag.loader.f) {
            if (!(utag.loader.f[d] === 1)) utag.DB('Tag '+d+' did not LOAD')
          }
          utag.loader.q.push({
            a: a,
            b: utag.handler.C(b),
            c: c
          });
          return;
        }

        // update all values for AJAX pages
        utag.ut.merge(b,this.df,0);
        utag.loader.RD( b, a );

        // clearing noview flag after the RD function call
        utag.cfg.noview = false;

        function sendTag(a, b, d){
          try {
            if(typeof utag.sender[d]!="undefined"){
              utag.DB("SENDING: "+d);
              utag.sender[d].send(a, utag.handler.C(b));
	      utag.rpt['s_' + d] = 0;
            }else if (utag.loader.cfg[d].load!=2){
              // utag.link calls can load in new tags
              utag.loader.sendq[d] = utag.loader.sendq[d] || [];
              utag.loader.sendq[d].push({"event":a, "data":utag.handler.C(b)});
              utag.loader.sendq.pending++;
              utag.loader.AS({id : d, load : 1}); 
            }
          }catch (e) {utag.DB(e)}
        }
        
        // utag.track( { event : "view", data: {myvar : "myval" }, cfg: { uids : [1,2,10] } } );
        if(c && c.uids){
          this.RE(a,b,"alr");
          for(f=0;f<c.uids.length;f++){
            d=c.uids[f];
            // bypass load rules, but still check the OPTOUTMULTI cookie before firing
            if (!utag.loader.OU(utag.loader.cfg[d].tid)) {
              sendTag(a, b, d);
            }
          }
        }else if(utag.cfg.load_rules_ajax){
          this.RE(a,b,"blr");
          // process load rules based on current data layer
          this.LR(b);
          this.RE(a,b,"alr");
          
          for(f = 0; f < utag.loader.cfgsort.length; f++){
            d = utag.loader.cfgsort[f];
            if(utag.loader.cfg[d].load && utag.loader.cfg[d].send){
              sendTag(a, b, d);
            }
          }
        }else{
          // legacy behavior
          this.RE(a,b,"alr");
          for (d in utag.loader.GV(utag.sender)) {
            sendTag(a, b, d);
          }
        }
        this.RE(a,b,"end");
      },
      // "sort-of" copy
      C: function(a, b, c) {
        b = {};
        for (c in utag.loader.GV(a)) {
          if(a[c] instanceof Array){
            b[c] = a[c].slice(0)
          }else{
            // objects are still references to the original (not copies)
            b[c] = a[c]
          }
        }
        return b
      }
    },
    ut:{
      pad: function(a,b,c,d){
        a=""+((a-0).toString(16));d='';if(b>a.length){for(c=0;c<(b-a.length);c++){d+='0'}}return ""+d+a
      },
      vi: function(t,a,b){
        if(!utag.v_id){
          a=this.pad(t,12);b=""+Math.random();a+=this.pad(b.substring(2,b.length),16);try{a+=this.pad((navigator.plugins.length?navigator.plugins.length:0),2);a+=this.pad(navigator.userAgent.length,3);a+=this.pad(document.URL.length,4);a+=this.pad(navigator.appVersion.length,3);a+=this.pad(screen.width+screen.height+parseInt((screen.colorDepth)?screen.colorDepth:screen.pixelDepth),5)}catch(e){utag.DB(e);a+="12345"};utag.v_id=a;
        }
        return utag.v_id
      },
      hasOwn: function(o, a) {
        return o != null && Object.prototype.hasOwnProperty.call(o, a)
      },
      isEmptyObject: function(o, a) {
	for (a in o) {
          if (utag.ut.hasOwn(o,a))return false
        }
        return true
      },
      isEmpty: function(o) {
        var t = utag.ut.typeOf(o);
        if ( t == "number" ){
          return isNaN(o)
        }else if ( t == "boolean" ){
          return false
        }else if ( t == "string" ){
          return o.length === 0
        }else return utag.ut.isEmptyObject(o)
      },
      typeOf: function(e) {
        return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
      },
      flatten: function(o){
        // stop when arriving at a string, array, boolean, number (float or integer)
        var a = {}; 
        function r(c, p) {
          if (Object(c) !== c || c instanceof Array) {
            a[p] = c;
          } else {
            if(utag.ut.isEmptyObject(c)){
              //a[p] = {};
            }else{
              for (var d in c) {
                r(c[d], p ? p+"."+d : d);
              }
            }
          }
        }
        r(o, "");

        return a;
      },
      merge: function(a, b, c, d) {
        if(c){
          for(d in utag.loader.GV(b)){
            a[d] = b[d]
          }
        }else{
          for(d in utag.loader.GV(b)){
            if(typeof a[d]=="undefined")a[d] = b[d]
          }
        }
      },
      decode: function(a, b) {
        b = "";
        try{b = decodeURIComponent(a)}catch(e){utag.DB(e)};
        if (b == ""){b = unescape(a)};
        return b
      },
      encode: function(a, b) {
        b = "";
        try{b = encodeURIComponent(a)}catch(e){utag.DB(e)};
        if (b == ""){b = escape(a)};
        return b
      },
      error: function(a, b, c){
        if(typeof utag_err!="undefined"){
          utag_err.push(a)
        }
      },
      loader: function(o, a, b, c, l, m) {
        utag.DB(o);
        a=document;
        if (o.type=="iframe") {
          // if an iframe of same id already exists, remove and add again (to keep DOM clean and avoid impacting browser history)
          m = a.getElementById( o.id );
          if ( m && m.tagName == "IFRAME" ) {
            m.parentNode.removeChild(m);
          }
          b = a.createElement("iframe");
          o.attrs = o.attrs || {};
          utag.ut.merge( o.attrs, { "height" : "1", "width" : "1", "style" : "display:none" } , 0 );
        }else if (o.type=="img"){
          utag.DB("Attach img: "+o.src);
          b = new Image();
        }else{
          b = a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";
        }
        if(o.id){b.id=o.id};
        for( l in utag.loader.GV(o.attrs) ){
          b.setAttribute( l, o.attrs[l] )
        }
        b.setAttribute("src", o.src);
        if (typeof o.cb=="function") {
          if(b.addEventListener) {
            b.addEventListener("load",function(){o.cb()},false);
          }else {
            // old IE support
            b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};
          }
        }
        if(typeof o.error=="function"){
          utag.loader.EV(b, "error", o.error);
        }
        if ( o.type != "img" ) {
          l = o.loc || "head";
          c = a.getElementsByTagName(l)[0];
          if (c) {
            utag.DB("Attach to "+l+": "+o.src);
            if (l == "script") {
              c.parentNode.insertBefore(b, c);
            } else {
              c.appendChild(b)
            }
          }
        }
      }
    }
  };
  utag.o['rasch.schweizer-illustrierte.ch']=utag;
  utag.cfg = {
    template : "ut4.46.",
    // Enable load rules ajax feature by default
    load_rules_ajax: true,
    load_rules_at_wait: false,
    lowerqp: false,
    noconsole: false,
    //noview: ##UTNOVIEW##,
    session_timeout: 1800000,
    readywait: 0,
    noload: 0,
    domain: utag.loader.lh(),
    datasource: "##UTDATASOURCE##".replace("##"+"UTDATASOURCE##",""),
    path: "//tags.tiqcdn.com/utag/rasch/schweizer-illustrierte.ch/prod/",
    utid: "rasch/schweizer-illustrierte.ch/202210140945"
  };
  utag.cfg.v = utag.cfg.template + "202210140945";
  utag.cond={3:0,4:0,5:0,6:0};
utag.loader.initdata = function() {   try {       utag.data = (typeof utag_data != 'undefined') ? utag_data : {};       utag.udoname='utag_data';    } catch (e) {       utag.data = {};       utag.DB('idf:'+e);   }};utag.loader.loadrules = function(_pd,_pc) {var d = _pd || utag.data; var c = _pc || utag.cond;for (var l in utag.loader.GV(c)) {switch(l){
case '3':try{c[3]|=(d['hit_type']=='default')}catch(e){utag.DB(e)}; break;
case '4':try{c[4]|=(d['dom.domain']=='www.schweizer-illustrierte.ch')}catch(e){utag.DB(e)}; break;
case '5':try{c[5]|=(/^\/gewinnspiel/.test(d['dom.pathname'])&&d['event_category']=='Mailchimp'&&d['event_action']=='Button Click')}catch(e){utag.DB(e)}; break;
case '6':try{c[6]|=(d['dom.domain']=='preview.schweizer-illustrierte.ch')||(d['dom.domain']=='www.schweizer-illustrierte.ch')}catch(e){utag.DB(e)}; break;}}};utag.pre=function() {    utag.loader.initdata();    try{utag.loader.RD(utag.data)}catch(e){utag.DB(e)};    utag.loader.loadrules();    };utag.loader.GET=function(){utag.cl={'_all_':1};utag.pre();
  utag.handler.extend=[function(a,b){ try{ if(1){try{b['hit_type']=b.hit_type || "default";}catch(e){}} } catch(e){ utag.DB(e); }  },
function(a,b){ try{ if(1){
var persist_vars = [
    "cms_article_type", 
    "cms_authors",
    "cms_change_date",
    "cms_channel",
    "cms_main_channel",
    "cms_create_date",
    "cms_keywords",
    "cms_page_id",
    "cms_page_type",
    "cms_channel_sponsor",
    "cms_article_source",
    "cms_print_article"
];

if ( a=="view" && b.hit_type=="default" ) {
    for (var i = 0; i < persist_vars.length; i++) {
        utag.data["_" + persist_vars[i]] = b[persist_vars[i]];
    }
} else if ( a=="link" || (a=="view" && (b.hit_type=="gallery_view" || b.hit_type=="article_slider")) ) {
    for (var i = 0; i < persist_vars.length; i++) {
        b[persist_vars[i]] = utag.data["_" + persist_vars[i]];
    }
}

} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
if (b["ut.env"] == "qa") {
  console.log("Tealium Data Layer: ", b);
}
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
b.video_load = 0;
b.video_start = 0;
b.video_completion = 0;
b.video_view_50_percent = 0;
b.video_percent_played = 0;
b.video_seconds_played = 0;

if (b.event_category == "Brightcove Player") {
    switch (b.event_action) {
        case "Video Load":
            b.video_load = 1;
            break;
        case "Media Begin":
            b.video_start = 1;
            break;
        case "Media Complete":
            b.video_completion = 1;
            break;
        case "Percent played":
            if (b.event_value > 0) b.video_percent_played = 25;
            if (b.event_value == 50) b.video_view_50_percent = 1;
            break;
    }       
}
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['link_type']=='exit link'){b['event_category']='outbound link';b['event_action']='clickout';b['event_label']=b['link_url']} } catch(e){ utag.DB(e); }  },
function(a,b){ try{ if(b['link_type']=='related stories'){b['event_category']='related content';b['event_action']=b['event_action'];b['event_label']=b['link_url']} } catch(e){ utag.DB(e); }  },
function(a,b){ try{ if(b['event_name']=='comment_submit'){b['event_action']='submit website comment'} } catch(e){ utag.DB(e); }  },
function(a,b,c,d,e,f,g){if(b['link_type']=='share link'){d=b['event_action'];if(typeof d=='undefined')return;c=[{'Mail':'click email share button'},{'Facebook':'click facebook share button'},{'Messenger':'click messenger share button'},{'Whatsapp':'click whatsapp share button'},{'Pinterest':'click pinterest share button'},{'Twitter':'click twitter share button'},{'GetPocket':'click pocket share button'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d==f){b['event_action']=c[e][f];m=true};};if(m)break};   }},
function(a,b){ try{ if(b['event_name']=='gallery_fullscreen_click'){b['event_label']=b['cms_page_id']} } catch(e){ utag.DB(e); }  },
function(a,b){ try{ if(b['event_name']=='form_submission'){b['event_category']='form';b['event_action']='submit';b['event_label']=b['webform_id']} } catch(e){ utag.DB(e); }  },
function(a,b){ try{ if(b['event_name']=='scroll_to_home'){b['event_category']='scroll';b['event_action']='scroll to home';b['event_label']=b['cms_page_id'];b['event_non_interaction']='1';b['Scroll_to_home']='1'} } catch(e){ utag.DB(e); }  },
function(a,b){ try{ if(b['link_type']=='keyword'){b['event_category']='keyword';b['event_action']='click';b['event_label']=b['link_text']} } catch(e){ utag.DB(e); }  },
function(a,b){ try{ if(1){try{b['random_value']=Math.round(Math.random()*100000000000);}catch(e){}} } catch(e){ utag.DB(e); }  },
function(a,b){ try{ if(1){
if (a=="view") {
    window.dataLayer.push({'event': 'optimize.activate'});
}
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{utag.runonce = utag.runonce || {};utag.runonce.ext = utag.runonce.ext || {};if(typeof utag.runonce.ext[26]=='undefined'){utag.runonce.ext[26]=1;if(1){
b.pwa_standalone_mode = '0';

if ( window.matchMedia && window.matchMedia('(display-mode: standalone)').matches 
 || (window.navigator && window.navigator.standalone === true) ) {
  b.pwa_standalone_mode = '1';
}

}
}} catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['tealium_event']=='teaser_impression'||b['tealium_event']=='teaser_click'){b['event_category']='native_advertising';b['event_action']=b['tealium_event'];b['event_label']=b['cms_target_page_id'];b['event_non_interaction']='1'} } catch(e){ utag.DB(e); }  },
function(a,b){ try{ if(1){

//set data layer with Piano parameters, so they can be accessed uniformly
switch(b.event_name) {	
	case "meterActive":
	case "meterExpired":	
	case "showTemplate":	
	case "startCheckout":
	case "checkoutComplete":
	case "checkoutClose":
	case "checkoutStateChange":
	case "checkoutSelectTerm":
		//Piano JS callbacks
		b["piano_term_id"] = b.piano_params.termId ? b.piano_params.termId : "no_term_id";
		b["piano_term_ids"] =  []; //exists only on piano_show_offer
		b["piano_experience_id"] =  b.piano_params.experienceId ? b.piano_params.experienceId : "no_experience_id";
		b["piano_offer_id"] =  b.piano_params.offerId ? b.piano_params.offerId : "no_offer_id";
		b["piano_template_id"] =  b.piano_params.templateId ? b.piano_params.templateId : "no_template_id";
		b["piano_template_variant_id"] =  b.piano_params.templateVariantId ? b.piano_params.templateVariantId : "default_variant";
		break;
	case "piano_show_offer":
		//send via postMessage from Piano template
		b["piano_term_id"] = "no_term_id";
		b["piano_term_ids"] =  b.piano_term_ids ? b.piano_term_ids : [];
		b["piano_experience_id"] =  b.piano_experience_id ? b.piano_experience_id : "no_experience_id";
		b["piano_offer_id"] =  b.piano_offer_id ? b.piano_offer_id : "no_offer_id";
		b["piano_template_id"] =  b.piano_template_id ? b.piano_template_id : "no_template_id";
		b["piano_template_variant_id"] =  b.piano_template_variant_id ? b.piano_template_variant_id : "default_variant";
		break;
	case "checkoutCustomEvent":
		//Piano JS callback, events defined as external event in Piano template
		b["piano_term_id"] = b.piano_params.params.termId ? b.piano_params.params.termId : "no_term_id";
		b["piano_term_ids"] =  []; //exists only on piano_show_offer
		b["piano_experience_id"] =  b.piano_params.params.experienceId ? b.piano_params.params.experienceId : "no_experience_id";
		b["piano_offer_id"] =  b.piano_params.params.offerId ? b.piano_params.params.offerId : "no_offer_id";
		b["piano_template_id"] =  b.piano_params.params.templateId ? b.piano_params.params.templateId : "no_template_id";
		b["piano_template_variant_id"] =  b.piano_params.params.templateVariantId ? b.piano_params.params.templateVariantId : "default_variant";
		break;
}

switch(b.event_name) {
	case "meterActive":	
		b["event_category"] = "piano meter_active";
		b["event_action"] = b.piano_params.meterName + ": " + b.piano_params.views + "/" + b.piano_params.maxViews;
		b["event_label"] = b.cms_page_id;
		b["event_non_interaction"] = "1";	
		break;
	case "meterExpired":
		b["event_category"] = "piano meter_expired";
		b["event_action"] = b.piano_params.meterName + ": " + b.piano_params.views + "/" + b.piano_params.maxViews;
		b["event_label"] = b.cms_page_id;
		b["event_non_interaction"] = "1";
		break;
	case "piano_show_offer":
		b["event_category"] = "piano show_offer";
		b["event_action"] = b.piano_offer_id;
		b["event_label"] = b.cms_page_id;
		b["event_non_interaction"] = "1";
		//show offer metric
		b["piano_show_offer"] = 1;
		//detail view
		b["ec_action"] = "detail";
		b["product_id"] = b.piano_term_ids;
		//list impressions
		/*b["product_impression_id"] = b.piano_term_ids;
		b["product_impression_list"] = [];
		b["product_impression_position"] = [];
		for (var i = 0; i < b.piano_term_ids.length; i++) {
			b["product_impression_list"].push(b.piano_offer_id);
			b["product_impression_position"].push(i);
		}*/		
		//promo view
		b["promo_name"] = [b["dom.pathname"]];
		b["promo_id"] = ["piano_paywall"];
		b["promo_creative"] = [b.cms_page_id];
		b["promo_position"] = [b.piano_template_id + " / " + b.piano_template_variant_id];
		break;	
	case "checkoutCustomEvent":
		//click offer event is sent as external event from offer template
		if (b.piano_params.eventName == "piano_offer_click") {
			//click offer promo
			/*if (b.ec_action != "promo_click") {
				utag.link({
					event_category: "piano click_promo",
					event_action: b.piano_term_id,
					event_label: b.cms_page_id,
					event_non_interaction: "1",
					ec_action: "promo_click",
					promo_name: [b["dom.pathname"]],
					promo_id: ["piano_paywall"],
					promo_creative: [b.cms_page_id],
					promo_position: [b.piano_template_id + " / " + b.piano_template_variant_id],
					piano_experience_id: b.piano_experience_id
				}, null, [2]);	//only fire GA tag
			}*/
			//add to cart
			b["event_category"] = "piano click_offer";
			b["event_action"] = b.piano_term_id;
			b["event_label"] = b.cms_page_id;
			b["event_non_interaction"] = "1";			
			b["ec_action"] = "add";
			b["product_id"] = [b.piano_term_id];
			b["product_quantity"] = ["1"];		
		} else {
			b["event_category"] = "piano custom_event";
			b["event_action"] = b.piano_params.eventName ? b.piano_params.eventName : "no_event_name";
			b["event_label"] = b.cms_page_id;
			b["event_non_interaction"] = "1";
		}
		break;
	case "showTemplate":
		b["event_category"] = "piano show_template";
		b["event_action"] = b.piano_template_id;
		b["event_label"] = b.cms_page_id;
		b["event_non_interaction"] = "1";	
		//promo view
		b["promo_name"] = [b["dom.pathname"]];
		b["promo_id"] = ["piano_paywall"];
		b["promo_creative"] = [b.cms_page_id];		
		b["promo_position"] = [b.piano_params.templateId + " / " + b.piano_template_variant_id];	
		break;
	case "startCheckout":
		b["event_category"] = "piano start_checkout";
		b["event_action"] = b.piano_term_id;
		b["event_label"] = b.cms_page_id;
		b["event_non_interaction"] = "1";		
		//checkout
		b["ec_action"] = "checkout";
		b["checkout_step"] = "1";
		b["product_id"] = [b.piano_term_id];
		b["product_quantity"] = ["1"];
		//store experienceId for checkoutComplete event
		utag.data["_piano_experience_id"] = b.piano_experience_id;
		break;
	case "checkoutComplete":
		b["event_category"] = "piano checkout_complete";
		b["event_action"] = b.piano_params ? b.piano_params.termId : "no_term_id";
		b["event_label"] = b.cms_page_id;
		b["event_non_interaction"] = "1";		
        //set ecommerce paramters
        b["order_id"] = b.piano_params.termConversionId;
        b["order_total"] = b.piano_params.chargeAmount ? b.piano_params.chargeAmount : "0";
        b["order_promo_code"] = b.piano_params.promotionId ? b.piano_params.promotionId : "";
        b["product_id"] = [b.piano_term_id];
        b["product_quantity"] = ["1"];
        b["product_price"] = [b.piano_params.chargeAmount ? b.piano_params.chargeAmount : "0"];	
		//read stored experienceId from startCheckout event
		b["piano_experience_id"] = utag.data._piano_experience_id;
		b["piano_conversion_value"] = parseInt(b["order_total"]) ? parseInt(b["order_total"]) : 0;
		
		if (b.piano_conversion_value > 0) {
            b["piano_product_type"] = "subscription";
        } else {
            b["piano_product_type"] = "registration";
        }
		
		if (b.event_action == "TMZ00NDE1MGI") {
			setTimeout(
			    function() {
    			    utag.link({
        				event_category: "user registration",
        				event_action: "submit website registration form",
        				event_label: b.cms_page_id,
        				event_non_interaction: "1",
        			}, null, [2])	//only fire GA tag
			    }, 100
			);
		}
		break;
	case "checkoutClose":
		b["event_category"] = "piano checkout_close";
		b["event_action"] = b.piano_params ? b.piano_params.state : "no_close_state";
		b["event_label"] = b.cms_page_id;
		b["event_non_interaction"] = "1";
		//read stored experienceId from startCheckout event
		b["piano_experience_id"] = utag.data._piano_experience_id;
		break;		
	case "checkoutStateChange":
	case "checkoutSelectTerm":
		break;
	default:
		break;
}

if (b.product_id) {
	b["product_variant"] = [];
	for (var i = 0; i < b.product_id.length; i++) {
		b["product_variant"].push(b.piano_offer_id);
	}		
}

} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
if (b["event_category"] == "piano checkout_complete") {
    var term = b["product_id"][0];
    
    if (b["piano_conversion_value"] > 0) {
        PARSELY.conversions.trackSubscription(term);
    } else {
        PARSELY.conversions.trackLeadCapture(term);        
    }
}
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){try{b['random_number']=Math.random();}catch(e){}} } catch(e){ utag.DB(e); }  },
function(a,b){ try{ if(b['event_name']=='impression'){b['event_category']='ministage_impression';b['event_action']=b['cms_paragraph_id'];b['event_label']=b['cms_page_id'];b['event_non_interaction']='1'} } catch(e){ utag.DB(e); }  },
function(a,b){ try{ if((b['event_name']=='topic_alert'&&b['event_action']=='follow')){b['event_category']='subscription';b['event_action']='submit email alert subscription form';b['event_non_interaction']='1'} } catch(e){ utag.DB(e); }  },
function(a,b){ try{ if(1){
var data_layer_keys = [
    "cms_article_type", 
    "cms_authors",
    "cms_change_date",
    "cms_channel",
    "cms_create_date",
    "cms_keywords",
    "cms_page_id",
    "cms_page_type",
    "cms_publication",
    "cms_restriction_status"
];

window.utag_data_init = window.utag_data_init || [];
if (a == "view") {
    for (var i = 0; i < data_layer_keys.length; i++) {
        window.utag_data_init[data_layer_keys[i]] = b[data_layer_keys[i]];
    }
} else if (a == "link") {
    if (b["event_name"]=="set_user_id") {
        window.utag_data_init["set_user_id"] = b["event_label"];
    }
}
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['event_category'].toString().indexOf('piano_checkout_complete')>-1){b['piano_checkout_complete']='1'} } catch(e){ utag.DB(e); }  },
function(a,b){ try{ if(b['event_category'].toString().indexOf('piano_show_offer')>-1){b['piano_show_offer']='1'} } catch(e){ utag.DB(e); }  },
function(a,b){ try{ if(1){
if (b["event_category"] == "Brightcove Player") {
	b["event_category"] = "video";
	
	switch(b["event_action"]) {
	  case "Video Load":
		b["event_action"] = "load";
		break;
	  case "Media Begin":
		b["event_action"] = "begin";
		break;
	  case "Media Pause":
		b["event_action"] = "pause";
		break;
	  case "Media Play":
		b["event_action"] = "play";
		break;
	  case "Media Complete":
		b["event_action"] = "complete";
		break;
	  case "Video Load":
		b["event_action"] = "load";
		break;		
	  case "Percent played":
		b["event_action"] = "watched " + b["event_value"] + "%";
		break;		
	  default:
	}
}
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
// inlined google CWV script
var t,
  n,
  e = function () {
    return ""
      .concat(Date.now(), "-")
      .concat(Math.floor(8999999999999 * Math.random()) + 1e12);
  },
  i = function (t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
    return {
      name: t,
      value: n,
      delta: 0,
      entries: [],
      id: e(),
      isFinal: !1,
    };
  },
  a = function (t, n) {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(t)) {
        var e = new PerformanceObserver(function (t) {
          return t.getEntries().map(n);
        });
        return (
          e.observe({
            type: t,
            buffered: !0,
          }),
          e
        );
      }
    } catch (t) {}
  },
  r = !1,
  o = !1,
  s = function (t) {
    r = !t.persisted;
  },
  u = function () {
    addEventListener("pagehide", s),
      addEventListener("beforeunload", function () {});
  },
  c = function (t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    o || (u(), (o = !0)),
      addEventListener(
        "visibilitychange",
        function (n) {
          var e = n.timeStamp;
          "hidden" === document.visibilityState &&
            t({
              timeStamp: e,
              isUnloading: r,
            });
        },
        {
          capture: !0,
          once: n,
        }
      );
  },
  l = function (t, n, e, i) {
    var a;
    return function () {
      e && n.isFinal && e.disconnect(),
        n.value >= 0 &&
          (i || n.isFinal || "hidden" === document.visibilityState) &&
          ((n.delta = n.value - (a || 0)),
          (n.delta || n.isFinal || void 0 === a) && (t(n), (a = n.value)));
    };
  },
  p = function (t) {
    var n,
      e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      r = i("CLS", 0),
      o = function (t) {
        t.hadRecentInput || ((r.value += t.value), r.entries.push(t), n());
      },
      s = a("layout-shift", o);
    s &&
      ((n = l(t, r, s, e)),
      c(function (t) {
        var e = t.isUnloading;
        s.takeRecords().map(o), e && (r.isFinal = !0), n();
      }));
  },
  d = function () {
    return (
      void 0 === t &&
        ((t = "hidden" === document.visibilityState ? 0 : 1 / 0),
        c(function (n) {
          var e = n.timeStamp;
          return (t = e);
        }, !0)),
      {
        get timeStamp() {
          return t;
        },
      }
    );
  },
  v = function (t) {
    var n,
      e = i("FCP"),
      r = d(),
      o = a("paint", function (t) {
        "first-contentful-paint" === t.name &&
          t.startTime < r.timeStamp &&
          ((e.value = t.startTime), (e.isFinal = !0), e.entries.push(t), n());
      });
    o && (n = l(t, e, o));
  },
  f = function (t) {
    var n = i("FID"),
      e = d(),
      r = function (t) {
        t.startTime < e.timeStamp &&
          ((n.value = t.processingStart - t.startTime),
          n.entries.push(t),
          (n.isFinal = !0),
          s());
      },
      o = a("first-input", r),
      s = l(t, n, o);
    o
      ? c(function () {
          o.takeRecords().map(r), o.disconnect();
        }, !0)
      : window.perfMetrics &&
        window.perfMetrics.onFirstInputDelay &&
        window.perfMetrics.onFirstInputDelay(function (t, i) {
          i.timeStamp < e.timeStamp &&
            ((n.value = t),
            (n.isFinal = !0),
            (n.entries = [
              {
                entryType: "first-input",
                name: i.type,
                target: i.target,
                cancelable: i.cancelable,
                startTime: i.timeStamp,
                processingStart: i.timeStamp + t,
              },
            ]),
            s());
        });
  },
  m = function () {
    return (
      n ||
        (n = new Promise(function (t) {
          return ["scroll", "keydown", "pointerdown"].map(function (n) {
            addEventListener(n, t, {
              once: !0,
              passive: !0,
              capture: !0,
            });
          });
        })),
      n
    );
  },
  g = function (t) {
    var n,
      e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      r = i("LCP"),
      o = d(),
      s = function (t) {
        var e = t.startTime;
        e < o.timeStamp ? ((r.value = e), r.entries.push(t)) : (r.isFinal = !0),
          n();
      },
      u = a("largest-contentful-paint", s);
    if (u) {
      n = l(t, r, u, e);
      var p = function () {
        r.isFinal || (u.takeRecords().map(s), (r.isFinal = !0), n());
      };
      m().then(p), c(p, !0);
    }
  },
  h = function (t) {
    var n,
      e = i("TTFB");
    (n = function () {
      try {
        var n =
          performance.getEntriesByType("navigation")[0] ||
          (function () {
            var t = performance.timing,
              n = {
                entryType: "navigation",
                startTime: 0,
              };
            for (var e in t)
              "navigationStart" !== e &&
                "toJSON" !== e &&
                (n[e] = Math.max(t[e] - t.navigationStart, 0));
            return n;
          })();
        (e.value = e.delta = n.responseStart),
          (e.entries = [n]),
          (e.isFinal = !0),
          t(e);
      } catch (t) {}
    }),
      "complete" === document.readyState
        ? setTimeout(n, 0)
        : addEventListener("pageshow", n);
  };

var webVitals = {};
webVitals.getCLS = p;
webVitals.getFCP = v;
webVitals.getFID = f;
webVitals.getLCP = g;
webVitals.getTTFB = h;

// helper needed for webvitalize
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// send data to webvitalize.io
var CUBE_API_ENDPOINT = "https://ingest.webvitalize.io/api/log";
function sendToAnalytics(metric) {
  var fullUrl = window.location.href;
  var obj = { href: fullUrl };
  var body = JSON.stringify(_defineProperty(obj, metric.name, metric.value));
  var headers = {
    "Content-Type": "application/json",
  };
  (navigator.sendBeacon && navigator.sendBeacon(CUBE_API_ENDPOINT, body)) ||
    fetch(CUBE_API_ENDPOINT, {
      body: body,
      headers: headers,
      method: "POST",
      keepalive: true,
    });
}

// collect data
if ( (Math.floor(Math.random() * 100) + 1) <= 30 ) {
	webVitals.getCLS(sendToAnalytics);
	webVitals.getFCP(sendToAnalytics);
	webVitals.getFID(sendToAnalytics);
	webVitals.getLCP(sendToAnalytics);
	webVitals.getTTFB(sendToAnalytics);
}
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
var parsely_update_values = function(parsely_user_status) {
    if (window.PARSELY) {
        PARSELY.updateDefaults({
            data: {
                user_type: parsely_user_status
            },
        });
    }
}

if (b.cms_user_subscriptions) {
	user_status = "subscriber";
} else if (b.cms_user_id) {
    user_status = "registered";
}

// update user status if no previous status or subscriber now
if (!localStorage.getItem("parsely-vars-user-status") || users_status == "subscriber") {
    parsely_update_values(user_status);
    localStorage.setItem("parsely-vars-user-status", user_status);
}

} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
function parse_slots(check_visibility=false) {
    var result = {};

    var platform;
    if (window.innerWidth >= 760) {
        platform = "tabletDesktop";
    } else {
        platform = "mobile";
    }
    result.config = [window.Ads.config.platform, window.Ads.config.targeting.articleId, window.Ads.config.channel, 
        window.Ads.config.targeting.articleType,window.Ads.config.targeting.articlePremium,
        window.Ads.config.ikjuzglkjfroef,window.Ads.config.targeting.usersi].join(";");

    var slot_elements = document.querySelectorAll(".ad-wrapper-" + platform);
    
    //var re_slot_type = /apn-ad-slot-(.+)-\d+/;
    var re_slot_type = /apn-ad-slot-(.+)/;

    result.slots = [];
    result.visible = [];
    for (var i = 0; i < slot_elements.length; i++) {
        var el = slot_elements[i].querySelector("[id^=apn]");
        // if no ad slots, just return config
        if (!el) return result;
        var slot_type = re_slot_type.exec(el.id)[1];
        result.slots.push(slot_type);

        if (check_visibility) {
            var slot_vis;
            if (slot_elements[i].classList.contains("slot-loaded")) {
                slot_vis = "1";
            } else {
                slot_vis = "0";    
            }
            if (el.classList.contains("adm-loaded")) {
                slot_vis += ":1";
            } else {
                slot_vis += ":0";    
            }
            result.visible.push(slot_vis);
        }
    }    
    result.slots = result.slots.join(";")
    result.visible = result.visible.join(";")
    return result;
}

if (a == "view" && b["cms_page_id"]) {
    var res = parse_slots(false);
    b.a_config = res.config;
    b.a_slots = res.slots;
}
} } catch(e){ utag.DB(e) }  }];
  utag.handler.cfg_extend=[{"id":"14","end":0,"bwq":0,"blr":1,"alr":0},{"bwq":0,"end":0,"id":"4","alr":1,"blr":0},{"id":"2","end":0,"bwq":0,"blr":0,"alr":1},{"bwq":0,"end":0,"id":"17","alr":1,"blr":0},{"bwq":0,"end":0,"id":"5","alr":1,"blr":0},{"bwq":0,"end":0,"id":"6","alr":1,"blr":0},{"id":"41","end":0,"bwq":0,"blr":0,"alr":1},{"bwq":0,"end":0,"id":"40","alr":1,"blr":0},{"id":"9","end":0,"bwq":0,"blr":0,"alr":1},{"bwq":0,"end":0,"id":"19","alr":1,"blr":0},{"bwq":0,"end":0,"id":"29","alr":1,"blr":0},{"alr":1,"blr":0,"bwq":0,"end":0,"id":"20"},{"blr":0,"alr":1,"id":"16","end":0,"bwq":0},{"blr":0,"alr":1,"id":"18","end":0,"bwq":0},{"bwq":0,"end":0,"id":"26","alr":1,"blr":0},{"alr":1,"blr":0,"bwq":0,"end":0,"id":"28"},{"bwq":0,"end":0,"id":"33","alr":1,"blr":0},{"alr":1,"blr":0,"bwq":0,"end":0,"id":"46"},{"bwq":0,"end":0,"id":"34","alr":1,"blr":0},{"alr":1,"blr":0,"bwq":0,"end":0,"id":"36"},{"blr":0,"alr":1,"id":"43","end":0,"bwq":0},{"bwq":0,"end":0,"id":"37","alr":1,"blr":0},{"blr":0,"alr":1,"id":"38","end":0,"bwq":0},{"alr":1,"blr":0,"bwq":0,"end":0,"id":"39"},{"id":"42","end":0,"bwq":0,"blr":0,"alr":1},{"bwq":0,"end":0,"id":"45","alr":1,"blr":0},{"id":"47","end":0,"bwq":0,"blr":0,"alr":1},{"alr":1,"blr":0,"bwq":0,"end":0,"id":"49"}];
  utag.loader.initcfg = function(){
    utag.loader.cfg={"2":{load:1,send:1,v:202204201520,wait:1,tid:7110},"3":{load:(utag.cond[4] && utag.cond[3]),send:1,v:202110190941,wait:1,tid:20010},"7":{load:1,send:1,v:202109271305,wait:1,tid:7132},"4":{load:utag.cond[6],send:1,v:202202221310,wait:1,tid:6026},"5":{load:utag.cond[6],send:1,v:202109271305,wait:1,tid:20067},"6":{load:(utag.cond[6] && utag.cond[5]),send:1,v:202109271305,wait:1,tid:20067},"10":{load:utag.cond[4],send:1,v:202109271305,wait:1,tid:8009},"13":{load:utag.cond[4],send:1,v:202111221635,wait:1,tid:6037},"14":{load:utag.cond[4],send:1,v:202203160854,wait:1,tid:20010},"15":{load:1,send:1,v:202210140945,wait:1,tid:7142},"16":{load:1,send:1,v:202208090753,wait:1,tid:2063}};
utag.loader.cfgsort=["2","3","7","4","5","6","10","13","14","15","16"];
  }
utag.loader.initcfg();
}

  if(typeof utag_cfg_ovrd!='undefined'){for(utag._i in utag.loader.GV(utag_cfg_ovrd))utag.cfg[utag._i]=utag_cfg_ovrd[utag._i]};
  utag.loader.PINIT = function(a,b,c){
    utag.DB("Pre-INIT");
    if (utag.cfg.noload) {
      return;
    }

    try {
      // Initialize utag.data
      this.GET();
      // Even if noview flag is set, we still want to load in tags and have them ready to fire
      // FUTURE: blr = "before load rules"
      if(utag.handler.RE('view',utag.data,"blr")){
        utag.handler.LR(utag.data);
      }
      
    }catch(e){utag.DB(e)};
    // process 'blocking' tags (tags that need to run first)
    a=this.cfg;
    c=0;
    for (b in this.GV(a)) {
      // external .js files (currency converter tag) are blocking
      if(a[b].block == 1 || (a[b].load>0 && (typeof a[b].src!='undefined'&&a[b].src!=''))){
        a[b].block = 1;
        c=1;
        this.bq[b]=1;
      }
    }
    if(c==1) {
      for (b in this.GV(a)) {
        if(a[b].block){
          // handle case of bundled and blocking (change 4 to 1)
          // (bundled tags that do not have a .src should really never be set to block... they just run first)
          a[b].id=b; 
          if(a[b].load==4)a[b].load=1; 
 	  a[b].cb=function(){
            var d=this.uid;
            utag.loader.cfg[d].cbf=1;
            utag.loader.LOAD(d)
          };
          this.AS(a[b]);
        }
      }
    }
    if(c==0)this.INIT();
  };
  utag.loader.INIT = function(a, b, c, d, e) {
    utag.DB('utag.loader.INIT');
    if (this.ol == 1) return -1;
    else this.ol = 1;
    // The All Tags scope extensions run after blocking tags complete
    // The noview flag means to skip these Extensions (will run later for manual utag.view call)
    if(utag.cfg.noview!=true)utag.handler.RE('view',utag.data,"alr"); 

    utag.rpt.ts['i'] = new Date();
     
    d = this.cfgsort;
    // TODO: Publish engine should sort the bundled tags first..
    for (a=0;a<d.length;a++){
      e = d[a];
      b = this.cfg[e];
      b.id = e;
      if(b.block != 1){
        // do not wait if the utag.cfg.noview flag is set and the tag is bundled
        if (utag.loader.bk[b.id] || ((utag.cfg.readywait||utag.cfg.noview) && b.load==4)){
          this.f[b.id]=0;
          utag.loader.LOAD(b.id)
        }else if (b.wait == 1 && utag.loader.rf == 0) {
	  utag.DB('utag.loader.INIT: waiting ' + b.id);
          this.wq.push(b)
          this.f[b.id]=2;
        }else if (b.load>0){
	  utag.DB('utag.loader.INIT: loading ' + b.id);
	  this.lq.push(b);
          this.AS(b);
        }
      }
    }
          
    if (this.wq.length > 0) utag.loader.EV('', 'ready', function(a) {
      if(utag.loader.rf==0){
        utag.DB('READY:utag.loader.wq');
        utag.loader.rf=1;
        utag.loader.WQ();
      }
    });
    else if(this.lq.length>0)utag.loader.rf=1;
    else if(this.lq.length==0)utag.loader.END();

    return 1
  };
  utag.loader.EV('', 'ready', function(a) {if(utag.loader.efr!=1){utag.loader.efr=1;try{
  if(typeof utag.linkHandler=='undefined'){
    utag.linkHandler=function(a,b,c,d,e){
      if(!a)a=window.event;
      if(a.target)b=a.target;
      else if(a.srcElement)b=a.srcElement;
      if(b.nodeType==3)b=b.parentNode;
      if(typeof b=='undefined'||typeof b.tagName=='undefined')return;
      c=b.tagName.toLowerCase();
      if(c=='body')return;
      if(c!='a'){
        for(d=0;d<5;d++){
          if(typeof b!='undefined'&&b.parentNode)b=b.parentNode;
          c=(b!=null&&b.tagName)?b.tagName.toLowerCase():'';
          if(c=='a')break;
          else if(c == 'body')return;
        }
      }
      if(c!='a')return;
      var lt=b.text ? b.text: b.innerText ? b.innerText : '';
      if((lt=='' || /^\s+$/.test(lt)) && typeof b.innerHTML!='undefined'){
        lt=b.innerHTML.toLowerCase();
        if(lt.indexOf('<img ')>-1){
          d=lt.indexOf('alt="');
          if(d>-1){
            e=lt.indexOf('"', d + 5);
            lt=lt.substring(d+5,e);
          }else{
            d=lt.indexOf('src="');
            if(d>-1){
              e=lt.indexOf('"',d+5);
              lt=lt.substring(d+5,e);
            }
          }
        }
      }
      var hr=b.href,hrnq=(b.href.split('?'))[0];
      var obj={link_obj:b,link_text:lt,link_url:hrnq,link_type:'exit link',event_name:'link'};
c=[location.hostname].concat(('javascript:,www.schweizer-illustrierte.ch,localhost,//style-magazin.ch').split(','));
for(d=0;d<c.length;d++){if(hrnq.indexOf(c[d])>-1){obj.link_type='link';break;}};
c=('exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls').split(',');
for(d=0;d<c.length;d++){e=new RegExp(c[d]+'$');if(e.test(hrnq)){obj.link_type='download link';break;}};
try{var link=b;var isDescendant = function(parent, child) {
     var node = child.parentNode;
     while (node != null) {
         if (node == parent) {
             return true;
         }
         node = node.parentNode;
     }
     return false;
};

var getTrackObjFromEl = function(el) {
    var track_info = JSON.parse(el.dataset.trackInfo);
    var track_obj = {};
    for (var i = 0; i < track_info.length; i++) {
        track_obj[track_info[i].type] = track_info[i].value;
    }
    return track_obj;
};


var keyword_links = document.querySelectorAll(".content-keywords a");
for (var i = 0; i < keyword_links.length; i++) {
    if (keyword_links[i] == obj.link_obj) {
        obj["link_type"] = "keyword";
    }
}

if (obj.link_obj.classList.contains("share-button")) {
    obj["link_type"] = "share link";    
    obj["event_action"] = "click " + obj.link_obj.dataset.shareButtonType;
}

if (obj.link_obj.classList.contains("utility-button")) {
    var track_obj = getTrackObjFromEl(obj.link_obj);
    if (track_obj["data-utility-button-type"] == "share") {
        obj["link_type"] = "share link";
        obj["event_category"] = "share";
        obj["event_action"] = track_obj["data-utility-button-target"];
        obj["event_label"] = obj["link_url"];
    }
}

if (obj["link_type"] == "link" && window.location && window.location.pathname != "/") {
  var paragraphs = document.querySelectorAll(".content-body .paragraph");
  for (var i = 0; i < paragraphs.length; i++) {
    if (isDescendant(paragraphs[i], a.target)) {
      obj["link_type"] = "text link";
      obj["event_category"] = "related content";
      obj["event_action"] = "click text link in article";
      obj["event_label"] = obj["link_url"];
    }
  }
}

if (obj.link_obj.classList.contains("recommendation-teaser")) {
    obj["link_type"] = "related stories";    
    var track_obj = getTrackObjFromEl(obj.link_obj);
    obj["event_category"] = "related content";
    obj["event_label"] = obj["link_url"];
    if (track_obj["block-position"].indexOf("top") === 0){
        obj["event_action"] = "click related articles in article body";
    } else if (track_obj["block-position"].indexOf("bottom") === 0){
        obj["event_action"] = "click related articles in article base";
    } else {
        obj["event_action"] = "click " + track_obj["block-position"];
    }
}

if (obj.link_obj.classList.contains("fullscreen-button")) {
    obj["link_type"] = "fullscreen button";
    var track_obj = getTrackObjFromEl(obj.link_obj);
    obj["event_action"] = track_obj["fullscreen-button"];
}

if (obj.link_obj.classList.contains("track-menu")) {
    obj["link_type"] = "no_event"; //tracked separately
}

if (obj["link_type"] == "keyword" || obj["link_type"] == "share link" || obj["link_type"] == "related stories" || obj["link_type"] == "exit link") {
    if (obj["link_url"] != "") {
        utag.link(obj);
    }
}
}catch(e){};
    if(obj['link_url']=='no_default_event')utag.link(obj);
    }
  utag.loader.EV(document,'mousedown',utag.linkHandler);
  }

}catch(e){utag.DB(e)};
try{ try{ if(1){
document.getElementById("app").addEventListener("click", function(event) {
    var menu_element = undefined;
    if (event.target.classList.contains("track-menu")) {
        menu_element = event.target;
    } else {        
        var menu_categories = document.querySelectorAll("li.track-menu span");
        for (var i = 0; i < menu_categories.length; i++) {
            //can click on multiple elements (text and arrow), thus compare parents
            if (menu_categories[i].parentNode == event.target.parentNode) {
                menu_element = event.target.closest("li.track-menu");
                break;
            }
        }
    }    
    if (menu_element) {
        var track_element = menu_element.dataset.trackElement;
        var track_action = menu_element.dataset.trackAction;               
        utag.link({
            event_category: "menu",
            event_action: track_action + " " + track_element,
            event_label: window.location.pathname
        });
    }
});
} } catch(e){ utag.DB(e) }  }catch(e){utag.DB(e)};
try{ try{ if(1){
document.getElementById("app").addEventListener("click", function(event) {
    if (event.target.classList.contains("fullscreen-button")) {
		utag.link({
            event_name: "gallery_fullscreen_click",
            event_category: "image_gallery",
            event_action: "open_fullscreen"
        });
    }
});
} } catch(e){ utag.DB(e) }  }catch(e){utag.DB(e)};
try{ try{ if(1){
OneSignal.push(function() {
    OneSignal.on("notificationPermissionChange", function(permissionChange) {
        var currentPermission = permissionChange.to;
        utag.link({
            "event_category": "push notification",
            "event_action": "push " + currentPermission,
            "event_label": utag.data.cms_page_id
        });
   });
});
} } catch(e){ utag.DB(e) }  }catch(e){utag.DB(e)};
try{ try{ if(1){
var getPagePath = function() { return window.location.pathname };

document.getElementById("app").addEventListener("click", function(event) {
    var mc_button = document.getElementById("mc-embedded-subscribe");
    if (mc_button == event.target) {
        utag.link({
            "event_category": "Mailchimp",
            "event_action": "Button Click",
            "event_label": getPagePath(),
        });      
    }  
});
} } catch(e){ utag.DB(e) }  }catch(e){utag.DB(e)};
try{ try{ if(1){
(function(){
  try {
    var receiveMessage = function(message) {
      try {        
        if(message.data.event == "piano_show_offer" && message.origin.indexOf("tinypass.com") >= 0) {
          message.data["event_name"] = "piano_show_offer";
          utag.link(message.data);
        }        
      } catch(err) {};
    };
    if(typeof window.addEventListener !== "undefined") {
      window.addEventListener("message", function(e) {
        receiveMessage(e);
      });
    } else if (typeof window.attachEvent !== "undefined") {
      window.attachEvent("on" + "message", function(e) {
        receiveMessage(e);
      });
    }
  } catch(err){};
})();

} } catch(e){ utag.DB(e) }  }catch(e){utag.DB(e)};}})

  if(utag.cfg.readywait || utag.cfg.waittimer){
    utag.loader.EV('', 'ready', function(a) {
      if(utag.loader.rf==0){
        utag.loader.rf=1;
        utag.cfg.readywait=1;
        utag.DB('READY:utag.cfg.readywait');
        setTimeout(function(){utag.loader.PINIT()}, utag.cfg.waittimer || 1);
      }
    })
  }else{
    utag.loader.PINIT()
  }
}

