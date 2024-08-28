import { NextPage } from "next";
import { Field, Form, Formik } from "formik";
import Input from "@/app/components/shared/form/input";
import LoginForm from "@/app/forms/auth/loginForm";
import Link from "next/link";
import { useCookies } from "react-cookie";
import { useAppDispatch } from "@/app/hooks";
import { updatePhoneVerifyToken } from "@/app/store/auth";
import { NextPageWithLayout } from "../_app";
import GuestPanelLayout from "@/app/components/layouts/guestPanelLayout";

const Login: NextPageWithLayout = () => {
  const dispatch = useAppDispatch();
  const setPhoneVerifyToken = (token: string) => {
    dispatch(updatePhoneVerifyToken(token));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          ورود به حساب کاربری
        </h2>
        <p className="mt-2 text-center text-sm leading-5 text-gray-600">
          یا{" "}
          <Link
            href="/auth/register"
            className="font-medium text-green-600 hover:text-green-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            یک حساب جدید ایجاد کنید
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <LoginForm setToken={setPhoneVerifyToken} />
        </div>
      </div>
    </div>
  );
};

Login.getLayout = (page) => <GuestPanelLayout>{page}</GuestPanelLayout>;

export default Login;
