
$(function($) {
    const OP = ['+','-','*','/',''];
    for(let i=5000;i<6000;i++){
        let c = String(i);
        for(let j=0;j<OP.length;j++){
            for(let k=0;k<OP.length;k++){
                for(let l=0;l<OP.length;l++){
                    let val = c.charAt(3) + OP[j] + c.charAt(2) + OP[k] + c.charAt(1) + OP[l] + c.charAt(0);
                    if(val.length>4){
                        if(c == eval(val)){
                            $('#example').append(val + '=' +  eval(val) +'<br>');
                        }
                    }
                }
            }
        }
    }
});($)
