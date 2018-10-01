'use strict';

$(function ($) {
    var QQQ = ['+', '-', '*', '/'];
    console.log('asd');
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < QQQ.length; j++) {
            console.log(eval(i + QQQ[j] + i));
        }
    }
});$;