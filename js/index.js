
window.onload=function(){
    var parent=document.getElementById("ms");
    setInterval(function(){
        var secs= parent.children[5];
         var se=parseInt(secs.innerHTML)
            se--;
        if(se<0){
            se=59;
            var min=parent.children[3];
            var mins=parseInt(min.innerHTML);
            mins--;
        }
         var se=se<10?"0"+se:se;
             secs.innerHTML=se;
            if(mins<0){
                mins=59;
                var hou= parent.children[1];
                var hous=parseInt(hou.innerHTML);
                hous--;
            }
        var mins=mins<10?"0"+mins:mins;
             min.innerHTML=mins;
        var hous=hous<10?"0"+ hous:hous;
            hou.innerHTML=hous;
    },1000);
}