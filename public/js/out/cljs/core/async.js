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
var G__26406 = arguments.length;
switch (G__26406) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26407 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26407 = (function (f,blockable,meta26408){
this.f = f;
this.blockable = blockable;
this.meta26408 = meta26408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26409,meta26408__$1){
var self__ = this;
var _26409__$1 = this;
return (new cljs.core.async.t_cljs$core$async26407(self__.f,self__.blockable,meta26408__$1));
}));

(cljs.core.async.t_cljs$core$async26407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26409){
var self__ = this;
var _26409__$1 = this;
return self__.meta26408;
}));

(cljs.core.async.t_cljs$core$async26407.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26407.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26407.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async26407.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async26407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26408","meta26408",1034455475,null)], null);
}));

(cljs.core.async.t_cljs$core$async26407.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26407.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26407");

(cljs.core.async.t_cljs$core$async26407.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26407");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26407.
 */
cljs.core.async.__GT_t_cljs$core$async26407 = (function cljs$core$async$__GT_t_cljs$core$async26407(f__$1,blockable__$1,meta26408){
return (new cljs.core.async.t_cljs$core$async26407(f__$1,blockable__$1,meta26408));
});

}

return (new cljs.core.async.t_cljs$core$async26407(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26413 = arguments.length;
switch (G__26413) {
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
var G__26416 = arguments.length;
switch (G__26416) {
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
var G__26419 = arguments.length;
switch (G__26419) {
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
var val_26421 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26421);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_26421);
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
var G__26423 = arguments.length;
switch (G__26423) {
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
var n__4613__auto___26425 = n;
var x_26426 = (0);
while(true){
if((x_26426 < n__4613__auto___26425)){
(a[x_26426] = (0));

var G__26427 = (x_26426 + (1));
x_26426 = G__26427;
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

var G__26428 = (i + (1));
i = G__26428;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26429 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26429 = (function (flag,meta26430){
this.flag = flag;
this.meta26430 = meta26430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26431,meta26430__$1){
var self__ = this;
var _26431__$1 = this;
return (new cljs.core.async.t_cljs$core$async26429(self__.flag,meta26430__$1));
}));

(cljs.core.async.t_cljs$core$async26429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26431){
var self__ = this;
var _26431__$1 = this;
return self__.meta26430;
}));

(cljs.core.async.t_cljs$core$async26429.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26429.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async26429.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26429.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async26429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26430","meta26430",549979436,null)], null);
}));

(cljs.core.async.t_cljs$core$async26429.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26429");

(cljs.core.async.t_cljs$core$async26429.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26429");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26429.
 */
cljs.core.async.__GT_t_cljs$core$async26429 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26429(flag__$1,meta26430){
return (new cljs.core.async.t_cljs$core$async26429(flag__$1,meta26430));
});

}

return (new cljs.core.async.t_cljs$core$async26429(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26432 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26432 = (function (flag,cb,meta26433){
this.flag = flag;
this.cb = cb;
this.meta26433 = meta26433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26434,meta26433__$1){
var self__ = this;
var _26434__$1 = this;
return (new cljs.core.async.t_cljs$core$async26432(self__.flag,self__.cb,meta26433__$1));
}));

(cljs.core.async.t_cljs$core$async26432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26434){
var self__ = this;
var _26434__$1 = this;
return self__.meta26433;
}));

(cljs.core.async.t_cljs$core$async26432.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26432.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async26432.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26432.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async26432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26433","meta26433",799021011,null)], null);
}));

(cljs.core.async.t_cljs$core$async26432.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26432.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26432");

(cljs.core.async.t_cljs$core$async26432.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26432");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26432.
 */
cljs.core.async.__GT_t_cljs$core$async26432 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26432(flag__$1,cb__$1,meta26433){
return (new cljs.core.async.t_cljs$core$async26432(flag__$1,cb__$1,meta26433));
});

}

