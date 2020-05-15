if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'LoriTicTacToe'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'LoriTicTacToe'.");
}
if (typeof SpicyMorenitta === 'undefined') {
  throw new Error("Error loading module 'LoriTicTacToe'. Its dependency 'SpicyMorenitta' was not found. Please, check whether 'SpicyMorenitta' is loaded prior to 'LoriTicTacToe'.");
}
var LoriTicTacToe = function (_, Kotlin, $module$SpicyMorenitta) {
  'use strict';
  var throwUPAE = Kotlin.throwUPAE;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var anonymous = $module$SpicyMorenitta;
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var toString = Kotlin.toString;
  var equals = Kotlin.equals;
  var withIndex = Kotlin.kotlin.collections.withIndex_us0mfu$;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var jq = $module$SpicyMorenitta.jq_61zpoe$;
  var numberToInt = Kotlin.numberToInt;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  function TicTacToe() {
    TicTacToe_instance = this;
    this.started = false;
    this.connection_jbwnbk$_0 = this.connection_jbwnbk$_0;
  }
  Object.defineProperty(TicTacToe.prototype, 'connection', {
    get: function () {
      if (this.connection_jbwnbk$_0 == null)
        return throwUPAE('connection');
      return this.connection_jbwnbk$_0;
    },
    set: function (connection) {
      this.connection_jbwnbk$_0 = connection;
    }
  });
  TicTacToe.prototype.debug = function () {
    var json_0 = json([to('type', 'tictactoe_debug')]);
    var stringifyJson = JSON.stringify(json_0);
    println('Sending ' + stringifyJson + '...');
    this.connection.send(stringifyJson);
  };
  function TicTacToe$start$lambda(closure$followMouse) {
    return function (it) {
      var tmp$, tmp$_0;
      closure$followMouse.style.left = ((typeof (tmp$ = it.clientX) === 'number' ? tmp$ : throwCCE()) - 32 | 0).toString() + 'px';
      closure$followMouse.style.top = ((typeof (tmp$_0 = it.clientY) === 'number' ? tmp$_0 : throwCCE()) - 32 | 0).toString() + 'px';
      return Unit;
    };
  }
  function TicTacToe$start$lambda$lambda(closure$roomId, this$TicTacToe) {
    return function (it) {
      ensureNotNull(document.getElementById('howdy')).innerHTML = 'Conex\xE3o ao WebSocket aberta! Tentando entrar em uma sala de jooj da velha...';
      var json_0 = json([to('type', 'join_tictactoe_game'), to('roomId', closure$roomId)]);
      this$TicTacToe.connection.send(JSON.stringify(json_0));
      return Unit;
    };
  }
  function TicTacToe$start$lambda$lambda_0(it) {
    ensureNotNull(document.getElementById('howdy')).innerHTML = 'Erro ao conectar no WebSocket!';
    return false;
  }
  function TicTacToe$start$lambda$lambda$lambda(closure$cell, closure$i, this$TicTacToe, closure$pop) {
    return function (it) {
      println('owo, clicked!');
      if (!equals(closure$cell.innerHTML, 'X') && !equals(closure$cell.innerHTML, 'O')) {
        var json_0 = json([to('type', 'make_tictactoe_move'), to('cell_position', closure$i)]);
        var stringifyJson = JSON.stringify(json_0);
        println('Sending ' + closure$i + ' - ' + stringifyJson + '...');
        this$TicTacToe.connection.send(stringifyJson);
        closure$pop.play();
      }
      return Unit;
    };
  }
  function TicTacToe$start$lambda$lambda$lambda$lambda() {
    return Unit;
  }
  function TicTacToe$start$lambda$lambda$lambda$ObjectLiteral() {
  }
  TicTacToe$start$lambda$lambda$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function TicTacToe$start$lambda$lambda$lambda$lambda$lambda() {
    return Unit;
  }
  function TicTacToe$start$lambda$lambda$lambda$lambda_0(closure$dyn) {
    return function () {
      closure$dyn.opacity = 0;
      return jq('#brightFlash').animate(closure$dyn, 125, TicTacToe$start$lambda$lambda$lambda$lambda$lambda);
    };
  }
  function TicTacToe$start$lambda$lambda$lambda_0(closure$to, this$TicTacToe, closure$ko) {
    return function () {
      this$TicTacToe.moveHandTo_omqoy0$(closure$to.v == null ? throwUPAE('to') : closure$to.v, 250, TicTacToe$start$lambda$lambda$lambda$lambda);
      closure$ko.play();
      var dyn = new TicTacToe$start$lambda$lambda$lambda$ObjectLiteral();
      dyn.opacity = 1;
      return jq('#brightFlash').animate(dyn, 125, TicTacToe$start$lambda$lambda$lambda$lambda_0(dyn));
    };
  }
  function TicTacToe$start$lambda$lambda_1(closure$notify, this$TicTacToe, closure$pop, closure$followMouse, closure$ko, closure$ts1Promotion) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
      var rawData = it.data;
      ensureNotNull(document.getElementById('howdy')).innerHTML = 'Recebi alguma coisa! ' + rawData;
      println('Recebi: ' + toString(rawData));
      var data = JSON.parse(rawData);
      if (equals(data['api:code'], 104)) {
        ensureNotNull(document.getElementById('howdy')).innerHTML = 'Voc\xEA j\xE1 est\xE1 nesta sala!';
      }
       else if (equals(data['api:code'], 103)) {
        ensureNotNull(document.getElementById('howdy')).innerHTML = 'Sala cheia!';
      }
       else if (equals(data['api:code'], 101)) {
        ensureNotNull(document.getElementById('howdy')).innerHTML = 'Sala inv\xE1lida!';
      }
       else if (equals(data['api:code'], 0)) {
        println('Success!');
        var type = typeof (tmp$ = data['api:type']) === 'string' ? tmp$ : throwCCE();
        var playfield = Kotlin.isArray(tmp$_0 = data['playfield']) ? tmp$_0 : throwCCE();
        var tmp$_14;
        tmp$_14 = withIndex(playfield).iterator();
        while (tmp$_14.hasNext()) {
          var element = tmp$_14.next();
          var idx = element.component1()
          , value = element.component2();
          var tmp$_15, tmp$_16;
          var cell = Kotlin.isType(tmp$_15 = document.getElementById('cell-' + idx), HTMLElement) ? tmp$_15 : throwCCE();
          switch (value) {
            case 0:
              tmp$_16 = '---';
              break;
            case 1:
              tmp$_16 = "<img src='https://cdn.discordapp.com/emojis/412574915879763982.png?v=1'>";
              break;
            case 2:
              tmp$_16 = "<img src='https://cdn.discordapp.com/emojis/412577570190655489.png?v=1'>";
              break;
            default:tmp$_16 = 'Deu ruim!';
              break;
          }
          cell.innerHTML = tmp$_16;
        }
        if (equals(type, 'ROOM_OVERVIEW')) {
          println('We received a room overview!');
          var player1 = data['player1'];
          var player2 = data['player2'];
          var player1Information = ensureNotNull(document.getElementById('player1Information'));
          var player2Information = ensureNotNull(document.getElementById('player2Information'));
          if (player1 != null && !player1Information.classList.contains('animated')) {
            println('Player 1 is ' + toString(player1));
            var player1Metadata = Kotlin.isType(tmp$_1 = data['player1Metadata'], Object) ? tmp$_1 : throwCCE();
            ensureNotNull(document.getElementById('player1Id')).innerHTML = typeof (tmp$_2 = player1) === 'string' ? tmp$_2 : throwCCE();
            ensureNotNull(document.getElementById('player1Name')).innerHTML = toString(player1Metadata['username']) + '#' + toString(player1Metadata['discriminator']);
            ensureNotNull(document.getElementById('player1Avatar')).setAttribute('src', typeof (tmp$_3 = player1Metadata['avatarUrl']) === 'string' ? tmp$_3 : throwCCE());
            ensureNotNull(document.getElementById('player1Information')).style.visibility = null;
            addClass(ensureNotNull(document.getElementById('player1Information')), ['animated', 'bounceIn']);
            closure$notify.play();
          }
          if (player2 != null && !player2Information.classList.contains('animated')) {
            println('Player 2 is ' + toString(player2));
            var player2Metadata = Kotlin.isType(tmp$_4 = data['player2Metadata'], Object) ? tmp$_4 : throwCCE();
            ensureNotNull(document.getElementById('player2Id')).innerHTML = typeof (tmp$_5 = player2) === 'string' ? tmp$_5 : throwCCE();
            ensureNotNull(document.getElementById('player2Name')).innerHTML = toString(player2Metadata['username']) + '#' + toString(player2Metadata['discriminator']);
            ensureNotNull(document.getElementById('player2Avatar')).setAttribute('src', typeof (tmp$_6 = player2Metadata['avatarUrl']) === 'string' ? tmp$_6 : throwCCE());
            ensureNotNull(document.getElementById('player2Information')).style.visibility = null;
            addClass(ensureNotNull(document.getElementById('player2Information')), ['animated', 'bounceIn']);
            closure$notify.play();
          }
          var gameStatus = typeof (tmp$_7 = data['gameStatus']) === 'string' ? tmp$_7 : throwCCE();
          if (equals(gameStatus, 'CONTINUE')) {
            if (!this$TicTacToe.started) {
              for (var i = 0; i <= 8; i++) {
                println('Configurando cell ' + i + '...');
                var cell_0 = Kotlin.isType(tmp$_8 = document.getElementById('cell-' + i), HTMLElement) ? tmp$_8 : throwCCE();
                cell_0.addEventListener('click', TicTacToe$start$lambda$lambda$lambda(cell_0, i, this$TicTacToe, closure$pop));
              }
            }
            this$TicTacToe.started = true;
            ensureNotNull(document.getElementById('howdy')).innerHTML = 'jooj iniciou!';
            var myClientId = typeof (tmp$_9 = data['yourClientId']) === 'string' ? tmp$_9 : throwCCE();
            var currentPlayer = typeof (tmp$_10 = data['currentPlayer']) === 'string' ? tmp$_10 : throwCCE();
            if (equals(myClientId, currentPlayer)) {
              ensureNotNull(document.getElementById('howdy')).innerHTML = 'Agora \xE9 a sua vez! Clique na tabelinha abaixo...';
              if (equals(currentPlayer, player1)) {
                closure$followMouse.setAttribute('src', 'https://cdn.discordapp.com/emojis/412574915879763982.png?v=1');
              }
               else {
                closure$followMouse.setAttribute('src', 'https://cdn.discordapp.com/emojis/412577570190655489.png?v=1');
              }
            }
             else {
              ensureNotNull(document.getElementById('howdy')).innerHTML = 'Agora \xE9 a vez do seu amiguinho topzeira';
              closure$followMouse.removeAttribute('src');
            }
          }
          if (equals(gameStatus, 'CURRENT_PLAYER_WON')) {
            var winner = typeof (tmp$_11 = data['winner']) === 'string' ? tmp$_11 : throwCCE();
            var myClientId_0 = typeof (tmp$_12 = data['yourClientId']) === 'string' ? tmp$_12 : throwCCE();
            if (equals(winner, player1)) {
              tmp$_13 = 1;
            }
             else {
              tmp$_13 = 2;
            }
            var option = tmp$_13;
            var from;
            var to = {v: null};
            if (playfield[0] === option && playfield[1] === option && playfield[2] === option) {
              from = ensureNotNull(document.getElementById('cell-0'));
              to.v = ensureNotNull(document.getElementById('cell-2'));
            }
            if (playfield[3] === option && playfield[4] === option && playfield[5] === option) {
              from = ensureNotNull(document.getElementById('cell-3'));
              to.v = ensureNotNull(document.getElementById('cell-5'));
            }
            if (playfield[6] === option && playfield[7] === option && playfield[8] === option) {
              from = ensureNotNull(document.getElementById('cell-6'));
              to.v = ensureNotNull(document.getElementById('cell-8'));
            }
            if (playfield[0] === option && playfield[3] === option && playfield[6] === option) {
              from = ensureNotNull(document.getElementById('cell-0'));
              to.v = ensureNotNull(document.getElementById('cell-6'));
            }
            if (playfield[1] === option && playfield[4] === option && playfield[7] === option) {
              from = ensureNotNull(document.getElementById('cell-1'));
              to.v = ensureNotNull(document.getElementById('cell-7'));
            }
            if (playfield[2] === option && playfield[5] === option && playfield[8] === option) {
              from = ensureNotNull(document.getElementById('cell-2'));
              to.v = ensureNotNull(document.getElementById('cell-8'));
            }
            if (playfield[0] === option && playfield[4] === option && playfield[8] === option) {
              from = ensureNotNull(document.getElementById('cell-0'));
              to.v = ensureNotNull(document.getElementById('cell-8'));
            }
            if (playfield[2] === option && playfield[4] === option && playfield[6] === option) {
              from = ensureNotNull(document.getElementById('cell-2'));
              to.v = ensureNotNull(document.getElementById('cell-6'));
            }
            this$TicTacToe.moveHandTo_omqoy0$(from == null ? throwUPAE('from') : from, 2000, TicTacToe$start$lambda$lambda$lambda_0(to, this$TicTacToe, closure$ko));
            if (equals(winner, myClientId_0)) {
              closure$ts1Promotion.play();
              ensureNotNull(document.getElementById('howdy')).innerHTML = 'Voc\xEA venceu!';
            }
             else {
              ensureNotNull(document.getElementById('howdy')).innerHTML = 'Voc\xEA perdeu...';
            }
          }
          if (equals(gameStatus, 'DRAW')) {
            closure$ts1Promotion.play();
            ensureNotNull(document.getElementById('howdy')).innerHTML = 'Empate...';
          }
          println('Prontinho!');
        }
      }
      return false;
    };
  }
  function TicTacToe$start$lambda_0(this$TicTacToe, closure$notify, closure$pop, closure$followMouse, closure$ko, closure$ts1Promotion) {
    return function (it) {
      println('Starting TicTacToe...');
      println('Connecting via WebSockets...');
      this$TicTacToe.connection = new WebSocket('wss://canary.loritta.website/api/v1/lorisocket');
      println(document.URL);
      var url = new URL(document.URL);
      var searchParams = url.searchParams;
      var roomId = searchParams.get('r');
      if (roomId == null) {
        ensureNotNull(document.getElementById('howdy')).innerHTML = 'Mas... cad\xEA o ?r=IdDaSala?';
        return;
      }
      this$TicTacToe.connection.onopen = TicTacToe$start$lambda$lambda(roomId, this$TicTacToe);
      this$TicTacToe.connection.onerror = TicTacToe$start$lambda$lambda_0;
      this$TicTacToe.connection.onmessage = TicTacToe$start$lambda$lambda_1(closure$notify, this$TicTacToe, closure$pop, closure$followMouse, closure$ko, closure$ts1Promotion);
      return Unit;
    };
  }
  TicTacToe.prototype.start = function () {
    var connectButton = ensureNotNull(document.getElementById('connect-button'));
    var ts1Promotion = new Audio(anonymous.loriUrl + 'assets/snd/ts1_promotion.mp3');
    var pop = new Audio(anonymous.loriUrl + 'assets/snd/pop.mp3');
    var notify = new Audio(anonymous.loriUrl + 'assets/snd/notify.mp3');
    var ko = new Audio(anonymous.loriUrl + 'assets/snd/ko.mp3');
    var followMouse = ensureNotNull(document.getElementById('followMouse'));
    window.addEventListener('mousemove', TicTacToe$start$lambda(followMouse));
    connectButton.addEventListener('click', TicTacToe$start$lambda_0(this, notify, pop, followMouse, ko, ts1Promotion));
  };
  function TicTacToe$moveHandTo$lambda() {
    return Unit;
  }
  function TicTacToe$moveHandTo$ObjectLiteral() {
  }
  TicTacToe$moveHandTo$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  TicTacToe.prototype.moveHandTo_omqoy0$ = function (element, duration, complete) {
    if (duration === void 0)
      duration = 2000;
    if (complete === void 0)
      complete = TicTacToe$moveHandTo$lambda;
    var loriHand = ensureNotNull(document.getElementById('loriHand'));
    var top = element.getBoundingClientRect().top + ensureNotNull(document.documentElement).scrollTop;
    var left = element.getBoundingClientRect().left + ensureNotNull(document.documentElement).scrollLeft;
    println('element: ' + top);
    println('element: ' + left);
    var dyn = new TicTacToe$moveHandTo$ObjectLiteral();
    dyn.left = (numberToInt(left) + 80 | 0).toString() + 'px';
    dyn.top = (numberToInt(top) - 40 | 0).toString() + 'px';
    jq('#loriHand').animate(dyn, duration, complete);
  };
  TicTacToe.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'TicTacToe',
    interfaces: []
  };
  var TicTacToe_instance = null;
  function TicTacToe_getInstance() {
    if (TicTacToe_instance === null) {
      new TicTacToe();
    }
    return TicTacToe_instance;
  }
  Object.defineProperty(_, 'TicTacToe', {
    get: TicTacToe_getInstance
  });
  Kotlin.defineModule('LoriTicTacToe', _);
  return _;
}(typeof LoriTicTacToe === 'undefined' ? {} : LoriTicTacToe, kotlin, SpicyMorenitta);
