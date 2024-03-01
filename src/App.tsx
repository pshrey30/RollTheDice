
import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {Image, StyleSheet, Text, View, ImageSourcePropType, Pressable} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import DiceOne from '../assests/One.png';
import DiceTwo from '../assests/Two.png';
import DiceThree from '../assests/Three.png';
import DiceFour from '../assests/Four.png';
import DiceFive from '../assests/Five.png';
import DiceSix from '../assests/Six.png';

type DiceProps = PropsWithChildren<{
  imageURL: ImageSourcePropType;
}>;

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false
};


const Dice = ({imageURL}: DiceProps):JSX.Element => {
  return (
    <View style={styles.container}>
      <Image source={imageURL} style={styles.diceImage} />
    </View>
  );
};

function App(): React.JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;

      default:
        setDiceImage(DiceOne);
        break;
    }

    ReactNativeHapticFeedback.trigger("impactLight", options);
  };
  return (
    <View style={styles.diceContainer}>
      <Dice imageURL={diceImage} />
      <Pressable
      onPress={rollDiceOnTap}
      >
        <Text
        style={styles.rollDiceBtnText}
        >
        Roll the dice
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:200,
    //backgroundColor: 'white',
  },
  diceContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 350,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical:10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
