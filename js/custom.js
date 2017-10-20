jQuery(function($){
  
  //Esto es temporal:
  var mHeight = $('main').height();
  $('.perfect-container').perfectScrollbar();
  //: Hasta aquí es temporal
  
  //aquí hago que cuando se le dé click a la tabla se seleccione ese radio y le ponga la clase a row para resaltar el item seleccionado
  $('tbody tr').click(function(){
    $(this).siblings()
    .removeClass('is-selected')
    .find('input').prop('checked', false);
    $(this)
    .addClass('is-selected')
    .find('input').prop('checked', true);
  });
  
  //Acordeones
  $('dt').click(function(){
    $(this).next().toggleClass('is-open');
    $(this).find('i').toggleClass('mdi-chevron-down mdi-chevron-up');
  });
  
  //
  $('input[type=checkbox]').click(function(){
    $(this)
    .parents('li').toggleClass('is-selected')
  });
  w3.includeHTML();
  
});