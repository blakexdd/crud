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
var G__31308 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__31308 == null)){
return null;
} else {
return goog.object.get(G__31308,"requires");
}
}):(function (path){
var G__31309 = goog.object.get(goog.dependencies_.requires,path);
if((G__31309 == null)){
return null;
} else {
return goog.object.getKeys(G__31309);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31310_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31310_SHARP_)));
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
var G__31311 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__31311__$1 = (((G__31311 == null))?null:goog.object.get(G__31311,"provides"));
if((G__31311__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__31311__$1);
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
var seq__31312 = cljs.core.seq.call(null,provides);
var chunk__31313 = null;
var count__31314 = (0);
var i__31315 = (0);
while(true){
if((i__31315 < count__31314)){
var prov = cljs.core._nth.call(null,chunk__31313,i__31315);
var seq__31324_31336 = cljs.core.seq.call(null,requires);
var chunk__31325_31337 = null;
var count__31326_31338 = (0);
var i__31327_31339 = (0);
while(true){
if((i__31327_31339 < count__31326_31338)){
var req_31340 = cljs.core._nth.call(null,chunk__31325_31337,i__31327_31339);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31340,prov);


var G__31341 = seq__31324_31336;
var G__31342 = chunk__31325_31337;
var G__31343 = count__31326_31338;
var G__31344 = (i__31327_31339 + (1));
seq__31324_31336 = G__31341;
chunk__31325_31337 = G__31342;
count__31326_31338 = G__31343;
i__31327_31339 = G__31344;
continue;
} else {
var temp__5735__auto___31345 = cljs.core.seq.call(null,seq__31324_31336);
if(temp__5735__auto___31345){
var seq__31324_31346__$1 = temp__5735__auto___31345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31324_31346__$1)){
var c__4556__auto___31347 = cljs.core.chunk_first.call(null,seq__31324_31346__$1);
var G__31348 = cljs.core.chunk_rest.call(null,seq__31324_31346__$1);
var G__31349 = c__4556__auto___31347;
var G__31350 = cljs.core.count.call(null,c__4556__auto___31347);
var G__31351 = (0);
seq__31324_31336 = G__31348;
chunk__31325_31337 = G__31349;
count__31326_31338 = G__31350;
i__31327_31339 = G__31351;
continue;
} else {
var req_31352 = cljs.core.first.call(null,seq__31324_31346__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31352,prov);


var G__31353 = cljs.core.next.call(null,seq__31324_31346__$1);
var G__31354 = null;
var G__31355 = (0);
var G__31356 = (0);
seq__31324_31336 = G__31353;
chunk__31325_31337 = G__31354;
count__31326_31338 = G__31355;
i__31327_31339 = G__31356;
continue;
}
} else {
}
}
break;
}


var G__31357 = seq__31312;
var G__31358 = chunk__31313;
var G__31359 = count__31314;
var G__31360 = (i__31315 + (1));
seq__31312 = G__31357;
chunk__31313 = G__31358;
count__31314 = G__31359;
i__31315 = G__31360;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31312);
if(temp__5735__auto__){
var seq__31312__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31312__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31312__$1);
var G__31361 = cljs.core.chunk_rest.call(null,seq__31312__$1);
var G__31362 = c__4556__auto__;
var G__31363 = cljs.core.count.call(null,c__4556__auto__);
var G__31364 = (0);
seq__31312 = G__31361;
chunk__31313 = G__31362;
count__31314 = G__31363;
i__31315 = G__31364;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31312__$1);
var seq__31328_31365 = cljs.core.seq.call(null,requires);
var chunk__31329_31366 = null;
var count__31330_31367 = (0);
var i__31331_31368 = (0);
while(true){
if((i__31331_31368 < count__31330_31367)){
var req_31369 = cljs.core._nth.call(null,chunk__31329_31366,i__31331_31368);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31369,prov);


var G__31370 = seq__31328_31365;
var G__31371 = chunk__31329_31366;
var G__31372 = count__31330_31367;
var G__31373 = (i__31331_31368 + (1));
seq__31328_31365 = G__31370;
chunk__31329_31366 = G__31371;
count__31330_31367 = G__31372;
i__31331_31368 = G__31373;
continue;
} else {
var temp__5735__auto___31374__$1 = cljs.core.seq.call(null,seq__31328_31365);
if(temp__5735__auto___31374__$1){
var seq__31328_31375__$1 = temp__5735__auto___31374__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31328_31375__$1)){
var c__4556__auto___31376 = cljs.core.chunk_first.call(null,seq__31328_31375__$1);
var G__31377 = cljs.core.chunk_rest.call(null,seq__31328_31375__$1);
var G__31378 = c__4556__auto___31376;
var G__31379 = cljs.core.count.call(null,c__4556__auto___31376);
var G__31380 = (0);
seq__31328_31365 = G__31377;
chunk__31329_31366 = G__31378;
count__31330_31367 = G__31379;
i__31331_31368 = G__31380;
continue;
} else {
var req_31381 = cljs.core.first.call(null,seq__31328_31375__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31381,prov);


var G__31382 = cljs.core.next.call(null,seq__31328_31375__$1);
var G__31383 = null;
var G__31384 = (0);
var G__31385 = (0);
seq__31328_31365 = G__31382;
chunk__31329_31366 = G__31383;
count__31330_31367 = G__31384;
i__31331_31368 = G__31385;
continue;
}
} else {
}
}
break;
}


