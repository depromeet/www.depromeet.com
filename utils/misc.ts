export const shareDepromeet = async () => {
  const { clipboard, share, permissions } = navigator;
  const shareData = {
    title: '디프만',
    text: '디프만 11번째 이야기',
    url: 'https://depromeet.com',
  };

  const copySuccessMessage = () => alert('클립보드로 주소가 복사되었습니다.');
  const copyFailMessage = () => alert('주소 복사에 실패했습니다.');

  if (share) {
    await share(shareData);
    return;
  }

  const { state } = await permissions.query({
    name: 'clipboard-write' as PermissionName,
  });

  if (['granted', 'prompt'].includes(state)) {
    clipboard
      .writeText('디프만 11번째 이야기 - www.depromeet.com')
      .then(copySuccessMessage, copyFailMessage);
  }
};

export const openApplySite = () => {
  alert('2022년 2월에 다시 돌아오겠습니다 😄😄');
};
