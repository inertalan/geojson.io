$(document).on(
  'shiny:connected',
  function() {
    window.api.on(
      'change',
      function(chg) {
        Shiny.onInputChange('geojsonio_change', chg.obj.map)
      }
    )
  }
)
