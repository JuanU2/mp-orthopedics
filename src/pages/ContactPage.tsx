// ContactPage.js
import "../cssStyles/contact.css"
import { Typography } from '@mui/material';
import Doctor from "../photos/doctor.webp"

function ContactPage() {
  return (
    <div className="container_before">
        <div className="formular-kontakt">
        <div className="formular-kontakt__info">
            <img className="doctor-photo" src={Doctor} alt="Doctor"/>
            <Typography variant="h4" gutterBottom>MUDr. Michal Prádel</Typography>
            <Typography variant="body1" gutterBottom>Ortopéd</Typography>
            <Typography variant="body2" gutterBottom>+421 901 234 567</Typography>
        </div>
    </div>
    </div>
  );
}

export default ContactPage;
