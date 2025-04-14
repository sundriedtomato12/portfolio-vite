import { Box, Paper, Typography } from "@mui/material";
import { colorPalette } from "../styles/colorTheme";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

export function Slide(props: {
  isDesktop: boolean;
  setIsSlideClicked: (arg0: boolean) => void;
  name: string;
  description: string;
  thumbnail?: string;
  url?: string;
  githubUrl?: string;
}) {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Paper
        sx={{
          backgroundColor: colorPalette.slate.lightest,
          height: props.isDesktop ? "48vh" : "34vh",
          width: props.isDesktop ? "56vw" : "100%",
          padding: "14px 18px 14px 18px",
          "&:hover": { cursor: "pointer" },
        }}
        onClick={() => {
          props.setIsSlideClicked(true);
        }}
      >
        <Box sx={{ mb: props.isDesktop ? "12px" : "8px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                fontFamily: "Fira Code",
                fontSize: props.isDesktop ? "20px" : "16px",
                fontWeight: 700,
              }}
            >
              {props.name}
            </Typography>
            {props.githubUrl != null && (
              <GitHubIcon
                sx={{
                  "&:hover": {
                    color: colorPalette.green.light,
                    cursor: "pointer",
                  },
                  fontSize: props.isDesktop ? "24px" : "18px",
                  fontWeight: "700",
                  color: colorPalette.slate.dark,
                }}
                onClick={() => window.open(props.githubUrl, "_blank")}
              />
            )}
            {props.url != null && (
              <LaunchIcon
                sx={{
                  "&:hover": {
                    color: colorPalette.green.light,
                    cursor: "pointer",
                  },
                  fontSize: props.isDesktop ? "24px" : "18px",
                  fontWeight: "700",
                  color: colorPalette.slate.dark,
                }}
                onClick={() => window.open(props.url, "_blank")}
              />
            )}
          </Box>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: props.isDesktop ? "16px" : "14px",
            }}
          >
            {props.description}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: props.isDesktop ? "33vh" : "22vh",
          }}
        >
          <Box
            component="img"
            src={props.thumbnail}
            height="100%"
            width="100%"
            sx={{ borderRadius: "4px" }}
          />
        </Box>
      </Paper>
    </Box>
  );
}
