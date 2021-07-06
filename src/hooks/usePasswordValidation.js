import React from 'react'
import { useState, useEffect } from "react";

export const usePasswordValidation=({firstPassword="",secondPassword=""}) => {
  const [validLength, setValidLength] = useState(null);
  const [hasNumber, setHasNumber] = useState(null);
  const [upperCase, setUpperCase] = useState(null);
  const [lowerCase, setLowerCase] = useState(null);
  const [specialChar, setSpecialChar] = useState(null);
  const [match, setMatch] = useState(null);
  useEffect(() => {
    if(firstPassword.length>0){
      setValidLength(firstPassword.length >= 6 ? true : false);
      setUpperCase(firstPassword.toLowerCase() !== firstPassword);
      setLowerCase(firstPassword.toUpperCase() !== firstPassword);
      setHasNumber(/\d/.test(firstPassword));
      setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(firstPassword));
      if(secondPassword.length>0)
      setMatch(firstPassword && firstPassword === secondPassword);
      };
    }, [firstPassword, secondPassword])

  return [validLength, hasNumber, upperCase, lowerCase, match, specialChar];

}
