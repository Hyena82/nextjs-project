"use client";
import { Box } from "@/components/Box";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const HomePage = () => {
  return (
    <Wrapper>
      <p className="flex">coi nek</p>
      <Box p={4} className="hi">
        chao moi nguoi toi la box
      </Box>
    </Wrapper>
  );
};

export default HomePage;
