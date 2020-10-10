// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31464){
var map__31465 = p__31464;
var map__31465__$1 = (((((!((map__31465 == null))))?(((((map__31465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31465):map__31465);
var m = map__31465__$1;
var n = cljs.core.get.call(null,map__31465__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31465__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31467_31499 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31468_31500 = null;
var count__31469_31501 = (0);
var i__31470_31502 = (0);
while(true){
if((i__31470_31502 < count__31469_31501)){
var f_31503 = cljs.core._nth.call(null,chunk__31468_31500,i__31470_31502);
cljs.core.println.call(null,"  ",f_31503);


var G__31504 = seq__31467_31499;
var G__31505 = chunk__31468_31500;
var G__31506 = count__31469_31501;
var G__31507 = (i__31470_31502 + (1));
seq__31467_31499 = G__31504;
chunk__31468_31500 = G__31505;
count__31469_31501 = G__31506;
i__31470_31502 = G__31507;
continue;
} else {
var temp__5735__auto___31508 = cljs.core.seq.call(null,seq__31467_31499);
if(temp__5735__auto___31508){
var seq__31467_31509__$1 = temp__5735__auto___31508;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31467_31509__$1)){
var c__4556__auto___31510 = cljs.core.chunk_first.call(null,seq__31467_31509__$1);
var G__31511 = cljs.core.chunk_rest.call(null,seq__31467_31509__$1);
var G__31512 = c__4556__auto___31510;
var G__31513 = cljs.core.count.call(null,c__4556__auto___31510);
var G__31514 = (0);
seq__31467_31499 = G__31511;
chunk__31468_31500 = G__31512;
count__31469_31501 = G__31513;
i__31470_31502 = G__31514;
continue;
} else {
var f_31515 = cljs.core.first.call(null,seq__31467_31509__$1);
cljs.core.println.call(null,"  ",f_31515);


var G__31516 = cljs.core.next.call(null,seq__31467_31509__$1);
var G__31517 = null;
var G__31518 = (0);
var G__31519 = (0);
seq__31467_31499 = G__31516;
chunk__31468_31500 = G__31517;
count__31469_31501 = G__31518;
i__31470_31502 = G__31519;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31520 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31520);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31520)))?cljs.core.second.call(null,arglists_31520):arglists_31520));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31471_31521 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31472_31522 = null;
var count__31473_31523 = (0);
var i__31474_31524 = (0);
while(true){
if((i__31474_31524 < count__31473_31523)){
var vec__31485_31525 = cljs.core._nth.call(null,chunk__31472_31522,i__31474_31524);
var name_31526 = cljs.core.nth.call(null,vec__31485_31525,(0),null);
var map__31488_31527 = cljs.core.nth.call(null,vec__31485_31525,(1),null);
var map__31488_31528__$1 = (((((!((map__31488_31527 == null))))?(((((map__31488_31527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31488_31527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31488_31527):map__31488_31527);
var doc_31529 = cljs.core.get.call(null,map__31488_31528__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31530 = cljs.core.get.call(null,map__31488_31528__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31526);

cljs.core.println.call(null," ",arglists_31530);

if(cljs.core.truth_(doc_31529)){
cljs.core.println.call(null," ",doc_31529);
} else {
}


var G__31531 = seq__31471_31521;
var G__31532 = chunk__31472_31522;
var G__31533 = count__31473_31523;
var G__31534 = (i__31474_31524 + (1));
seq__31471_31521 = G__31531;
chunk__31472_31522 = G__31532;
count__31473_31523 = G__31533;
i__31474_31524 = G__31534;
continue;
} else {
var temp__5735__auto___31535 = cljs.core.seq.call(null,seq__31471_31521);
if(temp__5735__auto___31535){
var seq__31471_31536__$1 = temp__5735__auto___31535;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31471_31536__$1)){
var c__4556__auto___31537 = cljs.core.chunk_first.call(null,seq__31471_31536__$1);
var G__31538 = cljs.core.chunk_rest.call(null,seq__31471_31536__$1);
var G__31539 = c__4556__auto___31537;
var G__31540 = cljs.core.count.call(null,c__4556__auto___31537);
var G__31541 = (0);
seq__31471_31521 = G__31538;
chunk__31472_31522 = G__31539;
count__31473_31523 = G__31540;
i__31474_31524 = G__31541;
continue;
} else {
var vec__31490_31542 = cljs.core.first.call(null,seq__31471_31536__$1);
var name_31543 = cljs.core.nth.call(null,vec__31490_31542,(0),null);
var map__31493_31544 = cljs.core.nth.call(null,vec__31490_31542,(1),null);
var map__31493_31545__$1 = (((((!((map__31493_31544 == null))))?(((((map__31493_31544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31493_31544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31493_31544):map__31493_31544);
var doc_31546 = cljs.core.get.call(null,map__31493_31545__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31547 = cljs.core.get.call(null,map__31493_31545__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31543);

cljs.core.println.call(null," ",arglists_31547);

if(cljs.core.truth_(doc_31546)){
cljs.core.println.call(null," ",doc_31546);
} else {
}


var G__31548 = cljs.core.next.call(null,seq__31471_31536__$1);
var G__31549 = null;
var G__31550 = (0);
var G__31551 = (0);
seq__31471_31521 = G__31548;
chunk__31472_31522 = G__31549;
count__31473_31523 = G__31550;
i__31474_31524 = G__31551;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__31495 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31496 = null;
var count__31497 = (0);
var i__31498 = (0);
while(true){
if((i__31498 < count__31497)){
var role = cljs.core._nth.call(null,chunk__31496,i__31498);
var temp__5735__auto___31552__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___31552__$1)){
var spec_31553 = temp__5735__auto___31552__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31553));
} else {
}


var G__31554 = seq__31495;
var G__31555 = chunk__31496;
var G__31556 = count__31497;
var G__31557 = (i__31498 + (1));
seq__31495 = G__31554;
chunk__31496 = G__31555;
count__31497 = G__31556;
i__31498 = G__31557;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__31495);
if(temp__5735__auto____$1){
var seq__31495__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31495__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31495__$1);
var G__31558 = cljs.core.chunk_rest.call(null,seq__31495__$1);
var G__31559 = c__4556__auto__;
var G__31560 = cljs.core.count.call(null,c__4556__auto__);
var G__31561 = (0);
seq__31495 = G__31558;
chunk__31496 = G__31559;
count__31497 = G__31560;
i__31498 = G__31561;
continue;
} else {
var role = cljs.core.first.call(null,seq__31495__$1);
var temp__5735__auto___31562__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___31562__$2)){
var spec_31563 = temp__5735__auto___31562__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31563));
} else {
}


var G__31564 = cljs.core.next.call(null,seq__31495__$1);
var G__31565 = null;
var G__31566 = (0);
var G__31567 = (0);
seq__31495 = G__31564;
chunk__31496 = G__31565;
count__31497 = G__31566;
i__31498 = G__31567;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__31568 = cljs.core.conj.call(null,via,t);
var G__31569 = cljs.core.ex_cause.call(null,t);
via = G__31568;
t = G__31569;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__31572 = datafied_throwable;
var map__31572__$1 = (((((!((map__31572 == null))))?(((((map__31572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31572):map__31572);
var via = cljs.core.get.call(null,map__31572__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__31572__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__31572__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31573 = cljs.core.last.call(null,via);
var map__31573__$1 = (((((!((map__31573 == null))))?(((((map__31573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31573):map__31573);
var type = cljs.core.get.call(null,map__31573__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__31573__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__31573__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31574 = data;
var map__31574__$1 = (((((!((map__31574 == null))))?(((((map__31574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31574):map__31574);
var problems = cljs.core.get.call(null,map__31574__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__31574__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__31574__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31575 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__31575__$1 = (((((!((map__31575 == null))))?(((((map__31575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31575):map__31575);
var top_data = map__31575__$1;
var source = cljs.core.get.call(null,map__31575__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__31580 = phase;
var G__31580__$1 = (((G__31580 instanceof cljs.core.Keyword))?G__31580.fqn:null);
switch (G__31580__$1) {
case "read-source":
var map__31581 = data;
var map__31581__$1 = (((((!((map__31581 == null))))?(((((map__31581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31581):map__31581);
var line = cljs.core.get.call(null,map__31581__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31581__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31583 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__31583__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31583,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31583);
var G__31583__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31583__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31583__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31583__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31583__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31584 = top_data;
var G__31584__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31584,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31584);
var G__31584__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31584__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31584__$1);
var G__31584__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31584__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31584__$2);
var G__31584__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31584__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31584__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31584__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31584__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31585 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31585,(0),null);
var method = cljs.core.nth.call(null,vec__31585,(1),null);
var file = cljs.core.nth.call(null,vec__31585,(2),null);
var line = cljs.core.nth.call(null,vec__31585,(3),null);
var G__31588 = top_data;
var G__31588__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__31588,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31588);
var G__31588__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__31588__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31588__$1);
var G__31588__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__31588__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31588__$2);
var G__31588__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31588__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31588__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31588__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31588__$4;
}

break;
case "execution":
var vec__31589 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31589,(0),null);
var method = cljs.core.nth.call(null,vec__31589,(1),null);
var file = cljs.core.nth.call(null,vec__31589,(2),null);
var line = cljs.core.nth.call(null,vec__31589,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__31571_SHARP_){
var or__4126__auto__ = (p1__31571_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__31571_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__31592 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31592__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__31592,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31592);
var G__31592__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31592__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31592__$1);
var G__31592__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__31592__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31592__$2);
var G__31592__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__31592__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31592__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31592__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31592__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31580__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31596){
var map__31597 = p__31596;
var map__31597__$1 = (((((!((map__31597 == null))))?(((((map__31597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31597):map__31597);
var triage_data = map__31597__$1;
var phase = cljs.core.get.call(null,map__31597__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__31597__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__31597__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31597__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__31597__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__31597__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__31597__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__31597__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31599 = phase;
var G__31599__$1 = (((G__31599 instanceof cljs.core.Keyword))?G__31599.fqn:null);
switch (G__31599__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31600_31609 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31601_31610 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31602_31611 = true;
var _STAR_print_fn_STAR__temp_val__31603_31612 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31602_31611);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31603_31612);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__31594_SHARP_){
return cljs.core.dissoc.call(null,p1__31594_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31601_31610);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31600_31609);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31604_31613 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31605_31614 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31606_31615 = true;
var _STAR_print_fn_STAR__temp_val__31607_31616 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31606_31615);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31607_31616);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__31595_SHARP_){
return cljs.core.dissoc.call(null,p1__31595_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31605_31614);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31604_31613);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31599__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1602351363906
