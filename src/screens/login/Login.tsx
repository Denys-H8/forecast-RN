import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import * as Keychain from 'react-native-keychain';

import { styles } from './login.styles';
import Input from './components/input';
import Button from './components/button';
import constants from 'src/constants';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'src/store/rootActions';
import * as LOGIN_SELECTORS from '../../store/login/selectors';

// Email: root@gmail.com
// Password: passroot

const Login: React.FC = () => {
  const [btnDisabled, setBtnDisabled] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const getEmail = async () => {
      try {
        const credentials: false | Keychain.UserCredentials = await Keychain.getGenericPassword();
        if (credentials) dispatch(loginActions.changedEmail(credentials?.password));
      } catch (error) {
        console.log("Keychain couldn't be accessed!", error);
      }
    };
    getEmail();
  }, []);

  const email = useSelector(LOGIN_SELECTORS.email);
  const password = useSelector(LOGIN_SELECTORS.password);
  const emailError = useSelector(LOGIN_SELECTORS.emailError);
  const passError = useSelector(LOGIN_SELECTORS.passError);

  const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const onChangeEmail = (val: string) => {
    dispatch(loginActions.changedEmail(val));

    emailValidation.test(val) && password.length > 7 ? setBtnDisabled(false) : setBtnDisabled(true);
  };

  const onChangePassword = (val: string) => {
    dispatch(loginActions.changedPassword(val));

    emailValidation.test(email) && val.length > 7 ? setBtnDisabled(false) : setBtnDisabled(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.topContainer}>
          <Input
            value={email}
            error={emailError}
            placeholder="Email"
            onChangeText={(val) => onChangeEmail(val)}
            placeholderTextColor={constants.MAIN_COLOR}
            iconName="account-circle"
          />
        </View>
        <View style={styles.bottomContainer}>
          <Input
            value={password}
            error={passError}
            placeholder="Password"
            onChangeText={(val) => onChangePassword(val)}
            placeholderTextColor={constants.MAIN_COLOR}
            iconName="lock"
            secureTextEntry
          />
        </View>
        <Button onPress={() => dispatch(loginActions.login())} isDisabled={btnDisabled} />
      </View>
    </View>
  );
};

export default Login;
