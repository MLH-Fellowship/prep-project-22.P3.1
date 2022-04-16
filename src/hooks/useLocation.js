import React, { useState, useEffect } from 'react'

const useLocation = () => {
    const [location, setLocation] = useState({
        loaded: false, 
        coordinates: { lat:'', lng:'' },
    });

    const onSuccess = (success) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: success.coords.latitude,
                lng: success.coords.longitude,
            },
        });
    }

    const onError = (error) => {
        setLocation({
            loaded: true,
            error: {
                code: error.code,
                message: error.message,
            },
        });
    }

    useEffect(() => {
        if(!("geolocation" in navigator)){
            onError({
                code: 0,
                message: "Geolocation not supported",
            })
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);
    return location;
};

export default useLocation;