import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user", user.user]); // mannually set user data to react query cache.  -- this is optional
      //queryClient.setQueriesData(["user", user]); // Wrong
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      toast.error("Provided Email or password are incorrect");
    },
  });
  return { login, isLoading };
}
