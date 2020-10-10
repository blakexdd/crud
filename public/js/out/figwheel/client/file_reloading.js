// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4126__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (cljs.core._EQ_.call(null,"cljs.core",ns)) || (cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__28472 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__28472 == null)){
return null;
} else {
return goog.object.get(G__28472,"requires");
}
}):(function (path){
var G__28473 = goog.object.get(goog.dependencies_.requires,path);
if((G__28473 == null)){
return null;
} else {
return goog.object.getKeys(G__28473);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28474_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28474_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__28475 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__28475__$1 = (((G__28475 == null))?null:goog.object.get(G__28475,"provides"));
if((G__28475__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__28475__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return goog.object.forEach(goog.object.filter(goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,goog.object.get(dep,"provides")));
})),(function (dep,path,_){
var provides = goog.object.get(dep,"provides");
var requires = goog.object.get(dep,"requires");
var seq__28476 = cljs.core.seq.call(null,provides);
var chunk__28477 = null;
var count__28478 = (0);
var i__28479 = (0);
while(true){
if((i__28479 < count__28478)){
var prov = cljs.core._nth.call(null,chunk__28477,i__28479);
var seq__28488_28500 = cljs.core.seq.call(null,requires);
var chunk__28489_28501 = null;
var count__28490_28502 = (0);
var i__28491_28503 = (0);
while(true){
if((i__28491_28503 < count__28490_28502)){
var req_28504 = cljs.core._nth.call(null,chunk__28489_28501,i__28491_28503);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28504,prov);


var G__28505 = seq__28488_28500;
var G__28506 = chunk__28489_28501;
var G__28507 = count__28490_28502;
var G__28508 = (i__28491_28503 + (1));
seq__28488_28500 = G__28505;
chunk__28489_28501 = G__28506;
count__28490_28502 = G__28507;
i__28491_28503 = G__28508;
continue;
} else {
var temp__5735__auto___28509 = cljs.core.seq.call(null,seq__28488_28500);
if(temp__5735__auto___28509){
var seq__28488_28510__$1 = temp__5735__auto___28509;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28488_28510__$1)){
var c__4556__auto___28511 = cljs.core.chunk_first.call(null,seq__28488_28510__$1);
var G__28512 = cljs.core.chunk_rest.call(null,seq__28488_28510__$1);
var G__28513 = c__4556__auto___28511;
var G__28514 = cljs.core.count.call(null,c__4556__auto___28511);
var G__28515 = (0);
seq__28488_28500 = G__28512;
chunk__28489_28501 = G__28513;
count__28490_28502 = G__28514;
i__28491_28503 = G__28515;
continue;
} else {
var req_28516 = cljs.core.first.call(null,seq__28488_28510__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28516,prov);


var G__28517 = cljs.core.next.call(null,seq__28488_28510__$1);
var G__28518 = null;
var G__28519 = (0);
var G__28520 = (0);
seq__28488_28500 = G__28517;
chunk__28489_28501 = G__28518;
count__28490_28502 = G__28519;
i__28491_28503 = G__28520;
continue;
}
} else {
}
}
break;
}


var G__28521 = seq__28476;
var G__28522 = chunk__28477;
var G__28523 = count__28478;
var G__28524 = (i__28479 + (1));
seq__28476 = G__28521;
chunk__28477 = G__28522;
count__28478 = G__28523;
i__28479 = G__28524;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28476);
if(temp__5735__auto__){
var seq__28476__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28476__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28476__$1);
var G__28525 = cljs.core.chunk_rest.call(null,seq__28476__$1);
var G__28526 = c__4556__auto__;
var G__28527 = cljs.core.count.call(null,c__4556__auto__);
var G__28528 = (0);
seq__28476 = G__28525;
chunk__28477 = G__28526;
count__28478 = G__28527;
i__28479 = G__28528;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28476__$1);
var seq__28492_28529 = cljs.core.seq.call(null,requires);
var chunk__28493_28530 = null;
var count__28494_28531 = (0);
var i__28495_28532 = (0);
while(true){
if((i__28495_28532 < count__28494_28531)){
var req_28533 = cljs.core._nth.call(null,chunk__28493_28530,i__28495_28532);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28533,prov);


var G__28534 = seq__28492_28529;
var G__28535 = chunk__28493_28530;
var G__28536 = count__28494_28531;
var G__28537 = (i__28495_28532 + (1));
seq__28492_28529 = G__28534;
chunk__28493_28530 = G__28535;
count__28494_28531 = G__28536;
i__28495_28532 = G__28537;
continue;
} else {
var temp__5735__auto___28538__$1 = cljs.core.seq.call(null,seq__28492_28529);
if(temp__5735__auto___28538__$1){
var seq__28492_28539__$1 = temp__5735__auto___28538__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28492_28539__$1)){
var c__4556__auto___28540 = cljs.core.chunk_first.call(null,seq__28492_28539__$1);
var G__28541 = cljs.core.chunk_rest.call(null,seq__28492_28539__$1);
var G__28542 = c__4556__auto___28540;
var G__28543 = cljs.core.count.call(null,c__4556__auto___28540);
var G__28544 = (0);
seq__28492_28529 = G__28541;
chunk__28493_28530 = G__28542;
count__28494_28531 = G__28543;
i__28495_28532 = G__28544;
continue;
} else {
var req_28545 = cljs.core.first.call(null,seq__28492_28539__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28545,prov);


var G__28546 = cljs.core.next.call(null,seq__28492_28539__$1);
var G__28547 = null;
var G__28548 = (0);
var G__28549 = (0);
seq__28492_28529 = G__28546;
chunk__28493_28530 = G__28547;
count__28494_28531 = G__28548;
i__28495_28532 = G__28549;
continue;
}
} else {
}
}
break;
}


