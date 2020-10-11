// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28978 = arguments.length;
switch (G__28978) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28979 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28979 = (function (f,blockable,meta28980){
this.f = f;
this.blockable = blockable;
this.meta28980 = meta28980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28981,meta28980__$1){
var self__ = this;
var _28981__$1 = this;
return (new cljs.core.async.t_cljs$core$async28979(self__.f,self__.blockable,meta28980__$1));
}));

(cljs.core.async.t_cljs$core$async28979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28981){
var self__ = this;
var _28981__$1 = this;
return self__.meta28980;
}));

(cljs.core.async.t_cljs$core$async28979.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28979.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28979.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28979.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28979.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28980","meta28980",1629451235,null)], null);
}));

(cljs.core.async.t_cljs$core$async28979.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28979");

(cljs.core.async.t_cljs$core$async28979.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28979");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28979.
 */
cljs.core.async.__GT_t_cljs$core$async28979 = (function cljs$core$async$__GT_t_cljs$core$async28979(f__$1,blockable__$1,meta28980){
return (new cljs.core.async.t_cljs$core$async28979(f__$1,blockable__$1,meta28980));
});

}

return (new cljs.core.async.t_cljs$core$async28979(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__28985 = arguments.length;
switch (G__28985) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__28988 = arguments.length;
switch (G__28988) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__28991 = arguments.length;
switch (G__28991) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28993 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28993);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_28993);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__28995 = arguments.length;
switch (G__28995) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___28997 = n;
var x_28998 = (0);
while(true){
if((x_28998 < n__4613__auto___28997)){
(a[x_28998] = (0));

var G__28999 = (x_28998 + (1));
x_28998 = G__28999;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29000 = (i + (1));
i = G__29000;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29001 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29001 = (function (flag,meta29002){
this.flag = flag;
this.meta29002 = meta29002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29003,meta29002__$1){
var self__ = this;
var _29003__$1 = this;
return (new cljs.core.async.t_cljs$core$async29001(self__.flag,meta29002__$1));
}));

(cljs.core.async.t_cljs$core$async29001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29003){
var self__ = this;
var _29003__$1 = this;
return self__.meta29002;
}));

(cljs.core.async.t_cljs$core$async29001.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29001.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async29001.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29001.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29001.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29002","meta29002",-1530393133,null)], null);
}));

(cljs.core.async.t_cljs$core$async29001.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29001.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29001");

(cljs.core.async.t_cljs$core$async29001.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async29001");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29001.
 */
cljs.core.async.__GT_t_cljs$core$async29001 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29001(flag__$1,meta29002){
return (new cljs.core.async.t_cljs$core$async29001(flag__$1,meta29002));
});

}

return (new cljs.core.async.t_cljs$core$async29001(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29004 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29004 = (function (flag,cb,meta29005){
this.flag = flag;
this.cb = cb;
this.meta29005 = meta29005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29006,meta29005__$1){
var self__ = this;
var _29006__$1 = this;
return (new cljs.core.async.t_cljs$core$async29004(self__.flag,self__.cb,meta29005__$1));
}));

(cljs.core.async.t_cljs$core$async29004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29006){
var self__ = this;
var _29006__$1 = this;
return self__.meta29005;
}));

(cljs.core.async.t_cljs$core$async29004.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29004.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async29004.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29004.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29004.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29005","meta29005",-1410778506,null)], null);
}));

(cljs.core.async.t_cljs$core$async29004.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29004.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29004");

(cljs.core.async.t_cljs$core$async29004.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async29004");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29004.
 */
cljs.core.async.__GT_t_cljs$core$async29004 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29004(flag__$1,cb__$1,meta29005){
return (new cljs.core.async.t_cljs$core$async29004(flag__$1,cb__$1,meta29005));
});

}

