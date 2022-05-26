import styled from 'styled-components'

const Featured = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: calc(100vh - 6rem);
    padding: 3rem;

    img {
        max-width: 90%;
    }

    div {
        width: 80%;
        padding: 1rem 0;
    }

    .title {
        font-weight: 500;
    }

    .description {
        font-weight: 400;
        font-size: 0.8rem;
    }

    span {
        font-size: .7rem;
    }

    .back-btn {
        align-self: flex-start;
        font-size: 0.8rem;
        margin-bottom: 1rem;
        cursor: pointer;
        text-decoration: underline;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`

export default Featured