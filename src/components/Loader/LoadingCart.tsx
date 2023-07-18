import React from 'react';
import Lottie from 'lottie-react-native'; 

export default function LoadingCart() {

    return (
      <Lottie
      style={{width: 400, height: 400}}
        source={require('../../assets/Lottie/LoadingCart')}
        autoPlay
        loop
      />
    );

    }