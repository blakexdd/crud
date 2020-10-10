// Compiled by ClojureScript 1.10.773 {}
goog.provide('crud.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('crud.ui');
crud.core.mount_root = (function crud$core$mount_root(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crud.ui.main_page], null),document.getElementById("app"));
});
crud.core.init_BANG_ = (function crud$core$init_BANG_(){
return crud.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1602355388049
