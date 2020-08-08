$('#fullpage').fullpage({
    anchors:['Page1', 'Page2', 'Page3', 'Page4', 'Page5', 'Page6', 'Page7'],
    menu: '#mainMenu',
    controlArrows: false,
    slidesNavigation: true,
    lockAnchors: false,
    slidesNavPosition: 'bottom',
	 navigation: true,
	 navigationTooltips: ['Главная', 'TX', 'Модули', 'Бонусы', 'Купить', 'Отзывы', 'Гарантия'],
	 showActiveTooltip: true,
	 continuousVertical: true,
	 responsiveWidth: 700
});

(function() {
  var removeSuccess;

  removeSuccess = function() {
    return $('.button').removeClass('success');
  };

  $(document).ready(function() {
    return $('.button').click(function() {
      $(this).addClass('success');
      return setTimeout(removeSuccess, 3000);
    });
  });

}).call(this);