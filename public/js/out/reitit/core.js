// Compiled by ClojureScript 1.10.773 {}
goog.provide('reitit.core');
goog.require('cljs.core');
goog.require('reitit.impl');
goog.require('reitit.exception');
goog.require('reitit.trie');

/**
 * @interface
 */
reitit.core.Expand = function(){};

var reitit$core$Expand$expand$dyn_32141 = (function (this$,opts){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.core.expand[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,opts);
} else {
var m__4426__auto__ = (reitit.core.expand["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,opts);
} else {
throw cljs.core.missing_protocol.call(null,"Expand.expand",this$);
}
}
});
reitit.core.expand = (function reitit$core$expand(this$,opts){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Expand$expand$arity$2 == null)))))){
return this$.reitit$core$Expand$expand$arity$2(this$,opts);
} else {
return reitit$core$Expand$expand$dyn_32141.call(null,this$,opts);
}
});

(cljs.core.Keyword.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),this$__$1], null);
}));

(cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

(cljs.core.PersistentHashMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

goog.object.set(reitit.core.Expand,"function",true);

goog.object.set(reitit.core.expand,"function",(function (this$,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),this$], null);
}));

goog.object.set(reitit.core.Expand,"null",true);

goog.object.set(reitit.core.expand,"null",(function (_,___$1){
return null;
}));

/**
 * @interface
 */
reitit.core.Router = function(){};

var reitit$core$Router$router_name$dyn_32144 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.core.router_name[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (reitit.core.router_name["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.router-name",this$);
}
}
});
reitit.core.router_name = (function reitit$core$router_name(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$router_name$arity$1 == null)))))){
return this$.reitit$core$Router$router_name$arity$1(this$);
} else {
return reitit$core$Router$router_name$dyn_32144.call(null,this$);
}
});

var reitit$core$Router$routes$dyn_32145 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.core.routes[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (reitit.core.routes["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.routes",this$);
}
}
});
reitit.core.routes = (function reitit$core$routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$routes$arity$1 == null)))))){
return this$.reitit$core$Router$routes$arity$1(this$);
} else {
return reitit$core$Router$routes$dyn_32145.call(null,this$);
}
});

var reitit$core$Router$compiled_routes$dyn_32146 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.core.compiled_routes[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (reitit.core.compiled_routes["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.compiled-routes",this$);
}
}
});
reitit.core.compiled_routes = (function reitit$core$compiled_routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$compiled_routes$arity$1 == null)))))){
return this$.reitit$core$Router$compiled_routes$arity$1(this$);
} else {
return reitit$core$Router$compiled_routes$dyn_32146.call(null,this$);
}
});

var reitit$core$Router$options$dyn_32147 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.core.options[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (reitit.core.options["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.options",this$);
}
}
});
reitit.core.options = (function reitit$core$options(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$options$arity$1 == null)))))){
return this$.reitit$core$Router$options$arity$1(this$);
} else {
return reitit$core$Router$options$dyn_32147.call(null,this$);
}
});

var reitit$core$Router$route_names$dyn_32148 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.core.route_names[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (reitit.core.route_names["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.route-names",this$);
}
}
});
reitit.core.route_names = (function reitit$core$route_names(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$route_names$arity$1 == null)))))){
return this$.reitit$core$Router$route_names$arity$1(this$);
} else {
return reitit$core$Router$route_names$dyn_32148.call(null,this$);
}
});

var reitit$core$Router$match_by_path$dyn_32149 = (function (this$,path){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.core.match_by_path[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,path);
} else {
var m__4426__auto__ = (reitit.core.match_by_path["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,path);
} else {
throw cljs.core.missing_protocol.call(null,"Router.match-by-path",this$);
}
}
});
reitit.core.match_by_path = (function reitit$core$match_by_path(this$,path){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_path$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_path$arity$2(this$,path);
} else {
return reitit$core$Router$match_by_path$dyn_32149.call(null,this$,path);
}
});

var reitit$core$Router$match_by_name$dyn_32150 = (function() {
var G__32151 = null;
var G__32151__2 = (function (this$,name){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.core.match_by_name[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,name);
} else {
var m__4426__auto__ = (reitit.core.match_by_name["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,name);
} else {
throw cljs.core.missing_protocol.call(null,"Router.match-by-name",this$);
}
}
});
var G__32151__3 = (function (this$,name,path_params){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.core.match_by_name[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,name,path_params);
} else {
var m__4426__auto__ = (reitit.core.match_by_name["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,name,path_params);
} else {
throw cljs.core.missing_protocol.call(null,"Router.match-by-name",this$);
}
}
});
G__32151 = function(this$,name,path_params){
switch(arguments.length){
case 2:
return G__32151__2.call(this,this$,name);
case 3:
return G__32151__3.call(this,this$,name,path_params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32151.cljs$core$IFn$_invoke$arity$2 = G__32151__2;
G__32151.cljs$core$IFn$_invoke$arity$3 = G__32151__3;
return G__32151;
})()
;
reitit.core.match_by_name = (function reitit$core$match_by_name(var_args){
var G__32143 = arguments.length;
switch (G__32143) {
case 2:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$2(this$,name);
} else {
return reitit$core$Router$match_by_name$dyn_32150.call(null,this$,name);
}
}));

(reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$3 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$3(this$,name,path_params);
} else {
return reitit$core$Router$match_by_name$dyn_32150.call(null,this$,name,path_params);
}
}));

(reitit.core.match_by_name.cljs$lang$maxFixedArity = 3);


reitit.core.router_QMARK_ = (function reitit$core$router_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.reitit$core$Router$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reitit.core.Router,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reitit.core.Router,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.core.Match = (function (template,data,result,path_params,path,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32155,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32159 = k32155;
var G__32159__$1 = (((G__32159 instanceof cljs.core.Keyword))?G__32159.fqn:null);
switch (G__32159__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32155,else__4383__auto__);

}
}));

