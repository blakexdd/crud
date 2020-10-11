// Compiled by ClojureScript 1.10.773 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_24301 = (function (value){
var x__4428__auto__ = (((value == null))?null:value);
var m__4429__auto__ = (devtools.format._header[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,value);
} else {
var m__4426__auto__ = (devtools.format._header["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_24301.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_24302 = (function (value){
var x__4428__auto__ = (((value == null))?null:value);
var m__4429__auto__ = (devtools.format._has_body[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,value);
} else {
var m__4426__auto__ = (devtools.format._has_body["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_24302.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_24303 = (function (value){
var x__4428__auto__ = (((value == null))?null:value);
var m__4429__auto__ = (devtools.format._body[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,value);
} else {
var m__4426__auto__ = (devtools.format._body["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_24303.call(null,value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o24304 = temp__5733__auto__;
var temp__5733__auto____$1 = (o24304["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o24305 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o24305["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o24306 = temp__5733__auto____$2;
return (o24306["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o24307 = temp__5733__auto__;
var temp__5733__auto____$1 = (o24307["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o24308 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o24308["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o24309 = temp__5733__auto____$2;
return (o24309["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o24310 = temp__5733__auto__;
var temp__5733__auto____$1 = (o24310["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o24311 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o24311["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o24312 = temp__5733__auto____$2;
return (o24312["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o24313 = temp__5733__auto__;
var temp__5733__auto____$1 = (o24313["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o24314 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o24314["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o24315 = temp__5733__auto____$2;
return (o24315["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o24316 = temp__5733__auto__;
var temp__5733__auto____$1 = (o24316["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o24317 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o24317["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o24318 = temp__5733__auto____$2;
return (o24318["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o24319 = temp__5733__auto__;
var temp__5733__auto____$1 = (o24319["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o24320 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o24320["markup"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o24321 = temp__5733__auto____$2;
return (o24321["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o24322 = temp__5733__auto__;
var temp__5733__auto____$1 = (o24322["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o24323 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o24323["markup"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o24324 = temp__5733__auto____$2;
return (o24324["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24326 = arguments.length;
var i__4737__auto___24327 = (0);
while(true){
if((i__4737__auto___24327 < len__4736__auto___24326)){
args__4742__auto__.push((arguments[i__4737__auto___24327]));

var G__24328 = (i__4737__auto___24327 + (1));
i__4737__auto___24327 = G__24328;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq24325){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24325));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24330 = arguments.length;
var i__4737__auto___24331 = (0);
while(true){
if((i__4737__auto___24331 < len__4736__auto___24330)){
args__4742__auto__.push((arguments[i__4737__auto___24331]));

var G__24332 = (i__4737__auto___24331 + (1));
i__4737__auto___24331 = G__24332;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq24329){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24329));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24334 = arguments.length;
var i__4737__auto___24335 = (0);
while(true){
if((i__4737__auto___24335 < len__4736__auto___24334)){
args__4742__auto__.push((arguments[i__4737__auto___24335]));

var G__24336 = (i__4737__auto___24335 + (1));
i__4737__auto___24335 = G__24336;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq24333){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24333));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24338 = arguments.length;
var i__4737__auto___24339 = (0);
while(true){
if((i__4737__auto___24339 < len__4736__auto___24338)){
args__4742__auto__.push((arguments[i__4737__auto___24339]));

var G__24340 = (i__4737__auto___24339 + (1));
i__4737__auto___24339 = G__24340;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq24337){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24337));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24342 = arguments.length;
var i__4737__auto___24343 = (0);
while(true){
if((i__4737__auto___24343 < len__4736__auto___24342)){
args__4742__auto__.push((arguments[i__4737__auto___24343]));

var G__24344 = (i__4737__auto___24343 + (1));
i__4737__auto___24343 = G__24344;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq24341){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24341));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24346 = arguments.length;
var i__4737__auto___24347 = (0);
while(true){
if((i__4737__auto___24347 < len__4736__auto___24346)){
args__4742__auto__.push((arguments[i__4737__auto___24347]));

var G__24348 = (i__4737__auto___24347 + (1));
i__4737__auto___24347 = G__24348;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq24345){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24345));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24350 = arguments.length;
var i__4737__auto___24351 = (0);
while(true){
if((i__4737__auto___24351 < len__4736__auto___24350)){
args__4742__auto__.push((arguments[i__4737__auto___24351]));

var G__24352 = (i__4737__auto___24351 + (1));
i__4737__auto___24351 = G__24352;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq24349){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24349));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24360 = arguments.length;
var i__4737__auto___24361 = (0);
while(true){
if((i__4737__auto___24361 < len__4736__auto___24360)){
args__4742__auto__.push((arguments[i__4737__auto___24361]));

var G__24362 = (i__4737__auto___24361 + (1));
i__4737__auto___24361 = G__24362;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__24356){
var vec__24357 = p__24356;
var state_override = cljs.core.nth.call(null,vec__24357,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__24353_SHARP_){
return cljs.core.merge.call(null,p1__24353_SHARP_,state_override);
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq24354){
var G__24355 = cljs.core.first.call(null,seq24354);
var seq24354__$1 = cljs.core.next.call(null,seq24354);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24355,seq24354__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24364 = arguments.length;
var i__4737__auto___24365 = (0);
while(true){
if((i__4737__auto___24365 < len__4736__auto___24364)){
args__4742__auto__.push((arguments[i__4737__auto___24365]));

var G__24366 = (i__4737__auto___24365 + (1));
i__4737__auto___24365 = G__24366;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq24363){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24363));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24369 = arguments.length;
var i__4737__auto___24370 = (0);
while(true){
if((i__4737__auto___24370 < len__4736__auto___24369)){
args__4742__auto__.push((arguments[i__4737__auto___24370]));

var G__24371 = (i__4737__auto___24370 + (1));
i__4737__auto___24370 = G__24371;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq24367){
var G__24368 = cljs.core.first.call(null,seq24367);
var seq24367__$1 = cljs.core.next.call(null,seq24367);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24368,seq24367__$1);
}));


//# sourceMappingURL=format.js.map?rel=1602418805019
