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
import vector3 from "../../Assets/Images/Vector 3.png";
import polygon from "../../Assets/Images/Polygon 1.png";
import orange from "../../Assets/Images/Orange.png";
import cardfood1 from "../../Assets/Images/cardfood1.png";
import cardfood2 from "../../Assets/Images/cardfood2.png";
import cardfood3 from "../../Assets/Images/cardfood3.png";
import cardfood4 from "../../Assets/Images/cardfood4.png";
import iconnImg from "../../Assets/Images/Group 8442.png";
import chef from "../../Assets/Images/chef1.png";
import pizza from "../../Assets/Images/Group 8434.png";
import particles from "../../Assets/Images/5a3ac62578a9f8.png";
import vector9 from "../../Assets/Images/Vector 9.png";
import order from "../../Assets/Images/image 15.png";
import twentyfour from "../../Assets/Images/image 17.png";
import booking from "../../Assets/Images/image 18.png";

const Home = () => {
  const OffersCard = [
    {
      title: "Kebab",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      rate: "10$",
      img: cardfood1,
      icon: StarIcon,
      rating: "4.5",
      IconImg: iconnImg,
    },
    {
      title: "Chicken Tikka",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      rate: "15$",
      img: cardfood2,
      icon: StarIcon,
      rating: "4.8",
      IconImg: iconnImg,
    },
    {
      title: "Desi Chowmein",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      rate: "8$",
      img: cardfood3,
      icon: StarIcon,
      rating: "4.2",
      IconImg: iconnImg,
    },
    {
      title: "Chicken Chargha",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      rate: "28$",
      img: cardfood4,
      icon: StarIcon,
      rating: "5",
      IconImg: iconnImg,
    },
  ];

  const service = [
    { img: order, desc: "Online Order" },
    { img: twentyfour, desc: "24/7 Service" },
    { img: booking, desc: "Pre-Reservation" },
    { img: booking, desc: "Super Chef" },
    { img: booking, desc: "Oragonized Foodhut Place" },
    { img: booking, desc: "Clean Kitchen" },
  ];

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
              sx={{
                paddingLeft: { md: "20px", xs: "10px" },
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  zIndex: "98765",
                  top: "20%",
                  left: "55%",
                }}
              >
                <img src={orange} alt="" />
              </Box>
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
                    xs: "40px!important",
                    sm: "48px!important",
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
                    padding: { sm: "10px 5px", xs: "5px 5px" },
                    fontFamily: "Poppins",
                  }}
                  className={Hero.ratingCard}
                >
                  <img src={pizzaImage} alt="" />
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: { xs: "10px", sm: "16px" },
                        padding: "0px",
                      }}
                    >
                      Italian Pizza
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        color: "#FDCE77",
                        fontSize: "6px",
                        padding: "0px",
                        margin: "0px",
                        display: { xs: "none", sm: "block" },
                      }}
                    >
                      <StarIcon sx={{ width: { xs: "15px" } }} />
                      <StarIcon sx={{ width: { xs: "15px" } }} />
                      <StarIcon sx={{ width: { xs: "15px" } }} />
                      <StarIcon sx={{ width: { xs: "15px" } }} />
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        color: "#fff",
                        fontSize: { xs: "10px", sm: "12px" },
                        padding: "0px",
                      }}
                    >
                      $9.50
                    </Typography>
                  </Box>
                </Card>
                {/* end pizza card */}
                <Box
                  sx={{
                    position: "absolute",
                    zIndex: "76575",
                    top: "7%",
                    left: "80%",
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  <img src={vector3} alt="vector3" />
                </Box>
                {/* end vector part */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "5%",
                    left: "86.5%",
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  <img src={polygon} alt="polygon" />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* end hero section */}
      {/* start offercard */}
      <Box
        className={Hero.offersBackground}
        sx={{ padding: { xs: "40px 0px!important", sm: "50px 0px!important" } }}
      >
        <Container maxWidth="xl">
          <Box>
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Poppins",
                fontSize: { sm: "48px", xs: "40px" },
                textAlign: "center",
                textTransform: "capitalize",
                fontWeight: "Bold",
                paddingBottom: "20px",
              }}
            >
              Today <span style={{ color: "#F54748" }}>special</span> offers
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Poppins",
                fontSize: { xs: "15px", sm: "18px" },
                textAlign: "center",
                textTransform: "capitalize",
                fontWeight: "Regular",
                maxWidth: "856px",
                margin: "auto",
                paddingBottom: { xs: "60px", md: "20px", sm: "100px" },
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Typography>
            {/* end paragraph and heading part */}
            <Grid
              container
              sx={{
                paddingTop: { xs: "30px", md: "180px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {OffersCard.map((item) => {
                return (
                  <>
                    <Grid
                      xs={12}
                      sm={6}
                      md={3}
                      sx={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Card
                        sx={{
                          height: "368px",
                          width: "310px",
                          background:
                            "linear-gradient(to bottom, #352f2f 0%, #674e4e 100%)!important",
                          opacity: "100%",
                          margin: {
                            xs: "45px 20px 105px",
                            md: "0px 25px",
                            sm: "15px 20px 145px",
                          },
                          backgroundColor: "#000!important",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          padding: "0px 30px",
                        }}
                        className={Hero.offercard}
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: "0%",
                            left: "50%",
                            zIndex: "87654456",
                            border: "9px solid transparent",
                            borderRadius: "50%",
                            transform: " translate(-50%, -50%)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "190px",
                            width: "190px",
                            overflow: "hidden",
                            padding: "0px",
                          }}
                          className={Hero.offercardImgBox}
                        >
                          <img
                            src={item.img}
                            alt=""
                            style={{
                              zIndex: "999999999",
                              width: "150px!important",
                              height: "150px!important",
                            }}
                            className={Hero.offercardImg}
                          />
                        </Box>
                        <Box
                          sx={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            backgroundColor: "#FDCE77",
                            border: {
                              sm: "4px solid #000",
                              xs: "4px solid #fff",
                            },
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            right: { xs: "64px", sm: "95px" },
                            top: { xs: "82px", sm: "45px" },
                            zIndex: "9999999999",
                          }}
                          className={Hero.offercardRate}
                        >
                          <Typography
                            sx={{
                              fontSize: { sm: "18px", xs: "16px" },
                              fontFamily: "Poppins",
                              color: { xs: "#fff", sm: "#000" },
                            }}
                          >
                            {item.rate}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            paddingTop: "55px",
                          }}
                        >
                          <img src={item.IconImg} alt="" />
                          <Typography sx={{ marginLeft: "10px" }}>
                            <StarIcon
                              sx={{ color: "#FFBE1A", fontSize: "30px" }}
                            />
                          </Typography>
                          <Typography
                            sx={{
                              marginLeft: "13px",
                              fontSize: "20px",
                              color: "#fff",
                            }}
                          >
                            {`(${item.rating})`}
                          </Typography>
                        </Box>
                        <Box sx={{ paddingTop: "25px" }}>
                          <Typography
                            sx={{
                              color: "#F65F5F",
                              fontSize: "24px",
                              fontWeight: "500",
                              fontFamily: "Poppins",
                            }}
                          >
                            {item.title}
                          </Typography>
                        </Box>
                        <Box sx={{ paddingTop: "12px" }}>
                          <Typography
                            sx={{
                              color: "#fff",
                              fontSize: "16px",
                              fontFamily: "Poppins",
                              textAlign: "center",
                              lineHeight: "auto",
                              textTransform: "capitalize",
                            }}
                          >
                            {item.description}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: "-20px",
                            color: "#000",
                            zIndex: "9999999999999999",
                          }}
                          className={Hero.offercardButton}
                        >
                          <Button
                            sx={{
                              color: "#000",
                              textTransform: "capitalize",
                              width: "131px",
                              height: "45px",
                              backgroundColor: "#F65F5F",
                              borderRadius: "100px",
                              fontSize: "17px",
                              lineHeight: "auto",
                              fontFamily: "Poppins",
                            }}
                          >
                            Order Now
                          </Button>
                        </Box>
                      </Card>
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </Box>
      {/* end offercard */}
      {/* start service part */}
      <Box sx={{ padding: {xs:"50px 0px 80px",md:"250px 0px 80px",sm:"0px 0px 80px"}, backgroundColor: "#000" }}>
        <Container maxWidth="xl">
          <Grid container>
            <Grid xs={12} md={5}  sx={{
                display: "flex",
                justifyContent: {
                  xs: "flex-start",
                  sm: "center",
                  md: "flex-start",
                },
                alignItems: "center",
                flexDirection:"column"
              }}>
              <Box className={Hero.serviceleftside} >
                <img
                  src={pizza}
                  alt=""
                  style={{
                    position: "absolute",
                    bottom: "15px",
                    zIndex: "99",
                    backgroundSize: "cover",
                  }}
                  className={Hero.pizzaimage}
                />
                <img
                  src={chef}
                  alt=""
                  style={{ zIndex: "9999", position: "absolute", top: "-85px" }}
                  className={Hero.chefImage}
                />
                <img
                  src={particles}
                  alt=""
                  style={{
                    zIndex: "9999",
                    position: "absolute",
                    top: "-40px",
                    right: "5px",
                  }}
                  className={Hero.particlesImage}
                />
                <img
                  src={vector9}
                  alt=""
                  style={{
                    zIndex: "9999",
                    position: "absolute",
                    top: "-77px",
                    right: "-300px",
                  }}
                  className={Hero.vector9}
                />
              </Box>
            </Grid>
            <Grid
              xs={12}
              md={7}
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "flex-start",
                  sm: "center",
                  md: "flex-start",
                },
                alignItems: "flex-start",
                flexDirection:"column"
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "48px",
                  fontWeight: "Bold",
                  fontFamily: "Poppins",
                  lineHeight: "130%",
                  maxWidth: "452px",
                  paddingTop: "45px",
                  textAlign: "left",
                  paddingBottom: "30px",
                }}
                className={Hero.serviceHeading}
              >
                We are <span style={{ color: "#F54748" }}> more</span> than{" "}
                <span style={{ color: "#FDC55E" }}>multiple</span> service
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: {xs:"16px",sm:"18px"},
                  fontFamily: "Poppins",
                  lineHeight: "auto",
                  opacity: "80%",
                  paddingBottom: "20px",
                }}
              >
                This is a type of resturent which typically serves food and
                drink, in addition to light refreshments such as baked goods or
                snacks. The term comes frome the rench word meaning food
              </Typography>
              <Box>
                <Grid container>
                  {service.map((item) => {
                    return (
                      <Grid xs={12} sm={6}>
                        <>
                          <ul style={{ margin: "0px", padding: "15px 0px" }}>
                            <li
                              style={{
                                listStyle: "none",
                                display: "flex",
                                justifyContent: {
                                  xs: "flex-start",
                                  sm: "center",
                                  md: "flex-start",
                                },
                                alignItems: "center",
                              }}
                            >
                              <img
                                src={item.img}
                                alt=""
                                style={{ width: "26px", height: "26px" }}
                              />
                              <Typography
                                sx={{
                                  color: "#fff",
                                  marginLeft: "15px",
                                  fontSize: "18px",
                                  fontFamily: "Poppins",
                                  lineHeight: "auto",
                                  fontWeight: "Medium",
                                }}
                              >
                                {item.desc}
                              </Typography>
                            </li>
                          </ul>
                        </>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
              <Box sx={{ paddingTop: "30px" }}>
                <Button
                  sx={{
                    textTransform: "capitalize",
                    backgroundColor: "#F65F5F",
                    color: "#000",
                    fontSize: "18px",
                    borderRadius: "100px",
                    fontFamily: "Poppins",
                    padding: "10px 25px",
                    fontWeight: "Regular",
                  }}
                >
                  About Us
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
