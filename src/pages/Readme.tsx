import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Readme = () => {
  return (
    <div className="relative overflow-hidden min-h-screen bg-black text-white">
      {/* Left Aura Glow */}
      <motion.div
        className="pointer-events-none absolute top-0 bottom-0 left-0 w-60 bg-gradient-to-r from-blue-300/90 to-transparent blur-[160px]"
        initial={{ opacity: 0.4, scale: 1 }}
        animate={{ opacity: [0.4, 0.9, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Right Aura Glow */}
      <motion.div
        className="pointer-events-none absolute top-0 bottom-0 right-0 w-60 bg-gradient-to-l from-blue-300/90 to-transparent blur-[160px]"
        initial={{ opacity: 0.4, scale: 1 }}
        animate={{ opacity: [0.4, 0.9, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 p-4 md:p-8 max-w-4xl mx-auto">
        <Link to="/">
          <Button variant="outline" className="mb-8">
            ← Back to App
          </Button>
        </Link>

        <ScrollArea className="h-[calc(100vh-150px)] pr-4">
          <div className="space-y-8 text-left">
            <h1 className="text-4xl font-bold mb-6 text-white">
              🖤 Shadow Monarch’s ASL Vision
            </h1>
            <p>
              <em className="text-lg italic text-white">
                "Even in darkness, I see everything." — Sung Jin-Woo
              </em>
            </p>
            <p>
              This app is an ASL hand sign recognition tool inspired by the shadows. It uses a trained neural network to identify hand gestures from uploaded images. The current UI only supports drag-and-drop image uploads.
            </p>

            {/* Prerequisites Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                ⚔ Prerequisites – Prepare Your Arsenal
              </h2>
              <p>Before summoning predictions, equip your machine with these essential tools:</p>
              <p className="text-white font-semibold">
                Download Node.js from{' '}
                <a href="https://nodejs.org/en/download/" className="text-blue-400 underline">
                  here
                </a>
                .
              </p>
              <pre className="bg-[#1a3054] text-white font-bold rounded p-4 overflow-x-auto text-sm font-mono">
npm install
              </pre>
              <pre className="bg-[#1a3054] text-white font-bold rounded p-4 overflow-x-auto text-sm font-mono">
npm run dev
              </pre>
              <pre className="bg-[#1a3054] text-white font-bold rounded p-4 overflow-x-auto text-sm font-mono">
pip install -r requirements.txt
              </pre>
              <pre className="bg-[#1a3054] text-white font-bold rounded p-4 overflow-x-auto text-sm font-mono">
uvicorn backend:app --reload --port 8000
              </pre>
            </section>

            {/* Usage Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                🖐 How to Use — Wield the Power of Gesture
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Prepare your hand gesture as an image (28x28 grayscale preferred).</li>
                <li>Drag & drop the image into the drop zone of the app.</li>
                <li>The model will instantly predict the digit with precision.</li>
              </ol>
            </section>

            {/* Dataset Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                📚 Dataset — Knowledge of the Shadows
              </h2>
              <p>
                Our model is trained on the ancient Sign Language MNIST dataset, a collection of grayscale images representing American Sign Language (ASL) hand gestures. Each image is 28x28 pixels.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Classes:</strong> 24 letters (A–Y, excluding J and Z which require motion)</li>
                <li><strong>Training Samples:</strong> 27,455 images</li>
                <li><strong>Testing Samples:</strong> 7,172 images</li>
                <li><strong>Format:</strong> Flattened 784-value grayscale images</li>
              </ul>
            </section>

            {/* Backend AI Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                🧠 Backend AI — Shadow Training Rituals
              </h2>
              <p>
                The neural network model used for ASL classification is built using Keras and TensorFlow. Data exploration and preprocessing include:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Visualization via <code>matplotlib</code> and <code>seaborn</code></li>
                <li>Data scaling using <code>StandardScaler</code></li>
                <li>Dimensionality reduction with <code>PCA</code> and <code>TSNE</code></li>
                <li>Model architecture includes Conv2D, MaxPooling, BatchNorm, Dropout, and L2 regularization</li>
              </ul>
            </section>

            {/* Project Details Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                💡 Project Details — Echoes of the Void
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Frontend: React-based UI with a dark, themed interface.</li>
                <li>Backend: FastAPI serves model predictions through HTTP.</li>
                <li>Model: Trained convolutional neural network (CNN) built in Keras.</li>
                <li>Functionality: Users upload ASL digit images for recognition.</li>
                <li>Live Feedback: Predictions returned in real-time with animations.</li>
                <li>Theme: UI heavily inspired by <strong>Solo Leveling</strong>.</li>
              </ul>
            </section>

            {/* Final Words Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                🌌 Final Words
              </h2>
              <blockquote className="border-l-4 border-gray-600 pl-4 italic text-white">
                "The stronger you become, the more you can protect." — Sung Jin-Woo
              </blockquote>
              <p className="text-white font-semibold">
                For more info click{' '}
                <a href="https://shattereddisk.github.io/rickroll/rickroll.mp4" className="text-blue-400 underline">
                  here
                </a>
                .
              </p>
              <p>
                This project isn't just code — it's a conduit for accessibility and style. May your gestures pierce through the digital void.
              </p>
            </section>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Readme;