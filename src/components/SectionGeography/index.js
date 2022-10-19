import React from 'react';
import Title from '../Title';
import "./Geography.scss";
import { defaultTheme } from './Theme';
import { markers } from './Markers';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

// const API_KEY = process.env.REACT_APP_API_KEY

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

    const [entity, setEntity] = React.useState(false);
    const [person, setPerson] = React.useState(false);
    const [all, setAll] = React.useState(true);

    const mapRef = React.useRef(undefined);

    const handleEntity = () =>{
        setEntity(true);
        setPerson(false);
        setAll(false);
    }

    const handlePerson = () =>{
        setEntity(false);
        setPerson(true);
        setAll(false);
    }

    const handleAll = () =>{
        setEntity(false);
        setPerson(false);
        setAll(true);
    }

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBs4gl97q0--W9um-atMaflaFU19yektqM"
    })

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
                    zoom={11}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                    <div>
                        {markers.map(marker => {
                            if ( entity &&  marker.entity === true ){
                                return <Marker
                                    key={marker.id}
                                    position={{lat: marker.lat, lng: marker.lng}}
                                    icon={{"url" : marker.iconUrl}}
                                />
                            } else if ( person &&  marker.person === true ){
                                return <Marker
                                    key={marker.id}
                                    position={{lat: marker.lat, lng: marker.lng}}
                                    icon={{"url" : marker.iconUrl}}
                                />
                            } else if ( all ){
                                return <Marker
                                    key={marker.id}
                                    position={{lat: marker.lat, lng: marker.lng}}
                                    icon={{"url" : marker.iconUrl}}
                                />
                            } else {
                                return false;
                            }
                            
                        })}
                        <div className='geography__content'>
                            <button className={`btn ${entity && 'active'}`} onClick={handleEntity}>юрлица</button>
                            <button className={`btn ${person && 'active'}`} onClick={handlePerson}>физлица</button>
                            <button className={`btn ${all && 'active'}`} onClick={handleAll}>показать всё</button>
                        </div>
                    </div>
                </GoogleMap>
            </div>
        </section>

    ) : <h2>Loading...</h2>
}

export default Geography;