import React from "react";
import styled from 'styled-components';
import HeroSection from "./components/HeroSectio";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () =>{
   const data = {
      name : "Thapa Store"
   };
   return <>
      <HeroSection myData={data}/>
   <Services/>
   <Trusted />
   </>
};

const Wrapper = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export default Home;