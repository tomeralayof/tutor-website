import { parsePhoneNumberFromString } from 'libphonenumber-js';

const ValidateName = (name) => {
  const nameRegex = /^(?=.*[A-Za-z].*[A-Za-z])[\u0590-\u05FFA-Za-z]+([\u0590-\u05FFA-Za-z\s]*)$/;
  return nameRegex.test(name);
}

const ValidateMsg = (msg) => {
  const textRegex = /^(?=.*[A-Za-z].*[A-Za-z])[\u0590-\u05FFA-Za-z0-9]+$/;
  return textRegex.test(msg);
}

const ValidateIsraeliPhoneNumber = (phoneNumber) => {
  const parsedNumber = parsePhoneNumberFromString(phoneNumber, 'IL');
  return parsedNumber && parsedNumber.isValid();
}

const formValidatorService = {
  ValidateName,
  ValidateMsg,
  ValidateIsraeliPhoneNumber
}

export default formValidatorService;