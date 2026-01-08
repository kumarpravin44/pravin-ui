import React from "react";
import { Box, Container, Typography, Stack, Button, Chip } from "@mui/material";
import { motion } from "framer-motion";
import heroBanner from "../assets/hero-banner.png"; // place your image in src/assets/

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
    })
};

export default function Hero() {
    return (
        <Box
            sx={{
                position: "relative",
                minHeight: { xs: 420, md: 520 },
                display: "flex",
                alignItems: "center",
                color: "white",
                backgroundImage: `url(${heroBanner})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            {/* Gradient overlay */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 35%, rgba(0,0,0,0.25) 100%)"
                }}
            />
            {/* Tint overlay for brand feel */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(90deg, rgba(79,70,229,0.20) 0%, rgba(6,182,212,0.15) 100%)",
                    mixBlendMode: "soft-light"
                }}
            />

            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                <Stack spacing={3} alignItems="flex-start">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                        <Chip label="Available for freelance" color="secondary" variant="filled" />
                    </motion.div>

                    <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1}>
                        <Typography variant="h3" sx={{ lineHeight: 1.1 }}>
                            Crafting clean, accessible, and performant{" "}
                            <Typography component="span" color="secondary" sx={{ fontWeight: 800 }}>
                                UI
                            </Typography>
                        </Typography>
                    </motion.div>

                    <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2}>
                        <Typography variant="body1" sx={{ maxWidth: 760, color: "rgba(255,255,255,0.85)" }}>
                            I am Pravin Kumar, a Lead UI Developer with over 12+ years of experience in web design and front-end development. I specialize in creating responsive, user-centric web interfaces and have successfully delivered 100+ projects across diverse domains. My technical expertise includes Photoshop, HTML5, CSS3, JavaScript, jQuery, React, Vite, and Material UI. I build fast, responsive interfaces
                            with polished UX, scalable architecture, and maintainable code.
                        </Typography>
                    </motion.div>

                    <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3}>
                        <Stack direction="row" spacing={2}>
                            <Button variant="contained" size="large" href="#projects">View projects</Button>
                            <Button variant="outlined" size="large" href="#contact" color="secondary">Get in touch</Button>
                        </Stack>
                    </motion.div>
                </Stack>
            </Container>
        </Box>
    );
}