import { ConnectEmbed } from "@/app/thirdweb";
import { client } from "./client";
import { chain } from "./chain";


export default function Home() {

  return (

    <div style={{
display: "flex",
flexDirection: "column",
alignItems: "center",
margin: "20px auto",
width:"500px",



    }}>


      <h1>Miners Nation</h1>
<ConnectEmbed
client={client}
chain={chain}
/>
</Staking>

    </div>
    
    
    )


}