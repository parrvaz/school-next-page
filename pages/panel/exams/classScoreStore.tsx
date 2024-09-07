import { NextPageWithLayout } from "@/pages/_app";
import UserPanelLayout from "@/app/components/layouts/userPanelLayout";
import { useMemo, useState } from "react";
import { SWRGetCall } from "@/app/hooks/swrGetCall";
import ExamForm from "@/app/forms/panel/ExamForm";
import { log } from "console";
import { useFieldArray, useForm } from "react-hook-form";
import FormSelect from "@/app/components/shared/RHF/formSelect";
import LoadingBox from "@/app/components/shared/RHF/loadingBox";
import FormInput from "@/app/components/shared/RHF/formInput";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PostCall } from "@/app/hooks/postCall";
import BigForm from "@/app/components/shared/RHF/bigForm";

const ClassScoreStore: NextPageWithLayout = () => {
  return (
    <>
      <BigForm url={"/classScores/store"} />
    </>
  );
};

ClassScoreStore.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;
export default ClassScoreStore;
