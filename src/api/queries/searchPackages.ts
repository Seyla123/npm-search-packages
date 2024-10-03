/**
 * This function takes a request object and returns a promise that resolves to an array of PackageSummary objects.
 * The function makes a GET request to the npm registry with the query parameter 'text' set to the value of the 'q' search parameter in the request url.
 * The response is then parsed as JSON and the objects property of the response is mapped over to create an array of PackageSummary objects.
 * Each PackageSummary object contains the properties name, version, description, and keywords.
 * @param {Object} request - The request object from the caller.
 * @returns {Promise<PackageSummary[]>} - A promise that resolves to an array of PackageSummary objects.
 */
import type { PackageSummary } from "../types/PackageSummary";
interface SearchResponse{
    objects: {
        package: {
            name: string;
            version: string;
            description: string;
            keywords: string[];
        }
    }[]
}
export const searchPackages = async (q:string): Promise<PackageSummary[]> => {
    const res = await fetch(
        `https://registry.npmjs.org/-/v1/search?text=${q}`
    );
    const data: SearchResponse = await res.json();

    return data.objects.map(({ package: { name, version, description, keywords } }) => {
        return {
            name,
            version,
            description,
            keywords
        }
    })
}