(reitit.core.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__32160){
var vec__32161 = p__32160;
var k__4403__auto__ = cljs.core.nth.call(null,vec__32161,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__32161,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(reitit.core.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#reitit.core.Match{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32154){
var self__ = this;
var G__32154__$1 = this;
return (new cljs.core.RecordIter((0),G__32154__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(reitit.core.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(reitit.core.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.core.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (687105853 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(reitit.core.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32156,other32157){
var self__ = this;
var this32156__$1 = this;
return (((!((other32157 == null)))) && ((this32156__$1.constructor === other32157.constructor)) && (cljs.core._EQ_.call(null,this32156__$1.template,other32157.template)) && (cljs.core._EQ_.call(null,this32156__$1.data,other32157.data)) && (cljs.core._EQ_.call(null,this32156__$1.result,other32157.result)) && (cljs.core._EQ_.call(null,this32156__$1.path_params,other32157.path_params)) && (cljs.core._EQ_.call(null,this32156__$1.path,other32157.path)) && (cljs.core._EQ_.call(null,this32156__$1.__extmap,other32157.__extmap)));
}));

(reitit.core.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(reitit.core.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32154){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32164 = cljs.core.keyword_identical_QMARK_;
var expr__32165 = k__4388__auto__;
if(cljs.core.truth_(pred__32164.call(null,new cljs.core.Keyword(null,"template","template",-702405684),expr__32165))){
return (new reitit.core.Match(G__32154,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32164.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__32165))){
return (new reitit.core.Match(self__.template,G__32154,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32164.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__32165))){
return (new reitit.core.Match(self__.template,self__.data,G__32154,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32164.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__32165))){
return (new reitit.core.Match(self__.template,self__.data,self__.result,G__32154,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32164.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__32165))){
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,G__32154,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__32154),null));
}
}
}
}
}
}));

(reitit.core.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null))], null),self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32154){
var self__ = this;
var this__4379__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,G__32154,self__.__extmap,self__.__hash));
}));

(reitit.core.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(reitit.core.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
}));

(reitit.core.Match.cljs$lang$type = true);

(reitit.core.Match.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"reitit.core/Match",null,(1),null));
}));

(reitit.core.Match.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"reitit.core/Match");
}));

/**
 * Positional factory function for reitit.core/Match.
 */
reitit.core.__GT_Match = (function reitit$core$__GT_Match(template,data,result,path_params,path){
return (new reitit.core.Match(template,data,result,path_params,path,null,null,null));
});

/**
 * Factory function for reitit.core/Match, taking a map of keywords to field values.
 */
reitit.core.map__GT_Match = (function reitit$core$map__GT_Match(G__32158){
var extmap__4419__auto__ = (function (){var G__32167 = cljs.core.dissoc.call(null,G__32158,new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.record_QMARK_.call(null,G__32158)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__32167);
} else {
return G__32167;
}
})();
return (new reitit.core.Match(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__32158),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__32158),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__32158),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__32158),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__32158),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.core.PartialMatch = (function (template,data,result,path_params,required,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.required = required;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32170,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32174 = k32170;
var G__32174__$1 = (((G__32174 instanceof cljs.core.Keyword))?G__32174.fqn:null);
switch (G__32174__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "required":
return self__.required;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32170,else__4383__auto__);

}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__32175){
var vec__32176 = p__32175;
var k__4403__auto__ = cljs.core.nth.call(null,vec__32176,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__32176,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(reitit.core.PartialMatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#reitit.core.PartialMatch{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null))], null),self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32169){
var self__ = this;
var G__32169__$1 = this;
return (new cljs.core.RecordIter((0),G__32169__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (492095938 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32171,other32172){
var self__ = this;
var this32171__$1 = this;
return (((!((other32172 == null)))) && ((this32171__$1.constructor === other32172.constructor)) && (cljs.core._EQ_.call(null,this32171__$1.template,other32172.template)) && (cljs.core._EQ_.call(null,this32171__$1.data,other32172.data)) && (cljs.core._EQ_.call(null,this32171__$1.result,other32172.result)) && (cljs.core._EQ_.call(null,this32171__$1.path_params,other32172.path_params)) && (cljs.core._EQ_.call(null,this32171__$1.required,other32172.required)) && (cljs.core._EQ_.call(null,this32171__$1.__extmap,other32172.__extmap)));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"required","required",1807647006),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32169){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32179 = cljs.core.keyword_identical_QMARK_;
var expr__32180 = k__4388__auto__;
if(cljs.core.truth_(pred__32179.call(null,new cljs.core.Keyword(null,"template","template",-702405684),expr__32180))){
return (new reitit.core.PartialMatch(G__32169,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32179.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__32180))){
return (new reitit.core.PartialMatch(self__.template,G__32169,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32179.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__32180))){
return (new reitit.core.PartialMatch(self__.template,self__.data,G__32169,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32179.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__32180))){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,G__32169,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32179.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__32180))){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,G__32169,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__32169),null));
}
}
}
}
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"required","required",1807647006),self__.required,null))], null),self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32169){
var self__ = this;
var this__4379__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,G__32169,self__.__extmap,self__.__hash));
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(reitit.core.PartialMatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"required","required",-846788763,null)], null);
}));

(reitit.core.PartialMatch.cljs$lang$type = true);

(reitit.core.PartialMatch.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"reitit.core/PartialMatch",null,(1),null));
}));

(reitit.core.PartialMatch.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"reitit.core/PartialMatch");
}));

/**
 * Positional factory function for reitit.core/PartialMatch.
 */
reitit.core.__GT_PartialMatch = (function reitit$core$__GT_PartialMatch(template,data,result,path_params,required){
return (new reitit.core.PartialMatch(template,data,result,path_params,required,null,null,null));
});

/**
 * Factory function for reitit.core/PartialMatch, taking a map of keywords to field values.
 */
reitit.core.map__GT_PartialMatch = (function reitit$core$map__GT_PartialMatch(G__32173){
var extmap__4419__auto__ = (function (){var G__32182 = cljs.core.dissoc.call(null,G__32173,new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006));
if(cljs.core.record_QMARK_.call(null,G__32173)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__32182);
} else {
return G__32182;
}
})();
return (new reitit.core.PartialMatch(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__32173),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__32173),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__32173),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__32173),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__32173),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

