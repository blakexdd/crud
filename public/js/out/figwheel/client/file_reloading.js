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
var G__32928 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__32928 == null)){
return null;
} else {
return goog.object.get(G__32928,"requires");
}
}):(function (path){
var G__32929 = goog.object.get(goog.dependencies_.requires,path);
if((G__32929 == null)){
return null;
} else {
return goog.object.getKeys(G__32929);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__32930_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__32930_SHARP_)));
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
var G__32931 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__32931__$1 = (((G__32931 == null))?null:goog.object.get(G__32931,"provides"));
if((G__32931__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__32931__$1);
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
var seq__32932 = cljs.core.seq.call(null,provides);
var chunk__32933 = null;
var count__32934 = (0);
var i__32935 = (0);
while(true){
if((i__32935 < count__32934)){
var prov = cljs.core._nth.call(null,chunk__32933,i__32935);
var seq__32944_32956 = cljs.core.seq.call(null,requires);
var chunk__32945_32957 = null;
var count__32946_32958 = (0);
var i__32947_32959 = (0);
while(true){
if((i__32947_32959 < count__32946_32958)){
var req_32960 = cljs.core._nth.call(null,chunk__32945_32957,i__32947_32959);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32960,prov);


var G__32961 = seq__32944_32956;
var G__32962 = chunk__32945_32957;
var G__32963 = count__32946_32958;
var G__32964 = (i__32947_32959 + (1));
seq__32944_32956 = G__32961;
chunk__32945_32957 = G__32962;
count__32946_32958 = G__32963;
i__32947_32959 = G__32964;
continue;
} else {
var temp__5735__auto___32965 = cljs.core.seq.call(null,seq__32944_32956);
if(temp__5735__auto___32965){
var seq__32944_32966__$1 = temp__5735__auto___32965;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32944_32966__$1)){
var c__4556__auto___32967 = cljs.core.chunk_first.call(null,seq__32944_32966__$1);
var G__32968 = cljs.core.chunk_rest.call(null,seq__32944_32966__$1);
var G__32969 = c__4556__auto___32967;
var G__32970 = cljs.core.count.call(null,c__4556__auto___32967);
var G__32971 = (0);
seq__32944_32956 = G__32968;
chunk__32945_32957 = G__32969;
count__32946_32958 = G__32970;
i__32947_32959 = G__32971;
continue;
} else {
var req_32972 = cljs.core.first.call(null,seq__32944_32966__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32972,prov);


var G__32973 = cljs.core.next.call(null,seq__32944_32966__$1);
var G__32974 = null;
var G__32975 = (0);
var G__32976 = (0);
seq__32944_32956 = G__32973;
chunk__32945_32957 = G__32974;
count__32946_32958 = G__32975;
i__32947_32959 = G__32976;
continue;
}
} else {
}
}
break;
}


var G__32977 = seq__32932;
var G__32978 = chunk__32933;
var G__32979 = count__32934;
var G__32980 = (i__32935 + (1));
seq__32932 = G__32977;
chunk__32933 = G__32978;
count__32934 = G__32979;
i__32935 = G__32980;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__32932);
if(temp__5735__auto__){
var seq__32932__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32932__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__32932__$1);
var G__32981 = cljs.core.chunk_rest.call(null,seq__32932__$1);
var G__32982 = c__4556__auto__;
var G__32983 = cljs.core.count.call(null,c__4556__auto__);
var G__32984 = (0);
seq__32932 = G__32981;
chunk__32933 = G__32982;
count__32934 = G__32983;
i__32935 = G__32984;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32932__$1);
var seq__32948_32985 = cljs.core.seq.call(null,requires);
var chunk__32949_32986 = null;
var count__32950_32987 = (0);
var i__32951_32988 = (0);
while(true){
if((i__32951_32988 < count__32950_32987)){
var req_32989 = cljs.core._nth.call(null,chunk__32949_32986,i__32951_32988);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32989,prov);


var G__32990 = seq__32948_32985;
var G__32991 = chunk__32949_32986;
var G__32992 = count__32950_32987;
var G__32993 = (i__32951_32988 + (1));
seq__32948_32985 = G__32990;
chunk__32949_32986 = G__32991;
count__32950_32987 = G__32992;
i__32951_32988 = G__32993;
continue;
} else {
var temp__5735__auto___32994__$1 = cljs.core.seq.call(null,seq__32948_32985);
if(temp__5735__auto___32994__$1){
var seq__32948_32995__$1 = temp__5735__auto___32994__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32948_32995__$1)){
var c__4556__auto___32996 = cljs.core.chunk_first.call(null,seq__32948_32995__$1);
var G__32997 = cljs.core.chunk_rest.call(null,seq__32948_32995__$1);
var G__32998 = c__4556__auto___32996;
var G__32999 = cljs.core.count.call(null,c__4556__auto___32996);
var G__33000 = (0);
seq__32948_32985 = G__32997;
chunk__32949_32986 = G__32998;
count__32950_32987 = G__32999;
i__32951_32988 = G__33000;
continue;
} else {
var req_33001 = cljs.core.first.call(null,seq__32948_32995__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33001,prov);


var G__33002 = cljs.core.next.call(null,seq__32948_32995__$1);
var G__33003 = null;
var G__33004 = (0);
var G__33005 = (0);
seq__32948_32985 = G__33002;
chunk__32949_32986 = G__33003;
count__32950_32987 = G__33004;
i__32951_32988 = G__33005;
continue;
}
} else {
}
}
break;
}


