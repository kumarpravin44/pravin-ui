import React from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    Button,
    Paper,
} from "@mui/material";

export default function Contact() {
    const [form, setForm] = React.useState({
        name: "",
        email: "",
        message: "",
    });

    const onChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    return (
        <Box id="contact" sx={{ py: 8 }}>
            <Container maxWidth="sm">
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
                    Contact
                </Typography>
                <Paper sx={{ p: 3, borderRadius: 2 }}>
                    {/* Formspree endpoint */}
                    <form
                        action="https://formspree.io/f/xwvvekrw" // 👉 replace with your Formspree form ID
                        method="POST"
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Name"
                                    name="name"
                                    value={form.name}
                                    onChange={onChange}
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    type="email"
                                    label="Email"
                                    name="email"
                                    value={form.email}
                                    onChange={onChange}
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Message"
                                    name="message"
                                    value={form.message}
                                    onChange={onChange}
                                    fullWidth
                                    multiline
                                    minRows={4}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" fullWidth>
                                    Send Message
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </Box>
    );
}