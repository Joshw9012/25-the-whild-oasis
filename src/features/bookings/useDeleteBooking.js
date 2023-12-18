import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  // delete use: useMutation();  Get : useQuery()  re-fresh/invalidate: useQueryClient()
  const { isPending: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success("Booking successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["bookings"], //this must much to the parent query name
      });
    },
    onError: (err) => toast.error(err.message), //error message will be fetched from apiCabins.js
  });
  return { isDeleting, deleteBooking };
}
