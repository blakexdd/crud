// Compiled by ClojureScript 1.10.773 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_22438 = (function (value){
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
return devtools$format$IDevtoolsFormat$_header$dyn_22438.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_22439 = (function (value){
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
return devtools$format$IDevtoolsFormat$_has_body$dyn_22439.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_22440 = (function (value){
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
return devtools$format$IDevtoolsFormat$_body$dyn_22440.call(null,value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o22441 = temp__5733__auto__;
var temp__5733__auto____$1 = (o22441["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o22442 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o22442["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o22443 = temp__5733__auto____$2;
return (o22443["make_template"]);
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
var o22444 = temp__5733__auto__;
var temp__5733__auto____$1 = (o22444["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o22445 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o22445["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o22446 = temp__5733__auto____$2;
return (o22446["make_group"]);
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
var o22447 = temp__5733__auto__;
var temp__5733__auto____$1 = (o22447["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o22448 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o22448["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o22449 = temp__5733__auto____$2;
return (o22449["make_reference"]);
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
var o22450 = temp__5733__auto__;
var temp__5733__auto____$1 = (o22450["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o22451 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o22451["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o22452 = temp__5733__auto____$2;
return (o22452["make_surrogate"]);
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
var o22453 = temp__5733__auto__;
var temp__5733__auto____$1 = (o22453["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o22454 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o22454["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o22455 = temp__5733__auto____$2;
return (o22455["render_markup"]);
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
var o22456 = temp__5733__auto__;
var temp__5733__auto____$1 = (o22456["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o22457 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o22457["markup"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o22458 = temp__5733__auto____$2;
return (o22458["_LT_header_GT_"]);
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
var o22459 = temp__5733__auto__;
var temp__5733__auto____$1 = (o22459["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o22460 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o22460["markup"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o22461 = temp__5733__auto____$2;
return (o22461["_LT_standard_body_GT_"]);
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
var len__4736__auto___22463 = arguments.length;
var i__4737__auto___22464 = (0);
while(true){
if((i__4737__auto___22464 < len__4736__auto___22463)){
args__4742__auto__.push((arguments[i__4737__auto___22464]));

var G__22465 = (i__4737__auto___22464 + (1));
i__4737__auto___22464 = G__22465;
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
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq22462){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22462));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22467 = arguments.length;
var i__4737__auto___22468 = (0);
while(true){
if((i__4737__auto___22468 < len__4736__auto___22467)){
args__4742__auto__.push((arguments[i__4737__auto___22468]));

var G__22469 = (i__4737__auto___22468 + (1));
i__4737__auto___22468 = G__22469;
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
(devtools.format.make_template.cljs$lang$applyTo = (function (seq22466){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22466));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22471 = arguments.length;
var i__4737__auto___22472 = (0);
while(true){
if((i__4737__auto___22472 < len__4736__auto___22471)){
args__4742__auto__.push((arguments[i__4737__auto___22472]));

var G__22473 = (i__4737__auto___22472 + (1));
i__4737__auto___22472 = G__22473;
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
(devtools.format.make_group.cljs$lang$applyTo = (function (seq22470){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22470));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22475 = arguments.length;
var i__4737__auto___22476 = (0);
while(true){
if((i__4737__auto___22476 < len__4736__auto___22475)){
args__4742__auto__.push((arguments[i__4737__auto___22476]));

var G__22477 = (i__4737__auto___22476 + (1));
i__4737__auto___22476 = G__22477;
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
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq22474){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22474));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22479 = arguments.length;
var i__4737__auto___22480 = (0);
while(true){
if((i__4737__auto___22480 < len__4736__auto___22479)){
args__4742__auto__.push((arguments[i__4737__auto___22480]));

var G__22481 = (i__4737__auto___22480 + (1));
i__4737__auto___22480 = G__22481;
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
(devtools.format.template.cljs$lang$applyTo = (function (seq22478){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22478));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22483 = arguments.length;
var i__4737__auto___22484 = (0);
while(true){
if((i__4737__auto___22484 < len__4736__auto___22483)){
args__4742__auto__.push((arguments[i__4737__auto___22484]));

var G__22485 = (i__4737__auto___22484 + (1));
i__4737__auto___22484 = G__22485;
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
(devtools.format.group.cljs$lang$applyTo = (function (seq22482){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22482));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22487 = arguments.length;
var i__4737__auto___22488 = (0);
while(true){
if((i__4737__auto___22488 < len__4736__auto___22487)){
args__4742__auto__.push((arguments[i__4737__auto___22488]));

var G__22489 = (i__4737__auto___22488 + (1));
i__4737__auto___22488 = G__22489;
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
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq22486){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22486));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22497 = arguments.length;
var i__4737__auto___22498 = (0);
while(true){
if((i__4737__auto___22498 < len__4736__auto___22497)){
args__4742__auto__.push((arguments[i__4737__auto___22498]));

var G__22499 = (i__4737__auto___22498 + (1));
i__4737__auto___22498 = G__22499;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__22493){
var vec__22494 = p__22493;
var state_override = cljs.core.nth.call(null,vec__22494,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__22490_SHARP_){
return cljs.core.merge.call(null,p1__22490_SHARP_,state_override);
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq22491){
var G__22492 = cljs.core.first.call(null,seq22491);
var seq22491__$1 = cljs.core.next.call(null,seq22491);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22492,seq22491__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22501 = arguments.length;
var i__4737__auto___22502 = (0);
while(true){
if((i__4737__auto___22502 < len__4736__auto___22501)){
args__4742__auto__.push((arguments[i__4737__auto___22502]));

var G__22503 = (i__4737__auto___22502 + (1));
i__4737__auto___22502 = G__22503;
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
(devtools.format.build_header.cljs$lang$applyTo = (function (seq22500){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22500));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22506 = arguments.length;
var i__4737__auto___22507 = (0);
while(true){
if((i__4737__auto___22507 < len__4736__auto___22506)){
args__4742__auto__.push((arguments[i__4737__auto___22507]));

var G__22508 = (i__4737__auto___22507 + (1));
i__4737__auto___22507 = G__22508;
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
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq22504){
var G__22505 = cljs.core.first.call(null,seq22504);
var seq22504__$1 = cljs.core.next.call(null,seq22504);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22505,seq22504__$1);
}));


//# sourceMappingURL=format.js.map?rel=1602351792119
