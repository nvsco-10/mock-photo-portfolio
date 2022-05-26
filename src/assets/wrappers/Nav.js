import styled from 'styled-components'

const Wrapper = styled.section`
    /* border: solid 1px black; */
    width: 17rem;

    img {
        width: 17rem;
    }

    .menu li {
        list-style: none;
        cursor: pointer;
        padding-bottom: 0.5em;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    .portfolio-menu {
        display: none;
        margin-top: 1em;
    }

    .portfolio-menu.active {
        display: block;
    }

    .portfolio-menu li {
        font-size: 0.9rem;
    }

    .mobile-header {
        display: flex; 
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

    }

    .burger {
        font-size: 1.3rem;
        padding-right: 2rem;
    }

    @media (max-width: 1280px) {
        width: 100%;

        img {
            width: 15rem;
        }

        .menu {
            display: none;
        }

        .menu.active {
            display: block;
            text-align: center;
            padding-left: 0;
        }
        .portfolio-menu {
            padding-left: 0;
            margin-bottom: 1rem;
        }

        .portfolio-menu li {
            font-size: 0.8rem;
            text-align: center;
            margin: 0 auto;
        }

        

    }

`

export default Wrapper