var G__31386 = cljs.core.next.call(null,seq__31312__$1);
var G__31387 = null;
var G__31388 = (0);
var G__31389 = (0);
seq__31312 = G__31386;
chunk__31313 = G__31387;
count__31314 = G__31388;
i__31315 = G__31389;
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
var seq__31332 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__31333 = null;
var count__31334 = (0);
var i__31335 = (0);
while(true){
if((i__31335 < count__31334)){
var prov = cljs.core._nth.call(null,chunk__31333,i__31335);
goog.object.forEach(deps,((function (seq__31332,chunk__31333,count__31334,i__31335,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__31332,chunk__31333,count__31334,i__31335,prov,requires))
);


var G__31390 = seq__31332;
var G__31391 = chunk__31333;
var G__31392 = count__31334;
var G__31393 = (i__31335 + (1));
seq__31332 = G__31390;
chunk__31333 = G__31391;
count__31334 = G__31392;
i__31335 = G__31393;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31332);
if(temp__5735__auto__){
var seq__31332__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31332__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31332__$1);
var G__31394 = cljs.core.chunk_rest.call(null,seq__31332__$1);
var G__31395 = c__4556__auto__;
var G__31396 = cljs.core.count.call(null,c__4556__auto__);
var G__31397 = (0);
seq__31332 = G__31394;
chunk__31333 = G__31395;
count__31334 = G__31396;
i__31335 = G__31397;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31332__$1);
goog.object.forEach(deps,((function (seq__31332,chunk__31333,count__31334,i__31335,prov,seq__31332__$1,temp__5735__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__31332,chunk__31333,count__31334,i__31335,prov,seq__31332__$1,temp__5735__auto__,requires))
);


var G__31398 = cljs.core.next.call(null,seq__31332__$1);
var G__31399 = null;
var G__31400 = (0);
var G__31401 = (0);
seq__31332 = G__31398;
chunk__31333 = G__31399;
count__31334 = G__31400;
i__31335 = G__31401;
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
return cljs.core.some.call(null,(function (p__31402){
var vec__31403 = p__31402;
var _ = cljs.core.nth.call(null,vec__31403,(0),null);
var v = cljs.core.nth.call(null,vec__31403,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__31406){
var vec__31407 = p__31406;
var k = cljs.core.nth.call(null,vec__31407,(0),null);
var v = cljs.core.nth.call(null,vec__31407,(1),null);
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

var seq__31419_31427 = cljs.core.seq.call(null,deps);
var chunk__31420_31428 = null;
var count__31421_31429 = (0);
var i__31422_31430 = (0);
while(true){
if((i__31422_31430 < count__31421_31429)){
var dep_31431 = cljs.core._nth.call(null,chunk__31420_31428,i__31422_31430);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_31431;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31431));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31431,(depth + (1)),state);
} else {
}


var G__31432 = seq__31419_31427;
var G__31433 = chunk__31420_31428;
var G__31434 = count__31421_31429;
var G__31435 = (i__31422_31430 + (1));
seq__31419_31427 = G__31432;
chunk__31420_31428 = G__31433;
count__31421_31429 = G__31434;
i__31422_31430 = G__31435;
continue;
} else {
var temp__5735__auto___31436 = cljs.core.seq.call(null,seq__31419_31427);
if(temp__5735__auto___31436){
var seq__31419_31437__$1 = temp__5735__auto___31436;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31419_31437__$1)){
var c__4556__auto___31438 = cljs.core.chunk_first.call(null,seq__31419_31437__$1);
var G__31439 = cljs.core.chunk_rest.call(null,seq__31419_31437__$1);
var G__31440 = c__4556__auto___31438;
var G__31441 = cljs.core.count.call(null,c__4556__auto___31438);
var G__31442 = (0);
seq__31419_31427 = G__31439;
chunk__31420_31428 = G__31440;
count__31421_31429 = G__31441;
i__31422_31430 = G__31442;
continue;
} else {
var dep_31443 = cljs.core.first.call(null,seq__31419_31437__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_31443;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31443));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31443,(depth + (1)),state);
} else {
}


var G__31444 = cljs.core.next.call(null,seq__31419_31437__$1);
var G__31445 = null;
var G__31446 = (0);
var G__31447 = (0);
seq__31419_31427 = G__31444;
chunk__31420_31428 = G__31445;
count__31421_31429 = G__31446;
i__31422_31430 = G__31447;
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
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31423){
var vec__31424 = p__31423;
var seq__31425 = cljs.core.seq.call(null,vec__31424);
var first__31426 = cljs.core.first.call(null,seq__31425);
var seq__31425__$1 = cljs.core.next.call(null,seq__31425);
var x = first__31426;
var xs = seq__31425__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__31410_SHARP_){
return clojure.set.difference.call(null,p1__31410_SHARP_,x);
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
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__31448_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__31448_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__31449 = cljs.core.seq.call(null,provides);
var chunk__31450 = null;
var count__31451 = (0);
var i__31452 = (0);
while(true){
if((i__31452 < count__31451)){
var prov = cljs.core._nth.call(null,chunk__31450,i__31452);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31461_31469 = cljs.core.seq.call(null,requires);
var chunk__31462_31470 = null;
var count__31463_31471 = (0);
var i__31464_31472 = (0);
while(true){
if((i__31464_31472 < count__31463_31471)){
var req_31473 = cljs.core._nth.call(null,chunk__31462_31470,i__31464_31472);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31473,prov);


var G__31474 = seq__31461_31469;
var G__31475 = chunk__31462_31470;
var G__31476 = count__31463_31471;
var G__31477 = (i__31464_31472 + (1));
seq__31461_31469 = G__31474;
chunk__31462_31470 = G__31475;
count__31463_31471 = G__31476;
i__31464_31472 = G__31477;
continue;
} else {
var temp__5735__auto___31478 = cljs.core.seq.call(null,seq__31461_31469);
if(temp__5735__auto___31478){
var seq__31461_31479__$1 = temp__5735__auto___31478;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31461_31479__$1)){
var c__4556__auto___31480 = cljs.core.chunk_first.call(null,seq__31461_31479__$1);
var G__31481 = cljs.core.chunk_rest.call(null,seq__31461_31479__$1);
var G__31482 = c__4556__auto___31480;
var G__31483 = cljs.core.count.call(null,c__4556__auto___31480);
var G__31484 = (0);
seq__31461_31469 = G__31481;
chunk__31462_31470 = G__31482;
count__31463_31471 = G__31483;
i__31464_31472 = G__31484;
continue;
} else {
var req_31485 = cljs.core.first.call(null,seq__31461_31479__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31485,prov);


var G__31486 = cljs.core.next.call(null,seq__31461_31479__$1);
var G__31487 = null;
var G__31488 = (0);
var G__31489 = (0);
seq__31461_31469 = G__31486;
chunk__31462_31470 = G__31487;
count__31463_31471 = G__31488;
i__31464_31472 = G__31489;
continue;
}
} else {
}
}
break;
}


var G__31490 = seq__31449;
var G__31491 = chunk__31450;
var G__31492 = count__31451;
var G__31493 = (i__31452 + (1));
seq__31449 = G__31490;
chunk__31450 = G__31491;
count__31451 = G__31492;
i__31452 = G__31493;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31449);
if(temp__5735__auto__){
var seq__31449__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31449__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31449__$1);
var G__31494 = cljs.core.chunk_rest.call(null,seq__31449__$1);
var G__31495 = c__4556__auto__;
var G__31496 = cljs.core.count.call(null,c__4556__auto__);
var G__31497 = (0);
seq__31449 = G__31494;
chunk__31450 = G__31495;
count__31451 = G__31496;
i__31452 = G__31497;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31449__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31465_31498 = cljs.core.seq.call(null,requires);
var chunk__31466_31499 = null;
var count__31467_31500 = (0);
var i__31468_31501 = (0);
while(true){
if((i__31468_31501 < count__31467_31500)){
var req_31502 = cljs.core._nth.call(null,chunk__31466_31499,i__31468_31501);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31502,prov);


var G__31503 = seq__31465_31498;
var G__31504 = chunk__31466_31499;
var G__31505 = count__31467_31500;
var G__31506 = (i__31468_31501 + (1));
seq__31465_31498 = G__31503;
chunk__31466_31499 = G__31504;
count__31467_31500 = G__31505;
i__31468_31501 = G__31506;
continue;
} else {
var temp__5735__auto___31507__$1 = cljs.core.seq.call(null,seq__31465_31498);
if(temp__5735__auto___31507__$1){
var seq__31465_31508__$1 = temp__5735__auto___31507__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31465_31508__$1)){
var c__4556__auto___31509 = cljs.core.chunk_first.call(null,seq__31465_31508__$1);
var G__31510 = cljs.core.chunk_rest.call(null,seq__31465_31508__$1);
var G__31511 = c__4556__auto___31509;
var G__31512 = cljs.core.count.call(null,c__4556__auto___31509);
var G__31513 = (0);
seq__31465_31498 = G__31510;
chunk__31466_31499 = G__31511;
count__31467_31500 = G__31512;
i__31468_31501 = G__31513;
continue;
} else {
var req_31514 = cljs.core.first.call(null,seq__31465_31508__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31514,prov);


var G__31515 = cljs.core.next.call(null,seq__31465_31508__$1);
var G__31516 = null;
var G__31517 = (0);
var G__31518 = (0);
seq__31465_31498 = G__31515;
chunk__31466_31499 = G__31516;
count__31467_31500 = G__31517;
i__31468_31501 = G__31518;
continue;
}
} else {
}
}
break;
}


