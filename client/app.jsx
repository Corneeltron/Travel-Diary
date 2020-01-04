
import React from 'react';
import { Component } from "react";
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
// import mapDisplay from './components/testMapDisplay.jsx'
import MapDisplay from './components/mapDisplay.jsx';
import MarkerForm from './components/markerForm.jsx';
import ImageDisplay from './components/imageDisplay.jsx';


//this one renders ya know the app.

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgList: [],
            userWhiteList: [],
            markerList: [],
            locationInfo: '',
            tagInfo: '',
            descriptionInfo: '',
            imgURL: '',
            searchMarkerTag: '',
            savedMarkerTag: '',
            whiteListUserInfo: '',


    }
    }
    onChange() {
        //takes typed information and sets relevant state
    }
    onSubmit() {
        //does stuff on forms submits
    }
    render() {
        return (
            <div id="map">This is the app.jsx div
            <ImageDisplay/>
            <MapDisplay/>
            <MarkerForm/>
            </div>
            

        )
    }
}