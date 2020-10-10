// Compiled by ClojureScript 1.10.773 {}
goog.provide('crud.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('reagent.session');
goog.require('reitit.frontend');
goog.require('clerk.core');
goog.require('accountant.core');
goog.require('crud.ui');
crud.core.router = reitit.frontend.router.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"index","index",-1531685915)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/patient",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/create",new cljs.core.Keyword(null,"create-patient","create-patient",-540547639)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/edit",new cljs.core.Keyword(null,"edit-patient","edit-patient",1328239938)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/list",new cljs.core.Keyword(null,"list-patients","list-patients",-1311416577)], null)], null)], null));
crud.core.path_for = (function crud$core$path_for(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39509 = arguments.length;
var i__4737__auto___39510 = (0);
while(true){
if((i__4737__auto___39510 < len__4736__auto___39509)){
args__4742__auto__.push((arguments[i__4737__auto___39510]));

var G__39511 = (i__4737__auto___39510 + (1));
i__4737__auto___39510 = G__39511;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return crud.core.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(crud.core.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,p__39505){
var vec__39506 = p__39505;
var params = cljs.core.nth.call(null,vec__39506,(0),null);
if(cljs.core.truth_(params)){
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.call(null,crud.core.router,route,params));
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.call(null,crud.core.router,route));
}
}));

(crud.core.path_for.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(crud.core.path_for.cljs$lang$applyTo = (function (seq39503){
var G__39504 = cljs.core.first.call(null,seq39503);
var seq39503__$1 = cljs.core.next.call(null,seq39503);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39504,seq39503__$1);
}));

crud.core.page_for = (function crud$core$page_for(route){
var G__39512 = route;
var G__39512__$1 = (((G__39512 instanceof cljs.core.Keyword))?G__39512.fqn:null);
switch (G__39512__$1) {
case "index":
return new cljs.core.Var(function(){return crud.ui.main_page;},new cljs.core.Symbol("crud.ui","main-page","crud.ui/main-page",711879063,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"crud.ui","crud.ui",298016592,null),new cljs.core.Symbol(null,"main-page","main-page",1805768915,null),"src/cljs/crud/ui.cljs",16,1,4,4,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(crud.ui.main_page)?crud.ui.main_page.cljs$lang$test:null)]));

break;
case "create-patient":
return new cljs.core.Var(function(){return crud.ui.create_patient;},new cljs.core.Symbol("crud.ui","create-patient","crud.ui/create-patient",105102700,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"crud.ui","crud.ui",298016592,null),new cljs.core.Symbol(null,"create-patient","create-patient",1099983888,null),"src/cljs/crud/ui.cljs",21,1,53,53,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(crud.ui.create_patient)?crud.ui.create_patient.cljs$lang$test:null)]));

break;
case "edit-patient":
return new cljs.core.Var(function(){return crud.ui.edit_patient;},new cljs.core.Symbol("crud.ui","edit-patient","crud.ui/edit-patient",2126744261,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"crud.ui","crud.ui",298016592,null),new cljs.core.Symbol(null,"edit-patient","edit-patient",-1326195831,null),"src/cljs/crud/ui.cljs",19,1,15,15,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(crud.ui.edit_patient)?crud.ui.edit_patient.cljs$lang$test:null)]));

break;
case "list-patients":
return new cljs.core.Var(function(){return crud.ui.list_patients;},new cljs.core.Symbol("crud.ui","list-patients","crud.ui/list-patients",-714230774,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"crud.ui","crud.ui",298016592,null),new cljs.core.Symbol(null,"list-patients","list-patients",329114950,null),"src/cljs/crud/ui.cljs",20,1,19,19,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"users","users",926978822,null)], null)),null,(cljs.core.truth_(crud.ui.list_patients)?crud.ui.list_patients.cljs$lang$test:null)]));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39512__$1)].join('')));

}
});
crud.core.current_page = (function crud$core$current_page(){
return (function (){
var page = new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(reagent.session.get.call(null,new cljs.core.Keyword(null,"route","route",329891309)));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null);
});
});
crud.core.mount_root = (function crud$core$mount_root(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crud.core.current_page], null),document.getElementById("app"));
});
crud.core.init_BANG_ = (function crud$core$init_BANG_(){
clerk.core.initialize_BANG_.call(null);

accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
var match = reitit.frontend.match_by_path.call(null,crud.core.router,path);
var current_page = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
var route_params = new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match);
reagent.core.after_render.call(null,clerk.core.after_render_BANG_);

reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),crud.core.page_for.call(null,current_page),new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params], null));

return clerk.core.navigate_page_BANG_.call(null,path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return cljs.core.boolean$.call(null,reitit.frontend.match_by_path.call(null,crud.core.router,path));
})], null));

accountant.core.dispatch_current_BANG_.call(null);

return crud.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1602361234763
