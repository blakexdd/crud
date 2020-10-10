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
}catch (e29418){if((e29418 instanceof Error)){
var e = e29418;
return "Error: Unable to stringify";
} else {
throw e29418;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__29421 = arguments.length;
switch (G__29421) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__29419_SHARP_){
if(typeof p1__29419_SHARP_ === 'string'){
return p1__29419_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__29419_SHARP_);
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
var len__4736__auto___29424 = arguments.length;
var i__4737__auto___29425 = (0);
while(true){
if((i__4737__auto___29425 < len__4736__auto___29424)){
args__4742__auto__.push((arguments[i__4737__auto___29425]));

var G__29426 = (i__4737__auto___29425 + (1));
i__4737__auto___29425 = G__29426;
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
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29423){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29423));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29428 = arguments.length;
var i__4737__auto___29429 = (0);
while(true){
if((i__4737__auto___29429 < len__4736__auto___29428)){
args__4742__auto__.push((arguments[i__4737__auto___29429]));

var G__29430 = (i__4737__auto___29429 + (1));
i__4737__auto___29429 = G__29430;
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
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29427){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29427));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29431){
var map__29432 = p__29431;
var map__29432__$1 = (((((!((map__29432 == null))))?(((((map__29432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29432):map__29432);
var message = cljs.core.get.call(null,map__29432__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29432__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__26346__auto___29511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26347__auto__ = (function (){var switch__26251__auto__ = (function (state_29483){
var state_val_29484 = (state_29483[(1)]);
if((state_val_29484 === (7))){
var inst_29479 = (state_29483[(2)]);
var state_29483__$1 = state_29483;
var statearr_29485_29512 = state_29483__$1;
(statearr_29485_29512[(2)] = inst_29479);

(statearr_29485_29512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29484 === (1))){
var state_29483__$1 = state_29483;
var statearr_29486_29513 = state_29483__$1;
(statearr_29486_29513[(2)] = null);

(statearr_29486_29513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29484 === (4))){
var inst_29436 = (state_29483[(7)]);
var inst_29436__$1 = (state_29483[(2)]);
var state_29483__$1 = (function (){var statearr_29487 = state_29483;
(statearr_29487[(7)] = inst_29436__$1);

return statearr_29487;
})();
if(cljs.core.truth_(inst_29436__$1)){
var statearr_29488_29514 = state_29483__$1;
(statearr_29488_29514[(1)] = (5));

} else {
var statearr_29489_29515 = state_29483__$1;
(statearr_29489_29515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29484 === (15))){
var inst_29443 = (state_29483[(8)]);
var inst_29458 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29443);
var inst_29459 = cljs.core.first.call(null,inst_29458);
var inst_29460 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29459);
var inst_29461 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29460)].join('');
var inst_29462 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29461);
var state_29483__$1 = state_29483;
var statearr_29490_29516 = state_29483__$1;
(statearr_29490_29516[(2)] = inst_29462);

(statearr_29490_29516[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29484 === (13))){
var inst_29467 = (state_29483[(2)]);
var state_29483__$1 = state_29483;
var statearr_29491_29517 = state_29483__$1;
(statearr_29491_29517[(2)] = inst_29467);

(statearr_29491_29517[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29484 === (6))){
var state_29483__$1 = state_29483;
var statearr_29492_29518 = state_29483__$1;
(statearr_29492_29518[(2)] = null);

(statearr_29492_29518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29484 === (17))){
var inst_29465 = (state_29483[(2)]);
var state_29483__$1 = state_29483;
var statearr_29493_29519 = state_29483__$1;
(statearr_29493_29519[(2)] = inst_29465);

(statearr_29493_29519[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29484 === (3))){
var inst_29481 = (state_29483[(2)]);
var state_29483__$1 = state_29483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29483__$1,inst_29481);
} else {
if((state_val_29484 === (12))){
var inst_29442 = (state_29483[(9)]);
var inst_29456 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29442,opts);
var state_29483__$1 = state_29483;
if(inst_29456){
var statearr_29494_29520 = state_29483__$1;
(statearr_29494_29520[(1)] = (15));

} else {
var statearr_29495_29521 = state_29483__$1;
(statearr_29495_29521[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29484 === (2))){
var state_29483__$1 = state_29483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29483__$1,(4),ch);
} else {
if((state_val_29484 === (11))){
var inst_29443 = (state_29483[(8)]);
var inst_29448 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29449 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29443);
var inst_29450 = cljs.core.async.timeout.call(null,(1000));
var inst_29451 = [inst_29449,inst_29450];
var inst_29452 = (new cljs.core.PersistentVector(null,2,(5),inst_29448,inst_29451,null));
var state_29483__$1 = state_29483;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29483__$1,(14),inst_29452);
} else {
if((state_val_29484 === (9))){
var inst_29443 = (state_29483[(8)]);
var inst_29469 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29470 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29443);
var inst_29471 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29470);
var inst_29472 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29471)].join('');
var inst_29473 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29472);
var state_29483__$1 = (function (){var statearr_29496 = state_29483;
(statearr_29496[(10)] = inst_29469);

return statearr_29496;
})();
var statearr_29497_29522 = state_29483__$1;
(statearr_29497_29522[(2)] = inst_29473);

(statearr_29497_29522[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29484 === (5))){
var inst_29436 = (state_29483[(7)]);
var inst_29438 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29439 = (new cljs.core.PersistentArrayMap(null,2,inst_29438,null));
var inst_29440 = (new cljs.core.PersistentHashSet(null,inst_29439,null));
var inst_29441 = figwheel.client.focus_msgs.call(null,inst_29440,inst_29436);
var inst_29442 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29441);
var inst_29443 = cljs.core.first.call(null,inst_29441);
var inst_29444 = figwheel.client.autoload_QMARK_.call(null);
var state_29483__$1 = (function (){var statearr_29498 = state_29483;
(statearr_29498[(9)] = inst_29442);

(statearr_29498[(8)] = inst_29443);

return statearr_29498;
})();
if(cljs.core.truth_(inst_29444)){
var statearr_29499_29523 = state_29483__$1;
(statearr_29499_29523[(1)] = (8));

} else {
var statearr_29500_29524 = state_29483__$1;
(statearr_29500_29524[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29484 === (14))){
var inst_29454 = (state_29483[(2)]);
var state_29483__$1 = state_29483;
var statearr_29501_29525 = state_29483__$1;
(statearr_29501_29525[(2)] = inst_29454);

(statearr_29501_29525[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29484 === (16))){
var state_29483__$1 = state_29483;
var statearr_29502_29526 = state_29483__$1;
(statearr_29502_29526[(2)] = null);

(statearr_29502_29526[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29484 === (10))){
var inst_29475 = (state_29483[(2)]);
var state_29483__$1 = (function (){var statearr_29503 = state_29483;
(statearr_29503[(11)] = inst_29475);

return statearr_29503;
})();
var statearr_29504_29527 = state_29483__$1;
(statearr_29504_29527[(2)] = null);

(statearr_29504_29527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29484 === (8))){
var inst_29442 = (state_29483[(9)]);
var inst_29446 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29442,opts);
var state_29483__$1 = state_29483;
if(cljs.core.truth_(inst_29446)){
var statearr_29505_29528 = state_29483__$1;
(statearr_29505_29528[(1)] = (11));

} else {
var statearr_29506_29529 = state_29483__$1;
(statearr_29506_29529[(1)] = (12));

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
var figwheel$client$file_reloader_plugin_$_state_machine__26252__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26252__auto____0 = (function (){
var statearr_29507 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29507[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26252__auto__);

(statearr_29507[(1)] = (1));

return statearr_29507;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26252__auto____1 = (function (state_29483){
while(true){
var ret_value__26253__auto__ = (function (){try{while(true){
var result__26254__auto__ = switch__26251__auto__.call(null,state_29483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26254__auto__;
}
break;
}
}catch (e29508){if((e29508 instanceof Object)){
var ex__26255__auto__ = e29508;
var statearr_29509_29530 = state_29483;
(statearr_29509_29530[(5)] = ex__26255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29531 = state_29483;
state_29483 = G__29531;
continue;
} else {
return ret_value__26253__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26252__auto__ = function(state_29483){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26252__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26252__auto____1.call(this,state_29483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26252__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26252__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26252__auto__;
})()
})();
var state__26348__auto__ = (function (){var statearr_29510 = f__26347__auto__.call(null);
(statearr_29510[(6)] = c__26346__auto___29511);

return statearr_29510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26348__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29532_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29532_SHARP_));
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
var base_path_29538 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29534 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29535 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29536 = true;
var _STAR_print_fn_STAR__temp_val__29537 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29536);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29537);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29535);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29534);
}}catch (e29533){if((e29533 instanceof Error)){
var e = e29533;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29538], null));
} else {
var e = e29533;
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29539){
var map__29540 = p__29539;
var map__29540__$1 = (((((!((map__29540 == null))))?(((((map__29540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29540):map__29540);
var opts = map__29540__$1;
var build_id = cljs.core.get.call(null,map__29540__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__29542){
var vec__29543 = p__29542;
var seq__29544 = cljs.core.seq.call(null,vec__29543);
var first__29545 = cljs.core.first.call(null,seq__29544);
var seq__29544__$1 = cljs.core.next.call(null,seq__29544);
var map__29546 = first__29545;
var map__29546__$1 = (((((!((map__29546 == null))))?(((((map__29546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29546):map__29546);
var msg = map__29546__$1;
var msg_name = cljs.core.get.call(null,map__29546__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29544__$1;
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
return (function (p__29548){
var vec__29549 = p__29548;
var seq__29550 = cljs.core.seq.call(null,vec__29549);
var first__29551 = cljs.core.first.call(null,seq__29550);
var seq__29550__$1 = cljs.core.next.call(null,seq__29550);
var map__29552 = first__29551;
var map__29552__$1 = (((((!((map__29552 == null))))?(((((map__29552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29552):map__29552);
var msg = map__29552__$1;
var msg_name = cljs.core.get.call(null,map__29552__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29550__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29554){
var map__29555 = p__29554;
var map__29555__$1 = (((((!((map__29555 == null))))?(((((map__29555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29555):map__29555);
var on_compile_warning = cljs.core.get.call(null,map__29555__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29555__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__29557){
var vec__29558 = p__29557;
var seq__29559 = cljs.core.seq.call(null,vec__29558);
var first__29560 = cljs.core.first.call(null,seq__29559);
var seq__29559__$1 = cljs.core.next.call(null,seq__29559);
var map__29561 = first__29560;
var map__29561__$1 = (((((!((map__29561 == null))))?(((((map__29561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29561):map__29561);
var msg = map__29561__$1;
var msg_name = cljs.core.get.call(null,map__29561__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29559__$1;
var pred__29563 = cljs.core._EQ_;
var expr__29564 = msg_name;
if(cljs.core.truth_(pred__29563.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29564))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29563.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29564))){
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
var c__26346__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26347__auto__ = (function (){var switch__26251__auto__ = (function (state_29653){
var state_val_29654 = (state_29653[(1)]);
if((state_val_29654 === (7))){
var inst_29573 = (state_29653[(2)]);
var state_29653__$1 = state_29653;
if(cljs.core.truth_(inst_29573)){
var statearr_29655_29702 = state_29653__$1;
(statearr_29655_29702[(1)] = (8));

} else {
var statearr_29656_29703 = state_29653__$1;
(statearr_29656_29703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29654 === (20))){
var inst_29647 = (state_29653[(2)]);
var state_29653__$1 = state_29653;
var statearr_29657_29704 = state_29653__$1;
(statearr_29657_29704[(2)] = inst_29647);

(statearr_29657_29704[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29654 === (27))){
var inst_29643 = (state_29653[(2)]);
var state_29653__$1 = state_29653;
var statearr_29658_29705 = state_29653__$1;
(statearr_29658_29705[(2)] = inst_29643);

(statearr_29658_29705[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29654 === (1))){
var inst_29566 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29653__$1 = state_29653;
if(cljs.core.truth_(inst_29566)){
var statearr_29659_29706 = state_29653__$1;
(statearr_29659_29706[(1)] = (2));

} else {
var statearr_29660_29707 = state_29653__$1;
(statearr_29660_29707[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29654 === (24))){
var inst_29645 = (state_29653[(2)]);
var state_29653__$1 = state_29653;
var statearr_29661_29708 = state_29653__$1;
(statearr_29661_29708[(2)] = inst_29645);

(statearr_29661_29708[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29654 === (4))){
var inst_29651 = (state_29653[(2)]);
var state_29653__$1 = state_29653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29653__$1,inst_29651);
} else {
if((state_val_29654 === (15))){
var inst_29649 = (state_29653[(2)]);
var state_29653__$1 = state_29653;
var statearr_29662_29709 = state_29653__$1;
(statearr_29662_29709[(2)] = inst_29649);

(statearr_29662_29709[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29654 === (21))){
var inst_29602 = (state_29653[(2)]);
var inst_29603 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29604 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29603);
var state_29653__$1 = (function (){var statearr_29663 = state_29653;
(statearr_29663[(7)] = inst_29602);

return statearr_29663;
})();
var statearr_29664_29710 = state_29653__$1;
(statearr_29664_29710[(2)] = inst_29604);

(statearr_29664_29710[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29654 === (31))){
var inst_29632 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29653__$1 = state_29653;
if(inst_29632){
var statearr_29665_29711 = state_29653__$1;
(statearr_29665_29711[(1)] = (34));

} else {
var statearr_29666_29712 = state_29653__$1;
(statearr_29666_29712[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29654 === (32))){
var inst_29641 = (state_29653[(2)]);
var state_29653__$1 = state_29653;
var statearr_29667_29713 = state_29653__$1;
(statearr_29667_29713[(2)] = inst_29641);

(statearr_29667_29713[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29654 === (33))){
var inst_29628 = (state_29653[(2)]);
var inst_29629 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29630 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29629);
var state_29653__$1 = (function (){var statearr_29668 = state_29653;
(statearr_29668[(8)] = inst_29628);

return statearr_29668;
})();
var statearr_29669_29714 = state_29653__$1;
(statearr_29669_29714[(2)] = inst_29630);

(statearr_29669_29714[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29654 === (13))){
var inst_29587 = figwheel.client.heads_up.clear.call(null);
var state_29653__$1 = state_29653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29653__$1,(16),inst_29587);
} else {
if((state_val_29654 === (22))){
var inst_29608 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29609 = figwheel.client.heads_up.append_warning_message.call(null,inst_29608);
var state_29653__$1 = state_29653;
var statearr_29670_29715 = state_29653__$1;
(statearr_29670_29715[(2)] = inst_29609);

(statearr_29670_29715[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29654 === (36))){
var inst_29639 = (state_29653[(2)]);
var state_29653__$1 = state_29653;
var statearr_29671_29716 = state_29653__$1;
(statearr_29671_29716[(2)] = inst_29639);

(statearr_29671_29716[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29654 === (29))){
var inst_29619 = (state_29653[(2)]);
var inst_29620 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29621 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29620);
var state_29653__$1 = (function (){var statearr_29672 = state_29653;
(statearr_29672[(9)] = inst_29619);

return statearr_29672;
})();
var statearr_29673_29717 = state_29653__$1;
(statearr_29673_29717[(2)] = inst_29621);

(statearr_29673_29717[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29654 === (6))){
var inst_29568 = (state_29653[(10)]);
var state_29653__$1 = state_29653;
var statearr_29674_29718 = state_29653__$1;
(statearr_29674_29718[(2)] = inst_29568);

(statearr_29674_29718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29654 === (28))){
var inst_29615 = (state_29653[(2)]);
var inst_29616 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29617 = figwheel.client.heads_up.display_warning.call(null,inst_29616);
var state_29653__$1 = (function (){var statearr_29675 = state_29653;
(statearr_29675[(11)] = inst_29615);

return statearr_29675;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29653__$1,(29),inst_29617);
} else {
if((state_val_29654 === (25))){
var inst_29613 = figwheel.client.heads_up.clear.call(null);
var state_29653__$1 = state_29653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29653__$1,(28),inst_29613);
} else {
if((state_val_29654 === (34))){
var inst_29634 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29653__$1 = state_29653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29653__$1,(37),inst_29634);
} else {
if((state_val_29654 === (17))){
var inst_29593 = (state_29653[(2)]);
var inst_29594 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29595 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29594);
var state_29653__$1 = (function (){var statearr_29676 = state_29653;
(statearr_29676[(12)] = inst_29593);

return statearr_29676;
})();
var statearr_29677_29719 = state_29653__$1;
(statearr_29677_29719[(2)] = inst_29595);

(statearr_29677_29719[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29654 === (3))){
var inst_29585 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29653__$1 = state_29653;
if(inst_29585){
var statearr_29678_29720 = state_29653__$1;
(statearr_29678_29720[(1)] = (13));

} else {
var statearr_29679_29721 = state_29653__$1;
(statearr_29679_29721[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29654 === (12))){
var inst_29581 = (state_29653[(2)]);
var state_29653__$1 = state_29653;
var statearr_29680_29722 = state_29653__$1;
(statearr_29680_29722[(2)] = inst_29581);

(statearr_29680_29722[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29654 === (2))){
var inst_29568 = (state_29653[(10)]);
var inst_29568__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29653__$1 = (function (){var statearr_29681 = state_29653;
(statearr_29681[(10)] = inst_29568__$1);

return statearr_29681;
})();
if(cljs.core.truth_(inst_29568__$1)){
var statearr_29682_29723 = state_29653__$1;
(statearr_29682_29723[(1)] = (5));

} else {
var statearr_29683_29724 = state_29653__$1;
(statearr_29683_29724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29654 === (23))){
var inst_29611 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29653__$1 = state_29653;
if(inst_29611){
var statearr_29684_29725 = state_29653__$1;
(statearr_29684_29725[(1)] = (25));

} else {
var statearr_29685_29726 = state_29653__$1;
(statearr_29685_29726[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29654 === (35))){
var state_29653__$1 = state_29653;
var statearr_29686_29727 = state_29653__$1;
(statearr_29686_29727[(2)] = null);

(statearr_29686_29727[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29654 === (19))){
var inst_29606 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29653__$1 = state_29653;
if(inst_29606){
var statearr_29687_29728 = state_29653__$1;
(statearr_29687_29728[(1)] = (22));

} else {
var statearr_29688_29729 = state_29653__$1;
(statearr_29688_29729[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29654 === (11))){
var inst_29577 = (state_29653[(2)]);
var state_29653__$1 = state_29653;
var statearr_29689_29730 = state_29653__$1;
(statearr_29689_29730[(2)] = inst_29577);

(statearr_29689_29730[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29654 === (9))){
var inst_29579 = figwheel.client.heads_up.clear.call(null);
var state_29653__$1 = state_29653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29653__$1,(12),inst_29579);
} else {
if((state_val_29654 === (5))){
var inst_29570 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29653__$1 = state_29653;
var statearr_29690_29731 = state_29653__$1;
(statearr_29690_29731[(2)] = inst_29570);

(statearr_29690_29731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29654 === (14))){
var inst_29597 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29653__$1 = state_29653;
if(inst_29597){
var statearr_29691_29732 = state_29653__$1;
(statearr_29691_29732[(1)] = (18));

} else {
var statearr_29692_29733 = state_29653__$1;
(statearr_29692_29733[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29654 === (26))){
var inst_29623 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29653__$1 = state_29653;
if(inst_29623){
var statearr_29693_29734 = state_29653__$1;
(statearr_29693_29734[(1)] = (30));

} else {
var statearr_29694_29735 = state_29653__$1;
(statearr_29694_29735[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29654 === (16))){
var inst_29589 = (state_29653[(2)]);
var inst_29590 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29591 = figwheel.client.heads_up.display_exception.call(null,inst_29590);
var state_29653__$1 = (function (){var statearr_29695 = state_29653;
(statearr_29695[(13)] = inst_29589);

return statearr_29695;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29653__$1,(17),inst_29591);
} else {
if((state_val_29654 === (30))){
var inst_29625 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29626 = figwheel.client.heads_up.display_warning.call(null,inst_29625);
var state_29653__$1 = state_29653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29653__$1,(33),inst_29626);
} else {
if((state_val_29654 === (10))){
var inst_29583 = (state_29653[(2)]);
var state_29653__$1 = state_29653;
var statearr_29696_29736 = state_29653__$1;
(statearr_29696_29736[(2)] = inst_29583);

(statearr_29696_29736[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29654 === (18))){
var inst_29599 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29600 = figwheel.client.heads_up.display_exception.call(null,inst_29599);
var state_29653__$1 = state_29653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29653__$1,(21),inst_29600);
} else {
if((state_val_29654 === (37))){
var inst_29636 = (state_29653[(2)]);
var state_29653__$1 = state_29653;
var statearr_29697_29737 = state_29653__$1;
(statearr_29697_29737[(2)] = inst_29636);

(statearr_29697_29737[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29654 === (8))){
var inst_29575 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29653__$1 = state_29653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29653__$1,(11),inst_29575);
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
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26252__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26252__auto____0 = (function (){
var statearr_29698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29698[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26252__auto__);

(statearr_29698[(1)] = (1));

return statearr_29698;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26252__auto____1 = (function (state_29653){
while(true){
var ret_value__26253__auto__ = (function (){try{while(true){
var result__26254__auto__ = switch__26251__auto__.call(null,state_29653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26254__auto__;
}
break;
}
}catch (e29699){if((e29699 instanceof Object)){
var ex__26255__auto__ = e29699;
var statearr_29700_29738 = state_29653;
(statearr_29700_29738[(5)] = ex__26255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29739 = state_29653;
state_29653 = G__29739;
continue;
} else {
return ret_value__26253__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26252__auto__ = function(state_29653){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26252__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26252__auto____1.call(this,state_29653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26252__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26252__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26252__auto__;
})()
})();
var state__26348__auto__ = (function (){var statearr_29701 = f__26347__auto__.call(null);
(statearr_29701[(6)] = c__26346__auto__);

return statearr_29701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26348__auto__);
}));

return c__26346__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26346__auto___29768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26347__auto__ = (function (){var switch__26251__auto__ = (function (state_29754){
var state_val_29755 = (state_29754[(1)]);
if((state_val_29755 === (1))){
var state_29754__$1 = state_29754;
var statearr_29756_29769 = state_29754__$1;
(statearr_29756_29769[(2)] = null);

(statearr_29756_29769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (2))){
var state_29754__$1 = state_29754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29754__$1,(4),ch);
} else {
if((state_val_29755 === (3))){
var inst_29752 = (state_29754[(2)]);
var state_29754__$1 = state_29754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29754__$1,inst_29752);
} else {
if((state_val_29755 === (4))){
var inst_29742 = (state_29754[(7)]);
var inst_29742__$1 = (state_29754[(2)]);
var state_29754__$1 = (function (){var statearr_29757 = state_29754;
(statearr_29757[(7)] = inst_29742__$1);

return statearr_29757;
})();
if(cljs.core.truth_(inst_29742__$1)){
var statearr_29758_29770 = state_29754__$1;
(statearr_29758_29770[(1)] = (5));

} else {
var statearr_29759_29771 = state_29754__$1;
(statearr_29759_29771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (5))){
var inst_29742 = (state_29754[(7)]);
var inst_29744 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29742);
var state_29754__$1 = state_29754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29754__$1,(8),inst_29744);
} else {
if((state_val_29755 === (6))){
var state_29754__$1 = state_29754;
var statearr_29760_29772 = state_29754__$1;
(statearr_29760_29772[(2)] = null);

(statearr_29760_29772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (7))){
var inst_29750 = (state_29754[(2)]);
var state_29754__$1 = state_29754;
var statearr_29761_29773 = state_29754__$1;
(statearr_29761_29773[(2)] = inst_29750);

(statearr_29761_29773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (8))){
var inst_29746 = (state_29754[(2)]);
var state_29754__$1 = (function (){var statearr_29762 = state_29754;
(statearr_29762[(8)] = inst_29746);

return statearr_29762;
})();
var statearr_29763_29774 = state_29754__$1;
(statearr_29763_29774[(2)] = null);

(statearr_29763_29774[(1)] = (2));


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
var figwheel$client$heads_up_plugin_$_state_machine__26252__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26252__auto____0 = (function (){
var statearr_29764 = [null,null,null,null,null,null,null,null,null];
(statearr_29764[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26252__auto__);

(statearr_29764[(1)] = (1));

return statearr_29764;
});
var figwheel$client$heads_up_plugin_$_state_machine__26252__auto____1 = (function (state_29754){
while(true){
var ret_value__26253__auto__ = (function (){try{while(true){
var result__26254__auto__ = switch__26251__auto__.call(null,state_29754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26254__auto__;
}
break;
}
}catch (e29765){if((e29765 instanceof Object)){
var ex__26255__auto__ = e29765;
var statearr_29766_29775 = state_29754;
(statearr_29766_29775[(5)] = ex__26255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29776 = state_29754;
state_29754 = G__29776;
continue;
} else {
return ret_value__26253__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26252__auto__ = function(state_29754){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26252__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26252__auto____1.call(this,state_29754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26252__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26252__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26252__auto__;
})()
})();
var state__26348__auto__ = (function (){var statearr_29767 = f__26347__auto__.call(null);
(statearr_29767[(6)] = c__26346__auto___29768);

return statearr_29767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26348__auto__);
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
var c__26346__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26347__auto__ = (function (){var switch__26251__auto__ = (function (state_29782){
var state_val_29783 = (state_29782[(1)]);
if((state_val_29783 === (1))){
var inst_29777 = cljs.core.async.timeout.call(null,(3000));
var state_29782__$1 = state_29782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29782__$1,(2),inst_29777);
} else {
if((state_val_29783 === (2))){
var inst_29779 = (state_29782[(2)]);
var inst_29780 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29782__$1 = (function (){var statearr_29784 = state_29782;
(statearr_29784[(7)] = inst_29779);

return statearr_29784;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29782__$1,inst_29780);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26252__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26252__auto____0 = (function (){
var statearr_29785 = [null,null,null,null,null,null,null,null];
(statearr_29785[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26252__auto__);

(statearr_29785[(1)] = (1));

return statearr_29785;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26252__auto____1 = (function (state_29782){
while(true){
var ret_value__26253__auto__ = (function (){try{while(true){
var result__26254__auto__ = switch__26251__auto__.call(null,state_29782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26254__auto__;
}
break;
}
}catch (e29786){if((e29786 instanceof Object)){
var ex__26255__auto__ = e29786;
var statearr_29787_29789 = state_29782;
(statearr_29787_29789[(5)] = ex__26255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29790 = state_29782;
state_29782 = G__29790;
continue;
} else {
return ret_value__26253__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26252__auto__ = function(state_29782){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26252__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26252__auto____1.call(this,state_29782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26252__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26252__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26252__auto__;
})()
})();
var state__26348__auto__ = (function (){var statearr_29788 = f__26347__auto__.call(null);
(statearr_29788[(6)] = c__26346__auto__);

return statearr_29788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26348__auto__);
}));

return c__26346__auto__;
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
var c__26346__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26347__auto__ = (function (){var switch__26251__auto__ = (function (state_29797){
var state_val_29798 = (state_29797[(1)]);
if((state_val_29798 === (1))){
var inst_29791 = cljs.core.async.timeout.call(null,(2000));
var state_29797__$1 = state_29797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29797__$1,(2),inst_29791);
} else {
if((state_val_29798 === (2))){
var inst_29793 = (state_29797[(2)]);
var inst_29794 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_29795 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_29794);
var state_29797__$1 = (function (){var statearr_29799 = state_29797;
(statearr_29799[(7)] = inst_29793);

return statearr_29799;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29797__$1,inst_29795);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26252__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26252__auto____0 = (function (){
var statearr_29800 = [null,null,null,null,null,null,null,null];
(statearr_29800[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26252__auto__);

(statearr_29800[(1)] = (1));

return statearr_29800;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26252__auto____1 = (function (state_29797){
while(true){
var ret_value__26253__auto__ = (function (){try{while(true){
var result__26254__auto__ = switch__26251__auto__.call(null,state_29797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26254__auto__;
}
break;
}
}catch (e29801){if((e29801 instanceof Object)){
var ex__26255__auto__ = e29801;
var statearr_29802_29804 = state_29797;
(statearr_29802_29804[(5)] = ex__26255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29805 = state_29797;
state_29797 = G__29805;
continue;
} else {
return ret_value__26253__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26252__auto__ = function(state_29797){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26252__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26252__auto____1.call(this,state_29797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26252__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26252__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26252__auto__;
})()
})();
var state__26348__auto__ = (function (){var statearr_29803 = f__26347__auto__.call(null);
(statearr_29803[(6)] = c__26346__auto__);

return statearr_29803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26348__auto__);
}));

return c__26346__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__29806){
var map__29807 = p__29806;
var map__29807__$1 = (((((!((map__29807 == null))))?(((((map__29807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29807):map__29807);
var file = cljs.core.get.call(null,map__29807__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29807__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29807__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29809 = "";
var G__29809__$1 = (cljs.core.truth_(file)?[G__29809,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__29809);
var G__29809__$2 = (cljs.core.truth_(line)?[G__29809__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29809__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__29809__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__29809__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29810){
var map__29811 = p__29810;
var map__29811__$1 = (((((!((map__29811 == null))))?(((((map__29811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29811):map__29811);
var ed = map__29811__$1;
var exception_data = cljs.core.get.call(null,map__29811__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29811__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_29814 = (function (){var G__29813 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29813)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__29813;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_29814);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29815){
var map__29816 = p__29815;
var map__29816__$1 = (((((!((map__29816 == null))))?(((((map__29816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29816):map__29816);
var w = map__29816__$1;
var message = cljs.core.get.call(null,map__29816__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__29818 = cljs.core.seq.call(null,plugins);
var chunk__29819 = null;
var count__29820 = (0);
var i__29821 = (0);
while(true){
if((i__29821 < count__29820)){
var vec__29828 = cljs.core._nth.call(null,chunk__29819,i__29821);
var k = cljs.core.nth.call(null,vec__29828,(0),null);
var plugin = cljs.core.nth.call(null,vec__29828,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29834 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29818,chunk__29819,count__29820,i__29821,pl_29834,vec__29828,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29834.call(null,msg_hist);
});})(seq__29818,chunk__29819,count__29820,i__29821,pl_29834,vec__29828,k,plugin))
);
} else {
}


var G__29835 = seq__29818;
var G__29836 = chunk__29819;
var G__29837 = count__29820;
var G__29838 = (i__29821 + (1));
seq__29818 = G__29835;
chunk__29819 = G__29836;
count__29820 = G__29837;
i__29821 = G__29838;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29818);
if(temp__5735__auto__){
var seq__29818__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29818__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29818__$1);
var G__29839 = cljs.core.chunk_rest.call(null,seq__29818__$1);
var G__29840 = c__4556__auto__;
var G__29841 = cljs.core.count.call(null,c__4556__auto__);
var G__29842 = (0);
seq__29818 = G__29839;
chunk__29819 = G__29840;
count__29820 = G__29841;
i__29821 = G__29842;
continue;
} else {
var vec__29831 = cljs.core.first.call(null,seq__29818__$1);
var k = cljs.core.nth.call(null,vec__29831,(0),null);
var plugin = cljs.core.nth.call(null,vec__29831,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29843 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29818,chunk__29819,count__29820,i__29821,pl_29843,vec__29831,k,plugin,seq__29818__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29843.call(null,msg_hist);
});})(seq__29818,chunk__29819,count__29820,i__29821,pl_29843,vec__29831,k,plugin,seq__29818__$1,temp__5735__auto__))
);
} else {
}


var G__29844 = cljs.core.next.call(null,seq__29818__$1);
var G__29845 = null;
var G__29846 = (0);
var G__29847 = (0);
seq__29818 = G__29844;
chunk__29819 = G__29845;
count__29820 = G__29846;
i__29821 = G__29847;
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
var G__29849 = arguments.length;
switch (G__29849) {
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

var seq__29850_29855 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__29851_29856 = null;
var count__29852_29857 = (0);
var i__29853_29858 = (0);
while(true){
if((i__29853_29858 < count__29852_29857)){
var msg_29859 = cljs.core._nth.call(null,chunk__29851_29856,i__29853_29858);
figwheel.client.socket.handle_incoming_message.call(null,msg_29859);


var G__29860 = seq__29850_29855;
var G__29861 = chunk__29851_29856;
var G__29862 = count__29852_29857;
var G__29863 = (i__29853_29858 + (1));
seq__29850_29855 = G__29860;
chunk__29851_29856 = G__29861;
count__29852_29857 = G__29862;
i__29853_29858 = G__29863;
continue;
} else {
var temp__5735__auto___29864 = cljs.core.seq.call(null,seq__29850_29855);
if(temp__5735__auto___29864){
var seq__29850_29865__$1 = temp__5735__auto___29864;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29850_29865__$1)){
var c__4556__auto___29866 = cljs.core.chunk_first.call(null,seq__29850_29865__$1);
var G__29867 = cljs.core.chunk_rest.call(null,seq__29850_29865__$1);
var G__29868 = c__4556__auto___29866;
var G__29869 = cljs.core.count.call(null,c__4556__auto___29866);
var G__29870 = (0);
seq__29850_29855 = G__29867;
chunk__29851_29856 = G__29868;
count__29852_29857 = G__29869;
i__29853_29858 = G__29870;
continue;
} else {
var msg_29871 = cljs.core.first.call(null,seq__29850_29865__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_29871);


var G__29872 = cljs.core.next.call(null,seq__29850_29865__$1);
var G__29873 = null;
var G__29874 = (0);
var G__29875 = (0);
seq__29850_29855 = G__29872;
chunk__29851_29856 = G__29873;
count__29852_29857 = G__29874;
i__29853_29858 = G__29875;
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
var len__4736__auto___29880 = arguments.length;
var i__4737__auto___29881 = (0);
while(true){
if((i__4737__auto___29881 < len__4736__auto___29880)){
args__4742__auto__.push((arguments[i__4737__auto___29881]));

var G__29882 = (i__4737__auto___29881 + (1));
i__4737__auto___29881 = G__29882;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29877){
var map__29878 = p__29877;
var map__29878__$1 = (((((!((map__29878 == null))))?(((((map__29878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29878):map__29878);
var opts = map__29878__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29876){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29876));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e29883){if((e29883 instanceof Error)){
var e = e29883;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e29883;

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

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__29884){
var map__29885 = p__29884;
var map__29885__$1 = (((((!((map__29885 == null))))?(((((map__29885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29885):map__29885);
var msg_name = cljs.core.get.call(null,map__29885__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1602351797173
