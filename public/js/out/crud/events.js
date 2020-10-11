// Compiled by ClojureScript 1.10.773 {}
goog.provide('crud.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('crud.db');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"create-patient-event","create-patient-event",-848281107),(function (db,_){
console.log("name ",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(db)," oms ",new cljs.core.Keyword(null,"oms","oms",670013468).cljs$core$IFn$_invoke$arity$1(db));

var c__28918__auto___49047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = (function (state_49041){
var state_val_49042 = (state_49041[(1)]);
if((state_val_49042 === (1))){
var inst_49024 = [new cljs.core.Keyword(null,"form-params","form-params",1884296467)];
var inst_49025 = [new cljs.core.Keyword(null,"fname","fname",1500291491),new cljs.core.Keyword(null,"gender","gender",-733930727),new cljs.core.Keyword(null,"bday","bday",-678372573),new cljs.core.Keyword(null,"adress","adress",2122457879),new cljs.core.Keyword(null,"oms","oms",670013468)];
var inst_49026 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(db);
var inst_49027 = new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(db);
var inst_49028 = new cljs.core.Keyword(null,"bday","bday",-678372573).cljs$core$IFn$_invoke$arity$1(db);
var inst_49029 = new cljs.core.Keyword(null,"adress","adress",2122457879).cljs$core$IFn$_invoke$arity$1(db);
var inst_49030 = new cljs.core.Keyword(null,"oms","oms",670013468).cljs$core$IFn$_invoke$arity$1(db);
var inst_49031 = [inst_49026,inst_49027,inst_49028,inst_49029,inst_49030];
var inst_49032 = cljs.core.PersistentHashMap.fromArrays(inst_49025,inst_49031);
var inst_49033 = [inst_49032];
var inst_49034 = cljs.core.PersistentHashMap.fromArrays(inst_49024,inst_49033);
var inst_49035 = cljs_http.client.post.call(null,"http://localhost:8080/patient/create",inst_49034);
var state_49041__$1 = state_49041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49041__$1,(2),inst_49035);
} else {
if((state_val_49042 === (2))){
var inst_49037 = (state_49041[(2)]);
var inst_49038 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_49037);
var inst_49039 = console.log("res",inst_49038);
var state_49041__$1 = state_49041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49041__$1,inst_49039);
} else {
return null;
}
}
});
return (function() {
var crud$events$state_machine__28824__auto__ = null;
var crud$events$state_machine__28824__auto____0 = (function (){
var statearr_49043 = [null,null,null,null,null,null,null];
(statearr_49043[(0)] = crud$events$state_machine__28824__auto__);

(statearr_49043[(1)] = (1));

return statearr_49043;
});
var crud$events$state_machine__28824__auto____1 = (function (state_49041){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_49041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e49044){if((e49044 instanceof Object)){
var ex__28827__auto__ = e49044;
var statearr_49045_49048 = state_49041;
(statearr_49045_49048[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49049 = state_49041;
state_49041 = G__49049;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
crud$events$state_machine__28824__auto__ = function(state_49041){
switch(arguments.length){
case 0:
return crud$events$state_machine__28824__auto____0.call(this);
case 1:
return crud$events$state_machine__28824__auto____1.call(this,state_49041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crud$events$state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = crud$events$state_machine__28824__auto____0;
crud$events$state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = crud$events$state_machine__28824__auto____1;
return crud$events$state_machine__28824__auto__;
})()
})();
var state__28920__auto__ = (function (){var statearr_49046 = f__28919__auto__.call(null);
(statearr_49046[(6)] = c__28918__auto___49047);

return statearr_49046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
}));


return cljs.core.PersistentArrayMap.EMPTY;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"name-changed","name-changed",-439252199),(function (db,p__49050){
var vec__49051 = p__49050;
var _ = cljs.core.nth.call(null,vec__49051,(0),null);
var name = cljs.core.nth.call(null,vec__49051,(1),null);
console.log("Name ",name);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"name","name",1843675177),name);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"gender-changed","gender-changed",-1099099091),(function (db,p__49054){
var vec__49055 = p__49054;
var _ = cljs.core.nth.call(null,vec__49055,(0),null);
var gender = cljs.core.nth.call(null,vec__49055,(1),null);
console.log("Gender ",gender);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"gender","gender",-733930727),gender);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"bday-changed","bday-changed",-453766661),(function (db,p__49058){
var vec__49059 = p__49058;
var _ = cljs.core.nth.call(null,vec__49059,(0),null);
var bday = cljs.core.nth.call(null,vec__49059,(1),null);
console.log("bday ",bday);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"bday","bday",-678372573),bday);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"bday-changed","bday-changed",-453766661),(function (db,p__49062){
var vec__49063 = p__49062;
var _ = cljs.core.nth.call(null,vec__49063,(0),null);
var bday = cljs.core.nth.call(null,vec__49063,(1),null);
console.log("bday ",bday);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"bday","bday",-678372573),bday);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"adress-changed","adress-changed",-1283577051),(function (db,p__49066){
var vec__49067 = p__49066;
var _ = cljs.core.nth.call(null,vec__49067,(0),null);
var adress = cljs.core.nth.call(null,vec__49067,(1),null);
console.log("adress ",adress);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"adress","adress",2122457879),adress);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"oms-changed","oms-changed",-2112464147),(function (db,p__49070){
var vec__49071 = p__49070;
var _ = cljs.core.nth.call(null,vec__49071,(0),null);
var oms = cljs.core.nth.call(null,vec__49071,(1),null);
console.log("oms ",oms);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"oms","oms",670013468),oms);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return crud.db.state;
}));

//# sourceMappingURL=events.js.map?rel=1602422047613
