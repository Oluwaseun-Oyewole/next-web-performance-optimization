import { revalidateTag } from "next/cache";

const action = () => {
  revalidateTag("collection");
};

export default action;
