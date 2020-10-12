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
}catch (e35123){if((e35123 instanceof Error)){
var e = e35123;
return "Error: Unable to stringify";
} else {
throw e35123;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__35126 = arguments.length;
switch (G__35126) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__35124_SHARP_){
if(typeof p1__35124_SHARP_ === 'string'){
return p1__35124_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__35124_SHARP_);
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
var len__4736__auto___35129 = arguments.length;
var i__4737__auto___35130 = (0);
while(true){
if((i__4737__auto___35130 < len__4736__auto___35129)){
args__4742__auto__.push((arguments[i__4737__auto___35130]));

var G__35131 = (i__4737__auto___35130 + (1));
i__4737__auto___35130 = G__35131;
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
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35128){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35128));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35133 = arguments.length;
var i__4737__auto___35134 = (0);
while(true){
if((i__4737__auto___35134 < len__4736__auto___35133)){
args__4742__auto__.push((arguments[i__4737__auto___35134]));

var G__35135 = (i__4737__auto___35134 + (1));
i__4737__auto___35134 = G__35135;
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
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35132){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35132));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35136){
var map__35137 = p__35136;
var map__35137__$1 = (((((!((map__35137 == null))))?(((((map__35137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35137):map__35137);
var message = cljs.core.get.call(null,map__35137__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35137__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__29917__auto___35216 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29918__auto__ = (function (){var switch__29900__auto__ = (function (state_35188){
var state_val_35189 = (state_35188[(1)]);
if((state_val_35189 === (7))){
var inst_35184 = (state_35188[(2)]);
var state_35188__$1 = state_35188;
var statearr_35190_35217 = state_35188__$1;
(statearr_35190_35217[(2)] = inst_35184);

(statearr_35190_35217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (1))){
var state_35188__$1 = state_35188;
var statearr_35191_35218 = state_35188__$1;
(statearr_35191_35218[(2)] = null);

(statearr_35191_35218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (4))){
var inst_35141 = (state_35188[(7)]);
var inst_35141__$1 = (state_35188[(2)]);
var state_35188__$1 = (function (){var statearr_35192 = state_35188;
(statearr_35192[(7)] = inst_35141__$1);

return statearr_35192;
})();
if(cljs.core.truth_(inst_35141__$1)){
var statearr_35193_35219 = state_35188__$1;
(statearr_35193_35219[(1)] = (5));

} else {
var statearr_35194_35220 = state_35188__$1;
(statearr_35194_35220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (15))){
var inst_35148 = (state_35188[(8)]);
var inst_35163 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35148);
var inst_35164 = cljs.core.first.call(null,inst_35163);
var inst_35165 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35164);
var inst_35166 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35165)].join('');
var inst_35167 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35166);
var state_35188__$1 = state_35188;
var statearr_35195_35221 = state_35188__$1;
(statearr_35195_35221[(2)] = inst_35167);

(statearr_35195_35221[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (13))){
var inst_35172 = (state_35188[(2)]);
var state_35188__$1 = state_35188;
var statearr_35196_35222 = state_35188__$1;
(statearr_35196_35222[(2)] = inst_35172);

(statearr_35196_35222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (6))){
var state_35188__$1 = state_35188;
var statearr_35197_35223 = state_35188__$1;
(statearr_35197_35223[(2)] = null);

(statearr_35197_35223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (17))){
var inst_35170 = (state_35188[(2)]);
var state_35188__$1 = state_35188;
var statearr_35198_35224 = state_35188__$1;
(statearr_35198_35224[(2)] = inst_35170);

(statearr_35198_35224[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (3))){
var inst_35186 = (state_35188[(2)]);
var state_35188__$1 = state_35188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35188__$1,inst_35186);
} else {
if((state_val_35189 === (12))){
var inst_35147 = (state_35188[(9)]);
var inst_35161 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35147,opts);
var state_35188__$1 = state_35188;
if(inst_35161){
var statearr_35199_35225 = state_35188__$1;
(statearr_35199_35225[(1)] = (15));

} else {
var statearr_35200_35226 = state_35188__$1;
(statearr_35200_35226[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (2))){
var state_35188__$1 = state_35188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35188__$1,(4),ch);
} else {
if((state_val_35189 === (11))){
var inst_35148 = (state_35188[(8)]);
var inst_35153 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35154 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35148);
var inst_35155 = cljs.core.async.timeout.call(null,(1000));
var inst_35156 = [inst_35154,inst_35155];
var inst_35157 = (new cljs.core.PersistentVector(null,2,(5),inst_35153,inst_35156,null));
var state_35188__$1 = state_35188;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35188__$1,(14),inst_35157);
} else {
if((state_val_35189 === (9))){
var inst_35148 = (state_35188[(8)]);
var inst_35174 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35175 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35148);
var inst_35176 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35175);
var inst_35177 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35176)].join('');
var inst_35178 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35177);
var state_35188__$1 = (function (){var statearr_35201 = state_35188;
(statearr_35201[(10)] = inst_35174);

return statearr_35201;
})();
var statearr_35202_35227 = state_35188__$1;
(statearr_35202_35227[(2)] = inst_35178);

(statearr_35202_35227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (5))){
var inst_35141 = (state_35188[(7)]);
var inst_35143 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35144 = (new cljs.core.PersistentArrayMap(null,2,inst_35143,null));
var inst_35145 = (new cljs.core.PersistentHashSet(null,inst_35144,null));
var inst_35146 = figwheel.client.focus_msgs.call(null,inst_35145,inst_35141);
var inst_35147 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35146);
var inst_35148 = cljs.core.first.call(null,inst_35146);
var inst_35149 = figwheel.client.autoload_QMARK_.call(null);
var state_35188__$1 = (function (){var statearr_35203 = state_35188;
(statearr_35203[(8)] = inst_35148);

(statearr_35203[(9)] = inst_35147);

return statearr_35203;
})();
if(cljs.core.truth_(inst_35149)){
var statearr_35204_35228 = state_35188__$1;
(statearr_35204_35228[(1)] = (8));

} else {
var statearr_35205_35229 = state_35188__$1;
(statearr_35205_35229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (14))){
var inst_35159 = (state_35188[(2)]);
var state_35188__$1 = state_35188;
var statearr_35206_35230 = state_35188__$1;
(statearr_35206_35230[(2)] = inst_35159);

(statearr_35206_35230[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (16))){
var state_35188__$1 = state_35188;
var statearr_35207_35231 = state_35188__$1;
(statearr_35207_35231[(2)] = null);

(statearr_35207_35231[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (10))){
var inst_35180 = (state_35188[(2)]);
var state_35188__$1 = (function (){var statearr_35208 = state_35188;
(statearr_35208[(11)] = inst_35180);

return statearr_35208;
})();
var statearr_35209_35232 = state_35188__$1;
(statearr_35209_35232[(2)] = null);

(statearr_35209_35232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (8))){
var inst_35147 = (state_35188[(9)]);
var inst_35151 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35147,opts);
var state_35188__$1 = state_35188;
if(cljs.core.truth_(inst_35151)){
var statearr_35210_35233 = state_35188__$1;
(statearr_35210_35233[(1)] = (11));

} else {
var statearr_35211_35234 = state_35188__$1;
(statearr_35211_35234[(1)] = (12));

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
var figwheel$client$file_reloader_plugin_$_state_machine__29901__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29901__auto____0 = (function (){
var statearr_35212 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35212[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29901__auto__);

(statearr_35212[(1)] = (1));

return statearr_35212;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29901__auto____1 = (function (state_35188){
while(true){
var ret_value__29902__auto__ = (function (){try{while(true){
var result__29903__auto__ = switch__29900__auto__.call(null,state_35188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29903__auto__;
}
break;
}
}catch (e35213){if((e35213 instanceof Object)){
var ex__29904__auto__ = e35213;
var statearr_35214_35235 = state_35188;
(statearr_35214_35235[(5)] = ex__29904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35236 = state_35188;
state_35188 = G__35236;
continue;
} else {
return ret_value__29902__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29901__auto__ = function(state_35188){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29901__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29901__auto____1.call(this,state_35188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29901__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29901__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29901__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_35215 = f__29918__auto__.call(null);
(statearr_35215[(6)] = c__29917__auto___35216);

return statearr_35215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29919__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35237_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35237_SHARP_));
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
var base_path_35243 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35239 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35240 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35241 = true;
var _STAR_print_fn_STAR__temp_val__35242 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35241);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35242);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35240);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35239);
}}catch (e35238){if((e35238 instanceof Error)){
var e = e35238;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35243], null));
} else {
var e = e35238;
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35244){
var map__35245 = p__35244;
var map__35245__$1 = (((((!((map__35245 == null))))?(((((map__35245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35245):map__35245);
var opts = map__35245__$1;
var build_id = cljs.core.get.call(null,map__35245__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__35247){
var vec__35248 = p__35247;
var seq__35249 = cljs.core.seq.call(null,vec__35248);
var first__35250 = cljs.core.first.call(null,seq__35249);
var seq__35249__$1 = cljs.core.next.call(null,seq__35249);
var map__35251 = first__35250;
var map__35251__$1 = (((((!((map__35251 == null))))?(((((map__35251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35251):map__35251);
var msg = map__35251__$1;
var msg_name = cljs.core.get.call(null,map__35251__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35249__$1;
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
return (function (p__35253){
var vec__35254 = p__35253;
var seq__35255 = cljs.core.seq.call(null,vec__35254);
var first__35256 = cljs.core.first.call(null,seq__35255);
var seq__35255__$1 = cljs.core.next.call(null,seq__35255);
var map__35257 = first__35256;
var map__35257__$1 = (((((!((map__35257 == null))))?(((((map__35257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35257):map__35257);
var msg = map__35257__$1;
var msg_name = cljs.core.get.call(null,map__35257__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35255__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35259){
var map__35260 = p__35259;
var map__35260__$1 = (((((!((map__35260 == null))))?(((((map__35260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35260):map__35260);
var on_compile_warning = cljs.core.get.call(null,map__35260__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35260__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__35262){
var vec__35263 = p__35262;
var seq__35264 = cljs.core.seq.call(null,vec__35263);
var first__35265 = cljs.core.first.call(null,seq__35264);
var seq__35264__$1 = cljs.core.next.call(null,seq__35264);
var map__35266 = first__35265;
var map__35266__$1 = (((((!((map__35266 == null))))?(((((map__35266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35266):map__35266);
var msg = map__35266__$1;
var msg_name = cljs.core.get.call(null,map__35266__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35264__$1;
var pred__35268 = cljs.core._EQ_;
var expr__35269 = msg_name;
if(cljs.core.truth_(pred__35268.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35269))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35268.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35269))){
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
var c__29917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29918__auto__ = (function (){var switch__29900__auto__ = (function (state_35358){
var state_val_35359 = (state_35358[(1)]);
if((state_val_35359 === (7))){
var inst_35278 = (state_35358[(2)]);
var state_35358__$1 = state_35358;
if(cljs.core.truth_(inst_35278)){
var statearr_35360_35407 = state_35358__$1;
(statearr_35360_35407[(1)] = (8));

} else {
var statearr_35361_35408 = state_35358__$1;
(statearr_35361_35408[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (20))){
var inst_35352 = (state_35358[(2)]);
var state_35358__$1 = state_35358;
var statearr_35362_35409 = state_35358__$1;
(statearr_35362_35409[(2)] = inst_35352);

(statearr_35362_35409[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (27))){
var inst_35348 = (state_35358[(2)]);
var state_35358__$1 = state_35358;
var statearr_35363_35410 = state_35358__$1;
(statearr_35363_35410[(2)] = inst_35348);

(statearr_35363_35410[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (1))){
var inst_35271 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35358__$1 = state_35358;
if(cljs.core.truth_(inst_35271)){
var statearr_35364_35411 = state_35358__$1;
(statearr_35364_35411[(1)] = (2));

} else {
var statearr_35365_35412 = state_35358__$1;
(statearr_35365_35412[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (24))){
var inst_35350 = (state_35358[(2)]);
var state_35358__$1 = state_35358;
var statearr_35366_35413 = state_35358__$1;
(statearr_35366_35413[(2)] = inst_35350);

(statearr_35366_35413[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (4))){
var inst_35356 = (state_35358[(2)]);
var state_35358__$1 = state_35358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35358__$1,inst_35356);
} else {
if((state_val_35359 === (15))){
var inst_35354 = (state_35358[(2)]);
var state_35358__$1 = state_35358;
var statearr_35367_35414 = state_35358__$1;
(statearr_35367_35414[(2)] = inst_35354);

(statearr_35367_35414[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (21))){
var inst_35307 = (state_35358[(2)]);
var inst_35308 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35309 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35308);
var state_35358__$1 = (function (){var statearr_35368 = state_35358;
(statearr_35368[(7)] = inst_35307);

return statearr_35368;
})();
var statearr_35369_35415 = state_35358__$1;
(statearr_35369_35415[(2)] = inst_35309);

(statearr_35369_35415[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (31))){
var inst_35337 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35358__$1 = state_35358;
if(inst_35337){
var statearr_35370_35416 = state_35358__$1;
(statearr_35370_35416[(1)] = (34));

} else {
var statearr_35371_35417 = state_35358__$1;
(statearr_35371_35417[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (32))){
var inst_35346 = (state_35358[(2)]);
var state_35358__$1 = state_35358;
var statearr_35372_35418 = state_35358__$1;
(statearr_35372_35418[(2)] = inst_35346);

(statearr_35372_35418[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (33))){
var inst_35333 = (state_35358[(2)]);
var inst_35334 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35335 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35334);
var state_35358__$1 = (function (){var statearr_35373 = state_35358;
(statearr_35373[(8)] = inst_35333);

return statearr_35373;
})();
var statearr_35374_35419 = state_35358__$1;
(statearr_35374_35419[(2)] = inst_35335);

(statearr_35374_35419[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (13))){
var inst_35292 = figwheel.client.heads_up.clear.call(null);
var state_35358__$1 = state_35358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35358__$1,(16),inst_35292);
} else {
if((state_val_35359 === (22))){
var inst_35313 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35314 = figwheel.client.heads_up.append_warning_message.call(null,inst_35313);
var state_35358__$1 = state_35358;
var statearr_35375_35420 = state_35358__$1;
(statearr_35375_35420[(2)] = inst_35314);

(statearr_35375_35420[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (36))){
var inst_35344 = (state_35358[(2)]);
var state_35358__$1 = state_35358;
var statearr_35376_35421 = state_35358__$1;
(statearr_35376_35421[(2)] = inst_35344);

(statearr_35376_35421[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (29))){
var inst_35324 = (state_35358[(2)]);
var inst_35325 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35326 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35325);
var state_35358__$1 = (function (){var statearr_35377 = state_35358;
(statearr_35377[(9)] = inst_35324);

return statearr_35377;
})();
var statearr_35378_35422 = state_35358__$1;
(statearr_35378_35422[(2)] = inst_35326);

(statearr_35378_35422[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (6))){
var inst_35273 = (state_35358[(10)]);
var state_35358__$1 = state_35358;
var statearr_35379_35423 = state_35358__$1;
(statearr_35379_35423[(2)] = inst_35273);

(statearr_35379_35423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (28))){
var inst_35320 = (state_35358[(2)]);
var inst_35321 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35322 = figwheel.client.heads_up.display_warning.call(null,inst_35321);
var state_35358__$1 = (function (){var statearr_35380 = state_35358;
(statearr_35380[(11)] = inst_35320);

return statearr_35380;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35358__$1,(29),inst_35322);
} else {
if((state_val_35359 === (25))){
var inst_35318 = figwheel.client.heads_up.clear.call(null);
var state_35358__$1 = state_35358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35358__$1,(28),inst_35318);
} else {
if((state_val_35359 === (34))){
var inst_35339 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35358__$1 = state_35358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35358__$1,(37),inst_35339);
} else {
if((state_val_35359 === (17))){
var inst_35298 = (state_35358[(2)]);
var inst_35299 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35300 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35299);
var state_35358__$1 = (function (){var statearr_35381 = state_35358;
(statearr_35381[(12)] = inst_35298);

return statearr_35381;
})();
var statearr_35382_35424 = state_35358__$1;
(statearr_35382_35424[(2)] = inst_35300);

(statearr_35382_35424[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (3))){
var inst_35290 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35358__$1 = state_35358;
if(inst_35290){
var statearr_35383_35425 = state_35358__$1;
(statearr_35383_35425[(1)] = (13));

} else {
var statearr_35384_35426 = state_35358__$1;
(statearr_35384_35426[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (12))){
var inst_35286 = (state_35358[(2)]);
var state_35358__$1 = state_35358;
var statearr_35385_35427 = state_35358__$1;
(statearr_35385_35427[(2)] = inst_35286);

(statearr_35385_35427[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (2))){
var inst_35273 = (state_35358[(10)]);
var inst_35273__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35358__$1 = (function (){var statearr_35386 = state_35358;
(statearr_35386[(10)] = inst_35273__$1);

return statearr_35386;
})();
if(cljs.core.truth_(inst_35273__$1)){
var statearr_35387_35428 = state_35358__$1;
(statearr_35387_35428[(1)] = (5));

} else {
var statearr_35388_35429 = state_35358__$1;
(statearr_35388_35429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (23))){
var inst_35316 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35358__$1 = state_35358;
if(inst_35316){
var statearr_35389_35430 = state_35358__$1;
(statearr_35389_35430[(1)] = (25));

} else {
var statearr_35390_35431 = state_35358__$1;
(statearr_35390_35431[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (35))){
var state_35358__$1 = state_35358;
var statearr_35391_35432 = state_35358__$1;
(statearr_35391_35432[(2)] = null);

(statearr_35391_35432[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (19))){
var inst_35311 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35358__$1 = state_35358;
if(inst_35311){
var statearr_35392_35433 = state_35358__$1;
(statearr_35392_35433[(1)] = (22));

} else {
var statearr_35393_35434 = state_35358__$1;
(statearr_35393_35434[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (11))){
var inst_35282 = (state_35358[(2)]);
var state_35358__$1 = state_35358;
var statearr_35394_35435 = state_35358__$1;
(statearr_35394_35435[(2)] = inst_35282);

(statearr_35394_35435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (9))){
var inst_35284 = figwheel.client.heads_up.clear.call(null);
var state_35358__$1 = state_35358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35358__$1,(12),inst_35284);
} else {
if((state_val_35359 === (5))){
var inst_35275 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35358__$1 = state_35358;
var statearr_35395_35436 = state_35358__$1;
(statearr_35395_35436[(2)] = inst_35275);

(statearr_35395_35436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (14))){
var inst_35302 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35358__$1 = state_35358;
if(inst_35302){
var statearr_35396_35437 = state_35358__$1;
(statearr_35396_35437[(1)] = (18));

} else {
var statearr_35397_35438 = state_35358__$1;
(statearr_35397_35438[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (26))){
var inst_35328 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35358__$1 = state_35358;
if(inst_35328){
var statearr_35398_35439 = state_35358__$1;
(statearr_35398_35439[(1)] = (30));

} else {
var statearr_35399_35440 = state_35358__$1;
(statearr_35399_35440[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (16))){
var inst_35294 = (state_35358[(2)]);
var inst_35295 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35296 = figwheel.client.heads_up.display_exception.call(null,inst_35295);
var state_35358__$1 = (function (){var statearr_35400 = state_35358;
(statearr_35400[(13)] = inst_35294);

return statearr_35400;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35358__$1,(17),inst_35296);
} else {
if((state_val_35359 === (30))){
var inst_35330 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35331 = figwheel.client.heads_up.display_warning.call(null,inst_35330);
var state_35358__$1 = state_35358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35358__$1,(33),inst_35331);
} else {
if((state_val_35359 === (10))){
var inst_35288 = (state_35358[(2)]);
var state_35358__$1 = state_35358;
var statearr_35401_35441 = state_35358__$1;
(statearr_35401_35441[(2)] = inst_35288);

(statearr_35401_35441[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (18))){
var inst_35304 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35305 = figwheel.client.heads_up.display_exception.call(null,inst_35304);
var state_35358__$1 = state_35358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35358__$1,(21),inst_35305);
} else {
if((state_val_35359 === (37))){
var inst_35341 = (state_35358[(2)]);
var state_35358__$1 = state_35358;
var statearr_35402_35442 = state_35358__$1;
(statearr_35402_35442[(2)] = inst_35341);

(statearr_35402_35442[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (8))){
var inst_35280 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35358__$1 = state_35358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35358__$1,(11),inst_35280);
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
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29901__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29901__auto____0 = (function (){
var statearr_35403 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35403[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29901__auto__);

(statearr_35403[(1)] = (1));

return statearr_35403;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29901__auto____1 = (function (state_35358){
while(true){
var ret_value__29902__auto__ = (function (){try{while(true){
var result__29903__auto__ = switch__29900__auto__.call(null,state_35358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29903__auto__;
}
break;
}
}catch (e35404){if((e35404 instanceof Object)){
var ex__29904__auto__ = e35404;
var statearr_35405_35443 = state_35358;
(statearr_35405_35443[(5)] = ex__29904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35444 = state_35358;
state_35358 = G__35444;
continue;
} else {
return ret_value__29902__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29901__auto__ = function(state_35358){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29901__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29901__auto____1.call(this,state_35358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29901__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29901__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29901__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_35406 = f__29918__auto__.call(null);
(statearr_35406[(6)] = c__29917__auto__);

return statearr_35406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29919__auto__);
}));

return c__29917__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29917__auto___35473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29918__auto__ = (function (){var switch__29900__auto__ = (function (state_35459){
var state_val_35460 = (state_35459[(1)]);
if((state_val_35460 === (1))){
var state_35459__$1 = state_35459;
var statearr_35461_35474 = state_35459__$1;
(statearr_35461_35474[(2)] = null);

(statearr_35461_35474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35460 === (2))){
var state_35459__$1 = state_35459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35459__$1,(4),ch);
} else {
if((state_val_35460 === (3))){
var inst_35457 = (state_35459[(2)]);
var state_35459__$1 = state_35459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35459__$1,inst_35457);
} else {
if((state_val_35460 === (4))){
var inst_35447 = (state_35459[(7)]);
var inst_35447__$1 = (state_35459[(2)]);
var state_35459__$1 = (function (){var statearr_35462 = state_35459;
(statearr_35462[(7)] = inst_35447__$1);

return statearr_35462;
})();
if(cljs.core.truth_(inst_35447__$1)){
var statearr_35463_35475 = state_35459__$1;
(statearr_35463_35475[(1)] = (5));

} else {
var statearr_35464_35476 = state_35459__$1;
(statearr_35464_35476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35460 === (5))){
var inst_35447 = (state_35459[(7)]);
var inst_35449 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35447);
var state_35459__$1 = state_35459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35459__$1,(8),inst_35449);
} else {
if((state_val_35460 === (6))){
var state_35459__$1 = state_35459;
var statearr_35465_35477 = state_35459__$1;
(statearr_35465_35477[(2)] = null);

(statearr_35465_35477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35460 === (7))){
var inst_35455 = (state_35459[(2)]);
var state_35459__$1 = state_35459;
var statearr_35466_35478 = state_35459__$1;
(statearr_35466_35478[(2)] = inst_35455);

(statearr_35466_35478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35460 === (8))){
var inst_35451 = (state_35459[(2)]);
var state_35459__$1 = (function (){var statearr_35467 = state_35459;
(statearr_35467[(8)] = inst_35451);

return statearr_35467;
})();
var statearr_35468_35479 = state_35459__$1;
(statearr_35468_35479[(2)] = null);

(statearr_35468_35479[(1)] = (2));


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
var figwheel$client$heads_up_plugin_$_state_machine__29901__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29901__auto____0 = (function (){
var statearr_35469 = [null,null,null,null,null,null,null,null,null];
(statearr_35469[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29901__auto__);

(statearr_35469[(1)] = (1));

return statearr_35469;
});
var figwheel$client$heads_up_plugin_$_state_machine__29901__auto____1 = (function (state_35459){
while(true){
var ret_value__29902__auto__ = (function (){try{while(true){
var result__29903__auto__ = switch__29900__auto__.call(null,state_35459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29903__auto__;
}
break;
}
}catch (e35470){if((e35470 instanceof Object)){
var ex__29904__auto__ = e35470;
var statearr_35471_35480 = state_35459;
(statearr_35471_35480[(5)] = ex__29904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35481 = state_35459;
state_35459 = G__35481;
continue;
} else {
return ret_value__29902__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29901__auto__ = function(state_35459){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29901__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29901__auto____1.call(this,state_35459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29901__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29901__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29901__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_35472 = f__29918__auto__.call(null);
(statearr_35472[(6)] = c__29917__auto___35473);

return statearr_35472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29919__auto__);
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
var c__29917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29918__auto__ = (function (){var switch__29900__auto__ = (function (state_35487){
var state_val_35488 = (state_35487[(1)]);
if((state_val_35488 === (1))){
var inst_35482 = cljs.core.async.timeout.call(null,(3000));
var state_35487__$1 = state_35487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35487__$1,(2),inst_35482);
} else {
if((state_val_35488 === (2))){
var inst_35484 = (state_35487[(2)]);
var inst_35485 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35487__$1 = (function (){var statearr_35489 = state_35487;
(statearr_35489[(7)] = inst_35484);

return statearr_35489;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35487__$1,inst_35485);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29901__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29901__auto____0 = (function (){
var statearr_35490 = [null,null,null,null,null,null,null,null];
(statearr_35490[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29901__auto__);

(statearr_35490[(1)] = (1));

return statearr_35490;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29901__auto____1 = (function (state_35487){
while(true){
var ret_value__29902__auto__ = (function (){try{while(true){
var result__29903__auto__ = switch__29900__auto__.call(null,state_35487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29903__auto__;
}
break;
}
}catch (e35491){if((e35491 instanceof Object)){
var ex__29904__auto__ = e35491;
var statearr_35492_35494 = state_35487;
(statearr_35492_35494[(5)] = ex__29904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35495 = state_35487;
state_35487 = G__35495;
continue;
} else {
return ret_value__29902__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29901__auto__ = function(state_35487){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29901__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29901__auto____1.call(this,state_35487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29901__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29901__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29901__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_35493 = f__29918__auto__.call(null);
(statearr_35493[(6)] = c__29917__auto__);

return statearr_35493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29919__auto__);
}));

return c__29917__auto__;
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
var c__29917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29918__auto__ = (function (){var switch__29900__auto__ = (function (state_35502){
var state_val_35503 = (state_35502[(1)]);
if((state_val_35503 === (1))){
var inst_35496 = cljs.core.async.timeout.call(null,(2000));
var state_35502__$1 = state_35502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35502__$1,(2),inst_35496);
} else {
if((state_val_35503 === (2))){
var inst_35498 = (state_35502[(2)]);
var inst_35499 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_35500 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35499);
var state_35502__$1 = (function (){var statearr_35504 = state_35502;
(statearr_35504[(7)] = inst_35498);

return statearr_35504;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35502__$1,inst_35500);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29901__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29901__auto____0 = (function (){
var statearr_35505 = [null,null,null,null,null,null,null,null];
(statearr_35505[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29901__auto__);

(statearr_35505[(1)] = (1));

return statearr_35505;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29901__auto____1 = (function (state_35502){
while(true){
var ret_value__29902__auto__ = (function (){try{while(true){
var result__29903__auto__ = switch__29900__auto__.call(null,state_35502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29903__auto__;
}
break;
}
}catch (e35506){if((e35506 instanceof Object)){
var ex__29904__auto__ = e35506;
var statearr_35507_35509 = state_35502;
(statearr_35507_35509[(5)] = ex__29904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35510 = state_35502;
state_35502 = G__35510;
continue;
} else {
return ret_value__29902__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29901__auto__ = function(state_35502){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29901__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29901__auto____1.call(this,state_35502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29901__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29901__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29901__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_35508 = f__29918__auto__.call(null);
(statearr_35508[(6)] = c__29917__auto__);

return statearr_35508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29919__auto__);
}));

return c__29917__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35511){
var map__35512 = p__35511;
var map__35512__$1 = (((((!((map__35512 == null))))?(((((map__35512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35512):map__35512);
var file = cljs.core.get.call(null,map__35512__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35512__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35512__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35514 = "";
var G__35514__$1 = (cljs.core.truth_(file)?[G__35514,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__35514);
var G__35514__$2 = (cljs.core.truth_(line)?[G__35514__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__35514__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__35514__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__35514__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35515){
var map__35516 = p__35515;
var map__35516__$1 = (((((!((map__35516 == null))))?(((((map__35516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35516):map__35516);
var ed = map__35516__$1;
var exception_data = cljs.core.get.call(null,map__35516__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35516__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_35519 = (function (){var G__35518 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35518)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__35518;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_35519);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35520){
var map__35521 = p__35520;
var map__35521__$1 = (((((!((map__35521 == null))))?(((((map__35521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35521):map__35521);
var w = map__35521__$1;
var message = cljs.core.get.call(null,map__35521__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__35523 = cljs.core.seq.call(null,plugins);
var chunk__35524 = null;
var count__35525 = (0);
var i__35526 = (0);
while(true){
if((i__35526 < count__35525)){
var vec__35533 = cljs.core._nth.call(null,chunk__35524,i__35526);
var k = cljs.core.nth.call(null,vec__35533,(0),null);
var plugin = cljs.core.nth.call(null,vec__35533,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35539 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35523,chunk__35524,count__35525,i__35526,pl_35539,vec__35533,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35539.call(null,msg_hist);
});})(seq__35523,chunk__35524,count__35525,i__35526,pl_35539,vec__35533,k,plugin))
);
} else {
}


var G__35540 = seq__35523;
var G__35541 = chunk__35524;
var G__35542 = count__35525;
var G__35543 = (i__35526 + (1));
seq__35523 = G__35540;
chunk__35524 = G__35541;
count__35525 = G__35542;
i__35526 = G__35543;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__35523);
if(temp__5735__auto__){
var seq__35523__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35523__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__35523__$1);
var G__35544 = cljs.core.chunk_rest.call(null,seq__35523__$1);
var G__35545 = c__4556__auto__;
var G__35546 = cljs.core.count.call(null,c__4556__auto__);
var G__35547 = (0);
seq__35523 = G__35544;
chunk__35524 = G__35545;
count__35525 = G__35546;
i__35526 = G__35547;
continue;
} else {
var vec__35536 = cljs.core.first.call(null,seq__35523__$1);
var k = cljs.core.nth.call(null,vec__35536,(0),null);
var plugin = cljs.core.nth.call(null,vec__35536,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35548 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35523,chunk__35524,count__35525,i__35526,pl_35548,vec__35536,k,plugin,seq__35523__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35548.call(null,msg_hist);
});})(seq__35523,chunk__35524,count__35525,i__35526,pl_35548,vec__35536,k,plugin,seq__35523__$1,temp__5735__auto__))
);
} else {
}


var G__35549 = cljs.core.next.call(null,seq__35523__$1);
var G__35550 = null;
var G__35551 = (0);
var G__35552 = (0);
seq__35523 = G__35549;
chunk__35524 = G__35550;
count__35525 = G__35551;
i__35526 = G__35552;
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
var G__35554 = arguments.length;
switch (G__35554) {
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

var seq__35555_35560 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35556_35561 = null;
var count__35557_35562 = (0);
var i__35558_35563 = (0);
while(true){
if((i__35558_35563 < count__35557_35562)){
var msg_35564 = cljs.core._nth.call(null,chunk__35556_35561,i__35558_35563);
figwheel.client.socket.handle_incoming_message.call(null,msg_35564);


var G__35565 = seq__35555_35560;
var G__35566 = chunk__35556_35561;
var G__35567 = count__35557_35562;
var G__35568 = (i__35558_35563 + (1));
seq__35555_35560 = G__35565;
chunk__35556_35561 = G__35566;
count__35557_35562 = G__35567;
i__35558_35563 = G__35568;
continue;
} else {
var temp__5735__auto___35569 = cljs.core.seq.call(null,seq__35555_35560);
if(temp__5735__auto___35569){
var seq__35555_35570__$1 = temp__5735__auto___35569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35555_35570__$1)){
var c__4556__auto___35571 = cljs.core.chunk_first.call(null,seq__35555_35570__$1);
var G__35572 = cljs.core.chunk_rest.call(null,seq__35555_35570__$1);
var G__35573 = c__4556__auto___35571;
var G__35574 = cljs.core.count.call(null,c__4556__auto___35571);
var G__35575 = (0);
seq__35555_35560 = G__35572;
chunk__35556_35561 = G__35573;
count__35557_35562 = G__35574;
i__35558_35563 = G__35575;
continue;
} else {
var msg_35576 = cljs.core.first.call(null,seq__35555_35570__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35576);


var G__35577 = cljs.core.next.call(null,seq__35555_35570__$1);
var G__35578 = null;
var G__35579 = (0);
var G__35580 = (0);
seq__35555_35560 = G__35577;
chunk__35556_35561 = G__35578;
count__35557_35562 = G__35579;
i__35558_35563 = G__35580;
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
var len__4736__auto___35585 = arguments.length;
var i__4737__auto___35586 = (0);
while(true){
if((i__4737__auto___35586 < len__4736__auto___35585)){
args__4742__auto__.push((arguments[i__4737__auto___35586]));

var G__35587 = (i__4737__auto___35586 + (1));
i__4737__auto___35586 = G__35587;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35582){
var map__35583 = p__35582;
var map__35583__$1 = (((((!((map__35583 == null))))?(((((map__35583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35583):map__35583);
var opts = map__35583__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35581){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35581));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35588){if((e35588 instanceof Error)){
var e = e35588;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35588;

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

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__35589){
var map__35590 = p__35589;
var map__35590__$1 = (((((!((map__35590 == null))))?(((((map__35590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35590):map__35590);
var msg_name = cljs.core.get.call(null,map__35590__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1602507667077
