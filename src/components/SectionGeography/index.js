import React from 'react';
import Title from '../Title';
import "./Geography.scss";
import { defaultTheme } from './Theme';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const API_KEY = process.env.REACT_APP_API_KEY

const center = {
    lat: 50.449607948713826,
    lng: 30.523178571371687
};

const defaultOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    fullscreenControl: false,
    styles: defaultTheme
}

const Geography = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY
    })

    const mapRef = React.useRef(undefined);

    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map;
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined;
    }, [])

    return isLoaded ? (
        <section className="geography sec-bottom">
            <div className="container">
                <Title
                    title="география"
                />
                <GoogleMap
                    mapContainerClassName="geography__map"
                    center={center}
                    options={defaultOptions}
                    zoom={14}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                    <>
                        <Marker position={center} icon={{"url":"img/marker.svg"}} />
                        <div className='geography__content'>
                            <button className='btn'>юрлица</button>
                            <button className='btn'>физлица</button>
                            <button className='btn'>показать всё</button>
                        </div>
                    </>
                </GoogleMap>
            </div>
        </section>

    ) : <h2>Loading...</h2>
}

export default Geography;