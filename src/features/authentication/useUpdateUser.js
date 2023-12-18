import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser, // this will only accept exactly one args, which is the object.

    onSuccess: ({ user }) => {
      toast.success("User Account successfully updated.");
      queryClient.setQueryData("user", user); // update data manually in the cache(refresh)
      //alert(isEditing);
      queryClient.invalidateQueries({
        queryKeys: ["user"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateUser, isUpdating };
}
