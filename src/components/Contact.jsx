import React from "react";
import { Box, Container, Typography, Grid, TextField, Button, Paper, Stack } from "@mui/material";
import emailjs from "emailjs-com";

export default function Contact() {
    const [form, setForm] = React.useState({ name: "", email: "", message: "" });
    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            "service_gl8no8j",      // from EmailJS dashboard
            "template_9453syx",     // from EmailJS dashboard
            {
                from_name: form.name,
                from_email: form.email,
                message: form.message,
            },
            "QKcX3jEM4HAzWmAbC"          // public key from EmailJS
        )
            .then(() => {
                alert("Message sent successfully!");
                setForm({ name: "", email: "", message: "" });
            })
            .catch((err) => {
                console.error(err);
                alert("Failed to send message.");
            });
    };

    return (
        <Box id="contact" sx={{ py: 8 }}>
            <Container maxWidth="lg">
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>Contact</Typography>
                <Paper sx={{ p: { xs: 2.5, md: 4 }, borderRadius: 2 }}>
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
                                <Stack direction="row" justifyContent="flex-end">
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