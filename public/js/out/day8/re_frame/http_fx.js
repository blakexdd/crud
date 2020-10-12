// Compiled by ClojureScript 1.10.773 {}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__28621){
var vec__28622 = p__28621;
var success_QMARK_ = cljs.core.nth.call(null,vec__28622,(0),null);
var response = cljs.core.nth.call(null,vec__28622,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return on_success.call(null,response);
} else {
var details = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response);
return on_failure.call(null,details);
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__28627){
var map__28628 = p__28627;
var map__28628__$1 = (((((!((map__28628 == null))))?(((((map__28628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28628):map__28628);
var request = map__28628__$1;
var on_success = cljs.core.get.call(null,map__28628__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.call(null,map__28628__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"api","api",-899839580),api,new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__28625_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_success,p1__28625_SHARP_));
}),(function (p1__28626_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_failure,p1__28626_SHARP_));
}),api)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_.call(null,request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__28630 = cljs.core.seq.call(null,seq_request_maps);
var chunk__28631 = null;
var count__28632 = (0);
var i__28633 = (0);
while(true){
if((i__28633 < count__28632)){
var request__$1 = cljs.core._nth.call(null,chunk__28631,i__28633);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));


var G__28634 = seq__28630;
var G__28635 = chunk__28631;
var G__28636 = count__28632;
var G__28637 = (i__28633 + (1));
seq__28630 = G__28634;
chunk__28631 = G__28635;
count__28632 = G__28636;
i__28633 = G__28637;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28630);
if(temp__5735__auto__){
var seq__28630__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28630__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28630__$1);
var G__28638 = cljs.core.chunk_rest.call(null,seq__28630__$1);
var G__28639 = c__4556__auto__;
var G__28640 = cljs.core.count.call(null,c__4556__auto__);
var G__28641 = (0);
seq__28630 = G__28638;
chunk__28631 = G__28639;
count__28632 = G__28640;
i__28633 = G__28641;
continue;
} else {
var request__$1 = cljs.core.first.call(null,seq__28630__$1);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));


var G__28642 = cljs.core.next.call(null,seq__28630__$1);
var G__28643 = null;
var G__28644 = (0);
var G__28645 = (0);
seq__28630 = G__28642;
chunk__28631 = G__28643;
count__28632 = G__28644;
i__28633 = G__28645;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect);

//# sourceMappingURL=http_fx.js.map?rel=1602507662239
