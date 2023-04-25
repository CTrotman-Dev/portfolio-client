import React from "react";
import Comparison from "../../components/Comparison";
import Seo from "../../components/SEO";
import TitleBanner from "../../components/TitleBanner";

const TVComparison = () => {
  const metaData = [
    {
      name: "keywords",
      content:
        "comparison,best,top,tech,smart,smart device,tv,screen,television,smart tv,smart television,latest",
    },
  ];
  const tvs = [
    {
      name: "LG C2 55 inch 4K Smart OLED TV",
      price: 1799.99,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09YDPF87C&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The LG C2 55 inch 4K Smart OLED TV is a stunning display that offers incredible picture quality and a wide range of features. It features a self-lit OLED panel that produces perfect blacks and infinite contrast, as well as a wide color gamut and high peak brightness for stunning HDR performance. The C2 also features a powerful α9 Gen 5 AI Processor 4K that delivers advanced image processing and sound, as well as a host of smart features that make it easy to connect to your favorite streaming services and devices.",
      features: [
        {
          name: "Self-lit OLED panel",
          description:
            "The LG C2 features a self-lit OLED panel that produces perfect blacks and infinite contrast. Each pixel on the panel can be turned on or off individually, so there is no need for a backlight. This results in stunning picture quality with deep blacks and bright whites.",
        },
        {
          name: "Wide color gamut",
          description:
            "The LG C2 covers 98% of the DCI-P3 color gamut, which is the standard for digital cinema. This means that it can display a wider range of colors than most other TVs, resulting in more realistic and vibrant images.",
        },
        {
          name: "High peak brightness",
          description:
            "The LG C2 can reach a peak brightness of 1,000 nits, which is more than enough for bright HDR scenes. This results in stunning contrast and detail in HDR content.",
        },
        {
          name: "α9 Gen 5 AI Processor 4K",
          description:
            "The LG C2 features the α9 Gen 5 AI Processor 4K, which is the most advanced image processor from LG. It uses artificial intelligence to analyze the content you are watching and optimize the picture quality for the best possible viewing experience.",
        },
        {
          name: "Dolby Vision IQ and Atmos",
          description:
            "The LG C2 supports Dolby Vision IQ and Atmos, which are the latest and greatest in HDR and surround sound formats. Dolby Vision IQ automatically adjusts the picture settings to match the ambient light in your room, while Dolby Atmos delivers immersive surround sound.",
        },
        {
          name: "WebOS 22 Smart TV",
          description:
            "The LG C2 runs WebOS 22, which is the latest version of LG's smart TV platform. It is easy to use and features a wide range of apps and streaming services, including Netflix, Hulu, Amazon Prime Video, and Disney+.",
        },
      ],
      amazonLink: "https://amzn.to/3oDzcuB",
      onLeft: false,
    },
    {
      name: "Samsung 55 Inch QN90B Neo QLED 4K Smart TV (2022)",
      price: 1599.99,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09V89YP78&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The Samsung 55 Inch QN90B Neo QLED 4K Smart TV is a stunning display that offers incredible picture quality and a wide range of features. It features a Quantum Matrix Technology Pro, which uses Mini LED backlights to deliver precise contrast and stunning detail. The QN90B also features a Quantum HDR 32X, which delivers a wide range of colors and contrast for a truly immersive viewing experience. The QN90B also features a powerful Neo Quantum Processor 4K that delivers advanced image processing and sound, as well as a host of smart features that make it easy to connect to your favorite streaming services and devices.",
      features: [
        {
          name: "Quantum Matrix Technology Pro",
          description:
            "The Samsung QN90B features Quantum Matrix Technology Pro, which uses Mini LED backlights to deliver precise contrast and stunning detail. The Mini LEDs are arranged in a precise grid, allowing for precise control of the light output. This results in deep blacks and bright whites, as well as stunning detail in dark and bright scenes.",
        },
        {
          name: "Quantum HDR 32X",
          description:
            "The Samsung QN90B features Quantum HDR 32X, which delivers a wide range of colors and contrast for a truly immersive viewing experience. Quantum HDR 32X uses 32x more levels of contrast than standard HDR, resulting in deeper blacks, brighter whites, and more realistic colors.",
        },
        {
          name: "Neo Quantum Processor 4K",
          description:
            "The Samsung QN90B features a powerful Neo Quantum Processor 4K that delivers advanced image processing and sound. The Neo Quantum Processor 4K uses artificial intelligence to analyze the content you are watching and optimize the picture quality for the best possible viewing experience. It also upscales lower-resolution content to near-4K quality.",
        },
        {
          name: "Object Tracking Sound+",
          description:
            "The Samsung QN90B features Object Tracking Sound+, which delivers immersive surround sound that follows the action on the screen. Object Tracking Sound+ uses the Neo Quantum Processor 4K to analyze the content you are watching and create a soundscape that matches the on-screen action.",
        },
        {
          name: "Tizen Smart TV",
          description:
            "The Samsung QN90B runs Tizen Smart TV, which is the latest version of Samsung's smart TV platform. It is easy to use and features a wide range of apps and streaming services, including Netflix, Hulu, Amazon Prime Video, and Disney+.",
        },
      ],
      amazonLink: "https://amzn.to/40s7YUU",
      onLeft: true,
    },
    {
      name: "Sony BRAVIA KD-50X80K - 50-inch - LCD - 4K UHD - (HDR)  (2022 model)",
      price: 999.99,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09VY3BWMF&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The Sony BRAVIA KD-50X80K is a 50-inch LCD TV that offers stunning picture quality and a wide range of features. It features a full-array local dimming backlight that delivers deep blacks and bright whites, as well as a wide color gamut for vibrant colors. The KD-50X80K also features a powerful X1 4K HDR Processor that delivers advanced image processing and sound, as well as a host of smart features that make it easy to connect to your favorite streaming services and devices.",
      features: [
        {
          name: "Full-array local dimming backlight",
          description:
            "The Sony BRAVIA KD-50X80K features a full-array local dimming backlight that delivers deep blacks and bright whites. The backlight is divided into zones that can be individually controlled, allowing for precise control of the light output. This results in stunning contrast and detail in dark and bright scenes.",
        },
        {
          name: "Wide color gamut",
          description:
            "The Sony BRAVIA KD-50X80K features a wide color gamut that covers 95% of the DCI-P3 color space, which is the standard for digital cinema. This means that it can display a wider range of colors than most other TVs, resulting in more realistic and vibrant images.",
        },
        {
          name: "X1 4K HDR Processor",
          description:
            "The Sony BRAVIA KD-50X80K features a powerful X1 4K HDR Processor that delivers advanced image processing and sound. The X1 4K HDR Processor uses artificial intelligence to analyze the content you are watching and optimize the picture quality for the best possible viewing experience. It also upscales lower-resolution content to near-4K quality.",
        },
        {
          name: "Google TV",
          description:
            "The Sony BRAVIA KD-50X80K runs Google TV, which is the latest version of Google's smart TV platform. It is easy to use and features a wide range of apps and streaming services, including Netflix, Hulu, Amazon Prime Video, and Disney+.",
        },
      ],
      amazonLink: "https://amzn.to/41SaAMR",
      onLeft: false,
    },
    {
      name: "HISENSE 55U8HQTUK (55 Inch) Quantum Dot 4K HDR10(2022 NEW)",
      price: 649.99,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09ZPXCYGX&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The Hisense 55U8HQTUK is a 55-inch Quantum Dot TV that offers stunning picture quality and a wide range of features. It features a Quantum Dot panel that produces stunning colors, as well as a wide color gamut and high peak brightness for stunning HDR performance. The U8HQTUK also features a powerful X1 4K HDR Processor that delivers advanced image processing and sound, as well as a host of smart features that make it easy to connect to your favorite streaming services and devices.",
      features: [
        {
          name: "Quantum Dot panel",
          description:
            "The Hisense 55U8HQTUK features a Quantum Dot panel that produces stunning colors. Quantum Dots are tiny nanocrystals that can emit light in a specific color, resulting in more vibrant and realistic colors than traditional LCD TVs.",
        },
        {
          name: "Wide color gamut",
          description:
            "The Hisense 55U8HQTUK features a wide color gamut that covers 95% of the DCI-P3 color space, which is the standard for digital cinema. This means that it can display a wider range of colors than most other TVs, resulting in more realistic and vibrant images.",
        },
        {
          name: "X1 4K HDR Processor",
          description:
            "The Hisense 55U8HQTUK features a powerful X1 4K HDR Processor that delivers advanced image processing and sound. The X1 4K HDR Processor uses artificial intelligence to analyze the content you are watching and optimize the picture quality for the best possible viewing experience. It also upscales lower-resolution content to near-4K quality.",
        },
        {
          name: "Dolby Vision IQ",
          description:
            "Dolby Vision IQ is a new feature that automatically adjusts the picture settings to match the ambient light in your room. This results in the best possible picture quality, regardless of the time of day or the lighting conditions in your room.",
        },
        {
          name: "120Hz refresh rate",
          description:
            "The Hisense 55U8HQTUK features a 120Hz refresh rate that makes it ideal for gaming and watching sports. The 120Hz refresh rate reduces motion blur and judder, resulting in smoother and more fluid motion.",
        },
        {
          name: "HDMI 2.1",
          description:
            "The Hisense 55U8HQTUK features two HDMI 2.1 ports that support 4K gaming at 120Hz and variable refresh rate (VRR). This makes it ideal for connecting the latest gaming consoles and graphics cards.",
        },
        {
          name: "Freeview Play",
          description:
            "Freeview Play is a free service that gives you access to over 70 live TV channels, as well as a catch-up service for BBC iPlayer, ITV Hub, All 4, and My5.",
        },
        {
          name: "Alexa Built-in",
          description:
            "Alexa Built-in allows you to control your TV with your voice. You can use voice commands to change channels, adjust the volume, and more.",
        },
        {
          name: "Google Assistant Built-in",
          description:
            "Google Assistant Built-in allows you to control your TV with your voice. You can use voice commands to change channels, adjust the volume, and more.",
        },
        {
          name: "Android TV",
          description:
            "Android TV is a smart TV platform that gives you access to a wide range of apps and streaming services, including Netflix, Hulu, Amazon Prime Video, and Disney+.",
        },
        {
          name: "Onkyo 2.1 Channel Soundbar",
          description:
            "The Onkyo 2.1 Channel Soundbar delivers immersive sound that will make your movies and TV shows come to life.",
        },
      ],
      amazonLink: "https://amzn.to/43UhYsX",
      onLeft: true,
    },
    {
      name: "TCL 55C835K 55-inch QLED Mini-LED 120Hz Television, 4K Ultra HD",
      price: 1299.99,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0BHF6Y8H9&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The TCL 55C835K is a 55-inch QLED Mini-LED TV that offers stunning picture quality and a wide range of features. It features a Quantum Dot panel that produces stunning colors, as well as a wide color gamut and high peak brightness for stunning HDR performance. The C835K also features a powerful Quantum Dot Mini-LED backlight that delivers deep blacks and bright whites. The C835K also features a powerful AiPQ Engine Pro that delivers advanced image processing and sound, as well as a host of smart features that make it easy to connect to your favorite streaming services and devices.",
      features: [
        {
          name: "Quantum Dot panel",
          description:
            "The TCL 55C835K features a Quantum Dot panel that produces stunning colors. Quantum Dots are tiny nanocrystals that can emit light in a specific color, resulting in more vibrant and realistic colors than traditional LCD TVs.",
        },
        {
          name: "Wide color gamut",
          description:
            "The TCL 55C835K features a wide color gamut that covers 95% of the DCI-P3 color space, which is the standard for digital cinema. This means that it can display a wider range of colors than most other TVs, resulting in more realistic and vibrant images.",
        },
        {
          name: "Quantum Dot Mini-LED backlight",
          description:
            "The TCL 55C835K features a Quantum Dot Mini-LED backlight that delivers deep blacks and bright whites. The Mini LEDs are arranged in a precise grid, allowing for precise control of the light output. This results in stunning contrast and detail in dark and bright scenes.",
        },
        {
          name: "AiPQ Engine Pro",
          description:
            "The TCL 55C835K features a powerful AiPQ Engine Pro that delivers advanced image processing and sound. The AiPQ Engine Pro uses artificial intelligence to analyze the content you are watching and optimize the picture quality for the best possible viewing experience. It also upscales lower-resolution content to near-4K quality.",
        },
        {
          name: "120Hz refresh rate",
          description:
            "The TCL 55C835K features a 120Hz refresh rate that makes it ideal for gaming and watching sports. The 120Hz refresh rate reduces motion blur and judder, resulting in smoother and more fluid motion.",
        },
        {
          name: "HDMI 2.1",
          description:
            "The TCL 55C835K features two HDMI 2.1 ports that support 4K gaming at 120Hz and variable refresh rate (VRR). This makes it ideal for connecting the latest gaming consoles and graphics cards.",
        },
        {
          name: "Freeview Play",
          description:
            "Freeview Play is a free service that gives you access to over 70 live TV channels, as well as a catch-up service for BBC iPlayer, ITV Hub, All 4, and My5.",
        },
        {
          name: "Onkyo 2.1 Channel Soundbar",
          description:
            "The Onkyo 2.1 Channel Soundbar delivers immersive sound that will make your movies and TV shows come to life. It features two powerful speakers and a subwoofer for deep bass.",
        },
        {
          name: "Google Assistant Built-in",
          description:
            "Google Assistant Built-in allows you to control your TV with your voice. You can use voice commands to change channels, adjust the volume, and more.",
        },
        {
          name: "Amazon Alexa Built-in",
          description:
            "Amazon Alexa Built-in allows you to control your TV with your voice. You can use voice commands to change channels, adjust the volume, and more.",
        },
      ],
      amazonLink: "https://amzn.to/43VVc3S",
      onLeft: false,
    },
  ];
  return (
    <div className="row devGuides">
      <Seo
        title="TV Comparison"
        description="Comparison of some of the latest TV's."
        meta={metaData}
      />
      <TitleBanner text="TV Comparison" />
      <div className="devContent">
        <Comparison compareList={tvs} />
      </div>
    </div>
  );
};
export default TVComparison;
