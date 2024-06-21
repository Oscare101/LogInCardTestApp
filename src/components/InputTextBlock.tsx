import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';
import {ThemeColor} from '../constants/interfaces';
import colors from '../constants/colors';

const width = Dimensions.get('screen').width;

interface InputTextBlockProps {
  value: string;
  setValue: any;
  type: 'email' | 'password';
  placeHolder: string;
  theme: ThemeColor['value'];
}

export default function InputTextBlock(props: InputTextBlockProps) {
  const [hidden, setHidden] = useState<boolean>(props.type === 'password');

  return (
    <View
      style={[styles.inputBlock, {backgroundColor: colors[props.theme].card}]}>
      <TextInput
        value={props.value}
        onChangeText={(value: string) => props.setValue(value)}
        placeholder={props.placeHolder}
        style={[styles.input, {color: colors[props.theme].main}]}
        placeholderTextColor={colors[props.theme].comment}
        autoCapitalize="none"
        autoComplete={props.type}
        autoCorrect={false}
        secureTextEntry={hidden}
        keyboardType="default"
      />
      {props.type === 'password' ? (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setHidden(!hidden)}
          style={styles.button}>
          <Text>-</Text>
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputBlock: {
    width: '92%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: width * 0.03,
    paddingHorizontal: width * 0.03,
    height: width * 0.12,
    alignSelf: 'center',
    marginBottom: width * 0.03,
  },
  input: {
    fontSize: width * 0.05,
    flex: 1,
  },
  button: {
    height: width * 0.08,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: width * 0.05,
  },
});
