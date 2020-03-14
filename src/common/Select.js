import React from "react";

const Select = ({ breeds, onChange }) => {
  return (
    <div className="select">
      <select onChange={onChange} name="slct" id="slct">
        <option selected disabled>
          Choose a Breed
        </option>

        {breeds
          ? breeds.map(breed => <option value={breed}>{breed}</option>)
          : null}
      </select>
    </div>
  );
};

export default Select;
