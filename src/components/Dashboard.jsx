import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import {
  People,
  Assessment,
  Notifications,
} from '@mui/icons-material';

const Dashboard = () => {

  return (
    <Container maxWidth="lg">
      {/* Welcome Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          ¡Hola!
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Bienvenido a tu panel de control.
        </Typography>
      </Box>



      <Grid container spacing={3}>

        {/* Quick Actions */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Acciones Rápidas
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<Assessment />}
                  sx={{ justifyContent: 'flex-start' }}
                >
                  Generar Reporte
                </Button>
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<People />}
                  sx={{ justifyContent: 'flex-start' }}
                >
                  Gestionar Usuarios
                </Button>
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<Notifications />}
                  sx={{ justifyContent: 'flex-start' }}
                >
                  Configurar Notificaciones
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
