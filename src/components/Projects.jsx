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
        title: "360 Realtors LLP",
        desc: "360 Realtors is positioned as India’s leading property consulting company, helping users find residential and commercial properties, offering home loan consultation, NRI services, legal and Vastu consultation, and after‑sales assistance.",
        image: proj1,
        tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "PHP", "MySQL", "SQL Server"],
        demo: "https://www.360realtors.com/",
        repo: ""
    },
    {
        title: "Holistic Healing",
        desc: "Innate Heal positions itself as a holistic healing platform, offering articles, resources, and expert guidance on nutrition, supplements, mental health, women’s health, elderly care, and integrative approaches to chronic conditions.",
        image: proj2,
        tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "MySQL/MariaDB"],
        demo: "https://innateheal.com/",
        repo: ""
    },
    {
        title: "Axon Developers",
        desc: "Axon Developers positions itself as a new‑age real estate development company based in Gurugram, India. It showcases residential, commercial, and retail projects, emphasizing innovation, sustainability, and design excellence.",
        image: proj3,
        tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "MySQL/MariaDB"],
        demo: "https://www.axondevelopers.com/",
        repo: ""
    },
    {
        title: "360 CRM",
        desc: "360CRM is part of the 360 Realtors group, designed to help manage customer relationships, property leads, and sales processes more effectively.",
        image: proj4,
        tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "JQuery", "CodeIgniter"],
        demo: "https://www.360crm.in/",
        repo: "#"
    },
    {
        title: "360 FRXNL",
        desc: "Provides information and access to fractional real estate investments, enabling multiple investors to co‑own premium properties.",
        image: proj5,
        tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "JQuery", "PHP", "MySQL/MariaDB", "Photoshop"],
        demo: "https://360frxnl.com/",
        repo: "#"
    },
    {
        title: "Indsource",
        desc: "Showcases Indsource’s outsourcing solutions, including customer service, back‑office support, and IT services",
        image: proj6,
        tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "JQuery", "PHP", "MySQL"],
        demo: "https://indsource.net/",
        repo: "#"
    }
    ,
    {
        title: "Times Property",
        desc: "Times Property is a real estate-focused platform offering the latest property news, market insights, and developer information across major Indian cities.",
        image: proj7,
        tags: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL/PostgreSQL", "Photoshop"],
        demo: "https://timesproperty.com/",
        repo: "#"
    }
    ,
    {
        title: "360 XLR8",
        desc: "- It is promoted as India’s biggest referral program for real estate, allowing users to earn commissions by referring property buyers or building referral teams.",
        image: proj8,
        tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "MySQL"],
        demo: "https://www.360xlr8.com/",
        repo: "#"
    }
];

export default function Projects() {
    return (
        <Box id="projects" sx={{ py: 8 }}>
            <Container maxWidth="lg">
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>Projects</Typography>
                    {/* <Button variant="text" href="https://github.com/" target="_blank">More on GitHub</Button> */}
                </Stack>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                    Selected work showcasing performance, accessibility, and delightful UX.
                </Typography>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {projects.map((p, index) => (
                        <Grid key={p.title} item size={{ xs: 12, sm: 4, md: 4 }} sx={{ mb: 2 }}>
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
                                                height="200"
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
                                                        className="chip-spacing"

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
                                                {/* <Button size="small" variant="outlined" href={p.repo} target="_blank">
                                                    Code
                                                </Button> */}
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