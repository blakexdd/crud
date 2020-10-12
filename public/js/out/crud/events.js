// Compiled by ClojureScript 1.10.773 {}
goog.provide('crud.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('crud.db');
goog.require('day8.re_frame.http_fx');
goog.require('ajax.core');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"create-patient-event","create-patient-event",-848281107),(function (coeff,p__31460){
var vec__31461 = p__31460;
var _ = cljs.core.nth.call(null,vec__31461,(0),null);
var patient = cljs.core.nth.call(null,vec__31461,(1),null);
cljs.core.prn.call(null,"creating patient",patient);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8080/patient/create",new cljs.core.Keyword(null,"params","params",710516235),patient,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(5000),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.text_response_format.call(null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-patient-success","create-patient-success",-869610959)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-patient-failure","create-patient-failure",-1653020619)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"create-patient-success","create-patient-success",-869610959),cljs.core.prn.call(null,"Successfully created"),cljs.core.PersistentArrayMap.EMPTY);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"create-patient-failure","create-patient-failure",-1653020619),cljs.core.prn.call(null,"failed to create patient"),cljs.core.PersistentArrayMap.EMPTY);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return crud.db.state;
}));

//# sourceMappingURL=events.js.map?rel=1602514268427
