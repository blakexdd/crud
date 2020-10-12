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
var G__33160 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__33160 == null)){
return null;
} else {
return goog.object.get(G__33160,"requires");
}
}):(function (path){
var G__33161 = goog.object.get(goog.dependencies_.requires,path);
if((G__33161 == null)){
return null;
} else {
return goog.object.getKeys(G__33161);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33162_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33162_SHARP_)));
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
var G__33163 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__33163__$1 = (((G__33163 == null))?null:goog.object.get(G__33163,"provides"));
if((G__33163__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__33163__$1);
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
var seq__33164 = cljs.core.seq.call(null,provides);
var chunk__33165 = null;
var count__33166 = (0);
var i__33167 = (0);
while(true){
if((i__33167 < count__33166)){
var prov = cljs.core._nth.call(null,chunk__33165,i__33167);
var seq__33176_33188 = cljs.core.seq.call(null,requires);
var chunk__33177_33189 = null;
var count__33178_33190 = (0);
var i__33179_33191 = (0);
while(true){
if((i__33179_33191 < count__33178_33190)){
var req_33192 = cljs.core._nth.call(null,chunk__33177_33189,i__33179_33191);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33192,prov);


var G__33193 = seq__33176_33188;
var G__33194 = chunk__33177_33189;
var G__33195 = count__33178_33190;
var G__33196 = (i__33179_33191 + (1));
seq__33176_33188 = G__33193;
chunk__33177_33189 = G__33194;
count__33178_33190 = G__33195;
i__33179_33191 = G__33196;
continue;
} else {
var temp__5735__auto___33197 = cljs.core.seq.call(null,seq__33176_33188);
if(temp__5735__auto___33197){
var seq__33176_33198__$1 = temp__5735__auto___33197;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33176_33198__$1)){
var c__4556__auto___33199 = cljs.core.chunk_first.call(null,seq__33176_33198__$1);
var G__33200 = cljs.core.chunk_rest.call(null,seq__33176_33198__$1);
var G__33201 = c__4556__auto___33199;
var G__33202 = cljs.core.count.call(null,c__4556__auto___33199);
var G__33203 = (0);
seq__33176_33188 = G__33200;
chunk__33177_33189 = G__33201;
count__33178_33190 = G__33202;
i__33179_33191 = G__33203;
continue;
} else {
var req_33204 = cljs.core.first.call(null,seq__33176_33198__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33204,prov);


var G__33205 = cljs.core.next.call(null,seq__33176_33198__$1);
var G__33206 = null;
var G__33207 = (0);
var G__33208 = (0);
seq__33176_33188 = G__33205;
chunk__33177_33189 = G__33206;
count__33178_33190 = G__33207;
i__33179_33191 = G__33208;
continue;
}
} else {
}
}
break;
}


var G__33209 = seq__33164;
var G__33210 = chunk__33165;
var G__33211 = count__33166;
var G__33212 = (i__33167 + (1));
seq__33164 = G__33209;
chunk__33165 = G__33210;
count__33166 = G__33211;
i__33167 = G__33212;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__33164);
if(temp__5735__auto__){
var seq__33164__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33164__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__33164__$1);
var G__33213 = cljs.core.chunk_rest.call(null,seq__33164__$1);
var G__33214 = c__4556__auto__;
var G__33215 = cljs.core.count.call(null,c__4556__auto__);
var G__33216 = (0);
seq__33164 = G__33213;
chunk__33165 = G__33214;
count__33166 = G__33215;
i__33167 = G__33216;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33164__$1);
var seq__33180_33217 = cljs.core.seq.call(null,requires);
var chunk__33181_33218 = null;
var count__33182_33219 = (0);
var i__33183_33220 = (0);
while(true){
if((i__33183_33220 < count__33182_33219)){
var req_33221 = cljs.core._nth.call(null,chunk__33181_33218,i__33183_33220);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33221,prov);


var G__33222 = seq__33180_33217;
var G__33223 = chunk__33181_33218;
var G__33224 = count__33182_33219;
var G__33225 = (i__33183_33220 + (1));
seq__33180_33217 = G__33222;
chunk__33181_33218 = G__33223;
count__33182_33219 = G__33224;
i__33183_33220 = G__33225;
continue;
} else {
var temp__5735__auto___33226__$1 = cljs.core.seq.call(null,seq__33180_33217);
if(temp__5735__auto___33226__$1){
var seq__33180_33227__$1 = temp__5735__auto___33226__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33180_33227__$1)){
var c__4556__auto___33228 = cljs.core.chunk_first.call(null,seq__33180_33227__$1);
var G__33229 = cljs.core.chunk_rest.call(null,seq__33180_33227__$1);
var G__33230 = c__4556__auto___33228;
var G__33231 = cljs.core.count.call(null,c__4556__auto___33228);
var G__33232 = (0);
seq__33180_33217 = G__33229;
chunk__33181_33218 = G__33230;
count__33182_33219 = G__33231;
i__33183_33220 = G__33232;
continue;
} else {
var req_33233 = cljs.core.first.call(null,seq__33180_33227__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33233,prov);


var G__33234 = cljs.core.next.call(null,seq__33180_33227__$1);
var G__33235 = null;
var G__33236 = (0);
var G__33237 = (0);
seq__33180_33217 = G__33234;
chunk__33181_33218 = G__33235;
count__33182_33219 = G__33236;
i__33183_33220 = G__33237;
continue;
}
} else {
}
}
break;
}


