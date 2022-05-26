import styled from 'styled-components'

const Main = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    /* border: solid 1px black; */

    @media (max-width: 1280px) {
        padding: 2rem 0 1rem 0;
    }

    /* special breakpoint for images to cancel out material ui spacing-right */
    @media (max-width: 899px) {
        img {
            padding-bottom: 0.5rem;
        }
    }
`

export default Main