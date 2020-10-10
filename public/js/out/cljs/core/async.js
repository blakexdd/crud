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
var G__27849 = arguments.length;
switch (G__27849) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27850 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27850 = (function (f,blockable,meta27851){
this.f = f;
this.blockable = blockable;
this.meta27851 = meta27851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27852,meta27851__$1){
var self__ = this;
var _27852__$1 = this;
return (new cljs.core.async.t_cljs$core$async27850(self__.f,self__.blockable,meta27851__$1));
}));

(cljs.core.async.t_cljs$core$async27850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27852){
var self__ = this;
var _27852__$1 = this;
return self__.meta27851;
}));

(cljs.core.async.t_cljs$core$async27850.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27850.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27850.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async27850.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async27850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27851","meta27851",-2048180358,null)], null);
}));

(cljs.core.async.t_cljs$core$async27850.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27850.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27850");

(cljs.core.async.t_cljs$core$async27850.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27850");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27850.
 */
cljs.core.async.__GT_t_cljs$core$async27850 = (function cljs$core$async$__GT_t_cljs$core$async27850(f__$1,blockable__$1,meta27851){
return (new cljs.core.async.t_cljs$core$async27850(f__$1,blockable__$1,meta27851));
});

}

return (new cljs.core.async.t_cljs$core$async27850(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27856 = arguments.length;
switch (G__27856) {
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
var G__27859 = arguments.length;
switch (G__27859) {
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
var G__27862 = arguments.length;
switch (G__27862) {
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
var val_27864 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27864);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_27864);
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
var G__27866 = arguments.length;
switch (G__27866) {
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
var n__4613__auto___27868 = n;
var x_27869 = (0);
while(true){
if((x_27869 < n__4613__auto___27868)){
(a[x_27869] = (0));

var G__27870 = (x_27869 + (1));
x_27869 = G__27870;
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

var G__27871 = (i + (1));
i = G__27871;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27872 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27872 = (function (flag,meta27873){
this.flag = flag;
this.meta27873 = meta27873;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27874,meta27873__$1){
var self__ = this;
var _27874__$1 = this;
return (new cljs.core.async.t_cljs$core$async27872(self__.flag,meta27873__$1));
}));

(cljs.core.async.t_cljs$core$async27872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27874){
var self__ = this;
var _27874__$1 = this;
return self__.meta27873;
}));

(cljs.core.async.t_cljs$core$async27872.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27872.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async27872.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27872.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async27872.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27873","meta27873",-1679545711,null)], null);
}));

(cljs.core.async.t_cljs$core$async27872.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27872.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27872");

(cljs.core.async.t_cljs$core$async27872.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27872");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27872.
 */
cljs.core.async.__GT_t_cljs$core$async27872 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27872(flag__$1,meta27873){
return (new cljs.core.async.t_cljs$core$async27872(flag__$1,meta27873));
});

}

return (new cljs.core.async.t_cljs$core$async27872(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27875 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27875 = (function (flag,cb,meta27876){
this.flag = flag;
this.cb = cb;
this.meta27876 = meta27876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27877,meta27876__$1){
var self__ = this;
var _27877__$1 = this;
return (new cljs.core.async.t_cljs$core$async27875(self__.flag,self__.cb,meta27876__$1));
}));

(cljs.core.async.t_cljs$core$async27875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27877){
var self__ = this;
var _27877__$1 = this;
return self__.meta27876;
}));

(cljs.core.async.t_cljs$core$async27875.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27875.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async27875.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27875.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async27875.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27876","meta27876",-1543441497,null)], null);
}));

(cljs.core.async.t_cljs$core$async27875.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27875.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27875");

(cljs.core.async.t_cljs$core$async27875.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27875");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27875.
 */
cljs.core.async.__GT_t_cljs$core$async27875 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27875(flag__$1,cb__$1,meta27876){
return (new cljs.core.async.t_cljs$core$async27875(flag__$1,cb__$1,meta27876));
});

}

