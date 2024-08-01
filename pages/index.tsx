import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Copyright from "../src/Copyright"
import Header from "../components/header"
import Link from "../src/Link"
import ProTip from "../src/ProTip"
import Typography from "@mui/material/Typography"

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Header />
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI - Next.js example in TypeScript
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}
