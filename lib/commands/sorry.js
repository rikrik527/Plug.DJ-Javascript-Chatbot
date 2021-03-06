// Generated by CoffeeScript 1.3.3
var saySorryCommand,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

saySorryCommand = (function(_super) {

  __extends(saySorryCommand, _super);

  function saySorryCommand() {
    return saySorryCommand.__super__.constructor.apply(this, arguments);
  }

  saySorryCommand.prototype.init = function() {
    this.command = '/appologize';
    this.parseType = 'exact';
    return this.rankPrivelege = 'user';
  };

  saySorryCommand.prototype.functionality = function() {
    var user;
    user = this.msgData.from.toLowerCase();
    if (user === 'backus' || user === 'klaypex') {
      return API.sendChat("IM SORRY KLAYPEX! :(");
    }
  };

  return saySorryCommand;

})(Command);
