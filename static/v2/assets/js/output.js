if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'output'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'output'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'output'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'output'.");
}
if (typeof this['ktor-client-core'] === 'undefined') {
  throw new Error("Error loading module 'output'. Its dependency 'ktor-client-core' was not found. Please, check whether 'ktor-client-core' is loaded prior to 'output'.");
}
if (typeof this['kotlinx-serialization-runtime-js'] === 'undefined') {
  throw new Error("Error loading module 'output'. Its dependency 'kotlinx-serialization-runtime-js' was not found. Please, check whether 'kotlinx-serialization-runtime-js' is loaded prior to 'output'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'output'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'output'.");
}
if (typeof this['ktor-http'] === 'undefined') {
  throw new Error("Error loading module 'output'. Its dependency 'ktor-http' was not found. Please, check whether 'ktor-http' is loaded prior to 'output'.");
}
var output = function (_, Kotlin, $module$kotlinx_html_js, $module$ktor_client_core, $module$kotlinx_serialization_runtime_js, $module$kotlinx_coroutines_core, $module$ktor_http) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Annotation = Kotlin.kotlin.Annotation;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var removeSuffix = Kotlin.kotlin.text.removeSuffix_gsj5wt$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var equals = Kotlin.equals;
  var removePrefix = Kotlin.kotlin.text.removePrefix_gsj5wt$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var throwCCE = Kotlin.throwCCE;
  var clear = Kotlin.kotlin.dom.clear_asww5s$;
  var Unit = Kotlin.kotlin.Unit;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var hasClass = Kotlin.kotlin.dom.hasClass_46n0ku$;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var i = $module$kotlinx_html_js.kotlinx.html.js.i_5jry8x$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.div_59el9d$;
  var append = $module$kotlinx_html_js.kotlinx.html.dom.append_k9bwru$;
  var Math_0 = Math;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var url = $module$ktor_client_core.io.ktor.client.request.url_g8iu3v$;
  var String_0 = String;
  var JSON_0 = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.json.JSON;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var toString = Kotlin.toString;
  var img = $module$kotlinx_html_js.kotlinx.html.img_evw26v$;
  var h1 = $module$kotlinx_html_js.kotlinx.html.h1_vmej1w$;
  var i_0 = $module$kotlinx_html_js.kotlinx.html.i_5g1p9k$;
  var a = $module$kotlinx_html_js.kotlinx.html.a_gu26kr$;
  var utils = $module$ktor_client_core.io.ktor.client.utils;
  var url_0 = $module$ktor_client_core.io.ktor.client.request.url_3rzbk2$;
  var HttpMethod = $module$ktor_client_core.$$importsForInline$$['ktor-http'].io.ktor.http.HttpMethod;
  var HttpRequestBuilder_init = $module$ktor_client_core.io.ktor.client.request.HttpRequestBuilder;
  var call = $module$ktor_client_core.io.ktor.client.call.call_30bfl5$;
  var getKClass = Kotlin.getKClass;
  var call_0 = $module$ktor_client_core.io.ktor.client.call;
  var TypeInfo_init = $module$ktor_client_core.io.ktor.client.call.TypeInfo;
  var getOrDefault = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.context.getOrDefault_6qy6ah$;
  var get_list = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.get_list_gekvwj$;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var wrapFunction = Kotlin.wrapFunction;
  var Comparator = Kotlin.kotlin.Comparator;
  var L5000 = Kotlin.Long.fromInt(5000);
  var delay = $module$kotlinx_coroutines_core.kotlinx.coroutines.delay_s8cxhz$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var L25 = Kotlin.Long.fromInt(25);
  var set_style = $module$kotlinx_html_js.kotlinx.html.set_style_ueiko3$;
  var option = $module$kotlinx_html_js.kotlinx.html.option_xfiiwk$;
  var set_onChangeFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onChangeFunction_pszlq2$;
  var select = $module$kotlinx_html_js.kotlinx.html.select_9klr40$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var set_onInputFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onInputFunction_pszlq2$;
  var input_0 = $module$kotlinx_html_js.kotlinx.html.input_e1g74z$;
  var hr = $module$kotlinx_html_js.kotlinx.html.hr_17yvwq$;
  var h2 = $module$kotlinx_html_js.kotlinx.html.h2_wky4k0$;
  var set_title = $module$kotlinx_html_js.kotlinx.html.set_title_ueiko3$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var Random = Kotlin.kotlin.random.Random;
  var random = Kotlin.kotlin.collections.random_iscd7z$;
  var span = $module$kotlinx_html_js.kotlinx.html.span_6djfml$;
  var button = $module$kotlinx_html_js.kotlinx.html.button_i4xb7r$;
  var getValue = Kotlin.kotlin.collections.getValue_t9ocha$;
  var label = $module$kotlinx_html_js.kotlinx.html.label_yd75js$;
  var L5 = Kotlin.Long.fromInt(5);
  var L750 = Kotlin.Long.fromInt(750);
  var L900 = Kotlin.Long.fromInt(900);
  var L7000 = Kotlin.Long.fromInt(7000);
  var L140 = Kotlin.Long.fromInt(140);
  var rangeTo = Kotlin.kotlin.ranges.rangeTo_38ydlf$;
  var js = $module$ktor_client_core.io.ktor.client.engine.js;
  var HttpClient = $module$ktor_client_core.io.ktor.client.HttpClient_744i18$;
  var throwUPAE = Kotlin.throwUPAE;
  var L10000 = Kotlin.Long.fromInt(10000);
  var L125 = Kotlin.Long.fromInt(125);
  var toBoolean = Kotlin.kotlin.text.toBoolean_pdl1vz$;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var async = $module$kotlinx_coroutines_core.kotlinx.coroutines.async_pda6u4$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var joinAll = $module$kotlinx_coroutines_core.kotlinx.coroutines.joinAll_k943iz$;
  var HttpResponse = $module$ktor_client_core.io.ktor.client.response.HttpResponse;
  var readText = $module$ktor_client_core.io.ktor.client.response.readText_jsbrsb$;
  var HttpStatusCode = $module$ktor_http.io.ktor.http.HttpStatusCode;
  var img_0 = $module$kotlinx_html_js.kotlinx.html.img_45d5o1$;
  var span_0 = $module$kotlinx_html_js.kotlinx.html.span_fqsp1s$;
  var asList = Kotlin.org.w3c.dom.asList_kt9thq$;
  var header = $module$ktor_client_core.io.ktor.client.request.header_xadl6p$;
  var Mutex = $module$kotlinx_coroutines_core.kotlinx.coroutines.sync.Mutex_6taknv$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mutableMapOf = Kotlin.kotlin.collections.mutableMapOf_qfcya0$;
  var takeFrom = $module$ktor_client_core.$$importsForInline$$['ktor-http'].io.ktor.http.takeFrom_jl1sg7$;
  var h3 = $module$kotlinx_html_js.kotlinx.html.h3_agelx2$;
  var p = $module$kotlinx_html_js.kotlinx.html.p_8pggrc$;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var Random_0 = Kotlin.kotlin.random.Random_za3lpa$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var Any = Object;
  var List = Kotlin.kotlin.collections.List;
  var SerialClassDescImpl = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.SerialClassDescImpl;
  var internal = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal;
  var LinkedHashSetSerializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.LinkedHashSetSerializer;
  var UnknownFieldException = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.UnknownFieldException;
  var GeneratedSerializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.GeneratedSerializer;
  var MissingFieldException = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException;
  var NullableSerializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.NullableSerializer;
  var ArrayListSerializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ArrayListSerializer;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var LinkedHashMapSerializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.LinkedHashMapSerializer;
  var first_0 = Kotlin.kotlin.collections.first_us0mfu$;
  var drop = Kotlin.kotlin.collections.drop_8ujjk8$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var withName = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.withName_8new1j$;
  var KSerializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.KSerializer;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  var ins = $module$kotlinx_html_js.kotlinx.html.ins_g1dqgd$;
  var html = $module$kotlinx_html_js.kotlinx.html;
  var unsafe = $module$kotlinx_html_js.kotlinx.html.unsafe_vdrn79$;
  var script = $module$kotlinx_html_js.kotlinx.html.script_fglb7v$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var drop_0 = Kotlin.kotlin.collections.drop_ba2ldo$;
  var dropLast = Kotlin.kotlin.collections.dropLast_yzln2o$;
  UpdateNavbarSizePostRender.prototype = Object.create(BaseRoute.prototype);
  UpdateNavbarSizePostRender.prototype.constructor = UpdateNavbarSizePostRender;
  DashboardRoute.prototype = Object.create(UpdateNavbarSizePostRender.prototype);
  DashboardRoute.prototype.constructor = DashboardRoute;
  FanArtsRoute$ArtistSortingMethod.prototype = Object.create(Enum.prototype);
  FanArtsRoute$ArtistSortingMethod.prototype.constructor = FanArtsRoute$ArtistSortingMethod;
  FanArtsRoute$FanArtSortingMethod.prototype = Object.create(Enum.prototype);
  FanArtsRoute$FanArtSortingMethod.prototype.constructor = FanArtsRoute$FanArtSortingMethod;
  FanArtsRoute.prototype = Object.create(UpdateNavbarSizePostRender.prototype);
  FanArtsRoute.prototype.constructor = FanArtsRoute;
  GeneralDashboardRoute.prototype = Object.create(UpdateNavbarSizePostRender.prototype);
  GeneralDashboardRoute.prototype.constructor = GeneralDashboardRoute;
  IFrameGeneralDashboardRoute.prototype = Object.create(UpdateNavbarSizePostRender.prototype);
  IFrameGeneralDashboardRoute.prototype.constructor = IFrameGeneralDashboardRoute;
  HomeRoute.prototype = Object.create(BaseRoute.prototype);
  HomeRoute.prototype.constructor = HomeRoute;
  WebsiteUtils$UserPermissionLevel.prototype = Object.create(Enum.prototype);
  WebsiteUtils$UserPermissionLevel.prototype.constructor = WebsiteUtils$UserPermissionLevel;
  FanArtsView.prototype = Object.create(BaseView.prototype);
  FanArtsView.prototype.constructor = FanArtsView;
  WebsiteThemeUtils$WebsiteTheme.prototype = Object.create(Enum.prototype);
  WebsiteThemeUtils$WebsiteTheme.prototype.constructor = WebsiteThemeUtils$WebsiteTheme;
  PingCommand.prototype = Object.create(WebSocketCommand.prototype);
  PingCommand.prototype.constructor = PingCommand;
  function JsonCreator() {
  }
  JsonCreator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonCreator',
    interfaces: [Annotation]
  };
  function JsonProperty(name) {
    this.name = name;
  }
  JsonProperty.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonProperty',
    interfaces: [Annotation]
  };
  function ApplicationCall(parameters, content) {
    this.parameters = parameters;
    this.content = content;
  }
  ApplicationCall.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ApplicationCall',
    interfaces: []
  };
  function CookiesUtils() {
    CookiesUtils_instance = this;
  }
  CookiesUtils.prototype.createCookie_puj7f4$ = function (name, value) {
    var expires = '';
    document.cookie = name + '=' + value + expires + '; Path=/';
  };
  CookiesUtils.prototype.readCookie_61zpoe$ = function (name) {
    var value = '; ' + document.cookie;
    var parts = split(value, ['; ' + name + '=']);
    if (parts.size === 2)
      return first(split(last(parts), [';']));
    return null;
  };
  CookiesUtils.prototype.eraseCookie_61zpoe$ = function (name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  };
  CookiesUtils.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CookiesUtils',
    interfaces: []
  };
  var CookiesUtils_instance = null;
  function CookiesUtils_getInstance() {
    if (CookiesUtils_instance === null) {
      new CookiesUtils();
    }
    return CookiesUtils_instance;
  }
  function GlobalCount() {
    this.serverCount = 0;
    this.userCount = 0;
    this.commandCount = 0;
  }
  GlobalCount.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GlobalCount',
    interfaces: []
  };
  function BaseRoute(path) {
    this.path = path;
    this.keepLoadingScreen_4bjxho$_0 = false;
  }
  Object.defineProperty(BaseRoute.prototype, 'keepLoadingScreen', {
    get: function () {
      return this.keepLoadingScreen_4bjxho$_0;
    }
  });
  BaseRoute.prototype.matches_61zpoe$ = function (input) {
    var tmp$;
    var sourceSplit = split(removeSuffix(this.path, '/'), ['/']);
    var inputSplit = split(removeSuffix(input, '/'), ['/']);
    var inputSplitLength = 0;
    var a = sourceSplit.size;
    var b = inputSplit.size;
    tmp$ = Math_0.max(a, b);
    for (var index = 0; index < tmp$; index++) {
      var sInput = getOrNull(sourceSplit, index);
      var iInput = getOrNull(inputSplit, index);
      if (sInput != null && startsWith(sInput, '{') && endsWith(sInput, '}')) {
        if (iInput == null && endsWith(sInput, '?}')) {
          inputSplitLength = inputSplitLength + 1 | 0;
          continue;
        }
        inputSplitLength = inputSplitLength + 1 | 0;
        continue;
      }
      if (iInput == null)
        return false;
      if (!equals(iInput, sInput))
        return false;
      inputSplitLength = inputSplitLength + 1 | 0;
    }
    return true;
  };
  BaseRoute.prototype.getPathParameters_61zpoe$ = function (input) {
    var tmp$;
    var parameters = LinkedHashMap_init();
    var sourceSplit = split(removeSuffix(this.path, '/'), ['/']);
    var inputSplit = split(removeSuffix(input, '/'), ['/']);
    var inputSplitLength = 0;
    var a = sourceSplit.size;
    var b = inputSplit.size;
    tmp$ = Math_0.max(a, b);
    for (var index = 0; index < tmp$; index++) {
      var sInput = getOrNull(sourceSplit, index);
      var iInput = getOrNull(inputSplit, index);
      if (sInput != null && startsWith(sInput, '{') && endsWith(sInput, '}')) {
        if (iInput == null && endsWith(sInput, '?}')) {
          inputSplitLength = inputSplitLength + 1 | 0;
          continue;
        }
        var key = removeSuffix(removeSuffix(removePrefix(sInput, '{'), '?}'), '}');
        var value = iInput != null ? iInput : '?';
        parameters.put_xwzc9p$(key, value);
        inputSplitLength = inputSplitLength + 1 | 0;
        continue;
      }
      if (iInput == null)
        return parameters;
      if (!equals(iInput, sInput))
        return parameters;
      inputSplitLength = inputSplitLength + 1 | 0;
    }
    return parameters;
  };
  BaseRoute.prototype.onRender_hjvrm5$ = function (call) {
    this.hideDummyNavbarHeight_hjvrm5$(call);
    this.switchContent_hjvrm5$(call);
  };
  BaseRoute.prototype.hideDummyNavbarHeight_hjvrm5$ = function (call) {
    var tmp$;
    var dummyNavigationBar = select_0(document, '#dummy-navbar');
    (tmp$ = dummyNavigationBar != null ? dummyNavigationBar.style : null) != null ? (tmp$.height = '0px') : null;
  };
  BaseRoute.prototype.switchContent_hjvrm5$ = function (call) {
    var tmp$, tmp$_0, tmp$_1;
    if (call.content != null) {
      select_0(document, '#content').remove();
      var scriptList = call.content.querySelectorAll('script');
      var toBeReinserted = ArrayList_init();
      var times = scriptList.length;
      for (var index = 0; index < times; index++) {
        var tmp$_2;
        var scriptTag = Kotlin.isType(tmp$_2 = ensureNotNull(scriptList[index]), HTMLScriptElement) ? tmp$_2 : throwCCE();
        if (scriptTag.getAttribute('src') == null) {
          toBeReinserted.add_11rb$(scriptTag.cloneNode(true));
          clear(scriptTag);
        }
      }
      var tmp$_3;
      tmp$_3 = SpicyMorenitta$Companion_getInstance().INSTANCE.pageSpecificTasks.iterator();
      while (tmp$_3.hasNext()) {
        var element = tmp$_3.next();
        element.cancel();
      }
      (tmp$ = document.body) != null ? tmp$.appendChild(call.content) : null;
      var childNode = (tmp$_1 = (tmp$_0 = document.body) != null ? tmp$_0.childNodes : null) != null ? tmp$_1[0] : null;
      if (childNode != null) {
        var tmp$_4;
        tmp$_4 = toBeReinserted.iterator();
        while (tmp$_4.hasNext()) {
          var element_0 = tmp$_4.next();
          var tmp$_5, tmp$_6;
          var inline = (Kotlin.isType(tmp$_5 = element_0, HTMLScriptElement) ? tmp$_5 : throwCCE()).innerHTML;
          this.debug_yhszz7$(['(Re-)Inlining script ' + inline]);
          var newScript = document.createElement('script');
          var inlineScript = document.createTextNode(inline);
          newScript.appendChild(inlineScript);
          (tmp$_6 = document.body) != null ? tmp$_6.appendChild(newScript) : null;
        }
      }
      SpicyMorenitta$Companion_getInstance().INSTANCE.setUpLinkPreloader();
      SpicyMorenitta$Companion_getInstance().INSTANCE.setUpLazyLoad();
    }
  };
  function BaseRoute$twoColumnLayout$lambda$lambda$lambda$lambda$lambda$lambda(it) {
    var leftSidebar = select_0(document, '#left-sidebar');
    if (hasClass(leftSidebar, 'expanded')) {
      removeClass(leftSidebar, ['expanded']);
    }
     else {
      addClass(leftSidebar, ['expanded']);
    }
    return Unit;
  }
  function BaseRoute$twoColumnLayout$lambda$lambda$lambda$lambda$lambda($receiver) {
    set_onClickFunction($receiver, BaseRoute$twoColumnLayout$lambda$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function BaseRoute$twoColumnLayout$lambda$lambda$lambda$lambda(this$) {
    return function ($receiver) {
      i(this$, 'subnavbar-hamburger-button fas fa-bars', BaseRoute$twoColumnLayout$lambda$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function BaseRoute$twoColumnLayout$lambda$lambda$lambda$lambda_0(closure$leftSidebar) {
    return function ($receiver) {
      closure$leftSidebar($receiver);
      return Unit;
    };
  }
  function BaseRoute$twoColumnLayout$lambda$lambda$lambda(this$, closure$leftSidebar) {
    return function ($receiver) {
      set_id($receiver, 'left-sidebar');
      div($receiver, 'subnavbar-hamburger', BaseRoute$twoColumnLayout$lambda$lambda$lambda$lambda(this$));
      div($receiver, 'contents', BaseRoute$twoColumnLayout$lambda$lambda$lambda$lambda_0(closure$leftSidebar));
      return Unit;
    };
  }
  function BaseRoute$twoColumnLayout$lambda$lambda$lambda$lambda_1(closure$rightSidebar) {
    return function ($receiver) {
      closure$rightSidebar($receiver);
      return Unit;
    };
  }
  function BaseRoute$twoColumnLayout$lambda$lambda$lambda_0(closure$rightSidebar) {
    return function ($receiver) {
      set_id($receiver, 'right-sidebar');
      var $receiver_0 = $receiver.attributes;
      var key = 'create-scroll-lazy-load-here';
      $receiver_0.put_xwzc9p$(key, 'true');
      div($receiver, 'contents', BaseRoute$twoColumnLayout$lambda$lambda$lambda$lambda_1(closure$rightSidebar));
      return Unit;
    };
  }
  function BaseRoute$twoColumnLayout$lambda$lambda(this$, closure$leftSidebar, closure$rightSidebar) {
    return function ($receiver) {
      set_id($receiver, 'sidebar-wrapper');
      div($receiver, void 0, BaseRoute$twoColumnLayout$lambda$lambda$lambda(this$, closure$leftSidebar));
      div($receiver, void 0, BaseRoute$twoColumnLayout$lambda$lambda$lambda_0(closure$rightSidebar));
      return Unit;
    };
  }
  function BaseRoute$twoColumnLayout$lambda(closure$leftSidebar, closure$rightSidebar) {
    return function ($receiver) {
      div_0($receiver, void 0, BaseRoute$twoColumnLayout$lambda$lambda($receiver, closure$leftSidebar, closure$rightSidebar));
      return Unit;
    };
  }
  BaseRoute.prototype.twoColumnLayout_cbu7sc$ = function (leftSidebar, rightSidebar) {
    var content = select_0(document, '#content');
    append(content, BaseRoute$twoColumnLayout$lambda(leftSidebar, rightSidebar));
  };
  BaseRoute.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseRoute',
    interfaces: [Logging]
  };
  function get$lambda($receiver) {
    return Unit;
  }
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function DashboardRoute(m) {
    UpdateNavbarSizePostRender.call(this, '/dashboard');
    this.m = m;
  }
  Object.defineProperty(DashboardRoute.prototype, 'keepLoadingScreen', {
    get: function () {
      return true;
    }
  });
  function DashboardRoute$onRender$lambda$lambda($receiver) {
    url($receiver, window.location.origin + '/api/v1/users/@me/guilds?check-join=true');
    return Unit;
  }
  function DashboardRoute$onRender$lambda$lambda_0($receiver) {
    leftSidebarForProfileDashboard($receiver);
    return Unit;
  }
  function DashboardRoute$onRender$lambda$lambda_1(closure$userIdentification, closure$list, this$DashboardRoute) {
    return function ($receiver) {
      this$DashboardRoute.rightSidebar_hugvpc$($receiver, closure$userIdentification, closure$list);
      return Unit;
    };
  }
  function Coroutine$DashboardRoute$onRender$lambda(closure$call_0, this$DashboardRoute_0, closure$userIdentification_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$call = closure$call_0;
    this.local$this$DashboardRoute = this$DashboardRoute_0;
    this.local$closure$userIdentification = closure$userIdentification_0;
  }
  Coroutine$DashboardRoute$onRender$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DashboardRoute$onRender$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DashboardRoute$onRender$lambda.prototype.constructor = Coroutine$DashboardRoute$onRender$lambda;
  Coroutine$DashboardRoute$onRender$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_1 = http;
            var host;
            var body;
            host = 'localhost';
            body = utils.EmptyContent;
            var $receiver_2 = new HttpRequestBuilder_init();
            url_0($receiver_2, 'http', host, 0, '/');
            $receiver_2.method = HttpMethod.Companion.Get;
            $receiver_2.body = body;
            DashboardRoute$onRender$lambda$lambda($receiver_2);
            this.state_0 = 2;
            this.result_0 = call($receiver_1, $receiver_2, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(String_0), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = typeof (tmp$_0 = this.result_0) === 'string' ? tmp$_0 : throwCCE();
            this.result_0;
            var result = this.result_0;
            var $receiver = JSON_0.Companion.nonstrict;
            var list = $receiver.parse_awif5v$(get_list(getOrDefault($receiver.context, getKClass(TemmieDiscordGuild))), result);
            this.local$this$DashboardRoute.fixDummyNavbarHeight_hjvrm5$(this.local$closure$call);
            this.local$this$DashboardRoute.switchContent_hjvrm5$(this.local$closure$call);
            this.local$this$DashboardRoute.twoColumnLayout_cbu7sc$(DashboardRoute$onRender$lambda$lambda_0, DashboardRoute$onRender$lambda$lambda_1(this.local$closure$userIdentification, list, this.local$this$DashboardRoute));
            SpicyMorenitta$Companion_getInstance().INSTANCE.setUpLinkPreloader();
            return this.local$this$DashboardRoute.m.hideLoadingScreen(), Unit;
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
  function DashboardRoute$onRender$lambda(closure$call_0, this$DashboardRoute_0, closure$userIdentification_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DashboardRoute$onRender$lambda(closure$call_0, this$DashboardRoute_0, closure$userIdentification_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  DashboardRoute.prototype.onRender_hjvrm5$ = function (call) {
    var tmp$;
    this.m.showLoadingScreen_61zpoe$();
    tmp$ = this.m.userIdentification;
    if (tmp$ == null) {
      return;
    }
    var userIdentification = tmp$;
    SpicyMorenitta$Companion_getInstance().INSTANCE.launch_3q5nlj$(DashboardRoute$onRender$lambda(call, this, userIdentification));
  };
  function DashboardRoute$rightSidebar$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Bem-vindo de volta...');
    return Unit;
  }
  function DashboardRoute$rightSidebar$lambda$lambda$lambda_0(closure$userIdentification) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$userIdentification.username);
      return Unit;
    };
  }
  function DashboardRoute$rightSidebar$lambda$lambda(closure$userIdentification) {
    return function ($receiver) {
      div($receiver, void 0, DashboardRoute$rightSidebar$lambda$lambda$lambda);
      div($receiver, 'name', DashboardRoute$rightSidebar$lambda$lambda$lambda_0(closure$userIdentification));
      return Unit;
    };
  }
  function DashboardRoute$rightSidebar$lambda(closure$userIdentification) {
    return function ($receiver) {
      img($receiver, void 0, 'https://cdn.discordapp.com/avatars/' + closure$userIdentification.id + '/' + toString(closure$userIdentification.avatar) + '.png?size=256');
      div($receiver, 'text', DashboardRoute$rightSidebar$lambda$lambda(closure$userIdentification));
      return Unit;
    };
  }
  function DashboardRoute$rightSidebar$lambda_0(it) {
    return it.name;
  }
  function DashboardRoute$rightSidebar$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('Escolha o Servidor!');
    return Unit;
  }
  function DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      img($receiver, void 0, 'https://cdn.discordapp.com/icons/' + closure$it.id + '/' + toString(closure$it.icon) + '.png?size=128', 'icon', DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$it) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$it.name);
      return Unit;
    };
  }
  function DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$it) {
    return function ($receiver) {
      var tmp$;
      switch (WebsiteUtils_getInstance().getUserPermissionLevel_qbryc2$(closure$it).name) {
        case 'OWNER':
          tmp$ = get_locale().get_25kzsl$('website.dashboard.owner', []);
          break;
        case 'ADMINISTRATOR':
          tmp$ = get_locale().get_25kzsl$('website.dashboard.administrator', []);
          break;
        case 'MANAGER':
          tmp$ = get_locale().get_25kzsl$('website.dashboard.manager', []);
          break;
        case 'MEMBER':
          tmp$ = get_locale().get_25kzsl$('website.dashboard.member', []);
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      $receiver.unaryPlus_pdl1vz$(tmp$);
      return Unit;
    };
  }
  function DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda$lambda_0(closure$it) {
    return function ($receiver) {
      div($receiver, 'name', DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$it));
      div($receiver, 'role', DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$it));
      return Unit;
    };
  }
  function DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      div($receiver, void 0, DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda$lambda(closure$it));
      div($receiver, 'info', DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda$lambda_0(closure$it));
      return Unit;
    };
  }
  function DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    return Unit;
  }
  function DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    var $receiver_0 = $receiver.attributes;
    var key = 'data-enable-link-preload';
    $receiver_0.put_xwzc9p$(key, 'true');
    i_0($receiver, 'fas fa-cogs', DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda$lambda$lambda_2);
    $receiver.unaryPlus_pdl1vz$(' ' + get_locale().get_25kzsl$('website.dashboard.configureLori', []));
    return Unit;
  }
  function DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda_0(closure$it) {
    return function ($receiver) {
      a($receiver, '/' + SpicyMorenitta$Companion_getInstance().INSTANCE.websiteLocaleId + '/guild/' + closure$it.id + '/dashboard', void 0, void 0, DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda$lambda_1);
      return Unit;
    };
  }
  function DashboardRoute$rightSidebar$lambda$lambda$lambda_1(closure$it) {
    return function ($receiver) {
      div($receiver, 'top-row', DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda(closure$it));
      div($receiver, 'bottom-row', DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda_0(closure$it));
      return Unit;
    };
  }
  function DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    return Unit;
  }
  function DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda$lambda_2(closure$it) {
    return function ($receiver) {
      img($receiver, void 0, 'https://cdn.discordapp.com/icons/' + closure$it.id + '/' + toString(closure$it.icon) + '.png?size=128', 'icon', DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda$lambda$lambda_3);
      return Unit;
    };
  }
  function DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$it) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$it.name);
      return Unit;
    };
  }
  function DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$it) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(WebsiteUtils_getInstance().getUserPermissionLevel_qbryc2$(closure$it).name);
      return Unit;
    };
  }
  function DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda$lambda_3(closure$it) {
    return function ($receiver) {
      div($receiver, 'name', DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$it));
      div($receiver, 'role', DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$it));
      return Unit;
    };
  }
  function DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda_1(closure$it) {
    return function ($receiver) {
      div($receiver, void 0, DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda$lambda_2(closure$it));
      div($receiver, 'info', DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda$lambda_3(closure$it));
      return Unit;
    };
  }
  function DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda$lambda$lambda_6($receiver) {
    return Unit;
  }
  function DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    var $receiver_0 = $receiver.attributes;
    var key = 'data-enable-link-preload';
    $receiver_0.put_xwzc9p$(key, 'true');
    i_0($receiver, 'fas fa-plus', DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda$lambda$lambda_6);
    $receiver.unaryPlus_pdl1vz$(' ' + get_locale().get_25kzsl$('website.dashboard.addLori', []));
    return Unit;
  }
  function DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda_2(closure$it) {
    return function ($receiver) {
      a($receiver, '/' + SpicyMorenitta$Companion_getInstance().INSTANCE.websiteLocaleId + '/guild/' + closure$it.id + '/dashboard', void 0, void 0, DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda$lambda_4);
      return Unit;
    };
  }
  function DashboardRoute$rightSidebar$lambda$lambda$lambda_2(closure$it) {
    return function ($receiver) {
      div($receiver, 'top-row', DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda_1(closure$it));
      div($receiver, 'bottom-row', DashboardRoute$rightSidebar$lambda$lambda$lambda$lambda_2(closure$it));
      return Unit;
    };
  }
  function DashboardRoute$rightSidebar$lambda_2(closure$hasLori, closure$doesntHasLoriButCanAdd) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$hasLori.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        div($receiver, 'entry', DashboardRoute$rightSidebar$lambda$lambda$lambda_1(element));
      }
      var tmp$_0;
      tmp$_0 = closure$doesntHasLoriButCanAdd.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        div($receiver, 'entry', DashboardRoute$rightSidebar$lambda$lambda$lambda_2(element_0));
      }
      return Unit;
    };
  }
  DashboardRoute.prototype.rightSidebar_hugvpc$ = function ($receiver, userIdentification, list) {
    div($receiver, 'user-info', DashboardRoute$rightSidebar$lambda(userIdentification));
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = list.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (WebsiteUtils_getInstance().canManageGuild_qbryc2$(element))
        destination.add_11rb$(element);
    }
    var canManage = sortedWith(destination, new Comparator$ObjectLiteral(compareBy$lambda(DashboardRoute$rightSidebar$lambda_0)));
    var destination_0 = ArrayList_init();
    var tmp$_0;
    tmp$_0 = canManage.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      if (element_0.joined)
        destination_0.add_11rb$(element_0);
    }
    var hasLori = destination_0;
    var destination_1 = ArrayList_init();
    var tmp$_1;
    tmp$_1 = canManage.iterator();
    while (tmp$_1.hasNext()) {
      var element_1 = tmp$_1.next();
      if (!element_1.joined)
        destination_1.add_11rb$(element_1);
    }
    var doesntHasLoriButCanAdd = destination_1;
    h1($receiver, void 0, DashboardRoute$rightSidebar$lambda_1);
    div($receiver, 'server-list', DashboardRoute$rightSidebar$lambda_2(hasLori, doesntHasLoriButCanAdd));
  };
  DashboardRoute.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DashboardRoute',
    interfaces: [UpdateNavbarSizePostRender]
  };
  function get$lambda_0($receiver) {
    return Unit;
  }
  function Comparator$ObjectLiteral_0(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_0.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda_0 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_1(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_1.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_1.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareByDescending$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(b), selector(a));
      };
    };
  });
  function FanArtsRoute(m) {
    UpdateNavbarSizePostRender.call(this, '/fanarts/{artist?}');
    this.m = m;
    this.currentArtistSortingMethod = FanArtsRoute$ArtistSortingMethod$ALPHABETIC_getInstance();
    this.currentFanArtSortingMethod = FanArtsRoute$FanArtSortingMethod$OLD_TO_NEW_getInstance();
    this.filterTag = null;
    this.watchingUser = null;
    this.fanArtArtists = emptyList();
  }
  Object.defineProperty(FanArtsRoute.prototype, 'keepLoadingScreen', {
    get: function () {
      return true;
    }
  });
  function FanArtsRoute$onRender$lambda$lambda($receiver) {
    url($receiver, window.location.origin + '/api/v1/loritta/fan-arts?query=all');
    return Unit;
  }
  function FanArtsRoute$onRender$lambda$lambda_0(closure$list, this$FanArtsRoute) {
    return function ($receiver) {
      this$FanArtsRoute.leftSidebar_farzp2$($receiver, closure$list);
      return Unit;
    };
  }
  function FanArtsRoute$onRender$lambda$lambda_1(closure$list, this$FanArtsRoute) {
    return function ($receiver) {
      this$FanArtsRoute.rightSidebar_farzp2$($receiver, closure$list);
      return Unit;
    };
  }
  function Coroutine$FanArtsRoute$onRender$lambda$lambda(closure$list_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$list = closure$list_0;
    this.local$holdingImage1 = void 0;
    this.local$holdingImage2 = void 0;
    this.local$index = void 0;
    this.local$index_0 = void 0;
  }
  Coroutine$FanArtsRoute$onRender$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FanArtsRoute$onRender$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FanArtsRoute$onRender$lambda$lambda.prototype.constructor = Coroutine$FanArtsRoute$onRender$lambda$lambda;
  Coroutine$FanArtsRoute$onRender$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$holdingImage1 = select_0(document, '#right-sidebar .holding-image-1');
            this.local$holdingImage2 = select_0(document, '#right-sidebar .holding-image-2');
            this.state_0 = 3;
            this.result_0 = delay(L5000, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$index = 0;
            this.state_0 = 4;
            continue;
          case 4:
            if (this.local$index >= 100) {
              this.state_0 = 7;
              continue;
            }

            this.local$holdingImage1.style.opacity = (toDouble(this.local$holdingImage1.style.opacity) - 0.01).toString();
            this.local$holdingImage2.style.opacity = (toDouble(this.local$holdingImage2.style.opacity) + 0.01).toString();
            this.state_0 = 5;
            this.result_0 = delay(L25, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            this.local$index++;
            this.state_0 = 4;
            continue;
          case 7:
            var $receiver = this.local$closure$list;
            var destination = ArrayList_init();
            var tmp$;
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
              var element = tmp$.next();
              var list = element.fanArts;
              addAll(destination, list);
            }

            this.local$holdingImage1.setAttribute('src', 'https://loritta.website/assets/img/fanarts/' + random(destination, Random.Default).fileName);
            this.state_0 = 8;
            this.result_0 = delay(L5000, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            this.local$index_0 = 0;
            this.state_0 = 9;
            continue;
          case 9:
            if (this.local$index_0 >= 100) {
              this.state_0 = 12;
              continue;
            }

            this.local$holdingImage2.style.opacity = (toDouble(this.local$holdingImage2.style.opacity) - 0.01).toString();
            this.local$holdingImage1.style.opacity = (toDouble(this.local$holdingImage1.style.opacity) + 0.01).toString();
            this.state_0 = 10;
            this.result_0 = delay(L25, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            this.state_0 = 11;
            continue;
          case 11:
            this.local$index_0++;
            this.state_0 = 9;
            continue;
          case 12:
            var $receiver_0 = this.local$closure$list;
            var destination_0 = ArrayList_init();
            var tmp$_0;
            tmp$_0 = $receiver_0.iterator();
            while (tmp$_0.hasNext()) {
              var element_0 = tmp$_0.next();
              var list_0 = element_0.fanArts;
              addAll(destination_0, list_0);
            }

            this.local$holdingImage2.setAttribute('src', 'https://loritta.website/assets/img/fanarts/' + random(destination_0, Random.Default).fileName);
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
  function FanArtsRoute$onRender$lambda$lambda_2(closure$list_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$FanArtsRoute$onRender$lambda$lambda(closure$list_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$FanArtsRoute$onRender$lambda(this$FanArtsRoute_0, closure$call_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$FanArtsRoute = this$FanArtsRoute_0;
    this.local$closure$call = closure$call_0;
  }
  Coroutine$FanArtsRoute$onRender$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FanArtsRoute$onRender$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FanArtsRoute$onRender$lambda.prototype.constructor = Coroutine$FanArtsRoute$onRender$lambda;
  Coroutine$FanArtsRoute$onRender$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_1 = http;
            var host;
            var body;
            host = 'localhost';
            body = utils.EmptyContent;
            var $receiver_2 = new HttpRequestBuilder_init();
            url_0($receiver_2, 'http', host, 0, '/');
            $receiver_2.method = HttpMethod.Companion.Get;
            $receiver_2.body = body;
            FanArtsRoute$onRender$lambda$lambda($receiver_2);
            this.state_0 = 2;
            this.result_0 = call($receiver_1, $receiver_2, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(String_0), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = typeof (tmp$_0 = this.result_0) === 'string' ? tmp$_0 : throwCCE();
            this.result_0;
            var result = this.result_0;
            var $receiver = JSON_0.Companion.nonstrict;
            var list = $receiver.parse_awif5v$(get_list(getOrDefault($receiver.context, getKClass(FanArtArtist))), result);
            this.local$this$FanArtsRoute.fanArtArtists = list;
            this.local$this$FanArtsRoute.fixDummyNavbarHeight_hjvrm5$(this.local$closure$call);
            this.local$this$FanArtsRoute.switchContent_hjvrm5$(this.local$closure$call);
            this.local$this$FanArtsRoute.twoColumnLayout_cbu7sc$(FanArtsRoute$onRender$lambda$lambda_0(list, this.local$this$FanArtsRoute), FanArtsRoute$onRender$lambda$lambda_1(list, this.local$this$FanArtsRoute));
            var artistId = this.local$closure$call.parameters.get_11rb$('artist');
            var artistLookup = null;
            if (artistId != null) {
              var firstOrNull$result;
              firstOrNull$break: do {
                var tmp$;
                tmp$ = list.iterator();
                while (tmp$.hasNext()) {
                  var element = tmp$.next();
                  if (equals(element.id, artistId)) {
                    firstOrNull$result = element;
                    break firstOrNull$break;
                  }
                }
                firstOrNull$result = null;
              }
               while (false);
              artistLookup = firstOrNull$result;
            }

            if (artistLookup != null) {
              this.local$this$FanArtsRoute.renderArtistFanArts_qnglhr$(artistLookup);
            }
             else {
              this.local$this$FanArtsRoute.renderFanArts_a704dj$(this.local$this$FanArtsRoute.sortFanArts_lbwf6o$(list));
            }

            this.local$this$FanArtsRoute.renderArtists_lbwf6o$(this.local$this$FanArtsRoute.sortArtists_lbwf6o$(list));
            this.local$this$FanArtsRoute.m.hideLoadingScreen();
            return SpicyMorenitta$Companion_getInstance().INSTANCE.launch_3q5nlj$(FanArtsRoute$onRender$lambda$lambda_2(list)), Unit;
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
  function FanArtsRoute$onRender$lambda(this$FanArtsRoute_0, closure$call_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$FanArtsRoute$onRender$lambda(this$FanArtsRoute_0, closure$call_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  FanArtsRoute.prototype.onRender_hjvrm5$ = function (call) {
    this.m.showLoadingScreen_61zpoe$();
    this.currentArtistSortingMethod = FanArtsRoute$ArtistSortingMethod$ALPHABETIC_getInstance();
    this.currentFanArtSortingMethod = FanArtsRoute$FanArtSortingMethod$OLD_TO_NEW_getInstance();
    this.filterTag = null;
    this.watchingUser = null;
    SpicyMorenitta$Companion_getInstance().INSTANCE.launch_3q5nlj$(FanArtsRoute$onRender$lambda(this, call));
  };
  function FanArtsRoute$leftSidebar$lambda$lambda$lambda$lambda($receiver) {
    $receiver.value = 'ascend-name';
    $receiver.unaryPlus_pdl1vz$('por nome (A-Z)');
    return Unit;
  }
  function FanArtsRoute$leftSidebar$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.value = 'descend-name';
    $receiver.unaryPlus_pdl1vz$('por nome (Z-A)');
    return Unit;
  }
  function FanArtsRoute$leftSidebar$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.value = 'descend-art';
    $receiver.unaryPlus_pdl1vz$('por mais fan arts');
    return Unit;
  }
  function FanArtsRoute$leftSidebar$lambda$lambda$lambda$lambda_2(this$FanArtsRoute, closure$list) {
    return function (it) {
      window.scrollTo(0.0, 0.0);
      var selectFanArtOrder = select_0(document, '#select-artist-order').value;
      if (equals(selectFanArtOrder, 'ascend-name'))
        this$FanArtsRoute.currentArtistSortingMethod = FanArtsRoute$ArtistSortingMethod$ALPHABETIC_getInstance();
      if (equals(selectFanArtOrder, 'descend-name'))
        this$FanArtsRoute.currentArtistSortingMethod = FanArtsRoute$ArtistSortingMethod$ALPHABETIC_REVERSED_getInstance();
      if (equals(selectFanArtOrder, 'descend-art'))
        this$FanArtsRoute.currentArtistSortingMethod = FanArtsRoute$ArtistSortingMethod$FAN_ART_COUNT_getInstance();
      this$FanArtsRoute.renderArtists_lbwf6o$(this$FanArtsRoute.sortArtists_lbwf6o$(closure$list));
      return Unit;
    };
  }
  function FanArtsRoute$leftSidebar$lambda$lambda$lambda(this$FanArtsRoute, closure$list) {
    return function ($receiver) {
      set_id($receiver, 'select-artist-order');
      option($receiver, void 0, FanArtsRoute$leftSidebar$lambda$lambda$lambda$lambda);
      option($receiver, void 0, FanArtsRoute$leftSidebar$lambda$lambda$lambda$lambda_0);
      option($receiver, void 0, FanArtsRoute$leftSidebar$lambda$lambda$lambda$lambda_1);
      set_onChangeFunction($receiver, FanArtsRoute$leftSidebar$lambda$lambda$lambda$lambda_2(this$FanArtsRoute, closure$list));
      return Unit;
    };
  }
  function FanArtsRoute$leftSidebar$lambda$lambda(this$FanArtsRoute, closure$list) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Organizar Artistas... ');
      select($receiver, void 0, FanArtsRoute$leftSidebar$lambda$lambda$lambda(this$FanArtsRoute, closure$list));
      return Unit;
    };
  }
  function FanArtsRoute$leftSidebar$lambda(this$FanArtsRoute, closure$list) {
    return function ($receiver) {
      set_style($receiver, 'max-width: 250px;');
      div($receiver, void 0, FanArtsRoute$leftSidebar$lambda$lambda(this$FanArtsRoute, closure$list));
      return Unit;
    };
  }
  function FanArtsRoute$leftSidebar$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Busca de artista por nome');
    return Unit;
  }
  function FanArtsRoute$leftSidebar$lambda$lambda_0(closure$list, this$FanArtsRoute) {
    return function (event) {
      var tmp$;
      Kotlin.isType(tmp$ = event, InputEvent) ? tmp$ : throwCCE();
      var value = {v: ensureNotNull(event.target).value};
      println(value.v);
      var tmp$_0 = this$FanArtsRoute;
      var $receiver = this$FanArtsRoute.sortArtists_lbwf6o$(closure$list);
      var destination = ArrayList_init();
      var tmp$_1;
      tmp$_1 = $receiver.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        var tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if (contains((tmp$_6 = (tmp$_5 = (tmp$_4 = (tmp$_2 = element.info.override) != null ? tmp$_2.name : null) != null ? tmp$_4 : (tmp$_3 = element.user) != null ? tmp$_3.name : null) != null ? tmp$_5 : element.info.name) != null ? tmp$_6 : element.id, typeof (tmp$_7 = value.v) === 'string' ? tmp$_7 : throwCCE(), true))
          destination.add_11rb$(element);
      }
      tmp$_0.renderArtists_lbwf6o$(destination);
      return Unit;
    };
  }
  function FanArtsRoute$leftSidebar$lambda_1(closure$list, this$FanArtsRoute) {
    return function ($receiver) {
      set_onInputFunction($receiver, FanArtsRoute$leftSidebar$lambda$lambda_0(closure$list, this$FanArtsRoute));
      return Unit;
    };
  }
  function FanArtsRoute$leftSidebar$lambda_2($receiver) {
    return Unit;
  }
  function FanArtsRoute$leftSidebar$lambda_3($receiver) {
    return Unit;
  }
  FanArtsRoute.prototype.leftSidebar_farzp2$ = function ($receiver, list) {
    div($receiver, void 0, FanArtsRoute$leftSidebar$lambda(this, list));
    div($receiver, void 0, FanArtsRoute$leftSidebar$lambda_0);
    input_0($receiver, InputType.text, void 0, void 0, void 0, void 0, FanArtsRoute$leftSidebar$lambda_1(list, this));
    hr($receiver, void 0, FanArtsRoute$leftSidebar$lambda_2);
    div($receiver, 'artists', FanArtsRoute$leftSidebar$lambda_3);
  };
  function FanArtsRoute$rightSidebar$lambda$lambda($receiver) {
    set_style($receiver, 'opacity: 1;');
    return Unit;
  }
  function FanArtsRoute$rightSidebar$lambda$lambda_0($receiver) {
    set_style($receiver, 'opacity: 0;');
    return Unit;
  }
  function FanArtsRoute$rightSidebar$lambda($receiver) {
    img($receiver, void 0, 'https://cdn.discordapp.com/attachments/544229872189309117/568465135170093086/Loritta_Fan_Arts_-_Miela.png', 'lori-behind');
    img($receiver, void 0, 'https://loritta.website/assets/img/fanarts/Loritta_Anniversary_2019_-_Miela.png', 'holding-image-1 icon-middle fan-art-in-hand', FanArtsRoute$rightSidebar$lambda$lambda);
    img($receiver, void 0, 'https://loritta.website/assets/img/fanarts/Loritta_3_-_Aniih.png', 'holding-image-2 icon-middle fan-art-in-hand', FanArtsRoute$rightSidebar$lambda$lambda_0);
    img($receiver, void 0, 'https://cdn.discordapp.com/attachments/544229872189309117/568465133286719488/loritta_arms.png', 'lori-arms');
    return Unit;
  }
  function FanArtsRoute$rightSidebar$lambda$lambda_1($receiver) {
    set_id($receiver, 'artist-info');
    return Unit;
  }
  function FanArtsRoute$rightSidebar$lambda$lambda$lambda$lambda($receiver) {
    $receiver.value = 'ascend';
    $receiver.unaryPlus_pdl1vz$('por data (ascendente)');
    return Unit;
  }
  function FanArtsRoute$rightSidebar$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.value = 'descend';
    $receiver.unaryPlus_pdl1vz$('por data (descendente)');
    return Unit;
  }
  function FanArtsRoute$rightSidebar$lambda$lambda$lambda$lambda_1(this$FanArtsRoute, closure$list) {
    return function (it) {
      window.scrollTo(0.0, 0.0);
      var selectFanArtOrder = select_0(document, '#select-fan-art-order');
      if (equals(selectFanArtOrder.value, 'ascend'))
        this$FanArtsRoute.currentFanArtSortingMethod = FanArtsRoute$FanArtSortingMethod$OLD_TO_NEW_getInstance();
      else
        this$FanArtsRoute.currentFanArtSortingMethod = FanArtsRoute$FanArtSortingMethod$NEW_TO_OLD_getInstance();
      this$FanArtsRoute.renderFanArts_a704dj$(this$FanArtsRoute.sortFanArts_lbwf6o$(closure$list));
      return Unit;
    };
  }
  function FanArtsRoute$rightSidebar$lambda$lambda$lambda(this$FanArtsRoute, closure$list) {
    return function ($receiver) {
      set_id($receiver, 'select-fan-art-order');
      option($receiver, void 0, FanArtsRoute$rightSidebar$lambda$lambda$lambda$lambda);
      option($receiver, void 0, FanArtsRoute$rightSidebar$lambda$lambda$lambda$lambda_0);
      set_onChangeFunction($receiver, FanArtsRoute$rightSidebar$lambda$lambda$lambda$lambda_1(this$FanArtsRoute, closure$list));
      return Unit;
    };
  }
  function FanArtsRoute$rightSidebar$lambda$lambda_2(this$FanArtsRoute, closure$list) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Organizar Fan Arts... ');
      select($receiver, void 0, FanArtsRoute$rightSidebar$lambda$lambda$lambda(this$FanArtsRoute, closure$list));
      return Unit;
    };
  }
  function FanArtsRoute$rightSidebar$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.value = 'all';
    $receiver.unaryPlus_pdl1vz$('Todas');
    return Unit;
  }
  function FanArtsRoute$rightSidebar$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.value = 'anniversary-2019';
    $receiver.unaryPlus_pdl1vz$('Anivers\xE1rio 2019');
    return Unit;
  }
  function FanArtsRoute$rightSidebar$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.value = 'april-fools-2019';
    $receiver.unaryPlus_pdl1vz$('Primeiro de Abril 2019 (Furries)');
    return Unit;
  }
  function FanArtsRoute$rightSidebar$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.value = 'sweater-2019';
    $receiver.unaryPlus_pdl1vz$('Moletons');
    return Unit;
  }
  function FanArtsRoute$rightSidebar$lambda$lambda$lambda$lambda_6($receiver) {
    $receiver.value = 'holiday-2019';
    $receiver.unaryPlus_pdl1vz$('F\xE9rias de Inverno 2019');
    return Unit;
  }
  function FanArtsRoute$rightSidebar$lambda$lambda$lambda$lambda_7(this$FanArtsRoute, closure$list) {
    return function (it) {
      window.scrollTo(0.0, 0.0);
      var selectFanArtOrder = select_0(document, '#select-fan-arts-type').value;
      if (equals(selectFanArtOrder, 'all')) {
        this$FanArtsRoute.filterTag = null;
        this$FanArtsRoute.renderFanArts_a704dj$(this$FanArtsRoute.sortFanArts_lbwf6o$(closure$list));
      }
       else {
        this$FanArtsRoute.filterTag = selectFanArtOrder;
        this$FanArtsRoute.renderFanArts_a704dj$(this$FanArtsRoute.sortFanArts_lbwf6o$(closure$list));
      }
      return Unit;
    };
  }
  function FanArtsRoute$rightSidebar$lambda$lambda$lambda_0(this$FanArtsRoute, closure$list) {
    return function ($receiver) {
      set_id($receiver, 'select-fan-arts-type');
      option($receiver, void 0, FanArtsRoute$rightSidebar$lambda$lambda$lambda$lambda_2);
      option($receiver, void 0, FanArtsRoute$rightSidebar$lambda$lambda$lambda$lambda_3);
      option($receiver, void 0, FanArtsRoute$rightSidebar$lambda$lambda$lambda$lambda_4);
      option($receiver, void 0, FanArtsRoute$rightSidebar$lambda$lambda$lambda$lambda_5);
      option($receiver, void 0, FanArtsRoute$rightSidebar$lambda$lambda$lambda$lambda_6);
      set_onChangeFunction($receiver, FanArtsRoute$rightSidebar$lambda$lambda$lambda$lambda_7(this$FanArtsRoute, closure$list));
      return Unit;
    };
  }
  function FanArtsRoute$rightSidebar$lambda$lambda_3(this$FanArtsRoute, closure$list) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Mostrar Fan Arts... ');
      select($receiver, void 0, FanArtsRoute$rightSidebar$lambda$lambda$lambda_0(this$FanArtsRoute, closure$list));
      return Unit;
    };
  }
  function FanArtsRoute$rightSidebar$lambda$lambda_4($receiver) {
    return Unit;
  }
  function FanArtsRoute$rightSidebar$lambda$lambda_5($receiver) {
    set_id($receiver, 'fan-art-gallery');
    return Unit;
  }
  function FanArtsRoute$rightSidebar$lambda_0(this$FanArtsRoute, closure$list) {
    return function ($receiver) {
      div($receiver, void 0, FanArtsRoute$rightSidebar$lambda$lambda_1);
      div($receiver, void 0, FanArtsRoute$rightSidebar$lambda$lambda_2(this$FanArtsRoute, closure$list));
      div($receiver, void 0, FanArtsRoute$rightSidebar$lambda$lambda_3(this$FanArtsRoute, closure$list));
      hr($receiver, void 0, FanArtsRoute$rightSidebar$lambda$lambda_4);
      div($receiver, void 0, FanArtsRoute$rightSidebar$lambda$lambda_5);
      return Unit;
    };
  }
  FanArtsRoute.prototype.rightSidebar_farzp2$ = function ($receiver, list) {
    div($receiver, 'lori-holding', FanArtsRoute$rightSidebar$lambda);
    div($receiver, void 0, FanArtsRoute$rightSidebar$lambda_0(this, list));
  };
  function FanArtsRoute$sortArtists$lambda(it) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    return (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$ = it.info.override) != null ? tmp$.name : null) != null ? tmp$_1 : (tmp$_0 = it.user) != null ? tmp$_0.name : null) != null ? tmp$_2 : it.info.name) != null ? tmp$_3 : it.id;
  }
  function FanArtsRoute$sortArtists$lambda_0(it) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    return (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$ = it.info.override) != null ? tmp$.name : null) != null ? tmp$_1 : (tmp$_0 = it.user) != null ? tmp$_0.name : null) != null ? tmp$_2 : it.info.name) != null ? tmp$_3 : it.id;
  }
  function FanArtsRoute$sortArtists$lambda_1(it) {
    return it.fanArts.size;
  }
  FanArtsRoute.prototype.sortArtists_lbwf6o$ = function (artists) {
    var tmp$;
    switch (this.currentArtistSortingMethod.name) {
      case 'ALPHABETIC':
        tmp$ = sortedWith(artists, new Comparator$ObjectLiteral_0(compareBy$lambda_0(FanArtsRoute$sortArtists$lambda)));
        break;
      case 'ALPHABETIC_REVERSED':
        tmp$ = sortedWith(artists, new Comparator$ObjectLiteral_1(compareByDescending$lambda(FanArtsRoute$sortArtists$lambda_0)));
        break;
      case 'FAN_ART_COUNT':
        tmp$ = sortedWith(artists, new Comparator$ObjectLiteral_1(compareByDescending$lambda(FanArtsRoute$sortArtists$lambda_1)));
        break;
      case 'BEST_ARTISTS':
        tmp$ = emptyList();
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    var sorted = tmp$;
    return sorted;
  };
  function FanArtsRoute$sortFanArts$lambda(it) {
    return it.createdAt.getTime();
  }
  function FanArtsRoute$sortFanArts$lambda_0(it) {
    return it.createdAt.getTime();
  }
  FanArtsRoute.prototype.sortFanArts_lbwf6o$ = function (list) {
    var tmp$;
    var newList = list;
    if (this.watchingUser != null) {
      var $receiver = newList;
      var destination = ArrayList_init();
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (equals(element, this.watchingUser))
          destination.add_11rb$(element);
      }
      newList = destination;
    }
    switch (this.currentFanArtSortingMethod.name) {
      case 'OLD_TO_NEW':
        var $receiver_0 = newList;
        var destination_0 = ArrayList_init();
        var tmp$_1;
        tmp$_1 = $receiver_0.iterator();
        while (tmp$_1.hasNext()) {
          var element_0 = tmp$_1.next();
          var list_0 = element_0.fanArts;
          addAll(destination_0, list_0);
        }

        tmp$ = sortedWith(destination_0, new Comparator$ObjectLiteral_0(compareBy$lambda_0(FanArtsRoute$sortFanArts$lambda)));
        break;
      case 'NEW_TO_OLD':
        var $receiver_1 = newList;
        var destination_1 = ArrayList_init();
        var tmp$_2;
        tmp$_2 = $receiver_1.iterator();
        while (tmp$_2.hasNext()) {
          var element_1 = tmp$_2.next();
          var list_1 = element_1.fanArts;
          addAll(destination_1, list_1);
        }

        tmp$ = sortedWith(destination_1, new Comparator$ObjectLiteral_1(compareByDescending$lambda(FanArtsRoute$sortFanArts$lambda_0)));
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    var sorted = tmp$;
    var filterTag = this.filterTag;
    if (filterTag != null) {
      var $receiver_2 = sorted;
      var destination_2 = ArrayList_init();
      var tmp$_3;
      tmp$_3 = $receiver_2.iterator();
      while (tmp$_3.hasNext()) {
        var element_2 = tmp$_3.next();
        if (element_2.tags.contains_11rb$(filterTag))
          destination_2.add_11rb$(element_2);
      }
      sorted = destination_2;
    }
    return sorted;
  };
  function FanArtsRoute$renderArtists$lambda$lambda$lambda(this$FanArtsRoute) {
    return function (it) {
      var artistInfo = select_0(document, '#artist-info');
      clear(artistInfo);
      this$FanArtsRoute.watchingUser = null;
      this$FanArtsRoute.renderFanArts_a704dj$(this$FanArtsRoute.sortFanArts_lbwf6o$(this$FanArtsRoute.fanArtArtists));
      window.history.pushState(null, '', '/' + this$FanArtsRoute.m.websiteLocaleId + '/fanarts');
      return Unit;
    };
  }
  function FanArtsRoute$renderArtists$lambda$lambda(this$FanArtsRoute) {
    return function ($receiver) {
      set_style($receiver, 'display: flex; align-items: center;');
      var tmp$;
      var sum = 0;
      tmp$ = this$FanArtsRoute.fanArtArtists.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        sum = sum + element.fanArts.size | 0;
      }
      $receiver.unaryPlus_pdl1vz$('Ver todas as ' + sum + ' fan arts');
      set_onClickFunction($receiver, FanArtsRoute$renderArtists$lambda$lambda$lambda(this$FanArtsRoute));
      return Unit;
    };
  }
  function FanArtsRoute$renderArtists$lambda$lambda$lambda$lambda($receiver) {
    $receiver.width = '32';
    $receiver.height = '32';
    set_style($receiver, 'border-radius: 999999px; margin-right: 6px;');
    return Unit;
  }
  function FanArtsRoute$renderArtists$lambda$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      $receiver.unaryPlus_pdl1vz$((tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$ = closure$it.info.override) != null ? tmp$.name : null) != null ? tmp$_1 : (tmp$_0 = closure$it.user) != null ? tmp$_0.name : null) != null ? tmp$_2 : closure$it.info.name) != null ? tmp$_3 : closure$it.id);
      return Unit;
    };
  }
  function FanArtsRoute$renderArtists$lambda$lambda$lambda$lambda$lambda_0(closure$it) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$it.fanArts.size.toString() + ' fan art' + (closure$it.fanArts.size !== 1 ? 's' : ''));
      return Unit;
    };
  }
  function FanArtsRoute$renderArtists$lambda$lambda$lambda$lambda_0(closure$it) {
    return function ($receiver) {
      set_style($receiver, 'overflow: hidden;');
      div($receiver, 'title', FanArtsRoute$renderArtists$lambda$lambda$lambda$lambda$lambda(closure$it));
      div($receiver, 'subtitle', FanArtsRoute$renderArtists$lambda$lambda$lambda$lambda$lambda_0(closure$it));
      return Unit;
    };
  }
  function FanArtsRoute$renderArtists$lambda$lambda$lambda$lambda_1(closure$it, this$FanArtsRoute) {
    return function (event) {
      this$FanArtsRoute.renderArtistFanArts_qnglhr$(closure$it);
      return Unit;
    };
  }
  function FanArtsRoute$renderArtists$lambda$lambda$lambda_0(closure$it, this$FanArtsRoute) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      set_style($receiver, 'display: flex; align-items: center;');
      img($receiver, void 0, (tmp$_0 = (tmp$ = closure$it.user) != null ? tmp$.effectiveAvatarUrl : null) != null ? tmp$_0 : 'https://cdn.discordapp.com/emojis/523176710439567392.png?v=1', void 0, FanArtsRoute$renderArtists$lambda$lambda$lambda$lambda);
      div($receiver, void 0, FanArtsRoute$renderArtists$lambda$lambda$lambda$lambda_0(closure$it));
      set_onClickFunction($receiver, FanArtsRoute$renderArtists$lambda$lambda$lambda$lambda_1(closure$it, this$FanArtsRoute));
      return Unit;
    };
  }
  function FanArtsRoute$renderArtists$lambda(this$FanArtsRoute, closure$artists) {
    return function ($receiver) {
      div_0($receiver, 'entry', FanArtsRoute$renderArtists$lambda$lambda(this$FanArtsRoute));
      var $receiver_0 = closure$artists;
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        div_0($receiver, 'entry', FanArtsRoute$renderArtists$lambda$lambda$lambda_0(element, this$FanArtsRoute));
      }
      return Unit;
    };
  }
  FanArtsRoute.prototype.renderArtists_lbwf6o$ = function (artists) {
    var artistSidebar = select_0(document, '#left-sidebar .artists');
    clear(artistSidebar);
    append(artistSidebar, FanArtsRoute$renderArtists$lambda(this, artists));
  };
  function FanArtsRoute$renderArtistFanArts$lambda$lambda$lambda$lambda(closure$artist) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      $receiver.unaryPlus_pdl1vz$((tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$ = closure$artist.info.override) != null ? tmp$.name : null) != null ? tmp$_1 : (tmp$_0 = closure$artist.user) != null ? tmp$_0.name : null) != null ? tmp$_2 : closure$artist.info.name) != null ? tmp$_3 : closure$artist.id);
      return Unit;
    };
  }
  function FanArtsRoute$renderArtistFanArts$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('*Sobre Mim do usu\xE1rio aqui*');
    return Unit;
  }
  function FanArtsRoute$renderArtistFanArts$lambda$lambda$lambda(closure$artist) {
    return function ($receiver) {
      div($receiver, 'name', FanArtsRoute$renderArtistFanArts$lambda$lambda$lambda$lambda(closure$artist));
      div($receiver, void 0, FanArtsRoute$renderArtistFanArts$lambda$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function FanArtsRoute$renderArtistFanArts$lambda$lambda(closure$artist) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      img($receiver, void 0, (tmp$_0 = (tmp$ = closure$artist.user) != null ? tmp$.effectiveAvatarUrl : null) != null ? tmp$_0 : 'https://cdn.discordapp.com/emojis/523176710439567392.png?v=1');
      div($receiver, 'text', FanArtsRoute$renderArtistFanArts$lambda$lambda$lambda(closure$artist));
      return Unit;
    };
  }
  function FanArtsRoute$renderArtistFanArts$lambda(closure$artist) {
    return function ($receiver) {
      div_0($receiver, 'user-info', FanArtsRoute$renderArtistFanArts$lambda$lambda(closure$artist));
      return Unit;
    };
  }
  function FanArtsRoute$renderArtistFanArts$lambda_0(it) {
    return it.createdAt.getTime();
  }
  FanArtsRoute.prototype.renderArtistFanArts_qnglhr$ = function (artist) {
    this.watchingUser = artist;
    var artistInfo = select_0(document, '#artist-info');
    clear(artistInfo);
    var fanArtGallery = select_0(document, '#fan-art-gallery');
    clear(fanArtGallery);
    window.history.pushState(null, '', '/' + this.m.websiteLocaleId + '/fanarts/' + artist.id);
    append(artistInfo, FanArtsRoute$renderArtistFanArts$lambda(artist));
    this.renderFanArts_a704dj$(sortedWith(artist.fanArts, new Comparator$ObjectLiteral_0(compareBy$lambda_0(FanArtsRoute$renderArtistFanArts$lambda_0))));
  };
  function FanArtsRoute$renderFanArts$lambda() {
    return Unit;
  }
  function FanArtsRoute$renderFanArts$lambda$lambda$lambda(closure$it, closure$dyn) {
    return function ($receiver) {
      var date = closure$it.value.get_za3lpa$(0).createdAt;
      $receiver.unaryPlus_pdl1vz$(date.toLocaleString('pt-br', closure$dyn) + (' de ' + date.getFullYear()));
      return Unit;
    };
  }
  function FanArtsRoute$renderFanArts$lambda$lambda$lambda$lambda(closure$fanArt) {
    return function ($receiver) {
      var $receiver_0 = $receiver.attributes;
      var key = 'lazy-load-url';
      var value = 'https://loritta.website/assets/img/fanarts/' + closure$fanArt.fileName;
      $receiver_0.put_xwzc9p$(key, value);
      $receiver.height = '100';
      set_title($receiver, closure$fanArt.createdAt.toDateString());
      return Unit;
    };
  }
  function FanArtsRoute$renderFanArts$lambda$lambda$lambda_0(closure$it) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$it.value.iterator();
      while (tmp$.hasNext()) {
        var fanArt = tmp$.next();
        img($receiver, void 0, void 0, 'fan-art', FanArtsRoute$renderFanArts$lambda$lambda$lambda$lambda(fanArt));
      }
      return Unit;
    };
  }
  function FanArtsRoute$renderFanArts$lambda_0(closure$grouped, closure$dyn) {
    return function ($receiver) {
      var $receiver_0 = closure$grouped;
      var tmp$;
      tmp$ = $receiver_0.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        h2($receiver, 'left-horizontal-line uppercase', FanArtsRoute$renderFanArts$lambda$lambda$lambda(element, closure$dyn));
        div_0($receiver, 'fan-arts-wrapper', FanArtsRoute$renderFanArts$lambda$lambda$lambda_0(element));
      }
      return Unit;
    };
  }
  FanArtsRoute.prototype.renderFanArts_a704dj$ = function (sorted) {
    var destination = LinkedHashMap_init();
    var tmp$;
    tmp$ = sorted.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = element.createdAt.getMonth().toString() + '-' + toString(element.createdAt.getFullYear());
      var tmp$_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init();
        destination.put_xwzc9p$(key, answer);
        tmp$_0 = answer;
      }
       else {
        tmp$_0 = value;
      }
      var list = tmp$_0;
      list.add_11rb$(element);
    }
    var grouped = destination;
    var dyn = FanArtsRoute$renderFanArts$lambda;
    dyn['month'] = 'long';
    var fanArtGallery = select_0(document, '#fan-art-gallery');
    clear(fanArtGallery);
    append(fanArtGallery, FanArtsRoute$renderFanArts$lambda_0(grouped, dyn));
    this.m.setUpLazyLoad();
  };
  function FanArtsRoute$ArtistSortingMethod(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FanArtsRoute$ArtistSortingMethod_initFields() {
    FanArtsRoute$ArtistSortingMethod_initFields = function () {
    };
    FanArtsRoute$ArtistSortingMethod$ALPHABETIC_instance = new FanArtsRoute$ArtistSortingMethod('ALPHABETIC', 0);
    FanArtsRoute$ArtistSortingMethod$ALPHABETIC_REVERSED_instance = new FanArtsRoute$ArtistSortingMethod('ALPHABETIC_REVERSED', 1);
    FanArtsRoute$ArtistSortingMethod$FAN_ART_COUNT_instance = new FanArtsRoute$ArtistSortingMethod('FAN_ART_COUNT', 2);
    FanArtsRoute$ArtistSortingMethod$BEST_ARTISTS_instance = new FanArtsRoute$ArtistSortingMethod('BEST_ARTISTS', 3);
  }
  var FanArtsRoute$ArtistSortingMethod$ALPHABETIC_instance;
  function FanArtsRoute$ArtistSortingMethod$ALPHABETIC_getInstance() {
    FanArtsRoute$ArtistSortingMethod_initFields();
    return FanArtsRoute$ArtistSortingMethod$ALPHABETIC_instance;
  }
  var FanArtsRoute$ArtistSortingMethod$ALPHABETIC_REVERSED_instance;
  function FanArtsRoute$ArtistSortingMethod$ALPHABETIC_REVERSED_getInstance() {
    FanArtsRoute$ArtistSortingMethod_initFields();
    return FanArtsRoute$ArtistSortingMethod$ALPHABETIC_REVERSED_instance;
  }
  var FanArtsRoute$ArtistSortingMethod$FAN_ART_COUNT_instance;
  function FanArtsRoute$ArtistSortingMethod$FAN_ART_COUNT_getInstance() {
    FanArtsRoute$ArtistSortingMethod_initFields();
    return FanArtsRoute$ArtistSortingMethod$FAN_ART_COUNT_instance;
  }
  var FanArtsRoute$ArtistSortingMethod$BEST_ARTISTS_instance;
  function FanArtsRoute$ArtistSortingMethod$BEST_ARTISTS_getInstance() {
    FanArtsRoute$ArtistSortingMethod_initFields();
    return FanArtsRoute$ArtistSortingMethod$BEST_ARTISTS_instance;
  }
  FanArtsRoute$ArtistSortingMethod.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArtistSortingMethod',
    interfaces: [Enum]
  };
  function FanArtsRoute$ArtistSortingMethod$values() {
    return [FanArtsRoute$ArtistSortingMethod$ALPHABETIC_getInstance(), FanArtsRoute$ArtistSortingMethod$ALPHABETIC_REVERSED_getInstance(), FanArtsRoute$ArtistSortingMethod$FAN_ART_COUNT_getInstance(), FanArtsRoute$ArtistSortingMethod$BEST_ARTISTS_getInstance()];
  }
  FanArtsRoute$ArtistSortingMethod.values = FanArtsRoute$ArtistSortingMethod$values;
  function FanArtsRoute$ArtistSortingMethod$valueOf(name) {
    switch (name) {
      case 'ALPHABETIC':
        return FanArtsRoute$ArtistSortingMethod$ALPHABETIC_getInstance();
      case 'ALPHABETIC_REVERSED':
        return FanArtsRoute$ArtistSortingMethod$ALPHABETIC_REVERSED_getInstance();
      case 'FAN_ART_COUNT':
        return FanArtsRoute$ArtistSortingMethod$FAN_ART_COUNT_getInstance();
      case 'BEST_ARTISTS':
        return FanArtsRoute$ArtistSortingMethod$BEST_ARTISTS_getInstance();
      default:throwISE('No enum constant net.perfectdreams.spicymorenitta.routes.FanArtsRoute.ArtistSortingMethod.' + name);
    }
  }
  FanArtsRoute$ArtistSortingMethod.valueOf_61zpoe$ = FanArtsRoute$ArtistSortingMethod$valueOf;
  function FanArtsRoute$FanArtSortingMethod(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FanArtsRoute$FanArtSortingMethod_initFields() {
    FanArtsRoute$FanArtSortingMethod_initFields = function () {
    };
    FanArtsRoute$FanArtSortingMethod$OLD_TO_NEW_instance = new FanArtsRoute$FanArtSortingMethod('OLD_TO_NEW', 0);
    FanArtsRoute$FanArtSortingMethod$NEW_TO_OLD_instance = new FanArtsRoute$FanArtSortingMethod('NEW_TO_OLD', 1);
  }
  var FanArtsRoute$FanArtSortingMethod$OLD_TO_NEW_instance;
  function FanArtsRoute$FanArtSortingMethod$OLD_TO_NEW_getInstance() {
    FanArtsRoute$FanArtSortingMethod_initFields();
    return FanArtsRoute$FanArtSortingMethod$OLD_TO_NEW_instance;
  }
  var FanArtsRoute$FanArtSortingMethod$NEW_TO_OLD_instance;
  function FanArtsRoute$FanArtSortingMethod$NEW_TO_OLD_getInstance() {
    FanArtsRoute$FanArtSortingMethod_initFields();
    return FanArtsRoute$FanArtSortingMethod$NEW_TO_OLD_instance;
  }
  FanArtsRoute$FanArtSortingMethod.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FanArtSortingMethod',
    interfaces: [Enum]
  };
  function FanArtsRoute$FanArtSortingMethod$values() {
    return [FanArtsRoute$FanArtSortingMethod$OLD_TO_NEW_getInstance(), FanArtsRoute$FanArtSortingMethod$NEW_TO_OLD_getInstance()];
  }
  FanArtsRoute$FanArtSortingMethod.values = FanArtsRoute$FanArtSortingMethod$values;
  function FanArtsRoute$FanArtSortingMethod$valueOf(name) {
    switch (name) {
      case 'OLD_TO_NEW':
        return FanArtsRoute$FanArtSortingMethod$OLD_TO_NEW_getInstance();
      case 'NEW_TO_OLD':
        return FanArtsRoute$FanArtSortingMethod$NEW_TO_OLD_getInstance();
      default:throwISE('No enum constant net.perfectdreams.spicymorenitta.routes.FanArtsRoute.FanArtSortingMethod.' + name);
    }
  }
  FanArtsRoute$FanArtSortingMethod.valueOf_61zpoe$ = FanArtsRoute$FanArtSortingMethod$valueOf;
  FanArtsRoute.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FanArtsRoute',
    interfaces: [UpdateNavbarSizePostRender]
  };
  function get$lambda_1($receiver) {
    return Unit;
  }
  function GeneralDashboardRoute(m) {
    UpdateNavbarSizePostRender.call(this, '/guild/{guildId}/dashboard');
    this.m = m;
  }
  Object.defineProperty(GeneralDashboardRoute.prototype, 'keepLoadingScreen', {
    get: function () {
      return true;
    }
  });
  function GeneralDashboardRoute$createMessage$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function GeneralDashboardRoute$createMessage$lambda$lambda$lambda(closure$senderAvatar) {
    return function ($receiver) {
      img($receiver, void 0, closure$senderAvatar, 'user-avatar', GeneralDashboardRoute$createMessage$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function GeneralDashboardRoute$createMessage$lambda$lambda$lambda$lambda_0(closure$senderName) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$senderName);
      return Unit;
    };
  }
  function GeneralDashboardRoute$createMessage$lambda$lambda$lambda$lambda_1(closure$senderMessage) {
    return function ($receiver) {
      set_style($receiver, 'white-space: normal; max-width: 20em;');
      closure$senderMessage($receiver);
      return Unit;
    };
  }
  function GeneralDashboardRoute$createMessage$lambda$lambda$lambda_0(closure$senderName, closure$senderMessage) {
    return function ($receiver) {
      div($receiver, 'user-name', GeneralDashboardRoute$createMessage$lambda$lambda$lambda$lambda_0(closure$senderName));
      div($receiver, void 0, GeneralDashboardRoute$createMessage$lambda$lambda$lambda$lambda_1(closure$senderMessage));
      return Unit;
    };
  }
  function GeneralDashboardRoute$createMessage$lambda$lambda(closure$senderAvatar, closure$senderName, closure$senderMessage) {
    return function ($receiver) {
      div($receiver, void 0, GeneralDashboardRoute$createMessage$lambda$lambda$lambda(closure$senderAvatar));
      div($receiver, 'right-side', GeneralDashboardRoute$createMessage$lambda$lambda$lambda_0(closure$senderName, closure$senderMessage));
      return Unit;
    };
  }
  function GeneralDashboardRoute$createMessage$lambda$lambda_0($receiver) {
    return Unit;
  }
  function GeneralDashboardRoute$createMessage$lambda$lambda$lambda$lambda_2($receiver) {
    return Unit;
  }
  function GeneralDashboardRoute$createMessage$lambda$lambda$lambda_1($receiver) {
    img($receiver, void 0, 'https://cdn.discordapp.com/avatars/297153970613387264/eb14362006ecdd6d5030a463e01935d3.png?size=2048', 'user-avatar', GeneralDashboardRoute$createMessage$lambda$lambda$lambda$lambda_2);
    return Unit;
  }
  function GeneralDashboardRoute$createMessage$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Bot');
    return Unit;
  }
  function GeneralDashboardRoute$createMessage$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.unaryPlus_pdl1vz$('Loritta Morenitta \uD83D\uDE18 ');
    span($receiver, 'bot-tag', GeneralDashboardRoute$createMessage$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function GeneralDashboardRoute$createMessage$lambda$lambda$lambda$lambda_4(closure$loriResponse) {
    return function ($receiver) {
      closure$loriResponse($receiver);
      return Unit;
    };
  }
  function GeneralDashboardRoute$createMessage$lambda$lambda$lambda_2(closure$loriResponse) {
    return function ($receiver) {
      div($receiver, 'user-name', GeneralDashboardRoute$createMessage$lambda$lambda$lambda$lambda_3);
      div($receiver, void 0, GeneralDashboardRoute$createMessage$lambda$lambda$lambda$lambda_4(closure$loriResponse));
      return Unit;
    };
  }
  function GeneralDashboardRoute$createMessage$lambda$lambda_1(closure$loriResponse) {
    return function ($receiver) {
      div($receiver, void 0, GeneralDashboardRoute$createMessage$lambda$lambda$lambda_1);
      div($receiver, 'right-side', GeneralDashboardRoute$createMessage$lambda$lambda$lambda_2(closure$loriResponse));
      return Unit;
    };
  }
  function GeneralDashboardRoute$createMessage$lambda(closure$senderAvatar, closure$senderName, closure$senderMessage, closure$loriResponse) {
    return function ($receiver) {
      set_style($receiver, 'padding: 12px; border-radius: 7px; border: 1px solid #dcddde;');
      div($receiver, 'content', GeneralDashboardRoute$createMessage$lambda$lambda(closure$senderAvatar, closure$senderName, closure$senderMessage));
      hr($receiver, void 0, GeneralDashboardRoute$createMessage$lambda$lambda_0);
      div($receiver, 'content', GeneralDashboardRoute$createMessage$lambda$lambda_1(closure$loriResponse));
      return Unit;
    };
  }
  GeneralDashboardRoute.prototype.createMessage_9ycu1y$ = function ($receiver, senderName, senderAvatar, senderMessage, loriResponse) {
    div($receiver, 'discord-chat-box', GeneralDashboardRoute$createMessage$lambda(senderAvatar, senderName, senderMessage, loriResponse));
  };
  function GeneralDashboardRoute$onRender$lambda$lambda(closure$call) {
    return function ($receiver) {
      url($receiver, window.location.origin + '/api/v1/guilds/' + toString(closure$call.parameters.get_11rb$('guildId')) + '/config');
      return Unit;
    };
  }
  function GeneralDashboardRoute$onRender$lambda$lambda_0($receiver) {
    leftSidebarForGuildDashboard($receiver);
    return Unit;
  }
  function GeneralDashboardRoute$onRender$lambda$lambda_1(closure$call, closure$guildConfig, this$GeneralDashboardRoute) {
    return function ($receiver) {
      this$GeneralDashboardRoute.rightSidebar_dwvl1m$($receiver, closure$call, closure$guildConfig);
      return Unit;
    };
  }
  function Coroutine$GeneralDashboardRoute$onRender$lambda(closure$call_0, this$GeneralDashboardRoute_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$call = closure$call_0;
    this.local$this$GeneralDashboardRoute = this$GeneralDashboardRoute_0;
  }
  Coroutine$GeneralDashboardRoute$onRender$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GeneralDashboardRoute$onRender$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GeneralDashboardRoute$onRender$lambda.prototype.constructor = Coroutine$GeneralDashboardRoute$onRender$lambda;
  Coroutine$GeneralDashboardRoute$onRender$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_1 = http;
            var block = GeneralDashboardRoute$onRender$lambda$lambda(this.local$closure$call);
            var host;
            var body;
            host = 'localhost';
            body = utils.EmptyContent;
            var $receiver_2 = new HttpRequestBuilder_init();
            url_0($receiver_2, 'http', host, 0, '/');
            $receiver_2.method = HttpMethod.Companion.Get;
            $receiver_2.body = body;
            block($receiver_2);
            this.state_0 = 2;
            this.result_0 = call($receiver_1, $receiver_2, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(String_0), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = typeof (tmp$_0 = this.result_0) === 'string' ? tmp$_0 : throwCCE();
            this.result_0;
            var result = this.result_0;
            var $receiver = JSON_0.Companion.nonstrict;
            var guildConfig = $receiver.parse_awif5v$(getOrDefault($receiver.context, getKClass(GuildConfig)), result);
            this.local$this$GeneralDashboardRoute.fixDummyNavbarHeight_hjvrm5$(this.local$closure$call);
            this.local$this$GeneralDashboardRoute.switchContent_hjvrm5$(this.local$closure$call);
            this.local$this$GeneralDashboardRoute.twoColumnLayout_cbu7sc$(GeneralDashboardRoute$onRender$lambda$lambda_0, GeneralDashboardRoute$onRender$lambda$lambda_1(this.local$closure$call, guildConfig, this.local$this$GeneralDashboardRoute));
            SpicyMorenitta$Companion_getInstance().INSTANCE.setUpLinkPreloader();
            return this.local$this$GeneralDashboardRoute.m.hideLoadingScreen(), Unit;
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
  function GeneralDashboardRoute$onRender$lambda(closure$call_0, this$GeneralDashboardRoute_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$GeneralDashboardRoute$onRender$lambda(closure$call_0, this$GeneralDashboardRoute_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  GeneralDashboardRoute.prototype.onRender_hjvrm5$ = function (call) {
    this.m.showLoadingScreen_61zpoe$();
    SpicyMorenitta$Companion_getInstance().INSTANCE.launch_3q5nlj$(GeneralDashboardRoute$onRender$lambda(call, this));
  };
  function GeneralDashboardRoute$rightSidebar$lambda$lambda$lambda($receiver) {
    set_style($receiver, 'border-radius: 100%; align-self: baseline;');
    return Unit;
  }
  function GeneralDashboardRoute$rightSidebar$lambda$lambda($receiver) {
    img($receiver, void 0, 'https://cdn.discordapp.com/avatars/297153970613387264/eb14362006ecdd6d5030a463e01935d3.png', void 0, GeneralDashboardRoute$rightSidebar$lambda$lambda$lambda);
    return Unit;
  }
  function GeneralDashboardRoute$rightSidebar$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Prefixo');
    return Unit;
  }
  function GeneralDashboardRoute$rightSidebar$lambda$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('Prefixo \xE9 o texto que vem antes de um comando. Eu venho como padr\xE3o com o caractere +, mas voc\xEA pode alter\xE1-lo nesta op\xE7\xE3o.');
    return Unit;
  }
  function GeneralDashboardRoute$rightSidebar$lambda$lambda$lambda$lambda(it) {
    var cmdPrefixInputElement = select_0(document, '.lori-section .right .command-prefix');
    var prefixElement = select_0(document, '.lori-section .right .prefix');
    prefixElement.innerText = cmdPrefixInputElement.value;
    return Unit;
  }
  function GeneralDashboardRoute$rightSidebar$lambda$lambda$lambda_2(closure$generalConfig) {
    return function ($receiver) {
      $receiver.value = closure$generalConfig.commandPrefix;
      set_onInputFunction($receiver, GeneralDashboardRoute$rightSidebar$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function GeneralDashboardRoute$rightSidebar$lambda$lambda$lambda$lambda_0(it) {
    hideUnsavedAlert();
    return Unit;
  }
  function GeneralDashboardRoute$rightSidebar$lambda$lambda$lambda_3($receiver) {
    $receiver.unaryPlus_pdl1vz$('Reset');
    set_onClickFunction($receiver, GeneralDashboardRoute$rightSidebar$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function GeneralDashboardRoute$rightSidebar$lambda$lambda$lambda$lambda_1(closure$generalConfig) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$generalConfig.commandPrefix);
      return Unit;
    };
  }
  function GeneralDashboardRoute$rightSidebar$lambda$lambda$lambda_4(closure$generalConfig) {
    return function ($receiver) {
      span($receiver, 'prefix', GeneralDashboardRoute$rightSidebar$lambda$lambda$lambda$lambda_1(closure$generalConfig));
      $receiver.unaryPlus_pdl1vz$('ping');
      return Unit;
    };
  }
  function GeneralDashboardRoute$rightSidebar$lambda$lambda$lambda_5($receiver) {
    $receiver.unaryPlus_pdl1vz$('Pong!');
    return Unit;
  }
  function GeneralDashboardRoute$rightSidebar$lambda$lambda_0(closure$generalConfig, this$GeneralDashboardRoute) {
    return function ($receiver) {
      div($receiver, 'section-title', GeneralDashboardRoute$rightSidebar$lambda$lambda$lambda_0);
      div($receiver, void 0, GeneralDashboardRoute$rightSidebar$lambda$lambda$lambda_1);
      input_0($receiver, InputType.text, void 0, void 0, void 0, 'command-prefix', GeneralDashboardRoute$rightSidebar$lambda$lambda$lambda_2(closure$generalConfig));
      button($receiver, void 0, void 0, void 0, void 0, void 0, GeneralDashboardRoute$rightSidebar$lambda$lambda$lambda_3);
      this$GeneralDashboardRoute.createMessage_9ycu1y$($receiver, ensureNotNull(SpicyMorenitta$Companion_getInstance().INSTANCE.userIdentification).username, 'https://cdn.discordapp.com/emojis/523176710439567392.png?v=1', GeneralDashboardRoute$rightSidebar$lambda$lambda$lambda_4(closure$generalConfig), GeneralDashboardRoute$rightSidebar$lambda$lambda$lambda_5);
      return Unit;
    };
  }
  function GeneralDashboardRoute$rightSidebar$lambda(closure$generalConfig, this$GeneralDashboardRoute) {
    return function ($receiver) {
      div($receiver, 'left', GeneralDashboardRoute$rightSidebar$lambda$lambda);
      div($receiver, 'right as-column', GeneralDashboardRoute$rightSidebar$lambda$lambda_0(closure$generalConfig, this$GeneralDashboardRoute));
      return Unit;
    };
  }
  function GeneralDashboardRoute$rightSidebar$lambda_0($receiver) {
    return Unit;
  }
  function GeneralDashboardRoute$rightSidebar$lambda_1($receiver) {
    return Unit;
  }
  function GeneralDashboardRoute$rightSidebar$lambda_2(closure$generalConfig) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$generalConfig.commandPrefix);
      return Unit;
    };
  }
  function GeneralDashboardRoute$rightSidebar$lambda$lambda$ObjectLiteral() {
  }
  GeneralDashboardRoute$rightSidebar$lambda$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function GeneralDashboardRoute$rightSidebar$lambda$lambda_1(closure$call) {
    return function (it) {
      var testPrefix = window.prompt('Prefix', '..');
      var obj = new GeneralDashboardRoute$rightSidebar$lambda$lambda$ObjectLiteral();
      obj.commandPrefix = testPrefix;
      WebsiteUtils_getInstance().patchGuildConfigById_3m4wor$(ensureNotNull(getValue(closure$call.parameters, 'guildId')), 10000, obj);
      return Unit;
    };
  }
  function GeneralDashboardRoute$rightSidebar$lambda_3(closure$call) {
    return function ($receiver) {
      set_id($receiver, 'button-wow');
      $receiver.unaryPlus_pdl1vz$('Test Update Guild');
      set_onClickFunction($receiver, GeneralDashboardRoute$rightSidebar$lambda$lambda_1(closure$call));
      return Unit;
    };
  }
  GeneralDashboardRoute.prototype.rightSidebar_dwvl1m$ = function ($receiver, call, guildConfig) {
    var generalConfig = ensureNotNull(guildConfig.general);
    div($receiver, 'lori-section', GeneralDashboardRoute$rightSidebar$lambda(generalConfig, this));
    hr($receiver, void 0, GeneralDashboardRoute$rightSidebar$lambda_0);
    createToggle($receiver, 'Mencionar quem executou o comando.', 'Caso o comando n\xE3o tenha argumentos obrigat\xF3rios, voc\xEA pode usar \uD83E\uDD37 como primeiro argumento para obter a ajuda do comando.', 'commandStuff', true);
    hr($receiver, void 0, GeneralDashboardRoute$rightSidebar$lambda_1);
    createToggle($receiver, 'Explicar comandos ao executar eles sem usar nenhum argumento.', 'Caso o comando n\xE3o tenha argumentos obrigat\xF3rios, voc\xEA pode usar \uD83E\uDD37 como primeiro argumento para obter a ajuda do comando.', 'commandStuff', true);
    div($receiver, void 0, GeneralDashboardRoute$rightSidebar$lambda_2(generalConfig));
    button($receiver, void 0, void 0, void 0, void 0, void 0, GeneralDashboardRoute$rightSidebar$lambda_3(call));
  };
  GeneralDashboardRoute.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeneralDashboardRoute',
    interfaces: [UpdateNavbarSizePostRender]
  };
  function GuildDashboard() {
    GuildDashboard_instance = this;
    this.isModified = false;
  }
  GuildDashboard.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'GuildDashboard',
    interfaces: []
  };
  var GuildDashboard_instance = null;
  function GuildDashboard_getInstance() {
    if (GuildDashboard_instance === null) {
      new GuildDashboard();
    }
    return GuildDashboard_instance;
  }
  function createToggle$lambda$lambda$lambda(closure$title) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$title);
      return Unit;
    };
  }
  function createToggle$lambda$lambda$lambda_0(closure$subText) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$subText);
      return Unit;
    };
  }
  function createToggle$lambda$lambda(closure$title, closure$subText) {
    return function ($receiver) {
      div($receiver, void 0, createToggle$lambda$lambda$lambda(closure$title));
      if (closure$subText != null) {
        div($receiver, 'sub-text', createToggle$lambda$lambda$lambda_0(closure$subText));
      }
      return Unit;
    };
  }
  function createToggle$lambda$lambda$lambda$lambda(it) {
    displayUnsavedAlert();
    GuildDashboard_getInstance().isModified = true;
    return Unit;
  }
  function createToggle$lambda$lambda$lambda_1(closure$id, closure$isChecked) {
    return function ($receiver) {
      var $receiver_0 = $receiver.attributes;
      var value = closure$id != null ? closure$id : 'checkbox';
      $receiver_0.put_xwzc9p$('id', value);
      if (closure$isChecked) {
        $receiver.attributes.put_xwzc9p$('checked', 'true');
      }
      set_onChangeFunction($receiver, createToggle$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function createToggle$lambda$lambda$lambda_2($receiver) {
    return Unit;
  }
  function createToggle$lambda$lambda_0(closure$id, closure$isChecked) {
    return function ($receiver) {
      var $receiver_0 = $receiver.attributes;
      var value = closure$id != null ? closure$id : 'checkbox';
      $receiver_0.put_xwzc9p$('for', value);
      input_0($receiver, InputType.checkBox, void 0, void 0, void 0, void 0, createToggle$lambda$lambda$lambda_1(closure$id, closure$isChecked));
      div($receiver, 'slider round', createToggle$lambda$lambda$lambda_2);
      return Unit;
    };
  }
  function createToggle$lambda(closure$title, closure$subText, closure$id, closure$isChecked) {
    return function ($receiver) {
      div($receiver, 'information', createToggle$lambda$lambda(closure$title, closure$subText));
      label($receiver, 'switch', createToggle$lambda$lambda_0(closure$id, closure$isChecked));
      return Unit;
    };
  }
  function createToggle($receiver, title, subText, id, isChecked) {
    if (subText === void 0)
      subText = null;
    if (id === void 0)
      id = null;
    if (isChecked === void 0)
      isChecked = false;
    div($receiver, 'toggleable-wrapper', createToggle$lambda(title, subText, id, isChecked));
  }
  function displayUnsavedAlert() {
    if (GuildDashboard_getInstance().isModified)
      return;
    var unsavedAlert = select_0(document, '#not-saved-alert');
    removeClass(unsavedAlert, ['reversed', 'invisible']);
    resetAnimation(unsavedAlert);
  }
  function hideUnsavedAlert() {
    if (!GuildDashboard_getInstance().isModified)
      return;
    var unsavedAlert = select_0(document, '#not-saved-alert');
    removeClass(unsavedAlert, ['invisible']);
    addClass(unsavedAlert, ['reversed']);
    resetAnimation(unsavedAlert);
  }
  function Coroutine$resetAnimation$lambda(closure$element_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$element = closure$element_0;
  }
  Coroutine$resetAnimation$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$resetAnimation$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$resetAnimation$lambda.prototype.constructor = Coroutine$resetAnimation$lambda;
  Coroutine$resetAnimation$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = delay(L5, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$closure$element.style.display = 'block', Unit;
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
  function resetAnimation$lambda(closure$element_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$resetAnimation$lambda(closure$element_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function resetAnimation(element) {
    element.style.display = 'none';
    SpicyMorenitta$Companion_getInstance().INSTANCE.launch_3q5nlj$(resetAnimation$lambda(element));
  }
  function Coroutine$leftSidebarForGuildDashboard$lambda$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$content = void 0;
    this.local$body = void 0;
    this.local$unsavedAlert = void 0;
  }
  Coroutine$leftSidebarForGuildDashboard$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$leftSidebarForGuildDashboard$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$leftSidebarForGuildDashboard$lambda$lambda.prototype.constructor = Coroutine$leftSidebarForGuildDashboard$lambda$lambda;
  Coroutine$leftSidebarForGuildDashboard$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$content = select_0(document, '#content');
            this.local$body = select_0(document, 'body');
            this.local$unsavedAlert = select_0(document, '#not-saved-alert');
            if (hasClass(this.local$unsavedAlert, 'warning')) {
              return;
            }
             else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            addClass(this.local$unsavedAlert, ['warning']);
            addClass(this.local$content, ['shake']);
            this.local$body.style.overflow = 'hidden';
            this.state_0 = 3;
            this.result_0 = delay(L750, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            removeClass(this.local$unsavedAlert, ['warning']);
            removeClass(this.local$content, ['shake']);
            return this.local$body.style.overflow = '', Unit;
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
  function leftSidebarForGuildDashboard$lambda$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$leftSidebarForGuildDashboard$lambda$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function leftSidebarForGuildDashboard$lambda(it) {
    if (GuildDashboard_getInstance().isModified) {
      SpicyMorenitta$Companion_getInstance().INSTANCE.launch_3q5nlj$(leftSidebarForGuildDashboard$lambda$lambda);
    }
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda_0($receiver) {
    $receiver.width = '128';
    $receiver.height = '128';
    set_style($receiver, 'border-radius: 100%;');
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda_1($receiver) {
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda$lambda_0($receiver) {
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda_2(closure$function) {
    return function ($receiver) {
      i_0($receiver, 'fas fa-cog', leftSidebarForGuildDashboard$lambda$lambda_0);
      $receiver.unaryPlus_pdl1vz$(' Configura\xE7\xF5es gerais');
      set_onClickFunction($receiver, closure$function);
      return Unit;
    };
  }
  function leftSidebarForGuildDashboard$lambda$lambda_1($receiver) {
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda_3(closure$function) {
    return function ($receiver) {
      i_0($receiver, 'fas fa-user-shield', leftSidebarForGuildDashboard$lambda$lambda_1);
      $receiver.unaryPlus_pdl1vz$(' Modera\xE7\xE3o');
      set_onClickFunction($receiver, closure$function);
      return Unit;
    };
  }
  function leftSidebarForGuildDashboard$lambda$lambda_2($receiver) {
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda_4(closure$function) {
    return function ($receiver) {
      i_0($receiver, 'fas fa-terminal', leftSidebarForGuildDashboard$lambda$lambda_2);
      $receiver.unaryPlus_pdl1vz$(' Comandos');
      set_onClickFunction($receiver, closure$function);
      return Unit;
    };
  }
  function leftSidebarForGuildDashboard$lambda$lambda_3($receiver) {
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda_5(closure$function) {
    return function ($receiver) {
      i_0($receiver, 'fas fa-address-card', leftSidebarForGuildDashboard$lambda$lambda_3);
      $receiver.unaryPlus_pdl1vz$(' Permiss\xF5es');
      set_onClickFunction($receiver, closure$function);
      return Unit;
    };
  }
  function leftSidebarForGuildDashboard$lambda_6($receiver) {
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda_7($receiver) {
    $receiver.unaryPlus_pdl1vz$('Notifica\xE7\xF5es');
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda$lambda_4($receiver) {
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda_8($receiver) {
    i_0($receiver, 'fas fa-sign-in-alt', leftSidebarForGuildDashboard$lambda$lambda_4);
    $receiver.unaryPlus_pdl1vz$(' Mensagens de Entrada/Sa\xEDda');
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda$lambda_5($receiver) {
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda_9($receiver) {
    i_0($receiver, 'fas fa-eye', leftSidebarForGuildDashboard$lambda$lambda_5);
    $receiver.unaryPlus_pdl1vz$(' Event Log');
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda_10($receiver) {
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda_11($receiver) {
    $receiver.unaryPlus_pdl1vz$('Miscel\xE2nea');
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda$lambda_6($receiver) {
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda_12($receiver) {
    i_0($receiver, 'fas fa-briefcase', leftSidebarForGuildDashboard$lambda$lambda_6);
    $receiver.unaryPlus_pdl1vz$(' Autorole');
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda$lambda_7($receiver) {
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda_13($receiver) {
    i_0($receiver, 'fas fa-ban', leftSidebarForGuildDashboard$lambda$lambda_7);
    $receiver.unaryPlus_pdl1vz$(' Bloqueador de Convites');
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda$lambda_8($receiver) {
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda_14($receiver) {
    i_0($receiver, 'fas fa-music', leftSidebarForGuildDashboard$lambda$lambda_8);
    $receiver.unaryPlus_pdl1vz$(' DJ Loritta');
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda$lambda_9($receiver) {
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda_15($receiver) {
    i_0($receiver, 'fas fa-star', leftSidebarForGuildDashboard$lambda$lambda_9);
    $receiver.unaryPlus_pdl1vz$(' Starboard');
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda$lambda_10($receiver) {
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda_16($receiver) {
    i_0($receiver, 'fas fa-shuffle', leftSidebarForGuildDashboard$lambda$lambda_10);
    $receiver.unaryPlus_pdl1vz$(' Miscel\xE2nea');
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda_17($receiver) {
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda_18($receiver) {
    $receiver.unaryPlus_pdl1vz$('Premium');
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda$lambda_11($receiver) {
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda_19($receiver) {
    i_0($receiver, 'fas fa-gift', leftSidebarForGuildDashboard$lambda$lambda_11);
    $receiver.unaryPlus_pdl1vz$(' Premium Keys');
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda$lambda_12($receiver) {
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda_20($receiver) {
    i_0($receiver, 'fas fa-certificate', leftSidebarForGuildDashboard$lambda$lambda_12);
    $receiver.unaryPlus_pdl1vz$(' Emblema Personalizado');
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda$lambda_13($receiver) {
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda_21($receiver) {
    i_0($receiver, 'fas fa-times', leftSidebarForGuildDashboard$lambda$lambda_13);
    $receiver.unaryPlus_pdl1vz$(' Multiplicador de Sonhos');
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda_22($receiver) {
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda_23($receiver) {
    $receiver.unaryPlus_pdl1vz$('Precisando de Ajuda?');
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda$lambda_14($receiver) {
    var $receiver_0 = $receiver.attributes;
    var key = 'data-enable-link-preload';
    $receiver_0.put_xwzc9p$(key, 'true');
    i_0($receiver, 'fas fa-question-circle', leftSidebarForGuildDashboard$lambda$lambda$lambda);
    $receiver.unaryPlus_pdl1vz$(' Suporte');
    return Unit;
  }
  function leftSidebarForGuildDashboard$lambda_24($receiver) {
    div($receiver, 'entry', leftSidebarForGuildDashboard$lambda$lambda_14);
    return Unit;
  }
  function leftSidebarForGuildDashboard($receiver) {
    var function_0 = leftSidebarForGuildDashboard$lambda;
    img($receiver, void 0, 'https://cdn.discordapp.com/icons/297732013006389252/75327a9cf9ad3a2fc76945d06dc897aa.png', void 0, leftSidebarForGuildDashboard$lambda_0);
    hr($receiver, void 0, leftSidebarForGuildDashboard$lambda_1);
    div($receiver, 'entry', leftSidebarForGuildDashboard$lambda_2(function_0));
    div($receiver, 'entry', leftSidebarForGuildDashboard$lambda_3(function_0));
    div($receiver, 'entry', leftSidebarForGuildDashboard$lambda_4(function_0));
    div($receiver, 'entry', leftSidebarForGuildDashboard$lambda_5(function_0));
    hr($receiver, void 0, leftSidebarForGuildDashboard$lambda_6);
    div($receiver, 'section-title', leftSidebarForGuildDashboard$lambda_7);
    div($receiver, 'entry', leftSidebarForGuildDashboard$lambda_8);
    div($receiver, 'entry', leftSidebarForGuildDashboard$lambda_9);
    hr($receiver, void 0, leftSidebarForGuildDashboard$lambda_10);
    div($receiver, 'section-title', leftSidebarForGuildDashboard$lambda_11);
    div($receiver, 'entry', leftSidebarForGuildDashboard$lambda_12);
    div($receiver, 'entry', leftSidebarForGuildDashboard$lambda_13);
    div($receiver, 'entry', leftSidebarForGuildDashboard$lambda_14);
    div($receiver, 'entry', leftSidebarForGuildDashboard$lambda_15);
    div($receiver, 'entry', leftSidebarForGuildDashboard$lambda_16);
    hr($receiver, void 0, leftSidebarForGuildDashboard$lambda_17);
    div($receiver, 'section-title', leftSidebarForGuildDashboard$lambda_18);
    div($receiver, 'entry', leftSidebarForGuildDashboard$lambda_19);
    div($receiver, 'entry', leftSidebarForGuildDashboard$lambda_20);
    div($receiver, 'entry', leftSidebarForGuildDashboard$lambda_21);
    hr($receiver, void 0, leftSidebarForGuildDashboard$lambda_22);
    div($receiver, 'section-title', leftSidebarForGuildDashboard$lambda_23);
    a($receiver, WebsiteUtils_getInstance().getUrlWithLocale() + '/support', void 0, void 0, leftSidebarForGuildDashboard$lambda_24);
  }
  function IFrameGeneralDashboardRoute(m) {
    UpdateNavbarSizePostRender.call(this, '/guild/{guildId}/dashboard');
    this.m = m;
  }
  IFrameGeneralDashboardRoute.prototype.onRender_hjvrm5$ = function (call) {
    var iframe = select_0(document, 'iframe');
    var newDocument = ensureNotNull(iframe.contentDocument);
  };
  IFrameGeneralDashboardRoute.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IFrameGeneralDashboardRoute',
    interfaces: [UpdateNavbarSizePostRender]
  };
  function HomeRoute() {
    BaseRoute.call(this, '/');
  }
  function Coroutine$HomeRoute$onRender$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$HomeRoute$onRender$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HomeRoute$onRender$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HomeRoute$onRender$lambda.prototype.constructor = Coroutine$HomeRoute$onRender$lambda;
  Coroutine$HomeRoute$onRender$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var part0 = select_0(document, '.right-side-text .introduction .my-name-is');
            addClass(part0, ['animated', 'fade-in-right', 'one-second']);
            removeClass(part0, ['invisible']);
            this.state_0 = 2;
            this.result_0 = delay(L900, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var part1 = select_0(document, '.right-side-text .introduction .loritta');
            addClass(part1, ['animated', 'fade-in-right', 'one-second']);
            removeClass(part1, ['invisible']);
            this.state_0 = 3;
            this.result_0 = delay(L900, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var part2 = select_0(document, '.right-side-text .introduction .tagline');
            addClass(part2, ['animated', 'fade-in-right', 'one-second']);
            return removeClass(part2, ['invisible']);
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
  function HomeRoute$onRender$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$HomeRoute$onRender$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$HomeRoute$onRender$lambda_0(closure$blinkingPose_0, closure$blushingPose_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$blinkingPose = closure$blinkingPose_0;
    this.local$closure$blushingPose = closure$blushingPose_0;
  }
  Coroutine$HomeRoute$onRender$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HomeRoute$onRender$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HomeRoute$onRender$lambda_0.prototype.constructor = Coroutine$HomeRoute$onRender$lambda_0;
  Coroutine$HomeRoute$onRender$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$closure$blinkingPose.style.visibility = '';
            this.state_0 = 3;
            this.result_0 = delay(L7000, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$closure$blushingPose.style.visibility = '';
            this.local$closure$blinkingPose.style.visibility = 'visible';
            this.state_0 = 4;
            this.result_0 = delay(L140, this);
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
  function HomeRoute$onRender$lambda_0(closure$blinkingPose_0, closure$blushingPose_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$HomeRoute$onRender$lambda_0(closure$blinkingPose_0, closure$blushingPose_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function HomeRoute$onRender$lambda_1(closure$selfie, closure$blushingPose) {
    return function (it) {
      var offset_0 = offset(closure$selfie);
      var x = (it.pageX - offset_0.left) / closure$blushingPose.offsetWidth;
      var y = (it.pageY - offset_0.top) / closure$selfie.offsetHeight;
      if (rangeTo(0.1671535346819007, 0.3108727776792628).contains_mef7kx$(x) && rangeTo(0.2758491868558137, 0.36264792560825687).contains_mef7kx$(y)) {
        closure$blushingPose.style.visibility = 'visible';
      }
      return Unit;
    };
  }
  HomeRoute.prototype.onRender_hjvrm5$ = function (call) {
    BaseRoute.prototype.onRender_hjvrm5$.call(this, call);
    SpicyMorenitta$Companion_getInstance().INSTANCE.launch_3q5nlj$(HomeRoute$onRender$lambda);
    var blinkingPose = select_0(document, '.blinking-pose');
    var blushingPose = select_0(document, '.blushing-pose');
    SpicyMorenitta$Companion_getInstance().INSTANCE.launch_3q5nlj$(HomeRoute$onRender$lambda_0(blinkingPose, blushingPose));
    var selfie = select_0(document, '#loritta-selfie');
    onClick(select_0(document, '#loritta-selfie'), HomeRoute$onRender$lambda_1(selfie, blushingPose));
  };
  HomeRoute.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HomeRoute',
    interfaces: [BaseRoute]
  };
  function leftSidebarForProfileDashboard$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Servidores');
    return Unit;
  }
  function leftSidebarForProfileDashboard$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Coisa #2');
    return Unit;
  }
  function leftSidebarForProfileDashboard$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('Coisa #3');
    return Unit;
  }
  function leftSidebarForProfileDashboard($receiver) {
    div($receiver, 'entry', leftSidebarForProfileDashboard$lambda);
    div($receiver, 'entry', leftSidebarForProfileDashboard$lambda_0);
    div($receiver, 'entry', leftSidebarForProfileDashboard$lambda_1);
  }
  function UpdateNavbarSizePostRender(path) {
    BaseRoute.call(this, path);
  }
  UpdateNavbarSizePostRender.prototype.onRender_hjvrm5$ = function (call) {
    BaseRoute.prototype.onRender_hjvrm5$.call(this, call);
    this.fixDummyNavbarHeight_hjvrm5$(call);
  };
  UpdateNavbarSizePostRender.prototype.fixDummyNavbarHeight_hjvrm5$ = function (call) {
    var tmp$, tmp$_0;
    var navbarHeight = select_0(document, '#navigation-bar').clientHeight.toString();
    this.debug_yhszz7$(['Navbar height is ' + navbarHeight + ', fixing dummy navbar']);
    select_0(document, '#dummy-navbar').style.height = navbarHeight + 'px';
    (tmp$_0 = (tmp$ = select_0(document, '#sidebar-wrapper')) != null ? tmp$.style : null) != null ? (tmp$_0.height = 'calc(100% - ' + navbarHeight + 'px);') : null;
  };
  UpdateNavbarSizePostRender.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UpdateNavbarSizePostRender',
    interfaces: [BaseRoute]
  };
  function get$lambda_2($receiver) {
    return Unit;
  }
  function get$lambda_3($receiver) {
    return Unit;
  }
  var switchPageStart;
  var pageCache;
  var ignoreCacheRequests;
  var navbarIsSetup;
  function http$lambda($receiver) {
    $receiver.expectSuccess = false;
    return Unit;
  }
  var http;
  var locale;
  function get_locale() {
    if (locale == null)
      return throwUPAE('locale');
    return locale;
  }
  function set_locale(locale_0) {
    locale = locale_0;
  }
  function SpicyMorenitta() {
    SpicyMorenitta$Companion_getInstance();
    this.pageLoadLock = Mutex();
    this.wsCommands = mutableListOf([new PingCommand()]);
    this.routes = mutableListOf([new HomeRoute(), new FanArtsRoute(this), new DashboardRoute(this), new GeneralDashboardRoute(this), new UpdateNavbarSizePostRender('/support'), new UpdateNavbarSizePostRender('/blog'), new UpdateNavbarSizePostRender('/extended')]);
    this.validWebsiteLocaleIds = mutableListOf(['br', 'us', 'es']);
    this.websiteLocaleIdToLocaleId = mutableMapOf([to('br', 'default'), to('us', 'us-us'), to('es', 'es-es')]);
    this.view = null;
    this.socket_uaj0ez$_0 = this.socket_uaj0ez$_0;
    this.userIdentification = null;
    this.pageSpecificTasks = ArrayList_init();
  }
  function SpicyMorenitta$Companion() {
    SpicyMorenitta$Companion_instance = this;
    this.KEEP_ALIVE_DELAY = L10000;
    this.CACHE_ON_HOVER_DELAY = L125;
    this.INSTANCE_jmikan$_0 = this.INSTANCE_jmikan$_0;
  }
  Object.defineProperty(SpicyMorenitta$Companion.prototype, 'INSTANCE', {
    get: function () {
      if (this.INSTANCE_jmikan$_0 == null)
        return throwUPAE('INSTANCE');
      return this.INSTANCE_jmikan$_0;
    },
    set: function (INSTANCE) {
      this.INSTANCE_jmikan$_0 = INSTANCE;
    }
  });
  SpicyMorenitta$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SpicyMorenitta$Companion_instance = null;
  function SpicyMorenitta$Companion_getInstance() {
    if (SpicyMorenitta$Companion_instance === null) {
      new SpicyMorenitta$Companion();
    }
    return SpicyMorenitta$Companion_instance;
  }
  Object.defineProperty(SpicyMorenitta.prototype, 'socket', {
    get: function () {
      if (this.socket_uaj0ez$_0 == null)
        return throwUPAE('socket');
      return this.socket_uaj0ez$_0;
    },
    set: function (socket) {
      this.socket_uaj0ez$_0 = socket;
    }
  });
  Object.defineProperty(SpicyMorenitta.prototype, 'localeId', {
    get: function () {
      var tmp$;
      return (tmp$ = this.websiteLocaleIdToLocaleId.get_11rb$(this.websiteLocaleId)) != null ? tmp$ : 'default';
    }
  });
  Object.defineProperty(SpicyMorenitta.prototype, 'websiteLocaleId', {
    get: function () {
      var localeIdFromPath = WebsiteUtils_getInstance().getWebsiteLocaleIdViaPath();
      return this.validWebsiteLocaleIds.contains_11rb$(localeIdFromPath) ? localeIdFromPath : 'us';
    }
  });
  function SpicyMorenitta$start$lambda$lambda$ObjectLiteral() {
  }
  SpicyMorenitta$start$lambda$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function Coroutine$SpicyMorenitta$start$lambda$lambda(this$SpicyMorenitta_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$SpicyMorenitta = this$SpicyMorenitta_0;
  }
  Coroutine$SpicyMorenitta$start$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SpicyMorenitta$start$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SpicyMorenitta$start$lambda$lambda.prototype.constructor = Coroutine$SpicyMorenitta$start$lambda$lambda;
  Coroutine$SpicyMorenitta$start$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var obj = new SpicyMorenitta$start$lambda$lambda$ObjectLiteral();
            obj['type'] = 'ping';
            this.local$this$SpicyMorenitta.socket.send(JSON.stringify(obj));
            this.state_0 = 3;
            this.result_0 = delay(SpicyMorenitta$Companion_getInstance().KEEP_ALIVE_DELAY, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  function SpicyMorenitta$start$lambda$lambda(this$SpicyMorenitta_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$SpicyMorenitta$start$lambda$lambda(this$SpicyMorenitta_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function SpicyMorenitta$start$lambda(this$SpicyMorenitta) {
    return function (it) {
      this$SpicyMorenitta.success_yhszz7$(['Socket opened! Setting up keep alive (10000ms)']);
      return launch(coroutines.GlobalScope, void 0, void 0, SpicyMorenitta$start$lambda$lambda(this$SpicyMorenitta));
    };
  }
  function SpicyMorenitta$start$lambda_0(this$SpicyMorenitta) {
    return function (it) {
      this$SpicyMorenitta.warn_yhszz7$(['Socket closed!']);
      return Unit;
    };
  }
  function SpicyMorenitta$start$lambda_1(this$SpicyMorenitta) {
    return function (it) {
      this$SpicyMorenitta.error_yhszz7$(['Socket error! Oh no... :(']);
      return Unit;
    };
  }
  function SpicyMorenitta$start$lambda_2(this$SpicyMorenitta) {
    return function (it) {
      var data = it.data;
      var d = data.toString();
      if (startsWith(d, '{')) {
        var raw = JSON.parse(d);
        var type = toString(raw['type']);
        var $receiver = this$SpicyMorenitta.wsCommands;
        var firstOrNull$result;
        firstOrNull$break: do {
          var tmp$;
          tmp$ = $receiver.iterator();
          while (tmp$.hasNext()) {
            var element = tmp$.next();
            if (equals(element.name, type)) {
              firstOrNull$result = element;
              break firstOrNull$break;
            }
          }
          firstOrNull$result = null;
        }
         while (false);
        var command = firstOrNull$result;
        if (command == null) {
          this$SpicyMorenitta.error_yhszz7$(['Received payload ' + raw + ' (type: ' + type + ") but I don't know how to handle it!"]);
        }
         else {
          command.process_z9o90e$(this$SpicyMorenitta.socket, raw);
        }
      }
      return Unit;
    };
  }
  function Coroutine$SpicyMorenitta$start$lambda$lambda$lambda(this$SpicyMorenitta_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$SpicyMorenitta = this$SpicyMorenitta_0;
  }
  Coroutine$SpicyMorenitta$start$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SpicyMorenitta$start$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SpicyMorenitta$start$lambda$lambda$lambda.prototype.constructor = Coroutine$SpicyMorenitta$start$lambda$lambda$lambda;
  Coroutine$SpicyMorenitta$start$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$SpicyMorenitta.loadLocale(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function SpicyMorenitta$start$lambda$lambda$lambda(this$SpicyMorenitta_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$SpicyMorenitta$start$lambda$lambda$lambda(this$SpicyMorenitta_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$SpicyMorenitta$start$lambda$lambda$lambda_0(this$SpicyMorenitta_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$SpicyMorenitta = this$SpicyMorenitta_0;
  }
  Coroutine$SpicyMorenitta$start$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SpicyMorenitta$start$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SpicyMorenitta$start$lambda$lambda$lambda_0.prototype.constructor = Coroutine$SpicyMorenitta$start$lambda$lambda$lambda_0;
  Coroutine$SpicyMorenitta$start$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$SpicyMorenitta.loadLoggedInUser(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function SpicyMorenitta$start$lambda$lambda$lambda_0(this$SpicyMorenitta_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$SpicyMorenitta$start$lambda$lambda$lambda_0(this$SpicyMorenitta_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$SpicyMorenitta$start$lambda$lambda_0(this$SpicyMorenitta_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$SpicyMorenitta = this$SpicyMorenitta_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$SpicyMorenitta$start$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SpicyMorenitta$start$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SpicyMorenitta$start$lambda$lambda_0.prototype.constructor = Coroutine$SpicyMorenitta$start$lambda$lambda_0;
  Coroutine$SpicyMorenitta$start$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var deferred = listOf([async(this.local$$receiver, void 0, void 0, SpicyMorenitta$start$lambda$lambda$lambda(this.local$this$SpicyMorenitta)), async(this.local$$receiver, void 0, void 0, SpicyMorenitta$start$lambda$lambda$lambda_0(this.local$this$SpicyMorenitta))]);
            this.state_0 = 2;
            this.result_0 = joinAll(deferred, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$this$SpicyMorenitta.debug_yhszz7$(['Locale test: ' + get_locale().get_25kzsl$('commands.images.drawnword.description', [])]);
            this.local$this$SpicyMorenitta.debug_yhszz7$(['Locale test: ' + get_locale().get_25kzsl$('commands.fun.ship.bribeLove', [':3'])]);
            return this.local$this$SpicyMorenitta.onPageChange_co5kb4$(this.local$this$SpicyMorenitta.socket, window.location.pathname, null), Unit;
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
  function SpicyMorenitta$start$lambda$lambda_0(this$SpicyMorenitta_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$SpicyMorenitta$start$lambda$lambda_0(this$SpicyMorenitta_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function SpicyMorenitta$start$lambda_3(this$SpicyMorenitta) {
    return function (it) {
      this$SpicyMorenitta.debug_yhszz7$(['DOM is ready!']);
      this$SpicyMorenitta.debug_yhszz7$([window.location.pathname + ' - ' + WebsiteUtils_getInstance().getPathWithoutLocale()]);
      AdvertisementUtils_getInstance().checkIfUserIsBlockingAds();
      this$SpicyMorenitta.launch_3q5nlj$(SpicyMorenitta$start$lambda$lambda_0(this$SpicyMorenitta));
      return Unit;
    };
  }
  SpicyMorenitta.prototype.start = function () {
    var tmp$, tmp$_0;
    SpicyMorenitta$Companion_getInstance().INSTANCE = this;
    this.info_yhszz7$(['SpicyMorenitta :3']);
    this.info_yhszz7$(['Howdy, my name is Loritta!']);
    this.info_yhszz7$(['I want to make the world a better place... making people happier and helping other people... changing their lives...']);
    this.info_yhszz7$(['I hope I succeed...']);
    console.log('%c       ', 'font-size: 64px; background: url(https://loritta.website/assets/img/fanarts/l8.png) no-repeat; background-size: 64px 64px;');
    if (equals(window.location.pathname, '/auth')) {
      AuthUtils_getInstance().handlePopup();
      return;
    }
    if (true) {
      TrunfoGame_getInstance().start();
      return;
    }
    var darkThemeCookie = CookiesUtils_getInstance().readCookie_61zpoe$('darkTheme');
    if ((darkThemeCookie != null ? toBoolean(darkThemeCookie) : null) === true)
      WebsiteThemeUtils_getInstance().changeWebsiteThemeTo_4heyup$(WebsiteThemeUtils$WebsiteTheme$DARK_THEME_getInstance(), true);
    if (false) {
      var userThemeCookie = CookiesUtils_getInstance().readCookie_61zpoe$('userTheme');
      if (userThemeCookie != null) {
        tmp$_0 = WebsiteThemeUtils_getInstance();
        try {
          tmp$ = WebsiteThemeUtils$WebsiteTheme$valueOf(userThemeCookie);
        }
         catch (e) {
          if (Kotlin.isType(e, IllegalArgumentException)) {
            tmp$ = WebsiteThemeUtils$WebsiteTheme$DEFAULT_getInstance();
          }
           else
            throw e;
        }
        tmp$_0.changeWebsiteThemeTo_4heyup$(tmp$, true);
      }
    }
    this.debug_yhszz7$(['Is using http? ' + equals(window.location.protocol, 'http:')]);
    var url = equals(window.location.protocol, 'http:') ? 'ws://' + last(split(window.location.origin, ['//'])) + '/ws' : 'wss://' + last(split(window.location.origin, ['//'])) + '/ws';
    this.debug_yhszz7$(['Using protocol ' + window.location.protocol + ' - WebSocket URL is ' + url]);
    this.socket = new WebSocket(url);
    this.socket.onopen = SpicyMorenitta$start$lambda(this);
    this.socket.onclose = SpicyMorenitta$start$lambda_0(this);
    this.socket.onerror = SpicyMorenitta$start$lambda_1(this);
    this.socket.onmessage = SpicyMorenitta$start$lambda_2(this);
    onDOMReady(document, SpicyMorenitta$start$lambda_3(this));
  };
  function Coroutine$loadLocale($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$loadLocale.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loadLocale.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadLocale.prototype.constructor = Coroutine$loadLocale;
  Coroutine$loadLocale.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_1 = http;
            var urlString = window.location.origin + '/api/v1/loritta/locale/' + this.$this.localeId;
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_2 = new HttpRequestBuilder_init();
            url_0($receiver_2, 'http', host_0, 0, '/');
            $receiver_2.method = HttpMethod.Companion.Get;
            $receiver_2.body = body_0;
            takeFrom($receiver_2.url, urlString);
            get$lambda_2($receiver_2);
            this.state_0 = 2;
            this.result_0 = call($receiver_1, $receiver_2, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(String_0), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = typeof (tmp$_0 = this.result_0) === 'string' ? tmp$_0 : throwCCE();
            this.result_0;
            var payload = this.result_0;
            var $receiver = JSON_0.Companion.nonstrict;
            set_locale($receiver.parse_awif5v$(getOrDefault($receiver.context, getKClass(BaseLocale)), payload));
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
  SpicyMorenitta.prototype.loadLocale = function (continuation_0, suspended) {
    var instance = new Coroutine$loadLocale(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$loadLoggedInUser($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$httpResponse = void 0;
  }
  Coroutine$loadLoggedInUser.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loadLoggedInUser.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadLoggedInUser.prototype.constructor = Coroutine$loadLoggedInUser;
  Coroutine$loadLoggedInUser.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            var $receiver_1 = http;
            var urlString = window.location.origin + '/api/v1/users/@me';
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_2 = new HttpRequestBuilder_init();
            url_0($receiver_2, 'http', host_0, 0, '/');
            $receiver_2.method = HttpMethod.Companion.Get;
            $receiver_2.body = body_0;
            takeFrom($receiver_2.url, urlString);
            get$lambda_2($receiver_2);
            this.state_0 = 2;
            this.result_0 = call($receiver_1, $receiver_2, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(HttpResponse), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, HttpResponse) ? tmp$_0 : throwCCE();
            this.result_0;
            this.local$httpResponse = this.result_0;
            this.state_0 = 4;
            this.result_0 = readText(this.local$httpResponse, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var payload = this.result_0;
            var jsonPayload = JSON.parse(payload);
            if (!((tmp$ = this.local$httpResponse.status) != null ? tmp$.equals(HttpStatusCode.Companion.OK) : null)) {
              this.$this.debug_yhszz7$(['Get User Request failed - ' + toString(jsonPayload['code'])]);
            }
             else {
              var $receiver = JSON_0.Companion.nonstrict;
              var userIdentification = $receiver.parse_awif5v$(getOrDefault($receiver.context, getKClass(UserIdentification)), payload);
              this.$this.debug_yhszz7$(['Get User Request success! - ' + userIdentification.username + ' (' + userIdentification.id + ')']);
              SpicyMorenitta$Companion_getInstance().INSTANCE.updateLoggedInUser_brvwnn$(userIdentification);
            }

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
  SpicyMorenitta.prototype.loadLoggedInUser = function (continuation_0, suspended) {
    var instance = new Coroutine$loadLoggedInUser(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function SpicyMorenitta$updateLoggedInUser$lambda$lambda($receiver) {
    set_style($receiver, '    font-size: 0px;\n    line-height: 0px;\n    width: 40px;\n    height: 40px;\n    position: absolute;\n    top: 3px;\n    border-radius: 100%;');
    return Unit;
  }
  function SpicyMorenitta$updateLoggedInUser$lambda$lambda_0($receiver) {
    set_style($receiver, '    font-size: 0px;\n    line-height: 0px;\n    width: 40px;\n    visibility: hidden;\n    height: 0px;\n    display: inline-block;');
    return Unit;
  }
  function SpicyMorenitta$updateLoggedInUser$lambda$lambda_1(closure$newUser) {
    return function ($receiver) {
      set_style($receiver, 'padding-left: 4px;');
      $receiver.unaryPlus_pdl1vz$(closure$newUser.username);
      return Unit;
    };
  }
  function SpicyMorenitta$updateLoggedInUser$lambda(closure$newUser) {
    return function ($receiver) {
      img_0($receiver, void 0, 'https://cdn.discordapp.com/avatars/' + closure$newUser.id + '/' + toString(closure$newUser.avatar) + '.png?size=256', void 0, SpicyMorenitta$updateLoggedInUser$lambda$lambda);
      div_0($receiver, void 0, SpicyMorenitta$updateLoggedInUser$lambda$lambda_0);
      span_0($receiver, void 0, SpicyMorenitta$updateLoggedInUser$lambda$lambda_1(closure$newUser));
      return Unit;
    };
  }
  SpicyMorenitta.prototype.updateLoggedInUser_brvwnn$ = function (newUser) {
    var tmp$;
    this.userIdentification = newUser;
    this.debug_yhszz7$(['New user is ' + newUser]);
    var loginButton = select_0(document, '#login-button');
    var cloned = loginButton.cloneNode(true);
    Kotlin.isType(tmp$ = cloned, Element) ? tmp$ : throwCCE();
    loginButton.replaceWith(cloned);
    clear(cloned);
    cloned.setAttribute('href', '/br/dashboard');
    this.setUpPageSwitcher_t9mn69$(cloned, '/br/dashboard');
    append(cloned, SpicyMorenitta$updateLoggedInUser$lambda(newUser));
  };
  SpicyMorenitta.prototype.onPageChange_co5kb4$ = function (socket, path, content) {
    if (!navbarIsSetup) {
      this.addNavbarOptions_vkwai2$(socket);
      navbarIsSetup = true;
    }
    this.debug_yhszz7$(['Current path is ' + path]);
    this.debug_yhszz7$(['Path without locale is ' + WebsiteUtils_getInstance().getPathWithoutLocale()]);
    var $receiver = this.routes;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.matches_61zpoe$(WebsiteUtils_getInstance().getPathWithoutLocale())) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    var route = firstOrNull$result;
    if (route == null) {
      this.warn_yhszz7$(['No route for ' + WebsiteUtils_getInstance().getPathWithoutLocale() + ' found! Bug?']);
      this.hideLoadingScreen();
      return;
    }
    var params = route.getPathParameters_61zpoe$(WebsiteUtils_getInstance().getPathWithoutLocale());
    this.debug_yhszz7$(['Parameters: ' + params.entries]);
    var call = new ApplicationCall(params, content);
    if (!route.keepLoadingScreen)
      this.hideLoadingScreen();
    route.onRender_hjvrm5$(call);
  };
  function Coroutine$SpicyMorenitta$setUpPageSwitcher$lambda$lambda(this$SpicyMorenitta_0, closure$path_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$SpicyMorenitta = this$SpicyMorenitta_0;
    this.local$closure$path = closure$path_0;
  }
  Coroutine$SpicyMorenitta$setUpPageSwitcher$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SpicyMorenitta$setUpPageSwitcher$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SpicyMorenitta$setUpPageSwitcher$lambda$lambda.prototype.constructor = Coroutine$SpicyMorenitta$setUpPageSwitcher$lambda$lambda;
  Coroutine$SpicyMorenitta$setUpPageSwitcher$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$SpicyMorenitta.sendSwitchPageRequest_yw3f44$(this.local$this$SpicyMorenitta.socket, this.local$closure$path, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function SpicyMorenitta$setUpPageSwitcher$lambda$lambda(this$SpicyMorenitta_0, closure$path_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$SpicyMorenitta$setUpPageSwitcher$lambda$lambda(this$SpicyMorenitta_0, closure$path_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function SpicyMorenitta$setUpPageSwitcher$lambda(this$SpicyMorenitta, closure$path) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      if ((typeof (tmp$ = it.ctrlKey) === 'boolean' ? tmp$ : throwCCE()) || (typeof (tmp$_0 = it.metaKey) === 'boolean' ? tmp$_0 : throwCCE()) || (typeof (tmp$_1 = it.shiftKey) === 'boolean' ? tmp$_1 : throwCCE()))
        return;
      it.preventDefault();
      this$SpicyMorenitta.launch_3q5nlj$(SpicyMorenitta$setUpPageSwitcher$lambda$lambda(this$SpicyMorenitta, closure$path));
      return Unit;
    };
  }
  function Coroutine$SpicyMorenitta$setUpPageSwitcher$lambda$lambda_0(closure$startedAt_0, closure$path_0, this$SpicyMorenitta_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$startedAt = closure$startedAt_0;
    this.local$closure$path = closure$path_0;
    this.local$this$SpicyMorenitta = this$SpicyMorenitta_0;
  }
  Coroutine$SpicyMorenitta$setUpPageSwitcher$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SpicyMorenitta$setUpPageSwitcher$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SpicyMorenitta$setUpPageSwitcher$lambda$lambda_0.prototype.constructor = Coroutine$SpicyMorenitta$setUpPageSwitcher$lambda$lambda_0;
  Coroutine$SpicyMorenitta$setUpPageSwitcher$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = delay(SpicyMorenitta$Companion_getInstance().CACHE_ON_HOVER_DELAY, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var diff = (new Date()).getTime() - this.local$closure$startedAt.v;
            if (diff >= SpicyMorenitta$Companion_getInstance().CACHE_ON_HOVER_DELAY.toNumber()) {
              this.local$this$SpicyMorenitta.debug_yhszz7$(['Pre caching page (path: ' + this.local$closure$path + ')!']);
              this.state_0 = 3;
              this.result_0 = this.local$this$SpicyMorenitta.cachePageRequest_61zpoe$(this.local$closure$path, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 3:
            return Unit;
          case 4:
            return Unit;
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
  function SpicyMorenitta$setUpPageSwitcher$lambda$lambda_0(closure$startedAt_0, closure$path_0, this$SpicyMorenitta_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$SpicyMorenitta$setUpPageSwitcher$lambda$lambda_0(closure$startedAt_0, closure$path_0, this$SpicyMorenitta_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function SpicyMorenitta$setUpPageSwitcher$lambda_0(this$SpicyMorenitta, closure$startedAt, closure$path) {
    return function (it) {
      if (ignoreCacheRequests)
        return;
      it.stopPropagation();
      this$SpicyMorenitta.debug_yhszz7$(['Hovering the button!']);
      closure$startedAt.v = (new Date()).getTime();
      this$SpicyMorenitta.launch_3q5nlj$(SpicyMorenitta$setUpPageSwitcher$lambda$lambda_0(closure$startedAt, closure$path, this$SpicyMorenitta));
      return Unit;
    };
  }
  function SpicyMorenitta$setUpPageSwitcher$lambda_1(closure$startedAt, closure$path, this$SpicyMorenitta) {
    return function (it) {
      it.stopPropagation();
      var diff = (new Date()).getTime() - closure$startedAt.v;
      if (pageCache.containsKey_11rb$(closure$path)) {
        this$SpicyMorenitta.debug_yhszz7$(['Not hovering the button anymore! Hovered for ' + diff + ' & Dropping page cache for ' + closure$path]);
        pageCache.remove_11rb$(closure$path);
      }
      return Unit;
    };
  }
  SpicyMorenitta.prototype.setUpPageSwitcher_t9mn69$ = function (element, path) {
    element.setAttribute('data-preload-activated', 'true');
    onClick(element, SpicyMorenitta$setUpPageSwitcher$lambda(this, path));
    var startedAt = {v: 0.0};
    onMouseEnter(element, SpicyMorenitta$setUpPageSwitcher$lambda_0(this, startedAt, path));
    onMouseLeave(element, SpicyMorenitta$setUpPageSwitcher$lambda_1(startedAt, path, this));
  };
  function SpicyMorenitta$addNavbarOptions$lambda(this$SpicyMorenitta) {
    return function (it) {
      if (isOldWebsite) {
        window.location.href = window.location.origin + '/dashboard';
      }
       else {
        if (this$SpicyMorenitta.userIdentification == null) {
          var popup = window.open(window.location.origin + '/auth', 'popup', 'height=700,width=400');
        }
      }
      return Unit;
    };
  }
  function SpicyMorenitta$addNavbarOptions$lambda_0(it) {
    var body = ensureNotNull(document.body);
    if (hasClass(body, 'dark')) {
      WebsiteThemeUtils_getInstance().changeWebsiteThemeTo_4heyup$(WebsiteThemeUtils$WebsiteTheme$DEFAULT_getInstance(), false);
    }
     else {
      WebsiteThemeUtils_getInstance().changeWebsiteThemeTo_4heyup$(WebsiteThemeUtils$WebsiteTheme$DARK_THEME_getInstance(), false);
    }
    return Unit;
  }
  function SpicyMorenitta$addNavbarOptions$lambda_1(this$SpicyMorenitta, closure$navbar) {
    return function (it) {
      this$SpicyMorenitta.debug_yhszz7$(['Clicked on the hamburger button!']);
      if (hasClass(closure$navbar, 'expanded')) {
        removeClass(closure$navbar, ['expanded']);
        ensureNotNull(document.body).style.overflowY = '';
      }
       else {
        addClass(closure$navbar, ['expanded']);
        ensureNotNull(document.body).style.overflowY = 'hidden';
      }
      return Unit;
    };
  }
  SpicyMorenitta.prototype.addNavbarOptions_vkwai2$ = function (socket) {
    this.debug_yhszz7$(['Adding navbar options!']);
    var navbar = select_0(document, '#navigation-bar');
    var loginButton = select_0(document, '#login-button');
    onClick(loginButton, SpicyMorenitta$addNavbarOptions$lambda(this));
    var themeChangerButton = select_0(document, '#theme-changer-button');
    onClick(themeChangerButton, SpicyMorenitta$addNavbarOptions$lambda_0);
    var hamburgerButton = select_0(document, '#hamburger-menu-button');
    onClick(hamburgerButton, SpicyMorenitta$addNavbarOptions$lambda_1(this, navbar));
    this.setUpLinkPreloader();
    this.setUpLazyLoad();
    this.debug_yhszz7$(['Redirect buttons added!']);
  };
  SpicyMorenitta.prototype.setUpLinkPreloader = function () {
    var tmp$;
    tmp$ = asList(document.querySelectorAll('a[data-enable-link-preload="true"]:not([data-preload-activated="true"])')).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      this.debug_yhszz7$(['Setting up page switcher for ' + element]);
      this.setUpPageSwitcher_t9mn69$(Kotlin.isType(tmp$_0 = element, Element) ? tmp$_0 : throwCCE(), ensureNotNull(element.getAttribute('href')));
    }
  };
  function SpicyMorenitta$setUpLazyLoad$lambda$lambda(closure$el, this$SpicyMorenitta) {
    return function () {
      var diffBetweenElementAndCurrentYPosition = closure$el.getBoundingClientRect().top - window.innerHeight;
      if (0 >= diffBetweenElementAndCurrentYPosition) {
        if (!closure$el.hasAttribute('lazy-load-url'))
          return;
        this$SpicyMorenitta.debug_yhszz7$(['iFrame is going to be displayed on screen! Loading...']);
        var lazyLoadUrl = toString(closure$el.getAttribute('lazy-load-url'));
        closure$el.removeAttribute('lazy-load-url');
        closure$el.setAttribute('src', lazyLoadUrl);
      }
      return Unit;
    };
  }
  function SpicyMorenitta$setUpLazyLoad$lambda$lambda_0(closure$callback) {
    return function (it) {
      closure$callback();
      return Unit;
    };
  }
  function SpicyMorenitta$setUpLazyLoad$lambda$lambda_1(closure$callback) {
    return function (it) {
      closure$callback();
      return Unit;
    };
  }
  function SpicyMorenitta$setUpLazyLoad$lambda$lambda_2(closure$el, this$SpicyMorenitta) {
    return function () {
      var diffBetweenElementAndCurrentYPosition = closure$el.getBoundingClientRect().top - window.innerHeight;
      if (0 >= diffBetweenElementAndCurrentYPosition) {
        if (!closure$el.hasAttribute('lazy-load-url'))
          return;
        this$SpicyMorenitta.debug_yhszz7$(['Image is going to be displayed on screen! Loading...']);
        var lazyLoadUrl = toString(closure$el.getAttribute('lazy-load-url'));
        closure$el.removeAttribute('lazy-load-url');
        closure$el.setAttribute('src', lazyLoadUrl);
      }
      return Unit;
    };
  }
  function SpicyMorenitta$setUpLazyLoad$lambda$lambda_3(closure$callback) {
    return function (it) {
      closure$callback();
      return Unit;
    };
  }
  function SpicyMorenitta$setUpLazyLoad$lambda$lambda_4(closure$callback) {
    return function (it) {
      closure$callback();
      return Unit;
    };
  }
  SpicyMorenitta.prototype.setUpLazyLoad = function () {
    var tmp$;
    tmp$ = asList(document.querySelectorAll('iframe[lazy-load-url]:not([lazy-load-activated="true"])')).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      this.debug_yhszz7$(['Setting up iFrame lazy load for ' + element]);
      var el = Kotlin.isType(tmp$_0 = element, Element) ? tmp$_0 : throwCCE();
      el.setAttribute('lazy-load-activated', 'true');
      var callback = SpicyMorenitta$setUpLazyLoad$lambda$lambda(el, this);
      var applyScrollOn = el;
      do {
        applyScrollOn = applyScrollOn != null ? applyScrollOn.parentElement : null;
      }
       while (applyScrollOn != null && !applyScrollOn.hasAttribute('create-scroll-lazy-load-here'));
      if (applyScrollOn != null) {
        onScroll_0(applyScrollOn, SpicyMorenitta$setUpLazyLoad$lambda$lambda_0(callback));
      }
       else {
        onScroll(window, SpicyMorenitta$setUpLazyLoad$lambda$lambda_1(callback));
      }
      callback();
    }
    var tmp$_1;
    tmp$_1 = asList(document.querySelectorAll('img[lazy-load-url]:not([lazy-load-activated="true"]')).iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      var tmp$_2;
      this.debug_yhszz7$(['Setting up image lazy load for ' + element_0]);
      var el_0 = Kotlin.isType(tmp$_2 = element_0, Element) ? tmp$_2 : throwCCE();
      el_0.setAttribute('lazy-load-activated', 'true');
      var callback_0 = SpicyMorenitta$setUpLazyLoad$lambda$lambda_2(el_0, this);
      var applyScrollOn2 = el_0;
      do {
        applyScrollOn2 = applyScrollOn2 != null ? applyScrollOn2.parentElement : null;
      }
       while (applyScrollOn2 != null && !applyScrollOn2.hasAttribute('create-scroll-lazy-load-here'));
      if (applyScrollOn2 != null) {
        onScroll_0(applyScrollOn2, SpicyMorenitta$setUpLazyLoad$lambda$lambda_3(callback_0));
      }
       else {
        onScroll(window, SpicyMorenitta$setUpLazyLoad$lambda$lambda_4(callback_0));
      }
      callback_0();
    }
  };
  function Coroutine$sendSwitchPageRequest_yw3f44$($this, socket_0, path_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 10;
    this.$this = $this;
    this.local$$receiver = void 0;
    this.local$path = path_0;
  }
  Coroutine$sendSwitchPageRequest_yw3f44$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sendSwitchPageRequest_yw3f44$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sendSwitchPageRequest_yw3f44$.prototype.constructor = Coroutine$sendSwitchPageRequest_yw3f44$;
  Coroutine$sendSwitchPageRequest_yw3f44$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.$this.pageLoadLock.isLocked)
              this.$this.showLoadingScreen_61zpoe$();
            this.local$$receiver = this.$this.pageLoadLock;
            this.state_0 = 1;
            this.result_0 = this.local$$receiver.lock_s8jyv4$(null, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 8;
            if (pageCache.get_11rb$(this.local$path) != null) {
              var result = ensureNotNull(pageCache.get_11rb$(this.local$path));
              pageCache.remove_11rb$(this.local$path);
              ignoreCacheRequests = true;
              this.$this.debug_yhszz7$(['Path ' + this.local$path + " is already cached! Let's use it :3"]);
              this.state_0 = 2;
              this.result_0 = this.$this.switchPage_puj7f4$(this.local$path, result, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 2:
            ignoreCacheRequests = false;
            this.exceptionState_0 = 10;
            this.finallyPath_0 = [3];
            this.state_0 = 9;
            continue;
          case 3:
            return;
          case 4:
            this.$this.debug_yhszz7$(['Sending switch page request to ' + this.local$path]);
            switchPageStart = (new Date()).getTime();
            this.$this.showLoadingScreen_61zpoe$();
            this.state_0 = 5;
            this.result_0 = this.$this.getPageContent_61zpoe$(this.local$path, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var result_0 = this.result_0;
            this.state_0 = 6;
            this.result_0 = this.$this.switchPage_puj7f4$(this.local$path, result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.result_0 = Unit;
            this.exceptionState_0 = 10;
            this.finallyPath_0 = [7];
            this.state_0 = 9;
            continue;
          case 7:
            return;
          case 8:
            this.finallyPath_0 = [10];
            this.state_0 = 9;
            continue;
          case 9:
            this.exceptionState_0 = 10;
            this.local$$receiver.unlock_s8jyv4$(null);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 10:
            throw this.exception_0;
          default:this.state_0 = 10;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 10) {
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
  SpicyMorenitta.prototype.sendSwitchPageRequest_yw3f44$ = function (socket_0, path_0, continuation_0, suspended) {
    var instance = new Coroutine$sendSwitchPageRequest_yw3f44$(this, socket_0, path_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  SpicyMorenitta.prototype.switchPage_puj7f4$ = function (path, content, continuation) {
    var tmp$;
    var $receiver = document.createElement('html');
    $receiver.innerHTML = content;
    var temporary = $receiver;
    var temporaryBody = ensureNotNull(temporary.querySelector('#content'));
    var title = (tmp$ = temporary.querySelector('title')) != null ? tmp$.innerHTML : null;
    this.debug_yhszz7$(['New title is ' + toString(title)]);
    if (title != null)
      document.title = title;
    window.history.pushState(null, '', path);
    this.onPageChange_co5kb4$(this.socket, path, temporaryBody);
    var end = (new Date()).getTime();
    this.info_yhszz7$([(end - switchPageStart).toString() + 'ms - Page: ' + path]);
  };
  function Coroutine$cachePageRequest_61zpoe$($this, path_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.$this = $this;
    this.local$$receiver = void 0;
    this.local$path = path_0;
  }
  Coroutine$cachePageRequest_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$cachePageRequest_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$cachePageRequest_61zpoe$.prototype.constructor = Coroutine$cachePageRequest_61zpoe$;
  Coroutine$cachePageRequest_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver = this.$this.pageLoadLock;
            this.state_0 = 1;
            this.result_0 = this.local$$receiver.lock_s8jyv4$(null, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 4;
            this.$this.debug_yhszz7$(['Sending cache page request to ' + this.local$path]);
            switchPageStart = (new Date()).getTime();
            this.state_0 = 2;
            this.result_0 = this.$this.getPageContent_61zpoe$(this.local$path, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            var result = this.result_0;
            pageCache.put_xwzc9p$(this.local$path, result);
            this.result_0 = Unit;
            this.exceptionState_0 = 6;
            this.finallyPath_0 = [3];
            this.state_0 = 5;
            continue;
          case 3:
            return;
          case 4:
            this.finallyPath_0 = [6];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 6;
            this.local$$receiver.unlock_s8jyv4$(null);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            throw this.exception_0;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 6) {
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
  SpicyMorenitta.prototype.cachePageRequest_61zpoe$ = function (path_0, continuation_0, suspended) {
    var instance = new Coroutine$cachePageRequest_61zpoe$(this, path_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function SpicyMorenitta$getPageContent$lambda(closure$path) {
    return function ($receiver) {
      url($receiver, window.location.origin + closure$path);
      header($receiver, 'Preloading-Page', true);
      return Unit;
    };
  }
  function Coroutine$getPageContent_61zpoe$($this, path_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$path = path_0;
  }
  Coroutine$getPageContent_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getPageContent_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getPageContent_61zpoe$.prototype.constructor = Coroutine$getPageContent_61zpoe$;
  Coroutine$getPageContent_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_1 = http;
            var host;
            var body;
            host = 'localhost';
            body = utils.EmptyContent;
            var $receiver_2 = new HttpRequestBuilder_init();
            url_0($receiver_2, 'http', host, 0, '/');
            $receiver_2.method = HttpMethod.Companion.Get;
            $receiver_2.body = body;
            SpicyMorenitta$getPageContent$lambda(this.local$path)($receiver_2);
            this.state_0 = 2;
            this.result_0 = call($receiver_1, $receiver_2, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(String_0), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = typeof (tmp$_0 = this.result_0) === 'string' ? tmp$_0 : throwCCE();
            this.result_0;
            var result = this.result_0;
            return result;
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
  SpicyMorenitta.prototype.getPageContent_61zpoe$ = function (path_0, continuation_0, suspended) {
    var instance = new Coroutine$getPageContent_61zpoe$(this, path_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  SpicyMorenitta.prototype.showLoadingScreen_61zpoe$ = function (text) {
    if (text === void 0)
      text = 'Carregando...';
    var $receiver = select_0(document, '#loading-screen');
    select_0($receiver, '.loading-text').textContent = text;
    $receiver.style.opacity = '1';
  };
  SpicyMorenitta.prototype.hideLoadingScreen = function () {
    select_0(document, '#loading-screen').style.opacity = '0';
  };
  SpicyMorenitta.prototype.launch_3q5nlj$ = function (block) {
    var job = launch(coroutines.GlobalScope, void 0, void 0, block);
    this.pageSpecificTasks.add_11rb$(job);
  };
  SpicyMorenitta.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpicyMorenitta',
    interfaces: [Logging]
  };
  function main(args) {
    var spicyMorenitta = new SpicyMorenitta();
    spicyMorenitta.start();
  }
  function Trunfo() {
    Trunfo_instance = this;
    this.currentStatus = 'UNKNOWN';
    this.ws_ia9zq7$_0 = this.ws_ia9zq7$_0;
    this.currentPopup = null;
    this.player1Name = '???';
    this.player1Avatar = '???';
    this.player2Name = '???';
    this.player2Avatar = '???';
    this.isMyTurn = false;
    this.errou = new Audio('faustao_errou.mp3');
    this.dogResidue = new Audio('dog_residue.mp3');
  }
  Object.defineProperty(Trunfo.prototype, 'ws', {
    get: function () {
      if (this.ws_ia9zq7$_0 == null)
        return throwUPAE('ws');
      return this.ws_ia9zq7$_0;
    },
    set: function (ws) {
      this.ws_ia9zq7$_0 = ws;
    }
  });
  function Trunfo$connectToServer$lambda$lambda($receiver) {
    return Unit;
  }
  function Trunfo$connectToServer$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Conectando ao Matchmaking...');
    return Unit;
  }
  function Trunfo$connectToServer$lambda($receiver) {
    img($receiver, void 0, 'https://cdn.discordapp.com/emojis/621886615899471891.gif?v=1', void 0, Trunfo$connectToServer$lambda$lambda);
    div($receiver, void 0, Trunfo$connectToServer$lambda$lambda_0);
    return Unit;
  }
  function Trunfo$connectToServer$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function Trunfo$connectToServer$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Autenticando...');
    return Unit;
  }
  function Trunfo$connectToServer$lambda$lambda_1($receiver) {
    img($receiver, void 0, 'https://cdn.discordapp.com/emojis/621886615899471891.gif?v=1', void 0, Trunfo$connectToServer$lambda$lambda$lambda);
    div($receiver, void 0, Trunfo$connectToServer$lambda$lambda$lambda_0);
    return Unit;
  }
  function Trunfo$connectToServer$lambda$ObjectLiteral() {
    this.status = 'JOIN_MATCHMAKING';
  }
  Trunfo$connectToServer$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function Trunfo$connectToServer$lambda_0(this$Trunfo) {
    return function (it) {
      var tmp$;
      (tmp$ = this$Trunfo.currentPopup) != null ? (tmp$.remove(), Unit) : null;
      this$Trunfo.currentPopup = TrunfoGame_getInstance().openPopup_q7bkhe$(Trunfo$connectToServer$lambda$lambda_1);
      this$Trunfo.ws.send(JSON.stringify(new Trunfo$connectToServer$lambda$ObjectLiteral()));
      return Unit;
    };
  }
  function Trunfo$connectToServer$lambda$ObjectLiteral_0() {
    this.status = 'PONG';
  }
  Trunfo$connectToServer$lambda$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function Trunfo$connectToServer$lambda$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('N\xE3o autorizado, redirecionando...');
    return Unit;
  }
  function Trunfo$connectToServer$lambda$lambda_2($receiver) {
    div($receiver, void 0, Trunfo$connectToServer$lambda$lambda$lambda_1);
    return Unit;
  }
  function Trunfo$connectToServer$lambda$lambda$lambda_2($receiver) {
    $receiver.unaryPlus_pdl1vz$('Sala fechada, talvez o seu amiguchx tenha saido da sala...');
    return Unit;
  }
  function Trunfo$connectToServer$lambda$lambda_3($receiver) {
    div($receiver, void 0, Trunfo$connectToServer$lambda$lambda$lambda_2);
    return Unit;
  }
  function Trunfo$connectToServer$lambda$lambda$lambda_3($receiver) {
    return Unit;
  }
  function Trunfo$connectToServer$lambda$lambda$lambda_4($receiver) {
    $receiver.unaryPlus_pdl1vz$('Esperando por jogadores...');
    return Unit;
  }
  function Trunfo$connectToServer$lambda$lambda_4($receiver) {
    img($receiver, void 0, 'https://cdn.discordapp.com/emojis/621886615899471891.gif?v=1', void 0, Trunfo$connectToServer$lambda$lambda$lambda_3);
    div($receiver, void 0, Trunfo$connectToServer$lambda$lambda$lambda_4);
    return Unit;
  }
  function Trunfo$connectToServer$lambda_1(this$Trunfo) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
      var payload = typeof (tmp$ = it.data) === 'string' ? tmp$ : throwCCE();
      this$Trunfo.debug_yhszz7$([payload]);
      var json = JSON.parse(payload);
      var _currentStatus = (tmp$_0 = json['status']) == null || typeof tmp$_0 === 'string' ? tmp$_0 : throwCCE();
      if (_currentStatus != null) {
        this$Trunfo.currentStatus = _currentStatus;
      }
      if (equals(this$Trunfo.currentStatus, 'PING')) {
        this$Trunfo.debug_yhszz7$(['Ping received... pong!']);
        this$Trunfo.ws.send(JSON.stringify(new Trunfo$connectToServer$lambda$ObjectLiteral_0()));
      }
       else if (equals(this$Trunfo.currentStatus, 'UNAUTHORIZED')) {
        (tmp$_1 = this$Trunfo.currentPopup) != null ? (tmp$_1.remove(), Unit) : null;
        this$Trunfo.currentPopup = TrunfoGame_getInstance().openPopup_q7bkhe$(Trunfo$connectToServer$lambda$lambda_2);
        window.location.replace('https://discordapp.com/oauth2/authorize?client_id=297153970613387264&scope=identify+guilds+email+guilds.join&permissions=2080374975&response_type=code&redirect_uri=https://loritta.website/dashboard&state=eyJyZWRpcmVjdFVybCI6Imh0dHBzOi8vdHJ1bmZvLmxvcml0dGEud2Vic2l0ZS9pbmRleF9rb3RsaW4uaHRtbCJ9');
      }
       else if (equals(this$Trunfo.currentStatus, 'CLOSED')) {
        (tmp$_2 = this$Trunfo.currentPopup) != null ? (tmp$_2.remove(), Unit) : null;
        this$Trunfo.currentPopup = TrunfoGame_getInstance().openPopup_q7bkhe$(Trunfo$connectToServer$lambda$lambda_3);
      }
       else if (equals(this$Trunfo.currentStatus, 'WAITING_FOR_PLAYERS')) {
        (tmp$_3 = this$Trunfo.currentPopup) != null ? (tmp$_3.remove(), Unit) : null;
        this$Trunfo.currentPopup = TrunfoGame_getInstance().openPopup_q7bkhe$(Trunfo$connectToServer$lambda$lambda_4);
      }
       else if (equals(this$Trunfo.currentStatus, 'YOU_WON')) {
        select_0(document, '#waiting-for-something').innerHTML = 'Voc\xEA venceu o jogo! Parab\xE9ns ^-^';
      }
       else if (equals(this$Trunfo.currentStatus, 'YOU_LOST')) {
        select_0(document, '#waiting-for-something').innerHTML = 'Voc\xEA perdeu o jogo... Mas obrigado por jogar! ;w;';
      }
       else if (equals(this$Trunfo.currentStatus, 'PLAYING')) {
        (tmp$_4 = this$Trunfo.currentPopup) != null ? (tmp$_4.remove(), Unit) : null;
        this$Trunfo.debug_yhszz7$([select_0(document, '#game')]);
        if (select_0(document, '#game') == null)
          this$Trunfo.buildStage();
        addClass(select_0(document, '#opponent-card'), ['blurred']);
        removeClass(select_0(document, '#your-card .age-entry'), ['pop-out', 'green', 'red']);
        removeClass(select_0(document, '#opponent-card .age-entry'), ['pop-out', 'green', 'red']);
        removeClass(select_0(document, '#your-card .height-entry'), ['pop-out', 'green', 'red']);
        removeClass(select_0(document, '#opponent-card .height-entry'), ['pop-out', 'green', 'red']);
        removeClass(select_0(document, '#your-card .weight-entry'), ['pop-out', 'green', 'red']);
        removeClass(select_0(document, '#opponent-card .weight-entry'), ['pop-out', 'green', 'red']);
        removeClass(select_0(document, '#your-card .power-entry'), ['pop-out', 'green', 'red']);
        removeClass(select_0(document, '#opponent-card .power-entry'), ['pop-out', 'green', 'red']);
        removeClass(select_0(document, '#your-card .fame-entry'), ['pop-out', 'green', 'red']);
        removeClass(select_0(document, '#opponent-card .fame-entry'), ['pop-out', 'green', 'red']);
        removeClass(select_0(document, '#your-card .intelligence-entry'), ['pop-out', 'green', 'red']);
        removeClass(select_0(document, '#opponent-card .intelligence-entry'), ['pop-out', 'green', 'red']);
        removeClass(select_0(document, '#your-card .cuteness-entry'), ['pop-out', 'green', 'red']);
        removeClass(select_0(document, '#opponent-card .cuteness-entry'), ['pop-out', 'green', 'red']);
        select_0(document, '#waiting-for-something').innerHTML = 'Esperando...';
        var isMyTurn = json['isMyTurn'];
        var howManyCards = json['howManyCards'];
        var howManyOpponentCards = json['howManyOpponentCards'];
        select_0(document, '#player-1-card-count').innerHTML = toString(howManyCards);
        select_0(document, '#player-2-card-count').innerHTML = toString(howManyOpponentCards);
        var card = Kotlin.isType(tmp$_5 = json['currentCard'], Object) ? tmp$_5 : throwCCE();
        this$Trunfo.fillCardInfo_3o3rwt$(card, select_0(document, '#your-card'));
        select_0(document, '#opponent-card .header').style.backgroundImage = "url('https://via.placeholder.com/128')";
        select_0(document, '#opponent-card .card-name').innerHTML = 'Segredo uwu';
        select_0(document, '#opponent-card .age-card').innerHTML = '???';
        select_0(document, '#opponent-card .height-card').innerHTML = '???';
        select_0(document, '#opponent-card .weight-card').innerHTML = '???';
        select_0(document, '#opponent-card .power-card').innerHTML = '???';
        select_0(document, '#opponent-card .cuteness-card').innerHTML = '???';
        select_0(document, '#opponent-card .intelligence-card').innerHTML = '???';
        select_0(document, '#opponent-card .fame-card').innerHTML = '???';
        tmp$_7 = typeof (tmp$_6 = isMyTurn) === 'boolean' ? tmp$_6 : throwCCE();
        this$Trunfo.toggleDisabledStatus_6taknv$(tmp$_7);
      }
       else if (equals(this$Trunfo.currentStatus, 'SET_PLAYER_NAMES')) {
        this$Trunfo.player1Name = typeof (tmp$_8 = json['player1']) === 'string' ? tmp$_8 : throwCCE();
        this$Trunfo.player1Avatar = typeof (tmp$_9 = json['player1Avatar']) === 'string' ? tmp$_9 : throwCCE();
        this$Trunfo.player2Name = typeof (tmp$_10 = json['player2']) === 'string' ? tmp$_10 : throwCCE();
        this$Trunfo.player2Avatar = typeof (tmp$_11 = json['player2Avatar']) === 'string' ? tmp$_11 : throwCCE();
      }
       else if (equals(this$Trunfo.currentStatus, 'SEND_ROUND_STATS')) {
        var whatHappened = json['whatHappened'];
        if (equals(whatHappened, 'TIE')) {
          select_0(document, '#waiting-for-something').innerHTML = 'Empate...';
        }
        if (equals(whatHappened, 'YOU_WON')) {
          select_0(document, '#waiting-for-something').innerHTML = 'Voc\xEA ganhou a rodada!';
          var card_0 = Kotlin.isType(tmp$_12 = json['opponentCard'], Object) ? tmp$_12 : throwCCE();
          this$Trunfo.fillCardInfo_3o3rwt$(card_0, select_0(document, '#opponent-card'));
          var withWhatStats = json['withWhatStats'];
          console.log(withWhatStats);
          addClass(select_0(document, '#opponent-card .' + toString(withWhatStats) + '-entry'), ['pop-out green']);
          addClass(select_0(document, '#your-card .' + toString(withWhatStats) + '-entry'), ['pop-out green']);
          this$Trunfo.dogResidue.play();
          removeClass(select_0(document, '#opponent-card'), ['blurred']);
        }
        if (equals(whatHappened, 'YOU_LOST')) {
          select_0(document, '#waiting-for-something').innerHTML = 'Voc\xEA perdeu a rodada...';
          var card_1 = Kotlin.isType(tmp$_13 = json['opponentCard'], Object) ? tmp$_13 : throwCCE();
          this$Trunfo.fillCardInfo_3o3rwt$(card_1, select_0(document, '#opponent-card'));
          var withWhatStats_0 = json['withWhatStats'];
          console.log(withWhatStats_0);
          addClass(select_0(document, '#opponent-card .' + toString(withWhatStats_0) + '-entry'), ['pop-out red']);
          addClass(select_0(document, '#your-card .' + toString(withWhatStats_0) + '-entry'), ['pop-out red']);
          this$Trunfo.errou.play();
          removeClass(select_0(document, '#opponent-card'), ['blurred']);
        }
      }
      return Unit;
    };
  }
  function Trunfo$connectToServer$lambda_2(it) {
    window.alert('Conex\xE3o perdida...');
    return Unit;
  }
  Trunfo.prototype.connectToServer = function () {
    var tmp$;
    (tmp$ = this.currentPopup) != null ? (tmp$.remove(), Unit) : null;
    this.currentPopup = TrunfoGame_getInstance().openPopup_q7bkhe$(Trunfo$connectToServer$lambda);
    this.ws = new WebSocket('wss://' + window.location.hostname + '/ws');
    this.ws.onopen = Trunfo$connectToServer$lambda_0(this);
    this.ws.onmessage = Trunfo$connectToServer$lambda_1(this);
    this.ws.onclose = Trunfo$connectToServer$lambda_2;
  };
  Trunfo.prototype.fillCardInfo_3o3rwt$ = function (json, element) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    select_0(element, '.header').style.backgroundImage = "url('" + toString(json['imageUrl']) + "')";
    select_0(element, '.card-name').innerHTML = typeof (tmp$ = json['name']) === 'string' ? tmp$ : throwCCE();
    select_0(element, '.age-card').innerHTML = (typeof (tmp$_0 = json['age']) === 'number' ? tmp$_0 : throwCCE()).toString();
    select_0(element, '.height-card').innerHTML = (typeof (tmp$_1 = json['height']) === 'number' ? tmp$_1 : throwCCE()).toString();
    select_0(element, '.weight-card').innerHTML = (typeof (tmp$_2 = json['weight']) === 'number' ? tmp$_2 : throwCCE()).toString();
    select_0(element, '.power-card').innerHTML = (typeof (tmp$_3 = json['power']) === 'number' ? tmp$_3 : throwCCE()).toString();
    select_0(element, '.cuteness-card').innerHTML = (typeof (tmp$_4 = json['cuteness']) === 'number' ? tmp$_4 : throwCCE()).toString();
    select_0(element, '.intelligence-card').innerHTML = (typeof (tmp$_5 = json['intelligence']) === 'number' ? tmp$_5 : throwCCE()).toString();
    select_0(element, '.fame-card').innerHTML = (typeof (tmp$_6 = json['fame']) === 'number' ? tmp$_6 : throwCCE()).toString();
  };
  Trunfo.prototype.toggleDisabledStatus_6taknv$ = function (isMyTurn) {
    this.isMyTurn = isMyTurn;
    if (isMyTurn) {
      select_0(document, '#is-what-now').innerHTML = 'Escolha um atributo que voc\xEA ache que seja maior que a carta do seu oponente!';
    }
     else {
      select_0(document, '#is-what-now').innerHTML = 'Agora \xE9 a vez do seu oponente... tor\xE7a que ele escolha um atributo que tenha um valor menor que o da sua carta!';
    }
  };
  function Trunfo$buildStage$lambda$lambda$lambda(this$Trunfo) {
    return function ($receiver) {
      set_id($receiver, 'top-bar');
      this$Trunfo.buildPlayerNavbar_4ygvh0$($receiver, '1');
      this$Trunfo.buildPlayerNavbar_4ygvh0$($receiver, '2');
      return Unit;
    };
  }
  function Trunfo$buildStage$lambda$lambda$lambda_0($receiver) {
    set_id($receiver, 'waiting-bar');
    return Unit;
  }
  function Trunfo$buildStage$lambda$lambda$lambda$lambda($receiver) {
    set_id($receiver, 'waiting-for-something');
    return Unit;
  }
  function Trunfo$buildStage$lambda$lambda$lambda$lambda_0($receiver) {
    set_id($receiver, 'is-what-now');
    return Unit;
  }
  function Trunfo$buildStage$lambda$lambda$lambda_1($receiver) {
    h3($receiver, void 0, Trunfo$buildStage$lambda$lambda$lambda$lambda);
    p($receiver, void 0, Trunfo$buildStage$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function Trunfo$buildStage$lambda$lambda$lambda_2(this$Trunfo) {
    return function ($receiver) {
      this$Trunfo.buildCard_zid4s3$($receiver, 'your-card', true);
      this$Trunfo.buildCard_zid4s3$($receiver, 'opponent-card', false);
      return Unit;
    };
  }
  function Trunfo$buildStage$lambda$lambda(this$Trunfo) {
    return function ($receiver) {
      set_id($receiver, 'game');
      div($receiver, void 0, Trunfo$buildStage$lambda$lambda$lambda(this$Trunfo));
      div($receiver, void 0, Trunfo$buildStage$lambda$lambda$lambda_0);
      div($receiver, 'game-info', Trunfo$buildStage$lambda$lambda$lambda_1);
      div($receiver, 'cards', Trunfo$buildStage$lambda$lambda$lambda_2(this$Trunfo));
      return Unit;
    };
  }
  function Trunfo$buildStage$lambda(this$Trunfo) {
    return function ($receiver) {
      div_0($receiver, void 0, Trunfo$buildStage$lambda$lambda(this$Trunfo));
      return Unit;
    };
  }
  Trunfo.prototype.buildStage = function () {
    append(ensureNotNull(document.body), Trunfo$buildStage$lambda(this));
  };
  function Trunfo$buildPlayerNavbar$lambda$lambda($receiver) {
    return Unit;
  }
  function Trunfo$buildPlayerNavbar$lambda$lambda$lambda(closure$playerCount, this$Trunfo) {
    return function ($receiver) {
      set_id($receiver, 'player-' + closure$playerCount + '-name');
      if (equals(closure$playerCount, '1')) {
        $receiver.unaryPlus_pdl1vz$(this$Trunfo.player1Name);
      }
       else {
        $receiver.unaryPlus_pdl1vz$(this$Trunfo.player2Name);
      }
      return Unit;
    };
  }
  function Trunfo$buildPlayerNavbar$lambda$lambda$lambda$lambda(closure$playerCount) {
    return function ($receiver) {
      set_id($receiver, 'player-' + closure$playerCount + '-card-count');
      $receiver.unaryPlus_pdl1vz$('X');
      return Unit;
    };
  }
  function Trunfo$buildPlayerNavbar$lambda$lambda$lambda_0(closure$playerCount) {
    return function ($receiver) {
      span($receiver, void 0, Trunfo$buildPlayerNavbar$lambda$lambda$lambda$lambda(closure$playerCount));
      $receiver.unaryPlus_pdl1vz$(' cartas');
      return Unit;
    };
  }
  function Trunfo$buildPlayerNavbar$lambda$lambda_0(closure$playerCount, this$Trunfo) {
    return function ($receiver) {
      div($receiver, 'bar-name', Trunfo$buildPlayerNavbar$lambda$lambda$lambda(closure$playerCount, this$Trunfo));
      div($receiver, 'bar-stats', Trunfo$buildPlayerNavbar$lambda$lambda$lambda_0(closure$playerCount));
      return Unit;
    };
  }
  function Trunfo$buildPlayerNavbar$lambda(closure$playerCount, this$Trunfo) {
    return function ($receiver) {
      img($receiver, void 0, equals(closure$playerCount, '1') ? this$Trunfo.player1Avatar : this$Trunfo.player2Avatar, 'bar-avatar', Trunfo$buildPlayerNavbar$lambda$lambda);
      div($receiver, 'bar-name-and-stats', Trunfo$buildPlayerNavbar$lambda$lambda_0(closure$playerCount, this$Trunfo));
      return Unit;
    };
  }
  Trunfo.prototype.buildPlayerNavbar_4ygvh0$ = function ($receiver, playerCount) {
    div($receiver, 'player-entry', Trunfo$buildPlayerNavbar$lambda(playerCount, this));
  };
  function Trunfo$buildCard$lambda$lambda($receiver) {
    return Unit;
  }
  function Trunfo$buildCard$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Nome da Carta');
    return Unit;
  }
  function Trunfo$buildCard$lambda$lambda$lambda$lambda(this$Trunfo) {
    return function (it) {
      if (this$Trunfo.isMyTurn)
        this$Trunfo.sendSelectionData('height');
      return Unit;
    };
  }
  function Trunfo$buildCard$lambda$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function Trunfo$buildCard$lambda$lambda$lambda$lambda_0($receiver) {
    i_0($receiver, 'fas fa-sort-amount-up', Trunfo$buildCard$lambda$lambda$lambda$lambda$lambda);
    $receiver.unaryPlus_pdl1vz$(' Altura');
    return Unit;
  }
  function Trunfo$buildCard$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('???');
    return Unit;
  }
  function Trunfo$buildCard$lambda$lambda$lambda(closure$setClick, this$Trunfo) {
    return function ($receiver) {
      if (closure$setClick) {
        set_onClickFunction($receiver, Trunfo$buildCard$lambda$lambda$lambda$lambda(this$Trunfo));
      }
      div($receiver, 'name', Trunfo$buildCard$lambda$lambda$lambda$lambda_0);
      div($receiver, 'value height-card', Trunfo$buildCard$lambda$lambda$lambda$lambda_1);
      return Unit;
    };
  }
  function Trunfo$buildCard$lambda$lambda$lambda$lambda_2(this$Trunfo) {
    return function (it) {
      if (this$Trunfo.isMyTurn)
        this$Trunfo.sendSelectionData('age');
      return Unit;
    };
  }
  function Trunfo$buildCard$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function Trunfo$buildCard$lambda$lambda$lambda$lambda_3($receiver) {
    i_0($receiver, 'fas fa-birthday-cake', Trunfo$buildCard$lambda$lambda$lambda$lambda$lambda_0);
    $receiver.unaryPlus_pdl1vz$(' Idade');
    return Unit;
  }
  function Trunfo$buildCard$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.unaryPlus_pdl1vz$('???');
    return Unit;
  }
  function Trunfo$buildCard$lambda$lambda$lambda_0(closure$setClick, this$Trunfo) {
    return function ($receiver) {
      if (closure$setClick) {
        set_onClickFunction($receiver, Trunfo$buildCard$lambda$lambda$lambda$lambda_2(this$Trunfo));
      }
      div($receiver, 'name', Trunfo$buildCard$lambda$lambda$lambda$lambda_3);
      div($receiver, 'value age-card', Trunfo$buildCard$lambda$lambda$lambda$lambda_4);
      return Unit;
    };
  }
  function Trunfo$buildCard$lambda$lambda$lambda$lambda_5(this$Trunfo) {
    return function (it) {
      if (this$Trunfo.isMyTurn)
        this$Trunfo.sendSelectionData('weight');
      return Unit;
    };
  }
  function Trunfo$buildCard$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    return Unit;
  }
  function Trunfo$buildCard$lambda$lambda$lambda$lambda_6($receiver) {
    i_0($receiver, 'fas fa-weight', Trunfo$buildCard$lambda$lambda$lambda$lambda$lambda_1);
    $receiver.unaryPlus_pdl1vz$(' Peso');
    return Unit;
  }
  function Trunfo$buildCard$lambda$lambda$lambda$lambda_7($receiver) {
    $receiver.unaryPlus_pdl1vz$('???');
    return Unit;
  }
  function Trunfo$buildCard$lambda$lambda$lambda_1(closure$setClick, this$Trunfo) {
    return function ($receiver) {
      if (closure$setClick) {
        set_onClickFunction($receiver, Trunfo$buildCard$lambda$lambda$lambda$lambda_5(this$Trunfo));
      }
      div($receiver, 'name', Trunfo$buildCard$lambda$lambda$lambda$lambda_6);
      div($receiver, 'value weight-card', Trunfo$buildCard$lambda$lambda$lambda$lambda_7);
      return Unit;
    };
  }
  function Trunfo$buildCard$lambda$lambda$lambda$lambda_8(this$Trunfo) {
    return function (it) {
      if (this$Trunfo.isMyTurn)
        this$Trunfo.sendSelectionData('power');
      return Unit;
    };
  }
  function Trunfo$buildCard$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    return Unit;
  }
  function Trunfo$buildCard$lambda$lambda$lambda$lambda_9($receiver) {
    i_0($receiver, 'fas fa-fist-raised', Trunfo$buildCard$lambda$lambda$lambda$lambda$lambda_2);
    $receiver.unaryPlus_pdl1vz$(' Poder');
    return Unit;
  }
  function Trunfo$buildCard$lambda$lambda$lambda$lambda_10($receiver) {
    $receiver.unaryPlus_pdl1vz$('???');
    return Unit;
  }
  function Trunfo$buildCard$lambda$lambda$lambda_2(closure$setClick, this$Trunfo) {
    return function ($receiver) {
      if (closure$setClick) {
        set_onClickFunction($receiver, Trunfo$buildCard$lambda$lambda$lambda$lambda_8(this$Trunfo));
      }
      div($receiver, 'name', Trunfo$buildCard$lambda$lambda$lambda$lambda_9);
      div($receiver, 'value power-card', Trunfo$buildCard$lambda$lambda$lambda$lambda_10);
      return Unit;
    };
  }
  function Trunfo$buildCard$lambda$lambda$lambda$lambda_11(this$Trunfo) {
    return function (it) {
      if (this$Trunfo.isMyTurn)
        this$Trunfo.sendSelectionData('cuteness');
      return Unit;
    };
  }
  function Trunfo$buildCard$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    return Unit;
  }
  function Trunfo$buildCard$lambda$lambda$lambda$lambda_12($receiver) {
    i_0($receiver, 'fas fa-heart', Trunfo$buildCard$lambda$lambda$lambda$lambda$lambda_3);
    $receiver.unaryPlus_pdl1vz$(' Fofura');
    return Unit;
  }
  function Trunfo$buildCard$lambda$lambda$lambda$lambda_13($receiver) {
    $receiver.unaryPlus_pdl1vz$('???');
    return Unit;
  }
  function Trunfo$buildCard$lambda$lambda$lambda_3(closure$setClick, this$Trunfo) {
    return function ($receiver) {
      if (closure$setClick) {
        set_onClickFunction($receiver, Trunfo$buildCard$lambda$lambda$lambda$lambda_11(this$Trunfo));
      }
      div($receiver, 'name', Trunfo$buildCard$lambda$lambda$lambda$lambda_12);
      div($receiver, 'value cuteness-card', Trunfo$buildCard$lambda$lambda$lambda$lambda_13);
      return Unit;
    };
  }
  function Trunfo$buildCard$lambda$lambda$lambda$lambda_14(this$Trunfo) {
    return function (it) {
      if (this$Trunfo.isMyTurn)
        this$Trunfo.sendSelectionData('intelligence');
      return Unit;
    };
  }
  function Trunfo$buildCard$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    return Unit;
  }
  function Trunfo$buildCard$lambda$lambda$lambda$lambda_15($receiver) {
    i_0($receiver, 'fas fa-brain', Trunfo$buildCard$lambda$lambda$lambda$lambda$lambda_4);
    $receiver.unaryPlus_pdl1vz$(' Intelig\xEAncia');
    return Unit;
  }
  function Trunfo$buildCard$lambda$lambda$lambda$lambda_16($receiver) {
    $receiver.unaryPlus_pdl1vz$('???');
    return Unit;
  }
  function Trunfo$buildCard$lambda$lambda$lambda_4(closure$setClick, this$Trunfo) {
    return function ($receiver) {
      if (closure$setClick) {
        set_onClickFunction($receiver, Trunfo$buildCard$lambda$lambda$lambda$lambda_14(this$Trunfo));
      }
      div($receiver, 'name', Trunfo$buildCard$lambda$lambda$lambda$lambda_15);
      div($receiver, 'value intelligence-card', Trunfo$buildCard$lambda$lambda$lambda$lambda_16);
      return Unit;
    };
  }
  function Trunfo$buildCard$lambda$lambda$lambda$lambda_17(this$Trunfo) {
    return function (it) {
      if (this$Trunfo.isMyTurn)
        this$Trunfo.sendSelectionData('fame');
      return Unit;
    };
  }
  function Trunfo$buildCard$lambda$lambda$lambda$lambda$lambda_5($receiver) {
    return Unit;
  }
  function Trunfo$buildCard$lambda$lambda$lambda$lambda_18($receiver) {
    i_0($receiver, 'fas fa-star', Trunfo$buildCard$lambda$lambda$lambda$lambda$lambda_5);
    $receiver.unaryPlus_pdl1vz$(' Fama');
    return Unit;
  }
  function Trunfo$buildCard$lambda$lambda$lambda$lambda_19($receiver) {
    $receiver.unaryPlus_pdl1vz$('???');
    return Unit;
  }
  function Trunfo$buildCard$lambda$lambda$lambda_5(closure$setClick, this$Trunfo) {
    return function ($receiver) {
      if (closure$setClick) {
        set_onClickFunction($receiver, Trunfo$buildCard$lambda$lambda$lambda$lambda_17(this$Trunfo));
      }
      div($receiver, 'name', Trunfo$buildCard$lambda$lambda$lambda$lambda_18);
      div($receiver, 'value fame-card', Trunfo$buildCard$lambda$lambda$lambda$lambda_19);
      return Unit;
    };
  }
  function Trunfo$buildCard$lambda$lambda_1(closure$setClick, this$Trunfo) {
    return function ($receiver) {
      div($receiver, 'entry height-entry', Trunfo$buildCard$lambda$lambda$lambda(closure$setClick, this$Trunfo));
      div($receiver, 'entry age-entry', Trunfo$buildCard$lambda$lambda$lambda_0(closure$setClick, this$Trunfo));
      div($receiver, 'entry weight-entry', Trunfo$buildCard$lambda$lambda$lambda_1(closure$setClick, this$Trunfo));
      div($receiver, 'entry power-entry', Trunfo$buildCard$lambda$lambda$lambda_2(closure$setClick, this$Trunfo));
      div($receiver, 'entry cuteness-entry', Trunfo$buildCard$lambda$lambda$lambda_3(closure$setClick, this$Trunfo));
      div($receiver, 'entry intelligence-entry', Trunfo$buildCard$lambda$lambda$lambda_4(closure$setClick, this$Trunfo));
      div($receiver, 'entry fame-entry', Trunfo$buildCard$lambda$lambda$lambda_5(closure$setClick, this$Trunfo));
      return Unit;
    };
  }
  function Trunfo$buildCard$lambda(closure$idName, closure$setClick, this$Trunfo) {
    return function ($receiver) {
      set_id($receiver, closure$idName);
      div($receiver, 'header', Trunfo$buildCard$lambda$lambda);
      div($receiver, 'card-name', Trunfo$buildCard$lambda$lambda_0);
      div($receiver, 'entries', Trunfo$buildCard$lambda$lambda_1(closure$setClick, this$Trunfo));
      return Unit;
    };
  }
  Trunfo.prototype.buildCard_zid4s3$ = function ($receiver, idName, setClick) {
    div($receiver, 'card', Trunfo$buildCard$lambda(idName, setClick, this));
  };
  function Trunfo$sendSelectionData$ObjectLiteral(closure$selectedEntry) {
    this.status = 'SELECTION';
    this.selected = closure$selectedEntry;
  }
  Trunfo$sendSelectionData$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  Trunfo.prototype.sendSelectionData = function (selectedEntry) {
    this.ws.send(JSON.stringify(new Trunfo$sendSelectionData$ObjectLiteral(selectedEntry)));
  };
  Trunfo.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Trunfo',
    interfaces: [Logging]
  };
  var Trunfo_instance = null;
  function Trunfo_getInstance() {
    if (Trunfo_instance === null) {
      new Trunfo();
    }
    return Trunfo_instance;
  }
  function TrunfoGame() {
    TrunfoGame_instance = this;
    this.nintendoWfc = new Audio('nintendo_wfc.mp3');
  }
  function TrunfoGame$start$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$("Lori's Super Trunfo\u2122");
    return Unit;
  }
  function Coroutine$TrunfoGame$start$lambda$lambda$lambda$lambda$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$TrunfoGame$start$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$TrunfoGame$start$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$TrunfoGame$start$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$TrunfoGame$start$lambda$lambda$lambda$lambda$lambda;
  Coroutine$TrunfoGame$start$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return Trunfo_getInstance().connectToServer(), Unit;
          case 1:
            throw this.exception_0;
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
  function TrunfoGame$start$lambda$lambda$lambda$lambda$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$TrunfoGame$start$lambda$lambda$lambda$lambda$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function TrunfoGame$start$lambda$lambda$lambda$lambda(this$TrunfoGame) {
    return function (it) {
      this$TrunfoGame.nintendoWfc.volume = 0.03;
      this$TrunfoGame.nintendoWfc.loop = true;
      this$TrunfoGame.nintendoWfc.play();
      launch(coroutines.GlobalScope, void 0, void 0, TrunfoGame$start$lambda$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function TrunfoGame$start$lambda$lambda$lambda_0(this$TrunfoGame) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Conectar em uma sala!');
      set_onClickFunction($receiver, TrunfoGame$start$lambda$lambda$lambda$lambda(this$TrunfoGame));
      return Unit;
    };
  }
  function TrunfoGame$start$lambda$lambda(this$TrunfoGame) {
    return function ($receiver) {
      h1($receiver, void 0, TrunfoGame$start$lambda$lambda$lambda);
      button($receiver, void 0, void 0, void 0, void 0, void 0, TrunfoGame$start$lambda$lambda$lambda_0(this$TrunfoGame));
      return Unit;
    };
  }
  function TrunfoGame$start$lambda(this$TrunfoGame) {
    return function (it) {
      Trunfo_getInstance().currentPopup = this$TrunfoGame.openPopup_q7bkhe$(TrunfoGame$start$lambda$lambda(this$TrunfoGame));
      return Unit;
    };
  }
  TrunfoGame.prototype.start = function () {
    onDOMReady(document, TrunfoGame$start$lambda(this));
  };
  function TrunfoGame$openPopup$lambda$lambda(closure$html) {
    return function ($receiver) {
      closure$html($receiver);
      return Unit;
    };
  }
  function TrunfoGame$openPopup$lambda(closure$html) {
    return function ($receiver) {
      div($receiver, 'popup', TrunfoGame$openPopup$lambda$lambda(closure$html));
      return Unit;
    };
  }
  TrunfoGame.prototype.openPopup_q7bkhe$ = function (html) {
    var div = div_0(get_create(document), 'popup-wrapper', TrunfoGame$openPopup$lambda(html));
    ensureNotNull(document.body).append(div);
    return div;
  };
  TrunfoGame.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'TrunfoGame',
    interfaces: []
  };
  var TrunfoGame_instance = null;
  function TrunfoGame_getInstance() {
    if (TrunfoGame_instance === null) {
      new TrunfoGame();
    }
    return TrunfoGame_instance;
  }
  function AdvertisementUtils() {
    AdvertisementUtils_instance = this;
  }
  Object.defineProperty(AdvertisementUtils.prototype, 'isUserBlockingAds', {
    get: function () {
      return window.canRunAds == undefined;
    }
  });
  function Coroutine$AdvertisementUtils$checkIfUserIsBlockingAds$lambda(this$AdvertisementUtils_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$AdvertisementUtils = this$AdvertisementUtils_0;
  }
  Coroutine$AdvertisementUtils$checkIfUserIsBlockingAds$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$AdvertisementUtils$checkIfUserIsBlockingAds$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$AdvertisementUtils$checkIfUserIsBlockingAds$lambda.prototype.constructor = Coroutine$AdvertisementUtils$checkIfUserIsBlockingAds$lambda;
  Coroutine$AdvertisementUtils$checkIfUserIsBlockingAds$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = delay(L5000, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$ = this.local$this$AdvertisementUtils.replaceAllGoogleAdSenseAdsWithFakeAds_0();
            var adCount = tmp$.component1()
            , rand = tmp$.component2();
            var replacedAds = selectAll(document, '.lori' + rand.toString() + '-help-plz-banner');
            this.local$this$AdvertisementUtils.debug_yhszz7$(['There are ' + replacedAds.size + ' replaced ads']);
            var any$result;
            any$break: do {
              var tmp$_0;
              if (Kotlin.isType(replacedAds, Collection) && replacedAds.isEmpty()) {
                any$result = false;
                break any$break;
              }
              tmp$_0 = replacedAds.iterator();
              while (tmp$_0.hasNext()) {
                var element = tmp$_0.next();
                if (equals(element.style.display, 'none')) {
                  any$result = true;
                  break any$break;
                }
              }
              any$result = false;
            }
             while (false);
            var hasAnyRemovedAds = any$result || adCount > replacedAds.size;
            if (hasAnyRemovedAds) {
              return this.local$this$AdvertisementUtils.forceUserToDisableAdBlock_0(), Unit;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            return Unit;
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
  function AdvertisementUtils$checkIfUserIsBlockingAds$lambda(this$AdvertisementUtils_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$AdvertisementUtils$checkIfUserIsBlockingAds$lambda(this$AdvertisementUtils_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  AdvertisementUtils.prototype.checkIfUserIsBlockingAds = function () {
    if (this.isUserBlockingAds) {
      this.debug_yhszz7$(['User is blocking ads... :(']);
      SpicyMorenitta$Companion_getInstance().INSTANCE.launch_3q5nlj$(AdvertisementUtils$checkIfUserIsBlockingAds$lambda(this));
    }
  };
  function AdvertisementUtils$replaceAllGoogleAdSenseAdsWithFakeAds$lambda$lambda(closure$rand) {
    return function ($receiver) {
      img_0($receiver, void 0, 'https://loritta.website/assets/img/lori_helpplz.png', 'lori' + closure$rand.toString() + '-help-plz-banner');
      return Unit;
    };
  }
  AdvertisementUtils.prototype.replaceAllGoogleAdSenseAdsWithFakeAds_0 = function () {
    var rand = Random_0(0).nextLong();
    var ads = selectAll(document, '.adsbygoogle');
    var adCount = ads.size;
    this.debug_yhszz7$(['There are ' + adCount + ' Google AdSense ads']);
    var tmp$;
    tmp$ = ads.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var parentElement = ensureNotNull(element.parentElement);
      append(parentElement, AdvertisementUtils$replaceAllGoogleAdSenseAdsWithFakeAds$lambda$lambda(rand));
    }
    return new AdvertisementUtils$AdSenseToFakeAdsResult(adCount, rand);
  };
  function AdvertisementUtils$forceUserToDisableAdBlock$lambda($receiver) {
    img_0($receiver, void 0, 'https://i.imgur.com/MZWtUzB.png');
    return Unit;
  }
  AdvertisementUtils.prototype.forceUserToDisableAdBlock_0 = function () {
    this.debug_yhszz7$(['Looks like the user removed some ads... whoopsie, I tripped on the cord! >:)']);
    var body = ensureNotNull(document.body);
    clear(body);
    append(body, AdvertisementUtils$forceUserToDisableAdBlock$lambda);
  };
  function AdvertisementUtils$AdSenseToFakeAdsResult(googleAdSenseAds, randomLong) {
    this.googleAdSenseAds = googleAdSenseAds;
    this.randomLong = randomLong;
  }
  AdvertisementUtils$AdSenseToFakeAdsResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AdSenseToFakeAdsResult',
    interfaces: []
  };
  AdvertisementUtils$AdSenseToFakeAdsResult.prototype.component1 = function () {
    return this.googleAdSenseAds;
  };
  AdvertisementUtils$AdSenseToFakeAdsResult.prototype.component2 = function () {
    return this.randomLong;
  };
  AdvertisementUtils$AdSenseToFakeAdsResult.prototype.copy_6svq3l$ = function (googleAdSenseAds, randomLong) {
    return new AdvertisementUtils$AdSenseToFakeAdsResult(googleAdSenseAds === void 0 ? this.googleAdSenseAds : googleAdSenseAds, randomLong === void 0 ? this.randomLong : randomLong);
  };
  AdvertisementUtils$AdSenseToFakeAdsResult.prototype.toString = function () {
    return 'AdSenseToFakeAdsResult(googleAdSenseAds=' + Kotlin.toString(this.googleAdSenseAds) + (', randomLong=' + Kotlin.toString(this.randomLong)) + ')';
  };
  AdvertisementUtils$AdSenseToFakeAdsResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.googleAdSenseAds) | 0;
    result = result * 31 + Kotlin.hashCode(this.randomLong) | 0;
    return result;
  };
  AdvertisementUtils$AdSenseToFakeAdsResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.googleAdSenseAds, other.googleAdSenseAds) && Kotlin.equals(this.randomLong, other.randomLong)))));
  };
  AdvertisementUtils.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AdvertisementUtils',
    interfaces: [Logging]
  };
  var AdvertisementUtils_instance = null;
  function AdvertisementUtils_getInstance() {
    if (AdvertisementUtils_instance === null) {
      new AdvertisementUtils();
    }
    return AdvertisementUtils_instance;
  }
  function AuthUtils() {
    AuthUtils_instance = this;
  }
  function AuthUtils$handlePopup$lambda(it) {
    window.opener.authenticate(select_0(document, '#hidden-auth-payload').innerHTML);
    window.close();
    return Unit;
  }
  AuthUtils.prototype.handlePopup = function () {
    if (!equals(window.opener, undefined) && window.opener !== window) {
      onDOMReady(document, AuthUtils$handlePopup$lambda);
    }
     else {
      window.location.href = window.location.origin;
    }
  };
  AuthUtils.prototype.handlePostAuth = function (payload) {
    var $receiver = JSON_0.Companion.nonstrict;
    var userIdentification = $receiver.parse_awif5v$(getOrDefault($receiver.context, getKClass(UserIdentification)), payload);
    SpicyMorenitta$Companion_getInstance().INSTANCE.updateLoggedInUser_brvwnn$(userIdentification);
  };
  AuthUtils.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AuthUtils',
    interfaces: []
  };
  var AuthUtils_instance = null;
  function AuthUtils_getInstance() {
    if (AuthUtils_instance === null) {
      new AuthUtils();
    }
    return AuthUtils_instance;
  }
  function select_0($receiver, query) {
    var tmp$;
    return (tmp$ = $receiver.querySelector(query)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  }
  function selectAll($receiver, query) {
    var tmp$;
    return Kotlin.isType(tmp$ = asList($receiver.querySelectorAll(query)), List) ? tmp$ : throwCCE();
  }
  function onDOMReady($receiver, callback) {
    $receiver.addEventListener('DOMContentLoaded', callback, false);
  }
  function onClick($receiver, callback) {
    $receiver.addEventListener('click', callback);
  }
  function onScroll($receiver, callback) {
    $receiver.addEventListener('scroll', callback);
  }
  function onScroll_0($receiver, callback) {
    $receiver.addEventListener('scroll', callback);
  }
  function onMouseOver($receiver, callback) {
    $receiver.addEventListener('mouseover', callback);
  }
  function onMouseOut($receiver, callback) {
    $receiver.addEventListener('mouseout', callback);
  }
  function onMouseEnter($receiver, callback) {
    $receiver.addEventListener('mouseenter', callback);
  }
  function onMouseLeave($receiver, callback) {
    $receiver.addEventListener('mouseleave', callback);
  }
  function offset($receiver) {
    var rect = $receiver.getBoundingClientRect();
    var scrollLeft = window.pageXOffset;
    var scrollTop = window.pageYOffset;
    return new Offset(rect.top + scrollTop, rect.left + scrollLeft);
  }
  function width($receiver) {
    return $receiver.getBoundingClientRect().width;
  }
  function Offset(top, left) {
    this.top = top;
    this.left = left;
  }
  Offset.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Offset',
    interfaces: []
  };
  Offset.prototype.component1 = function () {
    return this.top;
  };
  Offset.prototype.component2 = function () {
    return this.left;
  };
  Offset.prototype.copy_lu1900$ = function (top, left) {
    return new Offset(top === void 0 ? this.top : top, left === void 0 ? this.left : left);
  };
  Offset.prototype.toString = function () {
    return 'Offset(top=' + Kotlin.toString(this.top) + (', left=' + Kotlin.toString(this.left)) + ')';
  };
  Offset.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.top) | 0;
    result = result * 31 + Kotlin.hashCode(this.left) | 0;
    return result;
  };
  Offset.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.top, other.top) && Kotlin.equals(this.left, other.left)))));
  };
  function FanArt(fileName, createdAt, tags) {
    FanArt$Companion_getInstance();
    this.fileName = fileName;
    this.createdAt = createdAt;
    this.tags = tags;
  }
  function FanArt$Companion() {
    FanArt$Companion_instance = this;
  }
  FanArt$Companion.prototype.serializer = function () {
    return FanArt$$serializer_getInstance();
  };
  FanArt$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FanArt$Companion_instance = null;
  function FanArt$Companion_getInstance() {
    if (FanArt$Companion_instance === null) {
      new FanArt$Companion();
    }
    return FanArt$Companion_instance;
  }
  function FanArt$$serializer() {
    this.descriptor_mx7sc1$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.utils.FanArt', this);
    this.descriptor.addElement_ivxn3r$('fileName', false);
    this.descriptor.addElement_ivxn3r$('createdAt', false);
    this.descriptor.addElement_ivxn3r$('tags', false);
    FanArt$$serializer_instance = this;
  }
  Object.defineProperty(FanArt$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_mx7sc1$_0;
    }
  });
  FanArt$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.fileName);
    output.encodeSerializableElement_blecud$(this.descriptor, 1, new TestSerializer(), obj.createdAt);
    output.encodeSerializableElement_blecud$(this.descriptor, 2, new LinkedHashSetSerializer(internal.StringSerializer), obj.tags);
    output.endStructure_qatsm0$(this.descriptor);
  };
  FanArt$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
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
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, new TestSerializer()) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, new TestSerializer(), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 2, new LinkedHashSetSerializer(internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 2, new LinkedHashSetSerializer(internal.StringSerializer), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return FanArt_init(bitMask0, local0, local1, local2, null);
  };
  FanArt$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, new TestSerializer(), new LinkedHashSetSerializer(internal.StringSerializer)];
  };
  FanArt$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var FanArt$$serializer_instance = null;
  function FanArt$$serializer_getInstance() {
    if (FanArt$$serializer_instance === null) {
      new FanArt$$serializer();
    }
    return FanArt$$serializer_instance;
  }
  function FanArt_init(seen1, fileName, createdAt, tags, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(FanArt.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('fileName');
    else
      $this.fileName = fileName;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('createdAt');
    else
      $this.createdAt = createdAt;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('tags');
    else
      $this.tags = tags;
    return $this;
  }
  FanArt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FanArt',
    interfaces: []
  };
  FanArt.prototype.component1 = function () {
    return this.fileName;
  };
  FanArt.prototype.component2 = function () {
    return this.createdAt;
  };
  FanArt.prototype.component3 = function () {
    return this.tags;
  };
  FanArt.prototype.copy_f0jiwz$ = function (fileName, createdAt, tags) {
    return new FanArt(fileName === void 0 ? this.fileName : fileName, createdAt === void 0 ? this.createdAt : createdAt, tags === void 0 ? this.tags : tags);
  };
  FanArt.prototype.toString = function () {
    return 'FanArt(fileName=' + Kotlin.toString(this.fileName) + (', createdAt=' + Kotlin.toString(this.createdAt)) + (', tags=' + Kotlin.toString(this.tags)) + ')';
  };
  FanArt.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.fileName) | 0;
    result = result * 31 + Kotlin.hashCode(this.createdAt) | 0;
    result = result * 31 + Kotlin.hashCode(this.tags) | 0;
    return result;
  };
  FanArt.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.fileName, other.fileName) && Kotlin.equals(this.createdAt, other.createdAt) && Kotlin.equals(this.tags, other.tags)))));
  };
  function FanArtArtist(id, info, user, fanArts) {
    FanArtArtist$Companion_getInstance();
    if (user === void 0)
      user = null;
    this.id = id;
    this.info = info;
    this.user = user;
    this.fanArts = fanArts;
  }
  function FanArtArtist$Info(name, avatarUrl, override) {
    FanArtArtist$Info$Companion_getInstance();
    if (override === void 0)
      override = null;
    this.name = name;
    this.avatarUrl = avatarUrl;
    this.override = override;
  }
  function FanArtArtist$Info$Companion() {
    FanArtArtist$Info$Companion_instance = this;
  }
  FanArtArtist$Info$Companion.prototype.serializer = function () {
    return FanArtArtist$Info$$serializer_getInstance();
  };
  FanArtArtist$Info$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FanArtArtist$Info$Companion_instance = null;
  function FanArtArtist$Info$Companion_getInstance() {
    if (FanArtArtist$Info$Companion_instance === null) {
      new FanArtArtist$Info$Companion();
    }
    return FanArtArtist$Info$Companion_instance;
  }
  function FanArtArtist$Info$$serializer() {
    this.descriptor_wu4ws0$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.utils.FanArtArtist.Info', this);
    this.descriptor.addElement_ivxn3r$('name', false);
    this.descriptor.addElement_ivxn3r$('avatarUrl', false);
    this.descriptor.addElement_ivxn3r$('override', true);
    FanArtArtist$Info$$serializer_instance = this;
  }
  Object.defineProperty(FanArtArtist$Info$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_wu4ws0$_0;
    }
  });
  FanArtArtist$Info$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 0, internal.StringSerializer, obj.name);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 1, internal.StringSerializer, obj.avatarUrl);
    if (!equals(obj.override, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 2, FanArtArtist$Info$$serializer_getInstance(), obj.override);
    output.endStructure_qatsm0$(this.descriptor);
  };
  FanArtArtist$Info$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = input_0.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 0, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 0, internal.StringSerializer, local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 1, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 1, internal.StringSerializer, local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 2, FanArtArtist$Info$$serializer_getInstance()) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 2, FanArtArtist$Info$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return FanArtArtist$FanArtArtist$Info_init(bitMask0, local0, local1, local2, null);
  };
  FanArtArtist$Info$$serializer.prototype.childSerializers = function () {
    return [new NullableSerializer(internal.StringSerializer), new NullableSerializer(internal.StringSerializer), new NullableSerializer(FanArtArtist$Info$$serializer_getInstance())];
  };
  FanArtArtist$Info$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var FanArtArtist$Info$$serializer_instance = null;
  function FanArtArtist$Info$$serializer_getInstance() {
    if (FanArtArtist$Info$$serializer_instance === null) {
      new FanArtArtist$Info$$serializer();
    }
    return FanArtArtist$Info$$serializer_instance;
  }
  function FanArtArtist$FanArtArtist$Info_init(seen1, name, avatarUrl, override, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(FanArtArtist$Info.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('name');
    else
      $this.name = name;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('avatarUrl');
    else
      $this.avatarUrl = avatarUrl;
    if ((seen1 & 4) === 0)
      $this.override = null;
    else
      $this.override = override;
    return $this;
  }
  FanArtArtist$Info.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Info',
    interfaces: []
  };
  FanArtArtist$Info.prototype.component1 = function () {
    return this.name;
  };
  FanArtArtist$Info.prototype.component2 = function () {
    return this.avatarUrl;
  };
  FanArtArtist$Info.prototype.component3 = function () {
    return this.override;
  };
  FanArtArtist$Info.prototype.copy_ddsfos$ = function (name, avatarUrl, override) {
    return new FanArtArtist$Info(name === void 0 ? this.name : name, avatarUrl === void 0 ? this.avatarUrl : avatarUrl, override === void 0 ? this.override : override);
  };
  FanArtArtist$Info.prototype.toString = function () {
    return 'Info(name=' + Kotlin.toString(this.name) + (', avatarUrl=' + Kotlin.toString(this.avatarUrl)) + (', override=' + Kotlin.toString(this.override)) + ')';
  };
  FanArtArtist$Info.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.avatarUrl) | 0;
    result = result * 31 + Kotlin.hashCode(this.override) | 0;
    return result;
  };
  FanArtArtist$Info.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.avatarUrl, other.avatarUrl) && Kotlin.equals(this.override, other.override)))));
  };
  function FanArtArtist$User(name, effectiveAvatarUrl) {
    FanArtArtist$User$Companion_getInstance();
    this.name = name;
    this.effectiveAvatarUrl = effectiveAvatarUrl;
  }
  function FanArtArtist$User$Companion() {
    FanArtArtist$User$Companion_instance = this;
  }
  FanArtArtist$User$Companion.prototype.serializer = function () {
    return FanArtArtist$User$$serializer_getInstance();
  };
  FanArtArtist$User$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FanArtArtist$User$Companion_instance = null;
  function FanArtArtist$User$Companion_getInstance() {
    if (FanArtArtist$User$Companion_instance === null) {
      new FanArtArtist$User$Companion();
    }
    return FanArtArtist$User$Companion_instance;
  }
  function FanArtArtist$User$$serializer() {
    this.descriptor_t99nnx$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.utils.FanArtArtist.User', this);
    this.descriptor.addElement_ivxn3r$('name', false);
    this.descriptor.addElement_ivxn3r$('effectiveAvatarUrl', false);
    FanArtArtist$User$$serializer_instance = this;
  }
  Object.defineProperty(FanArtArtist$User$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_t99nnx$_0;
    }
  });
  FanArtArtist$User$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.name);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.effectiveAvatarUrl);
    output.endStructure_qatsm0$(this.descriptor);
  };
  FanArtArtist$User$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
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
    return FanArtArtist$FanArtArtist$User_init(bitMask0, local0, local1, null);
  };
  FanArtArtist$User$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer];
  };
  FanArtArtist$User$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var FanArtArtist$User$$serializer_instance = null;
  function FanArtArtist$User$$serializer_getInstance() {
    if (FanArtArtist$User$$serializer_instance === null) {
      new FanArtArtist$User$$serializer();
    }
    return FanArtArtist$User$$serializer_instance;
  }
  function FanArtArtist$FanArtArtist$User_init(seen1, name, effectiveAvatarUrl, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(FanArtArtist$User.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('name');
    else
      $this.name = name;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('effectiveAvatarUrl');
    else
      $this.effectiveAvatarUrl = effectiveAvatarUrl;
    return $this;
  }
  FanArtArtist$User.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'User',
    interfaces: []
  };
  FanArtArtist$User.prototype.component1 = function () {
    return this.name;
  };
  FanArtArtist$User.prototype.component2 = function () {
    return this.effectiveAvatarUrl;
  };
  FanArtArtist$User.prototype.copy_puj7f4$ = function (name, effectiveAvatarUrl) {
    return new FanArtArtist$User(name === void 0 ? this.name : name, effectiveAvatarUrl === void 0 ? this.effectiveAvatarUrl : effectiveAvatarUrl);
  };
  FanArtArtist$User.prototype.toString = function () {
    return 'User(name=' + Kotlin.toString(this.name) + (', effectiveAvatarUrl=' + Kotlin.toString(this.effectiveAvatarUrl)) + ')';
  };
  FanArtArtist$User.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.effectiveAvatarUrl) | 0;
    return result;
  };
  FanArtArtist$User.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.effectiveAvatarUrl, other.effectiveAvatarUrl)))));
  };
  function FanArtArtist$Companion() {
    FanArtArtist$Companion_instance = this;
  }
  FanArtArtist$Companion.prototype.serializer = function () {
    return FanArtArtist$$serializer_getInstance();
  };
  FanArtArtist$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FanArtArtist$Companion_instance = null;
  function FanArtArtist$Companion_getInstance() {
    if (FanArtArtist$Companion_instance === null) {
      new FanArtArtist$Companion();
    }
    return FanArtArtist$Companion_instance;
  }
  function FanArtArtist$$serializer() {
    this.descriptor_yp6atm$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.utils.FanArtArtist', this);
    this.descriptor.addElement_ivxn3r$('id', false);
    this.descriptor.addElement_ivxn3r$('info', false);
    this.descriptor.addElement_ivxn3r$('user', true);
    this.descriptor.addElement_ivxn3r$('fanArts', false);
    FanArtArtist$$serializer_instance = this;
  }
  Object.defineProperty(FanArtArtist$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_yp6atm$_0;
    }
  });
  FanArtArtist$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.id);
    output.encodeSerializableElement_blecud$(this.descriptor, 1, FanArtArtist$Info$$serializer_getInstance(), obj.info);
    if (!equals(obj.user, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 2, FanArtArtist$User$$serializer_getInstance(), obj.user);
    output.encodeSerializableElement_blecud$(this.descriptor, 3, new ArrayListSerializer(FanArt$$serializer_getInstance()), obj.fanArts);
    output.endStructure_qatsm0$(this.descriptor);
  };
  FanArtArtist$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
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
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, FanArtArtist$Info$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, FanArtArtist$Info$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 2, FanArtArtist$User$$serializer_getInstance()) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 2, FanArtArtist$User$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = (bitMask0 & 8) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 3, new ArrayListSerializer(FanArt$$serializer_getInstance())) : input.updateSerializableElement_ehubvl$(this.descriptor, 3, new ArrayListSerializer(FanArt$$serializer_getInstance()), local3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return FanArtArtist_init(bitMask0, local0, local1, local2, local3, null);
  };
  FanArtArtist$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, FanArtArtist$Info$$serializer_getInstance(), new NullableSerializer(FanArtArtist$User$$serializer_getInstance()), new ArrayListSerializer(FanArt$$serializer_getInstance())];
  };
  FanArtArtist$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var FanArtArtist$$serializer_instance = null;
  function FanArtArtist$$serializer_getInstance() {
    if (FanArtArtist$$serializer_instance === null) {
      new FanArtArtist$$serializer();
    }
    return FanArtArtist$$serializer_instance;
  }
  function FanArtArtist_init(seen1, id, info, user, fanArts, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(FanArtArtist.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('id');
    else
      $this.id = id;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('info');
    else
      $this.info = info;
    if ((seen1 & 4) === 0)
      $this.user = null;
    else
      $this.user = user;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('fanArts');
    else
      $this.fanArts = fanArts;
    return $this;
  }
  FanArtArtist.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FanArtArtist',
    interfaces: []
  };
  FanArtArtist.prototype.component1 = function () {
    return this.id;
  };
  FanArtArtist.prototype.component2 = function () {
    return this.info;
  };
  FanArtArtist.prototype.component3 = function () {
    return this.user;
  };
  FanArtArtist.prototype.component4 = function () {
    return this.fanArts;
  };
  FanArtArtist.prototype.copy_o1yj35$ = function (id, info, user, fanArts) {
    return new FanArtArtist(id === void 0 ? this.id : id, info === void 0 ? this.info : info, user === void 0 ? this.user : user, fanArts === void 0 ? this.fanArts : fanArts);
  };
  FanArtArtist.prototype.toString = function () {
    return 'FanArtArtist(id=' + Kotlin.toString(this.id) + (', info=' + Kotlin.toString(this.info)) + (', user=' + Kotlin.toString(this.user)) + (', fanArts=' + Kotlin.toString(this.fanArts)) + ')';
  };
  FanArtArtist.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.info) | 0;
    result = result * 31 + Kotlin.hashCode(this.user) | 0;
    result = result * 31 + Kotlin.hashCode(this.fanArts) | 0;
    return result;
  };
  FanArtArtist.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.info, other.info) && Kotlin.equals(this.user, other.user) && Kotlin.equals(this.fanArts, other.fanArts)))));
  };
  function GeneralConfig(commandPrefix) {
    GeneralConfig$Companion_getInstance();
    this.commandPrefix = commandPrefix;
  }
  function GeneralConfig$Companion() {
    GeneralConfig$Companion_instance = this;
  }
  GeneralConfig$Companion.prototype.serializer = function () {
    return GeneralConfig$$serializer_getInstance();
  };
  GeneralConfig$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GeneralConfig$Companion_instance = null;
  function GeneralConfig$Companion_getInstance() {
    if (GeneralConfig$Companion_instance === null) {
      new GeneralConfig$Companion();
    }
    return GeneralConfig$Companion_instance;
  }
  function GeneralConfig$$serializer() {
    this.descriptor_sphaj9$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.utils.GeneralConfig', this);
    this.descriptor.addElement_ivxn3r$('commandPrefix', false);
    GeneralConfig$$serializer_instance = this;
  }
  Object.defineProperty(GeneralConfig$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_sphaj9$_0;
    }
  });
  GeneralConfig$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.commandPrefix);
    output.endStructure_qatsm0$(this.descriptor);
  };
  GeneralConfig$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
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
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return GeneralConfig_init(bitMask0, local0, null);
  };
  GeneralConfig$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer];
  };
  GeneralConfig$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var GeneralConfig$$serializer_instance = null;
  function GeneralConfig$$serializer_getInstance() {
    if (GeneralConfig$$serializer_instance === null) {
      new GeneralConfig$$serializer();
    }
    return GeneralConfig$$serializer_instance;
  }
  function GeneralConfig_init(seen1, commandPrefix, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(GeneralConfig.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('commandPrefix');
    else
      $this.commandPrefix = commandPrefix;
    return $this;
  }
  GeneralConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeneralConfig',
    interfaces: []
  };
  function GuildConfig(general) {
    GuildConfig$Companion_getInstance();
    if (general === void 0)
      general = null;
    this.general = general;
  }
  function GuildConfig$Companion() {
    GuildConfig$Companion_instance = this;
  }
  GuildConfig$Companion.prototype.serializer = function () {
    return GuildConfig$$serializer_getInstance();
  };
  GuildConfig$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GuildConfig$Companion_instance = null;
  function GuildConfig$Companion_getInstance() {
    if (GuildConfig$Companion_instance === null) {
      new GuildConfig$Companion();
    }
    return GuildConfig$Companion_instance;
  }
  function GuildConfig$$serializer() {
    this.descriptor_9gklwg$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.utils.GuildConfig', this);
    this.descriptor.addElement_ivxn3r$('general', true);
    GuildConfig$$serializer_instance = this;
  }
  Object.defineProperty(GuildConfig$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_9gklwg$_0;
    }
  });
  GuildConfig$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    if (!equals(obj.general, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 0))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 0, GeneralConfig$$serializer_getInstance(), obj.general);
    output.endStructure_qatsm0$(this.descriptor);
  };
  GuildConfig$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = input_0.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 0, GeneralConfig$$serializer_getInstance()) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 0, GeneralConfig$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return GuildConfig_init(bitMask0, local0, null);
  };
  GuildConfig$$serializer.prototype.childSerializers = function () {
    return [new NullableSerializer(GeneralConfig$$serializer_getInstance())];
  };
  GuildConfig$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var GuildConfig$$serializer_instance = null;
  function GuildConfig$$serializer_getInstance() {
    if (GuildConfig$$serializer_instance === null) {
      new GuildConfig$$serializer();
    }
    return GuildConfig$$serializer_instance;
  }
  function GuildConfig_init(seen1, general, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(GuildConfig.prototype);
    if ((seen1 & 1) === 0)
      $this.general = null;
    else
      $this.general = general;
    return $this;
  }
  GuildConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GuildConfig',
    interfaces: []
  };
  GuildConfig.prototype.component1 = function () {
    return this.general;
  };
  GuildConfig.prototype.copy_nlj4y9$ = function (general) {
    return new GuildConfig(general === void 0 ? this.general : general);
  };
  GuildConfig.prototype.toString = function () {
    return 'GuildConfig(general=' + Kotlin.toString(this.general) + ')';
  };
  GuildConfig.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.general) | 0;
    return result;
  };
  GuildConfig.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.general, other.general))));
  };
  function BaseLocale(id, localeEntries) {
    BaseLocale$Companion_getInstance();
    this.id = id;
    this.localeEntries = localeEntries;
  }
  Object.defineProperty(BaseLocale.prototype, 'path', {
    get: function () {
      return this.get_25kzsl$('website.localePath', []);
    }
  });
  BaseLocale.prototype.get_25kzsl$ = function (key, arguments_0) {
    try {
      return this.f_aheo4u$(this.getWithType_ytbaoo$(key), arguments_0.slice());
    }
     catch (e) {
      if (Kotlin.isType(e, RuntimeException)) {
        this.error_yhszz7$(['Error when trying to retrieve ' + key]);
      }
       else
        throw e;
    }
    return '!!{' + key + '}!!';
  };
  BaseLocale.prototype.getWithType_ytbaoo$ = function (key) {
    var tmp$, tmp$_0;
    tmp$ = this.localeEntries.get_11rb$(key);
    if (tmp$ == null) {
      throw RuntimeException_init('Key ' + key + " doesn't exist!");
    }
    var entry = tmp$;
    return (tmp$_0 = entry) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
  };
  BaseLocale.prototype.msgFormat_aheo4u$ = function ($receiver, arguments_0) {
    var str = {v: $receiver};
    var tmp$, tmp$_0;
    var index = 0;
    for (tmp$ = 0; tmp$ !== arguments_0.length; ++tmp$) {
      var item = arguments_0[tmp$];
      str.v = replace(str.v, '{' + (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0) + '}', toString(item));
    }
    return str.v;
  };
  BaseLocale.prototype.f_aheo4u$ = function ($receiver, arguments_0) {
    return this.msgFormat_aheo4u$($receiver, arguments_0.slice());
  };
  function BaseLocale$Companion() {
    BaseLocale$Companion_instance = this;
  }
  BaseLocale$Companion.prototype.serializer = function () {
    return BaseLocale$$serializer_getInstance();
  };
  BaseLocale$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BaseLocale$Companion_instance = null;
  function BaseLocale$Companion_getInstance() {
    if (BaseLocale$Companion_instance === null) {
      new BaseLocale$Companion();
    }
    return BaseLocale$Companion_instance;
  }
  function BaseLocale$$serializer() {
    this.descriptor_6cf9p2$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.utils.locale.BaseLocale', this);
    this.descriptor.addElement_ivxn3r$('id', false);
    this.descriptor.addElement_ivxn3r$('localeEntries', false);
    BaseLocale$$serializer_instance = this;
  }
  Object.defineProperty(BaseLocale$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_6cf9p2$_0;
    }
  });
  BaseLocale$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.id);
    output.encodeSerializableElement_blecud$(this.descriptor, 1, new LinkedHashMapSerializer(internal.StringSerializer, internal.StringSerializer), obj.localeEntries);
    output.endStructure_qatsm0$(this.descriptor);
  };
  BaseLocale$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
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
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, new LinkedHashMapSerializer(internal.StringSerializer, internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, new LinkedHashMapSerializer(internal.StringSerializer, internal.StringSerializer), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return BaseLocale_init(bitMask0, local0, local1, null);
  };
  BaseLocale$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, new LinkedHashMapSerializer(internal.StringSerializer, internal.StringSerializer)];
  };
  BaseLocale$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var BaseLocale$$serializer_instance = null;
  function BaseLocale$$serializer_getInstance() {
    if (BaseLocale$$serializer_instance === null) {
      new BaseLocale$$serializer();
    }
    return BaseLocale$$serializer_instance;
  }
  function BaseLocale_init(seen1, id, localeEntries, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(BaseLocale.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('id');
    else
      $this.id = id;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('localeEntries');
    else
      $this.localeEntries = localeEntries;
    return $this;
  }
  BaseLocale.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseLocale',
    interfaces: [Logging]
  };
  function Logging() {
  }
  Logging.prototype.success_yhszz7$ = function (o) {
    var tmp$;
    (tmp$ = console).log.apply(tmp$, ['%c[' + toString(Kotlin.getKClassFromExpression(this).simpleName) + '] [' + '?' + '?' + ' success] ' + toString(first_0(o)), 'color: green;'].concat(copyToArray(drop(o, 1))));
  };
  Logging.prototype.info_yhszz7$ = function (o) {
    var tmp$;
    (tmp$ = console).log.apply(tmp$, ['%c[' + toString(Kotlin.getKClassFromExpression(this).simpleName) + '] [' + '?' + '?' + ' info] ' + toString(first_0(o)), 'color: blue;'].concat(copyToArray(drop(o, 1))));
  };
  Logging.prototype.warn_yhszz7$ = function (o) {
    var tmp$;
    (tmp$ = console).log.apply(tmp$, ['%c[' + toString(Kotlin.getKClassFromExpression(this).simpleName) + '] [' + '?' + '?' + ' warn] ' + toString(first_0(o)), 'color: pink;'].concat(copyToArray(drop(o, 1))));
  };
  Logging.prototype.error_yhszz7$ = function (o) {
    var tmp$;
    (tmp$ = console).log.apply(tmp$, ['%c[' + toString(Kotlin.getKClassFromExpression(this).simpleName) + '] [' + '?' + '?' + ' error] ' + toString(first_0(o)), 'color: red;'].concat(copyToArray(drop(o, 1))));
  };
  Logging.prototype.debug_yhszz7$ = function (o) {
    var tmp$;
    (tmp$ = console).log.apply(tmp$, ['%c[' + toString(Kotlin.getKClassFromExpression(this).simpleName) + '] [' + '?' + '?' + ' debug] ' + toString(first_0(o)), 'color: gray;'].concat(copyToArray(drop(o, 1))));
  };
  Logging.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Logging',
    interfaces: []
  };
  function TemmieDiscordGuild(id, name, icon, owner, permissions, joined) {
    TemmieDiscordGuild$Companion_getInstance();
    if (icon === void 0)
      icon = null;
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.owner = owner;
    this.permissions = permissions;
    this.joined = joined;
  }
  function TemmieDiscordGuild$Companion() {
    TemmieDiscordGuild$Companion_instance = this;
  }
  TemmieDiscordGuild$Companion.prototype.serializer = function () {
    return TemmieDiscordGuild$$serializer_getInstance();
  };
  TemmieDiscordGuild$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TemmieDiscordGuild$Companion_instance = null;
  function TemmieDiscordGuild$Companion_getInstance() {
    if (TemmieDiscordGuild$Companion_instance === null) {
      new TemmieDiscordGuild$Companion();
    }
    return TemmieDiscordGuild$Companion_instance;
  }
  function TemmieDiscordGuild$$serializer() {
    this.descriptor_f0ik1f$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.utils.TemmieDiscordGuild', this);
    this.descriptor.addElement_ivxn3r$('id', false);
    this.descriptor.addElement_ivxn3r$('name', false);
    this.descriptor.addElement_ivxn3r$('icon', true);
    this.descriptor.addElement_ivxn3r$('owner', false);
    this.descriptor.addElement_ivxn3r$('permissions', false);
    this.descriptor.addElement_ivxn3r$('joined', false);
    TemmieDiscordGuild$$serializer_instance = this;
  }
  Object.defineProperty(TemmieDiscordGuild$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_f0ik1f$_0;
    }
  });
  TemmieDiscordGuild$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.id);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.name);
    if (!equals(obj.icon, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 2, internal.StringSerializer, obj.icon);
    output.encodeBooleanElement_w1b0nl$(this.descriptor, 3, obj.owner);
    output.encodeIntElement_4wpqag$(this.descriptor, 4, obj.permissions);
    output.encodeBooleanElement_w1b0nl$(this.descriptor, 5, obj.joined);
    output.endStructure_qatsm0$(this.descriptor);
  };
  TemmieDiscordGuild$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
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
          local2 = (bitMask0 & 4) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 2, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 2, internal.StringSerializer, local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = input.decodeBooleanElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = input.decodeIntElement_3zr2iy$(this.descriptor, 4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case 5:
          local5 = input.decodeBooleanElement_3zr2iy$(this.descriptor, 5);
          bitMask0 |= 32;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return TemmieDiscordGuild_init(bitMask0, local0, local1, local2, local3, local4, local5, null);
  };
  TemmieDiscordGuild$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer, new NullableSerializer(internal.StringSerializer), internal.BooleanSerializer, internal.IntSerializer, internal.BooleanSerializer];
  };
  TemmieDiscordGuild$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var TemmieDiscordGuild$$serializer_instance = null;
  function TemmieDiscordGuild$$serializer_getInstance() {
    if (TemmieDiscordGuild$$serializer_instance === null) {
      new TemmieDiscordGuild$$serializer();
    }
    return TemmieDiscordGuild$$serializer_instance;
  }
  function TemmieDiscordGuild_init(seen1, id, name, icon, owner, permissions, joined, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(TemmieDiscordGuild.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('id');
    else
      $this.id = id;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('name');
    else
      $this.name = name;
    if ((seen1 & 4) === 0)
      $this.icon = null;
    else
      $this.icon = icon;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('owner');
    else
      $this.owner = owner;
    if ((seen1 & 16) === 0)
      throw new MissingFieldException('permissions');
    else
      $this.permissions = permissions;
    if ((seen1 & 32) === 0)
      throw new MissingFieldException('joined');
    else
      $this.joined = joined;
    return $this;
  }
  TemmieDiscordGuild.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TemmieDiscordGuild',
    interfaces: []
  };
  TemmieDiscordGuild.prototype.component1 = function () {
    return this.id;
  };
  TemmieDiscordGuild.prototype.component2 = function () {
    return this.name;
  };
  TemmieDiscordGuild.prototype.component3 = function () {
    return this.icon;
  };
  TemmieDiscordGuild.prototype.component4 = function () {
    return this.owner;
  };
  TemmieDiscordGuild.prototype.component5 = function () {
    return this.permissions;
  };
  TemmieDiscordGuild.prototype.component6 = function () {
    return this.joined;
  };
  TemmieDiscordGuild.prototype.copy_oo2ww3$ = function (id, name, icon, owner, permissions, joined) {
    return new TemmieDiscordGuild(id === void 0 ? this.id : id, name === void 0 ? this.name : name, icon === void 0 ? this.icon : icon, owner === void 0 ? this.owner : owner, permissions === void 0 ? this.permissions : permissions, joined === void 0 ? this.joined : joined);
  };
  TemmieDiscordGuild.prototype.toString = function () {
    return 'TemmieDiscordGuild(id=' + Kotlin.toString(this.id) + (', name=' + Kotlin.toString(this.name)) + (', icon=' + Kotlin.toString(this.icon)) + (', owner=' + Kotlin.toString(this.owner)) + (', permissions=' + Kotlin.toString(this.permissions)) + (', joined=' + Kotlin.toString(this.joined)) + ')';
  };
  TemmieDiscordGuild.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.icon) | 0;
    result = result * 31 + Kotlin.hashCode(this.owner) | 0;
    result = result * 31 + Kotlin.hashCode(this.permissions) | 0;
    result = result * 31 + Kotlin.hashCode(this.joined) | 0;
    return result;
  };
  TemmieDiscordGuild.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.icon, other.icon) && Kotlin.equals(this.owner, other.owner) && Kotlin.equals(this.permissions, other.permissions) && Kotlin.equals(this.joined, other.joined)))));
  };
  function TestSerializer() {
    this.descriptor_qcehdx$_0 = withName(internal.StringDescriptor, 'WithCustomDefault');
  }
  Object.defineProperty(TestSerializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_qcehdx$_0;
    }
  });
  TestSerializer.prototype.serialize_awe97i$ = function (output, obj) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  TestSerializer.prototype.deserialize_nts5qn$ = function (input) {
    var date = new Date(input.decodeString());
    return date;
  };
  TestSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TestSerializer',
    interfaces: [KSerializer]
  };
  function UserIdentification(id, username, discriminator, avatar, bot, mfaEnabled, locale, verified, email, flags, premiumType) {
    UserIdentification$Companion_getInstance();
    if (mfaEnabled === void 0)
      mfaEnabled = false;
    if (premiumType === void 0)
      premiumType = 0;
    this.id = id;
    this.username = username;
    this.discriminator = discriminator;
    this.avatar = avatar;
    this.bot = bot;
    this.mfaEnabled = mfaEnabled;
    this.locale = locale;
    this.verified = verified;
    this.email = email;
    this.flags = flags;
    this.premiumType = premiumType;
  }
  function UserIdentification$Companion() {
    UserIdentification$Companion_instance = this;
  }
  UserIdentification$Companion.prototype.serializer = function () {
    return UserIdentification$$serializer_getInstance();
  };
  UserIdentification$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var UserIdentification$Companion_instance = null;
  function UserIdentification$Companion_getInstance() {
    if (UserIdentification$Companion_instance === null) {
      new UserIdentification$Companion();
    }
    return UserIdentification$Companion_instance;
  }
  function UserIdentification$$serializer() {
    this.descriptor_svx48$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.utils.UserIdentification', this);
    this.descriptor.addElement_ivxn3r$('id', false);
    this.descriptor.addElement_ivxn3r$('username', false);
    this.descriptor.addElement_ivxn3r$('discriminator', false);
    this.descriptor.addElement_ivxn3r$('avatar', false);
    this.descriptor.addElement_ivxn3r$('bot', false);
    this.descriptor.addElement_ivxn3r$('mfa_enabled', true);
    this.descriptor.addElement_ivxn3r$('locale', false);
    this.descriptor.addElement_ivxn3r$('verified', false);
    this.descriptor.addElement_ivxn3r$('email', false);
    this.descriptor.addElement_ivxn3r$('flags', false);
    this.descriptor.addElement_ivxn3r$('premium_type', true);
    UserIdentification$$serializer_instance = this;
  }
  Object.defineProperty(UserIdentification$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_svx48$_0;
    }
  });
  UserIdentification$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.id);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.username);
    output.encodeStringElement_bgm7zs$(this.descriptor, 2, obj.discriminator);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 3, internal.StringSerializer, obj.avatar);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 4, internal.BooleanSerializer, obj.bot);
    if (!equals(obj.mfaEnabled, false) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 5))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 5, internal.BooleanSerializer, obj.mfaEnabled);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 6, internal.StringSerializer, obj.locale);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 7, internal.BooleanSerializer, obj.verified);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 8, internal.StringSerializer, obj.email);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 9, internal.IntSerializer, obj.flags);
    if (!equals(obj.premiumType, 0) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 10))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 10, internal.IntSerializer, obj.premiumType);
    output.endStructure_qatsm0$(this.descriptor);
  };
  UserIdentification$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5
    , local6
    , local7
    , local8
    , local9
    , local10;
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
          local3 = (bitMask0 & 8) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 3, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 3, internal.StringSerializer, local3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = (bitMask0 & 16) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 4, internal.BooleanSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 4, internal.BooleanSerializer, local4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case 5:
          local5 = (bitMask0 & 32) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 5, internal.BooleanSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 5, internal.BooleanSerializer, local5);
          bitMask0 |= 32;
          if (!readAll)
            break;
        case 6:
          local6 = (bitMask0 & 64) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 6, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 6, internal.StringSerializer, local6);
          bitMask0 |= 64;
          if (!readAll)
            break;
        case 7:
          local7 = (bitMask0 & 128) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 7, internal.BooleanSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 7, internal.BooleanSerializer, local7);
          bitMask0 |= 128;
          if (!readAll)
            break;
        case 8:
          local8 = (bitMask0 & 256) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 8, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 8, internal.StringSerializer, local8);
          bitMask0 |= 256;
          if (!readAll)
            break;
        case 9:
          local9 = (bitMask0 & 512) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 9, internal.IntSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 9, internal.IntSerializer, local9);
          bitMask0 |= 512;
          if (!readAll)
            break;
        case 10:
          local10 = (bitMask0 & 1024) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 10, internal.IntSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 10, internal.IntSerializer, local10);
          bitMask0 |= 1024;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return UserIdentification_init(bitMask0, local0, local1, local2, local3, local4, local5, local6, local7, local8, local9, local10, null);
  };
  UserIdentification$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, new NullableSerializer(internal.StringSerializer), new NullableSerializer(internal.BooleanSerializer), new NullableSerializer(internal.BooleanSerializer), new NullableSerializer(internal.StringSerializer), new NullableSerializer(internal.BooleanSerializer), new NullableSerializer(internal.StringSerializer), new NullableSerializer(internal.IntSerializer), new NullableSerializer(internal.IntSerializer)];
  };
  UserIdentification$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var UserIdentification$$serializer_instance = null;
  function UserIdentification$$serializer_getInstance() {
    if (UserIdentification$$serializer_instance === null) {
      new UserIdentification$$serializer();
    }
    return UserIdentification$$serializer_instance;
  }
  function UserIdentification_init(seen1, id, username, discriminator, avatar, bot, mfaEnabled, locale, verified, email, flags, premiumType, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(UserIdentification.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('id');
    else
      $this.id = id;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('username');
    else
      $this.username = username;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('discriminator');
    else
      $this.discriminator = discriminator;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('avatar');
    else
      $this.avatar = avatar;
    if ((seen1 & 16) === 0)
      throw new MissingFieldException('bot');
    else
      $this.bot = bot;
    if ((seen1 & 32) === 0)
      $this.mfaEnabled = false;
    else
      $this.mfaEnabled = mfaEnabled;
    if ((seen1 & 64) === 0)
      throw new MissingFieldException('locale');
    else
      $this.locale = locale;
    if ((seen1 & 128) === 0)
      throw new MissingFieldException('verified');
    else
      $this.verified = verified;
    if ((seen1 & 256) === 0)
      throw new MissingFieldException('email');
    else
      $this.email = email;
    if ((seen1 & 512) === 0)
      throw new MissingFieldException('flags');
    else
      $this.flags = flags;
    if ((seen1 & 1024) === 0)
      $this.premiumType = 0;
    else
      $this.premiumType = premiumType;
    return $this;
  }
  UserIdentification.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserIdentification',
    interfaces: []
  };
  function generateAd$lambda(closure$adSlot) {
    return function ($receiver) {
      set_style($receiver, 'display: block;');
      var $receiver_0 = $receiver.attributes;
      var key = 'data-ad-client';
      var value = 'ca-pub-9989170954243288';
      $receiver_0.put_xwzc9p$(key, value);
      var $receiver_1 = $receiver.attributes;
      var key_0 = 'data-ad-slot';
      var value_0 = closure$adSlot;
      $receiver_1.put_xwzc9p$(key_0, value_0);
      var $receiver_2 = $receiver.attributes;
      var key_1 = 'data-ad-format';
      $receiver_2.put_xwzc9p$(key_1, 'auto');
      var $receiver_3 = $receiver.attributes;
      var key_2 = 'data-full-width-responsive';
      $receiver_3.put_xwzc9p$(key_2, 'true');
      return Unit;
    };
  }
  function generateAd$lambda$lambda($receiver) {
    $receiver.raw_61zpoe$('(adsbygoogle = window.adsbygoogle || []).push({});');
    return Unit;
  }
  function generateAd$lambda_0($receiver) {
    unsafe($receiver, generateAd$lambda$lambda);
    return Unit;
  }
  function generateAd($receiver, adSlot, adName) {
    if (adName === void 0)
      adName = null;
    ins($receiver, 'adsbygoogle', generateAd$lambda(adSlot));
    script($receiver, html.ScriptType.textJavaScript, void 0, generateAd$lambda_0);
  }
  function patch$lambda($receiver) {
    return Unit;
  }
  function WebsiteUtils() {
    WebsiteUtils_instance = this;
  }
  WebsiteUtils.prototype.getUrlWithLocale = function () {
    var href = window.location.href;
    var split_0 = split(href, ['/']);
    if (4 >= split_0.size)
      return href;
    return joinToString(split_0.subList_vux9f0$(0, 4), '/');
  };
  WebsiteUtils.prototype.getPathWithoutLocale = function () {
    var href = window.location.pathname;
    if (!endsWith(href, '/'))
      href += '/';
    var split_0 = split(href, ['/']);
    if (3 > split_0.size)
      return href;
    var result = '/' + joinToString(drop_0(split_0, 2), '/');
    if (!endsWith(result, '/'))
      result += '/';
    return result;
  };
  WebsiteUtils.prototype.getWebsiteLocaleIdViaPath = function () {
    var href = window.location.href;
    var split_0 = split(href, ['/']);
    return last(dropLast(split_0, 1));
  };
  function WebsiteUtils$patchGuildConfigById$ObjectLiteral() {
  }
  WebsiteUtils$patchGuildConfigById$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function WebsiteUtils$patchGuildConfigById$lambda$lambda(closure$data) {
    return function ($receiver) {
      $receiver.body = JSON.stringify(closure$data);
      return Unit;
    };
  }
  function Coroutine$WebsiteUtils$patchGuildConfigById$lambda(closure$id_0, closure$data_0, this$WebsiteUtils_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$id = closure$id_0;
    this.local$closure$data = closure$data_0;
    this.local$this$WebsiteUtils = this$WebsiteUtils_0;
    this.local$result = void 0;
  }
  Coroutine$WebsiteUtils$patchGuildConfigById$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$WebsiteUtils$patchGuildConfigById$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$WebsiteUtils$patchGuildConfigById$lambda.prototype.constructor = Coroutine$WebsiteUtils$patchGuildConfigById$lambda;
  Coroutine$WebsiteUtils$patchGuildConfigById$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            SpicyMorenitta$Companion_getInstance().INSTANCE.showLoadingScreen_61zpoe$('Salvando...');
            var $receiver_1 = http;
            var urlString = 'https://spicy.loritta.website/api/v1/guilds/' + this.local$closure$id + '/config';
            var block = WebsiteUtils$patchGuildConfigById$lambda$lambda(this.local$closure$data);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_2 = new HttpRequestBuilder_init();
            url_0($receiver_2, 'http', host_0, 0, '/');
            $receiver_2.method = HttpMethod.Companion.Patch;
            $receiver_2.body = body_0;
            takeFrom($receiver_2.url, urlString);
            block($receiver_2);
            this.state_0 = 2;
            this.result_0 = call($receiver_1, $receiver_2, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(HttpResponse), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, HttpResponse) ? tmp$_0 : throwCCE();
            this.result_0;
            this.local$result = this.result_0;
            this.state_0 = 4;
            this.result_0 = readText(this.local$result, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var asJson = this.result_0;
            this.local$this$WebsiteUtils.debug_yhszz7$([asJson]);
            SpicyMorenitta$Companion_getInstance().INSTANCE.hideLoadingScreen();
            if (!((tmp$ = this.local$result.status) != null ? tmp$.equals(HttpStatusCode.Companion.OK) : null)) {
              return this.local$this$WebsiteUtils.error_yhszz7$(['Something went wrong! ' + this.local$result.status]), Unit;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 5:
            return Unit;
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
  function WebsiteUtils$patchGuildConfigById$lambda(closure$id_0, closure$data_0, this$WebsiteUtils_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$WebsiteUtils$patchGuildConfigById$lambda(closure$id_0, closure$data_0, this$WebsiteUtils_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  WebsiteUtils.prototype.patchGuildConfigById_3m4wor$ = function (id, patchCode, data) {
    var obj = new WebsiteUtils$patchGuildConfigById$ObjectLiteral();
    obj.patchCode = patchCode;
    obj.data = data;
    launch(coroutines.GlobalScope, void 0, void 0, WebsiteUtils$patchGuildConfigById$lambda(id, data, this));
  };
  WebsiteUtils.prototype.canManageGuild_qbryc2$ = function (g) {
    return this.getUserPermissionLevel_qbryc2$(g).canAddBots;
  };
  WebsiteUtils.prototype.getUserPermissionLevel_qbryc2$ = function (g) {
    var tmp$;
    var isAdministrator = (g.permissions >> 3 & 1) === 1;
    var isManager = (g.permissions >> 5 & 1) === 1;
    if (g.owner)
      tmp$ = WebsiteUtils$UserPermissionLevel$OWNER_getInstance();
    else if (isAdministrator)
      tmp$ = WebsiteUtils$UserPermissionLevel$ADMINISTRATOR_getInstance();
    else if (isManager)
      tmp$ = WebsiteUtils$UserPermissionLevel$MANAGER_getInstance();
    else
      tmp$ = WebsiteUtils$UserPermissionLevel$MEMBER_getInstance();
    return tmp$;
  };
  function WebsiteUtils$UserPermissionLevel(name, ordinal, canAddBots) {
    Enum.call(this);
    this.canAddBots = canAddBots;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function WebsiteUtils$UserPermissionLevel_initFields() {
    WebsiteUtils$UserPermissionLevel_initFields = function () {
    };
    WebsiteUtils$UserPermissionLevel$OWNER_instance = new WebsiteUtils$UserPermissionLevel('OWNER', 0, true);
    WebsiteUtils$UserPermissionLevel$ADMINISTRATOR_instance = new WebsiteUtils$UserPermissionLevel('ADMINISTRATOR', 1, true);
    WebsiteUtils$UserPermissionLevel$MANAGER_instance = new WebsiteUtils$UserPermissionLevel('MANAGER', 2, true);
    WebsiteUtils$UserPermissionLevel$MEMBER_instance = new WebsiteUtils$UserPermissionLevel('MEMBER', 3, false);
  }
  var WebsiteUtils$UserPermissionLevel$OWNER_instance;
  function WebsiteUtils$UserPermissionLevel$OWNER_getInstance() {
    WebsiteUtils$UserPermissionLevel_initFields();
    return WebsiteUtils$UserPermissionLevel$OWNER_instance;
  }
  var WebsiteUtils$UserPermissionLevel$ADMINISTRATOR_instance;
  function WebsiteUtils$UserPermissionLevel$ADMINISTRATOR_getInstance() {
    WebsiteUtils$UserPermissionLevel_initFields();
    return WebsiteUtils$UserPermissionLevel$ADMINISTRATOR_instance;
  }
  var WebsiteUtils$UserPermissionLevel$MANAGER_instance;
  function WebsiteUtils$UserPermissionLevel$MANAGER_getInstance() {
    WebsiteUtils$UserPermissionLevel_initFields();
    return WebsiteUtils$UserPermissionLevel$MANAGER_instance;
  }
  var WebsiteUtils$UserPermissionLevel$MEMBER_instance;
  function WebsiteUtils$UserPermissionLevel$MEMBER_getInstance() {
    WebsiteUtils$UserPermissionLevel_initFields();
    return WebsiteUtils$UserPermissionLevel$MEMBER_instance;
  }
  WebsiteUtils$UserPermissionLevel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserPermissionLevel',
    interfaces: [Enum]
  };
  function WebsiteUtils$UserPermissionLevel$values() {
    return [WebsiteUtils$UserPermissionLevel$OWNER_getInstance(), WebsiteUtils$UserPermissionLevel$ADMINISTRATOR_getInstance(), WebsiteUtils$UserPermissionLevel$MANAGER_getInstance(), WebsiteUtils$UserPermissionLevel$MEMBER_getInstance()];
  }
  WebsiteUtils$UserPermissionLevel.values = WebsiteUtils$UserPermissionLevel$values;
  function WebsiteUtils$UserPermissionLevel$valueOf(name) {
    switch (name) {
      case 'OWNER':
        return WebsiteUtils$UserPermissionLevel$OWNER_getInstance();
      case 'ADMINISTRATOR':
        return WebsiteUtils$UserPermissionLevel$ADMINISTRATOR_getInstance();
      case 'MANAGER':
        return WebsiteUtils$UserPermissionLevel$MANAGER_getInstance();
      case 'MEMBER':
        return WebsiteUtils$UserPermissionLevel$MEMBER_getInstance();
      default:throwISE('No enum constant net.perfectdreams.spicymorenitta.utils.WebsiteUtils.UserPermissionLevel.' + name);
    }
  }
  WebsiteUtils$UserPermissionLevel.valueOf_61zpoe$ = WebsiteUtils$UserPermissionLevel$valueOf;
  WebsiteUtils.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'WebsiteUtils',
    interfaces: [Logging]
  };
  var WebsiteUtils_instance = null;
  function WebsiteUtils_getInstance() {
    if (WebsiteUtils_instance === null) {
      new WebsiteUtils();
    }
    return WebsiteUtils_instance;
  }
  function BaseView() {
  }
  BaseView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseView',
    interfaces: []
  };
  function FanArtsView() {
    BaseView.call(this);
  }
  FanArtsView.prototype.postLoad = function () {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  FanArtsView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FanArtsView',
    interfaces: [BaseView]
  };
  function WebsiteThemeUtils() {
    WebsiteThemeUtils_instance = this;
  }
  function WebsiteThemeUtils$changeWebsiteThemeTo$lambda(closure$newTheme) {
    return function () {
      var tmp$;
      var body = ensureNotNull(document.body);
      var themeChangerButton = select_0(document, '#theme-changer-button');
      var $receiver = WebsiteThemeUtils$WebsiteTheme$values();
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
        var element = $receiver[tmp$_0];
        removeClass(body, [element.bodyClass]);
      }
      addClass(body, [closure$newTheme.bodyClass]);
      CookiesUtils_getInstance().createCookie_puj7f4$('userTheme', closure$newTheme.name);
      (tmp$ = themeChangerButton != null ? select_0(themeChangerButton, 'i') : null) != null ? (tmp$.setAttribute('class', closure$newTheme.icon), Unit) : null;
      if (closure$newTheme === WebsiteThemeUtils$WebsiteTheme$DARK_THEME_getInstance())
        CookiesUtils_getInstance().createCookie_puj7f4$('darkTheme', 'true');
      else
        CookiesUtils_getInstance().eraseCookie_61zpoe$('darkTheme');
      return Unit;
    };
  }
  function WebsiteThemeUtils$changeWebsiteThemeTo$lambda_0(closure$callback) {
    return function (it) {
      closure$callback();
      return Unit;
    };
  }
  WebsiteThemeUtils.prototype.changeWebsiteThemeTo_4heyup$ = function (newTheme, afterPageLoad) {
    var callback = WebsiteThemeUtils$changeWebsiteThemeTo$lambda(newTheme);
    if (afterPageLoad)
      onDOMReady(document, WebsiteThemeUtils$changeWebsiteThemeTo$lambda_0(callback));
    else
      callback();
  };
  function WebsiteThemeUtils$WebsiteTheme(name, ordinal, bodyClass, icon) {
    Enum.call(this);
    this.bodyClass = bodyClass;
    this.icon = icon;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function WebsiteThemeUtils$WebsiteTheme_initFields() {
    WebsiteThemeUtils$WebsiteTheme_initFields = function () {
    };
    WebsiteThemeUtils$WebsiteTheme$DEFAULT_instance = new WebsiteThemeUtils$WebsiteTheme('DEFAULT', 0, 'light', 'fas fa-moon');
    WebsiteThemeUtils$WebsiteTheme$DARK_THEME_instance = new WebsiteThemeUtils$WebsiteTheme('DARK_THEME', 1, 'dark', 'fas fa-sun');
  }
  var WebsiteThemeUtils$WebsiteTheme$DEFAULT_instance;
  function WebsiteThemeUtils$WebsiteTheme$DEFAULT_getInstance() {
    WebsiteThemeUtils$WebsiteTheme_initFields();
    return WebsiteThemeUtils$WebsiteTheme$DEFAULT_instance;
  }
  var WebsiteThemeUtils$WebsiteTheme$DARK_THEME_instance;
  function WebsiteThemeUtils$WebsiteTheme$DARK_THEME_getInstance() {
    WebsiteThemeUtils$WebsiteTheme_initFields();
    return WebsiteThemeUtils$WebsiteTheme$DARK_THEME_instance;
  }
  WebsiteThemeUtils$WebsiteTheme.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WebsiteTheme',
    interfaces: [Enum]
  };
  function WebsiteThemeUtils$WebsiteTheme$values() {
    return [WebsiteThemeUtils$WebsiteTheme$DEFAULT_getInstance(), WebsiteThemeUtils$WebsiteTheme$DARK_THEME_getInstance()];
  }
  WebsiteThemeUtils$WebsiteTheme.values = WebsiteThemeUtils$WebsiteTheme$values;
  function WebsiteThemeUtils$WebsiteTheme$valueOf(name) {
    switch (name) {
      case 'DEFAULT':
        return WebsiteThemeUtils$WebsiteTheme$DEFAULT_getInstance();
      case 'DARK_THEME':
        return WebsiteThemeUtils$WebsiteTheme$DARK_THEME_getInstance();
      default:throwISE('No enum constant net.perfectdreams.spicymorenitta.WebsiteThemeUtils.WebsiteTheme.' + name);
    }
  }
  WebsiteThemeUtils$WebsiteTheme.valueOf_61zpoe$ = WebsiteThemeUtils$WebsiteTheme$valueOf;
  WebsiteThemeUtils.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'WebsiteThemeUtils',
    interfaces: []
  };
  var WebsiteThemeUtils_instance = null;
  function WebsiteThemeUtils_getInstance() {
    if (WebsiteThemeUtils_instance === null) {
      new WebsiteThemeUtils();
    }
    return WebsiteThemeUtils_instance;
  }
  function PingCommand() {
    WebSocketCommand.call(this, 'ping');
  }
  PingCommand.prototype.process_z9o90e$ = function (socket, json) {
    this.info_yhszz7$(['Ping request received successfully!']);
  };
  PingCommand.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PingCommand',
    interfaces: [WebSocketCommand]
  };
  function WebSocketCommand(name) {
    this.name = name;
  }
  WebSocketCommand.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WebSocketCommand',
    interfaces: [Logging]
  };
  var package$com = _.com || (_.com = {});
  var package$fasterxml = package$com.fasterxml || (package$com.fasterxml = {});
  var package$jackson = package$fasterxml.jackson || (package$fasterxml.jackson = {});
  var package$annotation = package$jackson.annotation || (package$jackson.annotation = {});
  package$annotation.JsonCreator = JsonCreator;
  package$annotation.JsonProperty = JsonProperty;
  var package$net = _.net || (_.net = {});
  var package$perfectdreams = package$net.perfectdreams || (package$net.perfectdreams = {});
  var package$spicymorenitta = package$perfectdreams.spicymorenitta || (package$perfectdreams.spicymorenitta = {});
  var package$application = package$spicymorenitta.application || (package$spicymorenitta.application = {});
  package$application.ApplicationCall = ApplicationCall;
  Object.defineProperty(package$spicymorenitta, 'CookiesUtils', {
    get: CookiesUtils_getInstance
  });
  package$spicymorenitta.GlobalCount = GlobalCount;
  var package$routes = package$spicymorenitta.routes || (package$spicymorenitta.routes = {});
  package$routes.BaseRoute = BaseRoute;
  $$importsForInline$$['ktor-client-core'] = $module$ktor_client_core;
  $$importsForInline$$['kotlinx-serialization-runtime-js'] = $module$kotlinx_serialization_runtime_js;
  package$routes.DashboardRoute = DashboardRoute;
  Object.defineProperty(FanArtsRoute$ArtistSortingMethod, 'ALPHABETIC', {
    get: FanArtsRoute$ArtistSortingMethod$ALPHABETIC_getInstance
  });
  Object.defineProperty(FanArtsRoute$ArtistSortingMethod, 'ALPHABETIC_REVERSED', {
    get: FanArtsRoute$ArtistSortingMethod$ALPHABETIC_REVERSED_getInstance
  });
  Object.defineProperty(FanArtsRoute$ArtistSortingMethod, 'FAN_ART_COUNT', {
    get: FanArtsRoute$ArtistSortingMethod$FAN_ART_COUNT_getInstance
  });
  Object.defineProperty(FanArtsRoute$ArtistSortingMethod, 'BEST_ARTISTS', {
    get: FanArtsRoute$ArtistSortingMethod$BEST_ARTISTS_getInstance
  });
  FanArtsRoute.ArtistSortingMethod = FanArtsRoute$ArtistSortingMethod;
  Object.defineProperty(FanArtsRoute$FanArtSortingMethod, 'OLD_TO_NEW', {
    get: FanArtsRoute$FanArtSortingMethod$OLD_TO_NEW_getInstance
  });
  Object.defineProperty(FanArtsRoute$FanArtSortingMethod, 'NEW_TO_OLD', {
    get: FanArtsRoute$FanArtSortingMethod$NEW_TO_OLD_getInstance
  });
  FanArtsRoute.FanArtSortingMethod = FanArtsRoute$FanArtSortingMethod;
  package$routes.FanArtsRoute = FanArtsRoute;
  var package$guilds = package$routes.guilds || (package$routes.guilds = {});
  var package$dashboard = package$guilds.dashboard || (package$guilds.dashboard = {});
  package$dashboard.GeneralDashboardRoute = GeneralDashboardRoute;
  Object.defineProperty(package$dashboard, 'GuildDashboard', {
    get: GuildDashboard_getInstance
  });
  package$dashboard.createToggle_5sboq5$ = createToggle;
  package$dashboard.displayUnsavedAlert = displayUnsavedAlert;
  package$dashboard.hideUnsavedAlert = hideUnsavedAlert;
  package$dashboard.resetAnimation_lt8gi4$ = resetAnimation;
  package$dashboard.leftSidebarForGuildDashboard_6sikba$ = leftSidebarForGuildDashboard;
  var package$iframehack = package$dashboard.iframehack || (package$dashboard.iframehack = {});
  package$iframehack.IFrameGeneralDashboardRoute = IFrameGeneralDashboardRoute;
  package$routes.HomeRoute = HomeRoute;
  package$routes.leftSidebarForProfileDashboard_6sikba$ = leftSidebarForProfileDashboard;
  package$routes.UpdateNavbarSizePostRender = UpdateNavbarSizePostRender;
  Object.defineProperty(package$spicymorenitta, 'switchPageStart', {
    get: function () {
      return switchPageStart;
    },
    set: function (value) {
      switchPageStart = value;
    }
  });
  Object.defineProperty(package$spicymorenitta, 'pageCache', {
    get: function () {
      return pageCache;
    }
  });
  Object.defineProperty(package$spicymorenitta, 'ignoreCacheRequests', {
    get: function () {
      return ignoreCacheRequests;
    },
    set: function (value) {
      ignoreCacheRequests = value;
    }
  });
  Object.defineProperty(package$spicymorenitta, 'navbarIsSetup', {
    get: function () {
      return navbarIsSetup;
    },
    set: function (value) {
      navbarIsSetup = value;
    }
  });
  Object.defineProperty(package$spicymorenitta, 'http', {
    get: function () {
      return http;
    }
  });
  Object.defineProperty(package$spicymorenitta, 'locale', {
    get: get_locale,
    set: set_locale
  });
  Object.defineProperty(SpicyMorenitta, 'Companion', {
    get: SpicyMorenitta$Companion_getInstance
  });
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  package$spicymorenitta.SpicyMorenitta = SpicyMorenitta;
  package$spicymorenitta.main_kand9s$ = main;
  var package$trunfo = package$spicymorenitta.trunfo || (package$spicymorenitta.trunfo = {});
  Object.defineProperty(package$trunfo, 'Trunfo', {
    get: Trunfo_getInstance
  });
  Object.defineProperty(package$trunfo, 'TrunfoGame', {
    get: TrunfoGame_getInstance
  });
  var package$utils = package$spicymorenitta.utils || (package$spicymorenitta.utils = {});
  Object.defineProperty(package$utils, 'AdvertisementUtils', {
    get: AdvertisementUtils_getInstance
  });
  Object.defineProperty(package$utils, 'AuthUtils', {
    get: AuthUtils_getInstance
  });
  package$utils.select_hger2a$ = select_0;
  package$utils.selectAll_hger2a$ = selectAll;
  package$utils.onDOMReady_4bdym6$ = onDOMReady;
  package$utils.onClick_466r4r$ = onClick;
  package$utils.onScroll_nvde5v$ = onScroll;
  package$utils.onScroll_466r4r$ = onScroll_0;
  package$utils.onMouseOver_466r4r$ = onMouseOver;
  package$utils.onMouseOut_466r4r$ = onMouseOut;
  package$utils.onMouseEnter_466r4r$ = onMouseEnter;
  package$utils.onMouseLeave_466r4r$ = onMouseLeave;
  var package$extensions = package$utils.extensions || (package$utils.extensions = {});
  package$extensions.offset_ejp6nk$ = offset;
  package$extensions.width_ejp6nk$ = width;
  package$extensions.Offset = Offset;
  Object.defineProperty(FanArt, 'Companion', {
    get: FanArt$Companion_getInstance
  });
  Object.defineProperty(FanArt, '$serializer', {
    get: FanArt$$serializer_getInstance
  });
  package$utils.FanArt = FanArt;
  Object.defineProperty(FanArtArtist$Info, 'Companion', {
    get: FanArtArtist$Info$Companion_getInstance
  });
  Object.defineProperty(FanArtArtist$Info, '$serializer', {
    get: FanArtArtist$Info$$serializer_getInstance
  });
  FanArtArtist.Info = FanArtArtist$Info;
  Object.defineProperty(FanArtArtist$User, 'Companion', {
    get: FanArtArtist$User$Companion_getInstance
  });
  Object.defineProperty(FanArtArtist$User, '$serializer', {
    get: FanArtArtist$User$$serializer_getInstance
  });
  FanArtArtist.User = FanArtArtist$User;
  Object.defineProperty(FanArtArtist, 'Companion', {
    get: FanArtArtist$Companion_getInstance
  });
  Object.defineProperty(FanArtArtist, '$serializer', {
    get: FanArtArtist$$serializer_getInstance
  });
  package$utils.FanArtArtist = FanArtArtist;
  Object.defineProperty(GeneralConfig, 'Companion', {
    get: GeneralConfig$Companion_getInstance
  });
  Object.defineProperty(GeneralConfig, '$serializer', {
    get: GeneralConfig$$serializer_getInstance
  });
  package$utils.GeneralConfig = GeneralConfig;
  Object.defineProperty(GuildConfig, 'Companion', {
    get: GuildConfig$Companion_getInstance
  });
  Object.defineProperty(GuildConfig, '$serializer', {
    get: GuildConfig$$serializer_getInstance
  });
  package$utils.GuildConfig = GuildConfig;
  Object.defineProperty(BaseLocale, 'Companion', {
    get: BaseLocale$Companion_getInstance
  });
  Object.defineProperty(BaseLocale, '$serializer', {
    get: BaseLocale$$serializer_getInstance
  });
  var package$locale = package$utils.locale || (package$utils.locale = {});
  package$locale.BaseLocale = BaseLocale;
  package$utils.Logging = Logging;
  Object.defineProperty(TemmieDiscordGuild, 'Companion', {
    get: TemmieDiscordGuild$Companion_getInstance
  });
  Object.defineProperty(TemmieDiscordGuild, '$serializer', {
    get: TemmieDiscordGuild$$serializer_getInstance
  });
  package$utils.TemmieDiscordGuild = TemmieDiscordGuild;
  package$utils.TestSerializer = TestSerializer;
  Object.defineProperty(UserIdentification, 'Companion', {
    get: UserIdentification$Companion_getInstance
  });
  Object.defineProperty(UserIdentification, '$serializer', {
    get: UserIdentification$$serializer_getInstance
  });
  package$utils.UserIdentification = UserIdentification;
  package$utils.generateAd_3bhi8p$ = generateAd;
  Object.defineProperty(WebsiteUtils$UserPermissionLevel, 'OWNER', {
    get: WebsiteUtils$UserPermissionLevel$OWNER_getInstance
  });
  Object.defineProperty(WebsiteUtils$UserPermissionLevel, 'ADMINISTRATOR', {
    get: WebsiteUtils$UserPermissionLevel$ADMINISTRATOR_getInstance
  });
  Object.defineProperty(WebsiteUtils$UserPermissionLevel, 'MANAGER', {
    get: WebsiteUtils$UserPermissionLevel$MANAGER_getInstance
  });
  Object.defineProperty(WebsiteUtils$UserPermissionLevel, 'MEMBER', {
    get: WebsiteUtils$UserPermissionLevel$MEMBER_getInstance
  });
  WebsiteUtils.prototype.UserPermissionLevel = WebsiteUtils$UserPermissionLevel;
  Object.defineProperty(package$utils, 'WebsiteUtils', {
    get: WebsiteUtils_getInstance
  });
  var package$views = package$spicymorenitta.views || (package$spicymorenitta.views = {});
  package$views.BaseView = BaseView;
  package$views.FanArtsView = FanArtsView;
  Object.defineProperty(WebsiteThemeUtils$WebsiteTheme, 'DEFAULT', {
    get: WebsiteThemeUtils$WebsiteTheme$DEFAULT_getInstance
  });
  Object.defineProperty(WebsiteThemeUtils$WebsiteTheme, 'DARK_THEME', {
    get: WebsiteThemeUtils$WebsiteTheme$DARK_THEME_getInstance
  });
  WebsiteThemeUtils.prototype.WebsiteTheme = WebsiteThemeUtils$WebsiteTheme;
  Object.defineProperty(package$spicymorenitta, 'WebsiteThemeUtils', {
    get: WebsiteThemeUtils_getInstance
  });
  var package$ws = package$spicymorenitta.ws || (package$spicymorenitta.ws = {});
  package$ws.PingCommand = PingCommand;
  package$ws.WebSocketCommand = WebSocketCommand;
  BaseRoute.prototype.success_yhszz7$ = Logging.prototype.success_yhszz7$;
  BaseRoute.prototype.info_yhszz7$ = Logging.prototype.info_yhszz7$;
  BaseRoute.prototype.warn_yhszz7$ = Logging.prototype.warn_yhszz7$;
  BaseRoute.prototype.error_yhszz7$ = Logging.prototype.error_yhszz7$;
  BaseRoute.prototype.debug_yhszz7$ = Logging.prototype.debug_yhszz7$;
  SpicyMorenitta.prototype.debug_yhszz7$ = Logging.prototype.debug_yhszz7$;
  SpicyMorenitta.prototype.error_yhszz7$ = Logging.prototype.error_yhszz7$;
  SpicyMorenitta.prototype.info_yhszz7$ = Logging.prototype.info_yhszz7$;
  SpicyMorenitta.prototype.success_yhszz7$ = Logging.prototype.success_yhszz7$;
  SpicyMorenitta.prototype.warn_yhszz7$ = Logging.prototype.warn_yhszz7$;
  Trunfo.prototype.debug_yhszz7$ = Logging.prototype.debug_yhszz7$;
  Trunfo.prototype.error_yhszz7$ = Logging.prototype.error_yhszz7$;
  Trunfo.prototype.info_yhszz7$ = Logging.prototype.info_yhszz7$;
  Trunfo.prototype.success_yhszz7$ = Logging.prototype.success_yhszz7$;
  Trunfo.prototype.warn_yhszz7$ = Logging.prototype.warn_yhszz7$;
  AdvertisementUtils.prototype.success_yhszz7$ = Logging.prototype.success_yhszz7$;
  AdvertisementUtils.prototype.info_yhszz7$ = Logging.prototype.info_yhszz7$;
  AdvertisementUtils.prototype.warn_yhszz7$ = Logging.prototype.warn_yhszz7$;
  AdvertisementUtils.prototype.error_yhszz7$ = Logging.prototype.error_yhszz7$;
  AdvertisementUtils.prototype.debug_yhszz7$ = Logging.prototype.debug_yhszz7$;
  FanArt$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  FanArtArtist$Info$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  FanArtArtist$User$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  FanArtArtist$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  GeneralConfig$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  GuildConfig$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  BaseLocale$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  BaseLocale.prototype.success_yhszz7$ = Logging.prototype.success_yhszz7$;
  BaseLocale.prototype.info_yhszz7$ = Logging.prototype.info_yhszz7$;
  BaseLocale.prototype.warn_yhszz7$ = Logging.prototype.warn_yhszz7$;
  BaseLocale.prototype.error_yhszz7$ = Logging.prototype.error_yhszz7$;
  BaseLocale.prototype.debug_yhszz7$ = Logging.prototype.debug_yhszz7$;
  TemmieDiscordGuild$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  TestSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  UserIdentification$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  WebsiteUtils.prototype.success_yhszz7$ = Logging.prototype.success_yhszz7$;
  WebsiteUtils.prototype.info_yhszz7$ = Logging.prototype.info_yhszz7$;
  WebsiteUtils.prototype.warn_yhszz7$ = Logging.prototype.warn_yhszz7$;
  WebsiteUtils.prototype.error_yhszz7$ = Logging.prototype.error_yhszz7$;
  WebsiteUtils.prototype.debug_yhszz7$ = Logging.prototype.debug_yhszz7$;
  WebSocketCommand.prototype.success_yhszz7$ = Logging.prototype.success_yhszz7$;
  WebSocketCommand.prototype.info_yhszz7$ = Logging.prototype.info_yhszz7$;
  WebSocketCommand.prototype.warn_yhszz7$ = Logging.prototype.warn_yhszz7$;
  WebSocketCommand.prototype.error_yhszz7$ = Logging.prototype.error_yhszz7$;
  WebSocketCommand.prototype.debug_yhszz7$ = Logging.prototype.debug_yhszz7$;
  switchPageStart = 0.0;
  pageCache = LinkedHashMap_init();
  ignoreCacheRequests = false;
  navbarIsSetup = false;
  http = HttpClient(js.Js, http$lambda);
  main([]);
  Kotlin.defineModule('output', _);
  return _;
}(typeof output === 'undefined' ? {} : output, kotlin, this['kotlinx-html-js'], this['ktor-client-core'], this['kotlinx-serialization-runtime-js'], this['kotlinx-coroutines-core'], this['ktor-http']);

//# sourceMappingURL=output.js.map
