"use client";

import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { ConnectButton, useActiveAccount } from "thirdweb/react";

export const Staking = () => {
    const account = useActiveAccount();

    if(account){
        return(
            <div style= {{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor:"#151515",
            borderRadius:"8px",
            width:"200px",
            padding: "20px",
            
            
            }}>
<ConnectButton
 client = {client}
 chain= {chain}
/>
<div style= {{
display: 'flex',
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
margin: "20px 0",
width: "100%",
}}>

<h2 style={{marginRight: "20px" color}}>Claim NFT GSD </h2>
</div>



            </div>
        )
    }


}