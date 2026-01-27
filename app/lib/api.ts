export default async function fetchAPI<T>(
    endpoint: string,
    options?: RequestInit
): Promise<T> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
        ...options,
        cache: options?.cache || 'no-store',
    })

    if(!res.ok) {
        let errorMessage = `Failed to fetch data from ${endpoint}`;
        try{
            const errorData = await res.json();
            errorMessage = errorData.message || errorData.error || errorMessage;
        }catch(e){
            console.log(e)
        }
        throw new Error(errorMessage);
    }

    return res.json();
}

export function getImageUrl(path: string){
    if(path.startsWith('http')) return path;
    
    const root = process.env.NEXT_PUBLIC_API_ROOT || '';
    // Pastikan ada slash di antara root dan path
    if (!root.endsWith('/') && !path.startsWith('/')) {
        return `${root}/${path}`;
    }
    
    return `${root}${path}`;
}