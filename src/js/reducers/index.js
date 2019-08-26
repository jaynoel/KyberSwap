import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import session from 'redux-persist/lib/storage/session'
import storage from 'redux-persist/lib/storage'
import { routerReducer } from 'react-router-redux'
import * as BLOCKCHAIN_INFO from "../../../env"
import constants from "../services/constants"
import account from './accountReducer'
import tokens from './tokensReducer'
import exchange from './exchangeReducer'
import transfer from './transferReducer'
import limitOrder from './limitOrderReducer'
import global from './globalReducer'
import connection from './connection'
import utils from './utilsReducer'
import txs from './txsReducer'
import locale from './languageReducer'
import market from './marketReducer'
import { localizeReducer } from 'react-localize-redux';

const rootReducer = combineReducers({
  account: persistReducer({
    key: 'account',
    storage: session,
    blacklist:['loading', 'checkTimeImportLedger', 'pKey', 'promoCode', 'walletName', 'error']
  }, account),

  global: persistReducer({
    key: 'global',
    storage: session,
    whitelist:['theme']
  }, global),
  limitOrder: persistReducer({
    key: 'limitOrder',
    storage: storage,  
    whitelist: ['favorite_pairs_anonymous']
  }, limitOrder),
  locale: localizeReducer,
  router: routerReducer,

  exchange, transfer, txs, utils, tokens, market, connection
})


// const appReducer = combineReducers({
//   exchange, transfer, limitOrder, connection, router: routerReducer, market, global, 
//   // market: persistReducer({
//   //   key: 'market',
//   //   storage: localForage
//   // }, market),  
//   locale: localizeReducer,
//   tokens, txs,
//   utils,
//   // locale: persistReducer({
//   //   key: 'locale',
//   //   storage: localForage
//   // }, locale),  
//   account: persistReducer({
//     key: 'account',
//     storage: session
//   }, account),  
//   txs: persistReducer({
//     key: 'txs',
//     storage: session
//   }, txs),
//   // global: persistReducer({
//   //   key: 'global',
//   //   storage: localForage,
//   //   blacklist: ['conn_checker', 'analizeError', 'isOpenAnalyze', 'termOfServiceAccepted']
//   // }, global)
// })


export default rootReducer