reitit.core.partial_match_QMARK_ = (function reitit$core$partial_match_QMARK_(x){
return (x instanceof reitit.core.PartialMatch);
});
reitit.core.match_by_name_BANG_ = (function reitit$core$match_by_name_BANG_(var_args){
var G__32185 = arguments.length;
switch (G__32185) {
case 2:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
return reitit.core.match_by_name_BANG_.call(null,this$,name,null);
}));

(reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
var temp__5733__auto__ = reitit.core.match_by_name.call(null,this$,name,path_params);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
if((!(reitit.core.partial_match_QMARK_.call(null,match)))){
return match;
} else {
return reitit.impl.throw_on_missing_path_params.call(null,new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(match),path_params);
}
} else {
return null;
}
}));

(reitit.core.match_by_name_BANG_.cljs$lang$maxFixedArity = 3);

reitit.core.match__GT_path = (function reitit$core$match__GT_path(var_args){
var G__32188 = arguments.length;
switch (G__32188) {
case 1:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (match){
return reitit.core.match__GT_path.call(null,match,null);
}));

(reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (match,query_params){
var G__32189 = match;
var G__32189__$1 = (((G__32189 == null))?null:new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__32189));
if((G__32189__$1 == null)){
return null;
} else {
var G__32190 = G__32189__$1;
if(cljs.core.seq.call(null,query_params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32190),"?",reitit.impl.query_string.call(null,query_params)].join('');
} else {
return G__32190;
}
}
}));

(reitit.core.match__GT_path.cljs$lang$maxFixedArity = 2);

/**
 * Creates a linear-router from resolved routes and optional
 *   expanded options. See [[router]] for available options, plus the following:
 * 
 *   | key                          | description |
 *   | -----------------------------|-------------|
 *   | `:reitit.trie/trie-compiler` | Optional trie-compiler.
 *   | `:reitit.trie/parameters`    | Optional function to create empty map(-like) path parameters value from sequence of keys.
 */
