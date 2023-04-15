import { Tab, Tabs } from "@mui/material";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function Menu() {

    const { pathname } = useLocation();
    return (
        <div>
            <Tabs value={pathname}>
                <Tab component={Link} to="/about" value="/about" label="About" />
                <Tab component={Link} to="/clients" value="/clients" label="Clients" />
                <Tab component={Link} to="/contact" value="/contact" label="Contact" />
            </Tabs>
        </div>
    )
}