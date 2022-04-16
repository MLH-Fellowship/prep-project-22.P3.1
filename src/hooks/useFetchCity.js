import React, { useState, useEffect } from 'react'

const useFetchCity = (lat, lng) => {
    const [geoCity, setGeoCity] = useState({
        city: "",
        countryCode: "",
    })

    const [error, setError] = useState(null)
    const [isLoaded, setLoaded] = useState(false)

    // eslint-disable-next-line no-use-before-define
    useEffect(() => {
        const url = `https://geocode.xyz/${lat},${lng}?json=1`;

        fetch(url)
        .then((res)=>res.json())
        .then(
            (result) => {
                if(result){
                    setGeoCity({
                            city: result.city,
                            countryCode: result.prov
                        }
                    )
                    
                }
                setLoaded(true)
            }
        ).catch(err => {
            setError(err)
        })
    }, [lat, lng]);

    return geoCity;
};

export default useFetchCity;

