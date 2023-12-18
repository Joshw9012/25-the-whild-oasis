import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {
  const { bookingId } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId], //data to query , will save the fetched data in cache - will see in the dev tool, will refresh based on the parameters in the list
    queryFn: () => getBooking(bookingId), // must be a function for query data from API, will return a  promise;
    retry: false, // retry to fetch data
  });

  return { isLoading, error, booking };
}
