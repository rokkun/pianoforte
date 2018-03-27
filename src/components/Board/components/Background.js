import Glamorous, { Div } from 'glamorous';
import React, { Component } from 'react';

import { contentHeight } from '../../../config/app';

export default class Background extends Component {
  render() {
    return (
      <Div
        width="100%"
        height="100%"
        position="absolute"
        backgroundColor="#303030"
      >
        {[...Array(5)].map((_, i) => (
          <Line
            key={i}
            count={i + 1}
            keyWidth={100 / this.props.state.whiteKeys.length}
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <Line
            key={i}
            thin
            count={i}
            keyWidth={100 / this.props.state.whiteKeys.length}
          />
        ))}
      </Div>
    );
  }
}

const Line = Glamorous.div(
  { position: 'absolute', height: `${contentHeight}vh` },
  ({ thin, count, keyWidth }) => ({
    left:
      thin === true
        ? `${count * 7 * keyWidth + 3 * keyWidth}vw`
        : `calc(${count * 7 * keyWidth}vw - 1px)`,
    borderLeft: thin === true ? '1px solid #5A5A5A' : '2px solid #5A5A5A'
  })
);