import React from 'react';

function InputFilterResult({ searchStr, searchHandler }) {
  return (
    <>
      <input
        className="form-control"
        type="text"
        value={searchStr}
        onChange={searchHandler}
      />
    </>
  );
}

export default InputFilterResult;
