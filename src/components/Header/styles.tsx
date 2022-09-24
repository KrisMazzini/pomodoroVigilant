import styled from "styled-components"

export const Container = styled.div`
    margin: 2rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    
    img {
        width: 6.25rem;;
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
        color: var(--light);
    }
    
    h2 {
        font-family: var(--inter);
        font-size: var(--size-md);
        font-weight: 400;
        color: var(--light);
    }
`