import {Button, Container, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.png"
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Hero = () => {

    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
    }))

    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%",
    }))

    const StyledButton = styled("button")(() => ({
      backgroundColor: "#232323",
      color: "white", // Azul padrão (pode ajustar conforme necessário)
      border: "2px solid white",
      borderRadius: "4px",
      padding: "10px 20px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "all 0.3s ease-in-out",
      
      "&:hover": {
        backgroundColor: "green",
        color: "white",
      }  
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
              <Typography color="primary.contrastText" variant="h1" textAlign="center">
                Josefa Lopes
              </Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign="center">
                Corretora de Imóveis
              </Typography>
              <Typography color="primary.contrastText" variant="h4" textAlign="center">
                Entre em contato comigo
              </Typography>
              <Grid container display="flex" justifyContent="center">
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton>
                    <WhatsAppIcon />
                    <Typography>Whatsapp</Typography>
                  </StyledButton>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton>
                    <MailOutlineIcon />
                    <Typography>Email</Typography>
                  </StyledButton>
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
  