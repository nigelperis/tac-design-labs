import { env } from '~/env';

interface StrapiFetchProps {
  endpoint: `/${string}`;
  queryParams?: URLSearchParams;
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from (withouth inclusion of api prefix and should always begin with forward slash '/' )
 * @param query - The query parameters to add to the url
 * @returns
 * @example 
     const searchParam = new URLSearchParams();
      searchParam.append('populate[0]', 'signature');
      searchParam.append('populate[1]', 'coverImage');
      strapiFetch(\{
        endpoint: '/landing-page-priest-message',
        queryParams:searchParam,
        );
 */
export async function strapiFetch<T>({
  endpoint,
  queryParams,
}: StrapiFetchProps): Promise<T | undefined> {
  if (!process.env.NEXT_PUBLIC_STRAPI_URL) {
    throw new Error('Base url for strapi not found ');
  }

  const url = new URL(`/api${endpoint}`, env.NEXT_PUBLIC_STRAPI_URL);

  if (queryParams) {
    for (const [key, value] of queryParams) {
      url.searchParams.append(key, value);
    }
  }

  const res = await fetch(url.toString(), { cache: 'no-store' });
  const data = (await res.json()) as unknown as T;

  return data as unknown as T;
}
