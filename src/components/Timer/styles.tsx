import styled from "styled-components"

export const Container = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    background: linear-gradient(
        90deg,
        var(--green),
        var(--blue),
        var(--purple),
        var(--pink)
        );
    background-clip: text;

    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    * {
        color: transparent;
    }
    
    > span {
        font-family: var(--audiowide);
        font-size: var(--size-xxxlg);
        line-height: var(--size-xxxlg);
        font-weight: 900;
    }
`