var G__28550 = cljs.core.next.call(null,seq__28476__$1);
var G__28551 = null;
var G__28552 = (0);
var G__28553 = (0);
seq__28476 = G__28550;
chunk__28477 = G__28551;
count__28478 = G__28552;
i__28479 = G__28553;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (deps,path,_){
var seq__28496 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__28497 = null;
var count__28498 = (0);
var i__28499 = (0);
while(true){
if((i__28499 < count__28498)){
var prov = cljs.core._nth.call(null,chunk__28497,i__28499);
goog.object.forEach(deps,((function (seq__28496,chunk__28497,count__28498,i__28499,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__28496,chunk__28497,count__28498,i__28499,prov,requires))
);


var G__28554 = seq__28496;
var G__28555 = chunk__28497;
var G__28556 = count__28498;
var G__28557 = (i__28499 + (1));
seq__28496 = G__28554;
chunk__28497 = G__28555;
count__28498 = G__28556;
i__28499 = G__28557;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28496);
if(temp__5735__auto__){
var seq__28496__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28496__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28496__$1);
var G__28558 = cljs.core.chunk_rest.call(null,seq__28496__$1);
var G__28559 = c__4556__auto__;
var G__28560 = cljs.core.count.call(null,c__4556__auto__);
var G__28561 = (0);
seq__28496 = G__28558;
chunk__28497 = G__28559;
count__28498 = G__28560;
i__28499 = G__28561;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28496__$1);
goog.object.forEach(deps,((function (seq__28496,chunk__28497,count__28498,i__28499,prov,seq__28496__$1,temp__5735__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__28496,chunk__28497,count__28498,i__28499,prov,seq__28496__$1,temp__5735__auto__,requires))
);


var G__28562 = cljs.core.next.call(null,seq__28496__$1);
var G__28563 = null;
var G__28564 = (0);
var G__28565 = (0);
seq__28496 = G__28562;
chunk__28497 = G__28563;
count__28498 = G__28564;
i__28499 = G__28565;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__28566){
var vec__28567 = p__28566;
var _ = cljs.core.nth.call(null,vec__28567,(0),null);
var v = cljs.core.nth.call(null,vec__28567,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__28570){
var vec__28571 = p__28570;
var k = cljs.core.nth.call(null,vec__28571,(0),null);
var v = cljs.core.nth.call(null,vec__28571,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28583_28591 = cljs.core.seq.call(null,deps);
var chunk__28584_28592 = null;
var count__28585_28593 = (0);
var i__28586_28594 = (0);
while(true){
if((i__28586_28594 < count__28585_28593)){
var dep_28595 = cljs.core._nth.call(null,chunk__28584_28592,i__28586_28594);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_28595;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28595));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28595,(depth + (1)),state);
} else {
}


var G__28596 = seq__28583_28591;
var G__28597 = chunk__28584_28592;
var G__28598 = count__28585_28593;
var G__28599 = (i__28586_28594 + (1));
seq__28583_28591 = G__28596;
chunk__28584_28592 = G__28597;
count__28585_28593 = G__28598;
i__28586_28594 = G__28599;
continue;
} else {
var temp__5735__auto___28600 = cljs.core.seq.call(null,seq__28583_28591);
if(temp__5735__auto___28600){
var seq__28583_28601__$1 = temp__5735__auto___28600;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28583_28601__$1)){
var c__4556__auto___28602 = cljs.core.chunk_first.call(null,seq__28583_28601__$1);
var G__28603 = cljs.core.chunk_rest.call(null,seq__28583_28601__$1);
var G__28604 = c__4556__auto___28602;
var G__28605 = cljs.core.count.call(null,c__4556__auto___28602);
var G__28606 = (0);
seq__28583_28591 = G__28603;
chunk__28584_28592 = G__28604;
count__28585_28593 = G__28605;
i__28586_28594 = G__28606;
continue;
} else {
var dep_28607 = cljs.core.first.call(null,seq__28583_28601__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_28607;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28607));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28607,(depth + (1)),state);
} else {
}


var G__28608 = cljs.core.next.call(null,seq__28583_28601__$1);
var G__28609 = null;
var G__28610 = (0);
var G__28611 = (0);
seq__28583_28591 = G__28608;
chunk__28584_28592 = G__28609;
count__28585_28593 = G__28610;
i__28586_28594 = G__28611;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28587){
var vec__28588 = p__28587;
var seq__28589 = cljs.core.seq.call(null,vec__28588);
var first__28590 = cljs.core.first.call(null,seq__28589);
var seq__28589__$1 = cljs.core.next.call(null,seq__28589);
var x = first__28590;
var xs = seq__28589__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__28574_SHARP_){
return clojure.set.difference.call(null,p1__28574_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__28612_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__28612_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28613 = cljs.core.seq.call(null,provides);
var chunk__28614 = null;
var count__28615 = (0);
var i__28616 = (0);
while(true){
if((i__28616 < count__28615)){
var prov = cljs.core._nth.call(null,chunk__28614,i__28616);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28625_28633 = cljs.core.seq.call(null,requires);
var chunk__28626_28634 = null;
var count__28627_28635 = (0);
var i__28628_28636 = (0);
while(true){
if((i__28628_28636 < count__28627_28635)){
var req_28637 = cljs.core._nth.call(null,chunk__28626_28634,i__28628_28636);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28637,prov);


var G__28638 = seq__28625_28633;
var G__28639 = chunk__28626_28634;
var G__28640 = count__28627_28635;
var G__28641 = (i__28628_28636 + (1));
seq__28625_28633 = G__28638;
chunk__28626_28634 = G__28639;
count__28627_28635 = G__28640;
i__28628_28636 = G__28641;
continue;
} else {
var temp__5735__auto___28642 = cljs.core.seq.call(null,seq__28625_28633);
if(temp__5735__auto___28642){
var seq__28625_28643__$1 = temp__5735__auto___28642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28625_28643__$1)){
var c__4556__auto___28644 = cljs.core.chunk_first.call(null,seq__28625_28643__$1);
var G__28645 = cljs.core.chunk_rest.call(null,seq__28625_28643__$1);
var G__28646 = c__4556__auto___28644;
var G__28647 = cljs.core.count.call(null,c__4556__auto___28644);
var G__28648 = (0);
seq__28625_28633 = G__28645;
chunk__28626_28634 = G__28646;
count__28627_28635 = G__28647;
i__28628_28636 = G__28648;
continue;
} else {
var req_28649 = cljs.core.first.call(null,seq__28625_28643__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28649,prov);


var G__28650 = cljs.core.next.call(null,seq__28625_28643__$1);
var G__28651 = null;
var G__28652 = (0);
var G__28653 = (0);
seq__28625_28633 = G__28650;
chunk__28626_28634 = G__28651;
count__28627_28635 = G__28652;
i__28628_28636 = G__28653;
continue;
}
} else {
}
}
break;
}


var G__28654 = seq__28613;
var G__28655 = chunk__28614;
var G__28656 = count__28615;
var G__28657 = (i__28616 + (1));
seq__28613 = G__28654;
chunk__28614 = G__28655;
count__28615 = G__28656;
i__28616 = G__28657;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28613);
if(temp__5735__auto__){
var seq__28613__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28613__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28613__$1);
var G__28658 = cljs.core.chunk_rest.call(null,seq__28613__$1);
var G__28659 = c__4556__auto__;
var G__28660 = cljs.core.count.call(null,c__4556__auto__);
var G__28661 = (0);
seq__28613 = G__28658;
chunk__28614 = G__28659;
count__28615 = G__28660;
i__28616 = G__28661;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28613__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28629_28662 = cljs.core.seq.call(null,requires);
var chunk__28630_28663 = null;
var count__28631_28664 = (0);
var i__28632_28665 = (0);
while(true){
if((i__28632_28665 < count__28631_28664)){
var req_28666 = cljs.core._nth.call(null,chunk__28630_28663,i__28632_28665);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28666,prov);


var G__28667 = seq__28629_28662;
var G__28668 = chunk__28630_28663;
var G__28669 = count__28631_28664;
var G__28670 = (i__28632_28665 + (1));
seq__28629_28662 = G__28667;
chunk__28630_28663 = G__28668;
count__28631_28664 = G__28669;
i__28632_28665 = G__28670;
continue;
} else {
var temp__5735__auto___28671__$1 = cljs.core.seq.call(null,seq__28629_28662);
if(temp__5735__auto___28671__$1){
var seq__28629_28672__$1 = temp__5735__auto___28671__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28629_28672__$1)){
var c__4556__auto___28673 = cljs.core.chunk_first.call(null,seq__28629_28672__$1);
var G__28674 = cljs.core.chunk_rest.call(null,seq__28629_28672__$1);
var G__28675 = c__4556__auto___28673;
var G__28676 = cljs.core.count.call(null,c__4556__auto___28673);
var G__28677 = (0);
seq__28629_28662 = G__28674;
chunk__28630_28663 = G__28675;
count__28631_28664 = G__28676;
i__28632_28665 = G__28677;
continue;
} else {
var req_28678 = cljs.core.first.call(null,seq__28629_28672__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28678,prov);


var G__28679 = cljs.core.next.call(null,seq__28629_28672__$1);
var G__28680 = null;
var G__28681 = (0);
var G__28682 = (0);
seq__28629_28662 = G__28679;
chunk__28630_28663 = G__28680;
count__28631_28664 = G__28681;
i__28632_28665 = G__28682;
continue;
}
} else {
}
}
break;
}


