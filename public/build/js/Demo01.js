$(function ($) {
    var OP = ['+', '-', '*', '/', ''];
    for (var i = 5000; i < 6000; i++) {
        var c = String(i);
        for (var j = 0; j < OP.length; j++) {
            for (var k = 0; k < OP.length; k++) {
                for (var l = 0; l < OP.length; l++) {
                    var val = c.charAt(3) + OP[j] + c.charAt(2) + OP[k] + c.charAt(1) + OP[l] + c.charAt(0);
                    if (val.length > 4) {
                        if (c == eval(val)) {
                            $('#example').append(val + '=' + eval(val) + '<br>');
                        }
                    }
                }
            }
        }
    }
});$;