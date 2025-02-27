import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Food & Wellness Guide",
    description:
      "A personalized recipe suggestion system using Gemini-1.0-vision LLM.",
    tech: "HTML, CSS, Python, Flask",
  },
  {
    title: "Spotify Clone",
    description: "Full-stack music app using React.js, Node.js, and MongoDB.",
    tech: "React.js, Node.js, MongoDB",
  },
  {
    title: "Brain Tumor Detection",
    description: "Deep learning model with VGG19 achieving 97% accuracy.",
    tech: "Python, OpenCV, CNN",
  },
  {
    title: "Face Recognition System",
    description: "Real-time face recognition using TensorFlow and OpenCV.",
    tech: "Python, TensorFlow, OpenCV",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <header className="text-center text-3xl font-bold mb-6">
        Sumit Kumar Upadhyay
      </header>
      <section className="text-center mb-6">
        <p>B.Tech in IT | Frontend Developer | Python Enthusiast</p>
        <div className="flex justify-center gap-4 mt-2">
          <a
            href="https://www.linkedin.com/in/sumit-kumar-upadhayay-a7704a247/"
            target="_blank"
            className="text-blue-400 text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:sumitupadhayay12445@gmail.com"
            className="text-red-400 text-xl"
          >
            <FaEnvelope />
          </a>
        </div>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-800 p-4 rounded-lg">
              <CardContent>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                <p className="text-sm text-yellow-400 mt-2">{project.tech}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <footer className="text-center mt-8">
        <Button className="bg-blue-600">Contact Me</Button>
      </footer>
    </div>
  );
}
