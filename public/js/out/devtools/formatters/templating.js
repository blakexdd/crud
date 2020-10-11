// Compiled by ClojureScript 1.10.773 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x26448_26449 = value;
(x26448_26449.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x26451_26452 = value;
(x26451_26452.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x26454_26455 = value;
(x26454_26455.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
return ((devtools.formatters.templating.group_QMARK_.call(null,value)) && (cljs.core._EQ_.call(null,(value[(0)]),"object")));
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26462 = arguments.length;
var i__4737__auto___26463 = (0);
while(true){
if((i__4737__auto___26463 < len__4736__auto___26462)){
args__4742__auto__.push((arguments[i__4737__auto___26463]));

var G__26464 = (i__4737__auto___26463 + (1));
i__4737__auto___26463 = G__26464;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__26458_26465 = cljs.core.seq.call(null,items);
var chunk__26459_26466 = null;
var count__26460_26467 = (0);
var i__26461_26468 = (0);
while(true){
if((i__26461_26468 < count__26460_26467)){
var item_26469 = cljs.core._nth.call(null,chunk__26459_26466,i__26461_26468);
if((!((item_26469 == null)))){
if(cljs.core.coll_QMARK_.call(null,item_26469)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_26469)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_26469));
}
} else {
}


var G__26470 = seq__26458_26465;
var G__26471 = chunk__26459_26466;
var G__26472 = count__26460_26467;
var G__26473 = (i__26461_26468 + (1));
seq__26458_26465 = G__26470;
chunk__26459_26466 = G__26471;
count__26460_26467 = G__26472;
i__26461_26468 = G__26473;
continue;
} else {
var temp__5735__auto___26474 = cljs.core.seq.call(null,seq__26458_26465);
if(temp__5735__auto___26474){
var seq__26458_26475__$1 = temp__5735__auto___26474;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26458_26475__$1)){
var c__4556__auto___26476 = cljs.core.chunk_first.call(null,seq__26458_26475__$1);
var G__26477 = cljs.core.chunk_rest.call(null,seq__26458_26475__$1);
var G__26478 = c__4556__auto___26476;
var G__26479 = cljs.core.count.call(null,c__4556__auto___26476);
var G__26480 = (0);
seq__26458_26465 = G__26477;
chunk__26459_26466 = G__26478;
count__26460_26467 = G__26479;
i__26461_26468 = G__26480;
continue;
} else {
var item_26481 = cljs.core.first.call(null,seq__26458_26475__$1);
if((!((item_26481 == null)))){
if(cljs.core.coll_QMARK_.call(null,item_26481)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_26481)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_26481));
}
} else {
}


var G__26482 = cljs.core.next.call(null,seq__26458_26475__$1);
var G__26483 = null;
var G__26484 = (0);
var G__26485 = (0);
seq__26458_26465 = G__26482;
chunk__26459_26466 = G__26483;
count__26460_26467 = G__26484;
i__26461_26468 = G__26485;
continue;
}
} else {
}
}
break;
}

return group;
}));

(devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq26457){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26457));
}));

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26493 = arguments.length;
var i__4737__auto___26494 = (0);
while(true){
if((i__4737__auto___26494 < len__4736__auto___26493)){
args__4742__auto__.push((arguments[i__4737__auto___26494]));

var G__26495 = (i__4737__auto___26494 + (1));
i__4737__auto___26494 = G__26495;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__26489_26496 = cljs.core.seq.call(null,children);
var chunk__26490_26497 = null;
var count__26491_26498 = (0);
var i__26492_26499 = (0);
while(true){
if((i__26492_26499 < count__26491_26498)){
var child_26500 = cljs.core._nth.call(null,chunk__26490_26497,i__26492_26499);
if((!((child_26500 == null)))){
if(cljs.core.coll_QMARK_.call(null,child_26500)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_26500))));
} else {
var temp__5733__auto___26501 = devtools.formatters.helpers.pref.call(null,child_26500);
if(cljs.core.truth_(temp__5733__auto___26501)){
var child_value_26502 = temp__5733__auto___26501;
template.push(child_value_26502);
} else {
}
}
} else {
}


var G__26503 = seq__26489_26496;
var G__26504 = chunk__26490_26497;
var G__26505 = count__26491_26498;
var G__26506 = (i__26492_26499 + (1));
seq__26489_26496 = G__26503;
chunk__26490_26497 = G__26504;
count__26491_26498 = G__26505;
i__26492_26499 = G__26506;
continue;
} else {
var temp__5735__auto___26507 = cljs.core.seq.call(null,seq__26489_26496);
if(temp__5735__auto___26507){
var seq__26489_26508__$1 = temp__5735__auto___26507;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26489_26508__$1)){
var c__4556__auto___26509 = cljs.core.chunk_first.call(null,seq__26489_26508__$1);
var G__26510 = cljs.core.chunk_rest.call(null,seq__26489_26508__$1);
var G__26511 = c__4556__auto___26509;
var G__26512 = cljs.core.count.call(null,c__4556__auto___26509);
var G__26513 = (0);
seq__26489_26496 = G__26510;
chunk__26490_26497 = G__26511;
count__26491_26498 = G__26512;
i__26492_26499 = G__26513;
continue;
} else {
var child_26514 = cljs.core.first.call(null,seq__26489_26508__$1);
if((!((child_26514 == null)))){
if(cljs.core.coll_QMARK_.call(null,child_26514)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_26514))));
} else {
var temp__5733__auto___26515 = devtools.formatters.helpers.pref.call(null,child_26514);
if(cljs.core.truth_(temp__5733__auto___26515)){
var child_value_26516 = temp__5733__auto___26515;
template.push(child_value_26516);
} else {
}
}
} else {
}


