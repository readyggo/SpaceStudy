import { useCallback, useEffect, useState } from 'react';

// 타이핑 애니메이션 종료 여부 함수
export function useEndTyping() {
  const [endTyping, setEndTyping] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setEndTyping(true);
    }, 4900);
  }, []);
  return [endTyping];
}

// continue 버튼 클릭 모음 함수
export function useClick() {
  const [isClickEmailContinue, setIsClickEmailContinue] = useState(false);
  const [isClickPwdContinue, setIsClickPwdContinue] = useState(false);

  // 아이디 continue 버튼 클릭 핸들러
  const handleEmailClick = useCallback(() => {
    setIsClickEmailContinue(true);
  }, []);

  // 비밀번호 continue 버튼 클릭 핸들러
  const handlePwdClick = useCallback(() => {
    setIsClickPwdContinue(true);
  }, []);

  return [isClickEmailContinue, handleEmailClick, isClickPwdContinue, handlePwdClick];
}

// 이메일 중복 확인 함수
export function useEmailDuplicate(email, isEmail) {
  const [isDuplicate, setIsDuplicate] = useState(); // 이메일 중복 결과
  useEffect(() => {
    if (isEmail) {
      fetch('/signUp/check/email', {
        method: 'POST',
        body: email,
      }).then((resp) => {
        if (resp.ok) setIsDuplicate(true);
        else setIsDuplicate(false);
      });
    }
  }, [isEmail]);

  return [isDuplicate];
}

// 입력할 때마다 유효성 검사 함수
export function useIsValidation(type) {
  const [email, setEamil] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [ispassword, setIsPassword] = useState(false);

  // 아이디 입력 핸들러
  function handleInputEmail(e) {
    const inputValue = e.target.value;

    if (checkEmailValidity(inputValue)) {
      setEamil(inputValue);
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }
  }

  // 비밀번호 입력 핸들러
  function handleInputPassword(e) {
    const inputValue = e.target.value;

    if (checkPwdValidity(inputValue)) {
      setPassword(inputValue);
      setIsPassword(true);
    } else {
      setIsPassword(false);
    }
  }

  return [handleInputEmail, handleInputPassword, email, isEmail, ispassword];
}

// 이메일 주소 유효성을 검사
function checkEmailValidity(email) {
  const emailRegex =
    /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+(?:[a-zA-Z]{3}|co\.kr)$/;
  return emailRegex.test(email);
}

// 비밀번호 유효성 검사
function checkPwdValidity(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,20}$/;
  return passwordRegex.test(password);
}
