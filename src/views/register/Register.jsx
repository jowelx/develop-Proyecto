import { ContainerLogin } from "src/styles/general/components";
import { useState } from 'react';
import TextInput from "src/components/UI/TextInput";
import { styled } from "@mui/material";
import { ButtonLigth,ButtonDark } from "src/components/UI/Button";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Wrapper= styled(Box)({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"column",
    height:280,
    zIndex:99,
    width:200,
    padding:"30px 20px",
    boxShadow:"0 .5vw 1vw .2vw rgba(100,100,100,.4)",
    borderRadius:5,
    backgroundColor:"rgb(230,230,230)"
})
const Bubble1= styled(Box)({
    position:"absolute",
    borderRadius:"100%",
    height:270,
    marginLeft:"-8vw",
    marginTop:"-8vw",
    width:280,
    zIndex:1,
    padding:"30px 20px",
    boxShadow:"0 0vw 2vw .2vw rgba(100,100,100,.2)",
    background:" linear-gradient(200deg, rgb(0,250,210) 0%, rgb(0,180,255) 100%)",
})
const Bubble2= styled(Box)({
    position:"absolute",
    borderRadius:"100%",
    height:190,
    marginLeft:"70vw",
    marginTop:"25vw",
    width:200,
    zIndex:1,
    padding:"30px 20px",
    boxShadow:"0 0vw 2vw .2vw rgba(100,100,100,.2)",
    background:" linear-gradient(-50deg, rgb(50,80,210) 0%, rgb(0,210,255) 100%)",
})
const Bubble3= styled(Box)({
    position:"absolute",
    borderRadius:"100%",
    height:80,
    marginLeft:"60vw",
    marginTop:"2vw",
    width:100,
    zIndex:1,
    padding:"30px 20px",
    boxShadow:"0 0vw 2vw .2vw rgba(100,100,100,.2)",
    background:" linear-gradient(20deg, rgb(50,120,210) 0%, rgb(0,210,255) 100%)",
})
const Bubble4= styled(Box)({
    position:"absolute",
    borderRadius:"100%",
    height:80,
    marginLeft:"20vw",
    marginTop:"40vw",
    width:100,
    zIndex:1,
    padding:"30px 20px",
    boxShadow:"0 0vw 2vw .2vw rgba(100,100,100,.2)",
    background:" linear-gradient(80deg, rgb(50,150,210) 0%, rgb(0,210,255) 100%)",
})
const Register =()=>{
    const [value,setValues ]=useState({
        name:"",
        userName:"",
        password:""
    })
    const handleChange=(prop,val)=>{
        setValues({...value,[prop]:val})
    }
    return(
        <>
        <Bubble1/>
        <Bubble2/>
        <Bubble3/>
        <Bubble4/>
    <ContainerLogin>
       <Wrapper>
           <h5 style={{margin:0}}>Registro</h5>
        <TextInput
         label="Nombre"
         style={{width:"100%"}}
         value={value.name}
         onChange={(event)=>handleChange("name",event.target.value)}
        />
        <TextInput
         label="Usuario"
         style={{width:"100%"}}
         value={value.userName}
         onChange={(event)=>handleChange("userName",event.target.value)}
        />
         <TextInput
         label="Contraseña"
         password={true}
         style={{width:"100%"}}
         value={value.password}
         onChange={(event)=>handleChange("password",event.target.value)}
        />
        <ButtonDark
        name={"Registrarme"}
        />
       <Link style={{width:"100%",textDecoration:"none"}} to="/">
        <ButtonLigth
        name={"Volver"}
        >
        </ButtonLigth>
        </Link>
        <Link to="/home">
        Home
        </Link>
       </Wrapper>    
    </ContainerLogin>
   
        </>
    )
}
export default Register