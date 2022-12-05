import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'


export const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    justify-content: space-between;
    z-index: 1;
`
export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media(max-width: 768px){
        display: none
    }
`
export const RightMenu = styled.div`
     a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
        flex-wrap: nowrap;
    }

`
export const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`
export const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    z-index: 16;
    width: 300px;
    padding: 20px;
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.3s ease-in;
    li{
        padding: 10px 0;
        border-bottom: 2px solid rgba(0, 0, 0, .2);
        
        a{
            font-weight: 600;
        }
    }

`
export const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

export const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

`