import CoreReducerManifest from '../CoreReducerManifest'
import ServiceReducer from './ServiceReducer'

import CoreGoogleMailServiceReducer from './CoreGoogleMailServiceReducer'
import ContainerServiceReducer from './ContainerServiceReducer'
import GenericServiceData from './GenericServiceReducer'
import GoogleInboxServiceReducer from './GoogleInboxServiceReducer'
import GoogleMailServiceReducer from './GoogleMailServiceReducer'
import SlackServiceReducer from './SlackServiceReducer'
import TrelloServiceReducer from './TrelloServiceReducer'

const manifest = new CoreReducerManifest([
  ServiceReducer,

  CoreGoogleMailServiceReducer,
  ContainerServiceReducer,
  GenericServiceData,
  GoogleInboxServiceReducer,
  GoogleMailServiceReducer,
  SlackServiceReducer,
  TrelloServiceReducer
])

export default manifest
