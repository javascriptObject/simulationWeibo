var ipt = document.getElementById("ipt");
var txt = document.getElementById('txt');
var textarea = document.getElementById("text");
ipt.onclick = function(){
    var textValue = textarea.value.LTrim();
    textarea.value="";
    if(textValue.length>0 ){
        var divs = document.createElement("div");
        var imgs = document.createElement("img");
        var ps = document.createElement("p");
        var inputs = document.createElement("input");
        divs.setAttribute("class","creatediv");
        imgs.setAttribute('class',"createimg");
        ps.setAttribute("class","createdivs");
        inputs.setAttribute("class","createinput");
        imgs.src="pic/1.jpg";
        inputs.type="button";
        inputs.value="删除";
        ps.innerHTML=textValue;
        divs.appendChild(imgs);
        divs.appendChild(ps);
        divs.appendChild(inputs);
        if(txt.children.length==0){
            txt.appendChild(divs);

        }else{
            txt.insertBefore(divs,get_firstChild(txt))
        }
        inputs.onclick = function(){
            this.parentNode.parentNode.removeChild(this.parentNode)
        }
    }
}