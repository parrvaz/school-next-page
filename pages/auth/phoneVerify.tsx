import { NextPage } from "next";
import { Field, Form, Formik } from "formik";
import Input from "@/app/components/shared/form/input";
import PhoneVerifyForm from "@/app/forms/auth/phoneVerifyForm";
import Link from "next/link";
import { useCookies } from "react-cookie";
import { useAppSelector } from "@/app/hooks";
import { selectPhoneVerifyToken } from "@/app/store/auth";
import { useEffect } from "react";
import Router from "next/router";
import { NextPageWithLayout } from "../_app";
import GuestPanelLayout from "@/app/components/layouts/guestPanelLayout";

const PhoneVerify: NextPageWithLayout = () => {
  const [cookeies, setCookie] = useCookies(["token"]);

  const token = useAppSelector(selectPhoneVerifyToken);
  useEffect(() => {
    if (token === undefined) {
      Router.push("/auth/login");
    } else console.log(token);
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          تایید حساب کاربری
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
          <PhoneVerifyForm />
        </div>
      </div>
    </div>
  );
};

PhoneVerify.getLayout = (page) => <GuestPanelLayout>{page}</GuestPanelLayout>;

export default PhoneVerify;
