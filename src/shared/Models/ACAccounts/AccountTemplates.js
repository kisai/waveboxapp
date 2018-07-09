import SERVICE_TYPES from './ServiceTypes'

const ACCOUNT_TEMPLATES = Object.freeze({
  CONTAINER: Object.freeze({
    type: 'CONTAINER',
    color: 'rgb(255, 255, 255)',
    displayName: 'Container',
    hasAuthStep: false,
    serviceTypes: [
      SERVICE_TYPES.CONTAINER
    ],
    defaultServiceTypes: [
      SERVICE_TYPES.CONTAINER
    ]
  }),
  GENERIC: Object.freeze({
    type: 'GENERIC',
    color: '#2ecc71',
    displayName: 'Weblink',
    hasAuthStep: false,
    serviceTypes: [
      SERVICE_TYPES.GENERIC
    ],
    defaultServiceTypes: [
      SERVICE_TYPES.GENERIC
    ]
  }),
  GOOGLE_MAIL: Object.freeze({
    type: 'GOOGLE_MAIL',
    color: 'rgb(220, 75, 75)',
    displayName: 'Google',
    hasAuthStep: true,
    serviceTypes: [
      SERVICE_TYPES.GOOGLE_MAIL,
      SERVICE_TYPES.GOOGLE_DRIVE,
      SERVICE_TYPES.GOOGLE_CONTACTS,
      SERVICE_TYPES.GOOGLE_KEEP,
      SERVICE_TYPES.GOOGLE_CALENDAR,
      SERVICE_TYPES.GOOGLE_PHOTOS,
      SERVICE_TYPES.GOOGLE_HANGOUTS,
      SERVICE_TYPES.GOOGLE_DOCS,
      SERVICE_TYPES.GOOGLE_SHEETS,
      SERVICE_TYPES.GOOGLE_SLIDES,
      SERVICE_TYPES.GOOGLE_PLUS,
      SERVICE_TYPES.GOOGLE_ANALYTICS,
      SERVICE_TYPES.GOOGLE_YOUTUBE,
      SERVICE_TYPES.GOOGLE_ALLO,
      SERVICE_TYPES.GOOGLE_MUSIC,
      SERVICE_TYPES.GOOGLE_ADMIN,
      SERVICE_TYPES.GOOGLE_FI,
      SERVICE_TYPES.GOOGLE_CLASSROOM,
      SERVICE_TYPES.GOOGLE_CHAT,
      SERVICE_TYPES.GOOGLE_VOICE
    ],
    defaultServiceTypes: [
      SERVICE_TYPES.GOOGLE_MAIL,
      SERVICE_TYPES.GOOGLE_DRIVE,
      SERVICE_TYPES.GOOGLE_CONTACTS,
      SERVICE_TYPES.GOOGLE_KEEP,
      SERVICE_TYPES.GOOGLE_CALENDAR,
      SERVICE_TYPES.GOOGLE_PHOTOS,
      SERVICE_TYPES.GOOGLE_HANGOUTS,
      SERVICE_TYPES.GOOGLE_DOCS,
      SERVICE_TYPES.GOOGLE_SHEETS,
      SERVICE_TYPES.GOOGLE_SLIDES
    ]
  }),
  GOOGLE_INBOX: Object.freeze({
    type: 'GOOGLE_INBOX',
    color: 'rgb(66, 133, 244)',
    displayName: 'Google',
    hasAuthStep: true,
    serviceTypes: [
      SERVICE_TYPES.GOOGLE_INBOX,
      SERVICE_TYPES.GOOGLE_DRIVE,
      SERVICE_TYPES.GOOGLE_CONTACTS,
      SERVICE_TYPES.GOOGLE_KEEP,
      SERVICE_TYPES.GOOGLE_CALENDAR,
      SERVICE_TYPES.GOOGLE_PHOTOS,
      SERVICE_TYPES.GOOGLE_HANGOUTS,
      SERVICE_TYPES.GOOGLE_DOCS,
      SERVICE_TYPES.GOOGLE_SHEETS,
      SERVICE_TYPES.GOOGLE_SLIDES,
      SERVICE_TYPES.GOOGLE_PLUS,
      SERVICE_TYPES.GOOGLE_ANALYTICS,
      SERVICE_TYPES.GOOGLE_YOUTUBE,
      SERVICE_TYPES.GOOGLE_ALLO,
      SERVICE_TYPES.GOOGLE_MUSIC,
      SERVICE_TYPES.GOOGLE_ADMIN,
      SERVICE_TYPES.GOOGLE_FI,
      SERVICE_TYPES.GOOGLE_CLASSROOM,
      SERVICE_TYPES.GOOGLE_CHAT,
      SERVICE_TYPES.GOOGLE_VOICE
    ],
    defaultServiceTypes: [
      SERVICE_TYPES.GOOGLE_INBOX,
      SERVICE_TYPES.GOOGLE_DRIVE,
      SERVICE_TYPES.GOOGLE_CONTACTS,
      SERVICE_TYPES.GOOGLE_KEEP,
      SERVICE_TYPES.GOOGLE_CALENDAR,
      SERVICE_TYPES.GOOGLE_PHOTOS,
      SERVICE_TYPES.GOOGLE_HANGOUTS,
      SERVICE_TYPES.GOOGLE_DOCS,
      SERVICE_TYPES.GOOGLE_SHEETS,
      SERVICE_TYPES.GOOGLE_SLIDES
    ]
  }),
  OFFICE365: Object.freeze({
    type: 'OFFICE365',
    color: 'rgb(237, 70, 47)',
    displayName: 'Office 365',
    hasAuthStep: true,
    serviceTypes: [
      SERVICE_TYPES.MICROSOFT_MAIL,
      SERVICE_TYPES.MICROSOFT_ONEDRIVE,
      SERVICE_TYPES.MICROSOFT_CONTACTS,
      SERVICE_TYPES.MICROSOFT_TASKS,
      SERVICE_TYPES.MICROSOFT_CALENDAR,
      SERVICE_TYPES.MICROSOFT_WORD,
      SERVICE_TYPES.MICROSOFT_EXCEL,
      SERVICE_TYPES.MICROSOFT_POWERPOINT,
      SERVICE_TYPES.MICROSOFT_ONENOTE,
      SERVICE_TYPES.MICROSOFT_TEAMS,
      SERVICE_TYPES.MICROSOFT_TODO
    ],
    defaultServiceTypes: [
      SERVICE_TYPES.MICROSOFT_MAIL,
      SERVICE_TYPES.MICROSOFT_ONEDRIVE,
      SERVICE_TYPES.MICROSOFT_CONTACTS,
      SERVICE_TYPES.MICROSOFT_TASKS,
      SERVICE_TYPES.MICROSOFT_CALENDAR,
      SERVICE_TYPES.MICROSOFT_ONENOTE
    ]
  }),
  OUTLOOK: Object.freeze({
    type: 'OUTLOOK',
    color: '#0078d7',
    displayName: 'Outlook',
    hasAuthStep: true,
    serviceTypes: [
      SERVICE_TYPES.MICROSOFT_MAIL,
      SERVICE_TYPES.MICROSOFT_ONEDRIVE,
      SERVICE_TYPES.MICROSOFT_CONTACTS,
      SERVICE_TYPES.MICROSOFT_TASKS,
      SERVICE_TYPES.MICROSOFT_CALENDAR,
      SERVICE_TYPES.MICROSOFT_WORD,
      SERVICE_TYPES.MICROSOFT_EXCEL,
      SERVICE_TYPES.MICROSOFT_POWERPOINT,
      SERVICE_TYPES.MICROSOFT_ONENOTE,
      SERVICE_TYPES.MICROSOFT_TEAMS,
      SERVICE_TYPES.MICROSOFT_TODO
    ],
    defaultServiceTypes: [
      SERVICE_TYPES.MICROSOFT_MAIL,
      SERVICE_TYPES.MICROSOFT_ONEDRIVE,
      SERVICE_TYPES.MICROSOFT_CONTACTS,
      SERVICE_TYPES.MICROSOFT_TASKS,
      SERVICE_TYPES.MICROSOFT_CALENDAR,
      SERVICE_TYPES.MICROSOFT_ONENOTE
    ]
  }),
  SLACK: Object.freeze({
    type: 'SLACK',
    color: 'rgb(102, 187, 152)',
    displayName: 'Slack',
    hasAuthStep: true,
    serviceTypes: [
      SERVICE_TYPES.SLACK
    ],
    defaultServiceTypes: [
      SERVICE_TYPES.SLACK
    ]
  }),
  TRELLO: Object.freeze({
    type: 'TRELLO',
    displayName: 'Trello',
    hasAuthStep: true,
    serviceTypes: [
      SERVICE_TYPES.TRELLO
    ],
    defaultServiceTypes: [
      SERVICE_TYPES.TRELLO
    ]
  })
})
const ACCOUNT_TEMPLATE_TYPES = Object.keys(ACCOUNT_TEMPLATES).reduce((acc, k) => {
  acc[k] = k
  return acc
}, {})
const ACCOUNT_TEMPLATE_TYPE_LIST = Object.keys(ACCOUNT_TEMPLATES)

export default {
  ACCOUNT_TEMPLATES,
  ACCOUNT_TEMPLATE_TYPES,
  ACCOUNT_TEMPLATE_TYPE_LIST
}
export {
  ACCOUNT_TEMPLATES,
  ACCOUNT_TEMPLATE_TYPES,
  ACCOUNT_TEMPLATE_TYPE_LIST
}
