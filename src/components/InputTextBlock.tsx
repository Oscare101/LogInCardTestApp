import {
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';
import {ThemeColor} from '../constants/interfaces';
import colors from '../constants/colors';
import Icon from '../icons/Icon';

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
      <View style={styles.iconBlock}>
        <Icon
          name={props.type}
          size={width * 0.05}
          color={colors[props.theme].main}
        />
      </View>

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
          style={styles.iconBlock}>
          <Icon
            name={hidden ? 'eye-closed' : 'eye'}
            size={width * 0.05}
            color={colors[props.theme].main}
          />
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
    height: width * 0.12,
    alignSelf: 'center',
    marginBottom: width * 0.03,
  },
  iconBlock: {
    aspectRatio: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: width * 0.05,
    flex: 1,
  },
  title: {
    fontSize: width * 0.05,
  },
});
