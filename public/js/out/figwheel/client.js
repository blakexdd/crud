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
}catch (e34891){if((e34891 instanceof Error)){
var e = e34891;
return "Error: Unable to stringify";
} else {
throw e34891;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__34894 = arguments.length;
switch (G__34894) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__34892_SHARP_){
if(typeof p1__34892_SHARP_ === 'string'){
return p1__34892_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__34892_SHARP_);
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
var len__4736__auto___34897 = arguments.length;
var i__4737__auto___34898 = (0);
while(true){
if((i__4737__auto___34898 < len__4736__auto___34897)){
args__4742__auto__.push((arguments[i__4737__auto___34898]));

var G__34899 = (i__4737__auto___34898 + (1));
i__4737__auto___34898 = G__34899;
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
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq34896){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34896));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34901 = arguments.length;
var i__4737__auto___34902 = (0);
while(true){
if((i__4737__auto___34902 < len__4736__auto___34901)){
args__4742__auto__.push((arguments[i__4737__auto___34902]));

var G__34903 = (i__4737__auto___34902 + (1));
i__4737__auto___34902 = G__34903;
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
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq34900){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34900));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34904){
var map__34905 = p__34904;
var map__34905__$1 = (((((!((map__34905 == null))))?(((((map__34905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34905):map__34905);
var message = cljs.core.get.call(null,map__34905__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34905__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__28918__auto___34984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = (function (state_34956){
var state_val_34957 = (state_34956[(1)]);
if((state_val_34957 === (7))){
var inst_34952 = (state_34956[(2)]);
var state_34956__$1 = state_34956;
var statearr_34958_34985 = state_34956__$1;
(statearr_34958_34985[(2)] = inst_34952);

(statearr_34958_34985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (1))){
var state_34956__$1 = state_34956;
var statearr_34959_34986 = state_34956__$1;
(statearr_34959_34986[(2)] = null);

(statearr_34959_34986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (4))){
var inst_34909 = (state_34956[(7)]);
var inst_34909__$1 = (state_34956[(2)]);
var state_34956__$1 = (function (){var statearr_34960 = state_34956;
(statearr_34960[(7)] = inst_34909__$1);

return statearr_34960;
})();
if(cljs.core.truth_(inst_34909__$1)){
var statearr_34961_34987 = state_34956__$1;
(statearr_34961_34987[(1)] = (5));

} else {
var statearr_34962_34988 = state_34956__$1;
(statearr_34962_34988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (15))){
var inst_34916 = (state_34956[(8)]);
var inst_34931 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34916);
var inst_34932 = cljs.core.first.call(null,inst_34931);
var inst_34933 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34932);
var inst_34934 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34933)].join('');
var inst_34935 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34934);
var state_34956__$1 = state_34956;
var statearr_34963_34989 = state_34956__$1;
(statearr_34963_34989[(2)] = inst_34935);

(statearr_34963_34989[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (13))){
var inst_34940 = (state_34956[(2)]);
var state_34956__$1 = state_34956;
var statearr_34964_34990 = state_34956__$1;
(statearr_34964_34990[(2)] = inst_34940);

(statearr_34964_34990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (6))){
var state_34956__$1 = state_34956;
var statearr_34965_34991 = state_34956__$1;
(statearr_34965_34991[(2)] = null);

(statearr_34965_34991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (17))){
var inst_34938 = (state_34956[(2)]);
var state_34956__$1 = state_34956;
var statearr_34966_34992 = state_34956__$1;
(statearr_34966_34992[(2)] = inst_34938);

(statearr_34966_34992[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (3))){
var inst_34954 = (state_34956[(2)]);
var state_34956__$1 = state_34956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34956__$1,inst_34954);
} else {
if((state_val_34957 === (12))){
var inst_34915 = (state_34956[(9)]);
var inst_34929 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34915,opts);
var state_34956__$1 = state_34956;
if(inst_34929){
var statearr_34967_34993 = state_34956__$1;
(statearr_34967_34993[(1)] = (15));

} else {
var statearr_34968_34994 = state_34956__$1;
(statearr_34968_34994[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (2))){
var state_34956__$1 = state_34956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34956__$1,(4),ch);
} else {
if((state_val_34957 === (11))){
var inst_34916 = (state_34956[(8)]);
var inst_34921 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34922 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34916);
var inst_34923 = cljs.core.async.timeout.call(null,(1000));
var inst_34924 = [inst_34922,inst_34923];
var inst_34925 = (new cljs.core.PersistentVector(null,2,(5),inst_34921,inst_34924,null));
var state_34956__$1 = state_34956;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34956__$1,(14),inst_34925);
} else {
if((state_val_34957 === (9))){
var inst_34916 = (state_34956[(8)]);
var inst_34942 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34943 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34916);
var inst_34944 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34943);
var inst_34945 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34944)].join('');
var inst_34946 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34945);
var state_34956__$1 = (function (){var statearr_34969 = state_34956;
(statearr_34969[(10)] = inst_34942);

return statearr_34969;
})();
var statearr_34970_34995 = state_34956__$1;
(statearr_34970_34995[(2)] = inst_34946);

(statearr_34970_34995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (5))){
var inst_34909 = (state_34956[(7)]);
var inst_34911 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34912 = (new cljs.core.PersistentArrayMap(null,2,inst_34911,null));
var inst_34913 = (new cljs.core.PersistentHashSet(null,inst_34912,null));
var inst_34914 = figwheel.client.focus_msgs.call(null,inst_34913,inst_34909);
var inst_34915 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34914);
var inst_34916 = cljs.core.first.call(null,inst_34914);
var inst_34917 = figwheel.client.autoload_QMARK_.call(null);
var state_34956__$1 = (function (){var statearr_34971 = state_34956;
(statearr_34971[(9)] = inst_34915);

(statearr_34971[(8)] = inst_34916);

return statearr_34971;
})();
if(cljs.core.truth_(inst_34917)){
var statearr_34972_34996 = state_34956__$1;
(statearr_34972_34996[(1)] = (8));

} else {
var statearr_34973_34997 = state_34956__$1;
(statearr_34973_34997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (14))){
var inst_34927 = (state_34956[(2)]);
var state_34956__$1 = state_34956;
var statearr_34974_34998 = state_34956__$1;
(statearr_34974_34998[(2)] = inst_34927);

(statearr_34974_34998[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (16))){
var state_34956__$1 = state_34956;
var statearr_34975_34999 = state_34956__$1;
(statearr_34975_34999[(2)] = null);

(statearr_34975_34999[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (10))){
var inst_34948 = (state_34956[(2)]);
var state_34956__$1 = (function (){var statearr_34976 = state_34956;
(statearr_34976[(11)] = inst_34948);

return statearr_34976;
})();
var statearr_34977_35000 = state_34956__$1;
(statearr_34977_35000[(2)] = null);

(statearr_34977_35000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (8))){
var inst_34915 = (state_34956[(9)]);
var inst_34919 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34915,opts);
var state_34956__$1 = state_34956;
if(cljs.core.truth_(inst_34919)){
var statearr_34978_35001 = state_34956__$1;
(statearr_34978_35001[(1)] = (11));

} else {
var statearr_34979_35002 = state_34956__$1;
(statearr_34979_35002[(1)] = (12));

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
var figwheel$client$file_reloader_plugin_$_state_machine__28824__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28824__auto____0 = (function (){
var statearr_34980 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34980[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28824__auto__);

(statearr_34980[(1)] = (1));

return statearr_34980;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28824__auto____1 = (function (state_34956){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_34956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e34981){if((e34981 instanceof Object)){
var ex__28827__auto__ = e34981;
var statearr_34982_35003 = state_34956;
(statearr_34982_35003[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35004 = state_34956;
state_34956 = G__35004;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28824__auto__ = function(state_34956){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28824__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28824__auto____1.call(this,state_34956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28824__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28824__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28824__auto__;
})()
})();
var state__28920__auto__ = (function (){var statearr_34983 = f__28919__auto__.call(null);
(statearr_34983[(6)] = c__28918__auto___34984);

return statearr_34983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35005_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35005_SHARP_));
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
var base_path_35011 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35007 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35008 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35009 = true;
var _STAR_print_fn_STAR__temp_val__35010 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35009);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35010);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35008);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35007);
}}catch (e35006){if((e35006 instanceof Error)){
var e = e35006;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35011], null));
} else {
var e = e35006;
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35012){
var map__35013 = p__35012;
var map__35013__$1 = (((((!((map__35013 == null))))?(((((map__35013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35013):map__35013);
var opts = map__35013__$1;
var build_id = cljs.core.get.call(null,map__35013__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__35015){
var vec__35016 = p__35015;
var seq__35017 = cljs.core.seq.call(null,vec__35016);
var first__35018 = cljs.core.first.call(null,seq__35017);
var seq__35017__$1 = cljs.core.next.call(null,seq__35017);
var map__35019 = first__35018;
var map__35019__$1 = (((((!((map__35019 == null))))?(((((map__35019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35019):map__35019);
var msg = map__35019__$1;
var msg_name = cljs.core.get.call(null,map__35019__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35017__$1;
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
return (function (p__35021){
var vec__35022 = p__35021;
var seq__35023 = cljs.core.seq.call(null,vec__35022);
var first__35024 = cljs.core.first.call(null,seq__35023);
var seq__35023__$1 = cljs.core.next.call(null,seq__35023);
var map__35025 = first__35024;
var map__35025__$1 = (((((!((map__35025 == null))))?(((((map__35025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35025):map__35025);
var msg = map__35025__$1;
var msg_name = cljs.core.get.call(null,map__35025__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35023__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35027){
var map__35028 = p__35027;
var map__35028__$1 = (((((!((map__35028 == null))))?(((((map__35028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35028):map__35028);
var on_compile_warning = cljs.core.get.call(null,map__35028__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35028__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__35030){
var vec__35031 = p__35030;
var seq__35032 = cljs.core.seq.call(null,vec__35031);
var first__35033 = cljs.core.first.call(null,seq__35032);
var seq__35032__$1 = cljs.core.next.call(null,seq__35032);
var map__35034 = first__35033;
var map__35034__$1 = (((((!((map__35034 == null))))?(((((map__35034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35034):map__35034);
var msg = map__35034__$1;
var msg_name = cljs.core.get.call(null,map__35034__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35032__$1;
var pred__35036 = cljs.core._EQ_;
var expr__35037 = msg_name;
if(cljs.core.truth_(pred__35036.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35037))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35036.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35037))){
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
var c__28918__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = (function (state_35126){
var state_val_35127 = (state_35126[(1)]);
if((state_val_35127 === (7))){
var inst_35046 = (state_35126[(2)]);
var state_35126__$1 = state_35126;
if(cljs.core.truth_(inst_35046)){
var statearr_35128_35175 = state_35126__$1;
(statearr_35128_35175[(1)] = (8));

} else {
var statearr_35129_35176 = state_35126__$1;
(statearr_35129_35176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (20))){
var inst_35120 = (state_35126[(2)]);
var state_35126__$1 = state_35126;
var statearr_35130_35177 = state_35126__$1;
(statearr_35130_35177[(2)] = inst_35120);

(statearr_35130_35177[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (27))){
var inst_35116 = (state_35126[(2)]);
var state_35126__$1 = state_35126;
var statearr_35131_35178 = state_35126__$1;
(statearr_35131_35178[(2)] = inst_35116);

(statearr_35131_35178[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (1))){
var inst_35039 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35126__$1 = state_35126;
if(cljs.core.truth_(inst_35039)){
var statearr_35132_35179 = state_35126__$1;
(statearr_35132_35179[(1)] = (2));

} else {
var statearr_35133_35180 = state_35126__$1;
(statearr_35133_35180[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (24))){
var inst_35118 = (state_35126[(2)]);
var state_35126__$1 = state_35126;
var statearr_35134_35181 = state_35126__$1;
(statearr_35134_35181[(2)] = inst_35118);

(statearr_35134_35181[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (4))){
var inst_35124 = (state_35126[(2)]);
var state_35126__$1 = state_35126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35126__$1,inst_35124);
} else {
if((state_val_35127 === (15))){
var inst_35122 = (state_35126[(2)]);
var state_35126__$1 = state_35126;
var statearr_35135_35182 = state_35126__$1;
(statearr_35135_35182[(2)] = inst_35122);

(statearr_35135_35182[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (21))){
var inst_35075 = (state_35126[(2)]);
var inst_35076 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35077 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35076);
var state_35126__$1 = (function (){var statearr_35136 = state_35126;
(statearr_35136[(7)] = inst_35075);

return statearr_35136;
})();
var statearr_35137_35183 = state_35126__$1;
(statearr_35137_35183[(2)] = inst_35077);

(statearr_35137_35183[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (31))){
var inst_35105 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35126__$1 = state_35126;
if(inst_35105){
var statearr_35138_35184 = state_35126__$1;
(statearr_35138_35184[(1)] = (34));

} else {
var statearr_35139_35185 = state_35126__$1;
(statearr_35139_35185[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (32))){
var inst_35114 = (state_35126[(2)]);
var state_35126__$1 = state_35126;
var statearr_35140_35186 = state_35126__$1;
(statearr_35140_35186[(2)] = inst_35114);

(statearr_35140_35186[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (33))){
var inst_35101 = (state_35126[(2)]);
var inst_35102 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35103 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35102);
var state_35126__$1 = (function (){var statearr_35141 = state_35126;
(statearr_35141[(8)] = inst_35101);

return statearr_35141;
})();
var statearr_35142_35187 = state_35126__$1;
(statearr_35142_35187[(2)] = inst_35103);

(statearr_35142_35187[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (13))){
var inst_35060 = figwheel.client.heads_up.clear.call(null);
var state_35126__$1 = state_35126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35126__$1,(16),inst_35060);
} else {
if((state_val_35127 === (22))){
var inst_35081 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35082 = figwheel.client.heads_up.append_warning_message.call(null,inst_35081);
var state_35126__$1 = state_35126;
var statearr_35143_35188 = state_35126__$1;
(statearr_35143_35188[(2)] = inst_35082);

(statearr_35143_35188[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (36))){
var inst_35112 = (state_35126[(2)]);
var state_35126__$1 = state_35126;
var statearr_35144_35189 = state_35126__$1;
(statearr_35144_35189[(2)] = inst_35112);

(statearr_35144_35189[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (29))){
var inst_35092 = (state_35126[(2)]);
var inst_35093 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35094 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35093);
var state_35126__$1 = (function (){var statearr_35145 = state_35126;
(statearr_35145[(9)] = inst_35092);

return statearr_35145;
})();
var statearr_35146_35190 = state_35126__$1;
(statearr_35146_35190[(2)] = inst_35094);

(statearr_35146_35190[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (6))){
var inst_35041 = (state_35126[(10)]);
var state_35126__$1 = state_35126;
var statearr_35147_35191 = state_35126__$1;
(statearr_35147_35191[(2)] = inst_35041);

(statearr_35147_35191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (28))){
var inst_35088 = (state_35126[(2)]);
var inst_35089 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35090 = figwheel.client.heads_up.display_warning.call(null,inst_35089);
var state_35126__$1 = (function (){var statearr_35148 = state_35126;
(statearr_35148[(11)] = inst_35088);

return statearr_35148;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35126__$1,(29),inst_35090);
} else {
if((state_val_35127 === (25))){
var inst_35086 = figwheel.client.heads_up.clear.call(null);
var state_35126__$1 = state_35126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35126__$1,(28),inst_35086);
} else {
if((state_val_35127 === (34))){
var inst_35107 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35126__$1 = state_35126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35126__$1,(37),inst_35107);
} else {
if((state_val_35127 === (17))){
var inst_35066 = (state_35126[(2)]);
var inst_35067 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35068 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35067);
var state_35126__$1 = (function (){var statearr_35149 = state_35126;
(statearr_35149[(12)] = inst_35066);

return statearr_35149;
})();
var statearr_35150_35192 = state_35126__$1;
(statearr_35150_35192[(2)] = inst_35068);

(statearr_35150_35192[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (3))){
var inst_35058 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35126__$1 = state_35126;
if(inst_35058){
var statearr_35151_35193 = state_35126__$1;
(statearr_35151_35193[(1)] = (13));

} else {
var statearr_35152_35194 = state_35126__$1;
(statearr_35152_35194[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (12))){
var inst_35054 = (state_35126[(2)]);
var state_35126__$1 = state_35126;
var statearr_35153_35195 = state_35126__$1;
(statearr_35153_35195[(2)] = inst_35054);

(statearr_35153_35195[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (2))){
var inst_35041 = (state_35126[(10)]);
var inst_35041__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35126__$1 = (function (){var statearr_35154 = state_35126;
(statearr_35154[(10)] = inst_35041__$1);

return statearr_35154;
})();
if(cljs.core.truth_(inst_35041__$1)){
var statearr_35155_35196 = state_35126__$1;
(statearr_35155_35196[(1)] = (5));

} else {
var statearr_35156_35197 = state_35126__$1;
(statearr_35156_35197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (23))){
var inst_35084 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35126__$1 = state_35126;
if(inst_35084){
var statearr_35157_35198 = state_35126__$1;
(statearr_35157_35198[(1)] = (25));

} else {
var statearr_35158_35199 = state_35126__$1;
(statearr_35158_35199[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (35))){
var state_35126__$1 = state_35126;
var statearr_35159_35200 = state_35126__$1;
(statearr_35159_35200[(2)] = null);

(statearr_35159_35200[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (19))){
var inst_35079 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35126__$1 = state_35126;
if(inst_35079){
var statearr_35160_35201 = state_35126__$1;
(statearr_35160_35201[(1)] = (22));

} else {
var statearr_35161_35202 = state_35126__$1;
(statearr_35161_35202[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (11))){
var inst_35050 = (state_35126[(2)]);
var state_35126__$1 = state_35126;
var statearr_35162_35203 = state_35126__$1;
(statearr_35162_35203[(2)] = inst_35050);

(statearr_35162_35203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (9))){
var inst_35052 = figwheel.client.heads_up.clear.call(null);
var state_35126__$1 = state_35126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35126__$1,(12),inst_35052);
} else {
if((state_val_35127 === (5))){
var inst_35043 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35126__$1 = state_35126;
var statearr_35163_35204 = state_35126__$1;
(statearr_35163_35204[(2)] = inst_35043);

(statearr_35163_35204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (14))){
var inst_35070 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35126__$1 = state_35126;
if(inst_35070){
var statearr_35164_35205 = state_35126__$1;
(statearr_35164_35205[(1)] = (18));

} else {
var statearr_35165_35206 = state_35126__$1;
(statearr_35165_35206[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (26))){
var inst_35096 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35126__$1 = state_35126;
if(inst_35096){
var statearr_35166_35207 = state_35126__$1;
(statearr_35166_35207[(1)] = (30));

} else {
var statearr_35167_35208 = state_35126__$1;
(statearr_35167_35208[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (16))){
var inst_35062 = (state_35126[(2)]);
var inst_35063 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35064 = figwheel.client.heads_up.display_exception.call(null,inst_35063);
var state_35126__$1 = (function (){var statearr_35168 = state_35126;
(statearr_35168[(13)] = inst_35062);

return statearr_35168;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35126__$1,(17),inst_35064);
} else {
if((state_val_35127 === (30))){
var inst_35098 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35099 = figwheel.client.heads_up.display_warning.call(null,inst_35098);
var state_35126__$1 = state_35126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35126__$1,(33),inst_35099);
} else {
if((state_val_35127 === (10))){
var inst_35056 = (state_35126[(2)]);
var state_35126__$1 = state_35126;
var statearr_35169_35209 = state_35126__$1;
(statearr_35169_35209[(2)] = inst_35056);

(statearr_35169_35209[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (18))){
var inst_35072 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35073 = figwheel.client.heads_up.display_exception.call(null,inst_35072);
var state_35126__$1 = state_35126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35126__$1,(21),inst_35073);
} else {
if((state_val_35127 === (37))){
var inst_35109 = (state_35126[(2)]);
var state_35126__$1 = state_35126;
var statearr_35170_35210 = state_35126__$1;
(statearr_35170_35210[(2)] = inst_35109);

(statearr_35170_35210[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (8))){
var inst_35048 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35126__$1 = state_35126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35126__$1,(11),inst_35048);
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
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28824__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28824__auto____0 = (function (){
var statearr_35171 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35171[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28824__auto__);

(statearr_35171[(1)] = (1));

return statearr_35171;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28824__auto____1 = (function (state_35126){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_35126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e35172){if((e35172 instanceof Object)){
var ex__28827__auto__ = e35172;
var statearr_35173_35211 = state_35126;
(statearr_35173_35211[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35212 = state_35126;
state_35126 = G__35212;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28824__auto__ = function(state_35126){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28824__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28824__auto____1.call(this,state_35126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28824__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28824__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28824__auto__;
})()
})();
var state__28920__auto__ = (function (){var statearr_35174 = f__28919__auto__.call(null);
(statearr_35174[(6)] = c__28918__auto__);

return statearr_35174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
}));

return c__28918__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28918__auto___35241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = (function (state_35227){
var state_val_35228 = (state_35227[(1)]);
if((state_val_35228 === (1))){
var state_35227__$1 = state_35227;
var statearr_35229_35242 = state_35227__$1;
(statearr_35229_35242[(2)] = null);

(statearr_35229_35242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (2))){
var state_35227__$1 = state_35227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35227__$1,(4),ch);
} else {
if((state_val_35228 === (3))){
var inst_35225 = (state_35227[(2)]);
var state_35227__$1 = state_35227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35227__$1,inst_35225);
} else {
if((state_val_35228 === (4))){
var inst_35215 = (state_35227[(7)]);
var inst_35215__$1 = (state_35227[(2)]);
var state_35227__$1 = (function (){var statearr_35230 = state_35227;
(statearr_35230[(7)] = inst_35215__$1);

return statearr_35230;
})();
if(cljs.core.truth_(inst_35215__$1)){
var statearr_35231_35243 = state_35227__$1;
(statearr_35231_35243[(1)] = (5));

} else {
var statearr_35232_35244 = state_35227__$1;
(statearr_35232_35244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (5))){
var inst_35215 = (state_35227[(7)]);
var inst_35217 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35215);
var state_35227__$1 = state_35227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35227__$1,(8),inst_35217);
} else {
if((state_val_35228 === (6))){
var state_35227__$1 = state_35227;
var statearr_35233_35245 = state_35227__$1;
(statearr_35233_35245[(2)] = null);

(statearr_35233_35245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (7))){
var inst_35223 = (state_35227[(2)]);
var state_35227__$1 = state_35227;
var statearr_35234_35246 = state_35227__$1;
(statearr_35234_35246[(2)] = inst_35223);

(statearr_35234_35246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (8))){
var inst_35219 = (state_35227[(2)]);
var state_35227__$1 = (function (){var statearr_35235 = state_35227;
(statearr_35235[(8)] = inst_35219);

return statearr_35235;
})();
var statearr_35236_35247 = state_35227__$1;
(statearr_35236_35247[(2)] = null);

(statearr_35236_35247[(1)] = (2));


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
var figwheel$client$heads_up_plugin_$_state_machine__28824__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28824__auto____0 = (function (){
var statearr_35237 = [null,null,null,null,null,null,null,null,null];
(statearr_35237[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28824__auto__);

(statearr_35237[(1)] = (1));

return statearr_35237;
});
var figwheel$client$heads_up_plugin_$_state_machine__28824__auto____1 = (function (state_35227){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_35227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e35238){if((e35238 instanceof Object)){
var ex__28827__auto__ = e35238;
var statearr_35239_35248 = state_35227;
(statearr_35239_35248[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35249 = state_35227;
state_35227 = G__35249;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28824__auto__ = function(state_35227){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28824__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28824__auto____1.call(this,state_35227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28824__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28824__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28824__auto__;
})()
})();
var state__28920__auto__ = (function (){var statearr_35240 = f__28919__auto__.call(null);
(statearr_35240[(6)] = c__28918__auto___35241);

return statearr_35240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
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
var c__28918__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = (function (state_35255){
var state_val_35256 = (state_35255[(1)]);
if((state_val_35256 === (1))){
var inst_35250 = cljs.core.async.timeout.call(null,(3000));
var state_35255__$1 = state_35255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35255__$1,(2),inst_35250);
} else {
if((state_val_35256 === (2))){
var inst_35252 = (state_35255[(2)]);
var inst_35253 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35255__$1 = (function (){var statearr_35257 = state_35255;
(statearr_35257[(7)] = inst_35252);

return statearr_35257;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35255__$1,inst_35253);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28824__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28824__auto____0 = (function (){
var statearr_35258 = [null,null,null,null,null,null,null,null];
(statearr_35258[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28824__auto__);

(statearr_35258[(1)] = (1));

return statearr_35258;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28824__auto____1 = (function (state_35255){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_35255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e35259){if((e35259 instanceof Object)){
var ex__28827__auto__ = e35259;
var statearr_35260_35262 = state_35255;
(statearr_35260_35262[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35263 = state_35255;
state_35255 = G__35263;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28824__auto__ = function(state_35255){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28824__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28824__auto____1.call(this,state_35255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28824__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28824__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28824__auto__;
})()
})();
var state__28920__auto__ = (function (){var statearr_35261 = f__28919__auto__.call(null);
(statearr_35261[(6)] = c__28918__auto__);

return statearr_35261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
}));

return c__28918__auto__;
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
var c__28918__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = (function (state_35270){
var state_val_35271 = (state_35270[(1)]);
if((state_val_35271 === (1))){
var inst_35264 = cljs.core.async.timeout.call(null,(2000));
var state_35270__$1 = state_35270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35270__$1,(2),inst_35264);
} else {
if((state_val_35271 === (2))){
var inst_35266 = (state_35270[(2)]);
var inst_35267 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_35268 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35267);
var state_35270__$1 = (function (){var statearr_35272 = state_35270;
(statearr_35272[(7)] = inst_35266);

return statearr_35272;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35270__$1,inst_35268);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28824__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28824__auto____0 = (function (){
var statearr_35273 = [null,null,null,null,null,null,null,null];
(statearr_35273[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28824__auto__);

(statearr_35273[(1)] = (1));

return statearr_35273;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28824__auto____1 = (function (state_35270){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_35270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e35274){if((e35274 instanceof Object)){
var ex__28827__auto__ = e35274;
var statearr_35275_35277 = state_35270;
(statearr_35275_35277[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35278 = state_35270;
state_35270 = G__35278;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28824__auto__ = function(state_35270){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28824__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28824__auto____1.call(this,state_35270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28824__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28824__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28824__auto__;
})()
})();
var state__28920__auto__ = (function (){var statearr_35276 = f__28919__auto__.call(null);
(statearr_35276[(6)] = c__28918__auto__);

return statearr_35276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
}));

return c__28918__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35279){
var map__35280 = p__35279;
var map__35280__$1 = (((((!((map__35280 == null))))?(((((map__35280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35280):map__35280);
var file = cljs.core.get.call(null,map__35280__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35280__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35280__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35282 = "";
var G__35282__$1 = (cljs.core.truth_(file)?[G__35282,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__35282);
var G__35282__$2 = (cljs.core.truth_(line)?[G__35282__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__35282__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__35282__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__35282__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35283){
var map__35284 = p__35283;
var map__35284__$1 = (((((!((map__35284 == null))))?(((((map__35284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35284):map__35284);
var ed = map__35284__$1;
var exception_data = cljs.core.get.call(null,map__35284__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35284__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_35287 = (function (){var G__35286 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35286)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__35286;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_35287);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35288){
var map__35289 = p__35288;
var map__35289__$1 = (((((!((map__35289 == null))))?(((((map__35289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35289):map__35289);
var w = map__35289__$1;
var message = cljs.core.get.call(null,map__35289__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__35291 = cljs.core.seq.call(null,plugins);
var chunk__35292 = null;
var count__35293 = (0);
var i__35294 = (0);
while(true){
if((i__35294 < count__35293)){
var vec__35301 = cljs.core._nth.call(null,chunk__35292,i__35294);
var k = cljs.core.nth.call(null,vec__35301,(0),null);
var plugin = cljs.core.nth.call(null,vec__35301,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35307 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35291,chunk__35292,count__35293,i__35294,pl_35307,vec__35301,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35307.call(null,msg_hist);
});})(seq__35291,chunk__35292,count__35293,i__35294,pl_35307,vec__35301,k,plugin))
);
} else {
}


var G__35308 = seq__35291;
var G__35309 = chunk__35292;
var G__35310 = count__35293;
var G__35311 = (i__35294 + (1));
seq__35291 = G__35308;
chunk__35292 = G__35309;
count__35293 = G__35310;
i__35294 = G__35311;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__35291);
if(temp__5735__auto__){
var seq__35291__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35291__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__35291__$1);
var G__35312 = cljs.core.chunk_rest.call(null,seq__35291__$1);
var G__35313 = c__4556__auto__;
var G__35314 = cljs.core.count.call(null,c__4556__auto__);
var G__35315 = (0);
seq__35291 = G__35312;
chunk__35292 = G__35313;
count__35293 = G__35314;
i__35294 = G__35315;
continue;
} else {
var vec__35304 = cljs.core.first.call(null,seq__35291__$1);
var k = cljs.core.nth.call(null,vec__35304,(0),null);
var plugin = cljs.core.nth.call(null,vec__35304,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35316 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35291,chunk__35292,count__35293,i__35294,pl_35316,vec__35304,k,plugin,seq__35291__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35316.call(null,msg_hist);
});})(seq__35291,chunk__35292,count__35293,i__35294,pl_35316,vec__35304,k,plugin,seq__35291__$1,temp__5735__auto__))
);
} else {
}


var G__35317 = cljs.core.next.call(null,seq__35291__$1);
var G__35318 = null;
var G__35319 = (0);
var G__35320 = (0);
seq__35291 = G__35317;
chunk__35292 = G__35318;
count__35293 = G__35319;
i__35294 = G__35320;
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
var G__35322 = arguments.length;
switch (G__35322) {
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

var seq__35323_35328 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35324_35329 = null;
var count__35325_35330 = (0);
var i__35326_35331 = (0);
while(true){
if((i__35326_35331 < count__35325_35330)){
var msg_35332 = cljs.core._nth.call(null,chunk__35324_35329,i__35326_35331);
figwheel.client.socket.handle_incoming_message.call(null,msg_35332);


var G__35333 = seq__35323_35328;
var G__35334 = chunk__35324_35329;
var G__35335 = count__35325_35330;
var G__35336 = (i__35326_35331 + (1));
seq__35323_35328 = G__35333;
chunk__35324_35329 = G__35334;
count__35325_35330 = G__35335;
i__35326_35331 = G__35336;
continue;
} else {
var temp__5735__auto___35337 = cljs.core.seq.call(null,seq__35323_35328);
if(temp__5735__auto___35337){
var seq__35323_35338__$1 = temp__5735__auto___35337;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35323_35338__$1)){
var c__4556__auto___35339 = cljs.core.chunk_first.call(null,seq__35323_35338__$1);
var G__35340 = cljs.core.chunk_rest.call(null,seq__35323_35338__$1);
var G__35341 = c__4556__auto___35339;
var G__35342 = cljs.core.count.call(null,c__4556__auto___35339);
var G__35343 = (0);
seq__35323_35328 = G__35340;
chunk__35324_35329 = G__35341;
count__35325_35330 = G__35342;
i__35326_35331 = G__35343;
continue;
} else {
var msg_35344 = cljs.core.first.call(null,seq__35323_35338__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35344);


var G__35345 = cljs.core.next.call(null,seq__35323_35338__$1);
var G__35346 = null;
var G__35347 = (0);
var G__35348 = (0);
seq__35323_35328 = G__35345;
chunk__35324_35329 = G__35346;
count__35325_35330 = G__35347;
i__35326_35331 = G__35348;
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
var len__4736__auto___35353 = arguments.length;
var i__4737__auto___35354 = (0);
while(true){
if((i__4737__auto___35354 < len__4736__auto___35353)){
args__4742__auto__.push((arguments[i__4737__auto___35354]));

var G__35355 = (i__4737__auto___35354 + (1));
i__4737__auto___35354 = G__35355;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35350){
var map__35351 = p__35350;
var map__35351__$1 = (((((!((map__35351 == null))))?(((((map__35351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35351):map__35351);
var opts = map__35351__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35349){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35349));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35356){if((e35356 instanceof Error)){
var e = e35356;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35356;

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

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__35357){
var map__35358 = p__35357;
var map__35358__$1 = (((((!((map__35358 == null))))?(((((map__35358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35358):map__35358);
var msg_name = cljs.core.get.call(null,map__35358__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1602418813387
