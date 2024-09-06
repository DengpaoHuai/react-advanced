import { LoaderFunctionArgs, redirect } from "react-router-dom";
import useUserStore from "../../store/useUserStore";
import { checkRight } from "../../services/auth";

export const authMiddleware = async <T>(param: LoaderFunctionArgs<T>) => {
  const user = useUserStore.getState().user;
  if (user) {
    await checkRight(user.email, param.request.url);
    return true;
  }
  return redirect("/login");
};
