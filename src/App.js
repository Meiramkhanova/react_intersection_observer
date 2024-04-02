import styled from "styled-components";
import "./App.css";
import Photo from "./components/Photo";
import photos from "./data/photos.json";
import { useState } from "react";
import PerformanceData from "./pages/PerformanceData";

function App() {
  const [showPerformanceData, setShowPerformanceData] = useState(false);

  const togglePerformanceData = () => {
    setShowPerformanceData(!showPerformanceData);
  };
  return (
    <div className="App">
      <h1>React Intersection Observer </h1>
      <button onClick={togglePerformanceData}>Show Performance Data</button>
      {showPerformanceData && (
        <Modal>
          <PerformanceData />
          <button onClick={togglePerformanceData}>Close</button>
        </Modal>
      )}
      <Wrapper>
        {photos.map((url, i) => (
          <Photo key={i} name={`Photo #${i}`} imageUrl={url} />
        ))}
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  justify-items: center;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid black;
`;
export default App;
