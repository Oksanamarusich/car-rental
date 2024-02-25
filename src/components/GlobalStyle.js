import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0 auto;
  font-family:  'Manrope',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
@font-face {
  font-family: 'Manrope';
  src: url('../assets/fonts/Manrope-Regular.ttf') format('ttf');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Manrope';
  src: url('../assets/fonts/Manrope-Medium.ttf') format('ttf');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Manrope';
  src: url('../assets/fonts/Manrope-SemiBold.ttf') format('ttf');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/Montserrat-Regular.ttf') format('ttf');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/Montserrat-SemiBold.ttf') format('ttf');
  font-weight: 500;
  font-style: normal;
}




h1,
h2,
p,
ul,
li{
  margin: 0;
}
button{
 
cursor: pointer;
}
img {
    display: block;
    width: 100%;
    object-fit: cover;
  }
  
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul {
  margin: 0;
  padding: 0;
  text-decoration: none;
}

a {
  text-decoration: none;
}

li{
  text-decoration: none;
  list-style: none;
  padding: 0;
}

`;
