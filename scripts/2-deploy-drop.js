import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";


const app = sdk.getAppModule("0xfAa918b85378176C5488db2f56D4eE5E565e30cE");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      // The collection's name, ex. CryptoPunks
      name: "MuiscaDAO Membership",
      // A description for the collection.
      description: "DAO para aceleracion de deproyectos NFT.",
      // The image for the collection that will show up on OpenSea.
      image: ("https://siasky.net/AACg5ySNvFM5PUFZV8C_wixZD4jwKkunsZtUFQ4mhQjGXg"),
      // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the module.
      // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
      // you can set this to your own wallet address if you want to charge for the drop.
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });
    
    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})()