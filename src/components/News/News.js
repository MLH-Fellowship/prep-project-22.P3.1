import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import { grey, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';




function RecipeReviewCard({ media }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 // FOR YOU NEWS UI
  return (
    <Card sx={{ minWidth: '100%' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: grey[700] }} aria-label="recipe">
            {media.title[0]}
          </Avatar>
        }
      
        title={media.title}

        subheader={media.publishedAt}
      />
      <CardMedia
        component="img"
        height="194"
        image={media.urlToImage}
        alt="img loading..."
      />
      <CardContent>
      
        <Typography variant="body2" color="text.secondary">
          {media.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
       
        <IconButton aria-label="add to favorites">
            <FavoriteIcon />
        </IconButton>

        <IconButton aria-label="share">
          <ShareIcon onClick={() => {
            navigator.clipboard.writeText(media.url)}} />
        </IconButton>
       
        <Button
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </Button>
        
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{media.content.split('[')[0]}</Typography>
          <Button
          aria-label="settings"
          onClick={() => window.open(media.url, '_blank')} >
          READ MORE
        </Button>
        </CardContent>
      </Collapse>
    </Card>
  );
}

// WORLD NEWS UI

function MediaCard({ media }) {
  return (
    <Card sx={{ minWidth: '100%' }}>
      <CardMedia
        component="img"
        height="140"
        image={media.urlToImage}
        alt="image loading"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {media.title}
      
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          {media.publishedAt}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {media.description}
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button
          aria-label="settings"
          onClick={() => window.open(media.url, '_blank')}
        >
          READ MORE
        </Button>
      </CardActions>
      
    </Card>
  );
}

const drawerWidth = '45%';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function App(city) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [news, setNews] = useState([]);
  const [forYouNews, setForYouNews] = useState([]);
  const fetchNewsForYou = () => {
    
    // const strToSearch = "https://newsapi.org/v2/everything?q=weather " + {city} + "&apiKey=419bc9a18e4a4116b1f9306c7f1595fd"
    axios
      .get(
        'https://newsapi.org/v2/everything?q=weather mumbai&apiKey=419bc9a18e4a4116b1f9306c7f1595fd'
      )
      .then((response) => {
        console.log(response);
        setForYouNews(response.data.articles);
        console.log('hie');
      });
  };

  const fetchNews = () => {
    // const strToSearch = "https://newsapi.org/v2/everything?q=weather " + {city} + "&apiKey=419bc9a18e4a4116b1f9306c7f1595fd"
    axios
      .get(
        'https://newsapi.org/v2/everything?q=weather&apiKey=419bc9a18e4a4116b1f9306c7f1595fd'
      )
      .then((response) => {
        console.log(response);
        setNews(response.data.articles);
    
        console.log('hie');
      });
  };

  useEffect(() => {
    fetchNews();
    fetchNewsForYou();
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
         
          <Typography variant="h6" noWrap component="div">
           MLH PREP
          </Typography>
          
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
       
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Typography variant="h4">WORLD NEWS</Typography>
        <List>
          {news.map((text, index) => (
            <ListItem button key={0}>
              <RecipeReviewCard media={text} />
            </ListItem>
          ))}
        </List>
        
        <Divider />
        <Typography variant="h4" >FOR YOU</Typography>
        <List>
          {forYouNews.map((text, index) => (
            <ListItem button key={0}>
              <RecipeReviewCard media={text} />
            </ListItem>
          ))}
        </List>
        
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}

export default App;