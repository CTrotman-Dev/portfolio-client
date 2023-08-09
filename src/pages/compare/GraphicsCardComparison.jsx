import React from "react";
import Comparison from "../../components/Comparison";
import Seo from "../../components/SEO";
import TitleBanner from "../../components/TitleBanner";

const GraphicsCardComparison = () => {
  const metaData = [
    {
      name: "keywords",
      content:
        "comparison,best,top,tech,smart,smart device,gpu,graphics,card,graphics card,unit,device,latest",
    },
  ];
  const graphicscards = [
    {
      name: "Nvidia GeForce RTX 4090",
      price: 1499.99,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09YCLG5PB&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The Nvidia GeForce RTX 4090 is the most powerful graphics card on the market. It offers excellent performance for gaming, 4K video editing, and other demanding tasks. It is powered by the NVIDIA Ada Lovelace architecture and comes with 24 GB of GDDR6X memory to deliver the ultimate experience for gamers and creators.",
      features: [
        {
          name: "NVIDIA Ada Lovelace architecture",
          description:
            "The NVIDIA Ada Lovelace architecture is the most advanced GPU architecture ever created by NVIDIA. It offers a significant leap in performance, efficiency, and AI-powered graphics.",
        },
        {
          name: "24 GB of GDDR6X memory",
          description:
            "The RTX 4090 comes with 24 GB of GDDR6X memory, which is the most memory ever offered on a consumer graphics card. This gives you the power to play games at the highest settings and resolutions, and to edit 4K video without any slowdown.",
        },
        {
          name: "16,384 CUDA cores",
          description:
            "The RTX 4090 has 16,384 CUDA cores, which is more than any other consumer graphics card on the market. This gives you the power to tackle the most demanding games and applications with ease.",
        },
        {
          name: "Up to 240 FPS in 4K gaming",
          description:
            "The RTX 4090 is capable of delivering up to 240 FPS in 4K gaming, which means that you can play your favorite games at the highest settings and resolutions without any slowdown.",
        },
        {
          name: "8K video editing",
          description:
            "The RTX 4090 is powerful enough to edit 8K video without any slowdown. This means that you can create stunning videos with incredible detail and clarity.",
        },
      ],
      amazonLink: "https://amzn.to/3L5a1IK",
      onLeft: false,
    },
    {
      name: "Nvidia GeForce RTX 4080",
      price: 999.99,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0BHF1PVCW&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The Nvidia GeForce RTX 4080 is a powerful graphics card that offers excellent performance for gaming, 4K video editing, and other demanding tasks. It is powered by the NVIDIA Ada Lovelace architecture and comes with 16 GB of GDDR6X memory to deliver the ultimate experience for gamers and creators.",
      features: [
        {
          name: "NVIDIA Ada Lovelace architecture",
          description:
            "The NVIDIA Ada Lovelace architecture is the most advanced GPU architecture ever created by NVIDIA. It offers a significant leap in performance, efficiency, and AI-powered graphics.",
        },
        {
          name: "16 GB of GDDR6X memory",
          description:
            "The RTX 4080 comes with 16 GB of GDDR6X memory, which is plenty of memory for gaming, video editing, and other demanding tasks.",
        },
        {
          name: "10,240 CUDA cores",
          description:
            "The RTX 4080 has 10,240 CUDA cores, which is more than enough power to tackle the most demanding games and applications.",
        },
        {
          name: "Up to 180 FPS in 4K gaming",
          description:
            "The RTX 4080 is capable of delivering up to 180 FPS in 4K gaming, which means that you can play your favorite games at the highest settings and resolutions without any slowdown.",
        },
        {
          name: "8K video editing",
          description:
            "The RTX 4080 is powerful enough to edit 8K video without any slowdown. This means that you can create stunning videos with incredible detail and clarity.",
        },
      ],
      amazonLink: "https://amzn.to/3L17kbl",
      onLeft: true,
    },
    {
      name: "AMD Radeon RX 7900 XTX",
      price: 799.99,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0BNLSW23M&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The AMD Radeon RX 7900 XTX is a powerful graphics card that offers excellent performance for gaming, 4K video editing, and other demanding tasks. It is powered by the AMD RDNA 3 architecture and comes with 16 GB of GDDR6 memory to deliver the ultimate experience for gamers and creators.",
      features: [
        {
          name: "AMD RDNA 3 architecture",
          description:
            "The AMD RDNA 3 architecture is the most advanced GPU architecture ever created by AMD. It offers a significant leap in performance, efficiency, and AI-powered graphics.",
        },
        {
          name: "16 GB of GDDR6 memory",
          description:
            "The RX 7900 XTX comes with 16 GB of GDDR6 memory, which is plenty of memory for gaming, video editing, and other demanding tasks.",
        },
        {
          name: "5,120 stream processors",
          description:
            "The RX 7900 XTX has 5,120 stream processors, which is more than enough power to tackle the most demanding games and applications.",
        },
        {
          name: "Up to 200 FPS in 4K gaming",
          description:
            "The RX 7900 XTX is capable of delivering up to 200 FPS in 4K gaming, which means that you can play your favorite games at the highest settings and resolutions without any slowdown.",
        },
        {
          name: "8K video editing",
          description:
            "The RX 7900 XTX is powerful enough to edit 8K video without any slowdown. This means that you can create stunning videos with incredible detail and clarity.",
        },
      ],
      amazonLink: "https://amzn.to/3owGHDr",
      onLeft: false,
    },
    {
      name: "Nvidia GeForce RTX 4070",
      price: 599.99,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0BYZJWDNC&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The Nvidia GeForce RTX 4070 is a powerful graphics card that offers excellent performance for gaming, 4K video editing, and other demanding tasks. It is powered by the NVIDIA Ada Lovelace architecture and comes with 12 GB of GDDR6X memory to deliver the ultimate experience for gamers and creators.",
      features: [
        {
          name: "NVIDIA Ada Lovelace architecture",
          description:
            "The NVIDIA Ada Lovelace architecture is the most advanced GPU architecture ever created by NVIDIA. It offers a significant leap in performance, efficiency, and AI-powered graphics.",
        },
        {
          name: "12 GB of GDDR6X memory",
          description:
            "The RTX 4070 comes with 12 GB of GDDR6X memory, which is plenty of memory for gaming, video editing, and other demanding tasks.",
        },
        {
          name: "5,888 CUDA cores",
          description:
            "The RTX 4070 has 5,888 CUDA cores, which is more than enough power to tackle the most demanding games and applications.",
        },
        {
          name: "Up to 144 FPS in 4K gaming",
          description:
            "The RTX 4070 is capable of delivering up to 144 FPS in 4K gaming, which means that you can play your favorite games at the highest settings and resolutions without any slowdown.",
        },
        {
          name: "8K video editing",
          description:
            "The RTX 4070 is powerful enough to edit 8K video without any slowdown. This means that you can create stunning videos with incredible detail and clarity.",
        },
      ],
      amazonLink: "https://amzn.to/41PK4Ud",
      onLeft: true,
    },
    {
      name: "AMD Radeon™ RX 6950 XT",
      price: 999.99,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0BKPT56HK&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The AMD Radeon™ RX 6950 XT is a powerful graphics card that offers excellent performance for gaming, 4K video editing, and other demanding tasks. It is powered by the AMD RDNA 2 architecture and comes with 16GB of GDDR6 memory to deliver the ultimate experience for gamers and creators.",
      features: [
        {
          name: "AMD RDNA 2 architecture",
          description:
            "The AMD RDNA 2 architecture is the most advanced GPU architecture ever created by AMD. It offers a significant leap in performance, efficiency, and AI-powered graphics.",
        },
        {
          name: "16GB of GDDR6 memory",
          description:
            "The RX 6950 XT comes with 16GB of GDDR6 memory, which is plenty of memory for gaming, video editing, and other demanding tasks.",
        },
        {
          name: "5,120 stream processors",
          description:
            "The RX 6950 XT has 5,120 stream processors, which is more than enough power to tackle the most demanding games and applications.",
        },
        {
          name: "Up to 210 FPS in 4K gaming",
          description:
            "The RX 6950 XT is capable of delivering up to 210 FPS in 4K gaming, which means that you can play your favorite games at the highest settings and resolutions without any slowdown.",
        },
        {
          name: "8K video editing",
          description:
            "The RX 6950 XT is powerful enough to edit 8K video without any slowdown. This means that you can create stunning videos with incredible detail and clarity.",
        },
      ],
      amazonLink: "https://amzn.to/3Ak23qm",
      onLeft: false,
    },
    {
      name: "Nvidia GeForce RTX 3070 Ti",
      price: 599.99,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B095X6RLJW&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The Nvidia GeForce RTX 3070 Ti is a powerful graphics card that offers excellent performance for gaming, 4K video editing, and other demanding tasks. It is powered by the NVIDIA Ampere architecture and comes with 12GB of GDDR6X memory to deliver the ultimate experience for gamers and creators.",
      features: [
        {
          name: "NVIDIA Ampere architecture",
          description:
            "The NVIDIA Ampere architecture is the most advanced GPU architecture ever created by NVIDIA. It offers a significant leap in performance, efficiency, and AI-powered graphics.",
        },
        {
          name: "12GB of GDDR6X memory",
          description:
            "The RTX 3070 Ti comes with 12GB of GDDR6X memory, which is plenty of memory for gaming, video editing, and other demanding tasks.",
        },
        {
          name: "5,888 CUDA cores",
          description:
            "The RTX 3070 Ti has 5,888 CUDA cores, which is more than enough power to tackle the most demanding games and applications.",
        },
        {
          name: "Up to 160 FPS in 4K gaming",
          description:
            "The RTX 3070 Ti is capable of delivering up to 160 FPS in 4K gaming, which means that you can play your favorite games at the highest settings and resolutions without any slowdown.",
        },
        {
          name: "8K video editing",
          description:
            "The RTX 3070 Ti is powerful enough to edit 8K video without any slowdown. This means that you can create stunning videos with incredible detail and clarity.",
        },
      ],
      amazonLink: "https://amzn.to/3L3NKew",
      onLeft: true,
    },
    {
      name: "Nvidia GeForce RTX 3060 Ti",
      price: 399.99,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0BQJLPVSP&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The Nvidia GeForce RTX 3060 Ti is a powerful graphics card that offers excellent performance for gaming, 4K video editing, and other demanding tasks. It is powered by the NVIDIA Ampere architecture and comes with 8GB of GDDR6 memory to deliver the ultimate experience for gamers and creators.",
      features: [
        {
          name: "NVIDIA Ampere architecture",
          description:
            "The NVIDIA Ampere architecture is the most advanced GPU architecture ever created by NVIDIA. It offers a significant leap in performance, efficiency, and AI-powered graphics.",
        },
        {
          name: "8GB of GDDR6 memory",
          description:
            "The RTX 3060 Ti comes with 8GB of GDDR6 memory, which is plenty of memory for gaming, video editing, and other demanding tasks.",
        },
        {
          name: "4,864 CUDA cores",
          description:
            "The RTX 3060 Ti has 4,864 CUDA cores, which is more than enough power to tackle the most demanding games and applications.",
        },
        {
          name: "Up to 120 FPS in 4K gaming",
          description:
            "The RTX 3060 Ti is capable of delivering up to 120 FPS in 4K gaming, which means that you can play your favorite games at the highest settings and resolutions without any slowdown.",
        },
        {
          name: "8K video editing",
          description:
            "The RTX 3060 Ti is powerful enough to edit 8K video without any slowdown. This means that you can create stunning videos with incredible detail and clarity.",
        },
      ],
      amazonLink: "https://amzn.to/40s83bf",
      onLeft: false,
    },
  ];
  return (
    <div className="row devGuides">
      <Seo
        title="Graphics Card Comparison"
        description="Comparison of some of the latest Graphics Cards(GPU's)."
        meta={metaData}
      />
      <TitleBanner text="GPU Comparison" />
      <div className="devContent">
        <Comparison compareList={graphicscards} />
      </div>
    </div>
  );
};
export default GraphicsCardComparison;
