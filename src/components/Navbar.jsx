import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Stack,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar({ mode, onToggle }) {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (state) => () => {
        setOpen(state);
    };

    const navItems = [
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Call Me", href: "tel:+919971411966" },
        { label: "Contact", href: "#contact", variant: "contained" },
    ];

    return (
        <AppBar
            elevation={0}
            color="transparent"
            position="sticky"
            sx={{
                backdropFilter: "blur(8px)",
                borderBottom: (theme) =>
                    `1px solid ${theme.palette.mode === "light"
                        ? "#E2E8F0"
                        : "rgba(255,255,255,0.08)"
                    }`,
            }}
        >
            <Toolbar sx={{ maxWidth: 1200, mx: "auto", width: "100%" }}>
                {/* Logo / Title */}
                <Typography className="logo-txt" variant="h6" sx={{ fontWeight: 700, flexGrow: 1 }}>
                    Pravin • Lead UI Developer
                </Typography>

                {/* Desktop Nav */}
                <Stack
                    direction="row"
                    spacing={1}
                    sx={{ display: { xs: "none", md: "flex" } }}
                >
                    {navItems.map((item) => (
                        <Button
                            key={item.label}
                            href={item.href}
                            variant={item.variant || "text"}
                        >
                            {item.label}
                        </Button>
                    ))}
                </Stack>

                {/* Mobile Menu Button */}
                <IconButton
                    sx={{ display: { xs: "flex", md: "none" } }}
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>

                {/* Theme Toggle */}
                <IconButton aria-label="toggle theme" onClick={onToggle} sx={{ ml: 1 }}>
                    {mode === "light" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
                </IconButton>
            </Toolbar>

            {/* Drawer for Mobile */}
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <List sx={{ width: 250 }}>
                    {navItems.map((item) => (
                        <ListItem key={item.label} disablePadding>
                            <ListItemButton component="a" href={item.href} onClick={toggleDrawer(false)}>
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </AppBar>
    );
}