import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  > video {
    display: absolute;
    width: 120vw;
    height: 100vh;
  }

  > main {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    position: absolute;

    top: -100%;
    z-index: 2;

    justify-content: center;

    padding: 40px;
    position: relative;

    > strong {
      font-size: 28px;
      color: #fff;
    }

    > img {
      margin: 30px 0;
    }

    > button {
      width: 250px;
      height: 60px;
      border: 0;

      background: none;
      padding: 5px;

      position: relative;

      &::after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: calc(50% - 0.6rem);

        border: 1px solid #fff;
        border-bottom: 0;

        top: 0;
        left: -1px;
      }

      &::before {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: calc(50% - 0.6rem);

        border: 1px solid #fff;
        border-top: 0;

        bottom: 0;
        left: -1px;
      }

      > div {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        background: #ff4655;

        position: relative;
        overflow: hidden;

        > span {
          text-transform: uppercase;
          font-size: 20px;
          color: #ffff;
          font-weight: 900;
          z-index: 1;
        }

        > div {
          width: calc(100% + 15px);
          height: 100%;

          background: #0f1923;
          transition: all 0.5s;

          position: absolute;
          top: 0;

          transform: translateX(-110%) skew(-13deg);
        }

        &:hover {
          > div {
            transform: translateX(0) skew(-13deg);
          }
        }
      }
    }
  }

  > aside {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 40px;

    right: 40px;
    bottom: 100px;

    > svg {
      color: #fff;
      transition: color 0.4s;
      cursor: pointer;

      &:hover {
        color: #ff4655;
      }
    }
  }
`
