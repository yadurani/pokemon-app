import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  * {
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    padding: 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  body {
    overflow-x: hidden;
    background: #f5f5f5;
    min-height: 100vh;
  }
  #root {
    min-height: 100vh;
  }

  button {
    border-radius: 0;
    border: none;
    font-weight: 700;
    background-color: transparent;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }

  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  p {
    margin: 1rem 0;
    font-size: 1rem;
    line-height: 1.7rem;
  }

  b {
    font-weight: bold;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    @media(hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }
  }
  a[aria-current=page] {
    color: yellow;
    text-decoration: none;
  }
  .transition-group {
  flex: 1;
  position: relative;
  }

  .router {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .page {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .fade-enter .page {
    opacity: 0;
    z-index: 1;
  }

  .fade-enter.fade-enter-active .page {
    opacity: 1;
    transition: opacity 450ms ease-in;
  }
  .steel {
    background-color: #f4f4f4;
  }

  .fire {
    background-color: #fddfdf;
  }

  .grass {
    background-color: #defde0;
  }

  .electric {
    background-color: #fcf7de;
  }

  .water,
  .ice {
    background-color: #def3fd;
  }

  .ground {
    background-color: #f4e7da;
  }

  .rock {
    background-color: #d5d5d4;
  }

  .fairy {
    background-color: #fceaff;
  }

  .poison {
    background-color: #98d7a582;
  }

  .bug {
    background-color: #f8d5a3;
  }

  .dragon {
    background-color: #97b3e6;
  }

  .psychic {
    background-color: #eaeda1;
  }

  .flying {
    background-color: #f5f5f5;
  }

  .fighting {
    background-color: #e6e0d4;
  }

  .normal {
    background-color: #f5f5f5;
  }
`

export default GlobalStyle
