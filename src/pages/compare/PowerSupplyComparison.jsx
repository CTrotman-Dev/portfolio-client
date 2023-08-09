import React from "react";
import Comparison from "../../components/Comparison";
import Seo from "../../components/SEO";
import TitleBanner from "../../components/TitleBanner";

const PowerSupplyComparison = () => {
  const metaData = [
    {
      name: "keywords",
      content:
        "comparison,best,top,tech,smart,smart device,psu, powersupply, power,supply,unit,device,latest",
    },
  ];

  const powersupply = [
    {
      name: "Corsair RM750x",
      price: 159.99,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07B72D43N&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The Corsair RM750x is a powerful and efficient power supply that is perfect for gaming and high-end PC builds. It is certified by 80 PLUS Gold, which means that it is at least 85% efficient at converting power from the wall outlet to your PC. The RM750x also features a fully modular design, so you can only install the cables that you need, which makes it easier to build and maintain your PC.",
      features: [
        {
          name: "80 PLUS Gold certified",
          description:
            "The RM750x is certified by 80 PLUS Gold, which means that it is at least 85% efficient at converting power from the wall outlet to your PC. This means that you will save money on your energy bill, and your PC will generate less heat.",
        },
        {
          name: "Fully modular design",
          description:
            "The RM750x features a fully modular design, so you can only install the cables that you need. This makes it easier to build and maintain your PC, and it also helps to keep your PC clean and organized.",
        },
        {
          name: "Zero RPM Fan Mode",
          description:
            "The RM750x features Zero RPM Fan Mode, which means that the fan will only turn on when the power supply is under load. This helps to keep the power supply quiet, even when it is under heavy use.",
        },
        {
          name: "10 year warranty",
          description:
            "The RM750x is backed by a 10 year warranty, so you can be confident that it will last for many years to come.",
        },
      ],
      amazonLink: "https://amzn.to/3oFS24k",
      onLeft: false,
    },
    {
      name: "SeaSonic FOCUS GX-750",
      price: 139.99,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B077J9G9CH&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The SeaSonic FOCUS GX-750 is a powerful and efficient power supply that is perfect for gaming and high-end PC builds. It is certified by 80 PLUS Gold, which means that it is at least 85% efficient at converting power from the wall outlet to your PC. The FOCUS GX-750 also features a fully modular design, so you can only install the cables that you need, which makes it easier to build and maintain your PC.",
      features: [
        {
          name: "80 PLUS Gold certified",
          description:
            "The FOCUS GX-750 is certified by 80 PLUS Gold, which means that it is at least 85% efficient at converting power from the wall outlet to your PC. This means that you will save money on your energy bill, and your PC will generate less heat.",
        },
        {
          name: "Fully modular design",
          description:
            "The FOCUS GX-750 features a fully modular design, so you can only install the cables that you need. This makes it easier to build and maintain your PC, and it also helps to keep your PC clean and organized.",
        },
        {
          name: "Hybrid Silent Fan Control",
          description:
            "The FOCUS GX-750 features Hybrid Silent Fan Control, which means that the fan will only turn on when the power supply is under load. This helps to keep the power supply quiet, even when it is under heavy use.",
        },
        {
          name: "10 year warranty",
          description:
            "The FOCUS GX-750 is backed by a 10 year warranty, so you can be confident that it will last for many years to come.",
        },
      ],
      amazonLink: "https://amzn.to/3NfgDXA",
      onLeft: true,
    },
    {
      name: "EVGA SuperNOVA 750 P5, 80 Plus Platinum 750W, Fully Modular",
      price: 149.99,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0B3RT9VNQ&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The EVGA SuperNOVA 750 P5, 80 Plus Platinum 750W, Fully Modular is a powerful and efficient power supply that is perfect for gaming and high-end PC builds. It is certified by 80 PLUS Platinum, which means that it is at least 90% efficient at converting power from the wall outlet to your PC. The SuperNOVA 750 P5 also features a fully modular design, so you can only install the cables that you need, which makes it easier to build and maintain your PC.",
      features: [
        {
          name: "80 PLUS Platinum certified",
          description:
            "The SuperNOVA 750 P5 is certified by 80 PLUS Platinum, which means that it is at least 90% efficient at converting power from the wall outlet to your PC. This means that you will save money on your energy bill, and your PC will generate less heat.",
        },
        {
          name: "Fully modular design",
          description:
            "The SuperNOVA 750 P5 features a fully modular design, so you can only install the cables that you need. This makes it easier to build and maintain your PC, and it also helps to keep your PC clean and organized.",
        },
        {
          name: "ECO Mode",
          description:
            "The SuperNOVA 750 P5 features ECO Mode, which can reduce the fan speed by up to 100% when the power supply is under low load. This helps to keep the power supply quiet, even when it is not under heavy use.",
        },
        {
          name: "10 year warranty",
          description:
            "The SuperNOVA 750 P5 is backed by a 10 year warranty, so you can be confident that it will last for many years to come.",
        },
      ],
      amazonLink: "https://amzn.to/41Tkg9M",
      onLeft: false,
    },
    {
      name: "Cooler Master V750 SFX Gold, UK Plug - 750W 80 PLUS Gold, Fully Modular Power Supply Unit",
      price: 129.99,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08DD83CRV&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The Cooler Master V750 SFX Gold is a powerful and efficient power supply that is perfect for gaming and high-end PC builds. It is certified by 80 PLUS Gold, which means that it is at least 85% efficient at converting power from the wall outlet to your PC. The V750 SFX Gold also features a fully modular design, so you can only install the cables that you need, which makes it easier to build and maintain your PC.",
      features: [
        {
          name: "80 PLUS Gold certified",
          description:
            "The V750 SFX Gold is certified by 80 PLUS Gold, which means that it is at least 85% efficient at converting power from the wall outlet to your PC. This means that you will save money on your energy bill, and your PC will generate less heat.",
        },
        {
          name: "Fully modular design",
          description:
            "The V750 SFX Gold features a fully modular design, so you can only install the cables that you need. This makes it easier to build and maintain your PC, and it also helps to keep your PC clean and organized.",
        },
        {
          name: "SFX form factor",
          description:
            "The V750 SFX Gold is a small form factor power supply, which makes it perfect for small form factor cases.",
        },
        {
          name: "10 year warranty",
          description:
            "The V750 SFX Gold is backed by a 10 year warranty, so you can be confident that it will last for many years to come.",
        },
      ],
      amazonLink: "https://amzn.to/40s34Y0",
      onLeft: true,
    },
    {
      name: "be quiet! BN283 Straight Power 11 750W ATX Black power supply unit",
      price: 149.99,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B078X1KZ8N&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The be quiet! Straight Power 11 750W is a powerful and efficient power supply that is perfect for gaming and high-end PC builds. It is certified by 80 PLUS Gold, which means that it is at least 85% efficient at converting power from the wall outlet to your PC. The Straight Power 11 750W also features a fully modular design, so you can only install the cables that you need, which makes it easier to build and maintain your PC.",
      features: [
        {
          name: "80 PLUS Gold certified",
          description:
            "The Straight Power 11 750W is certified by 80 PLUS Gold, which means that it is at least 85% efficient at converting power from the wall outlet to your PC. This means that you will save money on your energy bill, and your PC will generate less heat.",
        },
        {
          name: "Fully modular design",
          description:
            "The Straight Power 11 750W features a fully modular design, so you can only install the cables that you need. This makes it easier to build and maintain your PC, and it also helps to keep your PC clean and organized.",
        },
        {
          name: "Silent Wings 3 fan",
          description:
            "The Straight Power 11 750W features a Silent Wings 3 fan, which is incredibly quiet and efficient. The fan is also PWM controlled, so it can adjust its speed to match the power demands of your PC.",
        },
        {
          name: "10 year warranty",
          description:
            "The Straight Power 11 750W is backed by a 10 year warranty, so you can be confident that it will last for many years to come.",
        },
      ],
      amazonLink: "https://amzn.to/3N3L5E3",
      onLeft: false,
    },
  ];
  return (
    <div className="row devGuides">
      <Seo
        title="Power Supply Unit Comparison"
        description="Comparison of some of the latest Power Supply Units(PSU)."
        meta={metaData}
      />
      <TitleBanner text="PSU Comparison" />
      <div className="devContent">
        <Comparison compareList={powersupply} />
      </div>
    </div>
  );
};
export default PowerSupplyComparison;
