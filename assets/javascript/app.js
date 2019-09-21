//variables for the divs where the data will be inserted
var product = $(".products");
var htmlpro = "";
var productsList = [];

//Functions for nav bar
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

$(".btn").on("click", function(e, product){
    alert($(this).attr('data-name'))
})

// Ajax callback fucntion to extract data from the Json file
$.ajax({
  url: "bikerentals.json",
  dataType: "json",
  type: "get",
  cache: false,
  success: function(data) {
    for (i = 0; i < data.products.length; i++) {
      htmlpro +=
        "<div class='products'><div class='media'> <img src='" +
        data.products[i].image +
        "' class='align-self-end mr-3' alt='...'> <div class='ul-list'><ul><li><h4>" +
        data.products[i].name +
        "</h4></li><li>" +
        data.products[i].price +
        "</li><li>Product type: " +
        data.products[i].product_type +
        "</li><li><button class='btn btn-primary sc-add-to-cart' data-name='"+  data.products[i].name  +"' data-price='"+ data.products[i].price +"' type='submit'>ADD</button></li></ul></div></div></div>";
    }

    //Apppend Jquery
    product.append(htmlpro);
  }
});

