// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('no.en.core');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return (v > (0));
} else {
return and__4115__auto__;
}
})())){
return v;
} else {
return null;
}
});
cljs_http.client.acc_param = (function cljs_http$client$acc_param(o,v){
if(cljs.core.coll_QMARK_.call(null,o)){
return cljs.core.conj.call(null,o,v);
} else {
if((!((o == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,v], null);
} else {
return v;

}
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if((!(clojure.string.blank_QMARK_.call(null,s)))){
return cljs.core.reduce.call(null,(function (p1__30940_SHARP_,p2__30939_SHARP_){
var vec__30941 = clojure.string.split.call(null,p2__30939_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__30941,(0),null);
var v = cljs.core.nth.call(null,vec__30941,(1),null);
return cljs.core.update.call(null,p1__30940_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),cljs_http.client.acc_param,no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if((!(clojure.string.blank_QMARK_.call(null,url)))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [no.en.core.url_encode.call(null,cljs.core.name.call(null,k)),"=",no.en.core.url_encode.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(v))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__30944_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__30944_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__30945){
var vec__30946 = p__30945;
var k = cljs.core.nth.call(null,vec__30946,(0),null);
var v = cljs.core.nth.call(null,vec__30946,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,(function (p1__30949_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30949_SHARP_)].join('');
}),esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method))?((cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response)))?cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))):false):false))){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__5733__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto__)){
var params = temp__5733__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__30950_SHARP_){
return cljs_http.client.decode_body.call(null,p1__30950_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30957 = arguments.length;
var i__4737__auto___30958 = (0);
while(true){
if((i__4737__auto___30958 < len__4736__auto___30957)){
args__4742__auto__.push((arguments[i__4737__auto___30958]));

var G__30959 = (i__4737__auto___30958 + (1));
i__4737__auto___30958 = G__30959;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__30953){
var vec__30954 = p__30953;
var default_headers = cljs.core.nth.call(null,vec__30954,(0),null);
return (function (request){
var temp__5733__auto__ = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var default_headers__$1 = temp__5733__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
}));

(cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq30951){
var G__30952 = cljs.core.first.call(null,seq30951);
var seq30951__$1 = cljs.core.next.call(null,seq30951);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30952,seq30951__$1);
}));

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30966 = arguments.length;
var i__4737__auto___30967 = (0);
while(true){
if((i__4737__auto___30967 < len__4736__auto___30966)){
args__4742__auto__.push((arguments[i__4737__auto___30967]));

var G__30968 = (i__4737__auto___30967 + (1));
i__4737__auto___30967 = G__30968;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__30962){
var vec__30963 = p__30962;
var accept = cljs.core.nth.call(null,vec__30963,(0),null);
return (function (request){
var temp__5733__auto__ = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var accept__$1 = temp__5733__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
}));

(cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq30960){
var G__30961 = cljs.core.first.call(null,seq30960);
var seq30960__$1 = cljs.core.next.call(null,seq30960);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30961,seq30960__$1);
}));

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30975 = arguments.length;
var i__4737__auto___30976 = (0);
while(true){
if((i__4737__auto___30976 < len__4736__auto___30975)){
args__4742__auto__.push((arguments[i__4737__auto___30976]));

var G__30977 = (i__4737__auto___30976 + (1));
i__4737__auto___30976 = G__30977;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__30971){
var vec__30972 = p__30971;
var content_type = cljs.core.nth.call(null,vec__30972,(0),null);
return (function (request){
var temp__5733__auto__ = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var content_type__$1 = temp__5733__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
}));

(cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq30969){
var G__30970 = cljs.core.first.call(null,seq30969);
var seq30969__$1 = cljs.core.next.call(null,seq30969);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30970,seq30969__$1);
}));

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__5733__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto__)){
var params = temp__5733__auto__;
var map__30978 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__30978__$1 = (((((!((map__30978 == null))))?(((((map__30978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30978):map__30978);
var encoding = cljs.core.get.call(null,map__30978__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__30978__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__30982 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__30982__$1 = (((((!((map__30982 == null))))?(((((map__30982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30982):map__30982);
var decoding = cljs.core.get.call(null,map__30982__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__30982__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = (function (p1__30980_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__30980_SHARP_,decoding,decoding_opts);
});
return cljs.core.async.map.call(null,(function (p1__30981_SHARP_){
return cljs_http.client.decode_body.call(null,p1__30981_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__5733__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto__)){
var params = temp__5733__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__30984_SHARP_){
return cljs_http.client.decode_body.call(null,p1__30984_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__30985){
var map__30986 = p__30985;
var map__30986__$1 = (((((!((map__30986 == null))))?(((((map__30986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30986):map__30986);
var req = map__30986__$1;
var query_params = cljs.core.get.call(null,map__30986__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__30988){
var map__30989 = p__30988;
var map__30989__$1 = (((((!((map__30989 == null))))?(((((map__30989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30989):map__30989);
var request = map__30989__$1;
var form_params = cljs.core.get.call(null,map__30989__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__30989__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__30989__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__4115__auto__ = form_params;
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__4115__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__30991_31007 = cljs.core.seq.call(null,params);
var chunk__30992_31008 = null;
var count__30993_31009 = (0);
var i__30994_31010 = (0);
while(true){
if((i__30994_31010 < count__30993_31009)){
var vec__31001_31011 = cljs.core._nth.call(null,chunk__30992_31008,i__30994_31010);
var k_31012 = cljs.core.nth.call(null,vec__31001_31011,(0),null);
var v_31013 = cljs.core.nth.call(null,vec__31001_31011,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_31013)){
form_data.append(cljs.core.name.call(null,k_31012),cljs.core.first.call(null,v_31013),cljs.core.second.call(null,v_31013));
} else {
form_data.append(cljs.core.name.call(null,k_31012),v_31013);
}


var G__31014 = seq__30991_31007;
var G__31015 = chunk__30992_31008;
var G__31016 = count__30993_31009;
var G__31017 = (i__30994_31010 + (1));
seq__30991_31007 = G__31014;
chunk__30992_31008 = G__31015;
count__30993_31009 = G__31016;
i__30994_31010 = G__31017;
continue;
} else {
var temp__5735__auto___31018 = cljs.core.seq.call(null,seq__30991_31007);
if(temp__5735__auto___31018){
var seq__30991_31019__$1 = temp__5735__auto___31018;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30991_31019__$1)){
var c__4556__auto___31020 = cljs.core.chunk_first.call(null,seq__30991_31019__$1);
var G__31021 = cljs.core.chunk_rest.call(null,seq__30991_31019__$1);
var G__31022 = c__4556__auto___31020;
var G__31023 = cljs.core.count.call(null,c__4556__auto___31020);
var G__31024 = (0);
seq__30991_31007 = G__31021;
chunk__30992_31008 = G__31022;
count__30993_31009 = G__31023;
i__30994_31010 = G__31024;
continue;
} else {
var vec__31004_31025 = cljs.core.first.call(null,seq__30991_31019__$1);
var k_31026 = cljs.core.nth.call(null,vec__31004_31025,(0),null);
var v_31027 = cljs.core.nth.call(null,vec__31004_31025,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_31027)){
form_data.append(cljs.core.name.call(null,k_31026),cljs.core.first.call(null,v_31027),cljs.core.second.call(null,v_31027));
} else {
form_data.append(cljs.core.name.call(null,k_31026),v_31027);
}


var G__31028 = cljs.core.next.call(null,seq__30991_31019__$1);
var G__31029 = null;
var G__31030 = (0);
var G__31031 = (0);
seq__30991_31007 = G__31028;
chunk__30992_31008 = G__31029;
count__30993_31009 = G__31030;
i__30994_31010 = G__31031;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__31032){
var map__31033 = p__31032;
var map__31033__$1 = (((((!((map__31033 == null))))?(((((map__31033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31033):map__31033);
var request = map__31033__$1;
var multipart_params = cljs.core.get.call(null,map__31033__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__31033__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__4115__auto__ = multipart_params;
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__4115__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__5733__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5733__auto__)){
var m = temp__5733__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__31035_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__31035_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__31037){
var map__31038 = p__31037;
var map__31038__$1 = (((((!((map__31038 == null))))?(((((map__31038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31038):map__31038);
var req = map__31038__$1;
var query_params = cljs.core.get.call(null,map__31038__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__5733__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__5733__auto__)){
var spec = temp__5733__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),(function (p1__31036_SHARP_){
return cljs.core.merge.call(null,p1__31036_SHARP_,query_params);
})));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31046 = arguments.length;
var i__4737__auto___31047 = (0);
while(true){
if((i__4737__auto___31047 < len__4736__auto___31046)){
args__4742__auto__.push((arguments[i__4737__auto___31047]));

var G__31048 = (i__4737__auto___31047 + (1));
i__4737__auto___31047 = G__31048;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__31042){
var vec__31043 = p__31042;
var credentials = cljs.core.nth.call(null,vec__31043,(0),null);
return (function (req){
var credentials__$1 = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return credentials;
}
})();
if((!(cljs.core.empty_QMARK_.call(null,credentials__$1)))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
}));

(cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq31040){
var G__31041 = cljs.core.first.call(null,seq31040);
var seq31040__$1 = cljs.core.next.call(null,seq31040);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31041,seq31040__$1);
}));

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__5733__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5733__auto__)){
var oauth_token = temp__5733__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__5733__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto__)){
var custom_channel = temp__5733__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31055 = arguments.length;
var i__4737__auto___31056 = (0);
while(true){
if((i__4737__auto___31056 < len__4736__auto___31055)){
args__4742__auto__.push((arguments[i__4737__auto___31056]));

var G__31057 = (i__4737__auto___31056 + (1));
i__4737__auto___31056 = G__31057;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31051){
var vec__31052 = p__31051;
var req = cljs.core.nth.call(null,vec__31052,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
}));

(cljs_http.client.delete$.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.delete$.cljs$lang$applyTo = (function (seq31049){
var G__31050 = cljs.core.first.call(null,seq31049);
var seq31049__$1 = cljs.core.next.call(null,seq31049);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31050,seq31049__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31064 = arguments.length;
var i__4737__auto___31065 = (0);
while(true){
if((i__4737__auto___31065 < len__4736__auto___31064)){
args__4742__auto__.push((arguments[i__4737__auto___31065]));

var G__31066 = (i__4737__auto___31065 + (1));
i__4737__auto___31065 = G__31066;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31060){
var vec__31061 = p__31060;
var req = cljs.core.nth.call(null,vec__31061,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
}));

(cljs_http.client.get.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.get.cljs$lang$applyTo = (function (seq31058){
var G__31059 = cljs.core.first.call(null,seq31058);
var seq31058__$1 = cljs.core.next.call(null,seq31058);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31059,seq31058__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31073 = arguments.length;
var i__4737__auto___31074 = (0);
while(true){
if((i__4737__auto___31074 < len__4736__auto___31073)){
args__4742__auto__.push((arguments[i__4737__auto___31074]));

var G__31075 = (i__4737__auto___31074 + (1));
i__4737__auto___31074 = G__31075;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31069){
var vec__31070 = p__31069;
var req = cljs.core.nth.call(null,vec__31070,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
}));

(cljs_http.client.head.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.head.cljs$lang$applyTo = (function (seq31067){
var G__31068 = cljs.core.first.call(null,seq31067);
var seq31067__$1 = cljs.core.next.call(null,seq31067);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31068,seq31067__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31082 = arguments.length;
var i__4737__auto___31083 = (0);
while(true){
if((i__4737__auto___31083 < len__4736__auto___31082)){
args__4742__auto__.push((arguments[i__4737__auto___31083]));

var G__31084 = (i__4737__auto___31083 + (1));
i__4737__auto___31083 = G__31084;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31078){
var vec__31079 = p__31078;
var req = cljs.core.nth.call(null,vec__31079,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
}));

(cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq31076){
var G__31077 = cljs.core.first.call(null,seq31076);
var seq31076__$1 = cljs.core.next.call(null,seq31076);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31077,seq31076__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31091 = arguments.length;
var i__4737__auto___31092 = (0);
while(true){
if((i__4737__auto___31092 < len__4736__auto___31091)){
args__4742__auto__.push((arguments[i__4737__auto___31092]));

var G__31093 = (i__4737__auto___31092 + (1));
i__4737__auto___31092 = G__31093;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31087){
var vec__31088 = p__31087;
var req = cljs.core.nth.call(null,vec__31088,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
}));

(cljs_http.client.move.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.move.cljs$lang$applyTo = (function (seq31085){
var G__31086 = cljs.core.first.call(null,seq31085);
var seq31085__$1 = cljs.core.next.call(null,seq31085);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31086,seq31085__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31100 = arguments.length;
var i__4737__auto___31101 = (0);
while(true){
if((i__4737__auto___31101 < len__4736__auto___31100)){
args__4742__auto__.push((arguments[i__4737__auto___31101]));

var G__31102 = (i__4737__auto___31101 + (1));
i__4737__auto___31101 = G__31102;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31096){
var vec__31097 = p__31096;
var req = cljs.core.nth.call(null,vec__31097,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
}));

(cljs_http.client.options.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.options.cljs$lang$applyTo = (function (seq31094){
var G__31095 = cljs.core.first.call(null,seq31094);
var seq31094__$1 = cljs.core.next.call(null,seq31094);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31095,seq31094__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31109 = arguments.length;
var i__4737__auto___31110 = (0);
while(true){
if((i__4737__auto___31110 < len__4736__auto___31109)){
args__4742__auto__.push((arguments[i__4737__auto___31110]));

var G__31111 = (i__4737__auto___31110 + (1));
i__4737__auto___31110 = G__31111;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31105){
var vec__31106 = p__31105;
var req = cljs.core.nth.call(null,vec__31106,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
}));

(cljs_http.client.patch.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.patch.cljs$lang$applyTo = (function (seq31103){
var G__31104 = cljs.core.first.call(null,seq31103);
var seq31103__$1 = cljs.core.next.call(null,seq31103);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31104,seq31103__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31118 = arguments.length;
var i__4737__auto___31119 = (0);
while(true){
if((i__4737__auto___31119 < len__4736__auto___31118)){
args__4742__auto__.push((arguments[i__4737__auto___31119]));

var G__31120 = (i__4737__auto___31119 + (1));
i__4737__auto___31119 = G__31120;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31114){
var vec__31115 = p__31114;
var req = cljs.core.nth.call(null,vec__31115,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
}));

(cljs_http.client.post.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.post.cljs$lang$applyTo = (function (seq31112){
var G__31113 = cljs.core.first.call(null,seq31112);
var seq31112__$1 = cljs.core.next.call(null,seq31112);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31113,seq31112__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31127 = arguments.length;
var i__4737__auto___31128 = (0);
while(true){
if((i__4737__auto___31128 < len__4736__auto___31127)){
args__4742__auto__.push((arguments[i__4737__auto___31128]));

var G__31129 = (i__4737__auto___31128 + (1));
i__4737__auto___31128 = G__31129;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31123){
var vec__31124 = p__31123;
var req = cljs.core.nth.call(null,vec__31124,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
}));

(cljs_http.client.put.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.put.cljs$lang$applyTo = (function (seq31121){
var G__31122 = cljs.core.first.call(null,seq31121);
var seq31121__$1 = cljs.core.next.call(null,seq31121);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31122,seq31121__$1);
}));


//# sourceMappingURL=client.js.map?rel=1602418809715
