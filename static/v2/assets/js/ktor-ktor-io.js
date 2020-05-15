(function(root, factory) {
  if (typeof define === 'function' && define.amd) 
    define(['exports', 'kotlin', 'kotlinx-coroutines-core'], factory);
  else if (typeof exports === 'object') 
    factory(module.exports, require('kotlin'), require('kotlinx-coroutines-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-io'.");
    }
    if (false) {

    }
    root['ktor-ktor-io'] = factory(typeof this['ktor-ktor-io'] === 'undefined' ? {} : this['ktor-ktor-io'], kotlin, this['kotlinx-coroutines-core']);
  }
}(this, function(_, Kotlin, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var Long$Companion$MAX_VALUE = Kotlin.Long.MAX_VALUE;
  var L0 = Kotlin.Long.ZERO;
  var throwCCE = Kotlin.throwCCE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Unit = Kotlin.kotlin.Unit;
  var equals = Kotlin.equals;
  var ensureNotNull = Kotlin.ensureNotNull;
  var toByte = Kotlin.toByte;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var CancellationException_init = $module$kotlinx_coroutines_core.kotlinx.coroutines.CancellationException_init_pdl1vj$;
  var L4088 = Kotlin.Long.fromInt(4088);
  var coerceAtMost = Kotlin.kotlin.ranges.coerceAtMost_2p08ub$;
  var Math_0 = Math;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var toShort = Kotlin.toShort;
  var CancellationException = $module$kotlinx_coroutines_core.kotlinx.coroutines.CancellationException;
  var Throwable = Error;
  var Job = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope;
  var coroutines = Kotlin.kotlin.coroutines;
  var coroutines_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var newCoroutineContext = $module$kotlinx_coroutines_core.kotlinx.coroutines.newCoroutineContext_7n4184$;
  var CoroutineScope_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope_1fupul$;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var coerceAtMost_0 = Kotlin.kotlin.ranges.coerceAtMost_dqglrj$;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var UShort_init = Kotlin.kotlin.UShort;
  var UInt_init = Kotlin.kotlin.UInt;
  var ULong_init = Kotlin.kotlin.ULong;
  var L16 = Kotlin.Long.fromInt(16);
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var StringBuilder_init_0 = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var UnsupportedOperationException_init_0 = Kotlin.kotlin.UnsupportedOperationException_init;
  var Appendable = Kotlin.kotlin.text.Appendable;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var unboxChar = Kotlin.unboxChar;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var toChar = Kotlin.toChar;
  var toBoxedChar = Kotlin.toBoxedChar;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var Exception = Kotlin.kotlin.Exception;
  var UByte_init = Kotlin.kotlin.UByte;
  var L4294967295 = new Kotlin.Long(-1, 0);
  var Annotation = Kotlin.kotlin.Annotation;
  var L_1 = Kotlin.Long.NEG_ONE;
  var until = Kotlin.kotlin.ranges.until_ebnic$;
  var toRawBits = Kotlin.floatToRawBits;
  var toRawBits_0 = Kotlin.doubleToRawBits;
  var contains = Kotlin.kotlin.text.contains_sgbm27$;
  var coerceAtLeast_0 = Kotlin.kotlin.ranges.coerceAtLeast_2p08ub$;
  var copyOf = Kotlin.kotlin.collections.copyOf_mrm5p$;
  var L2147483647 = Kotlin.Long.fromInt(2147483647);


  var IndexOutOfBoundsException = Kotlin.kotlin.IndexOutOfBoundsException;
  var CharSequence = Kotlin.kotlin.CharSequence;
  var isLowSurrogate = Kotlin.kotlin.text.isLowSurrogate_myv2d0$;
  var isHighSurrogate = Kotlin.kotlin.text.isHighSurrogate_myv2d0$;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;

  var toString = Kotlin.toString;
  var hashCode = Kotlin.hashCode;
  var L1 = Kotlin.Long.ONE;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Result = Kotlin.kotlin.Result;
  var intercepted = Kotlin.kotlin.coroutines.intrinsics.intercepted_f9mg25$;
  var SafeContinuation_init = Kotlin.kotlin.coroutines.SafeContinuation_init_wj8d80$;
  var replace = Kotlin.kotlin.text.replace_r2fvfm$;
  var Int8Array_init = Int8Array;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var IndexOutOfBoundsException_init = Kotlin.kotlin.IndexOutOfBoundsException_init;
  var Any = Object;
  ClosedWriteChannelException.prototype = Object.create(CancellationException.prototype);
  ClosedWriteChannelException.prototype.constructor = ClosedWriteChannelException;
  InsufficientSpaceException.prototype = Object.create(Exception.prototype);
  InsufficientSpaceException.prototype.constructor = InsufficientSpaceException;
  DefaultBufferPool.prototype = Object.create(DefaultPool.prototype);
  DefaultBufferPool.prototype.constructor = DefaultBufferPool;
  EmptyBufferPoolImpl.prototype = Object.create(NoPoolImpl.prototype);
  EmptyBufferPoolImpl.prototype.constructor = EmptyBufferPoolImpl;
  BufferLimitExceededException.prototype = Object.create(Exception.prototype);
  BufferLimitExceededException.prototype.constructor = BufferLimitExceededException;
  BytePacketBuilderBase.prototype = Object.create(AbstractOutput.prototype);
  BytePacketBuilderBase.prototype.constructor = BytePacketBuilderBase;
  BytePacketBuilderPlatformBase.prototype = Object.create(BytePacketBuilderBase.prototype);
  BytePacketBuilderPlatformBase.prototype.constructor = BytePacketBuilderPlatformBase;
  BytePacketBuilder.prototype = Object.create(BytePacketBuilderPlatformBase.prototype);
  BytePacketBuilder.prototype.constructor = BytePacketBuilder;
  ByteReadPacketBase.prototype = Object.create(AbstractInput.prototype);
  ByteReadPacketBase.prototype.constructor = ByteReadPacketBase;
  ByteReadPacketPlatformBase.prototype = Object.create(ByteReadPacketBase.prototype);
  ByteReadPacketPlatformBase.prototype.constructor = ByteReadPacketPlatformBase;
  ByteReadPacket.prototype = Object.create(ByteReadPacketPlatformBase.prototype);
  ByteReadPacket.prototype.constructor = ByteReadPacket;
  ChunkBuffer$Companion$NoPool$ObjectLiteral.prototype = Object.create(NoPoolImpl.prototype);
  ChunkBuffer$Companion$NoPool$ObjectLiteral.prototype.constructor = ChunkBuffer$Companion$NoPool$ObjectLiteral;
  ChunkBuffer$Companion$NoPoolManuallyManaged$ObjectLiteral.prototype = Object.create(NoPoolImpl.prototype);
  ChunkBuffer$Companion$NoPoolManuallyManaged$ObjectLiteral.prototype.constructor = ChunkBuffer$Companion$NoPoolManuallyManaged$ObjectLiteral;
  ChunkBuffer.prototype = Object.create(Buffer.prototype);
  ChunkBuffer.prototype.constructor = ChunkBuffer;
  MalformedUTF8InputException.prototype = Object.create(Exception.prototype);
  MalformedUTF8InputException.prototype.constructor = MalformedUTF8InputException;
  ByteChannelJS.prototype = Object.create(ByteChannelSequentialBase.prototype);
  ByteChannelJS.prototype.constructor = ByteChannelJS;
  CharsetEncoderImpl.prototype = Object.create(CharsetEncoder.prototype);
  CharsetEncoderImpl.prototype.constructor = CharsetEncoderImpl;
  CharsetDecoderImpl.prototype = Object.create(CharsetDecoder.prototype);
  CharsetDecoderImpl.prototype.constructor = CharsetDecoderImpl;
  CharsetImpl.prototype = Object.create(Charset.prototype);
  CharsetImpl.prototype.constructor = CharsetImpl;
  MalformedInputException.prototype = Object.create(Throwable.prototype);
  MalformedInputException.prototype.constructor = MalformedInputException;
  ByteOrder.prototype = Object.create(Enum.prototype);
  ByteOrder.prototype.constructor = ByteOrder;
  ByteReadPacket$ObjectLiteral.prototype = Object.create(SingleInstancePool.prototype);
  ByteReadPacket$ObjectLiteral.prototype.constructor = ByteReadPacket$ObjectLiteral;
  IoBuffer$Companion$Pool$ObjectLiteral.prototype = Object.create(DefaultPool.prototype);
  IoBuffer$Companion$Pool$ObjectLiteral.prototype.constructor = IoBuffer$Companion$Pool$ObjectLiteral;
  IoBuffer$Companion$NoPool$ObjectLiteral.prototype = Object.create(NoPoolImpl.prototype);
  IoBuffer$Companion$NoPool$ObjectLiteral.prototype.constructor = IoBuffer$Companion$NoPool$ObjectLiteral;
  IoBuffer.prototype = Object.create(ChunkBuffer.prototype);
  IoBuffer.prototype.constructor = IoBuffer;
  IOException.prototype = Object.create(Exception.prototype);
  IOException.prototype.constructor = IOException;
  EOFException.prototype = Object.create(IOException.prototype);
  EOFException.prototype.constructor = EOFException;
  function ByteChannel() {
  }
  ByteChannel.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'ByteChannel', 
  interfaces: [ByteWriteChannel, ByteReadChannel_2]};
  function ByteReadChannel(text, charset) {
    if (charset === void 0) 
      charset = Charsets_getInstance().UTF_8;
    return ByteReadChannel_0(encodeToByteArray(charset.newEncoder(), text, 0, text.length));
  }
  function get_EmptyByteReadChannel() {
    return ByteReadChannel$Companion_getInstance().Empty;
  }
  require$ObjectLiteral.prototype = Object.create(RequireFailureCapture.prototype);
  require$ObjectLiteral.prototype.constructor = require$ObjectLiteral;
  function require$ObjectLiteral(closure$message) {
    this.closure$message = closure$message;
    RequireFailureCapture.call(this);
  }
  require$ObjectLiteral.prototype.doFail = function() {
  throw IllegalArgumentException_init(this.closure$message());
};
  require$ObjectLiteral.$metadata$ = {
  kind: Kind_CLASS, 
  interfaces: [RequireFailureCapture]};
  function joinTo($receiver, dst, closeOnEnd, continuation) {
    return joinToImpl($receiver, dst, closeOnEnd, continuation);
  }
  function copyTo($receiver, dst, limit, continuation) {
    if (limit === void 0) 
      limit = Long$Companion$MAX_VALUE;
    return copyToSequentialImpl($receiver, dst, limit, continuation);
  }
  function ByteChannelSequentialBase(initial, autoFlush, pool) {
    if (pool === void 0) 
      pool = ChunkBuffer$Companion_getInstance().Pool;
    this.autoFlush_tqevpj$_0 = autoFlush;
    this.closed = false;
    this.writable = new BytePacketBuilder(0, pool);
    this.readable = ByteReadPacket_init(initial, pool);
    this.notFull_8be2vx$ = new Condition(ByteChannelSequentialBase$notFull$lambda(this));
    this.waitingForSize_acioxj$_0 = 1;
    this.atLeastNBytesAvailableForWrite_dspbt2$_0 = new Condition(ByteChannelSequentialBase$atLeastNBytesAvailableForWrite$lambda(this));
    this.waitingForRead_ad5k18$_0 = 1;
    this.atLeastNBytesAvailableForRead_mdv8hx$_0 = new Condition(ByteChannelSequentialBase$atLeastNBytesAvailableForRead$lambda(this));
    this.readByteOrder_mxhhha$_0 = ByteOrder$BIG_ENDIAN_getInstance();
    this.writeByteOrder_nzwt0f$_0 = ByteOrder$BIG_ENDIAN_getInstance();
    this.closedCause_mi5adr$_0 = null;
    this.lastReadAvailable_1j890x$_0 = 0;
    this.lastReadView_92ta1h$_0 = ChunkBuffer$Companion_getInstance().Empty;
  }
  Object.defineProperty(ByteChannelSequentialBase.prototype, 'autoFlush', {
  get: function() {
  return this.autoFlush_tqevpj$_0;
}});
  ByteChannelSequentialBase.prototype.totalPending_82umvh$_0 = function() {
  return this.readable.remaining.toInt() + this.writable.size | 0;
};
  Object.defineProperty(ByteChannelSequentialBase.prototype, 'availableForRead', {
  get: function() {
  return this.readable.remaining.toInt();
}});
  Object.defineProperty(ByteChannelSequentialBase.prototype, 'availableForWrite', {
  get: function() {
  var b = 4088 - (this.readable.remaining.toInt() + this.writable.size | 0) | 0;
  return Math_0.max(0, b);
}});
  Object.defineProperty(ByteChannelSequentialBase.prototype, 'readByteOrder', {
  get: function() {
  return this.readByteOrder_mxhhha$_0;
}, 
  set: function(readByteOrder) {
  this.readByteOrder_mxhhha$_0 = readByteOrder;
}});
  Object.defineProperty(ByteChannelSequentialBase.prototype, 'writeByteOrder', {
  get: function() {
  return this.writeByteOrder_nzwt0f$_0;
}, 
  set: function(writeByteOrder) {
  this.writeByteOrder_nzwt0f$_0 = writeByteOrder;
}});
  Object.defineProperty(ByteChannelSequentialBase.prototype, 'isClosedForRead', {
  get: function() {
  var tmp$ = this.closed;
  if (tmp$) {
    tmp$ = this.readable.endOfInput;
  }
  return tmp$;
}});
  Object.defineProperty(ByteChannelSequentialBase.prototype, 'isClosedForWrite', {
  get: function() {
  return this.closed;
}});
  Object.defineProperty(ByteChannelSequentialBase.prototype, 'totalBytesRead', {
  get: function() {
  return L0;
}});
  Object.defineProperty(ByteChannelSequentialBase.prototype, 'totalBytesWritten', {
  get: function() {
  return L0;
}});
  Object.defineProperty(ByteChannelSequentialBase.prototype, 'closedCause', {
  get: function() {
  return this.closedCause_mi5adr$_0;
}, 
  set: function(closedCause) {
  this.closedCause_mi5adr$_0 = closedCause;
}});
  ByteChannelSequentialBase.prototype.flush = function() {
  if (this.writable.isNotEmpty) {
    $unsafeAppend$(this.readable, this.writable);
    this.atLeastNBytesAvailableForRead_mdv8hx$_0.signal();
  }
};
  ByteChannelSequentialBase.prototype.ensureNotClosed_ozgwi5$_0 = function() {
  if (this.closed) 
    throw new ClosedWriteChannelException('Channel is already closed');
};
  ByteChannelSequentialBase.prototype.writeByte_s8j3t7$ = function(b, continuation) {
  this.writable.writeByte_s8j3t7$(b);
  return this.awaitFreeSpace(continuation);
};
  ByteChannelSequentialBase.prototype.reverseWrite_hkpayy$_0 = function(value, reversed) {
  var tmp$;
  if (this.writeByteOrder === ByteOrder$BIG_ENDIAN_getInstance()) {
    tmp$ = value();
  } else {
    tmp$ = reversed();
  }
  return tmp$;
};
  ByteChannelSequentialBase.prototype.writeShort_mq22fl$ = function(s, continuation) {
  var tmp$ = this.writable;
  var tmp$_0;
  if (this.writeByteOrder === ByteOrder$BIG_ENDIAN_getInstance()) {
    tmp$_0 = s;
  } else {
    tmp$_0 = reverseByteOrder_2(s);
  }
  writeShort_5(tmp$, tmp$_0);
  return this.awaitFreeSpace(continuation);
};
  ByteChannelSequentialBase.prototype.writeInt_za3lpa$ = function(i, continuation) {
  var tmp$ = this.writable;
  var tmp$_0;
  if (this.writeByteOrder === ByteOrder$BIG_ENDIAN_getInstance()) {
    tmp$_0 = i;
  } else {
    tmp$_0 = reverseByteOrder_3(i);
  }
  writeInt_5(tmp$, tmp$_0);
  return this.awaitFreeSpace(continuation);
};
  ByteChannelSequentialBase.prototype.writeLong_s8cxhz$ = function(l, continuation) {
  var tmp$ = this.writable;
  var tmp$_0;
  if (this.writeByteOrder === ByteOrder$BIG_ENDIAN_getInstance()) {
    tmp$_0 = l;
  } else {
    tmp$_0 = reverseByteOrder_4(l);
  }
  writeLong_3(tmp$, tmp$_0);
  return this.awaitFreeSpace(continuation);
};
  ByteChannelSequentialBase.prototype.writeFloat_mx4ult$ = function(f, continuation) {
  var tmp$ = this.writable;
  var tmp$_0;
  if (this.writeByteOrder === ByteOrder$BIG_ENDIAN_getInstance()) {
    tmp$_0 = f;
  } else {
    tmp$_0 = reverseByteOrder_5(f);
  }
  writeFloat_3(tmp$, tmp$_0);
  return this.awaitFreeSpace(continuation);
};
  ByteChannelSequentialBase.prototype.writeDouble_14dthe$ = function(d, continuation) {
  var tmp$ = this.writable;
  var tmp$_0;
  if (this.writeByteOrder === ByteOrder$BIG_ENDIAN_getInstance()) {
    tmp$_0 = d;
  } else {
    tmp$_0 = reverseByteOrder_6(d);
  }
  writeDouble_3(tmp$, tmp$_0);
  return this.awaitFreeSpace(continuation);
};
  ByteChannelSequentialBase.prototype.writePacket_3uq2w4$ = function(packet, continuation) {
  this.writable.writePacket_3uq2w4$(packet);
  return this.awaitFreeSpace(continuation);
};
  ByteChannelSequentialBase.prototype.writeFully_99qa0s$ = function(src, continuation) {
  var tmp$;
  return this.writeFully_lh221x$(Kotlin.isType(tmp$ = src, Buffer) ? tmp$ : throwCCE(), continuation);
};
  ByteChannelSequentialBase.prototype.writeFully_lh221x$ = function(src, continuation) {
  writeFully_20(this.writable, src);
  return this.awaitFreeSpace(continuation);
};
  function Coroutine$writeFully_mj6st8$($this, src_0, offset_0, length_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$src = src_0;
    this.local$offset = offset_0;
    this.local$length = length_0;
  }
  Coroutine$writeFully_mj6st8$.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$writeFully_mj6st8$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeFully_mj6st8$.prototype.constructor = Coroutine$writeFully_mj6st8$;
  Coroutine$writeFully_mj6st8$.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        writeFully_13(this.$this.writable, this.local$src, this.local$offset, this.local$length);
        this.state_0 = 2;
        this.result_0 = this.$this.awaitFreeSpace(this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        return;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.writeFully_mj6st8$ = function(src_0, offset_0, length_0, continuation_0, suspended) {
  var instance = new Coroutine$writeFully_mj6st8$(this, src_0, offset_0, length_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$writeAvailable_99qa0s$($this, src_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$srcRemaining = void 0;
    this.local$size = void 0;
    this.local$src = src_0;
  }
  Coroutine$writeAvailable_99qa0s$.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$writeAvailable_99qa0s$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeAvailable_99qa0s$.prototype.constructor = Coroutine$writeAvailable_99qa0s$;
  Coroutine$writeAvailable_99qa0s$.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.local$srcRemaining = this.local$src.writePosition - this.local$src.readPosition | 0;
        if (this.local$srcRemaining === 0) {
          return 0;
        } else {
          this.state_0 = 2;
          continue;
        }
      case 1:
        throw this.exception_0;
      case 2:
        var b = this.$this.availableForWrite;
        this.local$size = Math_0.min(this.local$srcRemaining, b);
        if (this.local$size === 0) {
          this.state_0 = 4;
          this.result_0 = this.$this.writeAvailableSuspend_5fukw0$_0(this.local$src, this);
          if (this.result_0 === COROUTINE_SUSPENDED) 
            return COROUTINE_SUSPENDED;
          continue;
        } else {
          writeFully_20(this.$this.writable, this.local$src, this.local$size);
          this.state_0 = 3;
          this.result_0 = this.$this.awaitFreeSpace(this);
          if (this.result_0 === COROUTINE_SUSPENDED) 
            return COROUTINE_SUSPENDED;
          continue;
        }
      case 3:
        this.local$tmp$ = this.local$size;
        this.state_0 = 5;
        continue;
      case 4:
        this.local$tmp$ = this.result_0;
        this.state_0 = 5;
        continue;
      case 5:
        return this.local$tmp$;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.writeAvailable_99qa0s$ = function(src_0, continuation_0, suspended) {
  var instance = new Coroutine$writeAvailable_99qa0s$(this, src_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$writeAvailable_mj6st8$($this, src_0, offset_0, length_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$size = void 0;
    this.local$src = src_0;
    this.local$offset = offset_0;
    this.local$length = length_0;
  }
  Coroutine$writeAvailable_mj6st8$.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$writeAvailable_mj6st8$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeAvailable_mj6st8$.prototype.constructor = Coroutine$writeAvailable_mj6st8$;
  Coroutine$writeAvailable_mj6st8$.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        if (this.local$length === 0) {
          return 0;
        } else {
          this.state_0 = 2;
          continue;
        }
      case 1:
        throw this.exception_0;
      case 2:
        var b = this.$this.availableForWrite;
        this.local$size = Math_0.min(this.local$length, b);
        if (this.local$size === 0) {
          this.state_0 = 4;
          this.result_0 = this.$this.writeAvailableSuspend_1zn44g$_0(this.local$src, this.local$offset, this.local$length, this);
          if (this.result_0 === COROUTINE_SUSPENDED) 
            return COROUTINE_SUSPENDED;
          continue;
        } else {
          writeFully_13(this.$this.writable, this.local$src, this.local$offset, this.local$size);
          this.state_0 = 3;
          this.result_0 = this.$this.awaitFreeSpace(this);
          if (this.result_0 === COROUTINE_SUSPENDED) 
            return COROUTINE_SUSPENDED;
          continue;
        }
      case 3:
        this.local$tmp$ = this.local$size;
        this.state_0 = 5;
        continue;
      case 4:
        this.local$tmp$ = this.result_0;
        this.state_0 = 5;
        continue;
      case 5:
        return this.local$tmp$;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.writeAvailable_mj6st8$ = function(src_0, offset_0, length_0, continuation_0, suspended) {
  var instance = new Coroutine$writeAvailable_mj6st8$(this, src_0, offset_0, length_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$writeSuspendSession_8dv01$($this, visitor_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$visitor = visitor_0;
  }
  Coroutine$writeSuspendSession_8dv01$.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$writeSuspendSession_8dv01$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeSuspendSession_8dv01$.prototype.constructor = Coroutine$writeSuspendSession_8dv01$;
  Coroutine$writeSuspendSession_8dv01$.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var session = this.$this.beginWriteSession();
        this.state_0 = 2;
        this.result_0 = this.local$visitor(session, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        return;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.writeSuspendSession_8dv01$ = function(visitor_0, continuation_0, suspended) {
  var instance = new Coroutine$writeSuspendSession_8dv01$(this, visitor_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function ByteChannelSequentialBase$beginWriteSession$ObjectLiteral(this$ByteChannelSequentialBase) {
    this.this$ByteChannelSequentialBase = this$ByteChannelSequentialBase;
  }
  ByteChannelSequentialBase$beginWriteSession$ObjectLiteral.prototype.request_za3lpa$ = function(min) {
  var tmp$;
  if (this.this$ByteChannelSequentialBase.availableForWrite === 0) 
    return null;
  return Kotlin.isType(tmp$ = this.this$ByteChannelSequentialBase.writable.prepareWriteHead_za3lpa$(min), IoBuffer) ? tmp$ : throwCCE();
};
  ByteChannelSequentialBase$beginWriteSession$ObjectLiteral.prototype.written_za3lpa$ = function(n) {
  this.this$ByteChannelSequentialBase.writable.afterHeadWrite();
  this.this$ByteChannelSequentialBase.afterWrite();
};
  ByteChannelSequentialBase$beginWriteSession$ObjectLiteral.prototype.flush = function() {
  this.this$ByteChannelSequentialBase.flush();
};
  function Coroutine$tryAwait_za3lpa$($this, n_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$n = n_0;
  }
  Coroutine$tryAwait_za3lpa$.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$tryAwait_za3lpa$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$tryAwait_za3lpa$.prototype.constructor = Coroutine$tryAwait_za3lpa$;
  Coroutine$tryAwait_za3lpa$.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        if (this.$this.this$ByteChannelSequentialBase.availableForWrite < this.local$n) {
          this.$this.this$ByteChannelSequentialBase.waitingForSize_acioxj$_0 = this.local$n;
          this.state_0 = 2;
          this.result_0 = this.$this.this$ByteChannelSequentialBase.atLeastNBytesAvailableForWrite_dspbt2$_0.await(this);
          if (this.result_0 === COROUTINE_SUSPENDED) 
            return COROUTINE_SUSPENDED;
          continue;
        } else {
          this.state_0 = 3;
          continue;
        }
      case 1:
        throw this.exception_0;
      case 2:
        this.state_0 = 3;
        continue;
      case 3:
        return;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase$beginWriteSession$ObjectLiteral.prototype.tryAwait_za3lpa$ = function(n_0, continuation_0, suspended) {
  var instance = new Coroutine$tryAwait_za3lpa$(this, n_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  ByteChannelSequentialBase$beginWriteSession$ObjectLiteral.$metadata$ = {
  kind: Kind_CLASS, 
  interfaces: [WriterSuspendSession]};
  ByteChannelSequentialBase.prototype.beginWriteSession = function() {
  return new ByteChannelSequentialBase$beginWriteSession$ObjectLiteral(this);
};
  ByteChannelSequentialBase.prototype.endWriteSession_za3lpa$ = function(written) {
  this.writable.afterHeadWrite();
  this.afterWrite();
};
  function Coroutine$readByte($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
  }
  Coroutine$readByte.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readByte.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readByte.prototype.constructor = Coroutine$readByte;
  Coroutine$readByte.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        if (!this.$this.readable.endOfInput) {
          var $receiver = this.$this.readable.readByte();
          this.$this.afterRead();
          this.local$tmp$ = $receiver;
          this.state_0 = 3;
          continue;
        } else {
          this.state_0 = 2;
          this.result_0 = this.$this.readByteSlow_8d7zll$_0(this);
          if (this.result_0 === COROUTINE_SUSPENDED) 
            return COROUTINE_SUSPENDED;
          continue;
        }
      case 1:
        throw this.exception_0;
      case 2:
        this.local$tmp$ = this.result_0;
        this.state_0 = 3;
        continue;
      case 3:
        return this.local$tmp$;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.readByte = function(continuation_0, suspended) {
  var instance = new Coroutine$readByte(this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  ByteChannelSequentialBase.prototype.checkClosed_ldvyyk$_0 = function(n) {
  var tmp$;
  if (this.closed) {
    throw (tmp$ = this.closedCause) != null ? tmp$ : this.prematureClose_cio2uz$_0(n);
  }
};
  ByteChannelSequentialBase.prototype.prematureClose_cio2uz$_0 = function(n) {
  return new EOFException(n.toString() + ' bytes required but EOF reached');
};
  function Coroutine$readByteSlow_8d7zll$_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$readByteSlow_8d7zll$_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readByteSlow_8d7zll$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readByteSlow_8d7zll$_0.prototype.constructor = Coroutine$readByteSlow_8d7zll$_0;
  Coroutine$readByteSlow_8d7zll$_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        this.state_0 = 3;
        this.result_0 = this.$this.awaitSuspend_za3lpa$(1, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 3:
        if (!this.$this.readable.endOfInput) {
          var $receiver = this.$this.readable.readByte();
          this.$this.afterRead();
          return $receiver;
        } else {
          this.state_0 = 4;
          continue;
        }
      case 4:
        this.$this.checkClosed_ldvyyk$_0(1);
        this.state_0 = 2;
        continue;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.readByteSlow_8d7zll$_0 = function(continuation_0, suspended) {
  var instance = new Coroutine$readByteSlow_8d7zll$_0(this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$readShort($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
  }
  Coroutine$readShort.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readShort.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readShort.prototype.constructor = Coroutine$readShort;
  Coroutine$readShort.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        if (this.$this.readable.hasBytes_za3lpa$(2)) {
          var $receiver = readShort_3(this.$this.readable);
          var reverseRead_c7xnii$_0$result;
          if (this.$this.readByteOrder === ByteOrder$BIG_ENDIAN_getInstance()) {
            reverseRead_c7xnii$_0$result = $receiver;
          } else {
            reverseRead_c7xnii$_0$result = reverseByteOrder_2($receiver);
          }
          var $receiver_0 = reverseRead_c7xnii$_0$result;
          this.$this.afterRead();
          this.local$tmp$ = $receiver_0;
          this.state_0 = 3;
          continue;
        } else {
          this.state_0 = 2;
          this.result_0 = this.$this.readShortSlow_snoz4p$_0(this);
          if (this.result_0 === COROUTINE_SUSPENDED) 
            return COROUTINE_SUSPENDED;
          continue;
        }
      case 1:
        throw this.exception_0;
      case 2:
        this.local$tmp$ = this.result_0;
        this.state_0 = 3;
        continue;
      case 3:
        return this.local$tmp$;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.readShort = function(continuation_0, suspended) {
  var instance = new Coroutine$readShort(this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$readShortSlow_snoz4p$_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$readShortSlow_snoz4p$_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readShortSlow_snoz4p$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readShortSlow_snoz4p$_0.prototype.constructor = Coroutine$readShortSlow_snoz4p$_0;
  Coroutine$readShortSlow_snoz4p$_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        this.state_0 = 3;
        this.result_0 = this.$this.awaitSuspend_za3lpa$(2, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 3:
        if (this.$this.readable.hasBytes_za3lpa$(2)) {
          var $receiver = readShort_3(this.$this.readable);
          var reverseRead_c7xnii$_0$result;
          if (this.$this.readByteOrder === ByteOrder$BIG_ENDIAN_getInstance()) {
            reverseRead_c7xnii$_0$result = $receiver;
          } else {
            reverseRead_c7xnii$_0$result = reverseByteOrder_2($receiver);
          }
          var $receiver_0 = reverseRead_c7xnii$_0$result;
          this.$this.afterRead();
          return $receiver_0;
        } else {
          this.state_0 = 4;
          continue;
        }
      case 4:
        this.$this.checkClosed_ldvyyk$_0(2);
        this.state_0 = 2;
        continue;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.readShortSlow_snoz4p$_0 = function(continuation_0, suspended) {
  var instance = new Coroutine$readShortSlow_snoz4p$_0(this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  ByteChannelSequentialBase.prototype.afterRead = function() {
  this.atLeastNBytesAvailableForWrite_dspbt2$_0.signal();
  this.notFull_8be2vx$.signal();
};
  ByteChannelSequentialBase.prototype.reverseRead_c7xnii$_0 = function($receiver) {
  if (this.readByteOrder === ByteOrder$BIG_ENDIAN_getInstance()) 
    return $receiver;
  else 
    return reverseByteOrder_2($receiver);
};
  ByteChannelSequentialBase.prototype.reverseRead_22se7r$_0 = function($receiver) {
  if (this.readByteOrder === ByteOrder$BIG_ENDIAN_getInstance()) 
    return $receiver;
  else 
    return reverseByteOrder_3($receiver);
};
  ByteChannelSequentialBase.prototype.reverseRead_6kzvlw$_0 = function($receiver) {
  if (this.readByteOrder === ByteOrder$BIG_ENDIAN_getInstance()) 
    return $receiver;
  else 
    return reverseByteOrder_4($receiver);
};
  ByteChannelSequentialBase.prototype.reverseRead_64je5m$_0 = function($receiver) {
  if (this.readByteOrder === ByteOrder$BIG_ENDIAN_getInstance()) 
    return $receiver;
  else 
    return reverseByteOrder_5($receiver);
};
  ByteChannelSequentialBase.prototype.reverseRead_k04nk7$_0 = function($receiver) {
  if (this.readByteOrder === ByteOrder$BIG_ENDIAN_getInstance()) 
    return $receiver;
  else 
    return reverseByteOrder_6($receiver);
};
  function Coroutine$readInt($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
  }
  Coroutine$readInt.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readInt.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readInt.prototype.constructor = Coroutine$readInt;
  Coroutine$readInt.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        if (this.$this.readable.hasBytes_za3lpa$(4)) {
          var $receiver = readInt_3(this.$this.readable);
          var reverseRead_22se7r$_0$result;
          if (this.$this.readByteOrder === ByteOrder$BIG_ENDIAN_getInstance()) {
            reverseRead_22se7r$_0$result = $receiver;
          } else {
            reverseRead_22se7r$_0$result = reverseByteOrder_3($receiver);
          }
          var $receiver_0 = reverseRead_22se7r$_0$result;
          this.$this.afterRead();
          this.local$tmp$ = $receiver_0;
          this.state_0 = 3;
          continue;
        } else {
          this.state_0 = 2;
          this.result_0 = this.$this.readIntSlow_341bf8$_0(this);
          if (this.result_0 === COROUTINE_SUSPENDED) 
            return COROUTINE_SUSPENDED;
          continue;
        }
      case 1:
        throw this.exception_0;
      case 2:
        this.local$tmp$ = this.result_0;
        this.state_0 = 3;
        continue;
      case 3:
        return this.local$tmp$;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.readInt = function(continuation_0, suspended) {
  var instance = new Coroutine$readInt(this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$readIntSlow_341bf8$_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$readIntSlow_341bf8$_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readIntSlow_341bf8$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readIntSlow_341bf8$_0.prototype.constructor = Coroutine$readIntSlow_341bf8$_0;
  Coroutine$readIntSlow_341bf8$_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        this.state_0 = 3;
        this.result_0 = this.$this.awaitSuspend_za3lpa$(4, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 3:
        if (this.$this.readable.hasBytes_za3lpa$(4)) {
          var $receiver = readInt_3(this.$this.readable);
          var reverseRead_22se7r$_0$result;
          if (this.$this.readByteOrder === ByteOrder$BIG_ENDIAN_getInstance()) {
            reverseRead_22se7r$_0$result = $receiver;
          } else {
            reverseRead_22se7r$_0$result = reverseByteOrder_3($receiver);
          }
          var $receiver_0 = reverseRead_22se7r$_0$result;
          this.$this.afterRead();
          return $receiver_0;
        } else {
          this.state_0 = 4;
          continue;
        }
      case 4:
        this.$this.checkClosed_ldvyyk$_0(4);
        this.state_0 = 2;
        continue;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.readIntSlow_341bf8$_0 = function(continuation_0, suspended) {
  var instance = new Coroutine$readIntSlow_341bf8$_0(this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$readLong($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
  }
  Coroutine$readLong.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readLong.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readLong.prototype.constructor = Coroutine$readLong;
  Coroutine$readLong.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        if (this.$this.readable.hasBytes_za3lpa$(8)) {
          var $receiver = readLong_3(this.$this.readable);
          var reverseRead_6kzvlw$_0$result;
          if (this.$this.readByteOrder === ByteOrder$BIG_ENDIAN_getInstance()) {
            reverseRead_6kzvlw$_0$result = $receiver;
          } else {
            reverseRead_6kzvlw$_0$result = reverseByteOrder_4($receiver);
          }
          var $receiver_0 = reverseRead_6kzvlw$_0$result;
          this.$this.afterRead();
          this.local$tmp$ = $receiver_0;
          this.state_0 = 3;
          continue;
        } else {
          this.state_0 = 2;
          this.result_0 = this.$this.readLongSlow_ro953n$_0(this);
          if (this.result_0 === COROUTINE_SUSPENDED) 
            return COROUTINE_SUSPENDED;
          continue;
        }
      case 1:
        throw this.exception_0;
      case 2:
        this.local$tmp$ = this.result_0;
        this.state_0 = 3;
        continue;
      case 3:
        return this.local$tmp$;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.readLong = function(continuation_0, suspended) {
  var instance = new Coroutine$readLong(this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$readLongSlow_ro953n$_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$readLongSlow_ro953n$_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readLongSlow_ro953n$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readLongSlow_ro953n$_0.prototype.constructor = Coroutine$readLongSlow_ro953n$_0;
  Coroutine$readLongSlow_ro953n$_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        this.state_0 = 3;
        this.result_0 = this.$this.awaitSuspend_za3lpa$(8, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 3:
        if (this.$this.readable.hasBytes_za3lpa$(8)) {
          var $receiver = readLong_3(this.$this.readable);
          var reverseRead_6kzvlw$_0$result;
          if (this.$this.readByteOrder === ByteOrder$BIG_ENDIAN_getInstance()) {
            reverseRead_6kzvlw$_0$result = $receiver;
          } else {
            reverseRead_6kzvlw$_0$result = reverseByteOrder_4($receiver);
          }
          var $receiver_0 = reverseRead_6kzvlw$_0$result;
          this.$this.afterRead();
          return $receiver_0;
        } else {
          this.state_0 = 4;
          continue;
        }
      case 4:
        this.$this.checkClosed_ldvyyk$_0(8);
        this.state_0 = 2;
        continue;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.readLongSlow_ro953n$_0 = function(continuation_0, suspended) {
  var instance = new Coroutine$readLongSlow_ro953n$_0(this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$readFloat($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
  }
  Coroutine$readFloat.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readFloat.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readFloat.prototype.constructor = Coroutine$readFloat;
  Coroutine$readFloat.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        if (this.$this.readable.hasBytes_za3lpa$(4)) {
          var $receiver = readFloat_3(this.$this.readable);
          var reverseRead_64je5m$_0$result;
          if (this.$this.readByteOrder === ByteOrder$BIG_ENDIAN_getInstance()) {
            reverseRead_64je5m$_0$result = $receiver;
          } else {
            reverseRead_64je5m$_0$result = reverseByteOrder_5($receiver);
          }
          var $receiver_0 = reverseRead_64je5m$_0$result;
          this.$this.afterRead();
          this.local$tmp$ = $receiver_0;
          this.state_0 = 3;
          continue;
        } else {
          this.state_0 = 2;
          this.result_0 = this.$this.readFloatSlow_cc1x5$_0(this);
          if (this.result_0 === COROUTINE_SUSPENDED) 
            return COROUTINE_SUSPENDED;
          continue;
        }
      case 1:
        throw this.exception_0;
      case 2:
        this.local$tmp$ = this.result_0;
        this.state_0 = 3;
        continue;
      case 3:
        return this.local$tmp$;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.readFloat = function(continuation_0, suspended) {
  var instance = new Coroutine$readFloat(this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$readFloatSlow_cc1x5$_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$readFloatSlow_cc1x5$_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readFloatSlow_cc1x5$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readFloatSlow_cc1x5$_0.prototype.constructor = Coroutine$readFloatSlow_cc1x5$_0;
  Coroutine$readFloatSlow_cc1x5$_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        this.state_0 = 3;
        this.result_0 = this.$this.awaitSuspend_za3lpa$(4, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 3:
        if (this.$this.readable.hasBytes_za3lpa$(4)) {
          var $receiver = readFloat_3(this.$this.readable);
          var reverseRead_64je5m$_0$result;
          if (this.$this.readByteOrder === ByteOrder$BIG_ENDIAN_getInstance()) {
            reverseRead_64je5m$_0$result = $receiver;
          } else {
            reverseRead_64je5m$_0$result = reverseByteOrder_5($receiver);
          }
          var $receiver_0 = reverseRead_64je5m$_0$result;
          this.$this.afterRead();
          return $receiver_0;
        } else {
          this.state_0 = 4;
          continue;
        }
      case 4:
        this.$this.checkClosed_ldvyyk$_0(4);
        this.state_0 = 2;
        continue;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.readFloatSlow_cc1x5$_0 = function(continuation_0, suspended) {
  var instance = new Coroutine$readFloatSlow_cc1x5$_0(this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$readDouble($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
  }
  Coroutine$readDouble.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readDouble.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readDouble.prototype.constructor = Coroutine$readDouble;
  Coroutine$readDouble.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        if (this.$this.readable.hasBytes_za3lpa$(8)) {
          var $receiver = readDouble_3(this.$this.readable);
          var reverseRead_k04nk7$_0$result;
          if (this.$this.readByteOrder === ByteOrder$BIG_ENDIAN_getInstance()) {
            reverseRead_k04nk7$_0$result = $receiver;
          } else {
            reverseRead_k04nk7$_0$result = reverseByteOrder_6($receiver);
          }
          var $receiver_0 = reverseRead_k04nk7$_0$result;
          this.$this.afterRead();
          this.local$tmp$ = $receiver_0;
          this.state_0 = 3;
          continue;
        } else {
          this.state_0 = 2;
          this.result_0 = this.$this.readDoubleSlow_7nj7he$_0(this);
          if (this.result_0 === COROUTINE_SUSPENDED) 
            return COROUTINE_SUSPENDED;
          continue;
        }
      case 1:
        throw this.exception_0;
      case 2:
        this.local$tmp$ = this.result_0;
        this.state_0 = 3;
        continue;
      case 3:
        return this.local$tmp$;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.readDouble = function(continuation_0, suspended) {
  var instance = new Coroutine$readDouble(this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$readDoubleSlow_7nj7he$_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$readDoubleSlow_7nj7he$_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readDoubleSlow_7nj7he$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readDoubleSlow_7nj7he$_0.prototype.constructor = Coroutine$readDoubleSlow_7nj7he$_0;
  Coroutine$readDoubleSlow_7nj7he$_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        this.state_0 = 3;
        this.result_0 = this.$this.awaitSuspend_za3lpa$(8, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 3:
        if (this.$this.readable.hasBytes_za3lpa$(8)) {
          var $receiver = readDouble_3(this.$this.readable);
          var reverseRead_k04nk7$_0$result;
          if (this.$this.readByteOrder === ByteOrder$BIG_ENDIAN_getInstance()) {
            reverseRead_k04nk7$_0$result = $receiver;
          } else {
            reverseRead_k04nk7$_0$result = reverseByteOrder_6($receiver);
          }
          var $receiver_0 = reverseRead_k04nk7$_0$result;
          this.$this.afterRead();
          return $receiver_0;
        } else {
          this.state_0 = 4;
          continue;
        }
      case 4:
        this.$this.checkClosed_ldvyyk$_0(8);
        this.state_0 = 2;
        continue;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.readDoubleSlow_7nj7he$_0 = function(continuation_0, suspended) {
  var instance = new Coroutine$readDoubleSlow_7nj7he$_0(this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$readRemaining_yhmem3$($this, limit_0, headerSizeHint_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$limit = limit_0;
    this.local$headerSizeHint = headerSizeHint_0;
  }
  Coroutine$readRemaining_yhmem3$.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readRemaining_yhmem3$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readRemaining_yhmem3$.prototype.constructor = Coroutine$readRemaining_yhmem3$;
  Coroutine$readRemaining_yhmem3$.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var builder = BytePacketBuilder_0(this.local$headerSizeHint);
        var tmp$ = this.$this.readable;
        var b = this.$this.readable.remaining;
        builder.writePacket_pi0yjl$(tmp$, this.local$limit.compareTo_11rb$(b) <= 0 ? this.local$limit : b);
        var remaining = this.local$limit.subtract(Kotlin.Long.fromInt(builder.size));
        var tmp$_0 = equals(remaining, L0);
        if (!tmp$_0) {
          tmp$_0 = (this.$this.readable.endOfInput && this.$this.closed);
        }
        if (tmp$_0) {
          this.$this.afterRead();
          this.local$tmp$ = builder.build();
          this.state_0 = 3;
          continue;
        } else {
          this.state_0 = 2;
          this.result_0 = this.$this.readRemainingSuspend_gfhva8$_0(builder, this.local$limit, this);
          if (this.result_0 === COROUTINE_SUSPENDED) 
            return COROUTINE_SUSPENDED;
          continue;
        }
      case 1:
        throw this.exception_0;
      case 2:
        this.local$tmp$ = this.result_0;
        this.state_0 = 3;
        continue;
      case 3:
        return this.local$tmp$;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.readRemaining_yhmem3$ = function(limit_0, headerSizeHint_0, continuation_0, suspended) {
  var instance = new Coroutine$readRemaining_yhmem3$(this, limit_0, headerSizeHint_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$readRemainingSuspend_gfhva8$_0($this, builder_0, limit_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$builder = builder_0;
    this.local$limit = limit_0;
  }
  Coroutine$readRemainingSuspend_gfhva8$_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readRemainingSuspend_gfhva8$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readRemainingSuspend_gfhva8$_0.prototype.constructor = Coroutine$readRemainingSuspend_gfhva8$_0;
  Coroutine$readRemainingSuspend_gfhva8$_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        if (this.local$builder.size >= this.local$limit.toNumber()) {
          this.state_0 = 5;
          continue;
        }
        this.local$builder.writePacket_3uq2w4$(this.$this.readable);
        this.$this.afterRead();
        if (equals(this.$this.readable.remaining, L0) && this.$this.writable.size === 0 && this.$this.closed) {
          this.state_0 = 5;
          continue;
        } else {
          this.state_0 = 3;
          continue;
        }
      case 3:
        this.state_0 = 4;
        this.result_0 = this.$this.awaitSuspend_za3lpa$(1, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 4:
        this.state_0 = 2;
        continue;
      case 5:
        return this.local$builder.build();
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.readRemainingSuspend_gfhva8$_0 = function(builder_0, limit_0, continuation_0, suspended) {
  var instance = new Coroutine$readRemainingSuspend_gfhva8$_0(this, builder_0, limit_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$readPacket_vux9f0$($this, size_0, headerSizeHint_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$size = size_0;
    this.local$headerSizeHint = headerSizeHint_0;
  }
  Coroutine$readPacket_vux9f0$.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readPacket_vux9f0$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readPacket_vux9f0$.prototype.constructor = Coroutine$readPacket_vux9f0$;
  Coroutine$readPacket_vux9f0$.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var builder = BytePacketBuilder_0(this.local$headerSizeHint);
        var remaining = this.local$size;
        var a = Kotlin.Long.fromInt(remaining);
        var b = this.$this.readable.remaining;
        var partSize = (a.compareTo_11rb$(b) <= 0 ? a : b).toInt();
        remaining = remaining - partSize | 0;
        builder.writePacket_f7stg6$(this.$this.readable, partSize);
        this.$this.afterRead();
        if (remaining > 0) {
          this.state_0 = 2;
          this.result_0 = this.$this.readPacketSuspend_2ns5o1$_0(builder, remaining, this);
          if (this.result_0 === COROUTINE_SUSPENDED) 
            return COROUTINE_SUSPENDED;
          continue;
        } else {
          this.local$tmp$ = builder.build();
          this.state_0 = 3;
          continue;
        }
      case 1:
        throw this.exception_0;
      case 2:
        this.local$tmp$ = this.result_0;
        this.state_0 = 3;
        continue;
      case 3:
        return this.local$tmp$;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.readPacket_vux9f0$ = function(size_0, headerSizeHint_0, continuation_0, suspended) {
  var instance = new Coroutine$readPacket_vux9f0$(this, size_0, headerSizeHint_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$readPacketSuspend_2ns5o1$_0($this, builder_0, size_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$remaining = void 0;
    this.local$builder = builder_0;
    this.local$size = size_0;
  }
  Coroutine$readPacketSuspend_2ns5o1$_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readPacketSuspend_2ns5o1$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readPacketSuspend_2ns5o1$_0.prototype.constructor = Coroutine$readPacketSuspend_2ns5o1$_0;
  Coroutine$readPacketSuspend_2ns5o1$_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.local$remaining = this.local$size;
        this.state_0 = 2;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        if (this.local$remaining <= 0) {
          this.state_0 = 5;
          continue;
        }
        var a = Kotlin.Long.fromInt(this.local$remaining);
        var b = this.$this.readable.remaining;
        var partSize = (a.compareTo_11rb$(b) <= 0 ? a : b).toInt();
        this.local$remaining = this.local$remaining - partSize | 0;
        this.local$builder.writePacket_f7stg6$(this.$this.readable, partSize);
        this.$this.afterRead();
        if (this.local$remaining > 0) {
          this.state_0 = 3;
          this.result_0 = this.$this.awaitSuspend_za3lpa$(1, this);
          if (this.result_0 === COROUTINE_SUSPENDED) 
            return COROUTINE_SUSPENDED;
          continue;
        } else {
          this.state_0 = 4;
          continue;
        }
      case 3:
        this.state_0 = 4;
        continue;
      case 4:
        this.state_0 = 2;
        continue;
      case 5:
        return this.local$builder.build();
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.readPacketSuspend_2ns5o1$_0 = function(builder_0, size_0, continuation_0, suspended) {
  var instance = new Coroutine$readPacketSuspend_2ns5o1$_0(this, builder_0, size_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  ByteChannelSequentialBase.prototype.readAvailableClosed = function() {
  var tmp$;
  if ((tmp$ = this.closedCause) != null) {
    throw tmp$;
  }
  -1;
  return -1;
};
  ByteChannelSequentialBase.prototype.readAvailable_99qa0s$ = function(dst, continuation) {
  var tmp$;
  return this.readAvailable_lh221x$(Kotlin.isType(tmp$ = dst, Buffer) ? tmp$ : throwCCE(), continuation);
};
  function Coroutine$readAvailable_lh221x$($this, dst_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$dst = dst_0;
  }
  Coroutine$readAvailable_lh221x$.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readAvailable_lh221x$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readAvailable_lh221x$.prototype.constructor = Coroutine$readAvailable_lh221x$;
  Coroutine$readAvailable_lh221x$.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        if (this.$this.closedCause != null) {
          throw ensureNotNull(this.$this.closedCause);
        } else {
          if (this.$this.readable.canRead()) {
            var a = Kotlin.Long.fromInt(this.local$dst.limit - this.local$dst.writePosition | 0);
            var b = this.$this.readable.remaining;
            var size = (a.compareTo_11rb$(b) <= 0 ? a : b).toInt();
            readFully_21(this.$this.readable, this.local$dst, size);
            this.$this.afterRead();
            this.local$tmp$ = size;
            this.state_0 = 5;
            continue;
          } else {
            if (this.$this.closed) {
              this.local$tmp$ = this.$this.readAvailableClosed();
              this.state_0 = 4;
              continue;
            } else {
              if (!(this.local$dst.limit > this.local$dst.writePosition)) {
                this.local$tmp$ = 0;
                this.state_0 = 3;
                continue;
              } else {
                this.state_0 = 2;
                this.result_0 = this.$this.readAvailableSuspend_b4eait$_0(this.local$dst, this);
                if (this.result_0 === COROUTINE_SUSPENDED) 
                  return COROUTINE_SUSPENDED;
                continue;
              }
            }
          }
        }
      case 1:
        throw this.exception_0;
      case 2:
        this.local$tmp$ = this.result_0;
        this.state_0 = 3;
        continue;
      case 3:
        this.state_0 = 4;
        continue;
      case 4:
        this.state_0 = 5;
        continue;
      case 5:
        this.state_0 = 6;
        continue;
      case 6:
        return this.local$tmp$;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.readAvailable_lh221x$ = function(dst_0, continuation_0, suspended) {
  var instance = new Coroutine$readAvailable_lh221x$(this, dst_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$readAvailableSuspend_b4eait$_0($this, dst_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$dst = dst_0;
  }
  Coroutine$readAvailableSuspend_b4eait$_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readAvailableSuspend_b4eait$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readAvailableSuspend_b4eait$_0.prototype.constructor = Coroutine$readAvailableSuspend_b4eait$_0;
  Coroutine$readAvailableSuspend_b4eait$_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = this.$this.awaitSuspend_za3lpa$(1, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        this.state_0 = 3;
        this.result_0 = this.$this.readAvailable_lh221x$(this.local$dst, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 3:
        return this.result_0;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.readAvailableSuspend_b4eait$_0 = function(dst_0, continuation_0, suspended) {
  var instance = new Coroutine$readAvailableSuspend_b4eait$_0(this, dst_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$readFully_qr0era$($this, dst_0, n_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$dst = dst_0;
    this.local$n = n_0;
  }
  Coroutine$readFully_qr0era$.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readFully_qr0era$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readFully_qr0era$.prototype.constructor = Coroutine$readFully_qr0era$;
  Coroutine$readFully_qr0era$.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var tmp$;
        this.state_0 = 2;
        this.result_0 = this.$this.readFully_bkznnu$_0(Kotlin.isType(tmp$ = this.local$dst, Buffer) ? tmp$ : throwCCE(), this.local$n, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        return;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.readFully_qr0era$ = function(dst_0, n_0, continuation_0, suspended) {
  var instance = new Coroutine$readFully_qr0era$(this, dst_0, n_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function ByteChannelSequentialBase$readFully$lambda(closure$n) {
    return function() {
  return 'Not enough space in the destination buffer to write ' + closure$n + ' bytes';
};
  }
  function ByteChannelSequentialBase$readFully$lambda_0() {
    return "n shouldn't be negative";
  }
  function Coroutine$readFully_bkznnu$_0($this, dst_0, n_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$dst = dst_0;
    this.local$n = n_0;
  }
  Coroutine$readFully_bkznnu$_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readFully_bkznnu$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readFully_bkznnu$_0.prototype.constructor = Coroutine$readFully_bkznnu$_0;
  Coroutine$readFully_bkznnu$_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        if (!(this.local$n <= (this.local$dst.limit - this.local$dst.writePosition | 0))) {
          var m = new require$ObjectLiteral(ByteChannelSequentialBase$readFully$lambda(this.local$n));
          m.doFail();
        }
        if (!(this.local$n >= 0)) {
          var m_0 = new require$ObjectLiteral(ByteChannelSequentialBase$readFully$lambda_0);
          m_0.doFail();
        }
        if (this.$this.closedCause != null) {
          throw ensureNotNull(this.$this.closedCause);
        } else {
          if (this.$this.readable.remaining.toNumber() >= this.local$n) {
            var $receiver = (readFully_21(this.$this.readable, this.local$dst, this.local$n) , Unit);
            this.$this.afterRead();
            this.local$tmp$ = $receiver;
            this.state_0 = 4;
            continue;
          } else {
            if (this.$this.closed) {
              throw new EOFException('Channel is closed and not enough bytes available: required ' + this.local$n + ' but ' + this.$this.availableForRead + ' available');
            } else {
              this.state_0 = 2;
              this.result_0 = this.$this.readFullySuspend_8xotw2$_0(this.local$dst, this.local$n, this);
              if (this.result_0 === COROUTINE_SUSPENDED) 
                return COROUTINE_SUSPENDED;
              continue;
            }
          }
        }
      case 1:
        throw this.exception_0;
      case 2:
        this.local$tmp$ = this.result_0;
        this.state_0 = 3;
        continue;
      case 3:
        this.state_0 = 4;
        continue;
      case 4:
        this.state_0 = 5;
        continue;
      case 5:
        return this.local$tmp$;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.readFully_bkznnu$_0 = function(dst_0, n_0, continuation_0, suspended) {
  var instance = new Coroutine$readFully_bkznnu$_0(this, dst_0, n_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$readFullySuspend_8xotw2$_0($this, dst_0, n_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$dst = dst_0;
    this.local$n = n_0;
  }
  Coroutine$readFullySuspend_8xotw2$_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readFullySuspend_8xotw2$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readFullySuspend_8xotw2$_0.prototype.constructor = Coroutine$readFullySuspend_8xotw2$_0;
  Coroutine$readFullySuspend_8xotw2$_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = this.$this.awaitSuspend_za3lpa$(this.local$n, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        this.state_0 = 3;
        this.result_0 = this.$this.readFully_bkznnu$_0(this.local$dst, this.local$n, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 3:
        return this.result_0;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.readFullySuspend_8xotw2$_0 = function(dst_0, n_0, continuation_0, suspended) {
  var instance = new Coroutine$readFullySuspend_8xotw2$_0(this, dst_0, n_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$readAvailable_mj6st8$($this, dst_0, offset_0, length_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$dst = dst_0;
    this.local$offset = offset_0;
    this.local$length = length_0;
  }
  Coroutine$readAvailable_mj6st8$.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readAvailable_mj6st8$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readAvailable_mj6st8$.prototype.constructor = Coroutine$readAvailable_mj6st8$;
  Coroutine$readAvailable_mj6st8$.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        if (this.$this.readable.canRead()) {
          var a = Kotlin.Long.fromInt(this.local$length);
          var b = this.$this.readable.remaining;
          var size = (a.compareTo_11rb$(b) <= 0 ? a : b).toInt();
          readFully_15(this.$this.readable, this.local$dst, this.local$offset, size);
          this.$this.afterRead();
          this.local$tmp$ = size;
          this.state_0 = 4;
          continue;
        } else {
          if (this.$this.closed) {
            this.local$tmp$ = this.$this.readAvailableClosed();
            this.state_0 = 3;
            continue;
          } else {
            this.state_0 = 2;
            this.result_0 = this.$this.readAvailableSuspend_v6ah9b$_0(this.local$dst, this.local$offset, this.local$length, this);
            if (this.result_0 === COROUTINE_SUSPENDED) 
              return COROUTINE_SUSPENDED;
            continue;
          }
        }
      case 1:
        throw this.exception_0;
      case 2:
        this.local$tmp$ = this.result_0;
        this.state_0 = 3;
        continue;
      case 3:
        this.state_0 = 4;
        continue;
      case 4:
        return this.local$tmp$;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.readAvailable_mj6st8$ = function(dst_0, offset_0, length_0, continuation_0, suspended) {
  var instance = new Coroutine$readAvailable_mj6st8$(this, dst_0, offset_0, length_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$readAvailableSuspend_v6ah9b$_0($this, dst_0, offset_0, length_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$dst = dst_0;
    this.local$offset = offset_0;
    this.local$length = length_0;
  }
  Coroutine$readAvailableSuspend_v6ah9b$_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readAvailableSuspend_v6ah9b$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readAvailableSuspend_v6ah9b$_0.prototype.constructor = Coroutine$readAvailableSuspend_v6ah9b$_0;
  Coroutine$readAvailableSuspend_v6ah9b$_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = this.$this.awaitSuspend_za3lpa$(1, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        this.state_0 = 3;
        this.result_0 = this.$this.readAvailable_mj6st8$(this.local$dst, this.local$offset, this.local$length, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 3:
        return this.result_0;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.readAvailableSuspend_v6ah9b$_0 = function(dst_0, offset_0, length_0, continuation_0, suspended) {
  var instance = new Coroutine$readAvailableSuspend_v6ah9b$_0(this, dst_0, offset_0, length_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$readFully_mj6st8$($this, dst_0, offset_0, length_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$rc = void 0;
    this.local$dst = dst_0;
    this.local$offset = offset_0;
    this.local$length = length_0;
  }
  Coroutine$readFully_mj6st8$.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readFully_mj6st8$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readFully_mj6st8$.prototype.constructor = Coroutine$readFully_mj6st8$;
  Coroutine$readFully_mj6st8$.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = this.$this.readAvailable_mj6st8$(this.local$dst, this.local$offset, this.local$length, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        this.local$rc = this.result_0;
        if (this.local$rc === this.local$length) {
          return;
        } else {
          this.state_0 = 3;
          continue;
        }
      case 3:
        if (this.local$rc === -1) 
          throw new EOFException('Unexpected end of stream');
        this.state_0 = 4;
        this.result_0 = this.$this.readFullySuspend_ayq7by$_0(this.local$dst, this.local$offset + this.local$rc | 0, this.local$length - this.local$rc | 0, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 4:
        return this.result_0;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.readFully_mj6st8$ = function(dst_0, offset_0, length_0, continuation_0, suspended) {
  var instance = new Coroutine$readFully_mj6st8$(this, dst_0, offset_0, length_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$readFullySuspend_ayq7by$_0($this, dst_0, offset_0, length_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$written = void 0;
    this.local$dst = dst_0;
    this.local$offset = offset_0;
    this.local$length = length_0;
  }
  Coroutine$readFullySuspend_ayq7by$_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readFullySuspend_ayq7by$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readFullySuspend_ayq7by$_0.prototype.constructor = Coroutine$readFullySuspend_ayq7by$_0;
  Coroutine$readFullySuspend_ayq7by$_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.local$written = 0;
        this.state_0 = 2;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        if (this.local$written >= this.local$length) {
          this.state_0 = 4;
          continue;
        }
        this.state_0 = 3;
        this.result_0 = this.$this.readAvailable_mj6st8$(this.local$dst, this.local$offset + this.local$written | 0, this.local$length - this.local$written | 0, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 3:
        var rc = this.result_0;
        if (rc === -1) 
          throw new EOFException('Unexpected end of stream');
        this.local$written = this.local$written + rc | 0;
        this.state_0 = 2;
        continue;
      case 4:
        return;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.readFullySuspend_ayq7by$_0 = function(dst_0, offset_0, length_0, continuation_0, suspended) {
  var instance = new Coroutine$readFullySuspend_ayq7by$_0(this, dst_0, offset_0, length_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$readBoolean($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
  }
  Coroutine$readBoolean.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readBoolean.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBoolean.prototype.constructor = Coroutine$readBoolean;
  Coroutine$readBoolean.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        if (this.$this.readable.canRead()) {
          var $receiver = this.$this.readable.readByte() === toByte(1);
          this.$this.afterRead();
          this.local$tmp$ = $receiver;
          this.state_0 = 3;
          continue;
        } else {
          this.state_0 = 2;
          this.result_0 = this.$this.readBooleanSlow_cbbszf$_0(this);
          if (this.result_0 === COROUTINE_SUSPENDED) 
            return COROUTINE_SUSPENDED;
          continue;
        }
      case 1:
        throw this.exception_0;
      case 2:
        this.local$tmp$ = this.result_0;
        this.state_0 = 3;
        continue;
      case 3:
        return this.local$tmp$;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.readBoolean = function(continuation_0, suspended) {
  var instance = new Coroutine$readBoolean(this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$readBooleanSlow_cbbszf$_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$readBooleanSlow_cbbszf$_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readBooleanSlow_cbbszf$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBooleanSlow_cbbszf$_0.prototype.constructor = Coroutine$readBooleanSlow_cbbszf$_0;
  Coroutine$readBooleanSlow_cbbszf$_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = this.$this.awaitSuspend_za3lpa$(1, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        this.$this.checkClosed_ldvyyk$_0(1);
        this.state_0 = 3;
        this.result_0 = this.$this.readBoolean(this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 3:
        return this.result_0;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.readBooleanSlow_cbbszf$_0 = function(continuation_0, suspended) {
  var instance = new Coroutine$readBooleanSlow_cbbszf$_0(this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  ByteChannelSequentialBase.prototype.completeReading_um9rnf$_0 = function() {
  var $this = this.lastReadView_92ta1h$_0;
  var remaining = $this.writePosition - $this.readPosition | 0;
  var delta = this.lastReadAvailable_1j890x$_0 - remaining | 0;
  if (this.lastReadView_92ta1h$_0 !== Buffer$Companion_getInstance().Empty) {
    completeReadHead_0(this.readable, this.lastReadView_92ta1h$_0);
  }
  if (delta > 0) {
    this.afterRead();
  }
  this.lastReadAvailable_1j890x$_0 = 0;
  this.lastReadView_92ta1h$_0 = ChunkBuffer$Companion_getInstance().Empty;
};
  function ByteChannelSequentialBase$await$lambda(closure$atLeast) {
    return function() {
  return "atLeast parameter shouldn't be negative: " + closure$atLeast;
};
  }
  function ByteChannelSequentialBase$await$lambda_0(closure$atLeast) {
    return function() {
  return "atLeast parameter shouldn't be larger than max buffer size of 4088: " + closure$atLeast;
};
  }
  ByteChannelSequentialBase.prototype.await_za3lpa$$default = function(atLeast, continuation) {
  if (!(atLeast >= 0)) {
    var m = new require$ObjectLiteral(ByteChannelSequentialBase$await$lambda(atLeast));
    m.doFail();
  }
  if (!(atLeast <= 4088)) {
    var m_0 = new require$ObjectLiteral(ByteChannelSequentialBase$await$lambda_0(atLeast));
    m_0.doFail();
  }
  this.completeReading_um9rnf$_0();
  if (atLeast === 0) 
    return !this.isClosedForRead;
  if (this.availableForRead >= atLeast) 
    return true;
  return this.awaitSuspend_za3lpa$(atLeast, continuation);
};
  ByteChannelSequentialBase.prototype.awaitInternalAtLeast1_8be2vx$ = function(continuation) {
  if (!this.readable.endOfInput) 
    return true;
  return this.awaitSuspend_za3lpa$(1, continuation);
};
  function ByteChannelSequentialBase$awaitSuspend$lambda(this$ByteChannelSequentialBase) {
    return function() {
  this$ByteChannelSequentialBase.afterRead();
  return Unit;
};
  }
  function Coroutine$awaitSuspend_za3lpa$($this, atLeast_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$atLeast = atLeast_0;
  }
  Coroutine$awaitSuspend_za3lpa$.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$awaitSuspend_za3lpa$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$awaitSuspend_za3lpa$.prototype.constructor = Coroutine$awaitSuspend_za3lpa$;
  Coroutine$awaitSuspend_za3lpa$.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var tmp$;
        if (!(this.local$atLeast >= 0)) {
          var message = 'Failed requirement.';
          throw IllegalArgumentException_init(message.toString());
        }
        this.$this.waitingForRead_ad5k18$_0 = this.local$atLeast;
        this.state_0 = 2;
        this.result_0 = this.$this.atLeastNBytesAvailableForRead_mdv8hx$_0.await_o14v8n$(ByteChannelSequentialBase$awaitSuspend$lambda(this.$this), this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        if ((tmp$ = this.$this.closedCause) != null) {
          throw tmp$;
        }
        return !this.$this.isClosedForRead && this.$this.availableForRead >= this.local$atLeast;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.awaitSuspend_za3lpa$ = function(atLeast_0, continuation_0, suspended) {
  var instance = new Coroutine$awaitSuspend_za3lpa$(this, atLeast_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  ByteChannelSequentialBase.prototype.discard_za3lpa$ = function(n) {
  var tmp$;
  if ((tmp$ = this.closedCause) != null) {
    throw tmp$;
  }
  var $receiver = this.readable.discard_za3lpa$(n);
  this.afterRead();
  return $receiver;
};
  ByteChannelSequentialBase.prototype.request_za3lpa$$default = function(atLeast) {
  var tmp$, tmp$_0;
  if ((tmp$ = this.closedCause) != null) {
    throw tmp$;
  }
  this.completeReading_um9rnf$_0();
  var view = (tmp$_0 = this.readable.prepareReadHead_za3lpa$(atLeast)) == null || Kotlin.isType(tmp$_0, IoBuffer) ? tmp$_0 : throwCCE();
  if (view == null) {
    this.lastReadView_92ta1h$_0 = ChunkBuffer$Companion_getInstance().Empty;
    this.lastReadAvailable_1j890x$_0 = 0;
  } else {
    this.lastReadView_92ta1h$_0 = view;
    this.lastReadAvailable_1j890x$_0 = view.writePosition - view.readPosition | 0;
  }
  return view;
};
  function Coroutine$discard_s8cxhz$($this, max_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$max = max_0;
  }
  Coroutine$discard_s8cxhz$.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$discard_s8cxhz$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$discard_s8cxhz$.prototype.constructor = Coroutine$discard_s8cxhz$;
  Coroutine$discard_s8cxhz$.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var discarded = this.$this.readable.discard_s8cxhz$(this.local$max);
        if (equals(discarded, this.local$max) || this.$this.isClosedForRead) {
          return discarded;
        } else {
          this.state_0 = 2;
          this.result_0 = this.$this.discardSuspend_7c0j1e$_0(this.local$max, discarded, this);
          if (this.result_0 === COROUTINE_SUSPENDED) 
            return COROUTINE_SUSPENDED;
          continue;
        }
      case 1:
        throw this.exception_0;
      case 2:
        this.local$tmp$ = this.result_0;
        this.state_0 = 3;
        continue;
      case 3:
        return this.local$tmp$;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.discard_s8cxhz$ = function(max_0, continuation_0, suspended) {
  var instance = new Coroutine$discard_s8cxhz$(this, max_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$discardSuspend_7c0j1e$_0($this, max_0, discarded0_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$discarded = void 0;
    this.local$max = max_0;
    this.local$discarded0 = discarded0_0;
  }
  Coroutine$discardSuspend_7c0j1e$_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$discardSuspend_7c0j1e$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$discardSuspend_7c0j1e$_0.prototype.constructor = Coroutine$discardSuspend_7c0j1e$_0;
  Coroutine$discardSuspend_7c0j1e$_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.local$discarded = this.local$discarded0;
        this.state_0 = 2;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        this.state_0 = 3;
        this.result_0 = this.$this.await_za3lpa$(1, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 3:
        if (!this.result_0) {
          this.state_0 = 5;
          continue;
        } else {
          this.state_0 = 4;
          continue;
        }
      case 4:
        this.local$discarded = this.local$discarded.add(this.$this.readable.discard_s8cxhz$(this.local$max.subtract(this.local$discarded)));
        if (this.local$discarded.compareTo_11rb$(this.local$max) >= 0 || this.$this.isClosedForRead) {
          this.state_0 = 5;
          continue;
        }
        this.state_0 = 2;
        continue;
      case 5:
        return this.local$discarded;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.discardSuspend_7c0j1e$_0 = function(max_0, discarded0_0, continuation_0, suspended) {
  var instance = new Coroutine$discardSuspend_7c0j1e$_0(this, max_0, discarded0_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  ByteChannelSequentialBase.prototype.readSession_m70re0$ = function(consumer) {
  try {
    consumer(this);
  } finally   {
    this.completeReading_um9rnf$_0();
  }
};
  ByteChannelSequentialBase.prototype.startReadSession = function() {
  return this;
};
  ByteChannelSequentialBase.prototype.endReadSession = function() {
  this.completeReading_um9rnf$_0();
};
  function Coroutine$readSuspendableSession_kiqllg$($this, consumer_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.$this = $this;
    this.local$consumer = consumer_0;
  }
  Coroutine$readSuspendableSession_kiqllg$.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readSuspendableSession_kiqllg$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readSuspendableSession_kiqllg$.prototype.constructor = Coroutine$readSuspendableSession_kiqllg$;
  Coroutine$readSuspendableSession_kiqllg$.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.exceptionState_0 = 3;
        this.state_0 = 1;
        this.result_0 = this.local$consumer(this.$this, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        this.exceptionState_0 = 5;
        this.finallyPath_0 = [2];
        this.state_0 = 4;
        continue;
      case 2:
        return;
      case 3:
        this.finallyPath_0 = [5];
        this.state_0 = 4;
        continue;
      case 4:
        this.exceptionState_0 = 5;
        this.$this.completeReading_um9rnf$_0();
        this.state_0 = this.finallyPath_0.shift();
        continue;
      case 5:
        throw this.exception_0;
      default:
        this.state_0 = 5;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 5) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.readSuspendableSession_kiqllg$ = function(consumer_0, continuation_0, suspended) {
  var instance = new Coroutine$readSuspendableSession_kiqllg$(this, consumer_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$ByteChannelSequentialBase$readUTF8LineTo$lambda(this$ByteChannelSequentialBase_0, size_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ByteChannelSequentialBase = this$ByteChannelSequentialBase_0;
    this.local$size = size_0;
  }
  Coroutine$ByteChannelSequentialBase$readUTF8LineTo$lambda.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$ByteChannelSequentialBase$readUTF8LineTo$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ByteChannelSequentialBase$readUTF8LineTo$lambda.prototype.constructor = Coroutine$ByteChannelSequentialBase$readUTF8LineTo$lambda;
  Coroutine$ByteChannelSequentialBase$readUTF8LineTo$lambda.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.local$this$ByteChannelSequentialBase.afterRead();
        this.state_0 = 2;
        this.result_0 = this.local$this$ByteChannelSequentialBase.await_za3lpa$(this.local$size, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        return this.result_0 ? this.local$this$ByteChannelSequentialBase.readable : null;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function ByteChannelSequentialBase$readUTF8LineTo$lambda(this$ByteChannelSequentialBase_0) {
    return function(size_0, continuation_0, suspended) {
  var instance = new Coroutine$ByteChannelSequentialBase$readUTF8LineTo$lambda(this$ByteChannelSequentialBase_0, size_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  }
  ByteChannelSequentialBase.prototype.readUTF8LineTo_yhx0yw$ = function(out, limit, continuation) {
  if (this.isClosedForRead) 
    return false;
  return decodeUTF8LineLoopSuspend(out, limit, ByteChannelSequentialBase$readUTF8LineTo$lambda(this), continuation);
};
  function Coroutine$readUTF8Line_za3lpa$($this, limit_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$sb = void 0;
    this.local$limit = limit_0;
  }
  Coroutine$readUTF8Line_za3lpa$.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readUTF8Line_za3lpa$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readUTF8Line_za3lpa$.prototype.constructor = Coroutine$readUTF8Line_za3lpa$;
  Coroutine$readUTF8Line_za3lpa$.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.local$sb = StringBuilder_init();
        this.state_0 = 2;
        this.result_0 = this.$this.readUTF8LineTo_yhx0yw$(this.local$sb, this.local$limit, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        if (!this.result_0) {
          return null;
        } else {
          this.state_0 = 3;
          continue;
        }
      case 3:
        return this.local$sb.toString();
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.readUTF8Line_za3lpa$ = function(limit_0, continuation_0, suspended) {
  var instance = new Coroutine$readUTF8Line_za3lpa$(this, limit_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  ByteChannelSequentialBase.prototype.cancel_dbl4no$ = function(cause) {
  if (this.closedCause != null || this.closed) 
    return false;
  return this.close_dbl4no$(cause != null ? cause : CancellationException_init('Channel cancelled'));
};
  ByteChannelSequentialBase.prototype.close_dbl4no$ = function(cause) {
  if (this.closed || this.closedCause != null) 
    return false;
  this.closedCause = cause;
  this.closed = true;
  if (cause != null) {
    this.readable.release();
    this.writable.release();
  } else {
    this.flush();
  }
  this.atLeastNBytesAvailableForRead_mdv8hx$_0.signal();
  this.atLeastNBytesAvailableForWrite_dspbt2$_0.signal();
  return true;
};
  ByteChannelSequentialBase.prototype.transferTo_pxvbjg$ = function(dst, limit) {
  var tmp$;
  var size = this.readable.remaining;
  if (size.compareTo_11rb$(limit) <= 0) {
    dst.writable.writePacket_3uq2w4$(this.readable);
    dst.afterWrite();
    this.afterRead();
    tmp$ = size;
  } else {
    tmp$ = L0;
  }
  return tmp$;
};
  function Coroutine$readNSlow_2lkm5r$_0($this, n_0, block_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$n = n_0;
    this.local$block = block_0;
  }
  Coroutine$readNSlow_2lkm5r$_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readNSlow_2lkm5r$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readNSlow_2lkm5r$_0.prototype.constructor = Coroutine$readNSlow_2lkm5r$_0;
  Coroutine$readNSlow_2lkm5r$_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        this.state_0 = 3;
        this.result_0 = this.$this.awaitSuspend_za3lpa$(this.local$n, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 3:
        if (this.$this.readable.hasBytes_za3lpa$(this.local$n)) 
          this.local$block();
        this.$this.checkClosed_ldvyyk$_0(this.local$n);
        this.state_0 = 2;
        continue;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.readNSlow_2lkm5r$_0 = function(n_0, block_0, continuation_0, suspended) {
  var instance = new Coroutine$readNSlow_2lkm5r$_0(this, n_0, block_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$writeAvailableSuspend_5fukw0$_0($this, src_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$src = src_0;
  }
  Coroutine$writeAvailableSuspend_5fukw0$_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$writeAvailableSuspend_5fukw0$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeAvailableSuspend_5fukw0$_0.prototype.constructor = Coroutine$writeAvailableSuspend_5fukw0$_0;
  Coroutine$writeAvailableSuspend_5fukw0$_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = this.$this.awaitFreeSpace(this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        this.state_0 = 3;
        this.result_0 = this.$this.writeAvailable_99qa0s$(this.local$src, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 3:
        return this.result_0;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.writeAvailableSuspend_5fukw0$_0 = function(src_0, continuation_0, suspended) {
  var instance = new Coroutine$writeAvailableSuspend_5fukw0$_0(this, src_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$writeAvailableSuspend_1zn44g$_0($this, src_0, offset_0, length_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$src = src_0;
    this.local$offset = offset_0;
    this.local$length = length_0;
  }
  Coroutine$writeAvailableSuspend_1zn44g$_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$writeAvailableSuspend_1zn44g$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeAvailableSuspend_1zn44g$_0.prototype.constructor = Coroutine$writeAvailableSuspend_1zn44g$_0;
  Coroutine$writeAvailableSuspend_1zn44g$_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = this.$this.awaitFreeSpace(this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        this.state_0 = 3;
        this.result_0 = this.$this.writeAvailable_mj6st8$(this.local$src, this.local$offset, this.local$length, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 3:
        return this.result_0;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.writeAvailableSuspend_1zn44g$_0 = function(src_0, offset_0, length_0, continuation_0, suspended) {
  var instance = new Coroutine$writeAvailableSuspend_1zn44g$_0(this, src_0, offset_0, length_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  ByteChannelSequentialBase.prototype.afterWrite = function() {
  var tmp$;
  if (this.closed) {
    this.writable.release();
    throw (tmp$ = this.closedCause) != null ? tmp$ : new ClosedWriteChannelException('Channel is already closed');
  }
  if (this.autoFlush || this.availableForWrite === 0) {
    this.flush();
  }
};
  function ByteChannelSequentialBase$awaitFreeSpace$lambda(this$ByteChannelSequentialBase) {
    return function() {
  this$ByteChannelSequentialBase.flush();
  return Unit;
};
  }
  function Coroutine$awaitFreeSpace($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$awaitFreeSpace.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$awaitFreeSpace.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$awaitFreeSpace.prototype.constructor = Coroutine$awaitFreeSpace;
  Coroutine$awaitFreeSpace.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.$this.afterWrite();
        this.state_0 = 2;
        this.result_0 = this.$this.notFull_8be2vx$.await_o14v8n$(ByteChannelSequentialBase$awaitFreeSpace$lambda(this.$this), this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        return;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.awaitFreeSpace = function(continuation_0, suspended) {
  var instance = new Coroutine$awaitFreeSpace(this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$ByteChannelSequentialBase$peekTo$lambda(closure$min_0, closure$offset_0, closure$max_0, closure$bytesCopied_0, closure$destination_0, closure$destinationOffset_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$min = closure$min_0;
    this.local$closure$offset = closure$offset_0;
    this.local$closure$max = closure$max_0;
    this.local$closure$bytesCopied = closure$bytesCopied_0;
    this.local$closure$destination = closure$destination_0;
    this.local$closure$destinationOffset = closure$destinationOffset_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ByteChannelSequentialBase$peekTo$lambda.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$ByteChannelSequentialBase$peekTo$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ByteChannelSequentialBase$peekTo$lambda.prototype.constructor = Coroutine$ByteChannelSequentialBase$peekTo$lambda;
  Coroutine$ByteChannelSequentialBase$peekTo$lambda.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var tmp$;
        var desiredSize = coerceAtMost(this.local$closure$min.add(this.local$closure$offset), L4088).toInt();
        this.state_0 = 2;
        this.result_0 = this.local$$receiver.await_za3lpa$(desiredSize, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        var buffer = (tmp$ = this.local$$receiver.request_za3lpa$(1)) != null ? tmp$ : IoBuffer$Companion_getInstance().Empty;
        if ((buffer.writePosition - buffer.readPosition | 0) > this.local$closure$offset.toNumber()) {
          discardExact_0(buffer, this.local$closure$offset);
          var tmp$_0 = this.local$closure$bytesCopied;
          var a = Kotlin.Long.fromInt(buffer.writePosition - buffer.readPosition | 0);
          var b = this.local$closure$max;
          tmp$_0.v = a.compareTo_11rb$(b) <= 0 ? a : b;
          return buffer.memory.copyTo_q2ka7j$(this.local$closure$destination, Kotlin.Long.fromInt(buffer.readPosition), this.local$closure$bytesCopied.v, this.local$closure$destinationOffset) , Unit;
        } else {
          this.state_0 = 3;
          continue;
        }
      case 3:
        return Unit;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function ByteChannelSequentialBase$peekTo$lambda(closure$min_0, closure$offset_0, closure$max_0, closure$bytesCopied_0, closure$destination_0, closure$destinationOffset_0) {
    return function($receiver_0, continuation_0, suspended) {
  var instance = new Coroutine$ByteChannelSequentialBase$peekTo$lambda(closure$min_0, closure$offset_0, closure$max_0, closure$bytesCopied_0, closure$destination_0, closure$destinationOffset_0, $receiver_0, this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  }
  function Coroutine$peekTo_afjyek$$default($this, destination_0, destinationOffset_0, offset_0, min_0, max_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$bytesCopied = void 0;
    this.local$destination = destination_0;
    this.local$destinationOffset = destinationOffset_0;
    this.local$offset = offset_0;
    this.local$min = min_0;
    this.local$max = max_0;
  }
  Coroutine$peekTo_afjyek$$default.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$peekTo_afjyek$$default.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$peekTo_afjyek$$default.prototype.constructor = Coroutine$peekTo_afjyek$$default;
  Coroutine$peekTo_afjyek$$default.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.local$bytesCopied = {
  v: L0};
        this.state_0 = 2;
        this.result_0 = this.$this.readSuspendableSession_kiqllg$(ByteChannelSequentialBase$peekTo$lambda(this.local$min, this.local$offset, this.local$max, this.local$bytesCopied, this.local$destination, this.local$destinationOffset), this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        return this.local$bytesCopied.v;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelSequentialBase.prototype.peekTo_afjyek$$default = function(destination_0, destinationOffset_0, offset_0, min_0, max_0, continuation_0, suspended) {
  var instance = new Coroutine$peekTo_afjyek$$default(this, destination_0, destinationOffset_0, offset_0, min_0, max_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function ByteChannelSequentialBase$notFull$lambda(this$ByteChannelSequentialBase) {
    return function() {
  var $this = this$ByteChannelSequentialBase;
  return ($this.readable.remaining.toInt() + $this.writable.size | 0) <= L4088.toNumber();
};
  }
  function ByteChannelSequentialBase$atLeastNBytesAvailableForWrite$lambda(this$ByteChannelSequentialBase) {
    return function() {
  return this$ByteChannelSequentialBase.availableForWrite >= this$ByteChannelSequentialBase.waitingForSize_acioxj$_0 || this$ByteChannelSequentialBase.closed;
};
  }
  function ByteChannelSequentialBase$atLeastNBytesAvailableForRead$lambda(this$ByteChannelSequentialBase) {
    return function() {
  return this$ByteChannelSequentialBase.availableForRead >= this$ByteChannelSequentialBase.waitingForRead_ad5k18$_0 || this$ByteChannelSequentialBase.closed;
};
  }
  ByteChannelSequentialBase.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'ByteChannelSequentialBase', 
  interfaces: [HasWriteSession, HasReadSession, SuspendableReadSession, ByteChannel, ByteWriteChannel, ByteReadChannel_2]};
  function ByteChannelSequentialBase_init(initial, autoFlush, $this) {
    $this = $this || Object.create(ByteChannelSequentialBase.prototype);
    ByteChannelSequentialBase.call($this, initial, autoFlush, ChunkBuffer$Companion_getInstance().Pool);
    return $this;
  }
  function readPacket($receiver, size, continuation) {
    return $receiver.readPacket_vux9f0$(size, 0, continuation);
  }
  function readRemaining($receiver, limit, continuation) {
    return $receiver.readRemaining_yhmem3$(limit, 0, continuation);
  }
  function readRemaining_0($receiver, continuation) {
    return $receiver.readRemaining_yhmem3$(Long$Companion$MAX_VALUE, 0, continuation);
  }
  function readFully($receiver, dst, continuation) {
    return $receiver.readFully_qr0era$(dst, dst.limit - dst.writePosition | 0, continuation);
  }
  function readUTF8LineTo($receiver, out, continuation) {
    return $receiver.readUTF8LineTo_yhx0yw$(out, 2147483647, continuation);
  }
  function readUTF8Line($receiver, continuation) {
    return $receiver.readUTF8Line_za3lpa$(2147483647, continuation);
  }
  function cancel($receiver) {
    return $receiver.cancel_dbl4no$(null);
  }
  function discard($receiver, continuation) {
    return $receiver.discard_s8cxhz$(Long$Companion$MAX_VALUE, continuation);
  }
  function Coroutine$discardExact($receiver_0, n_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$n = n_0;
  }
  Coroutine$discardExact.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$discardExact.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$discardExact.prototype.constructor = Coroutine$discardExact;
  Coroutine$discardExact.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = this.local$$receiver.discard_s8cxhz$(this.local$n, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        if (!equals(this.result_0, this.local$n)) 
          throw new EOFException('Unable to discard ' + this.local$n.toString() + ' bytes');
        return;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function discardExact($receiver_0, n_0, continuation_0, suspended) {
    var instance = new Coroutine$discardExact($receiver_0, n_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.discardExact_b56lbm$', wrapFunction(function() {
  var equals = Kotlin.equals;
  var EOFException_init = _.io.ktor.utils.io.errors.EOFException;
  return function($receiver, n, continuation) {
  Kotlin.suspendCall($receiver.discard_s8cxhz$(n, Kotlin.coroutineReceiver()));
  if (!equals(Kotlin.coroutineResult(Kotlin.coroutineReceiver()), n)) 
    throw new EOFException_init('Unable to discard ' + n.toString() + ' bytes');
};
}));
  function readAvailable($receiver, dst, continuation) {
    return $receiver.readAvailable_mj6st8$(dst, 0, dst.length, continuation);
  }
  function readFully_0($receiver, dst, continuation) {
    return $receiver.readFully_mj6st8$(dst, 0, dst.length, continuation);
  }
  function Coroutine$copyAndClose($receiver_0, dst_0, limit_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$dst = dst_0;
    this.local$limit = limit_0;
  }
  Coroutine$copyAndClose.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$copyAndClose.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$copyAndClose.prototype.constructor = Coroutine$copyAndClose;
  Coroutine$copyAndClose.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        if (this.local$limit === void 0) 
          this.local$limit = Long$Companion$MAX_VALUE;
        this.state_0 = 2;
        this.result_0 = copyTo_1(this.local$$receiver, this.local$dst, this.local$limit, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        var count = this.result_0;
        close(this.local$dst);
        return count;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function copyAndClose($receiver_0, dst_0, limit_0, continuation_0, suspended) {
    var instance = new Coroutine$copyAndClose($receiver_0, dst_0, limit_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function writeAvailable($receiver, src, continuation) {
    return $receiver.writeAvailable_mj6st8$(src, 0, src.length, continuation);
  }
  function writeFully($receiver, src, continuation) {
    return $receiver.writeFully_mj6st8$(src, 0, src.length, continuation);
  }
  function writeShort($receiver, s, continuation) {
    return $receiver.writeShort_mq22fl$(toShort(s & 65535), continuation);
  }
  function writeShort_0($receiver, s, byteOrder, continuation) {
    return writeShort_1($receiver, toShort(s & 65535), byteOrder, continuation);
  }
  function writeByte($receiver, b, continuation) {
    return $receiver.writeByte_s8j3t7$(toByte(b & 255), continuation);
  }
  function writeInt($receiver, i, continuation) {
    return $receiver.writeInt_za3lpa$(i.toInt(), continuation);
  }
  function writeInt_0($receiver, i, byteOrder, continuation) {
    return writeInt_1($receiver, i.toInt(), byteOrder, continuation);
  }
  function close($receiver) {
    return $receiver.close_dbl4no$(null);
  }
  function writeStringUtf8($receiver, s, continuation) {
    var buildPacket$result;
    var builder = BytePacketBuilder_0(0);
    try {
      builder.writeStringUtf8_6bul2c$(s);
      buildPacket$result = builder.build();
    }    catch (t) {
  if (Kotlin.isType(t, Throwable)) {
    builder.release();
    throw t;
  } else 
    throw t;
}
    var packet = buildPacket$result;
    return $receiver.writePacket_3uq2w4$(packet, continuation);
  }
  function writeStringUtf8_0($receiver, s, continuation) {
    var buildPacket$result;
    var builder = BytePacketBuilder_0(0);
    try {
      builder.writeStringUtf8_61zpoe$(s);
      buildPacket$result = builder.build();
    }    catch (t) {
  if (Kotlin.isType(t, Throwable)) {
    builder.release();
    throw t;
  } else 
    throw t;
}
    var packet = buildPacket$result;
    return $receiver.writePacket_3uq2w4$(packet, continuation);
  }
  function writeBoolean($receiver, b, continuation) {
    return writeByte($receiver, b ? 1 : 0, continuation);
  }
  function writeChar($receiver, ch, continuation) {
    return writeShort($receiver, ch | 0, continuation);
  }
  function writePacket($receiver, headerSizeHint, builder, continuation) {
    if (headerSizeHint === void 0) 
      headerSizeHint = 0;
    var buildPacket$result_0;
    var builder_1 = BytePacketBuilder_0(headerSizeHint);
    try {
      builder(builder_1);
      buildPacket$result_0 = builder_1.build();
    }    catch (t_0) {
  if (Kotlin.isType(t_0, Throwable)) {
    builder_1.release();
    throw t_0;
  } else 
    throw t_0;
}
    return $receiver.writePacket_3uq2w4$(buildPacket$result_0, continuation);
  }
  defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.writePacket_c7ucec$', wrapFunction(function() {
  var BytePacketBuilder = _.io.ktor.utils.io.core.BytePacketBuilder_za3lpa$;
  var Throwable = Error;
  return function($receiver, headerSizeHint, builder, continuation) {
  if (headerSizeHint === void 0) 
    headerSizeHint = 0;
  var buildPacket$result_0;
  var builder_1 = BytePacketBuilder(headerSizeHint);
  try {
    builder(builder_1);
    buildPacket$result_0 = builder_1.build();
  }  catch (t_0) {
  if (Kotlin.isType(t_0, Throwable)) {
    builder_1.release();
    throw t_0;
  } else 
    throw t_0;
}
  Kotlin.suspendCall($receiver.writePacket_3uq2w4$(buildPacket$result_0, Kotlin.coroutineReceiver()));
  return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
};
}));
  function Coroutine$writePacketSuspend($receiver_0, builder_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.local$buildPacket$result = void 0;
    this.local$builder = void 0;
    this.local$$receiver = $receiver_0;
    this.local$builder_0 = builder_0;
  }
  Coroutine$writePacketSuspend.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$writePacketSuspend.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writePacketSuspend.prototype.constructor = Coroutine$writePacketSuspend;
  Coroutine$writePacketSuspend.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.local$builder = BytePacketBuilder_0(0);
        this.exceptionState_0 = 2;
        this.state_0 = 1;
        this.result_0 = this.local$builder_0(this.local$builder, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        this.local$buildPacket$result = this.local$builder.build();
        this.exceptionState_0 = 5;
        this.state_0 = 3;
        continue;
      case 2:
        this.exceptionState_0 = 5;
        var t = this.exception_0;
        if (Kotlin.isType(t, Throwable)) {
          this.local$builder.release();
          throw t;
        } else 
          throw t;
      case 3:
        this.state_0 = 4;
        this.result_0 = this.local$$receiver.writePacket_3uq2w4$(this.local$buildPacket$result, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 4:
        return this.result_0;
      case 5:
        throw this.exception_0;
      default:
        this.state_0 = 5;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 5) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function writePacketSuspend($receiver_0, builder_0, continuation_0, suspended) {
    var instance = new Coroutine$writePacketSuspend($receiver_0, builder_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function ClosedWriteChannelException(message) {
    CancellationException_init(message, this);
    this.name = 'ClosedWriteChannelException';
  }
  ClosedWriteChannelException.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'ClosedWriteChannelException', 
  interfaces: [CancellationException]};
  function Coroutine$readShort_0($receiver_0, byteOrder_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$byteOrder = byteOrder_0;
  }
  Coroutine$readShort_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readShort_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readShort_0.prototype.constructor = Coroutine$readShort_0;
  Coroutine$readShort_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = this.local$$receiver.readShort(this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        var $receiver_1 = this.result_0;
        var tmp$_0;
        if (equals(this.local$byteOrder, ByteOrder.BIG_ENDIAN)) 
          tmp$_0 = $receiver_1;
        else {
          tmp$_0 = reverseByteOrder_2($receiver_1);
        }
        return tmp$_0;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function readShort($receiver_0, byteOrder_0, continuation_0, suspended) {
    var instance = new Coroutine$readShort_0($receiver_0, byteOrder_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.readShort_e2pdtf$', wrapFunction(function() {
  var reverseByteOrder = _.io.ktor.utils.io.bits.reverseByteOrder_5vcgdc$;
  var ByteOrder = _.io.ktor.utils.io.core.ByteOrder;
  var equals = Kotlin.equals;
  return function($receiver_0, byteOrder, continuation) {
  Kotlin.suspendCall($receiver_0.readShort(Kotlin.coroutineReceiver()));
  var $receiver_1 = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
  var tmp$_0;
  if (equals(byteOrder, ByteOrder.BIG_ENDIAN)) 
    tmp$_0 = $receiver_1;
  else {
    tmp$_0 = reverseByteOrder($receiver_1);
  }
  return tmp$_0;
};
}));
  function Coroutine$readInt_0($receiver_0, byteOrder_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$byteOrder = byteOrder_0;
  }
  Coroutine$readInt_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readInt_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readInt_0.prototype.constructor = Coroutine$readInt_0;
  Coroutine$readInt_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = this.local$$receiver.readInt(this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        var $receiver_1 = this.result_0;
        var tmp$_0;
        if (equals(this.local$byteOrder, ByteOrder.BIG_ENDIAN)) 
          tmp$_0 = $receiver_1;
        else {
          tmp$_0 = reverseByteOrder_3($receiver_1);
        }
        return tmp$_0;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function readInt($receiver_0, byteOrder_0, continuation_0, suspended) {
    var instance = new Coroutine$readInt_0($receiver_0, byteOrder_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.readInt_e2pdtf$', wrapFunction(function() {
  var reverseByteOrder = _.io.ktor.utils.io.bits.reverseByteOrder_s8ev3n$;
  var ByteOrder = _.io.ktor.utils.io.core.ByteOrder;
  var equals = Kotlin.equals;
  return function($receiver_0, byteOrder, continuation) {
  Kotlin.suspendCall($receiver_0.readInt(Kotlin.coroutineReceiver()));
  var $receiver_1 = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
  var tmp$_0;
  if (equals(byteOrder, ByteOrder.BIG_ENDIAN)) 
    tmp$_0 = $receiver_1;
  else {
    tmp$_0 = reverseByteOrder($receiver_1);
  }
  return tmp$_0;
};
}));
  function Coroutine$readLong_0($receiver_0, byteOrder_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$byteOrder = byteOrder_0;
  }
  Coroutine$readLong_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readLong_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readLong_0.prototype.constructor = Coroutine$readLong_0;
  Coroutine$readLong_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = this.local$$receiver.readLong(this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        var $receiver_1 = this.result_0;
        var tmp$_0;
        if (equals(this.local$byteOrder, ByteOrder.BIG_ENDIAN)) 
          tmp$_0 = $receiver_1;
        else {
          tmp$_0 = reverseByteOrder_4($receiver_1);
        }
        return tmp$_0;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function readLong($receiver_0, byteOrder_0, continuation_0, suspended) {
    var instance = new Coroutine$readLong_0($receiver_0, byteOrder_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.readLong_e2pdtf$', wrapFunction(function() {
  var reverseByteOrder = _.io.ktor.utils.io.bits.reverseByteOrder_mts6qi$;
  var ByteOrder = _.io.ktor.utils.io.core.ByteOrder;
  var equals = Kotlin.equals;
  return function($receiver_0, byteOrder, continuation) {
  Kotlin.suspendCall($receiver_0.readLong(Kotlin.coroutineReceiver()));
  var $receiver_1 = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
  var tmp$_0;
  if (equals(byteOrder, ByteOrder.BIG_ENDIAN)) 
    tmp$_0 = $receiver_1;
  else {
    tmp$_0 = reverseByteOrder($receiver_1);
  }
  return tmp$_0;
};
}));
  function Coroutine$readFloat_0($receiver_0, byteOrder_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$byteOrder = byteOrder_0;
  }
  Coroutine$readFloat_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readFloat_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readFloat_0.prototype.constructor = Coroutine$readFloat_0;
  Coroutine$readFloat_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = this.local$$receiver.readFloat(this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        var $receiver_1 = this.result_0;
        var tmp$_0;
        if (equals(this.local$byteOrder, ByteOrder.BIG_ENDIAN)) 
          tmp$_0 = $receiver_1;
        else {
          tmp$_0 = reverseByteOrder_5($receiver_1);
        }
        return tmp$_0;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function readFloat($receiver_0, byteOrder_0, continuation_0, suspended) {
    var instance = new Coroutine$readFloat_0($receiver_0, byteOrder_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.readFloat_e2pdtf$', wrapFunction(function() {
  var reverseByteOrder = _.io.ktor.utils.io.bits.reverseByteOrder_81szk$;
  var ByteOrder = _.io.ktor.utils.io.core.ByteOrder;
  var equals = Kotlin.equals;
  return function($receiver_0, byteOrder, continuation) {
  Kotlin.suspendCall($receiver_0.readFloat(Kotlin.coroutineReceiver()));
  var $receiver_1 = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
  var tmp$_0;
  if (equals(byteOrder, ByteOrder.BIG_ENDIAN)) 
    tmp$_0 = $receiver_1;
  else {
    tmp$_0 = reverseByteOrder($receiver_1);
  }
  return tmp$_0;
};
}));
  function Coroutine$readDouble_0($receiver_0, byteOrder_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$byteOrder = byteOrder_0;
  }
  Coroutine$readDouble_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readDouble_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readDouble_0.prototype.constructor = Coroutine$readDouble_0;
  Coroutine$readDouble_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = this.local$$receiver.readDouble(this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        var $receiver_1 = this.result_0;
        var tmp$_0;
        if (equals(this.local$byteOrder, ByteOrder.BIG_ENDIAN)) 
          tmp$_0 = $receiver_1;
        else {
          tmp$_0 = reverseByteOrder_6($receiver_1);
        }
        return tmp$_0;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function readDouble($receiver_0, byteOrder_0, continuation_0, suspended) {
    var instance = new Coroutine$readDouble_0($receiver_0, byteOrder_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.readDouble_e2pdtf$', wrapFunction(function() {
  var reverseByteOrder = _.io.ktor.utils.io.bits.reverseByteOrder_yrwdxr$;
  var ByteOrder = _.io.ktor.utils.io.core.ByteOrder;
  var equals = Kotlin.equals;
  return function($receiver_0, byteOrder, continuation) {
  Kotlin.suspendCall($receiver_0.readDouble(Kotlin.coroutineReceiver()));
  var $receiver_1 = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
  var tmp$_0;
  if (equals(byteOrder, ByteOrder.BIG_ENDIAN)) 
    tmp$_0 = $receiver_1;
  else {
    tmp$_0 = reverseByteOrder($receiver_1);
  }
  return tmp$_0;
};
}));
  function Coroutine$readShortLittleEndian($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$readShortLittleEndian.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readShortLittleEndian.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readShortLittleEndian.prototype.constructor = Coroutine$readShortLittleEndian;
  Coroutine$readShortLittleEndian.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = this.local$$receiver.readShort(this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        var value_0 = this.result_0;
        var tmp$_0;
        if (equals(this.local$$receiver.readByteOrder, ByteOrder.LITTLE_ENDIAN)) 
          tmp$_0 = value_0;
        else {
          tmp$_0 = reverseByteOrder_2(value_0);
        }
        return tmp$_0;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function readShortLittleEndian($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$readShortLittleEndian($receiver_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.readShortLittleEndian_3dmw3p$', wrapFunction(function() {
  var reverseByteOrder = _.io.ktor.utils.io.bits.reverseByteOrder_5vcgdc$;
  var ByteOrder = _.io.ktor.utils.io.core.ByteOrder;
  var equals = Kotlin.equals;
  return function($receiver, continuation) {
  Kotlin.suspendCall($receiver.readShort(Kotlin.coroutineReceiver()));
  var value_0 = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
  var tmp$_0;
  if (equals($receiver.readByteOrder, ByteOrder.LITTLE_ENDIAN)) 
    tmp$_0 = value_0;
  else {
    tmp$_0 = reverseByteOrder(value_0);
  }
  return tmp$_0;
};
}));
  function Coroutine$readIntLittleEndian($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$readIntLittleEndian.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readIntLittleEndian.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readIntLittleEndian.prototype.constructor = Coroutine$readIntLittleEndian;
  Coroutine$readIntLittleEndian.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = this.local$$receiver.readInt(this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        var value_0 = this.result_0;
        var tmp$_0;
        if (equals(this.local$$receiver.readByteOrder, ByteOrder.LITTLE_ENDIAN)) 
          tmp$_0 = value_0;
        else {
          tmp$_0 = reverseByteOrder_3(value_0);
        }
        return tmp$_0;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function readIntLittleEndian($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$readIntLittleEndian($receiver_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.readIntLittleEndian_3dmw3p$', wrapFunction(function() {
  var reverseByteOrder = _.io.ktor.utils.io.bits.reverseByteOrder_s8ev3n$;
  var ByteOrder = _.io.ktor.utils.io.core.ByteOrder;
  var equals = Kotlin.equals;
  return function($receiver, continuation) {
  Kotlin.suspendCall($receiver.readInt(Kotlin.coroutineReceiver()));
  var value_0 = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
  var tmp$_0;
  if (equals($receiver.readByteOrder, ByteOrder.LITTLE_ENDIAN)) 
    tmp$_0 = value_0;
  else {
    tmp$_0 = reverseByteOrder(value_0);
  }
  return tmp$_0;
};
}));
  function Coroutine$readLongLittleEndian($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$readLongLittleEndian.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readLongLittleEndian.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readLongLittleEndian.prototype.constructor = Coroutine$readLongLittleEndian;
  Coroutine$readLongLittleEndian.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = this.local$$receiver.readLong(this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        var value_0 = this.result_0;
        var tmp$_0;
        if (equals(this.local$$receiver.readByteOrder, ByteOrder.LITTLE_ENDIAN)) 
          tmp$_0 = value_0;
        else {
          tmp$_0 = reverseByteOrder_4(value_0);
        }
        return tmp$_0;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function readLongLittleEndian($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$readLongLittleEndian($receiver_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.readLongLittleEndian_3dmw3p$', wrapFunction(function() {
  var reverseByteOrder = _.io.ktor.utils.io.bits.reverseByteOrder_mts6qi$;
  var ByteOrder = _.io.ktor.utils.io.core.ByteOrder;
  var equals = Kotlin.equals;
  return function($receiver, continuation) {
  Kotlin.suspendCall($receiver.readLong(Kotlin.coroutineReceiver()));
  var value_0 = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
  var tmp$_0;
  if (equals($receiver.readByteOrder, ByteOrder.LITTLE_ENDIAN)) 
    tmp$_0 = value_0;
  else {
    tmp$_0 = reverseByteOrder(value_0);
  }
  return tmp$_0;
};
}));
  function Coroutine$readFloatLittleEndian($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$readFloatLittleEndian.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readFloatLittleEndian.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readFloatLittleEndian.prototype.constructor = Coroutine$readFloatLittleEndian;
  Coroutine$readFloatLittleEndian.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = this.local$$receiver.readFloat(this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        var value_0 = this.result_0;
        var tmp$_0;
        if (equals(this.local$$receiver.readByteOrder, ByteOrder.LITTLE_ENDIAN)) 
          tmp$_0 = value_0;
        else {
          tmp$_0 = reverseByteOrder_5(value_0);
        }
        return tmp$_0;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function readFloatLittleEndian($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$readFloatLittleEndian($receiver_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.readFloatLittleEndian_3dmw3p$', wrapFunction(function() {
  var reverseByteOrder = _.io.ktor.utils.io.bits.reverseByteOrder_81szk$;
  var ByteOrder = _.io.ktor.utils.io.core.ByteOrder;
  var equals = Kotlin.equals;
  return function($receiver, continuation) {
  Kotlin.suspendCall($receiver.readFloat(Kotlin.coroutineReceiver()));
  var value_0 = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
  var tmp$_0;
  if (equals($receiver.readByteOrder, ByteOrder.LITTLE_ENDIAN)) 
    tmp$_0 = value_0;
  else {
    tmp$_0 = reverseByteOrder(value_0);
  }
  return tmp$_0;
};
}));
  function Coroutine$readDoubleLittleEndian($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$readDoubleLittleEndian.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readDoubleLittleEndian.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readDoubleLittleEndian.prototype.constructor = Coroutine$readDoubleLittleEndian;
  Coroutine$readDoubleLittleEndian.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = this.local$$receiver.readDouble(this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        var value_0 = this.result_0;
        var tmp$_0;
        if (equals(this.local$$receiver.readByteOrder, ByteOrder.LITTLE_ENDIAN)) 
          tmp$_0 = value_0;
        else {
          tmp$_0 = reverseByteOrder_6(value_0);
        }
        return tmp$_0;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function readDoubleLittleEndian($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$readDoubleLittleEndian($receiver_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.readDoubleLittleEndian_3dmw3p$', wrapFunction(function() {
  var reverseByteOrder = _.io.ktor.utils.io.bits.reverseByteOrder_yrwdxr$;
  var ByteOrder = _.io.ktor.utils.io.core.ByteOrder;
  var equals = Kotlin.equals;
  return function($receiver, continuation) {
  Kotlin.suspendCall($receiver.readDouble(Kotlin.coroutineReceiver()));
  var value_0 = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
  var tmp$_0;
  if (equals($receiver.readByteOrder, ByteOrder.LITTLE_ENDIAN)) 
    tmp$_0 = value_0;
  else {
    tmp$_0 = reverseByteOrder(value_0);
  }
  return tmp$_0;
};
}));
  function Coroutine$writeShort($receiver_0, value_0, byteOrder_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$value = value_0;
    this.local$byteOrder = byteOrder_0;
  }
  Coroutine$writeShort.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$writeShort.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeShort.prototype.constructor = Coroutine$writeShort;
  Coroutine$writeShort.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var tmp$;
        if (equals(this.local$byteOrder, ByteOrder.BIG_ENDIAN)) 
          tmp$ = this.local$value;
        else {
          tmp$ = reverseByteOrder_2(this.local$value);
        }
        this.state_0 = 2;
        this.result_0 = this.local$$receiver.writeShort_mq22fl$(tmp$, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        return;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function writeShort_1($receiver_0, value_0, byteOrder_0, continuation_0, suspended) {
    var instance = new Coroutine$writeShort($receiver_0, value_0, byteOrder_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function Coroutine$writeInt($receiver_0, value_0, byteOrder_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$value = value_0;
    this.local$byteOrder = byteOrder_0;
  }
  Coroutine$writeInt.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$writeInt.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeInt.prototype.constructor = Coroutine$writeInt;
  Coroutine$writeInt.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var tmp$;
        if (equals(this.local$byteOrder, ByteOrder.BIG_ENDIAN)) 
          tmp$ = this.local$value;
        else {
          tmp$ = reverseByteOrder_3(this.local$value);
        }
        this.state_0 = 2;
        this.result_0 = this.local$$receiver.writeInt_za3lpa$(tmp$, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        return;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function writeInt_1($receiver_0, value_0, byteOrder_0, continuation_0, suspended) {
    var instance = new Coroutine$writeInt($receiver_0, value_0, byteOrder_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function Coroutine$writeLong($receiver_0, value_0, byteOrder_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$value = value_0;
    this.local$byteOrder = byteOrder_0;
  }
  Coroutine$writeLong.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$writeLong.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeLong.prototype.constructor = Coroutine$writeLong;
  Coroutine$writeLong.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var tmp$;
        if (equals(this.local$byteOrder, ByteOrder.BIG_ENDIAN)) 
          tmp$ = this.local$value;
        else {
          tmp$ = reverseByteOrder_4(this.local$value);
        }
        this.state_0 = 2;
        this.result_0 = this.local$$receiver.writeLong_s8cxhz$(tmp$, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        return;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function writeLong($receiver_0, value_0, byteOrder_0, continuation_0, suspended) {
    var instance = new Coroutine$writeLong($receiver_0, value_0, byteOrder_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function Coroutine$writeFloat($receiver_0, value_0, byteOrder_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$value = value_0;
    this.local$byteOrder = byteOrder_0;
  }
  Coroutine$writeFloat.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$writeFloat.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeFloat.prototype.constructor = Coroutine$writeFloat;
  Coroutine$writeFloat.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var tmp$;
        if (equals(this.local$byteOrder, ByteOrder.BIG_ENDIAN)) 
          tmp$ = this.local$value;
        else {
          tmp$ = reverseByteOrder_5(this.local$value);
        }
        this.state_0 = 2;
        this.result_0 = this.local$$receiver.writeFloat_mx4ult$(tmp$, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        return;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function writeFloat($receiver_0, value_0, byteOrder_0, continuation_0, suspended) {
    var instance = new Coroutine$writeFloat($receiver_0, value_0, byteOrder_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function Coroutine$writeDouble($receiver_0, value_0, byteOrder_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$value = value_0;
    this.local$byteOrder = byteOrder_0;
  }
  Coroutine$writeDouble.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$writeDouble.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeDouble.prototype.constructor = Coroutine$writeDouble;
  Coroutine$writeDouble.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var tmp$;
        if (equals(this.local$byteOrder, ByteOrder.BIG_ENDIAN)) 
          tmp$ = this.local$value;
        else {
          tmp$ = reverseByteOrder_6(this.local$value);
        }
        this.state_0 = 2;
        this.result_0 = this.local$$receiver.writeDouble_14dthe$(tmp$, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        return;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function writeDouble($receiver_0, value_0, byteOrder_0, continuation_0, suspended) {
    var instance = new Coroutine$writeDouble($receiver_0, value_0, byteOrder_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function Coroutine$writeShortLittleEndian($receiver_0, value_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$value = value_0;
  }
  Coroutine$writeShortLittleEndian.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$writeShortLittleEndian.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeShortLittleEndian.prototype.constructor = Coroutine$writeShortLittleEndian;
  Coroutine$writeShortLittleEndian.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var tmp$;
        if (equals(this.local$$receiver.writeByteOrder, ByteOrder$LITTLE_ENDIAN_getInstance())) 
          tmp$ = this.local$value;
        else {
          tmp$ = reverseByteOrder_2(this.local$value);
        }
        this.state_0 = 2;
        this.result_0 = this.local$$receiver.writeShort_mq22fl$(tmp$, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        return;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function writeShortLittleEndian($receiver_0, value_0, continuation_0, suspended) {
    var instance = new Coroutine$writeShortLittleEndian($receiver_0, value_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function Coroutine$writeIntLittleEndian($receiver_0, value_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$value = value_0;
  }
  Coroutine$writeIntLittleEndian.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$writeIntLittleEndian.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeIntLittleEndian.prototype.constructor = Coroutine$writeIntLittleEndian;
  Coroutine$writeIntLittleEndian.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var tmp$;
        if (equals(this.local$$receiver.writeByteOrder, ByteOrder$LITTLE_ENDIAN_getInstance())) 
          tmp$ = this.local$value;
        else {
          tmp$ = reverseByteOrder_3(this.local$value);
        }
        this.state_0 = 2;
        this.result_0 = this.local$$receiver.writeInt_za3lpa$(tmp$, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        return;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function writeIntLittleEndian($receiver_0, value_0, continuation_0, suspended) {
    var instance = new Coroutine$writeIntLittleEndian($receiver_0, value_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function Coroutine$writeLongLittleEndian($receiver_0, value_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$value = value_0;
  }
  Coroutine$writeLongLittleEndian.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$writeLongLittleEndian.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeLongLittleEndian.prototype.constructor = Coroutine$writeLongLittleEndian;
  Coroutine$writeLongLittleEndian.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var tmp$;
        if (equals(this.local$$receiver.writeByteOrder, ByteOrder$LITTLE_ENDIAN_getInstance())) 
          tmp$ = this.local$value;
        else {
          tmp$ = reverseByteOrder_4(this.local$value);
        }
        this.state_0 = 2;
        this.result_0 = this.local$$receiver.writeLong_s8cxhz$(tmp$, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        return;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function writeLongLittleEndian($receiver_0, value_0, continuation_0, suspended) {
    var instance = new Coroutine$writeLongLittleEndian($receiver_0, value_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function Coroutine$writeFloatLittleEndian($receiver_0, value_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$value = value_0;
  }
  Coroutine$writeFloatLittleEndian.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$writeFloatLittleEndian.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeFloatLittleEndian.prototype.constructor = Coroutine$writeFloatLittleEndian;
  Coroutine$writeFloatLittleEndian.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var tmp$;
        if (equals(this.local$$receiver.writeByteOrder, ByteOrder$LITTLE_ENDIAN_getInstance())) 
          tmp$ = this.local$value;
        else {
          tmp$ = reverseByteOrder_5(this.local$value);
        }
        this.state_0 = 2;
        this.result_0 = this.local$$receiver.writeFloat_mx4ult$(tmp$, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        return;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function writeFloatLittleEndian($receiver_0, value_0, continuation_0, suspended) {
    var instance = new Coroutine$writeFloatLittleEndian($receiver_0, value_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function Coroutine$writeDoubleLittleEndian($receiver_0, value_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$value = value_0;
  }
  Coroutine$writeDoubleLittleEndian.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$writeDoubleLittleEndian.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeDoubleLittleEndian.prototype.constructor = Coroutine$writeDoubleLittleEndian;
  Coroutine$writeDoubleLittleEndian.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var tmp$;
        if (equals(this.local$$receiver.writeByteOrder, ByteOrder$LITTLE_ENDIAN_getInstance())) 
          tmp$ = this.local$value;
        else {
          tmp$ = reverseByteOrder_6(this.local$value);
        }
        this.state_0 = 2;
        this.result_0 = this.local$$receiver.writeDouble_14dthe$(tmp$, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        return;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function writeDoubleLittleEndian($receiver_0, value_0, continuation_0, suspended) {
    var instance = new Coroutine$writeDoubleLittleEndian($receiver_0, value_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  var toLittleEndian = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.toLittleEndian_npz7h3$', wrapFunction(function() {
  var ByteOrder = _.io.ktor.utils.io.core.ByteOrder;
  var equals = Kotlin.equals;
  return function($receiver, value, reverseBlock) {
  var tmp$;
  if (equals($receiver.readByteOrder, ByteOrder.LITTLE_ENDIAN)) 
    tmp$ = value;
  else 
    tmp$ = reverseBlock(value);
  return tmp$;
};
}));
  function toLittleEndian_0($receiver, value, reverseBlock) {
    var tmp$;
    if (equals($receiver.writeByteOrder, ByteOrder$LITTLE_ENDIAN_getInstance())) 
      tmp$ = value;
    else 
      tmp$ = reverseBlock(value);
    return tmp$;
  }
  var reverseIfNeeded = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.reverseIfNeeded_xs36oz$', wrapFunction(function() {
  var ByteOrder = _.io.ktor.utils.io.core.ByteOrder;
  var equals = Kotlin.equals;
  return function($receiver, byteOrder, reverseBlock) {
  var tmp$;
  if (equals(byteOrder, ByteOrder.BIG_ENDIAN)) 
    tmp$ = $receiver;
  else 
    tmp$ = reverseBlock($receiver);
  return tmp$;
};
}));
  function ReaderJob() {
  }
  ReaderJob.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'ReaderJob', 
  interfaces: [Job]};
  function WriterJob() {
  }
  WriterJob.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'WriterJob', 
  interfaces: [Job]};
  function ReaderScope() {
  }
  ReaderScope.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'ReaderScope', 
  interfaces: [CoroutineScope]};
  function WriterScope() {
  }
  WriterScope.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'WriterScope', 
  interfaces: [CoroutineScope]};
  function reader($receiver, coroutineContext, channel, block) {
    if (coroutineContext === void 0) 
      coroutineContext = coroutines.EmptyCoroutineContext;
    return launchChannel($receiver, coroutineContext, channel, false, block);
  }
  function reader_0($receiver, coroutineContext, autoFlush, block) {
    if (coroutineContext === void 0) 
      coroutineContext = coroutines.EmptyCoroutineContext;
    if (autoFlush === void 0) 
      autoFlush = false;
    return launchChannel($receiver, coroutineContext, ByteChannel_0(autoFlush), true, block);
  }
  function reader_1(coroutineContext, channel, parent, block) {
    if (parent === void 0) 
      parent = null;
    var newContext = parent != null ? newCoroutineContext(coroutines_0.GlobalScope, coroutineContext.plus_1fupul$(parent)) : newCoroutineContext(coroutines_0.GlobalScope, coroutineContext);
    return reader(CoroutineScope_0(newContext), coroutines.EmptyCoroutineContext, channel, block);
  }
  function reader_2(coroutineContext, autoFlush, parent, block) {
    if (autoFlush === void 0) 
      autoFlush = false;
    if (parent === void 0) 
      parent = null;
    var channel = ByteChannel_0(autoFlush);
    var $receiver = reader_1(coroutineContext, channel, parent, block);
    channel.attachJob_dqr1mp$($receiver);
    return $receiver;
  }
  function writer($receiver, coroutineContext, channel, block) {
    if (coroutineContext === void 0) 
      coroutineContext = coroutines.EmptyCoroutineContext;
    return launchChannel($receiver, coroutineContext, channel, false, block);
  }
  function writer_0($receiver, coroutineContext, autoFlush, block) {
    if (coroutineContext === void 0) 
      coroutineContext = coroutines.EmptyCoroutineContext;
    if (autoFlush === void 0) 
      autoFlush = false;
    return launchChannel($receiver, coroutineContext, ByteChannel_0(autoFlush), true, block);
  }
  function writer_1(coroutineContext, channel, parent, block) {
    if (parent === void 0) 
      parent = null;
    var newContext = parent != null ? newCoroutineContext(coroutines_0.GlobalScope, coroutineContext.plus_1fupul$(parent)) : newCoroutineContext(coroutines_0.GlobalScope, coroutineContext);
    return writer(CoroutineScope_0(newContext), coroutines.EmptyCoroutineContext, channel, block);
  }
  function writer_2(coroutineContext, autoFlush, parent, block) {
    if (autoFlush === void 0) 
      autoFlush = false;
    if (parent === void 0) 
      parent = null;
    var channel = ByteChannel_0(autoFlush);
    var $receiver = writer_1(coroutineContext, channel, parent, block);
    channel.attachJob_dqr1mp$($receiver);
    return $receiver;
  }
  function Coroutine$launchChannel$lambda(closure$attachJob_0, closure$channel_0, closure$block_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$attachJob = closure$attachJob_0;
    this.local$closure$channel = closure$channel_0;
    this.local$closure$block = closure$block_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$launchChannel$lambda.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$launchChannel$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$launchChannel$lambda.prototype.constructor = Coroutine$launchChannel$lambda;
  Coroutine$launchChannel$lambda.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var tmp$;
        if (this.local$closure$attachJob) {
          this.local$closure$channel.attachJob_dqr1mp$(ensureNotNull(this.local$$receiver.coroutineContext.get_j3r2sn$(Job.Key)));
        }
        this.state_0 = 2;
        this.result_0 = this.local$closure$block(Kotlin.isType(tmp$ = new ChannelScope(this.local$$receiver, this.local$closure$channel), CoroutineScope) ? tmp$ : throwCCE(), this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        return this.result_0;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function launchChannel$lambda(closure$attachJob_0, closure$channel_0, closure$block_0) {
    return function($receiver_0, continuation_0, suspended) {
  var instance = new Coroutine$launchChannel$lambda(closure$attachJob_0, closure$channel_0, closure$block_0, $receiver_0, this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  }
  function launchChannel$lambda_0(closure$channel) {
    return function(cause) {
  closure$channel.close_dbl4no$(cause);
  return Unit;
};
  }
  function launchChannel($receiver, context, channel, attachJob, block) {
    var job = launch($receiver, context, void 0, launchChannel$lambda(attachJob, channel, block));
    job.invokeOnCompletion_f05bi3$(launchChannel$lambda_0(channel));
    return new ChannelJob(job, channel);
  }
  function ChannelScope(delegate, channel) {
    this.channel_79cwt9$_0 = channel;
    this.$delegate_h3p63m$_0 = delegate;
  }
  Object.defineProperty(ChannelScope.prototype, 'channel', {
  get: function() {
  return this.channel_79cwt9$_0;
}});
  Object.defineProperty(ChannelScope.prototype, 'coroutineContext', {
  get: function() {
  return this.$delegate_h3p63m$_0.coroutineContext;
}});
  ChannelScope.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'ChannelScope', 
  interfaces: [WriterScope, ReaderScope, CoroutineScope]};
  function ChannelJob(delegate, channel) {
    this.delegate_0 = delegate;
    this.channel_zg1n2y$_0 = channel;
  }
  Object.defineProperty(ChannelJob.prototype, 'channel', {
  get: function() {
  return this.channel_zg1n2y$_0;
}});
  ChannelJob.prototype.toString = function() {
  return 'ChannelJob[' + this.delegate_0 + ']';
};
  Object.defineProperty(ChannelJob.prototype, 'children', {
  get: function() {
  return this.delegate_0.children;
}});
  Object.defineProperty(ChannelJob.prototype, 'isActive', {
  get: function() {
  return this.delegate_0.isActive;
}});
  Object.defineProperty(ChannelJob.prototype, 'isCancelled', {
  get: function() {
  return this.delegate_0.isCancelled;
}});
  Object.defineProperty(ChannelJob.prototype, 'isCompleted', {
  get: function() {
  return this.delegate_0.isCompleted;
}});
  Object.defineProperty(ChannelJob.prototype, 'key', {
  get: function() {
  return this.delegate_0.key;
}});
  Object.defineProperty(ChannelJob.prototype, 'onJoin', {
  get: function() {
  return this.delegate_0.onJoin;
}});
  ChannelJob.prototype.attachChild_kx8v25$ = function(child) {
  return this.delegate_0.attachChild_kx8v25$(child);
};
  ChannelJob.prototype.cancel = function() {
  return this.delegate_0.cancel();
};
  ChannelJob.prototype.cancel_dbl4no$$default = function(cause) {
  return this.delegate_0.cancel_dbl4no$$default(cause);
};
  ChannelJob.prototype.cancel_m4sck1$$default = function(cause) {
  return this.delegate_0.cancel_m4sck1$$default(cause);
};
  ChannelJob.prototype.fold_3cc69b$ = function(initial, operation) {
  return this.delegate_0.fold_3cc69b$(initial, operation);
};
  ChannelJob.prototype.get_j3r2sn$ = function(key) {
  return this.delegate_0.get_j3r2sn$(key);
};
  ChannelJob.prototype.getCancellationException = function() {
  return this.delegate_0.getCancellationException();
};
  ChannelJob.prototype.invokeOnCompletion_ct2b2z$$default = function(onCancelling, invokeImmediately, handler) {
  return this.delegate_0.invokeOnCompletion_ct2b2z$$default(onCancelling, invokeImmediately, handler);
};
  ChannelJob.prototype.invokeOnCompletion_f05bi3$ = function(handler) {
  return this.delegate_0.invokeOnCompletion_f05bi3$(handler);
};
  ChannelJob.prototype.join = function(continuation) {
  return this.delegate_0.join(continuation);
};
  ChannelJob.prototype.minusKey_yeqjby$ = function(key) {
  return this.delegate_0.minusKey_yeqjby$(key);
};
  ChannelJob.prototype.plus_1fupul$ = function(context) {
  return this.delegate_0.plus_1fupul$(context);
};
  ChannelJob.prototype.plus_dqr1mp$ = function(other) {
  return this.delegate_0.plus_dqr1mp$(other);
};
  ChannelJob.prototype.start = function() {
  return this.delegate_0.start();
};
  ChannelJob.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'ChannelJob', 
  interfaces: [WriterJob, ReaderJob, Job]};
  function Coroutine$read($receiver_0, desiredSize_0, block_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.local$buffer = void 0;
    this.local$bytesRead = void 0;
    this.local$$receiver = $receiver_0;
    this.local$desiredSize = desiredSize_0;
    this.local$block = block_0;
  }
  Coroutine$read.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$read.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$read.prototype.constructor = Coroutine$read;
  Coroutine$read.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        if (this.local$desiredSize === void 0) 
          this.local$desiredSize = 1;
        var tmp$_0;
        this.state_0 = 1;
        this.result_0 = requestBuffer(this.local$$receiver, this.local$desiredSize, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        this.local$buffer = (tmp$_0 = this.result_0) != null ? tmp$_0 : Buffer.Companion.Empty;
        this.local$bytesRead = 0;
        this.exceptionState_0 = 2;
        this.local$bytesRead = this.local$block(this.local$buffer.memory, Kotlin.Long.fromInt(this.local$buffer.readPosition), Kotlin.Long.fromInt(this.local$buffer.writePosition - this.local$buffer.readPosition | 0));
        this.exceptionState_0 = 6;
        this.finallyPath_0 = [3];
        this.state_0 = 4;
        this.$returnValue = this.local$bytesRead;
        continue;
      case 2:
        this.finallyPath_0 = [6];
        this.state_0 = 4;
        continue;
      case 3:
        return this.$returnValue;
      case 4:
        this.exceptionState_0 = 6;
        this.state_0 = 5;
        this.result_0 = completeReadingFromBuffer(this.local$$receiver, this.local$buffer, this.local$bytesRead, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 5:
        this.state_0 = this.finallyPath_0.shift();
        continue;
      case 6:
        throw this.exception_0;
      case 7:
        return;
      default:
        this.state_0 = 6;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 6) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function read($receiver_0, desiredSize_0, block_0, continuation_0, suspended) {
    var instance = new Coroutine$read($receiver_0, desiredSize_0, block_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.read_ons6h$', wrapFunction(function() {
  var requestBuffer = _.io.ktor.utils.io.requestBuffer_78elpf$;
  var Buffer = _.io.ktor.utils.io.core.Buffer;
  var completeReadingFromBuffer = _.io.ktor.utils.io.completeReadingFromBuffer_6msh3s$;
  return function($receiver, desiredSize, block, continuation) {
  if (desiredSize === void 0) 
    desiredSize = 1;
  var tmp$_0;
  Kotlin.suspendCall(requestBuffer($receiver, desiredSize, Kotlin.coroutineReceiver()));
  var buffer = (tmp$_0 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) != null ? tmp$_0 : Buffer.Companion.Empty;
  var bytesRead = 0;
  try {
    bytesRead = block(buffer.memory, Kotlin.Long.fromInt(buffer.readPosition), Kotlin.Long.fromInt(buffer.writePosition - buffer.readPosition | 0));
    return bytesRead;
  } finally   {
    Kotlin.suspendCall(completeReadingFromBuffer($receiver, buffer, bytesRead, Kotlin.coroutineReceiver()));
  }
};
}));
  function ReadSession() {
  }
  ReadSession.prototype.request_za3lpa$ = function(atLeast, callback$default) {
  if (atLeast === void 0) 
    atLeast = 1;
  return callback$default ? callback$default(atLeast) : this.request_za3lpa$$default(atLeast);
};
  ReadSession.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'ReadSession', 
  interfaces: []};
  function SuspendableReadSession() {
  }
  SuspendableReadSession.prototype.await_za3lpa$ = function(atLeast, continuation, callback$default) {
  if (atLeast === void 0) 
    atLeast = 1;
  return callback$default ? callback$default(atLeast, continuation) : this.await_za3lpa$$default(atLeast, continuation);
};
  SuspendableReadSession.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'SuspendableReadSession', 
  interfaces: [ReadSession]};
  function Coroutine$requestBuffer($receiver_0, desiredSize_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$readSession = void 0;
    this.local$$receiver = $receiver_0;
    this.local$desiredSize = desiredSize_0;
  }
  Coroutine$requestBuffer.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$requestBuffer.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$requestBuffer.prototype.constructor = Coroutine$requestBuffer;
  Coroutine$requestBuffer.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var tmp$;
        if (Kotlin.isType(this.local$$receiver, SuspendableReadSession)) 
          tmp$ = this.local$$receiver;
        else if (Kotlin.isType(this.local$$receiver, HasReadSession)) 
          tmp$ = this.local$$receiver.startReadSession();
        else 
          tmp$ = null;
        this.local$readSession = tmp$;
        if (this.local$readSession != null) {
          var buffer = this.local$readSession.request_za3lpa$(coerceAtMost_0(this.local$desiredSize, 8));
          if (buffer != null) {
            return buffer;
          } else {
            this.state_0 = 2;
            continue;
          }
        } else {
          this.state_0 = 4;
          continue;
        }
      case 1:
        throw this.exception_0;
      case 2:
        this.state_0 = 3;
        this.result_0 = requestBufferSuspend(this.local$readSession, this.local$desiredSize, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 3:
        return this.result_0;
      case 4:
        this.state_0 = 5;
        this.result_0 = requestBufferFallback(this.local$$receiver, this.local$desiredSize, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 5:
        return this.result_0;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function requestBuffer($receiver_0, desiredSize_0, continuation_0, suspended) {
    var instance = new Coroutine$requestBuffer($receiver_0, desiredSize_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function Coroutine$completeReadingFromBuffer($receiver_0, buffer_0, bytesRead_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$buffer = buffer_0;
    this.local$bytesRead = bytesRead_0;
  }
  Coroutine$completeReadingFromBuffer.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$completeReadingFromBuffer.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$completeReadingFromBuffer.prototype.constructor = Coroutine$completeReadingFromBuffer;
  Coroutine$completeReadingFromBuffer.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var readSessionFor$result;
        if (Kotlin.isType(this.local$$receiver, HasReadSession)) {
          readSessionFor$result = this.local$$receiver.startReadSession();
        } else {
          readSessionFor$result = null;
        }
        var readSession = readSessionFor$result;
        if (readSession != null) {
          readSession.discard_za3lpa$(this.local$bytesRead);
          return;
        } else {
          this.state_0 = 2;
          continue;
        }
      case 1:
        throw this.exception_0;
      case 2:
        if (Kotlin.isType(this.local$buffer, ChunkBuffer)) {
          this.local$buffer.release_2bs5fo$(ChunkBuffer$Companion_getInstance().Pool);
          this.state_0 = 3;
          this.result_0 = this.local$$receiver.discard_s8cxhz$(Kotlin.Long.fromInt(this.local$bytesRead), this);
          if (this.result_0 === COROUTINE_SUSPENDED) 
            return COROUTINE_SUSPENDED;
          continue;
        } else {
          this.state_0 = 4;
          continue;
        }
      case 3:
        this.state_0 = 4;
        continue;
      case 4:
        return;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function completeReadingFromBuffer($receiver_0, buffer_0, bytesRead_0, continuation_0, suspended) {
    var instance = new Coroutine$completeReadingFromBuffer($receiver_0, buffer_0, bytesRead_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function Coroutine$requestBufferSuspend($receiver_0, desiredSize_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$desiredSize = desiredSize_0;
  }
  Coroutine$requestBufferSuspend.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$requestBufferSuspend.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$requestBufferSuspend.prototype.constructor = Coroutine$requestBufferSuspend;
  Coroutine$requestBufferSuspend.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = this.local$$receiver.await_za3lpa$(this.local$desiredSize, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        return this.local$$receiver.request_za3lpa$(1);
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function requestBufferSuspend($receiver_0, desiredSize_0, continuation_0, suspended) {
    var instance = new Coroutine$requestBufferSuspend($receiver_0, desiredSize_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function Coroutine$requestBufferFallback($receiver_0, desiredSize_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$chunk = void 0;
    this.local$$receiver = $receiver_0;
    this.local$desiredSize = desiredSize_0;
  }
  Coroutine$requestBufferFallback.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$requestBufferFallback.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$requestBufferFallback.prototype.constructor = Coroutine$requestBufferFallback;
  Coroutine$requestBufferFallback.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.local$chunk = ChunkBuffer$Companion_getInstance().Pool.borrow();
        this.state_0 = 2;
        this.result_0 = this.local$$receiver.peekTo_afjyek$(this.local$chunk.memory, Kotlin.Long.fromInt(this.local$chunk.writePosition), L0, Kotlin.Long.fromInt(this.local$desiredSize), Kotlin.Long.fromInt(this.local$chunk.limit - this.local$chunk.writePosition | 0), this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        var copied = this.result_0;
        this.local$chunk.commitWritten_za3lpa$(copied.toInt());
        return this.local$chunk;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function requestBufferFallback($receiver_0, desiredSize_0, continuation_0, suspended) {
    var instance = new Coroutine$requestBufferFallback($receiver_0, desiredSize_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function HasReadSession() {
  }
  HasReadSession.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'HasReadSession', 
  interfaces: []};
  function readSessionFor($receiver) {
    if (Kotlin.isType($receiver, HasReadSession)) 
      return $receiver.startReadSession();
    else 
      return null;
  }
  function Coroutine$write($receiver_0, desiredSpace_0, block_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.local$buffer = void 0;
    this.local$bytesWritten = void 0;
    this.local$$receiver = $receiver_0;
    this.local$desiredSpace = desiredSpace_0;
    this.local$block = block_0;
  }
  Coroutine$write.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$write.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$write.prototype.constructor = Coroutine$write;
  Coroutine$write.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        if (this.local$desiredSpace === void 0) 
          this.local$desiredSpace = 1;
        var tmp$_0;
        this.state_0 = 1;
        this.result_0 = requestWriteBuffer(this.local$$receiver, this.local$desiredSpace, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        this.local$buffer = (tmp$_0 = this.result_0) != null ? tmp$_0 : Buffer.Companion.Empty;
        this.local$bytesWritten = 0;
        this.exceptionState_0 = 2;
        this.local$bytesWritten = this.local$block(this.local$buffer.memory, Kotlin.Long.fromInt(this.local$buffer.writePosition), Kotlin.Long.fromInt(this.local$buffer.limit));
        this.local$buffer.commitWritten_za3lpa$(this.local$bytesWritten);
        this.exceptionState_0 = 6;
        this.finallyPath_0 = [3];
        this.state_0 = 4;
        this.$returnValue = this.local$bytesWritten;
        continue;
      case 2:
        this.finallyPath_0 = [6];
        this.state_0 = 4;
        continue;
      case 3:
        return this.$returnValue;
      case 4:
        this.exceptionState_0 = 6;
        this.state_0 = 5;
        this.result_0 = completeWriting(this.local$$receiver, this.local$buffer, this.local$bytesWritten, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 5:
        this.state_0 = this.finallyPath_0.shift();
        continue;
      case 6:
        throw this.exception_0;
      case 7:
        return;
      default:
        this.state_0 = 6;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 6) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function write($receiver_0, desiredSpace_0, block_0, continuation_0, suspended) {
    var instance = new Coroutine$write($receiver_0, desiredSpace_0, block_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.write_k0oolq$', wrapFunction(function() {
  var requestWriteBuffer = _.io.ktor.utils.io.requestWriteBuffer_9tm6dw$;
  var Buffer = _.io.ktor.utils.io.core.Buffer;
  var completeWriting = _.io.ktor.utils.io.completeWriting_oczduq$;
  return function($receiver, desiredSpace, block, continuation) {
  if (desiredSpace === void 0) 
    desiredSpace = 1;
  var tmp$_0;
  Kotlin.suspendCall(requestWriteBuffer($receiver, desiredSpace, Kotlin.coroutineReceiver()));
  var buffer = (tmp$_0 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) != null ? tmp$_0 : Buffer.Companion.Empty;
  var bytesWritten = 0;
  try {
    bytesWritten = block(buffer.memory, Kotlin.Long.fromInt(buffer.writePosition), Kotlin.Long.fromInt(buffer.limit));
    buffer.commitWritten_za3lpa$(bytesWritten);
    return bytesWritten;
  } finally   {
    Kotlin.suspendCall(completeWriting($receiver, buffer, bytesWritten, Kotlin.coroutineReceiver()));
  }
};
}));
  function WriterSession() {
  }
  WriterSession.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'WriterSession', 
  interfaces: []};
  function WriterSuspendSession() {
  }
  WriterSuspendSession.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'WriterSuspendSession', 
  interfaces: [WriterSession]};
  function HasWriteSession() {
  }
  HasWriteSession.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'HasWriteSession', 
  interfaces: []};
  function Coroutine$requestWriteBuffer($receiver_0, desiredSpace_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$session = void 0;
    this.local$$receiver = $receiver_0;
    this.local$desiredSpace = desiredSpace_0;
  }
  Coroutine$requestWriteBuffer.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$requestWriteBuffer.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$requestWriteBuffer.prototype.constructor = Coroutine$requestWriteBuffer;
  Coroutine$requestWriteBuffer.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var writeSessionFor$result;
        if (Kotlin.isType(this.local$$receiver, HasWriteSession)) {
          writeSessionFor$result = this.local$$receiver.beginWriteSession();
        } else {
          writeSessionFor$result = null;
        }
        this.local$session = writeSessionFor$result;
        if (this.local$session != null) {
          var buffer = this.local$session.request_za3lpa$(this.local$desiredSpace);
          if (buffer != null) {
            return buffer;
          } else {
            this.state_0 = 2;
            continue;
          }
        } else {
          this.state_0 = 4;
          continue;
        }
      case 1:
        throw this.exception_0;
      case 2:
        this.state_0 = 3;
        this.result_0 = writeBufferSuspend(this.local$session, this.local$desiredSpace, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 3:
        return this.result_0;
      case 4:
        return writeBufferFallback();
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function requestWriteBuffer($receiver_0, desiredSpace_0, continuation_0, suspended) {
    var instance = new Coroutine$requestWriteBuffer($receiver_0, desiredSpace_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function completeWriting($receiver, buffer, written, continuation) {
    if (Kotlin.isType($receiver, HasWriteSession)) {
      $receiver.endWriteSession_za3lpa$(written);
      return;
    }
    return completeWritingFallback($receiver, buffer, continuation);
  }
  function Coroutine$completeWritingFallback($receiver_0, buffer_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$buffer = buffer_0;
  }
  Coroutine$completeWritingFallback.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$completeWritingFallback.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$completeWritingFallback.prototype.constructor = Coroutine$completeWritingFallback;
  Coroutine$completeWritingFallback.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        if (Kotlin.isType(this.local$buffer, IoBuffer)) {
          this.state_0 = 2;
          this.result_0 = this.local$$receiver.writeFully_99qa0s$(this.local$buffer, this);
          if (this.result_0 === COROUTINE_SUSPENDED) 
            return COROUTINE_SUSPENDED;
          continue;
        } else {
          this.state_0 = 3;
          continue;
        }
      case 1:
        throw this.exception_0;
      case 2:
        this.local$buffer.release_duua06$(IoBuffer$Companion_getInstance().Pool);
        return;
      case 3:
        throw UnsupportedOperationException_init('Only IoBuffer instance is supported.');
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function completeWritingFallback($receiver_0, buffer_0, continuation_0, suspended) {
    var instance = new Coroutine$completeWritingFallback($receiver_0, buffer_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function Coroutine$writeBufferSuspend(session_0, desiredSpace_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$session = session_0;
    this.local$desiredSpace = desiredSpace_0;
  }
  Coroutine$writeBufferSuspend.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$writeBufferSuspend.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeBufferSuspend.prototype.constructor = Coroutine$writeBufferSuspend;
  Coroutine$writeBufferSuspend.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var tmp$;
        this.state_0 = 2;
        this.result_0 = this.local$session.tryAwait_za3lpa$(this.local$desiredSpace, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        return (tmp$ = this.local$session.request_za3lpa$(this.local$desiredSpace)) != null ? tmp$ : this.local$session.request_za3lpa$(1);
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function writeBufferSuspend(session_0, desiredSpace_0, continuation_0, suspended) {
    var instance = new Coroutine$writeBufferSuspend(session_0, desiredSpace_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function writeBufferFallback() {
    var $receiver = ChunkBuffer$Companion_getInstance().Pool.borrow();
    $receiver.resetForWrite();
    $receiver.reserveEndGap_za3lpa$(8);
    return $receiver;
  }
  function writeSessionFor($receiver) {
    if (Kotlin.isType($receiver, HasWriteSession)) 
      return $receiver.beginWriteSession();
    else 
      return null;
  }
  function reverseByteOrder($receiver) {
    return new UShort_init(reverseByteOrder_2($receiver.data));
  }
  function reverseByteOrder_0($receiver) {
    return new UInt_init(reverseByteOrder_3($receiver.data));
  }
  function reverseByteOrder_1($receiver) {
    return new ULong_init(reverseByteOrder_4($receiver.data));
  }
  var get_highByte = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.get_highByte_5vcgdc$', wrapFunction(function() {
  var toByte = Kotlin.toByte;
  return function($receiver) {
  return toByte(($receiver & 255) >> 8);
};
}));
  var get_lowByte = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.get_lowByte_5vcgdc$', wrapFunction(function() {
  var toByte = Kotlin.toByte;
  return function($receiver) {
  return toByte($receiver & 255);
};
}));
  var get_highShort = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.get_highShort_s8ev3n$', wrapFunction(function() {
  var toShort = Kotlin.toShort;
  return function($receiver) {
  return toShort($receiver >>> 16);
};
}));
  var get_lowShort = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.get_lowShort_s8ev3n$', wrapFunction(function() {
  var toShort = Kotlin.toShort;
  return function($receiver) {
  return toShort($receiver & 65535);
};
}));
  var get_highInt = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.get_highInt_mts6qi$', function($receiver) {
  return $receiver.shiftRightUnsigned(32).toInt();
});
  var get_lowInt = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.get_lowInt_mts6qi$', wrapFunction(function() {
  var L4294967295 = new Kotlin.Long(-1, 0);
  return function($receiver) {
  return $receiver.and(L4294967295).toInt();
};
}));
  var get_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.get_ad7opl$', function($receiver, index) {
  return $receiver.view.getInt8(index);
});
  var get_1 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.get_xrw27i$', wrapFunction(function() {
  var failLongToIntConversion = _.io.ktor.utils.io.core.internal.failLongToIntConversion_a4hdmt$;
  return function($receiver, index) {
  var tmp$ = $receiver.view;
  if (index.toNumber() >= 2147483647) 
    failLongToIntConversion(index, 'index');
  return tmp$.getInt8(index.toInt());
};
}));
  var set = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.set_x25fc5$', wrapFunction(function() {
  var failLongToIntConversion = _.io.ktor.utils.io.core.internal.failLongToIntConversion_a4hdmt$;
  return function($receiver, index, value) {
  var tmp$ = $receiver.view;
  if (index.toNumber() >= 2147483647) 
    failLongToIntConversion(index, 'index');
  tmp$.setInt8(index.toInt(), value);
};
}));
  var set_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.set_gx2x5q$', function($receiver, index, value) {
  $receiver.view.setInt8(index, value);
});
  var storeAt = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.storeAt_u5mcnq$', wrapFunction(function() {
  var failLongToIntConversion = _.io.ktor.utils.io.core.internal.failLongToIntConversion_a4hdmt$;
  return function($receiver, index, value) {
  var value_0 = value.data;
  var tmp$ = $receiver.view;
  if (index.toNumber() >= 2147483647) 
    failLongToIntConversion(index, 'index');
  tmp$.setInt8(index.toInt(), value_0);
};
}));
  var storeAt_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.storeAt_r092yl$', function($receiver, index, value) {
  $receiver.view.setInt8(index, value.data);
});
  var withMemory = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.withMemory_24cc00$', wrapFunction(function() {
  var bits = _.io.ktor.utils.io.bits;
  return function(size, block) {
  var size_0 = Kotlin.Long.fromInt(size);
  var tmp$;
  var allocator = bits.DefaultAllocator;
  var memory = allocator.alloc_s8cxhz$(size_0);
  try {
    tmp$ = block(memory);
  } finally   {
    allocator.free_vn6nzs$(memory);
  }
  return tmp$;
};
}));
  var withMemory_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.withMemory_ksmduh$', wrapFunction(function() {
  var bits = _.io.ktor.utils.io.bits;
  return function(size, block) {
  var tmp$;
  var allocator = bits.DefaultAllocator;
  var memory = allocator.alloc_s8cxhz$(size);
  try {
    tmp$ = block(memory);
  } finally   {
    allocator.free_vn6nzs$(memory);
  }
  return tmp$;
};
}));
  function Allocator() {
  }
  Allocator.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'Allocator', 
  interfaces: []};
  var loadUShortAt = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.loadUShortAt_ad7opl$', wrapFunction(function() {
  var UShort_init = Kotlin.kotlin.UShort;
  return function($receiver, offset) {
  return new UShort_init($receiver.view.getInt16(offset, false));
};
}));
  var loadUShortAt_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.loadUShortAt_xrw27i$', wrapFunction(function() {
  var failLongToIntConversion = _.io.ktor.utils.io.core.internal.failLongToIntConversion_a4hdmt$;
  var UShort_init = Kotlin.kotlin.UShort;
  return function($receiver, offset) {
  if (offset.toNumber() >= 2147483647) 
    failLongToIntConversion(offset, 'offset');
  return new UShort_init($receiver.view.getInt16(offset.toInt(), false));
};
}));
  var storeUShortAt = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.storeUShortAt_feknxd$', function($receiver, offset, value) {
  $receiver.view.setInt16(offset, value.data, false);
});
  var storeUShortAt_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.storeUShortAt_b6qmqu$', wrapFunction(function() {
  var failLongToIntConversion = _.io.ktor.utils.io.core.internal.failLongToIntConversion_a4hdmt$;
  return function($receiver, offset, value) {
  var value_0 = value.data;
  var tmp$ = $receiver.view;
  if (offset.toNumber() >= 2147483647) 
    failLongToIntConversion(offset, 'offset');
  tmp$.setInt16(offset.toInt(), value_0, false);
};
}));
  var loadUIntAt = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.loadUIntAt_ad7opl$', wrapFunction(function() {
  var UInt_init = Kotlin.kotlin.UInt;
  return function($receiver, offset) {
  return new UInt_init($receiver.view.getInt32(offset, false));
};
}));
  var loadUIntAt_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.loadUIntAt_xrw27i$', wrapFunction(function() {
  var failLongToIntConversion = _.io.ktor.utils.io.core.internal.failLongToIntConversion_a4hdmt$;
  var UInt_init = Kotlin.kotlin.UInt;
  return function($receiver, offset) {
  if (offset.toNumber() >= 2147483647) 
    failLongToIntConversion(offset, 'offset');
  return new UInt_init($receiver.view.getInt32(offset.toInt(), false));
};
}));
  var storeUIntAt = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.storeUIntAt_gwrs4s$', function($receiver, offset, value) {
  $receiver.view.setInt32(offset, value.data, false);
});
  var storeUIntAt_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.storeUIntAt_x1uab7$', wrapFunction(function() {
  var failLongToIntConversion = _.io.ktor.utils.io.core.internal.failLongToIntConversion_a4hdmt$;
  return function($receiver, offset, value) {
  var value_0 = value.data;
  var tmp$ = $receiver.view;
  if (offset.toNumber() >= 2147483647) 
    failLongToIntConversion(offset, 'offset');
  tmp$.setInt32(offset.toInt(), value_0, false);
};
}));
  var loadULongAt = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.loadULongAt_ad7opl$', wrapFunction(function() {
  var ULong_init = Kotlin.kotlin.ULong;
  return function($receiver, offset) {
  return new ULong_init(Kotlin.Long.fromInt($receiver.view.getUint32(offset, false)).shiftLeft(32).or(Kotlin.Long.fromInt($receiver.view.getUint32(offset + 4 | 0, false))));
};
}));
  var loadULongAt_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.loadULongAt_xrw27i$', wrapFunction(function() {
  var failLongToIntConversion = _.io.ktor.utils.io.core.internal.failLongToIntConversion_a4hdmt$;
  var ULong_init = Kotlin.kotlin.ULong;
  return function($receiver, offset) {
  if (offset.toNumber() >= 2147483647) 
    failLongToIntConversion(offset, 'offset');
  var offset_0 = offset.toInt();
  return new ULong_init(Kotlin.Long.fromInt($receiver.view.getUint32(offset_0, false)).shiftLeft(32).or(Kotlin.Long.fromInt($receiver.view.getUint32(offset_0 + 4 | 0, false))));
};
}));
  var storeULongAt = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.storeULongAt_r02wnd$', wrapFunction(function() {
  var L4294967295 = new Kotlin.Long(-1, 0);
  return function($receiver, offset, value) {
  var value_0 = value.data;
  $receiver.view.setInt32(offset, value_0.shiftRight(32).toInt(), false);
  $receiver.view.setInt32(offset + 4 | 0, value_0.and(L4294967295).toInt(), false);
};
}));
  var storeULongAt_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.storeULongAt_u5g6ci$', wrapFunction(function() {
  var failLongToIntConversion = _.io.ktor.utils.io.core.internal.failLongToIntConversion_a4hdmt$;
  var L4294967295 = new Kotlin.Long(-1, 0);
  return function($receiver, offset, value) {
  var value_0 = value.data;
  if (offset.toNumber() >= 2147483647) 
    failLongToIntConversion(offset, 'offset');
  var offset_0 = offset.toInt();
  $receiver.view.setInt32(offset_0, value_0.shiftRight(32).toInt(), false);
  $receiver.view.setInt32(offset_0 + 4 | 0, value_0.and(L4294967295).toInt(), false);
};
}));
  var loadByteArray = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.loadByteArray_ngtxw7$', wrapFunction(function() {
  var copyTo = _.io.ktor.utils.io.bits.copyTo_tiw1kd$;
  return function($receiver, offset, destination, destinationOffset, count) {
  if (destinationOffset === void 0) 
    destinationOffset = 0;
  if (count === void 0) 
    count = destination.length - destinationOffset | 0;
  copyTo($receiver, destination, offset, count, destinationOffset);
};
}));
  var loadByteArray_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.loadByteArray_dy6oua$', wrapFunction(function() {
  var copyTo = _.io.ktor.utils.io.bits.copyTo_yqt5go$;
  return function($receiver, offset, destination, destinationOffset, count) {
  if (destinationOffset === void 0) 
    destinationOffset = 0;
  if (count === void 0) 
    count = destination.length - destinationOffset | 0;
  copyTo($receiver, destination, offset, count, destinationOffset);
};
}));
  var loadUByteArray = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.loadUByteArray_moiot2$', wrapFunction(function() {
  var copyTo = _.io.ktor.utils.io.bits.copyTo_tiw1kd$;
  return function($receiver, offset, destination, destinationOffset, count) {
  if (destinationOffset === void 0) 
    destinationOffset = 0;
  if (count === void 0) 
    count = destination.size - destinationOffset | 0;
  copyTo($receiver, destination.storage, offset, count, destinationOffset);
};
}));
  var loadUByteArray_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.loadUByteArray_r80dt$', wrapFunction(function() {
  var copyTo = _.io.ktor.utils.io.bits.copyTo_yqt5go$;
  return function($receiver, offset, destination, destinationOffset, count) {
  if (destinationOffset === void 0) 
    destinationOffset = 0;
  if (count === void 0) 
    count = destination.size - destinationOffset | 0;
  copyTo($receiver, destination.storage, offset, count, destinationOffset);
};
}));
  var loadUShortArray = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.loadUShortArray_fu1ix4$', wrapFunction(function() {
  var loadShortArray = _.io.ktor.utils.io.bits.loadShortArray_8jnas7$;
  return function($receiver, offset, destination, destinationOffset, count) {
  if (destinationOffset === void 0) 
    destinationOffset = 0;
  if (count === void 0) 
    count = destination.size - destinationOffset | 0;
  loadShortArray($receiver, offset, destination.storage, destinationOffset, count);
};
}));
  var loadUShortArray_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.loadUShortArray_w2wo2p$', wrapFunction(function() {
  var loadShortArray = _.io.ktor.utils.io.bits.loadShortArray_ew3eeo$;
  return function($receiver, offset, destination, destinationOffset, count) {
  if (destinationOffset === void 0) 
    destinationOffset = 0;
  if (count === void 0) 
    count = destination.size - destinationOffset | 0;
  loadShortArray($receiver, offset, destination.storage, destinationOffset, count);
};
}));
  var loadUIntArray = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.loadUIntArray_795lej$', wrapFunction(function() {
  var loadIntArray = _.io.ktor.utils.io.bits.loadIntArray_kz60l8$;
  return function($receiver, offset, destination, destinationOffset, count) {
  if (destinationOffset === void 0) 
    destinationOffset = 0;
  if (count === void 0) 
    count = destination.size - destinationOffset | 0;
  loadIntArray($receiver, offset, destination.storage, destinationOffset, count);
};
}));
  var loadUIntArray_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.loadUIntArray_qcxtu4$', wrapFunction(function() {
  var loadIntArray = _.io.ktor.utils.io.bits.loadIntArray_qrle83$;
  return function($receiver, offset, destination, destinationOffset, count) {
  if (destinationOffset === void 0) 
    destinationOffset = 0;
  if (count === void 0) 
    count = destination.size - destinationOffset | 0;
  loadIntArray($receiver, offset, destination.storage, destinationOffset, count);
};
}));
  var loadULongArray = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.loadULongArray_1mgmjm$', wrapFunction(function() {
  var loadLongArray = _.io.ktor.utils.io.bits.loadLongArray_2ervmr$;
  return function($receiver, offset, destination, destinationOffset, count) {
  if (destinationOffset === void 0) 
    destinationOffset = 0;
  if (count === void 0) 
    count = destination.size - destinationOffset | 0;
  loadLongArray($receiver, offset, destination.storage, destinationOffset, count);
};
}));
  var loadULongArray_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.loadULongArray_lta2n9$', wrapFunction(function() {
  var loadLongArray = _.io.ktor.utils.io.bits.loadLongArray_z08r3q$;
  return function($receiver, offset, destination, destinationOffset, count) {
  if (destinationOffset === void 0) 
    destinationOffset = 0;
  if (count === void 0) 
    count = destination.size - destinationOffset | 0;
  loadLongArray($receiver, offset, destination.storage, destinationOffset, count);
};
}));
  var storeByteArray = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.storeByteArray_ngtxw7$', wrapFunction(function() {
  var Memory = _.io.ktor.utils.io.bits.Memory;
  var of = _.io.ktor.utils.io.bits.of_2z595v$;
  return function($receiver, offset, source, sourceOffset, count) {
  if (sourceOffset === void 0) 
    sourceOffset = 0;
  if (count === void 0) 
    count = source.length - sourceOffset | 0;
  of(Memory.Companion, source, sourceOffset, count).copyTo_ubllm2$($receiver, 0, count, offset);
};
}));
  var storeByteArray_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.storeByteArray_dy6oua$', wrapFunction(function() {
  var L0 = Kotlin.Long.ZERO;
  var Memory = _.io.ktor.utils.io.bits.Memory;
  var of = _.io.ktor.utils.io.bits.of_2z595v$;
  return function($receiver, offset, source, sourceOffset, count) {
  if (sourceOffset === void 0) 
    sourceOffset = 0;
  if (count === void 0) 
    count = source.length - sourceOffset | 0;
  of(Memory.Companion, source, sourceOffset, count).copyTo_q2ka7j$($receiver, L0, Kotlin.Long.fromInt(count), offset);
};
}));
  var storeUByteArray = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.storeUByteArray_moiot2$', wrapFunction(function() {
  var Memory = _.io.ktor.utils.io.bits.Memory;
  var of = _.io.ktor.utils.io.bits.of_2z595v$;
  return function($receiver, offset, source, sourceOffset, count) {
  if (sourceOffset === void 0) 
    sourceOffset = 0;
  if (count === void 0) 
    count = source.size - sourceOffset | 0;
  var source_0 = source.storage;
  of(Memory.Companion, source_0, sourceOffset, count).copyTo_ubllm2$($receiver, 0, count, offset);
};
}));
  var storeUByteArray_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.storeUByteArray_r80dt$', wrapFunction(function() {
  var L0 = Kotlin.Long.ZERO;
  var Memory = _.io.ktor.utils.io.bits.Memory;
  var of = _.io.ktor.utils.io.bits.of_2z595v$;
  return function($receiver, offset, source, sourceOffset, count) {
  if (sourceOffset === void 0) 
    sourceOffset = 0;
  if (count === void 0) 
    count = source.size - sourceOffset | 0;
  var source_0 = source.storage;
  of(Memory.Companion, source_0, sourceOffset, count).copyTo_q2ka7j$($receiver, L0, Kotlin.Long.fromInt(count), offset);
};
}));
  var storeUShortArray = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.storeUShortArray_fu1ix4$', wrapFunction(function() {
  var storeShortArray = _.io.ktor.utils.io.bits.storeShortArray_8jnas7$;
  return function($receiver, offset, source, sourceOffset, count) {
  if (sourceOffset === void 0) 
    sourceOffset = 0;
  if (count === void 0) 
    count = source.size - sourceOffset | 0;
  storeShortArray($receiver, offset, source.storage, sourceOffset, count);
};
}));
  var storeUShortArray_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.storeUShortArray_w2wo2p$', wrapFunction(function() {
  var storeShortArray = _.io.ktor.utils.io.bits.storeShortArray_ew3eeo$;
  return function($receiver, offset, source, sourceOffset, count) {
  if (sourceOffset === void 0) 
    sourceOffset = 0;
  if (count === void 0) 
    count = source.size - sourceOffset | 0;
  storeShortArray($receiver, offset, source.storage, sourceOffset, count);
};
}));
  var storeUIntArray = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.storeUIntArray_795lej$', wrapFunction(function() {
  var storeIntArray = _.io.ktor.utils.io.bits.storeIntArray_kz60l8$;
  return function($receiver, offset, source, sourceOffset, count) {
  if (sourceOffset === void 0) 
    sourceOffset = 0;
  if (count === void 0) 
    count = source.size - sourceOffset | 0;
  storeIntArray($receiver, offset, source.storage, sourceOffset, count);
};
}));
  var storeUIntArray_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.storeUIntArray_qcxtu4$', wrapFunction(function() {
  var storeIntArray = _.io.ktor.utils.io.bits.storeIntArray_qrle83$;
  return function($receiver, offset, source, sourceOffset, count) {
  if (sourceOffset === void 0) 
    sourceOffset = 0;
  if (count === void 0) 
    count = source.size - sourceOffset | 0;
  storeIntArray($receiver, offset, source.storage, sourceOffset, count);
};
}));
  var storeULongArray = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.storeULongArray_1mgmjm$', wrapFunction(function() {
  var storeLongArray = _.io.ktor.utils.io.bits.storeLongArray_2ervmr$;
  return function($receiver, offset, source, sourceOffset, count) {
  if (sourceOffset === void 0) 
    sourceOffset = 0;
  if (count === void 0) 
    count = source.size - sourceOffset | 0;
  storeLongArray($receiver, offset, source.storage, sourceOffset, count);
};
}));
  var storeULongArray_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.storeULongArray_lta2n9$', wrapFunction(function() {
  var storeLongArray = _.io.ktor.utils.io.bits.storeLongArray_z08r3q$;
  return function($receiver, offset, source, sourceOffset, count) {
  if (sourceOffset === void 0) 
    sourceOffset = 0;
  if (count === void 0) 
    count = source.size - sourceOffset | 0;
  storeLongArray($receiver, offset, source.storage, sourceOffset, count);
};
}));
  function encode($receiver, input, fromIndex, toIndex, dst) {
    encodeToImpl($receiver, dst, input, fromIndex, toIndex);
  }
  function encodeToByteArrayImpl($receiver, input, fromIndex, toIndex) {
    if (fromIndex === void 0) 
      fromIndex = 0;
    if (toIndex === void 0) 
      toIndex = input.length;
    return encodeToByteArray($receiver, input, fromIndex, toIndex);
  }
  function encode_0($receiver, input, fromIndex, toIndex) {
    if (fromIndex === void 0) 
      fromIndex = 0;
    if (toIndex === void 0) 
      toIndex = input.length;
    var buildPacket$result;
    var builder = BytePacketBuilder_0(0);
    try {
      encodeToImpl($receiver, builder, input, fromIndex, toIndex);
      buildPacket$result = builder.build();
    }    catch (t) {
  if (Kotlin.isType(t, Throwable)) {
    builder.release();
    throw t;
  } else 
    throw t;
}
    return buildPacket$result;
  }
  function encodeUTF8($receiver, input) {
    var buildPacket$result;
    var builder = BytePacketBuilder_0(0);
    try {
      encodeUTF8_1($receiver, input, builder);
      buildPacket$result = builder.build();
    }    catch (t) {
  if (Kotlin.isType(t, Throwable)) {
    builder.release();
    throw t;
  } else 
    throw t;
}
    return buildPacket$result;
  }
  function encode_1($receiver, input, fromIndex, toIndex, dst) {
    var start = {
  v: fromIndex};
    if (start.v >= toIndex) 
      return;
    var tail = prepareWriteHead_0(dst, 1, null);
    try {
      var size;
      while (true) {
        var block$result;
        var rc = encodeArrayImpl($receiver, input, start.v, toIndex, tail);
        if (!(rc >= 0)) {
          var message = 'Check failed.';
          throw IllegalStateException_init(message.toString());
        }
        start.v = start.v + rc | 0;
        if (start.v >= toIndex) {
          block$result = 0;
        } else if (rc === 0) {
          block$result = 8;
        } else {
          block$result = 1;
        }
        size = block$result;
        if (size <= 0) 
          break;
        tail = prepareWriteHead_0(dst, size, tail);
      }
    } finally     {
      afterHeadWrite_0(dst, tail);
    }
    encodeCompleteImpl($receiver, dst);
  }
  function decode($receiver, input, max) {
    if (max === void 0) 
      max = 2147483647;
    var a = Kotlin.Long.fromInt(max);
    var b = sizeEstimate(input);
    var $receiver_0 = StringBuilder_init_0((a.compareTo_11rb$(b) <= 0 ? a : b).toInt());
    decode_0($receiver, input, $receiver_0, max);
    return $receiver_0.toString();
  }
  function encodeArrayImpl($receiver, input, fromIndex, toIndex, dst) {
    var length = toIndex - fromIndex | 0;
    return encodeImpl($receiver, new CharArraySequence(input, fromIndex, length), 0, length, dst);
  }
  function encodeToByteArrayImpl1($receiver, input, fromIndex, toIndex) {
    if (fromIndex === void 0) 
      fromIndex = 0;
    if (toIndex === void 0) 
      toIndex = input.length;
    var start = {
  v: fromIndex};
    if (start.v >= toIndex) 
      return EmptyByteArray;
    var single = ChunkBuffer$Companion_getInstance().Pool.borrow();
    try {
      var rc = encodeImpl($receiver, input, start.v, toIndex, single);
      start.v = start.v + rc | 0;
      if (start.v === toIndex) {
        var result = new Int8Array(single.writePosition - single.readPosition | 0);
        readFully_2(single, result);
        return result;
      }
      var buildPacket$result;
      var builder = BytePacketBuilder_0(0);
      try {
        builder.appendSingleChunk_pvnryh$(single.duplicate());
        encodeToImpl($receiver, builder, input, start.v, toIndex);
        buildPacket$result = builder.build();
      }      catch (t) {
  if (Kotlin.isType(t, Throwable)) {
    builder.release();
    throw t;
  } else 
    throw t;
}
      return readBytes_0(buildPacket$result);
    } finally     {
      single.release_2bs5fo$(ChunkBuffer$Companion_getInstance().Pool);
    }
  }
  function sizeEstimate($receiver) {
    if (Kotlin.isType($receiver, ByteReadPacket)) 
      return $receiver.remaining;
    else if (Kotlin.isType($receiver, AbstractInput)) {
      var a = $receiver.remaining;
      var b = L16;
      return a.compareTo_11rb$(b) >= 0 ? a : b;
    } else 
      return L16;
  }
  function encodeCompleteImpl($receiver, dst) {
    var size = {
  v: 1};
    var bytesWritten = {
  v: 0};
    var tail = prepareWriteHead_0(dst, 1, null);
    try {
      while (true) {
        var view = tail;
        var before = view.limit - view.writePosition | 0;
        if (encodeComplete($receiver, view)) {
          size.v = 0;
        } else {
          size.v = size.v + 1 | 0;
        }
        bytesWritten.v = bytesWritten.v + (before - (view.limit - view.writePosition | 0)) | 0;
        if (!(size.v > 0)) 
          break;
        tail = prepareWriteHead_0(dst, 1, tail);
      }
    } finally     {
      afterHeadWrite_0(dst, tail);
    }
    return bytesWritten.v;
  }
  function encodeToImpl($receiver, destination, input, fromIndex, toIndex) {
    var start = {
  v: fromIndex};
    if (start.v >= toIndex) 
      return 0;
    var bytesWritten = {
  v: 0};
    var tail = prepareWriteHead_0(destination, 1, null);
    try {
      var size;
      while (true) {
        var view = tail;
        var block$result;
        var before = view.limit - view.writePosition | 0;
        var rc = encodeImpl($receiver, input, start.v, toIndex, view);
        if (!(rc >= 0)) {
          var message = 'Check failed.';
          throw IllegalStateException_init(message.toString());
        }
        start.v = start.v + rc | 0;
        bytesWritten.v = bytesWritten.v + (before - (view.limit - view.writePosition | 0)) | 0;
        if (start.v >= toIndex) {
          block$result = 0;
        } else if (rc === 0) {
          block$result = 8;
        } else {
          block$result = 1;
        }
        size = block$result;
        if (size <= 0) 
          break;
        tail = prepareWriteHead_0(destination, size, tail);
      }
    } finally     {
      afterHeadWrite_0(destination, tail);
    }
    bytesWritten.v = bytesWritten.v + encodeCompleteImpl($receiver, destination) | 0;
    return bytesWritten.v;
  }
  require$ObjectLiteral_0.prototype = Object.create(RequireFailureCapture.prototype);
  require$ObjectLiteral_0.prototype.constructor = require$ObjectLiteral_0;
  function require$ObjectLiteral_0(closure$message) {
    this.closure$message = closure$message;
    RequireFailureCapture.call(this);
  }
  require$ObjectLiteral_0.prototype.doFail = function() {
  throw IllegalArgumentException_init(this.closure$message());
};
  require$ObjectLiteral_0.$metadata$ = {
  kind: Kind_CLASS, 
  interfaces: [RequireFailureCapture]};
  function AbstractInput(head, remaining, pool) {
    AbstractInput$Companion_getInstance();
    if (head === void 0) 
      head = ChunkBuffer$Companion_getInstance().Empty;
    if (remaining === void 0) 
      remaining = remainingAll(head);
    if (pool === void 0) 
      pool = ChunkBuffer$Companion_getInstance().Pool;
    this.pool = pool;
    this._head_xb1tt$_l4zxc7$_0 = head;
    this.headMemory = head.memory;
    this.headPosition = head.readPosition;
    this.headEndExclusive = head.writePosition;
    this.tailRemaining_l8ht08$_7gwoj7$_0 = remaining.subtract(Kotlin.Long.fromInt(this.headEndExclusive - this.headPosition | 0));
    this.noMoreChunksAvailable_2n0tap$_0 = false;
  }
  Object.defineProperty(AbstractInput.prototype, '_head_xb1tt$_0', {
  get: function() {
  return this._head_xb1tt$_l4zxc7$_0;
}, 
  set: function(newHead) {
  this._head_xb1tt$_l4zxc7$_0 = newHead;
  this.headMemory = newHead.memory;
  this.headPosition = newHead.readPosition;
  this.headEndExclusive = newHead.writePosition;
}});
  Object.defineProperty(AbstractInput.prototype, 'head', {
  get: function() {
  var $receiver = this._head_xb1tt$_0;
  $receiver.discardUntilIndex_kcn2v3$(this.headPosition);
  return $receiver;
}, 
  set: function(newHead) {
  this._head_xb1tt$_0 = newHead;
}});
  Object.defineProperty(AbstractInput.prototype, 'headRemaining', {
  get: defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.AbstractInput.get_headRemaining', function() {
  return this.headEndExclusive - this.headPosition | 0;
}), 
  set: function(newRemaining) {
  this.updateHeadRemaining_za3lpa$(newRemaining);
}});
  Object.defineProperty(AbstractInput.prototype, 'tailRemaining_l8ht08$_0', {
  get: function() {
  return this.tailRemaining_l8ht08$_7gwoj7$_0;
}, 
  set: function(newValue) {
  var tmp$, tmp$_0, tmp$_1, tmp$_2;
  if (newValue.toNumber() < 0) {
    throw IllegalStateException_init(('tailRemaining is negative: ' + newValue.toString()).toString());
  }
  if (equals(newValue, L0)) {
    var tail = (tmp$_0 = (tmp$ = this._head_xb1tt$_0.next) != null ? remainingAll(tmp$) : null) != null ? tmp$_0 : L0;
    if (!equals(tail, L0)) {
      throw IllegalStateException_init(('tailRemaining is set 0 while there is a tail of size ' + tail.toString()).toString());
    }
  }
  var tailSize = (tmp$_2 = (tmp$_1 = this._head_xb1tt$_0.next) != null ? remainingAll(tmp$_1) : null) != null ? tmp$_2 : L0;
  if (!equals(newValue, tailSize)) {
    throw IllegalStateException_init(('tailRemaining is set to a value that is not consistent with the actual tail: ' + newValue.toString() + ' != ' + tailSize.toString()).toString());
  }
  this.tailRemaining_l8ht08$_7gwoj7$_0 = newValue;
}});
  Object.defineProperty(AbstractInput.prototype, 'byteOrder', {
  get: function() {
  return ByteOrder$BIG_ENDIAN_getInstance();
}, 
  set: function(newOrder) {
  if (newOrder !== ByteOrder$BIG_ENDIAN_getInstance()) {
    throw IllegalArgumentException_init('Only BIG_ENDIAN is supported.');
  }
}});
  AbstractInput.prototype.prefetch_8e33dg$ = function(min) {
  if (min.toNumber() <= 0) 
    return true;
  var headRemaining = this.headEndExclusive - this.headPosition | 0;
  if (headRemaining >= min.toNumber() || Kotlin.Long.fromInt(headRemaining).add(this.tailRemaining_l8ht08$_0).compareTo_11rb$(min) >= 0) 
    return true;
  return this.doPrefetch_15sylx$_0(min);
};
  AbstractInput.prototype.peekTo_afjyek$$default = function(destination, destinationOffset, offset, min, max) {
  var tmp$;
  this.prefetch_8e33dg$(min.add(offset));
  var current = this.head;
  var copied = L0;
  var skip = offset;
  var writePosition = destinationOffset;
  var b = Kotlin.Long.fromInt(destination.view.byteLength).subtract(destinationOffset);
  var maxCopySize = max.compareTo_11rb$(b) <= 0 ? max : b;
  while (copied.compareTo_11rb$(min) < 0 && copied.compareTo_11rb$(maxCopySize) < 0) {
    var $this = current;
    var chunkSize = $this.writePosition - $this.readPosition | 0;
    if (chunkSize > skip.toNumber()) {
      var a = Kotlin.Long.fromInt(chunkSize).subtract(skip);
      var b_0 = maxCopySize.subtract(copied);
      var size = a.compareTo_11rb$(b_0) <= 0 ? a : b_0;
      current.memory.copyTo_q2ka7j$(destination, Kotlin.Long.fromInt(current.readPosition).add(skip), size, writePosition);
      skip = L0;
      copied = copied.add(size);
      writePosition = writePosition.add(size);
    } else {
      skip = skip.subtract(Kotlin.Long.fromInt(chunkSize));
    }
    tmp$ = current.next;
    if (tmp$ == null) {
      break;
    }
    current = tmp$;
  }
  return copied;
};
  AbstractInput.prototype.doPrefetch_15sylx$_0 = function(min) {
  var tail = findTail(this._head_xb1tt$_0);
  var available = Kotlin.Long.fromInt(this.headEndExclusive - this.headPosition | 0).add(this.tailRemaining_l8ht08$_0);
  do {
    var next = this.fill();
    if (next == null) {
      this.noMoreChunksAvailable_2n0tap$_0 = true;
      return false;
    }
    var chunkSize = next.writePosition - next.readPosition | 0;
    if (tail === ChunkBuffer$Companion_getInstance().Empty) {
      this._head_xb1tt$_0 = next;
      tail = next;
    } else {
      tail.next = next;
      this.tailRemaining_l8ht08$_0 = this.tailRemaining_l8ht08$_0.add(Kotlin.Long.fromInt(chunkSize));
    }
    available = available.add(Kotlin.Long.fromInt(chunkSize));
  } while (available.compareTo_11rb$(min) < 0);
  return true;
};
  Object.defineProperty(AbstractInput.prototype, 'remaining', {
  get: function() {
  return Kotlin.Long.fromInt(this.headEndExclusive - this.headPosition | 0).add(this.tailRemaining_l8ht08$_0);
}});
  AbstractInput.prototype.canRead = function() {
  return this.headPosition !== this.headEndExclusive || !equals(this.tailRemaining_l8ht08$_0, L0);
};
  AbstractInput.prototype.hasBytes_za3lpa$ = function(n) {
  return Kotlin.Long.fromInt(this.headEndExclusive - this.headPosition | 0).add(this.tailRemaining_l8ht08$_0).toNumber() >= n;
};
  Object.defineProperty(AbstractInput.prototype, 'isEmpty', {
  get: function() {
  return this.endOfInput;
}});
  Object.defineProperty(AbstractInput.prototype, 'isNotEmpty', {
  get: function() {
  return get_isNotEmpty(this);
}});
  Object.defineProperty(AbstractInput.prototype, 'endOfInput', {
  get: function() {
  return (this.headEndExclusive - this.headPosition | 0) === 0 && equals(this.tailRemaining_l8ht08$_0, L0) && (this.noMoreChunksAvailable_2n0tap$_0 || this.doFill_nh863c$_0() == null);
}});
  AbstractInput.prototype.release = function() {
  var head = this.head;
  var empty = ChunkBuffer$Companion_getInstance().Empty;
  if (head !== empty) {
    this._head_xb1tt$_0 = empty;
    this.tailRemaining_l8ht08$_0 = L0;
    releaseAll(head, this.pool);
  }
};
  AbstractInput.prototype.close = function() {
  this.release();
  if (!this.noMoreChunksAvailable_2n0tap$_0) {
    this.noMoreChunksAvailable_2n0tap$_0 = true;
  }
  this.closeSource();
};
  AbstractInput.prototype.stealAll_8be2vx$ = function() {
  var head = this.head;
  var empty = ChunkBuffer$Companion_getInstance().Empty;
  if (head === empty) 
    return null;
  this._head_xb1tt$_0 = empty;
  this.tailRemaining_l8ht08$_0 = L0;
  return head;
};
  AbstractInput.prototype.steal_8be2vx$ = function() {
  var head = this.head;
  var next = head.next;
  var empty = ChunkBuffer$Companion_getInstance().Empty;
  if (head === empty) 
    return null;
  if (next == null) {
    this._head_xb1tt$_0 = empty;
    this.tailRemaining_l8ht08$_0 = L0;
  } else {
    this._head_xb1tt$_0 = next;
    this.tailRemaining_l8ht08$_0 = this.tailRemaining_l8ht08$_0.subtract(Kotlin.Long.fromInt(next.writePosition - next.readPosition | 0));
  }
  head.next = null;
  return head;
};
  AbstractInput.prototype.append_pvnryh$ = function(chain) {
  if (chain === ChunkBuffer$Companion_getInstance().Empty) 
    return;
  var size = remainingAll(chain);
  if (this._head_xb1tt$_0 === ChunkBuffer$Companion_getInstance().Empty) {
    this._head_xb1tt$_0 = chain;
    this.tailRemaining_l8ht08$_0 = size.subtract(Kotlin.Long.fromInt(this.headEndExclusive - this.headPosition | 0));
  } else {
    findTail(this._head_xb1tt$_0).next = chain;
    this.tailRemaining_l8ht08$_0 = this.tailRemaining_l8ht08$_0.add(size);
  }
};
  AbstractInput.prototype.tryWriteAppend_pvnryh$ = function(chain) {
  var tail = findTail(this.head);
  var size = chain.writePosition - chain.readPosition | 0;
  var tmp$ = size === 0;
  if (!tmp$) {
    tmp$ = (tail.limit - tail.writePosition | 0) < size;
  }
  if (tmp$) 
    return false;
  writeBufferAppend(tail, chain, size);
  if (this.head === tail) {
    this.headEndExclusive = tail.writePosition;
  } else {
    this.tailRemaining_l8ht08$_0 = this.tailRemaining_l8ht08$_0.add(Kotlin.Long.fromInt(size));
  }
  return true;
};
  AbstractInput.prototype.readByte = function() {
  var index = this.headPosition;
  var nextIndex = index + 1 | 0;
  if (nextIndex < this.headEndExclusive) {
    this.headPosition = nextIndex;
    return this.headMemory.view.getInt8(index);
  }
  return this.readByteSlow_6ep78p$_0();
};
  AbstractInput.prototype.readByteSlow_6ep78p$_0 = function() {
  var tmp$;
  var index = this.headPosition;
  if (index < this.headEndExclusive) {
    var value = this.headMemory.view.getInt8(index);
    this.headPosition = index;
    var head = this._head_xb1tt$_0;
    head.discardUntilIndex_kcn2v3$(index);
    this.ensureNext_j2u0py$(head);
    return value;
  }
  var head_0 = (tmp$ = this.prepareRead_za3lpa$(1)) != null ? tmp$ : prematureEndOfStream(1);
  var byte = head_0.readByte();
  completeReadHead_0(this, head_0);
  return byte;
};
  AbstractInput.prototype.readShort = function() {
  return readShort_3(this);
};
  AbstractInput.prototype.readFloat = function() {
  return readFloat_3(this);
};
  AbstractInput.prototype.readDouble = function() {
  return readDouble_3(this);
};
  AbstractInput.prototype.readInt = function() {
  return readInt_3(this);
};
  AbstractInput.prototype.readLong = function() {
  return readLong_3(this);
};
  AbstractInput.prototype.readFully_mj6st8$ = function(dst, offset, length) {
  var rc = readAvailable_13(this, dst, offset, length);
  if (rc !== length) 
    throw new EOFException('Not enough data in packet to fill buffer: ' + (length - rc | 0) + ' more bytes required');
};
  function AbstractInput$discard$lambda(closure$n) {
    return function() {
  return 'Negative discard is not allowed: ' + closure$n;
};
  }
  AbstractInput.prototype.discard_za3lpa$ = function(n) {
  if (!(n >= 0)) {
    var m = new require$ObjectLiteral_0(AbstractInput$discard$lambda(n));
    m.doFail();
  }
  return this.discardAsMuchAsPossible_3xuwvm$_0(n, 0);
};
  AbstractInput.prototype.discardExact_za3lpa$ = function(n) {
  if (this.discard_za3lpa$(n) !== n) 
    throw new EOFException('Unable to discard ' + n + ' bytes due to end of packet');
};
  AbstractInput.prototype.read_wbh1sp$ = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.AbstractInput.read_wbh1sp$', wrapFunction(function() {
  var prematureEndOfStream = _.io.ktor.utils.io.core.prematureEndOfStream_za3lpa$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  return function(block) {
  var tmp$;
  var buffer = (tmp$ = this.prepareRead_za3lpa$(1)) != null ? tmp$ : prematureEndOfStream(1);
  var positionBefore = buffer.readPosition;
  try {
    block(buffer);
  } finally   {
    var positionAfter = buffer.readPosition;
    if (positionAfter < positionBefore) {
      throw IllegalStateException_init("Buffer's position shouldn't be rewinded");
    }
    if (positionAfter === buffer.writePosition) {
      this.ensureNext_j2u0py$(buffer);
    } else {
      this.headPosition = positionAfter;
    }
  }
};
}));
  AbstractInput.prototype.read_a46nqp$ = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.AbstractInput.read_a46nqp$', wrapFunction(function() {
  var prematureEndOfStream = _.io.ktor.utils.io.core.prematureEndOfStream_za3lpa$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  return function(n, block) {
  var tmp$;
  var buffer = (tmp$ = this.prepareRead_za3lpa$(n)) != null ? tmp$ : prematureEndOfStream(n);
  var positionBefore = buffer.readPosition;
  try {
    block(buffer);
  } finally   {
    var positionAfter = buffer.readPosition;
    if (positionAfter < positionBefore) {
      throw IllegalStateException_init("Buffer's position shouldn't be rewinded");
    }
    if (positionAfter === buffer.writePosition) {
      this.ensureNext_j2u0py$(buffer);
    } else {
      this.headPosition = positionAfter;
    }
  }
};
}));
  AbstractInput.prototype.tryPeek = function() {
  var tmp$, tmp$_0;
  var head = this.head;
  if ((this.headEndExclusive - this.headPosition | 0) > 0) {
    return head.tryPeekByte();
  }
  if (equals(this.tailRemaining_l8ht08$_0, L0) && this.noMoreChunksAvailable_2n0tap$_0) 
    return -1;
  return (tmp$_0 = (tmp$ = this.prepareReadLoop_3ilf5z$_0(1, head)) != null ? tmp$.tryPeekByte() : null) != null ? tmp$_0 : -1;
};
  AbstractInput.prototype.peekTo_99qa0s$ = function(buffer) {
  var tmp$, tmp$_0;
  tmp$ = this.prepareReadHead_za3lpa$(1);
  if (tmp$ == null) {
    return -1;
  }
  var head = tmp$;
  var tmp$_1 = buffer.limit - buffer.writePosition | 0;
  var b = head.writePosition - head.readPosition | 0;
  var size = Math_0.min(tmp$_1, b);
  writeFully_12(Kotlin.isType(tmp$_0 = buffer, Buffer) ? tmp$_0 : throwCCE(), head, size);
  return size;
};
  AbstractInput.prototype.discard_s8cxhz$ = function(n) {
  if (n.toNumber() <= 0) 
    return L0;
  return this.discardAsMuchAsPossible_s35ayg$_0(n, L0);
};
  function AbstractInput$readAvailableCharacters$ObjectLiteral(closure$destination, closure$off) {
    this.closure$destination = closure$destination;
    this.idx_0 = closure$off;
  }
  AbstractInput$readAvailableCharacters$ObjectLiteral.prototype.append_s8itvh$ = function(c) {
  var tmp$;
  this.closure$destination[tmp$ = this.idx_0 , this.idx_0 = tmp$ + 1 | 0 , tmp$] = c;
  return this;
};
  AbstractInput$readAvailableCharacters$ObjectLiteral.prototype.append_gw00v9$ = function(csq) {
  var tmp$, tmp$_0;
  if (typeof csq === 'string') {
    getCharsInternal(csq, this.closure$destination, this.idx_0);
    this.idx_0 = this.idx_0 + csq.length | 0;
  } else if (csq != null) {
    tmp$ = csq.length;
    for (var i = 0; i < tmp$; i++) {
      this.closure$destination[tmp$_0 = this.idx_0 , this.idx_0 = tmp$_0 + 1 | 0 , tmp$_0] = csq.charCodeAt(i);
    }
  }
  return this;
};
  AbstractInput$readAvailableCharacters$ObjectLiteral.prototype.append_ezbsdh$ = function(csq, start, end) {
  throw UnsupportedOperationException_init_0();
};
  AbstractInput$readAvailableCharacters$ObjectLiteral.$metadata$ = {
  kind: Kind_CLASS, 
  interfaces: [Appendable]};
  AbstractInput.prototype.readAvailableCharacters_uc2sr1$ = function(destination, off, len) {
  if (this.endOfInput) 
    return -1;
  var out = new AbstractInput$readAvailableCharacters$ObjectLiteral(destination, off);
  return this.readText_5dvtqg$(out, 0, len);
};
  AbstractInput.prototype.readText_5dvtqg$ = function(out, min, max) {
  if (min === void 0) 
    min = 0;
  if (max === void 0) 
    max = 2147483647;
  if (Kotlin.Long.fromInt(max).compareTo_11rb$(this.remaining) >= 0) {
    var s = readTextExactBytes_0(this, this.remaining.toInt());
    out.append_gw00v9$(s);
    return s.length;
  }
  return this.readASCII_ka9uwb$_0(out, min, max);
};
  AbstractInput.prototype.readTextExact_a5kscm$ = function(out, exactCharacters) {
  this.readText_5dvtqg$(out, exactCharacters, exactCharacters);
};
  AbstractInput.prototype.readText_vux9f0$ = function(min, max) {
  if (min === void 0) 
    min = 0;
  if (max === void 0) 
    max = 2147483647;
  if (min === 0 && (max === 0 || this.endOfInput)) 
    return '';
  var remaining = this.remaining;
  if (remaining.toNumber() > 0 && Kotlin.Long.fromInt(max).compareTo_11rb$(remaining) >= 0) 
    return readTextExactBytes_0(this, remaining.toInt());
  var $receiver = StringBuilder_init_0(coerceAtMost_0(coerceAtLeast(min, 16), max));
  this.readASCII_ka9uwb$_0($receiver, min, max);
  return $receiver.toString();
};
  AbstractInput.prototype.readTextExact_za3lpa$ = function(exactCharacters) {
  return this.readText_vux9f0$(exactCharacters, exactCharacters);
};
  AbstractInput.prototype.readASCII_ka9uwb$_0 = function(out, min, max) {
  if (max === 0 && min === 0) 
    return 0;
  else if (this.endOfInput) 
    if (min === 0) 
    return 0;
  else 
    this.atLeastMinCharactersRequire_tmg3q9$_0(min);
  else if (max < min) 
    this.minShouldBeLess_yc63rj$_0(min, max);
  var copied = {
  v: 0};
  var utf8 = {
  v: false};
  takeWhile$break:
    do {
      var tmp$, tmp$_0;
      var release = true;
      tmp$ = prepareReadFirstHead(this, 1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      try {
        loop_label:
          do {
            var buffer = current;
            var block$result;
            var decodeASCII$result;
            decodeASCII$break:
              do {
                var memory = buffer.memory;
                var start = buffer.readPosition;
                var endExclusive = buffer.writePosition;
                for (var index = start; index < endExclusive; index++) {
                  var codepoint = memory.view.getInt8(index) & 255;
                  var tmp$_1 = (codepoint & 128) === 128;
                  if (!tmp$_1) {
                    var it = toBoxedChar(toChar(codepoint));
                    var consumer$result;
                    if (copied.v === max) {
                      consumer$result = false;
                    } else {
                      out.append_s8itvh$(unboxChar(it));
                      copied.v = copied.v + 1 | 0;
                      consumer$result = true;
                    }
                    tmp$_1 = !consumer$result;
                  }
                  if (tmp$_1) {
                    buffer.discardExact_za3lpa$(index - start | 0);
                    decodeASCII$result = false;
                    break decodeASCII$break;
                  }
                }
                var rc = endExclusive - start | 0;
                buffer.discardExact_za3lpa$(rc);
                decodeASCII$result = true;
              } while (false);
            var rc_0 = decodeASCII$result;
            if (rc_0) {
              block$result = true;
            } else if (copied.v === max) {
              block$result = false;
            } else {
              utf8.v = true;
              block$result = false;
            }
            if (!block$result) {
              break loop_label;
            }
            release = false;
            tmp$_0 = prepareReadNextHead(this, current);
            if (tmp$_0 == null) {
              break loop_label;
            }
            var next = tmp$_0;
            current = next;
            release = true;
          } while (true);
      } finally       {
        if (release) {
          completeReadHead_0(this, current);
        }
      }
    } while (false);
  if (utf8.v) {
    return copied.v + this.readUtf8_7u2r8p$_0(out, min - copied.v | 0, max - copied.v | 0) | 0;
  }
  if (copied.v < min) 
    this.prematureEndOfStreamChars_tv8k9w$_0(min, copied.v);
  return copied.v;
};
  AbstractInput.prototype.atLeastMinCharactersRequire_tmg3q9$_0 = function(min) {
  throw new EOFException('at least ' + min + ' characters required but no bytes available');
};
  AbstractInput.prototype.minShouldBeLess_yc63rj$_0 = function(min, max) {
  throw IllegalArgumentException_init('min should be less or equal to max but min = ' + min + ', max = ' + max);
};
  AbstractInput.prototype.prematureEndOfStreamChars_tv8k9w$_0 = function(min, copied) {
  throw new MalformedUTF8InputException('Premature end of stream: expected at least ' + min + ' chars but had only ' + copied);
};
  AbstractInput.prototype.readUtf8_7u2r8p$_0 = function(out, min, max) {
  var copied = {
  v: 0};
  takeWhileSize$break:
    do {
      var tmp$, tmp$_0;
      var release = true;
      tmp$ = prepareReadFirstHead(this, 1);
      if (tmp$ == null) {
        break takeWhileSize$break;
      }
      var current = tmp$;
      var size = 1;
      try {
        loop_label:
          do {
            var $this = current;
            var before = $this.writePosition - $this.readPosition | 0;
            var after;
            if (before >= size) {
              try {
                var buffer = current;
                var block$result;
                var decodeUTF8$result;
                decodeUTF8$break:
                  do {
                    var byteCount = {
  v: 0};
                    var value = {
  v: 0};
                    var lastByteCount = {
  v: 0};
                    var memory = buffer.memory;
                    var start = buffer.readPosition;
                    var endExclusive = buffer.writePosition;
                    for (var index = start; index < endExclusive; index++) {
                      var v = memory.view.getInt8(index) & 255;
                      if ((v & 128) === 0) {
                        if (byteCount.v !== 0) 
                          malformedByteCount(byteCount.v);
                        var it = toBoxedChar(toChar(v));
                        var consumer$result;
                        if (copied.v === max) {
                          consumer$result = false;
                        } else {
                          out.append_s8itvh$(unboxChar(it));
                          copied.v = copied.v + 1 | 0;
                          consumer$result = true;
                        }
                        if (!consumer$result) {
                          buffer.discardExact_za3lpa$(index - start | 0);
                          decodeUTF8$result = -1;
                          break decodeUTF8$break;
                        }
                      } else if (byteCount.v === 0) {
                        var mask = 128;
                        value.v = v;
                        for (var i = 1; i <= 6; i++) {
                          if ((value.v & mask) !== 0) {
                            value.v = value.v & ~mask;
                            mask = mask >> 1;
                            byteCount.v = byteCount.v + 1 | 0;
                          } else {
                            break;
                          }
                        }
                        lastByteCount.v = byteCount.v;
                        byteCount.v = byteCount.v - 1 | 0;
                        if (lastByteCount.v > (endExclusive - index | 0)) {
                          buffer.discardExact_za3lpa$(index - start | 0);
                          decodeUTF8$result = lastByteCount.v;
                          break decodeUTF8$break;
                        }
                      } else {
                        value.v = value.v << 6 | v & 127;
                        byteCount.v = byteCount.v - 1 | 0;
                        if (byteCount.v === 0) {
                          if (isBmpCodePoint(value.v)) {
                            var it_0 = toBoxedChar(toChar(value.v));
                            var consumer$result_0;
                            if (copied.v === max) {
                              consumer$result_0 = false;
                            } else {
                              out.append_s8itvh$(unboxChar(it_0));
                              copied.v = copied.v + 1 | 0;
                              consumer$result_0 = true;
                            }
                            if (!consumer$result_0) {
                              buffer.discardExact_za3lpa$(index - start - lastByteCount.v + 1 | 0);
                              decodeUTF8$result = -1;
                              break decodeUTF8$break;
                            }
                          } else if (!isValidCodePoint(value.v)) {
                            malformedCodePoint(value.v);
                          } else {
                            var it_1 = toBoxedChar(toChar(highSurrogate(value.v)));
                            var consumer$result_1;
                            if (copied.v === max) {
                              consumer$result_1 = false;
                            } else {
                              out.append_s8itvh$(unboxChar(it_1));
                              copied.v = copied.v + 1 | 0;
                              consumer$result_1 = true;
                            }
                            var tmp$_1 = !consumer$result_1;
                            if (!tmp$_1) {
                              var it_2 = toBoxedChar(toChar(lowSurrogate(value.v)));
                              var consumer$result_2;
                              if (copied.v === max) {
                                consumer$result_2 = false;
                              } else {
                                out.append_s8itvh$(unboxChar(it_2));
                                copied.v = copied.v + 1 | 0;
                                consumer$result_2 = true;
                              }
                              tmp$_1 = !consumer$result_2;
                            }
                            if (tmp$_1) {
                              buffer.discardExact_za3lpa$(index - start - lastByteCount.v + 1 | 0);
                              decodeUTF8$result = -1;
                              break decodeUTF8$break;
                            }
                          }
                          value.v = 0;
                        }
                      }
                    }
                    var rc = endExclusive - start | 0;
                    buffer.discardExact_za3lpa$(rc);
                    decodeUTF8$result = 0;
                  } while (false);
                var size_0 = decodeUTF8$result;
                if (size_0 === 0) {
                  block$result = 1;
                } else if (size_0 > 0) {
                  block$result = size_0;
                } else {
                  block$result = 0;
                }
                size = block$result;
              } finally               {
                var $this_0 = current;
                after = $this_0.writePosition - $this_0.readPosition | 0;
              }
            } else {
              after = before;
            }
            release = false;
            if (after === 0) 
              tmp$_0 = prepareReadNextHead(this, current);
            else {
              var tmp$_2 = after < size;
              if (!tmp$_2) {
                var $this_1 = current;
                tmp$_2 = ($this_1.capacity - $this_1.limit | 0) < 8;
              }
              if (tmp$_2) {
                completeReadHead_0(this, current);
                tmp$_0 = prepareReadFirstHead(this, size);
              } else 
                tmp$_0 = current;
            }
            var next = tmp$_0;
            if (next == null) {
              break loop_label;
            }
            current = next;
            release = true;
          } while (size > 0);
      } finally       {
        if (release) {
          completeReadHead_0(this, current);
        }
      }
    } while (false);
  if (copied.v < min) 
    this.prematureEndOfStreamChars_tv8k9w$_0(min, copied.v);
  return copied.v;
};
  AbstractInput.prototype.discardAsMuchAsPossible_s35ayg$_0 = function(n, skipped) {
  var tmp$;
  if (equals(n, L0)) 
    return skipped;
  tmp$ = this.prepareRead_za3lpa$(1);
  if (tmp$ == null) {
    return skipped;
  }
  var current = tmp$;
  var a = Kotlin.Long.fromInt(current.writePosition - current.readPosition | 0);
  var size = (a.compareTo_11rb$(n) <= 0 ? a : n).toInt();
  current.discardExact_za3lpa$(size);
  this.headPosition = this.headPosition + size | 0;
  this.afterRead_3wtcpm$_0(current);
  return this.discardAsMuchAsPossible_s35ayg$_0(n.subtract(Kotlin.Long.fromInt(size)), skipped.add(Kotlin.Long.fromInt(size)));
};
  AbstractInput.prototype.discardAsMuchAsPossible_3xuwvm$_0 = function(n, skipped) {
  var tmp$;
  if (n === 0) 
    return skipped;
  tmp$ = this.prepareRead_za3lpa$(1);
  if (tmp$ == null) {
    return skipped;
  }
  var current = tmp$;
  var a = current.writePosition - current.readPosition | 0;
  var size = Math_0.min(a, n);
  current.discardExact_za3lpa$(size);
  this.headPosition = this.headPosition + size | 0;
  this.afterRead_3wtcpm$_0(current);
  return this.discardAsMuchAsPossible_3xuwvm$_0(n - size | 0, skipped + size | 0);
};
  AbstractInput.prototype.readAsMuchAsPossible_bfvws4$_0 = function(array, offset, length, copied) {
  var tmp$, tmp$_0;
  if (length === 0) 
    return copied;
  tmp$ = this.prepareRead_za3lpa$(1);
  if (tmp$ == null) {
    return copied;
  }
  var current = tmp$;
  var b = current.writePosition - current.readPosition | 0;
  var size = Math_0.min(length, b);
  readFully_2(current, array, offset, size);
  this.headPosition = current.readPosition;
  var tmp$_1 = size !== length;
  if (!tmp$_1) {
    tmp$_1 = (current.writePosition - current.readPosition | 0) === 0;
  }
  if (tmp$_1) {
    this.afterRead_3wtcpm$_0(current);
    tmp$_0 = this.readAsMuchAsPossible_bfvws4$_0(array, offset + size | 0, length - size | 0, copied + size | 0);
  } else {
    tmp$_0 = copied + size | 0;
  }
  return tmp$_0;
};
  AbstractInput.prototype.notEnoughBytesAvailable_ku41vj$_0 = function(n) {
  throw new EOFException('Not enough data in packet (' + this.remaining.toString() + ') to read ' + n + ' byte(s)');
};
  AbstractInput.prototype.updateHeadRemaining_za3lpa$ = function(remaining) {
  var newPosition = this.headEndExclusive - remaining | 0;
  if (newPosition < 0) {
    throw IllegalArgumentException_init('Unable to update position to negative. newRemaining is too big.');
  }
  this.headPosition = newPosition;
};
  AbstractInput.prototype.prepareReadHead_za3lpa$ = function(minSize) {
  return this.prepareReadLoop_3ilf5z$_0(minSize, this.head);
};
  AbstractInput.prototype.ensureNextHead_j2u0py$ = function(current) {
  return this.ensureNext_j2u0py$(current);
};
  AbstractInput.prototype.ensureNext_j2u0py$ = function(current) {
  return this.ensureNext_pxb5qx$_0(current, ChunkBuffer$Companion_getInstance().Empty);
};
  AbstractInput.prototype.fixGapAfterRead_j2u0py$ = function(current) {
  var tmp$;
  tmp$ = current.next;
  if (tmp$ == null) {
    return this.fixGapAfterReadFallback_q485vf$_0(current);
  }
  var next = tmp$;
  var remaining = current.writePosition - current.readPosition | 0;
  var b = 8 - (current.capacity - current.limit | 0) | 0;
  var overrunSize = Math_0.min(remaining, b);
  if (next.startGap < overrunSize) {
    return this.fixGapAfterReadFallback_q485vf$_0(current);
  }
  restoreStartGap(next, overrunSize);
  if (remaining > overrunSize) {
    current.releaseEndGap_8be2vx$();
    this.headEndExclusive = current.writePosition;
    this.tailRemaining_l8ht08$_0 = this.tailRemaining_l8ht08$_0.add(Kotlin.Long.fromInt(overrunSize));
  } else {
    this._head_xb1tt$_0 = next;
    this.tailRemaining_l8ht08$_0 = this.tailRemaining_l8ht08$_0.subtract(Kotlin.Long.fromInt((next.writePosition - next.readPosition | 0) - overrunSize | 0));
    current.cleanNext();
    current.release_2bs5fo$(this.pool);
  }
};
  AbstractInput.prototype.fixGapAfterReadFallback_q485vf$_0 = function(current) {
  if (this.noMoreChunksAvailable_2n0tap$_0 && current.next == null) {
    this.headPosition = current.readPosition;
    this.headEndExclusive = current.writePosition;
    this.tailRemaining_l8ht08$_0 = L0;
    return;
  }
  var size = current.writePosition - current.readPosition | 0;
  var b = 8 - (current.capacity - current.limit | 0) | 0;
  var overrun = Math_0.min(size, b);
  if (size > overrun) {
    this.fixGapAfterReadFallbackUnreserved_13fwc$_0(current, size, overrun);
  } else {
    var new_0 = this.pool.borrow();
    new_0.reserveEndGap_za3lpa$(8);
    new_0.next = current.cleanNext();
    writeBufferAppend(new_0, current, size);
    this._head_xb1tt$_0 = new_0;
  }
  current.release_2bs5fo$(this.pool);
};
  AbstractInput.prototype.fixGapAfterReadFallbackUnreserved_13fwc$_0 = function(current, size, overrun) {
  var chunk1 = this.pool.borrow();
  var chunk2 = this.pool.borrow();
  chunk1.reserveEndGap_za3lpa$(8);
  chunk2.reserveEndGap_za3lpa$(8);
  chunk1.next = chunk2;
  chunk2.next = current.cleanNext();
  writeBufferAppend(chunk1, current, size - overrun | 0);
  writeBufferAppend(chunk2, current, overrun);
  this._head_xb1tt$_0 = chunk1;
  this.tailRemaining_l8ht08$_0 = remainingAll(chunk2);
};
  AbstractInput.prototype.ensureNext_pxb5qx$_0 = function(current, empty) {
  var tmp$;
  if (current === empty) {
    return this.doFill_nh863c$_0();
  }
  var next = current.cleanNext();
  current.release_2bs5fo$(this.pool);
  if (next == null) {
    this._head_xb1tt$_0 = empty;
    this.tailRemaining_l8ht08$_0 = L0;
    tmp$ = this.ensureNext_pxb5qx$_0(empty, empty);
  } else {
    if (next.writePosition > next.readPosition) {
      this._head_xb1tt$_0 = next;
      this.tailRemaining_l8ht08$_0 = this.tailRemaining_l8ht08$_0.subtract(Kotlin.Long.fromInt(next.writePosition - next.readPosition | 0));
      tmp$ = next;
    } else 
      tmp$ = this.ensureNext_pxb5qx$_0(next, empty);
  }
  return tmp$;
};
  AbstractInput.prototype.fill = function() {
  var buffer = this.pool.borrow();
  try {
    buffer.reserveEndGap_za3lpa$(8);
    var copied = this.fill_9etqdk$(buffer.memory, buffer.writePosition, buffer.limit - buffer.writePosition | 0);
    if (copied === 0) {
      this.noMoreChunksAvailable_2n0tap$_0 = true;
      if (!(buffer.writePosition > buffer.readPosition)) {
        buffer.release_2bs5fo$(this.pool);
        return null;
      }
    }
    buffer.commitWritten_za3lpa$(copied);
    return buffer;
  }  catch (t) {
  if (Kotlin.isType(t, Throwable)) {
    buffer.release_2bs5fo$(this.pool);
    throw t;
  } else 
    throw t;
}
};
  AbstractInput.prototype.markNoMoreChunksAvailable = function() {
  if (!this.noMoreChunksAvailable_2n0tap$_0) {
    this.noMoreChunksAvailable_2n0tap$_0 = true;
  }
};
  AbstractInput.prototype.doFill_nh863c$_0 = function() {
  if (this.noMoreChunksAvailable_2n0tap$_0) 
    return null;
  var chunk = this.fill();
  if (chunk == null) {
    this.noMoreChunksAvailable_2n0tap$_0 = true;
    return null;
  }
  this.appendView_4be14h$_0(chunk);
  return chunk;
};
  function AbstractInput$appendView$lambda() {
    throw IllegalStateException_init('It should be no tail remaining bytes if current tail is EmptyBuffer');
  }
  AbstractInput.prototype.appendView_4be14h$_0 = function(chunk) {
  var tmp$, tmp$_0;
  var tail = findTail(this._head_xb1tt$_0);
  if (tail === ChunkBuffer$Companion_getInstance().Empty) {
    this._head_xb1tt$_0 = chunk;
    if (!equals(this.tailRemaining_l8ht08$_0, L0)) {
      var m = new require$ObjectLiteral_0(AbstractInput$appendView$lambda);
      m.doFail();
    }
    this.tailRemaining_l8ht08$_0 = (tmp$_0 = (tmp$ = chunk.next) != null ? remainingAll(tmp$) : null) != null ? tmp$_0 : L0;
  } else {
    tail.next = chunk;
    this.tailRemaining_l8ht08$_0 = this.tailRemaining_l8ht08$_0.add(remainingAll(chunk));
  }
};
  AbstractInput.prototype.prepareRead_za3lpa$ = function(minSize) {
  var head = this.head;
  if ((this.headEndExclusive - this.headPosition | 0) >= minSize) 
    return head;
  return this.prepareReadLoop_3ilf5z$_0(minSize, head);
};
  AbstractInput.prototype.prepareRead_cvuqs$ = function(minSize, head) {
  if ((this.headEndExclusive - this.headPosition | 0) >= minSize) 
    return head;
  return this.prepareReadLoop_3ilf5z$_0(minSize, head);
};
  AbstractInput.prototype.prepareReadLoop_3ilf5z$_0 = function(minSize, head) {
  var tmp$, tmp$_0;
  var headSize = this.headEndExclusive - this.headPosition | 0;
  if (headSize >= minSize) 
    return head;
  tmp$_0 = (tmp$ = head.next) != null ? tmp$ : this.doFill_nh863c$_0();
  if (tmp$_0 == null) {
    return null;
  }
  var next = tmp$_0;
  if (headSize === 0) {
    if (head !== ChunkBuffer$Companion_getInstance().Empty) {
      this.releaseHead_pvnryh$(head);
    }
    return this.prepareReadLoop_3ilf5z$_0(minSize, next);
  } else {
    var desiredExtraBytes = minSize - headSize | 0;
    var copied = writeBufferAppend(head, next, desiredExtraBytes);
    this.headEndExclusive = head.writePosition;
    this.tailRemaining_l8ht08$_0 = this.tailRemaining_l8ht08$_0.subtract(Kotlin.Long.fromInt(copied));
    if (!(next.writePosition > next.readPosition)) {
      head.next = null;
      head.next = next.cleanNext();
      next.release_2bs5fo$(this.pool);
    } else {
      next.reserveStartGap_za3lpa$(copied);
    }
  }
  if ((head.writePosition - head.readPosition | 0) >= minSize) 
    return head;
  if (minSize > 8) 
    this.minSizeIsTooBig_5ot22f$_0(minSize);
  return this.prepareReadLoop_3ilf5z$_0(minSize, head);
};
  AbstractInput.prototype.minSizeIsTooBig_5ot22f$_0 = function(minSize) {
  throw IllegalStateException_init('minSize of ' + minSize + ' is too big (should be less than ' + '8' + ')');
};
  AbstractInput.prototype.afterRead_3wtcpm$_0 = function(head) {
  if ((head.writePosition - head.readPosition | 0) === 0) {
    this.releaseHead_pvnryh$(head);
  }
};
  AbstractInput.prototype.releaseHead_pvnryh$ = function(head) {
  var tmp$;
  var next = (tmp$ = head.cleanNext()) != null ? tmp$ : ChunkBuffer$Companion_getInstance().Empty;
  this._head_xb1tt$_0 = next;
  this.tailRemaining_l8ht08$_0 = this.tailRemaining_l8ht08$_0.subtract(Kotlin.Long.fromInt(next.writePosition - next.readPosition | 0));
  head.release_2bs5fo$(this.pool);
  return next;
};
  function AbstractInput$Companion() {
    AbstractInput$Companion_instance = this;
  }
  AbstractInput$Companion.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'Companion', 
  interfaces: []};
  var AbstractInput$Companion_instance = null;
  function AbstractInput$Companion_getInstance() {
    if (AbstractInput$Companion_instance === null) {
      new AbstractInput$Companion();
    }
    return AbstractInput$Companion_instance;
  }
  AbstractInput.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'AbstractInput', 
  interfaces: [Input]};
  function AbstractInput_init(head, remaining, pool, $this) {
    if (head === void 0) 
      head = IoBuffer$Companion_getInstance().Empty;
    if (remaining === void 0) 
      remaining = remainingAll(head);
    if (pool === void 0) 
      pool = ChunkBuffer$Companion_getInstance().Pool;
    $this = $this || Object.create(AbstractInput.prototype);
    var tmp$;
    AbstractInput.call($this, Kotlin.isType(tmp$ = head, ChunkBuffer) ? tmp$ : throwCCE(), remaining, pool);
    return $this;
  }
  function AbstractOutput(headerSizeHint, pool) {
    this.headerSizeHint_8gle5k$_0 = headerSizeHint;
    this.pool = pool;
    this._head_hofq54$_0 = null;
    this._tail_hhwkug$_0 = null;
    this.tailMemory_8be2vx$ = Memory$Companion_getInstance().Empty;
    this.tailPosition_8be2vx$ = 0;
    this.tailEndExclusive_8be2vx$_yr29se$_0 = 0;
    this.tailInitialPosition_f6hjsm$_0 = 0;
    this.chainedSize_8c83kq$_0 = 0;
    this.byteOrder_t3hxpd$_0 = ByteOrder$BIG_ENDIAN_getInstance();
  }
  Object.defineProperty(AbstractOutput.prototype, 'head_8be2vx$', {
  get: function() {
  var tmp$;
  return (tmp$ = this._head_hofq54$_0) != null ? tmp$ : ChunkBuffer$Companion_getInstance().Empty;
}});
  Object.defineProperty(AbstractOutput.prototype, 'tail', {
  get: function() {
  return this.prepareWriteHead_za3lpa$(1);
}});
  Object.defineProperty(AbstractOutput.prototype, 'currentTail', {
  get: function() {
  return this.prepareWriteHead_za3lpa$(1);
}, 
  set: function(newValue) {
  this.appendChain_pvnryh$(newValue);
}});
  Object.defineProperty(AbstractOutput.prototype, 'tailEndExclusive_8be2vx$', {
  get: function() {
  return this.tailEndExclusive_8be2vx$_yr29se$_0;
}, 
  set: function(tailEndExclusive) {
  this.tailEndExclusive_8be2vx$_yr29se$_0 = tailEndExclusive;
}});
  Object.defineProperty(AbstractOutput.prototype, 'tailRemaining_8be2vx$', {
  get: defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.AbstractOutput.get_tailRemaining_8be2vx$', function() {
  return this.tailEndExclusive_8be2vx$ - this.tailPosition_8be2vx$ | 0;
})});
  Object.defineProperty(AbstractOutput.prototype, '_size', {
  get: function() {
  return this.chainedSize_8c83kq$_0 + (this.tailPosition_8be2vx$ - this.tailInitialPosition_f6hjsm$_0) | 0;
}, 
  set: function(f) {
}});
  Object.defineProperty(AbstractOutput.prototype, 'byteOrder', {
  get: function() {
  return this.byteOrder_t3hxpd$_0;
}, 
  set: function(value) {
  this.byteOrder_t3hxpd$_0 = value;
  if (value !== ByteOrder$BIG_ENDIAN_getInstance()) {
    throw IllegalArgumentException_init('Only BIG_ENDIAN is supported. Use corresponding functions to read/write' + 'in the little endian');
  }
}});
  AbstractOutput.prototype.flush = function() {
  this.flushChain_iwxacw$_0();
};
  AbstractOutput.prototype.flushChain_iwxacw$_0 = function() {
  var tmp$;
  tmp$ = this.stealAll_8be2vx$();
  if (tmp$ == null) {
    return;
  }
  var oldTail = tmp$;
  try {
    var tmp$_0;
    var current = oldTail;
    do {
      var chunk = current;
      this.flush_9etqdk$(chunk.memory, chunk.readPosition, chunk.writePosition - chunk.readPosition | 0);
      tmp$_0 = current.next;
      if (tmp$_0 == null) {
        break;
      }
      current = tmp$_0;
    } while (true);
  } finally   {
    releaseAll(oldTail, this.pool);
  }
};
  AbstractOutput.prototype.stealAll_8be2vx$ = function() {
  var tmp$, tmp$_0;
  tmp$ = this._head_hofq54$_0;
  if (tmp$ == null) {
    return null;
  }
  var head = tmp$;
    (tmp$_0 = this._tail_hhwkug$_0) != null ? tmp$_0.commitWrittenUntilIndex_za3lpa$(this.tailPosition_8be2vx$) : null;
  this._head_hofq54$_0 = null;
  this._tail_hhwkug$_0 = null;
  this.tailPosition_8be2vx$ = 0;
  this.tailEndExclusive_8be2vx$ = 0;
  this.tailInitialPosition_f6hjsm$_0 = 0;
  this.chainedSize_8c83kq$_0 = 0;
  this.tailMemory_8be2vx$ = Memory$Companion_getInstance().Empty;
  return head;
};
  AbstractOutput.prototype.afterBytesStolen_8be2vx$ = function() {
  var head = this.head_8be2vx$;
  if (head !== ChunkBuffer$Companion_getInstance().Empty) {
    if (!(head.next == null)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
    head.resetForWrite();
    head.reserveStartGap_za3lpa$(this.headerSizeHint_8gle5k$_0);
    head.reserveEndGap_za3lpa$(8);
    this.tailPosition_8be2vx$ = head.writePosition;
    this.tailInitialPosition_f6hjsm$_0 = this.tailPosition_8be2vx$;
    this.tailEndExclusive_8be2vx$ = head.limit;
  }
};
  AbstractOutput.prototype.appendSingleChunk_pvnryh$ = function(buffer) {
  if (!(buffer.next == null)) {
    var message = 'It should be a single buffer chunk.';
    throw IllegalStateException_init(message.toString());
  }
  this.appendChainImpl_gq6rjy$_0(buffer, buffer, 0);
};
  AbstractOutput.prototype.appendChain_pvnryh$ = function(head) {
  var tail = findTail(head);
  var $receiver = remainingAll(head).subtract(Kotlin.Long.fromInt(tail.writePosition - tail.readPosition | 0));
  var name = 'total size increase';
  if ($receiver.toNumber() >= 2147483647) 
    failLongToIntConversion($receiver, name);
  var chainedSizeDelta = $receiver.toInt();
  this.appendChainImpl_gq6rjy$_0(head, tail, chainedSizeDelta);
};
  AbstractOutput.prototype.appendNewChunk_oskcze$_0 = function() {
  var new_0 = this.pool.borrow();
  new_0.reserveEndGap_za3lpa$(8);
  this.appendSingleChunk_pvnryh$(new_0);
  return new_0;
};
  AbstractOutput.prototype.appendChainImpl_gq6rjy$_0 = function(head, newTail, chainedSizeDelta) {
  var _tail = this._tail_hhwkug$_0;
  if (_tail == null) {
    this._head_hofq54$_0 = head;
    this.chainedSize_8c83kq$_0 = 0;
  } else {
    _tail.next = head;
    var tailPosition = this.tailPosition_8be2vx$;
    _tail.commitWrittenUntilIndex_za3lpa$(tailPosition);
    this.chainedSize_8c83kq$_0 = this.chainedSize_8c83kq$_0 + (tailPosition - this.tailInitialPosition_f6hjsm$_0) | 0;
  }
  this._tail_hhwkug$_0 = newTail;
  this.chainedSize_8c83kq$_0 = this.chainedSize_8c83kq$_0 + chainedSizeDelta | 0;
  this.tailMemory_8be2vx$ = newTail.memory;
  this.tailPosition_8be2vx$ = newTail.writePosition;
  this.tailInitialPosition_f6hjsm$_0 = newTail.readPosition;
  this.tailEndExclusive_8be2vx$ = newTail.limit;
};
  AbstractOutput.prototype.writeByte_s8j3t7$ = function(v) {
  var index = this.tailPosition_8be2vx$;
  if (index < this.tailEndExclusive_8be2vx$) {
    this.tailPosition_8be2vx$ = index + 1 | 0;
    this.tailMemory_8be2vx$.view.setInt8(index, v);
    return;
  }
  return this.writeByteFallback_f4tm7d$_0(v);
};
  AbstractOutput.prototype.writeByteFallback_f4tm7d$_0 = function(v) {
  this.appendNewChunk_oskcze$_0().writeByte_s8j3t7$(v);
  this.tailPosition_8be2vx$ = this.tailPosition_8be2vx$ + 1 | 0;
};
  AbstractOutput.prototype.close = function() {
  try {
    this.flush();
  } finally   {
    this.closeDestination();
  }
};
  AbstractOutput.prototype.append_s8itvh$ = function(c) {
  var tailPosition = this.tailPosition_8be2vx$;
  if ((this.tailEndExclusive_8be2vx$ - tailPosition | 0) >= 3) {
    var $receiver = this.tailMemory_8be2vx$;
    var v = c | 0;
    var putUtf8Char$result;
    if (0 <= v && v <= 127) {
      $receiver.view.setInt8(tailPosition, toByte(v));
      putUtf8Char$result = 1;
    } else if (128 <= v && v <= 2047) {
      $receiver.view.setInt8(tailPosition, toByte(192 | v >> 6 & 31));
      $receiver.view.setInt8(tailPosition + 1 | 0, toByte(128 | v & 63));
      putUtf8Char$result = 2;
    } else if (2048 <= v && v <= 65535) {
      $receiver.view.setInt8(tailPosition, toByte(224 | v >> 12 & 15));
      $receiver.view.setInt8(tailPosition + 1 | 0, toByte(128 | v >> 6 & 63));
      $receiver.view.setInt8(tailPosition + 2 | 0, toByte(128 | v & 63));
      putUtf8Char$result = 3;
    } else if (65536 <= v && v <= 1114111) {
      $receiver.view.setInt8(tailPosition, toByte(240 | v >> 18 & 7));
      $receiver.view.setInt8(tailPosition + 1 | 0, toByte(128 | v >> 12 & 63));
      $receiver.view.setInt8(tailPosition + 2 | 0, toByte(128 | v >> 6 & 63));
      $receiver.view.setInt8(tailPosition + 3 | 0, toByte(128 | v & 63));
      putUtf8Char$result = 4;
    } else {
      putUtf8Char$result = malformedCodePoint(v);
    }
    var size = putUtf8Char$result;
    this.tailPosition_8be2vx$ = tailPosition + size | 0;
    return this;
  }
  this.appendCharFallback_r92zh4$_0(c);
  return this;
};
  AbstractOutput.prototype.appendCharFallback_r92zh4$_0 = function(c) {
  var buffer = this.prepareWriteHead_za3lpa$(3);
  try {
    var $receiver = buffer.memory;
    var offset = buffer.writePosition;
    var v = c | 0;
    var putUtf8Char$result;
    if (0 <= v && v <= 127) {
      $receiver.view.setInt8(offset, toByte(v));
      putUtf8Char$result = 1;
    } else if (128 <= v && v <= 2047) {
      $receiver.view.setInt8(offset, toByte(192 | v >> 6 & 31));
      $receiver.view.setInt8(offset + 1 | 0, toByte(128 | v & 63));
      putUtf8Char$result = 2;
    } else if (2048 <= v && v <= 65535) {
      $receiver.view.setInt8(offset, toByte(224 | v >> 12 & 15));
      $receiver.view.setInt8(offset + 1 | 0, toByte(128 | v >> 6 & 63));
      $receiver.view.setInt8(offset + 2 | 0, toByte(128 | v & 63));
      putUtf8Char$result = 3;
    } else if (65536 <= v && v <= 1114111) {
      $receiver.view.setInt8(offset, toByte(240 | v >> 18 & 7));
      $receiver.view.setInt8(offset + 1 | 0, toByte(128 | v >> 12 & 63));
      $receiver.view.setInt8(offset + 2 | 0, toByte(128 | v >> 6 & 63));
      $receiver.view.setInt8(offset + 3 | 0, toByte(128 | v & 63));
      putUtf8Char$result = 4;
    } else {
      putUtf8Char$result = malformedCodePoint(v);
    }
    var size = putUtf8Char$result;
    buffer.commitWritten_za3lpa$(size);
    if (!(size >= 0)) {
      var message = "The returned value shouldn't be negative";
      throw IllegalStateException_init(message.toString());
    }
  } finally   {
    this.afterHeadWrite();
  }
};
  AbstractOutput.prototype.append_gw00v9$ = function(csq) {
  if (csq == null) {
    this.append_ezbsdh$('null', 0, 4);
  } else {
    this.append_ezbsdh$(csq, 0, csq.length);
  }
  return this;
};
  AbstractOutput.prototype.append_ezbsdh$ = function(csq, start, end) {
  if (csq == null) {
    return this.append_ezbsdh$('null', start, end);
  }
  writeText_0(this, csq, start, end, Charsets_getInstance().UTF_8);
  return this;
};
  AbstractOutput.prototype.writePacket_3uq2w4$ = function(p) {
  var foreignStolen = p.stealAll_8be2vx$();
  if (foreignStolen == null) {
    p.release();
    return;
  }
  var _tail = this._tail_hhwkug$_0;
  if (_tail == null) {
    this.appendChain_pvnryh$(foreignStolen);
    return;
  }
  this.writePacketMerging_jurx1f$_0(_tail, foreignStolen, p);
};
  AbstractOutput.prototype.writePacketMerging_jurx1f$_0 = function(tail, foreignStolen, p) {
  var tmp$, tmp$_0, tmp$_1;
  tail.commitWrittenUntilIndex_za3lpa$(this.tailPosition_8be2vx$);
  var lastSize = tail.writePosition - tail.readPosition | 0;
  var nextSize = foreignStolen.writePosition - foreignStolen.readPosition | 0;
  var maxCopySize = PACKET_MAX_COPY_SIZE;
  var tmp$_2 = nextSize < maxCopySize;
  if (tmp$_2) {
    tmp$_2 = nextSize <= ((tail.capacity - tail.limit | 0) + (tail.limit - tail.writePosition | 0) | 0);
  }
  if (tmp$_2) {
    tmp$ = nextSize;
  } else 
    tmp$ = -1;
  var appendSize = tmp$;
  if (lastSize < maxCopySize && lastSize <= foreignStolen.startGap && isExclusivelyOwned(foreignStolen)) {
    tmp$_0 = lastSize;
  } else 
    tmp$_0 = -1;
  var prependSize = tmp$_0;
  if (appendSize === -1 && prependSize === -1) {
    this.appendChain_pvnryh$(foreignStolen);
  } else if (prependSize === -1 || appendSize <= prependSize) {
    writeBufferAppend(tail, foreignStolen, (tail.limit - tail.writePosition | 0) + (tail.capacity - tail.limit | 0) | 0);
    this.afterHeadWrite();
    if ((tmp$_1 = foreignStolen.cleanNext()) != null) {
      this.appendChain_pvnryh$(tmp$_1);
    }
    foreignStolen.release_2bs5fo$(p.pool);
  } else if (appendSize === -1 || prependSize < appendSize) {
    this.writePacketSlowPrepend_h3cta3$_0(foreignStolen, tail);
  } else {
    throw IllegalStateException_init('prep = ' + prependSize + ', app = ' + appendSize);
  }
};
  AbstractOutput.prototype.writePacketSlowPrepend_h3cta3$_0 = function(foreignStolen, tail) {
  var tmp$;
  writeBufferPrepend(foreignStolen, tail);
  var tmp$_0;
  if ((tmp$ = this._head_hofq54$_0) != null) 
    tmp$_0 = tmp$;
  else {
    throw IllegalStateException_init("head should't be null since it is already handled in the fast-path".toString());
  }
  var _head = tmp$_0;
  if (_head === tail) {
    this._head_hofq54$_0 = foreignStolen;
  } else {
    var pre = _head;
    while (true) {
      var next = ensureNotNull(pre.next);
      if (next === tail) 
        break;
      pre = next;
    }
    pre.next = foreignStolen;
  }
  tail.release_2bs5fo$(this.pool);
  this._tail_hhwkug$_0 = findTail(foreignStolen);
};
  AbstractOutput.prototype.writePacket_f7stg6$ = function(p, n) {
  var tmp$;
  var remaining = {
  v: n};
  while (remaining.v > 0) {
    var headRemaining = p.headEndExclusive - p.headPosition | 0;
    if (headRemaining <= remaining.v) {
      remaining.v = remaining.v - headRemaining | 0;
      tmp$ = p.steal_8be2vx$();
      if (tmp$ == null) {
        throw new EOFException('Unexpected end of packet');
      }
      this.appendSingleChunk_pvnryh$(tmp$);
    } else {
      var tmp$_0;
      var buffer = (tmp$_0 = p.prepareRead_za3lpa$(1)) != null ? tmp$_0 : prematureEndOfStream(1);
      var positionBefore = buffer.readPosition;
      try {
        writeFully_20(this, buffer, remaining.v);
      } finally       {
        var positionAfter = buffer.readPosition;
        if (positionAfter < positionBefore) {
          throw IllegalStateException_init("Buffer's position shouldn't be rewinded");
        }
        if (positionAfter === buffer.writePosition) {
          p.ensureNext_j2u0py$(buffer);
        } else {
          p.headPosition = positionAfter;
        }
      }
      break;
    }
  }
};
  AbstractOutput.prototype.writePacket_pi0yjl$ = function(p, n) {
  var tmp$;
  var remaining = {
  v: n};
  while (remaining.v.compareTo_11rb$(L0) > 0) {
    var headRemaining = Kotlin.Long.fromInt(p.headEndExclusive - p.headPosition | 0);
    if (headRemaining.compareTo_11rb$(remaining.v) <= 0) {
      remaining.v = remaining.v.subtract(headRemaining);
      tmp$ = p.steal_8be2vx$();
      if (tmp$ == null) {
        throw new EOFException('Unexpected end of packet');
      }
      this.appendSingleChunk_pvnryh$(tmp$);
    } else {
      var tmp$_0;
      var buffer = (tmp$_0 = p.prepareRead_za3lpa$(1)) != null ? tmp$_0 : prematureEndOfStream(1);
      var positionBefore = buffer.readPosition;
      try {
        writeFully_20(this, buffer, remaining.v.toInt());
      } finally       {
        var positionAfter = buffer.readPosition;
        if (positionAfter < positionBefore) {
          throw IllegalStateException_init("Buffer's position shouldn't be rewinded");
        }
        if (positionAfter === buffer.writePosition) {
          p.ensureNext_j2u0py$(buffer);
        } else {
          p.headPosition = positionAfter;
        }
      }
      break;
    }
  }
};
  AbstractOutput.prototype.append_8chfmy$ = function(csq, start, end) {
  writeText_1(this, csq, start, end, Charsets_getInstance().UTF_8);
  return this;
};
  AbstractOutput.prototype.appendCharsTemplate_76xx5g$_0 = function(start, end, block) {
  var idx = start;
  if (idx >= end) 
    return idx;
  idx = block(this.prepareWriteHead_za3lpa$(1), idx);
  this.afterHeadWrite();
  while (idx < end) {
    idx = block(this.appendNewChunk_oskcze$_0(), idx);
    this.afterHeadWrite();
  }
  return idx;
};
  AbstractOutput.prototype.writeStringUtf8_61zpoe$ = function(s) {
  writeText_0(this, s);
};
  AbstractOutput.prototype.writeStringUtf8_6bul2c$ = function(cs) {
  writeText_0(this, cs);
};
  AbstractOutput.prototype.putUtf8Char_2kag8u$_0 = wrapFunction(function() {
  var InsufficientSpaceException_init = _.io.ktor.utils.io.core.InsufficientSpaceException_init_3m52m6$;
  return function($receiver, v) {
  if (1 <= v && v <= 127) {
    $receiver.writeByte_s8j3t7$(toByte(v));
    return 1;
  } else if (v > 2047) {
    var name = '3 bytes character';
    var memory = $receiver.memory;
    var start = $receiver.writePosition;
    var writeRemaining = $receiver.limit - start | 0;
    if (writeRemaining < 3) {
      throw InsufficientSpaceException_init(name, 3, writeRemaining);
    }
    var memory_0 = memory;
    var offset = start;
    memory_0.view.setInt8(offset, toByte(224 | v >> 12 & 15));
    memory_0.view.setInt8(offset + 1 | 0, toByte(128 | v >> 6 & 63));
    memory_0.view.setInt8(offset + 2 | 0, toByte(128 | v & 63));
    var rc = 3;
    $receiver.commitWritten_za3lpa$(rc);
    return 3;
  } else {
    var name_0 = '2 bytes character';
    var memory_1 = $receiver.memory;
    var start_0 = $receiver.writePosition;
    var writeRemaining_0 = $receiver.limit - start_0 | 0;
    if (writeRemaining_0 < 2) {
      throw InsufficientSpaceException_init(name_0, 2, writeRemaining_0);
    }
    var memory_2 = memory_1;
    var offset_0 = start_0;
    memory_2.view.setInt8(offset_0, toByte(192 | v >> 6 & 31));
    memory_2.view.setInt8(offset_0 + 1 | 0, toByte(128 | v & 63));
    var rc_0 = 2;
    $receiver.commitWritten_za3lpa$(rc_0);
    return 2;
  }
};
});
  AbstractOutput.prototype.release = function() {
  this.close();
};
  AbstractOutput.prototype.prepareWriteHead_za3lpa$ = function(n) {
  var tmp$;
  if ((this.tailEndExclusive_8be2vx$ - this.tailPosition_8be2vx$ | 0) >= n) {
    if ((tmp$ = this._tail_hhwkug$_0) != null) {
      tmp$.commitWrittenUntilIndex_za3lpa$(this.tailPosition_8be2vx$);
      return tmp$;
    }
  }
  return this.appendNewChunk_oskcze$_0();
};
  AbstractOutput.prototype.afterHeadWrite = function() {
  var tmp$;
  if ((tmp$ = this._tail_hhwkug$_0) != null) {
    this.tailPosition_8be2vx$ = tmp$.writePosition;
  }
};
  AbstractOutput.prototype.write_rtdvbs$ = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.AbstractOutput.write_rtdvbs$', wrapFunction(function() {
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  return function(size, block) {
  var buffer = this.prepareWriteHead_za3lpa$(size);
  try {
    if (!(block(buffer) >= 0)) {
      var message = "The returned value shouldn't be negative";
      throw IllegalStateException_init(message.toString());
    }
  } finally   {
    this.afterHeadWrite();
  }
};
}));
  AbstractOutput.prototype.addSize_za3lpa$ = function(n) {
  if (!(n >= 0)) {
    var message = 'It should be non-negative size increment: ' + n;
    throw IllegalStateException_init(message.toString());
  }
  if (!(n <= (this.tailEndExclusive_8be2vx$ - this.tailPosition_8be2vx$ | 0))) {
    var message_0 = 'Unable to mark more bytes than available: ' + n + ' > ' + (this.tailEndExclusive_8be2vx$ - this.tailPosition_8be2vx$ | 0);
    throw IllegalStateException_init(message_0.toString());
  }
  this.tailPosition_8be2vx$ = this.tailPosition_8be2vx$ + n | 0;
};
  AbstractOutput.prototype.last_99qa0s$ = function(buffer) {
  var tmp$;
  this.appendSingleChunk_pvnryh$(Kotlin.isType(tmp$ = buffer, ChunkBuffer) ? tmp$ : throwCCE());
};
  AbstractOutput.prototype.appendNewBuffer = function() {
  var tmp$;
  return Kotlin.isType(tmp$ = this.appendNewChunk_oskcze$_0(), IoBuffer) ? tmp$ : throwCCE();
};
  AbstractOutput.prototype.reset = function() {
};
  AbstractOutput.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'AbstractOutput', 
  interfaces: [Output, Appendable]};
  function AbstractOutput_init(pool, $this) {
    $this = $this || Object.create(AbstractOutput.prototype);
    AbstractOutput.call($this, 0, pool);
    return $this;
  }
  function AbstractOutput_init_0($this) {
    $this = $this || Object.create(AbstractOutput.prototype);
    AbstractOutput_init(ChunkBuffer$Companion_getInstance().Pool, $this);
    return $this;
  }
  function Buffer(memory) {
    Buffer$Companion_getInstance();
    this.memory = memory;
    this.readPosition_osecaz$_0 = 0;
    this.writePosition_oj9ite$_0 = 0;
    this.startGap_cakrhy$_0 = 0;
    this.limit_uf38zz$_0 = this.memory.view.byteLength;
    this.capacity = this.memory.view.byteLength;
    this.attachment = null;
  }
  Object.defineProperty(Buffer.prototype, 'readPosition', {
  get: function() {
  return this.readPosition_osecaz$_0;
}, 
  set: function(readPosition) {
  this.readPosition_osecaz$_0 = readPosition;
}});
  Object.defineProperty(Buffer.prototype, 'writePosition', {
  get: function() {
  return this.writePosition_oj9ite$_0;
}, 
  set: function(writePosition) {
  this.writePosition_oj9ite$_0 = writePosition;
}});
  Object.defineProperty(Buffer.prototype, 'startGap', {
  get: function() {
  return this.startGap_cakrhy$_0;
}, 
  set: function(startGap) {
  this.startGap_cakrhy$_0 = startGap;
}});
  Object.defineProperty(Buffer.prototype, 'limit', {
  get: function() {
  return this.limit_uf38zz$_0;
}, 
  set: function(limit) {
  this.limit_uf38zz$_0 = limit;
}});
  Object.defineProperty(Buffer.prototype, 'endGap', {
  get: defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.Buffer.get_endGap', function() {
  return this.capacity - this.limit | 0;
})});
  Object.defineProperty(Buffer.prototype, 'readRemaining', {
  get: defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.Buffer.get_readRemaining', function() {
  return this.writePosition - this.readPosition | 0;
})});
  Object.defineProperty(Buffer.prototype, 'writeRemaining', {
  get: defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.Buffer.get_writeRemaining', function() {
  return this.limit - this.writePosition | 0;
})});
  Buffer.prototype.discardExact_za3lpa$ = function(count) {
  if (count === void 0) {
    count = this.writePosition - this.readPosition | 0;
  }
  if (count === 0) 
    return;
  var newReadPosition = this.readPosition + count | 0;
  if (count < 0 || newReadPosition > this.writePosition) {
    discardFailed(count, this.writePosition - this.readPosition | 0);
  }
  this.readPosition = newReadPosition;
};
  Buffer.prototype.discard_za3lpa$ = function(count) {
  var b = this.writePosition - this.readPosition | 0;
  var size = Math_0.min(count, b);
  this.discardExact_za3lpa$(size);
  return size;
};
  Buffer.prototype.discard_s8cxhz$ = function(count) {
  var b = Kotlin.Long.fromInt(this.writePosition - this.readPosition | 0);
  var size = (count.compareTo_11rb$(b) <= 0 ? count : b).toInt();
  this.discardExact_za3lpa$(size);
  return Kotlin.Long.fromInt(size);
};
  Buffer.prototype.commitWritten_za3lpa$ = function(count) {
  var newWritePosition = this.writePosition + count | 0;
  if (count < 0 || newWritePosition > this.limit) {
    commitWrittenFailed(count, this.limit - this.writePosition | 0);
  }
  this.writePosition = newWritePosition;
};
  Buffer.prototype.commitWrittenUntilIndex_za3lpa$ = function(position) {
  var limit = this.limit;
  if (position < this.writePosition) {
    commitWrittenFailed(position - this.writePosition | 0, this.limit - this.writePosition | 0);
  }
  if (position >= limit) {
    if (position === limit) {
      this.writePosition = position;
      return false;
    }
    commitWrittenFailed(position - this.writePosition | 0, this.limit - this.writePosition | 0);
  }
  this.writePosition = position;
  return true;
};
  Buffer.prototype.discardUntilIndex_kcn2v3$ = function(position) {
  if (position < 0 || position > this.writePosition) {
    discardFailed(position - this.readPosition | 0, this.writePosition - this.readPosition | 0);
  }
  if (this.readPosition !== position) {
    this.readPosition = position;
  }
};
  Buffer.prototype.rewind_za3lpa$ = function(count) {
  if (count === void 0) 
    count = this.readPosition - this.startGap | 0;
  var newReadPosition = this.readPosition - count | 0;
  if (newReadPosition < this.startGap) {
    rewindFailed(count, this.readPosition - this.startGap | 0);
  }
  this.readPosition = newReadPosition;
};
  Buffer.prototype.reserveStartGap_za3lpa$ = function(startGap) {
  if (!(startGap >= 0)) {
    var message = "startGap shouldn't be negative: " + startGap;
    throw IllegalArgumentException_init(message.toString());
  }
  if (this.readPosition >= startGap) {
    this.startGap = startGap;
    return;
  }
  if (this.readPosition === this.writePosition) {
    if (startGap > this.limit) {
      startGapReservationFailedDueToLimit(this, startGap);
    }
    this.writePosition = startGap;
    this.readPosition = startGap;
    this.startGap = startGap;
    return;
  }
  startGapReservationFailed(this, startGap);
};
  Buffer.prototype.reserveEndGap_za3lpa$ = function(endGap) {
  if (!(endGap >= 0)) {
    var message = "endGap shouldn't be negative: " + endGap;
    throw IllegalArgumentException_init(message.toString());
  }
  var newLimit = this.capacity - endGap | 0;
  if (newLimit >= this.writePosition) {
    this.limit = newLimit;
    return;
  }
  if (newLimit < 0) {
    endGapReservationFailedDueToCapacity(this, endGap);
  }
  if (newLimit < this.startGap) {
    endGapReservationFailedDueToStartGap(this, endGap);
  }
  if (this.readPosition === this.writePosition) {
    this.limit = newLimit;
    this.readPosition = newLimit;
    this.writePosition = newLimit;
    return;
  }
  endGapReservationFailedDueToContent(this, endGap);
};
  Buffer.prototype.resetForRead = function() {
  this.startGap = 0;
  this.readPosition = 0;
  var capacity = this.capacity;
  this.writePosition = capacity;
};
  Buffer.prototype.resetForWrite = function() {
  this.resetForWrite_za3lpa$(this.capacity - this.startGap | 0);
};
  Buffer.prototype.resetForWrite_za3lpa$ = function(limit) {
  var startGap = this.startGap;
  this.readPosition = startGap;
  this.writePosition = startGap;
  this.limit = limit;
};
  Buffer.prototype.releaseGaps_8be2vx$ = function() {
  this.releaseStartGap_kcn2v3$(0);
  this.releaseEndGap_8be2vx$();
};
  Buffer.prototype.releaseEndGap_8be2vx$ = function() {
  this.limit = this.capacity;
};
  Buffer.prototype.releaseStartGap_kcn2v3$ = function(newReadPosition) {
  if (!(newReadPosition >= 0)) {
    var message = "newReadPosition shouldn't be negative: " + newReadPosition;
    throw IllegalArgumentException_init(message.toString());
  }
  if (!(newReadPosition <= this.readPosition)) {
    var message_0 = "newReadPosition shouldn't be ahead of the read position: " + newReadPosition + ' > ' + this.readPosition;
    throw IllegalArgumentException_init(message_0.toString());
  }
  this.readPosition = newReadPosition;
  if (this.startGap > newReadPosition) {
    this.startGap = newReadPosition;
  }
};
  Buffer.prototype.duplicateTo_b4g5fm$ = function(copy) {
  copy.limit = this.limit;
  copy.startGap = this.startGap;
  copy.readPosition = this.readPosition;
  copy.writePosition = this.writePosition;
};
  Buffer.prototype.duplicate = function() {
  var $receiver = new Buffer(this.memory);
  $receiver.duplicateTo_b4g5fm$($receiver);
  return $receiver;
};
  Buffer.prototype.tryPeekByte = function() {
  var readPosition = this.readPosition;
  if (readPosition === this.writePosition) 
    return -1;
  return this.memory.view.getInt8(readPosition) & 255;
};
  Buffer.prototype.tryReadByte = function() {
  var readPosition = this.readPosition;
  if (readPosition === this.writePosition) 
    return -1;
  this.readPosition = readPosition + 1 | 0;
  return this.memory.view.getInt8(readPosition) & 255;
};
  Buffer.prototype.readByte = function() {
  var readPosition = this.readPosition;
  if (readPosition === this.writePosition) {
    throw new EOFException('No readable bytes available.');
  }
  this.readPosition = readPosition + 1 | 0;
  return this.memory.view.getInt8(readPosition);
};
  Buffer.prototype.writeByte_s8j3t7$ = function(value) {
  var writePosition = this.writePosition;
  if (writePosition === this.limit) {
    throw new InsufficientSpaceException('No free space in the buffer to write a byte');
  }
  this.memory.view.setInt8(writePosition, value);
  this.writePosition = writePosition + 1 | 0;
};
  Buffer.prototype.reset = function() {
  this.releaseGaps_8be2vx$();
  this.resetForWrite();
};
  Buffer.prototype.toString = function() {
  return 'Buffer(' + (this.writePosition - this.readPosition | 0) + ' used, ' + (this.limit - this.writePosition | 0) + ' free, ' + (this.startGap + (this.capacity - this.limit | 0) | 0) + ' reserved of ' + this.capacity + ')';
};
  function Buffer$Companion() {
    Buffer$Companion_instance = this;
    this.ReservedSize = 8;
  }
  Object.defineProperty(Buffer$Companion.prototype, 'Empty', {
  get: function() {
  return IoBuffer$Companion_getInstance().Empty;
}});
  Buffer$Companion.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'Companion', 
  interfaces: []};
  var Buffer$Companion_instance = null;
  function Buffer$Companion_getInstance() {
    if (Buffer$Companion_instance === null) {
      new Buffer$Companion();
    }
    return Buffer$Companion_instance;
  }
  Buffer.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'Buffer', 
  interfaces: []};
  var canRead = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.canRead_abnlgx$', function($receiver) {
  return $receiver.writePosition > $receiver.readPosition;
});
  var canWrite = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.canWrite_abnlgx$', function($receiver) {
  return $receiver.limit > $receiver.writePosition;
});
  var read_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.read_kmyesx$', function($receiver, block) {
  var rc = block($receiver.memory, $receiver.readPosition, $receiver.writePosition);
  $receiver.discardExact_za3lpa$(rc);
  return rc;
});
  var write_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.write_kmyesx$', function($receiver, block) {
  var rc = block($receiver.memory, $receiver.writePosition, $receiver.limit);
  $receiver.commitWritten_za3lpa$(rc);
  return rc;
});
  function discardFailed(count, readRemaining) {
    throw new EOFException('Unable to discard ' + count + ' bytes: only ' + readRemaining + ' available for reading');
  }
  function commitWrittenFailed(count, writeRemaining) {
    throw new EOFException('Unable to discard ' + count + ' bytes: only ' + writeRemaining + ' available for writing');
  }
  function rewindFailed(count, rewindRemaining) {
    throw IllegalArgumentException_init('Unable to rewind ' + count + ' bytes: only ' + rewindRemaining + ' could be rewinded');
  }
  function startGapReservationFailedDueToLimit($receiver, startGap) {
    if (startGap > $receiver.capacity) {
      throw IllegalArgumentException_init('Start gap ' + startGap + ' is bigger than the capacity ' + $receiver.capacity);
    }
    throw IllegalStateException_init('Unable to reserve ' + startGap + ' start gap: there are already ' + ($receiver.capacity - $receiver.limit | 0) + ' bytes reserved in the end');
  }
  function startGapReservationFailed($receiver, startGap) {
    throw IllegalStateException_init('Unable to reserve ' + startGap + ' start gap: ' + ('there are already ' + ($receiver.writePosition - $receiver.readPosition | 0) + ' content bytes starting at offset ' + $receiver.readPosition));
  }
  function endGapReservationFailedDueToCapacity($receiver, endGap) {
    throw IllegalArgumentException_init('End gap ' + endGap + ' is too big: capacity is ' + $receiver.capacity);
  }
  function endGapReservationFailedDueToStartGap($receiver, endGap) {
    throw IllegalArgumentException_init('End gap ' + endGap + ' is too big: there are already ' + $receiver.startGap + ' bytes reserved in the beginning');
  }
  function endGapReservationFailedDueToContent($receiver, endGap) {
    throw IllegalArgumentException_init('Unable to reserve end gap ' + endGap + ':' + (' there are already ' + ($receiver.writePosition - $receiver.readPosition | 0) + ' content bytes at offset ' + $receiver.readPosition));
  }
  function restoreStartGap($receiver, size) {
    $receiver.releaseStartGap_kcn2v3$($receiver.readPosition - size | 0);
  }
  function InsufficientSpaceException(message) {
    if (message === void 0) 
      message = 'Not enough free space';
    Exception_init(message, this);
    this.name = 'InsufficientSpaceException';
  }
  InsufficientSpaceException.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'InsufficientSpaceException', 
  interfaces: [Exception]};
  function InsufficientSpaceException_init(size, availableSpace, $this) {
    $this = $this || Object.create(InsufficientSpaceException.prototype);
    InsufficientSpaceException.call($this, 'Not enough free space to write ' + size + ' bytes, available ' + availableSpace + ' bytes.');
    return $this;
  }
  function InsufficientSpaceException_init_0(name, size, availableSpace, $this) {
    $this = $this || Object.create(InsufficientSpaceException.prototype);
    InsufficientSpaceException.call($this, 'Not enough free space to write ' + name + ' of ' + size + ' bytes, available ' + availableSpace + ' bytes.');
    return $this;
  }
  function InsufficientSpaceException_init_1(size, availableSpace, $this) {
    $this = $this || Object.create(InsufficientSpaceException.prototype);
    InsufficientSpaceException.call($this, 'Not enough free space to write ' + size.toString() + ' bytes, available ' + availableSpace.toString() + ' bytes.');
    return $this;
  }
  function writeBufferAppend($receiver, other, maxSize) {
    var a = other.writePosition - other.readPosition | 0;
    var size = Math_0.min(a, maxSize);
    if (($receiver.limit - $receiver.writePosition | 0) <= size) {
      writeBufferAppendUnreserve($receiver, size);
    }
    other.memory.copyTo_ubllm2$($receiver.memory, other.readPosition, size, $receiver.writePosition);
    var rc = size;
    other.discardExact_za3lpa$(rc);
    var rc_0 = rc;
    $receiver.commitWritten_za3lpa$(rc_0);
    return rc_0;
  }
  function writeBufferPrepend($receiver, other) {
    var size = other.writePosition - other.readPosition | 0;
    var readPosition = $receiver.readPosition;
    if (readPosition < size) {
      throw IllegalArgumentException_init('Not enough space in the beginning to prepend bytes');
    }
    var newReadPosition = readPosition - size | 0;
    other.memory.copyTo_ubllm2$($receiver.memory, other.readPosition, size, newReadPosition);
    other.discardExact_za3lpa$(size);
    $receiver.releaseStartGap_kcn2v3$(newReadPosition);
    return size;
  }
  function writeBufferAppendUnreserve($receiver, writeSize) {
    if ((($receiver.limit - $receiver.writePosition | 0) + ($receiver.capacity - $receiver.limit | 0) | 0) < writeSize) {
      throw IllegalArgumentException_init("Can't append buffer: not enough free space at the end");
    }
    var newWritePosition = $receiver.writePosition + writeSize | 0;
    var overrunSize = newWritePosition - $receiver.limit | 0;
    if (overrunSize > 0) {
      $receiver.releaseEndGap_8be2vx$();
    }
  }
  require$ObjectLiteral_1.prototype = Object.create(RequireFailureCapture.prototype);
  require$ObjectLiteral_1.prototype.constructor = require$ObjectLiteral_1;
  function require$ObjectLiteral_1(closure$message) {
    this.closure$message = closure$message;
    RequireFailureCapture.call(this);
  }
  require$ObjectLiteral_1.prototype.doFail = function() {
  throw IllegalArgumentException_init(this.closure$message());
};
  require$ObjectLiteral_1.$metadata$ = {
  kind: Kind_CLASS, 
  interfaces: [RequireFailureCapture]};
  function fill$lambda(closure$times) {
    return function() {
  return "times shouldn't be negative: " + closure$times;
};
  }
  function fill$lambda_0(closure$times, this$fill) {
    return function() {
  var tmp$ = "times shouldn't be greater than the write remaining space: " + closure$times + ' > ';
  var $this = this$fill;
  return tmp$ + ($this.limit - $this.writePosition | 0);
};
  }
  function fill($receiver, times, value) {
    if (!(times >= 0)) {
      var m = new require$ObjectLiteral_1(fill$lambda(times));
      m.doFail();
    }
    if (!(times <= ($receiver.limit - $receiver.writePosition | 0))) {
      var m_0 = new require$ObjectLiteral_1(fill$lambda_0(times, $receiver));
      m_0.doFail();
    }
    fill_3($receiver.memory, $receiver.writePosition, times, value);
    $receiver.commitWritten_za3lpa$(times);
  }
  function fill_0($receiver, times, value) {
    fill($receiver, times, value.data);
  }
  function fill_1($receiver, n, v) {
    if (n.toNumber() >= 2147483647) 
      failLongToIntConversion(n, 'n');
    fill($receiver, n.toInt(), v);
  }
  function pushBack($receiver, n) {
    $receiver.rewind_za3lpa$(n);
  }
  function makeView($receiver) {
    return $receiver.duplicate();
  }
  function makeView_0($receiver) {
    return $receiver.duplicate();
  }
  function flush($receiver) {
  }
  function appendChars($receiver, csq, start, end) {
    return appendChars_0($receiver, new CharArraySequence(csq, 0, csq.length), start, end);
  }
  function appendChars_0($receiver, csq, start, end) {
    var charactersWritten = {
  v: null};
    var result = encodeUTF8_0($receiver.memory, csq, start, end, $receiver.writePosition, $receiver.limit);
    charactersWritten.v = (new UShort_init(toShort(result.value >>> 16))).data & 65535;
    var rc = (new UShort_init(toShort(result.value & 65535))).data & 65535;
    $receiver.commitWritten_za3lpa$(rc);
    return start + charactersWritten.v | 0;
  }
  function append($receiver, c) {
    var memory = $receiver.memory;
    var start = $receiver.writePosition;
    var endExclusive = $receiver.limit;
    var block$result;
    var v = c | 0;
    var putUtf8Char$result;
    if (0 <= v && v <= 127) {
      memory.view.setInt8(start, toByte(v));
      putUtf8Char$result = 1;
    } else if (128 <= v && v <= 2047) {
      memory.view.setInt8(start, toByte(192 | v >> 6 & 31));
      memory.view.setInt8(start + 1 | 0, toByte(128 | v & 63));
      putUtf8Char$result = 2;
    } else if (2048 <= v && v <= 65535) {
      memory.view.setInt8(start, toByte(224 | v >> 12 & 15));
      memory.view.setInt8(start + 1 | 0, toByte(128 | v >> 6 & 63));
      memory.view.setInt8(start + 2 | 0, toByte(128 | v & 63));
      putUtf8Char$result = 3;
    } else if (65536 <= v && v <= 1114111) {
      memory.view.setInt8(start, toByte(240 | v >> 18 & 7));
      memory.view.setInt8(start + 1 | 0, toByte(128 | v >> 12 & 63));
      memory.view.setInt8(start + 2 | 0, toByte(128 | v >> 6 & 63));
      memory.view.setInt8(start + 3 | 0, toByte(128 | v & 63));
      putUtf8Char$result = 4;
    } else {
      putUtf8Char$result = malformedCodePoint(v);
    }
    var size = putUtf8Char$result;
    if (size > (endExclusive - start | 0)) {
      block$result = appendFailed(1);
    } else {
      block$result = size;
    }
    var rc = block$result;
    $receiver.commitWritten_za3lpa$(rc);
    return $receiver;
  }
  function append_0($receiver, csq) {
    if (csq == null) {
      return append_0($receiver, 'null');
    }
    return append_1($receiver, csq, 0, csq.length);
  }
  function append_1($receiver, csq, start, end) {
    if (csq == null) {
      return append_1($receiver, 'null', start, end);
    }
    if (appendChars_0($receiver, csq, start, end) !== end) {
      appendFailed(end - start | 0);
    }
    return $receiver;
  }
  function appendFailed(length) {
    throw new BufferLimitExceededException('Not enough free space available to write ' + length + ' character(s).');
  }
  function append_2($receiver, csq, start, end) {
    return append_1($receiver, new CharArraySequence(csq, 0, csq.length), start, end);
  }
  function readText($receiver, decoder, out, lastBuffer, max) {
    if (max === void 0) 
      max = 2147483647;
    return decodeBuffer(decoder, $receiver, out, lastBuffer, max);
  }
  function release($receiver, pool) {
    var tmp$, tmp$_0;
    (Kotlin.isType(tmp$ = $receiver, ChunkBuffer) ? tmp$ : throwCCE()).release_2bs5fo$(Kotlin.isType(tmp$_0 = pool, ObjectPool) ? tmp$_0 : throwCCE());
  }
  function tryPeek($receiver) {
    return $receiver.tryPeekByte();
  }
  function readFully_1($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    var memory = $receiver.memory;
    var start = $receiver.readPosition;
    if (($receiver.writePosition - start | 0) < length) {
      throw new EOFException('Not enough bytes available to read ' + length + ' bytes');
    }
    for (var index = 0; index < length; index++) {
      dst[index + offset | 0] = memory.view.getInt8(index + start | 0);
    }
    var rc = length;
    $receiver.discardExact_za3lpa$(rc);
  }
  function get_byteOrder($receiver) {
    return ByteOrder$BIG_ENDIAN_getInstance();
  }
  function set_byteOrder($receiver, newOrder) {
    if (newOrder !== ByteOrder$BIG_ENDIAN_getInstance()) 
      throw UnsupportedOperationException_init('Only BIG_ENDIAN is supported');
  }
  var DEFAULT_BUFFER_SIZE;
  var withBuffer = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.withBuffer_3o3i6e$', wrapFunction(function() {
  var bits = _.io.ktor.utils.io.bits;
  var Buffer_init = _.io.ktor.utils.io.core.Buffer;
  return function(size, block) {
  return block(new Buffer_init(bits.DefaultAllocator.alloc_za3lpa$(size)));
};
}));
  var withBuffer_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.withBuffer_75fp88$', function(pool, block) {
  var tmp$;
  var instance = pool.borrow();
  try {
    tmp$ = block(instance);
  } finally   {
    pool.recycle_trkh7z$(instance);
  }
  return tmp$;
});
  var withChunkBuffer = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.withChunkBuffer_24tmir$', function(pool, block) {
  var tmp$;
  var instance = pool.borrow();
  try {
    tmp$ = block(instance);
  } finally   {
    instance.release_2bs5fo$(pool);
  }
  return tmp$;
});
  var DefaultChunkedBufferPool;
  function DefaultBufferPool(bufferSize, capacity, allocator) {
    if (bufferSize === void 0) 
      bufferSize = 4096;
    if (capacity === void 0) 
      capacity = 1000;
    if (allocator === void 0) 
      allocator = DefaultAllocator_getInstance();
    DefaultPool.call(this, capacity);
    this.bufferSize_0 = bufferSize;
    this.allocator_0 = allocator;
  }
  DefaultBufferPool.prototype.produceInstance = function() {
  return new IoBuffer(this.allocator_0.alloc_za3lpa$(this.bufferSize_0), null);
};
  DefaultBufferPool.prototype.disposeInstance_trkh7z$ = function(instance) {
  this.allocator_0.free_vn6nzs$(instance.memory);
  DefaultPool.prototype.disposeInstance_trkh7z$.call(this, instance);
  instance.unlink_8be2vx$();
};
  DefaultBufferPool.prototype.validateInstance_trkh7z$ = function(instance) {
  DefaultPool.prototype.validateInstance_trkh7z$.call(this, instance);
  if (instance === IoBuffer$Companion_getInstance().Empty) {
    throw IllegalStateException_init("IoBuffer.Empty couldn't be recycled".toString());
  }
  if (!(instance !== IoBuffer$Companion_getInstance().Empty)) {
    var message = "Empty instance couldn't be recycled";
    throw IllegalStateException_init(message.toString());
  }
  if (!(instance !== Buffer$Companion_getInstance().Empty)) {
    var message_0 = "Empty instance couldn't be recycled";
    throw IllegalStateException_init(message_0.toString());
  }
  if (!(instance !== ChunkBuffer$Companion_getInstance().Empty)) {
    var message_1 = "Empty instance couldn't be recycled";
    throw IllegalStateException_init(message_1.toString());
  }
  if (!(instance.referenceCount === 0)) {
    var message_2 = 'Unable to clear buffer: it is still in use.';
    throw IllegalStateException_init(message_2.toString());
  }
  if (!(instance.next == null)) {
    var message_3 = "Recycled instance shouldn't be a part of a chain.";
    throw IllegalStateException_init(message_3.toString());
  }
  if (!(instance.origin == null)) {
    var message_4 = "Recycled instance shouldn't be a view or another buffer.";
    throw IllegalStateException_init(message_4.toString());
  }
};
  DefaultBufferPool.prototype.clearInstance_trkh7z$ = function(instance) {
  var $receiver = DefaultPool.prototype.clearInstance_trkh7z$.call(this, instance);
  $receiver.unpark_8be2vx$();
  $receiver.reset();
  return $receiver;
};
  DefaultBufferPool.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'DefaultBufferPool', 
  interfaces: [DefaultPool]};
  require$ObjectLiteral_2.prototype = Object.create(RequireFailureCapture.prototype);
  require$ObjectLiteral_2.prototype.constructor = require$ObjectLiteral_2;
  function require$ObjectLiteral_2(closure$message) {
    this.closure$message = closure$message;
    RequireFailureCapture.call(this);
  }
  require$ObjectLiteral_2.prototype.doFail = function() {
  throw IllegalArgumentException_init(this.closure$message());
};
  require$ObjectLiteral_2.$metadata$ = {
  kind: Kind_CLASS, 
  interfaces: [RequireFailureCapture]};
  function readExact$lambda$lambda(closure$name, closure$size) {
    return function() {
  throw new EOFException('Not enough bytes to read a ' + closure$name + ' of size ' + closure$size + '.');
};
  }
  var readExact$lambda = wrapFunction(function() {
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var RequireFailureCapture = _.io.ktor.utils.io.core.internal.RequireFailureCapture;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  require$ObjectLiteral.prototype = Object.create(RequireFailureCapture.prototype);
  require$ObjectLiteral.prototype.constructor = require$ObjectLiteral;
  function require$ObjectLiteral(closure$message) {
    this.closure$message = closure$message;
    RequireFailureCapture.call(this);
  }
  require$ObjectLiteral.prototype.doFail = function() {
  throw IllegalArgumentException_init(this.closure$message());
};
  require$ObjectLiteral.$metadata$ = {
  kind: Kind_CLASS, 
  interfaces: [RequireFailureCapture]};
  return function(closure$size, closure$name, closure$block, closure$value) {
  return function(memory, start, endExclusive) {
  var condition = (endExclusive - start | 0) >= closure$size;
  var message = readExact$lambda$lambda(closure$name, closure$size);
  if (!condition) {
    var m = new require$ObjectLiteral(message);
    m.doFail();
  }
  closure$value.v = closure$block(memory, start);
  return closure$size;
};
};
});
  require$ObjectLiteral_3.prototype = Object.create(RequireFailureCapture.prototype);
  require$ObjectLiteral_3.prototype.constructor = require$ObjectLiteral_3;
  function require$ObjectLiteral_3(closure$message) {
    this.closure$message = closure$message;
    RequireFailureCapture.call(this);
  }
  require$ObjectLiteral_3.prototype.doFail = function() {
  throw IllegalArgumentException_init(this.closure$message());
};
  require$ObjectLiteral_3.$metadata$ = {
  kind: Kind_CLASS, 
  interfaces: [RequireFailureCapture]};
  var forEach = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.forEach_13x7pp$', function($receiver, block) {
  var memory = $receiver.memory;
  var start = $receiver.readPosition;
  var endExclusive = $receiver.writePosition;
  for (var index = start; index < endExclusive; index++) {
    block(memory.view.getInt8(index));
  }
  var rc = endExclusive - start | 0;
  $receiver.discardExact_za3lpa$(rc);
});
  function readUByte($receiver) {
    return new UByte_init($receiver.readByte());
  }
  var readUByte_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.readUByte_396eqd$', wrapFunction(function() {
  var Buffer = _.io.ktor.utils.io.core.Buffer;
  var throwCCE = Kotlin.throwCCE;
  var readUByte = _.io.ktor.utils.io.core.readUByte_abnlgx$;
  return function($receiver) {
  var tmp$;
  return readUByte(Kotlin.isType(tmp$ = $receiver, Buffer) ? tmp$ : throwCCE());
};
}));
  function writeUByte($receiver, value) {
    $receiver.writeByte_s8j3t7$(value.data);
  }
  function writeUByte_0($receiver, value) {
    var tmp$;
    writeUByte(Kotlin.isType(tmp$ = $receiver, Buffer) ? tmp$ : throwCCE(), value);
  }
  function readShort_0($receiver) {
    var name = 'short integer';
    var value = {
  v: null};
    var memory = $receiver.memory;
    var start = $receiver.readPosition;
    if (!(($receiver.writePosition - start | 0) >= 2)) {
      var m = new require$ObjectLiteral_2(readExact$lambda$lambda(name, 2));
      m.doFail();
    }
    value.v = memory.view.getInt16(start, false);
    var rc = 2;
    $receiver.discardExact_za3lpa$(rc);
    return value.v;
  }
  var readShort_1 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.readShort_396eqd$', wrapFunction(function() {
  var Buffer = _.io.ktor.utils.io.core.Buffer;
  var throwCCE = Kotlin.throwCCE;
  var readShort = _.io.ktor.utils.io.core.readShort_abnlgx$;
  return function($receiver) {
  var tmp$;
  return readShort(Kotlin.isType(tmp$ = $receiver, Buffer) ? tmp$ : throwCCE());
};
}));
  function readUShort($receiver) {
    var name = 'short unsigned integer';
    var value = {
  v: null};
    var memory = $receiver.memory;
    var start = $receiver.readPosition;
    if (!(($receiver.writePosition - start | 0) >= 2)) {
      var m = new require$ObjectLiteral_2(readExact$lambda$lambda(name, 2));
      m.doFail();
    }
    value.v = new UShort_init(memory.view.getInt16(start, false));
    var rc = 2;
    $receiver.discardExact_za3lpa$(rc);
    return value.v;
  }
  var readUShort_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.readUShort_396eqd$', wrapFunction(function() {
  var Buffer = _.io.ktor.utils.io.core.Buffer;
  var throwCCE = Kotlin.throwCCE;
  var readUShort = _.io.ktor.utils.io.core.readUShort_abnlgx$;
  return function($receiver) {
  var tmp$;
  return readUShort(Kotlin.isType(tmp$ = $receiver, Buffer) ? tmp$ : throwCCE());
};
}));
  function readInt_0($receiver) {
    var name = 'regular integer';
    var value = {
  v: null};
    var memory = $receiver.memory;
    var start = $receiver.readPosition;
    if (!(($receiver.writePosition - start | 0) >= 4)) {
      var m = new require$ObjectLiteral_2(readExact$lambda$lambda(name, 4));
      m.doFail();
    }
    value.v = memory.view.getInt32(start, false);
    var rc = 4;
    $receiver.discardExact_za3lpa$(rc);
    return value.v;
  }
  var readInt_1 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.readInt_396eqd$', wrapFunction(function() {
  var Buffer = _.io.ktor.utils.io.core.Buffer;
  var throwCCE = Kotlin.throwCCE;
  var readInt = _.io.ktor.utils.io.core.readInt_abnlgx$;
  return function($receiver) {
  var tmp$;
  return readInt(Kotlin.isType(tmp$ = $receiver, Buffer) ? tmp$ : throwCCE());
};
}));
  function readUInt($receiver) {
    var name = 'regular unsigned integer';
    var value = {
  v: null};
    var memory = $receiver.memory;
    var start = $receiver.readPosition;
    if (!(($receiver.writePosition - start | 0) >= 4)) {
      var m = new require$ObjectLiteral_2(readExact$lambda$lambda(name, 4));
      m.doFail();
    }
    value.v = new UInt_init(memory.view.getInt32(start, false));
    var rc = 4;
    $receiver.discardExact_za3lpa$(rc);
    return value.v;
  }
  var readUInt_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.readUInt_396eqd$', wrapFunction(function() {
  var Buffer = _.io.ktor.utils.io.core.Buffer;
  var throwCCE = Kotlin.throwCCE;
  var readUInt = _.io.ktor.utils.io.core.readUInt_abnlgx$;
  return function($receiver) {
  var tmp$;
  return readUInt(Kotlin.isType(tmp$ = $receiver, Buffer) ? tmp$ : throwCCE());
};
}));
  function readLong_0($receiver) {
    var name = 'long integer';
    var value = {
  v: null};
    var memory = $receiver.memory;
    var start = $receiver.readPosition;
    if (!(($receiver.writePosition - start | 0) >= 8)) {
      var m = new require$ObjectLiteral_2(readExact$lambda$lambda(name, 8));
      m.doFail();
    }
    var memory_0 = memory;
    var offset = start;
    value.v = Kotlin.Long.fromInt(memory_0.view.getUint32(offset, false)).shiftLeft(32).or(Kotlin.Long.fromInt(memory_0.view.getUint32(offset + 4 | 0, false)));
    var rc = 8;
    $receiver.discardExact_za3lpa$(rc);
    return value.v;
  }
  var readLong_1 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.readLong_396eqd$', wrapFunction(function() {
  var Buffer = _.io.ktor.utils.io.core.Buffer;
  var throwCCE = Kotlin.throwCCE;
  var readLong = _.io.ktor.utils.io.core.readLong_abnlgx$;
  return function($receiver) {
  var tmp$;
  return readLong(Kotlin.isType(tmp$ = $receiver, Buffer) ? tmp$ : throwCCE());
};
}));
  function readULong($receiver) {
    var name = 'long unsigned integer';
    var value = {
  v: null};
    var memory = $receiver.memory;
    var start = $receiver.readPosition;
    if (!(($receiver.writePosition - start | 0) >= 8)) {
      var m = new require$ObjectLiteral_2(readExact$lambda$lambda(name, 8));
      m.doFail();
    }
    var memory_0 = memory;
    var offset = start;
    value.v = new ULong_init(Kotlin.Long.fromInt(memory_0.view.getUint32(offset, false)).shiftLeft(32).or(Kotlin.Long.fromInt(memory_0.view.getUint32(offset + 4 | 0, false))));
    var rc = 8;
    $receiver.discardExact_za3lpa$(rc);
    return value.v;
  }
  var readULong_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.readULong_396eqd$', wrapFunction(function() {
  var Buffer = _.io.ktor.utils.io.core.Buffer;
  var throwCCE = Kotlin.throwCCE;
  var readULong = _.io.ktor.utils.io.core.readULong_abnlgx$;
  return function($receiver) {
  var tmp$;
  return readULong(Kotlin.isType(tmp$ = $receiver, Buffer) ? tmp$ : throwCCE());
};
}));
  function readFloat_0($receiver) {
    var name = 'floating point number';
    var value = {
  v: null};
    var memory = $receiver.memory;
    var start = $receiver.readPosition;
    if (!(($receiver.writePosition - start | 0) >= 4)) {
      var m = new require$ObjectLiteral_2(readExact$lambda$lambda(name, 4));
      m.doFail();
    }
    value.v = memory.view.getFloat32(start, false);
    var rc = 4;
    $receiver.discardExact_za3lpa$(rc);
    return value.v;
  }
  var readFloat_1 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.readFloat_396eqd$', wrapFunction(function() {
  var Buffer = _.io.ktor.utils.io.core.Buffer;
  var throwCCE = Kotlin.throwCCE;
  var readFloat = _.io.ktor.utils.io.core.readFloat_abnlgx$;
  return function($receiver) {
  var tmp$;
  return readFloat(Kotlin.isType(tmp$ = $receiver, Buffer) ? tmp$ : throwCCE());
};
}));
  function readDouble_0($receiver) {
    var name = 'long floating point number';
    var value = {
  v: null};
    var memory = $receiver.memory;
    var start = $receiver.readPosition;
    if (!(($receiver.writePosition - start | 0) >= 8)) {
      var m = new require$ObjectLiteral_2(readExact$lambda$lambda(name, 8));
      m.doFail();
    }
    value.v = memory.view.getFloat64(start, false);
    var rc = 8;
    $receiver.discardExact_za3lpa$(rc);
    return value.v;
  }
  var readDouble_1 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.readDouble_396eqd$', wrapFunction(function() {
  var Buffer = _.io.ktor.utils.io.core.Buffer;
  var throwCCE = Kotlin.throwCCE;
  var readDouble = _.io.ktor.utils.io.core.readDouble_abnlgx$;
  return function($receiver) {
  var tmp$;
  return readDouble(Kotlin.isType(tmp$ = $receiver, Buffer) ? tmp$ : throwCCE());
};
}));
  function writeShort_2($receiver, value) {
    var name = 'short integer';
    var memory = $receiver.memory;
    var start = $receiver.writePosition;
    var writeRemaining = $receiver.limit - start | 0;
    if (writeRemaining < 2) {
      throw InsufficientSpaceException_init_0(name, 2, writeRemaining);
    }
    memory.view.setInt16(start, value, false);
    var rc = 2;
    $receiver.commitWritten_za3lpa$(rc);
  }
  var writeShort_3 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.writeShort_89txly$', wrapFunction(function() {
  var Buffer = _.io.ktor.utils.io.core.Buffer;
  var throwCCE = Kotlin.throwCCE;
  var writeShort = _.io.ktor.utils.io.core.writeShort_cx5lgg$;
  return function($receiver, value) {
  var tmp$;
  writeShort(Kotlin.isType(tmp$ = $receiver, Buffer) ? tmp$ : throwCCE(), value);
};
}));
  function writeUShort($receiver, value) {
    var name = 'short unsigned integer';
    var memory = $receiver.memory;
    var start = $receiver.writePosition;
    var writeRemaining = $receiver.limit - start | 0;
    if (writeRemaining < 2) {
      throw InsufficientSpaceException_init_0(name, 2, writeRemaining);
    }
    memory.view.setInt16(start, value.data, false);
    var rc = 2;
    $receiver.commitWritten_za3lpa$(rc);
  }
  var writeUShort_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.writeUShort_sa3b8p$', wrapFunction(function() {
  var Buffer = _.io.ktor.utils.io.core.Buffer;
  var throwCCE = Kotlin.throwCCE;
  var writeUShort = _.io.ktor.utils.io.core.writeUShort_q99vxf$;
  return function($receiver, value) {
  var tmp$;
  writeUShort(Kotlin.isType(tmp$ = $receiver, Buffer) ? tmp$ : throwCCE(), value);
};
}));
  function writeInt_2($receiver, value) {
    var name = 'regular integer';
    var memory = $receiver.memory;
    var start = $receiver.writePosition;
    var writeRemaining = $receiver.limit - start | 0;
    if (writeRemaining < 4) {
      throw InsufficientSpaceException_init_0(name, 4, writeRemaining);
    }
    memory.view.setInt32(start, value, false);
    var rc = 4;
    $receiver.commitWritten_za3lpa$(rc);
  }
  var writeInt_3 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.writeInt_q5mzkd$', wrapFunction(function() {
  var Buffer = _.io.ktor.utils.io.core.Buffer;
  var throwCCE = Kotlin.throwCCE;
  var writeInt = _.io.ktor.utils.io.core.writeInt_cni1rh$;
  return function($receiver, value) {
  var tmp$;
  writeInt(Kotlin.isType(tmp$ = $receiver, Buffer) ? tmp$ : throwCCE(), value);
};
}));
  function writeUInt($receiver, value) {
    var name = 'regular unsigned integer';
    var memory = $receiver.memory;
    var start = $receiver.writePosition;
    var writeRemaining = $receiver.limit - start | 0;
    if (writeRemaining < 4) {
      throw InsufficientSpaceException_init_0(name, 4, writeRemaining);
    }
    memory.view.setInt32(start, value.data, false);
    var rc = 4;
    $receiver.commitWritten_za3lpa$(rc);
  }
  var writeUInt_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.writeUInt_tiqx5o$', wrapFunction(function() {
  var Buffer = _.io.ktor.utils.io.core.Buffer;
  var throwCCE = Kotlin.throwCCE;
  var writeUInt = _.io.ktor.utils.io.core.writeUInt_xybpjq$;
  return function($receiver, value) {
  var tmp$;
  writeUInt(Kotlin.isType(tmp$ = $receiver, Buffer) ? tmp$ : throwCCE(), value);
};
}));
  function writeLong_0($receiver, value) {
    var name = 'long integer';
    var memory = $receiver.memory;
    var start = $receiver.writePosition;
    var writeRemaining = $receiver.limit - start | 0;
    if (writeRemaining < 8) {
      throw InsufficientSpaceException_init_0(name, 8, writeRemaining);
    }
    var memory_0 = memory;
    var offset = start;
    memory_0.view.setInt32(offset, value.shiftRight(32).toInt(), false);
    memory_0.view.setInt32(offset + 4 | 0, value.and(L4294967295).toInt(), false);
    var rc = 8;
    $receiver.commitWritten_za3lpa$(rc);
  }
  var writeLong_1 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.writeLong_tilyfy$', wrapFunction(function() {
  var Buffer = _.io.ktor.utils.io.core.Buffer;
  var throwCCE = Kotlin.throwCCE;
  var writeLong = _.io.ktor.utils.io.core.writeLong_xy6qu0$;
  return function($receiver, value) {
  var tmp$;
  writeLong(Kotlin.isType(tmp$ = $receiver, Buffer) ? tmp$ : throwCCE(), value);
};
}));
  function writeULong($receiver, value) {
    var name = 'long unsigned integer';
    var memory = $receiver.memory;
    var start = $receiver.writePosition;
    var writeRemaining = $receiver.limit - start | 0;
    if (writeRemaining < 8) {
      throw InsufficientSpaceException_init_0(name, 8, writeRemaining);
    }
    var memory_0 = memory;
    var offset = start;
    var value_0 = value.data;
    memory_0.view.setInt32(offset, value_0.shiftRight(32).toInt(), false);
    memory_0.view.setInt32(offset + 4 | 0, value_0.and(L4294967295).toInt(), false);
    var rc = 8;
    $receiver.commitWritten_za3lpa$(rc);
  }
  var writeULong_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.writeULong_89885t$', wrapFunction(function() {
  var Buffer = _.io.ktor.utils.io.core.Buffer;
  var throwCCE = Kotlin.throwCCE;
  var writeULong = _.io.ktor.utils.io.core.writeULong_cwjw0b$;
  return function($receiver, value) {
  var tmp$;
  writeULong(Kotlin.isType(tmp$ = $receiver, Buffer) ? tmp$ : throwCCE(), value);
};
}));
  function writeFloat_0($receiver, value) {
    var name = 'floating point number';
    var memory = $receiver.memory;
    var start = $receiver.writePosition;
    var writeRemaining = $receiver.limit - start | 0;
    if (writeRemaining < 4) {
      throw InsufficientSpaceException_init_0(name, 4, writeRemaining);
    }
    memory.view.setFloat32(start, value, false);
    var rc = 4;
    $receiver.commitWritten_za3lpa$(rc);
  }
  var writeFloat_1 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.writeFloat_8gwps6$', wrapFunction(function() {
  var Buffer = _.io.ktor.utils.io.core.Buffer;
  var throwCCE = Kotlin.throwCCE;
  var writeFloat = _.io.ktor.utils.io.core.writeFloat_d48dmo$;
  return function($receiver, value) {
  var tmp$;
  writeFloat(Kotlin.isType(tmp$ = $receiver, Buffer) ? tmp$ : throwCCE(), value);
};
}));
  function writeDouble_0($receiver, value) {
    var name = 'long floating point number';
    var memory = $receiver.memory;
    var start = $receiver.writePosition;
    var writeRemaining = $receiver.limit - start | 0;
    if (writeRemaining < 8) {
      throw InsufficientSpaceException_init_0(name, 8, writeRemaining);
    }
    memory.view.setFloat64(start, value, false);
    var rc = 8;
    $receiver.commitWritten_za3lpa$(rc);
  }
  var writeDouble_1 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.writeDouble_kny06r$', wrapFunction(function() {
  var Buffer = _.io.ktor.utils.io.core.Buffer;
  var throwCCE = Kotlin.throwCCE;
  var writeDouble = _.io.ktor.utils.io.core.writeDouble_in4kvh$;
  return function($receiver, value) {
  var tmp$;
  writeDouble(Kotlin.isType(tmp$ = $receiver, Buffer) ? tmp$ : throwCCE(), value);
};
}));
  function readFully_2($receiver, destination, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = destination.length - offset | 0;
    var name = 'byte array';
    var value = {
  v: null};
    var memory = $receiver.memory;
    var start = $receiver.readPosition;
    if (!(($receiver.writePosition - start | 0) >= length)) {
      var m = new require$ObjectLiteral_2(readExact$lambda$lambda(name, length));
      m.doFail();
    }
    copyTo_2(memory, destination, start, length, offset);
    value.v = Unit;
    var rc = length;
    $receiver.discardExact_za3lpa$(rc);
    value.v;
  }
  var readFully_3 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.readFully_ou1upd$', wrapFunction(function() {
  var Buffer = _.io.ktor.utils.io.core.Buffer;
  var throwCCE = Kotlin.throwCCE;
  var readFully = _.io.ktor.utils.io.core.readFully_7ntqvp$;
  return function($receiver, destination, offset, length) {
  if (offset === void 0) 
    offset = 0;
  if (length === void 0) 
    length = destination.length - offset | 0;
  var tmp$;
  readFully(Kotlin.isType(tmp$ = $receiver, Buffer) ? tmp$ : throwCCE(), destination, offset, length);
};
}));
  function readFully_4($receiver, destination, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = destination.size - offset | 0;
    readFully_2($receiver, destination.storage, offset, length);
  }
  function readAvailable$lambda(closure$offset) {
    return function() {
  return "offset shouldn't be negative: " + closure$offset;
};
  }
  function readAvailable$lambda_0(closure$length) {
    return function() {
  return "length shouldn't be negative: " + closure$length;
};
  }
  function readAvailable$lambda_1(closure$offset, closure$length, closure$destination) {
    return function() {
  return 'offset + length should be less than the destination size: ' + closure$offset + (' + ' + closure$length + ' > ' + closure$destination.length);
};
  }
  function readAvailable_0($receiver, destination, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = destination.length - offset | 0;
    if (!(offset >= 0)) {
      var m = new require$ObjectLiteral_3(readAvailable$lambda(offset));
      m.doFail();
    }
    if (!(length >= 0)) {
      var m_0 = new require$ObjectLiteral_3(readAvailable$lambda_0(length));
      m_0.doFail();
    }
    if (!((offset + length | 0) <= destination.length)) {
      var m_1 = new require$ObjectLiteral_3(readAvailable$lambda_1(offset, length, destination));
      m_1.doFail();
    }
    if (!($receiver.writePosition > $receiver.readPosition)) 
      return -1;
    var b = $receiver.writePosition - $receiver.readPosition | 0;
    var toBeRead = Math_0.min(length, b);
    readFully_2($receiver, destination, offset, toBeRead);
    return toBeRead;
  }
  var readAvailable_1 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.readAvailable_ou1upd$', wrapFunction(function() {
  var Buffer = _.io.ktor.utils.io.core.Buffer;
  var throwCCE = Kotlin.throwCCE;
  var readAvailable = _.io.ktor.utils.io.core.readAvailable_7ntqvp$;
  return function($receiver, destination, offset, length) {
  if (offset === void 0) 
    offset = 0;
  if (length === void 0) 
    length = destination.length - offset | 0;
  var tmp$;
  return readAvailable(Kotlin.isType(tmp$ = $receiver, Buffer) ? tmp$ : throwCCE(), destination, offset, length);
};
}));
  function readAvailable_2($receiver, destination, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = destination.size - offset | 0;
    return readAvailable_0($receiver, destination.storage, offset, length);
  }
  function writeFully_0($receiver, source, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = source.length - offset | 0;
    var name = 'byte array';
    var memory = $receiver.memory;
    var start = $receiver.writePosition;
    var writeRemaining = $receiver.limit - start | 0;
    if (writeRemaining < length) {
      throw InsufficientSpaceException_init_0(name, length, writeRemaining);
    }
    var memory_0 = memory;
    var dstOffset = start;
    of(Memory.Companion, source, offset, length).copyTo_ubllm2$(memory_0, 0, length, dstOffset);
    var rc = length;
    $receiver.commitWritten_za3lpa$(rc);
  }
  var writeFully_1 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.writeFully_ou1upd$', wrapFunction(function() {
  var Buffer = _.io.ktor.utils.io.core.Buffer;
  var throwCCE = Kotlin.throwCCE;
  var writeFully = _.io.ktor.utils.io.core.writeFully_7ntqvp$;
  return function($receiver, source, offset, length) {
  if (offset === void 0) 
    offset = 0;
  if (length === void 0) 
    length = source.length - offset | 0;
  var tmp$;
  writeFully(Kotlin.isType(tmp$ = $receiver, Buffer) ? tmp$ : throwCCE(), source, offset, length);
};
}));
  function writeFully_2($receiver, source, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = source.size - offset | 0;
    writeFully_0($receiver, source.storage, offset, length);
  }
  function readFully_5($receiver, destination, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = destination.length - offset | 0;
    var size = length * 2 | 0;
    var name = 'short integers array';
    var value = {
  v: null};
    var memory = $receiver.memory;
    var start = $receiver.readPosition;
    if (!(($receiver.writePosition - start | 0) >= size)) {
      var m = new require$ObjectLiteral_2(readExact$lambda$lambda(name, size));
      m.doFail();
    }
    loadShortArray(memory, start, destination, offset, length);
    value.v = Unit;
    var rc = size;
    $receiver.discardExact_za3lpa$(rc);
    value.v;
  }
  function readFully_6($receiver, destination, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = destination.size - offset | 0;
    readFully_5($receiver, destination.storage, offset, length);
  }
  function readAvailable$lambda_2(closure$offset) {
    return function() {
  return "offset shouldn't be negative: " + closure$offset;
};
  }
  function readAvailable$lambda_3(closure$length) {
    return function() {
  return "length shouldn't be negative: " + closure$length;
};
  }
  function readAvailable$lambda_4(closure$offset, closure$length, closure$destination) {
    return function() {
  return 'offset + length should be less than the destination size: ' + closure$offset + (' + ' + closure$length + ' > ' + closure$destination.length);
};
  }
  function readAvailable_3($receiver, destination, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = destination.length - offset | 0;
    if (!(offset >= 0)) {
      var m = new require$ObjectLiteral_3(readAvailable$lambda_2(offset));
      m.doFail();
    }
    if (!(length >= 0)) {
      var m_0 = new require$ObjectLiteral_3(readAvailable$lambda_3(length));
      m_0.doFail();
    }
    if (!((offset + length | 0) <= destination.length)) {
      var m_1 = new require$ObjectLiteral_3(readAvailable$lambda_4(offset, length, destination));
      m_1.doFail();
    }
    if (!($receiver.writePosition > $receiver.readPosition)) 
      return -1;
    var tmp$ = length / 2 | 0;
    var b = $receiver.writePosition - $receiver.readPosition | 0;
    var toBeRead = Math_0.min(tmp$, b);
    readFully_5($receiver, destination, offset, toBeRead);
    return toBeRead;
  }
  function readAvailable_4($receiver, destination, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = destination.size - offset | 0;
    return readAvailable_3($receiver, destination.storage, offset, length);
  }
  function writeFully_3($receiver, source, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = source.length - offset | 0;
    var size = length * 2 | 0;
    var name = 'short integers array';
    var memory = $receiver.memory;
    var start = $receiver.writePosition;
    var writeRemaining = $receiver.limit - start | 0;
    if (writeRemaining < size) {
      throw InsufficientSpaceException_init_0(name, size, writeRemaining);
    }
    storeShortArray(memory, start, source, offset, length);
    var rc = size;
    $receiver.commitWritten_za3lpa$(rc);
  }
  function writeFully_4($receiver, source, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = source.size - offset | 0;
    writeFully_3($receiver, source.storage, offset, length);
  }
  function readFully_7($receiver, destination, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = destination.length - offset | 0;
    var size = length * 4 | 0;
    var name = 'integers array';
    var value = {
  v: null};
    var memory = $receiver.memory;
    var start = $receiver.readPosition;
    if (!(($receiver.writePosition - start | 0) >= size)) {
      var m = new require$ObjectLiteral_2(readExact$lambda$lambda(name, size));
      m.doFail();
    }
    loadIntArray(memory, start, destination, offset, length);
    value.v = Unit;
    var rc = size;
    $receiver.discardExact_za3lpa$(rc);
    value.v;
  }
  function readFully_8($receiver, destination, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = destination.size - offset | 0;
    readFully_7($receiver, destination.storage, offset, length);
  }
  function readAvailable$lambda_5(closure$offset) {
    return function() {
  return "offset shouldn't be negative: " + closure$offset;
};
  }
  function readAvailable$lambda_6(closure$length) {
    return function() {
  return "length shouldn't be negative: " + closure$length;
};
  }
  function readAvailable$lambda_7(closure$offset, closure$length, closure$destination) {
    return function() {
  return 'offset + length should be less than the destination size: ' + closure$offset + (' + ' + closure$length + ' > ' + closure$destination.length);
};
  }
  function readAvailable_5($receiver, destination, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = destination.length - offset | 0;
    if (!(offset >= 0)) {
      var m = new require$ObjectLiteral_3(readAvailable$lambda_5(offset));
      m.doFail();
    }
    if (!(length >= 0)) {
      var m_0 = new require$ObjectLiteral_3(readAvailable$lambda_6(length));
      m_0.doFail();
    }
    if (!((offset + length | 0) <= destination.length)) {
      var m_1 = new require$ObjectLiteral_3(readAvailable$lambda_7(offset, length, destination));
      m_1.doFail();
    }
    if (!($receiver.writePosition > $receiver.readPosition)) 
      return -1;
    var tmp$ = length / 4 | 0;
    var b = $receiver.writePosition - $receiver.readPosition | 0;
    var toBeRead = Math_0.min(tmp$, b);
    readFully_7($receiver, destination, offset, toBeRead);
    return toBeRead;
  }
  function readAvailable_6($receiver, destination, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = destination.size - offset | 0;
    return readAvailable_5($receiver, destination.storage, offset, length);
  }
  function writeFully_5($receiver, source, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = source.length - offset | 0;
    var size = length * 4 | 0;
    var name = 'integers array';
    var memory = $receiver.memory;
    var start = $receiver.writePosition;
    var writeRemaining = $receiver.limit - start | 0;
    if (writeRemaining < size) {
      throw InsufficientSpaceException_init_0(name, size, writeRemaining);
    }
    storeIntArray(memory, start, source, offset, length);
    var rc = size;
    $receiver.commitWritten_za3lpa$(rc);
  }
  function writeFully_6($receiver, source, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = source.size - offset | 0;
    writeFully_5($receiver, source.storage, offset, length);
  }
  function readFully_9($receiver, destination, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = destination.length - offset | 0;
    var size = length * 8 | 0;
    var name = 'long integers array';
    var value = {
  v: null};
    var memory = $receiver.memory;
    var start = $receiver.readPosition;
    if (!(($receiver.writePosition - start | 0) >= size)) {
      var m = new require$ObjectLiteral_2(readExact$lambda$lambda(name, size));
      m.doFail();
    }
    loadLongArray(memory, start, destination, offset, length);
    value.v = Unit;
    var rc = size;
    $receiver.discardExact_za3lpa$(rc);
    value.v;
  }
  function readFully_10($receiver, destination, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = destination.size - offset | 0;
    readFully_9($receiver, destination.storage, offset, length);
  }
  function readAvailable$lambda_8(closure$offset) {
    return function() {
  return "offset shouldn't be negative: " + closure$offset;
};
  }
  function readAvailable$lambda_9(closure$length) {
    return function() {
  return "length shouldn't be negative: " + closure$length;
};
  }
  function readAvailable$lambda_10(closure$offset, closure$length, closure$destination) {
    return function() {
  return 'offset + length should be less than the destination size: ' + closure$offset + (' + ' + closure$length + ' > ' + closure$destination.length);
};
  }
  function readAvailable_7($receiver, destination, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = destination.length - offset | 0;
    if (!(offset >= 0)) {
      var m = new require$ObjectLiteral_3(readAvailable$lambda_8(offset));
      m.doFail();
    }
    if (!(length >= 0)) {
      var m_0 = new require$ObjectLiteral_3(readAvailable$lambda_9(length));
      m_0.doFail();
    }
    if (!((offset + length | 0) <= destination.length)) {
      var m_1 = new require$ObjectLiteral_3(readAvailable$lambda_10(offset, length, destination));
      m_1.doFail();
    }
    if (!($receiver.writePosition > $receiver.readPosition)) 
      return -1;
    var tmp$ = length / 8 | 0;
    var b = $receiver.writePosition - $receiver.readPosition | 0;
    var toBeRead = Math_0.min(tmp$, b);
    readFully_9($receiver, destination, offset, toBeRead);
    return toBeRead;
  }
  function readAvailable_8($receiver, destination, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = destination.size - offset | 0;
    return readAvailable_7($receiver, destination.storage, offset, length);
  }
  function writeFully_7($receiver, source, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = source.length - offset | 0;
    var size = length * 8 | 0;
    var name = 'long integers array';
    var memory = $receiver.memory;
    var start = $receiver.writePosition;
    var writeRemaining = $receiver.limit - start | 0;
    if (writeRemaining < size) {
      throw InsufficientSpaceException_init_0(name, size, writeRemaining);
    }
    storeLongArray(memory, start, source, offset, length);
    var rc = size;
    $receiver.commitWritten_za3lpa$(rc);
  }
  function writeFully_8($receiver, source, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = source.size - offset | 0;
    writeFully_7($receiver, source.storage, offset, length);
  }
  function readFully_11($receiver, destination, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = destination.length - offset | 0;
    var size = length * 4 | 0;
    var name = 'floating point numbers array';
    var value = {
  v: null};
    var memory = $receiver.memory;
    var start = $receiver.readPosition;
    if (!(($receiver.writePosition - start | 0) >= size)) {
      var m = new require$ObjectLiteral_2(readExact$lambda$lambda(name, size));
      m.doFail();
    }
    loadFloatArray(memory, start, destination, offset, length);
    value.v = Unit;
    var rc = size;
    $receiver.discardExact_za3lpa$(rc);
    value.v;
  }
  function readAvailable$lambda_11(closure$offset) {
    return function() {
  return "offset shouldn't be negative: " + closure$offset;
};
  }
  function readAvailable$lambda_12(closure$length) {
    return function() {
  return "length shouldn't be negative: " + closure$length;
};
  }
  function readAvailable$lambda_13(closure$offset, closure$length, closure$destination) {
    return function() {
  return 'offset + length should be less than the destination size: ' + closure$offset + (' + ' + closure$length + ' > ' + closure$destination.length);
};
  }
  function readAvailable_9($receiver, destination, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = destination.length - offset | 0;
    if (!(offset >= 0)) {
      var m = new require$ObjectLiteral_3(readAvailable$lambda_11(offset));
      m.doFail();
    }
    if (!(length >= 0)) {
      var m_0 = new require$ObjectLiteral_3(readAvailable$lambda_12(length));
      m_0.doFail();
    }
    if (!((offset + length | 0) <= destination.length)) {
      var m_1 = new require$ObjectLiteral_3(readAvailable$lambda_13(offset, length, destination));
      m_1.doFail();
    }
    if (!($receiver.writePosition > $receiver.readPosition)) 
      return -1;
    var tmp$ = length / 4 | 0;
    var b = $receiver.writePosition - $receiver.readPosition | 0;
    var toBeRead = Math_0.min(tmp$, b);
    readFully_11($receiver, destination, offset, toBeRead);
    return toBeRead;
  }
  function writeFully_9($receiver, source, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = source.length - offset | 0;
    var size = length * 4 | 0;
    var name = 'floating point numbers array';
    var memory = $receiver.memory;
    var start = $receiver.writePosition;
    var writeRemaining = $receiver.limit - start | 0;
    if (writeRemaining < size) {
      throw InsufficientSpaceException_init_0(name, size, writeRemaining);
    }
    storeFloatArray(memory, start, source, offset, length);
    var rc = size;
    $receiver.commitWritten_za3lpa$(rc);
  }
  function readFully_12($receiver, destination, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = destination.length - offset | 0;
    var size = length * 8 | 0;
    var name = 'floating point numbers array';
    var value = {
  v: null};
    var memory = $receiver.memory;
    var start = $receiver.readPosition;
    if (!(($receiver.writePosition - start | 0) >= size)) {
      var m = new require$ObjectLiteral_2(readExact$lambda$lambda(name, size));
      m.doFail();
    }
    loadDoubleArray(memory, start, destination, offset, length);
    value.v = Unit;
    var rc = size;
    $receiver.discardExact_za3lpa$(rc);
    value.v;
  }
  function readAvailable$lambda_14(closure$offset) {
    return function() {
  return "offset shouldn't be negative: " + closure$offset;
};
  }
  function readAvailable$lambda_15(closure$length) {
    return function() {
  return "length shouldn't be negative: " + closure$length;
};
  }
  function readAvailable$lambda_16(closure$offset, closure$length, closure$destination) {
    return function() {
  return 'offset + length should be less than the destination size: ' + closure$offset + (' + ' + closure$length + ' > ' + closure$destination.length);
};
  }
  function readAvailable_10($receiver, destination, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = destination.length - offset | 0;
    if (!(offset >= 0)) {
      var m = new require$ObjectLiteral_3(readAvailable$lambda_14(offset));
      m.doFail();
    }
    if (!(length >= 0)) {
      var m_0 = new require$ObjectLiteral_3(readAvailable$lambda_15(length));
      m_0.doFail();
    }
    if (!((offset + length | 0) <= destination.length)) {
      var m_1 = new require$ObjectLiteral_3(readAvailable$lambda_16(offset, length, destination));
      m_1.doFail();
    }
    if (!($receiver.writePosition > $receiver.readPosition)) 
      return -1;
    var tmp$ = length / 8 | 0;
    var b = $receiver.writePosition - $receiver.readPosition | 0;
    var toBeRead = Math_0.min(tmp$, b);
    readFully_12($receiver, destination, offset, toBeRead);
    return toBeRead;
  }
  function writeFully_10($receiver, source, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = source.length - offset | 0;
    var size = length * 8 | 0;
    var name = 'floating point numbers array';
    var memory = $receiver.memory;
    var start = $receiver.writePosition;
    var writeRemaining = $receiver.limit - start | 0;
    if (writeRemaining < size) {
      throw InsufficientSpaceException_init_0(name, size, writeRemaining);
    }
    storeDoubleArray(memory, start, source, offset, length);
    var rc = size;
    $receiver.commitWritten_za3lpa$(rc);
  }
  function readFully_13($receiver, dst, length) {
    if (length === void 0) {
      length = dst.limit - dst.writePosition | 0;
    }
    if (!(length >= 0)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    if (!(length <= (dst.limit - dst.writePosition | 0))) {
      var message_0 = 'Failed requirement.';
      throw IllegalArgumentException_init(message_0.toString());
    }
    var name = 'buffer content';
    var value = {
  v: null};
    var memory = $receiver.memory;
    var start = $receiver.readPosition;
    if (!(($receiver.writePosition - start | 0) >= length)) {
      var m = new require$ObjectLiteral_2(readExact$lambda$lambda(name, length));
      m.doFail();
    }
    memory.copyTo_ubllm2$(dst.memory, start, length, dst.writePosition);
    dst.commitWritten_za3lpa$(length);
    value.v = Unit;
    var rc = length;
    $receiver.discardExact_za3lpa$(rc);
    value.v;
    return length;
  }
  function readAvailable_11($receiver, dst, length) {
    if (length === void 0) {
      length = dst.limit - dst.writePosition | 0;
    }
    if (!($receiver.writePosition > $receiver.readPosition)) 
      return -1;
    var tmp$ = dst.limit - dst.writePosition | 0;
    var b = $receiver.writePosition - $receiver.readPosition | 0;
    var readSize = Math_0.min(tmp$, b, length);
    var name = 'buffer content';
    var value = {
  v: null};
    var memory = $receiver.memory;
    var start = $receiver.readPosition;
    if (!(($receiver.writePosition - start | 0) >= readSize)) {
      var m = new require$ObjectLiteral_2(readExact$lambda$lambda(name, readSize));
      m.doFail();
    }
    memory.copyTo_ubllm2$(dst.memory, start, readSize, dst.writePosition);
    dst.commitWritten_za3lpa$(readSize);
    value.v = Unit;
    var rc = readSize;
    $receiver.discardExact_za3lpa$(rc);
    value.v;
    return readSize;
  }
  function writeFully_11($receiver, src) {
    var length = src.writePosition - src.readPosition | 0;
    var name = 'buffer readable content';
    var memory = $receiver.memory;
    var start = $receiver.writePosition;
    var writeRemaining = $receiver.limit - start | 0;
    if (writeRemaining < length) {
      throw InsufficientSpaceException_init_0(name, length, writeRemaining);
    }
    src.memory.copyTo_ubllm2$(memory, src.readPosition, length, start);
    src.discardExact_za3lpa$(length);
    var rc = length;
    $receiver.commitWritten_za3lpa$(rc);
  }
  function writeFully$lambda(closure$length) {
    return function() {
  return "length shouldn't be negative: " + closure$length;
};
  }
  function writeFully$lambda_0(closure$length, closure$src) {
    return function() {
  var tmp$ = "length shouldn't be greater than the source read remaining: " + closure$length + ' > ';
  var $this = closure$src;
  return tmp$ + ($this.writePosition - $this.readPosition | 0);
};
  }
  function writeFully$lambda_1(closure$length, this$writeFully) {
    return function() {
  var tmp$ = "length shouldn't be greater than the destination write remaining space: " + closure$length + ' > ';
  var $this = this$writeFully;
  return tmp$ + ($this.limit - $this.writePosition | 0);
};
  }
  function writeFully_12($receiver, src, length) {
    if (!(length >= 0)) {
      var m = new require$ObjectLiteral_3(writeFully$lambda(length));
      m.doFail();
    }
    if (!(length <= (src.writePosition - src.readPosition | 0))) {
      var m_0 = new require$ObjectLiteral_3(writeFully$lambda_0(length, src));
      m_0.doFail();
    }
    if (!(length <= ($receiver.limit - $receiver.writePosition | 0))) {
      var m_1 = new require$ObjectLiteral_3(writeFully$lambda_1(length, $receiver));
      m_1.doFail();
    }
    var name = 'buffer readable content';
    var memory = $receiver.memory;
    var start = $receiver.writePosition;
    var writeRemaining = $receiver.limit - start | 0;
    if (writeRemaining < length) {
      throw InsufficientSpaceException_init_0(name, length, writeRemaining);
    }
    src.memory.copyTo_ubllm2$(memory, src.readPosition, length, start);
    src.discardExact_za3lpa$(length);
    var rc = length;
    $receiver.commitWritten_za3lpa$(rc);
  }
  var readExact = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.readExact_j0s9s1$', wrapFunction(function() {
  var wrapFunction = Kotlin.wrapFunction;
  var EOFException_init = _.io.ktor.utils.io.errors.EOFException;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var RequireFailureCapture = _.io.ktor.utils.io.core.internal.RequireFailureCapture;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  require$ObjectLiteral.prototype = Object.create(RequireFailureCapture.prototype);
  require$ObjectLiteral.prototype.constructor = require$ObjectLiteral;
  function require$ObjectLiteral(closure$message) {
    this.closure$message = closure$message;
    RequireFailureCapture.call(this);
  }
  require$ObjectLiteral.prototype.doFail = function() {
  throw IllegalArgumentException_init(this.closure$message());
};
  require$ObjectLiteral.$metadata$ = {
  kind: Kind_CLASS, 
  interfaces: [RequireFailureCapture]};
  function readExact$lambda$lambda(closure$name, closure$size) {
    return function() {
  throw new EOFException_init('Not enough bytes to read a ' + closure$name + ' of size ' + closure$size + '.');
};
  }
  var readExact$lambda = wrapFunction(function() {
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var RequireFailureCapture = _.io.ktor.utils.io.core.internal.RequireFailureCapture;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  require$ObjectLiteral.prototype = Object.create(RequireFailureCapture.prototype);
  require$ObjectLiteral.prototype.constructor = require$ObjectLiteral;
  function require$ObjectLiteral(closure$message) {
    this.closure$message = closure$message;
    RequireFailureCapture.call(this);
  }
  require$ObjectLiteral.prototype.doFail = function() {
  throw IllegalArgumentException_init(this.closure$message());
};
  require$ObjectLiteral.$metadata$ = {
  kind: Kind_CLASS, 
  interfaces: [RequireFailureCapture]};
  return function(closure$size, closure$name, closure$block, closure$value) {
  return function(memory, start, endExclusive) {
  var condition = (endExclusive - start | 0) >= closure$size;
  var message = readExact$lambda$lambda(closure$name, closure$size);
  if (!condition) {
    var m = new require$ObjectLiteral(message);
    m.doFail();
  }
  closure$value.v = closure$block(memory, start);
  return closure$size;
};
};
});
  return function($receiver, size, name, block) {
  var value = {
  v: null};
  var memory = $receiver.memory;
  var start = $receiver.readPosition;
  if (!(($receiver.writePosition - start | 0) >= size)) {
    var m = new require$ObjectLiteral(readExact$lambda$lambda(name, size));
    m.doFail();
  }
  value.v = block(memory, start);
  var rc = size;
  $receiver.discardExact_za3lpa$(rc);
  return value.v;
};
}));
  var writeExact = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.writeExact_n5pafo$', wrapFunction(function() {
  var InsufficientSpaceException_init = _.io.ktor.utils.io.core.InsufficientSpaceException_init_3m52m6$;
  return function($receiver, size, name, block) {
  var memory = $receiver.memory;
  var start = $receiver.writePosition;
  var writeRemaining = $receiver.limit - start | 0;
  if (writeRemaining < size) {
    throw InsufficientSpaceException_init(name, size, writeRemaining);
  }
  block(memory, start);
  var rc = size;
  $receiver.commitWritten_za3lpa$(rc);
};
}));
  function readBytes($receiver, count) {
    if (count === void 0) {
      count = $receiver.writePosition - $receiver.readPosition | 0;
    }
    if (count === 0) {
      return EmptyByteArray;
    }
    var result = new Int8Array(count);
    readFully_2($receiver, result);
    return result;
  }
  function releaseImpl($receiver, pool) {
    if ($receiver.release_8be2vx$()) {
      var origin = $receiver.origin;
      if (Kotlin.isType(origin, IoBuffer)) {
        $receiver.unlink_8be2vx$();
        origin.release_duua06$(pool);
      } else {
        pool.recycle_trkh7z$($receiver);
      }
    }
  }
  function EmptyBufferPoolImpl() {
    EmptyBufferPoolImpl_instance = this;
    NoPoolImpl.call(this);
  }
  EmptyBufferPoolImpl.prototype.borrow = function() {
  return IoBuffer$Companion_getInstance().Empty;
};
  EmptyBufferPoolImpl.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'EmptyBufferPoolImpl', 
  interfaces: [NoPoolImpl]};
  var EmptyBufferPoolImpl_instance = null;
  function EmptyBufferPoolImpl_getInstance() {
    if (EmptyBufferPoolImpl_instance === null) {
      new EmptyBufferPoolImpl();
    }
    return EmptyBufferPoolImpl_instance;
  }
  function releaseAll($receiver, pool) {
    if ($receiver == null) 
      return;
    var next = $receiver.cleanNext();
    $receiver.release_2bs5fo$(pool);
    releaseAll(next, pool);
  }
  var forEachChunk = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.forEachChunk_dkrrtn$', function($receiver, block) {
  var tmp$;
  var current = $receiver;
  do {
    block(current);
    tmp$ = current.next;
    if (tmp$ == null) {
      break;
    }
    current = tmp$;
  } while (true);
});
  function copyAll($receiver) {
    var tmp$;
    var copied = $receiver.duplicate();
    tmp$ = $receiver.next;
    if (tmp$ == null) {
      return copied;
    }
    var next = tmp$;
    return copyAll_0(next, copied, copied);
  }
  function copyAll_0($receiver, head, prev) {
    var tmp$;
    var copied = $receiver.duplicate();
    prev.next = copied;
    tmp$ = $receiver.next;
    if (tmp$ == null) {
      return head;
    }
    var next = tmp$;
    return copyAll_0(next, head, copied);
  }
  function findTail($receiver) {
    var tmp$;
    tmp$ = $receiver.next;
    if (tmp$ == null) {
      return $receiver;
    }
    var next = tmp$;
    return findTail(next);
  }
  function remainingAll($receiver) {
    return remainingAll_1($receiver, L0);
  }
  function remainingAll_0(buffer) {
    return remainingAll(buffer);
  }
  function remainingAll_1($receiver, n) {
    var tmp$;
    var rem = Kotlin.Long.fromInt($receiver.writePosition - $receiver.readPosition | 0).add(n);
    tmp$ = $receiver.next;
    if (tmp$ == null) {
      return rem;
    }
    var next = tmp$;
    return remainingAll_1(next, rem);
  }
  function isEmpty($receiver) {
    var tmp$;
    if (($receiver.writePosition - $receiver.readPosition | 0) > 0) 
      return false;
    tmp$ = $receiver.next;
    if (tmp$ == null) {
      return true;
    }
    var next = tmp$;
    return isEmpty(next);
  }
  var coerceAtMostMaxInt = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.coerceAtMostMaxInt_nzsbcz$', wrapFunction(function() {
  var L2147483647 = Kotlin.Long.fromInt(2147483647);
  return function($receiver) {
  var b = L2147483647;
  return ($receiver.compareTo_11rb$(b) <= 0 ? $receiver : b).toInt();
};
}));
  var coerceAtMostMaxIntOrFail = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.coerceAtMostMaxIntOrFail_z4ke79$', wrapFunction(function() {
  var L2147483647 = Kotlin.Long.fromInt(2147483647);
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  return function($receiver, message) {
  if ($receiver.compareTo_11rb$(L2147483647) > 0) 
    throw IllegalArgumentException_init(message);
  return $receiver.toInt();
};
}));
  function peekTo($receiver, destination, destinationOffset, offset, min, max) {
    var tmp$ = Kotlin.Long.fromInt(destination.view.byteLength).subtract(destinationOffset);
    var c = Kotlin.Long.fromInt($receiver.writePosition - $receiver.readPosition | 0);
    var b_0 = max.compareTo_11rb$(c) <= 0 ? max : c;
    var size = tmp$.compareTo_11rb$(b_0) <= 0 ? tmp$ : b_0;
    $receiver.memory.copyTo_q2ka7j$(destination, Kotlin.Long.fromInt($receiver.readPosition).add(offset), size, destinationOffset);
    return size;
  }
  function BufferLimitExceededException(message) {
    Exception_init(message, this);
    this.name = 'BufferLimitExceededException';
  }
  BufferLimitExceededException.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'BufferLimitExceededException', 
  interfaces: [Exception]};
  var buildPacket = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.buildPacket_1pjhv2$', wrapFunction(function() {
  var BytePacketBuilder = _.io.ktor.utils.io.core.BytePacketBuilder_za3lpa$;
  var Throwable = Error;
  return function(headerSizeHint, block) {
  if (headerSizeHint === void 0) 
    headerSizeHint = 0;
  var builder = BytePacketBuilder(headerSizeHint);
  try {
    block(builder);
    return builder.build();
  }  catch (t) {
  if (Kotlin.isType(t, Throwable)) {
    builder.release();
    throw t;
  } else 
    throw t;
}
};
}));
  function reset($receiver) {
    $receiver.release();
  }
  function BytePacketBuilderPlatformBase(pool) {
    BytePacketBuilderBase.call(this, pool);
  }
  BytePacketBuilderPlatformBase.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'BytePacketBuilderPlatformBase', 
  interfaces: [BytePacketBuilderBase]};
  function BytePacketBuilderBase(pool) {
    AbstractOutput_init(pool, this);
  }
  BytePacketBuilderBase.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'BytePacketBuilderBase', 
  interfaces: [AbstractOutput]};
  require$ObjectLiteral_4.prototype = Object.create(RequireFailureCapture.prototype);
  require$ObjectLiteral_4.prototype.constructor = require$ObjectLiteral_4;
  function require$ObjectLiteral_4(closure$message) {
    this.closure$message = closure$message;
    RequireFailureCapture.call(this);
  }
  require$ObjectLiteral_4.prototype.doFail = function() {
  throw IllegalArgumentException_init(this.closure$message());
};
  require$ObjectLiteral_4.$metadata$ = {
  kind: Kind_CLASS, 
  interfaces: [RequireFailureCapture]};
  function BytePacketBuilder(headerSizeHint, pool) {
    if (headerSizeHint === void 0) 
      headerSizeHint = 0;
    BytePacketBuilderPlatformBase.call(this, pool);
    this.headerSizeHint_0 = headerSizeHint;
    if (!(this.headerSizeHint_0 >= 0)) {
      var m = new require$ObjectLiteral_4(BytePacketBuilder_init$lambda(this));
      m.doFail();
    }
  }
  Object.defineProperty(BytePacketBuilder.prototype, 'size', {
  get: function() {
  return this._size;
}});
  Object.defineProperty(BytePacketBuilder.prototype, 'isEmpty', {
  get: function() {
  return this._size === 0;
}});
  Object.defineProperty(BytePacketBuilder.prototype, 'isNotEmpty', {
  get: function() {
  return this._size > 0;
}});
  Object.defineProperty(BytePacketBuilder.prototype, '_pool', {
  get: function() {
  return this.pool;
}});
  BytePacketBuilder.prototype.closeDestination = function() {
};
  BytePacketBuilder.prototype.flush_9etqdk$ = function(source, offset, length) {
};
  BytePacketBuilder.prototype.append_s8itvh$ = function(c) {
  var tmp$;
  return Kotlin.isType(tmp$ = BytePacketBuilderPlatformBase.prototype.append_s8itvh$.call(this, c), BytePacketBuilder) ? tmp$ : throwCCE();
};
  BytePacketBuilder.prototype.append_gw00v9$ = function(csq) {
  var tmp$;
  return Kotlin.isType(tmp$ = BytePacketBuilderPlatformBase.prototype.append_gw00v9$.call(this, csq), BytePacketBuilder) ? tmp$ : throwCCE();
};
  BytePacketBuilder.prototype.append_ezbsdh$ = function(csq, start, end) {
  var tmp$;
  return Kotlin.isType(tmp$ = BytePacketBuilderPlatformBase.prototype.append_ezbsdh$.call(this, csq, start, end), BytePacketBuilder) ? tmp$ : throwCCE();
};
  BytePacketBuilder.prototype.appendOld_s8itvh$ = function(c) {
  return this.append_s8itvh$(c);
};
  BytePacketBuilder.prototype.appendOld_gw00v9$ = function(csq) {
  return this.append_gw00v9$(csq);
};
  BytePacketBuilder.prototype.appendOld_ezbsdh$ = function(csq, start, end) {
  return this.append_ezbsdh$(csq, start, end);
};
  BytePacketBuilder.prototype.preview_chaoki$ = function(block) {
  var tmp$;
  var packet = preview_0(this);
  try {
    tmp$ = block(packet);
  } finally   {
    packet.release();
  }
  return tmp$;
};
  BytePacketBuilder.prototype.build = function() {
  var tmp$;
  var size = this.size;
  var head = this.stealAll_8be2vx$();
  if (head == null) 
    tmp$ = ByteReadPacket$Companion_getInstance().Empty;
  else 
    tmp$ = new ByteReadPacket(head, Kotlin.Long.fromInt(size), this.pool);
  return tmp$;
};
  BytePacketBuilder.prototype.reset = function() {
  this.release();
};
  BytePacketBuilder.prototype.preview = function() {
  return preview_0(this);
};
  BytePacketBuilder.prototype.toString = function() {
  return 'BytePacketBuilder(' + this.size + ' bytes written)';
};
  function BytePacketBuilder_init$lambda(this$BytePacketBuilder) {
    return function() {
  return "shouldn't be negative: headerSizeHint = " + this$BytePacketBuilder.headerSizeHint_0;
};
  }
  BytePacketBuilder.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'BytePacketBuilder', 
  interfaces: [BytePacketBuilderPlatformBase]};
  function ByteReadPacket(head, remaining, pool) {
    ByteReadPacket$Companion_getInstance();
    ByteReadPacketPlatformBase.call(this, head, remaining, pool);
    this.markNoMoreChunksAvailable();
  }
  ByteReadPacket.prototype.copy = function() {
  return new ByteReadPacket(copyAll(this.head), this.remaining, this.pool);
};
  ByteReadPacket.prototype.fill = function() {
  return null;
};
  ByteReadPacket.prototype.fill_9etqdk$ = function(destination, offset, length) {
  return 0;
};
  ByteReadPacket.prototype.closeSource = function() {
};
  ByteReadPacket.prototype.toString = function() {
  return 'ByteReadPacket(' + this.remaining.toString() + ' bytes remaining)';
};
  function ByteReadPacket$Companion() {
    ByteReadPacket$Companion_instance = this;
    this.Empty = new ByteReadPacket(ChunkBuffer$Companion_getInstance().Empty, L0, ChunkBuffer$Companion_getInstance().EmptyPool);
  }
  Object.defineProperty(ByteReadPacket$Companion.prototype, 'ReservedSize', {
  get: function() {
  return 8;
}});
  ByteReadPacket$Companion.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'Companion', 
  interfaces: []};
  var ByteReadPacket$Companion_instance = null;
  function ByteReadPacket$Companion_getInstance() {
    if (ByteReadPacket$Companion_instance === null) {
      new ByteReadPacket$Companion();
    }
    return ByteReadPacket$Companion_instance;
  }
  ByteReadPacket.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'ByteReadPacket', 
  interfaces: [ByteReadPacketPlatformBase, Input]};
  function ByteReadPacket_init(head, pool, $this) {
    $this = $this || Object.create(ByteReadPacket.prototype);
    ByteReadPacket.call($this, head, remainingAll(head), pool);
    return $this;
  }
  function ByteReadPacket_init_0(head, pool, $this) {
    $this = $this || Object.create(ByteReadPacket.prototype);
    ByteReadPacket.call($this, head, remainingAll(head), pool);
    return $this;
  }
  function ByteReadPacketPlatformBase(head, remaining, pool) {
    ByteReadPacketBase.call(this, head, remaining, pool);
  }
  ByteReadPacketPlatformBase.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'ByteReadPacketPlatformBase', 
  interfaces: [ByteReadPacketBase]};
  function ByteReadPacketPlatformBase_init(head, remaining, pool, $this) {
    $this = $this || Object.create(ByteReadPacketPlatformBase.prototype);
    var tmp$;
    ByteReadPacketPlatformBase.call($this, Kotlin.isType(tmp$ = head, ChunkBuffer) ? tmp$ : throwCCE(), remaining, pool);
    return $this;
  }
  var ByteReadPacket_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.ByteReadPacket_mj6st8$', wrapFunction(function() {
  var Unit = Kotlin.kotlin.Unit;
  var ByteReadPacket = _.io.ktor.utils.io.core.ByteReadPacket_1qge3v$;
  function ByteReadPacket$lambda(it) {
    return Unit;
  }
  return function(array, offset, length) {
  if (offset === void 0) 
    offset = 0;
  if (length === void 0) 
    length = array.length;
  return ByteReadPacket(array, offset, length, ByteReadPacket$lambda);
};
}));
  var use = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.use_jh8f9t$', wrapFunction(function() {
  var addSuppressedInternal = _.io.ktor.utils.io.core.addSuppressedInternal_oh0dqn$;
  var Throwable = Error;
  return function($receiver, block) {
  var tmp$;
  var closed = false;
  try {
    tmp$ = block($receiver);
  }  catch (first) {
  if (Kotlin.isType(first, Throwable)) {
    try {
      closed = true;
      $receiver.close();
    }    catch (second) {
  if (Kotlin.isType(second, Throwable)) {
    addSuppressedInternal(first, second);
  } else 
    throw second;
}
    throw first;
  } else 
    throw first;
}
 finally   {
    if (!closed) {
      $receiver.close();
    }
  }
  return tmp$;
};
}));
  function copyTo_0($receiver, output) {
    if (!Kotlin.isType($receiver, AbstractInput) || !Kotlin.isType(output, AbstractOutput)) {
      return copyToFallback($receiver, output);
    }
    var copied = L0;
    do {
      var head = $receiver.stealAll_8be2vx$();
      if (head == null) {
        if ($receiver.prepareRead_za3lpa$(1) == null) 
          break;
        continue;
      }
      copied = copied.add(remainingAll(head));
      output.appendChain_pvnryh$(head);
    } while (true);
    return copied;
  }
  function copyToFallback($receiver, output) {
    var buffer = ChunkBuffer$Companion_getInstance().Pool.borrow();
    var copied = L0;
    try {
      do {
        buffer.resetForWrite();
        var rc = readAvailable_19($receiver, buffer);
        if (rc === -1) 
          break;
        copied = copied.add(Kotlin.Long.fromInt(rc));
        writeFully_20(output, buffer);
      } while (true);
      return copied;
    } finally     {
      buffer.release_2bs5fo$(ChunkBuffer$Companion_getInstance().Pool);
    }
  }
  function ExperimentalIoApi() {
  }
  ExperimentalIoApi.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'ExperimentalIoApi', 
  interfaces: [Annotation]};
  function discard_0($receiver) {
    return $receiver.discard_s8cxhz$(Long$Companion$MAX_VALUE);
  }
  function discardExact_0($receiver, n) {
    var discarded = $receiver.discard_s8cxhz$(n);
    if (!equals(discarded, n)) {
      throw IllegalStateException_init('Only ' + discarded.toString() + ' bytes were discarded of ' + n.toString() + ' requested');
    }
  }
  function discardExact_1($receiver, n) {
    discardExact_0($receiver, Kotlin.Long.fromInt(n));
  }
  var takeWhile = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.takeWhile_nkhzd2$', wrapFunction(function() {
  var prepareReadFirstHead = _.io.ktor.utils.io.core.internal.prepareReadFirstHead_j319xh$;
  var prepareReadNextHead = _.io.ktor.utils.io.core.internal.prepareReadNextHead_x2nit9$;
  var completeReadHead = _.io.ktor.utils.io.core.internal.completeReadHead_x2nit9$;
  return function($receiver, block) {
  var tmp$, tmp$_0;
  var release = true;
  tmp$ = prepareReadFirstHead($receiver, 1);
  if (tmp$ == null) {
    return;
  }
  var current = tmp$;
  try {
    do {
      if (!block(current)) {
        break;
      }
      release = false;
      tmp$_0 = prepareReadNextHead($receiver, current);
      if (tmp$_0 == null) {
        break;
      }
      var next = tmp$_0;
      current = next;
      release = true;
    } while (true);
  } finally   {
    if (release) {
      completeReadHead($receiver, current);
    }
  }
};
}));
  var takeWhileSize = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.takeWhileSize_y109dn$', wrapFunction(function() {
  var prepareReadFirstHead = _.io.ktor.utils.io.core.internal.prepareReadFirstHead_j319xh$;
  var prepareReadNextHead = _.io.ktor.utils.io.core.internal.prepareReadNextHead_x2nit9$;
  var completeReadHead = _.io.ktor.utils.io.core.internal.completeReadHead_x2nit9$;
  return function($receiver, initialSize, block) {
  if (initialSize === void 0) 
    initialSize = 1;
  var tmp$, tmp$_0;
  var release = true;
  tmp$ = prepareReadFirstHead($receiver, initialSize);
  if (tmp$ == null) {
    return;
  }
  var current = tmp$;
  var size = initialSize;
  try {
    do {
      var $this = current;
      var before = $this.writePosition - $this.readPosition | 0;
      var after;
      if (before >= size) {
        try {
          size = block(current);
        } finally         {
          var $this_0 = current;
          after = $this_0.writePosition - $this_0.readPosition | 0;
        }
      } else {
        after = before;
      }
      release = false;
      if (after === 0) 
        tmp$_0 = prepareReadNextHead($receiver, current);
      else {
        var tmp$_1 = after < size;
        if (!tmp$_1) {
          var $this_1 = current;
          tmp$_1 = ($this_1.capacity - $this_1.limit | 0) < 8;
        }
        if (tmp$_1) {
          completeReadHead($receiver, current);
          tmp$_0 = prepareReadFirstHead($receiver, size);
        } else 
          tmp$_0 = current;
      }
      var next = tmp$_0;
      if (next == null) {
        break;
      }
      current = next;
      release = true;
    } while (size > 0);
  } finally   {
    if (release) {
      completeReadHead($receiver, current);
    }
  }
};
}));
  function peekCharUtf8($receiver) {
    var rc = $receiver.tryPeek();
    if ((rc & 128) === 0) 
      return toChar(rc);
    if (rc === -1) 
      throw new EOFException('Failed to peek a char: end of input');
    return peekCharUtf8Impl($receiver, rc);
  }
  var forEach_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.forEach_xalon3$', wrapFunction(function() {
  var prepareReadFirstHead = _.io.ktor.utils.io.core.internal.prepareReadFirstHead_j319xh$;
  var prepareReadNextHead = _.io.ktor.utils.io.core.internal.prepareReadNextHead_x2nit9$;
  var completeReadHead = _.io.ktor.utils.io.core.internal.completeReadHead_x2nit9$;
  return function($receiver, block) {
  takeWhile$break:
    do {
      var tmp$, tmp$_0;
      var release = true;
      tmp$ = prepareReadFirstHead($receiver, 1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      try {
        do {
          var buffer = current;
          var memory = buffer.memory;
          var start = buffer.readPosition;
          var endExclusive = buffer.writePosition;
          for (var index = start; index < endExclusive; index++) {
            block(memory.view.getInt8(index));
          }
          var rc = endExclusive - start | 0;
          buffer.discardExact_za3lpa$(rc);
          if (!true) {
            break;
          }
          release = false;
          tmp$_0 = prepareReadNextHead($receiver, current);
          if (tmp$_0 == null) {
            break;
          }
          var next = tmp$_0;
          current = next;
          release = true;
        } while (true);
      } finally       {
        if (release) {
          completeReadHead($receiver, current);
        }
      }
    } while (false);
};
}));
  function peekCharUtf8Impl($receiver, first) {
    var rc = {
  v: 63};
    var found = {
  v: false};
    var initialSize = byteCountUtf8(first);
    takeWhileSize$break:
      do {
        var tmp$, tmp$_0;
        var release = true;
        tmp$ = prepareReadFirstHead($receiver, initialSize);
        if (tmp$ == null) {
          break takeWhileSize$break;
        }
        var current = tmp$;
        var size = initialSize;
        try {
          loop_label:
            do {
              var $this = current;
              var before = $this.writePosition - $this.readPosition | 0;
              var after;
              if (before >= size) {
                try {
                  var it = current;
                  var decodeUTF8$result;
                  decodeUTF8$break:
                    do {
                      var byteCount = {
  v: 0};
                      var value = {
  v: 0};
                      var lastByteCount = {
  v: 0};
                      var memory = it.memory;
                      var start = it.readPosition;
                      var endExclusive = it.writePosition;
                      for (var index = start; index < endExclusive; index++) {
                        var v = memory.view.getInt8(index) & 255;
                        if ((v & 128) === 0) {
                          if (byteCount.v !== 0) 
                            malformedByteCount(byteCount.v);
                          var ch = toBoxedChar(toChar(v));
                          found.v = true;
                          rc.v = unboxChar(ch);
                          if (!false) {
                            it.discardExact_za3lpa$(index - start | 0);
                            decodeUTF8$result = -1;
                            break decodeUTF8$break;
                          }
                        } else if (byteCount.v === 0) {
                          var mask = 128;
                          value.v = v;
                          for (var i = 1; i <= 6; i++) {
                            if ((value.v & mask) !== 0) {
                              value.v = value.v & ~mask;
                              mask = mask >> 1;
                              byteCount.v = byteCount.v + 1 | 0;
                            } else {
                              break;
                            }
                          }
                          lastByteCount.v = byteCount.v;
                          byteCount.v = byteCount.v - 1 | 0;
                          if (lastByteCount.v > (endExclusive - index | 0)) {
                            it.discardExact_za3lpa$(index - start | 0);
                            decodeUTF8$result = lastByteCount.v;
                            break decodeUTF8$break;
                          }
                        } else {
                          value.v = value.v << 6 | v & 127;
                          byteCount.v = byteCount.v - 1 | 0;
                          if (byteCount.v === 0) {
                            if (isBmpCodePoint(value.v)) {
                              var ch_0 = toBoxedChar(toChar(value.v));
                              found.v = true;
                              rc.v = unboxChar(ch_0);
                              if (!false) {
                                it.discardExact_za3lpa$(index - start - lastByteCount.v + 1 | 0);
                                decodeUTF8$result = -1;
                                break decodeUTF8$break;
                              }
                            } else if (!isValidCodePoint(value.v)) {
                              malformedCodePoint(value.v);
                            } else {
                              var ch_1 = toBoxedChar(toChar(highSurrogate(value.v)));
                              found.v = true;
                              rc.v = unboxChar(ch_1);
                              var tmp$_1 = !false;
                              if (!tmp$_1) {
                                var ch_2 = toBoxedChar(toChar(lowSurrogate(value.v)));
                                found.v = true;
                                rc.v = unboxChar(ch_2);
                                tmp$_1 = !false;
                              }
                              if (tmp$_1) {
                                it.discardExact_za3lpa$(index - start - lastByteCount.v + 1 | 0);
                                decodeUTF8$result = -1;
                                break decodeUTF8$break;
                              }
                            }
                            value.v = 0;
                          }
                        }
                      }
                      var rc_0 = endExclusive - start | 0;
                      it.discardExact_za3lpa$(rc_0);
                      decodeUTF8$result = 0;
                    } while (false);
                  size = decodeUTF8$result;
                } finally                 {
                  var $this_0 = current;
                  after = $this_0.writePosition - $this_0.readPosition | 0;
                }
              } else {
                after = before;
              }
              release = false;
              if (after === 0) 
                tmp$_0 = prepareReadNextHead($receiver, current);
              else {
                var tmp$_2 = after < size;
                if (!tmp$_2) {
                  var $this_1 = current;
                  tmp$_2 = ($this_1.capacity - $this_1.limit | 0) < 8;
                }
                if (tmp$_2) {
                  completeReadHead_0($receiver, current);
                  tmp$_0 = prepareReadFirstHead($receiver, size);
                } else 
                  tmp$_0 = current;
              }
              var next = tmp$_0;
              if (next == null) {
                break loop_label;
              }
              current = next;
              release = true;
            } while (size > 0);
        } finally         {
          if (release) {
            completeReadHead_0($receiver, current);
          }
        }
      } while (false);
    if (!found.v) {
      throw new MalformedUTF8InputException('No UTF-8 character found');
    }
    return rc.v;
  }
  function readAvailable_12($receiver, dst, size) {
    if (size === void 0) {
      size = dst.limit - dst.writePosition | 0;
    }
    return readAvailable_19($receiver, dst, size);
  }
  function readAvailableOld($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    return readAvailable_13($receiver, dst, offset, length);
  }
  function readAvailableOld_0($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    return readAvailable_14($receiver, dst, offset, length);
  }
  function readAvailableOld_1($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    return readAvailable_15($receiver, dst, offset, length);
  }
  function readAvailableOld_2($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    return readAvailable_16($receiver, dst, offset, length);
  }
  function readAvailableOld_3($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    return readAvailable_17($receiver, dst, offset, length);
  }
  function readAvailableOld_4($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    return readAvailable_18($receiver, dst, offset, length);
  }
  function readFully_14($receiver, dst, size) {
    if (size === void 0) {
      size = dst.limit - dst.writePosition | 0;
    }
    readFully_21($receiver, dst, size);
  }
  function readFullyOld($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    readFully_15($receiver, dst, offset, length);
  }
  function readFullyOld_0($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    readFully_16($receiver, dst, offset, length);
  }
  function readFullyOld_1($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    readFully_17($receiver, dst, offset, length);
  }
  function readFullyOld_2($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    readFully_18($receiver, dst, offset, length);
  }
  function readFullyOld_3($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    readFully_19($receiver, dst, offset, length);
  }
  function readFullyOld_4($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    readFully_20($receiver, dst, offset, length);
  }
  function readFully_15($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    var remaining = {
  v: length};
    var dstOffset = {
  v: offset};
    takeWhile$break:
      do {
        var tmp$, tmp$_0;
        var release = true;
        tmp$ = prepareReadFirstHead($receiver, 1);
        if (tmp$ == null) {
          break takeWhile$break;
        }
        var current = tmp$;
        try {
          do {
            var buffer = current;
            var tmp$_1 = remaining.v;
            var b = buffer.writePosition - buffer.readPosition | 0;
            var count = Math_0.min(tmp$_1, b);
            readFully_2(buffer, dst, dstOffset.v, count);
            remaining.v = remaining.v - count | 0;
            dstOffset.v = dstOffset.v + count | 0;
            if (!(remaining.v > 0)) {
              break;
            }
            release = false;
            tmp$_0 = prepareReadNextHead($receiver, current);
            if (tmp$_0 == null) {
              break;
            }
            var next = tmp$_0;
            current = next;
            release = true;
          } while (true);
        } finally         {
          if (release) {
            completeReadHead_0($receiver, current);
          }
        }
      } while (false);
    var $receiver_0 = remaining.v;
    if ($receiver_0 > 0) {
      prematureEndOfStream($receiver_0);
    }
  }
  function readFully_16($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    var remaining = {
  v: length};
    var dstOffset = {
  v: offset};
    takeWhileSize$break:
      do {
        var tmp$, tmp$_0;
        var release = true;
        tmp$ = prepareReadFirstHead($receiver, 1);
        if (tmp$ == null) {
          break takeWhileSize$break;
        }
        var current = tmp$;
        var size = 1;
        try {
          do {
            var $this = current;
            var before = $this.writePosition - $this.readPosition | 0;
            var after;
            if (before >= size) {
              try {
                var buffer = current;
                var block$result;
                var tmp$_1 = remaining.v;
                var b = (buffer.writePosition - buffer.readPosition | 0) / 2 | 0;
                var count = Math_0.min(tmp$_1, b);
                readFully_5(buffer, dst, dstOffset.v, count);
                remaining.v = remaining.v - count | 0;
                dstOffset.v = dstOffset.v + count | 0;
                if (remaining.v > 0) {
                  block$result = 2;
                } else {
                  block$result = 0;
                }
                size = block$result;
              } finally               {
                var $this_0 = current;
                after = $this_0.writePosition - $this_0.readPosition | 0;
              }
            } else {
              after = before;
            }
            release = false;
            if (after === 0) 
              tmp$_0 = prepareReadNextHead($receiver, current);
            else {
              var tmp$_2 = after < size;
              if (!tmp$_2) {
                var $this_1 = current;
                tmp$_2 = ($this_1.capacity - $this_1.limit | 0) < 8;
              }
              if (tmp$_2) {
                completeReadHead_0($receiver, current);
                tmp$_0 = prepareReadFirstHead($receiver, size);
              } else 
                tmp$_0 = current;
            }
            var next = tmp$_0;
            if (next == null) {
              break;
            }
            current = next;
            release = true;
          } while (size > 0);
        } finally         {
          if (release) {
            completeReadHead_0($receiver, current);
          }
        }
      } while (false);
    var $receiver_0 = remaining.v;
    if ($receiver_0 > 0) {
      prematureEndOfStream($receiver_0);
    }
  }
  function readFully_17($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    var remaining = {
  v: length};
    var dstOffset = {
  v: offset};
    takeWhileSize$break:
      do {
        var tmp$, tmp$_0;
        var release = true;
        tmp$ = prepareReadFirstHead($receiver, 1);
        if (tmp$ == null) {
          break takeWhileSize$break;
        }
        var current = tmp$;
        var size = 1;
        try {
          do {
            var $this = current;
            var before = $this.writePosition - $this.readPosition | 0;
            var after;
            if (before >= size) {
              try {
                var buffer = current;
                var block$result;
                var tmp$_1 = remaining.v;
                var b = (buffer.writePosition - buffer.readPosition | 0) / 4 | 0;
                var count = Math_0.min(tmp$_1, b);
                readFully_7(buffer, dst, dstOffset.v, count);
                remaining.v = remaining.v - count | 0;
                dstOffset.v = dstOffset.v + count | 0;
                if (remaining.v > 0) {
                  block$result = 4;
                } else {
                  block$result = 0;
                }
                size = block$result;
              } finally               {
                var $this_0 = current;
                after = $this_0.writePosition - $this_0.readPosition | 0;
              }
            } else {
              after = before;
            }
            release = false;
            if (after === 0) 
              tmp$_0 = prepareReadNextHead($receiver, current);
            else {
              var tmp$_2 = after < size;
              if (!tmp$_2) {
                var $this_1 = current;
                tmp$_2 = ($this_1.capacity - $this_1.limit | 0) < 8;
              }
              if (tmp$_2) {
                completeReadHead_0($receiver, current);
                tmp$_0 = prepareReadFirstHead($receiver, size);
              } else 
                tmp$_0 = current;
            }
            var next = tmp$_0;
            if (next == null) {
              break;
            }
            current = next;
            release = true;
          } while (size > 0);
        } finally         {
          if (release) {
            completeReadHead_0($receiver, current);
          }
        }
      } while (false);
    var $receiver_0 = remaining.v;
    if ($receiver_0 > 0) {
      prematureEndOfStream($receiver_0);
    }
  }
  function readFully_18($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    var remaining = {
  v: length};
    var dstOffset = {
  v: offset};
    takeWhileSize$break:
      do {
        var tmp$, tmp$_0;
        var release = true;
        tmp$ = prepareReadFirstHead($receiver, 1);
        if (tmp$ == null) {
          break takeWhileSize$break;
        }
        var current = tmp$;
        var size = 1;
        try {
          do {
            var $this = current;
            var before = $this.writePosition - $this.readPosition | 0;
            var after;
            if (before >= size) {
              try {
                var buffer = current;
                var block$result;
                var tmp$_1 = remaining.v;
                var b = (buffer.writePosition - buffer.readPosition | 0) / 8 | 0;
                var count = Math_0.min(tmp$_1, b);
                readFully_9(buffer, dst, dstOffset.v, count);
                remaining.v = remaining.v - count | 0;
                dstOffset.v = dstOffset.v + count | 0;
                if (remaining.v > 0) {
                  block$result = 8;
                } else {
                  block$result = 0;
                }
                size = block$result;
              } finally               {
                var $this_0 = current;
                after = $this_0.writePosition - $this_0.readPosition | 0;
              }
            } else {
              after = before;
            }
            release = false;
            if (after === 0) 
              tmp$_0 = prepareReadNextHead($receiver, current);
            else {
              var tmp$_2 = after < size;
              if (!tmp$_2) {
                var $this_1 = current;
                tmp$_2 = ($this_1.capacity - $this_1.limit | 0) < 8;
              }
              if (tmp$_2) {
                completeReadHead_0($receiver, current);
                tmp$_0 = prepareReadFirstHead($receiver, size);
              } else 
                tmp$_0 = current;
            }
            var next = tmp$_0;
            if (next == null) {
              break;
            }
            current = next;
            release = true;
          } while (size > 0);
        } finally         {
          if (release) {
            completeReadHead_0($receiver, current);
          }
        }
      } while (false);
    var $receiver_0 = remaining.v;
    if ($receiver_0 > 0) {
      prematureEndOfStream($receiver_0);
    }
  }
  function readFully_19($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    var remaining = {
  v: length};
    var dstOffset = {
  v: offset};
    takeWhileSize$break:
      do {
        var tmp$, tmp$_0;
        var release = true;
        tmp$ = prepareReadFirstHead($receiver, 1);
        if (tmp$ == null) {
          break takeWhileSize$break;
        }
        var current = tmp$;
        var size = 1;
        try {
          do {
            var $this = current;
            var before = $this.writePosition - $this.readPosition | 0;
            var after;
            if (before >= size) {
              try {
                var buffer = current;
                var block$result;
                var tmp$_1 = remaining.v;
                var b = (buffer.writePosition - buffer.readPosition | 0) / 4 | 0;
                var count = Math_0.min(tmp$_1, b);
                readFully_11(buffer, dst, dstOffset.v, count);
                remaining.v = remaining.v - count | 0;
                dstOffset.v = dstOffset.v + count | 0;
                if (remaining.v > 0) {
                  block$result = 4;
                } else {
                  block$result = 0;
                }
                size = block$result;
              } finally               {
                var $this_0 = current;
                after = $this_0.writePosition - $this_0.readPosition | 0;
              }
            } else {
              after = before;
            }
            release = false;
            if (after === 0) 
              tmp$_0 = prepareReadNextHead($receiver, current);
            else {
              var tmp$_2 = after < size;
              if (!tmp$_2) {
                var $this_1 = current;
                tmp$_2 = ($this_1.capacity - $this_1.limit | 0) < 8;
              }
              if (tmp$_2) {
                completeReadHead_0($receiver, current);
                tmp$_0 = prepareReadFirstHead($receiver, size);
              } else 
                tmp$_0 = current;
            }
            var next = tmp$_0;
            if (next == null) {
              break;
            }
            current = next;
            release = true;
          } while (size > 0);
        } finally         {
          if (release) {
            completeReadHead_0($receiver, current);
          }
        }
      } while (false);
    var $receiver_0 = remaining.v;
    if ($receiver_0 > 0) {
      prematureEndOfStream($receiver_0);
    }
  }
  function readFully_20($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    var remaining = {
  v: length};
    var dstOffset = {
  v: offset};
    takeWhileSize$break:
      do {
        var tmp$, tmp$_0;
        var release = true;
        tmp$ = prepareReadFirstHead($receiver, 1);
        if (tmp$ == null) {
          break takeWhileSize$break;
        }
        var current = tmp$;
        var size = 1;
        try {
          do {
            var $this = current;
            var before = $this.writePosition - $this.readPosition | 0;
            var after;
            if (before >= size) {
              try {
                var buffer = current;
                var block$result;
                var tmp$_1 = remaining.v;
                var b = (buffer.writePosition - buffer.readPosition | 0) / 8 | 0;
                var count = Math_0.min(tmp$_1, b);
                readFully_12(buffer, dst, dstOffset.v, count);
                remaining.v = remaining.v - count | 0;
                dstOffset.v = dstOffset.v + count | 0;
                if (remaining.v > 0) {
                  block$result = 8;
                } else {
                  block$result = 0;
                }
                size = block$result;
              } finally               {
                var $this_0 = current;
                after = $this_0.writePosition - $this_0.readPosition | 0;
              }
            } else {
              after = before;
            }
            release = false;
            if (after === 0) 
              tmp$_0 = prepareReadNextHead($receiver, current);
            else {
              var tmp$_2 = after < size;
              if (!tmp$_2) {
                var $this_1 = current;
                tmp$_2 = ($this_1.capacity - $this_1.limit | 0) < 8;
              }
              if (tmp$_2) {
                completeReadHead_0($receiver, current);
                tmp$_0 = prepareReadFirstHead($receiver, size);
              } else 
                tmp$_0 = current;
            }
            var next = tmp$_0;
            if (next == null) {
              break;
            }
            current = next;
            release = true;
          } while (size > 0);
        } finally         {
          if (release) {
            completeReadHead_0($receiver, current);
          }
        }
      } while (false);
    var $receiver_0 = remaining.v;
    if ($receiver_0 > 0) {
      prematureEndOfStream($receiver_0);
    }
  }
  function readFully_21($receiver, dst, length) {
    if (length === void 0) {
      length = dst.limit - dst.writePosition | 0;
    }
    var remaining = {
  v: length};
    var dstOffset = {
  v: 0};
    takeWhile$break:
      do {
        var tmp$, tmp$_0;
        var release = true;
        tmp$ = prepareReadFirstHead($receiver, 1);
        if (tmp$ == null) {
          break takeWhile$break;
        }
        var current = tmp$;
        try {
          do {
            var buffer = current;
            var tmp$_1 = remaining.v;
            var b = buffer.writePosition - buffer.readPosition | 0;
            var count = Math_0.min(tmp$_1, b);
            readFully_13(buffer, dst, count);
            remaining.v = remaining.v - count | 0;
            dstOffset.v = dstOffset.v + count | 0;
            if (!(remaining.v > 0)) {
              break;
            }
            release = false;
            tmp$_0 = prepareReadNextHead($receiver, current);
            if (tmp$_0 == null) {
              break;
            }
            var next = tmp$_0;
            current = next;
            release = true;
          } while (true);
        } finally         {
          if (release) {
            completeReadHead_0($receiver, current);
          }
        }
      } while (false);
    var $receiver_0 = remaining.v;
    if ($receiver_0 > 0) {
      prematureEndOfStream($receiver_0);
    }
  }
  function readFully_22($receiver, destination, destinationOffset, length) {
    readFully_23($receiver, destination, Kotlin.Long.fromInt(destinationOffset), Kotlin.Long.fromInt(length));
  }
  function readFully_23($receiver, destination, destinationOffset, length) {
    if (!equals(readAvailable_21($receiver, destination, destinationOffset, length), length)) {
      prematureEndOfStream_0(length);
    }
  }
  function readAvailable_13($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    var remaining = {
  v: length};
    var dstOffset = {
  v: offset};
    takeWhile$break:
      do {
        var tmp$, tmp$_0;
        var release = true;
        tmp$ = prepareReadFirstHead($receiver, 1);
        if (tmp$ == null) {
          break takeWhile$break;
        }
        var current = tmp$;
        try {
          do {
            var buffer = current;
            var tmp$_1 = remaining.v;
            var b = buffer.writePosition - buffer.readPosition | 0;
            var count = Math_0.min(tmp$_1, b);
            readFully_2(buffer, dst, dstOffset.v, count);
            remaining.v = remaining.v - count | 0;
            dstOffset.v = dstOffset.v + count | 0;
            if (!(remaining.v > 0)) {
              break;
            }
            release = false;
            tmp$_0 = prepareReadNextHead($receiver, current);
            if (tmp$_0 == null) {
              break;
            }
            var next = tmp$_0;
            current = next;
            release = true;
          } while (true);
        } finally         {
          if (release) {
            completeReadHead_0($receiver, current);
          }
        }
      } while (false);
    return length - remaining.v | 0;
  }
  function readAvailable_14($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    var remaining = {
  v: length};
    var dstOffset = {
  v: offset};
    takeWhileSize$break:
      do {
        var tmp$, tmp$_0;
        var release = true;
        tmp$ = prepareReadFirstHead($receiver, 1);
        if (tmp$ == null) {
          break takeWhileSize$break;
        }
        var current = tmp$;
        var size = 1;
        try {
          do {
            var $this = current;
            var before = $this.writePosition - $this.readPosition | 0;
            var after;
            if (before >= size) {
              try {
                var buffer = current;
                var block$result;
                var tmp$_1 = remaining.v;
                var b = (buffer.writePosition - buffer.readPosition | 0) / 2 | 0;
                var count = Math_0.min(tmp$_1, b);
                readFully_5(buffer, dst, dstOffset.v, count);
                remaining.v = remaining.v - count | 0;
                dstOffset.v = dstOffset.v + count | 0;
                if (remaining.v > 0) {
                  block$result = 2;
                } else {
                  block$result = 0;
                }
                size = block$result;
              } finally               {
                var $this_0 = current;
                after = $this_0.writePosition - $this_0.readPosition | 0;
              }
            } else {
              after = before;
            }
            release = false;
            if (after === 0) 
              tmp$_0 = prepareReadNextHead($receiver, current);
            else {
              var tmp$_2 = after < size;
              if (!tmp$_2) {
                var $this_1 = current;
                tmp$_2 = ($this_1.capacity - $this_1.limit | 0) < 8;
              }
              if (tmp$_2) {
                completeReadHead_0($receiver, current);
                tmp$_0 = prepareReadFirstHead($receiver, size);
              } else 
                tmp$_0 = current;
            }
            var next = tmp$_0;
            if (next == null) {
              break;
            }
            current = next;
            release = true;
          } while (size > 0);
        } finally         {
          if (release) {
            completeReadHead_0($receiver, current);
          }
        }
      } while (false);
    return length - remaining.v | 0;
  }
  function readAvailable_15($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    var remaining = {
  v: length};
    var dstOffset = {
  v: offset};
    takeWhileSize$break:
      do {
        var tmp$, tmp$_0;
        var release = true;
        tmp$ = prepareReadFirstHead($receiver, 1);
        if (tmp$ == null) {
          break takeWhileSize$break;
        }
        var current = tmp$;
        var size = 1;
        try {
          do {
            var $this = current;
            var before = $this.writePosition - $this.readPosition | 0;
            var after;
            if (before >= size) {
              try {
                var buffer = current;
                var block$result;
                var tmp$_1 = remaining.v;
                var b = (buffer.writePosition - buffer.readPosition | 0) / 4 | 0;
                var count = Math_0.min(tmp$_1, b);
                readFully_7(buffer, dst, dstOffset.v, count);
                remaining.v = remaining.v - count | 0;
                dstOffset.v = dstOffset.v + count | 0;
                if (remaining.v > 0) {
                  block$result = 4;
                } else {
                  block$result = 0;
                }
                size = block$result;
              } finally               {
                var $this_0 = current;
                after = $this_0.writePosition - $this_0.readPosition | 0;
              }
            } else {
              after = before;
            }
            release = false;
            if (after === 0) 
              tmp$_0 = prepareReadNextHead($receiver, current);
            else {
              var tmp$_2 = after < size;
              if (!tmp$_2) {
                var $this_1 = current;
                tmp$_2 = ($this_1.capacity - $this_1.limit | 0) < 8;
              }
              if (tmp$_2) {
                completeReadHead_0($receiver, current);
                tmp$_0 = prepareReadFirstHead($receiver, size);
              } else 
                tmp$_0 = current;
            }
            var next = tmp$_0;
            if (next == null) {
              break;
            }
            current = next;
            release = true;
          } while (size > 0);
        } finally         {
          if (release) {
            completeReadHead_0($receiver, current);
          }
        }
      } while (false);
    return length - remaining.v | 0;
  }
  function readAvailable_16($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    var remaining = {
  v: length};
    var dstOffset = {
  v: offset};
    takeWhileSize$break:
      do {
        var tmp$, tmp$_0;
        var release = true;
        tmp$ = prepareReadFirstHead($receiver, 1);
        if (tmp$ == null) {
          break takeWhileSize$break;
        }
        var current = tmp$;
        var size = 1;
        try {
          do {
            var $this = current;
            var before = $this.writePosition - $this.readPosition | 0;
            var after;
            if (before >= size) {
              try {
                var buffer = current;
                var block$result;
                var tmp$_1 = remaining.v;
                var b = (buffer.writePosition - buffer.readPosition | 0) / 8 | 0;
                var count = Math_0.min(tmp$_1, b);
                readFully_9(buffer, dst, dstOffset.v, count);
                remaining.v = remaining.v - count | 0;
                dstOffset.v = dstOffset.v + count | 0;
                if (remaining.v > 0) {
                  block$result = 8;
                } else {
                  block$result = 0;
                }
                size = block$result;
              } finally               {
                var $this_0 = current;
                after = $this_0.writePosition - $this_0.readPosition | 0;
              }
            } else {
              after = before;
            }
            release = false;
            if (after === 0) 
              tmp$_0 = prepareReadNextHead($receiver, current);
            else {
              var tmp$_2 = after < size;
              if (!tmp$_2) {
                var $this_1 = current;
                tmp$_2 = ($this_1.capacity - $this_1.limit | 0) < 8;
              }
              if (tmp$_2) {
                completeReadHead_0($receiver, current);
                tmp$_0 = prepareReadFirstHead($receiver, size);
              } else 
                tmp$_0 = current;
            }
            var next = tmp$_0;
            if (next == null) {
              break;
            }
            current = next;
            release = true;
          } while (size > 0);
        } finally         {
          if (release) {
            completeReadHead_0($receiver, current);
          }
        }
      } while (false);
    return length - remaining.v | 0;
  }
  function readAvailable_17($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    var remaining = {
  v: length};
    var dstOffset = {
  v: offset};
    takeWhileSize$break:
      do {
        var tmp$, tmp$_0;
        var release = true;
        tmp$ = prepareReadFirstHead($receiver, 1);
        if (tmp$ == null) {
          break takeWhileSize$break;
        }
        var current = tmp$;
        var size = 1;
        try {
          do {
            var $this = current;
            var before = $this.writePosition - $this.readPosition | 0;
            var after;
            if (before >= size) {
              try {
                var buffer = current;
                var block$result;
                var tmp$_1 = remaining.v;
                var b = (buffer.writePosition - buffer.readPosition | 0) / 4 | 0;
                var count = Math_0.min(tmp$_1, b);
                readFully_11(buffer, dst, dstOffset.v, count);
                remaining.v = remaining.v - count | 0;
                dstOffset.v = dstOffset.v + count | 0;
                if (remaining.v > 0) {
                  block$result = 4;
                } else {
                  block$result = 0;
                }
                size = block$result;
              } finally               {
                var $this_0 = current;
                after = $this_0.writePosition - $this_0.readPosition | 0;
              }
            } else {
              after = before;
            }
            release = false;
            if (after === 0) 
              tmp$_0 = prepareReadNextHead($receiver, current);
            else {
              var tmp$_2 = after < size;
              if (!tmp$_2) {
                var $this_1 = current;
                tmp$_2 = ($this_1.capacity - $this_1.limit | 0) < 8;
              }
              if (tmp$_2) {
                completeReadHead_0($receiver, current);
                tmp$_0 = prepareReadFirstHead($receiver, size);
              } else 
                tmp$_0 = current;
            }
            var next = tmp$_0;
            if (next == null) {
              break;
            }
            current = next;
            release = true;
          } while (size > 0);
        } finally         {
          if (release) {
            completeReadHead_0($receiver, current);
          }
        }
      } while (false);
    return length - remaining.v | 0;
  }
  function readAvailable_18($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    var remaining = {
  v: length};
    var dstOffset = {
  v: offset};
    takeWhileSize$break:
      do {
        var tmp$, tmp$_0;
        var release = true;
        tmp$ = prepareReadFirstHead($receiver, 1);
        if (tmp$ == null) {
          break takeWhileSize$break;
        }
        var current = tmp$;
        var size = 1;
        try {
          do {
            var $this = current;
            var before = $this.writePosition - $this.readPosition | 0;
            var after;
            if (before >= size) {
              try {
                var buffer = current;
                var block$result;
                var tmp$_1 = remaining.v;
                var b = (buffer.writePosition - buffer.readPosition | 0) / 8 | 0;
                var count = Math_0.min(tmp$_1, b);
                readFully_12(buffer, dst, dstOffset.v, count);
                remaining.v = remaining.v - count | 0;
                dstOffset.v = dstOffset.v + count | 0;
                if (remaining.v > 0) {
                  block$result = 8;
                } else {
                  block$result = 0;
                }
                size = block$result;
              } finally               {
                var $this_0 = current;
                after = $this_0.writePosition - $this_0.readPosition | 0;
              }
            } else {
              after = before;
            }
            release = false;
            if (after === 0) 
              tmp$_0 = prepareReadNextHead($receiver, current);
            else {
              var tmp$_2 = after < size;
              if (!tmp$_2) {
                var $this_1 = current;
                tmp$_2 = ($this_1.capacity - $this_1.limit | 0) < 8;
              }
              if (tmp$_2) {
                completeReadHead_0($receiver, current);
                tmp$_0 = prepareReadFirstHead($receiver, size);
              } else 
                tmp$_0 = current;
            }
            var next = tmp$_0;
            if (next == null) {
              break;
            }
            current = next;
            release = true;
          } while (size > 0);
        } finally         {
          if (release) {
            completeReadHead_0($receiver, current);
          }
        }
      } while (false);
    return length - remaining.v | 0;
  }
  function readAvailable_19($receiver, dst, length) {
    if (length === void 0) {
      length = dst.limit - dst.writePosition | 0;
    }
    var remaining = {
  v: length};
    var dstOffset = {
  v: 0};
    takeWhile$break:
      do {
        var tmp$, tmp$_0;
        var release = true;
        tmp$ = prepareReadFirstHead($receiver, 1);
        if (tmp$ == null) {
          break takeWhile$break;
        }
        var current = tmp$;
        try {
          do {
            var buffer = current;
            var tmp$_1 = remaining.v;
            var b = buffer.writePosition - buffer.readPosition | 0;
            var count = Math_0.min(tmp$_1, b);
            readFully_13(buffer, dst, count);
            remaining.v = remaining.v - count | 0;
            dstOffset.v = dstOffset.v + count | 0;
            if (!(remaining.v > 0)) {
              break;
            }
            release = false;
            tmp$_0 = prepareReadNextHead($receiver, current);
            if (tmp$_0 == null) {
              break;
            }
            var next = tmp$_0;
            current = next;
            release = true;
          } while (true);
        } finally         {
          if (release) {
            completeReadHead_0($receiver, current);
          }
        }
      } while (false);
    return length - remaining.v | 0;
  }
  function readAvailable_20($receiver, destination, destinationOffset, length) {
    return readAvailable_21($receiver, destination, Kotlin.Long.fromInt(destinationOffset), Kotlin.Long.fromInt(length)).toInt();
  }
  function readAvailable_21($receiver, destination, destinationOffset, length) {
    var tmp$;
    var remaining = {
  v: length};
    var dstOffset = {
  v: destinationOffset};
    takeWhile$break:
      do {
        var tmp$_0, tmp$_1;
        var release = true;
        tmp$_0 = prepareReadFirstHead($receiver, 1);
        if (tmp$_0 == null) {
          break takeWhile$break;
        }
        var current = tmp$_0;
        try {
          do {
            var buffer = current;
            var tmp$_2 = remaining.v;
            var b = Kotlin.Long.fromInt(buffer.writePosition - buffer.readPosition | 0);
            var count = (tmp$_2.compareTo_11rb$(b) <= 0 ? tmp$_2 : b).toInt();
            var src = buffer.memory;
            var srcOffset = Kotlin.Long.fromInt(buffer.readPosition);
            var dstOffset_0 = dstOffset.v;
            src.copyTo_q2ka7j$(destination, srcOffset, Kotlin.Long.fromInt(count), dstOffset_0);
            buffer.discardExact_za3lpa$(count);
            remaining.v = remaining.v.subtract(Kotlin.Long.fromInt(count));
            dstOffset.v = dstOffset.v.add(Kotlin.Long.fromInt(count));
            if (!(remaining.v.toNumber() > 0)) {
              break;
            }
            release = false;
            tmp$_1 = prepareReadNextHead($receiver, current);
            if (tmp$_1 == null) {
              break;
            }
            var next = tmp$_1;
            current = next;
            release = true;
          } while (true);
        } finally         {
          if (release) {
            completeReadHead_0($receiver, current);
          }
        }
      } while (false);
    var remaining_0 = remaining.v;
    var result = length.subtract(remaining_0);
    if (equals(result, L0) && $receiver.endOfInput) 
      tmp$ = L_1;
    else 
      tmp$ = result;
    return tmp$;
  }
  var readFullyBytesTemplate = wrapFunction(function() {
  var Math_0 = Math;
  var prepareReadFirstHead = _.io.ktor.utils.io.core.internal.prepareReadFirstHead_j319xh$;
  var prepareReadNextHead = _.io.ktor.utils.io.core.internal.prepareReadNextHead_x2nit9$;
  var completeReadHead = _.io.ktor.utils.io.core.internal.completeReadHead_x2nit9$;
  return function($receiver, initialDstOffset, length, readBlock) {
  var remaining = {
  v: length};
  var dstOffset = {
  v: initialDstOffset};
  takeWhile$break:
    do {
      var tmp$, tmp$_0;
      var release = true;
      tmp$ = prepareReadFirstHead($receiver, 1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      try {
        do {
          var buffer = current;
          var tmp$_1 = remaining.v;
          var b = buffer.writePosition - buffer.readPosition | 0;
          var count = Math_0.min(tmp$_1, b);
          readBlock(buffer, dstOffset.v, count);
          remaining.v = remaining.v - count | 0;
          dstOffset.v = dstOffset.v + count | 0;
          if (!(remaining.v > 0)) {
            break;
          }
          release = false;
          tmp$_0 = prepareReadNextHead($receiver, current);
          if (tmp$_0 == null) {
            break;
          }
          var next = tmp$_0;
          current = next;
          release = true;
        } while (true);
      } finally       {
        if (release) {
          completeReadHead($receiver, current);
        }
      }
    } while (false);
  return remaining.v;
};
});
  var readFullyBytesTemplate_0 = wrapFunction(function() {
  var prepareReadFirstHead = _.io.ktor.utils.io.core.internal.prepareReadFirstHead_j319xh$;
  var prepareReadNextHead = _.io.ktor.utils.io.core.internal.prepareReadNextHead_x2nit9$;
  var completeReadHead = _.io.ktor.utils.io.core.internal.completeReadHead_x2nit9$;
  return function($receiver, initialDstOffset, length, readBlock) {
  var remaining = {
  v: length};
  var dstOffset = {
  v: initialDstOffset};
  takeWhile$break:
    do {
      var tmp$, tmp$_0;
      var release = true;
      tmp$ = prepareReadFirstHead($receiver, 1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      try {
        do {
          var buffer = current;
          var tmp$_1 = remaining.v;
          var b = Kotlin.Long.fromInt(buffer.writePosition - buffer.readPosition | 0);
          var count = (tmp$_1.compareTo_11rb$(b) <= 0 ? tmp$_1 : b).toInt();
          readBlock(buffer.memory, Kotlin.Long.fromInt(buffer.readPosition), dstOffset.v, count);
          buffer.discardExact_za3lpa$(count);
          remaining.v = remaining.v.subtract(Kotlin.Long.fromInt(count));
          dstOffset.v = dstOffset.v.add(Kotlin.Long.fromInt(count));
          if (!(remaining.v.toNumber() > 0)) {
            break;
          }
          release = false;
          tmp$_0 = prepareReadNextHead($receiver, current);
          if (tmp$_0 == null) {
            break;
          }
          var next = tmp$_0;
          current = next;
          release = true;
        } while (true);
      } finally       {
        if (release) {
          completeReadHead($receiver, current);
        }
      }
    } while (false);
  return remaining.v;
};
});
  var readFullyTemplate = wrapFunction(function() {
  var Math_0 = Math;
  var prepareReadFirstHead = _.io.ktor.utils.io.core.internal.prepareReadFirstHead_j319xh$;
  var prepareReadNextHead = _.io.ktor.utils.io.core.internal.prepareReadNextHead_x2nit9$;
  var completeReadHead = _.io.ktor.utils.io.core.internal.completeReadHead_x2nit9$;
  return function($receiver, offset, length, componentSize, readBlock) {
  var remaining = {
  v: length};
  var dstOffset = {
  v: offset};
  takeWhileSize$break:
    do {
      var tmp$, tmp$_0;
      var release = true;
      tmp$ = prepareReadFirstHead($receiver, 1);
      if (tmp$ == null) {
        break takeWhileSize$break;
      }
      var current = tmp$;
      var size = 1;
      try {
        do {
          var $this = current;
          var before = $this.writePosition - $this.readPosition | 0;
          var after;
          if (before >= size) {
            try {
              var buffer = current;
              var block$result;
              var tmp$_1 = remaining.v;
              var b = (buffer.writePosition - buffer.readPosition | 0) / componentSize | 0;
              var count = Math_0.min(tmp$_1, b);
              readBlock(buffer, dstOffset.v, count);
              remaining.v = remaining.v - count | 0;
              dstOffset.v = dstOffset.v + count | 0;
              if (remaining.v > 0) {
                block$result = componentSize;
              } else {
                block$result = 0;
              }
              size = block$result;
            } finally             {
              var $this_0 = current;
              after = $this_0.writePosition - $this_0.readPosition | 0;
            }
          } else {
            after = before;
          }
          release = false;
          if (after === 0) 
            tmp$_0 = prepareReadNextHead($receiver, current);
          else {
            var tmp$_2 = after < size;
            if (!tmp$_2) {
              var $this_1 = current;
              tmp$_2 = ($this_1.capacity - $this_1.limit | 0) < 8;
            }
            if (tmp$_2) {
              completeReadHead($receiver, current);
              tmp$_0 = prepareReadFirstHead($receiver, size);
            } else 
              tmp$_0 = current;
          }
          var next = tmp$_0;
          if (next == null) {
            break;
          }
          current = next;
          release = true;
        } while (size > 0);
      } finally       {
        if (release) {
          completeReadHead($receiver, current);
        }
      }
    } while (false);
  return remaining.v;
};
});
  function requireNoRemaining($receiver) {
    if ($receiver > 0) {
      prematureEndOfStream($receiver);
    }
  }
  function readShort_2($receiver, byteOrder) {
    var tmp$;
    if (equals(byteOrder, ByteOrder$BIG_ENDIAN_getInstance())) {
      tmp$ = readShort_3($receiver);
    } else {
      tmp$ = reverseByteOrder_2(readShort_3($receiver));
    }
    return tmp$;
  }
  function readInt_2($receiver, byteOrder) {
    var tmp$;
    if (equals(byteOrder, ByteOrder$BIG_ENDIAN_getInstance())) {
      tmp$ = readInt_3($receiver);
    } else {
      tmp$ = reverseByteOrder_3(readInt_3($receiver));
    }
    return tmp$;
  }
  function readLong_2($receiver, byteOrder) {
    var tmp$;
    if (equals(byteOrder, ByteOrder$BIG_ENDIAN_getInstance())) {
      tmp$ = readLong_3($receiver);
    } else {
      tmp$ = reverseByteOrder_4(readLong_3($receiver));
    }
    return tmp$;
  }
  function readFloat_2($receiver, byteOrder) {
    var tmp$;
    if (equals(byteOrder, ByteOrder$BIG_ENDIAN_getInstance())) {
      tmp$ = readFloat_3($receiver);
    } else {
      tmp$ = reverseByteOrder_5(readFloat_3($receiver));
    }
    return tmp$;
  }
  function readDouble_2($receiver, byteOrder) {
    var tmp$;
    if (equals(byteOrder, ByteOrder$BIG_ENDIAN_getInstance())) {
      tmp$ = readDouble_3($receiver);
    } else {
      tmp$ = reverseByteOrder_6(readDouble_3($receiver));
    }
    return tmp$;
  }
  function readShortLittleEndian_0($receiver) {
    return reverseByteOrder_2(readShort_3($receiver));
  }
  function readIntLittleEndian_0($receiver) {
    return reverseByteOrder_3(readInt_3($receiver));
  }
  function readLongLittleEndian_0($receiver) {
    return reverseByteOrder_4(readLong_3($receiver));
  }
  function readFloatLittleEndian_0($receiver) {
    return reverseByteOrder_5(readFloat_3($receiver));
  }
  function readDoubleLittleEndian_0($receiver) {
    return reverseByteOrder_6(readDouble_3($receiver));
  }
  function readShortLittleEndian_1($receiver) {
    return reverseByteOrder_2(readShort_0($receiver));
  }
  function readIntLittleEndian_1($receiver) {
    return reverseByteOrder_3(readInt_0($receiver));
  }
  function readLongLittleEndian_1($receiver) {
    return reverseByteOrder_4(readLong_0($receiver));
  }
  function readFloatLittleEndian_1($receiver) {
    return reverseByteOrder_5(readFloat_0($receiver));
  }
  function readDoubleLittleEndian_1($receiver) {
    return reverseByteOrder_6(readDouble_0($receiver));
  }
  function readFullyLittleEndian($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.size - offset | 0;
    readFullyLittleEndian_0($receiver, dst.storage, offset, length);
  }
  function readFullyLittleEndian_0($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    readFully_16($receiver, dst, offset, length);
    var lastIndex = offset + length - 1 | 0;
    for (var index = offset; index <= lastIndex; index++) {
      dst[index] = reverseByteOrder_2(dst[index]);
    }
  }
  function readFullyLittleEndian_1($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.size - offset | 0;
    readFullyLittleEndian_2($receiver, dst.storage, offset, length);
  }
  function readFullyLittleEndian_2($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    readFully_17($receiver, dst, offset, length);
    var lastIndex = offset + length - 1 | 0;
    for (var index = offset; index <= lastIndex; index++) {
      dst[index] = reverseByteOrder_3(dst[index]);
    }
  }
  function readFullyLittleEndian_3($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.size - offset | 0;
    readFullyLittleEndian_4($receiver, dst.storage, offset, length);
  }
  function readFullyLittleEndian_4($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    readFully_18($receiver, dst, offset, length);
    var lastIndex = offset + length - 1 | 0;
    for (var index = offset; index <= lastIndex; index++) {
      dst[index] = reverseByteOrder_4(dst[index]);
    }
  }
  function readFullyLittleEndian_5($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    readFully_19($receiver, dst, offset, length);
    var lastIndex = offset + length - 1 | 0;
    for (var index = offset; index <= lastIndex; index++) {
      dst[index] = reverseByteOrder_5(dst[index]);
    }
  }
  function readFullyLittleEndian_6($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    readFully_20($receiver, dst, offset, length);
    var lastIndex = offset + length - 1 | 0;
    for (var index = offset; index <= lastIndex; index++) {
      dst[index] = reverseByteOrder_6(dst[index]);
    }
  }
  function readAvailableLittleEndian($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.size - offset | 0;
    return readAvailableLittleEndian_0($receiver, dst.storage, offset, length);
  }
  function readAvailableLittleEndian_0($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    var result = readAvailable_14($receiver, dst, offset, length);
    if (result > 0) {
      var lastIndex = offset + result - 1 | 0;
      for (var index = offset; index <= lastIndex; index++) {
        dst[index] = reverseByteOrder_2(dst[index]);
      }
    }
    return result;
  }
  function readAvailableLittleEndian_1($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.size - offset | 0;
    return readAvailableLittleEndian_2($receiver, dst.storage, offset, length);
  }
  function readAvailableLittleEndian_2($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    var result = readAvailable_15($receiver, dst, offset, length);
    if (result > 0) {
      var lastIndex = offset + result - 1 | 0;
      for (var index = offset; index <= lastIndex; index++) {
        dst[index] = reverseByteOrder_3(dst[index]);
      }
    }
    return result;
  }
  function readAvailableLittleEndian_3($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.size - offset | 0;
    return readAvailableLittleEndian_4($receiver, dst.storage, offset, length);
  }
  function readAvailableLittleEndian_4($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    var result = readAvailable_16($receiver, dst, offset, length);
    if (result > 0) {
      var lastIndex = offset + result - 1 | 0;
      for (var index = offset; index <= lastIndex; index++) {
        dst[index] = reverseByteOrder_4(dst[index]);
      }
    }
    return result;
  }
  function readAvailableLittleEndian_5($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    var result = readAvailable_17($receiver, dst, offset, length);
    if (result > 0) {
      var lastIndex = offset + result - 1 | 0;
      for (var index = offset; index <= lastIndex; index++) {
        dst[index] = reverseByteOrder_5(dst[index]);
      }
    }
    return result;
  }
  function readAvailableLittleEndian_6($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    var result = readAvailable_18($receiver, dst, offset, length);
    if (result > 0) {
      var lastIndex = offset + result - 1 | 0;
      for (var index = offset; index <= lastIndex; index++) {
        dst[index] = reverseByteOrder_6(dst[index]);
      }
    }
    return result;
  }
  function readFullyLittleEndian_7($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.size - offset | 0;
    readFullyLittleEndian_8($receiver, dst.storage, offset, length);
  }
  function readFullyLittleEndian_8($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    readFully_5($receiver, dst, offset, length);
    var lastIndex = offset + length - 1 | 0;
    for (var index = offset; index <= lastIndex; index++) {
      dst[index] = reverseByteOrder_2(dst[index]);
    }
  }
  function readFullyLittleEndian_9($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.size - offset | 0;
    readFullyLittleEndian_10($receiver, dst.storage, offset, length);
  }
  function readFullyLittleEndian_10($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    readFully_7($receiver, dst, offset, length);
    var lastIndex = offset + length - 1 | 0;
    for (var index = offset; index <= lastIndex; index++) {
      dst[index] = reverseByteOrder_3(dst[index]);
    }
  }
  function readFullyLittleEndian_11($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.size - offset | 0;
    readFullyLittleEndian_12($receiver, dst.storage, offset, length);
  }
  function readFullyLittleEndian_12($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    readFully_9($receiver, dst, offset, length);
    var lastIndex = offset + length - 1 | 0;
    for (var index = offset; index <= lastIndex; index++) {
      dst[index] = reverseByteOrder_4(dst[index]);
    }
  }
  function readFullyLittleEndian_13($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    readFully_11($receiver, dst, offset, length);
    var lastIndex = offset + length - 1 | 0;
    for (var index = offset; index <= lastIndex; index++) {
      dst[index] = reverseByteOrder_5(dst[index]);
    }
  }
  function readFullyLittleEndian_14($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    readFully_12($receiver, dst, offset, length);
    var lastIndex = offset + length - 1 | 0;
    for (var index = offset; index <= lastIndex; index++) {
      dst[index] = reverseByteOrder_6(dst[index]);
    }
  }
  function readAvailableLittleEndian_7($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.size - offset | 0;
    return readAvailableLittleEndian_8($receiver, dst.storage, offset, length);
  }
  function readAvailableLittleEndian_8($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    var result = readAvailable_3($receiver, dst, offset, length);
    var lastIndex = offset + result - 1 | 0;
    for (var index = offset; index <= lastIndex; index++) {
      dst[index] = reverseByteOrder_2(dst[index]);
    }
    return result;
  }
  function readAvailableLittleEndian_9($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.size - offset | 0;
    return readAvailableLittleEndian_10($receiver, dst.storage, offset, length);
  }
  function readAvailableLittleEndian_10($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    var result = readAvailable_5($receiver, dst, offset, length);
    var lastIndex = offset + result - 1 | 0;
    for (var index = offset; index <= lastIndex; index++) {
      dst[index] = reverseByteOrder_3(dst[index]);
    }
    return result;
  }
  function readAvailableLittleEndian_11($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.size - offset | 0;
    return readAvailableLittleEndian_12($receiver, dst.storage, offset, length);
  }
  function readAvailableLittleEndian_12($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    var result = readAvailable_7($receiver, dst, offset, length);
    if (result > 0) {
      var lastIndex = offset + result - 1 | 0;
      for (var index = offset; index <= lastIndex; index++) {
        dst[index] = reverseByteOrder_4(dst[index]);
      }
    }
    return result;
  }
  function readAvailableLittleEndian_13($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    var result = readAvailable_9($receiver, dst, offset, length);
    if (result > 0) {
      var lastIndex = offset + result - 1 | 0;
      for (var index = offset; index <= lastIndex; index++) {
        dst[index] = reverseByteOrder_5(dst[index]);
      }
    }
    return result;
  }
  function readAvailableLittleEndian_14($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    var result = readAvailable_10($receiver, dst, offset, length);
    if (result > 0) {
      var lastIndex = offset + result - 1 | 0;
      for (var index = offset; index <= lastIndex; index++) {
        dst[index] = reverseByteOrder_6(dst[index]);
      }
    }
    return result;
  }
  function readPrimitiveTemplate(read, reverse) {
    return reverse(read());
  }
  function readPrimitiveTemplate_0(byteOrder, read, reverse) {
    var tmp$;
    if (equals(byteOrder, ByteOrder$BIG_ENDIAN_getInstance())) 
      tmp$ = read();
    else 
      tmp$ = reverse(read());
    return tmp$;
  }
  function peekTo_0($receiver, destination, offset, min, max) {
    if (offset === void 0) 
      offset = 0;
    if (min === void 0) 
      min = 1;
    if (max === void 0) 
      max = 2147483647;
    var tmp$;
    return peekTo_1($receiver, Kotlin.isType(tmp$ = destination, Buffer) ? tmp$ : throwCCE(), offset, min, max);
  }
  function peekTo_1($receiver, destination, offset, min, max) {
    if (offset === void 0) 
      offset = 0;
    if (min === void 0) 
      min = 1;
    if (max === void 0) 
      max = 2147483647;
    checkPeekTo(destination, offset, min, max);
    var copied = $receiver.peekTo_afjyek$(destination.memory, Kotlin.Long.fromInt(destination.writePosition), Kotlin.Long.fromInt(offset), Kotlin.Long.fromInt(min), Kotlin.Long.fromInt(coerceAtMost_0(max, destination.limit - destination.writePosition | 0))).toInt();
    destination.commitWritten_za3lpa$(copied);
    return copied;
  }
  function readShort_3($receiver) {
    var readPrimitive$result;
    readPrimitive$break:
      do {
        var tmp$ = Kotlin.isType($receiver, AbstractInput);
        if (tmp$) {
          tmp$ = ($receiver.headEndExclusive - $receiver.headPosition | 0) > 2;
        }
        if (tmp$) {
          var index = $receiver.headPosition;
          $receiver.headPosition = index + 2 | 0;
          readPrimitive$result = $receiver.headMemory.view.getInt16(index, false);
          break readPrimitive$break;
        }
        readPrimitive$result = readShortFallback($receiver);
      } while (false);
    return readPrimitive$result;
  }
  function readShortFallback($receiver) {
    var tmp$;
    var head = (tmp$ = prepareReadFirstHead($receiver, 2)) != null ? tmp$ : prematureEndOfStream(2);
    var value = readShort_0(head);
    completeReadHead_0($receiver, head);
    return value;
  }
  function readInt_3($receiver) {
    var readPrimitive$result;
    readPrimitive$break:
      do {
        var tmp$ = Kotlin.isType($receiver, AbstractInput);
        if (tmp$) {
          tmp$ = ($receiver.headEndExclusive - $receiver.headPosition | 0) > 4;
        }
        if (tmp$) {
          var index = $receiver.headPosition;
          $receiver.headPosition = index + 4 | 0;
          readPrimitive$result = $receiver.headMemory.view.getInt32(index, false);
          break readPrimitive$break;
        }
        readPrimitive$result = readIntFallback($receiver);
      } while (false);
    return readPrimitive$result;
  }
  function readIntFallback($receiver) {
    var tmp$;
    var head = (tmp$ = prepareReadFirstHead($receiver, 4)) != null ? tmp$ : prematureEndOfStream(4);
    var value = readInt_0(head);
    completeReadHead_0($receiver, head);
    return value;
  }
  function readLong_3($receiver) {
    var readPrimitive$result;
    readPrimitive$break:
      do {
        var tmp$ = Kotlin.isType($receiver, AbstractInput);
        if (tmp$) {
          tmp$ = ($receiver.headEndExclusive - $receiver.headPosition | 0) > 8;
        }
        if (tmp$) {
          var index = $receiver.headPosition;
          $receiver.headPosition = index + 8 | 0;
          var memory = $receiver.headMemory;
          readPrimitive$result = Kotlin.Long.fromInt(memory.view.getUint32(index, false)).shiftLeft(32).or(Kotlin.Long.fromInt(memory.view.getUint32(index + 4 | 0, false)));
          break readPrimitive$break;
        }
        readPrimitive$result = readLongFallback($receiver);
      } while (false);
    return readPrimitive$result;
  }
  function readLongFallback($receiver) {
    var tmp$;
    var head = (tmp$ = prepareReadFirstHead($receiver, 8)) != null ? tmp$ : prematureEndOfStream(8);
    var value = readLong_0(head);
    completeReadHead_0($receiver, head);
    return value;
  }
  function readFloat_3($receiver) {
    var readPrimitive$result;
    readPrimitive$break:
      do {
        var tmp$ = Kotlin.isType($receiver, AbstractInput);
        if (tmp$) {
          tmp$ = ($receiver.headEndExclusive - $receiver.headPosition | 0) > 4;
        }
        if (tmp$) {
          var index = $receiver.headPosition;
          $receiver.headPosition = index + 4 | 0;
          readPrimitive$result = $receiver.headMemory.view.getFloat32(index, false);
          break readPrimitive$break;
        }
        readPrimitive$result = readFloatFallback($receiver);
      } while (false);
    return readPrimitive$result;
  }
  function readFloatFallback($receiver) {
    var tmp$;
    var head = (tmp$ = prepareReadFirstHead($receiver, 4)) != null ? tmp$ : prematureEndOfStream(4);
    var value = readFloat_0(head);
    completeReadHead_0($receiver, head);
    return value;
  }
  function readDouble_3($receiver) {
    var readPrimitive$result;
    readPrimitive$break:
      do {
        var tmp$ = Kotlin.isType($receiver, AbstractInput);
        if (tmp$) {
          tmp$ = ($receiver.headEndExclusive - $receiver.headPosition | 0) > 8;
        }
        if (tmp$) {
          var index = $receiver.headPosition;
          $receiver.headPosition = index + 8 | 0;
          readPrimitive$result = $receiver.headMemory.view.getFloat64(index, false);
          break readPrimitive$break;
        }
        readPrimitive$result = readDoubleFallback($receiver);
      } while (false);
    return readPrimitive$result;
  }
  function readDoubleFallback($receiver) {
    var tmp$;
    var head = (tmp$ = prepareReadFirstHead($receiver, 8)) != null ? tmp$ : prematureEndOfStream(8);
    var value = readDouble_0(head);
    completeReadHead_0($receiver, head);
    return value;
  }
  function readPrimitive($receiver, size, main, fallback) {
    var tmp$ = Kotlin.isType($receiver, AbstractInput);
    if (tmp$) {
      tmp$ = ($receiver.headEndExclusive - $receiver.headPosition | 0) > size;
    }
    if (tmp$) {
      var index = $receiver.headPosition;
      $receiver.headPosition = index + size | 0;
      return main($receiver.headMemory, index);
    }
    return fallback();
  }
  function readPrimitiveFallback($receiver, size, read) {
    var tmp$;
    var head = (tmp$ = prepareReadFirstHead($receiver, size)) != null ? tmp$ : prematureEndOfStream(size);
    var value = read(head);
    completeReadHead_0($receiver, head);
    return value;
  }
  function append_3($receiver, csq, start, end) {
    if (start === void 0) 
      start = 0;
    if (end === void 0) 
      end = csq.length;
    return $receiver.append_ezbsdh$(csq, start, end);
  }
  function append_4($receiver, csq, start, end) {
    if (start === void 0) 
      start = 0;
    if (end === void 0) 
      end = csq.length;
    return $receiver.append_8chfmy$(csq, start, end);
  }
  function writeFully_13($receiver, src, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = src.length - offset | 0;
    var currentOffset = {
  v: offset};
    var remaining = {
  v: length};
    var tail = prepareWriteHead_0($receiver, 1, null);
    try {
      while (true) {
        var buffer = tail;
        var tmp$ = remaining.v;
        var b = buffer.limit - buffer.writePosition | 0;
        var size = Math_0.min(tmp$, b);
        writeFully_0(buffer, src, currentOffset.v, size);
        currentOffset.v = currentOffset.v + size | 0;
        remaining.v = remaining.v - size | 0;
        if (!(remaining.v > 0)) 
          break;
        tail = prepareWriteHead_0($receiver, 1, tail);
      }
    } finally     {
      afterHeadWrite_0($receiver, tail);
    }
  }
  function writeFully_14($receiver, src, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = src.length - offset | 0;
    var currentOffset = {
  v: offset};
    var remaining = {
  v: length};
    var tail = prepareWriteHead_0($receiver, 2, null);
    try {
      var size;
      while (true) {
        var buffer = tail;
        var tmp$ = remaining.v;
        var b = buffer.limit - buffer.writePosition | 0;
        var size_0 = Math_0.min(tmp$, b);
        writeFully_3(buffer, src, currentOffset.v, size_0);
        currentOffset.v = currentOffset.v + size_0 | 0;
        remaining.v = remaining.v - size_0 | 0;
        size = Kotlin.imul(remaining.v, 2);
        if (size <= 0) 
          break;
        tail = prepareWriteHead_0($receiver, size, tail);
      }
    } finally     {
      afterHeadWrite_0($receiver, tail);
    }
  }
  function writeFully_15($receiver, src, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = src.length - offset | 0;
    var currentOffset = {
  v: offset};
    var remaining = {
  v: length};
    var tail = prepareWriteHead_0($receiver, 4, null);
    try {
      var size;
      while (true) {
        var buffer = tail;
        var tmp$ = remaining.v;
        var b = buffer.limit - buffer.writePosition | 0;
        var size_0 = Math_0.min(tmp$, b);
        writeFully_5(buffer, src, currentOffset.v, size_0);
        currentOffset.v = currentOffset.v + size_0 | 0;
        remaining.v = remaining.v - size_0 | 0;
        size = Kotlin.imul(remaining.v, 4);
        if (size <= 0) 
          break;
        tail = prepareWriteHead_0($receiver, size, tail);
      }
    } finally     {
      afterHeadWrite_0($receiver, tail);
    }
  }
  function writeFully_16($receiver, src, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = src.length - offset | 0;
    var currentOffset = {
  v: offset};
    var remaining = {
  v: length};
    var tail = prepareWriteHead_0($receiver, 8, null);
    try {
      var size;
      while (true) {
        var buffer = tail;
        var tmp$ = remaining.v;
        var b = buffer.limit - buffer.writePosition | 0;
        var size_0 = Math_0.min(tmp$, b);
        writeFully_7(buffer, src, currentOffset.v, size_0);
        currentOffset.v = currentOffset.v + size_0 | 0;
        remaining.v = remaining.v - size_0 | 0;
        size = Kotlin.imul(remaining.v, 8);
        if (size <= 0) 
          break;
        tail = prepareWriteHead_0($receiver, size, tail);
      }
    } finally     {
      afterHeadWrite_0($receiver, tail);
    }
  }
  function writeFully_17($receiver, src, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = src.length - offset | 0;
    var currentOffset = {
  v: offset};
    var remaining = {
  v: length};
    var tail = prepareWriteHead_0($receiver, 4, null);
    try {
      var size;
      while (true) {
        var buffer = tail;
        var tmp$ = remaining.v;
        var b = buffer.limit - buffer.writePosition | 0;
        var size_0 = Math_0.min(tmp$, b);
        writeFully_9(buffer, src, currentOffset.v, size_0);
        currentOffset.v = currentOffset.v + size_0 | 0;
        remaining.v = remaining.v - size_0 | 0;
        size = Kotlin.imul(remaining.v, 4);
        if (size <= 0) 
          break;
        tail = prepareWriteHead_0($receiver, size, tail);
      }
    } finally     {
      afterHeadWrite_0($receiver, tail);
    }
  }
  function writeFully_18($receiver, src, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = src.length - offset | 0;
    var currentOffset = {
  v: offset};
    var remaining = {
  v: length};
    var tail = prepareWriteHead_0($receiver, 8, null);
    try {
      var size;
      while (true) {
        var buffer = tail;
        var tmp$ = remaining.v;
        var b = buffer.limit - buffer.writePosition | 0;
        var size_0 = Math_0.min(tmp$, b);
        writeFully_10(buffer, src, currentOffset.v, size_0);
        currentOffset.v = currentOffset.v + size_0 | 0;
        remaining.v = remaining.v - size_0 | 0;
        size = Kotlin.imul(remaining.v, 8);
        if (size <= 0) 
          break;
        tail = prepareWriteHead_0($receiver, size, tail);
      }
    } finally     {
      afterHeadWrite_0($receiver, tail);
    }
  }
  function writeFully_19($receiver, src, length) {
    if (length === void 0) {
      length = src.writePosition - src.readPosition | 0;
    }
    var tmp$;
    writeFully_20($receiver, Kotlin.isType(tmp$ = src, Buffer) ? tmp$ : throwCCE(), length);
  }
  function writeFully_20($receiver, src, length) {
    if (length === void 0) {
      length = src.writePosition - src.readPosition | 0;
    }
    var currentOffset = {
  v: 0};
    var remaining = {
  v: length};
    var tail = prepareWriteHead_0($receiver, 1, null);
    try {
      while (true) {
        var buffer = tail;
        var tmp$ = remaining.v;
        var b = buffer.limit - buffer.writePosition | 0;
        var size = Math_0.min(tmp$, b);
        writeFully_12(buffer, src, size);
        currentOffset.v = currentOffset.v + size | 0;
        remaining.v = remaining.v - size | 0;
        if (!(remaining.v > 0)) 
          break;
        tail = prepareWriteHead_0($receiver, 1, tail);
      }
    } finally     {
      afterHeadWrite_0($receiver, tail);
    }
  }
  function writeFully_21($receiver, src, offset, length) {
    writeFully_22($receiver, src, Kotlin.Long.fromInt(offset), Kotlin.Long.fromInt(length));
  }
  function writeFully_22($receiver, src, offset, length) {
    var currentOffset = {
  v: offset};
    var remaining = {
  v: length};
    var tail = prepareWriteHead_0($receiver, 1, null);
    try {
      while (true) {
        var buffer = tail;
        var tmp$ = remaining.v;
        var b = Kotlin.Long.fromInt(buffer.limit - buffer.writePosition | 0);
        var size = tmp$.compareTo_11rb$(b) <= 0 ? tmp$ : b;
        src.copyTo_q2ka7j$(buffer.memory, currentOffset.v, size, Kotlin.Long.fromInt(buffer.writePosition));
        buffer.commitWritten_za3lpa$(size.toInt());
        currentOffset.v = currentOffset.v.add(size);
        remaining.v = remaining.v.subtract(size);
        if (!(remaining.v.toNumber() > 0)) 
          break;
        tail = prepareWriteHead_0($receiver, 1, tail);
      }
    } finally     {
      afterHeadWrite_0($receiver, tail);
    }
  }
  function fill_2($receiver, times, value) {
    if (value === void 0) 
      value = 0;
    if (Kotlin.isType($receiver, AbstractOutput)) {
      var written = {
  v: L0};
      var tail = prepareWriteHead_0($receiver, 1, null);
      try {
        while (true) {
          var buffer = tail;
          var a = Kotlin.Long.fromInt(buffer.limit - buffer.writePosition | 0);
          var b = times.subtract(written.v);
          var partTimes = (a.compareTo_11rb$(b) <= 0 ? a : b).toInt();
          fill(buffer, partTimes, value);
          written.v = written.v.add(Kotlin.Long.fromInt(partTimes));
          if (!(written.v.compareTo_11rb$(times) < 0)) 
            break;
          tail = prepareWriteHead_0($receiver, 1, tail);
        }
      } finally       {
        afterHeadWrite_0($receiver, tail);
      }
    } else {
      fillFallback($receiver, times, value);
    }
  }
  function fillFallback($receiver, times, value) {
    var tmp$;
    tmp$ = until(0, times).iterator();
    while (tmp$.hasNext()) {
      var iterate = tmp$.next();
      $receiver.writeByte_s8j3t7$(value);
    }
  }
  var writeWhile = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.writeWhile_rh5n47$', wrapFunction(function() {
  var prepareWriteHead = _.io.ktor.utils.io.core.internal.prepareWriteHead_6z8r11$;
  var afterHeadWrite = _.io.ktor.utils.io.core.internal.afterHeadWrite_z1cqja$;
  return function($receiver, block) {
  var tail = prepareWriteHead($receiver, 1, null);
  try {
    while (block(tail)) {
      tail = prepareWriteHead($receiver, 1, tail);
    }
  } finally   {
    afterHeadWrite($receiver, tail);
  }
};
}));
  var writeWhileSize = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.writeWhileSize_cmxbvc$', wrapFunction(function() {
  var prepareWriteHead = _.io.ktor.utils.io.core.internal.prepareWriteHead_6z8r11$;
  var afterHeadWrite = _.io.ktor.utils.io.core.internal.afterHeadWrite_z1cqja$;
  return function($receiver, initialSize, block) {
  if (initialSize === void 0) 
    initialSize = 1;
  var tail = prepareWriteHead($receiver, initialSize, null);
  try {
    var size;
    while (true) {
      size = block(tail);
      if (size <= 0) 
        break;
      tail = prepareWriteHead($receiver, size, tail);
    }
  } finally   {
    afterHeadWrite($receiver, tail);
  }
};
}));
  function writePacket_0($receiver, packet) {
    if (Kotlin.isType($receiver, BytePacketBuilderBase)) {
      $receiver.writePacket_3uq2w4$(packet);
      return;
    }
    takeWhile$break:
      do {
        var tmp$, tmp$_0;
        var release = true;
        tmp$ = prepareReadFirstHead(packet, 1);
        if (tmp$ == null) {
          break takeWhile$break;
        }
        var current = tmp$;
        try {
          do {
            writeFully_20($receiver, current);
            if (!true) {
              break;
            }
            release = false;
            tmp$_0 = prepareReadNextHead(packet, current);
            if (tmp$_0 == null) {
              break;
            }
            var next = tmp$_0;
            current = next;
            release = true;
          } while (true);
        } finally         {
          if (release) {
            completeReadHead_0(packet, current);
          }
        }
      } while (false);
  }
  var writeFullyBytesTemplate = wrapFunction(function() {
  var Math_0 = Math;
  var prepareWriteHead = _.io.ktor.utils.io.core.internal.prepareWriteHead_6z8r11$;
  var afterHeadWrite = _.io.ktor.utils.io.core.internal.afterHeadWrite_z1cqja$;
  return function($receiver, offset, length, block) {
  var currentOffset = {
  v: offset};
  var remaining = {
  v: length};
  var tail = prepareWriteHead($receiver, 1, null);
  try {
    while (true) {
      var buffer = tail;
      var tmp$ = remaining.v;
      var b = buffer.limit - buffer.writePosition | 0;
      var size = Math_0.min(tmp$, b);
      block(buffer, currentOffset.v, size);
      currentOffset.v = currentOffset.v + size | 0;
      remaining.v = remaining.v - size | 0;
      if (!(remaining.v > 0)) 
        break;
      tail = prepareWriteHead($receiver, 1, tail);
    }
  } finally   {
    afterHeadWrite($receiver, tail);
  }
};
});
  var writeFullyBytesTemplate_0 = wrapFunction(function() {
  var prepareWriteHead = _.io.ktor.utils.io.core.internal.prepareWriteHead_6z8r11$;
  var afterHeadWrite = _.io.ktor.utils.io.core.internal.afterHeadWrite_z1cqja$;
  return function($receiver, initialOffset, length, block) {
  var currentOffset = {
  v: initialOffset};
  var remaining = {
  v: length};
  var tail = prepareWriteHead($receiver, 1, null);
  try {
    while (true) {
      var buffer = tail;
      var tmp$ = remaining.v;
      var b = Kotlin.Long.fromInt(buffer.limit - buffer.writePosition | 0);
      var size = tmp$.compareTo_11rb$(b) <= 0 ? tmp$ : b;
      block(buffer.memory, Kotlin.Long.fromInt(buffer.writePosition), currentOffset.v, size);
      buffer.commitWritten_za3lpa$(size.toInt());
      currentOffset.v = currentOffset.v.add(size);
      remaining.v = remaining.v.subtract(size);
      if (!(remaining.v.toNumber() > 0)) 
        break;
      tail = prepareWriteHead($receiver, 1, tail);
    }
  } finally   {
    afterHeadWrite($receiver, tail);
  }
};
});
  var writeFullyTemplate = wrapFunction(function() {
  var Math_0 = Math;
  var prepareWriteHead = _.io.ktor.utils.io.core.internal.prepareWriteHead_6z8r11$;
  var afterHeadWrite = _.io.ktor.utils.io.core.internal.afterHeadWrite_z1cqja$;
  return function($receiver, componentSize, offset, length, block) {
  var currentOffset = {
  v: offset};
  var remaining = {
  v: length};
  var tail = prepareWriteHead($receiver, componentSize, null);
  try {
    var size;
    while (true) {
      var buffer = tail;
      var tmp$ = remaining.v;
      var b = buffer.limit - buffer.writePosition | 0;
      var size_0 = Math_0.min(tmp$, b);
      block(buffer, currentOffset.v, size_0);
      currentOffset.v = currentOffset.v + size_0 | 0;
      remaining.v = remaining.v - size_0 | 0;
      size = Kotlin.imul(remaining.v, componentSize);
      if (size <= 0) 
        break;
      tail = prepareWriteHead($receiver, size, tail);
    }
  } finally   {
    afterHeadWrite($receiver, tail);
  }
};
});
  function writeShort_4($receiver, value, byteOrder) {
    var tmp$;
    if (equals(byteOrder, ByteOrder$BIG_ENDIAN_getInstance())) 
      tmp$ = value;
    else {
      tmp$ = reverseByteOrder_2(value);
    }
    writeShort_5($receiver, tmp$);
  }
  function writeInt_4($receiver, value, byteOrder) {
    var tmp$;
    if (equals(byteOrder, ByteOrder$BIG_ENDIAN_getInstance())) 
      tmp$ = value;
    else {
      tmp$ = reverseByteOrder_3(value);
    }
    writeInt_5($receiver, tmp$);
  }
  function writeLong_2($receiver, value, byteOrder) {
    var tmp$;
    if (equals(byteOrder, ByteOrder$BIG_ENDIAN_getInstance())) 
      tmp$ = value;
    else {
      tmp$ = reverseByteOrder_4(value);
    }
    writeLong_3($receiver, tmp$);
  }
  function writeFloat_2($receiver, value, byteOrder) {
    var tmp$;
    if (equals(byteOrder, ByteOrder$BIG_ENDIAN_getInstance())) 
      tmp$ = value;
    else {
      tmp$ = reverseByteOrder_5(value);
    }
    writeFloat_3($receiver, tmp$);
  }
  function writeDouble_2($receiver, value, byteOrder) {
    var tmp$;
    if (equals(byteOrder, ByteOrder$BIG_ENDIAN_getInstance())) 
      tmp$ = value;
    else {
      tmp$ = reverseByteOrder_6(value);
    }
    writeDouble_3($receiver, tmp$);
  }
  function writeShortLittleEndian_0($receiver, value) {
    writeShort_5($receiver, reverseByteOrder_2(value));
  }
  function writeIntLittleEndian_0($receiver, value) {
    writeInt_5($receiver, reverseByteOrder_3(value));
  }
  function writeLongLittleEndian_0($receiver, value) {
    writeLong_3($receiver, reverseByteOrder_4(value));
  }
  function writeFloatLittleEndian_0($receiver, value) {
    writeFloat_3($receiver, reverseByteOrder_5(value));
  }
  function writeDoubleLittleEndian_0($receiver, value) {
    writeDouble_3($receiver, reverseByteOrder_6(value));
  }
  function writeFullyLittleEndian($receiver, source, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = source.size - offset | 0;
    writeFullyLittleEndian_1($receiver, source.storage, offset, length);
  }
  function writeShortLittleEndian_1($receiver, value) {
    writeShort_2($receiver, reverseByteOrder_2(value));
  }
  function writeIntLittleEndian_1($receiver, value) {
    writeInt_2($receiver, reverseByteOrder_3(value));
  }
  function writeLongLittleEndian_1($receiver, value) {
    writeLong_0($receiver, reverseByteOrder_4(value));
  }
  function writeFloatLittleEndian_1($receiver, value) {
    writeFloat_0($receiver, reverseByteOrder_5(value));
  }
  function writeDoubleLittleEndian_1($receiver, value) {
    writeDouble_0($receiver, reverseByteOrder_6(value));
  }
  function writeFullyLittleEndian_0($receiver, source, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = source.size - offset | 0;
    writeFullyLittleEndian_8($receiver, source.storage, offset, length);
  }
  function writeFullyLittleEndian_1($receiver, source, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = source.length - offset | 0;
    var untilIndex = offset + length | 0;
    var start = {
  v: offset};
    var tail = prepareWriteHead_0($receiver, 2, null);
    try {
      var size;
      while (true) {
        var buffer = tail;
        var block$result;
        var a = (buffer.limit - buffer.writePosition | 0) / 2 | 0;
        var b = untilIndex - start.v | 0;
        var size_0 = Math_0.min(a, b);
        var lastIndex = start.v + size_0 - 1 | 0;
        for (var index = start.v; index <= lastIndex; index++) {
          writeShort_2(buffer, reverseByteOrder_2(source[index]));
        }
        start.v = start.v + size_0 | 0;
        if (start.v < untilIndex) {
          block$result = 2;
        } else {
          block$result = 0;
        }
        size = block$result;
        if (size <= 0) 
          break;
        tail = prepareWriteHead_0($receiver, size, tail);
      }
    } finally     {
      afterHeadWrite_0($receiver, tail);
    }
  }
  function writeFullyLittleEndian_2($receiver, source, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = source.size - offset | 0;
    writeFullyLittleEndian_3($receiver, source.storage, offset, length);
  }
  function writeFullyLittleEndian_3($receiver, source, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = source.length - offset | 0;
    var untilIndex = offset + length | 0;
    var start = {
  v: offset};
    var tail = prepareWriteHead_0($receiver, 4, null);
    try {
      var size;
      while (true) {
        var buffer = tail;
        var block$result;
        var a = (buffer.limit - buffer.writePosition | 0) / 4 | 0;
        var b = untilIndex - start.v | 0;
        var size_0 = Math_0.min(a, b);
        var lastIndex = start.v + size_0 - 1 | 0;
        for (var index = start.v; index <= lastIndex; index++) {
          writeInt_2(buffer, reverseByteOrder_3(source[index]));
        }
        start.v = start.v + size_0 | 0;
        if (start.v < untilIndex) {
          block$result = 4;
        } else {
          block$result = 0;
        }
        size = block$result;
        if (size <= 0) 
          break;
        tail = prepareWriteHead_0($receiver, size, tail);
      }
    } finally     {
      afterHeadWrite_0($receiver, tail);
    }
  }
  function writeFullyLittleEndian_4($receiver, source, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = source.size - offset | 0;
    writeFullyLittleEndian_5($receiver, source.storage, offset, length);
  }
  function writeFullyLittleEndian_5($receiver, source, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = source.length - offset | 0;
    var untilIndex = offset + length | 0;
    var start = {
  v: offset};
    var tail = prepareWriteHead_0($receiver, 8, null);
    try {
      var size;
      while (true) {
        var buffer = tail;
        var block$result;
        var a = (buffer.limit - buffer.writePosition | 0) / 8 | 0;
        var b = untilIndex - start.v | 0;
        var size_0 = Math_0.min(a, b);
        var lastIndex = start.v + size_0 - 1 | 0;
        for (var index = start.v; index <= lastIndex; index++) {
          writeLong_0(buffer, reverseByteOrder_4(source[index]));
        }
        start.v = start.v + size_0 | 0;
        if (start.v < untilIndex) {
          block$result = 8;
        } else {
          block$result = 0;
        }
        size = block$result;
        if (size <= 0) 
          break;
        tail = prepareWriteHead_0($receiver, size, tail);
      }
    } finally     {
      afterHeadWrite_0($receiver, tail);
    }
  }
  function writeFullyLittleEndian_6($receiver, source, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = source.length - offset | 0;
    var untilIndex = offset + length | 0;
    var start = {
  v: offset};
    var tail = prepareWriteHead_0($receiver, 4, null);
    try {
      var size;
      while (true) {
        var buffer = tail;
        var block$result;
        var a = (buffer.limit - buffer.writePosition | 0) / 4 | 0;
        var b = untilIndex - start.v | 0;
        var size_0 = Math_0.min(a, b);
        var lastIndex = start.v + size_0 - 1 | 0;
        for (var index = start.v; index <= lastIndex; index++) {
          writeFloat_0(buffer, reverseByteOrder_5(source[index]));
        }
        start.v = start.v + size_0 | 0;
        if (start.v < untilIndex) {
          block$result = 4;
        } else {
          block$result = 0;
        }
        size = block$result;
        if (size <= 0) 
          break;
        tail = prepareWriteHead_0($receiver, size, tail);
      }
    } finally     {
      afterHeadWrite_0($receiver, tail);
    }
  }
  function writeFullyLittleEndian_7($receiver, source, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = source.length - offset | 0;
    var untilIndex = offset + length | 0;
    var start = {
  v: offset};
    var tail = prepareWriteHead_0($receiver, 8, null);
    try {
      var size;
      while (true) {
        var buffer = tail;
        var block$result;
        var a = (buffer.limit - buffer.writePosition | 0) / 8 | 0;
        var b = untilIndex - start.v | 0;
        var size_0 = Math_0.min(a, b);
        var lastIndex = start.v + size_0 - 1 | 0;
        for (var index = start.v; index <= lastIndex; index++) {
          writeDouble_0(buffer, reverseByteOrder_6(source[index]));
        }
        start.v = start.v + size_0 | 0;
        if (start.v < untilIndex) {
          block$result = 8;
        } else {
          block$result = 0;
        }
        size = block$result;
        if (size <= 0) 
          break;
        tail = prepareWriteHead_0($receiver, size, tail);
      }
    } finally     {
      afterHeadWrite_0($receiver, tail);
    }
  }
  function writeFullyLittleEndian_8($receiver, source, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = source.length - offset | 0;
    var untilIndex = offset + length | 0;
    var start = offset;
    var buffer = $receiver;
    var a = (buffer.limit - buffer.writePosition | 0) / 2 | 0;
    var b = untilIndex - start | 0;
    var size = Math_0.min(a, b);
    var lastIndex = start + size - 1 | 0;
    for (var index = start; index <= lastIndex; index++) {
      writeShort_2(buffer, reverseByteOrder_2(source[index]));
    }
    start = start + size | 0;
  }
  function writeFullyLittleEndian_9($receiver, source, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = source.size - offset | 0;
    writeFullyLittleEndian_10($receiver, source.storage, offset, length);
  }
  function writeFullyLittleEndian_10($receiver, source, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = source.length - offset | 0;
    var untilIndex = offset + length | 0;
    var start = offset;
    var buffer = $receiver;
    var a = (buffer.limit - buffer.writePosition | 0) / 4 | 0;
    var b = untilIndex - start | 0;
    var size = Math_0.min(a, b);
    var lastIndex = start + size - 1 | 0;
    for (var index = start; index <= lastIndex; index++) {
      writeInt_2(buffer, reverseByteOrder_3(source[index]));
    }
    start = start + size | 0;
  }
  function writeFullyLittleEndian_11($receiver, source, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = source.size - offset | 0;
    writeFullyLittleEndian_12($receiver, source.storage, offset, length);
  }
  function writeFullyLittleEndian_12($receiver, source, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = source.length - offset | 0;
    var untilIndex = offset + length | 0;
    var start = offset;
    var buffer = $receiver;
    var a = (buffer.limit - buffer.writePosition | 0) / 8 | 0;
    var b = untilIndex - start | 0;
    var size = Math_0.min(a, b);
    var lastIndex = start + size - 1 | 0;
    for (var index = start; index <= lastIndex; index++) {
      writeLong_0(buffer, reverseByteOrder_4(source[index]));
    }
    start = start + size | 0;
  }
  function writeFullyLittleEndian_13($receiver, source, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = source.length - offset | 0;
    var untilIndex = offset + length | 0;
    var start = offset;
    var buffer = $receiver;
    var a = (buffer.limit - buffer.writePosition | 0) / 4 | 0;
    var b = untilIndex - start | 0;
    var size = Math_0.min(a, b);
    var lastIndex = start + size - 1 | 0;
    for (var index = start; index <= lastIndex; index++) {
      writeFloat_0(buffer, reverseByteOrder_5(source[index]));
    }
    start = start + size | 0;
  }
  function writeFullyLittleEndian_14($receiver, source, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = source.length - offset | 0;
    var untilIndex = offset + length | 0;
    var start = offset;
    var buffer = $receiver;
    var a = (buffer.limit - buffer.writePosition | 0) / 8 | 0;
    var b = untilIndex - start | 0;
    var size = Math_0.min(a, b);
    var lastIndex = start + size - 1 | 0;
    for (var index = start; index <= lastIndex; index++) {
      writeDouble_0(buffer, reverseByteOrder_6(source[index]));
    }
    start = start + size | 0;
  }
  function writePrimitiveTemplate(value, write, reverse) {
    write(reverse(value));
  }
  function writePrimitiveTemplate_0(value, byteOrder, write, reverse) {
    var tmp$;
    if (equals(byteOrder, ByteOrder$BIG_ENDIAN_getInstance())) 
      tmp$ = value;
    else 
      tmp$ = reverse(value);
    write(tmp$);
  }
  var writeArrayTemplate = wrapFunction(function() {
  var Math_0 = Math;
  var prepareWriteHead = _.io.ktor.utils.io.core.internal.prepareWriteHead_6z8r11$;
  var afterHeadWrite = _.io.ktor.utils.io.core.internal.afterHeadWrite_z1cqja$;
  return function($receiver, offset, length, componentSize, writeComponent) {
  var untilIndex = offset + length | 0;
  var start = {
  v: offset};
  var tail = prepareWriteHead($receiver, componentSize, null);
  try {
    var size;
    while (true) {
      var buffer = tail;
      var block$result;
      var a = (buffer.limit - buffer.writePosition | 0) / componentSize | 0;
      var b = untilIndex - start.v | 0;
      var size_0 = Math_0.min(a, b);
      var lastIndex = start.v + size_0 - 1 | 0;
      for (var index = start.v; index <= lastIndex; index++) {
        writeComponent(buffer, index);
      }
      start.v = start.v + size_0 | 0;
      if (start.v < untilIndex) {
        block$result = componentSize;
      } else {
        block$result = 0;
      }
      size = block$result;
      if (size <= 0) 
        break;
      tail = prepareWriteHead($receiver, size, tail);
    }
  } finally   {
    afterHeadWrite($receiver, tail);
  }
};
});
  var writeArrayTemplate_0 = wrapFunction(function() {
  var Math_0 = Math;
  return function($receiver, offset, length, componentSize, writeComponent) {
  var untilIndex = offset + length | 0;
  var start = offset;
  var buffer = $receiver;
  var a = (buffer.limit - buffer.writePosition | 0) / componentSize | 0;
  var b = untilIndex - start | 0;
  var size = Math_0.min(a, b);
  var lastIndex = start + size - 1 | 0;
  for (var index = start; index <= lastIndex; index++) {
    writeComponent(buffer, index);
  }
  start = start + size | 0;
};
});
  function writeShort_5($receiver, value) {
    var writePrimitiveTemplate$result;
    writePrimitiveTemplate$break:
      do {
        if (Kotlin.isType($receiver, AbstractOutput)) {
          var index = $receiver.tailPosition_8be2vx$;
          if (($receiver.tailEndExclusive_8be2vx$ - index | 0) > 2) {
            $receiver.tailPosition_8be2vx$ = index + 2 | 0;
            $receiver.tailMemory_8be2vx$.view.setInt16(index, value, false);
            writePrimitiveTemplate$result = true;
            break writePrimitiveTemplate$break;
          }
        }
        writePrimitiveTemplate$result = false;
      } while (false);
    if (!writePrimitiveTemplate$result) {
      writeShortFallback($receiver, value);
    }
  }
  function writeShortFallback($receiver, value) {
    var writePrimitiveFallbackTemplate$result;
    writePrimitiveFallbackTemplate$break:
      do {
        if (Kotlin.isType($receiver, AbstractOutput)) {
          var tail = $receiver.prepareWriteHead_za3lpa$(2);
          writeShort_2(tail, value);
          $receiver.afterHeadWrite();
          writePrimitiveFallbackTemplate$result = true;
          break writePrimitiveFallbackTemplate$break;
        }
        writePrimitiveFallbackTemplate$result = false;
      } while (false);
    if (!writePrimitiveFallbackTemplate$result) {
      $receiver.writeByte_s8j3t7$(toByte((value & 255) >> 8));
      $receiver.writeByte_s8j3t7$(toByte(value & 255));
    }
  }
  function writeInt_5($receiver, value) {
    var writePrimitiveTemplate$result;
    writePrimitiveTemplate$break:
      do {
        if (Kotlin.isType($receiver, AbstractOutput)) {
          var index = $receiver.tailPosition_8be2vx$;
          if (($receiver.tailEndExclusive_8be2vx$ - index | 0) > 4) {
            $receiver.tailPosition_8be2vx$ = index + 4 | 0;
            $receiver.tailMemory_8be2vx$.view.setInt32(index, value, false);
            writePrimitiveTemplate$result = true;
            break writePrimitiveTemplate$break;
          }
        }
        writePrimitiveTemplate$result = false;
      } while (false);
    if (!writePrimitiveTemplate$result) {
      writeIntFallback($receiver, value);
    }
  }
  function writeIntFallback($receiver, value) {
    var writePrimitiveFallbackTemplate$result;
    writePrimitiveFallbackTemplate$break:
      do {
        if (Kotlin.isType($receiver, AbstractOutput)) {
          var tail = $receiver.prepareWriteHead_za3lpa$(4);
          writeInt_2(tail, value);
          $receiver.afterHeadWrite();
          writePrimitiveFallbackTemplate$result = true;
          break writePrimitiveFallbackTemplate$break;
        }
        writePrimitiveFallbackTemplate$result = false;
      } while (false);
    if (!writePrimitiveFallbackTemplate$result) {
      writeIntByteByByte($receiver, value);
    }
  }
  function writeIntByteByByte($receiver, value) {
    var it = toShort(value >>> 16);
    $receiver.writeByte_s8j3t7$(toByte((it & 255) >> 8));
    $receiver.writeByte_s8j3t7$(toByte(it & 255));
    var it_0 = toShort(value & 65535);
    $receiver.writeByte_s8j3t7$(toByte((it_0 & 255) >> 8));
    $receiver.writeByte_s8j3t7$(toByte(it_0 & 255));
  }
  function writeLong_3($receiver, value) {
    var writePrimitiveTemplate$result;
    writePrimitiveTemplate$break:
      do {
        if (Kotlin.isType($receiver, AbstractOutput)) {
          var index = $receiver.tailPosition_8be2vx$;
          if (($receiver.tailEndExclusive_8be2vx$ - index | 0) > 8) {
            $receiver.tailPosition_8be2vx$ = index + 8 | 0;
            var memory = $receiver.tailMemory_8be2vx$;
            memory.view.setInt32(index, value.shiftRight(32).toInt(), false);
            memory.view.setInt32(index + 4 | 0, value.and(L4294967295).toInt(), false);
            writePrimitiveTemplate$result = true;
            break writePrimitiveTemplate$break;
          }
        }
        writePrimitiveTemplate$result = false;
      } while (false);
    if (!writePrimitiveTemplate$result) {
      writeLongFallback($receiver, value);
    }
  }
  function writeLongFallback($receiver, value) {
    var writePrimitiveFallbackTemplate$result;
    writePrimitiveFallbackTemplate$break:
      do {
        if (Kotlin.isType($receiver, AbstractOutput)) {
          var tail = $receiver.prepareWriteHead_za3lpa$(8);
          writeLong_0(tail, value);
          $receiver.afterHeadWrite();
          writePrimitiveFallbackTemplate$result = true;
          break writePrimitiveFallbackTemplate$break;
        }
        writePrimitiveFallbackTemplate$result = false;
      } while (false);
    if (!writePrimitiveFallbackTemplate$result) {
      writeIntByteByByte($receiver, value.shiftRightUnsigned(32).toInt());
      writeIntByteByByte($receiver, value.and(L4294967295).toInt());
    }
  }
  function writeFloat_3($receiver, value) {
    var writePrimitiveTemplate$result;
    writePrimitiveTemplate$break:
      do {
        if (Kotlin.isType($receiver, AbstractOutput)) {
          var index = $receiver.tailPosition_8be2vx$;
          if (($receiver.tailEndExclusive_8be2vx$ - index | 0) > 4) {
            $receiver.tailPosition_8be2vx$ = index + 4 | 0;
            $receiver.tailMemory_8be2vx$.view.setFloat32(index, value, false);
            writePrimitiveTemplate$result = true;
            break writePrimitiveTemplate$break;
          }
        }
        writePrimitiveTemplate$result = false;
      } while (false);
    if (!writePrimitiveTemplate$result) {
      writeIntFallback($receiver, toRawBits(value));
    }
  }
  function writeDouble_3($receiver, value) {
    var writePrimitiveTemplate$result;
    writePrimitiveTemplate$break:
      do {
        if (Kotlin.isType($receiver, AbstractOutput)) {
          var index = $receiver.tailPosition_8be2vx$;
          if (($receiver.tailEndExclusive_8be2vx$ - index | 0) > 8) {
            $receiver.tailPosition_8be2vx$ = index + 8 | 0;
            $receiver.tailMemory_8be2vx$.view.setFloat64(index, value, false);
            writePrimitiveTemplate$result = true;
            break writePrimitiveTemplate$break;
          }
        }
        writePrimitiveTemplate$result = false;
      } while (false);
    if (!writePrimitiveTemplate$result) {
      writeLongFallback($receiver, toRawBits_0(value));
    }
  }
  function writePrimitiveTemplate_1($receiver, componentSize, block) {
    if (Kotlin.isType($receiver, AbstractOutput)) {
      var index = $receiver.tailPosition_8be2vx$;
      if (($receiver.tailEndExclusive_8be2vx$ - index | 0) > componentSize) {
        $receiver.tailPosition_8be2vx$ = index + componentSize | 0;
        block($receiver.tailMemory_8be2vx$, index);
        return true;
      }
    }
    return false;
  }
  function writePrimitiveFallbackTemplate($receiver, componentSize, writeOperation) {
    if (Kotlin.isType($receiver, AbstractOutput)) {
      var tail = $receiver.prepareWriteHead_za3lpa$(componentSize);
      writeOperation(tail);
      $receiver.afterHeadWrite();
      return true;
    }
    return false;
  }
  function ByteReadPacketBase(head, remaining, pool) {
    ByteReadPacketBase$Companion_getInstance();
    AbstractInput.call(this, head, remaining, pool);
  }
  function ByteReadPacketBase$Companion() {
    ByteReadPacketBase$Companion_instance = this;
  }
  Object.defineProperty(ByteReadPacketBase$Companion.prototype, 'Empty', {
  get: function() {
  return ByteReadPacket$Companion_getInstance().Empty;
}});
  ByteReadPacketBase$Companion.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'Companion', 
  interfaces: []};
  var ByteReadPacketBase$Companion_instance = null;
  function ByteReadPacketBase$Companion_getInstance() {
    if (ByteReadPacketBase$Companion_instance === null) {
      new ByteReadPacketBase$Companion();
    }
    return ByteReadPacketBase$Companion_instance;
  }
  ByteReadPacketBase.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'ByteReadPacketBase', 
  interfaces: [AbstractInput]};
  function ByteReadPacketBase_init(head, remaining, pool, $this) {
    $this = $this || Object.create(ByteReadPacketBase.prototype);
    var tmp$;
    ByteReadPacketBase.call($this, Kotlin.isType(tmp$ = head, ChunkBuffer) ? tmp$ : throwCCE(), remaining, pool);
    return $this;
  }
  var get_isEmpty = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.get_isEmpty_7wsnj1$', function($receiver) {
  return $receiver.endOfInput;
});
  function get_isNotEmpty($receiver) {
    var tmp$;
    if ($receiver.endOfInput) 
      return false;
    if ((tmp$ = prepareReadFirstHead($receiver, 1)) != null) {
      completeReadHead_0($receiver, tmp$);
      return true;
    }
    return false;
  }
  var get_isEmpty_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.get_isEmpty_mlrm9h$', function($receiver) {
  return $receiver.endOfInput;
});
  var get_isNotEmpty_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.get_isNotEmpty_mlrm9h$', function($receiver) {
  return !$receiver.endOfInput;
});
  var read_1 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.read_q4ikbw$', wrapFunction(function() {
  var prematureEndOfStream = _.io.ktor.utils.io.core.prematureEndOfStream_za3lpa$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  return function($receiver, n, block) {
  if (n === void 0) 
    n = 1;
  var tmp$;
  var buffer = (tmp$ = $receiver.prepareRead_za3lpa$(n)) != null ? tmp$ : prematureEndOfStream(n);
  var positionBefore = buffer.readPosition;
  try {
    block(buffer);
  } finally   {
    var positionAfter = buffer.readPosition;
    if (positionAfter < positionBefore) {
      throw IllegalStateException_init("Buffer's position shouldn't be rewinded");
    }
    if (positionAfter === buffer.writePosition) {
      $receiver.ensureNext_j2u0py$(buffer);
    } else {
      $receiver.headPosition = positionAfter;
    }
  }
};
}));
  var preview = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.preview_pcj9ic$', wrapFunction(function() {
  var preview = _.io.ktor.utils.io.core.preview_en5wxq$;
  return function($receiver, block) {
  var tmp$;
  var packet = preview($receiver);
  try {
    tmp$ = block(packet);
  } finally   {
    packet.release();
  }
  return tmp$;
};
}));
  function preview_0($receiver) {
    var tmp$;
    var head = $receiver.head_8be2vx$;
    if (head === ChunkBuffer$Companion_getInstance().Empty) 
      tmp$ = ByteReadPacket$Companion_getInstance().Empty;
    else 
      tmp$ = ByteReadPacket_init(copyAll(head), $receiver._pool);
    return tmp$;
  }
  function discardUntilDelimiter($receiver, delimiter) {
    var discardedTotal = {
  v: L0};
    takeWhile$break:
      do {
        var tmp$, tmp$_0;
        var release = true;
        tmp$ = prepareReadFirstHead($receiver, 1);
        if (tmp$ == null) {
          break takeWhile$break;
        }
        var current = tmp$;
        try {
          do {
            var chunk = current;
            var discarded = discardUntilDelimiterImpl(chunk, delimiter);
            discardedTotal.v = discardedTotal.v.add(Kotlin.Long.fromInt(discarded));
            var tmp$_1 = discarded > 0;
            if (tmp$_1) {
              tmp$_1 = !(chunk.writePosition > chunk.readPosition);
            }
            if (!tmp$_1) {
              break;
            }
            release = false;
            tmp$_0 = prepareReadNextHead($receiver, current);
            if (tmp$_0 == null) {
              break;
            }
            var next = tmp$_0;
            current = next;
            release = true;
          } while (true);
        } finally         {
          if (release) {
            completeReadHead_0($receiver, current);
          }
        }
      } while (false);
    return discardedTotal.v;
  }
  function discardUntilDelimiters($receiver, delimiter1, delimiter2) {
    var discardedTotal = {
  v: L0};
    takeWhile$break:
      do {
        var tmp$, tmp$_0;
        var release = true;
        tmp$ = prepareReadFirstHead($receiver, 1);
        if (tmp$ == null) {
          break takeWhile$break;
        }
        var current = tmp$;
        try {
          do {
            var chunk = current;
            var discarded = discardUntilDelimitersImpl(chunk, delimiter1, delimiter2);
            discardedTotal.v = discardedTotal.v.add(Kotlin.Long.fromInt(discarded));
            var tmp$_1 = discarded > 0;
            if (tmp$_1) {
              tmp$_1 = !(chunk.writePosition > chunk.readPosition);
            }
            if (!tmp$_1) {
              break;
            }
            release = false;
            tmp$_0 = prepareReadNextHead($receiver, current);
            if (tmp$_0 == null) {
              break;
            }
            var next = tmp$_0;
            current = next;
            release = true;
          } while (true);
        } finally         {
          if (release) {
            completeReadHead_0($receiver, current);
          }
        }
      } while (false);
    return discardedTotal.v;
  }
  function readUntilDelimiter($receiver, delimiter, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length;
    var currentOffset = {
  v: offset};
    var dstRemaining = {
  v: length};
    takeWhile$break:
      do {
        var tmp$, tmp$_0;
        var release = true;
        tmp$ = prepareReadFirstHead($receiver, 1);
        if (tmp$ == null) {
          break takeWhile$break;
        }
        var current = tmp$;
        try {
          do {
            var chunk = current;
            var copied = readUntilDelimiterImpl(chunk, delimiter, dst, currentOffset.v, dstRemaining.v);
            currentOffset.v = currentOffset.v + copied | 0;
            dstRemaining.v = dstRemaining.v - copied | 0;
            var tmp$_1 = dstRemaining.v > 0;
            if (tmp$_1) {
              tmp$_1 = !(chunk.writePosition > chunk.readPosition);
            }
            if (!tmp$_1) {
              break;
            }
            release = false;
            tmp$_0 = prepareReadNextHead($receiver, current);
            if (tmp$_0 == null) {
              break;
            }
            var next = tmp$_0;
            current = next;
            release = true;
          } while (true);
        } finally         {
          if (release) {
            completeReadHead_0($receiver, current);
          }
        }
      } while (false);
    return currentOffset.v - offset | 0;
  }
  function readUntilDelimiters($receiver, delimiter1, delimiter2, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length;
    if (delimiter1 === delimiter2) 
      return readUntilDelimiter($receiver, delimiter1, dst, offset, length);
    var currentOffset = {
  v: offset};
    var dstRemaining = {
  v: length};
    takeWhile$break:
      do {
        var tmp$, tmp$_0;
        var release = true;
        tmp$ = prepareReadFirstHead($receiver, 1);
        if (tmp$ == null) {
          break takeWhile$break;
        }
        var current = tmp$;
        try {
          do {
            var chunk = current;
            var copied = readUntilDelimitersImpl(chunk, delimiter1, delimiter2, dst, currentOffset.v, dstRemaining.v);
            currentOffset.v = currentOffset.v + copied | 0;
            dstRemaining.v = dstRemaining.v - copied | 0;
            if (!(!(chunk.writePosition > chunk.readPosition) && dstRemaining.v > 0)) {
              break;
            }
            release = false;
            tmp$_0 = prepareReadNextHead($receiver, current);
            if (tmp$_0 == null) {
              break;
            }
            var next = tmp$_0;
            current = next;
            release = true;
          } while (true);
        } finally         {
          if (release) {
            completeReadHead_0($receiver, current);
          }
        }
      } while (false);
    return currentOffset.v - offset | 0;
  }
  function readUntilDelimiter_0($receiver, delimiter, dst) {
    var copiedTotal = {
  v: L0};
    takeWhile$break:
      do {
        var tmp$, tmp$_0;
        var release = true;
        tmp$ = prepareReadFirstHead($receiver, 1);
        if (tmp$ == null) {
          break takeWhile$break;
        }
        var current = tmp$;
        try {
          do {
            var chunk = current;
            var copied = readUntilDelimiterImpl_0(chunk, delimiter, dst);
            copiedTotal.v = copiedTotal.v.add(Kotlin.Long.fromInt(copied));
            if (!!(chunk.writePosition > chunk.readPosition)) {
              break;
            }
            release = false;
            tmp$_0 = prepareReadNextHead($receiver, current);
            if (tmp$_0 == null) {
              break;
            }
            var next = tmp$_0;
            current = next;
            release = true;
          } while (true);
        } finally         {
          if (release) {
            completeReadHead_0($receiver, current);
          }
        }
      } while (false);
    return copiedTotal.v;
  }
  function readUntilDelimiters_0($receiver, delimiter1, delimiter2, dst) {
    var copiedTotal = {
  v: L0};
    takeWhile$break:
      do {
        var tmp$, tmp$_0;
        var release = true;
        tmp$ = prepareReadFirstHead($receiver, 1);
        if (tmp$ == null) {
          break takeWhile$break;
        }
        var current = tmp$;
        try {
          do {
            var chunk = current;
            var copied = readUntilDelimitersImpl_0(chunk, delimiter1, delimiter2, dst);
            copiedTotal.v = copiedTotal.v.add(Kotlin.Long.fromInt(copied));
            if (!!(chunk.writePosition > chunk.readPosition)) {
              break;
            }
            release = false;
            tmp$_0 = prepareReadNextHead($receiver, current);
            if (tmp$_0 == null) {
              break;
            }
            var next = tmp$_0;
            current = next;
            release = true;
          } while (true);
        } finally         {
          if (release) {
            completeReadHead_0($receiver, current);
          }
        }
      } while (false);
    return copiedTotal.v;
  }
  function discardUntilDelimiterImplMemory(buffer, delimiter) {
    var start = buffer.readPosition;
    var i = start;
    var limit = buffer.writePosition;
    var memory = buffer.memory;
    while (i < limit && memory.view.getInt8(i) !== delimiter) {
      i = i + 1 | 0;
    }
    buffer.discardUntilIndex_kcn2v3$(i);
    return i - start | 0;
  }
  function discardUntilDelimitersImplMemory(buffer, delimiter1, delimiter2) {
    var start = buffer.readPosition;
    var i = start;
    var limit = buffer.writePosition;
    var memory = buffer.memory;
    while (i < limit) {
      var v = memory.view.getInt8(i);
      if (v === delimiter1 || v === delimiter2) 
        break;
      i = i + 1 | 0;
    }
    buffer.discardUntilIndex_kcn2v3$(i);
    return i - start | 0;
  }
  var copyUntil = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.copyUntil_31bg9c$', wrapFunction(function() {
  var Math_0 = Math;
  var copyTo = _.io.ktor.utils.io.bits.copyTo_tiw1kd$;
  return function($receiver, predicate, dst, offset, length) {
  var tmp$;
  var readPosition = $receiver.readPosition;
  var a = $receiver.writePosition;
  var b = readPosition + length | 0;
  var end = Math_0.min(a, b);
  var memory = $receiver.memory;
  tmp$ = end;
  for (var index = readPosition; index < tmp$; index++) {
    if (predicate(memory.view.getInt8(index))) {
      end = index;
      break;
    }
  }
  var copySize = end - readPosition | 0;
  copyTo(memory, dst, readPosition, copySize, offset);
  return copySize;
};
}));
  var copyUntil_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.copyUntil_ljye23$', wrapFunction(function() {
  var writeFully = _.io.ktor.utils.io.core.writeFully_apj91c$;
  return function($receiver, predicate, dst) {
  var index = $receiver.readPosition;
  var end = $receiver.writePosition;
  var memory = $receiver.memory;
  do {
    var tmp$ = index === end;
    if (!tmp$) {
      tmp$ = predicate(memory.view.getInt8(index));
    }
    if (tmp$) {
      break;
    }
    index = index + 1 | 0;
  } while (true);
  var size = index - $receiver.readPosition | 0;
  writeFully(dst, $receiver, size);
  return size;
};
}));
  var toByteArray = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.toByteArray_nek0qj$', wrapFunction(function() {
  var charsets = _.io.ktor.utils.io.charsets;
  var encodeToByteArray = _.io.ktor.utils.io.charsets.encodeToByteArray_fj4osb$;
  return function($receiver, charset) {
  if (charset === void 0) 
    charset = charsets.Charsets.UTF_8;
  return encodeToByteArray(charset.newEncoder(), $receiver, 0, $receiver.length);
};
}));
  function readUTF8Line_0($receiver, estimate, limit) {
    if (estimate === void 0) 
      estimate = 16;
    if (limit === void 0) 
      limit = 2147483647;
    if ($receiver.endOfInput) 
      return null;
    var sb = StringBuilder_init_0(estimate);
    return readUTF8LineTo_0($receiver, sb, limit) ? sb.toString() : null;
  }
  function readUTF8Line_1($receiver, estimate, limit) {
    if (estimate === void 0) 
      estimate = 16;
    if (limit === void 0) 
      limit = 2147483647;
    var sb = StringBuilder_init_0(estimate);
    return readUTF8LineTo_0($receiver, sb, limit) ? sb.toString() : null;
  }
  function readUTF8LineTo_0($receiver, out, limit) {
    var decoded = {
  v: 0};
    var size = {
  v: 1};
    var cr = {
  v: false};
    var end = {
  v: false};
    takeWhileSize$break:
      do {
        var tmp$, tmp$_0;
        var release = true;
        tmp$ = prepareReadFirstHead($receiver, 1);
        if (tmp$ == null) {
          break takeWhileSize$break;
        }
        var current = tmp$;
        var size_0 = 1;
        try {
          loop_label:
            do {
              var $this = current;
              var before = $this.writePosition - $this.readPosition | 0;
              var after;
              if (before >= size_0) {
                try {
                  var buffer = current;
                  var skip = {
  v: 0};
                  var decodeUTF8$result;
                  decodeUTF8$break:
                    do {
                      var byteCount = {
  v: 0};
                      var value = {
  v: 0};
                      var lastByteCount = {
  v: 0};
                      var memory = buffer.memory;
                      var start = buffer.readPosition;
                      var endExclusive = buffer.writePosition;
                      loop_label_0:
                        for (var index = start; index < endExclusive; index++) {
                          var v = memory.view.getInt8(index) & 255;
                          if ((v & 128) === 0) {
                            if (byteCount.v !== 0) 
                              malformedByteCount(byteCount.v);
                            var ch = toBoxedChar(toChar(v));
                            var consumer$result;
                            consumer$break:
                              do {
                                switch (unboxChar(ch)) {
                                  case 13:
                                    if (cr.v) {
                                      end.v = true;
                                      consumer$result = false;
                                      break consumer$break;
                                    }
                                    cr.v = true;
                                    consumer$result = true;
                                    break consumer$break;
                                  case 10:
                                    end.v = true;
                                    skip.v = 1;
                                    consumer$result = false;
                                    break consumer$break;
                                  default:
                                    if (cr.v) {
                                      end.v = true;
                                      consumer$result = false;
                                      break consumer$break;
                                    }
                                    if (decoded.v === limit) 
                                      bufferLimitExceeded(limit);
                                    decoded.v = decoded.v + 1 | 0;
                                    out.append_s8itvh$(unboxChar(ch));
                                    consumer$result = true;
                                    break consumer$break;
                                }
                              } while (false);
                            if (!consumer$result) {
                              buffer.discardExact_za3lpa$(index - start | 0);
                              decodeUTF8$result = -1;
                              break decodeUTF8$break;
                            }
                          } else if (byteCount.v === 0) {
                            var mask = 128;
                            value.v = v;
                            for (var i = 1; i <= 6; i++) {
                              if ((value.v & mask) !== 0) {
                                value.v = value.v & ~mask;
                                mask = mask >> 1;
                                byteCount.v = byteCount.v + 1 | 0;
                              } else {
                                break;
                              }
                            }
                            lastByteCount.v = byteCount.v;
                            byteCount.v = byteCount.v - 1 | 0;
                            if (lastByteCount.v > (endExclusive - index | 0)) {
                              buffer.discardExact_za3lpa$(index - start | 0);
                              decodeUTF8$result = lastByteCount.v;
                              break decodeUTF8$break;
                            }
                          } else {
                            value.v = value.v << 6 | v & 127;
                            byteCount.v = byteCount.v - 1 | 0;
                            if (byteCount.v === 0) {
                              if (isBmpCodePoint(value.v)) {
                                var ch_0 = toBoxedChar(toChar(value.v));
                                var consumer$result_0;
                                consumer$break:
                                  do {
                                    switch (unboxChar(ch_0)) {
                                      case 13:
                                        if (cr.v) {
                                          end.v = true;
                                          consumer$result_0 = false;
                                          break consumer$break;
                                        }
                                        cr.v = true;
                                        consumer$result_0 = true;
                                        break consumer$break;
                                      case 10:
                                        end.v = true;
                                        skip.v = 1;
                                        consumer$result_0 = false;
                                        break consumer$break;
                                      default:
                                        if (cr.v) {
                                          end.v = true;
                                          consumer$result_0 = false;
                                          break consumer$break;
                                        }
                                        if (decoded.v === limit) 
                                          bufferLimitExceeded(limit);
                                        decoded.v = decoded.v + 1 | 0;
                                        out.append_s8itvh$(unboxChar(ch_0));
                                        consumer$result_0 = true;
                                        break consumer$break;
                                    }
                                  } while (false);
                                if (!consumer$result_0) {
                                  buffer.discardExact_za3lpa$(index - start - lastByteCount.v + 1 | 0);
                                  decodeUTF8$result = -1;
                                  break decodeUTF8$break;
                                }
                              } else if (!isValidCodePoint(value.v)) {
                                malformedCodePoint(value.v);
                              } else {
                                var ch_1 = toBoxedChar(toChar(highSurrogate(value.v)));
                                var consumer$result_1;
                                consumer$break:
                                  do {
                                    switch (unboxChar(ch_1)) {
                                      case 13:
                                        if (cr.v) {
                                          end.v = true;
                                          consumer$result_1 = false;
                                          break consumer$break;
                                        }
                                        cr.v = true;
                                        consumer$result_1 = true;
                                        break consumer$break;
                                      case 10:
                                        end.v = true;
                                        skip.v = 1;
                                        consumer$result_1 = false;
                                        break consumer$break;
                                      default:
                                        if (cr.v) {
                                          end.v = true;
                                          consumer$result_1 = false;
                                          break consumer$break;
                                        }
                                        if (decoded.v === limit) 
                                          bufferLimitExceeded(limit);
                                        decoded.v = decoded.v + 1 | 0;
                                        out.append_s8itvh$(unboxChar(ch_1));
                                        consumer$result_1 = true;
                                        break consumer$break;
                                    }
                                  } while (false);
                                var tmp$_1 = !consumer$result_1;
                                if (!tmp$_1) {
                                  var ch_2 = toBoxedChar(toChar(lowSurrogate(value.v)));
                                  var consumer$result_2;
                                  consumer$break:
                                    do {
                                      switch (unboxChar(ch_2)) {
                                        case 13:
                                          if (cr.v) {
                                            end.v = true;
                                            consumer$result_2 = false;
                                            break consumer$break;
                                          }
                                          cr.v = true;
                                          consumer$result_2 = true;
                                          break consumer$break;
                                        case 10:
                                          end.v = true;
                                          skip.v = 1;
                                          consumer$result_2 = false;
                                          break consumer$break;
                                        default:
                                          if (cr.v) {
                                            end.v = true;
                                            consumer$result_2 = false;
                                            break consumer$break;
                                          }
                                          if (decoded.v === limit) 
                                            bufferLimitExceeded(limit);
                                          decoded.v = decoded.v + 1 | 0;
                                          out.append_s8itvh$(unboxChar(ch_2));
                                          consumer$result_2 = true;
                                          break consumer$break;
                                      }
                                    } while (false);
                                  tmp$_1 = !consumer$result_2;
                                }
                                if (tmp$_1) {
                                  buffer.discardExact_za3lpa$(index - start - lastByteCount.v + 1 | 0);
                                  decodeUTF8$result = -1;
                                  break decodeUTF8$break;
                                }
                              }
                              value.v = 0;
                            }
                          }
                        }
                      var rc = endExclusive - start | 0;
                      buffer.discardExact_za3lpa$(rc);
                      decodeUTF8$result = 0;
                    } while (false);
                  size.v = decodeUTF8$result;
                  if (skip.v > 0) {
                    buffer.discardExact_za3lpa$(skip.v);
                  }
                  size_0 = end.v ? 0 : coerceAtLeast(size.v, 1);
                } finally                 {
                  var $this_0 = current;
                  after = $this_0.writePosition - $this_0.readPosition | 0;
                }
              } else {
                after = before;
              }
              release = false;
              if (after === 0) 
                tmp$_0 = prepareReadNextHead($receiver, current);
              else {
                var tmp$_2 = after < size_0;
                if (!tmp$_2) {
                  var $this_1 = current;
                  tmp$_2 = ($this_1.capacity - $this_1.limit | 0) < 8;
                }
                if (tmp$_2) {
                  completeReadHead_0($receiver, current);
                  tmp$_0 = prepareReadFirstHead($receiver, size_0);
                } else 
                  tmp$_0 = current;
              }
              var next = tmp$_0;
              if (next == null) {
                break loop_label;
              }
              current = next;
              release = true;
            } while (size_0 > 0);
        } finally         {
          if (release) {
            completeReadHead_0($receiver, current);
          }
        }
      } while (false);
    if (size.v > 1) 
      prematureEndOfStream(size.v);
    return decoded.v > 0 || !$receiver.endOfInput;
  }
  function readUTF8UntilDelimiter($receiver, delimiters, limit) {
    if (limit === void 0) 
      limit = 2147483647;
    var $receiver_0 = StringBuilder_init();
    readUTF8UntilDelimiterTo($receiver, $receiver_0, delimiters, limit);
    return $receiver_0.toString();
  }
  function readUTF8UntilDelimiterTo($receiver, out, delimiters, limit) {
    if (limit === void 0) 
      limit = 2147483647;
    var decoded = {
  v: 0};
    var delimiter = {
  v: false};
    takeWhile$break:
      do {
        var tmp$, tmp$_0;
        var release = true;
        tmp$ = prepareReadFirstHead($receiver, 1);
        if (tmp$ == null) {
          break takeWhile$break;
        }
        var current = tmp$;
        try {
          loop_label:
            do {
              var buffer = current;
              var decodeASCII$result;
              decodeASCII$break:
                do {
                  var memory = buffer.memory;
                  var start = buffer.readPosition;
                  var endExclusive = buffer.writePosition;
                  for (var index = start; index < endExclusive; index++) {
                    var codepoint = memory.view.getInt8(index) & 255;
                    var tmp$_1 = (codepoint & 128) === 128;
                    if (!tmp$_1) {
                      var ch = toBoxedChar(toChar(codepoint));
                      var consumer$result;
                      if (contains(delimiters, unboxChar(ch))) {
                        delimiter.v = true;
                        consumer$result = false;
                      } else {
                        if (decoded.v === limit) 
                          bufferLimitExceeded(limit);
                        decoded.v = decoded.v + 1 | 0;
                        out.append_s8itvh$(unboxChar(ch));
                        consumer$result = true;
                      }
                      tmp$_1 = !consumer$result;
                    }
                    if (tmp$_1) {
                      buffer.discardExact_za3lpa$(index - start | 0);
                      decodeASCII$result = false;
                      break decodeASCII$break;
                    }
                  }
                  var rc = endExclusive - start | 0;
                  buffer.discardExact_za3lpa$(rc);
                  decodeASCII$result = true;
                } while (false);
              if (!decodeASCII$result) {
                break loop_label;
              }
              release = false;
              tmp$_0 = prepareReadNextHead($receiver, current);
              if (tmp$_0 == null) {
                break loop_label;
              }
              var next = tmp$_0;
              current = next;
              release = true;
            } while (true);
        } finally         {
          if (release) {
            completeReadHead_0($receiver, current);
          }
        }
      } while (false);
    if (!delimiter.v) {
      decoded.v = readUTF8UntilDelimiterToSlowUtf8_0($receiver, out, delimiters, limit, decoded.v);
    }
    return decoded.v;
  }
  function readUTF8UntilDelimiterTo_0($receiver, out, delimiters, limit) {
    if (limit === void 0) 
      limit = 2147483647;
    var delimitersCount = delimiters.length;
    var tmp$ = delimitersCount === 1;
    if (tmp$) {
      tmp$ = (delimiters.charCodeAt(0) | 0) <= 127;
    }
    if (tmp$) {
      return readUntilDelimiter_0($receiver, toByte(delimiters.charCodeAt(0) | 0), out).toInt();
    } else {
      var tmp$_0 = delimitersCount === 2;
      if (tmp$_0) {
        tmp$_0 = (delimiters.charCodeAt(0) | 0) <= 127;
      }
      var tmp$_1 = tmp$_0;
      if (tmp$_1) {
        tmp$_1 = (delimiters.charCodeAt(1) | 0) <= 127;
      }
      if (tmp$_1) {
        return readUntilDelimiters_0($receiver, toByte(delimiters.charCodeAt(0) | 0), toByte(delimiters.charCodeAt(1) | 0), out).toInt();
      }
    }
    return readUTFUntilDelimiterToSlowAscii($receiver, delimiters, limit, out);
  }
  function readUTF8UntilDelimiterTo_1($receiver, out, delimiters, limit) {
    if (limit === void 0) 
      limit = 2147483647;
    var tmp$;
    return readUTF8UntilDelimiterTo_0($receiver, Kotlin.isType(tmp$ = out, Output) ? tmp$ : throwCCE(), delimiters, limit);
  }
  function readBytes_0($receiver, n) {
    if (n === void 0) {
      var $receiver_0 = $receiver.remaining;
      var message = 'Unable to convert to a ByteArray: packet is too big';
      if ($receiver_0.compareTo_11rb$(L2147483647) > 0) 
        throw IllegalArgumentException_init(message);
      n = $receiver_0.toInt();
    }
    if (n !== 0) {
      var $receiver_1 = new Int8Array(n);
      readFully_15($receiver, $receiver_1, 0, n);
      return $receiver_1;
    } else 
      return EmptyByteArray;
  }
  function readBytes_1($receiver, n) {
    return readBytesOf($receiver, n, n);
  }
  function readBytes_2($receiver) {
    return readBytesOf($receiver);
  }
  function readBytesOf($receiver, min, max) {
    if (min === void 0) 
      min = 0;
    if (max === void 0) 
      max = 2147483647;
    if (min === max && min === 0) {
      return EmptyByteArray;
    } else if (min === max) {
      var $receiver_0 = new Int8Array(min);
      readFully_15($receiver, $receiver_0, 0, min);
      return $receiver_0;
    } else {
      var array = new Int8Array(coerceAtLeast_0(coerceAtMost(Kotlin.Long.fromInt(max), sizeEstimate($receiver)), Kotlin.Long.fromInt(min)).toInt());
      var size = 0;
      while (size < max) {
        var b = array.length;
        var partSize = Math_0.min(max, b) - size | 0;
        var rc = readAvailable_13($receiver, array, size, partSize);
        if (rc <= 0) 
          break;
        size = size + rc | 0;
        if (array.length === size) {
          array = copyOf(array, size * 2 | 0);
        }
      }
      if (size < min) {
        throw new EOFException('Not enough bytes available to read ' + min + ' bytes: ' + (min - size | 0) + ' more required');
      }
      return size === array.length ? array : copyOf(array, size);
    }
  }
  function readText_0($receiver, out, decoder, max) {
    if (max === void 0) 
      max = 2147483647;
    return decode_0(decoder, $receiver, out, max);
  }
  function readText_1($receiver, out, charset, max) {
    if (charset === void 0) 
      charset = Charsets_getInstance().UTF_8;
    if (max === void 0) 
      max = 2147483647;
    return decode_0(charset.newDecoder(), $receiver, out, max);
  }
  function readText_2($receiver, decoder, max) {
    if (max === void 0) 
      max = 2147483647;
    return decode(decoder, $receiver, max);
  }
  function readText_3($receiver, charset, max) {
    if (charset === void 0) 
      charset = Charsets_getInstance().UTF_8;
    if (max === void 0) 
      max = 2147483647;
    return decode(charset.newDecoder(), $receiver, max);
  }
  function readText_4($receiver, charset, max) {
    if (charset === void 0) 
      charset = Charsets_getInstance().UTF_8;
    if (max === void 0) 
      max = 2147483647;
    var $receiver_0 = StringBuilder_init();
    decodeBuffer(charset.newDecoder(), $receiver, $receiver_0, true, max);
    return $receiver_0.toString();
  }
  function readTextExact($receiver, charset, n) {
    if (charset === void 0) 
      charset = Charsets_getInstance().UTF_8;
    return readTextExactCharacters($receiver, n, charset);
  }
  function readTextExactCharacters($receiver, charactersCount, charset) {
    if (charset === void 0) 
      charset = Charsets_getInstance().UTF_8;
    var s = readText_3($receiver, charset, charactersCount);
    if (s.length < charactersCount) {
      prematureEndOfStreamToReadChars(charactersCount);
    }
    return s;
  }
  function readTextExactBytes($receiver, charset, bytes) {
    if (charset === void 0) 
      charset = Charsets_getInstance().UTF_8;
    return readTextExactBytes_0($receiver, bytes, charset);
  }
  function readTextExactBytes_0($receiver, bytesCount, charset) {
    if (charset === void 0) 
      charset = Charsets_getInstance().UTF_8;
    return decodeExactBytes(charset.newDecoder(), $receiver, bytesCount);
  }
  function writeText($receiver, text, fromIndex, toIndex, encoder) {
    if (fromIndex === void 0) 
      fromIndex = 0;
    if (toIndex === void 0) 
      toIndex = text.length;
    encodeToImpl(encoder, $receiver, text, fromIndex, toIndex);
  }
  function writeText_0($receiver, text, fromIndex, toIndex, charset) {
    if (fromIndex === void 0) 
      fromIndex = 0;
    if (toIndex === void 0) 
      toIndex = text.length;
    if (charset === void 0) 
      charset = Charsets_getInstance().UTF_8;
    if (charset === Charsets_getInstance().UTF_8) {
      return writeTextUtf8($receiver, text, fromIndex, toIndex);
    }
    encodeToImpl(charset.newEncoder(), $receiver, text, fromIndex, toIndex);
  }
  function writeText_1($receiver, text, fromIndex, toIndex, charset) {
    if (fromIndex === void 0) 
      fromIndex = 0;
    if (toIndex === void 0) 
      toIndex = text.length;
    if (charset === void 0) 
      charset = Charsets_getInstance().UTF_8;
    if (charset === Charsets_getInstance().UTF_8) {
      return writeTextUtf8($receiver, new CharArraySequence(text, 0, text.length), fromIndex, toIndex);
    }
    encode_1(charset.newEncoder(), text, fromIndex, toIndex, $receiver);
  }
  function writeTextUtf8($receiver, text, fromIndex, toIndex) {
    var index = {
  v: fromIndex};
    var tail = prepareWriteHead_0($receiver, 1, null);
    try {
      var size;
      while (true) {
        var buffer = tail;
        var block$result;
        var memory = buffer.memory;
        var dstOffset = buffer.writePosition;
        var dstLimit = buffer.limit;
        var tmp$ = encodeUTF8_0(memory, text, index.v, toIndex, dstOffset, dstLimit);
        var characters = new UShort_init(toShort(tmp$.value >>> 16));
        var bytes = new UShort_init(toShort(tmp$.value & 65535));
        index.v = index.v + (characters.data & 65535) | 0;
        buffer.commitWritten_za3lpa$(bytes.data & 65535);
        if ((characters.data & 65535) === 0 && index.v < toIndex) {
          block$result = 8;
        } else if (index.v < toIndex) {
          block$result = 1;
        } else {
          block$result = 0;
        }
        size = block$result;
        if (size <= 0) 
          break;
        tail = prepareWriteHead_0($receiver, size, tail);
      }
    } finally     {
      afterHeadWrite_0($receiver, tail);
    }
  }
  function isAsciiChar($receiver) {
    return ($receiver | 0) <= 127;
  }
  function readUTFUntilDelimiterToSlowAscii($receiver, delimiters, limit, out) {
    var decoded = {
  v: 0};
    var delimiter = {
  v: false};
    takeWhile$break:
      do {
        var tmp$, tmp$_0;
        var release = true;
        tmp$ = prepareReadFirstHead($receiver, 1);
        if (tmp$ == null) {
          break takeWhile$break;
        }
        var current = tmp$;
        try {
          loop_label:
            do {
              var buffer = current;
              var before = buffer.writePosition - buffer.readPosition | 0;
              var decodeASCII$result;
              decodeASCII$break:
                do {
                  var memory = buffer.memory;
                  var start = buffer.readPosition;
                  var endExclusive = buffer.writePosition;
                  for (var index = start; index < endExclusive; index++) {
                    var codepoint = memory.view.getInt8(index) & 255;
                    var tmp$_1 = (codepoint & 128) === 128;
                    if (!tmp$_1) {
                      var consumer$result;
                      if (contains(delimiters, unboxChar(toBoxedChar(toChar(codepoint))))) {
                        delimiter.v = true;
                        consumer$result = false;
                      } else {
                        if (decoded.v === limit) 
                          bufferLimitExceeded(limit);
                        decoded.v = decoded.v + 1 | 0;
                        consumer$result = true;
                      }
                      tmp$_1 = !consumer$result;
                    }
                    if (tmp$_1) {
                      buffer.discardExact_za3lpa$(index - start | 0);
                      decodeASCII$result = false;
                      break decodeASCII$break;
                    }
                  }
                  var rc = endExclusive - start | 0;
                  buffer.discardExact_za3lpa$(rc);
                  decodeASCII$result = true;
                } while (false);
              var rc_0 = decodeASCII$result;
              var delta = before - (buffer.writePosition - buffer.readPosition | 0) | 0;
              if (delta > 0) {
                buffer.rewind_za3lpa$(delta);
                writeFully_20(out, buffer, delta);
              }
              if (!rc_0) {
                break loop_label;
              }
              release = false;
              tmp$_0 = prepareReadNextHead($receiver, current);
              if (tmp$_0 == null) {
                break loop_label;
              }
              var next = tmp$_0;
              current = next;
              release = true;
            } while (true);
        } finally         {
          if (release) {
            completeReadHead_0($receiver, current);
          }
        }
      } while (false);
    if (!delimiter.v && !$receiver.endOfInput) {
      decoded.v = readUTF8UntilDelimiterToSlowUtf8($receiver, out, delimiters, limit, decoded.v);
    }
    return decoded.v;
  }
  function readUTF8UntilDelimiterToSlowUtf8($receiver, out, delimiters, limit, decoded0) {
    var decoded = {
  v: decoded0};
    var size = {
  v: 1};
    takeWhileSize$break:
      do {
        var tmp$, tmp$_0;
        var release = true;
        tmp$ = prepareReadFirstHead($receiver, 1);
        if (tmp$ == null) {
          break takeWhileSize$break;
        }
        var current = tmp$;
        var size_0 = 1;
        try {
          loop_label:
            do {
              var $this = current;
              var before = $this.writePosition - $this.readPosition | 0;
              var after;
              if (before >= size_0) {
                try {
                  var buffer = current;
                  var before_0 = buffer.writePosition - buffer.readPosition | 0;
                  var decodeUTF8$result;
                  decodeUTF8$break:
                    do {
                      var byteCount = {
  v: 0};
                      var value = {
  v: 0};
                      var lastByteCount = {
  v: 0};
                      var memory = buffer.memory;
                      var start = buffer.readPosition;
                      var endExclusive = buffer.writePosition;
                      for (var index = start; index < endExclusive; index++) {
                        var v = memory.view.getInt8(index) & 255;
                        if ((v & 128) === 0) {
                          if (byteCount.v !== 0) 
                            malformedByteCount(byteCount.v);
                          var consumer$result;
                          if (contains(delimiters, unboxChar(toBoxedChar(toChar(v))))) {
                            consumer$result = false;
                          } else {
                            if (decoded.v === limit) {
                              bufferLimitExceeded(limit);
                            }
                            decoded.v = decoded.v + 1 | 0;
                            consumer$result = true;
                          }
                          if (!consumer$result) {
                            buffer.discardExact_za3lpa$(index - start | 0);
                            decodeUTF8$result = -1;
                            break decodeUTF8$break;
                          }
                        } else if (byteCount.v === 0) {
                          var mask = 128;
                          value.v = v;
                          for (var i = 1; i <= 6; i++) {
                            if ((value.v & mask) !== 0) {
                              value.v = value.v & ~mask;
                              mask = mask >> 1;
                              byteCount.v = byteCount.v + 1 | 0;
                            } else {
                              break;
                            }
                          }
                          lastByteCount.v = byteCount.v;
                          byteCount.v = byteCount.v - 1 | 0;
                          if (lastByteCount.v > (endExclusive - index | 0)) {
                            buffer.discardExact_za3lpa$(index - start | 0);
                            decodeUTF8$result = lastByteCount.v;
                            break decodeUTF8$break;
                          }
                        } else {
                          value.v = value.v << 6 | v & 127;
                          byteCount.v = byteCount.v - 1 | 0;
                          if (byteCount.v === 0) {
                            if (isBmpCodePoint(value.v)) {
                              var consumer$result_0;
                              if (contains(delimiters, unboxChar(toBoxedChar(toChar(value.v))))) {
                                consumer$result_0 = false;
                              } else {
                                if (decoded.v === limit) {
                                  bufferLimitExceeded(limit);
                                }
                                decoded.v = decoded.v + 1 | 0;
                                consumer$result_0 = true;
                              }
                              if (!consumer$result_0) {
                                buffer.discardExact_za3lpa$(index - start - lastByteCount.v + 1 | 0);
                                decodeUTF8$result = -1;
                                break decodeUTF8$break;
                              }
                            } else if (!isValidCodePoint(value.v)) {
                              malformedCodePoint(value.v);
                            } else {
                              var consumer$result_1;
                              if (contains(delimiters, unboxChar(toBoxedChar(toChar(highSurrogate(value.v)))))) {
                                consumer$result_1 = false;
                              } else {
                                if (decoded.v === limit) {
                                  bufferLimitExceeded(limit);
                                }
                                decoded.v = decoded.v + 1 | 0;
                                consumer$result_1 = true;
                              }
                              var tmp$_1 = !consumer$result_1;
                              if (!tmp$_1) {
                                var consumer$result_2;
                                if (contains(delimiters, unboxChar(toBoxedChar(toChar(lowSurrogate(value.v)))))) {
                                  consumer$result_2 = false;
                                } else {
                                  if (decoded.v === limit) {
                                    bufferLimitExceeded(limit);
                                  }
                                  decoded.v = decoded.v + 1 | 0;
                                  consumer$result_2 = true;
                                }
                                tmp$_1 = !consumer$result_2;
                              }
                              if (tmp$_1) {
                                buffer.discardExact_za3lpa$(index - start - lastByteCount.v + 1 | 0);
                                decodeUTF8$result = -1;
                                break decodeUTF8$break;
                              }
                            }
                            value.v = 0;
                          }
                        }
                      }
                      var rc = endExclusive - start | 0;
                      buffer.discardExact_za3lpa$(rc);
                      decodeUTF8$result = 0;
                    } while (false);
                  size.v = decodeUTF8$result;
                  var delta = before_0 - (buffer.writePosition - buffer.readPosition | 0) | 0;
                  if (delta > 0) {
                    buffer.rewind_za3lpa$(delta);
                    writeFully_20(out, buffer, delta);
                  }
                  size.v = size.v === -1 ? 0 : coerceAtLeast(size.v, 1);
                  size_0 = size.v;
                } finally                 {
                  var $this_0 = current;
                  after = $this_0.writePosition - $this_0.readPosition | 0;
                }
              } else {
                after = before;
              }
              release = false;
              if (after === 0) 
                tmp$_0 = prepareReadNextHead($receiver, current);
              else {
                var tmp$_2 = after < size_0;
                if (!tmp$_2) {
                  var $this_1 = current;
                  tmp$_2 = ($this_1.capacity - $this_1.limit | 0) < 8;
                }
                if (tmp$_2) {
                  completeReadHead_0($receiver, current);
                  tmp$_0 = prepareReadFirstHead($receiver, size_0);
                } else 
                  tmp$_0 = current;
              }
              var next = tmp$_0;
              if (next == null) {
                break loop_label;
              }
              current = next;
              release = true;
            } while (size_0 > 0);
        } finally         {
          if (release) {
            completeReadHead_0($receiver, current);
          }
        }
      } while (false);
    if (size.v > 1) 
      prematureEndOfStream(size.v);
    return decoded.v;
  }
  function readUTF8UntilDelimiterToSlowUtf8_0($receiver, out, delimiters, limit, decoded0) {
    var decoded = {
  v: decoded0};
    var size = {
  v: 1};
    takeWhileSize$break:
      do {
        var tmp$, tmp$_0;
        var release = true;
        tmp$ = prepareReadFirstHead($receiver, 1);
        if (tmp$ == null) {
          break takeWhileSize$break;
        }
        var current = tmp$;
        var size_0 = 1;
        try {
          loop_label:
            do {
              var $this = current;
              var before = $this.writePosition - $this.readPosition | 0;
              var after;
              if (before >= size_0) {
                try {
                  var buffer = current;
                  var decodeUTF8$result;
                  decodeUTF8$break:
                    do {
                      var byteCount = {
  v: 0};
                      var value = {
  v: 0};
                      var lastByteCount = {
  v: 0};
                      var memory = buffer.memory;
                      var start = buffer.readPosition;
                      var endExclusive = buffer.writePosition;
                      for (var index = start; index < endExclusive; index++) {
                        var v = memory.view.getInt8(index) & 255;
                        if ((v & 128) === 0) {
                          if (byteCount.v !== 0) 
                            malformedByteCount(byteCount.v);
                          var ch = toBoxedChar(toChar(v));
                          var consumer$result;
                          if (contains(delimiters, unboxChar(ch))) {
                            consumer$result = false;
                          } else {
                            if (decoded.v === limit) {
                              bufferLimitExceeded(limit);
                            }
                            decoded.v = decoded.v + 1 | 0;
                            out.append_s8itvh$(unboxChar(ch));
                            consumer$result = true;
                          }
                          if (!consumer$result) {
                            buffer.discardExact_za3lpa$(index - start | 0);
                            decodeUTF8$result = -1;
                            break decodeUTF8$break;
                          }
                        } else if (byteCount.v === 0) {
                          var mask = 128;
                          value.v = v;
                          for (var i = 1; i <= 6; i++) {
                            if ((value.v & mask) !== 0) {
                              value.v = value.v & ~mask;
                              mask = mask >> 1;
                              byteCount.v = byteCount.v + 1 | 0;
                            } else {
                              break;
                            }
                          }
                          lastByteCount.v = byteCount.v;
                          byteCount.v = byteCount.v - 1 | 0;
                          if (lastByteCount.v > (endExclusive - index | 0)) {
                            buffer.discardExact_za3lpa$(index - start | 0);
                            decodeUTF8$result = lastByteCount.v;
                            break decodeUTF8$break;
                          }
                        } else {
                          value.v = value.v << 6 | v & 127;
                          byteCount.v = byteCount.v - 1 | 0;
                          if (byteCount.v === 0) {
                            if (isBmpCodePoint(value.v)) {
                              var ch_0 = toBoxedChar(toChar(value.v));
                              var consumer$result_0;
                              if (contains(delimiters, unboxChar(ch_0))) {
                                consumer$result_0 = false;
                              } else {
                                if (decoded.v === limit) {
                                  bufferLimitExceeded(limit);
                                }
                                decoded.v = decoded.v + 1 | 0;
                                out.append_s8itvh$(unboxChar(ch_0));
                                consumer$result_0 = true;
                              }
                              if (!consumer$result_0) {
                                buffer.discardExact_za3lpa$(index - start - lastByteCount.v + 1 | 0);
                                decodeUTF8$result = -1;
                                break decodeUTF8$break;
                              }
                            } else if (!isValidCodePoint(value.v)) {
                              malformedCodePoint(value.v);
                            } else {
                              var ch_1 = toBoxedChar(toChar(highSurrogate(value.v)));
                              var consumer$result_1;
                              if (contains(delimiters, unboxChar(ch_1))) {
                                consumer$result_1 = false;
                              } else {
                                if (decoded.v === limit) {
                                  bufferLimitExceeded(limit);
                                }
                                decoded.v = decoded.v + 1 | 0;
                                out.append_s8itvh$(unboxChar(ch_1));
                                consumer$result_1 = true;
                              }
                              var tmp$_1 = !consumer$result_1;
                              if (!tmp$_1) {
                                var ch_2 = toBoxedChar(toChar(lowSurrogate(value.v)));
                                var consumer$result_2;
                                if (contains(delimiters, unboxChar(ch_2))) {
                                  consumer$result_2 = false;
                                } else {
                                  if (decoded.v === limit) {
                                    bufferLimitExceeded(limit);
                                  }
                                  decoded.v = decoded.v + 1 | 0;
                                  out.append_s8itvh$(unboxChar(ch_2));
                                  consumer$result_2 = true;
                                }
                                tmp$_1 = !consumer$result_2;
                              }
                              if (tmp$_1) {
                                buffer.discardExact_za3lpa$(index - start - lastByteCount.v + 1 | 0);
                                decodeUTF8$result = -1;
                                break decodeUTF8$break;
                              }
                            }
                            value.v = 0;
                          }
                        }
                      }
                      var rc = endExclusive - start | 0;
                      buffer.discardExact_za3lpa$(rc);
                      decodeUTF8$result = 0;
                    } while (false);
                  size.v = decodeUTF8$result;
                  size.v = size.v === -1 ? 0 : coerceAtLeast(size.v, 1);
                  size_0 = size.v;
                } finally                 {
                  var $this_0 = current;
                  after = $this_0.writePosition - $this_0.readPosition | 0;
                }
              } else {
                after = before;
              }
              release = false;
              if (after === 0) 
                tmp$_0 = prepareReadNextHead($receiver, current);
              else {
                var tmp$_2 = after < size_0;
                if (!tmp$_2) {
                  var $this_1 = current;
                  tmp$_2 = ($this_1.capacity - $this_1.limit | 0) < 8;
                }
                if (tmp$_2) {
                  completeReadHead_0($receiver, current);
                  tmp$_0 = prepareReadFirstHead($receiver, size_0);
                } else 
                  tmp$_0 = current;
              }
              var next = tmp$_0;
              if (next == null) {
                break loop_label;
              }
              current = next;
              release = true;
            } while (size_0 > 0);
        } finally         {
          if (release) {
            completeReadHead_0($receiver, current);
          }
        }
      } while (false);
    if (size.v > 1) 
      prematureEndOfStream(size.v);
    return decoded.v;
  }
  function bufferLimitExceeded(limit) {
    throw new BufferLimitExceededException('Too many characters before delimiter: limit ' + limit + ' exceeded');
  }
  function prematureEndOfStream(size) {
    throw new EOFException('Premature end of stream: expected ' + size + ' bytes');
  }
  function prematureEndOfStream_0(size) {
    throw new EOFException('Premature end of stream: expected ' + size.toString() + ' bytes');
  }
  function prematureEndOfStreamToReadChars(charactersCount) {
    throw new EOFException('Not enough input bytes to read ' + charactersCount + ' characters.');
  }
  var readUByte_1 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.readUByte_7wsnj1$', wrapFunction(function() {
  var UByte_init = Kotlin.kotlin.UByte;
  return function($receiver) {
  return new UByte_init($receiver.readByte());
};
}));
  var readUShort_1 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.readUShort_7wsnj1$', wrapFunction(function() {
  var readShort = _.io.ktor.utils.io.core.readShort_7wsnj1$;
  var UShort_init = Kotlin.kotlin.UShort;
  return function($receiver) {
  return new UShort_init(readShort($receiver));
};
}));
  var readUInt_1 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.readUInt_7wsnj1$', wrapFunction(function() {
  var readInt = _.io.ktor.utils.io.core.readInt_7wsnj1$;
  var UInt_init = Kotlin.kotlin.UInt;
  return function($receiver) {
  return new UInt_init(readInt($receiver));
};
}));
  var readULong_1 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.readULong_7wsnj1$', wrapFunction(function() {
  var readLong = _.io.ktor.utils.io.core.readLong_7wsnj1$;
  var ULong_init = Kotlin.kotlin.ULong;
  return function($receiver) {
  return new ULong_init(readLong($receiver));
};
}));
  var readFully_24 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.readFully_yxjp9i$', wrapFunction(function() {
  var readFully = _.io.ktor.utils.io.core.readFully_ja303r$;
  return function($receiver, dst, offset, length) {
  if (offset === void 0) 
    offset = 0;
  if (length === void 0) 
    length = dst.size - offset | 0;
  readFully($receiver, dst.storage, offset, length);
};
}));
  var readFully_25 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.readFully_8s9ld4$', wrapFunction(function() {
  var readFully = _.io.ktor.utils.io.core.readFully_ksob8n$;
  return function($receiver, dst, offset, length) {
  if (offset === void 0) 
    offset = 0;
  if (length === void 0) 
    length = dst.size - offset | 0;
  readFully($receiver, dst.storage, offset, length);
};
}));
  var readFully_26 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.readFully_bfwj6z$', wrapFunction(function() {
  var readFully = _.io.ktor.utils.io.core.readFully_8ob2ms$;
  return function($receiver, dst, offset, length) {
  if (offset === void 0) 
    offset = 0;
  if (length === void 0) 
    length = dst.size - offset | 0;
  readFully($receiver, dst.storage, offset, length);
};
}));
  var readFully_27 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.readFully_dvhn02$', wrapFunction(function() {
  var readFully = _.io.ktor.utils.io.core.readFully_1rz25p$;
  return function($receiver, dst, offset, length) {
  if (offset === void 0) 
    offset = 0;
  if (length === void 0) 
    length = dst.size - offset | 0;
  readFully($receiver, dst.storage, offset, length);
};
}));
  var writeUByte_1 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.writeUByte_9k01uo$', function($receiver, v) {
  $receiver.writeByte_s8j3t7$(v.data);
});
  var writeUShort_1 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.writeUShort_bujti4$', wrapFunction(function() {
  var writeShort = _.io.ktor.utils.io.core.writeShort_9kfkzl$;
  return function($receiver, v) {
  writeShort($receiver, v.data);
};
}));
  var writeUInt_1 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.writeUInt_kbalp3$', wrapFunction(function() {
  var writeInt = _.io.ktor.utils.io.core.writeInt_qu9kum$;
  return function($receiver, v) {
  writeInt($receiver, v.data);
};
}));
  var writeULong_1 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.writeULong_9jtvjg$', wrapFunction(function() {
  var writeLong = _.io.ktor.utils.io.core.writeLong_kb5mzd$;
  return function($receiver, v) {
  writeLong($receiver, v.data);
};
}));
  var writeFully_23 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.writeFully_13mxi1$', wrapFunction(function() {
  var writeFully = _.io.ktor.utils.io.core.writeFully_i6snlg$;
  return function($receiver, array, offset, length) {
  if (offset === void 0) 
    offset = 0;
  if (length === void 0) 
    length = array.size - offset | 0;
  writeFully($receiver, array.storage, offset, length);
};
}));
  var writeFully_24 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.writeFully_phqic5$', wrapFunction(function() {
  var writeFully = _.io.ktor.utils.io.core.writeFully_d18giu$;
  return function($receiver, array, offset, length) {
  if (offset === void 0) 
    offset = 0;
  if (length === void 0) 
    length = array.size - offset | 0;
  writeFully($receiver, array.storage, offset, length);
};
}));
  var writeFully_25 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.writeFully_cj6vpa$', wrapFunction(function() {
  var writeFully = _.io.ktor.utils.io.core.writeFully_yw8055$;
  return function($receiver, array, offset, length) {
  if (offset === void 0) 
    offset = 0;
  if (length === void 0) 
    length = array.size - offset | 0;
  writeFully($receiver, array.storage, offset, length);
};
}));
  var writeFully_26 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.writeFully_jyf4rf$', wrapFunction(function() {
  var writeFully = _.io.ktor.utils.io.core.writeFully_2v9eo0$;
  return function($receiver, array, offset, length) {
  if (offset === void 0) 
    offset = 0;
  if (length === void 0) 
    length = array.size - offset | 0;
  writeFully($receiver, array.storage, offset, length);
};
}));
  var use_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.use_800v1z$', function($receiver, block) {
  var tmp$;
  try {
    tmp$ = block($receiver);
  } finally   {
    $receiver.close();
  }
  return tmp$;
});
  var use_1 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.use_73rtzc$', function($receiver, block) {
  var tmp$;
  try {
    tmp$ = block($receiver);
  } finally   {
    $receiver.close();
  }
  return tmp$;
});
  require$ObjectLiteral_5.prototype = Object.create(RequireFailureCapture.prototype);
  require$ObjectLiteral_5.prototype.constructor = require$ObjectLiteral_5;
  function require$ObjectLiteral_5(closure$message) {
    this.closure$message = closure$message;
    RequireFailureCapture.call(this);
  }
  require$ObjectLiteral_5.prototype.doFail = function() {
  throw IllegalArgumentException_init(this.closure$message());
};
  require$ObjectLiteral_5.$metadata$ = {
  kind: Kind_CLASS, 
  interfaces: [RequireFailureCapture]};
  function ChunkBuffer(memory, origin) {
    ChunkBuffer$Companion_getInstance();
    Buffer.call(this, memory);
    if (!(origin !== this)) {
      var m = new require$ObjectLiteral_5(ChunkBuffer_init$lambda);
      m.doFail();
    }
    this.nextRef_43oo9e$_0 = null;
    this.refCount_yk3bl6$_0 = 1;
    this.origin_dlah8g$_0 = origin;
  }
  Object.defineProperty(ChunkBuffer.prototype, 'origin', {
  get: function() {
  return this.origin_dlah8g$_0;
}, 
  set: function(origin) {
  this.origin_dlah8g$_0 = origin;
}});
  Object.defineProperty(ChunkBuffer.prototype, 'next', {
  get: function() {
  return this.nextRef_43oo9e$_0;
}, 
  set: function(newValue) {
  if (newValue == null) {
    this.cleanNext();
  } else {
    this.appendNext_v1qrlf$_0(newValue);
  }
}});
  Object.defineProperty(ChunkBuffer.prototype, 'referenceCount', {
  get: function() {
  return this.refCount_yk3bl6$_0;
}});
  ChunkBuffer.prototype.appendNext_v1qrlf$_0 = function(chunk) {
  if (!(function(scope) {
  return scope.nextRef_43oo9e$_0 == null ? function() {
  scope.nextRef_43oo9e$_0 = chunk;
  return true;
}() : false;
})(this)) {
    throw IllegalStateException_init('This chunk has already a next chunk.');
  }
};
  ChunkBuffer.prototype.cleanNext = function() {
  return (function(scope) {
  var oldValue = scope.nextRef_43oo9e$_0;
  scope.nextRef_43oo9e$_0 = null;
  return oldValue;
})(this);
};
  ChunkBuffer.prototype.duplicate = function() {
  var tmp$;
  var newOrigin = (tmp$ = this.origin) != null ? tmp$ : this;
  newOrigin.acquire_8be2vx$();
  var $receiver = new ChunkBuffer(this.memory, newOrigin);
  this.duplicateTo_b4g5fm$($receiver);
  return $receiver;
};
  ChunkBuffer.prototype.release_2bs5fo$ = function(pool) {
  if (this.release_8be2vx$()) {
    var origin = this.origin;
    if (origin != null) {
      this.unlink_8be2vx$();
      origin.release_2bs5fo$(pool);
    } else {
      pool.recycle_trkh7z$(this);
    }
  }
};
  ChunkBuffer.prototype.unlink_8be2vx$ = function() {
  if (!(function(scope) {
  return scope.refCount_yk3bl6$_0 === 0 ? function() {
  scope.refCount_yk3bl6$_0 = -1;
  return true;
}() : false;
})(this)) {
    throw IllegalStateException_init('Unable to unlink: buffer is in use.');
  }
  this.cleanNext();
  this.origin = null;
};
  ChunkBuffer.prototype.acquire_8be2vx$ = function() {
  var $receiver = this.refCount_yk3bl6$_0;
  update$break:
    do {
      while (true) {
        var cur = this.refCount_yk3bl6$_0;
        if (cur <= 0) 
          throw IllegalStateException_init('Unable to acquire chunk: it is already released.');
        var upd = cur + 1 | 0;
        if ((function(scope) {
  return scope.refCount_yk3bl6$_0 === cur ? function() {
  scope.refCount_yk3bl6$_0 = upd;
  return true;
}() : false;
})(this)) 
          break update$break;
      }
    } while (false);
};
  ChunkBuffer.prototype.unpark_8be2vx$ = function() {
  var $receiver = this.refCount_yk3bl6$_0;
  update$break:
    do {
      while (true) {
        var cur = this.refCount_yk3bl6$_0;
        if (cur < 0) {
          throw IllegalStateException_init("This instance is already disposed and couldn't be borrowed.");
        }
        if (cur > 0) {
          throw IllegalStateException_init('This instance is already in use but somehow appeared in the pool.');
        }
        var upd = 1;
        if ((function(scope) {
  return scope.refCount_yk3bl6$_0 === cur ? function() {
  scope.refCount_yk3bl6$_0 = upd;
  return true;
}() : false;
})(this)) 
          break update$break;
      }
    } while (false);
};
  ChunkBuffer.prototype.release_8be2vx$ = function() {
  var $receiver = this.refCount_yk3bl6$_0;
  var updateAndGet$result;
  updateAndGet$break:
    do {
      while (true) {
        var cur = this.refCount_yk3bl6$_0;
        if (cur <= 0) 
          throw IllegalStateException_init('Unable to release: it is already released.');
        var upd = cur - 1 | 0;
        if ((function(scope) {
  return scope.refCount_yk3bl6$_0 === cur ? function() {
  scope.refCount_yk3bl6$_0 = upd;
  return true;
}() : false;
})(this)) {
          updateAndGet$result = upd;
          break updateAndGet$break;
        }
      }
    } while (false);
  return updateAndGet$result === 0;
};
  function ChunkBuffer$reset$lambda() {
    return 'Unable to reset buffer with origin';
  }
  ChunkBuffer.prototype.reset = function() {
  if (!(this.origin == null)) {
    var m = new require$ObjectLiteral_5(ChunkBuffer$reset$lambda);
    m.doFail();
  }
  Buffer.prototype.reset.call(this);
  this.attachment = null;
  this.nextRef_43oo9e$_0 = null;
};
  function ChunkBuffer$Companion() {
    ChunkBuffer$Companion_instance = this;
    this.Pool = new ChunkBuffer$Companion$Pool$ObjectLiteral();
    this.EmptyPool = new ChunkBuffer$Companion$EmptyPool$ObjectLiteral();
    this.NoPool_8be2vx$ = new ChunkBuffer$Companion$NoPool$ObjectLiteral();
    this.NoPoolManuallyManaged_8be2vx$ = new ChunkBuffer$Companion$NoPoolManuallyManaged$ObjectLiteral();
  }
  Object.defineProperty(ChunkBuffer$Companion.prototype, 'Empty', {
  get: function() {
  return IoBuffer$Companion_getInstance().Empty;
}});
  function ChunkBuffer$Companion$Pool$ObjectLiteral() {
  }
  Object.defineProperty(ChunkBuffer$Companion$Pool$ObjectLiteral.prototype, 'capacity', {
  get: function() {
  return DefaultChunkedBufferPool.capacity;
}});
  ChunkBuffer$Companion$Pool$ObjectLiteral.prototype.borrow = function() {
  return DefaultChunkedBufferPool.borrow();
};
  ChunkBuffer$Companion$Pool$ObjectLiteral.prototype.recycle_trkh7z$ = function(instance) {
  if (!Kotlin.isType(instance, IoBuffer)) {
    throw IllegalArgumentException_init('Only IoBuffer instances can be recycled.');
  }
  DefaultChunkedBufferPool.recycle_trkh7z$(instance);
};
  ChunkBuffer$Companion$Pool$ObjectLiteral.prototype.dispose = function() {
  DefaultChunkedBufferPool.dispose();
};
  ChunkBuffer$Companion$Pool$ObjectLiteral.$metadata$ = {
  kind: Kind_CLASS, 
  interfaces: [ObjectPool]};
  function ChunkBuffer$Companion$EmptyPool$ObjectLiteral() {
  }
  Object.defineProperty(ChunkBuffer$Companion$EmptyPool$ObjectLiteral.prototype, 'capacity', {
  get: function() {
  return 1;
}});
  ChunkBuffer$Companion$EmptyPool$ObjectLiteral.prototype.borrow = function() {
  return ChunkBuffer$Companion_getInstance().Empty;
};
  function ChunkBuffer$Companion$EmptyPool$ObjectLiteral$recycle$lambda() {
    return 'Only ChunkBuffer.Empty instance could be recycled.';
  }
  ChunkBuffer$Companion$EmptyPool$ObjectLiteral.prototype.recycle_trkh7z$ = function(instance) {
  if (!(instance === ChunkBuffer$Companion_getInstance().Empty)) {
    var m = new require$ObjectLiteral_5(ChunkBuffer$Companion$EmptyPool$ObjectLiteral$recycle$lambda);
    m.doFail();
  }
};
  ChunkBuffer$Companion$EmptyPool$ObjectLiteral.prototype.dispose = function() {
};
  ChunkBuffer$Companion$EmptyPool$ObjectLiteral.$metadata$ = {
  kind: Kind_CLASS, 
  interfaces: [ObjectPool]};
  function ChunkBuffer$Companion$NoPool$ObjectLiteral() {
    NoPoolImpl.call(this);
  }
  ChunkBuffer$Companion$NoPool$ObjectLiteral.prototype.borrow = function() {
  return new IoBuffer(DefaultAllocator_getInstance().alloc_za3lpa$(4096), null);
};
  ChunkBuffer$Companion$NoPool$ObjectLiteral.prototype.recycle_trkh7z$ = function(instance) {
  if (!Kotlin.isType(instance, IoBuffer)) {
    throw IllegalArgumentException_init('Only IoBuffer instances can be recycled.');
  }
  DefaultAllocator_getInstance().free_vn6nzs$(instance.memory);
};
  ChunkBuffer$Companion$NoPool$ObjectLiteral.$metadata$ = {
  kind: Kind_CLASS, 
  interfaces: [NoPoolImpl]};
  function ChunkBuffer$Companion$NoPoolManuallyManaged$ObjectLiteral() {
    NoPoolImpl.call(this);
  }
  ChunkBuffer$Companion$NoPoolManuallyManaged$ObjectLiteral.prototype.borrow = function() {
  throw UnsupportedOperationException_init("This pool doesn't support borrow");
};
  ChunkBuffer$Companion$NoPoolManuallyManaged$ObjectLiteral.prototype.recycle_trkh7z$ = function(instance) {
};
  ChunkBuffer$Companion$NoPoolManuallyManaged$ObjectLiteral.$metadata$ = {
  kind: Kind_CLASS, 
  interfaces: [NoPoolImpl]};
  ChunkBuffer$Companion.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'Companion', 
  interfaces: []};
  var ChunkBuffer$Companion_instance = null;
  function ChunkBuffer$Companion_getInstance() {
    if (ChunkBuffer$Companion_instance === null) {
      new ChunkBuffer$Companion();
    }
    return ChunkBuffer$Companion_instance;
  }
  function ChunkBuffer_init$lambda() {
    return "A chunk couldn't be a view of itself.";
  }
  ChunkBuffer.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'ChunkBuffer', 
  interfaces: [Buffer]};
  function isExclusivelyOwned($receiver) {
    return $receiver.referenceCount === 1;
  }
  var toIntOrFail = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.internal.toIntOrFail_z7h088$', wrapFunction(function() {
  var failLongToIntConversion = _.io.ktor.utils.io.core.internal.failLongToIntConversion_a4hdmt$;
  return function($receiver, name) {
  if ($receiver.toNumber() >= 2147483647) 
    failLongToIntConversion($receiver, name);
  return $receiver.toInt();
};
}));
  function failLongToIntConversion(value, name) {
    throw IllegalArgumentException_init('Long value ' + value.toString() + ' of ' + name + " doesn't fit into 32-bit integer");
  }
  var require_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.internal.require_87ejdh$', wrapFunction(function() {
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var RequireFailureCapture = _.io.ktor.utils.io.core.internal.RequireFailureCapture;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  require$ObjectLiteral.prototype = Object.create(RequireFailureCapture.prototype);
  require$ObjectLiteral.prototype.constructor = require$ObjectLiteral;
  function require$ObjectLiteral(closure$message) {
    this.closure$message = closure$message;
    RequireFailureCapture.call(this);
  }
  require$ObjectLiteral.prototype.doFail = function() {
  throw IllegalArgumentException_init(this.closure$message());
};
  require$ObjectLiteral.$metadata$ = {
  kind: Kind_CLASS, 
  interfaces: [RequireFailureCapture]};
  return function(condition, message) {
  if (!condition) {
    var m = new require$ObjectLiteral(message);
    m.doFail();
  }
};
}));
  function RequireFailureCapture() {
  }
  RequireFailureCapture.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'RequireFailureCapture', 
  interfaces: []};
  require$ObjectLiteral_6.prototype = Object.create(RequireFailureCapture.prototype);
  require$ObjectLiteral_6.prototype.constructor = require$ObjectLiteral_6;
  function require$ObjectLiteral_6(closure$message) {
    this.closure$message = closure$message;
    RequireFailureCapture.call(this);
  }
  require$ObjectLiteral_6.prototype.doFail = function() {
  throw IllegalArgumentException_init(this.closure$message());
};
  require$ObjectLiteral_6.$metadata$ = {
  kind: Kind_CLASS, 
  interfaces: [RequireFailureCapture]};
  var decodeASCII = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.internal.decodeASCII_j5qx8u$', wrapFunction(function() {
  var toChar = Kotlin.toChar;
  var toBoxedChar = Kotlin.toBoxedChar;
  return function($receiver, consumer) {
  var memory = $receiver.memory;
  var start = $receiver.readPosition;
  var endExclusive = $receiver.writePosition;
  for (var index = start; index < endExclusive; index++) {
    var codepoint = memory.view.getInt8(index) & 255;
    if ((codepoint & 128) === 128 || !consumer(toBoxedChar(toChar(codepoint)))) {
      $receiver.discardExact_za3lpa$(index - start | 0);
      return false;
    }
  }
  var rc = endExclusive - start | 0;
  $receiver.discardExact_za3lpa$(rc);
  return true;
};
}));
  function Coroutine$decodeUTF8LineLoopSuspend(out_0, limit_0, nextChunk_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$decoded = void 0;
    this.local$size = void 0;
    this.local$cr = void 0;
    this.local$end = void 0;
    this.local$out = out_0;
    this.local$limit = limit_0;
    this.local$nextChunk = nextChunk_0;
  }
  Coroutine$decodeUTF8LineLoopSuspend.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$decodeUTF8LineLoopSuspend.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decodeUTF8LineLoopSuspend.prototype.constructor = Coroutine$decodeUTF8LineLoopSuspend;
  Coroutine$decodeUTF8LineLoopSuspend.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.local$decoded = {
  v: 0};
        this.local$size = {
  v: 1};
        this.local$cr = {
  v: false};
        this.local$end = {
  v: false};
        this.state_0 = 2;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        if (this.local$end.v || this.local$size.v === 0) {
          this.state_0 = 5;
          continue;
        }
        this.state_0 = 3;
        this.result_0 = this.local$nextChunk(this.local$size.v, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 3:
        this.local$tmp$ = this.result_0;
        if (this.local$tmp$ == null) {
          this.state_0 = 5;
          continue;
        } else {
          this.state_0 = 4;
          continue;
        }
      case 4:
        var chunk = this.local$tmp$;
        takeWhileSize$break:
          do {
            var tmp$, tmp$_0;
            var release = true;
            tmp$ = prepareReadFirstHead(chunk, 1);
            if (tmp$ == null) {
              break takeWhileSize$break;
            }
            var current = tmp$;
            var size = 1;
            try {
              loop_label:
                do {
                  var $this = current;
                  var before = $this.writePosition - $this.readPosition | 0;
                  var after;
                  if (before >= size) {
                    try {
                      var buffer = current;
                      var skip = {
  v: 0};
                      var decodeUTF8$result;
                      decodeUTF8$break:
                        do {
                          var byteCount = {
  v: 0};
                          var value = {
  v: 0};
                          var lastByteCount = {
  v: 0};
                          var memory = buffer.memory;
                          var start = buffer.readPosition;
                          var endExclusive = buffer.writePosition;
                          loop_label_0:
                            for (var index = start; index < endExclusive; index++) {
                              var v = memory.view.getInt8(index) & 255;
                              if ((v & 128) === 0) {
                                if (byteCount.v !== 0) 
                                  malformedByteCount(byteCount.v);
                                var ch = toBoxedChar(toChar(v));
                                var consumer$result;
                                consumer$break:
                                  do {
                                    switch (unboxChar(ch)) {
                                      case 13:
                                        if (this.local$cr.v) {
                                          this.local$end.v = true;
                                          consumer$result = false;
                                          break consumer$break;
                                        }
                                        this.local$cr.v = true;
                                        consumer$result = true;
                                        break consumer$break;
                                      case 10:
                                        this.local$end.v = true;
                                        skip.v = 1;
                                        consumer$result = false;
                                        break consumer$break;
                                      default:
                                        if (this.local$cr.v) {
                                          this.local$end.v = true;
                                          consumer$result = false;
                                          break consumer$break;
                                        }
                                        if (this.local$decoded.v === this.local$limit) {
                                          throw new BufferLimitExceededException('Too many characters in line: limit ' + this.local$limit + ' exceeded');
                                        }
                                        this.local$decoded.v = this.local$decoded.v + 1 | 0;
                                        this.local$out.append_s8itvh$(unboxChar(ch));
                                        consumer$result = true;
                                        break consumer$break;
                                    }
                                  } while (false);
                                if (!consumer$result) {
                                  buffer.discardExact_za3lpa$(index - start | 0);
                                  decodeUTF8$result = -1;
                                  break decodeUTF8$break;
                                }
                              } else if (byteCount.v === 0) {
                                var mask = 128;
                                value.v = v;
                                for (var i = 1; i <= 6; i++) {
                                  if ((value.v & mask) !== 0) {
                                    value.v = value.v & ~mask;
                                    mask = mask >> 1;
                                    byteCount.v = byteCount.v + 1 | 0;
                                  } else {
                                    break;
                                  }
                                }
                                lastByteCount.v = byteCount.v;
                                byteCount.v = byteCount.v - 1 | 0;
                                if (lastByteCount.v > (endExclusive - index | 0)) {
                                  buffer.discardExact_za3lpa$(index - start | 0);
                                  decodeUTF8$result = lastByteCount.v;
                                  break decodeUTF8$break;
                                }
                              } else {
                                value.v = value.v << 6 | v & 127;
                                byteCount.v = byteCount.v - 1 | 0;
                                if (byteCount.v === 0) {
                                  if (isBmpCodePoint(value.v)) {
                                    var ch_0 = toBoxedChar(toChar(value.v));
                                    var consumer$result_0;
                                    consumer$break:
                                      do {
                                        switch (unboxChar(ch_0)) {
                                          case 13:
                                            if (this.local$cr.v) {
                                              this.local$end.v = true;
                                              consumer$result_0 = false;
                                              break consumer$break;
                                            }
                                            this.local$cr.v = true;
                                            consumer$result_0 = true;
                                            break consumer$break;
                                          case 10:
                                            this.local$end.v = true;
                                            skip.v = 1;
                                            consumer$result_0 = false;
                                            break consumer$break;
                                          default:
                                            if (this.local$cr.v) {
                                              this.local$end.v = true;
                                              consumer$result_0 = false;
                                              break consumer$break;
                                            }
                                            if (this.local$decoded.v === this.local$limit) {
                                              throw new BufferLimitExceededException('Too many characters in line: limit ' + this.local$limit + ' exceeded');
                                            }
                                            this.local$decoded.v = this.local$decoded.v + 1 | 0;
                                            this.local$out.append_s8itvh$(unboxChar(ch_0));
                                            consumer$result_0 = true;
                                            break consumer$break;
                                        }
                                      } while (false);
                                    if (!consumer$result_0) {
                                      buffer.discardExact_za3lpa$(index - start - lastByteCount.v + 1 | 0);
                                      decodeUTF8$result = -1;
                                      break decodeUTF8$break;
                                    }
                                  } else if (!isValidCodePoint(value.v)) {
                                    malformedCodePoint(value.v);
                                  } else {
                                    var ch_1 = toBoxedChar(toChar(highSurrogate(value.v)));
                                    var consumer$result_1;
                                    consumer$break:
                                      do {
                                        switch (unboxChar(ch_1)) {
                                          case 13:
                                            if (this.local$cr.v) {
                                              this.local$end.v = true;
                                              consumer$result_1 = false;
                                              break consumer$break;
                                            }
                                            this.local$cr.v = true;
                                            consumer$result_1 = true;
                                            break consumer$break;
                                          case 10:
                                            this.local$end.v = true;
                                            skip.v = 1;
                                            consumer$result_1 = false;
                                            break consumer$break;
                                          default:
                                            if (this.local$cr.v) {
                                              this.local$end.v = true;
                                              consumer$result_1 = false;
                                              break consumer$break;
                                            }
                                            if (this.local$decoded.v === this.local$limit) {
                                              throw new BufferLimitExceededException('Too many characters in line: limit ' + this.local$limit + ' exceeded');
                                            }
                                            this.local$decoded.v = this.local$decoded.v + 1 | 0;
                                            this.local$out.append_s8itvh$(unboxChar(ch_1));
                                            consumer$result_1 = true;
                                            break consumer$break;
                                        }
                                      } while (false);
                                    var tmp$_1 = !consumer$result_1;
                                    if (!tmp$_1) {
                                      var ch_2 = toBoxedChar(toChar(lowSurrogate(value.v)));
                                      var consumer$result_2;
                                      consumer$break:
                                        do {
                                          switch (unboxChar(ch_2)) {
                                            case 13:
                                              if (this.local$cr.v) {
                                                this.local$end.v = true;
                                                consumer$result_2 = false;
                                                break consumer$break;
                                              }
                                              this.local$cr.v = true;
                                              consumer$result_2 = true;
                                              break consumer$break;
                                            case 10:
                                              this.local$end.v = true;
                                              skip.v = 1;
                                              consumer$result_2 = false;
                                              break consumer$break;
                                            default:
                                              if (this.local$cr.v) {
                                                this.local$end.v = true;
                                                consumer$result_2 = false;
                                                break consumer$break;
                                              }
                                              if (this.local$decoded.v === this.local$limit) {
                                                throw new BufferLimitExceededException('Too many characters in line: limit ' + this.local$limit + ' exceeded');
                                              }
                                              this.local$decoded.v = this.local$decoded.v + 1 | 0;
                                              this.local$out.append_s8itvh$(unboxChar(ch_2));
                                              consumer$result_2 = true;
                                              break consumer$break;
                                          }
                                        } while (false);
                                      tmp$_1 = !consumer$result_2;
                                    }
                                    if (tmp$_1) {
                                      buffer.discardExact_za3lpa$(index - start - lastByteCount.v + 1 | 0);
                                      decodeUTF8$result = -1;
                                      break decodeUTF8$break;
                                    }
                                  }
                                  value.v = 0;
                                }
                              }
                            }
                          var rc = endExclusive - start | 0;
                          buffer.discardExact_za3lpa$(rc);
                          decodeUTF8$result = 0;
                        } while (false);
                      this.local$size.v = decodeUTF8$result;
                      if (skip.v > 0) {
                        buffer.discardExact_za3lpa$(skip.v);
                      }
                      this.local$size.v = this.local$end.v ? 0 : coerceAtLeast(this.local$size.v, 1);
                      size = this.local$size.v;
                    } finally                     {
                      var $this_0 = current;
                      after = $this_0.writePosition - $this_0.readPosition | 0;
                    }
                  } else {
                    after = before;
                  }
                  release = false;
                  if (after === 0) 
                    tmp$_0 = prepareReadNextHead(chunk, current);
                  else {
                    var tmp$_2 = after < size;
                    if (!tmp$_2) {
                      var $this_1 = current;
                      tmp$_2 = ($this_1.capacity - $this_1.limit | 0) < 8;
                    }
                    if (tmp$_2) {
                      completeReadHead_0(chunk, current);
                      tmp$_0 = prepareReadFirstHead(chunk, size);
                    } else 
                      tmp$_0 = current;
                  }
                  var next = tmp$_0;
                  if (next == null) {
                    break loop_label;
                  }
                  current = next;
                  release = true;
                } while (size > 0);
            } finally             {
              if (release) {
                completeReadHead_0(chunk, current);
              }
            }
          } while (false);
        this.state_0 = 2;
        continue;
      case 5:
        if (this.local$size.v > 1) 
          prematureEndOfStreamUtf(this.local$size.v);
        if (this.local$cr.v) {
          this.local$end.v = true;
        }
        return this.local$decoded.v > 0 || this.local$end.v;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function decodeUTF8LineLoopSuspend(out_0, limit_0, nextChunk_0, continuation_0, suspended) {
    var instance = new Coroutine$decodeUTF8LineLoopSuspend(out_0, limit_0, nextChunk_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function prematureEndOfStreamUtf(size) {
    throw new EOFException('Premature end of stream: expected ' + size + ' bytes to decode UTF-8 char');
  }
  function byteCountUtf8(firstByte) {
    var byteCount = 0;
    var mask = 128;
    var value = firstByte;
    for (var i = 1; i <= 6; i++) {
      if ((value & mask) !== 0) {
        value = value & ~mask;
        mask = mask >> 1;
        byteCount = byteCount + 1 | 0;
      } else {
        break;
      }
    }
    return byteCount;
  }
  var decodeUTF8 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.internal.decodeUTF8_cise53$', wrapFunction(function() {
  var Buffer = _.io.ktor.utils.io.core.Buffer;
  var throwCCE = Kotlin.throwCCE;
  var malformedByteCount = _.io.ktor.utils.io.core.internal.malformedByteCount_za3lpa$;
  var toChar = Kotlin.toChar;
  var toBoxedChar = Kotlin.toBoxedChar;
  var isBmpCodePoint = _.io.ktor.utils.io.core.internal.isBmpCodePoint_za3lpa$;
  var isValidCodePoint = _.io.ktor.utils.io.core.internal.isValidCodePoint_za3lpa$;
  var malformedCodePoint = _.io.ktor.utils.io.core.internal.malformedCodePoint_za3lpa$;
  var highSurrogate = _.io.ktor.utils.io.core.internal.highSurrogate_za3lpa$;
  var lowSurrogate = _.io.ktor.utils.io.core.internal.lowSurrogate_za3lpa$;
  return function($receiver, consumer) {
  var tmp$;
  var $receiver_0 = Kotlin.isType(tmp$ = $receiver, Buffer) ? tmp$ : throwCCE();
  var decodeUTF8$result;
  decodeUTF8$break:
    do {
      var byteCount = {
  v: 0};
      var value = {
  v: 0};
      var lastByteCount = {
  v: 0};
      var memory = $receiver_0.memory;
      var start = $receiver_0.readPosition;
      var endExclusive = $receiver_0.writePosition;
      for (var index = start; index < endExclusive; index++) {
        var v = memory.view.getInt8(index) & 255;
        if ((v & 128) === 0) {
          if (byteCount.v !== 0) 
            malformedByteCount(byteCount.v);
          if (!consumer(toBoxedChar(toChar(v)))) {
            $receiver_0.discardExact_za3lpa$(index - start | 0);
            decodeUTF8$result = -1;
            break decodeUTF8$break;
          }
        } else if (byteCount.v === 0) {
          var mask = 128;
          value.v = v;
          for (var i = 1; i <= 6; i++) {
            if ((value.v & mask) !== 0) {
              value.v = value.v & ~mask;
              mask = mask >> 1;
              byteCount.v = byteCount.v + 1 | 0;
            } else {
              break;
            }
          }
          lastByteCount.v = byteCount.v;
          byteCount.v = byteCount.v - 1 | 0;
          if (lastByteCount.v > (endExclusive - index | 0)) {
            $receiver_0.discardExact_za3lpa$(index - start | 0);
            decodeUTF8$result = lastByteCount.v;
            break decodeUTF8$break;
          }
        } else {
          value.v = value.v << 6 | v & 127;
          byteCount.v = byteCount.v - 1 | 0;
          if (byteCount.v === 0) {
            if (isBmpCodePoint(value.v)) {
              if (!consumer(toBoxedChar(toChar(value.v)))) {
                $receiver_0.discardExact_za3lpa$(index - start - lastByteCount.v + 1 | 0);
                decodeUTF8$result = -1;
                break decodeUTF8$break;
              }
            } else if (!isValidCodePoint(value.v)) {
              malformedCodePoint(value.v);
            } else {
              if (!consumer(toBoxedChar(toChar(highSurrogate(value.v)))) || !consumer(toBoxedChar(toChar(lowSurrogate(value.v))))) {
                $receiver_0.discardExact_za3lpa$(index - start - lastByteCount.v + 1 | 0);
                decodeUTF8$result = -1;
                break decodeUTF8$break;
              }
            }
            value.v = 0;
          }
        }
      }
      var rc = endExclusive - start | 0;
      $receiver_0.discardExact_za3lpa$(rc);
      decodeUTF8$result = 0;
    } while (false);
  return decodeUTF8$result;
};
}));
  var decodeUTF8_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.internal.decodeUTF8_dce4k1$', wrapFunction(function() {
  var malformedByteCount = _.io.ktor.utils.io.core.internal.malformedByteCount_za3lpa$;
  var toChar = Kotlin.toChar;
  var toBoxedChar = Kotlin.toBoxedChar;
  var isBmpCodePoint = _.io.ktor.utils.io.core.internal.isBmpCodePoint_za3lpa$;
  var isValidCodePoint = _.io.ktor.utils.io.core.internal.isValidCodePoint_za3lpa$;
  var malformedCodePoint = _.io.ktor.utils.io.core.internal.malformedCodePoint_za3lpa$;
  var highSurrogate = _.io.ktor.utils.io.core.internal.highSurrogate_za3lpa$;
  var lowSurrogate = _.io.ktor.utils.io.core.internal.lowSurrogate_za3lpa$;
  return function($receiver, consumer) {
  var byteCount = {
  v: 0};
  var value = {
  v: 0};
  var lastByteCount = {
  v: 0};
  var memory = $receiver.memory;
  var start = $receiver.readPosition;
  var endExclusive = $receiver.writePosition;
  for (var index = start; index < endExclusive; index++) {
    var v = memory.view.getInt8(index) & 255;
    if ((v & 128) === 0) {
      if (byteCount.v !== 0) 
        malformedByteCount(byteCount.v);
      if (!consumer(toBoxedChar(toChar(v)))) {
        $receiver.discardExact_za3lpa$(index - start | 0);
        return -1;
      }
    } else if (byteCount.v === 0) {
      var mask = 128;
      value.v = v;
      for (var i = 1; i <= 6; i++) {
        if ((value.v & mask) !== 0) {
          value.v = value.v & ~mask;
          mask = mask >> 1;
          byteCount.v = byteCount.v + 1 | 0;
        } else {
          break;
        }
      }
      lastByteCount.v = byteCount.v;
      byteCount.v = byteCount.v - 1 | 0;
      if (lastByteCount.v > (endExclusive - index | 0)) {
        $receiver.discardExact_za3lpa$(index - start | 0);
        return lastByteCount.v;
      }
    } else {
      value.v = value.v << 6 | v & 127;
      byteCount.v = byteCount.v - 1 | 0;
      if (byteCount.v === 0) {
        if (isBmpCodePoint(value.v)) {
          if (!consumer(toBoxedChar(toChar(value.v)))) {
            $receiver.discardExact_za3lpa$(index - start - lastByteCount.v + 1 | 0);
            return -1;
          }
        } else if (!isValidCodePoint(value.v)) {
          malformedCodePoint(value.v);
        } else {
          if (!consumer(toBoxedChar(toChar(highSurrogate(value.v)))) || !consumer(toBoxedChar(toChar(lowSurrogate(value.v))))) {
            $receiver.discardExact_za3lpa$(index - start - lastByteCount.v + 1 | 0);
            return -1;
          }
        }
        value.v = 0;
      }
    }
  }
  var rc = endExclusive - start | 0;
  $receiver.discardExact_za3lpa$(rc);
  return 0;
};
}));
  function CharArraySequence(array, offset, length) {
    this.array_0 = array;
    this.offset_0 = offset;
    this.length_xy9hzd$_0 = length;
  }
  Object.defineProperty(CharArraySequence.prototype, 'length', {
  get: function() {
  return this.length_xy9hzd$_0;
}});
  CharArraySequence.prototype.charCodeAt = function(index) {
  if (index >= this.length) {
    this.indexOutOfBounds_0(index);
  }
  return this.array_0[index + this.offset_0 | 0];
};
  function CharArraySequence$subSequence$lambda(closure$startIndex) {
    return function() {
  return "startIndex shouldn't be negative: " + closure$startIndex;
};
  }
  function CharArraySequence$subSequence$lambda_0(closure$startIndex, this$CharArraySequence) {
    return function() {
  return 'startIndex is too large: ' + closure$startIndex + ' > ' + this$CharArraySequence.length;
};
  }
  function CharArraySequence$subSequence$lambda_1(closure$endIndex, this$CharArraySequence) {
    return function() {
  return 'endIndex is too large: ' + closure$endIndex + ' > ' + this$CharArraySequence.length;
};
  }
  function CharArraySequence$subSequence$lambda_2(closure$startIndex, closure$endIndex) {
    return function() {
  return 'endIndex should be greater or equal to startIndex: ' + closure$startIndex + ' > ' + closure$endIndex;
};
  }
  CharArraySequence.prototype.subSequence_vux9f0$ = function(startIndex, endIndex) {
  if (!(startIndex >= 0)) {
    var m = new require$ObjectLiteral_6(CharArraySequence$subSequence$lambda(startIndex));
    m.doFail();
  }
  if (!(startIndex <= this.length)) {
    var m_0 = new require$ObjectLiteral_6(CharArraySequence$subSequence$lambda_0(startIndex, this));
    m_0.doFail();
  }
  if (!((startIndex + endIndex | 0) <= this.length)) {
    var m_1 = new require$ObjectLiteral_6(CharArraySequence$subSequence$lambda_1(endIndex, this));
    m_1.doFail();
  }
  if (!(endIndex >= startIndex)) {
    var m_2 = new require$ObjectLiteral_6(CharArraySequence$subSequence$lambda_2(startIndex, endIndex));
    m_2.doFail();
  }
  return new CharArraySequence(this.array_0, this.offset_0 + startIndex | 0, endIndex - startIndex | 0);
};
  CharArraySequence.prototype.indexOutOfBounds_0 = function(index) {
  throw new IndexOutOfBoundsException('String index out of bounds: ' + index + ' > ' + this.length);
};
  CharArraySequence.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'CharArraySequence', 
  interfaces: [CharSequence]};
  function EncodeResult(value) {
    this.value = value;
  }
  Object.defineProperty(EncodeResult.prototype, 'characters', {
  get: defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.internal.EncodeResult.get_characters', wrapFunction(function() {
  var toShort = Kotlin.toShort;
  var UShort_init = Kotlin.kotlin.UShort;
  return function() {
  return new UShort_init(toShort(this.value >>> 16));
};
}))});
  Object.defineProperty(EncodeResult.prototype, 'bytes', {
  get: defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.internal.EncodeResult.get_bytes', wrapFunction(function() {
  var toShort = Kotlin.toShort;
  var UShort_init = Kotlin.kotlin.UShort;
  return function() {
  return new UShort_init(toShort(this.value & 65535));
};
}))});
  EncodeResult.prototype.component1 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.internal.EncodeResult.component1', wrapFunction(function() {
  var toShort = Kotlin.toShort;
  var UShort_init = Kotlin.kotlin.UShort;
  return function() {
  return new UShort_init(toShort(this.value >>> 16));
};
}));
  EncodeResult.prototype.component2 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.internal.EncodeResult.component2', wrapFunction(function() {
  var toShort = Kotlin.toShort;
  var UShort_init = Kotlin.kotlin.UShort;
  return function() {
  return new UShort_init(toShort(this.value & 65535));
};
}));
  EncodeResult.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'EncodeResult', 
  interfaces: []};
  function EncodeResult_init(characters, bytes, $this) {
    $this = $this || Object.create(EncodeResult.prototype);
    EncodeResult.call($this, (characters.data & 65535) << 16 | bytes.data & 65535);
    return $this;
  }
  EncodeResult.prototype.unbox = function() {
  return this.value;
};
  EncodeResult.prototype.toString = function() {
  return 'EncodeResult(value=' + Kotlin.toString(this.value) + ')';
};
  EncodeResult.prototype.hashCode = function() {
  var result = 0;
  result = result * 31 + Kotlin.hashCode(this.value) | 0;
  return result;
};
  EncodeResult.prototype.equals = function(other) {
  return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
};
  function encodeUTF8_0($receiver, text, from, to, dstOffset, dstLimit) {
    var tmp$, tmp$_0;
    var b = from + (UShort_init.Companion.MAX_VALUE.data & 65535) | 0;
    var lastCharIndex = Math_0.min(to, b);
    var resultLimit = coerceAtMost_0(dstLimit, UShort_init.Companion.MAX_VALUE.data & 65535);
    var resultPosition = dstOffset;
    var index = from;
    do {
      if (resultPosition >= resultLimit || index >= lastCharIndex) {
        return EncodeResult_init(new UShort_init(toShort(index - from | 0)), new UShort_init(toShort(resultPosition - dstOffset | 0)));
      }
      var character = (text.charCodeAt((tmp$ = index , index = tmp$ + 1 | 0 , tmp$)) | 0) & 65535;
      if ((character & 65408) === 0) {
        $receiver.view.setInt8((tmp$_0 = resultPosition , resultPosition = tmp$_0 + 1 | 0 , tmp$_0), toByte(character));
      } else {
        break;
      }
    } while (true);
    index = index - 1 | 0;
    return encodeUTF8Stage1($receiver, text, index, lastCharIndex, from, resultPosition, resultLimit, dstOffset);
  }
  function encodeUTF8Stage1($receiver, text, index1, lastCharIndex, from, resultPosition1, resultLimit, dstOffset) {
    var tmp$, tmp$_0, tmp$_1;
    var index = index1;
    var resultPosition = resultPosition1;
    var stage1Limit = resultLimit - 3 | 0;
    do {
      var freeSpace = stage1Limit - resultPosition | 0;
      if (freeSpace <= 0 || index >= lastCharIndex) {
        break;
      }
      var character = text.charCodeAt((tmp$ = index , index = tmp$ + 1 | 0 , tmp$));
      if (isHighSurrogate(character)) 
        if (index === lastCharIndex || !isLowSurrogate(text.charCodeAt(index))) {
        tmp$_1 = 63;
      } else {
        tmp$_1 = codePoint(character, text.charCodeAt((tmp$_0 = index , index = tmp$_0 + 1 | 0 , tmp$_0)));
      }
      else 
        tmp$_1 = character | 0;
      var codepoint = tmp$_1;
      var offset = resultPosition;
      var putUtf8Char$result;
      if (0 <= codepoint && codepoint <= 127) {
        $receiver.view.setInt8(offset, toByte(codepoint));
        putUtf8Char$result = 1;
      } else if (128 <= codepoint && codepoint <= 2047) {
        $receiver.view.setInt8(offset, toByte(192 | codepoint >> 6 & 31));
        $receiver.view.setInt8(offset + 1 | 0, toByte(128 | codepoint & 63));
        putUtf8Char$result = 2;
      } else if (2048 <= codepoint && codepoint <= 65535) {
        $receiver.view.setInt8(offset, toByte(224 | codepoint >> 12 & 15));
        $receiver.view.setInt8(offset + 1 | 0, toByte(128 | codepoint >> 6 & 63));
        $receiver.view.setInt8(offset + 2 | 0, toByte(128 | codepoint & 63));
        putUtf8Char$result = 3;
      } else if (65536 <= codepoint && codepoint <= 1114111) {
        $receiver.view.setInt8(offset, toByte(240 | codepoint >> 18 & 7));
        $receiver.view.setInt8(offset + 1 | 0, toByte(128 | codepoint >> 12 & 63));
        $receiver.view.setInt8(offset + 2 | 0, toByte(128 | codepoint >> 6 & 63));
        $receiver.view.setInt8(offset + 3 | 0, toByte(128 | codepoint & 63));
        putUtf8Char$result = 4;
      } else {
        putUtf8Char$result = malformedCodePoint(codepoint);
      }
      var size = putUtf8Char$result;
      resultPosition = resultPosition + size | 0;
    } while (true);
    if (resultPosition === stage1Limit) {
      return encodeUTF8Stage2($receiver, text, index, lastCharIndex, from, resultPosition, resultLimit, dstOffset);
    }
    return EncodeResult_init(new UShort_init(toShort(index - from | 0)), new UShort_init(toShort(resultPosition - dstOffset | 0)));
  }
  function encodeUTF8Stage2($receiver, text, index1, lastCharIndex, from, resultPosition1, resultLimit, dstOffset) {
    var tmp$, tmp$_0, tmp$_1;
    var index = index1;
    var resultPosition = resultPosition1;
    do {
      var freeSpace = resultLimit - resultPosition | 0;
      if (freeSpace <= 0 || index >= lastCharIndex) {
        break;
      }
      var character = text.charCodeAt((tmp$ = index , index = tmp$ + 1 | 0 , tmp$));
      if (!isHighSurrogate(character)) 
        tmp$_1 = character | 0;
      else {
        if (index === lastCharIndex || !isLowSurrogate(text.charCodeAt(index))) {
          tmp$_1 = 63;
        } else {
          tmp$_1 = codePoint(character, text.charCodeAt((tmp$_0 = index , index = tmp$_0 + 1 | 0 , tmp$_0)));
        }
      }
      var codepoint = tmp$_1;
      var charactersSize$result;
      if (1 <= codepoint && codepoint <= 127) {
        charactersSize$result = 1;
      } else if (128 <= codepoint && codepoint <= 2047) {
        charactersSize$result = 2;
      } else if (2048 <= codepoint && codepoint <= 65535) {
        charactersSize$result = 3;
      } else if (65536 <= codepoint && codepoint <= 1114111) {
        charactersSize$result = 4;
      } else {
        charactersSize$result = malformedCodePoint(codepoint);
      }
      if (charactersSize$result > freeSpace) {
        index = index - 1 | 0;
        break;
      }
      var offset = resultPosition;
      var putUtf8Char$result;
      if (0 <= codepoint && codepoint <= 127) {
        $receiver.view.setInt8(offset, toByte(codepoint));
        putUtf8Char$result = 1;
      } else if (128 <= codepoint && codepoint <= 2047) {
        $receiver.view.setInt8(offset, toByte(192 | codepoint >> 6 & 31));
        $receiver.view.setInt8(offset + 1 | 0, toByte(128 | codepoint & 63));
        putUtf8Char$result = 2;
      } else if (2048 <= codepoint && codepoint <= 65535) {
        $receiver.view.setInt8(offset, toByte(224 | codepoint >> 12 & 15));
        $receiver.view.setInt8(offset + 1 | 0, toByte(128 | codepoint >> 6 & 63));
        $receiver.view.setInt8(offset + 2 | 0, toByte(128 | codepoint & 63));
        putUtf8Char$result = 3;
      } else if (65536 <= codepoint && codepoint <= 1114111) {
        $receiver.view.setInt8(offset, toByte(240 | codepoint >> 18 & 7));
        $receiver.view.setInt8(offset + 1 | 0, toByte(128 | codepoint >> 12 & 63));
        $receiver.view.setInt8(offset + 2 | 0, toByte(128 | codepoint >> 6 & 63));
        $receiver.view.setInt8(offset + 3 | 0, toByte(128 | codepoint & 63));
        putUtf8Char$result = 4;
      } else {
        putUtf8Char$result = malformedCodePoint(codepoint);
      }
      var size = putUtf8Char$result;
      resultPosition = resultPosition + size | 0;
    } while (true);
    return EncodeResult_init(new UShort_init(toShort(index - from | 0)), new UShort_init(toShort(resultPosition - dstOffset | 0)));
  }
  function charactersSize(v) {
    if (1 <= v && v <= 127) 
      return 1;
    else if (128 <= v && v <= 2047) 
      return 2;
    else if (2048 <= v && v <= 65535) 
      return 3;
    else if (65536 <= v && v <= 1114111) 
      return 4;
    else 
      return malformedCodePoint(v);
  }
  var putUtf8Char = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.internal.putUtf8Char_9qn7ci$', wrapFunction(function() {
  var toByte = Kotlin.toByte;
  var malformedCodePoint = _.io.ktor.utils.io.core.internal.malformedCodePoint_za3lpa$;
  return function($receiver, offset, v) {
  if (0 <= v && v <= 127) {
    $receiver.view.setInt8(offset, toByte(v));
    return 1;
  } else if (128 <= v && v <= 2047) {
    $receiver.view.setInt8(offset, toByte(192 | v >> 6 & 31));
    $receiver.view.setInt8(offset + 1 | 0, toByte(128 | v & 63));
    return 2;
  } else if (2048 <= v && v <= 65535) {
    $receiver.view.setInt8(offset, toByte(224 | v >> 12 & 15));
    $receiver.view.setInt8(offset + 1 | 0, toByte(128 | v >> 6 & 63));
    $receiver.view.setInt8(offset + 2 | 0, toByte(128 | v & 63));
    return 3;
  } else if (65536 <= v && v <= 1114111) {
    $receiver.view.setInt8(offset, toByte(240 | v >> 18 & 7));
    $receiver.view.setInt8(offset + 1 | 0, toByte(128 | v >> 12 & 63));
    $receiver.view.setInt8(offset + 2 | 0, toByte(128 | v >> 6 & 63));
    $receiver.view.setInt8(offset + 3 | 0, toByte(128 | v & 63));
    return 4;
  } else 
    return malformedCodePoint(v);
};
}));
  function malformedByteCount(byteCount) {
    throw new MalformedUTF8InputException('Expected ' + byteCount + ' more character bytes');
  }
  function malformedCodePoint(value) {
    throw IllegalArgumentException_init('Malformed code-point ' + value + ' found');
  }
  var MaxCodePoint;
  var MinLowSurrogate;
  var MinHighSurrogate;
  var MinSupplementary;
  var HighSurrogateMagic;
  function isBmpCodePoint(cp) {
    return cp >>> 16 === 0;
  }
  function isValidCodePoint(codePoint) {
    return codePoint <= 1114111;
  }
  function lowSurrogate(cp) {
    return (cp & 1023) + 56320 | 0;
  }
  function highSurrogate(cp) {
    return (cp >>> 10) + 55232 | 0;
  }
  function codePoint(high, low) {
    var highValue = (high | 0) - 55232 | 0;
    var lowValue = (low | 0) - 56320 | 0;
    return highValue << 10 | lowValue;
  }
  function MalformedUTF8InputException(message) {
    Exception_init(message, this);
    this.name = 'MalformedUTF8InputException';
  }
  MalformedUTF8InputException.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'MalformedUTF8InputException', 
  interfaces: [Exception]};
  function DangerousInternalIoApi() {
  }
  DangerousInternalIoApi.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'DangerousInternalIoApi', 
  interfaces: [Annotation]};
  function $unsafeAppend$($receiver, builder) {
    var tmp$;
    tmp$ = builder.stealAll_8be2vx$();
    if (tmp$ == null) {
      return;
    }
    var builderHead = tmp$;
    var builderSize = builder.size;
    if (builderSize <= PACKET_MAX_COPY_SIZE && builderHead.next == null && $receiver.tryWriteAppend_pvnryh$(builderHead)) {
      builder.afterBytesStolen_8be2vx$();
      return;
    }
    $receiver.append_pvnryh$(builderHead);
  }
  function prepareReadFirstHeadOld($receiver, minSize) {
    var tmp$;
    return (tmp$ = prepareReadFirstHead($receiver, minSize)) == null || Kotlin.isType(tmp$, IoBuffer) ? tmp$ : throwCCE();
  }
  function prepareReadFirstHead($receiver, minSize) {
    if (Kotlin.isType($receiver, AbstractInput)) {
      return $receiver.prepareReadHead_za3lpa$(minSize);
    }
    if (Kotlin.isType($receiver, ChunkBuffer)) {
      return $receiver.writePosition > $receiver.readPosition ? $receiver : null;
    }
    return prepareReadHeadFallback($receiver, minSize);
  }
  function prepareReadHeadFallback($receiver, minSize) {
    if ($receiver.endOfInput) 
      return null;
    var buffer = ChunkBuffer$Companion_getInstance().Pool.borrow();
    var copied = $receiver.peekTo_afjyek$(buffer.memory, Kotlin.Long.fromInt(buffer.writePosition), L0, Kotlin.Long.fromInt(minSize), Kotlin.Long.fromInt(buffer.limit - buffer.writePosition | 0)).toInt();
    buffer.commitWritten_za3lpa$(copied);
    if (copied < minSize) {
      prematureEndOfStream(minSize);
    }
    return buffer;
  }
  function completeReadHead($receiver, current) {
    completeReadHead_0($receiver, current);
  }
  function completeReadHead_0($receiver, current) {
    if (current === $receiver) {
      return;
    }
    if (Kotlin.isType($receiver, AbstractInput)) {
      if (!(current.writePosition > current.readPosition)) {
        $receiver.ensureNext_j2u0py$(current);
      } else {
        if ((current.capacity - current.limit | 0) < 8) {
          $receiver.fixGapAfterRead_j2u0py$(current);
        } else {
          $receiver.headPosition = current.readPosition;
        }
      }
      return;
    }
    completeReadHeadFallback($receiver, current);
  }
  function completeReadHeadFallback($receiver, current) {
    var discardAmount = current.capacity - (current.limit - current.writePosition | 0) - (current.writePosition - current.readPosition | 0) | 0;
    discardExact_1($receiver, discardAmount);
    current.release_2bs5fo$(ChunkBuffer$Companion_getInstance().Pool);
  }
  function prepareReadNextHeadOld($receiver, current) {
    var tmp$;
    return (tmp$ = prepareReadNextHead($receiver, current)) == null || Kotlin.isType(tmp$, IoBuffer) ? tmp$ : throwCCE();
  }
  function prepareReadNextHead($receiver, current) {
    if (current === $receiver) {
      return $receiver.writePosition > $receiver.readPosition ? $receiver : null;
    }
    if (Kotlin.isType($receiver, AbstractInput)) {
      return $receiver.ensureNextHead_j2u0py$(current);
    }
    return prepareNextReadHeadFallback($receiver, current);
  }
  function prepareNextReadHeadFallback($receiver, current) {
    var discardAmount = current.capacity - (current.limit - current.writePosition | 0) - (current.writePosition - current.readPosition | 0) | 0;
    discardExact_1($receiver, discardAmount);
    current.resetForWrite();
    if ($receiver.endOfInput || peekTo_1($receiver, current) <= 0) {
      current.release_2bs5fo$(ChunkBuffer$Companion_getInstance().Pool);
      return null;
    }
    return current;
  }
  function prepareWriteHead($receiver, capacity, current) {
    var tmp$;
    return Kotlin.isType(tmp$ = prepareWriteHead_0($receiver, capacity, current), IoBuffer) ? tmp$ : throwCCE();
  }
  function prepareWriteHead_0($receiver, capacity, current) {
    if (Kotlin.isType($receiver, AbstractOutput)) {
      if (current != null) {
        $receiver.afterHeadWrite();
      }
      return $receiver.prepareWriteHead_za3lpa$(capacity);
    }
    return prepareWriteHeadFallback($receiver, current);
  }
  function prepareWriteHeadFallback($receiver, current) {
    if (current != null) {
      writeFully_20($receiver, current);
      current.resetForWrite();
      return current;
    }
    return ChunkBuffer$Companion_getInstance().Pool.borrow();
  }
  function afterHeadWrite($receiver, current) {
    return afterHeadWrite_0($receiver, current);
  }
  function afterHeadWrite_0($receiver, current) {
    if (Kotlin.isType($receiver, AbstractOutput)) {
      return $receiver.afterHeadWrite();
    }
    afterWriteHeadFallback($receiver, current);
  }
  var EmptyByteArray;
  function afterWriteHeadFallback($receiver, current) {
    writeFully_20($receiver, current);
    current.release_2bs5fo$(ChunkBuffer$Companion_getInstance().Pool);
  }
  require$ObjectLiteral_7.prototype = Object.create(RequireFailureCapture.prototype);
  require$ObjectLiteral_7.prototype.constructor = require$ObjectLiteral_7;
  function require$ObjectLiteral_7(closure$message) {
    this.closure$message = closure$message;
    RequireFailureCapture.call(this);
  }
  require$ObjectLiteral_7.prototype.doFail = function() {
  throw IllegalArgumentException_init(this.closure$message());
};
  require$ObjectLiteral_7.$metadata$ = {
  kind: Kind_CLASS, 
  interfaces: [RequireFailureCapture]};
  function TODO_ERROR(value) {
    throw new NotImplementedError_init('An operation is not implemented: ' + ('Not implemented. Value is ' + value));
  }
  function TODO_ERROR_0() {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Not implemented.');
  }
  function checkPeekTo$lambda(closure$offset) {
    return function() {
  return "offset shouldn't be negative: " + closure$offset + '.';
};
  }
  function checkPeekTo$lambda_0(closure$min) {
    return function() {
  return "min shouldn't be negative: " + closure$min + '.';
};
  }
  function checkPeekTo$lambda_1(closure$max, closure$min) {
    return function() {
  return "max should't be less than min: max = " + closure$max + ', min = ' + closure$min + '.';
};
  }
  function checkPeekTo$lambda_2(closure$min, closure$destination) {
    return function() {
  var tmp$ = 'to write the specified minimum number of bytes: min = ' + closure$min + ', free = ';
  var $this = closure$destination;
  return 'Not enough free space in the destination buffer ' + (tmp$ + ($this.limit - $this.writePosition | 0) + '.');
};
  }
  function checkPeekTo(destination, offset, min, max) {
    if (!(offset >= 0)) {
      var m = new require$ObjectLiteral_7(checkPeekTo$lambda(offset));
      m.doFail();
    }
    if (!(min >= 0)) {
      var m_0 = new require$ObjectLiteral_7(checkPeekTo$lambda_0(min));
      m_0.doFail();
    }
    if (!(max >= min)) {
      var m_1 = new require$ObjectLiteral_7(checkPeekTo$lambda_1(max, min));
      m_1.doFail();
    }
    if (!(min <= (destination.limit - destination.writePosition | 0))) {
      var m_2 = new require$ObjectLiteral_7(checkPeekTo$lambda_2(min, destination));
      m_2.doFail();
    }
  }
  function incompatibleVersionError() {
    throw Error_init('This API is no longer supported. ' + 'Please downgrade kotlinx-io or recompile your project/dependencies with new kotlinx-io.');
  }
  function Coroutine$joinToImpl($receiver_0, dst_0, closeOnEnd_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$dst = dst_0;
    this.local$closeOnEnd = closeOnEnd_0;
  }
  Coroutine$joinToImpl.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$joinToImpl.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$joinToImpl.prototype.constructor = Coroutine$joinToImpl;
  Coroutine$joinToImpl.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = copyToSequentialImpl(this.local$$receiver, this.local$dst, Long$Companion$MAX_VALUE, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        if (this.local$closeOnEnd) 
          close(this.local$dst);
        return;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function joinToImpl($receiver_0, dst_0, closeOnEnd_0, continuation_0, suspended) {
    var instance = new Coroutine$joinToImpl($receiver_0, dst_0, closeOnEnd_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function Coroutine$copyToSequentialImpl($receiver_0, dst_0, limit_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$remainingLimit = void 0;
    this.local$transferred = void 0;
    this.local$tail = void 0;
    this.local$$receiver = $receiver_0;
    this.local$dst = dst_0;
    this.local$limit = limit_0;
  }
  Coroutine$copyToSequentialImpl.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$copyToSequentialImpl.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$copyToSequentialImpl.prototype.constructor = Coroutine$copyToSequentialImpl;
  Coroutine$copyToSequentialImpl.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        if (!(this.local$$receiver !== this.local$dst)) {
          var message = 'Failed requirement.';
          throw IllegalArgumentException_init(message.toString());
        }
        this.local$remainingLimit = this.local$limit;
        this.state_0 = 2;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        this.state_0 = 3;
        this.result_0 = this.local$$receiver.awaitInternalAtLeast1_8be2vx$(this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 3:
        if (!this.result_0) {
          this.state_0 = 10;
          continue;
        } else {
          this.state_0 = 4;
          continue;
        }
      case 4:
        this.local$transferred = this.local$$receiver.transferTo_pxvbjg$(this.local$dst, this.local$remainingLimit);
        if (equals(this.local$transferred, L0)) {
          this.state_0 = 7;
          this.result_0 = copyToTail(this.local$$receiver, this.local$dst, this.local$remainingLimit, this);
          if (this.result_0 === COROUTINE_SUSPENDED) 
            return COROUTINE_SUSPENDED;
          continue;
        } else {
          if (this.local$dst.availableForWrite === 0) {
            this.state_0 = 5;
            this.result_0 = this.local$dst.notFull_8be2vx$.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED) 
              return COROUTINE_SUSPENDED;
            continue;
          } else {
            this.state_0 = 6;
            continue;
          }
        }
      case 5:
        this.state_0 = 6;
        continue;
      case 6:
        this.local$tmp$ = this.local$transferred;
        this.state_0 = 9;
        continue;
      case 7:
        this.local$tail = this.result_0;
        if (equals(this.local$tail, L0)) {
          this.state_0 = 10;
          continue;
        } else {
          this.state_0 = 8;
          continue;
        }
      case 8:
        this.local$tmp$ = this.local$tail;
        this.state_0 = 9;
        continue;
      case 9:
        var copied = this.local$tmp$;
        this.local$remainingLimit = this.local$remainingLimit.subtract(copied);
        this.state_0 = 2;
        continue;
      case 10:
        return this.local$limit.subtract(this.local$remainingLimit);
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function copyToSequentialImpl($receiver_0, dst_0, limit_0, continuation_0, suspended) {
    var instance = new Coroutine$copyToSequentialImpl($receiver_0, dst_0, limit_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function Coroutine$copyToTail($receiver_0, dst_0, limit_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 9;
    this.local$lastPiece = void 0;
    this.local$rc = void 0;
    this.local$$receiver = $receiver_0;
    this.local$dst = dst_0;
    this.local$limit = limit_0;
  }
  Coroutine$copyToTail.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$copyToTail.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$copyToTail.prototype.constructor = Coroutine$copyToTail;
  Coroutine$copyToTail.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.local$lastPiece = ChunkBuffer$Companion_getInstance().Pool.borrow();
        this.exceptionState_0 = 7;
        this.local$lastPiece.resetForWrite_za3lpa$(coerceAtMost(this.local$limit, Kotlin.Long.fromInt(this.local$lastPiece.capacity)).toInt());
        this.state_0 = 1;
        this.result_0 = this.local$$receiver.readAvailable_lh221x$(this.local$lastPiece, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        this.local$rc = this.result_0;
        if (this.local$rc === -1) {
          this.local$lastPiece.release_2bs5fo$(ChunkBuffer$Companion_getInstance().Pool);
          this.exceptionState_0 = 9;
          this.finallyPath_0 = [2];
          this.state_0 = 8;
          this.$returnValue = L0;
          continue;
        } else {
          this.state_0 = 3;
          continue;
        }
      case 2:
        return this.$returnValue;
      case 3:
        this.state_0 = 4;
        this.result_0 = this.local$dst.writeFully_lh221x$(this.local$lastPiece, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 4:
        this.exceptionState_0 = 9;
        this.finallyPath_0 = [5];
        this.state_0 = 8;
        this.$returnValue = Kotlin.Long.fromInt(this.local$rc);
        continue;
      case 5:
        return this.$returnValue;
      case 6:
        return;
      case 7:
        this.finallyPath_0 = [9];
        this.state_0 = 8;
        continue;
      case 8:
        this.exceptionState_0 = 9;
        this.local$lastPiece.release_2bs5fo$(ChunkBuffer$Companion_getInstance().Pool);
        this.state_0 = this.finallyPath_0.shift();
        continue;
      case 9:
        throw this.exception_0;
      default:
        this.state_0 = 9;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 9) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function copyToTail($receiver_0, dst_0, limit_0, continuation_0, suspended) {
    var instance = new Coroutine$copyToTail($receiver_0, dst_0, limit_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function ObjectPool() {
  }
  ObjectPool.prototype.close = function() {
  this.dispose();
};
  ObjectPool.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'ObjectPool', 
  interfaces: [Closeable]};
  function NoPoolImpl() {
  }
  Object.defineProperty(NoPoolImpl.prototype, 'capacity', {
  get: function() {
  return 0;
}});
  NoPoolImpl.prototype.recycle_trkh7z$ = function(instance) {
};
  NoPoolImpl.prototype.dispose = function() {
};
  NoPoolImpl.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'NoPoolImpl', 
  interfaces: [ObjectPool]};
  function SingleInstancePool() {
    this.borrowed_m1d2y6$_0 = 0;
    this.disposed_rxrbhb$_0 = false;
    this.instance_vlsx8v$_0 = null;
  }
  Object.defineProperty(SingleInstancePool.prototype, 'capacity', {
  get: function() {
  return 1;
}});
  SingleInstancePool.prototype.borrow = function() {
  var $receiver = this.borrowed_m1d2y6$_0;
  update$break:
    do {
      while (true) {
        var cur = this.borrowed_m1d2y6$_0;
        if (cur !== 0) 
          throw IllegalStateException_init('Instance is already consumed');
        var upd = 1;
        if ((function(scope) {
  return scope.borrowed_m1d2y6$_0 === cur ? function() {
  scope.borrowed_m1d2y6$_0 = upd;
  return true;
}() : false;
})(this)) 
          break update$break;
      }
    } while (false);
  var instance = this.produceInstance();
  this.instance_vlsx8v$_0 = instance;
  return instance;
};
  SingleInstancePool.prototype.recycle_trkh7z$ = function(instance) {
  if (this.instance_vlsx8v$_0 !== instance) {
    if (this.instance_vlsx8v$_0 == null && this.borrowed_m1d2y6$_0 !== 0) {
      throw IllegalStateException_init('Already recycled or an irrelevant instance tried to be recycled');
    }
    throw IllegalStateException_init('Unable to recycle irrelevant instance');
  }
  this.instance_vlsx8v$_0 = null;
  if (!(function(scope) {
  return scope.disposed_rxrbhb$_0 === false ? function() {
  scope.disposed_rxrbhb$_0 = true;
  return true;
}() : false;
})(this)) {
    throw IllegalStateException_init('An instance is already disposed');
  }
  this.disposeInstance_trkh7z$(instance);
};
  SingleInstancePool.prototype.dispose = function() {
  var tmp$;
  if ((function(scope) {
  return scope.disposed_rxrbhb$_0 === false ? function() {
  scope.disposed_rxrbhb$_0 = true;
  return true;
}() : false;
})(this)) {
    tmp$ = this.instance_vlsx8v$_0;
    if (tmp$ == null) {
      return;
    }
    var instance = tmp$;
    this.instance_vlsx8v$_0 = null;
    this.disposeInstance_trkh7z$(instance);
  }
};
  SingleInstancePool.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'SingleInstancePool', 
  interfaces: [ObjectPool]};
  var useBorrowed = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.pool.useBorrowed_ufoqs6$', function($receiver, block) {
  var useInstance$result;
  var instance = $receiver.borrow();
  try {
    useInstance$result = block(instance);
  } finally   {
    $receiver.recycle_trkh7z$(instance);
  }
  return useInstance$result;
});
  var useInstance = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.pool.useInstance_ufoqs6$', function($receiver, block) {
  var instance = $receiver.borrow();
  try {
    return block(instance);
  } finally   {
    $receiver.recycle_trkh7z$(instance);
  }
});
  function ByteChannel_0(autoFlush) {
    if (autoFlush === void 0) 
      autoFlush = false;
    return new ByteChannelJS(IoBuffer$Companion_getInstance().Empty, autoFlush);
  }
  function ByteReadChannel_0(content, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = content.length;
    var tmp$;
    if (content.length === 0) 
      return ByteReadChannel$Companion_getInstance().Empty;
    var head = IoBuffer$Companion_getInstance().Pool.borrow();
    var tail = head;
    var start = offset;
    var end = start + length | 0;
    while (true) {
      tail.reserveEndGap_za3lpa$(8);
      var tmp$_0 = end - start | 0;
      var $this = tail;
      var b = $this.limit - $this.writePosition | 0;
      var size = Math_0.min(tmp$_0, b);
      writeFully_0(Kotlin.isType(tmp$ = tail, Buffer) ? tmp$ : throwCCE(), content, start, size);
      start = start + size | 0;
      if (start === end) 
        break;
      var current = tail;
      tail = IoBuffer$Companion_getInstance().Pool.borrow();
      current.next = tail;
    }
    var $receiver = new ByteChannelJS(head, false);
    close($receiver);
    return $receiver;
  }
  function ByteReadChannel_1(content) {
    if (content.byteLength === 0) 
      return ByteReadChannel$Companion_getInstance().Empty;
    var head = IoBuffer$Companion_getInstance().Pool.borrow();
    var tail = head;
    var start = 0;
    var remaining = content.byteLength - content.byteOffset | 0;
    while (true) {
      tail.reserveEndGap_za3lpa$(8);
      var tmp$ = remaining;
      var $this = tail;
      var b = $this.limit - $this.writePosition | 0;
      var size = Math_0.min(tmp$, b);
      writeFully_28(tail, content, start, size);
      start = start + size | 0;
      remaining = remaining - size | 0;
      if (remaining === 0) 
        break;
      tail = IoBuffer$Companion_getInstance().Pool.borrow();
    }
    var $receiver = new ByteChannelJS(head, false);
    close($receiver);
    return $receiver;
  }
  function Coroutine$joinTo($receiver_0, dst_0, closeOnEnd_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$dst = dst_0;
    this.local$closeOnEnd = closeOnEnd_0;
  }
  Coroutine$joinTo.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$joinTo.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$joinTo.prototype.constructor = Coroutine$joinTo;
  Coroutine$joinTo.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var tmp$, tmp$_0;
        this.state_0 = 2;
        this.result_0 = joinToImpl(Kotlin.isType(tmp$ = this.local$$receiver, ByteChannelSequentialBase) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = this.local$dst, ByteChannelSequentialBase) ? tmp$_0 : throwCCE(), this.local$closeOnEnd, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        return;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function joinTo_0($receiver_0, dst_0, closeOnEnd_0, continuation_0, suspended) {
    var instance = new Coroutine$joinTo($receiver_0, dst_0, closeOnEnd_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function copyTo_1($receiver, dst, limit, continuation) {
    if (limit === void 0) 
      limit = Long$Companion$MAX_VALUE;
    var tmp$, tmp$_0;
    return copyToSequentialImpl(Kotlin.isType(tmp$ = $receiver, ByteChannelSequentialBase) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = dst, ByteChannelSequentialBase) ? tmp$_0 : throwCCE(), limit, continuation);
  }
  function ByteChannelJS(initial, autoFlush) {
    ByteChannelSequentialBase.call(this, initial, autoFlush);
    this.attachedJob_0 = null;
  }
  function ByteChannelJS$attachJob$lambda(this$ByteChannelJS) {
    return function(cause) {
  this$ByteChannelJS.attachedJob_0 = null;
  if (cause != null) {
    this$ByteChannelJS.cancel_dbl4no$(CancellationException_init('Channel closed due to job failure: ' + toString(cause)));
  }
  return Unit;
};
  }
  ByteChannelJS.prototype.attachJob_dqr1mp$ = function(job) {
  var tmp$;
    (tmp$ = this.attachedJob_0) != null ? (tmp$.cancel_m4sck1$() , Unit) : null;
  this.attachedJob_0 = job;
  job.invokeOnCompletion_ct2b2z$(true, void 0, ByteChannelJS$attachJob$lambda(this));
};
  function Coroutine$readAvailable_qmgm5g$($this, dst_0, offset_0, length_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$_0 = void 0;
    this.local$dst = dst_0;
    this.local$offset = offset_0;
    this.local$length = length_0;
  }
  Coroutine$readAvailable_qmgm5g$.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readAvailable_qmgm5g$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readAvailable_qmgm5g$.prototype.constructor = Coroutine$readAvailable_qmgm5g$;
  Coroutine$readAvailable_qmgm5g$.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var tmp$;
        if (this.$this.readable.endOfInput) {
          this.state_0 = 2;
          this.result_0 = this.$this.readAvailableSuspend_0(this.local$dst, this.local$offset, this.local$length, this);
          if (this.result_0 === COROUTINE_SUSPENDED) 
            return COROUTINE_SUSPENDED;
          continue;
        } else {
          if ((tmp$ = this.$this.closedCause) != null) {
            throw tmp$;
          }
          this.local$tmp$_0 = readAvailable_26(this.$this.readable, this.local$dst, this.local$offset, this.local$length);
          this.state_0 = 3;
          continue;
        }
      case 1:
        throw this.exception_0;
      case 2:
        this.local$tmp$_0 = this.result_0;
        this.state_0 = 3;
        continue;
      case 3:
        return this.local$tmp$_0;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelJS.prototype.readAvailable_qmgm5g$ = function(dst_0, offset_0, length_0, continuation_0, suspended) {
  var instance = new Coroutine$readAvailable_qmgm5g$(this, dst_0, offset_0, length_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Coroutine$readAvailableSuspend_0($this, dst_0, offset_0, length_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$dst = dst_0;
    this.local$offset = offset_0;
    this.local$length = length_0;
  }
  Coroutine$readAvailableSuspend_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readAvailableSuspend_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readAvailableSuspend_0.prototype.constructor = Coroutine$readAvailableSuspend_0;
  Coroutine$readAvailableSuspend_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = this.$this.await_za3lpa$(1, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        if (!this.result_0) {
          return -1;
        } else {
          this.state_0 = 3;
          continue;
        }
      case 3:
        this.state_0 = 4;
        this.result_0 = this.$this.readAvailable_qmgm5g$(this.local$dst, this.local$offset, this.local$length, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 4:
        return this.result_0;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelJS.prototype.readAvailableSuspend_0 = function(dst_0, offset_0, length_0, continuation_0, suspended) {
  var instance = new Coroutine$readAvailableSuspend_0(this, dst_0, offset_0, length_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  ByteChannelJS.prototype.readFully_qmgm5g$ = function(dst, offset, length, continuation) {
  var tmp$;
  if (this.availableForRead >= length) {
    if ((tmp$ = this.closedCause) != null) {
      throw tmp$;
    }
    readFully_32(this.readable, dst, offset, length);
    return;
  }
  return this.readFullySuspend_0(dst, offset, length, continuation);
};
  function Coroutine$readFullySuspend_0($this, dst_0, offset_0, length_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$start = void 0;
    this.local$end = void 0;
    this.local$remaining = void 0;
    this.local$dst = dst_0;
    this.local$offset = offset_0;
    this.local$length = length_0;
  }
  Coroutine$readFullySuspend_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$readFullySuspend_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readFullySuspend_0.prototype.constructor = Coroutine$readFullySuspend_0;
  Coroutine$readFullySuspend_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.local$start = this.local$offset;
        this.local$end = this.local$offset + this.local$length | 0;
        this.local$remaining = this.local$length;
        this.state_0 = 2;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        if (this.local$start >= this.local$end) {
          this.state_0 = 4;
          continue;
        }
        this.state_0 = 3;
        this.result_0 = this.$this.readAvailable_qmgm5g$(this.local$dst, this.local$start, this.local$remaining, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 3:
        var rc = this.result_0;
        if (rc === -1) 
          throw new EOFException('Premature end of stream: required ' + this.local$remaining + ' more bytes');
        this.local$start = this.local$start + rc | 0;
        this.local$remaining = this.local$remaining - rc | 0;
        this.state_0 = 2;
        continue;
      case 4:
        return;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  ByteChannelJS.prototype.readFullySuspend_0 = function(dst_0, offset_0, length_0, continuation_0, suspended) {
  var instance = new Coroutine$readFullySuspend_0(this, dst_0, offset_0, length_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  ByteChannelJS.prototype.toString = function() {
  return 'ByteChannel[' + toString(this.attachedJob_0) + ', ' + hashCode(this) + ']';
};
  ByteChannelJS.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'ByteChannelJS', 
  interfaces: [ByteChannelSequentialBase]};
  function ByteReadChannel_2() {
    ByteReadChannel$Companion_getInstance();
  }
  ByteReadChannel_2.prototype.peekTo_afjyek$ = function(destination, destinationOffset, offset, min, max, continuation, callback$default) {
  if (offset === void 0) 
    offset = L0;
  if (min === void 0) 
    min = L1;
  if (max === void 0) 
    max = Long$Companion$MAX_VALUE;
  return callback$default ? callback$default(destination, destinationOffset, offset, min, max, continuation) : this.peekTo_afjyek$$default(destination, destinationOffset, offset, min, max, continuation);
};
  function ByteReadChannel$Companion() {
    ByteReadChannel$Companion_instance = this;
    this.Empty_wsx8uv$_0 = lazy(ByteReadChannel$Companion$Empty$lambda);
  }
  Object.defineProperty(ByteReadChannel$Companion.prototype, 'Empty', {
  get: function() {
  return this.Empty_wsx8uv$_0.value;
}});
  function ByteReadChannel$Companion$Empty$lambda() {
    var $receiver = new ByteChannelJS(IoBuffer$Companion_getInstance().Empty, false);
    $receiver.close_dbl4no$(null);
    return $receiver;
  }
  ByteReadChannel$Companion.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'Companion', 
  interfaces: []};
  var ByteReadChannel$Companion_instance = null;
  function ByteReadChannel$Companion_getInstance() {
    if (ByteReadChannel$Companion_instance === null) {
      new ByteReadChannel$Companion();
    }
    return ByteReadChannel$Companion_instance;
  }
  ByteReadChannel_2.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'ByteReadChannel', 
  interfaces: []};
  function ByteWriteChannel() {
  }
  ByteWriteChannel.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'ByteWriteChannel', 
  interfaces: []};
  function suspendCoroutine$lambda(closure$block) {
    return function(c) {
  var safe = SafeContinuation_init(intercepted(c));
  closure$block(safe);
  return safe.getOrThrow();
};
  }
  function Condition(predicate) {
    this.predicate = predicate;
    this.cont_0 = null;
  }
  Condition.prototype.check = function() {
  return this.predicate();
};
  Condition.prototype.signal = function() {
  var cont = this.cont_0;
  if (cont != null && this.predicate()) {
    this.cont_0 = null;
    cont.resumeWith_tl1gpc$(new Result(Unit));
  }
};
  function Condition$await$lambda(this$Condition, closure$block) {
    return function(c) {
  this$Condition.cont_0 = c;
  closure$block();
  return Unit;
};
  }
  function Coroutine$await_o14v8n$($this, block_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$block = block_0;
  }
  Coroutine$await_o14v8n$.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$await_o14v8n$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$await_o14v8n$.prototype.constructor = Coroutine$await_o14v8n$;
  Coroutine$await_o14v8n$.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        if (this.$this.predicate()) {
          return;
        } else {
          this.state_0 = 2;
          continue;
        }
      case 1:
        throw this.exception_0;
      case 2:
        this.state_0 = 3;
        this.result_0 = suspendCoroutine$lambda(Condition$await$lambda(this.$this, this.local$block))(this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 3:
        this.result_0;
        return this.result_0;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  Condition.prototype.await_o14v8n$ = function(block_0, continuation_0, suspended) {
  var instance = new Coroutine$await_o14v8n$(this, block_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  function Condition$await$lambda_0(this$Condition) {
    return function(c) {
  this$Condition.cont_0 = c;
  return Unit;
};
  }
  function Coroutine$await($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$await.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$await.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$await.prototype.constructor = Coroutine$await;
  Coroutine$await.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        if (this.$this.predicate()) {
          return;
        } else {
          this.state_0 = 2;
          continue;
        }
      case 1:
        throw this.exception_0;
      case 2:
        this.state_0 = 3;
        this.result_0 = suspendCoroutine$lambda(Condition$await$lambda_0(this.$this))(this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 3:
        this.result_0;
        return this.result_0;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  Condition.prototype.await = function(continuation_0, suspended) {
  var instance = new Coroutine$await(this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  Condition.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'Condition', 
  interfaces: []};
  function reverseByteOrder_2($receiver) {
    return toShort(($receiver & 255) << 8 | ($receiver & 65535) >>> 8);
  }
  function reverseByteOrder_3($receiver) {
    var s = toShort($receiver & 65535);
    var tmp$ = toShort((s & 255) << 8 | (s & 65535) >>> 8) << 16;
    var s_0 = toShort($receiver >>> 16);
    return tmp$ | toShort((s_0 & 255) << 8 | (s_0 & 65535) >>> 8) & 65535;
  }
  function reverseByteOrder_4($receiver) {
    var s = $receiver.and(L4294967295).toInt();
    var s_0 = toShort(s & 65535);
    var tmp$ = toShort((s_0 & 255) << 8 | (s_0 & 65535) >>> 8) << 16;
    var s_1 = toShort(s >>> 16);
    var tmp$_0 = Kotlin.Long.fromInt(tmp$ | toShort((s_1 & 255) << 8 | (s_1 & 65535) >>> 8) & 65535).shiftLeft(32);
    var s_2 = $receiver.shiftRightUnsigned(32).toInt();
    var s_3 = toShort(s_2 & 65535);
    var tmp$_1 = toShort((s_3 & 255) << 8 | (s_3 & 65535) >>> 8) << 16;
    var s_4 = toShort(s_2 >>> 16);
    return tmp$_0.or(Kotlin.Long.fromInt(tmp$_1 | toShort((s_4 & 255) << 8 | (s_4 & 65535) >>> 8) & 65535).and(L4294967295));
  }
  function reverseByteOrder_5($receiver) {
    var s = toRawBits($receiver);
    var s_0 = toShort(s & 65535);
    var tmp$ = toShort((s_0 & 255) << 8 | (s_0 & 65535) >>> 8) << 16;
    var s_1 = toShort(s >>> 16);
    var bits = tmp$ | toShort((s_1 & 255) << 8 | (s_1 & 65535) >>> 8) & 65535;
    return Kotlin.floatFromBits(bits);
  }
  function reverseByteOrder_6($receiver) {
    var s = toRawBits_0($receiver);
    var s_0 = s.and(L4294967295).toInt();
    var s_1 = toShort(s_0 & 65535);
    var tmp$ = toShort((s_1 & 255) << 8 | (s_1 & 65535) >>> 8) << 16;
    var s_2 = toShort(s_0 >>> 16);
    var tmp$_0 = Kotlin.Long.fromInt(tmp$ | toShort((s_2 & 255) << 8 | (s_2 & 65535) >>> 8) & 65535).shiftLeft(32);
    var s_3 = s.shiftRightUnsigned(32).toInt();
    var s_4 = toShort(s_3 & 65535);
    var tmp$_1 = toShort((s_4 & 255) << 8 | (s_4 & 65535) >>> 8) << 16;
    var s_5 = toShort(s_3 >>> 16);
    var bits = tmp$_0.or(Kotlin.Long.fromInt(tmp$_1 | toShort((s_5 & 255) << 8 | (s_5 & 65535) >>> 8) & 65535).and(L4294967295));
    return Kotlin.doubleFromBits(bits);
  }
  function swap(s) {
    return toShort((s & 255) << 8 | (s & 65535) >>> 8);
  }
  function swap_0(s) {
    var s_0 = toShort(s & 65535);
    var tmp$ = toShort((s_0 & 255) << 8 | (s_0 & 65535) >>> 8) << 16;
    var s_1 = toShort(s >>> 16);
    return tmp$ | toShort((s_1 & 255) << 8 | (s_1 & 65535) >>> 8) & 65535;
  }
  function swap_1(s) {
    var s_0 = s.and(L4294967295).toInt();
    var s_1 = toShort(s_0 & 65535);
    var tmp$ = toShort((s_1 & 255) << 8 | (s_1 & 65535) >>> 8) << 16;
    var s_2 = toShort(s_0 >>> 16);
    var tmp$_0 = Kotlin.Long.fromInt(tmp$ | toShort((s_2 & 255) << 8 | (s_2 & 65535) >>> 8) & 65535).shiftLeft(32);
    var s_3 = s.shiftRightUnsigned(32).toInt();
    var s_4 = toShort(s_3 & 65535);
    var tmp$_1 = toShort((s_4 & 255) << 8 | (s_4 & 65535) >>> 8) << 16;
    var s_5 = toShort(s_3 >>> 16);
    return tmp$_0.or(Kotlin.Long.fromInt(tmp$_1 | toShort((s_5 & 255) << 8 | (s_5 & 65535) >>> 8) & 65535).and(L4294967295));
  }
  function swap_2(s) {
    var s_0 = toRawBits(s);
    var s_1 = toShort(s_0 & 65535);
    var tmp$ = toShort((s_1 & 255) << 8 | (s_1 & 65535) >>> 8) << 16;
    var s_2 = toShort(s_0 >>> 16);
    var bits = tmp$ | toShort((s_2 & 255) << 8 | (s_2 & 65535) >>> 8) & 65535;
    return Kotlin.floatFromBits(bits);
  }
  function swap_3(s) {
    var s_0 = toRawBits_0(s);
    var s_1 = s_0.and(L4294967295).toInt();
    var s_2 = toShort(s_1 & 65535);
    var tmp$ = toShort((s_2 & 255) << 8 | (s_2 & 65535) >>> 8) << 16;
    var s_3 = toShort(s_1 >>> 16);
    var tmp$_0 = Kotlin.Long.fromInt(tmp$ | toShort((s_3 & 255) << 8 | (s_3 & 65535) >>> 8) & 65535).shiftLeft(32);
    var s_4 = s_0.shiftRightUnsigned(32).toInt();
    var s_5 = toShort(s_4 & 65535);
    var tmp$_1 = toShort((s_5 & 255) << 8 | (s_5 & 65535) >>> 8) << 16;
    var s_6 = toShort(s_4 >>> 16);
    var bits = tmp$_0.or(Kotlin.Long.fromInt(tmp$_1 | toShort((s_6 & 255) << 8 | (s_6 & 65535) >>> 8) & 65535).and(L4294967295));
    return Kotlin.doubleFromBits(bits);
  }
  var useMemory = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.useMemory_jjtqwx$', wrapFunction(function() {
  var Memory = _.io.ktor.utils.io.bits.Memory;
  var of = _.io.ktor.utils.io.bits.of_2z595v$;
  return function($receiver, offset, length, block) {
  if (offset === void 0) 
    offset = 0;
  return block(of(Memory.Companion, $receiver, offset, length));
};
}));
  function of($receiver, array, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = array.length - offset | 0;
    var typedArray = array;
    return of_2(Memory$Companion_getInstance(), typedArray, offset, length);
  }
  function of_0($receiver, buffer, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = buffer.byteLength - offset | 0;
    return new Memory(new DataView(buffer, offset, length));
  }
  function of_1($receiver, view) {
    return new Memory(view);
  }
  function of_2($receiver, view, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = view.byteLength;
    return of_0(Memory$Companion_getInstance(), view.buffer, view.byteOffset + offset | 0, length);
  }
  function DefaultAllocator() {
    DefaultAllocator_instance = this;
  }
  DefaultAllocator.prototype.alloc_za3lpa$ = function(size) {
  return new Memory(new DataView(new ArrayBuffer(size)));
};
  DefaultAllocator.prototype.alloc_s8cxhz$ = function(size) {
  if (size.toNumber() >= 2147483647) 
    failLongToIntConversion(size, 'size');
  return new Memory(new DataView(new ArrayBuffer(size.toInt())));
};
  DefaultAllocator.prototype.free_vn6nzs$ = function(instance) {
};
  DefaultAllocator.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'DefaultAllocator', 
  interfaces: [Allocator]};
  var DefaultAllocator_instance = null;
  function DefaultAllocator_getInstance() {
    if (DefaultAllocator_instance === null) {
      new DefaultAllocator();
    }
    return DefaultAllocator_instance;
  }
  function Memory(view) {
    Memory$Companion_getInstance();
    this.view = view;
  }
  Object.defineProperty(Memory.prototype, 'size', {
  get: defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.Memory.get_size', function() {
  return Kotlin.Long.fromInt(this.view.byteLength);
})});
  Object.defineProperty(Memory.prototype, 'size32', {
  get: defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.Memory.get_size32', function() {
  return this.view.byteLength;
})});
  Memory.prototype.loadAt_za3lpa$ = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.Memory.loadAt_za3lpa$', function(index) {
  return this.view.getInt8(index);
});
  Memory.prototype.loadAt_s8cxhz$ = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.Memory.loadAt_s8cxhz$', wrapFunction(function() {
  var failLongToIntConversion = _.io.ktor.utils.io.core.internal.failLongToIntConversion_a4hdmt$;
  return function(index) {
  var tmp$ = this.view;
  if (index.toNumber() >= 2147483647) 
    failLongToIntConversion(index, 'index');
  return tmp$.getInt8(index.toInt());
};
}));
  Memory.prototype.storeAt_6t1wet$ = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.Memory.storeAt_6t1wet$', function(index, value) {
  this.view.setInt8(index, value);
});
  Memory.prototype.storeAt_3pq026$ = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.Memory.storeAt_3pq026$', wrapFunction(function() {
  var failLongToIntConversion = _.io.ktor.utils.io.core.internal.failLongToIntConversion_a4hdmt$;
  return function(index, value) {
  var tmp$ = this.view;
  if (index.toNumber() >= 2147483647) 
    failLongToIntConversion(index, 'index');
  tmp$.setInt8(index.toInt(), value);
};
}));
  Memory.prototype.slice_vux9f0$ = function(offset, length) {
  if (!(offset >= 0)) {
    var message = "offset shouldn't be negative: " + offset;
    throw IllegalArgumentException_init(message.toString());
  }
  if (!(length >= 0)) {
    var message_0 = "length shouldn't be negative: " + length;
    throw IllegalArgumentException_init(message_0.toString());
  }
  if ((offset + length | 0) > Kotlin.Long.fromInt(this.view.byteLength).toNumber()) {
    throw new IndexOutOfBoundsException('offset + length > size: ' + offset + ' + ' + length + ' > ' + Kotlin.Long.fromInt(this.view.byteLength).toString());
  }
  return new Memory(new DataView(this.view.buffer, this.view.byteOffset + offset | 0, length));
};
  Memory.prototype.slice_3pjtqy$ = function(offset, length) {
  if (offset.toNumber() >= 2147483647) 
    failLongToIntConversion(offset, 'offset');
  var tmp$ = offset.toInt();
  if (length.toNumber() >= 2147483647) 
    failLongToIntConversion(length, 'length');
  return this.slice_vux9f0$(tmp$, length.toInt());
};
  Memory.prototype.copyTo_ubllm2$ = function(destination, offset, length, destinationOffset) {
  var src = new Int8Array(this.view.buffer, this.view.byteOffset + offset | 0, length);
  var dst = new Int8Array(destination.view.buffer, destination.view.byteOffset + destinationOffset | 0, length);
  dst.set(src);
};
  Memory.prototype.copyTo_q2ka7j$ = function(destination, offset, length, destinationOffset) {
  if (offset.toNumber() >= 2147483647) 
    failLongToIntConversion(offset, 'offset');
  var tmp$ = offset.toInt();
  if (length.toNumber() >= 2147483647) 
    failLongToIntConversion(length, 'length');
  var tmp$_0 = length.toInt();
  var name = 'destinationOffset';
  if (destinationOffset.toNumber() >= 2147483647) 
    failLongToIntConversion(destinationOffset, name);
  this.copyTo_ubllm2$(destination, tmp$, tmp$_0, destinationOffset.toInt());
};
  function Memory$Companion() {
    Memory$Companion_instance = this;
    this.Empty = new Memory(new DataView(new ArrayBuffer(0)));
  }
  Memory$Companion.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'Companion', 
  interfaces: []};
  var Memory$Companion_instance = null;
  function Memory$Companion_getInstance() {
    if (Memory$Companion_instance === null) {
      new Memory$Companion();
    }
    return Memory$Companion_instance;
  }
  Memory.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'Memory', 
  interfaces: []};
  function copyTo_2($receiver, destination, offset, length, destinationOffset) {
    if (destinationOffset === void 0) 
      destinationOffset = 0;
    var to = destination;
    var from = new Int8Array($receiver.view.buffer, $receiver.view.byteOffset + offset | 0, length);
    to.set(from, destinationOffset);
  }
  function copyTo_3($receiver, destination, offset, length, destinationOffset) {
    if (destinationOffset === void 0) 
      destinationOffset = 0;
    if (offset.toNumber() >= 2147483647) 
      failLongToIntConversion(offset, 'offset');
    copyTo_2($receiver, destination, offset.toInt(), length, destinationOffset);
  }
  function fill_3($receiver, offset, count, value) {
    var tmp$;
    tmp$ = offset + count | 0;
    for (var index = offset; index < tmp$; index++) {
      $receiver.view.setInt8(index, value);
    }
  }
  function fill_4($receiver, offset, count, value) {
    if (offset.toNumber() >= 2147483647) 
      failLongToIntConversion(offset, 'offset');
    var tmp$ = offset.toInt();
    if (count.toNumber() >= 2147483647) 
      failLongToIntConversion(count, 'count');
    fill_3($receiver, tmp$, count.toInt(), value);
  }
  function copyTo_4($receiver, destination, offset, length, destinationOffset) {
    var to = new Int8Array(destination, destinationOffset, length);
    var from = new Int8Array($receiver.view.buffer, $receiver.view.byteOffset + offset | 0, length);
    to.set(from, 0);
  }
  function copyTo_5($receiver, destination, offset, length, destinationOffset) {
    var to = new Int8Array(destination.buffer, destinationOffset + destination.byteOffset | 0, length);
    var from = new Int8Array($receiver.view.buffer, $receiver.view.byteOffset + offset | 0, length);
    to.set(from, 0);
  }
  function copyTo_6($receiver, destination, offset, length, destinationOffset) {
    var from = new Int8Array($receiver, offset, length);
    var to = new Int8Array(destination.view.buffer, destination.view.byteOffset + destinationOffset | 0, length);
    to.set(from, 0);
  }
  function copyTo_7($receiver, destination, offset, length, destinationOffset) {
    copyTo_6($receiver.buffer, destination, offset + $receiver.byteOffset | 0, length, destinationOffset);
  }
  function get_Int8ArrayView($receiver) {
    return new Int8Array($receiver.view.buffer, $receiver.view.byteOffset, $receiver.view.byteLength);
  }
  var loadShortAt = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.loadShortAt_ad7opl$', function($receiver, offset) {
  return $receiver.view.getInt16(offset, false);
});
  var loadShortAt_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.loadShortAt_xrw27i$', wrapFunction(function() {
  var failLongToIntConversion = _.io.ktor.utils.io.core.internal.failLongToIntConversion_a4hdmt$;
  return function($receiver, offset) {
  if (offset.toNumber() >= 2147483647) 
    failLongToIntConversion(offset, 'offset');
  return $receiver.view.getInt16(offset.toInt(), false);
};
}));
  var loadIntAt = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.loadIntAt_ad7opl$', function($receiver, offset) {
  return $receiver.view.getInt32(offset, false);
});
  var loadIntAt_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.loadIntAt_xrw27i$', wrapFunction(function() {
  var failLongToIntConversion = _.io.ktor.utils.io.core.internal.failLongToIntConversion_a4hdmt$;
  return function($receiver, offset) {
  if (offset.toNumber() >= 2147483647) 
    failLongToIntConversion(offset, 'offset');
  return $receiver.view.getInt32(offset.toInt(), false);
};
}));
  var loadLongAt = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.loadLongAt_ad7opl$', function($receiver, offset) {
  return Kotlin.Long.fromInt($receiver.view.getUint32(offset, false)).shiftLeft(32).or(Kotlin.Long.fromInt($receiver.view.getUint32(offset + 4 | 0, false)));
});
  var loadLongAt_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.loadLongAt_xrw27i$', wrapFunction(function() {
  var failLongToIntConversion = _.io.ktor.utils.io.core.internal.failLongToIntConversion_a4hdmt$;
  return function($receiver, offset) {
  if (offset.toNumber() >= 2147483647) 
    failLongToIntConversion(offset, 'offset');
  var offset_0 = offset.toInt();
  return Kotlin.Long.fromInt($receiver.view.getUint32(offset_0, false)).shiftLeft(32).or(Kotlin.Long.fromInt($receiver.view.getUint32(offset_0 + 4 | 0, false)));
};
}));
  var loadFloatAt = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.loadFloatAt_ad7opl$', function($receiver, offset) {
  return $receiver.view.getFloat32(offset, false);
});
  var loadFloatAt_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.loadFloatAt_xrw27i$', wrapFunction(function() {
  var failLongToIntConversion = _.io.ktor.utils.io.core.internal.failLongToIntConversion_a4hdmt$;
  return function($receiver, offset) {
  if (offset.toNumber() >= 2147483647) 
    failLongToIntConversion(offset, 'offset');
  return $receiver.view.getFloat32(offset.toInt(), false);
};
}));
  var loadDoubleAt = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.loadDoubleAt_ad7opl$', function($receiver, offset) {
  return $receiver.view.getFloat64(offset, false);
});
  var loadDoubleAt_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.loadDoubleAt_xrw27i$', wrapFunction(function() {
  var failLongToIntConversion = _.io.ktor.utils.io.core.internal.failLongToIntConversion_a4hdmt$;
  return function($receiver, offset) {
  if (offset.toNumber() >= 2147483647) 
    failLongToIntConversion(offset, 'offset');
  return $receiver.view.getFloat64(offset.toInt(), false);
};
}));
  var storeIntAt = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.storeIntAt_vj6iol$', function($receiver, offset, value) {
  $receiver.view.setInt32(offset, value, false);
});
  var storeIntAt_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.storeIntAt_qfgmm4$', wrapFunction(function() {
  var failLongToIntConversion = _.io.ktor.utils.io.core.internal.failLongToIntConversion_a4hdmt$;
  return function($receiver, offset, value) {
  var tmp$ = $receiver.view;
  if (offset.toNumber() >= 2147483647) 
    failLongToIntConversion(offset, 'offset');
  tmp$.setInt32(offset.toInt(), value, false);
};
}));
  var storeShortAt = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.storeShortAt_r0om3i$', function($receiver, offset, value) {
  $receiver.view.setInt16(offset, value, false);
});
  var storeShortAt_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.storeShortAt_u61vsn$', wrapFunction(function() {
  var failLongToIntConversion = _.io.ktor.utils.io.core.internal.failLongToIntConversion_a4hdmt$;
  return function($receiver, offset, value) {
  var tmp$ = $receiver.view;
  if (offset.toNumber() >= 2147483647) 
    failLongToIntConversion(offset, 'offset');
  tmp$.setInt16(offset.toInt(), value, false);
};
}));
  var storeLongAt = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.storeLongAt_gwwqui$', wrapFunction(function() {
  var L4294967295 = new Kotlin.Long(-1, 0);
  return function($receiver, offset, value) {
  $receiver.view.setInt32(offset, value.shiftRight(32).toInt(), false);
  $receiver.view.setInt32(offset + 4 | 0, value.and(L4294967295).toInt(), false);
};
}));
  var storeLongAt_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.storeLongAt_x1z90x$', wrapFunction(function() {
  var failLongToIntConversion = _.io.ktor.utils.io.core.internal.failLongToIntConversion_a4hdmt$;
  var L4294967295 = new Kotlin.Long(-1, 0);
  return function($receiver, offset, value) {
  if (offset.toNumber() >= 2147483647) 
    failLongToIntConversion(offset, 'offset');
  var offset_0 = offset.toInt();
  $receiver.view.setInt32(offset_0, value.shiftRight(32).toInt(), false);
  $receiver.view.setInt32(offset_0 + 4 | 0, value.and(L4294967295).toInt(), false);
};
}));
  var storeFloatAt = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.storeFloatAt_r7re9q$', function($receiver, offset, value) {
  $receiver.view.setFloat32(offset, value, false);
});
  var storeFloatAt_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.storeFloatAt_ud4nyv$', wrapFunction(function() {
  var failLongToIntConversion = _.io.ktor.utils.io.core.internal.failLongToIntConversion_a4hdmt$;
  return function($receiver, offset, value) {
  var tmp$ = $receiver.view;
  if (offset.toNumber() >= 2147483647) 
    failLongToIntConversion(offset, 'offset');
  tmp$.setFloat32(offset.toInt(), value, false);
};
}));
  var storeDoubleAt = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.storeDoubleAt_7sfcvf$', function($receiver, offset, value) {
  $receiver.view.setFloat64(offset, value, false);
});
  var storeDoubleAt_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.bits.storeDoubleAt_isvxss$', wrapFunction(function() {
  var failLongToIntConversion = _.io.ktor.utils.io.core.internal.failLongToIntConversion_a4hdmt$;
  return function($receiver, offset, value) {
  var tmp$ = $receiver.view;
  if (offset.toNumber() >= 2147483647) 
    failLongToIntConversion(offset, 'offset');
  tmp$.setFloat64(offset.toInt(), value, false);
};
}));
  var isLittleEndianPlatform;
  function loadShortArray($receiver, offset, destination, destinationOffset, count) {
    if (destinationOffset === void 0) 
      destinationOffset = 0;
    if (count === void 0) 
      count = destination.length - destinationOffset | 0;
    var typed = new Int16Array($receiver.view.buffer, $receiver.view.byteOffset + offset | 0, count);
    if (isLittleEndianPlatform) {
      for (var index = 0; index < count; index++) {
        destination[index + destinationOffset | 0] = reverseByteOrder_2(typed[index]);
      }
    } else {
      for (var index_0 = 0; index_0 < count; index_0++) {
        destination[index_0 + destinationOffset | 0] = typed[index_0];
      }
    }
  }
  function loadShortArray_0($receiver, offset, destination, destinationOffset, count) {
    if (destinationOffset === void 0) 
      destinationOffset = 0;
    if (count === void 0) 
      count = destination.length - destinationOffset | 0;
    if (offset.toNumber() >= 2147483647) 
      failLongToIntConversion(offset, 'offset');
    loadShortArray($receiver, offset.toInt(), destination, destinationOffset, count);
  }
  function loadIntArray($receiver, offset, destination, destinationOffset, count) {
    if (destinationOffset === void 0) 
      destinationOffset = 0;
    if (count === void 0) 
      count = destination.length - destinationOffset | 0;
    var typed = new Int32Array($receiver.view.buffer, $receiver.view.byteOffset + offset | 0, count);
    if (isLittleEndianPlatform) {
      for (var index = 0; index < count; index++) {
        destination[index + destinationOffset | 0] = reverseByteOrder_3(typed[index]);
      }
    } else {
      for (var index_0 = 0; index_0 < count; index_0++) {
        destination[index_0 + destinationOffset | 0] = typed[index_0];
      }
    }
  }
  function loadIntArray_0($receiver, offset, destination, destinationOffset, count) {
    if (destinationOffset === void 0) 
      destinationOffset = 0;
    if (count === void 0) 
      count = destination.length - destinationOffset | 0;
    if (offset.toNumber() >= 2147483647) 
      failLongToIntConversion(offset, 'offset');
    loadIntArray($receiver, offset.toInt(), destination, destinationOffset, count);
  }
  function loadLongArray($receiver, offset, destination, destinationOffset, count) {
    if (destinationOffset === void 0) 
      destinationOffset = 0;
    if (count === void 0) 
      count = destination.length - destinationOffset | 0;
    var tmp$, tmp$_0;
    var typed = new Int32Array($receiver.view.buffer, $receiver.view.byteOffset + offset | 0, count * 2 | 0);
    if (isLittleEndianPlatform) {
      tmp$ = count * 2 | 0;
      for (var index = 0; index < tmp$; index += 2) {
        destination[(index / 2 | 0) + destinationOffset | 0] = Kotlin.Long.fromInt(reverseByteOrder_3(typed[index + 1 | 0])).and(L4294967295).or(Kotlin.Long.fromInt(reverseByteOrder_3(typed[index])).shiftLeft(32));
      }
    } else {
      tmp$_0 = count * 2 | 0;
      for (var index_0 = 0; index_0 < tmp$_0; index_0 += 2) {
        destination[(index_0 / 2 | 0) + destinationOffset | 0] = Kotlin.Long.fromInt(typed[index_0]).and(L4294967295).or(Kotlin.Long.fromInt(typed[index_0 + 1 | 0]).shiftLeft(32));
      }
    }
  }
  function loadLongArray_0($receiver, offset, destination, destinationOffset, count) {
    if (destinationOffset === void 0) 
      destinationOffset = 0;
    if (count === void 0) 
      count = destination.length - destinationOffset | 0;
    if (offset.toNumber() >= 2147483647) 
      failLongToIntConversion(offset, 'offset');
    loadLongArray($receiver, offset.toInt(), destination, destinationOffset, count);
  }
  function loadFloatArray($receiver, offset, destination, destinationOffset, count) {
    if (destinationOffset === void 0) 
      destinationOffset = 0;
    if (count === void 0) 
      count = destination.length - destinationOffset | 0;
    var typed = new Float32Array($receiver.view.buffer, $receiver.view.byteOffset + offset | 0, count);
    if (isLittleEndianPlatform) {
      for (var index = 0; index < count; index++) {
        destination[index + destinationOffset | 0] = reverseByteOrder_5(typed[index]);
      }
    } else {
      for (var index_0 = 0; index_0 < count; index_0++) {
        destination[index_0 + destinationOffset | 0] = typed[index_0];
      }
    }
  }
  function loadFloatArray_0($receiver, offset, destination, destinationOffset, count) {
    if (destinationOffset === void 0) 
      destinationOffset = 0;
    if (count === void 0) 
      count = destination.length - destinationOffset | 0;
    if (offset.toNumber() >= 2147483647) 
      failLongToIntConversion(offset, 'offset');
    loadFloatArray($receiver, offset.toInt(), destination, destinationOffset, count);
  }
  function loadDoubleArray($receiver, offset, destination, destinationOffset, count) {
    if (destinationOffset === void 0) 
      destinationOffset = 0;
    if (count === void 0) 
      count = destination.length - destinationOffset | 0;
    var typed = new Float64Array($receiver.view.buffer, $receiver.view.byteOffset + offset | 0, count);
    if (isLittleEndianPlatform) {
      for (var index = 0; index < count; index++) {
        destination[index + destinationOffset | 0] = reverseByteOrder_6(typed[index]);
      }
    } else {
      for (var index_0 = 0; index_0 < count; index_0++) {
        destination[index_0 + destinationOffset | 0] = typed[index_0];
      }
    }
  }
  function loadDoubleArray_0($receiver, offset, destination, destinationOffset, count) {
    if (destinationOffset === void 0) 
      destinationOffset = 0;
    if (count === void 0) 
      count = destination.length - destinationOffset | 0;
    if (offset.toNumber() >= 2147483647) 
      failLongToIntConversion(offset, 'offset');
    loadDoubleArray($receiver, offset.toInt(), destination, destinationOffset, count);
  }
  function storeShortArray($receiver, offset, source, sourceOffset, count) {
    if (sourceOffset === void 0) 
      sourceOffset = 0;
    if (count === void 0) 
      count = source.length - sourceOffset | 0;
    var typed = new Int16Array($receiver.view.buffer, $receiver.view.byteOffset + offset | 0, count);
    if (isLittleEndianPlatform) {
      for (var index = 0; index < count; index++) {
        typed[index] = reverseByteOrder_2(source[index + sourceOffset | 0]);
      }
    } else {
      for (var index_0 = 0; index_0 < count; index_0++) {
        typed[index_0] = source[index_0 + sourceOffset | 0];
      }
    }
  }
  function storeShortArray_0($receiver, offset, source, sourceOffset, count) {
    if (sourceOffset === void 0) 
      sourceOffset = 0;
    if (count === void 0) 
      count = source.length - sourceOffset | 0;
    if (offset.toNumber() >= 2147483647) 
      failLongToIntConversion(offset, 'offset');
    storeShortArray($receiver, offset.toInt(), source, sourceOffset, count);
  }
  function storeIntArray($receiver, offset, source, sourceOffset, count) {
    if (sourceOffset === void 0) 
      sourceOffset = 0;
    if (count === void 0) 
      count = source.length - sourceOffset | 0;
    var typed = new Int32Array($receiver.view.buffer, $receiver.view.byteOffset + offset | 0, count);
    if (isLittleEndianPlatform) {
      for (var index = 0; index < count; index++) {
        typed[index] = reverseByteOrder_3(source[index + sourceOffset | 0]);
      }
    } else {
      for (var index_0 = 0; index_0 < count; index_0++) {
        typed[index_0] = source[index_0 + sourceOffset | 0];
      }
    }
  }
  function storeIntArray_0($receiver, offset, source, sourceOffset, count) {
    if (sourceOffset === void 0) 
      sourceOffset = 0;
    if (count === void 0) 
      count = source.length - sourceOffset | 0;
    if (offset.toNumber() >= 2147483647) 
      failLongToIntConversion(offset, 'offset');
    storeIntArray($receiver, offset.toInt(), source, sourceOffset, count);
  }
  function storeLongArray($receiver, offset, source, sourceOffset, count) {
    if (sourceOffset === void 0) 
      sourceOffset = 0;
    if (count === void 0) 
      count = source.length - sourceOffset | 0;
    var tmp$, tmp$_0;
    var typed = new Int32Array($receiver.view.buffer, $receiver.view.byteOffset + offset | 0, count * 2 | 0);
    if (isLittleEndianPlatform) {
      tmp$ = count * 2 | 0;
      for (var index = 0; index < tmp$; index += 2) {
        var sourceIndex = (index / 2 | 0) + sourceOffset | 0;
        var sourceValue = source[sourceIndex];
        typed[index] = reverseByteOrder_3(sourceValue.shiftRightUnsigned(32).toInt());
        typed[index + 1 | 0] = reverseByteOrder_3(sourceValue.and(L4294967295).toInt());
      }
    } else {
      tmp$_0 = count * 2 | 0;
      for (var index_0 = 0; index_0 < tmp$_0; index_0 += 2) {
        var sourceIndex_0 = (index_0 / 2 | 0) + sourceOffset | 0;
        var sourceValue_0 = source[sourceIndex_0];
        typed[index_0] = sourceValue_0.shiftRightUnsigned(32).toInt();
        typed[index_0 + 1 | 0] = sourceValue_0.and(L4294967295).toInt();
      }
    }
  }
  function storeLongArray_0($receiver, offset, source, sourceOffset, count) {
    if (sourceOffset === void 0) 
      sourceOffset = 0;
    if (count === void 0) 
      count = source.length - sourceOffset | 0;
    if (offset.toNumber() >= 2147483647) 
      failLongToIntConversion(offset, 'offset');
    storeLongArray($receiver, offset.toInt(), source, sourceOffset, count);
  }
  function storeFloatArray($receiver, offset, source, sourceOffset, count) {
    if (sourceOffset === void 0) 
      sourceOffset = 0;
    if (count === void 0) 
      count = source.length - sourceOffset | 0;
    var typed = new Float32Array($receiver.view.buffer, $receiver.view.byteOffset + offset | 0, count);
    if (isLittleEndianPlatform) {
      for (var index = 0; index < count; index++) {
        typed[index] = reverseByteOrder_5(source[index + sourceOffset | 0]);
      }
    } else {
      for (var index_0 = 0; index_0 < count; index_0++) {
        typed[index_0] = source[index_0 + sourceOffset | 0];
      }
    }
  }
  function storeFloatArray_0($receiver, offset, source, sourceOffset, count) {
    if (sourceOffset === void 0) 
      sourceOffset = 0;
    if (count === void 0) 
      count = source.length - sourceOffset | 0;
    if (offset.toNumber() >= 2147483647) 
      failLongToIntConversion(offset, 'offset');
    storeFloatArray($receiver, offset.toInt(), source, sourceOffset, count);
  }
  function storeDoubleArray($receiver, offset, source, sourceOffset, count) {
    if (sourceOffset === void 0) 
      sourceOffset = 0;
    if (count === void 0) 
      count = source.length - sourceOffset | 0;
    var typed = new Float64Array($receiver.view.buffer, $receiver.view.byteOffset + offset | 0, count);
    if (isLittleEndianPlatform) {
      for (var index = 0; index < count; index++) {
        typed[index] = reverseByteOrder_6(source[index + sourceOffset | 0]);
      }
    } else {
      for (var index_0 = 0; index_0 < count; index_0++) {
        typed[index_0] = source[index_0 + sourceOffset | 0];
      }
    }
  }
  function storeDoubleArray_0($receiver, offset, source, sourceOffset, count) {
    if (sourceOffset === void 0) 
      sourceOffset = 0;
    if (count === void 0) 
      count = source.length - sourceOffset | 0;
    if (offset.toNumber() >= 2147483647) 
      failLongToIntConversion(offset, 'offset');
    storeDoubleArray($receiver, offset.toInt(), source, sourceOffset, count);
  }
  function Charset(_name) {
    Charset$Companion_getInstance();
    this._name_8be2vx$ = _name;
  }
  function Charset$Companion() {
    Charset$Companion_instance = this;
  }
  Charset$Companion.prototype.forName_61zpoe$ = function(name) {
  if (equals(name, 'UTF-8') || equals(name, 'utf-8') || equals(name, 'UTF8') || equals(name, 'utf8')) 
    return Charsets_getInstance().UTF_8;
  var tmp$ = equals(name, 'ISO-8859-1') || equals(name, 'iso-8859-1');
  if (!tmp$) {
    var it = replace(name, 95, 45);
    var tmp$_0 = equals(it, 'iso-8859-1');
    if (!tmp$_0) {
      tmp$_0 = equals(it.toLowerCase(), 'iso-8859-1');
    }
    tmp$ = tmp$_0;
  }
  if (tmp$ || equals(name, 'latin1')) {
    return Charsets_getInstance().ISO_8859_1;
  }
  throw IllegalArgumentException_init('Charset ' + name + ' is not supported');
};
  Charset$Companion.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'Companion', 
  interfaces: []};
  var Charset$Companion_instance = null;
  function Charset$Companion_getInstance() {
    if (Charset$Companion_instance === null) {
      new Charset$Companion();
    }
    return Charset$Companion_instance;
  }
  Charset.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'Charset', 
  interfaces: []};
  function get_name($receiver) {
    return $receiver._name_8be2vx$;
  }
  function CharsetEncoder(_charset) {
    this._charset_8be2vx$ = _charset;
  }
  CharsetEncoder.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'CharsetEncoder', 
  interfaces: []};
  function CharsetEncoderImpl(charset) {
    CharsetEncoder.call(this, charset);
    this.charset_0 = charset;
  }
  CharsetEncoderImpl.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'CharsetEncoderImpl', 
  interfaces: [CharsetEncoder]};
  CharsetEncoderImpl.prototype.component1_0 = function() {
  return this.charset_0;
};
  CharsetEncoderImpl.prototype.copy_6ypavq$ = function(charset) {
  return new CharsetEncoderImpl(charset === void 0 ? this.charset_0 : charset);
};
  CharsetEncoderImpl.prototype.toString = function() {
  return 'CharsetEncoderImpl(charset=' + Kotlin.toString(this.charset_0) + ')';
};
  CharsetEncoderImpl.prototype.hashCode = function() {
  var result = 0;
  result = result * 31 + Kotlin.hashCode(this.charset_0) | 0;
  return result;
};
  CharsetEncoderImpl.prototype.equals = function(other) {
  return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.charset_0, other.charset_0))));
};
  function get_charset($receiver) {
    return $receiver._charset_8be2vx$;
  }
  function encodeToByteArray($receiver, input, fromIndex, toIndex) {
    if (fromIndex === void 0) 
      fromIndex = 0;
    if (toIndex === void 0) 
      toIndex = input.length;
    return encodeToByteArrayImpl1($receiver, input, fromIndex, toIndex);
  }
  function encodeImpl($receiver, input, fromIndex, toIndex, dst) {
    var tmp$;
    if (!(fromIndex <= toIndex)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    if (equals(get_charset($receiver), Charsets_getInstance().ISO_8859_1)) {
      return encodeISO88591(input, fromIndex, toIndex, dst);
    }
    if (!(get_charset($receiver) === Charsets_getInstance().UTF_8)) {
      var message_0 = 'Only UTF-8 encoding is supported in JS';
      throw IllegalArgumentException_init(message_0.toString());
    }
    var encoder = TextEncoderCtor();
    var start = fromIndex;
    var dstRemaining = dst.limit - dst.writePosition | 0;
    while (start < toIndex && dstRemaining > 0) {
      var a = toIndex - start | 0;
      var b = dstRemaining / 6 | 0;
      var numChars = coerceAtLeast(Math_0.min(a, b), 1);
      var dropLastChar = isHighSurrogate(input.charCodeAt(start + numChars - 1 | 0));
      if (dropLastChar && numChars === 1) 
        tmp$ = start + 2 | 0;
      else if (dropLastChar) 
        tmp$ = start + numChars - 1 | 0;
      else 
        tmp$ = start + numChars | 0;
      var endIndexExclusive = tmp$;
      var startIndex = start;
      var array1 = encoder.encode(Kotlin.subSequence(input, startIndex, endIndexExclusive).toString());
      if (array1.length > dstRemaining) 
        break;
      writeFully_28(dst, array1);
      start = endIndexExclusive;
      dstRemaining = dstRemaining - array1.length | 0;
    }
    return start - fromIndex | 0;
  }
  function encodeUTF8_1($receiver, input, dst) {
    if (!(get_charset($receiver) === Charsets_getInstance().UTF_8)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    writePacket_0(dst, input);
  }
  function encodeComplete($receiver, dst) {
    return true;
  }
  function CharsetDecoder(_charset) {
    this._charset_8be2vx$ = _charset;
  }
  CharsetDecoder.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'CharsetDecoder', 
  interfaces: []};
  function CharsetDecoderImpl(charset) {
    CharsetDecoder.call(this, charset);
    this.charset_0 = charset;
  }
  CharsetDecoderImpl.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'CharsetDecoderImpl', 
  interfaces: [CharsetDecoder]};
  CharsetDecoderImpl.prototype.component1_0 = function() {
  return this.charset_0;
};
  CharsetDecoderImpl.prototype.copy_6ypavq$ = function(charset) {
  return new CharsetDecoderImpl(charset === void 0 ? this.charset_0 : charset);
};
  CharsetDecoderImpl.prototype.toString = function() {
  return 'CharsetDecoderImpl(charset=' + Kotlin.toString(this.charset_0) + ')';
};
  CharsetDecoderImpl.prototype.hashCode = function() {
  var result = 0;
  result = result * 31 + Kotlin.hashCode(this.charset_0) | 0;
  return result;
};
  CharsetDecoderImpl.prototype.equals = function(other) {
  return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.charset_0, other.charset_0))));
};
  function get_charset_0($receiver) {
    return $receiver._charset_8be2vx$;
  }
  function decodeBuffer($receiver, input, out, lastBuffer, max) {
    if (max === void 0) 
      max = 2147483647;
    if (max === 0) 
      return 0;
    var decoder = TextDecoderFatal(get_name(get_charset_0($receiver)));
    var copied = {
  v: null};
    var memory = input.memory;
    var start = input.readPosition;
    var endExclusive = input.writePosition;
    var result = decodeBufferImpl(new Int8Array_init(memory.view.buffer, memory.view.byteOffset + start | 0, endExclusive - start | 0), decoder, max);
    out.append_gw00v9$(result.charactersDecoded);
    copied.v = result.bytesConsumed;
    var rc = result.bytesConsumed;
    input.discardExact_za3lpa$(rc);
    return copied.v;
  }
  function decode_0($receiver, input, dst, max) {
    var decoder = TextDecoderFatal(get_name(get_charset_0($receiver)), true);
    var charactersCopied = {
  v: 0};
    takeWhileSize$break:
      do {
        var tmp$, tmp$_0;
        var release = true;
        tmp$ = prepareReadFirstHead(input, 1);
        if (tmp$ == null) {
          break takeWhileSize$break;
        }
        var current = tmp$;
        var size = 1;
        try {
          loop_label:
            do {
              var $this = current;
              var before = $this.writePosition - $this.readPosition | 0;
              var after;
              if (before >= size) {
                try {
                  var buffer = current;
                  var block$result;
                  block$break:
                    do {
                      var tmp$_1;
                      var rem = max - charactersCopied.v | 0;
                      var bufferSize = buffer.writePosition - buffer.readPosition | 0;
                      if (rem < bufferSize) {
                        block$result = 0;
                        break block$break;
                      }
                      var memory = buffer.memory;
                      var start = buffer.readPosition;
                      var endExclusive = buffer.writePosition;
                      var view = new Int8Array_init(memory.view.buffer, memory.view.byteOffset + start | 0, endExclusive - start | 0);
                      var tmp$_2;
                      try {
                        var decodeStream$result;
                        var tmp$_3;
                        try {
                          var tmp$_4;
                          if (true) {
                            tmp$_4 = decoder.decode(view, STREAM_TRUE);
                          } else {
                            tmp$_4 = decoder.decode(view);
                          }
                          decodeStream$result = tmp$_4;
                        }                        catch (t) {
  if (Kotlin.isType(t, Throwable)) {
    throw new MalformedInputException('Failed to decode bytes: ' + ((tmp$_3 = t.message) != null ? tmp$_3 : 'no cause provided'));
  } else 
    throw t;
}
                      }                      catch (t_0) {
  if (Kotlin.isType(t_0, Throwable)) {
    throw new MalformedInputException('Failed to decode bytes: ' + ((tmp$_2 = t_0.message) != null ? tmp$_2 : 'no cause provided'));
  } else 
    throw t_0;
}
                      var decodedText = decodeStream$result;
                      dst.append_gw00v9$(decodedText);
                      charactersCopied.v = charactersCopied.v + decodedText.length | 0;
                      var rc = view.byteLength;
                      buffer.discardExact_za3lpa$(rc);
                      if (charactersCopied.v === max) {
                        try {
                          tmp$_1 = decoder.decode();
                        }                        catch (_) {
  tmp$_1 = '';
}
                        var tail = tmp$_1;
                        if (tail.length > 0) {
                          buffer.rewind_za3lpa$(bufferSize);
                        }
                        block$result = 0;
                      } else if (charactersCopied.v < max) {
                        block$result = 8;
                      } else {
                        block$result = 0;
                      }
                    } while (false);
                  size = block$result;
                } finally                 {
                  var $this_0 = current;
                  after = $this_0.writePosition - $this_0.readPosition | 0;
                }
              } else {
                after = before;
              }
              release = false;
              if (after === 0) 
                tmp$_0 = prepareReadNextHead(input, current);
              else {
                var tmp$_5 = after < size;
                if (!tmp$_5) {
                  var $this_1 = current;
                  tmp$_5 = ($this_1.capacity - $this_1.limit | 0) < 8;
                }
                if (tmp$_5) {
                  completeReadHead_0(input, current);
                  tmp$_0 = prepareReadFirstHead(input, size);
                } else 
                  tmp$_0 = current;
              }
              var next = tmp$_0;
              if (next == null) {
                break loop_label;
              }
              current = next;
              release = true;
            } while (size > 0);
        } finally         {
          if (release) {
            completeReadHead_0(input, current);
          }
        }
      } while (false);
    if (charactersCopied.v < max) {
      var size_0 = {
  v: 1};
      takeWhileSize$break:
        do {
          var tmp$_6, tmp$_7;
          var release_0 = true;
          tmp$_6 = prepareReadFirstHead(input, 1);
          if (tmp$_6 == null) {
            break takeWhileSize$break;
          }
          var current_0 = tmp$_6;
          var size_1 = 1;
          try {
            do {
              var $this_2 = current_0;
              var before_0 = $this_2.writePosition - $this_2.readPosition | 0;
              var after_0;
              if (before_0 >= size_1) {
                try {
                  var buffer_0 = current_0;
                  var memory_0 = buffer_0.memory;
                  var start_0 = buffer_0.readPosition;
                  var endExclusive_0 = buffer_0.writePosition;
                  var result = decodeBufferImpl(new Int8Array_init(memory_0.view.buffer, memory_0.view.byteOffset + start_0 | 0, endExclusive_0 - start_0 | 0), decoder, max - charactersCopied.v | 0);
                  dst.append_gw00v9$(result.charactersDecoded);
                  charactersCopied.v = charactersCopied.v + result.charactersDecoded.length | 0;
                  var rc_0 = result.bytesConsumed;
                  buffer_0.discardExact_za3lpa$(rc_0);
                  var rc_1 = rc_0;
                  if (rc_1 > 0) 
                    size_0.v = 1;
                  else if (size_0.v === 8) 
                    size_0.v = 0;
                  else {
                    size_0.v = size_0.v + 1 | 0;
                  }
                  size_1 = size_0.v;
                } finally                 {
                  var $this_3 = current_0;
                  after_0 = $this_3.writePosition - $this_3.readPosition | 0;
                }
              } else {
                after_0 = before_0;
              }
              release_0 = false;
              if (after_0 === 0) 
                tmp$_7 = prepareReadNextHead(input, current_0);
              else {
                var tmp$_8 = after_0 < size_1;
                if (!tmp$_8) {
                  var $this_4 = current_0;
                  tmp$_8 = ($this_4.capacity - $this_4.limit | 0) < 8;
                }
                if (tmp$_8) {
                  completeReadHead_0(input, current_0);
                  tmp$_7 = prepareReadFirstHead(input, size_1);
                } else 
                  tmp$_7 = current_0;
              }
              var next_0 = tmp$_7;
              if (next_0 == null) {
                break;
              }
              current_0 = next_0;
              release_0 = true;
            } while (size_1 > 0);
          } finally           {
            if (release_0) {
              completeReadHead_0(input, current_0);
            }
          }
        } while (false);
    }
    return charactersCopied.v;
  }
  function decodeExactBytes($receiver, input, inputLength) {
    if (inputLength === 0) 
      return '';
    var tmp$ = Kotlin.isType(input, AbstractInput);
    if (tmp$) {
      tmp$ = (input.headEndExclusive - input.headPosition | 0) >= inputLength;
    }
    if (tmp$) {
      var decoder = TextDecoderFatal(get_charset_0($receiver)._name_8be2vx$, true);
      var head = input.head;
      var view = input.headMemory.view;
      var decodeWrap$result;
      var tmp$_0;
      try {
        var tmp$_1;
        if (head.readPosition === 0 && inputLength === view.byteLength) 
          tmp$_1 = view;
        else 
          tmp$_1 = new DataView(view.buffer, view.byteOffset + head.readPosition | 0, inputLength);
        var subView = tmp$_1;
        decodeWrap$result = decoder.decode(subView);
      }      catch (t) {
  if (Kotlin.isType(t, Throwable)) {
    throw new MalformedInputException('Failed to decode bytes: ' + ((tmp$_0 = t.message) != null ? tmp$_0 : 'no cause provided'));
  } else 
    throw t;
}
      var text = decodeWrap$result;
      input.discardExact_za3lpa$(inputLength);
      return text;
    }
    return decodeExactBytesSlow($receiver, input, inputLength);
  }
  function Charsets() {
    Charsets_instance = this;
    this.UTF_8 = new CharsetImpl('UTF-8');
    this.ISO_8859_1 = new CharsetImpl('ISO-8859-1');
  }
  Charsets.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'Charsets', 
  interfaces: []};
  var Charsets_instance = null;
  function Charsets_getInstance() {
    if (Charsets_instance === null) {
      new Charsets();
    }
    return Charsets_instance;
  }
  function CharsetImpl(name) {
    Charset.call(this, name);
    this.name = name;
  }
  CharsetImpl.prototype.newEncoder = function() {
  return new CharsetEncoderImpl(this);
};
  CharsetImpl.prototype.newDecoder = function() {
  return new CharsetDecoderImpl(this);
};
  CharsetImpl.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'CharsetImpl', 
  interfaces: [Charset]};
  CharsetImpl.prototype.component1 = function() {
  return this.name;
};
  CharsetImpl.prototype.copy_61zpoe$ = function(name) {
  return new CharsetImpl(name === void 0 ? this.name : name);
};
  CharsetImpl.prototype.toString = function() {
  return 'CharsetImpl(name=' + Kotlin.toString(this.name) + ')';
};
  CharsetImpl.prototype.hashCode = function() {
  var result = 0;
  result = result * 31 + Kotlin.hashCode(this.name) | 0;
  return result;
};
  CharsetImpl.prototype.equals = function(other) {
  return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
};
  function MalformedInputException(message) {
    Throwable.call(this);
    this.message_dl21pz$_0 = message;
    this.cause_5de4tn$_0 = null;
    Kotlin.captureStack(Throwable, this);
    this.name = 'MalformedInputException';
  }
  Object.defineProperty(MalformedInputException.prototype, 'message', {
  get: function() {
  return this.message_dl21pz$_0;
}});
  Object.defineProperty(MalformedInputException.prototype, 'cause', {
  get: function() {
  return this.cause_5de4tn$_0;
}});
  MalformedInputException.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'MalformedInputException', 
  interfaces: [Throwable]};
  function decodeExactBytesSlow($receiver, input, inputLength) {
    var decoder = TextDecoderFatal(get_name(get_charset_0($receiver)), true);
    var inputRemaining = {
  v: inputLength};
    var sb = StringBuilder_init_0(inputLength);
    var tmp$;
    try {
      takeWhileSize$break:
        do {
          var tmp$_0, tmp$_1;
          var release = true;
          tmp$_0 = prepareReadFirstHead(input, 6);
          if (tmp$_0 == null) {
            break takeWhileSize$break;
          }
          var current = tmp$_0;
          var size = 6;
          try {
            do {
              var $this = current;
              var before = $this.writePosition - $this.readPosition | 0;
              var after;
              if (before >= size) {
                try {
                  var buffer = current;
                  var tmp$_2;
                  var chunkSize = buffer.writePosition - buffer.readPosition | 0;
                  var b = inputRemaining.v;
                  var size_0 = Math_0.min(chunkSize, b);
                  if (buffer.readPosition === 0 && buffer.memory.view.byteLength === size_0) {
                    var buffer_0 = buffer.memory.view;
                    var decodeStream$result;
                    var tmp$_3;
                    try {
                      var tmp$_4;
                      if (true) {
                        tmp$_4 = decoder.decode(buffer_0, STREAM_TRUE);
                      } else {
                        tmp$_4 = decoder.decode(buffer_0);
                      }
                      decodeStream$result = tmp$_4;
                    }                    catch (t) {
  if (Kotlin.isType(t, Throwable)) {
    throw new MalformedInputException('Failed to decode bytes: ' + ((tmp$_3 = t.message) != null ? tmp$_3 : 'no cause provided'));
  } else 
    throw t;
}
                    tmp$_2 = decodeStream$result;
                  } else {
                    var buffer_1 = new Int8Array(buffer.memory.view.buffer, buffer.memory.view.byteOffset + buffer.readPosition | 0, size_0);
                    var decodeStream$result_0;
                    var tmp$_5;
                    try {
                      var tmp$_6;
                      if (true) {
                        tmp$_6 = decoder.decode(buffer_1, STREAM_TRUE);
                      } else {
                        tmp$_6 = decoder.decode(buffer_1);
                      }
                      decodeStream$result_0 = tmp$_6;
                    }                    catch (t_0) {
  if (Kotlin.isType(t_0, Throwable)) {
    throw new MalformedInputException('Failed to decode bytes: ' + ((tmp$_5 = t_0.message) != null ? tmp$_5 : 'no cause provided'));
  } else 
    throw t_0;
}
                    tmp$_2 = decodeStream$result_0;
                  }
                  var text = tmp$_2;
                  sb.append_gw00v9$(text);
                  buffer.discardExact_za3lpa$(size_0);
                  inputRemaining.v = inputRemaining.v - size_0 | 0;
                  size = inputRemaining.v > 0 ? 6 : 0;
                } finally                 {
                  var $this_0 = current;
                  after = $this_0.writePosition - $this_0.readPosition | 0;
                }
              } else {
                after = before;
              }
              release = false;
              if (after === 0) 
                tmp$_1 = prepareReadNextHead(input, current);
              else {
                var tmp$_7 = after < size;
                if (!tmp$_7) {
                  var $this_1 = current;
                  tmp$_7 = ($this_1.capacity - $this_1.limit | 0) < 8;
                }
                if (tmp$_7) {
                  completeReadHead_0(input, current);
                  tmp$_1 = prepareReadFirstHead(input, size);
                } else 
                  tmp$_1 = current;
              }
              var next = tmp$_1;
              if (next == null) {
                break;
              }
              current = next;
              release = true;
            } while (size > 0);
          } finally           {
            if (release) {
              completeReadHead_0(input, current);
            }
          }
        } while (false);
      if (inputRemaining.v > 0) {
        takeWhile$break:
          do {
            var tmp$_8, tmp$_9;
            var release_0 = true;
            tmp$_8 = prepareReadFirstHead(input, 1);
            if (tmp$_8 == null) {
              break takeWhile$break;
            }
            var current_0 = tmp$_8;
            try {
              do {
                var buffer_2 = current_0;
                var tmp$_10;
                var chunkSize_0 = buffer_2.writePosition - buffer_2.readPosition | 0;
                var b_0 = inputRemaining.v;
                var size_1 = Math_0.min(chunkSize_0, b_0);
                if (buffer_2.readPosition === 0 && buffer_2.memory.view.byteLength === size_1) 
                  tmp$_10 = decoder.decode(buffer_2.memory.view);
                else {
                  var buffer_3 = new Int8Array(buffer_2.memory.view.buffer, buffer_2.memory.view.byteOffset + buffer_2.readPosition | 0, size_1);
                  var decodeStream$result_1;
                  var tmp$_11;
                  try {
                    var tmp$_12;
                    if (true) {
                      tmp$_12 = decoder.decode(buffer_3, STREAM_TRUE);
                    } else {
                      tmp$_12 = decoder.decode(buffer_3);
                    }
                    decodeStream$result_1 = tmp$_12;
                  }                  catch (t_1) {
  if (Kotlin.isType(t_1, Throwable)) {
    throw new MalformedInputException('Failed to decode bytes: ' + ((tmp$_11 = t_1.message) != null ? tmp$_11 : 'no cause provided'));
  } else 
    throw t_1;
}
                  tmp$_10 = decodeStream$result_1;
                }
                var text_0 = tmp$_10;
                sb.append_gw00v9$(text_0);
                buffer_2.discardExact_za3lpa$(size_1);
                inputRemaining.v = inputRemaining.v - size_1 | 0;
                if (!true) {
                  break;
                }
                release_0 = false;
                tmp$_9 = prepareReadNextHead(input, current_0);
                if (tmp$_9 == null) {
                  break;
                }
                var next_0 = tmp$_9;
                current_0 = next_0;
                release_0 = true;
              } while (true);
            } finally             {
              if (release_0) {
                completeReadHead_0(input, current_0);
              }
            }
          } while (false);
      }
      sb.append_gw00v9$(decoder.decode());
    }    catch (t_2) {
  if (Kotlin.isType(t_2, Throwable)) {
    throw new MalformedInputException('Failed to decode bytes: ' + ((tmp$ = t_2.message) != null ? tmp$ : 'no cause provided'));
  } else 
    throw t_2;
}
    return sb.toString();
  }
  var MAX_CHARACTERS_SIZE_IN_BYTES;
  var MAX_CHARACTERS_COUNT;
  function DecodeBufferResult(charactersDecoded, bytesConsumed) {
    this.charactersDecoded = charactersDecoded;
    this.bytesConsumed = bytesConsumed;
  }
  DecodeBufferResult.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'DecodeBufferResult', 
  interfaces: []};
  DecodeBufferResult.prototype.component1 = function() {
  return this.charactersDecoded;
};
  DecodeBufferResult.prototype.component2 = function() {
  return this.bytesConsumed;
};
  DecodeBufferResult.prototype.copy_bm4lxs$ = function(charactersDecoded, bytesConsumed) {
  return new DecodeBufferResult(charactersDecoded === void 0 ? this.charactersDecoded : charactersDecoded, bytesConsumed === void 0 ? this.bytesConsumed : bytesConsumed);
};
  DecodeBufferResult.prototype.toString = function() {
  return 'DecodeBufferResult(charactersDecoded=' + Kotlin.toString(this.charactersDecoded) + (', bytesConsumed=' + Kotlin.toString(this.bytesConsumed)) + ')';
};
  DecodeBufferResult.prototype.hashCode = function() {
  var result = 0;
  result = result * 31 + Kotlin.hashCode(this.charactersDecoded) | 0;
  result = result * 31 + Kotlin.hashCode(this.bytesConsumed) | 0;
  return result;
};
  DecodeBufferResult.prototype.equals = function(other) {
  return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.charactersDecoded, other.charactersDecoded) && Kotlin.equals(this.bytesConsumed, other.bytesConsumed)))));
};
  function decodeBufferImpl($receiver, nativeDecoder, maxCharacters) {
    if (maxCharacters === 0) {
      return new DecodeBufferResult('', 0);
    }
    try {
      var sizeInBytes = coerceAtMost_0(maxCharacters, $receiver.byteLength);
      var text = nativeDecoder.decode($receiver.subarray(0, sizeInBytes));
      if (text.length <= maxCharacters) {
        return new DecodeBufferResult(text, sizeInBytes);
      }
    }    catch (_) {
}
    return decodeBufferImplSlow($receiver, nativeDecoder, maxCharacters);
  }
  function decodeBufferImplSlow($receiver, nativeDecoder, maxCharacters) {
    var tmp$;
    if (maxCharacters >= 268435455) 
      tmp$ = 2147483647;
    else 
      tmp$ = maxCharacters * 8 | 0;
    var maxBytes = coerceAtMost_0(tmp$, $receiver.byteLength);
    var sizeInBytes = maxBytes;
    while (sizeInBytes > 8) {
      try {
        var text = nativeDecoder.decode($receiver.subarray(0, sizeInBytes));
        if (text.length <= maxCharacters) {
          return new DecodeBufferResult(text, sizeInBytes);
        }
      }      catch (_) {
}
      sizeInBytes = sizeInBytes / 2 | 0;
    }
    sizeInBytes = 8;
    while (sizeInBytes > 0) {
      try {
        var text_0 = nativeDecoder.decode($receiver.subarray(0, sizeInBytes));
        if (text_0.length <= maxCharacters) {
          return new DecodeBufferResult(text_0, sizeInBytes);
        }
      }      catch (_) {
}
      sizeInBytes = sizeInBytes - 1 | 0;
    }
    var tmp$_0;
    try {
      nativeDecoder.decode($receiver);
    }    catch (t) {
  if (Kotlin.isType(t, Throwable)) {
    throw new MalformedInputException('Failed to decode bytes: ' + ((tmp$_0 = t.message) != null ? tmp$_0 : 'no cause provided'));
  } else 
    throw t;
}
    throw new MalformedInputException('Unable to decode buffer');
  }
  function encodeISO88591(input, fromIndex, toIndex, dst) {
    if (fromIndex >= toIndex) 
      return 0;
    var start = dst.writePosition;
    var view = dst.memory.slice_vux9f0$(start, dst.limit - start | 0).view;
    var tmp$;
    var i8 = new Int8Array(view.buffer, view.byteOffset, view.byteLength);
    var writeIndex = 0;
    for (var index = fromIndex; index < toIndex; index++) {
      var character = input.charCodeAt(index) | 0;
      if (character > 255) {
        failedToMapError(character);
      }
      i8[tmp$ = writeIndex , writeIndex = tmp$ + 1 | 0 , tmp$] = toByte(character);
    }
    var rc = writeIndex;
    dst.commitWritten_za3lpa$(rc);
    return toIndex - fromIndex | 0;
  }
  function failedToMapError(ch) {
    throw new MalformedInputException('The character with unicode point ' + ch + " couldn't be mapped to ISO-8859-1 character");
  }
  function ByteOrder(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ByteOrder_initFields() {
    ByteOrder_initFields = function() {
};
    ByteOrder$BIG_ENDIAN_instance = new ByteOrder('BIG_ENDIAN', 0);
    ByteOrder$LITTLE_ENDIAN_instance = new ByteOrder('LITTLE_ENDIAN', 1);
    ByteOrder$Companion_getInstance();
  }
  var ByteOrder$BIG_ENDIAN_instance;
  function ByteOrder$BIG_ENDIAN_getInstance() {
    ByteOrder_initFields();
    return ByteOrder$BIG_ENDIAN_instance;
  }
  var ByteOrder$LITTLE_ENDIAN_instance;
  function ByteOrder$LITTLE_ENDIAN_getInstance() {
    ByteOrder_initFields();
    return ByteOrder$LITTLE_ENDIAN_instance;
  }
  function ByteOrder$Companion() {
    ByteOrder$Companion_instance = this;
    this.native_0 = null;
    var buffer = new ArrayBuffer(4);
    var arr = new Int32Array(buffer);
    var view = new DataView(buffer);
    arr[0] = 287454020;
    this.native_0 = view.getInt32(0, true) === 287454020 ? ByteOrder$LITTLE_ENDIAN_getInstance() : ByteOrder$BIG_ENDIAN_getInstance();
  }
  ByteOrder$Companion.prototype.nativeOrder = function() {
  return this.native_0;
};
  ByteOrder$Companion.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'Companion', 
  interfaces: []};
  var ByteOrder$Companion_instance = null;
  function ByteOrder$Companion_getInstance() {
    ByteOrder_initFields();
    if (ByteOrder$Companion_instance === null) {
      new ByteOrder$Companion();
    }
    return ByteOrder$Companion_instance;
  }
  ByteOrder.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'ByteOrder', 
  interfaces: [Enum]};
  function ByteOrder$values() {
    return [ByteOrder$BIG_ENDIAN_getInstance(), ByteOrder$LITTLE_ENDIAN_getInstance()];
  }
  ByteOrder.values = ByteOrder$values;
  function ByteOrder$valueOf(name) {
    switch (name) {
      case 'BIG_ENDIAN':
        return ByteOrder$BIG_ENDIAN_getInstance();
      case 'LITTLE_ENDIAN':
        return ByteOrder$LITTLE_ENDIAN_getInstance();
      default:
        throwISE('No enum constant io.ktor.utils.io.core.ByteOrder.' + name);
    }
  }
  ByteOrder.valueOf_61zpoe$ = ByteOrder$valueOf;
  function ByteReadPacket$ObjectLiteral(closure$sub, closure$block, closure$array) {
    this.closure$sub = closure$sub;
    this.closure$block = closure$block;
    this.closure$array = closure$array;
    SingleInstancePool.call(this);
  }
  ByteReadPacket$ObjectLiteral.prototype.produceInstance = function() {
  return new IoBuffer(of_0(Memory$Companion_getInstance(), this.closure$sub), null);
};
  ByteReadPacket$ObjectLiteral.prototype.disposeInstance_trkh7z$ = function(instance) {
  if (!Kotlin.isType(instance, IoBuffer)) {
    var message = 'Only IoBuffer could be recycled';
    throw IllegalStateException_init(message.toString());
  }
  this.closure$block(this.closure$array);
};
  ByteReadPacket$ObjectLiteral.$metadata$ = {
  kind: Kind_CLASS, 
  interfaces: [SingleInstancePool]};
  function ByteReadPacket_1(array, offset, length, block) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = array.length;
    var tmp$, tmp$_0;
    var content = Kotlin.isType(tmp$ = array, Int8Array) ? tmp$ : throwCCE();
    if (offset === 0 && length === array.length) 
      tmp$_0 = content.buffer;
    else 
      tmp$_0 = content.buffer.slice(offset, offset + length | 0);
    var sub = tmp$_0;
    var pool = new ByteReadPacket$ObjectLiteral(sub, block, array);
    var $receiver = pool.borrow();
    $receiver.resetForRead();
    return ByteReadPacket_init($receiver, pool);
  }
  function Closeable() {
  }
  Closeable.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'Closeable', 
  interfaces: []};
  function addSuppressedInternal($receiver, other) {
  }
  function Input() {
  }
  Object.defineProperty(Input.prototype, 'byteOrder', {
  get: function() {
  return ByteOrder$BIG_ENDIAN_getInstance();
}, 
  set: function(newValue) {
  if (newValue !== ByteOrder$BIG_ENDIAN_getInstance()) {
    throw IllegalArgumentException_init('Only BIG_ENDIAN is supported');
  }
}});
  Input.prototype.peekTo_afjyek$ = function(destination, destinationOffset, offset, min, max, callback$default) {
  if (offset === void 0) 
    offset = L0;
  if (min === void 0) 
    min = L1;
  if (max === void 0) 
    max = Long$Companion$MAX_VALUE;
  return callback$default ? callback$default(destination, destinationOffset, offset, min, max) : this.peekTo_afjyek$$default(destination, destinationOffset, offset, min, max);
};
  Input.prototype.readShort = function() {
  return readShort_3(this);
};
  Input.prototype.readInt = function() {
  return readInt_3(this);
};
  Input.prototype.readLong = function() {
  return readLong_3(this);
};
  Input.prototype.readFloat = function() {
  return readFloat_3(this);
};
  Input.prototype.readDouble = function() {
  return readDouble_3(this);
};
  Input.prototype.readFully_mj6st8$ = function(dst, offset, length) {
  return readFully_15(this, dst, offset, length);
};
  Input.prototype.readFully_359eei$ = function(dst, offset, length) {
  return readFully_16(this, dst, offset, length);
};
  Input.prototype.readFully_nd5v6f$ = function(dst, offset, length) {
  return readFully_17(this, dst, offset, length);
};
  Input.prototype.readFully_rfv6wg$ = function(dst, offset, length) {
  return readFully_18(this, dst, offset, length);
};
  Input.prototype.readFully_kgymra$ = function(dst, offset, length) {
  return readFully_19(this, dst, offset, length);
};
  Input.prototype.readFully_6icyh1$ = function(dst, offset, length) {
  return readFully_20(this, dst, offset, length);
};
  Input.prototype.readFully_qr0era$ = function(dst, length) {
  return readFully_21(this, dst, length);
};
  Input.prototype.readAvailable_mj6st8$ = function(dst, offset, length) {
  return readAvailable_13(this, dst, offset, length);
};
  Input.prototype.readAvailable_359eei$ = function(dst, offset, length) {
  return readAvailable_14(this, dst, offset, length);
};
  Input.prototype.readAvailable_nd5v6f$ = function(dst, offset, length) {
  return readAvailable_15(this, dst, offset, length);
};
  Input.prototype.readAvailable_rfv6wg$ = function(dst, offset, length) {
  return readAvailable_16(this, dst, offset, length);
};
  Input.prototype.readAvailable_kgymra$ = function(dst, offset, length) {
  return readAvailable_17(this, dst, offset, length);
};
  Input.prototype.readAvailable_6icyh1$ = function(dst, offset, length) {
  return readAvailable_18(this, dst, offset, length);
};
  Input.prototype.readAvailable_qr0era$ = function(dst, length) {
  return readAvailable_19(this, dst, length);
};
  Input.prototype.readFully_gsnag5$ = function(dst, offset, length) {
  return readFully_28(this, dst, offset, length);
};
  Input.prototype.readFully_qmgm5g$ = function(dst, offset, length) {
  return readFully_29(this, dst, offset, length);
};
  Input.prototype.readFully_p0d4q1$ = function(dst, offset, length) {
  return readFully_30(this, dst, offset, length);
};
  Input.prototype.readAvailable_gsnag5$ = function(dst, offset, length) {
  return readAvailable_22(this, dst, offset, length);
};
  Input.prototype.readAvailable_qmgm5g$ = function(dst, offset, length) {
  return readAvailable_23(this, dst, offset, length);
};
  Input.prototype.readAvailable_p0d4q1$ = function(dst, offset, length) {
  return readAvailable_24(this, dst, offset, length);
};
  Input.prototype.peekTo_99qa0s$ = function(buffer) {
  return peekTo_1(this, buffer);
};
  Input.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'Input', 
  interfaces: [Closeable]};
  require$ObjectLiteral_8.prototype = Object.create(RequireFailureCapture.prototype);
  require$ObjectLiteral_8.prototype.constructor = require$ObjectLiteral_8;
  function require$ObjectLiteral_8(closure$message) {
    this.closure$message = closure$message;
    RequireFailureCapture.call(this);
  }
  require$ObjectLiteral_8.prototype.doFail = function() {
  throw IllegalArgumentException_init(this.closure$message());
};
  require$ObjectLiteral_8.$metadata$ = {
  kind: Kind_CLASS, 
  interfaces: [RequireFailureCapture]};
  function readFully_28($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    if (Kotlin.isType($receiver, AbstractInput)) {
      return readFully_31($receiver, dst, offset, length);
    }
    var rc = readAvailable_22($receiver, dst, offset, length);
    if (rc !== length) {
      prematureEndOfStream(length);
    }
  }
  function readFully_29($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.byteLength - offset | 0;
    if (Kotlin.isType($receiver, AbstractInput)) {
      return readFully_32($receiver, dst, offset, length);
    }
    var rc = readAvailable_23($receiver, dst, offset, length);
    if (rc !== length) {
      prematureEndOfStream(length);
    }
  }
  function readFully_30($receiver, dst, byteOffset, byteLength) {
    if (byteOffset === void 0) 
      byteOffset = 0;
    if (byteLength === void 0) 
      byteLength = dst.byteLength - byteOffset | 0;
    if (Kotlin.isType($receiver, AbstractInput)) {
      return readFully_33($receiver, dst, byteOffset, byteLength);
    }
    var rc = readAvailable_24($receiver, dst, byteOffset, byteLength);
    if (rc !== byteLength) {
      prematureEndOfStream(byteLength);
    }
  }
  function readAvailable_22($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.length - offset | 0;
    var tmp$;
    if (Kotlin.isType($receiver, AbstractInput)) {
      return readAvailable_25($receiver, dst, offset, length);
    }
    return readAvailable_24($receiver, Kotlin.isType(tmp$ = dst, Object) ? tmp$ : throwCCE(), offset, length);
  }
  function readAvailable_23($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.byteLength - offset | 0;
    if (Kotlin.isType($receiver, AbstractInput)) {
      return readAvailable_26($receiver, dst, offset, length);
    }
    var bytesCopied = {
  v: 0};
    takeWhile$break:
      do {
        var tmp$, tmp$_0;
        var release = true;
        tmp$ = prepareReadFirstHead($receiver, 1);
        if (tmp$ == null) {
          break takeWhile$break;
        }
        var current = tmp$;
        try {
          do {
            var buffer = current;
            var a = buffer.writePosition - buffer.readPosition | 0;
            var b = length - bytesCopied.v | 0;
            var partSize = Math_0.min(a, b);
            copyTo_4(buffer.memory, dst, buffer.readPosition, partSize, bytesCopied.v);
            bytesCopied.v = bytesCopied.v + partSize | 0;
            if (!(bytesCopied.v < length)) {
              break;
            }
            release = false;
            tmp$_0 = prepareReadNextHead($receiver, current);
            if (tmp$_0 == null) {
              break;
            }
            var next = tmp$_0;
            current = next;
            release = true;
          } while (true);
        } finally         {
          if (release) {
            completeReadHead_0($receiver, current);
          }
        }
      } while (false);
    return bytesCopied.v;
  }
  function readAvailable_24($receiver, dst, byteOffset, byteLength) {
    if (byteOffset === void 0) 
      byteOffset = 0;
    if (byteLength === void 0) 
      byteLength = dst.byteLength - byteOffset | 0;
    if (Kotlin.isType($receiver, AbstractInput)) {
      return readAvailable_27($receiver, dst, byteOffset, byteLength);
    }
    var bytesCopied = {
  v: 0};
    takeWhile$break:
      do {
        var tmp$, tmp$_0;
        var release = true;
        tmp$ = prepareReadFirstHead($receiver, 1);
        if (tmp$ == null) {
          break takeWhile$break;
        }
        var current = tmp$;
        try {
          do {
            var buffer = current;
            var a = buffer.writePosition - buffer.readPosition | 0;
            var b = byteLength - bytesCopied.v | 0;
            var partSize = Math_0.min(a, b);
            copyTo_5(buffer.memory, dst, buffer.readPosition, partSize, bytesCopied.v);
            bytesCopied.v = bytesCopied.v + partSize | 0;
            if (!(bytesCopied.v < byteLength)) {
              break;
            }
            release = false;
            tmp$_0 = prepareReadNextHead($receiver, current);
            if (tmp$_0 == null) {
              break;
            }
            var next = tmp$_0;
            current = next;
            release = true;
          } while (true);
        } finally         {
          if (release) {
            completeReadHead_0($receiver, current);
          }
        }
      } while (false);
    return bytesCopied.v;
  }
  function readFully_31($receiver, dst, offset, length) {
    var tmp$;
    return readFully_33($receiver, Kotlin.isType(tmp$ = dst, Object) ? tmp$ : throwCCE(), offset, length);
  }
  function readFully_32($receiver, dst, offset, length) {
    if ($receiver.remaining.toNumber() < length) 
      throw IllegalArgumentException_init('Not enough bytes available (' + $receiver.remaining.toString() + ') to read ' + length + ' bytes');
    var copied = {
  v: 0};
    takeWhile$break:
      do {
        var tmp$, tmp$_0;
        var release = true;
        tmp$ = prepareReadFirstHead($receiver, 1);
        if (tmp$ == null) {
          break takeWhile$break;
        }
        var current = tmp$;
        try {
          do {
            var rc = readAvailable_28(current, dst, offset + copied.v | 0, length - copied.v | 0);
            if (rc > 0) 
              copied.v = copied.v + rc | 0;
            if (!(copied.v < length)) {
              break;
            }
            release = false;
            tmp$_0 = prepareReadNextHead($receiver, current);
            if (tmp$_0 == null) {
              break;
            }
            var next = tmp$_0;
            current = next;
            release = true;
          } while (true);
        } finally         {
          if (release) {
            completeReadHead_0($receiver, current);
          }
        }
      } while (false);
  }
  function readFully$lambda(closure$length, closure$dst) {
    return function() {
  throw new IndexOutOfBoundsException('length ' + closure$length + ' is greater than view size ' + closure$dst.byteLength);
};
  }
  function readFully_33($receiver, dst, offset, length) {
    if (!(length <= dst.byteLength)) {
      var m = new require$ObjectLiteral_8(readFully$lambda(length, dst));
      m.doFail();
    }
    return readFully_32($receiver, dst.buffer, dst.byteOffset + offset | 0, length);
  }
  function readAvailable_25($receiver, dst, offset, length) {
    var remaining = $receiver.remaining;
    if (equals(remaining, L0)) 
      return -1;
    var b = Kotlin.Long.fromInt(length);
    var size = (remaining.compareTo_11rb$(b) <= 0 ? remaining : b).toInt();
    readFully_31($receiver, dst, offset, size);
    return size;
  }
  function readAvailable_26($receiver, dst, offset, length) {
    var remaining = $receiver.remaining;
    if (equals(remaining, L0)) 
      return -1;
    var b = Kotlin.Long.fromInt(length);
    var size = (remaining.compareTo_11rb$(b) <= 0 ? remaining : b).toInt();
    readFully_32($receiver, dst, offset, size);
    return size;
  }
  function readAvailable_27($receiver, dst, offset, length) {
    var remaining = $receiver.remaining;
    if (equals(remaining, L0)) 
      return -1;
    var b = Kotlin.Long.fromInt(length);
    var size = (remaining.compareTo_11rb$(b) <= 0 ? remaining : b).toInt();
    readFully_33($receiver, dst, offset, size);
    return size;
  }
  require$ObjectLiteral_9.prototype = Object.create(RequireFailureCapture.prototype);
  require$ObjectLiteral_9.prototype.constructor = require$ObjectLiteral_9;
  function require$ObjectLiteral_9(closure$message) {
    this.closure$message = closure$message;
    RequireFailureCapture.call(this);
  }
  require$ObjectLiteral_9.prototype.doFail = function() {
  throw IllegalArgumentException_init(this.closure$message());
};
  require$ObjectLiteral_9.$metadata$ = {
  kind: Kind_CLASS, 
  interfaces: [RequireFailureCapture]};
  function IoBuffer(memory, origin) {
    IoBuffer$Companion_getInstance();
    ChunkBuffer.call(this, memory, origin);
  }
  Object.defineProperty(IoBuffer.prototype, 'content_0', {
  get: function() {
  return this.memory.view.buffer;
}});
  Object.defineProperty(IoBuffer.prototype, 'endOfInput', {
  get: function() {
  return this.writePosition === this.readPosition;
}});
  Object.defineProperty(IoBuffer.prototype, 'byteOrder', {
  get: function() {
  return ByteOrder$BIG_ENDIAN_getInstance();
}, 
  set: function(newOrder) {
  if (newOrder !== ByteOrder$BIG_ENDIAN_getInstance()) {
    throw IllegalArgumentException_init('Only big endian is supported');
  }
}});
  IoBuffer.prototype.peekTo_afjyek$$default = function(destination, destinationOffset, offset, min, max) {
  var tmp$;
  return peekTo(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), destination, destinationOffset, offset, min, max);
};
  IoBuffer.prototype.tryPeek = function() {
  return this.tryPeekByte();
};
  IoBuffer.prototype.readFully_qmgm5g$ = function(dst, offset, length) {
  var tmp$;
  readFully_34(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), dst, offset, length);
};
  IoBuffer.prototype.readAvailable_qmgm5g$ = function(dst, offset, length) {
  var tmp$;
  return readAvailable_28(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), dst, offset, length);
};
  IoBuffer.prototype.readAvailable_qr0era$ = function(dst, length) {
  var tmp$;
  return readAvailable_11(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), dst, length);
};
  function IoBuffer$readFully$lambda() {
    return 'offset should be positive';
  }
  function IoBuffer$readFully$lambda_0() {
    throw new IndexOutOfBoundsException('');
  }
  IoBuffer.prototype.readFully_p0d4q1$ = function(dst, offset, length) {
  var tmp$;
  if ((this.writePosition - this.readPosition | 0) < length) {
    throw IllegalStateException_init('Not enough bytes available (' + (this.writePosition - this.readPosition | 0) + ') to read ' + length + ' bytes');
  }
  if (length > dst.byteLength) 
    throw IllegalArgumentException_init('Destination buffer overflow: length = ' + length + ', buffer capacity ' + dst.byteLength);
  if (!(offset >= 0)) {
    var m = new require$ObjectLiteral_9(IoBuffer$readFully$lambda);
    m.doFail();
  }
  if (!((offset + length | 0) <= dst.byteLength)) {
    var m_0 = new require$ObjectLiteral_9(IoBuffer$readFully$lambda_0);
    m_0.doFail();
  }
  readFully_34(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), dst.buffer, dst.byteOffset + offset | 0, length);
};
  IoBuffer.prototype.readAvailable_p0d4q1$ = function(dst, offset, length) {
  var tmp$;
  var readRemaining = this.writePosition - this.readPosition | 0;
  if (readRemaining === 0) 
    return -1;
  var size = Math_0.min(length, readRemaining);
  readFully_35(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), dst, offset, size);
  return size;
};
  IoBuffer.prototype.readFully_gsnag5$ = function(dst, offset, length) {
  var tmp$;
  readFully_35(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), dst, offset, length);
};
  IoBuffer.prototype.readAvailable_gsnag5$ = function(dst, offset, length) {
  var tmp$;
  return readAvailable_29(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), dst, offset, length);
};
  IoBuffer.prototype.readFully_qr0era$ = function(dst, length) {
  var tmp$;
  readFully_13(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), dst, length);
};
  IoBuffer.prototype.append_ezbsdh$ = function(csq, start, end) {
  var idx = appendChars_0(this, csq != null ? csq : 'null', start, end);
  if (idx !== end) 
    throw IllegalStateException_init('Not enough free space to append char sequence');
  return this;
};
  IoBuffer.prototype.append_gw00v9$ = function(csq) {
  return csq == null ? this.append_gw00v9$('null') : this.append_ezbsdh$(csq, 0, csq.length);
};
  IoBuffer.prototype.append_8chfmy$ = function(csq, start, end) {
  var idx = appendChars(this, csq, start, end);
  if (idx !== end) 
    throw IllegalStateException_init('Not enough free space to append char sequence');
  return this;
};
  IoBuffer.prototype.append_s8itvh$ = function(c) {
  var tmp$;
  append(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), c);
  return this;
};
  IoBuffer.prototype.write_mj6st8$ = function(array, offset, length) {
  var tmp$;
  writeFully_0(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), array, offset, length);
};
  IoBuffer.prototype.write_gsnag5$ = function(src, offset, length) {
  var tmp$;
  writeFully_28(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), src, offset, length);
};
  IoBuffer.prototype.readShort = function() {
  var tmp$;
  return readShort_0(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE());
};
  IoBuffer.prototype.readInt = function() {
  var tmp$;
  return readInt_0(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE());
};
  IoBuffer.prototype.readFloat = function() {
  var tmp$;
  return readFloat_0(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE());
};
  IoBuffer.prototype.readDouble = function() {
  var tmp$;
  return readDouble_0(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE());
};
  IoBuffer.prototype.readFully_mj6st8$ = function(dst, offset, length) {
  var tmp$;
  readFully_2(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), dst, offset, length);
};
  IoBuffer.prototype.readFully_359eei$ = function(dst, offset, length) {
  var tmp$;
  readFully_5(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), dst, offset, length);
};
  IoBuffer.prototype.readFully_nd5v6f$ = function(dst, offset, length) {
  var tmp$;
  readFully_7(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), dst, offset, length);
};
  IoBuffer.prototype.readFully_rfv6wg$ = function(dst, offset, length) {
  var tmp$;
  readFully_9(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), dst, offset, length);
};
  IoBuffer.prototype.readFully_kgymra$ = function(dst, offset, length) {
  var tmp$;
  readFully_11(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), dst, offset, length);
};
  IoBuffer.prototype.readFully_6icyh1$ = function(dst, offset, length) {
  var tmp$;
  readFully_12(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), dst, offset, length);
};
  IoBuffer.prototype.readAvailable_mj6st8$ = function(dst, offset, length) {
  var tmp$;
  return readAvailable_0(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), dst, offset, length);
};
  IoBuffer.prototype.readAvailable_359eei$ = function(dst, offset, length) {
  var tmp$;
  return readAvailable_3(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), dst, offset, length);
};
  IoBuffer.prototype.readAvailable_nd5v6f$ = function(dst, offset, length) {
  var tmp$;
  return readAvailable_5(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), dst, offset, length);
};
  IoBuffer.prototype.readAvailable_rfv6wg$ = function(dst, offset, length) {
  var tmp$;
  return readAvailable_7(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), dst, offset, length);
};
  IoBuffer.prototype.readAvailable_kgymra$ = function(dst, offset, length) {
  var tmp$;
  return readAvailable_9(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), dst, offset, length);
};
  IoBuffer.prototype.readAvailable_6icyh1$ = function(dst, offset, length) {
  var tmp$;
  return readAvailable_10(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), dst, offset, length);
};
  IoBuffer.prototype.peekTo_99qa0s$ = function(buffer) {
  var tmp$;
  return peekTo_1(Kotlin.isType(tmp$ = this, Input) ? tmp$ : throwCCE(), buffer);
};
  IoBuffer.prototype.readLong = function() {
  var tmp$;
  return readLong_0(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE());
};
  IoBuffer.prototype.writeShort_mq22fl$ = function(v) {
  var tmp$;
  writeShort_2(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), v);
};
  IoBuffer.prototype.writeInt_za3lpa$ = function(v) {
  var tmp$;
  writeInt_2(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), v);
};
  IoBuffer.prototype.writeFloat_mx4ult$ = function(v) {
  var tmp$;
  writeFloat_0(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), v);
};
  IoBuffer.prototype.writeDouble_14dthe$ = function(v) {
  var tmp$;
  writeDouble_0(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), v);
};
  IoBuffer.prototype.writeFully_mj6st8$ = function(src, offset, length) {
  var tmp$;
  writeFully_0(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), src, offset, length);
};
  IoBuffer.prototype.writeFully_359eei$ = function(src, offset, length) {
  var tmp$;
  writeFully_3(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), src, offset, length);
};
  IoBuffer.prototype.writeFully_nd5v6f$ = function(src, offset, length) {
  var tmp$;
  writeFully_5(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), src, offset, length);
};
  IoBuffer.prototype.writeFully_rfv6wg$ = function(src, offset, length) {
  var tmp$;
  writeFully_7(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), src, offset, length);
};
  IoBuffer.prototype.writeFully_kgymra$ = function(src, offset, length) {
  var tmp$;
  writeFully_9(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), src, offset, length);
};
  IoBuffer.prototype.writeFully_6icyh1$ = function(src, offset, length) {
  var tmp$;
  writeFully_10(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), src, offset, length);
};
  IoBuffer.prototype.writeFully_qr0era$ = function(src, length) {
  var tmp$;
  writeFully_12(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), src, length);
};
  IoBuffer.prototype.fill_3pq026$ = function(n, v) {
  var tmp$;
  fill_1(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), n, v);
};
  IoBuffer.prototype.writeLong_s8cxhz$ = function(v) {
  var tmp$;
  writeLong_0(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), v);
};
  IoBuffer.prototype.writeBuffer_qr0era$ = function(src, length) {
  var tmp$;
  writeFully_12(Kotlin.isType(tmp$ = this, Buffer) ? tmp$ : throwCCE(), src, length);
  return length;
};
  IoBuffer.prototype.flush = function() {
};
  IoBuffer.prototype.readableView = function() {
  var tmp$;
  var readPosition = this.readPosition;
  var writePosition = this.writePosition;
  if (readPosition === writePosition) 
    tmp$ = IoBuffer$Companion_getInstance().EmptyDataView_0;
  else if (readPosition === 0 && writePosition === this.content_0.byteLength) 
    tmp$ = this.memory.view;
  else 
    tmp$ = new DataView(this.content_0, readPosition, writePosition - readPosition | 0);
  return tmp$;
};
  IoBuffer.prototype.writableView = function() {
  var tmp$;
  var writePosition = this.writePosition;
  var limit = this.limit;
  if (writePosition === limit) 
    tmp$ = IoBuffer$Companion_getInstance().EmptyDataView_0;
  else if (writePosition === 0 && limit === this.content_0.byteLength) 
    tmp$ = this.memory.view;
  else 
    tmp$ = new DataView(this.content_0, writePosition, limit - writePosition | 0);
  return tmp$;
};
  IoBuffer.prototype.readDirect_5b066c$ = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.IoBuffer.readDirect_5b066c$', wrapFunction(function() {
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  return function(block) {
  var view = this.readableView();
  var rc = block(view);
  if (!(rc >= 0)) {
    var message = "The returned value from block function shouldn't be negative: " + rc;
    throw IllegalStateException_init(message.toString());
  }
  this.discard_za3lpa$(rc);
  return rc;
};
}));
  IoBuffer.prototype.writeDirect_5b066c$ = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.IoBuffer.writeDirect_5b066c$', wrapFunction(function() {
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  return function(block) {
  var view = this.writableView();
  var rc = block(view);
  if (!(rc >= 0)) {
    var message = "The returned value from block function shouldn't be negative: " + rc;
    throw IllegalStateException_init(message.toString());
  }
  if (!(rc <= (this.limit - this.writePosition | 0))) {
    var message_0 = 'The returned value from block function is too big: ' + rc + ' > ' + (this.limit - this.writePosition | 0);
    throw IllegalStateException_init(message_0.toString());
  }
  this.commitWritten_za3lpa$(rc);
  return rc;
};
}));
  IoBuffer.prototype.release_duua06$ = function(pool) {
  releaseImpl(this, pool);
};
  IoBuffer.prototype.close = function() {
  throw UnsupportedOperationException_init('close for buffer view is not supported');
};
  IoBuffer.prototype.toString = function() {
  return 'Buffer[readable = ' + (this.writePosition - this.readPosition | 0) + ', writable = ' + (this.limit - this.writePosition | 0) + ', startGap = ' + this.startGap + ', endGap = ' + (this.capacity - this.limit | 0) + ']';
};
  function IoBuffer$Companion() {
    IoBuffer$Companion_instance = this;
    this.EmptyBuffer_0 = new ArrayBuffer(0);
    this.EmptyDataView_0 = new DataView(this.EmptyBuffer_0);
    this.Empty = new IoBuffer(Memory$Companion_getInstance().Empty, null);
    this.Pool = new IoBuffer$Companion$Pool$ObjectLiteral(100);
    this.NoPool = new IoBuffer$Companion$NoPool$ObjectLiteral();
    this.EmptyPool = EmptyBufferPoolImpl_getInstance();
  }
  Object.defineProperty(IoBuffer$Companion.prototype, 'ReservedSize', {
  get: function() {
  return 8;
}});
  function IoBuffer$Companion$Pool$ObjectLiteral(capacity) {
    DefaultPool.call(this, capacity);
  }
  IoBuffer$Companion$Pool$ObjectLiteral.prototype.produceInstance = function() {
  return new IoBuffer(DefaultAllocator_getInstance().alloc_za3lpa$(4096), null);
};
  IoBuffer$Companion$Pool$ObjectLiteral.prototype.clearInstance_trkh7z$ = function(instance) {
  var $receiver = DefaultPool.prototype.clearInstance_trkh7z$.call(this, instance);
  $receiver.unpark_8be2vx$();
  $receiver.reset();
  return $receiver;
};
  function IoBuffer$Companion$Pool$ObjectLiteral$validateInstance$lambda(closure$instance) {
    return function() {
  return 'unable to recycle buffer: buffer view is in use (refCount = ' + closure$instance.referenceCount + ')';
};
  }
  function IoBuffer$Companion$Pool$ObjectLiteral$validateInstance$lambda_0() {
    return "Unable to recycle buffer view: view copy shouldn't be recycled";
  }
  IoBuffer$Companion$Pool$ObjectLiteral.prototype.validateInstance_trkh7z$ = function(instance) {
  DefaultPool.prototype.validateInstance_trkh7z$.call(this, instance);
  if (!(instance.referenceCount === 0)) {
    var m = new require$ObjectLiteral_9(IoBuffer$Companion$Pool$ObjectLiteral$validateInstance$lambda(instance));
    m.doFail();
  }
  if (!(instance.origin == null)) {
    var m_0 = new require$ObjectLiteral_9(IoBuffer$Companion$Pool$ObjectLiteral$validateInstance$lambda_0);
    m_0.doFail();
  }
};
  IoBuffer$Companion$Pool$ObjectLiteral.prototype.disposeInstance_trkh7z$ = function(instance) {
  DefaultAllocator_getInstance().free_vn6nzs$(instance.memory);
  instance.unlink_8be2vx$();
};
  IoBuffer$Companion$Pool$ObjectLiteral.$metadata$ = {
  kind: Kind_CLASS, 
  interfaces: [DefaultPool]};
  function IoBuffer$Companion$NoPool$ObjectLiteral() {
    NoPoolImpl.call(this);
  }
  IoBuffer$Companion$NoPool$ObjectLiteral.prototype.borrow = function() {
  return new IoBuffer(DefaultAllocator_getInstance().alloc_za3lpa$(4096), null);
};
  IoBuffer$Companion$NoPool$ObjectLiteral.prototype.recycle_trkh7z$ = function(instance) {
  DefaultAllocator_getInstance().free_vn6nzs$(instance.memory);
};
  IoBuffer$Companion$NoPool$ObjectLiteral.$metadata$ = {
  kind: Kind_CLASS, 
  interfaces: [NoPoolImpl]};
  IoBuffer$Companion.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'Companion', 
  interfaces: []};
  var IoBuffer$Companion_instance = null;
  function IoBuffer$Companion_getInstance() {
    if (IoBuffer$Companion_instance === null) {
      new IoBuffer$Companion();
    }
    return IoBuffer$Companion_instance;
  }
  IoBuffer.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'IoBuffer', 
  interfaces: [ChunkBuffer, Output, Input]};
  function readFully_34($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.byteLength - offset | 0;
    var memory = $receiver.memory;
    var start = $receiver.readPosition;
    if (($receiver.writePosition - start | 0) < length) {
      throw new EOFException('Not enough bytes available to read ' + length + ' bytes');
    }
    copyTo_4(memory, dst, start, length, offset);
    var rc = length;
    $receiver.discardExact_za3lpa$(rc);
  }
  function readFully_35($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.byteLength - offset | 0;
    var memory = $receiver.memory;
    var start = $receiver.readPosition;
    if (($receiver.writePosition - start | 0) < length) {
      throw new EOFException('Not enough bytes available to read ' + length + ' bytes');
    }
    copyTo_5(memory, dst, start, length, offset);
    var rc = length;
    $receiver.discardExact_za3lpa$(rc);
  }
  function readAvailable_28($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.byteLength - offset | 0;
    if (!($receiver.writePosition > $receiver.readPosition)) 
      return -1;
    var b = $receiver.writePosition - $receiver.readPosition | 0;
    var readSize = Math_0.min(length, b);
    readFully_34($receiver, dst, offset, readSize);
    return readSize;
  }
  function readAvailable_29($receiver, dst, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = dst.byteLength - offset | 0;
    if (!($receiver.writePosition > $receiver.readPosition)) 
      return -1;
    var b = $receiver.writePosition - $receiver.readPosition | 0;
    var readSize = Math_0.min(length, b);
    readFully_35($receiver, dst, offset, readSize);
    return readSize;
  }
  function writeFully_27($receiver, src, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = src.byteLength;
    var memory = $receiver.memory;
    var start = $receiver.writePosition;
    if (($receiver.limit - start | 0) < length) {
      throw new InsufficientSpaceException('Not enough free space to write ' + length + ' bytes');
    }
    copyTo_6(src, memory, offset, length, start);
    var rc = length;
    $receiver.commitWritten_za3lpa$(rc);
  }
  function writeFully_28($receiver, src, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = src.byteLength - offset | 0;
    var memory = $receiver.memory;
    var dstOffset = $receiver.writePosition;
    if (($receiver.limit - dstOffset | 0) < length) {
      throw new InsufficientSpaceException('Not enough free space to write ' + length + ' bytes');
    }
    copyTo_7(src, memory, offset, length, dstOffset);
    var rc = length;
    $receiver.commitWritten_za3lpa$(rc);
  }
  var writeDirect = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.writeDirect_7p6c17$', function($receiver, block) {
  var start = $receiver.writePosition;
  var rc = block($receiver.memory.slice_vux9f0$(start, $receiver.limit - start | 0).view);
  $receiver.commitWritten_za3lpa$(rc);
  return rc;
});
  var readDirect = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.readDirect_7p6c17$', function($receiver, block) {
  var start = $receiver.readPosition;
  var rc = block($receiver.memory.slice_vux9f0$(start, $receiver.writePosition - start | 0).view);
  $receiver.discardExact_za3lpa$(rc);
  return rc;
});
  var writeDirectInt8Array = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.writeDirectInt8Array_fffeuo$', wrapFunction(function() {
  var Int8Array_init = Int8Array;
  return function($receiver, block) {
  var memory = $receiver.memory;
  var start = $receiver.writePosition;
  var endExclusive = $receiver.limit;
  var rc = block(new Int8Array_init(memory.view.buffer, memory.view.byteOffset + start | 0, endExclusive - start | 0));
  $receiver.commitWritten_za3lpa$(rc);
  return rc;
};
}));
  var readDirectInt8Array = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.core.readDirectInt8Array_fffeuo$', wrapFunction(function() {
  var Int8Array_init = Int8Array;
  return function($receiver, block) {
  var memory = $receiver.memory;
  var start = $receiver.readPosition;
  var endExclusive = $receiver.writePosition;
  var rc = block(new Int8Array_init(memory.view.buffer, memory.view.byteOffset + start | 0, endExclusive - start | 0));
  $receiver.discardExact_za3lpa$(rc);
  return rc;
};
}));
  function Output() {
  }
  Output.prototype.writeShort_mq22fl$ = function(v) {
  writeShort_5(this, v);
};
  Output.prototype.writeInt_za3lpa$ = function(v) {
  writeInt_5(this, v);
};
  Output.prototype.writeLong_s8cxhz$ = function(v) {
  writeLong_3(this, v);
};
  Output.prototype.writeFloat_mx4ult$ = function(v) {
  writeFloat_3(this, v);
};
  Output.prototype.writeDouble_14dthe$ = function(v) {
  writeDouble_3(this, v);
};
  Output.prototype.writeFully_mj6st8$ = function(src, offset, length) {
  writeFully_13(this, src, offset, length);
};
  Output.prototype.writeFully_359eei$ = function(src, offset, length) {
  writeFully_14(this, src, offset, length);
};
  Output.prototype.writeFully_nd5v6f$ = function(src, offset, length) {
  writeFully_15(this, src, offset, length);
};
  Output.prototype.writeFully_rfv6wg$ = function(src, offset, length) {
  writeFully_16(this, src, offset, length);
};
  Output.prototype.writeFully_kgymra$ = function(src, offset, length) {
  writeFully_17(this, src, offset, length);
};
  Output.prototype.writeFully_6icyh1$ = function(src, offset, length) {
  writeFully_18(this, src, offset, length);
};
  Output.prototype.writeFully_qr0era$ = function(src, length) {
  writeFully_20(this, src, length);
};
  Output.prototype.fill_3pq026$ = function(n, v) {
  fill_2(this, n, v);
};
  Output.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'Output', 
  interfaces: [Closeable, Appendable]};
  var PACKET_MAX_COPY_SIZE;
  var BUFFER_VIEW_POOL_SIZE;
  var BUFFER_VIEW_SIZE;
  function BytePacketBuilder_0(headerSizeHint) {
    if (headerSizeHint === void 0) 
      headerSizeHint = 0;
    return new BytePacketBuilder(headerSizeHint, ChunkBuffer$Companion_getInstance().Pool);
  }
  function asInt8Array($receiver) {
    return new Int8Array($receiver.view.buffer, $receiver.view.byteOffset, $receiver.view.byteLength);
  }
  function discardUntilDelimiterImpl($receiver, delimiter) {
    var content = asInt8Array($receiver.memory);
    var idx = $receiver.readPosition;
    var end = $receiver.writePosition;
    while (idx < end && content[idx] !== delimiter) {
      idx = idx + 1 | 0;
    }
    var start = $receiver.readPosition;
    $receiver.discardUntilIndex_kcn2v3$(idx);
    return idx - start | 0;
  }
  function discardUntilDelimitersImpl($receiver, delimiter1, delimiter2) {
    var content = asInt8Array($receiver.memory);
    var idx = $receiver.readPosition;
    var end = $receiver.writePosition;
    while (idx < end) {
      var v = content[idx];
      if (v === delimiter1 || v === delimiter2) 
        break;
      idx = idx + 1 | 0;
    }
    var start = $receiver.readPosition;
    $receiver.discardUntilIndex_kcn2v3$(idx);
    return idx - start | 0;
  }
  function readUntilDelimiterImpl($receiver, delimiter, dst, offset, length) {
    if (!(offset >= 0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
    if (!(length >= 0)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }
    if (!((offset + length | 0) <= dst.length)) {
      var message_1 = 'Check failed.';
      throw IllegalStateException_init(message_1.toString());
    }
    var tmp$;
    var array = asInt8Array($receiver.memory);
    var start = $receiver.readPosition;
    var i = start;
    var tmp$_0 = i;
    var b = $receiver.writePosition - $receiver.readPosition | 0;
    var end = tmp$_0 + Math_0.min(length, b) | 0;
    while (true) {
      var tmp$_1 = i < end;
      if (tmp$_1) {
        tmp$_1 = !(array[i] === delimiter);
      }
      if (!tmp$_1) 
        break;
      i = i + 1 | 0;
    }
    var copied = i - start | 0;
    var dstArray = Kotlin.isType(tmp$ = dst, Int8Array) ? tmp$ : throwCCE();
    dstArray.set(array.subarray(start, end), offset);
    $receiver.discardUntilIndex_kcn2v3$(i);
    return copied;
  }
  function readUntilDelimitersImpl($receiver, delimiter1, delimiter2, dst, offset, length) {
    if (!(offset >= 0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
    if (!(length >= 0)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }
    if (!((offset + length | 0) <= dst.length)) {
      var message_1 = 'Check failed.';
      throw IllegalStateException_init(message_1.toString());
    }
    if (!(delimiter1 !== delimiter2)) {
      var message_2 = 'Check failed.';
      throw IllegalStateException_init(message_2.toString());
    }
    var tmp$;
    var array = asInt8Array($receiver.memory);
    var start = $receiver.readPosition;
    var i = start;
    var tmp$_0 = i;
    var b = $receiver.writePosition - $receiver.readPosition | 0;
    var end = tmp$_0 + Math_0.min(length, b) | 0;
    while (true) {
      var tmp$_1 = i < end;
      if (tmp$_1) {
        var it = array[i];
        tmp$_1 = !(it === delimiter1 || it === delimiter2);
      }
      if (!tmp$_1) 
        break;
      i = i + 1 | 0;
    }
    var copied = i - start | 0;
    var dstArray = Kotlin.isType(tmp$ = dst, Int8Array) ? tmp$ : throwCCE();
    dstArray.set(array.subarray(start, end), offset);
    $receiver.discardUntilIndex_kcn2v3$(i);
    return copied;
  }
  function readUntilDelimiterImpl_0($receiver, delimiter, dst) {
    var array = asInt8Array($receiver.memory);
    var i = {
  v: $receiver.readPosition};
    var copiedTotal = {
  v: 0};
    var tail = prepareWriteHead_0(dst, 1, null);
    try {
      while (true) {
        var chunk = tail;
        writeFully_12(chunk, chunk, 0);
        var start = i.v;
        var a = i.v + (chunk.limit - chunk.writePosition | 0) | 0;
        var b = $receiver.writePosition;
        var end = Math_0.min(a, b);
        while (true) {
          var tmp$ = i.v < end;
          if (tmp$) {
            tmp$ = !(array[i.v] === delimiter);
          }
          if (!tmp$) 
            break;
          i.v = i.v + 1 | 0;
        }
        var size = i.v - start | 0;
        asInt8Array(chunk.memory).set(array.subarray(start, i.v), chunk.writePosition);
        chunk.commitWritten_za3lpa$(size);
        copiedTotal.v = copiedTotal.v + size | 0;
        if (!((chunk.limit - chunk.writePosition | 0) === 0 && i.v < end)) 
          break;
        tail = prepareWriteHead_0(dst, 1, tail);
      }
    } finally     {
      afterHeadWrite_0(dst, tail);
    }
    $receiver.discardUntilIndex_kcn2v3$(i.v);
    return copiedTotal.v;
  }
  function readUntilDelimitersImpl_0($receiver, delimiter1, delimiter2, dst) {
    if (!(delimiter1 !== delimiter2)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
    var array = asInt8Array($receiver.memory);
    var i = {
  v: $receiver.readPosition};
    var copiedTotal = {
  v: 0};
    var tail = prepareWriteHead_0(dst, 1, null);
    try {
      while (true) {
        var chunk = tail;
        writeFully_12(chunk, chunk, 0);
        var start = i.v;
        var a = i.v + (chunk.limit - chunk.writePosition | 0) | 0;
        var b = $receiver.writePosition;
        var end = Math_0.min(a, b);
        while (true) {
          var tmp$ = i.v < end;
          if (tmp$) {
            var it = array[i.v];
            tmp$ = !(it === delimiter1 || it === delimiter2);
          }
          if (!tmp$) 
            break;
          i.v = i.v + 1 | 0;
        }
        var size = i.v - start | 0;
        asInt8Array(chunk.memory).set(array.subarray(start, i.v), chunk.writePosition);
        chunk.commitWritten_za3lpa$(size);
        copiedTotal.v = copiedTotal.v + size | 0;
        if (!((chunk.limit - chunk.writePosition | 0) === 0 && i.v < end)) 
          break;
        tail = prepareWriteHead_0(dst, 1, tail);
      }
    } finally     {
      afterHeadWrite_0(dst, tail);
    }
    $receiver.discardUntilIndex_kcn2v3$(i.v);
    return copiedTotal.v;
  }
  var readUntilImpl = wrapFunction(function() {
  var Math_0 = Math;
  return function($receiver, predicate, dst, offset, length) {
  var tmp$;
  var array = asInt8Array($receiver.memory);
  var start = $receiver.readPosition;
  var i = start;
  var tmp$_0 = i;
  var b = $receiver.writePosition - $receiver.readPosition | 0;
  var end = tmp$_0 + Math_0.min(length, b) | 0;
  while (i < end && !predicate(array[i])) {
    i = i + 1 | 0;
  }
  var copied = i - start | 0;
  var dstArray = Kotlin.isType(tmp$ = dst, Int8Array) ? tmp$ : throwCCE();
  dstArray.set(array.subarray(start, end), offset);
  $receiver.discardUntilIndex_kcn2v3$(i);
  return copied;
};
});
  var readUntilImpl_0 = wrapFunction(function() {
  var Math_0 = Math;
  var prepareWriteHead = _.io.ktor.utils.io.core.internal.prepareWriteHead_6z8r11$;
  var afterHeadWrite = _.io.ktor.utils.io.core.internal.afterHeadWrite_z1cqja$;
  return function($receiver, predicate, dst) {
  var array = asInt8Array($receiver.memory);
  var i = {
  v: $receiver.readPosition};
  var copiedTotal = {
  v: 0};
  var tail = prepareWriteHead(dst, 1, null);
  try {
    while (true) {
      var chunk = tail;
      writeFully_12(chunk, chunk, 0);
      var start = i.v;
      var a = i.v + (chunk.limit - chunk.writePosition | 0) | 0;
      var b = $receiver.writePosition;
      var end = Math_0.min(a, b);
      while (i.v < end && !predicate(array[i.v])) {
        i.v = i.v + 1 | 0;
      }
      var size = i.v - start | 0;
      asInt8Array(chunk.memory).set(array.subarray(start, i.v), chunk.writePosition);
      chunk.commitWritten_za3lpa$(size);
      copiedTotal.v = copiedTotal.v + size | 0;
      if (!((chunk.limit - chunk.writePosition | 0) === 0 && i.v < end)) 
        break;
      tail = prepareWriteHead(dst, 1, tail);
    }
  } finally   {
    afterHeadWrite(dst, tail);
  }
  $receiver.discardUntilIndex_kcn2v3$(i.v);
  return copiedTotal.v;
};
});
  function String_0(bytes, offset, length, charset) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = bytes.length;
    if (charset === void 0) 
      charset = Charsets_getInstance().UTF_8;
    if (offset < 0 || length < 0 || (offset + length | 0) > bytes.length) {
      checkIndices(offset, length, bytes);
    }
    var i8 = bytes;
    var bufferOffset = i8.byteOffset + offset | 0;
    var buffer = i8.buffer.slice(bufferOffset, bufferOffset + length | 0);
    var view = new IoBuffer(of_0(Memory$Companion_getInstance(), buffer), null);
    view.resetForRead();
    var packet = ByteReadPacket_init(view, ChunkBuffer$Companion_getInstance().NoPoolManuallyManaged_8be2vx$);
    return decode(charset.newDecoder(), packet, 2147483647);
  }
  function checkIndices(offset, length, bytes) {
    if (!(offset >= 0)) {
      throw new IndexOutOfBoundsException('offset (' + offset + ") shouldn't be negative");
    }
    if (!(length >= 0)) {
      throw new IndexOutOfBoundsException('length (' + length + ") shouldn't be negative");
    }
    if (!((offset + length | 0) <= bytes.length)) {
      throw new IndexOutOfBoundsException('offset (' + offset + ') + length (' + length + ') > bytes.size (' + bytes.length + ')');
    }
    throw IndexOutOfBoundsException_init();
  }
  function getCharsInternal($receiver, dst, dstOffset) {
    var tmp$;
    var length = $receiver.length;
    if (!((dstOffset + length | 0) <= dst.length)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    var dstIndex = dstOffset;
    for (var srcIndex = 0; srcIndex < length; srcIndex++) {
      dst[tmp$ = dstIndex , dstIndex = tmp$ + 1 | 0 , tmp$] = $receiver.charCodeAt(srcIndex);
    }
  }
  function IOException(message, cause) {
    Exception.call(this, message, cause);
    this.name = 'IOException';
  }
  IOException.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'IOException', 
  interfaces: [Exception]};
  function IOException_init(message, $this) {
    $this = $this || Object.create(IOException.prototype);
    IOException.call($this, message, null);
    return $this;
  }
  function EOFException(message) {
    IOException_init(message, this);
    this.name = 'EOFException';
  }
  EOFException.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'EOFException', 
  interfaces: [IOException]};
  function readText_5($receiver, encoding, max) {
    if (max === void 0) 
      max = 2147483647;
    return readText_3($receiver, Charset$Companion_getInstance().forName_61zpoe$(encoding), max);
  }
  function readText_6($receiver, encoding, out, max) {
    if (encoding === void 0) 
      encoding = 'UTF-8';
    if (max === void 0) 
      max = 2147483647;
    return readText_1($receiver, out, Charset$Companion_getInstance().forName_61zpoe$(encoding), max);
  }
  var STREAM_TRUE;
  var FATAL_TRUE;
  function TextDecoderFatal(encoding, fatal) {
    if (fatal === void 0) 
      fatal = true;
    if (typeof TextDecoder == 'undefined') {
      var module_0 = require('text-encoding');
      if (module_0.TextDecoder === undefined) 
        throw IllegalStateException_init('TextDecoder is not supported by your browser and no text-encoding module found');
      var ctor = module_0.TextDecoder;
      var objPrototype = Object.create(ctor.prototype);
      return fatal ? ctor.call(objPrototype, encoding, FATAL_TRUE) : ctor.call(objPrototype, encoding);
    }
    return fatal ? new TextDecoder(encoding, FATAL_TRUE) : new TextDecoder(encoding);
  }
  var decodeStream = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.js.decodeStream_n9pbvr$', wrapFunction(function() {
  var MalformedInputException_init = _.io.ktor.utils.io.charsets.MalformedInputException;
  var Throwable = Error;
  return function($receiver, buffer, stream) {
  var tmp$;
  try {
    var tmp$_0;
    if (stream) {
      tmp$_0 = $receiver.decode(buffer, STREAM_TRUE);
    } else {
      tmp$_0 = $receiver.decode(buffer);
    }
    return tmp$_0;
  }  catch (t) {
  if (Kotlin.isType(t, Throwable)) {
    throw new MalformedInputException_init('Failed to decode bytes: ' + ((tmp$ = t.message) != null ? tmp$ : 'no cause provided'));
  } else 
    throw t;
}
};
}));
  var decodeStream_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.js.decodeStream_6h85h0$', wrapFunction(function() {
  var MalformedInputException_init = _.io.ktor.utils.io.charsets.MalformedInputException;
  var Throwable = Error;
  return function($receiver, buffer, stream) {
  var tmp$;
  try {
    var tmp$_0;
    if (stream) {
      tmp$_0 = $receiver.decode(buffer, STREAM_TRUE);
    } else {
      tmp$_0 = $receiver.decode(buffer);
    }
    return tmp$_0;
  }  catch (t) {
  if (Kotlin.isType(t, Throwable)) {
    throw new MalformedInputException_init('Failed to decode bytes: ' + ((tmp$ = t.message) != null ? tmp$ : 'no cause provided'));
  } else 
    throw t;
}
};
}));
  var decodeWrap = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.js.decodeWrap_i3ch5z$', wrapFunction(function() {
  var MalformedInputException_init = _.io.ktor.utils.io.charsets.MalformedInputException;
  var Throwable = Error;
  return function(block) {
  var tmp$;
  try {
    return block();
  }  catch (t) {
  if (Kotlin.isType(t, Throwable)) {
    throw new MalformedInputException_init('Failed to decode bytes: ' + ((tmp$ = t.message) != null ? tmp$ : 'no cause provided'));
  } else 
    throw t;
}
};
}));
  function TextEncoderCtor() {
    if (typeof TextEncoder == 'undefined') {
      var module_0 = require('text-encoding');
      if (module_0.TextEncoder === undefined) 
        throw IllegalStateException_init('TextEncoder is not supported by your browser and no text-encoding module found');
      var ctor = module_0.TextEncoder;
      var objPrototype = Object.create(ctor.prototype);
      return ctor.call(objPrototype);
    }
    return new TextEncoder();
  }
  function readArrayBuffer($receiver, n) {
    if (n === void 0) {
      var $receiver_0 = $receiver.remaining;
      var message = 'Unable to make a new ArrayBuffer: packet is too big';
      if ($receiver_0.compareTo_11rb$(L2147483647) > 0) 
        throw IllegalArgumentException_init(message);
      n = $receiver_0.toInt();
    }
    var buffer = new ArrayBuffer(n);
    readFully_32($receiver, buffer, 0, n);
    return buffer;
  }
  function writeFully_29($receiver, src, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = src.byteLength - offset | 0;
    writeFully_30($receiver, new Int8Array(src), offset, length);
  }
  function writeFully_30($receiver, src, offset, length) {
    if (offset === void 0) 
      offset = 0;
    if (length === void 0) 
      length = src.length - offset | 0;
    var written = {
  v: 0};
    var rem = {
  v: length};
    while (rem.v > 0) {
      var buffer = $receiver.prepareWriteHead_za3lpa$(1);
      try {
        var a = buffer.limit - buffer.writePosition | 0;
        var b = rem.v;
        var size = Math_0.min(a, b);
        writeFully_28(buffer, src, written.v + offset | 0, size);
        written.v = written.v + size | 0;
        rem.v = rem.v - size | 0;
        if (!(size >= 0)) {
          var message = "The returned value shouldn't be negative";
          throw IllegalStateException_init(message.toString());
        }
      } finally       {
        $receiver.afterHeadWrite();
      }
    }
  }
  function sendPacket($receiver, packet) {
    $receiver.send(readArrayBuffer(packet));
  }
  var sendPacket_0 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.js.sendPacket_3qvznb$', wrapFunction(function() {
  var sendPacket = _.io.ktor.utils.io.js.sendPacket_ac3gnr$;
  var BytePacketBuilder = _.io.ktor.utils.io.core.BytePacketBuilder_za3lpa$;
  var Throwable = Error;
  return function($receiver, block) {
  var buildPacket$result;
  var builder = BytePacketBuilder(0);
  try {
    block(builder);
    buildPacket$result = builder.build();
  }  catch (t) {
  if (Kotlin.isType(t, Throwable)) {
    builder.release();
    throw t;
  } else 
    throw t;
}
  sendPacket($receiver, buildPacket$result);
};
}));
  var packet = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.js.packet_lwnq0v$', wrapFunction(function() {
  var Memory = _.io.ktor.utils.io.bits.Memory;
  var DataView_0 = DataView;
  var throwCCE = Kotlin.throwCCE;
  var of = _.io.ktor.utils.io.bits.of_qdokgt$;
  var IoBuffer_init = _.io.ktor.utils.io.core.IoBuffer;
  var ChunkBuffer = _.io.ktor.utils.io.core.internal.ChunkBuffer;
  var ByteReadPacket_init = _.io.ktor.utils.io.core.ByteReadPacket_init_mfe2hi$;
  return function($receiver) {
  var tmp$;
  return ByteReadPacket_init(new IoBuffer_init(of(Memory.Companion, Kotlin.isType(tmp$ = $receiver.data, DataView_0) ? tmp$ : throwCCE()), null), ChunkBuffer.Companion.NoPool_8be2vx$);
};
}));
  var sendPacket_1 = defineInlineFunction('ktor-ktor-io.io.ktor.utils.io.js.sendPacket_xzmm9y$', wrapFunction(function() {
  var sendPacket = _.io.ktor.utils.io.js.sendPacket_f89g06$;
  var BytePacketBuilder = _.io.ktor.utils.io.core.BytePacketBuilder_za3lpa$;
  var Throwable = Error;
  return function($receiver, block) {
  var buildPacket$result;
  var builder = BytePacketBuilder(0);
  try {
    block(builder);
    buildPacket$result = builder.build();
  }  catch (t) {
  if (Kotlin.isType(t, Throwable)) {
    builder.release();
    throw t;
  } else 
    throw t;
}
  sendPacket($receiver, buildPacket$result);
};
}));
  function sendPacket_2($receiver, packet) {
    $receiver.send(readArrayBuffer(packet));
  }
  function responsePacket($receiver) {
    var tmp$, tmp$_0;
    tmp$ = $receiver.responseType;
    if (equals(tmp$, 'arraybuffer')) {
      return ByteReadPacket_init(new IoBuffer(of_1(Memory$Companion_getInstance(), Kotlin.isType(tmp$_0 = $receiver.response, DataView) ? tmp$_0 : throwCCE()), null), ChunkBuffer$Companion_getInstance().NoPoolManuallyManaged_8be2vx$);
    } else {
      if (equals(tmp$, '')) 
        return ByteReadPacket$Companion_getInstance().Empty;
      else 
        throw IllegalStateException_init('Incompatible type ' + $receiver.responseType + ': only ARRAYBUFFER and EMPTY are supported');
    }
  }
  function DefaultPool(capacity) {
    this.capacity_7nvyry$_0 = capacity;
    this.instances_j5hzgy$_0 = Kotlin.newArray(this.capacity, null);
    this.size_p9jgx3$_0 = 0;
  }
  Object.defineProperty(DefaultPool.prototype, 'capacity', {
  get: function() {
  return this.capacity_7nvyry$_0;
}});
  DefaultPool.prototype.disposeInstance_trkh7z$ = function(instance) {
};
  DefaultPool.prototype.clearInstance_trkh7z$ = function(instance) {
  return instance;
};
  DefaultPool.prototype.validateInstance_trkh7z$ = function(instance) {
};
  DefaultPool.prototype.borrow = function() {
  var tmp$;
  if (this.size_p9jgx3$_0 === 0) 
    return this.produceInstance();
  var idx = (this.size_p9jgx3$_0 = this.size_p9jgx3$_0 - 1 | 0 , this.size_p9jgx3$_0);
  var instance = Kotlin.isType(tmp$ = this.instances_j5hzgy$_0[idx], Any) ? tmp$ : throwCCE();
  this.instances_j5hzgy$_0[idx] = null;
  return this.clearInstance_trkh7z$(instance);
};
  DefaultPool.prototype.recycle_trkh7z$ = function(instance) {
  var tmp$;
  this.validateInstance_trkh7z$(instance);
  if (this.size_p9jgx3$_0 === this.capacity) {
    this.disposeInstance_trkh7z$(instance);
  } else {
    this.instances_j5hzgy$_0[tmp$ = this.size_p9jgx3$_0 , this.size_p9jgx3$_0 = tmp$ + 1 | 0 , tmp$] = instance;
  }
};
  DefaultPool.prototype.dispose = function() {
  var tmp$, tmp$_0;
  tmp$ = this.size_p9jgx3$_0;
  for (var i = 0; i < tmp$; i++) {
    var instance = Kotlin.isType(tmp$_0 = this.instances_j5hzgy$_0[i], Any) ? tmp$_0 : throwCCE();
    this.instances_j5hzgy$_0[i] = null;
    this.disposeInstance_trkh7z$(instance);
  }
  this.size_p9jgx3$_0 = 0;
};
  DefaultPool.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'DefaultPool', 
  interfaces: [ObjectPool]};
  var package$io = _.io || (_.io = {});
  var package$ktor = package$io.ktor || (package$io.ktor = {});
  var package$utils = package$ktor.utils || (package$ktor.utils = {});
  var package$io_0 = package$utils.io || (package$utils.io = {});
  package$io_0.ByteChannel = ByteChannel;
  $$importsForInline$$['ktor-ktor-io'] = _;
  package$io_0.ByteReadChannel_393iu0$ = ByteReadChannel;
  Object.defineProperty(package$io_0, 'EmptyByteReadChannel', {
  get: get_EmptyByteReadChannel});
  package$io_0.joinTo_3a4qpk$ = joinTo;
  package$io_0.copyTo_boes2c$ = copyTo;
  package$io_0.ByteChannelSequentialBase_init_vv7kl9$ = ByteChannelSequentialBase_init;
  package$io_0.ByteChannelSequentialBase = ByteChannelSequentialBase;
  package$io_0.readPacket_78elpf$ = readPacket;
  package$io_0.readRemaining_b56lbm$ = readRemaining;
  package$io_0.readRemaining_3dmw3p$ = readRemaining_0;
  package$io_0.readFully_qj0znj$ = readFully;
  package$io_0.readUTF8LineTo_4egipv$ = readUTF8LineTo;
  package$io_0.readUTF8Line_3dmw3p$ = readUTF8Line;
  package$io_0.cancel_3dmw3p$ = cancel;
  package$io_0.discard_3dmw3p$ = discard;
  package$io_0.discardExact_b56lbm$ = discardExact;
  package$io_0.readAvailable_vg4m8x$ = readAvailable;
  package$io_0.readFully_vg4m8x$ = readFully_0;
  package$io_0.copyAndClose_47ygvz$ = copyAndClose;
  package$io_0.writeAvailable_4scpqu$ = writeAvailable;
  package$io_0.writeFully_4scpqu$ = writeFully;
  package$io_0.writeShort_9tm6dw$ = writeShort;
  package$io_0.writeShort_52ussw$ = writeShort_0;
  package$io_0.writeByte_9tm6dw$ = writeByte;
  package$io_0.writeInt_kdp7p3$ = writeInt;
  package$io_0.writeInt_rhax59$ = writeInt_0;
  package$io_0.close_x5qia6$ = close;
  package$io_0.writeStringUtf8_83w8vm$ = writeStringUtf8;
  package$io_0.writeStringUtf8_fevoqc$ = writeStringUtf8_0;
  package$io_0.writeBoolean_jfqc8j$ = writeBoolean;
  package$io_0.writeChar_kdjbbl$ = writeChar;
  var package$core = package$io_0.core || (package$io_0.core = {});
  package$core.buildPacket_1pjhv2$ = buildPacket;
  package$io_0.writePacket_c7ucec$ = writePacket;
  package$io_0.writePacketSuspend_n0e0ds$ = writePacketSuspend;
  package$io_0.ClosedWriteChannelException = ClosedWriteChannelException;
  var package$bits = package$io_0.bits || (package$io_0.bits = {});
  package$bits.reverseByteOrder_5vcgdc$ = reverseByteOrder_2;
  package$io_0.reverseIfNeeded_xs36oz$ = reverseIfNeeded;
  package$io_0.readShort_e2pdtf$ = readShort;
  package$bits.reverseByteOrder_s8ev3n$ = reverseByteOrder_3;
  package$io_0.readInt_e2pdtf$ = readInt;
  package$bits.reverseByteOrder_mts6qi$ = reverseByteOrder_4;
  package$io_0.readLong_e2pdtf$ = readLong;
  package$bits.reverseByteOrder_81szk$ = reverseByteOrder_5;
  package$io_0.readFloat_e2pdtf$ = readFloat;
  package$bits.reverseByteOrder_yrwdxr$ = reverseByteOrder_6;
  package$io_0.readDouble_e2pdtf$ = readDouble;
  package$io_0.toLittleEndian_npz7h3$ = toLittleEndian;
  package$io_0.readShortLittleEndian_3dmw3p$ = readShortLittleEndian;
  package$io_0.readIntLittleEndian_3dmw3p$ = readIntLittleEndian;
  package$io_0.readLongLittleEndian_3dmw3p$ = readLongLittleEndian;
  package$io_0.readFloatLittleEndian_3dmw3p$ = readFloatLittleEndian;
  package$io_0.readDoubleLittleEndian_3dmw3p$ = readDoubleLittleEndian;
  package$io_0.writeShort_aq3jvn$ = writeShort_1;
  package$io_0.writeInt_52ussw$ = writeInt_1;
  package$io_0.writeLong_rhax59$ = writeLong;
  package$io_0.writeFloat_rtue0z$ = writeFloat;
  package$io_0.writeDouble_qt7dfc$ = writeDouble;
  package$io_0.writeShortLittleEndian_7dkqu7$ = writeShortLittleEndian;
  package$io_0.writeIntLittleEndian_9tm6dw$ = writeIntLittleEndian;
  package$io_0.writeLongLittleEndian_kdp7p3$ = writeLongLittleEndian;
  package$io_0.writeFloatLittleEndian_7knj0f$ = writeFloatLittleEndian;
  package$io_0.writeDoubleLittleEndian_ml97w4$ = writeDoubleLittleEndian;
  package$core.ByteOrder = ByteOrder;
  package$io_0.ReaderJob = ReaderJob;
  package$io_0.WriterJob = WriterJob;
  package$io_0.ReaderScope = ReaderScope;
  package$io_0.WriterScope = WriterScope;
  package$io_0.reader_m3zfrx$ = reader;
  package$io_0.reader_ps9zta$ = reader_0;
  package$io_0.reader_xq9ruu$ = reader_1;
  package$io_0.reader_6qg13d$ = reader_2;
  package$io_0.writer_tkzhm5$ = writer;
  package$io_0.writer_x9a1ni$ = writer_0;
  package$io_0.writer_ttu8a2$ = writer_1;
  package$io_0.writer_qk0qv$ = writer_2;
  package$io_0.requestBuffer_78elpf$ = requestBuffer;
  package$core.Buffer = Buffer;
  package$io_0.completeReadingFromBuffer_6msh3s$ = completeReadingFromBuffer;
  package$io_0.read_ons6h$ = read;
  package$io_0.ReadSession = ReadSession;
  package$io_0.SuspendableReadSession = SuspendableReadSession;
  package$io_0.HasReadSession = HasReadSession;
  package$io_0.requestWriteBuffer_9tm6dw$ = requestWriteBuffer;
  package$io_0.completeWriting_oczduq$ = completeWriting;
  package$io_0.write_k0oolq$ = write;
  package$io_0.WriterSession = WriterSession;
  package$io_0.WriterSuspendSession = WriterSuspendSession;
  package$io_0.HasWriteSession = HasWriteSession;
  package$bits.reverseByteOrder_bso16t$ = reverseByteOrder;
  package$bits.reverseByteOrder_mpial4$ = reverseByteOrder_0;
  package$bits.reverseByteOrder_6e1d9n$ = reverseByteOrder_1;
  package$bits.get_highByte_5vcgdc$ = get_highByte;
  package$bits.get_lowByte_5vcgdc$ = get_lowByte;
  package$bits.get_highShort_s8ev3n$ = get_highShort;
  package$bits.get_lowShort_s8ev3n$ = get_lowShort;
  package$bits.get_highInt_mts6qi$ = get_highInt;
  package$bits.get_lowInt_mts6qi$ = get_lowInt;
  package$bits.get_ad7opl$ = get_0;
  package$bits.get_xrw27i$ = get_1;
  package$bits.set_x25fc5$ = set;
  package$bits.set_gx2x5q$ = set_0;
  package$bits.storeAt_u5mcnq$ = storeAt;
  package$bits.storeAt_r092yl$ = storeAt_0;
  package$bits.withMemory_ksmduh$ = withMemory_0;
  package$bits.withMemory_24cc00$ = withMemory;
  package$bits.Allocator = Allocator;
  package$bits.loadShortAt_ad7opl$ = loadShortAt;
  package$bits.loadUShortAt_ad7opl$ = loadUShortAt;
  package$bits.loadShortAt_xrw27i$ = loadShortAt_0;
  package$bits.loadUShortAt_xrw27i$ = loadUShortAt_0;
  package$bits.storeShortAt_r0om3i$ = storeShortAt;
  package$bits.storeUShortAt_feknxd$ = storeUShortAt;
  package$bits.storeShortAt_u61vsn$ = storeShortAt_0;
  package$bits.storeUShortAt_b6qmqu$ = storeUShortAt_0;
  package$bits.loadIntAt_ad7opl$ = loadIntAt;
  package$bits.loadUIntAt_ad7opl$ = loadUIntAt;
  package$bits.loadIntAt_xrw27i$ = loadIntAt_0;
  package$bits.loadUIntAt_xrw27i$ = loadUIntAt_0;
  package$bits.storeIntAt_vj6iol$ = storeIntAt;
  package$bits.storeUIntAt_gwrs4s$ = storeUIntAt;
  package$bits.storeIntAt_qfgmm4$ = storeIntAt_0;
  package$bits.storeUIntAt_x1uab7$ = storeUIntAt_0;
  package$bits.loadLongAt_ad7opl$ = loadLongAt;
  package$bits.loadULongAt_ad7opl$ = loadULongAt;
  package$bits.loadLongAt_xrw27i$ = loadLongAt_0;
  package$bits.loadULongAt_xrw27i$ = loadULongAt_0;
  package$bits.storeLongAt_gwwqui$ = storeLongAt;
  package$bits.storeULongAt_r02wnd$ = storeULongAt;
  package$bits.storeLongAt_x1z90x$ = storeLongAt_0;
  package$bits.storeULongAt_u5g6ci$ = storeULongAt_0;
  package$bits.copyTo_tiw1kd$ = copyTo_2;
  package$bits.loadByteArray_ngtxw7$ = loadByteArray;
  package$bits.copyTo_yqt5go$ = copyTo_3;
  package$bits.loadByteArray_dy6oua$ = loadByteArray_0;
  package$bits.loadUByteArray_moiot2$ = loadUByteArray;
  package$bits.loadUByteArray_r80dt$ = loadUByteArray_0;
  package$bits.loadShortArray_8jnas7$ = loadShortArray;
  package$bits.loadUShortArray_fu1ix4$ = loadUShortArray;
  package$bits.loadShortArray_ew3eeo$ = loadShortArray_0;
  package$bits.loadUShortArray_w2wo2p$ = loadUShortArray_0;
  package$bits.loadIntArray_kz60l8$ = loadIntArray;
  package$bits.loadUIntArray_795lej$ = loadUIntArray;
  package$bits.loadIntArray_qrle83$ = loadIntArray_0;
  package$bits.loadUIntArray_qcxtu4$ = loadUIntArray_0;
  package$bits.loadLongArray_2ervmr$ = loadLongArray;
  package$bits.loadULongArray_1mgmjm$ = loadULongArray;
  package$bits.loadLongArray_z08r3q$ = loadLongArray_0;
  package$bits.loadULongArray_lta2n9$ = loadULongArray_0;
  package$bits.useMemory_jjtqwx$ = useMemory;
  package$bits.storeByteArray_ngtxw7$ = storeByteArray;
  package$bits.storeByteArray_dy6oua$ = storeByteArray_0;
  package$bits.storeUByteArray_moiot2$ = storeUByteArray;
  package$bits.storeUByteArray_r80dt$ = storeUByteArray_0;
  package$bits.storeShortArray_8jnas7$ = storeShortArray;
  package$bits.storeUShortArray_fu1ix4$ = storeUShortArray;
  package$bits.storeShortArray_ew3eeo$ = storeShortArray_0;
  package$bits.storeUShortArray_w2wo2p$ = storeUShortArray_0;
  package$bits.storeIntArray_kz60l8$ = storeIntArray;
  package$bits.storeUIntArray_795lej$ = storeUIntArray;
  package$bits.storeIntArray_qrle83$ = storeIntArray_0;
  package$bits.storeUIntArray_qcxtu4$ = storeUIntArray_0;
  package$bits.storeLongArray_2ervmr$ = storeLongArray;
  package$bits.storeULongArray_1mgmjm$ = storeULongArray;
  package$bits.storeLongArray_z08r3q$ = storeLongArray_0;
  package$bits.storeULongArray_lta2n9$ = storeULongArray_0;
  var package$charsets = package$io_0.charsets || (package$io_0.charsets = {});
  package$charsets.encode_6xuvjk$ = encode;
  package$charsets.encodeToByteArrayImpl_fj4osb$ = encodeToByteArrayImpl;
  package$charsets.encode_fj4osb$ = encode_0;
  package$charsets.encodeUTF8_45773h$ = encodeUTF8;
  package$charsets.encode_ufq2gc$ = encode_1;
  package$charsets.decode_lb8wo3$ = decode;
  package$charsets.encodeArrayImpl_bptnt4$ = encodeArrayImpl;
  package$charsets.encodeToByteArrayImpl1_5lnu54$ = encodeToByteArrayImpl1;
  package$charsets.sizeEstimate_i9ek5c$ = sizeEstimate;
  package$charsets.encodeToImpl_nctdml$ = encodeToImpl;
  package$core.read_q4ikbw$ = read_1;
  Object.defineProperty(AbstractInput, 'Companion', {
  get: AbstractInput$Companion_getInstance});
  package$core.AbstractInput_init_njy0gf$ = AbstractInput_init;
  package$core.AbstractInput = AbstractInput;
  package$core.AbstractOutput_init_2bs5fo$ = AbstractOutput_init;
  package$core.AbstractOutput_init = AbstractOutput_init_0;
  package$core.AbstractOutput = AbstractOutput;
  Object.defineProperty(Buffer, 'Companion', {
  get: Buffer$Companion_getInstance});
  package$core.canRead_abnlgx$ = canRead;
  package$core.canWrite_abnlgx$ = canWrite;
  package$core.read_kmyesx$ = read_0;
  package$core.write_kmyesx$ = write_0;
  package$core.discardFailed_6xvm5r$ = discardFailed;
  package$core.commitWrittenFailed_6xvm5r$ = commitWrittenFailed;
  package$core.rewindFailed_6xvm5r$ = rewindFailed;
  package$core.startGapReservationFailedDueToLimit_g087h2$ = startGapReservationFailedDueToLimit;
  package$core.startGapReservationFailed_g087h2$ = startGapReservationFailed;
  package$core.endGapReservationFailedDueToCapacity_g087h2$ = endGapReservationFailedDueToCapacity;
  package$core.endGapReservationFailedDueToStartGap_g087h2$ = endGapReservationFailedDueToStartGap;
  package$core.endGapReservationFailedDueToContent_g087h2$ = endGapReservationFailedDueToContent;
  package$core.restoreStartGap_g087h2$ = restoreStartGap;
  package$core.InsufficientSpaceException_init_vux9f0$ = InsufficientSpaceException_init;
  package$core.InsufficientSpaceException_init_3m52m6$ = InsufficientSpaceException_init_0;
  package$core.InsufficientSpaceException_init_3pjtqy$ = InsufficientSpaceException_init_1;
  package$core.InsufficientSpaceException = InsufficientSpaceException;
  package$core.writeBufferAppend_eajdjw$ = writeBufferAppend;
  package$core.writeBufferPrepend_tfs7w2$ = writeBufferPrepend;
  package$core.fill_ffmap0$ = fill;
  package$core.fill_j129ft$ = fill_0;
  package$core.fill_cz5x29$ = fill_1;
  package$core.pushBack_cni1rh$ = pushBack;
  package$core.makeView_abnlgx$ = makeView;
  package$core.makeView_n6y6i3$ = makeView_0;
  package$core.flush_abnlgx$ = flush;
  package$core.appendChars_uz44xi$ = appendChars;
  package$core.appendChars_ske834$ = appendChars_0;
  package$core.append_xy0ugi$ = append;
  package$core.append_mhxg24$ = append_0;
  package$core.append_j2nfp0$ = append_1;
  package$core.append_luj41z$ = append_2;
  package$core.readText_ky2b9g$ = readText;
  package$core.release_3omthh$ = release;
  package$core.tryPeek_abnlgx$ = tryPeek;
  package$core.readFully_e6hzc$ = readFully_1;
  package$core.get_byteOrder_abnlgx$ = get_byteOrder;
  package$core.set_byteOrder_t6om09$ = set_byteOrder;
  Object.defineProperty(package$core, 'DEFAULT_BUFFER_SIZE_8be2vx$', {
  get: function() {
  return DEFAULT_BUFFER_SIZE;
}});
  package$core.withBuffer_3o3i6e$ = withBuffer;
  package$core.withBuffer_75fp88$ = withBuffer_0;
  package$core.withChunkBuffer_24tmir$ = withChunkBuffer;
  Object.defineProperty(package$core, 'DefaultChunkedBufferPool_8be2vx$', {
  get: function() {
  return DefaultChunkedBufferPool;
}});
  package$core.DefaultBufferPool = DefaultBufferPool;
  package$core.forEach_13x7pp$ = forEach;
  package$core.readUByte_abnlgx$ = readUByte;
  package$core.readUByte_396eqd$ = readUByte_0;
  package$core.writeUByte_cwq2bj$ = writeUByte;
  package$core.writeUByte_89eeh1$ = writeUByte_0;
  package$core.readShort_abnlgx$ = readShort_0;
  package$core.readShort_396eqd$ = readShort_1;
  package$core.readUShort_abnlgx$ = readUShort;
  package$core.readUShort_396eqd$ = readUShort_0;
  package$core.readInt_abnlgx$ = readInt_0;
  package$core.readInt_396eqd$ = readInt_1;
  package$core.readUInt_abnlgx$ = readUInt;
  package$core.readUInt_396eqd$ = readUInt_0;
  package$core.readLong_abnlgx$ = readLong_0;
  package$core.readLong_396eqd$ = readLong_1;
  package$core.readULong_abnlgx$ = readULong;
  package$core.readULong_396eqd$ = readULong_0;
  package$core.readFloat_abnlgx$ = readFloat_0;
  package$core.readFloat_396eqd$ = readFloat_1;
  package$core.readDouble_abnlgx$ = readDouble_0;
  package$core.readDouble_396eqd$ = readDouble_1;
  package$core.writeShort_cx5lgg$ = writeShort_2;
  package$core.writeShort_89txly$ = writeShort_3;
  package$core.writeUShort_q99vxf$ = writeUShort;
  package$core.writeUShort_sa3b8p$ = writeUShort_0;
  package$core.writeInt_cni1rh$ = writeInt_2;
  package$core.writeInt_q5mzkd$ = writeInt_3;
  package$core.writeUInt_xybpjq$ = writeUInt;
  package$core.writeUInt_tiqx5o$ = writeUInt_0;
  package$core.writeLong_xy6qu0$ = writeLong_0;
  package$core.writeLong_tilyfy$ = writeLong_1;
  package$core.writeULong_cwjw0b$ = writeULong;
  package$core.writeULong_89885t$ = writeULong_0;
  package$core.writeFloat_d48dmo$ = writeFloat_0;
  package$core.writeFloat_8gwps6$ = writeFloat_1;
  package$core.writeDouble_in4kvh$ = writeDouble_0;
  package$core.writeDouble_kny06r$ = writeDouble_1;
  package$core.readFully_7ntqvp$ = readFully_2;
  package$core.readFully_ou1upd$ = readFully_3;
  package$core.readFully_tx517c$ = readFully_4;
  package$core.readAvailable_7ntqvp$ = readAvailable_0;
  package$core.readAvailable_ou1upd$ = readAvailable_1;
  package$core.readAvailable_tx517c$ = readAvailable_2;
  package$core.writeFully_7ntqvp$ = writeFully_0;
  package$core.writeFully_ou1upd$ = writeFully_1;
  package$core.writeFully_tx517c$ = writeFully_2;
  package$core.readFully_fs9n6h$ = readFully_5;
  package$core.readFully_4i50ju$ = readFully_6;
  package$core.readAvailable_fs9n6h$ = readAvailable_3;
  package$core.readAvailable_4i50ju$ = readAvailable_4;
  package$core.writeFully_fs9n6h$ = writeFully_3;
  package$core.writeFully_4i50ju$ = writeFully_4;
  package$core.readFully_lhisoq$ = readFully_7;
  package$core.readFully_n25sf1$ = readFully_8;
  package$core.readAvailable_lhisoq$ = readAvailable_5;
  package$core.readAvailable_n25sf1$ = readAvailable_6;
  package$core.writeFully_lhisoq$ = writeFully_5;
  package$core.writeFully_n25sf1$ = writeFully_6;
  package$core.readFully_de8bdr$ = readFully_9;
  package$core.readFully_8v2yxw$ = readFully_10;
  package$core.readAvailable_de8bdr$ = readAvailable_7;
  package$core.readAvailable_8v2yxw$ = readAvailable_8;
  package$core.writeFully_de8bdr$ = writeFully_7;
  package$core.writeFully_8v2yxw$ = writeFully_8;
  package$core.readFully_7tydzb$ = readFully_11;
  package$core.readAvailable_7tydzb$ = readAvailable_9;
  package$core.writeFully_7tydzb$ = writeFully_9;
  package$core.readFully_u5abqk$ = readFully_12;
  package$core.readAvailable_u5abqk$ = readAvailable_10;
  package$core.writeFully_u5abqk$ = writeFully_10;
  package$core.readFully_i3yunz$ = readFully_13;
  package$core.readAvailable_i3yunz$ = readAvailable_11;
  package$core.writeFully_kxmhld$ = writeFully_11;
  package$core.writeFully_i3yunz$ = writeFully_12;
  var package$internal = package$core.internal || (package$core.internal = {});
  package$internal.require_87ejdh$ = require_0;
  package$core.readExact_j0s9s1$ = readExact;
  package$core.writeExact_n5pafo$ = writeExact;
  package$core.readBytes_cni1rh$ = readBytes;
  package$core.releaseImpl_gbs9h4$ = releaseImpl;
  Object.defineProperty(package$core, 'EmptyBufferPoolImpl', {
  get: EmptyBufferPoolImpl_getInstance});
  package$core.releaseAll_dgux4l$ = releaseAll;
  package$core.forEachChunk_dkrrtn$ = forEachChunk;
  package$core.copyAll_kx8gx4$ = copyAll;
  package$core.findTail_kx8gx4$ = findTail;
  package$core.remainingAll_n6y6i3$ = remainingAll;
  package$core.remainingAll_99qa0s$ = remainingAll_0;
  package$core.isEmpty_kx8gx4$ = isEmpty;
  package$core.coerceAtMostMaxInt_nzsbcz$ = coerceAtMostMaxInt;
  package$core.coerceAtMostMaxIntOrFail_z4ke79$ = coerceAtMostMaxIntOrFail;
  package$core.peekTo_twshuo$ = peekTo;
  package$core.BufferLimitExceededException = BufferLimitExceededException;
  package$core.BytePacketBuilder_za3lpa$ = BytePacketBuilder_0;
  package$core.reset_en5wxq$ = reset;
  package$core.BytePacketBuilderPlatformBase = BytePacketBuilderPlatformBase;
  package$core.BytePacketBuilderBase = BytePacketBuilderBase;
  package$core.BytePacketBuilder = BytePacketBuilder;
  Object.defineProperty(ByteReadPacket, 'Companion', {
  get: ByteReadPacket$Companion_getInstance});
  package$core.ByteReadPacket_init_mfe2hi$ = ByteReadPacket_init;
  package$core.ByteReadPacket_init_bioeb0$ = ByteReadPacket_init_0;
  package$core.ByteReadPacket = ByteReadPacket;
  package$core.ByteReadPacketPlatformBase_init_njy0gf$ = ByteReadPacketPlatformBase_init;
  package$core.ByteReadPacketPlatformBase = ByteReadPacketPlatformBase;
  package$core.ByteReadPacket_1qge3v$ = ByteReadPacket_1;
  package$core.ByteReadPacket_mj6st8$ = ByteReadPacket_0;
  package$core.addSuppressedInternal_oh0dqn$ = addSuppressedInternal;
  package$core.use_jh8f9t$ = use;
  package$core.copyTo_tc38ta$ = copyTo_0;
  package$core.ExperimentalIoApi = ExperimentalIoApi;
  package$core.discard_7wsnj1$ = discard_0;
  package$core.discardExact_nd91nq$ = discardExact_0;
  package$core.discardExact_j319xh$ = discardExact_1;
  package$internal.prepareReadFirstHead_j319xh$ = prepareReadFirstHead;
  package$internal.prepareReadNextHead_x2nit9$ = prepareReadNextHead;
  package$internal.completeReadHead_x2nit9$ = completeReadHead_0;
  package$core.takeWhile_nkhzd2$ = takeWhile;
  package$core.takeWhileSize_y109dn$ = takeWhileSize;
  package$core.peekCharUtf8_7wsnj1$ = peekCharUtf8;
  package$core.forEach_xalon3$ = forEach_0;
  package$core.readAvailable_tx93nr$ = readAvailable_12;
  package$core.readAvailableOld_ja303r$ = readAvailableOld;
  package$core.readAvailableOld_ksob8n$ = readAvailableOld_0;
  package$core.readAvailableOld_8ob2ms$ = readAvailableOld_1;
  package$core.readAvailableOld_1rz25p$ = readAvailableOld_2;
  package$core.readAvailableOld_2tjpx5$ = readAvailableOld_3;
  package$core.readAvailableOld_rlf4bm$ = readAvailableOld_4;
  package$core.readFully_tx93nr$ = readFully_14;
  package$core.readFullyOld_ja303r$ = readFullyOld;
  package$core.readFullyOld_ksob8n$ = readFullyOld_0;
  package$core.readFullyOld_8ob2ms$ = readFullyOld_1;
  package$core.readFullyOld_1rz25p$ = readFullyOld_2;
  package$core.readFullyOld_2tjpx5$ = readFullyOld_3;
  package$core.readFullyOld_rlf4bm$ = readFullyOld_4;
  package$core.readFully_ja303r$ = readFully_15;
  package$core.readFully_ksob8n$ = readFully_16;
  package$core.readFully_8ob2ms$ = readFully_17;
  package$core.readFully_1rz25p$ = readFully_18;
  package$core.readFully_2tjpx5$ = readFully_19;
  package$core.readFully_rlf4bm$ = readFully_20;
  package$core.readFully_n4diq5$ = readFully_21;
  package$core.readFully_em5cpx$ = readFully_22;
  package$core.readFully_czhrh1$ = readFully_23;
  package$core.readAvailable_ja303r$ = readAvailable_13;
  package$core.readAvailable_ksob8n$ = readAvailable_14;
  package$core.readAvailable_8ob2ms$ = readAvailable_15;
  package$core.readAvailable_1rz25p$ = readAvailable_16;
  package$core.readAvailable_2tjpx5$ = readAvailable_17;
  package$core.readAvailable_rlf4bm$ = readAvailable_18;
  package$core.readAvailable_n4diq5$ = readAvailable_19;
  package$core.readAvailable_em5cpx$ = readAvailable_20;
  package$core.readAvailable_czhrh1$ = readAvailable_21;
  package$core.readShort_l8hihx$ = readShort_2;
  package$core.readInt_l8hihx$ = readInt_2;
  package$core.readLong_l8hihx$ = readLong_2;
  package$core.readFloat_l8hihx$ = readFloat_2;
  package$core.readDouble_l8hihx$ = readDouble_2;
  package$core.readShortLittleEndian_7wsnj1$ = readShortLittleEndian_0;
  package$core.readIntLittleEndian_7wsnj1$ = readIntLittleEndian_0;
  package$core.readLongLittleEndian_7wsnj1$ = readLongLittleEndian_0;
  package$core.readFloatLittleEndian_7wsnj1$ = readFloatLittleEndian_0;
  package$core.readDoubleLittleEndian_7wsnj1$ = readDoubleLittleEndian_0;
  package$core.readShortLittleEndian_abnlgx$ = readShortLittleEndian_1;
  package$core.readIntLittleEndian_abnlgx$ = readIntLittleEndian_1;
  package$core.readLongLittleEndian_abnlgx$ = readLongLittleEndian_1;
  package$core.readFloatLittleEndian_abnlgx$ = readFloatLittleEndian_1;
  package$core.readDoubleLittleEndian_abnlgx$ = readDoubleLittleEndian_1;
  package$core.readFullyLittleEndian_8s9ld4$ = readFullyLittleEndian;
  package$core.readFullyLittleEndian_ksob8n$ = readFullyLittleEndian_0;
  package$core.readFullyLittleEndian_bfwj6z$ = readFullyLittleEndian_1;
  package$core.readFullyLittleEndian_8ob2ms$ = readFullyLittleEndian_2;
  package$core.readFullyLittleEndian_dvhn02$ = readFullyLittleEndian_3;
  package$core.readFullyLittleEndian_1rz25p$ = readFullyLittleEndian_4;
  package$core.readFullyLittleEndian_2tjpx5$ = readFullyLittleEndian_5;
  package$core.readFullyLittleEndian_rlf4bm$ = readFullyLittleEndian_6;
  package$core.readAvailableLittleEndian_8s9ld4$ = readAvailableLittleEndian;
  package$core.readAvailableLittleEndian_ksob8n$ = readAvailableLittleEndian_0;
  package$core.readAvailableLittleEndian_bfwj6z$ = readAvailableLittleEndian_1;
  package$core.readAvailableLittleEndian_8ob2ms$ = readAvailableLittleEndian_2;
  package$core.readAvailableLittleEndian_dvhn02$ = readAvailableLittleEndian_3;
  package$core.readAvailableLittleEndian_1rz25p$ = readAvailableLittleEndian_4;
  package$core.readAvailableLittleEndian_2tjpx5$ = readAvailableLittleEndian_5;
  package$core.readAvailableLittleEndian_rlf4bm$ = readAvailableLittleEndian_6;
  package$core.readFullyLittleEndian_4i50ju$ = readFullyLittleEndian_7;
  package$core.readFullyLittleEndian_fs9n6h$ = readFullyLittleEndian_8;
  package$core.readFullyLittleEndian_n25sf1$ = readFullyLittleEndian_9;
  package$core.readFullyLittleEndian_lhisoq$ = readFullyLittleEndian_10;
  package$core.readFullyLittleEndian_8v2yxw$ = readFullyLittleEndian_11;
  package$core.readFullyLittleEndian_de8bdr$ = readFullyLittleEndian_12;
  package$core.readFullyLittleEndian_7tydzb$ = readFullyLittleEndian_13;
  package$core.readFullyLittleEndian_u5abqk$ = readFullyLittleEndian_14;
  package$core.readAvailableLittleEndian_4i50ju$ = readAvailableLittleEndian_7;
  package$core.readAvailableLittleEndian_fs9n6h$ = readAvailableLittleEndian_8;
  package$core.readAvailableLittleEndian_n25sf1$ = readAvailableLittleEndian_9;
  package$core.readAvailableLittleEndian_lhisoq$ = readAvailableLittleEndian_10;
  package$core.readAvailableLittleEndian_8v2yxw$ = readAvailableLittleEndian_11;
  package$core.readAvailableLittleEndian_de8bdr$ = readAvailableLittleEndian_12;
  package$core.readAvailableLittleEndian_7tydzb$ = readAvailableLittleEndian_13;
  package$core.readAvailableLittleEndian_u5abqk$ = readAvailableLittleEndian_14;
  package$core.peekTo_cg8jeh$ = peekTo_0;
  package$core.peekTo_6v858t$ = peekTo_1;
  package$core.readShort_7wsnj1$ = readShort_3;
  package$core.readInt_7wsnj1$ = readInt_3;
  package$core.readLong_7wsnj1$ = readLong_3;
  package$core.readFloat_7wsnj1$ = readFloat_3;
  package$core.readFloatFallback_7wsnj1$ = readFloatFallback;
  package$core.readDouble_7wsnj1$ = readDouble_3;
  package$core.readDoubleFallback_7wsnj1$ = readDoubleFallback;
  package$core.append_a2br84$ = append_3;
  package$core.append_wdi0rq$ = append_4;
  package$core.writeFully_i6snlg$ = writeFully_13;
  package$core.writeFully_d18giu$ = writeFully_14;
  package$core.writeFully_yw8055$ = writeFully_15;
  package$core.writeFully_2v9eo0$ = writeFully_16;
  package$core.writeFully_ydnkai$ = writeFully_17;
  package$core.writeFully_avy7cl$ = writeFully_18;
  package$core.writeFully_ke2xza$ = writeFully_19;
  package$core.writeFully_apj91c$ = writeFully_20;
  package$core.writeFully_35rta0$ = writeFully_21;
  package$core.writeFully_bch96q$ = writeFully_22;
  package$core.fill_g2e272$ = fill_2;
  package$internal.prepareWriteHead_6z8r11$ = prepareWriteHead_0;
  package$internal.afterHeadWrite_z1cqja$ = afterHeadWrite_0;
  package$core.writeWhile_rh5n47$ = writeWhile;
  package$core.writeWhileSize_cmxbvc$ = writeWhileSize;
  package$core.writePacket_we8ufg$ = writePacket_0;
  package$core.writeShort_hklg1n$ = writeShort_4;
  package$core.writeInt_uvxpoy$ = writeInt_4;
  package$core.writeLong_5y1ywb$ = writeLong_2;
  package$core.writeFloat_gulwb$ = writeFloat_2;
  package$core.writeDouble_1z13h2$ = writeDouble_2;
  package$core.writeShortLittleEndian_9kfkzl$ = writeShortLittleEndian_0;
  package$core.writeIntLittleEndian_qu9kum$ = writeIntLittleEndian_0;
  package$core.writeLongLittleEndian_kb5mzd$ = writeLongLittleEndian_0;
  package$core.writeFloatLittleEndian_9rid5t$ = writeFloatLittleEndian_0;
  package$core.writeDoubleLittleEndian_jgp4k2$ = writeDoubleLittleEndian_0;
  package$core.writeFullyLittleEndian_phqic5$ = writeFullyLittleEndian;
  package$core.writeShortLittleEndian_cx5lgg$ = writeShortLittleEndian_1;
  package$core.writeIntLittleEndian_cni1rh$ = writeIntLittleEndian_1;
  package$core.writeLongLittleEndian_xy6qu0$ = writeLongLittleEndian_1;
  package$core.writeFloatLittleEndian_d48dmo$ = writeFloatLittleEndian_1;
  package$core.writeDoubleLittleEndian_in4kvh$ = writeDoubleLittleEndian_1;
  package$core.writeFullyLittleEndian_4i50ju$ = writeFullyLittleEndian_0;
  package$core.writeFullyLittleEndian_d18giu$ = writeFullyLittleEndian_1;
  package$core.writeFullyLittleEndian_cj6vpa$ = writeFullyLittleEndian_2;
  package$core.writeFullyLittleEndian_yw8055$ = writeFullyLittleEndian_3;
  package$core.writeFullyLittleEndian_jyf4rf$ = writeFullyLittleEndian_4;
  package$core.writeFullyLittleEndian_2v9eo0$ = writeFullyLittleEndian_5;
  package$core.writeFullyLittleEndian_ydnkai$ = writeFullyLittleEndian_6;
  package$core.writeFullyLittleEndian_avy7cl$ = writeFullyLittleEndian_7;
  package$core.writeFullyLittleEndian_fs9n6h$ = writeFullyLittleEndian_8;
  package$core.writeFullyLittleEndian_n25sf1$ = writeFullyLittleEndian_9;
  package$core.writeFullyLittleEndian_lhisoq$ = writeFullyLittleEndian_10;
  package$core.writeFullyLittleEndian_8v2yxw$ = writeFullyLittleEndian_11;
  package$core.writeFullyLittleEndian_de8bdr$ = writeFullyLittleEndian_12;
  package$core.writeFullyLittleEndian_7tydzb$ = writeFullyLittleEndian_13;
  package$core.writeFullyLittleEndian_u5abqk$ = writeFullyLittleEndian_14;
  package$core.writeShort_9kfkzl$ = writeShort_5;
  package$core.writeInt_qu9kum$ = writeInt_5;
  package$core.writeLong_kb5mzd$ = writeLong_3;
  package$core.writeFloat_9rid5t$ = writeFloat_3;
  package$core.writeDouble_jgp4k2$ = writeDouble_3;
  Object.defineProperty(ByteReadPacketBase, 'Companion', {
  get: ByteReadPacketBase$Companion_getInstance});
  package$core.ByteReadPacketBase_init_njy0gf$ = ByteReadPacketBase_init;
  package$core.ByteReadPacketBase = ByteReadPacketBase;
  package$core.get_isEmpty_7wsnj1$ = get_isEmpty;
  package$core.get_isNotEmpty_7wsnj1$ = get_isNotEmpty;
  package$core.get_isEmpty_mlrm9h$ = get_isEmpty_0;
  package$core.get_isNotEmpty_mlrm9h$ = get_isNotEmpty_0;
  package$core.prematureEndOfStream_za3lpa$ = prematureEndOfStream;
  package$core.preview_en5wxq$ = preview_0;
  package$core.preview_pcj9ic$ = preview;
  package$core.discardUntilDelimiter_nd2vci$ = discardUntilDelimiter;
  package$core.discardUntilDelimiters_16hsaj$ = discardUntilDelimiters;
  package$core.readUntilDelimiter_47qg82$ = readUntilDelimiter;
  package$core.readUntilDelimiters_3dgv7v$ = readUntilDelimiters;
  package$core.readUntilDelimiter_75zcs9$ = readUntilDelimiter_0;
  package$core.readUntilDelimiters_gcjxsg$ = readUntilDelimiters_0;
  package$core.discardUntilDelimiterImplMemory_7fe9ek$ = discardUntilDelimiterImplMemory;
  package$core.discardUntilDelimitersImplMemory_y7jb2r$ = discardUntilDelimitersImplMemory;
  package$core.copyUntil_31bg9c$ = copyUntil;
  package$core.copyUntil_ljye23$ = copyUntil_0;
  package$charsets.encodeToByteArray_fj4osb$ = encodeToByteArray;
  package$core.toByteArray_nek0qj$ = toByteArray;
  package$core.readUTF8Line_spgdvl$ = readUTF8Line_0;
  package$core.readUTF8Line_jnptrd$ = readUTF8Line_1;
  package$core.readUTF8LineTo_fpetxf$ = readUTF8LineTo_0;
  package$core.readUTF8UntilDelimiter_l5w2r7$ = readUTF8UntilDelimiter;
  package$core.readUTF8UntilDelimiterTo_o9libz$ = readUTF8UntilDelimiterTo;
  package$core.readUTF8UntilDelimiterTo_9hmmg6$ = readUTF8UntilDelimiterTo_0;
  package$core.readUTF8UntilDelimiterTo_3idhr5$ = readUTF8UntilDelimiterTo_1;
  package$core.readBytes_xc9h3n$ = readBytes_0;
  package$core.readBytes_j319xh$ = readBytes_1;
  package$core.readBytes_7wsnj1$ = readBytes_2;
  package$core.readBytesOf_jnptrd$ = readBytesOf;
  package$core.readText_bm40jl$ = readText_0;
  package$core.readText_36em93$ = readText_1;
  package$core.readText_7iez2b$ = readText_2;
  package$core.readText_1lnizf$ = readText_3;
  package$core.readText_4x5c2x$ = readText_4;
  package$core.readTextExact_1lnizf$ = readTextExact;
  package$core.readTextExactCharacters_yqne27$ = readTextExactCharacters;
  package$core.readTextExactBytes_1lnizf$ = readTextExactBytes;
  package$core.readTextExactBytes_yqne27$ = readTextExactBytes_0;
  package$core.writeText_fgf27y$ = writeText;
  package$core.writeText_t153jy$ = writeText_0;
  package$core.writeText_t7k8z4$ = writeText_1;
  package$core.prematureEndOfStream_s8cxhz$ = prematureEndOfStream_0;
  package$core.readUByte_7wsnj1$ = readUByte_1;
  package$core.readUShort_7wsnj1$ = readUShort_1;
  package$core.readUInt_7wsnj1$ = readUInt_1;
  package$core.readULong_7wsnj1$ = readULong_1;
  package$core.readFully_yxjp9i$ = readFully_24;
  package$core.readFully_8s9ld4$ = readFully_25;
  package$core.readFully_bfwj6z$ = readFully_26;
  package$core.readFully_dvhn02$ = readFully_27;
  package$core.writeUByte_9k01uo$ = writeUByte_1;
  package$core.writeUShort_bujti4$ = writeUShort_1;
  package$core.writeUInt_kbalp3$ = writeUInt_1;
  package$core.writeULong_9jtvjg$ = writeULong_1;
  package$core.writeFully_13mxi1$ = writeFully_23;
  package$core.writeFully_phqic5$ = writeFully_24;
  package$core.writeFully_cj6vpa$ = writeFully_25;
  package$core.writeFully_jyf4rf$ = writeFully_26;
  package$core.use_800v1z$ = use_0;
  package$core.use_73rtzc$ = use_1;

  Object.defineProperty(ChunkBuffer, 'Companion', {
  get: ChunkBuffer$Companion_getInstance});
  package$internal.ChunkBuffer = ChunkBuffer;
  package$internal.isExclusivelyOwned_kx8gx4$ = isExclusivelyOwned;
  package$internal.failLongToIntConversion_a4hdmt$ = failLongToIntConversion;
  package$internal.toIntOrFail_z7h088$ = toIntOrFail;
  package$internal.RequireFailureCapture = RequireFailureCapture;
  package$internal.decodeASCII_j5qx8u$ = decodeASCII;
  package$internal.decodeUTF8LineLoopSuspend_f8x9lf$ = decodeUTF8LineLoopSuspend;
  package$internal.byteCountUtf8_kcn2v3$ = byteCountUtf8;
  package$internal.decodeUTF8_dce4k1$ = decodeUTF8_0;
  package$internal.decodeUTF8_cise53$ = decodeUTF8;
  package$internal.malformedByteCount_za3lpa$ = malformedByteCount;
  package$internal.isBmpCodePoint_za3lpa$ = isBmpCodePoint;
  package$internal.isValidCodePoint_za3lpa$ = isValidCodePoint;
  package$internal.malformedCodePoint_za3lpa$ = malformedCodePoint;
  package$internal.highSurrogate_za3lpa$ = highSurrogate;
  package$internal.lowSurrogate_za3lpa$ = lowSurrogate;
  package$internal.CharArraySequence = CharArraySequence;
  package$internal.EncodeResult_init_2ahd1g$ = EncodeResult_init;
  package$internal.EncodeResult = EncodeResult;
  package$internal.encodeUTF8_yjoz4m$ = encodeUTF8_0;
  package$internal.putUtf8Char_9qn7ci$ = putUtf8Char;
  package$internal.codePoint_fdkhi5$ = codePoint;
  package$internal.MalformedUTF8InputException = MalformedUTF8InputException;
  package$internal.DangerousInternalIoApi = DangerousInternalIoApi;
  package$internal.$unsafeAppend$_2zp1ia$ = $unsafeAppend$;
  package$internal.prepareReadFirstHeadOld_j319xh$ = prepareReadFirstHeadOld;
  package$internal.completeReadHead_71n9ev$ = completeReadHead;
  package$internal.prepareReadNextHeadOld_71n9ev$ = prepareReadNextHeadOld;
  package$internal.prepareWriteHead_o8drpd$ = prepareWriteHead;
  package$internal.afterHeadWrite_5p0has$ = afterHeadWrite;
  Object.defineProperty(package$internal, 'EmptyByteArray_8be2vx$', {
  get: function() {
  return EmptyByteArray;
}});
  var package$errors = package$io_0.errors || (package$io_0.errors = {});
  package$errors.TODO_ERROR_mh5how$ = TODO_ERROR;
  package$errors.TODO_ERROR = TODO_ERROR_0;
  package$errors.checkPeekTo_swsbrn$ = checkPeekTo;
  package$errors.incompatibleVersionError = incompatibleVersionError;
  var package$internal_0 = package$io_0.internal || (package$io_0.internal = {});
  package$internal_0.joinToImpl_4jw017$ = joinToImpl;
  package$internal_0.copyToSequentialImpl_6ii227$ = copyToSequentialImpl;
  var package$pool = package$io_0.pool || (package$io_0.pool = {});
  package$pool.ObjectPool = ObjectPool;
  package$pool.NoPoolImpl = NoPoolImpl;
  package$pool.SingleInstancePool = SingleInstancePool;
  package$pool.useInstance_ufoqs6$ = useInstance;
  package$pool.useBorrowed_ufoqs6$ = useBorrowed;
  package$io_0.ByteChannel_6taknv$ = ByteChannel_0;
  package$io_0.ByteReadChannel_mj6st8$ = ByteReadChannel_0;
  package$io_0.ByteReadChannel_c2mund$ = ByteReadChannel_1;
  package$io_0.joinTo_jmqo5h$ = joinTo_0;
  package$io_0.copyTo_47ygvz$ = copyTo_1;
  package$io_0.ByteChannelJS = ByteChannelJS;
  Object.defineProperty(ByteReadChannel_2, 'Companion', {
  get: ByteReadChannel$Companion_getInstance});
  package$io_0.ByteReadChannel = ByteReadChannel_2;
  package$io_0.ByteWriteChannel = ByteWriteChannel;
  package$io_0.Condition = Condition;
  package$bits.Memory = Memory;
  package$bits.of_2z595v$ = of;
  package$bits.of_3qjk6t$ = of_0;
  package$bits.of_qdokgt$ = of_1;
  package$bits.of_d2rc7k$ = of_2;
  Object.defineProperty(package$bits, 'DefaultAllocator', {
  get: DefaultAllocator_getInstance});
  Object.defineProperty(Memory, 'Companion', {
  get: Memory$Companion_getInstance});
  package$bits.fill_yaef32$ = fill_3;
  package$bits.fill_j8cw4o$ = fill_4;
  package$bits.copyTo_1uvjz5$ = copyTo_4;
  package$bits.copyTo_duys70$ = copyTo_5;
  package$bits.copyTo_3wm8wl$ = copyTo_6;
  package$bits.copyTo_vnj7g0$ = copyTo_7;
  package$bits.get_Int8ArrayView_ktv2uy$ = get_Int8ArrayView;
  package$bits.loadFloatAt_ad7opl$ = loadFloatAt;
  package$bits.loadFloatAt_xrw27i$ = loadFloatAt_0;
  package$bits.loadDoubleAt_ad7opl$ = loadDoubleAt;
  package$bits.loadDoubleAt_xrw27i$ = loadDoubleAt_0;
  package$bits.storeFloatAt_r7re9q$ = storeFloatAt;
  package$bits.storeFloatAt_ud4nyv$ = storeFloatAt_0;
  package$bits.storeDoubleAt_7sfcvf$ = storeDoubleAt;
  package$bits.storeDoubleAt_isvxss$ = storeDoubleAt_0;
  package$bits.loadFloatArray_f2kqdl$ = loadFloatArray;
  package$bits.loadFloatArray_wismeo$ = loadFloatArray_0;
  package$bits.loadDoubleArray_itdtda$ = loadDoubleArray;
  package$bits.loadDoubleArray_2kio7p$ = loadDoubleArray_0;
  package$bits.storeFloatArray_f2kqdl$ = storeFloatArray;
  package$bits.storeFloatArray_wismeo$ = storeFloatArray_0;
  package$bits.storeDoubleArray_itdtda$ = storeDoubleArray;
  package$bits.storeDoubleArray_2kio7p$ = storeDoubleArray_0;
  Object.defineProperty(Charset, 'Companion', {
  get: Charset$Companion_getInstance});
  package$charsets.Charset = Charset;
  package$charsets.get_name_2sg7fd$ = get_name;
  package$charsets.CharsetEncoder = CharsetEncoder;
  package$charsets.get_charset_x4isqx$ = get_charset;
  package$charsets.encodeImpl_edsj0y$ = encodeImpl;
  package$charsets.encodeUTF8_sbvn4u$ = encodeUTF8_1;
  package$charsets.encodeComplete_5txte2$ = encodeComplete;
  package$charsets.CharsetDecoder = CharsetDecoder;
  package$charsets.get_charset_e9jvmp$ = get_charset_0;
  package$charsets.decodeBuffer_eccjnr$ = decodeBuffer;
  package$charsets.decode_eyhcpn$ = decode_0;
  package$charsets.decodeExactBytes_lb8wo3$ = decodeExactBytes;
  Object.defineProperty(package$charsets, 'Charsets', {
  get: Charsets_getInstance});
  package$charsets.MalformedInputException = MalformedInputException;
  Object.defineProperty(package$charsets, 'MAX_CHARACTERS_SIZE_IN_BYTES_8be2vx$', {
  get: function() {
  return MAX_CHARACTERS_SIZE_IN_BYTES;
}});
  package$charsets.DecodeBufferResult = DecodeBufferResult;
  package$charsets.decodeBufferImpl_do9qbo$ = decodeBufferImpl;
  package$charsets.encodeISO88591_4e1bz1$ = encodeISO88591;
  Object.defineProperty(ByteOrder, 'BIG_ENDIAN', {
  get: ByteOrder$BIG_ENDIAN_getInstance});
  Object.defineProperty(ByteOrder, 'LITTLE_ENDIAN', {
  get: ByteOrder$LITTLE_ENDIAN_getInstance});
  Object.defineProperty(ByteOrder, 'Companion', {
  get: ByteOrder$Companion_getInstance});
  package$core.Closeable = Closeable;
  package$core.Input = Input;
  package$core.readFully_nu5h60$ = readFully_28;
  package$core.readFully_7dohgh$ = readFully_29;
  package$core.readFully_hqska$ = readFully_30;
  package$core.readAvailable_nu5h60$ = readAvailable_22;
  package$core.readAvailable_7dohgh$ = readAvailable_23;
  package$core.readAvailable_hqska$ = readAvailable_24;
  package$core.readFully_56hr53$ = readFully_31;
  package$core.readFully_xvjntq$ = readFully_32;
  package$core.readFully_28a27b$ = readFully_33;
  package$core.readAvailable_56hr53$ = readAvailable_25;
  package$core.readAvailable_xvjntq$ = readAvailable_26;
  package$core.readAvailable_28a27b$ = readAvailable_27;
  Object.defineProperty(IoBuffer, 'Companion', {
  get: IoBuffer$Companion_getInstance});
  package$core.IoBuffer = IoBuffer;
  package$core.readFully_xbe0h9$ = readFully_34;
  package$core.readFully_agdgmg$ = readFully_35;
  package$core.readAvailable_xbe0h9$ = readAvailable_28;
  package$core.readAvailable_agdgmg$ = readAvailable_29;
  package$core.writeFully_xbe0h9$ = writeFully_27;
  package$core.writeFully_agdgmg$ = writeFully_28;
  package$core.writeDirect_7p6c17$ = writeDirect;
  package$core.readDirect_7p6c17$ = readDirect;
  package$core.writeDirectInt8Array_fffeuo$ = writeDirectInt8Array;
  package$core.readDirectInt8Array_fffeuo$ = readDirectInt8Array;
  package$core.Output = Output;
  Object.defineProperty(package$core, 'PACKET_MAX_COPY_SIZE', {
  get: function() {
  return PACKET_MAX_COPY_SIZE;
}});
  Object.defineProperty(package$core, 'BUFFER_VIEW_POOL_SIZE_8be2vx$', {
  get: function() {
  return BUFFER_VIEW_POOL_SIZE;
}});
  Object.defineProperty(package$core, 'BUFFER_VIEW_SIZE_8be2vx$', {
  get: function() {
  return BUFFER_VIEW_SIZE;
}});
  package$core.discardUntilDelimiterImpl_10u6tb$ = discardUntilDelimiterImpl;
  package$core.discardUntilDelimitersImpl_xhw6oa$ = discardUntilDelimitersImpl;
  package$core.readUntilDelimiterImpl_r4l8rz$ = readUntilDelimiterImpl;
  package$core.readUntilDelimitersImpl_eucm62$ = readUntilDelimitersImpl;
  package$core.readUntilDelimiterImpl_hlh4ay$ = readUntilDelimiterImpl_0;
  package$core.readUntilDelimitersImpl_j8z201$ = readUntilDelimitersImpl_0;
  package$core.String_xge8xe$ = String_0;
  package$core.checkIndices_khgzz8$ = checkIndices;
  package$core.getCharsInternal_8t7fl6$ = getCharsInternal;
  package$errors.IOException_init_61zpoe$ = IOException_init;
  package$errors.IOException = IOException;
  package$errors.EOFException = EOFException;
  var package$js = package$io_0.js || (package$io_0.js = {});
  package$js.readText_fwlggr$ = readText_5;
  package$js.readText_4pep7x$ = readText_6;
  package$js.TextDecoderFatal_t8jjq2$ = TextDecoderFatal;
  package$js.decodeWrap_i3ch5z$ = decodeWrap;
  package$js.decodeStream_n9pbvr$ = decodeStream;
  package$js.decodeStream_6h85h0$ = decodeStream_0;
  package$js.TextEncoderCtor_8be2vx$ = TextEncoderCtor;
  package$js.readArrayBuffer_xc9h3n$ = readArrayBuffer;
  package$js.writeFully_uphcrm$ = writeFully_29;
  package$js.writeFully_xn6cfb$ = writeFully_30;
  package$js.sendPacket_ac3gnr$ = sendPacket;
  package$js.sendPacket_3qvznb$ = sendPacket_0;
  package$js.packet_lwnq0v$ = packet;
  package$js.sendPacket_f89g06$ = sendPacket_2;
  package$js.sendPacket_xzmm9y$ = sendPacket_1;
  package$js.responsePacket_rezk82$ = responsePacket;
  package$pool.DefaultPool = DefaultPool;
  ByteChannel.prototype.peekTo_afjyek$ = ByteReadChannel_2.prototype.peekTo_afjyek$;
  SuspendableReadSession.prototype.request_za3lpa$ = ReadSession.prototype.request_za3lpa$;
  ByteChannelSequentialBase.prototype.await_za3lpa$ = SuspendableReadSession.prototype.await_za3lpa$;
  ByteChannelSequentialBase.prototype.request_za3lpa$ = SuspendableReadSession.prototype.request_za3lpa$;
  ByteChannelSequentialBase.prototype.peekTo_afjyek$ = ByteChannel.prototype.peekTo_afjyek$;
  ReaderJob.prototype.cancel = Job.prototype.cancel;
  ReaderJob.prototype.fold_3cc69b$ = Job.prototype.fold_3cc69b$;
  ReaderJob.prototype.get_j3r2sn$ = Job.prototype.get_j3r2sn$;
  ReaderJob.prototype.minusKey_yeqjby$ = Job.prototype.minusKey_yeqjby$;
  ReaderJob.prototype.plus_dqr1mp$ = Job.prototype.plus_dqr1mp$;
  ReaderJob.prototype.plus_1fupul$ = Job.prototype.plus_1fupul$;
  ReaderJob.prototype.cancel_dbl4no$ = Job.prototype.cancel_dbl4no$;
  ReaderJob.prototype.cancel_m4sck1$ = Job.prototype.cancel_m4sck1$;
  ReaderJob.prototype.invokeOnCompletion_ct2b2z$ = Job.prototype.invokeOnCompletion_ct2b2z$;
  WriterJob.prototype.cancel = Job.prototype.cancel;
  WriterJob.prototype.fold_3cc69b$ = Job.prototype.fold_3cc69b$;
  WriterJob.prototype.get_j3r2sn$ = Job.prototype.get_j3r2sn$;
  WriterJob.prototype.minusKey_yeqjby$ = Job.prototype.minusKey_yeqjby$;
  WriterJob.prototype.plus_dqr1mp$ = Job.prototype.plus_dqr1mp$;
  WriterJob.prototype.plus_1fupul$ = Job.prototype.plus_1fupul$;
  WriterJob.prototype.cancel_dbl4no$ = Job.prototype.cancel_dbl4no$;
  WriterJob.prototype.cancel_m4sck1$ = Job.prototype.cancel_m4sck1$;
  WriterJob.prototype.invokeOnCompletion_ct2b2z$ = Job.prototype.invokeOnCompletion_ct2b2z$;
  ChannelJob.prototype.cancel_dbl4no$ = ReaderJob.prototype.cancel_dbl4no$;
  ChannelJob.prototype.cancel_m4sck1$ = ReaderJob.prototype.cancel_m4sck1$;
  ChannelJob.prototype.invokeOnCompletion_ct2b2z$ = ReaderJob.prototype.invokeOnCompletion_ct2b2z$;
  AbstractInput.prototype.readFully_359eei$ = Input.prototype.readFully_359eei$;
  AbstractInput.prototype.readFully_nd5v6f$ = Input.prototype.readFully_nd5v6f$;
  AbstractInput.prototype.readFully_rfv6wg$ = Input.prototype.readFully_rfv6wg$;
  AbstractInput.prototype.readFully_kgymra$ = Input.prototype.readFully_kgymra$;
  AbstractInput.prototype.readFully_6icyh1$ = Input.prototype.readFully_6icyh1$;
  AbstractInput.prototype.readFully_qr0era$ = Input.prototype.readFully_qr0era$;
  AbstractInput.prototype.readFully_gsnag5$ = Input.prototype.readFully_gsnag5$;
  AbstractInput.prototype.readFully_qmgm5g$ = Input.prototype.readFully_qmgm5g$;
  AbstractInput.prototype.readFully_p0d4q1$ = Input.prototype.readFully_p0d4q1$;
  AbstractInput.prototype.readAvailable_mj6st8$ = Input.prototype.readAvailable_mj6st8$;
  AbstractInput.prototype.readAvailable_359eei$ = Input.prototype.readAvailable_359eei$;
  AbstractInput.prototype.readAvailable_nd5v6f$ = Input.prototype.readAvailable_nd5v6f$;
  AbstractInput.prototype.readAvailable_rfv6wg$ = Input.prototype.readAvailable_rfv6wg$;
  AbstractInput.prototype.readAvailable_kgymra$ = Input.prototype.readAvailable_kgymra$;
  AbstractInput.prototype.readAvailable_6icyh1$ = Input.prototype.readAvailable_6icyh1$;
  AbstractInput.prototype.readAvailable_qr0era$ = Input.prototype.readAvailable_qr0era$;
  AbstractInput.prototype.readAvailable_gsnag5$ = Input.prototype.readAvailable_gsnag5$;
  AbstractInput.prototype.readAvailable_qmgm5g$ = Input.prototype.readAvailable_qmgm5g$;
  AbstractInput.prototype.readAvailable_p0d4q1$ = Input.prototype.readAvailable_p0d4q1$;
  AbstractInput.prototype.peekTo_afjyek$ = Input.prototype.peekTo_afjyek$;
  AbstractOutput.prototype.writeShort_mq22fl$ = Output.prototype.writeShort_mq22fl$;
  AbstractOutput.prototype.writeInt_za3lpa$ = Output.prototype.writeInt_za3lpa$;
  AbstractOutput.prototype.writeLong_s8cxhz$ = Output.prototype.writeLong_s8cxhz$;
  AbstractOutput.prototype.writeFloat_mx4ult$ = Output.prototype.writeFloat_mx4ult$;
  AbstractOutput.prototype.writeDouble_14dthe$ = Output.prototype.writeDouble_14dthe$;
  AbstractOutput.prototype.writeFully_mj6st8$ = Output.prototype.writeFully_mj6st8$;
  AbstractOutput.prototype.writeFully_359eei$ = Output.prototype.writeFully_359eei$;
  AbstractOutput.prototype.writeFully_nd5v6f$ = Output.prototype.writeFully_nd5v6f$;
  AbstractOutput.prototype.writeFully_rfv6wg$ = Output.prototype.writeFully_rfv6wg$;
  AbstractOutput.prototype.writeFully_kgymra$ = Output.prototype.writeFully_kgymra$;
  AbstractOutput.prototype.writeFully_6icyh1$ = Output.prototype.writeFully_6icyh1$;
  AbstractOutput.prototype.writeFully_qr0era$ = Output.prototype.writeFully_qr0era$;
  AbstractOutput.prototype.fill_3pq026$ = Output.prototype.fill_3pq026$;
  DefaultPool.prototype.close = ObjectPool.prototype.close;
  NoPoolImpl.prototype.close = ObjectPool.prototype.close;
  ChunkBuffer$Companion$Pool$ObjectLiteral.prototype.close = ObjectPool.prototype.close;
  ChunkBuffer$Companion$EmptyPool$ObjectLiteral.prototype.close = ObjectPool.prototype.close;
  SingleInstancePool.prototype.close = ObjectPool.prototype.close;
  IoBuffer.prototype.peekTo_afjyek$ = Input.prototype.peekTo_afjyek$;
  DEFAULT_BUFFER_SIZE = 4096;
  DefaultChunkedBufferPool = new DefaultBufferPool();
  MaxCodePoint = 1114111;
  MinLowSurrogate = 56320;
  MinHighSurrogate = 55296;
  MinSupplementary = 65536;
  HighSurrogateMagic = 55232;
  EmptyByteArray = new Int8Array(0);
  isLittleEndianPlatform = ByteOrder$Companion_getInstance().nativeOrder() === ByteOrder$LITTLE_ENDIAN_getInstance();
  MAX_CHARACTERS_SIZE_IN_BYTES = 8;
  MAX_CHARACTERS_COUNT = 268435455;
  PACKET_MAX_COPY_SIZE = 200;
  BUFFER_VIEW_POOL_SIZE = 100;
  BUFFER_VIEW_SIZE = 4096;
  var $receiver = new Any();
  $receiver.stream = true;
  STREAM_TRUE = $receiver;
  var $receiver_0 = new Any();
  $receiver_0.fatal = true;
  FATAL_TRUE = $receiver_0;
  Kotlin.defineModule('ktor-ktor-io', _);
  return _;
}));