reitit.core.linear_router = (function reitit$core$linear_router(var_args){
var G__32194 = arguments.length;
switch (G__32194) {
case 1:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.linear_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var compiler = new cljs.core.Keyword("reitit.trie","trie-compiler","reitit.trie/trie-compiler",2125029755).cljs$core$IFn$_invoke$arity$2(opts,reitit.trie.compiler.call(null));
var names = reitit.impl.find_names.call(null,compiled_routes,opts);
var vec__32195 = cljs.core.reduce.call(null,(function (p__32198,p__32199){
var vec__32200 = p__32198;
var pl = cljs.core.nth.call(null,vec__32200,(0),null);
var nl = cljs.core.nth.call(null,vec__32200,(1),null);
var vec__32203 = p__32199;
var p = cljs.core.nth.call(null,vec__32203,(0),null);
var map__32206 = cljs.core.nth.call(null,vec__32203,(1),null);
var map__32206__$1 = (((((!((map__32206 == null))))?(((((map__32206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32206):map__32206);
var data = map__32206__$1;
var name = cljs.core.get.call(null,map__32206__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.call(null,vec__32203,(2),null);
var map__32208 = reitit.impl.parse.call(null,p,opts);
var map__32208__$1 = (((((!((map__32208 == null))))?(((((map__32208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32208):map__32208);
var route = map__32208__$1;
var path_params = cljs.core.get.call(null,map__32208__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = (function (p1__32192_SHARP_){
var temp__5733__auto__ = reitit.impl.path_for.call(null,route,p1__32192_SHARP_);
if(cljs.core.truth_(temp__5733__auto__)){
var path = temp__5733__auto__;
return reitit.core.__GT_Match.call(null,p,data,result,reitit.impl.url_decode_coll.call(null,p1__32192_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch.call(null,p,data,result,reitit.impl.url_decode_coll.call(null,p1__32192_SHARP_),path_params);
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,pl,reitit.trie.compile.call(null,reitit.trie.insert.call(null,null,p,reitit.core.__GT_Match.call(null,p,data,result,null,null),opts))),(cljs.core.truth_(name)?cljs.core.assoc.call(null,nl,name,f):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.call(null,vec__32195,(0),null);
var nl = cljs.core.nth.call(null,vec__32195,(1),null);
var lookup = reitit.impl.fast_map.call(null,nl);
var matcher = reitit.trie.linear_matcher.call(null,compiler,pl,true);
var match_by_path = reitit.trie.path_matcher.call(null,matcher,compiler);
var routes = reitit.impl.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core32210 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core32210 = (function (matcher,names,compiled_routes,routes,lookup,pl,vec__32195,nl,match_by_path,compiler,opts,meta32211){
this.matcher = matcher;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.vec__32195 = vec__32195;
this.nl = nl;
this.match_by_path = match_by_path;
this.compiler = compiler;
this.opts = opts;
this.meta32211 = meta32211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core32210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32212,meta32211__$1){
var self__ = this;
var _32212__$1 = this;
return (new reitit.core.t_reitit$core32210(self__.matcher,self__.names,self__.compiled_routes,self__.routes,self__.lookup,self__.pl,self__.vec__32195,self__.nl,self__.match_by_path,self__.compiler,self__.opts,meta32211__$1));
}));

(reitit.core.t_reitit$core32210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32212){
var self__ = this;
var _32212__$1 = this;
return self__.meta32211;
}));

(reitit.core.t_reitit$core32210.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core32210.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"linear-router","linear-router",-755184172);
}));

(reitit.core.t_reitit$core32210.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core32210.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core32210.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core32210.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core32210.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = self__.match_by_path.call(null,path);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match)),new cljs.core.Keyword(null,"path","path",-188191168),path);
} else {
return null;
}
}));

(reitit.core.t_reitit$core32210.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return match.call(null,null);
} else {
return null;
}
}));

(reitit.core.t_reitit$core32210.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return match.call(null,reitit.impl.path_params.call(null,path_params));
} else {
return null;
}
}));

(reitit.core.t_reitit$core32210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"vec__32195","vec__32195",1567384374,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"match-by-path","match-by-path",272707419,null),new cljs.core.Symbol(null,"compiler","compiler",1372604796,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta32211","meta32211",155230932,null)], null);
}));

(reitit.core.t_reitit$core32210.cljs$lang$type = true);

(reitit.core.t_reitit$core32210.cljs$lang$ctorStr = "reitit.core/t_reitit$core32210");

(reitit.core.t_reitit$core32210.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"reitit.core/t_reitit$core32210");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core32210.
 */
reitit.core.__GT_t_reitit$core32210 = (function reitit$core$__GT_t_reitit$core32210(matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,vec__32195__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta32211){
return (new reitit.core.t_reitit$core32210(matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,vec__32195__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta32211));
});

}

return (new reitit.core.t_reitit$core32210(matcher,names,compiled_routes,routes,lookup,pl,vec__32195,nl,match_by_path,compiler,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.linear_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates a lookup-router from resolved routes and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.lookup_router = (function reitit$core$lookup_router(var_args){
var G__32216 = arguments.length;
switch (G__32216) {
case 1:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.lookup_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var temp__5735__auto___32234 = cljs.core.seq.call(null,cljs.core.filter.call(null,reitit.impl.__GT_wild_route_QMARK_.call(null,opts),compiled_routes));
if(temp__5735__auto___32234){
var wilds_32235 = temp__5735__auto___32234;
reitit.exception.fail_BANG_.call(null,["can't create :lookup-router with wildcard routes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wilds_32235)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wilds","wilds",132271223),wilds_32235,new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var names = reitit.impl.find_names.call(null,compiled_routes,opts);
var vec__32217 = cljs.core.reduce.call(null,(function (p__32220,p__32221){
var vec__32222 = p__32220;
var pl = cljs.core.nth.call(null,vec__32222,(0),null);
var nl = cljs.core.nth.call(null,vec__32222,(1),null);
var vec__32225 = p__32221;
var p = cljs.core.nth.call(null,vec__32225,(0),null);
var map__32228 = cljs.core.nth.call(null,vec__32225,(1),null);
var map__32228__$1 = (((((!((map__32228 == null))))?(((((map__32228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32228):map__32228);
var data = map__32228__$1;
var name = cljs.core.get.call(null,map__32228__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.call(null,vec__32225,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,pl,p,reitit.core.__GT_Match.call(null,p,data,result,cljs.core.PersistentArrayMap.EMPTY,p)),(cljs.core.truth_(name)?cljs.core.assoc.call(null,nl,name,(function (p1__32214_SHARP_){
return reitit.core.__GT_Match.call(null,p,data,result,p1__32214_SHARP_,p);
})):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.call(null,vec__32217,(0),null);
var nl = cljs.core.nth.call(null,vec__32217,(1),null);
var data = reitit.impl.fast_map.call(null,pl);
var lookup = reitit.impl.fast_map.call(null,nl);
var routes = reitit.impl.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core32230 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core32230 = (function (names,data,compiled_routes,routes,lookup,pl,nl,opts,vec__32217,meta32231){
this.names = names;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.nl = nl;
this.opts = opts;
this.vec__32217 = vec__32217;
this.meta32231 = meta32231;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core32230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32232,meta32231__$1){
var self__ = this;
var _32232__$1 = this;
return (new reitit.core.t_reitit$core32230(self__.names,self__.data,self__.compiled_routes,self__.routes,self__.lookup,self__.pl,self__.nl,self__.opts,self__.vec__32217,meta32231__$1));
}));

(reitit.core.t_reitit$core32230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32232){
var self__ = this;
var _32232__$1 = this;
return self__.meta32231;
}));

(reitit.core.t_reitit$core32230.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core32230.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"lookup-router","lookup-router",-684998665);
}));

(reitit.core.t_reitit$core32230.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core32230.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core32230.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core32230.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core32230.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
return reitit.impl.fast_get.call(null,self__.data,path);
}));

(reitit.core.t_reitit$core32230.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return match.call(null,null);
} else {
return null;
}
}));

(reitit.core.t_reitit$core32230.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return match.call(null,reitit.impl.path_params.call(null,path_params));
} else {
return null;
}
}));

(reitit.core.t_reitit$core32230.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"vec__32217","vec__32217",-895309283,null),new cljs.core.Symbol(null,"meta32231","meta32231",773773293,null)], null);
}));

(reitit.core.t_reitit$core32230.cljs$lang$type = true);

(reitit.core.t_reitit$core32230.cljs$lang$ctorStr = "reitit.core/t_reitit$core32230");

(reitit.core.t_reitit$core32230.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"reitit.core/t_reitit$core32230");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core32230.
 */
reitit.core.__GT_t_reitit$core32230 = (function reitit$core$__GT_t_reitit$core32230(names__$1,data__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,opts__$1,vec__32217__$1,meta32231){
return (new reitit.core.t_reitit$core32230(names__$1,data__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,opts__$1,vec__32217__$1,meta32231));
});

}

return (new reitit.core.t_reitit$core32230(names,data,compiled_routes,routes,lookup,pl,nl,opts,vec__32217,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.lookup_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates a special prefix-tree router from resolved routes and optional
 *   expanded options. See [[router]] for available options, plus the following:
 * 
 *   | key                          | description |
 *   | -----------------------------|-------------|
 *   | `:reitit.trie/trie-compiler` | Optional trie-compiler.
 *   | `:reitit.trie/parameters`    | Optional function to create empty map(-like) path parameters value from sequence of keys.
 */
reitit.core.trie_router = (function reitit$core$trie_router(var_args){
var G__32238 = arguments.length;
switch (G__32238) {
case 1:
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.trie_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.trie_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var compiler = new cljs.core.Keyword("reitit.trie","trie-compiler","reitit.trie/trie-compiler",2125029755).cljs$core$IFn$_invoke$arity$2(opts,reitit.trie.compiler.call(null));
var names = reitit.impl.find_names.call(null,compiled_routes,opts);
var vec__32239 = cljs.core.reduce.call(null,(function (p__32242,p__32243){
var vec__32244 = p__32242;
var pl = cljs.core.nth.call(null,vec__32244,(0),null);
var nl = cljs.core.nth.call(null,vec__32244,(1),null);
var vec__32247 = p__32243;
var p = cljs.core.nth.call(null,vec__32247,(0),null);
var map__32250 = cljs.core.nth.call(null,vec__32247,(1),null);
var map__32250__$1 = (((((!((map__32250 == null))))?(((((map__32250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32250):map__32250);
var data = map__32250__$1;
var name = cljs.core.get.call(null,map__32250__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.call(null,vec__32247,(2),null);
var map__32252 = reitit.impl.parse.call(null,p,opts);
var map__32252__$1 = (((((!((map__32252 == null))))?(((((map__32252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32252):map__32252);
var route = map__32252__$1;
var path_params = cljs.core.get.call(null,map__32252__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = (function (p1__32236_SHARP_){
var temp__5733__auto__ = reitit.impl.path_for.call(null,route,p1__32236_SHARP_);
if(cljs.core.truth_(temp__5733__auto__)){
var path = temp__5733__auto__;
return reitit.core.__GT_Match.call(null,p,data,result,reitit.impl.url_decode_coll.call(null,p1__32236_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch.call(null,p,data,result,reitit.impl.url_decode_coll.call(null,p1__32236_SHARP_),path_params);
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.insert.call(null,pl,p,reitit.core.__GT_Match.call(null,p,data,result,null,null),opts),(cljs.core.truth_(name)?cljs.core.assoc.call(null,nl,name,f):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.call(null,vec__32239,(0),null);
var nl = cljs.core.nth.call(null,vec__32239,(1),null);
var matcher = reitit.trie.compile.call(null,pl,compiler);
var match_by_path = reitit.trie.path_matcher.call(null,matcher,compiler);
var lookup = reitit.impl.fast_map.call(null,nl);
var routes = reitit.impl.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core32254 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core32254 = (function (matcher,names,compiled_routes,routes,lookup,vec__32239,pl,nl,match_by_path,compiler,opts,meta32255){
this.matcher = matcher;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.vec__32239 = vec__32239;
this.pl = pl;
this.nl = nl;
this.match_by_path = match_by_path;
this.compiler = compiler;
this.opts = opts;
this.meta32255 = meta32255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core32254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32256,meta32255__$1){
var self__ = this;
var _32256__$1 = this;
return (new reitit.core.t_reitit$core32254(self__.matcher,self__.names,self__.compiled_routes,self__.routes,self__.lookup,self__.vec__32239,self__.pl,self__.nl,self__.match_by_path,self__.compiler,self__.opts,meta32255__$1));
}));

(reitit.core.t_reitit$core32254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32256){
var self__ = this;
var _32256__$1 = this;
return self__.meta32255;
}));

(reitit.core.t_reitit$core32254.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core32254.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"trie-router","trie-router",1876430760);
}));

(reitit.core.t_reitit$core32254.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core32254.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core32254.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core32254.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core32254.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = self__.match_by_path.call(null,path);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match)),new cljs.core.Keyword(null,"path","path",-188191168),path);
} else {
return null;
}
}));

(reitit.core.t_reitit$core32254.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return match.call(null,null);
} else {
return null;
}
}));

(reitit.core.t_reitit$core32254.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return match.call(null,reitit.impl.path_params.call(null,path_params));
} else {
return null;
}
}));

(reitit.core.t_reitit$core32254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"vec__32239","vec__32239",821626896,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"match-by-path","match-by-path",272707419,null),new cljs.core.Symbol(null,"compiler","compiler",1372604796,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta32255","meta32255",-1591888,null)], null);
}));

(reitit.core.t_reitit$core32254.cljs$lang$type = true);

(reitit.core.t_reitit$core32254.cljs$lang$ctorStr = "reitit.core/t_reitit$core32254");

(reitit.core.t_reitit$core32254.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"reitit.core/t_reitit$core32254");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core32254.
 */
reitit.core.__GT_t_reitit$core32254 = (function reitit$core$__GT_t_reitit$core32254(matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,vec__32239__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta32255){
return (new reitit.core.t_reitit$core32254(matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,vec__32239__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta32255));
});

}

return (new reitit.core.t_reitit$core32254(matcher,names,compiled_routes,routes,lookup,vec__32239,pl,nl,match_by_path,compiler,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.trie_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates a fast router of 1 static route(s) and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.single_static_path_router = (function reitit$core$single_static_path_router(var_args){
var G__32259 = arguments.length;
switch (G__32259) {
case 1:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.single_static_path_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.not_EQ_.call(null,cljs.core.count.call(null,compiled_routes),(1));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.some.call(null,reitit.impl.__GT_wild_route_QMARK_.call(null,opts),compiled_routes);
}
})())){
reitit.exception.fail_BANG_.call(null,[":single-static-path-router requires exactly 1 static route: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(compiled_routes)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var vec__32260 = reitit.impl.find_names.call(null,compiled_routes,opts);
var n = cljs.core.nth.call(null,vec__32260,(0),null);
var names = vec__32260;
var vec__32263 = compiled_routes;
var vec__32266 = cljs.core.nth.call(null,vec__32263,(0),null);
var p = cljs.core.nth.call(null,vec__32266,(0),null);
var data = cljs.core.nth.call(null,vec__32266,(1),null);
var result = cljs.core.nth.call(null,vec__32266,(2),null);
var p__$1 = p;
var match = reitit.core.__GT_Match.call(null,p__$1,data,result,cljs.core.PersistentArrayMap.EMPTY,p__$1);
var routes = reitit.impl.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core32269 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core32269 = (function (vec__32266,p,names,match,data,compiled_routes,routes,n,vec__32260,vec__32263,result,opts,meta32270){
this.vec__32266 = vec__32266;
this.p = p;
this.names = names;
this.match = match;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.n = n;
this.vec__32260 = vec__32260;
this.vec__32263 = vec__32263;
this.result = result;
this.opts = opts;
this.meta32270 = meta32270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core32269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32271,meta32270__$1){
var self__ = this;
var _32271__$1 = this;
return (new reitit.core.t_reitit$core32269(self__.vec__32266,self__.p,self__.names,self__.match,self__.data,self__.compiled_routes,self__.routes,self__.n,self__.vec__32260,self__.vec__32263,self__.result,self__.opts,meta32270__$1));
}));

(reitit.core.t_reitit$core32269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32271){
var self__ = this;
var _32271__$1 = this;
return self__.meta32270;
}));

(reitit.core.t_reitit$core32269.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core32269.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"single-static-path-router","single-static-path-router",-247523580);
}));

(reitit.core.t_reitit$core32269.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core32269.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core32269.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core32269.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core32269.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,self__.p,path)){
return self__.match;
} else {
return null;
}
}));

(reitit.core.t_reitit$core32269.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,self__.n,name)){
return self__.match;
} else {
return null;
}
}));

