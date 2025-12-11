import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import MenuItem from '@mui/material/MenuItem';

const pages = [];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [user, setUser] = React.useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  React.useEffect(() => {
    try {
      const saved = localStorage.getItem('currentUser');
      if (saved) setUser(JSON.parse(saved));
    } catch (_) {}
  }, []);

  const openLogin = () => {
    setError('');
    setEmail('');
    setPassword('');
    setLoginOpen(true);
  };

  const closeLogin = () => setLoginOpen(false);

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:1337/api/auth/local', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: email, password }),
      });
      const data = await res.json();

      if (res.ok && data.jwt) {
        localStorage.setItem('jwt', data.jwt);
        localStorage.setItem('currentUser', JSON.stringify(data.user || data));
        setUser(data.user || data);
        setLoading(false);
        setLoginOpen(false);
        try { window.dispatchEvent(new Event('authChanged')); } catch (_) {}
      } else {
        setError(data?.error?.message || JSON.stringify(data));
        setLoading(false);
      }
    } catch (e) {
      setError(String(e));
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('currentUser');
    setUser(null);
    handleCloseUserMenu();
    try { window.dispatchEvent(new Event('authChanged')); } catch (_) {}
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'linear-gradient(135deg, #020617, #111827)',
        boxShadow: 'none'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          {/* LOGO */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="http://localhost:3000"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src="/S.gif" alt="Logo" style={{ height: 50 }} />
          </Typography>

          {/* MOBILE MENU BUTTON */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>

            {/* MOBILE MENU */}
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <MenuItem component="a" href="/frontend" onClick={handleCloseNavMenu}>
                <Typography>Frontend</Typography>
              </MenuItem>

              <MenuItem component="a" href="/backend" onClick={handleCloseNavMenu}>
                <Typography>Backend</Typography>
              </MenuItem>

              <MenuItem component="a" href="/strapi-react" onClick={handleCloseNavMenu}>
                <Typography>Strapi × React</Typography>
              </MenuItem>

              <MenuItem component="a" href="/blog" onClick={handleCloseNavMenu}>
                <Typography>Blog</Typography>
              </MenuItem>

              {/* ✅ NEW: Installation */}
              <MenuItem component="a" href="/installation" onClick={handleCloseNavMenu}>
                <Typography>Installation</Typography>
              </MenuItem>

              <MenuItem component="a" href="/team">
                <Typography sx={{ textAlign: 'center' }}>Team</Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* MOBILE LOGO */}
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src="/S.gif" alt="Logo" style={{ height: 50 }} />
          </Typography>

          {/* DESKTOP MENU */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button href="/frontend" sx={{ my: 2, color: 'white' }}>Frontend</Button>
            <Button href="/backend" sx={{ my: 2, color: 'white' }}>Backend</Button>
            <Button href="/strapi-react" sx={{ my: 2, color: 'white' }}>Strapi × React</Button>
            <Button href="/installation" sx={{ my: 2, color: 'white' }}>Installation</Button>
            <Button href="/team" sx={{ my: 2, color: 'white', display: 'block' }}>Team</Button>
            <Button href="/blog" sx={{ my: 2, color: 'white' }}>Blog</Button>
          </Box>

          {/* USER / LOGIN */}
          <Box sx={{ flexGrow: 0 }}>
            {!user ? (
              <Button color="inherit" onClick={openLogin}>Login</Button>
            ) : (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu}>
                    <Avatar alt={user.username || user.email} src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
              </>
            )}

            <Menu
              sx={{ mt: '45px' }}
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {user ? (
                <>
                  <MenuItem>{user.username || user.email}</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </>
              ) : (
                settings.map((s) => (
                  <MenuItem key={s} onClick={handleCloseUserMenu}>
                    <Typography>{s}</Typography>
                  </MenuItem>
                ))
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>

      {/* LOGIN DIALOG */}
      <Dialog open={loginOpen} onClose={closeLogin}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          {error && <Alert severity="error">{error}</Alert>}
          <TextField margin="dense" label="E-Mail" type="email" fullWidth variant="standard" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <TextField margin="dense" label="Passwort" type="password" fullWidth variant="standard" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeLogin}>Abbrechen</Button>
          <Button onClick={handleLogin} variant="contained" disabled={loading}>
            {loading ? <CircularProgress size={20} /> : 'Login'}
          </Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
}

export default ResponsiveAppBar;
