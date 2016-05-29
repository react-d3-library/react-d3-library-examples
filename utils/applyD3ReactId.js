function applyD3ReactId(children, counter) {
  var count = -1;
  var length = 0;
  var childCount = 0;
  var parentCount = 0;
  var result = {state: {}, children: []};

  function apply(parent) {
    count++;
    parent.forEach( (child, i) => {
      if(child.children.length) length = child.children.length;

      child['data-react-d3-id'] = child.localName + '.' + counter + '.' + parentCount + '.' + count;

      result.state[child.localName + '.' + counter + '.' + parentCount + '.' + count] = {};

      child.hasOwnProperty('__data__')
        ? result.state[child.localName + '.' + counter + '.' + parentCount + '.' + count]['__data__'] = child['__data__']
        : result.state[child.localName + '.' + counter + '.' + parentCount + '.' + count]['__data__'] = null

      if(child['__on']) {
        result.state[child.localName + '.' + counter + '.' + parentCount + '.' + count]['__on'] = child['__on']
      }

      if(child['__onload']){
        result.state[child.localName + '.' + counter + '.' + parentCount + '.' + count]['__onload'] = child['__onload']

      }

      if(child['__zoom']) {
        result.state[child.localName + '.' + counter + '.' + parentCount + '.' + count]['__zoom'] = child['__zoom']
      }

      if(child['__transition__']) {
        result.state[child.localName + '.' + counter + '.' + parentCount + '.' + count]['__transition__'] = child['__transition__']
      }

      if(child['__onmousemove']) {
        result.state[child.localName + '.' + counter + '.' + parentCount + '.' + count]['__onmousemove'] = child['__onmousemove']
      }


      if(count === length) count = 0, parentCount++;

      return child.children.length
        ? ([].slice.call(child.children).forEach(child => apply([child])))
        : []
    });

  }

  apply(children);
  result.children = children;
  return result;
}

module.exports = applyD3ReactId;
