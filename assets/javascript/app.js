//variables for the divs where the data will be inserted
var product = $(".products");
var htmlpro = "";
var products_l = [];

// Ajax callback fucntion to extract data from the Json file
$(document).ready(function() {
  //Functions for nav bar
  function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function updateHTML() {
    $(".pro-check").empty();

    for (var i = 0; i < products_l.length; i++) {
      var a = $("<button>");

      $(".pro-check").prepend(a);
    }
  }

  updateHTML();

  $(".btn").on("click", function(event, input) {
    var input = $();

    event.preventDefault();
  });

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
          "'class='align-self-end mr-3' alt='...'> <div class='ul-list'><ul><li><h4>" +
          data.products[i].name +
          "</h4></li><li>" +
          data.products[i].price +
          "</li><li>Product type: " +
          data.products[i].product_type +
          "</li><li><button type='button' class='btn btn-outline-secondary'>Book</button></li></ul></div></div></div>";
      }

      //Apppend Jquery
      product.append(htmlpro);
    }
  });
});
