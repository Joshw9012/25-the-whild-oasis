import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"], //data to query , will save the fetched data in cache - will see in the dev tool
    queryFn: getCabins, // must be a function for query data from API, will return a  promise;
  });

  return { isLoading, error, cabins };
}