var G__31519 = cljs.core.next.call(null,seq__31449__$1);
var G__31520 = null;
var G__31521 = (0);
var G__31522 = (0);
seq__31449 = G__31519;
chunk__31450 = G__31520;
count__31451 = G__31521;
i__31452 = G__31522;
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
var seq__31523_31527 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31524_31528 = null;
var count__31525_31529 = (0);
var i__31526_31530 = (0);
while(true){
if((i__31526_31530 < count__31525_31529)){
var ns_31531 = cljs.core._nth.call(null,chunk__31524_31528,i__31526_31530);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31531);


var G__31532 = seq__31523_31527;
var G__31533 = chunk__31524_31528;
var G__31534 = count__31525_31529;
var G__31535 = (i__31526_31530 + (1));
seq__31523_31527 = G__31532;
chunk__31524_31528 = G__31533;
count__31525_31529 = G__31534;
i__31526_31530 = G__31535;
continue;
} else {
var temp__5735__auto___31536 = cljs.core.seq.call(null,seq__31523_31527);
if(temp__5735__auto___31536){
var seq__31523_31537__$1 = temp__5735__auto___31536;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31523_31537__$1)){
var c__4556__auto___31538 = cljs.core.chunk_first.call(null,seq__31523_31537__$1);
var G__31539 = cljs.core.chunk_rest.call(null,seq__31523_31537__$1);
var G__31540 = c__4556__auto___31538;
var G__31541 = cljs.core.count.call(null,c__4556__auto___31538);
var G__31542 = (0);
seq__31523_31527 = G__31539;
chunk__31524_31528 = G__31540;
count__31525_31529 = G__31541;
i__31526_31530 = G__31542;
continue;
} else {
var ns_31543 = cljs.core.first.call(null,seq__31523_31537__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31543);


var G__31544 = cljs.core.next.call(null,seq__31523_31537__$1);
var G__31545 = null;
var G__31546 = (0);
var G__31547 = (0);
seq__31523_31527 = G__31544;
chunk__31524_31528 = G__31545;
count__31525_31529 = G__31546;
i__31526_31530 = G__31547;
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
var G__31548__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31548 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31549__i = 0, G__31549__a = new Array(arguments.length -  0);
while (G__31549__i < G__31549__a.length) {G__31549__a[G__31549__i] = arguments[G__31549__i + 0]; ++G__31549__i;}
  args = new cljs.core.IndexedSeq(G__31549__a,0,null);
} 
return G__31548__delegate.call(this,args);};
G__31548.cljs$lang$maxFixedArity = 0;
G__31548.cljs$lang$applyTo = (function (arglist__31550){
var args = cljs.core.seq(arglist__31550);
return G__31548__delegate(args);
});
G__31548.cljs$core$IFn$_invoke$arity$variadic = G__31548__delegate;
return G__31548;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__31551_SHARP_,p2__31552_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31551_SHARP_)),p2__31552_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__31553_SHARP_,p2__31554_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31553_SHARP_),p2__31554_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__31555 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__31555.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__31555.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__31555;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e31556){if((e31556 instanceof Error)){
var e = e31556;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31556;

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
}catch (e31557){if((e31557 instanceof Error)){
var e = e31557;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31557;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31558 = cljs.core._EQ_;
var expr__31559 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31558.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31559))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__31558.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31559))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__31558.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__31559))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31561,callback){
var map__31562 = p__31561;
var map__31562__$1 = (((((!((map__31562 == null))))?(((((map__31562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31562):map__31562);
var file_msg = map__31562__$1;
var request_url = cljs.core.get.call(null,map__31562__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
figwheel.client.file_reloading.reloader_loop = (function (){var c__27789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27790__auto__ = (function (){var switch__27694__auto__ = (function (state_31600){
var state_val_31601 = (state_31600[(1)]);
if((state_val_31601 === (7))){
var inst_31596 = (state_31600[(2)]);
var state_31600__$1 = state_31600;
var statearr_31602_31628 = state_31600__$1;
(statearr_31602_31628[(2)] = inst_31596);

(statearr_31602_31628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (1))){
var state_31600__$1 = state_31600;
var statearr_31603_31629 = state_31600__$1;
(statearr_31603_31629[(2)] = null);

(statearr_31603_31629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (4))){
var inst_31566 = (state_31600[(7)]);
var inst_31566__$1 = (state_31600[(2)]);
var state_31600__$1 = (function (){var statearr_31604 = state_31600;
(statearr_31604[(7)] = inst_31566__$1);

return statearr_31604;
})();
if(cljs.core.truth_(inst_31566__$1)){
var statearr_31605_31630 = state_31600__$1;
(statearr_31605_31630[(1)] = (5));

} else {
var statearr_31606_31631 = state_31600__$1;
(statearr_31606_31631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (15))){
var inst_31581 = (state_31600[(8)]);
var inst_31579 = (state_31600[(9)]);
var inst_31583 = inst_31581.call(null,inst_31579);
var state_31600__$1 = state_31600;
var statearr_31607_31632 = state_31600__$1;
(statearr_31607_31632[(2)] = inst_31583);

(statearr_31607_31632[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (13))){
var inst_31590 = (state_31600[(2)]);
var state_31600__$1 = state_31600;
var statearr_31608_31633 = state_31600__$1;
(statearr_31608_31633[(2)] = inst_31590);

(statearr_31608_31633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (6))){
var state_31600__$1 = state_31600;
var statearr_31609_31634 = state_31600__$1;
(statearr_31609_31634[(2)] = null);

(statearr_31609_31634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (17))){
var inst_31587 = (state_31600[(2)]);
var state_31600__$1 = state_31600;
var statearr_31610_31635 = state_31600__$1;
(statearr_31610_31635[(2)] = inst_31587);

(statearr_31610_31635[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (3))){
var inst_31598 = (state_31600[(2)]);
var state_31600__$1 = state_31600;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31600__$1,inst_31598);
} else {
if((state_val_31601 === (12))){
var state_31600__$1 = state_31600;
var statearr_31611_31636 = state_31600__$1;
(statearr_31611_31636[(2)] = null);

(statearr_31611_31636[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (2))){
var state_31600__$1 = state_31600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31600__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31601 === (11))){
var inst_31571 = (state_31600[(10)]);
var inst_31577 = figwheel.client.file_reloading.blocking_load.call(null,inst_31571);
var state_31600__$1 = state_31600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31600__$1,(14),inst_31577);
} else {
if((state_val_31601 === (9))){
var inst_31571 = (state_31600[(10)]);
var state_31600__$1 = state_31600;
if(cljs.core.truth_(inst_31571)){
var statearr_31612_31637 = state_31600__$1;
(statearr_31612_31637[(1)] = (11));

} else {
var statearr_31613_31638 = state_31600__$1;
(statearr_31613_31638[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (5))){
var inst_31572 = (state_31600[(11)]);
var inst_31566 = (state_31600[(7)]);
var inst_31571 = cljs.core.nth.call(null,inst_31566,(0),null);
var inst_31572__$1 = cljs.core.nth.call(null,inst_31566,(1),null);
var state_31600__$1 = (function (){var statearr_31614 = state_31600;
(statearr_31614[(11)] = inst_31572__$1);

(statearr_31614[(10)] = inst_31571);

return statearr_31614;
})();
if(cljs.core.truth_(inst_31572__$1)){
var statearr_31615_31639 = state_31600__$1;
(statearr_31615_31639[(1)] = (8));

} else {
var statearr_31616_31640 = state_31600__$1;
(statearr_31616_31640[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (14))){
var inst_31581 = (state_31600[(8)]);
var inst_31571 = (state_31600[(10)]);
var inst_31579 = (state_31600[(2)]);
var inst_31580 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31581__$1 = cljs.core.get.call(null,inst_31580,inst_31571);
var state_31600__$1 = (function (){var statearr_31617 = state_31600;
(statearr_31617[(8)] = inst_31581__$1);

(statearr_31617[(9)] = inst_31579);

return statearr_31617;
})();
if(cljs.core.truth_(inst_31581__$1)){
var statearr_31618_31641 = state_31600__$1;
(statearr_31618_31641[(1)] = (15));

} else {
var statearr_31619_31642 = state_31600__$1;
(statearr_31619_31642[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (16))){
var inst_31579 = (state_31600[(9)]);
var inst_31585 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31579);
var state_31600__$1 = state_31600;
var statearr_31620_31643 = state_31600__$1;
(statearr_31620_31643[(2)] = inst_31585);

(statearr_31620_31643[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (10))){
var inst_31592 = (state_31600[(2)]);
var state_31600__$1 = (function (){var statearr_31621 = state_31600;
(statearr_31621[(12)] = inst_31592);

return statearr_31621;
})();
var statearr_31622_31644 = state_31600__$1;
(statearr_31622_31644[(2)] = null);

(statearr_31622_31644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (8))){
var inst_31572 = (state_31600[(11)]);
var inst_31574 = eval(inst_31572);
var state_31600__$1 = state_31600;
var statearr_31623_31645 = state_31600__$1;
(statearr_31623_31645[(2)] = inst_31574);

(statearr_31623_31645[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__27695__auto__ = null;
var figwheel$client$file_reloading$state_machine__27695__auto____0 = (function (){
var statearr_31624 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31624[(0)] = figwheel$client$file_reloading$state_machine__27695__auto__);

(statearr_31624[(1)] = (1));

return statearr_31624;
});
var figwheel$client$file_reloading$state_machine__27695__auto____1 = (function (state_31600){
while(true){
var ret_value__27696__auto__ = (function (){try{while(true){
var result__27697__auto__ = switch__27694__auto__.call(null,state_31600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27697__auto__;
}
break;
}
}catch (e31625){if((e31625 instanceof Object)){
var ex__27698__auto__ = e31625;
var statearr_31626_31646 = state_31600;
(statearr_31626_31646[(5)] = ex__27698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31647 = state_31600;
state_31600 = G__31647;
continue;
} else {
return ret_value__27696__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27695__auto__ = function(state_31600){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27695__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27695__auto____1.call(this,state_31600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27695__auto____0;
figwheel$client$file_reloading$state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27695__auto____1;
return figwheel$client$file_reloading$state_machine__27695__auto__;
})()
})();
var state__27791__auto__ = (function (){var statearr_31627 = f__27790__auto__.call(null);
(statearr_31627[(6)] = c__27789__auto__);

return statearr_31627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27791__auto__);
}));

return c__27789__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__31649 = arguments.length;
switch (G__31649) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31651,callback){
var map__31652 = p__31651;
var map__31652__$1 = (((((!((map__31652 == null))))?(((((map__31652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31652):map__31652);
var file_msg = map__31652__$1;
var namespace = cljs.core.get.call(null,map__31652__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__31654){
var map__31655 = p__31654;
var map__31655__$1 = (((((!((map__31655 == null))))?(((((map__31655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31655):map__31655);
var file_msg = map__31655__$1;
var namespace = cljs.core.get.call(null,map__31655__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31657){
var map__31658 = p__31657;
var map__31658__$1 = (((((!((map__31658 == null))))?(((((map__31658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31658):map__31658);
var file_msg = map__31658__$1;
var namespace = cljs.core.get.call(null,map__31658__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31660,callback){
var map__31661 = p__31660;
var map__31661__$1 = (((((!((map__31661 == null))))?(((((map__31661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31661):map__31661);
var file_msg = map__31661__$1;
var request_url = cljs.core.get.call(null,map__31661__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31661__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27789__auto___31711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27790__auto__ = (function (){var switch__27694__auto__ = (function (state_31696){
var state_val_31697 = (state_31696[(1)]);
if((state_val_31697 === (1))){
var inst_31670 = cljs.core.seq.call(null,files);
var inst_31671 = cljs.core.first.call(null,inst_31670);
var inst_31672 = cljs.core.next.call(null,inst_31670);
var inst_31673 = files;
var state_31696__$1 = (function (){var statearr_31698 = state_31696;
(statearr_31698[(7)] = inst_31672);

(statearr_31698[(8)] = inst_31671);

(statearr_31698[(9)] = inst_31673);

return statearr_31698;
})();
var statearr_31699_31712 = state_31696__$1;
(statearr_31699_31712[(2)] = null);

(statearr_31699_31712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (2))){
var inst_31679 = (state_31696[(10)]);
var inst_31673 = (state_31696[(9)]);
var inst_31678 = cljs.core.seq.call(null,inst_31673);
var inst_31679__$1 = cljs.core.first.call(null,inst_31678);
var inst_31680 = cljs.core.next.call(null,inst_31678);
var inst_31681 = (inst_31679__$1 == null);
var inst_31682 = cljs.core.not.call(null,inst_31681);
var state_31696__$1 = (function (){var statearr_31700 = state_31696;
(statearr_31700[(10)] = inst_31679__$1);

(statearr_31700[(11)] = inst_31680);

return statearr_31700;
})();
if(inst_31682){
var statearr_31701_31713 = state_31696__$1;
(statearr_31701_31713[(1)] = (4));

} else {
var statearr_31702_31714 = state_31696__$1;
(statearr_31702_31714[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (3))){
var inst_31694 = (state_31696[(2)]);
var state_31696__$1 = state_31696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31696__$1,inst_31694);
} else {
if((state_val_31697 === (4))){
var inst_31679 = (state_31696[(10)]);
var inst_31684 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31679);
var state_31696__$1 = state_31696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31696__$1,(7),inst_31684);
} else {
if((state_val_31697 === (5))){
var inst_31690 = cljs.core.async.close_BANG_.call(null,out);
var state_31696__$1 = state_31696;
var statearr_31703_31715 = state_31696__$1;
(statearr_31703_31715[(2)] = inst_31690);

(statearr_31703_31715[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (6))){
var inst_31692 = (state_31696[(2)]);
var state_31696__$1 = state_31696;
var statearr_31704_31716 = state_31696__$1;
(statearr_31704_31716[(2)] = inst_31692);

(statearr_31704_31716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (7))){
var inst_31680 = (state_31696[(11)]);
var inst_31686 = (state_31696[(2)]);
var inst_31687 = cljs.core.async.put_BANG_.call(null,out,inst_31686);
var inst_31673 = inst_31680;
var state_31696__$1 = (function (){var statearr_31705 = state_31696;
(statearr_31705[(12)] = inst_31687);

(statearr_31705[(9)] = inst_31673);

return statearr_31705;
})();
var statearr_31706_31717 = state_31696__$1;
(statearr_31706_31717[(2)] = null);

(statearr_31706_31717[(1)] = (2));


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
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27695__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27695__auto____0 = (function (){
var statearr_31707 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31707[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27695__auto__);

(statearr_31707[(1)] = (1));

return statearr_31707;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27695__auto____1 = (function (state_31696){
while(true){
var ret_value__27696__auto__ = (function (){try{while(true){
var result__27697__auto__ = switch__27694__auto__.call(null,state_31696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27697__auto__;
}
break;
}
}catch (e31708){if((e31708 instanceof Object)){
var ex__27698__auto__ = e31708;
var statearr_31709_31718 = state_31696;
(statearr_31709_31718[(5)] = ex__27698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31719 = state_31696;
state_31696 = G__31719;
continue;
} else {
return ret_value__27696__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27695__auto__ = function(state_31696){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27695__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27695__auto____1.call(this,state_31696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27695__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27695__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27695__auto__;
})()
})();
var state__27791__auto__ = (function (){var statearr_31710 = f__27790__auto__.call(null);
(statearr_31710[(6)] = c__27789__auto___31711);

return statearr_31710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27791__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31720,opts){
var map__31721 = p__31720;
var map__31721__$1 = (((((!((map__31721 == null))))?(((((map__31721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31721):map__31721);
var eval_body = cljs.core.get.call(null,map__31721__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31721__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e31723){var e = e31723;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__31724_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31724_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__31725){
var vec__31726 = p__31725;
var k = cljs.core.nth.call(null,vec__31726,(0),null);
var v = cljs.core.nth.call(null,vec__31726,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31729){
var vec__31730 = p__31729;
var k = cljs.core.nth.call(null,vec__31730,(0),null);
var v = cljs.core.nth.call(null,vec__31730,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31736,p__31737){
var map__31738 = p__31736;
var map__31738__$1 = (((((!((map__31738 == null))))?(((((map__31738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31738):map__31738);
var opts = map__31738__$1;
var before_jsload = cljs.core.get.call(null,map__31738__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31738__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31738__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31739 = p__31737;
var map__31739__$1 = (((((!((map__31739 == null))))?(((((map__31739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31739):map__31739);
var msg = map__31739__$1;
var files = cljs.core.get.call(null,map__31739__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31739__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31739__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27790__auto__ = (function (){var switch__27694__auto__ = (function (state_31893){
var state_val_31894 = (state_31893[(1)]);
if((state_val_31894 === (7))){
var inst_31755 = (state_31893[(7)]);
var inst_31756 = (state_31893[(8)]);
var inst_31754 = (state_31893[(9)]);
var inst_31753 = (state_31893[(10)]);
var inst_31761 = cljs.core._nth.call(null,inst_31754,inst_31756);
var inst_31762 = figwheel.client.file_reloading.eval_body.call(null,inst_31761,opts);
var inst_31763 = (inst_31756 + (1));
var tmp31895 = inst_31755;
var tmp31896 = inst_31754;
var tmp31897 = inst_31753;
var inst_31753__$1 = tmp31897;
var inst_31754__$1 = tmp31896;
var inst_31755__$1 = tmp31895;
var inst_31756__$1 = inst_31763;
var state_31893__$1 = (function (){var statearr_31898 = state_31893;
(statearr_31898[(7)] = inst_31755__$1);

(statearr_31898[(8)] = inst_31756__$1);

(statearr_31898[(9)] = inst_31754__$1);

(statearr_31898[(11)] = inst_31762);

(statearr_31898[(10)] = inst_31753__$1);

return statearr_31898;
})();
var statearr_31899_31982 = state_31893__$1;
(statearr_31899_31982[(2)] = null);

(statearr_31899_31982[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (20))){
var inst_31796 = (state_31893[(12)]);
var inst_31804 = figwheel.client.file_reloading.sort_files.call(null,inst_31796);
var state_31893__$1 = state_31893;
var statearr_31900_31983 = state_31893__$1;
(statearr_31900_31983[(2)] = inst_31804);

(statearr_31900_31983[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (27))){
var state_31893__$1 = state_31893;
var statearr_31901_31984 = state_31893__$1;
(statearr_31901_31984[(2)] = null);

(statearr_31901_31984[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (1))){
var inst_31745 = (state_31893[(13)]);
var inst_31742 = before_jsload.call(null,files);
var inst_31743 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31744 = (function (){return (function (p1__31733_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31733_SHARP_);
});
})();
var inst_31745__$1 = cljs.core.filter.call(null,inst_31744,files);
var inst_31746 = cljs.core.not_empty.call(null,inst_31745__$1);
var state_31893__$1 = (function (){var statearr_31902 = state_31893;
(statearr_31902[(14)] = inst_31742);

(statearr_31902[(13)] = inst_31745__$1);

(statearr_31902[(15)] = inst_31743);

return statearr_31902;
})();
if(cljs.core.truth_(inst_31746)){
var statearr_31903_31985 = state_31893__$1;
(statearr_31903_31985[(1)] = (2));

} else {
var statearr_31904_31986 = state_31893__$1;
(statearr_31904_31986[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (24))){
var state_31893__$1 = state_31893;
var statearr_31905_31987 = state_31893__$1;
(statearr_31905_31987[(2)] = null);

(statearr_31905_31987[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (39))){
var inst_31846 = (state_31893[(16)]);
var state_31893__$1 = state_31893;
var statearr_31906_31988 = state_31893__$1;
(statearr_31906_31988[(2)] = inst_31846);

(statearr_31906_31988[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (46))){
var inst_31888 = (state_31893[(2)]);
var state_31893__$1 = state_31893;
var statearr_31907_31989 = state_31893__$1;
(statearr_31907_31989[(2)] = inst_31888);

(statearr_31907_31989[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (4))){
var inst_31790 = (state_31893[(2)]);
var inst_31791 = cljs.core.List.EMPTY;
var inst_31792 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31791);
var inst_31793 = (function (){return (function (p1__31734_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31734_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31734_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__31734_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_31794 = cljs.core.filter.call(null,inst_31793,files);
var inst_31795 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31796 = cljs.core.concat.call(null,inst_31794,inst_31795);
var state_31893__$1 = (function (){var statearr_31908 = state_31893;
(statearr_31908[(17)] = inst_31792);

(statearr_31908[(12)] = inst_31796);

(statearr_31908[(18)] = inst_31790);

return statearr_31908;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31909_31990 = state_31893__$1;
(statearr_31909_31990[(1)] = (16));

} else {
var statearr_31910_31991 = state_31893__$1;
(statearr_31910_31991[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (15))){
var inst_31780 = (state_31893[(2)]);
var state_31893__$1 = state_31893;
var statearr_31911_31992 = state_31893__$1;
(statearr_31911_31992[(2)] = inst_31780);

(statearr_31911_31992[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (21))){
var inst_31806 = (state_31893[(19)]);
var inst_31806__$1 = (state_31893[(2)]);
var inst_31807 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31806__$1);
var state_31893__$1 = (function (){var statearr_31912 = state_31893;
(statearr_31912[(19)] = inst_31806__$1);

return statearr_31912;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31893__$1,(22),inst_31807);
} else {
if((state_val_31894 === (31))){
var inst_31891 = (state_31893[(2)]);
var state_31893__$1 = state_31893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31893__$1,inst_31891);
} else {
if((state_val_31894 === (32))){
var inst_31846 = (state_31893[(16)]);
var inst_31851 = inst_31846.cljs$lang$protocol_mask$partition0$;
var inst_31852 = (inst_31851 & (64));
var inst_31853 = inst_31846.cljs$core$ISeq$;
var inst_31854 = (cljs.core.PROTOCOL_SENTINEL === inst_31853);
var inst_31855 = ((inst_31852) || (inst_31854));
var state_31893__$1 = state_31893;
if(cljs.core.truth_(inst_31855)){
var statearr_31913_31993 = state_31893__$1;
(statearr_31913_31993[(1)] = (35));

} else {
var statearr_31914_31994 = state_31893__$1;
(statearr_31914_31994[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (40))){
var inst_31868 = (state_31893[(20)]);
var inst_31867 = (state_31893[(2)]);
var inst_31868__$1 = cljs.core.get.call(null,inst_31867,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31869 = cljs.core.get.call(null,inst_31867,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31870 = cljs.core.not_empty.call(null,inst_31868__$1);
var state_31893__$1 = (function (){var statearr_31915 = state_31893;
(statearr_31915[(21)] = inst_31869);

(statearr_31915[(20)] = inst_31868__$1);

return statearr_31915;
})();
if(cljs.core.truth_(inst_31870)){
var statearr_31916_31995 = state_31893__$1;
(statearr_31916_31995[(1)] = (41));

} else {
var statearr_31917_31996 = state_31893__$1;
(statearr_31917_31996[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (33))){
var state_31893__$1 = state_31893;
var statearr_31918_31997 = state_31893__$1;
(statearr_31918_31997[(2)] = false);

(statearr_31918_31997[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (13))){
var inst_31766 = (state_31893[(22)]);
var inst_31770 = cljs.core.chunk_first.call(null,inst_31766);
var inst_31771 = cljs.core.chunk_rest.call(null,inst_31766);
var inst_31772 = cljs.core.count.call(null,inst_31770);
var inst_31753 = inst_31771;
var inst_31754 = inst_31770;
var inst_31755 = inst_31772;
var inst_31756 = (0);
var state_31893__$1 = (function (){var statearr_31919 = state_31893;
(statearr_31919[(7)] = inst_31755);

(statearr_31919[(8)] = inst_31756);

(statearr_31919[(9)] = inst_31754);

(statearr_31919[(10)] = inst_31753);

return statearr_31919;
})();
var statearr_31920_31998 = state_31893__$1;
(statearr_31920_31998[(2)] = null);

(statearr_31920_31998[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (22))){
var inst_31810 = (state_31893[(23)]);
var inst_31814 = (state_31893[(24)]);
var inst_31809 = (state_31893[(25)]);
var inst_31806 = (state_31893[(19)]);
var inst_31809__$1 = (state_31893[(2)]);
var inst_31810__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31809__$1);
var inst_31811 = (function (){var all_files = inst_31806;
var res_SINGLEQUOTE_ = inst_31809__$1;
var res = inst_31810__$1;
return (function (p1__31735_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31735_SHARP_));
});
})();
var inst_31812 = cljs.core.filter.call(null,inst_31811,inst_31809__$1);
var inst_31813 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31814__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31813);
var inst_31815 = cljs.core.not_empty.call(null,inst_31814__$1);
var state_31893__$1 = (function (){var statearr_31921 = state_31893;
(statearr_31921[(23)] = inst_31810__$1);

(statearr_31921[(24)] = inst_31814__$1);

(statearr_31921[(25)] = inst_31809__$1);

(statearr_31921[(26)] = inst_31812);

return statearr_31921;
})();
if(cljs.core.truth_(inst_31815)){
var statearr_31922_31999 = state_31893__$1;
(statearr_31922_31999[(1)] = (23));

} else {
var statearr_31923_32000 = state_31893__$1;
(statearr_31923_32000[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (36))){
var state_31893__$1 = state_31893;
var statearr_31924_32001 = state_31893__$1;
(statearr_31924_32001[(2)] = false);

(statearr_31924_32001[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (41))){
var inst_31868 = (state_31893[(20)]);
var inst_31872 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31873 = cljs.core.map.call(null,inst_31872,inst_31868);
var inst_31874 = cljs.core.pr_str.call(null,inst_31873);
var inst_31875 = ["figwheel-no-load meta-data: ",inst_31874].join('');
var inst_31876 = figwheel.client.utils.log.call(null,inst_31875);
var state_31893__$1 = state_31893;
var statearr_31925_32002 = state_31893__$1;
(statearr_31925_32002[(2)] = inst_31876);

(statearr_31925_32002[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (43))){
var inst_31869 = (state_31893[(21)]);
var inst_31879 = (state_31893[(2)]);
var inst_31880 = cljs.core.not_empty.call(null,inst_31869);
var state_31893__$1 = (function (){var statearr_31926 = state_31893;
(statearr_31926[(27)] = inst_31879);

return statearr_31926;
})();
if(cljs.core.truth_(inst_31880)){
var statearr_31927_32003 = state_31893__$1;
(statearr_31927_32003[(1)] = (44));

} else {
var statearr_31928_32004 = state_31893__$1;
(statearr_31928_32004[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (29))){
var inst_31810 = (state_31893[(23)]);
var inst_31814 = (state_31893[(24)]);
var inst_31846 = (state_31893[(16)]);
var inst_31809 = (state_31893[(25)]);
var inst_31812 = (state_31893[(26)]);
var inst_31806 = (state_31893[(19)]);
var inst_31842 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31845 = (function (){var all_files = inst_31806;
var res_SINGLEQUOTE_ = inst_31809;
var res = inst_31810;
var files_not_loaded = inst_31812;
var dependencies_that_loaded = inst_31814;
return (function (p__31844){
var map__31929 = p__31844;
var map__31929__$1 = (((((!((map__31929 == null))))?(((((map__31929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31929):map__31929);
var namespace = cljs.core.get.call(null,map__31929__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
var inst_31846__$1 = cljs.core.group_by.call(null,inst_31845,inst_31812);
var inst_31848 = (inst_31846__$1 == null);
var inst_31849 = cljs.core.not.call(null,inst_31848);
var state_31893__$1 = (function (){var statearr_31931 = state_31893;
(statearr_31931[(28)] = inst_31842);

(statearr_31931[(16)] = inst_31846__$1);

return statearr_31931;
})();
if(inst_31849){
var statearr_31932_32005 = state_31893__$1;
(statearr_31932_32005[(1)] = (32));

} else {
var statearr_31933_32006 = state_31893__$1;
(statearr_31933_32006[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (44))){
var inst_31869 = (state_31893[(21)]);
var inst_31882 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31869);
var inst_31883 = cljs.core.pr_str.call(null,inst_31882);
var inst_31884 = ["not required: ",inst_31883].join('');
var inst_31885 = figwheel.client.utils.log.call(null,inst_31884);
var state_31893__$1 = state_31893;
var statearr_31934_32007 = state_31893__$1;
(statearr_31934_32007[(2)] = inst_31885);

(statearr_31934_32007[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (6))){
var inst_31787 = (state_31893[(2)]);
var state_31893__$1 = state_31893;
var statearr_31935_32008 = state_31893__$1;
(statearr_31935_32008[(2)] = inst_31787);

(statearr_31935_32008[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (28))){
var inst_31812 = (state_31893[(26)]);
var inst_31839 = (state_31893[(2)]);
var inst_31840 = cljs.core.not_empty.call(null,inst_31812);
var state_31893__$1 = (function (){var statearr_31936 = state_31893;
(statearr_31936[(29)] = inst_31839);

return statearr_31936;
})();
if(cljs.core.truth_(inst_31840)){
var statearr_31937_32009 = state_31893__$1;
(statearr_31937_32009[(1)] = (29));

} else {
var statearr_31938_32010 = state_31893__$1;
(statearr_31938_32010[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (25))){
var inst_31810 = (state_31893[(23)]);
var inst_31826 = (state_31893[(2)]);
var inst_31827 = cljs.core.not_empty.call(null,inst_31810);
var state_31893__$1 = (function (){var statearr_31939 = state_31893;
(statearr_31939[(30)] = inst_31826);

return statearr_31939;
})();
if(cljs.core.truth_(inst_31827)){
var statearr_31940_32011 = state_31893__$1;
(statearr_31940_32011[(1)] = (26));

} else {
var statearr_31941_32012 = state_31893__$1;
(statearr_31941_32012[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (34))){
var inst_31862 = (state_31893[(2)]);
var state_31893__$1 = state_31893;
if(cljs.core.truth_(inst_31862)){
var statearr_31942_32013 = state_31893__$1;
(statearr_31942_32013[(1)] = (38));

} else {
var statearr_31943_32014 = state_31893__$1;
(statearr_31943_32014[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (17))){
var state_31893__$1 = state_31893;
var statearr_31944_32015 = state_31893__$1;
(statearr_31944_32015[(2)] = recompile_dependents);

(statearr_31944_32015[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (3))){
var state_31893__$1 = state_31893;
var statearr_31945_32016 = state_31893__$1;
(statearr_31945_32016[(2)] = null);

(statearr_31945_32016[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (12))){
var inst_31783 = (state_31893[(2)]);
var state_31893__$1 = state_31893;
var statearr_31946_32017 = state_31893__$1;
(statearr_31946_32017[(2)] = inst_31783);

(statearr_31946_32017[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (2))){
var inst_31745 = (state_31893[(13)]);
var inst_31752 = cljs.core.seq.call(null,inst_31745);
var inst_31753 = inst_31752;
var inst_31754 = null;
var inst_31755 = (0);
var inst_31756 = (0);
var state_31893__$1 = (function (){var statearr_31947 = state_31893;
(statearr_31947[(7)] = inst_31755);

(statearr_31947[(8)] = inst_31756);

(statearr_31947[(9)] = inst_31754);

(statearr_31947[(10)] = inst_31753);

return statearr_31947;
})();
var statearr_31948_32018 = state_31893__$1;
(statearr_31948_32018[(2)] = null);

(statearr_31948_32018[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (23))){
var inst_31810 = (state_31893[(23)]);
var inst_31814 = (state_31893[(24)]);
var inst_31809 = (state_31893[(25)]);
var inst_31812 = (state_31893[(26)]);
var inst_31806 = (state_31893[(19)]);
var inst_31817 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31819 = (function (){var all_files = inst_31806;
var res_SINGLEQUOTE_ = inst_31809;
var res = inst_31810;
var files_not_loaded = inst_31812;
var dependencies_that_loaded = inst_31814;
return (function (p__31818){
var map__31949 = p__31818;
var map__31949__$1 = (((((!((map__31949 == null))))?(((((map__31949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31949):map__31949);
var request_url = cljs.core.get.call(null,map__31949__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_31820 = cljs.core.reverse.call(null,inst_31814);
var inst_31821 = cljs.core.map.call(null,inst_31819,inst_31820);
var inst_31822 = cljs.core.pr_str.call(null,inst_31821);
var inst_31823 = figwheel.client.utils.log.call(null,inst_31822);
var state_31893__$1 = (function (){var statearr_31951 = state_31893;
(statearr_31951[(31)] = inst_31817);

return statearr_31951;
})();
var statearr_31952_32019 = state_31893__$1;
(statearr_31952_32019[(2)] = inst_31823);

(statearr_31952_32019[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (35))){
var state_31893__$1 = state_31893;
var statearr_31953_32020 = state_31893__$1;
(statearr_31953_32020[(2)] = true);

(statearr_31953_32020[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (19))){
var inst_31796 = (state_31893[(12)]);
var inst_31802 = figwheel.client.file_reloading.expand_files.call(null,inst_31796);
var state_31893__$1 = state_31893;
var statearr_31954_32021 = state_31893__$1;
(statearr_31954_32021[(2)] = inst_31802);

(statearr_31954_32021[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (11))){
var state_31893__$1 = state_31893;
var statearr_31955_32022 = state_31893__$1;
(statearr_31955_32022[(2)] = null);

(statearr_31955_32022[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (9))){
var inst_31785 = (state_31893[(2)]);
var state_31893__$1 = state_31893;
var statearr_31956_32023 = state_31893__$1;
(statearr_31956_32023[(2)] = inst_31785);

(statearr_31956_32023[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (5))){
var inst_31755 = (state_31893[(7)]);
var inst_31756 = (state_31893[(8)]);
var inst_31758 = (inst_31756 < inst_31755);
var inst_31759 = inst_31758;
var state_31893__$1 = state_31893;
if(cljs.core.truth_(inst_31759)){
var statearr_31957_32024 = state_31893__$1;
(statearr_31957_32024[(1)] = (7));

} else {
var statearr_31958_32025 = state_31893__$1;
(statearr_31958_32025[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (14))){
var inst_31766 = (state_31893[(22)]);
var inst_31775 = cljs.core.first.call(null,inst_31766);
var inst_31776 = figwheel.client.file_reloading.eval_body.call(null,inst_31775,opts);
var inst_31777 = cljs.core.next.call(null,inst_31766);
var inst_31753 = inst_31777;
var inst_31754 = null;
var inst_31755 = (0);
var inst_31756 = (0);
var state_31893__$1 = (function (){var statearr_31959 = state_31893;
(statearr_31959[(7)] = inst_31755);

(statearr_31959[(8)] = inst_31756);

(statearr_31959[(9)] = inst_31754);

(statearr_31959[(32)] = inst_31776);

(statearr_31959[(10)] = inst_31753);

return statearr_31959;
})();
var statearr_31960_32026 = state_31893__$1;
(statearr_31960_32026[(2)] = null);

(statearr_31960_32026[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (45))){
var state_31893__$1 = state_31893;
var statearr_31961_32027 = state_31893__$1;
(statearr_31961_32027[(2)] = null);

(statearr_31961_32027[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (26))){
var inst_31810 = (state_31893[(23)]);
var inst_31814 = (state_31893[(24)]);
var inst_31809 = (state_31893[(25)]);
var inst_31812 = (state_31893[(26)]);
var inst_31806 = (state_31893[(19)]);
var inst_31829 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31831 = (function (){var all_files = inst_31806;
var res_SINGLEQUOTE_ = inst_31809;
var res = inst_31810;
var files_not_loaded = inst_31812;
var dependencies_that_loaded = inst_31814;
return (function (p__31830){
var map__31962 = p__31830;
var map__31962__$1 = (((((!((map__31962 == null))))?(((((map__31962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31962):map__31962);
var namespace = cljs.core.get.call(null,map__31962__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31962__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_31832 = cljs.core.map.call(null,inst_31831,inst_31810);
var inst_31833 = cljs.core.pr_str.call(null,inst_31832);
var inst_31834 = figwheel.client.utils.log.call(null,inst_31833);
var inst_31835 = (function (){var all_files = inst_31806;
var res_SINGLEQUOTE_ = inst_31809;
var res = inst_31810;
var files_not_loaded = inst_31812;
var dependencies_that_loaded = inst_31814;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_31836 = setTimeout(inst_31835,(10));
var state_31893__$1 = (function (){var statearr_31964 = state_31893;
(statearr_31964[(33)] = inst_31834);

(statearr_31964[(34)] = inst_31829);

return statearr_31964;
})();
var statearr_31965_32028 = state_31893__$1;
(statearr_31965_32028[(2)] = inst_31836);

(statearr_31965_32028[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (16))){
var state_31893__$1 = state_31893;
var statearr_31966_32029 = state_31893__$1;
(statearr_31966_32029[(2)] = reload_dependents);

(statearr_31966_32029[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (38))){
var inst_31846 = (state_31893[(16)]);
var inst_31864 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31846);
var state_31893__$1 = state_31893;
var statearr_31967_32030 = state_31893__$1;
(statearr_31967_32030[(2)] = inst_31864);

(statearr_31967_32030[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (30))){
var state_31893__$1 = state_31893;
var statearr_31968_32031 = state_31893__$1;
(statearr_31968_32031[(2)] = null);

(statearr_31968_32031[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (10))){
var inst_31766 = (state_31893[(22)]);
var inst_31768 = cljs.core.chunked_seq_QMARK_.call(null,inst_31766);
var state_31893__$1 = state_31893;
if(inst_31768){
var statearr_31969_32032 = state_31893__$1;
(statearr_31969_32032[(1)] = (13));

} else {
var statearr_31970_32033 = state_31893__$1;
(statearr_31970_32033[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (18))){
var inst_31800 = (state_31893[(2)]);
var state_31893__$1 = state_31893;
if(cljs.core.truth_(inst_31800)){
var statearr_31971_32034 = state_31893__$1;
(statearr_31971_32034[(1)] = (19));

} else {
var statearr_31972_32035 = state_31893__$1;
(statearr_31972_32035[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (42))){
var state_31893__$1 = state_31893;
var statearr_31973_32036 = state_31893__$1;
(statearr_31973_32036[(2)] = null);

(statearr_31973_32036[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (37))){
var inst_31859 = (state_31893[(2)]);
var state_31893__$1 = state_31893;
var statearr_31974_32037 = state_31893__$1;
(statearr_31974_32037[(2)] = inst_31859);

(statearr_31974_32037[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (8))){
var inst_31766 = (state_31893[(22)]);
var inst_31753 = (state_31893[(10)]);
var inst_31766__$1 = cljs.core.seq.call(null,inst_31753);
var state_31893__$1 = (function (){var statearr_31975 = state_31893;
(statearr_31975[(22)] = inst_31766__$1);

return statearr_31975;
})();
if(inst_31766__$1){
var statearr_31976_32038 = state_31893__$1;
(statearr_31976_32038[(1)] = (10));

} else {
var statearr_31977_32039 = state_31893__$1;
(statearr_31977_32039[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27695__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27695__auto____0 = (function (){
var statearr_31978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31978[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27695__auto__);

(statearr_31978[(1)] = (1));

return statearr_31978;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27695__auto____1 = (function (state_31893){
while(true){
var ret_value__27696__auto__ = (function (){try{while(true){
var result__27697__auto__ = switch__27694__auto__.call(null,state_31893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27697__auto__;
}
break;
}
}catch (e31979){if((e31979 instanceof Object)){
var ex__27698__auto__ = e31979;
var statearr_31980_32040 = state_31893;
(statearr_31980_32040[(5)] = ex__27698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32041 = state_31893;
state_31893 = G__32041;
continue;
} else {
return ret_value__27696__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27695__auto__ = function(state_31893){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27695__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27695__auto____1.call(this,state_31893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27695__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27695__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27695__auto__;
})()
})();
var state__27791__auto__ = (function (){var statearr_31981 = f__27790__auto__.call(null);
(statearr_31981[(6)] = c__27789__auto__);

return statearr_31981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27791__auto__);
}));

return c__27789__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32044,link){
var map__32045 = p__32044;
var map__32045__$1 = (((((!((map__32045 == null))))?(((((map__32045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32045):map__32045);
var file = cljs.core.get.call(null,map__32045__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__32042_SHARP_,p2__32043_SHARP_){
if(cljs.core._EQ_.call(null,p1__32042_SHARP_,p2__32043_SHARP_)){
return p1__32042_SHARP_;
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32048){
var map__32049 = p__32048;
var map__32049__$1 = (((((!((map__32049 == null))))?(((((map__32049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32049):map__32049);
var match_length = cljs.core.get.call(null,map__32049__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32049__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32047_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32047_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32051_SHARP_,p2__32052_SHARP_){
return cljs.core.assoc.call(null,p1__32051_SHARP_,cljs.core.get.call(null,p2__32052_SHARP_,key),p2__32052_SHARP_);
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
var loaded_f_datas_32053 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_32053);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_32053);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32054,p__32055){
var map__32056 = p__32054;
var map__32056__$1 = (((((!((map__32056 == null))))?(((((map__32056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32056):map__32056);
var on_cssload = cljs.core.get.call(null,map__32056__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__32057 = p__32055;
var map__32057__$1 = (((((!((map__32057 == null))))?(((((map__32057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32057):map__32057);
var files_msg = map__32057__$1;
var files = cljs.core.get.call(null,map__32057__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1602360098015
