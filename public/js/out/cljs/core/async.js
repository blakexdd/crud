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
var G__30188 = arguments.length;
switch (G__30188) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30189 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30189 = (function (f,blockable,meta30190){
this.f = f;
this.blockable = blockable;
this.meta30190 = meta30190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30191,meta30190__$1){
var self__ = this;
var _30191__$1 = this;
return (new cljs.core.async.t_cljs$core$async30189(self__.f,self__.blockable,meta30190__$1));
}));

(cljs.core.async.t_cljs$core$async30189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30191){
var self__ = this;
var _30191__$1 = this;
return self__.meta30190;
}));

(cljs.core.async.t_cljs$core$async30189.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30189.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30189.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30189.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30189.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30190","meta30190",-1122924839,null)], null);
}));

(cljs.core.async.t_cljs$core$async30189.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30189.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30189");

(cljs.core.async.t_cljs$core$async30189.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async30189");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30189.
 */
cljs.core.async.__GT_t_cljs$core$async30189 = (function cljs$core$async$__GT_t_cljs$core$async30189(f__$1,blockable__$1,meta30190){
return (new cljs.core.async.t_cljs$core$async30189(f__$1,blockable__$1,meta30190));
});

}

return (new cljs.core.async.t_cljs$core$async30189(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30195 = arguments.length;
switch (G__30195) {
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
var G__30198 = arguments.length;
switch (G__30198) {
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
var G__30201 = arguments.length;
switch (G__30201) {
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
var val_30203 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30203);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_30203);
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
var G__30205 = arguments.length;
switch (G__30205) {
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
var n__4613__auto___30207 = n;
var x_30208 = (0);
while(true){
if((x_30208 < n__4613__auto___30207)){
(a[x_30208] = (0));

var G__30209 = (x_30208 + (1));
x_30208 = G__30209;
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

var G__30210 = (i + (1));
i = G__30210;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30211 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30211 = (function (flag,meta30212){
this.flag = flag;
this.meta30212 = meta30212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30213,meta30212__$1){
var self__ = this;
var _30213__$1 = this;
return (new cljs.core.async.t_cljs$core$async30211(self__.flag,meta30212__$1));
}));

(cljs.core.async.t_cljs$core$async30211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30213){
var self__ = this;
var _30213__$1 = this;
return self__.meta30212;
}));

(cljs.core.async.t_cljs$core$async30211.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30211.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async30211.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30211.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30211.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30212","meta30212",-1879936888,null)], null);
}));

(cljs.core.async.t_cljs$core$async30211.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30211.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30211");

(cljs.core.async.t_cljs$core$async30211.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async30211");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30211.
 */
cljs.core.async.__GT_t_cljs$core$async30211 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30211(flag__$1,meta30212){
return (new cljs.core.async.t_cljs$core$async30211(flag__$1,meta30212));
});

}

return (new cljs.core.async.t_cljs$core$async30211(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30214 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30214 = (function (flag,cb,meta30215){
this.flag = flag;
this.cb = cb;
this.meta30215 = meta30215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30216,meta30215__$1){
var self__ = this;
var _30216__$1 = this;
return (new cljs.core.async.t_cljs$core$async30214(self__.flag,self__.cb,meta30215__$1));
}));

(cljs.core.async.t_cljs$core$async30214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30216){
var self__ = this;
var _30216__$1 = this;
return self__.meta30215;
}));

(cljs.core.async.t_cljs$core$async30214.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30214.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async30214.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30214.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30214.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30215","meta30215",-1340494465,null)], null);
}));

(cljs.core.async.t_cljs$core$async30214.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30214.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30214");

(cljs.core.async.t_cljs$core$async30214.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async30214");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30214.
 */
cljs.core.async.__GT_t_cljs$core$async30214 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30214(flag__$1,cb__$1,meta30215){
return (new cljs.core.async.t_cljs$core$async30214(flag__$1,cb__$1,meta30215));
});

}

