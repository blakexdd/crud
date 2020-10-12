// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34776){
var map__34777 = p__34776;
var map__34777__$1 = (((((!((map__34777 == null))))?(((((map__34777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34777):map__34777);
var m = map__34777__$1;
var n = cljs.core.get.call(null,map__34777__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__34777__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__34779_34811 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34780_34812 = null;
var count__34781_34813 = (0);
var i__34782_34814 = (0);
while(true){
if((i__34782_34814 < count__34781_34813)){
var f_34815 = cljs.core._nth.call(null,chunk__34780_34812,i__34782_34814);
cljs.core.println.call(null,"  ",f_34815);


var G__34816 = seq__34779_34811;
var G__34817 = chunk__34780_34812;
var G__34818 = count__34781_34813;
var G__34819 = (i__34782_34814 + (1));
seq__34779_34811 = G__34816;
chunk__34780_34812 = G__34817;
count__34781_34813 = G__34818;
i__34782_34814 = G__34819;
continue;
} else {
var temp__5735__auto___34820 = cljs.core.seq.call(null,seq__34779_34811);
if(temp__5735__auto___34820){
var seq__34779_34821__$1 = temp__5735__auto___34820;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34779_34821__$1)){
var c__4556__auto___34822 = cljs.core.chunk_first.call(null,seq__34779_34821__$1);
var G__34823 = cljs.core.chunk_rest.call(null,seq__34779_34821__$1);
var G__34824 = c__4556__auto___34822;
var G__34825 = cljs.core.count.call(null,c__4556__auto___34822);
var G__34826 = (0);
seq__34779_34811 = G__34823;
chunk__34780_34812 = G__34824;
count__34781_34813 = G__34825;
i__34782_34814 = G__34826;
continue;
} else {
var f_34827 = cljs.core.first.call(null,seq__34779_34821__$1);
cljs.core.println.call(null,"  ",f_34827);


var G__34828 = cljs.core.next.call(null,seq__34779_34821__$1);
var G__34829 = null;
var G__34830 = (0);
var G__34831 = (0);
seq__34779_34811 = G__34828;
chunk__34780_34812 = G__34829;
count__34781_34813 = G__34830;
i__34782_34814 = G__34831;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34832 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34832);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34832)))?cljs.core.second.call(null,arglists_34832):arglists_34832));
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
var seq__34783_34833 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34784_34834 = null;
var count__34785_34835 = (0);
var i__34786_34836 = (0);
while(true){
if((i__34786_34836 < count__34785_34835)){
var vec__34797_34837 = cljs.core._nth.call(null,chunk__34784_34834,i__34786_34836);
var name_34838 = cljs.core.nth.call(null,vec__34797_34837,(0),null);
var map__34800_34839 = cljs.core.nth.call(null,vec__34797_34837,(1),null);
var map__34800_34840__$1 = (((((!((map__34800_34839 == null))))?(((((map__34800_34839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34800_34839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34800_34839):map__34800_34839);
var doc_34841 = cljs.core.get.call(null,map__34800_34840__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34842 = cljs.core.get.call(null,map__34800_34840__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34838);

cljs.core.println.call(null," ",arglists_34842);

if(cljs.core.truth_(doc_34841)){
cljs.core.println.call(null," ",doc_34841);
} else {
}


var G__34843 = seq__34783_34833;
var G__34844 = chunk__34784_34834;
var G__34845 = count__34785_34835;
var G__34846 = (i__34786_34836 + (1));
seq__34783_34833 = G__34843;
chunk__34784_34834 = G__34844;
count__34785_34835 = G__34845;
i__34786_34836 = G__34846;
continue;
} else {
var temp__5735__auto___34847 = cljs.core.seq.call(null,seq__34783_34833);
if(temp__5735__auto___34847){
var seq__34783_34848__$1 = temp__5735__auto___34847;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34783_34848__$1)){
var c__4556__auto___34849 = cljs.core.chunk_first.call(null,seq__34783_34848__$1);
var G__34850 = cljs.core.chunk_rest.call(null,seq__34783_34848__$1);
var G__34851 = c__4556__auto___34849;
var G__34852 = cljs.core.count.call(null,c__4556__auto___34849);
var G__34853 = (0);
seq__34783_34833 = G__34850;
chunk__34784_34834 = G__34851;
count__34785_34835 = G__34852;
i__34786_34836 = G__34853;
continue;
} else {
var vec__34802_34854 = cljs.core.first.call(null,seq__34783_34848__$1);
var name_34855 = cljs.core.nth.call(null,vec__34802_34854,(0),null);
var map__34805_34856 = cljs.core.nth.call(null,vec__34802_34854,(1),null);
var map__34805_34857__$1 = (((((!((map__34805_34856 == null))))?(((((map__34805_34856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34805_34856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34805_34856):map__34805_34856);
var doc_34858 = cljs.core.get.call(null,map__34805_34857__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34859 = cljs.core.get.call(null,map__34805_34857__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34855);

cljs.core.println.call(null," ",arglists_34859);

if(cljs.core.truth_(doc_34858)){
cljs.core.println.call(null," ",doc_34858);
} else {
}


var G__34860 = cljs.core.next.call(null,seq__34783_34848__$1);
var G__34861 = null;
var G__34862 = (0);
var G__34863 = (0);
seq__34783_34833 = G__34860;
chunk__34784_34834 = G__34861;
count__34785_34835 = G__34862;
i__34786_34836 = G__34863;
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

var seq__34807 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34808 = null;
var count__34809 = (0);
var i__34810 = (0);
while(true){
if((i__34810 < count__34809)){
var role = cljs.core._nth.call(null,chunk__34808,i__34810);
var temp__5735__auto___34864__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___34864__$1)){
var spec_34865 = temp__5735__auto___34864__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34865));
} else {
}


var G__34866 = seq__34807;
var G__34867 = chunk__34808;
var G__34868 = count__34809;
var G__34869 = (i__34810 + (1));
seq__34807 = G__34866;
chunk__34808 = G__34867;
count__34809 = G__34868;
i__34810 = G__34869;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__34807);
if(temp__5735__auto____$1){
var seq__34807__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34807__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__34807__$1);
var G__34870 = cljs.core.chunk_rest.call(null,seq__34807__$1);
var G__34871 = c__4556__auto__;
var G__34872 = cljs.core.count.call(null,c__4556__auto__);
var G__34873 = (0);
seq__34807 = G__34870;
chunk__34808 = G__34871;
count__34809 = G__34872;
i__34810 = G__34873;
continue;
} else {
var role = cljs.core.first.call(null,seq__34807__$1);
var temp__5735__auto___34874__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___34874__$2)){
var spec_34875 = temp__5735__auto___34874__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34875));
} else {
}


var G__34876 = cljs.core.next.call(null,seq__34807__$1);
var G__34877 = null;
var G__34878 = (0);
var G__34879 = (0);
seq__34807 = G__34876;
chunk__34808 = G__34877;
count__34809 = G__34878;
i__34810 = G__34879;
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
var G__34880 = cljs.core.conj.call(null,via,t);
var G__34881 = cljs.core.ex_cause.call(null,t);
via = G__34880;
t = G__34881;
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
var map__34884 = datafied_throwable;
var map__34884__$1 = (((((!((map__34884 == null))))?(((((map__34884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34884):map__34884);
var via = cljs.core.get.call(null,map__34884__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__34884__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__34884__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34885 = cljs.core.last.call(null,via);
var map__34885__$1 = (((((!((map__34885 == null))))?(((((map__34885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34885):map__34885);
var type = cljs.core.get.call(null,map__34885__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__34885__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__34885__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34886 = data;
var map__34886__$1 = (((((!((map__34886 == null))))?(((((map__34886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34886):map__34886);
var problems = cljs.core.get.call(null,map__34886__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__34886__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__34886__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34887 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__34887__$1 = (((((!((map__34887 == null))))?(((((map__34887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34887):map__34887);
var top_data = map__34887__$1;
var source = cljs.core.get.call(null,map__34887__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__34892 = phase;
var G__34892__$1 = (((G__34892 instanceof cljs.core.Keyword))?G__34892.fqn:null);
switch (G__34892__$1) {
case "read-source":
var map__34893 = data;
var map__34893__$1 = (((((!((map__34893 == null))))?(((((map__34893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34893):map__34893);
var line = cljs.core.get.call(null,map__34893__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__34893__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34895 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__34895__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__34895,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34895);
var G__34895__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__34895__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34895__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__34895__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34895__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34896 = top_data;
var G__34896__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__34896,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34896);
var G__34896__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__34896__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34896__$1);
var G__34896__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__34896__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34896__$2);
var G__34896__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__34896__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34896__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__34896__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34896__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34897 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__34897,(0),null);
var method = cljs.core.nth.call(null,vec__34897,(1),null);
var file = cljs.core.nth.call(null,vec__34897,(2),null);
var line = cljs.core.nth.call(null,vec__34897,(3),null);
var G__34900 = top_data;
var G__34900__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__34900,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34900);
var G__34900__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__34900__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34900__$1);
var G__34900__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__34900__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34900__$2);
var G__34900__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__34900__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34900__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__34900__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34900__$4;
}

break;
case "execution":
var vec__34901 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__34901,(0),null);
var method = cljs.core.nth.call(null,vec__34901,(1),null);
var file = cljs.core.nth.call(null,vec__34901,(2),null);
var line = cljs.core.nth.call(null,vec__34901,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__34883_SHARP_){
var or__4126__auto__ = (p1__34883_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__34883_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__34904 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34904__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__34904,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34904);
var G__34904__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__34904__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34904__$1);
var G__34904__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__34904__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34904__$2);
var G__34904__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__34904__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34904__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__34904__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34904__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34892__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34908){
var map__34909 = p__34908;
var map__34909__$1 = (((((!((map__34909 == null))))?(((((map__34909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34909):map__34909);
var triage_data = map__34909__$1;
var phase = cljs.core.get.call(null,map__34909__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__34909__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__34909__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__34909__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__34909__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__34909__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__34909__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__34909__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__34911 = phase;
var G__34911__$1 = (((G__34911 instanceof cljs.core.Keyword))?G__34911.fqn:null);
switch (G__34911__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34912_34921 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34913_34922 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34914_34923 = true;
var _STAR_print_fn_STAR__temp_val__34915_34924 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34914_34923);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34915_34924);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__34906_SHARP_){
return cljs.core.dissoc.call(null,p1__34906_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34913_34922);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34912_34921);
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
var _STAR_print_newline_STAR__orig_val__34916_34925 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34917_34926 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34918_34927 = true;
var _STAR_print_fn_STAR__temp_val__34919_34928 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34918_34927);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34919_34928);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__34907_SHARP_){
return cljs.core.dissoc.call(null,p1__34907_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34917_34926);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34916_34925);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34911__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1602507666709
