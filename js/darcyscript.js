
$(document).ready(function() {

// hide the divs first

function hideAll() {
    $('#littleLove').hide();
    $('#nothingsWrong').hide();
    $('#theWire').hide();
    $('#wantBack').hide();
}
    hideAll();


    $('.albumArt').click(function() {

      hideAll();


    switch ($(this).attr("id")) {
          case "album1":
            $('#littleLove').slideToggle();
            break;
          case "album2":
            $('#nothingsWrong').slideToggle();
            break;
          case "album3":
            $('#theWire').slideToggle();
            break;
          case "album4":
            $('#wantBack').slideToggle();
            break;
        }



      $("audio").each(function() {
          this.pause();
          this.currentTime = 0;
});
    });


});
