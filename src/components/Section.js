import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section(props) {
    console.log(props)
    return (
        <Wrap bgImage={props.backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {props.leftBtnText}
                        </LeftButton>
                        {props.rightBtnText &&
                                <RightButton>
                                {props.rightBtnText}
                                </RightButton>
                        }
                    </ButtonGroup>
                    <DownArrow src="/images/down-arrow.svg"/>
                </Fade>
            </Buttons>
        </Wrap>
    )
}

export default Section

// const Wrap = styled.div`
//     width: 100vw;
//     height: 100vh;
//     backgroud: orange;
// `;


const Wrap =styled.div`
       width: 100vw;
       height: 100vh;
       background-size:cover;
       background-position:center;
       background-repeat:not-repeat;
       background-image: url('images/model-3.jpg');
       display: flex;
       flex-direction: column;
       justify-content: space-between;
       align-items: center;
       background-image: ${props => `url("images/${props.bgImage}")`}

`


const ItemText = styled.div`
        padding-top: 15vh;
        text-align: center;
`


const LeftButton = styled.div`
      background-color: rgba(23,26,32,0.8);
      height: 40px;
      width: 256px;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100px;
      opacity:0.85;
      text-transform:uppercase;
      font-size:12px;
      cursor: pointer;
      margin: 8px;


`


const ButtonGroup = styled.div`
      display: flex;
      margin-bottom: 30px;

`


const RightButton = styled(LeftButton)`
      background: white;
      color: black;

`

const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1s;
    margin-left: auto;
    margin-right: auto;
    display: block;
`

const Buttons = styled.div``;
