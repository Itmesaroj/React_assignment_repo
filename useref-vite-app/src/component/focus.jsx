import React, { useRef, useEffect } from "react";

function InputFocus() {
  let inputF = useRef(null);

  useEffect(() => {
    inputF.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputF} />
    </div>
  );
}

export { InputFocus };
