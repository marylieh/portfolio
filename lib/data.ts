import React from "react";
import { TbBrandMinecraft } from "react-icons/tb";
import { BiLogoKubernetes } from "react-icons/bi";
import { SiCisco } from "react-icons/si";
import { RiAdminFill } from "react-icons/ri";
import grafanaImg from "@/public/grafana.jpg";
import openstackImg from "@/public/openstack.png";
import simplewarpImg from "@/public/simplewarp.jpg";
import kuttImg from "@/public/kutt-main.jpg";
import hastebinImg from "@/public/hastebin.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "SimpleWarp",
    location: "Bremen, Germany",
    description:
      "I published one of my first Minecraft plugins. It was a simple warp plugin which developed over time to an advanced plugin with over 25k Downloads.",
    icon: React.createElement(TbBrandMinecraft),
    date: "2020",
  },
  {
    title: "Learned about Administration",
    location: "Bremen, Germany",
    description:
      "I learned much about general systemadministration and network administration. I also learned alot about Kubernetes and cloud based infrastructure.",
    icon: React.createElement(BiLogoKubernetes),
    date: "2020 - 2023",
  },
  {
    title: "CCNA Certification",
    location: "Bremen, Germany",
    description:
      "I got Cisco CCNA certified. I learned much about networking and network administration.",
    icon: React.createElement(SiCisco),
    date: "2023",
  },
  {
    title: "Systemadministrator",
    location: "Bremen - Überseestadt, Germany",
    description: 
      "I started working as a systemadministrator.",
    icon: React.createElement(RiAdminFill),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Grafana",
    description:
      "I deployed Grafana on a multinode dual-stack Kubernetes cluster. I used Terraform to deploy Grafana and prometheus.",
    tags: ["Kubernetes", "grafana", "prometheus", "helm", "Terraform"],
    imageUrl: grafanaImg,
  },
  {
    title: "OpenStack",
    description:
      "I deployed OpenStack on a multinode OpenStack cluster in 2 different regions. I also deployed a custom skyline Dashboard. On OpenStack I deployed a Fortigate VM instance.",
    tags: ["OpenStack", "skyline", "cloud", "Fortinet", "Fortigate", "VM"],
    imageUrl: openstackImg,
  },
  {
    title: "SimpleWarp",
    description:
      "I coded a simple warp plugin for Minecraft in Kotlin. It was one of my first plugins and developed over time to an advanced plugin with over 25k Downloads.",
    tags: ["Kotlin", "Minecraft", "plugin", "Spigot", "DevBukkit"],
    imageUrl: simplewarpImg,
  },
  {
    title: "Kutt",
    description: 
      "I deployed a self-hosted URL shortener on a Kubernetes cluster. Kutt was deployed using Terraform. You can use for free with statistics it at kutt.marylieh.social.",
    tags: ["Kubernetes", "Terraform", "kutt", "url-shortener"],
    imageUrl: kuttImg,
  },
  {
    title: "Hastebin",
    description: 
      "I deployed a self-hosted hastebin on a Kubernetes cluster. Hastebin was deployed using Terraform. You can use it for free at hastebin.marylieh.social.",
    tags: ["Kubernetes", "Terraform", "hastebin", "pastebin"],
    imageUrl: hastebinImg,
  },
] as const;

export const skillsData = [
  "Kubernetes",
  "grafana",
  "prometheus",
  "helm",
  "Terraform",
  "OpenStack",
  "skyline",
  "cloud",
  "Fortinet",
  "Fortigate",
  "VM",
  "Kotlin",
  "Minecraft",
  "plugin",
  "Spigot",
  "DevBukkit",
  "Huawei",
] as const;
