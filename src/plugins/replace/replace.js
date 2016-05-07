/**
 * .replace()
 *
 * Replace the matched elements with the passed argument.
 * @return this Umbrella object
 */
u.prototype.replace = function (html, data) {

  var nodes = [];
  this.adjacent(html, data, function(node, fragment){
    nodes = nodes.concat(this.slice(fragment.children));
    node.parentNode.replaceChild(fragment, node);
  });
  return u(nodes);
};
