import React from "react";
import { Box, Container, Typography, Stack, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
    return (
        <Box sx={{ py: 4 }}>
            <Container maxWidth="lg">
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} Pravin • Lead UI Developer
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <IconButton href="https://github.com/kumarpravin44" target="_blank" aria-label="GitHub">
                            <GitHubIcon />
                        </IconButton>
                        <IconButton href="https://www.linkedin.com/in/pravin-kumar-24773334/" target="_blank" aria-label="LinkedIn">
                            <LinkedInIcon />
                        </IconButton>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}