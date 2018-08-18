describe("eventProxy", function() {
  var Event = require('../../dist/pattern/eventProxy');
  it("should be able to listen event", function() {
    var a = 1;
    function addOne() {
      return ++a;
    }
    Event.default.on('add', addOne);
    Event.default.emit('add');
    Event.default.emit('add');
    expect(a).toEqual(3);
  });
  it("should be able to listen event once", function() {
    var a = 1;
    function addOne() {
      return ++a;
    }
    Event.default.one('add', addOne);
    Event.default.emit('add');
    Event.default.emit('add');
    expect(a).toEqual(2);
  });
  it("should be able to cancel listen event", function() {
    var a = 1;
    function addOne() {
      return ++a;
    }
    Event.default.on('add', addOne);
    Event.default.emit('add');
    Event.default.off('add');
    Event.default.emit('add');
    expect(a).toEqual(2);
  });
  it("should be able to listen event", function() {
    var a = 1;
    function addOne(x) {
      a = a + x;
    }
    Event.default.on('add', addOne);
    Event.default.emit('add', a);
    expect(a).toEqual(2);
  });
});
