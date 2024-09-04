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

export interface ExamFormValuesInterface {
  date: string;
  classroom_id: number | null;
  course_id: number | null;
}

export interface ClassStoreFormValuesInterface {
  title: string;
  field_id: number | null;
  number?: string | null;
  floor?: string | null;
}

export interface ItemShortProps {
  id: number;
  title?: string;
  name?: string;
}
