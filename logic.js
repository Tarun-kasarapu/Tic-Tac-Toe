
var turn="X";
function changeturn(turn){

    return (turn==="X")?"O":"X";
    /// console.log(turn);
}

var isgameover=false;
var box=Array.from(document.getElementsByClassName("box"));
var button=Array.from(document.querySelectorAll("[data-val]"));



/*function change(text){
    var id=text.getAttribute('id');
    var ele=document.getElementById(id);
    
    if(ele.innerHTML==="" ){
        
        ele.innerHTML=turn;
    }
}
function undo(text,no){
    var id=text.getAttribute('id');
    var ele=document.getElementById(id);
    if(!arr[no]){
        console.log(arr[no]);
        ele.innerHTML="";
    }
}*/
function checkwin(){
    var check=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for( let i=0;i<(check.length);i++){
        if((box[check[i][0]].innerHTML!=="") && (box[check[i][0]].innerHTML===box[check[i][1]].innerHTML) && (box[check[i][1]].innerHTML===box[check[i][2]].innerHTML)){
            isgameover=true;
        }
        
    }
}
var arr=[false,false,false,false,false,false,false,false,false];
var count=0;
box.forEach(function (element,index){
    element.addEventListener("click",() => {
        if(element.innerHTML==='' && (!isgameover)){
            //console.log(turn);
            count++;
            element.innerHTML=turn;
            arr[index]=true;
            
            checkwin();
            var flag=false;
            if(count===9 && !isgameover){
                flag=true;
                isgameover=true;
            }
            if(isgameover){
                var ano=document.getElementById("start");
                ano.innerHTML="start again";
                var win=document.getElementById("win");
                if(count===9 && flag){
                    win.innerHTML="Draw";
                }else{
                    win.innerHTML=turn + "   won";
                }
                win.style.opacity=1;
                
            }
            turn=changeturn(turn);
        }
    })
})
var start=document.getElementById("start");
start.addEventListener("click",()=>{
    for(let i=0;i<(box.length);i++){
        box[i].innerHTML="";
    }
    var ano=document.getElementById("start");
    ano.innerHTML="Reset";
    var win=document.getElementById("win");
    win.style.opacity=0;
    turn="X";
    count=0;
    isgameover=false;

})
