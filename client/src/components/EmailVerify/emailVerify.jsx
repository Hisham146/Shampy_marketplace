import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
//import { Fragment } from "react/cjs/react.production.min";
import { Fragment } from "react";
import newRequest from "../../utils/newRequest";

const EmailVerify = () => {
	const param = useParams();

	useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				const url = `https://shampy-api.cyclic.cloud/api/auth/${param.id}/verify/${param.token}`;
                console.log(url);
				 await newRequest.get(url);
				
                
			} catch (error) {
				
			}
		};

		verifyEmailUrl();
	}, [param]);

	return (
		<Fragment>
			 
				<div className={styles.container}>
					<img src="../../../success.png" alt="success_img" className={styles.success_img} />
					<h1>Successfully Verified</h1>
					<h3>Please Go Back and Sigin again..</h1>
				</div>
			
		</Fragment>
	);
};

export default EmailVerify;
