"use client";

import { useActiveAccount } from "thirdweb/react";

export const Staking = () => {
    const account = useActiveAccount();

    if(account){
        return(
            <div style= {{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor:"#15151515"
            
            
            }}>

            </div>
        )
    }


}