import { Container, Paper, TextField, Typography, Button, makeStyles, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import {useInputValidation} from '6pp'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  toggle: {
    marginTop: theme.spacing(2),
  },
  imageUpload: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    position: 'relative',
  },
  imagePreview: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #ddd',
  },
  iconButton: {
    position: 'absolute',
    bottom: 0,
    right: 'calc(50% - 65px)', // Adjust the icon to the center bottom of the image
  },
  visuallyHidden: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    margin: '-1px',
    padding: 0,
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    border: 0,
  },
}));

const Login = () => {
  const classes = useStyles();
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');

  

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Profile Image:', profileImage);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);

    // Create a preview URL for the uploaded image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const defaultImageUrl = 'https://via.placeholder.com/100'; // Replace with a valid default image URL

  return (
    <div className="container" >

    <Container component={'main'} maxWidth='xs'>
      <Paper elevation={3} className={classes.root}>
        {isLogin ? (
          <>
            <Typography component='h1' variant='h5'>
              Sign In
            </Typography>
            <form onSubmit={handleLogin} className={classes.form}>
              <TextField
                required
                fullWidth
                label='Username'
                margin='normal'
                variant='outlined'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                required
                fullWidth
                label='Password'
                type='password'
                margin='normal'
                variant='outlined'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                Sign In
              </Button>
            </form>
            <Button onClick={() => setIsLogin(false)} className={classes.toggle}>
              Don't have an account? Sign up
            </Button>
          </>
        ) : (
          <>
            <Typography component='h1' variant='h5'>
              Sign Up
            </Typography>
            <form onSubmit={handleSignup} className={classes.form}>
              <div className={classes.imageUpload}>
                <img
                  src={imagePreviewUrl || defaultImageUrl}
                  alt='Profile Preview'
                  className={classes.imagePreview}
                />
                <input
                  accept='image/*'
                  type='file'
                  id='profile-image-upload'
                  onChange={handleImageUpload}
                  className={classes.visuallyHidden}
                />
                <label htmlFor='profile-image-upload'>
                  <IconButton color='primary' component='span' className={classes.iconButton}>
                    <CameraAltIcon />
                  </IconButton>
                </label>
              </div>
              <TextField
                required
                fullWidth
                label='Full Name'
                margin='normal'
                variant='outlined'
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <TextField
                required
                fullWidth
                label='Email'
                type='email'
                margin='normal'
                variant='outlined'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                required
                fullWidth
                label='Phone Number'
                margin='normal'
                variant='outlined'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <TextField
                required
                fullWidth
                label='Username'
                margin='normal'
                variant='outlined'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                required
                fullWidth
                label='Password'
                type='password'
                margin='normal'
                variant='outlined'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                Sign Up
              </Button>
            </form>
            <Button onClick={() => setIsLogin(true)} className={classes.toggle}>
              Already have an account? Sign in
            </Button>
          </>
        )}
      </Paper>
    </Container>   
     </div>
  );
};

export default Login;
