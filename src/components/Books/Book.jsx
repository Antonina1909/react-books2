import React from 'react';

export const Book = ({id, author, name, avatar, onClickInvite, isInvited}) => 
(
  <li>
    <div>
      <img className="avatar" src={avatar} alt="Book" />
      <div>
        <h3>{name}</h3>
        <p>
          {author}
        </p>
      </div>
    </div>
    <img 
    onClick = {() => onClickInvite(id)} 
    className="action" 
    src={`/assets/${isInvited ? 'minus' : 'plus'}.svg`} 
    alt="Action" 
    />
  </li>
);