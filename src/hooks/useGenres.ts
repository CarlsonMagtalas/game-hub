import genres from '../genres/genres'

export interface Genres {
    id: number;
    name: string;
    slug: string;
    image_background: string;

}

const useGenres = () => ({ data: genres, loading: false });  

export default useGenres;