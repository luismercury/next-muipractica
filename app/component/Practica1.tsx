'use client';
import { Button, Container, Typography } from '@mui/material';

const Practica1 = () => {
	return (
		<>
			<Container sx={{ boxShadow: 3, pb: 2, border: 3 }}>
				<h2>Practica 1</h2>
				<Typography variant="h1" component="h2">
					Titulo 1
				</Typography>
				<Typography
					variant="body1"
					textAlign="center"
					mt={3}
					py={2}
					boxShadow={4}
				>
					Titulo 2
				</Typography>
				<Typography variant="h1"> Titulo 3</Typography>
				<Button variant="outlined">Mi boton</Button>
			</Container>
		</>
	);
};

export default Practica1;
