import { Query, QueryCache, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({
    onError: <ErrorType, DataType>(
      error: ErrorType,
      query: Query<DataType, ErrorType>,
    ) => {
      if (query?.meta?.onError) {
        query.meta.onError(error);
      }
    },
    onSuccess: <DataType, ErrorType>(
      data: DataType,
      query: Query<DataType, ErrorType>,
    ) => {
      if (query?.meta?.onSuccess) {
        query.meta.onSuccess(data);
      }
    },
  }),
});

export default queryClient;
