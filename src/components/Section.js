import React from 'react'
import  Fade  from 'react-reveal'
import { Wrap, ItemText, ButtonGroups, LeftButtion, RightButton, DownArrow, Buttons} from './components styles/SectIonStyle'


function Section({title, backgroundImage, description, leftButton, rightButton}) {
  return (
    <Wrap bgImage = {backgroundImage}>
        <Fade>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
            </ItemText>
        </Fade>
        <Buttons>
            <Fade>
            <ButtonGroups>
                <LeftButtion>
                    {leftButton}
                </LeftButtion>
                {
                    
                rightButton && 
                    <RightButton>
                    {rightButton}
                    </RightButton>
                }
            </ButtonGroups>
            </Fade>
            <DownArrow src={'/images/down-arrow.svg'}/> 
        </Buttons>
    </Wrap>
  )
}

export default Section
