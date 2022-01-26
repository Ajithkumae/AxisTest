import React from 'react';
import {KeyboardAvoidingView, TextInput, View} from 'react-native';
import {COLORS} from '../../Utils/theams';
import styles from './styles';

/**
 * Text
 * @description Custom coponent for common InputTextField
 * @param {string} placeholder - holdes the place value
 * @param {any} value - holdes the state value
 */

const InputText = props => {
  const {placeholder, value, onChangeText} = props;

  return (
    <View style={[styles.container]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TextInput
          value={value}
          style={[styles.textInput]}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
          onChangeText={val => onChangeText(val)}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default InputText;
