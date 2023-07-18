import React from 'react';
import Lottie from 'lottie-react-native'; 

export default function LoadingShop() {

    return (
      <Lottie
      style={{width: 250, height: 250}}
        source={require('../../assets/Lottie/LoadingShop.json')}
        autoPlay
        loop
      />
    );

    }