var G__33238 = cljs.core.next.call(null,seq__33164__$1);
var G__33239 = null;
var G__33240 = (0);
var G__33241 = (0);
seq__33164 = G__33238;
chunk__33165 = G__33239;
count__33166 = G__33240;
i__33167 = G__33241;
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
var seq__33184 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__33185 = null;
var count__33186 = (0);
var i__33187 = (0);
while(true){
if((i__33187 < count__33186)){
var prov = cljs.core._nth.call(null,chunk__33185,i__33187);
goog.object.forEach(deps,((function (seq__33184,chunk__33185,count__33186,i__33187,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__33184,chunk__33185,count__33186,i__33187,prov,requires))
);


var G__33242 = seq__33184;
var G__33243 = chunk__33185;
var G__33244 = count__33186;
var G__33245 = (i__33187 + (1));
seq__33184 = G__33242;
chunk__33185 = G__33243;
count__33186 = G__33244;
i__33187 = G__33245;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__33184);
if(temp__5735__auto__){
var seq__33184__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33184__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__33184__$1);
var G__33246 = cljs.core.chunk_rest.call(null,seq__33184__$1);
var G__33247 = c__4556__auto__;
var G__33248 = cljs.core.count.call(null,c__4556__auto__);
var G__33249 = (0);
seq__33184 = G__33246;
chunk__33185 = G__33247;
count__33186 = G__33248;
i__33187 = G__33249;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33184__$1);
goog.object.forEach(deps,((function (seq__33184,chunk__33185,count__33186,i__33187,prov,seq__33184__$1,temp__5735__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__33184,chunk__33185,count__33186,i__33187,prov,seq__33184__$1,temp__5735__auto__,requires))
);


var G__33250 = cljs.core.next.call(null,seq__33184__$1);
var G__33251 = null;
var G__33252 = (0);
var G__33253 = (0);
seq__33184 = G__33250;
chunk__33185 = G__33251;
count__33186 = G__33252;
i__33187 = G__33253;
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
return cljs.core.some.call(null,(function (p__33254){
var vec__33255 = p__33254;
var _ = cljs.core.nth.call(null,vec__33255,(0),null);
var v = cljs.core.nth.call(null,vec__33255,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__33258){
var vec__33259 = p__33258;
var k = cljs.core.nth.call(null,vec__33259,(0),null);
var v = cljs.core.nth.call(null,vec__33259,(1),null);
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

var seq__33271_33279 = cljs.core.seq.call(null,deps);
var chunk__33272_33280 = null;
var count__33273_33281 = (0);
var i__33274_33282 = (0);
while(true){
if((i__33274_33282 < count__33273_33281)){
var dep_33283 = cljs.core._nth.call(null,chunk__33272_33280,i__33274_33282);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_33283;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_33283));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_33283,(depth + (1)),state);
} else {
}


var G__33284 = seq__33271_33279;
var G__33285 = chunk__33272_33280;
var G__33286 = count__33273_33281;
var G__33287 = (i__33274_33282 + (1));
seq__33271_33279 = G__33284;
chunk__33272_33280 = G__33285;
count__33273_33281 = G__33286;
i__33274_33282 = G__33287;
continue;
} else {
var temp__5735__auto___33288 = cljs.core.seq.call(null,seq__33271_33279);
if(temp__5735__auto___33288){
var seq__33271_33289__$1 = temp__5735__auto___33288;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33271_33289__$1)){
var c__4556__auto___33290 = cljs.core.chunk_first.call(null,seq__33271_33289__$1);
var G__33291 = cljs.core.chunk_rest.call(null,seq__33271_33289__$1);
var G__33292 = c__4556__auto___33290;
var G__33293 = cljs.core.count.call(null,c__4556__auto___33290);
var G__33294 = (0);
seq__33271_33279 = G__33291;
chunk__33272_33280 = G__33292;
count__33273_33281 = G__33293;
i__33274_33282 = G__33294;
continue;
} else {
var dep_33295 = cljs.core.first.call(null,seq__33271_33289__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_33295;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_33295));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_33295,(depth + (1)),state);
} else {
}


var G__33296 = cljs.core.next.call(null,seq__33271_33289__$1);
var G__33297 = null;
var G__33298 = (0);
var G__33299 = (0);
seq__33271_33279 = G__33296;
chunk__33272_33280 = G__33297;
count__33273_33281 = G__33298;
i__33274_33282 = G__33299;
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
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33275){
var vec__33276 = p__33275;
var seq__33277 = cljs.core.seq.call(null,vec__33276);
var first__33278 = cljs.core.first.call(null,seq__33277);
var seq__33277__$1 = cljs.core.next.call(null,seq__33277);
var x = first__33278;
var xs = seq__33277__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__33262_SHARP_){
return clojure.set.difference.call(null,p1__33262_SHARP_,x);
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
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__33300_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__33300_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__33301 = cljs.core.seq.call(null,provides);
var chunk__33302 = null;
var count__33303 = (0);
var i__33304 = (0);
while(true){
if((i__33304 < count__33303)){
var prov = cljs.core._nth.call(null,chunk__33302,i__33304);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33313_33321 = cljs.core.seq.call(null,requires);
var chunk__33314_33322 = null;
var count__33315_33323 = (0);
var i__33316_33324 = (0);
while(true){
if((i__33316_33324 < count__33315_33323)){
var req_33325 = cljs.core._nth.call(null,chunk__33314_33322,i__33316_33324);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33325,prov);


var G__33326 = seq__33313_33321;
var G__33327 = chunk__33314_33322;
var G__33328 = count__33315_33323;
var G__33329 = (i__33316_33324 + (1));
seq__33313_33321 = G__33326;
chunk__33314_33322 = G__33327;
count__33315_33323 = G__33328;
i__33316_33324 = G__33329;
continue;
} else {
var temp__5735__auto___33330 = cljs.core.seq.call(null,seq__33313_33321);
if(temp__5735__auto___33330){
var seq__33313_33331__$1 = temp__5735__auto___33330;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33313_33331__$1)){
var c__4556__auto___33332 = cljs.core.chunk_first.call(null,seq__33313_33331__$1);
var G__33333 = cljs.core.chunk_rest.call(null,seq__33313_33331__$1);
var G__33334 = c__4556__auto___33332;
var G__33335 = cljs.core.count.call(null,c__4556__auto___33332);
var G__33336 = (0);
seq__33313_33321 = G__33333;
chunk__33314_33322 = G__33334;
count__33315_33323 = G__33335;
i__33316_33324 = G__33336;
continue;
} else {
var req_33337 = cljs.core.first.call(null,seq__33313_33331__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33337,prov);


var G__33338 = cljs.core.next.call(null,seq__33313_33331__$1);
var G__33339 = null;
var G__33340 = (0);
var G__33341 = (0);
seq__33313_33321 = G__33338;
chunk__33314_33322 = G__33339;
count__33315_33323 = G__33340;
i__33316_33324 = G__33341;
continue;
}
} else {
}
}
break;
}


var G__33342 = seq__33301;
var G__33343 = chunk__33302;
var G__33344 = count__33303;
var G__33345 = (i__33304 + (1));
seq__33301 = G__33342;
chunk__33302 = G__33343;
count__33303 = G__33344;
i__33304 = G__33345;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__33301);
if(temp__5735__auto__){
var seq__33301__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33301__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__33301__$1);
var G__33346 = cljs.core.chunk_rest.call(null,seq__33301__$1);
var G__33347 = c__4556__auto__;
var G__33348 = cljs.core.count.call(null,c__4556__auto__);
var G__33349 = (0);
seq__33301 = G__33346;
chunk__33302 = G__33347;
count__33303 = G__33348;
i__33304 = G__33349;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33301__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33317_33350 = cljs.core.seq.call(null,requires);
var chunk__33318_33351 = null;
var count__33319_33352 = (0);
var i__33320_33353 = (0);
while(true){
if((i__33320_33353 < count__33319_33352)){
var req_33354 = cljs.core._nth.call(null,chunk__33318_33351,i__33320_33353);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33354,prov);


var G__33355 = seq__33317_33350;
var G__33356 = chunk__33318_33351;
var G__33357 = count__33319_33352;
var G__33358 = (i__33320_33353 + (1));
seq__33317_33350 = G__33355;
chunk__33318_33351 = G__33356;
count__33319_33352 = G__33357;
i__33320_33353 = G__33358;
continue;
} else {
var temp__5735__auto___33359__$1 = cljs.core.seq.call(null,seq__33317_33350);
if(temp__5735__auto___33359__$1){
var seq__33317_33360__$1 = temp__5735__auto___33359__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33317_33360__$1)){
var c__4556__auto___33361 = cljs.core.chunk_first.call(null,seq__33317_33360__$1);
var G__33362 = cljs.core.chunk_rest.call(null,seq__33317_33360__$1);
var G__33363 = c__4556__auto___33361;
var G__33364 = cljs.core.count.call(null,c__4556__auto___33361);
var G__33365 = (0);
seq__33317_33350 = G__33362;
chunk__33318_33351 = G__33363;
count__33319_33352 = G__33364;
i__33320_33353 = G__33365;
continue;
} else {
var req_33366 = cljs.core.first.call(null,seq__33317_33360__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33366,prov);


var G__33367 = cljs.core.next.call(null,seq__33317_33360__$1);
var G__33368 = null;
var G__33369 = (0);
var G__33370 = (0);
seq__33317_33350 = G__33367;
chunk__33318_33351 = G__33368;
count__33319_33352 = G__33369;
i__33320_33353 = G__33370;
continue;
}
} else {
}
}
break;
}