(reitit.core.t_reitit$core32269.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,self__.n,name)){
return reitit.impl.fast_assoc.call(null,self__.match,new cljs.core.Keyword(null,"path-params","path-params",-48130597),reitit.impl.path_params.call(null,path_params));
} else {
return null;
}
}));

(reitit.core.t_reitit$core32269.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec__32266","vec__32266",-902881054,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"vec__32260","vec__32260",-319998572,null),new cljs.core.Symbol(null,"vec__32263","vec__32263",-1266193451,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta32270","meta32270",-1319375408,null)], null);
}));

(reitit.core.t_reitit$core32269.cljs$lang$type = true);

(reitit.core.t_reitit$core32269.cljs$lang$ctorStr = "reitit.core/t_reitit$core32269");

(reitit.core.t_reitit$core32269.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"reitit.core/t_reitit$core32269");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core32269.
 */
reitit.core.__GT_t_reitit$core32269 = (function reitit$core$__GT_t_reitit$core32269(vec__32266__$1,p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,routes__$1,n__$1,vec__32260__$1,vec__32263__$1,result__$1,opts__$1,meta32270){
return (new reitit.core.t_reitit$core32269(vec__32266__$1,p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,routes__$1,n__$1,vec__32260__$1,vec__32263__$1,result__$1,opts__$1,meta32270));
});

}

