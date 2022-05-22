const educationData = [
    {
        id:1,
        company:"Swansea University",
        role:"M.Sc. Advanced Computer Science specialising in Visual Computing",
        length:"2013 - 2014",
        languages:["Computer Vision and Pattern Recognition", "Artificial Intelligence Applications", "Data Visualisation", "High performance computing", "Logic for Computer Science", "Interactive System design", "Research Methodology", "Mobile Applications", "Distributed Object Oriented Programming", "Graphics processor programming", "Web and web service applications", "Visual Computing Development Project"],
        info:"Dissertation: The dissertation project included the research and design of a Traffic Sign Recognition (TSR) system. The first stage was to manipulate and apply pre-processing techniques to the images to extract information that can be used to locate a road sign regardless of the situation (E.g. weather and lighting conditions and occlusion). This involved image manipulation to improve the image quality and extract key points of interest. This process consisted of converting the images to grey scale, blurring, image sharpening in order to reduce the chance of finding false positives when detecting the edges in the images. Followed by the use of Support Vector Machines to identify if the image was positive (contains a road sign) or negative (no road sign present). The results were then added to the database of pre-existing positive and negative images to improve the accuracy of the system for future inputs."
    },
    {
        id:2,
        company:"Swansea Metro University",
        role:"B.Sc (Hons) Software Engineering",
        length:"2010 - 2013",
        languages:["Computer and Network Architecture", "Data analysis and database design", "Introduction to programming", "Study skills", "System analysis and design", "Web authoring", "Academic seminar", "Algorithms and Data structures", "Application design and development", "Data-centric Windows programming", "Database management systems", "Software Engineering principles", "Systems software and multi-user applications Engineering", "Advanced Web Development", "Distributed Enterprise applications", "Graphics programming", "Real-time systems development", "Dissertation project - Visual Computing."],
        info:"Dissertation Project: This involved the research into computer vision. The development of a system to standard methodology including the analysis, design, implementation and testing of the system. My prototype model is aimed at the hearing impaired and will be used to help them communicate electronically via a host of different electronic devices. The software detects a user’s bare hand, this is done through various techniques including pre-processing of the image using matrices to first convert the image into grey scale, then blur the image to reduce noise, followed by edge detection techniques. Further processing is done to find the tips of the fingers. The tips are subsequently analysed to find the shape of the hand and fingers so that the corresponding sign language sign the user is acting can be determined. "
    },
    {
        id:3,
        company:"Radyr Comprehensive",
        role:"A Levels + GCSE's",
        length:"2003 - 2010",
        languages:["VB","HTLM","SQL"],
        info:""
    },
    {
        id:4,
        company:"Interests",
        role:"",
        length:"1992 - Present",
        languages:[],
        info:"I have been developing Mobile Games for around two years, utilising Unity and C# Scripting. I began teaching myself how to develop games using only JavaScript. I created and arcade style space shooting game. I then decided I wanted to create more detailed games, so I taught myself how to develop games using Unity and re-created the first game using improved gameplay, graphics and functionality. Currently i am improving my 3D Modelling and animation skills using Blender, which are then imported into a Unity game.As well as improving my software development skills, I have been improving my knowledge on PC hardware. I have recently built a PC from scratch so that i could learn more about the hardware in a PC and have full confidence to upgrade in the future.Keeping fit is a priority of mine, whether that’s going to the gym, playing sport, or going on hikes and bike rides. I have played for Llandaff rugby team since I the age of seven. I have always enjoyed rugby; the main aspect of rugby I like is working as part of the team as well as leading then team when I was the captain."
    }
    
];

export default educationData;