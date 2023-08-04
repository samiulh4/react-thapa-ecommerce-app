import React from "react";
import styled from 'styled-components';
import HeroSection from "./components/HeroSectio";

const Home = () =>{
   const data = {
      name : "Thapa Store"
   };
   return <HeroSection myData={data}/>
};

const Wrapper = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export default Home;