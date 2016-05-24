import React from 'react';

module.exports = React.createClass({


  render: function() {
    return (
      <div>
        <label><input type="radio" name="mode" value="grouped" /> Grouped</label>
        <label><input type="radio" name="mode" value="stacked" /> Stacked</label>
      </div>
    )
  }
});

