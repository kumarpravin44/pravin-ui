import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent, Stack, LinearProgress, Chip } from "@mui/material";
import { motion } from "framer-motion";

const categories = [
    {
        title: "Core Technical Skills",
        skills: [
            { name: "HTML5", level: 100 },
            { name: "CSS3", level: 95 },
            { name: "Sass", level: 60 },
            { name: "Less", level: 60 },
            { name: "JavaScript (ES6+)", level: 60 }
        ]
    },
    {
        title: "Modern JS frameworks",
        skills: [
            { name: "React", level: 70 },
            { name: "Angular", level: 70 },
            { name: "Vue", level: 80 },
            { name: "Vite", level: 80 }
        ]
    },
    {
        title: "CSS frameworks",
        skills: [
            { name: "Tailwind CSS", level: 82 },
            { name: "Bootstrap", level: 84 },
            { name: "Material UI", level: 78 },
            { name: "Foundation", level: 78 },
            { name: "Bulma", level: 78 }
        ]
    },
    {
        title: "UI / UX Expertise",
        skills: [
            { name: "Figma / Adobe XD", level: 82 },
            { name: "Visual/UI Design", level: 84 },
            { name: "Responsive Design", level: 78 },
            { name: "Interaction Design", level: 78 },
            { name: "User Research", level: 78 }
        ]
    },


    {
        title: "Bonus Skills",
        skills: [
            { name: "TypeScript", level: 82 },
            { name: "Next.js / SSR", level: 84 },
            { name: "Micro-frontend architecture", level: 78 },

            { name: "PWA knowledge", level: 78 }
        ]
    },
    {
        title: "Soft Skills",
        skills: [
            { name: "Strong communication skills", level: 82 },
            { name: "Ownership & accountability", level: 84 },
            { name: "Time management", level: 78 },
            { name: "Requirement analysis", level: 78 },
            { name: "Stakeholder coordination", level: 78 }
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
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {categories.map((cat, idx) => (
                        <Grid key={cat.title} item size={{ xs: 6, sm: 4, md: 2 }}>
                            <motion.div custom={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={item}>
                                <Card sx={{ borderRadius: 1, boxShadow: 3 }}>
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