if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'LoriJS'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'LoriJS'.");
}
if (typeof Phaser === 'undefined') {
  throw new Error("Error loading module 'LoriJS'. Its dependency 'Phaser' was not found. Please, check whether 'Phaser' is loaded prior to 'LoriJS'.");
}
var LoriJS = function (_, Kotlin, $module$Phaser) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Any = Object;
  var throwCCE = Kotlin.throwCCE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var numberToInt = Kotlin.numberToInt;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var Unit = Kotlin.kotlin.Unit;
  var Game_init = $module$Phaser.Game;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var withIndex = Kotlin.kotlin.collections.withIndex_us0mfu$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var throwUPAE = Kotlin.throwUPAE;
  var equals = Kotlin.equals;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var rangeTo = Kotlin.kotlin.ranges.rangeTo_38ydlf$;
  var contains = Kotlin.kotlin.ranges.contains_x0ackb$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var State = $module$Phaser.State;
  var Physics$Companion = $module$Phaser.Physics;
  var Pair = Kotlin.kotlin.Pair;
  Need$NeedType.prototype = Object.create(Enum.prototype);
  Need$NeedType.prototype.constructor = Need$NeedType;
  LorigotchiBoot.prototype = Object.create(State.prototype);
  LorigotchiBoot.prototype.constructor = LorigotchiBoot;
  LorigotchiGame.prototype = Object.create(State.prototype);
  LorigotchiGame.prototype.constructor = LorigotchiGame;
  LorigotchiGameOver.prototype = Object.create(State.prototype);
  LorigotchiGameOver.prototype.constructor = LorigotchiGameOver;
  LorigotchiMainMenu.prototype = Object.create(State.prototype);
  LorigotchiMainMenu.prototype.constructor = LorigotchiMainMenu;
  LorittaPartner$Keyword.prototype = Object.create(Enum.prototype);
  LorittaPartner$Keyword.prototype.constructor = LorittaPartner$Keyword;
  LorittaPartner$Language.prototype = Object.create(Enum.prototype);
  LorittaPartner$Language.prototype.constructor = LorittaPartner$Language;
  function main(args) {
    println('LoriJS');
  }
  function jq(query) {
    var tmp$, tmp$_0;
    tmp$_0 = Kotlin.isType(tmp$ = query, Any) ? tmp$ : throwCCE();
    return jQuery(tmp$_0);
  }
  function LoriJson(handle) {
    this.handle = handle;
  }
  Object.defineProperty(LoriJson.prototype, 'string', {
    get: function () {
      return this.handle;
    }
  });
  Object.defineProperty(LoriJson.prototype, 'nullString', {
    get: function () {
      return this.handle;
    }
  });
  Object.defineProperty(LoriJson.prototype, 'int', {
    get: function () {
      return this.handle;
    }
  });
  Object.defineProperty(LoriJson.prototype, 'nullInt', {
    get: function () {
      return this.handle;
    }
  });
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  Object.defineProperty(LoriJson.prototype, 'array', {
    get: function () {
      var $receiver = this.handle;
      var destination = ArrayList_init($receiver.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var item = $receiver[tmp$];
        destination.add_11rb$(new LoriJson(item));
      }
      return copyToArray(destination);
    }
  });
  LoriJson.prototype.get_61zpoe$ = function (key) {
    var tmp$;
    var json = Kotlin.isType(tmp$ = this.handle, Object) ? tmp$ : throwCCE();
    return LoriJson_init(this.handle[key]);
  };
  LoriJson.prototype.toString = function () {
    return JSON.stringify(this.handle);
  };
  LoriJson.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoriJson',
    interfaces: []
  };
  function LoriJson_init(any, $this) {
    $this = $this || Object.create(LoriJson.prototype);
    var tmp$;
    LoriJson.call($this, Kotlin.isType(tmp$ = any, Object) ? tmp$ : throwCCE());
    return $this;
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
  function PartnerView() {
    PartnerView_instance = this;
    this.vanityUrlInput_yd1nzt$_0 = lazy(PartnerView$vanityUrlInput$lambda);
    this.vanityUrlExample_h5gt7d$_0 = lazy(PartnerView$vanityUrlExample$lambda);
    this.addKeyword_tsuq09$_0 = lazy(PartnerView$addKeyword$lambda);
    this.keywords_nehbnv$_0 = lazy(PartnerView$keywords$lambda);
    this.keywordList_8u39qq$_0 = lazy(PartnerView$keywordList$lambda);
  }
  Object.defineProperty(PartnerView.prototype, 'vanityUrlInput', {
    get: function () {
      var $receiver = this.vanityUrlInput_yd1nzt$_0;
      new PropertyMetadata('vanityUrlInput');
      return $receiver.value;
    }
  });
  Object.defineProperty(PartnerView.prototype, 'vanityUrlExample', {
    get: function () {
      var $receiver = this.vanityUrlExample_h5gt7d$_0;
      new PropertyMetadata('vanityUrlExample');
      return $receiver.value;
    }
  });
  Object.defineProperty(PartnerView.prototype, 'addKeyword', {
    get: function () {
      var $receiver = this.addKeyword_tsuq09$_0;
      new PropertyMetadata('addKeyword');
      return $receiver.value;
    }
  });
  Object.defineProperty(PartnerView.prototype, 'keywords', {
    get: function () {
      var $receiver = this.keywords_nehbnv$_0;
      new PropertyMetadata('keywords');
      return $receiver.value;
    }
  });
  Object.defineProperty(PartnerView.prototype, 'keywordList', {
    get: function () {
      var $receiver = this.keywordList_8u39qq$_0;
      new PropertyMetadata('keywordList');
      return $receiver.value;
    }
  });
  function PartnerView$start$lambda(this$PartnerView) {
    return function (f, f_0) {
      this$PartnerView.changeVanityUrlText();
      return Unit;
    };
  }
  function PartnerView$start$lambda_0(closure$keyword) {
    return function (index, html) {
      return jq('<option>').attr('value', closure$keyword.name).text(closure$keyword.name);
    };
  }
  function PartnerView$start$lambda_1(this$PartnerView, closure$keywords) {
    return function (it) {
      return this$PartnerView.keywordList.append(jq('<span>').attr('data-keyword-name', this$PartnerView.addKeyword.val().toString()).text(closure$keywords.find(':selected').text()));
    };
  }
  PartnerView.prototype.start = function () {
    var tmp$;
    this.vanityUrlInput.on('input', PartnerView$start$lambda(this));
    this.changeVanityUrlText();
    var keywords = jq('#keywords');
    tmp$ = withIndex(LorittaPartner$Keyword$values()).iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var idx = tmp$_0.component1()
      , keyword = tmp$_0.component2();
      println(keyword.name);
      keywords.append(PartnerView$start$lambda_0(keyword));
    }
    this.addKeyword.click(PartnerView$start$lambda_1(this, keywords));
  };
  PartnerView.prototype.changeVanityUrlText = function () {
    var vanityUrl = this.vanityUrlInput.val();
    this.vanityUrlExample.text('https://loritta.website/p/' + vanityUrl);
  };
  function PartnerView$vanityUrlInput$lambda() {
    return jq('#vanityUrl');
  }
  function PartnerView$vanityUrlExample$lambda() {
    return jq('#vanityUrlExample');
  }
  function PartnerView$addKeyword$lambda() {
    return jq('#addKeyword');
  }
  function PartnerView$keywords$lambda() {
    return jq('#keywords');
  }
  function PartnerView$keywordList$lambda() {
    return jq('#keywordList');
  }
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
  SaveStuff.prototype.aaa = function () {
    println('abc');
  };
  function SaveStuff$prepareSave$lambda(closure$json) {
    return function (index, _elem) {
      var elem = jQuery(_elem);
      closure$json[elem.attr('data-internal-name')] = elem.val();
      return Unit;
    };
  }
  function SaveStuff$prepareSave$lambda_0(a, b, c) {
    println(a);
    return Unit;
  }
  SaveStuff.prototype.prepareSave = function (type) {
    println('Preparing saving stuff...');
    var json_0 = json([]);
    var toBeSaved = jq('[data-internal-name]');
    json_0['type'] = type;
    toBeSaved.each(SaveStuff$prepareSave$lambda(json_0));
    println(JSON.stringify(json_0));
    jQuery.post('https://loritta.website/dashboard/configure/' + guildId + '/save', JSON.stringify(json_0), SaveStuff$prepareSave$lambda_0);
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
  function Lorigotchi() {
    Lorigotchi_instance = this;
    this.prefix = 'https://loritta.website/';
  }
  Lorigotchi.prototype.start = function () {
    var game = new Game_init(800, 600, $module$Phaser.AUTO, '');
    game.state.add(LorigotchiStates_getInstance().BOOT, new LorigotchiBoot());
    game.state.add(LorigotchiStates_getInstance().MAIN_MENU, new LorigotchiMainMenu());
    game.state.add(LorigotchiStates_getInstance().IN_GAME, new LorigotchiGame());
    game.state.add(LorigotchiStates_getInstance().GAME_OVER, new LorigotchiGameOver());
    game.state.start(LorigotchiStates_getInstance().BOOT);
  };
  Lorigotchi.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Lorigotchi',
    interfaces: []
  };
  var Lorigotchi_instance = null;
  function Lorigotchi_getInstance() {
    if (Lorigotchi_instance === null) {
      new Lorigotchi();
    }
    return Lorigotchi_instance;
  }
  function Need(quantity, type) {
    this.quantity = quantity;
    this.type = type;
    this.bar_jkndws$_0 = this.bar_jkndws$_0;
  }
  Object.defineProperty(Need.prototype, 'bar', {
    get: function () {
      if (this.bar_jkndws$_0 == null)
        return throwUPAE('bar');
      return this.bar_jkndws$_0;
    },
    set: function (bar) {
      this.bar_jkndws$_0 = bar;
    }
  });
  function Need$NeedType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Need$NeedType_initFields() {
    Need$NeedType_initFields = function () {
    };
    Need$NeedType$HUNGER_instance = new Need$NeedType('HUNGER', 0);
    Need$NeedType$FUN_instance = new Need$NeedType('FUN', 1);
    Need$NeedType$HYGIENE_instance = new Need$NeedType('HYGIENE', 2);
    Need$NeedType$BATHROOM_instance = new Need$NeedType('BATHROOM', 3);
    Need$NeedType$SOCIAL_instance = new Need$NeedType('SOCIAL', 4);
  }
  var Need$NeedType$HUNGER_instance;
  function Need$NeedType$HUNGER_getInstance() {
    Need$NeedType_initFields();
    return Need$NeedType$HUNGER_instance;
  }
  var Need$NeedType$FUN_instance;
  function Need$NeedType$FUN_getInstance() {
    Need$NeedType_initFields();
    return Need$NeedType$FUN_instance;
  }
  var Need$NeedType$HYGIENE_instance;
  function Need$NeedType$HYGIENE_getInstance() {
    Need$NeedType_initFields();
    return Need$NeedType$HYGIENE_instance;
  }
  var Need$NeedType$BATHROOM_instance;
  function Need$NeedType$BATHROOM_getInstance() {
    Need$NeedType_initFields();
    return Need$NeedType$BATHROOM_instance;
  }
  var Need$NeedType$SOCIAL_instance;
  function Need$NeedType$SOCIAL_getInstance() {
    Need$NeedType_initFields();
    return Need$NeedType$SOCIAL_instance;
  }
  Need$NeedType.prototype.getFancyName = function () {
    var tmp$;
    if (equals(this, Need$NeedType$HUNGER_getInstance()))
      tmp$ = 'Fome';
    else if (equals(this, Need$NeedType$FUN_getInstance()))
      tmp$ = 'Divers\xE3o';
    else if (equals(this, Need$NeedType$HYGIENE_getInstance()))
      tmp$ = 'Higiene';
    else if (equals(this, Need$NeedType$BATHROOM_getInstance()))
      tmp$ = 'Banheiro';
    else if (equals(this, Need$NeedType$SOCIAL_getInstance()))
      tmp$ = 'Social';
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    return tmp$;
  };
  Need$NeedType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NeedType',
    interfaces: [Enum]
  };
  function Need$NeedType$values() {
    return [Need$NeedType$HUNGER_getInstance(), Need$NeedType$FUN_getInstance(), Need$NeedType$HYGIENE_getInstance(), Need$NeedType$BATHROOM_getInstance(), Need$NeedType$SOCIAL_getInstance()];
  }
  Need$NeedType.values = Need$NeedType$values;
  function Need$NeedType$valueOf(name) {
    switch (name) {
      case 'HUNGER':
        return Need$NeedType$HUNGER_getInstance();
      case 'FUN':
        return Need$NeedType$FUN_getInstance();
      case 'HYGIENE':
        return Need$NeedType$HYGIENE_getInstance();
      case 'BATHROOM':
        return Need$NeedType$BATHROOM_getInstance();
      case 'SOCIAL':
        return Need$NeedType$SOCIAL_getInstance();
      default:throwISE('No enum constant lorigotchi.pet.Need.NeedType.' + name);
    }
  }
  Need$NeedType.valueOf_61zpoe$ = Need$NeedType$valueOf;
  Need.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Need',
    interfaces: []
  };
  function Pet(game) {
    this.game = game;
    this.needs = ArrayList_init();
    this.sprite_xtdmgr$_0 = this.sprite_xtdmgr$_0;
    this.isPathfinding = false;
    this.cancelMovement = false;
  }
  Object.defineProperty(Pet.prototype, 'sprite', {
    get: function () {
      if (this.sprite_xtdmgr$_0 == null)
        return throwUPAE('sprite');
      return this.sprite_xtdmgr$_0;
    },
    set: function (sprite) {
      this.sprite_xtdmgr$_0 = sprite;
    }
  });
  Pet.prototype.handleNeeds = function () {
    var tmp$;
    tmp$ = this.needs.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.quantity = element.quantity - 1 | 0;
      element.bar.width = element.quantity / 100 * 128;
    }
  };
  function Pet$walkTo$lambda(closure$x, this$Pet, closure$cancelMovement, closure$callback, closure$timer) {
    return function () {
      if (contains(rangeTo(closure$x - 5, closure$x + 4), numberToInt(this$Pet.sprite.x))) {
        this$Pet.isPathfinding = false;
        if (closure$cancelMovement) {
          this$Pet.cancelMovement = false;
        }
        if (this$Pet.sprite.x !== closure$x) {
          this$Pet.sprite.x = closure$x;
        }
        if (closure$callback != null)
          closure$callback();
        this$Pet.game.time.events.remove(ensureNotNull(closure$timer.v));
        return;
      }
      if (closure$x > this$Pet.sprite.x) {
        println('Going to the right...');
        this$Pet.sprite.body.velocity.x = 150;
      }
       else {
        println('Going to the left...');
        this$Pet.sprite.body.velocity.x = -150;
      }
      return Unit;
    };
  }
  Pet.prototype.walkTo_b2t2j$ = function (x, cancelMovement, callback) {
    if (cancelMovement === void 0)
      cancelMovement = false;
    if (callback === void 0)
      callback = null;
    this.isPathfinding = true;
    if (cancelMovement) {
      this.cancelMovement = true;
    }
    var timer = {v: null};
    timer.v = this.game.time.events.loop(5, Pet$walkTo$lambda(x, this, cancelMovement, callback, timer));
  };
  Pet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Pet',
    interfaces: []
  };
  function LorigotchiBoot() {
    State.call(this);
  }
  LorigotchiBoot.prototype.preload = function () {
    this.game.load.image(LorigotchiImages_getInstance().BLOB, 'https://loritta.website/assets/img/lorigotchi/396521773178552331.png');
    this.game.load.image(LorigotchiImages_getInstance().JAPA, 'https://loritta.website/assets/img/lorigotchi/japa.jpg');
    this.game.load.image(LorigotchiImages_getInstance().TEMP, 'https://loritta.website/assets/img/lorigotchi/temp.png');
  };
  LorigotchiBoot.prototype.create = function () {
    this.game.state.start(LorigotchiStates_getInstance().MAIN_MENU);
  };
  LorigotchiBoot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LorigotchiBoot',
    interfaces: []
  };
  function LorigotchiGame() {
    State.call(this);
    this.pet_iu6rx1$_0 = this.pet_iu6rx1$_0;
    this.invisibleWall1_3j20m2$_0 = this.invisibleWall1_3j20m2$_0;
  }
  Object.defineProperty(LorigotchiGame.prototype, 'pet', {
    get: function () {
      if (this.pet_iu6rx1$_0 == null)
        return throwUPAE('pet');
      return this.pet_iu6rx1$_0;
    },
    set: function (pet) {
      this.pet_iu6rx1$_0 = pet;
    }
  });
  Object.defineProperty(LorigotchiGame.prototype, 'invisibleWall1', {
    get: function () {
      if (this.invisibleWall1_3j20m2$_0 == null)
        return throwUPAE('invisibleWall1');
      return this.invisibleWall1_3j20m2$_0;
    },
    set: function (invisibleWall1) {
      this.invisibleWall1_3j20m2$_0 = invisibleWall1;
    }
  });
  function LorigotchiGame$create$drawNeeds(this$LorigotchiGame) {
    return function (name, x, y) {
      var barY = y + 26 | 0;
      var backdrop = this$LorigotchiGame.game.add.graphics(x, barY);
      backdrop.beginFill(0);
      backdrop.drawRect(0, 0, 128, 10);
      var something = this$LorigotchiGame.game.add.graphics(x, barY);
      something.beginFill(65280);
      something.drawRect(0, 0, 128, 10);
      var $receiver = this$LorigotchiGame.game.add.text(x, y, name);
      $receiver.font = 'Comic Sans MS';
      $receiver.fontSize = '18px';
      $receiver.fill = '#ffffff';
      $receiver.align = 'center';
      $receiver.boundsAlignH = 'center';
      var text = $receiver;
      text.setTextBounds(0, 0, 128, 256);
      return new Pair(something, backdrop);
    };
  }
  function LorigotchiGame$create$lambda$lambda(this$LorigotchiGame) {
    return function () {
      this$LorigotchiGame.pet.sprite.body.velocity.y = -350;
      return Unit;
    };
  }
  function LorigotchiGame$create$lambda(this$LorigotchiGame) {
    return function (sprite, pointer) {
      println('Start pathfinding...');
      this$LorigotchiGame.pet.walkTo_b2t2j$(this$LorigotchiGame.game.world.centerX, true, LorigotchiGame$create$lambda$lambda(this$LorigotchiGame));
      return Unit;
    };
  }
  function LorigotchiGame$create$lambda_0(this$LorigotchiGame) {
    return function () {
      this$LorigotchiGame.pet.handleNeeds();
      return Unit;
    };
  }
  LorigotchiGame.prototype.create = function () {
    var tmp$;
    State.prototype.create.call(this);
    this.game.physics.startSystem(Physics$Companion.ARCADE);
    var drawNeeds = LorigotchiGame$create$drawNeeds(this);
    var background = this.game.add.graphics(0, 0);
    background.beginFill(1645600);
    background.drawRect(0, 0, 800, 600);
    var playfield = this.game.add.graphics(0, 0);
    playfield.beginFill(16777215);
    playfield.drawRect(10, 10, 780, 372);
    this.pet = new Pet(this.game);
    this.pet.sprite = this.game.add.sprite(this.game.world.centerX, 25, LorigotchiImages_getInstance().JAPA);
    this.pet.sprite.anchor.set(0.5);
    this.game.physics.enable(this.pet.sprite);
    this.pet.sprite.body.bounce.y = 0.2;
    this.pet.sprite.body.gravity.y = 300;
    this.pet.sprite.body.collideWorldBounds = true;
    this.pet.sprite.width = 128.0;
    this.pet.sprite.height = 128.0;
    this.pet.sprite.inputEnabled = true;
    this.pet.sprite.events.onInputDown.add(LorigotchiGame$create$lambda(this));
    this.pet.needs.add_11rb$(new Need(100, Need$NeedType$HUNGER_getInstance()));
    this.pet.needs.add_11rb$(new Need(100, Need$NeedType$FUN_getInstance()));
    this.pet.needs.add_11rb$(new Need(100, Need$NeedType$HYGIENE_getInstance()));
    this.pet.needs.add_11rb$(new Need(100, Need$NeedType$BATHROOM_getInstance()));
    this.pet.needs.add_11rb$(new Need(100, Need$NeedType$SOCIAL_getInstance()));
    this.invisibleWall1 = this.game.add.sprite(11, 383);
    this.game.physics.enable(this.invisibleWall1);
    this.invisibleWall1.width = 780.0;
    this.invisibleWall1.height = 15.0;
    this.invisibleWall1.body.immovable = true;
    var $receiver = this.game.add.text(320, 390, 'Necessidades');
    $receiver.font = 'Comic Sans MS';
    $receiver.fontSize = '24px';
    $receiver.fill = '#ffffff';
    var barY = 416;
    tmp$ = this.pet.needs.iterator();
    while (tmp$.hasNext()) {
      var need = tmp$.next();
      need.bar = drawNeeds(need.type.getFancyName(), 320, barY).first;
      barY = barY + 35 | 0;
    }
    var timer = this.game.time.events.loop(500, LorigotchiGame$create$lambda_0(this));
  };
  LorigotchiGame.prototype.render = function () {
    State.prototype.render.call(this);
  };
  LorigotchiGame.prototype.update = function () {
    State.prototype.update.call(this);
    var hitPlatform = this.game.physics.arcade.collide(this.pet.sprite, this.invisibleWall1);
    var cursors = this.game.input.keyboard.createCursorKeys();
    this.pet.sprite.body.velocity.x = 0;
    if (cursors.left.isDown) {
      this.pet.sprite.body.velocity.x = -150;
    }
     else if (cursors.right.isDown) {
      this.pet.sprite.body.velocity.x = 150;
    }
    if (cursors.up.isDown) {
      if (hitPlatform && this.pet.sprite.body.touching.down && cursors.up.isDown) {
        this.pet.sprite.body.velocity.y = -350;
      }
    }
  };
  LorigotchiGame.prototype.preload = function () {
    State.prototype.preload.call(this);
  };
  LorigotchiGame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LorigotchiGame',
    interfaces: []
  };
  function LorigotchiGameOver() {
    State.call(this);
  }
  LorigotchiGameOver.prototype.create = function () {
    var text = this.game.add.text(0, 0, 'phaser 2.4 text bounds');
    text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    text.setTextBounds(0, 100, 800, 100);
  };
  LorigotchiGameOver.prototype.update = function () {
    State.prototype.update.call(this);
  };
  LorigotchiGameOver.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LorigotchiGameOver',
    interfaces: []
  };
  function LorigotchiMainMenu() {
    State.call(this);
  }
  function LorigotchiMainMenu$create$lambda(this$LorigotchiMainMenu) {
    return function (sprite, pointer) {
      println("wow! let's switch states because why not?");
      this$LorigotchiMainMenu.game.state.start(LorigotchiStates_getInstance().IN_GAME);
      return Unit;
    };
  }
  LorigotchiMainMenu.prototype.create = function () {
    var japa = this.game.add.sprite(0, 0, LorigotchiImages_getInstance().JAPA);
    japa.inputEnabled = true;
    japa.width = 64.0;
    japa.height = 64.0;
    var $receiver = this.game.add.text(this.game.world.centerX, this.game.world.centerY, '- phaser -\nwith a sprinkle of\npixi dust');
    $receiver.font = 'Comic Sans MS';
    $receiver.fill = '#ff0044';
    $receiver.align = 'center';
    var text = $receiver;
    text.anchor.set(0.5);
    japa.events.onInputDown.add(LorigotchiMainMenu$create$lambda(this));
  };
  LorigotchiMainMenu.prototype.update = function () {
    State.prototype.update.call(this);
  };
  LorigotchiMainMenu.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LorigotchiMainMenu',
    interfaces: []
  };
  function LorigotchiImages() {
    LorigotchiImages_instance = this;
    this.BLOB = 'nolikeblob';
    this.JAPA = 'japa';
    this.TEMP = 'temp';
  }
  LorigotchiImages.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LorigotchiImages',
    interfaces: []
  };
  var LorigotchiImages_instance = null;
  function LorigotchiImages_getInstance() {
    if (LorigotchiImages_instance === null) {
      new LorigotchiImages();
    }
    return LorigotchiImages_instance;
  }
  function LorigotchiStates() {
    LorigotchiStates_instance = this;
    this.BOOT = 'Boot';
    this.MAIN_MENU = 'MainMenu';
    this.IN_GAME = 'InGame';
    this.GAME_OVER = 'GameOver';
  }
  LorigotchiStates.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LorigotchiStates',
    interfaces: []
  };
  var LorigotchiStates_instance = null;
  function LorigotchiStates_getInstance() {
    if (LorigotchiStates_instance === null) {
      new LorigotchiStates();
    }
    return LorigotchiStates_instance;
  }
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
    LorittaPartner$Keyword$ANIME_AND_MANGA_instance = new LorittaPartner$Keyword('ANIME_AND_MANGA', 1);
    LorittaPartner$Keyword$ROLEPLAYING_instance = new LorittaPartner$Keyword('ROLEPLAYING', 2);
    LorittaPartner$Keyword$GIVEAWAYS_instance = new LorittaPartner$Keyword('GIVEAWAYS', 3);
    LorittaPartner$Keyword$MEMES_instance = new LorittaPartner$Keyword('MEMES', 4);
    LorittaPartner$Keyword$COMMUNITY_instance = new LorittaPartner$Keyword('COMMUNITY', 5);
    LorittaPartner$Keyword$PROGRAMMING_instance = new LorittaPartner$Keyword('PROGRAMMING', 6);
    LorittaPartner$Keyword$MUSIC_instance = new LorittaPartner$Keyword('MUSIC', 7);
    LorittaPartner$Keyword$YOUTUBER_instance = new LorittaPartner$Keyword('YOUTUBER', 8);
    LorittaPartner$Keyword$STREAMER_instance = new LorittaPartner$Keyword('STREAMER', 9);
    LorittaPartner$Keyword$DISCUSSION_instance = new LorittaPartner$Keyword('DISCUSSION', 10);
    LorittaPartner$Keyword$EMOTES_instance = new LorittaPartner$Keyword('EMOTES', 11);
    LorittaPartner$Keyword$NEWS_instance = new LorittaPartner$Keyword('NEWS', 12);
    LorittaPartner$Keyword$ART_instance = new LorittaPartner$Keyword('ART', 13);
  }
  var LorittaPartner$Keyword$GAMING_instance;
  function LorittaPartner$Keyword$GAMING_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$GAMING_instance;
  }
  var LorittaPartner$Keyword$ANIME_AND_MANGA_instance;
  function LorittaPartner$Keyword$ANIME_AND_MANGA_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$ANIME_AND_MANGA_instance;
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
  LorittaPartner$Keyword.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Keyword',
    interfaces: [Enum]
  };
  function LorittaPartner$Keyword$values() {
    return [LorittaPartner$Keyword$GAMING_getInstance(), LorittaPartner$Keyword$ANIME_AND_MANGA_getInstance(), LorittaPartner$Keyword$ROLEPLAYING_getInstance(), LorittaPartner$Keyword$GIVEAWAYS_getInstance(), LorittaPartner$Keyword$MEMES_getInstance(), LorittaPartner$Keyword$COMMUNITY_getInstance(), LorittaPartner$Keyword$PROGRAMMING_getInstance(), LorittaPartner$Keyword$MUSIC_getInstance(), LorittaPartner$Keyword$YOUTUBER_getInstance(), LorittaPartner$Keyword$STREAMER_getInstance(), LorittaPartner$Keyword$DISCUSSION_getInstance(), LorittaPartner$Keyword$EMOTES_getInstance(), LorittaPartner$Keyword$NEWS_getInstance(), LorittaPartner$Keyword$ART_getInstance()];
  }
  LorittaPartner$Keyword.values = LorittaPartner$Keyword$values;
  function LorittaPartner$Keyword$valueOf(name) {
    switch (name) {
      case 'GAMING':
        return LorittaPartner$Keyword$GAMING_getInstance();
      case 'ANIME_AND_MANGA':
        return LorittaPartner$Keyword$ANIME_AND_MANGA_getInstance();
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
  _.main_kand9s$ = main;
  _.jq_61zpoe$ = jq;
  _.LoriJson_init_s8jyv4$ = LoriJson_init;
  _.LoriJson = LoriJson;
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
  var package$dashboard = _.dashboard || (_.dashboard = {});
  Object.defineProperty(package$dashboard, 'PartnerView', {
    get: PartnerView_getInstance
  });
  Object.defineProperty(package$dashboard, 'SaveStuff', {
    get: SaveStuff_getInstance
  });
  var package$lorigotchi = _.lorigotchi || (_.lorigotchi = {});
  Object.defineProperty(package$lorigotchi, 'Lorigotchi', {
    get: Lorigotchi_getInstance
  });
  Object.defineProperty(Need$NeedType, 'HUNGER', {
    get: Need$NeedType$HUNGER_getInstance
  });
  Object.defineProperty(Need$NeedType, 'FUN', {
    get: Need$NeedType$FUN_getInstance
  });
  Object.defineProperty(Need$NeedType, 'HYGIENE', {
    get: Need$NeedType$HYGIENE_getInstance
  });
  Object.defineProperty(Need$NeedType, 'BATHROOM', {
    get: Need$NeedType$BATHROOM_getInstance
  });
  Object.defineProperty(Need$NeedType, 'SOCIAL', {
    get: Need$NeedType$SOCIAL_getInstance
  });
  Need.NeedType = Need$NeedType;
  var package$pet = package$lorigotchi.pet || (package$lorigotchi.pet = {});
  package$pet.Need = Need;
  package$pet.Pet = Pet;
  var package$states = package$lorigotchi.states || (package$lorigotchi.states = {});
  package$states.LorigotchiBoot = LorigotchiBoot;
  package$states.LorigotchiGame = LorigotchiGame;
  package$states.LorigotchiGameOver = LorigotchiGameOver;
  package$states.LorigotchiMainMenu = LorigotchiMainMenu;
  var package$utils = package$lorigotchi.utils || (package$lorigotchi.utils = {});
  Object.defineProperty(package$utils, 'LorigotchiImages', {
    get: LorigotchiImages_getInstance
  });
  Object.defineProperty(package$utils, 'LorigotchiStates', {
    get: LorigotchiStates_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'GAMING', {
    get: LorittaPartner$Keyword$GAMING_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'ANIME_AND_MANGA', {
    get: LorittaPartner$Keyword$ANIME_AND_MANGA_getInstance
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
  LorittaPartner.prototype.Keyword = LorittaPartner$Keyword;
  LorittaPartner.prototype.Language = LorittaPartner$Language;
  var package$utils_0 = _.utils || (_.utils = {});
  Object.defineProperty(package$utils_0, 'LorittaPartner', {
    get: LorittaPartner_getInstance
  });
  kPI2 = Math.PI * 2;
  kPI = Math.PI;
  main([]);
  Kotlin.defineModule('LoriJS', _);
  return _;
}(typeof LoriJS === 'undefined' ? {} : LoriJS, kotlin, Phaser);
