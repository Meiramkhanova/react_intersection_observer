import styled from "styled-components";

const Photo = ({ name, imageUrl }) => {
  return (
    <Image>
      <img src={imageUrl} alt="" />
      <h4>{name}</h4>
    </Image>
  );
};

const Image = styled.div`
  img {
    width: 250px;
    height: 250px;
    border-radius: 20px;
  }
`;

export default Photo;
