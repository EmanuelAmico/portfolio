import { useState, useEffect, useCallback } from "react";

export type Query =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | any[];

type ServiceFunction<T> = (query: Query) => Promise<T>;
type ServiceType<T> = T | ServiceFunction<T>;

interface FetchOptions<T> {
  service: ServiceType<T>;
  initialState?: T;
  query?: Query;
  stepInitialSearch?: boolean;
}

interface FetchResult<T> {
  data: T | undefined;
  loading: boolean;
  error: Error | null;
  fetchData: (query?: Query) => Promise<T>;
  setData: React.Dispatch<React.SetStateAction<T | undefined>>;
}

const useFetch = <T>({
  service,
  initialState,
  query,
  stepInitialSearch,
}: FetchOptions<T>): FetchResult<T> => {
  const [data, setData] = useState<T | undefined>(initialState);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown | null>(null);

  const fetchData = useCallback(
    async (queryParam?: Query) => {
      try {
        setLoading(true);
        setError(null);
        const dataResolved = await (typeof service === "function"
          ? (service as ServiceFunction<T>)(queryParam)
          : Promise.resolve(service));
        setData(dataResolved);
        return dataResolved;
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    },
    [service],
  );

  useEffect(() => {
    if (stepInitialSearch) return;
    fetchData(query as Query);
  }, [fetchData, query, stepInitialSearch]);

  return {
    data,
    loading,
    error: error as Error | null,
    fetchData: fetchData as (query?: Query) => Promise<T>,
    setData,
  };
};

export default useFetch;
