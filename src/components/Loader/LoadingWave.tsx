import React from 'react';
import Lottie from 'lottie-react-native';

export default function LoadingWave() {
  return (
    <Lottie
      source={require('../../assets/Lottie/CircleWave.json')}
      autoPlay
      loop
    />
  );
}
