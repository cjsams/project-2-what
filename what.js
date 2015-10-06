var textarea = document.getElementById('what');
var form = document.getElementsByTagName('form')[0];
textarea.addEventListener('change', function() {
    form.submit();
}, false);
var what = location.search;
what = what.replace('?what=', '');
what = what.replace(/\+/g, ' ');
what = decodeURIComponent(what);
textarea.value = what;
if((textarea.value) == ('up up down down left right left right b a start' ) || (textarea.value) == ("^^vv<><>ba") || (textarea.value) == ("^^vv<><>bastart")|| (textarea.value) == ("up up down down left right left right b a")){
  document.write('<img src="http://i.imgur.com/nUjAyVw.jpg" alt="Konami code" height="385" width="616">');
  document.write('<h2 id="link"><a href="https://en.wikipedia.org/wiki/List_of_Konami_code_games"> List of Compatible Games and Other Things That Use The Code </a></h2>');
  document.getElementById("what").style.color = "blue";

  document.getElementById("page").style.color = "Red";
  document.getElementById("page").style.fontSize = "40px";
  document.getElementById("header").innerHTML = 'Correct!';//http://www.w3schools.com/js/js_htmldom_html.asp
  document.getElementById("link").style.color = "yellow";
  document.getElementById("what").style.height = "30px";


}
