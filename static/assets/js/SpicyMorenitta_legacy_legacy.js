if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'SpicyMorenitta'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'SpicyMorenitta'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'SpicyMorenitta'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'SpicyMorenitta'.");
}
if (typeof this['kotlinx-serialization-runtime-js'] === 'undefined') {
  throw new Error("Error loading module 'SpicyMorenitta'. Its dependency 'kotlinx-serialization-runtime-js' was not found. Please, check whether 'kotlinx-serialization-runtime-js' is loaded prior to 'SpicyMorenitta'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'SpicyMorenitta'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'SpicyMorenitta'.");
}
var SpicyMorenitta = function (_, Kotlin, $module$kotlinx_html_js, $module$kotlinx_serialization_runtime_js, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var equals = Kotlin.equals;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var appendHTML = $module$kotlinx_html_js.kotlinx.html.stream.appendHTML_94plub$;
  var Unit = Kotlin.kotlin.Unit;
  var h2 = $module$kotlinx_html_js.kotlinx.html.h2_eh5gi3$;
  var p = $module$kotlinx_html_js.kotlinx.html.p_8pggrc$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var set_style = $module$kotlinx_html_js.kotlinx.html.set_style_ueiko3$;
  var ins = $module$kotlinx_html_js.kotlinx.html.ins_g1dqgd$;
  var script = $module$kotlinx_html_js.kotlinx.html.script_fglb7v$;
  var img = $module$kotlinx_html_js.kotlinx.html.img_evw26v$;
  var hr = $module$kotlinx_html_js.kotlinx.html.hr_17yvwq$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.div_59el9d$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var throwUPAE = Kotlin.throwUPAE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var contains = Kotlin.kotlin.collections.contains_mjy6jw$;
  var throwCCE = Kotlin.throwCCE;
  var TingleModal = tingle.modal;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var option = $module$kotlinx_html_js.kotlinx.html.option_xfiiwk$;
  var select = $module$kotlinx_html_js.kotlinx.html.select_9klr40$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var input_0 = $module$kotlinx_html_js.kotlinx.html.input_e1g74z$;
  var clear = Kotlin.kotlin.dom.clear_asww5s$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var toMutableMap = Kotlin.kotlin.collections.toMutableMap_abgq59$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var joinToString = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var toString = Kotlin.toString;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var Pair = Kotlin.kotlin.Pair;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var HTMLTag = $module$kotlinx_html_js.kotlinx.html.HTMLTag;
  var HtmlInlineTag = $module$kotlinx_html_js.kotlinx.html.HtmlInlineTag;
  var visit = $module$kotlinx_html_js.kotlinx.html.visit_xwv8ym$;
  var i = $module$kotlinx_html_js.kotlinx.html.i_5g1p9k$;
  var th = $module$kotlinx_html_js.kotlinx.html.th_bncpyi$;
  var tr = $module$kotlinx_html_js.kotlinx.html.tr_lut1f9$;
  var code = $module$kotlinx_html_js.kotlinx.html.code_en26pm$;
  var td = $module$kotlinx_html_js.kotlinx.html.td_vlzo05$;
  var thead = $module$kotlinx_html_js.kotlinx.html.thead_j1nulr$;
  var table = $module$kotlinx_html_js.kotlinx.html.table_dmqmme$;
  var details = $module$kotlinx_html_js.kotlinx.html.details_d9zf4h$;
  var ShowdownConverter = showdown.Converter;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var slice = Kotlin.kotlin.text.slice_fc3b62$;
  var unsafe = $module$kotlinx_html_js.kotlinx.html.unsafe_vdrn79$;
  var a = $module$kotlinx_html_js.kotlinx.html.a_gu26kr$;
  var span = $module$kotlinx_html_js.kotlinx.html.span_6djfml$;
  var RegexOption = Kotlin.kotlin.text.RegexOption;
  var Regex_init = Kotlin.kotlin.text.Regex_init_sb3q2$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var numberToInt = Kotlin.numberToInt;
  var Any = Object;
  var JSON_0 = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.json.JSON;
  var contains_0 = Kotlin.kotlin.text.contains_li3zpu$;
  var trimMargin = Kotlin.kotlin.text.trimMargin_rjktp$;
  var h3 = $module$kotlinx_html_js.kotlinx.html.h3_agelx2$;
  var pre = $module$kotlinx_html_js.kotlinx.html.pre_pcyp7f$;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var toShort = Kotlin.toShort;
  var mutableMapOf = Kotlin.kotlin.collections.mutableMapOf_qfcya0$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var SerialClassDescImpl = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.SerialClassDescImpl;
  var internal = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal;
  var LinkedHashMapSerializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.LinkedHashMapSerializer;
  var UnknownFieldException = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.UnknownFieldException;
  var KSerializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.KSerializer;
  var MissingFieldException = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException;
  var h1 = $module$kotlinx_html_js.kotlinx.html.h1_qzc46n$;
  var img_0 = $module$kotlinx_html_js.kotlinx.html.img_45d5o1$;
  var h2_0 = $module$kotlinx_html_js.kotlinx.html.h2_wky4k0$;
  var p_0 = $module$kotlinx_html_js.kotlinx.html.p_7ents2$;
  var append = $module$kotlinx_html_js.kotlinx.html.dom.append_k9bwru$;
  var Random = Kotlin.kotlin.random.Random_za3lpa$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var distinct = Kotlin.kotlin.collections.distinct_7wnvza$;
  var tr_0 = $module$kotlinx_html_js.kotlinx.html.tr_7wec05$;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var hr_0 = $module$kotlinx_html_js.kotlinx.html.hr_ks0ewg$;
  var EnumSerializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.EnumSerializer;
  var ArrayListSerializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ArrayListSerializer;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var get_classes = $module$kotlinx_html_js.kotlinx.html.get_classes_fxodxh$;
  var plus = Kotlin.kotlin.collections.plus_xfiyik$;
  var set_classes = $module$kotlinx_html_js.kotlinx.html.set_classes_njy09m$;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var h1_0 = $module$kotlinx_html_js.kotlinx.html.h1_vmej1w$;
  var button = $module$kotlinx_html_js.kotlinx.html.button_i4xb7r$;
  var ReferenceArraySerializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ReferenceArraySerializer;
  var String_0 = String;
  var label = $module$kotlinx_html_js.kotlinx.html.label_yd75js$;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_us0mfu$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var L20000 = Kotlin.Long.fromInt(20000);
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var asList = Kotlin.org.w3c.dom.asList_kt9thq$;
  var first = Kotlin.kotlin.collections.first_us0mfu$;
  var first_0 = Kotlin.kotlin.collections.first_2p1efm$;
  var createHTML = $module$kotlinx_html_js.kotlinx.html.stream.createHTML_dqye30$;
  var textArea = $module$kotlinx_html_js.kotlinx.html.textArea_b1tfd9$;
  var numberInput = $module$kotlinx_html_js.kotlinx.html.numberInput_ap9uf6$;
  var L1000 = Kotlin.Long.fromInt(1000);
  var delay = $module$kotlinx_coroutines_core.kotlinx.coroutines.delay_s8cxhz$;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var unboxChar = Kotlin.unboxChar;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var dropLast = Kotlin.kotlin.text.dropLast_6ic1pp$;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var L0 = Kotlin.Long.ZERO;
  var iterator_0 = Kotlin.kotlin.js.iterator_s8jyvk$;
  var L_1 = Kotlin.Long.NEG_ONE;
  LoriDashboard$SUMMARY.prototype = Object.create(HTMLTag.prototype);
  LoriDashboard$SUMMARY.prototype.constructor = LoriDashboard$SUMMARY;
  JsonObject.prototype = Object.create(JsonElement.prototype);
  JsonObject.prototype.constructor = JsonObject;
  FanArtsView$SocialNetwork.prototype = Object.create(Enum.prototype);
  FanArtsView$SocialNetwork.prototype.constructor = FanArtsView$SocialNetwork;
  TimersView$Timer$TimerEffect$TimerEffectType.prototype = Object.create(Enum.prototype);
  TimersView$Timer$TimerEffect$TimerEffectType.prototype.constructor = TimersView$Timer$TimerEffect$TimerEffectType;
  CounterThemes.prototype = Object.create(Enum.prototype);
  CounterThemes.prototype.constructor = CounterThemes;
  ModerationConfig$PunishmentAction.prototype = Object.create(Enum.prototype);
  ModerationConfig$PunishmentAction.prototype.constructor = ModerationConfig$PunishmentAction;
  CommandCategory.prototype = Object.create(Enum.prototype);
  CommandCategory.prototype.constructor = CommandCategory;
  LorittaPartner$Keyword.prototype = Object.create(Enum.prototype);
  LorittaPartner$Keyword.prototype.constructor = LorittaPartner$Keyword;
  LorittaPartner$Language.prototype = Object.create(Enum.prototype);
  LorittaPartner$Language.prototype.constructor = LorittaPartner$Language;
  LorittaPartner$Type.prototype = Object.create(Enum.prototype);
  LorittaPartner$Type.prototype.constructor = LorittaPartner$Type;
  function CommandsView() {
    CommandsView_instance = this;
  }
  function CommandsView$start$lambda$lambda$addCommandInformation$lambda$lambda(closure$category) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(get_legacyLocale().get_25kzsl$(closure$category.fancyTitle, []));
      return Unit;
    };
  }
  function CommandsView$start$lambda$lambda$addCommandInformation$lambda$lambda_0(closure$category) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(get_legacyLocale().get_25kzsl$(closure$category.description, []));
      return Unit;
    };
  }
  function CommandsView$start$lambda$lambda$addCommandInformation$lambda(closure$category) {
    return function ($receiver) {
      h2($receiver, 'sectionHeader', CommandsView$start$lambda$lambda$addCommandInformation$lambda$lambda(closure$category));
      p($receiver, void 0, CommandsView$start$lambda$lambda$addCommandInformation$lambda$lambda_0(closure$category));
      return Unit;
    };
  }
  function CommandsView$start$lambda$lambda$addCommandInformation(closure$category, this$) {
    return function () {
      div(this$, 'sectionText', CommandsView$start$lambda$lambda$addCommandInformation$lambda(closure$category));
    };
  }
  function CommandsView$start$lambda$lambda$lambda$lambda($receiver) {
    set_style($receiver, 'display:block');
    $receiver.attributes.put_xwzc9p$('data-ad-client', 'ca-pub-9989170954243288');
    $receiver.attributes.put_xwzc9p$('data-ad-slot', '4611100335');
    $receiver.attributes.put_xwzc9p$('data-ad-format', 'auto');
    return Unit;
  }
  function CommandsView$start$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('(adsbygoogle = window.adsbygoogle || []).push({});');
    return Unit;
  }
  function CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    set_style($receiver, 'width: 100%;');
    return Unit;
  }
  function CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda(closure$image) {
    return function ($receiver) {
      img($receiver, null, closure$image.v, 'animate-on-scroll-left is-invisible', CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$addCommandInformation) {
    return function ($receiver) {
      closure$addCommandInformation();
      return Unit;
    };
  }
  function CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$addCommandInformation) {
    return function ($receiver) {
      closure$addCommandInformation();
      return Unit;
    };
  }
  function CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    set_style($receiver, 'width: 100%;');
    return Unit;
  }
  function CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$image) {
    return function ($receiver) {
      img($receiver, null, closure$image.v, 'animate-on-scroll-right is-invisible', CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function CommandsView$start$lambda$lambda$lambda$lambda$lambda(closure$index, closure$image, closure$addCommandInformation) {
    return function ($receiver) {
      if (closure$index % 2 === 0) {
        div($receiver, 'pure-u-1 pure-u-md-1-4', CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda(closure$image));
        div($receiver, 'pure-u-1 pure-u-md-3-4', CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$addCommandInformation));
      }
       else {
        div($receiver, 'pure-u-1 pure-u-md-3-4', CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$addCommandInformation));
        div($receiver, 'pure-u-1 pure-u-md-1-4', CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$image));
      }
      return Unit;
    };
  }
  function CommandsView$start$lambda$lambda$lambda$lambda_1(closure$index, closure$image, closure$addCommandInformation) {
    return function ($receiver) {
      div($receiver, 'pure-g vertically-centered-content', CommandsView$start$lambda$lambda$lambda$lambda$lambda(closure$index, closure$image, closure$addCommandInformation));
      return Unit;
    };
  }
  function CommandsView$start$lambda$lambda$lambda$lambda_2($receiver) {
    set_style($receiver, 'display:block');
    $receiver.attributes.put_xwzc9p$('data-ad-client', 'ca-pub-9989170954243288');
    $receiver.attributes.put_xwzc9p$('data-ad-slot', '4611100335');
    $receiver.attributes.put_xwzc9p$('data-ad-format', 'auto');
    return Unit;
  }
  function CommandsView$start$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.unaryPlus_pdl1vz$('(adsbygoogle = window.adsbygoogle || []).push({});');
    return Unit;
  }
  function CommandsView$start$lambda$lambda$lambda$lambda_4($receiver) {
    return Unit;
  }
  function CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$command, closure$usage) {
    return function ($receiver) {
      set_style($receiver, 'font-weight: bold; font-size: 1.1em;');
      $receiver.unaryPlus_pdl1vz$('+' + closure$command.label + ' ' + closure$usage.v);
      return Unit;
    };
  }
  function CommandsView$start$lambda$lambda$lambda$lambda$lambda_0(closure$command) {
    return function ($receiver) {
      var tmp$;
      var usage = {v: (tmp$ = closure$command.usage) != null ? tmp$ : ''};
      p($receiver, void 0, CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$command, usage));
      return Unit;
    };
  }
  function CommandsView$start$lambda$lambda$lambda$lambda_5(closure$filteredCommands) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$filteredCommands.iterator();
      while (tmp$.hasNext()) {
        var command = tmp$.next();
        div($receiver, 'pure-u-1 pure-u-md-1-2', CommandsView$start$lambda$lambda$lambda$lambda$lambda_0(command));
      }
      return Unit;
    };
  }
  function CommandsView$start$lambda$lambda$lambda(closure$index, closure$image, closure$addCommandInformation, closure$filteredCommands) {
    return function ($receiver) {
      ins($receiver, 'adsbygoogle', CommandsView$start$lambda$lambda$lambda$lambda);
      script($receiver, void 0, void 0, CommandsView$start$lambda$lambda$lambda$lambda_0);
      div($receiver, 'vertically-centered-content', CommandsView$start$lambda$lambda$lambda$lambda_1(closure$index, closure$image, closure$addCommandInformation));
      ins($receiver, 'adsbygoogle', CommandsView$start$lambda$lambda$lambda$lambda_2);
      script($receiver, void 0, void 0, CommandsView$start$lambda$lambda$lambda$lambda_3);
      hr($receiver, void 0, CommandsView$start$lambda$lambda$lambda$lambda_4);
      div($receiver, 'pure-g', CommandsView$start$lambda$lambda$lambda$lambda_5(closure$filteredCommands));
      return Unit;
    };
  }
  function CommandsView$start$lambda$lambda(closure$category, closure$index, closure$image, closure$filteredCommands) {
    return function ($receiver) {
      var addCommandInformation = CommandsView$start$lambda$lambda$addCommandInformation(closure$category, $receiver);
      div($receiver, 'contentWrapper', CommandsView$start$lambda$lambda$lambda(closure$index, closure$image, addCommandInformation, closure$filteredCommands));
      return Unit;
    };
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function CommandsView$start$lambda(data, b, c) {
    var tmp$;
    LoriDashboard_getInstance().hideLoadingBar();
    var commands = toJson(data);
    tmp$ = CommandCategory$values();
    for (var index = 0; index !== tmp$.length; ++index) {
      var category = tmp$[index];
      var tmp$_0;
      var destination = ArrayList_init();
      var tmp$_1;
      for (tmp$_1 = 0; tmp$_1 !== commands.length; ++tmp$_1) {
        var element = commands[tmp$_1];
        if (equals(element.category.toString(), category.toString()))
          destination.add_11rb$(element);
      }
      var filteredCommands = destination;
      var stringBuilder = StringBuilder_init();
      switch (category.name) {
        case 'SOCIAL':
          tmp$_0 = get_loriUrl() + 'assets/img/social.png';
          break;
        case 'POKEMON':
          tmp$_0 = get_loriUrl() + 'assets/img/pokemon.png';
          break;
        case 'MINECRAFT':
          tmp$_0 = get_loriUrl() + 'assets/img/loritta_pudim.png';
          break;
        case 'FUN':
          tmp$_0 = get_loriUrl() + 'assets/img/vieirinha.png';
          break;
        case 'UTILS':
          tmp$_0 = get_loriUrl() + 'assets/img/utils.png';
          break;
        case 'MUSIC':
          tmp$_0 = get_loriUrl() + 'assets/img/loritta_headset.png';
          break;
        case 'ANIME':
          tmp$_0 = get_loriUrl() + 'assets/img/loritta_anime.png';
          break;
        default:tmp$_0 = get_loriUrl() + 'assets/img/loritta_gabizinha_v1.png';
          break;
      }
      var image = {v: tmp$_0};
      div_0(appendHTML(stringBuilder), index % 2 === 0 ? 'evenWrapper' : 'oddWrapper', CommandsView$start$lambda$lambda(category, index, image, filteredCommands));
      println(category);
      jq('#wrapper').append(stringBuilder.toString());
    }
    return Unit;
  }
  CommandsView.prototype.start = function () {
    LoriDashboard_getInstance().showLoadingBar_pdl1vj$('Carregando...');
    jQuery.post(get_loriUrl() + 'api/v1/misc/get-commands', CommandsView$start$lambda);
  };
  CommandsView.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CommandsView',
    interfaces: []
  };
  var CommandsView_instance = null;
  function CommandsView_getInstance() {
    if (CommandsView_instance === null) {
      new CommandsView();
    }
    return CommandsView_instance;
  }
  function ConfigureAutoroleView() {
    ConfigureAutoroleView_instance = this;
    this.serverConfig_jibg2x$_0 = this.serverConfig_jibg2x$_0;
  }
  Object.defineProperty(ConfigureAutoroleView.prototype, 'serverConfig', {
    get: function () {
      if (this.serverConfig_jibg2x$_0 == null)
        return throwUPAE('serverConfig');
      return this.serverConfig_jibg2x$_0;
    },
    set: function (serverConfig) {
      this.serverConfig_jibg2x$_0 = serverConfig;
    }
  });
  function ConfigureAutoroleView$start$lambda$ObjectLiteral() {
  }
  ConfigureAutoroleView$start$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function ConfigureAutoroleView$start$lambda$ObjectLiteral_0() {
  }
  ConfigureAutoroleView$start$lambda$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function ConfigureAutoroleView$start$lambda$lambda(str) {
    return str;
  }
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var wrapFunction = Kotlin.wrapFunction;
  var mapNotNullTo$lambda = wrapFunction(function () {
    return function (closure$transform, closure$destination) {
      return function (element) {
        var tmp$;
        if ((tmp$ = closure$transform(element)) != null) {
          closure$destination.add_11rb$(tmp$);
        }
        return Unit;
      };
    };
  });
  function ConfigureAutoroleView$start$lambda(this$ConfigureAutoroleView) {
    return function (it) {
      var tmp$;
      this$ConfigureAutoroleView.serverConfig = LoriDashboard_getInstance().loadServerConfig();
      var optionData = ArrayList_init();
      var $receiver = this$ConfigureAutoroleView.serverConfig.roles;
      var destination = ArrayList_init();
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
        var element = $receiver[tmp$_0];
        if (!element.isPublicRole)
          destination.add_11rb$(element);
      }
      tmp$ = destination.iterator();
      while (tmp$.hasNext()) {
        var it_0 = tmp$.next();
        var option = new ConfigureAutoroleView$start$lambda$ObjectLiteral();
        option.id = it_0.id;
        var text = '<span style=' + '"' + 'font-weight: 600;' + '"' + '>' + it_0.name + '<\/span>';
        if (it_0.color != null) {
          text = '<span style=' + '"' + 'font-weight: 600; color: rgb(' + it_0.color.red + ', ' + it_0.color.green + ', ' + it_0.color.blue + ')' + '"' + '>' + it_0.name + '<\/span>';
        }
        option.text = text;
        if (!it_0.canInteract || it_0.isManaged) {
          if (it_0.isManaged) {
            option.text = text + ' <span class=' + '"' + 'keyword' + '"' + ' style=' + '"' + 'background-color: rgb(225, 149, 23);' + '"' + '>' + get_legacyLocale().get_25kzsl$('DASHBOARD_RoleByIntegration', []) + '<\/span>';
          }
           else {
            option.text = text + ' <span class=' + '"' + 'keyword' + '"' + ' style=' + '"' + 'background-color: rgb(231, 76, 60);' + '"' + '>' + get_legacyLocale().get_25kzsl$('DASHBOARD_NoPermission', []) + '<\/span>';
          }
        }
        optionData.add_11rb$(option);
      }
      var options = new ConfigureAutoroleView$start$lambda$ObjectLiteral_0();
      options.data = copyToArray(optionData);
      options.escapeMarkup = ConfigureAutoroleView$start$lambda$lambda;
      jq('#chooseRole').select2(options);
      var $receiver_0 = this$ConfigureAutoroleView.serverConfig.autoroleConfig.roles;
      var destination_0 = ArrayList_init();
      var tmp$_1;
      loop_label: for (tmp$_1 = 0; tmp$_1 !== $receiver_0.length; ++tmp$_1) {
        var element_0 = $receiver_0[tmp$_1];
        var tmp$_0_0;
        var $receiver_1 = this$ConfigureAutoroleView.serverConfig.roles;
        var firstOrNull$result;
        firstOrNull$break: do {
          var tmp$_2;
          for (tmp$_2 = 0; tmp$_2 !== $receiver_1.length; ++tmp$_2) {
            var element_1 = $receiver_1[tmp$_2];
            if (equals(element_1.id, element_0)) {
              firstOrNull$result = element_1;
              break firstOrNull$break;
            }
          }
          firstOrNull$result = null;
        }
         while (false);
        if ((tmp$_0_0 = firstOrNull$result) != null) {
          destination_0.add_11rb$(tmp$_0_0);
        }
      }
      var roleList = destination_0;
      var tmp$_3;
      tmp$_3 = roleList.iterator();
      while (tmp$_3.hasNext()) {
        var element_2 = tmp$_3.next();
        this$ConfigureAutoroleView.addRoleToAutoroleList_xat1sd$(element_2);
      }
      LoriDashboard_getInstance().applyBlur_iiwsaa$('#hiddenIfDisabled', '#cmn-toggle-1');
      if (!contains(this$ConfigureAutoroleView.serverConfig.permissions, 'ADMINISTRATOR') && !contains(this$ConfigureAutoroleView.serverConfig.permissions, 'MANAGE_ROLES')) {
        LoriDashboard_getInstance().enableBlur_61zpoe$('#autoroleConfigurationWrapper');
        jq('#requiresPermission').html(get_legacyLocale().get_25kzsl$('DASHBOARD_HeyINeedPermission', ['<b>' + get_legacyLocale().get_25kzsl$('PERMISSION_MANAGE_ROLES', []) + '<\/b>']));
      }
      return Unit;
    };
  }
  ConfigureAutoroleView.prototype.start = function () {
    document.addEventListener('DOMContentLoaded', ConfigureAutoroleView$start$lambda(this));
  };
  function ConfigureAutoroleView$addRoleToAutoroleList$lambda(closure$tr) {
    return function (it) {
      closure$tr.remove();
      return Unit;
    };
  }
  ConfigureAutoroleView.prototype.addRoleToAutoroleList_xat1sd$ = function (role) {
    var td = jq('<td>').attr('role-id', role.id).addClass('role-entry');
    var roleSpan = jq('<span>').text('@' + role.name).addClass('discord-mention');
    if (role.color != null) {
      roleSpan.css('color', 'rgb(' + role.color.red + ', ' + role.color.green + ', ' + role.color.blue + ')');
      roleSpan.css('background-color', 'rgba(' + role.color.red + ', ' + role.color.green + ', ' + role.color.blue + ', 0.298039)');
    }
    td.append(roleSpan);
    var tr = jq('<tr>').append(td);
    tr.click(ConfigureAutoroleView$addRoleToAutoroleList$lambda(tr));
    jq('#roleTable').append(tr);
  };
  function ConfigureAutoroleView$addRoleFromSelection$lambda(closure$modal) {
    return function () {
      closure$modal.close();
      window.location.reload();
      return Unit;
    };
  }
  function ConfigureAutoroleView$addRoleFromSelection$lambda_0(closure$modal) {
    return function () {
      closure$modal.close();
      return Unit;
    };
  }
  ConfigureAutoroleView.prototype.addRoleFromSelection = function () {
    var tmp$;
    var roleId = typeof (tmp$ = jq('#chooseRole option:selected').val()) === 'string' ? tmp$ : throwCCE();
    println('Adding role ' + roleId + ' to the selection...');
    var $receiver = this.serverConfig.roles;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
        var element = $receiver[tmp$_0];
        if (equals(element.id, roleId)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    var role = firstOrNull$result;
    if (role != null) {
      if (role.isManaged || !role.canInteract) {
        var modal = new TingleModal(new TingleOptions_0(true, void 0, void 0, void 0, ['tingle-modal--overflow']));
        if (role.isManaged) {
          modal.setContent(jq('<div>').append(jq('<div>').addClass('category-name').text(get_legacyLocale().get_25kzsl$('DASHBOARD_RoleByIntegration', []))).append(jq('<div>').css('text-align', 'center').append(jq('<p>').text('Cargos criados por integra\xE7\xF5es (por exemplo: ao adicionar um bot) n\xE3o podem ser utilizados para dar cargos para outros membros!'))).html());
        }
         else {
          modal.setContent(jq('<div>').append(jq('<div>').addClass('category-name').text(get_legacyLocale().get_25kzsl$('DASHBOARD_NoPermission', []))).append(jq('<div>').css('text-align', 'center').append(jq('<img>').attr('src', 'https://mrpowergamerbr.com/uploads/2018-06-16_19-37-17.gif'))).append(jq('<div>').css('text-align', 'center').append(jq('<p>').text('Atualmente eu n\xE3o consigo dar o cargo que voc\xEA deseja porque eu n\xE3o tenho permiss\xE3o para isto... \uD83D\uDE2D')).append(jq('<p>').text('Para eu conseguir dar este cargo, mova o meu cargo para acima do cargo que voc\xEA deseja dar na lista de cargos do seu Discord!'))).html());
          modal.addFooterBtn('<i class="far fa-thumbs-up"><\/i> J\xE1 arrumei!', 'button-discord button-discord-info pure-button button-discord-modal', ConfigureAutoroleView$addRoleFromSelection$lambda(modal));
        }
        modal.addFooterBtn('<i class="fas fa-times"><\/i> Fechar', 'button-discord pure-button button-discord-modal button-discord-modal-secondary-action', ConfigureAutoroleView$addRoleFromSelection$lambda_0(modal));
        modal.open();
        return;
      }
      this.addRoleToAutoroleList_xat1sd$(role);
    }
  };
  function ConfigureAutoroleView$prepareSave$lambda$lambda(closure$roles) {
    return function (index, elem) {
      var el = jQuery(elem);
      var entry = el.find('.role-entry');
      return closure$roles.add_11rb$(entry.attr('role-id'));
    };
  }
  function ConfigureAutoroleView$prepareSave$lambda(payload) {
    var tmp$;
    var roles = ArrayList_init();
    var rolesVoteRewards = ArrayList_init();
    jq('#roleTable').children().each(ConfigureAutoroleView$prepareSave$lambda$lambda(roles));
    payload['roles'] = roles;
    payload['giveRolesAfter'] = toIntOrNull((Kotlin.isType(tmp$ = page.getElementById_61zpoe$('give-roles-after'), HTMLInputElement) ? tmp$ : throwCCE()).value);
    payload['rolesVoteRewards'] = rolesVoteRewards;
    return Unit;
  }
  ConfigureAutoroleView.prototype.prepareSave = function () {
    SaveStuff_getInstance().prepareSave('autorole', ConfigureAutoroleView$prepareSave$lambda);
  };
  ConfigureAutoroleView.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ConfigureAutoroleView',
    interfaces: []
  };
  var ConfigureAutoroleView_instance = null;
  function ConfigureAutoroleView_getInstance() {
    if (ConfigureAutoroleView_instance === null) {
      new ConfigureAutoroleView();
    }
    return ConfigureAutoroleView_instance;
  }
  function ConfigureEconomyView() {
    ConfigureEconomyView_instance = this;
  }
  function ConfigureEconomyView$start$lambda$lambda$lambda(closure$modal) {
    return function () {
      closure$modal.close();
      return Unit;
    };
  }
  function ConfigureEconomyView$start$lambda$lambda$lambda_0(closure$modal) {
    return function () {
      closure$modal.close();
      return Unit;
    };
  }
  function ConfigureEconomyView$start$lambda$lambda(it) {
    var modal = new TingleModal(new TingleOptions_0(true, void 0, void 0, void 0, ['tingle-modal--overflow']));
    modal.addFooterBtn('<i class="fas fa-plus"><\/i> Adicionar', 'button-discord button-discord-info pure-button button-discord-modal', ConfigureEconomyView$start$lambda$lambda$lambda(modal));
    modal.addFooterBtn('<i class="fas fa-times"><\/i> Cancelar', 'button-discord pure-button button-discord-modal button-discord-modal-secondary-action', ConfigureEconomyView$start$lambda$lambda$lambda_0(modal));
    var template = jq('#new-item-modal-template').clone();
    template.find('.sectionHeader').text('Novo Item');
    modal.setContent(template.html());
    modal.open();
    return Unit;
  }
  function ConfigureEconomyView$start$lambda(it) {
    var serverConfig = LoriDashboard_getInstance().loadServerConfig();
    LoriDashboard_getInstance().applyBlur_iiwsaa$('#hiddenIfDisabled', '#cmn-toggle-1');
    LoriDashboard_getInstance().applyBlur_iiwsaa$('#hiddenIfDisabled2', '#cmn-toggle-2');
    var addShopItemObj = jq('#add-new-shop-item');
    var customCurrencyNameObj = jq('#customCurrencyName');
    var exchangeRateObj = jq('#exchangeRate');
    exchangeRateObj.change();
    addShopItemObj.click(ConfigureEconomyView$start$lambda$lambda);
    return Unit;
  }
  ConfigureEconomyView.prototype.start = function () {
    document.addEventListener('DOMContentLoaded', ConfigureEconomyView$start$lambda);
  };
  function ConfigureEconomyView$prepareSave$lambda(it) {
    var tmp$;
    var enableDreamExchange = typeof (tmp$ = it['enableDreamExchange']) === 'boolean' ? tmp$ : throwCCE();
    delete(it['enableDreamExchange']);
    if (!enableDreamExchange)
      it['exchangeRate'] = null;
    return Unit;
  }
  ConfigureEconomyView.prototype.prepareSave = function () {
    SaveStuff_getInstance().prepareSave('economy', ConfigureEconomyView$prepareSave$lambda);
  };
  ConfigureEconomyView.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ConfigureEconomyView',
    interfaces: []
  };
  var ConfigureEconomyView_instance = null;
  function ConfigureEconomyView_getInstance() {
    if (ConfigureEconomyView_instance === null) {
      new ConfigureEconomyView();
    }
    return ConfigureEconomyView_instance;
  }
  function ConfigureMemberCounterView() {
    ConfigureMemberCounterView_instance = this;
    this.serverConfig_m42ga0$_0 = this.serverConfig_m42ga0$_0;
  }
  Object.defineProperty(ConfigureMemberCounterView.prototype, 'serverConfig', {
    get: function () {
      if (this.serverConfig_m42ga0$_0 == null)
        return throwUPAE('serverConfig');
      return this.serverConfig_m42ga0$_0;
    },
    set: function (serverConfig) {
      this.serverConfig_m42ga0$_0 = serverConfig;
    }
  });
  function ConfigureMemberCounterView$start$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Tema do contador de membros');
    return Unit;
  }
  function ConfigureMemberCounterView$start$lambda$lambda$lambda$lambda(closure$memberCounterConfig, closure$theme) {
    return function ($receiver) {
      if (closure$memberCounterConfig != null) {
        $receiver.selected = equals(closure$theme.name, closure$memberCounterConfig.theme);
      }
      $receiver.value = closure$theme.name;
      $receiver.unaryPlus_pdl1vz$(get_locale().get_25kzsl$(closure$theme.localizedName, []));
      return Unit;
    };
  }
  function ConfigureMemberCounterView$start$lambda$lambda$lambda_0(closure$memberCounterConfig) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      tmp$ = CounterThemes$values();
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var theme = tmp$[tmp$_0];
        option($receiver, void 0, ConfigureMemberCounterView$start$lambda$lambda$lambda$lambda(closure$memberCounterConfig, theme));
      }
      return Unit;
    };
  }
  function ConfigureMemberCounterView$start$lambda$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('Preenchimento com Zeros');
    return Unit;
  }
  function ConfigureMemberCounterView$start$lambda$lambda$lambda_2(closure$memberCounterConfig) {
    return function ($receiver) {
      var tmp$;
      $receiver.min = '1';
      $receiver.max = '10';
      $receiver.value = ((tmp$ = closure$memberCounterConfig != null ? closure$memberCounterConfig.padding : null) != null ? tmp$ : 5).toString();
      return Unit;
    };
  }
  function ConfigureMemberCounterView$start$lambda$lambda$lambda_3($receiver) {
    $receiver.unaryPlus_pdl1vz$('Aqui ir\xE1 ficar a preview do contador, quando existir... algum dia');
    return Unit;
  }
  function ConfigureMemberCounterView$start$lambda$lambda(closure$memberCounterConfig) {
    return function ($receiver) {
      div($receiver, 'flavourText', ConfigureMemberCounterView$start$lambda$lambda$lambda);
      select($receiver, 'counter-theme', ConfigureMemberCounterView$start$lambda$lambda$lambda_0(closure$memberCounterConfig));
      div($receiver, 'flavourText', ConfigureMemberCounterView$start$lambda$lambda$lambda_1);
      input_0($receiver, InputType.number, void 0, void 0, void 0, 'counter-padding', ConfigureMemberCounterView$start$lambda$lambda$lambda_2(closure$memberCounterConfig));
      div($receiver, 'counter-preview', ConfigureMemberCounterView$start$lambda$lambda$lambda_3);
      return Unit;
    };
  }
  function ConfigureMemberCounterView$start$lambda$lambda_0(closure$selectThemeElement, closure$counterPreviewElement, closure$counterPaddingElement) {
    return function () {
      println('Something changed, wow! So much fun!');
      var theme = CounterThemes$valueOf(closure$selectThemeElement.value);
      clear(closure$counterPreviewElement);
      var padding = toInt(closure$counterPaddingElement.value);
      var counterBuilder5 = CounterUtils_getInstance().generatePrettyCounterHtml_829qsp$(5, theme, padding);
      appendBuilder(closure$counterPreviewElement, counterBuilder5);
      var counterBuilder10 = CounterUtils_getInstance().generatePrettyCounterHtml_829qsp$(10, theme, padding);
      appendBuilder(closure$counterPreviewElement, counterBuilder10);
      var counterBuilder250 = CounterUtils_getInstance().generatePrettyCounterHtml_829qsp$(250, theme, padding);
      appendBuilder(closure$counterPreviewElement, counterBuilder250);
      var counterBuilderAllChars = CounterUtils_getInstance().generatePrettyCounterHtml_829qsp$(1234567890, theme, padding);
      appendBuilder(closure$counterPreviewElement, counterBuilderAllChars);
      return Unit;
    };
  }
  function ConfigureMemberCounterView$start$lambda$lambda_1(closure$callback) {
    return function (it) {
      closure$callback();
      return Unit;
    };
  }
  function ConfigureMemberCounterView$start$lambda$lambda_2(closure$callback) {
    return function (it) {
      closure$callback();
      return Unit;
    };
  }
  function ConfigureMemberCounterView$start$lambda(this$ConfigureMemberCounterView) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
      this$ConfigureMemberCounterView.serverConfig = LoriDashboard_getInstance().loadServerConfig();
      var textChannels = jq('#member-counter-list');
      tmp$ = this$ConfigureMemberCounterView.serverConfig.textChannels;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var textChannel = tmp$[tmp$_0];
        var memberCounterConfig = getTextChannelConfig(this$ConfigureMemberCounterView.serverConfig, textChannel).memberCounterConfig;
        println(memberCounterConfig);
        var entry = jq('<div>').attr('data-text-channel-id', textChannel.id);
        entry.append(jq('<div>').attr('class', 'flavourText').text('#' + textChannel.name));
        var toggle = LoriDashboard_getInstance().createToggle_8jgccd$('enableCounter', 'Ativar contador de membros', 'Ap\xF3s ativar, utilize {counter} no texto do seu t\xF3pico para ativar o contador!', false, memberCounterConfig != null);
        var jToggle = toggle.second;
        entry.append(jToggle);
        var textAreaWrapper = jq('<div>').attr('id', 'text-area-wrapper-' + textChannel.id);
        entry.append(jq('<div>').attr('class', 'flavourText').text('T\xF3pico do Canal (Ser\xE1 utilizado ap\xF3s algu\xE9m entrar/sair)'));
        tmp$_3 = jq('<textarea>').attr('id', 'text-area-' + textChannel.id);
        if (memberCounterConfig == null) {
          println("Using text channel's topic!");
          tmp$_2 = (tmp$_1 = textChannel.topic) != null ? tmp$_1 : '';
        }
         else {
          println("Using member counter's topic!");
          tmp$_2 = memberCounterConfig.topic;
        }
        textAreaWrapper.append(tmp$_3.val(tmp$_2));
        appendBuilder(ensureNotNull(textAreaWrapper[0]), div_0(appendHTML(StringBuilder_init(), false), void 0, ConfigureMemberCounterView$start$lambda$lambda(memberCounterConfig)));
        entry.append(textAreaWrapper);
        var selectThemeElement = Kotlin.isType(tmp$_4 = ensureNotNull(ensureNotNull(entry[0]).querySelector('.counter-theme')), HTMLSelectElement) ? tmp$_4 : throwCCE();
        var counterPaddingElement = Kotlin.isType(tmp$_5 = ensureNotNull(ensureNotNull(entry[0]).querySelector('.counter-padding')), HTMLInputElement) ? tmp$_5 : throwCCE();
        var counterPreviewElement = Kotlin.isType(tmp$_6 = ensureNotNull(ensureNotNull(entry[0]).querySelector('.counter-preview')), HTMLDivElement) ? tmp$_6 : throwCCE();
        var callback = ConfigureMemberCounterView$start$lambda$lambda_0(selectThemeElement, counterPreviewElement, counterPaddingElement);
        selectThemeElement.onchange = ConfigureMemberCounterView$start$lambda$lambda_1(callback);
        counterPaddingElement.onchange = ConfigureMemberCounterView$start$lambda$lambda_2(callback);
        callback();
        entry.append('<hr>');
        textChannels.append(entry);
        LoriDashboard_getInstance().applyBlur_iiwsaa$('#text-area-wrapper-' + textChannel.id, '#cmn-toggle-' + toggle.first.toString());
      }
      return Unit;
    };
  }
  ConfigureMemberCounterView.prototype.start = function () {
    document.addEventListener('DOMContentLoaded', ConfigureMemberCounterView$start$lambda(this));
  };
  function ConfigureMemberCounterView$prepareSave$lambda$lambda$ObjectLiteral() {
  }
  ConfigureMemberCounterView$prepareSave$lambda$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function ConfigureMemberCounterView$prepareSave$lambda$lambda(closure$entries) {
    return function (index, _elem) {
      var tmp$, tmp$_0, tmp$_1;
      var elem = jQuery(_elem);
      var textChannelId = elem.attr('data-text-channel-id');
      var isEnabled = elem.find('.cmn-toggle').is(':checked');
      if (isEnabled) {
        var dyn = new ConfigureMemberCounterView$prepareSave$lambda$lambda$ObjectLiteral();
        dyn.id = textChannelId;
        dyn.memberCounterConfig = new MemberCounterConfig(typeof (tmp$ = elem.find('#text-area-' + textChannelId).val()) === 'string' ? tmp$ : throwCCE(), typeof (tmp$_0 = elem.find('.counter-theme').val()) === 'string' ? tmp$_0 : throwCCE(), toInt(typeof (tmp$_1 = elem.find('.counter-padding').val()) === 'string' ? tmp$_1 : throwCCE()));
        closure$entries.add_11rb$(dyn);
      }
      return Unit;
    };
  }
  function ConfigureMemberCounterView$prepareSave$lambda(it) {
    var entries = ArrayList_init();
    var divs = jq('[data-text-channel-id]');
    divs.each(ConfigureMemberCounterView$prepareSave$lambda$lambda(entries));
    it['entries'] = entries;
    return Unit;
  }
  ConfigureMemberCounterView.prototype.prepareSave = function () {
    SaveStuff_getInstance().prepareSave('text_channels', ConfigureMemberCounterView$prepareSave$lambda);
  };
  ConfigureMemberCounterView.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ConfigureMemberCounterView',
    interfaces: []
  };
  var ConfigureMemberCounterView_instance = null;
  function ConfigureMemberCounterView_getInstance() {
    if (ConfigureMemberCounterView_instance === null) {
      new ConfigureMemberCounterView();
    }
    return ConfigureMemberCounterView_instance;
  }
  function ConfigureMiscellaneousConfig() {
    ConfigureMiscellaneousConfig_instance = this;
  }
  function ConfigureMiscellaneousConfig$start$lambda(it) {
    var serverConfig = LoriDashboard_getInstance().loadServerConfig();
    return Unit;
  }
  ConfigureMiscellaneousConfig.prototype.start = function () {
    LoriDashboard_getInstance().showLoadingBar_pdl1vj$('Carregando...');
    document.addEventListener('DOMContentLoaded', ConfigureMiscellaneousConfig$start$lambda);
  };
  ConfigureMiscellaneousConfig.prototype.prepareSave = function () {
    SaveStuff_getInstance().prepareSave('miscellaneous');
  };
  ConfigureMiscellaneousConfig.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ConfigureMiscellaneousConfig',
    interfaces: []
  };
  var ConfigureMiscellaneousConfig_instance = null;
  function ConfigureMiscellaneousConfig_getInstance() {
    if (ConfigureMiscellaneousConfig_instance === null) {
      new ConfigureMiscellaneousConfig();
    }
    return ConfigureMiscellaneousConfig_instance;
  }
  function ConfigureModerationView() {
    ConfigureModerationView_instance = this;
  }
  function ConfigureModerationView$start$lambda$lambda(this$ConfigureModerationView) {
    return function (it) {
      this$ConfigureModerationView.addPunishment_a3smtl$(new ModerationConfig$WarnAction(1, ModerationConfig$PunishmentAction$BAN_getInstance(), null));
      return Unit;
    };
  }
  function ConfigureModerationView$start$lambda(this$ConfigureModerationView) {
    return function (it) {
      var tmp$, tmp$_0;
      var serverConfig = LoriDashboard_getInstance().loadServerConfig();
      tmp$ = serverConfig.moderationConfig.punishmentActions;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var punishment = tmp$[tmp$_0];
        this$ConfigureModerationView.addPunishment_a3smtl$(punishment);
      }
      LoriDashboard_getInstance().applyBlur_iiwsaa$('#hiddenIfDisabled', '#cmn-toggle-2');
      LoriDashboard_getInstance().configureTextChannelSelect_mtmww3$(jq('#punishmentLogChannelId'), serverConfig, serverConfig.moderationConfig.punishmentLogChannelId);
      jq('.add-new-action').click(ConfigureModerationView$start$lambda$lambda(this$ConfigureModerationView));
      var tmp$_1 = LoriDashboard_getInstance();
      var tmp$_2 = jq('#punishmentLogMessage');
      var tmp$_3 = jq('#punishmentLogChannelId');
      var $receiver = toMutableMap(Placeholders_getInstance().DEFAULT_PLACEHOLDERS);
      $receiver.put_xwzc9p$('reason', 'Motivo da puni\xE7\xE3o, caso nenhum motivo tenha sido especificado, isto estar\xE1 vazio');
      $receiver.put_xwzc9p$('punishment', 'Puni\xE7\xE3o aplicada (ban, mute, kick, etc)');
      $receiver.put_xwzc9p$('staff', 'Mostra o nome do usu\xE1rio que fez a puni\xE7\xE3o');
      $receiver.put_xwzc9p$('@staff', 'Menciona o usu\xE1rio que fez a puni\xE7\xE3o');
      $receiver.put_xwzc9p$('staff-discriminator', 'Mostra o discriminator do usu\xE1rio que fez a puni\xE7\xE3o');
      $receiver.put_xwzc9p$('staff-id', 'Mostra o ID do usu\xE1rio que fez a puni\xE7\xE3o');
      $receiver.put_xwzc9p$('staff-avatar-url', 'Mostra a URL do avatar do usu\xE1rio que fez a puni\xE7\xE3o');
      tmp$_1.configureTextArea_ky1946$(tmp$_2, true, serverConfig, true, tmp$_3, true, $receiver);
      return Unit;
    };
  }
  ConfigureModerationView.prototype.start = function () {
    document.addEventListener('DOMContentLoaded', ConfigureModerationView$start$lambda(this));
  };
  function ConfigureModerationView$addPunishment$lambda(closure$action) {
    return function (it) {
      closure$action.remove();
      return Unit;
    };
  }
  function ConfigureModerationView$addPunishment$lambda_0(closure$action) {
    return function (it) {
      var punishmentAction = ModerationConfig$PunishmentAction$valueOf(closure$action.find('.apply-punishment').val());
      if (equals(punishmentAction.toString(), ModerationConfig$PunishmentAction$MUTE_getInstance().toString())) {
        closure$action.find('.customMetadata').css('height', '48px');
      }
       else {
        closure$action.find('.customMetadata').css('height', '0px');
      }
      return Unit;
    };
  }
  ConfigureModerationView.prototype.addPunishment_a3smtl$ = function (warnAction) {
    var tmp$, tmp$_0;
    var action = jq('<div>').append(jq('<button>').attr('class', 'button-discord button-discord-info pure-button remove-action').html('<i class="fas fa-trash"><\/i>')).append(' Ao chegar em ').append(jq('<input>').attr('type', 'number').attr('min', 1).val(warnAction.warnCount).attr('class', 'warnCount')).append(' avisos, ').append("<select class='apply-punishment'>").append(' o usu\xE1rio').append(jq('<div>').css('height', '0px').css('overflow', 'hidden').css('transition', '2s').addClass('customMetadata').append('O usu\xE1rio dever\xE1 ser silenciado por ').append(jq('<input>').attr('type', 'text').attr('placeholder', '30 minutos').val(warnAction.customMetadata0).attr('class', 'customMetadata0')));
    if (equals(warnAction.punishmentAction.toString(), ModerationConfig$PunishmentAction$MUTE_getInstance().toString())) {
      action.find('.customMetadata').css('height', '48px');
    }
    jq('#warnActions').append(action);
    action.find('.remove-action').click(ConfigureModerationView$addPunishment$lambda(action));
    var applyPunishment = action.find('.apply-punishment');
    tmp$ = ModerationConfig$PunishmentAction$values();
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var punishment = tmp$[tmp$_0];
      var option = jq('<option>').attr('name', get_legacyLocale().get_25kzsl$(replace(punishment.toString(), '_', '') + '_PunishName', [])).attr('value', punishment.toString()).text(get_legacyLocale().get_25kzsl$(replace(punishment.toString(), '_', '') + '_PunishName', []));
      if (equals(warnAction.punishmentAction.toString(), punishment.toString())) {
        option.attr('selected', 'selected');
      }
      applyPunishment.append(option);
    }
    jq('.apply-punishment').click(ConfigureModerationView$addPunishment$lambda_0(action));
  };
  function ConfigureModerationView$prepareSave$lambda$lambda(closure$actions) {
    return function (index, elem) {
      var el = jQuery(elem);
      var json_0 = json([]);
      var punishmentAction = ModerationConfig$PunishmentAction$valueOf(el.find('.apply-punishment').val());
      json_0['punishmentAction'] = punishmentAction.toString();
      json_0['warnCount'] = el.find('.warnCount').val();
      if (equals(punishmentAction.toString(), ModerationConfig$PunishmentAction$MUTE_getInstance().toString())) {
        json_0['customMetadata0'] = el.find('.customMetadata0').val();
      }
      return closure$actions.add_11rb$(json_0);
    };
  }
  function ConfigureModerationView$prepareSave$lambda(payload) {
    var actions = ArrayList_init();
    var warnActions = jq('#warnActions');
    var children = warnActions.children();
    children.each(ConfigureModerationView$prepareSave$lambda$lambda(actions));
    payload['punishmentActions'] = actions;
    return Unit;
  }
  ConfigureModerationView.prototype.prepareSave = function () {
    SaveStuff_getInstance().prepareSave('moderation', ConfigureModerationView$prepareSave$lambda);
  };
  ConfigureModerationView.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ConfigureModerationView',
    interfaces: []
  };
  var ConfigureModerationView_instance = null;
  function ConfigureModerationView_getInstance() {
    if (ConfigureModerationView_instance === null) {
      new ConfigureModerationView();
    }
    return ConfigureModerationView_instance;
  }
  function ConfigurePartnerView() {
    ConfigurePartnerView_instance = this;
    this.vanityUrlInput_jrj3bh$_0 = lazy(ConfigurePartnerView$vanityUrlInput$lambda);
    this.vanityUrlExample_i46b83$_0 = lazy(ConfigurePartnerView$vanityUrlExample$lambda);
    this.addKeyword_7t6lhx$_0 = lazy(ConfigurePartnerView$addKeyword$lambda);
    this.keywords_k89ksp$_0 = lazy(ConfigurePartnerView$keywords$lambda);
    this.keywordList_xlo49m$_0 = lazy(ConfigurePartnerView$keywordList$lambda);
    this.uploadBackground_valcxw$_0 = lazy(ConfigurePartnerView$uploadBackground$lambda);
    this.isPartner = false;
  }
  Object.defineProperty(ConfigurePartnerView.prototype, 'vanityUrlInput', {
    get: function () {
      return this.vanityUrlInput_jrj3bh$_0.value;
    }
  });
  Object.defineProperty(ConfigurePartnerView.prototype, 'vanityUrlExample', {
    get: function () {
      return this.vanityUrlExample_i46b83$_0.value;
    }
  });
  Object.defineProperty(ConfigurePartnerView.prototype, 'addKeyword', {
    get: function () {
      return this.addKeyword_7t6lhx$_0.value;
    }
  });
  Object.defineProperty(ConfigurePartnerView.prototype, 'keywords', {
    get: function () {
      return this.keywords_k89ksp$_0.value;
    }
  });
  Object.defineProperty(ConfigurePartnerView.prototype, 'keywordList', {
    get: function () {
      return this.keywordList_xlo49m$_0.value;
    }
  });
  Object.defineProperty(ConfigurePartnerView.prototype, 'uploadBackground', {
    get: function () {
      return this.uploadBackground_valcxw$_0.value;
    }
  });
  function ConfigurePartnerView$start$lambda$lambda(this$ConfigurePartnerView) {
    return function (f, f_0) {
      var vanityUrl = this$ConfigurePartnerView.vanityUrlInput.val();
      vanityUrl = replace(vanityUrl, ' ', '-');
      vanityUrl = vanityUrl.toLowerCase();
      this$ConfigurePartnerView.vanityUrlInput.val(vanityUrl);
      this$ConfigurePartnerView.changeVanityUrlText();
      return Unit;
    };
  }
  function ConfigurePartnerView$start$lambda(this$ConfigurePartnerView) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
      var serverConfig = LoriDashboard_getInstance().loadServerConfig();
      var serverListConfig = serverConfig.serverListConfig;
      this$ConfigurePartnerView.isPartner = serverListConfig.isPartner;
      println('Keywords: ' + joinToString(serverListConfig.keywords, ', '));
      tmp$ = LorittaPartner$Keyword$values();
      loop_label: for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var keyword = tmp$[tmp$_0];
        println('Adding keyword ' + keyword + '...');
        tmp$_5 = this$ConfigurePartnerView.keywords;
        tmp$_4 = jq('<div>').addClass('pure-u-1').addClass('pure-u-md-1-3');
        var tmp$_8 = jq('<label>');
        var tmp$_9 = jq('<input>').attr('type', 'checkbox').attr('name', keyword.toString()).attr('value', 'keywords').attr('data-keyword-checkbox', 'true');
        var $receiver = serverListConfig.keywords;
        var firstOrNull$result;
        firstOrNull$break: do {
          var tmp$_10;
          for (tmp$_10 = 0; tmp$_10 !== $receiver.length; ++tmp$_10) {
            var element = $receiver[tmp$_10];
            if (equals(element.toString(), keyword.toString())) {
              firstOrNull$result = element;
              break firstOrNull$break;
            }
          }
          firstOrNull$result = null;
        }
         while (false);
        tmp$_3 = tmp$_8.append(tmp$_9.prop('checked', firstOrNull$result != null));
        tmp$_2 = jq('<span>').text(' ' + get_legacyLocale().get_25kzsl$('KEYWORD_' + keyword.toString(), [])).addClass('keyword');
        if (keyword === LorittaPartner$Keyword$NSFW_getInstance()) {
          tmp$_1 = 'background-color: rgb(163, 48, 48);';
        }
         else {
          tmp$_1 = '';
        }
        tmp$_5.append(tmp$_4.append(tmp$_3.append(tmp$_2.attr('style', 'margin-left: 6px;' + tmp$_1))));
      }
      this$ConfigurePartnerView.vanityUrlInput.on('input', ConfigurePartnerView$start$lambda$lambda(this$ConfigurePartnerView));
      this$ConfigurePartnerView.changeVanityUrlText();
      LoriDashboard_getInstance().applyBlur_iiwsaa$('#hiddenIfDisabled', '#cmn-toggle-1');
      LoriDashboard_getInstance().applyBlur_iiwsaa$('#hiddenIfDisabled3', '#cmn-toggle-2');
      LoriDashboard_getInstance().applyBlur_iiwsaa$('#hiddenIfDisabled4', '#cmn-toggle-3');
      LoriDashboard_getInstance().configureTextArea_ky1946$(jq('#voteBroadcastMessage'), true, serverConfig, true, jq('#chooseChannel'));
      LoriDashboard_getInstance().configureTextArea_ky1946$(jq('#promoteBroadcastMessage'), true, serverConfig, true, jq('#chooseChannel2'));
      tmp$_6 = serverConfig.textChannels;
      for (tmp$_7 = 0; tmp$_7 !== tmp$_6.length; ++tmp$_7) {
        var textChannel = tmp$_6[tmp$_7];
        var option = jq('<option>').attr('value', textChannel.id).text('#' + textChannel.name);
        if (!textChannel.canTalk) {
          option.attr('disabled', 'disabled');
        }
        var voteSel = option.clone();
        var promoteSel = option.clone();
        if (equals(serverConfig.serverListConfig.voteBroadcastChannelId, textChannel.id)) {
          voteSel.attr('selected', 'selected');
        }
        if (serverConfig.serverListConfig.promoteBroadcastChannelId == textChannel.id) {
          promoteSel.attr('selected', 'selected');
        }
        jq('#chooseChannel').append(voteSel.clone());
        jq('#chooseChannel2').append(promoteSel.clone());
      }
      if (!serverListConfig.isPartner && !serverListConfig.isSponsored) {
        jq('#hiddenIfDisabled2').addClass('blurSection');
        jq('#hiddenInfo2').text('Fun\xE7\xF5es exclusivas para partners e patrocinadores');
      }
      return Unit;
    };
  }
  ConfigurePartnerView.prototype.start = function () {
    document.addEventListener('DOMContentLoaded', ConfigurePartnerView$start$lambda(this));
  };
  ConfigurePartnerView.prototype.changeVanityUrlText = function () {
    var vanityUrl = this.vanityUrlInput.val();
    this.vanityUrlExample.text(get_loriUrl() + 's/' + vanityUrl.toString());
    this.vanityUrlExample.attr('src', get_loriUrl() + 's/' + vanityUrl.toString());
  };
  function ConfigurePartnerView$prepareSave$lambda(closure$reader, this$ConfigurePartnerView) {
    return function (it) {
      var imageAsBase64 = closure$reader.result;
      this$ConfigurePartnerView.save_pdl1vj$(imageAsBase64);
      return Unit;
    };
  }
  ConfigurePartnerView.prototype.prepareSave = function () {
    println('Preparing save... wow!');
    var file = this.uploadBackground.get()[0].files[0];
    if (file != null) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = ConfigurePartnerView$prepareSave$lambda(reader, this);
    }
     else {
      this.save_pdl1vj$(null);
    }
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function ConfigurePartnerView$save$lambda(this$ConfigurePartnerView, closure$imageAsBase64) {
    return function (payload) {
      var $receiver = this$ConfigurePartnerView.keywords.find('[data-keyword-checkbox]').toArray();
      var destination = ArrayList_init();
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (element.checked)
          destination.add_11rb$(element);
      }
      var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
      var tmp$_0;
      tmp$_0 = destination.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination_0.add_11rb$(item.getAttribute('name'));
      }
      var addedKeywords = destination_0;
      payload['keywords'] = addedKeywords;
      if (closure$imageAsBase64 != null) {
        payload['backgroundImage'] = closure$imageAsBase64;
      }
      payload['isPartner'] = this$ConfigurePartnerView.isPartner;
      return Unit;
    };
  }
  ConfigurePartnerView.prototype.save_pdl1vj$ = function (imageAsBase64) {
    SaveStuff_getInstance().prepareSave('server_list', ConfigurePartnerView$save$lambda(this, imageAsBase64));
  };
  function ConfigurePartnerView$vanityUrlInput$lambda() {
    return jq('#vanityUrl');
  }
  function ConfigurePartnerView$vanityUrlExample$lambda() {
    return jq('#vanityUrlExample');
  }
  function ConfigurePartnerView$addKeyword$lambda() {
    return jq('#addKeyword');
  }
  function ConfigurePartnerView$keywords$lambda() {
    return jq('#keywords');
  }
  function ConfigurePartnerView$keywordList$lambda() {
    return jq('#keywordList');
  }
  function ConfigurePartnerView$uploadBackground$lambda() {
    return jq('#uploadBackground');
  }
  ConfigurePartnerView.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ConfigurePartnerView',
    interfaces: []
  };
  var ConfigurePartnerView_instance = null;
  function ConfigurePartnerView_getInstance() {
    if (ConfigurePartnerView_instance === null) {
      new ConfigurePartnerView();
    }
    return ConfigurePartnerView_instance;
  }
  function ConfigureProfileView() {
    ConfigureProfileView_instance = this;
  }
  ConfigureProfileView.prototype.start = function () {
  };
  ConfigureProfileView.prototype.prepareSave = function () {
    println('Preparing save... wow!');
    SaveStuff_getInstance().prepareSave('profile', void 0, void 0, get_loriUrl() + 'api/v1/user/self-profile');
  };
  ConfigureProfileView.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ConfigureProfileView',
    interfaces: []
  };
  var ConfigureProfileView_instance = null;
  function ConfigureProfileView_getInstance() {
    if (ConfigureProfileView_instance === null) {
      new ConfigureProfileView();
    }
    return ConfigureProfileView_instance;
  }
  function ConfigureWelcomerView() {
    ConfigureWelcomerView_instance = this;
  }
  function ConfigureWelcomerView$start$lambda(it) {
    var serverConfig = LoriDashboard_getInstance().loadServerConfig();
    if (serverConfig.joinLeaveConfig.deleteJoinMessagesAfter != null)
      jq('#deleteJoinMessagesAfter').val(ensureNotNull(serverConfig.joinLeaveConfig.deleteJoinMessagesAfter));
    if (serverConfig.joinLeaveConfig.deleteLeaveMessagesAfter != null)
      jq('#deleteLeaveMessagesAfter').val(ensureNotNull(serverConfig.joinLeaveConfig.deleteLeaveMessagesAfter));
    LoriDashboard_getInstance().applyBlur_iiwsaa$('#hiddenIfDisabled', '#cmn-toggle-1');
    LoriDashboard_getInstance().configureTextChannelSelect_mtmww3$(jq('#canalJoinId'), serverConfig, serverConfig.joinLeaveConfig.canalJoinId);
    LoriDashboard_getInstance().configureTextChannelSelect_mtmww3$(jq('#canalLeaveId'), serverConfig, serverConfig.joinLeaveConfig.canalLeaveId);
    LoriDashboard_getInstance().configureTextArea_ky1946$(jq('#joinMessage'), true, serverConfig, true, jq('#canalJoinId'), true, Placeholders_getInstance().DEFAULT_PLACEHOLDERS, true, mapOf([to('Padr\xE3o', '\uD83D\uDC49 {@user} entrou no servidor!'), to('Padr\xE3o, s\xF3 que melhor', '<a:lori_happy:521721811298156558> | {@user} acabou de entrar na {guild}! Agora temos {guild-size} membros!'), to('Lista de Informa\xE7\xF5es', '{@user}, bem-vindo(a) ao {guild}! <a:lori_happy:521721811298156558>\n\u2022 Leia as #regras *(psiu, troque o nome do canal aqui na mensagem!)* para voc\xEA poder conviver em harmonia! <:blobheart:467447056374693889>\n\u2022 Converse no canal de #bate-papo <:lori_pac:503600573741006863>\n\u2022 E \xE9 claro, divirta-se! <a:emojo_feriado:393751205308006421>\n\nAli\xE1s, continue sendo incr\xEDvel! (E eu sou muito fofa! :3)'), to('Embed Simples', '{\n   "content":"{@user}",\n   "embed":{\n      "color":-9270822,\n      "title":"\uD83D\uDC4BSeja bem-vindo(a)!",\n      "description":"Ol\xE1 {@user}! Seja bem-vindo(a) ao {guild}!"\n   }\n}'), to('Embed com Avatar', '{\n   "content":"{@user}",\n   "embed":{\n      "color":-9270822,\n      "title":"\uD83D\uDC4BBem-vindo(a)!",\n      "description":"Ol\xE1 {@user}, espero que voc\xEA se divirta no meu servidor! <:loritta:331179879582269451>",\n      "author":{\n         "name":"{user}#{user-discriminator}",\n         "icon_url":"{user-avatar-url}"\n      },\n      "thumbnail":{\n         "url":"{user-avatar-url}"\n      },\n    "footer": {\n      "text": "ID do usu\xE1rio: {user-id}"\n    }\n   }\n}'), to('Embed com Avatar e Imagem', '{\n   "content":"{@user}",\n   "embed":{\n      "color":-9270822,\n      "title":"\uD83D\uDC4BBem-vindo(a)!",\n      "description":"Ol\xE1 {@user}, espero que voc\xEA se divirta no meu servidor! <:loritta:331179879582269451>",\n      "author":{\n         "name":"{user}#{user-discriminator}",\n         "icon_url":"{user-avatar-url}"\n      },\n      "thumbnail":{\n         "url":"{user-avatar-url}"\n      },\n\t  "image": {\n\t     "url": "https://media.giphy.com/media/GPQBFuG4ABACA/source.gif"\n\t  },\n    "footer": {\n      "text": "ID do usu\xE1rio: {user-id}"\n    }\n   }\n}'), to('Embed com Informa\xE7\xF5es', '{\n   "content":"{@user}",\n   "embed":{\n      "color":-14689638 ,\n      "title":"{user}#{user-discriminator} | Bem-vindo(a)!",\n      "thumbnail": {\n         "url" : "{user-avatar-url}"\n      },\n      "description":"<:lori_hug:515328576611155968> Ol\xE1, seja bem-vindo(a) ao {guild}!",\n      "fields": [\n        {\n            "name": "\uD83D\uDC4B Sabia que...",\n            "value": "Voc\xEA \xE9 o {guild-size}\xBA membro aqui no servidor?",\n            "inline": true\n        },\n        {\n            "name": "\uD83D\uDEE1 Tag do Usu\xE1rio",\n            "value": "`{user}#{user-discriminator}` ({user-id})",\n            "inline": true\n        },\n        {\n            "name": "\uD83D\uDCDB Precisando de ajuda?",\n            "value": "Caso voc\xEA tenha alguma d\xFAvida ou problema, chame a nossa equipe!",\n            "inline": true\n        },\n        {\n            "name": "\uD83D\uDC6E Evite puni\xE7\xF5es!",\n            "value": "Leia as nossas #regras para evitar ser punido no servidor!",\n            "inline": true\n        }\n      ],\n    "footer": {\n      "text": "{guild} \u2022 \xA9 Todos os direitos reservados."\n    }\n   }\n}'), to('Kit Social Influencer\u2122', '{\n   "content":"{@user}",\n   "embed":{\n      "color":-2342853,\n      "title":"{user}#{user-discriminator} | Bem-vindo(a)!",\n      "thumbnail": {\n         "url" : "{user-avatar-url}"\n      },\n      "description":"Salve {@user}! Voc\xEA acabou de entrar no servidor do {guild}, aqui voc\xEA poder\xE1 se interagir com f\xE3s do {guild}, conversar sobre suas coisas favoritas e muito mais!",\n      "fields": [\n        {\n            "name": "\uD83D\uDCE2 Fique atento!",\n            "value": "Novos v\xEDdeos do {guild} ser\xE3o anunciados no #v\xEDdeos-novos!",\n            "inline": true\n        },\n        {\n            "name": "\uD83D\uDCFA Inscreva-se no canal se voc\xEA ainda n\xE3o \xE9 inscrito! ",\n            "value": "[Canal](https://www.youtube.com/channel/UC-eeXSRZ8cO-i2NZYrWGDnQ)",\n            "inline": true\n        },\n        {\n            "name": "\uD83D\uDC26 Siga no Twitter! ",\n            "value": "[@LorittaBot](https://twitter.com/LorittaBot)",\n            "inline": true\n        },\n        {\n            "name": "\uD83D\uDDBC Siga no Instagram! ",\n            "value": "[@lorittabot](https://instagram.com/lorittabot)",\n            "inline": true\n        }\n      ],\n    "footer": {\n      "text": "Eu sou muito fofa e o {guild} tamb\xE9m :3"\n    }\n   }\n}')]));
    LoriDashboard_getInstance().configureTextArea_ky1946$(jq('#leaveMessage'), true, serverConfig, true, jq('#canalLeaveId'), true, Placeholders_getInstance().DEFAULT_PLACEHOLDERS, true, mapOf([to('Padr\xE3o', '\uD83D\uDC48 {user} saiu do servidor...'), to('Padr\xE3o, s\xF3 que melhor', '<a:bongo_lori_triste:524894216510373888> | {user} saiu do {guild}... espero que algum dia ele volte...'), to('Embed Simples', '{\n   "content":"",\n   "embed":{\n      "color":-6250077,\n      "title":"Tchau...",\n      "description":"{user} saiu do {guild}... espero que algum dia ele volte..."\n   }\n}'), to('Embed com Avatar', '{\n   "content":"",\n   "embed":{\n      "color":-6250077,\n      "title":"\uD83D\uDE2D #chateada!",\n      "description":"\u26B0 **{user}** saiu do servidor... <:lori_triste:370344565967814659>",\n      "author":{\n         "name":"{user}#{user-discriminator}",\n         "icon_url":"{user-avatar-url}"\n      },\n      "thumbnail":{\n         "url":"{user-avatar-url}"\n      },\n      "footer": {\n         "text": "ID do usu\xE1rio: {user-id}"\n      }\n   }\n}\n'), to('Embed com Avatar e Imagem', '{\n   "content":"",\n   "embed":{\n      "color":-6250077,\n      "title":"\uD83D\uDE2D #chateada!",\n      "description":"\u26B0 **{user}** saiu do servidor... <:lori_triste:370344565967814659>",\n      "author":{\n         "name":"{user}#{user-discriminator}",\n         "icon_url":"{user-avatar-url}"\n      },\n      "thumbnail":{\n         "url":"{user-avatar-url}"\n      },\n\t  "image": {\n\t     "url": "https://i.imgur.com/RUIaWW3.png"\n\t  },\n      "footer": {\n         "text": "ID do usu\xE1rio: {user-id}"\n      }\n   }\n}')]));
    LoriDashboard_getInstance().configureTextArea_ky1946$(jq('#joinPrivateMessage'), true, serverConfig, true, null, true, Placeholders_getInstance().DEFAULT_PLACEHOLDERS);
    LoriDashboard_getInstance().configureTextArea_ky1946$(jq('#banMessage'), true, serverConfig, true, jq('#canalLeaveId'), true, Placeholders_getInstance().DEFAULT_PLACEHOLDERS);
    LoriDashboard_getInstance().configureTextArea_ky1946$(jq('#kickMessage'), true, serverConfig, true, jq('#canalLeaveId'), true, Placeholders_getInstance().DEFAULT_PLACEHOLDERS);
    return Unit;
  }
  ConfigureWelcomerView.prototype.start = function () {
    document.addEventListener('DOMContentLoaded', ConfigureWelcomerView$start$lambda);
  };
  function ConfigureWelcomerView$prepareSave$lambda(it) {
    var tmp$, tmp$_0;
    var deleteJoinMessagesAfter = toIntOrNull(typeof (tmp$ = jq('#deleteJoinMessagesAfter').val()) === 'string' ? tmp$ : throwCCE());
    if (deleteJoinMessagesAfter === 0) {
      it['deleteJoinMessagesAfter'] = null;
    }
    var deleteLeaveMessagesAfter = toIntOrNull(typeof (tmp$_0 = jq('#deleteLeaveMessagesAfter').val()) === 'string' ? tmp$_0 : throwCCE());
    if (deleteLeaveMessagesAfter === 0) {
      it['deleteLeaveMessagesAfter'] = null;
    }
    return Unit;
  }
  ConfigureWelcomerView.prototype.prepareSave = function () {
    SaveStuff_getInstance().prepareSave('welcomer', ConfigureWelcomerView$prepareSave$lambda);
  };
  ConfigureWelcomerView.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ConfigureWelcomerView',
    interfaces: []
  };
  var ConfigureWelcomerView_instance = null;
  function ConfigureWelcomerView_getInstance() {
    if (ConfigureWelcomerView_instance === null) {
      new ConfigureWelcomerView();
    }
    return ConfigureWelcomerView_instance;
  }
  function LoriDashboard() {
    LoriDashboard_instance = this;
    this.toggleCounter = 1000;
    this.configSavedSfx_sq02yu$_0 = lazy(LoriDashboard$configSavedSfx$lambda);
    this.configErrorSfx_v2dzpj$_0 = lazy(LoriDashboard$configErrorSfx$lambda);
    this.wrapper_e2dk2j$_0 = lazy(LoriDashboard$wrapper$lambda);
    this.leftSidebar_bu0mf$_0 = lazy(LoriDashboard$leftSidebar$lambda);
    this.rightSidebar_6drdtm$_0 = lazy(LoriDashboard$rightSidebar$lambda);
    this.loadingScreen_dfu46y$_0 = lazy(LoriDashboard$loadingScreen$lambda);
  }
  Object.defineProperty(LoriDashboard.prototype, 'configSavedSfx', {
    get: function () {
      return this.configSavedSfx_sq02yu$_0.value;
    }
  });
  Object.defineProperty(LoriDashboard.prototype, 'configErrorSfx', {
    get: function () {
      return this.configErrorSfx_v2dzpj$_0.value;
    }
  });
  Object.defineProperty(LoriDashboard.prototype, 'wrapper', {
    get: function () {
      return this.wrapper_e2dk2j$_0.value;
    }
  });
  Object.defineProperty(LoriDashboard.prototype, 'leftSidebar', {
    get: function () {
      return this.leftSidebar_bu0mf$_0.value;
    }
  });
  Object.defineProperty(LoriDashboard.prototype, 'rightSidebar', {
    get: function () {
      return this.rightSidebar_6drdtm$_0.value;
    }
  });
  Object.defineProperty(LoriDashboard.prototype, 'loadingScreen', {
    get: function () {
      return this.loadingScreen_dfu46y$_0.value;
    }
  });
  LoriDashboard.prototype.loadServerConfig = function () {
    var tmp$;
    println('Loading config from embedded data... (if available)');
    var serverConfigJson = (tmp$ = document.getElementById('server-config-json')) != null ? tmp$.innerHTML : null;
    println('Config (as JSON): ' + toString(serverConfigJson));
    if (serverConfigJson != null) {
      println('Parsing the configuration...');
      var serverConfig = JSON.parse(serverConfigJson);
      println("Server's Command Prefix: " + serverConfig.commandPrefix);
      return serverConfig;
    }
     else {
      println("Couldn't find embedded config data in body!");
      throw RuntimeException_init("Couldn't find embedded config data in body!");
    }
  };
  LoriDashboard.prototype.showLoadingBar_pdl1vj$ = function (text) {
    if (text === void 0)
      text = 'Salvando...';
    this.leftSidebar.css('filter', 'blur(7px)');
    this.rightSidebar.css('filter', 'blur(7px)');
    if (text != null)
      this.loadingScreen.find('#loading-screen-text').text(text);
    this.loadingScreen.fadeIn(250);
  };
  LoriDashboard.prototype.hideLoadingBar = function () {
    this.leftSidebar.css('filter', '');
    this.rightSidebar.css('filter', '');
    this.loadingScreen.fadeOut(250);
  };
  function LoriDashboard$applyBlur$lambda(closure$onToggle, closure$toBeHidden, closure$toggle, this$LoriDashboard) {
    return function (it) {
      var tmp$;
      var result = (tmp$ = closure$onToggle != null ? closure$onToggle() : null) != null ? tmp$ : true;
      if (!result) {
        it.preventDefault();
        return;
      }
      this$LoriDashboard.toggleBlur_puj7f4$(closure$toBeHidden, closure$toggle);
      return Unit;
    };
  }
  LoriDashboard.prototype.applyBlur_iiwsaa$ = function (toBeHidden, toggle, onToggle) {
    if (onToggle === void 0)
      onToggle = null;
    jq(toggle).click(LoriDashboard$applyBlur$lambda(onToggle, toBeHidden, toggle, this));
    this.toggleBlur_puj7f4$(toBeHidden, toggle);
  };
  LoriDashboard.prototype.toggleBlur_puj7f4$ = function (toBeHidden, toggle) {
    var hide = jq(toBeHidden);
    if (jq(toggle).is(':checked')) {
      hide.removeClass('blurSection');
      hide.addClass('noBlur');
    }
     else {
      hide.removeClass('noBlur');
      hide.addClass('blurSection');
    }
  };
  LoriDashboard.prototype.enableBlur_61zpoe$ = function (toBeHidden) {
    var hide = jq(toBeHidden);
    hide.removeClass('noBlur');
    hide.addClass('blurSection');
  };
  LoriDashboard.prototype.disableBlur_61zpoe$ = function (toBeUnhidden) {
    var hide = jq(toBeUnhidden);
    hide.removeClass('blurSection');
    hide.addClass('noBlur');
  };
  LoriDashboard.prototype.createToggle_8jgccd$ = function (internalName, toggleMainText, toggleSubText, needsToBeSaved, isEnabled) {
    var html = '<div class=' + '"' + 'pure-g' + '"' + ' style=' + '"' + 'text-align: center;' + '"' + '>' + '\n' + '    <div class=' + '"' + 'pure-u-1 pure-u-md-7-8' + '"' + '>' + '\n' + '\t\t<p class=' + '"' + 'toggleMainText' + '"' + '>' + toggleMainText + '<\/p>' + '\n' + '\t\t' + (toggleSubText != null ? '<div class=' + '"' + 'toggleSubText' + '"' + '>' + toString(toggleSubText) + '<\/div>' : '') + '\n' + '\t<\/div>' + '\n' + '    <div class=' + '"' + 'pure-u-1 pure-u-md-1-8' + '"' + '>' + '\n' + '\t\t<div class=' + '"' + 'switch' + '"' + '>' + '\n' + '\t\t  <input type=' + '"' + 'checkbox' + '"' + ' data-internal-name=' + '"' + internalName + '"' + ' value=' + '"' + 'true' + '"' + ' ' + (needsToBeSaved ? 'data-send-on-save="true"' : '') + ' ' + (isEnabled ? 'checked' : '') + ' id=' + '"' + 'cmn-toggle-' + this.toggleCounter + '"' + ' class=' + '"' + 'cmn-toggle cmn-toggle-round' + '"' + ' type=' + '"' + 'checkbox' + '"' + '>' + '\n' + '\t\t  <label for=' + '"' + 'cmn-toggle-' + this.toggleCounter + '"' + '><\/label>' + '\n' + '\t\t<\/div>' + '\n' + '\t<\/div>' + '\n' + '<\/div>' + '\n' + '<br style=' + '"' + 'clear: both' + '"' + ' />';
    var cnt = this.toggleCounter;
    this.toggleCounter = this.toggleCounter + 1 | 0;
    return new Pair(cnt, jq(html));
  };
  function LoriDashboard$configureTextChannelSelect$ObjectLiteral() {
  }
  LoriDashboard$configureTextChannelSelect$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function LoriDashboard$configureTextChannelSelect$ObjectLiteral_0() {
  }
  LoriDashboard$configureTextChannelSelect$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function LoriDashboard$configureTextChannelSelect$lambda(str) {
    return str;
  }
  function LoriDashboard$configureTextChannelSelect$lambda$lambda(closure$modal) {
    return function () {
      closure$modal.close();
      window.location.reload();
      return Unit;
    };
  }
  function LoriDashboard$configureTextChannelSelect$lambda$lambda_0(closure$modal) {
    return function () {
      closure$modal.close();
      return Unit;
    };
  }
  function LoriDashboard$configureTextChannelSelect$lambda_0(closure$selectChannelDropdown, closure$serverConfig) {
    return function (event, a) {
      var tmp$;
      var channelId = typeof (tmp$ = closure$selectChannelDropdown.val()) === 'string' ? tmp$ : throwCCE();
      var $receiver = closure$serverConfig.textChannels;
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$_0;
        for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
          var element = $receiver[tmp$_0];
          if (equals(element.id, channelId)) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }
        }
        firstOrNull$result = null;
      }
       while (false);
      var channel = firstOrNull$result;
      if (channel != null && !channel.canTalk) {
        event.preventDefault();
        closure$selectChannelDropdown.select2('close');
        var modal = new TingleModal(new TingleOptions_0(true, void 0, void 0, void 0, ['tingle-modal--overflow']));
        modal.setContent(jq('<div>').append(jq('<div>').addClass('category-name').text(get_legacyLocale().get_25kzsl$('DASHBOARD_NoPermission', []))).append(jq('<div>').css('text-align', 'center').append(jq('<img>').attr('src', 'https://mrpowergamerbr.com/uploads/2018-06-17_11-19-43.gif').css('width', '100%'))).append(jq('<div>').css('text-align', 'center').append(jq('<p>').text('Atualmente eu n\xE3o consigo falar no canal que voc\xEA deseja porque eu n\xE3o tenho permiss\xE3o para isto... \uD83D\uDE2D')).append(jq('<p>').text('Para eu conseguir falar neste canal, clique com bot\xE3o direito no canal que voc\xEA deseja que eu possa falar, v\xE1 nas permiss\xF5es, adicione um permission override para mim e d\xEA permiss\xE3o para que eu possa ler mensagens e enviar mensagens!'))).html());
        modal.addFooterBtn('<i class="far fa-thumbs-up"><\/i> J\xE1 arrumei!', 'button-discord button-discord-info pure-button button-discord-modal', LoriDashboard$configureTextChannelSelect$lambda$lambda(modal));
        modal.addFooterBtn('<i class="fas fa-times"><\/i> Fechar', 'button-discord pure-button button-discord-modal button-discord-modal-secondary-action', LoriDashboard$configureTextChannelSelect$lambda$lambda_0(modal));
        modal.open();
      }
      return Unit;
    };
  }
  LoriDashboard.prototype.configureTextChannelSelect_mtmww3$ = function (selectChannelDropdown, serverConfig, selectedChannelId) {
    var tmp$, tmp$_0;
    var optionData = ArrayList_init();
    tmp$ = serverConfig.textChannels;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var it = tmp$[tmp$_0];
      var option = new LoriDashboard$configureTextChannelSelect$ObjectLiteral();
      option.id = it.id;
      var text = '<span style=' + '"' + 'font-weight: 600;' + '"' + '>#' + it.name + '<\/span>';
      option.text = text;
      if (!it.canTalk) {
        option.text = text + ' <span class=' + '"' + 'keyword' + '"' + ' style=' + '"' + 'background-color: rgb(231, 76, 60);' + '"' + '>' + replace(get_legacyLocale().get_25kzsl$('DASHBOARD_NoPermission', []), '!', '') + '<\/span>';
      }
      if (equals(it.id, selectedChannelId))
        option.selected = true;
      optionData.add_11rb$(option);
    }
    var options = new LoriDashboard$configureTextChannelSelect$ObjectLiteral_0();
    options.data = copyToArray(optionData);
    options.escapeMarkup = LoriDashboard$configureTextChannelSelect$lambda;
    selectChannelDropdown.select2(options);
    selectChannelDropdown.on('select2:select', LoriDashboard$configureTextChannelSelect$lambda_0(selectChannelDropdown, serverConfig));
  };
  function LoriDashboard$SUMMARY(consumer) {
    HTMLTag.call(this, 'summary', consumer, emptyMap(), void 0, true, false);
  }
  LoriDashboard$SUMMARY.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SUMMARY',
    interfaces: [HtmlInlineTag, HTMLTag]
  };
  function LoriDashboard$summary$lambda($receiver) {
    return Unit;
  }
  LoriDashboard.prototype.summary_1sosug$ = function ($receiver, block) {
    if (block === void 0)
      block = LoriDashboard$summary$lambda;
    visit(new LoriDashboard$SUMMARY($receiver.consumer), block);
  };
  function LoriDashboard$configureTextArea$ObjectLiteral() {
  }
  LoriDashboard$configureTextArea$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function LoriDashboard$configureTextArea$ObjectLiteral_0() {
  }
  LoriDashboard$configureTextArea$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function LoriDashboard$configureTextArea$ObjectLiteral_1() {
  }
  LoriDashboard$configureTextArea$ObjectLiteral_1.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function LoriDashboard$configureTextArea$lambda(str) {
    return str;
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Voc\xEA realmente quer substituir pelo template?');
    return Unit;
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Ao aplicar o template, a sua mensagem atual ser\xE1 perdida para sempre! (A n\xE3o ser se voc\xEA tenha copiado ela para outro lugar, a\xED vida que segue n\xE9)');
    return Unit;
  }
  function LoriDashboard$configureTextArea$lambda$lambda($receiver) {
    div($receiver, 'category-name', LoriDashboard$configureTextArea$lambda$lambda$lambda);
    p($receiver, void 0, LoriDashboard$configureTextArea$lambda$lambda$lambda_0);
    return Unit;
  }
  function LoriDashboard$configureTextArea$lambda$lambda_0(closure$modal, closure$jquery, closure$result) {
    return function () {
      closure$modal.close();
      closure$jquery.val(closure$result);
      closure$jquery.trigger('input', null);
      autosize.update(closure$jquery);
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda_1(closure$modal) {
    return function () {
      closure$modal.close();
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda_0(closure$select, closure$templates, closure$jquery) {
    return function (event, a) {
      var tmp$;
      var selected = typeof (tmp$ = closure$select.val()) === 'string' ? tmp$ : throwCCE();
      var result = closure$templates.get_11rb$(selected);
      closure$select.select2('close');
      var modal = new TingleModal(new TingleOptions_0(true, void 0, void 0, void 0, ['tingle-modal--overflow']));
      modal.setContent(div_0(appendHTML(StringBuilder_init(), false), void 0, LoriDashboard$configureTextArea$lambda$lambda).toString());
      modal.addFooterBtn('<i class="far fa-thumbs-up"><\/i> Aplicar', 'button-discord button-discord-info pure-button button-discord-modal', LoriDashboard$configureTextArea$lambda$lambda_0(modal, closure$jquery, result));
      modal.addFooterBtn('<i class="fas fa-times"><\/i> Fechar', 'button-discord pure-button button-discord-modal button-discord-modal-secondary-action', LoriDashboard$configureTextArea$lambda$lambda_1(modal));
      modal.open();
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$(get_locale().get_25kzsl$('loritta.modules.generic.showPlaceholders', []) + ' ');
    i($receiver, 'fas fa-chevron-down', LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Placeholder');
    return Unit;
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Significado');
    return Unit;
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    th($receiver, void 0, void 0, LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
    th($receiver, void 0, void 0, LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('{' + closure$it.key + '}');
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      set_style($receiver, 'white-space: nowrap;');
      code($receiver, 'inline', LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$it));
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$it) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$it.value);
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$it) {
    return function ($receiver) {
      td($receiver, void 0, LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$it));
      td($receiver, void 0, LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$it));
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda(closure$placeholders) {
    return function ($receiver) {
      tr($receiver, void 0, LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda);
      var tmp$;
      tmp$ = closure$placeholders.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        tr($receiver, void 0, LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(element));
      }
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda_0(closure$placeholders) {
    return function ($receiver) {
      thead($receiver, void 0, LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda(closure$placeholders));
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda_2(closure$placeholders) {
    return function ($receiver) {
      table($receiver, 'fancy-table', LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda_0(closure$placeholders));
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda_2(this$LoriDashboard, closure$placeholders) {
    return function ($receiver) {
      this$LoriDashboard.summary_1sosug$($receiver, LoriDashboard$configureTextArea$lambda$lambda$lambda_1);
      div($receiver, 'details-content', LoriDashboard$configureTextArea$lambda$lambda$lambda_2(closure$placeholders));
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda_1(this$LoriDashboard, closure$placeholders) {
    return function ($receiver) {
      details($receiver, 'fancy-details', LoriDashboard$configureTextArea$lambda$lambda_2(this$LoriDashboard, closure$placeholders));
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$ObjectLiteral() {
  }
  LoriDashboard$configureTextArea$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function LoriDashboard$configureTextArea$lambda$lambda_3(data, textStatus, event) {
    println(data);
    return Unit;
  }
  function LoriDashboard$configureTextArea$lambda$lambda_4(event, textStatus, errorThrown) {
    println('Status: ' + toString(event.status));
    println(event.response);
    return Unit;
  }
  function LoriDashboard$configureTextArea$lambda_2(closure$textChannelSelect, closure$jquery) {
    return function (event, args) {
      var tmp$, tmp$_0;
      if (closure$textChannelSelect != null) {
        tmp$_0 = typeof (tmp$ = closure$textChannelSelect.val()) === 'string' ? tmp$ : throwCCE();
      }
       else {
        tmp$_0 = null;
      }
      var textChannelId = tmp$_0;
      var json_0 = json([to('channelId', textChannelId), to('message', closure$jquery.val()), to('sources', ['user', 'member'])]);
      var dynamic = new LoriDashboard$configureTextArea$lambda$ObjectLiteral();
      dynamic.url = get_loriUrl() + 'api/v1/guild/' + guildId + '/send-message';
      dynamic.type = 'POST';
      dynamic.dataType = 'json';
      dynamic.data = JSON.stringify(json_0);
      dynamic.success = LoriDashboard$configureTextArea$lambda$lambda_3;
      dynamic.error = LoriDashboard$configureTextArea$lambda$lambda_4;
      jQuery.ajax(dynamic);
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$replaceAndConvert(closure$serverConfig, this$LoriDashboard, closure$converter) {
    return function (text) {
      var _text = this$LoriDashboard.replaceTokens_9iii47$(text, closure$serverConfig);
      _text = closure$converter.makeHtml(_text);
      return jq(_text).html();
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda_1(closure$color) {
    return function ($receiver) {
      if (closure$color != null) {
        var aux = '000000' + toString_0(closure$color >>> 0, 16);
        var hex = '#' + slice(aux, until(aux.length - 6 | 0, aux.length));
        println('Hex: ' + hex);
        set_style($receiver, 'background-color: ' + hex + ';');
      }
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$name, closure$replaceAndConvert) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$replaceAndConvert(closure$name));
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$name, closure$replaceAndConvert) {
    return function ($receiver) {
      unsafe($receiver, LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$name, closure$replaceAndConvert));
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$name, closure$replaceAndConvert) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$replaceAndConvert(closure$name));
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$name, closure$replaceAndConvert) {
    return function ($receiver) {
      unsafe($receiver, LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$name, closure$replaceAndConvert));
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$author, closure$serverConfig, this$LoriDashboard, closure$replaceAndConvert) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1;
      var iconUrl = (tmp$ = closure$author['icon_url']) == null || typeof tmp$ === 'string' ? tmp$ : throwCCE();
      if (iconUrl != null) {
        img($receiver, void 0, this$LoriDashboard.replaceTokens_9iii47$(iconUrl, closure$serverConfig), 'embed-author-icon');
      }
      var url = (tmp$_0 = closure$author['url']) == null || typeof tmp$_0 === 'string' ? tmp$_0 : throwCCE();
      var name = (tmp$_1 = closure$author['name']) == null || typeof tmp$_1 === 'string' ? tmp$_1 : throwCCE();
      if (name != null) {
        if (url != null) {
          a($receiver, url, void 0, 'embed-author-name', LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(name, closure$replaceAndConvert));
        }
         else {
          span($receiver, 'embed-author-name', LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(name, closure$replaceAndConvert));
        }
      }
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$title, closure$replaceAndConvert) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$replaceAndConvert(closure$title));
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$title, closure$replaceAndConvert) {
    return function ($receiver) {
      unsafe($receiver, LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$title, closure$replaceAndConvert));
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$title, closure$replaceAndConvert) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$replaceAndConvert(closure$title));
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$title, closure$replaceAndConvert) {
    return function ($receiver) {
      unsafe($receiver, LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$title, closure$replaceAndConvert));
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$description, closure$replaceAndConvert) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$replaceAndConvert(closure$description));
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$description, closure$replaceAndConvert) {
    return function ($receiver) {
      unsafe($receiver, LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$description, closure$replaceAndConvert));
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$name, closure$replaceAndConvert) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$replaceAndConvert(closure$name));
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$name, closure$replaceAndConvert) {
    return function ($receiver) {
      unsafe($receiver, LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$name, closure$replaceAndConvert));
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$value, closure$replaceAndConvert) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$replaceAndConvert(closure$value));
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$value, closure$replaceAndConvert) {
    return function ($receiver) {
      unsafe($receiver, LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$value, closure$replaceAndConvert));
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$name, closure$replaceAndConvert, closure$value) {
    return function ($receiver) {
      div($receiver, 'embed-field-name', LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$name, closure$replaceAndConvert));
      div($receiver, 'embed-field-value markup', LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$value, closure$replaceAndConvert));
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$fields, closure$replaceAndConvert) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      tmp$ = closure$fields;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var field = tmp$[tmp$_0];
        var name = (tmp$_1 = field['name']) == null || typeof tmp$_1 === 'string' ? tmp$_1 : throwCCE();
        var value = (tmp$_2 = field['value']) == null || typeof tmp$_2 === 'string' ? tmp$_2 : throwCCE();
        var inline = (tmp$_4 = (tmp$_3 = field['inline']) == null || typeof tmp$_3 === 'boolean' ? tmp$_3 : throwCCE()) != null ? tmp$_4 : false;
        if (name != null && value != null) {
          div($receiver, 'embed-field' + (inline ? ' embed-field-inline' : ''), LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(name, closure$replaceAndConvert, value));
        }
      }
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$author, closure$serverConfig, this$LoriDashboard, closure$replaceAndConvert, closure$title, closure$url, closure$description, closure$fields) {
    return function ($receiver) {
      if (closure$author != null) {
        div($receiver, 'embed-author', LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$author, closure$serverConfig, this$LoriDashboard, closure$replaceAndConvert));
      }
      if (closure$title != null) {
        if (closure$url != null) {
          a($receiver, void 0, closure$url, 'embed-title', LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$title, closure$replaceAndConvert));
        }
         else {
          span($receiver, 'embed-title', LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$title, closure$replaceAndConvert));
        }
      }
      if (closure$description != null) {
        div($receiver, 'embed-description markup', LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$description, closure$replaceAndConvert));
      }
      if (closure$fields != null) {
        div($receiver, 'embed-fields', LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$fields, closure$replaceAndConvert));
      }
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    set_style($receiver, 'max-width: 80px; max-height: 80px;');
    return Unit;
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda_0(closure$author, closure$serverConfig, this$LoriDashboard, closure$replaceAndConvert, closure$title, closure$url, closure$description, closure$fields, closure$thumbnailUrl) {
    return function ($receiver) {
      div($receiver, 'embed-content-inner', LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$author, closure$serverConfig, this$LoriDashboard, closure$replaceAndConvert, closure$title, closure$url, closure$description, closure$fields));
      if (closure$thumbnailUrl != null) {
        img($receiver, void 0, this$LoriDashboard.replaceTokens_9iii47$(closure$thumbnailUrl, closure$serverConfig), void 0, LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda_1);
      }
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda_1(closure$imageUrl, closure$serverConfig, this$LoriDashboard) {
    return function ($receiver) {
      img($receiver, void 0, this$LoriDashboard.replaceTokens_9iii47$(closure$imageUrl, closure$serverConfig), 'image');
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.width = '20';
    $receiver.height = '20';
    return Unit;
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$text, closure$replaceAndConvert) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$replaceAndConvert(closure$text));
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$text, closure$replaceAndConvert) {
    return function ($receiver) {
      unsafe($receiver, LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$text, closure$replaceAndConvert));
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda_2(closure$footer, closure$serverConfig, this$LoriDashboard, closure$replaceAndConvert) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      var iconUrl = (tmp$ = closure$footer['icon_url']) == null || typeof tmp$ === 'string' ? tmp$ : throwCCE();
      var text = (tmp$_0 = closure$footer['text']) == null || typeof tmp$_0 === 'string' ? tmp$_0 : throwCCE();
      if (iconUrl != null) {
        img($receiver, void 0, this$LoriDashboard.replaceTokens_9iii47$(iconUrl, closure$serverConfig), 'embed-footer-icon', LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda_2);
      }
      if (text != null) {
        span($receiver, 'embed-footer', LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda_3(text, closure$replaceAndConvert));
      }
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda_2(closure$author, closure$serverConfig, this$LoriDashboard, closure$replaceAndConvert, closure$title, closure$url, closure$description, closure$fields, closure$thumbnailUrl, closure$imageUrl, closure$footer) {
    return function ($receiver) {
      div($receiver, 'embed-content', LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda_0(closure$author, closure$serverConfig, this$LoriDashboard, closure$replaceAndConvert, closure$title, closure$url, closure$description, closure$fields, closure$thumbnailUrl));
      if (closure$imageUrl != null) {
        a($receiver, void 0, void 0, 'embed-thumbnail embed-thumbnail-rich', LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda_1(closure$imageUrl, closure$serverConfig, this$LoriDashboard));
      }
      if (closure$footer != null) {
        div($receiver, void 0, LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda$lambda_2(closure$footer, closure$serverConfig, this$LoriDashboard, closure$replaceAndConvert));
      }
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda$lambda_3(closure$color, closure$author, closure$serverConfig, this$LoriDashboard, closure$replaceAndConvert, closure$title, closure$url, closure$description, closure$fields, closure$thumbnailUrl, closure$imageUrl, closure$footer) {
    return function ($receiver) {
      div($receiver, 'embed-color-pill', LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda_1(closure$color));
      div($receiver, 'embed embed-rich', LoriDashboard$configureTextArea$lambda$lambda$lambda$lambda_2(closure$author, closure$serverConfig, this$LoriDashboard, closure$replaceAndConvert, closure$title, closure$url, closure$description, closure$fields, closure$thumbnailUrl, closure$imageUrl, closure$footer));
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda$lambda_5(closure$color, closure$author, closure$serverConfig, this$LoriDashboard, closure$replaceAndConvert, closure$title, closure$url, closure$description, closure$fields, closure$thumbnailUrl, closure$imageUrl, closure$footer) {
    return function ($receiver) {
      div($receiver, 'embed-wrapper', LoriDashboard$configureTextArea$lambda$lambda$lambda_3(closure$color, closure$author, closure$serverConfig, this$LoriDashboard, closure$replaceAndConvert, closure$title, closure$url, closure$description, closure$fields, closure$thumbnailUrl, closure$imageUrl, closure$footer));
      return Unit;
    };
  }
  function LoriDashboard$configureTextArea$lambda_3(closure$jquery, closure$extendedMode, closure$markdownPreview, closure$serverConfig, this$LoriDashboard, closure$converter) {
    return function (event, args) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
      var description = typeof (tmp$ = closure$jquery.val()) === 'string' ? tmp$ : throwCCE();
      try {
        var json = JSON.parse(replace(description, '\r', ''));
        tmp$_0 = json['content'] != null || json['embed'] != null;
      }
       catch (e) {
        tmp$_0 = false;
      }
      var isUsingExtendedMode = tmp$_0;
      if (isUsingExtendedMode) {
        closure$extendedMode.css('display', '');
        var json_0 = JSON.parse(replace(description, '\r', ''));
        closure$markdownPreview.empty();
        var content = json_0['content'];
        var embed = json_0['embed'];
        if (content != null && typeof content === 'string') {
          description = this$LoriDashboard.replaceTokens_9iii47$(content, closure$serverConfig);
          description = closure$converter.makeHtml(description);
          closure$markdownPreview.append(description);
        }
        if (embed != null) {
          var markdownEmbedConverter = new ShowdownConverter();
          markdownEmbedConverter.setOption('simpleLineBreaks', true);
          var replaceAndConvert = LoriDashboard$configureTextArea$lambda$replaceAndConvert(closure$serverConfig, this$LoriDashboard, closure$converter);
          var embed_0 = Kotlin.isType(tmp$_1 = embed, Object) ? tmp$_1 : throwCCE();
          var color = (tmp$_2 = embed_0['color']) == null || typeof tmp$_2 === 'number' ? tmp$_2 : throwCCE();
          var author = embed_0['author'];
          var title = (tmp$_3 = embed_0['title']) == null || typeof tmp$_3 === 'string' ? tmp$_3 : throwCCE();
          var url = (tmp$_4 = embed_0['url']) == null || typeof tmp$_4 === 'string' ? tmp$_4 : throwCCE();
          var description_0 = (tmp$_5 = embed_0['description']) == null || typeof tmp$_5 === 'string' ? tmp$_5 : throwCCE();
          var fields = (tmp$_6 = embed_0['fields']) == null || Kotlin.isArray(tmp$_6) ? tmp$_6 : throwCCE();
          var thumbnailObj = embed_0['thumbnail'];
          var thumbnailUrl = (tmp$_7 = thumbnailObj != null ? thumbnailObj['url'] : null) == null || typeof tmp$_7 === 'string' ? tmp$_7 : throwCCE();
          var imageObj = embed_0['image'];
          var imageUrl = (tmp$_8 = imageObj != null ? imageObj['url'] : null) == null || typeof tmp$_8 === 'string' ? tmp$_8 : throwCCE();
          var footer = embed_0['footer'];
          var stringBuilder = StringBuilder_init();
          div_0(appendHTML(stringBuilder, false), 'accessory', LoriDashboard$configureTextArea$lambda$lambda_5(color, author, closure$serverConfig, this$LoriDashboard, replaceAndConvert, title, url, description_0, fields, thumbnailUrl, imageUrl, footer));
          closure$markdownPreview.append(stringBuilder.toString());
        }
      }
       else {
        closure$extendedMode.css('display', 'none');
        description = this$LoriDashboard.replaceTokens_9iii47$(description, closure$serverConfig);
        description = closure$converter.makeHtml(description);
        closure$markdownPreview.html(description);
      }
      return Unit;
    };
  }
  LoriDashboard.prototype.configureTextArea_ky1946$ = function (jquery, markdownPreview, serverConfig, sendTestMessages, textChannelSelect, showPlaceholders, placeholders, showTemplates, templates) {
    if (markdownPreview === void 0)
      markdownPreview = false;
    if (sendTestMessages === void 0)
      sendTestMessages = false;
    if (textChannelSelect === void 0)
      textChannelSelect = null;
    if (showPlaceholders === void 0)
      showPlaceholders = false;
    if (placeholders === void 0) {
      placeholders = emptyMap();
    }
    if (showTemplates === void 0)
      showTemplates = false;
    if (templates === void 0) {
      templates = emptyMap();
    }
    var tmp$;
    var div = jq('<div>').css('position', 'relative');
    if (showTemplates) {
      println('Displaying templates');
      var select = jq('<select>');
      select.insertBefore(jquery);
      var optionData = ArrayList_init();
      var dummyPlaceholder = new LoriDashboard$configureTextArea$ObjectLiteral();
      dummyPlaceholder.id = '';
      dummyPlaceholder.text = '';
      optionData.add_11rb$(dummyPlaceholder);
      tmp$ = templates.entries.iterator();
      while (tmp$.hasNext()) {
        var it = tmp$.next();
        var option = new LoriDashboard$configureTextArea$ObjectLiteral_0();
        option.id = it.key;
        var text = it.key;
        option.text = text;
        optionData.add_11rb$(option);
      }
      var options = new LoriDashboard$configureTextArea$ObjectLiteral_1();
      options.placeholder = 'Sem ideias? Ent\xE3o veja nossos templates!';
      options.data = copyToArray(optionData);
      options.escapeMarkup = LoriDashboard$configureTextArea$lambda;
      options.dropdownAutoWidth = true;
      select.select2(options);
      select.on('select2:select', LoriDashboard$configureTextArea$lambda_0(select, templates, jquery));
    }
    div.insertBefore(jquery);
    jquery.appendTo(div);
    var extendedMode = jq('<div>').html('<i class="fas fa-code"><\/i> Extended Mode').css('background-color', 'green').css('top', '0px').css('right', '0px').css('position', 'absolute').css('color', 'white').css('opacity', '0.75').css('padding', '3px').css('border-radius', '0px 3px 0px 8px').css('display', 'none').css('margin-top', '8px');
    div.append(extendedMode);
    autosize(jquery);
    if (showPlaceholders) {
      println('Displaying placeholders...');
      var html = div_0(appendHTML(StringBuilder_init(), false), void 0, LoriDashboard$configureTextArea$lambda_1(this, placeholders)).toString();
      jq(html).insertAfter(jquery);
    }
    if (sendTestMessages) {
      var button = jq('<button>').addClass('button-discord button-discord-info pure-button').html('<i class=' + '"' + 'fas fa-paper-plane' + '"' + '><\/i> ' + get_legacyLocale().get_25kzsl$('DASHBOARD_TestMessage', []));
      button.on('click', LoriDashboard$configureTextArea$lambda_2(textChannelSelect, jquery));
      button.insertAfter(jquery);
    }
    if (markdownPreview) {
      var markdownPreview_0 = jq('<div>').attr('id', jquery.attr('id') + '-markdownpreview');
      var converter = new ShowdownConverter();
      converter.setOption('simpleLineBreaks', true);
      jquery.on('input', LoriDashboard$configureTextArea$lambda_3(jquery, extendedMode, markdownPreview_0, serverConfig, this, converter));
      markdownPreview_0.insertAfter(jquery);
    }
    jquery.trigger('input', null);
  };
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  LoriDashboard.prototype.replaceTokens_9iii47$ = function (text, serverConfig, customTokens) {
    if (customTokens === void 0) {
      customTokens = LinkedHashMap_init();
    }
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    var selfUser = (tmp$ = serverConfig != null ? serverConfig.selfUser : null) != null ? tmp$ : new Member('123170274651668480', 'Loritta', '0219', get_loriUrl() + 'assets/img/unknown.png');
    var message = text;
    var mentionUser = '<span class=' + '"' + 'discord-mention' + '"' + '>@' + selfUser.name + '<\/span>';
    var user = selfUser.name;
    var userDiscriminator = selfUser.discriminator;
    var userId = selfUser.id;
    var nickname = selfUser.name;
    var avatarUrl = selfUser.avatar;
    var guildName = '';
    var guildSize = '';
    var mentionOwner = '';
    var owner = '';
    if (serverConfig != null) {
      guildName = serverConfig.guildName;
      guildSize = serverConfig.memberCount.toString();
    }
    tmp$_0 = customTokens.entries.iterator();
    while (tmp$_0.hasNext()) {
      var tmp$_8 = tmp$_0.next();
      var token = tmp$_8.key;
      var value = tmp$_8.value;
      message = replace(message, '{' + token + '}', value != null ? value : '\uD83E\uDD37');
    }
    message = replace(message, '{@user}', mentionUser);
    message = replace(message, '{user}', user);
    message = replace(message, '{user-id}', userId);
    message = replace(message, '{user-avatar-url}', avatarUrl);
    message = replace(message, '{user-discriminator}', userDiscriminator);
    message = replace(message, '{nickname}', nickname);
    message = replace(message, '{guild}', guildName);
    message = replace(message, '{guild-size}', guildSize);
    message = replace(message, '{@owner}', mentionOwner);
    message = replace(message, '{owner}', owner);
    if (serverConfig != null) {
      tmp$_1 = serverConfig.textChannels;
      for (tmp$_2 = 0; tmp$_2 !== tmp$_1.length; ++tmp$_2) {
        var textChannel = tmp$_1[tmp$_2];
        message = replace(message, '#' + textChannel.name, '<#' + textChannel.id + '>');
        message = replace(message, '<#' + textChannel.id + '>', '<span class=' + '"' + 'discord-mention' + '"' + '>#' + textChannel.name + '<\/span>');
      }
      tmp$_3 = serverConfig.roles;
      for (tmp$_4 = 0; tmp$_4 !== tmp$_3.length; ++tmp$_4) {
        var role = tmp$_3[tmp$_4];
        message = replace(message, '@' + role.name, '<@&' + role.id + '>');
        var roleSpan = jq('<span>').text('@' + role.name).addClass('discord-mention');
        if (role.color != null) {
          roleSpan.css('color', 'rgb(' + role.color.red + ', ' + role.color.green + ', ' + role.color.blue + ')');
          roleSpan.css('background-color', 'rgba(' + role.color.red + ', ' + role.color.green + ', ' + role.color.blue + ', 0.298039)');
        }
        message = replace(message, '<@&' + role.id + '>', typeof (tmp$_5 = roleSpan.prop('outerHTML')) === 'string' ? tmp$_5 : throwCCE());
      }
      var regex = Regex_init('<(?:a)?:([A-z0-9_-]+):([0-9]+)>', RegexOption.MULTILINE);
      message = regex.replace_x2uqeu$(message, '<img class="inline-emoji" src="https://cdn.discordapp.com/emojis/$2.png?v=1">');
      tmp$_6 = serverConfig.emotes;
      for (tmp$_7 = 0; tmp$_7 !== tmp$_6.length; ++tmp$_7) {
        var emote = tmp$_6[tmp$_7];
        message = replace(message, ':' + emote.name + ':', '<:' + emote.name + ':' + emote.id + '>');
      }
      message = regex.replace_x2uqeu$(message, '<img class="inline-emoji" src="https://cdn.discordapp.com/emojis/$2.png?v=1">');
    }
    return message;
  };
  function LoriDashboard$configSavedSfx$lambda() {
    return new Audio(get_loriUrl() + 'assets/snd/config_saved.mp3');
  }
  function LoriDashboard$configErrorSfx$lambda() {
    return new Audio(get_loriUrl() + 'assets/snd/config_error.mp3');
  }
  function LoriDashboard$wrapper$lambda() {
    return jq('#server-configuration');
  }
  function LoriDashboard$leftSidebar$lambda() {
    return jq('#left-sidebar');
  }
  function LoriDashboard$rightSidebar$lambda() {
    return jq('#right-sidebar');
  }
  function LoriDashboard$loadingScreen$lambda() {
    return jq('#loading-screen');
  }
  LoriDashboard.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LoriDashboard',
    interfaces: []
  };
  var LoriDashboard_instance = null;
  function LoriDashboard_getInstance() {
    if (LoriDashboard_instance === null) {
      new LoriDashboard();
    }
    return LoriDashboard_instance;
  }
  function toString_0($receiver, radix) {
    var value = $receiver;
    return value.toString(radix);
  }
  function LoriServerList() {
    LoriServerList_instance = this;
    this.wrapperBlur_nvkmkt$_0 = lazy(LoriServerList$wrapperBlur$lambda);
  }
  function LoriServerList$start$lambda(closure$backgroundY) {
    return function () {
      jq('.serverListHeader').css('background-position-y', closure$backgroundY.v);
      closure$backgroundY.v = closure$backgroundY.v - 2 | 0;
      return Unit;
    };
  }
  function LoriServerList$start$lambda_0(this$LoriServerList) {
    return function (it) {
      this$LoriServerList.showTopRankServers_vux9f0$(50, 0);
      return Unit;
    };
  }
  function LoriServerList$start$lambda_1(this$LoriServerList) {
    return function (it) {
      this$LoriServerList.showRecentlyBumpedRankServers_vux9f0$(50, 0);
      return Unit;
    };
  }
  LoriServerList.prototype.start = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    println('LoriServerList - owo');
    var backgroundY = {v: 0};
    window.setInterval(LoriServerList$start$lambda(backgroundY), 75);
    var selfProfileDiv = ensureNotNull(document.getElementById('self-profile-json')).innerHTML;
    println(selfProfileDiv);
    var serverSamplesDiv = ensureNotNull(document.getElementById('server-samples-json')).innerHTML;
    println(serverSamplesDiv);
    var data = JSON.parse(selfProfileDiv);
    if (!equals(toJson_0(data)['api:code'], 4))
      selfProfile = toJson(data);
    var pathName = window.location.pathname;
    var args = split(pathName, ['/']);
    var arg0 = getOrNull(args, 0);
    var arg1 = getOrNull(args, 1);
    var arg2 = getOrNull(args, 2);
    var arg3 = getOrNull(args, 3);
    var arg4 = getOrNull(args, 4);
    if (equals(arg3, 'page') && arg4 != null) {
      var skip = ((tmp$ = toIntOrNull(arg4)) != null ? tmp$ : 1) - 1 | 0;
      skip = skip * 50 | 0;
      this.showTopRankServers_vux9f0$(50, skip);
    }
     else if (equals(arg3, 'bumped') && arg4 != null) {
      var skip_0 = ((tmp$_0 = toIntOrNull(arg4)) != null ? tmp$_0 : 1) - 1 | 0;
      skip_0 = skip_0 * 50 | 0;
      this.showRecentlyBumpedRankServers_vux9f0$(50, skip_0);
    }
     else {
      println('owo payload: ' + serverSamplesDiv);
      var payload = JSON.parse(serverSamplesDiv);
      println('Sponsored Count: ' + toString(payload.sponsoredCount));
      println('Partners Count: ' + toString(payload.partnersCount));
      println('Total Count: ' + toString(payload.totalCount));
      var sponsorSampleDiv = jq('.sponsored-servers-sample');
      var partnerSampleDiv = jq('.partners-servers-sample');
      var allServersSampleDiv = jq('.all-servers-sample');
      var randomServersSampleDiv = jq('.random-servers-sample');
      var recentlyBumpedServersSampleDiv = jq('.recently-bumped-servers-sample');
      tmp$_1 = payload.sponsored;
      for (tmp$_2 = 0; tmp$_2 !== tmp$_1.length; ++tmp$_2) {
        var serverSample = tmp$_1[tmp$_2];
        this.addServerSample_bewp0m$(serverSample, sponsorSampleDiv, 'pure-u-1 pure-u-md-1-2');
      }
      tmp$_3 = payload.partners;
      for (tmp$_4 = 0; tmp$_4 !== tmp$_3.length; ++tmp$_4) {
        var serverSample_0 = tmp$_3[tmp$_4];
        this.addServerSample_bewp0m$(serverSample_0, partnerSampleDiv, 'pure-u-1 pure-u-md-1-2');
      }
      tmp$_5 = payload.top;
      for (var index = 0; index !== tmp$_5.length; ++index) {
        var serverSample_1 = tmp$_5[index];
        if (index % 5 === 0) {
          this.addAdvertisement_yp3tk2$(allServersSampleDiv);
          this.injectAdvertisements_yp3tk2$(allServersSampleDiv);
        }
        this.addServerSample_bewp0m$(serverSample_1, allServersSampleDiv);
      }
      tmp$_6 = payload.recentlyBumped;
      for (var index_0 = 0; index_0 !== tmp$_6.length; ++index_0) {
        var serverSample_2 = tmp$_6[index_0];
        if (index_0 % 5 === 0) {
          this.addAdvertisement_yp3tk2$(recentlyBumpedServersSampleDiv);
          this.injectAdvertisements_yp3tk2$(recentlyBumpedServersSampleDiv);
        }
        this.addServerSample_bewp0m$(serverSample_2, recentlyBumpedServersSampleDiv);
      }
      tmp$_7 = payload.random;
      for (tmp$_8 = 0; tmp$_8 !== tmp$_7.length; ++tmp$_8) {
        var serverSample_3 = tmp$_7[tmp$_8];
        this.addServerSample_bewp0m$(serverSample_3, randomServersSampleDiv, 'pure-u-1 pure-u-md-1-2');
      }
      jq('.view-more-servers').click(LoriServerList$start$lambda_0(this));
      jq('.view-more-recently-bumped-servers').click(LoriServerList$start$lambda_1(this));
    }
  };
  function LoriServerList$showTopRankServers$lambda$lambda(closure$size, closure$skip, this$LoriServerList) {
    return function (it) {
      this$LoriServerList.showTopRankServers_vux9f0$(closure$size, closure$skip - 50 | 0);
      return Unit;
    };
  }
  function LoriServerList$showTopRankServers$lambda$lambda_0(closure$size, closure$skip, this$LoriServerList) {
    return function (it) {
      this$LoriServerList.showTopRankServers_vux9f0$(closure$size, closure$skip + 50 | 0);
      return Unit;
    };
  }
  function LoriServerList$showTopRankServers$lambda(this$LoriServerList, closure$page, closure$size, closure$skip) {
    return function (data, b, c) {
      var tmp$, tmp$_0;
      println('Received data: ' + stringify(data));
      var payload = toJson(data);
      tmp$ = payload.result;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var serverSample = tmp$[tmp$_0];
        this$LoriServerList.addServerSample_bewp0m$(serverSample, jq('.rank-list-sample'), 'pure-u-1 pure-u-md-1-2');
      }
      jq('.rank-list-sample').after(jq('<div>').attr('id', 'rank-list-sample-buttons').css('text-align', 'center'));
      if (closure$page.v !== 1.0) {
        println('diff page!');
        jq('#rank-list-sample-buttons').append(jq('<button>').attr('class', 'button-discord button-discord-info pure-button').html('<i class="fas fa-arrow-left"><\/i>')).click(LoriServerList$showTopRankServers$lambda$lambda(closure$size, closure$skip, this$LoriServerList));
      }
      if (numberToInt(payload.totalCount) > (closure$skip + closure$size | 0)) {
        jq('#rank-list-sample-buttons').append(jq('<button>').attr('class', 'button-discord button-discord-info pure-button').html('<i class="fas fa-arrow-right"><\/i>')).click(LoriServerList$showTopRankServers$lambda$lambda_0(closure$size, closure$skip, this$LoriServerList));
      }
      window.scroll(0.0, 0.0);
      this$LoriServerList.hideLoadingBar();
      return Unit;
    };
  }
  var Math_0 = Math;
  LoriServerList.prototype.showTopRankServers_vux9f0$ = function (size, skip) {
    jq('#rank-list-sample-buttons').remove();
    jq('#listWrapper').empty();
    jq('#rank-list-sample-buttons').empty();
    jq('#listWrapper').html('\n\t\t\t\t\t<div class="oddWrapper">\n<div class="contentWrapper" style="text-align: center; width: 80%;">\n<div class="sectionHeader">\n<i class="far fa-heart"><\/i> owo whats this???\n<\/div>\n<div class="rank-list-sample pure-g"><\/div>\n<\/div>\n<\/div>');
    this.showLoadingBar_pdl1vj$('Carregando...');
    var x = skip / 50 | 0;
    var page = {v: Math_0.floor(x) + 1};
    window.history.pushState(null, 'owo whats this', '/servers/page/' + page.v);
    jQuery.post(get_loriUrl() + 'api/v1/server-list/get-servers?size=' + size + '&skip=' + skip + '&serverType=top', LoriServerList$showTopRankServers$lambda(this, page, size, skip));
  };
  function LoriServerList$showRecentlyBumpedRankServers$lambda(this$LoriServerList) {
    return function (data, b, c) {
      var tmp$, tmp$_0;
      var payload = toJson(data);
      tmp$ = payload.result;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var serverSample = tmp$[tmp$_0];
        this$LoriServerList.addServerSample_bewp0m$(serverSample, jq('.rank-list-sample'), 'pure-u-1 pure-u-md-1-2');
      }
      window.scroll(0.0, 0.0);
      this$LoriServerList.hideLoadingBar();
      return Unit;
    };
  }
  LoriServerList.prototype.showRecentlyBumpedRankServers_vux9f0$ = function (size, skip) {
    jq('#listWrapper').empty();
    jq('#listWrapper').html('\n\t\t\t\t\t<div class="oddWrapper">\n<div class="contentWrapper" style="text-align: center; width: 80%;">\n<div class="sectionHeader">\n<i class="far fa-heart"><\/i> owo whats this???\n<\/div>\n<div class="rank-list-sample pure-g"><\/div>\n<\/div>\n<\/div>');
    this.showLoadingBar_pdl1vj$('Carregando...');
    var x = skip / 50 | 0;
    var page = Math_0.floor(x) + 1;
    window.history.pushState(null, 'owo whats this', '/servers/bumped/' + page);
    jQuery.post(get_loriUrl() + 'api/v1/server-list/get-servers?size=' + size + '&skip=' + skip + '&serverType=recentlyBumped', LoriServerList$showRecentlyBumpedRankServers$lambda(this));
  };
  function LoriServerList$addServerSample$lambda(it) {
    return '<span class=' + '"' + 'sample-keyword' + '"' + '>' + get_legacyLocale().get_25kzsl$('KEYWORD_' + toString(it), []) + '<\/span>';
  }
  function LoriServerList$addServerSample$lambda_0(closure$serverSample) {
    return function (it) {
      PartnerView_getInstance().openServerModal_xn1cer$(closure$serverSample, false, get_legacyLocale());
      return Unit;
    };
  }
  LoriServerList.prototype.addServerSample_bewp0m$ = function (serverSample, div, clazz) {
    if (clazz === void 0)
      clazz = null;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    if (clazz != null) {
      tmp$ = jq('#server-sample-template').clone().attr('id', null).attr('class', clazz);
    }
     else {
      tmp$ = jq('#server-sample-template').children();
    }
    var serverSampleTemplate = tmp$;
    var template = serverSampleTemplate.clone();
    template.find('.server-tagline').text((tmp$_0 = serverSample.serverListConfig.tagline) != null ? tmp$_0 : ':shrug:');
    var tagline = {v: template.find('.server-tagline').text()};
    var $receiver = serverSample.serverEmotes;
    var tmp$_9;
    for (tmp$_9 = 0; tmp$_9 !== $receiver.length; ++tmp$_9) {
      var element = $receiver[tmp$_9];
      tagline.v = replace(tagline.v, ':' + element.name + ':', '<img class=' + '"' + 'discord-emote' + '"' + ' src=' + '"' + element.imageUrl + '"' + '>');
    }
    var type = getType(serverSample);
    switch (type.name) {
      case 'SPONSOR':
        tmp$_1 = 'server-sponsor';
        break;
      case 'PARTNER':
        tmp$_1 = 'server-partner';
        break;
      case 'NORMAL':
        tmp$_1 = 'server-normal';
        break;
      default:tmp$_1 = Kotlin.noWhenBranchMatched();
        break;
    }
    template.addClass(tmp$_1);
    template.find('.server-sample-icon').attr('src', (tmp$_3 = replace((tmp$_2 = serverSample.iconUrl) != null ? tmp$_2 : get_loriUrl() + 'assets/img/unknown.png', 'jpg', 'png')) != null ? tmp$_3 : 'aaa');
    template.find('.server-name').text(serverSample.name);
    template.find('.server-author').text(serverSample.ownerName + '#' + serverSample.ownerDiscriminator);
    template.find('.server-tagline').html((tmp$_4 = tagline.v) != null ? tmp$_4 : ':shrug:');
    template.find('.server-upvotes').html(serverSample.validVoteCount.toString());
    var keywords = joinToString(serverSample.serverListConfig.keywords, ' ', void 0, void 0, void 0, void 0, LoriServerList$addServerSample$lambda);
    template.find('.server-keywords').html(keywords);
    var serverIcon = (tmp$_6 = (tmp$_5 = serverSample.iconUrl) != null ? replace(tmp$_5, 'jpg', 'png') : null) != null ? tmp$_6 : get_loriUrl() + 'assets/img/unknown.png';
    PartnerView_getInstance();
    var partnerInformation = new PartnerView$PartnerInformation(serverSample.id, serverIcon, serverSample.invite, serverSample.name, (tmp$_7 = serverSample.serverListConfig.tagline) != null ? tmp$_7 : ':shrug:', (tmp$_8 = serverSample.serverListConfig.description) != null ? tmp$_8 : ':shrug:', serverSample.serverListConfig.keywords, serverSample.ownerId, serverSample.ownerName, serverSample.ownerDiscriminator, '???', serverSample.memberCount, serverSample.onlineCount, serverSample.serverEmotes, serverSample.canVote, serverSample.cantVoteReason, serverSample.canVoteNext, serverSample.joinedServer);
    template.find('.server-button').click(LoriServerList$addServerSample$lambda_0(serverSample));
    div.append(template);
  };
  LoriServerList.prototype.addAdvertisement_yp3tk2$ = function (div) {
    var advertisement = jq('<ins>').addClass('adsbygoogle').attr('style', 'display:block').attr('data-ad-client', 'ca-pub-9989170954243288').attr('data-ad-slot', '3480163710').attr('data-ad-format', 'auto');
    div.append(advertisement);
  };
  Object.defineProperty(LoriServerList.prototype, 'wrapperBlur', {
    get: function () {
      return this.wrapperBlur_nvkmkt$_0.value;
    }
  });
  LoriServerList.prototype.showLoadingBar_pdl1vj$ = function (text) {
    if (text === void 0)
      text = 'Salvando...';
    this.wrapperBlur.css('filter', 'blur(7px)');
    if (text != null)
      LoriDashboard_getInstance().loadingScreen.find('#loading-screen-text').text(text);
    LoriDashboard_getInstance().loadingScreen.fadeIn(250);
  };
  LoriServerList.prototype.hideLoadingBar = function () {
    this.wrapperBlur.css('filter', '');
    LoriDashboard_getInstance().loadingScreen.fadeOut(250);
  };
  LoriServerList.prototype.injectAdvertisements_yp3tk2$ = function (element) {
    element.find('.guild-advertisement').attr('class', 'adsbygoogle');
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    }
     catch (e) {
      println('Error while injecting: ' + toString(e.message));
    }
    println('Advertisement injected!');
  };
  function LoriServerList$wrapperBlur$lambda() {
    return jq('#wrapperBlur');
  }
  LoriServerList.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LoriServerList',
    interfaces: []
  };
  var LoriServerList_instance = null;
  function LoriServerList_getInstance() {
    if (LoriServerList_instance === null) {
      new LoriServerList();
    }
    return LoriServerList_instance;
  }
  var legacyLocale;
  function get_legacyLocale() {
    if (legacyLocale == null)
      return throwUPAE('legacyLocale');
    return legacyLocale;
  }
  function set_legacyLocale(legacyLocale_0) {
    legacyLocale = legacyLocale_0;
  }
  var locale;
  function get_locale() {
    if (locale == null)
      return throwUPAE('locale');
    return locale;
  }
  function set_locale(locale_0) {
    locale = locale_0;
  }
  var selfProfile;
  function get_loriUrl() {
    return window.location.protocol + '//' + window.location.host + '/';
  }
  function jq(query) {
    var tmp$, tmp$_0;
    tmp$_0 = Kotlin.isType(tmp$ = query, Any) ? tmp$ : throwCCE();
    return jQuery(tmp$_0);
  }
  function toJson($receiver) {
    return JSON.parse(JSON.stringify($receiver));
  }
  function toJson_0($receiver) {
    return JSON.parse(JSON.stringify($receiver));
  }
  function stringify($receiver) {
    return JSON.stringify($receiver);
  }
  var getKClass = Kotlin.getKClass;
  var getOrDefault = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.context.getOrDefault_6qy6ah$;
  function loadEmbeddedLocale() {
    var tmp$, tmp$_0;
    println('Loading locale from embedded data... (if available)');
    var localeJson = (tmp$ = document.getElementById('base-locale-json')) != null ? tmp$.innerHTML : null;
    var legacyLocaleJson = (tmp$_0 = document.getElementById('locale-json')) != null ? tmp$_0.innerHTML : null;
    if (localeJson != null) {
      println('Embedded locale found!');
      println('base-locale-json: ' + toString(localeJson));
      var $receiver = JSON_0.Companion;
      var baseLocale = $receiver.parse_awif5v$(getOrDefault($receiver.context, getKClass(BaseLocale)), localeJson);
      println('Parsed BaseLocale from embedded locale within body!');
      println('There is ' + baseLocale.localeEntries.size + ' keys!');
      set_locale(baseLocale);
    }
    if (legacyLocaleJson != null) {
      println('Embedded *legacy* locale found!');
      println('locale-json: ' + toString(legacyLocaleJson));
      var asJson = JSON.parse(legacyLocaleJson);
      println('Converted it to JSON... ' + asJson);
      var alreadyInitalized = legacyLocale != null;
      if (alreadyInitalized) {
        println("Locale already initalized, we aren't going to replace it then...");
      }
       else {
        set_legacyLocale(LegacyBaseLocale$Companion_getInstance().create_qk3xy8$(asJson));
        println('Parsed LegacyBaseLocale from embedded locale within body!');
        println('Testing keys...');
        println(ensureNotNull(get_legacyLocale()).get_25kzsl$('KEYWORD_STREAMER', []));
        println(ensureNotNull(get_legacyLocale()).get_25kzsl$('RAFFLE_YouEarned', [250]));
        println(ensureNotNull(get_legacyLocale()).get_25kzsl$('LORITTA_ADDED_ON_SERVER', ['MrPowerGamerBR', 'PerfectDreams', 'Apartamento da Loritta', 125, get_loriUrl()]));
      }
    }
     else {
      println("Couldn't find embedded data in body!");
    }
  }
  function main$lambda(it) {
    loadEmbeddedLocale();
    true;
    return Unit;
  }
  function main$lambda$lambda(closure$modal) {
    return function () {
      closure$modal.close();
      return Unit;
    };
  }
  function main$lambda$lambda_0(closure$error) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Oopsie Woopsie! ' + toString(closure$error));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda($receiver) {
    set_style($receiver, 'width: 100%;');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda($receiver) {
    set_style($receiver, 'overflow: hidden;');
    img($receiver, 'Loritta Pobre', get_loriUrl() + 'assets/img/loritta_pobre.png', 'animated fadeInUp', main$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    var tmp$, tmp$_0;
    (tmp$_0 = ($receiver.unaryPlus_pdl1vz$((tmp$ = get_legacyLocale()) != null ? tmp$.get_25kzsl$('ERROR_SomethingWentWrong', []) : null), Unit)) != null ? tmp$_0 : 'Alguma coisa deu errada...';
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    var tmp$, tmp$_0;
    $receiver.raw_61zpoe$((tmp$_0 = (tmp$ = get_legacyLocale()) != null ? tmp$.get_25kzsl$('ERROR_WhatShouldIDo', []) : null) != null ? tmp$_0 : "Infelizmente ningu\xE9m \xE9 perfeito... e pelo visto voc\xEA encontrou um problema no meu website... Tente recarregar a p\xE1gina e veja se o problema persiste, caso persista, entre no meu <a href='" + get_loriUrl() + "support'>servidor de suporte<\/a> e envie o c\xF3digo abaixo junto com uma pequena explica\xE7\xE3o sobre o que voc\xEA estava tentando fazer no momento que deu o erro!");
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    unsafe($receiver, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    var tmp$, tmp$_0;
    (tmp$_0 = ($receiver.unaryPlus_pdl1vz$((tmp$ = get_legacyLocale()) != null ? tmp$.get_25kzsl$('ERROR_SorryForTheInconvenience', []) : null), Unit)) != null ? tmp$_0 : 'Desculpe pela inconveni\xEAncia...';
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$content) {
    return function ($receiver) {
      set_style($receiver, 'word-wrap: break-word; white-space: pre-wrap;');
      $receiver.unaryPlus_pdl1vz$(window.btoa(closure$content));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_0(closure$content) {
    return function ($receiver) {
      h3($receiver, 'sectionHeader', main$lambda$lambda$lambda$lambda$lambda$lambda);
      p($receiver, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_0);
      p($receiver, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_1);
      pre($receiver, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$content));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_0(closure$content) {
    return function ($receiver) {
      div($receiver, 'sectionText', main$lambda$lambda$lambda$lambda$lambda_0(closure$content));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda(closure$content) {
    return function ($receiver) {
      set_style($receiver, 'text-align: left;');
      div($receiver, 'pure-u-1 pure-u-md-1-4', main$lambda$lambda$lambda$lambda);
      div($receiver, 'pure-u-1 pure-u-md-3-4', main$lambda$lambda$lambda$lambda_0(closure$content));
      return Unit;
    };
  }
  function main$lambda$lambda_1(closure$content) {
    return function ($receiver) {
      div($receiver, 'pure-g vertically-centered-content', main$lambda$lambda$lambda(closure$content));
      return Unit;
    };
  }
  function main$lambda_0(message, file, line, col, error) {
    var tmp$;
    if (!contains_0(message, 'adsbygoogle')) {
      println('Erro detectado! Abrindo modal...');
      println('Message: ' + toString(message));
      println('file: ' + file);
      println('line: ' + toString(line));
      println('col: ' + toString(col));
      println('error: ' + toString(error));
      println(error.stack);
      var content = trimMargin('Error: ' + message.toString() + '\n' + '\t\t\t|User Agent: ' + window.navigator.userAgent + '\n' + '\t\t\t|URL: ' + window.location.href + '\n' + '\t\t\t|User ID: ' + ((tmp$ = selfProfile != null ? selfProfile.userId : null) != null ? tmp$ : 'Unknown') + '\n' + '\t\t\t|Stack:' + '\n' + '\t\t\t|' + error.stack.toString() + '\n' + '\t\t');
      var modal = new TingleModal(new TingleOptions_0(true, void 0, void 0, void 0, ['tingle-modal--overflow']));
      modal.addFooterBtn('<i class="fas fa-times"><\/i> Fechar', 'button-discord pure-button button-discord-modal button-discord-modal-secondary-action', main$lambda$lambda(modal));
      var stringBuilder = StringBuilder_init();
      div_0(appendHTML(div_0(appendHTML(stringBuilder, false), 'category-name', main$lambda$lambda_0(error))), void 0, main$lambda$lambda_1(content));
      modal.setContent(stringBuilder.toString());
      modal.open();
    }
    return false;
  }
  function main(args) {
    println('LoriUtils! ^-^');
    document.addEventListener('DOMContentLoaded', main$lambda);
    window.onerror = main$lambda_0;
  }
  function testError() {
    var test = null;
    ensureNotNull(test);
  }
  function PartnerView() {
    PartnerView_instance = this;
    this.activeInformation = null;
  }
  Object.defineProperty(PartnerView.prototype, 'visibleModal', {
    get: function () {
      return jq('.tingle-modal--visible');
    }
  });
  PartnerView.prototype.start = function () {
    println('Starting partner view... ^-^ Pulling partner information from Loritta owo');
    var selfProfileDiv = ensureNotNull(document.getElementById('self-profile-json')).innerHTML;
    println(selfProfileDiv);
    var serverInformationDiv = ensureNotNull(document.getElementById('server-information-json')).innerHTML;
    println(serverInformationDiv);
    var data = JSON.parse(selfProfileDiv);
    if (!equals(toJson_0(data)['api:code'], 4))
      selfProfile = toJson(data);
    var json = JSON.parse(serverInformationDiv);
    if (equals(json['api:code'], 3)) {
      window.location.href = get_loriUrl() + 'servers';
    }
     else {
      this.openServerModal_xn1cer$(toJson(json), true, get_legacyLocale());
    }
  };
  function PartnerView$openServerModal$lambda$lambda(closure$information) {
    return function (data, b, c) {
      println(stringify(data));
      var payload = toJson_0(data);
      var apiCode = payload['api:code'];
      switch (apiCode) {
        case 0:
          println('Success!');
          break;
        case 3:
          println('wat');
          break;
        case 4:
          var json_0 = json([]);
          json_0['redirectUrl'] = get_loriUrl() + 's/' + closure$information.id + '?force';
          window.location.href = 'https://discordapp.com/oauth2/authorize?redirect_uri=https://loritta.website%2Fdashboard&scope=identify%20guilds%20email%20guilds.join&response_type=code&client_id=297153970613387264&state=' + window.btoa(stringify(json_0));
          break;
      }
      return Unit;
    };
  }
  function PartnerView$openServerModal$lambda(closure$information, closure$modal) {
    return function () {
      println('Adding user to guild...');
      jQuery.get(get_loriUrl() + 'api/v1/server-list/join/?guildId=' + closure$information.id, PartnerView$openServerModal$lambda$lambda(closure$information));
      closure$modal.close();
      return Unit;
    };
  }
  function PartnerView$openServerModal$lambda_0() {
    return Unit;
  }
  function PartnerView$openServerModal$lambda_1(closure$modal) {
    return function () {
      println('CLICKED3!!!');
      closure$modal.close();
      return Unit;
    };
  }
  function PartnerView$openServerModal$lambda_2(closure$json) {
    return function (it) {
      window.location.href = 'https://discordapp.com/oauth2/authorize?redirect_uri=https://loritta.website%2Fdashboard&scope=identify%20guilds%20email%20guilds.join&response_type=code&client_id=297153970613387264&state=' + window.btoa(JSON.stringify(closure$json));
      return Unit;
    };
  }
  function PartnerView$openServerModal$lambda_3(closure$json) {
    return function (it) {
      window.location.href = 'https://discordapp.com/oauth2/authorize?redirect_uri=https://loritta.website%2Fdashboard&scope=identify%20guilds%20email%20guilds.join&response_type=code&client_id=297153970613387264&state=' + window.btoa(JSON.stringify(closure$json));
      return Unit;
    };
  }
  function PartnerView$openServerModal$lambda$lambda_0(closure$hypeButton, this$PartnerView, closure$ts1Promotion, closure$locale, closure$information) {
    return function (data, b, c) {
      var tmp$;
      println(stringify(data));
      var vote = toJson_0(data);
      var codeResponse = vote['api:code'];
      if (codeResponse === 0) {
        closure$hypeButton.addClass('button-discord-disabled').removeClass('button-discord-success');
        this$PartnerView.visibleModal.find('.promote-notification').text('Obrigado por promover! ^-^');
        return closure$ts1Promotion.play(), Unit;
      }
       else {
        switch (codeResponse) {
          case 4:
            tmp$ = closure$locale.get_25kzsl$('UPVOTE_LogInDiscord', []);
            break;
          case 3:
            tmp$ = closure$locale.get_25kzsl$('UPVOTE_UnknownGuild', []);
            break;
          case 6:
            tmp$ = closure$locale.get_25kzsl$('UPVOTE_NeedsToBeMember', []);
            break;
          case 7:
            tmp$ = closure$locale.get_25kzsl$('UPVOTE_InvalidCaptchaResponse', []);
            break;
          case 5:
            var moment_0 = new moment(ensureNotNull(closure$information.canVoteNext));
            tmp$ = closure$locale.get_25kzsl$('PROMOTE_CanPromoteAgain', [moment_0.fromNow()]);
            break;
          case 10:
            tmp$ = closure$locale.get_25kzsl$('UPVOTE_NotVerified', []);
            break;
          case 11:
            tmp$ = closure$locale.get_25kzsl$('UPVOTE_BadEmail', []);
            break;
          case 9:
            tmp$ = closure$locale.get_25kzsl$('UPVOTE_BadIp', []);
            break;
          case 14:
            tmp$ = 'Sonhos insuficientes!';
            break;
          default:tmp$ = 'Error: ' + codeResponse;
            break;
        }
        var error = tmp$;
        closure$hypeButton.addClass('button-discord-disabled').removeClass('button-discord-success');
        return this$PartnerView.visibleModal.find('.promote-notification').text(error);
      }
    };
  }
  function PartnerView$openServerModal$lambda_4(closure$hypeButton, closure$information, this$PartnerView, closure$ts1Promotion, closure$locale) {
    return function (it) {
      closure$hypeButton.removeClass('button-discord-success').addClass('button-discord-disabled');
      jQuery.post(get_loriUrl() + 'api/v1/server-list/bump?guildId=' + closure$information.id, PartnerView$openServerModal$lambda$lambda_0(closure$hypeButton, this$PartnerView, closure$ts1Promotion, closure$locale, closure$information));
      return Unit;
    };
  }
  PartnerView.prototype.openServerModal_xn1cer$ = function (information, direct, locale) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    println('Opening server modal... ' + JSON.stringify(information));
    println('Is direct? ' + direct);
    println('---');
    println('Can vote? ' + information.canVote);
    println("Can't vote reason: " + toString(information.cantVoteReason));
    println('Can vote in... ' + toString(information.canVoteNext));
    println('---');
    var ts1Promotion = new Audio(get_loriUrl() + 'assets/snd/ts1_promotion.mp3');
    moment.locale('pt-br');
    this.activeInformation = information;
    var converter = new ShowdownConverter();
    var template = jq('#guild-template').clone();
    template.find('.guild-name').text(information.name);
    var description = {v: (tmp$ = information.serverListConfig.description) != null ? tmp$ : ''};
    var $receiver = information.serverEmotes;
    var tmp$_3;
    for (tmp$_3 = 0; tmp$_3 !== $receiver.length; ++tmp$_3) {
      var element = $receiver[tmp$_3];
      description.v = replace(description.v, ':' + element.name + ':', '<img class=' + '"' + 'discord-emote' + '"' + ' src=' + '"' + element.imageUrl + '"' + '>');
    }
    description.v = converter.makeHtml(description.v);
    template.find('.description').html(description.v);
    template.find('.icon').attr('src', ((tmp$_0 = information.iconUrl) != null ? tmp$_0 : get_loriUrl() + 'assets/img/unknown.png') + '?size=1024');
    template.find('.member-count').text(information.memberCount);
    template.find('.online-count').text(information.onlineCount);
    template.find('.guild-owner').text(information.ownerName + '#' + information.ownerDiscriminator);
    if (direct) {
      if (information.hasCustomBackground)
        jq('html').css('background', 'url(' + '"' + get_loriUrl() + 'assets/img/servers/backgrounds/' + information.id + '.png?v=' + toString(information.backgroundKey) + '"' + ') no-repeat center center fixed');
      else
        jq('html').attr('style', 'background-size: initial !important;');
    }
    var $receiver_0 = information.serverEmotes;
    var tmp$_4;
    for (tmp$_4 = 0; tmp$_4 !== $receiver_0.length; ++tmp$_4) {
      var element_0 = $receiver_0[tmp$_4];
      template.find('.emotes').append(jq('<img>').attr('src', element_0.imageUrl).attr('alt', element_0.name).attr('title', ':' + element_0.name + ':').css('height', '24px').css('width', 'auto'));
    }
    var $receiver_1 = information.serverListConfig.keywords;
    var tmp$_5;
    for (tmp$_5 = 0; tmp$_5 !== $receiver_1.length; ++tmp$_5) {
      var element_1 = $receiver_1[tmp$_5];
      if (element_1 != null) {
        template.find('.keywords').append(jq('<span>').addClass('keyword').text(locale.get_25kzsl$('KEYWORD_' + element_1.toString(), [])));
      }
    }
    var modal = new TingleModal(new TingleOptions_0(true, void 0, void 0, void 0, ['tingle-modal--overflow']));
    if (!information.joinedServer) {
      modal.addFooterBtn('<i class="fab fa-discord"><\/i> Entrar', 'button-discord button-discord-info pure-button button-discord-modal', PartnerView$openServerModal$lambda(information, modal));
    }
     else {
      modal.addFooterBtn('<i class="fab fa-discord"><\/i> Voc\xEA j\xE1 est\xE1 no Servidor!', 'button-discord button-discord-disabled pure-button button-discord-modal', PartnerView$openServerModal$lambda_0);
    }
    if (!direct) {
      modal.addFooterBtn('<i class="fas fa-times"><\/i> Fechar', 'button-discord pure-button button-discord-modal button-discord-modal-secondary-action', PartnerView$openServerModal$lambda_1(modal));
    }
    modal.setContent(template.html());
    modal.open();
    var visible = jq('.tingle-modal--visible');
    var redirectUrl = get_loriUrl() + 's/' + information.id;
    var json_0 = json([]);
    json_0['redirectUrl'] = redirectUrl;
    if (information.canVote) {
      visible.find('.upvote-notification').text(locale.get_25kzsl$('UPVOTE_PleaseCompleteCaptcha', []));
    }
     else {
      var code = ensureNotNull(information.cantVoteReason);
      switch (code) {
        case 1:
          tmp$_1 = locale.get_25kzsl$('UPVOTE_LogInDiscord', []);
          break;
        case 2:
          tmp$_1 = locale.get_25kzsl$('UPVOTE_NeedsToBeMember', []);
          break;
        case 3:
          tmp$_1 = locale.get_25kzsl$('UPVOTE_JoinedAtLeastOneHour', []);
          break;
        case 4:
          var moment_0 = new moment(ensureNotNull(information.canVoteNext));
          tmp$_1 = locale.get_25kzsl$('UPVOTE_CanVoteAgain', [moment_0.fromNow()]);
          break;
        default:tmp$_1 = 'Error: ' + code;
          break;
      }
      var reason = tmp$_1;
      println('Error code: ' + code);
      if (code !== 1) {
        visible.find('.upvote-notification').text(reason);
        visible.find('.server-upvote-button').addClass('button-discord-disabled').removeClass('button-discord-success');
      }
       else {
        visible.find('.server-upvote-button').addClass('button-discord-success').removeClass('button-discord-disabled');
        visible.find('.server-upvote-button').click(PartnerView$openServerModal$lambda_2(json_0));
      }
    }
    var hypeButton = visible.find('.server-hype-button');
    var currentTimeMillis = (new Date()).getTime();
    var code_0 = information.cantVoteReason;
    switch (code_0) {
      case 1:
        tmp$_2 = locale.get_25kzsl$('UPVOTE_LogInDiscord', []);
        break;
      case 2:
        tmp$_2 = locale.get_25kzsl$('UPVOTE_NeedsToBeMember', []);
        break;
      case 3:
        tmp$_2 = locale.get_25kzsl$('UPVOTE_JoinedAtLeastOneHour', []);
        break;
      default:tmp$_2 = null;
        break;
    }
    var promoteError = tmp$_2;
    if (promoteError != null) {
      visible.find('.promote-notification').text(promoteError);
    }
     else {
      if (currentTimeMillis >= toLong(information.lastBump.toString()).add(Kotlin.Long.fromInt(14400000)).toNumber()) {
        println('Yes, can hype!');
        hypeButton.addClass('button-discord-success').removeClass('button-discord-disabled');
        var profile = selfProfile;
        if (profile == null) {
          hypeButton.click(PartnerView$openServerModal$lambda_3(json_0));
        }
         else {
          if (profile.dreams >= 750) {
            hypeButton.click(PartnerView$openServerModal$lambda_4(hypeButton, information, this, ts1Promotion, locale));
          }
           else {
            hypeButton.addClass('button-discord-disabled').removeClass('button-discord-success');
            visible.find('.promote-notification').html('Voc\xEA n\xE3o possui Sonhos suficientes para promover! Que tal ganhar alguns sonhos <a href=' + '"' + get_loriUrl() + 'daily' + '"' + '>clicando aqui<\/a>?');
          }
        }
      }
       else {
        println("Nah, can't hype!");
        var canBumpAgain = information.lastBump;
        var moment_1 = new moment(canBumpAgain);
        moment_1.add(4, 'h');
        visible.find('.promote-notification').text(locale.get_25kzsl$('PROMOTE_CanPromoteAgain', [moment_1.fromNow()]));
      }
    }
    jq('.tingle-modal--visible').addClass('tingle-modal--overflow');
    if (information.canVote) {
      grecaptcha.render(visible.find('.g-recaptcha').get()[0], new RecaptchaOptions('6LfRyUkUAAAAAASo0YM4IZBqvkzxyRWJ1Ydw5weC', 'recaptchaCallback', 'compact'));
    }
    LoriServerList_getInstance().injectAdvertisements_yp3tk2$(this.visibleModal);
    LoriServerList_getInstance().injectAdvertisements_yp3tk2$(this.visibleModal);
  };
  function PartnerView$recaptchaCallback$lambda$lambda(this$PartnerView, closure$ts1SkillUp, closure$information) {
    return function (data, b, c) {
      var tmp$;
      println(stringify(data));
      var vote = toJson_0(data);
      var codeResponse = vote['api:code'];
      if (codeResponse === 0) {
        jq('.tingle-modal--visible').find('.server-upvote-button').addClass('button-discord-disabled').removeClass('button-discord-success');
        this$PartnerView.visibleModal.find('.upvote-notification').text('Obrigado por votar! ^-^');
        return closure$ts1SkillUp.play(), Unit;
      }
       else {
        grecaptcha.reset();
        switch (codeResponse) {
          case 4:
            tmp$ = get_legacyLocale().get_25kzsl$('UPVOTE_LogInDiscord', []);
            break;
          case 3:
            tmp$ = get_legacyLocale().get_25kzsl$('UPVOTE_UnknownGuild', []);
            break;
          case 6:
            tmp$ = get_legacyLocale().get_25kzsl$('UPVOTE_NeedsToBeMember', []);
            break;
          case 7:
            tmp$ = get_legacyLocale().get_25kzsl$('UPVOTE_InvalidCaptchaResponse', []);
            break;
          case 5:
            var moment_0 = new moment(ensureNotNull(closure$information.canVoteNext));
            tmp$ = get_legacyLocale().get_25kzsl$('UPVOTE_CanVoteAgain', [moment_0.fromNow()]);
            break;
          case 10:
            tmp$ = get_legacyLocale().get_25kzsl$('UPVOTE_NotVerified', []);
            break;
          case 11:
            tmp$ = get_legacyLocale().get_25kzsl$('UPVOTE_BadEmail', []);
            break;
          case 9:
            tmp$ = get_legacyLocale().get_25kzsl$('UPVOTE_BadIp', []);
            break;
          default:tmp$ = 'Error: ' + codeResponse;
            break;
        }
        var error = tmp$;
        jq('.tingle-modal--visible').find('.server-upvote-button').addClass('button-discord-disabled').removeClass('button-discord-success');
        return this$PartnerView.visibleModal.find('.upvote-notification').text(error);
      }
    };
  }
  function PartnerView$recaptchaCallback$lambda(this$PartnerView, closure$information, closure$response, closure$ts1SkillUp) {
    return function (it) {
      if (this$PartnerView.visibleModal.find('.server-upvote-button').hasClass('button-discord-disabled'))
        return;
      this$PartnerView.visibleModal.find('.server-upvote-button').removeClass('button-discord-success').addClass('button-discord-disabled');
      jQuery.post(get_loriUrl() + 'api/v1/server-list/vote?guildId=' + closure$information.id + '&recaptcha=' + closure$response, PartnerView$recaptchaCallback$lambda$lambda(this$PartnerView, closure$ts1SkillUp, closure$information));
      return Unit;
    };
  }
  PartnerView.prototype.recaptchaCallback = function (response) {
    var ts1SkillUp = new Audio(get_loriUrl() + 'assets/snd/ts1_skill.mp3');
    println('reCAPTCHA completed! Activating upvote button...');
    var information = this.activeInformation;
    if (information == null) {
      println('reCAPTCHA complete, but no active information... bug?');
      return;
    }
    this.visibleModal.find('.upvote-notification').text('');
    this.visibleModal.find('.server-upvote-button').addClass('button-discord-success').removeClass('button-discord-disabled').click(PartnerView$recaptchaCallback$lambda(this, information, response, ts1SkillUp));
  };
  function PartnerView$PartnerInformation(id, iconUrl, invite, name, tagline, description, keywords, ownerId, ownerName, ownerDiscriminator, ownerAvatarUrl, memberCount, onlineCount, serverEmotes, canVote, cantVoteReason, canVoteNext, joinedServer) {
    this.id = id;
    this.iconUrl = iconUrl;
    this.invite = invite;
    this.name = name;
    this.tagline = tagline;
    this.description = description;
    this.keywords = keywords;
    this.ownerId = ownerId;
    this.ownerName = ownerName;
    this.ownerDiscriminator = ownerDiscriminator;
    this.ownerAvatarUrl = ownerAvatarUrl;
    this.memberCount = memberCount;
    this.onlineCount = onlineCount;
    this.serverEmotes = serverEmotes;
    this.canVote = canVote;
    this.cantVoteReason = cantVoteReason;
    this.canVoteNext = canVoteNext;
    this.joinedServer = joinedServer;
  }
  PartnerView$PartnerInformation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PartnerInformation',
    interfaces: []
  };
  function PartnerView$Emote(name, imageUrl) {
    this.name = name;
    this.imageUrl = imageUrl;
  }
  PartnerView$Emote.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Emote',
    interfaces: []
  };
  PartnerView.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PartnerView',
    interfaces: []
  };
  var PartnerView_instance = null;
  function PartnerView_getInstance() {
    if (PartnerView_instance === null) {
      new PartnerView();
    }
    return PartnerView_instance;
  }
  function SaveStuff() {
    SaveStuff_instance = this;
  }
  function SaveStuff$prepareSave$lambda(closure$config) {
    return function (index, _elem) {
      var elem = jQuery(_elem);
      println(elem.attr('type') + ' - ' + elem.attr('id') + ' - ' + toString(elem.val()));
      var type = elem.attr('type');
      switch (type) {
        case 'checkbox':
          closure$config[elem.attr('data-internal-name')] = elem.is(':checked');
          break;
        case 'number':
          closure$config[elem.attr('data-internal-name')] = toDoubleOrNull(elem.val().toString());
          break;
        default:closure$config[elem.attr('data-internal-name')] = elem.val();
          break;
      }
      return Unit;
    };
  }
  function SaveStuff$prepareSave$ObjectLiteral() {
  }
  SaveStuff$prepareSave$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function SaveStuff$prepareSave$lambda_0() {
    println('Done!');
    LoriDashboard_getInstance().hideLoadingBar();
    LoriDashboard_getInstance().configSavedSfx.play();
    return Unit;
  }
  function SaveStuff$prepareSave$lambda_1() {
    println('Error!');
    LoriDashboard_getInstance().hideLoadingBar();
    LoriDashboard_getInstance().configErrorSfx.play();
    return Unit;
  }
  SaveStuff.prototype.prepareSave = function (type, extras, showSaveScreen, endpoint) {
    if (extras === void 0)
      extras = null;
    if (showSaveScreen === void 0)
      showSaveScreen = true;
    if (endpoint === void 0)
      endpoint = get_loriUrl() + 'api/v1/guild/' + guildId + '/config/';
    println('Preparing saving stuff...');
    var json_0 = json([]);
    var config = json([]);
    var toBeSaved = jq('[data-internal-name]');
    json_0['type'] = type;
    toBeSaved.each(SaveStuff$prepareSave$lambda(config));
    if (extras != null)
      extras(config);
    json_0['config'] = config;
    if (showSaveScreen)
      LoriDashboard_getInstance().showLoadingBar_pdl1vj$(get_locale().get_25kzsl$('loritta.saving', []) + '...');
    println('Sending save stuff... kthxbye!');
    println('Sending: ' + JSON.stringify(json_0));
    var dynamic = new SaveStuff$prepareSave$ObjectLiteral();
    dynamic.url = endpoint;
    dynamic.type = 'PATCH';
    dynamic.dataType = 'json';
    dynamic.data = JSON.stringify(json_0);
    dynamic.success = SaveStuff$prepareSave$lambda_0;
    dynamic.error = SaveStuff$prepareSave$lambda_1;
    jQuery.ajax(dynamic);
  };
  SaveStuff.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SaveStuff',
    interfaces: []
  };
  var SaveStuff_instance = null;
  function SaveStuff_getInstance() {
    if (SaveStuff_instance === null) {
      new SaveStuff();
    }
    return SaveStuff_instance;
  }
  function main_0(args) {
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
  BetterDocument.prototype.getElementById_ytbaoo$ = function (name) {
    var tmp$;
    return (tmp$ = ensureNotNull(this.document.getElementById(name))) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  BetterDocument.prototype.getElementByClass_ytbaoo$ = function (name) {
    var tmp$;
    return (tmp$ = ensureNotNull(this.document.getElementsByClassName(name)[0])) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
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
  function get_loriUrl_0() {
    return window.location.protocol + '//' + window.location.host + '/';
  }
  function Placeholders() {
    Placeholders_instance = this;
    this.DEFAULT_PLACEHOLDERS_uwh1k8$_0 = lazy(Placeholders$DEFAULT_PLACEHOLDERS$lambda);
  }
  Object.defineProperty(Placeholders.prototype, 'DEFAULT_PLACEHOLDERS', {
    get: function () {
      return this.DEFAULT_PLACEHOLDERS_uwh1k8$_0.value;
    }
  });
  function Placeholders$DEFAULT_PLACEHOLDERS$lambda() {
    return mutableMapOf([to('user', 'Mostra o nome do usu\xE1rio que provocou a a\xE7\xE3o'), to('@user', 'Menciona o usu\xE1rio que provocou a a\xE7\xE3o'), to('nickname', ' Mostra o nome do usu\xE1rio no servidor (caso ele tenha mudado o apelido dele no servidor, ir\xE1 aparecer o apelido dele, em vez do nome original)'), to('user-discriminator', 'Mostra o discriminator do usu\xE1rio que provocou a a\xE7\xE3o'), to('user-id', 'Mostra o ID do usu\xE1rio que provocou a a\xE7\xE3o'), to('user-avatar-url', 'Mostra a URL do avatar do usu\xE1rio'), to('guild', ' Mostra o nome do servidor'), to('guild-size', 'Mostra a quantidade de membros no servidor')]);
  }
  Placeholders.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Placeholders',
    interfaces: []
  };
  var Placeholders_instance = null;
  function Placeholders_getInstance() {
    if (Placeholders_instance === null) {
      new Placeholders();
    }
    return Placeholders_instance;
  }
  function SaveUtils() {
    SaveUtils_instance = this;
  }
  function SaveUtils$prepareSave$lambda(closure$endpoint_0, closure$json_0, closure$onFinish_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$SaveUtils$prepareSave$lambda(closure$endpoint_0, closure$json_0, closure$onFinish_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$SaveUtils$prepareSave$lambda(closure$endpoint_0, closure$json_0, closure$onFinish_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$endpoint = closure$endpoint_0;
    this.local$closure$json = closure$json_0;
    this.local$closure$onFinish = closure$onFinish_0;
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
            LoriDashboard_getInstance().hideLoadingBar();
            this.local$closure$onFinish != null ? this.local$closure$onFinish(response) : null;
            return LoriDashboard_getInstance().configSavedSfx.play(), Unit;
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
  SaveUtils.prototype.prepareSave_feck85$ = function (type, extras, showSaveScreen, onFinish, endpoint) {
    if (showSaveScreen === void 0)
      showSaveScreen = true;
    if (onFinish === void 0)
      onFinish = null;
    if (endpoint === void 0)
      endpoint = get_loriUrl_0() + 'api/v1/guild/' + guildId + '/config';
    println('Preparing saving stuff...');
    var json_0 = json([]);
    var config = json([]);
    json_0['type'] = type;
    extras(config);
    json_0['config'] = config;
    println('Sending save stuff... kthxbye!');
    println('Sending: ' + JSON.stringify(json_0));
    println('Endpoint: ' + endpoint);
    LoriDashboard_getInstance().showLoadingBar_pdl1vj$(get_locale().get_25kzsl$('loritta.saving', []) + '...');
    launch(coroutines.GlobalScope, void 0, void 0, SaveUtils$prepareSave$lambda(endpoint, json_0, onFinish));
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
  function BaseLocale(id) {
    BaseLocale$Companion_getInstance();
    this.id = id;
    this.localeEntries = LinkedHashMap_init();
  }
  BaseLocale.prototype.get_25kzsl$ = function (key, arguments_0) {
    try {
      return this.getWithType_ytbaoo$(key);
    }
     catch (e) {
      if (Kotlin.isType(e, RuntimeException)) {
        println('Error when trying to retrieve ' + key);
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
    this.descriptor_6cf9p2$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.utils.locale.BaseLocale');
    this.descriptor.addElement_ivxn3r$('id');
    this.descriptor.addElement_ivxn3r$('localeEntries');
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
  BaseLocale$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var BaseLocale$$serializer_instance = null;
  function BaseLocale$$serializer_getInstance() {
    if (BaseLocale$$serializer_instance === null) {
      new BaseLocale$$serializer();
    }
    return BaseLocale$$serializer_instance;
  }
  function BaseLocale_init(seen, id, localeEntries, serializationConstructorMarker) {
    var $this = Object.create(BaseLocale.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('id');
    else
      $this.id = id;
    if ((seen & 2) === 0)
      throw new MissingFieldException('localeEntries');
    else
      $this.localeEntries = localeEntries;
    return $this;
  }
  BaseLocale.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseLocale',
    interfaces: []
  };
  function DailyView() {
    DailyView_instance = this;
  }
  function DailyView$start$lambda(closure$backgroundY) {
    return function () {
      jq('.serverListHeader').css('background-position-y', closure$backgroundY.v);
      closure$backgroundY.v = closure$backgroundY.v - 2 | 0;
      return Unit;
    };
  }
  function DailyView$start$lambda$lambda(it) {
    var json_0 = json([]);
    json_0['redirectUrl'] = get_loriUrl() + 'daily';
    window.location.href = 'https://discordapp.com/oauth2/authorize?redirect_uri=' + get_loriUrl() + 'dashboard&scope=identify%20guilds%20email%20guilds.join&response_type=code&client_id=297153970613387264&state=' + window.btoa(JSON.stringify(json_0));
    return Unit;
  }
  function DailyView$start$lambda_0(data, b, c) {
    var tmp$;
    println('Status data: ' + JSON.stringify(data));
    var status = data;
    var code = status['api:code'];
    if (code === 0) {
      jq('.daily-notification').text('Por favor, complete o reCAPTCHA');
      grecaptcha.render(jq('#daily-captcha').get()[0], new RecaptchaOptions('6LfRyUkUAAAAAASo0YM4IZBqvkzxyRWJ1Ydw5weC', 'recaptchaCallback', 'normal'));
    }
     else if (code === 4) {
      jq('.daily-reward-button').addClass('button-discord-success').removeClass('button-discord-disabled').click(DailyView$start$lambda$lambda);
    }
     else {
      moment.locale('pt-br');
      switch (code) {
        case 4:
          tmp$ = 'Voc\xEA precisa entrar na sua conta do Discord antes de ganhar seu pr\xEAmio!';
          break;
        case 5:
          var moment_0 = new moment(status['canPayoutAgain']);
          tmp$ = replace('Voc\xEA j\xE1 recebeu seu pr\xEAmio hoje! Voc\xEA poder\xE1 votar novamente {0}!', '{0}', moment_0.fromNow());
          break;
        case 7:
          tmp$ = 'reCAPTCHA inv\xE1lido!';
          break;
        case 9:
          tmp$ = 'IP bloqueado!';
          break;
        default:tmp$ = 'Error: ' + code;
          break;
      }
      var error = tmp$;
      jq('.daily-notification').text(error);
    }
    LoriServerList_getInstance().hideLoadingBar();
    return Unit;
  }
  DailyView.prototype.start = function () {
    println('LoriServerList - owo');
    LoriServerList_getInstance().showLoadingBar_pdl1vj$('Carregando...');
    var backgroundY = {v: 0};
    window.setInterval(DailyView$start$lambda(backgroundY), 75);
    jQuery.post(get_loriUrl() + 'api/v1/economy/daily-reward-status', DailyView$start$lambda_0);
  };
  function DailyView$recaptchaCallback$lambda$lambda$lambda$lambda$lambda(closure$payload) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Voc\xEA ganhou x' + closure$payload.sponsoredBy.multipliedBy + ' mais sonhos, gra\xE7as ao...');
      return Unit;
    };
  }
  function DailyView$recaptchaCallback$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.attributes.put_xwzc9p$('width', '128');
    $receiver.attributes.put_xwzc9p$('height', '128');
    var $receiver_0 = $receiver.attributes;
    var value = 'border-radius: 99999px;';
    $receiver_0.put_xwzc9p$('style', value);
    return Unit;
  }
  function DailyView$recaptchaCallback$lambda$lambda$lambda$lambda$lambda_1(closure$payload) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$payload.sponsoredBy.guild.name);
      return Unit;
    };
  }
  function DailyView$recaptchaCallback$lambda$lambda$lambda$lambda$lambda_2(closure$payload) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Voc\xEA iria ganhar ' + closure$payload.sponsoredBy.originalPayout + ' sonhos, mas gra\xE7as ao patroc\xEDnio do ' + closure$payload.sponsoredBy.guild.name + ' voc\xEA ganhou ' + closure$payload.dailyPayout + '!');
      return Unit;
    };
  }
  function DailyView$recaptchaCallback$lambda$lambda$lambda$lambda$lambda_3(closure$payload) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Agrade\xE7a ' + closure$payload.sponsoredBy.user.name + '#' + closure$payload.sponsoredBy.user.discriminator + ' por ter feito voc\xEA ganhar ' + (closure$payload.dailyPayout - closure$payload.sponsoredBy.originalPayout) + ' mais sonhos que o normal!');
      return Unit;
    };
  }
  function DailyView$recaptchaCallback$lambda$lambda$lambda$lambda(closure$payload) {
    return function ($receiver) {
      h1($receiver, void 0, DailyView$recaptchaCallback$lambda$lambda$lambda$lambda$lambda(closure$payload));
      img_0($receiver, void 0, closure$payload.sponsoredBy.guild.iconUrl, void 0, DailyView$recaptchaCallback$lambda$lambda$lambda$lambda$lambda_0);
      h2_0($receiver, void 0, DailyView$recaptchaCallback$lambda$lambda$lambda$lambda$lambda_1(closure$payload));
      p_0($receiver, void 0, DailyView$recaptchaCallback$lambda$lambda$lambda$lambda$lambda_2(closure$payload));
      if (closure$payload.sponsoredBy.user != null) {
        p_0($receiver, void 0, DailyView$recaptchaCallback$lambda$lambda$lambda$lambda$lambda_3(closure$payload));
      }
      return Unit;
    };
  }
  function DailyView$recaptchaCallback$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('alterando o valor do ship entre voc\xEA e a sua namoradx');
    return Unit;
  }
  function DailyView$recaptchaCallback$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('alterando o look do seu perfil');
    return Unit;
  }
  function DailyView$recaptchaCallback$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('promovendo o seu servidor favorito na minha lista de servidores');
    return Unit;
  }
  function DailyView$recaptchaCallback$lambda$lambda$lambda$lambda$lambda_4(closure$payload) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Agora voc\xEA possui ' + closure$payload.currentBalance + ' sonhos, que tal gastar os seus sonhos ');
      var random = Random(numberToInt((new Date()).getTime())).nextInt_vux9f0$(0, 5);
      switch (random) {
        case 0:
          $receiver.unaryPlus_pdl1vz$('na rifa (+rifa)');
          break;
        case 1:
          a($receiver, get_loriUrl() + 'user/@me/dashboard/ship-effects', void 0, void 0, DailyView$recaptchaCallback$lambda$lambda$lambda$lambda$lambda$lambda);
          break;
        case 2:
          a($receiver, get_loriUrl() + 'user/@me/dashboard/profiles', void 0, void 0, DailyView$recaptchaCallback$lambda$lambda$lambda$lambda$lambda$lambda_0);
          break;
        case 3:
          a($receiver, get_loriUrl() + 'servers', void 0, void 0, DailyView$recaptchaCallback$lambda$lambda$lambda$lambda$lambda$lambda_1);
          break;
        case 4:
          $receiver.unaryPlus_pdl1vz$('doando eles para a sua pessoa favorita (+pagar)');
          break;
      }
      $receiver.unaryPlus_pdl1vz$('?');
      return Unit;
    };
  }
  function DailyView$recaptchaCallback$lambda$lambda$lambda$lambda_0(closure$payload) {
    return function ($receiver) {
      p_0($receiver, void 0, DailyView$recaptchaCallback$lambda$lambda$lambda$lambda$lambda_4(closure$payload));
      return Unit;
    };
  }
  function DailyView$recaptchaCallback$lambda$lambda$lambda$lambda_1(closure$cash) {
    return function () {
      println('Finished!!!');
      closure$cash.play();
      return Unit;
    };
  }
  function DailyView$recaptchaCallback$lambda$lambda$lambda(closure$payload, closure$ts1Promotion2, closure$cash) {
    return function () {
      jq('#daily-wrapper').css('position', 'absolute');
      var prepended = jq('#daily-prewrapper').prepend(jq('<div>'));
      prepended.css('opacity', 0);
      prepended.append(jq('<h2>').text('Parab\xE9ns! Hoje voc\xEA ganhou...'));
      prepended.append(jq('<h1>').text('0').attr('id', 'dailyPayout'));
      prepended.append(jq('<h2>').text('Sonhos!'));
      if (closure$payload.sponsoredBy != null) {
        append(prepended.get()[0], DailyView$recaptchaCallback$lambda$lambda$lambda$lambda(closure$payload));
      }
      append(prepended.get()[0], DailyView$recaptchaCallback$lambda$lambda$lambda$lambda_0(closure$payload));
      prepended.append(jq('<img>').attr('width', 64).attr('height', 64).attr('src', 'https://cdn.discordapp.com/emojis/399743288673959947.gif?v=1'));
      prepended.append(jq('<p>').text('Volte sempre!'));
      prepended.fadeTo(500, 1);
      var countUp = new CountUp('dailyPayout', 0.0, closure$payload.dailyPayout, 0, 7.5, new CountUpOptions(true, true, '', ''));
      closure$ts1Promotion2.play();
      countUp.start(DailyView$recaptchaCallback$lambda$lambda$lambda$lambda_1(closure$cash));
      return Unit;
    };
  }
  function DailyView$recaptchaCallback$lambda$lambda(closure$ts1Promotion2, closure$cash) {
    return function (data, b, c) {
      var tmp$;
      println('Daily Reward: ' + JSON.stringify(data));
      var json = data;
      var apiCode = json['api:code'];
      if (apiCode === 0) {
        var $receiver = JSON_0.Companion.nonstrict;
        var str = JSON.stringify(data);
        var payload = $receiver.parse_awif5v$(getOrDefault($receiver.context, getKClass(DailyView$DailyResponse)), str);
        return jq('#daily-wrapper').fadeTo(500, 0, DailyView$recaptchaCallback$lambda$lambda$lambda(payload, closure$ts1Promotion2, closure$cash));
      }
       else {
        switch (apiCode) {
          case 4:
            tmp$ = 'Voc\xEA precisa entrar na sua conta do Discord antes de ganhar seu pr\xEAmio!';
            break;
          case 5:
            tmp$ = 'Voc\xEA j\xE1 recebeu seu pr\xEAmio hoje!';
            break;
          case 7:
            tmp$ = 'reCAPTCHA inv\xE1lido!';
            break;
          case 9:
            tmp$ = 'IP bloqueado!';
            break;
          default:tmp$ = 'Error: ' + apiCode;
            break;
        }
        var error = tmp$;
        return jq('.daily-notification').text(error);
      }
    };
  }
  function DailyView$recaptchaCallback$lambda(closure$response, closure$ts1Promotion2, closure$cash) {
    return function (it) {
      if (jq('.daily-reward-button').hasClass('button-discord-disabled')) {
        return;
      }
      jq('.daily-reward-button').addClass('button-discord-disabled');
      jQuery.post(get_loriUrl() + 'api/v1/economy/daily-reward?recaptcha=' + closure$response, DailyView$recaptchaCallback$lambda$lambda(closure$ts1Promotion2, closure$cash));
      return Unit;
    };
  }
  DailyView.prototype.recaptchaCallback = function (response) {
    var ts1Promotion2 = new Audio(get_loriUrl() + 'assets/snd/ts1_promotion2.mp3');
    var cash = new Audio(get_loriUrl() + 'assets/snd/css1_cash.wav');
    jq('.daily-notification').text('');
    println('owo recaptcha');
    jq('.daily-reward-button').addClass('button-discord-success').removeClass('button-discord-disabled').click(DailyView$recaptchaCallback$lambda(response, ts1Promotion2, cash));
  };
  function DailyView$DailyResponse(receivedDailyAt, dailyPayout, sponsoredBy, currentBalance) {
    DailyView$DailyResponse$Companion_getInstance();
    if (sponsoredBy === void 0)
      sponsoredBy = null;
    this.receivedDailyAt = receivedDailyAt;
    this.dailyPayout = dailyPayout;
    this.sponsoredBy = sponsoredBy;
    this.currentBalance = currentBalance;
  }
  function DailyView$DailyResponse$Companion() {
    DailyView$DailyResponse$Companion_instance = this;
  }
  DailyView$DailyResponse$Companion.prototype.serializer = function () {
    return DailyView$DailyResponse$$serializer_getInstance();
  };
  DailyView$DailyResponse$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DailyView$DailyResponse$Companion_instance = null;
  function DailyView$DailyResponse$Companion_getInstance() {
    if (DailyView$DailyResponse$Companion_instance === null) {
      new DailyView$DailyResponse$Companion();
    }
    return DailyView$DailyResponse$Companion_instance;
  }
  function DailyView$DailyResponse$$serializer() {
    this.descriptor_p0jzgy$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.views.DailyView.DailyResponse');
    this.descriptor.addElement_ivxn3r$('receivedDailyAt');
    this.descriptor.addElement_ivxn3r$('dailyPayout');
    this.descriptor.addElement_ivxn3r$('sponsoredBy');
    this.descriptor.addElement_ivxn3r$('currentBalance');
    DailyView$DailyResponse$$serializer_instance = this;
  }
  Object.defineProperty(DailyView$DailyResponse$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_p0jzgy$_0;
    }
  });
  DailyView$DailyResponse$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.receivedDailyAt);
    output.encodeIntElement_4wpqag$(this.descriptor, 1, obj.dailyPayout);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 2, DailyView$Sponsored$$serializer_getInstance(), obj.sponsoredBy);
    output.encodeDoubleElement_imzr5k$(this.descriptor, 3, obj.currentBalance);
    output.endStructure_qatsm0$(this.descriptor);
  };
  DailyView$DailyResponse$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
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
          local1 = input.decodeIntElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 2, DailyView$Sponsored$$serializer_getInstance()) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 2, DailyView$Sponsored$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = input.decodeDoubleElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return DailyView$DailyView$DailyResponse_init(bitMask0, local0, local1, local2, local3, null);
  };
  DailyView$DailyResponse$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var DailyView$DailyResponse$$serializer_instance = null;
  function DailyView$DailyResponse$$serializer_getInstance() {
    if (DailyView$DailyResponse$$serializer_instance === null) {
      new DailyView$DailyResponse$$serializer();
    }
    return DailyView$DailyResponse$$serializer_instance;
  }
  function DailyView$DailyView$DailyResponse_init(seen, receivedDailyAt, dailyPayout, sponsoredBy, currentBalance, serializationConstructorMarker) {
    var $this = Object.create(DailyView$DailyResponse.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('receivedDailyAt');
    else
      $this.receivedDailyAt = receivedDailyAt;
    if ((seen & 2) === 0)
      throw new MissingFieldException('dailyPayout');
    else
      $this.dailyPayout = dailyPayout;
    if ((seen & 4) === 0)
      $this.sponsoredBy = null;
    else
      $this.sponsoredBy = sponsoredBy;
    if ((seen & 8) === 0)
      throw new MissingFieldException('currentBalance');
    else
      $this.currentBalance = currentBalance;
    return $this;
  }
  DailyView$DailyResponse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DailyResponse',
    interfaces: []
  };
  function DailyView$Guild(name, iconUrl, id) {
    DailyView$Guild$Companion_getInstance();
    this.name = name;
    this.iconUrl = iconUrl;
    this.id = id;
  }
  function DailyView$Guild$Companion() {
    DailyView$Guild$Companion_instance = this;
  }
  DailyView$Guild$Companion.prototype.serializer = function () {
    return DailyView$Guild$$serializer_getInstance();
  };
  DailyView$Guild$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DailyView$Guild$Companion_instance = null;
  function DailyView$Guild$Companion_getInstance() {
    if (DailyView$Guild$Companion_instance === null) {
      new DailyView$Guild$Companion();
    }
    return DailyView$Guild$Companion_instance;
  }
  function DailyView$Guild$$serializer() {
    this.descriptor_lqvl85$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.views.DailyView.Guild');
    this.descriptor.addElement_ivxn3r$('name');
    this.descriptor.addElement_ivxn3r$('iconUrl');
    this.descriptor.addElement_ivxn3r$('id');
    DailyView$Guild$$serializer_instance = this;
  }
  Object.defineProperty(DailyView$Guild$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_lqvl85$_0;
    }
  });
  DailyView$Guild$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.name);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.iconUrl);
    output.encodeStringElement_bgm7zs$(this.descriptor, 2, obj.id);
    output.endStructure_qatsm0$(this.descriptor);
  };
  DailyView$Guild$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
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
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeStringElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return DailyView$DailyView$Guild_init(bitMask0, local0, local1, local2, null);
  };
  DailyView$Guild$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var DailyView$Guild$$serializer_instance = null;
  function DailyView$Guild$$serializer_getInstance() {
    if (DailyView$Guild$$serializer_instance === null) {
      new DailyView$Guild$$serializer();
    }
    return DailyView$Guild$$serializer_instance;
  }
  function DailyView$DailyView$Guild_init(seen, name, iconUrl, id, serializationConstructorMarker) {
    var $this = Object.create(DailyView$Guild.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('name');
    else
      $this.name = name;
    if ((seen & 2) === 0)
      throw new MissingFieldException('iconUrl');
    else
      $this.iconUrl = iconUrl;
    if ((seen & 4) === 0)
      throw new MissingFieldException('id');
    else
      $this.id = id;
    return $this;
  }
  DailyView$Guild.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Guild',
    interfaces: []
  };
  function DailyView$Sponsored(guild, user, multipliedBy, originalPayout) {
    DailyView$Sponsored$Companion_getInstance();
    if (user === void 0)
      user = null;
    this.guild = guild;
    this.user = user;
    this.multipliedBy = multipliedBy;
    this.originalPayout = originalPayout;
  }
  function DailyView$Sponsored$Companion() {
    DailyView$Sponsored$Companion_instance = this;
  }
  DailyView$Sponsored$Companion.prototype.serializer = function () {
    return DailyView$Sponsored$$serializer_getInstance();
  };
  DailyView$Sponsored$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DailyView$Sponsored$Companion_instance = null;
  function DailyView$Sponsored$Companion_getInstance() {
    if (DailyView$Sponsored$Companion_instance === null) {
      new DailyView$Sponsored$Companion();
    }
    return DailyView$Sponsored$Companion_instance;
  }
  function DailyView$Sponsored$$serializer() {
    this.descriptor_fzomfl$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.views.DailyView.Sponsored');
    this.descriptor.addElement_ivxn3r$('guild');
    this.descriptor.addElement_ivxn3r$('user');
    this.descriptor.addElement_ivxn3r$('multipliedBy');
    this.descriptor.addElement_ivxn3r$('originalPayout');
    DailyView$Sponsored$$serializer_instance = this;
  }
  Object.defineProperty(DailyView$Sponsored$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_fzomfl$_0;
    }
  });
  DailyView$Sponsored$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, DailyView$Guild$$serializer_getInstance(), obj.guild);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 1, PremiumKeyView$SelfMember$$serializer_getInstance(), obj.user);
    output.encodeDoubleElement_imzr5k$(this.descriptor, 2, obj.multipliedBy);
    output.encodeDoubleElement_imzr5k$(this.descriptor, 3, obj.originalPayout);
    output.endStructure_qatsm0$(this.descriptor);
  };
  DailyView$Sponsored$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
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
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, DailyView$Guild$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, DailyView$Guild$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 1, PremiumKeyView$SelfMember$$serializer_getInstance()) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 1, PremiumKeyView$SelfMember$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeDoubleElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = input.decodeDoubleElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return DailyView$DailyView$Sponsored_init(bitMask0, local0, local1, local2, local3, null);
  };
  DailyView$Sponsored$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var DailyView$Sponsored$$serializer_instance = null;
  function DailyView$Sponsored$$serializer_getInstance() {
    if (DailyView$Sponsored$$serializer_instance === null) {
      new DailyView$Sponsored$$serializer();
    }
    return DailyView$Sponsored$$serializer_instance;
  }
  function DailyView$DailyView$Sponsored_init(seen, guild, user, multipliedBy, originalPayout, serializationConstructorMarker) {
    var $this = Object.create(DailyView$Sponsored.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('guild');
    else
      $this.guild = guild;
    if ((seen & 2) === 0)
      $this.user = null;
    else
      $this.user = user;
    if ((seen & 4) === 0)
      throw new MissingFieldException('multipliedBy');
    else
      $this.multipliedBy = multipliedBy;
    if ((seen & 8) === 0)
      throw new MissingFieldException('originalPayout');
    else
      $this.originalPayout = originalPayout;
    return $this;
  }
  DailyView$Sponsored.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sponsored',
    interfaces: []
  };
  DailyView.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DailyView',
    interfaces: []
  };
  var DailyView_instance = null;
  function DailyView_getInstance() {
    if (DailyView_instance === null) {
      new DailyView();
    }
    return DailyView_instance;
  }
  function DonateView() {
    DonateView_instance = this;
  }
  function DonateView$start$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function DonateView$start$lambda$lambda($receiver, column) {
    if (column >= 0.99) {
      i($receiver, 'fas fa-check', DonateView$start$lambda$lambda$lambda);
    }
     else {
      $receiver.unaryPlus_pdl1vz$('S\xF3 se voc\xEA incentiva as outras pessoas a usarem a Lori');
    }
    return Unit;
  }
  function DonateView$start$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function DonateView$start$lambda$lambda_0($receiver, column) {
    if (column >= 0.99) {
      i($receiver, 'fas fa-check', DonateView$start$lambda$lambda$lambda_0);
    }
     else {
      $receiver.unaryPlus_pdl1vz$('Voc\xEA nem contribuiu!');
    }
    return Unit;
  }
  function DonateView$start$lambda$lambda$lambda_1($receiver) {
    return Unit;
  }
  function DonateView$start$lambda$lambda_1($receiver, column) {
    if (column >= 9.99) {
      i($receiver, 'fas fa-check', DonateView$start$lambda$lambda$lambda_1);
    }
     else {
      $receiver.unaryPlus_pdl1vz$('Apenas leitura');
    }
    return Unit;
  }
  function DonateView$start$lambda$lambda_2($receiver, column) {
    if (column >= 149.99)
      $receiver.unaryPlus_pdl1vz$('17130');
    else if (column >= 139.99)
      $receiver.unaryPlus_pdl1vz$('13710');
    else if (column >= 119.99)
      $receiver.unaryPlus_pdl1vz$('10975');
    else if (column >= 99.99)
      $receiver.unaryPlus_pdl1vz$('8780');
    else if (column >= 79.99)
      $receiver.unaryPlus_pdl1vz$('7030');
    else if (column >= 59.99)
      $receiver.unaryPlus_pdl1vz$('5625');
    else if (column >= 39.99)
      $receiver.unaryPlus_pdl1vz$('4500');
    else
      $receiver.unaryPlus_pdl1vz$('3600');
    return Unit;
  }
  function DonateView$start$lambda$lambda_3($receiver, column) {
    if (column >= 149.99)
      $receiver.unaryPlus_pdl1vz$('20.0%');
    else if (column >= 139.99)
      $receiver.unaryPlus_pdl1vz$('17.5%');
    else if (column >= 119.99)
      $receiver.unaryPlus_pdl1vz$('15.0%');
    else if (column >= 99.99)
      $receiver.unaryPlus_pdl1vz$('12.5%');
    else if (column >= 79.99)
      $receiver.unaryPlus_pdl1vz$('10.0%');
    else if (column >= 59.99)
      $receiver.unaryPlus_pdl1vz$('7.5%');
    else if (column >= 39.99)
      $receiver.unaryPlus_pdl1vz$('5.0%');
    else
      $receiver.unaryPlus_pdl1vz$('2.5%');
    return Unit;
  }
  function DonateView$start$lambda$lambda_4($receiver, column) {
    if (column >= 159.99)
      $receiver.unaryPlus_pdl1vz$('2.50x');
    else if (column >= 139.99)
      $receiver.unaryPlus_pdl1vz$('2.25x');
    else if (column >= 119.99)
      $receiver.unaryPlus_pdl1vz$('2.0x');
    else if (column >= 99.99)
      $receiver.unaryPlus_pdl1vz$('1.75x');
    else if (column >= 79.99)
      $receiver.unaryPlus_pdl1vz$('1.5x');
    else if (column >= 59.99)
      $receiver.unaryPlus_pdl1vz$('1.25x');
    else if (column >= 39.99)
      $receiver.unaryPlus_pdl1vz$('1.1x');
    else
      $receiver.unaryPlus_pdl1vz$('1.0x');
    return Unit;
  }
  function DonateView$start$lambda$lambda$lambda_2($receiver) {
    return Unit;
  }
  function DonateView$start$lambda$lambda_5($receiver, column) {
    if (column >= 139.99)
      $receiver.unaryPlus_pdl1vz$('Em apenas tr\xEAs sexta-feiras');
    else if (column >= 99.99)
      $receiver.unaryPlus_pdl1vz$('Em apenas duas sexta-feiras');
    else if (column >= 59.99)
      $receiver.unaryPlus_pdl1vz$('Em apenas uma sexta-feira');
    else
      i($receiver, 'fas fa-times', DonateView$start$lambda$lambda$lambda_2);
    return Unit;
  }
  function DonateView$start$lambda$lambda$lambda_3($receiver) {
    return Unit;
  }
  function DonateView$start$lambda$lambda_6($receiver, column) {
    if (column >= 139.99)
      $receiver.unaryPlus_pdl1vz$('x1.75');
    else if (column >= 99.99)
      $receiver.unaryPlus_pdl1vz$('x1.5');
    else if (column >= 59.99)
      $receiver.unaryPlus_pdl1vz$('x1.25');
    else
      i($receiver, 'fas fa-times', DonateView$start$lambda$lambda$lambda_3);
    return Unit;
  }
  function DonateView$start$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('');
    return Unit;
  }
  function DonateView$start$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Nenhuma Doa\xE7\xE3o');
    return Unit;
  }
  function DonateView$start$lambda$lambda$lambda$lambda$lambda_1(it) {
    return it;
  }
  function DonateView$start$lambda$lambda$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('R$' + replace(closure$it.toString(), '.', ',') + '+');
      return Unit;
    };
  }
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  var Comparator = Kotlin.kotlin.Comparator;
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function DonateView$start$lambda$lambda$lambda$lambda(closure$rewards, closure$rewardColumn) {
    return function ($receiver) {
      th($receiver, void 0, void 0, DonateView$start$lambda$lambda$lambda$lambda$lambda);
      th($receiver, void 0, void 0, DonateView$start$lambda$lambda$lambda$lambda$lambda_0);
      var $receiver_0 = closure$rewards;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(item.minimumDonation);
      }
      var $receiver_1 = sortedWith(distinct(destination), new Comparator$ObjectLiteral(compareBy$lambda(DonateView$start$lambda$lambda$lambda$lambda$lambda_1)));
      var tmp$_0;
      tmp$_0 = $receiver_1.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        var closure$rewardColumn_0 = closure$rewardColumn;
        th($receiver, void 0, void 0, DonateView$start$lambda$lambda$lambda$lambda$lambda$lambda(element));
        closure$rewardColumn_0.add_11rb$(element);
      }
      return Unit;
    };
  }
  function DonateView$start$lambda$lambda$lambda$lambda$lambda_2(closure$reward) {
    return function ($receiver) {
      var $receiver_0 = $receiver.attributes;
      var value = 'font-weight: 800;';
      $receiver_0.put_xwzc9p$('style', value);
      $receiver.unaryPlus_pdl1vz$(closure$reward.name);
      return Unit;
    };
  }
  function DonateView$start$lambda$lambda$lambda$lambda$lambda_3(closure$reward, closure$column) {
    return function ($receiver) {
      closure$reward.callback($receiver, closure$column);
      return Unit;
    };
  }
  function DonateView$start$lambda$lambda$lambda$lambda_0(closure$reward, closure$rewardColumn) {
    return function ($receiver) {
      var tmp$;
      td($receiver, void 0, DonateView$start$lambda$lambda$lambda$lambda$lambda_2(closure$reward));
      tmp$ = closure$rewardColumn.iterator();
      while (tmp$.hasNext()) {
        var column = tmp$.next();
        td($receiver, void 0, DonateView$start$lambda$lambda$lambda$lambda$lambda_3(closure$reward, column));
      }
      return Unit;
    };
  }
  function DonateView$start$lambda$lambda$lambda_4(closure$rewards, closure$rewardColumn) {
    return function ($receiver) {
      var tmp$;
      tr_0($receiver, void 0, DonateView$start$lambda$lambda$lambda$lambda(closure$rewards, closure$rewardColumn));
      tmp$ = closure$rewards.iterator();
      while (tmp$.hasNext()) {
        var reward = tmp$.next();
        tr_0($receiver, void 0, DonateView$start$lambda$lambda$lambda$lambda_0(reward, closure$rewardColumn));
      }
      return Unit;
    };
  }
  function DonateView$start$lambda$lambda_7(closure$rewards) {
    return function ($receiver) {
      var rewardColumn = mutableListOf([0.0]);
      table($receiver, void 0, DonateView$start$lambda$lambda$lambda_4(closure$rewards, rewardColumn));
      return Unit;
    };
  }
  function DonateView$start$lambda(it) {
    var tmp$;
    var table = Kotlin.isType(tmp$ = page.getElementById_61zpoe$('donate-features'), HTMLTableElement) ? tmp$ : throwCCE();
    var rewards = listOf([new DonateView$DonationReward('Ajuda a Lori a Pagar o Aluguel', 0.99, DonateView$start$lambda$lambda), new DonateView$DonationReward('A Sensa\xE7\xE3o de ser Incr\xEDvel', 0.99), new DonateView$DonationReward('Nome no +contribuidores', 0.99, DonateView$start$lambda$lambda_0), new DonateView$DonationReward('Cargo exclusivo no Servidor de Suporte', 4.99), new DonateView$DonationReward('Emblema exclusivo no +perfil', 4.99), new DonateView$DonationReward('Cargos coloridos no Servidor de Suporte', 9.99), new DonateView$DonationReward("Colocar o seu servidor como patrocinado na Lori's Server List", 9.99), new DonateView$DonationReward('Acesso exclusivo ao canal de doadores', 19.99, DonateView$start$lambda$lambda_1), new DonateView$DonationReward('Usar +volume em qualquer servidor que voc\xEA tenha permiss\xE3o de DJ', 19.99), new DonateView$DonationReward('Ativar +volume em um servidor que voc\xEA administra', 19.99), new DonateView$DonationReward('Lori ir\xE1 parar de te perturbar para doar ao usar um comando', 39.99), new DonateView$DonationReward('Tempo reduzido entre comandos', 39.99), new DonateView$DonationReward('Limite m\xE1ximo de sonhos no +daily', 39.99, DonateView$start$lambda$lambda_2), new DonateView$DonationReward('Chance da Lori te dar uma reputa\xE7\xE3o', 39.99, DonateView$start$lambda$lambda_3), new DonateView$DonationReward('Multiplicador de XP Global', 119.99, DonateView$start$lambda$lambda_4), new DonateView$DonationReward('Divulgar o seu Servidor na Sexta-Feira da Lori (desde que n\xE3o seja sobre conte\xFAdo NSFW)', 139.99, DonateView$start$lambda$lambda_5), new DonateView$DonationReward('Nome em negrito nos +contribuidores', 59.99), new DonateView$DonationReward('Uma vers\xE3o premium minha! ...ela n\xE3o faz NADA, s\xF3 serve para voc\xEA ostentar!', 59.99), new DonateView$DonationReward('Mais outro cargo exclusivo no servidor de suporte', 59.99), new DonateView$DonationReward('Badge EXCLUSIVA para os membros do seu servidor', 19.99), new DonateView$DonationReward('Multiplicador de dailies de sonhos para membros do seu servidor', 79.99, DonateView$start$lambda$lambda_6), new DonateView$DonationReward('Mais outro emblema exclusivo no +perfil', 99.99), new DonateView$DonationReward('Mais OUTRO cargo exclusivo no servidor de suporte', 99.99), new DonateView$DonationReward('Uma Lori EXCLUSIVA para voc\xEA! (Pode alterar nome/avatar)', 159.99)]);
    appendBuilder(table, div_0(appendHTML(StringBuilder_init(), true), void 0, DonateView$start$lambda$lambda_7(rewards)));
    return Unit;
  }
  function DonateView$start$lambda$lambda$lambda_5($receiver) {
    $receiver.unaryPlus_pdl1vz$('Suas keys atuais');
    return Unit;
  }
  function DonateView$start$lambda$lambda$lambda_6($receiver) {
    $receiver.unaryPlus_pdl1vz$('Parece que voc\xEA j\xE1 possui algumas keys, voc\xEA deseja renovar elas?');
    return Unit;
  }
  function DonateView$start$lambda$lambda$lambda_7(closure$key) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Key ' + closure$key.id + ' (R' + '$' + ' ' + closure$key.value + ')');
      return Unit;
    };
  }
  function DonateView$start$lambda$lambda$lambda_8(closure$key) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Voc\xEA pode renovar ela por apenas R' + '$' + ' ' + closure$key.value * 0.8 + '!');
      return Unit;
    };
  }
  function DonateView$start$lambda$lambda$lambda$lambda$ObjectLiteral(closure$key) {
    this.gateway = 'MERCADOPAGO';
    this.money = closure$key.value;
    this.keyId = closure$key.id;
  }
  DonateView$start$lambda$lambda$lambda$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function DonateView$start$lambda$lambda$lambda$lambda$lambda_4(closure$o_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$DonateView$start$lambda$lambda$lambda$lambda$lambda(closure$o_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$DonateView$start$lambda$lambda$lambda$lambda$lambda(closure$o_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$o = closure$o_0;
  }
  Coroutine$DonateView$start$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DonateView$start$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DonateView$start$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$DonateView$start$lambda$lambda$lambda$lambda$lambda;
  Coroutine$DonateView$start$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = HttpRequest$Companion_getInstance().post_puj7f4$(get_loriUrl() + 'api/v1/user/donate', JSON.stringify(this.local$closure$o), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var response = this.result_0;
            var payload = JSON.parse(response.body);
            return window.location.href = typeof (tmp$ = payload['redirectUrl']) === 'string' ? tmp$ : throwCCE(), Unit;
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
  function DonateView$start$lambda$lambda$lambda$lambda_1(closure$key) {
    return function (it) {
      var o = new DonateView$start$lambda$lambda$lambda$lambda$ObjectLiteral(closure$key);
      println(JSON.stringify(o));
      launch(coroutines.GlobalScope, void 0, void 0, DonateView$start$lambda$lambda$lambda$lambda$lambda_4(o));
      return Unit;
    };
  }
  function DonateView$start$lambda$lambda$lambda_9(closure$key) {
    return function ($receiver) {
      set_style($receiver, 'font-size: 1.25em; margin: 5px;');
      $receiver.unaryPlus_pdl1vz$('Renovar via MercadoPago');
      set_onClickFunction($receiver, DonateView$start$lambda$lambda$lambda$lambda_1(closure$key));
      return Unit;
    };
  }
  function DonateView$start$lambda$lambda_8(closure$donationKeys) {
    return function ($receiver) {
      var tmp$;
      div($receiver, 'category-name', DonateView$start$lambda$lambda$lambda_5);
      p($receiver, void 0, DonateView$start$lambda$lambda$lambda_6);
      tmp$ = closure$donationKeys.iterator();
      while (tmp$.hasNext()) {
        var key = tmp$.next();
        h2($receiver, void 0, DonateView$start$lambda$lambda$lambda_7(key));
        h3($receiver, void 0, DonateView$start$lambda$lambda$lambda_8(key));
        div($receiver, 'button-discord button-discord-info pure-button', DonateView$start$lambda$lambda$lambda_9(key));
      }
      return Unit;
    };
  }
  function DonateView$start$lambda$lambda_9(closure$modal, this$DonateView) {
    return function () {
      closure$modal.close();
      this$DonateView.showDonateModal();
      return Unit;
    };
  }
  function DonateView$start$lambda$lambda_10(closure$modal) {
    return function () {
      closure$modal.close();
      return Unit;
    };
  }
  var get_list = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.get_list_gekvwj$;
  function DonateView$start$lambda_0(this$DonateView) {
    return function (it) {
      var tmp$;
      var donationKeysJson = ensureNotNull((tmp$ = document.getElementById('donation-keys-json')) != null ? tmp$.innerHTML : null);
      var $receiver = JSON_0.Companion.nonstrict;
      var donationKeys = $receiver.parse_awif5v$(get_list(getOrDefault($receiver.context, getKClass(PremiumKeyView$DonationKey))), donationKeysJson);
      if (!donationKeys.isEmpty()) {
        var modal = new TingleModal(new TingleOptions_0(true, void 0, void 0, void 0, ['tingle-modal--overflow']));
        modal.setContent(div_0(get_create(document), void 0, DonateView$start$lambda$lambda_8(donationKeys)));
        modal.addFooterBtn('<i class="fas fa-gift"><\/i> Eu quero comprar uma nova key', 'button-discord button-discord-info pure-button button-discord-modal', DonateView$start$lambda$lambda_9(modal, this$DonateView));
        modal.addFooterBtn('<i class="fas fa-times"><\/i> Fechar', 'button-discord pure-button button-discord-modal button-discord-modal-secondary-action', DonateView$start$lambda$lambda_10(modal));
        modal.open();
      }
       else {
        this$DonateView.showDonateModal();
      }
      return Unit;
    };
  }
  DonateView.prototype.start = function () {
    var tmp$, tmp$_0;
    document.addEventListener('DOMContentLoaded', DonateView$start$lambda);
    (tmp$_0 = (tmp$ = page.getElementById_61zpoe$('donate-button')) == null || Kotlin.isType(tmp$, HTMLDivElement) ? tmp$ : throwCCE()) != null ? (tmp$_0.onclick = DonateView$start$lambda_0(this)) : null;
  };
  function DonateView$showDonateModal$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$(get_locale().get_25kzsl$('website.donate.areYouGoingToDonate', []));
    return Unit;
  }
  function DonateView$showDonateModal$lambda$lambda$lambda($receiver) {
    $receiver.src = 'https://cdn.discordapp.com/attachments/510601125221761054/535199384535826442/FreshLori.gif';
    return Unit;
  }
  function DonateView$showDonateModal$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Obrigada por querer doar para mim! Voc\xEA n\xE3o faz ideia de como cada doa\xE7\xE3o me ajuda a sobreviver.');
    return Unit;
  }
  function DonateView$showDonateModal$lambda$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('Mas ent\xE3o...');
    return Unit;
  }
  function DonateView$showDonateModal$lambda$lambda$lambda_2($receiver) {
    $receiver.unaryPlus_pdl1vz$('Quanto voc\xEA vai querer doar?');
    return Unit;
  }
  function DonateView$showDonateModal$lambda$lambda$lambda_3($receiver) {
    $receiver.min = '1';
    $receiver.max = '1000';
    $receiver.value = '20';
    $receiver.step = '0.10';
    return Unit;
  }
  function DonateView$showDonateModal$lambda$lambda$lambda_4($receiver) {
    $receiver.unaryPlus_pdl1vz$('N\xE3o se esque\xE7a de entrar no meu servidor de suporte (vai se d\xE1 algum problema, n\xE9?)');
    return Unit;
  }
  function DonateView$showDonateModal$lambda$lambda$lambda$lambda$lambda$ObjectLiteral() {
    this.gateway = 'MERCADOPAGO';
    var tmp$;
    this.money = (Kotlin.isType(tmp$ = page.getElementByClass_61zpoe$('tingle-modal--visible').getElementsByClassName('how-much-money')[0], HTMLInputElement) ? tmp$ : throwCCE()).value;
  }
  DonateView$showDonateModal$lambda$lambda$lambda$lambda$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function DonateView$showDonateModal$lambda$lambda$lambda$lambda$lambda$lambda(closure$o_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$DonateView$showDonateModal$lambda$lambda$lambda$lambda$lambda$lambda(closure$o_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$DonateView$showDonateModal$lambda$lambda$lambda$lambda$lambda$lambda(closure$o_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$o = closure$o_0;
  }
  Coroutine$DonateView$showDonateModal$lambda$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DonateView$showDonateModal$lambda$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DonateView$showDonateModal$lambda$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$DonateView$showDonateModal$lambda$lambda$lambda$lambda$lambda$lambda;
  Coroutine$DonateView$showDonateModal$lambda$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = HttpRequest$Companion_getInstance().post_puj7f4$(get_loriUrl() + 'api/v1/user/donate', JSON.stringify(this.local$closure$o), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var response = this.result_0;
            var payload = JSON.parse(response.body);
            return window.location.href = typeof (tmp$ = payload['redirectUrl']) === 'string' ? tmp$ : throwCCE(), Unit;
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
  function DonateView$showDonateModal$lambda$lambda$lambda$lambda$lambda(it) {
    var o = new DonateView$showDonateModal$lambda$lambda$lambda$lambda$lambda$ObjectLiteral();
    println(JSON.stringify(o));
    launch(coroutines.GlobalScope, void 0, void 0, DonateView$showDonateModal$lambda$lambda$lambda$lambda$lambda$lambda(o));
    return Unit;
  }
  function DonateView$showDonateModal$lambda$lambda$lambda$lambda($receiver) {
    set_style($receiver, 'font-size: 1.25em; margin: 5px;');
    $receiver.unaryPlus_pdl1vz$('MercadoPago (Boleto, Cart\xE3o de Cr\xE9dito e Saldo do MercadoPago)');
    set_onClickFunction($receiver, DonateView$showDonateModal$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function DonateView$showDonateModal$lambda$lambda$lambda_5($receiver) {
    div($receiver, 'button-discord button-discord-info pure-button', DonateView$showDonateModal$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function DonateView$showDonateModal$lambda$lambda_0($receiver) {
    set_style($receiver, 'text-align: center;');
    img($receiver, void 0, void 0, void 0, DonateView$showDonateModal$lambda$lambda$lambda);
    p($receiver, void 0, DonateView$showDonateModal$lambda$lambda$lambda_0);
    p($receiver, void 0, DonateView$showDonateModal$lambda$lambda$lambda_1);
    p($receiver, void 0, DonateView$showDonateModal$lambda$lambda$lambda_2);
    input_0($receiver, InputType.number, void 0, void 0, void 0, 'how-much-money', DonateView$showDonateModal$lambda$lambda$lambda_3);
    $receiver.unaryPlus_pdl1vz$(' reais');
    p($receiver, void 0, DonateView$showDonateModal$lambda$lambda$lambda_4);
    div($receiver, void 0, DonateView$showDonateModal$lambda$lambda$lambda_5);
    return Unit;
  }
  function DonateView$showDonateModal$lambda($receiver) {
    div($receiver, 'category-name', DonateView$showDonateModal$lambda$lambda);
    div($receiver, void 0, DonateView$showDonateModal$lambda$lambda_0);
    return Unit;
  }
  function DonateView$showDonateModal$lambda_0(closure$modal) {
    return function () {
      closure$modal.close();
      return Unit;
    };
  }
  DonateView.prototype.showDonateModal = function () {
    var modal = new TingleModal(new TingleOptions_0(true, void 0, void 0, void 0, ['tingle-modal--overflow']));
    modal.setContent(div_0(get_create(document), void 0, DonateView$showDonateModal$lambda));
    modal.addFooterBtn('<i class="fas fa-times"><\/i> Fechar', 'button-discord pure-button button-discord-modal button-discord-modal-secondary-action', DonateView$showDonateModal$lambda_0(modal));
    modal.open();
  };
  function DonateView$DonationReward(name, minimumDonation, callback) {
    if (callback === void 0)
      callback = DonateView$DonateView$DonationReward_init$lambda(minimumDonation);
    this.name = name;
    this.minimumDonation = minimumDonation;
    this.callback = callback;
  }
  function DonateView$DonateView$DonationReward_init$lambda$lambda($receiver) {
    return Unit;
  }
  function DonateView$DonateView$DonationReward_init$lambda$lambda_0($receiver) {
    return Unit;
  }
  function DonateView$DonateView$DonationReward_init$lambda(closure$minimumDonation) {
    return function ($receiver, column) {
      if (column >= closure$minimumDonation) {
        i($receiver, 'fas fa-check', DonateView$DonateView$DonationReward_init$lambda$lambda);
      }
       else {
        i($receiver, 'fas fa-times', DonateView$DonateView$DonationReward_init$lambda$lambda_0);
      }
      return Unit;
    };
  }
  DonateView$DonationReward.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DonationReward',
    interfaces: []
  };
  DonateView$DonationReward.prototype.component1 = function () {
    return this.name;
  };
  DonateView$DonationReward.prototype.component2 = function () {
    return this.minimumDonation;
  };
  DonateView$DonationReward.prototype.component3 = function () {
    return this.callback;
  };
  DonateView$DonationReward.prototype.copy_g3me55$ = function (name, minimumDonation, callback) {
    return new DonateView$DonationReward(name === void 0 ? this.name : name, minimumDonation === void 0 ? this.minimumDonation : minimumDonation, callback === void 0 ? this.callback : callback);
  };
  DonateView$DonationReward.prototype.toString = function () {
    return 'DonationReward(name=' + Kotlin.toString(this.name) + (', minimumDonation=' + Kotlin.toString(this.minimumDonation)) + (', callback=' + Kotlin.toString(this.callback)) + ')';
  };
  DonateView$DonationReward.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.minimumDonation) | 0;
    result = result * 31 + Kotlin.hashCode(this.callback) | 0;
    return result;
  };
  DonateView$DonationReward.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.minimumDonation, other.minimumDonation) && Kotlin.equals(this.callback, other.callback)))));
  };
  DonateView.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DonateView',
    interfaces: []
  };
  var DonateView_instance = null;
  function DonateView_getInstance() {
    if (DonateView_instance === null) {
      new DonateView();
    }
    return DonateView_instance;
  }
  function FanArtsView() {
    FanArtsView_instance = this;
    this.rightSidebarContents_5chyjn$_0 = lazy(FanArtsView$rightSidebarContents$lambda);
  }
  Object.defineProperty(FanArtsView.prototype, 'rightSidebarContents', {
    get: function () {
      return this.rightSidebarContents_5chyjn$_0.value;
    }
  });
  function FanArtsView$start$lambda$lambda$lambda(closure$artists, this$FanArtsView) {
    return function (it) {
      this$FanArtsView.displayAllFanArts_lt1393$(closure$artists);
      return Unit;
    };
  }
  function FanArtsView$start$lambda$lambda(closure$fanArts, closure$artists, this$FanArtsView) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Todas as ' + closure$fanArts.size + ' Fan Arts');
      set_onClickFunction($receiver, FanArtsView$start$lambda$lambda$lambda(closure$artists, this$FanArtsView));
      return Unit;
    };
  }
  function FanArtsView$start$lambda$lambda_0(it) {
    return it.fanArts.size;
  }
  function FanArtsView$start$lambda$lambda_1(it) {
    return it.name;
  }
  function FanArtsView$start$lambda$lambda$lambda$lambda(closure$artist) {
    return function ($receiver) {
      $receiver.width = '24';
      $receiver.height = '24';
      set_style($receiver, 'border-radius: 999px; padding-right: 3px;');
      $receiver.src = closure$artist.effectiveAvatarUrl;
      return Unit;
    };
  }
  function FanArtsView$start$lambda$lambda$lambda$lambda_0(closure$artist, this$FanArtsView) {
    return function (it) {
      this$FanArtsView.displayArtistProfile_p9v37q$(closure$artist);
      return Unit;
    };
  }
  function FanArtsView$start$lambda$lambda$lambda_0(closure$artist, this$FanArtsView) {
    return function ($receiver) {
      img($receiver, void 0, void 0, void 0, FanArtsView$start$lambda$lambda$lambda$lambda(closure$artist));
      $receiver.unaryPlus_pdl1vz$(' ' + closure$artist.name + ' (' + closure$artist.fanArts.size + ' fan arts)');
      set_onClickFunction($receiver, FanArtsView$start$lambda$lambda$lambda$lambda_0(closure$artist, this$FanArtsView));
      return Unit;
    };
  }
  var compareByDescending$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(b), selector(a));
      };
    };
  });
  function Comparator$ObjectLiteral_0(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_0.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var thenBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (this$thenBy, closure$selector) {
      return function (a, b) {
        var previousCompare = this$thenBy.compare(a, b);
        var tmp$;
        if (previousCompare !== 0)
          tmp$ = previousCompare;
        else {
          var selector = closure$selector;
          tmp$ = compareValues(selector(a), selector(b));
        }
        return tmp$;
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
  function FanArtsView$start$lambda(closure$fanArts, closure$artists, this$FanArtsView) {
    return function ($receiver) {
      div_0($receiver, 'item', FanArtsView$start$lambda$lambda(closure$fanArts, closure$artists, this$FanArtsView));
      var $receiver_0 = sortedWith(closure$artists, new Comparator$ObjectLiteral_1(thenBy$lambda(new Comparator$ObjectLiteral_0(compareByDescending$lambda(FanArtsView$start$lambda$lambda_0)), FanArtsView$start$lambda$lambda_1)));
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        div_0($receiver, 'item', FanArtsView$start$lambda$lambda$lambda_0(element, this$FanArtsView));
      }
      return Unit;
    };
  }
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  FanArtsView.prototype.start = function () {
    var $receiver = JSON_0.Companion.nonstrict;
    var objects = page.getElementById_61zpoe$('artists-json').innerHTML;
    var artists = $receiver.parse_awif5v$(get_list(getOrDefault($receiver.context, getKClass(FanArtsView$FanArtArtist))), objects);
    var tmp$;
    tmp$ = artists.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      println(element.id + ' - ' + element.name + ' - ' + toString(element.fanArts.size) + ' fan arts');
    }
    var fanArtWrapper = page.getElementById_61zpoe$('left-sidebar-entries');
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = artists.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      var list = element_0.fanArts;
      addAll(destination, list);
    }
    var fanArts = destination;
    append(fanArtWrapper, FanArtsView$start$lambda(fanArts, artists, this));
    this.displayAllFanArts_lt1393$(artists);
  };
  function FanArtsView$displayAllFanArts$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$fanArt) {
    return function ($receiver) {
      var $receiver_0 = $receiver.attributes;
      var key = 'data-src';
      var value = 'https://loritta.website/assets/img/fanarts/' + closure$fanArt.fileName;
      $receiver_0.put_xwzc9p$(key, value);
      return Unit;
    };
  }
  function FanArtsView$displayAllFanArts$lambda$lambda$lambda$lambda$lambda$lambda(closure$artist, closure$fanArt) {
    return function ($receiver) {
      img($receiver, 'Fan Art da Loritta - Feita por ' + closure$artist.name, void 0, 'animated animate-on-scroll-up is-invisible', FanArtsView$displayAllFanArts$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$fanArt));
      return Unit;
    };
  }
  function FanArtsView$displayAllFanArts$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$artist, this$FanArtsView) {
    return function (it) {
      this$FanArtsView.displayArtistProfile_p9v37q$(closure$artist);
      return Unit;
    };
  }
  function FanArtsView$displayAllFanArts$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$artist, this$FanArtsView) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('por ' + closure$artist.name);
      set_onClickFunction($receiver, FanArtsView$displayAllFanArts$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$artist, this$FanArtsView));
      return Unit;
    };
  }
  function FanArtsView$displayAllFanArts$lambda$lambda$lambda$lambda$lambda(closure$fanArt, closure$artist, this$FanArtsView) {
    return function ($receiver) {
      a($receiver, 'https://loritta.website/assets/img/fanarts/' + closure$fanArt.fileName, '_blank', void 0, FanArtsView$displayAllFanArts$lambda$lambda$lambda$lambda$lambda$lambda(closure$artist, closure$fanArt));
      p($receiver, void 0, FanArtsView$displayAllFanArts$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$artist, this$FanArtsView));
      return Unit;
    };
  }
  function FanArtsView$displayAllFanArts$lambda$lambda$lambda$lambda(closure$fanArt, closure$artist, this$FanArtsView) {
    return function ($receiver) {
      div($receiver, 'fanArtWrapper', FanArtsView$displayAllFanArts$lambda$lambda$lambda$lambda$lambda(closure$fanArt, closure$artist, this$FanArtsView));
      return Unit;
    };
  }
  function FanArtsView$displayAllFanArts$lambda$lambda$lambda(closure$artists, this$FanArtsView) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      tmp$ = closure$artists.iterator();
      while (tmp$.hasNext()) {
        var artist = tmp$.next();
        tmp$_0 = artist.fanArts.iterator();
        while (tmp$_0.hasNext()) {
          var fanArt = tmp$_0.next();
          div($receiver, 'pure-u-1 pure-u-md-1-4 fan-art-box', FanArtsView$displayAllFanArts$lambda$lambda$lambda$lambda(fanArt, artist, this$FanArtsView));
        }
      }
      return Unit;
    };
  }
  function FanArtsView$displayAllFanArts$lambda$lambda(closure$artists, this$FanArtsView) {
    return function ($receiver) {
      set_id($receiver, 'fanArts');
      div($receiver, 'pure-g', FanArtsView$displayAllFanArts$lambda$lambda$lambda(closure$artists, this$FanArtsView));
      return Unit;
    };
  }
  function FanArtsView$displayAllFanArts$lambda(closure$artists, this$FanArtsView) {
    return function ($receiver) {
      div_0($receiver, void 0, FanArtsView$displayAllFanArts$lambda$lambda(closure$artists, this$FanArtsView));
      return Unit;
    };
  }
  FanArtsView.prototype.displayAllFanArts_lt1393$ = function (artists) {
    clear(this.rightSidebarContents);
    append(this.rightSidebarContents, FanArtsView$displayAllFanArts$lambda(artists, this));
  };
  function FanArtsView$displayArtistProfile$lambda$lambda$lambda$lambda(closure$artist) {
    return function ($receiver) {
      $receiver.width = '90';
      $receiver.height = '90';
      set_style($receiver, 'border-radius: 999px; padding-right: 3px;');
      $receiver.src = closure$artist.effectiveAvatarUrl;
      return Unit;
    };
  }
  function FanArtsView$displayArtistProfile$lambda$lambda$lambda$lambda_0(closure$artist) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$artist.name);
      return Unit;
    };
  }
  function FanArtsView$displayArtistProfile$lambda$lambda$lambda(closure$artist) {
    return function ($receiver) {
      img($receiver, void 0, void 0, void 0, FanArtsView$displayArtistProfile$lambda$lambda$lambda$lambda(closure$artist));
      span($receiver, 'artist-name sectionHeader', FanArtsView$displayArtistProfile$lambda$lambda$lambda$lambda_0(closure$artist));
      return Unit;
    };
  }
  function FanArtsView$displayArtistProfile$lambda$lambda$lambda_0(closure$artist) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$artist.aboutMe);
      return Unit;
    };
  }
  function FanArtsView$displayArtistProfile$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    set_style($receiver, 'vertical-align: middle; text-shadow: #0000004d 0px 1px;');
    return Unit;
  }
  function FanArtsView$displayArtistProfile$lambda$lambda$lambda$lambda$lambda(closure$socialNetwork) {
    return function ($receiver) {
      var tmp$;
      set_style($receiver, 'padding-right: 6px; padding-left: 6px; align-items: center; justify-content: center;');
      switch (closure$socialNetwork.socialNetwork.name) {
        case 'DISCORD':
          tmp$ = 'fab fa-discord';
          break;
        case 'DEVIANTART':
          tmp$ = 'fab fa-deviantart';
          break;
        case 'TWITTER':
          tmp$ = 'fab fa-twitter';
          break;
        case 'STEAM':
          tmp$ = 'fab fa-steam-symbol';
          break;
        case 'YOUTUBE':
          tmp$ = 'fab fa-youtube';
          break;
        case 'WEBSITE':
          tmp$ = 'fas fa-link';
          break;
        case 'AMINO':
          tmp$ = 'fas fa-home';
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      i($receiver, tmp$, FanArtsView$displayArtistProfile$lambda$lambda$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function FanArtsView$displayArtistProfile$lambda$lambda$lambda$lambda$lambda_0(closure$socialNetwork) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$socialNetwork.display);
      set_style($receiver, 'background-color: #0000001c; display: inline-block; align-items: center; justify-content: center; padding: 4px; font-family: Whitney; font-weight: 600; text-shadow: #0000004d 0px 1px;');
      return Unit;
    };
  }
  function FanArtsView$displayArtistProfile$lambda$lambda$lambda$lambda_1(closure$socialNetwork) {
    return function ($receiver) {
      set_style($receiver, 'background-color: #1da1f2; border-radius: 3px; display: table; margin-bottom: 2px;');
      span($receiver, void 0, FanArtsView$displayArtistProfile$lambda$lambda$lambda$lambda$lambda(closure$socialNetwork));
      span($receiver, void 0, FanArtsView$displayArtistProfile$lambda$lambda$lambda$lambda$lambda_0(closure$socialNetwork));
      return Unit;
    };
  }
  function FanArtsView$displayArtistProfile$lambda$lambda$lambda_1(closure$socialNetwork) {
    return function ($receiver) {
      set_style($receiver, 'color: white;');
      div($receiver, void 0, FanArtsView$displayArtistProfile$lambda$lambda$lambda$lambda_1(closure$socialNetwork));
      if (closure$socialNetwork.link != null)
        $receiver.href = closure$socialNetwork.link;
      return Unit;
    };
  }
  function FanArtsView$displayArtistProfile$lambda$lambda(closure$artist) {
    return function ($receiver) {
      var tmp$;
      div($receiver, 'artist-header', FanArtsView$displayArtistProfile$lambda$lambda$lambda(closure$artist));
      if (closure$artist.aboutMe != null) {
        div($receiver, void 0, FanArtsView$displayArtistProfile$lambda$lambda$lambda_0(closure$artist));
      }
      tmp$ = closure$artist.socialNetworks.iterator();
      while (tmp$.hasNext()) {
        var socialNetwork = tmp$.next();
        a($receiver, void 0, void 0, void 0, FanArtsView$displayArtistProfile$lambda$lambda$lambda_1(socialNetwork));
      }
      return Unit;
    };
  }
  function FanArtsView$displayArtistProfile$lambda$lambda_0($receiver) {
    return Unit;
  }
  function FanArtsView$displayArtistProfile$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$artist, closure$fanArt) {
    return function ($receiver) {
      img($receiver, 'Fan Art da Loritta - Feita por ' + closure$artist.name, 'https://loritta.website/assets/img/fanarts/' + closure$fanArt.fileName);
      return Unit;
    };
  }
  function FanArtsView$displayArtistProfile$lambda$lambda$lambda$lambda$lambda_1(closure$fanArt, closure$artist) {
    return function ($receiver) {
      a($receiver, 'https://loritta.website/assets/img/fanarts/' + closure$fanArt.fileName, '_blank', void 0, FanArtsView$displayArtistProfile$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$artist, closure$fanArt));
      return Unit;
    };
  }
  function FanArtsView$displayArtistProfile$lambda$lambda$lambda$lambda_2(closure$fanArt, closure$artist) {
    return function ($receiver) {
      div($receiver, 'fanArtWrapper', FanArtsView$displayArtistProfile$lambda$lambda$lambda$lambda$lambda_1(closure$fanArt, closure$artist));
      return Unit;
    };
  }
  function FanArtsView$displayArtistProfile$lambda$lambda$lambda_2(closure$artist) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$artist.fanArts.iterator();
      while (tmp$.hasNext()) {
        var fanArt = tmp$.next();
        div($receiver, 'pure-u-1 pure-u-md-1-4 fan-art-box animated fadeInUp', FanArtsView$displayArtistProfile$lambda$lambda$lambda$lambda_2(fanArt, closure$artist));
      }
      return Unit;
    };
  }
  function FanArtsView$displayArtistProfile$lambda$lambda_1(closure$artist) {
    return function ($receiver) {
      set_id($receiver, 'fanArts');
      div($receiver, 'pure-g', FanArtsView$displayArtistProfile$lambda$lambda$lambda_2(closure$artist));
      return Unit;
    };
  }
  function FanArtsView$displayArtistProfile$lambda(closure$artist) {
    return function ($receiver) {
      div_0($receiver, 'artist-profile', FanArtsView$displayArtistProfile$lambda$lambda(closure$artist));
      hr_0($receiver, void 0, FanArtsView$displayArtistProfile$lambda$lambda_0);
      div_0($receiver, void 0, FanArtsView$displayArtistProfile$lambda$lambda_1(closure$artist));
      return Unit;
    };
  }
  FanArtsView.prototype.displayArtistProfile_p9v37q$ = function (artist) {
    clear(this.rightSidebarContents);
    append(this.rightSidebarContents, FanArtsView$displayArtistProfile$lambda(artist));
  };
  function FanArtsView$FanArtArtist(id, name, effectiveAvatarUrl, socialNetworks, aboutMe) {
    FanArtsView$FanArtArtist$Companion_getInstance();
    if (id === void 0)
      id = null;
    if (aboutMe === void 0)
      aboutMe = null;
    this.id = id;
    this.name = name;
    this.effectiveAvatarUrl = effectiveAvatarUrl;
    this.socialNetworks = socialNetworks;
    this.aboutMe = aboutMe;
    this.fanArts = ArrayList_init();
  }
  function FanArtsView$FanArtArtist$SocialNetworkWrapper(socialNetwork, display, link) {
    FanArtsView$FanArtArtist$SocialNetworkWrapper$Companion_getInstance();
    this.socialNetwork = socialNetwork;
    this.display = display;
    this.link = link;
  }
  function FanArtsView$FanArtArtist$SocialNetworkWrapper$Companion() {
    FanArtsView$FanArtArtist$SocialNetworkWrapper$Companion_instance = this;
  }
  FanArtsView$FanArtArtist$SocialNetworkWrapper$Companion.prototype.serializer = function () {
    return FanArtsView$FanArtArtist$SocialNetworkWrapper$$serializer_getInstance();
  };
  FanArtsView$FanArtArtist$SocialNetworkWrapper$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FanArtsView$FanArtArtist$SocialNetworkWrapper$Companion_instance = null;
  function FanArtsView$FanArtArtist$SocialNetworkWrapper$Companion_getInstance() {
    if (FanArtsView$FanArtArtist$SocialNetworkWrapper$Companion_instance === null) {
      new FanArtsView$FanArtArtist$SocialNetworkWrapper$Companion();
    }
    return FanArtsView$FanArtArtist$SocialNetworkWrapper$Companion_instance;
  }
  function FanArtsView$FanArtArtist$SocialNetworkWrapper$$serializer() {
    this.descriptor_he4y23$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.views.FanArtsView.FanArtArtist.SocialNetworkWrapper');
    this.descriptor.addElement_ivxn3r$('socialNetwork');
    this.descriptor.addElement_ivxn3r$('display');
    this.descriptor.addElement_ivxn3r$('link');
    FanArtsView$FanArtArtist$SocialNetworkWrapper$$serializer_instance = this;
  }
  Object.defineProperty(FanArtsView$FanArtArtist$SocialNetworkWrapper$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_he4y23$_0;
    }
  });
  FanArtsView$FanArtArtist$SocialNetworkWrapper$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, new EnumSerializer(Kotlin.getKClass(FanArtsView$SocialNetwork)), obj.socialNetwork);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.display);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 2, internal.StringSerializer, obj.link);
    output.endStructure_qatsm0$(this.descriptor);
  };
  FanArtsView$FanArtArtist$SocialNetworkWrapper$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
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
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, new EnumSerializer(Kotlin.getKClass(FanArtsView$SocialNetwork))) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, new EnumSerializer(Kotlin.getKClass(FanArtsView$SocialNetwork)), local0);
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
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return FanArtsView$FanArtArtist$FanArtsView$FanArtArtist$SocialNetworkWrapper_init(bitMask0, local0, local1, local2, null);
  };
  FanArtsView$FanArtArtist$SocialNetworkWrapper$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var FanArtsView$FanArtArtist$SocialNetworkWrapper$$serializer_instance = null;
  function FanArtsView$FanArtArtist$SocialNetworkWrapper$$serializer_getInstance() {
    if (FanArtsView$FanArtArtist$SocialNetworkWrapper$$serializer_instance === null) {
      new FanArtsView$FanArtArtist$SocialNetworkWrapper$$serializer();
    }
    return FanArtsView$FanArtArtist$SocialNetworkWrapper$$serializer_instance;
  }
  function FanArtsView$FanArtArtist$FanArtsView$FanArtArtist$SocialNetworkWrapper_init(seen, socialNetwork, display, link, serializationConstructorMarker) {
    var $this = Object.create(FanArtsView$FanArtArtist$SocialNetworkWrapper.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('socialNetwork');
    else
      $this.socialNetwork = socialNetwork;
    if ((seen & 2) === 0)
      throw new MissingFieldException('display');
    else
      $this.display = display;
    if ((seen & 4) === 0)
      throw new MissingFieldException('link');
    else
      $this.link = link;
    return $this;
  }
  FanArtsView$FanArtArtist$SocialNetworkWrapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SocialNetworkWrapper',
    interfaces: []
  };
  function FanArtsView$FanArtArtist$Companion() {
    FanArtsView$FanArtArtist$Companion_instance = this;
  }
  FanArtsView$FanArtArtist$Companion.prototype.serializer = function () {
    return FanArtsView$FanArtArtist$$serializer_getInstance();
  };
  FanArtsView$FanArtArtist$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FanArtsView$FanArtArtist$Companion_instance = null;
  function FanArtsView$FanArtArtist$Companion_getInstance() {
    if (FanArtsView$FanArtArtist$Companion_instance === null) {
      new FanArtsView$FanArtArtist$Companion();
    }
    return FanArtsView$FanArtArtist$Companion_instance;
  }
  function FanArtsView$FanArtArtist$$serializer() {
    this.descriptor_oufog1$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.views.FanArtsView.FanArtArtist');
    this.descriptor.addElement_ivxn3r$('id');
    this.descriptor.addElement_ivxn3r$('name');
    this.descriptor.addElement_ivxn3r$('effectiveAvatarUrl');
    this.descriptor.addElement_ivxn3r$('socialNetworks');
    this.descriptor.addElement_ivxn3r$('aboutMe');
    this.descriptor.addElement_ivxn3r$('fanArts');
    FanArtsView$FanArtArtist$$serializer_instance = this;
  }
  Object.defineProperty(FanArtsView$FanArtArtist$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_oufog1$_0;
    }
  });
  FanArtsView$FanArtArtist$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 0, internal.StringSerializer, obj.id);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.name);
    output.encodeStringElement_bgm7zs$(this.descriptor, 2, obj.effectiveAvatarUrl);
    output.encodeSerializableElement_blecud$(this.descriptor, 3, new ArrayListSerializer(FanArtsView$FanArtArtist$SocialNetworkWrapper$$serializer_getInstance()), obj.socialNetworks);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 4, internal.StringSerializer, obj.aboutMe);
    output.encodeSerializableElement_blecud$(this.descriptor, 5, new ArrayListSerializer(FanArtsView$LorittaFanArt$$serializer_getInstance()), obj.fanArts);
    output.endStructure_qatsm0$(this.descriptor);
  };
  FanArtsView$FanArtArtist$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
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
          local0 = (bitMask0 & 1) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 0, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 0, internal.StringSerializer, local0);
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
          local3 = (bitMask0 & 8) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 3, new ArrayListSerializer(FanArtsView$FanArtArtist$SocialNetworkWrapper$$serializer_getInstance())) : input.updateSerializableElement_ehubvl$(this.descriptor, 3, new ArrayListSerializer(FanArtsView$FanArtArtist$SocialNetworkWrapper$$serializer_getInstance()), local3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = (bitMask0 & 16) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 4, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 4, internal.StringSerializer, local4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case 5:
          local5 = (bitMask0 & 32) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 5, new ArrayListSerializer(FanArtsView$LorittaFanArt$$serializer_getInstance())) : input.updateSerializableElement_ehubvl$(this.descriptor, 5, new ArrayListSerializer(FanArtsView$LorittaFanArt$$serializer_getInstance()), local5);
          bitMask0 |= 32;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return FanArtsView$FanArtsView$FanArtArtist_init(bitMask0, local0, local1, local2, local3, local4, local5, null);
  };
  FanArtsView$FanArtArtist$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var FanArtsView$FanArtArtist$$serializer_instance = null;
  function FanArtsView$FanArtArtist$$serializer_getInstance() {
    if (FanArtsView$FanArtArtist$$serializer_instance === null) {
      new FanArtsView$FanArtArtist$$serializer();
    }
    return FanArtsView$FanArtArtist$$serializer_instance;
  }
  function FanArtsView$FanArtsView$FanArtArtist_init(seen, id, name, effectiveAvatarUrl, socialNetworks, aboutMe, fanArts, serializationConstructorMarker) {
    var $this = Object.create(FanArtsView$FanArtArtist.prototype);
    if ((seen & 1) === 0)
      $this.id = null;
    else
      $this.id = id;
    if ((seen & 2) === 0)
      throw new MissingFieldException('name');
    else
      $this.name = name;
    if ((seen & 4) === 0)
      throw new MissingFieldException('effectiveAvatarUrl');
    else
      $this.effectiveAvatarUrl = effectiveAvatarUrl;
    if ((seen & 8) === 0)
      throw new MissingFieldException('socialNetworks');
    else
      $this.socialNetworks = socialNetworks;
    if ((seen & 16) === 0)
      $this.aboutMe = null;
    else
      $this.aboutMe = aboutMe;
    if ((seen & 32) === 0)
      throw new MissingFieldException('fanArts');
    else
      $this.fanArts = fanArts;
    return $this;
  }
  FanArtsView$FanArtArtist.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FanArtArtist',
    interfaces: []
  };
  function FanArtsView$LorittaFanArt(artistId, fancyName, fileName, additionalInfo) {
    FanArtsView$LorittaFanArt$Companion_getInstance();
    if (artistId === void 0)
      artistId = null;
    if (fancyName === void 0)
      fancyName = null;
    if (additionalInfo === void 0)
      additionalInfo = null;
    this.artistId = artistId;
    this.fancyName = fancyName;
    this.fileName = fileName;
    this.additionalInfo = additionalInfo;
  }
  function FanArtsView$LorittaFanArt$Companion() {
    FanArtsView$LorittaFanArt$Companion_instance = this;
  }
  FanArtsView$LorittaFanArt$Companion.prototype.serializer = function () {
    return FanArtsView$LorittaFanArt$$serializer_getInstance();
  };
  FanArtsView$LorittaFanArt$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FanArtsView$LorittaFanArt$Companion_instance = null;
  function FanArtsView$LorittaFanArt$Companion_getInstance() {
    if (FanArtsView$LorittaFanArt$Companion_instance === null) {
      new FanArtsView$LorittaFanArt$Companion();
    }
    return FanArtsView$LorittaFanArt$Companion_instance;
  }
  function FanArtsView$LorittaFanArt$$serializer() {
    this.descriptor_qjodxj$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.views.FanArtsView.LorittaFanArt');
    this.descriptor.addElement_ivxn3r$('artistId');
    this.descriptor.addElement_ivxn3r$('fancyName');
    this.descriptor.addElement_ivxn3r$('fileName');
    this.descriptor.addElement_ivxn3r$('additionalInfo');
    FanArtsView$LorittaFanArt$$serializer_instance = this;
  }
  Object.defineProperty(FanArtsView$LorittaFanArt$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_qjodxj$_0;
    }
  });
  FanArtsView$LorittaFanArt$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 0, internal.StringSerializer, obj.artistId);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 1, internal.StringSerializer, obj.fancyName);
    output.encodeStringElement_bgm7zs$(this.descriptor, 2, obj.fileName);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 3, internal.StringSerializer, obj.additionalInfo);
    output.endStructure_qatsm0$(this.descriptor);
  };
  FanArtsView$LorittaFanArt$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
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
          local2 = input.decodeStringElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = (bitMask0 & 8) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 3, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 3, internal.StringSerializer, local3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return FanArtsView$FanArtsView$LorittaFanArt_init(bitMask0, local0, local1, local2, local3, null);
  };
  FanArtsView$LorittaFanArt$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var FanArtsView$LorittaFanArt$$serializer_instance = null;
  function FanArtsView$LorittaFanArt$$serializer_getInstance() {
    if (FanArtsView$LorittaFanArt$$serializer_instance === null) {
      new FanArtsView$LorittaFanArt$$serializer();
    }
    return FanArtsView$LorittaFanArt$$serializer_instance;
  }
  function FanArtsView$FanArtsView$LorittaFanArt_init(seen, artistId, fancyName, fileName, additionalInfo, serializationConstructorMarker) {
    var $this = Object.create(FanArtsView$LorittaFanArt.prototype);
    if ((seen & 1) === 0)
      $this.artistId = null;
    else
      $this.artistId = artistId;
    if ((seen & 2) === 0)
      $this.fancyName = null;
    else
      $this.fancyName = fancyName;
    if ((seen & 4) === 0)
      throw new MissingFieldException('fileName');
    else
      $this.fileName = fileName;
    if ((seen & 8) === 0)
      $this.additionalInfo = null;
    else
      $this.additionalInfo = additionalInfo;
    return $this;
  }
  FanArtsView$LorittaFanArt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LorittaFanArt',
    interfaces: []
  };
  function FanArtsView$SocialNetwork(name, ordinal, fancyName) {
    Enum.call(this);
    this.fancyName = fancyName;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FanArtsView$SocialNetwork_initFields() {
    FanArtsView$SocialNetwork_initFields = function () {
    };
    FanArtsView$SocialNetwork$DISCORD_instance = new FanArtsView$SocialNetwork('DISCORD', 0, 'Discord');
    FanArtsView$SocialNetwork$DEVIANTART_instance = new FanArtsView$SocialNetwork('DEVIANTART', 1, 'DeviantArt');
    FanArtsView$SocialNetwork$TWITTER_instance = new FanArtsView$SocialNetwork('TWITTER', 2, 'Twitter');
    FanArtsView$SocialNetwork$STEAM_instance = new FanArtsView$SocialNetwork('STEAM', 3, 'Steam');
    FanArtsView$SocialNetwork$YOUTUBE_instance = new FanArtsView$SocialNetwork('YOUTUBE', 4, 'YouTube');
    FanArtsView$SocialNetwork$WEBSITE_instance = new FanArtsView$SocialNetwork('WEBSITE', 5, 'Website');
    FanArtsView$SocialNetwork$AMINO_instance = new FanArtsView$SocialNetwork('AMINO', 6, 'Amino');
  }
  var FanArtsView$SocialNetwork$DISCORD_instance;
  function FanArtsView$SocialNetwork$DISCORD_getInstance() {
    FanArtsView$SocialNetwork_initFields();
    return FanArtsView$SocialNetwork$DISCORD_instance;
  }
  var FanArtsView$SocialNetwork$DEVIANTART_instance;
  function FanArtsView$SocialNetwork$DEVIANTART_getInstance() {
    FanArtsView$SocialNetwork_initFields();
    return FanArtsView$SocialNetwork$DEVIANTART_instance;
  }
  var FanArtsView$SocialNetwork$TWITTER_instance;
  function FanArtsView$SocialNetwork$TWITTER_getInstance() {
    FanArtsView$SocialNetwork_initFields();
    return FanArtsView$SocialNetwork$TWITTER_instance;
  }
  var FanArtsView$SocialNetwork$STEAM_instance;
  function FanArtsView$SocialNetwork$STEAM_getInstance() {
    FanArtsView$SocialNetwork_initFields();
    return FanArtsView$SocialNetwork$STEAM_instance;
  }
  var FanArtsView$SocialNetwork$YOUTUBE_instance;
  function FanArtsView$SocialNetwork$YOUTUBE_getInstance() {
    FanArtsView$SocialNetwork_initFields();
    return FanArtsView$SocialNetwork$YOUTUBE_instance;
  }
  var FanArtsView$SocialNetwork$WEBSITE_instance;
  function FanArtsView$SocialNetwork$WEBSITE_getInstance() {
    FanArtsView$SocialNetwork_initFields();
    return FanArtsView$SocialNetwork$WEBSITE_instance;
  }
  var FanArtsView$SocialNetwork$AMINO_instance;
  function FanArtsView$SocialNetwork$AMINO_getInstance() {
    FanArtsView$SocialNetwork_initFields();
    return FanArtsView$SocialNetwork$AMINO_instance;
  }
  FanArtsView$SocialNetwork.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SocialNetwork',
    interfaces: [Enum]
  };
  function FanArtsView$SocialNetwork$values() {
    return [FanArtsView$SocialNetwork$DISCORD_getInstance(), FanArtsView$SocialNetwork$DEVIANTART_getInstance(), FanArtsView$SocialNetwork$TWITTER_getInstance(), FanArtsView$SocialNetwork$STEAM_getInstance(), FanArtsView$SocialNetwork$YOUTUBE_getInstance(), FanArtsView$SocialNetwork$WEBSITE_getInstance(), FanArtsView$SocialNetwork$AMINO_getInstance()];
  }
  FanArtsView$SocialNetwork.values = FanArtsView$SocialNetwork$values;
  function FanArtsView$SocialNetwork$valueOf(name) {
    switch (name) {
      case 'DISCORD':
        return FanArtsView$SocialNetwork$DISCORD_getInstance();
      case 'DEVIANTART':
        return FanArtsView$SocialNetwork$DEVIANTART_getInstance();
      case 'TWITTER':
        return FanArtsView$SocialNetwork$TWITTER_getInstance();
      case 'STEAM':
        return FanArtsView$SocialNetwork$STEAM_getInstance();
      case 'YOUTUBE':
        return FanArtsView$SocialNetwork$YOUTUBE_getInstance();
      case 'WEBSITE':
        return FanArtsView$SocialNetwork$WEBSITE_getInstance();
      case 'AMINO':
        return FanArtsView$SocialNetwork$AMINO_getInstance();
      default:throwISE('No enum constant net.perfectdreams.spicymorenitta.views.FanArtsView.SocialNetwork.' + name);
    }
  }
  FanArtsView$SocialNetwork.valueOf_61zpoe$ = FanArtsView$SocialNetwork$valueOf;
  function FanArtsView$rightSidebarContents$lambda() {
    return page.getElementById_61zpoe$('right-sidebar-contents');
  }
  FanArtsView.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FanArtsView',
    interfaces: []
  };
  var FanArtsView_instance = null;
  function FanArtsView_getInstance() {
    if (FanArtsView_instance === null) {
      new FanArtsView();
    }
    return FanArtsView_instance;
  }
  function ProfileListView() {
    ProfileListView_instance = this;
  }
  function ProfileListView$start$lambda(this$ProfileListView) {
    return function (it) {
      var tmp$, tmp$_0;
      var premiumAsJson = ensureNotNull((tmp$ = document.getElementById('profile-list-json')) != null ? tmp$.innerHTML : null);
      var profileAsJson = ensureNotNull((tmp$_0 = document.getElementById('profile-json')) != null ? tmp$_0.innerHTML : null);
      var $receiver = JSON_0.Companion.nonstrict;
      var shipEffects = $receiver.parse_awif5v$(get_list(getOrDefault($receiver.context, getKClass(ProfileListView$ProfileLayout))), premiumAsJson);
      var $receiver_0 = JSON_0.Companion.nonstrict;
      var profile = $receiver_0.parse_awif5v$(getOrDefault($receiver_0.context, getKClass(ProfileListView$Profile)), profileAsJson);
      this$ProfileListView.generateEntries_m0fu2h$(profile, shipEffects);
      return Unit;
    };
  }
  ProfileListView.prototype.start = function () {
    document.addEventListener('DOMContentLoaded', ProfileListView$start$lambda(this));
  };
  function ProfileListView$generateEntries$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.width = '300';
    return Unit;
  }
  function ProfileListView$generateEntries$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$shipEffect) {
    return function ($receiver) {
      var tmp$;
      switch (closure$shipEffect.internalName) {
        case 'NostalgiaProfileCreator':
          tmp$ = 'Padr\xE3o';
          break;
        case 'DefaultProfileCreator':
          tmp$ = 'Moderno';
          break;
        case 'MSNProfileCreator':
          tmp$ = 'MSN';
          break;
        case 'OrkutProfileCreator':
          tmp$ = 'Orkut';
          break;
        default:tmp$ = '???';
          break;
      }
      $receiver.unaryPlus_pdl1vz$(tmp$);
      return Unit;
    };
  }
  function ProfileListView$generateEntries$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$shipEffect) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Pre\xE7o: ' + closure$shipEffect.price + ' sonhos');
      return Unit;
    };
  }
  function ProfileListView$generateEntries$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$shipEffect) {
    return function (it) {
      it['buyItem'] = 'profile';
      it['profileType'] = closure$shipEffect.internalName;
      return Unit;
    };
  }
  function ProfileListView$generateEntries$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$profile, this$ProfileListView) {
    return function (it) {
      var tmp$;
      tmp$ = it.statusCode;
      if (200 <= tmp$ && tmp$ <= 299) {
        var tmp$_0 = this$ProfileListView;
        var tmp$_1 = closure$profile;
        var $receiver = JSON_0.Companion.nonstrict;
        var objects = it.body;
        tmp$_0.generateEntries_m0fu2h$(tmp$_1, $receiver.parse_awif5v$(get_list(getOrDefault($receiver.context, getKClass(ProfileListView$ProfileLayout))), objects));
      }
      return Unit;
    };
  }
  function ProfileListView$generateEntries$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$shipEffect, closure$profile, this$ProfileListView) {
    return function (it) {
      var tmp$, tmp$_0;
      tmp$_0 = SaveUtils_getInstance();
      tmp$ = get_loriUrl_0() + 'api/v1/user/self-profile';
      tmp$_0.prepareSave_feck85$('profile_design', ProfileListView$generateEntries$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$shipEffect), void 0, ProfileListView$generateEntries$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$profile, this$ProfileListView), tmp$);
      return Unit;
    };
  }
  function ProfileListView$generateEntries$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$shipEffect, closure$profile, this$ProfileListView) {
    return function ($receiver) {
      set_style($receiver, 'font-size: 1.25em; margin: 5px;');
      if (closure$shipEffect.alreadyBought || closure$shipEffect.price > closure$profile.money) {
        set_classes($receiver, plus(get_classes($receiver), 'button-discord-disabled'));
      }
       else {
        set_classes($receiver, plus(get_classes($receiver), 'button-discord-info'));
        set_onClickFunction($receiver, ProfileListView$generateEntries$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$shipEffect, closure$profile, this$ProfileListView));
      }
      $receiver.unaryPlus_pdl1vz$('Comprar');
      return Unit;
    };
  }
  function ProfileListView$generateEntries$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$shipEffect) {
    return function (it) {
      it['setActiveProfileDesign'] = closure$shipEffect.internalName;
      return Unit;
    };
  }
  function ProfileListView$generateEntries$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$profile, this$ProfileListView) {
    return function (it) {
      var tmp$;
      tmp$ = it.statusCode;
      if (200 <= tmp$ && tmp$ <= 299) {
        var tmp$_0 = this$ProfileListView;
        var tmp$_1 = closure$profile;
        var $receiver = JSON_0.Companion.nonstrict;
        var objects = it.body;
        tmp$_0.generateEntries_m0fu2h$(tmp$_1, $receiver.parse_awif5v$(get_list(getOrDefault($receiver.context, getKClass(ProfileListView$ProfileLayout))), objects));
      }
      return Unit;
    };
  }
  function ProfileListView$generateEntries$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$shipEffect, closure$profile, this$ProfileListView) {
    return function (it) {
      var tmp$, tmp$_0;
      tmp$_0 = SaveUtils_getInstance();
      tmp$ = get_loriUrl_0() + 'api/v1/user/self-profile';
      tmp$_0.prepareSave_feck85$('profile_design', ProfileListView$generateEntries$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$shipEffect), void 0, ProfileListView$generateEntries$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$profile, this$ProfileListView), tmp$);
      return Unit;
    };
  }
  function ProfileListView$generateEntries$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$shipEffect, closure$profile, this$ProfileListView) {
    return function ($receiver) {
      if (!closure$shipEffect.alreadyBought || closure$shipEffect.activated) {
        set_classes($receiver, plus(get_classes($receiver), 'button-discord-disabled'));
      }
       else {
        set_classes($receiver, plus(get_classes($receiver), 'button-discord-info'));
        set_onClickFunction($receiver, ProfileListView$generateEntries$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$shipEffect, closure$profile, this$ProfileListView));
      }
      set_style($receiver, 'font-size: 1.25em; margin: 5px;');
      $receiver.unaryPlus_pdl1vz$('Ativar');
      return Unit;
    };
  }
  function ProfileListView$generateEntries$lambda$lambda$lambda$lambda$lambda(closure$profile, closure$shipEffect, this$ProfileListView) {
    return function ($receiver) {
      set_style($receiver, 'text-align: center;');
      img($receiver, void 0, get_loriUrl_0() + 'api/v1/user/' + closure$profile.id + '/profile-image/' + closure$shipEffect.shortName, void 0, ProfileListView$generateEntries$lambda$lambda$lambda$lambda$lambda$lambda);
      h2($receiver, void 0, ProfileListView$generateEntries$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$shipEffect));
      h3($receiver, void 0, ProfileListView$generateEntries$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$shipEffect));
      div($receiver, 'button-discord pure-button', ProfileListView$generateEntries$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$shipEffect, closure$profile, this$ProfileListView));
      div($receiver, 'button-discord pure-button', ProfileListView$generateEntries$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$shipEffect, closure$profile, this$ProfileListView));
      return Unit;
    };
  }
  function ProfileListView$generateEntries$lambda$lambda$lambda$lambda(closure$profile, closure$shipEffect, this$ProfileListView) {
    return function ($receiver) {
      div($receiver, void 0, ProfileListView$generateEntries$lambda$lambda$lambda$lambda$lambda(closure$profile, closure$shipEffect, this$ProfileListView));
      return Unit;
    };
  }
  function ProfileListView$generateEntries$lambda$lambda(closure$shipEffects, closure$profile, this$ProfileListView) {
    return function ($receiver) {
      var $receiver_0 = closure$shipEffects;
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var closure$profile_0 = closure$profile;
        var this$ProfileListView_0 = this$ProfileListView;
        println(element.internalName + ' - ' + toString(element.activated));
        div($receiver, 'pure-u-1 pure-u-md-1-3', ProfileListView$generateEntries$lambda$lambda$lambda$lambda(closure$profile_0, element, this$ProfileListView_0));
      }
      return Unit;
    };
  }
  function ProfileListView$generateEntries$lambda(closure$shipEffects, closure$profile, this$ProfileListView) {
    return function ($receiver) {
      div_0($receiver, 'pure-g vertically-centered-content', ProfileListView$generateEntries$lambda$lambda(closure$shipEffects, closure$profile, this$ProfileListView));
      return Unit;
    };
  }
  ProfileListView.prototype.generateEntries_m0fu2h$ = function (profile, shipEffects) {
    var el = page.getElementById_61zpoe$('ship-active-effects');
    clear(el);
    append(el, ProfileListView$generateEntries$lambda(shipEffects, profile, this));
  };
  function ProfileListView$Profile(id, money) {
    ProfileListView$Profile$Companion_getInstance();
    this.id = id;
    this.money = money;
  }
  function ProfileListView$Profile$Companion() {
    ProfileListView$Profile$Companion_instance = this;
  }
  ProfileListView$Profile$Companion.prototype.serializer = function () {
    return ProfileListView$Profile$$serializer_getInstance();
  };
  ProfileListView$Profile$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ProfileListView$Profile$Companion_instance = null;
  function ProfileListView$Profile$Companion_getInstance() {
    if (ProfileListView$Profile$Companion_instance === null) {
      new ProfileListView$Profile$Companion();
    }
    return ProfileListView$Profile$Companion_instance;
  }
  function ProfileListView$Profile$$serializer() {
    this.descriptor_vbpxsf$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.views.ProfileListView.Profile');
    this.descriptor.addElement_ivxn3r$('id');
    this.descriptor.addElement_ivxn3r$('money');
    ProfileListView$Profile$$serializer_instance = this;
  }
  Object.defineProperty(ProfileListView$Profile$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_vbpxsf$_0;
    }
  });
  ProfileListView$Profile$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.id);
    output.encodeDoubleElement_imzr5k$(this.descriptor, 1, obj.money);
    output.endStructure_qatsm0$(this.descriptor);
  };
  ProfileListView$Profile$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
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
          local1 = input.decodeDoubleElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return ProfileListView$ProfileListView$Profile_init(bitMask0, local0, local1, null);
  };
  ProfileListView$Profile$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var ProfileListView$Profile$$serializer_instance = null;
  function ProfileListView$Profile$$serializer_getInstance() {
    if (ProfileListView$Profile$$serializer_instance === null) {
      new ProfileListView$Profile$$serializer();
    }
    return ProfileListView$Profile$$serializer_instance;
  }
  function ProfileListView$ProfileListView$Profile_init(seen, id, money, serializationConstructorMarker) {
    var $this = Object.create(ProfileListView$Profile.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('id');
    else
      $this.id = id;
    if ((seen & 2) === 0)
      throw new MissingFieldException('money');
    else
      $this.money = money;
    return $this;
  }
  ProfileListView$Profile.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Profile',
    interfaces: []
  };
  function ProfileListView$ProfileLayout(internalName, shortName, price, alreadyBought, activated) {
    ProfileListView$ProfileLayout$Companion_getInstance();
    this.internalName = internalName;
    this.shortName = shortName;
    this.price = price;
    this.alreadyBought = alreadyBought;
    this.activated = activated;
  }
  function ProfileListView$ProfileLayout$Companion() {
    ProfileListView$ProfileLayout$Companion_instance = this;
  }
  ProfileListView$ProfileLayout$Companion.prototype.serializer = function () {
    return ProfileListView$ProfileLayout$$serializer_getInstance();
  };
  ProfileListView$ProfileLayout$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ProfileListView$ProfileLayout$Companion_instance = null;
  function ProfileListView$ProfileLayout$Companion_getInstance() {
    if (ProfileListView$ProfileLayout$Companion_instance === null) {
      new ProfileListView$ProfileLayout$Companion();
    }
    return ProfileListView$ProfileLayout$Companion_instance;
  }
  function ProfileListView$ProfileLayout$$serializer() {
    this.descriptor_brf6xz$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.views.ProfileListView.ProfileLayout');
    this.descriptor.addElement_ivxn3r$('internalName');
    this.descriptor.addElement_ivxn3r$('shortName');
    this.descriptor.addElement_ivxn3r$('price');
    this.descriptor.addElement_ivxn3r$('alreadyBought');
    this.descriptor.addElement_ivxn3r$('activated');
    ProfileListView$ProfileLayout$$serializer_instance = this;
  }
  Object.defineProperty(ProfileListView$ProfileLayout$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_brf6xz$_0;
    }
  });
  ProfileListView$ProfileLayout$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.internalName);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.shortName);
    output.encodeDoubleElement_imzr5k$(this.descriptor, 2, obj.price);
    output.encodeBooleanElement_w1b0nl$(this.descriptor, 3, obj.alreadyBought);
    output.encodeBooleanElement_w1b0nl$(this.descriptor, 4, obj.activated);
    output.endStructure_qatsm0$(this.descriptor);
  };
  ProfileListView$ProfileLayout$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4;
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
          local2 = input.decodeDoubleElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = input.decodeBooleanElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = input.decodeBooleanElement_3zr2iy$(this.descriptor, 4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return ProfileListView$ProfileListView$ProfileLayout_init(bitMask0, local0, local1, local2, local3, local4, null);
  };
  ProfileListView$ProfileLayout$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var ProfileListView$ProfileLayout$$serializer_instance = null;
  function ProfileListView$ProfileLayout$$serializer_getInstance() {
    if (ProfileListView$ProfileLayout$$serializer_instance === null) {
      new ProfileListView$ProfileLayout$$serializer();
    }
    return ProfileListView$ProfileLayout$$serializer_instance;
  }
  function ProfileListView$ProfileListView$ProfileLayout_init(seen, internalName, shortName, price, alreadyBought, activated, serializationConstructorMarker) {
    var $this = Object.create(ProfileListView$ProfileLayout.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('internalName');
    else
      $this.internalName = internalName;
    if ((seen & 2) === 0)
      throw new MissingFieldException('shortName');
    else
      $this.shortName = shortName;
    if ((seen & 4) === 0)
      throw new MissingFieldException('price');
    else
      $this.price = price;
    if ((seen & 8) === 0)
      throw new MissingFieldException('alreadyBought');
    else
      $this.alreadyBought = alreadyBought;
    if ((seen & 16) === 0)
      throw new MissingFieldException('activated');
    else
      $this.activated = activated;
    return $this;
  }
  ProfileListView$ProfileLayout.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProfileLayout',
    interfaces: []
  };
  ProfileListView.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ProfileListView',
    interfaces: []
  };
  var ProfileListView_instance = null;
  function ProfileListView_getInstance() {
    if (ProfileListView_instance === null) {
      new ProfileListView();
    }
    return ProfileListView_instance;
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
            this.result_0 = HttpRequest$Companion_getInstance().get_61zpoe$(get_loriUrl_0() + 'api/v1/callbacks/user-agent', this);
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
            this.result_0 = HttpRequest$Companion_getInstance().post_puj7f4$(get_loriUrl_0() + 'api/v1/user/' + this.local$closure$userId + '/reputation', JSON.stringify(this.local$closure$json), this);
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
              var ts1SkillUp = new Audio(get_loriUrl_0() + 'assets/snd/ts1_skill.mp3');
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
  function ShipEffectsView() {
    ShipEffectsView_instance = this;
  }
  function ShipEffectsView$start$lambda$lambda(this$ShipEffectsView) {
    return function (it) {
      this$ShipEffectsView.buy();
      return Unit;
    };
  }
  function ShipEffectsView$start$lambda$lambda$lambda$lambda(closure$shipEffect) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$shipEffect.user1Id + ' + ' + closure$shipEffect.user2Id + (' com ' + closure$shipEffect.editedShipValue + '%'));
      return Unit;
    };
  }
  function ShipEffectsView$start$lambda$lambda$lambda(closure$shipEffect) {
    return function ($receiver) {
      div_0($receiver, void 0, ShipEffectsView$start$lambda$lambda$lambda$lambda(closure$shipEffect));
      return Unit;
    };
  }
  function ShipEffectsView$start$lambda(this$ShipEffectsView) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      var premiumAsJson = ensureNotNull((tmp$ = document.getElementById('ship-effects-json')) != null ? tmp$.innerHTML : null);
      var $receiver = JSON_0.Companion.nonstrict;
      var shipEffects = $receiver.parse_awif5v$(get_list(getOrDefault($receiver.context, getKClass(ShipEffectsView$ShipEffect))), premiumAsJson);
      var profileAsJson = ensureNotNull((tmp$_0 = document.getElementById('profile-json')) != null ? tmp$_0.innerHTML : null);
      var $receiver_0 = JSON_0.Companion.nonstrict;
      var profile = $receiver_0.parse_awif5v$(getOrDefault($receiver_0.context, getKClass(ProfileListView$Profile)), profileAsJson);
      var buyButton = Kotlin.isType(tmp$_1 = page.getElementById_61zpoe$('buy-button'), HTMLButtonElement) ? tmp$_1 : throwCCE();
      if (3000 > profile.money) {
        addClass(buyButton, ['button-discord-disabled']);
      }
       else {
        addClass(buyButton, ['button-discord-success']);
      }
      if (profile.money > 3000) {
        buyButton.onclick = ShipEffectsView$start$lambda$lambda(this$ShipEffectsView);
      }
      var el = page.getElementById_61zpoe$('ship-active-effects');
      println(shipEffects.size);
      var tmp$_2;
      tmp$_2 = shipEffects.iterator();
      while (tmp$_2.hasNext()) {
        var element = tmp$_2.next();
        append(el, ShipEffectsView$start$lambda$lambda$lambda(element));
      }
      return Unit;
    };
  }
  ShipEffectsView.prototype.start = function () {
    document.addEventListener('DOMContentLoaded', ShipEffectsView$start$lambda(this));
  };
  function ShipEffectsView$prepareSave$lambda(it) {
    var tmp$, tmp$_0;
    it['buyItem'] = 'ship_effect';
    it['editedValue'] = (Kotlin.isType(tmp$ = page.getElementById_61zpoe$('newShipValue'), HTMLInputElement) ? tmp$ : throwCCE()).value;
    it['user2NamePlusDiscriminator'] = (Kotlin.isType(tmp$_0 = page.getElementById_61zpoe$('userName'), HTMLInputElement) ? tmp$_0 : throwCCE()).value;
    return Unit;
  }
  function ShipEffectsView$prepareSave$lambda_0(it) {
    var tmp$;
    tmp$ = it.statusCode;
    if (200 <= tmp$ && tmp$ <= 299) {
      window.location.href = window.location.href + '?bought';
    }
    return Unit;
  }
  ShipEffectsView.prototype.buy = function () {
    SaveUtils_getInstance().prepareSave_feck85$('ship_effect', ShipEffectsView$prepareSave$lambda, void 0, ShipEffectsView$prepareSave$lambda_0, get_loriUrl_0() + 'api/v1/user/self-profile');
  };
  function ShipEffectsView$ShipEffect(buyerId, user1Id, user2Id, editedShipValue, expiresAt) {
    ShipEffectsView$ShipEffect$Companion_getInstance();
    this.buyerId = buyerId;
    this.user1Id = user1Id;
    this.user2Id = user2Id;
    this.editedShipValue = editedShipValue;
    this.expiresAt = expiresAt;
  }
  function ShipEffectsView$ShipEffect$Companion() {
    ShipEffectsView$ShipEffect$Companion_instance = this;
  }
  ShipEffectsView$ShipEffect$Companion.prototype.serializer = function () {
    return ShipEffectsView$ShipEffect$$serializer_getInstance();
  };
  ShipEffectsView$ShipEffect$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ShipEffectsView$ShipEffect$Companion_instance = null;
  function ShipEffectsView$ShipEffect$Companion_getInstance() {
    if (ShipEffectsView$ShipEffect$Companion_instance === null) {
      new ShipEffectsView$ShipEffect$Companion();
    }
    return ShipEffectsView$ShipEffect$Companion_instance;
  }
  function ShipEffectsView$ShipEffect$$serializer() {
    this.descriptor_uavd02$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.views.ShipEffectsView.ShipEffect');
    this.descriptor.addElement_ivxn3r$('buyerId');
    this.descriptor.addElement_ivxn3r$('user1Id');
    this.descriptor.addElement_ivxn3r$('user2Id');
    this.descriptor.addElement_ivxn3r$('editedShipValue');
    this.descriptor.addElement_ivxn3r$('expiresAt');
    ShipEffectsView$ShipEffect$$serializer_instance = this;
  }
  Object.defineProperty(ShipEffectsView$ShipEffect$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_uavd02$_0;
    }
  });
  ShipEffectsView$ShipEffect$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.buyerId);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.user1Id);
    output.encodeStringElement_bgm7zs$(this.descriptor, 2, obj.user2Id);
    output.encodeIntElement_4wpqag$(this.descriptor, 3, obj.editedShipValue);
    output.encodeLongElement_a3zgoj$(this.descriptor, 4, obj.expiresAt);
    output.endStructure_qatsm0$(this.descriptor);
  };
  ShipEffectsView$ShipEffect$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4;
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
          local3 = input.decodeIntElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = input.decodeLongElement_3zr2iy$(this.descriptor, 4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return ShipEffectsView$ShipEffectsView$ShipEffect_init(bitMask0, local0, local1, local2, local3, local4, null);
  };
  ShipEffectsView$ShipEffect$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var ShipEffectsView$ShipEffect$$serializer_instance = null;
  function ShipEffectsView$ShipEffect$$serializer_getInstance() {
    if (ShipEffectsView$ShipEffect$$serializer_instance === null) {
      new ShipEffectsView$ShipEffect$$serializer();
    }
    return ShipEffectsView$ShipEffect$$serializer_instance;
  }
  function ShipEffectsView$ShipEffectsView$ShipEffect_init(seen, buyerId, user1Id, user2Id, editedShipValue, expiresAt, serializationConstructorMarker) {
    var $this = Object.create(ShipEffectsView$ShipEffect.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('buyerId');
    else
      $this.buyerId = buyerId;
    if ((seen & 2) === 0)
      throw new MissingFieldException('user1Id');
    else
      $this.user1Id = user1Id;
    if ((seen & 4) === 0)
      throw new MissingFieldException('user2Id');
    else
      $this.user2Id = user2Id;
    if ((seen & 8) === 0)
      throw new MissingFieldException('editedShipValue');
    else
      $this.editedShipValue = editedShipValue;
    if ((seen & 16) === 0)
      throw new MissingFieldException('expiresAt');
    else
      $this.expiresAt = expiresAt;
    return $this;
  }
  ShipEffectsView$ShipEffect.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShipEffect',
    interfaces: []
  };
  ShipEffectsView.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ShipEffectsView',
    interfaces: []
  };
  var ShipEffectsView_instance = null;
  function ShipEffectsView_getInstance() {
    if (ShipEffectsView_instance === null) {
      new ShipEffectsView();
    }
    return ShipEffectsView_instance;
  }
  function BadgeView() {
    BadgeView_instance = this;
  }
  function BadgeView$start$lambda$lambda(closure$guild) {
    return function () {
      if (closure$guild.donationKey == null || 19.99 > closure$guild.donationKey.value) {
        Stuff_getInstance().showPremiumFeatureModal();
        return false;
      }
      return true;
    };
  }
  function BadgeView$start$lambda(it) {
    var tmp$, tmp$_0;
    var premiumAsJson = ensureNotNull((tmp$ = document.getElementById('badge-json')) != null ? tmp$.innerHTML : null);
    println('premiumAsJson: ' + premiumAsJson);
    var $receiver = JSON_0.Companion.nonstrict;
    var guild = $receiver.parse_awif5v$(getOrDefault($receiver.context, getKClass(PremiumKeyView$Guild)), premiumAsJson);
    (Kotlin.isType(tmp$_0 = page.getElementById_61zpoe$('cmn-toggle-1'), HTMLInputElement) ? tmp$_0 : throwCCE()).checked = guild.donationConfig.customBadge;
    LoriDashboard_getInstance().applyBlur_iiwsaa$('#hiddenIfDisabled', '#cmn-toggle-1', BadgeView$start$lambda$lambda(guild));
    return Unit;
  }
  BadgeView.prototype.start = function () {
    document.addEventListener('DOMContentLoaded', BadgeView$start$lambda);
  };
  function BadgeView$prepareSave$lambda(closure$reader, this$BadgeView) {
    return function (it) {
      var tmp$, tmp$_0;
      var imageAsBase64 = closure$reader.result;
      tmp$_0 = typeof (tmp$ = imageAsBase64) === 'string' ? tmp$ : null;
      this$BadgeView.save_pdl1vj$(tmp$_0);
      return Unit;
    };
  }
  BadgeView.prototype.prepareSave = function () {
    var file = page.getElementById_61zpoe$('upload-badge').files[0];
    if (file != null) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = BadgeView$prepareSave$lambda(reader, this);
    }
     else {
      this.save_pdl1vj$(null);
    }
  };
  function BadgeView$save$lambda(closure$base64Image) {
    return function (it) {
      var tmp$;
      it['customBadge'] = (Kotlin.isType(tmp$ = page.getElementById_61zpoe$('cmn-toggle-1'), HTMLInputElement) ? tmp$ : throwCCE()).checked;
      it['badgeImage'] = closure$base64Image;
      return Unit;
    };
  }
  BadgeView.prototype.save_pdl1vj$ = function (base64Image) {
    SaveUtils_getInstance().prepareSave_feck85$('badge', BadgeView$save$lambda(base64Image));
  };
  BadgeView.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BadgeView',
    interfaces: []
  };
  var BadgeView_instance = null;
  function BadgeView_getInstance() {
    if (BadgeView_instance === null) {
      new BadgeView();
    }
    return BadgeView_instance;
  }
  function DailyMultiplierView() {
    DailyMultiplierView_instance = this;
  }
  function DailyMultiplierView$start$lambda$lambda(closure$guild) {
    return function () {
      if (closure$guild.donationKey == null || 59.99 > closure$guild.donationKey.value) {
        Stuff_getInstance().showPremiumFeatureModal();
        return false;
      }
      return true;
    };
  }
  function DailyMultiplierView$start$lambda(it) {
    var tmp$, tmp$_0;
    println('a');
    var premiumAsJson = ensureNotNull((tmp$ = document.getElementById('daily-multiplier-json')) != null ? tmp$.innerHTML : null);
    println('premiumAsJson: ' + premiumAsJson);
    var $receiver = JSON_0.Companion.nonstrict;
    var guild = $receiver.parse_awif5v$(getOrDefault($receiver.context, getKClass(PremiumKeyView$Guild)), premiumAsJson);
    (Kotlin.isType(tmp$_0 = page.getElementById_61zpoe$('cmn-toggle-1'), HTMLInputElement) ? tmp$_0 : throwCCE()).checked = guild.donationConfig.dailyMultiplier;
    LoriDashboard_getInstance().applyBlur_iiwsaa$('#hiddenIfDisabled', '#cmn-toggle-1', DailyMultiplierView$start$lambda$lambda(guild));
    return Unit;
  }
  DailyMultiplierView.prototype.start = function () {
    document.addEventListener('DOMContentLoaded', DailyMultiplierView$start$lambda);
  };
  function DailyMultiplierView$prepareSave$lambda(it) {
    var tmp$;
    it['dailyMultiplier'] = (Kotlin.isType(tmp$ = page.getElementById_61zpoe$('cmn-toggle-1'), HTMLInputElement) ? tmp$ : throwCCE()).checked;
    return Unit;
  }
  DailyMultiplierView.prototype.prepareSave = function () {
    SaveUtils_getInstance().prepareSave_feck85$('daily_multiplier', DailyMultiplierView$prepareSave$lambda);
  };
  DailyMultiplierView.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DailyMultiplierView',
    interfaces: []
  };
  var DailyMultiplierView_instance = null;
  function DailyMultiplierView_getInstance() {
    if (DailyMultiplierView_instance === null) {
      new DailyMultiplierView();
    }
    return DailyMultiplierView_instance;
  }
  function PremiumKeyView() {
    PremiumKeyView_instance = this;
  }
  function PremiumKeyView$start$lambda(this$PremiumKeyView) {
    return function (it) {
      var tmp$;
      var premiumAsJson = ensureNotNull((tmp$ = document.getElementById('premium-json')) != null ? tmp$.innerHTML : null);
      println('premiumAsJson: ' + premiumAsJson);
      var $receiver = JSON_0.Companion.nonstrict;
      var guild = $receiver.parse_awif5v$(getOrDefault($receiver.context, getKClass(PremiumKeyView$Guild)), premiumAsJson);
      this$PremiumKeyView.generateStuff_g6v5ih$(guild);
      return Unit;
    };
  }
  PremiumKeyView.prototype.start = function () {
    document.addEventListener('DOMContentLoaded', PremiumKeyView$start$lambda(this));
  };
  function PremiumKeyView$generateStuff$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Voc\xEA n\xE3o tem nenhuma key ativada neste servidor!');
    return Unit;
  }
  function PremiumKeyView$generateStuff$lambda$lambda$lambda_0(closure$donationKey) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Voc\xEA est\xE1 usando key ' + closure$donationKey.id);
      return Unit;
    };
  }
  function PremiumKeyView$generateStuff$lambda$lambda(closure$donationKey) {
    return function ($receiver) {
      set_style($receiver, 'text-align: center;');
      if (closure$donationKey == null) {
        h1_0($receiver, void 0, PremiumKeyView$generateStuff$lambda$lambda$lambda);
      }
       else {
        h1_0($receiver, void 0, PremiumKeyView$generateStuff$lambda$lambda$lambda_0(closure$donationKey));
      }
      return Unit;
    };
  }
  function PremiumKeyView$generateStuff$lambda$lambda_0($receiver) {
    return Unit;
  }
  function PremiumKeyView$generateStuff$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('Suas Keys');
    return Unit;
  }
  function PremiumKeyView$generateStuff$lambda(closure$guild, this$PremiumKeyView) {
    return function ($receiver) {
      var tmp$;
      set_id($receiver, 'premium-stuff');
      var donationKey = closure$guild.donationKey;
      div($receiver, void 0, PremiumKeyView$generateStuff$lambda$lambda(donationKey));
      hr($receiver, void 0, PremiumKeyView$generateStuff$lambda$lambda_0);
      h1_0($receiver, void 0, PremiumKeyView$generateStuff$lambda$lambda_1);
      tmp$ = ensureNotNull(closure$guild.selfMember.donationKeys).iterator();
      while (tmp$.hasNext()) {
        var donationKey_0 = tmp$.next();
        this$PremiumKeyView.createKeyEntry_n8mksv$($receiver, closure$guild.selfMember, donationKey_0);
      }
      return Unit;
    };
  }
  PremiumKeyView.prototype.generateStuff_g6v5ih$ = function (guild) {
    var premiumContent = page.getElementById_61zpoe$('premium-content');
    clear(premiumContent);
    premiumContent.appendChild(div_0(get_create(document), void 0, PremiumKeyView$generateStuff$lambda(guild, this)));
  };
  function PremiumKeyView$createKeyEntry$lambda$lambda(closure$donationKey, closure$selfMember) {
    return function ($receiver) {
      var tmp$;
      set_style($receiver, 'width: 6%; height: auto; border-radius: 999999px; float: left; position: relative; bottom: 8px;');
      if (closure$donationKey.usesKey != null) {
        $receiver.src = (tmp$ = closure$donationKey.usesKey.iconUrl) != null ? tmp$ : closure$selfMember.effectiveAvatarUrl;
      }
       else {
        $receiver.src = closure$selfMember.effectiveAvatarUrl;
      }
      return Unit;
    };
  }
  function PremiumKeyView$createKeyEntry$lambda$lambda$lambda$lambda$lambda(closure$donationKey) {
    return function ($receiver) {
      set_style($receiver, 'font-family: Whitney,Helvetica Neue,Helvetica,Arial,sans-serif;');
      $receiver.unaryPlus_pdl1vz$('Key ' + closure$donationKey.id);
      return Unit;
    };
  }
  function PremiumKeyView$createKeyEntry$lambda$lambda$lambda$lambda$lambda_0(closure$donationKey) {
    return function ($receiver) {
      if (closure$donationKey.usesKey != null) {
        $receiver.unaryPlus_pdl1vz$('R' + '$' + closure$donationKey.value + ' \u2022 Ativado em ' + closure$donationKey.usesKey.name + ' \u2022 Expirar\xE1 em ' + DateUtils_getInstance().formatDateDiff_lu1900$((new Date()).getTime(), closure$donationKey.expiresAt.toNumber()));
      }
       else {
        $receiver.unaryPlus_pdl1vz$('R' + '$' + closure$donationKey.value + ' \u2022 Expirar\xE1 em ' + DateUtils_getInstance().formatDateDiff_lu1900$((new Date()).getTime(), closure$donationKey.expiresAt.toNumber()));
      }
      return Unit;
    };
  }
  function PremiumKeyView$createKeyEntry$lambda$lambda$lambda$lambda(closure$donationKey) {
    return function ($receiver) {
      set_style($receiver, 'margin-left: 10px; margin-right: 10;');
      div($receiver, 'amino-title entry-title', PremiumKeyView$createKeyEntry$lambda$lambda$lambda$lambda$lambda(closure$donationKey));
      div($receiver, 'amino-title toggleSubText', PremiumKeyView$createKeyEntry$lambda$lambda$lambda$lambda$lambda_0(closure$donationKey));
      return Unit;
    };
  }
  function PremiumKeyView$createKeyEntry$lambda$lambda$lambda(closure$donationKey) {
    return function ($receiver) {
      div($receiver, void 0, PremiumKeyView$createKeyEntry$lambda$lambda$lambda$lambda(closure$donationKey));
      return Unit;
    };
  }
  function PremiumKeyView$createKeyEntry$lambda$lambda$lambda$lambda$lambda$lambda(closure$donationKey) {
    return function (it) {
      it['keyId'] = closure$donationKey.id;
      return Unit;
    };
  }
  function PremiumKeyView$createKeyEntry$lambda$lambda$lambda$lambda$lambda$lambda_0(this$PremiumKeyView) {
    return function (it) {
      var $receiver = JSON_0.Companion.nonstrict;
      var str = it.body;
      var guild = $receiver.parse_awif5v$(getOrDefault($receiver.context, getKClass(PremiumKeyView$Guild)), str);
      this$PremiumKeyView.generateStuff_g6v5ih$(guild);
      return Unit;
    };
  }
  function PremiumKeyView$createKeyEntry$lambda$lambda$lambda$lambda$lambda_1(closure$donationKey, this$PremiumKeyView) {
    return function (it) {
      println('Saving!');
      SaveUtils_getInstance().prepareSave_feck85$('premium', PremiumKeyView$createKeyEntry$lambda$lambda$lambda$lambda$lambda$lambda(closure$donationKey), void 0, PremiumKeyView$createKeyEntry$lambda$lambda$lambda$lambda$lambda$lambda_0(this$PremiumKeyView));
      return Unit;
    };
  }
  function PremiumKeyView$createKeyEntry$lambda$lambda$lambda$lambda_0(closure$donationKey, this$PremiumKeyView) {
    return function ($receiver) {
      set_onClickFunction($receiver, PremiumKeyView$createKeyEntry$lambda$lambda$lambda$lambda$lambda_1(closure$donationKey, this$PremiumKeyView));
      $receiver.unaryPlus_pdl1vz$('Ativar');
      return Unit;
    };
  }
  function PremiumKeyView$createKeyEntry$lambda$lambda$lambda_0(closure$donationKey, this$PremiumKeyView) {
    return function ($receiver) {
      button($receiver, void 0, void 0, void 0, void 0, 'button-discord button-discord-edit pure-button edit-timer-button', PremiumKeyView$createKeyEntry$lambda$lambda$lambda$lambda_0(closure$donationKey, this$PremiumKeyView));
      return Unit;
    };
  }
  function PremiumKeyView$createKeyEntry$lambda$lambda_0(closure$donationKey, this$PremiumKeyView) {
    return function ($receiver) {
      div($receiver, 'pure-u-1 pure-u-md-18-24', PremiumKeyView$createKeyEntry$lambda$lambda$lambda(closure$donationKey));
      div($receiver, 'pure-u-1 pure-u-md-6-24 vertically-centered-right-aligned', PremiumKeyView$createKeyEntry$lambda$lambda$lambda_0(closure$donationKey, this$PremiumKeyView));
      return Unit;
    };
  }
  function PremiumKeyView$createKeyEntry$lambda(closure$donationKey, closure$selfMember, this$PremiumKeyView) {
    return function ($receiver) {
      img($receiver, void 0, void 0, 'amino-small-image', PremiumKeyView$createKeyEntry$lambda$lambda(closure$donationKey, closure$selfMember));
      div($receiver, 'pure-g', PremiumKeyView$createKeyEntry$lambda$lambda_0(closure$donationKey, this$PremiumKeyView));
      return Unit;
    };
  }
  PremiumKeyView.prototype.createKeyEntry_n8mksv$ = function ($receiver, selfMember, donationKey) {
    div($receiver, 'discord-generic-entry timer-entry', PremiumKeyView$createKeyEntry$lambda(donationKey, selfMember, this));
  };
  function PremiumKeyView$MiniGuild(name, iconUrl) {
    PremiumKeyView$MiniGuild$Companion_getInstance();
    if (iconUrl === void 0)
      iconUrl = null;
    this.name = name;
    this.iconUrl = iconUrl;
  }
  function PremiumKeyView$MiniGuild$Companion() {
    PremiumKeyView$MiniGuild$Companion_instance = this;
  }
  PremiumKeyView$MiniGuild$Companion.prototype.serializer = function () {
    return PremiumKeyView$MiniGuild$$serializer_getInstance();
  };
  PremiumKeyView$MiniGuild$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PremiumKeyView$MiniGuild$Companion_instance = null;
  function PremiumKeyView$MiniGuild$Companion_getInstance() {
    if (PremiumKeyView$MiniGuild$Companion_instance === null) {
      new PremiumKeyView$MiniGuild$Companion();
    }
    return PremiumKeyView$MiniGuild$Companion_instance;
  }
  function PremiumKeyView$MiniGuild$$serializer() {
    this.descriptor_edvaw9$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.views.dashboard.PremiumKeyView.MiniGuild');
    this.descriptor.addElement_ivxn3r$('name');
    this.descriptor.addElement_ivxn3r$('iconUrl');
    PremiumKeyView$MiniGuild$$serializer_instance = this;
  }
  Object.defineProperty(PremiumKeyView$MiniGuild$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_edvaw9$_0;
    }
  });
  PremiumKeyView$MiniGuild$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.name);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 1, internal.StringSerializer, obj.iconUrl);
    output.endStructure_qatsm0$(this.descriptor);
  };
  PremiumKeyView$MiniGuild$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
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
          local1 = (bitMask0 & 2) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 1, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 1, internal.StringSerializer, local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return PremiumKeyView$PremiumKeyView$MiniGuild_init(bitMask0, local0, local1, null);
  };
  PremiumKeyView$MiniGuild$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var PremiumKeyView$MiniGuild$$serializer_instance = null;
  function PremiumKeyView$MiniGuild$$serializer_getInstance() {
    if (PremiumKeyView$MiniGuild$$serializer_instance === null) {
      new PremiumKeyView$MiniGuild$$serializer();
    }
    return PremiumKeyView$MiniGuild$$serializer_instance;
  }
  function PremiumKeyView$PremiumKeyView$MiniGuild_init(seen, name, iconUrl, serializationConstructorMarker) {
    var $this = Object.create(PremiumKeyView$MiniGuild.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('name');
    else
      $this.name = name;
    if ((seen & 2) === 0)
      $this.iconUrl = null;
    else
      $this.iconUrl = iconUrl;
    return $this;
  }
  PremiumKeyView$MiniGuild.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MiniGuild',
    interfaces: []
  };
  function PremiumKeyView$Guild(name, selfMember, donationKey, donationConfig, reactionRoleConfigs, roles) {
    PremiumKeyView$Guild$Companion_getInstance();
    if (donationKey === void 0)
      donationKey = null;
    this.name = name;
    this.selfMember = selfMember;
    this.donationKey = donationKey;
    this.donationConfig = donationConfig;
    this.reactionRoleConfigs = reactionRoleConfigs;
    this.roles = roles;
  }
  function PremiumKeyView$Guild$Companion() {
    PremiumKeyView$Guild$Companion_instance = this;
  }
  PremiumKeyView$Guild$Companion.prototype.serializer = function () {
    return PremiumKeyView$Guild$$serializer_getInstance();
  };
  PremiumKeyView$Guild$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PremiumKeyView$Guild$Companion_instance = null;
  function PremiumKeyView$Guild$Companion_getInstance() {
    if (PremiumKeyView$Guild$Companion_instance === null) {
      new PremiumKeyView$Guild$Companion();
    }
    return PremiumKeyView$Guild$Companion_instance;
  }
  function PremiumKeyView$Guild$$serializer() {
    this.descriptor_2mq6ky$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.views.dashboard.PremiumKeyView.Guild');
    this.descriptor.addElement_ivxn3r$('name');
    this.descriptor.addElement_ivxn3r$('selfMember');
    this.descriptor.addElement_ivxn3r$('donationKey');
    this.descriptor.addElement_ivxn3r$('donationConfig');
    this.descriptor.addElement_ivxn3r$('reactionRoleConfigs');
    this.descriptor.addElement_ivxn3r$('roles');
    PremiumKeyView$Guild$$serializer_instance = this;
  }
  Object.defineProperty(PremiumKeyView$Guild$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_2mq6ky$_0;
    }
  });
  PremiumKeyView$Guild$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.name);
    output.encodeSerializableElement_blecud$(this.descriptor, 1, PremiumKeyView$SelfMember$$serializer_getInstance(), obj.selfMember);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 2, PremiumKeyView$DonationKey$$serializer_getInstance(), obj.donationKey);
    output.encodeSerializableElement_blecud$(this.descriptor, 3, PremiumKeyView$DonationConfig$$serializer_getInstance(), obj.donationConfig);
    output.encodeSerializableElement_blecud$(this.descriptor, 4, new ArrayListSerializer(PremiumKeyView$ReactionOption$$serializer_getInstance()), obj.reactionRoleConfigs);
    output.encodeSerializableElement_blecud$(this.descriptor, 5, new ReferenceArraySerializer(Kotlin.getKClass(PremiumKeyView$Role), PremiumKeyView$Role$$serializer_getInstance()), obj.roles);
    output.endStructure_qatsm0$(this.descriptor);
  };
  PremiumKeyView$Guild$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
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
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, PremiumKeyView$SelfMember$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, PremiumKeyView$SelfMember$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 2, PremiumKeyView$DonationKey$$serializer_getInstance()) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 2, PremiumKeyView$DonationKey$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = (bitMask0 & 8) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 3, PremiumKeyView$DonationConfig$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 3, PremiumKeyView$DonationConfig$$serializer_getInstance(), local3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = (bitMask0 & 16) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 4, new ArrayListSerializer(PremiumKeyView$ReactionOption$$serializer_getInstance())) : input.updateSerializableElement_ehubvl$(this.descriptor, 4, new ArrayListSerializer(PremiumKeyView$ReactionOption$$serializer_getInstance()), local4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case 5:
          local5 = (bitMask0 & 32) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 5, new ReferenceArraySerializer(Kotlin.getKClass(PremiumKeyView$Role), PremiumKeyView$Role$$serializer_getInstance())) : input.updateSerializableElement_ehubvl$(this.descriptor, 5, new ReferenceArraySerializer(Kotlin.getKClass(PremiumKeyView$Role), PremiumKeyView$Role$$serializer_getInstance()), local5);
          bitMask0 |= 32;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return PremiumKeyView$PremiumKeyView$Guild_init(bitMask0, local0, local1, local2, local3, local4, local5, null);
  };
  PremiumKeyView$Guild$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var PremiumKeyView$Guild$$serializer_instance = null;
  function PremiumKeyView$Guild$$serializer_getInstance() {
    if (PremiumKeyView$Guild$$serializer_instance === null) {
      new PremiumKeyView$Guild$$serializer();
    }
    return PremiumKeyView$Guild$$serializer_instance;
  }
  function PremiumKeyView$PremiumKeyView$Guild_init(seen, name, selfMember, donationKey, donationConfig, reactionRoleConfigs, roles, serializationConstructorMarker) {
    var $this = Object.create(PremiumKeyView$Guild.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('name');
    else
      $this.name = name;
    if ((seen & 2) === 0)
      throw new MissingFieldException('selfMember');
    else
      $this.selfMember = selfMember;
    if ((seen & 4) === 0)
      $this.donationKey = null;
    else
      $this.donationKey = donationKey;
    if ((seen & 8) === 0)
      throw new MissingFieldException('donationConfig');
    else
      $this.donationConfig = donationConfig;
    if ((seen & 16) === 0)
      throw new MissingFieldException('reactionRoleConfigs');
    else
      $this.reactionRoleConfigs = reactionRoleConfigs;
    if ((seen & 32) === 0)
      throw new MissingFieldException('roles');
    else
      $this.roles = roles;
    return $this;
  }
  PremiumKeyView$Guild.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Guild',
    interfaces: []
  };
  function PremiumKeyView$SelfMember(id, name, discriminator, effectiveAvatarUrl, donationKeys) {
    PremiumKeyView$SelfMember$Companion_getInstance();
    if (donationKeys === void 0)
      donationKeys = null;
    this.id = id;
    this.name = name;
    this.discriminator = discriminator;
    this.effectiveAvatarUrl = effectiveAvatarUrl;
    this.donationKeys = donationKeys;
  }
  function PremiumKeyView$SelfMember$Companion() {
    PremiumKeyView$SelfMember$Companion_instance = this;
  }
  PremiumKeyView$SelfMember$Companion.prototype.serializer = function () {
    return PremiumKeyView$SelfMember$$serializer_getInstance();
  };
  PremiumKeyView$SelfMember$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PremiumKeyView$SelfMember$Companion_instance = null;
  function PremiumKeyView$SelfMember$Companion_getInstance() {
    if (PremiumKeyView$SelfMember$Companion_instance === null) {
      new PremiumKeyView$SelfMember$Companion();
    }
    return PremiumKeyView$SelfMember$Companion_instance;
  }
  function PremiumKeyView$SelfMember$$serializer() {
    this.descriptor_s52rh1$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.views.dashboard.PremiumKeyView.SelfMember');
    this.descriptor.addElement_ivxn3r$('id');
    this.descriptor.addElement_ivxn3r$('name');
    this.descriptor.addElement_ivxn3r$('discriminator');
    this.descriptor.addElement_ivxn3r$('effectiveAvatarUrl');
    this.descriptor.addElement_ivxn3r$('donationKeys');
    PremiumKeyView$SelfMember$$serializer_instance = this;
  }
  Object.defineProperty(PremiumKeyView$SelfMember$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_s52rh1$_0;
    }
  });
  PremiumKeyView$SelfMember$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.id);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.name);
    output.encodeStringElement_bgm7zs$(this.descriptor, 2, obj.discriminator);
    output.encodeStringElement_bgm7zs$(this.descriptor, 3, obj.effectiveAvatarUrl);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 4, new ArrayListSerializer(PremiumKeyView$DonationKey$$serializer_getInstance()), obj.donationKeys);
    output.endStructure_qatsm0$(this.descriptor);
  };
  PremiumKeyView$SelfMember$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4;
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
          local4 = (bitMask0 & 16) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 4, new ArrayListSerializer(PremiumKeyView$DonationKey$$serializer_getInstance())) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 4, new ArrayListSerializer(PremiumKeyView$DonationKey$$serializer_getInstance()), local4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return PremiumKeyView$PremiumKeyView$SelfMember_init(bitMask0, local0, local1, local2, local3, local4, null);
  };
  PremiumKeyView$SelfMember$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var PremiumKeyView$SelfMember$$serializer_instance = null;
  function PremiumKeyView$SelfMember$$serializer_getInstance() {
    if (PremiumKeyView$SelfMember$$serializer_instance === null) {
      new PremiumKeyView$SelfMember$$serializer();
    }
    return PremiumKeyView$SelfMember$$serializer_instance;
  }
  function PremiumKeyView$PremiumKeyView$SelfMember_init(seen, id, name, discriminator, effectiveAvatarUrl, donationKeys, serializationConstructorMarker) {
    var $this = Object.create(PremiumKeyView$SelfMember.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('id');
    else
      $this.id = id;
    if ((seen & 2) === 0)
      throw new MissingFieldException('name');
    else
      $this.name = name;
    if ((seen & 4) === 0)
      throw new MissingFieldException('discriminator');
    else
      $this.discriminator = discriminator;
    if ((seen & 8) === 0)
      throw new MissingFieldException('effectiveAvatarUrl');
    else
      $this.effectiveAvatarUrl = effectiveAvatarUrl;
    if ((seen & 16) === 0)
      $this.donationKeys = null;
    else
      $this.donationKeys = donationKeys;
    return $this;
  }
  PremiumKeyView$SelfMember.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SelfMember',
    interfaces: []
  };
  function PremiumKeyView$DonationKey(id, value, user, expiresAt, usesKey) {
    PremiumKeyView$DonationKey$Companion_getInstance();
    if (user === void 0)
      user = null;
    if (usesKey === void 0)
      usesKey = null;
    this.id = id;
    this.value = value;
    this.user = user;
    this.expiresAt = expiresAt;
    this.usesKey = usesKey;
  }
  function PremiumKeyView$DonationKey$Companion() {
    PremiumKeyView$DonationKey$Companion_instance = this;
  }
  PremiumKeyView$DonationKey$Companion.prototype.serializer = function () {
    return PremiumKeyView$DonationKey$$serializer_getInstance();
  };
  PremiumKeyView$DonationKey$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PremiumKeyView$DonationKey$Companion_instance = null;
  function PremiumKeyView$DonationKey$Companion_getInstance() {
    if (PremiumKeyView$DonationKey$Companion_instance === null) {
      new PremiumKeyView$DonationKey$Companion();
    }
    return PremiumKeyView$DonationKey$Companion_instance;
  }
  function PremiumKeyView$DonationKey$$serializer() {
    this.descriptor_1rjrjc$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.views.dashboard.PremiumKeyView.DonationKey');
    this.descriptor.addElement_ivxn3r$('id');
    this.descriptor.addElement_ivxn3r$('value');
    this.descriptor.addElement_ivxn3r$('user');
    this.descriptor.addElement_ivxn3r$('expiresAt');
    this.descriptor.addElement_ivxn3r$('usesKey');
    PremiumKeyView$DonationKey$$serializer_instance = this;
  }
  Object.defineProperty(PremiumKeyView$DonationKey$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_1rjrjc$_0;
    }
  });
  PremiumKeyView$DonationKey$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.id);
    output.encodeDoubleElement_imzr5k$(this.descriptor, 1, obj.value);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 2, PremiumKeyView$SelfMember$$serializer_getInstance(), obj.user);
    output.encodeLongElement_a3zgoj$(this.descriptor, 3, obj.expiresAt);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 4, PremiumKeyView$MiniGuild$$serializer_getInstance(), obj.usesKey);
    output.endStructure_qatsm0$(this.descriptor);
  };
  PremiumKeyView$DonationKey$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4;
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
          local1 = input.decodeDoubleElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 2, PremiumKeyView$SelfMember$$serializer_getInstance()) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 2, PremiumKeyView$SelfMember$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = input.decodeLongElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = (bitMask0 & 16) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 4, PremiumKeyView$MiniGuild$$serializer_getInstance()) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 4, PremiumKeyView$MiniGuild$$serializer_getInstance(), local4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return PremiumKeyView$PremiumKeyView$DonationKey_init(bitMask0, local0, local1, local2, local3, local4, null);
  };
  PremiumKeyView$DonationKey$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var PremiumKeyView$DonationKey$$serializer_instance = null;
  function PremiumKeyView$DonationKey$$serializer_getInstance() {
    if (PremiumKeyView$DonationKey$$serializer_instance === null) {
      new PremiumKeyView$DonationKey$$serializer();
    }
    return PremiumKeyView$DonationKey$$serializer_instance;
  }
  function PremiumKeyView$PremiumKeyView$DonationKey_init(seen, id, value, user, expiresAt, usesKey, serializationConstructorMarker) {
    var $this = Object.create(PremiumKeyView$DonationKey.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('id');
    else
      $this.id = id;
    if ((seen & 2) === 0)
      throw new MissingFieldException('value');
    else
      $this.value = value;
    if ((seen & 4) === 0)
      $this.user = null;
    else
      $this.user = user;
    if ((seen & 8) === 0)
      throw new MissingFieldException('expiresAt');
    else
      $this.expiresAt = expiresAt;
    if ((seen & 16) === 0)
      $this.usesKey = null;
    else
      $this.usesKey = usesKey;
    return $this;
  }
  PremiumKeyView$DonationKey.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DonationKey',
    interfaces: []
  };
  function PremiumKeyView$DonationConfig(customBadge, dailyMultiplier) {
    PremiumKeyView$DonationConfig$Companion_getInstance();
    this.customBadge = customBadge;
    this.dailyMultiplier = dailyMultiplier;
  }
  function PremiumKeyView$DonationConfig$Companion() {
    PremiumKeyView$DonationConfig$Companion_instance = this;
  }
  PremiumKeyView$DonationConfig$Companion.prototype.serializer = function () {
    return PremiumKeyView$DonationConfig$$serializer_getInstance();
  };
  PremiumKeyView$DonationConfig$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PremiumKeyView$DonationConfig$Companion_instance = null;
  function PremiumKeyView$DonationConfig$Companion_getInstance() {
    if (PremiumKeyView$DonationConfig$Companion_instance === null) {
      new PremiumKeyView$DonationConfig$Companion();
    }
    return PremiumKeyView$DonationConfig$Companion_instance;
  }
  function PremiumKeyView$DonationConfig$$serializer() {
    this.descriptor_z6vyf7$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.views.dashboard.PremiumKeyView.DonationConfig');
    this.descriptor.addElement_ivxn3r$('customBadge');
    this.descriptor.addElement_ivxn3r$('dailyMultiplier');
    PremiumKeyView$DonationConfig$$serializer_instance = this;
  }
  Object.defineProperty(PremiumKeyView$DonationConfig$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_z6vyf7$_0;
    }
  });
  PremiumKeyView$DonationConfig$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeBooleanElement_w1b0nl$(this.descriptor, 0, obj.customBadge);
    output.encodeBooleanElement_w1b0nl$(this.descriptor, 1, obj.dailyMultiplier);
    output.endStructure_qatsm0$(this.descriptor);
  };
  PremiumKeyView$DonationConfig$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
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
          local0 = input.decodeBooleanElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeBooleanElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return PremiumKeyView$PremiumKeyView$DonationConfig_init(bitMask0, local0, local1, null);
  };
  PremiumKeyView$DonationConfig$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var PremiumKeyView$DonationConfig$$serializer_instance = null;
  function PremiumKeyView$DonationConfig$$serializer_getInstance() {
    if (PremiumKeyView$DonationConfig$$serializer_instance === null) {
      new PremiumKeyView$DonationConfig$$serializer();
    }
    return PremiumKeyView$DonationConfig$$serializer_instance;
  }
  function PremiumKeyView$PremiumKeyView$DonationConfig_init(seen, customBadge, dailyMultiplier, serializationConstructorMarker) {
    var $this = Object.create(PremiumKeyView$DonationConfig.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('customBadge');
    else
      $this.customBadge = customBadge;
    if ((seen & 2) === 0)
      throw new MissingFieldException('dailyMultiplier');
    else
      $this.dailyMultiplier = dailyMultiplier;
    return $this;
  }
  PremiumKeyView$DonationConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DonationConfig',
    interfaces: []
  };
  function PremiumKeyView$ReactionOption(textChannelId, messageId, reaction, locks, roleIds) {
    PremiumKeyView$ReactionOption$Companion_getInstance();
    this.textChannelId = textChannelId;
    this.messageId = messageId;
    this.reaction = reaction;
    this.locks = locks;
    this.roleIds = roleIds;
  }
  function PremiumKeyView$ReactionOption$Companion() {
    PremiumKeyView$ReactionOption$Companion_instance = this;
  }
  PremiumKeyView$ReactionOption$Companion.prototype.serializer = function () {
    return PremiumKeyView$ReactionOption$$serializer_getInstance();
  };
  PremiumKeyView$ReactionOption$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PremiumKeyView$ReactionOption$Companion_instance = null;
  function PremiumKeyView$ReactionOption$Companion_getInstance() {
    if (PremiumKeyView$ReactionOption$Companion_instance === null) {
      new PremiumKeyView$ReactionOption$Companion();
    }
    return PremiumKeyView$ReactionOption$Companion_instance;
  }
  function PremiumKeyView$ReactionOption$$serializer() {
    this.descriptor_8b4hvx$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.views.dashboard.PremiumKeyView.ReactionOption');
    this.descriptor.addElement_ivxn3r$('textChannelId');
    this.descriptor.addElement_ivxn3r$('messageId');
    this.descriptor.addElement_ivxn3r$('reaction');
    this.descriptor.addElement_ivxn3r$('locks');
    this.descriptor.addElement_ivxn3r$('roleIds');
    PremiumKeyView$ReactionOption$$serializer_instance = this;
  }
  Object.defineProperty(PremiumKeyView$ReactionOption$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_8b4hvx$_0;
    }
  });
  PremiumKeyView$ReactionOption$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.textChannelId);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.messageId);
    output.encodeStringElement_bgm7zs$(this.descriptor, 2, obj.reaction);
    output.encodeSerializableElement_blecud$(this.descriptor, 3, new ReferenceArraySerializer(Kotlin.getKClass(String_0), internal.StringSerializer), obj.locks);
    output.encodeSerializableElement_blecud$(this.descriptor, 4, new ReferenceArraySerializer(Kotlin.getKClass(String_0), internal.StringSerializer), obj.roleIds);
    output.endStructure_qatsm0$(this.descriptor);
  };
  PremiumKeyView$ReactionOption$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4;
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
          local3 = (bitMask0 & 8) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 3, new ReferenceArraySerializer(Kotlin.getKClass(String_0), internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 3, new ReferenceArraySerializer(Kotlin.getKClass(String_0), internal.StringSerializer), local3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = (bitMask0 & 16) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 4, new ReferenceArraySerializer(Kotlin.getKClass(String_0), internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 4, new ReferenceArraySerializer(Kotlin.getKClass(String_0), internal.StringSerializer), local4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return PremiumKeyView$PremiumKeyView$ReactionOption_init(bitMask0, local0, local1, local2, local3, local4, null);
  };
  PremiumKeyView$ReactionOption$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var PremiumKeyView$ReactionOption$$serializer_instance = null;
  function PremiumKeyView$ReactionOption$$serializer_getInstance() {
    if (PremiumKeyView$ReactionOption$$serializer_instance === null) {
      new PremiumKeyView$ReactionOption$$serializer();
    }
    return PremiumKeyView$ReactionOption$$serializer_instance;
  }
  function PremiumKeyView$PremiumKeyView$ReactionOption_init(seen, textChannelId, messageId, reaction, locks, roleIds, serializationConstructorMarker) {
    var $this = Object.create(PremiumKeyView$ReactionOption.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('textChannelId');
    else
      $this.textChannelId = textChannelId;
    if ((seen & 2) === 0)
      throw new MissingFieldException('messageId');
    else
      $this.messageId = messageId;
    if ((seen & 4) === 0)
      throw new MissingFieldException('reaction');
    else
      $this.reaction = reaction;
    if ((seen & 8) === 0)
      throw new MissingFieldException('locks');
    else
      $this.locks = locks;
    if ((seen & 16) === 0)
      throw new MissingFieldException('roleIds');
    else
      $this.roleIds = roleIds;
    return $this;
  }
  PremiumKeyView$ReactionOption.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReactionOption',
    interfaces: []
  };
  function PremiumKeyView$DiscordMessage(id, channelId, content, reactions) {
    PremiumKeyView$DiscordMessage$Companion_getInstance();
    this.id = id;
    this.channelId = channelId;
    this.content = content;
    this.reactions = reactions;
  }
  function PremiumKeyView$DiscordMessage$Companion() {
    PremiumKeyView$DiscordMessage$Companion_instance = this;
  }
  PremiumKeyView$DiscordMessage$Companion.prototype.serializer = function () {
    return PremiumKeyView$DiscordMessage$$serializer_getInstance();
  };
  PremiumKeyView$DiscordMessage$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PremiumKeyView$DiscordMessage$Companion_instance = null;
  function PremiumKeyView$DiscordMessage$Companion_getInstance() {
    if (PremiumKeyView$DiscordMessage$Companion_instance === null) {
      new PremiumKeyView$DiscordMessage$Companion();
    }
    return PremiumKeyView$DiscordMessage$Companion_instance;
  }
  function PremiumKeyView$DiscordMessage$$serializer() {
    this.descriptor_4iywui$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.views.dashboard.PremiumKeyView.DiscordMessage');
    this.descriptor.addElement_ivxn3r$('id');
    this.descriptor.addElement_ivxn3r$('channelId');
    this.descriptor.addElement_ivxn3r$('content');
    this.descriptor.addElement_ivxn3r$('reactions');
    PremiumKeyView$DiscordMessage$$serializer_instance = this;
  }
  Object.defineProperty(PremiumKeyView$DiscordMessage$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_4iywui$_0;
    }
  });
  PremiumKeyView$DiscordMessage$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.id);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.channelId);
    output.encodeStringElement_bgm7zs$(this.descriptor, 2, obj.content);
    output.encodeSerializableElement_blecud$(this.descriptor, 3, new ReferenceArraySerializer(Kotlin.getKClass(PremiumKeyView$DiscordReaction), PremiumKeyView$DiscordReaction$$serializer_getInstance()), obj.reactions);
    output.endStructure_qatsm0$(this.descriptor);
  };
  PremiumKeyView$DiscordMessage$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
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
          local3 = (bitMask0 & 8) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 3, new ReferenceArraySerializer(Kotlin.getKClass(PremiumKeyView$DiscordReaction), PremiumKeyView$DiscordReaction$$serializer_getInstance())) : input.updateSerializableElement_ehubvl$(this.descriptor, 3, new ReferenceArraySerializer(Kotlin.getKClass(PremiumKeyView$DiscordReaction), PremiumKeyView$DiscordReaction$$serializer_getInstance()), local3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return PremiumKeyView$PremiumKeyView$DiscordMessage_init(bitMask0, local0, local1, local2, local3, null);
  };
  PremiumKeyView$DiscordMessage$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var PremiumKeyView$DiscordMessage$$serializer_instance = null;
  function PremiumKeyView$DiscordMessage$$serializer_getInstance() {
    if (PremiumKeyView$DiscordMessage$$serializer_instance === null) {
      new PremiumKeyView$DiscordMessage$$serializer();
    }
    return PremiumKeyView$DiscordMessage$$serializer_instance;
  }
  function PremiumKeyView$PremiumKeyView$DiscordMessage_init(seen, id, channelId, content, reactions, serializationConstructorMarker) {
    var $this = Object.create(PremiumKeyView$DiscordMessage.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('id');
    else
      $this.id = id;
    if ((seen & 2) === 0)
      throw new MissingFieldException('channelId');
    else
      $this.channelId = channelId;
    if ((seen & 4) === 0)
      throw new MissingFieldException('content');
    else
      $this.content = content;
    if ((seen & 8) === 0)
      throw new MissingFieldException('reactions');
    else
      $this.reactions = reactions;
    return $this;
  }
  PremiumKeyView$DiscordMessage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DiscordMessage',
    interfaces: []
  };
  function PremiumKeyView$DiscordReaction(isDiscordEmote, name, id) {
    PremiumKeyView$DiscordReaction$Companion_getInstance();
    if (id === void 0)
      id = null;
    this.isDiscordEmote = isDiscordEmote;
    this.name = name;
    this.id = id;
  }
  function PremiumKeyView$DiscordReaction$Companion() {
    PremiumKeyView$DiscordReaction$Companion_instance = this;
  }
  PremiumKeyView$DiscordReaction$Companion.prototype.serializer = function () {
    return PremiumKeyView$DiscordReaction$$serializer_getInstance();
  };
  PremiumKeyView$DiscordReaction$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PremiumKeyView$DiscordReaction$Companion_instance = null;
  function PremiumKeyView$DiscordReaction$Companion_getInstance() {
    if (PremiumKeyView$DiscordReaction$Companion_instance === null) {
      new PremiumKeyView$DiscordReaction$Companion();
    }
    return PremiumKeyView$DiscordReaction$Companion_instance;
  }
  function PremiumKeyView$DiscordReaction$$serializer() {
    this.descriptor_83eqc0$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.views.dashboard.PremiumKeyView.DiscordReaction');
    this.descriptor.addElement_ivxn3r$('isDiscordEmote');
    this.descriptor.addElement_ivxn3r$('name');
    this.descriptor.addElement_ivxn3r$('id');
    PremiumKeyView$DiscordReaction$$serializer_instance = this;
  }
  Object.defineProperty(PremiumKeyView$DiscordReaction$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_83eqc0$_0;
    }
  });
  PremiumKeyView$DiscordReaction$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeBooleanElement_w1b0nl$(this.descriptor, 0, obj.isDiscordEmote);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.name);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 2, internal.StringSerializer, obj.id);
    output.endStructure_qatsm0$(this.descriptor);
  };
  PremiumKeyView$DiscordReaction$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
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
          local0 = input.decodeBooleanElement_3zr2iy$(this.descriptor, 0);
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
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return PremiumKeyView$PremiumKeyView$DiscordReaction_init(bitMask0, local0, local1, local2, null);
  };
  PremiumKeyView$DiscordReaction$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var PremiumKeyView$DiscordReaction$$serializer_instance = null;
  function PremiumKeyView$DiscordReaction$$serializer_getInstance() {
    if (PremiumKeyView$DiscordReaction$$serializer_instance === null) {
      new PremiumKeyView$DiscordReaction$$serializer();
    }
    return PremiumKeyView$DiscordReaction$$serializer_instance;
  }
  function PremiumKeyView$PremiumKeyView$DiscordReaction_init(seen, isDiscordEmote, name, id, serializationConstructorMarker) {
    var $this = Object.create(PremiumKeyView$DiscordReaction.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('isDiscordEmote');
    else
      $this.isDiscordEmote = isDiscordEmote;
    if ((seen & 2) === 0)
      throw new MissingFieldException('name');
    else
      $this.name = name;
    if ((seen & 4) === 0)
      $this.id = null;
    else
      $this.id = id;
    return $this;
  }
  PremiumKeyView$DiscordReaction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DiscordReaction',
    interfaces: []
  };
  function PremiumKeyView$Role(id, name, color) {
    PremiumKeyView$Role$Companion_getInstance();
    this.id = id;
    this.name = name;
    this.color = color;
  }
  function PremiumKeyView$Role$Companion() {
    PremiumKeyView$Role$Companion_instance = this;
  }
  PremiumKeyView$Role$Companion.prototype.serializer = function () {
    return PremiumKeyView$Role$$serializer_getInstance();
  };
  PremiumKeyView$Role$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PremiumKeyView$Role$Companion_instance = null;
  function PremiumKeyView$Role$Companion_getInstance() {
    if (PremiumKeyView$Role$Companion_instance === null) {
      new PremiumKeyView$Role$Companion();
    }
    return PremiumKeyView$Role$Companion_instance;
  }
  function PremiumKeyView$Role$$serializer() {
    this.descriptor_ccro91$_0 = new SerialClassDescImpl('net.perfectdreams.spicymorenitta.views.dashboard.PremiumKeyView.Role');
    this.descriptor.addElement_ivxn3r$('id');
    this.descriptor.addElement_ivxn3r$('name');
    this.descriptor.addElement_ivxn3r$('color');
    PremiumKeyView$Role$$serializer_instance = this;
  }
  Object.defineProperty(PremiumKeyView$Role$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_ccro91$_0;
    }
  });
  PremiumKeyView$Role$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.id);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.name);
    output.encodeIntElement_4wpqag$(this.descriptor, 2, obj.color);
    output.endStructure_qatsm0$(this.descriptor);
  };
  PremiumKeyView$Role$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
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
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeIntElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return PremiumKeyView$PremiumKeyView$Role_init(bitMask0, local0, local1, local2, null);
  };
  PremiumKeyView$Role$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var PremiumKeyView$Role$$serializer_instance = null;
  function PremiumKeyView$Role$$serializer_getInstance() {
    if (PremiumKeyView$Role$$serializer_instance === null) {
      new PremiumKeyView$Role$$serializer();
    }
    return PremiumKeyView$Role$$serializer_instance;
  }
  function PremiumKeyView$PremiumKeyView$Role_init(seen, id, name, color, serializationConstructorMarker) {
    var $this = Object.create(PremiumKeyView$Role.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('id');
    else
      $this.id = id;
    if ((seen & 2) === 0)
      throw new MissingFieldException('name');
    else
      $this.name = name;
    if ((seen & 4) === 0)
      throw new MissingFieldException('color');
    else
      $this.color = color;
    return $this;
  }
  PremiumKeyView$Role.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Role',
    interfaces: []
  };
  PremiumKeyView.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PremiumKeyView',
    interfaces: []
  };
  var PremiumKeyView_instance = null;
  function PremiumKeyView_getInstance() {
    if (PremiumKeyView_instance === null) {
      new PremiumKeyView();
    }
    return PremiumKeyView_instance;
  }
  function ReactionRoleView() {
    ReactionRoleView_instance = this;
    this.reactionEntries_h0rtiy$_0 = lazy(ReactionRoleView$reactionEntries$lambda);
  }
  Object.defineProperty(ReactionRoleView.prototype, 'reactionEntries', {
    get: function () {
      return this.reactionEntries_h0rtiy$_0.value;
    }
  });
  function ReactionRoleView$start$lambda$lambda$lambda(closure$channelId_0, closure$messageId_0, closure$guild_0, this$ReactionRoleView_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$ReactionRoleView$start$lambda$lambda$lambda(closure$channelId_0, closure$messageId_0, closure$guild_0, this$ReactionRoleView_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ReactionRoleView$start$lambda$lambda$lambda(closure$channelId_0, closure$messageId_0, closure$guild_0, this$ReactionRoleView_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$channelId = closure$channelId_0;
    this.local$closure$messageId = closure$messageId_0;
    this.local$closure$guild = closure$guild_0;
    this.local$this$ReactionRoleView = this$ReactionRoleView_0;
    this.local$response = void 0;
  }
  Coroutine$ReactionRoleView$start$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ReactionRoleView$start$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ReactionRoleView$start$lambda$lambda$lambda.prototype.constructor = Coroutine$ReactionRoleView$start$lambda$lambda$lambda;
  Coroutine$ReactionRoleView$start$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = HttpRequest$Companion_getInstance().get_61zpoe$(get_loriUrl_0() + 'api/v1/channels/' + this.local$closure$channelId + '/messages/' + this.local$closure$messageId, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$response = this.result_0;
            if (this.local$response.statusCode !== 200) {
              return;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            var $receiver = JSON_0.Companion.nonstrict;
            var str = this.local$response.body;
            var discordMessage = $receiver.parse_awif5v$(getOrDefault($receiver.context, getKClass(PremiumKeyView$DiscordMessage)), str);
            return this.local$this$ReactionRoleView.addReactionRoleEntry_8ftnqr$(discordMessage, this.local$closure$guild, this.local$closure$guild.reactionRoleConfigs), Unit;
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
  function ReactionRoleView$start$lambda$lambda(closure$guild, this$ReactionRoleView) {
    return function (it) {
      var tmp$;
      var reactionLink = Kotlin.isType(tmp$ = page.getElementById_61zpoe$('reaction-link'), HTMLInputElement) ? tmp$ : throwCCE();
      var link = reactionLink.value;
      var split_0 = split(link, ['/']);
      var channelId = split_0.get_za3lpa$(5);
      var messageId = split_0.get_za3lpa$(6);
      return launch(coroutines.GlobalScope, void 0, void 0, ReactionRoleView$start$lambda$lambda$lambda(channelId, messageId, closure$guild, this$ReactionRoleView));
    };
  }
  var Collection = Kotlin.kotlin.collections.Collection;
  function ReactionRoleView$start$lambda$lambda_0(closure$guild_0, closure$discordMessages_0, this$ReactionRoleView_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$ReactionRoleView$start$lambda$lambda(closure$guild_0, closure$discordMessages_0, this$ReactionRoleView_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ReactionRoleView$start$lambda$lambda(closure$guild_0, closure$discordMessages_0, this$ReactionRoleView_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$guild = closure$guild_0;
    this.local$closure$discordMessages = closure$discordMessages_0;
    this.local$this$ReactionRoleView = this$ReactionRoleView_0;
    this.local$tmp$ = void 0;
    this.local$reactionRoleConfig = void 0;
    this.local$response = void 0;
  }
  Coroutine$ReactionRoleView$start$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ReactionRoleView$start$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ReactionRoleView$start$lambda$lambda.prototype.constructor = Coroutine$ReactionRoleView$start$lambda$lambda;
  Coroutine$ReactionRoleView$start$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            this.local$tmp$ = this.local$closure$guild.reactionRoleConfigs.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 6;
              continue;
            }

            this.local$reactionRoleConfig = this.local$tmp$.next();
            var $receiver = this.local$closure$discordMessages;
            var any$result;
            any$break: do {
              var tmp$_1;
              if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
                any$result = false;
                break any$break;
              }
              tmp$_1 = $receiver.iterator();
              while (tmp$_1.hasNext()) {
                var element = tmp$_1.next();
                if (equals(element.id, this.local$reactionRoleConfig.messageId)) {
                  any$result = true;
                  break any$break;
                }
              }
              any$result = false;
            }
             while (false);
            if (any$result) {
              this.state_0 = 2;
              continue;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            this.state_0 = 4;
            this.result_0 = HttpRequest$Companion_getInstance().get_61zpoe$(get_loriUrl_0() + 'api/v1/channels/' + this.local$reactionRoleConfig.textChannelId + '/messages/' + this.local$reactionRoleConfig.messageId, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$response = this.result_0;
            if (this.local$response.statusCode !== 200) {
              this.state_0 = 2;
              continue;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 5:
            var $receiver_0 = JSON_0.Companion.nonstrict;
            var str = this.local$response.body;
            var discordMessage = $receiver_0.parse_awif5v$(getOrDefault($receiver_0.context, getKClass(PremiumKeyView$DiscordMessage)), str);
            this.local$closure$discordMessages.add_11rb$(discordMessage);
            this.state_0 = 2;
            continue;
          case 6:
            tmp$ = this.local$closure$guild.reactionRoleConfigs.iterator();
            loop_label: while (tmp$.hasNext()) {
              var reactionRoleConfig = tmp$.next();
              println('REACTION ROLE');
              println('Message ID: ' + reactionRoleConfig.messageId);
              println('Text Channel ID: ' + reactionRoleConfig.textChannelId);
              println('Reaction: ' + reactionRoleConfig.reaction);
              println('Role IDs: ' + toString(reactionRoleConfig.roleIds));
              println('Locks: ' + toString(reactionRoleConfig.locks));
              var $receiver_1 = this.local$closure$discordMessages;
              var firstOrNull$result;
              firstOrNull$break: do {
                var tmp$_2;
                tmp$_2 = $receiver_1.iterator();
                while (tmp$_2.hasNext()) {
                  var element_0 = tmp$_2.next();
                  if (equals(element_0.id, reactionRoleConfig.messageId)) {
                    firstOrNull$result = element_0;
                    break firstOrNull$break;
                  }
                }
                firstOrNull$result = null;
              }
               while (false);
              var discordMessage_0 = firstOrNull$result;
              println('Message: ' + toString(discordMessage_0));
              if (discordMessage_0 != null) {
                println('Content: ' + discordMessage_0.content);
                println('Reactions...');
                var $receiver_2 = discordMessage_0.reactions;
                var tmp$_3;
                for (tmp$_3 = 0; tmp$_3 !== $receiver_2.length; ++tmp$_3) {
                  var element_1 = $receiver_2[tmp$_3];
                  println('Is Discord Emote? ' + toString(element_1.isDiscordEmote));
                  println('Name: ' + element_1.name);
                  println('ID: ' + element_1.id);
                }
              }
            }

            tmp$_0 = this.local$closure$discordMessages.iterator();
            while (tmp$_0.hasNext()) {
              var discordMessage_1 = tmp$_0.next();
              this.local$this$ReactionRoleView.addReactionRoleEntry_8ftnqr$(discordMessage_1, this.local$closure$guild, this.local$closure$guild.reactionRoleConfigs);
            }

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
  function ReactionRoleView$start$lambda(this$ReactionRoleView) {
    return function (it) {
      var tmp$, tmp$_0;
      var premiumAsJson = ensureNotNull((tmp$ = document.getElementById('reaction-role-json')) != null ? tmp$.innerHTML : null);
      println('premiumAsJson: ' + premiumAsJson);
      var $receiver = JSON_0.Companion.nonstrict;
      var guild = $receiver.parse_awif5v$(getOrDefault($receiver.context, getKClass(PremiumKeyView$Guild)), premiumAsJson);
      (Kotlin.isType(tmp$_0 = page.getElementById_61zpoe$('add-reaction-message'), HTMLButtonElement) ? tmp$_0 : throwCCE()).onclick = ReactionRoleView$start$lambda$lambda(guild, this$ReactionRoleView);
      if (!guild.reactionRoleConfigs.isEmpty()) {
        var discordMessages = ArrayList_init();
        launch(coroutines.GlobalScope, void 0, void 0, ReactionRoleView$start$lambda$lambda_0(guild, discordMessages, this$ReactionRoleView));
      }
      return Unit;
    };
  }
  ReactionRoleView.prototype.start = function () {
    document.addEventListener('DOMContentLoaded', ReactionRoleView$start$lambda(this));
  };
  function ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda(closure$discordMessage) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Mensagem ' + closure$discordMessage.id);
      return Unit;
    };
  }
  function ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Permitir escolher apenas uma das rea\xE7\xF5es');
    return Unit;
  }
  function ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda($receiver) {
    p($receiver, 'toggleMainText', ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda(closure$discordMessage, closure$reactionOptions) {
    return function ($receiver) {
      var tmp$;
      $receiver.value = 'true';
      set_id($receiver, 'rr-toggle-' + closure$discordMessage.id);
      var $receiver_0 = closure$reactionOptions;
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$_0;
        tmp$_0 = $receiver_0.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          if (equals(element.messageId, closure$discordMessage.id)) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }
        }
        firstOrNull$result = null;
      }
       while (false);
      var reactionOption = firstOrNull$result;
      if (((tmp$ = reactionOption != null ? reactionOption.locks : null) != null ? !(tmp$.length === 0) : null) === true)
        $receiver.checked = true;
      return Unit;
    };
  }
  function ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$discordMessage) {
    return function ($receiver) {
      var $receiver_0 = $receiver.attributes;
      var value = 'rr-toggle-' + closure$discordMessage.id;
      $receiver_0.put_xwzc9p$('for', value);
      return Unit;
    };
  }
  function ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda_0(closure$discordMessage, closure$reactionOptions) {
    return function ($receiver) {
      input_0($receiver, InputType.checkBox, void 0, void 0, void 0, 'cmn-toggle cmn-toggle-round', ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda(closure$discordMessage, closure$reactionOptions));
      label($receiver, void 0, ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$discordMessage));
      return Unit;
    };
  }
  function ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda_0(closure$discordMessage, closure$reactionOptions) {
    return function ($receiver) {
      div($receiver, 'switch', ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda_0(closure$discordMessage, closure$reactionOptions));
      return Unit;
    };
  }
  function ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda_0(closure$discordMessage, closure$reactionOptions) {
    return function ($receiver) {
      set_style($receiver, 'text-align: center;');
      div($receiver, 'pure-u-1 pure-u-md-7-8', ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda);
      div($receiver, 'pure-u-1 pure-u-md-1-8', ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda_0(closure$discordMessage, closure$reactionOptions));
      return Unit;
    };
  }
  function ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.width = '64';
    return Unit;
  }
  function ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$reaction) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$reaction.name);
      return Unit;
    };
  }
  function ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda_1(closure$reaction) {
    return function ($receiver) {
      if (closure$reaction.isDiscordEmote) {
        img($receiver, void 0, 'https://cdn.discordapp.com/emojis/' + toString(closure$reaction.id) + '.png?v=1', void 0, ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda_1);
      }
       else {
        p($receiver, void 0, ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$reaction));
      }
      return Unit;
    };
  }
  function ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Ativar Reaction Role');
    return Unit;
  }
  function ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    p($receiver, 'toggleMainText', ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$reactionOption, closure$discordMessage, closure$reaction) {
    return function ($receiver) {
      $receiver.value = 'true';
      $receiver.checked = closure$reactionOption != null;
      set_id($receiver, 'rr-toggle-' + closure$discordMessage.id + '-' + closure$reaction.name);
      return Unit;
    };
  }
  function ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$discordMessage, closure$reaction) {
    return function ($receiver) {
      var $receiver_0 = $receiver.attributes;
      var value = 'rr-toggle-' + closure$discordMessage.id + '-' + closure$reaction.name;
      $receiver_0.put_xwzc9p$('for', value);
      return Unit;
    };
  }
  function ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$reactionOption, closure$discordMessage, closure$reaction) {
    return function ($receiver) {
      input_0($receiver, InputType.checkBox, void 0, void 0, void 0, 'cmn-toggle cmn-toggle-round reaction-role-enabled-toggle', ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$reactionOption, closure$discordMessage, closure$reaction));
      label($receiver, void 0, ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$discordMessage, closure$reaction));
      return Unit;
    };
  }
  function ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$reactionOption, closure$discordMessage, closure$reaction) {
    return function ($receiver) {
      div($receiver, 'switch', ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$reactionOption, closure$discordMessage, closure$reaction));
      return Unit;
    };
  }
  function ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$reactionOption, closure$discordMessage, closure$reaction) {
    return function ($receiver) {
      set_style($receiver, 'text-align: center;');
      div($receiver, 'pure-u-1 pure-u-md-7-8', ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      div($receiver, 'pure-u-1 pure-u-md-1-8', ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$reactionOption, closure$discordMessage, closure$reaction));
      return Unit;
    };
  }
  function ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$role, closure$currentRoleId) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$role.name);
      if (equals(closure$role.id, closure$currentRoleId))
        $receiver.selected = true;
      return Unit;
    };
  }
  function ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$serverConfig, closure$currentRoleId) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      tmp$ = closure$serverConfig.roles;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var role = tmp$[tmp$_0];
        option($receiver, void 0, ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(role, closure$currentRoleId));
      }
      return Unit;
    };
  }
  function ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$discordMessage, closure$reaction, closure$reactionOption, closure$serverConfig) {
    return function ($receiver) {
      var tmp$;
      set_id($receiver, 'rr-hidden-' + closure$discordMessage.id + '-' + closure$reaction.name);
      var currentRoleId = (tmp$ = closure$reactionOption != null ? closure$reactionOption.roleIds : null) != null ? firstOrNull(tmp$) : null;
      select($receiver, void 0, ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$serverConfig, currentRoleId));
      return Unit;
    };
  }
  function ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.unaryPlus_pdl1vz$('Existe um reaction role associado!');
    return Unit;
  }
  function ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda_6($receiver) {
    $receiver.unaryPlus_pdl1vz$('Nenhum reaction role associado!');
    return Unit;
  }
  function ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda_2(closure$reactionOptions, closure$discordMessage, closure$reaction, closure$serverConfig) {
    return function ($receiver) {
      var $receiver_0 = closure$reactionOptions;
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$;
        tmp$ = $receiver_0.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          var closure$discordMessage_0 = closure$discordMessage;
          var closure$reaction_0 = closure$reaction;
          if (equals(element.messageId, closure$discordMessage_0.id) && (equals(element.reaction, closure$reaction_0.name) || equals(element.reaction, closure$reaction_0.id))) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }
        }
        firstOrNull$result = null;
      }
       while (false);
      var reactionOption = firstOrNull$result;
      div($receiver, 'pure-g', ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda_3(reactionOption, closure$discordMessage, closure$reaction));
      div($receiver, void 0, ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$discordMessage, closure$reaction, reactionOption, closure$serverConfig));
      if (reactionOption != null) {
        p($receiver, void 0, ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda_5);
      }
       else {
        p($receiver, void 0, ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda$lambda_6);
      }
      return Unit;
    };
  }
  function ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda_1(closure$reaction, closure$reactionOptions, closure$discordMessage, closure$serverConfig) {
    return function ($receiver) {
      div($receiver, 'pure-u-1 pure-u-md-1-6', ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda_1(closure$reaction));
      div($receiver, 'pure-u-1 pure-u-md-2-3', ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda$lambda_2(closure$reactionOptions, closure$discordMessage, closure$reaction, closure$serverConfig));
      return Unit;
    };
  }
  function ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda_1(closure$reaction, closure$reactionOptions, closure$discordMessage, closure$serverConfig) {
    return function ($receiver) {
      div($receiver, 'pure-g', ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda$lambda_1(closure$reaction, closure$reactionOptions, closure$discordMessage, closure$serverConfig));
      return Unit;
    };
  }
  function ReactionRoleView$addReactionRoleEntry$lambda$lambda(closure$discordMessage, closure$reactionOptions, closure$serverConfig) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      var $receiver_0 = $receiver.attributes;
      var key = 'data-messageId';
      var value = closure$discordMessage.id;
      $receiver_0.put_xwzc9p$(key, value);
      var $receiver_1 = $receiver.attributes;
      var key_0 = 'data-channelId';
      var value_0 = closure$discordMessage.channelId;
      $receiver_1.put_xwzc9p$(key_0, value_0);
      h1_0($receiver, void 0, ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda(closure$discordMessage));
      div($receiver, 'pure-g', ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda_0(closure$discordMessage, closure$reactionOptions));
      tmp$ = closure$discordMessage.reactions;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var reaction = tmp$[tmp$_0];
        div($receiver, 'userOptionsWrapper reaction-role-option', ReactionRoleView$addReactionRoleEntry$lambda$lambda$lambda_1(reaction, closure$reactionOptions, closure$discordMessage, closure$serverConfig));
      }
      return Unit;
    };
  }
  function ReactionRoleView$addReactionRoleEntry$lambda(closure$discordMessage, closure$reactionOptions, closure$serverConfig) {
    return function ($receiver) {
      div_0($receiver, 'message-stuff', ReactionRoleView$addReactionRoleEntry$lambda$lambda(closure$discordMessage, closure$reactionOptions, closure$serverConfig));
      return Unit;
    };
  }
  ReactionRoleView.prototype.addReactionRoleEntry_8ftnqr$ = function (discordMessage, serverConfig, reactionOptions) {
    var tmp$, tmp$_0;
    println('Adicionando...');
    append(this.reactionEntries, ReactionRoleView$addReactionRoleEntry$lambda(discordMessage, reactionOptions, serverConfig));
    tmp$ = discordMessage.reactions;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var reaction = tmp$[tmp$_0];
      LoriDashboard_getInstance().applyBlur_iiwsaa$('#rr-hidden-' + discordMessage.id + '-' + reaction.name, '#rr-toggle-' + discordMessage.id + '-' + reaction.name);
    }
  };
  function ReactionRoleView$prepareSave$lambda(it) {
    var messageStuffs = document.getElementsByClassName('message-stuff');
    var i = 0;
    while (messageStuffs.length > i) {
      var j = 0;
      var entry = ensureNotNull(messageStuffs[i]);
      println(i.toString() + '. ' + entry);
      var messageId = ensureNotNull(entry.getAttribute('data-messageId'));
      var channelId = ensureNotNull(entry.getAttribute('data-channelId'));
      var reactionOptionsDiv = entry.getElementsByClassName('reaction-role-option');
      while (reactionOptionsDiv.length > j) {
        var entry_0 = ensureNotNull(reactionOptionsDiv[j]);
        println('Option: ' + entry_0);
        j = j + 1 | 0;
      }
      i = i + 1 | 0;
    }
    return Unit;
  }
  ReactionRoleView.prototype.prepareSave = function () {
    SaveUtils_getInstance().prepareSave_feck85$('reaction_role', ReactionRoleView$prepareSave$lambda);
  };
  function ReactionRoleView$reactionEntries$lambda() {
    return page.getElementById_61zpoe$('reaction-entries');
  }
  ReactionRoleView.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ReactionRoleView',
    interfaces: []
  };
  var ReactionRoleView_instance = null;
  function ReactionRoleView_getInstance() {
    if (ReactionRoleView_instance === null) {
      new ReactionRoleView();
    }
    return ReactionRoleView_instance;
  }
  function Stuff() {
    Stuff_instance = this;
  }
  function Stuff$showPremiumFeatureModal$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Voc\xEA encontrou uma fun\xE7\xE3o premium!');
    return Unit;
  }
  function Stuff$showPremiumFeatureModal$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Voc\xEA encontrou uma fun\xE7\xE3o premium minha! Legal, n\xE9?');
    return Unit;
  }
  function Stuff$showPremiumFeatureModal$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Para ter esta fun\xE7\xE3o e muito mais, veja a minha lista de vantagens que voc\xEA pode ganhar doando!');
    return Unit;
  }
  function Stuff$showPremiumFeatureModal$lambda$lambda_0($receiver) {
    set_style($receiver, 'text-align: center;');
    img($receiver, void 0, 'https://i.imgur.com/wEUDTZG.png');
    p($receiver, void 0, Stuff$showPremiumFeatureModal$lambda$lambda$lambda);
    p($receiver, void 0, Stuff$showPremiumFeatureModal$lambda$lambda$lambda_0);
    return Unit;
  }
  function Stuff$showPremiumFeatureModal$lambda($receiver) {
    div($receiver, 'category-name', Stuff$showPremiumFeatureModal$lambda$lambda);
    div($receiver, void 0, Stuff$showPremiumFeatureModal$lambda$lambda_0);
    return Unit;
  }
  function Stuff$showPremiumFeatureModal$lambda_0() {
    window.location.href = get_loriUrl_0() + 'donate';
    return Unit;
  }
  function Stuff$showPremiumFeatureModal$lambda_1(closure$modal) {
    return function () {
      closure$modal.close();
      return Unit;
    };
  }
  Stuff.prototype.showPremiumFeatureModal = function () {
    var modal = new TingleModal(new TingleOptions_0(true, void 0, void 0, void 0, ['tingle-modal--overflow']));
    modal.setContent(div_0(get_create(document), void 0, Stuff$showPremiumFeatureModal$lambda));
    modal.addFooterBtn('<i class="fas fa-gift"><\/i> Vamos l\xE1!', 'button-discord button-discord-info pure-button button-discord-modal', Stuff$showPremiumFeatureModal$lambda_0);
    modal.addFooterBtn('<i class="fas fa-times"><\/i> Fechar', 'button-discord pure-button button-discord-modal button-discord-modal-secondary-action', Stuff$showPremiumFeatureModal$lambda_1(modal));
    modal.open();
  };
  Stuff.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Stuff',
    interfaces: []
  };
  var Stuff_instance = null;
  function Stuff_getInstance() {
    if (Stuff_instance === null) {
      new Stuff();
    }
    return Stuff_instance;
  }
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
      var obj_0 = new TimersView$Timer$TimerEffect(tmp$_2, listOf_0($receiver_0.stringify_tf03ej$(getOrDefault($receiver_0.context, getKClass(TimersView$Timer$TimerEffect$TimerEffectText)), obj)));
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
      SaveUtils_getInstance().prepareSave_feck85$('timers', TimersView$start$lambda$lambda$lambda(this$TimersView));
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
      tmp$.contents = listOf_0($receiver.stringify_tf03ej$(getOrDefault($receiver.context, getKClass(TimersView$Timer$TimerEffect$TimerEffectText)), obj));
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
  function AutoroleConfig() {
    this.isEnabled = false;
    this.roles = [];
    this.giveRolesAfter = null;
    this.rolesVoteRewards = [];
  }
  function AutoroleConfig$RoleVoteReward(voteCount, roles) {
    this.voteCount = voteCount;
    this.roles = roles;
  }
  AutoroleConfig$RoleVoteReward.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RoleVoteReward',
    interfaces: []
  };
  AutoroleConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AutoroleConfig',
    interfaces: []
  };
  function CounterThemes(name, ordinal, localizedName, emotes) {
    Enum.call(this);
    this.localizedName = localizedName;
    this.emotes = emotes;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CounterThemes_initFields() {
    CounterThemes_initFields = function () {
    };
    CounterThemes$DEFAULT_instance = new CounterThemes('DEFAULT', 0, 'loritta.modules.counter.theme.default', listOf(['<:twitter_zero:477236755519504385>', '1\u20E3', '2\u20E3', '3\u20E3', '4\u20E3', '5\u20E3', '6\u20E3', '7\u20E3', '8\u20E3', '9\u20E3']));
    CounterThemes$RED_instance = new CounterThemes('RED', 1, 'loritta.modules.counter.theme.red', listOf(['<:red_zero:517072286294081539>', '<:red_one:517072286293950464>', '<:red_two:517072286206001152>', '<:red_three:517072286445207610>', '<:red_four:517072286164058112>', '<:red_five:517072286184898560>', '<:red_six:517072286264721408>', '<:red_seven:517072286617174043>', '<:red_eight:517072285841096727>', '<:red_nine:517072286138761228>']));
    CounterThemes$GREEN_instance = new CounterThemes('GREEN', 2, 'loritta.modules.counter.theme.green', listOf(['<:green_zero:517073192708341762>', '<:green_one:517073193018720256>', '<:green_two:517073192687239190>', '<:green_three:517073193064726528>', '<:green_four:517073194088267776>', '<:green_five:517073192892891153>', '<:green_six:517073192976908338>', '<:green_seven:517073192964325377>', '<:green_eight:517073193043886090>', '<:green_nine:517073193043886080>']));
    CounterThemes$BLURPLE_instance = new CounterThemes('BLURPLE', 3, 'loritta.modules.counter.theme.blurple', listOf(['<:blurple_zero:517085610436198411>', '<:blurple_one:517085610792583169>', '<:blurple_two:517085610750771200>', '<:blurple_three:517085610754703360>', '<:blurple_four:517085610687856640>', '<:blurple_five:517085610595319829>', '<:blurple_six:517085610800971797>', '<:blurple_seven:517085611061149716>', '<:blurple_eight:517085610956029964>', '<:blurple_nine:517085610691919872>']));
    CounterThemes$BLACK_instance = new CounterThemes('BLACK', 4, 'loritta.modules.counter.theme.black', listOf(['<:black_zero:517089812218380289>', '<:black_one:517089812172374036>', '<:black_two:517089812101201930>', '<:black_three:517089812264517642>', '<:black_four:517089812012859393>', '<:black_five:517089811690029064>', '<:black_six:517089812163854336>', '<:black_seven:517089811996213269>', '<:black_eight:517089811908264097>', '<:black_nine:517089811916652616>']));
    CounterThemes$DELUXE_instance = new CounterThemes('DELUXE', 5, 'loritta.modules.counter.theme.deluxe', listOf(['<a:deluxe_zero:528323607433183242>', '<a:deluxe_one:528323712055902210>', '<a:deluxe_two:528323760881795096>', '<a:deluxe_three:528323825864015873>', '<a:deluxe_four:528323887033876491>', '<a:deluxe_five:528323921397940245>', '<a:deluxe_six:528323973428019200>', '<a:deluxe_seven:528324015291367446>', '<a:deluxe_eight:528324053732294687>', '<a:deluxe_nine:528324101518000138>']));
    CounterThemes$LORITTA_instance = new CounterThemes('LORITTA', 6, 'loritta.modules.counter.theme.loritta', listOf(['<:lori_zero:538508557067223041>', '<:lori_one:538507099102248983>', '<:lori_two:538507158044672001>', '<:lori_three:538507214709719061>', '<:lori_four:538507252575764490>', '<:lori_five:538507300122394634>', '<:lori_six:538507324936159254>', '<:lori_seven:538507359631310869>', '<:lori_eight:538507403658919966>', '<:lori_nine:538507458914811934>']));
    CounterThemes$LORITTA_KAWAI_instance = new CounterThemes('LORITTA_KAWAI', 7, 'loritta.modules.counter.theme.loritta-kawaii', listOf(['<a:kawaii_zero:542823087649849414>', '<:kawaii_one:542823112220344350>', '<a:kawaii_two:542823168465829907>', '<a:kawaii_three:542823194445348885>', '<:kawaii_four:542823233448050688>', '<a:kawaii_five:542823247826386997>', '<:kawaii_six:542823279858286592>', '<a:kawaii_seven:542823307414601734>', '<:kawaii_eight:542823334652411936>', '<:kawaii_nine:542823384917213200>']));
  }
  var CounterThemes$DEFAULT_instance;
  function CounterThemes$DEFAULT_getInstance() {
    CounterThemes_initFields();
    return CounterThemes$DEFAULT_instance;
  }
  var CounterThemes$RED_instance;
  function CounterThemes$RED_getInstance() {
    CounterThemes_initFields();
    return CounterThemes$RED_instance;
  }
  var CounterThemes$GREEN_instance;
  function CounterThemes$GREEN_getInstance() {
    CounterThemes_initFields();
    return CounterThemes$GREEN_instance;
  }
  var CounterThemes$BLURPLE_instance;
  function CounterThemes$BLURPLE_getInstance() {
    CounterThemes_initFields();
    return CounterThemes$BLURPLE_instance;
  }
  var CounterThemes$BLACK_instance;
  function CounterThemes$BLACK_getInstance() {
    CounterThemes_initFields();
    return CounterThemes$BLACK_instance;
  }
  var CounterThemes$DELUXE_instance;
  function CounterThemes$DELUXE_getInstance() {
    CounterThemes_initFields();
    return CounterThemes$DELUXE_instance;
  }
  var CounterThemes$LORITTA_instance;
  function CounterThemes$LORITTA_getInstance() {
    CounterThemes_initFields();
    return CounterThemes$LORITTA_instance;
  }
  var CounterThemes$LORITTA_KAWAI_instance;
  function CounterThemes$LORITTA_KAWAI_getInstance() {
    CounterThemes_initFields();
    return CounterThemes$LORITTA_KAWAI_instance;
  }
  CounterThemes.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CounterThemes',
    interfaces: [Enum]
  };
  function CounterThemes$values() {
    return [CounterThemes$DEFAULT_getInstance(), CounterThemes$RED_getInstance(), CounterThemes$GREEN_getInstance(), CounterThemes$BLURPLE_getInstance(), CounterThemes$BLACK_getInstance(), CounterThemes$DELUXE_getInstance(), CounterThemes$LORITTA_getInstance(), CounterThemes$LORITTA_KAWAI_getInstance()];
  }
  CounterThemes.values = CounterThemes$values;
  function CounterThemes$valueOf(name) {
    switch (name) {
      case 'DEFAULT':
        return CounterThemes$DEFAULT_getInstance();
      case 'RED':
        return CounterThemes$RED_getInstance();
      case 'GREEN':
        return CounterThemes$GREEN_getInstance();
      case 'BLURPLE':
        return CounterThemes$BLURPLE_getInstance();
      case 'BLACK':
        return CounterThemes$BLACK_getInstance();
      case 'DELUXE':
        return CounterThemes$DELUXE_getInstance();
      case 'LORITTA':
        return CounterThemes$LORITTA_getInstance();
      case 'LORITTA_KAWAI':
        return CounterThemes$LORITTA_KAWAI_getInstance();
      default:throwISE('No enum constant userdata.CounterThemes.' + name);
    }
  }
  CounterThemes.valueOf_61zpoe$ = CounterThemes$valueOf;
  function CounterUtils() {
    CounterUtils_instance = this;
  }
  CounterUtils.prototype.generatePrettyCounter_829qsp$ = function (count, theme, padding) {
    if (padding === void 0)
      padding = 5;
    return this.generatePrettyCounter_9f08aj$(count, this.getEmojis_rgz899$(theme), padding);
  };
  CounterUtils.prototype.generatePrettyCounter_9f08aj$ = function (count, list, padding) {
    if (padding === void 0)
      padding = 5;
    var tmp$;
    var counter = '';
    tmp$ = iterator(count.toString());
    while (tmp$.hasNext()) {
      var char = unboxChar(tmp$.next());
      var emote = list.get_za3lpa$(toInt(String.fromCharCode(char)));
      counter += emote;
    }
    var paddingCount = padding - count.toString().length | 0;
    if (paddingCount > 0) {
      for (var i = 0; i < paddingCount; i++) {
        counter = list.get_za3lpa$(0) + counter;
      }
    }
    return counter;
  };
  CounterUtils.prototype.generatePrettyCounterHtml_829qsp$ = function (count, theme, padding) {
    return this.generatePrettyCounterHtml_9f08aj$(count, this.getEmojis_rgz899$(theme), padding);
  };
  function CounterUtils$generatePrettyCounterHtml$lambda$lambda($receiver) {
    $receiver.width = '24';
    $receiver.height = '24';
    return Unit;
  }
  function CounterUtils$generatePrettyCounterHtml$lambda$lambda_0($receiver) {
    $receiver.width = '24';
    $receiver.height = '24';
    return Unit;
  }
  function CounterUtils$generatePrettyCounterHtml$lambda(closure$padding, closure$count, closure$list) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      var paddingCount = closure$padding - closure$count.toString().length | 0;
      if (paddingCount > 0) {
        for (var i = 0; i < paddingCount; i++) {
          var list0 = closure$list.get_za3lpa$(0);
          var imageSource;
          if (startsWith(list0, '<') && endsWith(list0, '>')) {
            var emoteId = dropLast(last(split(list0, [':'])), 1);
            var isAnimated = startsWith(list0, '<a:');
            imageSource = 'https://cdn.discordapp.com/emojis/' + emoteId;
            imageSource += isAnimated ? '.gif?v=1' : '.png?v=1';
          }
           else {
            imageSource = 'https://twemoji.maxcdn.com/72x72/30-20e3.png';
          }
          img($receiver, void 0, imageSource, void 0, CounterUtils$generatePrettyCounterHtml$lambda$lambda);
        }
      }
      tmp$ = iterator(closure$count.toString());
      while (tmp$.hasNext()) {
        var char = unboxChar(tmp$.next());
        var emote = closure$list.get_za3lpa$(toInt(String.fromCharCode(char)));
        var imageSource_0;
        if (startsWith(emote, '<') && endsWith(emote, '>')) {
          var emoteId_0 = dropLast(last(split(emote, [':'])), 1);
          var isAnimated_0 = startsWith(emote, '<a:');
          imageSource_0 = 'https://cdn.discordapp.com/emojis/' + emoteId_0;
          imageSource_0 += isAnimated_0 ? '.gif?v=1' : '.png?v=1';
        }
         else {
          switch (toInt(String.fromCharCode(char))) {
            case 0:
              tmp$_0 = 'https://twemoji.maxcdn.com/72x72/30-20e3.png';
              break;
            case 1:
              tmp$_0 = 'https://twemoji.maxcdn.com/72x72/31-20e3.png';
              break;
            case 2:
              tmp$_0 = 'https://twemoji.maxcdn.com/72x72/32-20e3.png';
              break;
            case 3:
              tmp$_0 = 'https://twemoji.maxcdn.com/72x72/33-20e3.png';
              break;
            case 4:
              tmp$_0 = 'https://twemoji.maxcdn.com/72x72/34-20e3.png';
              break;
            case 5:
              tmp$_0 = 'https://twemoji.maxcdn.com/72x72/35-20e3.png';
              break;
            case 6:
              tmp$_0 = 'https://twemoji.maxcdn.com/72x72/36-20e3.png';
              break;
            case 7:
              tmp$_0 = 'https://twemoji.maxcdn.com/72x72/37-20e3.png';
              break;
            case 8:
              tmp$_0 = 'https://twemoji.maxcdn.com/72x72/38-20e3.png';
              break;
            case 9:
              tmp$_0 = 'https://twemoji.maxcdn.com/72x72/39-20e3.png';
              break;
            default:throw RuntimeException_init('Value is invalid!');
          }
          imageSource_0 = tmp$_0;
        }
        img($receiver, void 0, imageSource_0, void 0, CounterUtils$generatePrettyCounterHtml$lambda$lambda_0);
      }
      return Unit;
    };
  }
  CounterUtils.prototype.generatePrettyCounterHtml_9f08aj$ = function (count, list, padding) {
    return div_0(appendHTML(StringBuilder_init()), void 0, CounterUtils$generatePrettyCounterHtml$lambda(padding, count, list));
  };
  CounterUtils.prototype.getEmojis_rgz899$ = function (theme) {
    var tmp$;
    tmp$ = theme.emotes;
    if (tmp$ == null) {
      throw UnsupportedOperationException_init('Theme ' + theme.name + " doesn't have emotes!");
    }
    return tmp$;
  };
  CounterUtils.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CounterUtils',
    interfaces: []
  };
  var CounterUtils_instance = null;
  function CounterUtils_getInstance() {
    if (CounterUtils_instance === null) {
      new CounterUtils();
    }
    return CounterUtils_instance;
  }
  function EconomyConfig() {
    this.isEnabled = false;
    this.economyName = null;
    this.economyNamePlural = null;
    this.exchangeRate = null;
  }
  EconomyConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EconomyConfig',
    interfaces: []
  };
  function MemberCounterConfig(topic, theme, padding) {
    this.topic = topic;
    this.theme = theme;
    this.padding = padding;
  }
  MemberCounterConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MemberCounterConfig',
    interfaces: []
  };
  function ModerationConfig() {
    this.sendPunishmentViaDm = false;
    this.sendToPunishLog = false;
    this.punishmentLogChannelId = null;
    this.punishmentLogMessage = '**Usu\xE1rio punido:** {user}#{#user}**Punido por** {@staff}\n**Motivo:** {reason}';
    this.punishmentActions = [];
    this.warnExpiresIn = null;
  }
  function ModerationConfig$WarnAction(warnCount, punishmentAction, customMetadata0) {
    this.warnCount = warnCount;
    this.punishmentAction = punishmentAction;
    this.customMetadata0 = customMetadata0;
  }
  ModerationConfig$WarnAction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WarnAction',
    interfaces: []
  };
  function ModerationConfig$Warn(reason, time, punishedBy) {
    this.reason = reason;
    this.time = time;
    this.punishedBy = punishedBy;
  }
  ModerationConfig$Warn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Warn',
    interfaces: []
  };
  function ModerationConfig$PunishmentAction(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ModerationConfig$PunishmentAction_initFields() {
    ModerationConfig$PunishmentAction_initFields = function () {
    };
    ModerationConfig$PunishmentAction$BAN_instance = new ModerationConfig$PunishmentAction('BAN', 0);
    ModerationConfig$PunishmentAction$SOFT_BAN_instance = new ModerationConfig$PunishmentAction('SOFT_BAN', 1);
    ModerationConfig$PunishmentAction$KICK_instance = new ModerationConfig$PunishmentAction('KICK', 2);
    ModerationConfig$PunishmentAction$MUTE_instance = new ModerationConfig$PunishmentAction('MUTE', 3);
  }
  var ModerationConfig$PunishmentAction$BAN_instance;
  function ModerationConfig$PunishmentAction$BAN_getInstance() {
    ModerationConfig$PunishmentAction_initFields();
    return ModerationConfig$PunishmentAction$BAN_instance;
  }
  var ModerationConfig$PunishmentAction$SOFT_BAN_instance;
  function ModerationConfig$PunishmentAction$SOFT_BAN_getInstance() {
    ModerationConfig$PunishmentAction_initFields();
    return ModerationConfig$PunishmentAction$SOFT_BAN_instance;
  }
  var ModerationConfig$PunishmentAction$KICK_instance;
  function ModerationConfig$PunishmentAction$KICK_getInstance() {
    ModerationConfig$PunishmentAction_initFields();
    return ModerationConfig$PunishmentAction$KICK_instance;
  }
  var ModerationConfig$PunishmentAction$MUTE_instance;
  function ModerationConfig$PunishmentAction$MUTE_getInstance() {
    ModerationConfig$PunishmentAction_initFields();
    return ModerationConfig$PunishmentAction$MUTE_instance;
  }
  ModerationConfig$PunishmentAction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PunishmentAction',
    interfaces: [Enum]
  };
  function ModerationConfig$PunishmentAction$values() {
    return [ModerationConfig$PunishmentAction$BAN_getInstance(), ModerationConfig$PunishmentAction$SOFT_BAN_getInstance(), ModerationConfig$PunishmentAction$KICK_getInstance(), ModerationConfig$PunishmentAction$MUTE_getInstance()];
  }
  ModerationConfig$PunishmentAction.values = ModerationConfig$PunishmentAction$values;
  function ModerationConfig$PunishmentAction$valueOf(name) {
    switch (name) {
      case 'BAN':
        return ModerationConfig$PunishmentAction$BAN_getInstance();
      case 'SOFT_BAN':
        return ModerationConfig$PunishmentAction$SOFT_BAN_getInstance();
      case 'KICK':
        return ModerationConfig$PunishmentAction$KICK_getInstance();
      case 'MUTE':
        return ModerationConfig$PunishmentAction$MUTE_getInstance();
      default:throwISE('No enum constant userdata.ModerationConfig.PunishmentAction.' + name);
    }
  }
  ModerationConfig$PunishmentAction.valueOf_61zpoe$ = ModerationConfig$PunishmentAction$valueOf;
  ModerationConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ModerationConfig',
    interfaces: []
  };
  function PartnerConfig(keywords, languages) {
    this.keywords = keywords;
    this.languages = languages;
    this.isPartner = false;
    this.isSponsored = false;
    this.vanityUrl = null;
    this.tagline = null;
    this.description = null;
    this.sendOnVote = false;
    this.voteBroadcastChannelId = null;
    this.voteBroadcastMessage = null;
  }
  PartnerConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PartnerConfig',
    interfaces: []
  };
  function ServerListConfig(keywords, languages, tagline) {
    this.keywords = keywords;
    this.languages = languages;
    this.tagline = tagline;
    this.isPartner = false;
    this.isSponsored = false;
    this.sponsoredUntil = L0;
    this.vanityUrl = null;
    this.description = null;
  }
  function ServerListConfig$ServerVote(id, votedAt, canVote) {
    this.id = id;
    this.votedAt = votedAt;
    this.canVote = canVote;
  }
  ServerListConfig$ServerVote.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ServerVote',
    interfaces: []
  };
  ServerListConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ServerListConfig',
    interfaces: []
  };
  function StoreItem(name, price, code, description, imageUrl) {
    this.name = name;
    this.price = price;
    this.code = code;
    this.description = description;
    this.imageUrl = imageUrl;
  }
  StoreItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StoreItem',
    interfaces: []
  };
  function WelcomerConfig() {
    this.isEnabled = false;
    this.tellOnJoin = true;
    this.tellOnLeave = true;
    this.joinMessage = '\uD83D\uDC49 {@user} entrou no servidor!';
    this.leaveMessage = '\uD83D\uDC48 {nickname} saiu do servidor!';
    this.canalJoinId = null;
    this.canalLeaveId = null;
    this.tellOnPrivate = false;
    this.joinPrivateMessage = 'Obrigado por entrar na {guild} {@user}! Espero que voc\xEA curta o nosso servidor!';
    this.tellOnBan = false;
    this.banMessage = '';
    this.tellOnKick = false;
    this.kickMessage = '';
    this.deleteJoinMessagesAfter = null;
    this.deleteLeaveMessagesAfter = null;
  }
  WelcomerConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WelcomerConfig',
    interfaces: []
  };
  function AbstractCommand(name, label, aliases, category, description, usage, detailedUsage, example, extendedExamples, requiredUserPermissions, requiredBotPermissions) {
    this.name = name;
    this.label = label;
    this.aliases = aliases;
    this.category = category;
    this.description = description;
    this.usage = usage;
    this.detailedUsage = detailedUsage;
    this.example = example;
    this.extendedExamples = extendedExamples;
    this.requiredUserPermissions = requiredUserPermissions;
    this.requiredBotPermissions = requiredBotPermissions;
  }
  AbstractCommand.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractCommand',
    interfaces: []
  };
  function CommandCategory(name, ordinal, fancyTitle, description) {
    Enum.call(this);
    this.fancyTitle = fancyTitle;
    this.description = description;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CommandCategory_initFields() {
    CommandCategory_initFields = function () {
    };
    CommandCategory$FUN_instance = new CommandCategory('FUN', 0, 'CommandCategory_FUN_Name', 'CommandCategory_FUN_Description');
    CommandCategory$IMAGES_instance = new CommandCategory('IMAGES', 1, 'CommandCategory_IMAGES_Name', 'CommandCategory_IMAGES_Description');
    CommandCategory$MINECRAFT_instance = new CommandCategory('MINECRAFT', 2, 'CommandCategory_MINECRAFT_Name', 'CommandCategory_MINECRAFT_Description');
    CommandCategory$POKEMON_instance = new CommandCategory('POKEMON', 3, 'CommandCategory_POKEMON_Name', 'CommandCategory_POKEMON_Description');
    CommandCategory$UNDERTALE_instance = new CommandCategory('UNDERTALE', 4, 'CommandCategory_UNDERTALE_Name', 'CommandCategory_UNDERTALE_Description');
    CommandCategory$ROBLOX_instance = new CommandCategory('ROBLOX', 5, 'CommandCategory_ROBLOX_Name', 'CommandCategory_ROBLOX_Description');
    CommandCategory$ANIME_instance = new CommandCategory('ANIME', 6, 'CommandCategory_ANIME_Name', 'CommandCategory_ANIME_Description');
    CommandCategory$DISCORD_instance = new CommandCategory('DISCORD', 7, 'CommandCategory_DISCORD_Name', 'CommandCategory_DISCORD_Description');
    CommandCategory$MISC_instance = new CommandCategory('MISC', 8, 'CommandCategory_MISC_Name', 'CommandCategory_MISC_Description');
    CommandCategory$ADMIN_instance = new CommandCategory('ADMIN', 9, 'CommandCategory_ADMIN_Name', 'CommandCategory_ADMIN_Description');
    CommandCategory$UTILS_instance = new CommandCategory('UTILS', 10, 'CommandCategory_UTILS_Name', 'CommandCategory_UTILS_Description');
    CommandCategory$SOCIAL_instance = new CommandCategory('SOCIAL', 11, 'CommandCategory_SOCIAL_Name', 'CommandCategory_SOCIAL_Description');
    CommandCategory$ECONOMY_instance = new CommandCategory('ECONOMY', 12, 'CommandCategory_ECONOMY_Name', 'CommandCategory_ECONOMY_Description');
    CommandCategory$MUSIC_instance = new CommandCategory('MUSIC', 13, 'CommandCategory_MUSIC_Name', 'CommandCategory_MUSIC_Description');
    CommandCategory$MAGIC_instance = new CommandCategory('MAGIC', 14, 'CommandCategory_MAGIC_Name', 'CommandCategory_MAGIC_Description');
  }
  var CommandCategory$FUN_instance;
  function CommandCategory$FUN_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$FUN_instance;
  }
  var CommandCategory$IMAGES_instance;
  function CommandCategory$IMAGES_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$IMAGES_instance;
  }
  var CommandCategory$MINECRAFT_instance;
  function CommandCategory$MINECRAFT_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$MINECRAFT_instance;
  }
  var CommandCategory$POKEMON_instance;
  function CommandCategory$POKEMON_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$POKEMON_instance;
  }
  var CommandCategory$UNDERTALE_instance;
  function CommandCategory$UNDERTALE_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$UNDERTALE_instance;
  }
  var CommandCategory$ROBLOX_instance;
  function CommandCategory$ROBLOX_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$ROBLOX_instance;
  }
  var CommandCategory$ANIME_instance;
  function CommandCategory$ANIME_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$ANIME_instance;
  }
  var CommandCategory$DISCORD_instance;
  function CommandCategory$DISCORD_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$DISCORD_instance;
  }
  var CommandCategory$MISC_instance;
  function CommandCategory$MISC_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$MISC_instance;
  }
  var CommandCategory$ADMIN_instance;
  function CommandCategory$ADMIN_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$ADMIN_instance;
  }
  var CommandCategory$UTILS_instance;
  function CommandCategory$UTILS_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$UTILS_instance;
  }
  var CommandCategory$SOCIAL_instance;
  function CommandCategory$SOCIAL_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$SOCIAL_instance;
  }
  var CommandCategory$ECONOMY_instance;
  function CommandCategory$ECONOMY_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$ECONOMY_instance;
  }
  var CommandCategory$MUSIC_instance;
  function CommandCategory$MUSIC_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$MUSIC_instance;
  }
  var CommandCategory$MAGIC_instance;
  function CommandCategory$MAGIC_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$MAGIC_instance;
  }
  CommandCategory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommandCategory',
    interfaces: [Enum]
  };
  function CommandCategory$values() {
    return [CommandCategory$FUN_getInstance(), CommandCategory$IMAGES_getInstance(), CommandCategory$MINECRAFT_getInstance(), CommandCategory$POKEMON_getInstance(), CommandCategory$UNDERTALE_getInstance(), CommandCategory$ROBLOX_getInstance(), CommandCategory$ANIME_getInstance(), CommandCategory$DISCORD_getInstance(), CommandCategory$MISC_getInstance(), CommandCategory$ADMIN_getInstance(), CommandCategory$UTILS_getInstance(), CommandCategory$SOCIAL_getInstance(), CommandCategory$ECONOMY_getInstance(), CommandCategory$MUSIC_getInstance(), CommandCategory$MAGIC_getInstance()];
  }
  CommandCategory.values = CommandCategory$values;
  function CommandCategory$valueOf(name) {
    switch (name) {
      case 'FUN':
        return CommandCategory$FUN_getInstance();
      case 'IMAGES':
        return CommandCategory$IMAGES_getInstance();
      case 'MINECRAFT':
        return CommandCategory$MINECRAFT_getInstance();
      case 'POKEMON':
        return CommandCategory$POKEMON_getInstance();
      case 'UNDERTALE':
        return CommandCategory$UNDERTALE_getInstance();
      case 'ROBLOX':
        return CommandCategory$ROBLOX_getInstance();
      case 'ANIME':
        return CommandCategory$ANIME_getInstance();
      case 'DISCORD':
        return CommandCategory$DISCORD_getInstance();
      case 'MISC':
        return CommandCategory$MISC_getInstance();
      case 'ADMIN':
        return CommandCategory$ADMIN_getInstance();
      case 'UTILS':
        return CommandCategory$UTILS_getInstance();
      case 'SOCIAL':
        return CommandCategory$SOCIAL_getInstance();
      case 'ECONOMY':
        return CommandCategory$ECONOMY_getInstance();
      case 'MUSIC':
        return CommandCategory$MUSIC_getInstance();
      case 'MAGIC':
        return CommandCategory$MAGIC_getInstance();
      default:throwISE('No enum constant utils.CommandCategory.' + name);
    }
  }
  CommandCategory.valueOf_61zpoe$ = CommandCategory$valueOf;
  function CountUpOptions(useEasing, useGrouping, separator, decimal) {
    this.useEasing = useEasing;
    this.useGrouping = useGrouping;
    this.separator = separator;
    this.decimal = decimal;
  }
  CountUpOptions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CountUpOptions',
    interfaces: []
  };
  function Emote(id, name) {
    this.id = id;
    this.name = name;
  }
  Emote.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Emote',
    interfaces: []
  };
  function LegacyBaseLocale() {
    LegacyBaseLocale$Companion_getInstance();
    this.strings = emptyMap();
  }
  function LegacyBaseLocale$Companion() {
    LegacyBaseLocale$Companion_instance = this;
  }
  LegacyBaseLocale$Companion.prototype.create_qk3xy8$ = function (json) {
    var tmp$, tmp$_0;
    var map = LinkedHashMap_init();
    tmp$ = iterator_0(Object.keys(json));
    while (tmp$.hasNext()) {
      var key = tmp$.next();
      map.put_xwzc9p$(key, typeof (tmp$_0 = json[key]) === 'string' ? tmp$_0 : throwCCE());
    }
    println('Keys: ' + map.entries.size);
    var $receiver = new LegacyBaseLocale();
    $receiver.strings = map;
    return $receiver;
  };
  LegacyBaseLocale$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LegacyBaseLocale$Companion_instance = null;
  function LegacyBaseLocale$Companion_getInstance() {
    if (LegacyBaseLocale$Companion_instance === null) {
      new LegacyBaseLocale$Companion();
    }
    return LegacyBaseLocale$Companion_instance;
  }
  LegacyBaseLocale.prototype.get_25kzsl$ = function (key, arguments_0) {
    var tmp$;
    tmp$ = this.strings.get_11rb$(key);
    if (tmp$ == null) {
      return key;
    }
    var string = tmp$;
    for (var index = 0; index !== arguments_0.length; ++index) {
      var arg = arguments_0[index];
      string = replace(string, '{' + index + '}', toString(arg));
    }
    return string;
  };
  LegacyBaseLocale.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LegacyBaseLocale',
    interfaces: []
  };
  function LoriColor(red, green, blue) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  }
  LoriColor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoriColor',
    interfaces: []
  };
  function LoriWebCodes() {
    LoriWebCodes_instance = this;
    this.SUCCESS = 0;
    this.RATE_LIMITED = 1;
    this.TRYING_TO_SAVE_PARTNER_CONFIG_WHILE_NOT_PARTNER = 2;
    this.UNKNOWN_GUILD = 3;
    this.UNAUTHORIZED = 4;
    this.ALREADY_VOTED_TODAY = 5;
    this.NOT_IN_GUILD = 6;
    this.INVALID_CAPTCHA_RESPONSE = 7;
    this.MISSING_PAYLOAD_HANDLER = 8;
    this.BAD_IP = 9;
    this.NOT_VERIFIED = 10;
    this.BAD_EMAIL = 11;
    this.MISSING_PERMISSION = 12;
    this.ALREADY_IN_GUILD = 13;
    this.INSUFFICIENT_FUNDS = 14;
  }
  LoriWebCodes.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LoriWebCodes',
    interfaces: []
  };
  var LoriWebCodes_instance = null;
  function LoriWebCodes_getInstance() {
    if (LoriWebCodes_instance === null) {
      new LoriWebCodes();
    }
    return LoriWebCodes_instance;
  }
  function LorittaDailyPayload(dailyPayout) {
    this.dailyPayout = dailyPayout;
  }
  LorittaDailyPayload.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LorittaDailyPayload',
    interfaces: []
  };
  function LorittaPartner() {
    LorittaPartner_instance = this;
  }
  function LorittaPartner$Keyword(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function LorittaPartner$Keyword_initFields() {
    LorittaPartner$Keyword_initFields = function () {
    };
    LorittaPartner$Keyword$GAMING_instance = new LorittaPartner$Keyword('GAMING', 0);
    LorittaPartner$Keyword$ENTERTAINMENT_instance = new LorittaPartner$Keyword('ENTERTAINMENT', 1);
    LorittaPartner$Keyword$ANIME_AND_MANGA_instance = new LorittaPartner$Keyword('ANIME_AND_MANGA', 2);
    LorittaPartner$Keyword$TELEVISION_instance = new LorittaPartner$Keyword('TELEVISION', 3);
    LorittaPartner$Keyword$ROLEPLAYING_instance = new LorittaPartner$Keyword('ROLEPLAYING', 4);
    LorittaPartner$Keyword$GIVEAWAYS_instance = new LorittaPartner$Keyword('GIVEAWAYS', 5);
    LorittaPartner$Keyword$MEMES_instance = new LorittaPartner$Keyword('MEMES', 6);
    LorittaPartner$Keyword$COMMUNITY_instance = new LorittaPartner$Keyword('COMMUNITY', 7);
    LorittaPartner$Keyword$PROGRAMMING_instance = new LorittaPartner$Keyword('PROGRAMMING', 8);
    LorittaPartner$Keyword$MUSIC_instance = new LorittaPartner$Keyword('MUSIC', 9);
    LorittaPartner$Keyword$MOVIES_instance = new LorittaPartner$Keyword('MOVIES', 10);
    LorittaPartner$Keyword$YOUTUBER_instance = new LorittaPartner$Keyword('YOUTUBER', 11);
    LorittaPartner$Keyword$STREAMER_instance = new LorittaPartner$Keyword('STREAMER', 12);
    LorittaPartner$Keyword$DISCUSSION_instance = new LorittaPartner$Keyword('DISCUSSION', 13);
    LorittaPartner$Keyword$EMOTES_instance = new LorittaPartner$Keyword('EMOTES', 14);
    LorittaPartner$Keyword$NEWS_instance = new LorittaPartner$Keyword('NEWS', 15);
    LorittaPartner$Keyword$ART_instance = new LorittaPartner$Keyword('ART', 16);
    LorittaPartner$Keyword$BOTS_instance = new LorittaPartner$Keyword('BOTS', 17);
    LorittaPartner$Keyword$FASHION_AND_BEAUTY_instance = new LorittaPartner$Keyword('FASHION_AND_BEAUTY', 18);
    LorittaPartner$Keyword$SOFTWARE_instance = new LorittaPartner$Keyword('SOFTWARE', 19);
    LorittaPartner$Keyword$HARDWARE_instance = new LorittaPartner$Keyword('HARDWARE', 20);
    LorittaPartner$Keyword$AESTHETICS_instance = new LorittaPartner$Keyword('AESTHETICS', 21);
    LorittaPartner$Keyword$HOBBIES_instance = new LorittaPartner$Keyword('HOBBIES', 22);
    LorittaPartner$Keyword$CHIT_CHAT_instance = new LorittaPartner$Keyword('CHIT_CHAT', 23);
    LorittaPartner$Keyword$KPOP_AND_KOREAN_CULTURE_instance = new LorittaPartner$Keyword('KPOP_AND_KOREAN_CULTURE', 24);
    LorittaPartner$Keyword$TERROR_AND_CREEPYPASTA_instance = new LorittaPartner$Keyword('TERROR_AND_CREEPYPASTA', 25);
    LorittaPartner$Keyword$LIFE_STYLE_instance = new LorittaPartner$Keyword('LIFE_STYLE', 26);
    LorittaPartner$Keyword$BOOKS_AND_WRITING_instance = new LorittaPartner$Keyword('BOOKS_AND_WRITING', 27);
    LorittaPartner$Keyword$SPORTS_instance = new LorittaPartner$Keyword('SPORTS', 28);
    LorittaPartner$Keyword$FITNESS_AND_HEALTH_instance = new LorittaPartner$Keyword('FITNESS_AND_HEALTH', 29);
    LorittaPartner$Keyword$INTERNET_CULTURE_instance = new LorittaPartner$Keyword('INTERNET_CULTURE', 30);
    LorittaPartner$Keyword$FOOD_instance = new LorittaPartner$Keyword('FOOD', 31);
    LorittaPartner$Keyword$NATURE_AND_SCIENCE_instance = new LorittaPartner$Keyword('NATURE_AND_SCIENCE', 32);
    LorittaPartner$Keyword$CRYPTOCURRENCY_instance = new LorittaPartner$Keyword('CRYPTOCURRENCY', 33);
    LorittaPartner$Keyword$TECNOLOGY_instance = new LorittaPartner$Keyword('TECNOLOGY', 34);
    LorittaPartner$Keyword$FURRY_instance = new LorittaPartner$Keyword('FURRY', 35);
    LorittaPartner$Keyword$NSFW_instance = new LorittaPartner$Keyword('NSFW', 36);
  }
  var LorittaPartner$Keyword$GAMING_instance;
  function LorittaPartner$Keyword$GAMING_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$GAMING_instance;
  }
  var LorittaPartner$Keyword$ENTERTAINMENT_instance;
  function LorittaPartner$Keyword$ENTERTAINMENT_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$ENTERTAINMENT_instance;
  }
  var LorittaPartner$Keyword$ANIME_AND_MANGA_instance;
  function LorittaPartner$Keyword$ANIME_AND_MANGA_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$ANIME_AND_MANGA_instance;
  }
  var LorittaPartner$Keyword$TELEVISION_instance;
  function LorittaPartner$Keyword$TELEVISION_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$TELEVISION_instance;
  }
  var LorittaPartner$Keyword$ROLEPLAYING_instance;
  function LorittaPartner$Keyword$ROLEPLAYING_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$ROLEPLAYING_instance;
  }
  var LorittaPartner$Keyword$GIVEAWAYS_instance;
  function LorittaPartner$Keyword$GIVEAWAYS_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$GIVEAWAYS_instance;
  }
  var LorittaPartner$Keyword$MEMES_instance;
  function LorittaPartner$Keyword$MEMES_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$MEMES_instance;
  }
  var LorittaPartner$Keyword$COMMUNITY_instance;
  function LorittaPartner$Keyword$COMMUNITY_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$COMMUNITY_instance;
  }
  var LorittaPartner$Keyword$PROGRAMMING_instance;
  function LorittaPartner$Keyword$PROGRAMMING_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$PROGRAMMING_instance;
  }
  var LorittaPartner$Keyword$MUSIC_instance;
  function LorittaPartner$Keyword$MUSIC_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$MUSIC_instance;
  }
  var LorittaPartner$Keyword$MOVIES_instance;
  function LorittaPartner$Keyword$MOVIES_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$MOVIES_instance;
  }
  var LorittaPartner$Keyword$YOUTUBER_instance;
  function LorittaPartner$Keyword$YOUTUBER_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$YOUTUBER_instance;
  }
  var LorittaPartner$Keyword$STREAMER_instance;
  function LorittaPartner$Keyword$STREAMER_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$STREAMER_instance;
  }
  var LorittaPartner$Keyword$DISCUSSION_instance;
  function LorittaPartner$Keyword$DISCUSSION_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$DISCUSSION_instance;
  }
  var LorittaPartner$Keyword$EMOTES_instance;
  function LorittaPartner$Keyword$EMOTES_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$EMOTES_instance;
  }
  var LorittaPartner$Keyword$NEWS_instance;
  function LorittaPartner$Keyword$NEWS_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$NEWS_instance;
  }
  var LorittaPartner$Keyword$ART_instance;
  function LorittaPartner$Keyword$ART_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$ART_instance;
  }
  var LorittaPartner$Keyword$BOTS_instance;
  function LorittaPartner$Keyword$BOTS_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$BOTS_instance;
  }
  var LorittaPartner$Keyword$FASHION_AND_BEAUTY_instance;
  function LorittaPartner$Keyword$FASHION_AND_BEAUTY_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$FASHION_AND_BEAUTY_instance;
  }
  var LorittaPartner$Keyword$SOFTWARE_instance;
  function LorittaPartner$Keyword$SOFTWARE_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$SOFTWARE_instance;
  }
  var LorittaPartner$Keyword$HARDWARE_instance;
  function LorittaPartner$Keyword$HARDWARE_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$HARDWARE_instance;
  }
  var LorittaPartner$Keyword$AESTHETICS_instance;
  function LorittaPartner$Keyword$AESTHETICS_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$AESTHETICS_instance;
  }
  var LorittaPartner$Keyword$HOBBIES_instance;
  function LorittaPartner$Keyword$HOBBIES_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$HOBBIES_instance;
  }
  var LorittaPartner$Keyword$CHIT_CHAT_instance;
  function LorittaPartner$Keyword$CHIT_CHAT_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$CHIT_CHAT_instance;
  }
  var LorittaPartner$Keyword$KPOP_AND_KOREAN_CULTURE_instance;
  function LorittaPartner$Keyword$KPOP_AND_KOREAN_CULTURE_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$KPOP_AND_KOREAN_CULTURE_instance;
  }
  var LorittaPartner$Keyword$TERROR_AND_CREEPYPASTA_instance;
  function LorittaPartner$Keyword$TERROR_AND_CREEPYPASTA_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$TERROR_AND_CREEPYPASTA_instance;
  }
  var LorittaPartner$Keyword$LIFE_STYLE_instance;
  function LorittaPartner$Keyword$LIFE_STYLE_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$LIFE_STYLE_instance;
  }
  var LorittaPartner$Keyword$BOOKS_AND_WRITING_instance;
  function LorittaPartner$Keyword$BOOKS_AND_WRITING_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$BOOKS_AND_WRITING_instance;
  }
  var LorittaPartner$Keyword$SPORTS_instance;
  function LorittaPartner$Keyword$SPORTS_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$SPORTS_instance;
  }
  var LorittaPartner$Keyword$FITNESS_AND_HEALTH_instance;
  function LorittaPartner$Keyword$FITNESS_AND_HEALTH_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$FITNESS_AND_HEALTH_instance;
  }
  var LorittaPartner$Keyword$INTERNET_CULTURE_instance;
  function LorittaPartner$Keyword$INTERNET_CULTURE_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$INTERNET_CULTURE_instance;
  }
  var LorittaPartner$Keyword$FOOD_instance;
  function LorittaPartner$Keyword$FOOD_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$FOOD_instance;
  }
  var LorittaPartner$Keyword$NATURE_AND_SCIENCE_instance;
  function LorittaPartner$Keyword$NATURE_AND_SCIENCE_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$NATURE_AND_SCIENCE_instance;
  }
  var LorittaPartner$Keyword$CRYPTOCURRENCY_instance;
  function LorittaPartner$Keyword$CRYPTOCURRENCY_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$CRYPTOCURRENCY_instance;
  }
  var LorittaPartner$Keyword$TECNOLOGY_instance;
  function LorittaPartner$Keyword$TECNOLOGY_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$TECNOLOGY_instance;
  }
  var LorittaPartner$Keyword$FURRY_instance;
  function LorittaPartner$Keyword$FURRY_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$FURRY_instance;
  }
  var LorittaPartner$Keyword$NSFW_instance;
  function LorittaPartner$Keyword$NSFW_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$NSFW_instance;
  }
  LorittaPartner$Keyword.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Keyword',
    interfaces: [Enum]
  };
  function LorittaPartner$Keyword$values() {
    return [LorittaPartner$Keyword$GAMING_getInstance(), LorittaPartner$Keyword$ENTERTAINMENT_getInstance(), LorittaPartner$Keyword$ANIME_AND_MANGA_getInstance(), LorittaPartner$Keyword$TELEVISION_getInstance(), LorittaPartner$Keyword$ROLEPLAYING_getInstance(), LorittaPartner$Keyword$GIVEAWAYS_getInstance(), LorittaPartner$Keyword$MEMES_getInstance(), LorittaPartner$Keyword$COMMUNITY_getInstance(), LorittaPartner$Keyword$PROGRAMMING_getInstance(), LorittaPartner$Keyword$MUSIC_getInstance(), LorittaPartner$Keyword$MOVIES_getInstance(), LorittaPartner$Keyword$YOUTUBER_getInstance(), LorittaPartner$Keyword$STREAMER_getInstance(), LorittaPartner$Keyword$DISCUSSION_getInstance(), LorittaPartner$Keyword$EMOTES_getInstance(), LorittaPartner$Keyword$NEWS_getInstance(), LorittaPartner$Keyword$ART_getInstance(), LorittaPartner$Keyword$BOTS_getInstance(), LorittaPartner$Keyword$FASHION_AND_BEAUTY_getInstance(), LorittaPartner$Keyword$SOFTWARE_getInstance(), LorittaPartner$Keyword$HARDWARE_getInstance(), LorittaPartner$Keyword$AESTHETICS_getInstance(), LorittaPartner$Keyword$HOBBIES_getInstance(), LorittaPartner$Keyword$CHIT_CHAT_getInstance(), LorittaPartner$Keyword$KPOP_AND_KOREAN_CULTURE_getInstance(), LorittaPartner$Keyword$TERROR_AND_CREEPYPASTA_getInstance(), LorittaPartner$Keyword$LIFE_STYLE_getInstance(), LorittaPartner$Keyword$BOOKS_AND_WRITING_getInstance(), LorittaPartner$Keyword$SPORTS_getInstance(), LorittaPartner$Keyword$FITNESS_AND_HEALTH_getInstance(), LorittaPartner$Keyword$INTERNET_CULTURE_getInstance(), LorittaPartner$Keyword$FOOD_getInstance(), LorittaPartner$Keyword$NATURE_AND_SCIENCE_getInstance(), LorittaPartner$Keyword$CRYPTOCURRENCY_getInstance(), LorittaPartner$Keyword$TECNOLOGY_getInstance(), LorittaPartner$Keyword$FURRY_getInstance(), LorittaPartner$Keyword$NSFW_getInstance()];
  }
  LorittaPartner$Keyword.values = LorittaPartner$Keyword$values;
  function LorittaPartner$Keyword$valueOf(name) {
    switch (name) {
      case 'GAMING':
        return LorittaPartner$Keyword$GAMING_getInstance();
      case 'ENTERTAINMENT':
        return LorittaPartner$Keyword$ENTERTAINMENT_getInstance();
      case 'ANIME_AND_MANGA':
        return LorittaPartner$Keyword$ANIME_AND_MANGA_getInstance();
      case 'TELEVISION':
        return LorittaPartner$Keyword$TELEVISION_getInstance();
      case 'ROLEPLAYING':
        return LorittaPartner$Keyword$ROLEPLAYING_getInstance();
      case 'GIVEAWAYS':
        return LorittaPartner$Keyword$GIVEAWAYS_getInstance();
      case 'MEMES':
        return LorittaPartner$Keyword$MEMES_getInstance();
      case 'COMMUNITY':
        return LorittaPartner$Keyword$COMMUNITY_getInstance();
      case 'PROGRAMMING':
        return LorittaPartner$Keyword$PROGRAMMING_getInstance();
      case 'MUSIC':
        return LorittaPartner$Keyword$MUSIC_getInstance();
      case 'MOVIES':
        return LorittaPartner$Keyword$MOVIES_getInstance();
      case 'YOUTUBER':
        return LorittaPartner$Keyword$YOUTUBER_getInstance();
      case 'STREAMER':
        return LorittaPartner$Keyword$STREAMER_getInstance();
      case 'DISCUSSION':
        return LorittaPartner$Keyword$DISCUSSION_getInstance();
      case 'EMOTES':
        return LorittaPartner$Keyword$EMOTES_getInstance();
      case 'NEWS':
        return LorittaPartner$Keyword$NEWS_getInstance();
      case 'ART':
        return LorittaPartner$Keyword$ART_getInstance();
      case 'BOTS':
        return LorittaPartner$Keyword$BOTS_getInstance();
      case 'FASHION_AND_BEAUTY':
        return LorittaPartner$Keyword$FASHION_AND_BEAUTY_getInstance();
      case 'SOFTWARE':
        return LorittaPartner$Keyword$SOFTWARE_getInstance();
      case 'HARDWARE':
        return LorittaPartner$Keyword$HARDWARE_getInstance();
      case 'AESTHETICS':
        return LorittaPartner$Keyword$AESTHETICS_getInstance();
      case 'HOBBIES':
        return LorittaPartner$Keyword$HOBBIES_getInstance();
      case 'CHIT_CHAT':
        return LorittaPartner$Keyword$CHIT_CHAT_getInstance();
      case 'KPOP_AND_KOREAN_CULTURE':
        return LorittaPartner$Keyword$KPOP_AND_KOREAN_CULTURE_getInstance();
      case 'TERROR_AND_CREEPYPASTA':
        return LorittaPartner$Keyword$TERROR_AND_CREEPYPASTA_getInstance();
      case 'LIFE_STYLE':
        return LorittaPartner$Keyword$LIFE_STYLE_getInstance();
      case 'BOOKS_AND_WRITING':
        return LorittaPartner$Keyword$BOOKS_AND_WRITING_getInstance();
      case 'SPORTS':
        return LorittaPartner$Keyword$SPORTS_getInstance();
      case 'FITNESS_AND_HEALTH':
        return LorittaPartner$Keyword$FITNESS_AND_HEALTH_getInstance();
      case 'INTERNET_CULTURE':
        return LorittaPartner$Keyword$INTERNET_CULTURE_getInstance();
      case 'FOOD':
        return LorittaPartner$Keyword$FOOD_getInstance();
      case 'NATURE_AND_SCIENCE':
        return LorittaPartner$Keyword$NATURE_AND_SCIENCE_getInstance();
      case 'CRYPTOCURRENCY':
        return LorittaPartner$Keyword$CRYPTOCURRENCY_getInstance();
      case 'TECNOLOGY':
        return LorittaPartner$Keyword$TECNOLOGY_getInstance();
      case 'FURRY':
        return LorittaPartner$Keyword$FURRY_getInstance();
      case 'NSFW':
        return LorittaPartner$Keyword$NSFW_getInstance();
      default:throwISE('No enum constant utils.LorittaPartner.Keyword.' + name);
    }
  }
  LorittaPartner$Keyword.valueOf_61zpoe$ = LorittaPartner$Keyword$valueOf;
  function LorittaPartner$Language(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function LorittaPartner$Language_initFields() {
    LorittaPartner$Language_initFields = function () {
    };
  }
  LorittaPartner$Language.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Language',
    interfaces: [Enum]
  };
  function LorittaPartner$Language$values() {
    return [];
  }
  LorittaPartner$Language.values = LorittaPartner$Language$values;
  function LorittaPartner$Language$valueOf(name) {
    throwISE('No enum constant utils.LorittaPartner.Language.' + name);
  }
  LorittaPartner$Language.valueOf_61zpoe$ = LorittaPartner$Language$valueOf;
  function LorittaPartner$Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function LorittaPartner$Type_initFields() {
    LorittaPartner$Type_initFields = function () {
    };
    LorittaPartner$Type$SPONSOR_instance = new LorittaPartner$Type('SPONSOR', 0);
    LorittaPartner$Type$PARTNER_instance = new LorittaPartner$Type('PARTNER', 1);
    LorittaPartner$Type$NORMAL_instance = new LorittaPartner$Type('NORMAL', 2);
  }
  var LorittaPartner$Type$SPONSOR_instance;
  function LorittaPartner$Type$SPONSOR_getInstance() {
    LorittaPartner$Type_initFields();
    return LorittaPartner$Type$SPONSOR_instance;
  }
  var LorittaPartner$Type$PARTNER_instance;
  function LorittaPartner$Type$PARTNER_getInstance() {
    LorittaPartner$Type_initFields();
    return LorittaPartner$Type$PARTNER_instance;
  }
  var LorittaPartner$Type$NORMAL_instance;
  function LorittaPartner$Type$NORMAL_getInstance() {
    LorittaPartner$Type_initFields();
    return LorittaPartner$Type$NORMAL_instance;
  }
  LorittaPartner$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function LorittaPartner$Type$values() {
    return [LorittaPartner$Type$SPONSOR_getInstance(), LorittaPartner$Type$PARTNER_getInstance(), LorittaPartner$Type$NORMAL_getInstance()];
  }
  LorittaPartner$Type.values = LorittaPartner$Type$values;
  function LorittaPartner$Type$valueOf(name) {
    switch (name) {
      case 'SPONSOR':
        return LorittaPartner$Type$SPONSOR_getInstance();
      case 'PARTNER':
        return LorittaPartner$Type$PARTNER_getInstance();
      case 'NORMAL':
        return LorittaPartner$Type$NORMAL_getInstance();
      default:throwISE('No enum constant utils.LorittaPartner.Type.' + name);
    }
  }
  LorittaPartner$Type.valueOf_61zpoe$ = LorittaPartner$Type$valueOf;
  LorittaPartner.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LorittaPartner',
    interfaces: []
  };
  var LorittaPartner_instance = null;
  function LorittaPartner_getInstance() {
    if (LorittaPartner_instance === null) {
      new LorittaPartner();
    }
    return LorittaPartner_instance;
  }
  function LorittaProfile(userId, dreams) {
    this.userId = userId;
    this.dreams = dreams;
  }
  LorittaProfile.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LorittaProfile',
    interfaces: []
  };
  function LorittaSamplePayload(sponsored, partners, top, random, recentlyBumped, sponsoredCount, partnersCount, totalCount) {
    this.sponsored = sponsored;
    this.partners = partners;
    this.top = top;
    this.random = random;
    this.recentlyBumped = recentlyBumped;
    this.sponsoredCount = sponsoredCount;
    this.partnersCount = partnersCount;
    this.totalCount = totalCount;
  }
  LorittaSamplePayload.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LorittaSamplePayload',
    interfaces: []
  };
  function LorittaServerQueryPayload(result, totalCount) {
    this.result = result;
    this.totalCount = totalCount;
  }
  LorittaServerQueryPayload.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LorittaServerQueryPayload',
    interfaces: []
  };
  function LorittaServerSample(id, iconUrl, invite, name, ownerId, ownerName, ownerDiscriminator, memberCount, onlineCount, hasCustomBackground, backgroundKey, serverEmotes, serverListConfig, voteCount, validVoteCount, canVote, cantVoteReason, canVoteNext, joinedServer, lastBump) {
    this.id = id;
    this.iconUrl = iconUrl;
    this.invite = invite;
    this.name = name;
    this.ownerId = ownerId;
    this.ownerName = ownerName;
    this.ownerDiscriminator = ownerDiscriminator;
    this.memberCount = memberCount;
    this.onlineCount = onlineCount;
    this.hasCustomBackground = hasCustomBackground;
    this.backgroundKey = backgroundKey;
    this.serverEmotes = serverEmotes;
    this.serverListConfig = serverListConfig;
    this.voteCount = voteCount;
    this.validVoteCount = validVoteCount;
    this.canVote = canVote;
    this.cantVoteReason = cantVoteReason;
    this.canVoteNext = canVoteNext;
    this.joinedServer = joinedServer;
    this.lastBump = lastBump;
  }
  LorittaServerSample.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LorittaServerSample',
    interfaces: []
  };
  function getType($receiver) {
    if ($receiver.serverListConfig.isSponsored) {
      var sponsoredUntil = $receiver.serverListConfig.sponsoredUntil;
      if (true || equals(sponsoredUntil, L_1) || sponsoredUntil.toNumber() > (new Date()).getTime()) {
        return LorittaPartner$Type$SPONSOR_getInstance();
      }
    }
    if ($receiver.serverListConfig.isPartner) {
      return LorittaPartner$Type$PARTNER_getInstance();
    }
    return LorittaPartner$Type$NORMAL_getInstance();
  }
  function Member(id, name, discriminator, avatar) {
    this.id = id;
    this.name = name;
    this.discriminator = discriminator;
    this.avatar = avatar;
  }
  Member.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Member',
    interfaces: []
  };
  function Role(id, name, isPublicRole, isManaged, canInteract, color) {
    this.id = id;
    this.name = name;
    this.isPublicRole = isPublicRole;
    this.isManaged = isManaged;
    this.canInteract = canInteract;
    this.color = color;
  }
  Role.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Role',
    interfaces: []
  };
  function ServerConfig(commandPrefix, serverListConfig, moderationConfig, autoroleConfig, textChannelConfigs, defaultTextChannelConfig, joinLeaveConfig, textChannels, roles, emotes, permissions, selfUser, guildName, memberCount) {
    this.commandPrefix = commandPrefix;
    this.serverListConfig = serverListConfig;
    this.moderationConfig = moderationConfig;
    this.autoroleConfig = autoroleConfig;
    this.textChannelConfigs = textChannelConfigs;
    this.defaultTextChannelConfig = defaultTextChannelConfig;
    this.joinLeaveConfig = joinLeaveConfig;
    this.textChannels = textChannels;
    this.roles = roles;
    this.emotes = emotes;
    this.permissions = permissions;
    this.selfUser = selfUser;
    this.guildName = guildName;
    this.memberCount = memberCount;
  }
  ServerConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ServerConfig',
    interfaces: []
  };
  function getTextChannelConfig($receiver, textChannel) {
    return getTextChannelConfig_0($receiver, textChannel.id);
  }
  function getTextChannelConfig_0($receiver, id) {
    var tmp$;
    var $receiver_0 = $receiver.textChannelConfigs;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
        var element = $receiver_0[tmp$_0];
        if (equals(element.id, id)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return (tmp$ = firstOrNull$result) != null ? tmp$ : $receiver.defaultTextChannelConfig;
  }
  function hasTextChannelConfig($receiver, textChannel) {
    return hasTextChannelConfig_0($receiver, textChannel.id);
  }
  function hasTextChannelConfig_0($receiver, id) {
    var $receiver_0 = $receiver.textChannelConfigs;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var element = $receiver_0[tmp$];
        if (equals(element.id, id)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result != null;
  }
  function ShowdownExtension(type, filter) {
    this.type = type;
    this.filter = filter;
  }
  ShowdownExtension.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShowdownExtension',
    interfaces: []
  };
  function TextChannel(id, name, canTalk, topic) {
    this.id = id;
    this.name = name;
    this.canTalk = canTalk;
    this.topic = topic;
  }
  TextChannel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextChannel',
    interfaces: []
  };
  function TextChannelConfig() {
    this.id = null;
    this.isBlacklisted = false;
    this.memberCounterConfig = null;
  }
  TextChannelConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextChannelConfig',
    interfaces: []
  };
  function TingleOptions_0(footer, stickyFooter, closeMethods, closeLabel, cssClass, onOpen, onClose, beforeClose) {
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
  TingleOptions_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TingleOptions',
    interfaces: []
  };
  function RecaptchaOptions(sitekey, callback, size) {
    this.sitekey = sitekey;
    this.callback = callback;
    this.size = size;
  }
  RecaptchaOptions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RecaptchaOptions',
    interfaces: []
  };
  Object.defineProperty(_, 'CommandsView', {
    get: CommandsView_getInstance
  });
  Object.defineProperty(_, 'ConfigureAutoroleView', {
    get: ConfigureAutoroleView_getInstance
  });
  Object.defineProperty(_, 'ConfigureEconomyView', {
    get: ConfigureEconomyView_getInstance
  });
  Object.defineProperty(_, 'ConfigureMemberCounterView', {
    get: ConfigureMemberCounterView_getInstance
  });
  Object.defineProperty(_, 'ConfigureMiscellaneousConfig', {
    get: ConfigureMiscellaneousConfig_getInstance
  });
  Object.defineProperty(_, 'ConfigureModerationView', {
    get: ConfigureModerationView_getInstance
  });
  Object.defineProperty(_, 'ConfigurePartnerView', {
    get: ConfigurePartnerView_getInstance
  });
  Object.defineProperty(_, 'ConfigureProfileView', {
    get: ConfigureProfileView_getInstance
  });
  Object.defineProperty(_, 'ConfigureWelcomerView', {
    get: ConfigureWelcomerView_getInstance
  });
  LoriDashboard.prototype.SUMMARY = LoriDashboard$SUMMARY;
  Object.defineProperty(_, 'LoriDashboard', {
    get: LoriDashboard_getInstance
  });
  _.toString_dqglrj$ = toString_0;
  Object.defineProperty(_, 'LoriServerList', {
    get: LoriServerList_getInstance
  });
  Object.defineProperty(_, 'legacyLocale', {
    get: get_legacyLocale,
    set: set_legacyLocale
  });
  Object.defineProperty(_, 'locale', {
    get: get_locale,
    set: set_locale
  });
  Object.defineProperty(_, 'selfProfile', {
    get: function () {
      return selfProfile;
    },
    set: function (value) {
      selfProfile = value;
    }
  });
  Object.defineProperty(_, 'loriUrl', {
    get: get_loriUrl
  });
  _.jq_61zpoe$ = jq;
  _.toJson_th5c7u$ = toJson;
  _.toJson_s8jyvk$ = toJson_0;
  _.stringify_s8jyvk$ = stringify;
  $$importsForInline$$['kotlinx-serialization-runtime-js'] = $module$kotlinx_serialization_runtime_js;
  _.loadEmbeddedLocale = loadEmbeddedLocale;
  _.main_kand9s$ = main;
  _.testError = testError;
  PartnerView.prototype.PartnerInformation = PartnerView$PartnerInformation;
  PartnerView.prototype.Emote = PartnerView$Emote;
  Object.defineProperty(_, 'PartnerView', {
    get: PartnerView_getInstance
  });
  Object.defineProperty(_, 'SaveStuff', {
    get: SaveStuff_getInstance
  });
  var package$net = _.net || (_.net = {});
  var package$perfectdreams = package$net.perfectdreams || (package$net.perfectdreams = {});
  var package$spicymorenitta = package$perfectdreams.spicymorenitta || (package$perfectdreams.spicymorenitta = {});
  package$spicymorenitta.main_kand9s$ = main_0;
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
    get: get_loriUrl_0
  });
  Object.defineProperty(package$utils, 'Placeholders', {
    get: Placeholders_getInstance
  });
  Object.defineProperty(package$utils, 'SaveUtils', {
    get: SaveUtils_getInstance
  });
  Object.defineProperty(package$utils, 'SpicyDashboard', {
    get: SpicyDashboard_getInstance
  });
  package$utils.TingleOptions = TingleOptions;
  Object.defineProperty(BaseLocale, 'Companion', {
    get: BaseLocale$Companion_getInstance
  });
  Object.defineProperty(BaseLocale, '$serializer', {
    get: BaseLocale$$serializer_getInstance
  });
  var package$locale = package$utils.locale || (package$utils.locale = {});
  package$locale.BaseLocale = BaseLocale;
  Object.defineProperty(DailyView$DailyResponse, 'Companion', {
    get: DailyView$DailyResponse$Companion_getInstance
  });
  Object.defineProperty(DailyView$DailyResponse, '$serializer', {
    get: DailyView$DailyResponse$$serializer_getInstance
  });
  DailyView.prototype.DailyResponse = DailyView$DailyResponse;
  Object.defineProperty(DailyView$Guild, 'Companion', {
    get: DailyView$Guild$Companion_getInstance
  });
  Object.defineProperty(DailyView$Guild, '$serializer', {
    get: DailyView$Guild$$serializer_getInstance
  });
  DailyView.prototype.Guild = DailyView$Guild;
  Object.defineProperty(DailyView$Sponsored, 'Companion', {
    get: DailyView$Sponsored$Companion_getInstance
  });
  Object.defineProperty(DailyView$Sponsored, '$serializer', {
    get: DailyView$Sponsored$$serializer_getInstance
  });
  DailyView.prototype.Sponsored = DailyView$Sponsored;
  var package$views = package$spicymorenitta.views || (package$spicymorenitta.views = {});
  Object.defineProperty(package$views, 'DailyView', {
    get: DailyView_getInstance
  });
  DonateView.prototype.DonationReward = DonateView$DonationReward;
  Object.defineProperty(package$views, 'DonateView', {
    get: DonateView_getInstance
  });
  Object.defineProperty(FanArtsView$FanArtArtist$SocialNetworkWrapper, 'Companion', {
    get: FanArtsView$FanArtArtist$SocialNetworkWrapper$Companion_getInstance
  });
  Object.defineProperty(FanArtsView$FanArtArtist$SocialNetworkWrapper, '$serializer', {
    get: FanArtsView$FanArtArtist$SocialNetworkWrapper$$serializer_getInstance
  });
  FanArtsView$FanArtArtist.SocialNetworkWrapper = FanArtsView$FanArtArtist$SocialNetworkWrapper;
  Object.defineProperty(FanArtsView$FanArtArtist, 'Companion', {
    get: FanArtsView$FanArtArtist$Companion_getInstance
  });
  Object.defineProperty(FanArtsView$FanArtArtist, '$serializer', {
    get: FanArtsView$FanArtArtist$$serializer_getInstance
  });
  FanArtsView.prototype.FanArtArtist = FanArtsView$FanArtArtist;
  Object.defineProperty(FanArtsView$LorittaFanArt, 'Companion', {
    get: FanArtsView$LorittaFanArt$Companion_getInstance
  });
  Object.defineProperty(FanArtsView$LorittaFanArt, '$serializer', {
    get: FanArtsView$LorittaFanArt$$serializer_getInstance
  });
  FanArtsView.prototype.LorittaFanArt = FanArtsView$LorittaFanArt;
  Object.defineProperty(FanArtsView$SocialNetwork, 'DISCORD', {
    get: FanArtsView$SocialNetwork$DISCORD_getInstance
  });
  Object.defineProperty(FanArtsView$SocialNetwork, 'DEVIANTART', {
    get: FanArtsView$SocialNetwork$DEVIANTART_getInstance
  });
  Object.defineProperty(FanArtsView$SocialNetwork, 'TWITTER', {
    get: FanArtsView$SocialNetwork$TWITTER_getInstance
  });
  Object.defineProperty(FanArtsView$SocialNetwork, 'STEAM', {
    get: FanArtsView$SocialNetwork$STEAM_getInstance
  });
  Object.defineProperty(FanArtsView$SocialNetwork, 'YOUTUBE', {
    get: FanArtsView$SocialNetwork$YOUTUBE_getInstance
  });
  Object.defineProperty(FanArtsView$SocialNetwork, 'WEBSITE', {
    get: FanArtsView$SocialNetwork$WEBSITE_getInstance
  });
  Object.defineProperty(FanArtsView$SocialNetwork, 'AMINO', {
    get: FanArtsView$SocialNetwork$AMINO_getInstance
  });
  FanArtsView.prototype.SocialNetwork = FanArtsView$SocialNetwork;
  Object.defineProperty(package$views, 'FanArtsView', {
    get: FanArtsView_getInstance
  });
  Object.defineProperty(ProfileListView$Profile, 'Companion', {
    get: ProfileListView$Profile$Companion_getInstance
  });
  Object.defineProperty(ProfileListView$Profile, '$serializer', {
    get: ProfileListView$Profile$$serializer_getInstance
  });
  ProfileListView.prototype.Profile = ProfileListView$Profile;
  Object.defineProperty(ProfileListView$ProfileLayout, 'Companion', {
    get: ProfileListView$ProfileLayout$Companion_getInstance
  });
  Object.defineProperty(ProfileListView$ProfileLayout, '$serializer', {
    get: ProfileListView$ProfileLayout$$serializer_getInstance
  });
  ProfileListView.prototype.ProfileLayout = ProfileListView$ProfileLayout;
  Object.defineProperty(package$views, 'ProfileListView', {
    get: ProfileListView_getInstance
  });
  Object.defineProperty(package$views, 'ReputationView', {
    get: ReputationView_getInstance
  });
  Object.defineProperty(ShipEffectsView$ShipEffect, 'Companion', {
    get: ShipEffectsView$ShipEffect$Companion_getInstance
  });
  Object.defineProperty(ShipEffectsView$ShipEffect, '$serializer', {
    get: ShipEffectsView$ShipEffect$$serializer_getInstance
  });
  ShipEffectsView.prototype.ShipEffect = ShipEffectsView$ShipEffect;
  Object.defineProperty(package$views, 'ShipEffectsView', {
    get: ShipEffectsView_getInstance
  });
  var package$dashboard = package$views.dashboard || (package$views.dashboard = {});
  Object.defineProperty(package$dashboard, 'BadgeView', {
    get: BadgeView_getInstance
  });
  Object.defineProperty(package$dashboard, 'DailyMultiplierView', {
    get: DailyMultiplierView_getInstance
  });
  Object.defineProperty(PremiumKeyView$MiniGuild, 'Companion', {
    get: PremiumKeyView$MiniGuild$Companion_getInstance
  });
  Object.defineProperty(PremiumKeyView$MiniGuild, '$serializer', {
    get: PremiumKeyView$MiniGuild$$serializer_getInstance
  });
  PremiumKeyView.prototype.MiniGuild = PremiumKeyView$MiniGuild;
  Object.defineProperty(PremiumKeyView$Guild, 'Companion', {
    get: PremiumKeyView$Guild$Companion_getInstance
  });
  Object.defineProperty(PremiumKeyView$Guild, '$serializer', {
    get: PremiumKeyView$Guild$$serializer_getInstance
  });
  PremiumKeyView.prototype.Guild = PremiumKeyView$Guild;
  Object.defineProperty(PremiumKeyView$SelfMember, 'Companion', {
    get: PremiumKeyView$SelfMember$Companion_getInstance
  });
  Object.defineProperty(PremiumKeyView$SelfMember, '$serializer', {
    get: PremiumKeyView$SelfMember$$serializer_getInstance
  });
  PremiumKeyView.prototype.SelfMember = PremiumKeyView$SelfMember;
  Object.defineProperty(PremiumKeyView$DonationKey, 'Companion', {
    get: PremiumKeyView$DonationKey$Companion_getInstance
  });
  Object.defineProperty(PremiumKeyView$DonationKey, '$serializer', {
    get: PremiumKeyView$DonationKey$$serializer_getInstance
  });
  PremiumKeyView.prototype.DonationKey = PremiumKeyView$DonationKey;
  Object.defineProperty(PremiumKeyView$DonationConfig, 'Companion', {
    get: PremiumKeyView$DonationConfig$Companion_getInstance
  });
  Object.defineProperty(PremiumKeyView$DonationConfig, '$serializer', {
    get: PremiumKeyView$DonationConfig$$serializer_getInstance
  });
  PremiumKeyView.prototype.DonationConfig = PremiumKeyView$DonationConfig;
  Object.defineProperty(PremiumKeyView$ReactionOption, 'Companion', {
    get: PremiumKeyView$ReactionOption$Companion_getInstance
  });
  Object.defineProperty(PremiumKeyView$ReactionOption, '$serializer', {
    get: PremiumKeyView$ReactionOption$$serializer_getInstance
  });
  PremiumKeyView.prototype.ReactionOption = PremiumKeyView$ReactionOption;
  Object.defineProperty(PremiumKeyView$DiscordMessage, 'Companion', {
    get: PremiumKeyView$DiscordMessage$Companion_getInstance
  });
  Object.defineProperty(PremiumKeyView$DiscordMessage, '$serializer', {
    get: PremiumKeyView$DiscordMessage$$serializer_getInstance
  });
  PremiumKeyView.prototype.DiscordMessage = PremiumKeyView$DiscordMessage;
  Object.defineProperty(PremiumKeyView$DiscordReaction, 'Companion', {
    get: PremiumKeyView$DiscordReaction$Companion_getInstance
  });
  Object.defineProperty(PremiumKeyView$DiscordReaction, '$serializer', {
    get: PremiumKeyView$DiscordReaction$$serializer_getInstance
  });
  PremiumKeyView.prototype.DiscordReaction = PremiumKeyView$DiscordReaction;
  Object.defineProperty(PremiumKeyView$Role, 'Companion', {
    get: PremiumKeyView$Role$Companion_getInstance
  });
  Object.defineProperty(PremiumKeyView$Role, '$serializer', {
    get: PremiumKeyView$Role$$serializer_getInstance
  });
  PremiumKeyView.prototype.Role = PremiumKeyView$Role;
  Object.defineProperty(package$dashboard, 'PremiumKeyView', {
    get: PremiumKeyView_getInstance
  });
  Object.defineProperty(package$dashboard, 'ReactionRoleView', {
    get: ReactionRoleView_getInstance
  });
  Object.defineProperty(package$dashboard, 'Stuff', {
    get: Stuff_getInstance
  });
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
  Object.defineProperty(package$dashboard, 'TimersView', {
    get: TimersView_getInstance
  });
  AutoroleConfig.RoleVoteReward = AutoroleConfig$RoleVoteReward;
  var package$userdata = _.userdata || (_.userdata = {});
  package$userdata.AutoroleConfig = AutoroleConfig;
  Object.defineProperty(CounterThemes, 'DEFAULT', {
    get: CounterThemes$DEFAULT_getInstance
  });
  Object.defineProperty(CounterThemes, 'RED', {
    get: CounterThemes$RED_getInstance
  });
  Object.defineProperty(CounterThemes, 'GREEN', {
    get: CounterThemes$GREEN_getInstance
  });
  Object.defineProperty(CounterThemes, 'BLURPLE', {
    get: CounterThemes$BLURPLE_getInstance
  });
  Object.defineProperty(CounterThemes, 'BLACK', {
    get: CounterThemes$BLACK_getInstance
  });
  Object.defineProperty(CounterThemes, 'DELUXE', {
    get: CounterThemes$DELUXE_getInstance
  });
  Object.defineProperty(CounterThemes, 'LORITTA', {
    get: CounterThemes$LORITTA_getInstance
  });
  Object.defineProperty(CounterThemes, 'LORITTA_KAWAI', {
    get: CounterThemes$LORITTA_KAWAI_getInstance
  });
  package$userdata.CounterThemes = CounterThemes;
  Object.defineProperty(package$userdata, 'CounterUtils', {
    get: CounterUtils_getInstance
  });
  package$userdata.EconomyConfig = EconomyConfig;
  package$userdata.MemberCounterConfig = MemberCounterConfig;
  ModerationConfig.WarnAction = ModerationConfig$WarnAction;
  ModerationConfig.Warn = ModerationConfig$Warn;
  Object.defineProperty(ModerationConfig$PunishmentAction, 'BAN', {
    get: ModerationConfig$PunishmentAction$BAN_getInstance
  });
  Object.defineProperty(ModerationConfig$PunishmentAction, 'SOFT_BAN', {
    get: ModerationConfig$PunishmentAction$SOFT_BAN_getInstance
  });
  Object.defineProperty(ModerationConfig$PunishmentAction, 'KICK', {
    get: ModerationConfig$PunishmentAction$KICK_getInstance
  });
  Object.defineProperty(ModerationConfig$PunishmentAction, 'MUTE', {
    get: ModerationConfig$PunishmentAction$MUTE_getInstance
  });
  ModerationConfig.PunishmentAction = ModerationConfig$PunishmentAction;
  package$userdata.ModerationConfig = ModerationConfig;
  package$userdata.PartnerConfig = PartnerConfig;
  ServerListConfig.ServerVote = ServerListConfig$ServerVote;
  package$userdata.ServerListConfig = ServerListConfig;
  package$userdata.StoreItem = StoreItem;
  package$userdata.WelcomerConfig = WelcomerConfig;
  var package$utils_0 = _.utils || (_.utils = {});
  package$utils_0.AbstractCommand = AbstractCommand;
  Object.defineProperty(CommandCategory, 'FUN', {
    get: CommandCategory$FUN_getInstance
  });
  Object.defineProperty(CommandCategory, 'IMAGES', {
    get: CommandCategory$IMAGES_getInstance
  });
  Object.defineProperty(CommandCategory, 'MINECRAFT', {
    get: CommandCategory$MINECRAFT_getInstance
  });
  Object.defineProperty(CommandCategory, 'POKEMON', {
    get: CommandCategory$POKEMON_getInstance
  });
  Object.defineProperty(CommandCategory, 'UNDERTALE', {
    get: CommandCategory$UNDERTALE_getInstance
  });
  Object.defineProperty(CommandCategory, 'ROBLOX', {
    get: CommandCategory$ROBLOX_getInstance
  });
  Object.defineProperty(CommandCategory, 'ANIME', {
    get: CommandCategory$ANIME_getInstance
  });
  Object.defineProperty(CommandCategory, 'DISCORD', {
    get: CommandCategory$DISCORD_getInstance
  });
  Object.defineProperty(CommandCategory, 'MISC', {
    get: CommandCategory$MISC_getInstance
  });
  Object.defineProperty(CommandCategory, 'ADMIN', {
    get: CommandCategory$ADMIN_getInstance
  });
  Object.defineProperty(CommandCategory, 'UTILS', {
    get: CommandCategory$UTILS_getInstance
  });
  Object.defineProperty(CommandCategory, 'SOCIAL', {
    get: CommandCategory$SOCIAL_getInstance
  });
  Object.defineProperty(CommandCategory, 'ECONOMY', {
    get: CommandCategory$ECONOMY_getInstance
  });
  Object.defineProperty(CommandCategory, 'MUSIC', {
    get: CommandCategory$MUSIC_getInstance
  });
  Object.defineProperty(CommandCategory, 'MAGIC', {
    get: CommandCategory$MAGIC_getInstance
  });
  package$utils_0.CommandCategory = CommandCategory;
  package$utils_0.CountUpOptions = CountUpOptions;
  package$utils_0.Emote = Emote;
  Object.defineProperty(LegacyBaseLocale, 'Companion', {
    get: LegacyBaseLocale$Companion_getInstance
  });
  package$utils_0.LegacyBaseLocale = LegacyBaseLocale;
  package$utils_0.LoriColor = LoriColor;
  Object.defineProperty(package$utils_0, 'LoriWebCodes', {
    get: LoriWebCodes_getInstance
  });
  package$utils_0.LorittaDailyPayload = LorittaDailyPayload;
  Object.defineProperty(LorittaPartner$Keyword, 'GAMING', {
    get: LorittaPartner$Keyword$GAMING_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'ENTERTAINMENT', {
    get: LorittaPartner$Keyword$ENTERTAINMENT_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'ANIME_AND_MANGA', {
    get: LorittaPartner$Keyword$ANIME_AND_MANGA_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'TELEVISION', {
    get: LorittaPartner$Keyword$TELEVISION_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'ROLEPLAYING', {
    get: LorittaPartner$Keyword$ROLEPLAYING_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'GIVEAWAYS', {
    get: LorittaPartner$Keyword$GIVEAWAYS_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'MEMES', {
    get: LorittaPartner$Keyword$MEMES_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'COMMUNITY', {
    get: LorittaPartner$Keyword$COMMUNITY_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'PROGRAMMING', {
    get: LorittaPartner$Keyword$PROGRAMMING_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'MUSIC', {
    get: LorittaPartner$Keyword$MUSIC_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'MOVIES', {
    get: LorittaPartner$Keyword$MOVIES_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'YOUTUBER', {
    get: LorittaPartner$Keyword$YOUTUBER_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'STREAMER', {
    get: LorittaPartner$Keyword$STREAMER_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'DISCUSSION', {
    get: LorittaPartner$Keyword$DISCUSSION_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'EMOTES', {
    get: LorittaPartner$Keyword$EMOTES_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'NEWS', {
    get: LorittaPartner$Keyword$NEWS_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'ART', {
    get: LorittaPartner$Keyword$ART_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'BOTS', {
    get: LorittaPartner$Keyword$BOTS_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'FASHION_AND_BEAUTY', {
    get: LorittaPartner$Keyword$FASHION_AND_BEAUTY_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'SOFTWARE', {
    get: LorittaPartner$Keyword$SOFTWARE_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'HARDWARE', {
    get: LorittaPartner$Keyword$HARDWARE_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'AESTHETICS', {
    get: LorittaPartner$Keyword$AESTHETICS_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'HOBBIES', {
    get: LorittaPartner$Keyword$HOBBIES_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'CHIT_CHAT', {
    get: LorittaPartner$Keyword$CHIT_CHAT_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'KPOP_AND_KOREAN_CULTURE', {
    get: LorittaPartner$Keyword$KPOP_AND_KOREAN_CULTURE_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'TERROR_AND_CREEPYPASTA', {
    get: LorittaPartner$Keyword$TERROR_AND_CREEPYPASTA_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'LIFE_STYLE', {
    get: LorittaPartner$Keyword$LIFE_STYLE_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'BOOKS_AND_WRITING', {
    get: LorittaPartner$Keyword$BOOKS_AND_WRITING_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'SPORTS', {
    get: LorittaPartner$Keyword$SPORTS_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'FITNESS_AND_HEALTH', {
    get: LorittaPartner$Keyword$FITNESS_AND_HEALTH_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'INTERNET_CULTURE', {
    get: LorittaPartner$Keyword$INTERNET_CULTURE_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'FOOD', {
    get: LorittaPartner$Keyword$FOOD_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'NATURE_AND_SCIENCE', {
    get: LorittaPartner$Keyword$NATURE_AND_SCIENCE_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'CRYPTOCURRENCY', {
    get: LorittaPartner$Keyword$CRYPTOCURRENCY_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'TECNOLOGY', {
    get: LorittaPartner$Keyword$TECNOLOGY_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'FURRY', {
    get: LorittaPartner$Keyword$FURRY_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'NSFW', {
    get: LorittaPartner$Keyword$NSFW_getInstance
  });
  LorittaPartner.prototype.Keyword = LorittaPartner$Keyword;
  LorittaPartner.prototype.Language = LorittaPartner$Language;
  Object.defineProperty(LorittaPartner$Type, 'SPONSOR', {
    get: LorittaPartner$Type$SPONSOR_getInstance
  });
  Object.defineProperty(LorittaPartner$Type, 'PARTNER', {
    get: LorittaPartner$Type$PARTNER_getInstance
  });
  Object.defineProperty(LorittaPartner$Type, 'NORMAL', {
    get: LorittaPartner$Type$NORMAL_getInstance
  });
  LorittaPartner.prototype.Type = LorittaPartner$Type;
  Object.defineProperty(package$utils_0, 'LorittaPartner', {
    get: LorittaPartner_getInstance
  });
  package$utils_0.LorittaProfile = LorittaProfile;
  package$utils_0.LorittaSamplePayload = LorittaSamplePayload;
  package$utils_0.LorittaServerQueryPayload = LorittaServerQueryPayload;
  package$utils_0.LorittaServerSample = LorittaServerSample;
  package$utils_0.getType_17hplk$ = getType;
  package$utils_0.Member = Member;
  package$utils_0.Role = Role;
  package$utils_0.ServerConfig = ServerConfig;
  package$utils_0.getTextChannelConfig_zc3ojw$ = getTextChannelConfig;
  package$utils_0.getTextChannelConfig_r43l01$ = getTextChannelConfig_0;
  package$utils_0.hasTextChannelConfig_zc3ojw$ = hasTextChannelConfig;
  package$utils_0.hasTextChannelConfig_r43l01$ = hasTextChannelConfig_0;
  package$utils_0.ShowdownExtension = ShowdownExtension;
  package$utils_0.TextChannel = TextChannel;
  package$utils_0.TextChannelConfig = TextChannelConfig;
  package$utils_0.TingleOptions = TingleOptions_0;
  package$utils_0.RecaptchaOptions = RecaptchaOptions;
  BaseLocale$$serializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  DailyView$DailyResponse$$serializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  DailyView$Guild$$serializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  DailyView$Sponsored$$serializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  FanArtsView$FanArtArtist$SocialNetworkWrapper$$serializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  FanArtsView$FanArtArtist$$serializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  FanArtsView$LorittaFanArt$$serializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  ProfileListView$Profile$$serializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  ProfileListView$ProfileLayout$$serializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  ShipEffectsView$ShipEffect$$serializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  PremiumKeyView$MiniGuild$$serializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  PremiumKeyView$Guild$$serializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  PremiumKeyView$SelfMember$$serializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  PremiumKeyView$DonationKey$$serializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  PremiumKeyView$DonationConfig$$serializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  PremiumKeyView$ReactionOption$$serializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  PremiumKeyView$DiscordMessage$$serializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  PremiumKeyView$DiscordReaction$$serializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  PremiumKeyView$Role$$serializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  TimersView$Timer$TimerEffect$TimerEffectText$$serializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  TimersView$Timer$TimerEffect$TimerEffectCommand$$serializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  TimersView$Timer$TimerEffect$$serializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  TimersView$Timer$$serializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  selfProfile = null;
  page = new BetterDocument(document);
  main([]);
  Kotlin.defineModule('SpicyMorenitta', _);
  return _;
}(typeof SpicyMorenitta === 'undefined' ? {} : SpicyMorenitta, kotlin, this['kotlinx-html-js'], this['kotlinx-serialization-runtime-js'], this['kotlinx-coroutines-core']);
