import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import CssBaseline from "@mui/material/CssBaseline"
import Grid from "@mui/material/Grid"
import StarIcon from "@mui/icons-material/StarBorder"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import GlobalStyles from "@mui/material/GlobalStyles"
import Container from "@mui/material/Container"
import LogoImage from "./assets/logo.webp"

const tiers = [
    {
        title: "Standard",
        price: "15",
        description: ["2 urządzenia", "10 GB przestrzeni", "Pomoc techniczna"],
        buttonText: "Wybieram",
        buttonVariant: "outlined"
    }
]

function PricingContent() {
    return (
        <React.Fragment>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }} />
            <CssBaseline />
            <Box className="app-container"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                }}
            >
                <Grid item>
                    <AppBar
                        position='static'
                        color='default'
                        elevation={0}
                        sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
                    >
                        <Toolbar sx={{ flexWrap: "nowrap", justifyContent: "space-between" }}>
                            <Box
                                sx={{
                                    p: 1,
                                    maxWidth: {
                                        xs: 120,
                                        sm: 150,
                                        md: 250
                                    },
                                    objectFit: "contain"
                                }}
                            >
                                <picture>
                                    <source srcSet={LogoImage} />
                                    <img src={LogoImage} alt='Devmentor.pl logo' style={{ width: "100%" }} />
                                </picture>
                            </Box>
                            <Box>
                                <Grid container alignItems='center' justifyContent='end'>
                                    <Grid item>
                                        <Button href='#' variant='outlined' sx={{ my: 1, mx: 1 }}>
                                            Zaloguj się
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Grid>

                <Grid item>
                    <Container disableGutters maxWidth='sm' component='main' sx={{ py: 2, px: 1 }}>
                        <Typography component='h1' variant='h4' align='center' color='text.primary' gutterBottom>
                            Twój pakiet
                        </Typography>
                        <Typography variant='h5' align='center' color='text.secondary' component='span'>
                            Wybierz swój nowy pakiet, aby w pełni wykorzystać potencjał naszej aplikacji!
                        </Typography>{" "}
                        <Typography variant='h5' component='span' color='primary'>
                            Skorzystaj z darmowego okresu próbnego!
                        </Typography>
                    </Container>
                </Grid>

                <Grid item>
                    <Container maxWidth='md' component='main'>
                        <Grid container spacing={5} alignItems='flex-end'>
                            {tiers.map(tier => (
                                // Enterprise card is full width at sm breakpoint
                                <Grid item key={tier.title} xs={12}>
                                    <Card>
                                        <CardHeader
                                            title={tier.title}
                                            titleTypographyProps={{ align: "center" }}
                                            action={tier.title === "Pro" ? <StarIcon /> : null}
                                            subheaderTypographyProps={{
                                                align: "center"
                                            }}
                                            sx={{
                                                backgroundColor: theme =>
                                                    theme.palette.mode === "light"
                                                        ? theme.palette.grey[200]
                                                        : theme.palette.grey[700]
                                            }}
                                        />
                                        <CardContent>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "baseline"
                                                }}
                                            >
                                                <Typography component='h2' variant='h3' color='text.primary'>
                                                    {tier.price}zł
                                                </Typography>
                                                <Typography variant='h6' color='text.secondary'>
                                                    /msc
                                                </Typography>
                                            </Box>
                                            <ul>
                                                {tier.description.map(line => (
                                                    <Typography
                                                        component='li'
                                                        variant='subtitle1'
                                                        align='center'
                                                        key={line}
                                                    >
                                                        {line}
                                                    </Typography>
                                                ))}
                                            </ul>
                                        </CardContent>
                                        <CardActions>
                                            <Button fullWidth variant={tier.buttonVariant as "outlined" | "contained"}>
                                                {tier.buttonText}
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Grid>

                <Grid item>
                    <Box
                        color='default'
                        component='footer'
                        sx={{
                            width: "100%",
                            py: 0.5,
                            borderTop: theme => `1px solid ${theme.palette.divider}`
                        }}
                    >
                        <Grid
                            container
                            alignItems='center'
                            justifyContent='end'
                            spacing={2}
                            sx={{
                                width: "100%"
                            }}
                        >
                            <Grid item>
                                <Button variant='outlined'>Powrót</Button>
                            </Grid>
                            <Grid item>
                                <Button variant='contained'>Darmowy okres próbny</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default function Pricing() {
    return <PricingContent />
}