return (new reitit.core.t_reitit$core32269(vec__32266,p__$1,names,match,data,compiled_routes,routes,n,vec__32260,vec__32263,result,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.single_static_path_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates two routers: [[lookup-router]] or [[single-static-path-router]] for
 *   static routes and [[segment-router]] for wildcard routes. All
 *   routes should be non-conflicting. Takes resolved routes and optional
 *   expanded options. See [[router]] for options.
 */
reitit.core.mixed_router = (function reitit$core$mixed_router(var_args){
var G__32274 = arguments.length;
switch (G__32274) {
case 1:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.mixed_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var map__32275 = cljs.core.group_by.call(null,reitit.impl.__GT_wild_route_QMARK_.call(null,opts),compiled_routes);
var map__32275__$1 = (((((!((map__32275 == null))))?(((((map__32275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32275):map__32275);
var wild = cljs.core.get.call(null,map__32275__$1,true);
var lookup = cljs.core.get.call(null,map__32275__$1,false);
var __GT_static_router = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,lookup)))?reitit.core.single_static_path_router:reitit.core.lookup_router);
var wildcard_router = reitit.core.trie_router.call(null,wild,opts);
var static_router = __GT_static_router.call(null,lookup,opts);
var names = reitit.impl.find_names.call(null,compiled_routes,opts);
var routes = reitit.impl.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core32277 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core32277 = (function (names,compiled_routes,routes,map__32275,__GT_static_router,lookup,wild,static_router,opts,wildcard_router,meta32278){
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.map__32275 = map__32275;
this.__GT_static_router = __GT_static_router;
this.lookup = lookup;
this.wild = wild;
this.static_router = static_router;
this.opts = opts;
this.wildcard_router = wildcard_router;
this.meta32278 = meta32278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core32277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32279,meta32278__$1){
var self__ = this;
var _32279__$1 = this;
return (new reitit.core.t_reitit$core32277(self__.names,self__.compiled_routes,self__.routes,self__.map__32275,self__.__GT_static_router,self__.lookup,self__.wild,self__.static_router,self__.opts,self__.wildcard_router,meta32278__$1));
}));

(reitit.core.t_reitit$core32277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32279){
var self__ = this;
var _32279__$1 = this;
return self__.meta32278;
}));

(reitit.core.t_reitit$core32277.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core32277.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"mixed-router","mixed-router",-1225013968);
}));

(reitit.core.t_reitit$core32277.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core32277.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core32277.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core32277.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core32277.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var or__4126__auto__ = reitit.core.match_by_path.call(null,self__.static_router,path);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return reitit.core.match_by_path.call(null,self__.wildcard_router,path);
}
}));

(reitit.core.t_reitit$core32277.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4126__auto__ = reitit.core.match_by_name.call(null,self__.static_router,name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return reitit.core.match_by_name.call(null,self__.wildcard_router,name);
}
}));

(reitit.core.t_reitit$core32277.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__4126__auto__ = reitit.core.match_by_name.call(null,self__.static_router,name,path_params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return reitit.core.match_by_name.call(null,self__.wildcard_router,name,path_params);
}
}));

(reitit.core.t_reitit$core32277.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"map__32275","map__32275",2047399948,null),new cljs.core.Symbol(null,"->static-router","->static-router",-1746495540,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"wild","wild",-2041111534,null),new cljs.core.Symbol(null,"static-router","static-router",439222930,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"wildcard-router","wildcard-router",553983966,null),new cljs.core.Symbol(null,"meta32278","meta32278",1540271848,null)], null);
}));

(reitit.core.t_reitit$core32277.cljs$lang$type = true);

(reitit.core.t_reitit$core32277.cljs$lang$ctorStr = "reitit.core/t_reitit$core32277");

