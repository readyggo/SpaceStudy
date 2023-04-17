import { style } from '@mui/system';
import styled from 'styled-components'

export const theme = {

    // text 
    title_font : 'ONE-Mobile-POP'
    ,text_font : 'ONE-Mobile-Regular'
    ,nav_font : 'ONE-Mobile-Title'
    ,
    // color
    nav_color : '#2C2C2C',
    btn_yellow : '#FCD24F',
    title_color : '#A6EA8E',
    link_color : '#95D27F',
    pop_color : '#443E59',
}

export const MainBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin: 0 auto;
`
export default theme;