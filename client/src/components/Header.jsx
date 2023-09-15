import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import {
  Menu as MenuIcon,
  Search,
  Tune,
  HelpOutlineOutlined,
  SettingsOutlined,
  AppsOutlined,
  AccountCircleOutlined,
} from '@mui/icons-material';
import { AppBar, Switch, Toolbar, styled, InputBase, Box } from '@mui/material';
import { gmailLogo } from '../constants/constant';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme === 'dark' ? 'black' : '#F5F5F5',
  boxShadow: 'none',
  color: theme === 'dark' ? 'white' : 'black', // Text color for dark mode
}));

const SearchWrapper = styled(Box)(({ theme }) => ({
  background: theme === 'dark' ? '#333' : '#EAF1FB',
  marginLeft: 80,
  borderRadius: 8,
  minWidth: 690,
  maxWidth: 720,
  height: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 20px',
  '&> div': {
    width: '100%',
    padding: '0 5px',
  },
}));


const Header = ({ toggleDrawer }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <StyledAppBar position="static" theme={theme}>
      <Toolbar>
        <MenuIcon color="action" onClick={toggleDrawer} />
        <img src={gmailLogo} alt="logo" style={{ width: 110, marginLeft: 15 }} />
        <SearchWrapper theme={theme}>
          <Search color="action" />
          <InputBase placeholder="Search Mail" />
          <Tune color="action" />
        </SearchWrapper>
        <Switch
          checked={theme === 'dark'}
          onChange={handleToggleTheme}
          color="default"
        />
        <Box
          style={{ color: 'white' }}
          display="flex"
          justifyContent="end"
          alignItems="center"
        >
          <HelpOutlineOutlined />
          <SettingsOutlined />
          <AppsOutlined />
          <AccountCircleOutlined />
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
