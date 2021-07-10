import React from 'react'
import styled from 'styled-components'

const Rains = () => {
    return (
        <RainsContainer>
            <div id="cloud">
                <span className="shadow"></span>
                <div className="rain">
                    <div className="drop d1"></div>
                    <div className="drop d2"></div>
                    <div className="drop d3"></div>
                    <div className="drop d4"></div>
                    <div className="drop d5"></div>
                    <div className="drop d6"></div>
                    <div className="drop d7"></div>
                    <div className="drop d8"></div>
                    <div className="drop d9"></div>
                    <div className="drop d10"></div>
                    <div className="drop d11"></div>
                    <div className="drop d12"></div>
                    <div className="drop d13"></div>
                    <div className="drop d14"></div>
                    <div className="drop d15"></div>
                </div>
            </div>
        </RainsContainer>

    )
}

export default Rains

const RainsContainer = styled.div`



    width: 100%
    height: 100%
    position: absolute;

  
  #cloud {
      width: 175px;
      height: 60px;
      background: #f2f9fe;
      background: -moz-linear-gradient(top,  #f2f9fe 5%, #d6f0fd 100%);
      background: -webkit-gradient(linear, left top, left bottom, color-stop(5%,#f2f9fe), color-stop(100%,#d6f0fd));
      background: -webkit-linear-gradient(top,  #f2f9fe 5%,#d6f0fd 100%);
      background: -o-linear-gradient(top,  #f2f9fe 5%,#d6f0fd 100%);
      background: -ms-linear-gradient(top,  #f2f9fe 5%,#d6f0fd 100%);
      background: linear-gradient(top,  #f2f9fe 5%,#d6f0fd 100%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f2f9fe', endColorstr='#d6f0fd',GradientType=0 );
      position: relative;
      margin: 70px auto 20px;
      -webkit-border-radius: 50px;
      -moz-border-radius: 50px;
      border-radius: 50px;
    -webkit-animation: mover 3.5s infinite  alternate;
    animation: mover 3.5s infinite  alternate;
  }
  
  #cloud:after, div#cloud:before {
      content: '';
      position: absolute;
      z-indeX: 1;
      background: #f2f9fe;
  }
  
  #cloud:after {
      width: 50px;
      height: 50px;
      -webkit-border-radius: 50px;
      -moz-border-radius: 50px;
      border-radius: 50px;
      top: -25px;
      left: 25px;
  }
  
  #cloud:before {
      width: 90px;
      height: 90px;
      -webkit-border-radius: 100px;
      -moz-border-radius: 100px;
      border-radius: 100px;
      top: -45px;
      right: 25px;
  }
  
  .shadow {
      width: 175px;
      position: absolute;
      bottom: -40px;
      background: black;
      z-index: 1;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      -webkit-box-shadow: 0px 0px 25px 8px rgba(0,0,0,0.4);
      -moz-box-shadow: 0px 0px 25px 8px rgba(0,0,0,0.4);
      box-shadow: 0px 0px 25px 8px rgba(0,0,0,0.4);
  }
  
  .rain {
    position : absolute;
    height : 80%;
    width : 100%;
    color: #002266;
  }
  
  .drop {
    position : absolute;
    background : linear-gradient(#000000, #ffffff);
    opacity : 2;
    top : 25px;
  }
  
  .d1 {
    left : 97%;
    width : 1%;
    height : 5%;
    animation : fall .94s linear 0.69s infinite;
  }
  
  .d2 {
    left : 18%;
    width : 1%;
    height : 5%;
    animation : fall .98s linear 0.57s infinite;
  }
  .d3 {
    left : 38%;
    width : 1%;
    height : 5%;
    animation : fall .66s linear .60s infinite;
  }
  
  .d4 {
    left : 64%;
    width : 1%;
    height : 5%;
    animation : fall .69s linear .76s infinite;
  }
  
  .d5 {
    left : 95%;
    width : 1%;
    height : 5%;
    animation : fall .75s linear .56s infinite;
  }
  
  .d6 {
    left : 65%;
    width : 1%;
    height : 5%;
    animation : fall .75s linear .92s infinite;
  }
  
  .d7 {
    left : 19%;
    width : 1%;
    height : 5%;
    animation : fall .92s linear .72s infinite;
  }
  
  .d8 {
    left : 55%;
    width : 1%;
    height : 5%;
    animation : fall .84s linear .99s infinite;
  }
  
  .d9 {
    left : 35%;
    width : 1%;
    height : 5%;
    animation : fall .79s linear .53s infinite;
  }
  
  .d10 {
    left : 83%;
    width : 1%;
    height : 5%;
    animation : fall .82s linear .97s infinite;
  }
  
  .d11 {
    left : 8%;
    width : 1%;
    height : 5%;
    animation : fall .75s linear .56s infinite;
  }
  
  .d12 {
    left : 1%;
    width : 1%;
    height : 5%;
    animation : fall .60s linear .59s infinite;
  }
  
  .d13 {
    left : 13%;
    width : 1%;
    height : 5%;
    animation : fall .5s linear .5s infinite;
  }
  
  .d14 {
    left : 13%;
    width : 1%;
    height : 5%;
    animation : fall .80s linear .63s infinite;
  }
  
  .d15 {
    left : 13%;
    width : 1%;
    height : 5%;
    animation : fall .68s linear .75s infinite;
  }
  
  @-webkit-keyframes fall {
      to {margin-top:150px; opacity:0;}
  }
  @keyframes fall {
      to {margin-top:150px; opacity:0;}
  }
  
  @-webkit-keyframes mover {
      0% { transform: translateY(1rem); }
      100% { transform: translateY(2.6rem); }
  }
      
`;
