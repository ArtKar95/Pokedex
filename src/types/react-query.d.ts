import "@tanstack/react-query";

type QueryMetaHandlers = {
  onError?: (error: unknown) => void;
  onSuccess?: (data: unknown) => void;
};

declare module "@tanstack/react-query" {
  interface Register {
    queryMeta: QueryMetaHandlers;
    mutationMeta: QueryMetaHandlers;
  }
}
