import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin() {
  const queryClient = useQueryClient();
  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id), // this will only accept exactly one args, which is the object.

    onSuccess: () => {
      toast.success("Cabin successfully edited.");
      //alert(isEditing);
      queryClient.invalidateQueries({
        queryKeys: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, editCabin };
}
