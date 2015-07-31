({
  name: 'Whats my name?',
  isfalse: false,
  istrue: true,
  bold: function (args) {
    return '<b>' + args.join(' ') + '</b>';
  },
  or: function () {
    return function (text, render, args) {
      var i = 0, arg;
      for (i = 0; i < args.length; i++) {
        arg = args[i];
        if (arg) {
          return render(text);
        }
      }
      return '';
    };
  }
});
