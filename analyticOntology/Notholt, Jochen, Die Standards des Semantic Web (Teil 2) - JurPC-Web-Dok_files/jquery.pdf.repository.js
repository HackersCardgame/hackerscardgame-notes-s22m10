(function($){
 
    $.fn.extend({
         
        //pass the options variable to the function
        pdfRepository: function(options) {
                      
            var defaults = {
                //repository: 'https://pdf.makrolog.de/pdf-repository',
                //repoParam: 'makrolog',
                repository: 'https://www.jurpc.de/pdf-repository',
                repoParam: 'jurpc',
                debug: false,
                png : 'OnlineViewer',
                pdf : 'AcrobatReader',
                fv : 'FlipViewer',
                epub : 'EPub-Reader'
            };
                 
            var options =  $.extend(defaults, options);
 
            var methods = {
            
            	handleLink : function(link) {
              	var completeId = link.href; //absolute path of href
              	var completeUrl = window.location.href;
              	
              	//Links auf sich selber werden nicht behandelt
              	if (!$(link).hasClass('ignore-pdf-repository')) {
              	
              		   $(link).removeAttr('onclick'); //prevent onclick events
              		   $(link).bind("contextmenu", function(e) { e.preventDefault(); });
                 	   $(link).click(function(event) {
                 	   event.preventDefault();  //prevent default behavior
                 	     
                 	   //$.cookie("DomAuthSessId", "12345", { path: '/' , domain: 'localhost:8080'});
   					 
                 	   var definedDomauthsessid = "";
                 	   if (typeof domauthsessid !== 'undefined') definedDomauthsessid = domauthsessid;
                 	   //alert("url: " + options.repository+"/get" + " id: " + completeId + "repo: " + options.repoParam);  
                   	   $.ajax({ //ajax request to repository for metadata information
   							url: options.repository+"/get",
   							//headers: {"Cookie":"DomAuthSessId2=5555"},
   							//beforeSend: function(xhrObj){
   							//		xhrObj.setRequestHeader("Cookie","DomAuthSessId3=6666");
   							//},
   							//xhrFields: {
   							//	withCredentials: true
   							//},
   							//crossDomain: true,
   							cache: true,
                   			type: 'GET', // POST or GET
                   			data: {id: completeId, mode : "meta", metaType : "jsonp", repo : options.repoParam, url : completeUrl, domAuthSessId : definedDomauthsessid}, 
                   			dataType: 'jsonp', //adds ?callback=? automatically to url, 
                   			jsonp : "jsonp_callback", //changes ?callback=? to ?jsonp_callback=?
                   			jsonpCallback: "jsonpcallback",//the ? is created randomly, with this it is static (locally it is ignored and dynamic)
   							success: function(data, status) {
                         	    if (data == null) {
                         	    	 if (options.debug) alert('Aufruf des PDF-Repositores schlaegt fehlt - keine Metadaten: '+options.repository+"/get?id="+completeId+"&mode=meta&metaType=jsonp&repo="+options.repoParam+"&url="+completeUrl+"&domAuthSessId="+definedDomauthsessid);
                         	    	 methods.streamPdfData(completeId, definedDomauthsessid, completeUrl);
                                } else {
                                	
                                	var pdf = data.formats.pdf;
                             		var png = data.formats.png;
                             		var fv = data.formats.fv;
                             		var epub = data.formats.epub;
                             				  
                             		var popup = data.properties.popup;
                             		if (options.debug) alert('Metadaten XML/JSON values des Repositories: '+data.id + ": pdf=" +pdf+ ", png=" +png+ ", fv=" +fv+ ", epub=" +epub);
                                             
                             			//Wenn nur png-Format -> Viewer
                             		if (png && !pdf && !fv && !epub) methods.redirectToViewer(completeId, definedDomauthsessid, completeUrl);
                                   
                             		//Wenn nur pdf-Format -> Streamen
                             		else if (pdf && !png && !fv && !epub) methods.streamPdfData(completeId, definedDomauthsessid, completeUrl);
                                   
                             		else {
                                   	
	                                   	//Wenn Popup deaktiviert ist
	                                   	if (popup == null || !popup) {
	                                   		if (png) methods.redirectToViewer(completeId, definedDomauthsessid, completeUrl);
	                                   		else methods.streamPdfData(completeId, definedDomauthsessid, completeUrl);
	                                   	
	                                   	//Wenn Popup aktiviert ist
	                                   	} else {
	                                   		methods.createTooltip(event.target, data.formats, completeId, definedDomauthsessid, completeUrl);
	                                   	}
                             		}
                                }
                         	},
                         	error: function(jqXHR, textStatus, errorThrown) {
                                 alert("Response: " + jqXHR.responseText);
                            }
                       }); //ajax
                   }); //click
              		
              	}   
               }, //handleLink
                              
               redirectToViewer : function(id, definedDomauthsessid, completeUrl) {
                  var redirect = options.repository+'/viewer?id='+id+'&mode=stream&recType=png&repo='+options.repoParam+'&url='+completeUrl+'&domAuthSessId='+definedDomauthsessid;
                  $(location).attr('href',redirect);
               }, //redirectToViewer
              
               streamPdfData : function(id, definedDomauthsessid, completeUrl) {
            	   var title = id.substring(id.lastIndexOf('/')+1).replace('?','-').replace("://", "-").replace("/", "-").toLowerCase();
                  var redirect = options.repository+'/'+title+'?id='+id+'&mode=stream&recType=pdf&repo='+options.repoParam+'&url='+completeUrl+'&domAuthSessId='+definedDomauthsessid;
                  $(location).attr('href',redirect);
               }, //streamPdfData
               
               createTooltip : function(link, formats, id, definedDomauthsessid, completeUrl) {
                    var title = id.substring(id.lastIndexOf('/')+1).replace('?','-').replace("://", "-").replace("/", "-").toLowerCase();
                    
                    var pos = $(link).position();
                    var offset = $(link).offset();
                    var width = $(link).outerWidth();
                    
                    var content = '<div class="pdf-repository-popup" style="top:'+(offset.top + 20)+'px; left:'+(offset.left + 0.5*width - 105)+'px;">';
            				content += '<img src="'+options.repository+'/get?id='+id+'&mode=stream&recType=png&opt=thumbnail&repo='+options.repoParam+'&url='+completeUrl+'&domAuthSessId='+definedDomauthsessid+'" class="thumb" width="75px" height="100px" />';
            				content += '<div class="controls">';
            				content += '<div class="bt_show"><a href="'+options.repository+'/viewer?id='+id+'&mode=stream&recType=png&repo='+options.repoParam+'&url='+completeUrl+'&domAuthSessId='+definedDomauthsessid+'"><img src="'+options.repository+'/images/bt_show.png'+'"/></a></div>'; 
            				
                    content += '<div class="more_formats">Weitere Formate:</div>';  
                    $.each(formats, function(key,value) {
                        if (value && key != 'png') content += '<div class="format_true"><a href="'+options.repository+'/'+title+'?id='+id+'&mode=stream&recType='+key+'&repo='+options.repoParam+'&url='+completeUrl+'&domAuthSessId='+definedDomauthsessid+'"><img src="'+options.repository+'/images/format'+'_'+key+'.png"/>'+options[key]+'</a></div>';
                    });
                    
                    content += '</div>';
                    content += '</div>';
                     
                    $("body").append(content);
                    
                    // Close Popup by clicking on the page
                    $("html").live("click", function(){
                      $(".pdf-repository-popup").hide();
                    });
                    // except by clicking on the popup
                    $(".pdf-repository-popup").live("click", function(e){
                      e.stopPropagation();
                    });
                    
                    /*$(link).qtip({
                    			content:  content,              
                    			title: {
                    					text: 'Format w&auml;hlen:', // Give the tooltip a title using each elements text
                    					button: true
                    			},
                    			position: {
                    				at: 'bottom center', // Position the tooltip above the link
                    				my: 'top center'
                    			},
                    			show: {
                    				event: 'click',
                    				ready: true, //da innerhalb des Click-Events, wird dieses nicht mehr ausgeführt und er muss direkt nach Erzeugung gezeigt werden
                    				solo: true // Only show one tooltip at a time
                    			},
                    			hide: 'unfocus',
                    			style: {
                    				classes: 'ui-tooltip-wiki ui-tooltip-light ui-tooltip-shadow'
                    			}
                    });*/
               } //createTooltip
               
            }; //methods
 
 
            return this.each(function() {
            	
              	//workaround für geänderten repository-Parameter - kann wieder raus sobald alle umgestellt sind (dwa, jurpc):
              	if (options.repository.indexOf("/get") != -1) {
              		var index = options.repository.indexOf("/get");
              		options.repository = options.repository.substring(0,index);
              		//alert(options.repository);
              	}
            	
                var link = this;
                methods.handleLink(link);
                                                
            }); //each
        
        } //pdfRepository
    
    }); //extends
    
})(jQuery);




