import styled from 'styled-components'

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    /* width: 90vw; */
    padding: 2rem;
    /* border: solid 1px black; */

    .content {
        display: flex;
        justify-content: center;
    }

    .content-box {
        flex-basis: 50%;
    }

    h3 {
        font-size: 1rem;
    }

    .image { 
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

    .text {
        text-align: justify;
        padding-right: 3rem;
    }

    img {
        width: 100%;
        margin: 1.5rem auto;
    }


    @media (max-width: 820px) {
        padding: 1rem;
        
        .content {
            flex-direction: column-reverse;
            justify-content: center;
        }

        .text {
            text-align: justify;
            padding-right: 0;
        }

        p, li {
            font-size: 0.8rem;
        }

        img {
            width: 80%;
            margin: 1.5rem auto;
        }
    }


`

export default Wrapper