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
var _STAR_current_trace_STAR__orig_val__31801 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__31802 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__31802);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___31835 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___31835)){
var new_db_31836 = temp__5735__auto___31835;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_31836);
} else {
}

var seq__31803 = cljs.core.seq.call(null,effects_without_db);
var chunk__31804 = null;
var count__31805 = (0);
var i__31806 = (0);
while(true){
if((i__31806 < count__31805)){
var vec__31813 = cljs.core._nth.call(null,chunk__31804,i__31806);
var effect_key = cljs.core.nth.call(null,vec__31813,(0),null);
var effect_value = cljs.core.nth.call(null,vec__31813,(1),null);
var temp__5733__auto___31837 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___31837)){
var effect_fn_31838 = temp__5733__auto___31837;
effect_fn_31838.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__31839 = seq__31803;
var G__31840 = chunk__31804;
var G__31841 = count__31805;
var G__31842 = (i__31806 + (1));
seq__31803 = G__31839;
chunk__31804 = G__31840;
count__31805 = G__31841;
i__31806 = G__31842;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31803);
if(temp__5735__auto__){
var seq__31803__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31803__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31803__$1);
var G__31843 = cljs.core.chunk_rest.call(null,seq__31803__$1);
var G__31844 = c__4556__auto__;
var G__31845 = cljs.core.count.call(null,c__4556__auto__);
var G__31846 = (0);
seq__31803 = G__31843;
chunk__31804 = G__31844;
count__31805 = G__31845;
i__31806 = G__31846;
continue;
} else {
var vec__31816 = cljs.core.first.call(null,seq__31803__$1);
var effect_key = cljs.core.nth.call(null,vec__31816,(0),null);
var effect_value = cljs.core.nth.call(null,vec__31816,(1),null);
var temp__5733__auto___31847 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___31847)){
var effect_fn_31848 = temp__5733__auto___31847;
effect_fn_31848.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__31849 = cljs.core.next.call(null,seq__31803__$1);
var G__31850 = null;
var G__31851 = (0);
var G__31852 = (0);
seq__31803 = G__31849;
chunk__31804 = G__31850;
count__31805 = G__31851;
i__31806 = G__31852;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__31596__auto___31853 = re_frame.interop.now.call(null);
var duration__31597__auto___31854 = (end__31596__auto___31853 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__31597__auto___31854,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__31596__auto___31853);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__31801);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___31855 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___31855)){
var new_db_31856 = temp__5735__auto___31855;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_31856);
} else {
}