return (new cljs.core.async.t_cljs$core$async29004(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29007_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29007_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29008_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29008_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29009 = (i + (1));
i = G__29009;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29015 = arguments.length;
var i__4737__auto___29016 = (0);
while(true){
if((i__4737__auto___29016 < len__4736__auto___29015)){
args__4742__auto__.push((arguments[i__4737__auto___29016]));

var G__29017 = (i__4737__auto___29016 + (1));
i__4737__auto___29016 = G__29017;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29012){
var map__29013 = p__29012;
var map__29013__$1 = (((((!((map__29013 == null))))?(((((map__29013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29013):map__29013);
var opts = map__29013__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29010){
var G__29011 = cljs.core.first.call(null,seq29010);
var seq29010__$1 = cljs.core.next.call(null,seq29010);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29011,seq29010__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29019 = arguments.length;
switch (G__29019) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28918__auto___29065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = (function (state_29043){
var state_val_29044 = (state_29043[(1)]);
if((state_val_29044 === (7))){
var inst_29039 = (state_29043[(2)]);
var state_29043__$1 = state_29043;
var statearr_29045_29066 = state_29043__$1;
(statearr_29045_29066[(2)] = inst_29039);

(statearr_29045_29066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29044 === (1))){
var state_29043__$1 = state_29043;
var statearr_29046_29067 = state_29043__$1;
(statearr_29046_29067[(2)] = null);

(statearr_29046_29067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29044 === (4))){
var inst_29022 = (state_29043[(7)]);
var inst_29022__$1 = (state_29043[(2)]);
var inst_29023 = (inst_29022__$1 == null);
var state_29043__$1 = (function (){var statearr_29047 = state_29043;
(statearr_29047[(7)] = inst_29022__$1);

return statearr_29047;
})();
if(cljs.core.truth_(inst_29023)){
var statearr_29048_29068 = state_29043__$1;
(statearr_29048_29068[(1)] = (5));

} else {
var statearr_29049_29069 = state_29043__$1;
(statearr_29049_29069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29044 === (13))){
var state_29043__$1 = state_29043;
var statearr_29050_29070 = state_29043__$1;
(statearr_29050_29070[(2)] = null);

(statearr_29050_29070[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29044 === (6))){
var inst_29022 = (state_29043[(7)]);
var state_29043__$1 = state_29043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29043__$1,(11),to,inst_29022);
} else {
if((state_val_29044 === (3))){
var inst_29041 = (state_29043[(2)]);
var state_29043__$1 = state_29043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29043__$1,inst_29041);
} else {
if((state_val_29044 === (12))){
var state_29043__$1 = state_29043;
var statearr_29051_29071 = state_29043__$1;
(statearr_29051_29071[(2)] = null);

(statearr_29051_29071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29044 === (2))){
var state_29043__$1 = state_29043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29043__$1,(4),from);
} else {
if((state_val_29044 === (11))){
var inst_29032 = (state_29043[(2)]);
var state_29043__$1 = state_29043;
if(cljs.core.truth_(inst_29032)){
var statearr_29052_29072 = state_29043__$1;
(statearr_29052_29072[(1)] = (12));

} else {
var statearr_29053_29073 = state_29043__$1;
(statearr_29053_29073[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29044 === (9))){
var state_29043__$1 = state_29043;
var statearr_29054_29074 = state_29043__$1;
(statearr_29054_29074[(2)] = null);

(statearr_29054_29074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29044 === (5))){
var state_29043__$1 = state_29043;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29055_29075 = state_29043__$1;
(statearr_29055_29075[(1)] = (8));

} else {
var statearr_29056_29076 = state_29043__$1;
(statearr_29056_29076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29044 === (14))){
var inst_29037 = (state_29043[(2)]);
var state_29043__$1 = state_29043;
var statearr_29057_29077 = state_29043__$1;
(statearr_29057_29077[(2)] = inst_29037);

(statearr_29057_29077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29044 === (10))){
var inst_29029 = (state_29043[(2)]);
var state_29043__$1 = state_29043;
var statearr_29058_29078 = state_29043__$1;
(statearr_29058_29078[(2)] = inst_29029);

(statearr_29058_29078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29044 === (8))){
var inst_29026 = cljs.core.async.close_BANG_.call(null,to);
var state_29043__$1 = state_29043;
var statearr_29059_29079 = state_29043__$1;
(statearr_29059_29079[(2)] = inst_29026);

(statearr_29059_29079[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__28824__auto__ = null;
var cljs$core$async$state_machine__28824__auto____0 = (function (){
var statearr_29060 = [null,null,null,null,null,null,null,null];
(statearr_29060[(0)] = cljs$core$async$state_machine__28824__auto__);

(statearr_29060[(1)] = (1));

return statearr_29060;
});
var cljs$core$async$state_machine__28824__auto____1 = (function (state_29043){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_29043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e29061){if((e29061 instanceof Object)){
var ex__28827__auto__ = e29061;
var statearr_29062_29080 = state_29043;
(statearr_29062_29080[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29081 = state_29043;
state_29043 = G__29081;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
cljs$core$async$state_machine__28824__auto__ = function(state_29043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28824__auto____1.call(this,state_29043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28824__auto____0;
cljs$core$async$state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28824__auto____1;
return cljs$core$async$state_machine__28824__auto__;
})()
})();
var state__28920__auto__ = (function (){var statearr_29063 = f__28919__auto__.call(null);
(statearr_29063[(6)] = c__28918__auto___29065);

return statearr_29063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__29082){
var vec__29083 = p__29082;
var v = cljs.core.nth.call(null,vec__29083,(0),null);
var p = cljs.core.nth.call(null,vec__29083,(1),null);
var job = vec__29083;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28918__auto___29254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = (function (state_29090){
var state_val_29091 = (state_29090[(1)]);
if((state_val_29091 === (1))){
var state_29090__$1 = state_29090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29090__$1,(2),res,v);
} else {
if((state_val_29091 === (2))){
var inst_29087 = (state_29090[(2)]);
var inst_29088 = cljs.core.async.close_BANG_.call(null,res);
var state_29090__$1 = (function (){var statearr_29092 = state_29090;
(statearr_29092[(7)] = inst_29087);

return statearr_29092;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29090__$1,inst_29088);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28824__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28824__auto____0 = (function (){
var statearr_29093 = [null,null,null,null,null,null,null,null];
(statearr_29093[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28824__auto__);

(statearr_29093[(1)] = (1));

return statearr_29093;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28824__auto____1 = (function (state_29090){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_29090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e29094){if((e29094 instanceof Object)){
var ex__28827__auto__ = e29094;
var statearr_29095_29255 = state_29090;
(statearr_29095_29255[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29256 = state_29090;
state_29090 = G__29256;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28824__auto__ = function(state_29090){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28824__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28824__auto____1.call(this,state_29090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28824__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28824__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28824__auto__;
})()
})();
var state__28920__auto__ = (function (){var statearr_29096 = f__28919__auto__.call(null);
(statearr_29096[(6)] = c__28918__auto___29254);

return statearr_29096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__29097){
var vec__29098 = p__29097;
var v = cljs.core.nth.call(null,vec__29098,(0),null);
var p = cljs.core.nth.call(null,vec__29098,(1),null);
var job = vec__29098;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___29257 = n;
var __29258 = (0);
while(true){
if((__29258 < n__4613__auto___29257)){
var G__29101_29259 = type;
var G__29101_29260__$1 = (((G__29101_29259 instanceof cljs.core.Keyword))?G__29101_29259.fqn:null);
switch (G__29101_29260__$1) {
case "compute":
var c__28918__auto___29262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29258,c__28918__auto___29262,G__29101_29259,G__29101_29260__$1,n__4613__auto___29257,jobs,results,process,async){
return (function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = ((function (__29258,c__28918__auto___29262,G__29101_29259,G__29101_29260__$1,n__4613__auto___29257,jobs,results,process,async){
return (function (state_29114){
var state_val_29115 = (state_29114[(1)]);
if((state_val_29115 === (1))){
var state_29114__$1 = state_29114;
var statearr_29116_29263 = state_29114__$1;
(statearr_29116_29263[(2)] = null);

(statearr_29116_29263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29115 === (2))){
var state_29114__$1 = state_29114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29114__$1,(4),jobs);
} else {
if((state_val_29115 === (3))){
var inst_29112 = (state_29114[(2)]);
var state_29114__$1 = state_29114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29114__$1,inst_29112);
} else {
if((state_val_29115 === (4))){
var inst_29104 = (state_29114[(2)]);
var inst_29105 = process.call(null,inst_29104);
var state_29114__$1 = state_29114;
if(cljs.core.truth_(inst_29105)){
var statearr_29117_29264 = state_29114__$1;
(statearr_29117_29264[(1)] = (5));

} else {
var statearr_29118_29265 = state_29114__$1;
(statearr_29118_29265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29115 === (5))){
var state_29114__$1 = state_29114;
var statearr_29119_29266 = state_29114__$1;
(statearr_29119_29266[(2)] = null);

(statearr_29119_29266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29115 === (6))){
var state_29114__$1 = state_29114;
var statearr_29120_29267 = state_29114__$1;
(statearr_29120_29267[(2)] = null);

(statearr_29120_29267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29115 === (7))){
var inst_29110 = (state_29114[(2)]);
var state_29114__$1 = state_29114;
var statearr_29121_29268 = state_29114__$1;
(statearr_29121_29268[(2)] = inst_29110);

(statearr_29121_29268[(1)] = (3));


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
});})(__29258,c__28918__auto___29262,G__29101_29259,G__29101_29260__$1,n__4613__auto___29257,jobs,results,process,async))
;
return ((function (__29258,switch__28823__auto__,c__28918__auto___29262,G__29101_29259,G__29101_29260__$1,n__4613__auto___29257,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28824__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28824__auto____0 = (function (){
var statearr_29122 = [null,null,null,null,null,null,null];
(statearr_29122[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28824__auto__);

(statearr_29122[(1)] = (1));

return statearr_29122;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28824__auto____1 = (function (state_29114){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_29114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e29123){if((e29123 instanceof Object)){
var ex__28827__auto__ = e29123;
var statearr_29124_29269 = state_29114;
(statearr_29124_29269[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29270 = state_29114;
state_29114 = G__29270;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28824__auto__ = function(state_29114){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28824__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28824__auto____1.call(this,state_29114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28824__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28824__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28824__auto__;
})()
;})(__29258,switch__28823__auto__,c__28918__auto___29262,G__29101_29259,G__29101_29260__$1,n__4613__auto___29257,jobs,results,process,async))
})();
var state__28920__auto__ = (function (){var statearr_29125 = f__28919__auto__.call(null);
(statearr_29125[(6)] = c__28918__auto___29262);

return statearr_29125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
});})(__29258,c__28918__auto___29262,G__29101_29259,G__29101_29260__$1,n__4613__auto___29257,jobs,results,process,async))
);


break;
case "async":
var c__28918__auto___29271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29258,c__28918__auto___29271,G__29101_29259,G__29101_29260__$1,n__4613__auto___29257,jobs,results,process,async){
return (function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = ((function (__29258,c__28918__auto___29271,G__29101_29259,G__29101_29260__$1,n__4613__auto___29257,jobs,results,process,async){
return (function (state_29138){
var state_val_29139 = (state_29138[(1)]);
if((state_val_29139 === (1))){
var state_29138__$1 = state_29138;
var statearr_29140_29272 = state_29138__$1;
(statearr_29140_29272[(2)] = null);

(statearr_29140_29272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29139 === (2))){
var state_29138__$1 = state_29138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29138__$1,(4),jobs);
} else {
if((state_val_29139 === (3))){
var inst_29136 = (state_29138[(2)]);
var state_29138__$1 = state_29138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29138__$1,inst_29136);
} else {
if((state_val_29139 === (4))){
var inst_29128 = (state_29138[(2)]);
var inst_29129 = async.call(null,inst_29128);
var state_29138__$1 = state_29138;
if(cljs.core.truth_(inst_29129)){
var statearr_29141_29273 = state_29138__$1;
(statearr_29141_29273[(1)] = (5));

} else {
var statearr_29142_29274 = state_29138__$1;
(statearr_29142_29274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29139 === (5))){
var state_29138__$1 = state_29138;
var statearr_29143_29275 = state_29138__$1;
(statearr_29143_29275[(2)] = null);

(statearr_29143_29275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29139 === (6))){
var state_29138__$1 = state_29138;
var statearr_29144_29276 = state_29138__$1;
(statearr_29144_29276[(2)] = null);

(statearr_29144_29276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29139 === (7))){
var inst_29134 = (state_29138[(2)]);
var state_29138__$1 = state_29138;
var statearr_29145_29277 = state_29138__$1;
(statearr_29145_29277[(2)] = inst_29134);

(statearr_29145_29277[(1)] = (3));


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
});})(__29258,c__28918__auto___29271,G__29101_29259,G__29101_29260__$1,n__4613__auto___29257,jobs,results,process,async))
;
return ((function (__29258,switch__28823__auto__,c__28918__auto___29271,G__29101_29259,G__29101_29260__$1,n__4613__auto___29257,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28824__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28824__auto____0 = (function (){
var statearr_29146 = [null,null,null,null,null,null,null];
(statearr_29146[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28824__auto__);

(statearr_29146[(1)] = (1));

return statearr_29146;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28824__auto____1 = (function (state_29138){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_29138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e29147){if((e29147 instanceof Object)){
var ex__28827__auto__ = e29147;
var statearr_29148_29278 = state_29138;
(statearr_29148_29278[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29279 = state_29138;
state_29138 = G__29279;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28824__auto__ = function(state_29138){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28824__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28824__auto____1.call(this,state_29138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28824__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28824__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28824__auto__;
})()
;})(__29258,switch__28823__auto__,c__28918__auto___29271,G__29101_29259,G__29101_29260__$1,n__4613__auto___29257,jobs,results,process,async))
})();
var state__28920__auto__ = (function (){var statearr_29149 = f__28919__auto__.call(null);
(statearr_29149[(6)] = c__28918__auto___29271);

return statearr_29149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
});})(__29258,c__28918__auto___29271,G__29101_29259,G__29101_29260__$1,n__4613__auto___29257,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29101_29260__$1)].join('')));

}

var G__29280 = (__29258 + (1));
__29258 = G__29280;
continue;
} else {
}
break;
}

var c__28918__auto___29281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = (function (state_29171){
var state_val_29172 = (state_29171[(1)]);
if((state_val_29172 === (7))){
var inst_29167 = (state_29171[(2)]);
var state_29171__$1 = state_29171;
var statearr_29173_29282 = state_29171__$1;
(statearr_29173_29282[(2)] = inst_29167);

(statearr_29173_29282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (1))){
var state_29171__$1 = state_29171;
var statearr_29174_29283 = state_29171__$1;
(statearr_29174_29283[(2)] = null);

(statearr_29174_29283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (4))){
var inst_29152 = (state_29171[(7)]);
var inst_29152__$1 = (state_29171[(2)]);
var inst_29153 = (inst_29152__$1 == null);
var state_29171__$1 = (function (){var statearr_29175 = state_29171;
(statearr_29175[(7)] = inst_29152__$1);

return statearr_29175;
})();
if(cljs.core.truth_(inst_29153)){
var statearr_29176_29284 = state_29171__$1;
(statearr_29176_29284[(1)] = (5));

} else {
var statearr_29177_29285 = state_29171__$1;
(statearr_29177_29285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (6))){
var inst_29152 = (state_29171[(7)]);
var inst_29157 = (state_29171[(8)]);
var inst_29157__$1 = cljs.core.async.chan.call(null,(1));
var inst_29158 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29159 = [inst_29152,inst_29157__$1];
var inst_29160 = (new cljs.core.PersistentVector(null,2,(5),inst_29158,inst_29159,null));
var state_29171__$1 = (function (){var statearr_29178 = state_29171;
(statearr_29178[(8)] = inst_29157__$1);

return statearr_29178;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29171__$1,(8),jobs,inst_29160);
} else {
if((state_val_29172 === (3))){
var inst_29169 = (state_29171[(2)]);
var state_29171__$1 = state_29171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29171__$1,inst_29169);
} else {
if((state_val_29172 === (2))){
var state_29171__$1 = state_29171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29171__$1,(4),from);
} else {
if((state_val_29172 === (9))){
var inst_29164 = (state_29171[(2)]);
var state_29171__$1 = (function (){var statearr_29179 = state_29171;
(statearr_29179[(9)] = inst_29164);

return statearr_29179;
})();
var statearr_29180_29286 = state_29171__$1;
(statearr_29180_29286[(2)] = null);

(statearr_29180_29286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (5))){
var inst_29155 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29171__$1 = state_29171;
var statearr_29181_29287 = state_29171__$1;
(statearr_29181_29287[(2)] = inst_29155);

(statearr_29181_29287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (8))){
var inst_29157 = (state_29171[(8)]);
var inst_29162 = (state_29171[(2)]);
var state_29171__$1 = (function (){var statearr_29182 = state_29171;
(statearr_29182[(10)] = inst_29162);

return statearr_29182;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29171__$1,(9),results,inst_29157);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28824__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28824__auto____0 = (function (){
var statearr_29183 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29183[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28824__auto__);

(statearr_29183[(1)] = (1));

return statearr_29183;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28824__auto____1 = (function (state_29171){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_29171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e29184){if((e29184 instanceof Object)){
var ex__28827__auto__ = e29184;
var statearr_29185_29288 = state_29171;
(statearr_29185_29288[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29289 = state_29171;
state_29171 = G__29289;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28824__auto__ = function(state_29171){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28824__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28824__auto____1.call(this,state_29171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28824__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28824__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28824__auto__;
})()
})();
var state__28920__auto__ = (function (){var statearr_29186 = f__28919__auto__.call(null);
(statearr_29186[(6)] = c__28918__auto___29281);

return statearr_29186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
}));


var c__28918__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = (function (state_29224){
var state_val_29225 = (state_29224[(1)]);
if((state_val_29225 === (7))){
var inst_29220 = (state_29224[(2)]);
var state_29224__$1 = state_29224;
var statearr_29226_29290 = state_29224__$1;
(statearr_29226_29290[(2)] = inst_29220);

(statearr_29226_29290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (20))){
var state_29224__$1 = state_29224;
var statearr_29227_29291 = state_29224__$1;
(statearr_29227_29291[(2)] = null);

(statearr_29227_29291[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (1))){
var state_29224__$1 = state_29224;
var statearr_29228_29292 = state_29224__$1;
(statearr_29228_29292[(2)] = null);

(statearr_29228_29292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (4))){
var inst_29189 = (state_29224[(7)]);
var inst_29189__$1 = (state_29224[(2)]);
var inst_29190 = (inst_29189__$1 == null);
var state_29224__$1 = (function (){var statearr_29229 = state_29224;
(statearr_29229[(7)] = inst_29189__$1);

return statearr_29229;
})();
if(cljs.core.truth_(inst_29190)){
var statearr_29230_29293 = state_29224__$1;
(statearr_29230_29293[(1)] = (5));

} else {
var statearr_29231_29294 = state_29224__$1;
(statearr_29231_29294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (15))){
var inst_29202 = (state_29224[(8)]);
var state_29224__$1 = state_29224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29224__$1,(18),to,inst_29202);
} else {
if((state_val_29225 === (21))){
var inst_29215 = (state_29224[(2)]);
var state_29224__$1 = state_29224;
var statearr_29232_29295 = state_29224__$1;
(statearr_29232_29295[(2)] = inst_29215);

(statearr_29232_29295[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (13))){
var inst_29217 = (state_29224[(2)]);
var state_29224__$1 = (function (){var statearr_29233 = state_29224;
(statearr_29233[(9)] = inst_29217);

return statearr_29233;
})();
var statearr_29234_29296 = state_29224__$1;
(statearr_29234_29296[(2)] = null);

(statearr_29234_29296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (6))){
var inst_29189 = (state_29224[(7)]);
var state_29224__$1 = state_29224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29224__$1,(11),inst_29189);
} else {
if((state_val_29225 === (17))){
var inst_29210 = (state_29224[(2)]);
var state_29224__$1 = state_29224;
if(cljs.core.truth_(inst_29210)){
var statearr_29235_29297 = state_29224__$1;
(statearr_29235_29297[(1)] = (19));

} else {
var statearr_29236_29298 = state_29224__$1;
(statearr_29236_29298[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (3))){
var inst_29222 = (state_29224[(2)]);
var state_29224__$1 = state_29224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29224__$1,inst_29222);
} else {
if((state_val_29225 === (12))){
var inst_29199 = (state_29224[(10)]);
var state_29224__$1 = state_29224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29224__$1,(14),inst_29199);
} else {
if((state_val_29225 === (2))){
var state_29224__$1 = state_29224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29224__$1,(4),results);
} else {
if((state_val_29225 === (19))){
var state_29224__$1 = state_29224;
var statearr_29237_29299 = state_29224__$1;
(statearr_29237_29299[(2)] = null);

(statearr_29237_29299[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (11))){
var inst_29199 = (state_29224[(2)]);
var state_29224__$1 = (function (){var statearr_29238 = state_29224;
(statearr_29238[(10)] = inst_29199);

return statearr_29238;
})();
var statearr_29239_29300 = state_29224__$1;
(statearr_29239_29300[(2)] = null);

(statearr_29239_29300[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (9))){
var state_29224__$1 = state_29224;
var statearr_29240_29301 = state_29224__$1;
(statearr_29240_29301[(2)] = null);

(statearr_29240_29301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (5))){
var state_29224__$1 = state_29224;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29241_29302 = state_29224__$1;
(statearr_29241_29302[(1)] = (8));

} else {
var statearr_29242_29303 = state_29224__$1;
(statearr_29242_29303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (14))){
var inst_29202 = (state_29224[(8)]);
var inst_29202__$1 = (state_29224[(2)]);
var inst_29203 = (inst_29202__$1 == null);
var inst_29204 = cljs.core.not.call(null,inst_29203);
var state_29224__$1 = (function (){var statearr_29243 = state_29224;
(statearr_29243[(8)] = inst_29202__$1);

return statearr_29243;
})();
if(inst_29204){
var statearr_29244_29304 = state_29224__$1;
(statearr_29244_29304[(1)] = (15));

} else {
var statearr_29245_29305 = state_29224__$1;
(statearr_29245_29305[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (16))){
var state_29224__$1 = state_29224;
var statearr_29246_29306 = state_29224__$1;
(statearr_29246_29306[(2)] = false);

(statearr_29246_29306[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (10))){
var inst_29196 = (state_29224[(2)]);
var state_29224__$1 = state_29224;
var statearr_29247_29307 = state_29224__$1;
(statearr_29247_29307[(2)] = inst_29196);

(statearr_29247_29307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (18))){
var inst_29207 = (state_29224[(2)]);
var state_29224__$1 = state_29224;
var statearr_29248_29308 = state_29224__$1;
(statearr_29248_29308[(2)] = inst_29207);

(statearr_29248_29308[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (8))){
var inst_29193 = cljs.core.async.close_BANG_.call(null,to);
var state_29224__$1 = state_29224;
var statearr_29249_29309 = state_29224__$1;
(statearr_29249_29309[(2)] = inst_29193);

(statearr_29249_29309[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28824__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28824__auto____0 = (function (){
var statearr_29250 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29250[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28824__auto__);

(statearr_29250[(1)] = (1));

return statearr_29250;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28824__auto____1 = (function (state_29224){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_29224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e29251){if((e29251 instanceof Object)){
var ex__28827__auto__ = e29251;
var statearr_29252_29310 = state_29224;
(statearr_29252_29310[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29311 = state_29224;
state_29224 = G__29311;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28824__auto__ = function(state_29224){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28824__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28824__auto____1.call(this,state_29224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28824__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28824__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28824__auto__;
})()
})();
var state__28920__auto__ = (function (){var statearr_29253 = f__28919__auto__.call(null);
(statearr_29253[(6)] = c__28918__auto__);

return statearr_29253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
}));

return c__28918__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__29313 = arguments.length;
switch (G__29313) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__29316 = arguments.length;
switch (G__29316) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__29319 = arguments.length;
switch (G__29319) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28918__auto___29368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = (function (state_29345){
var state_val_29346 = (state_29345[(1)]);
if((state_val_29346 === (7))){
var inst_29341 = (state_29345[(2)]);
var state_29345__$1 = state_29345;
var statearr_29347_29369 = state_29345__$1;
(statearr_29347_29369[(2)] = inst_29341);

(statearr_29347_29369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29346 === (1))){
var state_29345__$1 = state_29345;
var statearr_29348_29370 = state_29345__$1;
(statearr_29348_29370[(2)] = null);

(statearr_29348_29370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29346 === (4))){
var inst_29322 = (state_29345[(7)]);
var inst_29322__$1 = (state_29345[(2)]);
var inst_29323 = (inst_29322__$1 == null);
var state_29345__$1 = (function (){var statearr_29349 = state_29345;
(statearr_29349[(7)] = inst_29322__$1);

return statearr_29349;
})();
if(cljs.core.truth_(inst_29323)){
var statearr_29350_29371 = state_29345__$1;
(statearr_29350_29371[(1)] = (5));

} else {
var statearr_29351_29372 = state_29345__$1;
(statearr_29351_29372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29346 === (13))){
var state_29345__$1 = state_29345;
var statearr_29352_29373 = state_29345__$1;
(statearr_29352_29373[(2)] = null);

(statearr_29352_29373[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29346 === (6))){
var inst_29322 = (state_29345[(7)]);
var inst_29328 = p.call(null,inst_29322);
var state_29345__$1 = state_29345;
if(cljs.core.truth_(inst_29328)){
var statearr_29353_29374 = state_29345__$1;
(statearr_29353_29374[(1)] = (9));

} else {
var statearr_29354_29375 = state_29345__$1;
(statearr_29354_29375[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29346 === (3))){
var inst_29343 = (state_29345[(2)]);
var state_29345__$1 = state_29345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29345__$1,inst_29343);
} else {
if((state_val_29346 === (12))){
var state_29345__$1 = state_29345;
var statearr_29355_29376 = state_29345__$1;
(statearr_29355_29376[(2)] = null);

(statearr_29355_29376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29346 === (2))){
var state_29345__$1 = state_29345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29345__$1,(4),ch);
} else {
if((state_val_29346 === (11))){
var inst_29322 = (state_29345[(7)]);
var inst_29332 = (state_29345[(2)]);
var state_29345__$1 = state_29345;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29345__$1,(8),inst_29332,inst_29322);
} else {
if((state_val_29346 === (9))){
var state_29345__$1 = state_29345;
var statearr_29356_29377 = state_29345__$1;
(statearr_29356_29377[(2)] = tc);

(statearr_29356_29377[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29346 === (5))){
var inst_29325 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29326 = cljs.core.async.close_BANG_.call(null,fc);
var state_29345__$1 = (function (){var statearr_29357 = state_29345;
(statearr_29357[(8)] = inst_29325);

return statearr_29357;
})();
var statearr_29358_29378 = state_29345__$1;
(statearr_29358_29378[(2)] = inst_29326);

(statearr_29358_29378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29346 === (14))){
var inst_29339 = (state_29345[(2)]);
var state_29345__$1 = state_29345;
var statearr_29359_29379 = state_29345__$1;
(statearr_29359_29379[(2)] = inst_29339);

(statearr_29359_29379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29346 === (10))){
var state_29345__$1 = state_29345;
var statearr_29360_29380 = state_29345__$1;
(statearr_29360_29380[(2)] = fc);

(statearr_29360_29380[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29346 === (8))){
var inst_29334 = (state_29345[(2)]);
var state_29345__$1 = state_29345;
if(cljs.core.truth_(inst_29334)){
var statearr_29361_29381 = state_29345__$1;
(statearr_29361_29381[(1)] = (12));

} else {
var statearr_29362_29382 = state_29345__$1;
(statearr_29362_29382[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__28824__auto__ = null;
var cljs$core$async$state_machine__28824__auto____0 = (function (){
var statearr_29363 = [null,null,null,null,null,null,null,null,null];
(statearr_29363[(0)] = cljs$core$async$state_machine__28824__auto__);

(statearr_29363[(1)] = (1));

return statearr_29363;
});
var cljs$core$async$state_machine__28824__auto____1 = (function (state_29345){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_29345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e29364){if((e29364 instanceof Object)){
var ex__28827__auto__ = e29364;
var statearr_29365_29383 = state_29345;
(statearr_29365_29383[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29384 = state_29345;
state_29345 = G__29384;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
cljs$core$async$state_machine__28824__auto__ = function(state_29345){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28824__auto____1.call(this,state_29345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28824__auto____0;
cljs$core$async$state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28824__auto____1;
return cljs$core$async$state_machine__28824__auto__;
})()
})();
var state__28920__auto__ = (function (){var statearr_29366 = f__28919__auto__.call(null);
(statearr_29366[(6)] = c__28918__auto___29368);

return statearr_29366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28918__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = (function (state_29405){
var state_val_29406 = (state_29405[(1)]);
if((state_val_29406 === (7))){
var inst_29401 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29407_29425 = state_29405__$1;
(statearr_29407_29425[(2)] = inst_29401);

(statearr_29407_29425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (1))){
var inst_29385 = init;
var state_29405__$1 = (function (){var statearr_29408 = state_29405;
(statearr_29408[(7)] = inst_29385);

return statearr_29408;
})();
var statearr_29409_29426 = state_29405__$1;
(statearr_29409_29426[(2)] = null);

(statearr_29409_29426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (4))){
var inst_29388 = (state_29405[(8)]);
var inst_29388__$1 = (state_29405[(2)]);
var inst_29389 = (inst_29388__$1 == null);
var state_29405__$1 = (function (){var statearr_29410 = state_29405;
(statearr_29410[(8)] = inst_29388__$1);

return statearr_29410;
})();
if(cljs.core.truth_(inst_29389)){
var statearr_29411_29427 = state_29405__$1;
(statearr_29411_29427[(1)] = (5));

} else {
var statearr_29412_29428 = state_29405__$1;
(statearr_29412_29428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (6))){
var inst_29388 = (state_29405[(8)]);
var inst_29385 = (state_29405[(7)]);
var inst_29392 = (state_29405[(9)]);
var inst_29392__$1 = f.call(null,inst_29385,inst_29388);
var inst_29393 = cljs.core.reduced_QMARK_.call(null,inst_29392__$1);
var state_29405__$1 = (function (){var statearr_29413 = state_29405;
(statearr_29413[(9)] = inst_29392__$1);

return statearr_29413;
})();
if(inst_29393){
var statearr_29414_29429 = state_29405__$1;
(statearr_29414_29429[(1)] = (8));

} else {
var statearr_29415_29430 = state_29405__$1;
(statearr_29415_29430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (3))){
var inst_29403 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29405__$1,inst_29403);
} else {
if((state_val_29406 === (2))){
var state_29405__$1 = state_29405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29405__$1,(4),ch);
} else {
if((state_val_29406 === (9))){
var inst_29392 = (state_29405[(9)]);
var inst_29385 = inst_29392;
var state_29405__$1 = (function (){var statearr_29416 = state_29405;
(statearr_29416[(7)] = inst_29385);

return statearr_29416;
})();
var statearr_29417_29431 = state_29405__$1;
(statearr_29417_29431[(2)] = null);

(statearr_29417_29431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (5))){
var inst_29385 = (state_29405[(7)]);
var state_29405__$1 = state_29405;
var statearr_29418_29432 = state_29405__$1;
(statearr_29418_29432[(2)] = inst_29385);

(statearr_29418_29432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (10))){
var inst_29399 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29419_29433 = state_29405__$1;
(statearr_29419_29433[(2)] = inst_29399);

(statearr_29419_29433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (8))){
var inst_29392 = (state_29405[(9)]);
var inst_29395 = cljs.core.deref.call(null,inst_29392);
var state_29405__$1 = state_29405;
var statearr_29420_29434 = state_29405__$1;
(statearr_29420_29434[(2)] = inst_29395);

(statearr_29420_29434[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__28824__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28824__auto____0 = (function (){
var statearr_29421 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29421[(0)] = cljs$core$async$reduce_$_state_machine__28824__auto__);

(statearr_29421[(1)] = (1));

return statearr_29421;
});
var cljs$core$async$reduce_$_state_machine__28824__auto____1 = (function (state_29405){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_29405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e29422){if((e29422 instanceof Object)){
var ex__28827__auto__ = e29422;
var statearr_29423_29435 = state_29405;
(statearr_29423_29435[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29436 = state_29405;
state_29405 = G__29436;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28824__auto__ = function(state_29405){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28824__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28824__auto____1.call(this,state_29405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28824__auto____0;
cljs$core$async$reduce_$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28824__auto____1;
return cljs$core$async$reduce_$_state_machine__28824__auto__;
})()
})();
var state__28920__auto__ = (function (){var statearr_29424 = f__28919__auto__.call(null);
(statearr_29424[(6)] = c__28918__auto__);

return statearr_29424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
}));

return c__28918__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28918__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = (function (state_29442){
var state_val_29443 = (state_29442[(1)]);
if((state_val_29443 === (1))){
var inst_29437 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_29442__$1 = state_29442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29442__$1,(2),inst_29437);
} else {
if((state_val_29443 === (2))){
var inst_29439 = (state_29442[(2)]);
var inst_29440 = f__$1.call(null,inst_29439);
var state_29442__$1 = state_29442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29442__$1,inst_29440);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28824__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28824__auto____0 = (function (){
var statearr_29444 = [null,null,null,null,null,null,null];
(statearr_29444[(0)] = cljs$core$async$transduce_$_state_machine__28824__auto__);

(statearr_29444[(1)] = (1));

return statearr_29444;
});
var cljs$core$async$transduce_$_state_machine__28824__auto____1 = (function (state_29442){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_29442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e29445){if((e29445 instanceof Object)){
var ex__28827__auto__ = e29445;
var statearr_29446_29448 = state_29442;
(statearr_29446_29448[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29449 = state_29442;
state_29442 = G__29449;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28824__auto__ = function(state_29442){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28824__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28824__auto____1.call(this,state_29442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28824__auto____0;
cljs$core$async$transduce_$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28824__auto____1;
return cljs$core$async$transduce_$_state_machine__28824__auto__;
})()
})();
var state__28920__auto__ = (function (){var statearr_29447 = f__28919__auto__.call(null);
(statearr_29447[(6)] = c__28918__auto__);

return statearr_29447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
}));

return c__28918__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__29451 = arguments.length;
switch (G__29451) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28918__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = (function (state_29476){
var state_val_29477 = (state_29476[(1)]);
if((state_val_29477 === (7))){
var inst_29458 = (state_29476[(2)]);
var state_29476__$1 = state_29476;
var statearr_29478_29499 = state_29476__$1;
(statearr_29478_29499[(2)] = inst_29458);

(statearr_29478_29499[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29477 === (1))){
var inst_29452 = cljs.core.seq.call(null,coll);
var inst_29453 = inst_29452;
var state_29476__$1 = (function (){var statearr_29479 = state_29476;
(statearr_29479[(7)] = inst_29453);

return statearr_29479;
})();
var statearr_29480_29500 = state_29476__$1;
(statearr_29480_29500[(2)] = null);

(statearr_29480_29500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29477 === (4))){
var inst_29453 = (state_29476[(7)]);
var inst_29456 = cljs.core.first.call(null,inst_29453);
var state_29476__$1 = state_29476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29476__$1,(7),ch,inst_29456);
} else {
if((state_val_29477 === (13))){
var inst_29470 = (state_29476[(2)]);
var state_29476__$1 = state_29476;
var statearr_29481_29501 = state_29476__$1;
(statearr_29481_29501[(2)] = inst_29470);

(statearr_29481_29501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29477 === (6))){
var inst_29461 = (state_29476[(2)]);
var state_29476__$1 = state_29476;
if(cljs.core.truth_(inst_29461)){
var statearr_29482_29502 = state_29476__$1;
(statearr_29482_29502[(1)] = (8));

} else {
var statearr_29483_29503 = state_29476__$1;
(statearr_29483_29503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29477 === (3))){
var inst_29474 = (state_29476[(2)]);
var state_29476__$1 = state_29476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29476__$1,inst_29474);
} else {
if((state_val_29477 === (12))){
var state_29476__$1 = state_29476;
var statearr_29484_29504 = state_29476__$1;
(statearr_29484_29504[(2)] = null);

(statearr_29484_29504[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29477 === (2))){
var inst_29453 = (state_29476[(7)]);
var state_29476__$1 = state_29476;
if(cljs.core.truth_(inst_29453)){
var statearr_29485_29505 = state_29476__$1;
(statearr_29485_29505[(1)] = (4));

} else {
var statearr_29486_29506 = state_29476__$1;
(statearr_29486_29506[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29477 === (11))){
var inst_29467 = cljs.core.async.close_BANG_.call(null,ch);
var state_29476__$1 = state_29476;
var statearr_29487_29507 = state_29476__$1;
(statearr_29487_29507[(2)] = inst_29467);

(statearr_29487_29507[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29477 === (9))){
var state_29476__$1 = state_29476;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29488_29508 = state_29476__$1;
(statearr_29488_29508[(1)] = (11));

} else {
var statearr_29489_29509 = state_29476__$1;
(statearr_29489_29509[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29477 === (5))){
var inst_29453 = (state_29476[(7)]);
var state_29476__$1 = state_29476;
var statearr_29490_29510 = state_29476__$1;
(statearr_29490_29510[(2)] = inst_29453);

(statearr_29490_29510[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29477 === (10))){
var inst_29472 = (state_29476[(2)]);
var state_29476__$1 = state_29476;
var statearr_29491_29511 = state_29476__$1;
(statearr_29491_29511[(2)] = inst_29472);

(statearr_29491_29511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29477 === (8))){
var inst_29453 = (state_29476[(7)]);
var inst_29463 = cljs.core.next.call(null,inst_29453);
var inst_29453__$1 = inst_29463;
var state_29476__$1 = (function (){var statearr_29492 = state_29476;
(statearr_29492[(7)] = inst_29453__$1);

return statearr_29492;
})();
var statearr_29493_29512 = state_29476__$1;
(statearr_29493_29512[(2)] = null);

(statearr_29493_29512[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28824__auto__ = null;
var cljs$core$async$state_machine__28824__auto____0 = (function (){
var statearr_29494 = [null,null,null,null,null,null,null,null];
(statearr_29494[(0)] = cljs$core$async$state_machine__28824__auto__);

(statearr_29494[(1)] = (1));

return statearr_29494;
});
var cljs$core$async$state_machine__28824__auto____1 = (function (state_29476){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_29476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e29495){if((e29495 instanceof Object)){
var ex__28827__auto__ = e29495;
var statearr_29496_29513 = state_29476;
(statearr_29496_29513[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29514 = state_29476;
state_29476 = G__29514;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
cljs$core$async$state_machine__28824__auto__ = function(state_29476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28824__auto____1.call(this,state_29476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28824__auto____0;
cljs$core$async$state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28824__auto____1;
return cljs$core$async$state_machine__28824__auto__;
})()
})();
var state__28920__auto__ = (function (){var statearr_29497 = f__28919__auto__.call(null);
(statearr_29497[(6)] = c__28918__auto__);

return statearr_29497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
}));

return c__28918__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_29515 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_29515.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_29516 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_29516.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_29517 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_29517.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_29518 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_29518.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29519 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29519 = (function (ch,cs,meta29520){
this.ch = ch;
this.cs = cs;
this.meta29520 = meta29520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29521,meta29520__$1){
var self__ = this;
var _29521__$1 = this;
return (new cljs.core.async.t_cljs$core$async29519(self__.ch,self__.cs,meta29520__$1));
}));

(cljs.core.async.t_cljs$core$async29519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29521){
var self__ = this;
var _29521__$1 = this;
return self__.meta29520;
}));

(cljs.core.async.t_cljs$core$async29519.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29519.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29519.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29519.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async29519.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async29519.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async29519.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29520","meta29520",1628191647,null)], null);
}));

(cljs.core.async.t_cljs$core$async29519.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29519.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29519");

(cljs.core.async.t_cljs$core$async29519.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async29519");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29519.
 */
cljs.core.async.__GT_t_cljs$core$async29519 = (function cljs$core$async$mult_$___GT_t_cljs$core$async29519(ch__$1,cs__$1,meta29520){
return (new cljs.core.async.t_cljs$core$async29519(ch__$1,cs__$1,meta29520));
});

}

return (new cljs.core.async.t_cljs$core$async29519(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__28918__auto___29741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = (function (state_29656){
var state_val_29657 = (state_29656[(1)]);
if((state_val_29657 === (7))){
var inst_29652 = (state_29656[(2)]);
var state_29656__$1 = state_29656;
var statearr_29658_29742 = state_29656__$1;
(statearr_29658_29742[(2)] = inst_29652);

(statearr_29658_29742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (20))){
var inst_29555 = (state_29656[(7)]);
var inst_29567 = cljs.core.first.call(null,inst_29555);
var inst_29568 = cljs.core.nth.call(null,inst_29567,(0),null);
var inst_29569 = cljs.core.nth.call(null,inst_29567,(1),null);
var state_29656__$1 = (function (){var statearr_29659 = state_29656;
(statearr_29659[(8)] = inst_29568);

return statearr_29659;
})();
if(cljs.core.truth_(inst_29569)){
var statearr_29660_29743 = state_29656__$1;
(statearr_29660_29743[(1)] = (22));

} else {
var statearr_29661_29744 = state_29656__$1;
(statearr_29661_29744[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (27))){
var inst_29599 = (state_29656[(9)]);
var inst_29524 = (state_29656[(10)]);
var inst_29604 = (state_29656[(11)]);
var inst_29597 = (state_29656[(12)]);
var inst_29604__$1 = cljs.core._nth.call(null,inst_29597,inst_29599);
var inst_29605 = cljs.core.async.put_BANG_.call(null,inst_29604__$1,inst_29524,done);
var state_29656__$1 = (function (){var statearr_29662 = state_29656;
(statearr_29662[(11)] = inst_29604__$1);

return statearr_29662;
})();
if(cljs.core.truth_(inst_29605)){
var statearr_29663_29745 = state_29656__$1;
(statearr_29663_29745[(1)] = (30));

} else {
var statearr_29664_29746 = state_29656__$1;
(statearr_29664_29746[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (1))){
var state_29656__$1 = state_29656;
var statearr_29665_29747 = state_29656__$1;
(statearr_29665_29747[(2)] = null);

(statearr_29665_29747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (24))){
var inst_29555 = (state_29656[(7)]);
var inst_29574 = (state_29656[(2)]);
var inst_29575 = cljs.core.next.call(null,inst_29555);
var inst_29533 = inst_29575;
var inst_29534 = null;
var inst_29535 = (0);
var inst_29536 = (0);
var state_29656__$1 = (function (){var statearr_29666 = state_29656;
(statearr_29666[(13)] = inst_29533);

(statearr_29666[(14)] = inst_29536);

(statearr_29666[(15)] = inst_29534);

(statearr_29666[(16)] = inst_29574);

(statearr_29666[(17)] = inst_29535);

return statearr_29666;
})();
var statearr_29667_29748 = state_29656__$1;
(statearr_29667_29748[(2)] = null);

(statearr_29667_29748[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (39))){
var state_29656__$1 = state_29656;
var statearr_29671_29749 = state_29656__$1;
(statearr_29671_29749[(2)] = null);

(statearr_29671_29749[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (4))){
var inst_29524 = (state_29656[(10)]);
var inst_29524__$1 = (state_29656[(2)]);
var inst_29525 = (inst_29524__$1 == null);
var state_29656__$1 = (function (){var statearr_29672 = state_29656;
(statearr_29672[(10)] = inst_29524__$1);

return statearr_29672;
})();
if(cljs.core.truth_(inst_29525)){
var statearr_29673_29750 = state_29656__$1;
(statearr_29673_29750[(1)] = (5));

} else {
var statearr_29674_29751 = state_29656__$1;
(statearr_29674_29751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (15))){
var inst_29533 = (state_29656[(13)]);
var inst_29536 = (state_29656[(14)]);
var inst_29534 = (state_29656[(15)]);
var inst_29535 = (state_29656[(17)]);
var inst_29551 = (state_29656[(2)]);
var inst_29552 = (inst_29536 + (1));
var tmp29668 = inst_29533;
var tmp29669 = inst_29534;
var tmp29670 = inst_29535;
var inst_29533__$1 = tmp29668;
var inst_29534__$1 = tmp29669;
var inst_29535__$1 = tmp29670;
var inst_29536__$1 = inst_29552;
var state_29656__$1 = (function (){var statearr_29675 = state_29656;
(statearr_29675[(13)] = inst_29533__$1);

(statearr_29675[(18)] = inst_29551);

(statearr_29675[(14)] = inst_29536__$1);

(statearr_29675[(15)] = inst_29534__$1);

(statearr_29675[(17)] = inst_29535__$1);

return statearr_29675;
})();
var statearr_29676_29752 = state_29656__$1;
(statearr_29676_29752[(2)] = null);

(statearr_29676_29752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (21))){
var inst_29578 = (state_29656[(2)]);
var state_29656__$1 = state_29656;
var statearr_29680_29753 = state_29656__$1;
(statearr_29680_29753[(2)] = inst_29578);

(statearr_29680_29753[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (31))){
var inst_29604 = (state_29656[(11)]);
var inst_29608 = done.call(null,null);
var inst_29609 = cljs.core.async.untap_STAR_.call(null,m,inst_29604);
var state_29656__$1 = (function (){var statearr_29681 = state_29656;
(statearr_29681[(19)] = inst_29608);

return statearr_29681;
})();
var statearr_29682_29754 = state_29656__$1;
(statearr_29682_29754[(2)] = inst_29609);

(statearr_29682_29754[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (32))){
var inst_29599 = (state_29656[(9)]);
var inst_29596 = (state_29656[(20)]);
var inst_29598 = (state_29656[(21)]);
var inst_29597 = (state_29656[(12)]);
var inst_29611 = (state_29656[(2)]);
var inst_29612 = (inst_29599 + (1));
var tmp29677 = inst_29596;
var tmp29678 = inst_29598;
var tmp29679 = inst_29597;
var inst_29596__$1 = tmp29677;
var inst_29597__$1 = tmp29679;
var inst_29598__$1 = tmp29678;
var inst_29599__$1 = inst_29612;
var state_29656__$1 = (function (){var statearr_29683 = state_29656;
(statearr_29683[(9)] = inst_29599__$1);

(statearr_29683[(20)] = inst_29596__$1);

(statearr_29683[(22)] = inst_29611);

(statearr_29683[(21)] = inst_29598__$1);

(statearr_29683[(12)] = inst_29597__$1);

return statearr_29683;
})();
var statearr_29684_29755 = state_29656__$1;
(statearr_29684_29755[(2)] = null);

(statearr_29684_29755[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (40))){
var inst_29624 = (state_29656[(23)]);
var inst_29628 = done.call(null,null);
var inst_29629 = cljs.core.async.untap_STAR_.call(null,m,inst_29624);
var state_29656__$1 = (function (){var statearr_29685 = state_29656;
(statearr_29685[(24)] = inst_29628);

return statearr_29685;
})();
var statearr_29686_29756 = state_29656__$1;
(statearr_29686_29756[(2)] = inst_29629);

(statearr_29686_29756[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (33))){
var inst_29615 = (state_29656[(25)]);
var inst_29617 = cljs.core.chunked_seq_QMARK_.call(null,inst_29615);
var state_29656__$1 = state_29656;
if(inst_29617){
var statearr_29687_29757 = state_29656__$1;
(statearr_29687_29757[(1)] = (36));

} else {
var statearr_29688_29758 = state_29656__$1;
(statearr_29688_29758[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (13))){
var inst_29545 = (state_29656[(26)]);
var inst_29548 = cljs.core.async.close_BANG_.call(null,inst_29545);
var state_29656__$1 = state_29656;
var statearr_29689_29759 = state_29656__$1;
(statearr_29689_29759[(2)] = inst_29548);

(statearr_29689_29759[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (22))){
var inst_29568 = (state_29656[(8)]);
var inst_29571 = cljs.core.async.close_BANG_.call(null,inst_29568);
var state_29656__$1 = state_29656;
var statearr_29690_29760 = state_29656__$1;
(statearr_29690_29760[(2)] = inst_29571);

(statearr_29690_29760[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (36))){
var inst_29615 = (state_29656[(25)]);
var inst_29619 = cljs.core.chunk_first.call(null,inst_29615);
var inst_29620 = cljs.core.chunk_rest.call(null,inst_29615);
var inst_29621 = cljs.core.count.call(null,inst_29619);
var inst_29596 = inst_29620;
var inst_29597 = inst_29619;
var inst_29598 = inst_29621;
var inst_29599 = (0);
var state_29656__$1 = (function (){var statearr_29691 = state_29656;
(statearr_29691[(9)] = inst_29599);

(statearr_29691[(20)] = inst_29596);

(statearr_29691[(21)] = inst_29598);

(statearr_29691[(12)] = inst_29597);

return statearr_29691;
})();
var statearr_29692_29761 = state_29656__$1;
(statearr_29692_29761[(2)] = null);

(statearr_29692_29761[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (41))){
var inst_29615 = (state_29656[(25)]);
var inst_29631 = (state_29656[(2)]);
var inst_29632 = cljs.core.next.call(null,inst_29615);
var inst_29596 = inst_29632;
var inst_29597 = null;
var inst_29598 = (0);
var inst_29599 = (0);
var state_29656__$1 = (function (){var statearr_29693 = state_29656;
(statearr_29693[(9)] = inst_29599);

(statearr_29693[(20)] = inst_29596);

(statearr_29693[(27)] = inst_29631);

(statearr_29693[(21)] = inst_29598);

(statearr_29693[(12)] = inst_29597);

return statearr_29693;
})();
var statearr_29694_29762 = state_29656__$1;
(statearr_29694_29762[(2)] = null);

(statearr_29694_29762[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (43))){
var state_29656__$1 = state_29656;
var statearr_29695_29763 = state_29656__$1;
(statearr_29695_29763[(2)] = null);

(statearr_29695_29763[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (29))){
var inst_29640 = (state_29656[(2)]);
var state_29656__$1 = state_29656;
var statearr_29696_29764 = state_29656__$1;
(statearr_29696_29764[(2)] = inst_29640);

(statearr_29696_29764[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (44))){
var inst_29649 = (state_29656[(2)]);
var state_29656__$1 = (function (){var statearr_29697 = state_29656;
(statearr_29697[(28)] = inst_29649);

return statearr_29697;
})();
var statearr_29698_29765 = state_29656__$1;
(statearr_29698_29765[(2)] = null);

(statearr_29698_29765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (6))){
var inst_29588 = (state_29656[(29)]);
var inst_29587 = cljs.core.deref.call(null,cs);
var inst_29588__$1 = cljs.core.keys.call(null,inst_29587);
var inst_29589 = cljs.core.count.call(null,inst_29588__$1);
var inst_29590 = cljs.core.reset_BANG_.call(null,dctr,inst_29589);
var inst_29595 = cljs.core.seq.call(null,inst_29588__$1);
var inst_29596 = inst_29595;
var inst_29597 = null;
var inst_29598 = (0);
var inst_29599 = (0);
var state_29656__$1 = (function (){var statearr_29699 = state_29656;
(statearr_29699[(9)] = inst_29599);

(statearr_29699[(30)] = inst_29590);

(statearr_29699[(20)] = inst_29596);

(statearr_29699[(21)] = inst_29598);

(statearr_29699[(12)] = inst_29597);

(statearr_29699[(29)] = inst_29588__$1);

return statearr_29699;
})();
var statearr_29700_29766 = state_29656__$1;
(statearr_29700_29766[(2)] = null);

(statearr_29700_29766[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (28))){
var inst_29615 = (state_29656[(25)]);
var inst_29596 = (state_29656[(20)]);
var inst_29615__$1 = cljs.core.seq.call(null,inst_29596);
var state_29656__$1 = (function (){var statearr_29701 = state_29656;
(statearr_29701[(25)] = inst_29615__$1);

return statearr_29701;
})();
if(inst_29615__$1){
var statearr_29702_29767 = state_29656__$1;
(statearr_29702_29767[(1)] = (33));

} else {
var statearr_29703_29768 = state_29656__$1;
(statearr_29703_29768[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (25))){
var inst_29599 = (state_29656[(9)]);
var inst_29598 = (state_29656[(21)]);
var inst_29601 = (inst_29599 < inst_29598);
var inst_29602 = inst_29601;
var state_29656__$1 = state_29656;
if(cljs.core.truth_(inst_29602)){
var statearr_29704_29769 = state_29656__$1;
(statearr_29704_29769[(1)] = (27));

} else {
var statearr_29705_29770 = state_29656__$1;
(statearr_29705_29770[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (34))){
var state_29656__$1 = state_29656;
var statearr_29706_29771 = state_29656__$1;
(statearr_29706_29771[(2)] = null);

(statearr_29706_29771[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (17))){
var state_29656__$1 = state_29656;
var statearr_29707_29772 = state_29656__$1;
(statearr_29707_29772[(2)] = null);

(statearr_29707_29772[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (3))){
var inst_29654 = (state_29656[(2)]);
var state_29656__$1 = state_29656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29656__$1,inst_29654);
} else {
if((state_val_29657 === (12))){
var inst_29583 = (state_29656[(2)]);
var state_29656__$1 = state_29656;
var statearr_29708_29773 = state_29656__$1;
(statearr_29708_29773[(2)] = inst_29583);

(statearr_29708_29773[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (2))){
var state_29656__$1 = state_29656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29656__$1,(4),ch);
} else {
if((state_val_29657 === (23))){
var state_29656__$1 = state_29656;
var statearr_29709_29774 = state_29656__$1;
(statearr_29709_29774[(2)] = null);

(statearr_29709_29774[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (35))){
var inst_29638 = (state_29656[(2)]);
var state_29656__$1 = state_29656;
var statearr_29710_29775 = state_29656__$1;
(statearr_29710_29775[(2)] = inst_29638);

(statearr_29710_29775[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (19))){
var inst_29555 = (state_29656[(7)]);
var inst_29559 = cljs.core.chunk_first.call(null,inst_29555);
var inst_29560 = cljs.core.chunk_rest.call(null,inst_29555);
var inst_29561 = cljs.core.count.call(null,inst_29559);
var inst_29533 = inst_29560;
var inst_29534 = inst_29559;
var inst_29535 = inst_29561;
var inst_29536 = (0);
var state_29656__$1 = (function (){var statearr_29711 = state_29656;
(statearr_29711[(13)] = inst_29533);

(statearr_29711[(14)] = inst_29536);

(statearr_29711[(15)] = inst_29534);

(statearr_29711[(17)] = inst_29535);

return statearr_29711;
})();
var statearr_29712_29776 = state_29656__$1;
(statearr_29712_29776[(2)] = null);

(statearr_29712_29776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (11))){
var inst_29533 = (state_29656[(13)]);
var inst_29555 = (state_29656[(7)]);
var inst_29555__$1 = cljs.core.seq.call(null,inst_29533);
var state_29656__$1 = (function (){var statearr_29713 = state_29656;
(statearr_29713[(7)] = inst_29555__$1);

return statearr_29713;
})();
if(inst_29555__$1){
var statearr_29714_29777 = state_29656__$1;
(statearr_29714_29777[(1)] = (16));

} else {
var statearr_29715_29778 = state_29656__$1;
(statearr_29715_29778[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (9))){
var inst_29585 = (state_29656[(2)]);
var state_29656__$1 = state_29656;
var statearr_29716_29779 = state_29656__$1;
(statearr_29716_29779[(2)] = inst_29585);

(statearr_29716_29779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (5))){
var inst_29531 = cljs.core.deref.call(null,cs);
var inst_29532 = cljs.core.seq.call(null,inst_29531);
var inst_29533 = inst_29532;
var inst_29534 = null;
var inst_29535 = (0);
var inst_29536 = (0);
var state_29656__$1 = (function (){var statearr_29717 = state_29656;
(statearr_29717[(13)] = inst_29533);

(statearr_29717[(14)] = inst_29536);

(statearr_29717[(15)] = inst_29534);

(statearr_29717[(17)] = inst_29535);

return statearr_29717;
})();
var statearr_29718_29780 = state_29656__$1;
(statearr_29718_29780[(2)] = null);

(statearr_29718_29780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (14))){
var state_29656__$1 = state_29656;
var statearr_29719_29781 = state_29656__$1;
(statearr_29719_29781[(2)] = null);

(statearr_29719_29781[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (45))){
var inst_29646 = (state_29656[(2)]);
var state_29656__$1 = state_29656;
var statearr_29720_29782 = state_29656__$1;
(statearr_29720_29782[(2)] = inst_29646);

(statearr_29720_29782[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (26))){
var inst_29588 = (state_29656[(29)]);
var inst_29642 = (state_29656[(2)]);
var inst_29643 = cljs.core.seq.call(null,inst_29588);
var state_29656__$1 = (function (){var statearr_29721 = state_29656;
(statearr_29721[(31)] = inst_29642);

return statearr_29721;
})();
if(inst_29643){
var statearr_29722_29783 = state_29656__$1;
(statearr_29722_29783[(1)] = (42));

} else {
var statearr_29723_29784 = state_29656__$1;
(statearr_29723_29784[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (16))){
var inst_29555 = (state_29656[(7)]);
var inst_29557 = cljs.core.chunked_seq_QMARK_.call(null,inst_29555);
var state_29656__$1 = state_29656;
if(inst_29557){
var statearr_29724_29785 = state_29656__$1;
(statearr_29724_29785[(1)] = (19));

} else {
var statearr_29725_29786 = state_29656__$1;
(statearr_29725_29786[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (38))){
var inst_29635 = (state_29656[(2)]);
var state_29656__$1 = state_29656;
var statearr_29726_29787 = state_29656__$1;
(statearr_29726_29787[(2)] = inst_29635);

(statearr_29726_29787[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (30))){
var state_29656__$1 = state_29656;
var statearr_29727_29788 = state_29656__$1;
(statearr_29727_29788[(2)] = null);

(statearr_29727_29788[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (10))){
var inst_29536 = (state_29656[(14)]);
var inst_29534 = (state_29656[(15)]);
var inst_29544 = cljs.core._nth.call(null,inst_29534,inst_29536);
var inst_29545 = cljs.core.nth.call(null,inst_29544,(0),null);
var inst_29546 = cljs.core.nth.call(null,inst_29544,(1),null);
var state_29656__$1 = (function (){var statearr_29728 = state_29656;
(statearr_29728[(26)] = inst_29545);

return statearr_29728;
})();
if(cljs.core.truth_(inst_29546)){
var statearr_29729_29789 = state_29656__$1;
(statearr_29729_29789[(1)] = (13));

} else {
var statearr_29730_29790 = state_29656__$1;
(statearr_29730_29790[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (18))){
var inst_29581 = (state_29656[(2)]);
var state_29656__$1 = state_29656;
var statearr_29731_29791 = state_29656__$1;
(statearr_29731_29791[(2)] = inst_29581);

(statearr_29731_29791[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (42))){
var state_29656__$1 = state_29656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29656__$1,(45),dchan);
} else {
if((state_val_29657 === (37))){
var inst_29615 = (state_29656[(25)]);
var inst_29524 = (state_29656[(10)]);
var inst_29624 = (state_29656[(23)]);
var inst_29624__$1 = cljs.core.first.call(null,inst_29615);
var inst_29625 = cljs.core.async.put_BANG_.call(null,inst_29624__$1,inst_29524,done);
var state_29656__$1 = (function (){var statearr_29732 = state_29656;
(statearr_29732[(23)] = inst_29624__$1);

return statearr_29732;
})();
if(cljs.core.truth_(inst_29625)){
var statearr_29733_29792 = state_29656__$1;
(statearr_29733_29792[(1)] = (39));

} else {
var statearr_29734_29793 = state_29656__$1;
(statearr_29734_29793[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (8))){
var inst_29536 = (state_29656[(14)]);
var inst_29535 = (state_29656[(17)]);
var inst_29538 = (inst_29536 < inst_29535);
var inst_29539 = inst_29538;
var state_29656__$1 = state_29656;
if(cljs.core.truth_(inst_29539)){
var statearr_29735_29794 = state_29656__$1;
(statearr_29735_29794[(1)] = (10));

} else {
var statearr_29736_29795 = state_29656__$1;
(statearr_29736_29795[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__28824__auto__ = null;
var cljs$core$async$mult_$_state_machine__28824__auto____0 = (function (){
var statearr_29737 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29737[(0)] = cljs$core$async$mult_$_state_machine__28824__auto__);

(statearr_29737[(1)] = (1));

return statearr_29737;
});
var cljs$core$async$mult_$_state_machine__28824__auto____1 = (function (state_29656){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_29656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e29738){if((e29738 instanceof Object)){
var ex__28827__auto__ = e29738;
var statearr_29739_29796 = state_29656;
(statearr_29739_29796[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29797 = state_29656;
state_29656 = G__29797;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28824__auto__ = function(state_29656){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28824__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28824__auto____1.call(this,state_29656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28824__auto____0;
cljs$core$async$mult_$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28824__auto____1;
return cljs$core$async$mult_$_state_machine__28824__auto__;
})()
})();
var state__28920__auto__ = (function (){var statearr_29740 = f__28919__auto__.call(null);
(statearr_29740[(6)] = c__28918__auto___29741);

return statearr_29740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__29799 = arguments.length;
switch (G__29799) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_29801 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_29801.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_29802 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_29802.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_29803 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_29803.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_29804 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_29804.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_29805 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_29805.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29816 = arguments.length;
var i__4737__auto___29817 = (0);
while(true){
if((i__4737__auto___29817 < len__4736__auto___29816)){
args__4742__auto__.push((arguments[i__4737__auto___29817]));

var G__29818 = (i__4737__auto___29817 + (1));
i__4737__auto___29817 = G__29818;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29810){
var map__29811 = p__29810;
var map__29811__$1 = (((((!((map__29811 == null))))?(((((map__29811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29811):map__29811);
var opts = map__29811__$1;
var statearr_29813_29819 = state;
(statearr_29813_29819[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_29814_29820 = state;
(statearr_29814_29820[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_29815_29821 = state;
(statearr_29815_29821[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29806){
var G__29807 = cljs.core.first.call(null,seq29806);
var seq29806__$1 = cljs.core.next.call(null,seq29806);
var G__29808 = cljs.core.first.call(null,seq29806__$1);
var seq29806__$2 = cljs.core.next.call(null,seq29806__$1);
var G__29809 = cljs.core.first.call(null,seq29806__$2);
var seq29806__$3 = cljs.core.next.call(null,seq29806__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29807,G__29808,G__29809,seq29806__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29822 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29822 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29823){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29823 = meta29823;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29824,meta29823__$1){
var self__ = this;
var _29824__$1 = this;
return (new cljs.core.async.t_cljs$core$async29822(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29823__$1));
}));

(cljs.core.async.t_cljs$core$async29822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29824){
var self__ = this;
var _29824__$1 = this;
return self__.meta29823;
}));

(cljs.core.async.t_cljs$core$async29822.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29822.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async29822.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29822.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async29822.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async29822.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async29822.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async29822.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async29822.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29823","meta29823",1638823615,null)], null);
}));

(cljs.core.async.t_cljs$core$async29822.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29822.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29822");

(cljs.core.async.t_cljs$core$async29822.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async29822");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29822.
 */
cljs.core.async.__GT_t_cljs$core$async29822 = (function cljs$core$async$mix_$___GT_t_cljs$core$async29822(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29823){
return (new cljs.core.async.t_cljs$core$async29822(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29823));
});

}

return (new cljs.core.async.t_cljs$core$async29822(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28918__auto___29986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = (function (state_29926){
var state_val_29927 = (state_29926[(1)]);
if((state_val_29927 === (7))){
var inst_29841 = (state_29926[(2)]);
var state_29926__$1 = state_29926;
var statearr_29928_29987 = state_29926__$1;
(statearr_29928_29987[(2)] = inst_29841);

(statearr_29928_29987[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (20))){
var inst_29853 = (state_29926[(7)]);
var state_29926__$1 = state_29926;
var statearr_29929_29988 = state_29926__$1;
(statearr_29929_29988[(2)] = inst_29853);

(statearr_29929_29988[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (27))){
var state_29926__$1 = state_29926;
var statearr_29930_29989 = state_29926__$1;
(statearr_29930_29989[(2)] = null);

(statearr_29930_29989[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (1))){
var inst_29828 = (state_29926[(8)]);
var inst_29828__$1 = calc_state.call(null);
var inst_29830 = (inst_29828__$1 == null);
var inst_29831 = cljs.core.not.call(null,inst_29830);
var state_29926__$1 = (function (){var statearr_29931 = state_29926;
(statearr_29931[(8)] = inst_29828__$1);

return statearr_29931;
})();
if(inst_29831){
var statearr_29932_29990 = state_29926__$1;
(statearr_29932_29990[(1)] = (2));

} else {
var statearr_29933_29991 = state_29926__$1;
(statearr_29933_29991[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (24))){
var inst_29900 = (state_29926[(9)]);
var inst_29877 = (state_29926[(10)]);
var inst_29886 = (state_29926[(11)]);
var inst_29900__$1 = inst_29877.call(null,inst_29886);
var state_29926__$1 = (function (){var statearr_29934 = state_29926;
(statearr_29934[(9)] = inst_29900__$1);

return statearr_29934;
})();
if(cljs.core.truth_(inst_29900__$1)){
var statearr_29935_29992 = state_29926__$1;
(statearr_29935_29992[(1)] = (29));

} else {
var statearr_29936_29993 = state_29926__$1;
(statearr_29936_29993[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (4))){
var inst_29844 = (state_29926[(2)]);
var state_29926__$1 = state_29926;
if(cljs.core.truth_(inst_29844)){
var statearr_29937_29994 = state_29926__$1;
(statearr_29937_29994[(1)] = (8));

} else {
var statearr_29938_29995 = state_29926__$1;
(statearr_29938_29995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (15))){
var inst_29871 = (state_29926[(2)]);
var state_29926__$1 = state_29926;
if(cljs.core.truth_(inst_29871)){
var statearr_29939_29996 = state_29926__$1;
(statearr_29939_29996[(1)] = (19));

} else {
var statearr_29940_29997 = state_29926__$1;
(statearr_29940_29997[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (21))){
var inst_29876 = (state_29926[(12)]);
var inst_29876__$1 = (state_29926[(2)]);
var inst_29877 = cljs.core.get.call(null,inst_29876__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29878 = cljs.core.get.call(null,inst_29876__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29879 = cljs.core.get.call(null,inst_29876__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29926__$1 = (function (){var statearr_29941 = state_29926;
(statearr_29941[(12)] = inst_29876__$1);

(statearr_29941[(13)] = inst_29878);

(statearr_29941[(10)] = inst_29877);

return statearr_29941;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29926__$1,(22),inst_29879);
} else {
if((state_val_29927 === (31))){
var inst_29908 = (state_29926[(2)]);
var state_29926__$1 = state_29926;
if(cljs.core.truth_(inst_29908)){
var statearr_29942_29998 = state_29926__$1;
(statearr_29942_29998[(1)] = (32));

} else {
var statearr_29943_29999 = state_29926__$1;
(statearr_29943_29999[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (32))){
var inst_29885 = (state_29926[(14)]);
var state_29926__$1 = state_29926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29926__$1,(35),out,inst_29885);
} else {
if((state_val_29927 === (33))){
var inst_29876 = (state_29926[(12)]);
var inst_29853 = inst_29876;
var state_29926__$1 = (function (){var statearr_29944 = state_29926;
(statearr_29944[(7)] = inst_29853);

return statearr_29944;
})();
var statearr_29945_30000 = state_29926__$1;
(statearr_29945_30000[(2)] = null);

(statearr_29945_30000[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (13))){
var inst_29853 = (state_29926[(7)]);
var inst_29860 = inst_29853.cljs$lang$protocol_mask$partition0$;
var inst_29861 = (inst_29860 & (64));
var inst_29862 = inst_29853.cljs$core$ISeq$;
var inst_29863 = (cljs.core.PROTOCOL_SENTINEL === inst_29862);
var inst_29864 = ((inst_29861) || (inst_29863));
var state_29926__$1 = state_29926;
if(cljs.core.truth_(inst_29864)){
var statearr_29946_30001 = state_29926__$1;
(statearr_29946_30001[(1)] = (16));

} else {
var statearr_29947_30002 = state_29926__$1;
(statearr_29947_30002[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (22))){
var inst_29885 = (state_29926[(14)]);
var inst_29886 = (state_29926[(11)]);
var inst_29884 = (state_29926[(2)]);
var inst_29885__$1 = cljs.core.nth.call(null,inst_29884,(0),null);
var inst_29886__$1 = cljs.core.nth.call(null,inst_29884,(1),null);
var inst_29887 = (inst_29885__$1 == null);
var inst_29888 = cljs.core._EQ_.call(null,inst_29886__$1,change);
var inst_29889 = ((inst_29887) || (inst_29888));
var state_29926__$1 = (function (){var statearr_29948 = state_29926;
(statearr_29948[(14)] = inst_29885__$1);

(statearr_29948[(11)] = inst_29886__$1);

return statearr_29948;
})();
if(cljs.core.truth_(inst_29889)){
var statearr_29949_30003 = state_29926__$1;
(statearr_29949_30003[(1)] = (23));

} else {
var statearr_29950_30004 = state_29926__$1;
(statearr_29950_30004[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (36))){
var inst_29876 = (state_29926[(12)]);
var inst_29853 = inst_29876;
var state_29926__$1 = (function (){var statearr_29951 = state_29926;
(statearr_29951[(7)] = inst_29853);

return statearr_29951;
})();
var statearr_29952_30005 = state_29926__$1;
(statearr_29952_30005[(2)] = null);

(statearr_29952_30005[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (29))){
var inst_29900 = (state_29926[(9)]);
var state_29926__$1 = state_29926;
var statearr_29953_30006 = state_29926__$1;
(statearr_29953_30006[(2)] = inst_29900);

(statearr_29953_30006[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (6))){
var state_29926__$1 = state_29926;
var statearr_29954_30007 = state_29926__$1;
(statearr_29954_30007[(2)] = false);

(statearr_29954_30007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (28))){
var inst_29896 = (state_29926[(2)]);
var inst_29897 = calc_state.call(null);
var inst_29853 = inst_29897;
var state_29926__$1 = (function (){var statearr_29955 = state_29926;
(statearr_29955[(15)] = inst_29896);

(statearr_29955[(7)] = inst_29853);

return statearr_29955;
})();
var statearr_29956_30008 = state_29926__$1;
(statearr_29956_30008[(2)] = null);

(statearr_29956_30008[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (25))){
var inst_29922 = (state_29926[(2)]);
var state_29926__$1 = state_29926;
var statearr_29957_30009 = state_29926__$1;
(statearr_29957_30009[(2)] = inst_29922);

(statearr_29957_30009[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (34))){
var inst_29920 = (state_29926[(2)]);
var state_29926__$1 = state_29926;
var statearr_29958_30010 = state_29926__$1;
(statearr_29958_30010[(2)] = inst_29920);

(statearr_29958_30010[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (17))){
var state_29926__$1 = state_29926;
var statearr_29959_30011 = state_29926__$1;
(statearr_29959_30011[(2)] = false);

(statearr_29959_30011[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (3))){
var state_29926__$1 = state_29926;
var statearr_29960_30012 = state_29926__$1;
(statearr_29960_30012[(2)] = false);

(statearr_29960_30012[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (12))){
var inst_29924 = (state_29926[(2)]);
var state_29926__$1 = state_29926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29926__$1,inst_29924);
} else {
if((state_val_29927 === (2))){
var inst_29828 = (state_29926[(8)]);
var inst_29833 = inst_29828.cljs$lang$protocol_mask$partition0$;
var inst_29834 = (inst_29833 & (64));
var inst_29835 = inst_29828.cljs$core$ISeq$;
var inst_29836 = (cljs.core.PROTOCOL_SENTINEL === inst_29835);
var inst_29837 = ((inst_29834) || (inst_29836));
var state_29926__$1 = state_29926;
if(cljs.core.truth_(inst_29837)){
var statearr_29961_30013 = state_29926__$1;
(statearr_29961_30013[(1)] = (5));

} else {
var statearr_29962_30014 = state_29926__$1;
(statearr_29962_30014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (23))){
var inst_29885 = (state_29926[(14)]);
var inst_29891 = (inst_29885 == null);
var state_29926__$1 = state_29926;
if(cljs.core.truth_(inst_29891)){
var statearr_29963_30015 = state_29926__$1;
(statearr_29963_30015[(1)] = (26));

} else {
var statearr_29964_30016 = state_29926__$1;
(statearr_29964_30016[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (35))){
var inst_29911 = (state_29926[(2)]);
var state_29926__$1 = state_29926;
if(cljs.core.truth_(inst_29911)){
var statearr_29965_30017 = state_29926__$1;
(statearr_29965_30017[(1)] = (36));

} else {
var statearr_29966_30018 = state_29926__$1;
(statearr_29966_30018[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (19))){
var inst_29853 = (state_29926[(7)]);
var inst_29873 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29853);
var state_29926__$1 = state_29926;
var statearr_29967_30019 = state_29926__$1;
(statearr_29967_30019[(2)] = inst_29873);

(statearr_29967_30019[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (11))){
var inst_29853 = (state_29926[(7)]);
var inst_29857 = (inst_29853 == null);
var inst_29858 = cljs.core.not.call(null,inst_29857);
var state_29926__$1 = state_29926;
if(inst_29858){
var statearr_29968_30020 = state_29926__$1;
(statearr_29968_30020[(1)] = (13));

} else {
var statearr_29969_30021 = state_29926__$1;
(statearr_29969_30021[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (9))){
var inst_29828 = (state_29926[(8)]);
var state_29926__$1 = state_29926;
var statearr_29970_30022 = state_29926__$1;
(statearr_29970_30022[(2)] = inst_29828);

(statearr_29970_30022[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (5))){
var state_29926__$1 = state_29926;
var statearr_29971_30023 = state_29926__$1;
(statearr_29971_30023[(2)] = true);

(statearr_29971_30023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (14))){
var state_29926__$1 = state_29926;
var statearr_29972_30024 = state_29926__$1;
(statearr_29972_30024[(2)] = false);

(statearr_29972_30024[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (26))){
var inst_29886 = (state_29926[(11)]);
var inst_29893 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29886);
var state_29926__$1 = state_29926;
var statearr_29973_30025 = state_29926__$1;
(statearr_29973_30025[(2)] = inst_29893);

(statearr_29973_30025[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (16))){
var state_29926__$1 = state_29926;
var statearr_29974_30026 = state_29926__$1;
(statearr_29974_30026[(2)] = true);

(statearr_29974_30026[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (38))){
var inst_29916 = (state_29926[(2)]);
var state_29926__$1 = state_29926;
var statearr_29975_30027 = state_29926__$1;
(statearr_29975_30027[(2)] = inst_29916);

(statearr_29975_30027[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (30))){
var inst_29878 = (state_29926[(13)]);
var inst_29877 = (state_29926[(10)]);
var inst_29886 = (state_29926[(11)]);
var inst_29903 = cljs.core.empty_QMARK_.call(null,inst_29877);
var inst_29904 = inst_29878.call(null,inst_29886);
var inst_29905 = cljs.core.not.call(null,inst_29904);
var inst_29906 = ((inst_29903) && (inst_29905));
var state_29926__$1 = state_29926;
var statearr_29976_30028 = state_29926__$1;
(statearr_29976_30028[(2)] = inst_29906);

(statearr_29976_30028[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (10))){
var inst_29828 = (state_29926[(8)]);
var inst_29849 = (state_29926[(2)]);
var inst_29850 = cljs.core.get.call(null,inst_29849,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29851 = cljs.core.get.call(null,inst_29849,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29852 = cljs.core.get.call(null,inst_29849,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29853 = inst_29828;
var state_29926__$1 = (function (){var statearr_29977 = state_29926;
(statearr_29977[(16)] = inst_29850);

(statearr_29977[(17)] = inst_29851);

(statearr_29977[(18)] = inst_29852);

(statearr_29977[(7)] = inst_29853);

return statearr_29977;
})();
var statearr_29978_30029 = state_29926__$1;
(statearr_29978_30029[(2)] = null);

(statearr_29978_30029[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (18))){
var inst_29868 = (state_29926[(2)]);
var state_29926__$1 = state_29926;
var statearr_29979_30030 = state_29926__$1;
(statearr_29979_30030[(2)] = inst_29868);

(statearr_29979_30030[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (37))){
var state_29926__$1 = state_29926;
var statearr_29980_30031 = state_29926__$1;
(statearr_29980_30031[(2)] = null);

(statearr_29980_30031[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (8))){
var inst_29828 = (state_29926[(8)]);
var inst_29846 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29828);
var state_29926__$1 = state_29926;
var statearr_29981_30032 = state_29926__$1;
(statearr_29981_30032[(2)] = inst_29846);

(statearr_29981_30032[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__28824__auto__ = null;
var cljs$core$async$mix_$_state_machine__28824__auto____0 = (function (){
var statearr_29982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29982[(0)] = cljs$core$async$mix_$_state_machine__28824__auto__);

(statearr_29982[(1)] = (1));

return statearr_29982;
});
var cljs$core$async$mix_$_state_machine__28824__auto____1 = (function (state_29926){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_29926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e29983){if((e29983 instanceof Object)){
var ex__28827__auto__ = e29983;
var statearr_29984_30033 = state_29926;
(statearr_29984_30033[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30034 = state_29926;
state_29926 = G__30034;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28824__auto__ = function(state_29926){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28824__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28824__auto____1.call(this,state_29926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28824__auto____0;
cljs$core$async$mix_$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28824__auto____1;
return cljs$core$async$mix_$_state_machine__28824__auto__;
})()
})();
var state__28920__auto__ = (function (){var statearr_29985 = f__28919__auto__.call(null);
(statearr_29985[(6)] = c__28918__auto___29986);

return statearr_29985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_30037 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_30037.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_30038 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_30038.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_30039 = (function() {
var G__30040 = null;
var G__30040__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__30040__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__30040 = function(p,v){
switch(arguments.length){
case 1:
return G__30040__1.call(this,p);
case 2:
return G__30040__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30040.cljs$core$IFn$_invoke$arity$1 = G__30040__1;
G__30040.cljs$core$IFn$_invoke$arity$2 = G__30040__2;
return G__30040;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30036 = arguments.length;
switch (G__30036) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_30039.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_30039.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__30044 = arguments.length;
switch (G__30044) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__30042_SHARP_){
if(cljs.core.truth_(p1__30042_SHARP_.call(null,topic))){
return p1__30042_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30042_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30045 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30045 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30046){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30046 = meta30046;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30047,meta30046__$1){
var self__ = this;
var _30047__$1 = this;
return (new cljs.core.async.t_cljs$core$async30045(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30046__$1));
}));

(cljs.core.async.t_cljs$core$async30045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30047){
var self__ = this;
var _30047__$1 = this;
return self__.meta30046;
}));

(cljs.core.async.t_cljs$core$async30045.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30045.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30045.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30045.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30045.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async30045.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30045.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30045.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30046","meta30046",497722153,null)], null);
}));

(cljs.core.async.t_cljs$core$async30045.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30045.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30045");

(cljs.core.async.t_cljs$core$async30045.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async30045");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30045.
 */
cljs.core.async.__GT_t_cljs$core$async30045 = (function cljs$core$async$__GT_t_cljs$core$async30045(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30046){
return (new cljs.core.async.t_cljs$core$async30045(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30046));
});

}

return (new cljs.core.async.t_cljs$core$async30045(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28918__auto___30165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = (function (state_30119){
var state_val_30120 = (state_30119[(1)]);
if((state_val_30120 === (7))){
var inst_30115 = (state_30119[(2)]);
var state_30119__$1 = state_30119;
var statearr_30121_30166 = state_30119__$1;
(statearr_30121_30166[(2)] = inst_30115);

(statearr_30121_30166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (20))){
var state_30119__$1 = state_30119;
var statearr_30122_30167 = state_30119__$1;
(statearr_30122_30167[(2)] = null);

(statearr_30122_30167[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (1))){
var state_30119__$1 = state_30119;
var statearr_30123_30168 = state_30119__$1;
(statearr_30123_30168[(2)] = null);

(statearr_30123_30168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (24))){
var inst_30098 = (state_30119[(7)]);
var inst_30107 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30098);
var state_30119__$1 = state_30119;
var statearr_30124_30169 = state_30119__$1;
(statearr_30124_30169[(2)] = inst_30107);

(statearr_30124_30169[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (4))){
var inst_30050 = (state_30119[(8)]);
var inst_30050__$1 = (state_30119[(2)]);
var inst_30051 = (inst_30050__$1 == null);
var state_30119__$1 = (function (){var statearr_30125 = state_30119;
(statearr_30125[(8)] = inst_30050__$1);

return statearr_30125;
})();
if(cljs.core.truth_(inst_30051)){
var statearr_30126_30170 = state_30119__$1;
(statearr_30126_30170[(1)] = (5));

} else {
var statearr_30127_30171 = state_30119__$1;
(statearr_30127_30171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (15))){
var inst_30092 = (state_30119[(2)]);
var state_30119__$1 = state_30119;
var statearr_30128_30172 = state_30119__$1;
(statearr_30128_30172[(2)] = inst_30092);

(statearr_30128_30172[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (21))){
var inst_30112 = (state_30119[(2)]);
var state_30119__$1 = (function (){var statearr_30129 = state_30119;
(statearr_30129[(9)] = inst_30112);

return statearr_30129;
})();
var statearr_30130_30173 = state_30119__$1;
(statearr_30130_30173[(2)] = null);

(statearr_30130_30173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (13))){
var inst_30074 = (state_30119[(10)]);
var inst_30076 = cljs.core.chunked_seq_QMARK_.call(null,inst_30074);
var state_30119__$1 = state_30119;
if(inst_30076){
var statearr_30131_30174 = state_30119__$1;
(statearr_30131_30174[(1)] = (16));

} else {
var statearr_30132_30175 = state_30119__$1;
(statearr_30132_30175[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (22))){
var inst_30104 = (state_30119[(2)]);
var state_30119__$1 = state_30119;
if(cljs.core.truth_(inst_30104)){
var statearr_30133_30176 = state_30119__$1;
(statearr_30133_30176[(1)] = (23));

} else {
var statearr_30134_30177 = state_30119__$1;
(statearr_30134_30177[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (6))){
var inst_30050 = (state_30119[(8)]);
var inst_30098 = (state_30119[(7)]);
var inst_30100 = (state_30119[(11)]);
var inst_30098__$1 = topic_fn.call(null,inst_30050);
var inst_30099 = cljs.core.deref.call(null,mults);
var inst_30100__$1 = cljs.core.get.call(null,inst_30099,inst_30098__$1);
var state_30119__$1 = (function (){var statearr_30135 = state_30119;
(statearr_30135[(7)] = inst_30098__$1);

(statearr_30135[(11)] = inst_30100__$1);

return statearr_30135;
})();
if(cljs.core.truth_(inst_30100__$1)){
var statearr_30136_30178 = state_30119__$1;
(statearr_30136_30178[(1)] = (19));

} else {
var statearr_30137_30179 = state_30119__$1;
(statearr_30137_30179[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (25))){
var inst_30109 = (state_30119[(2)]);
var state_30119__$1 = state_30119;
var statearr_30138_30180 = state_30119__$1;
(statearr_30138_30180[(2)] = inst_30109);

(statearr_30138_30180[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (17))){
var inst_30074 = (state_30119[(10)]);
var inst_30083 = cljs.core.first.call(null,inst_30074);
var inst_30084 = cljs.core.async.muxch_STAR_.call(null,inst_30083);
var inst_30085 = cljs.core.async.close_BANG_.call(null,inst_30084);
var inst_30086 = cljs.core.next.call(null,inst_30074);
var inst_30060 = inst_30086;
var inst_30061 = null;
var inst_30062 = (0);
var inst_30063 = (0);
var state_30119__$1 = (function (){var statearr_30139 = state_30119;
(statearr_30139[(12)] = inst_30063);

(statearr_30139[(13)] = inst_30060);

(statearr_30139[(14)] = inst_30085);

(statearr_30139[(15)] = inst_30061);

(statearr_30139[(16)] = inst_30062);

return statearr_30139;
})();
var statearr_30140_30181 = state_30119__$1;
(statearr_30140_30181[(2)] = null);

(statearr_30140_30181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (3))){
var inst_30117 = (state_30119[(2)]);
var state_30119__$1 = state_30119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30119__$1,inst_30117);
} else {
if((state_val_30120 === (12))){
var inst_30094 = (state_30119[(2)]);
var state_30119__$1 = state_30119;
var statearr_30141_30182 = state_30119__$1;
(statearr_30141_30182[(2)] = inst_30094);

(statearr_30141_30182[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (2))){
var state_30119__$1 = state_30119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30119__$1,(4),ch);
} else {
if((state_val_30120 === (23))){
var state_30119__$1 = state_30119;
var statearr_30142_30183 = state_30119__$1;
(statearr_30142_30183[(2)] = null);

(statearr_30142_30183[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (19))){
var inst_30050 = (state_30119[(8)]);
var inst_30100 = (state_30119[(11)]);
var inst_30102 = cljs.core.async.muxch_STAR_.call(null,inst_30100);
var state_30119__$1 = state_30119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30119__$1,(22),inst_30102,inst_30050);
} else {
if((state_val_30120 === (11))){
var inst_30060 = (state_30119[(13)]);
var inst_30074 = (state_30119[(10)]);
var inst_30074__$1 = cljs.core.seq.call(null,inst_30060);
var state_30119__$1 = (function (){var statearr_30143 = state_30119;
(statearr_30143[(10)] = inst_30074__$1);

return statearr_30143;
})();
if(inst_30074__$1){
var statearr_30144_30184 = state_30119__$1;
(statearr_30144_30184[(1)] = (13));

} else {
var statearr_30145_30185 = state_30119__$1;
(statearr_30145_30185[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (9))){
var inst_30096 = (state_30119[(2)]);
var state_30119__$1 = state_30119;
var statearr_30146_30186 = state_30119__$1;
(statearr_30146_30186[(2)] = inst_30096);

(statearr_30146_30186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (5))){
var inst_30057 = cljs.core.deref.call(null,mults);
var inst_30058 = cljs.core.vals.call(null,inst_30057);
var inst_30059 = cljs.core.seq.call(null,inst_30058);
var inst_30060 = inst_30059;
var inst_30061 = null;
var inst_30062 = (0);
var inst_30063 = (0);
var state_30119__$1 = (function (){var statearr_30147 = state_30119;
(statearr_30147[(12)] = inst_30063);

(statearr_30147[(13)] = inst_30060);

(statearr_30147[(15)] = inst_30061);

(statearr_30147[(16)] = inst_30062);

return statearr_30147;
})();
var statearr_30148_30187 = state_30119__$1;
(statearr_30148_30187[(2)] = null);

(statearr_30148_30187[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (14))){
var state_30119__$1 = state_30119;
var statearr_30152_30188 = state_30119__$1;
(statearr_30152_30188[(2)] = null);

(statearr_30152_30188[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (16))){
var inst_30074 = (state_30119[(10)]);
var inst_30078 = cljs.core.chunk_first.call(null,inst_30074);
var inst_30079 = cljs.core.chunk_rest.call(null,inst_30074);
var inst_30080 = cljs.core.count.call(null,inst_30078);
var inst_30060 = inst_30079;
var inst_30061 = inst_30078;
var inst_30062 = inst_30080;
var inst_30063 = (0);
var state_30119__$1 = (function (){var statearr_30153 = state_30119;
(statearr_30153[(12)] = inst_30063);

(statearr_30153[(13)] = inst_30060);

(statearr_30153[(15)] = inst_30061);

(statearr_30153[(16)] = inst_30062);

return statearr_30153;
})();
var statearr_30154_30189 = state_30119__$1;
(statearr_30154_30189[(2)] = null);

(statearr_30154_30189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (10))){
var inst_30063 = (state_30119[(12)]);
var inst_30060 = (state_30119[(13)]);
var inst_30061 = (state_30119[(15)]);
var inst_30062 = (state_30119[(16)]);
var inst_30068 = cljs.core._nth.call(null,inst_30061,inst_30063);
var inst_30069 = cljs.core.async.muxch_STAR_.call(null,inst_30068);
var inst_30070 = cljs.core.async.close_BANG_.call(null,inst_30069);
var inst_30071 = (inst_30063 + (1));
var tmp30149 = inst_30060;
var tmp30150 = inst_30061;
var tmp30151 = inst_30062;
var inst_30060__$1 = tmp30149;
var inst_30061__$1 = tmp30150;
var inst_30062__$1 = tmp30151;
var inst_30063__$1 = inst_30071;
var state_30119__$1 = (function (){var statearr_30155 = state_30119;
(statearr_30155[(12)] = inst_30063__$1);

(statearr_30155[(13)] = inst_30060__$1);

(statearr_30155[(15)] = inst_30061__$1);

(statearr_30155[(16)] = inst_30062__$1);

(statearr_30155[(17)] = inst_30070);

return statearr_30155;
})();
var statearr_30156_30190 = state_30119__$1;
(statearr_30156_30190[(2)] = null);

(statearr_30156_30190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (18))){
var inst_30089 = (state_30119[(2)]);
var state_30119__$1 = state_30119;
var statearr_30157_30191 = state_30119__$1;
(statearr_30157_30191[(2)] = inst_30089);

(statearr_30157_30191[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (8))){
var inst_30063 = (state_30119[(12)]);
var inst_30062 = (state_30119[(16)]);
var inst_30065 = (inst_30063 < inst_30062);
var inst_30066 = inst_30065;
var state_30119__$1 = state_30119;
if(cljs.core.truth_(inst_30066)){
var statearr_30158_30192 = state_30119__$1;
(statearr_30158_30192[(1)] = (10));

} else {
var statearr_30159_30193 = state_30119__$1;
(statearr_30159_30193[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__28824__auto__ = null;
var cljs$core$async$state_machine__28824__auto____0 = (function (){
var statearr_30160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30160[(0)] = cljs$core$async$state_machine__28824__auto__);

(statearr_30160[(1)] = (1));

return statearr_30160;
});
var cljs$core$async$state_machine__28824__auto____1 = (function (state_30119){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_30119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e30161){if((e30161 instanceof Object)){
var ex__28827__auto__ = e30161;
var statearr_30162_30194 = state_30119;
(statearr_30162_30194[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30195 = state_30119;
state_30119 = G__30195;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
cljs$core$async$state_machine__28824__auto__ = function(state_30119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28824__auto____1.call(this,state_30119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28824__auto____0;
cljs$core$async$state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28824__auto____1;
return cljs$core$async$state_machine__28824__auto__;
})()
})();
var state__28920__auto__ = (function (){var statearr_30163 = f__28919__auto__.call(null);
(statearr_30163[(6)] = c__28918__auto___30165);

return statearr_30163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__30197 = arguments.length;
switch (G__30197) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__30200 = arguments.length;
switch (G__30200) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__30203 = arguments.length;
switch (G__30203) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__28918__auto___30270 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = (function (state_30242){
var state_val_30243 = (state_30242[(1)]);
if((state_val_30243 === (7))){
var state_30242__$1 = state_30242;
var statearr_30244_30271 = state_30242__$1;
(statearr_30244_30271[(2)] = null);

(statearr_30244_30271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30243 === (1))){
var state_30242__$1 = state_30242;
var statearr_30245_30272 = state_30242__$1;
(statearr_30245_30272[(2)] = null);

(statearr_30245_30272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30243 === (4))){
var inst_30206 = (state_30242[(7)]);
var inst_30208 = (inst_30206 < cnt);
var state_30242__$1 = state_30242;
if(cljs.core.truth_(inst_30208)){
var statearr_30246_30273 = state_30242__$1;
(statearr_30246_30273[(1)] = (6));

} else {
var statearr_30247_30274 = state_30242__$1;
(statearr_30247_30274[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30243 === (15))){
var inst_30238 = (state_30242[(2)]);
var state_30242__$1 = state_30242;
var statearr_30248_30275 = state_30242__$1;
(statearr_30248_30275[(2)] = inst_30238);

(statearr_30248_30275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30243 === (13))){
var inst_30231 = cljs.core.async.close_BANG_.call(null,out);
var state_30242__$1 = state_30242;
var statearr_30249_30276 = state_30242__$1;
(statearr_30249_30276[(2)] = inst_30231);

(statearr_30249_30276[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30243 === (6))){
var state_30242__$1 = state_30242;
var statearr_30250_30277 = state_30242__$1;
(statearr_30250_30277[(2)] = null);

(statearr_30250_30277[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30243 === (3))){
var inst_30240 = (state_30242[(2)]);
var state_30242__$1 = state_30242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30242__$1,inst_30240);
} else {
if((state_val_30243 === (12))){
var inst_30228 = (state_30242[(8)]);
var inst_30228__$1 = (state_30242[(2)]);
var inst_30229 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30228__$1);
var state_30242__$1 = (function (){var statearr_30251 = state_30242;
(statearr_30251[(8)] = inst_30228__$1);

return statearr_30251;
})();
if(cljs.core.truth_(inst_30229)){
var statearr_30252_30278 = state_30242__$1;
(statearr_30252_30278[(1)] = (13));

} else {
var statearr_30253_30279 = state_30242__$1;
(statearr_30253_30279[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30243 === (2))){
var inst_30205 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30206 = (0);
var state_30242__$1 = (function (){var statearr_30254 = state_30242;
(statearr_30254[(9)] = inst_30205);

(statearr_30254[(7)] = inst_30206);

return statearr_30254;
})();
var statearr_30255_30280 = state_30242__$1;
(statearr_30255_30280[(2)] = null);

(statearr_30255_30280[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30243 === (11))){
var inst_30206 = (state_30242[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30242,(10),Object,null,(9));
var inst_30215 = chs__$1.call(null,inst_30206);
var inst_30216 = done.call(null,inst_30206);
var inst_30217 = cljs.core.async.take_BANG_.call(null,inst_30215,inst_30216);
var state_30242__$1 = state_30242;
var statearr_30256_30281 = state_30242__$1;
(statearr_30256_30281[(2)] = inst_30217);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30242__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30243 === (9))){
var inst_30206 = (state_30242[(7)]);
var inst_30219 = (state_30242[(2)]);
var inst_30220 = (inst_30206 + (1));
var inst_30206__$1 = inst_30220;
var state_30242__$1 = (function (){var statearr_30257 = state_30242;
(statearr_30257[(10)] = inst_30219);

(statearr_30257[(7)] = inst_30206__$1);

return statearr_30257;
})();
var statearr_30258_30282 = state_30242__$1;
(statearr_30258_30282[(2)] = null);

(statearr_30258_30282[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30243 === (5))){
var inst_30226 = (state_30242[(2)]);
var state_30242__$1 = (function (){var statearr_30259 = state_30242;
(statearr_30259[(11)] = inst_30226);

return statearr_30259;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30242__$1,(12),dchan);
} else {
if((state_val_30243 === (14))){
var inst_30228 = (state_30242[(8)]);
var inst_30233 = cljs.core.apply.call(null,f,inst_30228);
var state_30242__$1 = state_30242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30242__$1,(16),out,inst_30233);
} else {
if((state_val_30243 === (16))){
var inst_30235 = (state_30242[(2)]);
var state_30242__$1 = (function (){var statearr_30260 = state_30242;
(statearr_30260[(12)] = inst_30235);

return statearr_30260;
})();
var statearr_30261_30283 = state_30242__$1;
(statearr_30261_30283[(2)] = null);

(statearr_30261_30283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30243 === (10))){
var inst_30210 = (state_30242[(2)]);
var inst_30211 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30242__$1 = (function (){var statearr_30262 = state_30242;
(statearr_30262[(13)] = inst_30210);

return statearr_30262;
})();
var statearr_30263_30284 = state_30242__$1;
(statearr_30263_30284[(2)] = inst_30211);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30242__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30243 === (8))){
var inst_30224 = (state_30242[(2)]);
var state_30242__$1 = state_30242;
var statearr_30264_30285 = state_30242__$1;
(statearr_30264_30285[(2)] = inst_30224);

(statearr_30264_30285[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__28824__auto__ = null;
var cljs$core$async$state_machine__28824__auto____0 = (function (){
var statearr_30265 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30265[(0)] = cljs$core$async$state_machine__28824__auto__);

(statearr_30265[(1)] = (1));

return statearr_30265;
});
var cljs$core$async$state_machine__28824__auto____1 = (function (state_30242){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_30242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e30266){if((e30266 instanceof Object)){
var ex__28827__auto__ = e30266;
var statearr_30267_30286 = state_30242;
(statearr_30267_30286[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30287 = state_30242;
state_30242 = G__30287;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
cljs$core$async$state_machine__28824__auto__ = function(state_30242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28824__auto____1.call(this,state_30242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28824__auto____0;
cljs$core$async$state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28824__auto____1;
return cljs$core$async$state_machine__28824__auto__;
})()
})();
var state__28920__auto__ = (function (){var statearr_30268 = f__28919__auto__.call(null);
(statearr_30268[(6)] = c__28918__auto___30270);

return statearr_30268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__30290 = arguments.length;
switch (G__30290) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28918__auto___30344 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = (function (state_30322){
var state_val_30323 = (state_30322[(1)]);
if((state_val_30323 === (7))){
var inst_30301 = (state_30322[(7)]);
var inst_30302 = (state_30322[(8)]);
var inst_30301__$1 = (state_30322[(2)]);
var inst_30302__$1 = cljs.core.nth.call(null,inst_30301__$1,(0),null);
var inst_30303 = cljs.core.nth.call(null,inst_30301__$1,(1),null);
var inst_30304 = (inst_30302__$1 == null);
var state_30322__$1 = (function (){var statearr_30324 = state_30322;
(statearr_30324[(7)] = inst_30301__$1);

(statearr_30324[(9)] = inst_30303);

(statearr_30324[(8)] = inst_30302__$1);

return statearr_30324;
})();
if(cljs.core.truth_(inst_30304)){
var statearr_30325_30345 = state_30322__$1;
(statearr_30325_30345[(1)] = (8));

} else {
var statearr_30326_30346 = state_30322__$1;
(statearr_30326_30346[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30323 === (1))){
var inst_30291 = cljs.core.vec.call(null,chs);
var inst_30292 = inst_30291;
var state_30322__$1 = (function (){var statearr_30327 = state_30322;
(statearr_30327[(10)] = inst_30292);

return statearr_30327;
})();
var statearr_30328_30347 = state_30322__$1;
(statearr_30328_30347[(2)] = null);

(statearr_30328_30347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30323 === (4))){
var inst_30292 = (state_30322[(10)]);
var state_30322__$1 = state_30322;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30322__$1,(7),inst_30292);
} else {
if((state_val_30323 === (6))){
var inst_30318 = (state_30322[(2)]);
var state_30322__$1 = state_30322;
var statearr_30329_30348 = state_30322__$1;
(statearr_30329_30348[(2)] = inst_30318);

(statearr_30329_30348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30323 === (3))){
var inst_30320 = (state_30322[(2)]);
var state_30322__$1 = state_30322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30322__$1,inst_30320);
} else {
if((state_val_30323 === (2))){
var inst_30292 = (state_30322[(10)]);
var inst_30294 = cljs.core.count.call(null,inst_30292);
var inst_30295 = (inst_30294 > (0));
var state_30322__$1 = state_30322;
if(cljs.core.truth_(inst_30295)){
var statearr_30331_30349 = state_30322__$1;
(statearr_30331_30349[(1)] = (4));

} else {
var statearr_30332_30350 = state_30322__$1;
(statearr_30332_30350[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30323 === (11))){
var inst_30292 = (state_30322[(10)]);
var inst_30311 = (state_30322[(2)]);
var tmp30330 = inst_30292;
var inst_30292__$1 = tmp30330;
var state_30322__$1 = (function (){var statearr_30333 = state_30322;
(statearr_30333[(10)] = inst_30292__$1);

(statearr_30333[(11)] = inst_30311);

return statearr_30333;
})();
var statearr_30334_30351 = state_30322__$1;
(statearr_30334_30351[(2)] = null);

(statearr_30334_30351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30323 === (9))){
var inst_30302 = (state_30322[(8)]);
var state_30322__$1 = state_30322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30322__$1,(11),out,inst_30302);
} else {
if((state_val_30323 === (5))){
var inst_30316 = cljs.core.async.close_BANG_.call(null,out);
var state_30322__$1 = state_30322;
var statearr_30335_30352 = state_30322__$1;
(statearr_30335_30352[(2)] = inst_30316);

(statearr_30335_30352[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30323 === (10))){
var inst_30314 = (state_30322[(2)]);
var state_30322__$1 = state_30322;
var statearr_30336_30353 = state_30322__$1;
(statearr_30336_30353[(2)] = inst_30314);

(statearr_30336_30353[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30323 === (8))){
var inst_30301 = (state_30322[(7)]);
var inst_30303 = (state_30322[(9)]);
var inst_30292 = (state_30322[(10)]);
var inst_30302 = (state_30322[(8)]);
var inst_30306 = (function (){var cs = inst_30292;
var vec__30297 = inst_30301;
var v = inst_30302;
var c = inst_30303;
return (function (p1__30288_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30288_SHARP_);
});
})();
var inst_30307 = cljs.core.filterv.call(null,inst_30306,inst_30292);
var inst_30292__$1 = inst_30307;
var state_30322__$1 = (function (){var statearr_30337 = state_30322;
(statearr_30337[(10)] = inst_30292__$1);

return statearr_30337;
})();
var statearr_30338_30354 = state_30322__$1;
(statearr_30338_30354[(2)] = null);

(statearr_30338_30354[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28824__auto__ = null;
var cljs$core$async$state_machine__28824__auto____0 = (function (){
var statearr_30339 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30339[(0)] = cljs$core$async$state_machine__28824__auto__);

(statearr_30339[(1)] = (1));

return statearr_30339;
});
var cljs$core$async$state_machine__28824__auto____1 = (function (state_30322){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_30322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e30340){if((e30340 instanceof Object)){
var ex__28827__auto__ = e30340;
var statearr_30341_30355 = state_30322;
(statearr_30341_30355[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30356 = state_30322;
state_30322 = G__30356;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
cljs$core$async$state_machine__28824__auto__ = function(state_30322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28824__auto____1.call(this,state_30322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28824__auto____0;
cljs$core$async$state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28824__auto____1;
return cljs$core$async$state_machine__28824__auto__;
})()
})();
var state__28920__auto__ = (function (){var statearr_30342 = f__28919__auto__.call(null);
(statearr_30342[(6)] = c__28918__auto___30344);

return statearr_30342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__30358 = arguments.length;
switch (G__30358) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28918__auto___30403 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = (function (state_30382){
var state_val_30383 = (state_30382[(1)]);
if((state_val_30383 === (7))){
var inst_30364 = (state_30382[(7)]);
var inst_30364__$1 = (state_30382[(2)]);
var inst_30365 = (inst_30364__$1 == null);
var inst_30366 = cljs.core.not.call(null,inst_30365);
var state_30382__$1 = (function (){var statearr_30384 = state_30382;
(statearr_30384[(7)] = inst_30364__$1);

return statearr_30384;
})();
if(inst_30366){
var statearr_30385_30404 = state_30382__$1;
(statearr_30385_30404[(1)] = (8));

} else {
var statearr_30386_30405 = state_30382__$1;
(statearr_30386_30405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30383 === (1))){
var inst_30359 = (0);
var state_30382__$1 = (function (){var statearr_30387 = state_30382;
(statearr_30387[(8)] = inst_30359);

return statearr_30387;
})();
var statearr_30388_30406 = state_30382__$1;
(statearr_30388_30406[(2)] = null);

(statearr_30388_30406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30383 === (4))){
var state_30382__$1 = state_30382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30382__$1,(7),ch);
} else {
if((state_val_30383 === (6))){
var inst_30377 = (state_30382[(2)]);
var state_30382__$1 = state_30382;
var statearr_30389_30407 = state_30382__$1;
(statearr_30389_30407[(2)] = inst_30377);

(statearr_30389_30407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30383 === (3))){
var inst_30379 = (state_30382[(2)]);
var inst_30380 = cljs.core.async.close_BANG_.call(null,out);
var state_30382__$1 = (function (){var statearr_30390 = state_30382;
(statearr_30390[(9)] = inst_30379);

return statearr_30390;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30382__$1,inst_30380);
} else {
if((state_val_30383 === (2))){
var inst_30359 = (state_30382[(8)]);
var inst_30361 = (inst_30359 < n);
var state_30382__$1 = state_30382;
if(cljs.core.truth_(inst_30361)){
var statearr_30391_30408 = state_30382__$1;
(statearr_30391_30408[(1)] = (4));

} else {
var statearr_30392_30409 = state_30382__$1;
(statearr_30392_30409[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30383 === (11))){
var inst_30359 = (state_30382[(8)]);
var inst_30369 = (state_30382[(2)]);
var inst_30370 = (inst_30359 + (1));
var inst_30359__$1 = inst_30370;
var state_30382__$1 = (function (){var statearr_30393 = state_30382;
(statearr_30393[(8)] = inst_30359__$1);

(statearr_30393[(10)] = inst_30369);

return statearr_30393;
})();
var statearr_30394_30410 = state_30382__$1;
(statearr_30394_30410[(2)] = null);

(statearr_30394_30410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30383 === (9))){
var state_30382__$1 = state_30382;
var statearr_30395_30411 = state_30382__$1;
(statearr_30395_30411[(2)] = null);

(statearr_30395_30411[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30383 === (5))){
var state_30382__$1 = state_30382;
var statearr_30396_30412 = state_30382__$1;
(statearr_30396_30412[(2)] = null);

(statearr_30396_30412[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30383 === (10))){
var inst_30374 = (state_30382[(2)]);
var state_30382__$1 = state_30382;
var statearr_30397_30413 = state_30382__$1;
(statearr_30397_30413[(2)] = inst_30374);

(statearr_30397_30413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30383 === (8))){
var inst_30364 = (state_30382[(7)]);
var state_30382__$1 = state_30382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30382__$1,(11),out,inst_30364);
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
});
return (function() {
var cljs$core$async$state_machine__28824__auto__ = null;
var cljs$core$async$state_machine__28824__auto____0 = (function (){
var statearr_30398 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30398[(0)] = cljs$core$async$state_machine__28824__auto__);

(statearr_30398[(1)] = (1));

return statearr_30398;
});
var cljs$core$async$state_machine__28824__auto____1 = (function (state_30382){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_30382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e30399){if((e30399 instanceof Object)){
var ex__28827__auto__ = e30399;
var statearr_30400_30414 = state_30382;
(statearr_30400_30414[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30415 = state_30382;
state_30382 = G__30415;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
cljs$core$async$state_machine__28824__auto__ = function(state_30382){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28824__auto____1.call(this,state_30382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28824__auto____0;
cljs$core$async$state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28824__auto____1;
return cljs$core$async$state_machine__28824__auto__;
})()
})();
var state__28920__auto__ = (function (){var statearr_30401 = f__28919__auto__.call(null);
(statearr_30401[(6)] = c__28918__auto___30403);

return statearr_30401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30417 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30417 = (function (f,ch,meta30418){
this.f = f;
this.ch = ch;
this.meta30418 = meta30418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30419,meta30418__$1){
var self__ = this;
var _30419__$1 = this;
return (new cljs.core.async.t_cljs$core$async30417(self__.f,self__.ch,meta30418__$1));
}));

(cljs.core.async.t_cljs$core$async30417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30419){
var self__ = this;
var _30419__$1 = this;
return self__.meta30418;
}));

(cljs.core.async.t_cljs$core$async30417.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30417.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async30417.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async30417.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30417.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30420 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30420 = (function (f,ch,meta30418,_,fn1,meta30421){
this.f = f;
this.ch = ch;
this.meta30418 = meta30418;
this._ = _;
this.fn1 = fn1;
this.meta30421 = meta30421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30422,meta30421__$1){
var self__ = this;
var _30422__$1 = this;
return (new cljs.core.async.t_cljs$core$async30420(self__.f,self__.ch,self__.meta30418,self__._,self__.fn1,meta30421__$1));
}));

(cljs.core.async.t_cljs$core$async30420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30422){
var self__ = this;
var _30422__$1 = this;
return self__.meta30421;
}));

(cljs.core.async.t_cljs$core$async30420.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30420.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async30420.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30420.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__30416_SHARP_){
return f1.call(null,(((p1__30416_SHARP_ == null))?null:self__.f.call(null,p1__30416_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async30420.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30418","meta30418",1325826267,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30417","cljs.core.async/t_cljs$core$async30417",1392254249,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30421","meta30421",1027108710,null)], null);
}));

(cljs.core.async.t_cljs$core$async30420.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30420.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30420");

(cljs.core.async.t_cljs$core$async30420.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async30420");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30420.
 */
cljs.core.async.__GT_t_cljs$core$async30420 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30420(f__$1,ch__$1,meta30418__$1,___$2,fn1__$1,meta30421){
return (new cljs.core.async.t_cljs$core$async30420(f__$1,ch__$1,meta30418__$1,___$2,fn1__$1,meta30421));
});

}

return (new cljs.core.async.t_cljs$core$async30420(self__.f,self__.ch,self__.meta30418,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async30417.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30417.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async30417.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30418","meta30418",1325826267,null)], null);
}));

(cljs.core.async.t_cljs$core$async30417.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30417.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30417");

(cljs.core.async.t_cljs$core$async30417.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async30417");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30417.
 */
cljs.core.async.__GT_t_cljs$core$async30417 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30417(f__$1,ch__$1,meta30418){
return (new cljs.core.async.t_cljs$core$async30417(f__$1,ch__$1,meta30418));
});

}

return (new cljs.core.async.t_cljs$core$async30417(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30423 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30423 = (function (f,ch,meta30424){
this.f = f;
this.ch = ch;
this.meta30424 = meta30424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30425,meta30424__$1){
var self__ = this;
var _30425__$1 = this;
return (new cljs.core.async.t_cljs$core$async30423(self__.f,self__.ch,meta30424__$1));
}));

(cljs.core.async.t_cljs$core$async30423.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30425){
var self__ = this;
var _30425__$1 = this;
return self__.meta30424;
}));

(cljs.core.async.t_cljs$core$async30423.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30423.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async30423.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30423.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30423.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30423.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async30423.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30424","meta30424",-2002839551,null)], null);
}));

(cljs.core.async.t_cljs$core$async30423.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30423.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30423");

(cljs.core.async.t_cljs$core$async30423.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async30423");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30423.
 */
cljs.core.async.__GT_t_cljs$core$async30423 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30423(f__$1,ch__$1,meta30424){
return (new cljs.core.async.t_cljs$core$async30423(f__$1,ch__$1,meta30424));
});

}

return (new cljs.core.async.t_cljs$core$async30423(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30426 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30426 = (function (p,ch,meta30427){
this.p = p;
this.ch = ch;
this.meta30427 = meta30427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30428,meta30427__$1){
var self__ = this;
var _30428__$1 = this;
return (new cljs.core.async.t_cljs$core$async30426(self__.p,self__.ch,meta30427__$1));
}));

(cljs.core.async.t_cljs$core$async30426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30428){
var self__ = this;
var _30428__$1 = this;
return self__.meta30427;
}));

(cljs.core.async.t_cljs$core$async30426.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30426.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async30426.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async30426.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30426.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30426.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30426.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async30426.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30427","meta30427",-1708240743,null)], null);
}));

(cljs.core.async.t_cljs$core$async30426.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30426.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30426");

(cljs.core.async.t_cljs$core$async30426.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async30426");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30426.
 */
cljs.core.async.__GT_t_cljs$core$async30426 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30426(p__$1,ch__$1,meta30427){
return (new cljs.core.async.t_cljs$core$async30426(p__$1,ch__$1,meta30427));
});

}

return (new cljs.core.async.t_cljs$core$async30426(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__30430 = arguments.length;
switch (G__30430) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28918__auto___30470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = (function (state_30451){
var state_val_30452 = (state_30451[(1)]);
if((state_val_30452 === (7))){
var inst_30447 = (state_30451[(2)]);
var state_30451__$1 = state_30451;
var statearr_30453_30471 = state_30451__$1;
(statearr_30453_30471[(2)] = inst_30447);

(statearr_30453_30471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (1))){
var state_30451__$1 = state_30451;
var statearr_30454_30472 = state_30451__$1;
(statearr_30454_30472[(2)] = null);

(statearr_30454_30472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (4))){
var inst_30433 = (state_30451[(7)]);
var inst_30433__$1 = (state_30451[(2)]);
var inst_30434 = (inst_30433__$1 == null);
var state_30451__$1 = (function (){var statearr_30455 = state_30451;
(statearr_30455[(7)] = inst_30433__$1);

return statearr_30455;
})();
if(cljs.core.truth_(inst_30434)){
var statearr_30456_30473 = state_30451__$1;
(statearr_30456_30473[(1)] = (5));

} else {
var statearr_30457_30474 = state_30451__$1;
(statearr_30457_30474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (6))){
var inst_30433 = (state_30451[(7)]);
var inst_30438 = p.call(null,inst_30433);
var state_30451__$1 = state_30451;
if(cljs.core.truth_(inst_30438)){
var statearr_30458_30475 = state_30451__$1;
(statearr_30458_30475[(1)] = (8));

} else {
var statearr_30459_30476 = state_30451__$1;
(statearr_30459_30476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (3))){
var inst_30449 = (state_30451[(2)]);
var state_30451__$1 = state_30451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30451__$1,inst_30449);
} else {
if((state_val_30452 === (2))){
var state_30451__$1 = state_30451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30451__$1,(4),ch);
} else {
if((state_val_30452 === (11))){
var inst_30441 = (state_30451[(2)]);
var state_30451__$1 = state_30451;
var statearr_30460_30477 = state_30451__$1;
(statearr_30460_30477[(2)] = inst_30441);

(statearr_30460_30477[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (9))){
var state_30451__$1 = state_30451;
var statearr_30461_30478 = state_30451__$1;
(statearr_30461_30478[(2)] = null);

(statearr_30461_30478[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (5))){
var inst_30436 = cljs.core.async.close_BANG_.call(null,out);
var state_30451__$1 = state_30451;
var statearr_30462_30479 = state_30451__$1;
(statearr_30462_30479[(2)] = inst_30436);

(statearr_30462_30479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (10))){
var inst_30444 = (state_30451[(2)]);
var state_30451__$1 = (function (){var statearr_30463 = state_30451;
(statearr_30463[(8)] = inst_30444);

return statearr_30463;
})();
var statearr_30464_30480 = state_30451__$1;
(statearr_30464_30480[(2)] = null);

(statearr_30464_30480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (8))){
var inst_30433 = (state_30451[(7)]);
var state_30451__$1 = state_30451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30451__$1,(11),out,inst_30433);
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
});
return (function() {
var cljs$core$async$state_machine__28824__auto__ = null;
var cljs$core$async$state_machine__28824__auto____0 = (function (){
var statearr_30465 = [null,null,null,null,null,null,null,null,null];
(statearr_30465[(0)] = cljs$core$async$state_machine__28824__auto__);

(statearr_30465[(1)] = (1));

return statearr_30465;
});
var cljs$core$async$state_machine__28824__auto____1 = (function (state_30451){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_30451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e30466){if((e30466 instanceof Object)){
var ex__28827__auto__ = e30466;
var statearr_30467_30481 = state_30451;
(statearr_30467_30481[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30482 = state_30451;
state_30451 = G__30482;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
cljs$core$async$state_machine__28824__auto__ = function(state_30451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28824__auto____1.call(this,state_30451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28824__auto____0;
cljs$core$async$state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28824__auto____1;
return cljs$core$async$state_machine__28824__auto__;
})()
})();
var state__28920__auto__ = (function (){var statearr_30468 = f__28919__auto__.call(null);
(statearr_30468[(6)] = c__28918__auto___30470);

return statearr_30468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__30484 = arguments.length;
switch (G__30484) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28918__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = (function (state_30547){
var state_val_30548 = (state_30547[(1)]);
if((state_val_30548 === (7))){
var inst_30543 = (state_30547[(2)]);
var state_30547__$1 = state_30547;
var statearr_30549_30587 = state_30547__$1;
(statearr_30549_30587[(2)] = inst_30543);

(statearr_30549_30587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30548 === (20))){
var inst_30513 = (state_30547[(7)]);
var inst_30524 = (state_30547[(2)]);
var inst_30525 = cljs.core.next.call(null,inst_30513);
var inst_30499 = inst_30525;
var inst_30500 = null;
var inst_30501 = (0);
var inst_30502 = (0);
var state_30547__$1 = (function (){var statearr_30550 = state_30547;
(statearr_30550[(8)] = inst_30499);

(statearr_30550[(9)] = inst_30524);

(statearr_30550[(10)] = inst_30500);

(statearr_30550[(11)] = inst_30502);

(statearr_30550[(12)] = inst_30501);

return statearr_30550;
})();
var statearr_30551_30588 = state_30547__$1;
(statearr_30551_30588[(2)] = null);

(statearr_30551_30588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30548 === (1))){
var state_30547__$1 = state_30547;
var statearr_30552_30589 = state_30547__$1;
(statearr_30552_30589[(2)] = null);

(statearr_30552_30589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30548 === (4))){
var inst_30488 = (state_30547[(13)]);
var inst_30488__$1 = (state_30547[(2)]);
var inst_30489 = (inst_30488__$1 == null);
var state_30547__$1 = (function (){var statearr_30553 = state_30547;
(statearr_30553[(13)] = inst_30488__$1);

return statearr_30553;
})();
if(cljs.core.truth_(inst_30489)){
var statearr_30554_30590 = state_30547__$1;
(statearr_30554_30590[(1)] = (5));

} else {
var statearr_30555_30591 = state_30547__$1;
(statearr_30555_30591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30548 === (15))){
var state_30547__$1 = state_30547;
var statearr_30559_30592 = state_30547__$1;
(statearr_30559_30592[(2)] = null);

(statearr_30559_30592[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30548 === (21))){
var state_30547__$1 = state_30547;
var statearr_30560_30593 = state_30547__$1;
(statearr_30560_30593[(2)] = null);

(statearr_30560_30593[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30548 === (13))){
var inst_30499 = (state_30547[(8)]);
var inst_30500 = (state_30547[(10)]);
var inst_30502 = (state_30547[(11)]);
var inst_30501 = (state_30547[(12)]);
var inst_30509 = (state_30547[(2)]);
var inst_30510 = (inst_30502 + (1));
var tmp30556 = inst_30499;
var tmp30557 = inst_30500;
var tmp30558 = inst_30501;
var inst_30499__$1 = tmp30556;
var inst_30500__$1 = tmp30557;
var inst_30501__$1 = tmp30558;
var inst_30502__$1 = inst_30510;
var state_30547__$1 = (function (){var statearr_30561 = state_30547;
(statearr_30561[(8)] = inst_30499__$1);

(statearr_30561[(10)] = inst_30500__$1);

(statearr_30561[(11)] = inst_30502__$1);

(statearr_30561[(14)] = inst_30509);

(statearr_30561[(12)] = inst_30501__$1);

return statearr_30561;
})();
var statearr_30562_30594 = state_30547__$1;
(statearr_30562_30594[(2)] = null);

(statearr_30562_30594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30548 === (22))){
var state_30547__$1 = state_30547;
var statearr_30563_30595 = state_30547__$1;
(statearr_30563_30595[(2)] = null);

(statearr_30563_30595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30548 === (6))){
var inst_30488 = (state_30547[(13)]);
var inst_30497 = f.call(null,inst_30488);
var inst_30498 = cljs.core.seq.call(null,inst_30497);
var inst_30499 = inst_30498;
var inst_30500 = null;
var inst_30501 = (0);
var inst_30502 = (0);
var state_30547__$1 = (function (){var statearr_30564 = state_30547;
(statearr_30564[(8)] = inst_30499);

(statearr_30564[(10)] = inst_30500);

(statearr_30564[(11)] = inst_30502);

(statearr_30564[(12)] = inst_30501);

return statearr_30564;
})();
var statearr_30565_30596 = state_30547__$1;
(statearr_30565_30596[(2)] = null);

(statearr_30565_30596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30548 === (17))){
var inst_30513 = (state_30547[(7)]);
var inst_30517 = cljs.core.chunk_first.call(null,inst_30513);
var inst_30518 = cljs.core.chunk_rest.call(null,inst_30513);
var inst_30519 = cljs.core.count.call(null,inst_30517);
var inst_30499 = inst_30518;
var inst_30500 = inst_30517;
var inst_30501 = inst_30519;
var inst_30502 = (0);
var state_30547__$1 = (function (){var statearr_30566 = state_30547;
(statearr_30566[(8)] = inst_30499);

(statearr_30566[(10)] = inst_30500);

(statearr_30566[(11)] = inst_30502);

(statearr_30566[(12)] = inst_30501);

return statearr_30566;
})();
var statearr_30567_30597 = state_30547__$1;
(statearr_30567_30597[(2)] = null);

(statearr_30567_30597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30548 === (3))){
var inst_30545 = (state_30547[(2)]);
var state_30547__$1 = state_30547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30547__$1,inst_30545);
} else {
if((state_val_30548 === (12))){
var inst_30533 = (state_30547[(2)]);
var state_30547__$1 = state_30547;
var statearr_30568_30598 = state_30547__$1;
(statearr_30568_30598[(2)] = inst_30533);

(statearr_30568_30598[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30548 === (2))){
var state_30547__$1 = state_30547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30547__$1,(4),in$);
} else {
if((state_val_30548 === (23))){
var inst_30541 = (state_30547[(2)]);
var state_30547__$1 = state_30547;
var statearr_30569_30599 = state_30547__$1;
(statearr_30569_30599[(2)] = inst_30541);

(statearr_30569_30599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30548 === (19))){
var inst_30528 = (state_30547[(2)]);
var state_30547__$1 = state_30547;
var statearr_30570_30600 = state_30547__$1;
(statearr_30570_30600[(2)] = inst_30528);

(statearr_30570_30600[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30548 === (11))){
var inst_30499 = (state_30547[(8)]);
var inst_30513 = (state_30547[(7)]);
var inst_30513__$1 = cljs.core.seq.call(null,inst_30499);
var state_30547__$1 = (function (){var statearr_30571 = state_30547;
(statearr_30571[(7)] = inst_30513__$1);

return statearr_30571;
})();
if(inst_30513__$1){
var statearr_30572_30601 = state_30547__$1;
(statearr_30572_30601[(1)] = (14));

} else {
var statearr_30573_30602 = state_30547__$1;
(statearr_30573_30602[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30548 === (9))){
var inst_30535 = (state_30547[(2)]);
var inst_30536 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30547__$1 = (function (){var statearr_30574 = state_30547;
(statearr_30574[(15)] = inst_30535);

return statearr_30574;
})();
if(cljs.core.truth_(inst_30536)){
var statearr_30575_30603 = state_30547__$1;
(statearr_30575_30603[(1)] = (21));

} else {
var statearr_30576_30604 = state_30547__$1;
(statearr_30576_30604[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30548 === (5))){
var inst_30491 = cljs.core.async.close_BANG_.call(null,out);
var state_30547__$1 = state_30547;
var statearr_30577_30605 = state_30547__$1;
(statearr_30577_30605[(2)] = inst_30491);

(statearr_30577_30605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30548 === (14))){
var inst_30513 = (state_30547[(7)]);
var inst_30515 = cljs.core.chunked_seq_QMARK_.call(null,inst_30513);
var state_30547__$1 = state_30547;
if(inst_30515){
var statearr_30578_30606 = state_30547__$1;
(statearr_30578_30606[(1)] = (17));

} else {
var statearr_30579_30607 = state_30547__$1;
(statearr_30579_30607[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30548 === (16))){
var inst_30531 = (state_30547[(2)]);
var state_30547__$1 = state_30547;
var statearr_30580_30608 = state_30547__$1;
(statearr_30580_30608[(2)] = inst_30531);

(statearr_30580_30608[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30548 === (10))){
var inst_30500 = (state_30547[(10)]);
var inst_30502 = (state_30547[(11)]);
var inst_30507 = cljs.core._nth.call(null,inst_30500,inst_30502);
var state_30547__$1 = state_30547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30547__$1,(13),out,inst_30507);
} else {
if((state_val_30548 === (18))){
var inst_30513 = (state_30547[(7)]);
var inst_30522 = cljs.core.first.call(null,inst_30513);
var state_30547__$1 = state_30547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30547__$1,(20),out,inst_30522);
} else {
if((state_val_30548 === (8))){
var inst_30502 = (state_30547[(11)]);
var inst_30501 = (state_30547[(12)]);
var inst_30504 = (inst_30502 < inst_30501);
var inst_30505 = inst_30504;
var state_30547__$1 = state_30547;
if(cljs.core.truth_(inst_30505)){
var statearr_30581_30609 = state_30547__$1;
(statearr_30581_30609[(1)] = (10));

} else {
var statearr_30582_30610 = state_30547__$1;
(statearr_30582_30610[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28824__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28824__auto____0 = (function (){
var statearr_30583 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30583[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28824__auto__);

(statearr_30583[(1)] = (1));

return statearr_30583;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28824__auto____1 = (function (state_30547){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_30547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e30584){if((e30584 instanceof Object)){
var ex__28827__auto__ = e30584;
var statearr_30585_30611 = state_30547;
(statearr_30585_30611[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30612 = state_30547;
state_30547 = G__30612;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28824__auto__ = function(state_30547){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28824__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28824__auto____1.call(this,state_30547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28824__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28824__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28824__auto__;
})()
})();
var state__28920__auto__ = (function (){var statearr_30586 = f__28919__auto__.call(null);
(statearr_30586[(6)] = c__28918__auto__);

return statearr_30586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
}));

return c__28918__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__30614 = arguments.length;
switch (G__30614) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__30617 = arguments.length;
switch (G__30617) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__30620 = arguments.length;
switch (G__30620) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28918__auto___30667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = (function (state_30644){
var state_val_30645 = (state_30644[(1)]);
if((state_val_30645 === (7))){
var inst_30639 = (state_30644[(2)]);
var state_30644__$1 = state_30644;
var statearr_30646_30668 = state_30644__$1;
(statearr_30646_30668[(2)] = inst_30639);

(statearr_30646_30668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30645 === (1))){
var inst_30621 = null;
var state_30644__$1 = (function (){var statearr_30647 = state_30644;
(statearr_30647[(7)] = inst_30621);

return statearr_30647;
})();
var statearr_30648_30669 = state_30644__$1;
(statearr_30648_30669[(2)] = null);

(statearr_30648_30669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30645 === (4))){
var inst_30624 = (state_30644[(8)]);
var inst_30624__$1 = (state_30644[(2)]);
var inst_30625 = (inst_30624__$1 == null);
var inst_30626 = cljs.core.not.call(null,inst_30625);
var state_30644__$1 = (function (){var statearr_30649 = state_30644;
(statearr_30649[(8)] = inst_30624__$1);

return statearr_30649;
})();
if(inst_30626){
var statearr_30650_30670 = state_30644__$1;
(statearr_30650_30670[(1)] = (5));

} else {
var statearr_30651_30671 = state_30644__$1;
(statearr_30651_30671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30645 === (6))){
var state_30644__$1 = state_30644;
var statearr_30652_30672 = state_30644__$1;
(statearr_30652_30672[(2)] = null);

(statearr_30652_30672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30645 === (3))){
var inst_30641 = (state_30644[(2)]);
var inst_30642 = cljs.core.async.close_BANG_.call(null,out);
var state_30644__$1 = (function (){var statearr_30653 = state_30644;
(statearr_30653[(9)] = inst_30641);

return statearr_30653;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30644__$1,inst_30642);
} else {
if((state_val_30645 === (2))){
var state_30644__$1 = state_30644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30644__$1,(4),ch);
} else {
if((state_val_30645 === (11))){
var inst_30624 = (state_30644[(8)]);
var inst_30633 = (state_30644[(2)]);
var inst_30621 = inst_30624;
var state_30644__$1 = (function (){var statearr_30654 = state_30644;
(statearr_30654[(10)] = inst_30633);

(statearr_30654[(7)] = inst_30621);

return statearr_30654;
})();
var statearr_30655_30673 = state_30644__$1;
(statearr_30655_30673[(2)] = null);

(statearr_30655_30673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30645 === (9))){
var inst_30624 = (state_30644[(8)]);
var state_30644__$1 = state_30644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30644__$1,(11),out,inst_30624);
} else {
if((state_val_30645 === (5))){
var inst_30621 = (state_30644[(7)]);
var inst_30624 = (state_30644[(8)]);
var inst_30628 = cljs.core._EQ_.call(null,inst_30624,inst_30621);
var state_30644__$1 = state_30644;
if(inst_30628){
var statearr_30657_30674 = state_30644__$1;
(statearr_30657_30674[(1)] = (8));

} else {
var statearr_30658_30675 = state_30644__$1;
(statearr_30658_30675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30645 === (10))){
var inst_30636 = (state_30644[(2)]);
var state_30644__$1 = state_30644;
var statearr_30659_30676 = state_30644__$1;
(statearr_30659_30676[(2)] = inst_30636);

(statearr_30659_30676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30645 === (8))){
var inst_30621 = (state_30644[(7)]);
var tmp30656 = inst_30621;
var inst_30621__$1 = tmp30656;
var state_30644__$1 = (function (){var statearr_30660 = state_30644;
(statearr_30660[(7)] = inst_30621__$1);

return statearr_30660;
})();
var statearr_30661_30677 = state_30644__$1;
(statearr_30661_30677[(2)] = null);

(statearr_30661_30677[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28824__auto__ = null;
var cljs$core$async$state_machine__28824__auto____0 = (function (){
var statearr_30662 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30662[(0)] = cljs$core$async$state_machine__28824__auto__);

(statearr_30662[(1)] = (1));

return statearr_30662;
});
var cljs$core$async$state_machine__28824__auto____1 = (function (state_30644){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_30644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e30663){if((e30663 instanceof Object)){
var ex__28827__auto__ = e30663;
var statearr_30664_30678 = state_30644;
(statearr_30664_30678[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30679 = state_30644;
state_30644 = G__30679;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
cljs$core$async$state_machine__28824__auto__ = function(state_30644){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28824__auto____1.call(this,state_30644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28824__auto____0;
cljs$core$async$state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28824__auto____1;
return cljs$core$async$state_machine__28824__auto__;
})()
})();
var state__28920__auto__ = (function (){var statearr_30665 = f__28919__auto__.call(null);
(statearr_30665[(6)] = c__28918__auto___30667);

return statearr_30665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__30681 = arguments.length;
switch (G__30681) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28918__auto___30747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = (function (state_30719){
var state_val_30720 = (state_30719[(1)]);
if((state_val_30720 === (7))){
var inst_30715 = (state_30719[(2)]);
var state_30719__$1 = state_30719;
var statearr_30721_30748 = state_30719__$1;
(statearr_30721_30748[(2)] = inst_30715);

(statearr_30721_30748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30720 === (1))){
var inst_30682 = (new Array(n));
var inst_30683 = inst_30682;
var inst_30684 = (0);
var state_30719__$1 = (function (){var statearr_30722 = state_30719;
(statearr_30722[(7)] = inst_30684);

(statearr_30722[(8)] = inst_30683);

return statearr_30722;
})();
var statearr_30723_30749 = state_30719__$1;
(statearr_30723_30749[(2)] = null);

(statearr_30723_30749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30720 === (4))){
var inst_30687 = (state_30719[(9)]);
var inst_30687__$1 = (state_30719[(2)]);
var inst_30688 = (inst_30687__$1 == null);
var inst_30689 = cljs.core.not.call(null,inst_30688);
var state_30719__$1 = (function (){var statearr_30724 = state_30719;
(statearr_30724[(9)] = inst_30687__$1);

return statearr_30724;
})();
if(inst_30689){
var statearr_30725_30750 = state_30719__$1;
(statearr_30725_30750[(1)] = (5));

} else {
var statearr_30726_30751 = state_30719__$1;
(statearr_30726_30751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30720 === (15))){
var inst_30709 = (state_30719[(2)]);
var state_30719__$1 = state_30719;
var statearr_30727_30752 = state_30719__$1;
(statearr_30727_30752[(2)] = inst_30709);

(statearr_30727_30752[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30720 === (13))){
var state_30719__$1 = state_30719;
var statearr_30728_30753 = state_30719__$1;
(statearr_30728_30753[(2)] = null);

(statearr_30728_30753[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30720 === (6))){
var inst_30684 = (state_30719[(7)]);
var inst_30705 = (inst_30684 > (0));
var state_30719__$1 = state_30719;
if(cljs.core.truth_(inst_30705)){
var statearr_30729_30754 = state_30719__$1;
(statearr_30729_30754[(1)] = (12));

} else {
var statearr_30730_30755 = state_30719__$1;
(statearr_30730_30755[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30720 === (3))){
var inst_30717 = (state_30719[(2)]);
var state_30719__$1 = state_30719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30719__$1,inst_30717);
} else {
if((state_val_30720 === (12))){
var inst_30683 = (state_30719[(8)]);
var inst_30707 = cljs.core.vec.call(null,inst_30683);
var state_30719__$1 = state_30719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30719__$1,(15),out,inst_30707);
} else {
if((state_val_30720 === (2))){
var state_30719__$1 = state_30719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30719__$1,(4),ch);
} else {
if((state_val_30720 === (11))){
var inst_30699 = (state_30719[(2)]);
var inst_30700 = (new Array(n));
var inst_30683 = inst_30700;
var inst_30684 = (0);
var state_30719__$1 = (function (){var statearr_30731 = state_30719;
(statearr_30731[(7)] = inst_30684);

(statearr_30731[(8)] = inst_30683);

(statearr_30731[(10)] = inst_30699);

return statearr_30731;
})();
var statearr_30732_30756 = state_30719__$1;
(statearr_30732_30756[(2)] = null);

(statearr_30732_30756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30720 === (9))){
var inst_30683 = (state_30719[(8)]);
var inst_30697 = cljs.core.vec.call(null,inst_30683);
var state_30719__$1 = state_30719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30719__$1,(11),out,inst_30697);
} else {
if((state_val_30720 === (5))){
var inst_30692 = (state_30719[(11)]);
var inst_30684 = (state_30719[(7)]);
var inst_30683 = (state_30719[(8)]);
var inst_30687 = (state_30719[(9)]);
var inst_30691 = (inst_30683[inst_30684] = inst_30687);
var inst_30692__$1 = (inst_30684 + (1));
var inst_30693 = (inst_30692__$1 < n);
var state_30719__$1 = (function (){var statearr_30733 = state_30719;
(statearr_30733[(11)] = inst_30692__$1);

(statearr_30733[(12)] = inst_30691);

return statearr_30733;
})();
if(cljs.core.truth_(inst_30693)){
var statearr_30734_30757 = state_30719__$1;
(statearr_30734_30757[(1)] = (8));

} else {
var statearr_30735_30758 = state_30719__$1;
(statearr_30735_30758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30720 === (14))){
var inst_30712 = (state_30719[(2)]);
var inst_30713 = cljs.core.async.close_BANG_.call(null,out);
var state_30719__$1 = (function (){var statearr_30737 = state_30719;
(statearr_30737[(13)] = inst_30712);

return statearr_30737;
})();
var statearr_30738_30759 = state_30719__$1;
(statearr_30738_30759[(2)] = inst_30713);

(statearr_30738_30759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30720 === (10))){
var inst_30703 = (state_30719[(2)]);
var state_30719__$1 = state_30719;
var statearr_30739_30760 = state_30719__$1;
(statearr_30739_30760[(2)] = inst_30703);

(statearr_30739_30760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30720 === (8))){
var inst_30692 = (state_30719[(11)]);
var inst_30683 = (state_30719[(8)]);
var tmp30736 = inst_30683;
var inst_30683__$1 = tmp30736;
var inst_30684 = inst_30692;
var state_30719__$1 = (function (){var statearr_30740 = state_30719;
(statearr_30740[(7)] = inst_30684);

(statearr_30740[(8)] = inst_30683__$1);

return statearr_30740;
})();
var statearr_30741_30761 = state_30719__$1;
(statearr_30741_30761[(2)] = null);

(statearr_30741_30761[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28824__auto__ = null;
var cljs$core$async$state_machine__28824__auto____0 = (function (){
var statearr_30742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30742[(0)] = cljs$core$async$state_machine__28824__auto__);

(statearr_30742[(1)] = (1));

return statearr_30742;
});
var cljs$core$async$state_machine__28824__auto____1 = (function (state_30719){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_30719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e30743){if((e30743 instanceof Object)){
var ex__28827__auto__ = e30743;
var statearr_30744_30762 = state_30719;
(statearr_30744_30762[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30763 = state_30719;
state_30719 = G__30763;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
cljs$core$async$state_machine__28824__auto__ = function(state_30719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28824__auto____1.call(this,state_30719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28824__auto____0;
cljs$core$async$state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28824__auto____1;
return cljs$core$async$state_machine__28824__auto__;
})()
})();
var state__28920__auto__ = (function (){var statearr_30745 = f__28919__auto__.call(null);
(statearr_30745[(6)] = c__28918__auto___30747);

return statearr_30745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__30765 = arguments.length;
switch (G__30765) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28918__auto___30835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28919__auto__ = (function (){var switch__28823__auto__ = (function (state_30807){
var state_val_30808 = (state_30807[(1)]);
if((state_val_30808 === (7))){
var inst_30803 = (state_30807[(2)]);
var state_30807__$1 = state_30807;
var statearr_30809_30836 = state_30807__$1;
(statearr_30809_30836[(2)] = inst_30803);

(statearr_30809_30836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (1))){
var inst_30766 = [];
var inst_30767 = inst_30766;
var inst_30768 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30807__$1 = (function (){var statearr_30810 = state_30807;
(statearr_30810[(7)] = inst_30767);

(statearr_30810[(8)] = inst_30768);

return statearr_30810;
})();
var statearr_30811_30837 = state_30807__$1;
(statearr_30811_30837[(2)] = null);

(statearr_30811_30837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (4))){
var inst_30771 = (state_30807[(9)]);
var inst_30771__$1 = (state_30807[(2)]);
var inst_30772 = (inst_30771__$1 == null);
var inst_30773 = cljs.core.not.call(null,inst_30772);
var state_30807__$1 = (function (){var statearr_30812 = state_30807;
(statearr_30812[(9)] = inst_30771__$1);

return statearr_30812;
})();
if(inst_30773){
var statearr_30813_30838 = state_30807__$1;
(statearr_30813_30838[(1)] = (5));

} else {
var statearr_30814_30839 = state_30807__$1;
(statearr_30814_30839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (15))){
var inst_30797 = (state_30807[(2)]);
var state_30807__$1 = state_30807;
var statearr_30815_30840 = state_30807__$1;
(statearr_30815_30840[(2)] = inst_30797);

(statearr_30815_30840[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (13))){
var state_30807__$1 = state_30807;
var statearr_30816_30841 = state_30807__$1;
(statearr_30816_30841[(2)] = null);

(statearr_30816_30841[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (6))){
var inst_30767 = (state_30807[(7)]);
var inst_30792 = inst_30767.length;
var inst_30793 = (inst_30792 > (0));
var state_30807__$1 = state_30807;
if(cljs.core.truth_(inst_30793)){
var statearr_30817_30842 = state_30807__$1;
(statearr_30817_30842[(1)] = (12));

} else {
var statearr_30818_30843 = state_30807__$1;
(statearr_30818_30843[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (3))){
var inst_30805 = (state_30807[(2)]);
var state_30807__$1 = state_30807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30807__$1,inst_30805);
} else {
if((state_val_30808 === (12))){
var inst_30767 = (state_30807[(7)]);
var inst_30795 = cljs.core.vec.call(null,inst_30767);
var state_30807__$1 = state_30807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30807__$1,(15),out,inst_30795);
} else {
if((state_val_30808 === (2))){
var state_30807__$1 = state_30807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30807__$1,(4),ch);
} else {
if((state_val_30808 === (11))){
var inst_30771 = (state_30807[(9)]);
var inst_30775 = (state_30807[(10)]);
var inst_30785 = (state_30807[(2)]);
var inst_30786 = [];
var inst_30787 = inst_30786.push(inst_30771);
var inst_30767 = inst_30786;
var inst_30768 = inst_30775;
var state_30807__$1 = (function (){var statearr_30819 = state_30807;
(statearr_30819[(11)] = inst_30787);

(statearr_30819[(7)] = inst_30767);

(statearr_30819[(12)] = inst_30785);

(statearr_30819[(8)] = inst_30768);

return statearr_30819;
})();
var statearr_30820_30844 = state_30807__$1;
(statearr_30820_30844[(2)] = null);

(statearr_30820_30844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (9))){
var inst_30767 = (state_30807[(7)]);
var inst_30783 = cljs.core.vec.call(null,inst_30767);
var state_30807__$1 = state_30807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30807__$1,(11),out,inst_30783);
} else {
if((state_val_30808 === (5))){
var inst_30771 = (state_30807[(9)]);
var inst_30775 = (state_30807[(10)]);
var inst_30768 = (state_30807[(8)]);
var inst_30775__$1 = f.call(null,inst_30771);
var inst_30776 = cljs.core._EQ_.call(null,inst_30775__$1,inst_30768);
var inst_30777 = cljs.core.keyword_identical_QMARK_.call(null,inst_30768,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30778 = ((inst_30776) || (inst_30777));
var state_30807__$1 = (function (){var statearr_30821 = state_30807;
(statearr_30821[(10)] = inst_30775__$1);

return statearr_30821;
})();
if(cljs.core.truth_(inst_30778)){
var statearr_30822_30845 = state_30807__$1;
(statearr_30822_30845[(1)] = (8));

} else {
var statearr_30823_30846 = state_30807__$1;
(statearr_30823_30846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (14))){
var inst_30800 = (state_30807[(2)]);
var inst_30801 = cljs.core.async.close_BANG_.call(null,out);
var state_30807__$1 = (function (){var statearr_30825 = state_30807;
(statearr_30825[(13)] = inst_30800);

return statearr_30825;
})();
var statearr_30826_30847 = state_30807__$1;
(statearr_30826_30847[(2)] = inst_30801);

(statearr_30826_30847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (10))){
var inst_30790 = (state_30807[(2)]);
var state_30807__$1 = state_30807;
var statearr_30827_30848 = state_30807__$1;
(statearr_30827_30848[(2)] = inst_30790);

(statearr_30827_30848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (8))){
var inst_30771 = (state_30807[(9)]);
var inst_30775 = (state_30807[(10)]);
var inst_30767 = (state_30807[(7)]);
var inst_30780 = inst_30767.push(inst_30771);
var tmp30824 = inst_30767;
var inst_30767__$1 = tmp30824;
var inst_30768 = inst_30775;
var state_30807__$1 = (function (){var statearr_30828 = state_30807;
(statearr_30828[(14)] = inst_30780);

(statearr_30828[(7)] = inst_30767__$1);

(statearr_30828[(8)] = inst_30768);

return statearr_30828;
})();
var statearr_30829_30849 = state_30807__$1;
(statearr_30829_30849[(2)] = null);

(statearr_30829_30849[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28824__auto__ = null;
var cljs$core$async$state_machine__28824__auto____0 = (function (){
var statearr_30830 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30830[(0)] = cljs$core$async$state_machine__28824__auto__);

(statearr_30830[(1)] = (1));

return statearr_30830;
});
var cljs$core$async$state_machine__28824__auto____1 = (function (state_30807){
while(true){
var ret_value__28825__auto__ = (function (){try{while(true){
var result__28826__auto__ = switch__28823__auto__.call(null,state_30807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28826__auto__;
}
break;
}
}catch (e30831){if((e30831 instanceof Object)){
var ex__28827__auto__ = e30831;
var statearr_30832_30850 = state_30807;
(statearr_30832_30850[(5)] = ex__28827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30851 = state_30807;
state_30807 = G__30851;
continue;
} else {
return ret_value__28825__auto__;
}
break;
}
});
cljs$core$async$state_machine__28824__auto__ = function(state_30807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28824__auto____1.call(this,state_30807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28824__auto____0;
cljs$core$async$state_machine__28824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28824__auto____1;
return cljs$core$async$state_machine__28824__auto__;
})()
})();
var state__28920__auto__ = (function (){var statearr_30833 = f__28919__auto__.call(null);
(statearr_30833[(6)] = c__28918__auto___30835);

return statearr_30833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1602418809378
