const eventHandler = require('./parseEventHandler')
const toCamelCase = require('./../../utils/toCamelCase');

module.exports = (attributesObject, node) => {
  var attributes = {}
  for(var key in attributesObject) {
    if(!isNaN(key)) {
      if(attributesObject[key].localName === 'class') {
        attributes['className'] = attributesObject[key].nodeValue;
      } else if (attributesObject[key].localName.indexOf('-') > -1) {
        var reactKey = toCamelCase(attributesObject[key].localName);
        attributes[reactKey] = attributesObject[key].nodeValue;
      }
      else attributes[attributesObject[key].localName] = attributesObject[key].nodeValue;
    }
  }

  // let eventHandlers = eventHandler(node);

  // for(let key in eventHandlers) {
  //   if(key !== 'undefined') attributes[key] = eventHandlers[key]
  // }

  if(node['data-react-d3-id']) {
    attributes['data-react-d3-id'] = node['data-react-d3-id']
  }

  if(node['__data__']) {
    attributes['__data__'] = node['__data__'];
  }

  if(node['__on']) {
    attributes['__on'] = node['__on']
  }

  if(node['__transition__']) {
    attributes['data-transition'] = node['__transition__'];
  }

  if(node['__onmousemove']) {
    attributes['__onmousemove'] = node['__onmousemove'];
  }

  


  return attributes;
}
