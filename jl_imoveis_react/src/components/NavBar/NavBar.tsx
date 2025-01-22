import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"

const NavBar = () => {

    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly"
    }))

    return (
        <>
            <AppBar position="absolute">
                <StyledToolbar>
                    <MenuItem> About </MenuItem>
                    <MenuItem> Sobre </MenuItem>
                    <MenuItem> About </MenuItem>
                </StyledToolbar>
            </AppBar>
        </>
    )
}

export default NavBar