(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-logging'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-logging'.");
    }
    root['kotlin-logging'] = factory(typeof this['kotlin-logging'] === 'undefined' ? {} : this['kotlin-logging'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var toString = Kotlin.toString;
  var equals = Kotlin.equals;
  var Exception = Kotlin.kotlin.Exception;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var Unit = Kotlin.kotlin.Unit;
  var getCallableRef = Kotlin.getCallableRef;
  KotlinLoggingLevel.prototype = Object.create(Enum.prototype);
  KotlinLoggingLevel.prototype.constructor = KotlinLoggingLevel;
  var toStringSafe = defineInlineFunction('kotlin-logging.mu.internal.toStringSafe_qhgloa$', wrapFunction(function () {
    var toString = Kotlin.toString;
    var Exception = Kotlin.kotlin.Exception;
    return function ($receiver) {
      var tmp$;
      try {
        tmp$ = toString($receiver());
      }
       catch (e) {
        if (Kotlin.isType(e, Exception)) {
          tmp$ = 'Log message invocation failed: ' + e;
        }
         else
          throw e;
      }
      return tmp$;
    };
  }));
  function Appender() {
  }
  Appender.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Appender',
    interfaces: []
  };
  function ConsoleOutputAppender() {
    ConsoleOutputAppender_instance = this;
  }
  ConsoleOutputAppender.prototype.trace_s8jyv4$ = function (message) {
    console.log(message);
  };
  ConsoleOutputAppender.prototype.debug_s8jyv4$ = function (message) {
    console.log(message);
  };
  ConsoleOutputAppender.prototype.info_s8jyv4$ = function (message) {
    console.info(message);
  };
  ConsoleOutputAppender.prototype.warn_s8jyv4$ = function (message) {
    console.warn(message);
  };
  ConsoleOutputAppender.prototype.error_s8jyv4$ = function (message) {
    console.error(message);
  };
  ConsoleOutputAppender.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ConsoleOutputAppender',
    interfaces: [Appender]
  };
  var ConsoleOutputAppender_instance = null;
  function ConsoleOutputAppender_getInstance() {
    if (ConsoleOutputAppender_instance === null) {
      new ConsoleOutputAppender();
    }
    return ConsoleOutputAppender_instance;
  }
  function DefaultMessageFormatter() {
    DefaultMessageFormatter_instance = this;
  }
  DefaultMessageFormatter.prototype.formatMessage_pijeg6$ = function (level, loggerName, msg) {
    var tmp$ = level.name + ': [' + loggerName + '] ';
    var tmp$_0;
    try {
      tmp$_0 = toString(msg());
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        tmp$_0 = 'Log message invocation failed: ' + e;
      }
       else
        throw e;
    }
    return tmp$ + tmp$_0;
  };
  DefaultMessageFormatter.prototype.formatMessage_hqgb2y$ = function (level, loggerName, t, msg) {
    var tmp$ = level.name + ': [' + loggerName + '] ';
    var tmp$_0;
    try {
      tmp$_0 = toString(msg());
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        tmp$_0 = 'Log message invocation failed: ' + e;
      }
       else
        throw e;
    }
    return tmp$ + tmp$_0 + this.throwableToString_0(t);
  };
  DefaultMessageFormatter.prototype.formatMessage_i9qi47$ = function (level, loggerName, marker, msg) {
    var tmp$ = level.name + ': [' + loggerName + '] ' + toString(marker != null ? marker.getName() : null) + ' ';
    var tmp$_0;
    try {
      tmp$_0 = toString(msg());
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        tmp$_0 = 'Log message invocation failed: ' + e;
      }
       else
        throw e;
    }
    return tmp$ + tmp$_0;
  };
  DefaultMessageFormatter.prototype.formatMessage_fud0c7$ = function (level, loggerName, marker, t, msg) {
    var tmp$ = level.name + ': [' + loggerName + '] ' + toString(marker != null ? marker.getName() : null) + ' ';
    var tmp$_0;
    try {
      tmp$_0 = toString(msg());
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        tmp$_0 = 'Log message invocation failed: ' + e;
      }
       else
        throw e;
    }
    return tmp$ + tmp$_0 + this.throwableToString_0(t);
  };
  DefaultMessageFormatter.prototype.throwableToString_0 = function ($receiver) {
    if ($receiver == null) {
      return '';
    }
    var msg = '';
    var current = $receiver;
    while (current != null && !equals(current.cause, current)) {
      msg += ", Caused by: '" + toString(current.message) + "'";
      current = current.cause;
    }
    return msg;
  };
  DefaultMessageFormatter.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DefaultMessageFormatter',
    interfaces: [Formatter]
  };
  var DefaultMessageFormatter_instance = null;
  function DefaultMessageFormatter_getInstance() {
    if (DefaultMessageFormatter_instance === null) {
      new DefaultMessageFormatter();
    }
    return DefaultMessageFormatter_instance;
  }
  function Formatter() {
  }
  Formatter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Formatter',
    interfaces: []
  };
  function KLogger() {
  }
  KLogger.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'KLogger',
    interfaces: []
  };
  function KMarkerFactory() {
    KMarkerFactory_instance = this;
  }
  KMarkerFactory.prototype.getMarker_61zpoe$ = function (name) {
    return new MarkerJS(name);
  };
  KMarkerFactory.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'KMarkerFactory',
    interfaces: []
  };
  var KMarkerFactory_instance = null;
  function KMarkerFactory_getInstance() {
    if (KMarkerFactory_instance === null) {
      new KMarkerFactory();
    }
    return KMarkerFactory_instance;
  }
  function KotlinLogging() {
    KotlinLogging_instance = this;
  }
  KotlinLogging.prototype.logger_o14v8n$ = function (func) {
    return new KLoggerJS(get_js(Kotlin.getKClassFromExpression(func)).name);
  };
  KotlinLogging.prototype.logger_61zpoe$ = function (name) {
    return new KLoggerJS(name);
  };
  KotlinLogging.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'KotlinLogging',
    interfaces: []
  };
  var KotlinLogging_instance = null;
  function KotlinLogging_getInstance() {
    if (KotlinLogging_instance === null) {
      new KotlinLogging();
    }
    return KotlinLogging_instance;
  }
  function KotlinLoggingConfiguration() {
    KotlinLoggingConfiguration_instance = this;
    this.LOG_LEVEL = KotlinLoggingLevel$INFO_getInstance();
    this.APPENDER = ConsoleOutputAppender_getInstance();
    this.FORMATTER = DefaultMessageFormatter_getInstance();
  }
  KotlinLoggingConfiguration.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'KotlinLoggingConfiguration',
    interfaces: []
  };
  var KotlinLoggingConfiguration_instance = null;
  function KotlinLoggingConfiguration_getInstance() {
    if (KotlinLoggingConfiguration_instance === null) {
      new KotlinLoggingConfiguration();
    }
    return KotlinLoggingConfiguration_instance;
  }
  function KotlinLoggingLevel(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function KotlinLoggingLevel_initFields() {
    KotlinLoggingLevel_initFields = function () {
    };
    KotlinLoggingLevel$TRACE_instance = new KotlinLoggingLevel('TRACE', 0);
    KotlinLoggingLevel$DEBUG_instance = new KotlinLoggingLevel('DEBUG', 1);
    KotlinLoggingLevel$INFO_instance = new KotlinLoggingLevel('INFO', 2);
    KotlinLoggingLevel$WARN_instance = new KotlinLoggingLevel('WARN', 3);
    KotlinLoggingLevel$ERROR_instance = new KotlinLoggingLevel('ERROR', 4);
  }
  var KotlinLoggingLevel$TRACE_instance;
  function KotlinLoggingLevel$TRACE_getInstance() {
    KotlinLoggingLevel_initFields();
    return KotlinLoggingLevel$TRACE_instance;
  }
  var KotlinLoggingLevel$DEBUG_instance;
  function KotlinLoggingLevel$DEBUG_getInstance() {
    KotlinLoggingLevel_initFields();
    return KotlinLoggingLevel$DEBUG_instance;
  }
  var KotlinLoggingLevel$INFO_instance;
  function KotlinLoggingLevel$INFO_getInstance() {
    KotlinLoggingLevel_initFields();
    return KotlinLoggingLevel$INFO_instance;
  }
  var KotlinLoggingLevel$WARN_instance;
  function KotlinLoggingLevel$WARN_getInstance() {
    KotlinLoggingLevel_initFields();
    return KotlinLoggingLevel$WARN_instance;
  }
  var KotlinLoggingLevel$ERROR_instance;
  function KotlinLoggingLevel$ERROR_getInstance() {
    KotlinLoggingLevel_initFields();
    return KotlinLoggingLevel$ERROR_instance;
  }
  KotlinLoggingLevel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KotlinLoggingLevel',
    interfaces: [Enum]
  };
  function KotlinLoggingLevel$values() {
    return [KotlinLoggingLevel$TRACE_getInstance(), KotlinLoggingLevel$DEBUG_getInstance(), KotlinLoggingLevel$INFO_getInstance(), KotlinLoggingLevel$WARN_getInstance(), KotlinLoggingLevel$ERROR_getInstance()];
  }
  KotlinLoggingLevel.values = KotlinLoggingLevel$values;
  function KotlinLoggingLevel$valueOf(name) {
    switch (name) {
      case 'TRACE':
        return KotlinLoggingLevel$TRACE_getInstance();
      case 'DEBUG':
        return KotlinLoggingLevel$DEBUG_getInstance();
      case 'INFO':
        return KotlinLoggingLevel$INFO_getInstance();
      case 'WARN':
        return KotlinLoggingLevel$WARN_getInstance();
      case 'ERROR':
        return KotlinLoggingLevel$ERROR_getInstance();
      default:throwISE('No enum constant mu.KotlinLoggingLevel.' + name);
    }
  }
  KotlinLoggingLevel.valueOf_61zpoe$ = KotlinLoggingLevel$valueOf;
  function isLoggingEnabled($receiver) {
    return $receiver.ordinal >= KotlinLoggingConfiguration_getInstance().LOG_LEVEL.ordinal;
  }
  function Marker() {
  }
  Marker.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Marker',
    interfaces: []
  };
  function KLoggerJS(loggerName) {
    this.loggerName_0 = loggerName;
  }
  KLoggerJS.prototype.trace_nq59yw$ = function (msg) {
    this.logIfEnabled_0(KotlinLoggingLevel$TRACE_getInstance(), msg, getCallableRef('trace', function ($receiver, message) {
      return $receiver.trace_s8jyv4$(message), Unit;
    }.bind(null, KotlinLoggingConfiguration_getInstance().APPENDER)));
  };
  KLoggerJS.prototype.debug_nq59yw$ = function (msg) {
    this.logIfEnabled_0(KotlinLoggingLevel$DEBUG_getInstance(), msg, getCallableRef('debug', function ($receiver, message) {
      return $receiver.debug_s8jyv4$(message), Unit;
    }.bind(null, KotlinLoggingConfiguration_getInstance().APPENDER)));
  };
  KLoggerJS.prototype.info_nq59yw$ = function (msg) {
    this.logIfEnabled_0(KotlinLoggingLevel$INFO_getInstance(), msg, getCallableRef('info', function ($receiver, message) {
      return $receiver.info_s8jyv4$(message), Unit;
    }.bind(null, KotlinLoggingConfiguration_getInstance().APPENDER)));
  };
  KLoggerJS.prototype.warn_nq59yw$ = function (msg) {
    this.logIfEnabled_0(KotlinLoggingLevel$WARN_getInstance(), msg, getCallableRef('warn', function ($receiver, message) {
      return $receiver.warn_s8jyv4$(message), Unit;
    }.bind(null, KotlinLoggingConfiguration_getInstance().APPENDER)));
  };
  KLoggerJS.prototype.error_nq59yw$ = function (msg) {
    this.logIfEnabled_0(KotlinLoggingLevel$ERROR_getInstance(), msg, getCallableRef('error', function ($receiver, message) {
      return $receiver.error_s8jyv4$(message), Unit;
    }.bind(null, KotlinLoggingConfiguration_getInstance().APPENDER)));
  };
  KLoggerJS.prototype.trace_ca4k3s$ = function (t, msg) {
    this.logIfEnabled_1(KotlinLoggingLevel$TRACE_getInstance(), msg, t, getCallableRef('trace', function ($receiver, message) {
      return $receiver.trace_s8jyv4$(message), Unit;
    }.bind(null, KotlinLoggingConfiguration_getInstance().APPENDER)));
  };
  KLoggerJS.prototype.debug_ca4k3s$ = function (t, msg) {
    this.logIfEnabled_1(KotlinLoggingLevel$DEBUG_getInstance(), msg, t, getCallableRef('debug', function ($receiver, message) {
      return $receiver.debug_s8jyv4$(message), Unit;
    }.bind(null, KotlinLoggingConfiguration_getInstance().APPENDER)));
  };
  KLoggerJS.prototype.info_ca4k3s$ = function (t, msg) {
    this.logIfEnabled_1(KotlinLoggingLevel$INFO_getInstance(), msg, t, getCallableRef('info', function ($receiver, message) {
      return $receiver.info_s8jyv4$(message), Unit;
    }.bind(null, KotlinLoggingConfiguration_getInstance().APPENDER)));
  };
  KLoggerJS.prototype.warn_ca4k3s$ = function (t, msg) {
    this.logIfEnabled_1(KotlinLoggingLevel$WARN_getInstance(), msg, t, getCallableRef('warn', function ($receiver, message) {
      return $receiver.warn_s8jyv4$(message), Unit;
    }.bind(null, KotlinLoggingConfiguration_getInstance().APPENDER)));
  };
  KLoggerJS.prototype.error_ca4k3s$ = function (t, msg) {
    this.logIfEnabled_1(KotlinLoggingLevel$ERROR_getInstance(), msg, t, getCallableRef('error', function ($receiver, message) {
      return $receiver.error_s8jyv4$(message), Unit;
    }.bind(null, KotlinLoggingConfiguration_getInstance().APPENDER)));
  };
  KLoggerJS.prototype.trace_8jakm3$ = function (marker, msg) {
    this.logIfEnabled_2(KotlinLoggingLevel$TRACE_getInstance(), marker, msg, getCallableRef('trace', function ($receiver, message) {
      return $receiver.trace_s8jyv4$(message), Unit;
    }.bind(null, KotlinLoggingConfiguration_getInstance().APPENDER)));
  };
  KLoggerJS.prototype.debug_8jakm3$ = function (marker, msg) {
    this.logIfEnabled_2(KotlinLoggingLevel$DEBUG_getInstance(), marker, msg, getCallableRef('debug', function ($receiver, message) {
      return $receiver.debug_s8jyv4$(message), Unit;
    }.bind(null, KotlinLoggingConfiguration_getInstance().APPENDER)));
  };
  KLoggerJS.prototype.info_8jakm3$ = function (marker, msg) {
    this.logIfEnabled_2(KotlinLoggingLevel$INFO_getInstance(), marker, msg, getCallableRef('info', function ($receiver, message) {
      return $receiver.info_s8jyv4$(message), Unit;
    }.bind(null, KotlinLoggingConfiguration_getInstance().APPENDER)));
  };
  KLoggerJS.prototype.warn_8jakm3$ = function (marker, msg) {
    this.logIfEnabled_2(KotlinLoggingLevel$WARN_getInstance(), marker, msg, getCallableRef('warn', function ($receiver, message) {
      return $receiver.warn_s8jyv4$(message), Unit;
    }.bind(null, KotlinLoggingConfiguration_getInstance().APPENDER)));
  };
  KLoggerJS.prototype.error_8jakm3$ = function (marker, msg) {
    this.logIfEnabled_2(KotlinLoggingLevel$ERROR_getInstance(), marker, msg, getCallableRef('error', function ($receiver, message) {
      return $receiver.error_s8jyv4$(message), Unit;
    }.bind(null, KotlinLoggingConfiguration_getInstance().APPENDER)));
  };
  KLoggerJS.prototype.trace_o4svvp$ = function (marker, t, msg) {
    this.logIfEnabled_3(KotlinLoggingLevel$TRACE_getInstance(), marker, msg, t, getCallableRef('trace', function ($receiver, message) {
      return $receiver.trace_s8jyv4$(message), Unit;
    }.bind(null, KotlinLoggingConfiguration_getInstance().APPENDER)));
  };
  KLoggerJS.prototype.debug_o4svvp$ = function (marker, t, msg) {
    this.logIfEnabled_3(KotlinLoggingLevel$DEBUG_getInstance(), marker, msg, t, getCallableRef('debug', function ($receiver, message) {
      return $receiver.debug_s8jyv4$(message), Unit;
    }.bind(null, KotlinLoggingConfiguration_getInstance().APPENDER)));
  };
  KLoggerJS.prototype.info_o4svvp$ = function (marker, t, msg) {
    this.logIfEnabled_3(KotlinLoggingLevel$INFO_getInstance(), marker, msg, t, getCallableRef('info', function ($receiver, message) {
      return $receiver.info_s8jyv4$(message), Unit;
    }.bind(null, KotlinLoggingConfiguration_getInstance().APPENDER)));
  };
  KLoggerJS.prototype.warn_o4svvp$ = function (marker, t, msg) {
    this.logIfEnabled_3(KotlinLoggingLevel$WARN_getInstance(), marker, msg, t, getCallableRef('warn', function ($receiver, message) {
      return $receiver.warn_s8jyv4$(message), Unit;
    }.bind(null, KotlinLoggingConfiguration_getInstance().APPENDER)));
  };
  KLoggerJS.prototype.error_o4svvp$ = function (marker, t, msg) {
    this.logIfEnabled_3(KotlinLoggingLevel$ERROR_getInstance(), marker, msg, t, getCallableRef('error', function ($receiver, message) {
      return $receiver.error_s8jyv4$(message), Unit;
    }.bind(null, KotlinLoggingConfiguration_getInstance().APPENDER)));
  };
  KLoggerJS.prototype.logIfEnabled_0 = function ($receiver, msg, logFunction) {
    if (isLoggingEnabled($receiver)) {
      logFunction(KotlinLoggingConfiguration_getInstance().FORMATTER.formatMessage_pijeg6$($receiver, this.loggerName_0, msg));
    }
  };
  KLoggerJS.prototype.logIfEnabled_1 = function ($receiver, msg, t, logFunction) {
    if (isLoggingEnabled($receiver)) {
      logFunction(KotlinLoggingConfiguration_getInstance().FORMATTER.formatMessage_hqgb2y$($receiver, this.loggerName_0, t, msg));
    }
  };
  KLoggerJS.prototype.logIfEnabled_2 = function ($receiver, marker, msg, logFunction) {
    if (isLoggingEnabled($receiver)) {
      logFunction(KotlinLoggingConfiguration_getInstance().FORMATTER.formatMessage_i9qi47$($receiver, this.loggerName_0, marker, msg));
    }
  };
  KLoggerJS.prototype.logIfEnabled_3 = function ($receiver, marker, msg, t, logFunction) {
    if (isLoggingEnabled($receiver)) {
      logFunction(KotlinLoggingConfiguration_getInstance().FORMATTER.formatMessage_fud0c7$($receiver, this.loggerName_0, marker, t, msg));
    }
  };
  function KLoggerJS$entry$lambda(closure$argArray) {
    return function () {
      return 'entry(' + closure$argArray + ')';
    };
  }
  KLoggerJS.prototype.entry_yhszz7$ = function (argArray) {
    this.logIfEnabled_0(KotlinLoggingLevel$TRACE_getInstance(), KLoggerJS$entry$lambda(argArray), getCallableRef('trace', function ($receiver, message) {
      return $receiver.trace_s8jyv4$(message), Unit;
    }.bind(null, KotlinLoggingConfiguration_getInstance().APPENDER)));
  };
  function KLoggerJS$exit$lambda() {
    return 'exit()';
  }
  KLoggerJS.prototype.exit = function () {
    this.logIfEnabled_0(KotlinLoggingLevel$TRACE_getInstance(), KLoggerJS$exit$lambda, getCallableRef('trace', function ($receiver, message) {
      return $receiver.trace_s8jyv4$(message), Unit;
    }.bind(null, KotlinLoggingConfiguration_getInstance().APPENDER)));
  };
  function KLoggerJS$exit$lambda_0(closure$result) {
    return function () {
      return 'exit(' + closure$result + ')';
    };
  }
  KLoggerJS.prototype.exit_mh5how$ = function (result) {
    this.logIfEnabled_0(KotlinLoggingLevel$TRACE_getInstance(), KLoggerJS$exit$lambda_0(result), getCallableRef('trace', function ($receiver, message) {
      return $receiver.trace_s8jyv4$(message), Unit;
    }.bind(null, KotlinLoggingConfiguration_getInstance().APPENDER)));
    return result;
  };
  function KLoggerJS$throwing$lambda(closure$throwable) {
    return function () {
      return 'throwing(' + closure$throwable;
    };
  }
  KLoggerJS.prototype.throwing_849n7l$ = function (throwable) {
    this.logIfEnabled_1(KotlinLoggingLevel$ERROR_getInstance(), KLoggerJS$throwing$lambda(throwable), throwable, getCallableRef('error', function ($receiver, message) {
      return $receiver.error_s8jyv4$(message), Unit;
    }.bind(null, KotlinLoggingConfiguration_getInstance().APPENDER)));
    return throwable;
  };
  function KLoggerJS$catching$lambda(closure$throwable) {
    return function () {
      return 'catching(' + closure$throwable;
    };
  }
  KLoggerJS.prototype.catching_849n7l$ = function (throwable) {
    this.logIfEnabled_1(KotlinLoggingLevel$ERROR_getInstance(), KLoggerJS$catching$lambda(throwable), throwable, getCallableRef('error', function ($receiver, message) {
      return $receiver.error_s8jyv4$(message), Unit;
    }.bind(null, KotlinLoggingConfiguration_getInstance().APPENDER)));
  };
  KLoggerJS.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KLoggerJS',
    interfaces: [KLogger]
  };
  function MarkerJS(name) {
    this.name_0 = name;
  }
  MarkerJS.prototype.getName = function () {
    return this.name_0;
  };
  MarkerJS.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MarkerJS',
    interfaces: [Marker]
  };
  var package$mu = _.mu || (_.mu = {});
  var package$internal = package$mu.internal || (package$mu.internal = {});
  package$internal.toStringSafe_qhgloa$ = toStringSafe;
  package$mu.Appender = Appender;
  Object.defineProperty(package$mu, 'ConsoleOutputAppender', {
    get: ConsoleOutputAppender_getInstance
  });
  $$importsForInline$$['kotlin-logging'] = _;
  Object.defineProperty(package$mu, 'DefaultMessageFormatter', {
    get: DefaultMessageFormatter_getInstance
  });
  package$mu.Formatter = Formatter;
  package$mu.KLogger = KLogger;
  Object.defineProperty(package$mu, 'KMarkerFactory', {
    get: KMarkerFactory_getInstance
  });
  Object.defineProperty(package$mu, 'KotlinLogging', {
    get: KotlinLogging_getInstance
  });
  Object.defineProperty(package$mu, 'KotlinLoggingConfiguration', {
    get: KotlinLoggingConfiguration_getInstance
  });
  Object.defineProperty(KotlinLoggingLevel, 'TRACE', {
    get: KotlinLoggingLevel$TRACE_getInstance
  });
  Object.defineProperty(KotlinLoggingLevel, 'DEBUG', {
    get: KotlinLoggingLevel$DEBUG_getInstance
  });
  Object.defineProperty(KotlinLoggingLevel, 'INFO', {
    get: KotlinLoggingLevel$INFO_getInstance
  });
  Object.defineProperty(KotlinLoggingLevel, 'WARN', {
    get: KotlinLoggingLevel$WARN_getInstance
  });
  Object.defineProperty(KotlinLoggingLevel, 'ERROR', {
    get: KotlinLoggingLevel$ERROR_getInstance
  });
  package$mu.KotlinLoggingLevel = KotlinLoggingLevel;
  package$mu.isLoggingEnabled_pm19j7$ = isLoggingEnabled;
  package$mu.Marker = Marker;
  package$internal.KLoggerJS = KLoggerJS;
  package$internal.MarkerJS = MarkerJS;
  Kotlin.defineModule('kotlin-logging', _);
  return _;
}));

//# sourceMappingURL=kotlin-logging.js.map
