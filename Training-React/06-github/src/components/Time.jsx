import React from 'react';
import moment from 'moment';

const Time = ({ updateAt }) => (
  <div className="text-right">{moment(updateAt).fromNow()}</div>
);

export default Time;
