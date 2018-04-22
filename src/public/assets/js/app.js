//frontend app

(function() {
  $(document).ready(function() {
    var base = $('base').text();
    //alert(base);

    $('.moveButton').click(function() {
        console.log(this.data);
        var movimiento=$(this).data('move');
        console.log("move", $(this).data);
        $.ajax({
          type: 'post',
          dataType: 'json',
          url: base + '/action',
          data: { move: movimiento },
        })
        .done(function(data) {
          console.log("success");
          console.log(data);
          alert(data.result);
        })
        .fail(function() {
          console.log("error");
        })
        .always(function() {
          console.log("complete");
        });
    });


    var j1 = nipplejs.create({
        zone: document.getElementById('j1'),
        color: 'white',
        size: 200
    });

    var j2 = nipplejs.create({
        zone: document.getElementById('j2'),
        color: 'red',
        size: 200
    });


    j1.on("move", function(event, data){
      var rads = data.angle.radian;
      $.ajax({
        type: 'post',
        dataType: 'json',
        url: base + '/action',
        data: {
          rads: rads,
          pos : 'vertical'
        },
      })
      .catch(function(error) {
        console.log(error);
      });
    });

    j2.on("move", function(event, data){
      var rads = data.angle.radian;
      $.ajax({
        type: 'post',
        dataType: 'json',
        url: base + '/action',
        data: {
          rads: rads,
          pos : 'horizontal'
        },
      })
      .catch(function(error) {
        console.log(error);
      });
    });
  });
})();

//1. If the document is ready we show and alert
//2. We see if .moveButton (Objets de tell dataType) receive and action (click)
// that changes the url (calling again routes=> execute actionCtrl.postAction)
