import { AppBar, Switch, Toolbar, Typography } from '@mui/material';

type HeaderProps = {
  darkMode: boolean;
  handleThemeChange: () => void;
};

export default function Header({ darkMode, handleThemeChange }: HeaderProps) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar disableGutters>
        <Typography variant="h6">RE-STORE</Typography>
      </Toolbar>
      <Switch checked={darkMode} onChange={handleThemeChange} />
    </AppBar>
  );
}