var G__26517 = cljs.core.next.call(null,seq__26489_26508__$1);
var G__26518 = null;
var G__26519 = (0);
var G__26520 = (0);
seq__26489_26496 = G__26517;
chunk__26490_26497 = G__26518;
count__26491_26498 = G__26519;
i__26492_26499 = G__26520;
continue;
}
} else {
}
}
break;
}

return template;
}));

(devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq26486){
var G__26487 = cljs.core.first.call(null,seq26486);
var seq26486__$1 = cljs.core.next.call(null,seq26486);
var G__26488 = cljs.core.first.call(null,seq26486__$1);
var seq26486__$2 = cljs.core.next.call(null,seq26486__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26487,G__26488,seq26486__$2);
}));

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26523 = arguments.length;
var i__4737__auto___26524 = (0);
while(true){
if((i__4737__auto___26524 < len__4736__auto___26523)){
args__4742__auto__.push((arguments[i__4737__auto___26524]));

var G__26525 = (i__4737__auto___26524 + (1));
i__4737__auto___26524 = G__26525;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
}));

(devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq26521){
var G__26522 = cljs.core.first.call(null,seq26521);
var seq26521__$1 = cljs.core.next.call(null,seq26521);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26522,seq26521__$1);
}));

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26528 = arguments.length;
var i__4737__auto___26529 = (0);
while(true){
if((i__4737__auto___26529 < len__4736__auto___26528)){
args__4742__auto__.push((arguments[i__4737__auto___26529]));

var G__26530 = (i__4737__auto___26529 + (1));
i__4737__auto___26529 = G__26530;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
}));

(devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq26526){
var G__26527 = cljs.core.first.call(null,seq26526);
var seq26526__$1 = cljs.core.next.call(null,seq26526);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26527,seq26526__$1);
}));

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__26532 = arguments.length;
switch (G__26532) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj26534 = ({"target":object,"header":header,"body":body,"startIndex":(function (){var or__4126__auto__ = start_index;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})()});
return obj26534;
})());
}));

(devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4);

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26542 = arguments.length;
var i__4737__auto___26543 = (0);
while(true){
if((i__4737__auto___26543 < len__4736__auto___26542)){
args__4742__auto__.push((arguments[i__4737__auto___26543]));

var G__26544 = (i__4737__auto___26543 + (1));
i__4737__auto___26543 = G__26544;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__26538){
var vec__26539 = p__26538;
var state_override_fn = cljs.core.nth.call(null,vec__26539,(0),null);
if((((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn)))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = (((!((state_override_fn == null))))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
}));

(devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq26536){
var G__26537 = cljs.core.first.call(null,seq26536);
var seq26536__$1 = cljs.core.next.call(null,seq26536);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26537,seq26536__$1);
}));

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR__orig_val__26545 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__26546 = (1);
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__26546);

try{return cljs.core.pr_str.call(null,markup);
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__26545);
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_),"\n","Render stack:\n",devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_)].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return ((cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate")));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__26547 = name;
switch (G__26547) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = ((devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if(((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string'))){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__26549 = tag;
var html_tag = cljs.core.nth.call(null,vec__26549,(0),null);
var style = cljs.core.nth.call(null,vec__26549,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if((!(cljs.core.sequential_QMARK_.call(null,markup)))){
return markup;
} else {
var _STAR_current_render_path_STAR__orig_val__26552 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_path_STAR__temp_val__26553 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));
(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__26553);

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__26552);
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR__orig_val__26554 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR__orig_val__26555 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_stack_STAR__temp_val__26556 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);
var _STAR_current_render_path_STAR__temp_val__26557 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");
(devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__temp_val__26556);

(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__26557);

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__26555);

(devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__orig_val__26554);
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",["result of markup rendering must be a template,\n","resolved to ",devtools.util.pprint_str.call(null,value),"initial value: ",devtools.util.pprint_str.call(null,initial_value)].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__26558 = initial_value;
var G__26559 = value.call(null);
initial_value = G__26558;
value = G__26559;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__26560 = initial_value;
var G__26561 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__26560;
value = G__26561;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__26562 = initial_value;
var G__26563 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__26562;
value = G__26563;
continue;
} else {
if(devtools.formatters.templating.template_QMARK_.call(null,value)){
return value;
} else {
if(devtools.formatters.templating.surrogate_QMARK_.call(null,value)){
return value;
} else {
if(devtools.formatters.templating.reference_QMARK_.call(null,value)){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1602418806918
