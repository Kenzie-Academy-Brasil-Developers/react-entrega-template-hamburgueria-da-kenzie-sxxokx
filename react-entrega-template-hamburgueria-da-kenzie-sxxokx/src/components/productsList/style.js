import styled from "styled-components";

export const StyledProductsList = styled.ul`
    height: 23rem;
    display: grid;
    grid-auto-flow: column;
    scroll-behavior: auto;
    gap: 1.5rem;
    overflow-y: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;

    ::-webkit-scrollbar{
    display: none;
    }
    @media(min-width: 800px){
        width: 90%;
        max-width: 1050px;
        height: 39rem;
        margin: 0 auto;
        padding: 2rem 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap:2rem;
        background-color: var(--white-fixed);
        overflow-y: scroll;
        position:absolute;
        left: 10%;
    }
`