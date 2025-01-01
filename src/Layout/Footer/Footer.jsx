import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Hero from '../../cms/Home/Home.module.css'
const Footer = () => {
  return (
    <>
     <Box sx={{padding:"120px 0px 30px 0px",backgroundColor:"#000"}}>
      <Container maxWidth='xl'>
       <Grid container sx={{paddingLeft:{md:"30px!important",marginBottom:"30px"}}}>
        <Grid xs={12} sm={6} md={4} sx={{marginBottom:"25px"}} >
          <Typography sx={{fontSize:"32px",fontFamily:"Poppins",color:"#F65F5F",fontWeight:"500",paddingBottom:"10px"}}>
          Foodhut
          </Typography>
          <Typography sx={{fontSize:"18px",fontFamily:"Poppins",color:"#fff",fontWeight:"Regular",lineHeight:"Auto",paddingBottom:"20px"}}>
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor
          </Typography>
          <Box>
            <FacebookIcon sx={{color:"#FDCE77",marginRight:"18px"}}/>
            <InstagramIcon sx={{color:"#FDCE77",marginRight:"18px"}}/>
            <TwitterIcon sx={{color:"#FDCE77"}}/>
          </Box>
        </Grid>
        <Grid xs={6} sm={6} md={2} sx={{marginBottom:"25px"}} >
          <Typography sx={{fontSize:"24px",fontFamily:"Poppins",color:"#F65F5F",fontWeight:"500",paddingBottom:"10px"}}>
          About Us
          </Typography>
          <Typography sx={{fontSize:"18px",fontFamily:"Poppins",color:"#fff",fontWeight:"Regular",lineHeight:"Auto",paddingBottom:"20px"}}>
          <ul style={{padding:"0px",margin:"0px",fontSize:"18px"}}>
            <li style={{listStyle:"none",paddingBottom:"12px"}}>About Us</li>
            <li style={{listStyle:"none",paddingBottom:"12px"}}>Service Us</li>
            <li style={{listStyle:"none",paddingBottom:"12px"}}>Contact</li>
            <li style={{listStyle:"none",paddingBottom:"12px"}}>Company</li>
            
          </ul>
          </Typography>
         
        </Grid>
        <Grid xs={6} sm={6} md={2} sx={{marginBottom:"25px"}} >
          <Typography sx={{fontSize:"24px",fontFamily:"Poppins",color:"#F65F5F",fontWeight:"500",paddingBottom:"10px"}}>
          Company
          </Typography>
          <Typography sx={{fontSize:"18px",fontFamily:"Poppins",color:"#fff",fontWeight:"Regular",lineHeight:"Auto",paddingBottom:"20px"}}>
          <ul style={{padding:"0px",margin:"0px",fontSize:"18px"}}>
            <li style={{listStyle:"none",paddingBottom:"12px"}}>Partnership</li>
            <li style={{listStyle:"none",paddingBottom:"12px"}}>Terms of Use</li>
            <li style={{listStyle:"none",paddingBottom:"12px"}}>Privacy</li>
            <li style={{listStyle:"none",paddingBottom:"12px"}}>Sitemap</li>
            
          </ul>
          </Typography>
         
        </Grid>
        <Grid xs={12} sm={6} md={4}  >
          <Typography sx={{fontSize:"32px",fontFamily:"Poppins",color:"#F65F5F",fontWeight:"500",paddingBottom:"15px"}}>
          Get in touch
          </Typography>
          <Typography sx={{fontSize:"18px",fontFamily:"Poppins",color:"#fff",fontWeight:"Regular",lineHeight:"Auto",paddingBottom:"20px"}}>
          Lorem ipsum dolor sit amet,  consectetur <br /> adipiscing elit, sed do eiusmod tempor
          </Typography>
          <Box>
            <input type="text" style={{padding:"17px 25px",borderRadius:"38px",fontSize:"14px",opacity:"60%",fontFamily:"Poppins",border:"0px",outline:"none",marginRight:"15px"}} placeholder='Email' />
            <Button sx={{color:"#000",backgroundColor:"#F65F5F",padding:"15px 25px",borderRadius:"39px",fontFamily:"Poppins",fontSize:"14px",textTransform:"capitalize"}} className={Hero.subscribeButton}>
              Subscribe
            </Button>
          </Box>
        </Grid>
       </Grid>
       <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Typography sx={{color:"#fff",fontSize:"16px",fontFamily:"Poppins",fontWeight:"Regular"}}>
        Copyright © 2022 Foodhut.
        </Typography>
       </Box>
      </Container>
     </Box>
    </>
  )
}

export default Footer
