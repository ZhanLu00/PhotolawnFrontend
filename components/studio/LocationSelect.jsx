import React, { useState } from "react";
import styled from "styled-components";

const data = [
  { title: "Client's Choice", details: "Anywhere in Toronto" },
  { title: "Your studio", details: "in Toronto, ON" }
];

const LocationSelect = () => {
  const [choice, setChoice] = useState("");
  const handleChange = event => {
    setChoice(event.target.value);
  };
  return (
    <Select>
      <form>
        {data.map(item => {
          return (
            <label key={item.title}>
              <input
                type="radio"
                value={item.title}
                checked={choice === item.title}
                onChange={handleChange}
              />
              <Choice>{item.title}</Choice>
            </label>
          );
        })}
      </form>
    </Select>
  );
};

export default LocationSelect;

const Select = styled.div`
  /* Hide Radio Button */
  [type="radio"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* Checked Styles */
  [type="radio"]:checked + span {
    border-color: #55e0cb;
    -webkit-box-shadow: 0 0 6px 3px rgba(85, 224, 203, 0.1);
    box-shadow: 0 0 6px 3px rgba(85, 224, 203, 0.1);
  }
`;

const Choice = styled.span`
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  padding: 20px;
  border: 2px solid #eff1f7;
  border-radius: 6px;
  cursor: pointer;
  text-align: center;
  width: 100%;
  :hover {
    border-color: #55e0cb;
    -webkit-box-shadow: 0 0 6px 3px rgba(85, 224, 203, 0.1);
    box-shadow: 0 0 6px 3px rgba(85, 224, 203, 0.1);
  }
`;
