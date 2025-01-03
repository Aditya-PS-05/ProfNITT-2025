import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
export default function UserReviews() {
  return (
    <section className="p-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Users Say
      </h2>
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
        <Card className="p-6 text-center">
          <p className="text-lg text-gray-700">
            ProfNITT, your helper to define Finance for yourself
          </p>
          <div className="mt-4">
            <Image
              src="user1.png"
              width={100}
              height={100}
              alt="User 1"
              className="w-12 h-12 rounded-full mx-auto"
            />
            <div className="mt-2 text-gray-800">John Doe, Developer</div>
          </div>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-lg text-gray-700">
            Great Articles
          </p>
          <div className="mt-4">
            <Image
              src="user2.png"
              width={100}
              height={100}
              alt="User 2"
              className="w-12 h-12 rounded-full mx-auto"
            />
            <div className="mt-2 text-gray-800">Jane Smith, Designer</div>
          </div>
        </Card>
      </div>
    </section>
  );
}
