import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Stack, Button } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

export default function Navbar({ mode, onToggle }) {
    return (
        <AppBar
            elevation={0}
            color="transparent"
            position="sticky"
            sx={{
                backdropFilter: "blur(8px)",
                borderBottom: (theme) =>
                    `1px solid ${theme.palette.mode === "light" ? "#E2E8F0" : "rgba(255,255,255,0.08)"}`
            }}
        >
            <Toolbar sx={{ maxWidth: 1200, mx: "auto", width: "100%" }}>
                <Typography variant="h6" sx={{ fontWeight: 700, flexGrow: 1 }}>
                    Pravin • Lead UI Developer
                </Typography>
                <Stack direction="row" spacing={1} sx={{ display: { xs: "none", md: "flex" } }}>
                    <Button href="#skills">Skills</Button>
                    <Button href="#projects">Projects</Button>
                    <Button href="tel:+919971411966">Call Me</Button>
                    <Button href="#contact" variant="contained">Contact</Button>
                </Stack>
                <IconButton aria-label="toggle theme" onClick={onToggle} sx={{ ml: 1 }}>
                    {mode === "light" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}