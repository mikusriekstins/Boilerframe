var addClass, removeClass;

addClass = function(object, className) {
  if (!object.classList.contains(className)) {
    return object.classList.add(className);
  }
};

removeClass = function(object, className) {
  if (object.classList.contains(className)) {
    return object.classList.remove(className);
  }
};

removeClass = function(object, className) {
  return object.classList.toggle(className);
};

document.addEventListener('DOMContentLoaded', function() {
  return addClass(document.body, 'loaded');
});
