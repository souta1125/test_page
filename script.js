$(function(){
  $(window).load(function(){
    $('.nav_control_item').css('visibility','visible');
  });
  $('section').addClass('is_active');
  $('.bgm').find('audio').prop('loop', true);
  for (var i = 0; i < $('.tt_content').length; i++) {
    var tt_tag = $('.tt_content').eq(i).text().replace(/[^0-9]/g, '');
    $('.tt_content').eq(i).attr('data-tt', tt_tag);
  };

  // clock
  function clock(){
    var clock = new Date();
    var hour = clock.getHours();
    var min = ('0' + clock.getMinutes()).slice(-2);
    var sec = ('0' + clock.getSeconds()).slice(-2);
    var time = (hour + min + sec);
    $('#js_clock').text(hour + ':' + min + ':' + sec);

    // 時間が過ぎたやつを処理
    for (var i = 0; i < $('.tt_content').length; i++) {
      var tt_tag = ($('.tt_content').eq(i).text().replace(/[^0-9]/g, '') + '00');
      if(tt_tag < time){
        $('.tt_content').eq(i).css('color', '#BCCCDB');
      }else{

      };
    };
  };

  setInterval(clock, 1000);

  // selector
  $('.main_selector_item').click(function(){
    $('.main_selector_item').removeClass('is_active');
    $('.main_content').removeClass('is_active');
    $(this).addClass('is_active');
  });
  $('.main_selector_item_tdl').click(function(){
    $('.main_content_tdl').addClass('is_active');
  });
  $('.main_selector_item_tds').click(function(){
    $('.main_content_tds').addClass('is_active');
  })

  // nav
  $('.nav_item').click(function(){
    $('.nav_item').removeClass('is_active');
    $('section').removeClass('is_active');
    $(this).addClass('is_active');
  });
  // 各ボタン
  $('.nav_item_home').click(function(){
    $('section').addClass('is_active');
  });
  $('.nav_item_bgm').click(function(){
    $('.bgm').addClass('is_active');
  });
  $('.nav_item_attraction').click(function(){
    $('.attraction').addClass('is_active');
  });
  $('.nav_item_restaurant').click(function(){
    $('restaurant').addClass('is_active');
  });
  $('.nav_item_shop').click(function(){
    $('shop').addClass('is_active');
  });

  // all_play
  $('#all_play').click(function(){
    for (var i = 0; i < $('.bgm').children('audio').length; i++) {
      $('.bgm').children('audio').eq(i).get(0).play();
    };
  });

  // all_pause
  $('#all_pause').click(function(){
    for (var i = 0; i < $('.bgm').children('audio').length; i++) {
      $('.bgm').children('audio').eq(i).get(0).pause();
    };
  });

  // all_mute
  $('#all_mute').click(function(){
    $('.bgm').find('audio').toggleClass('is_mute');
    for (var i = 0; i < $('.bgm').children('audio').length; i++) {
      $('.bgm').children('audio').eq(i).prop('muted', true);
    };
  });
})
