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
var len__4736__auto___30233 = arguments.length;
var i__4737__auto___30234 = (0);
while(true){
if((i__4737__auto___30234 < len__4736__auto___30233)){
args__4742__auto__.push((arguments[i__4737__auto___30234]));

var G__30235 = (i__4737__auto___30234 + (1));
i__4737__auto___30234 = G__30235;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__30229){
var vec__30230 = p__30229;
var default$ = cljs.core.nth.call(null,vec__30230,(0),null);
var temp_a = cljs.core.deref.call(null,reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)));
if((!((temp_a == null)))){
return temp_a;
} else {
return default$;
}
}));

(reagent.session.get.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get.cljs$lang$applyTo = (function (seq30227){
var G__30228 = cljs.core.first.call(null,seq30227);
var seq30227__$1 = cljs.core.next.call(null,seq30227);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30228,seq30227__$1);
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
var len__4736__auto___30242 = arguments.length;
var i__4737__auto___30243 = (0);
while(true){
if((i__4737__auto___30243 < len__4736__auto___30242)){
args__4742__auto__.push((arguments[i__4737__auto___30243]));

var G__30244 = (i__4737__auto___30243 + (1));
i__4737__auto___30243 = G__30244;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__30238){
var vec__30239 = p__30238;
var default$ = cljs.core.nth.call(null,vec__30239,(0),null);
var result = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if((!((result == null)))){
return result;
} else {
return default$;
}
}));

(reagent.session.get_in.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get_in.cljs$lang$applyTo = (function (seq30236){
var G__30237 = cljs.core.first.call(null,seq30236);
var seq30236__$1 = cljs.core.next.call(null,seq30236);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30237,seq30236__$1);
}));

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30247 = arguments.length;
var i__4737__auto___30248 = (0);
while(true){
if((i__4737__auto___30248 < len__4736__auto___30247)){
args__4742__auto__.push((arguments[i__4737__auto___30248]));

var G__30249 = (i__4737__auto___30248 + (1));
i__4737__auto___30248 = G__30249;
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
(reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq30245){
var G__30246 = cljs.core.first.call(null,seq30245);
var seq30245__$1 = cljs.core.next.call(null,seq30245);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30246,seq30245__$1);
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
var len__4736__auto___30256 = arguments.length;
var i__4737__auto___30257 = (0);
while(true){
if((i__4737__auto___30257 < len__4736__auto___30256)){
args__4742__auto__.push((arguments[i__4737__auto___30257]));

var G__30258 = (i__4737__auto___30257 + (1));
i__4737__auto___30257 = G__30258;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__30252){
var vec__30253 = p__30252;
var default$ = cljs.core.nth.call(null,vec__30253,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
}));

(reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq30250){
var G__30251 = cljs.core.first.call(null,seq30250);
var seq30250__$1 = cljs.core.next.call(null,seq30250);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30251,seq30250__$1);
}));

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30265 = arguments.length;
var i__4737__auto___30266 = (0);
while(true){
if((i__4737__auto___30266 < len__4736__auto___30265)){
args__4742__auto__.push((arguments[i__4737__auto___30266]));

var G__30267 = (i__4737__auto___30266 + (1));
i__4737__auto___30266 = G__30267;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__30261){
var vec__30262 = p__30261;
var default$ = cljs.core.nth.call(null,vec__30262,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
}));

(reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq30259){
var G__30260 = cljs.core.first.call(null,seq30259);
var seq30259__$1 = cljs.core.next.call(null,seq30259);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30260,seq30259__$1);
}));

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30272 = arguments.length;
var i__4737__auto___30273 = (0);
while(true){
if((i__4737__auto___30273 < len__4736__auto___30272)){
args__4742__auto__.push((arguments[i__4737__auto___30273]));

var G__30274 = (i__4737__auto___30273 + (1));
i__4737__auto___30273 = G__30274;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__30268_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__30268_SHARP_,k,f),args);
}));
}));

(reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq30269){
var G__30270 = cljs.core.first.call(null,seq30269);
var seq30269__$1 = cljs.core.next.call(null,seq30269);
var G__30271 = cljs.core.first.call(null,seq30269__$1);
var seq30269__$2 = cljs.core.next.call(null,seq30269__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30270,G__30271,seq30269__$2);
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
var len__4736__auto___30279 = arguments.length;
var i__4737__auto___30280 = (0);
while(true){
if((i__4737__auto___30280 < len__4736__auto___30279)){
args__4742__auto__.push((arguments[i__4737__auto___30280]));

var G__30281 = (i__4737__auto___30280 + (1));
i__4737__auto___30280 = G__30281;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__30275_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__30275_SHARP_,ks,f),args);
}));
}));

(reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq30276){
var G__30277 = cljs.core.first.call(null,seq30276);
var seq30276__$1 = cljs.core.next.call(null,seq30276);
var G__30278 = cljs.core.first.call(null,seq30276__$1);
var seq30276__$2 = cljs.core.next.call(null,seq30276__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30277,G__30278,seq30276__$2);
}));


//# sourceMappingURL=session.js.map?rel=1602360096078