return (new cljs.core.async.t_cljs$core$async30214(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30217_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30217_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30218_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30218_SHARP_,port], null));
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
var G__30219 = (i + (1));
i = G__30219;
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
var len__4736__auto___30225 = arguments.length;
var i__4737__auto___30226 = (0);
while(true){
if((i__4737__auto___30226 < len__4736__auto___30225)){
args__4742__auto__.push((arguments[i__4737__auto___30226]));

var G__30227 = (i__4737__auto___30226 + (1));
i__4737__auto___30226 = G__30227;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30222){
var map__30223 = p__30222;
var map__30223__$1 = (((((!((map__30223 == null))))?(((((map__30223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30223):map__30223);
var opts = map__30223__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30220){
var G__30221 = cljs.core.first.call(null,seq30220);
var seq30220__$1 = cljs.core.next.call(null,seq30220);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30221,seq30220__$1);
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
var G__30229 = arguments.length;
switch (G__30229) {
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
var c__29917__auto___30275 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29918__auto__ = (function (){var switch__29900__auto__ = (function (state_30253){
var state_val_30254 = (state_30253[(1)]);
if((state_val_30254 === (7))){
var inst_30249 = (state_30253[(2)]);
var state_30253__$1 = state_30253;
var statearr_30255_30276 = state_30253__$1;
(statearr_30255_30276[(2)] = inst_30249);

(statearr_30255_30276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (1))){
var state_30253__$1 = state_30253;
var statearr_30256_30277 = state_30253__$1;
(statearr_30256_30277[(2)] = null);

(statearr_30256_30277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (4))){
var inst_30232 = (state_30253[(7)]);
var inst_30232__$1 = (state_30253[(2)]);
var inst_30233 = (inst_30232__$1 == null);
var state_30253__$1 = (function (){var statearr_30257 = state_30253;
(statearr_30257[(7)] = inst_30232__$1);

return statearr_30257;
})();
if(cljs.core.truth_(inst_30233)){
var statearr_30258_30278 = state_30253__$1;
(statearr_30258_30278[(1)] = (5));

} else {
var statearr_30259_30279 = state_30253__$1;
(statearr_30259_30279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (13))){
var state_30253__$1 = state_30253;
var statearr_30260_30280 = state_30253__$1;
(statearr_30260_30280[(2)] = null);

(statearr_30260_30280[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (6))){
var inst_30232 = (state_30253[(7)]);
var state_30253__$1 = state_30253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30253__$1,(11),to,inst_30232);
} else {
if((state_val_30254 === (3))){
var inst_30251 = (state_30253[(2)]);
var state_30253__$1 = state_30253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30253__$1,inst_30251);
} else {
if((state_val_30254 === (12))){
var state_30253__$1 = state_30253;
var statearr_30261_30281 = state_30253__$1;
(statearr_30261_30281[(2)] = null);

(statearr_30261_30281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (2))){
var state_30253__$1 = state_30253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30253__$1,(4),from);
} else {
if((state_val_30254 === (11))){
var inst_30242 = (state_30253[(2)]);
var state_30253__$1 = state_30253;
if(cljs.core.truth_(inst_30242)){
var statearr_30262_30282 = state_30253__$1;
(statearr_30262_30282[(1)] = (12));

} else {
var statearr_30263_30283 = state_30253__$1;
(statearr_30263_30283[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (9))){
var state_30253__$1 = state_30253;
var statearr_30264_30284 = state_30253__$1;
(statearr_30264_30284[(2)] = null);

(statearr_30264_30284[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (5))){
var state_30253__$1 = state_30253;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30265_30285 = state_30253__$1;
(statearr_30265_30285[(1)] = (8));

} else {
var statearr_30266_30286 = state_30253__$1;
(statearr_30266_30286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (14))){
var inst_30247 = (state_30253[(2)]);
var state_30253__$1 = state_30253;
var statearr_30267_30287 = state_30253__$1;
(statearr_30267_30287[(2)] = inst_30247);

(statearr_30267_30287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (10))){
var inst_30239 = (state_30253[(2)]);
var state_30253__$1 = state_30253;
var statearr_30268_30288 = state_30253__$1;
(statearr_30268_30288[(2)] = inst_30239);

(statearr_30268_30288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30254 === (8))){
var inst_30236 = cljs.core.async.close_BANG_.call(null,to);
var state_30253__$1 = state_30253;
var statearr_30269_30289 = state_30253__$1;
(statearr_30269_30289[(2)] = inst_30236);

(statearr_30269_30289[(1)] = (10));


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
var cljs$core$async$state_machine__29901__auto__ = null;
var cljs$core$async$state_machine__29901__auto____0 = (function (){
var statearr_30270 = [null,null,null,null,null,null,null,null];
(statearr_30270[(0)] = cljs$core$async$state_machine__29901__auto__);

(statearr_30270[(1)] = (1));

return statearr_30270;
});
var cljs$core$async$state_machine__29901__auto____1 = (function (state_30253){
while(true){
var ret_value__29902__auto__ = (function (){try{while(true){
var result__29903__auto__ = switch__29900__auto__.call(null,state_30253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29903__auto__;
}
break;
}
}catch (e30271){if((e30271 instanceof Object)){
var ex__29904__auto__ = e30271;
var statearr_30272_30290 = state_30253;
(statearr_30272_30290[(5)] = ex__29904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30291 = state_30253;
state_30253 = G__30291;
continue;
} else {
return ret_value__29902__auto__;
}
break;
}
});
cljs$core$async$state_machine__29901__auto__ = function(state_30253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29901__auto____1.call(this,state_30253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29901__auto____0;
cljs$core$async$state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29901__auto____1;
return cljs$core$async$state_machine__29901__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_30273 = f__29918__auto__.call(null);
(statearr_30273[(6)] = c__29917__auto___30275);

return statearr_30273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29919__auto__);
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
var process = (function (p__30292){
var vec__30293 = p__30292;
var v = cljs.core.nth.call(null,vec__30293,(0),null);
var p = cljs.core.nth.call(null,vec__30293,(1),null);
var job = vec__30293;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29917__auto___30464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29918__auto__ = (function (){var switch__29900__auto__ = (function (state_30300){
var state_val_30301 = (state_30300[(1)]);
if((state_val_30301 === (1))){
var state_30300__$1 = state_30300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30300__$1,(2),res,v);
} else {
if((state_val_30301 === (2))){
var inst_30297 = (state_30300[(2)]);
var inst_30298 = cljs.core.async.close_BANG_.call(null,res);
var state_30300__$1 = (function (){var statearr_30302 = state_30300;
(statearr_30302[(7)] = inst_30297);

return statearr_30302;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30300__$1,inst_30298);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29901__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29901__auto____0 = (function (){
var statearr_30303 = [null,null,null,null,null,null,null,null];
(statearr_30303[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29901__auto__);

(statearr_30303[(1)] = (1));

return statearr_30303;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29901__auto____1 = (function (state_30300){
while(true){
var ret_value__29902__auto__ = (function (){try{while(true){
var result__29903__auto__ = switch__29900__auto__.call(null,state_30300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29903__auto__;
}
break;
}
}catch (e30304){if((e30304 instanceof Object)){
var ex__29904__auto__ = e30304;
var statearr_30305_30465 = state_30300;
(statearr_30305_30465[(5)] = ex__29904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30466 = state_30300;
state_30300 = G__30466;
continue;
} else {
return ret_value__29902__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29901__auto__ = function(state_30300){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29901__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29901__auto____1.call(this,state_30300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29901__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29901__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29901__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_30306 = f__29918__auto__.call(null);
(statearr_30306[(6)] = c__29917__auto___30464);

return statearr_30306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29919__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__30307){
var vec__30308 = p__30307;
var v = cljs.core.nth.call(null,vec__30308,(0),null);
var p = cljs.core.nth.call(null,vec__30308,(1),null);
var job = vec__30308;
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
var n__4613__auto___30467 = n;
var __30468 = (0);
while(true){
if((__30468 < n__4613__auto___30467)){
var G__30311_30469 = type;
var G__30311_30470__$1 = (((G__30311_30469 instanceof cljs.core.Keyword))?G__30311_30469.fqn:null);
switch (G__30311_30470__$1) {
case "compute":
var c__29917__auto___30472 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30468,c__29917__auto___30472,G__30311_30469,G__30311_30470__$1,n__4613__auto___30467,jobs,results,process,async){
return (function (){
var f__29918__auto__ = (function (){var switch__29900__auto__ = ((function (__30468,c__29917__auto___30472,G__30311_30469,G__30311_30470__$1,n__4613__auto___30467,jobs,results,process,async){
return (function (state_30324){
var state_val_30325 = (state_30324[(1)]);
if((state_val_30325 === (1))){
var state_30324__$1 = state_30324;
var statearr_30326_30473 = state_30324__$1;
(statearr_30326_30473[(2)] = null);

(statearr_30326_30473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (2))){
var state_30324__$1 = state_30324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30324__$1,(4),jobs);
} else {
if((state_val_30325 === (3))){
var inst_30322 = (state_30324[(2)]);
var state_30324__$1 = state_30324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30324__$1,inst_30322);
} else {
if((state_val_30325 === (4))){
var inst_30314 = (state_30324[(2)]);
var inst_30315 = process.call(null,inst_30314);
var state_30324__$1 = state_30324;
if(cljs.core.truth_(inst_30315)){
var statearr_30327_30474 = state_30324__$1;
(statearr_30327_30474[(1)] = (5));

} else {
var statearr_30328_30475 = state_30324__$1;
(statearr_30328_30475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (5))){
var state_30324__$1 = state_30324;
var statearr_30329_30476 = state_30324__$1;
(statearr_30329_30476[(2)] = null);

(statearr_30329_30476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (6))){
var state_30324__$1 = state_30324;
var statearr_30330_30477 = state_30324__$1;
(statearr_30330_30477[(2)] = null);

(statearr_30330_30477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (7))){
var inst_30320 = (state_30324[(2)]);
var state_30324__$1 = state_30324;
var statearr_30331_30478 = state_30324__$1;
(statearr_30331_30478[(2)] = inst_30320);

(statearr_30331_30478[(1)] = (3));


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
});})(__30468,c__29917__auto___30472,G__30311_30469,G__30311_30470__$1,n__4613__auto___30467,jobs,results,process,async))
;
return ((function (__30468,switch__29900__auto__,c__29917__auto___30472,G__30311_30469,G__30311_30470__$1,n__4613__auto___30467,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29901__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29901__auto____0 = (function (){
var statearr_30332 = [null,null,null,null,null,null,null];
(statearr_30332[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29901__auto__);

(statearr_30332[(1)] = (1));

return statearr_30332;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29901__auto____1 = (function (state_30324){
while(true){
var ret_value__29902__auto__ = (function (){try{while(true){
var result__29903__auto__ = switch__29900__auto__.call(null,state_30324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29903__auto__;
}
break;
}
}catch (e30333){if((e30333 instanceof Object)){
var ex__29904__auto__ = e30333;
var statearr_30334_30479 = state_30324;
(statearr_30334_30479[(5)] = ex__29904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30480 = state_30324;
state_30324 = G__30480;
continue;
} else {
return ret_value__29902__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29901__auto__ = function(state_30324){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29901__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29901__auto____1.call(this,state_30324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29901__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29901__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29901__auto__;
})()
;})(__30468,switch__29900__auto__,c__29917__auto___30472,G__30311_30469,G__30311_30470__$1,n__4613__auto___30467,jobs,results,process,async))
})();
var state__29919__auto__ = (function (){var statearr_30335 = f__29918__auto__.call(null);
(statearr_30335[(6)] = c__29917__auto___30472);

return statearr_30335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29919__auto__);
});})(__30468,c__29917__auto___30472,G__30311_30469,G__30311_30470__$1,n__4613__auto___30467,jobs,results,process,async))
);


break;
case "async":
var c__29917__auto___30481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30468,c__29917__auto___30481,G__30311_30469,G__30311_30470__$1,n__4613__auto___30467,jobs,results,process,async){
return (function (){
var f__29918__auto__ = (function (){var switch__29900__auto__ = ((function (__30468,c__29917__auto___30481,G__30311_30469,G__30311_30470__$1,n__4613__auto___30467,jobs,results,process,async){
return (function (state_30348){
var state_val_30349 = (state_30348[(1)]);
if((state_val_30349 === (1))){
var state_30348__$1 = state_30348;
var statearr_30350_30482 = state_30348__$1;
(statearr_30350_30482[(2)] = null);

(statearr_30350_30482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30349 === (2))){
var state_30348__$1 = state_30348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30348__$1,(4),jobs);
} else {
if((state_val_30349 === (3))){
var inst_30346 = (state_30348[(2)]);
var state_30348__$1 = state_30348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30348__$1,inst_30346);
} else {
if((state_val_30349 === (4))){
var inst_30338 = (state_30348[(2)]);
var inst_30339 = async.call(null,inst_30338);
var state_30348__$1 = state_30348;
if(cljs.core.truth_(inst_30339)){
var statearr_30351_30483 = state_30348__$1;
(statearr_30351_30483[(1)] = (5));

} else {
var statearr_30352_30484 = state_30348__$1;
(statearr_30352_30484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30349 === (5))){
var state_30348__$1 = state_30348;
var statearr_30353_30485 = state_30348__$1;
(statearr_30353_30485[(2)] = null);

(statearr_30353_30485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30349 === (6))){
var state_30348__$1 = state_30348;
var statearr_30354_30486 = state_30348__$1;
(statearr_30354_30486[(2)] = null);

(statearr_30354_30486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30349 === (7))){
var inst_30344 = (state_30348[(2)]);
var state_30348__$1 = state_30348;
var statearr_30355_30487 = state_30348__$1;
(statearr_30355_30487[(2)] = inst_30344);

(statearr_30355_30487[(1)] = (3));


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
});})(__30468,c__29917__auto___30481,G__30311_30469,G__30311_30470__$1,n__4613__auto___30467,jobs,results,process,async))
;
return ((function (__30468,switch__29900__auto__,c__29917__auto___30481,G__30311_30469,G__30311_30470__$1,n__4613__auto___30467,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29901__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29901__auto____0 = (function (){
var statearr_30356 = [null,null,null,null,null,null,null];
(statearr_30356[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29901__auto__);

(statearr_30356[(1)] = (1));

return statearr_30356;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29901__auto____1 = (function (state_30348){
while(true){
var ret_value__29902__auto__ = (function (){try{while(true){
var result__29903__auto__ = switch__29900__auto__.call(null,state_30348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29903__auto__;
}
break;
}
}catch (e30357){if((e30357 instanceof Object)){
var ex__29904__auto__ = e30357;
var statearr_30358_30488 = state_30348;
(statearr_30358_30488[(5)] = ex__29904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30489 = state_30348;
state_30348 = G__30489;
continue;
} else {
return ret_value__29902__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29901__auto__ = function(state_30348){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29901__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29901__auto____1.call(this,state_30348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29901__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29901__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29901__auto__;
})()
;})(__30468,switch__29900__auto__,c__29917__auto___30481,G__30311_30469,G__30311_30470__$1,n__4613__auto___30467,jobs,results,process,async))
})();
var state__29919__auto__ = (function (){var statearr_30359 = f__29918__auto__.call(null);
(statearr_30359[(6)] = c__29917__auto___30481);

return statearr_30359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29919__auto__);
});})(__30468,c__29917__auto___30481,G__30311_30469,G__30311_30470__$1,n__4613__auto___30467,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30311_30470__$1)].join('')));

}

var G__30490 = (__30468 + (1));
__30468 = G__30490;
continue;
} else {
}
break;
}

var c__29917__auto___30491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29918__auto__ = (function (){var switch__29900__auto__ = (function (state_30381){
var state_val_30382 = (state_30381[(1)]);
if((state_val_30382 === (7))){
var inst_30377 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
var statearr_30383_30492 = state_30381__$1;
(statearr_30383_30492[(2)] = inst_30377);

(statearr_30383_30492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (1))){
var state_30381__$1 = state_30381;
var statearr_30384_30493 = state_30381__$1;
(statearr_30384_30493[(2)] = null);

(statearr_30384_30493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (4))){
var inst_30362 = (state_30381[(7)]);
var inst_30362__$1 = (state_30381[(2)]);
var inst_30363 = (inst_30362__$1 == null);
var state_30381__$1 = (function (){var statearr_30385 = state_30381;
(statearr_30385[(7)] = inst_30362__$1);

return statearr_30385;
})();
if(cljs.core.truth_(inst_30363)){
var statearr_30386_30494 = state_30381__$1;
(statearr_30386_30494[(1)] = (5));

} else {
var statearr_30387_30495 = state_30381__$1;
(statearr_30387_30495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (6))){
var inst_30362 = (state_30381[(7)]);
var inst_30367 = (state_30381[(8)]);
var inst_30367__$1 = cljs.core.async.chan.call(null,(1));
var inst_30368 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30369 = [inst_30362,inst_30367__$1];
var inst_30370 = (new cljs.core.PersistentVector(null,2,(5),inst_30368,inst_30369,null));
var state_30381__$1 = (function (){var statearr_30388 = state_30381;
(statearr_30388[(8)] = inst_30367__$1);

return statearr_30388;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30381__$1,(8),jobs,inst_30370);
} else {
if((state_val_30382 === (3))){
var inst_30379 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30381__$1,inst_30379);
} else {
if((state_val_30382 === (2))){
var state_30381__$1 = state_30381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30381__$1,(4),from);
} else {
if((state_val_30382 === (9))){
var inst_30374 = (state_30381[(2)]);
var state_30381__$1 = (function (){var statearr_30389 = state_30381;
(statearr_30389[(9)] = inst_30374);

return statearr_30389;
})();
var statearr_30390_30496 = state_30381__$1;
(statearr_30390_30496[(2)] = null);

(statearr_30390_30496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (5))){
var inst_30365 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30381__$1 = state_30381;
var statearr_30391_30497 = state_30381__$1;
(statearr_30391_30497[(2)] = inst_30365);

(statearr_30391_30497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (8))){
var inst_30367 = (state_30381[(8)]);
var inst_30372 = (state_30381[(2)]);
var state_30381__$1 = (function (){var statearr_30392 = state_30381;
(statearr_30392[(10)] = inst_30372);

return statearr_30392;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30381__$1,(9),results,inst_30367);
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
var cljs$core$async$pipeline_STAR__$_state_machine__29901__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29901__auto____0 = (function (){
var statearr_30393 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30393[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29901__auto__);

(statearr_30393[(1)] = (1));

return statearr_30393;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29901__auto____1 = (function (state_30381){
while(true){
var ret_value__29902__auto__ = (function (){try{while(true){
var result__29903__auto__ = switch__29900__auto__.call(null,state_30381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29903__auto__;
}
break;
}
}catch (e30394){if((e30394 instanceof Object)){
var ex__29904__auto__ = e30394;
var statearr_30395_30498 = state_30381;
(statearr_30395_30498[(5)] = ex__29904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30499 = state_30381;
state_30381 = G__30499;
continue;
} else {
return ret_value__29902__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29901__auto__ = function(state_30381){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29901__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29901__auto____1.call(this,state_30381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29901__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29901__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29901__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_30396 = f__29918__auto__.call(null);
(statearr_30396[(6)] = c__29917__auto___30491);

return statearr_30396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29919__auto__);
}));


var c__29917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29918__auto__ = (function (){var switch__29900__auto__ = (function (state_30434){
var state_val_30435 = (state_30434[(1)]);
if((state_val_30435 === (7))){
var inst_30430 = (state_30434[(2)]);
var state_30434__$1 = state_30434;
var statearr_30436_30500 = state_30434__$1;
(statearr_30436_30500[(2)] = inst_30430);

(statearr_30436_30500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (20))){
var state_30434__$1 = state_30434;
var statearr_30437_30501 = state_30434__$1;
(statearr_30437_30501[(2)] = null);

(statearr_30437_30501[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (1))){
var state_30434__$1 = state_30434;
var statearr_30438_30502 = state_30434__$1;
(statearr_30438_30502[(2)] = null);

(statearr_30438_30502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (4))){
var inst_30399 = (state_30434[(7)]);
var inst_30399__$1 = (state_30434[(2)]);
var inst_30400 = (inst_30399__$1 == null);
var state_30434__$1 = (function (){var statearr_30439 = state_30434;
(statearr_30439[(7)] = inst_30399__$1);

return statearr_30439;
})();
if(cljs.core.truth_(inst_30400)){
var statearr_30440_30503 = state_30434__$1;
(statearr_30440_30503[(1)] = (5));

} else {
var statearr_30441_30504 = state_30434__$1;
(statearr_30441_30504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (15))){
var inst_30412 = (state_30434[(8)]);
var state_30434__$1 = state_30434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30434__$1,(18),to,inst_30412);
} else {
if((state_val_30435 === (21))){
var inst_30425 = (state_30434[(2)]);
var state_30434__$1 = state_30434;
var statearr_30442_30505 = state_30434__$1;
(statearr_30442_30505[(2)] = inst_30425);

(statearr_30442_30505[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (13))){
var inst_30427 = (state_30434[(2)]);
var state_30434__$1 = (function (){var statearr_30443 = state_30434;
(statearr_30443[(9)] = inst_30427);

return statearr_30443;
})();
var statearr_30444_30506 = state_30434__$1;
(statearr_30444_30506[(2)] = null);

(statearr_30444_30506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (6))){
var inst_30399 = (state_30434[(7)]);
var state_30434__$1 = state_30434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30434__$1,(11),inst_30399);
} else {
if((state_val_30435 === (17))){
var inst_30420 = (state_30434[(2)]);
var state_30434__$1 = state_30434;
if(cljs.core.truth_(inst_30420)){
var statearr_30445_30507 = state_30434__$1;
(statearr_30445_30507[(1)] = (19));

} else {
var statearr_30446_30508 = state_30434__$1;
(statearr_30446_30508[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (3))){
var inst_30432 = (state_30434[(2)]);
var state_30434__$1 = state_30434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30434__$1,inst_30432);
} else {
if((state_val_30435 === (12))){
var inst_30409 = (state_30434[(10)]);
var state_30434__$1 = state_30434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30434__$1,(14),inst_30409);
} else {
if((state_val_30435 === (2))){
var state_30434__$1 = state_30434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30434__$1,(4),results);
} else {
if((state_val_30435 === (19))){
var state_30434__$1 = state_30434;
var statearr_30447_30509 = state_30434__$1;
(statearr_30447_30509[(2)] = null);

(statearr_30447_30509[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (11))){
var inst_30409 = (state_30434[(2)]);
var state_30434__$1 = (function (){var statearr_30448 = state_30434;
(statearr_30448[(10)] = inst_30409);

return statearr_30448;
})();
var statearr_30449_30510 = state_30434__$1;
(statearr_30449_30510[(2)] = null);

(statearr_30449_30510[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (9))){
var state_30434__$1 = state_30434;
var statearr_30450_30511 = state_30434__$1;
(statearr_30450_30511[(2)] = null);

(statearr_30450_30511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (5))){
var state_30434__$1 = state_30434;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30451_30512 = state_30434__$1;
(statearr_30451_30512[(1)] = (8));

} else {
var statearr_30452_30513 = state_30434__$1;
(statearr_30452_30513[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (14))){
var inst_30412 = (state_30434[(8)]);
var inst_30412__$1 = (state_30434[(2)]);
var inst_30413 = (inst_30412__$1 == null);
var inst_30414 = cljs.core.not.call(null,inst_30413);
var state_30434__$1 = (function (){var statearr_30453 = state_30434;
(statearr_30453[(8)] = inst_30412__$1);

return statearr_30453;
})();
if(inst_30414){
var statearr_30454_30514 = state_30434__$1;
(statearr_30454_30514[(1)] = (15));

} else {
var statearr_30455_30515 = state_30434__$1;
(statearr_30455_30515[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (16))){
var state_30434__$1 = state_30434;
var statearr_30456_30516 = state_30434__$1;
(statearr_30456_30516[(2)] = false);

(statearr_30456_30516[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (10))){
var inst_30406 = (state_30434[(2)]);
var state_30434__$1 = state_30434;
var statearr_30457_30517 = state_30434__$1;
(statearr_30457_30517[(2)] = inst_30406);

(statearr_30457_30517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (18))){
var inst_30417 = (state_30434[(2)]);
var state_30434__$1 = state_30434;
var statearr_30458_30518 = state_30434__$1;
(statearr_30458_30518[(2)] = inst_30417);

(statearr_30458_30518[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (8))){
var inst_30403 = cljs.core.async.close_BANG_.call(null,to);
var state_30434__$1 = state_30434;
var statearr_30459_30519 = state_30434__$1;
(statearr_30459_30519[(2)] = inst_30403);

(statearr_30459_30519[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__29901__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29901__auto____0 = (function (){
var statearr_30460 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30460[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29901__auto__);

(statearr_30460[(1)] = (1));

return statearr_30460;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29901__auto____1 = (function (state_30434){
while(true){
var ret_value__29902__auto__ = (function (){try{while(true){
var result__29903__auto__ = switch__29900__auto__.call(null,state_30434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29903__auto__;
}
break;
}
}catch (e30461){if((e30461 instanceof Object)){
var ex__29904__auto__ = e30461;
var statearr_30462_30520 = state_30434;
(statearr_30462_30520[(5)] = ex__29904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30521 = state_30434;
state_30434 = G__30521;
continue;
} else {
return ret_value__29902__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29901__auto__ = function(state_30434){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29901__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29901__auto____1.call(this,state_30434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29901__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29901__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29901__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_30463 = f__29918__auto__.call(null);
(statearr_30463[(6)] = c__29917__auto__);

return statearr_30463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29919__auto__);
}));

return c__29917__auto__;
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
var G__30523 = arguments.length;
switch (G__30523) {
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
var G__30526 = arguments.length;
switch (G__30526) {
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
var G__30529 = arguments.length;
switch (G__30529) {
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
var c__29917__auto___30578 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29918__auto__ = (function (){var switch__29900__auto__ = (function (state_30555){
var state_val_30556 = (state_30555[(1)]);
if((state_val_30556 === (7))){
var inst_30551 = (state_30555[(2)]);
var state_30555__$1 = state_30555;
var statearr_30557_30579 = state_30555__$1;
(statearr_30557_30579[(2)] = inst_30551);

(statearr_30557_30579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (1))){
var state_30555__$1 = state_30555;
var statearr_30558_30580 = state_30555__$1;
(statearr_30558_30580[(2)] = null);

(statearr_30558_30580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (4))){
var inst_30532 = (state_30555[(7)]);
var inst_30532__$1 = (state_30555[(2)]);
var inst_30533 = (inst_30532__$1 == null);
var state_30555__$1 = (function (){var statearr_30559 = state_30555;
(statearr_30559[(7)] = inst_30532__$1);

return statearr_30559;
})();
if(cljs.core.truth_(inst_30533)){
var statearr_30560_30581 = state_30555__$1;
(statearr_30560_30581[(1)] = (5));

} else {
var statearr_30561_30582 = state_30555__$1;
(statearr_30561_30582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (13))){
var state_30555__$1 = state_30555;
var statearr_30562_30583 = state_30555__$1;
(statearr_30562_30583[(2)] = null);

(statearr_30562_30583[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (6))){
var inst_30532 = (state_30555[(7)]);
var inst_30538 = p.call(null,inst_30532);
var state_30555__$1 = state_30555;
if(cljs.core.truth_(inst_30538)){
var statearr_30563_30584 = state_30555__$1;
(statearr_30563_30584[(1)] = (9));

} else {
var statearr_30564_30585 = state_30555__$1;
(statearr_30564_30585[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (3))){
var inst_30553 = (state_30555[(2)]);
var state_30555__$1 = state_30555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30555__$1,inst_30553);
} else {
if((state_val_30556 === (12))){
var state_30555__$1 = state_30555;
var statearr_30565_30586 = state_30555__$1;
(statearr_30565_30586[(2)] = null);

(statearr_30565_30586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (2))){
var state_30555__$1 = state_30555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30555__$1,(4),ch);
} else {
if((state_val_30556 === (11))){
var inst_30532 = (state_30555[(7)]);
var inst_30542 = (state_30555[(2)]);
var state_30555__$1 = state_30555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30555__$1,(8),inst_30542,inst_30532);
} else {
if((state_val_30556 === (9))){
var state_30555__$1 = state_30555;
var statearr_30566_30587 = state_30555__$1;
(statearr_30566_30587[(2)] = tc);

(statearr_30566_30587[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (5))){
var inst_30535 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30536 = cljs.core.async.close_BANG_.call(null,fc);
var state_30555__$1 = (function (){var statearr_30567 = state_30555;
(statearr_30567[(8)] = inst_30535);

return statearr_30567;
})();
var statearr_30568_30588 = state_30555__$1;
(statearr_30568_30588[(2)] = inst_30536);

(statearr_30568_30588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (14))){
var inst_30549 = (state_30555[(2)]);
var state_30555__$1 = state_30555;
var statearr_30569_30589 = state_30555__$1;
(statearr_30569_30589[(2)] = inst_30549);

(statearr_30569_30589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (10))){
var state_30555__$1 = state_30555;
var statearr_30570_30590 = state_30555__$1;
(statearr_30570_30590[(2)] = fc);

(statearr_30570_30590[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (8))){
var inst_30544 = (state_30555[(2)]);
var state_30555__$1 = state_30555;
if(cljs.core.truth_(inst_30544)){
var statearr_30571_30591 = state_30555__$1;
(statearr_30571_30591[(1)] = (12));

} else {
var statearr_30572_30592 = state_30555__$1;
(statearr_30572_30592[(1)] = (13));

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
var cljs$core$async$state_machine__29901__auto__ = null;
var cljs$core$async$state_machine__29901__auto____0 = (function (){
var statearr_30573 = [null,null,null,null,null,null,null,null,null];
(statearr_30573[(0)] = cljs$core$async$state_machine__29901__auto__);

(statearr_30573[(1)] = (1));

return statearr_30573;
});
var cljs$core$async$state_machine__29901__auto____1 = (function (state_30555){
while(true){
var ret_value__29902__auto__ = (function (){try{while(true){
var result__29903__auto__ = switch__29900__auto__.call(null,state_30555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29903__auto__;
}
break;
}
}catch (e30574){if((e30574 instanceof Object)){
var ex__29904__auto__ = e30574;
var statearr_30575_30593 = state_30555;
(statearr_30575_30593[(5)] = ex__29904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30594 = state_30555;
state_30555 = G__30594;
continue;
} else {
return ret_value__29902__auto__;
}
break;
}
});
cljs$core$async$state_machine__29901__auto__ = function(state_30555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29901__auto____1.call(this,state_30555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29901__auto____0;
cljs$core$async$state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29901__auto____1;
return cljs$core$async$state_machine__29901__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_30576 = f__29918__auto__.call(null);
(statearr_30576[(6)] = c__29917__auto___30578);

return statearr_30576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29919__auto__);
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
var c__29917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29918__auto__ = (function (){var switch__29900__auto__ = (function (state_30615){
var state_val_30616 = (state_30615[(1)]);
if((state_val_30616 === (7))){
var inst_30611 = (state_30615[(2)]);
var state_30615__$1 = state_30615;
var statearr_30617_30635 = state_30615__$1;
(statearr_30617_30635[(2)] = inst_30611);

(statearr_30617_30635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (1))){
var inst_30595 = init;
var state_30615__$1 = (function (){var statearr_30618 = state_30615;
(statearr_30618[(7)] = inst_30595);

return statearr_30618;
})();
var statearr_30619_30636 = state_30615__$1;
(statearr_30619_30636[(2)] = null);

(statearr_30619_30636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (4))){
var inst_30598 = (state_30615[(8)]);
var inst_30598__$1 = (state_30615[(2)]);
var inst_30599 = (inst_30598__$1 == null);
var state_30615__$1 = (function (){var statearr_30620 = state_30615;
(statearr_30620[(8)] = inst_30598__$1);

return statearr_30620;
})();
if(cljs.core.truth_(inst_30599)){
var statearr_30621_30637 = state_30615__$1;
(statearr_30621_30637[(1)] = (5));

} else {
var statearr_30622_30638 = state_30615__$1;
(statearr_30622_30638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (6))){
var inst_30598 = (state_30615[(8)]);
var inst_30602 = (state_30615[(9)]);
var inst_30595 = (state_30615[(7)]);
var inst_30602__$1 = f.call(null,inst_30595,inst_30598);
var inst_30603 = cljs.core.reduced_QMARK_.call(null,inst_30602__$1);
var state_30615__$1 = (function (){var statearr_30623 = state_30615;
(statearr_30623[(9)] = inst_30602__$1);

return statearr_30623;
})();
if(inst_30603){
var statearr_30624_30639 = state_30615__$1;
(statearr_30624_30639[(1)] = (8));

} else {
var statearr_30625_30640 = state_30615__$1;
(statearr_30625_30640[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (3))){
var inst_30613 = (state_30615[(2)]);
var state_30615__$1 = state_30615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30615__$1,inst_30613);
} else {
if((state_val_30616 === (2))){
var state_30615__$1 = state_30615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30615__$1,(4),ch);
} else {
if((state_val_30616 === (9))){
var inst_30602 = (state_30615[(9)]);
var inst_30595 = inst_30602;
var state_30615__$1 = (function (){var statearr_30626 = state_30615;
(statearr_30626[(7)] = inst_30595);

return statearr_30626;
})();
var statearr_30627_30641 = state_30615__$1;
(statearr_30627_30641[(2)] = null);

(statearr_30627_30641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (5))){
var inst_30595 = (state_30615[(7)]);
var state_30615__$1 = state_30615;
var statearr_30628_30642 = state_30615__$1;
(statearr_30628_30642[(2)] = inst_30595);

(statearr_30628_30642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (10))){
var inst_30609 = (state_30615[(2)]);
var state_30615__$1 = state_30615;
var statearr_30629_30643 = state_30615__$1;
(statearr_30629_30643[(2)] = inst_30609);

(statearr_30629_30643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (8))){
var inst_30602 = (state_30615[(9)]);
var inst_30605 = cljs.core.deref.call(null,inst_30602);
var state_30615__$1 = state_30615;
var statearr_30630_30644 = state_30615__$1;
(statearr_30630_30644[(2)] = inst_30605);

(statearr_30630_30644[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__29901__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29901__auto____0 = (function (){
var statearr_30631 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30631[(0)] = cljs$core$async$reduce_$_state_machine__29901__auto__);

(statearr_30631[(1)] = (1));

return statearr_30631;
});
var cljs$core$async$reduce_$_state_machine__29901__auto____1 = (function (state_30615){
while(true){
var ret_value__29902__auto__ = (function (){try{while(true){
var result__29903__auto__ = switch__29900__auto__.call(null,state_30615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29903__auto__;
}
break;
}
}catch (e30632){if((e30632 instanceof Object)){
var ex__29904__auto__ = e30632;
var statearr_30633_30645 = state_30615;
(statearr_30633_30645[(5)] = ex__29904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30646 = state_30615;
state_30615 = G__30646;
continue;
} else {
return ret_value__29902__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29901__auto__ = function(state_30615){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29901__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29901__auto____1.call(this,state_30615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29901__auto____0;
cljs$core$async$reduce_$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29901__auto____1;
return cljs$core$async$reduce_$_state_machine__29901__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_30634 = f__29918__auto__.call(null);
(statearr_30634[(6)] = c__29917__auto__);

return statearr_30634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29919__auto__);
}));

return c__29917__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29918__auto__ = (function (){var switch__29900__auto__ = (function (state_30652){
var state_val_30653 = (state_30652[(1)]);
if((state_val_30653 === (1))){
var inst_30647 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_30652__$1 = state_30652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30652__$1,(2),inst_30647);
} else {
if((state_val_30653 === (2))){
var inst_30649 = (state_30652[(2)]);
var inst_30650 = f__$1.call(null,inst_30649);
var state_30652__$1 = state_30652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30652__$1,inst_30650);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29901__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29901__auto____0 = (function (){
var statearr_30654 = [null,null,null,null,null,null,null];
(statearr_30654[(0)] = cljs$core$async$transduce_$_state_machine__29901__auto__);

(statearr_30654[(1)] = (1));

return statearr_30654;
});
var cljs$core$async$transduce_$_state_machine__29901__auto____1 = (function (state_30652){
while(true){
var ret_value__29902__auto__ = (function (){try{while(true){
var result__29903__auto__ = switch__29900__auto__.call(null,state_30652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29903__auto__;
}
break;
}
}catch (e30655){if((e30655 instanceof Object)){
var ex__29904__auto__ = e30655;
var statearr_30656_30658 = state_30652;
(statearr_30656_30658[(5)] = ex__29904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30659 = state_30652;
state_30652 = G__30659;
continue;
} else {
return ret_value__29902__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29901__auto__ = function(state_30652){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29901__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29901__auto____1.call(this,state_30652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29901__auto____0;
cljs$core$async$transduce_$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29901__auto____1;
return cljs$core$async$transduce_$_state_machine__29901__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_30657 = f__29918__auto__.call(null);
(statearr_30657[(6)] = c__29917__auto__);

return statearr_30657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29919__auto__);
}));

return c__29917__auto__;
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
var G__30661 = arguments.length;
switch (G__30661) {
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
var c__29917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29918__auto__ = (function (){var switch__29900__auto__ = (function (state_30686){
var state_val_30687 = (state_30686[(1)]);
if((state_val_30687 === (7))){
var inst_30668 = (state_30686[(2)]);
var state_30686__$1 = state_30686;
var statearr_30688_30709 = state_30686__$1;
(statearr_30688_30709[(2)] = inst_30668);

(statearr_30688_30709[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (1))){
var inst_30662 = cljs.core.seq.call(null,coll);
var inst_30663 = inst_30662;
var state_30686__$1 = (function (){var statearr_30689 = state_30686;
(statearr_30689[(7)] = inst_30663);

return statearr_30689;
})();
var statearr_30690_30710 = state_30686__$1;
(statearr_30690_30710[(2)] = null);

(statearr_30690_30710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (4))){
var inst_30663 = (state_30686[(7)]);
var inst_30666 = cljs.core.first.call(null,inst_30663);
var state_30686__$1 = state_30686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30686__$1,(7),ch,inst_30666);
} else {
if((state_val_30687 === (13))){
var inst_30680 = (state_30686[(2)]);
var state_30686__$1 = state_30686;
var statearr_30691_30711 = state_30686__$1;
(statearr_30691_30711[(2)] = inst_30680);

(statearr_30691_30711[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (6))){
var inst_30671 = (state_30686[(2)]);
var state_30686__$1 = state_30686;
if(cljs.core.truth_(inst_30671)){
var statearr_30692_30712 = state_30686__$1;
(statearr_30692_30712[(1)] = (8));

} else {
var statearr_30693_30713 = state_30686__$1;
(statearr_30693_30713[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (3))){
var inst_30684 = (state_30686[(2)]);
var state_30686__$1 = state_30686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30686__$1,inst_30684);
} else {
if((state_val_30687 === (12))){
var state_30686__$1 = state_30686;
var statearr_30694_30714 = state_30686__$1;
(statearr_30694_30714[(2)] = null);

(statearr_30694_30714[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (2))){
var inst_30663 = (state_30686[(7)]);
var state_30686__$1 = state_30686;
if(cljs.core.truth_(inst_30663)){
var statearr_30695_30715 = state_30686__$1;
(statearr_30695_30715[(1)] = (4));

} else {
var statearr_30696_30716 = state_30686__$1;
(statearr_30696_30716[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (11))){
var inst_30677 = cljs.core.async.close_BANG_.call(null,ch);
var state_30686__$1 = state_30686;
var statearr_30697_30717 = state_30686__$1;
(statearr_30697_30717[(2)] = inst_30677);

(statearr_30697_30717[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (9))){
var state_30686__$1 = state_30686;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30698_30718 = state_30686__$1;
(statearr_30698_30718[(1)] = (11));

} else {
var statearr_30699_30719 = state_30686__$1;
(statearr_30699_30719[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (5))){
var inst_30663 = (state_30686[(7)]);
var state_30686__$1 = state_30686;
var statearr_30700_30720 = state_30686__$1;
(statearr_30700_30720[(2)] = inst_30663);

(statearr_30700_30720[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (10))){
var inst_30682 = (state_30686[(2)]);
var state_30686__$1 = state_30686;
var statearr_30701_30721 = state_30686__$1;
(statearr_30701_30721[(2)] = inst_30682);

(statearr_30701_30721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (8))){
var inst_30663 = (state_30686[(7)]);
var inst_30673 = cljs.core.next.call(null,inst_30663);
var inst_30663__$1 = inst_30673;
var state_30686__$1 = (function (){var statearr_30702 = state_30686;
(statearr_30702[(7)] = inst_30663__$1);

return statearr_30702;
})();
var statearr_30703_30722 = state_30686__$1;
(statearr_30703_30722[(2)] = null);

(statearr_30703_30722[(1)] = (2));


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
var cljs$core$async$state_machine__29901__auto__ = null;
var cljs$core$async$state_machine__29901__auto____0 = (function (){
var statearr_30704 = [null,null,null,null,null,null,null,null];
(statearr_30704[(0)] = cljs$core$async$state_machine__29901__auto__);

(statearr_30704[(1)] = (1));

return statearr_30704;
});
var cljs$core$async$state_machine__29901__auto____1 = (function (state_30686){
while(true){
var ret_value__29902__auto__ = (function (){try{while(true){
var result__29903__auto__ = switch__29900__auto__.call(null,state_30686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29903__auto__;
}
break;
}
}catch (e30705){if((e30705 instanceof Object)){
var ex__29904__auto__ = e30705;
var statearr_30706_30723 = state_30686;
(statearr_30706_30723[(5)] = ex__29904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30724 = state_30686;
state_30686 = G__30724;
continue;
} else {
return ret_value__29902__auto__;
}
break;
}
});
cljs$core$async$state_machine__29901__auto__ = function(state_30686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29901__auto____1.call(this,state_30686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29901__auto____0;
cljs$core$async$state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29901__auto____1;
return cljs$core$async$state_machine__29901__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_30707 = f__29918__auto__.call(null);
(statearr_30707[(6)] = c__29917__auto__);

return statearr_30707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29919__auto__);
}));

return c__29917__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_30725 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_30725.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_30726 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_30726.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_30727 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_30727.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_30728 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_30728.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30729 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30729 = (function (ch,cs,meta30730){
this.ch = ch;
this.cs = cs;
this.meta30730 = meta30730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30731,meta30730__$1){
var self__ = this;
var _30731__$1 = this;
return (new cljs.core.async.t_cljs$core$async30729(self__.ch,self__.cs,meta30730__$1));
}));

(cljs.core.async.t_cljs$core$async30729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30731){
var self__ = this;
var _30731__$1 = this;
return self__.meta30730;
}));

(cljs.core.async.t_cljs$core$async30729.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30729.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30729.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30729.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30729.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30729.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30730","meta30730",-1311169650,null)], null);
}));

(cljs.core.async.t_cljs$core$async30729.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30729");

(cljs.core.async.t_cljs$core$async30729.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async30729");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30729.
 */
cljs.core.async.__GT_t_cljs$core$async30729 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30729(ch__$1,cs__$1,meta30730){
return (new cljs.core.async.t_cljs$core$async30729(ch__$1,cs__$1,meta30730));
});

}

return (new cljs.core.async.t_cljs$core$async30729(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29917__auto___30951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29918__auto__ = (function (){var switch__29900__auto__ = (function (state_30866){
var state_val_30867 = (state_30866[(1)]);
if((state_val_30867 === (7))){
var inst_30862 = (state_30866[(2)]);
var state_30866__$1 = state_30866;
var statearr_30868_30952 = state_30866__$1;
(statearr_30868_30952[(2)] = inst_30862);

(statearr_30868_30952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (20))){
var inst_30765 = (state_30866[(7)]);
var inst_30777 = cljs.core.first.call(null,inst_30765);
var inst_30778 = cljs.core.nth.call(null,inst_30777,(0),null);
var inst_30779 = cljs.core.nth.call(null,inst_30777,(1),null);
var state_30866__$1 = (function (){var statearr_30869 = state_30866;
(statearr_30869[(8)] = inst_30778);

return statearr_30869;
})();
if(cljs.core.truth_(inst_30779)){
var statearr_30870_30953 = state_30866__$1;
(statearr_30870_30953[(1)] = (22));

} else {
var statearr_30871_30954 = state_30866__$1;
(statearr_30871_30954[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (27))){
var inst_30814 = (state_30866[(9)]);
var inst_30734 = (state_30866[(10)]);
var inst_30807 = (state_30866[(11)]);
var inst_30809 = (state_30866[(12)]);
var inst_30814__$1 = cljs.core._nth.call(null,inst_30807,inst_30809);
var inst_30815 = cljs.core.async.put_BANG_.call(null,inst_30814__$1,inst_30734,done);
var state_30866__$1 = (function (){var statearr_30872 = state_30866;
(statearr_30872[(9)] = inst_30814__$1);

return statearr_30872;
})();
if(cljs.core.truth_(inst_30815)){
var statearr_30873_30955 = state_30866__$1;
(statearr_30873_30955[(1)] = (30));

} else {
var statearr_30874_30956 = state_30866__$1;
(statearr_30874_30956[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (1))){
var state_30866__$1 = state_30866;
var statearr_30875_30957 = state_30866__$1;
(statearr_30875_30957[(2)] = null);

(statearr_30875_30957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (24))){
var inst_30765 = (state_30866[(7)]);
var inst_30784 = (state_30866[(2)]);
var inst_30785 = cljs.core.next.call(null,inst_30765);
var inst_30743 = inst_30785;
var inst_30744 = null;
var inst_30745 = (0);
var inst_30746 = (0);
var state_30866__$1 = (function (){var statearr_30876 = state_30866;
(statearr_30876[(13)] = inst_30746);

(statearr_30876[(14)] = inst_30745);

(statearr_30876[(15)] = inst_30743);

(statearr_30876[(16)] = inst_30784);

(statearr_30876[(17)] = inst_30744);

return statearr_30876;
})();
var statearr_30877_30958 = state_30866__$1;
(statearr_30877_30958[(2)] = null);

(statearr_30877_30958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (39))){
var state_30866__$1 = state_30866;
var statearr_30881_30959 = state_30866__$1;
(statearr_30881_30959[(2)] = null);

(statearr_30881_30959[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (4))){
var inst_30734 = (state_30866[(10)]);
var inst_30734__$1 = (state_30866[(2)]);
var inst_30735 = (inst_30734__$1 == null);
var state_30866__$1 = (function (){var statearr_30882 = state_30866;
(statearr_30882[(10)] = inst_30734__$1);

return statearr_30882;
})();
if(cljs.core.truth_(inst_30735)){
var statearr_30883_30960 = state_30866__$1;
(statearr_30883_30960[(1)] = (5));

} else {
var statearr_30884_30961 = state_30866__$1;
(statearr_30884_30961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (15))){
var inst_30746 = (state_30866[(13)]);
var inst_30745 = (state_30866[(14)]);
var inst_30743 = (state_30866[(15)]);
var inst_30744 = (state_30866[(17)]);
var inst_30761 = (state_30866[(2)]);
var inst_30762 = (inst_30746 + (1));
var tmp30878 = inst_30745;
var tmp30879 = inst_30743;
var tmp30880 = inst_30744;
var inst_30743__$1 = tmp30879;
var inst_30744__$1 = tmp30880;
var inst_30745__$1 = tmp30878;
var inst_30746__$1 = inst_30762;
var state_30866__$1 = (function (){var statearr_30885 = state_30866;
(statearr_30885[(13)] = inst_30746__$1);

(statearr_30885[(14)] = inst_30745__$1);

(statearr_30885[(15)] = inst_30743__$1);

(statearr_30885[(18)] = inst_30761);

(statearr_30885[(17)] = inst_30744__$1);

return statearr_30885;
})();
var statearr_30886_30962 = state_30866__$1;
(statearr_30886_30962[(2)] = null);

(statearr_30886_30962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (21))){
var inst_30788 = (state_30866[(2)]);
var state_30866__$1 = state_30866;
var statearr_30890_30963 = state_30866__$1;
(statearr_30890_30963[(2)] = inst_30788);

(statearr_30890_30963[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (31))){
var inst_30814 = (state_30866[(9)]);
var inst_30818 = done.call(null,null);
var inst_30819 = cljs.core.async.untap_STAR_.call(null,m,inst_30814);
var state_30866__$1 = (function (){var statearr_30891 = state_30866;
(statearr_30891[(19)] = inst_30818);

return statearr_30891;
})();
var statearr_30892_30964 = state_30866__$1;
(statearr_30892_30964[(2)] = inst_30819);

(statearr_30892_30964[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (32))){
var inst_30808 = (state_30866[(20)]);
var inst_30806 = (state_30866[(21)]);
var inst_30807 = (state_30866[(11)]);
var inst_30809 = (state_30866[(12)]);
var inst_30821 = (state_30866[(2)]);
var inst_30822 = (inst_30809 + (1));
var tmp30887 = inst_30808;
var tmp30888 = inst_30806;
var tmp30889 = inst_30807;
var inst_30806__$1 = tmp30888;
var inst_30807__$1 = tmp30889;
var inst_30808__$1 = tmp30887;
var inst_30809__$1 = inst_30822;
var state_30866__$1 = (function (){var statearr_30893 = state_30866;
(statearr_30893[(20)] = inst_30808__$1);

(statearr_30893[(21)] = inst_30806__$1);

(statearr_30893[(22)] = inst_30821);

(statearr_30893[(11)] = inst_30807__$1);

(statearr_30893[(12)] = inst_30809__$1);

return statearr_30893;
})();
var statearr_30894_30965 = state_30866__$1;
(statearr_30894_30965[(2)] = null);

(statearr_30894_30965[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (40))){
var inst_30834 = (state_30866[(23)]);
var inst_30838 = done.call(null,null);
var inst_30839 = cljs.core.async.untap_STAR_.call(null,m,inst_30834);
var state_30866__$1 = (function (){var statearr_30895 = state_30866;
(statearr_30895[(24)] = inst_30838);

return statearr_30895;
})();
var statearr_30896_30966 = state_30866__$1;
(statearr_30896_30966[(2)] = inst_30839);

(statearr_30896_30966[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (33))){
var inst_30825 = (state_30866[(25)]);
var inst_30827 = cljs.core.chunked_seq_QMARK_.call(null,inst_30825);
var state_30866__$1 = state_30866;
if(inst_30827){
var statearr_30897_30967 = state_30866__$1;
(statearr_30897_30967[(1)] = (36));

} else {
var statearr_30898_30968 = state_30866__$1;
(statearr_30898_30968[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (13))){
var inst_30755 = (state_30866[(26)]);
var inst_30758 = cljs.core.async.close_BANG_.call(null,inst_30755);
var state_30866__$1 = state_30866;
var statearr_30899_30969 = state_30866__$1;
(statearr_30899_30969[(2)] = inst_30758);

(statearr_30899_30969[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (22))){
var inst_30778 = (state_30866[(8)]);
var inst_30781 = cljs.core.async.close_BANG_.call(null,inst_30778);
var state_30866__$1 = state_30866;
var statearr_30900_30970 = state_30866__$1;
(statearr_30900_30970[(2)] = inst_30781);

(statearr_30900_30970[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (36))){
var inst_30825 = (state_30866[(25)]);
var inst_30829 = cljs.core.chunk_first.call(null,inst_30825);
var inst_30830 = cljs.core.chunk_rest.call(null,inst_30825);
var inst_30831 = cljs.core.count.call(null,inst_30829);
var inst_30806 = inst_30830;
var inst_30807 = inst_30829;
var inst_30808 = inst_30831;
var inst_30809 = (0);
var state_30866__$1 = (function (){var statearr_30901 = state_30866;
(statearr_30901[(20)] = inst_30808);

(statearr_30901[(21)] = inst_30806);

(statearr_30901[(11)] = inst_30807);

(statearr_30901[(12)] = inst_30809);

return statearr_30901;
})();
var statearr_30902_30971 = state_30866__$1;
(statearr_30902_30971[(2)] = null);

(statearr_30902_30971[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (41))){
var inst_30825 = (state_30866[(25)]);
var inst_30841 = (state_30866[(2)]);
var inst_30842 = cljs.core.next.call(null,inst_30825);
var inst_30806 = inst_30842;
var inst_30807 = null;
var inst_30808 = (0);
var inst_30809 = (0);
var state_30866__$1 = (function (){var statearr_30903 = state_30866;
(statearr_30903[(27)] = inst_30841);

(statearr_30903[(20)] = inst_30808);

(statearr_30903[(21)] = inst_30806);

(statearr_30903[(11)] = inst_30807);

(statearr_30903[(12)] = inst_30809);

return statearr_30903;
})();
var statearr_30904_30972 = state_30866__$1;
(statearr_30904_30972[(2)] = null);

(statearr_30904_30972[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (43))){
var state_30866__$1 = state_30866;
var statearr_30905_30973 = state_30866__$1;
(statearr_30905_30973[(2)] = null);

(statearr_30905_30973[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (29))){
var inst_30850 = (state_30866[(2)]);
var state_30866__$1 = state_30866;
var statearr_30906_30974 = state_30866__$1;
(statearr_30906_30974[(2)] = inst_30850);

(statearr_30906_30974[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (44))){
var inst_30859 = (state_30866[(2)]);
var state_30866__$1 = (function (){var statearr_30907 = state_30866;
(statearr_30907[(28)] = inst_30859);

return statearr_30907;
})();
var statearr_30908_30975 = state_30866__$1;
(statearr_30908_30975[(2)] = null);

(statearr_30908_30975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (6))){
var inst_30798 = (state_30866[(29)]);
var inst_30797 = cljs.core.deref.call(null,cs);
var inst_30798__$1 = cljs.core.keys.call(null,inst_30797);
var inst_30799 = cljs.core.count.call(null,inst_30798__$1);
var inst_30800 = cljs.core.reset_BANG_.call(null,dctr,inst_30799);
var inst_30805 = cljs.core.seq.call(null,inst_30798__$1);
var inst_30806 = inst_30805;
var inst_30807 = null;
var inst_30808 = (0);
var inst_30809 = (0);
var state_30866__$1 = (function (){var statearr_30909 = state_30866;
(statearr_30909[(20)] = inst_30808);

(statearr_30909[(30)] = inst_30800);

(statearr_30909[(21)] = inst_30806);

(statearr_30909[(11)] = inst_30807);

(statearr_30909[(12)] = inst_30809);

(statearr_30909[(29)] = inst_30798__$1);

return statearr_30909;
})();
var statearr_30910_30976 = state_30866__$1;
(statearr_30910_30976[(2)] = null);

(statearr_30910_30976[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (28))){
var inst_30825 = (state_30866[(25)]);
var inst_30806 = (state_30866[(21)]);
var inst_30825__$1 = cljs.core.seq.call(null,inst_30806);
var state_30866__$1 = (function (){var statearr_30911 = state_30866;
(statearr_30911[(25)] = inst_30825__$1);

return statearr_30911;
})();
if(inst_30825__$1){
var statearr_30912_30977 = state_30866__$1;
(statearr_30912_30977[(1)] = (33));

} else {
var statearr_30913_30978 = state_30866__$1;
(statearr_30913_30978[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (25))){
var inst_30808 = (state_30866[(20)]);
var inst_30809 = (state_30866[(12)]);
var inst_30811 = (inst_30809 < inst_30808);
var inst_30812 = inst_30811;
var state_30866__$1 = state_30866;
if(cljs.core.truth_(inst_30812)){
var statearr_30914_30979 = state_30866__$1;
(statearr_30914_30979[(1)] = (27));

} else {
var statearr_30915_30980 = state_30866__$1;
(statearr_30915_30980[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (34))){
var state_30866__$1 = state_30866;
var statearr_30916_30981 = state_30866__$1;
(statearr_30916_30981[(2)] = null);

(statearr_30916_30981[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (17))){
var state_30866__$1 = state_30866;
var statearr_30917_30982 = state_30866__$1;
(statearr_30917_30982[(2)] = null);

(statearr_30917_30982[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (3))){
var inst_30864 = (state_30866[(2)]);
var state_30866__$1 = state_30866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30866__$1,inst_30864);
} else {
if((state_val_30867 === (12))){
var inst_30793 = (state_30866[(2)]);
var state_30866__$1 = state_30866;
var statearr_30918_30983 = state_30866__$1;
(statearr_30918_30983[(2)] = inst_30793);

(statearr_30918_30983[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (2))){
var state_30866__$1 = state_30866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30866__$1,(4),ch);
} else {
if((state_val_30867 === (23))){
var state_30866__$1 = state_30866;
var statearr_30919_30984 = state_30866__$1;
(statearr_30919_30984[(2)] = null);

(statearr_30919_30984[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (35))){
var inst_30848 = (state_30866[(2)]);
var state_30866__$1 = state_30866;
var statearr_30920_30985 = state_30866__$1;
(statearr_30920_30985[(2)] = inst_30848);

(statearr_30920_30985[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (19))){
var inst_30765 = (state_30866[(7)]);
var inst_30769 = cljs.core.chunk_first.call(null,inst_30765);
var inst_30770 = cljs.core.chunk_rest.call(null,inst_30765);
var inst_30771 = cljs.core.count.call(null,inst_30769);
var inst_30743 = inst_30770;
var inst_30744 = inst_30769;
var inst_30745 = inst_30771;
var inst_30746 = (0);
var state_30866__$1 = (function (){var statearr_30921 = state_30866;
(statearr_30921[(13)] = inst_30746);

(statearr_30921[(14)] = inst_30745);

(statearr_30921[(15)] = inst_30743);

(statearr_30921[(17)] = inst_30744);

return statearr_30921;
})();
var statearr_30922_30986 = state_30866__$1;
(statearr_30922_30986[(2)] = null);

(statearr_30922_30986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (11))){
var inst_30743 = (state_30866[(15)]);
var inst_30765 = (state_30866[(7)]);
var inst_30765__$1 = cljs.core.seq.call(null,inst_30743);
var state_30866__$1 = (function (){var statearr_30923 = state_30866;
(statearr_30923[(7)] = inst_30765__$1);

return statearr_30923;
})();
if(inst_30765__$1){
var statearr_30924_30987 = state_30866__$1;
(statearr_30924_30987[(1)] = (16));

} else {
var statearr_30925_30988 = state_30866__$1;
(statearr_30925_30988[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (9))){
var inst_30795 = (state_30866[(2)]);
var state_30866__$1 = state_30866;
var statearr_30926_30989 = state_30866__$1;
(statearr_30926_30989[(2)] = inst_30795);

(statearr_30926_30989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (5))){
var inst_30741 = cljs.core.deref.call(null,cs);
var inst_30742 = cljs.core.seq.call(null,inst_30741);
var inst_30743 = inst_30742;
var inst_30744 = null;
var inst_30745 = (0);
var inst_30746 = (0);
var state_30866__$1 = (function (){var statearr_30927 = state_30866;
(statearr_30927[(13)] = inst_30746);

(statearr_30927[(14)] = inst_30745);

(statearr_30927[(15)] = inst_30743);

(statearr_30927[(17)] = inst_30744);

return statearr_30927;
})();
var statearr_30928_30990 = state_30866__$1;
(statearr_30928_30990[(2)] = null);

(statearr_30928_30990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (14))){
var state_30866__$1 = state_30866;
var statearr_30929_30991 = state_30866__$1;
(statearr_30929_30991[(2)] = null);

(statearr_30929_30991[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (45))){
var inst_30856 = (state_30866[(2)]);
var state_30866__$1 = state_30866;
var statearr_30930_30992 = state_30866__$1;
(statearr_30930_30992[(2)] = inst_30856);

(statearr_30930_30992[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (26))){
var inst_30798 = (state_30866[(29)]);
var inst_30852 = (state_30866[(2)]);
var inst_30853 = cljs.core.seq.call(null,inst_30798);
var state_30866__$1 = (function (){var statearr_30931 = state_30866;
(statearr_30931[(31)] = inst_30852);

return statearr_30931;
})();
if(inst_30853){
var statearr_30932_30993 = state_30866__$1;
(statearr_30932_30993[(1)] = (42));

} else {
var statearr_30933_30994 = state_30866__$1;
(statearr_30933_30994[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (16))){
var inst_30765 = (state_30866[(7)]);
var inst_30767 = cljs.core.chunked_seq_QMARK_.call(null,inst_30765);
var state_30866__$1 = state_30866;
if(inst_30767){
var statearr_30934_30995 = state_30866__$1;
(statearr_30934_30995[(1)] = (19));

} else {
var statearr_30935_30996 = state_30866__$1;
(statearr_30935_30996[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (38))){
var inst_30845 = (state_30866[(2)]);
var state_30866__$1 = state_30866;
var statearr_30936_30997 = state_30866__$1;
(statearr_30936_30997[(2)] = inst_30845);

(statearr_30936_30997[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (30))){
var state_30866__$1 = state_30866;
var statearr_30937_30998 = state_30866__$1;
(statearr_30937_30998[(2)] = null);

(statearr_30937_30998[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (10))){
var inst_30746 = (state_30866[(13)]);
var inst_30744 = (state_30866[(17)]);
var inst_30754 = cljs.core._nth.call(null,inst_30744,inst_30746);
var inst_30755 = cljs.core.nth.call(null,inst_30754,(0),null);
var inst_30756 = cljs.core.nth.call(null,inst_30754,(1),null);
var state_30866__$1 = (function (){var statearr_30938 = state_30866;
(statearr_30938[(26)] = inst_30755);

return statearr_30938;
})();
if(cljs.core.truth_(inst_30756)){
var statearr_30939_30999 = state_30866__$1;
(statearr_30939_30999[(1)] = (13));

} else {
var statearr_30940_31000 = state_30866__$1;
(statearr_30940_31000[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (18))){
var inst_30791 = (state_30866[(2)]);
var state_30866__$1 = state_30866;
var statearr_30941_31001 = state_30866__$1;
(statearr_30941_31001[(2)] = inst_30791);

(statearr_30941_31001[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (42))){
var state_30866__$1 = state_30866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30866__$1,(45),dchan);
} else {
if((state_val_30867 === (37))){
var inst_30825 = (state_30866[(25)]);
var inst_30834 = (state_30866[(23)]);
var inst_30734 = (state_30866[(10)]);
var inst_30834__$1 = cljs.core.first.call(null,inst_30825);
var inst_30835 = cljs.core.async.put_BANG_.call(null,inst_30834__$1,inst_30734,done);
var state_30866__$1 = (function (){var statearr_30942 = state_30866;
(statearr_30942[(23)] = inst_30834__$1);

return statearr_30942;
})();
if(cljs.core.truth_(inst_30835)){
var statearr_30943_31002 = state_30866__$1;
(statearr_30943_31002[(1)] = (39));

} else {
var statearr_30944_31003 = state_30866__$1;
(statearr_30944_31003[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (8))){
var inst_30746 = (state_30866[(13)]);
var inst_30745 = (state_30866[(14)]);
var inst_30748 = (inst_30746 < inst_30745);
var inst_30749 = inst_30748;
var state_30866__$1 = state_30866;
if(cljs.core.truth_(inst_30749)){
var statearr_30945_31004 = state_30866__$1;
(statearr_30945_31004[(1)] = (10));

} else {
var statearr_30946_31005 = state_30866__$1;
(statearr_30946_31005[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__29901__auto__ = null;
var cljs$core$async$mult_$_state_machine__29901__auto____0 = (function (){
var statearr_30947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30947[(0)] = cljs$core$async$mult_$_state_machine__29901__auto__);

(statearr_30947[(1)] = (1));

return statearr_30947;
});
var cljs$core$async$mult_$_state_machine__29901__auto____1 = (function (state_30866){
while(true){
var ret_value__29902__auto__ = (function (){try{while(true){
var result__29903__auto__ = switch__29900__auto__.call(null,state_30866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29903__auto__;
}
break;
}
}catch (e30948){if((e30948 instanceof Object)){
var ex__29904__auto__ = e30948;
var statearr_30949_31006 = state_30866;
(statearr_30949_31006[(5)] = ex__29904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31007 = state_30866;
state_30866 = G__31007;
continue;
} else {
return ret_value__29902__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29901__auto__ = function(state_30866){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29901__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29901__auto____1.call(this,state_30866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29901__auto____0;
cljs$core$async$mult_$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29901__auto____1;
return cljs$core$async$mult_$_state_machine__29901__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_30950 = f__29918__auto__.call(null);
(statearr_30950[(6)] = c__29917__auto___30951);

return statearr_30950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29919__auto__);
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
var G__31009 = arguments.length;
switch (G__31009) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_31011 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_31011.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_31012 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_31012.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_31013 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_31013.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_31014 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_31014.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_31015 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_31015.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31026 = arguments.length;
var i__4737__auto___31027 = (0);
while(true){
if((i__4737__auto___31027 < len__4736__auto___31026)){
args__4742__auto__.push((arguments[i__4737__auto___31027]));

var G__31028 = (i__4737__auto___31027 + (1));
i__4737__auto___31027 = G__31028;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31020){
var map__31021 = p__31020;
var map__31021__$1 = (((((!((map__31021 == null))))?(((((map__31021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31021):map__31021);
var opts = map__31021__$1;
var statearr_31023_31029 = state;
(statearr_31023_31029[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_31024_31030 = state;
(statearr_31024_31030[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31025_31031 = state;
(statearr_31025_31031[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31016){
var G__31017 = cljs.core.first.call(null,seq31016);
var seq31016__$1 = cljs.core.next.call(null,seq31016);
var G__31018 = cljs.core.first.call(null,seq31016__$1);
var seq31016__$2 = cljs.core.next.call(null,seq31016__$1);
var G__31019 = cljs.core.first.call(null,seq31016__$2);
var seq31016__$3 = cljs.core.next.call(null,seq31016__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31017,G__31018,G__31019,seq31016__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31032 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31032 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31033){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31033 = meta31033;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31034,meta31033__$1){
var self__ = this;
var _31034__$1 = this;
return (new cljs.core.async.t_cljs$core$async31032(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31033__$1));
}));

(cljs.core.async.t_cljs$core$async31032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31034){
var self__ = this;
var _31034__$1 = this;
return self__.meta31033;
}));

(cljs.core.async.t_cljs$core$async31032.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31032.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31032.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31032.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async31032.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async31032.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async31032.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async31032.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async31032.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31033","meta31033",-743933915,null)], null);
}));

(cljs.core.async.t_cljs$core$async31032.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31032.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31032");

(cljs.core.async.t_cljs$core$async31032.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async31032");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31032.
 */
cljs.core.async.__GT_t_cljs$core$async31032 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31032(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31033){
return (new cljs.core.async.t_cljs$core$async31032(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31033));
});

}

return (new cljs.core.async.t_cljs$core$async31032(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29917__auto___31196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29918__auto__ = (function (){var switch__29900__auto__ = (function (state_31136){
var state_val_31137 = (state_31136[(1)]);
if((state_val_31137 === (7))){
var inst_31051 = (state_31136[(2)]);
var state_31136__$1 = state_31136;
var statearr_31138_31197 = state_31136__$1;
(statearr_31138_31197[(2)] = inst_31051);

(statearr_31138_31197[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (20))){
var inst_31063 = (state_31136[(7)]);
var state_31136__$1 = state_31136;
var statearr_31139_31198 = state_31136__$1;
(statearr_31139_31198[(2)] = inst_31063);

(statearr_31139_31198[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (27))){
var state_31136__$1 = state_31136;
var statearr_31140_31199 = state_31136__$1;
(statearr_31140_31199[(2)] = null);

(statearr_31140_31199[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (1))){
var inst_31038 = (state_31136[(8)]);
var inst_31038__$1 = calc_state.call(null);
var inst_31040 = (inst_31038__$1 == null);
var inst_31041 = cljs.core.not.call(null,inst_31040);
var state_31136__$1 = (function (){var statearr_31141 = state_31136;
(statearr_31141[(8)] = inst_31038__$1);

return statearr_31141;
})();
if(inst_31041){
var statearr_31142_31200 = state_31136__$1;
(statearr_31142_31200[(1)] = (2));

} else {
var statearr_31143_31201 = state_31136__$1;
(statearr_31143_31201[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (24))){
var inst_31096 = (state_31136[(9)]);
var inst_31087 = (state_31136[(10)]);
var inst_31110 = (state_31136[(11)]);
var inst_31110__$1 = inst_31087.call(null,inst_31096);
var state_31136__$1 = (function (){var statearr_31144 = state_31136;
(statearr_31144[(11)] = inst_31110__$1);

return statearr_31144;
})();
if(cljs.core.truth_(inst_31110__$1)){
var statearr_31145_31202 = state_31136__$1;
(statearr_31145_31202[(1)] = (29));

} else {
var statearr_31146_31203 = state_31136__$1;
(statearr_31146_31203[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (4))){
var inst_31054 = (state_31136[(2)]);
var state_31136__$1 = state_31136;
if(cljs.core.truth_(inst_31054)){
var statearr_31147_31204 = state_31136__$1;
(statearr_31147_31204[(1)] = (8));

} else {
var statearr_31148_31205 = state_31136__$1;
(statearr_31148_31205[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (15))){
var inst_31081 = (state_31136[(2)]);
var state_31136__$1 = state_31136;
if(cljs.core.truth_(inst_31081)){
var statearr_31149_31206 = state_31136__$1;
(statearr_31149_31206[(1)] = (19));

} else {
var statearr_31150_31207 = state_31136__$1;
(statearr_31150_31207[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (21))){
var inst_31086 = (state_31136[(12)]);
var inst_31086__$1 = (state_31136[(2)]);
var inst_31087 = cljs.core.get.call(null,inst_31086__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31088 = cljs.core.get.call(null,inst_31086__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31089 = cljs.core.get.call(null,inst_31086__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31136__$1 = (function (){var statearr_31151 = state_31136;
(statearr_31151[(12)] = inst_31086__$1);

(statearr_31151[(10)] = inst_31087);

(statearr_31151[(13)] = inst_31088);

return statearr_31151;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31136__$1,(22),inst_31089);
} else {
if((state_val_31137 === (31))){
var inst_31118 = (state_31136[(2)]);
var state_31136__$1 = state_31136;
if(cljs.core.truth_(inst_31118)){
var statearr_31152_31208 = state_31136__$1;
(statearr_31152_31208[(1)] = (32));

} else {
var statearr_31153_31209 = state_31136__$1;
(statearr_31153_31209[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (32))){
var inst_31095 = (state_31136[(14)]);
var state_31136__$1 = state_31136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31136__$1,(35),out,inst_31095);
} else {
if((state_val_31137 === (33))){
var inst_31086 = (state_31136[(12)]);
var inst_31063 = inst_31086;
var state_31136__$1 = (function (){var statearr_31154 = state_31136;
(statearr_31154[(7)] = inst_31063);

return statearr_31154;
})();
var statearr_31155_31210 = state_31136__$1;
(statearr_31155_31210[(2)] = null);

(statearr_31155_31210[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (13))){
var inst_31063 = (state_31136[(7)]);
var inst_31070 = inst_31063.cljs$lang$protocol_mask$partition0$;
var inst_31071 = (inst_31070 & (64));
var inst_31072 = inst_31063.cljs$core$ISeq$;
var inst_31073 = (cljs.core.PROTOCOL_SENTINEL === inst_31072);
var inst_31074 = ((inst_31071) || (inst_31073));
var state_31136__$1 = state_31136;
if(cljs.core.truth_(inst_31074)){
var statearr_31156_31211 = state_31136__$1;
(statearr_31156_31211[(1)] = (16));

} else {
var statearr_31157_31212 = state_31136__$1;
(statearr_31157_31212[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (22))){
var inst_31096 = (state_31136[(9)]);
var inst_31095 = (state_31136[(14)]);
var inst_31094 = (state_31136[(2)]);
var inst_31095__$1 = cljs.core.nth.call(null,inst_31094,(0),null);
var inst_31096__$1 = cljs.core.nth.call(null,inst_31094,(1),null);
var inst_31097 = (inst_31095__$1 == null);
var inst_31098 = cljs.core._EQ_.call(null,inst_31096__$1,change);
var inst_31099 = ((inst_31097) || (inst_31098));
var state_31136__$1 = (function (){var statearr_31158 = state_31136;
(statearr_31158[(9)] = inst_31096__$1);

(statearr_31158[(14)] = inst_31095__$1);

return statearr_31158;
})();
if(cljs.core.truth_(inst_31099)){
var statearr_31159_31213 = state_31136__$1;
(statearr_31159_31213[(1)] = (23));

} else {
var statearr_31160_31214 = state_31136__$1;
(statearr_31160_31214[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (36))){
var inst_31086 = (state_31136[(12)]);
var inst_31063 = inst_31086;
var state_31136__$1 = (function (){var statearr_31161 = state_31136;
(statearr_31161[(7)] = inst_31063);

return statearr_31161;
})();
var statearr_31162_31215 = state_31136__$1;
(statearr_31162_31215[(2)] = null);

(statearr_31162_31215[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (29))){
var inst_31110 = (state_31136[(11)]);
var state_31136__$1 = state_31136;
var statearr_31163_31216 = state_31136__$1;
(statearr_31163_31216[(2)] = inst_31110);

(statearr_31163_31216[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (6))){
var state_31136__$1 = state_31136;
var statearr_31164_31217 = state_31136__$1;
(statearr_31164_31217[(2)] = false);

(statearr_31164_31217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (28))){
var inst_31106 = (state_31136[(2)]);
var inst_31107 = calc_state.call(null);
var inst_31063 = inst_31107;
var state_31136__$1 = (function (){var statearr_31165 = state_31136;
(statearr_31165[(15)] = inst_31106);

(statearr_31165[(7)] = inst_31063);

return statearr_31165;
})();
var statearr_31166_31218 = state_31136__$1;
(statearr_31166_31218[(2)] = null);

(statearr_31166_31218[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (25))){
var inst_31132 = (state_31136[(2)]);
var state_31136__$1 = state_31136;
var statearr_31167_31219 = state_31136__$1;
(statearr_31167_31219[(2)] = inst_31132);

(statearr_31167_31219[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (34))){
var inst_31130 = (state_31136[(2)]);
var state_31136__$1 = state_31136;
var statearr_31168_31220 = state_31136__$1;
(statearr_31168_31220[(2)] = inst_31130);

(statearr_31168_31220[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (17))){
var state_31136__$1 = state_31136;
var statearr_31169_31221 = state_31136__$1;
(statearr_31169_31221[(2)] = false);

(statearr_31169_31221[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (3))){
var state_31136__$1 = state_31136;
var statearr_31170_31222 = state_31136__$1;
(statearr_31170_31222[(2)] = false);

(statearr_31170_31222[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (12))){
var inst_31134 = (state_31136[(2)]);
var state_31136__$1 = state_31136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31136__$1,inst_31134);
} else {
if((state_val_31137 === (2))){
var inst_31038 = (state_31136[(8)]);
var inst_31043 = inst_31038.cljs$lang$protocol_mask$partition0$;
var inst_31044 = (inst_31043 & (64));
var inst_31045 = inst_31038.cljs$core$ISeq$;
var inst_31046 = (cljs.core.PROTOCOL_SENTINEL === inst_31045);
var inst_31047 = ((inst_31044) || (inst_31046));
var state_31136__$1 = state_31136;
if(cljs.core.truth_(inst_31047)){
var statearr_31171_31223 = state_31136__$1;
(statearr_31171_31223[(1)] = (5));

} else {
var statearr_31172_31224 = state_31136__$1;
(statearr_31172_31224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (23))){
var inst_31095 = (state_31136[(14)]);
var inst_31101 = (inst_31095 == null);
var state_31136__$1 = state_31136;
if(cljs.core.truth_(inst_31101)){
var statearr_31173_31225 = state_31136__$1;
(statearr_31173_31225[(1)] = (26));

} else {
var statearr_31174_31226 = state_31136__$1;
(statearr_31174_31226[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (35))){
var inst_31121 = (state_31136[(2)]);
var state_31136__$1 = state_31136;
if(cljs.core.truth_(inst_31121)){
var statearr_31175_31227 = state_31136__$1;
(statearr_31175_31227[(1)] = (36));

} else {
var statearr_31176_31228 = state_31136__$1;
(statearr_31176_31228[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (19))){
var inst_31063 = (state_31136[(7)]);
var inst_31083 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31063);
var state_31136__$1 = state_31136;
var statearr_31177_31229 = state_31136__$1;
(statearr_31177_31229[(2)] = inst_31083);

(statearr_31177_31229[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (11))){
var inst_31063 = (state_31136[(7)]);
var inst_31067 = (inst_31063 == null);
var inst_31068 = cljs.core.not.call(null,inst_31067);
var state_31136__$1 = state_31136;
if(inst_31068){
var statearr_31178_31230 = state_31136__$1;
(statearr_31178_31230[(1)] = (13));

} else {
var statearr_31179_31231 = state_31136__$1;
(statearr_31179_31231[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (9))){
var inst_31038 = (state_31136[(8)]);
var state_31136__$1 = state_31136;
var statearr_31180_31232 = state_31136__$1;
(statearr_31180_31232[(2)] = inst_31038);

(statearr_31180_31232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (5))){
var state_31136__$1 = state_31136;
var statearr_31181_31233 = state_31136__$1;
(statearr_31181_31233[(2)] = true);

(statearr_31181_31233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (14))){
var state_31136__$1 = state_31136;
var statearr_31182_31234 = state_31136__$1;
(statearr_31182_31234[(2)] = false);

(statearr_31182_31234[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (26))){
var inst_31096 = (state_31136[(9)]);
var inst_31103 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31096);
var state_31136__$1 = state_31136;
var statearr_31183_31235 = state_31136__$1;
(statearr_31183_31235[(2)] = inst_31103);

(statearr_31183_31235[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (16))){
var state_31136__$1 = state_31136;
var statearr_31184_31236 = state_31136__$1;
(statearr_31184_31236[(2)] = true);

(statearr_31184_31236[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (38))){
var inst_31126 = (state_31136[(2)]);
var state_31136__$1 = state_31136;
var statearr_31185_31237 = state_31136__$1;
(statearr_31185_31237[(2)] = inst_31126);

(statearr_31185_31237[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (30))){
var inst_31096 = (state_31136[(9)]);
var inst_31087 = (state_31136[(10)]);
var inst_31088 = (state_31136[(13)]);
var inst_31113 = cljs.core.empty_QMARK_.call(null,inst_31087);
var inst_31114 = inst_31088.call(null,inst_31096);
var inst_31115 = cljs.core.not.call(null,inst_31114);
var inst_31116 = ((inst_31113) && (inst_31115));
var state_31136__$1 = state_31136;
var statearr_31186_31238 = state_31136__$1;
(statearr_31186_31238[(2)] = inst_31116);

(statearr_31186_31238[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (10))){
var inst_31038 = (state_31136[(8)]);
var inst_31059 = (state_31136[(2)]);
var inst_31060 = cljs.core.get.call(null,inst_31059,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31061 = cljs.core.get.call(null,inst_31059,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31062 = cljs.core.get.call(null,inst_31059,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31063 = inst_31038;
var state_31136__$1 = (function (){var statearr_31187 = state_31136;
(statearr_31187[(16)] = inst_31060);

(statearr_31187[(17)] = inst_31061);

(statearr_31187[(18)] = inst_31062);

(statearr_31187[(7)] = inst_31063);

return statearr_31187;
})();
var statearr_31188_31239 = state_31136__$1;
(statearr_31188_31239[(2)] = null);

(statearr_31188_31239[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (18))){
var inst_31078 = (state_31136[(2)]);
var state_31136__$1 = state_31136;
var statearr_31189_31240 = state_31136__$1;
(statearr_31189_31240[(2)] = inst_31078);

(statearr_31189_31240[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (37))){
var state_31136__$1 = state_31136;
var statearr_31190_31241 = state_31136__$1;
(statearr_31190_31241[(2)] = null);

(statearr_31190_31241[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (8))){
var inst_31038 = (state_31136[(8)]);
var inst_31056 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31038);
var state_31136__$1 = state_31136;
var statearr_31191_31242 = state_31136__$1;
(statearr_31191_31242[(2)] = inst_31056);

(statearr_31191_31242[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__29901__auto__ = null;
var cljs$core$async$mix_$_state_machine__29901__auto____0 = (function (){
var statearr_31192 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31192[(0)] = cljs$core$async$mix_$_state_machine__29901__auto__);

(statearr_31192[(1)] = (1));

return statearr_31192;
});
var cljs$core$async$mix_$_state_machine__29901__auto____1 = (function (state_31136){
while(true){
var ret_value__29902__auto__ = (function (){try{while(true){
var result__29903__auto__ = switch__29900__auto__.call(null,state_31136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29903__auto__;
}
break;
}
}catch (e31193){if((e31193 instanceof Object)){
var ex__29904__auto__ = e31193;
var statearr_31194_31243 = state_31136;
(statearr_31194_31243[(5)] = ex__29904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31244 = state_31136;
state_31136 = G__31244;
continue;
} else {
return ret_value__29902__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29901__auto__ = function(state_31136){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29901__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29901__auto____1.call(this,state_31136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29901__auto____0;
cljs$core$async$mix_$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29901__auto____1;
return cljs$core$async$mix_$_state_machine__29901__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_31195 = f__29918__auto__.call(null);
(statearr_31195[(6)] = c__29917__auto___31196);

return statearr_31195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29919__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_31247 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_31247.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_31248 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_31248.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_31249 = (function() {
var G__31250 = null;
var G__31250__1 = (function (p){
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
var G__31250__2 = (function (p,v){
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
G__31250 = function(p,v){
switch(arguments.length){
case 1:
return G__31250__1.call(this,p);
case 2:
return G__31250__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31250.cljs$core$IFn$_invoke$arity$1 = G__31250__1;
G__31250.cljs$core$IFn$_invoke$arity$2 = G__31250__2;
return G__31250;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31246 = arguments.length;
switch (G__31246) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_31249.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_31249.call(null,p,v);
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
var G__31254 = arguments.length;
switch (G__31254) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__31252_SHARP_){
if(cljs.core.truth_(p1__31252_SHARP_.call(null,topic))){
return p1__31252_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31252_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31255 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31255 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31256){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31256 = meta31256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31257,meta31256__$1){
var self__ = this;
var _31257__$1 = this;
return (new cljs.core.async.t_cljs$core$async31255(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31256__$1));
}));

(cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31257){
var self__ = this;
var _31257__$1 = this;
return self__.meta31256;
}));

(cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31255.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31256","meta31256",-38736745,null)], null);
}));

(cljs.core.async.t_cljs$core$async31255.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31255.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31255");

(cljs.core.async.t_cljs$core$async31255.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async31255");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31255.
 */
cljs.core.async.__GT_t_cljs$core$async31255 = (function cljs$core$async$__GT_t_cljs$core$async31255(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31256){
return (new cljs.core.async.t_cljs$core$async31255(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31256));
});

}

return (new cljs.core.async.t_cljs$core$async31255(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29917__auto___31375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29918__auto__ = (function (){var switch__29900__auto__ = (function (state_31329){
var state_val_31330 = (state_31329[(1)]);
if((state_val_31330 === (7))){
var inst_31325 = (state_31329[(2)]);
var state_31329__$1 = state_31329;
var statearr_31331_31376 = state_31329__$1;
(statearr_31331_31376[(2)] = inst_31325);

(statearr_31331_31376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (20))){
var state_31329__$1 = state_31329;
var statearr_31332_31377 = state_31329__$1;
(statearr_31332_31377[(2)] = null);

(statearr_31332_31377[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (1))){
var state_31329__$1 = state_31329;
var statearr_31333_31378 = state_31329__$1;
(statearr_31333_31378[(2)] = null);

(statearr_31333_31378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (24))){
var inst_31308 = (state_31329[(7)]);
var inst_31317 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31308);
var state_31329__$1 = state_31329;
var statearr_31334_31379 = state_31329__$1;
(statearr_31334_31379[(2)] = inst_31317);

(statearr_31334_31379[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (4))){
var inst_31260 = (state_31329[(8)]);
var inst_31260__$1 = (state_31329[(2)]);
var inst_31261 = (inst_31260__$1 == null);
var state_31329__$1 = (function (){var statearr_31335 = state_31329;
(statearr_31335[(8)] = inst_31260__$1);

return statearr_31335;
})();
if(cljs.core.truth_(inst_31261)){
var statearr_31336_31380 = state_31329__$1;
(statearr_31336_31380[(1)] = (5));

} else {
var statearr_31337_31381 = state_31329__$1;
(statearr_31337_31381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (15))){
var inst_31302 = (state_31329[(2)]);
var state_31329__$1 = state_31329;
var statearr_31338_31382 = state_31329__$1;
(statearr_31338_31382[(2)] = inst_31302);

(statearr_31338_31382[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (21))){
var inst_31322 = (state_31329[(2)]);
var state_31329__$1 = (function (){var statearr_31339 = state_31329;
(statearr_31339[(9)] = inst_31322);

return statearr_31339;
})();
var statearr_31340_31383 = state_31329__$1;
(statearr_31340_31383[(2)] = null);

(statearr_31340_31383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (13))){
var inst_31284 = (state_31329[(10)]);
var inst_31286 = cljs.core.chunked_seq_QMARK_.call(null,inst_31284);
var state_31329__$1 = state_31329;
if(inst_31286){
var statearr_31341_31384 = state_31329__$1;
(statearr_31341_31384[(1)] = (16));

} else {
var statearr_31342_31385 = state_31329__$1;
(statearr_31342_31385[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (22))){
var inst_31314 = (state_31329[(2)]);
var state_31329__$1 = state_31329;
if(cljs.core.truth_(inst_31314)){
var statearr_31343_31386 = state_31329__$1;
(statearr_31343_31386[(1)] = (23));

} else {
var statearr_31344_31387 = state_31329__$1;
(statearr_31344_31387[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (6))){
var inst_31308 = (state_31329[(7)]);
var inst_31310 = (state_31329[(11)]);
var inst_31260 = (state_31329[(8)]);
var inst_31308__$1 = topic_fn.call(null,inst_31260);
var inst_31309 = cljs.core.deref.call(null,mults);
var inst_31310__$1 = cljs.core.get.call(null,inst_31309,inst_31308__$1);
var state_31329__$1 = (function (){var statearr_31345 = state_31329;
(statearr_31345[(7)] = inst_31308__$1);

(statearr_31345[(11)] = inst_31310__$1);

return statearr_31345;
})();
if(cljs.core.truth_(inst_31310__$1)){
var statearr_31346_31388 = state_31329__$1;
(statearr_31346_31388[(1)] = (19));

} else {
var statearr_31347_31389 = state_31329__$1;
(statearr_31347_31389[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (25))){
var inst_31319 = (state_31329[(2)]);
var state_31329__$1 = state_31329;
var statearr_31348_31390 = state_31329__$1;
(statearr_31348_31390[(2)] = inst_31319);

(statearr_31348_31390[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (17))){
var inst_31284 = (state_31329[(10)]);
var inst_31293 = cljs.core.first.call(null,inst_31284);
var inst_31294 = cljs.core.async.muxch_STAR_.call(null,inst_31293);
var inst_31295 = cljs.core.async.close_BANG_.call(null,inst_31294);
var inst_31296 = cljs.core.next.call(null,inst_31284);
var inst_31270 = inst_31296;
var inst_31271 = null;
var inst_31272 = (0);
var inst_31273 = (0);
var state_31329__$1 = (function (){var statearr_31349 = state_31329;
(statearr_31349[(12)] = inst_31271);

(statearr_31349[(13)] = inst_31295);

(statearr_31349[(14)] = inst_31270);

(statearr_31349[(15)] = inst_31272);

(statearr_31349[(16)] = inst_31273);

return statearr_31349;
})();
var statearr_31350_31391 = state_31329__$1;
(statearr_31350_31391[(2)] = null);

(statearr_31350_31391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (3))){
var inst_31327 = (state_31329[(2)]);
var state_31329__$1 = state_31329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31329__$1,inst_31327);
} else {
if((state_val_31330 === (12))){
var inst_31304 = (state_31329[(2)]);
var state_31329__$1 = state_31329;
var statearr_31351_31392 = state_31329__$1;
(statearr_31351_31392[(2)] = inst_31304);

(statearr_31351_31392[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (2))){
var state_31329__$1 = state_31329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31329__$1,(4),ch);
} else {
if((state_val_31330 === (23))){
var state_31329__$1 = state_31329;
var statearr_31352_31393 = state_31329__$1;
(statearr_31352_31393[(2)] = null);

(statearr_31352_31393[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (19))){
var inst_31310 = (state_31329[(11)]);
var inst_31260 = (state_31329[(8)]);
var inst_31312 = cljs.core.async.muxch_STAR_.call(null,inst_31310);
var state_31329__$1 = state_31329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31329__$1,(22),inst_31312,inst_31260);
} else {
if((state_val_31330 === (11))){
var inst_31270 = (state_31329[(14)]);
var inst_31284 = (state_31329[(10)]);
var inst_31284__$1 = cljs.core.seq.call(null,inst_31270);
var state_31329__$1 = (function (){var statearr_31353 = state_31329;
(statearr_31353[(10)] = inst_31284__$1);

return statearr_31353;
})();
if(inst_31284__$1){
var statearr_31354_31394 = state_31329__$1;
(statearr_31354_31394[(1)] = (13));

} else {
var statearr_31355_31395 = state_31329__$1;
(statearr_31355_31395[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (9))){
var inst_31306 = (state_31329[(2)]);
var state_31329__$1 = state_31329;
var statearr_31356_31396 = state_31329__$1;
(statearr_31356_31396[(2)] = inst_31306);

(statearr_31356_31396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (5))){
var inst_31267 = cljs.core.deref.call(null,mults);
var inst_31268 = cljs.core.vals.call(null,inst_31267);
var inst_31269 = cljs.core.seq.call(null,inst_31268);
var inst_31270 = inst_31269;
var inst_31271 = null;
var inst_31272 = (0);
var inst_31273 = (0);
var state_31329__$1 = (function (){var statearr_31357 = state_31329;
(statearr_31357[(12)] = inst_31271);

(statearr_31357[(14)] = inst_31270);

(statearr_31357[(15)] = inst_31272);

(statearr_31357[(16)] = inst_31273);

return statearr_31357;
})();
var statearr_31358_31397 = state_31329__$1;
(statearr_31358_31397[(2)] = null);

(statearr_31358_31397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (14))){
var state_31329__$1 = state_31329;
var statearr_31362_31398 = state_31329__$1;
(statearr_31362_31398[(2)] = null);

(statearr_31362_31398[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (16))){
var inst_31284 = (state_31329[(10)]);
var inst_31288 = cljs.core.chunk_first.call(null,inst_31284);
var inst_31289 = cljs.core.chunk_rest.call(null,inst_31284);
var inst_31290 = cljs.core.count.call(null,inst_31288);
var inst_31270 = inst_31289;
var inst_31271 = inst_31288;
var inst_31272 = inst_31290;
var inst_31273 = (0);
var state_31329__$1 = (function (){var statearr_31363 = state_31329;
(statearr_31363[(12)] = inst_31271);

(statearr_31363[(14)] = inst_31270);

(statearr_31363[(15)] = inst_31272);

(statearr_31363[(16)] = inst_31273);

return statearr_31363;
})();
var statearr_31364_31399 = state_31329__$1;
(statearr_31364_31399[(2)] = null);

(statearr_31364_31399[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (10))){
var inst_31271 = (state_31329[(12)]);
var inst_31270 = (state_31329[(14)]);
var inst_31272 = (state_31329[(15)]);
var inst_31273 = (state_31329[(16)]);
var inst_31278 = cljs.core._nth.call(null,inst_31271,inst_31273);
var inst_31279 = cljs.core.async.muxch_STAR_.call(null,inst_31278);
var inst_31280 = cljs.core.async.close_BANG_.call(null,inst_31279);
var inst_31281 = (inst_31273 + (1));
var tmp31359 = inst_31271;
var tmp31360 = inst_31270;
var tmp31361 = inst_31272;
var inst_31270__$1 = tmp31360;
var inst_31271__$1 = tmp31359;
var inst_31272__$1 = tmp31361;
var inst_31273__$1 = inst_31281;
var state_31329__$1 = (function (){var statearr_31365 = state_31329;
(statearr_31365[(12)] = inst_31271__$1);

(statearr_31365[(14)] = inst_31270__$1);

(statearr_31365[(17)] = inst_31280);

(statearr_31365[(15)] = inst_31272__$1);

(statearr_31365[(16)] = inst_31273__$1);

return statearr_31365;
})();
var statearr_31366_31400 = state_31329__$1;
(statearr_31366_31400[(2)] = null);

(statearr_31366_31400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (18))){
var inst_31299 = (state_31329[(2)]);
var state_31329__$1 = state_31329;
var statearr_31367_31401 = state_31329__$1;
(statearr_31367_31401[(2)] = inst_31299);

(statearr_31367_31401[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (8))){
var inst_31272 = (state_31329[(15)]);
var inst_31273 = (state_31329[(16)]);
var inst_31275 = (inst_31273 < inst_31272);
var inst_31276 = inst_31275;
var state_31329__$1 = state_31329;
if(cljs.core.truth_(inst_31276)){
var statearr_31368_31402 = state_31329__$1;
(statearr_31368_31402[(1)] = (10));

} else {
var statearr_31369_31403 = state_31329__$1;
(statearr_31369_31403[(1)] = (11));

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
var cljs$core$async$state_machine__29901__auto__ = null;
var cljs$core$async$state_machine__29901__auto____0 = (function (){
var statearr_31370 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31370[(0)] = cljs$core$async$state_machine__29901__auto__);

(statearr_31370[(1)] = (1));

return statearr_31370;
});
var cljs$core$async$state_machine__29901__auto____1 = (function (state_31329){
while(true){
var ret_value__29902__auto__ = (function (){try{while(true){
var result__29903__auto__ = switch__29900__auto__.call(null,state_31329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29903__auto__;
}
break;
}
}catch (e31371){if((e31371 instanceof Object)){
var ex__29904__auto__ = e31371;
var statearr_31372_31404 = state_31329;
(statearr_31372_31404[(5)] = ex__29904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31405 = state_31329;
state_31329 = G__31405;
continue;
} else {
return ret_value__29902__auto__;
}
break;
}
});
cljs$core$async$state_machine__29901__auto__ = function(state_31329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29901__auto____1.call(this,state_31329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29901__auto____0;
cljs$core$async$state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29901__auto____1;
return cljs$core$async$state_machine__29901__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_31373 = f__29918__auto__.call(null);
(statearr_31373[(6)] = c__29917__auto___31375);

return statearr_31373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29919__auto__);
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
var G__31407 = arguments.length;
switch (G__31407) {
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
var G__31410 = arguments.length;
switch (G__31410) {
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
var G__31413 = arguments.length;
switch (G__31413) {
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
var c__29917__auto___31480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29918__auto__ = (function (){var switch__29900__auto__ = (function (state_31452){
var state_val_31453 = (state_31452[(1)]);
if((state_val_31453 === (7))){
var state_31452__$1 = state_31452;
var statearr_31454_31481 = state_31452__$1;
(statearr_31454_31481[(2)] = null);

(statearr_31454_31481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (1))){
var state_31452__$1 = state_31452;
var statearr_31455_31482 = state_31452__$1;
(statearr_31455_31482[(2)] = null);

(statearr_31455_31482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (4))){
var inst_31416 = (state_31452[(7)]);
var inst_31418 = (inst_31416 < cnt);
var state_31452__$1 = state_31452;
if(cljs.core.truth_(inst_31418)){
var statearr_31456_31483 = state_31452__$1;
(statearr_31456_31483[(1)] = (6));

} else {
var statearr_31457_31484 = state_31452__$1;
(statearr_31457_31484[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (15))){
var inst_31448 = (state_31452[(2)]);
var state_31452__$1 = state_31452;
var statearr_31458_31485 = state_31452__$1;
(statearr_31458_31485[(2)] = inst_31448);

(statearr_31458_31485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (13))){
var inst_31441 = cljs.core.async.close_BANG_.call(null,out);
var state_31452__$1 = state_31452;
var statearr_31459_31486 = state_31452__$1;
(statearr_31459_31486[(2)] = inst_31441);

(statearr_31459_31486[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (6))){
var state_31452__$1 = state_31452;
var statearr_31460_31487 = state_31452__$1;
(statearr_31460_31487[(2)] = null);

(statearr_31460_31487[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (3))){
var inst_31450 = (state_31452[(2)]);
var state_31452__$1 = state_31452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31452__$1,inst_31450);
} else {
if((state_val_31453 === (12))){
var inst_31438 = (state_31452[(8)]);
var inst_31438__$1 = (state_31452[(2)]);
var inst_31439 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31438__$1);
var state_31452__$1 = (function (){var statearr_31461 = state_31452;
(statearr_31461[(8)] = inst_31438__$1);

return statearr_31461;
})();
if(cljs.core.truth_(inst_31439)){
var statearr_31462_31488 = state_31452__$1;
(statearr_31462_31488[(1)] = (13));

} else {
var statearr_31463_31489 = state_31452__$1;
(statearr_31463_31489[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (2))){
var inst_31415 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31416 = (0);
var state_31452__$1 = (function (){var statearr_31464 = state_31452;
(statearr_31464[(7)] = inst_31416);

(statearr_31464[(9)] = inst_31415);

return statearr_31464;
})();
var statearr_31465_31490 = state_31452__$1;
(statearr_31465_31490[(2)] = null);

(statearr_31465_31490[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (11))){
var inst_31416 = (state_31452[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31452,(10),Object,null,(9));
var inst_31425 = chs__$1.call(null,inst_31416);
var inst_31426 = done.call(null,inst_31416);
var inst_31427 = cljs.core.async.take_BANG_.call(null,inst_31425,inst_31426);
var state_31452__$1 = state_31452;
var statearr_31466_31491 = state_31452__$1;
(statearr_31466_31491[(2)] = inst_31427);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31452__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (9))){
var inst_31416 = (state_31452[(7)]);
var inst_31429 = (state_31452[(2)]);
var inst_31430 = (inst_31416 + (1));
var inst_31416__$1 = inst_31430;
var state_31452__$1 = (function (){var statearr_31467 = state_31452;
(statearr_31467[(10)] = inst_31429);

(statearr_31467[(7)] = inst_31416__$1);

return statearr_31467;
})();
var statearr_31468_31492 = state_31452__$1;
(statearr_31468_31492[(2)] = null);

(statearr_31468_31492[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (5))){
var inst_31436 = (state_31452[(2)]);
var state_31452__$1 = (function (){var statearr_31469 = state_31452;
(statearr_31469[(11)] = inst_31436);

return statearr_31469;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31452__$1,(12),dchan);
} else {
if((state_val_31453 === (14))){
var inst_31438 = (state_31452[(8)]);
var inst_31443 = cljs.core.apply.call(null,f,inst_31438);
var state_31452__$1 = state_31452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31452__$1,(16),out,inst_31443);
} else {
if((state_val_31453 === (16))){
var inst_31445 = (state_31452[(2)]);
var state_31452__$1 = (function (){var statearr_31470 = state_31452;
(statearr_31470[(12)] = inst_31445);

return statearr_31470;
})();
var statearr_31471_31493 = state_31452__$1;
(statearr_31471_31493[(2)] = null);

(statearr_31471_31493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (10))){
var inst_31420 = (state_31452[(2)]);
var inst_31421 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31452__$1 = (function (){var statearr_31472 = state_31452;
(statearr_31472[(13)] = inst_31420);

return statearr_31472;
})();
var statearr_31473_31494 = state_31452__$1;
(statearr_31473_31494[(2)] = inst_31421);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31452__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (8))){
var inst_31434 = (state_31452[(2)]);
var state_31452__$1 = state_31452;
var statearr_31474_31495 = state_31452__$1;
(statearr_31474_31495[(2)] = inst_31434);

(statearr_31474_31495[(1)] = (5));


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
var cljs$core$async$state_machine__29901__auto__ = null;
var cljs$core$async$state_machine__29901__auto____0 = (function (){
var statearr_31475 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31475[(0)] = cljs$core$async$state_machine__29901__auto__);

(statearr_31475[(1)] = (1));

return statearr_31475;
});
var cljs$core$async$state_machine__29901__auto____1 = (function (state_31452){
while(true){
var ret_value__29902__auto__ = (function (){try{while(true){
var result__29903__auto__ = switch__29900__auto__.call(null,state_31452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29903__auto__;
}
break;
}
}catch (e31476){if((e31476 instanceof Object)){
var ex__29904__auto__ = e31476;
var statearr_31477_31496 = state_31452;
(statearr_31477_31496[(5)] = ex__29904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31497 = state_31452;
state_31452 = G__31497;
continue;
} else {
return ret_value__29902__auto__;
}
break;
}
});
cljs$core$async$state_machine__29901__auto__ = function(state_31452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29901__auto____1.call(this,state_31452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29901__auto____0;
cljs$core$async$state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29901__auto____1;
return cljs$core$async$state_machine__29901__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_31478 = f__29918__auto__.call(null);
(statearr_31478[(6)] = c__29917__auto___31480);

return statearr_31478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29919__auto__);
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
var G__31500 = arguments.length;
switch (G__31500) {
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
var c__29917__auto___31554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29918__auto__ = (function (){var switch__29900__auto__ = (function (state_31532){
var state_val_31533 = (state_31532[(1)]);
if((state_val_31533 === (7))){
var inst_31512 = (state_31532[(7)]);
var inst_31511 = (state_31532[(8)]);
var inst_31511__$1 = (state_31532[(2)]);
var inst_31512__$1 = cljs.core.nth.call(null,inst_31511__$1,(0),null);
var inst_31513 = cljs.core.nth.call(null,inst_31511__$1,(1),null);
var inst_31514 = (inst_31512__$1 == null);
var state_31532__$1 = (function (){var statearr_31534 = state_31532;
(statearr_31534[(7)] = inst_31512__$1);

(statearr_31534[(9)] = inst_31513);

(statearr_31534[(8)] = inst_31511__$1);

return statearr_31534;
})();
if(cljs.core.truth_(inst_31514)){
var statearr_31535_31555 = state_31532__$1;
(statearr_31535_31555[(1)] = (8));

} else {
var statearr_31536_31556 = state_31532__$1;
(statearr_31536_31556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31533 === (1))){
var inst_31501 = cljs.core.vec.call(null,chs);
var inst_31502 = inst_31501;
var state_31532__$1 = (function (){var statearr_31537 = state_31532;
(statearr_31537[(10)] = inst_31502);

return statearr_31537;
})();
var statearr_31538_31557 = state_31532__$1;
(statearr_31538_31557[(2)] = null);

(statearr_31538_31557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31533 === (4))){
var inst_31502 = (state_31532[(10)]);
var state_31532__$1 = state_31532;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31532__$1,(7),inst_31502);
} else {
if((state_val_31533 === (6))){
var inst_31528 = (state_31532[(2)]);
var state_31532__$1 = state_31532;
var statearr_31539_31558 = state_31532__$1;
(statearr_31539_31558[(2)] = inst_31528);

(statearr_31539_31558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31533 === (3))){
var inst_31530 = (state_31532[(2)]);
var state_31532__$1 = state_31532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31532__$1,inst_31530);
} else {
if((state_val_31533 === (2))){
var inst_31502 = (state_31532[(10)]);
var inst_31504 = cljs.core.count.call(null,inst_31502);
var inst_31505 = (inst_31504 > (0));
var state_31532__$1 = state_31532;
if(cljs.core.truth_(inst_31505)){
var statearr_31541_31559 = state_31532__$1;
(statearr_31541_31559[(1)] = (4));

} else {
var statearr_31542_31560 = state_31532__$1;
(statearr_31542_31560[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31533 === (11))){
var inst_31502 = (state_31532[(10)]);
var inst_31521 = (state_31532[(2)]);
var tmp31540 = inst_31502;
var inst_31502__$1 = tmp31540;
var state_31532__$1 = (function (){var statearr_31543 = state_31532;
(statearr_31543[(10)] = inst_31502__$1);

(statearr_31543[(11)] = inst_31521);

return statearr_31543;
})();
var statearr_31544_31561 = state_31532__$1;
(statearr_31544_31561[(2)] = null);

(statearr_31544_31561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31533 === (9))){
var inst_31512 = (state_31532[(7)]);
var state_31532__$1 = state_31532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31532__$1,(11),out,inst_31512);
} else {
if((state_val_31533 === (5))){
var inst_31526 = cljs.core.async.close_BANG_.call(null,out);
var state_31532__$1 = state_31532;
var statearr_31545_31562 = state_31532__$1;
(statearr_31545_31562[(2)] = inst_31526);

(statearr_31545_31562[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31533 === (10))){
var inst_31524 = (state_31532[(2)]);
var state_31532__$1 = state_31532;
var statearr_31546_31563 = state_31532__$1;
(statearr_31546_31563[(2)] = inst_31524);

(statearr_31546_31563[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31533 === (8))){
var inst_31512 = (state_31532[(7)]);
var inst_31502 = (state_31532[(10)]);
var inst_31513 = (state_31532[(9)]);
var inst_31511 = (state_31532[(8)]);
var inst_31516 = (function (){var cs = inst_31502;
var vec__31507 = inst_31511;
var v = inst_31512;
var c = inst_31513;
return (function (p1__31498_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31498_SHARP_);
});
})();
var inst_31517 = cljs.core.filterv.call(null,inst_31516,inst_31502);
var inst_31502__$1 = inst_31517;
var state_31532__$1 = (function (){var statearr_31547 = state_31532;
(statearr_31547[(10)] = inst_31502__$1);

return statearr_31547;
})();
var statearr_31548_31564 = state_31532__$1;
(statearr_31548_31564[(2)] = null);

(statearr_31548_31564[(1)] = (2));


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
var cljs$core$async$state_machine__29901__auto__ = null;
var cljs$core$async$state_machine__29901__auto____0 = (function (){
var statearr_31549 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31549[(0)] = cljs$core$async$state_machine__29901__auto__);

(statearr_31549[(1)] = (1));

return statearr_31549;
});
var cljs$core$async$state_machine__29901__auto____1 = (function (state_31532){
while(true){
var ret_value__29902__auto__ = (function (){try{while(true){
var result__29903__auto__ = switch__29900__auto__.call(null,state_31532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29903__auto__;
}
break;
}
}catch (e31550){if((e31550 instanceof Object)){
var ex__29904__auto__ = e31550;
var statearr_31551_31565 = state_31532;
(statearr_31551_31565[(5)] = ex__29904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31566 = state_31532;
state_31532 = G__31566;
continue;
} else {
return ret_value__29902__auto__;
}
break;
}
});
cljs$core$async$state_machine__29901__auto__ = function(state_31532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29901__auto____1.call(this,state_31532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29901__auto____0;
cljs$core$async$state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29901__auto____1;
return cljs$core$async$state_machine__29901__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_31552 = f__29918__auto__.call(null);
(statearr_31552[(6)] = c__29917__auto___31554);

return statearr_31552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29919__auto__);
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
var G__31568 = arguments.length;
switch (G__31568) {
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
var c__29917__auto___31613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29918__auto__ = (function (){var switch__29900__auto__ = (function (state_31592){
var state_val_31593 = (state_31592[(1)]);
if((state_val_31593 === (7))){
var inst_31574 = (state_31592[(7)]);
var inst_31574__$1 = (state_31592[(2)]);
var inst_31575 = (inst_31574__$1 == null);
var inst_31576 = cljs.core.not.call(null,inst_31575);
var state_31592__$1 = (function (){var statearr_31594 = state_31592;
(statearr_31594[(7)] = inst_31574__$1);

return statearr_31594;
})();
if(inst_31576){
var statearr_31595_31614 = state_31592__$1;
(statearr_31595_31614[(1)] = (8));

} else {
var statearr_31596_31615 = state_31592__$1;
(statearr_31596_31615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (1))){
var inst_31569 = (0);
var state_31592__$1 = (function (){var statearr_31597 = state_31592;
(statearr_31597[(8)] = inst_31569);

return statearr_31597;
})();
var statearr_31598_31616 = state_31592__$1;
(statearr_31598_31616[(2)] = null);

(statearr_31598_31616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (4))){
var state_31592__$1 = state_31592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31592__$1,(7),ch);
} else {
if((state_val_31593 === (6))){
var inst_31587 = (state_31592[(2)]);
var state_31592__$1 = state_31592;
var statearr_31599_31617 = state_31592__$1;
(statearr_31599_31617[(2)] = inst_31587);

(statearr_31599_31617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (3))){
var inst_31589 = (state_31592[(2)]);
var inst_31590 = cljs.core.async.close_BANG_.call(null,out);
var state_31592__$1 = (function (){var statearr_31600 = state_31592;
(statearr_31600[(9)] = inst_31589);

return statearr_31600;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31592__$1,inst_31590);
} else {
if((state_val_31593 === (2))){
var inst_31569 = (state_31592[(8)]);
var inst_31571 = (inst_31569 < n);
var state_31592__$1 = state_31592;
if(cljs.core.truth_(inst_31571)){
var statearr_31601_31618 = state_31592__$1;
(statearr_31601_31618[(1)] = (4));

} else {
var statearr_31602_31619 = state_31592__$1;
(statearr_31602_31619[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (11))){
var inst_31569 = (state_31592[(8)]);
var inst_31579 = (state_31592[(2)]);
var inst_31580 = (inst_31569 + (1));
var inst_31569__$1 = inst_31580;
var state_31592__$1 = (function (){var statearr_31603 = state_31592;
(statearr_31603[(8)] = inst_31569__$1);

(statearr_31603[(10)] = inst_31579);

return statearr_31603;
})();
var statearr_31604_31620 = state_31592__$1;
(statearr_31604_31620[(2)] = null);

(statearr_31604_31620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (9))){
var state_31592__$1 = state_31592;
var statearr_31605_31621 = state_31592__$1;
(statearr_31605_31621[(2)] = null);

(statearr_31605_31621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (5))){
var state_31592__$1 = state_31592;
var statearr_31606_31622 = state_31592__$1;
(statearr_31606_31622[(2)] = null);

(statearr_31606_31622[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (10))){
var inst_31584 = (state_31592[(2)]);
var state_31592__$1 = state_31592;
var statearr_31607_31623 = state_31592__$1;
(statearr_31607_31623[(2)] = inst_31584);

(statearr_31607_31623[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (8))){
var inst_31574 = (state_31592[(7)]);
var state_31592__$1 = state_31592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31592__$1,(11),out,inst_31574);
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
var cljs$core$async$state_machine__29901__auto__ = null;
var cljs$core$async$state_machine__29901__auto____0 = (function (){
var statearr_31608 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31608[(0)] = cljs$core$async$state_machine__29901__auto__);

(statearr_31608[(1)] = (1));

return statearr_31608;
});
var cljs$core$async$state_machine__29901__auto____1 = (function (state_31592){
while(true){
var ret_value__29902__auto__ = (function (){try{while(true){
var result__29903__auto__ = switch__29900__auto__.call(null,state_31592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29903__auto__;
}
break;
}
}catch (e31609){if((e31609 instanceof Object)){
var ex__29904__auto__ = e31609;
var statearr_31610_31624 = state_31592;
(statearr_31610_31624[(5)] = ex__29904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31625 = state_31592;
state_31592 = G__31625;
continue;
} else {
return ret_value__29902__auto__;
}
break;
}
});
cljs$core$async$state_machine__29901__auto__ = function(state_31592){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29901__auto____1.call(this,state_31592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29901__auto____0;
cljs$core$async$state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29901__auto____1;
return cljs$core$async$state_machine__29901__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_31611 = f__29918__auto__.call(null);
(statearr_31611[(6)] = c__29917__auto___31613);

return statearr_31611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29919__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31627 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31627 = (function (f,ch,meta31628){
this.f = f;
this.ch = ch;
this.meta31628 = meta31628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31629,meta31628__$1){
var self__ = this;
var _31629__$1 = this;
return (new cljs.core.async.t_cljs$core$async31627(self__.f,self__.ch,meta31628__$1));
}));

(cljs.core.async.t_cljs$core$async31627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31629){
var self__ = this;
var _31629__$1 = this;
return self__.meta31628;
}));

(cljs.core.async.t_cljs$core$async31627.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31627.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async31627.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async31627.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31627.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31630 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31630 = (function (f,ch,meta31628,_,fn1,meta31631){
this.f = f;
this.ch = ch;
this.meta31628 = meta31628;
this._ = _;
this.fn1 = fn1;
this.meta31631 = meta31631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31632,meta31631__$1){
var self__ = this;
var _31632__$1 = this;
return (new cljs.core.async.t_cljs$core$async31630(self__.f,self__.ch,self__.meta31628,self__._,self__.fn1,meta31631__$1));
}));

(cljs.core.async.t_cljs$core$async31630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31632){
var self__ = this;
var _31632__$1 = this;
return self__.meta31631;
}));

(cljs.core.async.t_cljs$core$async31630.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31630.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31630.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31630.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__31626_SHARP_){
return f1.call(null,(((p1__31626_SHARP_ == null))?null:self__.f.call(null,p1__31626_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async31630.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31628","meta31628",267603710,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31627","cljs.core.async/t_cljs$core$async31627",-2004256185,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31631","meta31631",1441077017,null)], null);
}));

(cljs.core.async.t_cljs$core$async31630.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31630.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31630");

(cljs.core.async.t_cljs$core$async31630.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async31630");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31630.
 */
cljs.core.async.__GT_t_cljs$core$async31630 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31630(f__$1,ch__$1,meta31628__$1,___$2,fn1__$1,meta31631){
return (new cljs.core.async.t_cljs$core$async31630(f__$1,ch__$1,meta31628__$1,___$2,fn1__$1,meta31631));
});

}

return (new cljs.core.async.t_cljs$core$async31630(self__.f,self__.ch,self__.meta31628,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async31627.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31627.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31627.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31628","meta31628",267603710,null)], null);
}));

(cljs.core.async.t_cljs$core$async31627.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31627.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31627");

(cljs.core.async.t_cljs$core$async31627.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async31627");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31627.
 */
cljs.core.async.__GT_t_cljs$core$async31627 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31627(f__$1,ch__$1,meta31628){
return (new cljs.core.async.t_cljs$core$async31627(f__$1,ch__$1,meta31628));
});

}

return (new cljs.core.async.t_cljs$core$async31627(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31633 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31633 = (function (f,ch,meta31634){
this.f = f;
this.ch = ch;
this.meta31634 = meta31634;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31635,meta31634__$1){
var self__ = this;
var _31635__$1 = this;
return (new cljs.core.async.t_cljs$core$async31633(self__.f,self__.ch,meta31634__$1));
}));

(cljs.core.async.t_cljs$core$async31633.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31635){
var self__ = this;
var _31635__$1 = this;
return self__.meta31634;
}));

(cljs.core.async.t_cljs$core$async31633.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31633.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async31633.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31633.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31633.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31633.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async31633.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31634","meta31634",-1404254826,null)], null);
}));

(cljs.core.async.t_cljs$core$async31633.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31633.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31633");

(cljs.core.async.t_cljs$core$async31633.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async31633");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31633.
 */
cljs.core.async.__GT_t_cljs$core$async31633 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31633(f__$1,ch__$1,meta31634){
return (new cljs.core.async.t_cljs$core$async31633(f__$1,ch__$1,meta31634));
});

}

return (new cljs.core.async.t_cljs$core$async31633(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31636 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31636 = (function (p,ch,meta31637){
this.p = p;
this.ch = ch;
this.meta31637 = meta31637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31638,meta31637__$1){
var self__ = this;
var _31638__$1 = this;
return (new cljs.core.async.t_cljs$core$async31636(self__.p,self__.ch,meta31637__$1));
}));

(cljs.core.async.t_cljs$core$async31636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31638){
var self__ = this;
var _31638__$1 = this;
return self__.meta31637;
}));

(cljs.core.async.t_cljs$core$async31636.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31636.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async31636.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async31636.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31636.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31636.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31636.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31637","meta31637",2039038491,null)], null);
}));

(cljs.core.async.t_cljs$core$async31636.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31636.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31636");

(cljs.core.async.t_cljs$core$async31636.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async31636");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31636.
 */
cljs.core.async.__GT_t_cljs$core$async31636 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31636(p__$1,ch__$1,meta31637){
return (new cljs.core.async.t_cljs$core$async31636(p__$1,ch__$1,meta31637));
});

}

return (new cljs.core.async.t_cljs$core$async31636(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31640 = arguments.length;
switch (G__31640) {
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
var c__29917__auto___31680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29918__auto__ = (function (){var switch__29900__auto__ = (function (state_31661){
var state_val_31662 = (state_31661[(1)]);
if((state_val_31662 === (7))){
var inst_31657 = (state_31661[(2)]);
var state_31661__$1 = state_31661;
var statearr_31663_31681 = state_31661__$1;
(statearr_31663_31681[(2)] = inst_31657);

(statearr_31663_31681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (1))){
var state_31661__$1 = state_31661;
var statearr_31664_31682 = state_31661__$1;
(statearr_31664_31682[(2)] = null);

(statearr_31664_31682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (4))){
var inst_31643 = (state_31661[(7)]);
var inst_31643__$1 = (state_31661[(2)]);
var inst_31644 = (inst_31643__$1 == null);
var state_31661__$1 = (function (){var statearr_31665 = state_31661;
(statearr_31665[(7)] = inst_31643__$1);

return statearr_31665;
})();
if(cljs.core.truth_(inst_31644)){
var statearr_31666_31683 = state_31661__$1;
(statearr_31666_31683[(1)] = (5));

} else {
var statearr_31667_31684 = state_31661__$1;
(statearr_31667_31684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (6))){
var inst_31643 = (state_31661[(7)]);
var inst_31648 = p.call(null,inst_31643);
var state_31661__$1 = state_31661;
if(cljs.core.truth_(inst_31648)){
var statearr_31668_31685 = state_31661__$1;
(statearr_31668_31685[(1)] = (8));

} else {
var statearr_31669_31686 = state_31661__$1;
(statearr_31669_31686[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (3))){
var inst_31659 = (state_31661[(2)]);
var state_31661__$1 = state_31661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31661__$1,inst_31659);
} else {
if((state_val_31662 === (2))){
var state_31661__$1 = state_31661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31661__$1,(4),ch);
} else {
if((state_val_31662 === (11))){
var inst_31651 = (state_31661[(2)]);
var state_31661__$1 = state_31661;
var statearr_31670_31687 = state_31661__$1;
(statearr_31670_31687[(2)] = inst_31651);

(statearr_31670_31687[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (9))){
var state_31661__$1 = state_31661;
var statearr_31671_31688 = state_31661__$1;
(statearr_31671_31688[(2)] = null);

(statearr_31671_31688[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (5))){
var inst_31646 = cljs.core.async.close_BANG_.call(null,out);
var state_31661__$1 = state_31661;
var statearr_31672_31689 = state_31661__$1;
(statearr_31672_31689[(2)] = inst_31646);

(statearr_31672_31689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (10))){
var inst_31654 = (state_31661[(2)]);
var state_31661__$1 = (function (){var statearr_31673 = state_31661;
(statearr_31673[(8)] = inst_31654);

return statearr_31673;
})();
var statearr_31674_31690 = state_31661__$1;
(statearr_31674_31690[(2)] = null);

(statearr_31674_31690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (8))){
var inst_31643 = (state_31661[(7)]);
var state_31661__$1 = state_31661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31661__$1,(11),out,inst_31643);
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
var cljs$core$async$state_machine__29901__auto__ = null;
var cljs$core$async$state_machine__29901__auto____0 = (function (){
var statearr_31675 = [null,null,null,null,null,null,null,null,null];
(statearr_31675[(0)] = cljs$core$async$state_machine__29901__auto__);

(statearr_31675[(1)] = (1));

return statearr_31675;
});
var cljs$core$async$state_machine__29901__auto____1 = (function (state_31661){
while(true){
var ret_value__29902__auto__ = (function (){try{while(true){
var result__29903__auto__ = switch__29900__auto__.call(null,state_31661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29903__auto__;
}
break;
}
}catch (e31676){if((e31676 instanceof Object)){
var ex__29904__auto__ = e31676;
var statearr_31677_31691 = state_31661;
(statearr_31677_31691[(5)] = ex__29904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31692 = state_31661;
state_31661 = G__31692;
continue;
} else {
return ret_value__29902__auto__;
}
break;
}
});
cljs$core$async$state_machine__29901__auto__ = function(state_31661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29901__auto____1.call(this,state_31661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29901__auto____0;
cljs$core$async$state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29901__auto____1;
return cljs$core$async$state_machine__29901__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_31678 = f__29918__auto__.call(null);
(statearr_31678[(6)] = c__29917__auto___31680);

return statearr_31678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29919__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31694 = arguments.length;
switch (G__31694) {
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
var c__29917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29918__auto__ = (function (){var switch__29900__auto__ = (function (state_31757){
var state_val_31758 = (state_31757[(1)]);
if((state_val_31758 === (7))){
var inst_31753 = (state_31757[(2)]);
var state_31757__$1 = state_31757;
var statearr_31759_31797 = state_31757__$1;
(statearr_31759_31797[(2)] = inst_31753);

(statearr_31759_31797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (20))){
var inst_31723 = (state_31757[(7)]);
var inst_31734 = (state_31757[(2)]);
var inst_31735 = cljs.core.next.call(null,inst_31723);
var inst_31709 = inst_31735;
var inst_31710 = null;
var inst_31711 = (0);
var inst_31712 = (0);
var state_31757__$1 = (function (){var statearr_31760 = state_31757;
(statearr_31760[(8)] = inst_31710);

(statearr_31760[(9)] = inst_31734);

(statearr_31760[(10)] = inst_31709);

(statearr_31760[(11)] = inst_31712);

(statearr_31760[(12)] = inst_31711);

return statearr_31760;
})();
var statearr_31761_31798 = state_31757__$1;
(statearr_31761_31798[(2)] = null);

(statearr_31761_31798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (1))){
var state_31757__$1 = state_31757;
var statearr_31762_31799 = state_31757__$1;
(statearr_31762_31799[(2)] = null);

(statearr_31762_31799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (4))){
var inst_31698 = (state_31757[(13)]);
var inst_31698__$1 = (state_31757[(2)]);
var inst_31699 = (inst_31698__$1 == null);
var state_31757__$1 = (function (){var statearr_31763 = state_31757;
(statearr_31763[(13)] = inst_31698__$1);

return statearr_31763;
})();
if(cljs.core.truth_(inst_31699)){
var statearr_31764_31800 = state_31757__$1;
(statearr_31764_31800[(1)] = (5));

} else {
var statearr_31765_31801 = state_31757__$1;
(statearr_31765_31801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (15))){
var state_31757__$1 = state_31757;
var statearr_31769_31802 = state_31757__$1;
(statearr_31769_31802[(2)] = null);

(statearr_31769_31802[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (21))){
var state_31757__$1 = state_31757;
var statearr_31770_31803 = state_31757__$1;
(statearr_31770_31803[(2)] = null);

(statearr_31770_31803[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (13))){
var inst_31710 = (state_31757[(8)]);
var inst_31709 = (state_31757[(10)]);
var inst_31712 = (state_31757[(11)]);
var inst_31711 = (state_31757[(12)]);
var inst_31719 = (state_31757[(2)]);
var inst_31720 = (inst_31712 + (1));
var tmp31766 = inst_31710;
var tmp31767 = inst_31709;
var tmp31768 = inst_31711;
var inst_31709__$1 = tmp31767;
var inst_31710__$1 = tmp31766;
var inst_31711__$1 = tmp31768;
var inst_31712__$1 = inst_31720;
var state_31757__$1 = (function (){var statearr_31771 = state_31757;
(statearr_31771[(8)] = inst_31710__$1);

(statearr_31771[(10)] = inst_31709__$1);

(statearr_31771[(11)] = inst_31712__$1);

(statearr_31771[(12)] = inst_31711__$1);

(statearr_31771[(14)] = inst_31719);

return statearr_31771;
})();
var statearr_31772_31804 = state_31757__$1;
(statearr_31772_31804[(2)] = null);

(statearr_31772_31804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (22))){
var state_31757__$1 = state_31757;
var statearr_31773_31805 = state_31757__$1;
(statearr_31773_31805[(2)] = null);

(statearr_31773_31805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (6))){
var inst_31698 = (state_31757[(13)]);
var inst_31707 = f.call(null,inst_31698);
var inst_31708 = cljs.core.seq.call(null,inst_31707);
var inst_31709 = inst_31708;
var inst_31710 = null;
var inst_31711 = (0);
var inst_31712 = (0);
var state_31757__$1 = (function (){var statearr_31774 = state_31757;
(statearr_31774[(8)] = inst_31710);

(statearr_31774[(10)] = inst_31709);

(statearr_31774[(11)] = inst_31712);

(statearr_31774[(12)] = inst_31711);

return statearr_31774;
})();
var statearr_31775_31806 = state_31757__$1;
(statearr_31775_31806[(2)] = null);

(statearr_31775_31806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (17))){
var inst_31723 = (state_31757[(7)]);
var inst_31727 = cljs.core.chunk_first.call(null,inst_31723);
var inst_31728 = cljs.core.chunk_rest.call(null,inst_31723);
var inst_31729 = cljs.core.count.call(null,inst_31727);
var inst_31709 = inst_31728;
var inst_31710 = inst_31727;
var inst_31711 = inst_31729;
var inst_31712 = (0);
var state_31757__$1 = (function (){var statearr_31776 = state_31757;
(statearr_31776[(8)] = inst_31710);

(statearr_31776[(10)] = inst_31709);

(statearr_31776[(11)] = inst_31712);

(statearr_31776[(12)] = inst_31711);

return statearr_31776;
})();
var statearr_31777_31807 = state_31757__$1;
(statearr_31777_31807[(2)] = null);

(statearr_31777_31807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (3))){
var inst_31755 = (state_31757[(2)]);
var state_31757__$1 = state_31757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31757__$1,inst_31755);
} else {
if((state_val_31758 === (12))){
var inst_31743 = (state_31757[(2)]);
var state_31757__$1 = state_31757;
var statearr_31778_31808 = state_31757__$1;
(statearr_31778_31808[(2)] = inst_31743);

(statearr_31778_31808[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (2))){
var state_31757__$1 = state_31757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31757__$1,(4),in$);
} else {
if((state_val_31758 === (23))){
var inst_31751 = (state_31757[(2)]);
var state_31757__$1 = state_31757;
var statearr_31779_31809 = state_31757__$1;
(statearr_31779_31809[(2)] = inst_31751);

(statearr_31779_31809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (19))){
var inst_31738 = (state_31757[(2)]);
var state_31757__$1 = state_31757;
var statearr_31780_31810 = state_31757__$1;
(statearr_31780_31810[(2)] = inst_31738);

(statearr_31780_31810[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (11))){
var inst_31723 = (state_31757[(7)]);
var inst_31709 = (state_31757[(10)]);
var inst_31723__$1 = cljs.core.seq.call(null,inst_31709);
var state_31757__$1 = (function (){var statearr_31781 = state_31757;
(statearr_31781[(7)] = inst_31723__$1);

return statearr_31781;
})();
if(inst_31723__$1){
var statearr_31782_31811 = state_31757__$1;
(statearr_31782_31811[(1)] = (14));

} else {
var statearr_31783_31812 = state_31757__$1;
(statearr_31783_31812[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (9))){
var inst_31745 = (state_31757[(2)]);
var inst_31746 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31757__$1 = (function (){var statearr_31784 = state_31757;
(statearr_31784[(15)] = inst_31745);

return statearr_31784;
})();
if(cljs.core.truth_(inst_31746)){
var statearr_31785_31813 = state_31757__$1;
(statearr_31785_31813[(1)] = (21));

} else {
var statearr_31786_31814 = state_31757__$1;
(statearr_31786_31814[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (5))){
var inst_31701 = cljs.core.async.close_BANG_.call(null,out);
var state_31757__$1 = state_31757;
var statearr_31787_31815 = state_31757__$1;
(statearr_31787_31815[(2)] = inst_31701);

(statearr_31787_31815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (14))){
var inst_31723 = (state_31757[(7)]);
var inst_31725 = cljs.core.chunked_seq_QMARK_.call(null,inst_31723);
var state_31757__$1 = state_31757;
if(inst_31725){
var statearr_31788_31816 = state_31757__$1;
(statearr_31788_31816[(1)] = (17));

} else {
var statearr_31789_31817 = state_31757__$1;
(statearr_31789_31817[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (16))){
var inst_31741 = (state_31757[(2)]);
var state_31757__$1 = state_31757;
var statearr_31790_31818 = state_31757__$1;
(statearr_31790_31818[(2)] = inst_31741);

(statearr_31790_31818[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (10))){
var inst_31710 = (state_31757[(8)]);
var inst_31712 = (state_31757[(11)]);
var inst_31717 = cljs.core._nth.call(null,inst_31710,inst_31712);
var state_31757__$1 = state_31757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31757__$1,(13),out,inst_31717);
} else {
if((state_val_31758 === (18))){
var inst_31723 = (state_31757[(7)]);
var inst_31732 = cljs.core.first.call(null,inst_31723);
var state_31757__$1 = state_31757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31757__$1,(20),out,inst_31732);
} else {
if((state_val_31758 === (8))){
var inst_31712 = (state_31757[(11)]);
var inst_31711 = (state_31757[(12)]);
var inst_31714 = (inst_31712 < inst_31711);
var inst_31715 = inst_31714;
var state_31757__$1 = state_31757;
if(cljs.core.truth_(inst_31715)){
var statearr_31791_31819 = state_31757__$1;
(statearr_31791_31819[(1)] = (10));

} else {
var statearr_31792_31820 = state_31757__$1;
(statearr_31792_31820[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__29901__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29901__auto____0 = (function (){
var statearr_31793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31793[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29901__auto__);

(statearr_31793[(1)] = (1));

return statearr_31793;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29901__auto____1 = (function (state_31757){
while(true){
var ret_value__29902__auto__ = (function (){try{while(true){
var result__29903__auto__ = switch__29900__auto__.call(null,state_31757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29903__auto__;
}
break;
}
}catch (e31794){if((e31794 instanceof Object)){
var ex__29904__auto__ = e31794;
var statearr_31795_31821 = state_31757;
(statearr_31795_31821[(5)] = ex__29904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31822 = state_31757;
state_31757 = G__31822;
continue;
} else {
return ret_value__29902__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29901__auto__ = function(state_31757){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29901__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29901__auto____1.call(this,state_31757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29901__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29901__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29901__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_31796 = f__29918__auto__.call(null);
(statearr_31796[(6)] = c__29917__auto__);

return statearr_31796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29919__auto__);
}));

return c__29917__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31824 = arguments.length;
switch (G__31824) {
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
var G__31827 = arguments.length;
switch (G__31827) {
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
var G__31830 = arguments.length;
switch (G__31830) {
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
var c__29917__auto___31877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29918__auto__ = (function (){var switch__29900__auto__ = (function (state_31854){
var state_val_31855 = (state_31854[(1)]);
if((state_val_31855 === (7))){
var inst_31849 = (state_31854[(2)]);
var state_31854__$1 = state_31854;
var statearr_31856_31878 = state_31854__$1;
(statearr_31856_31878[(2)] = inst_31849);

(statearr_31856_31878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31855 === (1))){
var inst_31831 = null;
var state_31854__$1 = (function (){var statearr_31857 = state_31854;
(statearr_31857[(7)] = inst_31831);

return statearr_31857;
})();
var statearr_31858_31879 = state_31854__$1;
(statearr_31858_31879[(2)] = null);

(statearr_31858_31879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31855 === (4))){
var inst_31834 = (state_31854[(8)]);
var inst_31834__$1 = (state_31854[(2)]);
var inst_31835 = (inst_31834__$1 == null);
var inst_31836 = cljs.core.not.call(null,inst_31835);
var state_31854__$1 = (function (){var statearr_31859 = state_31854;
(statearr_31859[(8)] = inst_31834__$1);

return statearr_31859;
})();
if(inst_31836){
var statearr_31860_31880 = state_31854__$1;
(statearr_31860_31880[(1)] = (5));

} else {
var statearr_31861_31881 = state_31854__$1;
(statearr_31861_31881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31855 === (6))){
var state_31854__$1 = state_31854;
var statearr_31862_31882 = state_31854__$1;
(statearr_31862_31882[(2)] = null);

(statearr_31862_31882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31855 === (3))){
var inst_31851 = (state_31854[(2)]);
var inst_31852 = cljs.core.async.close_BANG_.call(null,out);
var state_31854__$1 = (function (){var statearr_31863 = state_31854;
(statearr_31863[(9)] = inst_31851);

return statearr_31863;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31854__$1,inst_31852);
} else {
if((state_val_31855 === (2))){
var state_31854__$1 = state_31854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31854__$1,(4),ch);
} else {
if((state_val_31855 === (11))){
var inst_31834 = (state_31854[(8)]);
var inst_31843 = (state_31854[(2)]);
var inst_31831 = inst_31834;
var state_31854__$1 = (function (){var statearr_31864 = state_31854;
(statearr_31864[(10)] = inst_31843);

(statearr_31864[(7)] = inst_31831);

return statearr_31864;
})();
var statearr_31865_31883 = state_31854__$1;
(statearr_31865_31883[(2)] = null);

(statearr_31865_31883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31855 === (9))){
var inst_31834 = (state_31854[(8)]);
var state_31854__$1 = state_31854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31854__$1,(11),out,inst_31834);
} else {
if((state_val_31855 === (5))){
var inst_31834 = (state_31854[(8)]);
var inst_31831 = (state_31854[(7)]);
var inst_31838 = cljs.core._EQ_.call(null,inst_31834,inst_31831);
var state_31854__$1 = state_31854;
if(inst_31838){
var statearr_31867_31884 = state_31854__$1;
(statearr_31867_31884[(1)] = (8));

} else {
var statearr_31868_31885 = state_31854__$1;
(statearr_31868_31885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31855 === (10))){
var inst_31846 = (state_31854[(2)]);
var state_31854__$1 = state_31854;
var statearr_31869_31886 = state_31854__$1;
(statearr_31869_31886[(2)] = inst_31846);

(statearr_31869_31886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31855 === (8))){
var inst_31831 = (state_31854[(7)]);
var tmp31866 = inst_31831;
var inst_31831__$1 = tmp31866;
var state_31854__$1 = (function (){var statearr_31870 = state_31854;
(statearr_31870[(7)] = inst_31831__$1);

return statearr_31870;
})();
var statearr_31871_31887 = state_31854__$1;
(statearr_31871_31887[(2)] = null);

(statearr_31871_31887[(1)] = (2));


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
var cljs$core$async$state_machine__29901__auto__ = null;
var cljs$core$async$state_machine__29901__auto____0 = (function (){
var statearr_31872 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31872[(0)] = cljs$core$async$state_machine__29901__auto__);

(statearr_31872[(1)] = (1));

return statearr_31872;
});
var cljs$core$async$state_machine__29901__auto____1 = (function (state_31854){
while(true){
var ret_value__29902__auto__ = (function (){try{while(true){
var result__29903__auto__ = switch__29900__auto__.call(null,state_31854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29903__auto__;
}
break;
}
}catch (e31873){if((e31873 instanceof Object)){
var ex__29904__auto__ = e31873;
var statearr_31874_31888 = state_31854;
(statearr_31874_31888[(5)] = ex__29904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31889 = state_31854;
state_31854 = G__31889;
continue;
} else {
return ret_value__29902__auto__;
}
break;
}
});
cljs$core$async$state_machine__29901__auto__ = function(state_31854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29901__auto____1.call(this,state_31854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29901__auto____0;
cljs$core$async$state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29901__auto____1;
return cljs$core$async$state_machine__29901__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_31875 = f__29918__auto__.call(null);
(statearr_31875[(6)] = c__29917__auto___31877);

return statearr_31875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29919__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31891 = arguments.length;
switch (G__31891) {
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
var c__29917__auto___31957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29918__auto__ = (function (){var switch__29900__auto__ = (function (state_31929){
var state_val_31930 = (state_31929[(1)]);
if((state_val_31930 === (7))){
var inst_31925 = (state_31929[(2)]);
var state_31929__$1 = state_31929;
var statearr_31931_31958 = state_31929__$1;
(statearr_31931_31958[(2)] = inst_31925);

(statearr_31931_31958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (1))){
var inst_31892 = (new Array(n));
var inst_31893 = inst_31892;
var inst_31894 = (0);
var state_31929__$1 = (function (){var statearr_31932 = state_31929;
(statearr_31932[(7)] = inst_31893);

(statearr_31932[(8)] = inst_31894);

return statearr_31932;
})();
var statearr_31933_31959 = state_31929__$1;
(statearr_31933_31959[(2)] = null);

(statearr_31933_31959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (4))){
var inst_31897 = (state_31929[(9)]);
var inst_31897__$1 = (state_31929[(2)]);
var inst_31898 = (inst_31897__$1 == null);
var inst_31899 = cljs.core.not.call(null,inst_31898);
var state_31929__$1 = (function (){var statearr_31934 = state_31929;
(statearr_31934[(9)] = inst_31897__$1);

return statearr_31934;
})();
if(inst_31899){
var statearr_31935_31960 = state_31929__$1;
(statearr_31935_31960[(1)] = (5));

} else {
var statearr_31936_31961 = state_31929__$1;
(statearr_31936_31961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (15))){
var inst_31919 = (state_31929[(2)]);
var state_31929__$1 = state_31929;
var statearr_31937_31962 = state_31929__$1;
(statearr_31937_31962[(2)] = inst_31919);

(statearr_31937_31962[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (13))){
var state_31929__$1 = state_31929;
var statearr_31938_31963 = state_31929__$1;
(statearr_31938_31963[(2)] = null);

(statearr_31938_31963[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (6))){
var inst_31894 = (state_31929[(8)]);
var inst_31915 = (inst_31894 > (0));
var state_31929__$1 = state_31929;
if(cljs.core.truth_(inst_31915)){
var statearr_31939_31964 = state_31929__$1;
(statearr_31939_31964[(1)] = (12));

} else {
var statearr_31940_31965 = state_31929__$1;
(statearr_31940_31965[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (3))){
var inst_31927 = (state_31929[(2)]);
var state_31929__$1 = state_31929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31929__$1,inst_31927);
} else {
if((state_val_31930 === (12))){
var inst_31893 = (state_31929[(7)]);
var inst_31917 = cljs.core.vec.call(null,inst_31893);
var state_31929__$1 = state_31929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31929__$1,(15),out,inst_31917);
} else {
if((state_val_31930 === (2))){
var state_31929__$1 = state_31929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31929__$1,(4),ch);
} else {
if((state_val_31930 === (11))){
var inst_31909 = (state_31929[(2)]);
var inst_31910 = (new Array(n));
var inst_31893 = inst_31910;
var inst_31894 = (0);
var state_31929__$1 = (function (){var statearr_31941 = state_31929;
(statearr_31941[(7)] = inst_31893);

(statearr_31941[(10)] = inst_31909);

(statearr_31941[(8)] = inst_31894);

return statearr_31941;
})();
var statearr_31942_31966 = state_31929__$1;
(statearr_31942_31966[(2)] = null);

(statearr_31942_31966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (9))){
var inst_31893 = (state_31929[(7)]);
var inst_31907 = cljs.core.vec.call(null,inst_31893);
var state_31929__$1 = state_31929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31929__$1,(11),out,inst_31907);
} else {
if((state_val_31930 === (5))){
var inst_31902 = (state_31929[(11)]);
var inst_31897 = (state_31929[(9)]);
var inst_31893 = (state_31929[(7)]);
var inst_31894 = (state_31929[(8)]);
var inst_31901 = (inst_31893[inst_31894] = inst_31897);
var inst_31902__$1 = (inst_31894 + (1));
var inst_31903 = (inst_31902__$1 < n);
var state_31929__$1 = (function (){var statearr_31943 = state_31929;
(statearr_31943[(11)] = inst_31902__$1);

(statearr_31943[(12)] = inst_31901);

return statearr_31943;
})();
if(cljs.core.truth_(inst_31903)){
var statearr_31944_31967 = state_31929__$1;
(statearr_31944_31967[(1)] = (8));

} else {
var statearr_31945_31968 = state_31929__$1;
(statearr_31945_31968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (14))){
var inst_31922 = (state_31929[(2)]);
var inst_31923 = cljs.core.async.close_BANG_.call(null,out);
var state_31929__$1 = (function (){var statearr_31947 = state_31929;
(statearr_31947[(13)] = inst_31922);

return statearr_31947;
})();
var statearr_31948_31969 = state_31929__$1;
(statearr_31948_31969[(2)] = inst_31923);

(statearr_31948_31969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (10))){
var inst_31913 = (state_31929[(2)]);
var state_31929__$1 = state_31929;
var statearr_31949_31970 = state_31929__$1;
(statearr_31949_31970[(2)] = inst_31913);

(statearr_31949_31970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (8))){
var inst_31902 = (state_31929[(11)]);
var inst_31893 = (state_31929[(7)]);
var tmp31946 = inst_31893;
var inst_31893__$1 = tmp31946;
var inst_31894 = inst_31902;
var state_31929__$1 = (function (){var statearr_31950 = state_31929;
(statearr_31950[(7)] = inst_31893__$1);

(statearr_31950[(8)] = inst_31894);

return statearr_31950;
})();
var statearr_31951_31971 = state_31929__$1;
(statearr_31951_31971[(2)] = null);

(statearr_31951_31971[(1)] = (2));


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
var cljs$core$async$state_machine__29901__auto__ = null;
var cljs$core$async$state_machine__29901__auto____0 = (function (){
var statearr_31952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31952[(0)] = cljs$core$async$state_machine__29901__auto__);

(statearr_31952[(1)] = (1));

return statearr_31952;
});
var cljs$core$async$state_machine__29901__auto____1 = (function (state_31929){
while(true){
var ret_value__29902__auto__ = (function (){try{while(true){
var result__29903__auto__ = switch__29900__auto__.call(null,state_31929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29903__auto__;
}
break;
}
}catch (e31953){if((e31953 instanceof Object)){
var ex__29904__auto__ = e31953;
var statearr_31954_31972 = state_31929;
(statearr_31954_31972[(5)] = ex__29904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31973 = state_31929;
state_31929 = G__31973;
continue;
} else {
return ret_value__29902__auto__;
}
break;
}
});
cljs$core$async$state_machine__29901__auto__ = function(state_31929){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29901__auto____1.call(this,state_31929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29901__auto____0;
cljs$core$async$state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29901__auto____1;
return cljs$core$async$state_machine__29901__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_31955 = f__29918__auto__.call(null);
(statearr_31955[(6)] = c__29917__auto___31957);

return statearr_31955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29919__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31975 = arguments.length;
switch (G__31975) {
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
var c__29917__auto___32045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29918__auto__ = (function (){var switch__29900__auto__ = (function (state_32017){
var state_val_32018 = (state_32017[(1)]);
if((state_val_32018 === (7))){
var inst_32013 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
var statearr_32019_32046 = state_32017__$1;
(statearr_32019_32046[(2)] = inst_32013);

(statearr_32019_32046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (1))){
var inst_31976 = [];
var inst_31977 = inst_31976;
var inst_31978 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32017__$1 = (function (){var statearr_32020 = state_32017;
(statearr_32020[(7)] = inst_31977);

(statearr_32020[(8)] = inst_31978);

return statearr_32020;
})();
var statearr_32021_32047 = state_32017__$1;
(statearr_32021_32047[(2)] = null);

(statearr_32021_32047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (4))){
var inst_31981 = (state_32017[(9)]);
var inst_31981__$1 = (state_32017[(2)]);
var inst_31982 = (inst_31981__$1 == null);
var inst_31983 = cljs.core.not.call(null,inst_31982);
var state_32017__$1 = (function (){var statearr_32022 = state_32017;
(statearr_32022[(9)] = inst_31981__$1);

return statearr_32022;
})();
if(inst_31983){
var statearr_32023_32048 = state_32017__$1;
(statearr_32023_32048[(1)] = (5));

} else {
var statearr_32024_32049 = state_32017__$1;
(statearr_32024_32049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (15))){
var inst_32007 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
var statearr_32025_32050 = state_32017__$1;
(statearr_32025_32050[(2)] = inst_32007);

(statearr_32025_32050[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (13))){
var state_32017__$1 = state_32017;
var statearr_32026_32051 = state_32017__$1;
(statearr_32026_32051[(2)] = null);

(statearr_32026_32051[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (6))){
var inst_31977 = (state_32017[(7)]);
var inst_32002 = inst_31977.length;
var inst_32003 = (inst_32002 > (0));
var state_32017__$1 = state_32017;
if(cljs.core.truth_(inst_32003)){
var statearr_32027_32052 = state_32017__$1;
(statearr_32027_32052[(1)] = (12));

} else {
var statearr_32028_32053 = state_32017__$1;
(statearr_32028_32053[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (3))){
var inst_32015 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32017__$1,inst_32015);
} else {
if((state_val_32018 === (12))){
var inst_31977 = (state_32017[(7)]);
var inst_32005 = cljs.core.vec.call(null,inst_31977);
var state_32017__$1 = state_32017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32017__$1,(15),out,inst_32005);
} else {
if((state_val_32018 === (2))){
var state_32017__$1 = state_32017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32017__$1,(4),ch);
} else {
if((state_val_32018 === (11))){
var inst_31985 = (state_32017[(10)]);
var inst_31981 = (state_32017[(9)]);
var inst_31995 = (state_32017[(2)]);
var inst_31996 = [];
var inst_31997 = inst_31996.push(inst_31981);
var inst_31977 = inst_31996;
var inst_31978 = inst_31985;
var state_32017__$1 = (function (){var statearr_32029 = state_32017;
(statearr_32029[(11)] = inst_31997);

(statearr_32029[(7)] = inst_31977);

(statearr_32029[(12)] = inst_31995);

(statearr_32029[(8)] = inst_31978);

return statearr_32029;
})();
var statearr_32030_32054 = state_32017__$1;
(statearr_32030_32054[(2)] = null);

(statearr_32030_32054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (9))){
var inst_31977 = (state_32017[(7)]);
var inst_31993 = cljs.core.vec.call(null,inst_31977);
var state_32017__$1 = state_32017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32017__$1,(11),out,inst_31993);
} else {
if((state_val_32018 === (5))){
var inst_31978 = (state_32017[(8)]);
var inst_31985 = (state_32017[(10)]);
var inst_31981 = (state_32017[(9)]);
var inst_31985__$1 = f.call(null,inst_31981);
var inst_31986 = cljs.core._EQ_.call(null,inst_31985__$1,inst_31978);
var inst_31987 = cljs.core.keyword_identical_QMARK_.call(null,inst_31978,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31988 = ((inst_31986) || (inst_31987));
var state_32017__$1 = (function (){var statearr_32031 = state_32017;
(statearr_32031[(10)] = inst_31985__$1);

return statearr_32031;
})();
if(cljs.core.truth_(inst_31988)){
var statearr_32032_32055 = state_32017__$1;
(statearr_32032_32055[(1)] = (8));

} else {
var statearr_32033_32056 = state_32017__$1;
(statearr_32033_32056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (14))){
var inst_32010 = (state_32017[(2)]);
var inst_32011 = cljs.core.async.close_BANG_.call(null,out);
var state_32017__$1 = (function (){var statearr_32035 = state_32017;
(statearr_32035[(13)] = inst_32010);

return statearr_32035;
})();
var statearr_32036_32057 = state_32017__$1;
(statearr_32036_32057[(2)] = inst_32011);

(statearr_32036_32057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (10))){
var inst_32000 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
var statearr_32037_32058 = state_32017__$1;
(statearr_32037_32058[(2)] = inst_32000);

(statearr_32037_32058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (8))){
var inst_31977 = (state_32017[(7)]);
var inst_31985 = (state_32017[(10)]);
var inst_31981 = (state_32017[(9)]);
var inst_31990 = inst_31977.push(inst_31981);
var tmp32034 = inst_31977;
var inst_31977__$1 = tmp32034;
var inst_31978 = inst_31985;
var state_32017__$1 = (function (){var statearr_32038 = state_32017;
(statearr_32038[(7)] = inst_31977__$1);

(statearr_32038[(8)] = inst_31978);

(statearr_32038[(14)] = inst_31990);

return statearr_32038;
})();
var statearr_32039_32059 = state_32017__$1;
(statearr_32039_32059[(2)] = null);

(statearr_32039_32059[(1)] = (2));


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
var cljs$core$async$state_machine__29901__auto__ = null;
var cljs$core$async$state_machine__29901__auto____0 = (function (){
var statearr_32040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32040[(0)] = cljs$core$async$state_machine__29901__auto__);

(statearr_32040[(1)] = (1));

return statearr_32040;
});
var cljs$core$async$state_machine__29901__auto____1 = (function (state_32017){
while(true){
var ret_value__29902__auto__ = (function (){try{while(true){
var result__29903__auto__ = switch__29900__auto__.call(null,state_32017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29903__auto__;
}
break;
}
}catch (e32041){if((e32041 instanceof Object)){
var ex__29904__auto__ = e32041;
var statearr_32042_32060 = state_32017;
(statearr_32042_32060[(5)] = ex__29904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32061 = state_32017;
state_32017 = G__32061;
continue;
} else {
return ret_value__29902__auto__;
}
break;
}
});
cljs$core$async$state_machine__29901__auto__ = function(state_32017){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29901__auto____1.call(this,state_32017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29901__auto____0;
cljs$core$async$state_machine__29901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29901__auto____1;
return cljs$core$async$state_machine__29901__auto__;
})()
})();
var state__29919__auto__ = (function (){var statearr_32043 = f__29918__auto__.call(null);
(statearr_32043[(6)] = c__29917__auto___32045);

return statearr_32043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29919__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1602507663459
