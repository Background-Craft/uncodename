"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { generateCodename } from "@/lib/utils/codename";
import HyperText from "@/components/ui/hyper-text";
import LogoSquare from "@/components/logos/square";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconCopy,
  IconRefresh,
} from "@tabler/icons-react";
import Link from "next/link";

const UncodenameGenerator = () => {
  const [currentCodename, setCurrentCodename] = useState({
    codename: "mysterious-agent-000",
    adj: "mysterious",
    noun: "agent",
  });
  const [copyText, setCopyText] = useState("Copy");
  const [prevAdj, setPrevAdj] = useState("mysterious");
  const [prevNoun, setPrevNoun] = useState("agent");

  const handleNewCodename = () => {
    const newCodename = generateCodename(prevAdj, prevNoun);
    setCurrentCodename(newCodename);
    setPrevAdj(newCodename.adj);
    setPrevNoun(newCodename.noun);
    setCopyText("Copy");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCodename.codename);
    setCopyText("Copied!");
    setTimeout(() => setCopyText("Copy"), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <div className="flex justify-center gap-4 p-4 text-gray-300">
        <Link href="https://backgroundcraft.com" target="_blank">
          <LogoSquare className="w-6 h-6 " />
        </Link>
        <Link href="https://x.com/background_bots" target="_blank">
          <IconBrandX strokeWidth={1} className="w-6 h-6 " />
        </Link>
        <Link href="https://github.com/background-craft" target="_blank">
          <IconBrandGithub strokeWidth={1} className="w-6 h-6 " />
        </Link>
        <Link
          href="https://linkedin.com/company/backgroundcraft"
          target="_blank">
          <IconBrandLinkedin strokeWidth={1} className="w-6 h-6 " />
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-lg bg-gray-800 text-white border-gray-700">
          <CardHeader>
            <CardTitle className="text-3xl font-bold flex items-center gap-2">
              <LogoSquare className="w-8 h-8" />
              uncodename
            </CardTitle>
            <CardDescription className="text-gray-400">
              Need a codename? We got you, you mysterious bastard.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <h2 className="text-sm text-gray-400 mb-2">
                  Your sneaky little codename is:
                </h2>
                <HyperText
                  text={currentCodename.codename}
                  className="text-2xl font-bold text-green-400"
                  animateOnLoad={false}
                  duration={100}
                />
              </div>

              <div className="flex gap-4">
                <Button
                  className="flex-1 bg-green-500 hover:bg-green-700 text-gray-900"
                  onClick={handleNewCodename}>
                  <IconRefresh className="w-4 h-4 mr-2" />
                  Generate Another
                </Button>
                <Button
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white"
                  onClick={handleCopy}>
                  <IconCopy className="w-4 h-4 mr-2" />
                  {copyText}
                </Button>
              </div>

              <div className="text-sm text-gray-400 mt-6">
                <p>
                  * Perfect for secret projects, usernames, or pretending
                  you&apos;re a spy.
                </p>
                <p>
                  * We&apos;re not responsible for any identity crises that may
                  occur.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <footer className="p-4 text-center text-sm text-gray-500">
        Crafted with questionable wisdom by the chaotic minds at{" "}
        <a
          href="https://backgroundcraft.com"
          className="hover:text-gray-400 transition-colors underline underline-offset-2">
          Background Craft
        </a>
        . Don&apos;t blame us if your new identity is too powerful.
        <br />© {new Date().getFullYear()} Background Craft LLC. All rights
        reserved.
      </footer>
    </div>
  );
};

export default UncodenameGenerator;
