//frontend app

(function() {
  $(document).ready(function() {
    var base = $('base').text();
    //alert(base);

    $('.moveButton').click(function() {
        console.log(this.data);
        var movimiento=$(this).data('move');
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
        mode: 'static',
        position: {left:"300px", top:"50%"},
        size: 200
    });

    var j2 = nipplejs.create({
        zone: document.getElementById('j2'),
        color: 'red',
        mode: 'static',
        position: {left:"100px", top:"50%"},
        size: 200
    });

    j1.on("move", function(event, data){
      //console.log(data.direction.x);
      console.log(data.angle.radian);
      var auxiliar=$(this).data.angle.radian('move');
      $.ajax({
        type: 'post',
        dataType: 'json',
        url: base + '/action',
        data: { move: auxiliar },
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

    j2.on("move", function(event, data){
      console.log(data.direction.y);

    });


    // if (j1.data.direction.x!=0 & j2.data.direction.y!=0)
    // cambio la ruta a action2 para que routes=>actionCtrl.action2 que le entra como parametros x, y
    /*
    var auxiliar=$(this).data.direction.y;
    $.ajax({
      type: 'post',
      dataType: 'json',
      url: base + '/action2',
      data: { move: auxiliar },
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
    */

  });
})();

//1. If the document is ready we show and alert
//2. We see if .moveButton (Objets de tell dataType) receive and action (click)
// that changes the url (calling again routes=> execute actionCtrl.postAction)
