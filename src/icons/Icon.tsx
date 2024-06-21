import {SvgXml} from 'react-native-svg';
import EmailIcon from './EmailIcon';
import {IconName} from '../constants/interfaces';
import PasswordIcon from './PasswordIcon';
import EyeIcon from './EyeIcon';
import EyeClosedIcon from './EyeClosedIcon';
import HomeIcon from './HomeIcon';
import ProfileIcon from './ProfileIcon';

export default function Icon(props: {
  name: IconName['value'];
  size: number;
  color: string;
}) {
  const icons: Record<IconName['value'], any> = {
    email: (
      <SvgXml
        xml={EmailIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    password: (
      <SvgXml
        xml={PasswordIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    eye: (
      <SvgXml
        xml={EyeIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    'eye-closed': (
      <SvgXml
        xml={EyeClosedIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    home: (
      <SvgXml
        xml={HomeIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    profile: (
      <SvgXml
        xml={ProfileIcon(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
  };

  return icons[props.name];
}
