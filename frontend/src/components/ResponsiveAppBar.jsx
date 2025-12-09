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

const pages = []; // Removed old pages
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

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  React.useEffect(() => {
    try {
      const saved = localStorage.getItem('currentUser');
      if (saved) setUser(JSON.parse(saved));
    } catch (e) {
      // ignore
    }
  }, []);

  const openLogin = () => {
    setError('');
    setEmail('');
    setPassword('');
    setLoginOpen(true);
  };

  const closeLogin = () => {
    setLoginOpen(false);
  };

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
      } else {
        setError((data && data.error && data.error.message) || JSON.stringify(data));
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
            <a href="http://localhost:3000" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img src="/Gemini_Generated_Image_devfcydevfcydevf.png" alt="Logo" style={{ height: 32 }} />
            </a>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <MenuItem onClick={handleCloseNavMenu} component="a" href="/frontend">
                <Typography sx={{ textAlign: 'center' }}>Frontend</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component="a" href="/backend">
                <Typography sx={{ textAlign: 'center' }}>Backend</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component="a" href="/blog">
                <Typography sx={{ textAlign: 'center' }}>Blog</Typography>
              </MenuItem>

            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="http://localhost:3000"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <a href="http://localhost:3000" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img src="/Gemini_Generated_Image_devfcydevfcydevf.png" alt="Logo" style={{ height: 32 }} />
            </a>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button href="/frontend" sx={{ my: 2, color: 'white', display: 'block' }}>Frontend</Button>
            <Button href="/backend" sx={{ my: 2, color: 'white', display: 'block' }}>Backend</Button>
            <Button href="/blog" sx={{ my: 2, color: 'white', display: 'block' }}>Blog</Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {!user ? (
              <Button color="inherit" onClick={openLogin}>Login</Button>
            ) : (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user.username || user.email} src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
              </>
            )}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar-user"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {user ? (
                <>
                  <MenuItem onClick={() => { handleCloseUserMenu(); }}>{user.username || user.email}</MenuItem>
                  <MenuItem onClick={handleLogout}><Typography sx={{ textAlign: 'center' }}>Logout</Typography></MenuItem>
                </>
              ) : (
                settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                  </MenuItem>
                ))
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      {/* Login Dialog */}
      <Dialog open={loginOpen} onClose={closeLogin}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          <TextField
            autoFocus
            margin="dense"
            label="E‑Mail"
            type="email"
            fullWidth
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Passwort"
            type="password"
            fullWidth
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeLogin} disabled={loading}>Abbrechen</Button>
          <Button onClick={handleLogin} disabled={loading} variant="contained">
            {loading ? <CircularProgress size={20} color="inherit" /> : 'Login'}
          </Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
}

export default ResponsiveAppBar;

// Login Dialog component UI rendered alongside AppBar
