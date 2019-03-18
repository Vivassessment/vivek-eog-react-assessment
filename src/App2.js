import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWheatherData } from "./action";
import {geolocated} from 'react-geolocated';
import NowWhat from "./components/NowWhat";

class App2 extends Component {
    state = {
      location:[]
    };
  
    componentDidMount(){
      var me = this;
      setInterval(() => {
        const { isGeolocationAvailable, coords } = me.props;
        if(isGeolocationAvailable && coords)
        me.props.dispatch(fetchWheatherData({latitude:coords.latitude,longitude:coords.longitude}));
      }, 3000);
    }
  
    componentWillReceiveProps({ data}) {
      if (data.length > 0) this.setState({ location: data });
    }
  
    render() {
      const { location } = this.state;
      return (
        <div>
            <NowWhat location={location} />
          {!this.props.isGeolocationAvailable
        ? <div>Your browser does not support Geolocation</div>
        : !this.props.isGeolocationEnabled
          ? <div>Geolocation is not enabled</div>
          : this.props.coords
            ? null
            : <div>Getting the location data&hellip; </div>}
        </div>
      );
    }
  }
  
  
  const mapStateToProps = ({ getWheather }) => {
    const { data, error } = getWheather;
    return {
      data: data || [],
      error: error
    };
  };
  
  const geoApp = geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(App2);
  
  export default connect(mapStateToProps)(geoApp);