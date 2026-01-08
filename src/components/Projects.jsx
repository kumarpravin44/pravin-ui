import React from "react";
import {
    Box, Container, Typography, Grid, Card, CardContent, CardActionArea,
    CardMedia, Chip, Stack, Button, Divider
} from "@mui/material";
import { motion } from "framer-motion";
import proj1 from "../assets/360realtors.png";
import proj2 from "../assets/project-2.png";
import proj3 from "../assets/project-3.png";
import proj4 from "../assets/project-4.png";
import proj5 from "../assets/project-5.png";
import proj6 from "../assets/project-6.png";
import proj7 from "../assets/project-7.png";
import proj8 from "../assets/project-8.png";

const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
    })
};

const projects = [
    {
        title: "Background Remover App",
        desc: "Drag-and-drop upload, transparency preview, progress feedback, and theme toggle.",
        image: proj1,
        tags: ["React", "MUI", "Worker", "Canvas"],
        demo: "#",
        repo: "#"
    },
    {
        title: "Portfolio UI Kit",
        desc: "Reusable components, design tokens, responsive grid, and accessible forms.",
        image: proj2,
        tags: ["Design System", "Accessibility"],
        demo: "#",
        repo: "#"
    },
    {
        title: "Realtime Dashboard",
        desc: "Charts, sockets, skeleton loading, and optimistic UI updates.",
        image: proj3,
        tags: ["Vite", "React Query", "MUI"],
        demo: "#",
        repo: "#"
    },
    {
        title: "Realtime Dashboard",
        desc: "Charts, sockets, skeleton loading, and optimistic UI updates.",
        image: proj4,
        tags: ["Vite", "React Query", "MUI"],
        demo: "#",
        repo: "#"
    },
    {
        title: "Realtime Dashboard",
        desc: "Charts, sockets, skeleton loading, and optimistic UI updates.",
        image: proj5,
        tags: ["Vite", "React Query", "MUI"],
        demo: "#",
        repo: "#"
    },
    {
        title: "Realtime Dashboard",
        desc: "Charts, sockets, skeleton loading, and optimistic UI updates.",
        image: proj6,
        tags: ["Vite", "React Query", "MUI"],
        demo: "#",
        repo: "#"
    }
    ,
    {
        title: "Realtime Dashboard",
        desc: "Charts, sockets, skeleton loading, and optimistic UI updates.",
        image: proj7,
        tags: ["Vite", "React Query", "MUI"],
        demo: "#",
        repo: "#"
    }
    ,
    {
        title: "Realtime Dashboard",
        desc: "Charts, sockets, skeleton loading, and optimistic UI updates.",
        image: proj8,
        tags: ["Vite", "React Query", "MUI"],
        demo: "#",
        repo: "#"
    }
];

export default function Projects() {
    return (
        <Box id="projects" sx={{ py: 8 }}>
            <Container maxWidth="lg">
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>Projects</Typography>
                    <Button variant="text" href="https://github.com/" target="_blank">More on GitHub</Button>
                </Stack>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                    Selected work showcasing performance, accessibility, and delightful UX.
                </Typography>

                <Grid container spacing={5}>
                    {projects.map((p, index) => (
                        <Grid key={p.title} item xs={12} sm={6} md={4}>
                            <motion.div
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.25 }}
                                variants={cardVariants}
                            >
                                <Card
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        height: "100%",
                                        overflow: "hidden",
                                        borderRadius: 0,
                                        transition: "transform 0.28s ease, box-shadow 0.28s ease",
                                        "&:hover": { transform: "translateY(-6px)", boxShadow: 6 }
                                    }}
                                >
                                    <CardActionArea href={p.demo} target="_blank" rel="noopener">
                                        <Box sx={{ position: "relative" }}>
                                            <CardMedia
                                                component="img"
                                                height="250"
                                                image={p.image}
                                                alt={p.title}
                                                sx={{ objectFit: "cover" }}
                                            />
                                            <Box
                                                sx={{
                                                    position: "absolute",
                                                    inset: 0,
                                                    background:
                                                        "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))"
                                                }}
                                            />
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    position: "absolute",
                                                    bottom: 12,
                                                    left: 16,
                                                    color: "white",
                                                    fontWeight: 700,
                                                    textShadow: "0 2px 8px rgba(0,0,0,0.3)"
                                                }}
                                            >
                                                {p.title}
                                            </Typography>
                                        </Box>

                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography variant="body2" sx={{ mb: 1.5 }}>
                                                {p.desc}
                                            </Typography>

                                            <Stack direction="row" spacing={1} flexWrap="wrap">
                                                {p.tags.map((t, i) => (
                                                    <Chip
                                                        key={i}
                                                        label={t}
                                                        size="small"
                                                        color={i % 2 === 0 ? "primary" : "secondary"}
                                                        variant="outlined"
                                                    />
                                                ))}
                                            </Stack>

                                            <Divider sx={{ my: 2 }} />

                                            <Stack direction="row" spacing={1}>
                                                <Button size="small" variant="contained" href={p.demo} target="_blank">
                                                    Demo
                                                </Button>
                                                <Button size="small" variant="outlined" href={p.repo} target="_blank">
                                                    Code
                                                </Button>
                                            </Stack>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}