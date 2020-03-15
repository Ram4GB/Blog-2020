import styled from "styled-components";

const MainContainer = styled.div(props => {
  return {
    margin: "auto",
    width: props.width ? props.width : "80%",
    padding: "30px",
    backgroundColor: "#ffffff",
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
  };
});

export default MainContainer;
