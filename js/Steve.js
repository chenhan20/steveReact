
$(function($) {
    const QQQ = ['+','-','*','/'];
    console.log('asd');
    for(let i=0;i<10;i++){
        for(let j=0;j<QQQ.length;j++){
            console.log(eval(i +QQQ[j]+ i));
        }
    }
});($)
