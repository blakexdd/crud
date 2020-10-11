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
var len__4736__auto___32304 = arguments.length;
var i__4737__auto___32305 = (0);
while(true){
if((i__4737__auto___32305 < len__4736__auto___32304)){
args__4742__auto__.push((arguments[i__4737__auto___32305]));

var G__32306 = (i__4737__auto___32305 + (1));
i__4737__auto___32305 = G__32306;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__32300){
var vec__32301 = p__32300;
var default$ = cljs.core.nth.call(null,vec__32301,(0),null);
var temp_a = cljs.core.deref.call(null,reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)));
if((!((temp_a == null)))){
return temp_a;
} else {
return default$;
}
}));

(reagent.session.get.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get.cljs$lang$applyTo = (function (seq32298){
var G__32299 = cljs.core.first.call(null,seq32298);
var seq32298__$1 = cljs.core.next.call(null,seq32298);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32299,seq32298__$1);
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
var len__4736__auto___32313 = arguments.length;
var i__4737__auto___32314 = (0);
while(true){
if((i__4737__auto___32314 < len__4736__auto___32313)){
args__4742__auto__.push((arguments[i__4737__auto___32314]));

var G__32315 = (i__4737__auto___32314 + (1));
i__4737__auto___32314 = G__32315;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__32309){
var vec__32310 = p__32309;
var default$ = cljs.core.nth.call(null,vec__32310,(0),null);
var result = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if((!((result == null)))){
return result;
} else {
return default$;
}
}));

(reagent.session.get_in.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get_in.cljs$lang$applyTo = (function (seq32307){
var G__32308 = cljs.core.first.call(null,seq32307);
var seq32307__$1 = cljs.core.next.call(null,seq32307);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32308,seq32307__$1);
}));

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32318 = arguments.length;
var i__4737__auto___32319 = (0);
while(true){
if((i__4737__auto___32319 < len__4736__auto___32318)){
args__4742__auto__.push((arguments[i__4737__auto___32319]));

var G__32320 = (i__4737__auto___32319 + (1));
i__4737__auto___32319 = G__32320;
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
(reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq32316){
var G__32317 = cljs.core.first.call(null,seq32316);
var seq32316__$1 = cljs.core.next.call(null,seq32316);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32317,seq32316__$1);
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
var len__4736__auto___32327 = arguments.length;
var i__4737__auto___32328 = (0);
while(true){
if((i__4737__auto___32328 < len__4736__auto___32327)){
args__4742__auto__.push((arguments[i__4737__auto___32328]));

var G__32329 = (i__4737__auto___32328 + (1));
i__4737__auto___32328 = G__32329;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__32323){
var vec__32324 = p__32323;
var default$ = cljs.core.nth.call(null,vec__32324,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
}));

(reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq32321){
var G__32322 = cljs.core.first.call(null,seq32321);
var seq32321__$1 = cljs.core.next.call(null,seq32321);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32322,seq32321__$1);
}));

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32336 = arguments.length;
var i__4737__auto___32337 = (0);
while(true){
if((i__4737__auto___32337 < len__4736__auto___32336)){
args__4742__auto__.push((arguments[i__4737__auto___32337]));

var G__32338 = (i__4737__auto___32337 + (1));
i__4737__auto___32337 = G__32338;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__32332){
var vec__32333 = p__32332;
var default$ = cljs.core.nth.call(null,vec__32333,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
}));

(reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq32330){
var G__32331 = cljs.core.first.call(null,seq32330);
var seq32330__$1 = cljs.core.next.call(null,seq32330);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32331,seq32330__$1);
}));

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32343 = arguments.length;
var i__4737__auto___32344 = (0);
while(true){
if((i__4737__auto___32344 < len__4736__auto___32343)){
args__4742__auto__.push((arguments[i__4737__auto___32344]));

var G__32345 = (i__4737__auto___32344 + (1));
i__4737__auto___32344 = G__32345;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__32339_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__32339_SHARP_,k,f),args);
}));
}));

(reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq32340){
var G__32341 = cljs.core.first.call(null,seq32340);
var seq32340__$1 = cljs.core.next.call(null,seq32340);
var G__32342 = cljs.core.first.call(null,seq32340__$1);
var seq32340__$2 = cljs.core.next.call(null,seq32340__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32341,G__32342,seq32340__$2);
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
var len__4736__auto___32350 = arguments.length;
var i__4737__auto___32351 = (0);
while(true){
if((i__4737__auto___32351 < len__4736__auto___32350)){
args__4742__auto__.push((arguments[i__4737__auto___32351]));

var G__32352 = (i__4737__auto___32351 + (1));
i__4737__auto___32351 = G__32352;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__32346_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__32346_SHARP_,ks,f),args);
}));
}));

(reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq32347){
var G__32348 = cljs.core.first.call(null,seq32347);
var seq32347__$1 = cljs.core.next.call(null,seq32347);
var G__32349 = cljs.core.first.call(null,seq32347__$1);
var seq32347__$2 = cljs.core.next.call(null,seq32347__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32348,G__32349,seq32347__$2);
}));


//# sourceMappingURL=session.js.map?rel=1602418810703
