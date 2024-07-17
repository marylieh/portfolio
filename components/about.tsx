"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm primarily interested in DevOps and currently work as a{" "}
        <span className="font-medium">systemadministrator</span>.
        I have programmed{" "} <span className="font-medium">Minecraft plugins </span>
        and like to develop{" "} <span className="font-medium">discord bots</span> as well.
        I'm absolutely fascinated about container orchestration systems like{" "}
        <span className="font-medium">Kubernetes</span> as well as cloud based infrastructure.
        I also plan to get{" "} <span className="font-medium">CKA</span> certified in the near future.
        I'm also experienced in{" "} <span className="italic">network administration</span>.
        Especially with{" "} <span className="font-medium">Huawei</span>, <span className="font-medium">Ubiquiti</span> and{" "} <span className="font-medium">Fortinet</span> devices.
      </p>

      <p>
        <span className="italic">Outside of work</span>, I'm interested in
        following the development of science, especially in space.{" "}
        <span className="font-medium">I play video games and like to watch anime</span>. I am currently
        learning about{" "}
        <span className="font-medium">Artifical Intelligence and Deep Learning</span>
      </p>
    </motion.section>
  );
}
