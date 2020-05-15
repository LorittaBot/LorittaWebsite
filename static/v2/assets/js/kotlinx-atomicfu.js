(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlinx-atomicfu'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlinx-atomicfu'.");
    }
    root['kotlinx-atomicfu'] = factory(typeof this['kotlinx-atomicfu'] === 'undefined' ? {} : this['kotlinx-atomicfu'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var L0 = Kotlin.Long.ZERO;
  var Array_0 = Array;
  var toString = Kotlin.toString;
  var equals = Kotlin.equals;
  var wrapFunction = Kotlin.wrapFunction;
  function atomicArrayOfNulls(size) {
    return new AtomicArray(size);
  }
  var loop = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.loop_jlk8u1$', function ($receiver, action) {
    while (true) {
      action($receiver.kotlinx$atomicfu$value);
    }
  });
  var update = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.update_xk4wt8$', function ($receiver, function_0) {
    while (true) {
      var cur = $receiver.kotlinx$atomicfu$value;
      var upd = function_0(cur);
      if ($receiver.compareAndSet$atomicfu(cur, upd))
        return;
    }
  });
  var getAndUpdate = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.getAndUpdate_xk4wt8$', function ($receiver, function_0) {
    while (true) {
      var cur = $receiver.kotlinx$atomicfu$value;
      var upd = function_0(cur);
      if ($receiver.compareAndSet$atomicfu(cur, upd))
        return cur;
    }
  });
  var updateAndGet = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.updateAndGet_xk4wt8$', function ($receiver, function_0) {
    while (true) {
      var cur = $receiver.kotlinx$atomicfu$value;
      var upd = function_0(cur);
      if ($receiver.compareAndSet$atomicfu(cur, upd))
        return upd;
    }
  });
  var loop_0 = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.loop_835cj1$', function ($receiver, action) {
    while (true) {
      action($receiver.kotlinx$atomicfu$value);
    }
  });
  var update_0 = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.update_toml5v$', function ($receiver, function_0) {
    while (true) {
      var cur = $receiver.kotlinx$atomicfu$value;
      var upd = function_0(cur);
      if ($receiver.compareAndSet$atomicfu(cur, upd))
        return;
    }
  });
  var getAndUpdate_0 = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.getAndUpdate_toml5v$', function ($receiver, function_0) {
    while (true) {
      var cur = $receiver.kotlinx$atomicfu$value;
      var upd = function_0(cur);
      if ($receiver.compareAndSet$atomicfu(cur, upd))
        return cur;
    }
  });
  var updateAndGet_0 = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.updateAndGet_toml5v$', function ($receiver, function_0) {
    while (true) {
      var cur = $receiver.kotlinx$atomicfu$value;
      var upd = function_0(cur);
      if ($receiver.compareAndSet$atomicfu(cur, upd))
        return upd;
    }
  });
  var loop_1 = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.loop_737bgt$', function ($receiver, action) {
    while (true) {
      action($receiver.kotlinx$atomicfu$value);
    }
  });
  var update_1 = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.update_4tf4dm$', function ($receiver, function_0) {
    while (true) {
      var cur = $receiver.kotlinx$atomicfu$value;
      var upd = function_0(cur);
      if ($receiver.compareAndSet$atomicfu(cur, upd))
        return;
    }
  });
  var getAndUpdate_1 = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.getAndUpdate_4tf4dm$', function ($receiver, function_0) {
    while (true) {
      var cur = $receiver.kotlinx$atomicfu$value;
      var upd = function_0(cur);
      if ($receiver.compareAndSet$atomicfu(cur, upd))
        return cur;
    }
  });
  var updateAndGet_1 = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.updateAndGet_4tf4dm$', function ($receiver, function_0) {
    while (true) {
      var cur = $receiver.kotlinx$atomicfu$value;
      var upd = function_0(cur);
      if ($receiver.compareAndSet$atomicfu(cur, upd))
        return upd;
    }
  });
  var loop_2 = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.loop_ian79v$', function ($receiver, action) {
    while (true) {
      action($receiver.kotlinx$atomicfu$value);
    }
  });
  var update_2 = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.update_ifkm8b$', function ($receiver, function_0) {
    while (true) {
      var cur = $receiver.kotlinx$atomicfu$value;
      var upd = function_0(cur);
      if ($receiver.compareAndSet$atomicfu(cur, upd))
        return;
    }
  });
  var getAndUpdate_2 = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.getAndUpdate_ifkm8b$', function ($receiver, function_0) {
    while (true) {
      var cur = $receiver.kotlinx$atomicfu$value;
      var upd = function_0(cur);
      if ($receiver.compareAndSet$atomicfu(cur, upd))
        return cur;
    }
  });
  var updateAndGet_2 = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.updateAndGet_ifkm8b$', function ($receiver, function_0) {
    while (true) {
      var cur = $receiver.kotlinx$atomicfu$value;
      var upd = function_0(cur);
      if ($receiver.compareAndSet$atomicfu(cur, upd))
        return upd;
    }
  });
  function AtomicIntArray(size) {
    var array = Array_0(size);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = atomic_0(0);
    }
    this.array_0 = array;
  }
  AtomicIntArray.prototype.get$atomicfu = function (index) {
    return this.array_0[index];
  };
  AtomicIntArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomicIntArray',
    interfaces: []
  };
  function AtomicLongArray(size) {
    var array = Array_0(size);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = atomic_1(L0);
    }
    this.array_0 = array;
  }
  AtomicLongArray.prototype.get$atomicfu = function (index) {
    return this.array_0[index];
  };
  AtomicLongArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomicLongArray',
    interfaces: []
  };
  function AtomicBooleanArray(size) {
    var array = Array_0(size);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = atomic_2(false);
    }
    this.array_0 = array;
  }
  AtomicBooleanArray.prototype.get$atomicfu = function (index) {
    return this.array_0[index];
  };
  AtomicBooleanArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomicBooleanArray',
    interfaces: []
  };
  function AtomicArray(size) {
    var array = Array_0(size);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = atomic(null);
    }
    this.array_0 = array;
  }
  AtomicArray.prototype.get$atomicfu = function (index) {
    return this.array_0[index];
  };
  AtomicArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomicArray',
    interfaces: []
  };
  function atomic(initial) {
    return new AtomicRef(initial);
  }
  function atomic_0(initial) {
    return new AtomicInt(initial);
  }
  function atomic_1(initial) {
    return new AtomicLong(initial);
  }
  function atomic_2(initial) {
    return new AtomicBoolean(initial);
  }
  function AtomicRef(value) {
    this.kotlinx$atomicfu$value = value;
  }
  AtomicRef.prototype.lazySet_11rb$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicRef.lazySet_11rb$', function (value) {
    this.kotlinx$atomicfu$value = value;
  });
  AtomicRef.prototype.compareAndSet$atomicfu = function (expect, update) {
    if (this.kotlinx$atomicfu$value !== expect)
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  AtomicRef.prototype.getAndSet$atomicfu = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  AtomicRef.prototype.toString = function () {
    return toString(this.kotlinx$atomicfu$value);
  };
  AtomicRef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomicRef',
    interfaces: []
  };
  function AtomicBoolean(value) {
    this.kotlinx$atomicfu$value = value;
  }
  AtomicBoolean.prototype.lazySet_6taknv$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicBoolean.lazySet_6taknv$', function (value) {
    this.kotlinx$atomicfu$value = value;
  });
  AtomicBoolean.prototype.compareAndSet$atomicfu = function (expect, update) {
    if (this.kotlinx$atomicfu$value !== expect)
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  AtomicBoolean.prototype.getAndSet$atomicfu = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  AtomicBoolean.prototype.toString = function () {
    return this.kotlinx$atomicfu$value.toString();
  };
  AtomicBoolean.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomicBoolean',
    interfaces: []
  };
  function AtomicInt(value) {
    this.kotlinx$atomicfu$value = value;
  }
  AtomicInt.prototype.lazySet_za3lpa$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicInt.lazySet_za3lpa$', function (value) {
    this.kotlinx$atomicfu$value = value;
  });
  AtomicInt.prototype.compareAndSet$atomicfu = function (expect, update) {
    if (this.kotlinx$atomicfu$value !== expect)
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  AtomicInt.prototype.getAndSet$atomicfu = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  AtomicInt.prototype.getAndIncrement$atomicfu = function () {
    var tmp$;
    return tmp$ = this.kotlinx$atomicfu$value, this.kotlinx$atomicfu$value = tmp$ + 1 | 0, tmp$;
  };
  AtomicInt.prototype.getAndDecrement$atomicfu = function () {
    var tmp$;
    return tmp$ = this.kotlinx$atomicfu$value, this.kotlinx$atomicfu$value = tmp$ - 1 | 0, tmp$;
  };
  AtomicInt.prototype.getAndAdd$atomicfu = function (delta) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value + delta | 0;
    return oldValue;
  };
  AtomicInt.prototype.addAndGet$atomicfu = function (delta) {
    this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value + delta | 0;
    return this.kotlinx$atomicfu$value;
  };
  AtomicInt.prototype.incrementAndGet$atomicfu = function () {
    return this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value + 1 | 0, this.kotlinx$atomicfu$value;
  };
  AtomicInt.prototype.decrementAndGet$atomicfu = function () {
    return this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value - 1 | 0, this.kotlinx$atomicfu$value;
  };
  AtomicInt.prototype.plusAssign_za3lpa$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicInt.plusAssign_za3lpa$', function (delta) {
    this.getAndAdd$atomicfu(delta);
  });
  AtomicInt.prototype.minusAssign_za3lpa$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicInt.minusAssign_za3lpa$', function (delta) {
    this.getAndAdd$atomicfu(-delta | 0);
  });
  AtomicInt.prototype.toString = function () {
    return this.kotlinx$atomicfu$value.toString();
  };
  AtomicInt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomicInt',
    interfaces: []
  };
  function AtomicLong(value) {
    this.kotlinx$atomicfu$value = value;
  }
  AtomicLong.prototype.lazySet_s8cxhz$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicLong.lazySet_s8cxhz$', function (value) {
    this.kotlinx$atomicfu$value = value;
  });
  AtomicLong.prototype.compareAndSet$atomicfu = function (expect, update) {
    if (!equals(this.kotlinx$atomicfu$value, expect))
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  AtomicLong.prototype.getAndSet$atomicfu = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  AtomicLong.prototype.getAndIncrement$atomicfu$long = function () {
    var tmp$;
    return tmp$ = this.kotlinx$atomicfu$value, this.kotlinx$atomicfu$value = tmp$.inc(), tmp$;
  };
  AtomicLong.prototype.getAndDecrement$atomicfu$long = function () {
    var tmp$;
    return tmp$ = this.kotlinx$atomicfu$value, this.kotlinx$atomicfu$value = tmp$.dec(), tmp$;
  };
  AtomicLong.prototype.getAndAdd$atomicfu$long = function (delta) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value.add(delta);
    return oldValue;
  };
  AtomicLong.prototype.addAndGet$atomicfu$long = function (delta) {
    this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value.add(delta);
    return this.kotlinx$atomicfu$value;
  };
  AtomicLong.prototype.incrementAndGet$atomicfu$long = function () {
    return this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value.inc(), this.kotlinx$atomicfu$value;
  };
  AtomicLong.prototype.decrementAndGet$atomicfu$long = function () {
    return this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value.dec(), this.kotlinx$atomicfu$value;
  };
  AtomicLong.prototype.plusAssign_s8cxhz$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicLong.plusAssign_s8cxhz$', function (delta) {
    this.getAndAdd$atomicfu$long(delta);
  });
  AtomicLong.prototype.minusAssign_s8cxhz$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicLong.minusAssign_s8cxhz$', function (delta) {
    this.getAndAdd$atomicfu$long(delta.unaryMinus());
  });
  AtomicLong.prototype.toString = function () {
    return this.kotlinx$atomicfu$value.toString();
  };
  AtomicLong.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomicLong',
    interfaces: []
  };
  var Lock;
  var reentrantLock = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.locks.reentrantLock', wrapFunction(function () {
    var locks = _.kotlinx.atomicfu.locks;
    return function () {
      return locks.reentrantLock$atomicfu;
    };
  }));
  function ReentrantLock() {
  }
  ReentrantLock.prototype.lock = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.locks.ReentrantLock.lock', function () {
  });
  ReentrantLock.prototype.tryLock = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.locks.ReentrantLock.tryLock', function () {
    return true;
  });
  ReentrantLock.prototype.unlock = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.locks.ReentrantLock.unlock', function () {
  });
  ReentrantLock.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReentrantLock',
    interfaces: []
  };
  var withLock = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.locks.withLock_1uzpy$', function ($receiver, block) {
    return block();
  });
  var synchronized = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.locks.synchronized_eocq09$', function (lock, block) {
    return block();
  });
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$atomicfu = package$kotlinx.atomicfu || (package$kotlinx.atomicfu = {});
  package$atomicfu.AtomicLongArray$ofNulls = atomicArrayOfNulls;
  $$importsForInline$$['kotlinx-atomicfu'] = _;
  package$atomicfu.loop_jlk8u1$ = loop;
  package$atomicfu.update_xk4wt8$ = update;
  package$atomicfu.getAndUpdate_xk4wt8$ = getAndUpdate;
  package$atomicfu.updateAndGet_xk4wt8$ = updateAndGet;
  package$atomicfu.loop_835cj1$ = loop_0;
  package$atomicfu.update_toml5v$ = update_0;
  package$atomicfu.getAndUpdate_toml5v$ = getAndUpdate_0;
  package$atomicfu.updateAndGet_toml5v$ = updateAndGet_0;
  package$atomicfu.loop_737bgt$ = loop_1;
  package$atomicfu.update_4tf4dm$ = update_1;
  package$atomicfu.getAndUpdate_4tf4dm$ = getAndUpdate_1;
  package$atomicfu.updateAndGet_4tf4dm$ = updateAndGet_1;
  package$atomicfu.loop_ian79v$ = loop_2;
  package$atomicfu.update_ifkm8b$ = update_2;
  package$atomicfu.getAndUpdate_ifkm8b$ = getAndUpdate_2;
  package$atomicfu.updateAndGet_ifkm8b$ = updateAndGet_2;
  package$atomicfu.AtomicIntArray$int = AtomicIntArray;
  package$atomicfu.AtomicLongArray$long = AtomicLongArray;
  package$atomicfu.AtomicBooleanArray$boolean = AtomicBooleanArray;
  package$atomicfu.AtomicRefArray$ref = AtomicArray;
  package$atomicfu.atomic$ref$ = atomic;
  package$atomicfu.atomic$int$ = atomic_0;
  package$atomicfu.atomic$long$ = atomic_1;
  package$atomicfu.atomic$boolean$ = atomic_2;
  package$atomicfu.AtomicRef = AtomicRef;
  package$atomicfu.AtomicBoolean = AtomicBoolean;
  package$atomicfu.AtomicInt = AtomicInt;
  package$atomicfu.AtomicLong = AtomicLong;
  var package$locks = package$atomicfu.locks || (package$atomicfu.locks = {});
  Object.defineProperty(package$locks, 'reentrantLock$atomicfu', {
    get: function () {
      return Lock;
    }
  });
  package$locks.reentrantLock = reentrantLock;
  package$locks.ReentrantLock = ReentrantLock;
  package$locks.withLock_1uzpy$ = withLock;
  package$locks.synchronized_eocq09$ = synchronized;
  Lock = new ReentrantLock();
  Kotlin.defineModule('kotlinx-atomicfu', _);
  return _;
}));

//# sourceMappingURL=kotlinx-atomicfu.js.map
