import React from 'react';
import './About.css';
import logo from '../../img/pngegg.png';


const About = () => {
    return (
        <div>
            <img className='img-fluid p-5 about-img' src={logo} alt="" width="600px" />
            <h1>To The <span className='header-span'>ROG</span></h1>
            <p className='p-5 fs-3'><span className='game-name fs-2'>Republic of Gamers</span> is a brand used by Asus since 2006, encompassing a range of computer hardware, personal computers, peripherals, and accessories oriented primarily toward PC gaming. The line includes both desktops and high-spec laptops such as the Asus ROG Crosshair V Formula-Z Motherboard or the Asus ROG Strix G G731GT AU059T Laptop.

                AMD graphics cards were marketed under the Arez brand due to the Nvidia GeForce Partner Program. However, when the GeForce Partner Program was cancelled, the AMD cards were renamed back to the ROG branding.

                In 2013 ASUS launched the RAIDR Express, a PCI express based RAID 0 SSD subsystem with two SSDs on one PCB.

                At Computex 2018, Asus unveiled and announced ROG-branded gaming smartphone to compete against ZTE's nubia Red Magic, Xiaomi's Black Shark, and the Razer Phone. The ROG Phone will have a special version of the Snapdragon 845 CPU that can be overclocked, vapor cooling, an external heatsink fan with the USB-C and headphone connectors on its bottom, three different docks, and will be released in Q3 2018.

                In March 2021 Asus Launched the ASUS ROG PHONE 5 Series based on Qualcomm SM8350 Snapdragon 888 (5 nm), Octa-core processor.

                In January 2022, Asus announced the ROG Flow Z13 during the ROG's CES 2022 launch event. Equipped with the high-performance Intel's Core i9 processor and NVIDIA's GeForce RTX 3050 Ti graphic performance, making the biggest innovation breakthroughs on tablet markets. It is the world's first RTX 30 series computer in tablet form factor.</p>
        </div>
    );
};

export default About;