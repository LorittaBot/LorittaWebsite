if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'spicy-morenitta'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'spicy-morenitta'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'spicy-morenitta'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'spicy-morenitta'.");
}
if (typeof this['kotlinx-serialization-runtime-js'] === 'undefined') {
  throw new Error("Error loading module 'spicy-morenitta'. Its dependency 'kotlinx-serialization-runtime-js' was not found. Please, check whether 'kotlinx-serialization-runtime-js' is loaded prior to 'spicy-morenitta'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'spicy-morenitta'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'spicy-morenitta'.");
}
this['spicy-morenitta'] = function (_, Kotlin, $module$kotlinx_coroutines_core, $module$kotlinx_serialization_runtime_js, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var numberToInt = Kotlin.numberToInt;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var toShort = Kotlin.toShort;
  var Unit = Kotlin.kotlin.Unit;
  var toString = Kotlin.toString;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var throwCCE = Kotlin.throwCCE;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var JSON_0 = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.json.JSON;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var L20000 = Kotlin.Long.fromInt(20000);
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var asList = Kotlin.org.w3c.dom.asList_kt9thq$;
  var equals = Kotlin.equals;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var appendHTML = $module$kotlinx_html_js.kotlinx.html.stream.appendHTML_94plub$;
  var set_style = $module$kotlinx_html_js.kotlinx.html.set_style_ueiko3$;
  var img = $module$kotlinx_html_js.kotlinx.html.img_evw26v$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var i = $module$kotlinx_html_js.kotlinx.html.i_5g1p9k$;
  var button = $module$kotlinx_html_js.kotlinx.html.button_i4xb7r$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.div_59el9d$;
  var first = Kotlin.kotlin.collections.first_us0mfu$;
  var first_0 = Kotlin.kotlin.collections.first_2p1efm$;
  var TingleModal = tingle.modal;
  var createHTML = $module$kotlinx_html_js.kotlinx.html.stream.createHTML_dqye30$;
  var input_0 = $module$kotlinx_html_js.kotlinx.html.input_e1g74z$;
  var textArea = $module$kotlinx_html_js.kotlinx.html.textArea_b1tfd9$;
  var numberInput = $module$kotlinx_html_js.kotlinx.html.numberInput_ap9uf6$;
  var L1000 = Kotlin.Long.fromInt(1000);
  var delay = $module$kotlinx_coroutines_core.kotlinx.coroutines.delay_s8cxhz$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var SerialClassDescImpl = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.SerialClassDescImpl;
  var internal = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal;
  var UnknownFieldException = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.UnknownFieldException;
  var KSerializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.KSerializer;
  var MissingFieldException = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException;
  var EnumSerializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.EnumSerializer;
  var ArrayListSerializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ArrayListSerializer;
  var String_0 = String;
  var ReferenceArraySerializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ReferenceArraySerializer;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  JsonObject.prototype = Object.create(JsonElement.prototype);
  JsonObject.prototype.constructor = JsonObject;
  TimersView$Timer$TimerEffect$TimerEffectType.prototype = Object.create(Enum.prototype);
  TimersView$Timer$TimerEffect$TimerEffectType.prototype.constructor = TimersView$Timer$TimerEffect$TimerEffectType;
  function main(args) {
    println('Hello JavaScript!');
  }
  var page;
  function BetterDocument(document) {
    this.document = document;
  }
  BetterDocument.prototype.getElementById_61zpoe$ = function (name) {
    return ensureNotNull(this.document.getElementById(name));
  };
  BetterDocument.prototype.getElementByClass_61zpoe$ = function (name) {
    return ensureNotNull(this.document.getElementsByClassName(name)[0]);
  };
  BetterDocument.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BetterDocument',
    interfaces: []
  };
  function appendBuilder($receiver, builder) {
    var elChild = document.createElement('div');
    elChild.innerHTML = builder.toString();
    $receiver.appendChild(elChild);
  }
  function DateUtils() {
    DateUtils_instance = this;
  }
  DateUtils.prototype.formatDateDiff_lu1900$ = function (fromDate, toDate) {
    var diff = toDate - fromDate;
    var diffSeconds = numberToInt(diff / 1000 % 60);
    var diffMinutes = numberToInt(diff / 60000 % 60);
    var diffHours = numberToInt(diff / 3600000 % 24);
    var diffDays = numberToInt(diff / 86400000);
    return diffDays.toString() + ' dias, ' + diffHours + ' horas, ' + diffMinutes + ' minutos, ' + diffSeconds + ' segundos';
  };
  DateUtils.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DateUtils',
    interfaces: []
  };
  var DateUtils_instance = null;
  function DateUtils_getInstance() {
    if (DateUtils_instance === null) {
      new DateUtils();
    }
    return DateUtils_instance;
  }
  function HttpRequest() {
    HttpRequest$Companion_getInstance();
  }
  function HttpRequest$Companion() {
    HttpRequest$Companion_instance = this;
  }
  var Result = Kotlin.kotlin.Result;
  function HttpRequest$Companion$get$lambda$lambda(closure$xmlHttp, closure$cont) {
    return function (it) {
      if (closure$xmlHttp.readyState === toShort(4)) {
        var $receiver = closure$cont;
        var value = new HttpResponse(closure$xmlHttp.status, closure$xmlHttp.responseText);
        $receiver.resumeWith_tl1gpc$(new Result(value));
      }
      return Unit;
    };
  }
  function HttpRequest$Companion$get$lambda(closure$xmlHttp) {
    return function (cont) {
      closure$xmlHttp.onreadystatechange = HttpRequest$Companion$get$lambda$lambda(closure$xmlHttp, cont);
      closure$xmlHttp.send(null);
      return Unit;
    };
  }
  var intercepted = Kotlin.kotlin.coroutines.intrinsics.intercepted_f9mg25$;
  var SafeContinuation_init = Kotlin.kotlin.coroutines.SafeContinuation_init_wj8d80$;
  function suspendCoroutine$lambda(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(intercepted(c));
      closure$block(safe);
      return safe.getOrThrow();
    };
  }
  HttpRequest$Companion.prototype.get_61zpoe$ = function (url_0, continuation_0, suspended) {
    var instance = new Coroutine$get_61zpoe$(this, url_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$get_61zpoe$($this, url_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$url = url_0;
  }
  Coroutine$get_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$get_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$get_61zpoe$.prototype.constructor = Coroutine$get_61zpoe$;
  Coroutine$get_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open('GET', this.local$url, true);
            this.state_0 = 2;
            this.result_0 = suspendCoroutine$lambda(HttpRequest$Companion$get$lambda(xmlHttp))(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function HttpRequest$Companion$post$lambda$lambda(closure$xmlHttp, closure$cont) {
    return function (it) {
      if (closure$xmlHttp.readyState === toShort(4)) {
        var $receiver = closure$cont;
        var value = new HttpResponse(closure$xmlHttp.status, closure$xmlHttp.responseText);
        $receiver.resumeWith_tl1gpc$(new Result(value));
      }
      return Unit;
    };
  }
  function HttpRequest$Companion$post$lambda(closure$xmlHttp, closure$data) {
    return function (cont) {
      closure$xmlHttp.onreadystatechange = HttpRequest$Companion$post$lambda$lambda(closure$xmlHttp, cont);
      closure$xmlHttp.send(closure$data);
      return Unit;
    };
  }
  function suspendCoroutine$lambda_0(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(intercepted(c));
      closure$block(safe);
      return safe.getOrThrow();
    };
  }
  HttpRequest$Companion.prototype.post_puj7f4$ = function (url_0, data_0, continuation_0, suspended) {
    var instance = new Coroutine$post_puj7f4$(this, url_0, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$post_puj7f4$($this, url_0, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$url = url_0;
    this.local$data = data_0;
  }
  Coroutine$post_puj7f4$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$post_puj7f4$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$post_puj7f4$.prototype.constructor = Coroutine$post_puj7f4$;
  Coroutine$post_puj7f4$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open('POST', this.local$url, true);
            this.state_0 = 2;
            this.result_0 = suspendCoroutine$lambda_0(HttpRequest$Companion$post$lambda(xmlHttp, this.local$data))(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function HttpRequest$Companion$patch$lambda$lambda(closure$xmlHttp, closure$cont) {
    return function (it) {
      if (closure$xmlHttp.readyState === toShort(4)) {
        var $receiver = closure$cont;
        var value = new HttpResponse(closure$xmlHttp.status, closure$xmlHttp.responseText);
        $receiver.resumeWith_tl1gpc$(new Result(value));
      }
      return Unit;
    };
  }
  function HttpRequest$Companion$patch$lambda(closure$xmlHttp, closure$data) {
    return function (cont) {
      closure$xmlHttp.onreadystatechange = HttpRequest$Companion$patch$lambda$lambda(closure$xmlHttp, cont);
      closure$xmlHttp.send(closure$data);
      return Unit;
    };
  }
  function suspendCoroutine$lambda_1(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(intercepted(c));
      closure$block(safe);
      return safe.getOrThrow();
    };
  }
  HttpRequest$Companion.prototype.patch_puj7f4$ = function (url_0, data_0, continuation_0, suspended) {
    var instance = new Coroutine$patch_puj7f4$(this, url_0, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$patch_puj7f4$($this, url_0, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$url = url_0;
    this.local$data = data_0;
  }
  Coroutine$patch_puj7f4$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$patch_puj7f4$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$patch_puj7f4$.prototype.constructor = Coroutine$patch_puj7f4$;
  Coroutine$patch_puj7f4$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open('PATCH', this.local$url, true);
            this.state_0 = 2;
            this.result_0 = suspendCoroutine$lambda_1(HttpRequest$Companion$patch$lambda(xmlHttp, this.local$data))(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  HttpRequest$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var HttpRequest$Companion_instance = null;
  function HttpRequest$Companion_getInstance() {
    if (HttpRequest$Companion_instance === null) {
      new HttpRequest$Companion();
    }
    return HttpRequest$Companion_instance;
  }
  HttpRequest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpRequest',
    interfaces: []
  };
  function HttpResponse(statusCode, body) {
    this.statusCode = statusCode;
    this.body = body;
  }
  HttpResponse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpResponse',
    interfaces: []
  };
  function JsonElement(backed) {
    this.backed = backed;
    this.long = toLong(toString(this.backed));
  }
  Object.defineProperty(JsonElement.prototype, 'string', {
    get: function () {
      return toString(this.backed);
    }
  });
  JsonElement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonElement',
    interfaces: []
  };
  function JsonObject(backed) {
    JsonElement.call(this, backed);
  }
  JsonObject.prototype.get_61zpoe$ = function (s) {
    var tmp$;
    var json = Kotlin.isType(tmp$ = this.backed, Object) ? tmp$ : throwCCE();
    var result = this.backed[s];
    return new JsonElement(result);
  };
  JsonObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonObject',
    interfaces: [JsonElement]
  };
  function get_loriUrl() {
    return window.location.protocol + '//' + window.location.host + '/';
  }
  function SaveUtils() {
    SaveUtils_instance = this;
  }
  Object.defineProperty(SaveUtils.prototype, 'guildId', {
    get: function () {
      return page.getElementById_61zpoe$('configuring-guild-id').innerHTML;
    }
  });
  function SaveUtils$prepareSave$lambda(closure$endpoint_0, closure$json_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$SaveUtils$prepareSave$lambda(closure$endpoint_0, closure$json_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$SaveUtils$prepareSave$lambda(closure$endpoint_0, closure$json_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$endpoint = closure$endpoint_0;
    this.local$closure$json = closure$json_0;
  }
  Coroutine$SaveUtils$prepareSave$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SaveUtils$prepareSave$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SaveUtils$prepareSave$lambda.prototype.constructor = Coroutine$SaveUtils$prepareSave$lambda;
  Coroutine$SaveUtils$prepareSave$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = HttpRequest$Companion_getInstance().patch_puj7f4$(this.local$closure$endpoint, JSON.stringify(this.local$closure$json), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var response = this.result_0;
            return response.body;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  SaveUtils.prototype.prepareSave_z70e6a$ = function (type, extras, showSaveScreen, endpoint) {
    if (showSaveScreen === void 0)
      showSaveScreen = true;
    if (endpoint === void 0)
      endpoint = get_loriUrl() + 'api/v1/guild/' + this.guildId + '/config';
    println('Preparing saving stuff...');
    var json_0 = json([]);
    var config = json([]);
    json_0['type'] = type;
    extras(config);
    json_0['config'] = config;
    println('Sending save stuff... kthxbye!');
    println('Sending: ' + JSON.stringify(json_0));
    println('Endpoint: ' + endpoint);
    launch(coroutines.GlobalScope, void 0, void 0, SaveUtils$prepareSave$lambda(endpoint, json_0));
  };
  SaveUtils.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SaveUtils',
    interfaces: []
  };
  var SaveUtils_instance = null;
  function SaveUtils_getInstance() {
    if (SaveUtils_instance === null) {
      new SaveUtils();
    }
    return SaveUtils_instance;
  }
  function SpicyDashboard() {
    SpicyDashboard_instance = this;
  }
  SpicyDashboard.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SpicyDashboard',
    interfaces: []
  };
  var SpicyDashboard_instance = null;
  function SpicyDashboard_getInstance() {
    if (SpicyDashboard_instance === null) {
      new SpicyDashboard();
    }
    return SpicyDashboard_instance;
  }
  function TingleOptions(footer, stickyFooter, closeMethods, closeLabel, cssClass, onOpen, onClose, beforeClose) {
    if (footer === void 0)
      footer = null;
    if (stickyFooter === void 0)
      stickyFooter = null;
    if (closeMethods === void 0)
      closeMethods = [];
    if (closeLabel === void 0)
      closeLabel = null;
    if (cssClass === void 0)
      cssClass = [];
    if (onOpen === void 0)
      onOpen = null;
    if (onClose === void 0)
      onClose = null;
    if (beforeClose === void 0)
      beforeClose = null;
    this.footer = footer;
    this.stickyFooter = stickyFooter;
    this.closeMethods = closeMethods;
    this.closeLabel = closeLabel;
    this.cssClass = cssClass;
    this.onOpen = onOpen;
    this.onClose = onClose;
    this.beforeClose = beforeClose;
  }
  TingleOptions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TingleOptions',
    interfaces: []
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function TimersView() {
    TimersView_instance = this;
    this.loadedTimers = ArrayList_init();
    this.timerEntries_pndq97$_0 = lazy(TimersView$timerEntries$lambda);
    this.currentIndex = -1;
  }
  Object.defineProperty(TimersView.prototype, 'timerEntries', {
    get: function () {
      return this.timerEntries_pndq97$_0.value;
    }
  });
  Object.defineProperty(TimersView.prototype, 'visibleModal', {
    get: function () {
      return page.getElementByClass_61zpoe$('tingle-modal--visible');
    }
  });
  var getKClass = Kotlin.getKClass;
  var getOrDefault = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.context.getOrDefault_6qy6ah$;
  var get_list = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.get_list_gekvwj$;
  function TimersView$start$lambda$lambda(this$TimersView) {
    return function (it) {
      var tmp$, tmp$_0;
      var $receiver = JSON_0.Companion;
      var objects = this$TimersView.loadedTimers;
      println('Clicked! ' + $receiver.stringify_tf03ej$(get_list(getOrDefault($receiver.context, getKClass(TimersView$Timer))), objects));
      tmp$_0 = (tmp$ = this$TimersView.currentIndex, this$TimersView.currentIndex = tmp$ - 1 | 0, tmp$).toString();
      var tmp$_1 = JSON_0.Companion;
      var tmp$_2 = TimersView$Timer$TimerEffect$TimerEffectType$TEXT_getInstance();
      var $receiver_0 = JSON_0.Companion;
      var obj = new TimersView$Timer$TimerEffect$TimerEffectText(L20000, 'Stay awesome! :3');
      var obj_0 = new TimersView$Timer$TimerEffect(tmp$_2, listOf($receiver_0.stringify_tf03ej$(getOrDefault($receiver_0.context, getKClass(TimersView$Timer$TimerEffect$TimerEffectText)), obj)));
      var timer = new TimersView$Timer(tmp$_0, '297732013006389252', '297732013006389252', '0', '60000', [tmp$_1.stringify_tf03ej$(getOrDefault(tmp$_1.context, getKClass(TimersView$Timer$TimerEffect)), obj_0)]);
      this$TimersView.loadedTimers.add_11rb$(timer);
      this$TimersView.addTimerEntry_cc6fk1$(timer);
      this$TimersView.editTimer(timer);
      return Unit;
    };
  }
  function TimersView$start$lambda$lambda$lambda(this$TimersView) {
    return function (it) {
      var $receiver = JSON_0.Companion;
      var objects = this$TimersView.loadedTimers;
      it['timers'] = JSON.parse($receiver.stringify_tf03ej$(get_list(getOrDefault($receiver.context, getKClass(TimersView$Timer))), objects));
      return Unit;
    };
  }
  function TimersView$start$lambda$lambda_0(this$TimersView) {
    return function (it) {
      var $receiver = JSON_0.Companion;
      var objects = this$TimersView.loadedTimers;
      println('Clicked! ' + $receiver.stringify_tf03ej$(get_list(getOrDefault($receiver.context, getKClass(TimersView$Timer))), objects));
      SaveUtils_getInstance().prepareSave_z70e6a$('timers', TimersView$start$lambda$lambda$lambda(this$TimersView));
      return Unit;
    };
  }
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException;
  function TimersView$start$lambda$lambda$lambda_0(closure$timerId, this$TimersView) {
    return function (it) {
      println('Editando timer ' + toLong(closure$timerId).toString() + '...');
      println('Timers existentes:');
      var tmp$;
      tmp$ = this$TimersView.loadedTimers.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        println('Timer ' + element.timerId);
      }
      var tmp$_0 = this$TimersView;
      var $receiver = this$TimersView.loadedTimers;
      var first$result;
      first$break: do {
        var tmp$_1;
        tmp$_1 = $receiver.iterator();
        while (tmp$_1.hasNext()) {
          var element_0 = tmp$_1.next();
          if (equals(element_0.timerId, closure$timerId)) {
            first$result = element_0;
            break first$break;
          }
        }
        throw new NoSuchElementException_init('Collection contains no element matching the predicate.');
      }
       while (false);
      tmp$_0.editTimer(first$result);
      return Unit;
    };
  }
  function TimersView$start$lambda$lambda$lambda_1(this$TimersView, closure$timerId, closure$entry) {
    return function (it) {
      var tmp$ = this$TimersView.loadedTimers;
      var $receiver = this$TimersView.loadedTimers;
      var first$result;
      first$break: do {
        var tmp$_0;
        tmp$_0 = $receiver.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          if (equals(element.timerId, closure$timerId)) {
            first$result = element;
            break first$break;
          }
        }
        throw new NoSuchElementException_init('Collection contains no element matching the predicate.');
      }
       while (false);
      tmp$.remove_11rb$(first$result);
      closure$entry.remove();
      return Unit;
    };
  }
  function TimersView$start$lambda(this$TimersView) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      var timerAsJson = ensureNotNull((tmp$ = document.getElementById('timers-as-json')) != null ? tmp$.innerHTML : null);
      println('timerAsJson: ' + timerAsJson);
      var $receiver = JSON_0.Companion;
      var timers = $receiver.parse_awif5v$(get_list(getOrDefault($receiver.context, getKClass(TimersView$Timer))), timerAsJson);
      println('Timers: ');
      var tmp$_2;
      tmp$_2 = timers.iterator();
      while (tmp$_2.hasNext()) {
        var element = tmp$_2.next();
        println(element.timerId);
        println(element.guildId);
        println(element.channelId);
        println(element.startsAt);
        println(element.repeatDelay);
        println(element.effects);
        println('---');
      }
      this$TimersView.loadedTimers = toMutableList(timers);
      var $receiver_0 = this$TimersView.loadedTimers;
      var tmp$_3;
      tmp$_3 = $receiver_0.iterator();
      while (tmp$_3.hasNext()) {
        var element_0 = tmp$_3.next();
        this$TimersView.addTimerEntry_cc6fk1$(element_0);
      }
      (Kotlin.isType(tmp$_0 = page.getElementByClass_61zpoe$('add-timer-button'), HTMLDivElement) ? tmp$_0 : throwCCE()).onclick = TimersView$start$lambda$lambda(this$TimersView);
      (Kotlin.isType(tmp$_1 = page.getElementByClass_61zpoe$('timers-save-button'), HTMLDivElement) ? tmp$_1 : throwCCE()).onclick = TimersView$start$lambda$lambda_0(this$TimersView);
      var entries = document.getElementsByClassName('timer-entry');
      var $receiver_1 = asList(entries);
      var tmp$_4;
      tmp$_4 = $receiver_1.iterator();
      while (tmp$_4.hasNext()) {
        var element_1 = tmp$_4.next();
        var this$TimersView_0 = this$TimersView;
        var tmp$_5, tmp$_6;
        println('Setting up ' + it + '...');
        var timerId = ensureNotNull(element_1.getAttribute('timer-id'));
        println('Timer ID: ' + timerId);
        var editTimerButton = Kotlin.isType(tmp$_5 = element_1.getElementsByClassName('edit-timer-button')[0], HTMLButtonElement) ? tmp$_5 : throwCCE();
        editTimerButton.onclick = TimersView$start$lambda$lambda$lambda_0(timerId, this$TimersView_0);
        var deleteTimerButton = Kotlin.isType(tmp$_6 = element_1.getElementsByClassName('delete-timer-button')[0], HTMLButtonElement) ? tmp$_6 : throwCCE();
        deleteTimerButton.onclick = TimersView$start$lambda$lambda$lambda_1(this$TimersView_0, timerId, element_1);
      }
      return Unit;
    };
  }
  TimersView.prototype.start = function () {
    document.addEventListener('DOMContentLoaded', TimersView$start$lambda(this));
  };
  function TimersView$addTimerEntry$lambda$lambda($receiver) {
    set_style($receiver, 'width: 6%; height: auto; border-radius: 999999px; float: left;');
    $receiver.src = 'https://cdn.discordapp.com/avatars/418340363946819604/a_5229c09f5e33c95066618840960bf525.gif?size=2048';
    return Unit;
  }
  function TimersView$addTimerEntry$lambda$lambda$lambda$lambda$lambda(closure$timer) {
    return function ($receiver) {
      set_style($receiver, 'font-family: Whitney,Helvetica Neue,Helvetica,Arial,sans-serif;');
      $receiver.unaryPlus_pdl1vz$('Timer ' + closure$timer.timerId.toString());
      return Unit;
    };
  }
  function TimersView$addTimerEntry$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Alguma coisa interessante aqui');
    return Unit;
  }
  function TimersView$addTimerEntry$lambda$lambda$lambda$lambda(closure$timer) {
    return function ($receiver) {
      set_style($receiver, 'margin-left: 10px; margin-right: 10;');
      div($receiver, 'amino-title entry-title', TimersView$addTimerEntry$lambda$lambda$lambda$lambda$lambda(closure$timer));
      div($receiver, 'amino-title toggleSubText', TimersView$addTimerEntry$lambda$lambda$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function TimersView$addTimerEntry$lambda$lambda$lambda(closure$timer) {
    return function ($receiver) {
      div($receiver, void 0, TimersView$addTimerEntry$lambda$lambda$lambda$lambda(closure$timer));
      return Unit;
    };
  }
  function TimersView$addTimerEntry$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    return Unit;
  }
  function TimersView$addTimerEntry$lambda$lambda$lambda$lambda_0($receiver) {
    set_style($receiver, 'margin-right: 8px; min-width: 0px;');
    i($receiver, 'fas fa-trash', TimersView$addTimerEntry$lambda$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function TimersView$addTimerEntry$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('Editar');
    return Unit;
  }
  function TimersView$addTimerEntry$lambda$lambda$lambda_0($receiver) {
    button($receiver, void 0, void 0, void 0, void 0, 'button-discord button-discord-edit pure-button delete-timer-button', TimersView$addTimerEntry$lambda$lambda$lambda$lambda_0);
    button($receiver, void 0, void 0, void 0, void 0, 'button-discord button-discord-edit pure-button edit-timer-button', TimersView$addTimerEntry$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function TimersView$addTimerEntry$lambda$lambda_0(closure$timer) {
    return function ($receiver) {
      div($receiver, 'pure-u-1 pure-u-md-18-24', TimersView$addTimerEntry$lambda$lambda$lambda(closure$timer));
      div($receiver, 'pure-u-1 pure-u-md-6-24 vertically-centered-content', TimersView$addTimerEntry$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function TimersView$addTimerEntry$lambda(closure$timer) {
    return function ($receiver) {
      var $receiver_0 = $receiver.attributes;
      var key = 'timer-id';
      var value = closure$timer.timerId.toString();
      $receiver_0.put_xwzc9p$(key, value);
      img($receiver, void 0, void 0, 'amino-small-image', TimersView$addTimerEntry$lambda$lambda);
      div($receiver, 'pure-g', TimersView$addTimerEntry$lambda$lambda_0(closure$timer));
      return Unit;
    };
  }
  TimersView.prototype.addTimerEntry_cc6fk1$ = function (timer) {
    println('Generating entry for ' + timer.timerId + '...');
    var builder = div_0(appendHTML(StringBuilder_init(), false), 'discord-generic-entry timer-entry', TimersView$addTimerEntry$lambda(timer));
    println('Prepending...');
    appendBuilder(this.timerEntries, builder);
    println('Done!');
  };
  function TimersView$editTimer$lambda(this$TimersView, closure$timer, closure$textEffect, closure$effect, closure$modal) {
    return function () {
      closure$timer.channelId = ensureNotNull(this$TimersView.visibleModal.getElementsByClassName('channel-id')[0]).value;
      closure$timer.startsAt = ensureNotNull(this$TimersView.visibleModal.getElementsByClassName('starts-at')[0]).value;
      closure$timer.repeatDelay = ensureNotNull(this$TimersView.visibleModal.getElementsByClassName('repeat-delay')[0]).value;
      closure$textEffect.deleteAfter = ensureNotNull(this$TimersView.visibleModal.getElementsByClassName('delay-to-delete')[0]).value;
      var message = ensureNotNull(this$TimersView.visibleModal.getElementsByClassName('message')[0]).value;
      println('Timer ' + closure$timer.timerId + ' foi editado! :3');
      println('Channel ID: ' + closure$timer.channelId);
      println('startsAt: ' + closure$timer.startsAt);
      println('repeatDelay: ' + closure$timer.repeatDelay);
      println('message: ' + message.toString());
      closure$textEffect.message = message;
      closure$textEffect.message = message;
      var tmp$ = closure$effect;
      var $receiver = JSON_0.Companion;
      var obj = closure$textEffect;
      tmp$.contents = listOf($receiver.stringify_tf03ej$(getOrDefault($receiver.context, getKClass(TimersView$Timer$TimerEffect$TimerEffectText)), obj));
      var tmp$_0 = closure$timer;
      var $receiver_0 = JSON_0.Companion;
      var obj_0 = closure$effect;
      tmp$_0.effects = [$receiver_0.stringify_tf03ej$(getOrDefault($receiver_0.context, getKClass(TimersView$Timer$TimerEffect)), obj_0)];
      closure$modal.close();
      return Unit;
    };
  }
  function TimersView$editTimer$lambda$lambda(closure$timer) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Timer ' + closure$timer.timerId);
      return Unit;
    };
  }
  function TimersView$editTimer$lambda$lambda_0(closure$timer) {
    return function ($receiver) {
      var $receiver_0 = $receiver.attributes;
      var value = closure$timer.channelId.toString();
      $receiver_0.put_xwzc9p$('value', value);
      return Unit;
    };
  }
  function TimersView$editTimer$lambda$lambda_1(closure$textEffect) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$textEffect.message);
      return Unit;
    };
  }
  function TimersView$editTimer$lambda$lambda_2(closure$textEffect) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      var $receiver_0 = $receiver.attributes;
      var value = (tmp$_0 = (tmp$ = closure$textEffect.deleteAfter) != null ? tmp$.toString() : null) != null ? tmp$_0 : '0';
      $receiver_0.put_xwzc9p$('value', value);
      return Unit;
    };
  }
  function TimersView$editTimer$lambda$lambda_3(closure$timer) {
    return function ($receiver) {
      var $receiver_0 = $receiver.attributes;
      var value = closure$timer.startsAt.toString();
      $receiver_0.put_xwzc9p$('value', value);
      return Unit;
    };
  }
  function TimersView$editTimer$lambda$lambda_4(closure$timer) {
    return function ($receiver) {
      var $receiver_0 = $receiver.attributes;
      var value = closure$timer.repeatDelay.toString();
      $receiver_0.put_xwzc9p$('value', value);
      return Unit;
    };
  }
  function TimersView$editTimer$lambda$lambda_5($receiver) {
    $receiver.unaryPlus_pdl1vz$('Aqui ir\xE1 ficar a preview de quando ser\xE1 a pr\xF3xima mensagem');
    return Unit;
  }
  function TimersView$editTimer$lambda_0(closure$timer, closure$textEffect) {
    return function ($receiver) {
      div($receiver, 'category-name', TimersView$editTimer$lambda$lambda(closure$timer));
      input_0($receiver, void 0, void 0, void 0, void 0, 'channel-id', TimersView$editTimer$lambda$lambda_0(closure$timer));
      textArea($receiver, void 0, void 0, void 0, 'message', TimersView$editTimer$lambda$lambda_1(closure$textEffect));
      numberInput($receiver, void 0, void 0, void 0, 'delay-to-delete', TimersView$editTimer$lambda$lambda_2(closure$textEffect));
      numberInput($receiver, void 0, void 0, void 0, 'starts-at', TimersView$editTimer$lambda$lambda_3(closure$timer));
      numberInput($receiver, void 0, void 0, void 0, 'repeat-delay', TimersView$editTimer$lambda$lambda_4(closure$timer));
      div($receiver, 'time-preview', TimersView$editTimer$lambda$lambda_5);
      return Unit;
    };
  }
  function TimersView$editTimer$getStartOfDay() {
    var date = new Date();
    date.setUTCHours(0, 0, 0, 0);
    return date.getTime();
  }
  function TimersView$editTimer$showTimeSimulation$lambda() {
    return true;
  }
  function TimersView$editTimer$showTimeSimulation(closure$getStartOfDay, closure$timer, closure$timePreview, closure$repeatDelayInput) {
    return function () {
      println('Start of day is ' + closure$getStartOfDay());
      var simulatedTime = toLong(closure$timer.startsAt);
      var i = 0;
      var compare = TimersView$editTimer$showTimeSimulation$lambda;
      while (compare()) {
        var relativeTimeNow = Kotlin.Long.fromNumber((new Date()).getTime() - closure$getStartOfDay());
        if (simulatedTime.compareTo_11rb$(relativeTimeNow) > 0) {
          println(i.toString() + ' - uwu!!! (Ser\xE1 executado daqui ' + simulatedTime.subtract(relativeTimeNow).toString() + 'ms!)');
          println('s+r: ' + toString(closure$getStartOfDay()) + toString(relativeTimeNow));
          println('s+st: ' + toString(closure$getStartOfDay()) + toString(simulatedTime));
          var stuff = (new Date()).getTime() + simulatedTime.subtract(relativeTimeNow).toNumber();
          println('Relativo ++: ' + stuff);
          closure$timePreview.innerHTML = 'Se deus quiser, daqui a ' + DateUtils_getInstance().formatDateDiff_lu1900$((new Date()).getTime(), stuff) + ' a mensagem ser\xE1 enviada ;w; :3';
          return;
        }
         else {
          println('Skip...');
        }
        simulatedTime = simulatedTime.add(toLong(closure$repeatDelayInput.value));
        i = i + 1 | 0;
      }
    };
  }
  function TimersView$editTimer$lambda_1(closure$showTimeSimulation) {
    return function (it) {
      println('onchange callback!');
      closure$showTimeSimulation();
      return Unit;
    };
  }
  function TimersView$editTimer$lambda_2(closure$currentModal_0, closure$showTimeSimulation_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$TimersView$editTimer$lambda(closure$currentModal_0, closure$showTimeSimulation_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$TimersView$editTimer$lambda(closure$currentModal_0, closure$showTimeSimulation_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$currentModal = closure$currentModal_0;
    this.local$closure$showTimeSimulation = closure$showTimeSimulation_0;
  }
  Coroutine$TimersView$editTimer$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$TimersView$editTimer$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$TimersView$editTimer$lambda.prototype.constructor = Coroutine$TimersView$editTimer$lambda;
  Coroutine$TimersView$editTimer$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$closure$currentModal.classList.contains('tingle-modal--visible')) {
              return;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            this.local$closure$showTimeSimulation();
            this.state_0 = 4;
            this.result_0 = delay(L1000, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 2;
            continue;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  TimersView.prototype.editTimer = function (timer) {
    var tmp$, tmp$_0, tmp$_1;
    println('Editing ' + timer + '...');
    var rawEffect = first(timer.effects);
    var $receiver = JSON_0.Companion.nonstrict;
    var effect = $receiver.parse_awif5v$(getOrDefault($receiver.context, getKClass(TimersView$Timer$TimerEffect)), rawEffect);
    var $receiver_0 = JSON_0.Companion.nonstrict;
    var str = first_0(effect.contents);
    var textEffect = $receiver_0.parse_awif5v$(getOrDefault($receiver_0.context, getKClass(TimersView$Timer$TimerEffect$TimerEffectText)), str);
    var modal = new TingleModal(new TingleOptions(true, void 0, void 0, void 0, ['tingle-modal--overflow']));
    modal.addFooterBtn('<i class="fas fa-times"><\/i> Salvar', 'button-discord pure-button button-discord-modal button-discord-modal-secondary-action', TimersView$editTimer$lambda(this, timer, textEffect, effect, modal));
    modal.setContent(div_0(createHTML(), void 0, TimersView$editTimer$lambda_0(timer, textEffect)));
    modal.open();
    var startsAtInput = Kotlin.isType(tmp$ = ensureNotNull(this.visibleModal.getElementsByClassName('starts-at')[0]), HTMLInputElement) ? tmp$ : throwCCE();
    var repeatDelayInput = Kotlin.isType(tmp$_0 = ensureNotNull(this.visibleModal.getElementsByClassName('repeat-delay')[0]), HTMLInputElement) ? tmp$_0 : throwCCE();
    var timePreview = Kotlin.isType(tmp$_1 = ensureNotNull(this.visibleModal.getElementsByClassName('time-preview')[0]), HTMLDivElement) ? tmp$_1 : throwCCE();
    var getStartOfDay = TimersView$editTimer$getStartOfDay;
    var showTimeSimulation = TimersView$editTimer$showTimeSimulation(getStartOfDay, timer, timePreview, repeatDelayInput);
    var callback = TimersView$editTimer$lambda_1(showTimeSimulation);
    var currentModal = this.visibleModal;
    launch(coroutines.GlobalScope, void 0, void 0, TimersView$editTimer$lambda_2(currentModal, showTimeSimulation));
    startsAtInput.onchange = callback;
    repeatDelayInput.onchange = callback;
  };
  function TimersView$Timer(timerId, guildId, channelId, startsAt, repeatDelay, effects) {
    TimersView$Timer$Companion_getInstance();
    this.timerId = timerId;
    this.guildId = guildId;
    this.channelId = channelId;
    this.startsAt = startsAt;
    this.repeatDelay = repeatDelay;
    this.effects = effects;
  }
  function TimersView$Timer$TimerEffect(type, contents) {
    TimersView$Timer$TimerEffect$Companion_getInstance();
    this.type = type;
    this.contents = contents;
  }
  function TimersView$Timer$TimerEffect$TimerEffectType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TimersView$Timer$TimerEffect$TimerEffectType_initFields() {
    TimersView$Timer$TimerEffect$TimerEffectType_initFields = function () {
    };
    TimersView$Timer$TimerEffect$TimerEffectType$TEXT_instance = new TimersView$Timer$TimerEffect$TimerEffectType('TEXT', 0);
    TimersView$Timer$TimerEffect$TimerEffectType$COMMAND_instance = new TimersView$Timer$TimerEffect$TimerEffectType('COMMAND', 1);
    TimersView$Timer$TimerEffect$TimerEffectType$JAVASCRIPT_instance = new TimersView$Timer$TimerEffect$TimerEffectType('JAVASCRIPT', 2);
  }
  var TimersView$Timer$TimerEffect$TimerEffectType$TEXT_instance;
  function TimersView$Timer$TimerEffect$TimerEffectType$TEXT_getInstance() {
    TimersView$Timer$TimerEffect$TimerEffectType_initFields();
    return TimersView$Timer$TimerEffect$TimerEffectType$TEXT_instance;
  }
  var TimersView$Timer$TimerEffect$TimerEffectType$COMMAND_instance;
  function TimersView$Timer$TimerEffect$TimerEffectType$COMMAND_getInstance() {
    TimersView$Timer$TimerEffect$TimerEffectType_initFields();
    return TimersView$Timer$TimerEffect$TimerEffectType$COMMAND_instance;
  }
  var TimersView$Timer$TimerEffect$TimerEffectType$JAVASCRIPT_instance;
  function TimersView$Timer$TimerEffect$TimerEffectType$JAVASCRIPT_getInstance() {
    TimersView$Timer$TimerEffect$TimerEffectType_initFields();
    return TimersView$Timer$TimerEffect$TimerEffectType$JAVASCRIPT_instance;
  }
  TimersView$Timer$TimerEffect$TimerEffectType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimerEffectType',
    interfaces: [Enum]
  };
  function TimersView$Timer$TimerEffect$TimerEffectType$values() {
    return [TimersView$Timer$TimerEffect$TimerEffectType$TEXT_getInstance(), TimersView$Timer$TimerEffect$TimerEffectType$COMMAND_getInstance(), TimersView$Timer$TimerEffect$TimerEffectType$JAVASCRIPT_getInstance()];
  }
  TimersView$Timer$TimerEffect$TimerEffectType.values = TimersView$Timer$TimerEffect$TimerEffectType$values;
  function TimersView$Timer$TimerEffect$TimerEffectType$valueOf(name) {
    switch (name) {
      case 'TEXT':
        return TimersView$Timer$TimerEffect$TimerEffectType$TEXT_getInstance();
      case 'COMMAND':
        return TimersView$Timer$TimerEffect$TimerEffectType$COMMAND_getInstance();
      case 'JAVASCRIPT':
        return TimersView$Timer$TimerEffect$TimerEffectType$JAVASCRIPT_getInstance();
      default:throwISE('No enum constant net.perfectdreams.spicymorenitta.views.dashboard.TimersView.Timer.TimerEffect.TimerEffectType.' + name);
    }
  }
  TimersView$Timer$TimerEffect$TimerEffectType.valueOf_61zpoe$ = TimersView$Timer$TimerEffect$TimerEffectType$valueOf;
  function TimersView$Timer$TimerEffect$TimerEffectText(deleteAfter, message) {
    TimersView$Timer$TimerEffect$TimerEffectText$Companion_getInstance();
    if (deleteAfter === void 0)
      deleteAfter = null;
    this.deleteAfter = deleteAfter;
    this.message = message;
  }
  function TimersView$Timer$TimerEffect$TimerEffectText$Companion() {
    TimersView$Timer$TimerEffect$TimerEffectText$Companion_instance = this;
  }
  TimersView$Timer$TimerEffect$TimerEffectText$Companion.prototype.serializer = function () {
    return TimersView$Timer$TimerEffect$TimerEffectText$$serializer_getInstance();
  };
  TimersView$Timer$TimerEffect$TimerEffectText$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TimersView$Timer$TimerEffect$TimerEffectText$Companion_instance = null;
  function TimersView$Timer$TimerEffect$TimerEffectText$Companion_getInstance() {
    if (TimersView$Timer$TimerEffect$TimerEffectText$Companion_instance === null) {
      new TimersView$Timer$TimerEffect$TimerEffectText$Companion();
    }
    return TimersView$Timer$TimerEffect$TimerEffectText$Companion_instance;
  }
  function TimersView$Timer$TimerEffect$TimerEffectText$$serializer() {
    this.descriptor_eaglct$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.views.dashboard.TimersView.Timer.TimerEffect.TimerEffectText');
    this.descriptor.addElement_ivxn3r$('deleteAfter');
    this.descriptor.addElement_ivxn3r$('message');
    TimersView$Timer$TimerEffect$TimerEffectText$$serializer_instance = this;
  }
  Object.defineProperty(TimersView$Timer$TimerEffect$TimerEffectText$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_eaglct$_0;
    }
  });
  TimersView$Timer$TimerEffect$TimerEffectText$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 0, internal.LongSerializer, obj.deleteAfter);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.message);
    output.endStructure_qatsm0$(this.descriptor);
  };
  TimersView$Timer$TimerEffect$TimerEffectText$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = input_0.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 0, internal.LongSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 0, internal.LongSerializer, local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return TimersView$Timer$TimerEffect$TimersView$Timer$TimerEffect$TimerEffectText_init(bitMask0, local0, local1, null);
  };
  TimersView$Timer$TimerEffect$TimerEffectText$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var TimersView$Timer$TimerEffect$TimerEffectText$$serializer_instance = null;
  function TimersView$Timer$TimerEffect$TimerEffectText$$serializer_getInstance() {
    if (TimersView$Timer$TimerEffect$TimerEffectText$$serializer_instance === null) {
      new TimersView$Timer$TimerEffect$TimerEffectText$$serializer();
    }
    return TimersView$Timer$TimerEffect$TimerEffectText$$serializer_instance;
  }
  function TimersView$Timer$TimerEffect$TimersView$Timer$TimerEffect$TimerEffectText_init(seen, deleteAfter, message, serializationConstructorMarker) {
    var $this = Object.create(TimersView$Timer$TimerEffect$TimerEffectText.prototype);
    if ((seen & 1) === 0)
      $this.deleteAfter = null;
    else
      $this.deleteAfter = deleteAfter;
    if ((seen & 2) === 0)
      throw new MissingFieldException('message');
    else
      $this.message = message;
    return $this;
  }
  TimersView$Timer$TimerEffect$TimerEffectText.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimerEffectText',
    interfaces: []
  };
  TimersView$Timer$TimerEffect$TimerEffectText.prototype.component1 = function () {
    return this.deleteAfter;
  };
  TimersView$Timer$TimerEffect$TimerEffectText.prototype.component2 = function () {
    return this.message;
  };
  TimersView$Timer$TimerEffect$TimerEffectText.prototype.copy_yjf4hk$ = function (deleteAfter, message) {
    return new TimersView$Timer$TimerEffect$TimerEffectText(deleteAfter === void 0 ? this.deleteAfter : deleteAfter, message === void 0 ? this.message : message);
  };
  TimersView$Timer$TimerEffect$TimerEffectText.prototype.toString = function () {
    return 'TimerEffectText(deleteAfter=' + Kotlin.toString(this.deleteAfter) + (', message=' + Kotlin.toString(this.message)) + ')';
  };
  TimersView$Timer$TimerEffect$TimerEffectText.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.deleteAfter) | 0;
    result = result * 31 + Kotlin.hashCode(this.message) | 0;
    return result;
  };
  TimersView$Timer$TimerEffect$TimerEffectText.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.deleteAfter, other.deleteAfter) && Kotlin.equals(this.message, other.message)))));
  };
  function TimersView$Timer$TimerEffect$TimerEffectCommand(clazzName, arguments_0) {
    TimersView$Timer$TimerEffect$TimerEffectCommand$Companion_getInstance();
    this.clazzName = clazzName;
    this.arguments = arguments_0;
  }
  function TimersView$Timer$TimerEffect$TimerEffectCommand$Companion() {
    TimersView$Timer$TimerEffect$TimerEffectCommand$Companion_instance = this;
  }
  TimersView$Timer$TimerEffect$TimerEffectCommand$Companion.prototype.serializer = function () {
    return TimersView$Timer$TimerEffect$TimerEffectCommand$$serializer_getInstance();
  };
  TimersView$Timer$TimerEffect$TimerEffectCommand$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TimersView$Timer$TimerEffect$TimerEffectCommand$Companion_instance = null;
  function TimersView$Timer$TimerEffect$TimerEffectCommand$Companion_getInstance() {
    if (TimersView$Timer$TimerEffect$TimerEffectCommand$Companion_instance === null) {
      new TimersView$Timer$TimerEffect$TimerEffectCommand$Companion();
    }
    return TimersView$Timer$TimerEffect$TimerEffectCommand$Companion_instance;
  }
  function TimersView$Timer$TimerEffect$TimerEffectCommand$$serializer() {
    this.descriptor_4kcsn5$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.views.dashboard.TimersView.Timer.TimerEffect.TimerEffectCommand');
    this.descriptor.addElement_ivxn3r$('clazzName');
    this.descriptor.addElement_ivxn3r$('arguments');
    TimersView$Timer$TimerEffect$TimerEffectCommand$$serializer_instance = this;
  }
  Object.defineProperty(TimersView$Timer$TimerEffect$TimerEffectCommand$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_4kcsn5$_0;
    }
  });
  TimersView$Timer$TimerEffect$TimerEffectCommand$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.clazzName);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.arguments);
    output.endStructure_qatsm0$(this.descriptor);
  };
  TimersView$Timer$TimerEffect$TimerEffectCommand$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = input_0.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return TimersView$Timer$TimerEffect$TimersView$Timer$TimerEffect$TimerEffectCommand_init(bitMask0, local0, local1, null);
  };
  TimersView$Timer$TimerEffect$TimerEffectCommand$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var TimersView$Timer$TimerEffect$TimerEffectCommand$$serializer_instance = null;
  function TimersView$Timer$TimerEffect$TimerEffectCommand$$serializer_getInstance() {
    if (TimersView$Timer$TimerEffect$TimerEffectCommand$$serializer_instance === null) {
      new TimersView$Timer$TimerEffect$TimerEffectCommand$$serializer();
    }
    return TimersView$Timer$TimerEffect$TimerEffectCommand$$serializer_instance;
  }
  function TimersView$Timer$TimerEffect$TimersView$Timer$TimerEffect$TimerEffectCommand_init(seen, clazzName, arguments_0, serializationConstructorMarker) {
    var $this = Object.create(TimersView$Timer$TimerEffect$TimerEffectCommand.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('clazzName');
    else
      $this.clazzName = clazzName;
    if ((seen & 2) === 0)
      throw new MissingFieldException('arguments');
    else
      $this.arguments = arguments_0;
    return $this;
  }
  TimersView$Timer$TimerEffect$TimerEffectCommand.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimerEffectCommand',
    interfaces: []
  };
  TimersView$Timer$TimerEffect$TimerEffectCommand.prototype.component1 = function () {
    return this.clazzName;
  };
  TimersView$Timer$TimerEffect$TimerEffectCommand.prototype.component2 = function () {
    return this.arguments;
  };
  TimersView$Timer$TimerEffect$TimerEffectCommand.prototype.copy_puj7f4$ = function (clazzName, arguments_0) {
    return new TimersView$Timer$TimerEffect$TimerEffectCommand(clazzName === void 0 ? this.clazzName : clazzName, arguments_0 === void 0 ? this.arguments : arguments_0);
  };
  TimersView$Timer$TimerEffect$TimerEffectCommand.prototype.toString = function () {
    return 'TimerEffectCommand(clazzName=' + Kotlin.toString(this.clazzName) + (', arguments=' + Kotlin.toString(this.arguments)) + ')';
  };
  TimersView$Timer$TimerEffect$TimerEffectCommand.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.clazzName) | 0;
    result = result * 31 + Kotlin.hashCode(this.arguments) | 0;
    return result;
  };
  TimersView$Timer$TimerEffect$TimerEffectCommand.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.clazzName, other.clazzName) && Kotlin.equals(this.arguments, other.arguments)))));
  };
  function TimersView$Timer$TimerEffect$Companion() {
    TimersView$Timer$TimerEffect$Companion_instance = this;
  }
  TimersView$Timer$TimerEffect$Companion.prototype.serializer = function () {
    return TimersView$Timer$TimerEffect$$serializer_getInstance();
  };
  TimersView$Timer$TimerEffect$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TimersView$Timer$TimerEffect$Companion_instance = null;
  function TimersView$Timer$TimerEffect$Companion_getInstance() {
    if (TimersView$Timer$TimerEffect$Companion_instance === null) {
      new TimersView$Timer$TimerEffect$Companion();
    }
    return TimersView$Timer$TimerEffect$Companion_instance;
  }
  function TimersView$Timer$TimerEffect$$serializer() {
    this.descriptor_gxdb4i$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.views.dashboard.TimersView.Timer.TimerEffect');
    this.descriptor.addElement_ivxn3r$('type');
    this.descriptor.addElement_ivxn3r$('contents');
    TimersView$Timer$TimerEffect$$serializer_instance = this;
  }
  Object.defineProperty(TimersView$Timer$TimerEffect$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_gxdb4i$_0;
    }
  });
  TimersView$Timer$TimerEffect$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, new EnumSerializer(Kotlin.getKClass(TimersView$Timer$TimerEffect$TimerEffectType)), obj.type);
    output.encodeSerializableElement_blecud$(this.descriptor, 1, new ArrayListSerializer(internal.StringSerializer), obj.contents);
    output.endStructure_qatsm0$(this.descriptor);
  };
  TimersView$Timer$TimerEffect$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = input_0.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, new EnumSerializer(Kotlin.getKClass(TimersView$Timer$TimerEffect$TimerEffectType))) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, new EnumSerializer(Kotlin.getKClass(TimersView$Timer$TimerEffect$TimerEffectType)), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, new ArrayListSerializer(internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, new ArrayListSerializer(internal.StringSerializer), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return TimersView$Timer$TimersView$Timer$TimerEffect_init(bitMask0, local0, local1, null);
  };
  TimersView$Timer$TimerEffect$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var TimersView$Timer$TimerEffect$$serializer_instance = null;
  function TimersView$Timer$TimerEffect$$serializer_getInstance() {
    if (TimersView$Timer$TimerEffect$$serializer_instance === null) {
      new TimersView$Timer$TimerEffect$$serializer();
    }
    return TimersView$Timer$TimerEffect$$serializer_instance;
  }
  function TimersView$Timer$TimersView$Timer$TimerEffect_init(seen, type, contents, serializationConstructorMarker) {
    var $this = Object.create(TimersView$Timer$TimerEffect.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('type');
    else
      $this.type = type;
    if ((seen & 2) === 0)
      throw new MissingFieldException('contents');
    else
      $this.contents = contents;
    return $this;
  }
  TimersView$Timer$TimerEffect.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimerEffect',
    interfaces: []
  };
  TimersView$Timer$TimerEffect.prototype.component1 = function () {
    return this.type;
  };
  TimersView$Timer$TimerEffect.prototype.component2 = function () {
    return this.contents;
  };
  TimersView$Timer$TimerEffect.prototype.copy_s873m6$ = function (type, contents) {
    return new TimersView$Timer$TimerEffect(type === void 0 ? this.type : type, contents === void 0 ? this.contents : contents);
  };
  TimersView$Timer$TimerEffect.prototype.toString = function () {
    return 'TimerEffect(type=' + Kotlin.toString(this.type) + (', contents=' + Kotlin.toString(this.contents)) + ')';
  };
  TimersView$Timer$TimerEffect.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.contents) | 0;
    return result;
  };
  TimersView$Timer$TimerEffect.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.contents, other.contents)))));
  };
  function TimersView$Timer$Companion() {
    TimersView$Timer$Companion_instance = this;
  }
  TimersView$Timer$Companion.prototype.serializer = function () {
    return TimersView$Timer$$serializer_getInstance();
  };
  TimersView$Timer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TimersView$Timer$Companion_instance = null;
  function TimersView$Timer$Companion_getInstance() {
    if (TimersView$Timer$Companion_instance === null) {
      new TimersView$Timer$Companion();
    }
    return TimersView$Timer$Companion_instance;
  }
  function TimersView$Timer$$serializer() {
    this.descriptor_vudmii$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.views.dashboard.TimersView.Timer');
    this.descriptor.addElement_ivxn3r$('timerId');
    this.descriptor.addElement_ivxn3r$('guildId');
    this.descriptor.addElement_ivxn3r$('channelId');
    this.descriptor.addElement_ivxn3r$('startsAt');
    this.descriptor.addElement_ivxn3r$('repeatDelay');
    this.descriptor.addElement_ivxn3r$('effects');
    TimersView$Timer$$serializer_instance = this;
  }
  Object.defineProperty(TimersView$Timer$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_vudmii$_0;
    }
  });
  TimersView$Timer$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.timerId);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.guildId);
    output.encodeStringElement_bgm7zs$(this.descriptor, 2, obj.channelId);
    output.encodeStringElement_bgm7zs$(this.descriptor, 3, obj.startsAt);
    output.encodeStringElement_bgm7zs$(this.descriptor, 4, obj.repeatDelay);
    output.encodeSerializableElement_blecud$(this.descriptor, 5, new ReferenceArraySerializer(Kotlin.getKClass(String_0), internal.StringSerializer), obj.effects);
    output.endStructure_qatsm0$(this.descriptor);
  };
  TimersView$Timer$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5;
    var input = input_0.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeStringElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = input.decodeStringElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = input.decodeStringElement_3zr2iy$(this.descriptor, 4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case 5:
          local5 = (bitMask0 & 32) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 5, new ReferenceArraySerializer(Kotlin.getKClass(String_0), internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 5, new ReferenceArraySerializer(Kotlin.getKClass(String_0), internal.StringSerializer), local5);
          bitMask0 |= 32;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return TimersView$TimersView$Timer_init(bitMask0, local0, local1, local2, local3, local4, local5, null);
  };
  TimersView$Timer$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var TimersView$Timer$$serializer_instance = null;
  function TimersView$Timer$$serializer_getInstance() {
    if (TimersView$Timer$$serializer_instance === null) {
      new TimersView$Timer$$serializer();
    }
    return TimersView$Timer$$serializer_instance;
  }
  function TimersView$TimersView$Timer_init(seen, timerId, guildId, channelId, startsAt, repeatDelay, effects, serializationConstructorMarker) {
    var $this = Object.create(TimersView$Timer.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('timerId');
    else
      $this.timerId = timerId;
    if ((seen & 2) === 0)
      throw new MissingFieldException('guildId');
    else
      $this.guildId = guildId;
    if ((seen & 4) === 0)
      throw new MissingFieldException('channelId');
    else
      $this.channelId = channelId;
    if ((seen & 8) === 0)
      throw new MissingFieldException('startsAt');
    else
      $this.startsAt = startsAt;
    if ((seen & 16) === 0)
      throw new MissingFieldException('repeatDelay');
    else
      $this.repeatDelay = repeatDelay;
    if ((seen & 32) === 0)
      throw new MissingFieldException('effects');
    else
      $this.effects = effects;
    return $this;
  }
  TimersView$Timer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Timer',
    interfaces: []
  };
  function TimersView$timerEntries$lambda() {
    return page.getElementById_61zpoe$('timer-entries');
  }
  TimersView.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'TimersView',
    interfaces: []
  };
  var TimersView_instance = null;
  function TimersView_getInstance() {
    if (TimersView_instance === null) {
      new TimersView();
    }
    return TimersView_instance;
  }
  function ReputationView() {
    ReputationView_instance = this;
  }
  function ReputationView$debug$lambda($receiver, continuation_0, suspended) {
    var instance = new Coroutine$ReputationView$debug$lambda($receiver, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$ReputationView$debug$lambda($receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$ReputationView$debug$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ReputationView$debug$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ReputationView$debug$lambda.prototype.constructor = Coroutine$ReputationView$debug$lambda;
  Coroutine$ReputationView$debug$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = HttpRequest$Companion_getInstance().get_61zpoe$(get_loriUrl() + 'api/v1/callbacks/user-agent', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var response = this.result_0;
            return println(response.body), Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  ReputationView.prototype.debug = function () {
    launch(coroutines.GlobalScope, void 0, void 0, ReputationView$debug$lambda);
  };
  function ReputationView$recaptchaCallback$lambda(closure$userId_0, closure$json_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$ReputationView$recaptchaCallback$lambda(closure$userId_0, closure$json_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ReputationView$recaptchaCallback$lambda(closure$userId_0, closure$json_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$userId = closure$userId_0;
    this.local$closure$json = closure$json_0;
  }
  Coroutine$ReputationView$recaptchaCallback$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ReputationView$recaptchaCallback$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ReputationView$recaptchaCallback$lambda.prototype.constructor = Coroutine$ReputationView$recaptchaCallback$lambda;
  Coroutine$ReputationView$recaptchaCallback$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            this.state_0 = 2;
            this.result_0 = HttpRequest$Companion_getInstance().post_puj7f4$(get_loriUrl() + 'api/v1/user/' + this.local$closure$userId + '/reputation', JSON.stringify(this.local$closure$json), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var response = this.result_0;
            println('Received: ' + response.body);
            var payload = JSON.parse(response.body);
            if (response.statusCode === 200) {
              println('Deu certo!');
              var ts1SkillUp = new Audio(get_loriUrl() + 'assets/snd/ts1_skill.mp3');
              ts1SkillUp.play();
              addClass(page.getElementByClass_61zpoe$('reputation-button'), ['button-discord-disabled']);
              removeClass(page.getElementByClass_61zpoe$('reputation-button'), ['button-discord-info']);
              page.getElementByClass_61zpoe$('reputation-count').innerHTML = (typeof (tmp$ = payload['count']) === 'number' ? tmp$ : throwCCE()).toString();
              return page.getElementByClass_61zpoe$('leaderboard').outerHTML = typeof (tmp$_0 = payload['rank']) === 'string' ? tmp$_0 : throwCCE(), Unit;
            }
             else {
              return println('Deu ruim!!!'), Unit;
            }

          case 3:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  ReputationView.prototype.recaptchaCallback = function (userId, token) {
    var tmp$;
    println('reCAPTCHA token is: ' + token);
    var urlParams = new URLSearchParams(window.location.search);
    var channelId = urlParams.get('channel');
    println('Channel is ' + toString(channelId));
    var json_0 = json([to('content', (Kotlin.isType(tmp$ = page.getElementById_61zpoe$('reputation-reason'), HTMLTextAreaElement) ? tmp$ : throwCCE()).value), to('token', token), to('channelId', channelId)]);
    println(json_0.toString());
    println(JSON.stringify(json_0));
    launch(coroutines.GlobalScope, void 0, void 0, ReputationView$recaptchaCallback$lambda(userId, json_0));
  };
  ReputationView.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ReputationView',
    interfaces: []
  };
  var ReputationView_instance = null;
  function ReputationView_getInstance() {
    if (ReputationView_instance === null) {
      new ReputationView();
    }
    return ReputationView_instance;
  }
  var package$net = _.net || (_.net = {});
  var package$perfectdreams = package$net.perfectdreams || (package$net.perfectdreams = {});
  var package$spicymorenitta = package$perfectdreams.spicymorenitta || (package$perfectdreams.spicymorenitta = {});
  package$spicymorenitta.main_kand9s$ = main;
  var package$utils = package$spicymorenitta.utils || (package$spicymorenitta.utils = {});
  Object.defineProperty(package$utils, 'page', {
    get: function () {
      return page;
    }
  });
  package$utils.BetterDocument = BetterDocument;
  package$utils.appendBuilder_3t3i6y$ = appendBuilder;
  Object.defineProperty(package$utils, 'DateUtils', {
    get: DateUtils_getInstance
  });
  Object.defineProperty(HttpRequest, 'Companion', {
    get: HttpRequest$Companion_getInstance
  });
  package$utils.HttpRequest = HttpRequest;
  package$utils.HttpResponse = HttpResponse;
  package$utils.JsonElement = JsonElement;
  package$utils.JsonObject = JsonObject;
  Object.defineProperty(package$utils, 'loriUrl', {
    get: get_loriUrl
  });
  Object.defineProperty(package$utils, 'SaveUtils', {
    get: SaveUtils_getInstance
  });
  Object.defineProperty(package$utils, 'SpicyDashboard', {
    get: SpicyDashboard_getInstance
  });
  package$utils.TingleOptions = TingleOptions;
  $$importsForInline$$['kotlinx-serialization-runtime-js'] = $module$kotlinx_serialization_runtime_js;
  Object.defineProperty(TimersView$Timer$TimerEffect$TimerEffectType, 'TEXT', {
    get: TimersView$Timer$TimerEffect$TimerEffectType$TEXT_getInstance
  });
  Object.defineProperty(TimersView$Timer$TimerEffect$TimerEffectType, 'COMMAND', {
    get: TimersView$Timer$TimerEffect$TimerEffectType$COMMAND_getInstance
  });
  Object.defineProperty(TimersView$Timer$TimerEffect$TimerEffectType, 'JAVASCRIPT', {
    get: TimersView$Timer$TimerEffect$TimerEffectType$JAVASCRIPT_getInstance
  });
  TimersView$Timer$TimerEffect.TimerEffectType = TimersView$Timer$TimerEffect$TimerEffectType;
  Object.defineProperty(TimersView$Timer$TimerEffect$TimerEffectText, 'Companion', {
    get: TimersView$Timer$TimerEffect$TimerEffectText$Companion_getInstance
  });
  Object.defineProperty(TimersView$Timer$TimerEffect$TimerEffectText, '$serializer', {
    get: TimersView$Timer$TimerEffect$TimerEffectText$$serializer_getInstance
  });
  TimersView$Timer$TimerEffect.TimerEffectText = TimersView$Timer$TimerEffect$TimerEffectText;
  Object.defineProperty(TimersView$Timer$TimerEffect$TimerEffectCommand, 'Companion', {
    get: TimersView$Timer$TimerEffect$TimerEffectCommand$Companion_getInstance
  });
  Object.defineProperty(TimersView$Timer$TimerEffect$TimerEffectCommand, '$serializer', {
    get: TimersView$Timer$TimerEffect$TimerEffectCommand$$serializer_getInstance
  });
  TimersView$Timer$TimerEffect.TimerEffectCommand = TimersView$Timer$TimerEffect$TimerEffectCommand;
  Object.defineProperty(TimersView$Timer$TimerEffect, 'Companion', {
    get: TimersView$Timer$TimerEffect$Companion_getInstance
  });
  Object.defineProperty(TimersView$Timer$TimerEffect, '$serializer', {
    get: TimersView$Timer$TimerEffect$$serializer_getInstance
  });
  TimersView$Timer.TimerEffect = TimersView$Timer$TimerEffect;
  Object.defineProperty(TimersView$Timer, 'Companion', {
    get: TimersView$Timer$Companion_getInstance
  });
  Object.defineProperty(TimersView$Timer, '$serializer', {
    get: TimersView$Timer$$serializer_getInstance
  });
  TimersView.prototype.Timer = TimersView$Timer;
  var package$views = package$spicymorenitta.views || (package$spicymorenitta.views = {});
  var package$dashboard = package$views.dashboard || (package$views.dashboard = {});
  Object.defineProperty(package$dashboard, 'TimersView', {
    get: TimersView_getInstance
  });
  Object.defineProperty(package$views, 'ReputationView', {
    get: ReputationView_getInstance
  });
  TimersView$Timer$TimerEffect$TimerEffectText$$serializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  TimersView$Timer$TimerEffect$TimerEffectCommand$$serializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  TimersView$Timer$TimerEffect$$serializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  TimersView$Timer$$serializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  page = new BetterDocument(document);
  main([]);
  Kotlin.defineModule('spicy-morenitta', _);
  return _;
}(typeof this['spicy-morenitta'] === 'undefined' ? {} : this['spicy-morenitta'], kotlin, this['kotlinx-coroutines-core'], this['kotlinx-serialization-runtime-js'], this['kotlinx-html-js']);
