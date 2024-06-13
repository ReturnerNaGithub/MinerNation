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
alignItems:

}}

>


</div>



            </div>
        )
    }


}