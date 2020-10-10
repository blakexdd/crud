// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__23998__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__23998 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23999__i = 0, G__23999__a = new Array(arguments.length -  0);
while (G__23999__i < G__23999__a.length) {G__23999__a[G__23999__i] = arguments[G__23999__i + 0]; ++G__23999__i;}
  args = new cljs.core.IndexedSeq(G__23999__a,0,null);
} 
return G__23998__delegate.call(this,args);};
G__23998.cljs$lang$maxFixedArity = 0;
G__23998.cljs$lang$applyTo = (function (arglist__24000){
var args = cljs.core.seq(arglist__24000);
return G__23998__delegate(args);
});
G__23998.cljs$core$IFn$_invoke$arity$variadic = G__23998__delegate;
return G__23998;
})()
);

(o.error = (function() { 
var G__24001__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24001 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24002__i = 0, G__24002__a = new Array(arguments.length -  0);
while (G__24002__i < G__24002__a.length) {G__24002__a[G__24002__i] = arguments[G__24002__i + 0]; ++G__24002__i;}
  args = new cljs.core.IndexedSeq(G__24002__a,0,null);
} 
return G__24001__delegate.call(this,args);};
G__24001.cljs$lang$maxFixedArity = 0;
G__24001.cljs$lang$applyTo = (function (arglist__24003){
var args = cljs.core.seq(arglist__24003);
return G__24001__delegate(args);
});
G__24001.cljs$core$IFn$_invoke$arity$variadic = G__24001__delegate;
return G__24001;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1602351793468
