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
var G__29828__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29828 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29829__i = 0, G__29829__a = new Array(arguments.length -  0);
while (G__29829__i < G__29829__a.length) {G__29829__a[G__29829__i] = arguments[G__29829__i + 0]; ++G__29829__i;}
  args = new cljs.core.IndexedSeq(G__29829__a,0,null);
} 
return G__29828__delegate.call(this,args);};
G__29828.cljs$lang$maxFixedArity = 0;
G__29828.cljs$lang$applyTo = (function (arglist__29830){
var args = cljs.core.seq(arglist__29830);
return G__29828__delegate(args);
});
G__29828.cljs$core$IFn$_invoke$arity$variadic = G__29828__delegate;
return G__29828;
})()
);

(o.error = (function() { 
var G__29831__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29831 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29832__i = 0, G__29832__a = new Array(arguments.length -  0);
while (G__29832__i < G__29832__a.length) {G__29832__a[G__29832__i] = arguments[G__29832__i + 0]; ++G__29832__i;}
  args = new cljs.core.IndexedSeq(G__29832__a,0,null);
} 
return G__29831__delegate.call(this,args);};
G__29831.cljs$lang$maxFixedArity = 0;
G__29831.cljs$lang$applyTo = (function (arglist__29833){
var args = cljs.core.seq(arglist__29833);
return G__29831__delegate(args);
});
G__29831.cljs$core$IFn$_invoke$arity$variadic = G__29831__delegate;
return G__29831;
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

//# sourceMappingURL=debug.js.map?rel=1602360095491
