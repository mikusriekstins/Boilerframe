# Quick add class
addClass = (object, className) ->
  if !object.classList.contains className
    object.classList.add className

# Quick remove class
removeClass = (object, className) ->
  if object.classList.contains className
    object.classList.remove className

# Quick toggle class
removeClass = (object, className) ->
  object.classList.toggle className

# On document load
document.addEventListener 'DOMContentLoaded', ->
  addClass document.body, 'loaded'
