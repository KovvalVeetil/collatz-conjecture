import React from 'react';
import styled from 'styled-components';

const Collatz = ({ number }) => {
  const collatzConjecture = (num) => {
    const sequence = [];
    while (num !== 1) {
      sequence.push(num);
      if (num % 2 === 0) {
        num = num / 2;
      } else {
        num = 3 * num + 1;
      }
    }
    sequence.push(1);
    return sequence;
  };

  const result = collatzConjecture(number);

  return (
    <div className="Collatz">
      <h2>Collatz Sequence for {number}</h2>
      <ul>
        {result.map((x, ind) => (
          <SpecialListItem key={ind}>{x}</SpecialListItem>
        ))}
      </ul>
    </div>
  );
};

// Styled components for Collatz
const SpecialListItem = styled.li`
  font-weight: bold;
  font-size: 90%;
  padding: 2px;
  list-style-type: ${props => props.listStyleType || "square"};
`;

export default Collatz;
