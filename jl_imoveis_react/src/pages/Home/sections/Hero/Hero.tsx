import {Button, Container, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.png"
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh",
    }))

    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%",
    }))

    return (
      <>
        <StyledHero>
          <Container maxWidth="lg">
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <StyledImg src={Avatar} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography color="primary" variant="h1" textAlign="center">
                Josefa Lopes
              </Typography>
              <Typography color="primary" variant="h2" textAlign="center">
                Corretora de Imóveis
              </Typography>
              <Typography color="primary" variant="h4" textAlign="center">
                Entre em contato comigo
              </Typography>
              <Grid container display="flex" justifyContent="center">
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <Button>
                    <WhatsAppIcon />
                    Whatsapp
                  </Button>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <Button>
                    <MailOutlineIcon />
                    Email
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          </Box>
          </Container>
        </StyledHero>  
      </>
    )
  }
  
  export default Hero
  