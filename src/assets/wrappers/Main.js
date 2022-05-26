import styled from 'styled-components'

const Main = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    /* border: solid 1px black; */

    .warning {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 3rem;
        width: 300px;
    }

    .warning p {
        text-align: center;
        font-size: 0.7rem;
    }

    .warning img {
        width: 200px;
    }

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