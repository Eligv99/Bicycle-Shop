//Functions for nav bar
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
// Ajax callback fucntion to extract data from the Json file
$(document).ready(function(){

    $.ajax({ 
        url: 'bikerentals.json',
        dataType: 'json',
        type: 'get', 
        cache: false,
        success: function(data){
            $(data.products).each(function(index, value){
                console.log(data.products)
            })
        }
    });

});
