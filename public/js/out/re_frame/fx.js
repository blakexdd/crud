// Compiled by ClojureScript 1.10.773 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__28205 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__28206 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__28206);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___28239 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___28239)){
var new_db_28240 = temp__5735__auto___28239;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_28240);
} else {
}

var seq__28207 = cljs.core.seq.call(null,effects_without_db);
var chunk__28208 = null;
var count__28209 = (0);
var i__28210 = (0);
while(true){
if((i__28210 < count__28209)){
var vec__28217 = cljs.core._nth.call(null,chunk__28208,i__28210);
var effect_key = cljs.core.nth.call(null,vec__28217,(0),null);
var effect_value = cljs.core.nth.call(null,vec__28217,(1),null);
var temp__5733__auto___28241 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28241)){
var effect_fn_28242 = temp__5733__auto___28241;
effect_fn_28242.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__28243 = seq__28207;
var G__28244 = chunk__28208;
var G__28245 = count__28209;
var G__28246 = (i__28210 + (1));
seq__28207 = G__28243;
chunk__28208 = G__28244;
count__28209 = G__28245;
i__28210 = G__28246;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28207);
if(temp__5735__auto__){
var seq__28207__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28207__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28207__$1);
var G__28247 = cljs.core.chunk_rest.call(null,seq__28207__$1);
var G__28248 = c__4556__auto__;
var G__28249 = cljs.core.count.call(null,c__4556__auto__);
var G__28250 = (0);
seq__28207 = G__28247;
chunk__28208 = G__28248;
count__28209 = G__28249;
i__28210 = G__28250;
continue;
} else {
var vec__28220 = cljs.core.first.call(null,seq__28207__$1);
var effect_key = cljs.core.nth.call(null,vec__28220,(0),null);
var effect_value = cljs.core.nth.call(null,vec__28220,(1),null);
var temp__5733__auto___28251 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28251)){
var effect_fn_28252 = temp__5733__auto___28251;
effect_fn_28252.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__28253 = cljs.core.next.call(null,seq__28207__$1);
var G__28254 = null;
var G__28255 = (0);
var G__28256 = (0);
seq__28207 = G__28253;
chunk__28208 = G__28254;
count__28209 = G__28255;
i__28210 = G__28256;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__28000__auto___28257 = re_frame.interop.now.call(null);
var duration__28001__auto___28258 = (end__28000__auto___28257 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__28001__auto___28258,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__28000__auto___28257);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__28205);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___28259 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___28259)){
var new_db_28260 = temp__5735__auto___28259;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_28260);
} else {
}

