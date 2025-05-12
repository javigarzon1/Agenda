import {useNavigate} from "react-router-dom";
export const Home = () => {
	const navigate = useNavigate();

	return (
		<div className="text-center mt-5">
			<h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
		
		<div className="row">
			<div className="col-md-6">
				<div className="card mb-3 h-100 cursor-pointer"
					onClick={() => navigate("/about")}
					style={{ cursor: 'pointer' }}
				>
					<div className="card-body text-center">
						<h5 className="card-title h4 mb-3">About Us</h5>
						<p className="card-text text-muted">Learn more about us.</p>
					</div>
				</div>
			</div>
			<div className="col-md-6">
				<div className="card mb-3 h-100 cursor-pointer"
					onClick={() => navigate("/contact")}
					style={{ cursor: 'pointer' }}
				>
					<div className="card-body text-center">
						<h5 className="card-title h4 mb-3">Contact Us</h5>
						<p className="card-text text-muted">Get in touch with us.</p>
					</div>
				</div>
			<div className="col">
				<button
					className="btn btn-secondary mt-3"
					onClick={() => navigate("/contact")}
				>
					Go to Contact Page
				</button>
			</div>
			<div className="col">
				<button
					className="btn btn-success mt-3"
					onClick={() => navigate("/services")}
				>
					Go to Services Page
				</button>
			</div>
		</div>
		</div>
				</div>

	
)} ;