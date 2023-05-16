'use client';
import { Container, Typography } from '@mui/material';

const Ontainer = () => {
	return (
		<>
			<Container sx={{ border: 2, boxShadow: 8, mt: 4, py: 5 }}>
				<Typography
					variant="h4"
					component="h2"
					align="center"
					color="secondary"
					boxShadow={4}
				>
					Hola mundo desde Ontainer
				</Typography>
			</Container>
		</>
	);
};

export default Ontainer;
