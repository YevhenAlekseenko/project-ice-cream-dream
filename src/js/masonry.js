var $grid = $('.grid').masonry({
  columnWidth: 80,
});
// change size of item by toggling gigante class
$grid.on('click', '.grid-item', function () {
  $(this).toggleClass('gigante');
  // trigger layout after item size changes
  $grid.masonry('layout');
});