return (new cljs.core.async.t_cljs$core$async27875(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27878_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27878_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27879_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27879_SHARP_,port], null));
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
var G__27880 = (i + (1));
i = G__27880;
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
var len__4736__auto___27886 = arguments.length;
var i__4737__auto___27887 = (0);
while(true){
if((i__4737__auto___27887 < len__4736__auto___27886)){
args__4742__auto__.push((arguments[i__4737__auto___27887]));

var G__27888 = (i__4737__auto___27887 + (1));
i__4737__auto___27887 = G__27888;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27883){
var map__27884 = p__27883;
var map__27884__$1 = (((((!((map__27884 == null))))?(((((map__27884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27884):map__27884);
var opts = map__27884__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27881){
var G__27882 = cljs.core.first.call(null,seq27881);
var seq27881__$1 = cljs.core.next.call(null,seq27881);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27882,seq27881__$1);
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
var G__27890 = arguments.length;
switch (G__27890) {
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
var c__27789__auto___27936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27790__auto__ = (function (){var switch__27694__auto__ = (function (state_27914){
var state_val_27915 = (state_27914[(1)]);
if((state_val_27915 === (7))){
var inst_27910 = (state_27914[(2)]);
var state_27914__$1 = state_27914;
var statearr_27916_27937 = state_27914__$1;
(statearr_27916_27937[(2)] = inst_27910);

(statearr_27916_27937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27915 === (1))){
var state_27914__$1 = state_27914;
var statearr_27917_27938 = state_27914__$1;
(statearr_27917_27938[(2)] = null);

(statearr_27917_27938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27915 === (4))){
var inst_27893 = (state_27914[(7)]);
var inst_27893__$1 = (state_27914[(2)]);
var inst_27894 = (inst_27893__$1 == null);
var state_27914__$1 = (function (){var statearr_27918 = state_27914;
(statearr_27918[(7)] = inst_27893__$1);

return statearr_27918;
})();
if(cljs.core.truth_(inst_27894)){
var statearr_27919_27939 = state_27914__$1;
(statearr_27919_27939[(1)] = (5));

} else {
var statearr_27920_27940 = state_27914__$1;
(statearr_27920_27940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27915 === (13))){
var state_27914__$1 = state_27914;
var statearr_27921_27941 = state_27914__$1;
(statearr_27921_27941[(2)] = null);

(statearr_27921_27941[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27915 === (6))){
var inst_27893 = (state_27914[(7)]);
var state_27914__$1 = state_27914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27914__$1,(11),to,inst_27893);
} else {
if((state_val_27915 === (3))){
var inst_27912 = (state_27914[(2)]);
var state_27914__$1 = state_27914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27914__$1,inst_27912);
} else {
if((state_val_27915 === (12))){
var state_27914__$1 = state_27914;
var statearr_27922_27942 = state_27914__$1;
(statearr_27922_27942[(2)] = null);

(statearr_27922_27942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27915 === (2))){
var state_27914__$1 = state_27914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27914__$1,(4),from);
} else {
if((state_val_27915 === (11))){
var inst_27903 = (state_27914[(2)]);
var state_27914__$1 = state_27914;
if(cljs.core.truth_(inst_27903)){
var statearr_27923_27943 = state_27914__$1;
(statearr_27923_27943[(1)] = (12));

} else {
var statearr_27924_27944 = state_27914__$1;
(statearr_27924_27944[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27915 === (9))){
var state_27914__$1 = state_27914;
var statearr_27925_27945 = state_27914__$1;
(statearr_27925_27945[(2)] = null);

(statearr_27925_27945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27915 === (5))){
var state_27914__$1 = state_27914;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27926_27946 = state_27914__$1;
(statearr_27926_27946[(1)] = (8));

} else {
var statearr_27927_27947 = state_27914__$1;
(statearr_27927_27947[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27915 === (14))){
var inst_27908 = (state_27914[(2)]);
var state_27914__$1 = state_27914;
var statearr_27928_27948 = state_27914__$1;
(statearr_27928_27948[(2)] = inst_27908);

(statearr_27928_27948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27915 === (10))){
var inst_27900 = (state_27914[(2)]);
var state_27914__$1 = state_27914;
var statearr_27929_27949 = state_27914__$1;
(statearr_27929_27949[(2)] = inst_27900);

(statearr_27929_27949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27915 === (8))){
var inst_27897 = cljs.core.async.close_BANG_.call(null,to);
var state_27914__$1 = state_27914;
var statearr_27930_27950 = state_27914__$1;
(statearr_27930_27950[(2)] = inst_27897);

(statearr_27930_27950[(1)] = (10));


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
var cljs$core$async$state_machine__27695__auto__ = null;
var cljs$core$async$state_machine__27695__auto____0 = (function (){
var statearr_27931 = [null,null,null,null,null,null,null,null];
(statearr_27931[(0)] = cljs$core$async$state_machine__27695__auto__);

(statearr_27931[(1)] = (1));

return statearr_27931;
});
var cljs$core$async$state_machine__27695__auto____1 = (function (state_27914){
while(true){
var ret_value__27696__auto__ = (function (){try{while(true){
var result__27697__auto__ = switch__27694__auto__.call(null,state_27914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27697__auto__;
}
break;
}
}catch (e27932){if((e27932 instanceof Object)){
var ex__27698__auto__ = e27932;
var statearr_27933_27951 = state_27914;
(statearr_27933_27951[(5)] = ex__27698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27952 = state_27914;
state_27914 = G__27952;
continue;
} else {
return ret_value__27696__auto__;
}
break;
}
});
cljs$core$async$state_machine__27695__auto__ = function(state_27914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27695__auto____1.call(this,state_27914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27695__auto____0;
cljs$core$async$state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27695__auto____1;
return cljs$core$async$state_machine__27695__auto__;
})()
})();
var state__27791__auto__ = (function (){var statearr_27934 = f__27790__auto__.call(null);
(statearr_27934[(6)] = c__27789__auto___27936);

return statearr_27934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27791__auto__);
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
var process = (function (p__27953){
var vec__27954 = p__27953;
var v = cljs.core.nth.call(null,vec__27954,(0),null);
var p = cljs.core.nth.call(null,vec__27954,(1),null);
var job = vec__27954;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27789__auto___28125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27790__auto__ = (function (){var switch__27694__auto__ = (function (state_27961){
var state_val_27962 = (state_27961[(1)]);
if((state_val_27962 === (1))){
var state_27961__$1 = state_27961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27961__$1,(2),res,v);
} else {
if((state_val_27962 === (2))){
var inst_27958 = (state_27961[(2)]);
var inst_27959 = cljs.core.async.close_BANG_.call(null,res);
var state_27961__$1 = (function (){var statearr_27963 = state_27961;
(statearr_27963[(7)] = inst_27958);

return statearr_27963;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27961__$1,inst_27959);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27695__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27695__auto____0 = (function (){
var statearr_27964 = [null,null,null,null,null,null,null,null];
(statearr_27964[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27695__auto__);

(statearr_27964[(1)] = (1));

return statearr_27964;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27695__auto____1 = (function (state_27961){
while(true){
var ret_value__27696__auto__ = (function (){try{while(true){
var result__27697__auto__ = switch__27694__auto__.call(null,state_27961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27697__auto__;
}
break;
}
}catch (e27965){if((e27965 instanceof Object)){
var ex__27698__auto__ = e27965;
var statearr_27966_28126 = state_27961;
(statearr_27966_28126[(5)] = ex__27698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28127 = state_27961;
state_27961 = G__28127;
continue;
} else {
return ret_value__27696__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27695__auto__ = function(state_27961){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27695__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27695__auto____1.call(this,state_27961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27695__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27695__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27695__auto__;
})()
})();
var state__27791__auto__ = (function (){var statearr_27967 = f__27790__auto__.call(null);
(statearr_27967[(6)] = c__27789__auto___28125);

return statearr_27967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27791__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__27968){
var vec__27969 = p__27968;
var v = cljs.core.nth.call(null,vec__27969,(0),null);
var p = cljs.core.nth.call(null,vec__27969,(1),null);
var job = vec__27969;
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
var n__4613__auto___28128 = n;
var __28129 = (0);
while(true){
if((__28129 < n__4613__auto___28128)){
var G__27972_28130 = type;
var G__27972_28131__$1 = (((G__27972_28130 instanceof cljs.core.Keyword))?G__27972_28130.fqn:null);
switch (G__27972_28131__$1) {
case "compute":
var c__27789__auto___28133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28129,c__27789__auto___28133,G__27972_28130,G__27972_28131__$1,n__4613__auto___28128,jobs,results,process,async){
return (function (){
var f__27790__auto__ = (function (){var switch__27694__auto__ = ((function (__28129,c__27789__auto___28133,G__27972_28130,G__27972_28131__$1,n__4613__auto___28128,jobs,results,process,async){
return (function (state_27985){
var state_val_27986 = (state_27985[(1)]);
if((state_val_27986 === (1))){
var state_27985__$1 = state_27985;
var statearr_27987_28134 = state_27985__$1;
(statearr_27987_28134[(2)] = null);

(statearr_27987_28134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (2))){
var state_27985__$1 = state_27985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27985__$1,(4),jobs);
} else {
if((state_val_27986 === (3))){
var inst_27983 = (state_27985[(2)]);
var state_27985__$1 = state_27985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27985__$1,inst_27983);
} else {
if((state_val_27986 === (4))){
var inst_27975 = (state_27985[(2)]);
var inst_27976 = process.call(null,inst_27975);
var state_27985__$1 = state_27985;
if(cljs.core.truth_(inst_27976)){
var statearr_27988_28135 = state_27985__$1;
(statearr_27988_28135[(1)] = (5));

} else {
var statearr_27989_28136 = state_27985__$1;
(statearr_27989_28136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (5))){
var state_27985__$1 = state_27985;
var statearr_27990_28137 = state_27985__$1;
(statearr_27990_28137[(2)] = null);

(statearr_27990_28137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (6))){
var state_27985__$1 = state_27985;
var statearr_27991_28138 = state_27985__$1;
(statearr_27991_28138[(2)] = null);

(statearr_27991_28138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (7))){
var inst_27981 = (state_27985[(2)]);
var state_27985__$1 = state_27985;
var statearr_27992_28139 = state_27985__$1;
(statearr_27992_28139[(2)] = inst_27981);

(statearr_27992_28139[(1)] = (3));


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
});})(__28129,c__27789__auto___28133,G__27972_28130,G__27972_28131__$1,n__4613__auto___28128,jobs,results,process,async))
;
return ((function (__28129,switch__27694__auto__,c__27789__auto___28133,G__27972_28130,G__27972_28131__$1,n__4613__auto___28128,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27695__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27695__auto____0 = (function (){
var statearr_27993 = [null,null,null,null,null,null,null];
(statearr_27993[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27695__auto__);

(statearr_27993[(1)] = (1));

return statearr_27993;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27695__auto____1 = (function (state_27985){
while(true){
var ret_value__27696__auto__ = (function (){try{while(true){
var result__27697__auto__ = switch__27694__auto__.call(null,state_27985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27697__auto__;
}
break;
}
}catch (e27994){if((e27994 instanceof Object)){
var ex__27698__auto__ = e27994;
var statearr_27995_28140 = state_27985;
(statearr_27995_28140[(5)] = ex__27698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28141 = state_27985;
state_27985 = G__28141;
continue;
} else {
return ret_value__27696__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27695__auto__ = function(state_27985){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27695__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27695__auto____1.call(this,state_27985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27695__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27695__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27695__auto__;
})()
;})(__28129,switch__27694__auto__,c__27789__auto___28133,G__27972_28130,G__27972_28131__$1,n__4613__auto___28128,jobs,results,process,async))
})();
var state__27791__auto__ = (function (){var statearr_27996 = f__27790__auto__.call(null);
(statearr_27996[(6)] = c__27789__auto___28133);

return statearr_27996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27791__auto__);
});})(__28129,c__27789__auto___28133,G__27972_28130,G__27972_28131__$1,n__4613__auto___28128,jobs,results,process,async))
);


break;
case "async":
var c__27789__auto___28142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28129,c__27789__auto___28142,G__27972_28130,G__27972_28131__$1,n__4613__auto___28128,jobs,results,process,async){
return (function (){
var f__27790__auto__ = (function (){var switch__27694__auto__ = ((function (__28129,c__27789__auto___28142,G__27972_28130,G__27972_28131__$1,n__4613__auto___28128,jobs,results,process,async){
return (function (state_28009){
var state_val_28010 = (state_28009[(1)]);
if((state_val_28010 === (1))){
var state_28009__$1 = state_28009;
var statearr_28011_28143 = state_28009__$1;
(statearr_28011_28143[(2)] = null);

(statearr_28011_28143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28010 === (2))){
var state_28009__$1 = state_28009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28009__$1,(4),jobs);
} else {
if((state_val_28010 === (3))){
var inst_28007 = (state_28009[(2)]);
var state_28009__$1 = state_28009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28009__$1,inst_28007);
} else {
if((state_val_28010 === (4))){
var inst_27999 = (state_28009[(2)]);
var inst_28000 = async.call(null,inst_27999);
var state_28009__$1 = state_28009;
if(cljs.core.truth_(inst_28000)){
var statearr_28012_28144 = state_28009__$1;
(statearr_28012_28144[(1)] = (5));

} else {
var statearr_28013_28145 = state_28009__$1;
(statearr_28013_28145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28010 === (5))){
var state_28009__$1 = state_28009;
var statearr_28014_28146 = state_28009__$1;
(statearr_28014_28146[(2)] = null);

(statearr_28014_28146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28010 === (6))){
var state_28009__$1 = state_28009;
var statearr_28015_28147 = state_28009__$1;
(statearr_28015_28147[(2)] = null);

(statearr_28015_28147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28010 === (7))){
var inst_28005 = (state_28009[(2)]);
var state_28009__$1 = state_28009;
var statearr_28016_28148 = state_28009__$1;
(statearr_28016_28148[(2)] = inst_28005);

(statearr_28016_28148[(1)] = (3));


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
});})(__28129,c__27789__auto___28142,G__27972_28130,G__27972_28131__$1,n__4613__auto___28128,jobs,results,process,async))
;
return ((function (__28129,switch__27694__auto__,c__27789__auto___28142,G__27972_28130,G__27972_28131__$1,n__4613__auto___28128,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27695__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27695__auto____0 = (function (){
var statearr_28017 = [null,null,null,null,null,null,null];
(statearr_28017[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27695__auto__);

(statearr_28017[(1)] = (1));

return statearr_28017;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27695__auto____1 = (function (state_28009){
while(true){
var ret_value__27696__auto__ = (function (){try{while(true){
var result__27697__auto__ = switch__27694__auto__.call(null,state_28009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27697__auto__;
}
break;
}
}catch (e28018){if((e28018 instanceof Object)){
var ex__27698__auto__ = e28018;
var statearr_28019_28149 = state_28009;
(statearr_28019_28149[(5)] = ex__27698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28150 = state_28009;
state_28009 = G__28150;
continue;
} else {
return ret_value__27696__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27695__auto__ = function(state_28009){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27695__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27695__auto____1.call(this,state_28009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27695__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27695__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27695__auto__;
})()
;})(__28129,switch__27694__auto__,c__27789__auto___28142,G__27972_28130,G__27972_28131__$1,n__4613__auto___28128,jobs,results,process,async))
})();
var state__27791__auto__ = (function (){var statearr_28020 = f__27790__auto__.call(null);
(statearr_28020[(6)] = c__27789__auto___28142);

return statearr_28020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27791__auto__);
});})(__28129,c__27789__auto___28142,G__27972_28130,G__27972_28131__$1,n__4613__auto___28128,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27972_28131__$1)].join('')));

}

var G__28151 = (__28129 + (1));
__28129 = G__28151;
continue;
} else {
}
break;
}

var c__27789__auto___28152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27790__auto__ = (function (){var switch__27694__auto__ = (function (state_28042){
var state_val_28043 = (state_28042[(1)]);
if((state_val_28043 === (7))){
var inst_28038 = (state_28042[(2)]);
var state_28042__$1 = state_28042;
var statearr_28044_28153 = state_28042__$1;
(statearr_28044_28153[(2)] = inst_28038);

(statearr_28044_28153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28043 === (1))){
var state_28042__$1 = state_28042;
var statearr_28045_28154 = state_28042__$1;
(statearr_28045_28154[(2)] = null);

(statearr_28045_28154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28043 === (4))){
var inst_28023 = (state_28042[(7)]);
var inst_28023__$1 = (state_28042[(2)]);
var inst_28024 = (inst_28023__$1 == null);
var state_28042__$1 = (function (){var statearr_28046 = state_28042;
(statearr_28046[(7)] = inst_28023__$1);

return statearr_28046;
})();
if(cljs.core.truth_(inst_28024)){
var statearr_28047_28155 = state_28042__$1;
(statearr_28047_28155[(1)] = (5));

} else {
var statearr_28048_28156 = state_28042__$1;
(statearr_28048_28156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28043 === (6))){
var inst_28028 = (state_28042[(8)]);
var inst_28023 = (state_28042[(7)]);
var inst_28028__$1 = cljs.core.async.chan.call(null,(1));
var inst_28029 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28030 = [inst_28023,inst_28028__$1];
var inst_28031 = (new cljs.core.PersistentVector(null,2,(5),inst_28029,inst_28030,null));
var state_28042__$1 = (function (){var statearr_28049 = state_28042;
(statearr_28049[(8)] = inst_28028__$1);

return statearr_28049;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28042__$1,(8),jobs,inst_28031);
} else {
if((state_val_28043 === (3))){
var inst_28040 = (state_28042[(2)]);
var state_28042__$1 = state_28042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28042__$1,inst_28040);
} else {
if((state_val_28043 === (2))){
var state_28042__$1 = state_28042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28042__$1,(4),from);
} else {
if((state_val_28043 === (9))){
var inst_28035 = (state_28042[(2)]);
var state_28042__$1 = (function (){var statearr_28050 = state_28042;
(statearr_28050[(9)] = inst_28035);

return statearr_28050;
})();
var statearr_28051_28157 = state_28042__$1;
(statearr_28051_28157[(2)] = null);

(statearr_28051_28157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28043 === (5))){
var inst_28026 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28042__$1 = state_28042;
var statearr_28052_28158 = state_28042__$1;
(statearr_28052_28158[(2)] = inst_28026);

(statearr_28052_28158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28043 === (8))){
var inst_28028 = (state_28042[(8)]);
var inst_28033 = (state_28042[(2)]);
var state_28042__$1 = (function (){var statearr_28053 = state_28042;
(statearr_28053[(10)] = inst_28033);

return statearr_28053;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28042__$1,(9),results,inst_28028);
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
var cljs$core$async$pipeline_STAR__$_state_machine__27695__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27695__auto____0 = (function (){
var statearr_28054 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28054[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27695__auto__);

(statearr_28054[(1)] = (1));

return statearr_28054;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27695__auto____1 = (function (state_28042){
while(true){
var ret_value__27696__auto__ = (function (){try{while(true){
var result__27697__auto__ = switch__27694__auto__.call(null,state_28042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27697__auto__;
}
break;
}
}catch (e28055){if((e28055 instanceof Object)){
var ex__27698__auto__ = e28055;
var statearr_28056_28159 = state_28042;
(statearr_28056_28159[(5)] = ex__27698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28160 = state_28042;
state_28042 = G__28160;
continue;
} else {
return ret_value__27696__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27695__auto__ = function(state_28042){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27695__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27695__auto____1.call(this,state_28042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27695__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27695__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27695__auto__;
})()
})();
var state__27791__auto__ = (function (){var statearr_28057 = f__27790__auto__.call(null);
(statearr_28057[(6)] = c__27789__auto___28152);

return statearr_28057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27791__auto__);
}));


var c__27789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27790__auto__ = (function (){var switch__27694__auto__ = (function (state_28095){
var state_val_28096 = (state_28095[(1)]);
if((state_val_28096 === (7))){
var inst_28091 = (state_28095[(2)]);
var state_28095__$1 = state_28095;
var statearr_28097_28161 = state_28095__$1;
(statearr_28097_28161[(2)] = inst_28091);

(statearr_28097_28161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (20))){
var state_28095__$1 = state_28095;
var statearr_28098_28162 = state_28095__$1;
(statearr_28098_28162[(2)] = null);

(statearr_28098_28162[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (1))){
var state_28095__$1 = state_28095;
var statearr_28099_28163 = state_28095__$1;
(statearr_28099_28163[(2)] = null);

(statearr_28099_28163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (4))){
var inst_28060 = (state_28095[(7)]);
var inst_28060__$1 = (state_28095[(2)]);
var inst_28061 = (inst_28060__$1 == null);
var state_28095__$1 = (function (){var statearr_28100 = state_28095;
(statearr_28100[(7)] = inst_28060__$1);

return statearr_28100;
})();
if(cljs.core.truth_(inst_28061)){
var statearr_28101_28164 = state_28095__$1;
(statearr_28101_28164[(1)] = (5));

} else {
var statearr_28102_28165 = state_28095__$1;
(statearr_28102_28165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (15))){
var inst_28073 = (state_28095[(8)]);
var state_28095__$1 = state_28095;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28095__$1,(18),to,inst_28073);
} else {
if((state_val_28096 === (21))){
var inst_28086 = (state_28095[(2)]);
var state_28095__$1 = state_28095;
var statearr_28103_28166 = state_28095__$1;
(statearr_28103_28166[(2)] = inst_28086);

(statearr_28103_28166[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (13))){
var inst_28088 = (state_28095[(2)]);
var state_28095__$1 = (function (){var statearr_28104 = state_28095;
(statearr_28104[(9)] = inst_28088);

return statearr_28104;
})();
var statearr_28105_28167 = state_28095__$1;
(statearr_28105_28167[(2)] = null);

(statearr_28105_28167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (6))){
var inst_28060 = (state_28095[(7)]);
var state_28095__$1 = state_28095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28095__$1,(11),inst_28060);
} else {
if((state_val_28096 === (17))){
var inst_28081 = (state_28095[(2)]);
var state_28095__$1 = state_28095;
if(cljs.core.truth_(inst_28081)){
var statearr_28106_28168 = state_28095__$1;
(statearr_28106_28168[(1)] = (19));

} else {
var statearr_28107_28169 = state_28095__$1;
(statearr_28107_28169[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (3))){
var inst_28093 = (state_28095[(2)]);
var state_28095__$1 = state_28095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28095__$1,inst_28093);
} else {
if((state_val_28096 === (12))){
var inst_28070 = (state_28095[(10)]);
var state_28095__$1 = state_28095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28095__$1,(14),inst_28070);
} else {
if((state_val_28096 === (2))){
var state_28095__$1 = state_28095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28095__$1,(4),results);
} else {
if((state_val_28096 === (19))){
var state_28095__$1 = state_28095;
var statearr_28108_28170 = state_28095__$1;
(statearr_28108_28170[(2)] = null);

(statearr_28108_28170[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (11))){
var inst_28070 = (state_28095[(2)]);
var state_28095__$1 = (function (){var statearr_28109 = state_28095;
(statearr_28109[(10)] = inst_28070);

return statearr_28109;
})();
var statearr_28110_28171 = state_28095__$1;
(statearr_28110_28171[(2)] = null);

(statearr_28110_28171[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (9))){
var state_28095__$1 = state_28095;
var statearr_28111_28172 = state_28095__$1;
(statearr_28111_28172[(2)] = null);

(statearr_28111_28172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (5))){
var state_28095__$1 = state_28095;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28112_28173 = state_28095__$1;
(statearr_28112_28173[(1)] = (8));

} else {
var statearr_28113_28174 = state_28095__$1;
(statearr_28113_28174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (14))){
var inst_28073 = (state_28095[(8)]);
var inst_28073__$1 = (state_28095[(2)]);
var inst_28074 = (inst_28073__$1 == null);
var inst_28075 = cljs.core.not.call(null,inst_28074);
var state_28095__$1 = (function (){var statearr_28114 = state_28095;
(statearr_28114[(8)] = inst_28073__$1);

return statearr_28114;
})();
if(inst_28075){
var statearr_28115_28175 = state_28095__$1;
(statearr_28115_28175[(1)] = (15));

} else {
var statearr_28116_28176 = state_28095__$1;
(statearr_28116_28176[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (16))){
var state_28095__$1 = state_28095;
var statearr_28117_28177 = state_28095__$1;
(statearr_28117_28177[(2)] = false);

(statearr_28117_28177[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (10))){
var inst_28067 = (state_28095[(2)]);
var state_28095__$1 = state_28095;
var statearr_28118_28178 = state_28095__$1;
(statearr_28118_28178[(2)] = inst_28067);

(statearr_28118_28178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (18))){
var inst_28078 = (state_28095[(2)]);
var state_28095__$1 = state_28095;
var statearr_28119_28179 = state_28095__$1;
(statearr_28119_28179[(2)] = inst_28078);

(statearr_28119_28179[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28096 === (8))){
var inst_28064 = cljs.core.async.close_BANG_.call(null,to);
var state_28095__$1 = state_28095;
var statearr_28120_28180 = state_28095__$1;
(statearr_28120_28180[(2)] = inst_28064);

(statearr_28120_28180[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__27695__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27695__auto____0 = (function (){
var statearr_28121 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28121[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27695__auto__);

(statearr_28121[(1)] = (1));

return statearr_28121;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27695__auto____1 = (function (state_28095){
while(true){
var ret_value__27696__auto__ = (function (){try{while(true){
var result__27697__auto__ = switch__27694__auto__.call(null,state_28095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27697__auto__;
}
break;
}
}catch (e28122){if((e28122 instanceof Object)){
var ex__27698__auto__ = e28122;
var statearr_28123_28181 = state_28095;
(statearr_28123_28181[(5)] = ex__27698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28182 = state_28095;
state_28095 = G__28182;
continue;
} else {
return ret_value__27696__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27695__auto__ = function(state_28095){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27695__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27695__auto____1.call(this,state_28095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27695__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27695__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27695__auto__;
})()
})();
var state__27791__auto__ = (function (){var statearr_28124 = f__27790__auto__.call(null);
(statearr_28124[(6)] = c__27789__auto__);

return statearr_28124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27791__auto__);
}));

return c__27789__auto__;
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
var G__28184 = arguments.length;
switch (G__28184) {
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
var G__28187 = arguments.length;
switch (G__28187) {
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
var G__28190 = arguments.length;
switch (G__28190) {
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
var c__27789__auto___28239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27790__auto__ = (function (){var switch__27694__auto__ = (function (state_28216){
var state_val_28217 = (state_28216[(1)]);
if((state_val_28217 === (7))){
var inst_28212 = (state_28216[(2)]);
var state_28216__$1 = state_28216;
var statearr_28218_28240 = state_28216__$1;
(statearr_28218_28240[(2)] = inst_28212);

(statearr_28218_28240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28217 === (1))){
var state_28216__$1 = state_28216;
var statearr_28219_28241 = state_28216__$1;
(statearr_28219_28241[(2)] = null);

(statearr_28219_28241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28217 === (4))){
var inst_28193 = (state_28216[(7)]);
var inst_28193__$1 = (state_28216[(2)]);
var inst_28194 = (inst_28193__$1 == null);
var state_28216__$1 = (function (){var statearr_28220 = state_28216;
(statearr_28220[(7)] = inst_28193__$1);

return statearr_28220;
})();
if(cljs.core.truth_(inst_28194)){
var statearr_28221_28242 = state_28216__$1;
(statearr_28221_28242[(1)] = (5));

} else {
var statearr_28222_28243 = state_28216__$1;
(statearr_28222_28243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28217 === (13))){
var state_28216__$1 = state_28216;
var statearr_28223_28244 = state_28216__$1;
(statearr_28223_28244[(2)] = null);

(statearr_28223_28244[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28217 === (6))){
var inst_28193 = (state_28216[(7)]);
var inst_28199 = p.call(null,inst_28193);
var state_28216__$1 = state_28216;
if(cljs.core.truth_(inst_28199)){
var statearr_28224_28245 = state_28216__$1;
(statearr_28224_28245[(1)] = (9));

} else {
var statearr_28225_28246 = state_28216__$1;
(statearr_28225_28246[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28217 === (3))){
var inst_28214 = (state_28216[(2)]);
var state_28216__$1 = state_28216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28216__$1,inst_28214);
} else {
if((state_val_28217 === (12))){
var state_28216__$1 = state_28216;
var statearr_28226_28247 = state_28216__$1;
(statearr_28226_28247[(2)] = null);

(statearr_28226_28247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28217 === (2))){
var state_28216__$1 = state_28216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28216__$1,(4),ch);
} else {
if((state_val_28217 === (11))){
var inst_28193 = (state_28216[(7)]);
var inst_28203 = (state_28216[(2)]);
var state_28216__$1 = state_28216;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28216__$1,(8),inst_28203,inst_28193);
} else {
if((state_val_28217 === (9))){
var state_28216__$1 = state_28216;
var statearr_28227_28248 = state_28216__$1;
(statearr_28227_28248[(2)] = tc);

(statearr_28227_28248[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28217 === (5))){
var inst_28196 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28197 = cljs.core.async.close_BANG_.call(null,fc);
var state_28216__$1 = (function (){var statearr_28228 = state_28216;
(statearr_28228[(8)] = inst_28196);

return statearr_28228;
})();
var statearr_28229_28249 = state_28216__$1;
(statearr_28229_28249[(2)] = inst_28197);

(statearr_28229_28249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28217 === (14))){
var inst_28210 = (state_28216[(2)]);
var state_28216__$1 = state_28216;
var statearr_28230_28250 = state_28216__$1;
(statearr_28230_28250[(2)] = inst_28210);

(statearr_28230_28250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28217 === (10))){
var state_28216__$1 = state_28216;
var statearr_28231_28251 = state_28216__$1;
(statearr_28231_28251[(2)] = fc);

(statearr_28231_28251[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28217 === (8))){
var inst_28205 = (state_28216[(2)]);
var state_28216__$1 = state_28216;
if(cljs.core.truth_(inst_28205)){
var statearr_28232_28252 = state_28216__$1;
(statearr_28232_28252[(1)] = (12));

} else {
var statearr_28233_28253 = state_28216__$1;
(statearr_28233_28253[(1)] = (13));

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
var cljs$core$async$state_machine__27695__auto__ = null;
var cljs$core$async$state_machine__27695__auto____0 = (function (){
var statearr_28234 = [null,null,null,null,null,null,null,null,null];
(statearr_28234[(0)] = cljs$core$async$state_machine__27695__auto__);

(statearr_28234[(1)] = (1));

return statearr_28234;
});
var cljs$core$async$state_machine__27695__auto____1 = (function (state_28216){
while(true){
var ret_value__27696__auto__ = (function (){try{while(true){
var result__27697__auto__ = switch__27694__auto__.call(null,state_28216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27697__auto__;
}
break;
}
}catch (e28235){if((e28235 instanceof Object)){
var ex__27698__auto__ = e28235;
var statearr_28236_28254 = state_28216;
(statearr_28236_28254[(5)] = ex__27698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28255 = state_28216;
state_28216 = G__28255;
continue;
} else {
return ret_value__27696__auto__;
}
break;
}
});
cljs$core$async$state_machine__27695__auto__ = function(state_28216){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27695__auto____1.call(this,state_28216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27695__auto____0;
cljs$core$async$state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27695__auto____1;
return cljs$core$async$state_machine__27695__auto__;
})()
})();
var state__27791__auto__ = (function (){var statearr_28237 = f__27790__auto__.call(null);
(statearr_28237[(6)] = c__27789__auto___28239);

return statearr_28237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27791__auto__);
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
var c__27789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27790__auto__ = (function (){var switch__27694__auto__ = (function (state_28276){
var state_val_28277 = (state_28276[(1)]);
if((state_val_28277 === (7))){
var inst_28272 = (state_28276[(2)]);
var state_28276__$1 = state_28276;
var statearr_28278_28296 = state_28276__$1;
(statearr_28278_28296[(2)] = inst_28272);

(statearr_28278_28296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28277 === (1))){
var inst_28256 = init;
var state_28276__$1 = (function (){var statearr_28279 = state_28276;
(statearr_28279[(7)] = inst_28256);

return statearr_28279;
})();
var statearr_28280_28297 = state_28276__$1;
(statearr_28280_28297[(2)] = null);

(statearr_28280_28297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28277 === (4))){
var inst_28259 = (state_28276[(8)]);
var inst_28259__$1 = (state_28276[(2)]);
var inst_28260 = (inst_28259__$1 == null);
var state_28276__$1 = (function (){var statearr_28281 = state_28276;
(statearr_28281[(8)] = inst_28259__$1);

return statearr_28281;
})();
if(cljs.core.truth_(inst_28260)){
var statearr_28282_28298 = state_28276__$1;
(statearr_28282_28298[(1)] = (5));

} else {
var statearr_28283_28299 = state_28276__$1;
(statearr_28283_28299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28277 === (6))){
var inst_28259 = (state_28276[(8)]);
var inst_28256 = (state_28276[(7)]);
var inst_28263 = (state_28276[(9)]);
var inst_28263__$1 = f.call(null,inst_28256,inst_28259);
var inst_28264 = cljs.core.reduced_QMARK_.call(null,inst_28263__$1);
var state_28276__$1 = (function (){var statearr_28284 = state_28276;
(statearr_28284[(9)] = inst_28263__$1);

return statearr_28284;
})();
if(inst_28264){
var statearr_28285_28300 = state_28276__$1;
(statearr_28285_28300[(1)] = (8));

} else {
var statearr_28286_28301 = state_28276__$1;
(statearr_28286_28301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28277 === (3))){
var inst_28274 = (state_28276[(2)]);
var state_28276__$1 = state_28276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28276__$1,inst_28274);
} else {
if((state_val_28277 === (2))){
var state_28276__$1 = state_28276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28276__$1,(4),ch);
} else {
if((state_val_28277 === (9))){
var inst_28263 = (state_28276[(9)]);
var inst_28256 = inst_28263;
var state_28276__$1 = (function (){var statearr_28287 = state_28276;
(statearr_28287[(7)] = inst_28256);

return statearr_28287;
})();
var statearr_28288_28302 = state_28276__$1;
(statearr_28288_28302[(2)] = null);

(statearr_28288_28302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28277 === (5))){
var inst_28256 = (state_28276[(7)]);
var state_28276__$1 = state_28276;
var statearr_28289_28303 = state_28276__$1;
(statearr_28289_28303[(2)] = inst_28256);

(statearr_28289_28303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28277 === (10))){
var inst_28270 = (state_28276[(2)]);
var state_28276__$1 = state_28276;
var statearr_28290_28304 = state_28276__$1;
(statearr_28290_28304[(2)] = inst_28270);

(statearr_28290_28304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28277 === (8))){
var inst_28263 = (state_28276[(9)]);
var inst_28266 = cljs.core.deref.call(null,inst_28263);
var state_28276__$1 = state_28276;
var statearr_28291_28305 = state_28276__$1;
(statearr_28291_28305[(2)] = inst_28266);

(statearr_28291_28305[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__27695__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27695__auto____0 = (function (){
var statearr_28292 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28292[(0)] = cljs$core$async$reduce_$_state_machine__27695__auto__);

(statearr_28292[(1)] = (1));

return statearr_28292;
});
var cljs$core$async$reduce_$_state_machine__27695__auto____1 = (function (state_28276){
while(true){
var ret_value__27696__auto__ = (function (){try{while(true){
var result__27697__auto__ = switch__27694__auto__.call(null,state_28276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27697__auto__;
}
break;
}
}catch (e28293){if((e28293 instanceof Object)){
var ex__27698__auto__ = e28293;
var statearr_28294_28306 = state_28276;
(statearr_28294_28306[(5)] = ex__27698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28307 = state_28276;
state_28276 = G__28307;
continue;
} else {
return ret_value__27696__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27695__auto__ = function(state_28276){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27695__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27695__auto____1.call(this,state_28276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27695__auto____0;
cljs$core$async$reduce_$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27695__auto____1;
return cljs$core$async$reduce_$_state_machine__27695__auto__;
})()
})();
var state__27791__auto__ = (function (){var statearr_28295 = f__27790__auto__.call(null);
(statearr_28295[(6)] = c__27789__auto__);

return statearr_28295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27791__auto__);
}));

return c__27789__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27790__auto__ = (function (){var switch__27694__auto__ = (function (state_28313){
var state_val_28314 = (state_28313[(1)]);
if((state_val_28314 === (1))){
var inst_28308 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28313__$1 = state_28313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28313__$1,(2),inst_28308);
} else {
if((state_val_28314 === (2))){
var inst_28310 = (state_28313[(2)]);
var inst_28311 = f__$1.call(null,inst_28310);
var state_28313__$1 = state_28313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28313__$1,inst_28311);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__27695__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27695__auto____0 = (function (){
var statearr_28315 = [null,null,null,null,null,null,null];
(statearr_28315[(0)] = cljs$core$async$transduce_$_state_machine__27695__auto__);

(statearr_28315[(1)] = (1));

return statearr_28315;
});
var cljs$core$async$transduce_$_state_machine__27695__auto____1 = (function (state_28313){
while(true){
var ret_value__27696__auto__ = (function (){try{while(true){
var result__27697__auto__ = switch__27694__auto__.call(null,state_28313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27697__auto__;
}
break;
}
}catch (e28316){if((e28316 instanceof Object)){
var ex__27698__auto__ = e28316;
var statearr_28317_28319 = state_28313;
(statearr_28317_28319[(5)] = ex__27698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28320 = state_28313;
state_28313 = G__28320;
continue;
} else {
return ret_value__27696__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27695__auto__ = function(state_28313){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27695__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27695__auto____1.call(this,state_28313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27695__auto____0;
cljs$core$async$transduce_$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27695__auto____1;
return cljs$core$async$transduce_$_state_machine__27695__auto__;
})()
})();
var state__27791__auto__ = (function (){var statearr_28318 = f__27790__auto__.call(null);
(statearr_28318[(6)] = c__27789__auto__);

return statearr_28318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27791__auto__);
}));

return c__27789__auto__;
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
var G__28322 = arguments.length;
switch (G__28322) {
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
var c__27789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27790__auto__ = (function (){var switch__27694__auto__ = (function (state_28347){
var state_val_28348 = (state_28347[(1)]);
if((state_val_28348 === (7))){
var inst_28329 = (state_28347[(2)]);
var state_28347__$1 = state_28347;
var statearr_28349_28370 = state_28347__$1;
(statearr_28349_28370[(2)] = inst_28329);

(statearr_28349_28370[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28348 === (1))){
var inst_28323 = cljs.core.seq.call(null,coll);
var inst_28324 = inst_28323;
var state_28347__$1 = (function (){var statearr_28350 = state_28347;
(statearr_28350[(7)] = inst_28324);

return statearr_28350;
})();
var statearr_28351_28371 = state_28347__$1;
(statearr_28351_28371[(2)] = null);

(statearr_28351_28371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28348 === (4))){
var inst_28324 = (state_28347[(7)]);
var inst_28327 = cljs.core.first.call(null,inst_28324);
var state_28347__$1 = state_28347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28347__$1,(7),ch,inst_28327);
} else {
if((state_val_28348 === (13))){
var inst_28341 = (state_28347[(2)]);
var state_28347__$1 = state_28347;
var statearr_28352_28372 = state_28347__$1;
(statearr_28352_28372[(2)] = inst_28341);

(statearr_28352_28372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28348 === (6))){
var inst_28332 = (state_28347[(2)]);
var state_28347__$1 = state_28347;
if(cljs.core.truth_(inst_28332)){
var statearr_28353_28373 = state_28347__$1;
(statearr_28353_28373[(1)] = (8));

} else {
var statearr_28354_28374 = state_28347__$1;
(statearr_28354_28374[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28348 === (3))){
var inst_28345 = (state_28347[(2)]);
var state_28347__$1 = state_28347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28347__$1,inst_28345);
} else {
if((state_val_28348 === (12))){
var state_28347__$1 = state_28347;
var statearr_28355_28375 = state_28347__$1;
(statearr_28355_28375[(2)] = null);

(statearr_28355_28375[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28348 === (2))){
var inst_28324 = (state_28347[(7)]);
var state_28347__$1 = state_28347;
if(cljs.core.truth_(inst_28324)){
var statearr_28356_28376 = state_28347__$1;
(statearr_28356_28376[(1)] = (4));

} else {
var statearr_28357_28377 = state_28347__$1;
(statearr_28357_28377[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28348 === (11))){
var inst_28338 = cljs.core.async.close_BANG_.call(null,ch);
var state_28347__$1 = state_28347;
var statearr_28358_28378 = state_28347__$1;
(statearr_28358_28378[(2)] = inst_28338);

(statearr_28358_28378[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28348 === (9))){
var state_28347__$1 = state_28347;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28359_28379 = state_28347__$1;
(statearr_28359_28379[(1)] = (11));

} else {
var statearr_28360_28380 = state_28347__$1;
(statearr_28360_28380[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28348 === (5))){
var inst_28324 = (state_28347[(7)]);
var state_28347__$1 = state_28347;
var statearr_28361_28381 = state_28347__$1;
(statearr_28361_28381[(2)] = inst_28324);

(statearr_28361_28381[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28348 === (10))){
var inst_28343 = (state_28347[(2)]);
var state_28347__$1 = state_28347;
var statearr_28362_28382 = state_28347__$1;
(statearr_28362_28382[(2)] = inst_28343);

(statearr_28362_28382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28348 === (8))){
var inst_28324 = (state_28347[(7)]);
var inst_28334 = cljs.core.next.call(null,inst_28324);
var inst_28324__$1 = inst_28334;
var state_28347__$1 = (function (){var statearr_28363 = state_28347;
(statearr_28363[(7)] = inst_28324__$1);

return statearr_28363;
})();
var statearr_28364_28383 = state_28347__$1;
(statearr_28364_28383[(2)] = null);

(statearr_28364_28383[(1)] = (2));


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
var cljs$core$async$state_machine__27695__auto__ = null;
var cljs$core$async$state_machine__27695__auto____0 = (function (){
var statearr_28365 = [null,null,null,null,null,null,null,null];
(statearr_28365[(0)] = cljs$core$async$state_machine__27695__auto__);

(statearr_28365[(1)] = (1));

return statearr_28365;
});
var cljs$core$async$state_machine__27695__auto____1 = (function (state_28347){
while(true){
var ret_value__27696__auto__ = (function (){try{while(true){
var result__27697__auto__ = switch__27694__auto__.call(null,state_28347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27697__auto__;
}
break;
}
}catch (e28366){if((e28366 instanceof Object)){
var ex__27698__auto__ = e28366;
var statearr_28367_28384 = state_28347;
(statearr_28367_28384[(5)] = ex__27698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28385 = state_28347;
state_28347 = G__28385;
continue;
} else {
return ret_value__27696__auto__;
}
break;
}
});
cljs$core$async$state_machine__27695__auto__ = function(state_28347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27695__auto____1.call(this,state_28347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27695__auto____0;
cljs$core$async$state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27695__auto____1;
return cljs$core$async$state_machine__27695__auto__;
})()
})();
var state__27791__auto__ = (function (){var statearr_28368 = f__27790__auto__.call(null);
(statearr_28368[(6)] = c__27789__auto__);

return statearr_28368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27791__auto__);
}));

return c__27789__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_28386 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_28386.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_28387 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_28387.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_28388 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_28388.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_28389 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_28389.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28390 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28390 = (function (ch,cs,meta28391){
this.ch = ch;
this.cs = cs;
this.meta28391 = meta28391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28392,meta28391__$1){
var self__ = this;
var _28392__$1 = this;
return (new cljs.core.async.t_cljs$core$async28390(self__.ch,self__.cs,meta28391__$1));
}));

(cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28392){
var self__ = this;
var _28392__$1 = this;
return self__.meta28391;
}));

(cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async28390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28391","meta28391",-1266027561,null)], null);
}));

(cljs.core.async.t_cljs$core$async28390.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28390");

(cljs.core.async.t_cljs$core$async28390.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28390");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28390.
 */
cljs.core.async.__GT_t_cljs$core$async28390 = (function cljs$core$async$mult_$___GT_t_cljs$core$async28390(ch__$1,cs__$1,meta28391){
return (new cljs.core.async.t_cljs$core$async28390(ch__$1,cs__$1,meta28391));
});

}

return (new cljs.core.async.t_cljs$core$async28390(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27789__auto___28612 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27790__auto__ = (function (){var switch__27694__auto__ = (function (state_28527){
var state_val_28528 = (state_28527[(1)]);
if((state_val_28528 === (7))){
var inst_28523 = (state_28527[(2)]);
var state_28527__$1 = state_28527;
var statearr_28529_28613 = state_28527__$1;
(statearr_28529_28613[(2)] = inst_28523);

(statearr_28529_28613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (20))){
var inst_28426 = (state_28527[(7)]);
var inst_28438 = cljs.core.first.call(null,inst_28426);
var inst_28439 = cljs.core.nth.call(null,inst_28438,(0),null);
var inst_28440 = cljs.core.nth.call(null,inst_28438,(1),null);
var state_28527__$1 = (function (){var statearr_28530 = state_28527;
(statearr_28530[(8)] = inst_28439);

return statearr_28530;
})();
if(cljs.core.truth_(inst_28440)){
var statearr_28531_28614 = state_28527__$1;
(statearr_28531_28614[(1)] = (22));

} else {
var statearr_28532_28615 = state_28527__$1;
(statearr_28532_28615[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (27))){
var inst_28470 = (state_28527[(9)]);
var inst_28475 = (state_28527[(10)]);
var inst_28395 = (state_28527[(11)]);
var inst_28468 = (state_28527[(12)]);
var inst_28475__$1 = cljs.core._nth.call(null,inst_28468,inst_28470);
var inst_28476 = cljs.core.async.put_BANG_.call(null,inst_28475__$1,inst_28395,done);
var state_28527__$1 = (function (){var statearr_28533 = state_28527;
(statearr_28533[(10)] = inst_28475__$1);

return statearr_28533;
})();
if(cljs.core.truth_(inst_28476)){
var statearr_28534_28616 = state_28527__$1;
(statearr_28534_28616[(1)] = (30));

} else {
var statearr_28535_28617 = state_28527__$1;
(statearr_28535_28617[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (1))){
var state_28527__$1 = state_28527;
var statearr_28536_28618 = state_28527__$1;
(statearr_28536_28618[(2)] = null);

(statearr_28536_28618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (24))){
var inst_28426 = (state_28527[(7)]);
var inst_28445 = (state_28527[(2)]);
var inst_28446 = cljs.core.next.call(null,inst_28426);
var inst_28404 = inst_28446;
var inst_28405 = null;
var inst_28406 = (0);
var inst_28407 = (0);
var state_28527__$1 = (function (){var statearr_28537 = state_28527;
(statearr_28537[(13)] = inst_28404);

(statearr_28537[(14)] = inst_28407);

(statearr_28537[(15)] = inst_28406);

(statearr_28537[(16)] = inst_28405);

(statearr_28537[(17)] = inst_28445);

return statearr_28537;
})();
var statearr_28538_28619 = state_28527__$1;
(statearr_28538_28619[(2)] = null);

(statearr_28538_28619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (39))){
var state_28527__$1 = state_28527;
var statearr_28542_28620 = state_28527__$1;
(statearr_28542_28620[(2)] = null);

(statearr_28542_28620[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (4))){
var inst_28395 = (state_28527[(11)]);
var inst_28395__$1 = (state_28527[(2)]);
var inst_28396 = (inst_28395__$1 == null);
var state_28527__$1 = (function (){var statearr_28543 = state_28527;
(statearr_28543[(11)] = inst_28395__$1);

return statearr_28543;
})();
if(cljs.core.truth_(inst_28396)){
var statearr_28544_28621 = state_28527__$1;
(statearr_28544_28621[(1)] = (5));

} else {
var statearr_28545_28622 = state_28527__$1;
(statearr_28545_28622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (15))){
var inst_28404 = (state_28527[(13)]);
var inst_28407 = (state_28527[(14)]);
var inst_28406 = (state_28527[(15)]);
var inst_28405 = (state_28527[(16)]);
var inst_28422 = (state_28527[(2)]);
var inst_28423 = (inst_28407 + (1));
var tmp28539 = inst_28404;
var tmp28540 = inst_28406;
var tmp28541 = inst_28405;
var inst_28404__$1 = tmp28539;
var inst_28405__$1 = tmp28541;
var inst_28406__$1 = tmp28540;
var inst_28407__$1 = inst_28423;
var state_28527__$1 = (function (){var statearr_28546 = state_28527;
(statearr_28546[(18)] = inst_28422);

(statearr_28546[(13)] = inst_28404__$1);

(statearr_28546[(14)] = inst_28407__$1);

(statearr_28546[(15)] = inst_28406__$1);

(statearr_28546[(16)] = inst_28405__$1);

return statearr_28546;
})();
var statearr_28547_28623 = state_28527__$1;
(statearr_28547_28623[(2)] = null);

(statearr_28547_28623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (21))){
var inst_28449 = (state_28527[(2)]);
var state_28527__$1 = state_28527;
var statearr_28551_28624 = state_28527__$1;
(statearr_28551_28624[(2)] = inst_28449);

(statearr_28551_28624[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (31))){
var inst_28475 = (state_28527[(10)]);
var inst_28479 = done.call(null,null);
var inst_28480 = cljs.core.async.untap_STAR_.call(null,m,inst_28475);
var state_28527__$1 = (function (){var statearr_28552 = state_28527;
(statearr_28552[(19)] = inst_28479);

return statearr_28552;
})();
var statearr_28553_28625 = state_28527__$1;
(statearr_28553_28625[(2)] = inst_28480);

(statearr_28553_28625[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (32))){
var inst_28467 = (state_28527[(20)]);
var inst_28470 = (state_28527[(9)]);
var inst_28469 = (state_28527[(21)]);
var inst_28468 = (state_28527[(12)]);
var inst_28482 = (state_28527[(2)]);
var inst_28483 = (inst_28470 + (1));
var tmp28548 = inst_28467;
var tmp28549 = inst_28469;
var tmp28550 = inst_28468;
var inst_28467__$1 = tmp28548;
var inst_28468__$1 = tmp28550;
var inst_28469__$1 = tmp28549;
var inst_28470__$1 = inst_28483;
var state_28527__$1 = (function (){var statearr_28554 = state_28527;
(statearr_28554[(20)] = inst_28467__$1);

(statearr_28554[(9)] = inst_28470__$1);

(statearr_28554[(22)] = inst_28482);

(statearr_28554[(21)] = inst_28469__$1);

(statearr_28554[(12)] = inst_28468__$1);

return statearr_28554;
})();
var statearr_28555_28626 = state_28527__$1;
(statearr_28555_28626[(2)] = null);

(statearr_28555_28626[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (40))){
var inst_28495 = (state_28527[(23)]);
var inst_28499 = done.call(null,null);
var inst_28500 = cljs.core.async.untap_STAR_.call(null,m,inst_28495);
var state_28527__$1 = (function (){var statearr_28556 = state_28527;
(statearr_28556[(24)] = inst_28499);

return statearr_28556;
})();
var statearr_28557_28627 = state_28527__$1;
(statearr_28557_28627[(2)] = inst_28500);

(statearr_28557_28627[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (33))){
var inst_28486 = (state_28527[(25)]);
var inst_28488 = cljs.core.chunked_seq_QMARK_.call(null,inst_28486);
var state_28527__$1 = state_28527;
if(inst_28488){
var statearr_28558_28628 = state_28527__$1;
(statearr_28558_28628[(1)] = (36));

} else {
var statearr_28559_28629 = state_28527__$1;
(statearr_28559_28629[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (13))){
var inst_28416 = (state_28527[(26)]);
var inst_28419 = cljs.core.async.close_BANG_.call(null,inst_28416);
var state_28527__$1 = state_28527;
var statearr_28560_28630 = state_28527__$1;
(statearr_28560_28630[(2)] = inst_28419);

(statearr_28560_28630[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (22))){
var inst_28439 = (state_28527[(8)]);
var inst_28442 = cljs.core.async.close_BANG_.call(null,inst_28439);
var state_28527__$1 = state_28527;
var statearr_28561_28631 = state_28527__$1;
(statearr_28561_28631[(2)] = inst_28442);

(statearr_28561_28631[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (36))){
var inst_28486 = (state_28527[(25)]);
var inst_28490 = cljs.core.chunk_first.call(null,inst_28486);
var inst_28491 = cljs.core.chunk_rest.call(null,inst_28486);
var inst_28492 = cljs.core.count.call(null,inst_28490);
var inst_28467 = inst_28491;
var inst_28468 = inst_28490;
var inst_28469 = inst_28492;
var inst_28470 = (0);
var state_28527__$1 = (function (){var statearr_28562 = state_28527;
(statearr_28562[(20)] = inst_28467);

(statearr_28562[(9)] = inst_28470);

(statearr_28562[(21)] = inst_28469);

(statearr_28562[(12)] = inst_28468);

return statearr_28562;
})();
var statearr_28563_28632 = state_28527__$1;
(statearr_28563_28632[(2)] = null);

(statearr_28563_28632[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (41))){
var inst_28486 = (state_28527[(25)]);
var inst_28502 = (state_28527[(2)]);
var inst_28503 = cljs.core.next.call(null,inst_28486);
var inst_28467 = inst_28503;
var inst_28468 = null;
var inst_28469 = (0);
var inst_28470 = (0);
var state_28527__$1 = (function (){var statearr_28564 = state_28527;
(statearr_28564[(20)] = inst_28467);

(statearr_28564[(27)] = inst_28502);

(statearr_28564[(9)] = inst_28470);

(statearr_28564[(21)] = inst_28469);

(statearr_28564[(12)] = inst_28468);

return statearr_28564;
})();
var statearr_28565_28633 = state_28527__$1;
(statearr_28565_28633[(2)] = null);

(statearr_28565_28633[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (43))){
var state_28527__$1 = state_28527;
var statearr_28566_28634 = state_28527__$1;
(statearr_28566_28634[(2)] = null);

(statearr_28566_28634[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (29))){
var inst_28511 = (state_28527[(2)]);
var state_28527__$1 = state_28527;
var statearr_28567_28635 = state_28527__$1;
(statearr_28567_28635[(2)] = inst_28511);

(statearr_28567_28635[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (44))){
var inst_28520 = (state_28527[(2)]);
var state_28527__$1 = (function (){var statearr_28568 = state_28527;
(statearr_28568[(28)] = inst_28520);

return statearr_28568;
})();
var statearr_28569_28636 = state_28527__$1;
(statearr_28569_28636[(2)] = null);

(statearr_28569_28636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (6))){
var inst_28459 = (state_28527[(29)]);
var inst_28458 = cljs.core.deref.call(null,cs);
var inst_28459__$1 = cljs.core.keys.call(null,inst_28458);
var inst_28460 = cljs.core.count.call(null,inst_28459__$1);
var inst_28461 = cljs.core.reset_BANG_.call(null,dctr,inst_28460);
var inst_28466 = cljs.core.seq.call(null,inst_28459__$1);
var inst_28467 = inst_28466;
var inst_28468 = null;
var inst_28469 = (0);
var inst_28470 = (0);
var state_28527__$1 = (function (){var statearr_28570 = state_28527;
(statearr_28570[(20)] = inst_28467);

(statearr_28570[(29)] = inst_28459__$1);

(statearr_28570[(9)] = inst_28470);

(statearr_28570[(21)] = inst_28469);

(statearr_28570[(30)] = inst_28461);

(statearr_28570[(12)] = inst_28468);

return statearr_28570;
})();
var statearr_28571_28637 = state_28527__$1;
(statearr_28571_28637[(2)] = null);

(statearr_28571_28637[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (28))){
var inst_28467 = (state_28527[(20)]);
var inst_28486 = (state_28527[(25)]);
var inst_28486__$1 = cljs.core.seq.call(null,inst_28467);
var state_28527__$1 = (function (){var statearr_28572 = state_28527;
(statearr_28572[(25)] = inst_28486__$1);

return statearr_28572;
})();
if(inst_28486__$1){
var statearr_28573_28638 = state_28527__$1;
(statearr_28573_28638[(1)] = (33));

} else {
var statearr_28574_28639 = state_28527__$1;
(statearr_28574_28639[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (25))){
var inst_28470 = (state_28527[(9)]);
var inst_28469 = (state_28527[(21)]);
var inst_28472 = (inst_28470 < inst_28469);
var inst_28473 = inst_28472;
var state_28527__$1 = state_28527;
if(cljs.core.truth_(inst_28473)){
var statearr_28575_28640 = state_28527__$1;
(statearr_28575_28640[(1)] = (27));

} else {
var statearr_28576_28641 = state_28527__$1;
(statearr_28576_28641[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (34))){
var state_28527__$1 = state_28527;
var statearr_28577_28642 = state_28527__$1;
(statearr_28577_28642[(2)] = null);

(statearr_28577_28642[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (17))){
var state_28527__$1 = state_28527;
var statearr_28578_28643 = state_28527__$1;
(statearr_28578_28643[(2)] = null);

(statearr_28578_28643[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (3))){
var inst_28525 = (state_28527[(2)]);
var state_28527__$1 = state_28527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28527__$1,inst_28525);
} else {
if((state_val_28528 === (12))){
var inst_28454 = (state_28527[(2)]);
var state_28527__$1 = state_28527;
var statearr_28579_28644 = state_28527__$1;
(statearr_28579_28644[(2)] = inst_28454);

(statearr_28579_28644[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (2))){
var state_28527__$1 = state_28527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28527__$1,(4),ch);
} else {
if((state_val_28528 === (23))){
var state_28527__$1 = state_28527;
var statearr_28580_28645 = state_28527__$1;
(statearr_28580_28645[(2)] = null);

(statearr_28580_28645[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (35))){
var inst_28509 = (state_28527[(2)]);
var state_28527__$1 = state_28527;
var statearr_28581_28646 = state_28527__$1;
(statearr_28581_28646[(2)] = inst_28509);

(statearr_28581_28646[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (19))){
var inst_28426 = (state_28527[(7)]);
var inst_28430 = cljs.core.chunk_first.call(null,inst_28426);
var inst_28431 = cljs.core.chunk_rest.call(null,inst_28426);
var inst_28432 = cljs.core.count.call(null,inst_28430);
var inst_28404 = inst_28431;
var inst_28405 = inst_28430;
var inst_28406 = inst_28432;
var inst_28407 = (0);
var state_28527__$1 = (function (){var statearr_28582 = state_28527;
(statearr_28582[(13)] = inst_28404);

(statearr_28582[(14)] = inst_28407);

(statearr_28582[(15)] = inst_28406);

(statearr_28582[(16)] = inst_28405);

return statearr_28582;
})();
var statearr_28583_28647 = state_28527__$1;
(statearr_28583_28647[(2)] = null);

(statearr_28583_28647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (11))){
var inst_28426 = (state_28527[(7)]);
var inst_28404 = (state_28527[(13)]);
var inst_28426__$1 = cljs.core.seq.call(null,inst_28404);
var state_28527__$1 = (function (){var statearr_28584 = state_28527;
(statearr_28584[(7)] = inst_28426__$1);

return statearr_28584;
})();
if(inst_28426__$1){
var statearr_28585_28648 = state_28527__$1;
(statearr_28585_28648[(1)] = (16));

} else {
var statearr_28586_28649 = state_28527__$1;
(statearr_28586_28649[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (9))){
var inst_28456 = (state_28527[(2)]);
var state_28527__$1 = state_28527;
var statearr_28587_28650 = state_28527__$1;
(statearr_28587_28650[(2)] = inst_28456);

(statearr_28587_28650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (5))){
var inst_28402 = cljs.core.deref.call(null,cs);
var inst_28403 = cljs.core.seq.call(null,inst_28402);
var inst_28404 = inst_28403;
var inst_28405 = null;
var inst_28406 = (0);
var inst_28407 = (0);
var state_28527__$1 = (function (){var statearr_28588 = state_28527;
(statearr_28588[(13)] = inst_28404);

(statearr_28588[(14)] = inst_28407);

(statearr_28588[(15)] = inst_28406);

(statearr_28588[(16)] = inst_28405);

return statearr_28588;
})();
var statearr_28589_28651 = state_28527__$1;
(statearr_28589_28651[(2)] = null);

(statearr_28589_28651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (14))){
var state_28527__$1 = state_28527;
var statearr_28590_28652 = state_28527__$1;
(statearr_28590_28652[(2)] = null);

(statearr_28590_28652[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (45))){
var inst_28517 = (state_28527[(2)]);
var state_28527__$1 = state_28527;
var statearr_28591_28653 = state_28527__$1;
(statearr_28591_28653[(2)] = inst_28517);

(statearr_28591_28653[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (26))){
var inst_28459 = (state_28527[(29)]);
var inst_28513 = (state_28527[(2)]);
var inst_28514 = cljs.core.seq.call(null,inst_28459);
var state_28527__$1 = (function (){var statearr_28592 = state_28527;
(statearr_28592[(31)] = inst_28513);

return statearr_28592;
})();
if(inst_28514){
var statearr_28593_28654 = state_28527__$1;
(statearr_28593_28654[(1)] = (42));

} else {
var statearr_28594_28655 = state_28527__$1;
(statearr_28594_28655[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (16))){
var inst_28426 = (state_28527[(7)]);
var inst_28428 = cljs.core.chunked_seq_QMARK_.call(null,inst_28426);
var state_28527__$1 = state_28527;
if(inst_28428){
var statearr_28595_28656 = state_28527__$1;
(statearr_28595_28656[(1)] = (19));

} else {
var statearr_28596_28657 = state_28527__$1;
(statearr_28596_28657[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (38))){
var inst_28506 = (state_28527[(2)]);
var state_28527__$1 = state_28527;
var statearr_28597_28658 = state_28527__$1;
(statearr_28597_28658[(2)] = inst_28506);

(statearr_28597_28658[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (30))){
var state_28527__$1 = state_28527;
var statearr_28598_28659 = state_28527__$1;
(statearr_28598_28659[(2)] = null);

(statearr_28598_28659[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (10))){
var inst_28407 = (state_28527[(14)]);
var inst_28405 = (state_28527[(16)]);
var inst_28415 = cljs.core._nth.call(null,inst_28405,inst_28407);
var inst_28416 = cljs.core.nth.call(null,inst_28415,(0),null);
var inst_28417 = cljs.core.nth.call(null,inst_28415,(1),null);
var state_28527__$1 = (function (){var statearr_28599 = state_28527;
(statearr_28599[(26)] = inst_28416);

return statearr_28599;
})();
if(cljs.core.truth_(inst_28417)){
var statearr_28600_28660 = state_28527__$1;
(statearr_28600_28660[(1)] = (13));

} else {
var statearr_28601_28661 = state_28527__$1;
(statearr_28601_28661[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (18))){
var inst_28452 = (state_28527[(2)]);
var state_28527__$1 = state_28527;
var statearr_28602_28662 = state_28527__$1;
(statearr_28602_28662[(2)] = inst_28452);

(statearr_28602_28662[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (42))){
var state_28527__$1 = state_28527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28527__$1,(45),dchan);
} else {
if((state_val_28528 === (37))){
var inst_28395 = (state_28527[(11)]);
var inst_28495 = (state_28527[(23)]);
var inst_28486 = (state_28527[(25)]);
var inst_28495__$1 = cljs.core.first.call(null,inst_28486);
var inst_28496 = cljs.core.async.put_BANG_.call(null,inst_28495__$1,inst_28395,done);
var state_28527__$1 = (function (){var statearr_28603 = state_28527;
(statearr_28603[(23)] = inst_28495__$1);

return statearr_28603;
})();
if(cljs.core.truth_(inst_28496)){
var statearr_28604_28663 = state_28527__$1;
(statearr_28604_28663[(1)] = (39));

} else {
var statearr_28605_28664 = state_28527__$1;
(statearr_28605_28664[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (8))){
var inst_28407 = (state_28527[(14)]);
var inst_28406 = (state_28527[(15)]);
var inst_28409 = (inst_28407 < inst_28406);
var inst_28410 = inst_28409;
var state_28527__$1 = state_28527;
if(cljs.core.truth_(inst_28410)){
var statearr_28606_28665 = state_28527__$1;
(statearr_28606_28665[(1)] = (10));

} else {
var statearr_28607_28666 = state_28527__$1;
(statearr_28607_28666[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__27695__auto__ = null;
var cljs$core$async$mult_$_state_machine__27695__auto____0 = (function (){
var statearr_28608 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28608[(0)] = cljs$core$async$mult_$_state_machine__27695__auto__);

(statearr_28608[(1)] = (1));

return statearr_28608;
});
var cljs$core$async$mult_$_state_machine__27695__auto____1 = (function (state_28527){
while(true){
var ret_value__27696__auto__ = (function (){try{while(true){
var result__27697__auto__ = switch__27694__auto__.call(null,state_28527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27697__auto__;
}
break;
}
}catch (e28609){if((e28609 instanceof Object)){
var ex__27698__auto__ = e28609;
var statearr_28610_28667 = state_28527;
(statearr_28610_28667[(5)] = ex__27698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28668 = state_28527;
state_28527 = G__28668;
continue;
} else {
return ret_value__27696__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27695__auto__ = function(state_28527){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27695__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27695__auto____1.call(this,state_28527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27695__auto____0;
cljs$core$async$mult_$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27695__auto____1;
return cljs$core$async$mult_$_state_machine__27695__auto__;
})()
})();
var state__27791__auto__ = (function (){var statearr_28611 = f__27790__auto__.call(null);
(statearr_28611[(6)] = c__27789__auto___28612);

return statearr_28611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27791__auto__);
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
var G__28670 = arguments.length;
switch (G__28670) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_28672 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_28672.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_28673 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_28673.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_28674 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_28674.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_28675 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_28675.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_28676 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_28676.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28687 = arguments.length;
var i__4737__auto___28688 = (0);
while(true){
if((i__4737__auto___28688 < len__4736__auto___28687)){
args__4742__auto__.push((arguments[i__4737__auto___28688]));

var G__28689 = (i__4737__auto___28688 + (1));
i__4737__auto___28688 = G__28689;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28681){
var map__28682 = p__28681;
var map__28682__$1 = (((((!((map__28682 == null))))?(((((map__28682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28682):map__28682);
var opts = map__28682__$1;
var statearr_28684_28690 = state;
(statearr_28684_28690[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_28685_28691 = state;
(statearr_28685_28691[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_28686_28692 = state;
(statearr_28686_28692[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28677){
var G__28678 = cljs.core.first.call(null,seq28677);
var seq28677__$1 = cljs.core.next.call(null,seq28677);
var G__28679 = cljs.core.first.call(null,seq28677__$1);
var seq28677__$2 = cljs.core.next.call(null,seq28677__$1);
var G__28680 = cljs.core.first.call(null,seq28677__$2);
var seq28677__$3 = cljs.core.next.call(null,seq28677__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28678,G__28679,G__28680,seq28677__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28693 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28693 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28694){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28694 = meta28694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28695,meta28694__$1){
var self__ = this;
var _28695__$1 = this;
return (new cljs.core.async.t_cljs$core$async28693(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28694__$1));
}));

(cljs.core.async.t_cljs$core$async28693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28695){
var self__ = this;
var _28695__$1 = this;
return self__.meta28694;
}));

(cljs.core.async.t_cljs$core$async28693.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28693.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async28693.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28693.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28693.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28693.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28693.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28693.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28693.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28694","meta28694",-767796297,null)], null);
}));

(cljs.core.async.t_cljs$core$async28693.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28693.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28693");

(cljs.core.async.t_cljs$core$async28693.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28693");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28693.
 */
cljs.core.async.__GT_t_cljs$core$async28693 = (function cljs$core$async$mix_$___GT_t_cljs$core$async28693(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28694){
return (new cljs.core.async.t_cljs$core$async28693(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28694));
});

}

return (new cljs.core.async.t_cljs$core$async28693(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27789__auto___28857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27790__auto__ = (function (){var switch__27694__auto__ = (function (state_28797){
var state_val_28798 = (state_28797[(1)]);
if((state_val_28798 === (7))){
var inst_28712 = (state_28797[(2)]);
var state_28797__$1 = state_28797;
var statearr_28799_28858 = state_28797__$1;
(statearr_28799_28858[(2)] = inst_28712);

(statearr_28799_28858[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (20))){
var inst_28724 = (state_28797[(7)]);
var state_28797__$1 = state_28797;
var statearr_28800_28859 = state_28797__$1;
(statearr_28800_28859[(2)] = inst_28724);

(statearr_28800_28859[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (27))){
var state_28797__$1 = state_28797;
var statearr_28801_28860 = state_28797__$1;
(statearr_28801_28860[(2)] = null);

(statearr_28801_28860[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (1))){
var inst_28699 = (state_28797[(8)]);
var inst_28699__$1 = calc_state.call(null);
var inst_28701 = (inst_28699__$1 == null);
var inst_28702 = cljs.core.not.call(null,inst_28701);
var state_28797__$1 = (function (){var statearr_28802 = state_28797;
(statearr_28802[(8)] = inst_28699__$1);

return statearr_28802;
})();
if(inst_28702){
var statearr_28803_28861 = state_28797__$1;
(statearr_28803_28861[(1)] = (2));

} else {
var statearr_28804_28862 = state_28797__$1;
(statearr_28804_28862[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (24))){
var inst_28757 = (state_28797[(9)]);
var inst_28771 = (state_28797[(10)]);
var inst_28748 = (state_28797[(11)]);
var inst_28771__$1 = inst_28748.call(null,inst_28757);
var state_28797__$1 = (function (){var statearr_28805 = state_28797;
(statearr_28805[(10)] = inst_28771__$1);

return statearr_28805;
})();
if(cljs.core.truth_(inst_28771__$1)){
var statearr_28806_28863 = state_28797__$1;
(statearr_28806_28863[(1)] = (29));

} else {
var statearr_28807_28864 = state_28797__$1;
(statearr_28807_28864[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (4))){
var inst_28715 = (state_28797[(2)]);
var state_28797__$1 = state_28797;
if(cljs.core.truth_(inst_28715)){
var statearr_28808_28865 = state_28797__$1;
(statearr_28808_28865[(1)] = (8));

} else {
var statearr_28809_28866 = state_28797__$1;
(statearr_28809_28866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (15))){
var inst_28742 = (state_28797[(2)]);
var state_28797__$1 = state_28797;
if(cljs.core.truth_(inst_28742)){
var statearr_28810_28867 = state_28797__$1;
(statearr_28810_28867[(1)] = (19));

} else {
var statearr_28811_28868 = state_28797__$1;
(statearr_28811_28868[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (21))){
var inst_28747 = (state_28797[(12)]);
var inst_28747__$1 = (state_28797[(2)]);
var inst_28748 = cljs.core.get.call(null,inst_28747__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28749 = cljs.core.get.call(null,inst_28747__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28750 = cljs.core.get.call(null,inst_28747__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28797__$1 = (function (){var statearr_28812 = state_28797;
(statearr_28812[(11)] = inst_28748);

(statearr_28812[(13)] = inst_28749);

(statearr_28812[(12)] = inst_28747__$1);

return statearr_28812;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28797__$1,(22),inst_28750);
} else {
if((state_val_28798 === (31))){
var inst_28779 = (state_28797[(2)]);
var state_28797__$1 = state_28797;
if(cljs.core.truth_(inst_28779)){
var statearr_28813_28869 = state_28797__$1;
(statearr_28813_28869[(1)] = (32));

} else {
var statearr_28814_28870 = state_28797__$1;
(statearr_28814_28870[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (32))){
var inst_28756 = (state_28797[(14)]);
var state_28797__$1 = state_28797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28797__$1,(35),out,inst_28756);
} else {
if((state_val_28798 === (33))){
var inst_28747 = (state_28797[(12)]);
var inst_28724 = inst_28747;
var state_28797__$1 = (function (){var statearr_28815 = state_28797;
(statearr_28815[(7)] = inst_28724);

return statearr_28815;
})();
var statearr_28816_28871 = state_28797__$1;
(statearr_28816_28871[(2)] = null);

(statearr_28816_28871[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (13))){
var inst_28724 = (state_28797[(7)]);
var inst_28731 = inst_28724.cljs$lang$protocol_mask$partition0$;
var inst_28732 = (inst_28731 & (64));
var inst_28733 = inst_28724.cljs$core$ISeq$;
var inst_28734 = (cljs.core.PROTOCOL_SENTINEL === inst_28733);
var inst_28735 = ((inst_28732) || (inst_28734));
var state_28797__$1 = state_28797;
if(cljs.core.truth_(inst_28735)){
var statearr_28817_28872 = state_28797__$1;
(statearr_28817_28872[(1)] = (16));

} else {
var statearr_28818_28873 = state_28797__$1;
(statearr_28818_28873[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (22))){
var inst_28757 = (state_28797[(9)]);
var inst_28756 = (state_28797[(14)]);
var inst_28755 = (state_28797[(2)]);
var inst_28756__$1 = cljs.core.nth.call(null,inst_28755,(0),null);
var inst_28757__$1 = cljs.core.nth.call(null,inst_28755,(1),null);
var inst_28758 = (inst_28756__$1 == null);
var inst_28759 = cljs.core._EQ_.call(null,inst_28757__$1,change);
var inst_28760 = ((inst_28758) || (inst_28759));
var state_28797__$1 = (function (){var statearr_28819 = state_28797;
(statearr_28819[(9)] = inst_28757__$1);

(statearr_28819[(14)] = inst_28756__$1);

return statearr_28819;
})();
if(cljs.core.truth_(inst_28760)){
var statearr_28820_28874 = state_28797__$1;
(statearr_28820_28874[(1)] = (23));

} else {
var statearr_28821_28875 = state_28797__$1;
(statearr_28821_28875[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (36))){
var inst_28747 = (state_28797[(12)]);
var inst_28724 = inst_28747;
var state_28797__$1 = (function (){var statearr_28822 = state_28797;
(statearr_28822[(7)] = inst_28724);

return statearr_28822;
})();
var statearr_28823_28876 = state_28797__$1;
(statearr_28823_28876[(2)] = null);

(statearr_28823_28876[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (29))){
var inst_28771 = (state_28797[(10)]);
var state_28797__$1 = state_28797;
var statearr_28824_28877 = state_28797__$1;
(statearr_28824_28877[(2)] = inst_28771);

(statearr_28824_28877[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (6))){
var state_28797__$1 = state_28797;
var statearr_28825_28878 = state_28797__$1;
(statearr_28825_28878[(2)] = false);

(statearr_28825_28878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (28))){
var inst_28767 = (state_28797[(2)]);
var inst_28768 = calc_state.call(null);
var inst_28724 = inst_28768;
var state_28797__$1 = (function (){var statearr_28826 = state_28797;
(statearr_28826[(7)] = inst_28724);

(statearr_28826[(15)] = inst_28767);

return statearr_28826;
})();
var statearr_28827_28879 = state_28797__$1;
(statearr_28827_28879[(2)] = null);

(statearr_28827_28879[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (25))){
var inst_28793 = (state_28797[(2)]);
var state_28797__$1 = state_28797;
var statearr_28828_28880 = state_28797__$1;
(statearr_28828_28880[(2)] = inst_28793);

(statearr_28828_28880[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (34))){
var inst_28791 = (state_28797[(2)]);
var state_28797__$1 = state_28797;
var statearr_28829_28881 = state_28797__$1;
(statearr_28829_28881[(2)] = inst_28791);

(statearr_28829_28881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (17))){
var state_28797__$1 = state_28797;
var statearr_28830_28882 = state_28797__$1;
(statearr_28830_28882[(2)] = false);

(statearr_28830_28882[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (3))){
var state_28797__$1 = state_28797;
var statearr_28831_28883 = state_28797__$1;
(statearr_28831_28883[(2)] = false);

(statearr_28831_28883[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (12))){
var inst_28795 = (state_28797[(2)]);
var state_28797__$1 = state_28797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28797__$1,inst_28795);
} else {
if((state_val_28798 === (2))){
var inst_28699 = (state_28797[(8)]);
var inst_28704 = inst_28699.cljs$lang$protocol_mask$partition0$;
var inst_28705 = (inst_28704 & (64));
var inst_28706 = inst_28699.cljs$core$ISeq$;
var inst_28707 = (cljs.core.PROTOCOL_SENTINEL === inst_28706);
var inst_28708 = ((inst_28705) || (inst_28707));
var state_28797__$1 = state_28797;
if(cljs.core.truth_(inst_28708)){
var statearr_28832_28884 = state_28797__$1;
(statearr_28832_28884[(1)] = (5));

} else {
var statearr_28833_28885 = state_28797__$1;
(statearr_28833_28885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (23))){
var inst_28756 = (state_28797[(14)]);
var inst_28762 = (inst_28756 == null);
var state_28797__$1 = state_28797;
if(cljs.core.truth_(inst_28762)){
var statearr_28834_28886 = state_28797__$1;
(statearr_28834_28886[(1)] = (26));

} else {
var statearr_28835_28887 = state_28797__$1;
(statearr_28835_28887[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (35))){
var inst_28782 = (state_28797[(2)]);
var state_28797__$1 = state_28797;
if(cljs.core.truth_(inst_28782)){
var statearr_28836_28888 = state_28797__$1;
(statearr_28836_28888[(1)] = (36));

} else {
var statearr_28837_28889 = state_28797__$1;
(statearr_28837_28889[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (19))){
var inst_28724 = (state_28797[(7)]);
var inst_28744 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28724);
var state_28797__$1 = state_28797;
var statearr_28838_28890 = state_28797__$1;
(statearr_28838_28890[(2)] = inst_28744);

(statearr_28838_28890[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (11))){
var inst_28724 = (state_28797[(7)]);
var inst_28728 = (inst_28724 == null);
var inst_28729 = cljs.core.not.call(null,inst_28728);
var state_28797__$1 = state_28797;
if(inst_28729){
var statearr_28839_28891 = state_28797__$1;
(statearr_28839_28891[(1)] = (13));

} else {
var statearr_28840_28892 = state_28797__$1;
(statearr_28840_28892[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (9))){
var inst_28699 = (state_28797[(8)]);
var state_28797__$1 = state_28797;
var statearr_28841_28893 = state_28797__$1;
(statearr_28841_28893[(2)] = inst_28699);

(statearr_28841_28893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (5))){
var state_28797__$1 = state_28797;
var statearr_28842_28894 = state_28797__$1;
(statearr_28842_28894[(2)] = true);

(statearr_28842_28894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (14))){
var state_28797__$1 = state_28797;
var statearr_28843_28895 = state_28797__$1;
(statearr_28843_28895[(2)] = false);

(statearr_28843_28895[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (26))){
var inst_28757 = (state_28797[(9)]);
var inst_28764 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28757);
var state_28797__$1 = state_28797;
var statearr_28844_28896 = state_28797__$1;
(statearr_28844_28896[(2)] = inst_28764);

(statearr_28844_28896[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (16))){
var state_28797__$1 = state_28797;
var statearr_28845_28897 = state_28797__$1;
(statearr_28845_28897[(2)] = true);

(statearr_28845_28897[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (38))){
var inst_28787 = (state_28797[(2)]);
var state_28797__$1 = state_28797;
var statearr_28846_28898 = state_28797__$1;
(statearr_28846_28898[(2)] = inst_28787);

(statearr_28846_28898[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (30))){
var inst_28757 = (state_28797[(9)]);
var inst_28748 = (state_28797[(11)]);
var inst_28749 = (state_28797[(13)]);
var inst_28774 = cljs.core.empty_QMARK_.call(null,inst_28748);
var inst_28775 = inst_28749.call(null,inst_28757);
var inst_28776 = cljs.core.not.call(null,inst_28775);
var inst_28777 = ((inst_28774) && (inst_28776));
var state_28797__$1 = state_28797;
var statearr_28847_28899 = state_28797__$1;
(statearr_28847_28899[(2)] = inst_28777);

(statearr_28847_28899[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (10))){
var inst_28699 = (state_28797[(8)]);
var inst_28720 = (state_28797[(2)]);
var inst_28721 = cljs.core.get.call(null,inst_28720,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28722 = cljs.core.get.call(null,inst_28720,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28723 = cljs.core.get.call(null,inst_28720,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28724 = inst_28699;
var state_28797__$1 = (function (){var statearr_28848 = state_28797;
(statearr_28848[(16)] = inst_28723);

(statearr_28848[(17)] = inst_28721);

(statearr_28848[(7)] = inst_28724);

(statearr_28848[(18)] = inst_28722);

return statearr_28848;
})();
var statearr_28849_28900 = state_28797__$1;
(statearr_28849_28900[(2)] = null);

(statearr_28849_28900[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (18))){
var inst_28739 = (state_28797[(2)]);
var state_28797__$1 = state_28797;
var statearr_28850_28901 = state_28797__$1;
(statearr_28850_28901[(2)] = inst_28739);

(statearr_28850_28901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (37))){
var state_28797__$1 = state_28797;
var statearr_28851_28902 = state_28797__$1;
(statearr_28851_28902[(2)] = null);

(statearr_28851_28902[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28798 === (8))){
var inst_28699 = (state_28797[(8)]);
var inst_28717 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28699);
var state_28797__$1 = state_28797;
var statearr_28852_28903 = state_28797__$1;
(statearr_28852_28903[(2)] = inst_28717);

(statearr_28852_28903[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__27695__auto__ = null;
var cljs$core$async$mix_$_state_machine__27695__auto____0 = (function (){
var statearr_28853 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28853[(0)] = cljs$core$async$mix_$_state_machine__27695__auto__);

(statearr_28853[(1)] = (1));

return statearr_28853;
});
var cljs$core$async$mix_$_state_machine__27695__auto____1 = (function (state_28797){
while(true){
var ret_value__27696__auto__ = (function (){try{while(true){
var result__27697__auto__ = switch__27694__auto__.call(null,state_28797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27697__auto__;
}
break;
}
}catch (e28854){if((e28854 instanceof Object)){
var ex__27698__auto__ = e28854;
var statearr_28855_28904 = state_28797;
(statearr_28855_28904[(5)] = ex__27698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28905 = state_28797;
state_28797 = G__28905;
continue;
} else {
return ret_value__27696__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27695__auto__ = function(state_28797){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27695__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27695__auto____1.call(this,state_28797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27695__auto____0;
cljs$core$async$mix_$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27695__auto____1;
return cljs$core$async$mix_$_state_machine__27695__auto__;
})()
})();
var state__27791__auto__ = (function (){var statearr_28856 = f__27790__auto__.call(null);
(statearr_28856[(6)] = c__27789__auto___28857);

return statearr_28856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27791__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_28908 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_28908.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_28909 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_28909.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_28910 = (function() {
var G__28911 = null;
var G__28911__1 = (function (p){
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
var G__28911__2 = (function (p,v){
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
G__28911 = function(p,v){
switch(arguments.length){
case 1:
return G__28911__1.call(this,p);
case 2:
return G__28911__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28911.cljs$core$IFn$_invoke$arity$1 = G__28911__1;
G__28911.cljs$core$IFn$_invoke$arity$2 = G__28911__2;
return G__28911;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28907 = arguments.length;
switch (G__28907) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_28910.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_28910.call(null,p,v);
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
var G__28915 = arguments.length;
switch (G__28915) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__28913_SHARP_){
if(cljs.core.truth_(p1__28913_SHARP_.call(null,topic))){
return p1__28913_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28913_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28916 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28916 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28917){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28917 = meta28917;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28918,meta28917__$1){
var self__ = this;
var _28918__$1 = this;
return (new cljs.core.async.t_cljs$core$async28916(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28917__$1));
}));

(cljs.core.async.t_cljs$core$async28916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28918){
var self__ = this;
var _28918__$1 = this;
return self__.meta28917;
}));

(cljs.core.async.t_cljs$core$async28916.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28916.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28916.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28916.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async28916.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async28916.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async28916.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async28916.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28917","meta28917",-90241060,null)], null);
}));

(cljs.core.async.t_cljs$core$async28916.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28916.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28916");

(cljs.core.async.t_cljs$core$async28916.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28916");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28916.
 */
cljs.core.async.__GT_t_cljs$core$async28916 = (function cljs$core$async$__GT_t_cljs$core$async28916(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28917){
return (new cljs.core.async.t_cljs$core$async28916(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28917));
});

}

return (new cljs.core.async.t_cljs$core$async28916(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27789__auto___29036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27790__auto__ = (function (){var switch__27694__auto__ = (function (state_28990){
var state_val_28991 = (state_28990[(1)]);
if((state_val_28991 === (7))){
var inst_28986 = (state_28990[(2)]);
var state_28990__$1 = state_28990;
var statearr_28992_29037 = state_28990__$1;
(statearr_28992_29037[(2)] = inst_28986);

(statearr_28992_29037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28991 === (20))){
var state_28990__$1 = state_28990;
var statearr_28993_29038 = state_28990__$1;
(statearr_28993_29038[(2)] = null);

(statearr_28993_29038[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28991 === (1))){
var state_28990__$1 = state_28990;
var statearr_28994_29039 = state_28990__$1;
(statearr_28994_29039[(2)] = null);

(statearr_28994_29039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28991 === (24))){
var inst_28969 = (state_28990[(7)]);
var inst_28978 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28969);
var state_28990__$1 = state_28990;
var statearr_28995_29040 = state_28990__$1;
(statearr_28995_29040[(2)] = inst_28978);

(statearr_28995_29040[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28991 === (4))){
var inst_28921 = (state_28990[(8)]);
var inst_28921__$1 = (state_28990[(2)]);
var inst_28922 = (inst_28921__$1 == null);
var state_28990__$1 = (function (){var statearr_28996 = state_28990;
(statearr_28996[(8)] = inst_28921__$1);

return statearr_28996;
})();
if(cljs.core.truth_(inst_28922)){
var statearr_28997_29041 = state_28990__$1;
(statearr_28997_29041[(1)] = (5));

} else {
var statearr_28998_29042 = state_28990__$1;
(statearr_28998_29042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28991 === (15))){
var inst_28963 = (state_28990[(2)]);
var state_28990__$1 = state_28990;
var statearr_28999_29043 = state_28990__$1;
(statearr_28999_29043[(2)] = inst_28963);

(statearr_28999_29043[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28991 === (21))){
var inst_28983 = (state_28990[(2)]);
var state_28990__$1 = (function (){var statearr_29000 = state_28990;
(statearr_29000[(9)] = inst_28983);

return statearr_29000;
})();
var statearr_29001_29044 = state_28990__$1;
(statearr_29001_29044[(2)] = null);

(statearr_29001_29044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28991 === (13))){
var inst_28945 = (state_28990[(10)]);
var inst_28947 = cljs.core.chunked_seq_QMARK_.call(null,inst_28945);
var state_28990__$1 = state_28990;
if(inst_28947){
var statearr_29002_29045 = state_28990__$1;
(statearr_29002_29045[(1)] = (16));

} else {
var statearr_29003_29046 = state_28990__$1;
(statearr_29003_29046[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28991 === (22))){
var inst_28975 = (state_28990[(2)]);
var state_28990__$1 = state_28990;
if(cljs.core.truth_(inst_28975)){
var statearr_29004_29047 = state_28990__$1;
(statearr_29004_29047[(1)] = (23));

} else {
var statearr_29005_29048 = state_28990__$1;
(statearr_29005_29048[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28991 === (6))){
var inst_28921 = (state_28990[(8)]);
var inst_28969 = (state_28990[(7)]);
var inst_28971 = (state_28990[(11)]);
var inst_28969__$1 = topic_fn.call(null,inst_28921);
var inst_28970 = cljs.core.deref.call(null,mults);
var inst_28971__$1 = cljs.core.get.call(null,inst_28970,inst_28969__$1);
var state_28990__$1 = (function (){var statearr_29006 = state_28990;
(statearr_29006[(7)] = inst_28969__$1);

(statearr_29006[(11)] = inst_28971__$1);

return statearr_29006;
})();
if(cljs.core.truth_(inst_28971__$1)){
var statearr_29007_29049 = state_28990__$1;
(statearr_29007_29049[(1)] = (19));

} else {
var statearr_29008_29050 = state_28990__$1;
(statearr_29008_29050[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28991 === (25))){
var inst_28980 = (state_28990[(2)]);
var state_28990__$1 = state_28990;
var statearr_29009_29051 = state_28990__$1;
(statearr_29009_29051[(2)] = inst_28980);

(statearr_29009_29051[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28991 === (17))){
var inst_28945 = (state_28990[(10)]);
var inst_28954 = cljs.core.first.call(null,inst_28945);
var inst_28955 = cljs.core.async.muxch_STAR_.call(null,inst_28954);
var inst_28956 = cljs.core.async.close_BANG_.call(null,inst_28955);
var inst_28957 = cljs.core.next.call(null,inst_28945);
var inst_28931 = inst_28957;
var inst_28932 = null;
var inst_28933 = (0);
var inst_28934 = (0);
var state_28990__$1 = (function (){var statearr_29010 = state_28990;
(statearr_29010[(12)] = inst_28931);

(statearr_29010[(13)] = inst_28934);

(statearr_29010[(14)] = inst_28932);

(statearr_29010[(15)] = inst_28933);

(statearr_29010[(16)] = inst_28956);

return statearr_29010;
})();
var statearr_29011_29052 = state_28990__$1;
(statearr_29011_29052[(2)] = null);

(statearr_29011_29052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28991 === (3))){
var inst_28988 = (state_28990[(2)]);
var state_28990__$1 = state_28990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28990__$1,inst_28988);
} else {
if((state_val_28991 === (12))){
var inst_28965 = (state_28990[(2)]);
var state_28990__$1 = state_28990;
var statearr_29012_29053 = state_28990__$1;
(statearr_29012_29053[(2)] = inst_28965);

(statearr_29012_29053[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28991 === (2))){
var state_28990__$1 = state_28990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28990__$1,(4),ch);
} else {
if((state_val_28991 === (23))){
var state_28990__$1 = state_28990;
var statearr_29013_29054 = state_28990__$1;
(statearr_29013_29054[(2)] = null);

(statearr_29013_29054[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28991 === (19))){
var inst_28921 = (state_28990[(8)]);
var inst_28971 = (state_28990[(11)]);
var inst_28973 = cljs.core.async.muxch_STAR_.call(null,inst_28971);
var state_28990__$1 = state_28990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28990__$1,(22),inst_28973,inst_28921);
} else {
if((state_val_28991 === (11))){
var inst_28931 = (state_28990[(12)]);
var inst_28945 = (state_28990[(10)]);
var inst_28945__$1 = cljs.core.seq.call(null,inst_28931);
var state_28990__$1 = (function (){var statearr_29014 = state_28990;
(statearr_29014[(10)] = inst_28945__$1);

return statearr_29014;
})();
if(inst_28945__$1){
var statearr_29015_29055 = state_28990__$1;
(statearr_29015_29055[(1)] = (13));

} else {
var statearr_29016_29056 = state_28990__$1;
(statearr_29016_29056[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28991 === (9))){
var inst_28967 = (state_28990[(2)]);
var state_28990__$1 = state_28990;
var statearr_29017_29057 = state_28990__$1;
(statearr_29017_29057[(2)] = inst_28967);

(statearr_29017_29057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28991 === (5))){
var inst_28928 = cljs.core.deref.call(null,mults);
var inst_28929 = cljs.core.vals.call(null,inst_28928);
var inst_28930 = cljs.core.seq.call(null,inst_28929);
var inst_28931 = inst_28930;
var inst_28932 = null;
var inst_28933 = (0);
var inst_28934 = (0);
var state_28990__$1 = (function (){var statearr_29018 = state_28990;
(statearr_29018[(12)] = inst_28931);

(statearr_29018[(13)] = inst_28934);

(statearr_29018[(14)] = inst_28932);

(statearr_29018[(15)] = inst_28933);

return statearr_29018;
})();
var statearr_29019_29058 = state_28990__$1;
(statearr_29019_29058[(2)] = null);

(statearr_29019_29058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28991 === (14))){
var state_28990__$1 = state_28990;
var statearr_29023_29059 = state_28990__$1;
(statearr_29023_29059[(2)] = null);

(statearr_29023_29059[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28991 === (16))){
var inst_28945 = (state_28990[(10)]);
var inst_28949 = cljs.core.chunk_first.call(null,inst_28945);
var inst_28950 = cljs.core.chunk_rest.call(null,inst_28945);
var inst_28951 = cljs.core.count.call(null,inst_28949);
var inst_28931 = inst_28950;
var inst_28932 = inst_28949;
var inst_28933 = inst_28951;
var inst_28934 = (0);
var state_28990__$1 = (function (){var statearr_29024 = state_28990;
(statearr_29024[(12)] = inst_28931);

(statearr_29024[(13)] = inst_28934);

(statearr_29024[(14)] = inst_28932);

(statearr_29024[(15)] = inst_28933);

return statearr_29024;
})();
var statearr_29025_29060 = state_28990__$1;
(statearr_29025_29060[(2)] = null);

(statearr_29025_29060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28991 === (10))){
var inst_28931 = (state_28990[(12)]);
var inst_28934 = (state_28990[(13)]);
var inst_28932 = (state_28990[(14)]);
var inst_28933 = (state_28990[(15)]);
var inst_28939 = cljs.core._nth.call(null,inst_28932,inst_28934);
var inst_28940 = cljs.core.async.muxch_STAR_.call(null,inst_28939);
var inst_28941 = cljs.core.async.close_BANG_.call(null,inst_28940);
var inst_28942 = (inst_28934 + (1));
var tmp29020 = inst_28931;
var tmp29021 = inst_28932;
var tmp29022 = inst_28933;
var inst_28931__$1 = tmp29020;
var inst_28932__$1 = tmp29021;
var inst_28933__$1 = tmp29022;
var inst_28934__$1 = inst_28942;
var state_28990__$1 = (function (){var statearr_29026 = state_28990;
(statearr_29026[(17)] = inst_28941);

(statearr_29026[(12)] = inst_28931__$1);

(statearr_29026[(13)] = inst_28934__$1);

(statearr_29026[(14)] = inst_28932__$1);

(statearr_29026[(15)] = inst_28933__$1);

return statearr_29026;
})();
var statearr_29027_29061 = state_28990__$1;
(statearr_29027_29061[(2)] = null);

(statearr_29027_29061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28991 === (18))){
var inst_28960 = (state_28990[(2)]);
var state_28990__$1 = state_28990;
var statearr_29028_29062 = state_28990__$1;
(statearr_29028_29062[(2)] = inst_28960);

(statearr_29028_29062[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28991 === (8))){
var inst_28934 = (state_28990[(13)]);
var inst_28933 = (state_28990[(15)]);
var inst_28936 = (inst_28934 < inst_28933);
var inst_28937 = inst_28936;
var state_28990__$1 = state_28990;
if(cljs.core.truth_(inst_28937)){
var statearr_29029_29063 = state_28990__$1;
(statearr_29029_29063[(1)] = (10));

} else {
var statearr_29030_29064 = state_28990__$1;
(statearr_29030_29064[(1)] = (11));

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
var cljs$core$async$state_machine__27695__auto__ = null;
var cljs$core$async$state_machine__27695__auto____0 = (function (){
var statearr_29031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29031[(0)] = cljs$core$async$state_machine__27695__auto__);

(statearr_29031[(1)] = (1));

return statearr_29031;
});
var cljs$core$async$state_machine__27695__auto____1 = (function (state_28990){
while(true){
var ret_value__27696__auto__ = (function (){try{while(true){
var result__27697__auto__ = switch__27694__auto__.call(null,state_28990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27697__auto__;
}
break;
}
}catch (e29032){if((e29032 instanceof Object)){
var ex__27698__auto__ = e29032;
var statearr_29033_29065 = state_28990;
(statearr_29033_29065[(5)] = ex__27698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29066 = state_28990;
state_28990 = G__29066;
continue;
} else {
return ret_value__27696__auto__;
}
break;
}
});
cljs$core$async$state_machine__27695__auto__ = function(state_28990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27695__auto____1.call(this,state_28990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27695__auto____0;
cljs$core$async$state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27695__auto____1;
return cljs$core$async$state_machine__27695__auto__;
})()
})();
var state__27791__auto__ = (function (){var statearr_29034 = f__27790__auto__.call(null);
(statearr_29034[(6)] = c__27789__auto___29036);

return statearr_29034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27791__auto__);
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
var G__29068 = arguments.length;
switch (G__29068) {
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
var G__29071 = arguments.length;
switch (G__29071) {
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
var G__29074 = arguments.length;
switch (G__29074) {
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
var c__27789__auto___29141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27790__auto__ = (function (){var switch__27694__auto__ = (function (state_29113){
var state_val_29114 = (state_29113[(1)]);
if((state_val_29114 === (7))){
var state_29113__$1 = state_29113;
var statearr_29115_29142 = state_29113__$1;
(statearr_29115_29142[(2)] = null);

(statearr_29115_29142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29114 === (1))){
var state_29113__$1 = state_29113;
var statearr_29116_29143 = state_29113__$1;
(statearr_29116_29143[(2)] = null);

(statearr_29116_29143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29114 === (4))){
var inst_29077 = (state_29113[(7)]);
var inst_29079 = (inst_29077 < cnt);
var state_29113__$1 = state_29113;
if(cljs.core.truth_(inst_29079)){
var statearr_29117_29144 = state_29113__$1;
(statearr_29117_29144[(1)] = (6));

} else {
var statearr_29118_29145 = state_29113__$1;
(statearr_29118_29145[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29114 === (15))){
var inst_29109 = (state_29113[(2)]);
var state_29113__$1 = state_29113;
var statearr_29119_29146 = state_29113__$1;
(statearr_29119_29146[(2)] = inst_29109);

(statearr_29119_29146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29114 === (13))){
var inst_29102 = cljs.core.async.close_BANG_.call(null,out);
var state_29113__$1 = state_29113;
var statearr_29120_29147 = state_29113__$1;
(statearr_29120_29147[(2)] = inst_29102);

(statearr_29120_29147[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29114 === (6))){
var state_29113__$1 = state_29113;
var statearr_29121_29148 = state_29113__$1;
(statearr_29121_29148[(2)] = null);

(statearr_29121_29148[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29114 === (3))){
var inst_29111 = (state_29113[(2)]);
var state_29113__$1 = state_29113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29113__$1,inst_29111);
} else {
if((state_val_29114 === (12))){
var inst_29099 = (state_29113[(8)]);
var inst_29099__$1 = (state_29113[(2)]);
var inst_29100 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29099__$1);
var state_29113__$1 = (function (){var statearr_29122 = state_29113;
(statearr_29122[(8)] = inst_29099__$1);

return statearr_29122;
})();
if(cljs.core.truth_(inst_29100)){
var statearr_29123_29149 = state_29113__$1;
(statearr_29123_29149[(1)] = (13));

} else {
var statearr_29124_29150 = state_29113__$1;
(statearr_29124_29150[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29114 === (2))){
var inst_29076 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29077 = (0);
var state_29113__$1 = (function (){var statearr_29125 = state_29113;
(statearr_29125[(9)] = inst_29076);

(statearr_29125[(7)] = inst_29077);

return statearr_29125;
})();
var statearr_29126_29151 = state_29113__$1;
(statearr_29126_29151[(2)] = null);

(statearr_29126_29151[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29114 === (11))){
var inst_29077 = (state_29113[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29113,(10),Object,null,(9));
var inst_29086 = chs__$1.call(null,inst_29077);
var inst_29087 = done.call(null,inst_29077);
var inst_29088 = cljs.core.async.take_BANG_.call(null,inst_29086,inst_29087);
var state_29113__$1 = state_29113;
var statearr_29127_29152 = state_29113__$1;
(statearr_29127_29152[(2)] = inst_29088);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29113__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29114 === (9))){
var inst_29077 = (state_29113[(7)]);
var inst_29090 = (state_29113[(2)]);
var inst_29091 = (inst_29077 + (1));
var inst_29077__$1 = inst_29091;
var state_29113__$1 = (function (){var statearr_29128 = state_29113;
(statearr_29128[(10)] = inst_29090);

(statearr_29128[(7)] = inst_29077__$1);

return statearr_29128;
})();
var statearr_29129_29153 = state_29113__$1;
(statearr_29129_29153[(2)] = null);

(statearr_29129_29153[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29114 === (5))){
var inst_29097 = (state_29113[(2)]);
var state_29113__$1 = (function (){var statearr_29130 = state_29113;
(statearr_29130[(11)] = inst_29097);

return statearr_29130;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29113__$1,(12),dchan);
} else {
if((state_val_29114 === (14))){
var inst_29099 = (state_29113[(8)]);
var inst_29104 = cljs.core.apply.call(null,f,inst_29099);
var state_29113__$1 = state_29113;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29113__$1,(16),out,inst_29104);
} else {
if((state_val_29114 === (16))){
var inst_29106 = (state_29113[(2)]);
var state_29113__$1 = (function (){var statearr_29131 = state_29113;
(statearr_29131[(12)] = inst_29106);

return statearr_29131;
})();
var statearr_29132_29154 = state_29113__$1;
(statearr_29132_29154[(2)] = null);

(statearr_29132_29154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29114 === (10))){
var inst_29081 = (state_29113[(2)]);
var inst_29082 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29113__$1 = (function (){var statearr_29133 = state_29113;
(statearr_29133[(13)] = inst_29081);

return statearr_29133;
})();
var statearr_29134_29155 = state_29113__$1;
(statearr_29134_29155[(2)] = inst_29082);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29113__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29114 === (8))){
var inst_29095 = (state_29113[(2)]);
var state_29113__$1 = state_29113;
var statearr_29135_29156 = state_29113__$1;
(statearr_29135_29156[(2)] = inst_29095);

(statearr_29135_29156[(1)] = (5));


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
var cljs$core$async$state_machine__27695__auto__ = null;
var cljs$core$async$state_machine__27695__auto____0 = (function (){
var statearr_29136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29136[(0)] = cljs$core$async$state_machine__27695__auto__);

(statearr_29136[(1)] = (1));

return statearr_29136;
});
var cljs$core$async$state_machine__27695__auto____1 = (function (state_29113){
while(true){
var ret_value__27696__auto__ = (function (){try{while(true){
var result__27697__auto__ = switch__27694__auto__.call(null,state_29113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27697__auto__;
}
break;
}
}catch (e29137){if((e29137 instanceof Object)){
var ex__27698__auto__ = e29137;
var statearr_29138_29157 = state_29113;
(statearr_29138_29157[(5)] = ex__27698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29158 = state_29113;
state_29113 = G__29158;
continue;
} else {
return ret_value__27696__auto__;
}
break;
}
});
cljs$core$async$state_machine__27695__auto__ = function(state_29113){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27695__auto____1.call(this,state_29113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27695__auto____0;
cljs$core$async$state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27695__auto____1;
return cljs$core$async$state_machine__27695__auto__;
})()
})();
var state__27791__auto__ = (function (){var statearr_29139 = f__27790__auto__.call(null);
(statearr_29139[(6)] = c__27789__auto___29141);

return statearr_29139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27791__auto__);
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
var G__29161 = arguments.length;
switch (G__29161) {
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
var c__27789__auto___29215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27790__auto__ = (function (){var switch__27694__auto__ = (function (state_29193){
var state_val_29194 = (state_29193[(1)]);
if((state_val_29194 === (7))){
var inst_29172 = (state_29193[(7)]);
var inst_29173 = (state_29193[(8)]);
var inst_29172__$1 = (state_29193[(2)]);
var inst_29173__$1 = cljs.core.nth.call(null,inst_29172__$1,(0),null);
var inst_29174 = cljs.core.nth.call(null,inst_29172__$1,(1),null);
var inst_29175 = (inst_29173__$1 == null);
var state_29193__$1 = (function (){var statearr_29195 = state_29193;
(statearr_29195[(7)] = inst_29172__$1);

(statearr_29195[(8)] = inst_29173__$1);

(statearr_29195[(9)] = inst_29174);

return statearr_29195;
})();
if(cljs.core.truth_(inst_29175)){
var statearr_29196_29216 = state_29193__$1;
(statearr_29196_29216[(1)] = (8));

} else {
var statearr_29197_29217 = state_29193__$1;
(statearr_29197_29217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29194 === (1))){
var inst_29162 = cljs.core.vec.call(null,chs);
var inst_29163 = inst_29162;
var state_29193__$1 = (function (){var statearr_29198 = state_29193;
(statearr_29198[(10)] = inst_29163);

return statearr_29198;
})();
var statearr_29199_29218 = state_29193__$1;
(statearr_29199_29218[(2)] = null);

(statearr_29199_29218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29194 === (4))){
var inst_29163 = (state_29193[(10)]);
var state_29193__$1 = state_29193;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29193__$1,(7),inst_29163);
} else {
if((state_val_29194 === (6))){
var inst_29189 = (state_29193[(2)]);
var state_29193__$1 = state_29193;
var statearr_29200_29219 = state_29193__$1;
(statearr_29200_29219[(2)] = inst_29189);

(statearr_29200_29219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29194 === (3))){
var inst_29191 = (state_29193[(2)]);
var state_29193__$1 = state_29193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29193__$1,inst_29191);
} else {
if((state_val_29194 === (2))){
var inst_29163 = (state_29193[(10)]);
var inst_29165 = cljs.core.count.call(null,inst_29163);
var inst_29166 = (inst_29165 > (0));
var state_29193__$1 = state_29193;
if(cljs.core.truth_(inst_29166)){
var statearr_29202_29220 = state_29193__$1;
(statearr_29202_29220[(1)] = (4));

} else {
var statearr_29203_29221 = state_29193__$1;
(statearr_29203_29221[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29194 === (11))){
var inst_29163 = (state_29193[(10)]);
var inst_29182 = (state_29193[(2)]);
var tmp29201 = inst_29163;
var inst_29163__$1 = tmp29201;
var state_29193__$1 = (function (){var statearr_29204 = state_29193;
(statearr_29204[(11)] = inst_29182);

(statearr_29204[(10)] = inst_29163__$1);

return statearr_29204;
})();
var statearr_29205_29222 = state_29193__$1;
(statearr_29205_29222[(2)] = null);

(statearr_29205_29222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29194 === (9))){
var inst_29173 = (state_29193[(8)]);
var state_29193__$1 = state_29193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29193__$1,(11),out,inst_29173);
} else {
if((state_val_29194 === (5))){
var inst_29187 = cljs.core.async.close_BANG_.call(null,out);
var state_29193__$1 = state_29193;
var statearr_29206_29223 = state_29193__$1;
(statearr_29206_29223[(2)] = inst_29187);

(statearr_29206_29223[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29194 === (10))){
var inst_29185 = (state_29193[(2)]);
var state_29193__$1 = state_29193;
var statearr_29207_29224 = state_29193__$1;
(statearr_29207_29224[(2)] = inst_29185);

(statearr_29207_29224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29194 === (8))){
var inst_29172 = (state_29193[(7)]);
var inst_29173 = (state_29193[(8)]);
var inst_29174 = (state_29193[(9)]);
var inst_29163 = (state_29193[(10)]);
var inst_29177 = (function (){var cs = inst_29163;
var vec__29168 = inst_29172;
var v = inst_29173;
var c = inst_29174;
return (function (p1__29159_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29159_SHARP_);
});
})();
var inst_29178 = cljs.core.filterv.call(null,inst_29177,inst_29163);
var inst_29163__$1 = inst_29178;
var state_29193__$1 = (function (){var statearr_29208 = state_29193;
(statearr_29208[(10)] = inst_29163__$1);

return statearr_29208;
})();
var statearr_29209_29225 = state_29193__$1;
(statearr_29209_29225[(2)] = null);

(statearr_29209_29225[(1)] = (2));


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
var cljs$core$async$state_machine__27695__auto__ = null;
var cljs$core$async$state_machine__27695__auto____0 = (function (){
var statearr_29210 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29210[(0)] = cljs$core$async$state_machine__27695__auto__);

(statearr_29210[(1)] = (1));

return statearr_29210;
});
var cljs$core$async$state_machine__27695__auto____1 = (function (state_29193){
while(true){
var ret_value__27696__auto__ = (function (){try{while(true){
var result__27697__auto__ = switch__27694__auto__.call(null,state_29193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27697__auto__;
}
break;
}
}catch (e29211){if((e29211 instanceof Object)){
var ex__27698__auto__ = e29211;
var statearr_29212_29226 = state_29193;
(statearr_29212_29226[(5)] = ex__27698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29227 = state_29193;
state_29193 = G__29227;
continue;
} else {
return ret_value__27696__auto__;
}
break;
}
});
cljs$core$async$state_machine__27695__auto__ = function(state_29193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27695__auto____1.call(this,state_29193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27695__auto____0;
cljs$core$async$state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27695__auto____1;
return cljs$core$async$state_machine__27695__auto__;
})()
})();
var state__27791__auto__ = (function (){var statearr_29213 = f__27790__auto__.call(null);
(statearr_29213[(6)] = c__27789__auto___29215);

return statearr_29213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27791__auto__);
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
var G__29229 = arguments.length;
switch (G__29229) {
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
var c__27789__auto___29274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27790__auto__ = (function (){var switch__27694__auto__ = (function (state_29253){
var state_val_29254 = (state_29253[(1)]);
if((state_val_29254 === (7))){
var inst_29235 = (state_29253[(7)]);
var inst_29235__$1 = (state_29253[(2)]);
var inst_29236 = (inst_29235__$1 == null);
var inst_29237 = cljs.core.not.call(null,inst_29236);
var state_29253__$1 = (function (){var statearr_29255 = state_29253;
(statearr_29255[(7)] = inst_29235__$1);

return statearr_29255;
})();
if(inst_29237){
var statearr_29256_29275 = state_29253__$1;
(statearr_29256_29275[(1)] = (8));

} else {
var statearr_29257_29276 = state_29253__$1;
(statearr_29257_29276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (1))){
var inst_29230 = (0);
var state_29253__$1 = (function (){var statearr_29258 = state_29253;
(statearr_29258[(8)] = inst_29230);

return statearr_29258;
})();
var statearr_29259_29277 = state_29253__$1;
(statearr_29259_29277[(2)] = null);

(statearr_29259_29277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (4))){
var state_29253__$1 = state_29253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29253__$1,(7),ch);
} else {
if((state_val_29254 === (6))){
var inst_29248 = (state_29253[(2)]);
var state_29253__$1 = state_29253;
var statearr_29260_29278 = state_29253__$1;
(statearr_29260_29278[(2)] = inst_29248);

(statearr_29260_29278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (3))){
var inst_29250 = (state_29253[(2)]);
var inst_29251 = cljs.core.async.close_BANG_.call(null,out);
var state_29253__$1 = (function (){var statearr_29261 = state_29253;
(statearr_29261[(9)] = inst_29250);

return statearr_29261;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29253__$1,inst_29251);
} else {
if((state_val_29254 === (2))){
var inst_29230 = (state_29253[(8)]);
var inst_29232 = (inst_29230 < n);
var state_29253__$1 = state_29253;
if(cljs.core.truth_(inst_29232)){
var statearr_29262_29279 = state_29253__$1;
(statearr_29262_29279[(1)] = (4));

} else {
var statearr_29263_29280 = state_29253__$1;
(statearr_29263_29280[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (11))){
var inst_29230 = (state_29253[(8)]);
var inst_29240 = (state_29253[(2)]);
var inst_29241 = (inst_29230 + (1));
var inst_29230__$1 = inst_29241;
var state_29253__$1 = (function (){var statearr_29264 = state_29253;
(statearr_29264[(8)] = inst_29230__$1);

(statearr_29264[(10)] = inst_29240);

return statearr_29264;
})();
var statearr_29265_29281 = state_29253__$1;
(statearr_29265_29281[(2)] = null);

(statearr_29265_29281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (9))){
var state_29253__$1 = state_29253;
var statearr_29266_29282 = state_29253__$1;
(statearr_29266_29282[(2)] = null);

(statearr_29266_29282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (5))){
var state_29253__$1 = state_29253;
var statearr_29267_29283 = state_29253__$1;
(statearr_29267_29283[(2)] = null);

(statearr_29267_29283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (10))){
var inst_29245 = (state_29253[(2)]);
var state_29253__$1 = state_29253;
var statearr_29268_29284 = state_29253__$1;
(statearr_29268_29284[(2)] = inst_29245);

(statearr_29268_29284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (8))){
var inst_29235 = (state_29253[(7)]);
var state_29253__$1 = state_29253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29253__$1,(11),out,inst_29235);
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
var cljs$core$async$state_machine__27695__auto__ = null;
var cljs$core$async$state_machine__27695__auto____0 = (function (){
var statearr_29269 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29269[(0)] = cljs$core$async$state_machine__27695__auto__);

(statearr_29269[(1)] = (1));

return statearr_29269;
});
var cljs$core$async$state_machine__27695__auto____1 = (function (state_29253){
while(true){
var ret_value__27696__auto__ = (function (){try{while(true){
var result__27697__auto__ = switch__27694__auto__.call(null,state_29253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27697__auto__;
}
break;
}
}catch (e29270){if((e29270 instanceof Object)){
var ex__27698__auto__ = e29270;
var statearr_29271_29285 = state_29253;
(statearr_29271_29285[(5)] = ex__27698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29286 = state_29253;
state_29253 = G__29286;
continue;
} else {
return ret_value__27696__auto__;
}
break;
}
});
cljs$core$async$state_machine__27695__auto__ = function(state_29253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27695__auto____1.call(this,state_29253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27695__auto____0;
cljs$core$async$state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27695__auto____1;
return cljs$core$async$state_machine__27695__auto__;
})()
})();
var state__27791__auto__ = (function (){var statearr_29272 = f__27790__auto__.call(null);
(statearr_29272[(6)] = c__27789__auto___29274);

return statearr_29272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27791__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29288 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29288 = (function (f,ch,meta29289){
this.f = f;
this.ch = ch;
this.meta29289 = meta29289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29290,meta29289__$1){
var self__ = this;
var _29290__$1 = this;
return (new cljs.core.async.t_cljs$core$async29288(self__.f,self__.ch,meta29289__$1));
}));

(cljs.core.async.t_cljs$core$async29288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29290){
var self__ = this;
var _29290__$1 = this;
return self__.meta29289;
}));

(cljs.core.async.t_cljs$core$async29288.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29288.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29288.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29288.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29288.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29291 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29291 = (function (f,ch,meta29289,_,fn1,meta29292){
this.f = f;
this.ch = ch;
this.meta29289 = meta29289;
this._ = _;
this.fn1 = fn1;
this.meta29292 = meta29292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29293,meta29292__$1){
var self__ = this;
var _29293__$1 = this;
return (new cljs.core.async.t_cljs$core$async29291(self__.f,self__.ch,self__.meta29289,self__._,self__.fn1,meta29292__$1));
}));

(cljs.core.async.t_cljs$core$async29291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29293){
var self__ = this;
var _29293__$1 = this;
return self__.meta29292;
}));

(cljs.core.async.t_cljs$core$async29291.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29291.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async29291.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29291.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__29287_SHARP_){
return f1.call(null,(((p1__29287_SHARP_ == null))?null:self__.f.call(null,p1__29287_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async29291.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29289","meta29289",-903896462,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29288","cljs.core.async/t_cljs$core$async29288",-431256637,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29292","meta29292",1154505499,null)], null);
}));

(cljs.core.async.t_cljs$core$async29291.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29291.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29291");

(cljs.core.async.t_cljs$core$async29291.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async29291");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29291.
 */
cljs.core.async.__GT_t_cljs$core$async29291 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29291(f__$1,ch__$1,meta29289__$1,___$2,fn1__$1,meta29292){
return (new cljs.core.async.t_cljs$core$async29291(f__$1,ch__$1,meta29289__$1,___$2,fn1__$1,meta29292));
});

}

return (new cljs.core.async.t_cljs$core$async29291(self__.f,self__.ch,self__.meta29289,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async29288.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29288.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async29288.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29289","meta29289",-903896462,null)], null);
}));

(cljs.core.async.t_cljs$core$async29288.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29288.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29288");

(cljs.core.async.t_cljs$core$async29288.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async29288");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29288.
 */
cljs.core.async.__GT_t_cljs$core$async29288 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29288(f__$1,ch__$1,meta29289){
return (new cljs.core.async.t_cljs$core$async29288(f__$1,ch__$1,meta29289));
});

}

return (new cljs.core.async.t_cljs$core$async29288(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29294 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29294 = (function (f,ch,meta29295){
this.f = f;
this.ch = ch;
this.meta29295 = meta29295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29296,meta29295__$1){
var self__ = this;
var _29296__$1 = this;
return (new cljs.core.async.t_cljs$core$async29294(self__.f,self__.ch,meta29295__$1));
}));

(cljs.core.async.t_cljs$core$async29294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29296){
var self__ = this;
var _29296__$1 = this;
return self__.meta29295;
}));

(cljs.core.async.t_cljs$core$async29294.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29294.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29294.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29294.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async29294.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29294.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async29294.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29295","meta29295",2053827348,null)], null);
}));

(cljs.core.async.t_cljs$core$async29294.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29294.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29294");

(cljs.core.async.t_cljs$core$async29294.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async29294");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29294.
 */
cljs.core.async.__GT_t_cljs$core$async29294 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29294(f__$1,ch__$1,meta29295){
return (new cljs.core.async.t_cljs$core$async29294(f__$1,ch__$1,meta29295));
});

}

return (new cljs.core.async.t_cljs$core$async29294(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29297 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29297 = (function (p,ch,meta29298){
this.p = p;
this.ch = ch;
this.meta29298 = meta29298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29299,meta29298__$1){
var self__ = this;
var _29299__$1 = this;
return (new cljs.core.async.t_cljs$core$async29297(self__.p,self__.ch,meta29298__$1));
}));

(cljs.core.async.t_cljs$core$async29297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29299){
var self__ = this;
var _29299__$1 = this;
return self__.meta29298;
}));

(cljs.core.async.t_cljs$core$async29297.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29297.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29297.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29297.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29297.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async29297.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29297.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async29297.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29298","meta29298",1354074699,null)], null);
}));

(cljs.core.async.t_cljs$core$async29297.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29297.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29297");

(cljs.core.async.t_cljs$core$async29297.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async29297");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29297.
 */
cljs.core.async.__GT_t_cljs$core$async29297 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29297(p__$1,ch__$1,meta29298){
return (new cljs.core.async.t_cljs$core$async29297(p__$1,ch__$1,meta29298));
});

}

return (new cljs.core.async.t_cljs$core$async29297(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29301 = arguments.length;
switch (G__29301) {
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
var c__27789__auto___29341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27790__auto__ = (function (){var switch__27694__auto__ = (function (state_29322){
var state_val_29323 = (state_29322[(1)]);
if((state_val_29323 === (7))){
var inst_29318 = (state_29322[(2)]);
var state_29322__$1 = state_29322;
var statearr_29324_29342 = state_29322__$1;
(statearr_29324_29342[(2)] = inst_29318);

(statearr_29324_29342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (1))){
var state_29322__$1 = state_29322;
var statearr_29325_29343 = state_29322__$1;
(statearr_29325_29343[(2)] = null);

(statearr_29325_29343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (4))){
var inst_29304 = (state_29322[(7)]);
var inst_29304__$1 = (state_29322[(2)]);
var inst_29305 = (inst_29304__$1 == null);
var state_29322__$1 = (function (){var statearr_29326 = state_29322;
(statearr_29326[(7)] = inst_29304__$1);

return statearr_29326;
})();
if(cljs.core.truth_(inst_29305)){
var statearr_29327_29344 = state_29322__$1;
(statearr_29327_29344[(1)] = (5));

} else {
var statearr_29328_29345 = state_29322__$1;
(statearr_29328_29345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (6))){
var inst_29304 = (state_29322[(7)]);
var inst_29309 = p.call(null,inst_29304);
var state_29322__$1 = state_29322;
if(cljs.core.truth_(inst_29309)){
var statearr_29329_29346 = state_29322__$1;
(statearr_29329_29346[(1)] = (8));

} else {
var statearr_29330_29347 = state_29322__$1;
(statearr_29330_29347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (3))){
var inst_29320 = (state_29322[(2)]);
var state_29322__$1 = state_29322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29322__$1,inst_29320);
} else {
if((state_val_29323 === (2))){
var state_29322__$1 = state_29322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29322__$1,(4),ch);
} else {
if((state_val_29323 === (11))){
var inst_29312 = (state_29322[(2)]);
var state_29322__$1 = state_29322;
var statearr_29331_29348 = state_29322__$1;
(statearr_29331_29348[(2)] = inst_29312);

(statearr_29331_29348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (9))){
var state_29322__$1 = state_29322;
var statearr_29332_29349 = state_29322__$1;
(statearr_29332_29349[(2)] = null);

(statearr_29332_29349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (5))){
var inst_29307 = cljs.core.async.close_BANG_.call(null,out);
var state_29322__$1 = state_29322;
var statearr_29333_29350 = state_29322__$1;
(statearr_29333_29350[(2)] = inst_29307);

(statearr_29333_29350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (10))){
var inst_29315 = (state_29322[(2)]);
var state_29322__$1 = (function (){var statearr_29334 = state_29322;
(statearr_29334[(8)] = inst_29315);

return statearr_29334;
})();
var statearr_29335_29351 = state_29322__$1;
(statearr_29335_29351[(2)] = null);

(statearr_29335_29351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (8))){
var inst_29304 = (state_29322[(7)]);
var state_29322__$1 = state_29322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29322__$1,(11),out,inst_29304);
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
var cljs$core$async$state_machine__27695__auto__ = null;
var cljs$core$async$state_machine__27695__auto____0 = (function (){
var statearr_29336 = [null,null,null,null,null,null,null,null,null];
(statearr_29336[(0)] = cljs$core$async$state_machine__27695__auto__);

(statearr_29336[(1)] = (1));

return statearr_29336;
});
var cljs$core$async$state_machine__27695__auto____1 = (function (state_29322){
while(true){
var ret_value__27696__auto__ = (function (){try{while(true){
var result__27697__auto__ = switch__27694__auto__.call(null,state_29322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27697__auto__;
}
break;
}
}catch (e29337){if((e29337 instanceof Object)){
var ex__27698__auto__ = e29337;
var statearr_29338_29352 = state_29322;
(statearr_29338_29352[(5)] = ex__27698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29353 = state_29322;
state_29322 = G__29353;
continue;
} else {
return ret_value__27696__auto__;
}
break;
}
});
cljs$core$async$state_machine__27695__auto__ = function(state_29322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27695__auto____1.call(this,state_29322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27695__auto____0;
cljs$core$async$state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27695__auto____1;
return cljs$core$async$state_machine__27695__auto__;
})()
})();
var state__27791__auto__ = (function (){var statearr_29339 = f__27790__auto__.call(null);
(statearr_29339[(6)] = c__27789__auto___29341);

return statearr_29339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27791__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29355 = arguments.length;
switch (G__29355) {
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
var c__27789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27790__auto__ = (function (){var switch__27694__auto__ = (function (state_29418){
var state_val_29419 = (state_29418[(1)]);
if((state_val_29419 === (7))){
var inst_29414 = (state_29418[(2)]);
var state_29418__$1 = state_29418;
var statearr_29420_29458 = state_29418__$1;
(statearr_29420_29458[(2)] = inst_29414);

(statearr_29420_29458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (20))){
var inst_29384 = (state_29418[(7)]);
var inst_29395 = (state_29418[(2)]);
var inst_29396 = cljs.core.next.call(null,inst_29384);
var inst_29370 = inst_29396;
var inst_29371 = null;
var inst_29372 = (0);
var inst_29373 = (0);
var state_29418__$1 = (function (){var statearr_29421 = state_29418;
(statearr_29421[(8)] = inst_29372);

(statearr_29421[(9)] = inst_29395);

(statearr_29421[(10)] = inst_29371);

(statearr_29421[(11)] = inst_29373);

(statearr_29421[(12)] = inst_29370);

return statearr_29421;
})();
var statearr_29422_29459 = state_29418__$1;
(statearr_29422_29459[(2)] = null);

(statearr_29422_29459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (1))){
var state_29418__$1 = state_29418;
var statearr_29423_29460 = state_29418__$1;
(statearr_29423_29460[(2)] = null);

(statearr_29423_29460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (4))){
var inst_29359 = (state_29418[(13)]);
var inst_29359__$1 = (state_29418[(2)]);
var inst_29360 = (inst_29359__$1 == null);
var state_29418__$1 = (function (){var statearr_29424 = state_29418;
(statearr_29424[(13)] = inst_29359__$1);

return statearr_29424;
})();
if(cljs.core.truth_(inst_29360)){
var statearr_29425_29461 = state_29418__$1;
(statearr_29425_29461[(1)] = (5));

} else {
var statearr_29426_29462 = state_29418__$1;
(statearr_29426_29462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (15))){
var state_29418__$1 = state_29418;
var statearr_29430_29463 = state_29418__$1;
(statearr_29430_29463[(2)] = null);

(statearr_29430_29463[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (21))){
var state_29418__$1 = state_29418;
var statearr_29431_29464 = state_29418__$1;
(statearr_29431_29464[(2)] = null);

(statearr_29431_29464[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (13))){
var inst_29372 = (state_29418[(8)]);
var inst_29371 = (state_29418[(10)]);
var inst_29373 = (state_29418[(11)]);
var inst_29370 = (state_29418[(12)]);
var inst_29380 = (state_29418[(2)]);
var inst_29381 = (inst_29373 + (1));
var tmp29427 = inst_29372;
var tmp29428 = inst_29371;
var tmp29429 = inst_29370;
var inst_29370__$1 = tmp29429;
var inst_29371__$1 = tmp29428;
var inst_29372__$1 = tmp29427;
var inst_29373__$1 = inst_29381;
var state_29418__$1 = (function (){var statearr_29432 = state_29418;
(statearr_29432[(8)] = inst_29372__$1);

(statearr_29432[(10)] = inst_29371__$1);

(statearr_29432[(11)] = inst_29373__$1);

(statearr_29432[(14)] = inst_29380);

(statearr_29432[(12)] = inst_29370__$1);

return statearr_29432;
})();
var statearr_29433_29465 = state_29418__$1;
(statearr_29433_29465[(2)] = null);

(statearr_29433_29465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (22))){
var state_29418__$1 = state_29418;
var statearr_29434_29466 = state_29418__$1;
(statearr_29434_29466[(2)] = null);

(statearr_29434_29466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (6))){
var inst_29359 = (state_29418[(13)]);
var inst_29368 = f.call(null,inst_29359);
var inst_29369 = cljs.core.seq.call(null,inst_29368);
var inst_29370 = inst_29369;
var inst_29371 = null;
var inst_29372 = (0);
var inst_29373 = (0);
var state_29418__$1 = (function (){var statearr_29435 = state_29418;
(statearr_29435[(8)] = inst_29372);

(statearr_29435[(10)] = inst_29371);

(statearr_29435[(11)] = inst_29373);

(statearr_29435[(12)] = inst_29370);

return statearr_29435;
})();
var statearr_29436_29467 = state_29418__$1;
(statearr_29436_29467[(2)] = null);

(statearr_29436_29467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (17))){
var inst_29384 = (state_29418[(7)]);
var inst_29388 = cljs.core.chunk_first.call(null,inst_29384);
var inst_29389 = cljs.core.chunk_rest.call(null,inst_29384);
var inst_29390 = cljs.core.count.call(null,inst_29388);
var inst_29370 = inst_29389;
var inst_29371 = inst_29388;
var inst_29372 = inst_29390;
var inst_29373 = (0);
var state_29418__$1 = (function (){var statearr_29437 = state_29418;
(statearr_29437[(8)] = inst_29372);

(statearr_29437[(10)] = inst_29371);

(statearr_29437[(11)] = inst_29373);

(statearr_29437[(12)] = inst_29370);

return statearr_29437;
})();
var statearr_29438_29468 = state_29418__$1;
(statearr_29438_29468[(2)] = null);

(statearr_29438_29468[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (3))){
var inst_29416 = (state_29418[(2)]);
var state_29418__$1 = state_29418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29418__$1,inst_29416);
} else {
if((state_val_29419 === (12))){
var inst_29404 = (state_29418[(2)]);
var state_29418__$1 = state_29418;
var statearr_29439_29469 = state_29418__$1;
(statearr_29439_29469[(2)] = inst_29404);

(statearr_29439_29469[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (2))){
var state_29418__$1 = state_29418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29418__$1,(4),in$);
} else {
if((state_val_29419 === (23))){
var inst_29412 = (state_29418[(2)]);
var state_29418__$1 = state_29418;
var statearr_29440_29470 = state_29418__$1;
(statearr_29440_29470[(2)] = inst_29412);

(statearr_29440_29470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (19))){
var inst_29399 = (state_29418[(2)]);
var state_29418__$1 = state_29418;
var statearr_29441_29471 = state_29418__$1;
(statearr_29441_29471[(2)] = inst_29399);

(statearr_29441_29471[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (11))){
var inst_29384 = (state_29418[(7)]);
var inst_29370 = (state_29418[(12)]);
var inst_29384__$1 = cljs.core.seq.call(null,inst_29370);
var state_29418__$1 = (function (){var statearr_29442 = state_29418;
(statearr_29442[(7)] = inst_29384__$1);

return statearr_29442;
})();
if(inst_29384__$1){
var statearr_29443_29472 = state_29418__$1;
(statearr_29443_29472[(1)] = (14));

} else {
var statearr_29444_29473 = state_29418__$1;
(statearr_29444_29473[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (9))){
var inst_29406 = (state_29418[(2)]);
var inst_29407 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29418__$1 = (function (){var statearr_29445 = state_29418;
(statearr_29445[(15)] = inst_29406);

return statearr_29445;
})();
if(cljs.core.truth_(inst_29407)){
var statearr_29446_29474 = state_29418__$1;
(statearr_29446_29474[(1)] = (21));

} else {
var statearr_29447_29475 = state_29418__$1;
(statearr_29447_29475[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (5))){
var inst_29362 = cljs.core.async.close_BANG_.call(null,out);
var state_29418__$1 = state_29418;
var statearr_29448_29476 = state_29418__$1;
(statearr_29448_29476[(2)] = inst_29362);

(statearr_29448_29476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (14))){
var inst_29384 = (state_29418[(7)]);
var inst_29386 = cljs.core.chunked_seq_QMARK_.call(null,inst_29384);
var state_29418__$1 = state_29418;
if(inst_29386){
var statearr_29449_29477 = state_29418__$1;
(statearr_29449_29477[(1)] = (17));

} else {
var statearr_29450_29478 = state_29418__$1;
(statearr_29450_29478[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (16))){
var inst_29402 = (state_29418[(2)]);
var state_29418__$1 = state_29418;
var statearr_29451_29479 = state_29418__$1;
(statearr_29451_29479[(2)] = inst_29402);

(statearr_29451_29479[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (10))){
var inst_29371 = (state_29418[(10)]);
var inst_29373 = (state_29418[(11)]);
var inst_29378 = cljs.core._nth.call(null,inst_29371,inst_29373);
var state_29418__$1 = state_29418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29418__$1,(13),out,inst_29378);
} else {
if((state_val_29419 === (18))){
var inst_29384 = (state_29418[(7)]);
var inst_29393 = cljs.core.first.call(null,inst_29384);
var state_29418__$1 = state_29418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29418__$1,(20),out,inst_29393);
} else {
if((state_val_29419 === (8))){
var inst_29372 = (state_29418[(8)]);
var inst_29373 = (state_29418[(11)]);
var inst_29375 = (inst_29373 < inst_29372);
var inst_29376 = inst_29375;
var state_29418__$1 = state_29418;
if(cljs.core.truth_(inst_29376)){
var statearr_29452_29480 = state_29418__$1;
(statearr_29452_29480[(1)] = (10));

} else {
var statearr_29453_29481 = state_29418__$1;
(statearr_29453_29481[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__27695__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27695__auto____0 = (function (){
var statearr_29454 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29454[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27695__auto__);

(statearr_29454[(1)] = (1));

return statearr_29454;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27695__auto____1 = (function (state_29418){
while(true){
var ret_value__27696__auto__ = (function (){try{while(true){
var result__27697__auto__ = switch__27694__auto__.call(null,state_29418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27697__auto__;
}
break;
}
}catch (e29455){if((e29455 instanceof Object)){
var ex__27698__auto__ = e29455;
var statearr_29456_29482 = state_29418;
(statearr_29456_29482[(5)] = ex__27698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29483 = state_29418;
state_29418 = G__29483;
continue;
} else {
return ret_value__27696__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27695__auto__ = function(state_29418){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27695__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27695__auto____1.call(this,state_29418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27695__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27695__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27695__auto__;
})()
})();
var state__27791__auto__ = (function (){var statearr_29457 = f__27790__auto__.call(null);
(statearr_29457[(6)] = c__27789__auto__);

return statearr_29457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27791__auto__);
}));

return c__27789__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29485 = arguments.length;
switch (G__29485) {
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
var G__29488 = arguments.length;
switch (G__29488) {
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
var G__29491 = arguments.length;
switch (G__29491) {
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
var c__27789__auto___29538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27790__auto__ = (function (){var switch__27694__auto__ = (function (state_29515){
var state_val_29516 = (state_29515[(1)]);
if((state_val_29516 === (7))){
var inst_29510 = (state_29515[(2)]);
var state_29515__$1 = state_29515;
var statearr_29517_29539 = state_29515__$1;
(statearr_29517_29539[(2)] = inst_29510);

(statearr_29517_29539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29516 === (1))){
var inst_29492 = null;
var state_29515__$1 = (function (){var statearr_29518 = state_29515;
(statearr_29518[(7)] = inst_29492);

return statearr_29518;
})();
var statearr_29519_29540 = state_29515__$1;
(statearr_29519_29540[(2)] = null);

(statearr_29519_29540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29516 === (4))){
var inst_29495 = (state_29515[(8)]);
var inst_29495__$1 = (state_29515[(2)]);
var inst_29496 = (inst_29495__$1 == null);
var inst_29497 = cljs.core.not.call(null,inst_29496);
var state_29515__$1 = (function (){var statearr_29520 = state_29515;
(statearr_29520[(8)] = inst_29495__$1);

return statearr_29520;
})();
if(inst_29497){
var statearr_29521_29541 = state_29515__$1;
(statearr_29521_29541[(1)] = (5));

} else {
var statearr_29522_29542 = state_29515__$1;
(statearr_29522_29542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29516 === (6))){
var state_29515__$1 = state_29515;
var statearr_29523_29543 = state_29515__$1;
(statearr_29523_29543[(2)] = null);

(statearr_29523_29543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29516 === (3))){
var inst_29512 = (state_29515[(2)]);
var inst_29513 = cljs.core.async.close_BANG_.call(null,out);
var state_29515__$1 = (function (){var statearr_29524 = state_29515;
(statearr_29524[(9)] = inst_29512);

return statearr_29524;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29515__$1,inst_29513);
} else {
if((state_val_29516 === (2))){
var state_29515__$1 = state_29515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29515__$1,(4),ch);
} else {
if((state_val_29516 === (11))){
var inst_29495 = (state_29515[(8)]);
var inst_29504 = (state_29515[(2)]);
var inst_29492 = inst_29495;
var state_29515__$1 = (function (){var statearr_29525 = state_29515;
(statearr_29525[(10)] = inst_29504);

(statearr_29525[(7)] = inst_29492);

return statearr_29525;
})();
var statearr_29526_29544 = state_29515__$1;
(statearr_29526_29544[(2)] = null);

(statearr_29526_29544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29516 === (9))){
var inst_29495 = (state_29515[(8)]);
var state_29515__$1 = state_29515;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29515__$1,(11),out,inst_29495);
} else {
if((state_val_29516 === (5))){
var inst_29495 = (state_29515[(8)]);
var inst_29492 = (state_29515[(7)]);
var inst_29499 = cljs.core._EQ_.call(null,inst_29495,inst_29492);
var state_29515__$1 = state_29515;
if(inst_29499){
var statearr_29528_29545 = state_29515__$1;
(statearr_29528_29545[(1)] = (8));

} else {
var statearr_29529_29546 = state_29515__$1;
(statearr_29529_29546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29516 === (10))){
var inst_29507 = (state_29515[(2)]);
var state_29515__$1 = state_29515;
var statearr_29530_29547 = state_29515__$1;
(statearr_29530_29547[(2)] = inst_29507);

(statearr_29530_29547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29516 === (8))){
var inst_29492 = (state_29515[(7)]);
var tmp29527 = inst_29492;
var inst_29492__$1 = tmp29527;
var state_29515__$1 = (function (){var statearr_29531 = state_29515;
(statearr_29531[(7)] = inst_29492__$1);

return statearr_29531;
})();
var statearr_29532_29548 = state_29515__$1;
(statearr_29532_29548[(2)] = null);

(statearr_29532_29548[(1)] = (2));


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
var cljs$core$async$state_machine__27695__auto__ = null;
var cljs$core$async$state_machine__27695__auto____0 = (function (){
var statearr_29533 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29533[(0)] = cljs$core$async$state_machine__27695__auto__);

(statearr_29533[(1)] = (1));

return statearr_29533;
});
var cljs$core$async$state_machine__27695__auto____1 = (function (state_29515){
while(true){
var ret_value__27696__auto__ = (function (){try{while(true){
var result__27697__auto__ = switch__27694__auto__.call(null,state_29515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27697__auto__;
}
break;
}
}catch (e29534){if((e29534 instanceof Object)){
var ex__27698__auto__ = e29534;
var statearr_29535_29549 = state_29515;
(statearr_29535_29549[(5)] = ex__27698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29550 = state_29515;
state_29515 = G__29550;
continue;
} else {
return ret_value__27696__auto__;
}
break;
}
});
cljs$core$async$state_machine__27695__auto__ = function(state_29515){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27695__auto____1.call(this,state_29515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27695__auto____0;
cljs$core$async$state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27695__auto____1;
return cljs$core$async$state_machine__27695__auto__;
})()
})();
var state__27791__auto__ = (function (){var statearr_29536 = f__27790__auto__.call(null);
(statearr_29536[(6)] = c__27789__auto___29538);

return statearr_29536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27791__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29552 = arguments.length;
switch (G__29552) {
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
var c__27789__auto___29618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27790__auto__ = (function (){var switch__27694__auto__ = (function (state_29590){
var state_val_29591 = (state_29590[(1)]);
if((state_val_29591 === (7))){
var inst_29586 = (state_29590[(2)]);
var state_29590__$1 = state_29590;
var statearr_29592_29619 = state_29590__$1;
(statearr_29592_29619[(2)] = inst_29586);

(statearr_29592_29619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (1))){
var inst_29553 = (new Array(n));
var inst_29554 = inst_29553;
var inst_29555 = (0);
var state_29590__$1 = (function (){var statearr_29593 = state_29590;
(statearr_29593[(7)] = inst_29554);

(statearr_29593[(8)] = inst_29555);

return statearr_29593;
})();
var statearr_29594_29620 = state_29590__$1;
(statearr_29594_29620[(2)] = null);

(statearr_29594_29620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (4))){
var inst_29558 = (state_29590[(9)]);
var inst_29558__$1 = (state_29590[(2)]);
var inst_29559 = (inst_29558__$1 == null);
var inst_29560 = cljs.core.not.call(null,inst_29559);
var state_29590__$1 = (function (){var statearr_29595 = state_29590;
(statearr_29595[(9)] = inst_29558__$1);

return statearr_29595;
})();
if(inst_29560){
var statearr_29596_29621 = state_29590__$1;
(statearr_29596_29621[(1)] = (5));

} else {
var statearr_29597_29622 = state_29590__$1;
(statearr_29597_29622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (15))){
var inst_29580 = (state_29590[(2)]);
var state_29590__$1 = state_29590;
var statearr_29598_29623 = state_29590__$1;
(statearr_29598_29623[(2)] = inst_29580);

(statearr_29598_29623[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (13))){
var state_29590__$1 = state_29590;
var statearr_29599_29624 = state_29590__$1;
(statearr_29599_29624[(2)] = null);

(statearr_29599_29624[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (6))){
var inst_29555 = (state_29590[(8)]);
var inst_29576 = (inst_29555 > (0));
var state_29590__$1 = state_29590;
if(cljs.core.truth_(inst_29576)){
var statearr_29600_29625 = state_29590__$1;
(statearr_29600_29625[(1)] = (12));

} else {
var statearr_29601_29626 = state_29590__$1;
(statearr_29601_29626[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (3))){
var inst_29588 = (state_29590[(2)]);
var state_29590__$1 = state_29590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29590__$1,inst_29588);
} else {
if((state_val_29591 === (12))){
var inst_29554 = (state_29590[(7)]);
var inst_29578 = cljs.core.vec.call(null,inst_29554);
var state_29590__$1 = state_29590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29590__$1,(15),out,inst_29578);
} else {
if((state_val_29591 === (2))){
var state_29590__$1 = state_29590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29590__$1,(4),ch);
} else {
if((state_val_29591 === (11))){
var inst_29570 = (state_29590[(2)]);
var inst_29571 = (new Array(n));
var inst_29554 = inst_29571;
var inst_29555 = (0);
var state_29590__$1 = (function (){var statearr_29602 = state_29590;
(statearr_29602[(7)] = inst_29554);

(statearr_29602[(10)] = inst_29570);

(statearr_29602[(8)] = inst_29555);

return statearr_29602;
})();
var statearr_29603_29627 = state_29590__$1;
(statearr_29603_29627[(2)] = null);

(statearr_29603_29627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (9))){
var inst_29554 = (state_29590[(7)]);
var inst_29568 = cljs.core.vec.call(null,inst_29554);
var state_29590__$1 = state_29590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29590__$1,(11),out,inst_29568);
} else {
if((state_val_29591 === (5))){
var inst_29554 = (state_29590[(7)]);
var inst_29558 = (state_29590[(9)]);
var inst_29563 = (state_29590[(11)]);
var inst_29555 = (state_29590[(8)]);
var inst_29562 = (inst_29554[inst_29555] = inst_29558);
var inst_29563__$1 = (inst_29555 + (1));
var inst_29564 = (inst_29563__$1 < n);
var state_29590__$1 = (function (){var statearr_29604 = state_29590;
(statearr_29604[(12)] = inst_29562);

(statearr_29604[(11)] = inst_29563__$1);

return statearr_29604;
})();
if(cljs.core.truth_(inst_29564)){
var statearr_29605_29628 = state_29590__$1;
(statearr_29605_29628[(1)] = (8));

} else {
var statearr_29606_29629 = state_29590__$1;
(statearr_29606_29629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (14))){
var inst_29583 = (state_29590[(2)]);
var inst_29584 = cljs.core.async.close_BANG_.call(null,out);
var state_29590__$1 = (function (){var statearr_29608 = state_29590;
(statearr_29608[(13)] = inst_29583);

return statearr_29608;
})();
var statearr_29609_29630 = state_29590__$1;
(statearr_29609_29630[(2)] = inst_29584);

(statearr_29609_29630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (10))){
var inst_29574 = (state_29590[(2)]);
var state_29590__$1 = state_29590;
var statearr_29610_29631 = state_29590__$1;
(statearr_29610_29631[(2)] = inst_29574);

(statearr_29610_29631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (8))){
var inst_29554 = (state_29590[(7)]);
var inst_29563 = (state_29590[(11)]);
var tmp29607 = inst_29554;
var inst_29554__$1 = tmp29607;
var inst_29555 = inst_29563;
var state_29590__$1 = (function (){var statearr_29611 = state_29590;
(statearr_29611[(7)] = inst_29554__$1);

(statearr_29611[(8)] = inst_29555);

return statearr_29611;
})();
var statearr_29612_29632 = state_29590__$1;
(statearr_29612_29632[(2)] = null);

(statearr_29612_29632[(1)] = (2));


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
var cljs$core$async$state_machine__27695__auto__ = null;
var cljs$core$async$state_machine__27695__auto____0 = (function (){
var statearr_29613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29613[(0)] = cljs$core$async$state_machine__27695__auto__);

(statearr_29613[(1)] = (1));

return statearr_29613;
});
var cljs$core$async$state_machine__27695__auto____1 = (function (state_29590){
while(true){
var ret_value__27696__auto__ = (function (){try{while(true){
var result__27697__auto__ = switch__27694__auto__.call(null,state_29590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27697__auto__;
}
break;
}
}catch (e29614){if((e29614 instanceof Object)){
var ex__27698__auto__ = e29614;
var statearr_29615_29633 = state_29590;
(statearr_29615_29633[(5)] = ex__27698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29634 = state_29590;
state_29590 = G__29634;
continue;
} else {
return ret_value__27696__auto__;
}
break;
}
});
cljs$core$async$state_machine__27695__auto__ = function(state_29590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27695__auto____1.call(this,state_29590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27695__auto____0;
cljs$core$async$state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27695__auto____1;
return cljs$core$async$state_machine__27695__auto__;
})()
})();
var state__27791__auto__ = (function (){var statearr_29616 = f__27790__auto__.call(null);
(statearr_29616[(6)] = c__27789__auto___29618);

return statearr_29616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27791__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29636 = arguments.length;
switch (G__29636) {
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
var c__27789__auto___29706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27790__auto__ = (function (){var switch__27694__auto__ = (function (state_29678){
var state_val_29679 = (state_29678[(1)]);
if((state_val_29679 === (7))){
var inst_29674 = (state_29678[(2)]);
var state_29678__$1 = state_29678;
var statearr_29680_29707 = state_29678__$1;
(statearr_29680_29707[(2)] = inst_29674);

(statearr_29680_29707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (1))){
var inst_29637 = [];
var inst_29638 = inst_29637;
var inst_29639 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29678__$1 = (function (){var statearr_29681 = state_29678;
(statearr_29681[(7)] = inst_29639);

(statearr_29681[(8)] = inst_29638);

return statearr_29681;
})();
var statearr_29682_29708 = state_29678__$1;
(statearr_29682_29708[(2)] = null);

(statearr_29682_29708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (4))){
var inst_29642 = (state_29678[(9)]);
var inst_29642__$1 = (state_29678[(2)]);
var inst_29643 = (inst_29642__$1 == null);
var inst_29644 = cljs.core.not.call(null,inst_29643);
var state_29678__$1 = (function (){var statearr_29683 = state_29678;
(statearr_29683[(9)] = inst_29642__$1);

return statearr_29683;
})();
if(inst_29644){
var statearr_29684_29709 = state_29678__$1;
(statearr_29684_29709[(1)] = (5));

} else {
var statearr_29685_29710 = state_29678__$1;
(statearr_29685_29710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (15))){
var inst_29668 = (state_29678[(2)]);
var state_29678__$1 = state_29678;
var statearr_29686_29711 = state_29678__$1;
(statearr_29686_29711[(2)] = inst_29668);

(statearr_29686_29711[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (13))){
var state_29678__$1 = state_29678;
var statearr_29687_29712 = state_29678__$1;
(statearr_29687_29712[(2)] = null);

(statearr_29687_29712[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (6))){
var inst_29638 = (state_29678[(8)]);
var inst_29663 = inst_29638.length;
var inst_29664 = (inst_29663 > (0));
var state_29678__$1 = state_29678;
if(cljs.core.truth_(inst_29664)){
var statearr_29688_29713 = state_29678__$1;
(statearr_29688_29713[(1)] = (12));

} else {
var statearr_29689_29714 = state_29678__$1;
(statearr_29689_29714[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (3))){
var inst_29676 = (state_29678[(2)]);
var state_29678__$1 = state_29678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29678__$1,inst_29676);
} else {
if((state_val_29679 === (12))){
var inst_29638 = (state_29678[(8)]);
var inst_29666 = cljs.core.vec.call(null,inst_29638);
var state_29678__$1 = state_29678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29678__$1,(15),out,inst_29666);
} else {
if((state_val_29679 === (2))){
var state_29678__$1 = state_29678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29678__$1,(4),ch);
} else {
if((state_val_29679 === (11))){
var inst_29642 = (state_29678[(9)]);
var inst_29646 = (state_29678[(10)]);
var inst_29656 = (state_29678[(2)]);
var inst_29657 = [];
var inst_29658 = inst_29657.push(inst_29642);
var inst_29638 = inst_29657;
var inst_29639 = inst_29646;
var state_29678__$1 = (function (){var statearr_29690 = state_29678;
(statearr_29690[(11)] = inst_29656);

(statearr_29690[(7)] = inst_29639);

(statearr_29690[(8)] = inst_29638);

(statearr_29690[(12)] = inst_29658);

return statearr_29690;
})();
var statearr_29691_29715 = state_29678__$1;
(statearr_29691_29715[(2)] = null);

(statearr_29691_29715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (9))){
var inst_29638 = (state_29678[(8)]);
var inst_29654 = cljs.core.vec.call(null,inst_29638);
var state_29678__$1 = state_29678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29678__$1,(11),out,inst_29654);
} else {
if((state_val_29679 === (5))){
var inst_29642 = (state_29678[(9)]);
var inst_29646 = (state_29678[(10)]);
var inst_29639 = (state_29678[(7)]);
var inst_29646__$1 = f.call(null,inst_29642);
var inst_29647 = cljs.core._EQ_.call(null,inst_29646__$1,inst_29639);
var inst_29648 = cljs.core.keyword_identical_QMARK_.call(null,inst_29639,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29649 = ((inst_29647) || (inst_29648));
var state_29678__$1 = (function (){var statearr_29692 = state_29678;
(statearr_29692[(10)] = inst_29646__$1);

return statearr_29692;
})();
if(cljs.core.truth_(inst_29649)){
var statearr_29693_29716 = state_29678__$1;
(statearr_29693_29716[(1)] = (8));

} else {
var statearr_29694_29717 = state_29678__$1;
(statearr_29694_29717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (14))){
var inst_29671 = (state_29678[(2)]);
var inst_29672 = cljs.core.async.close_BANG_.call(null,out);
var state_29678__$1 = (function (){var statearr_29696 = state_29678;
(statearr_29696[(13)] = inst_29671);

return statearr_29696;
})();
var statearr_29697_29718 = state_29678__$1;
(statearr_29697_29718[(2)] = inst_29672);

(statearr_29697_29718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (10))){
var inst_29661 = (state_29678[(2)]);
var state_29678__$1 = state_29678;
var statearr_29698_29719 = state_29678__$1;
(statearr_29698_29719[(2)] = inst_29661);

(statearr_29698_29719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (8))){
var inst_29642 = (state_29678[(9)]);
var inst_29646 = (state_29678[(10)]);
var inst_29638 = (state_29678[(8)]);
var inst_29651 = inst_29638.push(inst_29642);
var tmp29695 = inst_29638;
var inst_29638__$1 = tmp29695;
var inst_29639 = inst_29646;
var state_29678__$1 = (function (){var statearr_29699 = state_29678;
(statearr_29699[(7)] = inst_29639);

(statearr_29699[(8)] = inst_29638__$1);

(statearr_29699[(14)] = inst_29651);

return statearr_29699;
})();
var statearr_29700_29720 = state_29678__$1;
(statearr_29700_29720[(2)] = null);

(statearr_29700_29720[(1)] = (2));


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
var cljs$core$async$state_machine__27695__auto__ = null;
var cljs$core$async$state_machine__27695__auto____0 = (function (){
var statearr_29701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29701[(0)] = cljs$core$async$state_machine__27695__auto__);

(statearr_29701[(1)] = (1));

return statearr_29701;
});
var cljs$core$async$state_machine__27695__auto____1 = (function (state_29678){
while(true){
var ret_value__27696__auto__ = (function (){try{while(true){
var result__27697__auto__ = switch__27694__auto__.call(null,state_29678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27697__auto__;
}
break;
}
}catch (e29702){if((e29702 instanceof Object)){
var ex__27698__auto__ = e29702;
var statearr_29703_29721 = state_29678;
(statearr_29703_29721[(5)] = ex__27698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29722 = state_29678;
state_29678 = G__29722;
continue;
} else {
return ret_value__27696__auto__;
}
break;
}
});
cljs$core$async$state_machine__27695__auto__ = function(state_29678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27695__auto____1.call(this,state_29678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27695__auto____0;
cljs$core$async$state_machine__27695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27695__auto____1;
return cljs$core$async$state_machine__27695__auto__;
})()
})();
var state__27791__auto__ = (function (){var statearr_29704 = f__27790__auto__.call(null);
(statearr_29704[(6)] = c__27789__auto___29706);

return statearr_29704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27791__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1602360095179
