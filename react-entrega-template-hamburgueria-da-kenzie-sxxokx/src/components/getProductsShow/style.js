import styled from "styled-components";

export const StyledGetProductsShow = styled.li`
    width: 300px;
    height: 346px;
    border-radius: 8px;
    box-shadow: rgba(60, 64, 67, 0.2) 0px 1px 2px 0px, rgba(60, 64, 67, 0.2) 0px 1px 3px 1px;
    list-style: none;

    img{
        background-color: #F5F5F5;
        width: 100%;
        height: 150px;
        object-fit:contain;
    }
    div{
        padding: 0px 16px;
        display: flex;
        flex-direction: column;
        text-align: start;
        gap: 8px;
    }
    h3{
        font-size: 18px;
        font-weight: 700;
    }
    p{
        font-size: 12px;
        font-weight: 400;

        color: #828282;
    }
    span{
        color: #27AE60;
        font-size: 14px;
        font-weight: 600;
    }
    button{
        background-color: #27AE60;
        color: #F5F5F5;
        width: 100px;
        height: 40px;
        border: none;
        border-radius: 8px;
        padding: 0px 20px

    }


`