var G__28683 = cljs.core.next.call(null,seq__28613__$1);
var G__28684 = null;
var G__28685 = (0);
var G__28686 = (0);
seq__28613 = G__28683;
chunk__28614 = G__28684;
count__28615 = G__28685;
i__28616 = G__28686;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28687_28691 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28688_28692 = null;
var count__28689_28693 = (0);
var i__28690_28694 = (0);
while(true){
if((i__28690_28694 < count__28689_28693)){
var ns_28695 = cljs.core._nth.call(null,chunk__28688_28692,i__28690_28694);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28695);


var G__28696 = seq__28687_28691;
var G__28697 = chunk__28688_28692;
var G__28698 = count__28689_28693;
var G__28699 = (i__28690_28694 + (1));
seq__28687_28691 = G__28696;
chunk__28688_28692 = G__28697;
count__28689_28693 = G__28698;
i__28690_28694 = G__28699;
continue;
} else {
var temp__5735__auto___28700 = cljs.core.seq.call(null,seq__28687_28691);
if(temp__5735__auto___28700){
var seq__28687_28701__$1 = temp__5735__auto___28700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28687_28701__$1)){
var c__4556__auto___28702 = cljs.core.chunk_first.call(null,seq__28687_28701__$1);
var G__28703 = cljs.core.chunk_rest.call(null,seq__28687_28701__$1);
var G__28704 = c__4556__auto___28702;
var G__28705 = cljs.core.count.call(null,c__4556__auto___28702);
var G__28706 = (0);
seq__28687_28691 = G__28703;
chunk__28688_28692 = G__28704;
count__28689_28693 = G__28705;
i__28690_28694 = G__28706;
continue;
} else {
var ns_28707 = cljs.core.first.call(null,seq__28687_28701__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28707);


var G__28708 = cljs.core.next.call(null,seq__28687_28701__$1);
var G__28709 = null;
var G__28710 = (0);
var G__28711 = (0);
seq__28687_28691 = G__28708;
chunk__28688_28692 = G__28709;
count__28689_28693 = G__28710;
i__28690_28694 = G__28711;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4126__auto__ = goog.require__;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__28712__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28712 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28713__i = 0, G__28713__a = new Array(arguments.length -  0);
while (G__28713__i < G__28713__a.length) {G__28713__a[G__28713__i] = arguments[G__28713__i + 0]; ++G__28713__i;}
  args = new cljs.core.IndexedSeq(G__28713__a,0,null);
} 
return G__28712__delegate.call(this,args);};
G__28712.cljs$lang$maxFixedArity = 0;
G__28712.cljs$lang$applyTo = (function (arglist__28714){
var args = cljs.core.seq(arglist__28714);
return G__28712__delegate(args);
});
G__28712.cljs$core$IFn$_invoke$arity$variadic = G__28712__delegate;
return G__28712;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28715_SHARP_,p2__28716_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28715_SHARP_)),p2__28716_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28717_SHARP_,p2__28718_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28717_SHARP_),p2__28718_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28719 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28719.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__28719.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__28719;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28720){if((e28720 instanceof Error)){
var e = e28720;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28720;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28721){if((e28721 instanceof Error)){
var e = e28721;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28721;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28722 = cljs.core._EQ_;
var expr__28723 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28722.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28723))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28722.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28723))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28722.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28723))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28725,callback){
var map__28726 = p__28725;
var map__28726__$1 = (((((!((map__28726 == null))))?(((((map__28726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28726):map__28726);
var file_msg = map__28726__$1;
var request_url = cljs.core.get.call(null,map__28726__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4126__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26346__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26347__auto__ = (function (){var switch__26251__auto__ = (function (state_28764){
var state_val_28765 = (state_28764[(1)]);
if((state_val_28765 === (7))){
var inst_28760 = (state_28764[(2)]);
var state_28764__$1 = state_28764;
var statearr_28766_28792 = state_28764__$1;
(statearr_28766_28792[(2)] = inst_28760);

(statearr_28766_28792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28765 === (1))){
var state_28764__$1 = state_28764;
var statearr_28767_28793 = state_28764__$1;
(statearr_28767_28793[(2)] = null);

(statearr_28767_28793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28765 === (4))){
var inst_28730 = (state_28764[(7)]);
var inst_28730__$1 = (state_28764[(2)]);
var state_28764__$1 = (function (){var statearr_28768 = state_28764;
(statearr_28768[(7)] = inst_28730__$1);

return statearr_28768;
})();
if(cljs.core.truth_(inst_28730__$1)){
var statearr_28769_28794 = state_28764__$1;
(statearr_28769_28794[(1)] = (5));

} else {
var statearr_28770_28795 = state_28764__$1;
(statearr_28770_28795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28765 === (15))){
var inst_28743 = (state_28764[(8)]);
var inst_28745 = (state_28764[(9)]);
var inst_28747 = inst_28745.call(null,inst_28743);
var state_28764__$1 = state_28764;
var statearr_28771_28796 = state_28764__$1;
(statearr_28771_28796[(2)] = inst_28747);

(statearr_28771_28796[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28765 === (13))){
var inst_28754 = (state_28764[(2)]);
var state_28764__$1 = state_28764;
var statearr_28772_28797 = state_28764__$1;
(statearr_28772_28797[(2)] = inst_28754);

(statearr_28772_28797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28765 === (6))){
var state_28764__$1 = state_28764;
var statearr_28773_28798 = state_28764__$1;
(statearr_28773_28798[(2)] = null);

(statearr_28773_28798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28765 === (17))){
var inst_28751 = (state_28764[(2)]);
var state_28764__$1 = state_28764;
var statearr_28774_28799 = state_28764__$1;
(statearr_28774_28799[(2)] = inst_28751);

(statearr_28774_28799[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28765 === (3))){
var inst_28762 = (state_28764[(2)]);
var state_28764__$1 = state_28764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28764__$1,inst_28762);
} else {
if((state_val_28765 === (12))){
var state_28764__$1 = state_28764;
var statearr_28775_28800 = state_28764__$1;
(statearr_28775_28800[(2)] = null);

(statearr_28775_28800[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28765 === (2))){
var state_28764__$1 = state_28764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28764__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28765 === (11))){
var inst_28735 = (state_28764[(10)]);
var inst_28741 = figwheel.client.file_reloading.blocking_load.call(null,inst_28735);
var state_28764__$1 = state_28764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28764__$1,(14),inst_28741);
} else {
if((state_val_28765 === (9))){
var inst_28735 = (state_28764[(10)]);
var state_28764__$1 = state_28764;
if(cljs.core.truth_(inst_28735)){
var statearr_28776_28801 = state_28764__$1;
(statearr_28776_28801[(1)] = (11));

} else {
var statearr_28777_28802 = state_28764__$1;
(statearr_28777_28802[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28765 === (5))){
var inst_28736 = (state_28764[(11)]);
var inst_28730 = (state_28764[(7)]);
var inst_28735 = cljs.core.nth.call(null,inst_28730,(0),null);
var inst_28736__$1 = cljs.core.nth.call(null,inst_28730,(1),null);
var state_28764__$1 = (function (){var statearr_28778 = state_28764;
(statearr_28778[(11)] = inst_28736__$1);

(statearr_28778[(10)] = inst_28735);

return statearr_28778;
})();
if(cljs.core.truth_(inst_28736__$1)){
var statearr_28779_28803 = state_28764__$1;
(statearr_28779_28803[(1)] = (8));

} else {
var statearr_28780_28804 = state_28764__$1;
(statearr_28780_28804[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28765 === (14))){
var inst_28735 = (state_28764[(10)]);
var inst_28745 = (state_28764[(9)]);
var inst_28743 = (state_28764[(2)]);
var inst_28744 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28745__$1 = cljs.core.get.call(null,inst_28744,inst_28735);
var state_28764__$1 = (function (){var statearr_28781 = state_28764;
(statearr_28781[(8)] = inst_28743);

(statearr_28781[(9)] = inst_28745__$1);

return statearr_28781;
})();
if(cljs.core.truth_(inst_28745__$1)){
var statearr_28782_28805 = state_28764__$1;
(statearr_28782_28805[(1)] = (15));

} else {
var statearr_28783_28806 = state_28764__$1;
(statearr_28783_28806[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28765 === (16))){
var inst_28743 = (state_28764[(8)]);
var inst_28749 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28743);
var state_28764__$1 = state_28764;
var statearr_28784_28807 = state_28764__$1;
(statearr_28784_28807[(2)] = inst_28749);

(statearr_28784_28807[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28765 === (10))){
var inst_28756 = (state_28764[(2)]);
var state_28764__$1 = (function (){var statearr_28785 = state_28764;
(statearr_28785[(12)] = inst_28756);

return statearr_28785;
})();
var statearr_28786_28808 = state_28764__$1;
(statearr_28786_28808[(2)] = null);

(statearr_28786_28808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28765 === (8))){
var inst_28736 = (state_28764[(11)]);
var inst_28738 = eval(inst_28736);
var state_28764__$1 = state_28764;
var statearr_28787_28809 = state_28764__$1;
(statearr_28787_28809[(2)] = inst_28738);

(statearr_28787_28809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$state_machine__26252__auto__ = null;
var figwheel$client$file_reloading$state_machine__26252__auto____0 = (function (){
var statearr_28788 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28788[(0)] = figwheel$client$file_reloading$state_machine__26252__auto__);

(statearr_28788[(1)] = (1));

return statearr_28788;
});
var figwheel$client$file_reloading$state_machine__26252__auto____1 = (function (state_28764){
while(true){
var ret_value__26253__auto__ = (function (){try{while(true){
var result__26254__auto__ = switch__26251__auto__.call(null,state_28764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26254__auto__;
}
break;
}
}catch (e28789){if((e28789 instanceof Object)){
var ex__26255__auto__ = e28789;
var statearr_28790_28810 = state_28764;
(statearr_28790_28810[(5)] = ex__26255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28811 = state_28764;
state_28764 = G__28811;
continue;
} else {
return ret_value__26253__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26252__auto__ = function(state_28764){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26252__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26252__auto____1.call(this,state_28764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26252__auto____0;
figwheel$client$file_reloading$state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26252__auto____1;
return figwheel$client$file_reloading$state_machine__26252__auto__;
})()
})();
var state__26348__auto__ = (function (){var statearr_28791 = f__26347__auto__.call(null);
(statearr_28791[(6)] = c__26346__auto__);

return statearr_28791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26348__auto__);
}));

return c__26346__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28813 = arguments.length;
switch (G__28813) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28815,callback){
var map__28816 = p__28815;
var map__28816__$1 = (((((!((map__28816 == null))))?(((((map__28816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28816):map__28816);
var file_msg = map__28816__$1;
var namespace = cljs.core.get.call(null,map__28816__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28818){
var map__28819 = p__28818;
var map__28819__$1 = (((((!((map__28819 == null))))?(((((map__28819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28819):map__28819);
var file_msg = map__28819__$1;
var namespace = cljs.core.get.call(null,map__28819__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28821){
var map__28822 = p__28821;
var map__28822__$1 = (((((!((map__28822 == null))))?(((((map__28822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28822):map__28822);
var file_msg = map__28822__$1;
var namespace = cljs.core.get.call(null,map__28822__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28824,callback){
var map__28825 = p__28824;
var map__28825__$1 = (((((!((map__28825 == null))))?(((((map__28825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28825):map__28825);
var file_msg = map__28825__$1;
var request_url = cljs.core.get.call(null,map__28825__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28825__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26346__auto___28875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26347__auto__ = (function (){var switch__26251__auto__ = (function (state_28860){
var state_val_28861 = (state_28860[(1)]);
if((state_val_28861 === (1))){
var inst_28834 = cljs.core.seq.call(null,files);
var inst_28835 = cljs.core.first.call(null,inst_28834);
var inst_28836 = cljs.core.next.call(null,inst_28834);
var inst_28837 = files;
var state_28860__$1 = (function (){var statearr_28862 = state_28860;
(statearr_28862[(7)] = inst_28837);

(statearr_28862[(8)] = inst_28835);

(statearr_28862[(9)] = inst_28836);

return statearr_28862;
})();
var statearr_28863_28876 = state_28860__$1;
(statearr_28863_28876[(2)] = null);

(statearr_28863_28876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28861 === (2))){
var inst_28837 = (state_28860[(7)]);
var inst_28843 = (state_28860[(10)]);
var inst_28842 = cljs.core.seq.call(null,inst_28837);
var inst_28843__$1 = cljs.core.first.call(null,inst_28842);
var inst_28844 = cljs.core.next.call(null,inst_28842);
var inst_28845 = (inst_28843__$1 == null);
var inst_28846 = cljs.core.not.call(null,inst_28845);
var state_28860__$1 = (function (){var statearr_28864 = state_28860;
(statearr_28864[(11)] = inst_28844);

(statearr_28864[(10)] = inst_28843__$1);

return statearr_28864;
})();
if(inst_28846){
var statearr_28865_28877 = state_28860__$1;
(statearr_28865_28877[(1)] = (4));

} else {
var statearr_28866_28878 = state_28860__$1;
(statearr_28866_28878[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28861 === (3))){
var inst_28858 = (state_28860[(2)]);
var state_28860__$1 = state_28860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28860__$1,inst_28858);
} else {
if((state_val_28861 === (4))){
var inst_28843 = (state_28860[(10)]);
var inst_28848 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28843);
var state_28860__$1 = state_28860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28860__$1,(7),inst_28848);
} else {
if((state_val_28861 === (5))){
var inst_28854 = cljs.core.async.close_BANG_.call(null,out);
var state_28860__$1 = state_28860;
var statearr_28867_28879 = state_28860__$1;
(statearr_28867_28879[(2)] = inst_28854);

(statearr_28867_28879[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28861 === (6))){
var inst_28856 = (state_28860[(2)]);
var state_28860__$1 = state_28860;
var statearr_28868_28880 = state_28860__$1;
(statearr_28868_28880[(2)] = inst_28856);

(statearr_28868_28880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28861 === (7))){
var inst_28844 = (state_28860[(11)]);
var inst_28850 = (state_28860[(2)]);
var inst_28851 = cljs.core.async.put_BANG_.call(null,out,inst_28850);
var inst_28837 = inst_28844;
var state_28860__$1 = (function (){var statearr_28869 = state_28860;
(statearr_28869[(7)] = inst_28837);

(statearr_28869[(12)] = inst_28851);

return statearr_28869;
})();
var statearr_28870_28881 = state_28860__$1;
(statearr_28870_28881[(2)] = null);

(statearr_28870_28881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26252__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26252__auto____0 = (function (){
var statearr_28871 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28871[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26252__auto__);

(statearr_28871[(1)] = (1));

return statearr_28871;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26252__auto____1 = (function (state_28860){
while(true){
var ret_value__26253__auto__ = (function (){try{while(true){
var result__26254__auto__ = switch__26251__auto__.call(null,state_28860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26254__auto__;
}
break;
}
}catch (e28872){if((e28872 instanceof Object)){
var ex__26255__auto__ = e28872;
var statearr_28873_28882 = state_28860;
(statearr_28873_28882[(5)] = ex__26255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28883 = state_28860;
state_28860 = G__28883;
continue;
} else {
return ret_value__26253__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26252__auto__ = function(state_28860){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26252__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26252__auto____1.call(this,state_28860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26252__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26252__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26252__auto__;
})()
})();
var state__26348__auto__ = (function (){var statearr_28874 = f__26347__auto__.call(null);
(statearr_28874[(6)] = c__26346__auto___28875);

return statearr_28874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26348__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28884,opts){
var map__28885 = p__28884;
var map__28885__$1 = (((((!((map__28885 == null))))?(((((map__28885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28885):map__28885);
var eval_body = cljs.core.get.call(null,map__28885__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28885__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4115__auto__ = eval_body;
if(cljs.core.truth_(and__4115__auto__)){
return typeof eval_body === 'string';
} else {
return and__4115__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28887){var e = e28887;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__28888_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28888_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28889){
var vec__28890 = p__28889;
var k = cljs.core.nth.call(null,vec__28890,(0),null);
var v = cljs.core.nth.call(null,vec__28890,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28893){
var vec__28894 = p__28893;
var k = cljs.core.nth.call(null,vec__28894,(0),null);
var v = cljs.core.nth.call(null,vec__28894,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28900,p__28901){
var map__28902 = p__28900;
var map__28902__$1 = (((((!((map__28902 == null))))?(((((map__28902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28902):map__28902);
var opts = map__28902__$1;
var before_jsload = cljs.core.get.call(null,map__28902__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28902__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28902__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28903 = p__28901;
var map__28903__$1 = (((((!((map__28903 == null))))?(((((map__28903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28903):map__28903);
var msg = map__28903__$1;
var files = cljs.core.get.call(null,map__28903__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28903__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28903__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26346__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26347__auto__ = (function (){var switch__26251__auto__ = (function (state_29057){
var state_val_29058 = (state_29057[(1)]);
if((state_val_29058 === (7))){
var inst_28920 = (state_29057[(7)]);
var inst_28919 = (state_29057[(8)]);
var inst_28918 = (state_29057[(9)]);
var inst_28917 = (state_29057[(10)]);
var inst_28925 = cljs.core._nth.call(null,inst_28918,inst_28920);
var inst_28926 = figwheel.client.file_reloading.eval_body.call(null,inst_28925,opts);
var inst_28927 = (inst_28920 + (1));
var tmp29059 = inst_28919;
var tmp29060 = inst_28918;
var tmp29061 = inst_28917;
var inst_28917__$1 = tmp29061;
var inst_28918__$1 = tmp29060;
var inst_28919__$1 = tmp29059;
var inst_28920__$1 = inst_28927;
var state_29057__$1 = (function (){var statearr_29062 = state_29057;
(statearr_29062[(7)] = inst_28920__$1);

(statearr_29062[(8)] = inst_28919__$1);

(statearr_29062[(11)] = inst_28926);

(statearr_29062[(9)] = inst_28918__$1);

(statearr_29062[(10)] = inst_28917__$1);

return statearr_29062;
})();
var statearr_29063_29146 = state_29057__$1;
(statearr_29063_29146[(2)] = null);

(statearr_29063_29146[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (20))){
var inst_28960 = (state_29057[(12)]);
var inst_28968 = figwheel.client.file_reloading.sort_files.call(null,inst_28960);
var state_29057__$1 = state_29057;
var statearr_29064_29147 = state_29057__$1;
(statearr_29064_29147[(2)] = inst_28968);

(statearr_29064_29147[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (27))){
var state_29057__$1 = state_29057;
var statearr_29065_29148 = state_29057__$1;
(statearr_29065_29148[(2)] = null);

(statearr_29065_29148[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (1))){
var inst_28909 = (state_29057[(13)]);
var inst_28906 = before_jsload.call(null,files);
var inst_28907 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28908 = (function (){return (function (p1__28897_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28897_SHARP_);
});
})();
var inst_28909__$1 = cljs.core.filter.call(null,inst_28908,files);
var inst_28910 = cljs.core.not_empty.call(null,inst_28909__$1);
var state_29057__$1 = (function (){var statearr_29066 = state_29057;
(statearr_29066[(14)] = inst_28907);

(statearr_29066[(13)] = inst_28909__$1);

(statearr_29066[(15)] = inst_28906);

return statearr_29066;
})();
if(cljs.core.truth_(inst_28910)){
var statearr_29067_29149 = state_29057__$1;
(statearr_29067_29149[(1)] = (2));

} else {
var statearr_29068_29150 = state_29057__$1;
(statearr_29068_29150[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (24))){
var state_29057__$1 = state_29057;
var statearr_29069_29151 = state_29057__$1;
(statearr_29069_29151[(2)] = null);

(statearr_29069_29151[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (39))){
var inst_29010 = (state_29057[(16)]);
var state_29057__$1 = state_29057;
var statearr_29070_29152 = state_29057__$1;
(statearr_29070_29152[(2)] = inst_29010);

(statearr_29070_29152[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (46))){
var inst_29052 = (state_29057[(2)]);
var state_29057__$1 = state_29057;
var statearr_29071_29153 = state_29057__$1;
(statearr_29071_29153[(2)] = inst_29052);

(statearr_29071_29153[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (4))){
var inst_28954 = (state_29057[(2)]);
var inst_28955 = cljs.core.List.EMPTY;
var inst_28956 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28955);
var inst_28957 = (function (){return (function (p1__28898_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28898_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28898_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28898_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_28958 = cljs.core.filter.call(null,inst_28957,files);
var inst_28959 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28960 = cljs.core.concat.call(null,inst_28958,inst_28959);
var state_29057__$1 = (function (){var statearr_29072 = state_29057;
(statearr_29072[(12)] = inst_28960);

(statearr_29072[(17)] = inst_28954);

(statearr_29072[(18)] = inst_28956);

return statearr_29072;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29073_29154 = state_29057__$1;
(statearr_29073_29154[(1)] = (16));

} else {
var statearr_29074_29155 = state_29057__$1;
(statearr_29074_29155[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (15))){
var inst_28944 = (state_29057[(2)]);
var state_29057__$1 = state_29057;
var statearr_29075_29156 = state_29057__$1;
(statearr_29075_29156[(2)] = inst_28944);

(statearr_29075_29156[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (21))){
var inst_28970 = (state_29057[(19)]);
var inst_28970__$1 = (state_29057[(2)]);
var inst_28971 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28970__$1);
var state_29057__$1 = (function (){var statearr_29076 = state_29057;
(statearr_29076[(19)] = inst_28970__$1);

return statearr_29076;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29057__$1,(22),inst_28971);
} else {
if((state_val_29058 === (31))){
var inst_29055 = (state_29057[(2)]);
var state_29057__$1 = state_29057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29057__$1,inst_29055);
} else {
if((state_val_29058 === (32))){
var inst_29010 = (state_29057[(16)]);
var inst_29015 = inst_29010.cljs$lang$protocol_mask$partition0$;
var inst_29016 = (inst_29015 & (64));
var inst_29017 = inst_29010.cljs$core$ISeq$;
var inst_29018 = (cljs.core.PROTOCOL_SENTINEL === inst_29017);
var inst_29019 = ((inst_29016) || (inst_29018));
var state_29057__$1 = state_29057;
if(cljs.core.truth_(inst_29019)){
var statearr_29077_29157 = state_29057__$1;
(statearr_29077_29157[(1)] = (35));

} else {
var statearr_29078_29158 = state_29057__$1;
(statearr_29078_29158[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (40))){
var inst_29032 = (state_29057[(20)]);
var inst_29031 = (state_29057[(2)]);
var inst_29032__$1 = cljs.core.get.call(null,inst_29031,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29033 = cljs.core.get.call(null,inst_29031,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29034 = cljs.core.not_empty.call(null,inst_29032__$1);
var state_29057__$1 = (function (){var statearr_29079 = state_29057;
(statearr_29079[(20)] = inst_29032__$1);

(statearr_29079[(21)] = inst_29033);

return statearr_29079;
})();
if(cljs.core.truth_(inst_29034)){
var statearr_29080_29159 = state_29057__$1;
(statearr_29080_29159[(1)] = (41));

} else {
var statearr_29081_29160 = state_29057__$1;
(statearr_29081_29160[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (33))){
var state_29057__$1 = state_29057;
var statearr_29082_29161 = state_29057__$1;
(statearr_29082_29161[(2)] = false);

(statearr_29082_29161[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (13))){
var inst_28930 = (state_29057[(22)]);
var inst_28934 = cljs.core.chunk_first.call(null,inst_28930);
var inst_28935 = cljs.core.chunk_rest.call(null,inst_28930);
var inst_28936 = cljs.core.count.call(null,inst_28934);
var inst_28917 = inst_28935;
var inst_28918 = inst_28934;
var inst_28919 = inst_28936;
var inst_28920 = (0);
var state_29057__$1 = (function (){var statearr_29083 = state_29057;
(statearr_29083[(7)] = inst_28920);

(statearr_29083[(8)] = inst_28919);

(statearr_29083[(9)] = inst_28918);

(statearr_29083[(10)] = inst_28917);

return statearr_29083;
})();
var statearr_29084_29162 = state_29057__$1;
(statearr_29084_29162[(2)] = null);

(statearr_29084_29162[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (22))){
var inst_28973 = (state_29057[(23)]);
var inst_28978 = (state_29057[(24)]);
var inst_28970 = (state_29057[(19)]);
var inst_28974 = (state_29057[(25)]);
var inst_28973__$1 = (state_29057[(2)]);
var inst_28974__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28973__$1);
var inst_28975 = (function (){var all_files = inst_28970;
var res_SINGLEQUOTE_ = inst_28973__$1;
var res = inst_28974__$1;
return (function (p1__28899_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28899_SHARP_));
});
})();
var inst_28976 = cljs.core.filter.call(null,inst_28975,inst_28973__$1);
var inst_28977 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28978__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28977);
var inst_28979 = cljs.core.not_empty.call(null,inst_28978__$1);
var state_29057__$1 = (function (){var statearr_29085 = state_29057;
(statearr_29085[(23)] = inst_28973__$1);

(statearr_29085[(24)] = inst_28978__$1);

(statearr_29085[(26)] = inst_28976);

(statearr_29085[(25)] = inst_28974__$1);

return statearr_29085;
})();
if(cljs.core.truth_(inst_28979)){
var statearr_29086_29163 = state_29057__$1;
(statearr_29086_29163[(1)] = (23));

} else {
var statearr_29087_29164 = state_29057__$1;
(statearr_29087_29164[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (36))){
var state_29057__$1 = state_29057;
var statearr_29088_29165 = state_29057__$1;
(statearr_29088_29165[(2)] = false);

(statearr_29088_29165[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (41))){
var inst_29032 = (state_29057[(20)]);
var inst_29036 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29037 = cljs.core.map.call(null,inst_29036,inst_29032);
var inst_29038 = cljs.core.pr_str.call(null,inst_29037);
var inst_29039 = ["figwheel-no-load meta-data: ",inst_29038].join('');
var inst_29040 = figwheel.client.utils.log.call(null,inst_29039);
var state_29057__$1 = state_29057;
var statearr_29089_29166 = state_29057__$1;
(statearr_29089_29166[(2)] = inst_29040);

(statearr_29089_29166[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (43))){
var inst_29033 = (state_29057[(21)]);
var inst_29043 = (state_29057[(2)]);
var inst_29044 = cljs.core.not_empty.call(null,inst_29033);
var state_29057__$1 = (function (){var statearr_29090 = state_29057;
(statearr_29090[(27)] = inst_29043);

return statearr_29090;
})();
if(cljs.core.truth_(inst_29044)){
var statearr_29091_29167 = state_29057__$1;
(statearr_29091_29167[(1)] = (44));

} else {
var statearr_29092_29168 = state_29057__$1;
(statearr_29092_29168[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (29))){
var inst_28973 = (state_29057[(23)]);
var inst_28978 = (state_29057[(24)]);
var inst_28970 = (state_29057[(19)]);
var inst_28976 = (state_29057[(26)]);
var inst_28974 = (state_29057[(25)]);
var inst_29010 = (state_29057[(16)]);
var inst_29006 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29009 = (function (){var all_files = inst_28970;
var res_SINGLEQUOTE_ = inst_28973;
var res = inst_28974;
var files_not_loaded = inst_28976;
var dependencies_that_loaded = inst_28978;
return (function (p__29008){
var map__29093 = p__29008;
var map__29093__$1 = (((((!((map__29093 == null))))?(((((map__29093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29093):map__29093);
var namespace = cljs.core.get.call(null,map__29093__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_29010__$1 = cljs.core.group_by.call(null,inst_29009,inst_28976);
var inst_29012 = (inst_29010__$1 == null);
var inst_29013 = cljs.core.not.call(null,inst_29012);
var state_29057__$1 = (function (){var statearr_29095 = state_29057;
(statearr_29095[(16)] = inst_29010__$1);

(statearr_29095[(28)] = inst_29006);

return statearr_29095;
})();
if(inst_29013){
var statearr_29096_29169 = state_29057__$1;
(statearr_29096_29169[(1)] = (32));

} else {
var statearr_29097_29170 = state_29057__$1;
(statearr_29097_29170[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (44))){
var inst_29033 = (state_29057[(21)]);
var inst_29046 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29033);
var inst_29047 = cljs.core.pr_str.call(null,inst_29046);
var inst_29048 = ["not required: ",inst_29047].join('');
var inst_29049 = figwheel.client.utils.log.call(null,inst_29048);
var state_29057__$1 = state_29057;
var statearr_29098_29171 = state_29057__$1;
(statearr_29098_29171[(2)] = inst_29049);

(statearr_29098_29171[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (6))){
var inst_28951 = (state_29057[(2)]);
var state_29057__$1 = state_29057;
var statearr_29099_29172 = state_29057__$1;
(statearr_29099_29172[(2)] = inst_28951);

(statearr_29099_29172[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (28))){
var inst_28976 = (state_29057[(26)]);
var inst_29003 = (state_29057[(2)]);
var inst_29004 = cljs.core.not_empty.call(null,inst_28976);
var state_29057__$1 = (function (){var statearr_29100 = state_29057;
(statearr_29100[(29)] = inst_29003);

return statearr_29100;
})();
if(cljs.core.truth_(inst_29004)){
var statearr_29101_29173 = state_29057__$1;
(statearr_29101_29173[(1)] = (29));

} else {
var statearr_29102_29174 = state_29057__$1;
(statearr_29102_29174[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (25))){
var inst_28974 = (state_29057[(25)]);
var inst_28990 = (state_29057[(2)]);
var inst_28991 = cljs.core.not_empty.call(null,inst_28974);
var state_29057__$1 = (function (){var statearr_29103 = state_29057;
(statearr_29103[(30)] = inst_28990);

return statearr_29103;
})();
if(cljs.core.truth_(inst_28991)){
var statearr_29104_29175 = state_29057__$1;
(statearr_29104_29175[(1)] = (26));

} else {
var statearr_29105_29176 = state_29057__$1;
(statearr_29105_29176[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (34))){
var inst_29026 = (state_29057[(2)]);
var state_29057__$1 = state_29057;
if(cljs.core.truth_(inst_29026)){
var statearr_29106_29177 = state_29057__$1;
(statearr_29106_29177[(1)] = (38));

} else {
var statearr_29107_29178 = state_29057__$1;
(statearr_29107_29178[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (17))){
var state_29057__$1 = state_29057;
var statearr_29108_29179 = state_29057__$1;
(statearr_29108_29179[(2)] = recompile_dependents);

(statearr_29108_29179[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (3))){
var state_29057__$1 = state_29057;
var statearr_29109_29180 = state_29057__$1;
(statearr_29109_29180[(2)] = null);

(statearr_29109_29180[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (12))){
var inst_28947 = (state_29057[(2)]);
var state_29057__$1 = state_29057;
var statearr_29110_29181 = state_29057__$1;
(statearr_29110_29181[(2)] = inst_28947);

(statearr_29110_29181[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (2))){
var inst_28909 = (state_29057[(13)]);
var inst_28916 = cljs.core.seq.call(null,inst_28909);
var inst_28917 = inst_28916;
var inst_28918 = null;
var inst_28919 = (0);
var inst_28920 = (0);
var state_29057__$1 = (function (){var statearr_29111 = state_29057;
(statearr_29111[(7)] = inst_28920);

(statearr_29111[(8)] = inst_28919);

(statearr_29111[(9)] = inst_28918);

(statearr_29111[(10)] = inst_28917);

return statearr_29111;
})();
var statearr_29112_29182 = state_29057__$1;
(statearr_29112_29182[(2)] = null);

(statearr_29112_29182[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (23))){
var inst_28973 = (state_29057[(23)]);
var inst_28978 = (state_29057[(24)]);
var inst_28970 = (state_29057[(19)]);
var inst_28976 = (state_29057[(26)]);
var inst_28974 = (state_29057[(25)]);
var inst_28981 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28983 = (function (){var all_files = inst_28970;
var res_SINGLEQUOTE_ = inst_28973;
var res = inst_28974;
var files_not_loaded = inst_28976;
var dependencies_that_loaded = inst_28978;
return (function (p__28982){
var map__29113 = p__28982;
var map__29113__$1 = (((((!((map__29113 == null))))?(((((map__29113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29113):map__29113);
var request_url = cljs.core.get.call(null,map__29113__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_28984 = cljs.core.reverse.call(null,inst_28978);
var inst_28985 = cljs.core.map.call(null,inst_28983,inst_28984);
var inst_28986 = cljs.core.pr_str.call(null,inst_28985);
var inst_28987 = figwheel.client.utils.log.call(null,inst_28986);
var state_29057__$1 = (function (){var statearr_29115 = state_29057;
(statearr_29115[(31)] = inst_28981);

return statearr_29115;
})();
var statearr_29116_29183 = state_29057__$1;
(statearr_29116_29183[(2)] = inst_28987);

(statearr_29116_29183[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (35))){
var state_29057__$1 = state_29057;
var statearr_29117_29184 = state_29057__$1;
(statearr_29117_29184[(2)] = true);

(statearr_29117_29184[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (19))){
var inst_28960 = (state_29057[(12)]);
var inst_28966 = figwheel.client.file_reloading.expand_files.call(null,inst_28960);
var state_29057__$1 = state_29057;
var statearr_29118_29185 = state_29057__$1;
(statearr_29118_29185[(2)] = inst_28966);

(statearr_29118_29185[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (11))){
var state_29057__$1 = state_29057;
var statearr_29119_29186 = state_29057__$1;
(statearr_29119_29186[(2)] = null);

(statearr_29119_29186[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (9))){
var inst_28949 = (state_29057[(2)]);
var state_29057__$1 = state_29057;
var statearr_29120_29187 = state_29057__$1;
(statearr_29120_29187[(2)] = inst_28949);

(statearr_29120_29187[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (5))){
var inst_28920 = (state_29057[(7)]);
var inst_28919 = (state_29057[(8)]);
var inst_28922 = (inst_28920 < inst_28919);
var inst_28923 = inst_28922;
var state_29057__$1 = state_29057;
if(cljs.core.truth_(inst_28923)){
var statearr_29121_29188 = state_29057__$1;
(statearr_29121_29188[(1)] = (7));

} else {
var statearr_29122_29189 = state_29057__$1;
(statearr_29122_29189[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (14))){
var inst_28930 = (state_29057[(22)]);
var inst_28939 = cljs.core.first.call(null,inst_28930);
var inst_28940 = figwheel.client.file_reloading.eval_body.call(null,inst_28939,opts);
var inst_28941 = cljs.core.next.call(null,inst_28930);
var inst_28917 = inst_28941;
var inst_28918 = null;
var inst_28919 = (0);
var inst_28920 = (0);
var state_29057__$1 = (function (){var statearr_29123 = state_29057;
(statearr_29123[(32)] = inst_28940);

(statearr_29123[(7)] = inst_28920);

(statearr_29123[(8)] = inst_28919);

(statearr_29123[(9)] = inst_28918);

(statearr_29123[(10)] = inst_28917);

return statearr_29123;
})();
var statearr_29124_29190 = state_29057__$1;
(statearr_29124_29190[(2)] = null);

(statearr_29124_29190[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (45))){
var state_29057__$1 = state_29057;
var statearr_29125_29191 = state_29057__$1;
(statearr_29125_29191[(2)] = null);

(statearr_29125_29191[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (26))){
var inst_28973 = (state_29057[(23)]);
var inst_28978 = (state_29057[(24)]);
var inst_28970 = (state_29057[(19)]);
var inst_28976 = (state_29057[(26)]);
var inst_28974 = (state_29057[(25)]);
var inst_28993 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28995 = (function (){var all_files = inst_28970;
var res_SINGLEQUOTE_ = inst_28973;
var res = inst_28974;
var files_not_loaded = inst_28976;
var dependencies_that_loaded = inst_28978;
return (function (p__28994){
var map__29126 = p__28994;
var map__29126__$1 = (((((!((map__29126 == null))))?(((((map__29126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29126):map__29126);
var namespace = cljs.core.get.call(null,map__29126__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29126__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_28996 = cljs.core.map.call(null,inst_28995,inst_28974);
var inst_28997 = cljs.core.pr_str.call(null,inst_28996);
var inst_28998 = figwheel.client.utils.log.call(null,inst_28997);
var inst_28999 = (function (){var all_files = inst_28970;
var res_SINGLEQUOTE_ = inst_28973;
var res = inst_28974;
var files_not_loaded = inst_28976;
var dependencies_that_loaded = inst_28978;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_29000 = setTimeout(inst_28999,(10));
var state_29057__$1 = (function (){var statearr_29128 = state_29057;
(statearr_29128[(33)] = inst_28993);

(statearr_29128[(34)] = inst_28998);

return statearr_29128;
})();
var statearr_29129_29192 = state_29057__$1;
(statearr_29129_29192[(2)] = inst_29000);

(statearr_29129_29192[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (16))){
var state_29057__$1 = state_29057;
var statearr_29130_29193 = state_29057__$1;
(statearr_29130_29193[(2)] = reload_dependents);

(statearr_29130_29193[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (38))){
var inst_29010 = (state_29057[(16)]);
var inst_29028 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29010);
var state_29057__$1 = state_29057;
var statearr_29131_29194 = state_29057__$1;
(statearr_29131_29194[(2)] = inst_29028);

(statearr_29131_29194[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (30))){
var state_29057__$1 = state_29057;
var statearr_29132_29195 = state_29057__$1;
(statearr_29132_29195[(2)] = null);

(statearr_29132_29195[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (10))){
var inst_28930 = (state_29057[(22)]);
var inst_28932 = cljs.core.chunked_seq_QMARK_.call(null,inst_28930);
var state_29057__$1 = state_29057;
if(inst_28932){
var statearr_29133_29196 = state_29057__$1;
(statearr_29133_29196[(1)] = (13));

} else {
var statearr_29134_29197 = state_29057__$1;
(statearr_29134_29197[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (18))){
var inst_28964 = (state_29057[(2)]);
var state_29057__$1 = state_29057;
if(cljs.core.truth_(inst_28964)){
var statearr_29135_29198 = state_29057__$1;
(statearr_29135_29198[(1)] = (19));

} else {
var statearr_29136_29199 = state_29057__$1;
(statearr_29136_29199[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (42))){
var state_29057__$1 = state_29057;
var statearr_29137_29200 = state_29057__$1;
(statearr_29137_29200[(2)] = null);

(statearr_29137_29200[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (37))){
var inst_29023 = (state_29057[(2)]);
var state_29057__$1 = state_29057;
var statearr_29138_29201 = state_29057__$1;
(statearr_29138_29201[(2)] = inst_29023);

(statearr_29138_29201[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29058 === (8))){
var inst_28917 = (state_29057[(10)]);
var inst_28930 = (state_29057[(22)]);
var inst_28930__$1 = cljs.core.seq.call(null,inst_28917);
var state_29057__$1 = (function (){var statearr_29139 = state_29057;
(statearr_29139[(22)] = inst_28930__$1);

return statearr_29139;
})();
if(inst_28930__$1){
var statearr_29140_29202 = state_29057__$1;
(statearr_29140_29202[(1)] = (10));

} else {
var statearr_29141_29203 = state_29057__$1;
(statearr_29141_29203[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26252__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26252__auto____0 = (function (){
var statearr_29142 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29142[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26252__auto__);

(statearr_29142[(1)] = (1));

return statearr_29142;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26252__auto____1 = (function (state_29057){
while(true){
var ret_value__26253__auto__ = (function (){try{while(true){
var result__26254__auto__ = switch__26251__auto__.call(null,state_29057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26254__auto__;
}
break;
}
}catch (e29143){if((e29143 instanceof Object)){
var ex__26255__auto__ = e29143;
var statearr_29144_29204 = state_29057;
(statearr_29144_29204[(5)] = ex__26255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29205 = state_29057;
state_29057 = G__29205;
continue;
} else {
return ret_value__26253__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26252__auto__ = function(state_29057){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26252__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26252__auto____1.call(this,state_29057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26252__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26252__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26252__auto__;
})()
})();
var state__26348__auto__ = (function (){var statearr_29145 = f__26347__auto__.call(null);
(statearr_29145[(6)] = c__26346__auto__);

return statearr_29145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26348__auto__);
}));

return c__26346__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29208,link){
var map__29209 = p__29208;
var map__29209__$1 = (((((!((map__29209 == null))))?(((((map__29209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29209):map__29209);
var file = cljs.core.get.call(null,map__29209__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__29206_SHARP_,p2__29207_SHARP_){
if(cljs.core._EQ_.call(null,p1__29206_SHARP_,p2__29207_SHARP_)){
return p1__29206_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29212){
var map__29213 = p__29212;
var map__29213__$1 = (((((!((map__29213 == null))))?(((((map__29213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29213):map__29213);
var match_length = cljs.core.get.call(null,map__29213__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29213__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29211_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29211_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29215_SHARP_,p2__29216_SHARP_){
return cljs.core.assoc.call(null,p1__29215_SHARP_,cljs.core.get.call(null,p2__29216_SHARP_,key),p2__29216_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29217 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29217);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29217);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29218,p__29219){
var map__29220 = p__29218;
var map__29220__$1 = (((((!((map__29220 == null))))?(((((map__29220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29220):map__29220);
var on_cssload = cljs.core.get.call(null,map__29220__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29221 = p__29219;
var map__29221__$1 = (((((!((map__29221 == null))))?(((((map__29221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29221):map__29221);
var files_msg = map__29221__$1;
var files = cljs.core.get.call(null,map__29221__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1602351796711
