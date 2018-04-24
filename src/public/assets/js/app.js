//frontend app

(function() {
  $(document).ready(function() {
    var base = $('base').text();

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

    var aux = {
      dato1: 'cadena',
      dato2: 'cadena'
    }


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
        error: function (xhr, ajaxOptions, thrownError) {
          console.error();
        },
        timeout: 500,
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
        error: function (xhr, ajaxOptions, thrownError) {
          console.error();
        },
        timeout: 500,
      });
    });
  });
})();

//1. If the document is ready we show and alert
//2. We see if .moveButton (Objets de tell dataType) receive and action (click)
// that changes the url (calling again routes=> execute actionCtrl.postAction)
