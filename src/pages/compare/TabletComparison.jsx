import React from "react";
import Comparison from "../../components/Comparison";
import Seo from "../../components/SEO";
import TitleBanner from "../../components/TitleBanner";

const TabletComparison = () => {
  const metaData = [
    {
      name: "keywords",
      content:
        "comparison,best,top,tech,smart,smart device,tablet,device,latest",
    },
  ];

  const tablets = [
    {
      name: "iPad Pro",
      price: 861,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0BJLDMTM3&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The iPad Pro is the most powerful iPad ever, with a stunning Liquid Retina XDR display, an M2 chip, and all-day battery life. It's perfect for creatives, students, and professionals who need a powerful and versatile device.",
      features: [
        {
          name: "Liquid Retina XDR display",
          description:
            "The iPad Pro has a stunning Liquid Retina XDR display that is perfect for watching movies, playing games, and browsing the web. The display has a resolution of 2732 x 2048 pixels and a peak brightness of 1600 nits. It also supports HDR10 and Dolby Vision for an immersive viewing experience.",
        },
        {
          name: "M2 chip",
          description:
            "The iPad Pro is powered by the M2 chip, the same chip that powers the MacBook Air, MacBook Pro, and Mac mini. The M2 chip is incredibly powerful and efficient, and it allows the iPad Pro to handle even the most demanding tasks with ease.",
        },
        {
          name: "All-day battery life",
          description:
            "The iPad Pro has an all-day battery life, so you can use it all day long without having to worry about running out of power. The battery life is even better when you're using the iPad Pro for tasks like browsing the web, watching videos, and listening to music.",
        },
        {
          name: "Thunderbolt 3 connectivity",
          description:
            "The iPad Pro has Thunderbolt 3 connectivity, which allows you to connect it to external displays, storage devices, and other peripherals. This makes the iPad Pro a great choice for creative professionals who need to connect their iPad to a variety of devices.",
        },
        {
          name: "5G connectivity",
          description:
            "The iPad Pro is available with 5G connectivity, which allows you to stay connected to the internet even when you're not on Wi-Fi. This is perfect for people who need to stay connected on the go.",
        },
        {
          name: "Apple Pencil support",
          description:
            "The iPad Pro supports the Apple Pencil, which is a great way to take notes, draw, and create art. The Apple Pencil is incredibly precise and responsive, and it makes the iPad Pro a great choice for creative professionals.",
        },
        {
          name: "Magic Keyboard support",
          description:
            "The iPad Pro supports the Magic Keyboard, which is a great way to turn your iPad Pro into a laptop. The Magic Keyboard has a backlit keyboard, a trackpad, and a stand, and it makes it easy to use your iPad Pro for productivity tasks.",
        },
      ],
      amazonLink: "https://amzn.to/3oCmNqH",
      onLeft: true,
    },
    {
      name: "Samsung Galaxy Tab S8 Ultra",
      price: 1199,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0BD4VPXCM&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The Samsung Galaxy Tab S8 Ultra is the most powerful Android tablet ever, with a stunning 14.6-inch Super AMOLED display, an octa-core Snapdragon 8 Gen 1 processor, and all-day battery life. It's perfect for creatives, students, and professionals who need a powerful and versatile device.",
      features: [
        {
          name: "14.6-inch Super AMOLED display",
          description:
            "The Samsung Galaxy Tab S8 Ultra has a stunning 14.6-inch Super AMOLED display that is perfect for watching movies, playing games, and browsing the web. The display has a resolution of 2960 x 1848 pixels and a peak brightness of 1200 nits. It also supports HDR10+ and Dolby Vision for an immersive viewing experience.",
        },
        {
          name: "Octa-core Snapdragon 8 Gen 1 processor",
          description:
            "The Samsung Galaxy Tab S8 Ultra is powered by the octa-core Snapdragon 8 Gen 1 processor, which is the most powerful mobile processor on the market. It makes the Tab S8 Ultra incredibly fast and responsive, even when you're running demanding apps like games and video editing software.",
        },
        {
          name: "All-day battery life",
          description:
            "The Samsung Galaxy Tab S8 Ultra has an all-day battery life, so you can use it all day long without having to worry about running out of power. The battery life is even better when you're using the Tab S8 Ultra for tasks like browsing the web, watching videos, and listening to music.",
        },
        {
          name: "S Pen support",
          description:
            "The Samsung Galaxy Tab S8 Ultra supports the S Pen, which is a great way to take notes, draw, and create art. The S Pen is incredibly precise and responsive, and it makes the Tab S8 Ultra a great choice for creative professionals.",
        },
        {
          name: "DeX mode",
          description:
            "DeX mode is a great way to turn your Tab S8 Ultra into a laptop. DeX mode gives you a desktop-like experience, with a taskbar, multiple windows, and a full-fledged keyboard and mouse. This is perfect for productivity tasks like working on documents, presentations, and spreadsheets.",
        },
        {
          name: "Multi-tasking",
          description:
            "The Samsung Galaxy Tab S8 Ultra is great for multitasking. You can easily run multiple apps at the same time, and you can even drag and drop windows to resize them. This is perfect for getting things done quickly and efficiently.",
        },
        {
          name: "Sleek design",
          description:
            "The Samsung Galaxy Tab S8 Ultra has a sleek and modern design. It's thin and light, so it's easy to carry around with you. The Tab S8 Ultra is also available in a variety of colors, so you can find one that matches your style.",
        },
        {
          name: "Long-term value",
          description:
            "The Samsung Galaxy Tab S8 Ultra is a great investment. It's powerful, versatile, and stylish. It's also backed by Samsung's excellent customer service, so you can be sure that you're getting a quality product.",
        },
      ],
      amazonLink: "https://amzn.to/3H6zNv6",
      onLeft: false,
    },
    {
      name: "Microsoft Surface Pro 9",
      price: 1032,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0B9NT897X&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The Microsoft Surface Pro 9 is a powerful and versatile 2-in-1 device that can be used for work, school, or play. It features a 13-inch PixelSense display, an 11th Gen Intel Core processor, and up to 19 hours of battery life. The Surface Pro 8 is also compatible with the Surface Pen and Surface Dial, so you can be creative and productive however you want.",
      features: [
        {
          name: "13-inch PixelSense display",
          description:
            "The Surface Pro 8 has a stunning 13-inch PixelSense display with a resolution of 2880 x 1920 pixels. The display is bright and vibrant, and it's perfect for watching movies, browsing the web, and working on documents.",
        },
        {
          name: "11th Gen Intel Core processor",
          description:
            "The Surface Pro 8 is powered by an 11th Gen Intel Core processor, which makes it fast and responsive. You can easily multitask with multiple apps open at the same time, and you can even run demanding apps like games and video editing software.",
        },
        {
          name: "Up to 19 hours of battery life",
          description:
            "The Surface Pro 8 has up to 19 hours of battery life, so you can use it all day long without having to worry about running out of power. This is perfect for students who need a device to take to class all day, or for professionals who need a device to take with them on business trips.",
        },
        {
          name: "Compatible with the Surface Pen and Surface Dial",
          description:
            "The Surface Pro 8 is compatible with the Surface Pen and Surface Dial, so you can be creative and productive however you want. The Surface Pen is a great way to take notes, draw, and create art. The Surface Dial is a great way to control your device with your fingertip.",
        },
        {
          name: "Thunderbolt 4 port",
          description:
            "The Surface Pro 8 has a Thunderbolt 4 port, which allows you to connect it to external displays, storage devices, and other peripherals. This is perfect for expanding the capabilities of your Surface Pro 8.",
        },
        {
          name: "Slim and portable design",
          description:
            "The Surface Pro 8 is slim and portable, so you can easily take it with you wherever you go. It's also available in a variety of colors, so you can find one that matches your style.",
        },
        {
          name: "Long-term value",
          description:
            "The Surface Pro 8 is a great investment. It's powerful, versatile, and stylish. It's also backed by Microsoft's excellent customer service, so you can be sure that you're getting a quality product.",
        },
      ],
      amazonLink: "https://amzn.to/3LxgmOR",
      onLeft: true,
    },
    {
      name: "Apple iPad Air",
      price: 649,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09V45S2YV&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The Apple iPad Air is a powerful and versatile tablet that's perfect for students, creatives, and anyone who wants a great device for everyday use. It features a 10.9-inch Liquid Retina display, an M1 chip, and up to 10 hours of battery life. The iPad Air is also compatible with the Apple Pencil and Magic Keyboard, so you can be creative and productive however you want.",
      features: [
        {
          name: "10.9-inch Liquid Retina display",
          description:
            "The iPad Air has a stunning 10.9-inch Liquid Retina display with a resolution of 2360 x 1640 pixels. The display is bright and vibrant, and it's perfect for watching movies, browsing the web, and working on documents.",
        },
        {
          name: "M1 chip",
          description:
            "The iPad Air is powered by the M1 chip, which makes it fast and responsive. You can easily multitask with multiple apps open at the same time, and you can even run demanding apps like games and video editing software.",
        },
        {
          name: "Up to 10 hours of battery life",
          description:
            "The iPad Air has up to 10 hours of battery life, so you can use it all day long without having to worry about running out of power. This is perfect for students who need a device to take to class all day, or for professionals who need a device to take with them on business trips.",
        },
        {
          name: "Compatible with the Apple Pencil and Magic Keyboard",
          description:
            "The iPad Air is compatible with the Apple Pencil and Magic Keyboard, so you can be creative and productive however you want. The Apple Pencil is a great way to take notes, draw, and create art. The Magic Keyboard is a great way to turn your iPad Air into a laptop.",
        },
        {
          name: "Slim and portable design",
          description:
            "The iPad Air is slim and portable, so you can easily take it with you wherever you go. It's also available in a variety of colors, so you can find one that matches your style.",
        },
        {
          name: "Long-term value",
          description:
            "The iPad Air is a great investment. It's powerful, versatile, and stylish. It's also backed by Apple's excellent customer service, so you can be sure that you're getting a quality product.",
        },
      ],
      amazonLink: "https://amzn.to/40zk3aR",
      onLeft: false,
    },
    {
      name: "Amazon Fire HD 10 Plus",
      price: 189,
      imageUrl:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08F5MDCY5&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=ctdev-21&language=en_GB",
      description:
        "The Amazon Fire HD 10 Plus is a powerful and versatile tablet that's perfect for students, creatives, and anyone who wants a great device for everyday use. It features a 10.1-inch 1080p display, a 2.0 GHz octa-core processor, 4GB of RAM, and 64GB of storage. The Fire HD 10 Plus also has a USB-C port, a microSD card slot, and a headphone jack.",
      features: [
        {
          name: "10.1-inch 1080p display",
          description:
            "The Amazon Fire HD 10 Plus has a stunning 10.1-inch 1080p display with a resolution of 1920 x 1200 pixels. The display is bright and vibrant, and it's perfect for watching movies, browsing the web, and working on documents.",
        },
        {
          name: "2.0 GHz octa-core processor",
          description:
            "The Amazon Fire HD 10 Plus is powered by a 2.0 GHz octa-core processor, which makes it fast and responsive. You can easily multitask with multiple apps open at the same time, and you can even run demanding apps like games and video editing software.",
        },
        {
          name: "4GB of RAM",
          description:
            "The Amazon Fire HD 10 Plus has 4GB of RAM, which allows it to handle multiple apps and tasks at the same time without slowing down.",
        },
        {
          name: "64GB of storage",
          description:
            "The Amazon Fire HD 10 Plus has 64GB of storage, which is enough for storing apps, games, movies, music, and more. You can also expand the storage with a microSD card.",
        },
        {
          name: "USB-C port",
          description:
            "The Amazon Fire HD 10 Plus has a USB-C port, which allows you to connect it to a variety of devices, including external displays, storage devices, and other peripherals.",
        },
        {
          name: "MicroSD card slot",
          description:
            "The Amazon Fire HD 10 Plus has a microSD card slot, which allows you to expand the storage with a microSD card.",
        },
        {
          name: "Headphone jack",
          description:
            "The Amazon Fire HD 10 Plus has a headphone jack, which allows you to listen to music and videos with headphones.",
        },
        {
          name: "Long battery life",
          description:
            "The Amazon Fire HD 10 Plus has a long battery life, so you can use it all day long without having to worry about running out of power.",
        },
        {
          name: "Alexa hands-free",
          description:
            "The Amazon Fire HD 10 Plus has Alexa hands-free, so you can use your voice to control your device. You can ask Alexa to play music, set alarms, get the news, and more.",
        },
        {
          name: "Kids' Edition",
          description:
            "The Amazon Fire HD 10 Plus is also available in a Kids' Edition, which comes with a one-year subscription to Amazon Kids+. Amazon Kids+ is a subscription service that gives kids access to thousands of books, movies, TV shows, and educational apps.",
        },
        {
          name: "Long-term value",
          description:
            "The Amazon Fire HD 10 Plus is a great investment. It's powerful, versatile, and affordable. It's also backed by Amazon's excellent customer service, so you can be sure that you're getting a quality product.",
        },
      ],
      amazonLink: "https://amzn.to/3N7DHHU",
      onLeft: true,
    },
  ];
  return (
    <div className="row devGuides">
      <Seo
        title="Tablet Comparison"
        description="Comparison of some of the latest tablets."
        meta={metaData}
      />
      <TitleBanner text="Tablet Comparison" />
      <div className="devContent">
        <Comparison compareList={tablets} />
      </div>
    </div>
  );
};
export default TabletComparison;
