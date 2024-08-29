export interface RegisterFormValuesInterface {
  name: string;
  password: string;
  password_confirmation: string;
  phone: string;
}

export interface LoginFormValuesInterface {
  password: string;
  phone: string;
}

export interface PhoneVerifyFormValuesInterface {
  code: string;
  token: string;
}

export interface SubListItemProps {
  name: string;
  lable: string;
  url: string;
}
