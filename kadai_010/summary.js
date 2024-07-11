$(function() {
  // ボタンがクリックされた場合
  $('#change-color').on('click', function(){
    $('#target').css('color','red');
  });

  //文字内容の変化
  $('#change-text').on('click', function(){
    $('#target').text('クリックされました！');
  });

  //フェードアウト
  $('#fade-out').on('click', function(){
    $('#target').fadeOut();
  });

  //フェードイン
  $('#fade-in').on('click', function(){
    $('#target').fadeIn();
  });
});