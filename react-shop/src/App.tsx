import { useState } from "react";
import "./App.css";
import styled from "styled-components";

// Test data
const testData: string[] = [];
for (let i = 1; i < 17; i++) {
  testData.push(`Card-${i}`);
}

interface IStyledCard {
  readonly isExpanded?: boolean;
  readonly index: number;
}

// Card styles
const StyledCard = styled.div<IStyledCard>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  font-size: large;
  border-radius: 20px;
  outline: 5px solid #000;
  box-shadow: 10px 10px 1px 1px darkgray;
  cursor: pointer;
  grid-column-start: ${({ isExpanded, index }) =>
    !isExpanded ? "auto" : (index + 1) % 2 === 0 ? "1" : `${(index % 2) + 1}`};
  grid-column-end: ${({ isExpanded }) => (isExpanded ? "span 2" : "span 1")};
  grid-row-start: ${({ isExpanded, index }) =>
    isExpanded ? `${Math.floor(index / 2 + 1)}` : "auto"};
  grid-row-end: ${({ isExpanded }) => (isExpanded ? "span 2" : "span 1")};
  @media screen and (min-width: 550px) {
    grid-column-start: ${({ isExpanded, index }) =>
      !isExpanded
        ? "auto"
        : (index + 1) % 3 === 0
        ? "2"
        : `${(index % 3) + 1}`};
    grid-row-start: ${({ isExpanded, index }) =>
      isExpanded ? `${Math.floor(index / 3 + 1)}` : "auto"};
  }
  @media screen and (min-width: 750px) {
    grid-column-start: ${({ isExpanded, index }) =>
      !isExpanded
        ? "auto"
        : (index + 1) % 4 === 0
        ? "3"
        : `${(index % 4) + 1}`};
    grid-row-start: ${({ isExpanded, index }) =>
      isExpanded ? `${Math.floor(index / 4 + 1)}` : "auto"};
  }
`;

interface IMaterialCard {
  readonly material: string;
  readonly index: number;
  readonly isExpanded: boolean;
  readonly onToggleExpand: () => void;
}

// Card component
const MaterialCard = ({
  material,
  index,
  isExpanded,
  onToggleExpand,
}: IMaterialCard) => {
  return (
    <StyledCard isExpanded={isExpanded} index={index} onClick={onToggleExpand}>
      {material}
    </StyledCard>
  );
};

// Container styles
const Organizer = styled.section`
  display: grid;
  grid-auto-rows: 150px;
  grid-auto-flow: row dense;
  gap: 24px;
  flex: 1;
  max-width: 900px;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (min-width: 550px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 750px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

interface IMaterialCardList {
  readonly materialData: string[];
}

// List component
const MaterialCardList = ({ materialData }: IMaterialCardList) => {
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <Organizer>
      {materialData.map((item, index) => (
        <MaterialCard
          material={item}
          key={item}
          index={index}
          isExpanded={index === expanded}
          onToggleExpand={() =>
            setExpanded((prev) => (prev === null ? index : null))
          }
        />
      ))}
    </Organizer>
  );
};

function App() {
  return (
    <div className="App">
      <MaterialCardList materialData={testData} />
    </div>
  );
}

export default App;
