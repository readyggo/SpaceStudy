import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// send signUp data to server function
export function useSignUp(ispassword, isEmail, isHuman, isValidEmail, email, password) {
  const nav = useNavigate();
  const handleSubmit = async (event) => {
    console.log(' init handleSubmit ');

    event.preventDefault(); // no refresh

    if (!ispassword || !isEmail || !isHuman || !isValidEmail) {
      alert('등록이 불가합니다. 입력한 값을 다시 확인해주세요.');
      return;
    }

    const signUpResult = await axios.post('/signUp/data', { email, password });
    if (signUpResult.data) nav('/emailConfirm');
    else {
      alert(' 회원가입에 실패하였습니다. 다시 시작하거나 개발자에게 문의해주세요. ');
    }
  };

  return [handleSubmit];
}

// google reacapchar human confirm function
export function useIsHuman() {
  const [resp, setResp] = useState('');
  const [isHuman, setIsHuman] = useState(false);

  const handleCaptchaResponse = (response) => {
    setResp(response);
  };

  useEffect(() => {
    const asyncIsHuman = async () => {
      try {
        const human = await axios.post('/signUp/is/human', resp);
        console.log(human);
        if (human.data) {
          setIsHuman(true);
        } else {
          setIsHuman(false);
        }
      } catch (error) {
        console.log(' isHuman error : ' + error);
      }
    };
    if (resp !== '') {
      asyncIsHuman();
    }
  }, [resp]);

  return [handleCaptchaResponse, isHuman];
}

// typing animation end flag function
export function useEndTyping() {
  const [endTyping, setEndTyping] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setEndTyping(true);
    }, 4900);
  }, []);
  return [endTyping];
}

// continue button collection function
export function useClick() {
  const [isClickEmailContinue, setIsClickEmailContinue] = useState(false);
  const [isClickPwdContinue, setIsClickPwdContinue] = useState(false);

  // id continue button click handler
  const handleEmailClick = useCallback(() => {
    setIsClickEmailContinue(true);
  }, []);

  //  password continue button click handler
  const handlePwdClick = useCallback(() => {
    setIsClickPwdContinue(true);
    console.log('click');
  }, []);

  return [isClickEmailContinue, handleEmailClick, isClickPwdContinue, handlePwdClick];
}

// email duplicate function
export function useEmailDuplicate(email, isEmail) {
  const [isValidEmail, setisValidEmail] = useState();

  useEffect(() => {
    const asyncIsValidEmail = async () => {
      if (isEmail) {
        await fetch('/signUp/valid/email', {
          method: 'POST',
          body: email,
        })
          .then(resp => resp.json())
          .then(data => {
            if (data) setisValidEmail(true);
            else setisValidEmail(false);
          });
      }
    };
    asyncIsValidEmail();
  }, [isEmail, email]);

  return [isValidEmail];
}

// real time validation function
export function useIsValidation(type) {
  const [email, setEamil] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [ispassword, setIsPassword] = useState(false);

  // email input change handler
  function handleInputEmail(e) {
    const inputValue = e.target.value;

    if (checkEmailValidity(inputValue)) {
      setEamil(inputValue);
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }
  }

  // password input change handler
  function handleInputPassword(e) {
    const inputValue = e.target.value;

    if (checkPwdValidity(inputValue)) {
      setPassword(inputValue);
      setIsPassword(true);
    } else {
      setIsPassword(false);
    }
  }

  return [handleInputEmail, handleInputPassword, email, isEmail, password, ispassword];
}

// email vaildation function
function checkEmailValidity(email) {
  const emailRegex =
    /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+(?:[a-zA-Z]{3}|co\.kr)$/;
  return emailRegex.test(email);
}

// password vaildation function
function checkPwdValidity(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,20}$/;
  return passwordRegex.test(password);
}
