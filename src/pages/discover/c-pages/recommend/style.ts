import styled from 'styled-components'

export const RecommendWrapper = styled.div`
  /* > 代表直接子元素 */

  .content {
    border: 1px solid #d3d3d3;
    display: flex;

    > .left {
      padding: 20px;
      width: 729px;
    }

    > .right {
      margin-left: 1px;
      border: 1px solid #d3d3d3;
      width: 250px;
    }
  }
`
