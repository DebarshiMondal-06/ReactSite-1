import React, { useState } from "react";

const Contact = () => {
	const [data, updateData] = useState({
		fullname: '',
		phoneno: '',
		email: '',
		message: ''
	});

	const InputEvent = (event) => {
		const { name, value } = event.target;
		updateData((prevalue) => {
			return { ...prevalue, [name]: value }
		});
	}
	const formSubmit = (e) => {
		e.preventDefault();
		alert(`Your data: \n ${data.fullname} \n ${data.phoneno} \n ${data.email} \n ${data.message}`);
	}
	return (
		<>
			<div className="my-5">
				<h1 className="text-center"> Contact Us </h1>
			</div>
			<div className="container contact_div">
				<div className="row">
					<div className="col-md-6 col-10 mx-auto">
						<form onSubmit={formSubmit}>
							<div class="form-outline mb-4">
								<label class="form-label" for="form4Example1"> Fullname </label>
								<input value={data.fullname} name="fullname" onChange={InputEvent} required type="text" id="form4Example1" class="form-control" />
							</div>
							<div class="form-outline mb-4">
								<label class="form-label" for="form4Example2">Phone no</label>
								<input value={data.phoneno} name="phoneno" onChange={InputEvent} required type="text" id="form4Example2" class="form-control" />
							</div>
							<div class="form-outline mb-4">
								<label class="form-label" for="form4Example2">Email address</label>
								<input value={data.email} name="email" onChange={InputEvent} required type="email" id="form4Example2" class="form-control" />
							</div>
							<div class="form-outline mb-5">
								<label class="form-label" for="form4Example3">Message</label>
								<textarea value={data.message} name="message" onChange={InputEvent} class="form-control" id="form4Example3" rows="4"></textarea>
							</div>
							<div className="text-center mb-4">
								<button type="submit" class="btn btn-outline-primary mb-4">
									Submit here
              </button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact;