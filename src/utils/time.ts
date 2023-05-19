/**
 * 获取当前时间返回 早上-下午-晚上
 */
export const getTime = (): string => {
  let message = ''
  const hours = new Date().getHours()
  if (hours < 12) {
    message = '早上'
  } else if (hours > 12 && hours < 18) {
    message = '下午'
  } else message = '晚上'
  return message
}
