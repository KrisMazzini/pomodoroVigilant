import styled from "styled-components"

export const Container = styled.div`
    width: 11rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-family: var(--syncopate);
        font-size: var(--size-sm);
        font-weight: 400;
    }
    
    span {
        font-family: var(--audiowide);
        font-size: var(--size-xxxlg);
        font-weight: 700;
        vertical-align: middle;
    }
`