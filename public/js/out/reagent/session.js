// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof reagent !== 'undefined') && (typeof reagent.session !== 'undefined') && (typeof reagent.session.state !== 'undefined')){
} else {
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor.call(null,reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32090 = arguments.length;
var i__4737__auto___32091 = (0);
while(true){
if((i__4737__auto___32091 < len__4736__auto___32090)){
args__4742__auto__.push((arguments[i__4737__auto___32091]));

var G__32092 = (i__4737__auto___32091 + (1));
i__4737__auto___32091 = G__32092;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__32086){
var vec__32087 = p__32086;
var default$ = cljs.core.nth.call(null,vec__32087,(0),null);
var temp_a = cljs.core.deref.call(null,reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)));
if((!((temp_a == null)))){
return temp_a;
} else {
return default$;
}
}));

(reagent.session.get.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get.cljs$lang$applyTo = (function (seq32084){
var G__32085 = cljs.core.first.call(null,seq32084);
var seq32084__$1 = cljs.core.next.call(null,seq32084);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32085,seq32084__$1);
}));

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32099 = arguments.length;
var i__4737__auto___32100 = (0);
while(true){
if((i__4737__auto___32100 < len__4736__auto___32099)){
args__4742__auto__.push((arguments[i__4737__auto___32100]));

var G__32101 = (i__4737__auto___32100 + (1));
i__4737__auto___32100 = G__32101;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__32095){
var vec__32096 = p__32095;
var default$ = cljs.core.nth.call(null,vec__32096,(0),null);
var result = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if((!((result == null)))){
return result;
} else {
return default$;
}
}));

(reagent.session.get_in.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get_in.cljs$lang$applyTo = (function (seq32093){
var G__32094 = cljs.core.first.call(null,seq32093);
var seq32093__$1 = cljs.core.next.call(null,seq32093);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32094,seq32093__$1);
}));

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32104 = arguments.length;
var i__4737__auto___32105 = (0);
while(true){
if((i__4737__auto___32105 < len__4736__auto___32104)){
args__4742__auto__.push((arguments[i__4737__auto___32105]));

var G__32106 = (i__4737__auto___32105 + (1));
i__4737__auto___32105 = G__32106;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
}));

(reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq32102){
var G__32103 = cljs.core.first.call(null,seq32102);
var seq32102__$1 = cljs.core.next.call(null,seq32102);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32103,seq32102__$1);
}));

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32113 = arguments.length;
var i__4737__auto___32114 = (0);
while(true){
if((i__4737__auto___32114 < len__4736__auto___32113)){
args__4742__auto__.push((arguments[i__4737__auto___32114]));

var G__32115 = (i__4737__auto___32114 + (1));
i__4737__auto___32114 = G__32115;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__32109){
var vec__32110 = p__32109;
var default$ = cljs.core.nth.call(null,vec__32110,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
}));

(reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq32107){
var G__32108 = cljs.core.first.call(null,seq32107);
var seq32107__$1 = cljs.core.next.call(null,seq32107);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32108,seq32107__$1);
}));

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32122 = arguments.length;
var i__4737__auto___32123 = (0);
while(true){
if((i__4737__auto___32123 < len__4736__auto___32122)){
args__4742__auto__.push((arguments[i__4737__auto___32123]));

var G__32124 = (i__4737__auto___32123 + (1));
i__4737__auto___32123 = G__32124;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__32118){
var vec__32119 = p__32118;
var default$ = cljs.core.nth.call(null,vec__32119,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
}));

(reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq32116){
var G__32117 = cljs.core.first.call(null,seq32116);
var seq32116__$1 = cljs.core.next.call(null,seq32116);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32117,seq32116__$1);
}));

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32129 = arguments.length;
var i__4737__auto___32130 = (0);
while(true){
if((i__4737__auto___32130 < len__4736__auto___32129)){
args__4742__auto__.push((arguments[i__4737__auto___32130]));

var G__32131 = (i__4737__auto___32130 + (1));
i__4737__auto___32130 = G__32131;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__32125_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__32125_SHARP_,k,f),args);
}));
}));

(reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq32126){
var G__32127 = cljs.core.first.call(null,seq32126);
var seq32126__$1 = cljs.core.next.call(null,seq32126);
var G__32128 = cljs.core.first.call(null,seq32126__$1);
var seq32126__$2 = cljs.core.next.call(null,seq32126__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32127,G__32128,seq32126__$2);
}));

/**
 * Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32136 = arguments.length;
var i__4737__auto___32137 = (0);
while(true){
if((i__4737__auto___32137 < len__4736__auto___32136)){
args__4742__auto__.push((arguments[i__4737__auto___32137]));

var G__32138 = (i__4737__auto___32137 + (1));
i__4737__auto___32137 = G__32138;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__32132_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__32132_SHARP_,ks,f),args);
}));
}));

(reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq32133){
var G__32134 = cljs.core.first.call(null,seq32133);
var seq32133__$1 = cljs.core.next.call(null,seq32133);
var G__32135 = cljs.core.first.call(null,seq32133__$1);
var seq32133__$2 = cljs.core.next.call(null,seq32133__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32134,G__32135,seq32133__$2);
}));


//# sourceMappingURL=session.js.map?rel=1602507663758
