function(input,output,session) {
  features <- list()
  
  observeEvent(input$geojsonio_change, {
    features <<- input$geojsonio_change
  })
  
  observeEvent(input$geojsonio_quit, {
    stopApp(features)
  })
}