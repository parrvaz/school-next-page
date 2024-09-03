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

export interface ListItemProps {
  name: string;
  lable: string;
  hasSub: boolean;
  isOpen?: boolean;
  url?: string;
  setOpen?: any;
  icon?: any;
  subList?: SubListItemProps[];
  setSelect?: any;
  selectedItem?: string;
}

export interface SidebarProps {
  data: ListItemProps[];
}

interface ItemShortInterface {
  id: string;
  name?: string;
  title?: string;
}

export interface ExamFormValuesInterface {
  courses: ItemShortInterface[];
}
