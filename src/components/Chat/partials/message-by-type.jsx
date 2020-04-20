import React, { useMemo } from 'react'
import { MESSAGE_TYPE } from '../../../variables/message'

import { ChatMessage } from './message'
import { ChatImages } from './images'
import { ChatReview } from './review'
import { ChatGoogleLink } from './google-link'
import { ChatTitle } from './title'

export const ChatMessageByType = (props) => {
  const Component = useMemo(() => {
    switch (props.type) {
      case MESSAGE_TYPE.MESSAGE: {
        return ChatMessage
      }
      case MESSAGE_TYPE.GOOGLE_LINK: {
        return ChatGoogleLink
      }
      case MESSAGE_TYPE.IMAGE: {
        return ChatImages
      }
      case MESSAGE_TYPE.REVIEW: {
        return ChatReview
      }
      case MESSAGE_TYPE.TITLE: {
        return ChatTitle
      }
      default: {
        return ChatMessage
      }
    }
  }, [])

  return <Component {...props} />
}
