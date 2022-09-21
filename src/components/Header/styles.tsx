import styled from "styled-components"

export const Container = styled.div`
    margin: 30px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    img {
        width: 100px;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items : center;
        gap: 5px;
    }

    h1 {
        font-family: var(--syncopate);
        font-size: var(--size-lg);
        font-weight: 900;
    }

    h2 {
        font-family: var(--inter);
        font-size: var(--size-md);
        font-weight: 400;
    }
`