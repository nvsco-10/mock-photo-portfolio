import styled from 'styled-components'

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    /* width: 90vw; */
    padding: 2rem;
    /* border: solid 1px black; */

    .container {
        width: 100%;
    }

    .content {
        width: 600px;
        font-size: 0.8rem;
    }

    h3 {
        font-size: 1rem;
    }

    form {
        margin: 2rem 0.5rem;
    }

    .form-control {
        display: flex;
        flex-direction: column;
        margin: 0.75em 0;
    }

    input, textarea {
        margin: 0.5em 0;
        padding: 0.5em;
        font-size: inherit;
    }

    textarea {
        resize: vertical;
        font-size: inherit;
    }

    button {
        cursor: pointer;
        background-color: black;
        font-weight: bold;
        font-size: inherit;
        color: #fff;
        padding: 0.5em 1.5em;
        border-radius: 5%;
        
    }

    span {
        color: red;
    }

    .success-alert {
        background-color: lightcyan;
        padding: 0.5em;
        margin-bottom: 1rem;
    }

    @media (max-width: 1280px) {
        .content {
            width: 500px;
            margin: 0 auto;
        }
    }

    @media (max-width: 680px) {
        padding: 1rem;
        
        .content {
        width: 100%;
        }
    }


`

export default Wrapper