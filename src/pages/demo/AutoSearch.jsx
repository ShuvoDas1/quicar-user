import React, { useState, useEffect } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import Autocomplete from "react-google-autocomplete";
import { google_api_key } from '../../utils/constantValue';
import { geocodeByPlaceId } from 'react-google-places-autocomplete';
// const YOUR_GOOGLE_MAPS_API_KEY = "AIzaSyCee008sHUYjld8cXawSR92mWk-sOfkLVw";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';



const YOUR_GOOGLE_MAPS_API_KEY = google_api_key;



const AutoSearch = () => {
    const [value, setValue] = useState(null);


    useEffect(() => {
        console.log('====================================');


        if (value) {
            console.log(value);
            geocodeByPlaceId(value.value.place_id)
                .then(results => console.log(results))
                .catch(error => console.error(error));
        }
        console.log('====================================');

    }, [value])

    const handleChange = address => {
        this.setState({ address });
    };

    const handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));
    };



    return (
        <div>
            <GooglePlacesAutocomplete
                apiKey={YOUR_GOOGLE_MAPS_API_KEY}
                selectProps={{
                    value,
                    onChange: setValue,
                }}
            // apiOptions={{ language: 'en' }}
            />


            <br />
            <br />


            <Autocomplete
                apiKey={YOUR_GOOGLE_MAPS_API_KEY}
                onPlaceSelected={(place) => {
                    console.log(place);
                }}
            />;

            <PlacesAutocomplete
                // value={address}
                onChange={handleChange}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input
                            {...getInputProps({
                                placeholder: 'Search Places ...',
                                className: 'location-search-input',
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>


        </div>
    )
}

export default AutoSearch