var G__33006 = cljs.core.next.call(null,seq__32932__$1);
var G__33007 = null;
var G__33008 = (0);
var G__33009 = (0);
seq__32932 = G__33006;
chunk__32933 = G__33007;
count__32934 = G__33008;
i__32935 = G__33009;
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
var seq__32952 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__32953 = null;
var count__32954 = (0);
var i__32955 = (0);
while(true){
if((i__32955 < count__32954)){
var prov = cljs.core._nth.call(null,chunk__32953,i__32955);
goog.object.forEach(deps,((function (seq__32952,chunk__32953,count__32954,i__32955,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__32952,chunk__32953,count__32954,i__32955,prov,requires))
);


var G__33010 = seq__32952;
var G__33011 = chunk__32953;
var G__33012 = count__32954;
var G__33013 = (i__32955 + (1));
seq__32952 = G__33010;
chunk__32953 = G__33011;
count__32954 = G__33012;
i__32955 = G__33013;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__32952);
if(temp__5735__auto__){
var seq__32952__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32952__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__32952__$1);
var G__33014 = cljs.core.chunk_rest.call(null,seq__32952__$1);
var G__33015 = c__4556__auto__;
var G__33016 = cljs.core.count.call(null,c__4556__auto__);
var G__33017 = (0);
seq__32952 = G__33014;
chunk__32953 = G__33015;
count__32954 = G__33016;
i__32955 = G__33017;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32952__$1);
goog.object.forEach(deps,((function (seq__32952,chunk__32953,count__32954,i__32955,prov,seq__32952__$1,temp__5735__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__32952,chunk__32953,count__32954,i__32955,prov,seq__32952__$1,temp__5735__auto__,requires))
);


var G__33018 = cljs.core.next.call(null,seq__32952__$1);
var G__33019 = null;
var G__33020 = (0);
var G__33021 = (0);
seq__32952 = G__33018;
chunk__32953 = G__33019;
count__32954 = G__33020;
i__32955 = G__33021;
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
return cljs.core.some.call(null,(function (p__33022){
var vec__33023 = p__33022;
var _ = cljs.core.nth.call(null,vec__33023,(0),null);
var v = cljs.core.nth.call(null,vec__33023,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__33026){
var vec__33027 = p__33026;
var k = cljs.core.nth.call(null,vec__33027,(0),null);
var v = cljs.core.nth.call(null,vec__33027,(1),null);
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

var seq__33039_33047 = cljs.core.seq.call(null,deps);
var chunk__33040_33048 = null;
var count__33041_33049 = (0);
var i__33042_33050 = (0);
while(true){
if((i__33042_33050 < count__33041_33049)){
var dep_33051 = cljs.core._nth.call(null,chunk__33040_33048,i__33042_33050);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_33051;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_33051));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_33051,(depth + (1)),state);
} else {
}


var G__33052 = seq__33039_33047;
var G__33053 = chunk__33040_33048;
var G__33054 = count__33041_33049;
var G__33055 = (i__33042_33050 + (1));
seq__33039_33047 = G__33052;
chunk__33040_33048 = G__33053;
count__33041_33049 = G__33054;
i__33042_33050 = G__33055;
continue;
} else {
var temp__5735__auto___33056 = cljs.core.seq.call(null,seq__33039_33047);
if(temp__5735__auto___33056){
var seq__33039_33057__$1 = temp__5735__auto___33056;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33039_33057__$1)){
var c__4556__auto___33058 = cljs.core.chunk_first.call(null,seq__33039_33057__$1);
var G__33059 = cljs.core.chunk_rest.call(null,seq__33039_33057__$1);
var G__33060 = c__4556__auto___33058;
var G__33061 = cljs.core.count.call(null,c__4556__auto___33058);
var G__33062 = (0);
seq__33039_33047 = G__33059;
chunk__33040_33048 = G__33060;
count__33041_33049 = G__33061;
i__33042_33050 = G__33062;
continue;
} else {
var dep_33063 = cljs.core.first.call(null,seq__33039_33057__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_33063;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_33063));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_33063,(depth + (1)),state);
} else {
}


var G__33064 = cljs.core.next.call(null,seq__33039_33057__$1);
var G__33065 = null;
var G__33066 = (0);
var G__33067 = (0);
seq__33039_33047 = G__33064;
chunk__33040_33048 = G__33065;
count__33041_33049 = G__33066;
i__33042_33050 = G__33067;
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
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33043){
var vec__33044 = p__33043;
var seq__33045 = cljs.core.seq.call(null,vec__33044);
var first__33046 = cljs.core.first.call(null,seq__33045);
var seq__33045__$1 = cljs.core.next.call(null,seq__33045);
var x = first__33046;
var xs = seq__33045__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__33030_SHARP_){
return clojure.set.difference.call(null,p1__33030_SHARP_,x);
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
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__33068_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__33068_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__33069 = cljs.core.seq.call(null,provides);
var chunk__33070 = null;
var count__33071 = (0);
var i__33072 = (0);
while(true){
if((i__33072 < count__33071)){
var prov = cljs.core._nth.call(null,chunk__33070,i__33072);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33081_33089 = cljs.core.seq.call(null,requires);
var chunk__33082_33090 = null;
var count__33083_33091 = (0);
var i__33084_33092 = (0);
while(true){
if((i__33084_33092 < count__33083_33091)){
var req_33093 = cljs.core._nth.call(null,chunk__33082_33090,i__33084_33092);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33093,prov);


var G__33094 = seq__33081_33089;
var G__33095 = chunk__33082_33090;
var G__33096 = count__33083_33091;
var G__33097 = (i__33084_33092 + (1));
seq__33081_33089 = G__33094;
chunk__33082_33090 = G__33095;
count__33083_33091 = G__33096;
i__33084_33092 = G__33097;
continue;
} else {
var temp__5735__auto___33098 = cljs.core.seq.call(null,seq__33081_33089);
if(temp__5735__auto___33098){
var seq__33081_33099__$1 = temp__5735__auto___33098;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33081_33099__$1)){
var c__4556__auto___33100 = cljs.core.chunk_first.call(null,seq__33081_33099__$1);
var G__33101 = cljs.core.chunk_rest.call(null,seq__33081_33099__$1);
var G__33102 = c__4556__auto___33100;
var G__33103 = cljs.core.count.call(null,c__4556__auto___33100);
var G__33104 = (0);
seq__33081_33089 = G__33101;
chunk__33082_33090 = G__33102;
count__33083_33091 = G__33103;
i__33084_33092 = G__33104;
continue;
} else {
var req_33105 = cljs.core.first.call(null,seq__33081_33099__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33105,prov);


var G__33106 = cljs.core.next.call(null,seq__33081_33099__$1);
var G__33107 = null;
var G__33108 = (0);
var G__33109 = (0);
seq__33081_33089 = G__33106;
chunk__33082_33090 = G__33107;
count__33083_33091 = G__33108;
i__33084_33092 = G__33109;
continue;
}
} else {
}
}
break;
}


var G__33110 = seq__33069;
var G__33111 = chunk__33070;
var G__33112 = count__33071;
var G__33113 = (i__33072 + (1));
seq__33069 = G__33110;
chunk__33070 = G__33111;
count__33071 = G__33112;
i__33072 = G__33113;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__33069);
if(temp__5735__auto__){
var seq__33069__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33069__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__33069__$1);
var G__33114 = cljs.core.chunk_rest.call(null,seq__33069__$1);
var G__33115 = c__4556__auto__;
var G__33116 = cljs.core.count.call(null,c__4556__auto__);
var G__33117 = (0);
seq__33069 = G__33114;
chunk__33070 = G__33115;
count__33071 = G__33116;
i__33072 = G__33117;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33069__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33085_33118 = cljs.core.seq.call(null,requires);
var chunk__33086_33119 = null;
var count__33087_33120 = (0);
var i__33088_33121 = (0);
while(true){
if((i__33088_33121 < count__33087_33120)){
var req_33122 = cljs.core._nth.call(null,chunk__33086_33119,i__33088_33121);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33122,prov);


var G__33123 = seq__33085_33118;
var G__33124 = chunk__33086_33119;
var G__33125 = count__33087_33120;
var G__33126 = (i__33088_33121 + (1));
seq__33085_33118 = G__33123;
chunk__33086_33119 = G__33124;
count__33087_33120 = G__33125;
i__33088_33121 = G__33126;
continue;
} else {
var temp__5735__auto___33127__$1 = cljs.core.seq.call(null,seq__33085_33118);
if(temp__5735__auto___33127__$1){
var seq__33085_33128__$1 = temp__5735__auto___33127__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33085_33128__$1)){
var c__4556__auto___33129 = cljs.core.chunk_first.call(null,seq__33085_33128__$1);
var G__33130 = cljs.core.chunk_rest.call(null,seq__33085_33128__$1);
var G__33131 = c__4556__auto___33129;
var G__33132 = cljs.core.count.call(null,c__4556__auto___33129);
var G__33133 = (0);
seq__33085_33118 = G__33130;
chunk__33086_33119 = G__33131;
count__33087_33120 = G__33132;
i__33088_33121 = G__33133;
continue;
} else {
var req_33134 = cljs.core.first.call(null,seq__33085_33128__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33134,prov);


var G__33135 = cljs.core.next.call(null,seq__33085_33128__$1);
var G__33136 = null;
var G__33137 = (0);
var G__33138 = (0);
seq__33085_33118 = G__33135;
chunk__33086_33119 = G__33136;
count__33087_33120 = G__33137;
i__33088_33121 = G__33138;
continue;
}
} else {
}
}
break;
}


