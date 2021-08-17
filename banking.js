// function double(num){
//     var result = num * 2;
//     return result;
// }

function getInputValue(inputId){
    var input_field = document.getElementById(inputId);
    var all_text = parseFloat(input_field.value);

    input_field.value = " ";
    
    return all_text;
}

function updateTotalfield(textid,all_text){
    var totalfield = document.getElementById(textid);
    var total_text = parseFloat (totalfield.innerText);
    
    totalfield.innerText = all_text + total_text;

    return total_text;

}
function getcurentbalance (){
    var balance_id = document.getElementById("balance-money");
    var balance_text = parseFloat(balance_id.innerText);
    return balance_text;

}

function updatebalance(balance,isAdd){
    var balance_id = document.getElementById("balance-money");
    // var balance_text = parseFloat(balance_id.innerText);
    var balance_text = getcurentbalance();

    if(isAdd == true){
        balance_id.innerText = balance_text + balance;

    }

    else{
        balance_id.innerText = balance_text - balance;

    }


}







document.getElementById("depo-btn").addEventListener("click",function(){
    
    var depo_text = getInputValue("depo");
    
    if( depo_text > 0){
        
        updateTotalfield("depo-score",depo_text);
        updatebalance(depo_text,true)
        
    }
    
    
    // var depo_input = document.getElementById("depo");
    // var depo_text = parseFloat(depo_input.value);
    
    // var depo_total = document.getElementById("depo-score");
    // var depo_total_text = parseFloat (depo_total.innerText);
    
    // var depo_total_text = getinnertext();

    
    // var balance_id = document.getElementById("balance-money");
    // var balance_text = parseFloat(balance_id.innerText);

    // balance_id.innerText = balance_text + depo_text;



    
    
})

document.getElementById("withdraw-btn").addEventListener("click",function(){
    
    var withdraw_input_text = getInputValue("withdraw");
    var currentbalance = getcurentbalance();
    
    if (withdraw_input_text > 0 && withdraw_input_text < currentbalance){
        updateTotalfield("withdrow-score", withdraw_input_text);
        updatebalance(withdraw_input_text,false)
        
    
    }




    // var withdraw_input = document.getElementById("withdraw");
    // var withdraw_input_text = parseFloat (withdraw_input.value);

    // var withdraw_total = document.getElementById("withdrow-score");
    // var withdraw_total_text = parseFloat(withdraw_total.innerText);

    // withdraw_total.innerText = withdraw_input_text + withdraw_total_text;
    // var balance_with = document.getElementById("balance-money");
    // var balance_with_text = parseFloat(balance_with.innerText);

    // balance_with.innerText = balance_with_text - withdraw_input_text ;
    
    
    // withdraw_input.value = " ";

})