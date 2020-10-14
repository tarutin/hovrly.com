import React, { Component } from 'react';

class Test extends Component {

  render() {

      const m = new Date();
        const dateString = m.getUTCFullYear() +"/"+ (m.getUTCMonth()+1) +"/"+ m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes() + ":" + m.getUTCSeconds();

    return (
        <time>{dateString}</time>
    );
  }
}

export default Test;
