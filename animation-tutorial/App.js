import { Dimensions } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const { width: WIDTH } = Dimensions.get('window')

export default function App() {

  const tranX = useSharedValue(0);
  const tranY = useSharedValue(0);
  const scaled = useSharedValue(1);


  const onGesturEvent = useAnimatedGestureHandler({
    onStart: () => {
      scaled.value = withSpring(1.25);
    },
    onActive: ({ translationX, translationY }) => {
      tranX.value = translationX;
      tranY.value = translationY;
    },
    onFinish: () => {
      tranX.value = withSpring(0);
      tranY.value = withSpring(0);
      scaled.value = withSpring(1);
    }
  })

  const rCircle = useAnimatedStyle(() => ({
    transform: [{ translateX: tranX.value }, { translateY: tranY.value }, { scale: scaled.value }]
  }))

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <PanGestureHandler onGestureEvent={onGesturEvent}>
          <Animated.View style={[styles.circle, rCircle,]} />
        </PanGestureHandler>
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
