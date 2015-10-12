$(function(){
    $('#img-input').change(function(changeEvent){
      var ctx = $('#the-canvas')[0].getContext('2d');
      var reader = new FileReader;
      reader.onload = function(onloadEvent) {
        var img = new Image;
        img.src = onloadEvent.target.result;
        img.onload = function() {
          ctx.drawImage(img, 20,20);
          console.log('The image has been drawn.');
        };
      };
      reader.readAsDataURL(changeEvent.target.files[0]);
    });
});