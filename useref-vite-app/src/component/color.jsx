import React, { useRef } from 'react';

function ElementColorChange() {
  let refElement = useRef(null);

  function handleChanges() {
    refElement.current.style.color = "pink";
  }

  return (
    <div ref={refElement} onClick={handleChanges}>this is the div element</div>
  );
}

export { ElementColorChange };
