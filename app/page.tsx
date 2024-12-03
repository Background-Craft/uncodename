"use client";

import { useState } from "react";
import { Sparkles, RefreshCcw, Copy } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { adjectives, nouns } from "@/lib/data";

const getRandomElement = (array: string[], previous: string) => {
  let result;
  do {
    result = array[Math.floor(Math.random() * array.length)];
  } while (result === previous);
  return result;
};

const generateCodename = (prevAdj: string, prevNoun: string) => {
  const adj = getRandomElement(adjectives, prevAdj);
  const noun = getRandomElement(nouns, prevNoun);
  return {
    codename: `${adj}-${noun}-${Math.floor(Math.random() * 1000)}`,
    adj,
    noun,
  };
};

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
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-lg bg-gray-800 text-white border-gray-700">
          <CardHeader>
            <CardTitle className="text-3xl font-bold flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-yellow-500" />
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
                <div className="text-2xl font-mono font-bold text-green-400">
                  {currentCodename.codename}
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={handleNewCodename}>
                  <RefreshCcw className="w-4 h-4 mr-2" />
                  Generate Another
                </Button>
                <Button
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white"
                  onClick={handleCopy}>
                  <Copy className="w-4 h-4 mr-2" />
                  {copyText}
                </Button>
              </div>

              <div className="text-sm text-gray-400 mt-6">
                <p>
                  * Perfect for secret projects, usernames, or pretending you're
                  a spy.
                </p>
                <p>
                  * We're not responsible for any identity crises that may
                  occur.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <footer className="p-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Background Craft LLC. All rights reserved.
      </footer>
    </div>
  );
};

export default UncodenameGenerator;
