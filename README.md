# DYDX-Liq-Mon
Liquidation opportunity monitor for dydx.

This is a simpler, non-trade-executing version of the official [DYDX Liquidator Bot](https://github.com/dydxprotocol/liquidator)...

<br/>
<br/>

# Usage

- clone this repo
```
git clone git@github.com:TDD-Solidity/Dydx-Liq-Mon.git
```

- install dependencies
```
npm i
```

- run the start command
```
npm start
```

The frequency that endpoints are called can be configured via the variable in the .env file. 

On each interaction it calls three endpoints and logs the data to the console:

1. 


<br/>
<br/>

## TODOs

Ideas for making this even better...

- Write to a file / database? and possibly only write when it _actually_ finds a liquidatable account?

- Have some kind of counter- how many liquidatable accounts did it find in a day / week / month?

