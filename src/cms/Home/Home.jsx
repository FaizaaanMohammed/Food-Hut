import React from "react";
import Hero from "../Home/Home.module.css";
import {
  Box,
  Button,
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
          <Grid container>
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
                    xs: "48px!important",
                    lineHeight: "135%",
                    fontWeight: "600!important",
                    letterSpacing: "0%",
                  },
                }}
              >
                We're <span style={{ color: "#F54748" }}> Serious </span>{" "}
                <br className={Hero.break} /> For{" "}
                <span style={{ color: "#F54748" }}>Food</span> &{" "}
                <span style={{ color: "#FDC55E" }}>Delivery.</span>
              </Typography>
              <Typography
                className={Hero.bannerSecPara}
                sx={{ xs: { fontSize: "20px!important" } }}
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
                    fontSize: {  sm: "14px", md: "14px" },
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
                  padding: "70px 0px",
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
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
