if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'SpicyMorenitta'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'SpicyMorenitta'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'SpicyMorenitta'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'SpicyMorenitta'.");
}
if (typeof Phaser === 'undefined') {
  throw new Error("Error loading module 'SpicyMorenitta'. Its dependency 'Phaser' was not found. Please, check whether 'Phaser' is loaded prior to 'SpicyMorenitta'.");
}
var SpicyMorenitta = function (_, Kotlin, $module$kotlinx_html_js, $module$Phaser) {
  'use strict';
  var throwUPAE = Kotlin.throwUPAE;
  var Any = Object;
  var throwCCE = Kotlin.throwCCE;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var toString = Kotlin.toString;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Unit = Kotlin.kotlin.Unit;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var trimMargin = Kotlin.kotlin.text.trimMargin_rjktp$;
  var TingleModal = tingle.modal;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var appendHTML = $module$kotlinx_html_js.kotlinx.html.stream.appendHTML_9kwp7w$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_59el9d$;
  var set_style = $module$kotlinx_html_js.kotlinx.html.set_style_ueiko3$;
  var img = $module$kotlinx_html_js.kotlinx.html.img_evw26v$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var h3 = $module$kotlinx_html_js.kotlinx.html.h3_agelx2$;
  var unsafe = $module$kotlinx_html_js.kotlinx.html.unsafe_vdrn79$;
  var p = $module$kotlinx_html_js.kotlinx.html.p_8pggrc$;
  var pre = $module$kotlinx_html_js.kotlinx.html.pre_pcyp7f$;
  var numberToInt = Kotlin.numberToInt;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var Game_init = $module$Phaser.Game;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var iterator = Kotlin.kotlin.js.iterator_s8jyvk$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
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
  function loadEmbeddedLocale() {
    var tmp$;
    println('Loading locale from embedded data... (if available)');
    var localeJson = (tmp$ = document.getElementById('locale-json')) != null ? tmp$.innerHTML : null;
    if (localeJson != null) {
      println('Embedded locale found!');
      println('locale-json: ' + toString(localeJson));
      var asJson = JSON.parse(localeJson);
      println('Converted it to JSON... ' + asJson);
      var alreadyInitalized = locale != null;
      if (alreadyInitalized) {
        println("Locale already initalized, we aren't going to replace it then...");
      }
       else {
        set_locale(BaseLocale$Companion_getInstance().create_qk3xy8$(asJson));
        println('Parsed BaseLocale from embedded locale within body!');
        println('Testing keys...');
        println(ensureNotNull(get_locale()).get_25kzsl$('KEYWORD_STREAMER', []));
        println(ensureNotNull(get_locale()).get_25kzsl$('RAFFLE_YouEarned', [250]));
        println(ensureNotNull(get_locale()).get_25kzsl$('LORITTA_ADDED_ON_SERVER', ['MrPowerGamerBR', 'PerfectDreams', 'Apartamento da Loritta', 125, get_loriUrl()]));
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
    (tmp$_0 = ($receiver.unaryPlus_pdl1vz$((tmp$ = get_locale()) != null ? tmp$.get_25kzsl$('ERROR_SomethingWentWrong', []) : null), Unit)) != null ? tmp$_0 : 'Alguma coisa deu errada...';
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    var tmp$, tmp$_0;
    $receiver.raw_61zpoe$((tmp$_0 = (tmp$ = get_locale()) != null ? tmp$.get_25kzsl$('ERROR_WhatShouldIDo', []) : null) != null ? tmp$_0 : "Infelizmente ningu\xE9m \xE9 perfeito... e pelo visto voc\xEA encontrou um problema no meu website... Tente recarregar a p\xE1gina e veja se o problema persiste, caso persista, entre no meu <a href='" + get_loriUrl() + "support'>servidor de suporte<\/a> e envie o c\xF3digo abaixo junto com uma pequena explica\xE7\xE3o sobre o que voc\xEA estava tentando fazer no momento que deu o erro!");
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    unsafe($receiver, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    var tmp$, tmp$_0;
    (tmp$_0 = ($receiver.unaryPlus_pdl1vz$((tmp$ = get_locale()) != null ? tmp$.get_25kzsl$('ERROR_SorryForTheInconvenience', []) : null), Unit)) != null ? tmp$_0 : 'Desculpe pela inconveni\xEAncia...';
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
      div_0($receiver, 'sectionText', main$lambda$lambda$lambda$lambda$lambda_0(closure$content));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda(closure$content) {
    return function ($receiver) {
      set_style($receiver, 'text-align: left;');
      div_0($receiver, 'pure-u-1 pure-u-md-1-4', main$lambda$lambda$lambda$lambda);
      div_0($receiver, 'pure-u-1 pure-u-md-3-4', main$lambda$lambda$lambda$lambda_0(closure$content));
      return Unit;
    };
  }
  function main$lambda$lambda_1(closure$content) {
    return function ($receiver) {
      div_0($receiver, 'pure-g vertically-centered-content', main$lambda$lambda$lambda(closure$content));
      return Unit;
    };
  }
  function main$lambda_0(message, file, line, col, error) {
    var tmp$;
    if (!contains(message, 'adsbygoogle')) {
      println('Erro detectado! Abrindo modal...');
      println('Message: ' + toString(message));
      println('file: ' + file);
      println('line: ' + toString(line));
      println('col: ' + toString(col));
      println('error: ' + toString(error));
      println(error.stack);
      var content = trimMargin('Error: ' + message + '\n' + '\t\t\t|User Agent: ' + window.navigator.userAgent + '\n' + '\t\t\t|URL: ' + window.location.href + '\n' + '\t\t\t|User ID: ' + ((tmp$ = selfProfile != null ? selfProfile.userId : null) != null ? tmp$ : 'Unknown') + '\n' + '\t\t\t|Stack:' + '\n' + '\t\t\t|' + error.stack + '\n' + '\t\t');
      var modal = new TingleModal(new TingleOptions(true, void 0, void 0, void 0, ['tingle-modal--overflow']));
      modal.addFooterBtn('<i class="fas fa-times"><\/i> Fechar', 'button-discord pure-button button-discord-modal button-discord-modal-secondary-action', main$lambda$lambda(modal));
      var stringBuilder = StringBuilder_init();
      div(appendHTML(div(appendHTML(stringBuilder, false), 'category-name', main$lambda$lambda_0(error))), void 0, main$lambda$lambda_1(content));
      modal.setContent(stringBuilder.toString());
      modal.open();
    }
    return false;
  }
  function main(args) {
    println('SpicyMorenitta! ^-^');
    document.addEventListener('DOMContentLoaded', main$lambda);
    window.onerror = main$lambda_0;
  }
  function testError() {
    var test = null;
    ensureNotNull(test);
  }
  var kPI2;
  var kPI;
  function sin($receiver, value) {
    return Math.sin(value);
  }
  function cos($receiver, value) {
    return Math.cos(value);
  }
  function get_PI2($receiver) {
    return kPI2;
  }
  function get_PI($receiver) {
    return kPI;
  }
  function round($receiver, value) {
    return Math.round(value);
  }
  function floor($receiver, value) {
    return Math.floor(value);
  }
  function atan2($receiver, x, y) {
    return Math.atan2(x, y);
  }
  function sqrt($receiver, value) {
    return Math.sqrt(value);
  }
  function abs($receiver, value) {
    return Math.abs(value);
  }
  function random($receiver) {
    return Math.random();
  }
  function random_0($receiver, min, max) {
    return numberToInt(random($receiver) * (max - min | 0) + min);
  }
  function crop($receiver, rect, copy) {
    if (copy === void 0)
      copy = null;
    $receiver.crop(rect, copy);
  }
  function destroy($receiver, destroyChildren, unknown) {
    if (destroyChildren === void 0)
      destroyChildren = null;
    if (unknown === void 0)
      unknown = null;
    $receiver.destroy(destroyChildren, unknown);
  }
  function revive($receiver, health) {
    if (health === void 0)
      health = 100;
    return $receiver.revive(health);
  }
  function reset($receiver, x, y, health) {
    if (x === void 0)
      x = null;
    if (y === void 0)
      y = null;
    if (health === void 0)
      health = null;
    return $receiver.reset(x, y, health);
  }
  function setScaleMinMax($receiver, minX, minY, maxX, maxY) {
    if (minX === void 0)
      minX = null;
    if (minY === void 0)
      minY = null;
    if (maxX === void 0)
      maxX = null;
    if (maxY === void 0)
      maxY = null;
    $receiver.setScaleMinMax(minX, minY, maxX, maxY);
  }
  function setTexture($receiver, texture) {
    $receiver.setTexture(texture, undefined);
  }
  function setTexture_0($receiver, texture) {
    $receiver.setTexture(texture, undefined);
  }
  function setTexture_1($receiver, texture, destroyBase) {
    $receiver.setTexture(texture, destroyBase);
  }
  function setTexture_2($receiver, texture, destroyBase) {
    $receiver.setTexture(texture, destroyBase);
  }
  function getBounds($receiver) {
    return $receiver.getBounds(null);
  }
  function getBounds_0($receiver, targetCoordinateSpace) {
    return $receiver.getBounds(targetCoordinateSpace);
  }
  function getBounds_1($receiver, targetCoordinateSpace) {
    return $receiver.getBounds(targetCoordinateSpace);
  }
  function alignTo($receiver, container, position, offsetX, offsetY) {
    if (position === void 0)
      position = null;
    if (offsetX === void 0)
      offsetX = null;
    if (offsetY === void 0)
      offsetY = null;
    return $receiver.alignTo(container, position, offsetX, offsetY);
  }
  function enable($receiver, spr, children) {
    if (children === void 0)
      children = undefined;
    $receiver.enable(spr, children);
  }
  function enable_0($receiver, array, children) {
    if (children === void 0)
      children = undefined;
    $receiver.enable(array, children);
  }
  function enable_1($receiver, spr, children) {
    if (children === void 0)
      children = undefined;
    $receiver.enable(spr, children);
  }
  function enable_2($receiver, array, children) {
    if (children === void 0)
      children = undefined;
    $receiver.enable(array, children);
  }
  function enable_3($receiver, spr, children) {
    if (children === void 0)
      children = undefined;
    $receiver.enable(spr, children);
  }
  function enable_4($receiver, array, children) {
    if (children === void 0)
      children = undefined;
    $receiver.enable(array, children);
  }
  function enable_5($receiver, group, children) {
    if (children === void 0)
      children = undefined;
    $receiver.enable(group, children);
  }
  function enable_6($receiver, array, children) {
    if (children === void 0)
      children = undefined;
    $receiver.enable(array, children);
  }
  function enable_7($receiver, spr, children) {
    if (children === void 0)
      children = undefined;
    $receiver.enable(spr, children);
  }
  function enable_8($receiver, array, children) {
    if (children === void 0)
      children = undefined;
    $receiver.enable(array, children);
  }
  function Asset(name, url) {
    this.name = name;
    this.url = url;
  }
  Asset.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Asset',
    interfaces: []
  };
  Asset.prototype.component1 = function () {
    return this.name;
  };
  Asset.prototype.component2 = function () {
    return this.url;
  };
  Asset.prototype.copy_puj7f4$ = function (name, url) {
    return new Asset(name === void 0 ? this.name : name, url === void 0 ? this.url : url);
  };
  Asset.prototype.toString = function () {
    return 'Asset(name=' + Kotlin.toString(this.name) + (', url=' + Kotlin.toString(this.url)) + ')';
  };
  Asset.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    return result;
  };
  Asset.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.url, other.url)))));
  };
  function start($receiver, state, clearWorld, clearCache, args) {
    if (clearWorld === void 0)
      clearWorld = null;
    if (clearCache === void 0)
      clearCache = null;
    var stateID = get_js(Kotlin.getKClassFromExpression(state)).name;
    $receiver.add(stateID, state, false);
    $receiver.start(stateID);
  }
  function GameStateType(name) {
    var tmp$;
    return Kotlin.isType(tmp$ = name, Object) ? tmp$ : throwCCE();
  }
  function GameState(game) {
  }
  GameState.prototype.preload = function () {
  };
  GameState.prototype.create = function () {
  };
  GameState.prototype.update = function () {
  };
  GameState.prototype.render = function () {
  };
  GameState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameState',
    interfaces: []
  };
  function Game(config) {
    return new Game_init(config.width, config.height, config.renderer, config.parent, config.state, config.transparent, config.antialias, config.physicsConfig);
  }
  function TextStyle(font, fontStyle, fontVariant, fontWeight, fontSize, backgroundColor, fill, align, boundsAlignH, boundsAlignV, stroke, strokeThickness, wordWrap, wordWrapWidth, tabs) {
    if (font === void 0)
      font = null;
    if (fontStyle === void 0)
      fontStyle = null;
    if (fontVariant === void 0)
      fontVariant = null;
    if (fontWeight === void 0)
      fontWeight = null;
    if (fontSize === void 0)
      fontSize = null;
    if (backgroundColor === void 0)
      backgroundColor = null;
    if (fill === void 0)
      fill = null;
    if (align === void 0)
      align = null;
    if (boundsAlignH === void 0)
      boundsAlignH = null;
    if (boundsAlignV === void 0)
      boundsAlignV = null;
    if (stroke === void 0)
      stroke = null;
    if (strokeThickness === void 0)
      strokeThickness = null;
    if (wordWrap === void 0)
      wordWrap = null;
    if (wordWrapWidth === void 0)
      wordWrapWidth = null;
    if (tabs === void 0)
      tabs = null;
    var out = {};
    if (font != null)
      out.font = font;
    if (fontStyle != null)
      out.fontStyle = fontStyle;
    if (fontVariant != null)
      out.fontVariant = fontVariant;
    if (fontWeight != null)
      out.fontWeight = fontWeight;
    if (fontSize != null)
      out.fontSize = fontSize;
    if (backgroundColor != null)
      out.backgroundColor = backgroundColor;
    if (fill != null)
      out.fill = fill;
    if (align != null)
      out.align = align;
    if (boundsAlignH != null)
      out.boundsAlignH = boundsAlignH;
    if (boundsAlignV != null)
      out.boundsAlignV = boundsAlignV;
    if (stroke != null)
      out.stroke = stroke;
    if (strokeThickness != null)
      out.strokeThickness = strokeThickness;
    if (wordWrap != null)
      out.wordWrap = wordWrap;
    if (wordWrapWidth != null)
      out.wordWrapWidth = wordWrapWidth;
    if (tabs != null)
      out.tabs = tabs;
    return out;
  }
  function GameConfig(enableDebug, width, height, renderer, parent, transparent, antialias, resolution, physicsConfig, state) {
    if (enableDebug === void 0)
      enableDebug = null;
    if (width === void 0)
      width = null;
    if (height === void 0)
      height = null;
    if (renderer === void 0)
      renderer = null;
    if (parent === void 0)
      parent = null;
    if (transparent === void 0)
      transparent = null;
    if (antialias === void 0)
      antialias = null;
    if (resolution === void 0)
      resolution = null;
    if (physicsConfig === void 0)
      physicsConfig = null;
    if (state === void 0)
      state = null;
    var out = {};
    if (enableDebug != null)
      out.enableDebug = enableDebug;
    if (width != null)
      out.width = width;
    if (height != null)
      out.height = height;
    if (renderer != null)
      out.renderer = renderer;
    if (parent != null)
      out.parent = parent;
    if (transparent != null)
      out.transparent = transparent;
    if (antialias != null)
      out.antialias = antialias;
    if (resolution != null)
      out.resolution = resolution;
    if (physicsConfig != null)
      out.physicsConfig = physicsConfig;
    if (state != null)
      out.state = state;
    return out;
  }
  function IGameConfig() {
  }
  IGameConfig.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGameConfig',
    interfaces: []
  };
  function ContactMaterialOptions(friction, restitution, stiffness, relaxation, frictionStiffness, frictionRelaxation, surfaceVelocity) {
    if (friction === void 0)
      friction = null;
    if (restitution === void 0)
      restitution = null;
    if (stiffness === void 0)
      stiffness = null;
    if (relaxation === void 0)
      relaxation = null;
    if (frictionStiffness === void 0)
      frictionStiffness = null;
    if (frictionRelaxation === void 0)
      frictionRelaxation = null;
    if (surfaceVelocity === void 0)
      surfaceVelocity = null;
    var out = {};
    if (friction != null)
      out.friction = friction;
    if (restitution != null)
      out.restitution = restitution;
    if (stiffness != null)
      out.stiffness = stiffness;
    if (relaxation != null)
      out.relaxation = relaxation;
    if (frictionStiffness != null)
      out.frictionStiffness = frictionStiffness;
    if (frictionRelaxation != null)
      out.frictionRelaxation = frictionRelaxation;
    if (surfaceVelocity != null)
      out.surfaceVelocity = surfaceVelocity;
    return out;
  }
  function IContactMaterialOptions() {
  }
  IContactMaterialOptions.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IContactMaterialOptions',
    interfaces: []
  };
  function image($receiver, asset) {
    return $receiver.image(asset.name, asset.url);
  }
  function images($receiver, assets) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== assets.length; ++tmp$) {
      var element = assets[tmp$];
      $receiver.image(element.name, element.url);
    }
  }
  function images_0($receiver, assets) {
    var tmp$;
    tmp$ = assets.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver.image(element.name, element.url);
    }
  }
  function sound($receiver, asset) {
    return $receiver.audio(asset.name, asset.url);
  }
  function sounds($receiver, assets) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== assets.length; ++tmp$) {
      var element = assets[tmp$];
      $receiver.audio(element.name, element.url);
    }
  }
  function sounds_0($receiver, assets) {
    var tmp$;
    tmp$ = assets.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver.audio(element.name, element.url);
    }
  }
  function DirectionObj() {
  }
  DirectionObj.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DirectionObj',
    interfaces: []
  };
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  function BaseLocale() {
    BaseLocale$Companion_getInstance();
    this.strings = emptyMap();
  }
  function BaseLocale$Companion() {
    BaseLocale$Companion_instance = this;
  }
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  BaseLocale$Companion.prototype.create_qk3xy8$ = function (json) {
    var tmp$, tmp$_0;
    var map = LinkedHashMap_init();
    tmp$ = iterator(Object.keys(json));
    while (tmp$.hasNext()) {
      var key = tmp$.next();
      map.put_xwzc9p$(key, typeof (tmp$_0 = json[key]) === 'string' ? tmp$_0 : throwCCE());
    }
    println('Keys: ' + map.entries.size);
    var $receiver = new BaseLocale();
    $receiver.strings = map;
    return $receiver;
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
  BaseLocale.prototype.get_25kzsl$ = function (key, arguments_0) {
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
  BaseLocale.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseLocale',
    interfaces: []
  };
  function LorittaProfile(userId, dreams) {
    this.userId = userId;
    this.dreams = dreams;
  }
  LorittaProfile.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LorittaProfile',
    interfaces: []
  };
  function ShowdownExtension(type, filter) {
    this.type = type;
    this.filter = filter;
  }
  ShowdownExtension.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShowdownExtension',
    interfaces: []
  };
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
  _.loadEmbeddedLocale = loadEmbeddedLocale;
  _.main_kand9s$ = main;
  _.testError = testError;
  var package$Phaser = _.Phaser || (_.Phaser = {});
  Object.defineProperty(package$Phaser, 'kPI2', {
    get: function () {
      return kPI2;
    }
  });
  Object.defineProperty(package$Phaser, 'kPI', {
    get: function () {
      return kPI;
    }
  });
  package$Phaser.sin_uhitxw$ = sin;
  package$Phaser.cos_uhitxw$ = cos;
  package$Phaser.get_PI2_akwgk2$ = get_PI2;
  package$Phaser.get_PI_akwgk2$ = get_PI;
  package$Phaser.round_pnwyho$ = round;
  package$Phaser.floor_pnwyho$ = floor;
  package$Phaser.atan2_kerio2$ = atan2;
  package$Phaser.sqrt_uhitxw$ = sqrt;
  package$Phaser.abs_uhitxw$ = abs;
  package$Phaser.random_akwgk2$ = random;
  package$Phaser.random_e9h2e2$ = random_0;
  package$Phaser.cropKt = crop;
  package$Phaser.destroyKt = destroy;
  package$Phaser.reviveKt = revive;
  package$Phaser.resetKt = reset;
  package$Phaser.setScaleMinMaxKt = setScaleMinMax;
  package$Phaser.setTextureKt = setTexture;
  package$Phaser.setTextureKt2 = setTexture_0;
  package$Phaser.setTextureKt3 = setTexture_1;
  package$Phaser.setTextureKt4 = setTexture_2;
  package$Phaser.getBoundsKt = getBounds;
  package$Phaser.getBoundsKt1 = getBounds_0;
  package$Phaser.getBoundsKt2 = getBounds_1;
  package$Phaser.alignKt = alignTo;
  package$Phaser.enableKt = enable;
  package$Phaser.enableKt2 = enable_0;
  package$Phaser.enableKt3 = enable_1;
  package$Phaser.enableKt4 = enable_2;
  package$Phaser.enableKt5 = enable_3;
  package$Phaser.enableKt6 = enable_4;
  package$Phaser.enableKt7 = enable_5;
  package$Phaser.enableKt8 = enable_6;
  package$Phaser.enableKt9 = enable_7;
  package$Phaser.enableKt10 = enable_8;
  package$Phaser.Asset = Asset;
  package$Phaser.start_ba683k$ = start;
  package$Phaser.GameStateType_61zpoe$ = GameStateType;
  package$Phaser.GameState = GameState;
  package$Phaser.Game_lcgo3e$ = Game;
  package$Phaser.TextStyle_5jhq38$ = TextStyle;
  package$Phaser.GameConfig_a28mr1$ = GameConfig;
  package$Phaser.IGameConfig = IGameConfig;
  package$Phaser.ContactMaterialOptions_il8t7t$ = ContactMaterialOptions;
  package$Phaser.IContactMaterialOptions = IContactMaterialOptions;
  package$Phaser.image_7nddz2$ = image;
  package$Phaser.images_wjla1x$ = images;
  package$Phaser.images_kx076x$ = images_0;
  package$Phaser.sound_7nddz2$ = sound;
  package$Phaser.sounds_wjla1x$ = sounds;
  package$Phaser.sounds_kx076x$ = sounds_0;
  package$Phaser.DirectionObj = DirectionObj;
  Object.defineProperty(BaseLocale, 'Companion', {
    get: BaseLocale$Companion_getInstance
  });
  var package$utils = _.utils || (_.utils = {});
  package$utils.BaseLocale = BaseLocale;
  package$utils.LorittaProfile = LorittaProfile;
  package$utils.ShowdownExtension = ShowdownExtension;
  package$utils.TingleOptions = TingleOptions;
  selfProfile = null;
  kPI2 = Math.PI * 2;
  kPI = Math.PI;
  main([]);
  Kotlin.defineModule('SpicyMorenitta', _);
  return _;
}(typeof SpicyMorenitta === 'undefined' ? {} : SpicyMorenitta, kotlin, this['kotlinx-html-js'], Phaser);
