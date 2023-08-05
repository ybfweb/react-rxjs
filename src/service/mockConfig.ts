import Mock from 'mockjs';

export default function initMock() {
  Mock.setup({
    timeout: 400,
  });
}
