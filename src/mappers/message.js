import { MESSAGE_TYPE } from '../variables/message'

export class MessageUtil {
  static serverDataToChatMessage({ endereco, googleUrl, images, reviews, messages, title, descricao, isUser }) {
    const arr = []
    if (title) {
      arr.push({
        id: `message-${Date.now()}-${arr.length}`,
        type: MESSAGE_TYPE.TITLE,
        message: title,
        isUser: isUser || false,
      })
    }

    if (descricao) {
      arr.push({
        id: `message-${Date.now()}-${arr.length}`,
        type: MESSAGE_TYPE.MESSAGE,
        message: descricao,
        isUser: isUser || false,
      })
    }

    if (images && images.length) {
      arr.push({
        id: `message-${Date.now()}-${arr.length}`,
        type: MESSAGE_TYPE.IMAGE,
        message: images,
        isUser: isUser || false,
      })
    }
    if (googleUrl || endereco) {
      arr.push({
        id: `message-${Date.now()}-${arr.length}`,
        type: MESSAGE_TYPE.GOOGLE_LINK,
        message: endereco,
        link: googleUrl,
        isUser: isUser || false,
      })
    }

    if (reviews && reviews.length) {
      arr.push({
        id: `message-${Date.now()}-${arr.length}`,
        type: MESSAGE_TYPE.REVIEW,
        message: reviews,
        isUser: isUser || false,
      })
    }

    messages.forEach((r) => {
      arr.push({
        id: `message-${Date.now()}-${arr.length}`,
        message: r,
        isUser: isUser || false,
      })
    })

    return arr
  }
}
