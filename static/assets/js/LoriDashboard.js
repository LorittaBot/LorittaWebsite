if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'SpicyMorenitta'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'SpicyMorenitta'.");
}
if (typeof SpicyMorenitta === 'undefined') {
  throw new Error("Error loading module 'SpicyMorenitta'. Its dependency 'SpicyMorenitta' was not found. Please, check whether 'SpicyMorenitta' is loaded prior to 'SpicyMorenitta'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'SpicyMorenitta'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'SpicyMorenitta'.");
}
var SpicyMorenitta = function (_, Kotlin, $module$SpicyMorenitta, $module$kotlinx_html_js) {
  'use strict';
  var anonymous = $module$SpicyMorenitta;
  var equals = Kotlin.equals;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var appendHTML = $module$kotlinx_html_js.kotlinx.html.stream.appendHTML_9kwp7w$;
  var Unit = Kotlin.kotlin.Unit;
  var h2 = $module$kotlinx_html_js.kotlinx.html.h2_eh5gi3$;
  var p = $module$kotlinx_html_js.kotlinx.html.p_8pggrc$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var set_style = $module$kotlinx_html_js.kotlinx.html.set_style_ueiko3$;
  var ins = $module$kotlinx_html_js.kotlinx.html.ins_g1dqgd$;
  var script = $module$kotlinx_html_js.kotlinx.html.script_fglb7v$;
  var img = $module$kotlinx_html_js.kotlinx.html.img_evw26v$;
  var hr = $module$kotlinx_html_js.kotlinx.html.hr_17yvwq$;
  var joinToString = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.div_59el9d$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var jq = $module$SpicyMorenitta.jq_61zpoe$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var throwUPAE = Kotlin.throwUPAE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var contains = Kotlin.kotlin.collections.contains_mjy6jw$;
  var throwCCE = Kotlin.throwCCE;
  var TingleOptions = $module$SpicyMorenitta.utils.TingleOptions;
  var TingleModal = tingle.modal;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var hashCode = Kotlin.hashCode;
  var toString = Kotlin.toString;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var Pair = Kotlin.kotlin.Pair;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var ShowdownConverter = showdown.Converter;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var slice = Kotlin.kotlin.text.slice_fc3b62$;
  var unsafe = $module$kotlinx_html_js.kotlinx.html.unsafe_vdrn79$;
  var a = $module$kotlinx_html_js.kotlinx.html.a_gu26kr$;
  var span = $module$kotlinx_html_js.kotlinx.html.span_6djfml$;
  var RegexOption = Kotlin.kotlin.text.RegexOption;
  var Regex_init = Kotlin.kotlin.text.Regex_init_sb3q2$;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  CounterThemeName.prototype = Object.create(Enum.prototype);
  CounterThemeName.prototype.constructor = CounterThemeName;
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
      $receiver.unaryPlus_pdl1vz$(anonymous.locale.get_25kzsl$(closure$category.fancyTitle, []));
      return Unit;
    };
  }
  function CommandsView$start$lambda$lambda$addCommandInformation$lambda$lambda_0(closure$category) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(anonymous.locale.get_25kzsl$(closure$category.description, []));
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
  function CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(it) {
    return '+' + it;
  }
  function CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$command) {
    return function ($receiver) {
      set_style($receiver, 'opacity: 0.6;');
      $receiver.unaryPlus_pdl1vz$(joinToString(closure$command.aliases, ', ', void 0, void 0, void 0, void 0, CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1));
      return Unit;
    };
  }
  function CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$command) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$command.description);
      return Unit;
    };
  }
  function CommandsView$start$lambda$lambda$lambda$lambda$lambda_0(closure$command) {
    return function ($receiver) {
      var tmp$;
      var usage = {v: (tmp$ = closure$command.usage) != null ? tmp$ : ''};
      p($receiver, void 0, CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$command, usage));
      p($receiver, void 0, CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$command));
      p($receiver, void 0, CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$command));
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
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function CommandsView$start$lambda(data, b, c) {
    var tmp$;
    SpicyMorenitta_getInstance().hideLoadingBar();
    var commands = toJson(data);
    tmp$ = CommandCategory$values();
    for (var index = 0; index !== tmp$.length; ++index) {
      var category = tmp$[index];
      var tmp$_0, tmp$_1;
      var destination = ArrayList_init();
      var tmp$_2;
      for (tmp$_2 = 0; tmp$_2 !== commands.length; ++tmp$_2) {
        var element = commands[tmp$_2];
        if (equals(element.category.toString(), category.toString()))
          destination.add_11rb$(element);
      }
      var filteredCommands = destination;
      var stringBuilder = new StringBuilder();
      switch (category.name) {
        case 'SOCIAL':
          tmp$_0 = anonymous.loriUrl + 'assets/img/social.png';
          break;
        case 'POKEMON':
          tmp$_0 = anonymous.loriUrl + 'assets/img/pokemon.png';
          break;
        case 'MINECRAFT':
          tmp$_0 = anonymous.loriUrl + 'assets/img/loritta_pudim.png';
          break;
        case 'FUN':
          tmp$_0 = anonymous.loriUrl + 'assets/img/vieirinha.png';
          break;
        case 'UTILS':
          tmp$_0 = anonymous.loriUrl + 'assets/img/utils.png';
          break;
        case 'MUSIC':
          tmp$_0 = anonymous.loriUrl + 'assets/img/loritta_headset.png';
          break;
        case 'ANIME':
          tmp$_0 = anonymous.loriUrl + 'assets/img/loritta_anime.png';
          break;
        default:tmp$_0 = anonymous.loriUrl + 'assets/img/loritta_gabizinha_v1.png';
          break;
      }
      var image = {v: tmp$_0};
      div_0(appendHTML(stringBuilder), index % 2 === 0 ? 'evenWrapper' : 'oddWrapper', CommandsView$start$lambda$lambda(category, index, image, filteredCommands));
      tmp$_1 = filteredCommands.iterator();
      while (tmp$_1.hasNext()) {
        var cmd = tmp$_1.next();
      }
      println(category);
      jq('#wrapper').append(stringBuilder.toString());
    }
    return Unit;
  }
  CommandsView.prototype.start = function () {
    SpicyMorenitta_getInstance().showLoadingBar_pdl1vj$('Carregando...');
    jQuery.post(anonymous.loriUrl + 'api/v1/misc/get-commands', CommandsView$start$lambda);
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
      this$ConfigureAutoroleView.serverConfig = SpicyMorenitta_getInstance().loadServerConfig();
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
            option.text = text + ' <span class=' + '"' + 'keyword' + '"' + ' style=' + '"' + 'background-color: rgb(225, 149, 23);' + '"' + '>' + anonymous.locale.get_25kzsl$('DASHBOARD_RoleByIntegration', []) + '<\/span>';
          }
           else {
            option.text = text + ' <span class=' + '"' + 'keyword' + '"' + ' style=' + '"' + 'background-color: rgb(231, 76, 60);' + '"' + '>' + anonymous.locale.get_25kzsl$('DASHBOARD_NoPermission', []) + '<\/span>';
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
      SpicyMorenitta_getInstance().applyBlur_puj7f4$('#hiddenIfDisabled', '#cmn-toggle-1');
      if (!contains(this$ConfigureAutoroleView.serverConfig.permissions, 'ADMINISTRATOR') && !contains(this$ConfigureAutoroleView.serverConfig.permissions, 'MANAGE_ROLES')) {
        SpicyMorenitta_getInstance().enableBlur_61zpoe$('#autoroleConfigurationWrapper');
        jq('#requiresPermission').html(anonymous.locale.get_25kzsl$('DASHBOARD_HeyINeedPermission', ['<b>' + anonymous.locale.get_25kzsl$('PERMISSION_MANAGE_ROLES', []) + '<\/b>']));
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
        var modal = new TingleModal(new TingleOptions(true, void 0, void 0, void 0, ['tingle-modal--overflow']));
        if (role.isManaged) {
          modal.setContent(jq('<div>').append(jq('<div>').addClass('category-name').text(anonymous.locale.get_25kzsl$('DASHBOARD_RoleByIntegration', []))).append(jq('<div>').css('text-align', 'center').append(jq('<p>').text('Cargos criados por integra\xE7\xF5es (por exemplo: ao adicionar um bot) n\xE3o podem ser utilizados para dar cargos para outros membros!'))).html());
        }
         else {
          modal.setContent(jq('<div>').append(jq('<div>').addClass('category-name').text(anonymous.locale.get_25kzsl$('DASHBOARD_NoPermission', []))).append(jq('<div>').css('text-align', 'center').append(jq('<img>').attr('src', 'https://mrpowergamerbr.com/uploads/2018-06-16_19-37-17.gif'))).append(jq('<div>').css('text-align', 'center').append(jq('<p>').text('Atualmente eu n\xE3o consigo dar o cargo que voc\xEA deseja porque eu n\xE3o tenho permiss\xE3o para isto... \uD83D\uDE2D')).append(jq('<p>').text('Para eu conseguir dar este cargo, mova o meu cargo para acima do cargo que voc\xEA deseja dar na lista de cargos do seu Discord!'))).html());
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
    var roles = ArrayList_init();
    var rolesVoteRewards = ArrayList_init();
    jq('#roleTable').children().each(ConfigureAutoroleView$prepareSave$lambda$lambda(roles));
    payload['roles'] = roles;
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
    var modal = new TingleModal(new TingleOptions(true, void 0, void 0, void 0, ['tingle-modal--overflow']));
    modal.addFooterBtn('<i class="fas fa-plus"><\/i> Adicionar', 'button-discord button-discord-info pure-button button-discord-modal', ConfigureEconomyView$start$lambda$lambda$lambda(modal));
    modal.addFooterBtn('<i class="fas fa-times"><\/i> Cancelar', 'button-discord pure-button button-discord-modal button-discord-modal-secondary-action', ConfigureEconomyView$start$lambda$lambda$lambda_0(modal));
    var template = jq('#new-item-modal-template').clone();
    template.find('.sectionHeader').text('Novo Item');
    modal.setContent(template.html());
    modal.open();
    return Unit;
  }
  function ConfigureEconomyView$start$lambda(it) {
    var serverConfig = SpicyMorenitta_getInstance().loadServerConfig();
    SpicyMorenitta_getInstance().applyBlur_puj7f4$('#hiddenIfDisabled', '#cmn-toggle-1');
    SpicyMorenitta_getInstance().applyBlur_puj7f4$('#hiddenIfDisabled2', '#cmn-toggle-2');
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
  function ConfigureMemberCounterView$start$lambda(this$ConfigureMemberCounterView) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      this$ConfigureMemberCounterView.serverConfig = SpicyMorenitta_getInstance().loadServerConfig();
      var textChannels = jq('#member-counter-list');
      tmp$ = this$ConfigureMemberCounterView.serverConfig.textChannels;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var textChannel = tmp$[tmp$_0];
        var memberCounterConfig = getTextChannelConfig(this$ConfigureMemberCounterView.serverConfig, textChannel).memberCounterConfig;
        println(memberCounterConfig);
        var entry = jq('<div>').attr('data-text-channel-id', textChannel.id);
        entry.append(jq('<div>').attr('class', 'flavourText').text('#' + textChannel.name));
        var toggle = SpicyMorenitta_getInstance().createToggle_8jgccd$('enableCounter', 'Ativar contador de membros', 'Ap\xF3s ativar, utilize {counter} no texto do seu t\xF3pico para ativar o contador!', false, memberCounterConfig != null);
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
        entry.append(textAreaWrapper);
        entry.append('<hr>');
        textChannels.append(entry);
        SpicyMorenitta_getInstance().applyBlur_puj7f4$('#text-area-wrapper-' + textChannel.id, '#cmn-toggle-' + toggle.first.toString());
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
      var tmp$;
      var elem = jQuery(_elem);
      var textChannelId = elem.attr('data-text-channel-id');
      var isEnabled = elem.find('.cmn-toggle').is(':checked');
      if (isEnabled) {
        var dyn = new ConfigureMemberCounterView$prepareSave$lambda$lambda$ObjectLiteral();
        dyn.id = textChannelId;
        dyn.memberCountConfig = new MemberCounterConfig(typeof (tmp$ = elem.find('#text-area-' + textChannelId).val()) === 'string' ? tmp$ : throwCCE(), CounterThemeName$DEFAULT_getInstance().name);
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
    var serverConfig = SpicyMorenitta_getInstance().loadServerConfig();
    return Unit;
  }
  ConfigureMiscellaneousConfig.prototype.start = function () {
    SpicyMorenitta_getInstance().showLoadingBar_pdl1vj$('Carregando...');
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
      var serverConfig = SpicyMorenitta_getInstance().loadServerConfig();
      tmp$ = serverConfig.moderationConfig.punishmentActions;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var punishment = tmp$[tmp$_0];
        this$ConfigureModerationView.addPunishment_a3smtl$(punishment);
      }
      SpicyMorenitta_getInstance().applyBlur_puj7f4$('#hiddenIfDisabled', '#cmn-toggle-2');
      SpicyMorenitta_getInstance().configureTextChannelSelect_mtmww3$(jq('#punishmentLogChannelId'), serverConfig, serverConfig.moderationConfig.punishmentLogChannelId);
      jq('.add-new-action').click(ConfigureModerationView$start$lambda$lambda(this$ConfigureModerationView));
      SpicyMorenitta_getInstance().configureTextArea_ntroki$(jq('#punishmentLogMessage'), true, serverConfig, true, jq('#punishmentLogChannelId'));
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
      var option = jq('<option>').attr('name', anonymous.locale.get_25kzsl$(replace(punishment.toString(), '_', '') + '_PunishName', [])).attr('value', punishment.toString()).text(anonymous.locale.get_25kzsl$(replace(punishment.toString(), '_', '') + '_PunishName', []));
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
      var serverConfig = SpicyMorenitta_getInstance().loadServerConfig();
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
        tmp$_2 = jq('<span>').text(' ' + anonymous.locale.get_25kzsl$('KEYWORD_' + keyword.toString(), [])).addClass('keyword');
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
      SpicyMorenitta_getInstance().applyBlur_puj7f4$('#hiddenIfDisabled', '#cmn-toggle-1');
      SpicyMorenitta_getInstance().applyBlur_puj7f4$('#hiddenIfDisabled3', '#cmn-toggle-2');
      SpicyMorenitta_getInstance().applyBlur_puj7f4$('#hiddenIfDisabled4', '#cmn-toggle-3');
      SpicyMorenitta_getInstance().configureTextArea_ntroki$(jq('#voteBroadcastMessage'), true, serverConfig, true, jq('#chooseChannel'));
      SpicyMorenitta_getInstance().configureTextArea_ntroki$(jq('#promoteBroadcastMessage'), true, serverConfig, true, jq('#chooseChannel2'));
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
    this.vanityUrlExample.text(anonymous.loriUrl + 's/' + vanityUrl);
    this.vanityUrlExample.attr('src', anonymous.loriUrl + 's/' + vanityUrl);
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
      var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
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
    SaveStuff_getInstance().prepareSave('profile', void 0, void 0, anonymous.loriUrl + 'api/v1/lori/save-self-profile');
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
    var serverConfig = SpicyMorenitta_getInstance().loadServerConfig();
    if (serverConfig.joinLeaveConfig.deleteJoinMessagesAfter != null)
      jq('#deleteJoinMessagesAfter').val(ensureNotNull(serverConfig.joinLeaveConfig.deleteJoinMessagesAfter));
    if (serverConfig.joinLeaveConfig.deleteLeaveMessagesAfter != null)
      jq('#deleteLeaveMessagesAfter').val(ensureNotNull(serverConfig.joinLeaveConfig.deleteLeaveMessagesAfter));
    SpicyMorenitta_getInstance().applyBlur_puj7f4$('#hiddenIfDisabled', '#cmn-toggle-1');
    SpicyMorenitta_getInstance().configureTextChannelSelect_mtmww3$(jq('#canalJoinId'), serverConfig, serverConfig.joinLeaveConfig.canalJoinId);
    SpicyMorenitta_getInstance().configureTextChannelSelect_mtmww3$(jq('#canalLeaveId'), serverConfig, serverConfig.joinLeaveConfig.canalLeaveId);
    SpicyMorenitta_getInstance().configureTextArea_ntroki$(jq('#joinMessage'), true, serverConfig, true, jq('#canalJoinId'));
    SpicyMorenitta_getInstance().configureTextArea_ntroki$(jq('#leaveMessage'), true, serverConfig, true, jq('#canalLeaveId'));
    SpicyMorenitta_getInstance().configureTextArea_ntroki$(jq('#joinPrivateMessage'), true, serverConfig, true, null);
    SpicyMorenitta_getInstance().configureTextArea_ntroki$(jq('#banMessage'), true, serverConfig, true, jq('#canalLeaveId'));
    SpicyMorenitta_getInstance().configureTextArea_ntroki$(jq('#kickMessage'), true, serverConfig, true, jq('#canalLeaveId'));
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
  function DonateView() {
    DonateView_instance = this;
  }
  DonateView.prototype.start = function () {
    var tmp$, tmp$_0;
    var tiers = ArrayList_init();
    var reward1 = listOf('Obrigado por ajudar a Loritta a ficar online!');
    var reward3 = listOf_0(['A sensa\xE7\xE3o de ser incr\xEDvel!', "Seu nome ser\xE1 adicionado ao comando de <code class='inline'>+contribuidores<\/code>!", "Voc\xEA ter\xE1 acesso a um canal de texto e voz exclusivo apenas para quem contribui para mim, com v\xE1rios assuntos exclusivos para contribuidores! <img src='https://cdn.discordapp.com/emojis/353898172923510784.png?v=1' class='inline-emoji'>", "Voc\xEA ir\xE1 ganhar um cargo exclusivo no <a href='" + anonymous.loriUrl + "support'>meu servidor<\/a>!", "Voc\xEA ir\xE1 receber uma badge exclusiva no <code class='inline'>+perfil<\/code>!", "Voc\xEA poder\xE1 deixar o seu servidor como patrocinado na <a href='" + anonymous.loriUrl + "servers'>Lori's Server List<\/a> por 30 dias! (Quanto mais voc\xEA doar, mais chance de voc\xEA aparecer no topo da lista de servidores patrocinados!)", "Voc\xEA poder\xE1 participar de sorteios que poder\xE3o acontecer no <a href='" + anonymous.loriUrl + "support'>meu servidor<\/a>!", 'Eu n\xE3o queria dizer nada, mas quem doa tem um b\xF4nus:<br><iframe width="280" height="157" src="https://www.youtube.com/embed/J8gWll4ItiU?start=334" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen><\/iframe>']);
    var reward10 = listOf_0(["Voc\xEA poder\xE1 usar o <code class='inline'>+volume<\/code>, para controlar o som do seu batid\xE3o! <img src='https://cdn.discordapp.com/emojis/422448021016543232.gif?v=1' class='inline-emoji'>", "Voc\xEA poder\xE1 alterar a cor do seu nome no <a href='" + anonymous.loriUrl + "support'>meu servidor<\/a>! <img src='https://cdn.discordapp.com/emojis/446735085161545728.gif?v=1' class='inline-emoji'>", "Voc\xEA ter\xE1 o seu nome nos finais dos v\xEDdeos do <a href='https://www.youtube.com/c/MrPowerGamerBR'>meu canal<\/a>! (As vezes... quando ele lembrar de colocar... j\xE1 que ele quase nem grava v\xEDdeos <img src='https://cdn.discordapp.com/emojis/396521773178552331.png?v=1' class='inline-emoji'>)", 'Voc\xEA ter\xE1 prioridade nas sugest\xF5es, precisa de uma fun\xE7\xE3o na Loritta? Ent\xE3o vou fazer ela! (Desde que seja poss\xEDvel fazer, que n\xE3o seja in\xE9tico, que n\xE3o fuja do prop\xF3sito da Loritta e, \xE9 claro, se eu tenho tempo para fazer ela!)']);
    tiers.add_11rb$(new DonateView$RewardTier('\xC9 pouco, mas espero que ajude!', 'https://cdn.discordapp.com/emojis/396521772691881987.png?v=1', 0.01, reward1));
    tiers.add_11rb$(new DonateView$RewardTier('Eu quero ajudar a Loritta!', 'https://cdn.discordapp.com/emojis/425371746930262018.png?v=1', 4.99, reward3));
    tiers.add_11rb$(new DonateView$RewardTier('Eu gosto da Loritta (Como amiga, \xE9 claro)', 'https://cdn.discordapp.com/emojis/414222275223617546.png?v=1', 9.99, reward10));
    tiers.add_11rb$(new DonateView$RewardTier('Eu amo a Loritta! (Como amiga, \xE9 claro)', 'https://cdn.discordapp.com/emojis/417813932380520448.png?v=1', 19.99, listOf_0(['O limite m\xE1ximo de sonhos que voc\xEA pode ganhar no sonhos di\xE1rio ser\xE1 aumentado de 3600 sonhos para 3900 sonhos!', "Tempo de espera entre comandos reduzido na maioria dos comandos! <img src='https://discordemoji.com/assets/emoji/SonicWaiting.gif' class='inline-emoji'>", "Ao receber uma reputa\xE7\xE3o, voc\xEA ter\xE1 5% de chance de eu te dar uma reputa\xE7\xE3o tamb\xE9m! <img src='https://cdn.discordapp.com/emojis/393755269890310164.gif?v=1' class='inline-emoji'>", "Seu nome ficar\xE1 em negrito no <code class='inline'>+contribuidores<\/code>!"])));
    tiers.add_11rb$(new DonateView$RewardTier('Eu adoro a Loritta! (Como amiga, \xE9 claro)', 'https://cdn.discordapp.com/emojis/331179879582269451.png?v=1', 29.99, listOf_0(["Voc\xEA ganhar\xE1 x1.25 XP global! <img src='https://cdn.discordapp.com/emojis/432531424671694849.png?v=1' class='inline-emoji'>", 'Voc\xEA ganhar\xE1 7500 sonhos!', "Caso voc\xEA queria virar um parceiro na Lori's Server List, o requisito de membros ser\xE1 abaixado de 850 membros para 500 membros! (Mas cuidado, voc\xEA ainda ter\xE1 que ter um servidor ativo!)", 'Voc\xEA poder\xE1 adicionar uma vers\xE3o premium minha no seu servidor! ...o que a vers\xE3o premium faz? Nada! Mas voc\xEA pode mostrar como voc\xEA \xE9 ostentador no seu servidor!'])));
    tiers.add_11rb$(new DonateView$RewardTier('Eu venero a Loritta!', 'https://cdn.discordapp.com/emojis/338679059188023296.png?v=1', 39.99, listOf_0(['O limite m\xE1ximo de sonhos que voc\xEA pode ganhar no sonhos di\xE1rio ser\xE1 aumentado de 3600 sonhos para 4200 sonhos!', 'Como b\xF4nus pela sua generosidade, voc\xEA ir\xE1 ganhar +1 key da Loritta para voc\xEA dar para os seus amigos!', "Ao receber uma reputa\xE7\xE3o, voc\xEA ter\xE1 25% de chance de eu te dar uma reputa\xE7\xE3o tamb\xE9m! <img src='https://cdn.discordapp.com/emojis/393755269890310164.gif?v=1' class='inline-emoji'>"])));
    tiers.add_11rb$(new DonateView$RewardTier('Eu cultuo a Loritta!', 'https://cdn.discordapp.com/emojis/357939361079230464.png?v=1', 49.99, listOf_0(["Voc\xEA ganhar\xE1 x1.5 XP global! <img src='https://cdn.discordapp.com/emojis/432531424671694849.png?v=1' class='inline-emoji'>", 'Voc\xEA ganhar\xE1 7500 sonhos!', "Voc\xEA poder\xE1 colocar uma resposta personalizada em todos os servidores ao falar \"@Loritta Morenitta \uD83D\uDE18 insira algo aqui\" e ela ir\xE1 responder algo que voc\xEA queria! (Desde que n\xE3o seja uma resposta inapropriada ou que seja divulga\xE7\xE3o) <a href='https://cdn.discordapp.com/emojis/396521401860751362.png?v=1' class='inline-emoji'>", "Voc\xEA poder\xE1 colocar um convite ao lado do seu nome no <code class='inline'>+contribuidores<\/code>!", "Voc\xEA ganhar\xE1 mais outro cargo exclusivo no <a href='" + anonymous.loriUrl + "support'>meu servidor<\/a>! A diferen\xE7a entre o antigo cargo e novo? O novo \xE9 <b>super<\/b>! <img src='https://cdn.discordapp.com/emojis/429715687317962772.png?v=1' class='inline-emoji'>"])));
    tiers.add_11rb$(new DonateView$RewardTier('Eu idolatro a Loritta!', 'https://cdn.discordapp.com/emojis/432530033186308106.png?v=1', 59.99, listOf_0(['O limite m\xE1ximo de sonhos que voc\xEA pode ganhar no sonhos di\xE1rio ser\xE1 aumentado de 3600 sonhos para 4500 sonhos!', "Voc\xEA poder\xE1 colocar uma rea\xE7\xE3o personalizada em todos os servidores ao falar algo que voc\xEA escolher e ela ir\xE1 reagir com um emoji que voc\xEA escolher! (Existem exce\xE7\xF5es para quando ela vai fazer isto, mas desde que seja uma frase n\xE3o t\xE3o pequena, pode colocar!) <a href='https://cdn.discordapp.com/emojis/396521401860751362.png?v=1' class='inline-emoji'>"])));
    tiers.add_11rb$(new DonateView$RewardTier('Jamais quero ver a Loritta offline!', 'https://cdn.discordapp.com/emojis/441355739307442186.png?v=1', 69.99, listOf_0(["Voc\xEA ganhar\xE1 x1.75 XP global! <img src='https://cdn.discordapp.com/emojis/432531424671694849.png?v=1' class='inline-emoji'>", 'Voc\xEA ganhar\xE1 7500 sonhos!', "Como b\xF4nus pela sua generosidade, voc\xEA ir\xE1 ganhar +1 key da Loritta para voc\xEA dar aos seus amigos! <img src='https://cdn.discordapp.com/emojis/330958171436744716.png?v=1' class='inline-emoji'>"])));
    tiers.add_11rb$(new DonateView$RewardTier('A Loritta ir\xE1 dominar o mundo!', 'https://cdn.discordapp.com/emojis/391738326312550401.png?v=1', 79.99, listOf_0(["Voc\xEA poder\xE1 criar uma badge exclusiva para voc\xEA e para os seus amigos! Quer criar uma badge exclusiva que apenas os membros do seu servidor tem? Voc\xEA poder\xE1 ter isto! <img src='https://cdn.discordapp.com/emojis/430179755304943649.png?v=1' class='inline-emoji'>", 'O limite m\xE1ximo de sonhos que voc\xEA pode ganhar no sonhos di\xE1rio ser\xE1 aumentado de 3600 sonhos para 4800 sonhos!'])));
    tiers.add_11rb$(new DonateView$RewardTier('A Loritta ir\xE1 dominar a gal\xE1xia!', 'https://cdn.discordapp.com/emojis/439868811190206495.png?v=1', 89.99, listOf_0(["Voc\xEA ganhar\xE1 x2.00 XP global! <img src='https://cdn.discordapp.com/emojis/432531424671694849.png?v=1' class='inline-emoji'>", 'Voc\xEA ganhar\xE1 7500 sonhos!', "Voc\xEA poder\xE1 fazer o seu pr\xF3prio design do jeito que voc\xEA quiser (desde que n\xE3o seja algo inapropriado) para o seu <code class='inline'>+perfil<\/code>!"])));
    tiers.add_11rb$(new DonateView$RewardTier('A Loritta \xE9 a minha Deusa!', 'https://cdn.discordapp.com/emojis/412577132007653383.gif?v=1', 99.99, listOf_0(['Eu irei divulgar o seu servidor (desde que n\xE3o seja sobre conte\xFAdo NSFW) em todas as mensagens que eu fizer de @everyone ou para Notificar Novidades que tiverem no meu servidor!', "Voc\xEA ganhar\xE1 mais outro cargo exclusivo no <a href='" + anonymous.loriUrl + "support'>meu servidor<\/a> mostrando o quanto voc\xEA adora a nossa Deusa Loritta! <img src='https://cdn.discordapp.com/emojis/441390573501546497.png?v=1' class='inline-emoji'>"])));
    tiers.add_11rb$(new DonateView$RewardTier('Super Loritta!', 'https://cdn.discordapp.com/emojis/383742012559589387.png?v=1', 119.99, listOf("Como b\xF4nus pela sua generosidade, voc\xEA ir\xE1 ganhar +1 key da Loritta para voc\xEA dar aos seus amigos! <img src='https://cdn.discordapp.com/emojis/330958171436744716.png?v=1' class='inline-emoji'>")));
    var donationRewards = jq('#donation-rewards');
    var donationRewardsWrapper = jq('#donation-rewards-wrapper');
    var tierName = jq('#tier-name');
    var tierIcon = jq('#tier-icon');
    tmp$ = tiers.iterator();
    while (tmp$.hasNext()) {
      var tier = tmp$.next();
      donationRewards.append(jq('<div>').addClass('tier-reward-header').text(tier.title + ' (R' + '$' + ' ' + tier.minimum + '+)'));
      donationRewards.append(jq('<img>').css('width', '64px').attr('src', tier.icon));
      tmp$_0 = tier.rewards.iterator();
      while (tmp$_0.hasNext()) {
        var reward = tmp$_0.next();
        donationRewards.append(jq('<li>').html(reward).attr('id', 'reward-' + hashCode(tier) + '-' + hashCode(reward)));
      }
    }
  };
  function DonateView$RewardTier(title, icon, minimum, rewards) {
    this.title = title;
    this.icon = icon;
    this.minimum = minimum;
    this.rewards = rewards;
  }
  DonateView$RewardTier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RewardTier',
    interfaces: []
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
  function SpicyMorenitta() {
    SpicyMorenitta_instance = this;
    this.toggleCounter = 1000;
    this.configSavedSfx_sq02yu$_0 = lazy(SpicyMorenitta$configSavedSfx$lambda);
    this.configErrorSfx_v2dzpj$_0 = lazy(SpicyMorenitta$configErrorSfx$lambda);
    this.wrapper_e2dk2j$_0 = lazy(SpicyMorenitta$wrapper$lambda);
    this.leftSidebar_bu0mf$_0 = lazy(SpicyMorenitta$leftSidebar$lambda);
    this.rightSidebar_6drdtm$_0 = lazy(SpicyMorenitta$rightSidebar$lambda);
    this.loadingScreen_dfu46y$_0 = lazy(SpicyMorenitta$loadingScreen$lambda);
  }
  Object.defineProperty(SpicyMorenitta.prototype, 'configSavedSfx', {
    get: function () {
      return this.configSavedSfx_sq02yu$_0.value;
    }
  });
  Object.defineProperty(SpicyMorenitta.prototype, 'configErrorSfx', {
    get: function () {
      return this.configErrorSfx_v2dzpj$_0.value;
    }
  });
  Object.defineProperty(SpicyMorenitta.prototype, 'wrapper', {
    get: function () {
      return this.wrapper_e2dk2j$_0.value;
    }
  });
  Object.defineProperty(SpicyMorenitta.prototype, 'leftSidebar', {
    get: function () {
      return this.leftSidebar_bu0mf$_0.value;
    }
  });
  Object.defineProperty(SpicyMorenitta.prototype, 'rightSidebar', {
    get: function () {
      return this.rightSidebar_6drdtm$_0.value;
    }
  });
  Object.defineProperty(SpicyMorenitta.prototype, 'loadingScreen', {
    get: function () {
      return this.loadingScreen_dfu46y$_0.value;
    }
  });
  SpicyMorenitta.prototype.loadServerConfig = function () {
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
  SpicyMorenitta.prototype.showLoadingBar_pdl1vj$ = function (text) {
    if (text === void 0)
      text = 'Salvando...';
    this.leftSidebar.css('filter', 'blur(7px)');
    this.rightSidebar.css('filter', 'blur(7px)');
    if (text != null)
      this.loadingScreen.find('#loading-screen-text').text(text);
    this.loadingScreen.fadeIn(250);
  };
  SpicyMorenitta.prototype.hideLoadingBar = function () {
    this.leftSidebar.css('filter', '');
    this.rightSidebar.css('filter', '');
    this.loadingScreen.fadeOut(250);
  };
  function SpicyMorenitta$applyBlur$lambda(closure$toBeHidden, closure$toggle, this$SpicyMorenitta) {
    return function (it) {
      this$SpicyMorenitta.toggleBlur_puj7f4$(closure$toBeHidden, closure$toggle);
      return Unit;
    };
  }
  SpicyMorenitta.prototype.applyBlur_puj7f4$ = function (toBeHidden, toggle) {
    jq(toggle).click(SpicyMorenitta$applyBlur$lambda(toBeHidden, toggle, this));
    this.toggleBlur_puj7f4$(toBeHidden, toggle);
  };
  SpicyMorenitta.prototype.toggleBlur_puj7f4$ = function (toBeHidden, toggle) {
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
  SpicyMorenitta.prototype.enableBlur_61zpoe$ = function (toBeHidden) {
    var hide = jq(toBeHidden);
    hide.removeClass('noBlur');
    hide.addClass('blurSection');
  };
  SpicyMorenitta.prototype.disableBlur_61zpoe$ = function (toBeUnhidden) {
    var hide = jq(toBeUnhidden);
    hide.removeClass('blurSection');
    hide.addClass('noBlur');
  };
  SpicyMorenitta.prototype.createToggle_8jgccd$ = function (internalName, toggleMainText, toggleSubText, needsToBeSaved, isEnabled) {
    var html = '<div class=' + '"' + 'pure-g' + '"' + ' style=' + '"' + 'text-align: center;' + '"' + '>' + '\n' + '    <div class=' + '"' + 'pure-u-1 pure-u-md-7-8' + '"' + '>' + '\n' + '\t\t<p class=' + '"' + 'toggleMainText' + '"' + '>' + toggleMainText + '<\/p>' + '\n' + '\t\t' + (toggleSubText != null ? '<div class=' + '"' + 'toggleSubText' + '"' + '>' + toString(toggleSubText) + '<\/div>' : '') + '\n' + '\t<\/div>' + '\n' + '    <div class=' + '"' + 'pure-u-1 pure-u-md-1-8' + '"' + '>' + '\n' + '\t\t<div class=' + '"' + 'switch' + '"' + '>' + '\n' + '\t\t  <input type=' + '"' + 'checkbox' + '"' + ' data-internal-name=' + '"' + internalName + '"' + ' value=' + '"' + 'true' + '"' + ' ' + (needsToBeSaved ? 'data-send-on-save="true"' : '') + ' ' + (isEnabled ? 'checked' : '') + ' id=' + '"' + 'cmn-toggle-' + this.toggleCounter + '"' + ' class=' + '"' + 'cmn-toggle cmn-toggle-round' + '"' + ' type=' + '"' + 'checkbox' + '"' + '>' + '\n' + '\t\t  <label for=' + '"' + 'cmn-toggle-' + this.toggleCounter + '"' + '><\/label>' + '\n' + '\t\t<\/div>' + '\n' + '\t<\/div>' + '\n' + '<\/div>' + '\n' + '<br style=' + '"' + 'clear: both' + '"' + ' />';
    var cnt = this.toggleCounter;
    this.toggleCounter = this.toggleCounter + 1 | 0;
    return new Pair(cnt, jq(html));
  };
  function SpicyMorenitta$configureTextChannelSelect$ObjectLiteral() {
  }
  SpicyMorenitta$configureTextChannelSelect$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function SpicyMorenitta$configureTextChannelSelect$ObjectLiteral_0() {
  }
  SpicyMorenitta$configureTextChannelSelect$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function SpicyMorenitta$configureTextChannelSelect$lambda(str) {
    return str;
  }
  function SpicyMorenitta$configureTextChannelSelect$lambda$lambda(closure$modal) {
    return function () {
      closure$modal.close();
      window.location.reload();
      return Unit;
    };
  }
  function SpicyMorenitta$configureTextChannelSelect$lambda$lambda_0(closure$modal) {
    return function () {
      closure$modal.close();
      return Unit;
    };
  }
  function SpicyMorenitta$configureTextChannelSelect$lambda_0(closure$selectChannelDropdown, closure$serverConfig) {
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
        var modal = new TingleModal(new TingleOptions(true, void 0, void 0, void 0, ['tingle-modal--overflow']));
        modal.setContent(jq('<div>').append(jq('<div>').addClass('category-name').text(anonymous.locale.get_25kzsl$('DASHBOARD_NoPermission', []))).append(jq('<div>').css('text-align', 'center').append(jq('<img>').attr('src', 'https://mrpowergamerbr.com/uploads/2018-06-17_11-19-43.gif').css('width', '100%'))).append(jq('<div>').css('text-align', 'center').append(jq('<p>').text('Atualmente eu n\xE3o consigo falar no canal que voc\xEA deseja porque eu n\xE3o tenho permiss\xE3o para isto... \uD83D\uDE2D')).append(jq('<p>').text('Para eu conseguir falar neste canal, clique com bot\xE3o direito no canal que voc\xEA deseja que eu possa falar, v\xE1 nas permiss\xF5es, adicione um permission override para mim e d\xEA permiss\xE3o para que eu possa ler mensagens e enviar mensagens!'))).html());
        modal.addFooterBtn('<i class="far fa-thumbs-up"><\/i> J\xE1 arrumei!', 'button-discord button-discord-info pure-button button-discord-modal', SpicyMorenitta$configureTextChannelSelect$lambda$lambda(modal));
        modal.addFooterBtn('<i class="fas fa-times"><\/i> Fechar', 'button-discord pure-button button-discord-modal button-discord-modal-secondary-action', SpicyMorenitta$configureTextChannelSelect$lambda$lambda_0(modal));
        modal.open();
      }
      return Unit;
    };
  }
  SpicyMorenitta.prototype.configureTextChannelSelect_mtmww3$ = function (selectChannelDropdown, serverConfig, selectedChannelId) {
    var tmp$, tmp$_0;
    var optionData = ArrayList_init();
    tmp$ = serverConfig.textChannels;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var it = tmp$[tmp$_0];
      var option = new SpicyMorenitta$configureTextChannelSelect$ObjectLiteral();
      option.id = it.id;
      var text = '<span style=' + '"' + 'font-weight: 600;' + '"' + '>#' + it.name + '<\/span>';
      option.text = text;
      if (!it.canTalk) {
        option.text = text + ' <span class=' + '"' + 'keyword' + '"' + ' style=' + '"' + 'background-color: rgb(231, 76, 60);' + '"' + '>' + replace(anonymous.locale.get_25kzsl$('DASHBOARD_NoPermission', []), '!', '') + '<\/span>';
      }
      if (equals(it.id, selectedChannelId))
        option.selected = true;
      optionData.add_11rb$(option);
    }
    var options = new SpicyMorenitta$configureTextChannelSelect$ObjectLiteral_0();
    options.data = copyToArray(optionData);
    options.escapeMarkup = SpicyMorenitta$configureTextChannelSelect$lambda;
    selectChannelDropdown.select2(options);
    selectChannelDropdown.on('select2:select', SpicyMorenitta$configureTextChannelSelect$lambda_0(selectChannelDropdown, serverConfig));
  };
  function SpicyMorenitta$configureTextArea$lambda$ObjectLiteral() {
  }
  SpicyMorenitta$configureTextArea$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function SpicyMorenitta$configureTextArea$lambda$lambda(data, textStatus, event) {
    println(data);
    return Unit;
  }
  function SpicyMorenitta$configureTextArea$lambda$lambda_0(event, textStatus, errorThrown) {
    println('Status: ' + toString(event.status));
    println(event.response);
    return Unit;
  }
  function SpicyMorenitta$configureTextArea$lambda(closure$textChannelSelect, closure$jquery) {
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
      var dynamic = new SpicyMorenitta$configureTextArea$lambda$ObjectLiteral();
      dynamic.url = anonymous.loriUrl + 'api/v1/guild/' + guildId + '/send-message';
      dynamic.type = 'POST';
      dynamic.dataType = 'json';
      dynamic.data = JSON.stringify(json_0);
      dynamic.success = SpicyMorenitta$configureTextArea$lambda$lambda;
      dynamic.error = SpicyMorenitta$configureTextArea$lambda$lambda_0;
      jQuery.ajax(dynamic);
      return Unit;
    };
  }
  function SpicyMorenitta$configureTextArea$lambda$replaceAndConvert(closure$serverConfig, this$SpicyMorenitta, closure$converter) {
    return function (text) {
      var _text = this$SpicyMorenitta.replaceTokens_9iii47$(text, closure$serverConfig);
      _text = closure$converter.makeHtml(_text);
      return jq(_text).html();
    };
  }
  function SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda(closure$color) {
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
  function SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$name, closure$replaceAndConvert) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$replaceAndConvert(ensureNotNull(closure$name)));
      return Unit;
    };
  }
  function SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$name, closure$replaceAndConvert) {
    return function ($receiver) {
      unsafe($receiver, SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$name, closure$replaceAndConvert));
      return Unit;
    };
  }
  function SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$name, closure$replaceAndConvert) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$replaceAndConvert(ensureNotNull(closure$name)));
      return Unit;
    };
  }
  function SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$name, closure$replaceAndConvert) {
    return function ($receiver) {
      unsafe($receiver, SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$name, closure$replaceAndConvert));
      return Unit;
    };
  }
  function SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$author, closure$serverConfig, this$SpicyMorenitta, closure$replaceAndConvert) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1;
      var iconUrl = (tmp$ = closure$author['icon_url']) == null || typeof tmp$ === 'string' ? tmp$ : throwCCE();
      if (iconUrl != null) {
        img($receiver, void 0, this$SpicyMorenitta.replaceTokens_9iii47$(iconUrl, closure$serverConfig), 'embed-author-icon');
      }
      var url = (tmp$_0 = closure$author['url']) == null || typeof tmp$_0 === 'string' ? tmp$_0 : throwCCE();
      var name = (tmp$_1 = closure$author['name']) == null || typeof tmp$_1 === 'string' ? tmp$_1 : throwCCE();
      if (url != null) {
        a($receiver, url, void 0, 'embed-author-name', SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(name, closure$replaceAndConvert));
      }
       else {
        span($receiver, 'embed-author-name', SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(name, closure$replaceAndConvert));
      }
      return Unit;
    };
  }
  function SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$title, closure$replaceAndConvert) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$replaceAndConvert(closure$title));
      return Unit;
    };
  }
  function SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$title, closure$replaceAndConvert) {
    return function ($receiver) {
      unsafe($receiver, SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$title, closure$replaceAndConvert));
      return Unit;
    };
  }
  function SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$title, closure$replaceAndConvert) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$replaceAndConvert(closure$title));
      return Unit;
    };
  }
  function SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$title, closure$replaceAndConvert) {
    return function ($receiver) {
      unsafe($receiver, SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$title, closure$replaceAndConvert));
      return Unit;
    };
  }
  function SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$description, closure$replaceAndConvert) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$replaceAndConvert(closure$description));
      return Unit;
    };
  }
  function SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$description, closure$replaceAndConvert) {
    return function ($receiver) {
      unsafe($receiver, SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$description, closure$replaceAndConvert));
      return Unit;
    };
  }
  function SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$name, closure$replaceAndConvert) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$replaceAndConvert(closure$name));
      return Unit;
    };
  }
  function SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$name, closure$replaceAndConvert) {
    return function ($receiver) {
      unsafe($receiver, SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$name, closure$replaceAndConvert));
      return Unit;
    };
  }
  function SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$value, closure$replaceAndConvert) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$replaceAndConvert(closure$value));
      return Unit;
    };
  }
  function SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$value, closure$replaceAndConvert) {
    return function ($receiver) {
      unsafe($receiver, SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$value, closure$replaceAndConvert));
      return Unit;
    };
  }
  function SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$name, closure$replaceAndConvert, closure$value) {
    return function ($receiver) {
      div($receiver, 'embed-field-name', SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$name, closure$replaceAndConvert));
      div($receiver, 'embed-field-value markup', SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$value, closure$replaceAndConvert));
      return Unit;
    };
  }
  function SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$fields, closure$replaceAndConvert) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      tmp$ = closure$fields;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var field = tmp$[tmp$_0];
        var name = (tmp$_1 = field['name']) == null || typeof tmp$_1 === 'string' ? tmp$_1 : throwCCE();
        var value = (tmp$_2 = field['value']) == null || typeof tmp$_2 === 'string' ? tmp$_2 : throwCCE();
        var inline = (tmp$_4 = (tmp$_3 = field['inline']) == null || typeof tmp$_3 === 'boolean' ? tmp$_3 : throwCCE()) != null ? tmp$_4 : false;
        if (name != null && value != null) {
          div($receiver, 'embed-field' + (inline ? ' embed-field-inline' : ''), SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(name, closure$replaceAndConvert, value));
        }
      }
      return Unit;
    };
  }
  function SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda(closure$author, closure$serverConfig, this$SpicyMorenitta, closure$replaceAndConvert, closure$title, closure$url, closure$description, closure$fields) {
    return function ($receiver) {
      if (closure$author != null) {
        div($receiver, 'embed-author', SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$author, closure$serverConfig, this$SpicyMorenitta, closure$replaceAndConvert));
      }
      if (closure$title != null) {
        if (closure$url != null) {
          a($receiver, void 0, closure$url, 'embed-title', SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$title, closure$replaceAndConvert));
        }
         else {
          span($receiver, 'embed-title', SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$title, closure$replaceAndConvert));
        }
      }
      if (closure$description != null) {
        div($receiver, 'embed-description markup', SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$description, closure$replaceAndConvert));
      }
      if (closure$fields != null) {
        div($receiver, 'embed-fields', SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$fields, closure$replaceAndConvert));
      }
      return Unit;
    };
  }
  function SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    set_style($receiver, 'max-width: 80px; max-height: 80px;');
    return Unit;
  }
  function SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda(closure$author, closure$serverConfig, this$SpicyMorenitta, closure$replaceAndConvert, closure$title, closure$url, closure$description, closure$fields, closure$thumbnailUrl) {
    return function ($receiver) {
      div($receiver, 'embed-content-inner', SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda(closure$author, closure$serverConfig, this$SpicyMorenitta, closure$replaceAndConvert, closure$title, closure$url, closure$description, closure$fields));
      if (closure$thumbnailUrl != null) {
        img($receiver, void 0, this$SpicyMorenitta.replaceTokens_9iii47$(closure$thumbnailUrl, closure$serverConfig), void 0, SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda_0);
      }
      return Unit;
    };
  }
  function SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda_0(closure$imageUrl, closure$serverConfig, this$SpicyMorenitta) {
    return function ($receiver) {
      img($receiver, void 0, this$SpicyMorenitta.replaceTokens_9iii47$(closure$imageUrl, closure$serverConfig), 'image');
      return Unit;
    };
  }
  function SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.width = '20';
    $receiver.height = '20';
    return Unit;
  }
  function SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$text, closure$replaceAndConvert) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$replaceAndConvert(closure$text));
      return Unit;
    };
  }
  function SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$text, closure$replaceAndConvert) {
    return function ($receiver) {
      unsafe($receiver, SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$text, closure$replaceAndConvert));
      return Unit;
    };
  }
  function SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda_1(closure$footer, closure$serverConfig, this$SpicyMorenitta, closure$replaceAndConvert) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      var iconUrl = (tmp$ = closure$footer['icon_url']) == null || typeof tmp$ === 'string' ? tmp$ : throwCCE();
      var text = (tmp$_0 = closure$footer['text']) == null || typeof tmp$_0 === 'string' ? tmp$_0 : throwCCE();
      if (iconUrl != null) {
        img($receiver, void 0, this$SpicyMorenitta.replaceTokens_9iii47$(iconUrl, closure$serverConfig), 'embed-footer-icon', SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda_1);
      }
      if (text != null) {
        span($receiver, 'embed-footer', SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda$lambda_2(text, closure$replaceAndConvert));
      }
      return Unit;
    };
  }
  function SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda_0(closure$author, closure$serverConfig, this$SpicyMorenitta, closure$replaceAndConvert, closure$title, closure$url, closure$description, closure$fields, closure$thumbnailUrl, closure$imageUrl, closure$footer) {
    return function ($receiver) {
      div($receiver, 'embed-content', SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda(closure$author, closure$serverConfig, this$SpicyMorenitta, closure$replaceAndConvert, closure$title, closure$url, closure$description, closure$fields, closure$thumbnailUrl));
      if (closure$imageUrl != null) {
        a($receiver, void 0, void 0, 'embed-thumbnail embed-thumbnail-rich', SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda_0(closure$imageUrl, closure$serverConfig, this$SpicyMorenitta));
      }
      if (closure$footer != null) {
        div($receiver, void 0, SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda$lambda_1(closure$footer, closure$serverConfig, this$SpicyMorenitta, closure$replaceAndConvert));
      }
      return Unit;
    };
  }
  function SpicyMorenitta$configureTextArea$lambda$lambda$lambda(closure$color, closure$author, closure$serverConfig, this$SpicyMorenitta, closure$replaceAndConvert, closure$title, closure$url, closure$description, closure$fields, closure$thumbnailUrl, closure$imageUrl, closure$footer) {
    return function ($receiver) {
      div($receiver, 'embed-color-pill', SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda(closure$color));
      div($receiver, 'embed embed-rich', SpicyMorenitta$configureTextArea$lambda$lambda$lambda$lambda_0(closure$author, closure$serverConfig, this$SpicyMorenitta, closure$replaceAndConvert, closure$title, closure$url, closure$description, closure$fields, closure$thumbnailUrl, closure$imageUrl, closure$footer));
      return Unit;
    };
  }
  function SpicyMorenitta$configureTextArea$lambda$lambda_1(closure$color, closure$author, closure$serverConfig, this$SpicyMorenitta, closure$replaceAndConvert, closure$title, closure$url, closure$description, closure$fields, closure$thumbnailUrl, closure$imageUrl, closure$footer) {
    return function ($receiver) {
      div($receiver, 'embed-wrapper', SpicyMorenitta$configureTextArea$lambda$lambda$lambda(closure$color, closure$author, closure$serverConfig, this$SpicyMorenitta, closure$replaceAndConvert, closure$title, closure$url, closure$description, closure$fields, closure$thumbnailUrl, closure$imageUrl, closure$footer));
      return Unit;
    };
  }
  function SpicyMorenitta$configureTextArea$lambda_0(closure$jquery, closure$extendedMode, closure$markdownPreview, closure$serverConfig, this$SpicyMorenitta, closure$converter) {
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
          description = this$SpicyMorenitta.replaceTokens_9iii47$(content, closure$serverConfig);
          description = closure$converter.makeHtml(description);
          closure$markdownPreview.append(description);
        }
        if (embed != null) {
          var markdownEmbedConverter = new ShowdownConverter();
          markdownEmbedConverter.setOption('simpleLineBreaks', true);
          var replaceAndConvert = SpicyMorenitta$configureTextArea$lambda$replaceAndConvert(closure$serverConfig, this$SpicyMorenitta, closure$converter);
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
          var stringBuilder = new StringBuilder();
          div_0(appendHTML(stringBuilder, false), 'accessory', SpicyMorenitta$configureTextArea$lambda$lambda_1(color, author, closure$serverConfig, this$SpicyMorenitta, replaceAndConvert, title, url, description_0, fields, thumbnailUrl, imageUrl, footer));
          closure$markdownPreview.append(stringBuilder.toString());
        }
      }
       else {
        closure$extendedMode.css('display', 'none');
        description = this$SpicyMorenitta.replaceTokens_9iii47$(description, closure$serverConfig);
        description = closure$converter.makeHtml(description);
        closure$markdownPreview.html(description);
      }
      return Unit;
    };
  }
  SpicyMorenitta.prototype.configureTextArea_ntroki$ = function (jquery, markdownPreview, serverConfig, sendTestMessages, textChannelSelect) {
    if (markdownPreview === void 0)
      markdownPreview = false;
    if (sendTestMessages === void 0)
      sendTestMessages = false;
    if (textChannelSelect === void 0)
      textChannelSelect = null;
    var div = jq('<div>').css('position', 'relative');
    div.insertBefore(jquery);
    jquery.appendTo(div);
    var extendedMode = jq('<div>').html('<i class="fas fa-code"><\/i> Extended Mode').css('background-color', 'green').css('top', '0px').css('right', '0px').css('position', 'absolute').css('color', 'white').css('opacity', '0.75').css('padding', '3px').css('border-radius', '0px 3px 0px 8px').css('display', 'none').css('margin-top', '8px');
    div.append(extendedMode);
    autosize(jquery);
    if (sendTestMessages) {
      var button = jq('<button>').addClass('button-discord button-discord-info pure-button').html('<i class=' + '"' + 'fas fa-paper-plane' + '"' + '><\/i> ' + anonymous.locale.get_25kzsl$('DASHBOARD_TestMessage', []));
      button.on('click', SpicyMorenitta$configureTextArea$lambda(textChannelSelect, jquery));
      button.insertAfter(jquery);
    }
    if (markdownPreview) {
      var markdownPreview_0 = jq('<div>').attr('id', jquery.attr('id') + '-markdownpreview');
      var converter = new ShowdownConverter();
      converter.setOption('simpleLineBreaks', true);
      jquery.on('input', SpicyMorenitta$configureTextArea$lambda_0(jquery, extendedMode, markdownPreview_0, serverConfig, this, converter));
      markdownPreview_0.insertAfter(jquery);
    }
    jquery.trigger('input', null);
  };
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  SpicyMorenitta.prototype.replaceTokens_9iii47$ = function (text, serverConfig, customTokens) {
    if (customTokens === void 0) {
      customTokens = LinkedHashMap_init();
    }
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    var selfUser = (tmp$ = serverConfig != null ? serverConfig.selfUser : null) != null ? tmp$ : new Member('123170274651668480', 'Loritta', '0219', anonymous.loriUrl + 'assets/img/unknown.png');
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
      var regex = Regex_init('<:([A-z0-9_-]+):([0-9]+)>', RegexOption.MULTILINE);
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
  function SpicyMorenitta$configSavedSfx$lambda() {
    return new Audio(anonymous.loriUrl + 'assets/snd/config_saved.mp3');
  }
  function SpicyMorenitta$configErrorSfx$lambda() {
    return new Audio(anonymous.loriUrl + 'assets/snd/config_error.mp3');
  }
  function SpicyMorenitta$wrapper$lambda() {
    return jq('#server-configuration');
  }
  function SpicyMorenitta$leftSidebar$lambda() {
    return jq('#left-sidebar');
  }
  function SpicyMorenitta$rightSidebar$lambda() {
    return jq('#right-sidebar');
  }
  function SpicyMorenitta$loadingScreen$lambda() {
    return jq('#loading-screen');
  }
  SpicyMorenitta.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SpicyMorenitta',
    interfaces: []
  };
  var SpicyMorenitta_instance = null;
  function SpicyMorenitta_getInstance() {
    if (SpicyMorenitta_instance === null) {
      new SpicyMorenitta();
    }
    return SpicyMorenitta_instance;
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
  function toString_0($receiver, radix) {
    var value = $receiver;
    return value.toString(radix);
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
    SpicyMorenitta_getInstance().hideLoadingBar();
    SpicyMorenitta_getInstance().configSavedSfx.play();
    return Unit;
  }
  function SaveStuff$prepareSave$lambda_1() {
    println('Error!');
    SpicyMorenitta_getInstance().hideLoadingBar();
    SpicyMorenitta_getInstance().configErrorSfx.play();
    return Unit;
  }
  SaveStuff.prototype.prepareSave = function (type, extras, showSaveScreen, endpoint) {
    if (extras === void 0)
      extras = null;
    if (showSaveScreen === void 0)
      showSaveScreen = true;
    if (endpoint === void 0)
      endpoint = anonymous.loriUrl + 'api/v1/guild/' + guildId + '/config/';
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
      SpicyMorenitta_getInstance().showLoadingBar_pdl1vj$('Salvando...');
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
  function AutoroleConfig() {
    this.isEnabled = false;
    this.roles = [];
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
  function CounterThemeName(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CounterThemeName_initFields() {
    CounterThemeName_initFields = function () {
    };
    CounterThemeName$DEFAULT_instance = new CounterThemeName('DEFAULT', 0);
    CounterThemeName$CUSTOM_instance = new CounterThemeName('CUSTOM', 1);
  }
  var CounterThemeName$DEFAULT_instance;
  function CounterThemeName$DEFAULT_getInstance() {
    CounterThemeName_initFields();
    return CounterThemeName$DEFAULT_instance;
  }
  var CounterThemeName$CUSTOM_instance;
  function CounterThemeName$CUSTOM_getInstance() {
    CounterThemeName_initFields();
    return CounterThemeName$CUSTOM_instance;
  }
  CounterThemeName.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CounterThemeName',
    interfaces: [Enum]
  };
  function CounterThemeName$values() {
    return [CounterThemeName$DEFAULT_getInstance(), CounterThemeName$CUSTOM_getInstance()];
  }
  CounterThemeName.values = CounterThemeName$values;
  function CounterThemeName$valueOf(name) {
    switch (name) {
      case 'DEFAULT':
        return CounterThemeName$DEFAULT_getInstance();
      case 'CUSTOM':
        return CounterThemeName$CUSTOM_getInstance();
      default:throwISE('No enum constant userdata.CounterThemeName.' + name);
    }
  }
  CounterThemeName.valueOf_61zpoe$ = CounterThemeName$valueOf;
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
  function MemberCounterConfig(topic, theme) {
    this.topic = topic;
    this.theme = theme;
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
  function Emote(id, name) {
    this.id = id;
    this.name = name;
  }
  Emote.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Emote',
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
  DonateView.prototype.RewardTier = DonateView$RewardTier;
  Object.defineProperty(_, 'DonateView', {
    get: DonateView_getInstance
  });
  Object.defineProperty(_, 'SpicyMorenitta', {
    get: SpicyMorenitta_getInstance
  });
  _.toJson_th5c7u$ = toJson;
  _.toJson_s8jyvk$ = toJson_0;
  _.stringify_s8jyvk$ = stringify;
  _.toString_dqglrj$ = toString_0;
  Object.defineProperty(_, 'SaveStuff', {
    get: SaveStuff_getInstance
  });
  AutoroleConfig.RoleVoteReward = AutoroleConfig$RoleVoteReward;
  var package$userdata = _.userdata || (_.userdata = {});
  package$userdata.AutoroleConfig = AutoroleConfig;
  Object.defineProperty(CounterThemeName, 'DEFAULT', {
    get: CounterThemeName$DEFAULT_getInstance
  });
  Object.defineProperty(CounterThemeName, 'CUSTOM', {
    get: CounterThemeName$CUSTOM_getInstance
  });
  package$userdata.CounterThemeName = CounterThemeName;
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
  package$userdata.StoreItem = StoreItem;
  package$userdata.WelcomerConfig = WelcomerConfig;
  var package$utils = _.utils || (_.utils = {});
  package$utils.AbstractCommand = AbstractCommand;
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
  package$utils.CommandCategory = CommandCategory;
  package$utils.Emote = Emote;
  package$utils.LoriColor = LoriColor;
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
  Object.defineProperty(package$utils, 'LorittaPartner', {
    get: LorittaPartner_getInstance
  });
  package$utils.Member = Member;
  package$utils.Role = Role;
  package$utils.ServerConfig = ServerConfig;
  package$utils.getTextChannelConfig_zc3ojw$ = getTextChannelConfig;
  package$utils.getTextChannelConfig_r43l01$ = getTextChannelConfig_0;
  package$utils.hasTextChannelConfig_zc3ojw$ = hasTextChannelConfig;
  package$utils.hasTextChannelConfig_r43l01$ = hasTextChannelConfig_0;
  package$utils.TextChannel = TextChannel;
  package$utils.TextChannelConfig = TextChannelConfig;
  Kotlin.defineModule('SpicyMorenitta', _);
  return _;
}(typeof SpicyMorenitta === 'undefined' ? {} : SpicyMorenitta, kotlin, SpicyMorenitta, this['kotlinx-html-js']);
