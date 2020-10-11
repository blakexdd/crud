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
var G__23818__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__23818 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23819__i = 0, G__23819__a = new Array(arguments.length -  0);
while (G__23819__i < G__23819__a.length) {G__23819__a[G__23819__i] = arguments[G__23819__i + 0]; ++G__23819__i;}
  args = new cljs.core.IndexedSeq(G__23819__a,0,null);
} 
return G__23818__delegate.call(this,args);};
G__23818.cljs$lang$maxFixedArity = 0;
G__23818.cljs$lang$applyTo = (function (arglist__23820){
var args = cljs.core.seq(arglist__23820);
return G__23818__delegate(args);
});
G__23818.cljs$core$IFn$_invoke$arity$variadic = G__23818__delegate;
return G__23818;
})()
);

(o.error = (function() { 
var G__23821__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__23821 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23822__i = 0, G__23822__a = new Array(arguments.length -  0);
while (G__23822__i < G__23822__a.length) {G__23822__a[G__23822__i] = arguments[G__23822__i + 0]; ++G__23822__i;}
  args = new cljs.core.IndexedSeq(G__23822__a,0,null);
} 
return G__23821__delegate.call(this,args);};
G__23821.cljs$lang$maxFixedArity = 0;
G__23821.cljs$lang$applyTo = (function (arglist__23823){
var args = cljs.core.seq(arglist__23823);
return G__23821__delegate(args);
});
G__23821.cljs$core$IFn$_invoke$arity$variadic = G__23821__delegate;
return G__23821;
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

//# sourceMappingURL=debug.js.map?rel=1602418804293
