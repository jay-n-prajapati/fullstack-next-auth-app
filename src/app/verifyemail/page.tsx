import VerifyButton from "@/components/VerifyButton";
import { Suspense } from "react";

const VerifyPage = () => {
  return (
    <div className="h-screen flex justify-center items-center p-10">
      <Suspense>
        <VerifyButton />
      </Suspense>
    </div>
  );
};

export default VerifyPage;
