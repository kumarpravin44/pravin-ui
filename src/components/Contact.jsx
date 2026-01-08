import React from "react";
import { Box, Container, Typography, Grid, TextField, Button, Paper, Stack, IconButton } from "@mui/material";


export default function Contact() {
    const [form, setForm] = React.useState({ name: "", email: "", message: "" });
    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        alert("Thanks! I’ll get back to you soon.");
    };

    return (
        <Box id="contact" sx={{ py: 8 }}>
            <Container maxWidth="lg">
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>Contact</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    Have a project in mind or want to collaborate? Let’s talk.
                </Typography>
                <Paper
                    elevation={0}
                    sx={{
                        p: { xs: 2.5, md: 4 },
                        borderRadius: 3,
                        backdropFilter: "blur(8px)",
                        backgroundColor: (theme) =>
                            theme.palette.mode === "light" ? "rgba(255,255,255,0.9)" : "rgba(17,24,39,0.6)",
                        border: (theme) =>
                            `1px solid ${theme.palette.mode === "light" ? "#E2E8F0" : "rgba(255,255,255,0.1)"}`
                    }}
                >
                    <form onSubmit={onSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField label="Name" name="name" value={form.name} onChange={onChange} fullWidth required />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField type="email" label="Email" name="email" value={form.email} onChange={onChange} fullWidth required />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Message" name="message" value={form.message} onChange={onChange} fullWidth multiline minRows={4} required />
                            </Grid>
                            <Grid item xs={12}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">

                                    <Button type="submit" variant="contained">Send message</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </Box>
    );
}