import styled from 'styled-components';

export const Container = styled.header`

    background: var(--blue);

`

export const Content = styled.div`

    max-width: 1120px;
    margin: 0 auto; /* Centralização */

    padding: 2rem 1rem 12rem; /* 1 rem = tamanho do font-size global*/
    display: flex;
    align-items: center;
    justify-content: space-between; /*Espaço entre todos os items dentro do content */

    button {
        font-size: 1rem;
        color: #FFF;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem; /* 32px a esquerda e a direita*/
        border-radius: 0.25rem; /* 4px */
        height: 3rem; /* 48px de altura */

        transition: filter 0.2s; /*Toda vez que o filter é alterado, ele faz uma transação do efeito em 0.2 segundos */

        &:hover{
        filter: brightness(0.9) /* Escurece o botão e oq tiver dentro*/
    }
 }


`