var seq__31819 = cljs.core.seq.call(null,effects_without_db);
var chunk__31820 = null;
var count__31821 = (0);
var i__31822 = (0);
while(true){
if((i__31822 < count__31821)){
var vec__31829 = cljs.core._nth.call(null,chunk__31820,i__31822);
var effect_key = cljs.core.nth.call(null,vec__31829,(0),null);
var effect_value = cljs.core.nth.call(null,vec__31829,(1),null);
var temp__5733__auto___31857 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___31857)){
var effect_fn_31858 = temp__5733__auto___31857;
effect_fn_31858.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__31859 = seq__31819;
var G__31860 = chunk__31820;
var G__31861 = count__31821;
var G__31862 = (i__31822 + (1));
seq__31819 = G__31859;
chunk__31820 = G__31860;
count__31821 = G__31861;
i__31822 = G__31862;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31819);
if(temp__5735__auto__){
var seq__31819__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31819__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31819__$1);
var G__31863 = cljs.core.chunk_rest.call(null,seq__31819__$1);
var G__31864 = c__4556__auto__;
var G__31865 = cljs.core.count.call(null,c__4556__auto__);
var G__31866 = (0);
seq__31819 = G__31863;
chunk__31820 = G__31864;
count__31821 = G__31865;
i__31822 = G__31866;
continue;
} else {
var vec__31832 = cljs.core.first.call(null,seq__31819__$1);
var effect_key = cljs.core.nth.call(null,vec__31832,(0),null);
var effect_value = cljs.core.nth.call(null,vec__31832,(1),null);
var temp__5733__auto___31867 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___31867)){
var effect_fn_31868 = temp__5733__auto___31867;
effect_fn_31868.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__31869 = cljs.core.next.call(null,seq__31819__$1);
var G__31870 = null;
var G__31871 = (0);
var G__31872 = (0);
seq__31819 = G__31869;
chunk__31820 = G__31870;
count__31821 = G__31871;
i__31822 = G__31872;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__31873){
var map__31874 = p__31873;
var map__31874__$1 = (((((!((map__31874 == null))))?(((((map__31874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31874):map__31874);
var effect = map__31874__$1;
var ms = cljs.core.get.call(null,map__31874__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__31874__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__31876 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__31877 = null;
var count__31878 = (0);
var i__31879 = (0);
while(true){
if((i__31879 < count__31878)){
var effect = cljs.core._nth.call(null,chunk__31877,i__31879);
re_frame.fx.dispatch_later.call(null,effect);


var G__31880 = seq__31876;
var G__31881 = chunk__31877;
var G__31882 = count__31878;
var G__31883 = (i__31879 + (1));
seq__31876 = G__31880;
chunk__31877 = G__31881;
count__31878 = G__31882;
i__31879 = G__31883;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31876);
if(temp__5735__auto__){
var seq__31876__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31876__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31876__$1);
var G__31884 = cljs.core.chunk_rest.call(null,seq__31876__$1);
var G__31885 = c__4556__auto__;
var G__31886 = cljs.core.count.call(null,c__4556__auto__);
var G__31887 = (0);
seq__31876 = G__31884;
chunk__31877 = G__31885;
count__31878 = G__31886;
i__31879 = G__31887;
continue;
} else {
var effect = cljs.core.first.call(null,seq__31876__$1);
re_frame.fx.dispatch_later.call(null,effect);


var G__31888 = cljs.core.next.call(null,seq__31876__$1);
var G__31889 = null;
var G__31890 = (0);
var G__31891 = (0);
seq__31876 = G__31888;
chunk__31877 = G__31889;
count__31878 = G__31890;
i__31879 = G__31891;
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
var seq__31892 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,seq_of_effects));
var chunk__31893 = null;
var count__31894 = (0);
var i__31895 = (0);
while(true){
if((i__31895 < count__31894)){
var vec__31902 = cljs.core._nth.call(null,chunk__31893,i__31895);
var effect_key = cljs.core.nth.call(null,vec__31902,(0),null);
var effect_value = cljs.core.nth.call(null,vec__31902,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5733__auto___31908 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___31908)){
var effect_fn_31909 = temp__5733__auto___31908;
effect_fn_31909.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__31910 = seq__31892;
var G__31911 = chunk__31893;
var G__31912 = count__31894;
var G__31913 = (i__31895 + (1));
seq__31892 = G__31910;
chunk__31893 = G__31911;
count__31894 = G__31912;
i__31895 = G__31913;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31892);
if(temp__5735__auto__){
var seq__31892__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31892__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31892__$1);
var G__31914 = cljs.core.chunk_rest.call(null,seq__31892__$1);
var G__31915 = c__4556__auto__;
var G__31916 = cljs.core.count.call(null,c__4556__auto__);
var G__31917 = (0);
seq__31892 = G__31914;
chunk__31893 = G__31915;
count__31894 = G__31916;
i__31895 = G__31917;
continue;
} else {
var vec__31905 = cljs.core.first.call(null,seq__31892__$1);
var effect_key = cljs.core.nth.call(null,vec__31905,(0),null);
var effect_value = cljs.core.nth.call(null,vec__31905,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5733__auto___31918 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___31918)){
var effect_fn_31919 = temp__5733__auto___31918;
effect_fn_31919.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__31920 = cljs.core.next.call(null,seq__31892__$1);
var G__31921 = null;
var G__31922 = (0);
var G__31923 = (0);
seq__31892 = G__31920;
chunk__31893 = G__31921;
count__31894 = G__31922;
i__31895 = G__31923;
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
var seq__31924 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__31925 = null;
var count__31926 = (0);
var i__31927 = (0);
while(true){
if((i__31927 < count__31926)){
var event = cljs.core._nth.call(null,chunk__31925,i__31927);
re_frame.router.dispatch.call(null,event);


var G__31928 = seq__31924;
var G__31929 = chunk__31925;
var G__31930 = count__31926;
var G__31931 = (i__31927 + (1));
seq__31924 = G__31928;
chunk__31925 = G__31929;
count__31926 = G__31930;
i__31927 = G__31931;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31924);
if(temp__5735__auto__){
var seq__31924__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31924__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31924__$1);
var G__31932 = cljs.core.chunk_rest.call(null,seq__31924__$1);
var G__31933 = c__4556__auto__;
var G__31934 = cljs.core.count.call(null,c__4556__auto__);
var G__31935 = (0);
seq__31924 = G__31932;
chunk__31925 = G__31933;
count__31926 = G__31934;
i__31927 = G__31935;
continue;
} else {
var event = cljs.core.first.call(null,seq__31924__$1);
re_frame.router.dispatch.call(null,event);


var G__31936 = cljs.core.next.call(null,seq__31924__$1);
var G__31937 = null;
var G__31938 = (0);
var G__31939 = (0);
seq__31924 = G__31936;
chunk__31925 = G__31937;
count__31926 = G__31938;
i__31927 = G__31939;
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
var seq__31940 = cljs.core.seq.call(null,value);
var chunk__31941 = null;
var count__31942 = (0);
var i__31943 = (0);
while(true){
if((i__31943 < count__31942)){
var event = cljs.core._nth.call(null,chunk__31941,i__31943);
clear_event.call(null,event);


var G__31944 = seq__31940;
var G__31945 = chunk__31941;
var G__31946 = count__31942;
var G__31947 = (i__31943 + (1));
seq__31940 = G__31944;
chunk__31941 = G__31945;
count__31942 = G__31946;
i__31943 = G__31947;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31940);
if(temp__5735__auto__){
var seq__31940__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31940__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31940__$1);
var G__31948 = cljs.core.chunk_rest.call(null,seq__31940__$1);
var G__31949 = c__4556__auto__;
var G__31950 = cljs.core.count.call(null,c__4556__auto__);
var G__31951 = (0);
seq__31940 = G__31948;
chunk__31941 = G__31949;
count__31942 = G__31950;
i__31943 = G__31951;
continue;
} else {
var event = cljs.core.first.call(null,seq__31940__$1);
clear_event.call(null,event);


var G__31952 = cljs.core.next.call(null,seq__31940__$1);
var G__31953 = null;
var G__31954 = (0);
var G__31955 = (0);
seq__31940 = G__31952;
chunk__31941 = G__31953;
count__31942 = G__31954;
i__31943 = G__31955;
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

//# sourceMappingURL=fx.js.map?rel=1602418810201
