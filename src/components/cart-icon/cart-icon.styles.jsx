import styled from 'styled-components'

export const CartIconContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  
    .shopping-icon {
      width: 24px;
      height: 24px;
    cursor: pointer;

    }
  
    .item-count {
      position: absolute;
      font-size: 10px;
      font-weight: bold;
      bottom: 12px;
    cursor: pointer;

    }
`
