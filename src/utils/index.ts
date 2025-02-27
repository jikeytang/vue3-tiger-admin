import { ProjectName } from '@/config/constants'
import { INotice } from '@/types/global'
import { Notification } from '@arco-design/web-vue'

export function setPageTitle(titleText: string | unknown) {
  window.document.title = `${titleText ? ` ${titleText} - ` : ''}${ProjectName}`
}

export const uuid = (prefix = 'app-') => {
  const s: any = []
  const hexDigits = '0123456789abcdef'
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.slice(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.slice((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-'

  const uuid = s.join('')
  return prefix + uuid
}

// 下载二维码
export const downLoadQRcode = (id: string, title = '二维码'): void => {
  const canvas = document.getElementById(id) as HTMLCanvasElement
  const url = canvas.toDataURL('image/png') // 通过 toDataURL 返回一个包含图片展示的 data URI
  const aDom = document.createElement('a')
  aDom.download = title // 设置下载的文件名
  aDom.href = url
  document.body.appendChild(aDom)
  aDom.click()
  aDom.remove()
}

// 通知封装，方便简单调用
export const notice = ({ type = 'success', content, duration = 3000, ...props }: INotice): void => {
  Notification[type]({ content, duration, ...props })
}
