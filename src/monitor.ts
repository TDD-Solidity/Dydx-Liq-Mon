require('dotenv').config();

import { getLiquidatableSoloAccounts, getExpiredAccounts, getSoloMarkets } from './dydx-caller';

async function startMonitor() {

    setInterval(async (interval: number) => {

        const liquidatableAccounts = await getLiquidatableSoloAccounts();
        const expiredAccounts = await getExpiredAccounts();
        const soloMarkets = await getSoloMarkets();

        console.log('Got stuff!\n\n')

        console.log({ liquidatableAccounts })
        console.log({ expiredAccounts })
        console.log({ soloMarkets: JSON.stringify(soloMarkets, null, 2) })

    }, +process.env.SOLO_LIQUIDATE_POLL_INTERVAL_MS )

}

startMonitor();