(reitit.core.t_reitit$core32277.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"reitit.core/t_reitit$core32277");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core32277.
 */
reitit.core.__GT_t_reitit$core32277 = (function reitit$core$__GT_t_reitit$core32277(names__$1,compiled_routes__$1,routes__$1,map__32275__$2,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,opts__$1,wildcard_router__$1,meta32278){
return (new reitit.core.t_reitit$core32277(names__$1,compiled_routes__$1,routes__$1,map__32275__$2,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,opts__$1,wildcard_router__$1,meta32278));
});

}

return (new reitit.core.t_reitit$core32277(names,compiled_routes,routes,map__32275__$1,__GT_static_router,lookup,wild,static_router,opts,wildcard_router,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.mixed_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates two routers: [[mixed-router]] for non-conflicting routes
 *   and [[linear-router]] for conflicting routes. Takes resolved routes
 *   and optional expanded options. See [[router]] for options.
 */
reitit.core.quarantine_router = (function reitit$core$quarantine_router(var_args){
var G__32283 = arguments.length;
switch (G__32283) {
case 1:
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.quarantine_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var conflicting_paths = reitit.impl.conflicting_paths.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword("reitit.core","path-conflicting","reitit.core/path-conflicting",617644429).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return reitit.impl.path_conflicting_routes.call(null,compiled_routes,opts);
}
})());
var conflicting_QMARK_ = (function (p1__32281_SHARP_){
return cljs.core.contains_QMARK_.call(null,conflicting_paths,cljs.core.first.call(null,p1__32281_SHARP_));
});
var map__32284 = cljs.core.group_by.call(null,conflicting_QMARK_,compiled_routes);
var map__32284__$1 = (((((!((map__32284 == null))))?(((((map__32284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32284):map__32284);
var conflicting = cljs.core.get.call(null,map__32284__$1,true);
var non_conflicting = cljs.core.get.call(null,map__32284__$1,false);
var linear_router = reitit.core.linear_router.call(null,conflicting,opts);
var mixed_router = reitit.core.mixed_router.call(null,non_conflicting,opts);
var names = reitit.impl.find_names.call(null,compiled_routes,opts);
var routes = reitit.impl.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core32286 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core32286 = (function (non_conflicting,map__32284,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,mixed_router,linear_router,opts,meta32287){
this.non_conflicting = non_conflicting;
this.map__32284 = map__32284;
this.names = names;
this.conflicting_paths = conflicting_paths;
this.compiled_routes = compiled_routes;
this.conflicting = conflicting;
this.routes = routes;
this.conflicting_QMARK_ = conflicting_QMARK_;
this.mixed_router = mixed_router;
this.linear_router = linear_router;
this.opts = opts;
this.meta32287 = meta32287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core32286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32288,meta32287__$1){
var self__ = this;
var _32288__$1 = this;
return (new reitit.core.t_reitit$core32286(self__.non_conflicting,self__.map__32284,self__.names,self__.conflicting_paths,self__.compiled_routes,self__.conflicting,self__.routes,self__.conflicting_QMARK_,self__.mixed_router,self__.linear_router,self__.opts,meta32287__$1));
}));

(reitit.core.t_reitit$core32286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32288){
var self__ = this;
var _32288__$1 = this;
return self__.meta32287;
}));

(reitit.core.t_reitit$core32286.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core32286.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"quarantine-router","quarantine-router",-1548185225);
}));

(reitit.core.t_reitit$core32286.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core32286.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core32286.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core32286.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core32286.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var or__4126__auto__ = reitit.core.match_by_path.call(null,self__.mixed_router,path);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return reitit.core.match_by_path.call(null,self__.linear_router,path);
}
}));

(reitit.core.t_reitit$core32286.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4126__auto__ = reitit.core.match_by_name.call(null,self__.mixed_router,name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return reitit.core.match_by_name.call(null,self__.linear_router,name);
}
}));

(reitit.core.t_reitit$core32286.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__4126__auto__ = reitit.core.match_by_name.call(null,self__.mixed_router,name,path_params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return reitit.core.match_by_name.call(null,self__.linear_router,name,path_params);
}
}));

(reitit.core.t_reitit$core32286.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"non-conflicting","non-conflicting",1853515681,null),new cljs.core.Symbol(null,"map__32284","map__32284",-194101726,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"conflicting-paths","conflicting-paths",-1148454714,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"conflicting","conflicting",-650607353,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"conflicting?","conflicting?",-1064530835,null),new cljs.core.Symbol(null,"mixed-router","mixed-router",415517559,null),new cljs.core.Symbol(null,"linear-router","linear-router",885347355,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta32287","meta32287",65083961,null)], null);
}));

(reitit.core.t_reitit$core32286.cljs$lang$type = true);

(reitit.core.t_reitit$core32286.cljs$lang$ctorStr = "reitit.core/t_reitit$core32286");

(reitit.core.t_reitit$core32286.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"reitit.core/t_reitit$core32286");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core32286.
 */
reitit.core.__GT_t_reitit$core32286 = (function reitit$core$__GT_t_reitit$core32286(non_conflicting__$1,map__32284__$2,names__$1,conflicting_paths__$1,compiled_routes__$1,conflicting__$1,routes__$1,conflicting_QMARK___$1,mixed_router__$1,linear_router__$1,opts__$1,meta32287){
return (new reitit.core.t_reitit$core32286(non_conflicting__$1,map__32284__$2,names__$1,conflicting_paths__$1,compiled_routes__$1,conflicting__$1,routes__$1,conflicting_QMARK___$1,mixed_router__$1,linear_router__$1,opts__$1,meta32287));
});

}

