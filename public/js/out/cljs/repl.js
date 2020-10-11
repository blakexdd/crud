// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34544){
var map__34545 = p__34544;
var map__34545__$1 = (((((!((map__34545 == null))))?(((((map__34545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34545):map__34545);
var m = map__34545__$1;
var n = cljs.core.get.call(null,map__34545__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__34545__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__34547_34579 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34548_34580 = null;
var count__34549_34581 = (0);
var i__34550_34582 = (0);
while(true){
if((i__34550_34582 < count__34549_34581)){
var f_34583 = cljs.core._nth.call(null,chunk__34548_34580,i__34550_34582);
cljs.core.println.call(null,"  ",f_34583);


var G__34584 = seq__34547_34579;
var G__34585 = chunk__34548_34580;
var G__34586 = count__34549_34581;
var G__34587 = (i__34550_34582 + (1));
seq__34547_34579 = G__34584;
chunk__34548_34580 = G__34585;
count__34549_34581 = G__34586;
i__34550_34582 = G__34587;
continue;
} else {
var temp__5735__auto___34588 = cljs.core.seq.call(null,seq__34547_34579);
if(temp__5735__auto___34588){
var seq__34547_34589__$1 = temp__5735__auto___34588;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34547_34589__$1)){
var c__4556__auto___34590 = cljs.core.chunk_first.call(null,seq__34547_34589__$1);
var G__34591 = cljs.core.chunk_rest.call(null,seq__34547_34589__$1);
var G__34592 = c__4556__auto___34590;
var G__34593 = cljs.core.count.call(null,c__4556__auto___34590);
var G__34594 = (0);
seq__34547_34579 = G__34591;
chunk__34548_34580 = G__34592;
count__34549_34581 = G__34593;
i__34550_34582 = G__34594;
continue;
} else {
var f_34595 = cljs.core.first.call(null,seq__34547_34589__$1);
cljs.core.println.call(null,"  ",f_34595);


var G__34596 = cljs.core.next.call(null,seq__34547_34589__$1);
var G__34597 = null;
var G__34598 = (0);
var G__34599 = (0);
seq__34547_34579 = G__34596;
chunk__34548_34580 = G__34597;
count__34549_34581 = G__34598;
i__34550_34582 = G__34599;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34600 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34600);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34600)))?cljs.core.second.call(null,arglists_34600):arglists_34600));
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
var seq__34551_34601 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34552_34602 = null;
var count__34553_34603 = (0);
var i__34554_34604 = (0);
while(true){
if((i__34554_34604 < count__34553_34603)){
var vec__34565_34605 = cljs.core._nth.call(null,chunk__34552_34602,i__34554_34604);
var name_34606 = cljs.core.nth.call(null,vec__34565_34605,(0),null);
var map__34568_34607 = cljs.core.nth.call(null,vec__34565_34605,(1),null);
var map__34568_34608__$1 = (((((!((map__34568_34607 == null))))?(((((map__34568_34607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34568_34607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34568_34607):map__34568_34607);
var doc_34609 = cljs.core.get.call(null,map__34568_34608__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34610 = cljs.core.get.call(null,map__34568_34608__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34606);

cljs.core.println.call(null," ",arglists_34610);

if(cljs.core.truth_(doc_34609)){
cljs.core.println.call(null," ",doc_34609);
} else {
}


var G__34611 = seq__34551_34601;
var G__34612 = chunk__34552_34602;
var G__34613 = count__34553_34603;
var G__34614 = (i__34554_34604 + (1));
seq__34551_34601 = G__34611;
chunk__34552_34602 = G__34612;
count__34553_34603 = G__34613;
i__34554_34604 = G__34614;
continue;
} else {
var temp__5735__auto___34615 = cljs.core.seq.call(null,seq__34551_34601);
if(temp__5735__auto___34615){
var seq__34551_34616__$1 = temp__5735__auto___34615;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34551_34616__$1)){
var c__4556__auto___34617 = cljs.core.chunk_first.call(null,seq__34551_34616__$1);
var G__34618 = cljs.core.chunk_rest.call(null,seq__34551_34616__$1);
var G__34619 = c__4556__auto___34617;
var G__34620 = cljs.core.count.call(null,c__4556__auto___34617);
var G__34621 = (0);
seq__34551_34601 = G__34618;
chunk__34552_34602 = G__34619;
count__34553_34603 = G__34620;
i__34554_34604 = G__34621;
continue;
} else {
var vec__34570_34622 = cljs.core.first.call(null,seq__34551_34616__$1);
var name_34623 = cljs.core.nth.call(null,vec__34570_34622,(0),null);
var map__34573_34624 = cljs.core.nth.call(null,vec__34570_34622,(1),null);
var map__34573_34625__$1 = (((((!((map__34573_34624 == null))))?(((((map__34573_34624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34573_34624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34573_34624):map__34573_34624);
var doc_34626 = cljs.core.get.call(null,map__34573_34625__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34627 = cljs.core.get.call(null,map__34573_34625__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34623);

cljs.core.println.call(null," ",arglists_34627);

if(cljs.core.truth_(doc_34626)){
cljs.core.println.call(null," ",doc_34626);
} else {
}


var G__34628 = cljs.core.next.call(null,seq__34551_34616__$1);
var G__34629 = null;
var G__34630 = (0);
var G__34631 = (0);
seq__34551_34601 = G__34628;
chunk__34552_34602 = G__34629;
count__34553_34603 = G__34630;
i__34554_34604 = G__34631;
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

var seq__34575 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34576 = null;
var count__34577 = (0);
var i__34578 = (0);
while(true){
if((i__34578 < count__34577)){
var role = cljs.core._nth.call(null,chunk__34576,i__34578);
var temp__5735__auto___34632__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___34632__$1)){
var spec_34633 = temp__5735__auto___34632__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34633));
} else {
}


var G__34634 = seq__34575;
var G__34635 = chunk__34576;
var G__34636 = count__34577;
var G__34637 = (i__34578 + (1));
seq__34575 = G__34634;
chunk__34576 = G__34635;
count__34577 = G__34636;
i__34578 = G__34637;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__34575);
if(temp__5735__auto____$1){
var seq__34575__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34575__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__34575__$1);
var G__34638 = cljs.core.chunk_rest.call(null,seq__34575__$1);
var G__34639 = c__4556__auto__;
var G__34640 = cljs.core.count.call(null,c__4556__auto__);
var G__34641 = (0);
seq__34575 = G__34638;
chunk__34576 = G__34639;
count__34577 = G__34640;
i__34578 = G__34641;
continue;
} else {
var role = cljs.core.first.call(null,seq__34575__$1);
var temp__5735__auto___34642__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___34642__$2)){
var spec_34643 = temp__5735__auto___34642__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34643));
} else {
}


var G__34644 = cljs.core.next.call(null,seq__34575__$1);
var G__34645 = null;
var G__34646 = (0);
var G__34647 = (0);
seq__34575 = G__34644;
chunk__34576 = G__34645;
count__34577 = G__34646;
i__34578 = G__34647;
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
var G__34648 = cljs.core.conj.call(null,via,t);
var G__34649 = cljs.core.ex_cause.call(null,t);
via = G__34648;
t = G__34649;
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
var map__34652 = datafied_throwable;
var map__34652__$1 = (((((!((map__34652 == null))))?(((((map__34652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34652):map__34652);
var via = cljs.core.get.call(null,map__34652__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__34652__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__34652__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34653 = cljs.core.last.call(null,via);
var map__34653__$1 = (((((!((map__34653 == null))))?(((((map__34653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34653):map__34653);
var type = cljs.core.get.call(null,map__34653__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__34653__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__34653__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34654 = data;
var map__34654__$1 = (((((!((map__34654 == null))))?(((((map__34654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34654):map__34654);
var problems = cljs.core.get.call(null,map__34654__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__34654__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__34654__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34655 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__34655__$1 = (((((!((map__34655 == null))))?(((((map__34655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34655):map__34655);
var top_data = map__34655__$1;
var source = cljs.core.get.call(null,map__34655__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__34660 = phase;
var G__34660__$1 = (((G__34660 instanceof cljs.core.Keyword))?G__34660.fqn:null);
switch (G__34660__$1) {
case "read-source":
var map__34661 = data;
var map__34661__$1 = (((((!((map__34661 == null))))?(((((map__34661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34661):map__34661);
var line = cljs.core.get.call(null,map__34661__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__34661__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34663 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__34663__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__34663,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34663);
var G__34663__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__34663__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34663__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__34663__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34663__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34664 = top_data;
var G__34664__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__34664,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34664);
var G__34664__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__34664__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34664__$1);
var G__34664__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__34664__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34664__$2);
var G__34664__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__34664__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34664__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__34664__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34664__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34665 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__34665,(0),null);
var method = cljs.core.nth.call(null,vec__34665,(1),null);
var file = cljs.core.nth.call(null,vec__34665,(2),null);
var line = cljs.core.nth.call(null,vec__34665,(3),null);
var G__34668 = top_data;
var G__34668__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__34668,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34668);
var G__34668__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__34668__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34668__$1);
var G__34668__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__34668__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34668__$2);
var G__34668__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__34668__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34668__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__34668__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34668__$4;
}

break;
case "execution":
var vec__34669 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__34669,(0),null);
var method = cljs.core.nth.call(null,vec__34669,(1),null);
var file = cljs.core.nth.call(null,vec__34669,(2),null);
var line = cljs.core.nth.call(null,vec__34669,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__34651_SHARP_){
var or__4126__auto__ = (p1__34651_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__34651_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__34672 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34672__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__34672,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34672);
var G__34672__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__34672__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34672__$1);
var G__34672__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__34672__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34672__$2);
var G__34672__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__34672__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34672__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__34672__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34672__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34660__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34676){
var map__34677 = p__34676;
var map__34677__$1 = (((((!((map__34677 == null))))?(((((map__34677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34677):map__34677);
var triage_data = map__34677__$1;
var phase = cljs.core.get.call(null,map__34677__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__34677__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__34677__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__34677__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__34677__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__34677__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__34677__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__34677__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__34679 = phase;
var G__34679__$1 = (((G__34679 instanceof cljs.core.Keyword))?G__34679.fqn:null);
switch (G__34679__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34680_34689 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34681_34690 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34682_34691 = true;
var _STAR_print_fn_STAR__temp_val__34683_34692 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34682_34691);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34683_34692);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__34674_SHARP_){
return cljs.core.dissoc.call(null,p1__34674_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34681_34690);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34680_34689);
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
var _STAR_print_newline_STAR__orig_val__34684_34693 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34685_34694 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34686_34695 = true;
var _STAR_print_fn_STAR__temp_val__34687_34696 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34686_34695);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34687_34696);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__34675_SHARP_){
return cljs.core.dissoc.call(null,p1__34675_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34685_34694);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34684_34693);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34679__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1602418813011
