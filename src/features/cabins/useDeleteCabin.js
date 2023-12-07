import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  // delete use: useMutation();  Get : useQuery()  re-fresh/invalidate: useQueryClient()
  const { isPending: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success("Cabin successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"], //this must much to the parent query name
      });
    },
    onError: (err) => toast.error(err.message), //error message will be fetched from apiCabins.js
  });
  return { isDeleting, deleteCabin };
}
