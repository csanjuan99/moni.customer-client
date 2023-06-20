export const useCustomFetch = (request: any, opts?: any) => {
    const config = useRuntimeConfig()

    return useFetch(request, {baseURL: config.public.baseURL, ...opts})
}
