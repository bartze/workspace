(() => {
  var e = {
      42: (e) => {
        e.exports = {
          add: function (e, t) {
            return e + t;
          },
          subtract: function (e, t) {
            return e - t;
          },
        };
      },
    },
    t = {};
  const { add: o, subtract: r } = (function o(r) {
    var n = t[r];
    if (void 0 !== n) return n.exports;
    var s = (t[r] = { exports: {} });
    return e[r](s, s.exports, o), s.exports;
  })(42);
  try {
    window && alert('Open your development console and check the messages!');
  } catch (e) {
    console.log('No browser instance detected, alert message is not necessary');
  }
  console.log('Adding 5 and 3:', o(5, 3)),
    console.log('Subtracting 8 from 10:', r(10, 8));
})();
