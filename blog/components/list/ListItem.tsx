import styled from "styled-components";


export const ListItem = styled.li`
    margin: 2rem 0;
    padding-left: 20px;
    font-size: 1rem;
    position: relative;
    z-index: 999;

`

const ListNumber = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ListBullet = styled.i`
    z-index: -999;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    position: absolute;
    left: -15px;
    background: var(--color-fg-primary);

`