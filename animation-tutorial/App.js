import { useState } from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler, PinchGestureHandler, TapGestureHandler } from 'react-native-gesture-handler';
import Animated, { interpolateColor, runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

const { width: WIDTH } = Dimensions.get('window');

export default function App() {

  const tranX = useSharedValue(0);
  const tranY = useSharedValue(0);
  const Panscaled = useSharedValue(1);


  const onGesturEvent = useAnimatedGestureHandler({
    onStart: () => {
      Panscaled.value = withSpring(1.25);
    },
    onActive: ({ translationX, translationY }) => {
      tranX.value = translationX;
      tranY.value = translationY;
    },
    onFinish: () => {
      tranX.value = withSpring(0);
      tranY.value = withSpring(0);
      Panscaled.value = withSpring(1);
    }
  })

  const Scale = useSharedValue(1);
  const context = useSharedValue(1);

  const Pinch = useAnimatedGestureHandler({
    onStart: (event) => {
      context.value = event.scale;
    },
    onActive: ({ scale }) => {
      Scale.value = context.value + scale
    },
    onEnd: () => {
      Scale.value = 1;
    }
  })

  const [first, setFirst] = useState(true);
  const r = useSharedValue(1);

  const Tap = useAnimatedGestureHandler({
    onActive: () => {
      runOnJS(setFirst)(!first)
      r.value = first ? withTiming(1) : withTiming(0);
      console.log(first);
    }
  })

  const c = useAnimatedStyle(() => ({
    backgroundColor: first ? interpolateColor(
      r.value,
      [0, 1],
      ['red', 'green']
    ) : interpolateColor(
      r.value,
      [1, 0],
      ['green', 'red']
    )
  }))
  const pCircle = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(Scale.value) }]
  }))

  const rCircle = useAnimatedStyle(() => ({
    transform: [{ translateX: tranX.value }, { translateY: tranY.value }, { scale: Panscaled.value }]
  }))

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={[styles.container, { justifyContent: 'space-evenly' }]}>
        <PanGestureHandler onGestureEvent={onGesturEvent}>
          <Animated.View style={[styles.circle, rCircle,]} />
        </PanGestureHandler>
        <PinchGestureHandler onGestureEvent={Pinch}>
          <Animated.View style={[styles.circle, pCircle, { width: WIDTH * .5, height: WIDTH * .5, borderRadius: WIDTH * .5 }]} />
        </PinchGestureHandler>
        <TapGestureHandler numberOfTaps={2} onGestureEvent={Tap}>
          <Animated.View style={[styles.circle, c]} />
        </TapGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: WIDTH * .3,
    height: WIDTH * 0.3,
    borderRadius: WIDTH * 0.3,
    backgroundColor: '#FDD835'
  }
});
