import { ConnectEmbed } from "thirdweb/react";

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
chain=
/>

    </div>
    
    
    )


}