return (new cljs.core.async.t_cljs$core$async26432(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26435_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26435_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26436_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26436_SHARP_,port], null));
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
var G__26437 = (i + (1));
i = G__26437;
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
var len__4736__auto___26443 = arguments.length;
var i__4737__auto___26444 = (0);
while(true){
if((i__4737__auto___26444 < len__4736__auto___26443)){
args__4742__auto__.push((arguments[i__4737__auto___26444]));

var G__26445 = (i__4737__auto___26444 + (1));
i__4737__auto___26444 = G__26445;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26440){
var map__26441 = p__26440;
var map__26441__$1 = (((((!((map__26441 == null))))?(((((map__26441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26441):map__26441);
var opts = map__26441__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26438){
var G__26439 = cljs.core.first.call(null,seq26438);
var seq26438__$1 = cljs.core.next.call(null,seq26438);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26439,seq26438__$1);
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
var G__26447 = arguments.length;
switch (G__26447) {
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
var c__26346__auto___26493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26347__auto__ = (function (){var switch__26251__auto__ = (function (state_26471){
var state_val_26472 = (state_26471[(1)]);
if((state_val_26472 === (7))){
var inst_26467 = (state_26471[(2)]);
var state_26471__$1 = state_26471;
var statearr_26473_26494 = state_26471__$1;
(statearr_26473_26494[(2)] = inst_26467);

(statearr_26473_26494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (1))){
var state_26471__$1 = state_26471;
var statearr_26474_26495 = state_26471__$1;
(statearr_26474_26495[(2)] = null);

(statearr_26474_26495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (4))){
var inst_26450 = (state_26471[(7)]);
var inst_26450__$1 = (state_26471[(2)]);
var inst_26451 = (inst_26450__$1 == null);
var state_26471__$1 = (function (){var statearr_26475 = state_26471;
(statearr_26475[(7)] = inst_26450__$1);

return statearr_26475;
})();
if(cljs.core.truth_(inst_26451)){
var statearr_26476_26496 = state_26471__$1;
(statearr_26476_26496[(1)] = (5));

} else {
var statearr_26477_26497 = state_26471__$1;
(statearr_26477_26497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (13))){
var state_26471__$1 = state_26471;
var statearr_26478_26498 = state_26471__$1;
(statearr_26478_26498[(2)] = null);

(statearr_26478_26498[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (6))){
var inst_26450 = (state_26471[(7)]);
var state_26471__$1 = state_26471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26471__$1,(11),to,inst_26450);
} else {
if((state_val_26472 === (3))){
var inst_26469 = (state_26471[(2)]);
var state_26471__$1 = state_26471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26471__$1,inst_26469);
} else {
if((state_val_26472 === (12))){
var state_26471__$1 = state_26471;
var statearr_26479_26499 = state_26471__$1;
(statearr_26479_26499[(2)] = null);

(statearr_26479_26499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (2))){
var state_26471__$1 = state_26471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26471__$1,(4),from);
} else {
if((state_val_26472 === (11))){
var inst_26460 = (state_26471[(2)]);
var state_26471__$1 = state_26471;
if(cljs.core.truth_(inst_26460)){
var statearr_26480_26500 = state_26471__$1;
(statearr_26480_26500[(1)] = (12));

} else {
var statearr_26481_26501 = state_26471__$1;
(statearr_26481_26501[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (9))){
var state_26471__$1 = state_26471;
var statearr_26482_26502 = state_26471__$1;
(statearr_26482_26502[(2)] = null);

(statearr_26482_26502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (5))){
var state_26471__$1 = state_26471;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26483_26503 = state_26471__$1;
(statearr_26483_26503[(1)] = (8));

} else {
var statearr_26484_26504 = state_26471__$1;
(statearr_26484_26504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (14))){
var inst_26465 = (state_26471[(2)]);
var state_26471__$1 = state_26471;
var statearr_26485_26505 = state_26471__$1;
(statearr_26485_26505[(2)] = inst_26465);

(statearr_26485_26505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (10))){
var inst_26457 = (state_26471[(2)]);
var state_26471__$1 = state_26471;
var statearr_26486_26506 = state_26471__$1;
(statearr_26486_26506[(2)] = inst_26457);

(statearr_26486_26506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (8))){
var inst_26454 = cljs.core.async.close_BANG_.call(null,to);
var state_26471__$1 = state_26471;
var statearr_26487_26507 = state_26471__$1;
(statearr_26487_26507[(2)] = inst_26454);

(statearr_26487_26507[(1)] = (10));


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
var cljs$core$async$state_machine__26252__auto__ = null;
var cljs$core$async$state_machine__26252__auto____0 = (function (){
var statearr_26488 = [null,null,null,null,null,null,null,null];
(statearr_26488[(0)] = cljs$core$async$state_machine__26252__auto__);

(statearr_26488[(1)] = (1));

return statearr_26488;
});
var cljs$core$async$state_machine__26252__auto____1 = (function (state_26471){
while(true){
var ret_value__26253__auto__ = (function (){try{while(true){
var result__26254__auto__ = switch__26251__auto__.call(null,state_26471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26254__auto__;
}
break;
}
}catch (e26489){if((e26489 instanceof Object)){
var ex__26255__auto__ = e26489;
var statearr_26490_26508 = state_26471;
(statearr_26490_26508[(5)] = ex__26255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26509 = state_26471;
state_26471 = G__26509;
continue;
} else {
return ret_value__26253__auto__;
}
break;
}
});
cljs$core$async$state_machine__26252__auto__ = function(state_26471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26252__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26252__auto____1.call(this,state_26471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26252__auto____0;
cljs$core$async$state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26252__auto____1;
return cljs$core$async$state_machine__26252__auto__;
})()
})();
var state__26348__auto__ = (function (){var statearr_26491 = f__26347__auto__.call(null);
(statearr_26491[(6)] = c__26346__auto___26493);

return statearr_26491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26348__auto__);
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
var process = (function (p__26510){
var vec__26511 = p__26510;
var v = cljs.core.nth.call(null,vec__26511,(0),null);
var p = cljs.core.nth.call(null,vec__26511,(1),null);
var job = vec__26511;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26346__auto___26682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26347__auto__ = (function (){var switch__26251__auto__ = (function (state_26518){
var state_val_26519 = (state_26518[(1)]);
if((state_val_26519 === (1))){
var state_26518__$1 = state_26518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26518__$1,(2),res,v);
} else {
if((state_val_26519 === (2))){
var inst_26515 = (state_26518[(2)]);
var inst_26516 = cljs.core.async.close_BANG_.call(null,res);
var state_26518__$1 = (function (){var statearr_26520 = state_26518;
(statearr_26520[(7)] = inst_26515);

return statearr_26520;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26518__$1,inst_26516);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26252__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26252__auto____0 = (function (){
var statearr_26521 = [null,null,null,null,null,null,null,null];
(statearr_26521[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26252__auto__);

(statearr_26521[(1)] = (1));

return statearr_26521;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26252__auto____1 = (function (state_26518){
while(true){
var ret_value__26253__auto__ = (function (){try{while(true){
var result__26254__auto__ = switch__26251__auto__.call(null,state_26518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26254__auto__;
}
break;
}
}catch (e26522){if((e26522 instanceof Object)){
var ex__26255__auto__ = e26522;
var statearr_26523_26683 = state_26518;
(statearr_26523_26683[(5)] = ex__26255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26684 = state_26518;
state_26518 = G__26684;
continue;
} else {
return ret_value__26253__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26252__auto__ = function(state_26518){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26252__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26252__auto____1.call(this,state_26518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26252__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26252__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26252__auto__;
})()
})();
var state__26348__auto__ = (function (){var statearr_26524 = f__26347__auto__.call(null);
(statearr_26524[(6)] = c__26346__auto___26682);

return statearr_26524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26348__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__26525){
var vec__26526 = p__26525;
var v = cljs.core.nth.call(null,vec__26526,(0),null);
var p = cljs.core.nth.call(null,vec__26526,(1),null);
var job = vec__26526;
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
var n__4613__auto___26685 = n;
var __26686 = (0);
while(true){
if((__26686 < n__4613__auto___26685)){
var G__26529_26687 = type;
var G__26529_26688__$1 = (((G__26529_26687 instanceof cljs.core.Keyword))?G__26529_26687.fqn:null);
switch (G__26529_26688__$1) {
case "compute":
var c__26346__auto___26690 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26686,c__26346__auto___26690,G__26529_26687,G__26529_26688__$1,n__4613__auto___26685,jobs,results,process,async){
return (function (){
var f__26347__auto__ = (function (){var switch__26251__auto__ = ((function (__26686,c__26346__auto___26690,G__26529_26687,G__26529_26688__$1,n__4613__auto___26685,jobs,results,process,async){
return (function (state_26542){
var state_val_26543 = (state_26542[(1)]);
if((state_val_26543 === (1))){
var state_26542__$1 = state_26542;
var statearr_26544_26691 = state_26542__$1;
(statearr_26544_26691[(2)] = null);

(statearr_26544_26691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26543 === (2))){
var state_26542__$1 = state_26542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26542__$1,(4),jobs);
} else {
if((state_val_26543 === (3))){
var inst_26540 = (state_26542[(2)]);
var state_26542__$1 = state_26542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26542__$1,inst_26540);
} else {
if((state_val_26543 === (4))){
var inst_26532 = (state_26542[(2)]);
var inst_26533 = process.call(null,inst_26532);
var state_26542__$1 = state_26542;
if(cljs.core.truth_(inst_26533)){
var statearr_26545_26692 = state_26542__$1;
(statearr_26545_26692[(1)] = (5));

} else {
var statearr_26546_26693 = state_26542__$1;
(statearr_26546_26693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26543 === (5))){
var state_26542__$1 = state_26542;
var statearr_26547_26694 = state_26542__$1;
(statearr_26547_26694[(2)] = null);

(statearr_26547_26694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26543 === (6))){
var state_26542__$1 = state_26542;
var statearr_26548_26695 = state_26542__$1;
(statearr_26548_26695[(2)] = null);

(statearr_26548_26695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26543 === (7))){
var inst_26538 = (state_26542[(2)]);
var state_26542__$1 = state_26542;
var statearr_26549_26696 = state_26542__$1;
(statearr_26549_26696[(2)] = inst_26538);

(statearr_26549_26696[(1)] = (3));


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
});})(__26686,c__26346__auto___26690,G__26529_26687,G__26529_26688__$1,n__4613__auto___26685,jobs,results,process,async))
;
return ((function (__26686,switch__26251__auto__,c__26346__auto___26690,G__26529_26687,G__26529_26688__$1,n__4613__auto___26685,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26252__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26252__auto____0 = (function (){
var statearr_26550 = [null,null,null,null,null,null,null];
(statearr_26550[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26252__auto__);

(statearr_26550[(1)] = (1));

return statearr_26550;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26252__auto____1 = (function (state_26542){
while(true){
var ret_value__26253__auto__ = (function (){try{while(true){
var result__26254__auto__ = switch__26251__auto__.call(null,state_26542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26254__auto__;
}
break;
}
}catch (e26551){if((e26551 instanceof Object)){
var ex__26255__auto__ = e26551;
var statearr_26552_26697 = state_26542;
(statearr_26552_26697[(5)] = ex__26255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26698 = state_26542;
state_26542 = G__26698;
continue;
} else {
return ret_value__26253__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26252__auto__ = function(state_26542){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26252__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26252__auto____1.call(this,state_26542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26252__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26252__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26252__auto__;
})()
;})(__26686,switch__26251__auto__,c__26346__auto___26690,G__26529_26687,G__26529_26688__$1,n__4613__auto___26685,jobs,results,process,async))
})();
var state__26348__auto__ = (function (){var statearr_26553 = f__26347__auto__.call(null);
(statearr_26553[(6)] = c__26346__auto___26690);

return statearr_26553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26348__auto__);
});})(__26686,c__26346__auto___26690,G__26529_26687,G__26529_26688__$1,n__4613__auto___26685,jobs,results,process,async))
);


break;
case "async":
var c__26346__auto___26699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26686,c__26346__auto___26699,G__26529_26687,G__26529_26688__$1,n__4613__auto___26685,jobs,results,process,async){
return (function (){
var f__26347__auto__ = (function (){var switch__26251__auto__ = ((function (__26686,c__26346__auto___26699,G__26529_26687,G__26529_26688__$1,n__4613__auto___26685,jobs,results,process,async){
return (function (state_26566){
var state_val_26567 = (state_26566[(1)]);
if((state_val_26567 === (1))){
var state_26566__$1 = state_26566;
var statearr_26568_26700 = state_26566__$1;
(statearr_26568_26700[(2)] = null);

(statearr_26568_26700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26567 === (2))){
var state_26566__$1 = state_26566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26566__$1,(4),jobs);
} else {
if((state_val_26567 === (3))){
var inst_26564 = (state_26566[(2)]);
var state_26566__$1 = state_26566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26566__$1,inst_26564);
} else {
if((state_val_26567 === (4))){
var inst_26556 = (state_26566[(2)]);
var inst_26557 = async.call(null,inst_26556);
var state_26566__$1 = state_26566;
if(cljs.core.truth_(inst_26557)){
var statearr_26569_26701 = state_26566__$1;
(statearr_26569_26701[(1)] = (5));

} else {
var statearr_26570_26702 = state_26566__$1;
(statearr_26570_26702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26567 === (5))){
var state_26566__$1 = state_26566;
var statearr_26571_26703 = state_26566__$1;
(statearr_26571_26703[(2)] = null);

(statearr_26571_26703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26567 === (6))){
var state_26566__$1 = state_26566;
var statearr_26572_26704 = state_26566__$1;
(statearr_26572_26704[(2)] = null);

(statearr_26572_26704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26567 === (7))){
var inst_26562 = (state_26566[(2)]);
var state_26566__$1 = state_26566;
var statearr_26573_26705 = state_26566__$1;
(statearr_26573_26705[(2)] = inst_26562);

(statearr_26573_26705[(1)] = (3));


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
});})(__26686,c__26346__auto___26699,G__26529_26687,G__26529_26688__$1,n__4613__auto___26685,jobs,results,process,async))
;
return ((function (__26686,switch__26251__auto__,c__26346__auto___26699,G__26529_26687,G__26529_26688__$1,n__4613__auto___26685,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26252__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26252__auto____0 = (function (){
var statearr_26574 = [null,null,null,null,null,null,null];
(statearr_26574[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26252__auto__);

(statearr_26574[(1)] = (1));

return statearr_26574;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26252__auto____1 = (function (state_26566){
while(true){
var ret_value__26253__auto__ = (function (){try{while(true){
var result__26254__auto__ = switch__26251__auto__.call(null,state_26566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26254__auto__;
}
break;
}
}catch (e26575){if((e26575 instanceof Object)){
var ex__26255__auto__ = e26575;
var statearr_26576_26706 = state_26566;
(statearr_26576_26706[(5)] = ex__26255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26707 = state_26566;
state_26566 = G__26707;
continue;
} else {
return ret_value__26253__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26252__auto__ = function(state_26566){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26252__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26252__auto____1.call(this,state_26566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26252__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26252__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26252__auto__;
})()
;})(__26686,switch__26251__auto__,c__26346__auto___26699,G__26529_26687,G__26529_26688__$1,n__4613__auto___26685,jobs,results,process,async))
})();
var state__26348__auto__ = (function (){var statearr_26577 = f__26347__auto__.call(null);
(statearr_26577[(6)] = c__26346__auto___26699);

return statearr_26577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26348__auto__);
});})(__26686,c__26346__auto___26699,G__26529_26687,G__26529_26688__$1,n__4613__auto___26685,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26529_26688__$1)].join('')));

}

var G__26708 = (__26686 + (1));
__26686 = G__26708;
continue;
} else {
}
break;
}

var c__26346__auto___26709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26347__auto__ = (function (){var switch__26251__auto__ = (function (state_26599){
var state_val_26600 = (state_26599[(1)]);
if((state_val_26600 === (7))){
var inst_26595 = (state_26599[(2)]);
var state_26599__$1 = state_26599;
var statearr_26601_26710 = state_26599__$1;
(statearr_26601_26710[(2)] = inst_26595);

(statearr_26601_26710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26600 === (1))){
var state_26599__$1 = state_26599;
var statearr_26602_26711 = state_26599__$1;
(statearr_26602_26711[(2)] = null);

(statearr_26602_26711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26600 === (4))){
var inst_26580 = (state_26599[(7)]);
var inst_26580__$1 = (state_26599[(2)]);
var inst_26581 = (inst_26580__$1 == null);
var state_26599__$1 = (function (){var statearr_26603 = state_26599;
(statearr_26603[(7)] = inst_26580__$1);

return statearr_26603;
})();
if(cljs.core.truth_(inst_26581)){
var statearr_26604_26712 = state_26599__$1;
(statearr_26604_26712[(1)] = (5));

} else {
var statearr_26605_26713 = state_26599__$1;
(statearr_26605_26713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26600 === (6))){
var inst_26580 = (state_26599[(7)]);
var inst_26585 = (state_26599[(8)]);
var inst_26585__$1 = cljs.core.async.chan.call(null,(1));
var inst_26586 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26587 = [inst_26580,inst_26585__$1];
var inst_26588 = (new cljs.core.PersistentVector(null,2,(5),inst_26586,inst_26587,null));
var state_26599__$1 = (function (){var statearr_26606 = state_26599;
(statearr_26606[(8)] = inst_26585__$1);

return statearr_26606;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26599__$1,(8),jobs,inst_26588);
} else {
if((state_val_26600 === (3))){
var inst_26597 = (state_26599[(2)]);
var state_26599__$1 = state_26599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26599__$1,inst_26597);
} else {
if((state_val_26600 === (2))){
var state_26599__$1 = state_26599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26599__$1,(4),from);
} else {
if((state_val_26600 === (9))){
var inst_26592 = (state_26599[(2)]);
var state_26599__$1 = (function (){var statearr_26607 = state_26599;
(statearr_26607[(9)] = inst_26592);

return statearr_26607;
})();
var statearr_26608_26714 = state_26599__$1;
(statearr_26608_26714[(2)] = null);

(statearr_26608_26714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26600 === (5))){
var inst_26583 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26599__$1 = state_26599;
var statearr_26609_26715 = state_26599__$1;
(statearr_26609_26715[(2)] = inst_26583);

(statearr_26609_26715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26600 === (8))){
var inst_26585 = (state_26599[(8)]);
var inst_26590 = (state_26599[(2)]);
var state_26599__$1 = (function (){var statearr_26610 = state_26599;
(statearr_26610[(10)] = inst_26590);

return statearr_26610;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26599__$1,(9),results,inst_26585);
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
var cljs$core$async$pipeline_STAR__$_state_machine__26252__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26252__auto____0 = (function (){
var statearr_26611 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26611[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26252__auto__);

(statearr_26611[(1)] = (1));

return statearr_26611;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26252__auto____1 = (function (state_26599){
while(true){
var ret_value__26253__auto__ = (function (){try{while(true){
var result__26254__auto__ = switch__26251__auto__.call(null,state_26599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26254__auto__;
}
break;
}
}catch (e26612){if((e26612 instanceof Object)){
var ex__26255__auto__ = e26612;
var statearr_26613_26716 = state_26599;
(statearr_26613_26716[(5)] = ex__26255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26717 = state_26599;
state_26599 = G__26717;
continue;
} else {
return ret_value__26253__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26252__auto__ = function(state_26599){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26252__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26252__auto____1.call(this,state_26599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26252__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26252__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26252__auto__;
})()
})();
var state__26348__auto__ = (function (){var statearr_26614 = f__26347__auto__.call(null);
(statearr_26614[(6)] = c__26346__auto___26709);

return statearr_26614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26348__auto__);
}));


var c__26346__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26347__auto__ = (function (){var switch__26251__auto__ = (function (state_26652){
var state_val_26653 = (state_26652[(1)]);
if((state_val_26653 === (7))){
var inst_26648 = (state_26652[(2)]);
var state_26652__$1 = state_26652;
var statearr_26654_26718 = state_26652__$1;
(statearr_26654_26718[(2)] = inst_26648);

(statearr_26654_26718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26653 === (20))){
var state_26652__$1 = state_26652;
var statearr_26655_26719 = state_26652__$1;
(statearr_26655_26719[(2)] = null);

(statearr_26655_26719[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26653 === (1))){
var state_26652__$1 = state_26652;
var statearr_26656_26720 = state_26652__$1;
(statearr_26656_26720[(2)] = null);

(statearr_26656_26720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26653 === (4))){
var inst_26617 = (state_26652[(7)]);
var inst_26617__$1 = (state_26652[(2)]);
var inst_26618 = (inst_26617__$1 == null);
var state_26652__$1 = (function (){var statearr_26657 = state_26652;
(statearr_26657[(7)] = inst_26617__$1);

return statearr_26657;
})();
if(cljs.core.truth_(inst_26618)){
var statearr_26658_26721 = state_26652__$1;
(statearr_26658_26721[(1)] = (5));

} else {
var statearr_26659_26722 = state_26652__$1;
(statearr_26659_26722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26653 === (15))){
var inst_26630 = (state_26652[(8)]);
var state_26652__$1 = state_26652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26652__$1,(18),to,inst_26630);
} else {
if((state_val_26653 === (21))){
var inst_26643 = (state_26652[(2)]);
var state_26652__$1 = state_26652;
var statearr_26660_26723 = state_26652__$1;
(statearr_26660_26723[(2)] = inst_26643);

(statearr_26660_26723[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26653 === (13))){
var inst_26645 = (state_26652[(2)]);
var state_26652__$1 = (function (){var statearr_26661 = state_26652;
(statearr_26661[(9)] = inst_26645);

return statearr_26661;
})();
var statearr_26662_26724 = state_26652__$1;
(statearr_26662_26724[(2)] = null);

(statearr_26662_26724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26653 === (6))){
var inst_26617 = (state_26652[(7)]);
var state_26652__$1 = state_26652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26652__$1,(11),inst_26617);
} else {
if((state_val_26653 === (17))){
var inst_26638 = (state_26652[(2)]);
var state_26652__$1 = state_26652;
if(cljs.core.truth_(inst_26638)){
var statearr_26663_26725 = state_26652__$1;
(statearr_26663_26725[(1)] = (19));

} else {
var statearr_26664_26726 = state_26652__$1;
(statearr_26664_26726[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26653 === (3))){
var inst_26650 = (state_26652[(2)]);
var state_26652__$1 = state_26652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26652__$1,inst_26650);
} else {
if((state_val_26653 === (12))){
var inst_26627 = (state_26652[(10)]);
var state_26652__$1 = state_26652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26652__$1,(14),inst_26627);
} else {
if((state_val_26653 === (2))){
var state_26652__$1 = state_26652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26652__$1,(4),results);
} else {
if((state_val_26653 === (19))){
var state_26652__$1 = state_26652;
var statearr_26665_26727 = state_26652__$1;
(statearr_26665_26727[(2)] = null);

(statearr_26665_26727[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26653 === (11))){
var inst_26627 = (state_26652[(2)]);
var state_26652__$1 = (function (){var statearr_26666 = state_26652;
(statearr_26666[(10)] = inst_26627);

return statearr_26666;
})();
var statearr_26667_26728 = state_26652__$1;
(statearr_26667_26728[(2)] = null);

(statearr_26667_26728[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26653 === (9))){
var state_26652__$1 = state_26652;
var statearr_26668_26729 = state_26652__$1;
(statearr_26668_26729[(2)] = null);

(statearr_26668_26729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26653 === (5))){
var state_26652__$1 = state_26652;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26669_26730 = state_26652__$1;
(statearr_26669_26730[(1)] = (8));

} else {
var statearr_26670_26731 = state_26652__$1;
(statearr_26670_26731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26653 === (14))){
var inst_26630 = (state_26652[(8)]);
var inst_26630__$1 = (state_26652[(2)]);
var inst_26631 = (inst_26630__$1 == null);
var inst_26632 = cljs.core.not.call(null,inst_26631);
var state_26652__$1 = (function (){var statearr_26671 = state_26652;
(statearr_26671[(8)] = inst_26630__$1);

return statearr_26671;
})();
if(inst_26632){
var statearr_26672_26732 = state_26652__$1;
(statearr_26672_26732[(1)] = (15));

} else {
var statearr_26673_26733 = state_26652__$1;
(statearr_26673_26733[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26653 === (16))){
var state_26652__$1 = state_26652;
var statearr_26674_26734 = state_26652__$1;
(statearr_26674_26734[(2)] = false);

(statearr_26674_26734[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26653 === (10))){
var inst_26624 = (state_26652[(2)]);
var state_26652__$1 = state_26652;
var statearr_26675_26735 = state_26652__$1;
(statearr_26675_26735[(2)] = inst_26624);

(statearr_26675_26735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26653 === (18))){
var inst_26635 = (state_26652[(2)]);
var state_26652__$1 = state_26652;
var statearr_26676_26736 = state_26652__$1;
(statearr_26676_26736[(2)] = inst_26635);

(statearr_26676_26736[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26653 === (8))){
var inst_26621 = cljs.core.async.close_BANG_.call(null,to);
var state_26652__$1 = state_26652;
var statearr_26677_26737 = state_26652__$1;
(statearr_26677_26737[(2)] = inst_26621);

(statearr_26677_26737[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__26252__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26252__auto____0 = (function (){
var statearr_26678 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26678[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26252__auto__);

(statearr_26678[(1)] = (1));

return statearr_26678;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26252__auto____1 = (function (state_26652){
while(true){
var ret_value__26253__auto__ = (function (){try{while(true){
var result__26254__auto__ = switch__26251__auto__.call(null,state_26652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26254__auto__;
}
break;
}
}catch (e26679){if((e26679 instanceof Object)){
var ex__26255__auto__ = e26679;
var statearr_26680_26738 = state_26652;
(statearr_26680_26738[(5)] = ex__26255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26739 = state_26652;
state_26652 = G__26739;
continue;
} else {
return ret_value__26253__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26252__auto__ = function(state_26652){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26252__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26252__auto____1.call(this,state_26652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26252__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26252__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26252__auto__;
})()
})();
var state__26348__auto__ = (function (){var statearr_26681 = f__26347__auto__.call(null);
(statearr_26681[(6)] = c__26346__auto__);

return statearr_26681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26348__auto__);
}));

return c__26346__auto__;
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
var G__26741 = arguments.length;
switch (G__26741) {
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
var G__26744 = arguments.length;
switch (G__26744) {
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
var G__26747 = arguments.length;
switch (G__26747) {
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
var c__26346__auto___26796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26347__auto__ = (function (){var switch__26251__auto__ = (function (state_26773){
var state_val_26774 = (state_26773[(1)]);
if((state_val_26774 === (7))){
var inst_26769 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
var statearr_26775_26797 = state_26773__$1;
(statearr_26775_26797[(2)] = inst_26769);

(statearr_26775_26797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (1))){
var state_26773__$1 = state_26773;
var statearr_26776_26798 = state_26773__$1;
(statearr_26776_26798[(2)] = null);

(statearr_26776_26798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (4))){
var inst_26750 = (state_26773[(7)]);
var inst_26750__$1 = (state_26773[(2)]);
var inst_26751 = (inst_26750__$1 == null);
var state_26773__$1 = (function (){var statearr_26777 = state_26773;
(statearr_26777[(7)] = inst_26750__$1);

return statearr_26777;
})();
if(cljs.core.truth_(inst_26751)){
var statearr_26778_26799 = state_26773__$1;
(statearr_26778_26799[(1)] = (5));

} else {
var statearr_26779_26800 = state_26773__$1;
(statearr_26779_26800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (13))){
var state_26773__$1 = state_26773;
var statearr_26780_26801 = state_26773__$1;
(statearr_26780_26801[(2)] = null);

(statearr_26780_26801[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (6))){
var inst_26750 = (state_26773[(7)]);
var inst_26756 = p.call(null,inst_26750);
var state_26773__$1 = state_26773;
if(cljs.core.truth_(inst_26756)){
var statearr_26781_26802 = state_26773__$1;
(statearr_26781_26802[(1)] = (9));

} else {
var statearr_26782_26803 = state_26773__$1;
(statearr_26782_26803[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (3))){
var inst_26771 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26773__$1,inst_26771);
} else {
if((state_val_26774 === (12))){
var state_26773__$1 = state_26773;
var statearr_26783_26804 = state_26773__$1;
(statearr_26783_26804[(2)] = null);

(statearr_26783_26804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (2))){
var state_26773__$1 = state_26773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26773__$1,(4),ch);
} else {
if((state_val_26774 === (11))){
var inst_26750 = (state_26773[(7)]);
var inst_26760 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26773__$1,(8),inst_26760,inst_26750);
} else {
if((state_val_26774 === (9))){
var state_26773__$1 = state_26773;
var statearr_26784_26805 = state_26773__$1;
(statearr_26784_26805[(2)] = tc);

(statearr_26784_26805[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (5))){
var inst_26753 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26754 = cljs.core.async.close_BANG_.call(null,fc);
var state_26773__$1 = (function (){var statearr_26785 = state_26773;
(statearr_26785[(8)] = inst_26753);

return statearr_26785;
})();
var statearr_26786_26806 = state_26773__$1;
(statearr_26786_26806[(2)] = inst_26754);

(statearr_26786_26806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (14))){
var inst_26767 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
var statearr_26787_26807 = state_26773__$1;
(statearr_26787_26807[(2)] = inst_26767);

(statearr_26787_26807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (10))){
var state_26773__$1 = state_26773;
var statearr_26788_26808 = state_26773__$1;
(statearr_26788_26808[(2)] = fc);

(statearr_26788_26808[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (8))){
var inst_26762 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
if(cljs.core.truth_(inst_26762)){
var statearr_26789_26809 = state_26773__$1;
(statearr_26789_26809[(1)] = (12));

} else {
var statearr_26790_26810 = state_26773__$1;
(statearr_26790_26810[(1)] = (13));

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
var cljs$core$async$state_machine__26252__auto__ = null;
var cljs$core$async$state_machine__26252__auto____0 = (function (){
var statearr_26791 = [null,null,null,null,null,null,null,null,null];
(statearr_26791[(0)] = cljs$core$async$state_machine__26252__auto__);

(statearr_26791[(1)] = (1));

return statearr_26791;
});
var cljs$core$async$state_machine__26252__auto____1 = (function (state_26773){
while(true){
var ret_value__26253__auto__ = (function (){try{while(true){
var result__26254__auto__ = switch__26251__auto__.call(null,state_26773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26254__auto__;
}
break;
}
}catch (e26792){if((e26792 instanceof Object)){
var ex__26255__auto__ = e26792;
var statearr_26793_26811 = state_26773;
(statearr_26793_26811[(5)] = ex__26255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26812 = state_26773;
state_26773 = G__26812;
continue;
} else {
return ret_value__26253__auto__;
}
break;
}
});
cljs$core$async$state_machine__26252__auto__ = function(state_26773){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26252__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26252__auto____1.call(this,state_26773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26252__auto____0;
cljs$core$async$state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26252__auto____1;
return cljs$core$async$state_machine__26252__auto__;
})()
})();
var state__26348__auto__ = (function (){var statearr_26794 = f__26347__auto__.call(null);
(statearr_26794[(6)] = c__26346__auto___26796);

return statearr_26794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26348__auto__);
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
var c__26346__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26347__auto__ = (function (){var switch__26251__auto__ = (function (state_26833){
var state_val_26834 = (state_26833[(1)]);
if((state_val_26834 === (7))){
var inst_26829 = (state_26833[(2)]);
var state_26833__$1 = state_26833;
var statearr_26835_26853 = state_26833__$1;
(statearr_26835_26853[(2)] = inst_26829);

(statearr_26835_26853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (1))){
var inst_26813 = init;
var state_26833__$1 = (function (){var statearr_26836 = state_26833;
(statearr_26836[(7)] = inst_26813);

return statearr_26836;
})();
var statearr_26837_26854 = state_26833__$1;
(statearr_26837_26854[(2)] = null);

(statearr_26837_26854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (4))){
var inst_26816 = (state_26833[(8)]);
var inst_26816__$1 = (state_26833[(2)]);
var inst_26817 = (inst_26816__$1 == null);
var state_26833__$1 = (function (){var statearr_26838 = state_26833;
(statearr_26838[(8)] = inst_26816__$1);

return statearr_26838;
})();
if(cljs.core.truth_(inst_26817)){
var statearr_26839_26855 = state_26833__$1;
(statearr_26839_26855[(1)] = (5));

} else {
var statearr_26840_26856 = state_26833__$1;
(statearr_26840_26856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (6))){
var inst_26816 = (state_26833[(8)]);
var inst_26820 = (state_26833[(9)]);
var inst_26813 = (state_26833[(7)]);
var inst_26820__$1 = f.call(null,inst_26813,inst_26816);
var inst_26821 = cljs.core.reduced_QMARK_.call(null,inst_26820__$1);
var state_26833__$1 = (function (){var statearr_26841 = state_26833;
(statearr_26841[(9)] = inst_26820__$1);

return statearr_26841;
})();
if(inst_26821){
var statearr_26842_26857 = state_26833__$1;
(statearr_26842_26857[(1)] = (8));

} else {
var statearr_26843_26858 = state_26833__$1;
(statearr_26843_26858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (3))){
var inst_26831 = (state_26833[(2)]);
var state_26833__$1 = state_26833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26833__$1,inst_26831);
} else {
if((state_val_26834 === (2))){
var state_26833__$1 = state_26833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26833__$1,(4),ch);
} else {
if((state_val_26834 === (9))){
var inst_26820 = (state_26833[(9)]);
var inst_26813 = inst_26820;
var state_26833__$1 = (function (){var statearr_26844 = state_26833;
(statearr_26844[(7)] = inst_26813);

return statearr_26844;
})();
var statearr_26845_26859 = state_26833__$1;
(statearr_26845_26859[(2)] = null);

(statearr_26845_26859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (5))){
var inst_26813 = (state_26833[(7)]);
var state_26833__$1 = state_26833;
var statearr_26846_26860 = state_26833__$1;
(statearr_26846_26860[(2)] = inst_26813);

(statearr_26846_26860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (10))){
var inst_26827 = (state_26833[(2)]);
var state_26833__$1 = state_26833;
var statearr_26847_26861 = state_26833__$1;
(statearr_26847_26861[(2)] = inst_26827);

(statearr_26847_26861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (8))){
var inst_26820 = (state_26833[(9)]);
var inst_26823 = cljs.core.deref.call(null,inst_26820);
var state_26833__$1 = state_26833;
var statearr_26848_26862 = state_26833__$1;
(statearr_26848_26862[(2)] = inst_26823);

(statearr_26848_26862[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__26252__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26252__auto____0 = (function (){
var statearr_26849 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26849[(0)] = cljs$core$async$reduce_$_state_machine__26252__auto__);

(statearr_26849[(1)] = (1));

return statearr_26849;
});
var cljs$core$async$reduce_$_state_machine__26252__auto____1 = (function (state_26833){
while(true){
var ret_value__26253__auto__ = (function (){try{while(true){
var result__26254__auto__ = switch__26251__auto__.call(null,state_26833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26254__auto__;
}
break;
}
}catch (e26850){if((e26850 instanceof Object)){
var ex__26255__auto__ = e26850;
var statearr_26851_26863 = state_26833;
(statearr_26851_26863[(5)] = ex__26255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26864 = state_26833;
state_26833 = G__26864;
continue;
} else {
return ret_value__26253__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26252__auto__ = function(state_26833){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26252__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26252__auto____1.call(this,state_26833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26252__auto____0;
cljs$core$async$reduce_$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26252__auto____1;
return cljs$core$async$reduce_$_state_machine__26252__auto__;
})()
})();
var state__26348__auto__ = (function (){var statearr_26852 = f__26347__auto__.call(null);
(statearr_26852[(6)] = c__26346__auto__);

return statearr_26852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26348__auto__);
}));

return c__26346__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26346__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26347__auto__ = (function (){var switch__26251__auto__ = (function (state_26870){
var state_val_26871 = (state_26870[(1)]);
if((state_val_26871 === (1))){
var inst_26865 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_26870__$1 = state_26870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26870__$1,(2),inst_26865);
} else {
if((state_val_26871 === (2))){
var inst_26867 = (state_26870[(2)]);
var inst_26868 = f__$1.call(null,inst_26867);
var state_26870__$1 = state_26870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26870__$1,inst_26868);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__26252__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26252__auto____0 = (function (){
var statearr_26872 = [null,null,null,null,null,null,null];
(statearr_26872[(0)] = cljs$core$async$transduce_$_state_machine__26252__auto__);

(statearr_26872[(1)] = (1));

return statearr_26872;
});
var cljs$core$async$transduce_$_state_machine__26252__auto____1 = (function (state_26870){
while(true){
var ret_value__26253__auto__ = (function (){try{while(true){
var result__26254__auto__ = switch__26251__auto__.call(null,state_26870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26254__auto__;
}
break;
}
}catch (e26873){if((e26873 instanceof Object)){
var ex__26255__auto__ = e26873;
var statearr_26874_26876 = state_26870;
(statearr_26874_26876[(5)] = ex__26255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26877 = state_26870;
state_26870 = G__26877;
continue;
} else {
return ret_value__26253__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26252__auto__ = function(state_26870){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26252__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26252__auto____1.call(this,state_26870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26252__auto____0;
cljs$core$async$transduce_$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26252__auto____1;
return cljs$core$async$transduce_$_state_machine__26252__auto__;
})()
})();
var state__26348__auto__ = (function (){var statearr_26875 = f__26347__auto__.call(null);
(statearr_26875[(6)] = c__26346__auto__);

return statearr_26875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26348__auto__);
}));

return c__26346__auto__;
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
var G__26879 = arguments.length;
switch (G__26879) {
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
var c__26346__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26347__auto__ = (function (){var switch__26251__auto__ = (function (state_26904){
var state_val_26905 = (state_26904[(1)]);
if((state_val_26905 === (7))){
var inst_26886 = (state_26904[(2)]);
var state_26904__$1 = state_26904;
var statearr_26906_26927 = state_26904__$1;
(statearr_26906_26927[(2)] = inst_26886);

(statearr_26906_26927[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26905 === (1))){
var inst_26880 = cljs.core.seq.call(null,coll);
var inst_26881 = inst_26880;
var state_26904__$1 = (function (){var statearr_26907 = state_26904;
(statearr_26907[(7)] = inst_26881);

return statearr_26907;
})();
var statearr_26908_26928 = state_26904__$1;
(statearr_26908_26928[(2)] = null);

(statearr_26908_26928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26905 === (4))){
var inst_26881 = (state_26904[(7)]);
var inst_26884 = cljs.core.first.call(null,inst_26881);
var state_26904__$1 = state_26904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26904__$1,(7),ch,inst_26884);
} else {
if((state_val_26905 === (13))){
var inst_26898 = (state_26904[(2)]);
var state_26904__$1 = state_26904;
var statearr_26909_26929 = state_26904__$1;
(statearr_26909_26929[(2)] = inst_26898);

(statearr_26909_26929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26905 === (6))){
var inst_26889 = (state_26904[(2)]);
var state_26904__$1 = state_26904;
if(cljs.core.truth_(inst_26889)){
var statearr_26910_26930 = state_26904__$1;
(statearr_26910_26930[(1)] = (8));

} else {
var statearr_26911_26931 = state_26904__$1;
(statearr_26911_26931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26905 === (3))){
var inst_26902 = (state_26904[(2)]);
var state_26904__$1 = state_26904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26904__$1,inst_26902);
} else {
if((state_val_26905 === (12))){
var state_26904__$1 = state_26904;
var statearr_26912_26932 = state_26904__$1;
(statearr_26912_26932[(2)] = null);

(statearr_26912_26932[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26905 === (2))){
var inst_26881 = (state_26904[(7)]);
var state_26904__$1 = state_26904;
if(cljs.core.truth_(inst_26881)){
var statearr_26913_26933 = state_26904__$1;
(statearr_26913_26933[(1)] = (4));

} else {
var statearr_26914_26934 = state_26904__$1;
(statearr_26914_26934[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26905 === (11))){
var inst_26895 = cljs.core.async.close_BANG_.call(null,ch);
var state_26904__$1 = state_26904;
var statearr_26915_26935 = state_26904__$1;
(statearr_26915_26935[(2)] = inst_26895);

(statearr_26915_26935[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26905 === (9))){
var state_26904__$1 = state_26904;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26916_26936 = state_26904__$1;
(statearr_26916_26936[(1)] = (11));

} else {
var statearr_26917_26937 = state_26904__$1;
(statearr_26917_26937[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26905 === (5))){
var inst_26881 = (state_26904[(7)]);
var state_26904__$1 = state_26904;
var statearr_26918_26938 = state_26904__$1;
(statearr_26918_26938[(2)] = inst_26881);

(statearr_26918_26938[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26905 === (10))){
var inst_26900 = (state_26904[(2)]);
var state_26904__$1 = state_26904;
var statearr_26919_26939 = state_26904__$1;
(statearr_26919_26939[(2)] = inst_26900);

(statearr_26919_26939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26905 === (8))){
var inst_26881 = (state_26904[(7)]);
var inst_26891 = cljs.core.next.call(null,inst_26881);
var inst_26881__$1 = inst_26891;
var state_26904__$1 = (function (){var statearr_26920 = state_26904;
(statearr_26920[(7)] = inst_26881__$1);

return statearr_26920;
})();
var statearr_26921_26940 = state_26904__$1;
(statearr_26921_26940[(2)] = null);

(statearr_26921_26940[(1)] = (2));


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
var cljs$core$async$state_machine__26252__auto__ = null;
var cljs$core$async$state_machine__26252__auto____0 = (function (){
var statearr_26922 = [null,null,null,null,null,null,null,null];
(statearr_26922[(0)] = cljs$core$async$state_machine__26252__auto__);

(statearr_26922[(1)] = (1));

return statearr_26922;
});
var cljs$core$async$state_machine__26252__auto____1 = (function (state_26904){
while(true){
var ret_value__26253__auto__ = (function (){try{while(true){
var result__26254__auto__ = switch__26251__auto__.call(null,state_26904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26254__auto__;
}
break;
}
}catch (e26923){if((e26923 instanceof Object)){
var ex__26255__auto__ = e26923;
var statearr_26924_26941 = state_26904;
(statearr_26924_26941[(5)] = ex__26255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26942 = state_26904;
state_26904 = G__26942;
continue;
} else {
return ret_value__26253__auto__;
}
break;
}
});
cljs$core$async$state_machine__26252__auto__ = function(state_26904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26252__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26252__auto____1.call(this,state_26904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26252__auto____0;
cljs$core$async$state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26252__auto____1;
return cljs$core$async$state_machine__26252__auto__;
})()
})();
var state__26348__auto__ = (function (){var statearr_26925 = f__26347__auto__.call(null);
(statearr_26925[(6)] = c__26346__auto__);

return statearr_26925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26348__auto__);
}));

return c__26346__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_26943 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_26943.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_26944 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_26944.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_26945 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_26945.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_26946 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_26946.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26947 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26947 = (function (ch,cs,meta26948){
this.ch = ch;
this.cs = cs;
this.meta26948 = meta26948;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26949,meta26948__$1){
var self__ = this;
var _26949__$1 = this;
return (new cljs.core.async.t_cljs$core$async26947(self__.ch,self__.cs,meta26948__$1));
}));

(cljs.core.async.t_cljs$core$async26947.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26949){
var self__ = this;
var _26949__$1 = this;
return self__.meta26948;
}));

(cljs.core.async.t_cljs$core$async26947.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26947.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async26947.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26947.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async26947.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async26947.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async26947.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26948","meta26948",1985455768,null)], null);
}));

(cljs.core.async.t_cljs$core$async26947.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26947.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26947");

(cljs.core.async.t_cljs$core$async26947.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26947");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26947.
 */
cljs.core.async.__GT_t_cljs$core$async26947 = (function cljs$core$async$mult_$___GT_t_cljs$core$async26947(ch__$1,cs__$1,meta26948){
return (new cljs.core.async.t_cljs$core$async26947(ch__$1,cs__$1,meta26948));
});

}

return (new cljs.core.async.t_cljs$core$async26947(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26346__auto___27169 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26347__auto__ = (function (){var switch__26251__auto__ = (function (state_27084){
var state_val_27085 = (state_27084[(1)]);
if((state_val_27085 === (7))){
var inst_27080 = (state_27084[(2)]);
var state_27084__$1 = state_27084;
var statearr_27086_27170 = state_27084__$1;
(statearr_27086_27170[(2)] = inst_27080);

(statearr_27086_27170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (20))){
var inst_26983 = (state_27084[(7)]);
var inst_26995 = cljs.core.first.call(null,inst_26983);
var inst_26996 = cljs.core.nth.call(null,inst_26995,(0),null);
var inst_26997 = cljs.core.nth.call(null,inst_26995,(1),null);
var state_27084__$1 = (function (){var statearr_27087 = state_27084;
(statearr_27087[(8)] = inst_26996);

return statearr_27087;
})();
if(cljs.core.truth_(inst_26997)){
var statearr_27088_27171 = state_27084__$1;
(statearr_27088_27171[(1)] = (22));

} else {
var statearr_27089_27172 = state_27084__$1;
(statearr_27089_27172[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (27))){
var inst_27032 = (state_27084[(9)]);
var inst_26952 = (state_27084[(10)]);
var inst_27025 = (state_27084[(11)]);
var inst_27027 = (state_27084[(12)]);
var inst_27032__$1 = cljs.core._nth.call(null,inst_27025,inst_27027);
var inst_27033 = cljs.core.async.put_BANG_.call(null,inst_27032__$1,inst_26952,done);
var state_27084__$1 = (function (){var statearr_27090 = state_27084;
(statearr_27090[(9)] = inst_27032__$1);

return statearr_27090;
})();
if(cljs.core.truth_(inst_27033)){
var statearr_27091_27173 = state_27084__$1;
(statearr_27091_27173[(1)] = (30));

} else {
var statearr_27092_27174 = state_27084__$1;
(statearr_27092_27174[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (1))){
var state_27084__$1 = state_27084;
var statearr_27093_27175 = state_27084__$1;
(statearr_27093_27175[(2)] = null);

(statearr_27093_27175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (24))){
var inst_26983 = (state_27084[(7)]);
var inst_27002 = (state_27084[(2)]);
var inst_27003 = cljs.core.next.call(null,inst_26983);
var inst_26961 = inst_27003;
var inst_26962 = null;
var inst_26963 = (0);
var inst_26964 = (0);
var state_27084__$1 = (function (){var statearr_27094 = state_27084;
(statearr_27094[(13)] = inst_26962);

(statearr_27094[(14)] = inst_27002);

(statearr_27094[(15)] = inst_26964);

(statearr_27094[(16)] = inst_26963);

(statearr_27094[(17)] = inst_26961);

return statearr_27094;
})();
var statearr_27095_27176 = state_27084__$1;
(statearr_27095_27176[(2)] = null);

(statearr_27095_27176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (39))){
var state_27084__$1 = state_27084;
var statearr_27099_27177 = state_27084__$1;
(statearr_27099_27177[(2)] = null);

(statearr_27099_27177[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (4))){
var inst_26952 = (state_27084[(10)]);
var inst_26952__$1 = (state_27084[(2)]);
var inst_26953 = (inst_26952__$1 == null);
var state_27084__$1 = (function (){var statearr_27100 = state_27084;
(statearr_27100[(10)] = inst_26952__$1);

return statearr_27100;
})();
if(cljs.core.truth_(inst_26953)){
var statearr_27101_27178 = state_27084__$1;
(statearr_27101_27178[(1)] = (5));

} else {
var statearr_27102_27179 = state_27084__$1;
(statearr_27102_27179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (15))){
var inst_26962 = (state_27084[(13)]);
var inst_26964 = (state_27084[(15)]);
var inst_26963 = (state_27084[(16)]);
var inst_26961 = (state_27084[(17)]);
var inst_26979 = (state_27084[(2)]);
var inst_26980 = (inst_26964 + (1));
var tmp27096 = inst_26962;
var tmp27097 = inst_26963;
var tmp27098 = inst_26961;
var inst_26961__$1 = tmp27098;
var inst_26962__$1 = tmp27096;
var inst_26963__$1 = tmp27097;
var inst_26964__$1 = inst_26980;
var state_27084__$1 = (function (){var statearr_27103 = state_27084;
(statearr_27103[(13)] = inst_26962__$1);

(statearr_27103[(18)] = inst_26979);

(statearr_27103[(15)] = inst_26964__$1);

(statearr_27103[(16)] = inst_26963__$1);

(statearr_27103[(17)] = inst_26961__$1);

return statearr_27103;
})();
var statearr_27104_27180 = state_27084__$1;
(statearr_27104_27180[(2)] = null);

(statearr_27104_27180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (21))){
var inst_27006 = (state_27084[(2)]);
var state_27084__$1 = state_27084;
var statearr_27108_27181 = state_27084__$1;
(statearr_27108_27181[(2)] = inst_27006);

(statearr_27108_27181[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (31))){
var inst_27032 = (state_27084[(9)]);
var inst_27036 = done.call(null,null);
var inst_27037 = cljs.core.async.untap_STAR_.call(null,m,inst_27032);
var state_27084__$1 = (function (){var statearr_27109 = state_27084;
(statearr_27109[(19)] = inst_27036);

return statearr_27109;
})();
var statearr_27110_27182 = state_27084__$1;
(statearr_27110_27182[(2)] = inst_27037);

(statearr_27110_27182[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (32))){
var inst_27026 = (state_27084[(20)]);
var inst_27025 = (state_27084[(11)]);
var inst_27024 = (state_27084[(21)]);
var inst_27027 = (state_27084[(12)]);
var inst_27039 = (state_27084[(2)]);
var inst_27040 = (inst_27027 + (1));
var tmp27105 = inst_27026;
var tmp27106 = inst_27025;
var tmp27107 = inst_27024;
var inst_27024__$1 = tmp27107;
var inst_27025__$1 = tmp27106;
var inst_27026__$1 = tmp27105;
var inst_27027__$1 = inst_27040;
var state_27084__$1 = (function (){var statearr_27111 = state_27084;
(statearr_27111[(20)] = inst_27026__$1);

(statearr_27111[(11)] = inst_27025__$1);

(statearr_27111[(22)] = inst_27039);

(statearr_27111[(21)] = inst_27024__$1);

(statearr_27111[(12)] = inst_27027__$1);

return statearr_27111;
})();
var statearr_27112_27183 = state_27084__$1;
(statearr_27112_27183[(2)] = null);

(statearr_27112_27183[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (40))){
var inst_27052 = (state_27084[(23)]);
var inst_27056 = done.call(null,null);
var inst_27057 = cljs.core.async.untap_STAR_.call(null,m,inst_27052);
var state_27084__$1 = (function (){var statearr_27113 = state_27084;
(statearr_27113[(24)] = inst_27056);

return statearr_27113;
})();
var statearr_27114_27184 = state_27084__$1;
(statearr_27114_27184[(2)] = inst_27057);

(statearr_27114_27184[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (33))){
var inst_27043 = (state_27084[(25)]);
var inst_27045 = cljs.core.chunked_seq_QMARK_.call(null,inst_27043);
var state_27084__$1 = state_27084;
if(inst_27045){
var statearr_27115_27185 = state_27084__$1;
(statearr_27115_27185[(1)] = (36));

} else {
var statearr_27116_27186 = state_27084__$1;
(statearr_27116_27186[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (13))){
var inst_26973 = (state_27084[(26)]);
var inst_26976 = cljs.core.async.close_BANG_.call(null,inst_26973);
var state_27084__$1 = state_27084;
var statearr_27117_27187 = state_27084__$1;
(statearr_27117_27187[(2)] = inst_26976);

(statearr_27117_27187[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (22))){
var inst_26996 = (state_27084[(8)]);
var inst_26999 = cljs.core.async.close_BANG_.call(null,inst_26996);
var state_27084__$1 = state_27084;
var statearr_27118_27188 = state_27084__$1;
(statearr_27118_27188[(2)] = inst_26999);

(statearr_27118_27188[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (36))){
var inst_27043 = (state_27084[(25)]);
var inst_27047 = cljs.core.chunk_first.call(null,inst_27043);
var inst_27048 = cljs.core.chunk_rest.call(null,inst_27043);
var inst_27049 = cljs.core.count.call(null,inst_27047);
var inst_27024 = inst_27048;
var inst_27025 = inst_27047;
var inst_27026 = inst_27049;
var inst_27027 = (0);
var state_27084__$1 = (function (){var statearr_27119 = state_27084;
(statearr_27119[(20)] = inst_27026);

(statearr_27119[(11)] = inst_27025);

(statearr_27119[(21)] = inst_27024);

(statearr_27119[(12)] = inst_27027);

return statearr_27119;
})();
var statearr_27120_27189 = state_27084__$1;
(statearr_27120_27189[(2)] = null);

(statearr_27120_27189[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (41))){
var inst_27043 = (state_27084[(25)]);
var inst_27059 = (state_27084[(2)]);
var inst_27060 = cljs.core.next.call(null,inst_27043);
var inst_27024 = inst_27060;
var inst_27025 = null;
var inst_27026 = (0);
var inst_27027 = (0);
var state_27084__$1 = (function (){var statearr_27121 = state_27084;
(statearr_27121[(20)] = inst_27026);

(statearr_27121[(11)] = inst_27025);

(statearr_27121[(21)] = inst_27024);

(statearr_27121[(12)] = inst_27027);

(statearr_27121[(27)] = inst_27059);

return statearr_27121;
})();
var statearr_27122_27190 = state_27084__$1;
(statearr_27122_27190[(2)] = null);

(statearr_27122_27190[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (43))){
var state_27084__$1 = state_27084;
var statearr_27123_27191 = state_27084__$1;
(statearr_27123_27191[(2)] = null);

(statearr_27123_27191[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (29))){
var inst_27068 = (state_27084[(2)]);
var state_27084__$1 = state_27084;
var statearr_27124_27192 = state_27084__$1;
(statearr_27124_27192[(2)] = inst_27068);

(statearr_27124_27192[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (44))){
var inst_27077 = (state_27084[(2)]);
var state_27084__$1 = (function (){var statearr_27125 = state_27084;
(statearr_27125[(28)] = inst_27077);

return statearr_27125;
})();
var statearr_27126_27193 = state_27084__$1;
(statearr_27126_27193[(2)] = null);

(statearr_27126_27193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (6))){
var inst_27016 = (state_27084[(29)]);
var inst_27015 = cljs.core.deref.call(null,cs);
var inst_27016__$1 = cljs.core.keys.call(null,inst_27015);
var inst_27017 = cljs.core.count.call(null,inst_27016__$1);
var inst_27018 = cljs.core.reset_BANG_.call(null,dctr,inst_27017);
var inst_27023 = cljs.core.seq.call(null,inst_27016__$1);
var inst_27024 = inst_27023;
var inst_27025 = null;
var inst_27026 = (0);
var inst_27027 = (0);
var state_27084__$1 = (function (){var statearr_27127 = state_27084;
(statearr_27127[(30)] = inst_27018);

(statearr_27127[(20)] = inst_27026);

(statearr_27127[(11)] = inst_27025);

(statearr_27127[(29)] = inst_27016__$1);

(statearr_27127[(21)] = inst_27024);

(statearr_27127[(12)] = inst_27027);

return statearr_27127;
})();
var statearr_27128_27194 = state_27084__$1;
(statearr_27128_27194[(2)] = null);

(statearr_27128_27194[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (28))){
var inst_27024 = (state_27084[(21)]);
var inst_27043 = (state_27084[(25)]);
var inst_27043__$1 = cljs.core.seq.call(null,inst_27024);
var state_27084__$1 = (function (){var statearr_27129 = state_27084;
(statearr_27129[(25)] = inst_27043__$1);

return statearr_27129;
})();
if(inst_27043__$1){
var statearr_27130_27195 = state_27084__$1;
(statearr_27130_27195[(1)] = (33));

} else {
var statearr_27131_27196 = state_27084__$1;
(statearr_27131_27196[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (25))){
var inst_27026 = (state_27084[(20)]);
var inst_27027 = (state_27084[(12)]);
var inst_27029 = (inst_27027 < inst_27026);
var inst_27030 = inst_27029;
var state_27084__$1 = state_27084;
if(cljs.core.truth_(inst_27030)){
var statearr_27132_27197 = state_27084__$1;
(statearr_27132_27197[(1)] = (27));

} else {
var statearr_27133_27198 = state_27084__$1;
(statearr_27133_27198[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (34))){
var state_27084__$1 = state_27084;
var statearr_27134_27199 = state_27084__$1;
(statearr_27134_27199[(2)] = null);

(statearr_27134_27199[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (17))){
var state_27084__$1 = state_27084;
var statearr_27135_27200 = state_27084__$1;
(statearr_27135_27200[(2)] = null);

(statearr_27135_27200[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (3))){
var inst_27082 = (state_27084[(2)]);
var state_27084__$1 = state_27084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27084__$1,inst_27082);
} else {
if((state_val_27085 === (12))){
var inst_27011 = (state_27084[(2)]);
var state_27084__$1 = state_27084;
var statearr_27136_27201 = state_27084__$1;
(statearr_27136_27201[(2)] = inst_27011);

(statearr_27136_27201[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (2))){
var state_27084__$1 = state_27084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27084__$1,(4),ch);
} else {
if((state_val_27085 === (23))){
var state_27084__$1 = state_27084;
var statearr_27137_27202 = state_27084__$1;
(statearr_27137_27202[(2)] = null);

(statearr_27137_27202[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (35))){
var inst_27066 = (state_27084[(2)]);
var state_27084__$1 = state_27084;
var statearr_27138_27203 = state_27084__$1;
(statearr_27138_27203[(2)] = inst_27066);

(statearr_27138_27203[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (19))){
var inst_26983 = (state_27084[(7)]);
var inst_26987 = cljs.core.chunk_first.call(null,inst_26983);
var inst_26988 = cljs.core.chunk_rest.call(null,inst_26983);
var inst_26989 = cljs.core.count.call(null,inst_26987);
var inst_26961 = inst_26988;
var inst_26962 = inst_26987;
var inst_26963 = inst_26989;
var inst_26964 = (0);
var state_27084__$1 = (function (){var statearr_27139 = state_27084;
(statearr_27139[(13)] = inst_26962);

(statearr_27139[(15)] = inst_26964);

(statearr_27139[(16)] = inst_26963);

(statearr_27139[(17)] = inst_26961);

return statearr_27139;
})();
var statearr_27140_27204 = state_27084__$1;
(statearr_27140_27204[(2)] = null);

(statearr_27140_27204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (11))){
var inst_26983 = (state_27084[(7)]);
var inst_26961 = (state_27084[(17)]);
var inst_26983__$1 = cljs.core.seq.call(null,inst_26961);
var state_27084__$1 = (function (){var statearr_27141 = state_27084;
(statearr_27141[(7)] = inst_26983__$1);

return statearr_27141;
})();
if(inst_26983__$1){
var statearr_27142_27205 = state_27084__$1;
(statearr_27142_27205[(1)] = (16));

} else {
var statearr_27143_27206 = state_27084__$1;
(statearr_27143_27206[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (9))){
var inst_27013 = (state_27084[(2)]);
var state_27084__$1 = state_27084;
var statearr_27144_27207 = state_27084__$1;
(statearr_27144_27207[(2)] = inst_27013);

(statearr_27144_27207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (5))){
var inst_26959 = cljs.core.deref.call(null,cs);
var inst_26960 = cljs.core.seq.call(null,inst_26959);
var inst_26961 = inst_26960;
var inst_26962 = null;
var inst_26963 = (0);
var inst_26964 = (0);
var state_27084__$1 = (function (){var statearr_27145 = state_27084;
(statearr_27145[(13)] = inst_26962);

(statearr_27145[(15)] = inst_26964);

(statearr_27145[(16)] = inst_26963);

(statearr_27145[(17)] = inst_26961);

return statearr_27145;
})();
var statearr_27146_27208 = state_27084__$1;
(statearr_27146_27208[(2)] = null);

(statearr_27146_27208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (14))){
var state_27084__$1 = state_27084;
var statearr_27147_27209 = state_27084__$1;
(statearr_27147_27209[(2)] = null);

(statearr_27147_27209[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (45))){
var inst_27074 = (state_27084[(2)]);
var state_27084__$1 = state_27084;
var statearr_27148_27210 = state_27084__$1;
(statearr_27148_27210[(2)] = inst_27074);

(statearr_27148_27210[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (26))){
var inst_27016 = (state_27084[(29)]);
var inst_27070 = (state_27084[(2)]);
var inst_27071 = cljs.core.seq.call(null,inst_27016);
var state_27084__$1 = (function (){var statearr_27149 = state_27084;
(statearr_27149[(31)] = inst_27070);

return statearr_27149;
})();
if(inst_27071){
var statearr_27150_27211 = state_27084__$1;
(statearr_27150_27211[(1)] = (42));

} else {
var statearr_27151_27212 = state_27084__$1;
(statearr_27151_27212[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (16))){
var inst_26983 = (state_27084[(7)]);
var inst_26985 = cljs.core.chunked_seq_QMARK_.call(null,inst_26983);
var state_27084__$1 = state_27084;
if(inst_26985){
var statearr_27152_27213 = state_27084__$1;
(statearr_27152_27213[(1)] = (19));

} else {
var statearr_27153_27214 = state_27084__$1;
(statearr_27153_27214[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (38))){
var inst_27063 = (state_27084[(2)]);
var state_27084__$1 = state_27084;
var statearr_27154_27215 = state_27084__$1;
(statearr_27154_27215[(2)] = inst_27063);

(statearr_27154_27215[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (30))){
var state_27084__$1 = state_27084;
var statearr_27155_27216 = state_27084__$1;
(statearr_27155_27216[(2)] = null);

(statearr_27155_27216[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (10))){
var inst_26962 = (state_27084[(13)]);
var inst_26964 = (state_27084[(15)]);
var inst_26972 = cljs.core._nth.call(null,inst_26962,inst_26964);
var inst_26973 = cljs.core.nth.call(null,inst_26972,(0),null);
var inst_26974 = cljs.core.nth.call(null,inst_26972,(1),null);
var state_27084__$1 = (function (){var statearr_27156 = state_27084;
(statearr_27156[(26)] = inst_26973);

return statearr_27156;
})();
if(cljs.core.truth_(inst_26974)){
var statearr_27157_27217 = state_27084__$1;
(statearr_27157_27217[(1)] = (13));

} else {
var statearr_27158_27218 = state_27084__$1;
(statearr_27158_27218[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (18))){
var inst_27009 = (state_27084[(2)]);
var state_27084__$1 = state_27084;
var statearr_27159_27219 = state_27084__$1;
(statearr_27159_27219[(2)] = inst_27009);

(statearr_27159_27219[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (42))){
var state_27084__$1 = state_27084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27084__$1,(45),dchan);
} else {
if((state_val_27085 === (37))){
var inst_27052 = (state_27084[(23)]);
var inst_26952 = (state_27084[(10)]);
var inst_27043 = (state_27084[(25)]);
var inst_27052__$1 = cljs.core.first.call(null,inst_27043);
var inst_27053 = cljs.core.async.put_BANG_.call(null,inst_27052__$1,inst_26952,done);
var state_27084__$1 = (function (){var statearr_27160 = state_27084;
(statearr_27160[(23)] = inst_27052__$1);

return statearr_27160;
})();
if(cljs.core.truth_(inst_27053)){
var statearr_27161_27220 = state_27084__$1;
(statearr_27161_27220[(1)] = (39));

} else {
var statearr_27162_27221 = state_27084__$1;
(statearr_27162_27221[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (8))){
var inst_26964 = (state_27084[(15)]);
var inst_26963 = (state_27084[(16)]);
var inst_26966 = (inst_26964 < inst_26963);
var inst_26967 = inst_26966;
var state_27084__$1 = state_27084;
if(cljs.core.truth_(inst_26967)){
var statearr_27163_27222 = state_27084__$1;
(statearr_27163_27222[(1)] = (10));

} else {
var statearr_27164_27223 = state_27084__$1;
(statearr_27164_27223[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__26252__auto__ = null;
var cljs$core$async$mult_$_state_machine__26252__auto____0 = (function (){
var statearr_27165 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27165[(0)] = cljs$core$async$mult_$_state_machine__26252__auto__);

(statearr_27165[(1)] = (1));

return statearr_27165;
});
var cljs$core$async$mult_$_state_machine__26252__auto____1 = (function (state_27084){
while(true){
var ret_value__26253__auto__ = (function (){try{while(true){
var result__26254__auto__ = switch__26251__auto__.call(null,state_27084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26254__auto__;
}
break;
}
}catch (e27166){if((e27166 instanceof Object)){
var ex__26255__auto__ = e27166;
var statearr_27167_27224 = state_27084;
(statearr_27167_27224[(5)] = ex__26255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27225 = state_27084;
state_27084 = G__27225;
continue;
} else {
return ret_value__26253__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26252__auto__ = function(state_27084){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26252__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26252__auto____1.call(this,state_27084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26252__auto____0;
cljs$core$async$mult_$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26252__auto____1;
return cljs$core$async$mult_$_state_machine__26252__auto__;
})()
})();
var state__26348__auto__ = (function (){var statearr_27168 = f__26347__auto__.call(null);
(statearr_27168[(6)] = c__26346__auto___27169);

return statearr_27168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26348__auto__);
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
var G__27227 = arguments.length;
switch (G__27227) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_27229 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_27229.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_27230 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_27230.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_27231 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_27231.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_27232 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_27232.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_27233 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_27233.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27244 = arguments.length;
var i__4737__auto___27245 = (0);
while(true){
if((i__4737__auto___27245 < len__4736__auto___27244)){
args__4742__auto__.push((arguments[i__4737__auto___27245]));

var G__27246 = (i__4737__auto___27245 + (1));
i__4737__auto___27245 = G__27246;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27238){
var map__27239 = p__27238;
var map__27239__$1 = (((((!((map__27239 == null))))?(((((map__27239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27239):map__27239);
var opts = map__27239__$1;
var statearr_27241_27247 = state;
(statearr_27241_27247[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_27242_27248 = state;
(statearr_27242_27248[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_27243_27249 = state;
(statearr_27243_27249[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27234){
var G__27235 = cljs.core.first.call(null,seq27234);
var seq27234__$1 = cljs.core.next.call(null,seq27234);
var G__27236 = cljs.core.first.call(null,seq27234__$1);
var seq27234__$2 = cljs.core.next.call(null,seq27234__$1);
var G__27237 = cljs.core.first.call(null,seq27234__$2);
var seq27234__$3 = cljs.core.next.call(null,seq27234__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27235,G__27236,G__27237,seq27234__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27250 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27250 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27251){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27251 = meta27251;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27252,meta27251__$1){
var self__ = this;
var _27252__$1 = this;
return (new cljs.core.async.t_cljs$core$async27250(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27251__$1));
}));

(cljs.core.async.t_cljs$core$async27250.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27252){
var self__ = this;
var _27252__$1 = this;
return self__.meta27251;
}));

(cljs.core.async.t_cljs$core$async27250.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27250.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async27250.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27250.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27250.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27250.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27250.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27250.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27250.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27251","meta27251",-1534913675,null)], null);
}));

(cljs.core.async.t_cljs$core$async27250.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27250.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27250");

(cljs.core.async.t_cljs$core$async27250.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27250");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27250.
 */
cljs.core.async.__GT_t_cljs$core$async27250 = (function cljs$core$async$mix_$___GT_t_cljs$core$async27250(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27251){
return (new cljs.core.async.t_cljs$core$async27250(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27251));
});

}

return (new cljs.core.async.t_cljs$core$async27250(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26346__auto___27414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26347__auto__ = (function (){var switch__26251__auto__ = (function (state_27354){
var state_val_27355 = (state_27354[(1)]);
if((state_val_27355 === (7))){
var inst_27269 = (state_27354[(2)]);
var state_27354__$1 = state_27354;
var statearr_27356_27415 = state_27354__$1;
(statearr_27356_27415[(2)] = inst_27269);

(statearr_27356_27415[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (20))){
var inst_27281 = (state_27354[(7)]);
var state_27354__$1 = state_27354;
var statearr_27357_27416 = state_27354__$1;
(statearr_27357_27416[(2)] = inst_27281);

(statearr_27357_27416[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (27))){
var state_27354__$1 = state_27354;
var statearr_27358_27417 = state_27354__$1;
(statearr_27358_27417[(2)] = null);

(statearr_27358_27417[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (1))){
var inst_27256 = (state_27354[(8)]);
var inst_27256__$1 = calc_state.call(null);
var inst_27258 = (inst_27256__$1 == null);
var inst_27259 = cljs.core.not.call(null,inst_27258);
var state_27354__$1 = (function (){var statearr_27359 = state_27354;
(statearr_27359[(8)] = inst_27256__$1);

return statearr_27359;
})();
if(inst_27259){
var statearr_27360_27418 = state_27354__$1;
(statearr_27360_27418[(1)] = (2));

} else {
var statearr_27361_27419 = state_27354__$1;
(statearr_27361_27419[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (24))){
var inst_27328 = (state_27354[(9)]);
var inst_27314 = (state_27354[(10)]);
var inst_27305 = (state_27354[(11)]);
var inst_27328__$1 = inst_27305.call(null,inst_27314);
var state_27354__$1 = (function (){var statearr_27362 = state_27354;
(statearr_27362[(9)] = inst_27328__$1);

return statearr_27362;
})();
if(cljs.core.truth_(inst_27328__$1)){
var statearr_27363_27420 = state_27354__$1;
(statearr_27363_27420[(1)] = (29));

} else {
var statearr_27364_27421 = state_27354__$1;
(statearr_27364_27421[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (4))){
var inst_27272 = (state_27354[(2)]);
var state_27354__$1 = state_27354;
if(cljs.core.truth_(inst_27272)){
var statearr_27365_27422 = state_27354__$1;
(statearr_27365_27422[(1)] = (8));

} else {
var statearr_27366_27423 = state_27354__$1;
(statearr_27366_27423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (15))){
var inst_27299 = (state_27354[(2)]);
var state_27354__$1 = state_27354;
if(cljs.core.truth_(inst_27299)){
var statearr_27367_27424 = state_27354__$1;
(statearr_27367_27424[(1)] = (19));

} else {
var statearr_27368_27425 = state_27354__$1;
(statearr_27368_27425[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (21))){
var inst_27304 = (state_27354[(12)]);
var inst_27304__$1 = (state_27354[(2)]);
var inst_27305 = cljs.core.get.call(null,inst_27304__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27306 = cljs.core.get.call(null,inst_27304__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27307 = cljs.core.get.call(null,inst_27304__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27354__$1 = (function (){var statearr_27369 = state_27354;
(statearr_27369[(12)] = inst_27304__$1);

(statearr_27369[(13)] = inst_27306);

(statearr_27369[(11)] = inst_27305);

return statearr_27369;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27354__$1,(22),inst_27307);
} else {
if((state_val_27355 === (31))){
var inst_27336 = (state_27354[(2)]);
var state_27354__$1 = state_27354;
if(cljs.core.truth_(inst_27336)){
var statearr_27370_27426 = state_27354__$1;
(statearr_27370_27426[(1)] = (32));

} else {
var statearr_27371_27427 = state_27354__$1;
(statearr_27371_27427[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (32))){
var inst_27313 = (state_27354[(14)]);
var state_27354__$1 = state_27354;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27354__$1,(35),out,inst_27313);
} else {
if((state_val_27355 === (33))){
var inst_27304 = (state_27354[(12)]);
var inst_27281 = inst_27304;
var state_27354__$1 = (function (){var statearr_27372 = state_27354;
(statearr_27372[(7)] = inst_27281);

return statearr_27372;
})();
var statearr_27373_27428 = state_27354__$1;
(statearr_27373_27428[(2)] = null);

(statearr_27373_27428[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (13))){
var inst_27281 = (state_27354[(7)]);
var inst_27288 = inst_27281.cljs$lang$protocol_mask$partition0$;
var inst_27289 = (inst_27288 & (64));
var inst_27290 = inst_27281.cljs$core$ISeq$;
var inst_27291 = (cljs.core.PROTOCOL_SENTINEL === inst_27290);
var inst_27292 = ((inst_27289) || (inst_27291));
var state_27354__$1 = state_27354;
if(cljs.core.truth_(inst_27292)){
var statearr_27374_27429 = state_27354__$1;
(statearr_27374_27429[(1)] = (16));

} else {
var statearr_27375_27430 = state_27354__$1;
(statearr_27375_27430[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (22))){
var inst_27313 = (state_27354[(14)]);
var inst_27314 = (state_27354[(10)]);
var inst_27312 = (state_27354[(2)]);
var inst_27313__$1 = cljs.core.nth.call(null,inst_27312,(0),null);
var inst_27314__$1 = cljs.core.nth.call(null,inst_27312,(1),null);
var inst_27315 = (inst_27313__$1 == null);
var inst_27316 = cljs.core._EQ_.call(null,inst_27314__$1,change);
var inst_27317 = ((inst_27315) || (inst_27316));
var state_27354__$1 = (function (){var statearr_27376 = state_27354;
(statearr_27376[(14)] = inst_27313__$1);

(statearr_27376[(10)] = inst_27314__$1);

return statearr_27376;
})();
if(cljs.core.truth_(inst_27317)){
var statearr_27377_27431 = state_27354__$1;
(statearr_27377_27431[(1)] = (23));

} else {
var statearr_27378_27432 = state_27354__$1;
(statearr_27378_27432[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (36))){
var inst_27304 = (state_27354[(12)]);
var inst_27281 = inst_27304;
var state_27354__$1 = (function (){var statearr_27379 = state_27354;
(statearr_27379[(7)] = inst_27281);

return statearr_27379;
})();
var statearr_27380_27433 = state_27354__$1;
(statearr_27380_27433[(2)] = null);

(statearr_27380_27433[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (29))){
var inst_27328 = (state_27354[(9)]);
var state_27354__$1 = state_27354;
var statearr_27381_27434 = state_27354__$1;
(statearr_27381_27434[(2)] = inst_27328);

(statearr_27381_27434[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (6))){
var state_27354__$1 = state_27354;
var statearr_27382_27435 = state_27354__$1;
(statearr_27382_27435[(2)] = false);

(statearr_27382_27435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (28))){
var inst_27324 = (state_27354[(2)]);
var inst_27325 = calc_state.call(null);
var inst_27281 = inst_27325;
var state_27354__$1 = (function (){var statearr_27383 = state_27354;
(statearr_27383[(15)] = inst_27324);

(statearr_27383[(7)] = inst_27281);

return statearr_27383;
})();
var statearr_27384_27436 = state_27354__$1;
(statearr_27384_27436[(2)] = null);

(statearr_27384_27436[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (25))){
var inst_27350 = (state_27354[(2)]);
var state_27354__$1 = state_27354;
var statearr_27385_27437 = state_27354__$1;
(statearr_27385_27437[(2)] = inst_27350);

(statearr_27385_27437[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (34))){
var inst_27348 = (state_27354[(2)]);
var state_27354__$1 = state_27354;
var statearr_27386_27438 = state_27354__$1;
(statearr_27386_27438[(2)] = inst_27348);

(statearr_27386_27438[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (17))){
var state_27354__$1 = state_27354;
var statearr_27387_27439 = state_27354__$1;
(statearr_27387_27439[(2)] = false);

(statearr_27387_27439[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (3))){
var state_27354__$1 = state_27354;
var statearr_27388_27440 = state_27354__$1;
(statearr_27388_27440[(2)] = false);

(statearr_27388_27440[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (12))){
var inst_27352 = (state_27354[(2)]);
var state_27354__$1 = state_27354;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27354__$1,inst_27352);
} else {
if((state_val_27355 === (2))){
var inst_27256 = (state_27354[(8)]);
var inst_27261 = inst_27256.cljs$lang$protocol_mask$partition0$;
var inst_27262 = (inst_27261 & (64));
var inst_27263 = inst_27256.cljs$core$ISeq$;
var inst_27264 = (cljs.core.PROTOCOL_SENTINEL === inst_27263);
var inst_27265 = ((inst_27262) || (inst_27264));
var state_27354__$1 = state_27354;
if(cljs.core.truth_(inst_27265)){
var statearr_27389_27441 = state_27354__$1;
(statearr_27389_27441[(1)] = (5));

} else {
var statearr_27390_27442 = state_27354__$1;
(statearr_27390_27442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (23))){
var inst_27313 = (state_27354[(14)]);
var inst_27319 = (inst_27313 == null);
var state_27354__$1 = state_27354;
if(cljs.core.truth_(inst_27319)){
var statearr_27391_27443 = state_27354__$1;
(statearr_27391_27443[(1)] = (26));

} else {
var statearr_27392_27444 = state_27354__$1;
(statearr_27392_27444[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (35))){
var inst_27339 = (state_27354[(2)]);
var state_27354__$1 = state_27354;
if(cljs.core.truth_(inst_27339)){
var statearr_27393_27445 = state_27354__$1;
(statearr_27393_27445[(1)] = (36));

} else {
var statearr_27394_27446 = state_27354__$1;
(statearr_27394_27446[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (19))){
var inst_27281 = (state_27354[(7)]);
var inst_27301 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27281);
var state_27354__$1 = state_27354;
var statearr_27395_27447 = state_27354__$1;
(statearr_27395_27447[(2)] = inst_27301);

(statearr_27395_27447[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (11))){
var inst_27281 = (state_27354[(7)]);
var inst_27285 = (inst_27281 == null);
var inst_27286 = cljs.core.not.call(null,inst_27285);
var state_27354__$1 = state_27354;
if(inst_27286){
var statearr_27396_27448 = state_27354__$1;
(statearr_27396_27448[(1)] = (13));

} else {
var statearr_27397_27449 = state_27354__$1;
(statearr_27397_27449[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (9))){
var inst_27256 = (state_27354[(8)]);
var state_27354__$1 = state_27354;
var statearr_27398_27450 = state_27354__$1;
(statearr_27398_27450[(2)] = inst_27256);

(statearr_27398_27450[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (5))){
var state_27354__$1 = state_27354;
var statearr_27399_27451 = state_27354__$1;
(statearr_27399_27451[(2)] = true);

(statearr_27399_27451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (14))){
var state_27354__$1 = state_27354;
var statearr_27400_27452 = state_27354__$1;
(statearr_27400_27452[(2)] = false);

(statearr_27400_27452[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (26))){
var inst_27314 = (state_27354[(10)]);
var inst_27321 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27314);
var state_27354__$1 = state_27354;
var statearr_27401_27453 = state_27354__$1;
(statearr_27401_27453[(2)] = inst_27321);

(statearr_27401_27453[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (16))){
var state_27354__$1 = state_27354;
var statearr_27402_27454 = state_27354__$1;
(statearr_27402_27454[(2)] = true);

(statearr_27402_27454[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (38))){
var inst_27344 = (state_27354[(2)]);
var state_27354__$1 = state_27354;
var statearr_27403_27455 = state_27354__$1;
(statearr_27403_27455[(2)] = inst_27344);

(statearr_27403_27455[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (30))){
var inst_27306 = (state_27354[(13)]);
var inst_27314 = (state_27354[(10)]);
var inst_27305 = (state_27354[(11)]);
var inst_27331 = cljs.core.empty_QMARK_.call(null,inst_27305);
var inst_27332 = inst_27306.call(null,inst_27314);
var inst_27333 = cljs.core.not.call(null,inst_27332);
var inst_27334 = ((inst_27331) && (inst_27333));
var state_27354__$1 = state_27354;
var statearr_27404_27456 = state_27354__$1;
(statearr_27404_27456[(2)] = inst_27334);

(statearr_27404_27456[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (10))){
var inst_27256 = (state_27354[(8)]);
var inst_27277 = (state_27354[(2)]);
var inst_27278 = cljs.core.get.call(null,inst_27277,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27279 = cljs.core.get.call(null,inst_27277,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27280 = cljs.core.get.call(null,inst_27277,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27281 = inst_27256;
var state_27354__$1 = (function (){var statearr_27405 = state_27354;
(statearr_27405[(16)] = inst_27278);

(statearr_27405[(7)] = inst_27281);

(statearr_27405[(17)] = inst_27279);

(statearr_27405[(18)] = inst_27280);

return statearr_27405;
})();
var statearr_27406_27457 = state_27354__$1;
(statearr_27406_27457[(2)] = null);

(statearr_27406_27457[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (18))){
var inst_27296 = (state_27354[(2)]);
var state_27354__$1 = state_27354;
var statearr_27407_27458 = state_27354__$1;
(statearr_27407_27458[(2)] = inst_27296);

(statearr_27407_27458[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (37))){
var state_27354__$1 = state_27354;
var statearr_27408_27459 = state_27354__$1;
(statearr_27408_27459[(2)] = null);

(statearr_27408_27459[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (8))){
var inst_27256 = (state_27354[(8)]);
var inst_27274 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27256);
var state_27354__$1 = state_27354;
var statearr_27409_27460 = state_27354__$1;
(statearr_27409_27460[(2)] = inst_27274);

(statearr_27409_27460[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__26252__auto__ = null;
var cljs$core$async$mix_$_state_machine__26252__auto____0 = (function (){
var statearr_27410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27410[(0)] = cljs$core$async$mix_$_state_machine__26252__auto__);

(statearr_27410[(1)] = (1));

return statearr_27410;
});
var cljs$core$async$mix_$_state_machine__26252__auto____1 = (function (state_27354){
while(true){
var ret_value__26253__auto__ = (function (){try{while(true){
var result__26254__auto__ = switch__26251__auto__.call(null,state_27354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26254__auto__;
}
break;
}
}catch (e27411){if((e27411 instanceof Object)){
var ex__26255__auto__ = e27411;
var statearr_27412_27461 = state_27354;
(statearr_27412_27461[(5)] = ex__26255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27462 = state_27354;
state_27354 = G__27462;
continue;
} else {
return ret_value__26253__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26252__auto__ = function(state_27354){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26252__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26252__auto____1.call(this,state_27354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26252__auto____0;
cljs$core$async$mix_$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26252__auto____1;
return cljs$core$async$mix_$_state_machine__26252__auto__;
})()
})();
var state__26348__auto__ = (function (){var statearr_27413 = f__26347__auto__.call(null);
(statearr_27413[(6)] = c__26346__auto___27414);

return statearr_27413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26348__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_27465 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_27465.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_27466 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_27466.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_27467 = (function() {
var G__27468 = null;
var G__27468__1 = (function (p){
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
var G__27468__2 = (function (p,v){
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
G__27468 = function(p,v){
switch(arguments.length){
case 1:
return G__27468__1.call(this,p);
case 2:
return G__27468__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27468.cljs$core$IFn$_invoke$arity$1 = G__27468__1;
G__27468.cljs$core$IFn$_invoke$arity$2 = G__27468__2;
return G__27468;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27464 = arguments.length;
switch (G__27464) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27467.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27467.call(null,p,v);
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
var G__27472 = arguments.length;
switch (G__27472) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__27470_SHARP_){
if(cljs.core.truth_(p1__27470_SHARP_.call(null,topic))){
return p1__27470_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27470_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27473 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27473 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27474){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27474 = meta27474;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27475,meta27474__$1){
var self__ = this;
var _27475__$1 = this;
return (new cljs.core.async.t_cljs$core$async27473(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27474__$1));
}));

(cljs.core.async.t_cljs$core$async27473.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27475){
var self__ = this;
var _27475__$1 = this;
return self__.meta27474;
}));

(cljs.core.async.t_cljs$core$async27473.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27473.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27473.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27473.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async27473.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async27473.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async27473.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async27473.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27474","meta27474",1305370514,null)], null);
}));

(cljs.core.async.t_cljs$core$async27473.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27473.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27473");

(cljs.core.async.t_cljs$core$async27473.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27473");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27473.
 */
cljs.core.async.__GT_t_cljs$core$async27473 = (function cljs$core$async$__GT_t_cljs$core$async27473(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27474){
return (new cljs.core.async.t_cljs$core$async27473(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27474));
});

}

return (new cljs.core.async.t_cljs$core$async27473(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26346__auto___27593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26347__auto__ = (function (){var switch__26251__auto__ = (function (state_27547){
var state_val_27548 = (state_27547[(1)]);
if((state_val_27548 === (7))){
var inst_27543 = (state_27547[(2)]);
var state_27547__$1 = state_27547;
var statearr_27549_27594 = state_27547__$1;
(statearr_27549_27594[(2)] = inst_27543);

(statearr_27549_27594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (20))){
var state_27547__$1 = state_27547;
var statearr_27550_27595 = state_27547__$1;
(statearr_27550_27595[(2)] = null);

(statearr_27550_27595[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (1))){
var state_27547__$1 = state_27547;
var statearr_27551_27596 = state_27547__$1;
(statearr_27551_27596[(2)] = null);

(statearr_27551_27596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (24))){
var inst_27526 = (state_27547[(7)]);
var inst_27535 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27526);
var state_27547__$1 = state_27547;
var statearr_27552_27597 = state_27547__$1;
(statearr_27552_27597[(2)] = inst_27535);

(statearr_27552_27597[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (4))){
var inst_27478 = (state_27547[(8)]);
var inst_27478__$1 = (state_27547[(2)]);
var inst_27479 = (inst_27478__$1 == null);
var state_27547__$1 = (function (){var statearr_27553 = state_27547;
(statearr_27553[(8)] = inst_27478__$1);

return statearr_27553;
})();
if(cljs.core.truth_(inst_27479)){
var statearr_27554_27598 = state_27547__$1;
(statearr_27554_27598[(1)] = (5));

} else {
var statearr_27555_27599 = state_27547__$1;
(statearr_27555_27599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (15))){
var inst_27520 = (state_27547[(2)]);
var state_27547__$1 = state_27547;
var statearr_27556_27600 = state_27547__$1;
(statearr_27556_27600[(2)] = inst_27520);

(statearr_27556_27600[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (21))){
var inst_27540 = (state_27547[(2)]);
var state_27547__$1 = (function (){var statearr_27557 = state_27547;
(statearr_27557[(9)] = inst_27540);

return statearr_27557;
})();
var statearr_27558_27601 = state_27547__$1;
(statearr_27558_27601[(2)] = null);

(statearr_27558_27601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (13))){
var inst_27502 = (state_27547[(10)]);
var inst_27504 = cljs.core.chunked_seq_QMARK_.call(null,inst_27502);
var state_27547__$1 = state_27547;
if(inst_27504){
var statearr_27559_27602 = state_27547__$1;
(statearr_27559_27602[(1)] = (16));

} else {
var statearr_27560_27603 = state_27547__$1;
(statearr_27560_27603[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (22))){
var inst_27532 = (state_27547[(2)]);
var state_27547__$1 = state_27547;
if(cljs.core.truth_(inst_27532)){
var statearr_27561_27604 = state_27547__$1;
(statearr_27561_27604[(1)] = (23));

} else {
var statearr_27562_27605 = state_27547__$1;
(statearr_27562_27605[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (6))){
var inst_27526 = (state_27547[(7)]);
var inst_27528 = (state_27547[(11)]);
var inst_27478 = (state_27547[(8)]);
var inst_27526__$1 = topic_fn.call(null,inst_27478);
var inst_27527 = cljs.core.deref.call(null,mults);
var inst_27528__$1 = cljs.core.get.call(null,inst_27527,inst_27526__$1);
var state_27547__$1 = (function (){var statearr_27563 = state_27547;
(statearr_27563[(7)] = inst_27526__$1);

(statearr_27563[(11)] = inst_27528__$1);

return statearr_27563;
})();
if(cljs.core.truth_(inst_27528__$1)){
var statearr_27564_27606 = state_27547__$1;
(statearr_27564_27606[(1)] = (19));

} else {
var statearr_27565_27607 = state_27547__$1;
(statearr_27565_27607[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (25))){
var inst_27537 = (state_27547[(2)]);
var state_27547__$1 = state_27547;
var statearr_27566_27608 = state_27547__$1;
(statearr_27566_27608[(2)] = inst_27537);

(statearr_27566_27608[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (17))){
var inst_27502 = (state_27547[(10)]);
var inst_27511 = cljs.core.first.call(null,inst_27502);
var inst_27512 = cljs.core.async.muxch_STAR_.call(null,inst_27511);
var inst_27513 = cljs.core.async.close_BANG_.call(null,inst_27512);
var inst_27514 = cljs.core.next.call(null,inst_27502);
var inst_27488 = inst_27514;
var inst_27489 = null;
var inst_27490 = (0);
var inst_27491 = (0);
var state_27547__$1 = (function (){var statearr_27567 = state_27547;
(statearr_27567[(12)] = inst_27488);

(statearr_27567[(13)] = inst_27491);

(statearr_27567[(14)] = inst_27489);

(statearr_27567[(15)] = inst_27513);

(statearr_27567[(16)] = inst_27490);

return statearr_27567;
})();
var statearr_27568_27609 = state_27547__$1;
(statearr_27568_27609[(2)] = null);

(statearr_27568_27609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (3))){
var inst_27545 = (state_27547[(2)]);
var state_27547__$1 = state_27547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27547__$1,inst_27545);
} else {
if((state_val_27548 === (12))){
var inst_27522 = (state_27547[(2)]);
var state_27547__$1 = state_27547;
var statearr_27569_27610 = state_27547__$1;
(statearr_27569_27610[(2)] = inst_27522);

(statearr_27569_27610[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (2))){
var state_27547__$1 = state_27547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27547__$1,(4),ch);
} else {
if((state_val_27548 === (23))){
var state_27547__$1 = state_27547;
var statearr_27570_27611 = state_27547__$1;
(statearr_27570_27611[(2)] = null);

(statearr_27570_27611[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (19))){
var inst_27528 = (state_27547[(11)]);
var inst_27478 = (state_27547[(8)]);
var inst_27530 = cljs.core.async.muxch_STAR_.call(null,inst_27528);
var state_27547__$1 = state_27547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27547__$1,(22),inst_27530,inst_27478);
} else {
if((state_val_27548 === (11))){
var inst_27488 = (state_27547[(12)]);
var inst_27502 = (state_27547[(10)]);
var inst_27502__$1 = cljs.core.seq.call(null,inst_27488);
var state_27547__$1 = (function (){var statearr_27571 = state_27547;
(statearr_27571[(10)] = inst_27502__$1);

return statearr_27571;
})();
if(inst_27502__$1){
var statearr_27572_27612 = state_27547__$1;
(statearr_27572_27612[(1)] = (13));

} else {
var statearr_27573_27613 = state_27547__$1;
(statearr_27573_27613[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (9))){
var inst_27524 = (state_27547[(2)]);
var state_27547__$1 = state_27547;
var statearr_27574_27614 = state_27547__$1;
(statearr_27574_27614[(2)] = inst_27524);

(statearr_27574_27614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (5))){
var inst_27485 = cljs.core.deref.call(null,mults);
var inst_27486 = cljs.core.vals.call(null,inst_27485);
var inst_27487 = cljs.core.seq.call(null,inst_27486);
var inst_27488 = inst_27487;
var inst_27489 = null;
var inst_27490 = (0);
var inst_27491 = (0);
var state_27547__$1 = (function (){var statearr_27575 = state_27547;
(statearr_27575[(12)] = inst_27488);

(statearr_27575[(13)] = inst_27491);

(statearr_27575[(14)] = inst_27489);

(statearr_27575[(16)] = inst_27490);

return statearr_27575;
})();
var statearr_27576_27615 = state_27547__$1;
(statearr_27576_27615[(2)] = null);

(statearr_27576_27615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (14))){
var state_27547__$1 = state_27547;
var statearr_27580_27616 = state_27547__$1;
(statearr_27580_27616[(2)] = null);

(statearr_27580_27616[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (16))){
var inst_27502 = (state_27547[(10)]);
var inst_27506 = cljs.core.chunk_first.call(null,inst_27502);
var inst_27507 = cljs.core.chunk_rest.call(null,inst_27502);
var inst_27508 = cljs.core.count.call(null,inst_27506);
var inst_27488 = inst_27507;
var inst_27489 = inst_27506;
var inst_27490 = inst_27508;
var inst_27491 = (0);
var state_27547__$1 = (function (){var statearr_27581 = state_27547;
(statearr_27581[(12)] = inst_27488);

(statearr_27581[(13)] = inst_27491);

(statearr_27581[(14)] = inst_27489);

(statearr_27581[(16)] = inst_27490);

return statearr_27581;
})();
var statearr_27582_27617 = state_27547__$1;
(statearr_27582_27617[(2)] = null);

(statearr_27582_27617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (10))){
var inst_27488 = (state_27547[(12)]);
var inst_27491 = (state_27547[(13)]);
var inst_27489 = (state_27547[(14)]);
var inst_27490 = (state_27547[(16)]);
var inst_27496 = cljs.core._nth.call(null,inst_27489,inst_27491);
var inst_27497 = cljs.core.async.muxch_STAR_.call(null,inst_27496);
var inst_27498 = cljs.core.async.close_BANG_.call(null,inst_27497);
var inst_27499 = (inst_27491 + (1));
var tmp27577 = inst_27488;
var tmp27578 = inst_27489;
var tmp27579 = inst_27490;
var inst_27488__$1 = tmp27577;
var inst_27489__$1 = tmp27578;
var inst_27490__$1 = tmp27579;
var inst_27491__$1 = inst_27499;
var state_27547__$1 = (function (){var statearr_27583 = state_27547;
(statearr_27583[(17)] = inst_27498);

(statearr_27583[(12)] = inst_27488__$1);

(statearr_27583[(13)] = inst_27491__$1);

(statearr_27583[(14)] = inst_27489__$1);

(statearr_27583[(16)] = inst_27490__$1);

return statearr_27583;
})();
var statearr_27584_27618 = state_27547__$1;
(statearr_27584_27618[(2)] = null);

(statearr_27584_27618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (18))){
var inst_27517 = (state_27547[(2)]);
var state_27547__$1 = state_27547;
var statearr_27585_27619 = state_27547__$1;
(statearr_27585_27619[(2)] = inst_27517);

(statearr_27585_27619[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27548 === (8))){
var inst_27491 = (state_27547[(13)]);
var inst_27490 = (state_27547[(16)]);
var inst_27493 = (inst_27491 < inst_27490);
var inst_27494 = inst_27493;
var state_27547__$1 = state_27547;
if(cljs.core.truth_(inst_27494)){
var statearr_27586_27620 = state_27547__$1;
(statearr_27586_27620[(1)] = (10));

} else {
var statearr_27587_27621 = state_27547__$1;
(statearr_27587_27621[(1)] = (11));

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
var cljs$core$async$state_machine__26252__auto__ = null;
var cljs$core$async$state_machine__26252__auto____0 = (function (){
var statearr_27588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27588[(0)] = cljs$core$async$state_machine__26252__auto__);

(statearr_27588[(1)] = (1));

return statearr_27588;
});
var cljs$core$async$state_machine__26252__auto____1 = (function (state_27547){
while(true){
var ret_value__26253__auto__ = (function (){try{while(true){
var result__26254__auto__ = switch__26251__auto__.call(null,state_27547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26254__auto__;
}
break;
}
}catch (e27589){if((e27589 instanceof Object)){
var ex__26255__auto__ = e27589;
var statearr_27590_27622 = state_27547;
(statearr_27590_27622[(5)] = ex__26255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27623 = state_27547;
state_27547 = G__27623;
continue;
} else {
return ret_value__26253__auto__;
}
break;
}
});
cljs$core$async$state_machine__26252__auto__ = function(state_27547){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26252__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26252__auto____1.call(this,state_27547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26252__auto____0;
cljs$core$async$state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26252__auto____1;
return cljs$core$async$state_machine__26252__auto__;
})()
})();
var state__26348__auto__ = (function (){var statearr_27591 = f__26347__auto__.call(null);
(statearr_27591[(6)] = c__26346__auto___27593);

return statearr_27591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26348__auto__);
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
var G__27625 = arguments.length;
switch (G__27625) {
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
var G__27628 = arguments.length;
switch (G__27628) {
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
var G__27631 = arguments.length;
switch (G__27631) {
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
var c__26346__auto___27698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26347__auto__ = (function (){var switch__26251__auto__ = (function (state_27670){
var state_val_27671 = (state_27670[(1)]);
if((state_val_27671 === (7))){
var state_27670__$1 = state_27670;
var statearr_27672_27699 = state_27670__$1;
(statearr_27672_27699[(2)] = null);

(statearr_27672_27699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (1))){
var state_27670__$1 = state_27670;
var statearr_27673_27700 = state_27670__$1;
(statearr_27673_27700[(2)] = null);

(statearr_27673_27700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (4))){
var inst_27634 = (state_27670[(7)]);
var inst_27636 = (inst_27634 < cnt);
var state_27670__$1 = state_27670;
if(cljs.core.truth_(inst_27636)){
var statearr_27674_27701 = state_27670__$1;
(statearr_27674_27701[(1)] = (6));

} else {
var statearr_27675_27702 = state_27670__$1;
(statearr_27675_27702[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (15))){
var inst_27666 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
var statearr_27676_27703 = state_27670__$1;
(statearr_27676_27703[(2)] = inst_27666);

(statearr_27676_27703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (13))){
var inst_27659 = cljs.core.async.close_BANG_.call(null,out);
var state_27670__$1 = state_27670;
var statearr_27677_27704 = state_27670__$1;
(statearr_27677_27704[(2)] = inst_27659);

(statearr_27677_27704[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (6))){
var state_27670__$1 = state_27670;
var statearr_27678_27705 = state_27670__$1;
(statearr_27678_27705[(2)] = null);

(statearr_27678_27705[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (3))){
var inst_27668 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27670__$1,inst_27668);
} else {
if((state_val_27671 === (12))){
var inst_27656 = (state_27670[(8)]);
var inst_27656__$1 = (state_27670[(2)]);
var inst_27657 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27656__$1);
var state_27670__$1 = (function (){var statearr_27679 = state_27670;
(statearr_27679[(8)] = inst_27656__$1);

return statearr_27679;
})();
if(cljs.core.truth_(inst_27657)){
var statearr_27680_27706 = state_27670__$1;
(statearr_27680_27706[(1)] = (13));

} else {
var statearr_27681_27707 = state_27670__$1;
(statearr_27681_27707[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (2))){
var inst_27633 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27634 = (0);
var state_27670__$1 = (function (){var statearr_27682 = state_27670;
(statearr_27682[(9)] = inst_27633);

(statearr_27682[(7)] = inst_27634);

return statearr_27682;
})();
var statearr_27683_27708 = state_27670__$1;
(statearr_27683_27708[(2)] = null);

(statearr_27683_27708[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (11))){
var inst_27634 = (state_27670[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27670,(10),Object,null,(9));
var inst_27643 = chs__$1.call(null,inst_27634);
var inst_27644 = done.call(null,inst_27634);
var inst_27645 = cljs.core.async.take_BANG_.call(null,inst_27643,inst_27644);
var state_27670__$1 = state_27670;
var statearr_27684_27709 = state_27670__$1;
(statearr_27684_27709[(2)] = inst_27645);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27670__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (9))){
var inst_27634 = (state_27670[(7)]);
var inst_27647 = (state_27670[(2)]);
var inst_27648 = (inst_27634 + (1));
var inst_27634__$1 = inst_27648;
var state_27670__$1 = (function (){var statearr_27685 = state_27670;
(statearr_27685[(7)] = inst_27634__$1);

(statearr_27685[(10)] = inst_27647);

return statearr_27685;
})();
var statearr_27686_27710 = state_27670__$1;
(statearr_27686_27710[(2)] = null);

(statearr_27686_27710[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (5))){
var inst_27654 = (state_27670[(2)]);
var state_27670__$1 = (function (){var statearr_27687 = state_27670;
(statearr_27687[(11)] = inst_27654);

return statearr_27687;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27670__$1,(12),dchan);
} else {
if((state_val_27671 === (14))){
var inst_27656 = (state_27670[(8)]);
var inst_27661 = cljs.core.apply.call(null,f,inst_27656);
var state_27670__$1 = state_27670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27670__$1,(16),out,inst_27661);
} else {
if((state_val_27671 === (16))){
var inst_27663 = (state_27670[(2)]);
var state_27670__$1 = (function (){var statearr_27688 = state_27670;
(statearr_27688[(12)] = inst_27663);

return statearr_27688;
})();
var statearr_27689_27711 = state_27670__$1;
(statearr_27689_27711[(2)] = null);

(statearr_27689_27711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (10))){
var inst_27638 = (state_27670[(2)]);
var inst_27639 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27670__$1 = (function (){var statearr_27690 = state_27670;
(statearr_27690[(13)] = inst_27638);

return statearr_27690;
})();
var statearr_27691_27712 = state_27670__$1;
(statearr_27691_27712[(2)] = inst_27639);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27670__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (8))){
var inst_27652 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
var statearr_27692_27713 = state_27670__$1;
(statearr_27692_27713[(2)] = inst_27652);

(statearr_27692_27713[(1)] = (5));


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
var cljs$core$async$state_machine__26252__auto__ = null;
var cljs$core$async$state_machine__26252__auto____0 = (function (){
var statearr_27693 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27693[(0)] = cljs$core$async$state_machine__26252__auto__);

(statearr_27693[(1)] = (1));

return statearr_27693;
});
var cljs$core$async$state_machine__26252__auto____1 = (function (state_27670){
while(true){
var ret_value__26253__auto__ = (function (){try{while(true){
var result__26254__auto__ = switch__26251__auto__.call(null,state_27670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26254__auto__;
}
break;
}
}catch (e27694){if((e27694 instanceof Object)){
var ex__26255__auto__ = e27694;
var statearr_27695_27714 = state_27670;
(statearr_27695_27714[(5)] = ex__26255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27715 = state_27670;
state_27670 = G__27715;
continue;
} else {
return ret_value__26253__auto__;
}
break;
}
});
cljs$core$async$state_machine__26252__auto__ = function(state_27670){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26252__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26252__auto____1.call(this,state_27670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26252__auto____0;
cljs$core$async$state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26252__auto____1;
return cljs$core$async$state_machine__26252__auto__;
})()
})();
var state__26348__auto__ = (function (){var statearr_27696 = f__26347__auto__.call(null);
(statearr_27696[(6)] = c__26346__auto___27698);

return statearr_27696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26348__auto__);
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
var G__27718 = arguments.length;
switch (G__27718) {
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
var c__26346__auto___27772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26347__auto__ = (function (){var switch__26251__auto__ = (function (state_27750){
var state_val_27751 = (state_27750[(1)]);
if((state_val_27751 === (7))){
var inst_27729 = (state_27750[(7)]);
var inst_27730 = (state_27750[(8)]);
var inst_27729__$1 = (state_27750[(2)]);
var inst_27730__$1 = cljs.core.nth.call(null,inst_27729__$1,(0),null);
var inst_27731 = cljs.core.nth.call(null,inst_27729__$1,(1),null);
var inst_27732 = (inst_27730__$1 == null);
var state_27750__$1 = (function (){var statearr_27752 = state_27750;
(statearr_27752[(9)] = inst_27731);

(statearr_27752[(7)] = inst_27729__$1);

(statearr_27752[(8)] = inst_27730__$1);

return statearr_27752;
})();
if(cljs.core.truth_(inst_27732)){
var statearr_27753_27773 = state_27750__$1;
(statearr_27753_27773[(1)] = (8));

} else {
var statearr_27754_27774 = state_27750__$1;
(statearr_27754_27774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (1))){
var inst_27719 = cljs.core.vec.call(null,chs);
var inst_27720 = inst_27719;
var state_27750__$1 = (function (){var statearr_27755 = state_27750;
(statearr_27755[(10)] = inst_27720);

return statearr_27755;
})();
var statearr_27756_27775 = state_27750__$1;
(statearr_27756_27775[(2)] = null);

(statearr_27756_27775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (4))){
var inst_27720 = (state_27750[(10)]);
var state_27750__$1 = state_27750;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27750__$1,(7),inst_27720);
} else {
if((state_val_27751 === (6))){
var inst_27746 = (state_27750[(2)]);
var state_27750__$1 = state_27750;
var statearr_27757_27776 = state_27750__$1;
(statearr_27757_27776[(2)] = inst_27746);

(statearr_27757_27776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (3))){
var inst_27748 = (state_27750[(2)]);
var state_27750__$1 = state_27750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27750__$1,inst_27748);
} else {
if((state_val_27751 === (2))){
var inst_27720 = (state_27750[(10)]);
var inst_27722 = cljs.core.count.call(null,inst_27720);
var inst_27723 = (inst_27722 > (0));
var state_27750__$1 = state_27750;
if(cljs.core.truth_(inst_27723)){
var statearr_27759_27777 = state_27750__$1;
(statearr_27759_27777[(1)] = (4));

} else {
var statearr_27760_27778 = state_27750__$1;
(statearr_27760_27778[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (11))){
var inst_27720 = (state_27750[(10)]);
var inst_27739 = (state_27750[(2)]);
var tmp27758 = inst_27720;
var inst_27720__$1 = tmp27758;
var state_27750__$1 = (function (){var statearr_27761 = state_27750;
(statearr_27761[(11)] = inst_27739);

(statearr_27761[(10)] = inst_27720__$1);

return statearr_27761;
})();
var statearr_27762_27779 = state_27750__$1;
(statearr_27762_27779[(2)] = null);

(statearr_27762_27779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (9))){
var inst_27730 = (state_27750[(8)]);
var state_27750__$1 = state_27750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27750__$1,(11),out,inst_27730);
} else {
if((state_val_27751 === (5))){
var inst_27744 = cljs.core.async.close_BANG_.call(null,out);
var state_27750__$1 = state_27750;
var statearr_27763_27780 = state_27750__$1;
(statearr_27763_27780[(2)] = inst_27744);

(statearr_27763_27780[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (10))){
var inst_27742 = (state_27750[(2)]);
var state_27750__$1 = state_27750;
var statearr_27764_27781 = state_27750__$1;
(statearr_27764_27781[(2)] = inst_27742);

(statearr_27764_27781[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (8))){
var inst_27720 = (state_27750[(10)]);
var inst_27731 = (state_27750[(9)]);
var inst_27729 = (state_27750[(7)]);
var inst_27730 = (state_27750[(8)]);
var inst_27734 = (function (){var cs = inst_27720;
var vec__27725 = inst_27729;
var v = inst_27730;
var c = inst_27731;
return (function (p1__27716_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27716_SHARP_);
});
})();
var inst_27735 = cljs.core.filterv.call(null,inst_27734,inst_27720);
var inst_27720__$1 = inst_27735;
var state_27750__$1 = (function (){var statearr_27765 = state_27750;
(statearr_27765[(10)] = inst_27720__$1);

return statearr_27765;
})();
var statearr_27766_27782 = state_27750__$1;
(statearr_27766_27782[(2)] = null);

(statearr_27766_27782[(1)] = (2));


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
var cljs$core$async$state_machine__26252__auto__ = null;
var cljs$core$async$state_machine__26252__auto____0 = (function (){
var statearr_27767 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27767[(0)] = cljs$core$async$state_machine__26252__auto__);

(statearr_27767[(1)] = (1));

return statearr_27767;
});
var cljs$core$async$state_machine__26252__auto____1 = (function (state_27750){
while(true){
var ret_value__26253__auto__ = (function (){try{while(true){
var result__26254__auto__ = switch__26251__auto__.call(null,state_27750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26254__auto__;
}
break;
}
}catch (e27768){if((e27768 instanceof Object)){
var ex__26255__auto__ = e27768;
var statearr_27769_27783 = state_27750;
(statearr_27769_27783[(5)] = ex__26255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27784 = state_27750;
state_27750 = G__27784;
continue;
} else {
return ret_value__26253__auto__;
}
break;
}
});
cljs$core$async$state_machine__26252__auto__ = function(state_27750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26252__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26252__auto____1.call(this,state_27750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26252__auto____0;
cljs$core$async$state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26252__auto____1;
return cljs$core$async$state_machine__26252__auto__;
})()
})();
var state__26348__auto__ = (function (){var statearr_27770 = f__26347__auto__.call(null);
(statearr_27770[(6)] = c__26346__auto___27772);

return statearr_27770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26348__auto__);
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
var G__27786 = arguments.length;
switch (G__27786) {
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
var c__26346__auto___27831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26347__auto__ = (function (){var switch__26251__auto__ = (function (state_27810){
var state_val_27811 = (state_27810[(1)]);
if((state_val_27811 === (7))){
var inst_27792 = (state_27810[(7)]);
var inst_27792__$1 = (state_27810[(2)]);
var inst_27793 = (inst_27792__$1 == null);
var inst_27794 = cljs.core.not.call(null,inst_27793);
var state_27810__$1 = (function (){var statearr_27812 = state_27810;
(statearr_27812[(7)] = inst_27792__$1);

return statearr_27812;
})();
if(inst_27794){
var statearr_27813_27832 = state_27810__$1;
(statearr_27813_27832[(1)] = (8));

} else {
var statearr_27814_27833 = state_27810__$1;
(statearr_27814_27833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27811 === (1))){
var inst_27787 = (0);
var state_27810__$1 = (function (){var statearr_27815 = state_27810;
(statearr_27815[(8)] = inst_27787);

return statearr_27815;
})();
var statearr_27816_27834 = state_27810__$1;
(statearr_27816_27834[(2)] = null);

(statearr_27816_27834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27811 === (4))){
var state_27810__$1 = state_27810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27810__$1,(7),ch);
} else {
if((state_val_27811 === (6))){
var inst_27805 = (state_27810[(2)]);
var state_27810__$1 = state_27810;
var statearr_27817_27835 = state_27810__$1;
(statearr_27817_27835[(2)] = inst_27805);

(statearr_27817_27835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27811 === (3))){
var inst_27807 = (state_27810[(2)]);
var inst_27808 = cljs.core.async.close_BANG_.call(null,out);
var state_27810__$1 = (function (){var statearr_27818 = state_27810;
(statearr_27818[(9)] = inst_27807);

return statearr_27818;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27810__$1,inst_27808);
} else {
if((state_val_27811 === (2))){
var inst_27787 = (state_27810[(8)]);
var inst_27789 = (inst_27787 < n);
var state_27810__$1 = state_27810;
if(cljs.core.truth_(inst_27789)){
var statearr_27819_27836 = state_27810__$1;
(statearr_27819_27836[(1)] = (4));

} else {
var statearr_27820_27837 = state_27810__$1;
(statearr_27820_27837[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27811 === (11))){
var inst_27787 = (state_27810[(8)]);
var inst_27797 = (state_27810[(2)]);
var inst_27798 = (inst_27787 + (1));
var inst_27787__$1 = inst_27798;
var state_27810__$1 = (function (){var statearr_27821 = state_27810;
(statearr_27821[(8)] = inst_27787__$1);

(statearr_27821[(10)] = inst_27797);

return statearr_27821;
})();
var statearr_27822_27838 = state_27810__$1;
(statearr_27822_27838[(2)] = null);

(statearr_27822_27838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27811 === (9))){
var state_27810__$1 = state_27810;
var statearr_27823_27839 = state_27810__$1;
(statearr_27823_27839[(2)] = null);

(statearr_27823_27839[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27811 === (5))){
var state_27810__$1 = state_27810;
var statearr_27824_27840 = state_27810__$1;
(statearr_27824_27840[(2)] = null);

(statearr_27824_27840[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27811 === (10))){
var inst_27802 = (state_27810[(2)]);
var state_27810__$1 = state_27810;
var statearr_27825_27841 = state_27810__$1;
(statearr_27825_27841[(2)] = inst_27802);

(statearr_27825_27841[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27811 === (8))){
var inst_27792 = (state_27810[(7)]);
var state_27810__$1 = state_27810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27810__$1,(11),out,inst_27792);
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
var cljs$core$async$state_machine__26252__auto__ = null;
var cljs$core$async$state_machine__26252__auto____0 = (function (){
var statearr_27826 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27826[(0)] = cljs$core$async$state_machine__26252__auto__);

(statearr_27826[(1)] = (1));

return statearr_27826;
});
var cljs$core$async$state_machine__26252__auto____1 = (function (state_27810){
while(true){
var ret_value__26253__auto__ = (function (){try{while(true){
var result__26254__auto__ = switch__26251__auto__.call(null,state_27810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26254__auto__;
}
break;
}
}catch (e27827){if((e27827 instanceof Object)){
var ex__26255__auto__ = e27827;
var statearr_27828_27842 = state_27810;
(statearr_27828_27842[(5)] = ex__26255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27843 = state_27810;
state_27810 = G__27843;
continue;
} else {
return ret_value__26253__auto__;
}
break;
}
});
cljs$core$async$state_machine__26252__auto__ = function(state_27810){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26252__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26252__auto____1.call(this,state_27810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26252__auto____0;
cljs$core$async$state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26252__auto____1;
return cljs$core$async$state_machine__26252__auto__;
})()
})();
var state__26348__auto__ = (function (){var statearr_27829 = f__26347__auto__.call(null);
(statearr_27829[(6)] = c__26346__auto___27831);

return statearr_27829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26348__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27845 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27845 = (function (f,ch,meta27846){
this.f = f;
this.ch = ch;
this.meta27846 = meta27846;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27847,meta27846__$1){
var self__ = this;
var _27847__$1 = this;
return (new cljs.core.async.t_cljs$core$async27845(self__.f,self__.ch,meta27846__$1));
}));

(cljs.core.async.t_cljs$core$async27845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27847){
var self__ = this;
var _27847__$1 = this;
return self__.meta27846;
}));

(cljs.core.async.t_cljs$core$async27845.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27845.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27845.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27845.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27845.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27848 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27848 = (function (f,ch,meta27846,_,fn1,meta27849){
this.f = f;
this.ch = ch;
this.meta27846 = meta27846;
this._ = _;
this.fn1 = fn1;
this.meta27849 = meta27849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27850,meta27849__$1){
var self__ = this;
var _27850__$1 = this;
return (new cljs.core.async.t_cljs$core$async27848(self__.f,self__.ch,self__.meta27846,self__._,self__.fn1,meta27849__$1));
}));

(cljs.core.async.t_cljs$core$async27848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27850){
var self__ = this;
var _27850__$1 = this;
return self__.meta27849;
}));

(cljs.core.async.t_cljs$core$async27848.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27848.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async27848.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27848.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__27844_SHARP_){
return f1.call(null,(((p1__27844_SHARP_ == null))?null:self__.f.call(null,p1__27844_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async27848.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27846","meta27846",460056572,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27845","cljs.core.async/t_cljs$core$async27845",-1731924283,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27849","meta27849",-1087706302,null)], null);
}));

(cljs.core.async.t_cljs$core$async27848.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27848");

(cljs.core.async.t_cljs$core$async27848.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27848");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27848.
 */
cljs.core.async.__GT_t_cljs$core$async27848 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27848(f__$1,ch__$1,meta27846__$1,___$2,fn1__$1,meta27849){
return (new cljs.core.async.t_cljs$core$async27848(f__$1,ch__$1,meta27846__$1,___$2,fn1__$1,meta27849));
});

}

return (new cljs.core.async.t_cljs$core$async27848(self__.f,self__.ch,self__.meta27846,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async27845.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27845.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async27845.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27846","meta27846",460056572,null)], null);
}));

(cljs.core.async.t_cljs$core$async27845.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27845.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27845");

(cljs.core.async.t_cljs$core$async27845.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27845");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27845.
 */
cljs.core.async.__GT_t_cljs$core$async27845 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27845(f__$1,ch__$1,meta27846){
return (new cljs.core.async.t_cljs$core$async27845(f__$1,ch__$1,meta27846));
});

}

return (new cljs.core.async.t_cljs$core$async27845(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27851 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27851 = (function (f,ch,meta27852){
this.f = f;
this.ch = ch;
this.meta27852 = meta27852;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27853,meta27852__$1){
var self__ = this;
var _27853__$1 = this;
return (new cljs.core.async.t_cljs$core$async27851(self__.f,self__.ch,meta27852__$1));
}));

(cljs.core.async.t_cljs$core$async27851.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27853){
var self__ = this;
var _27853__$1 = this;
return self__.meta27852;
}));

(cljs.core.async.t_cljs$core$async27851.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27851.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27851.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27851.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async27851.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27851.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async27851.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27852","meta27852",-679787007,null)], null);
}));

(cljs.core.async.t_cljs$core$async27851.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27851.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27851");

(cljs.core.async.t_cljs$core$async27851.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27851");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27851.
 */
cljs.core.async.__GT_t_cljs$core$async27851 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27851(f__$1,ch__$1,meta27852){
return (new cljs.core.async.t_cljs$core$async27851(f__$1,ch__$1,meta27852));
});

}

return (new cljs.core.async.t_cljs$core$async27851(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27854 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27854 = (function (p,ch,meta27855){
this.p = p;
this.ch = ch;
this.meta27855 = meta27855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27856,meta27855__$1){
var self__ = this;
var _27856__$1 = this;
return (new cljs.core.async.t_cljs$core$async27854(self__.p,self__.ch,meta27855__$1));
}));

(cljs.core.async.t_cljs$core$async27854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27856){
var self__ = this;
var _27856__$1 = this;
return self__.meta27855;
}));

(cljs.core.async.t_cljs$core$async27854.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27854.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27854.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27854.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27854.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async27854.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27854.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async27854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27855","meta27855",-1369220098,null)], null);
}));

(cljs.core.async.t_cljs$core$async27854.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27854");

(cljs.core.async.t_cljs$core$async27854.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27854");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27854.
 */
cljs.core.async.__GT_t_cljs$core$async27854 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27854(p__$1,ch__$1,meta27855){
return (new cljs.core.async.t_cljs$core$async27854(p__$1,ch__$1,meta27855));
});

}

return (new cljs.core.async.t_cljs$core$async27854(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27858 = arguments.length;
switch (G__27858) {
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
var c__26346__auto___27898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26347__auto__ = (function (){var switch__26251__auto__ = (function (state_27879){
var state_val_27880 = (state_27879[(1)]);
if((state_val_27880 === (7))){
var inst_27875 = (state_27879[(2)]);
var state_27879__$1 = state_27879;
var statearr_27881_27899 = state_27879__$1;
(statearr_27881_27899[(2)] = inst_27875);

(statearr_27881_27899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (1))){
var state_27879__$1 = state_27879;
var statearr_27882_27900 = state_27879__$1;
(statearr_27882_27900[(2)] = null);

(statearr_27882_27900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (4))){
var inst_27861 = (state_27879[(7)]);
var inst_27861__$1 = (state_27879[(2)]);
var inst_27862 = (inst_27861__$1 == null);
var state_27879__$1 = (function (){var statearr_27883 = state_27879;
(statearr_27883[(7)] = inst_27861__$1);

return statearr_27883;
})();
if(cljs.core.truth_(inst_27862)){
var statearr_27884_27901 = state_27879__$1;
(statearr_27884_27901[(1)] = (5));

} else {
var statearr_27885_27902 = state_27879__$1;
(statearr_27885_27902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (6))){
var inst_27861 = (state_27879[(7)]);
var inst_27866 = p.call(null,inst_27861);
var state_27879__$1 = state_27879;
if(cljs.core.truth_(inst_27866)){
var statearr_27886_27903 = state_27879__$1;
(statearr_27886_27903[(1)] = (8));

} else {
var statearr_27887_27904 = state_27879__$1;
(statearr_27887_27904[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (3))){
var inst_27877 = (state_27879[(2)]);
var state_27879__$1 = state_27879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27879__$1,inst_27877);
} else {
if((state_val_27880 === (2))){
var state_27879__$1 = state_27879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27879__$1,(4),ch);
} else {
if((state_val_27880 === (11))){
var inst_27869 = (state_27879[(2)]);
var state_27879__$1 = state_27879;
var statearr_27888_27905 = state_27879__$1;
(statearr_27888_27905[(2)] = inst_27869);

(statearr_27888_27905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (9))){
var state_27879__$1 = state_27879;
var statearr_27889_27906 = state_27879__$1;
(statearr_27889_27906[(2)] = null);

(statearr_27889_27906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (5))){
var inst_27864 = cljs.core.async.close_BANG_.call(null,out);
var state_27879__$1 = state_27879;
var statearr_27890_27907 = state_27879__$1;
(statearr_27890_27907[(2)] = inst_27864);

(statearr_27890_27907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (10))){
var inst_27872 = (state_27879[(2)]);
var state_27879__$1 = (function (){var statearr_27891 = state_27879;
(statearr_27891[(8)] = inst_27872);

return statearr_27891;
})();
var statearr_27892_27908 = state_27879__$1;
(statearr_27892_27908[(2)] = null);

(statearr_27892_27908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (8))){
var inst_27861 = (state_27879[(7)]);
var state_27879__$1 = state_27879;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27879__$1,(11),out,inst_27861);
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
var cljs$core$async$state_machine__26252__auto__ = null;
var cljs$core$async$state_machine__26252__auto____0 = (function (){
var statearr_27893 = [null,null,null,null,null,null,null,null,null];
(statearr_27893[(0)] = cljs$core$async$state_machine__26252__auto__);

(statearr_27893[(1)] = (1));

return statearr_27893;
});
var cljs$core$async$state_machine__26252__auto____1 = (function (state_27879){
while(true){
var ret_value__26253__auto__ = (function (){try{while(true){
var result__26254__auto__ = switch__26251__auto__.call(null,state_27879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26254__auto__;
}
break;
}
}catch (e27894){if((e27894 instanceof Object)){
var ex__26255__auto__ = e27894;
var statearr_27895_27909 = state_27879;
(statearr_27895_27909[(5)] = ex__26255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27910 = state_27879;
state_27879 = G__27910;
continue;
} else {
return ret_value__26253__auto__;
}
break;
}
});
cljs$core$async$state_machine__26252__auto__ = function(state_27879){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26252__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26252__auto____1.call(this,state_27879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26252__auto____0;
cljs$core$async$state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26252__auto____1;
return cljs$core$async$state_machine__26252__auto__;
})()
})();
var state__26348__auto__ = (function (){var statearr_27896 = f__26347__auto__.call(null);
(statearr_27896[(6)] = c__26346__auto___27898);

return statearr_27896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26348__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__27912 = arguments.length;
switch (G__27912) {
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
var c__26346__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26347__auto__ = (function (){var switch__26251__auto__ = (function (state_27975){
var state_val_27976 = (state_27975[(1)]);
if((state_val_27976 === (7))){
var inst_27971 = (state_27975[(2)]);
var state_27975__$1 = state_27975;
var statearr_27977_28015 = state_27975__$1;
(statearr_27977_28015[(2)] = inst_27971);

(statearr_27977_28015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (20))){
var inst_27941 = (state_27975[(7)]);
var inst_27952 = (state_27975[(2)]);
var inst_27953 = cljs.core.next.call(null,inst_27941);
var inst_27927 = inst_27953;
var inst_27928 = null;
var inst_27929 = (0);
var inst_27930 = (0);
var state_27975__$1 = (function (){var statearr_27978 = state_27975;
(statearr_27978[(8)] = inst_27929);

(statearr_27978[(9)] = inst_27952);

(statearr_27978[(10)] = inst_27928);

(statearr_27978[(11)] = inst_27927);

(statearr_27978[(12)] = inst_27930);

return statearr_27978;
})();
var statearr_27979_28016 = state_27975__$1;
(statearr_27979_28016[(2)] = null);

(statearr_27979_28016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (1))){
var state_27975__$1 = state_27975;
var statearr_27980_28017 = state_27975__$1;
(statearr_27980_28017[(2)] = null);

(statearr_27980_28017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (4))){
var inst_27916 = (state_27975[(13)]);
var inst_27916__$1 = (state_27975[(2)]);
var inst_27917 = (inst_27916__$1 == null);
var state_27975__$1 = (function (){var statearr_27981 = state_27975;
(statearr_27981[(13)] = inst_27916__$1);

return statearr_27981;
})();
if(cljs.core.truth_(inst_27917)){
var statearr_27982_28018 = state_27975__$1;
(statearr_27982_28018[(1)] = (5));

} else {
var statearr_27983_28019 = state_27975__$1;
(statearr_27983_28019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (15))){
var state_27975__$1 = state_27975;
var statearr_27987_28020 = state_27975__$1;
(statearr_27987_28020[(2)] = null);

(statearr_27987_28020[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (21))){
var state_27975__$1 = state_27975;
var statearr_27988_28021 = state_27975__$1;
(statearr_27988_28021[(2)] = null);

(statearr_27988_28021[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (13))){
var inst_27929 = (state_27975[(8)]);
var inst_27928 = (state_27975[(10)]);
var inst_27927 = (state_27975[(11)]);
var inst_27930 = (state_27975[(12)]);
var inst_27937 = (state_27975[(2)]);
var inst_27938 = (inst_27930 + (1));
var tmp27984 = inst_27929;
var tmp27985 = inst_27928;
var tmp27986 = inst_27927;
var inst_27927__$1 = tmp27986;
var inst_27928__$1 = tmp27985;
var inst_27929__$1 = tmp27984;
var inst_27930__$1 = inst_27938;
var state_27975__$1 = (function (){var statearr_27989 = state_27975;
(statearr_27989[(8)] = inst_27929__$1);

(statearr_27989[(10)] = inst_27928__$1);

(statearr_27989[(14)] = inst_27937);

(statearr_27989[(11)] = inst_27927__$1);

(statearr_27989[(12)] = inst_27930__$1);

return statearr_27989;
})();
var statearr_27990_28022 = state_27975__$1;
(statearr_27990_28022[(2)] = null);

(statearr_27990_28022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (22))){
var state_27975__$1 = state_27975;
var statearr_27991_28023 = state_27975__$1;
(statearr_27991_28023[(2)] = null);

(statearr_27991_28023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (6))){
var inst_27916 = (state_27975[(13)]);
var inst_27925 = f.call(null,inst_27916);
var inst_27926 = cljs.core.seq.call(null,inst_27925);
var inst_27927 = inst_27926;
var inst_27928 = null;
var inst_27929 = (0);
var inst_27930 = (0);
var state_27975__$1 = (function (){var statearr_27992 = state_27975;
(statearr_27992[(8)] = inst_27929);

(statearr_27992[(10)] = inst_27928);

(statearr_27992[(11)] = inst_27927);

(statearr_27992[(12)] = inst_27930);

return statearr_27992;
})();
var statearr_27993_28024 = state_27975__$1;
(statearr_27993_28024[(2)] = null);

(statearr_27993_28024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (17))){
var inst_27941 = (state_27975[(7)]);
var inst_27945 = cljs.core.chunk_first.call(null,inst_27941);
var inst_27946 = cljs.core.chunk_rest.call(null,inst_27941);
var inst_27947 = cljs.core.count.call(null,inst_27945);
var inst_27927 = inst_27946;
var inst_27928 = inst_27945;
var inst_27929 = inst_27947;
var inst_27930 = (0);
var state_27975__$1 = (function (){var statearr_27994 = state_27975;
(statearr_27994[(8)] = inst_27929);

(statearr_27994[(10)] = inst_27928);

(statearr_27994[(11)] = inst_27927);

(statearr_27994[(12)] = inst_27930);

return statearr_27994;
})();
var statearr_27995_28025 = state_27975__$1;
(statearr_27995_28025[(2)] = null);

(statearr_27995_28025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (3))){
var inst_27973 = (state_27975[(2)]);
var state_27975__$1 = state_27975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27975__$1,inst_27973);
} else {
if((state_val_27976 === (12))){
var inst_27961 = (state_27975[(2)]);
var state_27975__$1 = state_27975;
var statearr_27996_28026 = state_27975__$1;
(statearr_27996_28026[(2)] = inst_27961);

(statearr_27996_28026[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (2))){
var state_27975__$1 = state_27975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27975__$1,(4),in$);
} else {
if((state_val_27976 === (23))){
var inst_27969 = (state_27975[(2)]);
var state_27975__$1 = state_27975;
var statearr_27997_28027 = state_27975__$1;
(statearr_27997_28027[(2)] = inst_27969);

(statearr_27997_28027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (19))){
var inst_27956 = (state_27975[(2)]);
var state_27975__$1 = state_27975;
var statearr_27998_28028 = state_27975__$1;
(statearr_27998_28028[(2)] = inst_27956);

(statearr_27998_28028[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (11))){
var inst_27927 = (state_27975[(11)]);
var inst_27941 = (state_27975[(7)]);
var inst_27941__$1 = cljs.core.seq.call(null,inst_27927);
var state_27975__$1 = (function (){var statearr_27999 = state_27975;
(statearr_27999[(7)] = inst_27941__$1);

return statearr_27999;
})();
if(inst_27941__$1){
var statearr_28000_28029 = state_27975__$1;
(statearr_28000_28029[(1)] = (14));

} else {
var statearr_28001_28030 = state_27975__$1;
(statearr_28001_28030[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (9))){
var inst_27963 = (state_27975[(2)]);
var inst_27964 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27975__$1 = (function (){var statearr_28002 = state_27975;
(statearr_28002[(15)] = inst_27963);

return statearr_28002;
})();
if(cljs.core.truth_(inst_27964)){
var statearr_28003_28031 = state_27975__$1;
(statearr_28003_28031[(1)] = (21));

} else {
var statearr_28004_28032 = state_27975__$1;
(statearr_28004_28032[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (5))){
var inst_27919 = cljs.core.async.close_BANG_.call(null,out);
var state_27975__$1 = state_27975;
var statearr_28005_28033 = state_27975__$1;
(statearr_28005_28033[(2)] = inst_27919);

(statearr_28005_28033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (14))){
var inst_27941 = (state_27975[(7)]);
var inst_27943 = cljs.core.chunked_seq_QMARK_.call(null,inst_27941);
var state_27975__$1 = state_27975;
if(inst_27943){
var statearr_28006_28034 = state_27975__$1;
(statearr_28006_28034[(1)] = (17));

} else {
var statearr_28007_28035 = state_27975__$1;
(statearr_28007_28035[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (16))){
var inst_27959 = (state_27975[(2)]);
var state_27975__$1 = state_27975;
var statearr_28008_28036 = state_27975__$1;
(statearr_28008_28036[(2)] = inst_27959);

(statearr_28008_28036[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (10))){
var inst_27928 = (state_27975[(10)]);
var inst_27930 = (state_27975[(12)]);
var inst_27935 = cljs.core._nth.call(null,inst_27928,inst_27930);
var state_27975__$1 = state_27975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27975__$1,(13),out,inst_27935);
} else {
if((state_val_27976 === (18))){
var inst_27941 = (state_27975[(7)]);
var inst_27950 = cljs.core.first.call(null,inst_27941);
var state_27975__$1 = state_27975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27975__$1,(20),out,inst_27950);
} else {
if((state_val_27976 === (8))){
var inst_27929 = (state_27975[(8)]);
var inst_27930 = (state_27975[(12)]);
var inst_27932 = (inst_27930 < inst_27929);
var inst_27933 = inst_27932;
var state_27975__$1 = state_27975;
if(cljs.core.truth_(inst_27933)){
var statearr_28009_28037 = state_27975__$1;
(statearr_28009_28037[(1)] = (10));

} else {
var statearr_28010_28038 = state_27975__$1;
(statearr_28010_28038[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__26252__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26252__auto____0 = (function (){
var statearr_28011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28011[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26252__auto__);

(statearr_28011[(1)] = (1));

return statearr_28011;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26252__auto____1 = (function (state_27975){
while(true){
var ret_value__26253__auto__ = (function (){try{while(true){
var result__26254__auto__ = switch__26251__auto__.call(null,state_27975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26254__auto__;
}
break;
}
}catch (e28012){if((e28012 instanceof Object)){
var ex__26255__auto__ = e28012;
var statearr_28013_28039 = state_27975;
(statearr_28013_28039[(5)] = ex__26255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28040 = state_27975;
state_27975 = G__28040;
continue;
} else {
return ret_value__26253__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26252__auto__ = function(state_27975){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26252__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26252__auto____1.call(this,state_27975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26252__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26252__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26252__auto__;
})()
})();
var state__26348__auto__ = (function (){var statearr_28014 = f__26347__auto__.call(null);
(statearr_28014[(6)] = c__26346__auto__);

return statearr_28014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26348__auto__);
}));

return c__26346__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28042 = arguments.length;
switch (G__28042) {
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
var G__28045 = arguments.length;
switch (G__28045) {
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
var G__28048 = arguments.length;
switch (G__28048) {
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
var c__26346__auto___28095 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26347__auto__ = (function (){var switch__26251__auto__ = (function (state_28072){
var state_val_28073 = (state_28072[(1)]);
if((state_val_28073 === (7))){
var inst_28067 = (state_28072[(2)]);
var state_28072__$1 = state_28072;
var statearr_28074_28096 = state_28072__$1;
(statearr_28074_28096[(2)] = inst_28067);

(statearr_28074_28096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28073 === (1))){
var inst_28049 = null;
var state_28072__$1 = (function (){var statearr_28075 = state_28072;
(statearr_28075[(7)] = inst_28049);

return statearr_28075;
})();
var statearr_28076_28097 = state_28072__$1;
(statearr_28076_28097[(2)] = null);

(statearr_28076_28097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28073 === (4))){
var inst_28052 = (state_28072[(8)]);
var inst_28052__$1 = (state_28072[(2)]);
var inst_28053 = (inst_28052__$1 == null);
var inst_28054 = cljs.core.not.call(null,inst_28053);
var state_28072__$1 = (function (){var statearr_28077 = state_28072;
(statearr_28077[(8)] = inst_28052__$1);

return statearr_28077;
})();
if(inst_28054){
var statearr_28078_28098 = state_28072__$1;
(statearr_28078_28098[(1)] = (5));

} else {
var statearr_28079_28099 = state_28072__$1;
(statearr_28079_28099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28073 === (6))){
var state_28072__$1 = state_28072;
var statearr_28080_28100 = state_28072__$1;
(statearr_28080_28100[(2)] = null);

(statearr_28080_28100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28073 === (3))){
var inst_28069 = (state_28072[(2)]);
var inst_28070 = cljs.core.async.close_BANG_.call(null,out);
var state_28072__$1 = (function (){var statearr_28081 = state_28072;
(statearr_28081[(9)] = inst_28069);

return statearr_28081;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28072__$1,inst_28070);
} else {
if((state_val_28073 === (2))){
var state_28072__$1 = state_28072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28072__$1,(4),ch);
} else {
if((state_val_28073 === (11))){
var inst_28052 = (state_28072[(8)]);
var inst_28061 = (state_28072[(2)]);
var inst_28049 = inst_28052;
var state_28072__$1 = (function (){var statearr_28082 = state_28072;
(statearr_28082[(10)] = inst_28061);

(statearr_28082[(7)] = inst_28049);

return statearr_28082;
})();
var statearr_28083_28101 = state_28072__$1;
(statearr_28083_28101[(2)] = null);

(statearr_28083_28101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28073 === (9))){
var inst_28052 = (state_28072[(8)]);
var state_28072__$1 = state_28072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28072__$1,(11),out,inst_28052);
} else {
if((state_val_28073 === (5))){
var inst_28052 = (state_28072[(8)]);
var inst_28049 = (state_28072[(7)]);
var inst_28056 = cljs.core._EQ_.call(null,inst_28052,inst_28049);
var state_28072__$1 = state_28072;
if(inst_28056){
var statearr_28085_28102 = state_28072__$1;
(statearr_28085_28102[(1)] = (8));

} else {
var statearr_28086_28103 = state_28072__$1;
(statearr_28086_28103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28073 === (10))){
var inst_28064 = (state_28072[(2)]);
var state_28072__$1 = state_28072;
var statearr_28087_28104 = state_28072__$1;
(statearr_28087_28104[(2)] = inst_28064);

(statearr_28087_28104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28073 === (8))){
var inst_28049 = (state_28072[(7)]);
var tmp28084 = inst_28049;
var inst_28049__$1 = tmp28084;
var state_28072__$1 = (function (){var statearr_28088 = state_28072;
(statearr_28088[(7)] = inst_28049__$1);

return statearr_28088;
})();
var statearr_28089_28105 = state_28072__$1;
(statearr_28089_28105[(2)] = null);

(statearr_28089_28105[(1)] = (2));


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
var cljs$core$async$state_machine__26252__auto__ = null;
var cljs$core$async$state_machine__26252__auto____0 = (function (){
var statearr_28090 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28090[(0)] = cljs$core$async$state_machine__26252__auto__);

(statearr_28090[(1)] = (1));

return statearr_28090;
});
var cljs$core$async$state_machine__26252__auto____1 = (function (state_28072){
while(true){
var ret_value__26253__auto__ = (function (){try{while(true){
var result__26254__auto__ = switch__26251__auto__.call(null,state_28072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26254__auto__;
}
break;
}
}catch (e28091){if((e28091 instanceof Object)){
var ex__26255__auto__ = e28091;
var statearr_28092_28106 = state_28072;
(statearr_28092_28106[(5)] = ex__26255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28107 = state_28072;
state_28072 = G__28107;
continue;
} else {
return ret_value__26253__auto__;
}
break;
}
});
cljs$core$async$state_machine__26252__auto__ = function(state_28072){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26252__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26252__auto____1.call(this,state_28072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26252__auto____0;
cljs$core$async$state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26252__auto____1;
return cljs$core$async$state_machine__26252__auto__;
})()
})();
var state__26348__auto__ = (function (){var statearr_28093 = f__26347__auto__.call(null);
(statearr_28093[(6)] = c__26346__auto___28095);

return statearr_28093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26348__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28109 = arguments.length;
switch (G__28109) {
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
var c__26346__auto___28175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26347__auto__ = (function (){var switch__26251__auto__ = (function (state_28147){
var state_val_28148 = (state_28147[(1)]);
if((state_val_28148 === (7))){
var inst_28143 = (state_28147[(2)]);
var state_28147__$1 = state_28147;
var statearr_28149_28176 = state_28147__$1;
(statearr_28149_28176[(2)] = inst_28143);

(statearr_28149_28176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28148 === (1))){
var inst_28110 = (new Array(n));
var inst_28111 = inst_28110;
var inst_28112 = (0);
var state_28147__$1 = (function (){var statearr_28150 = state_28147;
(statearr_28150[(7)] = inst_28111);

(statearr_28150[(8)] = inst_28112);

return statearr_28150;
})();
var statearr_28151_28177 = state_28147__$1;
(statearr_28151_28177[(2)] = null);

(statearr_28151_28177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28148 === (4))){
var inst_28115 = (state_28147[(9)]);
var inst_28115__$1 = (state_28147[(2)]);
var inst_28116 = (inst_28115__$1 == null);
var inst_28117 = cljs.core.not.call(null,inst_28116);
var state_28147__$1 = (function (){var statearr_28152 = state_28147;
(statearr_28152[(9)] = inst_28115__$1);

return statearr_28152;
})();
if(inst_28117){
var statearr_28153_28178 = state_28147__$1;
(statearr_28153_28178[(1)] = (5));

} else {
var statearr_28154_28179 = state_28147__$1;
(statearr_28154_28179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28148 === (15))){
var inst_28137 = (state_28147[(2)]);
var state_28147__$1 = state_28147;
var statearr_28155_28180 = state_28147__$1;
(statearr_28155_28180[(2)] = inst_28137);

(statearr_28155_28180[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28148 === (13))){
var state_28147__$1 = state_28147;
var statearr_28156_28181 = state_28147__$1;
(statearr_28156_28181[(2)] = null);

(statearr_28156_28181[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28148 === (6))){
var inst_28112 = (state_28147[(8)]);
var inst_28133 = (inst_28112 > (0));
var state_28147__$1 = state_28147;
if(cljs.core.truth_(inst_28133)){
var statearr_28157_28182 = state_28147__$1;
(statearr_28157_28182[(1)] = (12));

} else {
var statearr_28158_28183 = state_28147__$1;
(statearr_28158_28183[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28148 === (3))){
var inst_28145 = (state_28147[(2)]);
var state_28147__$1 = state_28147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28147__$1,inst_28145);
} else {
if((state_val_28148 === (12))){
var inst_28111 = (state_28147[(7)]);
var inst_28135 = cljs.core.vec.call(null,inst_28111);
var state_28147__$1 = state_28147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28147__$1,(15),out,inst_28135);
} else {
if((state_val_28148 === (2))){
var state_28147__$1 = state_28147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28147__$1,(4),ch);
} else {
if((state_val_28148 === (11))){
var inst_28127 = (state_28147[(2)]);
var inst_28128 = (new Array(n));
var inst_28111 = inst_28128;
var inst_28112 = (0);
var state_28147__$1 = (function (){var statearr_28159 = state_28147;
(statearr_28159[(7)] = inst_28111);

(statearr_28159[(8)] = inst_28112);

(statearr_28159[(10)] = inst_28127);

return statearr_28159;
})();
var statearr_28160_28184 = state_28147__$1;
(statearr_28160_28184[(2)] = null);

(statearr_28160_28184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28148 === (9))){
var inst_28111 = (state_28147[(7)]);
var inst_28125 = cljs.core.vec.call(null,inst_28111);
var state_28147__$1 = state_28147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28147__$1,(11),out,inst_28125);
} else {
if((state_val_28148 === (5))){
var inst_28111 = (state_28147[(7)]);
var inst_28112 = (state_28147[(8)]);
var inst_28120 = (state_28147[(11)]);
var inst_28115 = (state_28147[(9)]);
var inst_28119 = (inst_28111[inst_28112] = inst_28115);
var inst_28120__$1 = (inst_28112 + (1));
var inst_28121 = (inst_28120__$1 < n);
var state_28147__$1 = (function (){var statearr_28161 = state_28147;
(statearr_28161[(11)] = inst_28120__$1);

(statearr_28161[(12)] = inst_28119);

return statearr_28161;
})();
if(cljs.core.truth_(inst_28121)){
var statearr_28162_28185 = state_28147__$1;
(statearr_28162_28185[(1)] = (8));

} else {
var statearr_28163_28186 = state_28147__$1;
(statearr_28163_28186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28148 === (14))){
var inst_28140 = (state_28147[(2)]);
var inst_28141 = cljs.core.async.close_BANG_.call(null,out);
var state_28147__$1 = (function (){var statearr_28165 = state_28147;
(statearr_28165[(13)] = inst_28140);

return statearr_28165;
})();
var statearr_28166_28187 = state_28147__$1;
(statearr_28166_28187[(2)] = inst_28141);

(statearr_28166_28187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28148 === (10))){
var inst_28131 = (state_28147[(2)]);
var state_28147__$1 = state_28147;
var statearr_28167_28188 = state_28147__$1;
(statearr_28167_28188[(2)] = inst_28131);

(statearr_28167_28188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28148 === (8))){
var inst_28111 = (state_28147[(7)]);
var inst_28120 = (state_28147[(11)]);
var tmp28164 = inst_28111;
var inst_28111__$1 = tmp28164;
var inst_28112 = inst_28120;
var state_28147__$1 = (function (){var statearr_28168 = state_28147;
(statearr_28168[(7)] = inst_28111__$1);

(statearr_28168[(8)] = inst_28112);

return statearr_28168;
})();
var statearr_28169_28189 = state_28147__$1;
(statearr_28169_28189[(2)] = null);

(statearr_28169_28189[(1)] = (2));


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
var cljs$core$async$state_machine__26252__auto__ = null;
var cljs$core$async$state_machine__26252__auto____0 = (function (){
var statearr_28170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28170[(0)] = cljs$core$async$state_machine__26252__auto__);

(statearr_28170[(1)] = (1));

return statearr_28170;
});
var cljs$core$async$state_machine__26252__auto____1 = (function (state_28147){
while(true){
var ret_value__26253__auto__ = (function (){try{while(true){
var result__26254__auto__ = switch__26251__auto__.call(null,state_28147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26254__auto__;
}
break;
}
}catch (e28171){if((e28171 instanceof Object)){
var ex__26255__auto__ = e28171;
var statearr_28172_28190 = state_28147;
(statearr_28172_28190[(5)] = ex__26255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28191 = state_28147;
state_28147 = G__28191;
continue;
} else {
return ret_value__26253__auto__;
}
break;
}
});
cljs$core$async$state_machine__26252__auto__ = function(state_28147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26252__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26252__auto____1.call(this,state_28147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26252__auto____0;
cljs$core$async$state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26252__auto____1;
return cljs$core$async$state_machine__26252__auto__;
})()
})();
var state__26348__auto__ = (function (){var statearr_28173 = f__26347__auto__.call(null);
(statearr_28173[(6)] = c__26346__auto___28175);

return statearr_28173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26348__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28193 = arguments.length;
switch (G__28193) {
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
var c__26346__auto___28263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26347__auto__ = (function (){var switch__26251__auto__ = (function (state_28235){
var state_val_28236 = (state_28235[(1)]);
if((state_val_28236 === (7))){
var inst_28231 = (state_28235[(2)]);
var state_28235__$1 = state_28235;
var statearr_28237_28264 = state_28235__$1;
(statearr_28237_28264[(2)] = inst_28231);

(statearr_28237_28264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (1))){
var inst_28194 = [];
var inst_28195 = inst_28194;
var inst_28196 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28235__$1 = (function (){var statearr_28238 = state_28235;
(statearr_28238[(7)] = inst_28196);

(statearr_28238[(8)] = inst_28195);

return statearr_28238;
})();
var statearr_28239_28265 = state_28235__$1;
(statearr_28239_28265[(2)] = null);

(statearr_28239_28265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (4))){
var inst_28199 = (state_28235[(9)]);
var inst_28199__$1 = (state_28235[(2)]);
var inst_28200 = (inst_28199__$1 == null);
var inst_28201 = cljs.core.not.call(null,inst_28200);
var state_28235__$1 = (function (){var statearr_28240 = state_28235;
(statearr_28240[(9)] = inst_28199__$1);

return statearr_28240;
})();
if(inst_28201){
var statearr_28241_28266 = state_28235__$1;
(statearr_28241_28266[(1)] = (5));

} else {
var statearr_28242_28267 = state_28235__$1;
(statearr_28242_28267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (15))){
var inst_28225 = (state_28235[(2)]);
var state_28235__$1 = state_28235;
var statearr_28243_28268 = state_28235__$1;
(statearr_28243_28268[(2)] = inst_28225);

(statearr_28243_28268[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (13))){
var state_28235__$1 = state_28235;
var statearr_28244_28269 = state_28235__$1;
(statearr_28244_28269[(2)] = null);

(statearr_28244_28269[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (6))){
var inst_28195 = (state_28235[(8)]);
var inst_28220 = inst_28195.length;
var inst_28221 = (inst_28220 > (0));
var state_28235__$1 = state_28235;
if(cljs.core.truth_(inst_28221)){
var statearr_28245_28270 = state_28235__$1;
(statearr_28245_28270[(1)] = (12));

} else {
var statearr_28246_28271 = state_28235__$1;
(statearr_28246_28271[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (3))){
var inst_28233 = (state_28235[(2)]);
var state_28235__$1 = state_28235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28235__$1,inst_28233);
} else {
if((state_val_28236 === (12))){
var inst_28195 = (state_28235[(8)]);
var inst_28223 = cljs.core.vec.call(null,inst_28195);
var state_28235__$1 = state_28235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28235__$1,(15),out,inst_28223);
} else {
if((state_val_28236 === (2))){
var state_28235__$1 = state_28235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28235__$1,(4),ch);
} else {
if((state_val_28236 === (11))){
var inst_28199 = (state_28235[(9)]);
var inst_28203 = (state_28235[(10)]);
var inst_28213 = (state_28235[(2)]);
var inst_28214 = [];
var inst_28215 = inst_28214.push(inst_28199);
var inst_28195 = inst_28214;
var inst_28196 = inst_28203;
var state_28235__$1 = (function (){var statearr_28247 = state_28235;
(statearr_28247[(11)] = inst_28213);

(statearr_28247[(7)] = inst_28196);

(statearr_28247[(8)] = inst_28195);

(statearr_28247[(12)] = inst_28215);

return statearr_28247;
})();
var statearr_28248_28272 = state_28235__$1;
(statearr_28248_28272[(2)] = null);

(statearr_28248_28272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (9))){
var inst_28195 = (state_28235[(8)]);
var inst_28211 = cljs.core.vec.call(null,inst_28195);
var state_28235__$1 = state_28235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28235__$1,(11),out,inst_28211);
} else {
if((state_val_28236 === (5))){
var inst_28196 = (state_28235[(7)]);
var inst_28199 = (state_28235[(9)]);
var inst_28203 = (state_28235[(10)]);
var inst_28203__$1 = f.call(null,inst_28199);
var inst_28204 = cljs.core._EQ_.call(null,inst_28203__$1,inst_28196);
var inst_28205 = cljs.core.keyword_identical_QMARK_.call(null,inst_28196,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28206 = ((inst_28204) || (inst_28205));
var state_28235__$1 = (function (){var statearr_28249 = state_28235;
(statearr_28249[(10)] = inst_28203__$1);

return statearr_28249;
})();
if(cljs.core.truth_(inst_28206)){
var statearr_28250_28273 = state_28235__$1;
(statearr_28250_28273[(1)] = (8));

} else {
var statearr_28251_28274 = state_28235__$1;
(statearr_28251_28274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (14))){
var inst_28228 = (state_28235[(2)]);
var inst_28229 = cljs.core.async.close_BANG_.call(null,out);
var state_28235__$1 = (function (){var statearr_28253 = state_28235;
(statearr_28253[(13)] = inst_28228);

return statearr_28253;
})();
var statearr_28254_28275 = state_28235__$1;
(statearr_28254_28275[(2)] = inst_28229);

(statearr_28254_28275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (10))){
var inst_28218 = (state_28235[(2)]);
var state_28235__$1 = state_28235;
var statearr_28255_28276 = state_28235__$1;
(statearr_28255_28276[(2)] = inst_28218);

(statearr_28255_28276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (8))){
var inst_28199 = (state_28235[(9)]);
var inst_28195 = (state_28235[(8)]);
var inst_28203 = (state_28235[(10)]);
var inst_28208 = inst_28195.push(inst_28199);
var tmp28252 = inst_28195;
var inst_28195__$1 = tmp28252;
var inst_28196 = inst_28203;
var state_28235__$1 = (function (){var statearr_28256 = state_28235;
(statearr_28256[(7)] = inst_28196);

(statearr_28256[(8)] = inst_28195__$1);

(statearr_28256[(14)] = inst_28208);

return statearr_28256;
})();
var statearr_28257_28277 = state_28235__$1;
(statearr_28257_28277[(2)] = null);

(statearr_28257_28277[(1)] = (2));


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
var cljs$core$async$state_machine__26252__auto__ = null;
var cljs$core$async$state_machine__26252__auto____0 = (function (){
var statearr_28258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28258[(0)] = cljs$core$async$state_machine__26252__auto__);

(statearr_28258[(1)] = (1));

return statearr_28258;
});
var cljs$core$async$state_machine__26252__auto____1 = (function (state_28235){
while(true){
var ret_value__26253__auto__ = (function (){try{while(true){
var result__26254__auto__ = switch__26251__auto__.call(null,state_28235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26254__auto__;
}
break;
}
}catch (e28259){if((e28259 instanceof Object)){
var ex__26255__auto__ = e28259;
var statearr_28260_28278 = state_28235;
(statearr_28260_28278[(5)] = ex__26255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28279 = state_28235;
state_28235 = G__28279;
continue;
} else {
return ret_value__26253__auto__;
}
break;
}
});
cljs$core$async$state_machine__26252__auto__ = function(state_28235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26252__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26252__auto____1.call(this,state_28235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26252__auto____0;
cljs$core$async$state_machine__26252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26252__auto____1;
return cljs$core$async$state_machine__26252__auto__;
})()
})();
var state__26348__auto__ = (function (){var statearr_28261 = f__26347__auto__.call(null);
(statearr_28261[(6)] = c__26346__auto___28263);

return statearr_28261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26348__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1602351796148
