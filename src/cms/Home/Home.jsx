import React from "react";
import Hero from "../Home/Home.module.css";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Navbar from "../../Layout/Navbar/Navbar";
import linear from "../../Assets/Images/Group 8438.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import herosecimage from "../../Assets/Images/Bannersecgirl.png";
import fireimage from "../../Assets/Images/fire.png";
import spinachImage from "../../Assets/Images/spinach.png";
import food1 from "../../Assets/Images/food1.png";
import food2 from "../../Assets/Images/food2.png";
import food3 from "../../Assets/Images/food3.png";
import food4 from "../../Assets/Images/food4.png";
import pizzaImage from "../../Assets/Images/banner pizza.png";
import StarIcon from "@mui/icons-material/Star";
import vector3 from '../../Assets/Images/Vector 3.png'
import polygon from '../../Assets/Images/Polygon 1.png'
const Home = () => {
  return (
    <>
      <Box className={Hero.Background}>
        <Navbar />
        {/* linearpattern box */}
        <Box className={Hero.linearStyle}>
          <img src={linear} alt="" />
        </Box>
        {/* end of linear pattern box */}
        {/* start banner section */}
        <Container maxWidth="xl">
          <Grid container className={Hero.direction}>
            <Grid
              sm={12}
              md={6}
              sx={{ paddingLeft: { md: "20px", xs: "10px" } }}
            >
              <Box
                sx={{
                  paddingTop: { sm: "70px", xs: "30px" },
                  paddingBottom: "30px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    color: "#fff",
                    textTransform: "capitalize",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: "Regular",
                    borderRadius: "100px",
                    backgroundColor: "rgba(246, 95, 95, 0.4)",
                    padding: "5px 15px",
                    paddingLeft: "7px",
                  }}
                >
                  <FavoriteIcon
                    sx={{
                      marginRight: "5px",
                      color: "#FDCE77",
                      backgroundColor: "#F65F5F",
                      borderRadius: "50%",
                      padding: "3px",
                    }}
                  />{" "}
                  People Trust us
                </Button>
              </Box>
              <Typography
                className={Hero.heroSecHeading}
                sx={{
                  fontSize: {
                    xs: "40px!important", sm:"48px!important",
                    lineHeight: "135%",
                    fontWeight: "600!important",
                    letterSpacing: "0%",
                  },
                }}
              >
                We're <span style={{ color: "#F54748" }}> Serious </span>{" "}
                <br className={Hero.breakk} /> For{" "}
                <span style={{ color: "#F54748" }}>Food</span> &{" "}
                <span style={{ color: "#FDC55E" }}>Delivery.</span>
              </Typography>
              <Typography
                className={Hero.bannerSecPara}
                sx={{ fontSize: { xs: "22px!important" } }}
              >
                Best cooks and best delivery guys all at your{" "}
                <br className={Hero.breakk} /> service. Hot tasty food will
                reach you in 60 <br className={Hero.breakk} /> minutes.
              </Typography>
              <Box sx={{ paddingBottom: "40px" }}>
                <TextField
                  placeholder="Search Food"
                  sx={{
                    backgroundColor: "#0D0D0D",
                    border: "1px solid #fff",
                    width: { sm: "70%", xs: "100%", md: "70%" },
                    borderRadius: "100px",
                    "& .MuiInputBase-input": {
                      color: "white", // Text color
                      fontFamily: "Poppins!important",
                      fontSize: "18px",
                      fontWeight: "Regular",
                      outline: "none",
                    },
                    paddingLeft: "20px",
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: "#fff" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box sx={{ display: "flex" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#F65F5F",
                    borderRadius: "100px",
                    fontFamily: "Poppins",
                    textTransform: "capitalize",
                    color: "#000",
                    fontSize: { sm: "14px", md: "14px" },
                    fontWeight: "Regular",
                    boxShadow: "none",
                    padding: {
                      xs: "5px 15px!important",
                      md: "8px 15px!important",
                    },
                    marginRight: "20px",
                  }}
                >
                  Download App
                </Button>
                <Button
                  sx={{
                    borderRadius: "100px",
                    fontFamily: "Poppins",
                    textTransform: "capitalize",
                    color: "#fff",
                    fontSize: { sm: "14px", md: "14px" },
                    fontWeight: "Regular",
                    boxShadow: "none",
                    padding: {
                      xs: "5px 15px!important",
                      md: "8px 15px!important",
                    },
                  }}
                >
                  <PlayArrowIcon
                    sx={{
                      marginRight: "8px",
                      color: "#F65F5F",
                      backgroundColor: "#0D0D0D",
                      boxShadow: "0px 10px 30px #DF6951",
                      borderRadius: "50%",
                      width: "22px",
                      height: "22px",
                    }}
                  />{" "}
                  Watch Video
                </Button>
              </Box>
            </Grid>
            <Grid sm={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: {
                    md: "110px 0px 0px 0px",
                    sm: "120px 0px 60px 0px",
                    xs: "70px 0px 70px 0px",
                  },
                  position: "relative",
                }}
              >
                <Box className={Hero.leftside}>
                  <img
                    src={herosecimage}
                    alt=""
                    style={{
                      position: "absolute",
                      bottom: "15px",
                      zIndex: "99",
                    }}
                    className={Hero.bannergirlimage}
                  />
                </Box>
                {/* fire image */}
                <Box className={Hero.fireImage}>
                  <img src={fireimage} alt="" />
                </Box>
                {/* end fire image */}
                <Box className={Hero.spinachImage}>
                  <img src={spinachImage} alt="" />
                </Box>
                {/* end spinach image */}
                <Box className={Hero.Food1Image}>
                  <img src={food1} alt="" />
                </Box>
                {/* end food1 image */}
                <Box className={Hero.Food2Image}>
                  <img src={food2} alt="" />
                </Box>
                {/* end food2 image */}
                <Box className={Hero.Food3Image}>
                  <img src={food3} alt="" />
                </Box>
                {/* end food3 image */}
                <Box className={Hero.Food4Image}>
                  <img src={food4} alt="" />
                </Box>
                {/* end food4 image */}
                <Card
                  sx={{
                    width: "190px",
                    height: "81px",
                    position: "absolute",
                    zIndex: "99999",
                    top: "30%",
                    left: "7%",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    backgroundColor: "#0D0D0D",
                    color: "#fff",
                    borderRadius: "15px",
                    padding: {sm:"10px 5px",xs:"5px 5px"},
                    fontFamily: "Poppins",
                  }}
                  className={Hero.ratingCard}
                >
                  <img src={pizzaImage} alt="" />
                  <Box>
                    <Typography sx={{ fontFamily: "Poppins",fontSize:{xs:"10px",sm:"16px"},padding:"0px" }}>
                      Italian Pizza
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        color: "#FDCE77",
                        fontSize: "6px",
                        padding: "0px",
                        margin: "0px",
                        display:{xs:"none",sm:"block"}
                        
                        
                      }}

                    >
                      <StarIcon sx={{width:{xs:"15px"}}} />
                      <StarIcon sx={{width:{xs:"15px"}}}/>
                      <StarIcon sx={{width:{xs:"15px"}}}/>
                      <StarIcon sx={{width:{xs:"15px"}}} />
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        color: "#fff",
                        fontSize: {xs:"10px",sm:"12px"},
                        padding:"0px"
                      }}
                    >
                      $9.50
                    </Typography>
                  </Box>
                </Card>
                {/* end pizza card */}
                <Box sx={{position:"absolute",zIndex:"76575",top:"7%",left:"80%",display:{xs:"none",sm:"block"}}}>
                  <img src={vector3} alt="vector3" />
                </Box>
                {/* end vector part */}
                <Box sx={{position:"absolute",top:"5%",left:"86.5%",display:{xs:"none",sm:"block"}}}>
                  <img src={polygon} alt="polygon" />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
