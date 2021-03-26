import { renderHook } from '@testing-library/react-hooks'
import useModal from '../../components/Modal/modalHook'

describe('pruebas en el custom hook', () => {
    test('debe retornar el estado por defecto', () => {
        const { result } = renderHook(() => useModal());
        const {showModal} = result.current;
        expect(showModal).toBe(false);
    })
    
})
