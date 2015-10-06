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
if((textarea.value) == ('up up down down left right left right b a start')){
  document.write('<img src="http://i.imgur.com/nUjAyVw.jpg" alt="Konami code" height="385" width="616">');
  document.write('<h2>https://en.wikipedia.org/wiki/List_of_Konami_code_games</h2>');
  document.write('<h3><a href="https://en.wikipedia.org/wiki/List_of_Konami_code_games"> Compatible Games </a></h3>');
}
