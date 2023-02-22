var numero=document.querySelector("#valor");
var list_unav=["+", "-", "/", "*"];

function numeros(n) { 
    if (n=='DEL') {
        let arry1=numero.textContent;
        let qnt=arry1.length-1;
        numero.textContent=arry1.slice(0,qnt);
    } else { 
        numero.textContent+=n;
    }
};
function validador_operador(){
    let valor_atual=numero.textContent.replace(/ /g, "");
    let ultimo_char=valor_atual.slice(-1);
    
    if (!list_unav.includes(ultimo_char)) {
        return true
    }  
};
function operador(op){
    if (validador_operador()) {
        numero.textContent+=op;
    }  else {
        window.alert("Operacao invalida!");
    }
};
function calcular(){
    let num_final=numero.textContent.split(" ");
    
    if (validador_operador()){
       for (let i=0;i<=num_final.length;i++){

        if (num_final[i]=="+"){
            numero.textContent=parseFloat(num_final[i-1])+parseFloat(num_final[i+1])
        }else if (num_final[i]=="-"){
            numero.textContent=parseFloat(num_final[i-1])-parseFloat(num_final[i+1])
        }else if (num_final[i]=="/"){
            numero.textContent=parseFloat(num_final[i-1])/parseFloat(num_final[i+1])
        }else if (num_final[i]=="*"){
            numero.textContent=parseFloat(num_final[i-1])*parseFloat(num_final[i+1])
        }

       }
    } else {
        window.alert("Operacao invalida!");
    }
};
function focus() {
    console.log("voce esta focado");
};