import { useRef, useState } from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  Link,
} from "@mui/material";
import { NavBar } from "../components/NavBar";
import Profile from "../assets/images/profile.jpeg";
import { colorPalette } from "../styles/colorTheme";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { SocialsBar } from "../components/SocialsBar";
import { projects, type ProjectType } from "../data/projects";
import { ProjectDialog } from "../components/ProjectDialog";
import { Slide } from "../components/Slide";
import { handleScroll } from "../assets/helper/handleScroll";

export function MainPage() {
  const [isSlideClicked, setIsSlideClicked] = useState<boolean>(false);
  const [slideClicked, setSlideClicked] = useState<ProjectType>(projects[0]);
  const [currentPage, setCurrentPage] = useState<string>("home");
  const ref = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width:800px)");

  function GreenArrowIcon() {
    return <ArrowRightIcon sx={{ color: colorPalette.green.light }} />;
  }

  function handleDialogClose(): void {
    setIsSlideClicked(false);
  }

  const projectSlides = projects.map((project) => (
    <SwiperSlide key={project.name}>
      <Slide
        isDesktop={isDesktop}
        setIsSlideClicked={setIsSlideClicked}
        name={project.name}
        description={project.short}
        thumbnail={project.thumbnail}
        url={project.url}
        githubUrl={project.githubUrl}
      />
    </SwiperSlide>
  ));

  return (
    <Box style={{ width: "100%" }}>
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Box
        ref={ref}
        onScroll={() => {
          handleScroll(ref, setCurrentPage);
        }}
        className="main-page"
        style={{
          height: "100vh",
          backgroundColor: colorPalette.navy.dark,
          overflowY: "scroll",
          padding: isDesktop ? "0px 24px 0px 24px" : "0px 10px 0px 10px",
        }}
      >
        <Box
          id="home"
          height={"100vh"}
          sx={{
            paddingX: "10vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "center",
            color: colorPalette.white,
            maxWidth: "1200px",
          }}
        >
          <Box sx={{ display: isDesktop ? "flex" : "block" }}>
            <Typography
              sx={{
                fontSize: isDesktop ? "32px" : "24px",
                color: colorPalette.green.light,
                fontFamily: "Roboto",
                marginRight: "12px",
              }}
            >
              Hey! My name is
            </Typography>
            <Typography
              sx={{
                fontSize: isDesktop ? "32px" : "24px",
                color: colorPalette.green.light,
                fontFamily: "Fira Code",
              }}
            >
              Felicia Tan,
            </Typography>
          </Box>
          <Box
            sx={{ marginBottom: "12px", display: isDesktop ? "flex" : "block" }}
          >
            <Typography
              sx={{
                fontSize: isDesktop ? "32px" : "24px",
                color: colorPalette.green.light,
                fontFamily: "Roboto",
                marginRight: "12px",
              }}
            >
              but you can call me
            </Typography>
            <Typography
              sx={{
                fontSize: isDesktop ? "32px" : "24px",
                color: colorPalette.green.light,
                fontFamily: "Fira Code",
                fontWeight: 700,
              }}
            >
              Fel.
            </Typography>
          </Box>
          <Typography sx={{ fontSize: "16px", fontFamily: "Roboto" }}>
            I&apos;m a Full Stack Software Engineer based in Singapore with a
            passion for exploring new technologies and creating innovative
            digital products. With a keen eye for design, I&apos;m passionate
            about building user-friendly, reliable, and scalable solutions, and
            I take pride in bringing fresh ideas to life.
          </Typography>
        </Box>
        <Box
          id="about"
          height={isDesktop ? "100vh" : "fit-content"}
          sx={{
            pb: isDesktop ? 0 : "16vh",
            paddingX: "10vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "left",
            color: colorPalette.white,
            maxWidth: "1000px",
          }}
        >
          <Typography
            sx={{
              marginTop: isDesktop ? "15vh" : "10vh",
              fontSize: isDesktop ? "32px" : "24px",
              fontWeight: 700,
              fontFamily: "Fira Code",
              color: colorPalette.green.light,
            }}
          >
            About me
          </Typography>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: isDesktop ? "row-reverse" : "column",
              alignItems: "center",
            }}
            spacing={isDesktop ? 6 : undefined}
          >
            <Grid
              size={{ xs: isDesktop ? 3 : undefined }}
              sx={{
                display: "flex",
                justifyContent: isDesktop ? "right" : "center",
              }}
            >
              <Box
                component="img"
                className="profile"
                src={Profile}
                sx={{
                  marginTop: isDesktop ? "0px" : "16px",
                  height: "clamp(120px, 20vh, 160px)",
                  width: "auto",
                  overflow: "clip",
                  borderRadius: "100px",
                }}
              />
            </Grid>
            <Grid size={{ xs: isDesktop ? 9 : undefined }}>
              <Typography sx={{ fontSize: "16px", fontFamily: "Roboto" }}>
                Hello! I&apos;m Fel. My interest in web development began in
                high school when I learnt how to customise my Blogspot.com site
                — tweaking things like the cursor, fonts, and chatbox design. In
                2021, I decided to pursue software engineering as a career by
                enrolling in a bootcamp at{" "}
                <Link
                  className="text-link"
                  href="https://www.rocketacademy.co"
                  target="_blank"
                  rel="noreferrer"
                >
                  Rocket Academy.
                </Link>{" "}
                Since graduating, I&apos;ve worked on various personal projects,
                contributed to impactful products at{" "}
                <Link
                  className="text-link"
                  href="https://www.circles.life"
                  target="_blank"
                  rel="noreferrer"
                >
                  Circles.Life
                </Link>
                , and I am currently working on some really exciting digital
                products at{" "}
                <Link
                  className="text-link"
                  href="https://pixelmon.ai"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pixelmon
                </Link>
                .
              </Typography>
              <Typography
                sx={{ fontSize: "16px", fontFamily: "Roboto", my: "6px" }}
              >
                Here are some technologies that I&apos;ve been working with
                recently:
              </Typography>
              <Grid
                container
                size={12}
                sx={{ display: "flex", flexDirection: "row" }}
              >
                <Stack sx={{ marginRight: "24px" }}>
                  <Typography sx={{ display: "flex" }}>
                    <GreenArrowIcon />
                    Typescript
                  </Typography>
                  <Typography sx={{ display: "flex" }}>
                    <GreenArrowIcon />
                    NodeJs
                  </Typography>
                  <Typography sx={{ display: "flex" }}>
                    <GreenArrowIcon />
                    NestJs
                  </Typography>
                </Stack>
                <Stack>
                  <Typography sx={{ display: "flex" }}>
                    <GreenArrowIcon />
                    React
                  </Typography>
                  <Typography sx={{ display: "flex" }}>
                    <GreenArrowIcon />
                    NextJs
                  </Typography>
                  <Typography sx={{ display: "flex" }}>
                    <GreenArrowIcon />
                    Solidity
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box
          id="projects"
          height={"100vh"}
          sx={{
            paddingX: "10vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "left",
            color: colorPalette.white,
            maxWidth: "1200px",
          }}
        >
          <Typography
            sx={{
              mt: isDesktop ? "15vh" : "10vh",
              mb: "16px",
              fontSize: isDesktop ? "32px" : "24px",
              fontWeight: 700,
              fontFamily: "Fira Code",
              color: colorPalette.green.light,
            }}
          >
            Projects
          </Typography>
          <Typography
            sx={{ fontSize: "16px", fontFamily: "Roboto", mb: "20px" }}
          >
            {isDesktop
              ? "Check out some stuff I built! Click on each slide to view more details."
              : "Swipe to view more projects, or tap on each slide to view more details."}
          </Typography>
          <Box height={"60vh"}>
            <Swiper
              direction={"horizontal"}
              slidesPerView={1}
              navigation={!!isDesktop}
              pagination={{ clickable: true }}
              centeredSlides={true}
              modules={[Pagination, Navigation]}
              className="project-swiper"
              onSlideChangeTransitionStart={(slide) => {
                setSlideClicked(projects[slide.activeIndex]);
              }}
            >
              {projectSlides}
            </Swiper>
          </Box>
          <ProjectDialog
            isSlideClicked={isSlideClicked}
            isDesktop={isDesktop}
            handleDialogClose={handleDialogClose}
            name={slideClicked.name}
            description={slideClicked.description}
            video={slideClicked.video}
            url={slideClicked.url}
            githubUrl={slideClicked.githubUrl}
            technologies={slideClicked.technologies}
          />
        </Box>
        <Box
          id="contact"
          height={"72vh"}
          sx={{
            paddingX: "10vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            color: colorPalette.white,
            maxWidth: "1200px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "left",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                marginTop: isDesktop ? "15vh" : "8vh",
                fontSize: "28px",
                fontWeight: 700,
                fontFamily: "Fira Code",
                color: colorPalette.green.light,
              }}
            >
              Get in touch
            </Typography>
            <Typography
              sx={{ mt: "14px", fontSize: "16px", fontFamily: "Roboto" }}
            >
              Feel free to drop me an email or message me on LinkedIn if
              you&apos;d like to connect!
            </Typography>
            <Box sx={{ mt: "14px" }}>
              <MailIcon
                className="icon"
                sx={{ fontSize: "32px", mr: "12px" }}
                onClick={() =>
                  window.open("mailto:felicia.tanwp@gmail.com", "_blank")
                }
              />
              <LinkedInIcon
                className="icon"
                sx={{ fontSize: "32px", mr: "12px" }}
                onClick={() =>
                  window.open("https://www.linkedin.com/in/-fel", "_blank")
                }
              />
              <GitHubIcon
                sx={{ fontSize: "32px" }}
                className="icon"
                onClick={() =>
                  window.open(
                    "https://www.github.com/sundriedtomato12",
                    "_blank",
                  )
                }
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pb: "10px",
            }}
          >
            <Typography
              fontSize={isDesktop ? "13px" : "10px"}
              fontFamily={"Fira Code"}
              color={colorPalette.slate.light}
            >
              Built by Felicia Tan, 2025
            </Typography>
            <GitHubIcon
              className="icon"
              sx={{
                fontSize: isDesktop ? "14px" : "10px",
                color: colorPalette.slate.light,
                ml: "6px",
                mb: "2px",
              }}
              onClick={() =>
                window.open(
                  "https://github.com/sundriedtomato12/portfolio",
                  "_blank",
                )
              }
            />
          </Box>
        </Box>
      </Box>
      <SocialsBar />
    </Box>
  );
}
