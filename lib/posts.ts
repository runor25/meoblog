import { Post, PostMetadata } from '../types';

// Mocking file system content for the browser environment
const MOCK_FILES = [
  {
    filename: 'smart-home-101.md',
    content: `---
title: "Smart Home Security for People Who Hate Setup (The 2025 Renter’s Guide)"
date: "2025-12-25"
excerpt: "You don't want a weekend project. You want security. Here is the no-drill, 15-minute setup guide."
coverImage: "https://i.ibb.co/YTT9nzpZ/smart-speaker.webp"
category: "Guides"
author: "Alex Cypher"
---

## Intro

Let’s be honest: You want home security, but you don’t want a weekend project. You don’t want to drill into your landlord’s brick siding, you don’t want to mess with electrical wiring, and you definitely don’t want to debug a Wi-Fi network.

You’re not lazy; you’re efficient. And in 2025, security should be plug-and-play.

If you’ve been looking for a "No-Drill" guide that skips the tech jargon, this is it. We analyzed the top players—Ring, SimpliSafe, and Wyze—to find the systems that actually respect your time and your security deposit.

## The "Hidden" Cost of Security in 2025

Before you buy a $30 camera, there’s something you need to know. The hardware is cheap, but the subscriptions are where they get you.

**The Trap:** Many cameras today are "lobotomized" without a monthly fee. No recording, no person detection—just a live view.

**The Reality:** Expect to pay between $5 and $20 a month. We’ll break down exactly what you get for that money below.

## The Top 3 Systems for the "Setup Averse"

### 1. SimpliSafe: The "It Just Works" Champion

*   **Best For:** The "Set it and Forget it" crowd.
*   **Why We Love It:** It lives up to its name. The sensors come pre-paired. You literally pull a battery tab, stick it to the wall (using the included 3M strips), and the base station starts talking to you.
*   **The Downside:** It’s an island. It doesn't play nice with your other smart lights, but for security, that might be a good thing.
*   **2025 Pricing Check:** The "Core" plan is pricey at ~$32/mo, but it includes "Active Guard" where agents can actually yell at intruders through the camera.

### 2. Ring (Amazon): The Ecosystem Heavyweight

*   **Best For:** People who already own an Alexa Echo.
*   **The Setup:** If you have an Echo Show, the setup is seamless. The app is slick and guides you with videos.
*   **The Warning:** In 2025, Ring bumped their prices. You're looking at roughly $200/year if you want all the features (like 24/7 recording). Also, if you use Apple HomeKit, look elsewhere.

### 3. Wyze: The Budget Wildcard

*   **Best For:** Bargain hunters who don't mind a little tinkering.
*   **The Deal:** You can get "Unlimited Cameras" covered for $9.99/mo. That is unbeatable value.
*   **The Catch:** The setup can be finicky. You might need to mess with your router settings (splitting 2.4GHz bands), and reliability isn't quite at Ring's level yet.

## Stop Drilling Holes (The Gear You Need)

If you are renting, **do not** use the screws that come in the box. Use these instead:

1.  **The "Doorbell Boa":** This is a metal clamp that slides onto your door. It holds your video doorbell securely without a single screw. It’s anti-theft and landlord-approved.
2.  **Vinyl Siding Clips:** Live in a townhome? These little metal hooks snap into the seams of your siding to hold up cameras. No holes, no damage.
3.  **Heavy Duty VHB Tape:** Forget generic foam tape. Look for mounts using "VHB" (Very High Bond) adhesive. It withstands rain and heat so your camera doesn't fall on your delivery driver.

## A Note on "Matter" (Don't Believe the Hype)

You may have read that a new standard called "Matter" fixes all smart home problems.

**The Truth:** As of late 2025, Matter is still broken for security cameras. Don't buy a camera promising "future Matter support." Buy for the phone you have in your pocket right now.

## Conclusion: What Should You Buy?

*   If you want zero headaches: **Go SimpliSafe.**
*   If you want the best features and have Alexa: **Go Ring.**
*   If you have 5+ cameras and a tight budget: **Go Wyze.**
`
  },
  {
    filename: 'network-security-basics.md',
    content: `---
title: "Your Router is a Backdoor: 3 Settings to Change Now"
date: "2025-11-10"
excerpt: "Stop using the default password. Here is the 5-minute audit to lock down your digital front door."
coverImage: "https://i.ibb.co/3929gr5c/lan-cable.webp"
category: "Network"
author: "Sarah Firewall"
---

## The "Good Enough" Security Model

You don't need to be the NSA. You just need to be harder to hack than your neighbor. 

Most automated botnets look for low-hanging fruit: default passwords, open ports, and outdated firmware. If you fix these three things, you eliminate 99% of the risk.

## 1. The "Guest Network" Trick

Most modern routers allow you to create a **Guest Network**. 

*   **The Old Way:** Use it for when Aunt Linda visits.
*   **The Pro Way:** Use it for your cheap smart bulbs and sketchy fridge.

IoT (Internet of Things) devices are notoriously insecure. By putting them on a Guest Network, you isolate them. If your smart toaster gets hacked, the attacker creates a foothold... inside a network that can't see your laptop or your tax returns.

## 2. Kill UPnP (Universal Plug and Play)

UPnP is a convenience feature that lets devices automatically open ports on your router to talk to the internet. 

**Turn it off.**

It is essentially a "welcome mat" for malware. If you need to open a port for a game console, do it manually. Don't let your printer decide what ports should be open to the world.

## 3. WPA3 is Non-Negotiable

If you are still using WPA2, you are vulnerable to "de-auth" attacks where someone can kick you off your own Wi-Fi and capture your handshake to crack your password.

Go to your router settings > Wireless Security > Select **WPA3-Personal**.

> **Note:** Some very old devices (pre-2018) might stop working. Put those on the Guest Network (which can stay on WPA2/WPA3 mixed mode).

## Final Thought

Your ISP-provided router is likely garbage. If you are paying $10/month to rent a plastic box from Comcast, stop. Buy a mesh system (like Eero or TP-Link Deco). It pays for itself in a year and actually receives security updates.
`
  },
  {
    filename: 'privacy-checklist.md',
    content: `---
title: "The Privacy Paranoia Checklist: Stop Your House From Spying"
date: "2025-10-15"
excerpt: "Cameras face outward, not inward. A guide to keeping your private life private while staying secure."
coverImage: "https://i.ibb.co/ZzmSnFPZ/check-list.webp"
category: "Privacy"
author: "The Ghost"
---

## The Golden Rule

**Cameras belong outside. Sensors belong inside.**

I see so many people putting Wi-Fi cameras in their living rooms and hallways. Unless you are monitoring a puppy, this is a massive privacy risk. Even "secure" videos are often stored in the cloud.

## The "Safe Inside" Protocol

If you need to know if someone is inside your house, use motion sensors, not cameras.

1.  **Motion Detectors:** They tell you if someone is moving without recording a video of you walking around in a towel.
2.  **Contact Sensors:** Put them on every door and window. They are binary: Open or Closed. Zero privacy risk.
3.  **Glass Break Sensors:** These listen for the specific frequency of shattering glass.

## Physical Shutters are King

If you *must* have a camera inside (e.g., a baby monitor), ensure it has a **physical privacy shutter**. 

Software "off" switches can be bugged or hacked. A piece of plastic covering the lens cannot be hacked.

## Voice Assistants: The Mute Button

Do you have Alexa or Google Home devices?

*   **Check your history:** You'd be shocked how often they trigger accidentally.
*   **The Mute Switch:** Most devices have a hardware mute switch (usually turns the light red). Use it when you aren't actively using the device.

## Conclusion

Security is about protecting your home from the outside world. Privacy is about protecting your home from the tech companies. You need to balance both.
`
  }
];

// Simple frontmatter parser for browser environment (replacing gray-matter)
function parseFrontmatter(fileContent: string): { metadata: PostMetadata; content: string } {
  const frontmatterRegex = /^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/;
  const match = frontmatterRegex.exec(fileContent);
  
  if (!match) {
    return { 
      metadata: { title: 'Untitled', date: '', excerpt: '', coverImage: '', category: '' }, 
      content: fileContent 
    };
  }

  const frontmatterBlock = match[1];
  const content = match[2];
  const metadata: any = {};

  frontmatterBlock.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      let value = valueParts.join(':').trim();
      // Remove quotes if present
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      metadata[key.trim()] = value;
    }
  });

  return { metadata: metadata as PostMetadata, content };
}

export function getAllPosts(): Post[] {
  return MOCK_FILES.map(file => {
    const { metadata, content } = parseFrontmatter(file.content);
    const slug = file.filename.replace(/\.md$/, '');
    return { slug, metadata, content };
  }).sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find(post => post.slug === slug);
}