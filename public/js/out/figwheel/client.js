// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e33271){if((e33271 instanceof Error)){
var e = e33271;
return "Error: Unable to stringify";
} else {
throw e33271;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__33274 = arguments.length;
switch (G__33274) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__33272_SHARP_){
if(typeof p1__33272_SHARP_ === 'string'){
return p1__33272_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__33272_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33277 = arguments.length;
var i__4737__auto___33278 = (0);
while(true){
if((i__4737__auto___33278 < len__4736__auto___33277)){
args__4742__auto__.push((arguments[i__4737__auto___33278]));

var G__33279 = (i__4737__auto___33278 + (1));
i__4737__auto___33278 = G__33279;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq33276){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33276));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33281 = arguments.length;
var i__4737__auto___33282 = (0);
while(true){
if((i__4737__auto___33282 < len__4736__auto___33281)){
args__4742__auto__.push((arguments[i__4737__auto___33282]));

var G__33283 = (i__4737__auto___33282 + (1));
i__4737__auto___33282 = G__33283;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq33280){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33280));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__33284){
var map__33285 = p__33284;
var map__33285__$1 = (((((!((map__33285 == null))))?(((((map__33285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33285):map__33285);
var message = cljs.core.get.call(null,map__33285__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__33285__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4126__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27789__auto___33364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27790__auto__ = (function (){var switch__27694__auto__ = (function (state_33336){
var state_val_33337 = (state_33336[(1)]);
if((state_val_33337 === (7))){
var inst_33332 = (state_33336[(2)]);
var state_33336__$1 = state_33336;
var statearr_33338_33365 = state_33336__$1;
(statearr_33338_33365[(2)] = inst_33332);

(statearr_33338_33365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33337 === (1))){
var state_33336__$1 = state_33336;
var statearr_33339_33366 = state_33336__$1;
(statearr_33339_33366[(2)] = null);

(statearr_33339_33366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33337 === (4))){
var inst_33289 = (state_33336[(7)]);
var inst_33289__$1 = (state_33336[(2)]);
var state_33336__$1 = (function (){var statearr_33340 = state_33336;
(statearr_33340[(7)] = inst_33289__$1);

return statearr_33340;
})();
if(cljs.core.truth_(inst_33289__$1)){
var statearr_33341_33367 = state_33336__$1;
(statearr_33341_33367[(1)] = (5));

} else {
var statearr_33342_33368 = state_33336__$1;
(statearr_33342_33368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33337 === (15))){
var inst_33296 = (state_33336[(8)]);
var inst_33311 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33296);
var inst_33312 = cljs.core.first.call(null,inst_33311);
var inst_33313 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_33312);
var inst_33314 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33313)].join('');
var inst_33315 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_33314);
var state_33336__$1 = state_33336;
var statearr_33343_33369 = state_33336__$1;
(statearr_33343_33369[(2)] = inst_33315);

(statearr_33343_33369[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33337 === (13))){
var inst_33320 = (state_33336[(2)]);
var state_33336__$1 = state_33336;
var statearr_33344_33370 = state_33336__$1;
(statearr_33344_33370[(2)] = inst_33320);

(statearr_33344_33370[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33337 === (6))){
var state_33336__$1 = state_33336;
var statearr_33345_33371 = state_33336__$1;
(statearr_33345_33371[(2)] = null);

(statearr_33345_33371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33337 === (17))){
var inst_33318 = (state_33336[(2)]);
var state_33336__$1 = state_33336;
var statearr_33346_33372 = state_33336__$1;
(statearr_33346_33372[(2)] = inst_33318);

(statearr_33346_33372[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33337 === (3))){
var inst_33334 = (state_33336[(2)]);
var state_33336__$1 = state_33336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33336__$1,inst_33334);
} else {
if((state_val_33337 === (12))){
var inst_33295 = (state_33336[(9)]);
var inst_33309 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_33295,opts);
var state_33336__$1 = state_33336;
if(inst_33309){
var statearr_33347_33373 = state_33336__$1;
(statearr_33347_33373[(1)] = (15));

} else {
var statearr_33348_33374 = state_33336__$1;
(statearr_33348_33374[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33337 === (2))){
var state_33336__$1 = state_33336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33336__$1,(4),ch);
} else {
if((state_val_33337 === (11))){
var inst_33296 = (state_33336[(8)]);
var inst_33301 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33302 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_33296);
var inst_33303 = cljs.core.async.timeout.call(null,(1000));
var inst_33304 = [inst_33302,inst_33303];
var inst_33305 = (new cljs.core.PersistentVector(null,2,(5),inst_33301,inst_33304,null));
var state_33336__$1 = state_33336;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33336__$1,(14),inst_33305);
} else {
if((state_val_33337 === (9))){
var inst_33296 = (state_33336[(8)]);
var inst_33322 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_33323 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33296);
var inst_33324 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33323);
var inst_33325 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33324)].join('');
var inst_33326 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_33325);
var state_33336__$1 = (function (){var statearr_33349 = state_33336;
(statearr_33349[(10)] = inst_33322);

return statearr_33349;
})();
var statearr_33350_33375 = state_33336__$1;
(statearr_33350_33375[(2)] = inst_33326);

(statearr_33350_33375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33337 === (5))){
var inst_33289 = (state_33336[(7)]);
var inst_33291 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_33292 = (new cljs.core.PersistentArrayMap(null,2,inst_33291,null));
var inst_33293 = (new cljs.core.PersistentHashSet(null,inst_33292,null));
var inst_33294 = figwheel.client.focus_msgs.call(null,inst_33293,inst_33289);
var inst_33295 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_33294);
var inst_33296 = cljs.core.first.call(null,inst_33294);
var inst_33297 = figwheel.client.autoload_QMARK_.call(null);
var state_33336__$1 = (function (){var statearr_33351 = state_33336;
(statearr_33351[(9)] = inst_33295);

(statearr_33351[(8)] = inst_33296);

return statearr_33351;
})();
if(cljs.core.truth_(inst_33297)){
var statearr_33352_33376 = state_33336__$1;
(statearr_33352_33376[(1)] = (8));

} else {
var statearr_33353_33377 = state_33336__$1;
(statearr_33353_33377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33337 === (14))){
var inst_33307 = (state_33336[(2)]);
var state_33336__$1 = state_33336;
var statearr_33354_33378 = state_33336__$1;
(statearr_33354_33378[(2)] = inst_33307);

(statearr_33354_33378[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33337 === (16))){
var state_33336__$1 = state_33336;
var statearr_33355_33379 = state_33336__$1;
(statearr_33355_33379[(2)] = null);

(statearr_33355_33379[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33337 === (10))){
var inst_33328 = (state_33336[(2)]);
var state_33336__$1 = (function (){var statearr_33356 = state_33336;
(statearr_33356[(11)] = inst_33328);

return statearr_33356;
})();
var statearr_33357_33380 = state_33336__$1;
(statearr_33357_33380[(2)] = null);

(statearr_33357_33380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33337 === (8))){
var inst_33295 = (state_33336[(9)]);
var inst_33299 = figwheel.client.reload_file_state_QMARK_.call(null,inst_33295,opts);
var state_33336__$1 = state_33336;
if(cljs.core.truth_(inst_33299)){
var statearr_33358_33381 = state_33336__$1;
(statearr_33358_33381[(1)] = (11));

} else {
var statearr_33359_33382 = state_33336__$1;
(statearr_33359_33382[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27695__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27695__auto____0 = (function (){
var statearr_33360 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33360[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27695__auto__);

(statearr_33360[(1)] = (1));

return statearr_33360;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27695__auto____1 = (function (state_33336){
while(true){
var ret_value__27696__auto__ = (function (){try{while(true){
var result__27697__auto__ = switch__27694__auto__.call(null,state_33336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27697__auto__;
}
break;
}
}catch (e33361){if((e33361 instanceof Object)){
var ex__27698__auto__ = e33361;
var statearr_33362_33383 = state_33336;
(statearr_33362_33383[(5)] = ex__27698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33384 = state_33336;
state_33336 = G__33384;
continue;
} else {
return ret_value__27696__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27695__auto__ = function(state_33336){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27695__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27695__auto____1.call(this,state_33336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27695__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27695__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27695__auto__;
})()
})();
var state__27791__auto__ = (function (){var statearr_33363 = f__27790__auto__.call(null);
(statearr_33363[(6)] = c__27789__auto___33364);

return statearr_33363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27791__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33385_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33385_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_33391 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33387 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33388 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33389 = true;
var _STAR_print_fn_STAR__temp_val__33390 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33389);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33390);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33388);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33387);
}}catch (e33386){if((e33386 instanceof Error)){
var e = e33386;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33391], null));
} else {
var e = e33386;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__33392){
var map__33393 = p__33392;
var map__33393__$1 = (((((!((map__33393 == null))))?(((((map__33393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33393):map__33393);
var opts = map__33393__$1;
var build_id = cljs.core.get.call(null,map__33393__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__33395){
var vec__33396 = p__33395;
var seq__33397 = cljs.core.seq.call(null,vec__33396);
var first__33398 = cljs.core.first.call(null,seq__33397);
var seq__33397__$1 = cljs.core.next.call(null,seq__33397);
var map__33399 = first__33398;
var map__33399__$1 = (((((!((map__33399 == null))))?(((((map__33399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33399):map__33399);
var msg = map__33399__$1;
var msg_name = cljs.core.get.call(null,map__33399__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33397__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__33401){
var vec__33402 = p__33401;
var seq__33403 = cljs.core.seq.call(null,vec__33402);
var first__33404 = cljs.core.first.call(null,seq__33403);
var seq__33403__$1 = cljs.core.next.call(null,seq__33403);
var map__33405 = first__33404;
var map__33405__$1 = (((((!((map__33405 == null))))?(((((map__33405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33405):map__33405);
var msg = map__33405__$1;
var msg_name = cljs.core.get.call(null,map__33405__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33403__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__33407){
var map__33408 = p__33407;
var map__33408__$1 = (((((!((map__33408 == null))))?(((((map__33408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33408):map__33408);
var on_compile_warning = cljs.core.get.call(null,map__33408__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__33408__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__33410){
var vec__33411 = p__33410;
var seq__33412 = cljs.core.seq.call(null,vec__33411);
var first__33413 = cljs.core.first.call(null,seq__33412);
var seq__33412__$1 = cljs.core.next.call(null,seq__33412);
var map__33414 = first__33413;
var map__33414__$1 = (((((!((map__33414 == null))))?(((((map__33414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33414):map__33414);
var msg = map__33414__$1;
var msg_name = cljs.core.get.call(null,map__33414__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33412__$1;
var pred__33416 = cljs.core._EQ_;
var expr__33417 = msg_name;
if(cljs.core.truth_(pred__33416.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__33417))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__33416.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33417))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27790__auto__ = (function (){var switch__27694__auto__ = (function (state_33506){
var state_val_33507 = (state_33506[(1)]);
if((state_val_33507 === (7))){
var inst_33426 = (state_33506[(2)]);
var state_33506__$1 = state_33506;
if(cljs.core.truth_(inst_33426)){
var statearr_33508_33555 = state_33506__$1;
(statearr_33508_33555[(1)] = (8));

} else {
var statearr_33509_33556 = state_33506__$1;
(statearr_33509_33556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (20))){
var inst_33500 = (state_33506[(2)]);
var state_33506__$1 = state_33506;
var statearr_33510_33557 = state_33506__$1;
(statearr_33510_33557[(2)] = inst_33500);

(statearr_33510_33557[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (27))){
var inst_33496 = (state_33506[(2)]);
var state_33506__$1 = state_33506;
var statearr_33511_33558 = state_33506__$1;
(statearr_33511_33558[(2)] = inst_33496);

(statearr_33511_33558[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (1))){
var inst_33419 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33506__$1 = state_33506;
if(cljs.core.truth_(inst_33419)){
var statearr_33512_33559 = state_33506__$1;
(statearr_33512_33559[(1)] = (2));

} else {
var statearr_33513_33560 = state_33506__$1;
(statearr_33513_33560[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (24))){
var inst_33498 = (state_33506[(2)]);
var state_33506__$1 = state_33506;
var statearr_33514_33561 = state_33506__$1;
(statearr_33514_33561[(2)] = inst_33498);

(statearr_33514_33561[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (4))){
var inst_33504 = (state_33506[(2)]);
var state_33506__$1 = state_33506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33506__$1,inst_33504);
} else {
if((state_val_33507 === (15))){
var inst_33502 = (state_33506[(2)]);
var state_33506__$1 = state_33506;
var statearr_33515_33562 = state_33506__$1;
(statearr_33515_33562[(2)] = inst_33502);

(statearr_33515_33562[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (21))){
var inst_33455 = (state_33506[(2)]);
var inst_33456 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33457 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33456);
var state_33506__$1 = (function (){var statearr_33516 = state_33506;
(statearr_33516[(7)] = inst_33455);

return statearr_33516;
})();
var statearr_33517_33563 = state_33506__$1;
(statearr_33517_33563[(2)] = inst_33457);

(statearr_33517_33563[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (31))){
var inst_33485 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33506__$1 = state_33506;
if(inst_33485){
var statearr_33518_33564 = state_33506__$1;
(statearr_33518_33564[(1)] = (34));

} else {
var statearr_33519_33565 = state_33506__$1;
(statearr_33519_33565[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (32))){
var inst_33494 = (state_33506[(2)]);
var state_33506__$1 = state_33506;
var statearr_33520_33566 = state_33506__$1;
(statearr_33520_33566[(2)] = inst_33494);

(statearr_33520_33566[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (33))){
var inst_33481 = (state_33506[(2)]);
var inst_33482 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33483 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33482);
var state_33506__$1 = (function (){var statearr_33521 = state_33506;
(statearr_33521[(8)] = inst_33481);

return statearr_33521;
})();
var statearr_33522_33567 = state_33506__$1;
(statearr_33522_33567[(2)] = inst_33483);

(statearr_33522_33567[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (13))){
var inst_33440 = figwheel.client.heads_up.clear.call(null);
var state_33506__$1 = state_33506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33506__$1,(16),inst_33440);
} else {
if((state_val_33507 === (22))){
var inst_33461 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33462 = figwheel.client.heads_up.append_warning_message.call(null,inst_33461);
var state_33506__$1 = state_33506;
var statearr_33523_33568 = state_33506__$1;
(statearr_33523_33568[(2)] = inst_33462);

(statearr_33523_33568[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (36))){
var inst_33492 = (state_33506[(2)]);
var state_33506__$1 = state_33506;
var statearr_33524_33569 = state_33506__$1;
(statearr_33524_33569[(2)] = inst_33492);

(statearr_33524_33569[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (29))){
var inst_33472 = (state_33506[(2)]);
var inst_33473 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33474 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33473);
var state_33506__$1 = (function (){var statearr_33525 = state_33506;
(statearr_33525[(9)] = inst_33472);

return statearr_33525;
})();
var statearr_33526_33570 = state_33506__$1;
(statearr_33526_33570[(2)] = inst_33474);

(statearr_33526_33570[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (6))){
var inst_33421 = (state_33506[(10)]);
var state_33506__$1 = state_33506;
var statearr_33527_33571 = state_33506__$1;
(statearr_33527_33571[(2)] = inst_33421);

(statearr_33527_33571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (28))){
var inst_33468 = (state_33506[(2)]);
var inst_33469 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33470 = figwheel.client.heads_up.display_warning.call(null,inst_33469);
var state_33506__$1 = (function (){var statearr_33528 = state_33506;
(statearr_33528[(11)] = inst_33468);

return statearr_33528;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33506__$1,(29),inst_33470);
} else {
if((state_val_33507 === (25))){
var inst_33466 = figwheel.client.heads_up.clear.call(null);
var state_33506__$1 = state_33506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33506__$1,(28),inst_33466);
} else {
if((state_val_33507 === (34))){
var inst_33487 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33506__$1 = state_33506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33506__$1,(37),inst_33487);
} else {
if((state_val_33507 === (17))){
var inst_33446 = (state_33506[(2)]);
var inst_33447 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33448 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33447);
var state_33506__$1 = (function (){var statearr_33529 = state_33506;
(statearr_33529[(12)] = inst_33446);

return statearr_33529;
})();
var statearr_33530_33572 = state_33506__$1;
(statearr_33530_33572[(2)] = inst_33448);

(statearr_33530_33572[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (3))){
var inst_33438 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33506__$1 = state_33506;
if(inst_33438){
var statearr_33531_33573 = state_33506__$1;
(statearr_33531_33573[(1)] = (13));

} else {
var statearr_33532_33574 = state_33506__$1;
(statearr_33532_33574[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (12))){
var inst_33434 = (state_33506[(2)]);
var state_33506__$1 = state_33506;
var statearr_33533_33575 = state_33506__$1;
(statearr_33533_33575[(2)] = inst_33434);

(statearr_33533_33575[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (2))){
var inst_33421 = (state_33506[(10)]);
var inst_33421__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_33506__$1 = (function (){var statearr_33534 = state_33506;
(statearr_33534[(10)] = inst_33421__$1);

return statearr_33534;
})();
if(cljs.core.truth_(inst_33421__$1)){
var statearr_33535_33576 = state_33506__$1;
(statearr_33535_33576[(1)] = (5));

} else {
var statearr_33536_33577 = state_33506__$1;
(statearr_33536_33577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (23))){
var inst_33464 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33506__$1 = state_33506;
if(inst_33464){
var statearr_33537_33578 = state_33506__$1;
(statearr_33537_33578[(1)] = (25));

} else {
var statearr_33538_33579 = state_33506__$1;
(statearr_33538_33579[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (35))){
var state_33506__$1 = state_33506;
var statearr_33539_33580 = state_33506__$1;
(statearr_33539_33580[(2)] = null);

(statearr_33539_33580[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (19))){
var inst_33459 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33506__$1 = state_33506;
if(inst_33459){
var statearr_33540_33581 = state_33506__$1;
(statearr_33540_33581[(1)] = (22));

} else {
var statearr_33541_33582 = state_33506__$1;
(statearr_33541_33582[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (11))){
var inst_33430 = (state_33506[(2)]);
var state_33506__$1 = state_33506;
var statearr_33542_33583 = state_33506__$1;
(statearr_33542_33583[(2)] = inst_33430);

(statearr_33542_33583[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (9))){
var inst_33432 = figwheel.client.heads_up.clear.call(null);
var state_33506__$1 = state_33506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33506__$1,(12),inst_33432);
} else {
if((state_val_33507 === (5))){
var inst_33423 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33506__$1 = state_33506;
var statearr_33543_33584 = state_33506__$1;
(statearr_33543_33584[(2)] = inst_33423);

(statearr_33543_33584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (14))){
var inst_33450 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33506__$1 = state_33506;
if(inst_33450){
var statearr_33544_33585 = state_33506__$1;
(statearr_33544_33585[(1)] = (18));

} else {
var statearr_33545_33586 = state_33506__$1;
(statearr_33545_33586[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (26))){
var inst_33476 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33506__$1 = state_33506;
if(inst_33476){
var statearr_33546_33587 = state_33506__$1;
(statearr_33546_33587[(1)] = (30));

} else {
var statearr_33547_33588 = state_33506__$1;
(statearr_33547_33588[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (16))){
var inst_33442 = (state_33506[(2)]);
var inst_33443 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33444 = figwheel.client.heads_up.display_exception.call(null,inst_33443);
var state_33506__$1 = (function (){var statearr_33548 = state_33506;
(statearr_33548[(13)] = inst_33442);

return statearr_33548;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33506__$1,(17),inst_33444);
} else {
if((state_val_33507 === (30))){
var inst_33478 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33479 = figwheel.client.heads_up.display_warning.call(null,inst_33478);
var state_33506__$1 = state_33506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33506__$1,(33),inst_33479);
} else {
if((state_val_33507 === (10))){
var inst_33436 = (state_33506[(2)]);
var state_33506__$1 = state_33506;
var statearr_33549_33589 = state_33506__$1;
(statearr_33549_33589[(2)] = inst_33436);

(statearr_33549_33589[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (18))){
var inst_33452 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33453 = figwheel.client.heads_up.display_exception.call(null,inst_33452);
var state_33506__$1 = state_33506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33506__$1,(21),inst_33453);
} else {
if((state_val_33507 === (37))){
var inst_33489 = (state_33506[(2)]);
var state_33506__$1 = state_33506;
var statearr_33550_33590 = state_33506__$1;
(statearr_33550_33590[(2)] = inst_33489);

(statearr_33550_33590[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (8))){
var inst_33428 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33506__$1 = state_33506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33506__$1,(11),inst_33428);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27695__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27695__auto____0 = (function (){
var statearr_33551 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33551[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27695__auto__);

(statearr_33551[(1)] = (1));

return statearr_33551;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27695__auto____1 = (function (state_33506){
while(true){
var ret_value__27696__auto__ = (function (){try{while(true){
var result__27697__auto__ = switch__27694__auto__.call(null,state_33506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27697__auto__;
}
break;
}
}catch (e33552){if((e33552 instanceof Object)){
var ex__27698__auto__ = e33552;
var statearr_33553_33591 = state_33506;
(statearr_33553_33591[(5)] = ex__27698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33592 = state_33506;
state_33506 = G__33592;
continue;
} else {
return ret_value__27696__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27695__auto__ = function(state_33506){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27695__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27695__auto____1.call(this,state_33506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27695__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27695__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27695__auto__;
})()
})();
var state__27791__auto__ = (function (){var statearr_33554 = f__27790__auto__.call(null);
(statearr_33554[(6)] = c__27789__auto__);

return statearr_33554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27791__auto__);
}));

return c__27789__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27789__auto___33621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27790__auto__ = (function (){var switch__27694__auto__ = (function (state_33607){
var state_val_33608 = (state_33607[(1)]);
if((state_val_33608 === (1))){
var state_33607__$1 = state_33607;
var statearr_33609_33622 = state_33607__$1;
(statearr_33609_33622[(2)] = null);

(statearr_33609_33622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33608 === (2))){
var state_33607__$1 = state_33607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33607__$1,(4),ch);
} else {
if((state_val_33608 === (3))){
var inst_33605 = (state_33607[(2)]);
var state_33607__$1 = state_33607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33607__$1,inst_33605);
} else {
if((state_val_33608 === (4))){
var inst_33595 = (state_33607[(7)]);
var inst_33595__$1 = (state_33607[(2)]);
var state_33607__$1 = (function (){var statearr_33610 = state_33607;
(statearr_33610[(7)] = inst_33595__$1);

return statearr_33610;
})();
if(cljs.core.truth_(inst_33595__$1)){
var statearr_33611_33623 = state_33607__$1;
(statearr_33611_33623[(1)] = (5));

} else {
var statearr_33612_33624 = state_33607__$1;
(statearr_33612_33624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33608 === (5))){
var inst_33595 = (state_33607[(7)]);
var inst_33597 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_33595);
var state_33607__$1 = state_33607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33607__$1,(8),inst_33597);
} else {
if((state_val_33608 === (6))){
var state_33607__$1 = state_33607;
var statearr_33613_33625 = state_33607__$1;
(statearr_33613_33625[(2)] = null);

(statearr_33613_33625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33608 === (7))){
var inst_33603 = (state_33607[(2)]);
var state_33607__$1 = state_33607;
var statearr_33614_33626 = state_33607__$1;
(statearr_33614_33626[(2)] = inst_33603);

(statearr_33614_33626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33608 === (8))){
var inst_33599 = (state_33607[(2)]);
var state_33607__$1 = (function (){var statearr_33615 = state_33607;
(statearr_33615[(8)] = inst_33599);

return statearr_33615;
})();
var statearr_33616_33627 = state_33607__$1;
(statearr_33616_33627[(2)] = null);

(statearr_33616_33627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27695__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27695__auto____0 = (function (){
var statearr_33617 = [null,null,null,null,null,null,null,null,null];
(statearr_33617[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27695__auto__);

(statearr_33617[(1)] = (1));

return statearr_33617;
});
var figwheel$client$heads_up_plugin_$_state_machine__27695__auto____1 = (function (state_33607){
while(true){
var ret_value__27696__auto__ = (function (){try{while(true){
var result__27697__auto__ = switch__27694__auto__.call(null,state_33607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27697__auto__;
}
break;
}
}catch (e33618){if((e33618 instanceof Object)){
var ex__27698__auto__ = e33618;
var statearr_33619_33628 = state_33607;
(statearr_33619_33628[(5)] = ex__27698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33629 = state_33607;
state_33607 = G__33629;
continue;
} else {
return ret_value__27696__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27695__auto__ = function(state_33607){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27695__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27695__auto____1.call(this,state_33607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27695__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27695__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27695__auto__;
})()
})();
var state__27791__auto__ = (function (){var statearr_33620 = f__27790__auto__.call(null);
(statearr_33620[(6)] = c__27789__auto___33621);

return statearr_33620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27791__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27790__auto__ = (function (){var switch__27694__auto__ = (function (state_33635){
var state_val_33636 = (state_33635[(1)]);
if((state_val_33636 === (1))){
var inst_33630 = cljs.core.async.timeout.call(null,(3000));
var state_33635__$1 = state_33635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33635__$1,(2),inst_33630);
} else {
if((state_val_33636 === (2))){
var inst_33632 = (state_33635[(2)]);
var inst_33633 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_33635__$1 = (function (){var statearr_33637 = state_33635;
(statearr_33637[(7)] = inst_33632);

return statearr_33637;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33635__$1,inst_33633);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27695__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27695__auto____0 = (function (){
var statearr_33638 = [null,null,null,null,null,null,null,null];
(statearr_33638[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27695__auto__);

(statearr_33638[(1)] = (1));

return statearr_33638;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27695__auto____1 = (function (state_33635){
while(true){
var ret_value__27696__auto__ = (function (){try{while(true){
var result__27697__auto__ = switch__27694__auto__.call(null,state_33635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27697__auto__;
}
break;
}
}catch (e33639){if((e33639 instanceof Object)){
var ex__27698__auto__ = e33639;
var statearr_33640_33642 = state_33635;
(statearr_33640_33642[(5)] = ex__27698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33643 = state_33635;
state_33635 = G__33643;
continue;
} else {
return ret_value__27696__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27695__auto__ = function(state_33635){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27695__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27695__auto____1.call(this,state_33635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27695__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27695__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27695__auto__;
})()
})();
var state__27791__auto__ = (function (){var statearr_33641 = f__27790__auto__.call(null);
(statearr_33641[(6)] = c__27789__auto__);

return statearr_33641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27791__auto__);
}));

return c__27789__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27790__auto__ = (function (){var switch__27694__auto__ = (function (state_33650){
var state_val_33651 = (state_33650[(1)]);
if((state_val_33651 === (1))){
var inst_33644 = cljs.core.async.timeout.call(null,(2000));
var state_33650__$1 = state_33650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33650__$1,(2),inst_33644);
} else {
if((state_val_33651 === (2))){
var inst_33646 = (state_33650[(2)]);
var inst_33647 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_33648 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_33647);
var state_33650__$1 = (function (){var statearr_33652 = state_33650;
(statearr_33652[(7)] = inst_33646);

return statearr_33652;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33650__$1,inst_33648);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27695__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27695__auto____0 = (function (){
var statearr_33653 = [null,null,null,null,null,null,null,null];
(statearr_33653[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27695__auto__);

(statearr_33653[(1)] = (1));

return statearr_33653;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27695__auto____1 = (function (state_33650){
while(true){
var ret_value__27696__auto__ = (function (){try{while(true){
var result__27697__auto__ = switch__27694__auto__.call(null,state_33650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27697__auto__;
}
break;
}
}catch (e33654){if((e33654 instanceof Object)){
var ex__27698__auto__ = e33654;
var statearr_33655_33657 = state_33650;
(statearr_33655_33657[(5)] = ex__27698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33658 = state_33650;
state_33650 = G__33658;
continue;
} else {
return ret_value__27696__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27695__auto__ = function(state_33650){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27695__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27695__auto____1.call(this,state_33650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27695__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27695__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27695__auto__;
})()
})();
var state__27791__auto__ = (function (){var statearr_33656 = f__27790__auto__.call(null);
(statearr_33656[(6)] = c__27789__auto__);

return statearr_33656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27791__auto__);
}));

return c__27789__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__33659){
var map__33660 = p__33659;
var map__33660__$1 = (((((!((map__33660 == null))))?(((((map__33660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33660):map__33660);
var file = cljs.core.get.call(null,map__33660__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__33660__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__33660__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__33662 = "";
var G__33662__$1 = (cljs.core.truth_(file)?[G__33662,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__33662);
var G__33662__$2 = (cljs.core.truth_(line)?[G__33662__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__33662__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__33662__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__33662__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__33663){
var map__33664 = p__33663;
var map__33664__$1 = (((((!((map__33664 == null))))?(((((map__33664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33664):map__33664);
var ed = map__33664__$1;
var exception_data = cljs.core.get.call(null,map__33664__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__33664__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_33667 = (function (){var G__33666 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33666)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__33666;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_33667);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__33668){
var map__33669 = p__33668;
var map__33669__$1 = (((((!((map__33669 == null))))?(((((map__33669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33669):map__33669);
var w = map__33669__$1;
var message = cljs.core.get.call(null,map__33669__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public/js/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4115__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__33671 = cljs.core.seq.call(null,plugins);
var chunk__33672 = null;
var count__33673 = (0);
var i__33674 = (0);
while(true){
if((i__33674 < count__33673)){
var vec__33681 = cljs.core._nth.call(null,chunk__33672,i__33674);
var k = cljs.core.nth.call(null,vec__33681,(0),null);
var plugin = cljs.core.nth.call(null,vec__33681,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33687 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33671,chunk__33672,count__33673,i__33674,pl_33687,vec__33681,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_33687.call(null,msg_hist);
});})(seq__33671,chunk__33672,count__33673,i__33674,pl_33687,vec__33681,k,plugin))
);
} else {
}


var G__33688 = seq__33671;
var G__33689 = chunk__33672;
var G__33690 = count__33673;
var G__33691 = (i__33674 + (1));
seq__33671 = G__33688;
chunk__33672 = G__33689;
count__33673 = G__33690;
i__33674 = G__33691;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__33671);
if(temp__5735__auto__){
var seq__33671__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33671__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__33671__$1);
var G__33692 = cljs.core.chunk_rest.call(null,seq__33671__$1);
var G__33693 = c__4556__auto__;
var G__33694 = cljs.core.count.call(null,c__4556__auto__);
var G__33695 = (0);
seq__33671 = G__33692;
chunk__33672 = G__33693;
count__33673 = G__33694;
i__33674 = G__33695;
continue;
} else {
var vec__33684 = cljs.core.first.call(null,seq__33671__$1);
var k = cljs.core.nth.call(null,vec__33684,(0),null);
var plugin = cljs.core.nth.call(null,vec__33684,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33696 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33671,chunk__33672,count__33673,i__33674,pl_33696,vec__33684,k,plugin,seq__33671__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_33696.call(null,msg_hist);
});})(seq__33671,chunk__33672,count__33673,i__33674,pl_33696,vec__33684,k,plugin,seq__33671__$1,temp__5735__auto__))
);
} else {
}


var G__33697 = cljs.core.next.call(null,seq__33671__$1);
var G__33698 = null;
var G__33699 = (0);
var G__33700 = (0);
seq__33671 = G__33697;
chunk__33672 = G__33698;
count__33673 = G__33699;
i__33674 = G__33700;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__33702 = arguments.length;
switch (G__33702) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__33703_33708 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__33704_33709 = null;
var count__33705_33710 = (0);
var i__33706_33711 = (0);
while(true){
if((i__33706_33711 < count__33705_33710)){
var msg_33712 = cljs.core._nth.call(null,chunk__33704_33709,i__33706_33711);
figwheel.client.socket.handle_incoming_message.call(null,msg_33712);


var G__33713 = seq__33703_33708;
var G__33714 = chunk__33704_33709;
var G__33715 = count__33705_33710;
var G__33716 = (i__33706_33711 + (1));
seq__33703_33708 = G__33713;
chunk__33704_33709 = G__33714;
count__33705_33710 = G__33715;
i__33706_33711 = G__33716;
continue;
} else {
var temp__5735__auto___33717 = cljs.core.seq.call(null,seq__33703_33708);
if(temp__5735__auto___33717){
var seq__33703_33718__$1 = temp__5735__auto___33717;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33703_33718__$1)){
var c__4556__auto___33719 = cljs.core.chunk_first.call(null,seq__33703_33718__$1);
var G__33720 = cljs.core.chunk_rest.call(null,seq__33703_33718__$1);
var G__33721 = c__4556__auto___33719;
var G__33722 = cljs.core.count.call(null,c__4556__auto___33719);
var G__33723 = (0);
seq__33703_33708 = G__33720;
chunk__33704_33709 = G__33721;
count__33705_33710 = G__33722;
i__33706_33711 = G__33723;
continue;
} else {
var msg_33724 = cljs.core.first.call(null,seq__33703_33718__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_33724);


var G__33725 = cljs.core.next.call(null,seq__33703_33718__$1);
var G__33726 = null;
var G__33727 = (0);
var G__33728 = (0);
seq__33703_33708 = G__33725;
chunk__33704_33709 = G__33726;
count__33705_33710 = G__33727;
i__33706_33711 = G__33728;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33733 = arguments.length;
var i__4737__auto___33734 = (0);
while(true){
if((i__4737__auto___33734 < len__4736__auto___33733)){
args__4742__auto__.push((arguments[i__4737__auto___33734]));

var G__33735 = (i__4737__auto___33734 + (1));
i__4737__auto___33734 = G__33735;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__33730){
var map__33731 = p__33730;
var map__33731__$1 = (((((!((map__33731 == null))))?(((((map__33731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33731):map__33731);
var opts = map__33731__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq33729){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33729));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e33736){if((e33736 instanceof Error)){
var e = e33736;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e33736;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__33737){
var map__33738 = p__33737;
var map__33738__$1 = (((((!((map__33738 == null))))?(((((map__33738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33738):map__33738);
var msg_name = cljs.core.get.call(null,map__33738__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1602360099414
