import React from "react";
import Comparison from "../../components/Comparison";
import Seo from "../../components/SEO";
import TitleBanner from "../../components/TitleBanner";

const SmartphoneComparison = () => {
  const metaData = [
    {
      name: "keywords",
      content:
        "comparison,best,top,tech,smart,smart phone,smartphone,phone,latest",
    },
  ];
  const smartphones = [
    {
      name: "iPhone 13 Pro",
      price: 1299,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09G93BDQ5&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The iPhone 13 Pro is the latest and greatest smartphone from Apple. It features a powerful A15 Bionic chip, a stunning OLED display, and a versatile triple-lens camera system.",
      features: [
        {
          name: "A15 Bionic chip",
          description:
            "The A15 Bionic chip is the fastest chip ever in a smartphone. It delivers up to 50% faster CPU performance and up to 30% faster graphics performance than the previous generation. This makes the iPhone 13 Pro incredibly fast and responsive, even for demanding tasks like gaming and video editing.",
        },
        {
          name: "OLED display",
          description:
            "The iPhone 13 Pro has a stunning OLED display that is perfect for watching movies, playing games, and browsing the web. The display has a resolution of 2532 x 1170 pixels and a peak brightness of 1200 nits. It also supports HDR10 and Dolby Vision for an immersive viewing experience.",
        },
        {
          name: "Triple-lens camera system",
          description:
            "The iPhone 13 Pro has a versatile triple-lens camera system that can take stunning photos and videos in any lighting condition. The system includes a 12-megapixel wide-angle lens, a 12-megapixel ultra-wide-angle lens, and a 12-megapixel telephoto lens. The camera system also supports features like Night mode, Deep Fusion, and Smart HDR 4.",
        },
      ],
      amazonLink: "https://amzn.to/446AHBM",
      onLeft: false,
    },
    {
      name: "Samsung Galaxy S22 Ultra",
      price: 1199,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09NRV6WZD&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The Samsung Galaxy S22 Ultra is the most powerful Android smartphone on the market. It features a large 6.8-inch AMOLED display, a powerful Snapdragon 8 Gen 1 chip, and a versatile quad-lens camera system.",
      features: [
        {
          name: "Large 6.8-inch AMOLED display",
          description:
            "The Samsung Galaxy S22 Ultra has a large 6.8-inch AMOLED display that is perfect for watching movies, playing games, and browsing the web. The display has a resolution of 1440 x 3088 pixels and a peak brightness of 1750 nits. It also supports HDR10+ and Dolby Vision for an immersive viewing experience.",
        },
        {
          name: "Powerful Snapdragon 8 Gen 1 chip",
          description:
            "The Samsung Galaxy S22 Ultra is powered by the latest Snapdragon 8 Gen 1 chip, which is the fastest mobile processor on the market. The chip delivers up to 20% faster CPU performance and up to 30% faster graphics performance than the previous generation. This makes the Samsung Galaxy S22 Ultra incredibly fast and responsive, even for demanding tasks like gaming and video editing.",
        },
        {
          name: "Versatile quad-lens camera system",
          description:
            "The Samsung Galaxy S22 Ultra has a versatile quad-lens camera system that can take stunning photos and videos in any lighting condition. The system includes a 108-megapixel wide-angle lens, a 12-megapixel ultra-wide-angle lens, a 10-megapixel telephoto lens, and a 10-megapixel periscope telephoto lens. The camera system also supports features like Night mode, Portrait mode, and Director's View.",
        },
      ],
      amazonLink: "https://amzn.to/41Cv2So",
      onLeft: true,
    },
    {
      name: "Google Pixel 6 Pro",
      price: 505,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09HTTTLJ2&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The Google Pixel 6 Pro is the latest and greatest smartphone from Google. It features a unique design, a powerful Tensor chip, and a versatile triple-lens camera system.",
      features: [
        {
          name: "Unique design",
          description:
            "The Google Pixel 6 Pro has a unique design that is sure to turn heads. The phone has a two-tone finish and a camera bar that runs across the top of the back. The phone is also water-resistant and has a built-in fingerprint sensor.",
        },
        {
          name: "Powerful Tensor chip",
          description:
            "The Google Pixel 6 Pro is powered by the Google Tensor chip, which is a custom-designed chip that is optimized for machine learning and artificial intelligence. The chip delivers up to 80% faster CPU performance and up to 370% faster graphics performance than the previous generation. This makes the Google Pixel 6 Pro incredibly fast and responsive, even for demanding tasks like gaming and video editing.",
        },
        {
          name: "Versatile triple-lens camera system",
          description:
            "The Google Pixel 6 Pro has a versatile triple-lens camera system that can take stunning photos and videos in any lighting condition. The system includes a 50-megapixel wide-angle lens, a 12-megapixel ultra-wide-angle lens, and a 48-megapixel telephoto lens. The camera system also supports features like Night Sight, Portrait Mode, and Magic Eraser.",
        },
      ],
      amazonLink: "https://amzn.to/3Aljg2B",
      onLeft: false,
    },
    {
      name: "OnePlus 10 Pro",
      price: 574,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09SGLMJJX&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The OnePlus 10 Pro is a powerful and affordable smartphone from OnePlus. It features a 6.7-inch AMOLED display, a powerful Snapdragon 8 Gen 1 chip, and a versatile triple-lens camera system.",
      features: [
        {
          name: "6.7-inch AMOLED display",
          description:
            "The OnePlus 10 Pro has a 6.7-inch AMOLED display that is perfect for watching movies, playing games, and browsing the web. The display has a resolution of 1440 x 3216 pixels and a peak brightness of 1300 nits. It also supports HDR10+ and Dolby Vision for an immersive viewing experience.",
        },
        {
          name: "Powerful Snapdragon 8 Gen 1 chip",
          description:
            "The OnePlus 10 Pro is powered by the latest Snapdragon 8 Gen 1 chip, which is the fastest mobile processor on the market. The chip delivers up to 20% faster CPU performance and up to 30% faster graphics performance than the previous generation. This makes the OnePlus 10 Pro incredibly fast and responsive, even for demanding tasks like gaming and video editing.",
        },
        {
          name: "Versatile triple-lens camera system",
          description:
            "The OnePlus 10 Pro has a versatile triple-lens camera system that can take stunning photos and videos in any lighting condition. The system includes a 48-megapixel wide-angle lens, a 50-megapixel ultra-wide-angle lens, and an 8-megapixel telephoto lens. The camera system also supports features like Nightscape, Portrait Mode, and 8K video recording.",
        },
      ],
      amazonLink: "https://amzn.to/3mWxHqJ",
      onLeft: true,
    },
    {
      name: "Xiaomi 12 Pro",
      price: 613,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0BBFVMP4J&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The Xiaomi 12 Pro is a powerful and affordable smartphone from Xiaomi. It features a 6.73-inch AMOLED display, a powerful Snapdragon 8 Gen 1 chip, and a versatile triple-lens camera system.",
      features: [
        {
          name: "6.73-inch AMOLED display",
          description:
            "The Xiaomi 12 Pro has a 6.73-inch AMOLED display that is perfect for watching movies, playing games, and browsing the web. The display has a resolution of 1440 x 3200 pixels and a peak brightness of 1200 nits. It also supports HDR10+ and Dolby Vision for an immersive viewing experience.",
        },
        {
          name: "Powerful Snapdragon 8 Gen 1 chip",
          description:
            "The Xiaomi 12 Pro is powered by the latest Snapdragon 8 Gen 1 chip, which is the fastest mobile processor on the market. The chip delivers up to 20% faster CPU performance and up to 30% faster graphics performance than the previous generation. This makes the Xiaomi 12 Pro incredibly fast and responsive, even for demanding tasks like gaming and video editing.",
        },
        {
          name: "Versatile triple-lens camera system",
          description:
            "The Xiaomi 12 Pro has a versatile triple-lens camera system that can take stunning photos and videos in any lighting condition. The system includes a 50-megapixel wide-angle lens, a 50-megapixel ultra-wide-angle lens, and a 50-megapixel telephoto lens. The camera system also supports features like Night mode, Portrait mode, and 8K video recording.",
        },
      ],
      amazonLink: "https://amzn.to/3oAPHHK",
      onLeft: false,
    },
  ];
  return (
    <div className="row devGuides">
      <Seo
        title="Smartphone Comparison"
        description="Comparison of some of the latest smart phones."
        meta={metaData}
      />
      <TitleBanner text="Smartphone Comparison" />
      <div className="devContent">
        <Comparison compareList={smartphones} />
      </div>
    </div>
  );
};
export default SmartphoneComparison;
