import '../config'
import { ApiPromise, WsProvider} from '@polkadot/api';

export const connect = async (types: any) => {
    console.log('Using rpc node ws url ', process.env.CHAIN_NODE_WS_URL)
    console.log('Using rpc node ws port:', process.env.CHAIN_RPC_WS_PORT)
	const provider = new WsProvider(process.env.CHAIN_NODE_WS_URL + process.env.CHAIN_RPC_WS_PORT)
	const api = new ApiPromise({ provider, types })
	await api.isReady
	return api
}
