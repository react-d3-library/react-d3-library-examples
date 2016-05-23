module.exports = (string, attriObj) => {
  return new Function(
    `return function (state, id) {
      var props = ${attriObj};
      for(var key in props) {
        if(state[id][key]) {
          state[id][key] = props[key];
        }
      }
      return state;
    }`
  )();
}
