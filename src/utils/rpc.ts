import { ApiPromise, WsProvider} from '@polkadot/api';

export const connect = async (types: any) => {
    console.log('Using rpc node ws url ', process.env.REACT_APP_CHAIN_NODE_WS_URL)
    console.log('Using rpc node ws port:', process.env.REACT_APP_CHAIN_RPC_WS_PORT)
    if(process.env.REACT_APP_CHAIN_NODE_WS_URL && process.env.REACT_APP_CHAIN_NODE_WS_URL) {
        const provider = new WsProvider(process.env.REACT_APP_CHAIN_NODE_WS_URL + ':' + process.env.REACT_APP_CHAIN_RPC_WS_PORT)
        const api = new ApiPromise({ provider, types })
        await api.isReady
        return api
    }
    return null
}
