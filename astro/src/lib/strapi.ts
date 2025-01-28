import type { Components, Pages } from "../constants";

export const STRAPI_URL = import.meta.env.STRAPI_URL;

export const getAbsoluteUrl = (url?: string) => url ? (STRAPI_URL + url) : undefined;

interface Props<T> {
  endpoint: string;
  query?: Record<string, string>;
  wrappedByList?: boolean;
  wrappedByKey?: string;
  limit?: number;
}

const dateKeys = ['publishedAt', 'createdAt', 'updatedAt'];

export async function fetchApi<T, TResponse = T>({
  endpoint,
  query,
  wrappedByList,
  wrappedByKey,
  limit,
}: Props<T>): Promise<TResponse> {
  if (endpoint.startsWith('/')) {
    endpoint = endpoint.slice(1);
  }

  const url = new URL(`${STRAPI_URL}/api/${endpoint}`);
  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  const res = await fetch(url.toString());
  let data = await res.json();


  if (wrappedByKey) {
    data = data[wrappedByKey];
  } else if (data.data) {
    data = data.data;
  }


  if (wrappedByList) {
    data = data[0];
  }

  if (data) {
    const items = data.length ? data : [data];

    for (const item of items) {
      for (const key of dateKeys) {
        if (key in item) {
          console.log(`Converting to date ${key}`)
          item[key] = new Date(item[key]);
        }
      }
    }
  }

  if (limit) {
    data = data.slice(0, limit);
  }

  return data as TResponse;
}


interface ImagesPerPageProps {
  endpoint: string;
  query?: Record<string, string>;
  page: Pages;
  component: Components;
  wrappedByKey?: string;
  wrappedByList?: boolean;
}

export async function fetchPerPageAndComponent<T>({
  endpoint,
  query,
  page,
  component,
  wrappedByKey,
  wrappedByList,
}: ImagesPerPageProps): Promise<T> {
  if (endpoint.startsWith('/')) {
    endpoint = endpoint.slice(1);
  }

  const url = new URL(`${import.meta.env.STRAPI_URL}/api/${endpoint}`);

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }
  const res = await fetch(url.toString());
  let data = await res.json();

  if (wrappedByKey) {
    data = data[wrappedByKey];
  }

  if (wrappedByList) {
    data = data[0];
  }

  const filteredData = data.filter((image: any) => image.page === page && image.parentComponent === component);

  return filteredData as T;
}

export const fetchOne = <T>(opts: Props<T>) => fetchApi<T>(opts);