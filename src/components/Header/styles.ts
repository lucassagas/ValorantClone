import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100px;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 10;

  background: linear-gradient(180deg, #212121 24.7%, rgba(33, 33, 33, 0) 100%);

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;

  > nav ul {
    display: flex;
    list-style: none;

    gap: 50px;

    > li a {
      text-decoration: none;
      color: #fff;
      font-weight: 900;
      text-transform: uppercase;
      transition: color 0.4s;

      &:hover {
        color: #ff4655;
      }
    }
  }
`
