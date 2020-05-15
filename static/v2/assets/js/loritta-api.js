(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-logging'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-logging'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'loritta-api'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'loritta-api'.");
    }
    if (typeof this['kotlin-logging'] === 'undefined') {
      throw new Error("Error loading module 'loritta-api'. Its dependency 'kotlin-logging' was not found. Please, check whether 'kotlin-logging' is loaded prior to 'loritta-api'.");
    }
    root['loritta-api'] = factory(typeof this['loritta-api'] === 'undefined' ? {} : this['loritta-api'], kotlin, this['kotlin-logging']);
  }
}(this, function (_, Kotlin, $module$kotlin_logging) {
  'use strict';
  var mu = $module$kotlin_logging.mu;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var Any = Object;
  var throwCCE = Kotlin.throwCCE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var toString = Kotlin.toString;
  ArgumentType.prototype = Object.create(Enum.prototype);
  ArgumentType.prototype.constructor = ArgumentType;
  CommandCategory.prototype = Object.create(Enum.prototype);
  CommandCategory.prototype.constructor = CommandCategory;
  UnicodeEmote.prototype = Object.create(LorittaEmote.prototype);
  UnicodeEmote.prototype.constructor = UnicodeEmote;
  OnlineStatus.prototype = Object.create(Enum.prototype);
  OnlineStatus.prototype.constructor = OnlineStatus;
  PlatformFeature.prototype = Object.create(Enum.prototype);
  PlatformFeature.prototype.constructor = PlatformFeature;
  DailyGuildMissingRequirement.prototype = Object.create(Enum.prototype);
  DailyGuildMissingRequirement.prototype.constructor = DailyGuildMissingRequirement;
  function BaseLocale(id) {
    BaseLocale$Companion_getInstance();
    this.id = id;
    this.localeEntries = LinkedHashMap_init();
  }
  function BaseLocale$Companion() {
    BaseLocale$Companion_instance = this;
    this.logger_0 = mu.KotlinLogging.logger_o14v8n$(BaseLocale$Companion$logger$lambda);
  }
  function BaseLocale$Companion$logger$lambda() {
    return Unit;
  }
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
  Object.defineProperty(BaseLocale.prototype, 'path', {
    get: function () {
      return this.get_25kzsl$('website.localePath', []);
    }
  });
  function BaseLocale$get$lambda(closure$key, this$BaseLocale) {
    return function () {
      return 'Error when trying to retrieve ' + closure$key + ' for locale ' + this$BaseLocale.id;
    };
  }
  BaseLocale.prototype.get_25kzsl$ = function (key, arguments_0) {
    try {
      return format(this.getWithType_ytbaoo$(key), arguments_0.slice());
    }
     catch (e) {
      if (Kotlin.isType(e, RuntimeException)) {
        BaseLocale$Companion_getInstance().logger_0.error_ca4k3s$(e, BaseLocale$get$lambda(key, this));
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
      throw RuntimeException_init('Key ' + key + " doesn't exist in locale " + this.id + '!');
    }
    var entry = tmp$;
    return (tmp$_0 = entry) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
  };
  BaseLocale.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseLocale',
    interfaces: []
  };
  function Command(labels, description, executor) {
    this.labels = labels;
    this.description = description;
    this.executor = executor;
    this.cooldown = 2500;
    this.executedCount = 0;
    this.hasCommandFeedback = true;
    this.sendTypingStatus = false;
    this.onlyOwner = false;
  }
  Command.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Command',
    interfaces: []
  };
  function CommandArguments(arguments_0) {
    this.arguments = arguments_0;
  }
  CommandArguments.prototype.build_rpa2mu$ = function (locale) {
    var tmp$;
    var builder = StringBuilder_init();
    tmp$ = this.arguments.iterator();
    while (tmp$.hasNext()) {
      var argument = tmp$.next();
      argument.build_w1jkps$(builder, locale);
      builder.append_s8itvh$(32);
    }
    var $receiver = builder.toString();
    var tmp$_0;
    return trim(Kotlin.isCharSequence(tmp$_0 = $receiver) ? tmp$_0 : throwCCE()).toString();
  };
  CommandArguments.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommandArguments',
    interfaces: []
  };
  CommandArguments.prototype.component1 = function () {
    return this.arguments;
  };
  CommandArguments.prototype.copy_qhiyks$ = function (arguments_0) {
    return new CommandArguments(arguments_0 === void 0 ? this.arguments : arguments_0);
  };
  CommandArguments.prototype.toString = function () {
    return 'CommandArguments(arguments=' + Kotlin.toString(this.arguments) + ')';
  };
  CommandArguments.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.arguments) | 0;
    return result;
  };
  CommandArguments.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.arguments, other.arguments))));
  };
  function CommandArgument(type, optional, defaultValue, text, explanation) {
    if (defaultValue === void 0)
      defaultValue = null;
    if (text === void 0)
      text = null;
    if (explanation === void 0)
      explanation = null;
    this.type = type;
    this.optional = optional;
    this.defaultValue = defaultValue;
    this.text = text;
    this.explanation = explanation;
  }
  CommandArgument.prototype.build_rpa2mu$ = function (locale) {
    return this.build_w1jkps$(StringBuilder_init(), locale).toString();
  };
  CommandArgument.prototype.build_w1jkps$ = function (builder, locale) {
    var tmp$;
    if (this.optional)
      builder.append_s8itvh$(91);
    else
      builder.append_s8itvh$(60);
    builder.append_gw00v9$((tmp$ = this.text) != null ? tmp$ : this.type.localized_rpa2mu$(locale));
    if (this.optional)
      builder.append_s8itvh$(93);
    else
      builder.append_s8itvh$(62);
    return builder;
  };
  CommandArgument.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommandArgument',
    interfaces: []
  };
  CommandArgument.prototype.component1 = function () {
    return this.type;
  };
  CommandArgument.prototype.component2 = function () {
    return this.optional;
  };
  CommandArgument.prototype.component3 = function () {
    return this.defaultValue;
  };
  CommandArgument.prototype.component4 = function () {
    return this.text;
  };
  CommandArgument.prototype.component5 = function () {
    return this.explanation;
  };
  CommandArgument.prototype.copy_qd65dm$ = function (type, optional, defaultValue, text, explanation) {
    return new CommandArgument(type === void 0 ? this.type : type, optional === void 0 ? this.optional : optional, defaultValue === void 0 ? this.defaultValue : defaultValue, text === void 0 ? this.text : text, explanation === void 0 ? this.explanation : explanation);
  };
  CommandArgument.prototype.toString = function () {
    return 'CommandArgument(type=' + Kotlin.toString(this.type) + (', optional=' + Kotlin.toString(this.optional)) + (', defaultValue=' + Kotlin.toString(this.defaultValue)) + (', text=' + Kotlin.toString(this.text)) + (', explanation=' + Kotlin.toString(this.explanation)) + ')';
  };
  CommandArgument.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.optional) | 0;
    result = result * 31 + Kotlin.hashCode(this.defaultValue) | 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    result = result * 31 + Kotlin.hashCode(this.explanation) | 0;
    return result;
  };
  CommandArgument.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.optional, other.optional) && Kotlin.equals(this.defaultValue, other.defaultValue) && Kotlin.equals(this.text, other.text) && Kotlin.equals(this.explanation, other.explanation)))));
  };
  function ArgumentType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ArgumentType_initFields() {
    ArgumentType_initFields = function () {
    };
    ArgumentType$TEXT_instance = new ArgumentType('TEXT', 0);
    ArgumentType$NUMBER_instance = new ArgumentType('NUMBER', 1);
    ArgumentType$USER_instance = new ArgumentType('USER', 2);
    ArgumentType$ROLE_instance = new ArgumentType('ROLE', 3);
    ArgumentType$COLOR_instance = new ArgumentType('COLOR', 4);
    ArgumentType$EMOTE_instance = new ArgumentType('EMOTE', 5);
    ArgumentType$IMAGE_instance = new ArgumentType('IMAGE', 6);
  }
  var ArgumentType$TEXT_instance;
  function ArgumentType$TEXT_getInstance() {
    ArgumentType_initFields();
    return ArgumentType$TEXT_instance;
  }
  var ArgumentType$NUMBER_instance;
  function ArgumentType$NUMBER_getInstance() {
    ArgumentType_initFields();
    return ArgumentType$NUMBER_instance;
  }
  var ArgumentType$USER_instance;
  function ArgumentType$USER_getInstance() {
    ArgumentType_initFields();
    return ArgumentType$USER_instance;
  }
  var ArgumentType$ROLE_instance;
  function ArgumentType$ROLE_getInstance() {
    ArgumentType_initFields();
    return ArgumentType$ROLE_instance;
  }
  var ArgumentType$COLOR_instance;
  function ArgumentType$COLOR_getInstance() {
    ArgumentType_initFields();
    return ArgumentType$COLOR_instance;
  }
  var ArgumentType$EMOTE_instance;
  function ArgumentType$EMOTE_getInstance() {
    ArgumentType_initFields();
    return ArgumentType$EMOTE_instance;
  }
  var ArgumentType$IMAGE_instance;
  function ArgumentType$IMAGE_getInstance() {
    ArgumentType_initFields();
    return ArgumentType$IMAGE_instance;
  }
  ArgumentType.prototype.localized_rpa2mu$ = function (locale) {
    var tmp$;
    switch (this.name) {
      case 'TEXT':
        tmp$ = locale.get_25kzsl$('commands.arguments.text', []);
        break;
      case 'NUMBER':
        tmp$ = locale.get_25kzsl$('commands.arguments.number', []);
        break;
      case 'USER':
        tmp$ = locale.get_25kzsl$('commands.arguments.user', []);
        break;
      case 'EMOTE':
        tmp$ = locale.get_25kzsl$('commands.arguments.emote', []);
        break;
      case 'IMAGE':
        tmp$ = locale.get_25kzsl$('commands.arguments.image', []);
        break;
      case 'ROLE':
        tmp$ = locale.get_25kzsl$('commands.arguments.role', []);
        break;
      case 'COLOR':
        tmp$ = locale.get_25kzsl$('commands.argument.color', []);
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$;
  };
  ArgumentType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArgumentType',
    interfaces: [Enum]
  };
  function ArgumentType$values() {
    return [ArgumentType$TEXT_getInstance(), ArgumentType$NUMBER_getInstance(), ArgumentType$USER_getInstance(), ArgumentType$ROLE_getInstance(), ArgumentType$COLOR_getInstance(), ArgumentType$EMOTE_getInstance(), ArgumentType$IMAGE_getInstance()];
  }
  ArgumentType.values = ArgumentType$values;
  function ArgumentType$valueOf(name) {
    switch (name) {
      case 'TEXT':
        return ArgumentType$TEXT_getInstance();
      case 'NUMBER':
        return ArgumentType$NUMBER_getInstance();
      case 'USER':
        return ArgumentType$USER_getInstance();
      case 'ROLE':
        return ArgumentType$ROLE_getInstance();
      case 'COLOR':
        return ArgumentType$COLOR_getInstance();
      case 'EMOTE':
        return ArgumentType$EMOTE_getInstance();
      case 'IMAGE':
        return ArgumentType$IMAGE_getInstance();
      default:throwISE('No enum constant net.perfectdreams.loritta.api.commands.ArgumentType.' + name);
    }
  }
  ArgumentType.valueOf_61zpoe$ = ArgumentType$valueOf;
  function arguments_0(block) {
    var $receiver = new CommandArgumentsBuilder();
    block($receiver);
    return $receiver.build();
  }
  function CommandArgumentsBuilder() {
    this.arguments_0 = ArrayList_init();
  }
  CommandArgumentsBuilder.prototype.argument_sje80x$ = function (type, block) {
    var tmp$ = this.arguments_0;
    var $receiver = new CommandArgumentBuilder();
    block($receiver);
    return tmp$.add_11rb$($receiver.build_4rwxy8$(type));
  };
  CommandArgumentsBuilder.prototype.build = function () {
    return new CommandArguments(this.arguments_0);
  };
  CommandArgumentsBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommandArgumentsBuilder',
    interfaces: []
  };
  function CommandArgumentBuilder() {
    this.optional = false;
    this.defaultValue = null;
    this.text = null;
    this.explanation = null;
  }
  CommandArgumentBuilder.prototype.build_4rwxy8$ = function (type) {
    var tmp$;
    return new CommandArgument(type, this.optional, this.defaultValue, this.text, (tmp$ = this.explanation) != null ? tmp$.toString() : null);
  };
  CommandArgumentBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommandArgumentBuilder',
    interfaces: []
  };
  function command(labels, builder) {
    var b = new CommandBuilder(labels);
    builder(b);
    return b.build();
  }
  function CommandBuilder(labels) {
    this.labels = labels;
    this.canUseInPrivateChannel = false;
    this.needsToUploadFiles = false;
    this.hideInHelp = false;
    this.requiredFeatures = emptyList();
    this.descriptionCallback_0 = null;
    this.usageCallback_0 = null;
    this.examplesCallback_0 = null;
    this.executeCallback_0 = null;
  }
  CommandBuilder.prototype.description_xuwwva$ = function (callback) {
    this.descriptionCallback_0 = callback;
  };
  CommandBuilder.prototype.usage_cpxb68$ = function (callback) {
    this.usageCallback_0 = callback;
  };
  CommandBuilder.prototype.examples_8gzklt$ = function (callback) {
    this.examplesCallback_0 = callback;
  };
  CommandBuilder.prototype.executes_jsokuk$ = function (callback) {
    this.executeCallback_0 = callback;
  };
  CommandBuilder.prototype.build = function () {
    return new Command(this.labels, ensureNotNull(this.descriptionCallback_0), ensureNotNull(this.executeCallback_0));
  };
  CommandBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommandBuilder',
    interfaces: []
  };
  function CommandCategory(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
    var $receiver = CommandCategory$values();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
    }
  }
  function CommandCategory_initFields() {
    CommandCategory_initFields = function () {
    };
    CommandCategory$FUN_instance = new CommandCategory('FUN', 0);
    CommandCategory$IMAGES_instance = new CommandCategory('IMAGES', 1);
    CommandCategory$MINECRAFT_instance = new CommandCategory('MINECRAFT', 2);
    CommandCategory$POKEMON_instance = new CommandCategory('POKEMON', 3);
    CommandCategory$UNDERTALE_instance = new CommandCategory('UNDERTALE', 4);
    CommandCategory$ROBLOX_instance = new CommandCategory('ROBLOX', 5);
    CommandCategory$ANIME_instance = new CommandCategory('ANIME', 6);
    CommandCategory$DISCORD_instance = new CommandCategory('DISCORD', 7);
    CommandCategory$MISC_instance = new CommandCategory('MISC', 8);
    CommandCategory$ADMIN_instance = new CommandCategory('ADMIN', 9);
    CommandCategory$UTILS_instance = new CommandCategory('UTILS', 10);
    CommandCategory$SOCIAL_instance = new CommandCategory('SOCIAL', 11);
    CommandCategory$ACTION_instance = new CommandCategory('ACTION', 12);
    CommandCategory$ECONOMY_instance = new CommandCategory('ECONOMY', 13);
    CommandCategory$MUSIC_instance = new CommandCategory('MUSIC', 14);
    CommandCategory$FORTNITE_instance = new CommandCategory('FORTNITE', 15);
    CommandCategory$MAGIC_instance = new CommandCategory('MAGIC', 16);
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
  var CommandCategory$ACTION_instance;
  function CommandCategory$ACTION_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$ACTION_instance;
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
  var CommandCategory$FORTNITE_instance;
  function CommandCategory$FORTNITE_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$FORTNITE_instance;
  }
  var CommandCategory$MAGIC_instance;
  function CommandCategory$MAGIC_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$MAGIC_instance;
  }
  CommandCategory.prototype.getLocalizedName_rpa2mu$ = function (locale) {
    return locale.get_25kzsl$('commands.category.' + this.name.toLowerCase() + '.name', []);
  };
  CommandCategory.prototype.getLocalizedDescription_rpa2mu$ = function (locale) {
    return locale.get_25kzsl$('commands.category.' + this.name.toLowerCase() + '.description', []);
  };
  CommandCategory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommandCategory',
    interfaces: [Enum]
  };
  function CommandCategory$values() {
    return [CommandCategory$FUN_getInstance(), CommandCategory$IMAGES_getInstance(), CommandCategory$MINECRAFT_getInstance(), CommandCategory$POKEMON_getInstance(), CommandCategory$UNDERTALE_getInstance(), CommandCategory$ROBLOX_getInstance(), CommandCategory$ANIME_getInstance(), CommandCategory$DISCORD_getInstance(), CommandCategory$MISC_getInstance(), CommandCategory$ADMIN_getInstance(), CommandCategory$UTILS_getInstance(), CommandCategory$SOCIAL_getInstance(), CommandCategory$ACTION_getInstance(), CommandCategory$ECONOMY_getInstance(), CommandCategory$MUSIC_getInstance(), CommandCategory$FORTNITE_getInstance(), CommandCategory$MAGIC_getInstance()];
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
      case 'ACTION':
        return CommandCategory$ACTION_getInstance();
      case 'ECONOMY':
        return CommandCategory$ECONOMY_getInstance();
      case 'MUSIC':
        return CommandCategory$MUSIC_getInstance();
      case 'FORTNITE':
        return CommandCategory$FORTNITE_getInstance();
      case 'MAGIC':
        return CommandCategory$MAGIC_getInstance();
      default:throwISE('No enum constant net.perfectdreams.loritta.api.commands.CommandCategory.' + name);
    }
  }
  CommandCategory.valueOf_61zpoe$ = CommandCategory$valueOf;
  function CommandContext(args, message) {
    this.args = args;
    this.message = message;
  }
  CommandContext.prototype.sendMessage_61zpoe$ = function (content, continuation) {
    return this.message.channel.sendMessage_61zpoe$(content, continuation);
  };
  CommandContext.prototype.sendMessage_7jf3ad$ = function (lorittaMessage, continuation) {
    return this.message.channel.sendMessage_7jf3ad$(lorittaMessage, continuation);
  };
  CommandContext.prototype.reply_n105id$ = function (replies, continuation) {
    return this.reply_93p49j$(toList(replies), continuation);
  };
  CommandContext.prototype.reply_93p49j$ = function (replies, continuation) {
    var tmp$;
    var message = StringBuilder_init();
    tmp$ = replies.iterator();
    while (tmp$.hasNext()) {
      var loriReply = tmp$.next();
      message.append_gw00v9$(loriReply.build_p810ib$(this));
      message.append_gw00v9$('\n');
    }
    return this.sendMessage_61zpoe$(message.toString(), continuation);
  };
  CommandContext.prototype.getUserMention_6taknv$ = function (addSpace) {
    return this.message.author.asMention + (addSpace ? ' ' : '');
  };
  CommandContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommandContext',
    interfaces: []
  };
  function CommandMap() {
  }
  CommandMap.prototype.registerAll_p1lnih$ = function (commands) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== commands.length; ++tmp$) {
      var element = commands[tmp$];
      this.register_2clhsu$(element);
    }
  };
  CommandMap.prototype.unregisterAll_p1lnih$ = function (commands) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== commands.length; ++tmp$) {
      var element = commands[tmp$];
      this.unregister_2clhsu$(element);
    }
  };
  CommandMap.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CommandMap',
    interfaces: []
  };
  function Channel() {
  }
  Channel.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Channel',
    interfaces: []
  };
  function Guild() {
  }
  Guild.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Guild',
    interfaces: [Identifiable]
  };
  function Identifiable() {
  }
  Object.defineProperty(Identifiable.prototype, 'idAsString', {
    get: function () {
      return this.id.toString();
    }
  });
  Identifiable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Identifiable',
    interfaces: []
  };
  function LorittaEmote(code) {
    this.code = code;
  }
  LorittaEmote.prototype.isAvailable = function () {
    return true;
  };
  LorittaEmote.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LorittaEmote',
    interfaces: [Mentionable]
  };
  function Member() {
  }
  Member.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Member',
    interfaces: [User]
  };
  function Mentionable() {
  }
  Mentionable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Mentionable',
    interfaces: []
  };
  function Message() {
  }
  Message.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Message',
    interfaces: []
  };
  function MessageChannel() {
  }
  MessageChannel.prototype.sendMessage_61zpoe$ = function (content, continuation) {
    return this.sendMessage_7jf3ad$(new LorittaMessage(content), continuation);
  };
  MessageChannel.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MessageChannel',
    interfaces: [Channel]
  };
  function UnicodeEmote(code) {
    LorittaEmote.call(this, code);
  }
  Object.defineProperty(UnicodeEmote.prototype, 'asMention', {
    get: function () {
      return this.getName();
    }
  });
  UnicodeEmote.prototype.getName = function () {
    return this.code;
  };
  UnicodeEmote.prototype.isAvailable = function () {
    return true;
  };
  UnicodeEmote.prototype.toString = function () {
    return this.asMention;
  };
  UnicodeEmote.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UnicodeEmote',
    interfaces: [LorittaEmote]
  };
  function User() {
  }
  User.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'User',
    interfaces: [Identifiable, Mentionable]
  };
  function MessageReceivedEvent(message) {
    this.message = message;
  }
  MessageReceivedEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MessageReceivedEvent',
    interfaces: []
  };
  function LorittaMessage(content) {
    this.content = content;
  }
  LorittaMessage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LorittaMessage',
    interfaces: []
  };
  function LorittaReply(message, prefix, forceMention, hasPadding, mentionUser) {
    LorittaReply$Companion_getInstance();
    if (message === void 0)
      message = ' ';
    if (prefix === void 0)
      prefix = null;
    if (forceMention === void 0)
      forceMention = false;
    if (hasPadding === void 0)
      hasPadding = true;
    if (mentionUser === void 0)
      mentionUser = true;
    this.message = message;
    this.prefix = prefix;
    this.forceMention = forceMention;
    this.hasPadding = hasPadding;
    this.mentionUser = mentionUser;
  }
  LorittaReply.prototype.build_p810ib$ = function (commandContext) {
    return this.build_rkkr90$(commandContext.getUserMention_6taknv$(false), commandContext.getUserMention_6taknv$(true));
  };
  LorittaReply.prototype.build_ahjnlx$ = function (user) {
    return this.build_rkkr90$(user.asMention, null);
  };
  LorittaReply.prototype.build = function () {
    return this.build_rkkr90$(null, null);
  };
  LorittaReply.prototype.build_rkkr90$ = function (mention, contextAsMention) {
    if (mention === void 0)
      mention = null;
    if (contextAsMention === void 0)
      contextAsMention = null;
    var tmp$;
    var send = '';
    if (this.prefix != null) {
      send = toString(this.prefix) + ' **|** ';
    }
     else if (this.hasPadding) {
      send = '\uD83D\uDD39 **|** ';
    }
    if (this.mentionUser && mention != null) {
      if (this.forceMention || contextAsMention == null) {
        tmp$ = send + toString(mention) + ' ';
      }
       else {
        tmp$ = send + contextAsMention;
      }
      send = tmp$;
    }
    send += this.message;
    return send;
  };
  function LorittaReply$Companion() {
    LorittaReply$Companion_instance = this;
    this.LEFT_PADDING_0 = '\uD83D\uDD39';
  }
  LorittaReply$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LorittaReply$Companion_instance = null;
  function LorittaReply$Companion_getInstance() {
    if (LorittaReply$Companion_instance === null) {
      new LorittaReply$Companion();
    }
    return LorittaReply$Companion_instance;
  }
  LorittaReply.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LorittaReply',
    interfaces: []
  };
  function OnlineStatus(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function OnlineStatus_initFields() {
    OnlineStatus_initFields = function () {
    };
    OnlineStatus$ONLINE_instance = new OnlineStatus('ONLINE', 0);
    OnlineStatus$IDLE_instance = new OnlineStatus('IDLE', 1);
    OnlineStatus$DO_NOT_DISTURB_instance = new OnlineStatus('DO_NOT_DISTURB', 2);
    OnlineStatus$INVISIBLE_instance = new OnlineStatus('INVISIBLE', 3);
    OnlineStatus$OFFLINE_instance = new OnlineStatus('OFFLINE', 4);
    OnlineStatus$UNKNOWN_instance = new OnlineStatus('UNKNOWN', 5);
  }
  var OnlineStatus$ONLINE_instance;
  function OnlineStatus$ONLINE_getInstance() {
    OnlineStatus_initFields();
    return OnlineStatus$ONLINE_instance;
  }
  var OnlineStatus$IDLE_instance;
  function OnlineStatus$IDLE_getInstance() {
    OnlineStatus_initFields();
    return OnlineStatus$IDLE_instance;
  }
  var OnlineStatus$DO_NOT_DISTURB_instance;
  function OnlineStatus$DO_NOT_DISTURB_getInstance() {
    OnlineStatus_initFields();
    return OnlineStatus$DO_NOT_DISTURB_instance;
  }
  var OnlineStatus$INVISIBLE_instance;
  function OnlineStatus$INVISIBLE_getInstance() {
    OnlineStatus_initFields();
    return OnlineStatus$INVISIBLE_instance;
  }
  var OnlineStatus$OFFLINE_instance;
  function OnlineStatus$OFFLINE_getInstance() {
    OnlineStatus_initFields();
    return OnlineStatus$OFFLINE_instance;
  }
  var OnlineStatus$UNKNOWN_instance;
  function OnlineStatus$UNKNOWN_getInstance() {
    OnlineStatus_initFields();
    return OnlineStatus$UNKNOWN_instance;
  }
  OnlineStatus.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OnlineStatus',
    interfaces: [Enum]
  };
  function OnlineStatus$values() {
    return [OnlineStatus$ONLINE_getInstance(), OnlineStatus$IDLE_getInstance(), OnlineStatus$DO_NOT_DISTURB_getInstance(), OnlineStatus$INVISIBLE_getInstance(), OnlineStatus$OFFLINE_getInstance(), OnlineStatus$UNKNOWN_getInstance()];
  }
  OnlineStatus.values = OnlineStatus$values;
  function OnlineStatus$valueOf(name) {
    switch (name) {
      case 'ONLINE':
        return OnlineStatus$ONLINE_getInstance();
      case 'IDLE':
        return OnlineStatus$IDLE_getInstance();
      case 'DO_NOT_DISTURB':
        return OnlineStatus$DO_NOT_DISTURB_getInstance();
      case 'INVISIBLE':
        return OnlineStatus$INVISIBLE_getInstance();
      case 'OFFLINE':
        return OnlineStatus$OFFLINE_getInstance();
      case 'UNKNOWN':
        return OnlineStatus$UNKNOWN_getInstance();
      default:throwISE('No enum constant net.perfectdreams.loritta.api.OnlineStatus.' + name);
    }
  }
  OnlineStatus.valueOf_61zpoe$ = OnlineStatus$valueOf;
  function PlatformFeature(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PlatformFeature_initFields() {
    PlatformFeature_initFields = function () {
    };
    PlatformFeature$ADD_LEFT_PAD_instance = new PlatformFeature('ADD_LEFT_PAD', 0);
    PlatformFeature$TYPING_STATUS_instance = new PlatformFeature('TYPING_STATUS', 1);
    PlatformFeature$REACTIONS_instance = new PlatformFeature('REACTIONS', 2);
    PlatformFeature$RICH_EMBEDS_instance = new PlatformFeature('RICH_EMBEDS', 3);
    PlatformFeature$EMBED_LINKS_instance = new PlatformFeature('EMBED_LINKS', 4);
    PlatformFeature$FILE_UPLOAD_instance = new PlatformFeature('FILE_UPLOAD', 5);
    PlatformFeature$IMAGE_UPLOAD_instance = new PlatformFeature('IMAGE_UPLOAD', 6);
    PlatformFeature$INLINE_KEYBOARD_instance = new PlatformFeature('INLINE_KEYBOARD', 7);
    PlatformFeature$SUPPORTS_MARKDOWN_instance = new PlatformFeature('SUPPORTS_MARKDOWN', 8);
    PlatformFeature$SUPPORTS_HTML_instance = new PlatformFeature('SUPPORTS_HTML', 9);
  }
  var PlatformFeature$ADD_LEFT_PAD_instance;
  function PlatformFeature$ADD_LEFT_PAD_getInstance() {
    PlatformFeature_initFields();
    return PlatformFeature$ADD_LEFT_PAD_instance;
  }
  var PlatformFeature$TYPING_STATUS_instance;
  function PlatformFeature$TYPING_STATUS_getInstance() {
    PlatformFeature_initFields();
    return PlatformFeature$TYPING_STATUS_instance;
  }
  var PlatformFeature$REACTIONS_instance;
  function PlatformFeature$REACTIONS_getInstance() {
    PlatformFeature_initFields();
    return PlatformFeature$REACTIONS_instance;
  }
  var PlatformFeature$RICH_EMBEDS_instance;
  function PlatformFeature$RICH_EMBEDS_getInstance() {
    PlatformFeature_initFields();
    return PlatformFeature$RICH_EMBEDS_instance;
  }
  var PlatformFeature$EMBED_LINKS_instance;
  function PlatformFeature$EMBED_LINKS_getInstance() {
    PlatformFeature_initFields();
    return PlatformFeature$EMBED_LINKS_instance;
  }
  var PlatformFeature$FILE_UPLOAD_instance;
  function PlatformFeature$FILE_UPLOAD_getInstance() {
    PlatformFeature_initFields();
    return PlatformFeature$FILE_UPLOAD_instance;
  }
  var PlatformFeature$IMAGE_UPLOAD_instance;
  function PlatformFeature$IMAGE_UPLOAD_getInstance() {
    PlatformFeature_initFields();
    return PlatformFeature$IMAGE_UPLOAD_instance;
  }
  var PlatformFeature$INLINE_KEYBOARD_instance;
  function PlatformFeature$INLINE_KEYBOARD_getInstance() {
    PlatformFeature_initFields();
    return PlatformFeature$INLINE_KEYBOARD_instance;
  }
  var PlatformFeature$SUPPORTS_MARKDOWN_instance;
  function PlatformFeature$SUPPORTS_MARKDOWN_getInstance() {
    PlatformFeature_initFields();
    return PlatformFeature$SUPPORTS_MARKDOWN_instance;
  }
  var PlatformFeature$SUPPORTS_HTML_instance;
  function PlatformFeature$SUPPORTS_HTML_getInstance() {
    PlatformFeature_initFields();
    return PlatformFeature$SUPPORTS_HTML_instance;
  }
  PlatformFeature.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlatformFeature',
    interfaces: [Enum]
  };
  function PlatformFeature$values() {
    return [PlatformFeature$ADD_LEFT_PAD_getInstance(), PlatformFeature$TYPING_STATUS_getInstance(), PlatformFeature$REACTIONS_getInstance(), PlatformFeature$RICH_EMBEDS_getInstance(), PlatformFeature$EMBED_LINKS_getInstance(), PlatformFeature$FILE_UPLOAD_getInstance(), PlatformFeature$IMAGE_UPLOAD_getInstance(), PlatformFeature$INLINE_KEYBOARD_getInstance(), PlatformFeature$SUPPORTS_MARKDOWN_getInstance(), PlatformFeature$SUPPORTS_HTML_getInstance()];
  }
  PlatformFeature.values = PlatformFeature$values;
  function PlatformFeature$valueOf(name) {
    switch (name) {
      case 'ADD_LEFT_PAD':
        return PlatformFeature$ADD_LEFT_PAD_getInstance();
      case 'TYPING_STATUS':
        return PlatformFeature$TYPING_STATUS_getInstance();
      case 'REACTIONS':
        return PlatformFeature$REACTIONS_getInstance();
      case 'RICH_EMBEDS':
        return PlatformFeature$RICH_EMBEDS_getInstance();
      case 'EMBED_LINKS':
        return PlatformFeature$EMBED_LINKS_getInstance();
      case 'FILE_UPLOAD':
        return PlatformFeature$FILE_UPLOAD_getInstance();
      case 'IMAGE_UPLOAD':
        return PlatformFeature$IMAGE_UPLOAD_getInstance();
      case 'INLINE_KEYBOARD':
        return PlatformFeature$INLINE_KEYBOARD_getInstance();
      case 'SUPPORTS_MARKDOWN':
        return PlatformFeature$SUPPORTS_MARKDOWN_getInstance();
      case 'SUPPORTS_HTML':
        return PlatformFeature$SUPPORTS_HTML_getInstance();
      default:throwISE('No enum constant net.perfectdreams.loritta.api.platform.PlatformFeature.' + name);
    }
  }
  PlatformFeature.valueOf_61zpoe$ = PlatformFeature$valueOf;
  function DailyGuildMissingRequirement(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DailyGuildMissingRequirement_initFields() {
    DailyGuildMissingRequirement_initFields = function () {
    };
    DailyGuildMissingRequirement$REQUIRES_MORE_TIME_instance = new DailyGuildMissingRequirement('REQUIRES_MORE_TIME', 0);
    DailyGuildMissingRequirement$REQUIRES_MORE_XP_instance = new DailyGuildMissingRequirement('REQUIRES_MORE_XP', 1);
  }
  var DailyGuildMissingRequirement$REQUIRES_MORE_TIME_instance;
  function DailyGuildMissingRequirement$REQUIRES_MORE_TIME_getInstance() {
    DailyGuildMissingRequirement_initFields();
    return DailyGuildMissingRequirement$REQUIRES_MORE_TIME_instance;
  }
  var DailyGuildMissingRequirement$REQUIRES_MORE_XP_instance;
  function DailyGuildMissingRequirement$REQUIRES_MORE_XP_getInstance() {
    DailyGuildMissingRequirement_initFields();
    return DailyGuildMissingRequirement$REQUIRES_MORE_XP_instance;
  }
  DailyGuildMissingRequirement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DailyGuildMissingRequirement',
    interfaces: [Enum]
  };
  function DailyGuildMissingRequirement$values() {
    return [DailyGuildMissingRequirement$REQUIRES_MORE_TIME_getInstance(), DailyGuildMissingRequirement$REQUIRES_MORE_XP_getInstance()];
  }
  DailyGuildMissingRequirement.values = DailyGuildMissingRequirement$values;
  function DailyGuildMissingRequirement$valueOf(name) {
    switch (name) {
      case 'REQUIRES_MORE_TIME':
        return DailyGuildMissingRequirement$REQUIRES_MORE_TIME_getInstance();
      case 'REQUIRES_MORE_XP':
        return DailyGuildMissingRequirement$REQUIRES_MORE_XP_getInstance();
      default:throwISE('No enum constant net.perfectdreams.loritta.utils.daily.DailyGuildMissingRequirement.' + name);
    }
  }
  DailyGuildMissingRequirement.valueOf_61zpoe$ = DailyGuildMissingRequirement$valueOf;
  function format($receiver, arguments_0) {
    return 'Please Implement Later!!!';
  }
  Object.defineProperty(BaseLocale, 'Companion', {
    get: BaseLocale$Companion_getInstance
  });
  var package$com = _.com || (_.com = {});
  var package$mrpowergamerbr = package$com.mrpowergamerbr || (package$com.mrpowergamerbr = {});
  var package$loritta = package$mrpowergamerbr.loritta || (package$mrpowergamerbr.loritta = {});
  var package$utils = package$loritta.utils || (package$loritta.utils = {});
  var package$locale = package$utils.locale || (package$utils.locale = {});
  package$locale.BaseLocale = BaseLocale;
  var package$net = _.net || (_.net = {});
  var package$perfectdreams = package$net.perfectdreams || (package$net.perfectdreams = {});
  var package$loritta_0 = package$perfectdreams.loritta || (package$perfectdreams.loritta = {});
  var package$api = package$loritta_0.api || (package$loritta_0.api = {});
  var package$commands = package$api.commands || (package$api.commands = {});
  package$commands.Command = Command;
  package$commands.CommandArguments = CommandArguments;
  package$commands.CommandArgument = CommandArgument;
  Object.defineProperty(ArgumentType, 'TEXT', {
    get: ArgumentType$TEXT_getInstance
  });
  Object.defineProperty(ArgumentType, 'NUMBER', {
    get: ArgumentType$NUMBER_getInstance
  });
  Object.defineProperty(ArgumentType, 'USER', {
    get: ArgumentType$USER_getInstance
  });
  Object.defineProperty(ArgumentType, 'ROLE', {
    get: ArgumentType$ROLE_getInstance
  });
  Object.defineProperty(ArgumentType, 'COLOR', {
    get: ArgumentType$COLOR_getInstance
  });
  Object.defineProperty(ArgumentType, 'EMOTE', {
    get: ArgumentType$EMOTE_getInstance
  });
  Object.defineProperty(ArgumentType, 'IMAGE', {
    get: ArgumentType$IMAGE_getInstance
  });
  package$commands.ArgumentType = ArgumentType;
  package$commands.arguments_cpxb68$ = arguments_0;
  package$commands.CommandArgumentsBuilder = CommandArgumentsBuilder;
  package$commands.CommandArgumentBuilder = CommandArgumentBuilder;
  package$commands.command_1ddcy2$ = command;
  package$commands.CommandBuilder = CommandBuilder;
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
  Object.defineProperty(CommandCategory, 'ACTION', {
    get: CommandCategory$ACTION_getInstance
  });
  Object.defineProperty(CommandCategory, 'ECONOMY', {
    get: CommandCategory$ECONOMY_getInstance
  });
  Object.defineProperty(CommandCategory, 'MUSIC', {
    get: CommandCategory$MUSIC_getInstance
  });
  Object.defineProperty(CommandCategory, 'FORTNITE', {
    get: CommandCategory$FORTNITE_getInstance
  });
  Object.defineProperty(CommandCategory, 'MAGIC', {
    get: CommandCategory$MAGIC_getInstance
  });
  package$commands.CommandCategory = CommandCategory;
  package$commands.CommandContext = CommandContext;
  package$commands.CommandMap = CommandMap;
  var package$entities = package$api.entities || (package$api.entities = {});
  package$entities.Channel = Channel;
  package$entities.Guild = Guild;
  package$entities.Identifiable = Identifiable;
  package$entities.LorittaEmote = LorittaEmote;
  package$entities.Member = Member;
  package$entities.Mentionable = Mentionable;
  package$entities.Message = Message;
  package$entities.MessageChannel = MessageChannel;
  package$entities.UnicodeEmote = UnicodeEmote;
  package$entities.User = User;
  var package$events = package$api.events || (package$api.events = {});
  package$events.MessageReceivedEvent = MessageReceivedEvent;
  var package$messages = package$api.messages || (package$api.messages = {});
  package$messages.LorittaMessage = LorittaMessage;
  Object.defineProperty(LorittaReply, 'Companion', {
    get: LorittaReply$Companion_getInstance
  });
  package$messages.LorittaReply = LorittaReply;
  Object.defineProperty(OnlineStatus, 'ONLINE', {
    get: OnlineStatus$ONLINE_getInstance
  });
  Object.defineProperty(OnlineStatus, 'IDLE', {
    get: OnlineStatus$IDLE_getInstance
  });
  Object.defineProperty(OnlineStatus, 'DO_NOT_DISTURB', {
    get: OnlineStatus$DO_NOT_DISTURB_getInstance
  });
  Object.defineProperty(OnlineStatus, 'INVISIBLE', {
    get: OnlineStatus$INVISIBLE_getInstance
  });
  Object.defineProperty(OnlineStatus, 'OFFLINE', {
    get: OnlineStatus$OFFLINE_getInstance
  });
  Object.defineProperty(OnlineStatus, 'UNKNOWN', {
    get: OnlineStatus$UNKNOWN_getInstance
  });
  package$api.OnlineStatus = OnlineStatus;
  Object.defineProperty(PlatformFeature, 'ADD_LEFT_PAD', {
    get: PlatformFeature$ADD_LEFT_PAD_getInstance
  });
  Object.defineProperty(PlatformFeature, 'TYPING_STATUS', {
    get: PlatformFeature$TYPING_STATUS_getInstance
  });
  Object.defineProperty(PlatformFeature, 'REACTIONS', {
    get: PlatformFeature$REACTIONS_getInstance
  });
  Object.defineProperty(PlatformFeature, 'RICH_EMBEDS', {
    get: PlatformFeature$RICH_EMBEDS_getInstance
  });
  Object.defineProperty(PlatformFeature, 'EMBED_LINKS', {
    get: PlatformFeature$EMBED_LINKS_getInstance
  });
  Object.defineProperty(PlatformFeature, 'FILE_UPLOAD', {
    get: PlatformFeature$FILE_UPLOAD_getInstance
  });
  Object.defineProperty(PlatformFeature, 'IMAGE_UPLOAD', {
    get: PlatformFeature$IMAGE_UPLOAD_getInstance
  });
  Object.defineProperty(PlatformFeature, 'INLINE_KEYBOARD', {
    get: PlatformFeature$INLINE_KEYBOARD_getInstance
  });
  Object.defineProperty(PlatformFeature, 'SUPPORTS_MARKDOWN', {
    get: PlatformFeature$SUPPORTS_MARKDOWN_getInstance
  });
  Object.defineProperty(PlatformFeature, 'SUPPORTS_HTML', {
    get: PlatformFeature$SUPPORTS_HTML_getInstance
  });
  var package$platform = package$api.platform || (package$api.platform = {});
  package$platform.PlatformFeature = PlatformFeature;
  Object.defineProperty(DailyGuildMissingRequirement, 'REQUIRES_MORE_TIME', {
    get: DailyGuildMissingRequirement$REQUIRES_MORE_TIME_getInstance
  });
  Object.defineProperty(DailyGuildMissingRequirement, 'REQUIRES_MORE_XP', {
    get: DailyGuildMissingRequirement$REQUIRES_MORE_XP_getInstance
  });
  var package$utils_0 = package$loritta_0.utils || (package$loritta_0.utils = {});
  var package$daily = package$utils_0.daily || (package$utils_0.daily = {});
  package$daily.DailyGuildMissingRequirement = DailyGuildMissingRequirement;
  var package$utils_1 = package$api.utils || (package$api.utils = {});
  package$utils_1.format_aheo4u$ = format;
  Object.defineProperty(Guild.prototype, 'idAsString', Object.getOwnPropertyDescriptor(Identifiable.prototype, 'idAsString'));
  Object.defineProperty(User.prototype, 'idAsString', Object.getOwnPropertyDescriptor(Identifiable.prototype, 'idAsString'));
  Object.defineProperty(Member.prototype, 'idAsString', Object.getOwnPropertyDescriptor(User.prototype, 'idAsString'));
  Kotlin.defineModule('loritta-api', _);
  return _;
}));

//# sourceMappingURL=loritta-api.js.map
