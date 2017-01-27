$(document).on(
  'shiny:connected',
  function() {
    window.api.on(
      'change',
      function(chg) {
        Shiny.onInputChange('geojsonio_change', chg.obj.map)
      }
    )
    $('a')
      .filter(function(index) {
        return $(this).text() === " Save to R";
      })
      .on('click', function() {
        Shiny.onInputChange('geojsonio_quit', true)
      });
  }
)


