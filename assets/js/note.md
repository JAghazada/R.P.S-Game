Ilk once oyunda deyiskenler olacaq,true false deye, playeroneexist ve playertwo exist deye
butona tiklananda checkplayer deyeri artacaq 1 olacaq,database e push edilecek ,playeroneexist funksiyasyi cagiralacaq,
en basda da bir checkit funksiyasi olacaq eger fiebasedeki check deyiskenin deyeri 1-dirse artiq butona basilanda playertwoexist funksiyasi cagiralacaq.Sonra oyun baslayacaq.Eger cehck variablesinin deyeri 1 dirse o zaman p1 terefdeki secimlerden 1 denesine click edilende database  otureleck.eger p1 ve p2 (player1 ve player2) her ikisi secim etdilerse,secimler gosterilecek, qarsilasdiriblib score da yazilacaq!Sonra oyundaki deyerler silinib oyun yeniden baslayacaq.
Mesaj qisminde ise onemli olan teref deyerlerin alinib firebase yazilib daha sonra ise p1 icersinde append edilecek.Eger player 1 ve player 2 deyerleri firebaseden cekilerek window.onload da yoxlanacaq,eger deyerler her ikisi truedursa o zaman kimse oyuna  qarisa bilmez!
Bu oyunun cox funksiyali olaraq yazilmagi islerimizi xeyli rahatlasdiracaq!

Bu saytin dizayni niye beledir? Esas movzu js oldugu ucun sadece gosteris ucun rengli divler istifade edilib !


Bugs:
cox qeribe sekilde styledaki ```css .left-side::before{ width:calc(100% +6px);}``` islemir sebebi arastirilacaq!
```js
 alert('Divide and conquer!')
 ```