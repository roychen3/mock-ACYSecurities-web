import styled from 'styled-components'

export const StyledContentLayout = styled.div`
width: 90%;
margin: 0px auto;
padding: 40px 0;

@media (min-width: ${({ theme }) => theme.media.largeDevices}) {
    width: 80%;
    padding: 80px 0;
}
`