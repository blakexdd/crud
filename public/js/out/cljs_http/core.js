// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p__30873){
var vec__30874 = p__30873;
var k = cljs.core.nth.call(null,vec__30874,(0),null);
var v = cljs.core.nth.call(null,vec__30874,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__30877 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__30877)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__30877)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__30877)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__30877)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__30877)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__30877)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30877)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__30878){
var map__30879 = p__30878;
var map__30879__$1 = (((((!((map__30879 == null))))?(((((map__30879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30879):map__30879);
var request = map__30879__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__30879__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__30879__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__30879__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__30881 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__30881,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__30881,response_type);

G__30881.setTimeoutInterval(timeout);

G__30881.setWithCredentials(send_credentials);

return G__30881;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__30882){
var map__30883 = p__30882;
var map__30883__$1 = (((((!((map__30883 == null))))?(((((map__30883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30883):map__30883);
var request = map__30883__$1;
var request_method = cljs.core.get.call(null,map__30883__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__30883__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__30883__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__30883__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__30883__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__30883__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__4126__auto__ = request_method;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_.call(null,xhr)))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}));

if(cljs.core.truth_(progress)){
var listener_30907 = (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});
var G__30885_30908 = xhr;
G__30885_30908.setProgressEventsEnabled(true);

G__30885_30908.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_30907,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__30885_30908.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_30907,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__28918__auto___30909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = (function (state_30896){
var state_val_30897 = (state_30896[(1)]);
if((state_val_30897 === (1))){
var state_30896__$1 = state_30896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30896__$1,(2),cancel);
} else {
if((state_val_30897 === (2))){
var inst_30887 = (state_30896[(2)]);
var inst_30888 = xhr.isComplete();
var inst_30889 = cljs.core.not.call(null,inst_30888);
var state_30896__$1 = (function (){var statearr_30898 = state_30896;
(statearr_30898[(7)] = inst_30887);

return statearr_30898;
})();
if(inst_30889){
var statearr_30899_30910 = state_30896__$1;
(statearr_30899_30910[(1)] = (3));

} else {
var statearr_30900_30911 = state_30896__$1;
(statearr_30900_30911[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30897 === (3))){
var inst_30891 = xhr.abort();
var state_30896__$1 = state_30896;
var statearr_30901_30912 = state_30896__$1;
(statearr_30901_30912[(2)] = inst_30891);

(statearr_30901_30912[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30897 === (4))){
var state_30896__$1 = state_30896;
var statearr_30902_30913 = state_30896__$1;
(statearr_30902_30913[(2)] = null);

(statearr_30902_30913[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30897 === (5))){
var inst_30894 = (state_30896[(2)]);
var state_30896__$1 = state_30896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30896__$1,inst_30894);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__28824__auto__ = null;
var cljs_http$core$xhr_$_state_machine__28824__auto____0 = (function (){
var statearr_30903 = [null,null,null,null,null,null,null,null];
(statearr_30903[(0)] = cljs_http$core$xhr_$_state_machine__28824__auto__);

(statearr_30903[(1)] = (1));

return statearr_30903;
});
var cljs_http$core$xhr_$_state_machine__28824__auto____1 = (function (state_30896){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_30896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e30904){if((e30904 instanceof Object)){
var ex__28827__auto__ = e30904;
var statearr_30905_30914 = state_30896;
(statearr_30905_30914[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30915 = state_30896;
state_30896 = G__30915;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__28824__auto__ = function(state_30896){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__28824__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__28824__auto____1.call(this,state_30896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__28824__auto____0;
cljs_http$core$xhr_$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__28824__auto____1;
return cljs_http$core$xhr_$_state_machine__28824__auto__;
})()
})();
var state__28920__auto__ = (function (){var statearr_30906 = f__28919__auto__.call(null);
(statearr_30906[(6)] = c__28918__auto___30909);

return statearr_30906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__30916){
var map__30917 = p__30916;
var map__30917__$1 = (((((!((map__30917 == null))))?(((((map__30917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30917):map__30917);
var request = map__30917__$1;
var timeout = cljs.core.get.call(null,map__30917__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__30917__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__30917__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__30917__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_30930 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}));
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_30930], null));

if(cljs.core.truth_(cancel)){
var c__28918__auto___30931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = (function (state_30923){
var state_val_30924 = (state_30923[(1)]);
if((state_val_30924 === (1))){
var state_30923__$1 = state_30923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30923__$1,(2),cancel);
} else {
if((state_val_30924 === (2))){
var inst_30920 = (state_30923[(2)]);
var inst_30921 = jsonp.cancel(req_30930);
var state_30923__$1 = (function (){var statearr_30925 = state_30923;
(statearr_30925[(7)] = inst_30920);

return statearr_30925;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30923__$1,inst_30921);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__28824__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__28824__auto____0 = (function (){
var statearr_30926 = [null,null,null,null,null,null,null,null];
(statearr_30926[(0)] = cljs_http$core$jsonp_$_state_machine__28824__auto__);

(statearr_30926[(1)] = (1));

return statearr_30926;
});
var cljs_http$core$jsonp_$_state_machine__28824__auto____1 = (function (state_30923){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_30923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e30927){if((e30927 instanceof Object)){
var ex__28827__auto__ = e30927;
var statearr_30928_30932 = state_30923;
(statearr_30928_30932[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30933 = state_30923;
state_30923 = G__30933;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__28824__auto__ = function(state_30923){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__28824__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__28824__auto____1.call(this,state_30923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__28824__auto____0;
cljs_http$core$jsonp_$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__28824__auto____1;
return cljs_http$core$jsonp_$_state_machine__28824__auto__;
})()
})();
var state__28920__auto__ = (function (){var statearr_30929 = f__28919__auto__.call(null);
(statearr_30929[(6)] = c__28918__auto___30931);

return statearr_30929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__30934){
var map__30935 = p__30934;
var map__30935__$1 = (((((!((map__30935 == null))))?(((((map__30935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30935):map__30935);
var request = map__30935__$1;
var request_method = cljs.core.get.call(null,map__30935__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map?rel=1602418809594
