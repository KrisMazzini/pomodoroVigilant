import styled from "styled-components"

export const Container = styled.div`
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
        letter-spacing: -0.05em;
    }
`