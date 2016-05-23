const stringToFunction = require('./stringToFunction');

//Takes function string
module.exports = func => {
  var attributes,
  singleAttribute,
  multipleAttributes;

  //Parses string and returns new function
  var body = func.substring(func.indexOf("{") + 1,
    func.lastIndexOf("}")).replace(/^[ \s]+|[ \s]+$/gi, '')
  if(body.indexOf('{') > 0 && body.indexOf('}') > 0 && body.indexOf('attr') > 0) {
    multipleAttributes = body.substring(body.indexOf("{"),
      body.lastIndexOf("}") + 1).replace(/[ \t\r?\n|\r/]+/g,"");
  } else {
    singleAttribute = '{' + body.substring(body.indexOf("attr") + 5,
      body.lastIndexOf(")")).replace(/^[ \s]+|[ \s]+$|['"]+/gi, '').replace(',', ':') + '}';
  }

  attributes = multipleAttributes ? multipleAttributes : singleAttribute

  attributes = attributes.replace(/d/gi, 'state[id]')


  return stringToFunction(func.substring(func.indexOf("{") + 1,
    func.lastIndexOf("}")).replace(/^[ \s]+|[ \s]+$/gi, ''), attributes);
}
