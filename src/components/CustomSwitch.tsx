import { useEffect, useRef } from "react";
import { Animated, TouchableOpacity, Easing } from "react-native";

interface CustomSwitchProps {
  value: boolean;
  onValueChange: (newValue: boolean) => void;
  disabled?: boolean;
}

export function CustomSwitch({ value, onValueChange, disabled }: CustomSwitchProps) {
  // Track width: 50, Height: 28
  // Thumb size: 24
  // Left padding: 2, Right position: 50 - 24 - 2 = 24
  const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: value ? 1 : 0,
      duration: 200,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false, 
    }).start();
  }, [value, animatedValue]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 24] 
  });

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["#CBD5E1", "#ED6442"]
  });

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => !disabled && onValueChange(!value)}
      disabled={disabled}
    >
      <Animated.View 
        style={{
          width: 50,
          height: 28,
          borderRadius: 14,
          backgroundColor,
          justifyContent: "center",
        }}
      >
        <Animated.View
          style={{
            width: 24,
            height: 24,
            borderRadius: 12,
            backgroundColor: "#FFFFFF",
            transform: [{ translateX }],
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 2,
            elevation: 3,
          }}
        />
      </Animated.View>
    </TouchableOpacity>
  );
}
