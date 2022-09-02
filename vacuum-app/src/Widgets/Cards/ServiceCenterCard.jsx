import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AppRegistration } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { margin } from '@mui/system';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ServiceCenterCard(properties) {
    // const Servicecenter = properties.Servicecenter;
    // const index = properties.index
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345}} style = {{margin: 20}}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={properties.name}
        subheader={properties.email}
        sx={{height: 100}}
      />
      <CardMedia
        component="img"
        height="194"
        image={properties.imgUrl}
        alt="Service center image"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={properties.onpress}>
          <AppRegistration />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          {properties.description}
          </Typography>
          <Typography >
            Address
          </Typography>
          <Typography>
            {properties.city}
          </Typography>
          <Typography>
            {properties.state}
          </Typography>
          <Typography>
            {properties.landMark}
          </Typography>
          <Typography>
            {properties.pinCode}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