return (new reitit.core.t_reitit$core32286(non_conflicting,map__32284__$1,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,mixed_router,linear_router,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.quarantine_router.cljs$lang$maxFixedArity = 2);

reitit.core.default_router_options = (function reitit$core$default_router_options(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"lookup","lookup",1225356838),(function reitit$core$default_router_options_$_lookup(p__32290,_){
var vec__32291 = p__32290;
var ___$1 = cljs.core.nth.call(null,vec__32291,(0),null);
var map__32294 = cljs.core.nth.call(null,vec__32291,(1),null);
var map__32294__$1 = (((((!((map__32294 == null))))?(((((map__32294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32294):map__32294);
var name = cljs.core.get.call(null,map__32294__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(name)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([name]);
} else {
return null;
}
}),new cljs.core.Keyword(null,"expand","expand",595248157),reitit.core.expand,new cljs.core.Keyword(null,"coerce","coerce",1917884504),(function reitit$core$default_router_options_$_coerce(route,_){
return route;
}),new cljs.core.Keyword(null,"compile","compile",608186429),(function reitit$core$default_router_options_$_compile(p__32296,_){
var vec__32297 = p__32296;
var ___$1 = cljs.core.nth.call(null,vec__32297,(0),null);
var map__32300 = cljs.core.nth.call(null,vec__32297,(1),null);
var map__32300__$1 = (((((!((map__32300 == null))))?(((((map__32300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32300):map__32300);
var handler = cljs.core.get.call(null,map__32300__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return handler;
}),new cljs.core.Keyword(null,"exception","exception",-335277064),reitit.exception.exception,new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816),(function reitit$core$default_router_options_$_throw_BANG_(conflicts){
return reitit.exception.fail_BANG_.call(null,new cljs.core.Keyword(null,"path-conflicts","path-conflicts",-1238675313),conflicts);
})], null);
});
/**
 * Create a [[Router]] from raw route data and optionally an options map.
 *   Selects implementation based on route details. The following options
 *   are available:
 * 
 *   | key          | description
 *   | -------------|-------------
 *   | `:path`      | Base-path for routes
 *   | `:routes`    | Initial resolved routes (default `[]`)
 *   | `:data`      | Initial route data (default `{}`)
 *   | `:spec`      | clojure.spec definition for a route data, see `reitit.spec` on how to use this
 *   | `:syntax`    | Path-parameter syntax as keyword or set of keywords (default #{:bracket :colon})
 *   | `:expand`    | Function of `arg opts => data` to expand route arg to route data (default `reitit.core/expand`)
 *   | `:coerce`    | Function of `route opts => route` to coerce resolved route, can throw or return `nil`
 *   | `:compile`   | Function of `route opts => result` to compile a route handler
 *   | `:validate`  | Function of `routes opts => ()` to validate route (data) via side-effects
 *   | `:conflicts` | Function of `{route #{route}} => ()` to handle conflicting routes
 *   | `:exception` | Function of `Exception => Exception ` to handle creation time exceptions (default `reitit.exception/exception`)
 *   | `:router`    | Function of `routes opts => router` to override the actual router implementation
 */
reitit.core.router = (function reitit$core$router(var_args){
var G__32303 = arguments.length;
switch (G__32303) {
case 1:
return reitit.core.router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.router.cljs$core$IFn$_invoke$arity$1 = (function (raw_routes){
return reitit.core.router.call(null,raw_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.router.cljs$core$IFn$_invoke$arity$2 = (function (raw_routes,opts){
var map__32304 = cljs.core.merge.call(null,reitit.core.default_router_options.call(null),opts);
var map__32304__$1 = (((((!((map__32304 == null))))?(((((map__32304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32304):map__32304);
var opts__$1 = map__32304__$1;
var router = cljs.core.get.call(null,map__32304__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var conflicts = cljs.core.get.call(null,map__32304__$1,new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816));
try{var routes = reitit.impl.resolve_routes.call(null,raw_routes,opts__$1);
var path_conflicting = ((cljs.core.not.call(null,(function (){var and__4115__auto__ = router;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,conflicts);
} else {
return and__4115__auto__;
}
})()))?reitit.impl.path_conflicting_routes.call(null,routes,opts__$1):null);
var name_conflicting = reitit.impl.name_conflicting_routes.call(null,routes);
var compiled_routes = reitit.impl.compile_routes.call(null,routes,opts__$1);
var wilds_QMARK_ = cljs.core.boolean$.call(null,cljs.core.some.call(null,reitit.impl.__GT_wild_route_QMARK_.call(null,opts__$1),compiled_routes));
var all_wilds_QMARK_ = cljs.core.every_QMARK_.call(null,reitit.impl.__GT_wild_route_QMARK_.call(null,opts__$1),compiled_routes);
var router__$1 = (cljs.core.truth_(router)?router:((((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,compiled_routes))) && ((!(wilds_QMARK_)))))?reitit.core.single_static_path_router:(cljs.core.truth_(path_conflicting)?reitit.core.quarantine_router:(((!(wilds_QMARK_)))?reitit.core.lookup_router:((all_wilds_QMARK_)?reitit.core.trie_router:reitit.core.mixed_router
)))));
var temp__5735__auto___32308 = (function (){var and__4115__auto__ = conflicts;
if(cljs.core.truth_(and__4115__auto__)){
return reitit.impl.unresolved_conflicts.call(null,path_conflicting);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto___32308)){
var conflict_report_32309 = temp__5735__auto___32308;
conflicts.call(null,conflict_report_32309);
} else {
}

if(cljs.core.truth_(name_conflicting)){
reitit.exception.fail_BANG_.call(null,new cljs.core.Keyword(null,"name-conflicts","name-conflicts",-2016386444),name_conflicting);
} else {
}

var temp__5735__auto___32310 = new cljs.core.Keyword(null,"validate","validate",-201300827).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5735__auto___32310)){
var validate_32311 = temp__5735__auto___32310;
validate_32311.call(null,compiled_routes,opts__$1);
} else {
}

return router__$1.call(null,compiled_routes,cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword("reitit.core","path-conflicting","reitit.core/path-conflicting",617644429),path_conflicting));
}catch (e32306){if((e32306 instanceof Error)){
var e = e32306;
throw cljs.core.get.call(null,opts__$1,new cljs.core.Keyword(null,"exception","exception",-335277064),cljs.core.identity).call(null,e);
} else {
throw e32306;

}
}}));

(reitit.core.router.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=core.js.map?rel=1602507663968
