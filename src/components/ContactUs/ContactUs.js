import React from 'react';
import classes from './ContactUs.module.css';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

const RenderMap = (props) => {
    let latitude = 16.509174;
    let longitude = 80.623698;

    return (
        <GoogleMap 
        defaultZoom={10} 
        defaultCenter={{lat: latitude, lng: longitude}}>
        {props.isMarkerShown && <Marker position={{ lat: latitude, lng: longitude}} />}
        </GoogleMap>
    );
}

const ContactUs = () => {
    const WrappedMap = withScriptjs(withGoogleMap(RenderMap));

    return (
        <div className={classes.ContactUs}>
            <h3>Contact Us</h3>
            <p className={classes.Details}>
            Email and phone number are above!
           </p>

        <WrappedMap
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        </div>
    );
};

export default ContactUs;