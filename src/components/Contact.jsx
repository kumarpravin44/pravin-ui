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
        mobile: "",
        message: "",
    });

    const onChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    return (
        <Box id="contact" sx={{ py: 8 }}>
            <Container maxWidth="lg" spacing={2}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
                    Contact
                </Typography>
                <Paper sx={{ p: 3, borderRadius: 2 }}>
                    {/* Formspree endpoint */}
                    <form
                        action="https://formspree.io/f/xwvvekrw" // 👉 replace with your Formspree form ID
                        method="POST"
                    >
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }} sx={{ mb: 2 }}>
                                <TextField
                                    label="Name"
                                    name="name"
                                    value={form.name}
                                    onChange={onChange}
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }} sx={{ mb: 2 }}>
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
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }} sx={{ mb: 2 }}>
                                <TextField
                                    type="tel"
                                    label="mobile"
                                    name="mobile"
                                    value={form.mobile}
                                    onChange={onChange}
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 12, md: 12 }} sx={{ mb: 2 }}>
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
                            <Grid item size={{ xs: 12, sm: 12, md: 12 }}>
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