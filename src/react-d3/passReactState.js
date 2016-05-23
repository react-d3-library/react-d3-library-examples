module.exports = (obj, stateData, getState) => {
  var reactId = obj.props['data-react-d3-id']
  var func = obj.props['onClick'];

  if(stateData[reactId] instanceof Object) {
    for(var key in stateData[reactId]) {
      if(obj.props[key]) {
        obj.props[key] = stateData[reactId][key];
      }
    }
  }

  for(var key in obj.props) {
    if(key.indexOf('onClick') > -1) {
      obj.props[key] = getState(obj.props[key]);
    }
  }

  return obj.props;
}
