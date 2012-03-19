require([
    "dojo/dom"
  , "dojo/parser"
  , "dojo/dom-construct"
  , "dojo/domReady!"]
  , function() {dojo.ready( init ) } ) // the callback function to run when done asynchronously

function init() {
  var node = dojo.byId("email")
  var email = node.innerHTML
    .replace('[at]', '@')
    .replace('[dot]','.')
    .replace(/ /g,'')
  node.innerHTML = ''  
  dojo.place( "<a href=mailto:"+email+">"+email+"</a>", node)
}
