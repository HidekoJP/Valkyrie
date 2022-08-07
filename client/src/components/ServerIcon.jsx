
import styled from 'styled-components';

export const ServerIcon = styled.div`
    position: relative;
    width: 50px;
    aspect-ratio: 1/1;
    border-radius: 50%;

    background-color: var(--madison);
    background-image: ${({ guild }) => `url(${guild})`};
    background-size: cover;
    background-position: center;

    display: flex;
    align-items: center;
    justify-content: center;

    // States
    &:hover{
        cursor: pointer;
        border-radius: 30%;
        background-color: var(--azure-radiance);
    }

    transition: 0.2s ease;
`;

export const HomeIcon = styled(ServerIcon)`
    background: var(--madison);
    font-size: 1.5rem;
    &:hover{background: var(--azure-radiance);}
`
export const CreateServerIcon = styled(ServerIcon)`
    background: var(--madison);
    &:hover{background: #44af69;}
`