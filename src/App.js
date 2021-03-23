import './app.css';
import { Button, Skeleton } from './components';

function App() {
	return (
		<>
			{/* EJEMPLO SKELETON */}
			<div className="container">

				{/* Linea individual */}
				<Skeleton height="20px" />
				{/* Skeleton con texto */}
				<Skeleton>
					<h1>text</h1>
					<h1>text</h1>
					<h1>text</h1>
				</Skeleton>

				{/* circulo con parametros */}
				<Skeleton type="CIRCLE" size={5} />
				{/* Circulo sin parametros */}
				<Skeleton type="CIRCLE" />

				
				{/* Circulo al lado de parrafo */}
				<div style={{ display: 'flex', width:'100%' }}>
				<Skeleton type="CIRCLE" size={5} />
				<div style={{width:'100%'}}>
					<Skeleton height="20px" />
					<Skeleton height="20px" />
				</div>
				
			</div>
			</div>
			
			<Button>Prueba</Button>
		</>
	);
}

export default App;
