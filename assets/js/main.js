function currentUrl() {
  if ((location.pathname) !== ""){
    $('body a[href="' + location.pathname + '"]').click(function (e) {
         e.preventDefault();
    });
    $('.nav-item a[href="' + location.pathname + '"]').click(function (e) {
         e.preventDefault();
    });
    $('.brand-icon a[href="' + location.pathname + '"]').click(function (e) {
         e.preventDefault();
    });
    $('.nav-item a').removeClass('active');
    $('.nav-item a[href="' + location.pathname + '"]').addClass('active');
  }
}
$('document').ready(function(){
  currentUrl();
});
