import { waitFor } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

import { useMovies } from '../../hooks/useMovies'

describe('Pruebas en el hook useMovies', () => {

     test('Debe regresar el estado inicial', () => {

        const { result } = renderHook(() => useMovies())
        const { movies, isLoading } = result.current

        expect(movies.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('Debe retornar un arreglo de peliculas y isLoading en false', async() => {

        const { result } = renderHook(() => useMovies());
    
        await waitFor( () => expect(result.current.movies.length).toBeGreaterThan(0))

        const { movies, isLoading } = result.current
        
        expect(movies.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy();
    })

})