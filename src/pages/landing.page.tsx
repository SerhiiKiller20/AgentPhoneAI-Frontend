import { Container, Stack, Typography } from "@mui/material";

const LandingPage = () => {
  return (
    <>
      <Container sx={{ py: 4 }}>
        <Stack height="calc(100vh - 150px)" justifyContent="center" spacing={5}>
          <Typography variant="h1" fontWeight={600} textAlign="center">
            Life can be hard
          </Typography>
          <Typography variant="h4" textAlign="center">
            Make it easier.
            <br />
            Please have an amazing call with AI
          </Typography>
          <Typography variant="h5" textAlign="center" color="red">
            This app allows you to have a voice conversation with a bot using
            gpt api
          </Typography>
        </Stack>
      </Container>
    </>
  );
};

export default LandingPage;
