const isProd = process.env.NODE_ENV === "production";
export const BASE_PATH = isProd ? "/portfolio" : "";

/** Prefix asset path with basePath for static export */
export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
