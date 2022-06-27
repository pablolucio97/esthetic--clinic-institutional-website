import styled from 'styled-components'

export const Container = styled.ul`
display: flex;
flex-direction: column;
`
export const Item = styled.li`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 300;
  list-style: square;
  text-align: justify;
  margin: 4px 0;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`