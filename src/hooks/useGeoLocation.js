import { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";


const useGeoLocation = () => {
    const [locate, setLocation] = useState({
        coordinates: {
            lat: "",
            lng:""
        }
    });

    const onSuccess = (location) => {
        setLocation({
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
        });
    };

    const onError = error => {
        setLocation({
            error,
        })
    }
    useEffect(()=> {
        if(!("geolocation" in navigator)) {
           onError({
               code: 0,
               message: "Geolocation not supported",
           }); 
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    },[]);

    return locate;
};

export default useGeoLocation;