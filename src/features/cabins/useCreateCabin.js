import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

export function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,

    onSuccess: () => {
      //alert(isCreating);
      toast.success("New cabin successfully created.");
      queryClient.invalidateQueries({
        queryKeys: ["cabins"],
      });
    },

    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCabin };
}
