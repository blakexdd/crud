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
var G__23819__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__23819 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23820__i = 0, G__23820__a = new Array(arguments.length -  0);
while (G__23820__i < G__23820__a.length) {G__23820__a[G__23820__i] = arguments[G__23820__i + 0]; ++G__23820__i;}
  args = new cljs.core.IndexedSeq(G__23820__a,0,null);
} 
return G__23819__delegate.call(this,args);};
G__23819.cljs$lang$maxFixedArity = 0;
G__23819.cljs$lang$applyTo = (function (arglist__23821){
var args = cljs.core.seq(arglist__23821);
return G__23819__delegate(args);
});
G__23819.cljs$core$IFn$_invoke$arity$variadic = G__23819__delegate;
return G__23819;
})()
);

(o.error = (function() { 
var G__23822__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__23822 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23823__i = 0, G__23823__a = new Array(arguments.length -  0);
while (G__23823__i < G__23823__a.length) {G__23823__a[G__23823__i] = arguments[G__23823__i + 0]; ++G__23823__i;}
  args = new cljs.core.IndexedSeq(G__23823__a,0,null);
} 
return G__23822__delegate.call(this,args);};
G__23822.cljs$lang$maxFixedArity = 0;
G__23822.cljs$lang$applyTo = (function (arglist__23824){
var args = cljs.core.seq(arglist__23824);
return G__23822__delegate(args);
});
G__23822.cljs$core$IFn$_invoke$arity$variadic = G__23822__delegate;
return G__23822;
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

//# sourceMappingURL=debug.js.map?rel=1602507657798
