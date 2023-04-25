import React from "react";
import Comparison from "../../components/Comparison";
import Seo from "../../components/SEO";
import TitleBanner from "../../components/TitleBanner";

const LaptopComparison = () => {
  const metaData = [
    {
      name: "keywords",
      content:
        "comparison,best,top,tech,smart,smart device,Laptop,device,latest",
    },
  ];

  const laptops = [
    {
      name: "MacBook Pro",
      price: 3489,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0BSHYVTPR&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The MacBook Pro is the most powerful MacBook ever, with a stunning Liquid Retina XDR display, an M2 chip, and all-day battery life. It's perfect for creatives, students, and professionals who need a powerful and versatile device.",
      features: [
        {
          name: "Liquid Retina XDR display",
          description:
            "The MacBook Pro has a stunning Liquid Retina XDR display that is perfect for watching movies, playing games, and browsing the web. The display has a resolution of 2732 x 2048 pixels and a peak brightness of 1600 nits. It also supports HDR10 and Dolby Vision for an immersive viewing experience.",
        },
        {
          name: "M2 chip",
          description:
            "The MacBook Pro is powered by the M2 chip, the same chip that powers the MacBook Air, MacBook Pro, and Mac mini. The M2 chip is incredibly powerful and efficient, and it allows the MacBook Pro to handle even the most demanding tasks with ease.",
        },
        {
          name: "All-day battery life",
          description:
            "The MacBook Pro has an all-day battery life, so you can use it all day long without having to worry about running out of power. The battery life is even better when you're using the MacBook Pro for tasks like browsing the web, watching videos, and listening to music.",
        },
        {
          name: "Thunderbolt 3 connectivity",
          description:
            "The MacBook Pro has Thunderbolt 3 connectivity, which allows you to connect it to external displays, storage devices, and other peripherals. This makes the MacBook Pro a great choice for creative professionals who need to connect their MacBook to a variety of devices.",
        },
        {
          name: "5G connectivity",
          description:
            "The MacBook Pro is available with 5G connectivity, which allows you to stay connected to the internet even when you're not on Wi-Fi. This is perfect for people who need to stay connected on the go.",
        },
        {
          name: "Apple Pencil support",
          description:
            "The MacBook Pro supports the Apple Pencil, which is a great way to take notes, draw, and create art. The Apple Pencil is incredibly precise and responsive, and it makes the MacBook Pro a great choice for creative professionals.",
        },
        {
          name: "Magic Keyboard support",
          description:
            "The MacBook Pro supports the Magic Keyboard, which is a great way to turn your MacBook Pro into a laptop. The Magic Keyboard has a backlit keyboard, a trackpad, and a stand, and it makes it easy to use your MacBook Pro for productivity tasks.",
        },
      ],
      amazonLink: "https://amzn.to/3owBbkd",
      onLeft: true,
    },
    {
      name: "Microsoft Surface Laptop Studio",
      price: 1349,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09NHWCGYH&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The Microsoft Surface Laptop Studio is a powerful and versatile laptop that is perfect for creatives, students, and professionals. It has a stunning 14.4-inch PixelSense Flow display that can be used in three different modes: Laptop, Stage, and Studio. The Laptop mode is perfect for everyday tasks like browsing the web, checking email, and writing documents. The Stage mode is perfect for watching movies, playing games, and giving presentations. The Studio mode is perfect for drawing, sketching, and taking notes. The Surface Laptop Studio is powered by the 11th Gen Intel Core i7 processor and the NVIDIA GeForce RTX 3050 Ti GPU, so it can handle even the most demanding tasks with ease. It also has a long-lasting battery that can provide up to 19 hours of usage on a single charge. The Surface Laptop Studio is a great choice for anyone who needs a powerful and versatile laptop that can do it all.",
      features: [
        {
          name: "14.4-inch PixelSense Flow display",
          description:
            "The Surface Laptop Studio has a stunning 14.4-inch PixelSense Flow display that is perfect for watching movies, playing games, and creating content. The display has a resolution of 2400 x 1600 pixels and a 120Hz refresh rate, so it provides a smooth and immersive viewing experience.",
        },
        {
          name: "11th Gen Intel Core i7 processor",
          description:
            "The Surface Laptop Studio is powered by the 11th Gen Intel Core i7 processor, so it can handle even the most demanding tasks with ease. The processor is paired with up to 32GB of RAM and up to 1TB of storage, so you can have all the power and storage you need to get things done.",
        },
        {
          name: "NVIDIA GeForce RTX 3050 Ti GPU",
          description:
            "The Surface Laptop Studio is also equipped with the NVIDIA GeForce RTX 3050 Ti GPU, so you can enjoy smooth and immersive gaming experiences. The GPU is also great for creative professionals who need a powerful GPU for tasks like video editing and 3D modeling.",
        },
        {
          name: "Up to 19 hours of battery life",
          description:
            "The Surface Laptop Studio has a long-lasting battery that can provide up to 19 hours of usage on a single charge. This means that you can use your laptop all day long without having to worry about running out of power.",
        },
        {
          name: "Three different modes",
          description:
            "The Surface Laptop Studio can be used in three different modes: Laptop, Stage, and Studio. The Laptop mode is perfect for everyday tasks like browsing the web, checking email, and writing documents. The Stage mode is perfect for watching movies, playing games, and giving presentations. The Studio mode is perfect for drawing, sketching, and taking notes.",
        },
        {
          name: "Thunderbolt 4 ports",
          description:
            "The Surface Laptop Studio has two Thunderbolt 4 ports, so you can connect it to external displays, storage devices, and other peripherals. This makes the Surface Laptop Studio a great choice for creative professionals who need to connect their laptop to a variety of devices.",
        },
        {
          name: "Microsoft Pen support",
          description:
            "The Surface Laptop Studio supports the Microsoft Pen, so you can take notes, draw, and create art. The Pen is incredibly precise and responsive, and it makes the Surface Laptop Studio a great choice for creative professionals.",
        },
        {
          name: "Available in platinum, obsidian, and sandstone",
          description:
            "The Surface Laptop Studio is available in three different colors: platinum, obsidian, and sandstone.",
        },
      ],
      amazonLink: "https://amzn.to/3UWxZKZ",
      onLeft: false,
    },
    {
      name: "Dell XPS 13",
      price: 1699,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09HVBQN63&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The Dell XPS 13 is a powerful and versatile laptop that is perfect for students, professionals, and creatives. It has a stunning 13.4-inch InfinityEdge display with a resolution of 1920 x 1080 pixels, so you can enjoy movies, games, and photos in stunning detail. The XPS 13 is also powered by the latest Intel Core processors and up to 16GB of RAM, so you can handle even the most demanding tasks with ease. It also has a long-lasting battery that can provide up to 19 hours of usage on a single charge. The Dell XPS 13 is a great choice for anyone who needs a powerful and versatile laptop that can do it all.",
      features: [
        {
          name: "13.4-inch InfinityEdge display",
          description:
            "The Dell XPS 13 has a stunning 13.4-inch InfinityEdge display with a resolution of 1920 x 1080 pixels, so you can enjoy movies, games, and photos in stunning detail. The display also has a thin bezel that gives you more screen real estate to work with.",
        },
        {
          name: "Latest Intel Core processors",
          description:
            "The Dell XPS 13 is powered by the latest Intel Core processors, so you can handle even the most demanding tasks with ease. The processors are paired with up to 16GB of RAM, so you can have all the power and storage you need to get things done.",
        },
        {
          name: "Long-lasting battery",
          description:
            "The Dell XPS 13 has a long-lasting battery that can provide up to 19 hours of usage on a single charge. This means that you can use your laptop all day long without having to worry about running out of power.",
        },
        {
          name: "Compact and lightweight design",
          description:
            "The Dell XPS 13 is a compact and lightweight laptop that is perfect for taking on the go. It measures just 0.6 inches thick and weighs just 2.6 pounds, so you can easily carry it with you wherever you go.",
        },
        {
          name: "Thunderbolt 3 ports",
          description:
            "The Dell XPS 13 has two Thunderbolt 3 ports, so you can connect it to external displays, storage devices, and other peripherals. This makes the Dell XPS 13 a great choice for creative professionals who need to connect their laptop to a variety of devices.",
        },
        {
          name: "Available in platinum and silver",
          description:
            "The Dell XPS 13 is available in two different colors: platinum and silver. This means that you can find a color that matches your style.",
        },
      ],
      amazonLink: "https://amzn.to/3mXGfhc",
      onLeft: true,
    },
    {
      name: "Lenovo ThinkPad X1 Carbon",
      price: 1527,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0B64M8Y2H&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The Lenovo ThinkPad X1 Carbon is a powerful and versatile laptop that is perfect for business users. It has a stunning 14-inch display with a resolution of 1920 x 1080 pixels, so you can enjoy movies, games, and photos in stunning detail. The X1 Carbon is also powered by the latest Intel Core processors and up to 16GB of RAM, so you can handle even the most demanding tasks with ease. It also has a long-lasting battery that can provide up to 19 hours of usage on a single charge. The Lenovo ThinkPad X1 Carbon is a great choice for anyone who needs a powerful and versatile laptop that can do it all.",
      features: [
        {
          name: "14-inch display",
          description:
            "The Lenovo ThinkPad X1 Carbon has a stunning 14-inch display with a resolution of 1920 x 1080 pixels, so you can enjoy movies, games, and photos in stunning detail. The display also has a thin bezel that gives you more screen real estate to work with.",
        },
        {
          name: "Latest Intel Core processors",
          description:
            "The Lenovo ThinkPad X1 Carbon is powered by the latest Intel Core processors, so you can handle even the most demanding tasks with ease. The processors are paired with up to 16GB of RAM, so you can have all the power and storage you need to get things done.",
        },
        {
          name: "Long-lasting battery",
          description:
            "The Lenovo ThinkPad X1 Carbon has a long-lasting battery that can provide up to 19 hours of usage on a single charge. This means that you can use your laptop all day long without having to worry about running out of power.",
        },
        {
          name: "Durable and reliable design",
          description:
            "The Lenovo ThinkPad X1 Carbon is built to last. It is made from durable materials and has passed a series of rigorous military-grade tests. This means that you can be confident that your laptop will be able to withstand the rigors of everyday use.",
        },
        {
          name: "Security features",
          description:
            "The Lenovo ThinkPad X1 Carbon has a number of security features that can help to keep your data safe. These features include a fingerprint reader, a TPM chip, and a Kensington lock slot.",
        },
        {
          name: "Available in black and silver",
          description:
            "The Lenovo ThinkPad X1 Carbon is available in two different colors: black and silver. This means that you can find a color that matches your style.",
        },
      ],
      amazonLink: "https://amzn.to/41ScEEI",
      onLeft: false,
    },
    {
      name: "HP Spectre x360",
      price: 1299,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08Q852QBG&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The HP Spectre x360 is a powerful and versatile laptop that is perfect for business users. It has a stunning 13.3-inch display with a resolution of 1920 x 1080 pixels, so you can enjoy movies, games, and photos in stunning detail. The Spectre x360 is also powered by the latest Intel Core processors and up to 16GB of RAM, so you can handle even the most demanding tasks with ease. It also has a long-lasting battery that can provide up to 19 hours of usage on a single charge. The HP Spectre x360 is a great choice for anyone who needs a powerful and versatile laptop that can do it all.",
      features: [
        {
          name: "13.3-inch display",
          description:
            "The HP Spectre x360 has a stunning 13.3-inch display with a resolution of 1920 x 1080 pixels, so you can enjoy movies, games, and photos in stunning detail. The display also has a thin bezel that gives you more screen real estate to work with.",
        },
        {
          name: "Latest Intel Core processors",
          description:
            "The HP Spectre x360 is powered by the latest Intel Core processors, so you can handle even the most demanding tasks with ease. The processors are paired with up to 16GB of RAM, so you can have all the power and storage you need to get things done.",
        },
        {
          name: "Long-lasting battery",
          description:
            "The HP Spectre x360 has a long-lasting battery that can provide up to 19 hours of usage on a single charge. This means that you can use your laptop all day long without having to worry about running out of power.",
        },
        {
          name: "Convertible design",
          description:
            "The HP Spectre x360 is a convertible laptop, so you can use it in a variety of modes, including laptop, tablet, and stand. This makes it a great choice for anyone who needs a laptop that can be used for a variety of tasks.",
        },
        {
          name: "Security features",
          description:
            "The HP Spectre x360 has a number of security features that can help to keep your data safe. These features include a fingerprint reader, a TPM chip, and a Kensington lock slot.",
        },
        {
          name: "Available in black and silver",
          description:
            "The HP Spectre x360 is available in two different colors: black and silver. This means that you can find a color that matches your style.",
        },
      ],
      amazonLink: "https://amzn.to/3LogQqf",
      onLeft: true,
    },
  ];
  return (
    <div className="row devGuides">
      <Seo
        title="Laptop Comparison"
        description="Comparison of some of the latest Laptops."
        meta={metaData}
      />
      <TitleBanner text="Laptop Comparison" />
      <div className="devContent">
        <Comparison compareList={laptops} />
      </div>
    </div>
  );
};
export default LaptopComparison;
