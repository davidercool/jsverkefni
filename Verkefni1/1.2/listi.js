var shoppingList = ['Brauð', 'Mjólk', 'Epli', 'Banani', '60 OLED 3D ULTRAHDTV frá'];
var i, len, elem = "";
for (i = 0, len = shoppingList.length; i < len; i++) { 
    elem += shoppingList[i] + "<br>";
}
document.getElementById("food").innerHTML = elem;