var G__33371 = cljs.core.next.call(null,seq__33301__$1);
var G__33372 = null;
var G__33373 = (0);
var G__33374 = (0);
seq__33301 = G__33371;
chunk__33302 = G__33372;
count__33303 = G__33373;
i__33304 = G__33374;
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
var seq__33375_33379 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33376_33380 = null;
var count__33377_33381 = (0);
var i__33378_33382 = (0);
while(true){
if((i__33378_33382 < count__33377_33381)){
var ns_33383 = cljs.core._nth.call(null,chunk__33376_33380,i__33378_33382);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33383);


var G__33384 = seq__33375_33379;
var G__33385 = chunk__33376_33380;
var G__33386 = count__33377_33381;
var G__33387 = (i__33378_33382 + (1));
seq__33375_33379 = G__33384;
chunk__33376_33380 = G__33385;
count__33377_33381 = G__33386;
i__33378_33382 = G__33387;
continue;
} else {
var temp__5735__auto___33388 = cljs.core.seq.call(null,seq__33375_33379);
if(temp__5735__auto___33388){
var seq__33375_33389__$1 = temp__5735__auto___33388;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33375_33389__$1)){
var c__4556__auto___33390 = cljs.core.chunk_first.call(null,seq__33375_33389__$1);
var G__33391 = cljs.core.chunk_rest.call(null,seq__33375_33389__$1);
var G__33392 = c__4556__auto___33390;
var G__33393 = cljs.core.count.call(null,c__4556__auto___33390);
var G__33394 = (0);
seq__33375_33379 = G__33391;
chunk__33376_33380 = G__33392;
count__33377_33381 = G__33393;
i__33378_33382 = G__33394;
continue;
} else {
var ns_33395 = cljs.core.first.call(null,seq__33375_33389__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33395);


var G__33396 = cljs.core.next.call(null,seq__33375_33389__$1);
var G__33397 = null;
var G__33398 = (0);
var G__33399 = (0);
seq__33375_33379 = G__33396;
chunk__33376_33380 = G__33397;
count__33377_33381 = G__33398;
i__33378_33382 = G__33399;
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
var G__33400__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33400 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33401__i = 0, G__33401__a = new Array(arguments.length -  0);
while (G__33401__i < G__33401__a.length) {G__33401__a[G__33401__i] = arguments[G__33401__i + 0]; ++G__33401__i;}
  args = new cljs.core.IndexedSeq(G__33401__a,0,null);
} 
return G__33400__delegate.call(this,args);};
G__33400.cljs$lang$maxFixedArity = 0;
G__33400.cljs$lang$applyTo = (function (arglist__33402){
var args = cljs.core.seq(arglist__33402);
return G__33400__delegate(args);
});
G__33400.cljs$core$IFn$_invoke$arity$variadic = G__33400__delegate;
return G__33400;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__33403_SHARP_,p2__33404_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33403_SHARP_)),p2__33404_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__33405_SHARP_,p2__33406_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33405_SHARP_),p2__33406_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__33407 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__33407.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__33407.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__33407;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e33408){if((e33408 instanceof Error)){
var e = e33408;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33408;

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
}catch (e33409){if((e33409 instanceof Error)){
var e = e33409;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33409;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33410 = cljs.core._EQ_;
var expr__33411 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33410.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__33411))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__33410.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__33411))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__33410.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__33411))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33413,callback){
var map__33414 = p__33413;
var map__33414__$1 = (((((!((map__33414 == null))))?(((((map__33414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33414):map__33414);
var file_msg = map__33414__$1;
var request_url = cljs.core.get.call(null,map__33414__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
figwheel.client.file_reloading.reloader_loop = (function (){var c__29917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29918__auto__ = (function (){var switch__29900__auto__ = (function (state_33452){
var state_val_33453 = (state_33452[(1)]);
if((state_val_33453 === (7))){
var inst_33448 = (state_33452[(2)]);
var state_33452__$1 = state_33452;
var statearr_33454_33480 = state_33452__$1;
(statearr_33454_33480[(2)] = inst_33448);

(statearr_33454_33480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33453 === (1))){
var state_33452__$1 = state_33452;
var statearr_33455_33481 = state_33452__$1;
(statearr_33455_33481[(2)] = null);

(statearr_33455_33481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33453 === (4))){
var inst_33418 = (state_33452[(7)]);
var inst_33418__$1 = (state_33452[(2)]);
var state_33452__$1 = (function (){var statearr_33456 = state_33452;
(statearr_33456[(7)] = inst_33418__$1);

return statearr_33456;
})();
if(cljs.core.truth_(inst_33418__$1)){
var statearr_33457_33482 = state_33452__$1;
(statearr_33457_33482[(1)] = (5));

} else {
var statearr_33458_33483 = state_33452__$1;
(statearr_33458_33483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33453 === (15))){
var inst_33433 = (state_33452[(8)]);
var inst_33431 = (state_33452[(9)]);
var inst_33435 = inst_33433.call(null,inst_33431);
var state_33452__$1 = state_33452;
var statearr_33459_33484 = state_33452__$1;
(statearr_33459_33484[(2)] = inst_33435);

(statearr_33459_33484[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33453 === (13))){
var inst_33442 = (state_33452[(2)]);
var state_33452__$1 = state_33452;
var statearr_33460_33485 = state_33452__$1;
(statearr_33460_33485[(2)] = inst_33442);

(statearr_33460_33485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33453 === (6))){
var state_33452__$1 = state_33452;
var statearr_33461_33486 = state_33452__$1;
(statearr_33461_33486[(2)] = null);

(statearr_33461_33486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33453 === (17))){
var inst_33439 = (state_33452[(2)]);
var state_33452__$1 = state_33452;
var statearr_33462_33487 = state_33452__$1;
(statearr_33462_33487[(2)] = inst_33439);

(statearr_33462_33487[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33453 === (3))){
var inst_33450 = (state_33452[(2)]);
var state_33452__$1 = state_33452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33452__$1,inst_33450);
} else {
if((state_val_33453 === (12))){
var state_33452__$1 = state_33452;
var statearr_33463_33488 = state_33452__$1;
(statearr_33463_33488[(2)] = null);

(statearr_33463_33488[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33453 === (2))){
var state_33452__$1 = state_33452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33452__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_33453 === (11))){
var inst_33423 = (state_33452[(10)]);
var inst_33429 = figwheel.client.file_reloading.blocking_load.call(null,inst_33423);
var state_33452__$1 = state_33452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33452__$1,(14),inst_33429);
} else {
if((state_val_33453 === (9))){
var inst_33423 = (state_33452[(10)]);
var state_33452__$1 = state_33452;
if(cljs.core.truth_(inst_33423)){
var statearr_33464_33489 = state_33452__$1;
(statearr_33464_33489[(1)] = (11));

} else {
var statearr_33465_33490 = state_33452__$1;
(statearr_33465_33490[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33453 === (5))){
var inst_33418 = (state_33452[(7)]);
var inst_33424 = (state_33452[(11)]);
var inst_33423 = cljs.core.nth.call(null,inst_33418,(0),null);
var inst_33424__$1 = cljs.core.nth.call(null,inst_33418,(1),null);
var state_33452__$1 = (function (){var statearr_33466 = state_33452;
(statearr_33466[(11)] = inst_33424__$1);

(statearr_33466[(10)] = inst_33423);

return statearr_33466;
})();
if(cljs.core.truth_(inst_33424__$1)){
var statearr_33467_33491 = state_33452__$1;
(statearr_33467_33491[(1)] = (8));

} else {
var statearr_33468_33492 = state_33452__$1;
(statearr_33468_33492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33453 === (14))){
var inst_33433 = (state_33452[(8)]);
var inst_33423 = (state_33452[(10)]);
var inst_33431 = (state_33452[(2)]);
var inst_33432 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_33433__$1 = cljs.core.get.call(null,inst_33432,inst_33423);
var state_33452__$1 = (function (){var statearr_33469 = state_33452;
(statearr_33469[(8)] = inst_33433__$1);

(statearr_33469[(9)] = inst_33431);

return statearr_33469;
})();
if(cljs.core.truth_(inst_33433__$1)){
var statearr_33470_33493 = state_33452__$1;
(statearr_33470_33493[(1)] = (15));

} else {
var statearr_33471_33494 = state_33452__$1;
(statearr_33471_33494[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33453 === (16))){
var inst_33431 = (state_33452[(9)]);
var inst_33437 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_33431);
var state_33452__$1 = state_33452;
var statearr_33472_33495 = state_33452__$1;
(statearr_33472_33495[(2)] = inst_33437);

(statearr_33472_33495[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33453 === (10))){
var inst_33444 = (state_33452[(2)]);
var state_33452__$1 = (function (){var statearr_33473 = state_33452;
(statearr_33473[(12)] = inst_33444);

return statearr_33473;
})();
var statearr_33474_33496 = state_33452__$1;
(statearr_33474_33496[(2)] = null);

(statearr_33474_33496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33453 === (8))){
var inst_33424 = (state_33452[(11)]);
var inst_33426 = eval(inst_33424);
var state_33452__$1 = state_33452;
var statearr_33475_33497 = state_33452__$1;
(statearr_33475_33497[(2)] = inst_33426);

(statearr_33475_33497[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__29901__auto__ = null;
var figwheel$client$file_reloading$state_machine__29901__auto____0 = (function (){
var statearr_33476 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33476[(0)] = figwheel$client$file_reloading$state_machine__29901__auto__);

(statearr_33476[(1)] = (1));

return statearr_33476;
});
var figwheel$client$file_reloading$state_machine__29901__auto____1 = (function (state_33452){
while(true){
var ret_value__29902__auto__ = (function (){try{while(true){
var result__29903__auto__ = switch__29900__auto__.call(null,state_33452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29903__auto__;
}
break;
}
}catch (e33477){if((e33477 instanceof Object)){
var ex__29904__auto__ = e33477;
var statearr_33478_33498 = state_33452;
(statearr_33478_33498[(5)] = ex__29904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33499 = state_33452;
state_33452 = G__33499;
continue;
} else {
return ret_value__29902__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29901__auto__ = function(state_33452){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29901__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29901__auto____1.call(this,state_33452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29901__auto____0;
figwheel$client$file_reloading$state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29901__auto____1;
return figwheel$client$file_reloading$state_machine__29901__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_33479 = f__29918__auto__.call(null);
(statearr_33479[(6)] = c__29917__auto__);

return statearr_33479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29919__auto__);
}));

return c__29917__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__33501 = arguments.length;
switch (G__33501) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33503,callback){
var map__33504 = p__33503;
var map__33504__$1 = (((((!((map__33504 == null))))?(((((map__33504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33504):map__33504);
var file_msg = map__33504__$1;
var namespace = cljs.core.get.call(null,map__33504__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__33506){
var map__33507 = p__33506;
var map__33507__$1 = (((((!((map__33507 == null))))?(((((map__33507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33507):map__33507);
var file_msg = map__33507__$1;
var namespace = cljs.core.get.call(null,map__33507__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33509){
var map__33510 = p__33509;
var map__33510__$1 = (((((!((map__33510 == null))))?(((((map__33510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33510):map__33510);
var file_msg = map__33510__$1;
var namespace = cljs.core.get.call(null,map__33510__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33512,callback){
var map__33513 = p__33512;
var map__33513__$1 = (((((!((map__33513 == null))))?(((((map__33513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33513):map__33513);
var file_msg = map__33513__$1;
var request_url = cljs.core.get.call(null,map__33513__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33513__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__29917__auto___33563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29918__auto__ = (function (){var switch__29900__auto__ = (function (state_33548){
var state_val_33549 = (state_33548[(1)]);
if((state_val_33549 === (1))){
var inst_33522 = cljs.core.seq.call(null,files);
var inst_33523 = cljs.core.first.call(null,inst_33522);
var inst_33524 = cljs.core.next.call(null,inst_33522);
var inst_33525 = files;
var state_33548__$1 = (function (){var statearr_33550 = state_33548;
(statearr_33550[(7)] = inst_33524);

(statearr_33550[(8)] = inst_33525);

(statearr_33550[(9)] = inst_33523);

return statearr_33550;
})();
var statearr_33551_33564 = state_33548__$1;
(statearr_33551_33564[(2)] = null);

(statearr_33551_33564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (2))){
var inst_33531 = (state_33548[(10)]);
var inst_33525 = (state_33548[(8)]);
var inst_33530 = cljs.core.seq.call(null,inst_33525);
var inst_33531__$1 = cljs.core.first.call(null,inst_33530);
var inst_33532 = cljs.core.next.call(null,inst_33530);
var inst_33533 = (inst_33531__$1 == null);
var inst_33534 = cljs.core.not.call(null,inst_33533);
var state_33548__$1 = (function (){var statearr_33552 = state_33548;
(statearr_33552[(10)] = inst_33531__$1);

(statearr_33552[(11)] = inst_33532);

return statearr_33552;
})();
if(inst_33534){
var statearr_33553_33565 = state_33548__$1;
(statearr_33553_33565[(1)] = (4));

} else {
var statearr_33554_33566 = state_33548__$1;
(statearr_33554_33566[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (3))){
var inst_33546 = (state_33548[(2)]);
var state_33548__$1 = state_33548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33548__$1,inst_33546);
} else {
if((state_val_33549 === (4))){
var inst_33531 = (state_33548[(10)]);
var inst_33536 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33531);
var state_33548__$1 = state_33548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33548__$1,(7),inst_33536);
} else {
if((state_val_33549 === (5))){
var inst_33542 = cljs.core.async.close_BANG_.call(null,out);
var state_33548__$1 = state_33548;
var statearr_33555_33567 = state_33548__$1;
(statearr_33555_33567[(2)] = inst_33542);

(statearr_33555_33567[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (6))){
var inst_33544 = (state_33548[(2)]);
var state_33548__$1 = state_33548;
var statearr_33556_33568 = state_33548__$1;
(statearr_33556_33568[(2)] = inst_33544);

(statearr_33556_33568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33549 === (7))){
var inst_33532 = (state_33548[(11)]);
var inst_33538 = (state_33548[(2)]);
var inst_33539 = cljs.core.async.put_BANG_.call(null,out,inst_33538);
var inst_33525 = inst_33532;
var state_33548__$1 = (function (){var statearr_33557 = state_33548;
(statearr_33557[(12)] = inst_33539);

(statearr_33557[(8)] = inst_33525);

return statearr_33557;
})();
var statearr_33558_33569 = state_33548__$1;
(statearr_33558_33569[(2)] = null);

(statearr_33558_33569[(1)] = (2));


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
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29901__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29901__auto____0 = (function (){
var statearr_33559 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33559[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29901__auto__);

(statearr_33559[(1)] = (1));

return statearr_33559;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29901__auto____1 = (function (state_33548){
while(true){
var ret_value__29902__auto__ = (function (){try{while(true){
var result__29903__auto__ = switch__29900__auto__.call(null,state_33548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29903__auto__;
}
break;
}
}catch (e33560){if((e33560 instanceof Object)){
var ex__29904__auto__ = e33560;
var statearr_33561_33570 = state_33548;
(statearr_33561_33570[(5)] = ex__29904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33571 = state_33548;
state_33548 = G__33571;
continue;
} else {
return ret_value__29902__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29901__auto__ = function(state_33548){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29901__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29901__auto____1.call(this,state_33548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29901__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29901__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29901__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_33562 = f__29918__auto__.call(null);
(statearr_33562[(6)] = c__29917__auto___33563);

return statearr_33562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29919__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33572,opts){
var map__33573 = p__33572;
var map__33573__$1 = (((((!((map__33573 == null))))?(((((map__33573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33573):map__33573);
var eval_body = cljs.core.get.call(null,map__33573__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33573__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e33575){var e = e33575;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__33576_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33576_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__33577){
var vec__33578 = p__33577;
var k = cljs.core.nth.call(null,vec__33578,(0),null);
var v = cljs.core.nth.call(null,vec__33578,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33581){
var vec__33582 = p__33581;
var k = cljs.core.nth.call(null,vec__33582,(0),null);
var v = cljs.core.nth.call(null,vec__33582,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33588,p__33589){
var map__33590 = p__33588;
var map__33590__$1 = (((((!((map__33590 == null))))?(((((map__33590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33590):map__33590);
var opts = map__33590__$1;
var before_jsload = cljs.core.get.call(null,map__33590__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__33590__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__33590__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__33591 = p__33589;
var map__33591__$1 = (((((!((map__33591 == null))))?(((((map__33591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33591):map__33591);
var msg = map__33591__$1;
var files = cljs.core.get.call(null,map__33591__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__33591__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__33591__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29918__auto__ = (function (){var switch__29900__auto__ = (function (state_33745){
var state_val_33746 = (state_33745[(1)]);
if((state_val_33746 === (7))){
var inst_33605 = (state_33745[(7)]);
var inst_33606 = (state_33745[(8)]);
var inst_33608 = (state_33745[(9)]);
var inst_33607 = (state_33745[(10)]);
var inst_33613 = cljs.core._nth.call(null,inst_33606,inst_33608);
var inst_33614 = figwheel.client.file_reloading.eval_body.call(null,inst_33613,opts);
var inst_33615 = (inst_33608 + (1));
var tmp33747 = inst_33605;
var tmp33748 = inst_33606;
var tmp33749 = inst_33607;
var inst_33605__$1 = tmp33747;
var inst_33606__$1 = tmp33748;
var inst_33607__$1 = tmp33749;
var inst_33608__$1 = inst_33615;
var state_33745__$1 = (function (){var statearr_33750 = state_33745;
(statearr_33750[(7)] = inst_33605__$1);

(statearr_33750[(11)] = inst_33614);

(statearr_33750[(8)] = inst_33606__$1);

(statearr_33750[(9)] = inst_33608__$1);

(statearr_33750[(10)] = inst_33607__$1);

return statearr_33750;
})();
var statearr_33751_33834 = state_33745__$1;
(statearr_33751_33834[(2)] = null);

(statearr_33751_33834[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (20))){
var inst_33648 = (state_33745[(12)]);
var inst_33656 = figwheel.client.file_reloading.sort_files.call(null,inst_33648);
var state_33745__$1 = state_33745;
var statearr_33752_33835 = state_33745__$1;
(statearr_33752_33835[(2)] = inst_33656);

(statearr_33752_33835[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (27))){
var state_33745__$1 = state_33745;
var statearr_33753_33836 = state_33745__$1;
(statearr_33753_33836[(2)] = null);

(statearr_33753_33836[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (1))){
var inst_33597 = (state_33745[(13)]);
var inst_33594 = before_jsload.call(null,files);
var inst_33595 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_33596 = (function (){return (function (p1__33585_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33585_SHARP_);
});
})();
var inst_33597__$1 = cljs.core.filter.call(null,inst_33596,files);
var inst_33598 = cljs.core.not_empty.call(null,inst_33597__$1);
var state_33745__$1 = (function (){var statearr_33754 = state_33745;
(statearr_33754[(14)] = inst_33595);

(statearr_33754[(15)] = inst_33594);

(statearr_33754[(13)] = inst_33597__$1);

return statearr_33754;
})();
if(cljs.core.truth_(inst_33598)){
var statearr_33755_33837 = state_33745__$1;
(statearr_33755_33837[(1)] = (2));

} else {
var statearr_33756_33838 = state_33745__$1;
(statearr_33756_33838[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (24))){
var state_33745__$1 = state_33745;
var statearr_33757_33839 = state_33745__$1;
(statearr_33757_33839[(2)] = null);

(statearr_33757_33839[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (39))){
var inst_33698 = (state_33745[(16)]);
var state_33745__$1 = state_33745;
var statearr_33758_33840 = state_33745__$1;
(statearr_33758_33840[(2)] = inst_33698);

(statearr_33758_33840[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (46))){
var inst_33740 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
var statearr_33759_33841 = state_33745__$1;
(statearr_33759_33841[(2)] = inst_33740);

(statearr_33759_33841[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (4))){
var inst_33642 = (state_33745[(2)]);
var inst_33643 = cljs.core.List.EMPTY;
var inst_33644 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_33643);
var inst_33645 = (function (){return (function (p1__33586_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33586_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33586_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__33586_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_33646 = cljs.core.filter.call(null,inst_33645,files);
var inst_33647 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_33648 = cljs.core.concat.call(null,inst_33646,inst_33647);
var state_33745__$1 = (function (){var statearr_33760 = state_33745;
(statearr_33760[(17)] = inst_33644);

(statearr_33760[(12)] = inst_33648);

(statearr_33760[(18)] = inst_33642);

return statearr_33760;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_33761_33842 = state_33745__$1;
(statearr_33761_33842[(1)] = (16));

} else {
var statearr_33762_33843 = state_33745__$1;
(statearr_33762_33843[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (15))){
var inst_33632 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
var statearr_33763_33844 = state_33745__$1;
(statearr_33763_33844[(2)] = inst_33632);

(statearr_33763_33844[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (21))){
var inst_33658 = (state_33745[(19)]);
var inst_33658__$1 = (state_33745[(2)]);
var inst_33659 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33658__$1);
var state_33745__$1 = (function (){var statearr_33764 = state_33745;
(statearr_33764[(19)] = inst_33658__$1);

return statearr_33764;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33745__$1,(22),inst_33659);
} else {
if((state_val_33746 === (31))){
var inst_33743 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33745__$1,inst_33743);
} else {
if((state_val_33746 === (32))){
var inst_33698 = (state_33745[(16)]);
var inst_33703 = inst_33698.cljs$lang$protocol_mask$partition0$;
var inst_33704 = (inst_33703 & (64));
var inst_33705 = inst_33698.cljs$core$ISeq$;
var inst_33706 = (cljs.core.PROTOCOL_SENTINEL === inst_33705);
var inst_33707 = ((inst_33704) || (inst_33706));
var state_33745__$1 = state_33745;
if(cljs.core.truth_(inst_33707)){
var statearr_33765_33845 = state_33745__$1;
(statearr_33765_33845[(1)] = (35));

} else {
var statearr_33766_33846 = state_33745__$1;
(statearr_33766_33846[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (40))){
var inst_33720 = (state_33745[(20)]);
var inst_33719 = (state_33745[(2)]);
var inst_33720__$1 = cljs.core.get.call(null,inst_33719,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33721 = cljs.core.get.call(null,inst_33719,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33722 = cljs.core.not_empty.call(null,inst_33720__$1);
var state_33745__$1 = (function (){var statearr_33767 = state_33745;
(statearr_33767[(21)] = inst_33721);

(statearr_33767[(20)] = inst_33720__$1);

return statearr_33767;
})();
if(cljs.core.truth_(inst_33722)){
var statearr_33768_33847 = state_33745__$1;
(statearr_33768_33847[(1)] = (41));

} else {
var statearr_33769_33848 = state_33745__$1;
(statearr_33769_33848[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (33))){
var state_33745__$1 = state_33745;
var statearr_33770_33849 = state_33745__$1;
(statearr_33770_33849[(2)] = false);

(statearr_33770_33849[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (13))){
var inst_33618 = (state_33745[(22)]);
var inst_33622 = cljs.core.chunk_first.call(null,inst_33618);
var inst_33623 = cljs.core.chunk_rest.call(null,inst_33618);
var inst_33624 = cljs.core.count.call(null,inst_33622);
var inst_33605 = inst_33623;
var inst_33606 = inst_33622;
var inst_33607 = inst_33624;
var inst_33608 = (0);
var state_33745__$1 = (function (){var statearr_33771 = state_33745;
(statearr_33771[(7)] = inst_33605);

(statearr_33771[(8)] = inst_33606);

(statearr_33771[(9)] = inst_33608);

(statearr_33771[(10)] = inst_33607);

return statearr_33771;
})();
var statearr_33772_33850 = state_33745__$1;
(statearr_33772_33850[(2)] = null);

(statearr_33772_33850[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (22))){
var inst_33661 = (state_33745[(23)]);
var inst_33662 = (state_33745[(24)]);
var inst_33666 = (state_33745[(25)]);
var inst_33658 = (state_33745[(19)]);
var inst_33661__$1 = (state_33745[(2)]);
var inst_33662__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33661__$1);
var inst_33663 = (function (){var all_files = inst_33658;
var res_SINGLEQUOTE_ = inst_33661__$1;
var res = inst_33662__$1;
return (function (p1__33587_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33587_SHARP_));
});
})();
var inst_33664 = cljs.core.filter.call(null,inst_33663,inst_33661__$1);
var inst_33665 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_33666__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33665);
var inst_33667 = cljs.core.not_empty.call(null,inst_33666__$1);
var state_33745__$1 = (function (){var statearr_33773 = state_33745;
(statearr_33773[(23)] = inst_33661__$1);

(statearr_33773[(26)] = inst_33664);

(statearr_33773[(24)] = inst_33662__$1);

(statearr_33773[(25)] = inst_33666__$1);

return statearr_33773;
})();
if(cljs.core.truth_(inst_33667)){
var statearr_33774_33851 = state_33745__$1;
(statearr_33774_33851[(1)] = (23));

} else {
var statearr_33775_33852 = state_33745__$1;
(statearr_33775_33852[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (36))){
var state_33745__$1 = state_33745;
var statearr_33776_33853 = state_33745__$1;
(statearr_33776_33853[(2)] = false);

(statearr_33776_33853[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (41))){
var inst_33720 = (state_33745[(20)]);
var inst_33724 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_33725 = cljs.core.map.call(null,inst_33724,inst_33720);
var inst_33726 = cljs.core.pr_str.call(null,inst_33725);
var inst_33727 = ["figwheel-no-load meta-data: ",inst_33726].join('');
var inst_33728 = figwheel.client.utils.log.call(null,inst_33727);
var state_33745__$1 = state_33745;
var statearr_33777_33854 = state_33745__$1;
(statearr_33777_33854[(2)] = inst_33728);

(statearr_33777_33854[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (43))){
var inst_33721 = (state_33745[(21)]);
var inst_33731 = (state_33745[(2)]);
var inst_33732 = cljs.core.not_empty.call(null,inst_33721);
var state_33745__$1 = (function (){var statearr_33778 = state_33745;
(statearr_33778[(27)] = inst_33731);

return statearr_33778;
})();
if(cljs.core.truth_(inst_33732)){
var statearr_33779_33855 = state_33745__$1;
(statearr_33779_33855[(1)] = (44));

} else {
var statearr_33780_33856 = state_33745__$1;
(statearr_33780_33856[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (29))){
var inst_33661 = (state_33745[(23)]);
var inst_33664 = (state_33745[(26)]);
var inst_33662 = (state_33745[(24)]);
var inst_33666 = (state_33745[(25)]);
var inst_33658 = (state_33745[(19)]);
var inst_33698 = (state_33745[(16)]);
var inst_33694 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33697 = (function (){var all_files = inst_33658;
var res_SINGLEQUOTE_ = inst_33661;
var res = inst_33662;
var files_not_loaded = inst_33664;
var dependencies_that_loaded = inst_33666;
return (function (p__33696){
var map__33781 = p__33696;
var map__33781__$1 = (((((!((map__33781 == null))))?(((((map__33781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33781):map__33781);
var namespace = cljs.core.get.call(null,map__33781__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
var inst_33698__$1 = cljs.core.group_by.call(null,inst_33697,inst_33664);
var inst_33700 = (inst_33698__$1 == null);
var inst_33701 = cljs.core.not.call(null,inst_33700);
var state_33745__$1 = (function (){var statearr_33783 = state_33745;
(statearr_33783[(16)] = inst_33698__$1);

(statearr_33783[(28)] = inst_33694);

return statearr_33783;
})();
if(inst_33701){
var statearr_33784_33857 = state_33745__$1;
(statearr_33784_33857[(1)] = (32));

} else {
var statearr_33785_33858 = state_33745__$1;
(statearr_33785_33858[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (44))){
var inst_33721 = (state_33745[(21)]);
var inst_33734 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33721);
var inst_33735 = cljs.core.pr_str.call(null,inst_33734);
var inst_33736 = ["not required: ",inst_33735].join('');
var inst_33737 = figwheel.client.utils.log.call(null,inst_33736);
var state_33745__$1 = state_33745;
var statearr_33786_33859 = state_33745__$1;
(statearr_33786_33859[(2)] = inst_33737);

(statearr_33786_33859[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (6))){
var inst_33639 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
var statearr_33787_33860 = state_33745__$1;
(statearr_33787_33860[(2)] = inst_33639);

(statearr_33787_33860[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (28))){
var inst_33664 = (state_33745[(26)]);
var inst_33691 = (state_33745[(2)]);
var inst_33692 = cljs.core.not_empty.call(null,inst_33664);
var state_33745__$1 = (function (){var statearr_33788 = state_33745;
(statearr_33788[(29)] = inst_33691);

return statearr_33788;
})();
if(cljs.core.truth_(inst_33692)){
var statearr_33789_33861 = state_33745__$1;
(statearr_33789_33861[(1)] = (29));

} else {
var statearr_33790_33862 = state_33745__$1;
(statearr_33790_33862[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (25))){
var inst_33662 = (state_33745[(24)]);
var inst_33678 = (state_33745[(2)]);
var inst_33679 = cljs.core.not_empty.call(null,inst_33662);
var state_33745__$1 = (function (){var statearr_33791 = state_33745;
(statearr_33791[(30)] = inst_33678);

return statearr_33791;
})();
if(cljs.core.truth_(inst_33679)){
var statearr_33792_33863 = state_33745__$1;
(statearr_33792_33863[(1)] = (26));

} else {
var statearr_33793_33864 = state_33745__$1;
(statearr_33793_33864[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (34))){
var inst_33714 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
if(cljs.core.truth_(inst_33714)){
var statearr_33794_33865 = state_33745__$1;
(statearr_33794_33865[(1)] = (38));

} else {
var statearr_33795_33866 = state_33745__$1;
(statearr_33795_33866[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (17))){
var state_33745__$1 = state_33745;
var statearr_33796_33867 = state_33745__$1;
(statearr_33796_33867[(2)] = recompile_dependents);

(statearr_33796_33867[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (3))){
var state_33745__$1 = state_33745;
var statearr_33797_33868 = state_33745__$1;
(statearr_33797_33868[(2)] = null);

(statearr_33797_33868[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (12))){
var inst_33635 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
var statearr_33798_33869 = state_33745__$1;
(statearr_33798_33869[(2)] = inst_33635);

(statearr_33798_33869[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (2))){
var inst_33597 = (state_33745[(13)]);
var inst_33604 = cljs.core.seq.call(null,inst_33597);
var inst_33605 = inst_33604;
var inst_33606 = null;
var inst_33607 = (0);
var inst_33608 = (0);
var state_33745__$1 = (function (){var statearr_33799 = state_33745;
(statearr_33799[(7)] = inst_33605);

(statearr_33799[(8)] = inst_33606);

(statearr_33799[(9)] = inst_33608);

(statearr_33799[(10)] = inst_33607);

return statearr_33799;
})();
var statearr_33800_33870 = state_33745__$1;
(statearr_33800_33870[(2)] = null);

(statearr_33800_33870[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (23))){
var inst_33661 = (state_33745[(23)]);
var inst_33664 = (state_33745[(26)]);
var inst_33662 = (state_33745[(24)]);
var inst_33666 = (state_33745[(25)]);
var inst_33658 = (state_33745[(19)]);
var inst_33669 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_33671 = (function (){var all_files = inst_33658;
var res_SINGLEQUOTE_ = inst_33661;
var res = inst_33662;
var files_not_loaded = inst_33664;
var dependencies_that_loaded = inst_33666;
return (function (p__33670){
var map__33801 = p__33670;
var map__33801__$1 = (((((!((map__33801 == null))))?(((((map__33801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33801):map__33801);
var request_url = cljs.core.get.call(null,map__33801__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_33672 = cljs.core.reverse.call(null,inst_33666);
var inst_33673 = cljs.core.map.call(null,inst_33671,inst_33672);
var inst_33674 = cljs.core.pr_str.call(null,inst_33673);
var inst_33675 = figwheel.client.utils.log.call(null,inst_33674);
var state_33745__$1 = (function (){var statearr_33803 = state_33745;
(statearr_33803[(31)] = inst_33669);

return statearr_33803;
})();
var statearr_33804_33871 = state_33745__$1;
(statearr_33804_33871[(2)] = inst_33675);

(statearr_33804_33871[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (35))){
var state_33745__$1 = state_33745;
var statearr_33805_33872 = state_33745__$1;
(statearr_33805_33872[(2)] = true);

(statearr_33805_33872[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (19))){
var inst_33648 = (state_33745[(12)]);
var inst_33654 = figwheel.client.file_reloading.expand_files.call(null,inst_33648);
var state_33745__$1 = state_33745;
var statearr_33806_33873 = state_33745__$1;
(statearr_33806_33873[(2)] = inst_33654);

(statearr_33806_33873[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (11))){
var state_33745__$1 = state_33745;
var statearr_33807_33874 = state_33745__$1;
(statearr_33807_33874[(2)] = null);

(statearr_33807_33874[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (9))){
var inst_33637 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
var statearr_33808_33875 = state_33745__$1;
(statearr_33808_33875[(2)] = inst_33637);

(statearr_33808_33875[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (5))){
var inst_33608 = (state_33745[(9)]);
var inst_33607 = (state_33745[(10)]);
var inst_33610 = (inst_33608 < inst_33607);
var inst_33611 = inst_33610;
var state_33745__$1 = state_33745;
if(cljs.core.truth_(inst_33611)){
var statearr_33809_33876 = state_33745__$1;
(statearr_33809_33876[(1)] = (7));

} else {
var statearr_33810_33877 = state_33745__$1;
(statearr_33810_33877[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (14))){
var inst_33618 = (state_33745[(22)]);
var inst_33627 = cljs.core.first.call(null,inst_33618);
var inst_33628 = figwheel.client.file_reloading.eval_body.call(null,inst_33627,opts);
var inst_33629 = cljs.core.next.call(null,inst_33618);
var inst_33605 = inst_33629;
var inst_33606 = null;
var inst_33607 = (0);
var inst_33608 = (0);
var state_33745__$1 = (function (){var statearr_33811 = state_33745;
(statearr_33811[(7)] = inst_33605);

(statearr_33811[(32)] = inst_33628);

(statearr_33811[(8)] = inst_33606);

(statearr_33811[(9)] = inst_33608);

(statearr_33811[(10)] = inst_33607);

return statearr_33811;
})();
var statearr_33812_33878 = state_33745__$1;
(statearr_33812_33878[(2)] = null);

(statearr_33812_33878[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (45))){
var state_33745__$1 = state_33745;
var statearr_33813_33879 = state_33745__$1;
(statearr_33813_33879[(2)] = null);

(statearr_33813_33879[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (26))){
var inst_33661 = (state_33745[(23)]);
var inst_33664 = (state_33745[(26)]);
var inst_33662 = (state_33745[(24)]);
var inst_33666 = (state_33745[(25)]);
var inst_33658 = (state_33745[(19)]);
var inst_33681 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33683 = (function (){var all_files = inst_33658;
var res_SINGLEQUOTE_ = inst_33661;
var res = inst_33662;
var files_not_loaded = inst_33664;
var dependencies_that_loaded = inst_33666;
return (function (p__33682){
var map__33814 = p__33682;
var map__33814__$1 = (((((!((map__33814 == null))))?(((((map__33814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33814):map__33814);
var namespace = cljs.core.get.call(null,map__33814__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33814__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_33684 = cljs.core.map.call(null,inst_33683,inst_33662);
var inst_33685 = cljs.core.pr_str.call(null,inst_33684);
var inst_33686 = figwheel.client.utils.log.call(null,inst_33685);
var inst_33687 = (function (){var all_files = inst_33658;
var res_SINGLEQUOTE_ = inst_33661;
var res = inst_33662;
var files_not_loaded = inst_33664;
var dependencies_that_loaded = inst_33666;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_33688 = setTimeout(inst_33687,(10));
var state_33745__$1 = (function (){var statearr_33816 = state_33745;
(statearr_33816[(33)] = inst_33681);

(statearr_33816[(34)] = inst_33686);

return statearr_33816;
})();
var statearr_33817_33880 = state_33745__$1;
(statearr_33817_33880[(2)] = inst_33688);

(statearr_33817_33880[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (16))){
var state_33745__$1 = state_33745;
var statearr_33818_33881 = state_33745__$1;
(statearr_33818_33881[(2)] = reload_dependents);

(statearr_33818_33881[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (38))){
var inst_33698 = (state_33745[(16)]);
var inst_33716 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33698);
var state_33745__$1 = state_33745;
var statearr_33819_33882 = state_33745__$1;
(statearr_33819_33882[(2)] = inst_33716);

(statearr_33819_33882[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (30))){
var state_33745__$1 = state_33745;
var statearr_33820_33883 = state_33745__$1;
(statearr_33820_33883[(2)] = null);

(statearr_33820_33883[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (10))){
var inst_33618 = (state_33745[(22)]);
var inst_33620 = cljs.core.chunked_seq_QMARK_.call(null,inst_33618);
var state_33745__$1 = state_33745;
if(inst_33620){
var statearr_33821_33884 = state_33745__$1;
(statearr_33821_33884[(1)] = (13));

} else {
var statearr_33822_33885 = state_33745__$1;
(statearr_33822_33885[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (18))){
var inst_33652 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
if(cljs.core.truth_(inst_33652)){
var statearr_33823_33886 = state_33745__$1;
(statearr_33823_33886[(1)] = (19));

} else {
var statearr_33824_33887 = state_33745__$1;
(statearr_33824_33887[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (42))){
var state_33745__$1 = state_33745;
var statearr_33825_33888 = state_33745__$1;
(statearr_33825_33888[(2)] = null);

(statearr_33825_33888[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (37))){
var inst_33711 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
var statearr_33826_33889 = state_33745__$1;
(statearr_33826_33889[(2)] = inst_33711);

(statearr_33826_33889[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (8))){
var inst_33605 = (state_33745[(7)]);
var inst_33618 = (state_33745[(22)]);
var inst_33618__$1 = cljs.core.seq.call(null,inst_33605);
var state_33745__$1 = (function (){var statearr_33827 = state_33745;
(statearr_33827[(22)] = inst_33618__$1);

return statearr_33827;
})();
if(inst_33618__$1){
var statearr_33828_33890 = state_33745__$1;
(statearr_33828_33890[(1)] = (10));

} else {
var statearr_33829_33891 = state_33745__$1;
(statearr_33829_33891[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29901__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29901__auto____0 = (function (){
var statearr_33830 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33830[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29901__auto__);

(statearr_33830[(1)] = (1));

return statearr_33830;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29901__auto____1 = (function (state_33745){
while(true){
var ret_value__29902__auto__ = (function (){try{while(true){
var result__29903__auto__ = switch__29900__auto__.call(null,state_33745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29903__auto__;
}
break;
}
}catch (e33831){if((e33831 instanceof Object)){
var ex__29904__auto__ = e33831;
var statearr_33832_33892 = state_33745;
(statearr_33832_33892[(5)] = ex__29904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33893 = state_33745;
state_33745 = G__33893;
continue;
} else {
return ret_value__29902__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29901__auto__ = function(state_33745){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29901__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29901__auto____1.call(this,state_33745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29901__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29901__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29901__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_33833 = f__29918__auto__.call(null);
(statearr_33833[(6)] = c__29917__auto__);

return statearr_33833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29919__auto__);
}));

return c__29917__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33896,link){
var map__33897 = p__33896;
var map__33897__$1 = (((((!((map__33897 == null))))?(((((map__33897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33897):map__33897);
var file = cljs.core.get.call(null,map__33897__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__33894_SHARP_,p2__33895_SHARP_){
if(cljs.core._EQ_.call(null,p1__33894_SHARP_,p2__33895_SHARP_)){
return p1__33894_SHARP_;
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33900){
var map__33901 = p__33900;
var map__33901__$1 = (((((!((map__33901 == null))))?(((((map__33901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33901):map__33901);
var match_length = cljs.core.get.call(null,map__33901__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33901__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33899_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33899_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__33903_SHARP_,p2__33904_SHARP_){
return cljs.core.assoc.call(null,p1__33903_SHARP_,cljs.core.get.call(null,p2__33904_SHARP_,key),p2__33904_SHARP_);
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
var loaded_f_datas_33905 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_33905);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_33905);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33906,p__33907){
var map__33908 = p__33906;
var map__33908__$1 = (((((!((map__33908 == null))))?(((((map__33908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33908):map__33908);
var on_cssload = cljs.core.get.call(null,map__33908__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__33909 = p__33907;
var map__33909__$1 = (((((!((map__33909 == null))))?(((((map__33909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33909):map__33909);
var files_msg = map__33909__$1;
var files = cljs.core.get.call(null,map__33909__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1602507665671
