import styled from "@emotion/styled"
import { Typography } from "@mui/material"
import { UserContext } from "src/context/userContext"
import { useContext } from "react"
import { COLOR_LIGHT_FIRST,COLOR_DARK_FIRST } from "src/constants/consts"
const TextCamp =styled(Typography)(({color,size})=>`
    color:${color};
`)
const Text =(props)=>{
const {darkMode}=useContext(UserContext)
return(
        <TextCamp 
        color={darkMode===true?COLOR_LIGHT_FIRST:COLOR_DARK_FIRST}
        >
        {props.children}
        </TextCamp>
    )
}
export default Text