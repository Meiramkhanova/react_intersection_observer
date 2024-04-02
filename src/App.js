import styled from "styled-components";
import "./App.css";
import Photo from "./components/Photo";
import photos from "./data/photos.json";

function App() {
  return (
    <div className="App">
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

export default App;
