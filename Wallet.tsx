import { ConnectButton } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import { inAppWallet, createWallet } from "thirdweb/wallets";

const client = createThirdwebClient({
  clientId: import.meta.env.VITE_CLIENT_ID!,
});

const wallets = [
  inAppWallet({
    auth: {
      options: [
        "google",
        "discord",
        "farcaster",
        "email",
        "x",
        "passkey",
        "telegram",
        "phone",
      ],
    },
  }),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
  createWallet("io.metamask"),
];

function Wallet({title  }: {title?: string}) {
  return (
   <ConnectButton
      client={client}
      connectButton={{ label: title ? title : "Connect Wallet" }}
      connectModal={{ size: "compact" }}
      wallets={wallets}
    />

  );

}
export default Wallet;
