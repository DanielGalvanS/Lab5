import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  Paper
} from '@mui/material';
import {
  Dashboard,
  Home,
  Info,
  ArrowForward
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Dashboard',
      description: 'Accede a tu panel de control personalizado con estadísticas y herramientas.',
      icon: <Dashboard sx={{ fontSize: 40, color: 'primary.main' }} />,
      action: () => navigate('/dashboard')
    }
  ];

  return (
    <Container width="100%">
      {/* Hero Section */}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          mb: 4,
          background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
          color: 'white',
          borderRadius: 2
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom align="center">
          ¡Bienvenido!
        </Typography>
        <Typography variant="h5" component="p" align="center" sx={{ mb: 3 }}>
          Este es el Lab 5 de Web
        </Typography>
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
            onClick={() => navigate('/dashboard')}
            sx={{
              backgroundColor: 'white',
              color: 'primary.main',
              '&:hover': {
                backgroundColor: 'grey.100'
              }
            }}
          >
            Ir al Dashboard
          </Button>
        </Box>
      </Paper>

      {/* Features Section */}
      <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
        Características de la Aplicación
      </Typography>
      
      <Grid container spacing={3}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index} justifyContent="center">
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6
                },
                cursor: feature.action ? 'pointer' : 'default'
              }}
              onClick={feature.action}
            >
              <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
                <Box sx={{ mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h5" component="h3" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Info Section */}
      <Box sx={{ mt: 6, p: 3, bgcolor: 'grey.50', borderRadius: 2, width: '100%' }}>
        <Typography variant="h5" component="h3" gutterBottom align="center">
          Información del Proyecto
        </Typography>
        <Typography variant="body1" align="center">
          Se usó React Router para la navegación entre diferentes vistas,
          Material UI para el diseño de la interfaz, y un sistema de autenticación básico.
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          Tecnologías utilizadas: React, React Router, Material UI, Material Icons
        </Typography>
      </Box>
    </Container>
  );
};

export default Homepage;
