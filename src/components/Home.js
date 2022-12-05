import React from 'react'
import Section from './Section'
import styled from 'styled-components'

function Home() {
  return (
    <Container>
        <Section 
          title='Model S'
          backgroundImage='model-s.jpg'
          description = 'Order Online For Touchless Delivery'
          leftButton = 'Custom Order'
          rightButton = 'Existing Inventory'
        />
        <Section 
          title='Model Y'
          backgroundImage='model-y.jpg'
          description = 'Order Online For Touchless Delivery'
          leftButton = 'Custom Order'
          rightButton = 'Existing Inventory'
        />
        <Section 
          title='Model 3'
          backgroundImage='model-3.jpg'
          description = 'Order Online For Touchless Delivery'
          leftButton = 'Custom Order'
          rightButton = 'Existing Inventory'
        />
        <Section 
           title='Model X'
           backgroundImage='model-x.jpg'
           description = 'Order Online For Touchless Delivery'
           leftButton = 'Custom Order'
           rightButton = 'Existing Inventory'
        />
        <Section 
           title='Lowest Cost Solar Panels in America'
           backgroundImage='solar-panel.jpg'
           description = 'Money Back Guaranteed'
           leftButton = 'Order Now'
           rightButton = 'Learn More'
        />
        <Section 
           title='Solar Panel for New Roof Plus Solar Panels'
           backgroundImage='solar-roof.jpg'
           description = 'Solar Roof Cost Less Than New Roofs'
           leftButton = 'Order Now'
           rightButton = 'Learn More'
        />
        <Section 
           title='Accessories'
           backgroundImage='accessories.jpg'
           description = ''
           leftButton = 'Shop Now'
         
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
height: 100vh;
`
