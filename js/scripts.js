
//back-end logic//
function Bank (name,initial_deposit,balance) {
  this.name=name;
  this.initial_deposit=initial_deposit;
  this.balance=balance;
}
Bank.balance = function(){
  this.initial_deposit + deposit;
  return this.initial_deposit;
}
















//front-end logic//
$(document).ready(function(){
    $("form#bank").submit(function(event){
    event.preventDefault()
    var initial_deposit = parseInt($("input#deposit").val());
    var deposit = parseInt($("input#deposit").val());
    var name=$('#name').val();


    client= new Bank(name,initial_deposit);
    console.log(client.initial_deposit);
    });
});
