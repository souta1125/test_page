$(function(){
  // 読み込み時
  $('section').addClass('is_active');
  for (var i = 0; i < $('.tt_content').length; i++) {
    var tt_tag = $('.tt_content').eq(i).text().replace(/[^0-9]/g, '');
    $('.tt_content').eq(i).attr('data-tt', tt_tag);
  };

  // js_clock
  function js_clock(){
    var clock = new Date();
    var hour = clock.getHours();
    var min = ('0' + clock.getMinutes()).slice(-2);
    var sec = ('0' + clock.getSeconds()).slice(-2);
    var time = (hour + min + sec);
    $('#js_clock').text(hour + ':' + min + ':' + sec);

    // 時間が過ぎたプランを処理
    for (var i = 0; i < $('.tt_content').length; i++) {
      var tt_tag = ($('.tt_content').eq(i).text().replace(/[^0-9]/g, '') + '00');
      if(tt_tag < time){
        $('.tt_content').eq(i).css('color', '#BCCCDB');
      };
    };
  };
  setInterval(js_clock, 1000);
  // section_player
  $('section').click(function(){
    $(this).find('.section_player').toggleClass('is_active');
  })

  // ボタン系
  // selector
  $('.main_selector_item').click(function(){
    $('.main_selector_item').removeClass('is_active');
    $('.main_item').removeClass('is_active')
    $(this).addClass('is_active');
  });
  // tdl
  $('.main_selector_item_tdl').click(function(){
    $('.main_item_tdl').addClass('is_active');
  });
  // tds
  $('.main_selector_item_tds').click(function(){
    $('.main_item_tds').addClass('is_active');
  });

  // nav
  $('.nav_item').click(function(){
    $('.nav_item').removeClass('is_active');
    $(this).addClass('is_active');
  });
})
