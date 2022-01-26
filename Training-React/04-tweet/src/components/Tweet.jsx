import React from 'react';
import Avatar from './Avatar';
import Author from './Author';
import Message from './Message';
import Time from './Time';
import { LikeButton, MoreOptionsButtons, Sharebutton, ReplyButton } from './IconButtons';

const Tweet = () => (
  <div className="flex items-center border border-gray-300 m-8">
    <Avatar />
    <div className="space-y-1 text-lg font-medium leading-6">
      <Author />
      <Time />
      <Message />
      <div className="flex pt-3 space-x-3">
        <LikeButton />
        <Sharebutton />
        <ReplyButton  />
        <MoreOptionsButtons />
      </div>
    </div>
  </div>
);

export default Tweet;
