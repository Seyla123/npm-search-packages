import { searchPackages } from "../../api/queries/searchPackages";
import type { PackageSummary } from "../../api/types/PackageSummary";
export interface SearchLoaderResult {
    searchResult : PackageSummary[]
}
export async function searchLoader({ request }: { request: Request}) : Promise<SearchLoaderResult>{
    const { searchParams } = new URL(request.url);
    const q = searchParams.get('q');
    if(!q) {
        throw new Error('No search query provided');
    }
    const result = await searchPackages(q);
    return {
        searchResult : result
    }
}