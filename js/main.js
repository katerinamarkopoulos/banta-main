// Kattcaféet Morrhår – interaktion

$(document).ready(function () {
  // Visa dagens öppettider
  moment.locale('sv');
  var dag = moment().format('dddd');
  var helg = moment().day() === 0 || moment().day() === 6;
  $('#idag').text('Idag är det ' + dag + ' – vi har öppet ' + (helg ? '11–17' : '10–18'));

  // Blanda ordningen på katterna
  var katter = $('#kattlista .katt').toArray();
  $('#kattlista').append(_.shuffle(katter));

  // Flikar i menyn
  $('.tab').on('click', function () {
    $('.tab').removeClass('active');
    $(this).addClass('active');
    $('.meny-panel').hide();
    $('#' + $(this).data('tab')).fadeIn(200);
  });
});

function skicka() {
  $('.tack').fadeIn();
}
