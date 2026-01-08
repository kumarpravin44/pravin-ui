import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent, Stack, LinearProgress, Chip } from "@mui/material";
import { motion } from "framer-motion";

const categories = [
    {
        title: "Frontend",
        skills: [
            { name: "React", level: 90 },
            { name: "TypeScript", level: 82 },
            { name: "Material UI", level: 90 }
        ]
    },
    {
        title: "Performance & Data",
        skills: [
            { name: "Vite", level: 86 },
            { name: "React Query", level: 80 },
            { name: "Optimization", level: 85 }
        ]
    },
    {
        title: "UX & Accessibility",
        skills: [
            { name: "A11y", level: 82 },
            { name: "Design Systems", level: 84 },
            { name: "Framer Motion", level: 78 }
        ]
    }
];

const item = {
    hidden: { opacity: 0, y: 18 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.45 }
    })
};

export default function Skills() {
    return (
        <Box id="skills" sx={{ py: 8 }}>
            <Container maxWidth="lg">
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>Skills</Typography>
                <Grid container spacing={4}>
                    {categories.map((cat, idx) => (
                        <Grid key={cat.title} item xs={12} md={4}>
                            <motion.div custom={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={item}>
                                <Card sx={{ borderRadius: 3 }}>
                                    <CardContent>
                                        <Stack spacing={1.5}>
                                            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                                <Chip label={cat.title} color="primary" variant="outlined" />
                                            </Stack>
                                            {cat.skills.map((s, i) => (
                                                <Stack key={s.name} spacing={0.5}>
                                                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>{s.name}</Typography>
                                                    <LinearProgress
                                                        variant="determinate"
                                                        value={s.level}
                                                        sx={{
                                                            height: 8,
                                                            borderRadius: 10,
                                                            "& .MuiLinearProgress-bar": { transition: "width 0.8s ease" }
                                                        }}
                                                    />
                                                    <Typography variant="caption" color="text.secondary">{s.level}%</Typography>
                                                </Stack>
                                            ))}
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}