import { NextPage } from "next";
import { Field, Form, Formik } from "formik";
import Input from "@/app/components/shared/form/input";
import RegisterForm from "@/app/forms/auth/registerForm";
import Link from "next/link";
import { NextPageWithLayout } from "../_app";
import GuestPanelLayout from "@/app/components/layouts/guestPanelLayout";

const Register: NextPageWithLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          ایجاد حساب کاربری
        </h2>
        <p className="mt-2 text-center text-sm leading-5 text-gray-600">
          یا{" "}
          <Link
            href="/auth/login"
            className="font-medium text-green-600 hover:text-green-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            وارد حساب خود شوید
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

// Register.getLayout = (page) => <GuestPanelLayout>{page}</GuestPanelLayout>;

export default Register;