var seq__28223 = cljs.core.seq.call(null,effects_without_db);
var chunk__28224 = null;
var count__28225 = (0);
var i__28226 = (0);
while(true){
if((i__28226 < count__28225)){
var vec__28233 = cljs.core._nth.call(null,chunk__28224,i__28226);
var effect_key = cljs.core.nth.call(null,vec__28233,(0),null);
var effect_value = cljs.core.nth.call(null,vec__28233,(1),null);
var temp__5733__auto___28261 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28261)){
var effect_fn_28262 = temp__5733__auto___28261;
effect_fn_28262.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__28263 = seq__28223;
var G__28264 = chunk__28224;
var G__28265 = count__28225;
var G__28266 = (i__28226 + (1));
seq__28223 = G__28263;
chunk__28224 = G__28264;
count__28225 = G__28265;
i__28226 = G__28266;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28223);
if(temp__5735__auto__){
var seq__28223__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28223__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28223__$1);
var G__28267 = cljs.core.chunk_rest.call(null,seq__28223__$1);
var G__28268 = c__4556__auto__;
var G__28269 = cljs.core.count.call(null,c__4556__auto__);
var G__28270 = (0);
seq__28223 = G__28267;
chunk__28224 = G__28268;
count__28225 = G__28269;
i__28226 = G__28270;
continue;
} else {
var vec__28236 = cljs.core.first.call(null,seq__28223__$1);
var effect_key = cljs.core.nth.call(null,vec__28236,(0),null);
var effect_value = cljs.core.nth.call(null,vec__28236,(1),null);
var temp__5733__auto___28271 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28271)){
var effect_fn_28272 = temp__5733__auto___28271;
effect_fn_28272.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__28273 = cljs.core.next.call(null,seq__28223__$1);
var G__28274 = null;
var G__28275 = (0);
var G__28276 = (0);
seq__28223 = G__28273;
chunk__28224 = G__28274;
count__28225 = G__28275;
i__28226 = G__28276;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__28277){
var map__28278 = p__28277;
var map__28278__$1 = (((((!((map__28278 == null))))?(((((map__28278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28278):map__28278);
var effect = map__28278__$1;
var ms = cljs.core.get.call(null,map__28278__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__28278__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
return re_frame.interop.set_timeout_BANG_.call(null,(function (){
return re_frame.router.dispatch.call(null,dispatch);
}),ms);
}
});
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_.call(null,value)){
return re_frame.fx.dispatch_later.call(null,value);
} else {
var seq__28280 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__28281 = null;
var count__28282 = (0);
var i__28283 = (0);
while(true){
if((i__28283 < count__28282)){
var effect = cljs.core._nth.call(null,chunk__28281,i__28283);
re_frame.fx.dispatch_later.call(null,effect);


var G__28284 = seq__28280;
var G__28285 = chunk__28281;
var G__28286 = count__28282;
var G__28287 = (i__28283 + (1));
seq__28280 = G__28284;
chunk__28281 = G__28285;
count__28282 = G__28286;
i__28283 = G__28287;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28280);
if(temp__5735__auto__){
var seq__28280__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28280__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28280__$1);
var G__28288 = cljs.core.chunk_rest.call(null,seq__28280__$1);
var G__28289 = c__4556__auto__;
var G__28290 = cljs.core.count.call(null,c__4556__auto__);
var G__28291 = (0);
seq__28280 = G__28288;
chunk__28281 = G__28289;
count__28282 = G__28290;
i__28283 = G__28291;
continue;
} else {
var effect = cljs.core.first.call(null,seq__28280__$1);
re_frame.fx.dispatch_later.call(null,effect);


var G__28292 = cljs.core.next.call(null,seq__28280__$1);
var G__28293 = null;
var G__28294 = (0);
var G__28295 = (0);
seq__28280 = G__28292;
chunk__28281 = G__28293;
count__28282 = G__28294;
i__28283 = G__28295;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_.call(null,seq_of_effects)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type.call(null,seq_of_effects));
} else {
var seq__28296 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,seq_of_effects));
var chunk__28297 = null;
var count__28298 = (0);
var i__28299 = (0);
while(true){
if((i__28299 < count__28298)){
var vec__28306 = cljs.core._nth.call(null,chunk__28297,i__28299);
var effect_key = cljs.core.nth.call(null,vec__28306,(0),null);
var effect_value = cljs.core.nth.call(null,vec__28306,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5733__auto___28312 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28312)){
var effect_fn_28313 = temp__5733__auto___28312;
effect_fn_28313.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__28314 = seq__28296;
var G__28315 = chunk__28297;
var G__28316 = count__28298;
var G__28317 = (i__28299 + (1));
seq__28296 = G__28314;
chunk__28297 = G__28315;
count__28298 = G__28316;
i__28299 = G__28317;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28296);
if(temp__5735__auto__){
var seq__28296__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28296__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28296__$1);
var G__28318 = cljs.core.chunk_rest.call(null,seq__28296__$1);
var G__28319 = c__4556__auto__;
var G__28320 = cljs.core.count.call(null,c__4556__auto__);
var G__28321 = (0);
seq__28296 = G__28318;
chunk__28297 = G__28319;
count__28298 = G__28320;
i__28299 = G__28321;
continue;
} else {
var vec__28309 = cljs.core.first.call(null,seq__28296__$1);
var effect_key = cljs.core.nth.call(null,vec__28309,(0),null);
var effect_value = cljs.core.nth.call(null,vec__28309,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5733__auto___28322 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28322)){
var effect_fn_28323 = temp__5733__auto___28322;
effect_fn_28323.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__28324 = cljs.core.next.call(null,seq__28296__$1);
var G__28325 = null;
var G__28326 = (0);
var G__28327 = (0);
seq__28296 = G__28324;
chunk__28297 = G__28325;
count__28298 = G__28326;
i__28299 = G__28327;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__28328 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__28329 = null;
var count__28330 = (0);
var i__28331 = (0);
while(true){
if((i__28331 < count__28330)){
var event = cljs.core._nth.call(null,chunk__28329,i__28331);
re_frame.router.dispatch.call(null,event);


var G__28332 = seq__28328;
var G__28333 = chunk__28329;
var G__28334 = count__28330;
var G__28335 = (i__28331 + (1));
seq__28328 = G__28332;
chunk__28329 = G__28333;
count__28330 = G__28334;
i__28331 = G__28335;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28328);
if(temp__5735__auto__){
var seq__28328__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28328__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28328__$1);
var G__28336 = cljs.core.chunk_rest.call(null,seq__28328__$1);
var G__28337 = c__4556__auto__;
var G__28338 = cljs.core.count.call(null,c__4556__auto__);
var G__28339 = (0);
seq__28328 = G__28336;
chunk__28329 = G__28337;
count__28330 = G__28338;
i__28331 = G__28339;
continue;
} else {
var event = cljs.core.first.call(null,seq__28328__$1);
re_frame.router.dispatch.call(null,event);


var G__28340 = cljs.core.next.call(null,seq__28328__$1);
var G__28341 = null;
var G__28342 = (0);
var G__28343 = (0);
seq__28328 = G__28340;
chunk__28329 = G__28341;
count__28330 = G__28342;
i__28331 = G__28343;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__28344 = cljs.core.seq.call(null,value);
var chunk__28345 = null;
var count__28346 = (0);
var i__28347 = (0);
while(true){
if((i__28347 < count__28346)){
var event = cljs.core._nth.call(null,chunk__28345,i__28347);
clear_event.call(null,event);


var G__28348 = seq__28344;
var G__28349 = chunk__28345;
var G__28350 = count__28346;
var G__28351 = (i__28347 + (1));
seq__28344 = G__28348;
chunk__28345 = G__28349;
count__28346 = G__28350;
i__28347 = G__28351;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28344);
if(temp__5735__auto__){
var seq__28344__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28344__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28344__$1);
var G__28352 = cljs.core.chunk_rest.call(null,seq__28344__$1);
var G__28353 = c__4556__auto__;
var G__28354 = cljs.core.count.call(null,c__4556__auto__);
var G__28355 = (0);
seq__28344 = G__28352;
chunk__28345 = G__28353;
count__28346 = G__28354;
i__28347 = G__28355;
continue;
} else {
var event = cljs.core.first.call(null,seq__28344__$1);
clear_event.call(null,event);


var G__28356 = cljs.core.next.call(null,seq__28344__$1);
var G__28357 = null;
var G__28358 = (0);
var G__28359 = (0);
seq__28344 = G__28356;
chunk__28345 = G__28357;
count__28346 = G__28358;
i__28347 = G__28359;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1602507661938
