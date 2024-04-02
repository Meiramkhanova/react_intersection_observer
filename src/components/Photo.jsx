import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const Photo = ({ name, imageUrl }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <Image ref={ref}>
      {inView ? <img src={imageUrl} alt="" /> : <Skeleton />}

      <h4>{name}</h4>
    </Image>

    // <Image>
    //   <img src={imageUrl} alt="" />
    //   <h4>{name}</h4>
    // </Image>
  );
};

const Image = styled.div`
  img {
    width: 250px;
    height: 250px;
    border-radius: 20px;
  }
`;

const Skeleton = styled.div`
  background-color: grey;
  width: 250px;
  height: 250px;
  border-radius: 20px;
`;

export default Photo;
