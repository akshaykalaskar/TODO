import React, { useState, useRef } from 'react';

export default function Todos(props) {
  const remove = (e, key) => {
    e.preventDefault();
    console.log(e.target.getAttribute(key));

    props.removeTask(key);
  };
  return (
    <>
      <li>
        {props.task}{' '}
        <a
          href=""
          style={{ color: 'red' }}
          key={props.key}
          onClick={(e) => remove(e, props.key)}
        >
          x
        </a>
      </li>
    </>
  );
}
