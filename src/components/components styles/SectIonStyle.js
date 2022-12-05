import styled from "styled-components"



export const Wrap = styled.div `
    width: 100vw;
    height: 100vh;
    /* background: teal; */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")` };
`
export const ItemText = styled.div `
    padding-top: 15vh;
    text-align: center;
    color: black;
`
export const Buttons = styled.div`
`

export const ButtonGroups = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`
export const LeftButtion = styled.div`
    text-transform: uppercase;
    background-color: rgba(23,26,32,0.8);
    color: white;
    height: 40px;
    width: 256px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`
export const RightButton = styled(LeftButtion)`
    background-color: white;
    color: black;
    opacity: 0.65;
`
export const DownArrow = styled.img`
    width: 20px;
    height: 40px;
    animation: animateDown infinite 1.5s;
`