var G__33139 = cljs.core.next.call(null,seq__33069__$1);
var G__33140 = null;
var G__33141 = (0);
var G__33142 = (0);
seq__33069 = G__33139;
chunk__33070 = G__33140;
count__33071 = G__33141;
i__33072 = G__33142;
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
var seq__33143_33147 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33144_33148 = null;
var count__33145_33149 = (0);
var i__33146_33150 = (0);
while(true){
if((i__33146_33150 < count__33145_33149)){
var ns_33151 = cljs.core._nth.call(null,chunk__33144_33148,i__33146_33150);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33151);


var G__33152 = seq__33143_33147;
var G__33153 = chunk__33144_33148;
var G__33154 = count__33145_33149;
var G__33155 = (i__33146_33150 + (1));
seq__33143_33147 = G__33152;
chunk__33144_33148 = G__33153;
count__33145_33149 = G__33154;
i__33146_33150 = G__33155;
continue;
} else {
var temp__5735__auto___33156 = cljs.core.seq.call(null,seq__33143_33147);
if(temp__5735__auto___33156){
var seq__33143_33157__$1 = temp__5735__auto___33156;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33143_33157__$1)){
var c__4556__auto___33158 = cljs.core.chunk_first.call(null,seq__33143_33157__$1);
var G__33159 = cljs.core.chunk_rest.call(null,seq__33143_33157__$1);
var G__33160 = c__4556__auto___33158;
var G__33161 = cljs.core.count.call(null,c__4556__auto___33158);
var G__33162 = (0);
seq__33143_33147 = G__33159;
chunk__33144_33148 = G__33160;
count__33145_33149 = G__33161;
i__33146_33150 = G__33162;
continue;
} else {
var ns_33163 = cljs.core.first.call(null,seq__33143_33157__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33163);


var G__33164 = cljs.core.next.call(null,seq__33143_33157__$1);
var G__33165 = null;
var G__33166 = (0);
var G__33167 = (0);
seq__33143_33147 = G__33164;
chunk__33144_33148 = G__33165;
count__33145_33149 = G__33166;
i__33146_33150 = G__33167;
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
var G__33168__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33168 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33169__i = 0, G__33169__a = new Array(arguments.length -  0);
while (G__33169__i < G__33169__a.length) {G__33169__a[G__33169__i] = arguments[G__33169__i + 0]; ++G__33169__i;}
  args = new cljs.core.IndexedSeq(G__33169__a,0,null);
} 
return G__33168__delegate.call(this,args);};
G__33168.cljs$lang$maxFixedArity = 0;
G__33168.cljs$lang$applyTo = (function (arglist__33170){
var args = cljs.core.seq(arglist__33170);
return G__33168__delegate(args);
});
G__33168.cljs$core$IFn$_invoke$arity$variadic = G__33168__delegate;
return G__33168;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__33171_SHARP_,p2__33172_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33171_SHARP_)),p2__33172_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__33173_SHARP_,p2__33174_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33173_SHARP_),p2__33174_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__33175 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__33175.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__33175.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__33175;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e33176){if((e33176 instanceof Error)){
var e = e33176;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33176;

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
}catch (e33177){if((e33177 instanceof Error)){
var e = e33177;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33177;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33178 = cljs.core._EQ_;
var expr__33179 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33178.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__33179))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__33178.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__33179))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__33178.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__33179))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33181,callback){
var map__33182 = p__33181;
var map__33182__$1 = (((((!((map__33182 == null))))?(((((map__33182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33182):map__33182);
var file_msg = map__33182__$1;
var request_url = cljs.core.get.call(null,map__33182__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
figwheel.client.file_reloading.reloader_loop = (function (){var c__28918__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = (function (state_33220){
var state_val_33221 = (state_33220[(1)]);
if((state_val_33221 === (7))){
var inst_33216 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
var statearr_33222_33248 = state_33220__$1;
(statearr_33222_33248[(2)] = inst_33216);

(statearr_33222_33248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (1))){
var state_33220__$1 = state_33220;
var statearr_33223_33249 = state_33220__$1;
(statearr_33223_33249[(2)] = null);

(statearr_33223_33249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (4))){
var inst_33186 = (state_33220[(7)]);
var inst_33186__$1 = (state_33220[(2)]);
var state_33220__$1 = (function (){var statearr_33224 = state_33220;
(statearr_33224[(7)] = inst_33186__$1);

return statearr_33224;
})();
if(cljs.core.truth_(inst_33186__$1)){
var statearr_33225_33250 = state_33220__$1;
(statearr_33225_33250[(1)] = (5));

} else {
var statearr_33226_33251 = state_33220__$1;
(statearr_33226_33251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (15))){
var inst_33201 = (state_33220[(8)]);
var inst_33199 = (state_33220[(9)]);
var inst_33203 = inst_33201.call(null,inst_33199);
var state_33220__$1 = state_33220;
var statearr_33227_33252 = state_33220__$1;
(statearr_33227_33252[(2)] = inst_33203);

(statearr_33227_33252[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (13))){
var inst_33210 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
var statearr_33228_33253 = state_33220__$1;
(statearr_33228_33253[(2)] = inst_33210);

(statearr_33228_33253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (6))){
var state_33220__$1 = state_33220;
var statearr_33229_33254 = state_33220__$1;
(statearr_33229_33254[(2)] = null);

(statearr_33229_33254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (17))){
var inst_33207 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
var statearr_33230_33255 = state_33220__$1;
(statearr_33230_33255[(2)] = inst_33207);

(statearr_33230_33255[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (3))){
var inst_33218 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33220__$1,inst_33218);
} else {
if((state_val_33221 === (12))){
var state_33220__$1 = state_33220;
var statearr_33231_33256 = state_33220__$1;
(statearr_33231_33256[(2)] = null);

(statearr_33231_33256[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (2))){
var state_33220__$1 = state_33220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33220__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_33221 === (11))){
var inst_33191 = (state_33220[(10)]);
var inst_33197 = figwheel.client.file_reloading.blocking_load.call(null,inst_33191);
var state_33220__$1 = state_33220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33220__$1,(14),inst_33197);
} else {
if((state_val_33221 === (9))){
var inst_33191 = (state_33220[(10)]);
var state_33220__$1 = state_33220;
if(cljs.core.truth_(inst_33191)){
var statearr_33232_33257 = state_33220__$1;
(statearr_33232_33257[(1)] = (11));

} else {
var statearr_33233_33258 = state_33220__$1;
(statearr_33233_33258[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (5))){
var inst_33192 = (state_33220[(11)]);
var inst_33186 = (state_33220[(7)]);
var inst_33191 = cljs.core.nth.call(null,inst_33186,(0),null);
var inst_33192__$1 = cljs.core.nth.call(null,inst_33186,(1),null);
var state_33220__$1 = (function (){var statearr_33234 = state_33220;
(statearr_33234[(11)] = inst_33192__$1);

(statearr_33234[(10)] = inst_33191);

return statearr_33234;
})();
if(cljs.core.truth_(inst_33192__$1)){
var statearr_33235_33259 = state_33220__$1;
(statearr_33235_33259[(1)] = (8));

} else {
var statearr_33236_33260 = state_33220__$1;
(statearr_33236_33260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (14))){
var inst_33201 = (state_33220[(8)]);
var inst_33191 = (state_33220[(10)]);
var inst_33199 = (state_33220[(2)]);
var inst_33200 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_33201__$1 = cljs.core.get.call(null,inst_33200,inst_33191);
var state_33220__$1 = (function (){var statearr_33237 = state_33220;
(statearr_33237[(8)] = inst_33201__$1);

(statearr_33237[(9)] = inst_33199);

return statearr_33237;
})();
if(cljs.core.truth_(inst_33201__$1)){
var statearr_33238_33261 = state_33220__$1;
(statearr_33238_33261[(1)] = (15));

} else {
var statearr_33239_33262 = state_33220__$1;
(statearr_33239_33262[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (16))){
var inst_33199 = (state_33220[(9)]);
var inst_33205 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_33199);
var state_33220__$1 = state_33220;
var statearr_33240_33263 = state_33220__$1;
(statearr_33240_33263[(2)] = inst_33205);

(statearr_33240_33263[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (10))){
var inst_33212 = (state_33220[(2)]);
var state_33220__$1 = (function (){var statearr_33241 = state_33220;
(statearr_33241[(12)] = inst_33212);

return statearr_33241;
})();
var statearr_33242_33264 = state_33220__$1;
(statearr_33242_33264[(2)] = null);

(statearr_33242_33264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (8))){
var inst_33192 = (state_33220[(11)]);
var inst_33194 = eval(inst_33192);
var state_33220__$1 = state_33220;
var statearr_33243_33265 = state_33220__$1;
(statearr_33243_33265[(2)] = inst_33194);

(statearr_33243_33265[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__28824__auto__ = null;
var figwheel$client$file_reloading$state_machine__28824__auto____0 = (function (){
var statearr_33244 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33244[(0)] = figwheel$client$file_reloading$state_machine__28824__auto__);

(statearr_33244[(1)] = (1));

return statearr_33244;
});
var figwheel$client$file_reloading$state_machine__28824__auto____1 = (function (state_33220){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_33220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e33245){if((e33245 instanceof Object)){
var ex__28827__auto__ = e33245;
var statearr_33246_33266 = state_33220;
(statearr_33246_33266[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33267 = state_33220;
state_33220 = G__33267;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28824__auto__ = function(state_33220){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28824__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28824__auto____1.call(this,state_33220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28824__auto____0;
figwheel$client$file_reloading$state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28824__auto____1;
return figwheel$client$file_reloading$state_machine__28824__auto__;
})()
})();
var state__28920__auto__ = (function (){var statearr_33247 = f__28919__auto__.call(null);
(statearr_33247[(6)] = c__28918__auto__);

return statearr_33247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
}));

return c__28918__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__33269 = arguments.length;
switch (G__33269) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33271,callback){
var map__33272 = p__33271;
var map__33272__$1 = (((((!((map__33272 == null))))?(((((map__33272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33272):map__33272);
var file_msg = map__33272__$1;
var namespace = cljs.core.get.call(null,map__33272__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__33274){
var map__33275 = p__33274;
var map__33275__$1 = (((((!((map__33275 == null))))?(((((map__33275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33275):map__33275);
var file_msg = map__33275__$1;
var namespace = cljs.core.get.call(null,map__33275__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33277){
var map__33278 = p__33277;
var map__33278__$1 = (((((!((map__33278 == null))))?(((((map__33278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33278):map__33278);
var file_msg = map__33278__$1;
var namespace = cljs.core.get.call(null,map__33278__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33280,callback){
var map__33281 = p__33280;
var map__33281__$1 = (((((!((map__33281 == null))))?(((((map__33281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33281):map__33281);
var file_msg = map__33281__$1;
var request_url = cljs.core.get.call(null,map__33281__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33281__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28918__auto___33331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = (function (state_33316){
var state_val_33317 = (state_33316[(1)]);
if((state_val_33317 === (1))){
var inst_33290 = cljs.core.seq.call(null,files);
var inst_33291 = cljs.core.first.call(null,inst_33290);
var inst_33292 = cljs.core.next.call(null,inst_33290);
var inst_33293 = files;
var state_33316__$1 = (function (){var statearr_33318 = state_33316;
(statearr_33318[(7)] = inst_33292);

(statearr_33318[(8)] = inst_33291);

(statearr_33318[(9)] = inst_33293);

return statearr_33318;
})();
var statearr_33319_33332 = state_33316__$1;
(statearr_33319_33332[(2)] = null);

(statearr_33319_33332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (2))){
var inst_33299 = (state_33316[(10)]);
var inst_33293 = (state_33316[(9)]);
var inst_33298 = cljs.core.seq.call(null,inst_33293);
var inst_33299__$1 = cljs.core.first.call(null,inst_33298);
var inst_33300 = cljs.core.next.call(null,inst_33298);
var inst_33301 = (inst_33299__$1 == null);
var inst_33302 = cljs.core.not.call(null,inst_33301);
var state_33316__$1 = (function (){var statearr_33320 = state_33316;
(statearr_33320[(10)] = inst_33299__$1);

(statearr_33320[(11)] = inst_33300);

return statearr_33320;
})();
if(inst_33302){
var statearr_33321_33333 = state_33316__$1;
(statearr_33321_33333[(1)] = (4));

} else {
var statearr_33322_33334 = state_33316__$1;
(statearr_33322_33334[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (3))){
var inst_33314 = (state_33316[(2)]);
var state_33316__$1 = state_33316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33316__$1,inst_33314);
} else {
if((state_val_33317 === (4))){
var inst_33299 = (state_33316[(10)]);
var inst_33304 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33299);
var state_33316__$1 = state_33316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33316__$1,(7),inst_33304);
} else {
if((state_val_33317 === (5))){
var inst_33310 = cljs.core.async.close_BANG_.call(null,out);
var state_33316__$1 = state_33316;
var statearr_33323_33335 = state_33316__$1;
(statearr_33323_33335[(2)] = inst_33310);

(statearr_33323_33335[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (6))){
var inst_33312 = (state_33316[(2)]);
var state_33316__$1 = state_33316;
var statearr_33324_33336 = state_33316__$1;
(statearr_33324_33336[(2)] = inst_33312);

(statearr_33324_33336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (7))){
var inst_33300 = (state_33316[(11)]);
var inst_33306 = (state_33316[(2)]);
var inst_33307 = cljs.core.async.put_BANG_.call(null,out,inst_33306);
var inst_33293 = inst_33300;
var state_33316__$1 = (function (){var statearr_33325 = state_33316;
(statearr_33325[(12)] = inst_33307);

(statearr_33325[(9)] = inst_33293);

return statearr_33325;
})();
var statearr_33326_33337 = state_33316__$1;
(statearr_33326_33337[(2)] = null);

(statearr_33326_33337[(1)] = (2));


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
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28824__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28824__auto____0 = (function (){
var statearr_33327 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33327[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28824__auto__);

(statearr_33327[(1)] = (1));

return statearr_33327;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28824__auto____1 = (function (state_33316){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_33316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e33328){if((e33328 instanceof Object)){
var ex__28827__auto__ = e33328;
var statearr_33329_33338 = state_33316;
(statearr_33329_33338[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33339 = state_33316;
state_33316 = G__33339;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28824__auto__ = function(state_33316){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28824__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28824__auto____1.call(this,state_33316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28824__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28824__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28824__auto__;
})()
})();
var state__28920__auto__ = (function (){var statearr_33330 = f__28919__auto__.call(null);
(statearr_33330[(6)] = c__28918__auto___33331);

return statearr_33330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33340,opts){
var map__33341 = p__33340;
var map__33341__$1 = (((((!((map__33341 == null))))?(((((map__33341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33341):map__33341);
var eval_body = cljs.core.get.call(null,map__33341__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33341__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e33343){var e = e33343;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__33344_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33344_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__33345){
var vec__33346 = p__33345;
var k = cljs.core.nth.call(null,vec__33346,(0),null);
var v = cljs.core.nth.call(null,vec__33346,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33349){
var vec__33350 = p__33349;
var k = cljs.core.nth.call(null,vec__33350,(0),null);
var v = cljs.core.nth.call(null,vec__33350,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33356,p__33357){
var map__33358 = p__33356;
var map__33358__$1 = (((((!((map__33358 == null))))?(((((map__33358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33358):map__33358);
var opts = map__33358__$1;
var before_jsload = cljs.core.get.call(null,map__33358__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__33358__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__33358__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__33359 = p__33357;
var map__33359__$1 = (((((!((map__33359 == null))))?(((((map__33359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33359):map__33359);
var msg = map__33359__$1;
var files = cljs.core.get.call(null,map__33359__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__33359__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__33359__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28918__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = (function (state_33513){
var state_val_33514 = (state_33513[(1)]);
if((state_val_33514 === (7))){
var inst_33375 = (state_33513[(7)]);
var inst_33373 = (state_33513[(8)]);
var inst_33376 = (state_33513[(9)]);
var inst_33374 = (state_33513[(10)]);
var inst_33381 = cljs.core._nth.call(null,inst_33374,inst_33376);
var inst_33382 = figwheel.client.file_reloading.eval_body.call(null,inst_33381,opts);
var inst_33383 = (inst_33376 + (1));
var tmp33515 = inst_33375;
var tmp33516 = inst_33373;
var tmp33517 = inst_33374;
var inst_33373__$1 = tmp33516;
var inst_33374__$1 = tmp33517;
var inst_33375__$1 = tmp33515;
var inst_33376__$1 = inst_33383;
var state_33513__$1 = (function (){var statearr_33518 = state_33513;
(statearr_33518[(7)] = inst_33375__$1);

(statearr_33518[(8)] = inst_33373__$1);

(statearr_33518[(9)] = inst_33376__$1);

(statearr_33518[(11)] = inst_33382);

(statearr_33518[(10)] = inst_33374__$1);

return statearr_33518;
})();
var statearr_33519_33602 = state_33513__$1;
(statearr_33519_33602[(2)] = null);

(statearr_33519_33602[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (20))){
var inst_33416 = (state_33513[(12)]);
var inst_33424 = figwheel.client.file_reloading.sort_files.call(null,inst_33416);
var state_33513__$1 = state_33513;
var statearr_33520_33603 = state_33513__$1;
(statearr_33520_33603[(2)] = inst_33424);

(statearr_33520_33603[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (27))){
var state_33513__$1 = state_33513;
var statearr_33521_33604 = state_33513__$1;
(statearr_33521_33604[(2)] = null);

(statearr_33521_33604[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (1))){
var inst_33365 = (state_33513[(13)]);
var inst_33362 = before_jsload.call(null,files);
var inst_33363 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_33364 = (function (){return (function (p1__33353_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33353_SHARP_);
});
})();
var inst_33365__$1 = cljs.core.filter.call(null,inst_33364,files);
var inst_33366 = cljs.core.not_empty.call(null,inst_33365__$1);
var state_33513__$1 = (function (){var statearr_33522 = state_33513;
(statearr_33522[(14)] = inst_33362);

(statearr_33522[(13)] = inst_33365__$1);

(statearr_33522[(15)] = inst_33363);

return statearr_33522;
})();
if(cljs.core.truth_(inst_33366)){
var statearr_33523_33605 = state_33513__$1;
(statearr_33523_33605[(1)] = (2));

} else {
var statearr_33524_33606 = state_33513__$1;
(statearr_33524_33606[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (24))){
var state_33513__$1 = state_33513;
var statearr_33525_33607 = state_33513__$1;
(statearr_33525_33607[(2)] = null);

(statearr_33525_33607[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (39))){
var inst_33466 = (state_33513[(16)]);
var state_33513__$1 = state_33513;
var statearr_33526_33608 = state_33513__$1;
(statearr_33526_33608[(2)] = inst_33466);

(statearr_33526_33608[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (46))){
var inst_33508 = (state_33513[(2)]);
var state_33513__$1 = state_33513;
var statearr_33527_33609 = state_33513__$1;
(statearr_33527_33609[(2)] = inst_33508);

(statearr_33527_33609[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (4))){
var inst_33410 = (state_33513[(2)]);
var inst_33411 = cljs.core.List.EMPTY;
var inst_33412 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_33411);
var inst_33413 = (function (){return (function (p1__33354_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33354_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33354_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__33354_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_33414 = cljs.core.filter.call(null,inst_33413,files);
var inst_33415 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_33416 = cljs.core.concat.call(null,inst_33414,inst_33415);
var state_33513__$1 = (function (){var statearr_33528 = state_33513;
(statearr_33528[(17)] = inst_33410);

(statearr_33528[(18)] = inst_33412);

(statearr_33528[(12)] = inst_33416);

return statearr_33528;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_33529_33610 = state_33513__$1;
(statearr_33529_33610[(1)] = (16));

} else {
var statearr_33530_33611 = state_33513__$1;
(statearr_33530_33611[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (15))){
var inst_33400 = (state_33513[(2)]);
var state_33513__$1 = state_33513;
var statearr_33531_33612 = state_33513__$1;
(statearr_33531_33612[(2)] = inst_33400);

(statearr_33531_33612[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (21))){
var inst_33426 = (state_33513[(19)]);
var inst_33426__$1 = (state_33513[(2)]);
var inst_33427 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33426__$1);
var state_33513__$1 = (function (){var statearr_33532 = state_33513;
(statearr_33532[(19)] = inst_33426__$1);

return statearr_33532;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33513__$1,(22),inst_33427);
} else {
if((state_val_33514 === (31))){
var inst_33511 = (state_33513[(2)]);
var state_33513__$1 = state_33513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33513__$1,inst_33511);
} else {
if((state_val_33514 === (32))){
var inst_33466 = (state_33513[(16)]);
var inst_33471 = inst_33466.cljs$lang$protocol_mask$partition0$;
var inst_33472 = (inst_33471 & (64));
var inst_33473 = inst_33466.cljs$core$ISeq$;
var inst_33474 = (cljs.core.PROTOCOL_SENTINEL === inst_33473);
var inst_33475 = ((inst_33472) || (inst_33474));
var state_33513__$1 = state_33513;
if(cljs.core.truth_(inst_33475)){
var statearr_33533_33613 = state_33513__$1;
(statearr_33533_33613[(1)] = (35));

} else {
var statearr_33534_33614 = state_33513__$1;
(statearr_33534_33614[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (40))){
var inst_33488 = (state_33513[(20)]);
var inst_33487 = (state_33513[(2)]);
var inst_33488__$1 = cljs.core.get.call(null,inst_33487,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33489 = cljs.core.get.call(null,inst_33487,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33490 = cljs.core.not_empty.call(null,inst_33488__$1);
var state_33513__$1 = (function (){var statearr_33535 = state_33513;
(statearr_33535[(20)] = inst_33488__$1);

(statearr_33535[(21)] = inst_33489);

return statearr_33535;
})();
if(cljs.core.truth_(inst_33490)){
var statearr_33536_33615 = state_33513__$1;
(statearr_33536_33615[(1)] = (41));

} else {
var statearr_33537_33616 = state_33513__$1;
(statearr_33537_33616[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (33))){
var state_33513__$1 = state_33513;
var statearr_33538_33617 = state_33513__$1;
(statearr_33538_33617[(2)] = false);

(statearr_33538_33617[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (13))){
var inst_33386 = (state_33513[(22)]);
var inst_33390 = cljs.core.chunk_first.call(null,inst_33386);
var inst_33391 = cljs.core.chunk_rest.call(null,inst_33386);
var inst_33392 = cljs.core.count.call(null,inst_33390);
var inst_33373 = inst_33391;
var inst_33374 = inst_33390;
var inst_33375 = inst_33392;
var inst_33376 = (0);
var state_33513__$1 = (function (){var statearr_33539 = state_33513;
(statearr_33539[(7)] = inst_33375);

(statearr_33539[(8)] = inst_33373);

(statearr_33539[(9)] = inst_33376);

(statearr_33539[(10)] = inst_33374);

return statearr_33539;
})();
var statearr_33540_33618 = state_33513__$1;
(statearr_33540_33618[(2)] = null);

(statearr_33540_33618[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (22))){
var inst_33426 = (state_33513[(19)]);
var inst_33430 = (state_33513[(23)]);
var inst_33429 = (state_33513[(24)]);
var inst_33434 = (state_33513[(25)]);
var inst_33429__$1 = (state_33513[(2)]);
var inst_33430__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33429__$1);
var inst_33431 = (function (){var all_files = inst_33426;
var res_SINGLEQUOTE_ = inst_33429__$1;
var res = inst_33430__$1;
return (function (p1__33355_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33355_SHARP_));
});
})();
var inst_33432 = cljs.core.filter.call(null,inst_33431,inst_33429__$1);
var inst_33433 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_33434__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33433);
var inst_33435 = cljs.core.not_empty.call(null,inst_33434__$1);
var state_33513__$1 = (function (){var statearr_33541 = state_33513;
(statearr_33541[(23)] = inst_33430__$1);

(statearr_33541[(26)] = inst_33432);

(statearr_33541[(24)] = inst_33429__$1);

(statearr_33541[(25)] = inst_33434__$1);

return statearr_33541;
})();
if(cljs.core.truth_(inst_33435)){
var statearr_33542_33619 = state_33513__$1;
(statearr_33542_33619[(1)] = (23));

} else {
var statearr_33543_33620 = state_33513__$1;
(statearr_33543_33620[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (36))){
var state_33513__$1 = state_33513;
var statearr_33544_33621 = state_33513__$1;
(statearr_33544_33621[(2)] = false);

(statearr_33544_33621[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (41))){
var inst_33488 = (state_33513[(20)]);
var inst_33492 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_33493 = cljs.core.map.call(null,inst_33492,inst_33488);
var inst_33494 = cljs.core.pr_str.call(null,inst_33493);
var inst_33495 = ["figwheel-no-load meta-data: ",inst_33494].join('');
var inst_33496 = figwheel.client.utils.log.call(null,inst_33495);
var state_33513__$1 = state_33513;
var statearr_33545_33622 = state_33513__$1;
(statearr_33545_33622[(2)] = inst_33496);

(statearr_33545_33622[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (43))){
var inst_33489 = (state_33513[(21)]);
var inst_33499 = (state_33513[(2)]);
var inst_33500 = cljs.core.not_empty.call(null,inst_33489);
var state_33513__$1 = (function (){var statearr_33546 = state_33513;
(statearr_33546[(27)] = inst_33499);

return statearr_33546;
})();
if(cljs.core.truth_(inst_33500)){
var statearr_33547_33623 = state_33513__$1;
(statearr_33547_33623[(1)] = (44));

} else {
var statearr_33548_33624 = state_33513__$1;
(statearr_33548_33624[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (29))){
var inst_33426 = (state_33513[(19)]);
var inst_33466 = (state_33513[(16)]);
var inst_33430 = (state_33513[(23)]);
var inst_33432 = (state_33513[(26)]);
var inst_33429 = (state_33513[(24)]);
var inst_33434 = (state_33513[(25)]);
var inst_33462 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33465 = (function (){var all_files = inst_33426;
var res_SINGLEQUOTE_ = inst_33429;
var res = inst_33430;
var files_not_loaded = inst_33432;
var dependencies_that_loaded = inst_33434;
return (function (p__33464){
var map__33549 = p__33464;
var map__33549__$1 = (((((!((map__33549 == null))))?(((((map__33549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33549):map__33549);
var namespace = cljs.core.get.call(null,map__33549__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
var inst_33466__$1 = cljs.core.group_by.call(null,inst_33465,inst_33432);
var inst_33468 = (inst_33466__$1 == null);
var inst_33469 = cljs.core.not.call(null,inst_33468);
var state_33513__$1 = (function (){var statearr_33551 = state_33513;
(statearr_33551[(16)] = inst_33466__$1);

(statearr_33551[(28)] = inst_33462);

return statearr_33551;
})();
if(inst_33469){
var statearr_33552_33625 = state_33513__$1;
(statearr_33552_33625[(1)] = (32));

} else {
var statearr_33553_33626 = state_33513__$1;
(statearr_33553_33626[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (44))){
var inst_33489 = (state_33513[(21)]);
var inst_33502 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33489);
var inst_33503 = cljs.core.pr_str.call(null,inst_33502);
var inst_33504 = ["not required: ",inst_33503].join('');
var inst_33505 = figwheel.client.utils.log.call(null,inst_33504);
var state_33513__$1 = state_33513;
var statearr_33554_33627 = state_33513__$1;
(statearr_33554_33627[(2)] = inst_33505);

(statearr_33554_33627[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (6))){
var inst_33407 = (state_33513[(2)]);
var state_33513__$1 = state_33513;
var statearr_33555_33628 = state_33513__$1;
(statearr_33555_33628[(2)] = inst_33407);

(statearr_33555_33628[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (28))){
var inst_33432 = (state_33513[(26)]);
var inst_33459 = (state_33513[(2)]);
var inst_33460 = cljs.core.not_empty.call(null,inst_33432);
var state_33513__$1 = (function (){var statearr_33556 = state_33513;
(statearr_33556[(29)] = inst_33459);

return statearr_33556;
})();
if(cljs.core.truth_(inst_33460)){
var statearr_33557_33629 = state_33513__$1;
(statearr_33557_33629[(1)] = (29));

} else {
var statearr_33558_33630 = state_33513__$1;
(statearr_33558_33630[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (25))){
var inst_33430 = (state_33513[(23)]);
var inst_33446 = (state_33513[(2)]);
var inst_33447 = cljs.core.not_empty.call(null,inst_33430);
var state_33513__$1 = (function (){var statearr_33559 = state_33513;
(statearr_33559[(30)] = inst_33446);

return statearr_33559;
})();
if(cljs.core.truth_(inst_33447)){
var statearr_33560_33631 = state_33513__$1;
(statearr_33560_33631[(1)] = (26));

} else {
var statearr_33561_33632 = state_33513__$1;
(statearr_33561_33632[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (34))){
var inst_33482 = (state_33513[(2)]);
var state_33513__$1 = state_33513;
if(cljs.core.truth_(inst_33482)){
var statearr_33562_33633 = state_33513__$1;
(statearr_33562_33633[(1)] = (38));

} else {
var statearr_33563_33634 = state_33513__$1;
(statearr_33563_33634[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (17))){
var state_33513__$1 = state_33513;
var statearr_33564_33635 = state_33513__$1;
(statearr_33564_33635[(2)] = recompile_dependents);

(statearr_33564_33635[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (3))){
var state_33513__$1 = state_33513;
var statearr_33565_33636 = state_33513__$1;
(statearr_33565_33636[(2)] = null);

(statearr_33565_33636[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (12))){
var inst_33403 = (state_33513[(2)]);
var state_33513__$1 = state_33513;
var statearr_33566_33637 = state_33513__$1;
(statearr_33566_33637[(2)] = inst_33403);

(statearr_33566_33637[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (2))){
var inst_33365 = (state_33513[(13)]);
var inst_33372 = cljs.core.seq.call(null,inst_33365);
var inst_33373 = inst_33372;
var inst_33374 = null;
var inst_33375 = (0);
var inst_33376 = (0);
var state_33513__$1 = (function (){var statearr_33567 = state_33513;
(statearr_33567[(7)] = inst_33375);

(statearr_33567[(8)] = inst_33373);

(statearr_33567[(9)] = inst_33376);

(statearr_33567[(10)] = inst_33374);

return statearr_33567;
})();
var statearr_33568_33638 = state_33513__$1;
(statearr_33568_33638[(2)] = null);

(statearr_33568_33638[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (23))){
var inst_33426 = (state_33513[(19)]);
var inst_33430 = (state_33513[(23)]);
var inst_33432 = (state_33513[(26)]);
var inst_33429 = (state_33513[(24)]);
var inst_33434 = (state_33513[(25)]);
var inst_33437 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_33439 = (function (){var all_files = inst_33426;
var res_SINGLEQUOTE_ = inst_33429;
var res = inst_33430;
var files_not_loaded = inst_33432;
var dependencies_that_loaded = inst_33434;
return (function (p__33438){
var map__33569 = p__33438;
var map__33569__$1 = (((((!((map__33569 == null))))?(((((map__33569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33569):map__33569);
var request_url = cljs.core.get.call(null,map__33569__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_33440 = cljs.core.reverse.call(null,inst_33434);
var inst_33441 = cljs.core.map.call(null,inst_33439,inst_33440);
var inst_33442 = cljs.core.pr_str.call(null,inst_33441);
var inst_33443 = figwheel.client.utils.log.call(null,inst_33442);
var state_33513__$1 = (function (){var statearr_33571 = state_33513;
(statearr_33571[(31)] = inst_33437);

return statearr_33571;
})();
var statearr_33572_33639 = state_33513__$1;
(statearr_33572_33639[(2)] = inst_33443);

(statearr_33572_33639[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (35))){
var state_33513__$1 = state_33513;
var statearr_33573_33640 = state_33513__$1;
(statearr_33573_33640[(2)] = true);

(statearr_33573_33640[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (19))){
var inst_33416 = (state_33513[(12)]);
var inst_33422 = figwheel.client.file_reloading.expand_files.call(null,inst_33416);
var state_33513__$1 = state_33513;
var statearr_33574_33641 = state_33513__$1;
(statearr_33574_33641[(2)] = inst_33422);

(statearr_33574_33641[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (11))){
var state_33513__$1 = state_33513;
var statearr_33575_33642 = state_33513__$1;
(statearr_33575_33642[(2)] = null);

(statearr_33575_33642[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (9))){
var inst_33405 = (state_33513[(2)]);
var state_33513__$1 = state_33513;
var statearr_33576_33643 = state_33513__$1;
(statearr_33576_33643[(2)] = inst_33405);

(statearr_33576_33643[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (5))){
var inst_33375 = (state_33513[(7)]);
var inst_33376 = (state_33513[(9)]);
var inst_33378 = (inst_33376 < inst_33375);
var inst_33379 = inst_33378;
var state_33513__$1 = state_33513;
if(cljs.core.truth_(inst_33379)){
var statearr_33577_33644 = state_33513__$1;
(statearr_33577_33644[(1)] = (7));

} else {
var statearr_33578_33645 = state_33513__$1;
(statearr_33578_33645[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (14))){
var inst_33386 = (state_33513[(22)]);
var inst_33395 = cljs.core.first.call(null,inst_33386);
var inst_33396 = figwheel.client.file_reloading.eval_body.call(null,inst_33395,opts);
var inst_33397 = cljs.core.next.call(null,inst_33386);
var inst_33373 = inst_33397;
var inst_33374 = null;
var inst_33375 = (0);
var inst_33376 = (0);
var state_33513__$1 = (function (){var statearr_33579 = state_33513;
(statearr_33579[(7)] = inst_33375);

(statearr_33579[(32)] = inst_33396);

(statearr_33579[(8)] = inst_33373);

(statearr_33579[(9)] = inst_33376);

(statearr_33579[(10)] = inst_33374);

return statearr_33579;
})();
var statearr_33580_33646 = state_33513__$1;
(statearr_33580_33646[(2)] = null);

(statearr_33580_33646[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (45))){
var state_33513__$1 = state_33513;
var statearr_33581_33647 = state_33513__$1;
(statearr_33581_33647[(2)] = null);

(statearr_33581_33647[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (26))){
var inst_33426 = (state_33513[(19)]);
var inst_33430 = (state_33513[(23)]);
var inst_33432 = (state_33513[(26)]);
var inst_33429 = (state_33513[(24)]);
var inst_33434 = (state_33513[(25)]);
var inst_33449 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33451 = (function (){var all_files = inst_33426;
var res_SINGLEQUOTE_ = inst_33429;
var res = inst_33430;
var files_not_loaded = inst_33432;
var dependencies_that_loaded = inst_33434;
return (function (p__33450){
var map__33582 = p__33450;
var map__33582__$1 = (((((!((map__33582 == null))))?(((((map__33582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33582):map__33582);
var namespace = cljs.core.get.call(null,map__33582__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33582__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_33452 = cljs.core.map.call(null,inst_33451,inst_33430);
var inst_33453 = cljs.core.pr_str.call(null,inst_33452);
var inst_33454 = figwheel.client.utils.log.call(null,inst_33453);
var inst_33455 = (function (){var all_files = inst_33426;
var res_SINGLEQUOTE_ = inst_33429;
var res = inst_33430;
var files_not_loaded = inst_33432;
var dependencies_that_loaded = inst_33434;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_33456 = setTimeout(inst_33455,(10));
var state_33513__$1 = (function (){var statearr_33584 = state_33513;
(statearr_33584[(33)] = inst_33454);

(statearr_33584[(34)] = inst_33449);

return statearr_33584;
})();
var statearr_33585_33648 = state_33513__$1;
(statearr_33585_33648[(2)] = inst_33456);

(statearr_33585_33648[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (16))){
var state_33513__$1 = state_33513;
var statearr_33586_33649 = state_33513__$1;
(statearr_33586_33649[(2)] = reload_dependents);

(statearr_33586_33649[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (38))){
var inst_33466 = (state_33513[(16)]);
var inst_33484 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33466);
var state_33513__$1 = state_33513;
var statearr_33587_33650 = state_33513__$1;
(statearr_33587_33650[(2)] = inst_33484);

(statearr_33587_33650[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (30))){
var state_33513__$1 = state_33513;
var statearr_33588_33651 = state_33513__$1;
(statearr_33588_33651[(2)] = null);

(statearr_33588_33651[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (10))){
var inst_33386 = (state_33513[(22)]);
var inst_33388 = cljs.core.chunked_seq_QMARK_.call(null,inst_33386);
var state_33513__$1 = state_33513;
if(inst_33388){
var statearr_33589_33652 = state_33513__$1;
(statearr_33589_33652[(1)] = (13));

} else {
var statearr_33590_33653 = state_33513__$1;
(statearr_33590_33653[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (18))){
var inst_33420 = (state_33513[(2)]);
var state_33513__$1 = state_33513;
if(cljs.core.truth_(inst_33420)){
var statearr_33591_33654 = state_33513__$1;
(statearr_33591_33654[(1)] = (19));

} else {
var statearr_33592_33655 = state_33513__$1;
(statearr_33592_33655[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (42))){
var state_33513__$1 = state_33513;
var statearr_33593_33656 = state_33513__$1;
(statearr_33593_33656[(2)] = null);

(statearr_33593_33656[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (37))){
var inst_33479 = (state_33513[(2)]);
var state_33513__$1 = state_33513;
var statearr_33594_33657 = state_33513__$1;
(statearr_33594_33657[(2)] = inst_33479);

(statearr_33594_33657[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (8))){
var inst_33386 = (state_33513[(22)]);
var inst_33373 = (state_33513[(8)]);
var inst_33386__$1 = cljs.core.seq.call(null,inst_33373);
var state_33513__$1 = (function (){var statearr_33595 = state_33513;
(statearr_33595[(22)] = inst_33386__$1);

return statearr_33595;
})();
if(inst_33386__$1){
var statearr_33596_33658 = state_33513__$1;
(statearr_33596_33658[(1)] = (10));

} else {
var statearr_33597_33659 = state_33513__$1;
(statearr_33597_33659[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28824__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28824__auto____0 = (function (){
var statearr_33598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33598[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28824__auto__);

(statearr_33598[(1)] = (1));

return statearr_33598;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28824__auto____1 = (function (state_33513){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_33513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e33599){if((e33599 instanceof Object)){
var ex__28827__auto__ = e33599;
var statearr_33600_33660 = state_33513;
(statearr_33600_33660[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33661 = state_33513;
state_33513 = G__33661;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28824__auto__ = function(state_33513){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28824__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28824__auto____1.call(this,state_33513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28824__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28824__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28824__auto__;
})()
})();
var state__28920__auto__ = (function (){var statearr_33601 = f__28919__auto__.call(null);
(statearr_33601[(6)] = c__28918__auto__);

return statearr_33601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
}));

return c__28918__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33664,link){
var map__33665 = p__33664;
var map__33665__$1 = (((((!((map__33665 == null))))?(((((map__33665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33665):map__33665);
var file = cljs.core.get.call(null,map__33665__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__33662_SHARP_,p2__33663_SHARP_){
if(cljs.core._EQ_.call(null,p1__33662_SHARP_,p2__33663_SHARP_)){
return p1__33662_SHARP_;
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33668){
var map__33669 = p__33668;
var map__33669__$1 = (((((!((map__33669 == null))))?(((((map__33669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33669):map__33669);
var match_length = cljs.core.get.call(null,map__33669__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33669__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33667_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33667_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__33671_SHARP_,p2__33672_SHARP_){
return cljs.core.assoc.call(null,p1__33671_SHARP_,cljs.core.get.call(null,p2__33672_SHARP_,key),p2__33672_SHARP_);
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
var loaded_f_datas_33673 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_33673);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_33673);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33674,p__33675){
var map__33676 = p__33674;
var map__33676__$1 = (((((!((map__33676 == null))))?(((((map__33676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33676):map__33676);
var on_cssload = cljs.core.get.call(null,map__33676__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__33677 = p__33675;
var map__33677__$1 = (((((!((map__33677 == null))))?(((((map__33677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33677):map__33677);
var files_msg = map__33677__$1;
var files = cljs.core.get.call(null,map__33677__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1602418811961
