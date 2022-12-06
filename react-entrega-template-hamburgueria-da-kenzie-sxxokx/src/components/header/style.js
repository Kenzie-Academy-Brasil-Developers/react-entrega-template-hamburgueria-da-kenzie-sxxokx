import styled from "styled-components";

export const StyledHeader = styled.div`

    height: 140px;
    background-color: #F5F5F5;
    
    div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 26px;
    gap: 10px;
    }
    input{
        height: 60px;
        width: 90%;
        border-radius: 8px;
        border: solid 1px #E0E0E0;
        padding: 0px 10px 0px 15px;
    }

    @media(min-width: 800px){
        height:80px;
        div{
        width: 85%;
        flex-direction:row;
        justify-content:space-between;
        padding: 0px 6rem;

        }
        input{
            width: 350px;
            margin-top: 8px;
        }
    }
`