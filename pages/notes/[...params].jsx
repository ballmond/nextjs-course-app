import React from "react";
import { useRouter } from "next/router";

const Page = function () {
  const router = useRouter();

  const { params } = router.query;
  console.log(params);

  return <div>Notes {params}</div>;
};

export default Page;
