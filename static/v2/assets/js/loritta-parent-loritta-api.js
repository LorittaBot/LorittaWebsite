(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-logging', 'kotlinx-coroutines-core', 'canvas'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-logging'), require('kotlinx-coroutines-core'), require('canvas'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'loritta-parent-loritta-api'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'loritta-parent-loritta-api'.");
    }
    if (typeof this['kotlin-logging'] === 'undefined') {
      throw new Error("Error loading module 'loritta-parent-loritta-api'. Its dependency 'kotlin-logging' was not found. Please, check whether 'kotlin-logging' is loaded prior to 'loritta-parent-loritta-api'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'loritta-parent-loritta-api'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'loritta-parent-loritta-api'.");
    }
    root['loritta-parent-loritta-api'] = factory(typeof this['loritta-parent-loritta-api'] === 'undefined' ? {} : this['loritta-parent-loritta-api'], kotlin, this['kotlin-logging'], this['kotlinx-coroutines-core'], "canvas");
  }
}(this, function (_, Kotlin, $module$kotlin_logging, $module$kotlinx_coroutines_core, $module$canvas) {
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
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var RuntimeException_init_0 = Kotlin.kotlin.RuntimeException_init;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var toString = Kotlin.toString;
  var removeAll = Kotlin.kotlin.collections.removeAll_qafx1e$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var equals = Kotlin.equals;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var L300000 = Kotlin.Long.fromInt(300000);
  var Long$Companion$MAX_VALUE = Kotlin.Long.MAX_VALUE;
  var createCanvas = $module$canvas.createCanvas;
  var throwUPAE = Kotlin.throwUPAE;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var numberToInt = Kotlin.numberToInt;
  var toIntArray = Kotlin.kotlin.collections.toIntArray_fx3nzu$;
  var Math_0 = Math;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  ArgumentType.prototype = Object.create(Enum.prototype);
  ArgumentType.prototype.constructor = ArgumentType;
  CommandCategory.prototype = Object.create(Enum.prototype);
  CommandCategory.prototype.constructor = CommandCategory;
  CommandException.prototype = Object.create(RuntimeException.prototype);
  CommandException.prototype.constructor = CommandException;
  SilentCommandException.prototype = Object.create(RuntimeException.prototype);
  SilentCommandException.prototype.constructor = SilentCommandException;
  UnicodeEmote.prototype = Object.create(LorittaEmote.prototype);
  UnicodeEmote.prototype.constructor = UnicodeEmote;
  OnlineStatus.prototype = Object.create(Enum.prototype);
  OnlineStatus.prototype.constructor = OnlineStatus;
  PlatformFeature.prototype = Object.create(Enum.prototype);
  PlatformFeature.prototype.constructor = PlatformFeature;
  InvalidPluginException.prototype = Object.create(RuntimeException.prototype);
  InvalidPluginException.prototype.constructor = InvalidPluginException;
  Image$ScaleType.prototype = Object.create(Enum.prototype);
  Image$ScaleType.prototype.constructor = Image$ScaleType;
  Image$ImageType.prototype = Object.create(Enum.prototype);
  Image$ImageType.prototype.constructor = Image$ImageType;
  Rarity.prototype = Object.create(Enum.prototype);
  Rarity.prototype.constructor = Rarity;
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
  function Command(loritta, labels, commandName, category, description, usage, examples, executor) {
    if (examples === void 0)
      examples = null;
    this.loritta = loritta;
    this.labels = labels;
    this.commandName = commandName;
    this.category = category;
    this.description = description;
    this.usage = usage;
    this.examples = examples;
    this.executor = executor;
    this.needsToUploadFiles = false;
    this.hideInHelp = false;
    this.hasCommandFeedback = true;
    this.sendTypingStatus = false;
    this.canUseInPrivateChannel = false;
    this.onlyOwner = false;
    this.requiredFeatures = emptyList();
    this.similarCommands = emptyList();
    this.cooldown_nd28il$_0 = 2500;
    this.executedCount = 0;
  }
  Object.defineProperty(Command.prototype, 'cooldown', {
    get: function () {
      return this.cooldown_nd28il$_0;
    }
  });
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
  function command(loritta, commandName, labels, category, builder) {
    var b = new CommandBuilder(loritta, commandName, labels, category);
    builder(b);
    return b.build();
  }
  function CommandBuilder(loritta, commandName, labels, category) {
    this.loritta = loritta;
    this.commandName = commandName;
    this.labels = labels;
    this.category = category;
    this.canUseInPrivateChannel = false;
    this.needsToUploadFiles = false;
    this.hideInHelp = false;
    this.requiredFeatures = emptyList();
    this.onlyOwner = false;
    this.similarCommands = emptyList();
    this.descriptionCallback = null;
    this.usageCallback = null;
    this.examplesCallback = null;
    this.executeCallback = null;
  }
  CommandBuilder.prototype.description_xuwwva$ = function (callback) {
    this.descriptionCallback = callback;
  };
  CommandBuilder.prototype.usage_cpxb68$ = function (callback) {
    this.usageCallback = callback;
  };
  CommandBuilder.prototype.examples_8gzklt$ = function (callback) {
    this.examplesCallback = callback;
  };
  CommandBuilder.prototype.executes_jsokuk$ = function (callback) {
    this.executeCallback = callback;
  };
  function CommandBuilder$build$lambda(this$CommandBuilder) {
    return function ($receiver) {
      var tmp$;
      (tmp$ = this$CommandBuilder.usageCallback) != null ? tmp$($receiver) : null;
      return Unit;
    };
  }
  function CommandBuilder$build$lambda_0(it) {
    return '???';
  }
  CommandBuilder.prototype.build = function () {
    var tmp$;
    var usage = arguments_0(CommandBuilder$build$lambda(this));
    var $receiver = new Command(this.loritta, this.labels, this.commandName, this.category, (tmp$ = this.descriptionCallback) != null ? tmp$ : CommandBuilder$build$lambda_0, usage, this.examplesCallback, ensureNotNull(this.executeCallback));
    this.build2()($receiver);
    return $receiver;
  };
  function CommandBuilder$build2$lambda(this$CommandBuilder) {
    return function ($receiver) {
      $receiver.canUseInPrivateChannel = this$CommandBuilder.canUseInPrivateChannel;
      $receiver.needsToUploadFiles = this$CommandBuilder.needsToUploadFiles;
      $receiver.hideInHelp = this$CommandBuilder.hideInHelp;
      $receiver.requiredFeatures = this$CommandBuilder.requiredFeatures;
      $receiver.onlyOwner = this$CommandBuilder.onlyOwner;
      $receiver.similarCommands = this$CommandBuilder.similarCommands;
      return Unit;
    };
  }
  CommandBuilder.prototype.build2 = function () {
    return CommandBuilder$build2$lambda(this);
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
  function CommandContext(loritta, command, args, message, locale) {
    this.loritta = loritta;
    this.command = command;
    this.args = args;
    this.message = message;
    this.locale = locale;
    this.sender = this.message.author;
  }
  CommandContext.prototype.sendMessage_61zpoe$ = function (content, continuation) {
    return this.message.channel.sendMessage_61zpoe$(content, continuation);
  };
  CommandContext.prototype.sendMessage_7jf3ad$ = function (lorittaMessage, continuation) {
    return this.message.channel.sendMessage_7jf3ad$(lorittaMessage, continuation);
  };
  CommandContext.prototype.sendImage_ai0stq$ = function (image, fileName, content, continuation) {
    if (fileName === void 0)
      fileName = 'image.png';
    if (content === void 0)
      content = this.getUserMention_6taknv$(true);
    return this.message.channel.sendFile_mjjqx4$(image.toByteArray(), fileName, content, continuation);
  };
  CommandContext.prototype.imageUrl_vux9f0$ = function (argument, searchPreviousMessages, continuation, callback$default) {
    if (searchPreviousMessages === void 0)
      searchPreviousMessages = 25;
    return callback$default ? callback$default(argument, searchPreviousMessages, continuation) : this.imageUrl_vux9f0$$default(argument, searchPreviousMessages, continuation);
  };
  CommandContext.prototype.image_ydzd23$ = function (argument, searchPreviousMessages, createTextAsImageIfNotFound, continuation, callback$default) {
    if (searchPreviousMessages === void 0)
      searchPreviousMessages = 25;
    if (createTextAsImageIfNotFound === void 0)
      createTextAsImageIfNotFound = true;
    return callback$default ? callback$default(argument, searchPreviousMessages, createTextAsImageIfNotFound, continuation) : this.image_ydzd23$$default(argument, searchPreviousMessages, createTextAsImageIfNotFound, continuation);
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
  CommandContext.prototype.checkType_ryr6y1$ = defineInlineFunction('loritta-parent-loritta-api.net.perfectdreams.loritta.api.commands.CommandContext.checkType_ryr6y1$', wrapFunction(function () {
    var utils = _.net.perfectdreams.loritta.utils;
    var CommandException_init = _.net.perfectdreams.loritta.api.commands.CommandException;
    return function (T_0, isT, source) {
      if (!isT(source))
        throw new CommandException_init(this.locale.get_25kzsl$('commands.commandNotSupportedInThisPlatform', []), utils.Emotes.LORI_CRYING.toString());
      return source;
    };
  }));
  function Coroutine$validate_dy6kq7$($this, image_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$image = image_0;
  }
  Coroutine$validate_dy6kq7$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$validate_dy6kq7$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$validate_dy6kq7$.prototype.constructor = Coroutine$validate_dy6kq7$;
  Coroutine$validate_dy6kq7$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$image == null) {
              if (this.$this.args.isEmpty()) {
                this.state_0 = 2;
                this.result_0 = this.$this.explain(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                throw new CommandException(this.$this.locale.get_25kzsl$('commands.noValidImageFound', [Emotes_getInstance().LORI_CRYING]), Emotes_getInstance().LORI_CRYING.toString());
              }
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            throw new SilentCommandException();
          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            return this.local$image;
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
  CommandContext.prototype.validate_dy6kq7$ = function (image_0, continuation_0, suspended) {
    var instance = new Coroutine$validate_dy6kq7$(this, image_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  CommandContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommandContext',
    interfaces: []
  };
  function CommandException(reason, prefix) {
    RuntimeException_init_0(this);
    this.reason = reason;
    this.prefix = prefix;
    this.name = 'CommandException';
  }
  CommandException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommandException',
    interfaces: [RuntimeException]
  };
  function CommandMap() {
  }
  CommandMap.prototype.registerAll_1p0aw6$ = function (commands) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== commands.length; ++tmp$) {
      var element = commands[tmp$];
      this.register_bomkl7$(element);
    }
  };
  CommandMap.prototype.unregisterAll_1p0aw6$ = function (commands) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== commands.length; ++tmp$) {
      var element = commands[tmp$];
      this.unregister_bomkl7$(element);
    }
  };
  CommandMap.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CommandMap',
    interfaces: []
  };
  function DSLCommand() {
  }
  DSLCommand.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DSLCommand',
    interfaces: []
  };
  function SilentCommandException() {
    RuntimeException_init_0(this);
    this.name = 'SilentCommandException';
  }
  SilentCommandException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SilentCommandException',
    interfaces: [RuntimeException]
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
  MessageChannel.prototype.sendFile_mjjqx4$ = function (bytes, fileName, content, continuation) {
    return this.sendFile_nyqsep$(bytes, fileName, new LorittaMessage(content), continuation);
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
  function VoiceChannel() {
  }
  VoiceChannel.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'VoiceChannel',
    interfaces: [Channel]
  };
  function VoiceState() {
  }
  VoiceState.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'VoiceState',
    interfaces: []
  };
  function MessageReceivedEvent(message) {
    this.message = message;
  }
  MessageReceivedEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MessageReceivedEvent',
    interfaces: []
  };
  function LorittaBot() {
  }
  LorittaBot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LorittaBot',
    interfaces: []
  };
  function AudioManager() {
  }
  AudioManager.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AudioManager',
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
  function LorittaReply_init(message, prefix, forceMention, hasPadding, mentionUser, $this) {
    if (forceMention === void 0)
      forceMention = false;
    if (hasPadding === void 0)
      hasPadding = true;
    if (mentionUser === void 0)
      mentionUser = true;
    $this = $this || Object.create(LorittaReply.prototype);
    LorittaReply.call($this, message, prefix.toString(), forceMention, hasPadding, mentionUser);
    return $this;
  }
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
  function InvalidPluginException(message) {
    RuntimeException_init_0(this);
    this.message_odpnpa$_0 = message;
    this.name = 'InvalidPluginException';
  }
  Object.defineProperty(InvalidPluginException.prototype, 'message', {
    get: function () {
      return this.message_odpnpa$_0;
    }
  });
  InvalidPluginException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InvalidPluginException',
    interfaces: [RuntimeException]
  };
  function LorittaPlugin(name, loritta) {
    this.name = name;
    this.loritta = loritta;
    this.registeredCommands = ArrayList_init();
    this.pluginTasks = ArrayList_init();
  }
  LorittaPlugin.prototype.onEnable = function () {
  };
  LorittaPlugin.prototype.onDisable = function () {
  };
  LorittaPlugin.prototype.registerCommands_ykkuiw$ = function (commands) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== commands.length; ++tmp$) {
      var element = commands[tmp$];
      this.registerCommand_5nb6a3$(element);
    }
  };
  LorittaPlugin.prototype.registerCommand_5nb6a3$ = function (command) {
    this.loritta.commandMap.register_bomkl7$(command);
    this.registeredCommands.add_11rb$(command);
  };
  function LorittaPlugin$launch$lambda(it) {
    return it.isCompleted;
  }
  LorittaPlugin.prototype.launch_3q5nlj$ = function (block) {
    removeAll(this.pluginTasks, LorittaPlugin$launch$lambda);
    var job = launch(coroutines.GlobalScope, void 0, void 0, block);
    this.pluginTasks.add_11rb$(job);
    return job;
  };
  LorittaPlugin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LorittaPlugin',
    interfaces: []
  };
  function PluginManager() {
  }
  PluginManager.prototype.getPlugin_61zpoe$ = function (name) {
    var $receiver = this.plugins;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (equals(element.name, name)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  };
  PluginManager.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PluginManager',
    interfaces: []
  };
  function Graphics() {
  }
  Graphics.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Graphics',
    interfaces: []
  };
  function Image() {
  }
  function Image$ScaleType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Image$ScaleType_initFields() {
    Image$ScaleType_initFields = function () {
    };
    Image$ScaleType$SMOOTH_instance = new Image$ScaleType('SMOOTH', 0);
  }
  var Image$ScaleType$SMOOTH_instance;
  function Image$ScaleType$SMOOTH_getInstance() {
    Image$ScaleType_initFields();
    return Image$ScaleType$SMOOTH_instance;
  }
  Image$ScaleType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScaleType',
    interfaces: [Enum]
  };
  function Image$ScaleType$values() {
    return [Image$ScaleType$SMOOTH_getInstance()];
  }
  Image$ScaleType.values = Image$ScaleType$values;
  function Image$ScaleType$valueOf(name) {
    switch (name) {
      case 'SMOOTH':
        return Image$ScaleType$SMOOTH_getInstance();
      default:throwISE('No enum constant net.perfectdreams.loritta.api.utils.image.Image.ScaleType.' + name);
    }
  }
  Image$ScaleType.valueOf_61zpoe$ = Image$ScaleType$valueOf;
  function Image$ImageType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Image$ImageType_initFields() {
    Image$ImageType_initFields = function () {
    };
    Image$ImageType$ARGB_instance = new Image$ImageType('ARGB', 0);
  }
  var Image$ImageType$ARGB_instance;
  function Image$ImageType$ARGB_getInstance() {
    Image$ImageType_initFields();
    return Image$ImageType$ARGB_instance;
  }
  Image$ImageType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageType',
    interfaces: [Enum]
  };
  function Image$ImageType$values() {
    return [Image$ImageType$ARGB_getInstance()];
  }
  Image$ImageType.values = Image$ImageType$values;
  function Image$ImageType$valueOf(name) {
    switch (name) {
      case 'ARGB':
        return Image$ImageType$ARGB_getInstance();
      default:throwISE('No enum constant net.perfectdreams.loritta.api.utils.image.Image.ImageType.' + name);
    }
  }
  Image$ImageType.valueOf_61zpoe$ = Image$ImageType$valueOf;
  Image.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Image',
    interfaces: []
  };
  function LorittaAssets() {
  }
  LorittaAssets.prototype.loadImage_o0ij6q$ = function (path, storeInCache, loadFromCache, continuation, callback$default) {
    if (storeInCache === void 0)
      storeInCache = false;
    if (loadFromCache === void 0)
      loadFromCache = true;
    return callback$default ? callback$default(path, storeInCache, loadFromCache, continuation) : this.loadImage_o0ij6q$$default(path, storeInCache, loadFromCache, continuation);
  };
  LorittaAssets.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LorittaAssets',
    interfaces: []
  };
  function Rarity(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Rarity_initFields() {
    Rarity_initFields = function () {
    };
    Rarity$COMMON_instance = new Rarity('COMMON', 0);
    Rarity$UNCOMMON_instance = new Rarity('UNCOMMON', 1);
    Rarity$RARE_instance = new Rarity('RARE', 2);
    Rarity$EPIC_instance = new Rarity('EPIC', 3);
    Rarity$LEGENDARY_instance = new Rarity('LEGENDARY', 4);
  }
  var Rarity$COMMON_instance;
  function Rarity$COMMON_getInstance() {
    Rarity_initFields();
    return Rarity$COMMON_instance;
  }
  var Rarity$UNCOMMON_instance;
  function Rarity$UNCOMMON_getInstance() {
    Rarity_initFields();
    return Rarity$UNCOMMON_instance;
  }
  var Rarity$RARE_instance;
  function Rarity$RARE_getInstance() {
    Rarity_initFields();
    return Rarity$RARE_instance;
  }
  var Rarity$EPIC_instance;
  function Rarity$EPIC_getInstance() {
    Rarity_initFields();
    return Rarity$EPIC_instance;
  }
  var Rarity$LEGENDARY_instance;
  function Rarity$LEGENDARY_getInstance() {
    Rarity_initFields();
    return Rarity$LEGENDARY_instance;
  }
  Rarity.prototype.getProfilePrice = function () {
    switch (this.name) {
      case 'COMMON':
        return 7500;
      case 'UNCOMMON':
        return 35500;
      case 'RARE':
        return 75000;
      case 'EPIC':
        return 150000;
      case 'LEGENDARY':
        return 250000;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  Rarity.prototype.getBackgroundPrice = function () {
    switch (this.name) {
      case 'COMMON':
        return 2500;
      case 'UNCOMMON':
        return 5000;
      case 'RARE':
        return 10000;
      case 'EPIC':
        return 25000;
      case 'LEGENDARY':
        return 80000;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  Rarity.prototype.getBadgePrice = function () {
    switch (this.name) {
      case 'COMMON':
        return 1800;
      case 'UNCOMMON':
        return 3000;
      case 'RARE':
        return 5000;
      case 'EPIC':
        return 10000;
      case 'LEGENDARY':
        return 30000;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  Rarity.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rarity',
    interfaces: [Enum]
  };
  function Rarity$values() {
    return [Rarity$COMMON_getInstance(), Rarity$UNCOMMON_getInstance(), Rarity$RARE_getInstance(), Rarity$EPIC_getInstance(), Rarity$LEGENDARY_getInstance()];
  }
  Rarity.values = Rarity$values;
  function Rarity$valueOf(name) {
    switch (name) {
      case 'COMMON':
        return Rarity$COMMON_getInstance();
      case 'UNCOMMON':
        return Rarity$UNCOMMON_getInstance();
      case 'RARE':
        return Rarity$RARE_getInstance();
      case 'EPIC':
        return Rarity$EPIC_getInstance();
      case 'LEGENDARY':
        return Rarity$LEGENDARY_getInstance();
      default:throwISE('No enum constant net.perfectdreams.loritta.api.utils.Rarity.' + name);
    }
  }
  Rarity.valueOf_61zpoe$ = Rarity$valueOf;
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
  function Emotes() {
    Emotes_instance = this;
    this.lazyMgr_0 = resettableManager();
    this.logger_0 = mu.KotlinLogging.logger_o14v8n$(Emotes$logger$lambda);
    this.emoteManager = null;
    this.MISSING_EMOTE = new UnicodeEmote('\uD83D\uDC1B');
    this.ONLINE_g3ar8a$_0 = resettableLazy(this.lazyMgr_0, Emotes$ONLINE$lambda(this));
    this.IDLE_2nkuk9$_0 = resettableLazy(this.lazyMgr_0, Emotes$IDLE$lambda(this));
    this.DO_NOT_DISTURB_e24yha$_0 = resettableLazy(this.lazyMgr_0, Emotes$DO_NOT_DISTURB$lambda(this));
    this.OFFLINE_ngtjxg$_0 = resettableLazy(this.lazyMgr_0, Emotes$OFFLINE$lambda(this));
    this.BOT_TAG_vvo4l$_0 = resettableLazy(this.lazyMgr_0, Emotes$BOT_TAG$lambda(this));
    this.WUMPUS_BASIC_dcc8tb$_0 = resettableLazy(this.lazyMgr_0, Emotes$WUMPUS_BASIC$lambda(this));
    this.LORI_TEMMIE_pgljkb$_0 = resettableLazy(this.lazyMgr_0, Emotes$LORI_TEMMIE$lambda(this));
    this.LORI_OWO_qxvget$_0 = resettableLazy(this.lazyMgr_0, Emotes$LORI_OWO$lambda(this));
    this.LORI_HUG_qxzyzs$_0 = resettableLazy(this.lazyMgr_0, Emotes$LORI_HUG$lambda(this));
    this.LORI_HAPPY_we19f6$_0 = resettableLazy(this.lazyMgr_0, Emotes$LORI_HAPPY$lambda(this));
    this.LORI_CRYING_fh80lm$_0 = resettableLazy(this.lazyMgr_0, Emotes$LORI_CRYING$lambda(this));
    this.LORI_RAGE_h8iped$_0 = resettableLazy(this.lazyMgr_0, Emotes$LORI_RAGE$lambda(this));
    this.LORI_SHRUG_xbp0t9$_0 = resettableLazy(this.lazyMgr_0, Emotes$LORI_SHRUG$lambda(this));
    this.LORI_NITRO_BOOST_lpf094$_0 = resettableLazy(this.lazyMgr_0, Emotes$LORI_NITRO_BOOST$lambda(this));
    this.LORI_WOW_qxqi99$_0 = resettableLazy(this.lazyMgr_0, Emotes$LORI_WOW$lambda(this));
    this.LORI_SMILE_x93zg6$_0 = resettableLazy(this.lazyMgr_0, Emotes$LORI_SMILE$lambda(this));
    this.LORI_HM_3pon6l$_0 = resettableLazy(this.lazyMgr_0, Emotes$LORI_HM$lambda(this));
    this.LORI_RICH_h8nqee$_0 = resettableLazy(this.lazyMgr_0, Emotes$LORI_RICH$lambda(this));
    this.LORI_PAT_qxv9m9$_0 = resettableLazy(this.lazyMgr_0, Emotes$LORI_PAT$lambda(this));
    this.LORI_YAY_qxpim7$_0 = resettableLazy(this.lazyMgr_0, Emotes$LORI_YAY$lambda(this));
    this.LORI_HEART_wfywcs$_0 = resettableLazy(this.lazyMgr_0, Emotes$LORI_HEART$lambda(this));
    this.LORI_HMPF_h38m07$_0 = resettableLazy(this.lazyMgr_0, Emotes$LORI_HMPF$lambda(this));
    this.MINECRAFT_GRASS_v69q5f$_0 = resettableLazy(this.lazyMgr_0, Emotes$MINECRAFT_GRASS$lambda(this));
    this.DEFAULT_DANCE_ko5vny$_0 = resettableLazy(this.lazyMgr_0, Emotes$DEFAULT_DANCE$lambda(this));
    this.KOTLIN_t0bgx8$_0 = resettableLazy(this.lazyMgr_0, Emotes$KOTLIN$lambda(this));
    this.JDA_vzq2qo$_0 = resettableLazy(this.lazyMgr_0, Emotes$JDA$lambda(this));
    this.emoteMap = emptyMap();
  }
  var Emotes$ONLINE_metadata = new PropertyMetadata('ONLINE');
  Object.defineProperty(Emotes.prototype, 'ONLINE', {
    get: function () {
      return this.ONLINE_g3ar8a$_0.getValue_n5byny$(this, Emotes$ONLINE_metadata);
    }
  });
  var Emotes$IDLE_metadata = new PropertyMetadata('IDLE');
  Object.defineProperty(Emotes.prototype, 'IDLE', {
    get: function () {
      return this.IDLE_2nkuk9$_0.getValue_n5byny$(this, Emotes$IDLE_metadata);
    }
  });
  var Emotes$DO_NOT_DISTURB_metadata = new PropertyMetadata('DO_NOT_DISTURB');
  Object.defineProperty(Emotes.prototype, 'DO_NOT_DISTURB', {
    get: function () {
      return this.DO_NOT_DISTURB_e24yha$_0.getValue_n5byny$(this, Emotes$DO_NOT_DISTURB_metadata);
    }
  });
  var Emotes$OFFLINE_metadata = new PropertyMetadata('OFFLINE');
  Object.defineProperty(Emotes.prototype, 'OFFLINE', {
    get: function () {
      return this.OFFLINE_ngtjxg$_0.getValue_n5byny$(this, Emotes$OFFLINE_metadata);
    }
  });
  var Emotes$BOT_TAG_metadata = new PropertyMetadata('BOT_TAG');
  Object.defineProperty(Emotes.prototype, 'BOT_TAG', {
    get: function () {
      return this.BOT_TAG_vvo4l$_0.getValue_n5byny$(this, Emotes$BOT_TAG_metadata);
    }
  });
  var Emotes$WUMPUS_BASIC_metadata = new PropertyMetadata('WUMPUS_BASIC');
  Object.defineProperty(Emotes.prototype, 'WUMPUS_BASIC', {
    get: function () {
      return this.WUMPUS_BASIC_dcc8tb$_0.getValue_n5byny$(this, Emotes$WUMPUS_BASIC_metadata);
    }
  });
  var Emotes$LORI_TEMMIE_metadata = new PropertyMetadata('LORI_TEMMIE');
  Object.defineProperty(Emotes.prototype, 'LORI_TEMMIE', {
    get: function () {
      return this.LORI_TEMMIE_pgljkb$_0.getValue_n5byny$(this, Emotes$LORI_TEMMIE_metadata);
    }
  });
  var Emotes$LORI_OWO_metadata = new PropertyMetadata('LORI_OWO');
  Object.defineProperty(Emotes.prototype, 'LORI_OWO', {
    get: function () {
      return this.LORI_OWO_qxvget$_0.getValue_n5byny$(this, Emotes$LORI_OWO_metadata);
    }
  });
  var Emotes$LORI_HUG_metadata = new PropertyMetadata('LORI_HUG');
  Object.defineProperty(Emotes.prototype, 'LORI_HUG', {
    get: function () {
      return this.LORI_HUG_qxzyzs$_0.getValue_n5byny$(this, Emotes$LORI_HUG_metadata);
    }
  });
  var Emotes$LORI_HAPPY_metadata = new PropertyMetadata('LORI_HAPPY');
  Object.defineProperty(Emotes.prototype, 'LORI_HAPPY', {
    get: function () {
      return this.LORI_HAPPY_we19f6$_0.getValue_n5byny$(this, Emotes$LORI_HAPPY_metadata);
    }
  });
  var Emotes$LORI_CRYING_metadata = new PropertyMetadata('LORI_CRYING');
  Object.defineProperty(Emotes.prototype, 'LORI_CRYING', {
    get: function () {
      return this.LORI_CRYING_fh80lm$_0.getValue_n5byny$(this, Emotes$LORI_CRYING_metadata);
    }
  });
  var Emotes$LORI_RAGE_metadata = new PropertyMetadata('LORI_RAGE');
  Object.defineProperty(Emotes.prototype, 'LORI_RAGE', {
    get: function () {
      return this.LORI_RAGE_h8iped$_0.getValue_n5byny$(this, Emotes$LORI_RAGE_metadata);
    }
  });
  var Emotes$LORI_SHRUG_metadata = new PropertyMetadata('LORI_SHRUG');
  Object.defineProperty(Emotes.prototype, 'LORI_SHRUG', {
    get: function () {
      return this.LORI_SHRUG_xbp0t9$_0.getValue_n5byny$(this, Emotes$LORI_SHRUG_metadata);
    }
  });
  var Emotes$LORI_NITRO_BOOST_metadata = new PropertyMetadata('LORI_NITRO_BOOST');
  Object.defineProperty(Emotes.prototype, 'LORI_NITRO_BOOST', {
    get: function () {
      return this.LORI_NITRO_BOOST_lpf094$_0.getValue_n5byny$(this, Emotes$LORI_NITRO_BOOST_metadata);
    }
  });
  var Emotes$LORI_WOW_metadata = new PropertyMetadata('LORI_WOW');
  Object.defineProperty(Emotes.prototype, 'LORI_WOW', {
    get: function () {
      return this.LORI_WOW_qxqi99$_0.getValue_n5byny$(this, Emotes$LORI_WOW_metadata);
    }
  });
  var Emotes$LORI_SMILE_metadata = new PropertyMetadata('LORI_SMILE');
  Object.defineProperty(Emotes.prototype, 'LORI_SMILE', {
    get: function () {
      return this.LORI_SMILE_x93zg6$_0.getValue_n5byny$(this, Emotes$LORI_SMILE_metadata);
    }
  });
  var Emotes$LORI_HM_metadata = new PropertyMetadata('LORI_HM');
  Object.defineProperty(Emotes.prototype, 'LORI_HM', {
    get: function () {
      return this.LORI_HM_3pon6l$_0.getValue_n5byny$(this, Emotes$LORI_HM_metadata);
    }
  });
  var Emotes$LORI_RICH_metadata = new PropertyMetadata('LORI_RICH');
  Object.defineProperty(Emotes.prototype, 'LORI_RICH', {
    get: function () {
      return this.LORI_RICH_h8nqee$_0.getValue_n5byny$(this, Emotes$LORI_RICH_metadata);
    }
  });
  var Emotes$LORI_PAT_metadata = new PropertyMetadata('LORI_PAT');
  Object.defineProperty(Emotes.prototype, 'LORI_PAT', {
    get: function () {
      return this.LORI_PAT_qxv9m9$_0.getValue_n5byny$(this, Emotes$LORI_PAT_metadata);
    }
  });
  var Emotes$LORI_YAY_metadata = new PropertyMetadata('LORI_YAY');
  Object.defineProperty(Emotes.prototype, 'LORI_YAY', {
    get: function () {
      return this.LORI_YAY_qxpim7$_0.getValue_n5byny$(this, Emotes$LORI_YAY_metadata);
    }
  });
  var Emotes$LORI_HEART_metadata = new PropertyMetadata('LORI_HEART');
  Object.defineProperty(Emotes.prototype, 'LORI_HEART', {
    get: function () {
      return this.LORI_HEART_wfywcs$_0.getValue_n5byny$(this, Emotes$LORI_HEART_metadata);
    }
  });
  var Emotes$LORI_HMPF_metadata = new PropertyMetadata('LORI_HMPF');
  Object.defineProperty(Emotes.prototype, 'LORI_HMPF', {
    get: function () {
      return this.LORI_HMPF_h38m07$_0.getValue_n5byny$(this, Emotes$LORI_HMPF_metadata);
    }
  });
  var Emotes$MINECRAFT_GRASS_metadata = new PropertyMetadata('MINECRAFT_GRASS');
  Object.defineProperty(Emotes.prototype, 'MINECRAFT_GRASS', {
    get: function () {
      return this.MINECRAFT_GRASS_v69q5f$_0.getValue_n5byny$(this, Emotes$MINECRAFT_GRASS_metadata);
    }
  });
  var Emotes$DEFAULT_DANCE_metadata = new PropertyMetadata('DEFAULT_DANCE');
  Object.defineProperty(Emotes.prototype, 'DEFAULT_DANCE', {
    get: function () {
      return this.DEFAULT_DANCE_ko5vny$_0.getValue_n5byny$(this, Emotes$DEFAULT_DANCE_metadata);
    }
  });
  var Emotes$KOTLIN_metadata = new PropertyMetadata('KOTLIN');
  Object.defineProperty(Emotes.prototype, 'KOTLIN', {
    get: function () {
      return this.KOTLIN_t0bgx8$_0.getValue_n5byny$(this, Emotes$KOTLIN_metadata);
    }
  });
  var Emotes$JDA_metadata = new PropertyMetadata('JDA');
  Object.defineProperty(Emotes.prototype, 'JDA', {
    get: function () {
      return this.JDA_vzq2qo$_0.getValue_n5byny$(this, Emotes$JDA_metadata);
    }
  });
  function Emotes$getEmote$lambda$lambda(closure$name) {
    return function () {
      return 'Missing emote for ' + closure$name;
    };
  }
  Emotes.prototype.getEmote_61zpoe$ = function (name) {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$ = this.emoteMap.get_11rb$(name)) != null)
      tmp$_1 = tmp$;
    else {
      this.logger_0.warn_nq59yw$(Emotes$getEmote$lambda$lambda(name));
      return this.MISSING_EMOTE;
    }
    var code = tmp$_1;
    tmp$_0 = this.emoteManager;
    if (tmp$_0 == null) {
      throw RuntimeException_init('emoteManager is null!');
    }
    var emoteManager = tmp$_0;
    return emoteManager.getEmoteByCode_61zpoe$(code);
  };
  Emotes.prototype.resetEmotes = function () {
    this.lazyMgr_0.reset();
  };
  function Emotes$EmoteManager() {
  }
  function Emotes$EmoteManager$DefaultEmoteManager() {
  }
  Emotes$EmoteManager$DefaultEmoteManager.prototype.loadEmotes = function () {
  };
  Emotes$EmoteManager$DefaultEmoteManager.prototype.getEmoteByCode_61zpoe$ = function (code) {
    return new UnicodeEmote(code);
  };
  Emotes$EmoteManager$DefaultEmoteManager.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultEmoteManager',
    interfaces: [Emotes$EmoteManager]
  };
  Emotes$EmoteManager.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'EmoteManager',
    interfaces: []
  };
  function Emotes$logger$lambda() {
    return Unit;
  }
  function Emotes$ONLINE$lambda(this$Emotes) {
    return function () {
      return this$Emotes.getEmote_61zpoe$('online');
    };
  }
  function Emotes$IDLE$lambda(this$Emotes) {
    return function () {
      return this$Emotes.getEmote_61zpoe$('idle');
    };
  }
  function Emotes$DO_NOT_DISTURB$lambda(this$Emotes) {
    return function () {
      return this$Emotes.getEmote_61zpoe$('do_not_disturb');
    };
  }
  function Emotes$OFFLINE$lambda(this$Emotes) {
    return function () {
      return this$Emotes.getEmote_61zpoe$('offline');
    };
  }
  function Emotes$BOT_TAG$lambda(this$Emotes) {
    return function () {
      return this$Emotes.getEmote_61zpoe$('bot_tag');
    };
  }
  function Emotes$WUMPUS_BASIC$lambda(this$Emotes) {
    return function () {
      return this$Emotes.getEmote_61zpoe$('wumpus_basic');
    };
  }
  function Emotes$LORI_TEMMIE$lambda(this$Emotes) {
    return function () {
      return this$Emotes.getEmote_61zpoe$('lori_temmie');
    };
  }
  function Emotes$LORI_OWO$lambda(this$Emotes) {
    return function () {
      return this$Emotes.getEmote_61zpoe$('lori_owo');
    };
  }
  function Emotes$LORI_HUG$lambda(this$Emotes) {
    return function () {
      return this$Emotes.getEmote_61zpoe$('lori_hug');
    };
  }
  function Emotes$LORI_HAPPY$lambda(this$Emotes) {
    return function () {
      return this$Emotes.getEmote_61zpoe$('lori_happy');
    };
  }
  function Emotes$LORI_CRYING$lambda(this$Emotes) {
    return function () {
      return this$Emotes.getEmote_61zpoe$('lori_crying');
    };
  }
  function Emotes$LORI_RAGE$lambda(this$Emotes) {
    return function () {
      return this$Emotes.getEmote_61zpoe$('lori_rage');
    };
  }
  function Emotes$LORI_SHRUG$lambda(this$Emotes) {
    return function () {
      return this$Emotes.getEmote_61zpoe$('lori_shrug');
    };
  }
  function Emotes$LORI_NITRO_BOOST$lambda(this$Emotes) {
    return function () {
      return this$Emotes.getEmote_61zpoe$('lori_nitro_boost');
    };
  }
  function Emotes$LORI_WOW$lambda(this$Emotes) {
    return function () {
      return this$Emotes.getEmote_61zpoe$('lori_wow');
    };
  }
  function Emotes$LORI_SMILE$lambda(this$Emotes) {
    return function () {
      return this$Emotes.getEmote_61zpoe$('lori_smile');
    };
  }
  function Emotes$LORI_HM$lambda(this$Emotes) {
    return function () {
      return this$Emotes.getEmote_61zpoe$('lori_hm');
    };
  }
  function Emotes$LORI_RICH$lambda(this$Emotes) {
    return function () {
      return this$Emotes.getEmote_61zpoe$('lori_rich');
    };
  }
  function Emotes$LORI_PAT$lambda(this$Emotes) {
    return function () {
      return this$Emotes.getEmote_61zpoe$('lori_pat');
    };
  }
  function Emotes$LORI_YAY$lambda(this$Emotes) {
    return function () {
      return this$Emotes.getEmote_61zpoe$('lori_yay');
    };
  }
  function Emotes$LORI_HEART$lambda(this$Emotes) {
    return function () {
      return this$Emotes.getEmote_61zpoe$('lori_heart');
    };
  }
  function Emotes$LORI_HMPF$lambda(this$Emotes) {
    return function () {
      return this$Emotes.getEmote_61zpoe$('lori_hmpf');
    };
  }
  function Emotes$MINECRAFT_GRASS$lambda(this$Emotes) {
    return function () {
      return this$Emotes.getEmote_61zpoe$('minecraft_grass');
    };
  }
  function Emotes$DEFAULT_DANCE$lambda(this$Emotes) {
    return function () {
      return this$Emotes.getEmote_61zpoe$('default_dance');
    };
  }
  function Emotes$KOTLIN$lambda(this$Emotes) {
    return function () {
      return this$Emotes.getEmote_61zpoe$('kotlin');
    };
  }
  function Emotes$JDA$lambda(this$Emotes) {
    return function () {
      return this$Emotes.getEmote_61zpoe$('jda');
    };
  }
  Emotes.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Emotes',
    interfaces: []
  };
  var Emotes_instance = null;
  function Emotes_getInstance() {
    if (Emotes_instance === null) {
      new Emotes();
    }
    return Emotes_instance;
  }
  function ResettableLazyManager() {
    this.managedDelegates = ArrayList_init();
  }
  ResettableLazyManager.prototype.register_9kgvtn$ = function (managed) {
    this.managedDelegates.add_11rb$(managed);
  };
  ResettableLazyManager.prototype.reset = function () {
    var tmp$;
    tmp$ = this.managedDelegates.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.reset();
    }
    this.managedDelegates.clear();
  };
  ResettableLazyManager.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResettableLazyManager',
    interfaces: []
  };
  function Resettable() {
  }
  Resettable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Resettable',
    interfaces: []
  };
  function ResettableLazy(manager, init) {
    this.manager = manager;
    this.init = init;
    this.lazyHolder = this.makeInitBlock();
  }
  ResettableLazy.prototype.getValue_n5byny$ = function (thisRef, property) {
    return this.lazyHolder.value;
  };
  ResettableLazy.prototype.reset = function () {
    this.lazyHolder = this.makeInitBlock();
  };
  function ResettableLazy$makeInitBlock$lambda(this$ResettableLazy) {
    return function () {
      this$ResettableLazy.manager.register_9kgvtn$(this$ResettableLazy);
      return this$ResettableLazy.init();
    };
  }
  ResettableLazy.prototype.makeInitBlock = function () {
    return lazy(ResettableLazy$makeInitBlock$lambda(this));
  };
  ResettableLazy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResettableLazy',
    interfaces: [Resettable]
  };
  function resettableLazy(manager, init) {
    return new ResettableLazy(manager, init);
  }
  function resettableManager() {
    return new ResettableLazyManager();
  }
  function ServerPremiumPlans() {
    ServerPremiumPlans$Companion_getInstance();
  }
  function ServerPremiumPlans$Companion() {
    ServerPremiumPlans$Companion_instance = this;
  }
  ServerPremiumPlans$Companion.prototype.getPlanFromValue_14dthe$ = function (value) {
    if (value >= 99.99)
      return ServerPremiumPlans$Complete_getInstance();
    else if (value >= 39.99)
      return ServerPremiumPlans$Recommended_getInstance();
    else if (value >= 19.99)
      return ServerPremiumPlans$Essential_getInstance();
    else
      return ServerPremiumPlans$Free_getInstance();
  };
  ServerPremiumPlans$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ServerPremiumPlans$Companion_instance = null;
  function ServerPremiumPlans$Companion_getInstance() {
    if (ServerPremiumPlans$Companion_instance === null) {
      new ServerPremiumPlans$Companion();
    }
    return ServerPremiumPlans$Companion_instance;
  }
  function ServerPremiumPlans$Free() {
    ServerPremiumPlans$Free_instance = this;
    this.cost_ixa2al$_0 = 0.0;
    this.maxYouTubeChannels_wbdgqj$_0 = 5;
    this.maxTwitchChannels_rta7gd$_0 = this.maxYouTubeChannels;
    this.maxTwitterAccounts_v47uk5$_0 = this.maxYouTubeChannels;
    this.hasCustomBadge_qdr2xe$_0 = false;
    this.memberCounterCount_b801tv$_0 = 1;
    this.hasMusic_ohvnr3$_0 = false;
    this.doNotSendAds_7wgtw6$_0 = false;
    this.maxLevelUpRoles_sjwogo$_0 = 15;
    this.dailyMultiplier_s90lzk$_0 = 1.0;
    this.globalXpMultiplier_gimqpa$_0 = 1.0;
  }
  Object.defineProperty(ServerPremiumPlans$Free.prototype, 'cost', {
    get: function () {
      return this.cost_ixa2al$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Free.prototype, 'maxYouTubeChannels', {
    get: function () {
      return this.maxYouTubeChannels_wbdgqj$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Free.prototype, 'maxTwitchChannels', {
    get: function () {
      return this.maxTwitchChannels_rta7gd$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Free.prototype, 'maxTwitterAccounts', {
    get: function () {
      return this.maxTwitterAccounts_v47uk5$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Free.prototype, 'hasCustomBadge', {
    get: function () {
      return this.hasCustomBadge_qdr2xe$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Free.prototype, 'memberCounterCount', {
    get: function () {
      return this.memberCounterCount_b801tv$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Free.prototype, 'hasMusic', {
    get: function () {
      return this.hasMusic_ohvnr3$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Free.prototype, 'doNotSendAds', {
    get: function () {
      return this.doNotSendAds_7wgtw6$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Free.prototype, 'maxLevelUpRoles', {
    get: function () {
      return this.maxLevelUpRoles_sjwogo$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Free.prototype, 'dailyMultiplier', {
    get: function () {
      return this.dailyMultiplier_s90lzk$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Free.prototype, 'globalXpMultiplier', {
    get: function () {
      return this.globalXpMultiplier_gimqpa$_0;
    }
  });
  ServerPremiumPlans$Free.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Free',
    interfaces: [ServerPremiumPlans]
  };
  var ServerPremiumPlans$Free_instance = null;
  function ServerPremiumPlans$Free_getInstance() {
    if (ServerPremiumPlans$Free_instance === null) {
      new ServerPremiumPlans$Free();
    }
    return ServerPremiumPlans$Free_instance;
  }
  function ServerPremiumPlans$Essential() {
    ServerPremiumPlans$Essential_instance = this;
    this.cost_e42pwb$_0 = 19.99;
    this.maxYouTubeChannels_sbd81l$_0 = 10;
    this.maxTwitchChannels_ghhou3$_0 = this.maxYouTubeChannels;
    this.maxTwitterAccounts_r47lv7$_0 = this.maxYouTubeChannels;
    this.hasCustomBadge_4159io$_0 = false;
    this.memberCounterCount_f80ait$_0 = 3;
    this.hasMusic_qtee7x$_0 = true;
    this.doNotSendAds_4lv7iw$_0 = true;
    this.maxLevelUpRoles_n1tdd6$_0 = 15;
    this.dailyMultiplier_ncpfua$_0 = 1.25;
    this.globalXpMultiplier_cimi0c$_0 = this.dailyMultiplier;
  }
  Object.defineProperty(ServerPremiumPlans$Essential.prototype, 'cost', {
    get: function () {
      return this.cost_e42pwb$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Essential.prototype, 'maxYouTubeChannels', {
    get: function () {
      return this.maxYouTubeChannels_sbd81l$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Essential.prototype, 'maxTwitchChannels', {
    get: function () {
      return this.maxTwitchChannels_ghhou3$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Essential.prototype, 'maxTwitterAccounts', {
    get: function () {
      return this.maxTwitterAccounts_r47lv7$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Essential.prototype, 'hasCustomBadge', {
    get: function () {
      return this.hasCustomBadge_4159io$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Essential.prototype, 'memberCounterCount', {
    get: function () {
      return this.memberCounterCount_f80ait$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Essential.prototype, 'hasMusic', {
    get: function () {
      return this.hasMusic_qtee7x$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Essential.prototype, 'doNotSendAds', {
    get: function () {
      return this.doNotSendAds_4lv7iw$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Essential.prototype, 'maxLevelUpRoles', {
    get: function () {
      return this.maxLevelUpRoles_n1tdd6$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Essential.prototype, 'dailyMultiplier', {
    get: function () {
      return this.dailyMultiplier_ncpfua$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Essential.prototype, 'globalXpMultiplier', {
    get: function () {
      return this.globalXpMultiplier_cimi0c$_0;
    }
  });
  ServerPremiumPlans$Essential.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Essential',
    interfaces: [ServerPremiumPlans]
  };
  var ServerPremiumPlans$Essential_instance = null;
  function ServerPremiumPlans$Essential_getInstance() {
    if (ServerPremiumPlans$Essential_instance === null) {
      new ServerPremiumPlans$Essential();
    }
    return ServerPremiumPlans$Essential_instance;
  }
  function ServerPremiumPlans$Recommended() {
    ServerPremiumPlans$Recommended_instance = this;
    this.cost_lc8t48$_0 = 39.99;
    this.maxYouTubeChannels_ysfo56$_0 = 25;
    this.maxTwitchChannels_vvy6vs$_0 = this.maxYouTubeChannels;
    this.maxTwitterAccounts_z1irnk$_0 = this.maxYouTubeChannels;
    this.hasCustomBadge_mbaxwd$_0 = true;
    this.memberCounterCount_7ap4qg$_0 = 3;
    this.hasMusic_xym6dm$_0 = true;
    this.doNotSendAds_wddg5n$_0 = true;
    this.maxLevelUpRoles_clkweb$_0 = 30;
    this.dailyMultiplier_caotx7$_0 = 1.5;
    this.globalXpMultiplier_kfxnsp$_0 = this.dailyMultiplier;
  }
  Object.defineProperty(ServerPremiumPlans$Recommended.prototype, 'cost', {
    get: function () {
      return this.cost_lc8t48$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Recommended.prototype, 'maxYouTubeChannels', {
    get: function () {
      return this.maxYouTubeChannels_ysfo56$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Recommended.prototype, 'maxTwitchChannels', {
    get: function () {
      return this.maxTwitchChannels_vvy6vs$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Recommended.prototype, 'maxTwitterAccounts', {
    get: function () {
      return this.maxTwitterAccounts_z1irnk$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Recommended.prototype, 'hasCustomBadge', {
    get: function () {
      return this.hasCustomBadge_mbaxwd$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Recommended.prototype, 'memberCounterCount', {
    get: function () {
      return this.memberCounterCount_7ap4qg$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Recommended.prototype, 'hasMusic', {
    get: function () {
      return this.hasMusic_xym6dm$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Recommended.prototype, 'doNotSendAds', {
    get: function () {
      return this.doNotSendAds_wddg5n$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Recommended.prototype, 'maxLevelUpRoles', {
    get: function () {
      return this.maxLevelUpRoles_clkweb$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Recommended.prototype, 'dailyMultiplier', {
    get: function () {
      return this.dailyMultiplier_caotx7$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Recommended.prototype, 'globalXpMultiplier', {
    get: function () {
      return this.globalXpMultiplier_kfxnsp$_0;
    }
  });
  ServerPremiumPlans$Recommended.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Recommended',
    interfaces: [ServerPremiumPlans]
  };
  var ServerPremiumPlans$Recommended_instance = null;
  function ServerPremiumPlans$Recommended_getInstance() {
    if (ServerPremiumPlans$Recommended_instance === null) {
      new ServerPremiumPlans$Recommended();
    }
    return ServerPremiumPlans$Recommended_instance;
  }
  function ServerPremiumPlans$Complete() {
    ServerPremiumPlans$Complete_instance = this;
    this.cost_ubcxqu$_0 = 99.99;
    this.maxYouTubeChannels_i120y0$_0 = 100;
    this.maxTwitchChannels_xladhy$_0 = this.maxYouTubeChannels;
    this.maxTwitterAccounts_gtwerm$_0 = this.maxYouTubeChannels;
    this.hasCustomBadge_ago2ox$_0 = true;
    this.memberCounterCount_pibhme$_0 = 3;
    this.hasMusic_6luu18$_0 = true;
    this.doNotSendAds_1yplmf$_0 = true;
    this.maxLevelUpRoles_y95n2d$_0 = 100;
    this.dailyMultiplier_xy9kl9$_0 = 2.0;
    this.globalXpMultiplier_28bawr$_0 = this.dailyMultiplier;
  }
  Object.defineProperty(ServerPremiumPlans$Complete.prototype, 'cost', {
    get: function () {
      return this.cost_ubcxqu$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Complete.prototype, 'maxYouTubeChannels', {
    get: function () {
      return this.maxYouTubeChannels_i120y0$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Complete.prototype, 'maxTwitchChannels', {
    get: function () {
      return this.maxTwitchChannels_xladhy$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Complete.prototype, 'maxTwitterAccounts', {
    get: function () {
      return this.maxTwitterAccounts_gtwerm$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Complete.prototype, 'hasCustomBadge', {
    get: function () {
      return this.hasCustomBadge_ago2ox$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Complete.prototype, 'memberCounterCount', {
    get: function () {
      return this.memberCounterCount_pibhme$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Complete.prototype, 'hasMusic', {
    get: function () {
      return this.hasMusic_6luu18$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Complete.prototype, 'doNotSendAds', {
    get: function () {
      return this.doNotSendAds_1yplmf$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Complete.prototype, 'maxLevelUpRoles', {
    get: function () {
      return this.maxLevelUpRoles_y95n2d$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Complete.prototype, 'dailyMultiplier', {
    get: function () {
      return this.dailyMultiplier_xy9kl9$_0;
    }
  });
  Object.defineProperty(ServerPremiumPlans$Complete.prototype, 'globalXpMultiplier', {
    get: function () {
      return this.globalXpMultiplier_28bawr$_0;
    }
  });
  ServerPremiumPlans$Complete.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Complete',
    interfaces: [ServerPremiumPlans]
  };
  var ServerPremiumPlans$Complete_instance = null;
  function ServerPremiumPlans$Complete_getInstance() {
    if (ServerPremiumPlans$Complete_instance === null) {
      new ServerPremiumPlans$Complete();
    }
    return ServerPremiumPlans$Complete_instance;
  }
  ServerPremiumPlans.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ServerPremiumPlans',
    interfaces: []
  };
  function UserPremiumPlans() {
    UserPremiumPlans$Companion_getInstance();
  }
  function UserPremiumPlans$Companion() {
    UserPremiumPlans$Companion_instance = this;
  }
  UserPremiumPlans$Companion.prototype.getPlanFromValue_14dthe$ = function (value) {
    if (value >= 99.99)
      return UserPremiumPlans$Complete_getInstance();
    else if (value >= 39.99)
      return UserPremiumPlans$Recommended_getInstance();
    else if (value >= 19.99)
      return UserPremiumPlans$Essential_getInstance();
    else
      return UserPremiumPlans$Free_getInstance();
  };
  UserPremiumPlans$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var UserPremiumPlans$Companion_instance = null;
  function UserPremiumPlans$Companion_getInstance() {
    if (UserPremiumPlans$Companion_instance === null) {
      new UserPremiumPlans$Companion();
    }
    return UserPremiumPlans$Companion_instance;
  }
  function UserPremiumPlans$Free() {
    UserPremiumPlans$Free_instance = this;
    this.cost_wy3h7v$_0 = 0.0;
    this.doNotSendAds_ii1spu$_0 = false;
    this.lessCooldown_f72v6q$_0 = false;
    this.maxDreamsInDaily_y64476$_0 = 3600;
    this.loriReputationRetribution_lh9m0q$_0 = 2.5;
    this.noPaymentTax_c0mdes$_0 = false;
    this.maxDreamsDailyTransaction_nra7kp$_0 = L300000;
    this.dailyMultiplier_q41514$_0 = 0.0;
    this.customBackground_6qm1y5$_0 = false;
  }
  Object.defineProperty(UserPremiumPlans$Free.prototype, 'cost', {
    get: function () {
      return this.cost_wy3h7v$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Free.prototype, 'doNotSendAds', {
    get: function () {
      return this.doNotSendAds_ii1spu$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Free.prototype, 'lessCooldown', {
    get: function () {
      return this.lessCooldown_f72v6q$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Free.prototype, 'maxDreamsInDaily', {
    get: function () {
      return this.maxDreamsInDaily_y64476$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Free.prototype, 'loriReputationRetribution', {
    get: function () {
      return this.loriReputationRetribution_lh9m0q$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Free.prototype, 'noPaymentTax', {
    get: function () {
      return this.noPaymentTax_c0mdes$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Free.prototype, 'maxDreamsDailyTransaction', {
    get: function () {
      return this.maxDreamsDailyTransaction_nra7kp$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Free.prototype, 'dailyMultiplier', {
    get: function () {
      return this.dailyMultiplier_q41514$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Free.prototype, 'customBackground', {
    get: function () {
      return this.customBackground_6qm1y5$_0;
    }
  });
  UserPremiumPlans$Free.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Free',
    interfaces: [UserPremiumPlans]
  };
  var UserPremiumPlans$Free_instance = null;
  function UserPremiumPlans$Free_getInstance() {
    if (UserPremiumPlans$Free_instance === null) {
      new UserPremiumPlans$Free();
    }
    return UserPremiumPlans$Free_instance;
  }
  function UserPremiumPlans$Essential() {
    UserPremiumPlans$Essential_instance = this;
    this.cost_r9dzkt$_0 = 19.99;
    this.doNotSendAds_u02pf4$_0 = true;
    this.lessCooldown_3p1yhg$_0 = false;
    this.maxDreamsInDaily_7fs5rk$_0 = 4200;
    this.loriReputationRetribution_r2xc3s$_0 = 5.0;
    this.noPaymentTax_ilgpi$_0 = false;
    this.maxDreamsDailyTransaction_i5mhhn$_0 = L300000;
    this.dailyMultiplier_9lllsm$_0 = 1.0;
    this.customBackground_molq29$_0 = false;
  }
  Object.defineProperty(UserPremiumPlans$Essential.prototype, 'cost', {
    get: function () {
      return this.cost_r9dzkt$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Essential.prototype, 'doNotSendAds', {
    get: function () {
      return this.doNotSendAds_u02pf4$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Essential.prototype, 'lessCooldown', {
    get: function () {
      return this.lessCooldown_3p1yhg$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Essential.prototype, 'maxDreamsInDaily', {
    get: function () {
      return this.maxDreamsInDaily_7fs5rk$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Essential.prototype, 'loriReputationRetribution', {
    get: function () {
      return this.loriReputationRetribution_r2xc3s$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Essential.prototype, 'noPaymentTax', {
    get: function () {
      return this.noPaymentTax_ilgpi$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Essential.prototype, 'maxDreamsDailyTransaction', {
    get: function () {
      return this.maxDreamsDailyTransaction_i5mhhn$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Essential.prototype, 'dailyMultiplier', {
    get: function () {
      return this.dailyMultiplier_9lllsm$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Essential.prototype, 'customBackground', {
    get: function () {
      return this.customBackground_molq29$_0;
    }
  });
  UserPremiumPlans$Essential.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Essential',
    interfaces: [UserPremiumPlans]
  };
  var UserPremiumPlans$Essential_instance = null;
  function UserPremiumPlans$Essential_getInstance() {
    if (UserPremiumPlans$Essential_instance === null) {
      new UserPremiumPlans$Essential();
    }
    return UserPremiumPlans$Essential_instance;
  }
  function UserPremiumPlans$Recommended() {
    UserPremiumPlans$Recommended_instance = this;
    this.cost_wsskgg$_0 = 39.99;
    this.doNotSendAds_f3qozn$_0 = true;
    this.lessCooldown_m88p2x$_0 = true;
    this.maxDreamsInDaily_3p4f6r$_0 = 4800;
    this.loriReputationRetribution_paq62d$_0 = 10.0;
    this.noPaymentTax_pep6uv$_0 = true;
    this.maxDreamsDailyTransaction_jxtnj2$_0 = L300000;
    this.dailyMultiplier_bb0xv$_0 = 2.0;
    this.customBackground_qf9gn2$_0 = true;
  }
  Object.defineProperty(UserPremiumPlans$Recommended.prototype, 'cost', {
    get: function () {
      return this.cost_wsskgg$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Recommended.prototype, 'doNotSendAds', {
    get: function () {
      return this.doNotSendAds_f3qozn$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Recommended.prototype, 'lessCooldown', {
    get: function () {
      return this.lessCooldown_m88p2x$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Recommended.prototype, 'maxDreamsInDaily', {
    get: function () {
      return this.maxDreamsInDaily_3p4f6r$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Recommended.prototype, 'loriReputationRetribution', {
    get: function () {
      return this.loriReputationRetribution_paq62d$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Recommended.prototype, 'noPaymentTax', {
    get: function () {
      return this.noPaymentTax_pep6uv$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Recommended.prototype, 'maxDreamsDailyTransaction', {
    get: function () {
      return this.maxDreamsDailyTransaction_jxtnj2$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Recommended.prototype, 'dailyMultiplier', {
    get: function () {
      return this.dailyMultiplier_bb0xv$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Recommended.prototype, 'customBackground', {
    get: function () {
      return this.customBackground_qf9gn2$_0;
    }
  });
  UserPremiumPlans$Recommended.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Recommended',
    interfaces: [UserPremiumPlans]
  };
  var UserPremiumPlans$Recommended_instance = null;
  function UserPremiumPlans$Recommended_getInstance() {
    if (UserPremiumPlans$Recommended_instance === null) {
      new UserPremiumPlans$Recommended();
    }
    return UserPremiumPlans$Recommended_instance;
  }
  function UserPremiumPlans$Complete() {
    UserPremiumPlans$Complete_instance = this;
    this.cost_ggtwyq$_0 = 99.99;
    this.doNotSendAds_hjhg7l$_0 = true;
    this.lessCooldown_jshxuz$_0 = true;
    this.maxDreamsInDaily_dyhkc1$_0 = 7000;
    this.loriReputationRetribution_sfcuop$_0 = 20.0;
    this.noPaymentTax_myyfmx$_0 = true;
    this.maxDreamsDailyTransaction_2msmb0$_0 = Long$Companion$MAX_VALUE;
    this.dailyMultiplier_gomtf9$_0 = 6.0;
    this.customBackground_g5wbhs$_0 = true;
  }
  Object.defineProperty(UserPremiumPlans$Complete.prototype, 'cost', {
    get: function () {
      return this.cost_ggtwyq$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Complete.prototype, 'doNotSendAds', {
    get: function () {
      return this.doNotSendAds_hjhg7l$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Complete.prototype, 'lessCooldown', {
    get: function () {
      return this.lessCooldown_jshxuz$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Complete.prototype, 'maxDreamsInDaily', {
    get: function () {
      return this.maxDreamsInDaily_dyhkc1$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Complete.prototype, 'loriReputationRetribution', {
    get: function () {
      return this.loriReputationRetribution_sfcuop$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Complete.prototype, 'noPaymentTax', {
    get: function () {
      return this.noPaymentTax_myyfmx$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Complete.prototype, 'maxDreamsDailyTransaction', {
    get: function () {
      return this.maxDreamsDailyTransaction_2msmb0$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Complete.prototype, 'dailyMultiplier', {
    get: function () {
      return this.dailyMultiplier_gomtf9$_0;
    }
  });
  Object.defineProperty(UserPremiumPlans$Complete.prototype, 'customBackground', {
    get: function () {
      return this.customBackground_g5wbhs$_0;
    }
  });
  UserPremiumPlans$Complete.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Complete',
    interfaces: [UserPremiumPlans]
  };
  var UserPremiumPlans$Complete_instance = null;
  function UserPremiumPlans$Complete_getInstance() {
    if (UserPremiumPlans$Complete_instance === null) {
      new UserPremiumPlans$Complete();
    }
    return UserPremiumPlans$Complete_instance;
  }
  UserPremiumPlans.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'UserPremiumPlans',
    interfaces: []
  };
  function createImage(width, height, imageType) {
    if (imageType === void 0)
      imageType = Image$ImageType$ARGB_getInstance();
    return new JSImage(createCanvas(width, height));
  }
  var currentTimeMillis;
  function HackySkew(canvas) {
    HackySkew$Companion_getInstance();
    this.canvas_0 = canvas;
    this.edgeAction_0 = HackySkew$Companion_getInstance().ZERO;
    this.interpolation_0 = HackySkew$Companion_getInstance().BILINEAR;
    this.transformedSpace_79jnh6$_0 = this.transformedSpace_79jnh6$_0;
    this.originalSpace_ahhs72$_0 = this.originalSpace_ahhs72$_0;
    this.x0_0 = 0;
    this.y0_0 = 0;
    this.x1_0 = 0;
    this.y1_0 = 0;
    this.x2_0 = 0;
    this.y2_0 = 0;
    this.x3_0 = 0;
    this.y3_0 = 0;
    this.dx1_0 = 0;
    this.dy1_0 = 0;
    this.dx2_0 = 0;
    this.dy2_0 = 0;
    this.dx3_0 = 0;
    this.dy3_0 = 0;
    this.A_0 = 0;
    this.B_0 = 0;
    this.C_0 = 0;
    this.D_0 = 0;
    this.E_0 = 0;
    this.F_0 = 0;
    this.G_0 = 0;
    this.H_0 = 0;
    this.I_0 = 0;
  }
  function HackySkew$Rectangle(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  HackySkew$Rectangle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rectangle',
    interfaces: []
  };
  HackySkew$Rectangle.prototype.component1 = function () {
    return this.x;
  };
  HackySkew$Rectangle.prototype.component2 = function () {
    return this.y;
  };
  HackySkew$Rectangle.prototype.component3 = function () {
    return this.width;
  };
  HackySkew$Rectangle.prototype.component4 = function () {
    return this.height;
  };
  HackySkew$Rectangle.prototype.copy_tjonv8$ = function (x, y, width, height) {
    return new HackySkew$Rectangle(x === void 0 ? this.x : x, y === void 0 ? this.y : y, width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  HackySkew$Rectangle.prototype.toString = function () {
    return 'Rectangle(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', width=' + Kotlin.toString(this.width)) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  HackySkew$Rectangle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  HackySkew$Rectangle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  Object.defineProperty(HackySkew.prototype, 'transformedSpace_0', {
    get: function () {
      if (this.transformedSpace_79jnh6$_0 == null)
        return throwUPAE('transformedSpace');
      return this.transformedSpace_79jnh6$_0;
    },
    set: function (transformedSpace) {
      this.transformedSpace_79jnh6$_0 = transformedSpace;
    }
  });
  Object.defineProperty(HackySkew.prototype, 'originalSpace_0', {
    get: function () {
      if (this.originalSpace_ahhs72$_0 == null)
        return throwUPAE('originalSpace');
      return this.originalSpace_ahhs72$_0;
    },
    set: function (originalSpace) {
      this.originalSpace_ahhs72$_0 = originalSpace;
    }
  });
  HackySkew.prototype.setCorners_nkj9yk$ = function (x0, y0, x1, y1, x2, y2, x3, y3) {
    this.x0_0 = x0;
    this.y0_0 = y0;
    this.x1_0 = x1;
    this.y1_0 = y1;
    this.x2_0 = x2;
    this.y2_0 = y2;
    this.x3_0 = x3;
    this.y3_0 = y3;
    this.dx1_0 = x1 - x2;
    this.dy1_0 = y1 - y2;
    this.dx2_0 = x3 - x2;
    this.dy2_0 = y3 - y2;
    this.dx3_0 = x0 - x1 + x2 - x3;
    this.dy3_0 = y0 - y1 + y2 - y3;
    println('dx1: ' + this.dx1_0);
    println('dy1: ' + this.dy1_0);
    println('dx2: ' + this.dx2_0);
    println('dy2: ' + this.dy2_0);
    println('dx3: ' + this.dx3_0);
    println('dy3: ' + this.dy3_0);
    var a11;
    var a12;
    var a13;
    var a21;
    var a22;
    var a23;
    var a31;
    var a32;
    if (this.dx3_0 === 0.0 && this.dy3_0 === 0.0) {
      a11 = x1 - x0;
      a21 = x2 - x1;
      a31 = x0;
      a12 = y1 - y0;
      a22 = y2 - y1;
      a32 = y0;
      a23 = 0.0;
      a13 = a23;
    }
     else {
      a13 = (this.dx3_0 * this.dy2_0 - this.dx2_0 * this.dy3_0) / (this.dx1_0 * this.dy2_0 - this.dy1_0 * this.dx2_0);
      a23 = (this.dx1_0 * this.dy3_0 - this.dy1_0 * this.dx3_0) / (this.dx1_0 * this.dy2_0 - this.dy1_0 * this.dx2_0);
      a11 = x1 - x0 + a13 * x1;
      a21 = x3 - x0 + a23 * x3;
      a31 = x0;
      a12 = y1 - y0 + a13 * y1;
      a22 = y3 - y0 + a23 * y3;
      a32 = y0;
    }
    this.A_0 = a22 - a32 * a23;
    this.B_0 = a31 * a23 - a21;
    this.C_0 = a21 * a32 - a31 * a22;
    this.D_0 = a32 * a13 - a12;
    this.E_0 = a11 - a31 * a13;
    this.F_0 = a31 * a12 - a11 * a32;
    this.G_0 = a12 * a23 - a22 * a13;
    this.H_0 = a21 * a13 - a11 * a23;
    this.I_0 = a11 * a22 - a21 * a12;
    println('A: ' + this.A_0);
    println('B: ' + this.B_0);
    println('C: ' + this.C_0);
    println('D: ' + this.D_0);
    println('E: ' + this.E_0);
    println('F: ' + this.F_0);
    println('G: ' + this.G_0);
    println('H: ' + this.H_0);
    println('I: ' + this.I_0);
    return this.filter_0(this.canvas_0, createCanvas(this.canvas_0.width, this.canvas_0.height));
  };
  HackySkew.prototype.transformSpace_0 = function (rect) {
    var a = this.x0_0;
    var b = this.x1_0;
    var tmp$ = Math_0.min(a, b);
    var a_0 = this.x2_0;
    var b_0 = this.x3_0;
    var b_1 = Math_0.min(a_0, b_0);
    rect.x = numberToInt(Math_0.min(tmp$, b_1));
    var a_1 = this.y0_0;
    var b_2 = this.y1_0;
    var tmp$_0 = Math_0.min(a_1, b_2);
    var a_2 = this.y2_0;
    var b_3 = this.y3_0;
    var b_4 = Math_0.min(a_2, b_3);
    rect.y = numberToInt(Math_0.min(tmp$_0, b_4));
    var a_3 = this.x0_0;
    var b_5 = this.x1_0;
    var tmp$_1 = Math_0.max(a_3, b_5);
    var a_4 = this.x2_0;
    var b_6 = this.x3_0;
    var b_7 = Math_0.max(a_4, b_6);
    rect.width = numberToInt(Math_0.max(tmp$_1, b_7)) - rect.x | 0;
    var a_5 = this.y0_0;
    var b_8 = this.y1_0;
    var tmp$_2 = Math_0.max(a_5, b_8);
    var a_6 = this.y2_0;
    var b_9 = this.y3_0;
    var b_10 = Math_0.max(a_6, b_9);
    rect.height = numberToInt(Math_0.max(tmp$_2, b_10)) - rect.y | 0;
  };
  HackySkew.prototype.filter_0 = function (src, dst) {
    var width = src.width;
    var height = src.height;
    console.log('width is ' + width + ', height is ' + height + '. Interpolation type is ' + this.interpolation_0 + ' Edge Action is ' + this.edgeAction_0);
    this.originalSpace_0 = new HackySkew$Rectangle(0, 0, width, height);
    this.transformedSpace_0 = new HackySkew$Rectangle(0, 0, width, height);
    console.log('teh og: ' + this.originalSpace_0);
    this.transformSpace_0(this.transformedSpace_0);
    console.log('after transform: ' + this.transformedSpace_0);
    console.log('gettin them pixels uwu');
    var inPixels = this.getRGB_vwqsez$(src, 0, 0, width, height);
    console.log('there are ' + inPixels.length + ' pixels, very owo');
    if (this.interpolation_0 === HackySkew$Companion_getInstance().NEAREST_NEIGHBOUR)
      return this.filterPixelsNN_0(dst, width, height, inPixels, this.transformedSpace_0);
    var srcWidth1 = width - 1 | 0;
    var srcHeight1 = height - 1 | 0;
    var outWidth = this.transformedSpace_0.width;
    var outHeight = this.transformedSpace_0.height;
    var outX;
    var outY;
    var outPixels = new Int32Array(outWidth);
    outX = this.transformedSpace_0.x;
    outY = this.transformedSpace_0.y;
    var out = new Float32Array(2);
    for (var y = 0; y < outHeight; y++) {
      for (var x = 0; x < outWidth; x++) {
        this.transformInverse_0(outX + x | 0, outY + y | 0, out);
        var x_0 = out[0];
        var srcX = numberToInt(Math_0.floor(x_0));
        var x_1 = out[1];
        var srcY = numberToInt(Math_0.floor(x_1));
        var xWeight = out[0] - srcX;
        var yWeight = out[1] - srcY;
        var nw;
        var ne;
        var sw;
        var se;
        if (srcX >= 0 && srcX < srcWidth1 && srcY >= 0 && srcY < srcHeight1) {
          var i = Kotlin.imul(width, srcY) + srcX | 0;
          nw = inPixels[i];
          ne = inPixels[i + 1 | 0];
          sw = inPixels[i + width | 0];
          se = inPixels[i + width + 1 | 0];
        }
         else {
          nw = this.getPixel_0(inPixels, srcX, srcY, width, height);
          ne = this.getPixel_0(inPixels, srcX + 1 | 0, srcY, width, height);
          sw = this.getPixel_0(inPixels, srcX, srcY + 1 | 0, width, height);
          se = this.getPixel_0(inPixels, srcX + 1 | 0, srcY + 1 | 0, width, height);
        }
        outPixels[x] = this.bilinearInterpolate_0(xWeight, yWeight, nw, ne, sw, se);
      }
      this.setRGB_8o8tn4$(dst, outX, outY + y | 0, this.transformedSpace_0.width, 1, outPixels);
    }
    return dst;
  };
  HackySkew.prototype.getPixel_0 = function (pixels, x, y, width, height) {
    if (x < 0 || x >= width || y < 0 || y >= height) {
      switch (this.edgeAction_0) {
        case 0:
          return 0;
        case 2:
          return pixels[Kotlin.imul(this.mod_0(y, height), width) + this.mod_0(x, width) | 0];
        case 1:
          return pixels[Kotlin.imul(this.clamp_0(y, 0, height - 1 | 0), width) + this.clamp_0(x, 0, width - 1 | 0) | 0];
        default:return 0;
      }
    }
    return pixels[Kotlin.imul(y, width) + x | 0];
  };
  HackySkew.prototype.filterPixelsNN_0 = function (dst, width, height, inPixels, transformedSpace) {
    var outWidth = transformedSpace.width;
    var outHeight = transformedSpace.height;
    var outX;
    var outY;
    var srcX;
    var srcY;
    var outPixels = new Int32Array(outWidth);
    outX = transformedSpace.x;
    outY = transformedSpace.y;
    var rgb = new Int32Array(4);
    var out = new Float32Array(2);
    for (var y = 0; y < outHeight; y++) {
      for (var x = 0; x < outWidth; x++) {
        this.transformInverse_0(outX + x | 0, outY + y | 0, out);
        srcX = numberToInt(out[0]);
        srcY = numberToInt(out[1]);
        if (out[0] < 0 || srcX >= width || out[1] < 0 || srcY >= height) {
          var p;
          switch (this.edgeAction_0) {
            case 0:
              p = 0;
              break;
            case 2:
              p = inPixels[Kotlin.imul(this.mod_0(srcY, height), width) + this.mod_0(srcX, width) | 0];
              break;
            case 1:
              p = inPixels[Kotlin.imul(this.clamp_0(srcY, 0, height - 1 | 0), width) + this.clamp_0(srcX, 0, width - 1 | 0) | 0];
              break;
            default:p = 0;
              break;
          }
          outPixels[x] = p;
        }
         else {
          var i = Kotlin.imul(width, srcY) + srcX | 0;
          rgb[0] = inPixels[i];
          outPixels[x] = inPixels[i];
        }
      }
      this.setRGB_8o8tn4$(dst, 0, y, transformedSpace.width, 1, outPixels);
    }
    return dst;
  };
  HackySkew.prototype.transformInverse_0 = function (x, y, out) {
    out[0] = this.originalSpace_0.width * (this.A_0 * x + this.B_0 * y + this.C_0) / (this.G_0 * x + this.H_0 * y + this.I_0);
    out[1] = this.originalSpace_0.height * (this.D_0 * x + this.E_0 * y + this.F_0) / (this.G_0 * x + this.H_0 * y + this.I_0);
  };
  HackySkew.prototype.getRGB_vwqsez$ = function (image, x, y, width, height) {
    var tmp$;
    console.log('Getting RGB at ' + x + ', ' + y + ' width: ' + width + ' height: ' + height);
    var imageData = image.getContext('2d').getImageData(x, y, width, height);
    var intList = ArrayList_init();
    var data = imageData.data;
    tmp$ = imageData.data.length;
    for (var i = 0; i < tmp$; i += 4) {
      var r = data[i];
      var g = data[i + 1 | 0];
      var b = data[i + 2 | 0];
      var a = data[i + 3 | 0];
      var packedRGB = (a << 24) + (r << 16) + (g << 8) + b | 0;
      intList.add_11rb$(packedRGB);
    }
    return toIntArray(intList);
  };
  HackySkew.prototype.setRGB_8o8tn4$ = function (image, x, y, width, height, pixels) {
    var tmp$;
    console.log('Setting RGB at ' + x + ', ' + y + ' ' + width + ' ' + height + ' There are ' + pixels.length + ' array pixels');
    var ctx = image.getContext('2d');
    var xCoordinate = x;
    var yCoordinate = y;
    for (tmp$ = 0; tmp$ !== pixels.length; ++tmp$) {
      var packedRGB = pixels[tmp$];
      var a = packedRGB >> 24 & 255;
      var r = packedRGB >> 16 & 255;
      var g = packedRGB >> 8 & 255;
      var b = packedRGB & 255;
      ctx.fillStyle = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + (a / 255 | 0) + ')';
      ctx.fillRect(xCoordinate, yCoordinate, 1, 1);
      xCoordinate = xCoordinate + 1 | 0;
      if (xCoordinate >= this.canvas_0.width) {
        xCoordinate = x;
        yCoordinate = yCoordinate + 1 | 0;
      }
    }
  };
  HackySkew.prototype.clamp_1 = function (x, a, b) {
    return x < a ? a : x > b ? b : x;
  };
  HackySkew.prototype.clamp_0 = function (x, a, b) {
    return x < a ? a : x > b ? b : x;
  };
  HackySkew.prototype.mod_1 = function (a, b) {
    var a_0 = a;
    var n = numberToInt(a_0 / b);
    a_0 -= n * b;
    return a_0 < 0 ? a_0 + b : a_0;
  };
  HackySkew.prototype.mod_2 = function (a, b) {
    var a_0 = a;
    var n = numberToInt(a_0 / b);
    a_0 -= n * b;
    return a_0 < 0 ? a_0 + b : a_0;
  };
  HackySkew.prototype.mod_0 = function (a, b) {
    var a_0 = a;
    var n = a_0 / b | 0;
    a_0 = a_0 - Kotlin.imul(n, b) | 0;
    return a_0 < 0 ? a_0 + b | 0 : a_0;
  };
  HackySkew.prototype.bilinearInterpolate_0 = function (x, y, nw, ne, sw, se) {
    var m0;
    var m1;
    var a0 = nw >> 24 & 255;
    var r0 = nw >> 16 & 255;
    var g0 = nw >> 8 & 255;
    var b0 = nw & 255;
    var a1 = ne >> 24 & 255;
    var r1 = ne >> 16 & 255;
    var g1 = ne >> 8 & 255;
    var b1 = ne & 255;
    var a2 = sw >> 24 & 255;
    var r2 = sw >> 16 & 255;
    var g2 = sw >> 8 & 255;
    var b2 = sw & 255;
    var a3 = se >> 24 & 255;
    var r3 = se >> 16 & 255;
    var g3 = se >> 8 & 255;
    var b3 = se & 255;
    var cx = 1.0 - x;
    var cy = 1.0 - y;
    m0 = cx * a0 + x * a1;
    m1 = cx * a2 + x * a3;
    var a = numberToInt(cy * m0 + y * m1);
    m0 = cx * r0 + x * r1;
    m1 = cx * r2 + x * r3;
    var r = numberToInt(cy * m0 + y * m1);
    m0 = cx * g0 + x * g1;
    m1 = cx * g2 + x * g3;
    var g = numberToInt(cy * m0 + y * m1);
    m0 = cx * b0 + x * b1;
    m1 = cx * b2 + x * b3;
    var b = numberToInt(cy * m0 + y * m1);
    return a << 24 | r << 16 | g << 8 | b;
  };
  function HackySkew$Companion() {
    HackySkew$Companion_instance = this;
    this.ZERO = 0;
    this.CLAMP = 1;
    this.WRAP = 2;
    this.NEAREST_NEIGHBOUR = 0;
    this.BILINEAR = 1;
  }
  HackySkew$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var HackySkew$Companion_instance = null;
  function HackySkew$Companion_getInstance() {
    if (HackySkew$Companion_instance === null) {
      new HackySkew$Companion();
    }
    return HackySkew$Companion_instance;
  }
  HackySkew.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HackySkew',
    interfaces: []
  };
  function JSGraphics(context) {
    this.context = context;
  }
  JSGraphics.prototype.drawImage_d63bv6$ = function (image, x, y) {
    var tmp$;
    Kotlin.isType(tmp$ = image, JSImage) ? tmp$ : throwCCE();
    this.context.drawImage(image.canvas.getContext('2d').canvas, x, y);
  };
  JSGraphics.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JSGraphics',
    interfaces: [Graphics]
  };
  function JSImage(canvas) {
    this.canvas = canvas;
  }
  Object.defineProperty(JSImage.prototype, 'width', {
    get: function () {
      return this.canvas.width;
    }
  });
  Object.defineProperty(JSImage.prototype, 'height', {
    get: function () {
      return this.canvas.height;
    }
  });
  JSImage.prototype.getScaledInstance_7px60s$ = function (width, height, scaleType) {
    var scaledImage = createCanvas(width, height);
    var ctx = scaledImage.getContext('2d');
    ctx.drawImage(this.canvas.getContext('2d').canvas, 0.0, 0.0, width, height);
    return new JSImage(scaledImage);
  };
  JSImage.prototype.getSkewedInstance_nkj9yk$ = function (x0, y0, x1, y1, x2, y2, x3, y3) {
    return new JSImage((new HackySkew(this.canvas)).setCorners_nkj9yk$(x0, y0, x1, y1, x2, y2, x3, y3));
  };
  JSImage.prototype.createGraphics = function () {
    return new JSGraphics(this.canvas.getContext('2d'));
  };
  JSImage.prototype.toByteArray = function () {
    var ctx = this.canvas.getContext('2d');
    var dataUrl = ctx.canvas.toDataURL('image/png');
    var dataBase64 = last(split(dataUrl, ['base64,']));
    var buf = Buffer.from(dataBase64, 'base64');
    return toByteArray(buf);
  };
  JSImage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JSImage',
    interfaces: [Image]
  };
  function format($receiver, arguments_0) {
    return 'Please Implement Later!!!';
  }
  function toByteArray($receiver) {
    var imageByteArray = new Int8Array($receiver.length);
    console.log($receiver.values());
    var idx = 0;
    var values = $receiver.values();
    while (true) {
      var result = values.next();
      if (result.done == true)
        break;
      imageByteArray[idx] = result.value;
      idx = idx + 1 | 0;
    }
    return imageByteArray;
  }
  function toBuffer($receiver) {
    var tmp$;
    var buffer = Buffer.alloc($receiver.length);
    var currentOffset = 0;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var byte = $receiver[tmp$];
      currentOffset = buffer.writeInt8(byte, currentOffset);
    }
    return buffer;
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
  package$commands.command_9aww9f$ = command;
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
  var package$utils_0 = package$loritta_0.utils || (package$loritta_0.utils = {});
  package$commands.CommandContext = CommandContext;
  package$commands.CommandException = CommandException;
  package$commands.CommandMap = CommandMap;
  package$commands.DSLCommand = DSLCommand;
  package$commands.SilentCommandException = SilentCommandException;
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
  package$entities.VoiceChannel = VoiceChannel;
  package$entities.VoiceState = VoiceState;
  var package$events = package$api.events || (package$api.events = {});
  package$events.MessageReceivedEvent = MessageReceivedEvent;
  package$api.LorittaBot = LorittaBot;
  var package$managers = package$api.managers || (package$api.managers = {});
  package$managers.AudioManager = AudioManager;
  var package$messages = package$api.messages || (package$api.messages = {});
  package$messages.LorittaMessage = LorittaMessage;
  Object.defineProperty(LorittaReply, 'Companion', {
    get: LorittaReply$Companion_getInstance
  });
  package$messages.LorittaReply_init_o9qb64$ = LorittaReply_init;
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
  var package$plugin = package$api.plugin || (package$api.plugin = {});
  package$plugin.InvalidPluginException = InvalidPluginException;
  package$plugin.LorittaPlugin = LorittaPlugin;
  package$plugin.PluginManager = PluginManager;
  var package$utils_1 = package$api.utils || (package$api.utils = {});
  var package$image = package$utils_1.image || (package$utils_1.image = {});
  package$image.Graphics = Graphics;
  Object.defineProperty(Image$ScaleType, 'SMOOTH', {
    get: Image$ScaleType$SMOOTH_getInstance
  });
  Image.ScaleType = Image$ScaleType;
  Object.defineProperty(Image$ImageType, 'ARGB', {
    get: Image$ImageType$ARGB_getInstance
  });
  Image.ImageType = Image$ImageType;
  package$image.Image = Image;
  package$utils_1.LorittaAssets = LorittaAssets;
  Object.defineProperty(Rarity, 'COMMON', {
    get: Rarity$COMMON_getInstance
  });
  Object.defineProperty(Rarity, 'UNCOMMON', {
    get: Rarity$UNCOMMON_getInstance
  });
  Object.defineProperty(Rarity, 'RARE', {
    get: Rarity$RARE_getInstance
  });
  Object.defineProperty(Rarity, 'EPIC', {
    get: Rarity$EPIC_getInstance
  });
  Object.defineProperty(Rarity, 'LEGENDARY', {
    get: Rarity$LEGENDARY_getInstance
  });
  package$utils_1.Rarity = Rarity;
  Object.defineProperty(DailyGuildMissingRequirement, 'REQUIRES_MORE_TIME', {
    get: DailyGuildMissingRequirement$REQUIRES_MORE_TIME_getInstance
  });
  Object.defineProperty(DailyGuildMissingRequirement, 'REQUIRES_MORE_XP', {
    get: DailyGuildMissingRequirement$REQUIRES_MORE_XP_getInstance
  });
  var package$daily = package$utils_0.daily || (package$utils_0.daily = {});
  package$daily.DailyGuildMissingRequirement = DailyGuildMissingRequirement;
  Emotes$EmoteManager.DefaultEmoteManager = Emotes$EmoteManager$DefaultEmoteManager;
  Emotes.prototype.EmoteManager = Emotes$EmoteManager;
  Object.defineProperty(package$utils_0, 'Emotes', {
    get: Emotes_getInstance
  });
  package$utils_0.ResettableLazyManager = ResettableLazyManager;
  package$utils_0.Resettable = Resettable;
  package$utils_0.ResettableLazy = ResettableLazy;
  package$utils_0.resettableLazy_k25zzo$ = resettableLazy;
  package$utils_0.resettableManager = resettableManager;
  Object.defineProperty(ServerPremiumPlans, 'Companion', {
    get: ServerPremiumPlans$Companion_getInstance
  });
  Object.defineProperty(ServerPremiumPlans, 'Free', {
    get: ServerPremiumPlans$Free_getInstance
  });
  Object.defineProperty(ServerPremiumPlans, 'Essential', {
    get: ServerPremiumPlans$Essential_getInstance
  });
  Object.defineProperty(ServerPremiumPlans, 'Recommended', {
    get: ServerPremiumPlans$Recommended_getInstance
  });
  Object.defineProperty(ServerPremiumPlans, 'Complete', {
    get: ServerPremiumPlans$Complete_getInstance
  });
  package$utils_0.ServerPremiumPlans = ServerPremiumPlans;
  Object.defineProperty(UserPremiumPlans, 'Companion', {
    get: UserPremiumPlans$Companion_getInstance
  });
  Object.defineProperty(UserPremiumPlans, 'Free', {
    get: UserPremiumPlans$Free_getInstance
  });
  Object.defineProperty(UserPremiumPlans, 'Essential', {
    get: UserPremiumPlans$Essential_getInstance
  });
  Object.defineProperty(UserPremiumPlans, 'Recommended', {
    get: UserPremiumPlans$Recommended_getInstance
  });
  Object.defineProperty(UserPremiumPlans, 'Complete', {
    get: UserPremiumPlans$Complete_getInstance
  });
  package$utils_0.UserPremiumPlans = UserPremiumPlans;
  package$utils_1.createImage_8tb8ph$ = createImage;
  Object.defineProperty(package$utils_1, 'currentTimeMillis', {
    get: function () {
      return currentTimeMillis;
    }
  });
  HackySkew.Rectangle = HackySkew$Rectangle;
  Object.defineProperty(HackySkew, 'Companion', {
    get: HackySkew$Companion_getInstance
  });
  package$image.HackySkew = HackySkew;
  package$image.JSGraphics = JSGraphics;
  package$image.JSImage = JSImage;
  package$utils_1.format_aheo4u$ = format;
  var package$nodecanvas = _.nodecanvas || (_.nodecanvas = {});
  package$nodecanvas.toByteArray_4qxi6d$ = toByteArray;
  package$nodecanvas.toBuffer_964n91$ = toBuffer;
  Object.defineProperty(Guild.prototype, 'idAsString', Object.getOwnPropertyDescriptor(Identifiable.prototype, 'idAsString'));
  Object.defineProperty(User.prototype, 'idAsString', Object.getOwnPropertyDescriptor(Identifiable.prototype, 'idAsString'));
  Object.defineProperty(Member.prototype, 'idAsString', Object.getOwnPropertyDescriptor(User.prototype, 'idAsString'));
  currentTimeMillis = Kotlin.Long.fromNumber((new Date()).getTime());
  Kotlin.defineModule('loritta-parent-loritta-api', _);
  return _;
}));

//# sourceMappingURL=loritta-parent-loritta-api.js.map
