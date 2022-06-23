import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(
  "0x3fACA88A0882626DeC3a73F95b12CBDfc03eF52D",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Miembro MuiscaDAO",
        description: "NFT miembros de MuiscaDAO!",
        image: ("https://siasky.net/AAC68CocwqKHHN1qn2tlD5pXs9aeSXR5sZ6jU1T3QuAZXA"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()