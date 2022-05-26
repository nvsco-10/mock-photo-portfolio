import styled from 'styled-components'

const Wrapper = styled.section`
    display: flex;
    flex-direction: row;
    padding: 3rem;

    @media (max-width: 1280px ) {
        padding: 1rem;
        flex-direction: column;
    }
`

export default Wrapper

